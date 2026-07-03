import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (euclidean geometry roles) ────────────────────────────────
// matching angles / properties tested / standard definition / conjecture → blue   (#2563eb)
// proportional sides / proof steps / alternative definition / testing   → orange  (#ea580c)
// congruent (identical) / proof connecting / conclusion proven           → green   (#16a34a)
// counter-examples / conclusion disproven                                → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Euclidean Geometry',
  grade: 10,
  subject: 'Mathematics',
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING SIMILARITY AND CONGRUENCE OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similarity-congruence-triangles',
      title: 'Revising Similarity and Congruence of Triangles',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Two triangles are <strong>similar</strong> if their ${bl('corresponding angles are equal')} — their sides are then automatically in proportion. Two triangles are <strong>congruent</strong> if both their ${bl('angles')} AND their ${gr('corresponding sides')} are equal. ${gr('Congruent')} triangles are essentially identical copies, while ${or('similar')} triangles are scaled versions of each other.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('matching angles')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('proportional sides')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('congruent (identical)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Similar triangles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Same ${bl('shape')}, different size. ${bl('Angles')} are equal; sides are in a fixed ${or('ratio')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Congruent triangles</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Same ${bl('shape')} AND same size. ${bl('Angles')} equal AND ${gr('sides')} equal — ${gr('identical copies')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Corresponding sides</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Sides that are opposite ${bl('equal angles')}. In similar triangles they are in ${or('proportion')}; in congruent triangles they are ${gr('equal')}.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Similarity vs Congruence at a glance</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Similar (|||)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Corresponding angles')} are equal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ Sides in ${or('proportion')} (same ratio)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✖ Sides are NOT necessarily equal</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Congruent (≡)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Corresponding angles')} are equal</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${gr('Corresponding sides')} are equal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✔ Triangles are ${gr('identical in every way')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Memory tip</p>` +
        `<p style="margin:0;color:#1e3a8a;">All ${gr('congruent')} triangles are automatically ${or('similar')}, but NOT all ${or('similar')} triangles are ${gr('congruent')}. Think of congruence as a stricter requirement — it demands both ${bl('equal angles')} AND ${gr('equal sides')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Triangle ABC has angles 40°, 60°, 80°. Triangle DEF has angles 40°, 60°, 80° but different side lengths. Are the triangles similar or congruent?',
          answer: `The triangles are ${or('similar')}, not ${gr('congruent')}`,
          steps: [
            `Check the ${bl('angles')}: Triangle ABC has ${bl('40°')}, ${bl('60°')}, ${bl('80°')} and triangle DEF also has ${bl('40°')}, ${bl('60°')}, ${bl('80°')} — the ${bl('corresponding angles are equal')} ✓`,
            `Check the sides: The question states the triangles have <strong>different side lengths</strong>, so the sides are NOT ${gr('equal')} — they are in ${or('proportion')} (the same ratio), but not identical.`,
            `<strong>Conclusion:</strong> Because the ${bl('angles match')} but the sides differ (scaled), the triangles are ${or('similar')} (|||), not ${gr('congruent')} (≡). To be congruent, BOTH the angles AND the sides must be equal.`,
          ],
        },
        {
          question: 'Sipho says two triangles with the same area are always congruent. Is he correct?',
          answer: `No — Sipho is ${re('incorrect')}`,
          steps: [
            `Consider a right-angled triangle with base 2 cm and height 6 cm: area = ½ × 2 × 6 = ${bl('6 cm²')}.`,
            `Now consider a different right-angled triangle with base 3 cm and height 4 cm: area = ½ × 3 × 4 = ${bl('6 cm²')}.`,
            `Both triangles have the same area (${bl('6 cm²')}), yet they have completely different side lengths and different ${bl('angle')} sizes — they are neither similar nor congruent.`,
            `<strong>Conclusion:</strong> ${re('Equal area does NOT imply congruence.')} A ${re('counter-example')} like this is enough to disprove Sipho's claim. Congruence requires BOTH equal ${bl('angles')} AND equal ${gr('sides')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between similar and congruent triangles using matching angles and proportional sides with colour coded diagrams" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side by side diagram showing two similar triangles with matching angles highlighted blue and proportional sides labelled orange versus two congruent triangles with identical sides highlighted green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING PROPERTIES OF SPECIAL QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-special-quadrilaterals',
      title: 'Investigating Properties of Special Quadrilaterals',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">We investigate and form <strong>conjectures</strong> about the properties of the ${bl('kite')}, ${bl('parallelogram')}, ${bl('rectangle')}, ${bl('rhombus')}, ${bl('square')}, and ${bl('trapezium')}, examining their sides, angles, diagonals, and areas. We then attempt to ${or('prove')} these conjectures using known geometric results, or ${re('disprove')} false conjectures using a counter-example — a single specific case where the conjecture fails.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('properties being tested')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('proof steps')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('counter-examples')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Special quadrilaterals and their key properties</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Opposite sides parallel')} and equal; ${bl('opposite angles')} equal; diagonals bisect each other.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rectangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram with ${bl('4 right angles')}; diagonals are ${or('equal')} and bisect each other.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rhombus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram with ${bl('4 equal sides')}; diagonals bisect each other at ${or('90°')} and bisect the ${bl('vertex angles')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Rectangle AND rhombus — ${bl('4 right angles')} AND ${bl('4 equal sides')}; diagonals equal, bisect at 90°.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kite</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two pairs of ${bl('adjacent equal sides')}; one diagonal is a line of symmetry; diagonals are ${or('perpendicular')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Trapezium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Exactly ${bl('one pair of parallel sides')}. An isosceles trapezium also has equal ${bl('legs')} and equal diagonals.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">One counter-example is enough</p>` +
        `<p style="margin:0;color:#991b1b;">To ${re('disprove')} a conjecture you only need ONE specific example that contradicts it. To ${or('prove')} a conjecture you must show it holds in ALL possible cases using logical geometric reasoning — checking a few examples is NOT enough for a proof.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Investigate whether the diagonals of a parallelogram are always equal in length.',
          answer: `The conjecture is ${re('FALSE')} — parallelogram diagonals are NOT always equal`,
          steps: [
            `${bl('Property being tested:')} Are the diagonals of every parallelogram equal in length?`,
            `Draw a general parallelogram (e.g. one with angles 60° and 120°) and measure both diagonals. The two diagonals will generally have ${re('different lengths')}.`,
            `${re('Counter-example:')} A parallelogram with vertices at (0,0), (4,0), (5,2), (1,2) has diagonals of length √29 ≈ 5.39 and √13 ≈ 3.61 — they are NOT equal.`,
            `<strong>Conclusion:</strong> ${re('The conjecture is disproved.')} A single counter-example is sufficient. (Note: a rectangle is a special parallelogram whose diagonals ARE equal — but this does not make the general conjecture true.)`,
          ],
        },
        {
          question: 'Prove that the diagonals of a rhombus bisect each other at right angles.',
          answer: `The diagonals of a rhombus bisect each other at ${or('90°')} — ${or('proven')}`,
          steps: [
            `${bl('Property being tested:')} Do the diagonals of a rhombus always meet at 90°?`,
            `${or('Step 1 — Diagonals bisect each other:')} A rhombus is a parallelogram (opposite sides parallel), so its diagonals bisect each other. Let the intersection point be O.`,
            `${or('Step 2 — Four congruent triangles:')} Label the rhombus ABCD with diagonals AC and BD intersecting at O. Since all 4 sides of a rhombus are equal, triangles AOB, BOC, COD, and DOA each have two sides equal to half the respective diagonal AND one side equal to a side of the rhombus.`,
            `${or('Step 3 — Congruence argument:')} Using the SSS congruence rule (all three sides of △AOB = all three sides of △AOD, since AB = AD and AO = AO), we get △AOB ≡ △AOD. Therefore ∠AOB = ∠AOD.`,
            `${or('Step 4 — Right angles:')} Since ∠AOB + ∠AOD = 180° (angles on a straight line) and ∠AOB = ∠AOD, each angle must be 90°.`,
            `<strong>Conclusion:</strong> The diagonals of a rhombus bisect each other at ${or('right angles')}. ✓`,
          ],
        },
        {
          question: 'Lerato says a square is just a special rectangle. Is this an accurate description of the relationship?',
          answer: `Yes — a square is a ${or('special case')} within the broader category of rectangles`,
          steps: [
            `${bl('Properties of a rectangle:')} 4 right angles, opposite sides parallel and equal, diagonals equal and bisect each other.`,
            `${bl('Properties of a square:')} 4 right angles, ${or('all 4 sides equal')}, diagonals equal and bisect each other at 90°.`,
            `${or('Check:')} Does a square satisfy ALL the properties of a rectangle? Yes — a square has 4 right angles and opposite sides parallel and equal. It qualifies as a rectangle.`,
            `The square ADDS the extra condition that ${or('all 4 sides are equal')}, making it a more restricted (special) case of a rectangle.`,
            `<strong>Conclusion:</strong> Lerato is correct. A square is a special rectangle — every square is a rectangle, but not every rectangle is a square. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video investigating the properties of special quadrilaterals including sides angles and diagonals with colour coded proof steps and counter-examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Hierarchy diagram showing the relationships between special quadrilaterals from parallelogram down to rectangle rhombus and square with key properties labelled blue and counter-examples highlighted red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ALTERNATIVE DEFINITIONS OF POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'alternative-definitions-polygons',
      title: 'Alternative Definitions of Polygons',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Many polygons can be defined in more than one valid way. For example, the ${bl('standard definition')} of a parallelogram is "a quadrilateral with both pairs of opposite sides parallel", but it can also be defined as "a quadrilateral with both pairs of opposite angles equal" — both definitions describe exactly the same shape, since one ${or('alternative definition')} can be proven to imply the other using ${gr('known geometric results')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('standard definition')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('alternative definition')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('proof connecting them')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Why alternative definitions matter</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Standard definitions')} are the most common starting point, but an ${or('alternative definition')} is equally valid if it can be proven to describe exactly the same set of shapes.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">An ${or('alternative definition')} is valid if and only if it is both necessary AND sufficient — every shape in the category satisfies it, and every shape that satisfies it is in the category.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">The ${gr('proof connecting')} the ${bl('standard')} and ${or('alternative')} definitions shows they are logically equivalent — each implies the other.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Common alternative definitions</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;"><strong>Parallelogram</strong> — ${bl('Standard:')} both pairs of opposite sides parallel &nbsp;|&nbsp; ${or('Alternative 1:')} both pairs of opposite sides equal &nbsp;|&nbsp; ${or('Alternative 2:')} both pairs of opposite angles equal &nbsp;|&nbsp; ${or('Alternative 3:')} diagonals bisect each other</p>` +
        `<p style="margin-bottom:8px;"><strong>Rhombus</strong> — ${bl('Standard:')} parallelogram with all 4 sides equal &nbsp;|&nbsp; ${or('Alternative:')} quadrilateral with diagonals that bisect each other at right angles</p>` +
        `<p style="margin:0;"><strong>Rectangle</strong> — ${bl('Standard:')} parallelogram with one right angle &nbsp;|&nbsp; ${or('Alternative:')} parallelogram with equal diagonals</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">How to validate an alternative definition</p>` +
        `<p style="margin:0;color:#14532d;">Show that ${bl('standard → alternative')} (every shape fitting the standard definition also fits the alternative) AND ${or('alternative → standard')} (every shape fitting the alternative also fits the standard). If both directions hold, the definitions are ${gr('equivalent')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Show that 'a quadrilateral with diagonals that bisect each other at right angles' is an alternative definition of a rhombus.",
          answer: `Confirmed — this is a ${or('valid alternative definition')} of a rhombus`,
          steps: [
            `${bl('Standard definition of a rhombus:')} A parallelogram with all four sides equal.`,
            `${or('Alternative definition to test:')} A quadrilateral whose diagonals bisect each other at right angles.`,
            `${gr('Proof — standard implies alternative:')} Let ABCD be a rhombus with diagonals AC and BD meeting at O. Since ABCD is a parallelogram, the diagonals bisect each other (AO = OC and BO = OD). Using SSS congruence (AB = AD, AO = AO, BO = OD shared), △AOB ≡ △AOD, giving ∠AOB = ∠AOD = 90°. So the diagonals meet at right angles. ✓`,
            `${gr('Proof — alternative implies standard:')} Now suppose a quadrilateral has diagonals that bisect each other at right angles. The bisecting property means opposite triangles formed are congruent, giving opposite sides equal and parallel (parallelogram). The right-angle property creates four congruent right-angled triangles, forcing all four outer sides to be equal. ✓`,
            `<strong>Conclusion:</strong> Both directions hold, so the ${or('alternative definition')} is ${gr('logically equivalent')} to the ${bl('standard definition')}.`,
          ],
        },
        {
          question: "Thabo says 'a quadrilateral with one pair of opposite sides equal and parallel' is a valid alternative definition of a parallelogram. Is he correct?",
          answer: `Yes — Thabo is ${gr('correct')}`,
          steps: [
            `${bl('Standard definition of a parallelogram:')} A quadrilateral with both pairs of opposite sides parallel.`,
            `${or('Alternative definition proposed:')} A quadrilateral with just one pair of opposite sides that is both equal AND parallel.`,
            `${gr('Proof:')} Let ABCD be a quadrilateral where AB = CD and AB ∥ CD. Draw diagonal BD. Since AB ∥ CD, alternate interior angles ∠ABD = ∠CDB (AB ∥ CD, BD transversal). AB = CD is given, and BD is a shared side, so △ABD ≡ △CDB by SAS.`,
            `From the congruence: AD = BC and ∠ADB = ∠CBD. Since ∠ADB = ∠CBD are alternate interior angles with BD as transversal, it follows that AD ∥ BC.`,
            `Both pairs of opposite sides are now parallel, satisfying the ${bl('standard parallelogram definition')}. ✓`,
            `<strong>Conclusion:</strong> Thabo is correct — the ${or('alternative definition')} is valid and equivalent to the ${bl('standard definition')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how standard and alternative definitions of special quadrilaterals are proven to be equivalent using geometric reasoning" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a rhombus with the standard definition labelled blue and the alternative diagonal bisecting at right angles definition labelled orange with proof connecting them labelled green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROVING GEOMETRIC CONJECTURES AND DISPROVING FALSE ONES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proving-disproving-conjectures',
      title: 'Proving Geometric Conjectures and Disproving False Ones',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">When investigating geometric properties, we form ${bl('conjectures')} based on patterns we observe. We then either ${gr('validate (prove)')} them using logical geometric reasoning, or ${re('disprove')} them by finding a counter-example — a single specific case where the conjecture fails. The ${or('testing process')} involves drawing examples, measuring, reasoning about properties, and applying known theorems.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('conjecture stated')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('testing process')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('conclusion: proven')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('conclusion: disproven')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to test a geometric conjecture</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('State the conjecture clearly')} — write exactly what you believe to be true before testing.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Test with multiple examples')} — draw several different cases, measure, and look for a pattern.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3a</span>` +
        `<p style="margin:0;font-size:14px;"><strong>If you find a case where it fails:</strong> You have a ${re('counter-example')} — the conjecture is ${re('DISPROVEN')}. Stop here; one counter-example is sufficient.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3b</span>` +
        `<p style="margin:0;font-size:14px;"><strong>If examples all hold:</strong> Build a ${gr('formal proof')} using known theorems and logical reasoning. Examples alone are not enough to ${gr('prove')} a conjecture.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Proof vs counter-example</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${re('counter-example')} disproves with ONE case. A ${gr('proof')} must cover ALL possible cases — it requires logical reasoning, not just measurements. "I drew 10 shapes and it worked" is never a proof.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Amahle conjectures that 'all quadrilaterals with one pair of parallel sides have equal diagonals'. Test this conjecture using a trapezium.",
          answer: `The conjecture is ${re('FALSE')} — disproved by counter-example`,
          steps: [
            `${bl('Conjecture stated:')} All quadrilaterals with one pair of parallel sides (trapeziums) have equal diagonals.`,
            `${or('Testing process:')} Draw a general (non-isosceles) trapezium ABCD where AB ∥ CD but AD ≠ BC. Measure both diagonals AC and BD.`,
            `${re('Counter-example:')} Trapezium with A(0,0), B(6,0), C(5,3), D(1,3). Diagonal AC = √(25+9) = √34 ≈ 5.83. Diagonal BD = √(25+9) = ... let's recalculate: BD from (6,0) to (1,3) = √(25+9) = √34. Try instead D(2,3): AC from (0,0) to (5,3) = √34 ≈ 5.83; BD from (6,0) to (2,3) = √(16+9) = 5. These are unequal.`,
            `A general (scalene) trapezium has ${re('unequal diagonals')}, providing a clear counter-example.`,
            `<strong>Conclusion:</strong> ${re('The conjecture is disproven.')} Only an isosceles trapezium (where the non-parallel sides are equal) has equal diagonals — this is a special case, not the general rule.`,
          ],
        },
        {
          question: "Sipho conjectures that 'the diagonals of a kite are always perpendicular'. Investigate and confirm or disprove this conjecture.",
          answer: `The conjecture is ${gr('TRUE')} — the diagonals of a kite are always perpendicular`,
          steps: [
            `${bl('Conjecture stated:')} The diagonals of any kite intersect at 90°.`,
            `${or('Testing process:')} Draw several kites of different shapes and sizes. In each case, measure the angle at which the diagonals intersect.`,
            `${or('Observations:')} Every kite tested shows a 90° angle at the intersection of the diagonals — the pattern holds consistently.`,
            `${gr('Formal proof:')} A kite ABCD has AB = AD and CB = CD. The main diagonal AC is a line of symmetry for the kite. Because of this symmetry, B and D are mirror images of each other across AC. The diagonal BD therefore crosses AC at right angles (it is perpendicular to the axis of symmetry).`,
            `More formally: △ABC ≡ △ADC (SSS, since AB = AD, CB = CD, AC shared). Therefore ∠BAO = ∠DAO, meaning AO bisects ∠BAD. In △ABO and △ADO, AO is common, AB = AD, and ∠BAO = ∠DAO, so by SAS △ABO ≡ △ADO. Hence ∠AOB = ∠AOD. Since ∠AOB + ∠AOD = 180°, each equals 90°. ✓`,
            `<strong>Conclusion:</strong> ${gr('The conjecture is proven.')} The diagonals of a kite always intersect at right angles.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to state test and either prove or disprove geometric conjectures about quadrilaterals using counter-examples and logical proofs" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a conjecture stated in blue tested with examples in orange leading to either a counter-example highlighted red or a formal proof highlighted green" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Two triangles have identical angles but different side lengths. Are they similar or congruent?',
      answer: 'similar',
      checkMode: 'auto',
      correctAnswer: 'similar',
      explanation: 'Same angles but different side lengths means the triangles are the same shape but a different size — this is the definition of similarity. Congruence requires both equal angles AND equal sides.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Two triangles have the same angles AND the same side lengths. Are they similar, congruent, or both?',
      answer: 'both',
      checkMode: 'auto',
      correctAnswer: 'both',
      explanation: 'Equal angles satisfy the similarity condition; equal sides in addition satisfy the congruence condition. Since congruent triangles automatically have equal angles, they are both similar and congruent.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says all congruent triangles are also similar, but not all similar triangles are congruent. Is he correct? Explain.',
      answer: 'Yes — congruent triangles satisfy the conditions for similarity (equal angles) plus equal sides, but similar triangles only require equal angles, so they may differ in size.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Are the diagonals of a general parallelogram always equal?',
      answer: 'no',
      checkMode: 'auto',
      correctAnswer: 'no',
      explanation: 'Only rectangles (and squares) among parallelograms have equal diagonals. A general parallelogram with non-right angles has diagonals of different lengths.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'What additional property must a parallelogram have for its diagonals to be equal?',
      answer: 'it must be a rectangle',
      checkMode: 'auto',
      correctAnswer: 'it must be a rectangle',
      explanation: 'A parallelogram has equal diagonals if and only if all four angles are right angles — making it a rectangle. Equal diagonals are a direct consequence of the right-angle property.',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato says the diagonals of every rhombus bisect each other at right angles. Is this always true? Explain using the rhombus's properties.",
      answer: "Yes — this is a proven property of all rhombi, since a rhombus's diagonals create congruent triangles due to its four equal sides, forcing perpendicular intersection.",
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'State the standard definition of a parallelogram.',
      answer: 'a quadrilateral with both pairs of opposite sides parallel',
      checkMode: 'auto',
      correctAnswer: 'a quadrilateral with both pairs of opposite sides parallel',
      explanation: 'The standard definition of a parallelogram requires both pairs of opposite sides to be parallel. This is the minimum condition that distinguishes a parallelogram from other quadrilaterals.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Provide an alternative definition of a parallelogram using angles instead of sides.',
      answer: 'A quadrilateral in which both pairs of opposite angles are equal.',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo says 'a quadrilateral with diagonals that bisect each other' is sufficient to define a parallelogram. Is he correct? Explain.",
      answer: "Yes — if the diagonals of a quadrilateral bisect each other, this alone is sufficient to prove that both pairs of opposite sides are parallel, satisfying the parallelogram definition.",
      checkMode: 'self',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle conjectures that all rectangles are squares. Find a counter-example to disprove this.',
      answer: 'Any rectangle where length ≠ width, e.g. a 4 cm by 6 cm rectangle — it has four right angles (making it a rectangle) but its sides are not all equal (so it is not a square).',
      checkMode: 'self',
    },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Investigate whether the conjecture 'all kites have at least one pair of equal angles' is true, and explain your reasoning.",
      answer: "Yes — a kite has one pair of opposite angles equal (between the two pairs of adjacent equal sides), which can be proven using the line of symmetry that divides the kite into two congruent triangles.",
      checkMode: 'self',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho says a trapezium always has equal diagonals. Provide a counter-example.',
      answer: 'A general (non-isosceles) trapezium typically has unequal diagonals; only isosceles trapeziums have equal diagonals, making the general conjecture false.',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Prove that if a quadrilateral has one pair of opposite sides that are both equal and parallel, it must be a parallelogram.',
      answer: 'If one pair of sides is equal and parallel, the diagonal connecting the other two vertices creates two congruent triangles (by SAS), which forces the other pair of sides to also be equal and parallel.',
      checkMode: 'self',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'State two properties that distinguish a square from a general rhombus.',
      answer: 'a square has 4 right angles and equal diagonals',
      checkMode: 'auto',
      correctAnswer: 'a square has 4 right angles and equal diagonals',
      explanation: 'A rhombus has four equal sides but its angles need not be 90°. A square adds the requirement of four right angles, which also forces the diagonals to be equal in length — distinguishing it from a general rhombus.',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato conjectures that 'the diagonals of a kite always bisect each other'. Investigate this for a general kite and state your conclusion.",
      answer: "This is generally false — only one diagonal of a kite is bisected by the other; the diagonals of a kite do not both bisect each other unless it is also a rhombus.",
      checkMode: 'self',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo says two triangles with two pairs of equal angles must be similar. Is he correct? Explain.',
      answer: "Yes — if two angles match, the third angle must also match (since angles sum to 180°), satisfying the AA similarity condition.",
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Provide a proof or disproof for the conjecture: 'all quadrilaterals with perpendicular diagonals are kites'.",
      answer: "This is false — a square also has perpendicular diagonals but is not classified specifically as a kite (though technically it satisfies kite properties too); more precisely, having perpendicular diagonals alone doesn't guarantee the adjacent-side-pairs property that strictly defines a kite.",
      checkMode: 'self',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle investigates whether 'a quadrilateral with one right angle is always a rectangle'. Find a counter-example.",
      answer: "A right-angled trapezium has one right angle but is not a rectangle, since not all four angles are 90°.",
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'State the alternative definition of a rhombus based on its diagonals.',
      answer: 'a quadrilateral whose diagonals bisect each other at right angles',
      checkMode: 'auto',
      correctAnswer: 'a quadrilateral whose diagonals bisect each other at right angles',
      explanation: 'This is a valid alternative definition of a rhombus — equivalent to the standard definition (a parallelogram with all four sides equal). Both definitions describe exactly the same set of shapes.',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says proving a conjecture with five different examples is enough to establish it as always true. Is he correct? Explain why or why not.',
      answer: 'No — multiple specific examples supporting a conjecture do not constitute a general proof; a formal geometric proof using established properties and logical reasoning is required to prove a conjecture true for all cases.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered Euclidean geometry.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 50, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },
}
