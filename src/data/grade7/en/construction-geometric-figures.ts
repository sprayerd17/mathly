import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (construction roles) ─────────────────────────────────────
// measured/given length or angle → blue   (#2563eb)
// drawn/constructed result       → green  (#16a34a)
// tool markings / set square     → orange (#ea580c)
// arc / compass width            → blue   (#2563eb) — reuses bl for consistency with Grade 8
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Construction of Geometric Figures',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — USING A RULER AND PROTRACTOR ACCURATELY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ruler-protractor-accuracy',
      title: 'Using a Ruler and Protractor Accurately',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Before we can construct shapes, we need to be able to measure and draw accurately. A <strong>ruler</strong> is used to measure and draw line segments of an exact length, and a <strong>protractor</strong> is used to measure and draw angles of an exact size. Getting these basic skills right is essential — every construction later on depends on careful, accurate measuring.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('given length / angle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('drawn line / angle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('protractor / ruler marking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to draw a line segment of a given length</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Place the ${or('0 cm mark')} of the ruler at your starting point and mark it as one endpoint.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Keeping the ruler still, find the ${bl('given length')} mark on the ruler's scale and mark this as the other endpoint.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Join the two marks with a straight ${gr('drawn line')} along the edge of the ruler.</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to draw an angle of a given size</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Draw a straight line and mark a point on it — this point is the <strong>vertex</strong> of the angle.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Place the ${or('centre point (origin)')} of the protractor exactly on the vertex, with the ${or('baseline')} of the protractor lying along the straight line.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Find the ${bl('given angle size')} on the protractor's scale (reading from 0° on the correct side) and mark a small dot at that point.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">4</div>` +
        `<p style="margin:0;color:#374151;">Remove the protractor and use a ruler to join the vertex to the dot with a straight ${gr('drawn line')} — this completes the angle.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Tip: which scale to read</p>` +
        `<p style="margin:0;color:#92400e;">Most protractors have two scales running in opposite directions (0°→180° and 180°→0°). Always start counting from ${or('0°')} on the side where your baseline arm lies, not just from whichever scale looks closest to the number you want.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Draw a line segment PQ that is 7 cm long.',
          answer: `A straight ${gr('line segment')} exactly ${bl('7 cm')} long, drawn with a ruler.`,
          steps: [
            `Place the ${or('0 cm mark')} of the ruler at point <strong>P</strong>.`,
            `Find the ${bl('7 cm')} mark on the ruler's scale and mark this point as <strong>Q</strong>.`,
            `Join P to Q with a straight ${gr('line')} along the ruler's edge. Check by re-measuring: PQ = ${bl('7 cm')}.`,
          ],
        },
        {
          question: 'Use a protractor to draw an angle of 50° at point V.',
          answer: `An angle of exactly ${bl('50°')} drawn at vertex <strong>V</strong>.`,
          steps: [
            `Draw a straight line through <strong>V</strong> — this will be one arm of the angle.`,
            `Place the ${or('centre point')} of the protractor on <strong>V</strong>, with the ${or('baseline')} lying exactly along the arm.`,
            `Starting from ${or('0°')} on that side, count around to ${bl('50°')} and mark a dot.`,
            `Join <strong>V</strong> to the dot with a ruler to form the second arm — the angle between the two arms is ${gr('50°')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Which instrument do you use to measure the size of an angle in degrees?',
          answer: 'protractor',
          checkMode: 'auto',
          correctAnswer: 'protractor',
          explanation: 'A protractor has a scale marked in degrees (usually 0° to 180°) used to measure or draw angles accurately.',
        },
        {
          difficulty: 'Medium',
          question: 'Describe, in your own words, the steps you would follow to draw a line segment exactly 9,5 cm long using a ruler.',
          answer: 'Place the 0 cm mark of the ruler at the starting point, find the 9,5 cm mark on the scale, mark that point, then join the two points with a straight line along the ruler edge.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle measures an angle with her protractor. She places the centre point correctly on the vertex, but reads off 130° from the outer scale when the angle actually opens from 0° on the inner scale. What mistake has she made, and what is the correct size of the angle if the inner-scale reading at the same arm position is 50°?\n\na) Explain her mistake.\nb) What is the correct angle size?',
          answer: 'a) She read the wrong scale — protractors have two scales running in opposite directions, and she must read from 0° on the side where the baseline arm actually lies.\nb) 50°',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A ruler measuring a 7 cm line segment PQ, and a protractor placed correctly at vertex V measuring a 50° angle, with the baseline and 0° starting point highlighted" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to accurately draw a line segment of a given length with a ruler, and an angle of a given size with a protractor, with given measurements in blue and drawn results in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONSTRUCTING PERPENDICULAR AND PARALLEL LINES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perpendicular-parallel-lines',
      title: 'Constructing Perpendicular and Parallel Lines',
      icon: '⊥',
      explanation:
        `<p style="margin-bottom:16px;">A <strong>perpendicular line</strong> meets another line at exactly 90°. A <strong>parallel line</strong> stays the exact same distance from another line all the way along and never meets it — we say the two lines are <strong>equidistant</strong> (an equal distance apart) at every point. We can construct both accurately using a ruler and a <strong>set square</strong> (a right-angled triangular tool), or using a compass.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('original line')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('perpendicular / parallel line')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('set square')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key terms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Perpendicular Lines</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two lines that meet at exactly 90° (a right angle).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Parallel Lines</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Two straight lines in the same plane that never meet, no matter how far they are extended.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Equidistant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">An equal distance apart at every point. Parallel lines are equidistant from each other along their whole length.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to construct a perpendicular line using a set square</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Line up the ${or('set square')}'s longer edge exactly along the ${bl('original line')}, with the right-angle corner at the point where the perpendicular must pass through.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Draw the ${gr('perpendicular line')} along the set square's short edge (the one that forms the 90° angle) — this line meets the ${bl('original line')} at exactly 90°.</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to construct a parallel line using a ruler and set square</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#16a34a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Place one edge of the ${or('set square')} against the ${bl('original line')}, and place a ruler flat against another edge of the set square to act as a guide.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#16a34a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Holding the ruler firmly in place, slide the ${or('set square')} along the ruler to the position where the ${gr('parallel line')} must be drawn.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#16a34a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Draw the ${gr('parallel line')} along the same edge of the set square as before — since the set square's angle to the ruler has not changed, this new line is ${or('equidistant')} from the original line all the way along, so it is parallel.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tip: checking your construction</p>` +
        `<p style="margin:0;color:#1e3a8a;">After constructing a ${gr('perpendicular line')}, check it with a protractor — it should read exactly 90°. After constructing a ${gr('parallel line')}, measure the perpendicular distance between the two lines at two different points — if the lines are truly parallel, both distances will be equal (${or('equidistant')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Use a set square to construct a line perpendicular to line AB, passing through point P on the line.',
          answer: `A ${gr('perpendicular line')} through <strong>P</strong>, meeting AB at exactly 90°.`,
          steps: [
            `Line up the ${or('longer edge')} of the set square exactly along ${bl('line AB')}, with the right-angle corner positioned at <strong>P</strong>.`,
            `Draw a ${gr('line')} along the set square's other edge, starting at <strong>P</strong>.`,
            `This ${gr('drawn line')} meets AB at exactly 90° at P, so it is perpendicular to AB.`,
          ],
        },
        {
          question: 'Construct a line parallel to line CD, passing through point R which is 4 cm away from CD.',
          answer: `A ${gr('parallel line')} through <strong>R</strong>, remaining ${or('equidistant')} (4 cm) from CD along its whole length.`,
          steps: [
            `Place a set square against ${bl('line CD')} and a ruler against another edge of the set square as a sliding guide.`,
            `Slide the set square along the ruler until its edge lines up with point <strong>R</strong> (measuring 4 cm from CD using a separate check with the ruler).`,
            `Draw the ${gr('parallel line')} through <strong>R</strong> along the set square's edge.`,
            `Since the set square's angle against the ruler did not change while sliding, every point on the new line is the same ${or('4 cm')} distance from CD — the lines are parallel.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'What is the mathematical word for two lines that are always the same distance apart and never meet?',
          answer: 'parallel (the lines are equidistant)',
          checkMode: 'auto',
          correctAnswer: 'equidistant',
          explanation: 'Points or lines that stay an equal distance apart at every point are described as equidistant — this is the property that makes two lines parallel.',
        },
        {
          difficulty: 'Medium',
          question: 'Describe how you would use a ruler and set square to construct a line perpendicular to a given line AB at a marked point P on the line.',
          answer: 'Line up the longer edge of the set square exactly along AB with the right-angle corner at P, then draw a line along the other edge of the set square through P — this line meets AB at exactly 90°.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho constructs a line he claims is parallel to line EF. He measures the distance between the two lines at one point and gets 5 cm.\n\na) Is measuring the distance at only one point enough to prove the lines are parallel? Explain.\nb) What extra check should Sipho do to be sure?',
          answer: 'a) No — checking only one point is not enough, because two lines could be 5 cm apart at that point but moving closer together or further apart elsewhere (i.e. not actually parallel).\nb) He should measure the perpendicular distance between the lines at a second point, well away from the first. If both distances are equal (5 cm), the lines are equidistant everywhere and therefore parallel.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A set square placed against a line AB with a perpendicular line drawn through point P at 90°; a second diagram showing a set square sliding along a ruler to draw a line parallel to CD through point R, with equal distances marked at two points" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to construct a perpendicular line and a parallel line using a ruler and set square, with the original line in blue, the constructed perpendicular or parallel line in green and the set square in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONSTRUCTING TRIANGLES GIVEN THREE SIDES (SSS)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'constructing-triangles-sss',
      title: 'Constructing Triangles Given Three Sides',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">We can construct a triangle accurately when we are given all three side lengths, using only a <strong>compass</strong> and <strong>ruler</strong>. This method works because a compass lets us mark every point that is an exact fixed distance (the ${bl('radius')}) away from a centre — so where two ${bl('compass arcs')} cross is a point that is the correct distance from both endpoints of the base at the same time.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('compass arcs')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('constructed triangle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('given side lengths')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Steps to construct a triangle given three side lengths</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Choose the longest ${or('given side')} and draw it first as your base, using a ruler, labelling the endpoints A and B.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Set the compass width to the ${or('second side length')} (using a ruler to measure the compass opening). Place the compass point on <strong>A</strong> and draw a wide ${bl('arc')} above the base.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Set the compass width to the ${or('third side length')}. Place the compass point on <strong>B</strong> and draw a second ${bl('arc')} that crosses the first.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">4</div>` +
        `<p style="margin:0;color:#374151;">Mark the point where the two ${bl('arcs')} cross as <strong>C</strong>. Join <strong>A</strong> to <strong>C</strong> and <strong>B</strong> to <strong>C</strong> with a ruler to complete the ${gr('triangle')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Can three lengths always form a triangle?</p>` +
        `<p style="margin:0;color:#92400e;">Not always! If the two shorter sides added together are <strong>not longer</strong> than the longest side, the two arcs will not cross — the triangle cannot be built. So before constructing, quickly check: does <em>(shortest side + middle side) &gt; longest side</em>? If yes, the triangle can be constructed. If the two shorter sides add up to exactly the longest side, or less, the "triangle" simply flattens out into a straight line or cannot close at all.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why does this method work?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Every point on a ${bl('compass arc')} is exactly the same distance from the centre (the compass's fixed radius). By drawing one ${bl('arc')} the correct distance from A and another the correct distance from B, the crossing point is automatically the correct distance from <strong>both</strong> A and B at once — giving us the exact third vertex without any guessing.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Construct a triangle with sides 6 cm, 7 cm and 9 cm.',
          answer: `A ${gr('triangle')} with sides exactly ${or('6 cm')}, ${or('7 cm')} and ${or('9 cm')}.`,
          steps: [
            `Check first: is a triangle possible? Two shorter sides: ${or('6')} + ${or('7')} = ${or('13')}, which is greater than the longest side (${or('9')}) — yes, it is possible.`,
            `Draw the longest side, ${or('9 cm')}, as the base AB using a ruler.`,
            `Set the compass to ${or('6 cm')}, place the point on <strong>A</strong>, and draw an ${bl('arc')} above the base.`,
            `Set the compass to ${or('7 cm')}, place the point on <strong>B</strong>, and draw a second ${bl('arc')} crossing the first.`,
            `Mark the crossing point as <strong>C</strong> and join A–C and B–C with a ruler to complete the ${gr('triangle')}.`,
          ],
        },
        {
          question: 'Thabo wants to construct a triangle with sides 3 cm, 4 cm and 9 cm. Will this work? Explain, then describe what happens if he tries anyway.',
          answer: `No — this ${or('will not work')}, because 3 cm + 4 cm = 7 cm is less than 9 cm.`,
          steps: [
            `Check the two shorter sides added together: ${or('3')} + ${or('4')} = ${or('7')}.`,
            `Compare this to the longest side: ${or('7')} is less than ${or('9')}.`,
            `Since the two shorter sides do not add up to more than the longest side, the two ${bl('compass arcs')} — one of radius 3 cm from one endpoint, one of radius 4 cm from the other endpoint of a 9 cm base — will not be long enough to reach each other and cross.`,
            `If Thabo tries anyway, the arcs will not intersect, so no third vertex can be found and the triangle cannot be constructed.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'To construct a triangle with a side of 8 cm using a compass, what should you set the compass radius (width) to in order to draw the arc for that side?',
          answer: '8 cm',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'The compass width must be set to exactly the length of the side it represents, so the arc marks every point that is that distance from the endpoint.',
        },
        {
          difficulty: 'Medium',
          question: 'A triangle has sides 5 cm, 12 cm and 13 cm.\n\na) Check whether these three lengths can form a triangle.\nb) If they can, which side should be drawn first as the base, and why?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Can these lengths form a triangle? (yes/no)',
              correctAnswer: 'yes',
              explanation: 'Two shorter sides: 5 + 12 = 17, which is greater than the longest side, 13. So yes, a triangle can be formed.',
            },
            {
              label: 'b) Which length (in cm) should be drawn first as the base?',
              correctAnswer: '13',
              explanation: 'It is easiest to draw the longest side (13 cm) first as the base, then swing the two compass arcs (5 cm and 12 cm) from its endpoints to find the third vertex.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Lerato is given three lengths: 4 cm, 5 cm and 10 cm, and asked to construct a triangle.\n\na) Show whether this triangle can be constructed.\nb) Explain, in terms of the compass arcs, exactly what would go wrong if Lerato tried to construct it anyway.',
          answer: 'a) No — the two shorter sides add to 4 + 5 = 9 cm, which is less than the longest side, 10 cm, so the triangle cannot be constructed.\nb) If Lerato draws the 10 cm base and then draws a 4 cm arc from one end and a 5 cm arc from the other end, the two arcs are too short to reach each other above the base line — they will not cross, so there is no possible position for the third vertex.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step construction of a triangle with sides 6 cm, 7 cm and 9 cm, showing the base drawn first, then two compass arcs crossing above it to locate the third vertex; a second diagram showing two arcs from a 9 cm base that are too short to cross, for sides 3 cm and 4 cm" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to construct a triangle given three side lengths using a compass and ruler, including how to check first whether the three lengths can form a triangle, with given side lengths in orange, compass arcs in blue and the completed triangle in green" />',
    },
  ],

  resultsConfig: {
    totalMarks: 10,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered construction of geometric figures.' },
      { minPercent: 75, message: 'Great work!' },
      { minPercent: 55, message: 'Good effort, review and try again.' },
      { minPercent: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 10, message: 'Outstanding! A perfect score — you have completely mastered these construction basics for Grade 7. Keep it up!' },
    { minScore: 8, message: 'Excellent work! You have a very strong grasp of ruler, protractor and compass construction. Review any missed parts and you will have it perfect.' },
    { minScore: 6, message: 'Well done! You understand most of the content. Go back to the sections where you dropped marks and give it another go.' },
    { minScore: 3, message: 'Good effort! Work back through the study guide and worked examples for each section, then try again.' },
    { minScore: 0, message: "Don't give up — every expert was once a beginner! Revisit the explanations and worked examples section by section, then try again." },
  ],
}
