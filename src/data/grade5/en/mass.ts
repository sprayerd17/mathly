import type { PracticeSet, TopicData } from '@/src/data/grade4/en/numbers-operations'

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
        `<p style="margin-bottom:16px;">Mass tells us how heavy something is. In Grade 5, the units of mass you need to know and use for calculations are ${gr('grams (g)')} and ${or('kilograms (kg)')}. ${gr('Grams')} are used for lighter objects like a slice of bread. ${or('Kilograms')} are used for heavier objects like a bag of flour or a person.</p>` +

        // ── Looking ahead note ──────────────────────────────────────────────
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:16px;padding:12px 16px;background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;">` +
        `<span style="font-size:18px;line-height:1;">🔭</span>` +
        `<p style="margin:0;font-size:14px;color:#6b21a8;"><strong>Looking ahead:</strong> ${bl('milligrams (mg)')} and ${re('tonnes (t)')} are extra units used for extremely light or extremely heavy objects. They go beyond what CAPS requires for Grade 5 (Grade 5 only requires g and kg) — you will meet them formally in a later grade. They're included below as enrichment, in case you're curious!</p>` +
        `</div>` +

        `<p style="margin-bottom:16px;">The full family of mass units, from lightest to heaviest, is: ${bl('milligrams (mg)')}, ${gr('grams (g)')}, ${or('kilograms (kg)')} and ${re('tonnes (t)')}. ${bl('Milligrams')} are used for very light things like medicine tablets. ${re('Tonnes')} are used for very heavy things like a truck or an elephant.</p>` +

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
        'A visual scale from lightest to heaviest showing the core Grade 5 units of mass — g (green, apple) and kg (orange, bag) — with mg (blue, pill) and t (red, truck) shown at the ends as enrichment',
      diagramSvg:
        '<svg viewBox="0 0 340 150" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="100" x2="320" y2="100" stroke="#0f1f3d" stroke-width="2"/><circle cx="30" cy="100" r="3" fill="#2563eb"/><circle cx="120" cy="100" r="3" fill="#16a34a"/><circle cx="220" cy="100" r="3" fill="#ea580c"/><circle cx="310" cy="100" r="3" fill="#dc2626"/><circle cx="30" cy="80" r="7" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="120" cy="70" r="16" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M204,60 L236,60 L242,92 L198,92 Z" fill="none" stroke="#ea580c" stroke-width="2.5"/><rect x="288" y="62" width="44" height="24" rx="2" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="298" cy="88" r="5" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="322" cy="88" r="5" fill="none" stroke="#dc2626" stroke-width="2"/><text x="30" y="128" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">mg</text><text x="30" y="140" font-size="8" fill="#6b7280" text-anchor="middle">enrichment</text><text x="120" y="128" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">g</text><text x="220" y="128" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">kg</text><text x="310" y="128" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">t</text><text x="310" y="140" font-size="8" fill="#6b7280" text-anchor="middle">enrichment</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the Grade 5 units of mass — grams and kilograms — and how to choose the correct unit for everyday objects, with milligrams and tonnes introduced as enrichment" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONVERTING UNITS OF MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-mass',
      title: 'Converting Units of Mass',
      icon: '⚖️',
      explanation:
        `<p style="margin-bottom:16px;">In Grade 5, the conversion you need is ${or('1 000 g = 1 kg')}. To convert from ${or('kilograms')} to ${gr('grams')} we ${gr('multiply')} by 1 000. To convert from ${gr('grams')} to ${or('kilograms')} we ${re('divide')} by 1 000. Always check your answer makes sense — converting to a smaller unit should give a bigger number.</p>` +

        // ── Looking ahead note ──────────────────────────────────────────────
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:16px;padding:12px 16px;background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;">` +
        `<span style="font-size:18px;line-height:1;">🔭</span>` +
        `<p style="margin:0;font-size:14px;color:#6b21a8;"><strong>Looking ahead:</strong> converting ${bl('mg ↔ g')} and ${re('kg ↔ t')} goes beyond CAPS Grade 5 (which only requires converting g ↔ kg). These extra conversions are shown below as enrichment.</p>` +
        `</div>` +

        `<p style="margin-bottom:16px;">The full set of conversion relationships is: ${or('1 000 mg = 1 g')}, ${or('1 000 g = 1 kg')}, ${or('1 000 kg = 1 t')}.</p>` +

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
        'A conversion diagram highlighting the core Grade 5 conversion between kg and g, with a green multiply-by-1000 arrow and a red divide-by-1000 arrow, plus a note that mg and t work the same way as enrichment',
      diagramSvg:
        '<svg viewBox="0 0 340 165" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="40" width="90" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="65" font-size="15" font-weight="700" fill="#ea580c" text-anchor="middle">kg</text><rect x="220" y="40" width="90" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="265" y="65" font-size="15" font-weight="700" fill="#16a34a" text-anchor="middle">g</text><line x1="125" y1="50" x2="215" y2="50" stroke="#16a34a" stroke-width="2"/><polygon points="219,50 211,45 211,55" fill="#16a34a"/><text x="170" y="40" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">× 1 000</text><line x1="215" y1="73" x2="125" y2="73" stroke="#dc2626" stroke-width="2"/><polygon points="121,73 129,68 129,78" fill="#dc2626"/><text x="170" y="92" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷ 1 000</text><text x="170" y="112" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">1 000 g = 1 kg</text><rect x="20" y="120" width="300" height="36" rx="4" fill="none" stroke="#9ca3af" stroke-width="1.2" stroke-dasharray="3,2"/><text x="170" y="134" font-size="10" fill="#6b7280" text-anchor="middle"><tspan x="170" dy="0">mg ↔ g and kg ↔ t work</tspan><tspan x="170" dy="14">the same way (enrichment)</tspan></text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert grams and kilograms by multiplying or dividing by 1000 with worked examples, with milligram and tonne conversions introduced as enrichment" />',
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
        'Three types of scales — a kitchen scale with scale markings in blue and the mass reading in orange, a bathroom scale, and a balance scale with the heavier side in red going down and the lighter side in green going up',
      diagramSvg:
        '<svg viewBox="0 0 400 155" xmlns="http://www.w3.org/2000/svg"><circle cx="65" cy="60" r="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="60" x2="65" y2="28" stroke="#2563eb" stroke-width="1.5"/><line x1="65" y1="60" x2="90" y2="42" stroke="#2563eb" stroke-width="1.5"/><line x1="65" y1="60" x2="40" y2="42" stroke="#2563eb" stroke-width="1.5"/><line x1="65" y1="60" x2="82" y2="36" stroke="#0f1f3d" stroke-width="2"/><circle cx="65" cy="60" r="3" fill="#0f1f3d"/><text x="65" y="108" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Kitchen scale</text><text x="65" y="122" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">450 g</text><rect x="165" y="85" width="70" height="14" rx="3" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="183" y="55" width="34" height="20" rx="2" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="200" y="69" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">42 kg</text><text x="200" y="112" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Bathroom scale</text><polygon points="335,75 322,97 348,97" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="292" y1="92" x2="378" y2="58" stroke="#0f1f3d" stroke-width="2.5"/><line x1="292" y1="92" x2="292" y2="108" stroke="#dc2626" stroke-width="1.5"/><rect x="276" y="108" width="32" height="13" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="378" y1="58" x2="378" y2="74" stroke="#16a34a" stroke-width="1.5"/><rect x="362" y="74" width="32" height="13" fill="none" stroke="#16a34a" stroke-width="2"/><text x="292" y="135" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">heavier</text><text x="378" y="42" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">lighter</text><text x="335" y="148" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Balance scale</text></svg>',

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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // Blocks: 0-3 Choosing the correct unit | 4-8 Converting units |
    // 9-12 Reading and comparing scales | 13-15 Error-spotting & justification |
    // 16-17 Word problems (add/subtract) | 18-19 Multi-step applications
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a single apple: g or kg?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'An apple is a light object, so grams (g) is the sensible unit. Kilograms would give an awkward tiny decimal.' },
        { difficulty: 'Easy', question: 'Nomsa weighs a loaf of bread on a shop scale. Which unit gives the most sensible reading for its mass — grams or kilograms?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A loaf of bread has a mass of a few hundred grams, so grams (g) gives a sensible reading such as 700 g. Kilograms would give an awkward decimal (0.7 kg).' },
        { difficulty: 'Easy', question: 'A builder is choosing a unit to label a single bag of cement on a delivery list. He picks grams because "grams are always the safest choice." Is he correct? Explain.', checkMode: 'self', answer: 'No, he is not correct. A single bag of cement has a mass of around 25 to 50 kg, which is a sensible number in kilograms. In grams it would be an awkwardly large number like 25 000 g. Kilograms is the right unit for one bag of cement.' },
        { difficulty: 'Easy', question: 'A bicycle has a mass of about 12 kg and a bag of sugar has a mass of about 2 kg. If you had to describe both masses using the SAME unit so the numbers stay easy to read, which unit would you choose, and why?', checkMode: 'self', answer: 'Kilograms works well for both — the bicycle is 12 kg and the bag of sugar is 2 kg, and both numbers are easy to read and compare. In grams both numbers would still work (12 000 g and 2 000 g) but they would be unnecessarily long to write, so kilograms is the more sensible shared unit here.' },
        { difficulty: 'Easy-Medium', question: 'Convert 4.2 kg to grams.', checkMode: 'auto', correctAnswer: '4200g', correctAnswers: ['4200g', '4200 g', '4 200 g', '4200'], explanation: 'To convert kilograms to grams, multiply by 1 000. 4.2 × 1 000 = 4 200 g.' },
        { difficulty: 'Easy-Medium', question: 'A market stall sells a pumpkin with a mass of 6 kg. How many grams is that?', checkMode: 'auto', correctAnswer: '6000g', correctAnswers: ['6000g', '6000 g', '6 000 g', '6000'], explanation: 'To convert kilograms to grams, multiply by 1 000. 6 × 1 000 = 6 000 g.' },
        { difficulty: 'Medium', question: 'Convert 3 750 g to kilograms.', checkMode: 'auto', correctAnswer: '3.75kg', correctAnswers: ['3.75kg', '3.75 kg', '3.75'], explanation: 'To convert grams to kilograms, divide by 1 000. 3 750 ÷ 1 000 = 3.75 kg.' },
        { difficulty: 'Medium', question: 'A packet of nails is labelled "0.65 kg". A hardware clerk needs this written in grams for the price sticker. What should the sticker say?', checkMode: 'auto', correctAnswer: '650g', correctAnswers: ['650g', '650 g', '650'], explanation: 'To convert kilograms to grams, multiply by 1 000. 0.65 × 1 000 = 650 g.' },
        { difficulty: 'Medium', question: 'A truck\'s cargo has a mass of 5 250 000 g. What is this mass in kilograms?', checkMode: 'auto', correctAnswer: '5250kg', correctAnswers: ['5250kg', '5250 kg', '5 250 kg', '5250'], explanation: 'To convert g to kg, divide by 1 000: 5 250 000 ÷ 1 000 = 5 250 kg.' },
        { difficulty: 'Medium', question: 'A kitchen scale shows the needle exactly halfway between the 350 g mark and the 450 g mark. What mass is being shown?', checkMode: 'auto', correctAnswer: '400g', correctAnswers: ['400g', '400 g', '400'], explanation: 'The difference between the marks is 450 − 350 = 100. Half of 100 is 50. Add this to the lower mark: 350 + 50 = 400 g.' },
        { difficulty: 'Medium', question: 'A bathroom scale has marks every 5 kg. The needle points at the 9th mark above 0 kg. What is the reading?', checkMode: 'auto', correctAnswer: '45kg', correctAnswers: ['45kg', '45 kg', '45'], explanation: 'Count up 9 marks of 5 kg each from 0: 9 × 5 = 45 kg.' },
        { difficulty: 'Medium', question: 'Three parcels are compared on a balance scale two at a time. Parcel A is heavier than Parcel B. Parcel B is heavier than Parcel C. List the parcels from heaviest to lightest, and explain your reasoning.', checkMode: 'self', answer: 'From heaviest to lightest: A, B, C. Since A is heavier than B, A must come before B. Since B is heavier than C, B must come before C. Putting these clues together, A is the heaviest, B is in the middle, and C is the lightest.' },
        { difficulty: 'Medium', question: 'A student says a full water bottle should be measured in kilograms because "kilograms are the proper scientific unit." Is this reasoning sound? Explain what is wrong with it.', checkMode: 'self', answer: 'No, this reasoning is not sound. There is no single "proper" unit for every measurement — the best unit is whichever one gives a sensible, easy-to-read number for that particular object. A full water bottle has a mass of roughly 1 kg (or 1 000 g) — both grams and kilograms give a sensible reading here, so either could be reasonable, but the reasoning "kilograms are the proper unit" is still flawed as a general rule.' },
        { difficulty: 'Medium', question: 'Kagiso says that to convert 2.8 kg to grams, you divide by 1 000, giving 0.0028 g. Is Kagiso correct? Explain the mistake.', checkMode: 'self', answer: 'No, Kagiso is incorrect. Converting from kilograms (a larger unit) to grams (a smaller unit) means you multiply by 1 000, not divide. The correct working is 2.8 × 1 000 = 2 800 g. Kagiso used the wrong operation, and dividing also moved the decimal the wrong way — converting to a smaller unit should make the number bigger, not smaller.' },
        { difficulty: 'Medium-Hard', question: 'A recipe calls for 900 g of flour. Zanele says she can use her kitchen scale set to kilograms and just read off "0.9" without adding a unit label, because "everyone will know it means kilograms." Explain why this could cause a problem.', checkMode: 'self', answer: 'Leaving off the unit is risky because a number on its own is meaningless — "0.9" could be read as 0.9 kg, 0.9 g, or even misread entirely. If someone assumes it means grams instead of kilograms, they would use far too little flour. Always writing the unit (0.9 kg) removes any doubt about what the measurement actually means.' },
        { difficulty: 'Medium-Hard', question: 'A mail package has a mass of 2 350 g. Sipho rounds this to "2 kg" on the courier form because he thinks rounding to the nearest whole kilogram is always fine for postage. Explain why this could be a problem, using the actual conversion.', checkMode: 'self', answer: '2 350 g converts to 2.35 kg (2 350 ÷ 1 000 = 2.35 kg), not exactly 2 kg. Rounding down like this understates the true mass by 350 g, which matters for postage because couriers often charge by weight bands — understating the mass could mean the parcel is charged incorrectly or rejected. It is safer to record the precise mass, 2.35 kg, rather than rounding down.' },
        { difficulty: 'Medium-Hard', question: 'Lindiwe buys 1.4 kg of potatoes and 650 g of onions. What is the total mass of her vegetables, in kilograms?', checkMode: 'auto', correctAnswer: '2.05kg', correctAnswers: ['2.05kg', '2.05 kg', '2.05'], explanation: 'Convert 1.4 kg to grams: 1.4 × 1 000 = 1 400 g. Add: 1 400 g + 650 g = 2 050 g. Convert back to kilograms: 2 050 ÷ 1 000 = 2.05 kg.' },
        { difficulty: 'Medium-Hard', question: 'A 5 kg bag of maize meal has 2 350 g used to cook a large pot of pap for a family gathering. How much maize meal is left, in grams?', checkMode: 'auto', correctAnswer: '2650g', correctAnswers: ['2650g', '2650 g', '2 650 g', '2650'], explanation: 'Convert 5 kg to grams: 5 × 1 000 = 5 000 g. Subtract the amount used: 5 000 − 2 350 = 2 650 g left.' },
        { difficulty: 'Hard', question: 'A crate holds 6 identical tins of paint, each with a mass of 225 g, plus one empty brush tray with a mass of 800 g. What is the total mass of the crate\'s contents, in kilograms?', checkMode: 'auto', correctAnswer: '2.15kg', correctAnswers: ['2.15kg', '2.15 kg', '2.15'], explanation: 'Mass of 6 tins: 6 × 225 g = 1 350 g. Add the brush tray: 1 350 + 800 = 2 150 g. Convert to kilograms: 2 150 ÷ 1 000 = 2.15 kg.' },
        { difficulty: 'Hard', question: 'A watermelon has a mass of 3.6 kg. It is cut into 4 equal pieces to share among friends. What is the mass of one piece, in grams? Show your full working.', checkMode: 'self', answer: 'Convert 3.6 kg to grams: 3.6 × 1 000 = 3 600 g. Divide by the number of pieces: 3 600 ÷ 4 = 900 g. Each piece has a mass of 900 g.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered units, conversions, scales and calculations with mass.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of mass — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and calculations, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — same block layout as Set 1, fresh phrasing/contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a grain of rice: g or kg?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A single grain of rice is extremely light, so grams (g) is the sensible unit. Kilograms would give an awkward tiny decimal.' },
        { difficulty: 'Easy', question: 'Thabo picks up a mango and wants to weigh it. Which unit gives the most sensible reading for its mass — grams or kilograms?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A mango has a mass of a few hundred grams, so grams (g) gives a sensible reading. Kilograms would give an awkward tiny decimal.' },
        { difficulty: 'Easy', question: 'A traveller is choosing a unit to record the mass of her packed suitcase for the airline. She picks grams because "grams are always the safest choice." Is she correct? Explain.', checkMode: 'self', answer: 'No, she is not correct. A packed suitcase has a mass of around 15 to 25 kg, which is a sensible number in kilograms. In grams it would be an awkwardly large number like 20 000 g. Kilograms is the right unit for luggage.' },
        { difficulty: 'Easy', question: 'A schoolbag has a mass of about 5 kg and a bag of potatoes has a mass of about 8 kg. If a teacher wanted to compare both masses using the same unit without ending up with silly numbers, would grams or kilograms work better, and why?', checkMode: 'self', answer: 'Kilograms works better for both. Written in kilograms the two masses are simply 5 kg and 8 kg, which are easy to compare directly. In grams they would be 5 000 g and 8 000 g — correct, but unnecessarily long to write and compare.' },
        { difficulty: 'Easy-Medium', question: 'Convert 3.8 kg to grams.', checkMode: 'auto', correctAnswer: '3800g', correctAnswers: ['3800g', '3800 g', '3 800 g', '3800'], explanation: 'To convert kilograms to grams, multiply by 1 000. 3.8 × 1 000 = 3 800 g.' },
        { difficulty: 'Easy-Medium', question: 'A vet records the mass of a large dog as 9 kg on a form that only accepts grams. What value should the vet enter?', checkMode: 'auto', correctAnswer: '9000g', correctAnswers: ['9000g', '9000 g', '9 000 g', '9000'], explanation: 'To convert kilograms to grams, multiply by 1 000. 9 × 1 000 = 9 000 g.' },
        { difficulty: 'Medium', question: 'Convert 4 250 g to kilograms.', checkMode: 'auto', correctAnswer: '4.25kg', correctAnswers: ['4.25kg', '4.25 kg', '4.25'], explanation: 'To convert grams to kilograms, divide by 1 000. 4 250 ÷ 1 000 = 4.25 kg.' },
        { difficulty: 'Medium', question: 'A bag of biltong is labelled "0.35 kg". A shopkeeper needs this written in grams for the till system. What should be entered?', checkMode: 'auto', correctAnswer: '350g', correctAnswers: ['350g', '350 g', '350'], explanation: 'To convert kilograms to grams, multiply by 1 000. 0.35 × 1 000 = 350 g.' },
        { difficulty: 'Medium', question: 'A delivery of screws has a mass of 8 400 g. What is this mass in kilograms?', checkMode: 'auto', correctAnswer: '8.4kg', correctAnswers: ['8.4kg', '8.4 kg', '8.4', '8.40kg', '8.40 kg'], explanation: 'Convert g to kg by dividing by 1 000: 8 400 ÷ 1 000 = 8.4 kg.' },
        { difficulty: 'Medium', question: 'A luggage scale shows the display exactly halfway between the 12 kg mark and the 14 kg mark. What mass is being shown?', checkMode: 'auto', correctAnswer: '13kg', correctAnswers: ['13kg', '13 kg', '13'], explanation: 'The difference between the marks is 14 − 12 = 2. Half of 2 is 1. Add this to the lower mark: 12 + 1 = 13 kg.' },
        { difficulty: 'Medium', question: 'A parcel scale has marks every 2 kg. The needle points at the 6th mark above 0 kg. What is the reading?', checkMode: 'auto', correctAnswer: '12kg', correctAnswers: ['12kg', '12 kg', '12'], explanation: 'Count up 6 marks of 2 kg each from 0: 6 × 2 = 12 kg.' },
        { difficulty: 'Medium', question: 'Three animals are compared on a balance scale two at a time. The dog is lighter than the goat. The goat is lighter than the cow. List the animals from lightest to heaviest, and explain your reasoning.', checkMode: 'self', answer: 'From lightest to heaviest: dog, goat, cow. Since the dog is lighter than the goat, the dog comes first. Since the goat is lighter than the cow, the goat comes before the cow. Combining these clues, the dog is the lightest, the goat is in the middle, and the cow is the heaviest.' },
        { difficulty: 'Medium', question: 'A student says a single almond should be measured in kilograms because "kilograms are the everyday unit people use." Is this reasoning sound? Explain what is wrong with it.', checkMode: 'self', answer: 'No, this reasoning is not sound. The unit choice should depend on the actual size of the object, not on which unit feels most familiar. A single almond has a mass of only a few grams, so measuring it in kilograms would give a tiny, awkward decimal such as 0.005 kg. Grams is the sensible unit here, even though kilograms may feel like the more common everyday unit for other objects.' },
        { difficulty: 'Medium', question: 'Thandiwe says that to convert 1 600 g to kilograms, you multiply by 1 000, giving 1 600 000 kg. Is Thandiwe correct? Explain the mistake.', checkMode: 'self', answer: 'No, Thandiwe is incorrect. Converting from grams (a smaller unit) to kilograms (a larger unit) means you divide by 1 000, not multiply. The correct working is 1 600 ÷ 1 000 = 1.6 kg. Thandiwe used the wrong operation, which also moved the number in the wrong direction — converting to a larger unit should make the number smaller, not far bigger.' },
        { difficulty: 'Medium-Hard', question: 'A recipe needs 250 g of butter. Bongani says he can use his kitchen scale set to kilograms and just read off "0.25" without adding a unit, since "everyone will know what it means." Explain why this could cause a problem.', checkMode: 'self', answer: 'Leaving off the unit is risky because "0.25" alone does not say whether it means 0.25 g or 0.25 kg — these are very different amounts. Mistaking grams for kilograms (or the other way round) could mean using 1 000 times too much or too little butter. Always writing the full measurement with its unit (0.25 kg, which equals 250 g) removes any risk of misreading it.' },
        { difficulty: 'Medium-Hard', question: 'A box of tiles has a mass of 4 650 g. Ayesha rounds this to "4 kg" on the delivery note because she thinks rounding down to the nearest kilogram is always acceptable. Explain why this could be a problem, using the actual conversion.', checkMode: 'self', answer: '4 650 g converts to 4.65 kg (4 650 ÷ 1 000 = 4.65 kg), not exactly 4 kg. Rounding down like this understates the true mass by 650 g, which matters for delivery notes because vehicles and handlers often have weight limits — understating the mass could lead to overloading or incorrect charges. It is safer to record the precise mass, 4.65 kg, rather than rounding down.' },
        { difficulty: 'Medium-Hard', question: 'Nomvula buys 2.1 kg of tomatoes and 480 g of chillies. What is the total mass of her vegetables, in kilograms?', checkMode: 'auto', correctAnswer: '2.58kg', correctAnswers: ['2.58kg', '2.58 kg', '2.58'], explanation: 'Convert 2.1 kg to grams: 2.1 × 1 000 = 2 100 g. Add: 2 100 g + 480 g = 2 580 g. Convert back to kilograms: 2 580 ÷ 1 000 = 2.58 kg.' },
        { difficulty: 'Medium-Hard', question: 'A 4 kg bag of dog food has 1 750 g used to feed a litter of puppies over a weekend. How much dog food is left, in grams?', checkMode: 'auto', correctAnswer: '2250g', correctAnswers: ['2250g', '2250 g', '2 250 g', '2250'], explanation: 'Convert 4 kg to grams: 4 × 1 000 = 4 000 g. Subtract the amount used: 4 000 − 1 750 = 2 250 g left.' },
        { difficulty: 'Hard', question: 'A hamper contains 5 identical jars of jam, each with a mass of 340 g, plus one wooden box with a mass of 900 g. What is the total mass of the hamper\'s contents, in kilograms?', checkMode: 'auto', correctAnswer: '2.6kg', correctAnswers: ['2.6kg', '2.6 kg', '2.60kg', '2.60 kg'], explanation: 'Mass of 5 jars: 5 × 340 g = 1 700 g. Add the wooden box: 1 700 + 900 = 2 600 g. Convert to kilograms: 2 600 ÷ 1 000 = 2.6 kg.' },
        { difficulty: 'Hard', question: 'A block of cheese has a mass of 2.8 kg. It is cut into 7 equal pieces for a market stall. What is the mass of one piece, in grams? Show your full working.', checkMode: 'self', answer: 'Convert 2.8 kg to grams: 2.8 × 1 000 = 2 800 g. Divide by the number of pieces: 2 800 ÷ 7 = 400 g. Each piece has a mass of 400 g.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently work with mass units, conversions and scales.' },
        { minScore: 15, message: 'Great work! You have a solid understanding — review any missed questions and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on conversions and calculations, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — same block layout, more real-world contexts + reasoning
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a single button: g or kg?', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A button is a light object, so grams (g) is the sensible unit. Kilograms would give an unnecessarily small decimal for such a small object.' },
        { difficulty: 'Easy', question: 'A shopper picks up a bag of onions at the supermarket. Which unit gives the most sensible reading for its mass — grams or kilograms?', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilograms', 'kilogram'], explanation: 'A bag of onions is moderately heavy, so kilograms (kg) gives a sensible reading. Grams would give an unnecessarily large number.' },
        { difficulty: 'Easy', question: 'A shopkeeper is choosing a unit to record the mass of a delivery of 200 loaves of bread. He picks grams because "grams are more precise than kilograms." Is this a sensible choice? Explain.', checkMode: 'self', answer: 'No, this is not a sensible choice. A delivery of 200 loaves has a mass of many thousands of grams, so recording it in grams would give a long, hard-to-read number. Kilograms is the sensible unit for something this heavy — being "more precise" does not matter if the number is too unwieldy to read or compare.' },
        { difficulty: 'Easy', question: 'A pencil has a mass of about 5 g and a bag of cement has a mass of about 25 kg. Explain why it would not make sense to describe both objects using the same unit of mass.', checkMode: 'self', answer: 'Using the same unit for both would make at least one number very awkward to read. If grams were used for both, the cement bag would be 25 000 g, an unnecessarily large number. If kilograms were used for both, the pencil would be about 0.005 kg, an awkward tiny decimal. Because the pencil and the cement bag differ so much in size, each needs its own sensible unit — grams for the pencil and kilograms for the cement — rather than sharing one.' },
        { difficulty: 'Easy-Medium', question: 'Convert 7.5 kg to grams.', checkMode: 'auto', correctAnswer: '7500g', correctAnswers: ['7500g', '7500 g', '7 500 g', '7500'], explanation: 'To convert kilograms to grams, multiply by 1 000. 7.5 × 1 000 = 7 500 g.' },
        { difficulty: 'Easy-Medium', question: 'A gym records a barbell\'s mass as 12 kg on equipment labelled only in grams. What value should be written?', checkMode: 'auto', correctAnswer: '12000g', correctAnswers: ['12000g', '12000 g', '12 000 g', '12000'], explanation: 'To convert kilograms to grams, multiply by 1 000. 12 × 1 000 = 12 000 g.' },
        { difficulty: 'Medium', question: 'Convert 6 300 g to kilograms.', checkMode: 'auto', correctAnswer: '6.3kg', correctAnswers: ['6.3kg', '6.3 kg', '6.3', '6.30kg', '6.30 kg'], explanation: 'To convert grams to kilograms, divide by 1 000. 6 300 ÷ 1 000 = 6.3 kg.' },
        { difficulty: 'Medium', question: 'A box of stationery is labelled "0.08 kg". A clerk needs this written in grams for the inventory list. What should be entered?', checkMode: 'auto', correctAnswer: '80g', correctAnswers: ['80g', '80 g', '80'], explanation: 'To convert kilograms to grams, multiply by 1 000. 0.08 × 1 000 = 80 g.' },
        { difficulty: 'Medium', question: 'A batch of stationery has a total mass of 3 600 g. What is this mass in kilograms?', checkMode: 'auto', correctAnswer: '3.6kg', correctAnswers: ['3.6kg', '3.6 kg', '3.60kg', '3.60 kg'], explanation: 'Convert g to kg by dividing by 1 000: 3 600 ÷ 1 000 = 3.6 kg.' },
        { difficulty: 'Medium', question: 'A kitchen scale shows the needle exactly halfway between the 700 g mark and the 900 g mark. What mass is being shown?', checkMode: 'auto', correctAnswer: '800g', correctAnswers: ['800g', '800 g', '800'], explanation: 'The difference between the marks is 900 − 700 = 200. Half of 200 is 100. Add this to the lower mark: 700 + 100 = 800 g.' },
        { difficulty: 'Medium', question: 'A bathroom scale has marks every 4 kg. The needle points at the 7th mark above 0 kg. What is the reading?', checkMode: 'auto', correctAnswer: '28kg', correctAnswers: ['28kg', '28 kg', '28'], explanation: 'Count up 7 marks of 4 kg each from 0: 7 × 4 = 28 kg.' },
        { difficulty: 'Medium', question: 'Three suitcases are compared on a balance scale two at a time. Suitcase X is heavier than Suitcase Y. Suitcase Z is lighter than Suitcase Y. List the suitcases from heaviest to lightest, and explain your reasoning.', checkMode: 'self', answer: 'From heaviest to lightest: X, Y, Z. Since X is heavier than Y, X comes first. Since Z is lighter than Y, Z must come after Y. Combining these clues, X is the heaviest, Y is in the middle, and Z is the lightest.' },
        { difficulty: 'Medium', question: 'A student says a bag of cement should be measured in grams because "smaller units are always more accurate." Is this reasoning sound? Explain what is wrong with it.', checkMode: 'self', answer: 'No, this reasoning is not sound. A smaller unit does not automatically make a measurement more accurate — it just changes how big the number looks. A bag of cement has a mass of several kilograms, so measuring it in grams would give an unnecessarily large number, such as 25 000 g instead of 25 kg. Kilograms is the sensible unit for an object this size.' },
        { difficulty: 'Medium', question: 'Palesa says that to convert 4.5 kg to grams, you divide by 1 000, giving 0.0045 g. Is Palesa correct? Explain the mistake.', checkMode: 'self', answer: 'No, Palesa is incorrect. Converting from kilograms (a larger unit) to grams (a smaller unit) means you multiply by 1 000, not divide. The correct working is 4.5 × 1 000 = 4 500 g. Palesa used the wrong operation, and dividing also moved the number in the wrong direction — converting to a smaller unit should make the number bigger, not smaller.' },
        { difficulty: 'Medium-Hard', question: 'A baby needs 120 g of formula per feed. A parent says they can just measure "0.12" on a kilogram scale and skip writing the unit, because "it is obviously kilograms." Explain why skipping the unit is risky here.', checkMode: 'self', answer: 'Skipping the unit is risky because "0.12" alone gives no clue whether it means 0.12 g or 0.12 kg — these are very different amounts. For a baby\'s feed, mistaking grams for kilograms could mean preparing an amount that is 1 000 times too much or too little. Always writing the full measurement with its unit (0.12 kg, which equals 120 g) avoids this confusion.' },
        { difficulty: 'Medium-Hard', question: 'A crate of vegetables has a mass of 8 250 g. Themba rounds this to "8 kg" on the market receipt because he thinks rounding down to the nearest kilogram is always fine. Explain why this could be a problem, using the actual conversion.', checkMode: 'self', answer: '8 250 g converts to 8.25 kg (8 250 ÷ 1 000 = 8.25 kg), not exactly 8 kg. Rounding down like this understates the true mass by 250 g, which matters when goods are priced or charged by mass — the seller could lose money, or a delivery vehicle\'s load could be undercounted. It is safer to record the precise mass, 8.25 kg, rather than rounding down.' },
        { difficulty: 'Medium-Hard', question: 'Owethu buys 1.75 kg of beef and 620 g of boerewors. What is the total mass of his meat, in kilograms?', checkMode: 'auto', correctAnswer: '2.37kg', correctAnswers: ['2.37kg', '2.37 kg', '2.37'], explanation: 'Convert 1.75 kg to grams: 1.75 × 1 000 = 1 750 g. Add: 1 750 g + 620 g = 2 370 g. Convert back to kilograms: 2 370 ÷ 1 000 = 2.37 kg.' },
        { difficulty: 'Medium-Hard', question: 'A 6 kg sack of potatoes has 2 875 g used to make chips for a school fundraiser. How much is left, in grams?', checkMode: 'auto', correctAnswer: '3125g', correctAnswers: ['3125g', '3125 g', '3 125 g', '3125'], explanation: 'Convert 6 kg to grams: 6 × 1 000 = 6 000 g. Subtract the amount used: 6 000 − 2 875 = 3 125 g left.' },
        { difficulty: 'Hard', question: 'A gift box contains 8 identical soaps, each with a mass of 85 g, plus one decorative ribbon with a mass of 20 g. What is the total mass of the gift box\'s contents, in kilograms?', checkMode: 'auto', correctAnswer: '0.7kg', correctAnswers: ['0.7kg', '0.7 kg', '0.70kg', '0.70 kg'], explanation: 'Mass of 8 soaps: 8 × 85 g = 680 g. Add the ribbon: 680 + 20 = 700 g. Convert to kilograms: 700 ÷ 1 000 = 0.7 kg.' },
        { difficulty: 'Hard', question: 'A large pumpkin has a mass of 4.8 kg. It is cut into 6 equal pieces to share at a soup kitchen. What is the mass of one piece, in grams? Show your full working.', checkMode: 'self', answer: 'Convert 4.8 kg to grams: 4.8 × 1 000 = 4 800 g. Divide by the number of pieces: 4 800 ÷ 6 = 800 g. Each piece has a mass of 800 g.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can apply mass units, conversions and calculations to real-world problems.' },
        { minScore: 15, message: 'Great work! You have a strong grasp of these skills — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the worked examples on word problems and calculations, then try again.' },
        { minScore: 0, message: 'Keep going! Work through the study guide again and retry this set.' },
      ],
    },
  ] as PracticeSet[],
}
