import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Mass',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-mass',
      title: 'Units of Mass',
      icon: '⚖️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Mass</strong> tells us <strong>how heavy an object is</strong>. We measure mass using standard units so that everyone gets the same result. Choosing the right unit makes measuring much easier — we would not measure the mass of a person in grams!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The two units of mass</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Gram<br/><span style="font-weight:400;font-size:12px;">(g)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Light objects.</strong> A gram is a very small amount of mass. Use <strong style="color:#1e40af;">grams (g)</strong> when measuring light objects like a slice of bread, a sweet or a pen. There are <strong>1 000 g in 1 kg</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kilogram<br/><span style="font-weight:400;font-size:12px;">(kg)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Heavier objects.</strong> A kilogram is much heavier than a gram. Use <strong style="color:#dc2626;">kilograms (kg)</strong> when measuring heavier objects like a bag of sugar, a person or a school bag.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Conversion fact 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 <span style="color:#bfdbfe;">g</span> = 1 <span style="color:#fca5a5;">kg</span></span>
  </div>
  <p style="margin-top:10px;font-size:14px;color:#78350f;">To convert <strong style="color:#1e40af;">kg to g</strong> — <strong>multiply by 1 000</strong>. &nbsp;&nbsp; To convert <strong style="color:#1e40af;">g to kg</strong> — <strong>divide by 1 000</strong>.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Real-life reference points</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 1 g</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>paperclip</strong> weighs about <strong style="color:#1e40af;">1 g</strong> — use it to picture just how light a gram is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 700 g</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>loaf of bread</strong> weighs about <strong style="color:#1e40af;">700 g</strong> — lighter than 1 kg but still measured in grams.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">1 kg</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">A <strong>bag of sugar</strong> weighs exactly <strong style="color:#dc2626;">1 kg</strong> — a great object to pick up and feel what 1 kg is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 30 kg</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">A <strong>Grade 4 learner</strong> weighs about <strong style="color:#dc2626;">30 kg</strong> — large masses of people and animals are always measured in kilograms.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Choosing the right unit</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Unit</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Use when measuring …</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Real-life examples</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;color:#475569;">Light objects</td>
          <td style="padding:8px 14px;color:#475569;">A sweet, a pen, a slice of bread</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;color:#475569;">Heavier objects</td>
          <td style="padding:8px 14px;color:#475569;">A school bag, a person, a bag of sugar</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Which unit would you use to measure the mass of a school bag?',
          steps: [
            'A school bag is a <strong>moderately heavy</strong> object — it holds books, stationery and a lunchbox.',
            'It is <strong>too heavy</strong> for grams to be practical — a school bag is thousands of grams, which is an awkward number.',
            '<strong style="color:#dc2626;">Kilograms (kg)</strong> are the right choice for heavier objects like school bags.',
          ],
          answer: 'Kilograms (kg). A school bag is a heavy object best measured in kilograms.',
        },
        {
          question: 'Which unit would you use to measure the mass of a sweet?',
          steps: [
            'A sweet is a <strong>very light object</strong> — you can barely feel it in your hand.',
            '<strong style="color:#1e40af;">Grams (g)</strong> are used for light objects like sweets, because the mass is far too small to measure in kilograms.',
          ],
          answer: 'Grams (g). A sweet is a very light object best measured in grams.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Four objects shown with their mass — a paperclip showing 1g, a slice of bread showing about 30g, a bag of sugar showing 1kg and a school bag showing about 3kg',
      videoPlaceholder:
        'Short video explaining grams and kilograms with real life examples of when to use each unit',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ESTIMATING AND READING MASS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-reading-mass',
      title: 'Estimating and Reading Mass',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;"><strong>Estimating</strong> mass means making a <strong>careful guess</strong> before you measure. A good estimate uses a <strong>reference point</strong> — something whose mass you already know — to help you judge how heavy an object is. After you estimate, you measure to find the <strong>actual measurement</strong>.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div style="background:#fff;border:1.5px solid #fdba74;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Estimate</div>
      <div style="color:#7c2d12;font-size:14px;">Your careful guess <em>before</em> measuring. Written as <strong style="color:#ea580c;">≈ 250 g</strong> (the ≈ symbol means "approximately").</div>
    </div>
    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Actual measurement</div>
      <div style="color:#1e3a8a;font-size:14px;">The exact mass found by measuring on a scale. Written as <strong style="color:#1e40af;">= 260 g</strong>.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Types of scales</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kitchen scale</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Has a <strong>dial or digital display</strong>. Place the object on the platform and read the number shown. Used to measure food in <strong>grams or kilograms</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Bathroom scale</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Stand on it</strong> and read the number shown in <strong>kilograms</strong>. Used to measure the mass of a person.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Balance scale</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Place the object on <strong>one side</strong> and known masses on the other side until the two sides <strong>balance evenly</strong>. The mass of the object equals the total of the known masses.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to read a scale with intervals</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Find the maximum value</strong> on the scale — this is the largest number shown.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Count the number of intervals</strong> between two labelled numbers.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Calculate the value of each interval</strong> by dividing the gap between two labelled numbers by the number of intervals.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Read where the needle points</strong> by counting from the nearest labelled number.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A scale goes from 0 to 500 g with 5 small intervals between each 100 g mark. What is each small interval worth?',
          steps: [
            'Each labelled section covers <strong style="color:#1e40af;">100 g</strong> and is split into <strong style="color:#1e40af;">5</strong> small intervals.',
            'Divide the section by the number of intervals: <strong style="color:#1e40af;">100</strong> ÷ <strong style="color:#1e40af;">5</strong> = <strong style="color:#ea580c;">20</strong>',
          ],
          answer: 'Each small interval is worth 20 g.',
        },
        {
          question:
            'A scale shows the needle pointing halfway between 300 g and 400 g. What is the mass?',
          steps: [
            'The needle is <strong>halfway</strong> between <strong style="color:#1e40af;">300 g</strong> and <strong style="color:#1e40af;">400 g</strong>.',
            'The gap between 300 and 400 is 100 g. Halfway = 100 ÷ 2 = 50 g past 300.',
            '<strong style="color:#1e40af;">300</strong> + <strong style="color:#ea580c;">50</strong> = <strong style="color:#ea580c;">350</strong>',
          ],
          answer: 'The mass is 350 g.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'A circular kitchen scale dial showing 0 to 1000g with the needle pointing to 350g and each interval clearly marked',
      videoPlaceholder:
        'Short video showing how to read different types of scales including kitchen scales and balance scales',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONVERTING BETWEEN GRAMS AND KILOGRAMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-grams-kilograms',
      title: 'Converting Between Grams and Kilograms',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Converting</strong> means changing a measurement from one unit to another. The amount stays the same — only the unit and the number change. All conversions between grams and kilograms use one fact: <strong style="color:#16a34a;">1 000 g = 1 kg</strong>.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick 💡</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>smaller unit</strong> (<strong style="color:#dc2626;">kg</strong> → <strong style="color:#1e40af;">g</strong>) → <strong style="color:#16a34a;">multiply by 1 000</strong> → the number gets <strong>bigger</strong>.</div>
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>bigger unit</strong> (<strong style="color:#1e40af;">g</strong> → <strong style="color:#dc2626;">kg</strong>) → <strong style="color:#16a34a;">divide by 1 000</strong> → the number gets <strong>smaller</strong>.</div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Conversion rules</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">From</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">To</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Operation</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Example</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#16a34a;">÷ 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">2 000 g</span> = <span style="color:#dc2626;font-weight:700;">2 kg</span></td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">kg</td>
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">g</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#16a34a;">× 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#dc2626;font-weight:700;">3 kg</span> = <span style="color:#1e40af;font-weight:700;">3 000 g</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Convert 3 500 g to kg.',
          steps: [
            'To go from <strong style="color:#1e40af;">g</strong> to <strong style="color:#dc2626;">kg</strong> — <strong style="color:#16a34a;">divide by 1 000</strong> (going to a bigger unit, so the number gets smaller).',
            '<strong style="color:#1e40af;">3 500</strong> ÷ <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#dc2626;">3.5</strong>',
          ],
          answer: '3 500 g = 3.5 kg',
        },
        {
          question: 'Convert 2.75 kg to g.',
          steps: [
            'To go from <strong style="color:#dc2626;">kg</strong> to <strong style="color:#1e40af;">g</strong> — <strong style="color:#16a34a;">multiply by 1 000</strong> (going to a smaller unit, so the number gets bigger).',
            '<strong style="color:#dc2626;">2.75</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">2 750</strong>',
          ],
          answer: '2.75 kg = 2 750 g',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH MASS AND WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-mass-word-problems',
      title: 'Calculating with Mass and Word Problems',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Mass word problems ask you to <strong>add</strong> or <strong>subtract</strong> masses to solve real-life situations. Before you calculate, always <strong>read the question carefully</strong>, look for <strong>key words</strong>, and make sure both masses are in the <strong>same unit</strong>.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key words to look for</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Addition ➕</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">total mass</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">altogether</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">combined</strong></span>
      </div>
    </div>

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Subtraction ➖</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">difference</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">how much heavier / lighter</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">remaining</strong></span>
      </div>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Steps for solving a mass word problem</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Read</strong> the question carefully.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Find the key word</strong> and decide whether to add or subtract.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Convert</strong> so both masses are in the same unit.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Calculate</strong> and write the answer with the correct unit.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'A bag of apples weighs 1 kg 500 g and a bag of oranges weighs 750 g. What is the total mass?',
          steps: [
            'Key word: <strong style="color:#ea580c;">total mass</strong> — this means <strong>addition</strong>.',
            'Convert to the same unit: <strong style="color:#dc2626;">1 kg 500 g</strong> = <strong style="color:#1e40af;">1 500 g</strong>.',
            'Add: <strong style="color:#1e40af;">1 500 g</strong> + <strong style="color:#1e40af;">750 g</strong> = <strong style="color:#1e40af;">2 250 g</strong>.',
            'Convert back: 2 250 g = <strong style="color:#dc2626;">2 kg 250 g</strong>.',
          ],
          answer: 'The total mass is 2 kg 250 g.',
        },
        {
          question:
            'A box weighs 5 kg. After removing some books it weighs 2 kg 300 g. How much did the books weigh?',
          steps: [
            'Key word: <strong style="color:#ea580c;">removing</strong> — this means <strong>subtraction</strong>.',
            'Convert to the same unit: <strong style="color:#dc2626;">5 kg</strong> = <strong style="color:#1e40af;">5 000 g</strong> and <strong style="color:#dc2626;">2 kg 300 g</strong> = <strong style="color:#1e40af;">2 300 g</strong>.',
            'Subtract: <strong style="color:#1e40af;">5 000 g</strong> − <strong style="color:#1e40af;">2 300 g</strong> = <strong style="color:#1e40af;">2 700 g</strong>.',
            'Convert: 2 700 g = <strong style="color:#dc2626;">2 kg 700 g</strong>.',
          ],
          answer: 'The books weighed 2 kg 700 g.',
        },
        {
          question:
            'A recipe needs 750 g of flour. Lerato has 2 kg of flour. How much flour will she have left after baking?',
          steps: [
            'Key word: <strong style="color:#ea580c;">left</strong> — this means <strong>subtraction</strong>.',
            'Convert <strong style="color:#dc2626;">2 kg</strong> to grams: <strong style="color:#dc2626;">2</strong> × <strong style="color:#16a34a;">1 000</strong> = <strong style="color:#1e40af;">2 000 g</strong>.',
            'Subtract: <strong style="color:#1e40af;">2 000 g</strong> − <strong style="color:#1e40af;">750 g</strong> = <strong style="color:#1e40af;">1 250 g</strong>.',
            'Convert: 1 250 g = <strong style="color:#dc2626;">1 kg 250 g</strong>.',
          ],
          answer: 'Lerato will have 1 kg 250 g of flour left.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to solve mass word problems by identifying key words and converting to the same unit before calculating',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs) — bread / sugar / paperclip / school-bag contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1: Choosing units & core conversion facts (0-3, Easy)
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a sweet — grams or kilograms?', answer: 'Grams', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A sweet is a very light object. Grams (g) are used for light objects because the mass is far too small to measure meaningfully in kilograms.' },
        { difficulty: 'Easy', question: 'Convert 1 kg to grams.', answer: '1 000 g', checkMode: 'auto', correctAnswer: '1000g', correctAnswers: ['1000g', '1000', '1000 g', '1 000g', '1 000 g'], explanation: 'To convert kg to g, multiply by 1 000: 1 × 1 000 = 1 000 g.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a school bag — grams or kilograms?', answer: 'Kilograms', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilograms', 'kilogram'], explanation: 'A school bag is a moderately heavy object, typically about 3–5 kg. Kilograms (kg) are used for heavier objects because the number of grams would be awkwardly large.' },
        { difficulty: 'Easy', question: 'Explain why we would not measure the mass of a loaf of bread in kilograms alone, using a whole number.', answer: 'A loaf of bread has a mass of about 700 g, which is less than 1 kg. If we only used whole kilograms, the mass would round to 1 kg or 0 kg, which is not accurate. Grams let us describe masses smaller than 1 kg precisely.', checkMode: 'self' },

        // Block 2: Converting g <-> kg (whole, decimal & compound) (4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'Convert 3 000 g to kilograms.', answer: '3 kg', checkMode: 'auto', correctAnswer: '3kg', correctAnswers: ['3kg', '3', '3 kg'], explanation: 'Divide by 1 000: 3 000 ÷ 1 000 = 3 kg.' },
        { difficulty: 'Medium', question: 'Convert 2.5 kg of sugar to grams.', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500', '2500 g', '2 500g', '2 500 g'], explanation: 'Multiply by 1 000: 2.5 × 1 000 = 2 500 g.' },
        { difficulty: 'Medium', question: 'A bag of sugar has a mass of 750 g. Write this mass in kilograms.', answer: '0.75 kg', checkMode: 'auto', correctAnswer: '0.75kg', correctAnswers: ['0.75kg', '0.75', '0.75 kg'], explanation: 'Divide by 1 000: 750 ÷ 1 000 = 0.75 kg.' },
        { difficulty: 'Medium', question: 'A loaf of bread has a mass of 1 kg 300 g. Write this mass in grams only.', answer: '1 300 g', checkMode: 'auto', correctAnswer: '1300g', correctAnswers: ['1300g', '1300', '1300 g', '1 300g', '1 300 g'], explanation: '1 kg = 1 000 g, so 1 kg 300 g = 1 000 g + 300 g = 1 300 g.' },
        { difficulty: 'Medium', question: 'A student says that 4 200 g is the same as 4 kg 200 g. Is this correct? Explain.', answer: 'Yes, this is correct. 4 200 g = 4 000 g + 200 g. Since 4 000 g = 4 kg, this is 4 kg + 200 g = 4 kg 200 g.', checkMode: 'self' },

        // Block 3: Reading & comparing mass on a scale (9-12, Medium)
        { difficulty: 'Easy', question: 'A kitchen scale goes from 0 to 300 g with 3 equal intervals. What is the value of each interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '300 ÷ 3 = 100 g per interval.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="71.2" y1="56.2" x2="79.6" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="158.8" y1="56.2" x2="150.4" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">200 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">300 g</text><line x1="115" y1="100" x2="153.2" y2="61.8" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Using the same scale, the needle points at the second mark from 0. What mass does it show?', answer: '200 g', checkMode: 'auto', correctAnswer: '200g', correctAnswers: ['200g', '200', '200 g'], explanation: 'Each interval is worth 100 g. The second mark from 0 is 0 + 100 + 100 = 200 g.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="71.2" y1="56.2" x2="79.6" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="158.8" y1="56.2" x2="150.4" y2="64.6" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="50.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">200 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">300 g</text><line x1="115" y1="100" x2="153.2" y2="61.8" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Which is heavier: 900 g or 1 kg?', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1 kg'], explanation: '1 kg = 1 000 g, and 1 000 g is greater than 900 g, so 1 kg is heavier.' },
        { difficulty: 'Medium', question: 'Order these masses from lightest to heaviest: 1 kg, 850 g, 1 200 g.', answer: '850 g, 1 kg, 1 200 g', checkMode: 'auto', correctAnswer: '850g, 1kg, 1200g', correctAnswers: ['850g, 1kg, 1200g', '850 g, 1 kg, 1 200 g', '850g,1kg,1200g'], explanation: 'Convert to grams: 1 kg = 1 000 g. So the masses are 850 g, 1 000 g, 1 200 g — already in order from lightest to heaviest.' },

        // Block 4: Estimating realistic mass (13-15, Medium)
        { difficulty: 'Medium', question: 'Which is the more realistic estimate for the mass of a slice of bread: 30 g or 30 kg?', answer: '30 g', checkMode: 'auto', correctAnswer: '30g', correctAnswers: ['30g', '30 g'], explanation: 'A slice of bread is a very light object — about 30 g. 30 kg would be heavier than a Grade 4 learner.' },
        { difficulty: 'Medium', question: 'A packed school bag full of books sits on a table. Which is the more realistic mass for it: 4 kg or 40 g?', answer: '4 kg', checkMode: 'auto', correctAnswer: '4kg', correctAnswers: ['4kg', '4 kg'], explanation: 'A school bag packed with books is fairly heavy — about 4 kg. 40 g would be lighter than a slice of bread.' },
        { difficulty: 'Medium', question: 'Karabo estimates that his full pencil case has a mass of about 3 kg. Is this a reasonable estimate? Explain your reasoning.', answer: 'No, this is not reasonable. A pencil case usually has a mass of about 200-300 g. 3 kg would be as heavy as three bags of sugar, which is far too heavy for a pencil case.', checkMode: 'self' },

        // Block 5: Word problems (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'A recipe uses 300 g of flour. If Naledi bakes the recipe 4 times, how much flour does she use in total?', answer: '1 200 g or 1 kg 200 g', checkMode: 'auto', correctAnswer: '1200g', correctAnswers: ['1200g', '1200', '1200 g', '1 200g', '1 200 g', '1kg200g', '1 kg 200 g'], explanation: 'Multiply: 300 g × 4 = 1 200 g = 1 kg 200 g.' },
        { difficulty: 'Medium-Hard', question: 'A baker has a 5 kg bag of sugar. She uses 1 kg 250 g to bake a batch of cakes. How much sugar is left?', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3750g', '3750', '3 kg 750 g', '3kg 750g'], explanation: 'Convert: 5 kg = 5 000 g. Subtract: 5 000 g − 1 250 g = 3 750 g = 3 kg 750 g.' },
        { difficulty: 'Hard', question: 'A market stall packs sweets into small bags of 60 g each. If the stall has 1 kg 800 g of sweets, how many full bags can be packed?', answer: '30 bags', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 bags'], explanation: 'Convert: 1 kg 800 g = 1 800 g. Divide: 1 800 g ÷ 60 g = 30 bags.' },

        // Block 6: Multi-step reasoning, justification & error-spotting (19, Hard)
        { difficulty: 'Hard', question: 'Thabo says that 2.5 kg is the same as 2 kg 500 g. Is he correct? Explain your reasoning.', answer: 'Yes, Thabo is correct. 2.5 kg means 2 whole kilograms plus 0.5 of a kilogram. Since 0.5 kg = 0.5 × 1 000 g = 500 g, 2.5 kg = 2 kg 500 g exactly.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Perfect! You have mastered mass units, conversions and word problems.' },
        { minScore: 15, message: 'Great work! Review any questions you got wrong and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion rules and worked examples.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs) — fruit / vegetables / parcels contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1: Choosing units & core conversion facts (0-3, Easy)
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a grape — grams or kilograms?', answer: 'Grams', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A grape is a very light object. Grams (g) are used for light objects because kilograms would give an awkwardly small decimal.' },
        { difficulty: 'Easy', question: 'Convert 1 000 g to kilograms.', answer: '1 kg', checkMode: 'auto', correctAnswer: '1kg', correctAnswers: ['1kg', '1', '1 kg'], explanation: 'To convert g to kg, divide by 1 000: 1 000 ÷ 1 000 = 1 kg.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a crate of vegetables — grams or kilograms?', answer: 'Kilograms', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilograms', 'kilogram'], explanation: 'A crate of vegetables is heavy, often several kilograms. Kilograms (kg) are used for heavier objects because the number of grams would be awkwardly large.' },
        { difficulty: 'Easy', question: 'Explain why farmers weigh a crate of vegetables in kilograms rather than grams.', answer: 'A crate of vegetables can have a mass of several thousand grams, which is an inconveniently large number to work with. Kilograms give a smaller, easier number for heavy objects like a full crate.', checkMode: 'self' },

        // Block 2: Converting g <-> kg (4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'Convert 6 kg to grams.', answer: '6 000 g', checkMode: 'auto', correctAnswer: '6000g', correctAnswers: ['6000g', '6000', '6000 g', '6 000g', '6 000 g'], explanation: 'Multiply by 1 000: 6 × 1 000 = 6 000 g.' },
        { difficulty: 'Medium', question: 'A box of oranges has a mass of 3.5 kg. Write this mass in grams.', answer: '3 500 g', checkMode: 'auto', correctAnswer: '3500g', correctAnswers: ['3500g', '3500', '3500 g', '3 500g', '3 500 g'], explanation: 'Multiply by 1 000: 3.5 × 1 000 = 3 500 g.' },
        { difficulty: 'Medium', question: 'A punnet of strawberries has a mass of 250 g. Write this mass in kilograms.', answer: '0.25 kg', checkMode: 'auto', correctAnswer: '0.25kg', correctAnswers: ['0.25kg', '0.25', '0.25 kg'], explanation: 'Divide by 1 000: 250 ÷ 1 000 = 0.25 kg.' },
        { difficulty: 'Medium', question: 'A parcel of vegetables has a mass of 2 kg 400 g. Write this mass in grams only.', answer: '2 400 g', checkMode: 'auto', correctAnswer: '2400g', correctAnswers: ['2400g', '2400', '2400 g', '2 400g', '2 400 g'], explanation: '2 kg = 2 000 g, so 2 kg 400 g = 2 000 g + 400 g = 2 400 g.' },
        { difficulty: 'Medium', question: 'A student says that 0.5 kg and 500 g are not equal because "500 is a much bigger number than 0.5". Is the student correct? Explain.', answer: 'No, the student is not correct. 0.5 kg = 0.5 × 1 000 g = 500 g, so 0.5 kg and 500 g represent exactly the same mass. Comparing the numbers without checking the units is misleading, because kg and g are different sized units.', checkMode: 'self' },

        // Block 3: Reading & comparing mass on a scale (9-12, Medium)
        { difficulty: 'Medium', question: 'A kitchen scale goes from 0 to 500 g with 5 equal intervals between each 100 g mark. What is the value of each small interval?', answer: '20 g', checkMode: 'auto', correctAnswer: '20g', correctAnswers: ['20g', '20', '20 g'], explanation: 'Each 100 g section is divided into 5 equal intervals. 100 ÷ 5 = 20 g per interval.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="63.7" y1="134.8" x2="69.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="58.1" y1="124.6" x2="64.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="54.5" y1="113.5" x2="61.3" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.0" y1="101.9" x2="60.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.7" y1="79.0" x2="63.3" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="61.6" y1="68.4" x2="67.7" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="68.5" y1="59.0" x2="73.7" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="77.0" y1="51.0" x2="81.3" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="97.7" y1="40.5" x2="99.7" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="109.2" y1="38.3" x2="109.8" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="120.8" y1="38.3" x2="120.2" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="132.3" y1="40.5" x2="130.3" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="153.0" y1="51.0" x2="148.7" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="161.5" y1="59.0" x2="156.3" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="168.4" y1="68.4" x2="162.3" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="173.3" y1="79.0" x2="166.7" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="177.0" y1="101.9" x2="170.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="175.5" y1="113.5" x2="168.7" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="171.9" y1="124.6" x2="165.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="166.3" y1="134.8" x2="160.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">200 g</text><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">300 g</text><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">400 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">500 g</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same scale, the needle points halfway between 300 g and 400 g. What is the mass?', answer: '350 g', checkMode: 'auto', correctAnswer: '350g', correctAnswers: ['350g', '350', '350 g'], explanation: 'The gap between 300 and 400 is 100 g. Halfway = 100 ÷ 2 = 50 g past 300. 300 + 50 = 350 g.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="63.7" y1="134.8" x2="69.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="58.1" y1="124.6" x2="64.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="54.5" y1="113.5" x2="61.3" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="53.0" y1="101.9" x2="60.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="56.7" y1="79.0" x2="63.3" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="61.6" y1="68.4" x2="67.7" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="68.5" y1="59.0" x2="73.7" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="77.0" y1="51.0" x2="81.3" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="97.7" y1="40.5" x2="99.7" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="109.2" y1="38.3" x2="109.8" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="120.8" y1="38.3" x2="120.2" y2="45.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="132.3" y1="40.5" x2="130.3" y2="47.2" stroke="#9ca3af" stroke-width="1.5"/><line x1="153.0" y1="51.0" x2="148.7" y2="56.5" stroke="#9ca3af" stroke-width="1.5"/><line x1="161.5" y1="59.0" x2="156.3" y2="63.6" stroke="#9ca3af" stroke-width="1.5"/><line x1="168.4" y1="68.4" x2="162.3" y2="72.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="173.3" y1="79.0" x2="166.7" y2="81.4" stroke="#9ca3af" stroke-width="1.5"/><line x1="177.0" y1="101.9" x2="170.0" y2="101.7" stroke="#9ca3af" stroke-width="1.5"/><line x1="175.5" y1="113.5" x2="168.7" y2="112.0" stroke="#9ca3af" stroke-width="1.5"/><line x1="171.9" y1="124.6" x2="165.5" y2="121.8" stroke="#9ca3af" stroke-width="1.5"/><line x1="166.3" y1="134.8" x2="160.5" y2="130.9" stroke="#9ca3af" stroke-width="1.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">100 g</text><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">200 g</text><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">300 g</text><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">400 g</text><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">500 g</text><line x1="115" y1="100" x2="150.6" y2="74.1" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Which is heavier: 1.2 kg or 1 200 g, or are they equal?', answer: 'Equal', checkMode: 'auto', correctAnswer: 'equal', correctAnswers: ['equal', 'same', 'they are equal'], explanation: '1.2 kg = 1.2 × 1 000 = 1 200 g, so 1.2 kg and 1 200 g are exactly equal.' },
        { difficulty: 'Medium', question: 'Order these parcel masses from heaviest to lightest: 3.2 kg, 2 900 g, 3 kg.', answer: '3.2 kg, 3 kg, 2 900 g', checkMode: 'auto', correctAnswer: '3.2kg, 3kg, 2900g', correctAnswers: ['3.2kg, 3kg, 2900g', '3.2 kg, 3 kg, 2 900 g', '3.2kg,3kg,2900g'], explanation: 'Convert to grams: 3.2 kg = 3 200 g, 3 kg = 3 000 g, 2 900 g stays the same. From heaviest to lightest: 3 200 g, 3 000 g, 2 900 g.' },

        // Block 4: Estimating realistic mass (13-15, Medium)
        { difficulty: 'Medium', question: 'Which is the more realistic estimate for the mass of a bunch of grapes: 400 g or 40 kg?', answer: '400 g', checkMode: 'auto', correctAnswer: '400g', correctAnswers: ['400g', '400 g'], explanation: 'A bunch of grapes is a light fruit item — about 400 g is realistic. 40 kg would be heavier than an adult.' },
        { difficulty: 'Medium', question: 'A greengrocer weighs a full crate of tomatoes. Which is the more realistic mass: 8 kg or 8 g?', answer: '8 kg', checkMode: 'auto', correctAnswer: '8kg', correctAnswers: ['8kg', '8 kg'], explanation: 'A full crate of tomatoes is heavy — about 8 kg is realistic. 8 g would be lighter than a single grape.' },
        { difficulty: 'Medium', question: 'Palesa estimates that one carrot has a mass of about 500 g. Is this a reasonable estimate? Explain your reasoning.', answer: 'No, this is not reasonable. A single carrot usually has a mass of about 50-100 g. 500 g would be as heavy as five or more carrots together.', checkMode: 'self' },

        // Block 5: Word problems (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'A bag of apples has a mass of 1 200 g and a bag of pears has a mass of 800 g. What is the total mass of both bags?', answer: '2 000 g or 2 kg', checkMode: 'auto', correctAnswer: '2000g', correctAnswers: ['2000g', '2000', '2000 g', '2 000g', '2 000 g', '2kg', '2 kg'], explanation: 'Add the masses: 1 200 g + 800 g = 2 000 g = 2 kg.' },
        { difficulty: 'Medium-Hard', question: 'A vegetable box has a mass of 6 kg. If 2 kg 400 g of vegetables are sold, what mass is left in the box?', answer: '3 kg 600 g', checkMode: 'auto', correctAnswer: '3kg600g', correctAnswers: ['3kg600g', '3600g', '3600', '3 kg 600 g', '3kg 600g'], explanation: 'Convert: 6 kg = 6 000 g and 2 kg 400 g = 2 400 g. Subtract: 6 000 g − 2 400 g = 3 600 g = 3 kg 600 g.' },
        { difficulty: 'Hard', question: 'A delivery truck carries 6 identical parcels, each with a mass of 850 g. What is the total mass of all 6 parcels, in kilograms?', answer: '5.1 kg', checkMode: 'auto', correctAnswer: '5.1kg', correctAnswers: ['5.1kg', '5.1', '5.1 kg', '5100g', '5 100 g'], explanation: 'Multiply: 6 × 850 g = 5 100 g. Divide by 1 000: 5 100 ÷ 1 000 = 5.1 kg.' },

        // Block 6: Multi-step reasoning, justification & error-spotting (19, Hard)
        { difficulty: 'Hard', question: 'A balance scale has a bag of oranges on one side. To balance it, two 250 g weights and one 150 g weight are placed on the other side. What is the mass of the oranges, and what would that mass be in kilograms?', answer: '650 g, which is 0.65 kg. Add the weights: 250 g + 250 g + 150 g = 650 g. Divide by 1 000: 650 ÷ 1 000 = 0.65 kg.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="88,155 132,155 110,63" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="65" stroke="#0f1f3d" stroke-width="2.5"/><line x1="32" y1="55" x2="188" y2="55" stroke="#0f1f3d" stroke-width="3"/><circle cx="110" cy="55" r="4" fill="#0f1f3d"/><line x1="32" y1="55" x2="32" y2="87" stroke="#0f1f3d" stroke-width="1.8"/><line x1="188" y1="55" x2="188" y2="87" stroke="#0f1f3d" stroke-width="1.8"/><path d="M10,87 Q32,101 54,87" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M166,87 Q188,101 210,87" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M16,85 Q12,63 24,57 L40,57 Q52,63 48,85 Z" fill="#fef3c7" stroke="#0f1f3d" stroke-width="2"/><text x="32" y="75" font-size="13" fill="#dc2626" font-weight="700" text-anchor="middle">?</text><text x="32" y="117" font-size="12" fill="#374151" text-anchor="middle">oranges</text><rect x="166" y="65" width="16" height="20" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="174" y="79" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">250g</text><rect x="183" y="65" width="16" height="20" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="191" y="79" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">250g</text><rect x="200" y="71" width="14" height="14" fill="#dbeafe" stroke="#0f1f3d" stroke-width="2"/><text x="197" y="82" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">150g</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Excellent! You can confidently convert, compare and read mass scales.' },
        { minScore: 15, message: 'Great work! Review any questions you got wrong and try again.' },
        { minScore: 10, message: 'Good effort! Revisit how to read scale intervals and compare masses.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs) — rice / flour / classroom-supply / livestock contexts
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1: Choosing units & core conversion facts (0-3, Easy)
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a stick of chalk — grams or kilograms?', answer: 'Grams', checkMode: 'auto', correctAnswer: 'g', correctAnswers: ['g', 'grams', 'gram'], explanation: 'A stick of chalk is a very light object. Grams (g) are used for light objects, because kilograms would give a tiny, awkward decimal.' },
        { difficulty: 'Easy', question: 'Convert 8 kg to grams.', answer: '8 000 g', checkMode: 'auto', correctAnswer: '8000g', correctAnswers: ['8000g', '8000', '8000 g', '8 000g', '8 000 g'], explanation: 'To convert kg to g, multiply by 1 000: 8 × 1 000 = 8 000 g.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the mass of a sack of rice — grams or kilograms?', answer: 'Kilograms', checkMode: 'auto', correctAnswer: 'kg', correctAnswers: ['kg', 'kilograms', 'kilogram'], explanation: 'A sack of rice is heavy, often several kilograms. Kilograms (kg) are used for heavier objects so the numbers stay manageable.' },
        { difficulty: 'Easy', question: 'Explain why a farmer would use kilograms, not grams, to describe the mass of a goat.', answer: 'A goat has a mass of many thousands of grams, which is an inconveniently large number to say or write. Kilograms give a much smaller, easier number for large masses like a goat or other livestock.', checkMode: 'self' },

        // Block 2: Converting g <-> kg (4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'Convert 7 000 g to kilograms.', answer: '7 kg', checkMode: 'auto', correctAnswer: '7kg', correctAnswers: ['7kg', '7', '7 kg'], explanation: 'Divide by 1 000: 7 000 ÷ 1 000 = 7 kg.' },
        { difficulty: 'Medium', question: 'A sack of maize meal has a mass of 4.5 kg. Write this mass in grams.', answer: '4 500 g', checkMode: 'auto', correctAnswer: '4500g', correctAnswers: ['4500g', '4500', '4500 g', '4 500g', '4 500 g'], explanation: 'Multiply by 1 000: 4.5 × 1 000 = 4 500 g.' },
        { difficulty: 'Medium', question: 'A box of classroom chalk has a mass of 600 g. Write this mass in kilograms.', answer: '0.6 kg', checkMode: 'auto', correctAnswer: '0.6kg', correctAnswers: ['0.6kg', '0.6', '0.6 kg', '0.60', '0.60kg', '0.60 kg'], explanation: 'Divide by 1 000: 600 ÷ 1 000 = 0.6 kg.' },
        { difficulty: 'Medium', question: 'A crate of exercise books has a mass of 3 kg 150 g. Write this mass in grams only.', answer: '3 150 g', checkMode: 'auto', correctAnswer: '3150g', correctAnswers: ['3150g', '3150', '3150 g', '3 150g', '3 150 g'], explanation: '3 kg = 3 000 g, so 3 kg 150 g = 3 000 g + 150 g = 3 150 g.' },
        { difficulty: 'Medium', question: 'A student adds 1 kg and 500 g and writes the answer as "1 500" with no unit. Is simply writing "1 500" acceptable? Explain what is missing and give the correct answer.', answer: 'No, the unit is missing. Writing just "1 500" does not say whether it means 1 500 g or something else — units must always be included. Since 1 kg = 1 000 g, the correct total is 1 000 g + 500 g = 1 500 g (or 1.5 kg).', checkMode: 'self' },

        // Block 3: Reading & comparing mass on a scale (9-12, Medium)
        { difficulty: 'Medium', question: 'A kitchen scale goes from 0 to 1 000 g with 10 equal intervals. What is the value of each small interval?', answer: '100 g', checkMode: 'auto', correctAnswer: '100g', correctAnswers: ['100g', '100', '100 g'], explanation: '1 000 ÷ 10 = 100 g per interval.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="56.0" y1="119.2" x2="67.4" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">200</text><line x1="64.8" y1="63.6" x2="74.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">400</text><line x1="115.0" y1="38.0" x2="115.0" y2="50.0" stroke="#0f1f3d" stroke-width="2"/><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">600</text><line x1="165.2" y1="63.6" x2="155.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">800</text><line x1="174.0" y1="119.2" x2="162.6" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">1000 g</text></svg>' },
        { difficulty: 'Medium', question: 'Using the same scale, the needle points at the mark just before 1 000 g. What mass does it show?', answer: '900 g', checkMode: 'auto', correctAnswer: '900g', correctAnswers: ['900g', '900', '900 g'], explanation: 'Each interval is worth 100 g. The mark just before 1 000 g is 1 000 − 100 = 900 g.', diagramSvg: '<svg viewBox="0 0 230 200" xmlns="http://www.w3.org/2000/svg"><circle cx="115" cy="100" r="62" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.2" y1="143.8" x2="79.6" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="61.3" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">0</text><line x1="56.0" y1="119.2" x2="67.4" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="53.8" y1="90.3" x2="65.6" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="39.9" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">200</text><line x1="64.8" y1="63.6" x2="74.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="86.9" y1="44.8" x2="92.3" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="80.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">400</text><line x1="115.0" y1="38.0" x2="115.0" y2="50.0" stroke="#0f1f3d" stroke-width="2"/><line x1="143.1" y1="44.8" x2="137.7" y2="55.4" stroke="#0f1f3d" stroke-width="2"/><text x="149.5" y="28.3" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">600</text><line x1="165.2" y1="63.6" x2="155.5" y2="70.6" stroke="#0f1f3d" stroke-width="2"/><line x1="176.2" y1="90.3" x2="164.4" y2="92.2" stroke="#0f1f3d" stroke-width="2"/><text x="190.1" y="92.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">800</text><line x1="174.0" y1="119.2" x2="162.6" y2="115.5" stroke="#0f1f3d" stroke-width="2"/><line x1="158.8" y1="143.8" x2="150.4" y2="135.4" stroke="#0f1f3d" stroke-width="2"/><text x="168.7" y="157.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">1000 g</text><line x1="115" y1="100" x2="156.8" y2="113.6" stroke="#dc2626" stroke-width="3"/><circle cx="115" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Which is heavier: 2.05 kg or 2 500 g?', answer: '2 500 g', checkMode: 'auto', correctAnswer: '2500g', correctAnswers: ['2500g', '2500 g', '2 500g', '2 500 g'], explanation: '2.05 kg = 2 050 g. Since 2 500 g > 2 050 g, 2 500 g is heavier.' },
        { difficulty: 'Medium', question: 'Order these sack masses from lightest to heaviest: 5 kg, 4 800 g, 5.2 kg.', answer: '4 800 g, 5 kg, 5.2 kg', checkMode: 'auto', correctAnswer: '4800g, 5kg, 5.2kg', correctAnswers: ['4800g, 5kg, 5.2kg', '4 800 g, 5 kg, 5.2 kg', '4800g,5kg,5.2kg'], explanation: 'Convert to grams: 5 kg = 5 000 g, 5.2 kg = 5 200 g, 4 800 g stays the same. From lightest to heaviest: 4 800 g, 5 000 g, 5 200 g.' },

        // Block 4: Estimating realistic mass (13-15, Medium)
        { difficulty: 'Medium', question: 'Which is the more realistic estimate for the mass of a bag of rice sold at a market stall: 2 kg or 2 g?', answer: '2 kg', checkMode: 'auto', correctAnswer: '2kg', correctAnswers: ['2kg', '2 kg'], explanation: 'A small bag of rice for sale is a moderately heavy grocery item — about 2 kg is realistic. 2 g would be lighter than a paperclip times two.' },
        { difficulty: 'Medium', question: 'A farmer weighs a young goat. Which is the more realistic mass: 15 kg or 150 g?', answer: '15 kg', checkMode: 'auto', correctAnswer: '15kg', correctAnswers: ['15kg', '15 kg'], explanation: 'A young goat is a fairly large animal — about 15 kg is realistic. 150 g would be lighter than a slice of bread.' },
        { difficulty: 'Medium', question: 'Boitumelo estimates that a full box of exercise books has a mass of about 500 g. Is this a reasonable estimate? Explain your reasoning.', answer: 'No, this is not reasonable. A full box of exercise books usually has a mass of several kilograms, not a few hundred grams. 500 g would be lighter than a single loaf of bread, which is far too light for a full box of books.', checkMode: 'self' },

        // Block 5: Word problems (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'A shopkeeper has a 5 kg bag of rice and sells 1 kg 250 g of it to a customer. How much rice is left?', answer: '3 kg 750 g', checkMode: 'auto', correctAnswer: '3kg750g', correctAnswers: ['3kg750g', '3750g', '3750', '3 kg 750 g', '3kg 750g'], explanation: 'Convert: 5 kg = 5 000 g. Subtract: 5 000 g − 1 250 g = 3 750 g = 3 kg 750 g.' },
        { difficulty: 'Medium-Hard', question: 'A classroom stores 4 identical crates of exercise books, each with a mass of 6 kg 500 g. What is the total mass of all 4 crates?', answer: '26 kg', checkMode: 'auto', correctAnswer: '26kg', correctAnswers: ['26kg', '26', '26 kg', '26000g', '26 000 g'], explanation: 'Multiply: 6 kg 500 g = 6 500 g. 6 500 g × 4 = 26 000 g = 26 kg.' },
        { difficulty: 'Hard', question: 'A trader has 18 kg of flour to pack into bags of 750 g each for the market. How many full bags can she make?', answer: '24 bags', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 bags'], explanation: 'Convert: 18 kg = 18 000 g. Divide: 18 000 g ÷ 750 g = 24 bags.' },

        // Block 6: Multi-step reasoning, justification & error-spotting (19, Hard)
        { difficulty: 'Hard', question: 'Explain why you must convert two masses to the same unit before adding or subtracting them, using 2 kg and 500 g as your example.', answer: 'If masses are in different units, the digits do not represent the same size of unit, so adding or subtracting them directly gives a meaningless result — for example, "2 + 500 = 502" is wrong. You must first convert both to the same unit: 2 kg = 2 000 g, so 2 kg + 500 g = 2 000 g + 500 g = 2 500 g. Converting first ensures the calculation compares like with like.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantastic! You can estimate, convert and solve mass word problems with confidence.' },
        { minScore: 15, message: 'Great work! Review any questions you got wrong and try again.' },
        { minScore: 10, message: 'Good effort! Revisit the real-life reference points and word problem steps.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
