import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Viewing Objects',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WHAT IS A VIEW?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-view',
      title: 'What Is a View?',
      icon: '👀',
      explanation: `
<p style="margin-bottom:14px;">When you look at an object, what you see depends on <strong>where you are standing</strong>. The picture your eyes take in from one spot is called a <strong>view</strong>. Walk around the same object and you will see something different every time — even though the object itself never changes.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Try it yourself 🧢</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Put a cap on the table. Look at it straight from the front, then crouch down and look at it from the side, then stand up and look down at it from above. Three completely different pictures — but it is the same cap the whole time.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The three views we use</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Front view</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">What you see when you stand directly <strong style="color:#1e40af;">in front of</strong> the object, looking straight at it.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Side view</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">What you see when you stand at the <strong style="color:#dc2626;">side</strong> of the object, looking at it from the left or the right.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Top view</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">What you see when you look <strong style="color:#16a34a;">straight down</strong> on the object from above. This is also called a <strong>plan view</strong>.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">The object does not change — only your <strong>position</strong> changes. A view always matches a <strong>viewpoint</strong>: where the viewer is standing and which way they are looking.</p>
</div>`,
      workedExamples: [
        {
          question: 'A shoe is placed on a table. Describe what you would expect to see in its front view, side view and top view.',
          steps: [
            '<strong style="color:#1e40af;">Front view</strong> — standing in front of the shoe (facing the toe), you see the rounded toe shape.',
            '<strong style="color:#dc2626;">Side view</strong> — standing at the side, you see the long outline of the shoe from heel to toe, including the laces and the curve of the sole.',
            '<strong style="color:#16a34a;">Top view</strong> — looking straight down, you see the outline of the shoe from above, like a footprint shape with the laces visible.',
          ],
          answer:
            'Front view: the rounded toe shape. Side view: the full outline from heel to toe. Top view: a footprint-like outline seen from above.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A simple cap or shoe shown three times, each time with a small stick-figure viewer positioned at a different spot (in front, at the side, above) with an arrow pointing at the object, and the resulting view sketched next to each viewer',
      videoPlaceholder:
        'Short video of a real object such as a shoe being viewed from the front, side and top, showing how the picture changes as the viewer moves',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — MATCHING VIEWS TO EVERYDAY OBJECTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'matching-views-to-objects',
      title: 'Matching Views to Everyday Objects',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Once you know there are front, side and top views, you can practise <strong>matching a view to the object it belongs to</strong>. This means looking carefully at a picture and asking: "Which part of the object am I looking at, and from where?"</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to match a view</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Look at the <strong>whole object</strong> first and notice its overall shape.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Ask yourself: does this picture show the object from the <strong>front</strong>, the <strong>side</strong>, or the <strong>top</strong>?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Check which features are <strong>visible</strong> and which are <strong>hidden</strong> in that view — this is often the biggest clue.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Example: a cup ☕</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Front view:</strong> you can see the tall, curved outline of the cup — and the handle sticking out to one side</li>
    <li><strong>Side view (from the handle side):</strong> the handle overlaps the body of the cup, so the outline looks slightly different</li>
    <li><strong>Top view:</strong> you look down into the cup and see two circles — the rim of the cup and the opening — plus the handle poking out</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Watch out for this common mistake</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">The <strong>top view</strong> often looks the most different from what you would expect, because you cannot see the height of the object at all — only its outline from above. A tall box and a short box with the same base look <strong>identical</strong> from the top.</p>
</div>`,
      workedExamples: [
        {
          question: 'A closed shoebox sits on a table. Which view would show two circles if there was a round hat inside it, resting flat on its brim, and the lid was removed?',
          steps: [
            'With the lid off, look <strong style="color:#16a34a;">straight down</strong> into the box — this is the top view.',
            'A hat resting on its brim shows a <strong>circle</strong> for the brim and a smaller circle for the top of the crown, both visible from directly above.',
            'From the front or side, the hat would show its curved outline and height instead, not two circles.',
          ],
          answer: 'The top view — looking straight down shows the round brim and crown as two circles.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A single everyday object such as an apple, drawn once in full, with three small labelled frames beside it (front, side, top) each showing the correct outline the object would produce from that viewpoint, without stating which is which is "correct" in the question text',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — IDENTIFYING OBJECTS FROM A GIVEN VIEW
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'identifying-objects-from-a-view',
      title: 'Identifying Objects From a Given View',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;">Sometimes you are given a <strong>single view</strong> — just one picture — and you have to work out which real object it could be, or which view (front, side or top) it must be. This is like solving a small puzzle using only the clues in front of you.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Clues that help you decide</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Round outline</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Often means you are looking at a <strong>top view</strong> of something round, like the top of a cup or an apple seen from above.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Tall, narrow shape</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Usually a <strong>front</strong> or <strong>side</strong> view, since height only shows up when you look at an object from the side or the front, not from above.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:150px;text-align:center;">Missing feature</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">If a handle, strap or other feature is missing from a view, that view is probably from the side <strong>opposite</strong> to where that feature is.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Working backward 🔄</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">If you are shown just one view and asked "what object is this?" or "which view is this?", picture the object in your mind and imagine walking around it. Ask which position you would need to stand in to see exactly that picture.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">A single view rarely tells you everything about an object. That is why builders, artists and scientists often draw or photograph an object from <strong>more than one</strong> viewpoint — each view fills in information the others leave out.</p>
</div>`,
      workedExamples: [
        {
          question: 'You are shown a picture of a triangle shape with laces near the top. Is this most likely the front view, side view or top view of a shoe?',
          steps: [
            'A shoe seen from the <strong style="color:#dc2626;">side</strong> shows its long outline from heel to toe, not a simple triangle.',
            'A shoe seen from the <strong style="color:#16a34a;">top</strong> shows a rounded, elongated footprint shape, not a triangle either.',
            'A shoe seen from the <strong style="color:#1e40af;">front</strong> (facing the toe) shows the narrower, more triangular-looking front of the shoe, with the laces near the top of the picture.',
          ],
          answer: 'The front view — it shows the narrower front of the shoe with the laces visible near the top.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — VIEWS OF SCENES, CLASSROOMS AND BUILDINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'views-of-scenes-and-buildings',
      title: 'Views of Scenes, Classrooms and Buildings',
      icon: '🏫',
      explanation: `
<p style="margin-bottom:14px;">Views are not only used for small objects like cups and shoes. The same idea works for <strong>bigger scenes</strong> too — a classroom, a simple building, or even a school field. This is closely linked to the map skills you learn in Geography.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Views of bigger spaces</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Side view</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Standing at the door of a classroom and looking straight in, you see desks, chairs and the chalkboard from the side — some things blocked behind others.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Plan view</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Looking straight down on the same classroom from above (like a bird flying over it) you see the outline and position of every desk and chair, with nothing hidden behind anything else. This is why maps are drawn as plan views.</span>
    </div>
  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Why plan views are useful 🗺️</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">A plan (top) view of a school field shows exactly where the netball court, the tuck shop and the gate are positioned relative to each other — without any buildings or trees blocking the view. This is exactly how a map works.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Key idea</div>
  <p style="margin:0;color:#1e3a8a;font-size:15px;line-height:1.7;">Whether you are looking at a small object or a whole school field, the same rule applies: your <strong>view</strong> depends on your <strong>viewpoint</strong>. Changing where you stand — or looking down instead of across — always changes what you see.</p>
</div>`,
      workedExamples: [
        {
          question: 'Why would an architect draw a plan (top) view of a new classroom before it is built, instead of only a side view?',
          steps: [
            'A <strong style="color:#dc2626;">side view</strong> only shows what is visible from one position, with some furniture or walls hidden behind others.',
            'A <strong style="color:#16a34a;">plan view</strong> shows the whole floor from above, so every wall, door and piece of furniture can be positioned accurately without anything blocking anything else.',
            'This makes a plan view far more useful for planning exactly where things should go.',
          ],
          answer:
            'A plan view shows the full layout from above with nothing hidden, which makes it much easier to plan where walls, doors and furniture should go.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A simple classroom scene shown twice — once as a side view (desks, chairs and chalkboard drawn from the doorway, with some desks partly hidden behind others) and once as a plan/top view (the same desks and chairs drawn as simple rectangles positioned on the floor, all fully visible, like a simple map)',
      videoPlaceholder:
        'Short video showing a toy classroom or model building filmed from a side angle and then from directly above, linking the top view to how maps are drawn',
    },
  ],

  topicPractice: [],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — What is a view? (Easy)
        { difficulty: 'Easy', question: 'What do we call the picture you see when you look at an object from one particular spot?', answer: 'A view', checkMode: 'auto', correctAnswer: 'A view', correctAnswers: ['A view', 'view', 'a view'], explanation: 'The picture you see from a particular spot is called a view.' },
        { difficulty: 'Easy', question: 'Name the three views used to describe an everyday object.', answer: 'Front view, side view, top view', checkMode: 'self', explanation: 'The three main views are the front view, the side view and the top view (also called the plan view).' },
        { difficulty: 'Easy', question: 'If you stand directly in front of a box and look straight at it, which view are you seeing?', answer: 'Front view', checkMode: 'auto', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'Standing directly in front of an object and looking straight at it gives you the front view.' },
        { difficulty: 'Easy', question: 'What is another name for the top view?', answer: 'Plan view', checkMode: 'auto', correctAnswer: 'Plan view', correctAnswers: ['Plan view', 'plan view', 'the plan view'], explanation: 'The top view is also called the plan view, because you are looking straight down like on a map plan.' },

        // Block 2 — Matching views (Easy-Medium)
        { difficulty: 'Easy', question: 'Does an object change shape when you walk around it and look at it from a different spot?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The object itself never changes — only your viewpoint changes, so you see a different picture of the same object.' },
        { difficulty: 'Medium', question: 'A cup has a handle on one side. From which view would you be unable to see the handle at all: the side with the handle, or the opposite side?', answer: 'The opposite side', checkMode: 'self', explanation: 'Looking from the side opposite the handle, the handle is hidden behind the body of the cup.' },
        { difficulty: 'Medium', question: 'You look straight down into an open cup. What two round shapes would you expect to see?', answer: 'The rim of the cup and the opening (the inside circle)', checkMode: 'self', explanation: 'Looking straight down into a cup from the top view shows the outer rim as one circle and the inner opening as a second circle.' },
        { difficulty: 'Medium', question: 'A closed cardboard box is shaped like a rectangular prism. Would its top view show a circle or a rectangle?', answer: 'Rectangle', checkMode: 'auto', correctAnswer: 'Rectangle', correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'], explanation: 'Looking straight down on a rectangular prism shows the flat rectangular top face.' },

        // Block 3 — Reasoning about what is visible (Medium)
        { difficulty: 'Medium', question: 'Why does the top view of an object never show its height?', answer: 'Because when you look straight down from above, you only see the flat outline of the top surface — you cannot see how tall the object is from that angle.', checkMode: 'self', explanation: 'A top view shows width and length (the outline from above) but not height, since height can only be judged by looking at an object from the front or side.' },
        { difficulty: 'Medium', question: 'A tall drinking glass and a short, wide tumbler both have a circular base of the same size. Would their top views look the same or different?', answer: 'The same', checkMode: 'self', explanation: 'Since the top view only shows the outline from above, and both bases are the same size circle, their top views would look identical even though their heights differ.' },
        { difficulty: 'Medium', question: 'Which view of a party hat (a cone shape) would show a circle: the side view or the top view?', answer: 'Top view', checkMode: 'auto', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view'], explanation: 'Looking straight down on a cone-shaped hat shows the circular brim as a circle. From the side, you would see a triangle-like outline instead.' },
        { difficulty: 'Medium', question: 'An apple sits on a table. From the front view you see a rounded outline. What would you expect the top view to look like?', answer: 'Also a rounded, roughly circular outline', checkMode: 'self', explanation: 'Since an apple is round from every direction, both the front view and the top view show a similar rounded outline.' },

        // Block 4 — Identifying objects/views from clues (Medium)
        { difficulty: 'Medium', question: 'You are shown a picture with a narrow, tall outline and no round shapes at all. Is this more likely a top view or a side view?', answer: 'Side view', checkMode: 'auto', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'A top view usually shows the outline of the base, while a narrow, tall outline suggesting height is more typical of a front or side view.' },
        { difficulty: 'Medium', question: 'A picture shows a shoe\'s long outline from heel to toe, including the laces along the top edge. Which view is this?', answer: 'Side view', checkMode: 'auto', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'The full outline from heel to toe is what you see standing at the side of the shoe.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M30 105 C30 85 40 70 60 65 C80 60 100 62 120 58 C145 53 165 48 185 55 C195 58 195 75 185 85 C160 100 100 108 60 108 C45 108 32 108 30 105 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="60" x2="80" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="110" y1="58" x2="95" y2="80" stroke="#2563eb" stroke-width="2"/><line x1="125" y1="58" x2="112" y2="80" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'A picture shows a rounded, footprint-shaped outline with the laces visible across the middle. Which view is this most likely to be?', answer: 'Top view', checkMode: 'auto', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view'], explanation: 'Looking straight down on a shoe gives a footprint-shaped outline with the laces visible across the top surface.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 C150 15 170 35 170 65 C170 95 155 120 110 125 C65 120 50 95 50 65 C50 35 70 15 110 15 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="45" x2="130" y2="45" stroke="#2563eb" stroke-width="2"/><line x1="85" y1="60" x2="135" y2="60" stroke="#2563eb" stroke-width="2"/><line x1="82" y1="75" x2="138" y2="75" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'You are given only the side view of an object and asked to identify it. Why might this be difficult sometimes?', answer: 'Because a single view only shows part of the object\'s shape, so different objects can sometimes look similar from just one viewpoint.', checkMode: 'self', explanation: 'One view alone does not always give enough information — that is why multiple views are often used together.' },

        // Block 5 — Scenes, classrooms, buildings (Medium)
        { difficulty: 'Medium', question: 'What subject at school also uses the idea of plan (top) views, especially for maps?', answer: 'Geography', checkMode: 'auto', correctAnswer: 'Geography', correctAnswers: ['Geography', 'geography'], explanation: 'Plan views link closely to Geography, where maps are drawn as a view looking straight down from above.' },
        { difficulty: 'Medium', question: 'Why is a plan view of a classroom more useful than a side view for showing exactly where every desk is positioned?', answer: 'Because a plan view shows the whole floor from above with nothing hidden, so every desk\'s position is visible, while a side view can have some desks hidden behind others.', checkMode: 'self', explanation: 'From the side, furniture can block your view of other furniture. From directly above, every object\'s position is visible at once.' },
        { difficulty: 'Medium', question: 'Standing at the classroom door and looking straight in, are you more likely to get a side view or a plan view of the room?', answer: 'Side view', checkMode: 'auto', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'Standing at the door and looking across the room (not down on it) gives a side view, not a plan view.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A closed box (rectangular prism) stands on a table. It is taller than it is wide, and only its front face has a picture printed on it.\na) Which view would show the printed picture: the front view or the top view?\nb) Which view would show only a plain rectangle with no picture: the side view or the same front view?', answer: 'a) Front view   b) Side view', checkMode: 'auto', parts: [
          { label: 'a) View showing the printed picture', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'The picture is on the front face, so only the front view shows it.' },
          { label: 'b) View showing a plain rectangle', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'The side face has no picture on it, so the side view shows a plain rectangle.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand how front, side and top views work for everyday objects and scenes.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on views and viewpoints, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — What is a view? (Easy)
        { difficulty: 'Easy', question: 'True or false: the object changes shape depending on where the viewer stands.', answer: 'False', checkMode: 'auto', correctAnswer: 'False', correctAnswers: ['False', 'false'], explanation: 'The object stays exactly the same. Only the viewer\'s position changes, which changes what they see.' },
        { difficulty: 'Easy', question: 'If you crouch down and look at an object from its left or right, which view are you seeing?', answer: 'Side view', checkMode: 'auto', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'Looking at an object from its left or right gives you the side view.' },
        { difficulty: 'Easy', question: 'What word describes exactly where a viewer is standing and which way they are facing?', answer: 'Viewpoint', checkMode: 'auto', correctAnswer: 'Viewpoint', correctAnswers: ['Viewpoint', 'viewpoint', 'a viewpoint'], explanation: 'A viewpoint is the position and direction a viewer is looking from.' },
        { difficulty: 'Easy', question: 'Which view do you get by looking straight down on an object from above?', answer: 'Top view', checkMode: 'auto', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view', 'plan view', 'the plan view'], explanation: 'Looking straight down from above gives the top view, also called the plan view.' },

        // Block 2 — Matching views (Easy-Medium)
        { difficulty: 'Easy', question: 'A woolly hat has a small pom-pom on top. Which view would clearly show the pom-pom sitting at the very centre: the front view or the top view?', answer: 'Top view', checkMode: 'auto', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view'], explanation: 'Looking straight down on the hat shows the pom-pom sitting in the middle of the circular top.' },
        { difficulty: 'Medium', question: 'A closed shoebox has a picture printed only on its short end. From which two views could you possibly see that picture: front and top, or front and one side?', answer: 'Front and one side', checkMode: 'self', explanation: 'The short end could be viewed as either the "front" or a "side," depending on which way the box is turned, but the top view would only show the flat lid, not the printed end.' },
        { difficulty: 'Medium', question: 'You look at an apple from the side and see a rounded outline with a small stem poking out the top. Would the top view also show the stem?', answer: 'Yes', checkMode: 'auto', correctAnswer: 'Yes', correctAnswers: ['Yes', 'yes'], explanation: 'Looking straight down on the apple, the stem would appear as a small dot or point at the centre of the rounded outline.' },
        { difficulty: 'Medium', question: 'A closed rectangular prism box is longer than it is wide, and much shorter in height than in length. Would its top view be a square or a rectangle?', answer: 'Rectangle', checkMode: 'auto', correctAnswer: 'Rectangle', correctAnswers: ['Rectangle', 'rectangle', 'a rectangle'], explanation: 'Since the box is longer than it is wide, its top view (the outline of its base) is a rectangle, not a square.' },

        // Block 3 — Reasoning about what is visible (Medium)
        { difficulty: 'Medium', question: 'Explain why the front view and the side view of a shoe usually look different from each other.', answer: 'Because the front view shows the narrower toe end of the shoe, while the side view shows the long outline of the shoe from heel to toe — they are looking at different parts of the same object.', checkMode: 'self', explanation: 'Front and side views capture different faces of the object, so unless the object is symmetrical from every angle, they usually look different.' },
        { difficulty: 'Medium', question: 'A ball is a perfect sphere. Would its front view, side view and top view all look the same or different?', answer: 'The same', checkMode: 'self', explanation: 'A sphere looks like a circle from every direction, so its front, side and top views are all identical circles.' },
        { difficulty: 'Medium', question: 'A box has a handle on its top face only. Which view would show the handle: the top view or the front view?', answer: 'Top view', checkMode: 'auto', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view'], explanation: 'Since the handle is on the top face, only the top view (looking straight down) would show it.' },
        { difficulty: 'Medium', question: 'Would the side view of a tall, narrow drinking glass and a short, wide tumbler look the same or different, even if their tops are the same size?', answer: 'Different', checkMode: 'auto', correctAnswer: 'Different', correctAnswers: ['Different', 'different'], explanation: 'The side view shows height, so a tall glass and a short tumbler would have clearly different side views, even with matching top sizes.' },

        // Block 4 — Identifying objects/views from clues (Medium)
        { difficulty: 'Medium', question: 'A picture shows a simple circle with a small triangle-shaped handle sticking out to one side. What everyday object\'s top view could this be?', answer: 'A cup (or mug)', checkMode: 'self', explanation: 'A cup seen from the top shows a circular rim with the handle poking out to one side.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="100" cy="70" r="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="100" cy="70" r="30" fill="none" stroke="#2563eb" stroke-width="1.5"/><path d="M145 55 C170 55 170 90 145 88" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'You are shown a rounded, tall outline that narrows slightly toward the top, with no flat edges. Which everyday object could this front view belong to?', answer: 'An apple (or similar rounded fruit)', checkMode: 'self', explanation: 'A rounded outline with no straight edges matches the front view of a rounded object like an apple.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M100 25 C130 25 150 45 148 70 C146 100 125 118 100 118 C75 118 54 100 52 70 C50 45 70 25 100 25 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M100 25 C98 18 102 12 108 10" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'A picture shows a wide brim shape with a smaller circle in the centre for the crown. Which object and which view does this describe?', answer: 'The top view of a hat', checkMode: 'self', explanation: 'Looking straight down on a hat shows the wide brim as an outer circle and the crown as a smaller circle inside it.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="70" r="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="110" cy="70" r="25" fill="none" stroke="#2563eb" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'If two different views of the same object look almost identical, what might that tell you about the object\'s shape?', answer: 'It might mean the object is symmetrical or round in a way that looks similar from multiple directions.', checkMode: 'self', explanation: 'Round or symmetrical objects, like a ball or a cylinder viewed from certain angles, can produce very similar-looking views.' },

        // Block 5 — Scenes, classrooms, buildings (Medium)
        { difficulty: 'Medium', question: 'A school field has a netball court, a tuck shop and a gate. Which view would best show how these are positioned relative to each other: a side view or a plan view?', answer: 'Plan view', checkMode: 'auto', correctAnswer: 'Plan view', correctAnswers: ['Plan view', 'plan view', 'the plan view', 'top view', 'the top view'], explanation: 'A plan view from above shows the position of every feature on the field without anything blocking the view.' },
        { difficulty: 'Medium', question: 'Why do maps use a plan (top) view instead of a side view?', answer: 'Because a plan view shows the position of everything from directly above, with nothing hidden behind buildings, trees or hills.', checkMode: 'self', explanation: 'A side view would hide many features behind others, while a plan view shows every position clearly, which is why maps use it.' },
        { difficulty: 'Medium', question: 'Standing at the classroom door, you notice the desks at the back are partly hidden behind the desks in front. Is this a feature of a side view or a plan view?', answer: 'Side view', checkMode: 'auto', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'Objects hiding behind other objects is typical of a side view, since a plan view from above would show every desk clearly.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A simple building has a triangular roof on top of a rectangular prism base. A window is on the front wall only.\na) Which view would show the triangular shape of the roof most clearly: the front view or the top view?\nb) Which view would show the window: the front view or the top view?', answer: 'a) Front view   b) Front view', checkMode: 'auto', parts: [
          { label: 'a) View showing the triangular roof shape', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'Looking at the building from the front (or side) shows the triangular roof shape rising above the rectangular base. From the top, the roof would look like a rectangle, not a triangle.' },
          { label: 'b) View showing the window', correctAnswer: 'Front view', correctAnswers: ['Front view', 'front view', 'the front view'], explanation: 'Since the window is on the front wall, only the front view shows it — the top view looking down on the roof would not show it at all.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand how front, side and top views work for everyday objects and scenes.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on views and viewpoints, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — What is a view? (Easy)
        { difficulty: 'Easy', question: 'What do we call it when a viewer looks straight down on an object from above?', answer: 'Top view (or plan view)', checkMode: 'auto', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view', 'plan view', 'the plan view', 'Top view (or plan view)'], explanation: 'Looking straight down on an object from above is called the top view or plan view.' },
        { difficulty: 'Easy', question: 'Does the same object always produce the same view, no matter where the viewer stands?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'The view changes depending on the viewer\'s position, even though the object itself stays the same.' },
        { difficulty: 'Easy', question: 'Complete the sentence: a view always matches a particular _______.', answer: 'Viewpoint', checkMode: 'auto', correctAnswer: 'Viewpoint', correctAnswers: ['Viewpoint', 'viewpoint'], explanation: 'A view always matches a viewpoint — the exact position and direction the viewer is looking from.' },
        { difficulty: 'Easy', question: 'If you stand to the left of a box and look at it, which view are you seeing?', answer: 'Side view', checkMode: 'auto', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'Standing to the left or right of an object and looking at it gives you the side view.' },

        // Block 2 — Matching views (Easy-Medium)
        { difficulty: 'Easy', question: 'A closed box has a sticker only on its top face. Which view would show the sticker?', answer: 'Top view', checkMode: 'auto', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view'], explanation: 'Since the sticker is on the top face, only the top view (looking straight down) would show it.' },
        { difficulty: 'Medium', question: 'A hat is placed upside down, brim facing up. If you now look straight down at it, would you see a small circle (the crown tip) or a large circle (the brim)?', answer: 'A large circle (the brim)', checkMode: 'self', explanation: 'With the hat upside down, the wide brim faces upward, so a top view straight down would show the large brim circle facing you.' },
        { difficulty: 'Medium', question: 'A closed matchbox is much longer than it is tall or wide. Would its top view be a long, thin rectangle or a square?', answer: 'A long, thin rectangle', checkMode: 'auto', correctAnswer: 'A long, thin rectangle', correctAnswers: ['A long, thin rectangle', 'long, thin rectangle', 'rectangle', 'a rectangle'], explanation: 'Since the matchbox is much longer than it is wide, its top view (the outline of its base) is a long, thin rectangle.' },
        { difficulty: 'Medium', question: 'An apple has its stem pointing straight up. In the front view, would the stem appear as a dot or as a small line poking up from the top?', answer: 'A small line poking up from the top', checkMode: 'self', explanation: 'Seen from the front (or side), the upright stem appears as a small line or stalk poking above the rounded body of the apple.' },

        // Block 3 — Reasoning about what is visible (Medium)
        { difficulty: 'Medium', question: 'Why might the front view and the top view of the same box look completely different?', answer: 'Because the front view shows the height and width of the box, while the top view shows the length and width of the base — they capture different sides of the same object.', checkMode: 'self', explanation: 'Different views show different faces or angles of an object, so unless the object is a cube, these views often look quite different.' },
        { difficulty: 'Medium', question: 'A cube-shaped box has all faces exactly the same size and shape. Would its front view and side view look the same or different?', answer: 'The same', checkMode: 'self', explanation: 'Since every face of a cube is an identical square, the front view and side view of a cube-shaped box both show the same square outline.' },
        { difficulty: 'Medium', question: 'Would the top view of a tall drinking glass tell you anything about its height?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A top view only shows the outline from directly above, which reveals the width or shape of the base, but never the height.' },
        { difficulty: 'Medium', question: 'A shoe\'s side view shows laces along the top edge. Would you expect the front view (facing the toe) to also clearly show the laces?', answer: 'Yes, partially — the laces would be visible near the top of the front view too, since they run along the top of the shoe toward the front.', checkMode: 'self', explanation: 'Since laces usually run from the front toward the middle of the shoe, both the front view and the side view would show at least part of the laces.' },

        // Block 4 — Identifying objects/views from clues (Medium)
        { difficulty: 'Medium', question: 'A picture shows a plain rectangle with straight edges and no round shapes anywhere. Which everyday object\'s front view could this describe: an apple or a cereal box?', answer: 'A cereal box', checkMode: 'auto', correctAnswer: 'A cereal box', correctAnswers: ['A cereal box', 'cereal box', 'a cereal box'], explanation: 'Straight edges and a rectangular outline match a box, not a rounded object like an apple.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="20" width="110" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Medium', question: 'A picture shows a wide, curved outline that narrows toward the top, with no straight lines at all. Which view of a party hat (cone) is this likely to be?', answer: 'Side view (or front view)', checkMode: 'self', explanation: 'A cone-shaped hat seen from the side (or front) shows a curved, tapering outline. The top view would instead show a plain circle for the brim.', diagramSvg: '<svg viewBox="0 0 220 140" xmlns="http://www.w3.org/2000/svg"><path d="M110 15 L165 115 C165 122 140 128 110 128 C80 128 55 122 55 115 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="110" cy="115" rx="55" ry="10" fill="none" stroke="#2563eb" stroke-width="1.5"/></svg>' },
        { difficulty: 'Medium', question: 'You are told an object\'s top view is a perfect circle. Could this object still be a box (rectangular prism)?', answer: 'No', checkMode: 'auto', correctAnswer: 'No', correctAnswers: ['No', 'no'], explanation: 'A rectangular prism always has a rectangular (or square) top view, never a perfect circle, so the object cannot be a box.' },
        { difficulty: 'Medium', question: 'Why is it sometimes necessary to see more than one view of an object before you can correctly identify it?', answer: 'Because a single view can look similar for several different objects, so seeing more than one view gives extra clues that make identifying the object more certain.', checkMode: 'self', explanation: 'One view alone can be ambiguous — combining views reduces the chance of confusing different objects that share a similar outline from just one angle.' },

        // Block 5 — Scenes, classrooms, buildings (Medium)
        { difficulty: 'Medium', question: 'A plan view of the school field shows the netball court as a rectangle and the tuck shop as a small square. What is missing from this plan view that a side view would show?', answer: 'The height of the buildings and any features standing upright, like poles, trees or the height of walls.', checkMode: 'self', explanation: 'A plan view only shows outlines from above, so height information (of buildings, poles, trees) is missing — a side view would be needed to show that.' },
        { difficulty: 'Medium', question: 'A builder wants to know exactly how far apart two classrooms are on the school grounds. Should they use a side view or a plan view to measure this?', answer: 'Plan view', checkMode: 'auto', correctAnswer: 'Plan view', correctAnswers: ['Plan view', 'plan view', 'the plan view', 'top view', 'the top view'], explanation: 'A plan view from above shows accurate distances between positions on the ground, which is exactly what is needed to measure how far apart the classrooms are.' },
        { difficulty: 'Medium', question: 'Standing outside a simple building and looking at its front wall, are you seeing a side/front view or a plan view?', answer: 'Side/front view', checkMode: 'self', explanation: 'Looking at the wall of a building from ground level, rather than from above, gives a front (or side) view, not a plan view.' },

        // Block 6 — Multi-part reasoning (Hard)
        { difficulty: 'Hard', question: 'A watering can has a spout on one side and a handle on the opposite side, and it is taller than it is wide.\na) Which view would show both the spout and the handle sticking out on opposite sides: the front/back view or the top view?\nb) Which view would best show how tall the watering can is: the top view or the side view?', answer: 'a) Top view   b) Side view', checkMode: 'auto', parts: [
          { label: 'a) View showing both spout and handle', correctAnswer: 'Top view', correctAnswers: ['Top view', 'top view', 'the top view'], explanation: 'Looking straight down from above, both the spout and the handle would be visible sticking out on opposite sides of the circular body.' },
          { label: 'b) View showing the height', correctAnswer: 'Side view', correctAnswers: ['Side view', 'side view', 'the side view'], explanation: 'Height can only be judged from a front, back or side view, not from directly above — so the side view best shows how tall the can is.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You clearly understand how front, side and top views work for everyday objects and scenes.' },
        { minScore: 15, message: 'Great work! You understand most of the ideas about views — review any questions you missed.' },
        { minScore: 10, message: 'Good effort! Go back over the study guide on views and viewpoints, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

  ],
}
