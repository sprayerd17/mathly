import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of 2D shapes roles) ─────────────────────────────
// matching sides / known values                          → blue   (#2563eb)
// matching angles / side ratios                          → orange (#ea580c)
// congruency/similarity condition / justification        → green  (#16a34a)
// unknown values                                         → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Geometry of 2D Shapes',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — MINIMUM CONDITIONS FOR CONGRUENT TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'congruent-triangles',
      title: 'Minimum Conditions for Congruent Triangles',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Two triangles are <strong>congruent</strong> if they are exactly the same shape and size. Through investigation, we establish the <strong>minimum conditions</strong> needed to prove triangles are congruent: <strong>SSS</strong> (three sides equal), <strong>SAS</strong> (two sides and the included angle equal), <strong>AAS</strong> (two angles and a side equal), or <strong>RHS</strong> (right angle, hypotenuse and one side equal for right-angled triangles).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('matching sides')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('matching angles')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('congruency condition')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four congruency conditions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">SSS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All ${bl('three sides')} of one triangle equal the corresponding three sides of the other.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">SAS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two ${bl('sides')} and the ${or('included angle')} between them are equal in both triangles.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">AAS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two ${or('angles')} and a corresponding ${bl('side')} are equal in both triangles.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">RHS</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">For right-angled triangles: a ${or('right angle')}, equal ${bl('hypotenuses')} and one matching ${bl('side')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Why minimum conditions matter</p>` +
        `<p style="margin:0;color:#14532d;">You do not need all six pieces of information (3 sides and 3 angles) to prove congruency. These ${gr('minimum conditions')} are enough to guarantee the triangles are identical in every way.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two triangles have sides 5 cm, 7 cm and 9 cm, and 5 cm, 7 cm and 9 cm. Are they congruent?',
          answer: `Yes — this satisfies ${gr('SSS (Side-Side-Side)')}, since all three corresponding ${bl('sides')} are equal.`,
          steps: [
            `List the sides of each triangle: Triangle 1 has sides ${bl('5 cm')}, ${bl('7 cm')}, ${bl('9 cm')}. Triangle 2 also has sides ${bl('5 cm')}, ${bl('7 cm')}, ${bl('9 cm')}.`,
            `Compare corresponding sides: ${bl('5 cm')} = ${bl('5 cm')} ✓, ${bl('7 cm')} = ${bl('7 cm')} ✓, ${bl('9 cm')} = ${bl('9 cm')} ✓.`,
            `All three ${bl('sides')} match — this satisfies the ${gr('SSS (Side-Side-Side)')} congruency condition.`,
            `<strong>Conclusion:</strong> Yes — the triangles are congruent by ${gr('SSS')}. ✓`,
          ],
        },
        {
          question: 'Sipho has two right-angled triangles with the same hypotenuse (10 cm) and one matching side (6 cm). Are they congruent?',
          answer: `Yes — this satisfies ${gr('RHS (Right angle-Hypotenuse-Side)')}, a valid condition for right-angled triangle congruency.`,
          steps: [
            `Both triangles have a ${or('right angle')} (90°) — the R in RHS is satisfied. ✓`,
            `Both triangles have the same ${bl('hypotenuse')} of 10 cm — the H in RHS is satisfied. ✓`,
            `Both triangles have a matching ${bl('side')} of 6 cm — the S in RHS is satisfied. ✓`,
            `<strong>Conclusion:</strong> Yes — the triangles are congruent by ${gr('RHS')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the four minimum conditions for congruent triangles — SSS, SAS, AAS and RHS — with visual examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two triangles side by side showing matching sides/angles for each congruency condition — SSS, SAS, AAS, RHS — labelled clearly" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MINIMUM CONDITIONS FOR SIMILAR TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similar-triangles',
      title: 'Minimum Conditions for Similar Triangles',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Two triangles are <strong>similar</strong> if they have the same shape but possibly different sizes — corresponding angles are equal and corresponding sides are in proportion. Through investigation, we establish that triangles are similar if <strong>AA</strong> (two angles equal, since the third must then also match), or if all corresponding sides are in the same ratio (<strong>SSS proportionality</strong>).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('matching angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('side ratios')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('similarity condition')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two similarity conditions</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">AA (Angle-Angle)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If two ${bl('angles')} of one triangle equal two angles of another, the third angle must also match (angle sum = 180°), so the triangles are similar.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">SSS Proportionality</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">If all three pairs of corresponding sides share the same ${or('ratio')}, the triangles are similar by proportional sides.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#166534;margin-bottom:6px;">Similarity vs Congruency</p>` +
        `<p style="margin:0;color:#14532d;">Similar triangles have the same ${bl('angles')} and proportional sides — but may differ in size. Congruent triangles are similar <em>and</em> the same size. Every congruent pair is also similar, but not every similar pair is congruent.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two triangles both have angles 40° and 70°. Are they similar?',
          answer: `Yes — since two ${bl('angles')} match, the third angle must also match (180 − 40 − 70 = 70°), satisfying the ${gr('AA condition')} for similarity.`,
          steps: [
            `Triangle 1 has angles ${bl('40°')} and ${bl('70°')}. Triangle 2 also has angles ${bl('40°')} and ${bl('70°')}.`,
            `Find the third angle of each triangle: 180° − 40° − 70° = ${bl('70°')}. Both triangles have a third angle of ${bl('70°')}. ✓`,
            `All three ${bl('angles')} are equal: 40° = 40°, 70° = 70°, 70° = 70°.`,
            `<strong>Conclusion:</strong> Yes — the triangles satisfy the ${gr('AA (Angle-Angle) similarity condition')} and are therefore similar. ✓`,
          ],
        },
        {
          question: 'Lerato has two triangles with sides 3, 4, 5 and 6, 8, 10. Are they similar?',
          answer: `Yes — checking ${or('ratios')}: 6/3 = 2, 8/4 = 2, 10/5 = 2. All ratios are equal (${or('2')}), so the triangles are ${gr('similar (SSS proportionality)')}.`,
          steps: [
            `Check the ${or('ratio')} of each pair of corresponding sides.`,
            `Ratio 1: ${or('6 ÷ 3')} = ${or('2')} ✓`,
            `Ratio 2: ${or('8 ÷ 4')} = ${or('2')} ✓`,
            `Ratio 3: ${or('10 ÷ 5')} = ${or('2')} ✓`,
            `All three ${or('ratios')} are equal (${or('2')}), confirming proportionality.`,
            `<strong>Conclusion:</strong> Yes — the triangles are ${gr('similar by SSS proportionality')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the two minimum conditions for similar triangles — AA and SSS proportionality — with visual examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: two pairs of similar triangles showing equal angles and proportional sides labelled with their ratios" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING GEOMETRIC PROBLEMS USING CONGRUENCY AND SIMILARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'congruency-similarity-problems',
      title: 'Solving Geometric Problems Using Congruency and Similarity',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">We solve geometric problems involving <strong>unknown sides and angles</strong> in triangles and quadrilaterals, applying known properties along with congruency and similarity conditions to justify our solutions.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known values')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('unknown values')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('justification')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategy for solving problems</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Identify')}</strong> — Mark all ${bl('known values')} (sides, angles, areas) on a diagram.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Find')}</strong> — Clearly name the ${re('unknown value')} you need to determine.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Justify')}</strong> — State the congruency or similarity condition as your ${gr('reason')} for each step.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always give a reason</p>` +
        `<p style="margin:0;color:#1e3a8a;">In geometry, a statement without a ${gr('justification')} is incomplete. Always write the condition (e.g. ${gr('SSS')}, ${gr('AA')}, ${gr('SAS')}) alongside your answer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Two similar triangles have a side ratio of 1 : 3. The smaller triangle has a side of 4 cm. Find the corresponding side in the larger triangle.',
          answer: `The corresponding side in the larger triangle is ${bl('12 cm')}.`,
          steps: [
            `The triangles are similar with a side ratio of ${or('1 : 3')}.`,
            `${gr('Justification:')} Similar triangles have corresponding sides in proportion.`,
            `Known side in smaller triangle: ${bl('4 cm')}. Unknown side in larger triangle: ${re('?')}`,
            `Apply the ratio: ${re('?')} = ${bl('4')} × ${or('3')} = ${bl('12')} cm.`,
            `<strong>Answer:</strong> The corresponding side in the larger triangle is ${bl('12 cm')}. ✓`,
          ],
        },
        {
          question: 'Thabo has two triangles that are congruent by SAS, with one triangle having an unknown angle x where the corresponding angle in the other triangle is 65°. Find x.',
          answer: `${re('x')} = ${bl('65°')}`,
          steps: [
            `The triangles are ${gr('congruent by SAS')}.`,
            `${gr('Justification:')} Congruent triangles have all corresponding angles equal.`,
            `The corresponding angle is ${bl('65°')}.`,
            `Therefore ${re('x')} = ${bl('65°')}. ✓`,
          ],
        },
        {
          question: 'A quadrilateral is split into two congruent triangles by a diagonal. If one triangle has an area of 18 cm², find the area of the whole quadrilateral.',
          answer: `Total area = ${bl('36 cm²')}`,
          steps: [
            `One triangle has an area of ${bl('18 cm²')}.`,
            `${gr('Justification:')} The triangles are congruent — they are equal in every way, including area.`,
            `Total area of quadrilateral = ${bl('2')} × ${bl('18')} = ${bl('36')} cm².`,
            `<strong>Answer:</strong> The area of the whole quadrilateral is ${bl('36 cm²')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve geometric problems using congruency and similarity conditions with step-by-step justifications" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: labelled diagrams showing similar and congruent triangle pairs with known and unknown sides/angles marked" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two triangles have sides 6 cm, 8 cm and 10 cm, and 6 cm, 8 cm and 10 cm. Are they congruent?',
      answer: 'yes',
      checkMode: 'auto',
      correctAnswer: 'yes',
      explanation: 'All three sides match (6 = 6, 8 = 8, 10 = 10), satisfying the SSS congruency condition. The triangles are congruent.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Name the congruency condition for two triangles with two equal sides and an equal included angle.',
      answer: 'SAS',
      checkMode: 'auto',
      correctAnswer: 'SAS',
      explanation: 'SAS (Side-Angle-Side) requires two equal sides and the angle between them to be equal — this is exactly the condition described.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says two triangles with the same three angles are always congruent. Is he correct? Explain.',
      answer: 'No — having the same three angles only proves similarity (AA), not congruency, since the triangles could be different sizes.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two triangles both have angles 35° and 85°. Are they similar?',
      answer: 'yes',
      checkMode: 'auto',
      correctAnswer: 'yes',
      explanation: 'Two matching angles satisfy the AA condition. The third angle of each triangle is 180 − 35 − 85 = 60°, confirming all three angles match. The triangles are similar.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two triangles have sides 4, 6 and 8, and 8, 12 and 16. Are they similar? Explain.',
      answer: 'Yes — checking ratios: 8/4 = 2, 12/6 = 2, 16/8 = 2. All ratios equal, confirming similarity.',
      checkMode: 'self',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has two right-angled triangles with matching hypotenuses (12 cm) but different other side lengths. Are they necessarily congruent? Explain.',
      answer: 'No — RHS congruency requires the hypotenuse AND one other matching side; having only the hypotenuse match is not enough.',
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two similar triangles have a side ratio of 2 : 5. The smaller triangle has a side of 6 cm. Find the corresponding side in the larger triangle.',
      answer: '15cm',
      checkMode: 'auto',
      correctAnswer: '15cm',
      correctAnswers: ['15cm', '15 cm', '15'],
      explanation: 'Using the ratio 2 : 5, the larger side = 6 × (5 ÷ 2) = 6 × 2.5 = 15 cm.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo has two congruent triangles by ASA, with one triangle having an unknown side y where the corresponding side in the other triangle is 9 cm. Find y.',
      answer: 'Since the triangles are congruent, corresponding sides are equal: y = 9 cm.',
      checkMode: 'self',
    },

    // ── Q9 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A quadrilateral is split into two congruent triangles by a diagonal. One triangle has an area of 24 cm². Find the total area of the quadrilateral.',
      answer: '48cm²',
      checkMode: 'auto',
      correctAnswer: '48cm²',
      correctAnswers: ['48cm²', '48 cm²', '48'],
      explanation: 'The triangles are congruent, so each has area 24 cm². Total area = 2 × 24 = 48 cm².',
    },

    // ── Q10 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle says SSA (two sides and a non-included angle) is a valid congruency condition. Is she correct? Explain.",
      answer: "No — SSA is not a reliable congruency condition, since it can sometimes produce two different possible triangles (this is sometimes called the 'ambiguous case').",
      checkMode: 'self',
    },

    // ── Q11 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two triangles have angles 50°, 60° and 70°, and 50°, 60° and 70°. Are they necessarily congruent? Explain.',
      answer: 'Not necessarily — matching angles only proves similarity (AAA), not congruency, since the triangles could differ in size.',
      checkMode: 'self',
    },

    // ── Q12 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho has two similar triangles with a side ratio of 3 : 7. If the larger triangle has a side of 21 cm, find the corresponding side in the smaller triangle.',
      answer: '9cm',
      checkMode: 'auto',
      correctAnswer: '9cm',
      correctAnswers: ['9cm', '9 cm', '9'],
      explanation: 'Using the ratio 3 : 7, the smaller side = 21 × (3 ÷ 7) = 9 cm.',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato has two triangles that share a common side and have two pairs of equal angles. Are they congruent? Explain which condition applies.',
      answer: 'Yes — this satisfies AAS (two angles and a corresponding side), proving congruency.',
      checkMode: 'self',
    },

    // ── Q14 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "A larger triangle has sides 5 cm longer than a smaller, similar triangle at every side, with the smaller triangle's sides being 4, 6 and 8 cm. Is this scenario describing similarity correctly? Explain why or why not.",
      answer: 'No — adding the same fixed amount to each side does not preserve the ratio between sides, so this would not create a similar triangle; similarity requires proportional scaling (multiplication), not addition.',
      checkMode: 'self',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Two similar triangles have areas in ratio 4 : 9. Find the ratio of their corresponding side lengths.',
      answer: 'Since area ratio = (side ratio)², the side ratio = √4 : √9 = 2 : 3.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Outstanding! You have mastered geometry of 2D shapes.' },
    { minScore: 11, message: 'Great work! You have a strong grasp of this topic. Review any missed questions and try again.' },
    { minScore: 8, message: 'Good effort! Review the study guide and worked examples, then try again.' },
    { minScore: 0, message: 'Keep going! Work through the guide again section by section and take your time with each concept.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Block 1 (0-2):   Triangle angle sum (find missing angle / isosceles / ratio)  — NEEDS DIAGRAM (0,1,2)
    // Block 2 (3-5):   Exterior angle theorem                                        — NEEDS DIAGRAM (3,4,5)
    // Block 3 (6-9):   Quadrilateral angle sum / properties                          — NEEDS DIAGRAM (6,7,8,9)
    // Block 4 (10-13): Polygon interior angle sum via (n-2)×180                      — abstract, no diagram
    // Block 5 (14-16): Congruent triangle conditions (SSS/SAS/AAS/RHS)               — 16 NEEDS DIAGRAM
    // Block 6 (17-19): Similar triangles (AA / ratio problems)                       — abstract, no diagram
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — Triangle angle sum (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In the triangle shown, two of the angles are 50° and 65°. Find the size of the third angle.', checkMode: 'auto', correctAnswer: '65°', correctAnswers: ['65°', '65'], answer: '65°', explanation: 'The angles of a triangle add up to 180°.\nThird angle = 180° − 50° − 65° = 65°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">50°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">65°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the isosceles triangle shown, the apex angle is 40° and the two base angles are equal. Find the size of each base angle.', checkMode: 'auto', correctAnswer: '70°', correctAnswers: ['70°', '70'], answer: '70°', explanation: 'The angles of a triangle add up to 180°.\nRemaining angle for both base angles: 180° − 40° = 140°.\nSince the base angles are equal: 140° ÷ 2 = 70° each.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, the three angles are in the ratio 1 : 2 : 3. Find the size of the largest angle.', checkMode: 'auto', correctAnswer: '90°', correctAnswers: ['90°', '90'], answer: '90°', explanation: 'Let the angles be x, 2x and 3x.\nx + 2x + 3x = 180° → 6x = 180° → x = 30°.\nLargest angle = 3x = 3 × 30° = 90°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">3x = ?</text></svg>' },

        // Block 2 — Exterior angle theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the triangle shown, an exterior angle is formed at one vertex. The two remote (non-adjacent) interior angles are 70° and 45°. Find the size of the exterior angle.', checkMode: 'auto', correctAnswer: '115°', correctAnswers: ['115°', '115'], answer: '115°', explanation: 'The exterior angle theorem states that an exterior angle equals the sum of the two remote interior angles.\nExterior angle = 70° + 45° = 115°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">70°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">45°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, an exterior angle is 110°. One of the remote interior angles is 40°. Find the size of the other remote interior angle.', checkMode: 'auto', correctAnswer: '70°', correctAnswers: ['70°', '70'], answer: '70°', explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two remote interior angles.\nOther remote angle = 110° − 40° = 70°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">40°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">110°</text></svg>' },
        { difficulty: 'Hard', question: 'In triangle ABC shown, the exterior angle at C is 130°, and the interior angle at A is 55°. Find the size of the interior angle at B.', checkMode: 'auto', correctAnswer: '75°', correctAnswers: ['75°', '75'], answer: '75°', explanation: 'The interior angle at C = 180° − 130° = 50° (angles on a straight line).\nUsing the angle sum of a triangle: A + B + C = 180°.\n55° + B + 50° = 180° → B = 180° − 55° − 50° = 75°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">55°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">130°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Block 3 — Quadrilateral angle sum / properties (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three of the angles are 90°, 90° and 85°. Find the size of the fourth angle.', checkMode: 'auto', correctAnswer: '95°', correctAnswers: ['95°', '95'], answer: '95°', explanation: 'The angles of a quadrilateral add up to 360°.\nFourth angle = 360° − 90° − 90° − 85° = 95°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">90°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">85°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the parallelogram shown, one angle is 115°. Find the size of an angle adjacent to it (consecutive angles in a parallelogram are supplementary).', checkMode: 'auto', correctAnswer: '65°', correctAnswers: ['65°', '65'], answer: '65°', explanation: 'Consecutive (co-interior) angles in a parallelogram are supplementary — they add up to 180°.\nAdjacent angle = 180° − 115° = 65°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">115°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the trapezium shown, one pair of sides is parallel. The angle on one parallel side is 112°. Find the co-interior angle on the same leg (the angles between the parallel sides on the same leg add up to 180°).', checkMode: 'auto', correctAnswer: '68°', correctAnswers: ['68°', '68'], answer: '68°', explanation: 'Co-interior angles between parallel lines add up to 180°.\nCo-interior angle = 180° − 112° = 68°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">112°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the quadrilateral shown, the four angles are in the ratio 2 : 3 : 4 : 6. Find the size of the largest angle.', checkMode: 'auto', correctAnswer: '144°', correctAnswers: ['144°', '144'], answer: '144°', explanation: 'Let the angles be 2x, 3x, 4x and 6x.\n2x + 3x + 4x + 6x = 360° → 15x = 360° → x = 24°.\nLargest angle = 6x = 6 × 24° = 144°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">2x</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4x</text><text x="65" y="62" font-size="13" fill="#ea580c" font-weight="700">6x = ?</text></svg>' },

        // Block 4 — Polygon interior angle sum via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a pentagon (5 sides), using the formula (n − 2) × 180°.', checkMode: 'auto', correctAnswer: '540°', correctAnswers: ['540°', '540'], answer: '540°', explanation: 'Sum of interior angles = (n − 2) × 180°.\nFor a pentagon, n = 5: (5 − 2) × 180° = 3 × 180° = 540°' },
        { difficulty: 'Medium', question: 'A regular hexagon (6 sides) has all interior angles equal. Find the size of each interior angle.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Sum of interior angles = (n − 2) × 180° = (6 − 2) × 180° = 720°.\nSince the hexagon is regular, each angle = 720° ÷ 6 = 120°' },
        { difficulty: 'Hard', question: 'A regular polygon has an interior angle sum of 900°. Use the formula (n − 2) × 180° = 900° to find the number of sides, n.', checkMode: 'auto', correctAnswer: '7', answer: '7', explanation: '(n − 2) × 180° = 900°\nn − 2 = 900° ÷ 180° = 5\nn = 5 + 2 = 7 sides' },
        { difficulty: 'Hard', question: 'In the pentagon shown, four of the interior angles are 100°, 110°, 95° and 90°. Find the size of the fifth angle.', checkMode: 'auto', correctAnswer: '145°', correctAnswers: ['145°', '145'], answer: '145°', explanation: 'Sum of interior angles of a pentagon = (5 − 2) × 180° = 540°.\nFifth angle = 540° − 100° − 110° − 95° − 90° = 145°' },

        // Block 5 — Congruent triangle conditions (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Two triangles have all three pairs of corresponding sides equal. Name the congruency condition that proves they are congruent.', checkMode: 'auto', correctAnswer: 'SSS', answer: 'SSS', explanation: 'When all three pairs of corresponding sides are equal, the triangles are congruent by SSS (Side-Side-Side).' },
        { difficulty: 'Medium', question: 'Two right-angled triangles have equal hypotenuses and one other pair of equal corresponding sides. Name the congruency condition that proves they are congruent.', checkMode: 'auto', correctAnswer: 'RHS', answer: 'RHS', explanation: 'For right-angled triangles, an equal right angle, equal hypotenuse and one other equal side proves congruency by RHS (Right angle-Hypotenuse-Side).' },
        { difficulty: 'Hard', question: 'In the diagram, triangle ABC is congruent to triangle DEF by SAS. In triangle ABC, AB = 8 cm, AC = 10 cm and the included angle A = 55°. Find the size of angle D in triangle DEF.', checkMode: 'auto', correctAnswer: '55°', correctAnswers: ['55°', '55'], answer: '55°', explanation: 'Since the triangles are congruent, corresponding angles are equal.\nAngle D corresponds to angle A, so angle D = 55°', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">B</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">C</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">10 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">55°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">D</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">E</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">F</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Block 6 — Similar triangles (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Two similar triangles have a side ratio of 2 : 7. The smaller triangle has a side of 8 cm. Find the length of the corresponding side in the larger triangle.', checkMode: 'auto', correctAnswer: '28cm', correctAnswers: ['28cm', '28 cm', '28'], answer: '28 cm', explanation: 'Using the ratio 2 : 7, the larger side = 8 × (7 ÷ 2) = 8 × 3.5 = 28 cm' },
        { difficulty: 'Hard', question: 'Two triangles both have angles of 45° and 65°. Explain why they must be similar, and state the third angle in each triangle.', answer: 'Since two pairs of corresponding angles are equal (45° and 65°), the third angle in each triangle must also be equal: 180° − 45° − 65° = 70°. All three angles match, so the triangles are similar by AA (Angle-Angle).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Two similar triangles have areas in the ratio 9 : 25. Find the ratio of their corresponding side lengths.', answer: 'Since area ratio = (side ratio)², the side ratio = √9 : √25 = 3 : 5.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered triangle and quadrilateral angle properties, polygon angle sums, and congruency and similarity conditions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the exterior angle theorem or polygon angle sums, and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on angle properties and congruency conditions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — Triangle angle sum (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In the triangle shown, two of the angles are 48° and 72°. Find the size of the third angle.', checkMode: 'auto', correctAnswer: '60°', correctAnswers: ['60°', '60'], answer: '60°', explanation: 'The angles of a triangle add up to 180°.\nThird angle = 180° − 48° − 72° = 60°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">48°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">72°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the isosceles triangle shown, the apex angle is 56° and the two base angles are equal. Find the size of each base angle.', checkMode: 'auto', correctAnswer: '62°', correctAnswers: ['62°', '62'], answer: '62°', explanation: 'The angles of a triangle add up to 180°.\nRemaining angle for both base angles: 180° − 56° = 124°.\nSince the base angles are equal: 124° ÷ 2 = 62° each.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">56°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, the three angles are in the ratio 2 : 3 : 4. Find the size of the largest angle.', checkMode: 'auto', correctAnswer: '80°', correctAnswers: ['80°', '80'], answer: '80°', explanation: 'Let the angles be 2x, 3x and 4x.\n2x + 3x + 4x = 180° → 9x = 180° → x = 20°.\nLargest angle = 4x = 4 × 20° = 80°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">3x = ?</text></svg>' },

        // Block 2 — Exterior angle theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the triangle shown, an exterior angle is formed at one vertex. The two remote (non-adjacent) interior angles are 65° and 52°. Find the size of the exterior angle.', checkMode: 'auto', correctAnswer: '117°', correctAnswers: ['117°', '117'], answer: '117°', explanation: 'The exterior angle theorem states that an exterior angle equals the sum of the two remote interior angles.\nExterior angle = 65° + 52° = 117°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">65°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">52°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, an exterior angle is 128°. One of the remote interior angles is 55°. Find the size of the other remote interior angle.', checkMode: 'auto', correctAnswer: '73°', correctAnswers: ['73°', '73'], answer: '73°', explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two remote interior angles.\nOther remote angle = 128° − 55° = 73°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">55°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">128°</text></svg>' },
        { difficulty: 'Hard', question: 'In triangle ABC shown, the exterior angle at C is 142°, and the interior angle at A is 66°. Find the size of the interior angle at B.', checkMode: 'auto', correctAnswer: '76°', correctAnswers: ['76°', '76'], answer: '76°', explanation: 'The interior angle at C = 180° − 142° = 38° (angles on a straight line).\nUsing the angle sum of a triangle: A + B + C = 180°.\n66° + B + 38° = 180° → B = 180° − 66° − 38° = 76°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">66°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">142°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Block 3 — Quadrilateral angle sum / properties (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three of the angles are 100°, 80° and 95°. Find the size of the fourth angle.', checkMode: 'auto', correctAnswer: '85°', correctAnswers: ['85°', '85'], answer: '85°', explanation: 'The angles of a quadrilateral add up to 360°.\nFourth angle = 360° − 100° − 80° − 95° = 85°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">100°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">80°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">95°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the parallelogram shown, one angle is 128°. Find the size of an angle adjacent to it (consecutive angles in a parallelogram are supplementary).', checkMode: 'auto', correctAnswer: '52°', correctAnswers: ['52°', '52'], answer: '52°', explanation: 'Consecutive (co-interior) angles in a parallelogram are supplementary — they add up to 180°.\nAdjacent angle = 180° − 128° = 52°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">128°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the trapezium shown, one pair of sides is parallel. The angle on one parallel side is 104°. Find the co-interior angle on the same leg (the angles between the parallel sides on the same leg add up to 180°).', checkMode: 'auto', correctAnswer: '76°', correctAnswers: ['76°', '76'], answer: '76°', explanation: 'Co-interior angles between parallel lines add up to 180°.\nCo-interior angle = 180° − 104° = 76°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">104°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the quadrilateral shown, the four angles are in the ratio 1 : 2 : 3 : 4. Find the size of the largest angle.', checkMode: 'auto', correctAnswer: '144°', correctAnswers: ['144°', '144'], answer: '144°', explanation: 'Let the angles be x, 2x, 3x and 4x.\nx + 2x + 3x + 4x = 360° → 10x = 360° → x = 36°.\nLargest angle = 4x = 4 × 36° = 144°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">2x</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4x</text><text x="65" y="62" font-size="13" fill="#ea580c" font-weight="700">6x = ?</text></svg>' },

        // Block 4 — Polygon interior angle sum via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a heptagon (7 sides), using the formula (n − 2) × 180°.', checkMode: 'auto', correctAnswer: '900°', correctAnswers: ['900°', '900'], answer: '900°', explanation: 'Sum of interior angles = (n − 2) × 180°.\nFor a heptagon, n = 7: (7 − 2) × 180° = 5 × 180° = 900°' },
        { difficulty: 'Medium', question: 'A regular octagon (8 sides) has all interior angles equal. Find the size of each interior angle.', checkMode: 'auto', correctAnswer: '135°', correctAnswers: ['135°', '135'], answer: '135°', explanation: 'Sum of interior angles = (n − 2) × 180° = (8 − 2) × 180° = 1080°.\nSince the octagon is regular, each angle = 1080° ÷ 8 = 135°' },
        { difficulty: 'Hard', question: 'A regular polygon has an interior angle sum of 1080°. Use the formula (n − 2) × 180° = 1080° to find the number of sides, n.', checkMode: 'auto', correctAnswer: '8', answer: '8', explanation: '(n − 2) × 180° = 1080°\nn − 2 = 1080° ÷ 180° = 6\nn = 6 + 2 = 8 sides' },
        { difficulty: 'Hard', question: 'In the pentagon shown, four of the interior angles are 120°, 95°, 100° and 105°. Find the size of the fifth angle.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Sum of interior angles of a pentagon = (5 − 2) × 180° = 540°.\nFifth angle = 540° − 120° − 95° − 100° − 105° = 120°' },

        // Block 5 — Congruent triangle conditions (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Two triangles have two pairs of corresponding sides equal, and the angle between those sides is also equal. Name the congruency condition that proves they are congruent.', checkMode: 'auto', correctAnswer: 'SAS', answer: 'SAS', explanation: 'When two pairs of corresponding sides and the included angle are equal, the triangles are congruent by SAS (Side-Angle-Side).' },
        { difficulty: 'Medium', question: 'Two triangles have two pairs of corresponding angles equal, and one pair of corresponding sides equal. Name the congruency condition that proves they are congruent.', checkMode: 'auto', correctAnswer: 'AAS', answer: 'AAS', explanation: 'When two pairs of corresponding angles and a corresponding side are equal, the triangles are congruent by AAS (Angle-Angle-Side).' },
        { difficulty: 'Hard', question: 'In the diagram, triangle ABC is congruent to triangle DEF by SAS. In triangle ABC, AB = 9 cm, AC = 12 cm and the included angle A = 48°. Find the size of angle D in triangle DEF.', checkMode: 'auto', correctAnswer: '48°', correctAnswers: ['48°', '48'], answer: '48°', explanation: 'Since the triangles are congruent, corresponding angles are equal.\nAngle D corresponds to angle A, so angle D = 48°', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">B</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">C</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">9 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">12 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">48°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">D</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">E</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">F</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Block 6 — Similar triangles (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Two similar triangles have a side ratio of 3 : 8. The smaller triangle has a side of 9 cm. Find the length of the corresponding side in the larger triangle.', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24 cm', '24'], answer: '24 cm', explanation: 'Using the ratio 3 : 8, the larger side = 9 × (8 ÷ 3) = 24 cm' },
        { difficulty: 'Hard', question: 'Two triangles both have angles of 38° and 77°. Explain why they must be similar, and state the third angle in each triangle.', answer: 'Since two pairs of corresponding angles are equal (38° and 77°), the third angle in each triangle must also be equal: 180° − 38° − 77° = 65°. All three angles match, so the triangles are similar by AA (Angle-Angle).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Two similar triangles have areas in the ratio 16 : 49. Find the ratio of their corresponding side lengths.', answer: 'Since area ratio = (side ratio)², the side ratio = √16 : √49 = 4 : 7.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered triangle and quadrilateral angle properties, polygon angle sums, and congruency and similarity conditions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the exterior angle theorem or polygon angle sums, and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on angle properties and congruency conditions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — Triangle angle sum (Easy/Easy/Medium)
        { difficulty: 'Easy', question: 'In the triangle shown, two of the angles are 55° and 60°. Find the size of the third angle.', checkMode: 'auto', correctAnswer: '65°', correctAnswers: ['65°', '65'], answer: '65°', explanation: 'The angles of a triangle add up to 180°.\nThird angle = 180° − 55° − 60° = 65°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,140 175,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75,140 A 28,28 0 0 1 65,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="128" font-size="14" fill="#2563eb" font-weight="700">55°</text><path d="M 150,140 A 28,28 0 0 0 162,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="133" y="128" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">60°</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#ea580c" stroke-width="2"/><text x="128" y="58" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In the isosceles triangle shown, the apex angle is 36° and the two base angles are equal. Find the size of each base angle.', checkMode: 'auto', correctAnswer: '72°', correctAnswers: ['72°', '72'], answer: '72°', explanation: 'The angles of a triangle add up to 180°.\nRemaining angle for both base angles: 180° − 36° = 144°.\nSince the base angles are equal: 144° ÷ 2 = 72° each.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="45,140 175,140 110,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,36 A 16,16 0 0 1 120,36" fill="none" stroke="#2563eb" stroke-width="2"/><text x="110" y="54" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">36°</text><line x1="72" y1="88" x2="79" y2="80" stroke="#0f1f3d" stroke-width="2"/><line x1="141" y1="80" x2="148" y2="88" stroke="#0f1f3d" stroke-width="2"/><path d="M 70,140 A 28,28 0 0 1 60,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="75" y="128" font-size="14" fill="#ea580c" font-weight="700">?</text><path d="M 150,140 A 28,28 0 0 0 160,118" fill="none" stroke="#ea580c" stroke-width="2"/><text x="145" y="128" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, the three angles are in the ratio 1 : 1 : 4. Find the size of the largest angle.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Let the angles be x, x and 4x.\nx + x + 4x = 180° → 6x = 180° → x = 30°.\nLargest angle = 4x = 4 × 30° = 120°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,140 190,140 128,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 58,140 A 26,26 0 0 1 49,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="63" y="127" font-size="14" fill="#2563eb" font-weight="700">x</text><path d="M 165,140 A 26,26 0 0 0 174,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="160" y="127" font-size="14" fill="#2563eb" font-weight="700" text-anchor="end">2x</text><path d="M 117,38 A 18,18 0 0 1 139,38" fill="none" stroke="#2563eb" stroke-width="2"/><text x="128" y="58" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">3x = ?</text></svg>' },

        // Block 2 — Exterior angle theorem (Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In the triangle shown, an exterior angle is formed at one vertex. The two remote (non-adjacent) interior angles are 80° and 33°. Find the size of the exterior angle.', checkMode: 'auto', correctAnswer: '113°', correctAnswers: ['113°', '113'], answer: '113°', explanation: 'The exterior angle theorem states that an exterior angle equals the sum of the two remote interior angles.\nExterior angle = 80° + 33° = 113°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">80°</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">33°</text><path d="M 175,140 A 18,18 0 0 1 170,127" fill="none" stroke="#ea580c" stroke-width="2"/><text x="183" y="124" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, an exterior angle is 96°. One of the remote interior angles is 37°. Find the size of the other remote interior angle.', checkMode: 'auto', correctAnswer: '59°', correctAnswers: ['59°', '59'], answer: '59°', explanation: 'By the exterior angle theorem, the exterior angle equals the sum of the two remote interior angles.\nOther remote angle = 96° − 37° = 59°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 112.7,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,140 A 24,24 0 0 1 46,120" fill="none" stroke="#ea580c" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#ea580c" font-weight="700">?</text><path d="M 135,140 A 24,24 0 0 0 144,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="130" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">37°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">96°</text></svg>' },
        { difficulty: 'Hard', question: 'In triangle ABC shown, the exterior angle at C is 118°, and the interior angle at A is 41°. Find the size of the interior angle at B.', checkMode: 'auto', correctAnswer: '77°', correctAnswers: ['77°', '77'], answer: '77°', explanation: 'The interior angle at C = 180° − 118° = 62° (angles on a straight line).\nUsing the angle sum of a triangle: A + B + C = 180°.\n41° + B + 62° = 180° → B = 180° − 41° − 62° = 77°', diagramSvg: '<svg viewBox="0 0 230 170" xmlns="http://www.w3.org/2000/svg"><polygon points="33,140 157,140 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="157" y1="140" x2="192" y2="140" stroke="#0f1f3d" stroke-width="2.5"/><text x="25" y="152" font-size="12" fill="#374151" font-weight="600">A</text><text x="160" y="152" font-size="12" fill="#374151" font-weight="600">C</text><text x="88" y="22" font-size="12" fill="#374151" font-weight="600">B</text><path d="M 55,140 A 24,24 0 0 1 47,119" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="130" font-size="13" fill="#2563eb" font-weight="700">41°</text><path d="M 175,140 A 18,18 0 0 1 168,122" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="118" font-size="14" fill="#2563eb" font-weight="700">118°</text><path d="M 90,45 A 16,16 0 0 1 105,60" fill="none" stroke="#ea580c" stroke-width="2"/><text x="103" y="52" font-size="14" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Block 3 — Quadrilateral angle sum / properties (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In the quadrilateral shown, three of the angles are 75°, 105° and 90°. Find the size of the fourth angle.', checkMode: 'auto', correctAnswer: '90°', correctAnswers: ['90°', '90'], answer: '90°', explanation: 'The angles of a quadrilateral add up to 360°.\nFourth angle = 360° − 75° − 105° − 90° = 90°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">75°</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">105°</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">90°</text><text x="65" y="62" font-size="15" fill="#ea580c" font-weight="700">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the parallelogram shown, one angle is 97°. Find the size of an angle adjacent to it (consecutive angles in a parallelogram are supplementary).', checkMode: 'auto', correctAnswer: '83°', correctAnswers: ['83°', '83'], answer: '83°', explanation: 'Consecutive (co-interior) angles in a parallelogram are supplementary — they add up to 180°.\nAdjacent angle = 180° − 97° = 83°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="55" y="122" font-size="14" fill="#2563eb" font-weight="700">97°</text><text x="150" y="122" font-size="14" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Medium', question: 'In the trapezium shown, one pair of sides is parallel. The angle on one parallel side is 97°. Find the co-interior angle on the same leg (the angles between the parallel sides on the same leg add up to 180°).', checkMode: 'auto', correctAnswer: '83°', correctAnswers: ['83°', '83'], answer: '83°', explanation: 'Co-interior angles between parallel lines add up to 180°.\nCo-interior angle = 180° − 97° = 83°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,135 190,135 155,45 65,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100,135 l6,0 M 103,132 l0,6" stroke="#16a34a" stroke-width="1.5"/><path d="M 100,45 l6,0 M 103,42 l0,6" stroke="#16a34a" stroke-width="1.5"/><text x="45" y="122" font-size="13" fill="#2563eb" font-weight="700">97°</text><text x="145" y="65" font-size="13" fill="#ea580c" font-weight="700" text-anchor="end">?</text></svg>' },
        { difficulty: 'Hard', question: 'In the quadrilateral shown, the four angles are in the ratio 3 : 4 : 5 : 6. Find the size of the largest angle.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Let the angles be 3x, 4x, 5x and 6x.\n3x + 4x + 5x + 6x = 360° → 18x = 360° → x = 20°.\nLargest angle = 6x = 6 × 20° = 120°', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,135 185,120 165,35 55,45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="45" y="118" font-size="13" fill="#2563eb" font-weight="700">2x</text><text x="165" y="105" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">3x</text><text x="150" y="55" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">4x</text><text x="65" y="62" font-size="13" fill="#ea580c" font-weight="700">6x = ?</text></svg>' },

        // Block 4 — Polygon interior angle sum via (n-2)×180 (Medium/Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Find the sum of the interior angles of a nonagon (9 sides), using the formula (n − 2) × 180°.', checkMode: 'auto', correctAnswer: '1260°', correctAnswers: ['1260°', '1260'], answer: '1260°', explanation: 'Sum of interior angles = (n − 2) × 180°.\nFor a nonagon, n = 9: (9 − 2) × 180° = 7 × 180° = 1260°' },
        { difficulty: 'Medium', question: 'A regular decagon (10 sides) has all interior angles equal. Find the size of each interior angle.', checkMode: 'auto', correctAnswer: '144°', correctAnswers: ['144°', '144'], answer: '144°', explanation: 'Sum of interior angles = (n − 2) × 180° = (10 − 2) × 180° = 1440°.\nSince the decagon is regular, each angle = 1440° ÷ 10 = 144°' },
        { difficulty: 'Hard', question: 'A regular polygon has an interior angle sum of 1440°. Use the formula (n − 2) × 180° = 1440° to find the number of sides, n.', checkMode: 'auto', correctAnswer: '10', answer: '10', explanation: '(n − 2) × 180° = 1440°\nn − 2 = 1440° ÷ 180° = 8\nn = 8 + 2 = 10 sides' },
        { difficulty: 'Hard', question: 'In the hexagon shown, five of the interior angles are 110°, 130°, 125°, 115° and 100°. Find the size of the sixth angle.', checkMode: 'auto', correctAnswer: '140°', correctAnswers: ['140°', '140'], answer: '140°', explanation: 'Sum of interior angles of a hexagon = (6 − 2) × 180° = 720°.\nSixth angle = 720° − 110° − 130° − 125° − 115° − 100° = 140°' },

        // Block 5 — Congruent triangle conditions (Medium/Medium/Hard)
        { difficulty: 'Medium', question: 'Zinhle compares two right-angled triangles. Both have the same hypotenuse and one other matching side. Which congruency condition can she use to prove the triangles are congruent?', checkMode: 'auto', correctAnswer: 'RHS', answer: 'RHS', explanation: 'For right-angled triangles, an equal right angle, equal hypotenuse and one other equal side proves congruency by RHS (Right angle-Hypotenuse-Side).' },
        { difficulty: 'Medium', question: 'Tumelo measures all three sides of two triangles and finds every pair of corresponding sides is equal. Which congruency condition can he use to prove the triangles are congruent?', checkMode: 'auto', correctAnswer: 'SSS', answer: 'SSS', explanation: 'When all three pairs of corresponding sides are equal, the triangles are congruent by SSS (Side-Side-Side).' },
        { difficulty: 'Hard', question: 'In the diagram, triangle PQR is congruent to triangle STU by SAS. In triangle PQR, PQ = 7 cm, PR = 11 cm and the included angle P = 62°. Find the size of angle S in triangle STU.', checkMode: 'auto', correctAnswer: '62°', correctAnswers: ['62°', '62'], answer: '62°', explanation: 'Since the triangles are congruent, corresponding angles are equal.\nAngle S corresponds to angle P, so angle S = 62°', diagramSvg: '<svg viewBox="0 0 320 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 45,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="152" font-size="12" fill="#374151" font-weight="600">P</text><text x="122" y="152" font-size="12" fill="#374151" font-weight="600">Q</text><text x="35" y="36" font-size="12" fill="#374151" font-weight="600">R</text><text x="38" y="85" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">7 cm</text><text x="90" y="82" font-size="12" fill="#2563eb" font-weight="700">11 cm</text><path d="M 45,131 A 20,20 0 0 1 37,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="50" y="122" font-size="12" fill="#ea580c" font-weight="700">62°</text><polygon points="190,140 280,140 205,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="152" font-size="12" fill="#374151" font-weight="600">S</text><text x="282" y="152" font-size="12" fill="#374151" font-weight="600">T</text><text x="195" y="36" font-size="12" fill="#374151" font-weight="600">U</text><path d="M 205,131 A 20,20 0 0 1 197,113" fill="none" stroke="#ea580c" stroke-width="2"/><text x="210" y="122" font-size="13" fill="#ea580c" font-weight="700">?</text></svg>' },

        // Block 6 — Similar triangles (Hard/Hard/Hard)
        { difficulty: 'Hard', question: 'Two similar triangles have a side ratio of 4 : 9. The smaller triangle has a side of 12 cm. Find the length of the corresponding side in the larger triangle.', checkMode: 'auto', correctAnswer: '27cm', correctAnswers: ['27cm', '27 cm', '27'], answer: '27 cm', explanation: 'Using the ratio 4 : 9, the larger side = 12 × (9 ÷ 4) = 27 cm' },
        { difficulty: 'Hard', question: 'Two triangles both have angles of 52° and 61°. Explain why they must be similar, and state the third angle in each triangle.', answer: 'Since two pairs of corresponding angles are equal (52° and 61°), the third angle in each triangle must also be equal: 180° − 52° − 61° = 67°. All three angles match, so the triangles are similar by AA (Angle-Angle).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Two similar triangles have areas in the ratio 25 : 64. Find the ratio of their corresponding side lengths.', answer: 'Since area ratio = (side ratio)², the side ratio = √25 : √64 = 5 : 8.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered triangle and quadrilateral angle properties, polygon angle sums, and congruency and similarity conditions.' },
        { minScore: 15, message: 'Great work! Review any missed questions on the exterior angle theorem or polygon angle sums, and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on angle properties and congruency conditions, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
