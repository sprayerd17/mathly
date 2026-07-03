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
}
