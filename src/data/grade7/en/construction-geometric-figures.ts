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
        'A ruler measuring a 7 cm line segment PQ, and a protractor placed at vertex V with its baseline along one arm, measuring a 50° angle from the 0° mark.',

      diagramSvg:
        '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="95" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Ruler measuring PQ = 7 cm</text>' +
        '<rect x="15" y="25" width="160" height="20" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="15" y1="25" x2="15" y2="45" stroke="#ea580c" stroke-width="2"/>' +
        '<line x1="35" y1="25" x2="35" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="55" y1="25" x2="55" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="75" y1="25" x2="75" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="95" y1="25" x2="95" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="115" y1="25" x2="115" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="135" y1="25" x2="135" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="155" y1="25" x2="155" y2="45" stroke="#ea580c" stroke-width="2"/>' +
        '<line x1="175" y1="25" x2="175" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<text x="15" y="48" font-size="9" fill="#374151" text-anchor="middle">0</text>' +
        '<text x="155" y="48" font-size="9" fill="#374151" text-anchor="middle">7</text>' +
        '<text x="175" y="48" font-size="9" fill="#374151" text-anchor="middle">8</text>' +
        '<line x1="15" y1="60" x2="155" y2="60" stroke="#16a34a" stroke-width="3"/>' +
        '<line x1="15" y1="55" x2="15" y2="65" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="155" y1="55" x2="155" y2="65" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="15" y="78" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">P</text>' +
        '<text x="155" y="78" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Q</text>' +
        '<text x="85" y="93" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">7 cm</text>' +
        '<text x="235" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Protractor measuring 50° at V</text>' +
        '<path d="M 165,150 A 70,70 0 0 1 305,150" fill="none" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="165" y1="150" x2="305" y2="150" stroke="#ea580c" stroke-width="2.5"/>' +
        '<line x1="235" y1="80" x2="235" y2="74" stroke="#0f1f3d" stroke-width="1"/>' +
        '<path d="M 255,150 A 20,20 0 0 1 247.9,134.7" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="266" y="141" font-size="11" font-weight="700" fill="#ea580c">50°</text>' +
        '<line x1="235" y1="150" x2="289.6" y2="84.9" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="276.8" cy="100.2" r="2.5" fill="#ea580c"/>' +
        '<circle cx="235" cy="150" r="3.5" fill="#ea580c"/>' +
        '<text x="235" y="166" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">V</text>' +
        '<text x="305" y="164" font-size="9" fill="#ea580c" text-anchor="middle">0°</text>' +
        '</svg>',

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
        'A set square placed against line AB with a perpendicular line drawn through point P at 90°, and a set square sliding along a ruler guide to draw a line parallel to CD through point R, with equal 4 cm distances marked at two points to confirm the lines are equidistant.',

      diagramSvg:
        '<svg viewBox="0 0 310 200" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="75" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Perpendicular line through P</text>' +
        '<line x1="15" y1="100" x2="140" y2="100" stroke="#2563eb" stroke-width="2.5"/>' +
        '<text x="15" y="115" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text>' +
        '<text x="140" y="115" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">B</text>' +
        '<polygon points="77,100 30,100 77,50" fill="#ea580c" fill-opacity="0.12" stroke="#ea580c" stroke-width="1.8"/>' +
        '<polyline points="70,100 70,93 77,93" fill="none" stroke="#ea580c" stroke-width="1.5"/>' +
        '<line x1="77" y1="100" x2="77" y2="40" stroke="#16a34a" stroke-width="2.5"/>' +
        '<text x="77" y="116" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">P</text>' +
        '<text x="86" y="94" font-size="9" font-weight="700" fill="#ea580c">90°</text>' +
        '<text x="237" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Parallel line through R</text>' +
        '<line x1="175" y1="140" x2="300" y2="140" stroke="#2563eb" stroke-width="2.5"/>' +
        '<text x="175" y="155" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">C</text>' +
        '<text x="300" y="155" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">D</text>' +
        '<line x1="175" y1="80" x2="300" y2="80" stroke="#16a34a" stroke-width="2.5"/>' +
        '<line x1="225" y1="150" x2="225" y2="60" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="4,3"/>' +
        '<polygon points="225,140 205,140 225,120" fill="#ea580c" fill-opacity="0.12" stroke="#ea580c" stroke-width="1.5"/>' +
        '<polygon points="225,80 205,80 225,60" fill="#ea580c" fill-opacity="0.12" stroke="#ea580c" stroke-width="1.5"/>' +
        '<line x1="190" y1="140" x2="190" y2="80" stroke="#ea580c" stroke-width="1.3"/>' +
        '<polygon points="190,80 186,88 194,88" fill="#ea580c"/>' +
        '<polygon points="190,140 186,132 194,132" fill="#ea580c"/>' +
        '<line x1="270" y1="140" x2="270" y2="80" stroke="#ea580c" stroke-width="1.3"/>' +
        '<polygon points="270,80 266,88 274,88" fill="#ea580c"/>' +
        '<polygon points="270,140 266,132 274,132" fill="#ea580c"/>' +
        '<text x="178" y="113" font-size="9" font-weight="700" fill="#ea580c" text-anchor="end">4 cm</text>' +
        '<text x="282" y="113" font-size="9" font-weight="700" fill="#ea580c" text-anchor="start">4 cm</text>' +
        '<circle cx="225" cy="80" r="2.5" fill="#16a34a"/>' +
        '<text x="225" y="70" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">R</text>' +
        '</svg>',

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
        'A triangle with sides 6 cm, 7 cm and 9 cm constructed from a 9 cm base with two crossing compass arcs locating the third vertex, next to a failed attempt with sides 3 cm, 4 cm and 9 cm where the two arcs are too short to cross.',

      diagramSvg:
        '<svg viewBox="0 0 320 195" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="65" y="14" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="middle">6, 7, 9 cm — possible</text>' +
        '<path d="M 77.96,124.47 A 60,60 0 0 1 20,80" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<path d="M 86.06,74.22 A 70,70 0 0 1 42.4,121.9" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<line x1="20" y1="140" x2="110" y2="140" stroke="#ea580c" stroke-width="2.5"/>' +
        '<line x1="20" y1="140" x2="57.78" y2="93.4" stroke="#16a34a" stroke-width="2.5"/>' +
        '<line x1="110" y1="140" x2="57.78" y2="93.4" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="20" cy="140" r="2.5" fill="#ea580c"/>' +
        '<circle cx="110" cy="140" r="2.5" fill="#ea580c"/>' +
        '<circle cx="57.78" cy="93.4" r="2.5" fill="#16a34a"/>' +
        '<text x="14" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">A</text>' +
        '<text x="116" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">B</text>' +
        '<text x="57.78" y="82" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">C</text>' +
        '<text x="65" y="169" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">9 cm</text>' +
        '<text x="24" y="105" font-size="9" font-weight="700" fill="#2563eb">6 cm</text>' +
        '<text x="92" y="105" font-size="9" font-weight="700" fill="#2563eb">7 cm</text>' +
        '<text x="215" y="14" font-size="10.5" font-weight="700" fill="#dc2626" text-anchor="middle">3, 4, 9 cm — not possible</text>' +
        '<path d="M 198.19,129.74 A 30,30 0 0 1 180.26,111.81" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<path d="M 246.32,102.41 A 40,40 0 0 1 222.41,126.32" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<line x1="198.19" y1="129.74" x2="222.41" y2="126.32" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,2"/>' +
        '<line x1="170" y1="140" x2="260" y2="140" stroke="#ea580c" stroke-width="2.5"/>' +
        '<circle cx="170" cy="140" r="2.5" fill="#ea580c"/>' +
        '<circle cx="260" cy="140" r="2.5" fill="#ea580c"/>' +
        '<text x="164" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">A</text>' +
        '<text x="266" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">B</text>' +
        '<text x="215" y="169" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">9 cm</text>' +
        '<text x="176" y="120" font-size="9" font-weight="700" fill="#2563eb">3 cm</text>' +
        '<text x="234" y="112" font-size="9" font-weight="700" fill="#2563eb">4 cm</text>' +
        '<text x="210" y="118" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">arcs don’t meet</text>' +
        '</svg>',

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Constructing triangles (SSS/SAS) | 4-6 Constructing
    // circles (radius/diameter) | 7-10 Bisecting lines & angles | 11-13
    // Constructing specific angles with a compass | 14-16 Properties/
    // vocabulary of constructions | 17-19 Analysing an already-constructed
    // figure (diagram-aware)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'A triangle must be constructed with sides 7 cm, 8 cm and 12 cm. Check whether these three lengths can form a triangle.', answer: 'Yes — the two shorter sides, 7 cm + 8 cm = 15 cm, which is greater than the longest side, 12 cm, so the triangle can be constructed.', checkMode: 'self', explanation: 'Two shorter sides: 7 + 8 = 15. Since 15 is greater than the longest side (12), the triangle is possible.' },
        { difficulty: 'Easy', question: 'Describe the steps you would follow to construct a triangle given its three side lengths (SSS), using a compass and ruler.', answer: 'Draw the longest side as the base with a ruler and label the endpoints. Set the compass to the second side length and draw an arc from one endpoint. Set the compass to the third side length and draw an arc from the other endpoint, crossing the first arc. Mark the crossing point as the third vertex and join it to both endpoints with a ruler.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'A triangle is to be constructed with sides 4 cm, 6 cm and 11 cm. Show whether this is possible, and if not, explain what would go wrong with the compass arcs.', answer: 'Not possible — the two shorter sides, 4 cm + 6 cm = 10 cm, are less than the longest side, 11 cm. If attempted, an arc of radius 4 cm from one end of the 11 cm base and an arc of radius 6 cm from the other end would not be long enough to reach each other, so they would never cross.', checkMode: 'self', explanation: '4 + 6 = 10, which is less than 11, so the two arcs cannot meet above the base.' },
        { difficulty: 'Medium', question: 'A triangle must be constructed given two sides of 9 cm and 6 cm with an included angle of 50° between them (SAS). Describe how you would construct this triangle.', answer: 'Draw the 9 cm side as a base using a ruler. At one endpoint, use a protractor to mark and draw a 50° angle. Along this new arm, measure 6 cm from that endpoint with a ruler to mark the third vertex. Join this vertex to the far endpoint of the base to complete the triangle.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'What compass radius (width) should be set to draw the arc needed to construct a circle with a radius of 6,5 cm?', answer: '6,5 cm', checkMode: 'auto', correctAnswer: '6,5', correctAnswers: ['6,5', '6,5 cm', '6.5', '6.5 cm'], explanation: 'A circle is constructed by keeping the compass width fixed at the radius throughout, so the compass must be set to exactly 6,5 cm.' },
        { difficulty: 'Easy-Medium', question: 'A circle must be constructed with a diameter of 14 cm. What compass width should be used?', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 cm'], explanation: 'The compass width for a circle construction must equal the radius, not the diameter. Radius = diameter ÷ 2 = 14 ÷ 2 = 7 cm.' },
        { difficulty: 'Medium', question: 'Describe the steps to construct a circle of radius 5 cm using a compass, starting from a marked centre point.', answer: 'Set the compass width to 5 cm using a ruler. Place the compass point exactly on the marked centre. Keeping the width fixed, rotate the compass through a full turn, letting the pencil trace out the circle.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Describe the steps to construct the perpendicular bisector of a line segment AB using only a compass and ruler (no protractor).', answer: 'Open the compass to a width more than half of AB. With the point on A, draw arcs above and below the line. Keeping the same width, place the point on B and draw arcs above and below that cross the first two arcs. Join the two crossing points with a straight line using a ruler — this line is the perpendicular bisector.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'What two properties does the perpendicular bisector of a line segment have, in relation to that segment?', answer: 'It cuts the segment exactly in half (bisects it) and crosses it at a right angle (90°), so it is both perpendicular to and a bisector of the segment.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In a construction, angle PQR = 80° is bisected by the ray QS using a compass. What is the size of angle PQS?', answer: '40°', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40°', '40 degrees'], explanation: 'Bisecting an angle splits it into two equal halves: 80° ÷ 2 = 40°.' },
        { difficulty: 'Medium', question: 'Angle XYZ = 64° is bisected using a compass to form two equal angles. Find the size of each of the two smaller angles.', answer: '32°', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32°', '32 degrees'], explanation: 'Bisecting divides the angle into two equal parts: 64° ÷ 2 = 32° each.' },
        { difficulty: 'Medium', question: 'Explain, step by step, how to bisect a given angle ABC using only a compass and ruler.', answer: 'Place the compass point on vertex B and draw an arc that crosses both arms of the angle, marking two points. Without changing the compass width, place the point on each of those two marked points in turn and draw two arcs that cross each other inside the angle. Join B to this crossing point with a ruler — this ray bisects angle ABC.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Describe how you would construct a 60° angle using only a compass and ruler, without a protractor.', answer: 'Draw a straight line and mark a point as the vertex. With the compass on the vertex, draw an arc crossing the line. Keeping the same compass width, place the point where that arc crosses the line and draw a second arc crossing the first. Join the vertex to this crossing point — the angle formed is exactly 60°, since the construction creates an equilateral triangle.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A 30° angle is required, and only a compass and ruler are available (no protractor). Explain how the 30° angle can be obtained from a 60° construction.', answer: 'First construct a 60° angle using the standard compass method. Then bisect that 60° angle using the angle bisector construction — bisecting splits it into two equal 30° angles.', checkMode: 'self', explanation: 'Bisecting a constructed 60° angle gives 60° ÷ 2 = 30°.' },
        { difficulty: 'Easy', question: 'In a compass construction, what is the correct name for the curved line traced out when the compass is opened to a fixed width and rotated around a centre point?', answer: 'arc', checkMode: 'auto', correctAnswer: 'arc', explanation: 'A curved line traced by a compass at a fixed radius from a centre point is called an arc (or, for a full rotation, a circle).' },
        { difficulty: 'Easy', question: 'What is the mathematical name for the point where two sides of a constructed angle or triangle meet?', answer: 'vertex', checkMode: 'auto', correctAnswer: 'vertex', correctAnswers: ['vertex', 'a vertex'], explanation: 'The point where two lines or arms of an angle meet is called the vertex.' },
        { difficulty: 'Medium', question: 'When constructing a triangle using compass arcs, why should construction arcs be left visible on the final diagram rather than erased?', answer: 'The arcs are the evidence of how each vertex was located accurately using the compass, and examiners and checkers use them to confirm the correct construction method (for example SSS or SAS) was actually followed rather than the triangle being drawn freehand or with a protractor alone.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A triangle shown was constructed with AB = 6 cm, BC = 8 cm and the included angle B = 60°. State which construction method was used to draw this triangle.', answer: 'SAS (two sides and the included angle)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'two sides and the included angle'], explanation: 'Two side lengths (AB and BC) and the angle between them (angle B) are given, which is the definition of the SAS (side-angle-side) construction method.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="124,150 190,150 146,74" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 164,150 A 26,26 0 0 1 177,127.5" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="138" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text><text x="157" y="145" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="182" y="108" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><circle cx="124" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="190" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="146" cy="74" r="2.5" fill="#0f1f3d"/><text x="118" y="163" font-size="12" fill="#0f1f3d">A</text><text x="192" y="163" font-size="12" fill="#0f1f3d">B</text><text x="146" y="64" font-size="12" fill="#0f1f3d" text-anchor="middle">C</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, all three sides were measured with a ruler before construction: PQ = 5 cm, QR = 7 cm and PR = 9 cm, with no angles given beforehand. Which construction method (using only these three measurements) produced this triangle?', answer: 'SSS (three sides)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'three sides'], explanation: 'Only three side lengths were given and used to construct the triangle, with the two compass arcs locating the third vertex — this is the SSS (side-side-side) method.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 139,150 74.8,107.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="112" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="89.5" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="139" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="74.8" cy="107.4" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">P</text><text x="141" y="163" font-size="12" fill="#0f1f3d">R</text><text x="74.8" y="97" font-size="12" fill="#0f1f3d" text-anchor="middle">Q</text></svg>' },
        { difficulty: 'Hard', question: 'A construction shown has line segment AB with an angle bisector drawn from a point on AB, dividing angle ABC = 96° into two parts. One part is labelled 50°. Explain why this construction must contain an error, and state what the two equal parts should actually measure.', answer: 'This is an error — a true angle bisector always splits the angle into two EQUAL parts, so the two parts should both be 96° ÷ 2 = 48°, not 50° and 46°. A part labelled 50° cannot come from a correct bisection of a 96° angle.', checkMode: 'self', explanation: '96° ÷ 2 = 48°. A genuine bisector always produces two equal halves, so unequal parts (like 50° and 46°) indicate a construction or measurement error.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="170" x2="39.4" y2="106.4" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="180.6" y2="106.4" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="110" y2="82.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 110,140 A 30,30 0 0 1 87.7,150.2" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 132.3,150.2 A 30,30 0 0 0 110,140" fill="none" stroke="#2563eb" stroke-width="2"/><text x="88" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50°</text><text x="132" y="130" font-size="13" fill="#0f1f3d" text-anchor="middle">?</text><circle cx="110" cy="170" r="2.5" fill="#0f1f3d"/><text x="103" y="183" font-size="12" fill="#0f1f3d">B</text><text x="30" y="103" font-size="12" fill="#0f1f3d">A</text><text x="185" y="103" font-size="12" fill="#0f1f3d">C</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Outstanding! You have mastered constructing triangles, circles, bisectors and angles with a compass and ruler.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'A triangle must be constructed with sides 6 cm, 9 cm and 13 cm. Check whether these three lengths can form a triangle.', answer: 'Yes — the two shorter sides, 6 cm + 9 cm = 15 cm, which is greater than the longest side, 13 cm, so the triangle can be constructed.', checkMode: 'self', explanation: 'Two shorter sides: 6 + 9 = 15. Since 15 is greater than the longest side (13), the triangle is possible.' },
        { difficulty: 'Easy', question: 'Explain, in your own words, the process for constructing a triangle when you are given all three side lengths (SSS).', answer: 'Use a ruler to draw the longest side as the base and label its endpoints. Open the compass to the second side length and draw an arc from one endpoint. Reset the compass to the third side length and draw an arc from the other endpoint so it crosses the first arc. The crossing point is the third vertex — join it to both base endpoints with a ruler.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'A triangle is to be constructed with sides 3 cm, 4 cm and 9 cm. Show whether this is possible, and if not, explain what would go wrong with the compass arcs.', answer: 'Not possible — the two shorter sides, 3 cm + 4 cm = 7 cm, are less than the longest side, 9 cm. If attempted, an arc of radius 3 cm from one end of the 9 cm base and an arc of radius 4 cm from the other end would not be long enough to reach each other, so they would never cross.', checkMode: 'self', explanation: '3 + 4 = 7, which is less than 9, so the two arcs cannot meet above the base.' },
        { difficulty: 'Medium', question: 'A triangle must be constructed given two sides of 7 cm and 5 cm with an included angle of 70° between them (SAS). Describe how you would construct this triangle.', answer: 'Draw the 7 cm side as a base using a ruler. At one endpoint, use a protractor to mark and draw a 70° angle. Along this new arm, measure 5 cm from that endpoint with a ruler to mark the third vertex. Join this vertex to the far endpoint of the base to complete the triangle.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'What compass radius (width) should be set to draw the arc needed to construct a circle with a radius of 4,5 cm?', answer: '4,5 cm', checkMode: 'auto', correctAnswer: '4,5', correctAnswers: ['4,5', '4,5 cm', '4.5', '4.5 cm'], explanation: 'A circle is constructed by keeping the compass width fixed at the radius throughout, so the compass must be set to exactly 4,5 cm.' },
        { difficulty: 'Easy-Medium', question: 'A circle must be constructed with a diameter of 20 cm. What compass width should be used?', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 cm'], explanation: 'The compass width for a circle construction must equal the radius, not the diameter. Radius = diameter ÷ 2 = 20 ÷ 2 = 10 cm.' },
        { difficulty: 'Medium', question: 'Describe the steps to construct a circle of radius 3 cm using a compass, starting from a marked centre point.', answer: 'Set the compass width to 3 cm using a ruler. Place the compass point exactly on the marked centre. Keeping the width fixed, rotate the compass through a full turn, letting the pencil trace out the circle.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Explain the steps to construct the perpendicular bisector of a line segment CD using only a compass and ruler (no protractor).', answer: 'Open the compass to a width more than half of CD. With the point on C, draw arcs above and below the line. Keeping the same width, place the point on D and draw arcs above and below that cross the first two arcs. Join the two crossing points with a straight line using a ruler — this line is the perpendicular bisector.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'If a point lies exactly on the perpendicular bisector of a line segment AB, what can be said about its distance to A compared to its distance to B?', answer: 'The point is equidistant from A and B — its distance to A is exactly equal to its distance to B.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In a construction, angle LMN = 110° is bisected by the ray MK using a compass. What is the size of angle LMK?', answer: '55°', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55°', '55 degrees'], explanation: 'Bisecting an angle splits it into two equal halves: 110° ÷ 2 = 55°.' },
        { difficulty: 'Medium', question: 'Angle DEF = 76° is bisected using a compass to form two equal angles. Find the size of each of the two smaller angles.', answer: '38°', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38°', '38 degrees'], explanation: 'Bisecting divides the angle into two equal parts: 76° ÷ 2 = 38° each.' },
        { difficulty: 'Medium', question: 'Explain, step by step, how to bisect a given angle DEF using only a compass and ruler.', answer: 'Place the compass point on vertex E and draw an arc that crosses both arms of the angle, marking two points. Without changing the compass width, place the point on each of those two marked points in turn and draw two arcs that cross each other inside the angle. Join E to this crossing point with a ruler — this ray bisects angle DEF.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A learner needs to construct a 60° angle but has no protractor available, only a compass and ruler. Describe the method.', answer: 'Draw a straight line and mark a point as the vertex. With the compass on the vertex, draw an arc crossing the line. Keeping the same compass width, place the point where that arc crosses the line and draw a second arc crossing the first. Join the vertex to this crossing point — the angle formed is exactly 60°, since the construction creates an equilateral triangle.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A 120° angle is required, using only a compass and ruler (no protractor). Explain how it can be obtained by combining two 60° constructions.', answer: 'Construct a 60° angle using the standard compass method along a straight base line. Then, using the same compass width, construct a second 60° angle immediately adjacent to the first, sharing the same vertex and one arm. The two 60° angles placed side by side combine to make a single 120° angle.', checkMode: 'self', explanation: '60° + 60° = 120°.' },
        { difficulty: 'Easy', question: 'What is the mathematical term for a line, ray or point that divides a given line segment or angle into two exactly equal parts?', answer: 'bisector', checkMode: 'auto', correctAnswer: 'bisector', correctAnswers: ['bisector', 'a bisector'], explanation: 'A bisector is a line, ray or point that divides a segment or angle into two exactly equal parts.' },
        { difficulty: 'Easy', question: 'In a circle construction, what is the fixed distance from the centre to any point on the circle called?', answer: 'radius', checkMode: 'auto', correctAnswer: 'radius', explanation: 'The radius is the fixed distance from the centre of a circle to any point on the circle, and it is the width the compass is set to during construction.' },
        { difficulty: 'Medium', question: 'When constructing the perpendicular bisector of a segment, why must the compass width used from each endpoint be more than half the length of the segment?', answer: 'If the compass width is less than half the segment length, the two arcs drawn from each endpoint will not reach far enough to cross each other above and below the line, so no intersection points would be found to draw the bisector through.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A triangle shown was constructed with DE = 5 cm, EF = 9 cm and the included angle E = 45°. State which construction method was used to draw this triangle.', answer: 'SAS (two sides and the included angle)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'two sides and the included angle'], explanation: 'Two side lengths (DE and EF) and the angle between them (angle E) are given, which is the definition of the SAS (side-angle-side) construction method.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="140,150 195,150 125,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 169,150 A 26,26 0 0 1 176.6,131.6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="180" y="140" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">45°</text><text x="167" y="145" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="172" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><circle cx="140" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="195" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="125" cy="80" r="2.5" fill="#0f1f3d"/><text x="132" y="163" font-size="12" fill="#0f1f3d">D</text><text x="198" y="163" font-size="12" fill="#0f1f3d">E</text><text x="125" y="70" font-size="12" fill="#0f1f3d" text-anchor="middle">F</text></svg>' },
        { difficulty: 'Medium', question: 'In the triangle shown, all three sides were measured with a ruler before construction: XY = 6 cm, YZ = 8 cm and XZ = 10 cm, with no angles given beforehand. Which construction method (using only these three measurements) produced this triangle?', answer: 'SSS (three sides)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'three sides'], explanation: 'Only three side lengths were given and used to construct the triangle, with the two compass arcs locating the third vertex — this is the SSS (side-side-side) method.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 150,150 79.6,97.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="122" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="95" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="150" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="79.6" cy="97.2" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">X</text><text x="153" y="163" font-size="12" fill="#0f1f3d">Z</text><text x="79.6" y="87" font-size="12" fill="#0f1f3d" text-anchor="middle">Y</text></svg>' },
        { difficulty: 'Hard', question: 'A construction shown has line segment KL with an angle bisector drawn from a point on KL, dividing angle KLM = 140° into two parts. One part is labelled 75°. Explain why this construction must contain an error, and state what the two equal parts should actually measure.', answer: 'This is an error — a true angle bisector always splits the angle into two EQUAL parts, so the two parts should both be 140° ÷ 2 = 70°, not 75° and 65°. A part labelled 75° cannot come from a correct bisection of a 140° angle.', checkMode: 'self', explanation: '140° ÷ 2 = 70°. A genuine bisector always produces two equal halves, so unequal parts (like 75° and 65°) indicate a construction or measurement error.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="170" x2="20.7" y2="137.5" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="199.3" y2="137.5" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="110" y2="82.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 110,140 A 30,30 0 0 1 81.8,159.7" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 138.2,159.7 A 30,30 0 0 0 110,140" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="132" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">75°</text><text x="140" y="132" font-size="13" fill="#0f1f3d" text-anchor="middle">?</text><circle cx="110" cy="170" r="2.5" fill="#0f1f3d"/><text x="103" y="183" font-size="12" fill="#0f1f3d">L</text><text x="10" y="134" font-size="12" fill="#0f1f3d">K</text><text x="203" y="134" font-size="12" fill="#0f1f3d">M</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Excellent! You can confidently construct triangles, circles, bisectors and angles using a compass and ruler.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'A triangle must be constructed with sides 8 cm, 10 cm and 14 cm. Check whether these three lengths can form a triangle.', answer: 'Yes — the two shorter sides, 8 cm + 10 cm = 18 cm, which is greater than the longest side, 14 cm, so the triangle can be constructed.', checkMode: 'self', explanation: 'Two shorter sides: 8 + 10 = 18. Since 18 is greater than the longest side (14), the triangle is possible.' },
        { difficulty: 'Easy', question: 'A carpenter wants to mark out a triangular brace using three given lengths of wood (SSS). Describe the steps to construct this triangle accurately with a compass and ruler.', answer: 'Draw the longest length as the base with a ruler and label the endpoints. Set the compass to the second length and draw an arc from one endpoint. Set the compass to the third length and draw an arc from the other endpoint, crossing the first arc. Mark the crossing point as the third vertex and join it to both endpoints with a ruler.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'A triangle is to be constructed with sides 5 cm, 6 cm and 13 cm. Show whether this is possible, and if not, explain what would go wrong with the compass arcs.', answer: 'Not possible — the two shorter sides, 5 cm + 6 cm = 11 cm, are less than the longest side, 13 cm. If attempted, an arc of radius 5 cm from one end of the 13 cm base and an arc of radius 6 cm from the other end would not be long enough to reach each other, so they would never cross.', checkMode: 'self', explanation: '5 + 6 = 11, which is less than 13, so the two arcs cannot meet above the base.' },
        { difficulty: 'Medium', question: 'A triangular flag must be constructed given two sides of 10 cm and 8 cm with an included angle of 40° between them (SAS). Describe how you would construct this triangle.', answer: 'Draw the 10 cm side as a base using a ruler. At one endpoint, use a protractor to mark and draw a 40° angle. Along this new arm, measure 8 cm from that endpoint with a ruler to mark the third vertex. Join this vertex to the far endpoint of the base to complete the triangle.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'What compass radius (width) should be set to draw the arc needed to construct a circle with a radius of 8,5 cm?', answer: '8,5 cm', checkMode: 'auto', correctAnswer: '8,5', correctAnswers: ['8,5', '8,5 cm', '8.5', '8.5 cm'], explanation: 'A circle is constructed by keeping the compass width fixed at the radius throughout, so the compass must be set to exactly 8,5 cm.' },
        { difficulty: 'Easy-Medium', question: 'A circular flower bed must be constructed with a diameter of 6 m. What compass (or trammel) width should be used?', answer: '3 m', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 m'], explanation: 'The compass width for a circle construction must equal the radius, not the diameter. Radius = diameter ÷ 2 = 6 ÷ 2 = 3 m.' },
        { difficulty: 'Medium', question: 'Describe the steps to construct a circle of radius 4 cm using a compass, starting from a marked centre point.', answer: 'Set the compass width to 4 cm using a ruler. Place the compass point exactly on the marked centre. Keeping the width fixed, rotate the compass through a full turn, letting the pencil trace out the circle.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Explain the steps to construct the perpendicular bisector of a line segment EF using only a compass and ruler (no protractor).', answer: 'Open the compass to a width more than half of EF. With the point on E, draw arcs above and below the line. Keeping the same width, place the point on F and draw arcs above and below that cross the first two arcs. Join the two crossing points with a straight line using a ruler — this line is the perpendicular bisector.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Why must the compass width stay exactly the same when swinging arcs from both endpoints during a perpendicular bisector construction?', answer: 'If the widths were different, the two pairs of arcs would not cross at points that are equidistant from both endpoints, so the resulting line would not actually be a true perpendicular bisector.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In a construction, angle STU = 150° is bisected by the ray TV using a compass. What is the size of angle STV?', answer: '75°', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°', '75 degrees'], explanation: 'Bisecting an angle splits it into two equal halves: 150° ÷ 2 = 75°.' },
        { difficulty: 'Medium', question: 'Angle GHI = 58° is bisected using a compass to form two equal angles. Find the size of each of the two smaller angles.', answer: '29°', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29°', '29 degrees'], explanation: 'Bisecting divides the angle into two equal parts: 58° ÷ 2 = 29° each.' },
        { difficulty: 'Medium', question: 'A technical drawing student must bisect angle GHI using only a compass and ruler. Explain the steps.', answer: 'Place the compass point on vertex H and draw an arc that crosses both arms of the angle, marking two points. Without changing the compass width, place the point on each of those two marked points in turn and draw two arcs that cross each other inside the angle. Join H to this crossing point with a ruler — this ray bisects angle GHI.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A sign-writer needs to mark out a 60° angle on a board but only has a compass and ruler. Describe the method.', answer: 'Draw a straight line and mark a point as the vertex. With the compass on the vertex, draw an arc crossing the line. Keeping the same compass width, place the point where that arc crosses the line and draw a second arc crossing the first. Join the vertex to this crossing point — the angle formed is exactly 60°, since the construction creates an equilateral triangle.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'A 150° angle is required, using only a compass and ruler (no protractor). Explain how it can be obtained by combining a 90° construction and a 60° construction.', answer: 'Construct a 90° angle at the required vertex along a straight base line. Then, using the same vertex, construct a 60° angle immediately adjacent to the 90° angle, sharing one arm. The two angles placed side by side combine to make a single 150° angle.', checkMode: 'self', explanation: '90° + 60° = 150°.' },
        { difficulty: 'Easy', question: 'What is the mathematical term for the fixed straight-line distance across a circle, passing through the centre?', answer: 'diameter', checkMode: 'auto', correctAnswer: 'diameter', explanation: 'The diameter is the straight-line distance across a circle through its centre, and it is always double the radius.' },
        { difficulty: 'Easy', question: 'What is the correct name for the instrument, made of two hinged arms with a point and a pencil, used to draw circles and arcs of a fixed radius?', answer: 'compass', checkMode: 'auto', correctAnswer: 'compass', explanation: 'A compass is the hinged two-armed instrument, with a point on one end and a pencil on the other, used to draw circles and arcs at a fixed radius.' },
        { difficulty: 'Medium', question: 'A construction diagram shows a triangle with all its compass arcs still visible, plus small tick marks on two sides that are equal in length. What does the presence of these tick marks tell you about the triangle, in addition to the SSS construction method used?', answer: 'The tick marks show that those two sides are equal in length, meaning the triangle is isosceles (or possibly equilateral if all three sides carry the same tick mark), in addition to having been constructed using three given side lengths.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'A triangle shown was constructed with GH = 7 cm, the angle at G = 55° and the angle at H = 65°, with GH drawn first. State which construction method was used to draw this triangle.', answer: 'ASA (two angles and the included side)', checkMode: 'auto', correctAnswer: 'ASA', correctAnswers: ['ASA', 'asa', 'two angles and the included side'], explanation: 'One side length (GH) and the two angles at its endpoints are given, which is the definition of the ASA (angle-side-angle) construction method.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 117,150 86.2,84" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 64,150 A 24,24 0 0 1 53.8,130.3" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">55°</text><path d="M 106.9,128.2 A 24,24 0 0 0 93,150" fill="none" stroke="#2563eb" stroke-width="2"/><text x="102" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">65°</text><text x="78" y="145" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="117" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="86.2" cy="84" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">G</text><text x="120" y="163" font-size="12" fill="#0f1f3d">H</text><text x="86.2" y="74" font-size="12" fill="#0f1f3d" text-anchor="middle">I</text></svg>' },
        { difficulty: 'Medium', question: 'A triangle shown was constructed with JK = 6 cm, KL = 8,5 cm and JL = 5 cm, with no angles given beforehand. Which construction method (using only these three measurements) produced this triangle?', answer: 'SSS (three sides)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'three sides'], explanation: 'Only three side lengths were given and used to construct the triangle, with the two compass arcs locating the third vertex — this is the SSS (side-side-side) method.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 133.5,150 93.9,111.9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="60" y="138" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="114" y="138" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="86.75" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8,5 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="133.5" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="93.9" cy="111.9" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">K</text><text x="136" y="163" font-size="12" fill="#0f1f3d">L</text><text x="93.9" y="101" font-size="12" fill="#0f1f3d" text-anchor="middle">J</text></svg>' },
        { difficulty: 'Hard', question: 'A construction shown has line segment MN with an angle bisector drawn from a point on MN, dividing angle MNO = 88° into two parts. One part is labelled 50°. Explain why this construction must contain an error, and state what the two equal parts should actually measure.', answer: 'This is an error — a true angle bisector always splits the angle into two EQUAL parts, so the two parts should both be 88° ÷ 2 = 44°, not 50° and 38°. A part labelled 50° cannot come from a correct bisection of an 88° angle.', checkMode: 'self', explanation: '88° ÷ 2 = 44°. A genuine bisector always produces two equal halves, so unequal parts (like 50° and 38°) indicate a construction or measurement error.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="170" x2="44" y2="101.7" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="176" y2="101.7" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="110" y2="82.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 110,140 A 30,30 0 0 1 89.2,148.4" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 130.8,148.4 A 30,30 0 0 0 110,140" fill="none" stroke="#2563eb" stroke-width="2"/><text x="88" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50°</text><text x="132" y="135" font-size="13" fill="#0f1f3d" text-anchor="middle">?</text><circle cx="110" cy="170" r="2.5" fill="#0f1f3d"/><text x="103" y="183" font-size="12" fill="#0f1f3d">N</text><text x="34" y="98" font-size="12" fill="#0f1f3d">M</text><text x="180" y="98" font-size="12" fill="#0f1f3d">O</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantastic! You have a strong command of triangle, circle, bisector and angle constructions.' },
        { minScore: 13, message: 'Great work! Review any missed questions and try again.' },
        { minScore: 8, message: 'Good effort! Revisit the worked examples and try this set again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
