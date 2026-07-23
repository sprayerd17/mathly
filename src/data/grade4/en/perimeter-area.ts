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
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // ── Block A: Finding Perimeter (positions 0-3, Easy) ──
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 12 cm and width 6 cm.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'Perimeter = 12 + 6 + 12 + 6 = 36 cm.' },
        { difficulty: 'Easy', question: 'An irregular pentagon has sides of 3 cm, 4 cm, 5 cm, 6 cm and 7 cm, as shown below. Find its perimeter.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25', '25 cm'], explanation: 'Add all five sides: 3 + 4 + 5 + 6 + 7 = 25 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 140,30 165,90 110,140 40,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3 cm</text><text x="158" y="55" font-size="13" font-weight="700" fill="#2563eb">4 cm</text><text x="150" y="118" font-size="13" font-weight="700" fill="#2563eb">5 cm</text><text x="75" y="128" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">6 cm</text><text x="30" y="62" font-size="13" font-weight="700" fill="#2563eb" text-anchor="end">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'A rectangular sheet of card is 250 mm long and 12 cm wide. Convert the length to cm, then find the perimeter of the card in cm.', answer: '74 cm', checkMode: 'auto', correctAnswer: '74cm', correctAnswers: ['74cm', '74', '74 cm'], explanation: 'Convert 250 mm to cm first: 250 ÷ 10 = 25 cm. Perimeter = 25 + 12 + 25 + 12 = 74 cm. All sides must be in the same unit before adding.' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 46 cm. Its width is 9 cm. Find its length.', answer: '14 cm', checkMode: 'auto', correctAnswer: '14cm', correctAnswers: ['14cm', '14', '14 cm'], explanation: 'Perimeter = 2 × (length + width), so 46 = 2 × (length + 9). Divide by 2: 23 = length + 9. Length = 23 − 9 = 14 cm.' },

        // ── Block B: Finding Area (positions 4-7, Easy-Medium) ──
        { difficulty: 'Easy', question: 'A rectangle on a grid is 9 squares long and 3 squares wide. Find its area.', answer: '27 square units', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27squareunits', '27 square units', '27cm²', '27cm2', '27 cm²', '27 cm2'], explanation: 'Count or multiply: 9 × 3 = 27 square units.' },
        { difficulty: 'Medium', question: 'The picture below shows an irregular shape drawn on a 1 m² grid. Count the full squares and half squares to find its total area.', answer: '10 square units', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10squareunits', '10 square units'], explanation: 'There are 8 full squares shaded blue and 4 half squares shaded yellow. 4 half squares = 2 full squares. Total = 8 + 2 = 10 square units.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Using the same grid picture, if each square represents 1 m², how many more full squares would need to be shaded to turn this shape into a complete 3-square by 4-square rectangle?', answer: '2 squares', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2squares', '2 squares'], explanation: 'A 3 by 4 rectangle covers 12 full squares. The shape already fills 8 full squares (the 4 half squares are only partly filled), so 12 − 8 = 2 more full squares would be needed, on top of completing the 4 half squares.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'A rectangle on a grid has an area of 36 square units. It is 9 squares long. How many squares wide is it?', answer: '4 squares', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4squares', '4 squares'], explanation: 'Width = area ÷ length = 36 ÷ 9 = 4 squares.' },

        // ── Block C: Working Backwards (positions 8-10, Medium) ──
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 40 cm. Its length is 12 cm. Find its width.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Perimeter = 2 × (length + width), so 40 = 2 × (12 + width). Divide by 2: 20 = 12 + width. Width = 20 − 12 = 8 cm.' },
        { difficulty: 'Medium', question: 'A square has a perimeter of 48 cm. Find the length of each side.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], explanation: 'A square has 4 equal sides, so divide the perimeter by 4: 48 ÷ 4 = 12 cm.' },
        { difficulty: 'Medium', question: 'A triangle has a perimeter of 22 cm. Two of its sides are 8 cm and 6 cm. Find the length of the third side.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Third side = perimeter − (sum of known sides) = 22 − (8 + 6) = 22 − 14 = 8 cm.' },

        // ── Block D: Error-Spotting & Comparison (positions 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Kagiso says: "To find the perimeter of a 9 cm by 4 cm rectangle, I multiply 9 × 4 to get 36 cm." Is Kagiso correct? Explain the mistake and give the correct perimeter.', answer: 'No, Kagiso is incorrect. He calculated the area (9 × 4 = 36 cm²), not the perimeter. Perimeter means adding all four sides: 9 + 4 + 9 + 4 = 26 cm. Kagiso confused the multiplication rule for area with the addition rule for perimeter.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A 5 × 2 rectangle and a 4 × 3 rectangle — which has the bigger area?', answer: 'The 4 × 3 rectangle. 5 × 2 = 10 cm² and 4 × 3 = 12 cm².', checkMode: 'auto', correctAnswer: '4x3', correctAnswers: ['4x3', '4 x 3 rectangle', 'the 4x3 rectangle', '4×3', 'the 4 x 3 rectangle'], explanation: 'Area of 5 × 2 = 10 cm². Area of 4 × 3 = 12 cm². The 4 × 3 rectangle has the bigger area.' },
        { difficulty: 'Medium', question: 'A square with sides of 6 cm and a rectangle 9 cm by 4 cm both have the same area. What is that area?', answer: '36 cm²', checkMode: 'auto', correctAnswer: '36cm²', correctAnswers: ['36cm²', '36cm2', '36', '36 cm²', '36 cm2'], explanation: 'Square area = 6 × 6 = 36 cm². Rectangle area = 9 × 4 = 36 cm². Both shapes have an area of 36 cm².' },

        // ── Block E: Real-World Word Problems (positions 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'A garden is 10 m long and 6 m wide. How much fencing is needed to go around the entire garden?', answer: '32 m', checkMode: 'auto', correctAnswer: '32m', correctAnswers: ['32m', '32', '32 m'], explanation: 'Key word "fencing around" means perimeter. Perimeter = 10 + 6 + 10 + 6 = 32 m of fencing.' },
        { difficulty: 'Medium', question: 'A room measuring 7 m by 4 m needs new carpet. Carpet costs R120 per square metre. First decide whether you need perimeter or area, then find the total cost.', answer: 'R3 360', checkMode: 'auto', correctAnswer: 'R3360', correctAnswers: ['R3360', '3360', 'R3 360', 'r3360'], explanation: 'Carpeting a floor needs area, not perimeter. Area = 7 × 4 = 28 m². Cost = 28 × R120 = R3 360.' },
        { difficulty: 'Medium', question: 'Before a school sports day, the running track needs a painted line marking the outside edge of the rectangular field, which is 45 m long and 20 m wide. How many metres of line paint are needed?', answer: '130 m', checkMode: 'auto', correctAnswer: '130m', correctAnswers: ['130m', '130', '130 m'], explanation: 'A line marking the outside edge of the field is the perimeter. Perimeter = 45 + 20 + 45 + 20 = 130 m.' },
        { difficulty: 'Hard', question: 'A square garden has sides of 9 m. Fencing costs R30 per metre. What is the total cost of fencing the garden?', answer: 'R1 080', checkMode: 'auto', correctAnswer: 'R1080', correctAnswers: ['R1080', '1080', 'R1 080', 'r1080'], explanation: 'Perimeter = 9 × 4 = 36 m. Cost = 36 × R30 = R1 080.' },

        // ── Block F: Multi-Step Applications & Justify-Your-Reasoning (positions 18-19, Hard) ──
        { difficulty: 'Hard', question: 'The picture below shows an L-shaped garden made up of a rectangle 8 m by 5 m and a smaller rectangle 4 m by 3 m sitting on top of it. Find the total area of the garden.', answer: '52 m²', checkMode: 'auto', correctAnswer: '52m²', correctAnswers: ['52m²', '52m2', '52', '52 m²', '52 m2'], explanation: 'Area of large rectangle = 8 × 5 = 40 m². Area of small rectangle = 4 × 3 = 12 m². Total area = 40 + 12 = 52 m².', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,60 86,60 86,18 142,18 142,130 30,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="120" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="132" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="86" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">8 m</text><text x="18" y="98" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">5 m</text><text x="114" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4 m</text><text x="152" y="42" font-size="13" font-weight="700" fill="#2563eb">3 m</text></svg>' },
        { difficulty: 'Hard', question: 'Explain, using an example with numbers, whether two rectangles can have the same area but different perimeters.', answer: 'Yes. For example, a rectangle that is 4 m by 9 m has an area of 36 m² (4 × 9 = 36) and a perimeter of 26 m (4+9+4+9=26). A rectangle that is 6 m by 6 m also has an area of 36 m² (6 × 6 = 36) but a perimeter of only 24 m (6+6+6+6=24). Both rectangles have the same area but different perimeters.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Find the perimeter of a square with sides of 15 cm.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: 'Perimeter = 15 + 15 + 15 + 15 = 60 cm.' },
        { difficulty: 'Easy', question: 'A regular hexagon has 6 equal sides of 6 cm each. Find its perimeter.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'A regular hexagon has 6 equal sides. Perimeter = 6 × 6 = 36 cm.' },
        { difficulty: 'Medium', question: 'One side of a triangle is given as 40 mm, another is 6 cm, and the third is 5 cm. Convert all sides to cm and find the perimeter.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15', '15 cm'], explanation: 'Convert 40 mm to cm: 40 ÷ 10 = 4 cm. Perimeter = 4 + 6 + 5 = 15 cm. Always convert to the same unit before adding sides.' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 54 cm. Its width is 9 cm. Find its length.', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], explanation: 'Perimeter = 2 × (length + width), so 54 = 2 × (length + 9). Divide by 2: 27 = length + 9. Length = 27 − 9 = 18 cm.' },

        // ── Block B: Finding Area (positions 4-7, Easy-Medium) ──
        { difficulty: 'Easy', question: 'A rectangle on a grid is 8 squares long and 5 squares wide. Find its area.', answer: '40 square units', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40squareunits', '40 square units', '40cm²', '40cm2', '40 cm²', '40 cm2'], explanation: 'Count or multiply: 8 × 5 = 40 square units.' },
        { difficulty: 'Medium', question: 'The picture below shows an irregular shape drawn on a 1 m² grid. Count the full squares and half squares to find its total area.', answer: '12 square units', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12squareunits', '12 square units'], explanation: 'There are 9 full squares shaded blue and 6 half squares shaded yellow. 6 half squares = 3 full squares. Total = 9 + 3 = 12 square units.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Using the same grid picture, how many square units would be added if just the 6 half squares were each completed into full squares (without changing any other part of the shape)?', answer: '3 square units', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3squareunits', '3 square units'], explanation: 'Each half square needs another half added to become a full square. Completing 6 half squares adds 6 halves = 3 full square units to the total.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'A rectangle on a grid has an area of 48 square units. It is 6 squares wide. How many squares long is it?', answer: '8 squares', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8squares', '8 squares'], explanation: 'Length = area ÷ width = 48 ÷ 6 = 8 squares.' },

        // ── Block C: Working Backwards (positions 8-10, Medium) ──
        { difficulty: 'Medium', question: 'A square has a perimeter of 36 cm. Find the length of each side.', answer: '9 cm', checkMode: 'auto', correctAnswer: '9cm', correctAnswers: ['9cm', '9', '9 cm'], explanation: 'A square has 4 equal sides, so divide the perimeter by 4: 36 ÷ 4 = 9 cm.' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 50 cm. Its length is 14 cm. Find its width.', answer: '11 cm', checkMode: 'auto', correctAnswer: '11cm', correctAnswers: ['11cm', '11', '11 cm'], explanation: 'Perimeter = 2 × (length + width), so 50 = 2 × (14 + width). Divide by 2: 25 = 14 + width. Width = 25 − 14 = 11 cm.' },
        { difficulty: 'Medium', question: 'An isosceles triangle has a perimeter of 29 cm. Its two equal sides are each 11 cm. Find the length of the base.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7', '7 cm'], explanation: 'Base = perimeter − (sum of the two equal sides) = 29 − (11 + 11) = 29 − 22 = 7 cm.' },

        // ── Block D: Error-Spotting & Comparison (positions 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Thandeka says: "An isosceles triangle with sides 7 cm, 7 cm and 4 cm has a perimeter of 4 × 3 = 12 cm because there are 3 sides." Explain what is wrong with her reasoning and give the correct perimeter.', answer: 'Thandeka is incorrect. She tried to multiply as if all three sides were equal, but only two of the three sides are equal in an isosceles triangle (7 cm and 7 cm), while the base (4 cm) is different. The correct method is to add all three sides: 7 + 7 + 4 = 18 cm.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A rectangle is 3 cm by 8 cm and a square has sides of 5 cm. Which shape has the bigger perimeter?', answer: 'The rectangle. Its perimeter is 22 cm and the square\'s perimeter is 20 cm.', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'the rectangle'], explanation: 'Rectangle perimeter = 3 + 8 + 3 + 8 = 22 cm. Square perimeter = 5 × 4 = 20 cm. The rectangle has the bigger perimeter.' },
        { difficulty: 'Hard', question: 'Shape A is 8 cm by 3 cm and Shape B is 6 cm by 4 cm. Both have the same area. Which shape has the smaller perimeter?', answer: 'Shape B. It has a perimeter of 20 cm compared to Shape A\'s 22 cm.', checkMode: 'auto', correctAnswer: 'shapeb', correctAnswers: ['shapeb', 'shape b', 'b', 'shapeB', 'Shape B', 'ShapeB'], explanation: 'Area of A = 8 × 3 = 24 cm². Area of B = 6 × 4 = 24 cm² (same area). Perimeter of A = 8+3+8+3 = 22 cm. Perimeter of B = 6+4+6+4 = 20 cm. Shape B has the smaller perimeter.' },

        // ── Block E: Real-World Word Problems (positions 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'A wall is 6 m long and 3 m high and needs a fresh coat of paint. Decide whether you need perimeter or area, then work out how much wall surface must be painted.', answer: '18 m²', checkMode: 'auto', correctAnswer: '18m²', correctAnswers: ['18m²', '18m2', '18', '18 m²', '18 m2'], explanation: 'Painting a wall covers surface, so you need area, not perimeter. Area = 6 × 3 = 18 m².' },
        { difficulty: 'Medium', question: 'A picture frame border is a rectangle 30 cm by 20 cm. Find the length of the border.', answer: '100 cm', checkMode: 'auto', correctAnswer: '100cm', correctAnswers: ['100cm', '100', '100 cm'], explanation: 'A border runs around the outside, so this is perimeter. Perimeter = 30 + 20 + 30 + 20 = 100 cm.' },
        { difficulty: 'Medium', question: 'A hockey court shaped like a rectangle is 45 m long and 20 m wide, with an alcove for the seating area cut into one corner that is ignored for this question. How far would a player run if they jogged once around the outside edge of the full rectangle?', answer: '130 m', checkMode: 'auto', correctAnswer: '130m', correctAnswers: ['130m', '130', '130 m'], explanation: 'Running around the outside edge means perimeter. Perimeter = 45 + 20 + 45 + 20 = 130 m.' },
        { difficulty: 'Hard', question: 'A floor is 11 m long and 8 m wide. Tiles cost R50 per square metre. What is the total cost of tiling the floor?', answer: 'R4 400', checkMode: 'auto', correctAnswer: 'R4400', correctAnswers: ['R4400', '4400', 'R4 400', 'r4400'], explanation: 'Tiling a floor needs area. Area = 11 × 8 = 88 m². Cost = 88 × R50 = R4 400.' },

        // ── Block F: Multi-Step Applications & Justify-Your-Reasoning (positions 18-19, Hard) ──
        { difficulty: 'Hard', question: 'The picture below shows a rectangular swimming pool 8 m by 4 m surrounded by a paved path 1 m wide on all sides, making the total outer rectangle 10 m by 6 m. Find the area of the path only.', answer: '28 m²', checkMode: 'auto', correctAnswer: '28m²', correctAnswers: ['28m²', '28m2', '28', '28 m²', '28 m2'], explanation: 'Outer area = 10 × 6 = 60 m². Pool area = 8 × 4 = 32 m². Path area = 60 − 32 = 28 m².', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="140" height="84" fill="#fde68a" stroke="#0f1f3d" stroke-width="2.5"/><rect x="44" y="44" width="112" height="56" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2"/><text x="100" y="22" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="76" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="100" y="60" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">8 m</text><text x="180" y="76" font-size="12" font-weight="700" fill="#1e40af">4 m</text><text x="100" y="128" font-size="12" fill="#9a6f00" text-anchor="middle">shaded path, 1 m wide</text></svg>' },
        { difficulty: 'Hard', question: 'A square has an area of 36 cm² and a rectangle that is 12 cm by 3 cm also has an area of 36 cm². Explain which shape has the smaller perimeter, and why a square often has a smaller perimeter than other rectangles with the same area.', answer: 'The square has the smaller perimeter. The square (6 cm × 6 cm) has a perimeter of 24 cm (6+6+6+6=24), while the rectangle (12 cm × 3 cm) has a perimeter of 30 cm (12+3+12+3=30). A square usually has a smaller perimeter than other rectangles with the same area because its sides are as equal as possible, so it does not need extra length to "stretch out" the shape.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Find the perimeter of a rectangle with length 18 cm and width 9 cm.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54cm', correctAnswers: ['54cm', '54', '54 cm'], explanation: 'Perimeter = 18 + 9 + 18 + 9 = 54 cm.' },
        { difficulty: 'Easy', question: 'A regular octagon has 8 equal sides of 5 cm each. Find its perimeter.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40cm', correctAnswers: ['40cm', '40', '40 cm'], explanation: 'A regular octagon has 8 equal sides. Perimeter = 5 × 8 = 40 cm.' },
        { difficulty: 'Medium', question: 'A triangular flag has one side of 90 mm, another of 8 cm, and a third of 7 cm. Convert all sides to cm and find the perimeter of the flag.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24', '24 cm'], explanation: 'Convert 90 mm to cm: 90 ÷ 10 = 9 cm. Perimeter = 9 + 8 + 7 = 24 cm. Remember to convert all sides to the same unit before adding.' },
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 60 cm. Its width is 11 cm. Find its length.', answer: '19 cm', checkMode: 'auto', correctAnswer: '19cm', correctAnswers: ['19cm', '19', '19 cm'], explanation: 'Perimeter = 2 × (length + width), so 60 = 2 × (length + 11). Divide by 2: 30 = length + 11. Length = 30 − 11 = 19 cm.' },

        // ── Block B: Finding Area (positions 4-7, Easy-Medium) ──
        { difficulty: 'Easy', question: 'A rectangle on a grid is 10 squares long and 6 squares wide. Find its area.', answer: '60 square units', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60squareunits', '60 square units', '60cm²', '60cm2', '60 cm²', '60 cm2'], explanation: 'Count or multiply: 10 × 6 = 60 square units.' },
        { difficulty: 'Medium', question: 'The picture below shows an irregular shape drawn on a 1 m² grid. Count the full squares and half squares to find its total area.', answer: '13 square units', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13squareunits', '13 square units'], explanation: 'There are 11 full squares shaded blue and 4 half squares shaded yellow. 4 half squares = 2 full squares. Total = 11 + 2 = 13 square units.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Using the same grid picture, if each square represents 1 cm², what is the area of the shape in cm²?', answer: '13 cm²', checkMode: 'auto', correctAnswer: '13cm²', correctAnswers: ['13cm²', '13cm2', '13', '13 cm²', '13 cm2'], explanation: 'The shape covers 13 square units in total (11 full squares + 4 half squares = 11 + 2 = 13). Since each square is 1 cm², the area is 13 cm².', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'A rectangle on a grid has an area of 45 square units. It is 9 squares wide. How many squares long is it?', answer: '5 squares', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5squares', '5 squares'], explanation: 'Length = area ÷ width = 45 ÷ 9 = 5 squares.' },

        // ── Block C: Working Backwards (positions 8-10, Medium) ──
        { difficulty: 'Medium', question: 'A rectangle has a perimeter of 44 cm. Its width is 8 cm. Find its length.', answer: '14 cm', checkMode: 'auto', correctAnswer: '14cm', correctAnswers: ['14cm', '14', '14 cm'], explanation: 'Perimeter = 2 × (length + width), so 44 = 2 × (length + 8). Divide by 2: 22 = length + 8. Length = 22 − 8 = 14 cm.' },
        { difficulty: 'Medium', question: 'A square has a perimeter of 52 cm. Find the length of each side.', answer: '13 cm', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13', '13 cm'], explanation: 'A square has 4 equal sides, so divide the perimeter by 4: 52 ÷ 4 = 13 cm.' },
        { difficulty: 'Medium', question: 'A triangle has a perimeter of 26 cm. Two of its sides are 10 cm and 9 cm. Find the length of the third side.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7', '7 cm'], explanation: 'Third side = perimeter − (sum of known sides) = 26 − (10 + 9) = 26 − 19 = 7 cm.' },

        // ── Block D: Error-Spotting & Comparison (positions 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Sipho says: "A rectangle that is 10 cm long and 4 cm wide has a perimeter of 10 + 4 = 14 cm." Explain what is wrong with his working and give the correct perimeter.', answer: 'Sipho is incorrect. He only added one length and one width, but a rectangle has two lengths and two widths, so each must be counted twice. The correct perimeter is 10 + 4 + 10 + 4 = 28 cm (or 2 × (10 + 4) = 28 cm).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A rectangle is 15 cm by 4 cm and another rectangle is 12 cm by 5 cm. Both have the same area. Which has the bigger perimeter?', answer: 'The 15 cm by 4 cm rectangle. Its perimeter is 38 cm compared to 34 cm for the other rectangle.', checkMode: 'auto', correctAnswer: '15cmby4cm', correctAnswers: ['15cmby4cm', '15 by 4', '15x4', '15 cm by 4 cm', 'the 15 by 4 rectangle'], explanation: 'Both have area 60 cm² (15×4 = 60 and 12×5 = 60). Perimeter of 15×4 = 15+4+15+4 = 38 cm. Perimeter of 12×5 = 12+5+12+5 = 34 cm. The 15 by 4 rectangle has the bigger perimeter.' },
        { difficulty: 'Hard', question: 'Garden A is 15 m by 5 m and Garden B is 12 m by 8 m. Both gardens have the same perimeter. Which garden has the bigger area, and by how much?', answer: 'Garden B has the bigger area, by 21 m². Garden A\'s area is 75 m² and Garden B\'s area is 96 m².', checkMode: 'auto', correctAnswer: 'gardenb,21m²', correctAnswers: ['gardenb,21m²', 'garden b by 21', 'b, 21', 'garden b, 21 m²', 'gardenB21'], explanation: 'Both have perimeter 40 m (15+5+15+5=40 and 12+8+12+8=40). Area A = 15 × 5 = 75 m². Area B = 12 × 8 = 96 m². Garden B has the bigger area, by 96 − 75 = 21 m².' },

        // ── Block E: Real-World Word Problems (positions 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'How many square metre tiles are needed to cover a classroom floor that measures 8 m long and 5 m wide? Decide first whether the question needs perimeter or area.', answer: '40 m²', checkMode: 'auto', correctAnswer: '40m²', correctAnswers: ['40m²', '40m2', '40', '40 m²', '40 m2'], explanation: 'Covering a floor with tiles needs area, not perimeter. Area = 8 × 5 = 40 m². You need 40 tiles.' },
        { difficulty: 'Medium', question: 'A square plot of land has sides of 14 m. How much fencing is needed to enclose it?', answer: '56 m', checkMode: 'auto', correctAnswer: '56m', correctAnswers: ['56m', '56', '56 m'], explanation: 'Enclosing land with fencing needs perimeter. Perimeter = 14 × 4 = 56 m.' },
        { difficulty: 'Medium', question: 'A running track shaped like a rectangle has a straight section 50 m long and 30 m wide. Amahle jogs around the outside of the track twice. How far does she jog in total?', answer: '320 m', checkMode: 'auto', correctAnswer: '320m', correctAnswers: ['320m', '320', '320 m'], explanation: 'Jogging around the outside is perimeter. Perimeter = 50 + 30 + 50 + 30 = 160 m. Jogging around twice = 160 × 2 = 320 m.' },
        { difficulty: 'Hard', question: 'A hall measuring 24 m by 15 m needs its floor painted. Painting costs R45 per square metre. What is the total cost of painting the floor?', answer: 'R16 200', checkMode: 'auto', correctAnswer: 'R16200', correctAnswers: ['R16200', '16200', 'R16 200', 'r16200'], explanation: 'Painting a floor needs area. Area = 24 × 15 = 360 m². Cost = 360 × R45 = R16 200.' },

        // ── Block F: Multi-Step Applications & Justify-Your-Reasoning (positions 18-19, Hard) ──
        { difficulty: 'Hard', question: 'The picture below shows an L-shaped room made up of a rectangle 10 m by 6 m and a smaller rectangle 5 m by 4 m sitting on top of it. Find the total area of the room.', answer: '80 m²', checkMode: 'auto', correctAnswer: '80m²', correctAnswers: ['80m²', '80m2', '80', '80 m²', '80 m2'], explanation: 'Area of large rectangle = 10 × 6 = 60 m². Area of small rectangle = 5 × 4 = 20 m². Total area = 60 + 20 = 80 m².', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,66 90,66 90,18 150,18 150,138 30,138" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="128" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="140" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="90" y="154" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="106" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="120" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5 m</text><text x="160" y="46" font-size="13" font-weight="700" fill="#2563eb">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'Explain why the perimeter of a shape can change even when its area stays exactly the same.', answer: 'The perimeter depends on the shape\'s outline (how the sides are arranged), while the area depends only on how much space is enclosed. Rearranging the same amount of space into a longer, thinner shape increases the perimeter without changing the area, because more outside edge is needed to enclose the same space when it is stretched out.', checkMode: 'self' },
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
