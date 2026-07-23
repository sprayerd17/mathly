import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (symmetry roles) ─────────────────────────────────────────
// line of symmetry (confirmed)     → blue   (#2563eb)
// symmetrical / matches            → green  (#16a34a)
// not symmetrical / does not match → red    (#dc2626)
// number of lines / direction      → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Symmetry',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TESTING A LINE OF SYMMETRY (NOT JUST VERTICAL)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'testing-a-line-of-symmetry',
      title: 'Testing a Line of Symmetry',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">A ${bl('line of symmetry')} divides a shape into two halves that are exact mirror images of each other — if you folded the shape along that line, the two halves would land perfectly on top of one another. In earlier grades, most lines of symmetry you tested were drawn ${or('straight up and down (vertical)')}. This year, you must be able to test <strong>any</strong> line drawn on a shape — ${or('vertical')}, ${or('horizontal')}, or ${or('diagonal')} — and decide whether it is genuinely a line of symmetry.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('confirmed line of symmetry')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('halves match')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('halves do NOT match')}</span>` +
        `</div>` +

        // ── The fold test ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The fold (or mirror) test</p>` +
        `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">To test whether <strong>any</strong> drawn line is a line of symmetry: imagine folding the shape exactly along that line. Compare the two halves point by point along the edge of the shape. If every point on one side has a matching point on the other side, ${gr('the halves match')} and the line <strong>is</strong> a line of symmetry. If even one part sticks out or is missing on one side, ${re('the halves do NOT match')} and the line is <strong>not</strong> a line of symmetry — even if the line passes through the middle of the shape.</p>` +
        `</div>` +

        // ── Common trap ──────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Passing through the middle is not enough</p>` +
        `<p style="margin:0;color:#9a3412;">A line can pass through the exact centre of a shape and still ${re('not')} be a line of symmetry. What matters is whether the two halves are true mirror images — always check the actual shape of each half, not just where the line is positioned.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle (not a square) has a diagonal line drawn from one corner to the opposite corner. Is this diagonal a line of symmetry?',
          answer: `No — the diagonal is ${re('not')} a line of symmetry`,
          steps: [
            `Imagine folding the rectangle along the diagonal. This creates two triangles.`,
            `Compare the two triangles. Because the rectangle's sides are different lengths (length ≠ width), the two triangles are the same size and shape, but they do ${re('not')} line up as mirror images along that fold — the right-angle corners end up in different positions relative to the fold line.`,
            `The halves do ${re('not match as a reflection')}, so the diagonal is ${re('not')} a line of symmetry for a rectangle.`,
            `A rectangle's only lines of symmetry are its ${bl('vertical')} and ${bl('horizontal')} midlines.`,
          ],
        },
        {
          question: 'A regular hexagon has a line drawn through two opposite corners. Is this a line of symmetry?',
          answer: `Yes — it ${gr('is')} a line of symmetry`,
          steps: [
            `In a regular hexagon, all sides and angles are equal.`,
            `A line through two opposite corners splits the hexagon into two identical halves that are mirror images of each other.`,
            `The halves ${gr('match exactly')}, so this line ${gr('is')} a line of symmetry.`,
            `A regular hexagon actually has 6 lines of symmetry in total — 3 through pairs of opposite corners, and 3 through the midpoints of pairs of opposite sides.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A shape is folded along a line, and the two halves land exactly on top of each other with no part sticking out on either side. Is this line a line of symmetry?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes'],
          explanation: 'If the two halves match exactly when folded, with no part left over on either side, the line is a line of symmetry.',
        },
        {
          difficulty: 'Medium',
          question: 'A square has a diagonal line drawn from one corner to the opposite corner. Is this diagonal a line of symmetry? Explain why.',
          answer: 'Yes, the diagonal of a square is a line of symmetry. Because all four sides of a square are equal in length and all four angles are 90°, folding along a diagonal produces two identical right-angled triangles that are exact mirror images of each other.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Zanele says: "Any line that passes exactly through the centre of a shape must be a line of symmetry." Use a non-square rectangle\'s diagonal to explain why Zanele is incorrect.',
          answer: 'Zanele is incorrect. A non-square rectangle\'s diagonal passes exactly through its centre, but it is not a line of symmetry — folding along the diagonal produces two triangles that do not mirror each other correctly, because the rectangle\'s length and width are different. Passing through the centre is necessary for a line of symmetry, but it is not enough on its own — the two halves must also be true mirror images of each other along that exact line.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video demonstrating the fold test for lines of symmetry, showing how to check vertical, horizontal and diagonal lines, and why a rectangle\'s diagonal fails the test while a square\'s diagonal passes it',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIAGONALS OF QUADRILATERALS AS LINES OF SYMMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'diagonals-of-quadrilaterals',
      title: 'Diagonals of Quadrilaterals',
      icon: '◇',
      explanation:
        `<p style="margin-bottom:16px;">A ${or('diagonal')} is a straight line joining two corners of a shape that are not next to each other. In quadrilaterals (4-sided shapes), some diagonals are ${bl('lines of symmetry')} and some are not — it depends on the properties of that particular quadrilateral. Knowing the properties of each quadrilateral helps you predict, and then check, whether its diagonals are lines of symmetry.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('diagonal')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('line of symmetry')}</span>` +
        `</div>` +

        // ── Quadrilateral diagonal table ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Do the diagonals give lines of symmetry?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${gr('Both diagonals')}</strong> are lines of symmetry (plus the vertical and horizontal midlines — 4 lines in total). All sides are equal.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Rhombus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${gr('Both diagonals')}</strong> are lines of symmetry (2 lines in total). All sides are equal, but angles are not all 90°.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Rectangle (not a square)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${re('Neither diagonal')}</strong> is a line of symmetry (only the vertical and horizontal midlines — 2 lines in total). Sides are not all equal.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Parallelogram (slanted)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${re('Neither diagonal')}</strong> is a line of symmetry — it has 0 lines of symmetry at all.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kite</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('One diagonal')} (the long one, between the two different pairs of equal sides) is a line of symmetry. The other diagonal is not.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why the equal-sides rule matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">A diagonal is more likely to be a ${bl('line of symmetry')} when it separates the shape into two halves with matching side lengths on either side of the fold. This is why the diagonals of a square and a rhombus (all four sides equal) work, but the diagonals of a plain rectangle or slanted parallelogram (opposite sides equal, but adjacent sides different) do not.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rhombus has all four sides equal, but its angles are not right angles. Are its diagonals lines of symmetry?',
          answer: `Yes — ${gr('both diagonals')} of a rhombus are lines of symmetry`,
          steps: [
            `A rhombus has ${bl('4 equal sides')}.`,
            `Folding along either diagonal splits the rhombus into two triangles that share two equal sides each, making them mirror images.`,
            `Both diagonals ${gr('produce matching halves')}, so both diagonals are lines of symmetry.`,
            `A rhombus has ${gr('2 lines of symmetry')} in total — both are diagonals (it has no vertical/horizontal lines of symmetry unless it is also a square).`,
          ],
        },
        {
          question: 'A kite has two pairs of adjacent equal sides, but the two pairs are different lengths from each other. Which diagonal, if any, is a line of symmetry?',
          answer: `Only the ${bl('long diagonal')} (between the two different pairs of sides) is a line of symmetry`,
          steps: [
            `In a kite, one diagonal runs between the two corners where the different pairs of sides meet — this is the ${bl('long diagonal')}.`,
            `Folding along this diagonal, each pair of equal sides mirrors the other pair exactly, so the halves ${gr('match')}.`,
            `The other (short) diagonal joins the two corners where two equal sides meet — folding along it does ${re('not')} produce matching halves, because the two triangles it creates are different shapes.`,
            `Only the ${bl('long diagonal')} of a kite is a line of symmetry, giving the kite ${gr('1 line of symmetry')} in total.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Does a square have a diagonal that is a line of symmetry?',
          answer: 'yes',
          checkMode: 'auto',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes'],
          explanation: 'A square has 4 equal sides, so both of its diagonals are lines of symmetry.',
        },
        {
          difficulty: 'Medium',
          question: 'A plain (non-square) rectangle has a diagonal drawn on it. Is this diagonal a line of symmetry? How many lines of symmetry does the rectangle have in total, and what type are they?',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'a) Is the diagonal a line of symmetry?', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'A non-square rectangle has sides of two different lengths, so folding along a diagonal does not produce matching mirror halves.' },
            { label: 'b) Total lines of symmetry, and their type', correctAnswer: '2 vertical and horizontal', correctAnswers: ['2 vertical and horizontal', '2, vertical and horizontal', 'two, vertical and horizontal', '2 (vertical and horizontal)'], explanation: 'A rectangle has 2 lines of symmetry — one vertical and one horizontal midline. Its diagonals are not lines of symmetry.' },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Thabo says: "A kite has two diagonals, so it must have 2 lines of symmetry, just like a rectangle." Explain why Thabo is incorrect, and state the correct number of lines of symmetry a kite has.',
          answer: 'Thabo is incorrect. Having two diagonals does not mean both are lines of symmetry — it depends on whether each diagonal actually produces matching mirror halves. A kite has two pairs of adjacent equal sides, but the two pairs are different lengths from each other. Only the long diagonal (which runs between the two corners where the different pairs of sides meet) splits the kite into two mirror-image halves. The short diagonal does not, because it creates two differently shaped triangles. So a kite has only 1 line of symmetry, not 2.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video comparing the diagonals of a square, rhombus, rectangle, parallelogram and kite, showing which diagonals are lines of symmetry and linking this to each shape\'s equal-side properties',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — DRAWING LINES OF SYMMETRY AND COMPLETING SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-lines-of-symmetry',
      title: 'Drawing Lines of Symmetry and Completing Shapes',
      icon: '✏️',
      explanation:
        `<p style="margin-bottom:16px;">Besides testing whether a given line is a line of symmetry, you also need to be able to ${or('draw')} lines of symmetry onto a shape yourself, and to ${or('complete')} a shape when only half of it (and its line of symmetry) is shown. When completing a shape, every point on the missing half must be the same distance from the line of symmetry as its matching point on the given half — just on the opposite side.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('line of symmetry')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('given half')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('completed / matching half')}</span>` +
        `</div>` +

        // ── Steps to complete a shape ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Completing a shape using its line of symmetry</p>` +
        `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">1) Find how far each corner of the ${or('given half')} is from the ${bl('line of symmetry')}. 2) Mark a matching point the ${gr('same distance')} away on the opposite side of the line. 3) Join the new points in the same order to redraw the ${gr('missing half')}. 4) Check your work by imagining folding along the line — the two halves should match exactly.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Symmetry in shapes with more than one line</p>` +
        `<p style="margin:0;color:#1e3a8a;">Some shapes, like a square or a regular hexagon, have <strong>more than one</strong> ${bl('line of symmetry')}. When drawing all the lines of symmetry for such a shape, work through each possible fold direction systematically — vertical, horizontal, then diagonal — so that you don't miss any.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Half of a symmetrical shape is drawn, together with its vertical line of symmetry. One corner of the given half is 3 cm from the line of symmetry. Where should the matching corner on the other half be drawn?',
          answer: `The matching corner should be drawn ${gr('3 cm from the line of symmetry')}, on the opposite side`,
          steps: [
            `The ${or('given half')}'s corner is ${or('3 cm')} from the ${bl('line of symmetry')}.`,
            `For the two halves to be mirror images, the matching corner on the missing half must be exactly the ${gr('same distance')} (3 cm) from the line, but on the opposite side.`,
            `The matching corner is drawn ${gr('3 cm')} from the line of symmetry, on the other side.`,
          ],
        },
        {
          question: 'How many lines of symmetry should you draw on a square, and in which directions?',
          answer: `${bl('4 lines')}: one vertical, one horizontal, and two diagonal`,
          steps: [
            `Check a ${or('vertical')} fold down the middle — both sides match. That's 1 line.`,
            `Check a ${or('horizontal')} fold across the middle — both sides match. That's 2 lines.`,
            `Check both ${or('diagonal')} folds, corner to corner — both match, because all sides of a square are equal. That's 3 and 4.`,
            `A square has ${bl('4 lines of symmetry')} in total: vertical, horizontal, and both diagonals.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'When completing a symmetrical shape from its line of symmetry, should the missing half be drawn the same distance from the line as the matching part of the given half, or a different distance?',
          answer: 'the same distance',
          checkMode: 'auto',
          correctAnswer: 'the same distance',
          correctAnswers: ['the same distance', 'same distance', 'same'],
          explanation: 'Every point on the missing half must be exactly the same distance from the line of symmetry as its matching point on the given half, just on the opposite side, so that the two halves are true mirror images.',
        },
        {
          difficulty: 'Medium',
          question: 'Half of a symmetrical shape is given, with a horizontal line of symmetry. One point on the given half is 4 cm above the line, and another point is 1.5 cm above the line. How far below the line should the two matching points on the missing half be drawn?',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'a) Distance below the line for the point that was 4 cm above', correctAnswer: '4', correctAnswers: ['4', '4cm', '4 cm'], explanation: 'The matching point must be the same distance from the line, but on the opposite side: 4 cm below the line.' },
            { label: 'b) Distance below the line for the point that was 1.5 cm above', correctAnswer: '1.5', correctAnswers: ['1.5', '1,5', '1.5cm', '1,5cm', '1.5 cm', '1,5 cm'], explanation: 'The matching point must be the same distance from the line, but on the opposite side: 1.5 cm below the line.' },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A student completes half of a symmetrical butterfly shape by copying the given half onto the other side of the line of symmetry, without flipping it, so it looks the same as the original half instead of a mirror image. Explain what is wrong with this method, and describe the correct method.',
          answer: 'The student\'s method is incorrect because simply copying (translating) the given half produces two identical halves facing the same way, not two mirror-image halves — the result would not fold together to match along the line of symmetry. The correct method is to reflect the given half: for every point on the given half, measure its distance from the line of symmetry, then mark a new point that same distance away on the opposite side of the line, directly across from the original point. Joining these reflected points recreates a true mirror image, which is what a genuine line of symmetry requires.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        'Short video demonstrating how to complete a symmetrical shape by measuring distances from the line of symmetry and reflecting points to the opposite side, including an example with a diagonal line of symmetry',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Fold-test yes/no (incl. non-vertical) | 4-7 Count/classify lines
    // in shapes | 8-11 Quadrilateral diagonals | 12-14 Completing shapes (distance
    // reasoning) | 15-17 Error-spotting | 18-19 Multi-step / comparison reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A shape is folded along a line and the two halves match exactly, with nothing sticking out on either side. Is this line a line of symmetry?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'If the two halves match exactly when folded, the line is a line of symmetry — regardless of whether it is vertical, horizontal or diagonal.' },
        { difficulty: 'Easy', question: 'A rectangle (not a square) has a line drawn from one corner to the opposite corner, as shown below. Is this diagonal a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'A non-square rectangle has sides of two different lengths, so folding along a diagonal does not produce two matching mirror halves.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="35" x2="185" y2="135" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A square has a line drawn from one corner to the opposite corner, as shown below. Is this diagonal a line of symmetry?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'A square has 4 equal sides, so folding along either diagonal produces two identical mirror-image triangles.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="35" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="35" x2="160" y2="135" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A shape has a line drawn through its exact centre, but when folded along that line, one side has a bump that the other side does not have. Is this line a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Passing through the centre of a shape is not enough on its own — the two halves must be true mirror images. If one side has a feature the other lacks, the halves do not match, so it is not a line of symmetry.' },
        { difficulty: 'Easy-Medium', question: 'How many lines of symmetry does a square have?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A square has 4 lines of symmetry: one vertical, one horizontal, and two diagonal.' },
        { difficulty: 'Easy-Medium', question: 'A rhombus has 4 equal sides but no right angles. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A rhombus has 2 lines of symmetry, and both of them are its diagonals — it has no vertical or horizontal line of symmetry unless it is also a square.' },
        { difficulty: 'Easy-Medium', question: 'An isosceles triangle has two equal sides and one line of symmetry. Is this line vertical, horizontal or diagonal when the triangle is drawn with its unequal side flat along the bottom?', checkMode: 'auto', correctAnswer: 'vertical', correctAnswers: ['vertical'], explanation: 'When an isosceles triangle is drawn with its unequal (base) side flat along the bottom, its one line of symmetry runs straight up and down from the top vertex to the midpoint of the base — this is a vertical line.' },
        { difficulty: 'Medium', question: 'A regular hexagon (6 equal sides, 6 equal angles) has lines of symmetry through pairs of opposite corners, and also through the midpoints of pairs of opposite sides. How many lines of symmetry does it have in total?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A regular hexagon has 6 lines of symmetry: 3 through pairs of opposite corners, and 3 through the midpoints of pairs of opposite sides.' },
        { difficulty: 'Medium', question: 'A kite has two pairs of adjacent equal sides, but the pairs are different lengths from each other. How many lines of symmetry does a kite have?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'one'], explanation: 'A kite has only 1 line of symmetry — the long diagonal that runs between the two corners where the different pairs of sides meet.' },
        { difficulty: 'Medium', question: 'Does a rhombus\'s diagonal count as a line of symmetry? Explain why, referring to its side lengths.', answer: 'Yes, both diagonals of a rhombus are lines of symmetry. Because all four sides of a rhombus are equal in length, folding along either diagonal creates two triangles with matching side lengths that are true mirror images of each other.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A parallelogram is slanted, with no right angles and two pairs of parallel but unequal adjacent sides. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], explanation: 'A slanted parallelogram (not a rectangle or rhombus) has 0 lines of symmetry — neither its diagonals nor any vertical or horizontal line produces matching mirror halves.' },
        { difficulty: 'Medium', question: 'A kite\'s two diagonals are drawn. One is the long diagonal (between the two corners where the different pairs of sides meet), and the other is the short diagonal (between the two corners where equal sides meet). Which one is the line of symmetry?', checkMode: 'auto', correctAnswer: 'the long diagonal', correctAnswers: ['the long diagonal', 'long diagonal', 'long one'], explanation: 'Only the long diagonal of a kite is a line of symmetry. Folding along it makes each pair of equal sides mirror the other pair. The short diagonal does not produce matching halves.' },
        { difficulty: 'Medium', question: 'A square, a rhombus, and a non-square rectangle are compared. Which of these three shapes has diagonals that are NOT lines of symmetry?', checkMode: 'auto', correctAnswer: 'rectangle', correctAnswers: ['rectangle', 'the rectangle', 'non-square rectangle'], explanation: 'A rectangle (that is not a square) has unequal adjacent sides, so its diagonals do not create mirror-image halves. Both the square and the rhombus have all 4 sides equal, so both of their diagonals are lines of symmetry.' },
        { difficulty: 'Medium', question: 'Half of a symmetrical shape is drawn with a vertical line of symmetry. A corner on the given half is 5 cm from the line. How far from the line should the matching corner on the missing half be drawn?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'For the two halves to be true mirror images, the matching point must be exactly the same distance from the line of symmetry: 5 cm, on the opposite side.' },
        { difficulty: 'Medium', question: 'Half of a symmetrical shape is drawn with a horizontal line of symmetry. A point on the given half is 2.5 cm above the line, and another is 6 cm above the line. How far below the line should the two matching points on the completed half be drawn?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Distance below the line for the point 2.5 cm above', correctAnswer: '2.5', correctAnswers: ['2.5', '2,5', '2.5cm', '2,5cm'], explanation: 'The matching point must be the same distance from the line: 2.5 cm below.' },
          { label: 'b) Distance below the line for the point 6 cm above', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], explanation: 'The matching point must be the same distance from the line: 6 cm below.' },
        ] },
        { difficulty: 'Medium', question: 'A student is completing half of a symmetrical shape and draws the matching point at a different distance from the line of symmetry than the original point. Will the completed shape be truly symmetrical? Explain.', answer: 'No, the completed shape will not be truly symmetrical. For a shape to have a genuine line of symmetry, every point on one half must be exactly the same distance from the line as its matching point on the other half. If the distances are different, folding the shape along that line will not make the two halves land on top of each other, so the shape will not be symmetrical.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student claims: "Every quadrilateral with 4 equal sides has both diagonals as lines of symmetry, because all the sides are the same length." Is this true for both a square and a rhombus? Explain.', answer: 'Yes, this is true for both. A square and a rhombus both have all 4 sides equal in length. In both cases, folding along either diagonal creates two triangles that share equal sides on both sides of the fold, making them true mirror images. So both the square (4 equal sides and 4 right angles) and the rhombus (4 equal sides, no right angles) have both diagonals as lines of symmetry. The key requirement is equal side lengths meeting at the fold, not the angle sizes.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student claims: "A shape can have a line of symmetry even if the line is diagonal, as long as it passes through the middle." Use the diagonal of a non-square rectangle to show this claim is too simple, and explain what extra condition is actually needed.', answer: 'The claim is too simple. A non-square rectangle\'s diagonal does pass through the exact middle of the shape, but it is still not a line of symmetry, because folding along it produces two triangles that do not match as mirror images (the rectangle\'s length and width are different, so the triangles, although equal in area, are not reflections of each other across that particular line). The extra condition needed is that every point on one side of the line must have a matching point the same distance away on the other side — passing through the centre is necessary but not sufficient on its own.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a rhombus and a kite. Both have diagonals, but a rhombus has 2 lines of symmetry while a kite has only 1. Explain the difference in their side lengths that causes this.', answer: 'In a rhombus, all 4 sides are equal in length, so both diagonals split it into matching mirror-image triangles — giving 2 lines of symmetry. In a kite, there are two pairs of adjacent equal sides, but the two pairs are different lengths from each other (for example, two sides of 3 cm and two sides of 5 cm). Only the long diagonal (between the corners where the different pairs meet) produces matching halves; the short diagonal does not, because it would try to match a 3 cm side against a 5 cm side. Because a kite\'s sides are not all equal like a rhombus\'s, only one of its diagonals works as a line of symmetry, not both.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A composite shape is made from a square with an equilateral triangle attached exactly centred on top of one side (like a simple house drawing). The square alone has 4 lines of symmetry, and the triangle alone has 3. Explain how many lines of symmetry the composite house shape has, and why most of the original lines are lost.', answer: 'The composite house shape has only 1 line of symmetry — the single vertical line through the peak of the triangle and the midpoint of the square\'s base. Most of the original lines are lost because the triangle is attached to only one side of the square, breaking the balance needed for the other folds. For example, the square\'s horizontal line of symmetry would try to match the pointed triangle roof against the flat bottom of the square — these are different shapes, so they cannot match. Only the one vertical line that both the triangle and the square individually share still works for the combined shape.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can confidently test, draw and reason about lines of symmetry in any shape, including quadrilateral diagonals.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the fold test and the quadrilateral diagonal rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A shape is folded along a line and one part sticks out further than the matching part on the other side. Is this line a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'If the two halves do not match exactly when folded, the line is not a line of symmetry, even if it looks close.' },
        { difficulty: 'Easy', question: 'A rhombus (4 equal sides, no right angles) has a line drawn from one corner to the opposite corner, as shown below. Is this diagonal a line of symmetry?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'A rhombus has 4 equal sides, so folding along either diagonal produces two matching mirror-image triangles.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,30 170,85 110,140 50,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="140" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A slanted parallelogram (no right angles, unequal adjacent sides) has a line drawn from one corner to the opposite corner, as shown below. Is this diagonal a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'A slanted parallelogram has unequal adjacent sides, so neither diagonal produces matching mirror halves — a parallelogram has 0 lines of symmetry.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="70,35 185,35 150,135 35,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="35" x2="150" y2="135" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A line is drawn on a shape that is not through the centre of the shape at all. Can this line still be a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'A line of symmetry must divide a shape into two equal, mirror-image halves, which means it must pass through the centre of the shape. A line that misses the centre cannot be a line of symmetry.' },
        { difficulty: 'Easy-Medium', question: 'How many lines of symmetry does a regular hexagon have?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A regular hexagon has 6 lines of symmetry — 3 through pairs of opposite corners and 3 through the midpoints of pairs of opposite sides.' },
        { difficulty: 'Easy-Medium', question: 'A square has how many lines of symmetry?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'four'], explanation: 'A square has 4 lines of symmetry: vertical, horizontal, and both diagonals.' },
        { difficulty: 'Easy-Medium', question: 'An equilateral triangle has 3 equal sides and 3 lines of symmetry. Are these lines of symmetry all the same length as each other?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'Yes — because an equilateral triangle has 3 equal sides and 3 equal angles, its 3 lines of symmetry (each from a vertex to the midpoint of the opposite side) are all the same length as each other.' },
        { difficulty: 'Medium', question: 'A plain (non-square) rectangle has how many lines of symmetry, and what type are they?', checkMode: 'auto', correctAnswer: '2 vertical and horizontal', correctAnswers: ['2 vertical and horizontal', '2, vertical and horizontal', 'two, vertical and horizontal', '2 (vertical and horizontal)'], explanation: 'A non-square rectangle has 2 lines of symmetry — one vertical and one horizontal midline. Its diagonals are not lines of symmetry.' },
        { difficulty: 'Medium', question: 'A kite has two pairs of adjacent equal sides of different lengths from each other. Which diagonal is its line of symmetry — the long one or the short one?', checkMode: 'auto', correctAnswer: 'the long diagonal', correctAnswers: ['the long diagonal', 'long diagonal', 'long one'], explanation: 'Only the long diagonal of a kite (between the corners where the different pairs of sides meet) is a line of symmetry.' },
        { difficulty: 'Medium', question: 'Explain why a square has more lines of symmetry (4) than a rhombus (2), even though both shapes have 4 equal sides.', answer: 'A square has all 4 sides equal AND all 4 angles equal to 90°, while a rhombus has all 4 sides equal but its angles are not 90°. The equal sides give both shapes their 2 diagonal lines of symmetry. But because a square\'s angles are also all equal (and it has two pairs of parallel sides meeting at right angles), it gains 2 extra lines of symmetry — the vertical and horizontal midlines — which a slanted rhombus does not have, since a horizontal or vertical fold on a rhombus does not produce matching halves unless the angles are also 90°.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A square, a kite, and a slanted parallelogram are compared. Which one has 0 lines of symmetry?', checkMode: 'auto', correctAnswer: 'the parallelogram', correctAnswers: ['the parallelogram', 'parallelogram', 'slanted parallelogram'], explanation: 'A slanted parallelogram (not a rectangle or rhombus) has 0 lines of symmetry. A square has 4, and a kite has 1.' },
        { difficulty: 'Medium', question: 'A kite\'s short diagonal (between the corners where the two equal sides meet) is drawn. Is this diagonal a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'The short diagonal of a kite is not a line of symmetry — only the long diagonal (between the corners where the different pairs of sides meet) produces matching mirror halves.' },
        { difficulty: 'Medium', question: 'A square and a rectangle (not a square) both have diagonals drawn. In which of these two shapes are the diagonals lines of symmetry?', checkMode: 'auto', correctAnswer: 'the square', correctAnswers: ['the square', 'square'], explanation: 'A square\'s diagonals are lines of symmetry because all 4 sides are equal. A non-square rectangle\'s diagonals are not lines of symmetry because its sides are not all equal.' },
        { difficulty: 'Medium', question: 'Half of a symmetrical shape is drawn with a vertical line of symmetry. A corner on the given half is 7 cm from the line. How far from the line should the matching corner on the missing half be drawn?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'The matching point must be exactly the same distance from the line of symmetry: 7 cm, on the opposite side.' },
        { difficulty: 'Medium', question: 'Half of a symmetrical shape is drawn with a horizontal line of symmetry. A point on the given half is 1 cm above the line, and another is 4.5 cm above the line. How far below the line should the two matching points on the completed half be drawn?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Distance below the line for the point 1 cm above', correctAnswer: '1', correctAnswers: ['1', '1cm', '1 cm'], explanation: 'The matching point must be the same distance from the line: 1 cm below.' },
          { label: 'b) Distance below the line for the point 4.5 cm above', correctAnswer: '4.5', correctAnswers: ['4.5', '4,5', '4.5cm', '4,5cm'], explanation: 'The matching point must be the same distance from the line: 4.5 cm below.' },
        ] },
        { difficulty: 'Medium', question: 'A student completes half of a symmetrical shape but accidentally shifts every point 1 cm closer to the line of symmetry than it should be. Will the completed shape have a genuine line of symmetry along that line? Explain.', answer: 'No, the completed shape will not have a genuine line of symmetry along that line. Even though the general outline might look similar, every point must be exactly the same distance from the line as its matching point on the other half. Shifting all the points by 1 cm means they are no longer the same distance from the line as the original points, so folding the shape would not make the two halves land exactly on top of each other.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student claims: "A rhombus and a square are basically the same shape, so they must have the same number of lines of symmetry." Explain why this is incorrect, referring to their angles.', answer: 'This is incorrect. While both a rhombus and a square have 4 equal sides, a square additionally has all 4 angles equal to 90°, whereas a rhombus does not (unless it happens to be a square). This extra property gives the square 2 more lines of symmetry — the vertical and horizontal midlines — on top of the 2 diagonal lines of symmetry that both shapes share from their equal sides. So a square has 4 lines of symmetry in total, while a rhombus has only 2. Equal sides alone do not guarantee the same number of lines of symmetry; the angles matter too.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student claims: "A kite has two diagonals, and since diagonals often give lines of symmetry in quadrilaterals, a kite must have 2 lines of symmetry." Explain why this reasoning is flawed, and state the kite\'s actual number of lines of symmetry.', answer: 'This reasoning is flawed because not every diagonal in every quadrilateral is automatically a line of symmetry — it depends on whether folding along that specific diagonal produces true mirror-image halves. In a kite, the two pairs of adjacent equal sides are different lengths from each other. Only the long diagonal (between the corners where the different pairs of sides meet) produces matching halves. The short diagonal does not, because it would try to match one pair of equal sides against a differently sized pair. So a kite has only 1 line of symmetry, not 2 — simply having two diagonals does not guarantee two lines of symmetry.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a square and a regular hexagon. Which shape has more lines of symmetry, and by how many?', checkMode: 'auto', correctAnswer: 'hexagon by 2', correctAnswers: ['hexagon by 2', 'the hexagon by 2', 'hexagon, 2 more'], explanation: 'A regular hexagon has 6 lines of symmetry, and a square has 4. The difference is 6 − 4 = 2, so the hexagon has 2 more lines of symmetry than the square.' },
        { difficulty: 'Hard', question: 'A composite shape is made from a rhombus with a small equilateral triangle attached exactly centred on one of its sides (pointing outward). The rhombus alone has 2 lines of symmetry (both diagonals). Explain how many lines of symmetry the composite shape has, and why the rhombus\'s original diagonals may no longer work.', answer: 'The composite shape has at most 1 line of symmetry, and only if the triangle is attached exactly centred on one side, aligned with one of the rhombus\'s original diagonals. If the triangle is attached to a side rather than at a corner where a diagonal starts, neither of the rhombus\'s original diagonals will still work as lines of symmetry for the combined shape, because the added triangle sits unevenly on one side of each of those diagonal folds — one half would include the triangle bump and the other half would not. Only a line that happens to pass through both the triangle\'s attachment point and the corresponding point on the rhombus in a way that keeps both halves balanced could still be a line of symmetry, and in most such combined shapes this reduces the total to at most 1 line, or sometimes 0, depending on exactly where the triangle is attached.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can confidently test, draw and reason about lines of symmetry in any shape, including quadrilateral diagonals.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the fold test and the quadrilateral diagonal rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A shape is folded along a line, and every point on one side has a perfectly matching point on the other side. Is this line a line of symmetry?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'If every point matches exactly when folded along the line, then the line is a line of symmetry.' },
        { difficulty: 'Easy', question: 'A kite has its long diagonal drawn (between the corners where its two different pairs of equal sides meet), as shown below. Is this diagonal a line of symmetry?', checkMode: 'auto', correctAnswer: 'yes', correctAnswers: ['yes', 'Yes'], explanation: 'The long diagonal of a kite is a line of symmetry — folding along it makes each pair of equal sides mirror the other pair.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,30 160,75 110,145 60,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="145" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A kite has its short diagonal drawn (between the corners where its two equal sides meet), as shown below. Is this diagonal a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'The short diagonal of a kite is not a line of symmetry — only the long diagonal produces matching mirror halves.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,30 160,75 110,145 60,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="75" x2="160" y2="75" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'A line drawn on a shape splits it into two pieces of equal area, but the two pieces are different shapes. Is this line necessarily a line of symmetry?', checkMode: 'auto', correctAnswer: 'no', correctAnswers: ['no', 'No'], explanation: 'Equal area is not the same as being a mirror image. A line of symmetry requires the two halves to be true mirror images of each other, point for point — not just equal in area.' },
        { difficulty: 'Easy-Medium', question: 'How many lines of symmetry does a rhombus (4 equal sides, no right angles) have?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'two'], explanation: 'A rhombus has 2 lines of symmetry, and both of them are its diagonals.' },
        { difficulty: 'Easy-Medium', question: 'A regular hexagon has how many lines of symmetry?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'six'], explanation: 'A regular hexagon has 6 lines of symmetry — 3 through pairs of opposite corners, and 3 through the midpoints of pairs of opposite sides.' },
        { difficulty: 'Easy-Medium', question: 'A scalene triangle has three sides that are all different lengths. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], explanation: 'A scalene triangle has 0 lines of symmetry — since all three sides are different lengths, no fold can ever produce two matching mirror halves.' },
        { difficulty: 'Medium', question: 'A square has how many lines of symmetry, and what types are they?', checkMode: 'auto', correctAnswer: '4 vertical horizontal and two diagonal', correctAnswers: ['4, vertical, horizontal and two diagonal', '4 vertical horizontal and two diagonal', 'four, vertical, horizontal and both diagonals', '4 (vertical, horizontal, 2 diagonal)'], explanation: 'A square has 4 lines of symmetry: one vertical, one horizontal, and two diagonal (because all 4 sides are equal and all 4 angles are 90°).' },
        { difficulty: 'Medium', question: 'A slanted parallelogram (no right angles, adjacent sides of different lengths) is examined. How many lines of symmetry does it have?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'zero', 'none'], explanation: 'A slanted parallelogram has 0 lines of symmetry — neither its diagonals nor a vertical/horizontal line produces matching mirror halves.' },
        { difficulty: 'Medium', question: 'Explain why the diagonal of a rectangle (not a square) fails the fold test, even though it passes through the exact centre of the rectangle.', answer: 'The diagonal of a non-square rectangle passes through the centre, but when you fold along it, the two triangular halves are equal in area and the same shape as each other, but they are not positioned as true mirror images across that exact fold line — the right-angle corner of each triangle ends up on the wrong side to match its partner. Passing through the centre is necessary for a line of symmetry, but the two halves must also line up as an exact reflection, which only happens for a rectangle\'s vertical and horizontal midlines, not its diagonals.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A square, a rhombus and a kite are compared. Which of these three shapes has the fewest lines of symmetry?', checkMode: 'auto', correctAnswer: 'the kite', correctAnswers: ['the kite', 'kite'], explanation: 'A kite has only 1 line of symmetry, compared to 2 for a rhombus and 4 for a square.' },
        { difficulty: 'Medium', question: 'A rhombus has both of its diagonals drawn. A rectangle (not a square) also has both diagonals drawn. In which shape are BOTH diagonals lines of symmetry?', checkMode: 'auto', correctAnswer: 'the rhombus', correctAnswers: ['the rhombus', 'rhombus'], explanation: 'In a rhombus, all 4 sides are equal, so both diagonals are lines of symmetry. In a non-square rectangle, neither diagonal is a line of symmetry.' },
        { difficulty: 'Medium', question: 'A kite\'s long diagonal and a square\'s diagonal are both lines of symmetry. What is the key property that both a kite\'s long diagonal and a square\'s diagonal rely on to be a genuine line of symmetry?', checkMode: 'auto', correctAnswer: 'equal sides meeting at the fold', correctAnswers: ['equal sides meeting at the fold', 'equal sides on each side of the fold', 'the sides on each side must be equal'], explanation: 'In both cases, the diagonal only works as a line of symmetry because the two sides meeting at each end of the fold are equal in length — in a square all sides are equal, and in a kite each pair of adjacent sides along the long diagonal is equal.' },
        { difficulty: 'Medium', question: 'Half of a symmetrical logo is drawn with a diagonal line of symmetry. A point on the given half is 6 cm from the line, measured at a right angle to the line. How far from the line, measured the same way, should the matching point on the missing half be drawn?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], explanation: 'Regardless of whether the line of symmetry is vertical, horizontal or diagonal, the matching point must be exactly the same perpendicular distance from the line: 6 cm, on the opposite side.' },
        { difficulty: 'Medium', question: 'Half of a symmetrical shape is drawn with a vertical line of symmetry. A point on the given half is 3 cm to the left of the line, and another is 8 cm to the left of the line. How far to the right of the line should the two matching points on the completed half be drawn?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Distance to the right of the line for the point 3 cm to the left', correctAnswer: '3', correctAnswers: ['3', '3cm', '3 cm'], explanation: 'The matching point must be the same distance from the line: 3 cm to the right.' },
          { label: 'b) Distance to the right of the line for the point 8 cm to the left', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'The matching point must be the same distance from the line: 8 cm to the right.' },
        ] },
        { difficulty: 'Medium', question: 'A student draws the missing half of a symmetrical shape using a diagonal line of symmetry, but measures each matching point\'s distance straight across horizontally instead of at a right angle to the diagonal line. Explain why this will produce an incorrect result.', answer: 'This will produce an incorrect result because a line of symmetry requires distances to be measured perpendicular (at a right angle) to the line itself, not simply straight across horizontally. When the line of symmetry is diagonal, "straight across horizontally" is not the same direction as "at a right angle to the line," so measuring the wrong way will place the reflected points in the wrong positions, and the completed shape will not fold exactly onto itself along the diagonal line.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student claims: "A kite and a rhombus both have 4 sides arranged as two pairs of equal adjacent sides, so they must have the same number of lines of symmetry." Explain why this is incorrect.', answer: 'This is incorrect because in a rhombus, all 4 sides are equal to each other (not just two separate pairs), while in a kite, there are two pairs of adjacent equal sides that are different lengths from each other. This difference matters: in a rhombus, both diagonals produce matching mirror halves because every side used in each fold is the same length, giving 2 lines of symmetry. In a kite, only the long diagonal produces matching halves, because the short diagonal would try to match sides of two different lengths against each other, giving just 1 line of symmetry. Having "two pairs of adjacent equal sides" is not the same condition as "all four sides equal," so the two shapes do not have the same number of lines of symmetry.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A student claims: "Since a square has 4 lines of symmetry and a rectangle has 2, a shape halfway between a square and a rectangle (like a rectangle that is almost, but not quite, a square) must have 3 lines of symmetry." Explain why this reasoning is incorrect.', answer: 'This reasoning is incorrect because the number of lines of symmetry does not change gradually as a shape\'s proportions change — it depends on an exact property (all sides equal) being true or not. As long as a rectangle\'s length and width are not exactly equal, even if they are very close, its diagonals still fail to produce matching mirror halves, so it still has exactly 2 lines of symmetry (vertical and horizontal), not 3. Only when the length and width become exactly equal does the shape become a square and suddenly gain the extra 2 diagonal lines of symmetry, jumping straight from 2 to 4. There is no in-between shape with exactly 3 lines of symmetry in this family of shapes.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Compare a rhombus and a regular hexagon. Which shape has more lines of symmetry, and by how many?', checkMode: 'auto', correctAnswer: 'hexagon by 4', correctAnswers: ['hexagon by 4', 'the hexagon by 4', 'hexagon, 4 more'], explanation: 'A regular hexagon has 6 lines of symmetry, and a rhombus has 2. The difference is 6 − 2 = 4, so the hexagon has 4 more lines of symmetry than the rhombus.' },
        { difficulty: 'Hard', question: 'A composite shape is made from a kite with a small square attached exactly centred on the kite\'s long diagonal, at the wider end. The kite alone has 1 line of symmetry (its long diagonal). Explain whether the composite shape still has this line of symmetry, and why attaching the square in this specific position preserves it while attaching it off-centre would not.', answer: 'If the small square is attached exactly centred on the kite\'s long diagonal, the composite shape still has that same line of symmetry, because the square itself is symmetrical about a line through its centre, and lining that line of symmetry up exactly with the kite\'s existing long diagonal means both the kite part and the square part reflect correctly across the same fold. However, if the square were attached off-centre (shifted to one side of the long diagonal), the square\'s own left and right sides would no longer be balanced across the kite\'s diagonal, so folding along that line would leave part of the square unmatched on one side — breaking the symmetry. Precise, centred alignment with the existing line of symmetry is essential for the combined shape to keep that line.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You can confidently test, draw and reason about lines of symmetry in any shape, including quadrilateral diagonals.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the fold test and the quadrilateral diagonal rules, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered symmetry.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered symmetry.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
