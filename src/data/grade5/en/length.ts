import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (unit of length roles) ────────────────────────────────────
// mm (millimetres) → blue   (#2563eb)
// cm (centimetres) → green  (#16a34a)
// m  (metres)      → orange (#ea580c)
// km (kilometres)  → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Length',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-length',
      title: 'Units of Length',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Length tells us how long or tall something is. We measure length using <strong>standard units</strong>. The main units of length are ${bl('millimetres (mm)')}, ${gr('centimetres (cm)')}, ${or('metres (m)')} and ${re('kilometres (km)')}. Choosing the right unit makes measuring easier and the numbers easier to work with.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mm')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('cm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('m')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('km')}</span>` +
        `</div>` +

        // ── Unit cards ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The four main units of length</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Millimetre (${bl('mm')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The smallest common unit. Used for very small measurements like the thickness of a coin or the width of a ruler line.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Centimetre (${gr('cm')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for smaller objects like a pencil, a book, or a person's hand. There are 10 ${bl('mm')} in 1 ${gr('cm')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Metre (${or('m')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for larger things like the height of a door or the length of a room. There are 100 ${gr('cm')} in 1 ${or('m')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Kilometre (${re('km')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for long distances like the distance between two towns. There are 1 000 ${or('m')} in 1 ${re('km')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Choosing the right unit ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Choosing the right unit</p>` +
        `<p style="margin-bottom:12px;">Always choose the unit that gives you a <strong>convenient number</strong> — not too large and not too small. Ask yourself: how big is the object or distance I am measuring?</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">` +
        `<div style="font-size:13px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding-bottom:6px;border-bottom:1px solid #e2e8f0;">Object / Distance</div>` +
        `<div style="font-size:13px;color:#6b7280;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;padding-bottom:6px;border-bottom:1px solid #e2e8f0;">Best unit</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Thickness of a coin</div><div style="font-size:14px;padding:4px 0;">${bl('mm')}</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Length of a pencil</div><div style="font-size:14px;padding:4px 0;">${gr('cm')}</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Height of a door</div><div style="font-size:14px;padding:4px 0;">${or('m')}</div>` +
        `<div style="font-size:14px;color:#374151;padding:4px 0;">Distance between two towns</div><div style="font-size:14px;padding:4px 0;">${re('km')}</div>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Why the right unit matters</p>` +
        `<p style="margin:0;color:#1e3a8a;">Using the wrong unit makes numbers unnecessarily large or small and leads to mistakes. For example, measuring the distance from Cape Town to Johannesburg in ${bl('mm')} would give a number in the billions — impossible to work with. ${re('Kilometres')} give a manageable number around 1 400.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho wants to measure the length of his pencil. Which unit should he use?',
          answer: `Sipho should use ${gr('centimetres (cm)')}`,
          steps: [
            `A pencil is a small object.`,
            `${bl('Millimetres')} would give too many digits and be difficult to work with.`,
            `${re('Kilometres')} and ${or('metres')} are too large for a pencil.`,
            `${gr('Centimetres')} are the best unit for measuring a pencil — a typical pencil is about 19 ${gr('cm')} long.`,
            `<strong>Answer:</strong> Sipho should use ${gr('centimetres (cm)')}.`,
          ],
        },
        {
          question: 'Lerato wants to measure the distance from Cape Town to Johannesburg. Which unit should she use?',
          answer: `Lerato should use ${re('kilometres (km)')}`,
          steps: [
            `The distance between two cities is very large.`,
            `${bl('Millimetres')}, ${gr('centimetres')} and ${or('metres')} would give enormous numbers that are hard to work with.`,
            `${re('Kilometres')} are the best unit for long distances.`,
            `<strong>Answer:</strong> Lerato should use ${re('kilometres (km)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — choosing unit for a classroom ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Which unit would you use to measure the length of a classroom?',
          answer: 'metres',
          checkMode: 'auto',
          correctAnswer: 'metres',
          explanation: 'A classroom is a large room — metres give a convenient number. Millimetres and centimetres would give very large numbers and kilometres would give a very small decimal.',
        },

        // ── Q2 Easy — choosing unit for city distance ────────────────────────
        {
          difficulty: 'Easy',
          question: 'Which unit would you use to measure the distance between two cities?',
          answer: 'kilometres',
          checkMode: 'auto',
          correctAnswer: 'kilometres',
          explanation: 'The distance between two cities is very large. Kilometres give a manageable number. Using metres or centimetres would give unnecessarily large numbers.',
        },

        // ── Q3 Medium — wrong unit choice explained ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho says he will measure his finger in kilometres. Is he correct? Explain.',
          answer: 'No — kilometres are used for very long distances. He should use millimetres or centimetres to measure his finger.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a ruler with mm and cm marked, a door with metres, and a road with kilometres — each unit colour coded blue cm green m orange km red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the four units of length mm cm m and km with real-life examples showing when to use each unit" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONVERTING UNITS OF LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-length',
      title: 'Converting Units of Length',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">We can convert between units of length using these relationships — ${or('10mm = 1cm')}, ${or('100cm = 1m')}, ${or('1 000m = 1km')}. To convert from a larger unit to a smaller unit we ${gr('multiply')}. To convert from a smaller unit to a larger unit we ${re('divide')}. Always check your answer makes sense — a smaller unit should give a bigger number and a larger unit should give a smaller number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiply')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('divide')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('conversion fact')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('answer')}</span>` +
        `</div>` +

        // ── Conversion relationships ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Conversion relationships</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:16px;justify-content:center;align-items:center;">` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('10mm')} = ${or('1cm')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">·</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('100cm')} = ${or('1m')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">·</div>` +
        `<div style="text-align:center;min-width:120px;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('1 000m')} = ${or('1km')}</p>` +
        `</div>` +
        `</div>` +

        // ── Two conversion rules ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">The two conversion rules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Larger unit → smaller unit: ${gr('multiply')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">When converting to a smaller unit, the number gets bigger. ${gr('Multiply')} by the conversion fact.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: cm → mm: ${gr('× 10')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Smaller unit → larger unit: ${re('divide')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">When converting to a larger unit, the number gets smaller. ${re('Divide')} by the conversion fact.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Example: cm → m: ${re('÷ 100')}</p>` +
        `</div>` +

        `</div>` +

        // ── Sanity check tip ─────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sanity check your answer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always check that your converted answer makes sense. A smaller unit should give a ${bl('bigger number')} and a larger unit should give a ${bl('smaller number')}. If your answer goes the wrong way, you have used the wrong operation — swap ${gr('multiply')} and ${re('divide')} and try again.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 5cm to millimetres.',
          answer: `${bl('50mm')}`,
          steps: [
            `We are converting from a larger unit (${gr('cm')}) to a smaller unit (${bl('mm')}). We ${gr('multiply')}.`,
            `Write the conversion fact: ${or('1cm = 10mm')}.`,
            `${gr('Multiply:')} 5 ${gr('× 10')} = ${bl('50')}.`,
            `<strong>Answer:</strong> 5cm = ${bl('50mm')} ✓`,
          ],
        },
        {
          question: 'Convert 300cm to metres.',
          answer: `${bl('3m')}`,
          steps: [
            `We are converting from a smaller unit (${gr('cm')}) to a larger unit (${or('m')}). We ${re('divide')}.`,
            `Write the conversion fact: ${or('100cm = 1m')}.`,
            `${re('Divide:')} 300 ${re('÷ 100')} = ${bl('3')}.`,
            `<strong>Answer:</strong> 300cm = ${bl('3m')} ✓`,
          ],
        },
        {
          question: 'Convert 2.5km to metres.',
          answer: `${bl('2 500m')}`,
          steps: [
            `We are converting from a larger unit (${re('km')}) to a smaller unit (${or('m')}). We ${gr('multiply')}.`,
            `Write the conversion fact: ${or('1km = 1 000m')}.`,
            `${gr('Multiply:')} 2.5 ${gr('× 1 000')} = ${bl('2 500')}.`,
            `<strong>Answer:</strong> 2.5km = ${bl('2 500m')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — cm to mm conversion ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert 4cm to millimetres.',
          answer: '40mm',
          checkMode: 'auto',
          correctAnswer: '40mm',
          explanation: 'We are converting from a larger unit (cm) to a smaller unit (mm) so we multiply. 1cm = 10mm. 4 × 10 = 40. Answer: 40mm ✓',
        },

        // ── Q5 Medium — cm to m conversion ──────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert 250cm to metres.',
          answer: '2.5m',
          checkMode: 'auto',
          correctAnswer: '2.5m',
          explanation: 'We are converting from a smaller unit (cm) to a larger unit (m) so we divide. 100cm = 1m. 250 ÷ 100 = 2.5. Answer: 2.5m ✓',
        },

        // ── Q6 Hard — km to m conversion error explained ─────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato converts 3.2km to metres and gets 320m. Is she correct? Explain.',
          answer: 'No — to convert km to m we multiply by 1000. 3.2 × 1000 = 3200m not 320m. She forgot to multiply by 1000.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the conversion chain mm cm m km with multiply arrows going left to right smaller to larger and divide arrows going right to left larger to smaller colour coded green for multiply red for divide orange for conversion facts" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between mm cm m and km using multiply and divide with three worked examples colour coded green for multiply red for divide orange for conversion facts blue for answers" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MEASURING LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measuring-length',
      title: 'Measuring Length',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">To measure length accurately we use a ruler or a tape measure. Always start measuring from <strong>zero</strong> — not from the edge of the ruler. Place the ruler flat against the object and read the measurement at the end of the object. If the measurement falls between two marks estimate as carefully as you can. Record your measurement with the correct unit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('starting point')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('ending point')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('measurement')}</span>` +
        `</div>` +

        // ── How to use a ruler ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to use a ruler correctly</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Always start from the ${bl('zero mark')} — not from the edge of the ruler.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Place the ruler flat against the object so it does not slip.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Read the mark where the object ${gr('ends')}. This is your ${or('measurement')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">If the ${gr('ending point')} falls between two marks, estimate as carefully as you can and record the ${or('measurement')} with the correct unit.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always include the unit</p>` +
        `<p style="margin:0;color:#1e3a8a;">A measurement without a unit is incomplete. Writing "24" means nothing on its own — always write "${or('24cm')}" or "${or('13.5cm')}" so the reader knows exactly what was measured.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle measures her book with a ruler. The book starts at 0cm and ends at the 24cm mark. How long is the book?',
          answer: `The book is ${or('24cm')} long`,
          steps: [
            `Place the ruler at ${bl('zero')}.`,
            `Read the mark where the book ${gr('ends')}.`,
            `The book ends at the ${gr('24cm')} mark.`,
            `The book is ${or('24cm')} long.`,
          ],
        },
        {
          question: 'Thabo measures a pencil and it ends halfway between the 13cm and 14cm marks. How long is the pencil?',
          answer: `The pencil is approximately ${or('13.5cm')} long`,
          steps: [
            `The pencil ends between ${bl('13cm')} and ${gr('14cm')}.`,
            `Halfway between 13 and 14 is 13.5.`,
            `The pencil is approximately ${or('13.5cm')} long.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — reading a ruler ────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A pencil measures 14cm on a ruler. How long is it?',
          answer: '14cm',
          checkMode: 'auto',
          correctAnswer: '14cm',
          explanation: 'Read the mark where the pencil ends. The pencil ends at the 14cm mark. Answer: 14cm ✓',
        },

        // ── Q8 Medium — reading between marks ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'A book ends halfway between the 18cm and 19cm marks on a ruler. How long is the book?',
          answer: '18.5cm',
          checkMode: 'auto',
          correctAnswer: '18.5cm',
          explanation: 'The book ends between 18cm and 19cm. Halfway between 18 and 19 is 18.5. Answer: 18.5cm ✓',
        },

        // ── Q9 Hard — evaluating a reasonable estimate ───────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo measures a piece of string and says it is about 23cm. The actual length is 23.4cm. Is his estimate reasonable? Explain.',
          answer: 'Yes — 23cm is very close to 23.4cm. He measured to the nearest centimetre which is a reasonable estimate.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a ruler with an object placed from zero to 24cm, starting point highlighted in blue, ending point in green, and measurement labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use a ruler correctly, starting from zero, reading the ending point, and recording the measurement with the correct unit" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-length',
      title: 'Calculating with Length',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">We can ${gr('add')} and ${re('subtract')} lengths to solve problems. Always make sure all measurements are in the same unit before calculating. If the units are different ${bl('convert')} them first then calculate. After calculating check that your ${or('answer')} has the correct unit written next to it.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('conversion')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('addition')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('subtraction')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('answer')}</span>` +
        `</div>` +

        // ── Three steps ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Three steps for calculating with length</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Convert')} — If the units are different, convert all measurements to the same unit first.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Calculate')} — ${gr('Add')} or ${re('subtract')} the lengths once they are in the same unit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Answer')} — Write the ${or('answer')} with the correct unit. ${bl('Convert')} back to a more convenient unit if needed.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always write the unit</p>` +
        `<p style="margin:0;color:#1e3a8a;">A length without a unit is incomplete. After every calculation, check that your ${or('answer')} includes the unit. If you ${bl('converted')} to a different unit during the calculation, make sure your final ${or('answer')} is in a sensible unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho has a piece of rope that is 3m long. He cuts off 75cm. How much rope is left?',
          answer: `${or('2m 25cm')} of rope is left`,
          steps: [
            `The units are different — metres and centimetres. ${bl('Convert')} 3m to centimetres: ${bl('3 × 100 = 300cm')}.`,
            `Now ${re('subtract')}: ${re('300cm − 75cm = 225cm')}.`,
            `${bl('Convert')} back to metres if needed: ${bl('225cm = 2m 25cm')}.`,
            `<strong>Answer:</strong> There is ${or('2m 25cm')} of rope left. ✓`,
          ],
        },
        {
          question: 'Lerato walks 1.5km to school and then 800m to the shops. How far does she walk in total?',
          answer: `${or('2 300m')} or ${or('2.3km')} in total`,
          steps: [
            `${bl('Convert')} to the same unit. ${bl('1.5km = 1 500m')}.`,
            `${gr('Add')}: ${gr('1 500m + 800m = 2 300m')}.`,
            `${bl('Convert')} to kilometres: ${bl('2 300m = 2.3km')}.`,
            `<strong>Answer:</strong> Lerato walks ${or('2 300m')} or ${or('2.3km')} in total. ✓`,
          ],
        },
        {
          question: 'A plank of wood is 2m 40cm long. Another plank is 1m 80cm long. What is their total length?',
          answer: `${or('4m 20cm')}`,
          steps: [
            `${gr('Add')} the metres: ${gr('2m + 1m = 3m')}.`,
            `${gr('Add')} the centimetres: ${gr('40cm + 80cm = 120cm')}.`,
            `${bl('Convert')} 120cm to metres: ${bl('120cm = 1m 20cm')}.`,
            `Total: ${gr('3m')} + ${bl('1m 20cm')} = ${or('4m 20cm')}.`,
            `<strong>Answer:</strong> The total length is ${or('4m 20cm')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Easy — subtracting lengths ──────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A rope is 500cm long. Amahle cuts off 200cm. How much is left?',
          answer: '300cm',
          checkMode: 'auto',
          correctAnswer: '300cm',
          explanation: 'Both lengths are in centimetres. Subtract: 500cm − 200cm = 300cm. Answer: 300cm ✓',
        },

        // ── Q11 Medium — adding mixed units ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho walks 1.2km to school and 900m to the library. How far does he walk in total? Give your answer in metres.',
          answer: '2100m',
          checkMode: 'auto',
          correctAnswer: '2100m',
          explanation: 'Convert 1.2km to metres: 1.2 × 1000 = 1200m. Add: 1200m + 900m = 2100m. Answer: 2100m ✓',
        },

        // ── Q12 Hard — adding compound lengths ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'A plank is 3m 60cm long. Another plank is 1m 80cm long. What is their combined length?',
          answer: '5m 40cm',
          checkMode: 'auto',
          correctAnswer: '5m 40cm',
          explanation: 'Add the metres: 3m + 1m = 4m. Add the centimetres: 60cm + 80cm = 140cm. Convert 140cm: 140cm = 1m 40cm. Total: 4m + 1m 40cm = 5m 40cm. Answer: 5m 40cm ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two length calculations — one subtraction problem with unit conversion highlighted in blue and the subtraction step in red, one addition problem with centimetre overflow converted to metres, final answers in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add and subtract lengths with different units by converting first then calculating, with colour coded steps — conversion blue addition green subtraction red answer orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PERIMETER AND LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-and-length',
      title: 'Perimeter and Length',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">The <strong>perimeter</strong> of a shape is the total distance around the outside of the shape. To find the perimeter we add up all the ${bl('side lengths')}. Make sure all sides are in the same unit before adding. The ${or('perimeter')} is always given in a unit of length such as cm, m or km.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('side lengths')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('addition')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('perimeter answer')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key facts about perimeter</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Rectangle</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Has 2 pairs of equal ${bl('sides')}. Perimeter = ${bl('length')} + ${bl('length')} + ${bl('width')} + ${bl('width')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Square</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">All 4 ${bl('sides')} are equal. Perimeter = ${bl('side')} × 4, or ${gr('add')} all four ${bl('sides')} together.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Any shape</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Add')} all the ${bl('side lengths')} together. The ${or('perimeter answer')} is always in a unit of length.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Same unit rule</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always make sure all ${bl('side lengths')} are in the same unit before you ${gr('add')} them. If the sides are given in different units, convert first, then ${gr('add')}. The ${or('perimeter answer')} must include the correct unit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A rectangle is 8cm long and 5cm wide. What is its perimeter?',
          answer: `The perimeter of the rectangle is ${or('26cm')}`,
          steps: [
            `A rectangle has 4 sides — 2 long sides and 2 short sides. The ${bl('long sides')} are each ${bl('8cm')} and the ${bl('short sides')} are each ${bl('5cm')}.`,
            `${gr('Add')} all four sides: ${bl('8')} + ${bl('8')} + ${bl('5')} + ${bl('5')} = ${gr('26')}.`,
            `<strong>Answer:</strong> The perimeter of the rectangle is ${or('26cm')}. ✓`,
          ],
        },
        {
          question: 'Thabo wants to put a fence around his square garden. Each side of the garden is 12m. How much fencing does he need?',
          answer: `Thabo needs ${or('48m')} of fencing`,
          steps: [
            `A square has 4 equal sides. Each ${bl('side')} is ${bl('12m')}.`,
            `${gr('Add')} all four sides: ${bl('12')} + ${bl('12')} + ${bl('12')} + ${bl('12')} = ${gr('48')}. Or multiply: 4 × ${bl('12')} = ${gr('48')}.`,
            `<strong>Answer:</strong> Thabo needs ${or('48m')} of fencing. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q13 Easy — perimeter of a square ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A square has sides of 6cm. What is its perimeter?',
          answer: '24cm',
          checkMode: 'auto',
          correctAnswer: '24cm',
          explanation: 'A square has 4 equal sides. Perimeter = 6 + 6 + 6 + 6 = 24cm. Or: 4 × 6 = 24cm. Answer: 24cm ✓',
        },

        // ── Q14 Medium — perimeter of a rectangle ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'A rectangle is 12cm long and 7cm wide. What is its perimeter?',
          answer: '38cm',
          checkMode: 'auto',
          correctAnswer: '38cm',
          explanation: 'A rectangle has 2 long sides and 2 short sides. Perimeter = 12 + 12 + 7 + 7 = 38cm. Answer: 38cm ✓',
        },

        // ── Q15 Hard — checking if ribbon is enough ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato wants to put ribbon around a rectangular picture frame that is 30cm long and 20cm wide. She has 90cm of ribbon. Does she have enough? Explain.',
          answer: 'Perimeter = 30 + 30 + 20 + 20 = 100cm. She only has 90cm so she does not have enough ribbon. She needs 10cm more.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a labelled rectangle with sides 8cm and 5cm and a square with sides 12m, all side lengths highlighted in blue and the perimeter answer shown in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining how to find the perimeter of a rectangle and a square by adding all side lengths, with sides colour coded blue, addition green and perimeter answer orange" />',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Choosing Units | 4-8 Converting (computation) |
    // 9-11 Error-Spotting | 12-15 Reading & Word Problems |
    // 16-17 Calculating (add/subtract mixed units) | 18-19 Perimeter Applications
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Which unit would you use to measure the length of a swimming pool: cm or m?', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'metres', 'meters', 'metre', 'meter'], explanation: 'A swimming pool is a fairly large object, so metres give a sensible, easy-to-read number. Centimetres would give an unnecessarily large number.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the thickness of a R5 coin: mm or km?', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimetres', 'millimeters', 'millimetre', 'millimeter'], explanation: 'A coin is extremely thin, so millimetres are needed to get a meaningful number. Kilometres would make no sense for something so small.' },
        { difficulty: 'Easy', question: 'For measuring the length of a soccer field, which is more sensible: using metres, or using millimetres?', checkMode: 'auto', correctAnswer: 'metres', correctAnswers: ['metres', 'meters', 'm'], explanation: 'A soccer field is about 100m long. Using metres gives a manageable number like 100, while millimetres would give a number in the hundred-thousands — far too large to be useful.' },
        { difficulty: 'Easy', question: 'Nomvula says she will measure the length of her classroom in millimetres because "smaller units are always more accurate." Explain why this is not a sensible choice, even though it is technically possible.', checkMode: 'self', answer: 'It is technically possible, but not sensible — a classroom is around 8 000mm to 10 000mm long, which is an awkward, hard-to-read number. Metres give a much more convenient number (around 8m to 10m) for everyday use, without losing meaningful accuracy for a room-sized measurement.' },
        { difficulty: 'Easy-Medium', question: 'Convert 6cm to millimetres.', checkMode: 'auto', correctAnswer: '60mm', correctAnswers: ['60mm', '60 mm', '60'], explanation: 'To convert cm to mm, multiply by 10 (a larger unit to a smaller unit). 6 × 10 = 60mm.' },
        { difficulty: 'Easy-Medium', question: 'Convert 400cm to metres.', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4 m', '4'], explanation: 'To convert cm to m, divide by 100 (a smaller unit to a larger unit). 400 ÷ 100 = 4m.' },
        { difficulty: 'Medium', question: 'Convert 3.4km to metres.', checkMode: 'auto', correctAnswer: '3400m', correctAnswers: ['3400m', '3400 m', '3400', '3 400m', '3 400 m'], explanation: 'To convert km to m, multiply by 1 000 (a larger unit to a smaller unit). 3.4 × 1 000 = 3 400m.' },
        { difficulty: 'Medium', question: 'Convert 850cm to metres.', checkMode: 'auto', correctAnswer: '8.5m', correctAnswers: ['8.5m', '8.5 m', '8.5'], explanation: 'To convert cm to m, divide by 100. 850 ÷ 100 = 8.5m.' },
        { difficulty: 'Medium', question: 'Convert 2 500mm to metres. (Hint: convert to cm first, then to m.)', checkMode: 'auto', correctAnswer: '2.5m', correctAnswers: ['2.5m', '2.5 m', '2.5'], explanation: 'First convert mm to cm: 2 500 ÷ 10 = 250cm. Then convert cm to m: 250 ÷ 100 = 2.5m.' },
        { difficulty: 'Medium', question: 'A student converts 4m to centimetres and writes 40cm. Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. To convert metres to centimetres you multiply by 100, not 10. The correct working is 4 × 100 = 400cm. The student used the wrong conversion factor (they used the mm-to-cm factor of 10 instead of the m-to-cm factor of 100).' },
        { difficulty: 'Medium', question: 'A student converts 6km to metres by writing 6 × 100 = 600m. Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. To convert km to m you multiply by 1 000, not 100. The correct working is 6 × 1 000 = 6 000m. The student used the wrong conversion factor.' },
        { difficulty: 'Medium', question: 'A student converts 3.2cm to millimetres and writes 0.32mm, saying "you divide by 10 to make it smaller." Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. Converting from a larger unit (cm) to a smaller unit (mm) means the number should get bigger, not smaller, so you must multiply, not divide. The correct working is 3.2 × 10 = 32mm. The student used the wrong operation direction.' },
        { difficulty: 'Medium', question: 'A ruler shows a crayon ending exactly on the 16cm mark. How long is the crayon?', checkMode: 'auto', correctAnswer: '16cm', correctAnswers: ['16cm', '16 cm', '16'], explanation: 'Reading the ruler mark where the crayon ends gives 16cm directly.' },
        { difficulty: 'Medium', question: 'A ribbon is measured on a ruler and its end falls exactly halfway between the 21cm and 22cm marks. What is the length of the ribbon?', checkMode: 'auto', correctAnswer: '21.5cm', correctAnswers: ['21.5cm', '21.5 cm', '21.5'], explanation: 'Halfway between 21cm and 22cm is 21.5cm, so the ribbon is approximately 21.5cm long.' },
        { difficulty: 'Medium', question: 'Sipho\'s garden path is 14m long. His neighbour\'s path is 1 350cm long. Whose path is longer, and by how many metres?', checkMode: 'auto', correctAnswer: 'neighbour0.5m', correctAnswers: ['neighbour0.5m', 'neighbour, 0.5m', 'neighbours path 0.5m', 'neighbour 0.5m'], explanation: 'Convert 1 350cm to metres: 1 350 ÷ 100 = 13.5m. Compare: Sipho\'s path is 14m and the neighbour\'s is 13.5m. Sipho\'s path is longer, by 14 − 13.5 = 0.5m.' },
        { difficulty: 'Medium', question: 'A tailor needs 2.3m of fabric for a dress and 180cm of fabric for a skirt. Which garment needs more fabric, and by how many centimetres?', checkMode: 'auto', correctAnswer: 'dress50cm', correctAnswers: ['dress50cm', 'dress, 50cm', 'dress 50cm'], explanation: 'Convert 2.3m to cm: 2.3 × 100 = 230cm. Compare: dress needs 230cm, skirt needs 180cm. The dress needs more, by 230 − 180 = 50cm.' },
        { difficulty: 'Hard', question: 'A piece of rope is 4m long. Thabo cuts off 65cm to tie a package. How much rope is left? Give your answer in metres and centimetres.', checkMode: 'auto', correctAnswer: '3m35cm', correctAnswers: ['3m35cm', '3m 35cm', '3 m 35 cm', '335cm', '335 cm'], explanation: 'Convert 4m to cm: 4 × 100 = 400cm. Subtract: 400 − 65 = 335cm. Convert back: 335cm = 3m 35cm.' },
        { difficulty: 'Hard', question: 'A cyclist rides 2.4km to the park and then a further 650m around the park trail. What is the total distance travelled, in kilometres?', checkMode: 'auto', correctAnswer: '3.05km', correctAnswers: ['3.05km', '3.05 km', '3.05', '3050m', '3 050m', '3050 m'], explanation: 'Convert 2.4km to m: 2.4 × 1 000 = 2 400m. Add: 2 400 + 650 = 3 050m. Convert back to km: 3 050 ÷ 1 000 = 3.05km.' },
        { difficulty: 'Hard', question: 'A rectangular vegetable garden is 9m long and 4m wide. Lerato wants to build a low fence around the entire garden. How many metres of fencing does she need?', checkMode: 'auto', correctAnswer: '26m', correctAnswers: ['26m', '26 m', '26'], explanation: 'Perimeter of a rectangle = length + length + width + width = 9 + 9 + 4 + 4 = 26m. She needs 26m of fencing.' },
        { difficulty: 'Hard', question: 'A square flower bed has sides of 15m. Amahle has 55m of edging bricks to place around the border. Does she have enough? Show your working and explain.', checkMode: 'self', answer: 'Perimeter of the square = 15 + 15 + 15 + 15 = 60m (or 4 × 15 = 60m). Amahle only has 55m of edging bricks, which is less than the 60m she needs. She does not have enough — she needs 5m more.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered choosing units, converting, and applying length to real problems.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of length — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and perimeter, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Which unit would you use to measure the length of a dining table: cm or km?', checkMode: 'auto', correctAnswer: 'cm', correctAnswers: ['cm', 'centimetres', 'centimeters', 'centimetre', 'centimeter'], explanation: 'A dining table is a small-to-medium sized object, so centimetres give a sensible number, usually around 150cm. Kilometres would be far too large a unit.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the distance a taxi travels between two towns: m or km?', checkMode: 'auto', correctAnswer: 'km', correctAnswers: ['km', 'kilometres', 'kilometers', 'kilometre', 'kilometer'], explanation: 'The distance between towns is very large, so kilometres give a manageable number. Metres would give an unnecessarily large number.' },
        { difficulty: 'Easy', question: 'For measuring the width of a cellphone screen, which is more sensible: using centimetres, or using kilometres?', checkMode: 'auto', correctAnswer: 'centimetres', correctAnswers: ['centimetres', 'centimeters', 'cm'], explanation: 'A cellphone screen is only a few centimetres wide, so centimetres (or even mm) give a sensible number. Kilometres would give an impossibly tiny decimal.' },
        { difficulty: 'Easy', question: 'Kagiso says he will measure the length of the school corridor in millimetres "so the answer has more digits and looks more precise." Explain why this reasoning is flawed.', checkMode: 'self', answer: 'Having more digits does not make a measurement more useful or precise for this purpose — a corridor might be around 20 000mm long, which is a clumsy number to read and work with. Metres (20m) give exactly the same real-world precision for a length this size but are far easier to understand and use.' },
        { difficulty: 'Easy-Medium', question: 'Convert 8cm to millimetres.', checkMode: 'auto', correctAnswer: '80mm', correctAnswers: ['80mm', '80 mm', '80'], explanation: 'To convert cm to mm, multiply by 10. 8 × 10 = 80mm.' },
        { difficulty: 'Easy-Medium', question: 'Convert 900cm to metres.', checkMode: 'auto', correctAnswer: '9m', correctAnswers: ['9m', '9 m', '9'], explanation: 'To convert cm to m, divide by 100. 900 ÷ 100 = 9m.' },
        { difficulty: 'Medium', question: 'Convert 1.7km to metres.', checkMode: 'auto', correctAnswer: '1700m', correctAnswers: ['1700m', '1700 m', '1700', '1 700m', '1 700 m'], explanation: 'To convert km to m, multiply by 1 000. 1.7 × 1 000 = 1 700m.' },
        { difficulty: 'Medium', question: 'Convert 620cm to metres.', checkMode: 'auto', correctAnswer: '6.2m', correctAnswers: ['6.2m', '6.2 m', '6.2'], explanation: 'To convert cm to m, divide by 100. 620 ÷ 100 = 6.2m.' },
        { difficulty: 'Medium', question: 'Convert 4 200mm to metres. (Hint: convert to cm first, then to m.)', checkMode: 'auto', correctAnswer: '4.2m', correctAnswers: ['4.2m', '4.2 m', '4.2'], explanation: 'First convert mm to cm: 4 200 ÷ 10 = 420cm. Then convert cm to m: 420 ÷ 100 = 4.2m.' },
        { difficulty: 'Medium', question: 'A student converts 5m to centimetres and writes 50cm. Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. To convert metres to centimetres you multiply by 100, not 10. The correct working is 5 × 100 = 500cm. The student used the wrong conversion factor.' },
        { difficulty: 'Medium', question: 'A student converts 8km to metres by writing 8 ÷ 1 000 = 0.008m. Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. Converting from a larger unit (km) to a smaller unit (m) should make the number bigger, not smaller, so the student must multiply, not divide. The correct working is 8 × 1 000 = 8 000m. The student used the wrong operation direction.' },
        { difficulty: 'Medium', question: 'A student converts 6.5cm to millimetres and simply writes 6.5mm, saying "the number stays the same, only the unit changes." Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. Converting cm to mm requires multiplying by 10 because mm are smaller units — the number must change. The correct working is 6.5 × 10 = 65mm. The student forgot to actually perform the conversion calculation.' },
        { difficulty: 'Medium', question: 'A ruler shows a key ending exactly on the 5cm mark. How long is the key?', checkMode: 'auto', correctAnswer: '5cm', correctAnswers: ['5cm', '5 cm'], explanation: 'Reading the ruler mark where the key ends gives 5cm directly.' },
        { difficulty: 'Medium', question: 'A leaf is measured on a ruler and its tip falls exactly halfway between the 9cm and 10cm marks. What is the length of the leaf?', checkMode: 'auto', correctAnswer: '9.5cm', correctAnswers: ['9.5cm', '9.5 cm', '9.5'], explanation: 'Halfway between 9cm and 10cm is 9.5cm, so the leaf is approximately 9.5cm long.' },
        { difficulty: 'Medium', question: 'In a long jump event, Palesa jumps 3.85m and Karabo jumps 372cm. Who jumped further, and by how many centimetres?', checkMode: 'auto', correctAnswer: 'Palesa13cm', correctAnswers: ['Palesa13cm', 'Palesa, 13cm', 'Palesa 13cm'], explanation: 'Convert 3.85m to cm: 3.85 × 100 = 385cm. Compare: Palesa jumped 385cm, Karabo jumped 372cm. Palesa jumped further, by 385 − 372 = 13cm.' },
        { difficulty: 'Medium', question: 'A DIY shelf needs a plank of at least 1.4m. A hardware store has offcuts of 128cm and 145cm. Which offcut is long enough to use, and by how many centimetres does it exceed the minimum?', checkMode: 'auto', correctAnswer: '145cm5cm', correctAnswers: ['145cm5cm', '145cm, 5cm', '145cm 5cm', 'the145cmoffcut5cm'], explanation: 'Convert 1.4m to cm: 1.4 × 100 = 140cm minimum needed. The 128cm offcut is too short. The 145cm offcut is long enough, exceeding the minimum by 145 − 140 = 5cm.' },
        { difficulty: 'Hard', question: 'A roll of ribbon is 5m long. Zanele uses 1m 85cm to wrap a gift. How much ribbon is left? Give your answer in metres and centimetres.', checkMode: 'auto', correctAnswer: '3m15cm', correctAnswers: ['3m15cm', '3m 15cm', '3 m 15 cm', '315cm', '315 cm'], explanation: 'Convert 5m to cm: 5 × 100 = 500cm. Convert 1m 85cm to cm: 100 + 85 = 185cm. Subtract: 500 − 185 = 315cm. Convert back: 315cm = 3m 15cm.' },
        { difficulty: 'Hard', question: 'A family hikes 3.6km along a river trail and then a further 750m up to a viewpoint. What is the total distance hiked, in kilometres?', checkMode: 'auto', correctAnswer: '4.35km', correctAnswers: ['4.35km', '4.35 km', '4.35', '4350m', '4 350m', '4350 m'], explanation: 'Convert 3.6km to m: 3.6 × 1 000 = 3 600m. Add: 3 600 + 750 = 4 350m. Convert back to km: 4 350 ÷ 1 000 = 4.35km.' },
        { difficulty: 'Hard', question: 'A rectangular sports court is 11m long and 6m wide. The school wants to paint a boundary line around the entire court. What length of paint line is needed?', checkMode: 'auto', correctAnswer: '34m', correctAnswers: ['34m', '34 m', '34'], explanation: 'Perimeter of a rectangle = 11 + 11 + 6 + 6 = 34m. A 34m boundary line is needed.' },
        { difficulty: 'Hard', question: 'A square patio has sides of 9m. Bongani has 34m of paving edge trim. Does he have enough to go around the whole patio? Show your working and explain.', checkMode: 'self', answer: 'Perimeter of the square = 9 + 9 + 9 + 9 = 36m (or 4 × 9 = 36m). Bongani only has 34m of edge trim, which is less than the 36m he needs. He does not have enough — he needs 2m more.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently choose units, convert, and apply length to real situations.' },
        { minScore: 15, message: 'Great work! You have a solid understanding — review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and perimeter, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Which unit would you use to measure the height of a two-storey house: cm or m?', checkMode: 'auto', correctAnswer: 'm', correctAnswers: ['m', 'metres', 'meters', 'metre', 'meter'], explanation: 'A two-storey house is quite tall, so metres give a sensible number, usually around 6m to 8m. Centimetres would give an unnecessarily large number.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the width of a strand of spaghetti: mm or m?', checkMode: 'auto', correctAnswer: 'mm', correctAnswers: ['mm', 'millimetres', 'millimeters', 'millimetre', 'millimeter'], explanation: 'A strand of spaghetti is extremely thin, so millimetres give a meaningful number. Metres would give an impossibly tiny decimal.' },
        { difficulty: 'Easy', question: 'For measuring the distance of a cross-country running race, which is more sensible: using kilometres, or using centimetres?', checkMode: 'auto', correctAnswer: 'kilometres', correctAnswers: ['kilometres', 'kilometers', 'km'], explanation: 'A cross-country race often covers several kilometres. Kilometres give a manageable number, while centimetres would give an enormous, unreadable number.' },
        { difficulty: 'Easy', question: 'Thandiwe says the length of her fingernail should be measured in metres "because metres are the standard unit everyone uses." Explain why this is not sensible.', checkMode: 'self', answer: 'Metres are a standard unit, but that does not make them the right choice for every object — a fingernail is only a few millimetres or centimetres long, so measuring it in metres would give a tiny, awkward decimal like 0.01m. Millimetres or centimetres are the sensible choice because they give a clear, easy-to-read whole number for something this small.' },
        { difficulty: 'Easy-Medium', question: 'Convert 7cm to millimetres.', checkMode: 'auto', correctAnswer: '70mm', correctAnswers: ['70mm', '70 mm', '70'], explanation: 'To convert cm to mm, multiply by 10. 7 × 10 = 70mm.' },
        { difficulty: 'Easy-Medium', question: 'Convert 650cm to metres.', checkMode: 'auto', correctAnswer: '6.5m', correctAnswers: ['6.5m', '6.5 m', '6.5'], explanation: 'To convert cm to m, divide by 100. 650 ÷ 100 = 6.5m.' },
        { difficulty: 'Medium', question: 'Convert 2.9km to metres.', checkMode: 'auto', correctAnswer: '2900m', correctAnswers: ['2900m', '2900 m', '2900', '2 900m', '2 900 m'], explanation: 'To convert km to m, multiply by 1 000. 2.9 × 1 000 = 2 900m.' },
        { difficulty: 'Medium', question: 'Convert 480cm to metres.', checkMode: 'auto', correctAnswer: '4.8m', correctAnswers: ['4.8m', '4.8 m', '4.8'], explanation: 'To convert cm to m, divide by 100. 480 ÷ 100 = 4.8m.' },
        { difficulty: 'Medium', question: 'Convert 3 100mm to metres. (Hint: convert to cm first, then to m.)', checkMode: 'auto', correctAnswer: '3.1m', correctAnswers: ['3.1m', '3.1 m', '3.1'], explanation: 'First convert mm to cm: 3 100 ÷ 10 = 310cm. Then convert cm to m: 310 ÷ 100 = 3.1m.' },
        { difficulty: 'Medium', question: 'A student converts 7m to centimetres and writes 70cm. Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. To convert metres to centimetres you multiply by 100, not 10. The correct working is 7 × 100 = 700cm. The student used the wrong conversion factor.' },
        { difficulty: 'Medium', question: 'A student converts 9km to metres by writing 9 × 10 = 90m. Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. To convert km to m you multiply by 1 000, not 10. The correct working is 9 × 1 000 = 9 000m. The student used the wrong conversion factor.' },
        { difficulty: 'Medium', question: 'A student converts 4.8cm to millimetres and writes 4.80mm, saying "you just add a zero and keep the decimal point where it is." Is this correct? Explain the mistake and give the correct answer.', checkMode: 'self', answer: 'No, this is not correct. Converting cm to mm means multiplying by 10, which moves the decimal point one place to the right, not just adding a zero on the end. The correct working is 4.8 × 10 = 48mm. The student misplaced the decimal point.' },
        { difficulty: 'Medium', question: 'A ruler shows a paperclip ending exactly on the 3cm mark. How long is the paperclip?', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3 cm'], explanation: 'Reading the ruler mark where the paperclip ends gives 3cm directly.' },
        { difficulty: 'Medium', question: 'An eraser is measured on a ruler and its edge falls exactly halfway between the 4cm and 5cm marks. What is the length of the eraser?', checkMode: 'auto', correctAnswer: '4.5cm', correctAnswers: ['4.5cm', '4.5 cm', '4.5'], explanation: 'Halfway between 4cm and 5cm is 4.5cm, so the eraser is approximately 4.5cm long.' },
        { difficulty: 'Medium', question: 'In a javelin competition, Lindiwe\'s throw travels 38.6m and Mandla\'s throw travels 3 750cm. Whose throw went further, and by how many centimetres?', checkMode: 'auto', correctAnswer: 'Lindiwe110cm', correctAnswers: ['Lindiwe110cm', 'Lindiwe, 110cm', 'Lindiwe 110cm'], explanation: 'Convert 38.6m to cm: 38.6 × 100 = 3 860cm. Compare: Lindiwe threw 3 860cm, Mandla threw 3 750cm. Lindiwe threw further, by 3 860 − 3 750 = 110cm.' },
        { difficulty: 'Medium', question: 'A picture frame needs wire at least 95cm long to hang safely. A craft box has wire pieces of 0.8m and 1.02m. Which piece is long enough, and by how many centimetres does it exceed the minimum?', checkMode: 'auto', correctAnswer: '1.02m7cm', correctAnswers: ['1.02m7cm', '1.02m, 7cm', '1.02m 7cm', 'the1.02mpiece7cm'], explanation: 'The 0.8m piece = 80cm, which is too short. Convert 1.02m to cm: 1.02 × 100 = 102cm, which is long enough. It exceeds the 95cm minimum by 102 − 95 = 7cm.' },
        { difficulty: 'Hard', question: 'A bolt of fabric is 6m long. A dressmaker cuts off 2m 45cm to make a curtain. How much fabric is left? Give your answer in metres and centimetres.', checkMode: 'auto', correctAnswer: '3m55cm', correctAnswers: ['3m55cm', '3m 55cm', '3 m 55 cm', '355cm', '355 cm'], explanation: 'Convert 6m to cm: 6 × 100 = 600cm. Convert 2m 45cm to cm: 200 + 45 = 245cm. Subtract: 600 − 245 = 355cm. Convert back: 355cm = 3m 55cm.' },
        { difficulty: 'Hard', question: 'On a road trip, a family drives 12.5km on a highway and then a further 3 200m on a gravel road to reach a campsite. What is the total distance travelled, in kilometres?', checkMode: 'auto', correctAnswer: '15.7km', correctAnswers: ['15.7km', '15.7 km', '15.7', '15700m', '15 700m', '15700 m'], explanation: 'Convert 12.5km to m: 12.5 × 1 000 = 12 500m. Add: 12 500 + 3 200 = 15 700m. Convert back to km: 15 700 ÷ 1 000 = 15.7km.' },
        { difficulty: 'Hard', question: 'A rectangular classroom is 14m long and 8m wide. The caretaker wants to fit skirting board around the entire base of the walls. What length of skirting board is needed?', checkMode: 'auto', correctAnswer: '44m', correctAnswers: ['44m', '44 m', '44'], explanation: 'Perimeter of a rectangle = 14 + 14 + 8 + 8 = 44m. 44m of skirting board is needed.' },
        { difficulty: 'Hard', question: 'A square courtyard has sides of 10m, and a rectangular courtyard measures 13m by 6m. Both need edging stones around their full border. Which courtyard needs more edging stones, and by how many metres?', checkMode: 'self', answer: 'Square courtyard perimeter = 10 + 10 + 10 + 10 = 40m. Rectangular courtyard perimeter = 13 + 13 + 6 + 6 = 38m. The square courtyard needs more edging stones, by 40 − 38 = 2m.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply choosing units, converting, and length calculations to real-world problems.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on word problems and perimeter, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered length.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of length.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
