import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Length',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-length',
      title: 'Units of Length',
      icon: '📏',
      explanation: `
<p style="margin-bottom:14px;"><strong>Length</strong> tells us <strong>how long or tall something is</strong>, or <strong>how far apart two points are</strong>. We measure length using standard units so that everyone gets the same result. Choosing the right unit makes measurement much easier — we would not measure the distance between two cities in millimetres!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">The four units of length</div>
  <div style="display:flex;flex-direction:column;gap:12px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Millimetre<br/><span style="font-weight:400;font-size:12px;">(mm)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Very small lengths.</strong> A millimetre is about the thickness of a coin or a fingernail. There are <strong>10 mm in 1 cm</strong>. Use mm when measuring tiny things like the width of a pencil line or a small insect.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Centimetre<br/><span style="font-weight:400;font-size:12px;">(cm)</span></span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong>Small lengths.</strong> A centimetre is about the width of your little finger. Use cm when measuring a pencil, your hand span, a book or a piece of paper. There are <strong>100 cm in 1 m</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Metre<br/><span style="font-weight:400;font-size:12px;">(m)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Medium lengths.</strong> A metre is roughly the height of a kitchen counter or the width of a door. Use m when measuring a room, a fence, or the height of a building. There are <strong>1 000 m in 1 km</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kilometre<br/><span style="font-weight:400;font-size:12px;">(km)</span></span>
      <span style="color:#7c2d12;font-size:15px;padding-top:2px;"><strong>Very long distances.</strong> A kilometre is about the distance you can walk in 10–12 minutes. Use km when measuring the distance between towns, cities or along a road.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Conversion facts 🔢</span>
  <div style="display:flex;flex-wrap:wrap;gap:10px;margin-top:10px;">
    <span style="background:#1e40af;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">10 mm = 1 cm</span>
    <span style="background:#16a34a;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">100 cm = 1 m</span>
    <span style="background:#dc2626;color:#fff;border-radius:8px;padding:6px 16px;font-weight:700;font-size:15px;">1 000 m = 1 km</span>
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
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Real life examples</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">mm</td>
          <td style="padding:8px 14px;color:#475569;">Tiny things</td>
          <td style="padding:8px 14px;color:#475569;">Thickness of a coin, width of a fingernail</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;">Small things</td>
          <td style="padding:8px 14px;color:#475569;">Length of a pencil, width of your hand</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">m</td>
          <td style="padding:8px 14px;color:#475569;">Rooms and buildings</td>
          <td style="padding:8px 14px;color:#475569;">Height of a door, width of a classroom</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#ea580c;">km</td>
          <td style="padding:8px 14px;color:#475569;">Long distances</td>
          <td style="padding:8px 14px;color:#475569;">Distance between two towns, length of a road</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Which unit would you use to measure the length of your classroom?',
          steps: [
            'A classroom is a <strong>medium-sized</strong> space — you could walk across it in a few steps.',
            'It is <strong>too big</strong> for centimetres (you would get a very large number) and <strong>too small</strong> for kilometres.',
            '<strong style="color:#dc2626;">Metres (m)</strong> are the right choice for measuring rooms and buildings.',
          ],
          answer: 'Metres (m). A classroom is best measured in metres.',
        },
        {
          question:
            'Which unit would you use to measure the distance from Cape Town to Johannesburg?',
          steps: [
            'Cape Town to Johannesburg is a <strong>very long distance</strong> — it takes hours to drive.',
            'Using metres would give an enormous number (about 1 400 000 m), so we use a larger unit.',
            '<strong style="color:#ea580c;">Kilometres (km)</strong> are used for long distances between towns and cities.',
          ],
          answer: 'Kilometres (km). The distance between two cities is measured in kilometres.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Four objects shown with their measurements — a coin labelled in mm, a pencil labelled in cm, a door labelled in m and a road sign labelled in km',
      videoPlaceholder:
        'Short video explaining the four units of length with real life examples of when to use each one',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — ESTIMATING AND MEASURING LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-measuring-length',
      title: 'Estimating and Measuring Length',
      icon: '📐',
      explanation: `
