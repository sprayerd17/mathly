import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (mass units) ─────────────────────────────────────────────
// mg (milligrams) → blue   (#2563eb)
// g  (grams)      → green  (#16a34a)
// kg (kilograms)  → orange (#ea580c)
// t  (tonnes)     → red    (#dc2626)
const bl = (s: string) => `<span style="color:#2563eb;font-weight:700">${s}</span>`
const gr = (s: string) => `<span style="color:#16a34a;font-weight:700">${s}</span>`
const or = (s: string) => `<span style="color:#ea580c;font-weight:700">${s}</span>`
const re = (s: string) => `<span style="color:#dc2626;font-weight:700">${s}</span>`

export const topicData: TopicData = {
  title: 'Mass',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-mass',
      title: 'Units of Mass',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">Mass tells us how heavy something is. We measure mass using <strong>standard units</strong>. The main units of mass are ${bl('milligrams (mg)')}, ${gr('grams (g)')}, ${or('kilograms (kg)')} and ${re('tonnes (t)')}. ${bl('Milligrams')} are used for very light things like medicine tablets. ${gr('Grams')} are used for lighter objects like a slice of bread. ${or('Kilograms')} are used for heavier objects like a bag of flour or a person. ${re('Tonnes')} are used for very heavy things like a truck or an elephant.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('mg')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('g')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kg')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('t')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Units of mass</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Milligrams (mg)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for very light things such as medicine tablets. There are 1 000 mg in 1 g.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Grams (g)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for lighter objects such as a slice of bread. There are 1 000 g in 1 kg.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Kilograms (kg)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for heavier objects such as a bag of flour or a person. There are 1 000 kg in 1 t.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Tonnes (t)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for very heavy things such as a truck or an elephant.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Choosing the right unit</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always choose the unit that gives a sensible number of digits. If a unit gives you millions of digits, it is too small. If it gives you a very tiny decimal, it is too large. The best unit gives a number that is easy to read and work with.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle wants to measure the mass of an apple. Which unit should she use?',
          answer: `Amahle should use ${gr('grams (g)')}`,
          steps: [
            `An apple is a light object but not extremely light.`,
            `${bl('Milligrams')} would give too many digits — an apple has a mass of about 150 000 mg, which is an unnecessarily large number.`,
            `${re('Tonnes')} and ${or('kilograms')} are too heavy for an apple — a typical apple has a mass of less than 1 kg.`,
            `${gr('Grams')} are the best unit for measuring an apple — it has a mass of about 150 ${gr('g')}, which is a sensible number.`,
            `<strong>Answer:</strong> Amahle should use ${gr('grams (g)')}.`,
          ],
        },
        {
          question: 'Thabo wants to measure the mass of a car. Which unit should he use?',
          answer: `Thabo should use ${re('tonnes (t)')}`,
          steps: [
            `A car is a very heavy object.`,
            `${bl('Milligrams')} and ${gr('grams')} are far too small — a car has a mass of about 1 500 000 000 mg, which is impractical.`,
            `${or('Kilograms')} would give a very large number — a typical car has a mass of about 1 500 ${or('kg')}, which is manageable but not the standard unit for vehicles.`,
            `${re('Tonnes')} are the best unit for very heavy objects like cars — a typical car has a mass of about 1.5 ${re('t')}, which is a sensible number.`,
            `<strong>Answer:</strong> Thabo should use ${re('tonnes (t)')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — choosing the correct unit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Which unit would you use to measure the mass of a person?',
          answer: 'kilograms',
          checkMode: 'auto',
          correctAnswer: 'kilograms',
          correctAnswers: ['kilograms', 'kg'],
          explanation: 'A person has a mass that is sensibly measured in kilograms. Grams would give an impractically large number (e.g. 60 000 g) and tonnes would give a very small decimal (e.g. 0.06 t). The best unit is kilograms.',
        },

        // ── Q2 Easy — choosing the correct unit ──────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Which unit would you use to measure the mass of a truck?',
          answer: 'tonnes',
          checkMode: 'auto',
          correctAnswer: 'tonnes',
          correctAnswers: ['tonnes', 't'],
          explanation: 'A truck is a very heavy vehicle. Grams and kilograms would give impractically large numbers. Tonnes give a sensible number — a typical truck has a mass of several tonnes.',
        },

        // ── Q3 Medium — evaluating a unit choice ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho says he will measure the mass of a grape in kilograms. Is he correct? Explain.',
          answer: 'No — a grape is very light. Grams would be the best unit to measure the mass of a grape.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Visual scale showing the four units of mass from smallest to largest — mg in blue, g in green, kg in orange, t in red — with everyday examples for each unit" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the four units of mass — milligrams, grams, kilograms and tonnes — and how to choose the correct unit for everyday objects" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONVERTING UNITS OF MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-mass',
      title: 'Converting Units of Mass',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">We can convert between units of mass using these relationships — ${or('1 000 mg = 1 g')}, ${or('1 000 g = 1 kg')}, ${or('1 000 kg = 1 t')}. To convert from a <strong>larger unit</strong> to a <strong>smaller unit</strong> we ${gr('multiply')} by 1 000. To convert from a <strong>smaller unit</strong> to a <strong>larger unit</strong> we ${re('divide')} by 1 000. Always check your answer makes sense — converting to a smaller unit should give a bigger number.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('multiply')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('divide')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('conversion facts')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('answers')}</span>` +
        `</div>` +

        // ── Conversion relationships ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Conversion relationships</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('1 000 mg = 1 g')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">There are one thousand milligrams in one gram.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('1 000 g = 1 kg')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">There are one thousand grams in one kilogram.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('1 000 kg = 1 t')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">There are one thousand kilograms in one tonne.</p>` +
        `</div>` +

        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Conversion rules</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">×</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Larger unit → smaller unit: multiply by 1 000')}</strong><br>Example: kg → g &nbsp; ${gr('× 1 000')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">÷</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Smaller unit → larger unit: divide by 1 000')}</strong><br>Example: g → kg &nbsp; ${re('÷ 1 000')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always check your answer makes sense</p>` +
        `<p style="margin:0;color:#1e3a8a;">Converting to a <strong>smaller unit</strong> should give a <strong>bigger number</strong>. Converting to a <strong>larger unit</strong> should give a <strong>smaller number</strong>. If your answer goes in the wrong direction, check whether you should have multiplied or divided.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 3 kg to grams.',
          answer: `3 ${or('kg')} = ${bl('3 000 g')}`,
          steps: [
            `We are converting from a <strong>larger unit</strong> (${or('kg')}) to a <strong>smaller unit</strong> (g). We ${gr('multiply')}.`,
            `${or('Conversion fact:')} ${or('1 kg = 1 000 g')}`,
            `3 ${or('kg')} = 3 ${gr('× 1 000')} = ${bl('3 000 g')}`,
          ],
        },
        {
          question: 'Convert 5 000 g to kilograms.',
          answer: `5 000 g = ${bl('5 kg')}`,
          steps: [
            `We are converting from a <strong>smaller unit</strong> (g) to a <strong>larger unit</strong> (${or('kg')}). We ${re('divide')}.`,
            `${or('Conversion fact:')} ${or('1 000 g = 1 kg')}`,
            `5 000 g = 5 000 ${re('÷ 1 000')} = ${bl('5 kg')}`,
          ],
        },
        {
          question: 'Convert 2.5 kg to grams.',
          answer: `2.5 ${or('kg')} = ${bl('2 500 g')}`,
          steps: [
            `We are converting from a <strong>larger unit</strong> (${or('kg')}) to a <strong>smaller unit</strong> (g). We ${gr('multiply')}.`,
            `${or('Conversion fact:')} ${or('1 kg = 1 000 g')}`,
            `2.5 ${or('kg')} = 2.5 ${gr('× 1 000')} = ${bl('2 500 g')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — converting kg to g ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Convert 4 kg to grams.',
          answer: '4 000 g',
          checkMode: 'auto',
          correctAnswer: '4000g',
          correctAnswers: ['4000g', '4 000 g', '4000 g'],
          explanation: 'We are converting from a larger unit (kg) to a smaller unit (g), so we multiply by 1 000.\n4 kg × 1 000 = 4 000 g ✓',
        },

        // ── Q5 Medium — converting g to kg ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Convert 3 500 g to kilograms.',
          answer: '3.5 kg',
          checkMode: 'auto',
          correctAnswer: '3.5kg',
          correctAnswers: ['3.5kg', '3.5 kg'],
          explanation: 'We are converting from a smaller unit (g) to a larger unit (kg), so we divide by 1 000.\n3 500 g ÷ 1 000 = 3.5 kg ✓',
        },

        // ── Q6 Hard — identifying a conversion error ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato converts 2.4 kg to grams and gets 240 g. Is she correct? Explain.',
          answer: 'No — to convert kg to g we multiply by 1 000. 2.4 × 1 000 = 2 400 g not 240 g. She divided instead of multiplying.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Conversion diagram showing the four units of mass — mg g kg t — with arrows indicating multiply by 1000 going right in green and divide by 1000 going left in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between units of mass by multiplying or dividing by 1000 with worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — MEASURING MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measuring-mass',
      title: 'Measuring Mass',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">We measure mass using a <strong>scale</strong>. There are different types of scales — a <strong>kitchen scale</strong> for food, a <strong>bathroom scale</strong> for people and a <strong>balance scale</strong> that compares two masses. When reading a scale find the nearest marked number and count the spaces between marks to work out what each small mark represents. Always record your measurement with the correct unit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('scale markings')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('mass reading')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('heavier')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('lighter')}</span>` +
        `</div>` +

        // ── Types of scales ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Types of scales</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kitchen scale</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for measuring food. The ${bl('scale markings')} are usually in grams or kilograms. Read the ${or('mass reading')} where the needle or display points.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Bathroom scale</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Used for measuring the mass of a person. The ${bl('scale markings')} are usually in kilograms. Step on and read the ${or('mass reading')} on the display.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Balance scale</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Compares two masses. The side with the ${re('heavier')} object goes down. The side with the ${gr('lighter')} object goes up. When both sides are level the masses are equal.</p>` +
        `</div>` +

        `</div>` +

        // ── Reading a scale ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">How to read a scale</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Find the ${bl('marked numbers')}</strong> — Locate the nearest numbered ${bl('scale marking')} below the needle or pointer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Count the spaces</strong> — Count the number of spaces between two consecutive numbered ${bl('scale markings')} to find the value of each small mark.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Read the ${or('mass reading')}</strong> — Count up from the nearest numbered mark to where the needle points and record the ${or('mass reading')} with its unit.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Always include the unit</p>` +
        `<p style="margin:0;color:#1e3a8a;">A ${or('mass reading')} without a unit is incomplete. Writing "450" instead of "450 g" could mean anything. Always write the full measurement including the correct unit of mass.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A kitchen scale has marks every 100 g. The needle points halfway between 400 g and 500 g. What is the mass?',
          answer: `The ${or('mass reading')} is ${or('450 g')}`,
          steps: [
            `Find the nearest numbered ${bl('scale markings')}: ${bl('400 g')} and ${bl('500 g')}.`,
            `The needle points <strong>halfway</strong> between ${bl('400 g')} and ${bl('500 g')}.`,
            `Halfway between ${bl('400 g')} and ${bl('500 g')} is ${or('450 g')}.`,
            `<strong>Answer:</strong> The ${or('mass reading')} shown on the scale is ${or('450 g')}.`,
          ],
        },
        {
          question: 'Sipho places two objects on a balance scale. The left side goes down. What does this tell us?',
          answer: `The object on the left is ${re('heavier')} than the object on the right`,
          steps: [
            `A balance scale tips towards the ${re('heavier')} side.`,
            `The left side went down, so the object on the left is ${re('heavier')} than the object on the right.`,
            `The object on the right is ${gr('lighter')} than the object on the left.`,
            `If both sides were equal, the scale would be level — neither side would go down.`,
            `<strong>Answer:</strong> The left side going down tells us the object on the left is ${re('heavier')} than the object on the right.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Easy — reading a scale ─────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'A scale shows the needle halfway between 200 g and 300 g. What is the mass?',
          answer: '250 g',
          checkMode: 'auto',
          correctAnswer: '250g',
          correctAnswers: ['250g', '250 g'],
          explanation: 'The needle points halfway between 200 g and 300 g.\nHalfway: (200 + 300) ÷ 2 = 250.\nAnswer: 250 g ✓',
        },

        // ── Q8 Medium — reading a balance scale ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Two objects are placed on a balance scale. The right side goes down. Which side is heavier?',
          answer: 'right',
          checkMode: 'auto',
          correctAnswer: 'right',
          correctAnswers: ['right', 'the right', 'right side', 'the right side'],
          explanation: 'A balance scale tips towards the heavier side. The right side goes down, so the object on the right is heavier.',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing three types of scales — kitchen scale with scale markings in blue and mass reading in orange, bathroom scale, and balance scale with heavier side in red going down and lighter side in green going up" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a kitchen scale by identifying scale markings and counting spaces, and how a balance scale indicates which object is heavier" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-mass',
      title: 'Calculating with Mass',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">We can ${gr('add')} and ${re('subtract')} mass to solve problems. Always make sure all measurements are in the <strong>same unit</strong> before calculating. If the units are different, ${bl('convert')} them first, then calculate. After calculating, always write the correct unit next to your answer.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('conversion')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('addition')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('subtraction')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('answer')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rules for calculating with mass</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Convert')}</strong> — If the measurements are in different units, convert them to the same unit first before calculating.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Calculate')}</strong> — Add, subtract or multiply the measurements once they are in the same unit.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Write the unit')}</strong> — Always include the correct unit of mass next to your ${or('answer')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Convert first, then calculate</p>` +
        `<p style="margin:0;color:#1e3a8a;">Never add or subtract measurements in different units — always ${bl('convert')} to the same unit first. You can give your ${or('answer')} in grams or kilograms — both are correct as long as the unit is written clearly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato buys 1.5 kg of apples and 800 g of oranges. What is the total mass of her fruit?',
          answer: `The total mass is ${or('2 300 g')} or ${or('2.3 kg')}`,
          steps: [
            `${bl('Convert')} to the same unit: ${bl('1.5 kg = 1 500 g')} (multiply by 1 000).`,
            `${gr('Add:')} ${gr('1 500 g + 800 g = 2 300 g')}`,
            `${bl('Convert')} to kilograms: ${bl('2 300 g = 2.3 kg')} (divide by 1 000).`,
            `<strong>${or('Answer:')} The total mass is ${or('2 300 g')} or ${or('2.3 kg')}.</strong>`,
          ],
        },
        {
          question: 'A bag of rice has a mass of 2 kg. Amahle uses 650 g. How much rice is left?',
          answer: `There is ${or('1 350 g')} or ${or('1.35 kg')} of rice left`,
          steps: [
            `${bl('Convert')} 2 kg to grams: ${bl('2 × 1 000 = 2 000 g')}`,
            `${re('Subtract:')} ${re('2 000 g − 650 g = 1 350 g')}`,
            `${bl('Convert')} back to kilograms: ${bl('1 350 g = 1.35 kg')} (divide by 1 000).`,
            `<strong>${or('Answer:')} There is ${or('1 350 g')} or ${or('1.35 kg')} of rice left.</strong>`,
          ],
        },
        {
          question: 'Thabo packs 3 books into a bag. Each book has a mass of 450 g. What is the total mass of the books?',
          answer: `The total mass of the books is ${or('1 350 g')} or ${or('1.35 kg')}`,
          steps: [
            `${gr('Multiply:')} ${gr('3 × 450 g = 1 350 g')}`,
            `${bl('Convert')} to kilograms: ${bl('1 350 g = 1.35 kg')} (divide by 1 000).`,
            `<strong>${or('Answer:')} The total mass of the books is ${or('1 350 g')} or ${or('1.35 kg')}.</strong>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q9 Hard — subtracting mass after use ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle has a 1 kg bag of sugar. She uses 3 cups of sugar and each cup holds 125 g. How much sugar is left?',
          answer: '625 g',
          checkMode: 'auto',
          correctAnswer: '625g',
          correctAnswers: ['625g', '625 g'],
          explanation: 'Total sugar used: 3 × 125 g = 375 g\nConvert 1 kg to grams: 1 kg = 1 000 g\nSugar left: 1 000 g − 375 g = 625 g ✓',
        },

        // ── Q10 Medium — adding mass with unit conversion ─────────────────────
        {
          difficulty: 'Medium',
          question: 'Sipho buys 1.2 kg of chicken and 850 g of beef. What is the total mass of the meat in grams?',
          answer: '2 050 g',
          checkMode: 'auto',
          correctAnswer: '2050g',
          correctAnswers: ['2050g', '2 050 g', '2050 g'],
          explanation: 'Convert 1.2 kg to grams: 1.2 × 1 000 = 1 200 g\nTotal: 1 200 g + 850 g = 2 050 g ✓',
        },

        // ── Q11 Hard — finding a fraction of a mass ───────────────────────────
        {
          difficulty: 'Hard',
          question: 'A box of chocolates has a mass of 500 g. Thabo eats a quarter of the chocolates. How much mass is left in the box?',
          answer: '375 g',
          checkMode: 'auto',
          correctAnswer: '375g',
          correctAnswers: ['375g', '375 g'],
          explanation: 'A quarter of 500 g: 500 ÷ 4 = 125 g eaten\nMass left: 500 g − 125 g = 375 g ✓',
        },

        // ── Q12 Hard — total mass converted to kilograms ──────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato packs 4 books each with a mass of 350 g and a lunchbox with a mass of 450 g into her school bag. What is the total mass she is carrying in kilograms?',
          answer: '1.85 kg',
          checkMode: 'auto',
          correctAnswer: '1.85kg',
          correctAnswers: ['1.85kg', '1.85 kg'],
          explanation: 'Mass of 4 books: 4 × 350 g = 1 400 g\nMass of lunchbox: 450 g\nTotal: 1 400 g + 450 g = 1 850 g\nConvert to kilograms: 1 850 ÷ 1 000 = 1.85 kg ✓',
        },
      ],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing three calculating with mass examples — addition with unit conversion in blue and green, subtraction with unit conversion in blue and red, multiplication with conversion to kilograms in blue and green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add, subtract and multiply mass measurements by first converting to the same unit and then calculating with colour coded steps" />',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered mass.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of mass.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
