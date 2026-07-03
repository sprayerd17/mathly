import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of straight lines roles) ────────────────────────
// given angle      → blue   (#2563eb)
// calculated angle → orange (#ea580c)
// relationship used→ green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of Straight Lines',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING ANGLE RELATIONSHIPS FROM INTERSECTING AND PARALLEL LINES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revising-angle-relationships',
      title: 'Revising Angle Relationships from Intersecting and Parallel Lines',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">We consolidate all angle relationships learned in Grade 8 — ${gr('vertically opposite angles')} (equal), ${gr('adjacent angles on a straight line')} (supplementary, adding to 180°), and angles formed by ${bl('parallel lines cut by a transversal')} (${gr('corresponding angles')} equal, ${gr('alternate angles')} equal, ${gr('co-interior angles')} supplementary).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given angle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('calculated angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('relationship used')}</span>` +
        `</div>` +

        // ── Key relationships ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key angle relationships</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vertically opposite</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">When two straight lines intersect, the angles opposite each other are <strong>equal</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Adjacent on a straight line</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Angles that form a straight line are <strong>supplementary</strong> — they add up to 180°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Corresponding angles (F-shape)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Equal</strong> when parallel lines are cut by a transversal.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Alternate angles (Z-shape)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Equal</strong> when parallel lines are cut by a transversal.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Co-interior angles (C-shape)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Supplementary</strong> (sum = 180°) when parallel lines are cut by a transversal.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always give a reason</p>` +
        `<p style="margin:0;color:#1e3a8a;">In Grade 9 every calculated angle must be justified by writing the relationship in brackets, for example: <em>x = 110° (corresponding angles; AB ∥ CD)</em>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two parallel lines are cut by a transversal. One angle is 110°, corresponding to angle x. Find x and the co-interior angle y next to it.',
          answer: `${bl('x')} = ${or('110°')} and ${bl('y')} = ${or('70°')}`,
          steps: [
            `${bl('x')} = ${or('110°')} — ${gr('corresponding angles equal')} (parallel lines cut by a transversal, F-shape).`,
            `${bl('y')} = 180° − ${or('110°')} = ${or('70°')} — ${gr('co-interior angles supplementary')} (they share the transversal and lie between the parallel lines, C-shape; 110° + 70° = 180° ✓).`,
          ],
        },
        {
          question: 'Sipho has two intersecting lines forming a 72° angle. Find all four angles.',
          answer: `The four angles are ${or('72°')}, ${or('108°')}, ${or('72°')}, ${or('108°')}`,
          steps: [
            `${bl('Given angle:')} ${bl('72°')}.`,
            `${gr('Vertically opposite')} angle = ${or('72°')} — ${gr('vertically opposite angles are equal')}.`,
            `Each ${gr('adjacent angle')} on the straight line = 180° − ${bl('72°')} = ${or('108°')} — ${gr('adjacent angles on a straight line are supplementary')}.`,
            `The remaining fourth angle is vertically opposite to ${or('108°')}, so it is also ${or('108°')} ✓`,
            `<strong>All four angles:</strong> ${or('72°')}, ${or('108°')}, ${or('72°')}, ${or('108°')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — vertically opposite ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two lines intersect forming an angle of 58°. Find the vertically opposite angle.',
          answer: '58°',
          checkMode: 'auto',
          correctAnswer: '58',
          correctAnswers: ['58', '58°'],
          explanation: 'Vertically opposite angles are equal.\nVertically opposite angle = 58°.',
        },

        // ── Q2 Medium — adjacent on a straight line ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the adjacent angles to a 58° angle on a straight line.',
          answer: '122°',
          checkMode: 'auto',
          correctAnswer: '122',
          correctAnswers: ['122', '122°'],
          explanation: 'Adjacent angles on a straight line are supplementary (sum = 180°).\n180° − 58° = 122°.',
        },

        // ── Q3 Hard — corresponding vs alternate conceptual ──────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho says corresponding angles and alternate angles are always the same value when parallel lines are cut by a transversal. Is he correct? Explain.',
          answer: 'Yes — both corresponding and alternate angle pairs are equal to each other, though they refer to different positions relative to the transversal and parallel lines.',
          checkMode: 'self',
        },

        // ── Q4 Easy — corresponding angles ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Two parallel lines are cut by a transversal. One corresponding angle is 88°. Find the other.',
          answer: '88°',
          checkMode: 'auto',
          correctAnswer: '88',
          correctAnswers: ['88', '88°'],
          explanation: 'Corresponding angles are equal when parallel lines are cut by a transversal.\nCorresponding angle = 88°.',
        },

        // ── Q5 Medium — co-interior angles ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the co-interior angle to a 105° angle.',
          answer: '75°',
          checkMode: 'auto',
          correctAnswer: '75',
          correctAnswers: ['75', '75°'],
          explanation: 'Co-interior angles are supplementary (sum = 180°).\n180° − 105° = 75°.',
        },

        // ── Q6 Hard — angles around a point ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato has a diagram with angles around a point: 80°, x, 110°, and 95°. Find x.',
          answer: 'Angles around a point sum to 360°. 80 + x + 110 + 95 = 360. x = 75°.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising vertically opposite, adjacent, corresponding, alternate and co-interior angle relationships with parallel lines and transversals" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two parallel lines cut by a transversal with all five angle relationships labelled and colour coded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING MULTI-STEP PROBLEMS USING COMBINED ANGLE RELATIONSHIPS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-angle-problems',
      title: 'Solving Multi-Step Problems Using Combined Angle Relationships',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">We apply multiple angle relationships together in more complex diagrams involving several intersecting and parallel lines, requiring careful step-by-step reasoning to find all unknown angles.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl("each step's angle")}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('relationship applied')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('final answer')}</span>` +
        `</div>` +

        // ── Strategy steps ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for multi-step problems</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identify</strong> what is given and what is unknown. Mark ${bl('known angles')} on the diagram.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Select</strong> the ${or('relationship')} that links the given angle to an unknown — state it as your reason.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Calculate</strong> and write the ${gr('final answer')} with a full reason in brackets.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Work step by step</p>` +
        `<p style="margin:0;color:#1e3a8a;">In complex diagrams you often need the answer from one step to unlock the next. Never skip steps — each intermediate angle becomes ${bl('given')} for the following step.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two parallel lines are cut by a transversal, creating angle a = 65°. A second transversal crosses the same lines, creating an angle b that is vertically opposite to the alternate angle of a. Find b.',
          answer: `${gr('b = 65°')}`,
          steps: [
            `${or('Alternate angle')} to ${bl('a')} = ${bl('65°')} — ${or('alternate angles equal')} (parallel lines, Z-shape).`,
            `${gr('b')} = ${bl('65°')} — ${or('vertically opposite angles equal')}.`,
            `<strong>Answer:</strong> ${gr('b = 65°')} ✓`,
          ],
        },
        {
          question: 'Lerato has a diagram with three angles around a point: 95°, x, and 140°. Find x.',
          answer: `${gr('x = 125°')}`,
          steps: [
            `${or('Angles around a point')} sum to 360°.`,
            `${bl('95°')} + ${bl('x')} + ${bl('140°')} = 360°`,
            `${bl('x')} = 360° − 95° − 140° = ${gr('125°')} ✓`,
          ],
        },
        {
          question: "Thabo's diagram shows two parallel lines with a co-interior angle pair where one angle is twice the other. Find both angles.",
          answer: `${gr('60°')} and ${gr('120°')}`,
          steps: [
            `Let the smaller angle = ${bl('x')}, the larger = ${bl('2x')}.`,
            `${or('Co-interior angles are supplementary:')} ${bl('x')} + ${bl('2x')} = 180°`,
            `3${bl('x')} = 180°`,
            `${bl('x')} = 60° → ${gr('smaller angle = 60°')}, ${gr('larger angle = 120°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — alternate angle ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Two parallel lines are cut by a transversal creating angle a = 72°. Find the alternate angle to a.',
          answer: '72°',
          checkMode: 'auto',
          correctAnswer: '72',
          correctAnswers: ['72', '72°'],
          explanation: 'Alternate angles are equal when parallel lines are cut by a transversal.\nAlternate angle = 72°.',
        },

        // ── Q8 Hard — co-interior with multiplier ─────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo's diagram has a co-interior angle pair where one angle is three times the other. Find both angles.",
          answer: 'Let smaller = x, larger = 3x. x + 3x = 180. x = 45°. Angles are 45° and 135°.',
          checkMode: 'self',
        },

        // ── Q9 Medium — all four angles of intersecting lines ─────────────────
        {
          difficulty: 'Medium',
          question: 'Two intersecting lines form a 36° angle. Find all four angles.',
          answer: '36°, 144°, 36°, 144°',
          checkMode: 'auto',
          correctAnswer: '36, 144, 36, 144',
          correctAnswers: ['36,144,36,144', '36°,144°,36°,144°', '36, 144, 36, 144', '36°, 144°, 36°, 144°'],
          explanation: 'Vertically opposite angle = 36°.\nAdjacent angles = 180° − 36° = 144° each.\nFour angles: 36°, 144°, 36°, 144°.',
        },

        // ── Q10 Hard — chained corresponding then vertically opposite ─────────
        {
          difficulty: 'Hard',
          question: 'Amahle has angle a = 65° corresponding to angle b on parallel lines. Angle c is vertically opposite to b. Find c.',
          answer: 'b = 65° (corresponding equal to a). c = 65° (vertically opposite equal to b).',
          checkMode: 'self',
        },

        // ── Q11 Medium — corresponding angle ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Find the corresponding angle to a 112° angle between parallel lines cut by a transversal.',
          answer: '112°',
          checkMode: 'auto',
          correctAnswer: '112',
          correctAnswers: ['112', '112°'],
          explanation: 'Corresponding angles are equal when parallel lines are cut by a transversal.\nCorresponding angle = 112°.',
        },

        // ── Q12 Hard — conceptual misconception ──────────────────────────────
        {
          difficulty: 'Hard',
          question: "Sipho says all angles formed by a transversal cutting two parallel lines are either 90° or supplementary to 90°. Is he correct? Explain.",
          answer: "No — the angles can be any value depending on the angle of the transversal; they are not restricted to 90° or its supplements unless the transversal happens to be perpendicular.",
          checkMode: 'self',
        },

        // ── Q13 Hard — algebraic co-interior pair ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal. One co-interior angle is x and the other is 2x + 30. Find x.',
          answer: 'x + (2x + 30) = 180. 3x + 30 = 180. 3x = 150. x = 50°.',
          checkMode: 'self',
        },

        // ── Q14 Hard — three intersecting lines at a point ────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato's diagram shows three intersecting lines at a point, creating six angles. If one angle is 40°, find as many other angles as possible using vertically opposite and adjacent relationships.",
          answer: "The vertically opposite angle to 40° is also 40°. Adjacent angles to 40° would be 140° each (180 − 40), though without more information about the third line's exact position, not all six angles can be determined with certainty from this alone.",
          checkMode: 'self',
        },

        // ── Q15 Hard — chained co-interior and vertically opposite ────────────
        {
          difficulty: 'Hard',
          question: 'Two parallel lines are cut by a transversal. Angle a is co-interior with angle b, and angle b is vertically opposite to angle c, which equals 65°. Find a, b and c.',
          answer: 'c = 65°. b = 65° (vertically opposite to c). a = 180 − 65 = 115° (co-interior with b).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine multiple angle relationships to solve complex geometry problems step by step" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two parallel lines cut by two transversals with multiple angle relationships labelled and colour coded" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered geometry of straight lines.' },
    { minScore: 11, message: 'Great work!' },
    { minScore: 8, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