<p style="margin-bottom:14px;"><strong>Estimating</strong> means making a <strong>careful guess</strong> before you measure. A good estimate is not just a random guess — it uses something you already know as a <strong>reference point</strong>. After you estimate, you measure to find the <strong>actual measurement</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Useful reference lengths to remember</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 1 cm</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Your <strong>pinky finger</strong> is about <strong>1 cm</strong> wide — use it to estimate small lengths.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 30 cm</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A standard <strong>ruler</strong> is <strong>30 cm</strong> long — use it to picture lengths up to about 30 cm.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 2 m</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>classroom door</strong> is about <strong>2 m</strong> tall — use it to estimate medium lengths in metres.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">≈ 20 m</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">A <strong>cricket pitch</strong> is about <strong>20 m</strong> long — use it to estimate longer distances.</span>
    </div>

  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Estimate vs actual measurement</div>
  <div style="display:flex;flex-wrap:wrap;gap:10px;">
    <div style="background:#fff;border:1.5px solid #fdba74;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Estimate</div>
      <div style="color:#7c2d12;font-size:14px;">Your careful guess <em>before</em> measuring. Written as <strong style="color:#ea580c;">≈ 18 cm</strong> (the ≈ symbol means "approximately").</div>
    </div>
    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:180px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Actual measurement</div>
      <div style="color:#1e3a8a;font-size:14px;">The exact length found by measuring. Written as <strong style="color:#1e40af;">= 17 cm</strong>.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to measure with a ruler</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Place the <strong>zero mark</strong> of the ruler at one end of the object.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Read the measurement at the <strong>other end</strong> of the object.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;"><strong>Record</strong> the measurement with the correct unit (e.g. 17 cm, not just 17).</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Estimate and then measure a pencil.',
          steps: [
            '<strong style="color:#ea580c;">Estimate first:</strong> A pencil looks about as long as a ruler. A ruler is 30 cm, but a pencil is a bit shorter — <strong style="color:#ea580c;">estimate ≈ 18 cm</strong>.',
            '<strong>Measure with a ruler:</strong> Place the zero mark of the ruler at one end of the pencil.',
            'Read the measurement at the other end of the pencil.',
            '<strong style="color:#1e40af;">Actual measurement = 17 cm.</strong>',
            'Compare: the estimate was 18 cm and the actual length is 17 cm — <strong>the estimate was close</strong>, only 1 cm off.',
          ],
          answer: 'The pencil measures 17 cm. The estimate of 18 cm was close.',
        },
        {
          question: 'Estimate the height of a classroom door.',
          steps: [
            '<strong style="color:#ea580c;">Think of a reference:</strong> An adult is about 1.7 m tall.',
            'A door is taller than most adults — it needs to be tall enough for people to walk through easily.',
            '<strong style="color:#ea580c;">Estimate ≈ 2 m</strong> — a little taller than a full-grown adult.',
            'A standard classroom door is <strong style="color:#1e40af;">about 2 m tall</strong>.',
          ],
          answer: 'A standard classroom door is about 2 m tall. The estimate of 2 m was correct.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A ruler showing centimetre markings with a pencil placed along it from zero to 17 cm clearly marked',
      videoPlaceholder:
        'Short video showing how to correctly place a ruler to measure an object and read the measurement accurately',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONVERTING BETWEEN UNITS OF LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-units-of-length',
      title: 'Converting Between Units of Length',
      icon: '🔄',
      explanation: `
<p style="margin-bottom:14px;"><strong>Converting</strong> means changing a measurement from <strong>one unit to another</strong>. The amount stays the same — only the unit and the number change. For example, 100 cm and 1 m are exactly the same length, just written differently.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Memory trick 💡</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>smaller unit</strong> (e.g. m → cm) → <strong style="color:#dc2626;">multiply</strong> → the number gets <strong>bigger</strong>.</div>
    <div style="color:#7f1d1d;font-size:15px;">Going to a <strong>bigger unit</strong> (e.g. cm → m) → <strong style="color:#dc2626;">divide</strong> → the number gets <strong>smaller</strong>.</div>
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
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">mm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 10</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">30 mm</span> = <span style="color:#16a34a;font-weight:700;">3 cm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">cm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">mm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 10</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">5 cm</span> = <span style="color:#16a34a;font-weight:700;">50 mm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">cm</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">m</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 100</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">200 cm</span> = <span style="color:#16a34a;font-weight:700;">2 m</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">m</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">cm</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 100</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">4 m</span> = <span style="color:#16a34a;font-weight:700;">400 cm</span></td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">m</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">km</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">÷ 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">3 000 m</span> = <span style="color:#16a34a;font-weight:700;">3 km</span></td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">km</td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">m</td>
          <td style="padding:8px 14px;color:#475569;"><strong style="color:#dc2626;">× 1 000</strong></td>
          <td style="padding:8px 14px;color:#475569;"><span style="color:#1e40af;font-weight:700;">2 km</span> = <span style="color:#16a34a;font-weight:700;">2 000 m</span></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Convert 45 mm to cm.',
          steps: [
            'To go from <strong style="color:#1e40af;">mm</strong> to <strong style="color:#16a34a;">cm</strong> — <strong style="color:#dc2626;">divide by 10</strong> (going to a bigger unit, so the number gets smaller).',
            '<strong style="color:#1e40af;">45</strong> ÷ <strong style="color:#dc2626;">10</strong> = <strong style="color:#16a34a;">4.5</strong>',
          ],
          answer: '45 mm = 4.5 cm',
        },
        {
          question: 'Convert 3 m to cm.',
          steps: [
            'To go from <strong style="color:#1e40af;">m</strong> to <strong style="color:#16a34a;">cm</strong> — <strong style="color:#dc2626;">multiply by 100</strong> (going to a smaller unit, so the number gets bigger).',
            '<strong style="color:#1e40af;">3</strong> × <strong style="color:#dc2626;">100</strong> = <strong style="color:#16a34a;">300</strong>',
          ],
          answer: '3 m = 300 cm',
        },
        {
          question: 'Convert 2 500 m to km.',
          steps: [
            'To go from <strong style="color:#1e40af;">m</strong> to <strong style="color:#16a34a;">km</strong> — <strong style="color:#dc2626;">divide by 1 000</strong> (going to a bigger unit, so the number gets smaller).',
            '<strong style="color:#1e40af;">2 500</strong> ÷ <strong style="color:#dc2626;">1 000</strong> = <strong style="color:#16a34a;">2.5</strong>',
          ],
          answer: '2 500 m = 2.5 km',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'A conversion ladder showing mm, cm, m, km from bottom to top with multiply arrows going down and divide arrows going up and the conversion factors labelled',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH LENGTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-length',
      title: 'Calculating with Length',
      icon: '➕',
      explanation: `
<p style="margin-bottom:14px;">We can <strong>add</strong> and <strong>subtract</strong> lengths to solve problems. Before you calculate, always make sure both lengths are in the <strong>same unit</strong>. If they are not, convert one of them first.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">How to add and subtract mixed lengths (m and cm)</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Deal with the <strong>centimetres first</strong> — add or subtract the cm values.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">Deal with the <strong>metres next</strong> — add or subtract the m values.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">If the cm total is <strong>100 or more</strong>, convert — every 100 cm becomes 1 m.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:3px;">If you need to subtract more cm than you have, <strong>borrow 1 m</strong> (= 100 cm) from the metres column.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Add 2 m 45 cm and 1 m 30 cm.',
          steps: [
            'Add the centimetres: <strong style="color:#1e40af;">45 cm</strong> + <strong style="color:#16a34a;">30 cm</strong> = <strong style="color:#dc2626;">75 cm</strong>',
            'Add the metres: <strong style="color:#1e40af;">2 m</strong> + <strong style="color:#16a34a;">1 m</strong> = <strong style="color:#dc2626;">3 m</strong>',
            '75 cm is less than 100, so no conversion needed.',
          ],
          answer: '2 m 45 cm + 1 m 30 cm = 3 m 75 cm',
        },
        {
          question: 'Subtract 1 m 20 cm from 3 m 50 cm.',
          steps: [
            'Subtract the centimetres: <strong style="color:#1e40af;">50 cm</strong> − <strong style="color:#16a34a;">20 cm</strong> = <strong style="color:#dc2626;">30 cm</strong>',
            'Subtract the metres: <strong style="color:#1e40af;">3 m</strong> − <strong style="color:#16a34a;">1 m</strong> = <strong style="color:#dc2626;">2 m</strong>',
          ],
          answer: '3 m 50 cm − 1 m 20 cm = 2 m 30 cm',
        },
        {
          question: 'A piece of rope is 5 m long. Thabo cuts off 1 m 75 cm. How much rope is left?',
          steps: [
            'Write 5 m as <strong style="color:#1e40af;">5 m 00 cm</strong> so both lengths are in the same format.',
            'Try to subtract cm: 00 cm − 75 cm — we cannot do this, so we need to borrow.',
            'Borrow 1 m from the metres column: <strong style="color:#1e40af;">4 m 100 cm</strong> − <strong style="color:#16a34a;">1 m 75 cm</strong>',
            'Subtract cm: 100 − 75 = <strong style="color:#dc2626;">25 cm</strong>',
            'Subtract m: 4 − 1 = <strong style="color:#dc2626;">3 m</strong>',
          ],
          answer: '3 m 25 cm of rope is left.',
        },
      ],
      practiceQuestions: [],
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — LENGTH WORD PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'length-word-problems',
      title: 'Length Word Problems',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Length word problems ask you to use measuring skills to solve real-life situations. Before you calculate, <strong>read the question carefully</strong> and look for <strong>key words</strong> that tell you which operation to use.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#c2410c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Key words to look for</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Addition ➕</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">total length</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">altogether</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">combined</strong></span>
      </div>
    </div>

    <div style="background:#fff;border:1.5px solid #bfdbfe;border-radius:8px;padding:10px 16px;flex:1;min-width:200px;">
      <div style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:6px;">Subtraction ➖</div>
      <div style="display:flex;flex-direction:column;gap:4px;">
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">difference</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">how much longer / shorter</strong></span>
        <span style="font-size:14px;color:#1e3a8a;"><strong style="color:#ea580c;">remaining</strong></span>
      </div>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Steps for solving a word problem</div>
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
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Make sure the units match</strong> — convert if needed.</span>
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
            'A garden path is 12 m 50 cm long. Another path is 8 m 75 cm long. What is the total length of both paths?',
          steps: [
            'Key word: <strong style="color:#ea580c;">total</strong> — this means <strong>addition</strong>.',
            'Add: <strong style="color:#1e40af;">12 m 50 cm</strong> + <strong style="color:#16a34a;">8 m 75 cm</strong>',
            'Add the cm: 50 + 75 = 125 cm. Since 125 ≥ 100, convert: 125 cm = 1 m 25 cm.',
            'Add the m: 12 + 8 + 1 (carried over) = <strong style="color:#dc2626;">21 m</strong>',
            'Remaining cm: <strong style="color:#dc2626;">25 cm</strong>',
          ],
          answer: 'The total length of both paths is 21 m 25 cm.',
        },
        {
          question:
            'Lerato runs 3 km 500 m. Sipho runs 2 km 750 m. How much further does Lerato run?',
          steps: [
            'Key word: <strong style="color:#ea580c;">how much further</strong> — this means <strong>subtraction</strong>.',
            'Subtract: <strong style="color:#1e40af;">3 km 500 m</strong> − <strong style="color:#16a34a;">2 km 750 m</strong>',
            'Try to subtract m: 500 m − 750 m — we cannot do this, so we need to borrow.',
            'Borrow 1 km: <strong style="color:#1e40af;">2 km 1 500 m</strong> − <strong style="color:#16a34a;">2 km 750 m</strong>',
            'Subtract m: 1 500 − 750 = <strong style="color:#dc2626;">750 m</strong>',
            'Subtract km: 2 − 2 = <strong style="color:#dc2626;">0 km</strong>',
          ],
          answer: 'Lerato runs 750 m further than Sipho.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Short video showing how to solve length word problems by identifying key words and choosing the correct operation',
    },
  ],
  topicPractice: [

    // ── SECTION 1 — Units of Length ───────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Which unit would you use to measure each of the following?',
      checkMode: 'auto',
      answer: 'a) Millimetres (mm)   b) Metres (m)   c) Kilometres (km)',
      parts: [
        {
          label: 'a) The length of your fingernail',
          correctAnswer: 'mm',
          correctAnswers: ['mm', 'millimetres', 'millimetre', 'millimeters', 'millimeter'],
          explanation: 'A fingernail is a very tiny length — millimetres (mm) are used for very small measurements like the thickness of a coin or a fingernail.',
        },
        {
          label: 'b) The height of a door',
          correctAnswer: 'm',
          correctAnswers: ['m', 'metres', 'metre', 'meters', 'meter'],
          explanation: 'A door is a medium-sized length (about 2 m tall) — metres (m) are used for rooms, doors and buildings.',
        },
        {
          label: 'c) The distance from Durban to Cape Town',
          correctAnswer: 'km',
          correctAnswers: ['km', 'kilometres', 'kilometre', 'kilometers', 'kilometer'],
          explanation: 'Durban to Cape Town is a very long distance — kilometres (km) are used for distances between towns and cities.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Write the correct conversion facts.',
      checkMode: 'auto',
      answer: 'a) 10   b) 100   c) 1 000',
      parts: [
        {
          label: 'a) How many mm are in 1 cm?',
          correctAnswer: '10',
          correctAnswers: ['10', 'ten'],
          explanation: 'There are 10 mm in 1 cm. To convert cm to mm you multiply by 10, and to convert mm to cm you divide by 10.',
        },
        {
          label: 'b) How many cm are in 1 m?',
          correctAnswer: '100',
          correctAnswers: ['100', 'one hundred', 'a hundred'],
          explanation: 'There are 100 cm in 1 m. To convert m to cm you multiply by 100, and to convert cm to m you divide by 100.',
        },
        {
          label: 'c) How many m are in 1 km?',
          correctAnswer: '1000',
          correctAnswers: ['1000', '1 000', 'one thousand', 'a thousand'],
          explanation: 'There are 1 000 m in 1 km. To convert km to m you multiply by 1 000, and to convert m to km you divide by 1 000.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Thabo says a classroom is about 8 mm wide. Lerato says it is about 8 m wide. Who is correct and why?',
      checkMode: 'self',
      answer: 'Lerato is correct. A classroom is a large space and is measured in metres. 8 mm is smaller than 1 cm, which is far too small for a classroom. 8 m is a realistic width for a classroom.',
    },

    // ── SECTION 2 — Estimating and Measuring Length ───────────────────────────

    {
      difficulty: 'Easy',
      question: 'A pencil is measured with a ruler. The zero mark is placed at one end and the measurement at the other end reads 16. What is the length of the pencil in cm?',
      checkMode: 'auto',
      answer: '16 cm',
      correctAnswer: '16cm',
      correctAnswers: ['16cm', '16'],
      explanation: 'When the ruler reads 16 with the zero at one end, the pencil is 16 cm long. Always include the unit — the answer is 16 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'For each object, write whether you would measure it with a ruler or a tape measure. Give a reasonable estimate of its length.',
      checkMode: 'self',
      answer: 'a) Ruler — a book is about 20 cm wide (any estimate between 15 cm and 30 cm is reasonable)   b) Tape measure — a swimming pool is about 25 m long (any estimate between 15 m and 50 m is reasonable)',
    },

    {
      difficulty: 'Hard',
      question: 'A learner measures a table and gets 120. Another learner measures the same table and gets 1 m 20 cm.',
      checkMode: 'auto',
      answer: 'a) Yes   b) Centimetres (cm)   c) 1 200 mm',
      parts: [
        {
          label: 'a) Are these two measurements the same length?',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes', 'theyarethesame', 'same'],
          explanation: '120 cm = 1 m 20 cm. They are exactly the same length, just written in different ways.',
        },
        {
          label: 'b) What unit did the first learner use?',
          correctAnswer: 'cm',
          correctAnswers: ['cm', 'centimetres', 'centimetre', 'centimeters', 'centimeter'],
          explanation: 'The first learner wrote 120 without a unit label, but since 120 cm = 1 m 20 cm, the unit must be centimetres (cm).',
        },
        {
          label: 'c) What would the measurement be in mm?',
          correctAnswer: '1200mm',
          correctAnswers: ['1200mm', '1200', '1 200mm', '1200 mm', '1200millimetres', '1200millimeters'],
          explanation: 'To convert cm to mm, multiply by 10. 120 cm × 10 = 1 200 mm.',
        },
      ],
    },

    // ── SECTION 3 — Converting Between Units of Length ────────────────────────

    {
      difficulty: 'Easy',
      question: 'Convert the following.',
      checkMode: 'auto',
      answer: 'a) 3 cm   b) 40 mm',
      parts: [
        {
          label: 'a) 30 mm = ___ cm',
          correctAnswer: '3cm',
          correctAnswers: ['3cm', '3', '3 cm'],
          explanation: 'To convert mm to cm, divide by 10. 30 ÷ 10 = 3 cm.',
        },
        {
          label: 'b) 4 cm = ___ mm',
          correctAnswer: '40mm',
          correctAnswers: ['40mm', '40', '40 mm'],
          explanation: 'To convert cm to mm, multiply by 10. 4 × 10 = 40 mm.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Convert the following.',
      checkMode: 'auto',
      answer: 'a) 2.5 m   b) 300 cm   c) 4.5 km   d) 2 000 m',
      parts: [
        {
          label: 'a) 250 cm = ___ m',
          correctAnswer: '2.5m',
          correctAnswers: ['2.5m', '2.5', '2.5 m'],
          explanation: 'To convert cm to m, divide by 100. 250 ÷ 100 = 2.5 m.',
        },
        {
          label: 'b) 3 m = ___ cm',
          correctAnswer: '300cm',
          correctAnswers: ['300cm', '300', '300 cm'],
          explanation: 'To convert m to cm, multiply by 100. 3 × 100 = 300 cm.',
        },
        {
          label: 'c) 4 500 m = ___ km',
          correctAnswer: '4.5km',
          correctAnswers: ['4.5km', '4.5', '4.5 km'],
          explanation: 'To convert m to km, divide by 1 000. 4 500 ÷ 1 000 = 4.5 km.',
        },
        {
          label: 'd) 2 km = ___ m',
          correctAnswer: '2000m',
          correctAnswers: ['2000m', '2000', '2 000m', '2000 m', '2 000 m'],
          explanation: 'To convert km to m, multiply by 1 000. 2 × 1 000 = 2 000 m.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Sipho says 3 500 cm is more than 3 km. Is he correct? Show your working by converting both measurements to the same unit.',
      checkMode: 'self',
      answer: 'No, Sipho is incorrect. Convert both to metres: 3 500 cm ÷ 100 = 35 m. 3 km × 1 000 = 3 000 m. Since 35 m is much less than 3 000 m, 3 500 cm is far smaller than 3 km.',
    },

    // ── SECTION 4 — Calculating with Length ──────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Add the following lengths: 1 m 30 cm + 2 m 45 cm',
      checkMode: 'auto',
      answer: '3 m 75 cm',
      correctAnswer: '3m75cm',
      correctAnswers: ['3m75cm', '3 m75cm', '375cm', '375'],
      explanation: 'Add the cm: 30 + 45 = 75 cm. Add the m: 1 + 2 = 3 m. Answer: 3 m 75 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'Calculate the following.',
      checkMode: 'auto',
      answer: 'a) 7 m 15 cm   b) 3 m 15 cm   c) 1 m 65 cm',
      parts: [
        {
          label: 'a) 4 m 60 cm + 2 m 55 cm',
          correctAnswer: '7m15cm',
          correctAnswers: ['7m15cm', '715cm', '7 m 15 cm', '7m 15cm'],
          explanation: 'Add cm: 60 + 55 = 115 cm = 1 m 15 cm. Add m: 4 + 2 + 1 (carried) = 7 m. Answer: 7 m 15 cm.',
        },
        {
          label: 'b) 5 m 30 cm − 2 m 15 cm',
          correctAnswer: '3m15cm',
          correctAnswers: ['3m15cm', '315cm', '3 m 15 cm', '3m 15cm'],
          explanation: 'Subtract cm: 30 − 15 = 15 cm. Subtract m: 5 − 2 = 3 m. Answer: 3 m 15 cm.',
        },
        {
          label: 'c) 3 m 10 cm − 1 m 45 cm',
          correctAnswer: '1m65cm',
          correctAnswers: ['1m65cm', '165cm', '1 m 65 cm', '1m 65cm'],
          explanation: 'We cannot subtract 45 from 10, so borrow 1 m: 2 m 110 cm − 1 m 45 cm. Subtract cm: 110 − 45 = 65 cm. Subtract m: 2 − 1 = 1 m. Answer: 1 m 65 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A builder has a plank of wood 6 m long. He cuts off two pieces — one that is 1 m 75 cm and another that is 2 m 40 cm.',
      checkMode: 'auto',
      answer: 'a) 4 m 15 cm   b) 1 m 85 cm',
      parts: [
        {
          label: 'a) What is the total length of the two pieces cut off?',
          correctAnswer: '4m15cm',
          correctAnswers: ['4m15cm', '415cm', '4 m 15 cm', '4m 15cm'],
          explanation: 'Add the two pieces: 1 m 75 cm + 2 m 40 cm. Add cm: 75 + 40 = 115 cm = 1 m 15 cm. Add m: 1 + 2 + 1 (carried) = 4 m. Total cut off: 4 m 15 cm.',
        },
        {
          label: 'b) How much wood is left?',
          correctAnswer: '1m85cm',
          correctAnswers: ['1m85cm', '185cm', '1 m 85 cm', '1m 85cm'],
          explanation: '6 m − 4 m 15 cm. Write 6 m as 5 m 100 cm (borrow 1 m). Subtract cm: 100 − 15 = 85 cm. Subtract m: 5 − 4 = 1 m. Wood left: 1 m 85 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'A builder has a plank of wood 6 m long. He cuts off 1 m 75 cm and 2 m 40 cm, leaving 1 m 85 cm. He needs one more piece of 1 m 50 cm.',
      checkMode: 'self',
      answer: 'Yes, he has enough wood. He has 1 m 85 cm left and only needs 1 m 50 cm. Since 1 m 85 cm > 1 m 50 cm, there is enough wood remaining.',
    },

    // ── SECTION 5 — Length Word Problems ─────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'A ribbon is 3 m 50 cm long. Another ribbon is 2 m 20 cm long. What is the total length of both ribbons?',
      checkMode: 'auto',
      answer: '5 m 70 cm',
      correctAnswer: '5m70cm',
      correctAnswers: ['5m70cm', '5 m70cm', '570cm', '570'],
      explanation: 'Add the cm: 50 + 20 = 70 cm. Add the m: 3 + 2 = 5 m. Total length: 5 m 70 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'A school track is 400 m long. Thabo runs around it 3 times.',
      checkMode: 'auto',
      answer: 'a) 1 200 m   b) 1.2 km   c) 800 m',
      parts: [
        {
          label: 'a) How far does Thabo run in total?',
          correctAnswer: '1200m',
          correctAnswers: ['1200m', '1200', '1 200m', '1200 m', '1 200 m'],
          explanation: '400 m × 3 = 1 200 m. Thabo runs 1 200 m in total.',
        },
        {
          label: 'b) How many km is that?',
          correctAnswer: '1.2km',
          correctAnswers: ['1.2km', '1.2', '1.2 km'],
          explanation: 'To convert m to km, divide by 1 000. 1 200 ÷ 1 000 = 1.2 km.',
        },
        {
          label: 'c) He wants to run 2 km in total. How many more metres does he need to run?',
          correctAnswer: '800m',
          correctAnswers: ['800m', '800', '800 m'],
          explanation: '2 km = 2 000 m. 2 000 − 1 200 = 800 m. Thabo needs to run 800 m more.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Three learners measure the height of a wall. Sipho measures 2 m 45 cm. Lerato measures 245 cm. Thabo measures 2 450 mm.',
      checkMode: 'auto',
      answer: 'a) All equal 245 cm   b) Yes   c) 55 cm',
      parts: [
        {
          label: 'a) What do all three measurements equal when converted to cm?',
          correctAnswer: '245cm',
          correctAnswers: ['245cm', '245', '245 cm'],
          explanation: 'Sipho: 2 m 45 cm = 200 + 45 = 245 cm. Lerato: already in cm = 245 cm. Thabo: 2 450 mm ÷ 10 = 245 cm. All three equal 245 cm.',
        },
        {
          label: 'b) Are all three measurements the same?',
          correctAnswer: 'yes',
          correctAnswers: ['yes', 'Yes', 'same', 'theyarethesame'],
          explanation: 'Yes — 2 m 45 cm = 245 cm = 2 450 mm. They are exactly the same length written in different units.',
        },
        {
          label: 'c) The wall needs to be 3 m tall. How much taller does it need to be? Give your answer in cm.',
          correctAnswer: '55cm',
          correctAnswers: ['55cm', '55', '55 cm'],
          explanation: '3 m = 300 cm. 300 − 245 = 55 cm. The wall needs to be 55 cm taller.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'The wall is 245 cm tall and needs to reach 3 m (300 cm), so 55 cm more is needed. Bricks are each 8 cm tall. How many more bricks are needed to reach 3 m? Show your working.',
      checkMode: 'self',
      answer: '7 bricks. Divide 55 cm by 8 cm: 55 ÷ 8 = 6.875. Since you cannot use part of a brick, round up to the next whole number: 7 bricks are needed.',
    },

  ],
  scoreMessages: [
    { minScore: 34, message: 'Perfect score! Outstanding work — you have mastered all aspects of length for Grade 4!' },
    { minScore: 26, message: 'Excellent work! You have a strong understanding of length. Review any questions you found tricky and you will be fully ready.' },
    { minScore: 17, message: 'Good effort! You understand the basics of length. Go back over the sections on converting units and calculating with length to strengthen your skills.' },
    { minScore: 0, message: 'Keep going! Length can be tricky at first. Re-read the study material carefully, then try the questions again — you can do it!' },
  ],
}
