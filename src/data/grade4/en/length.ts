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
      openQuestions: [],
      diagramPlaceholder:
        'Four objects shown with their measurements — a coin labelled in mm, a pencil labelled in cm, a door labelled in m and a road sign labelled in km',
      diagramSvg:
        '<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="60" r="20" fill="none" stroke="#1e40af" stroke-width="2.5"/><line x1="20" y1="60" x2="60" y2="60" stroke="#1e40af" stroke-width="1.5" stroke-dasharray="3,3"/><text x="40" y="105" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">Coin</text><text x="40" y="122" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">mm</text><rect x="90" y="52" width="60" height="14" fill="none" stroke="#16a34a" stroke-width="2.5"/><polygon points="150,52 150,66 165,59" fill="none" stroke="#16a34a" stroke-width="2.5"/><text x="125" y="105" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">Pencil</text><text x="125" y="122" font-size="12" font-weight="700" fill="#16a34a" text-anchor="middle">cm</text><rect x="200" y="20" width="40" height="80" fill="none" stroke="#dc2626" stroke-width="2.5"/><circle cx="232" cy="62" r="2.5" fill="#dc2626"/><text x="220" y="115" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">Door</text><text x="220" y="132" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">m</text><line x1="270" y1="45" x2="270" y2="100" stroke="#ea580c" stroke-width="2.5"/><rect x="252" y="25" width="36" height="24" fill="none" stroke="#ea580c" stroke-width="2.5"/><text x="270" y="41" font-size="9" font-weight="700" fill="#ea580c" text-anchor="middle">10km</text><text x="270" y="118" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">Sign</text><text x="270" y="135" font-size="12" font-weight="700" fill="#ea580c" text-anchor="middle">km</text></svg>',
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
      openQuestions: [],
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
      openQuestions: [],
      diagramPlaceholder:
        'A conversion ladder showing mm, cm, m, km from bottom to top with multiply arrows going down and divide arrows going up and the conversion factors labelled',
      diagramSvg:
        '<svg viewBox="0 0 220 320" xmlns="http://www.w3.org/2000/svg"><rect x="70" y="14" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="35" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">km</text><rect x="70" y="94" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="115" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">m</text><rect x="70" y="174" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="195" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">cm</text><rect x="70" y="254" width="80" height="32" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="275" font-size="15" font-weight="700" fill="#0f1f3d" text-anchor="middle">mm</text><line x1="165" y1="46" x2="165" y2="90" stroke="#dc2626" stroke-width="2"/><polygon points="165,94 160,86 170,86" fill="#dc2626"/><text x="185" y="74" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">×1000</text><line x1="165" y1="126" x2="165" y2="170" stroke="#dc2626" stroke-width="2"/><polygon points="165,174 160,166 170,166" fill="#dc2626"/><text x="185" y="154" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">×100</text><line x1="165" y1="206" x2="165" y2="250" stroke="#dc2626" stroke-width="2"/><polygon points="165,254 160,246 170,246" fill="#dc2626"/><text x="185" y="234" font-size="12" font-weight="700" fill="#dc2626" text-anchor="middle">×10</text><line x1="55" y1="90" x2="55" y2="46" stroke="#2563eb" stroke-width="2"/><polygon points="55,42 50,50 60,50" fill="#2563eb"/><text x="30" y="74" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">÷1000</text><line x1="55" y1="170" x2="55" y2="126" stroke="#2563eb" stroke-width="2"/><polygon points="55,122 50,130 60,130" fill="#2563eb"/><text x="30" y="154" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">÷100</text><line x1="55" y1="250" x2="55" y2="206" stroke="#2563eb" stroke-width="2"/><polygon points="55,202 50,210 60,210" fill="#2563eb"/><text x="30" y="234" font-size="12" font-weight="700" fill="#2563eb" text-anchor="middle">÷10</text></svg>',
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
      openQuestions: [],
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
      openQuestions: [],
      videoPlaceholder:
        'Short video showing how to solve length word problems by identifying key words and choosing the correct operation',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block A — Unit sense & choosing units (0-3, Easy)
        { difficulty: 'Easy', question: 'Which unit would you use to measure the length of a pencil: mm, cm, m or km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 1, explanation: 'A pencil is a small object, best measured in centimetres (cm) — mm would give an oddly small, awkward number, and m or km would be far too large.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the distance between two towns: mm, cm, m or km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 3, explanation: 'The distance between towns is very long, best measured in kilometres (km) — mm, cm or m would all give an enormous, hard-to-read number.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the thickness of a coin: mm, cm, m or km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 0, explanation: 'A coin is very thin, best measured in millimetres (mm) — cm, m or km would round it down to almost nothing.' },
        { difficulty: 'Easy', question: 'A coin\'s thickness is measured in millimetres, but the height of a house is measured in metres. Which statement correctly explains why we do not use the same unit for both?', checkMode: 'auto', options: ['Millimetres can only be used to measure round objects, not tall ones like houses.', 'Using mm for a house would give an enormous number, and using m for a coin would give a tiny decimal — the right unit keeps the number sensible for the size of the object.', 'It does not matter which unit is used — mm and m always give exactly the same number.', 'Metres can only measure distances between places, not the size of a single object.'], correctIndex: 1, explanation: 'The right unit keeps the number a sensible size: mm for a house would be enormous (hundreds of thousands), and m for a coin would be a tiny decimal (like 0.001 m) — so we pick the unit that fits the size of the object.' },

        // Block B — Single-step conversions (4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'Convert 45 mm to cm.', checkMode: 'auto', options: ['0.45 cm', '45 cm', '4.5 cm', '450 cm'], correctIndex: 2, explanation: 'Divide by 10 to convert mm to cm: 45 ÷ 10 = 4.5 cm. (0.45 cm comes from dividing by 100; 45 cm forgets to convert at all; 450 cm multiplies instead of dividing.)' },
        { difficulty: 'Easy', question: 'A ladybird\'s body is 9 cm long. (Just kidding — that would be a giant ladybird! But let\'s practise anyway.) How many millimetres is 9 cm?', checkMode: 'auto', options: ['0.9 mm', '9 mm', '90 mm', '900 mm'], correctIndex: 2, explanation: 'Multiply by 10 to convert cm to mm: 9 × 10 = 90 mm. (0.9 mm divides instead of multiplying; 9 mm forgets to convert; 900 mm multiplies by 100 instead of 10.)' },
        { difficulty: 'Easy-Medium', question: 'A garden hosepipe is 600 cm long. What is its length in metres?', checkMode: 'auto', options: ['0.6 m', '6 m', '60 m', '600 m'], correctIndex: 1, explanation: 'Divide by 100 to convert cm to m: 600 ÷ 100 = 6 m. (0.6 m divides by 1 000 instead of 100; 60 m and 600 m fail to divide correctly.)' },
        { difficulty: 'Medium', question: 'A road sign says the next town is 3 km away. How many metres will the car need to travel to reach it?', checkMode: 'auto', options: ['30 m', '300 m', '3 000 m', '30 000 m'], correctIndex: 2, explanation: 'Multiply by 1 000 to convert km to m: 3 × 1 000 = 3 000 m. (30 m and 300 m multiply by the wrong power of 10; 30 000 m multiplies by 10 000.)' },
        { difficulty: 'Medium', question: 'A student says: "To convert 8 m to cm, I divide by 100, so 8 m = 0.08 cm." Which statement correctly evaluates this?', checkMode: 'auto', options: ['The student is correct — dividing by 100 is always used when changing units.', 'The student is incorrect — converting m to cm means going to a smaller unit, so you must multiply: 8 × 100 = 800 cm.', 'The student is correct, but the answer should be written as 0.8 cm.', 'The student is incorrect — the correct conversion is 8 ÷ 10 = 0.8 cm.'], correctIndex: 1, explanation: 'Going from m (a bigger unit) to cm (a smaller unit) means multiplying, not dividing: 8 × 100 = 800 cm. The student divided when they should have multiplied.' },

        // Block C — Multi-step / mixed-unit conversions (9-12, Medium)
        { difficulty: 'Medium', question: 'A fishing line measures 480 cm. Write this length using metres and centimetres together.', checkMode: 'auto', options: ['8 m 40 cm', '4 m 80 cm', '4 m 8 cm', '48 m 0 cm'], correctIndex: 1, explanation: '480 cm = 400 cm + 80 cm = 4 m 80 cm. (8 m 40 cm swaps the digits; 4 m 8 cm drops a zero from the cm part; 48 m 0 cm misplaces the decimal point.)' },
        { difficulty: 'Medium', question: 'A cyclist\'s tracking app shows she has ridden 1 350 m so far today. Her app displays this distance using km and m together instead. What would it show?', checkMode: 'auto', options: ['13 km 50 m', '1 km 35 m', '1 km 350 m', '3 km 50 m'], correctIndex: 2, explanation: '1 350 m = 1 000 m + 350 m = 1 km 350 m. (1 km 35 m drops a zero; 13 km 50 m and 3 km 50 m misplace the digits.)' },
        { difficulty: 'Medium', question: 'A map shows a trail length of 2 km 600 m. For a race entry form, the distance must be written as a single number of metres. What should be entered?', checkMode: 'auto', options: ['260 m', '2 060 m', '26 000 m', '2 600 m'], correctIndex: 3, explanation: '2 km 600 m = 2 000 m + 600 m = 2 600 m. (260 m drops a zero; 2 060 m loses a zero from the 600; 26 000 m adds an extra zero.)' },
        { difficulty: 'Medium', question: 'A carpenter measured a plank as 6 m 25 cm, but her tape measure only shows centimetres. What single number of centimetres should she record?', checkMode: 'auto', options: ['6 025 cm', '625 cm', '652 cm', '62.5 cm'], correctIndex: 1, explanation: '6 m 25 cm = 600 cm + 25 cm = 625 cm. (6 025 cm keeps the metres digit separate instead of converting it; 652 cm swaps the digits; 62.5 cm divides by 10 by mistake.)' },

        // Block D — Comparing & ordering lengths (13-15, Medium)
        { difficulty: 'Medium', question: 'Which is longer: 50 mm or 4 cm?', checkMode: 'auto', options: ['50 mm, because 50 is a bigger number than 4', '4 cm, because centimetres are always bigger than millimetres', '50 mm, because 50 mm = 5 cm, which is greater than 4 cm', 'They are exactly the same length'], correctIndex: 2, explanation: 'Convert to the same unit: 50 mm = 5 cm, and 5 cm is greater than 4 cm, so 50 mm is longer. Comparing raw numbers without converting units first (like 50 vs 4) is a common mistake.' },
        { difficulty: 'Medium', question: 'A student claims that 1 200 m is longer than 1 km 500 m. Is the student correct?', checkMode: 'auto', options: ['Yes — 1 200 is a bigger number than 1 500.', 'No — converting both to metres, 1 200 m stays 1 200 m and 1 km 500 m = 1 500 m, so 1 km 500 m is actually longer.', 'Yes — kilometres are always shorter than metres.', 'No — 1 200 m equals 1 km 200 m, which is longer than 1 500 m.'], correctIndex: 1, explanation: 'Converting both to metres: 1 200 m stays 1 200 m, and 1 km 500 m = 1 500 m. Since 1 500 m > 1 200 m, the student is incorrect — 1 km 500 m is the longer length.' },
        { difficulty: 'Medium', question: 'Order these three lengths from smallest to largest: 950 mm, 1 m 20 cm, 87 cm.', checkMode: 'auto', options: ['950 mm, 87 cm, 1 m 20 cm', '1 m 20 cm, 950 mm, 87 cm', '87 cm, 950 mm, 1 m 20 cm', '87 cm, 1 m 20 cm, 950 mm'], correctIndex: 2, explanation: 'Convert all to cm: 950 mm = 95 cm, 1 m 20 cm = 120 cm, 87 cm stays 87 cm. Smallest to largest: 87 cm, 95 cm, 120 cm — so 87 cm, 950 mm, 1 m 20 cm. (The other orders mix up which converted value is smallest.)' },

        // Block E — Word problems (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'A ribbon is 2 m 30 cm long. Another ribbon is 1 m 45 cm long. What is the total length of both ribbons?', checkMode: 'auto', options: ['3 m 85 cm', '4 m 75 cm', '3 m 15 cm', '3 m 75 cm'], correctIndex: 3, explanation: 'Add the cm: 30 + 45 = 75 cm. Add the m: 2 + 1 = 3 m. Total: 3 m 75 cm. (3 m 85 cm and 3 m 15 cm add the cm incorrectly; 4 m 75 cm adds an extra metre.)' },
        { difficulty: 'Medium', question: 'A rope is 8 m long. Sipho cuts off 2 m 40 cm to tie a gate. How much rope is left over?', checkMode: 'auto', options: ['6 m 60 cm', '5 m 60 cm', '5 m 40 cm', '6 m 40 cm'], correctIndex: 1, explanation: '8 m = 800 cm. 800 cm − 240 cm = 560 cm = 5 m 60 cm. (The other options come from a borrowing or subtraction slip.)' },
        { difficulty: 'Medium-Hard', question: 'A hiking trail is 12 km long. A hiker has already walked 7 km 500 m. How much further does she still need to walk to finish the trail?', checkMode: 'auto', options: ['5 km 500 m', '4 km 400 m', '4 km 500 m', '5 km 400 m'], correctIndex: 2, explanation: '12 km − 7 km 500 m: borrow 1 km (1 000 m) to make 11 km 1 500 m, then subtract 7 km 500 m to get 4 km 500 m. (The other options come from a borrowing slip.)' },

        // Block F — Capstone (19, Hard)
        { difficulty: 'Hard', question: 'A rectangular garden is 10 m long and 7 m wide. A gardener wants to fence all the way around it, and add one extra length of fencing straight across the middle (parallel to the length) to split it into two equal sections. How much fencing is needed in total?', checkMode: 'auto', options: ['34 m', '41 m', '54 m', '44 m'], correctIndex: 3, explanation: 'Perimeter = 2 × (10 + 7) = 34 m. The extra dividing fence parallel to the length runs the full 10 m. Total = 34 + 10 = 44 m. (34 m forgets the extra dividing fence; 41 m mistakenly adds the width 7 m instead of the length 10 m; 54 m double-counts one side.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered unit sense, conversions and length word problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion rules and word problem key words, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block A — Unit sense & choosing units (0-3, Easy)
        { difficulty: 'Easy', question: 'Which unit would you use to measure the height of a house: mm, cm, m or km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 2, explanation: 'A house is a medium-large structure, best measured in metres (m) — mm or cm would give an unreasonably huge number, and km would be far too large.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the width of a classroom door: mm, cm, m or km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 2, explanation: 'A door is a medium-sized object, best measured in metres (m) — mm or cm would give an oddly large number, and km would be far too large.' },
        { difficulty: 'Easy', question: 'Estimate the length of an adult foot. Choose the most reasonable estimate.', checkMode: 'auto', options: ['3 cm', '3 m', '30 cm', '25 cm'], correctIndex: 3, explanation: 'An adult foot is roughly the length of a pencil and a bit more — about 25 cm is realistic. 3 cm is far too small (more like a fingernail width), 3 m would be enormous for a foot, and 30 cm overestimates by rounding up too far.' },
        { difficulty: 'Easy', question: 'Why might a builder order timber in metres instead of centimetres, even though centimetres are more precise?', checkMode: 'auto', options: ['Because centimetres cannot be used to measure timber.', 'Because metres give a simpler, more manageable number for long lengths, making orders quicker and clearer to communicate, even though centimetres are more precise.', 'Because 1 metre and 1 centimetre are actually the same length.', 'Because timber suppliers only sell in whole metres, never in centimetres.'], correctIndex: 1, explanation: 'Metres give a simpler, more manageable number for long pieces of timber — writing "6 m" is quicker and clearer than "600 cm". Centimetres are more precise, but for ordering large amounts of material, the simpler unit reduces the chance of mistakes.' },

        // Block B — Single-step conversions (4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'Convert 65 mm to cm.', checkMode: 'auto', options: ['0.65 cm', '65 cm', '6.5 cm', '650 cm'], correctIndex: 2, explanation: 'Divide by 10 to convert mm to cm: 65 ÷ 10 = 6.5 cm. (0.65 cm divides by 100; 65 cm forgets to convert; 650 cm multiplies instead of dividing.)' },
        { difficulty: 'Easy', question: 'A caterpillar in a science experiment is measured at 12 cm long. The results table needs the length in millimetres. What value goes in the table?', checkMode: 'auto', options: ['1.2 mm', '120 mm', '12 mm', '1 200 mm'], correctIndex: 1, explanation: 'Multiply by 10 to convert cm to mm: 12 × 10 = 120 mm. (1.2 mm divides instead of multiplying; 12 mm forgets to convert; 1 200 mm multiplies by 100 instead of 10.)' },
        { difficulty: 'Easy-Medium', question: 'A market stall sells rope by the metre. A customer buys 9 m. How many centimetres of rope is that?', checkMode: 'auto', options: ['9 cm', '90 cm', '9 000 cm', '900 cm'], correctIndex: 3, explanation: 'Multiply by 100 to convert m to cm: 9 × 100 = 900 cm. (9 cm and 90 cm fail to multiply correctly; 9 000 cm multiplies by 1 000 instead of 100.)' },
        { difficulty: 'Medium', question: 'A cyclist\'s tracking app shows she has travelled 8 000 m. How many kilometres should the app display instead?', checkMode: 'auto', options: ['0.8 km', '80 km', '8 km', '800 km'], correctIndex: 2, explanation: 'Divide by 1 000 to convert m to km: 8 000 ÷ 1 000 = 8 km. (0.8 km divides by 10 000; 80 km and 800 km fail to divide correctly.)' },
        { difficulty: 'Medium', question: 'A student says: "1 m is the same as 10 cm, because there are 10 mm in a cm too." Is the student correct?', checkMode: 'auto', options: ['Yes — 1 m always equals 10 cm.', 'No — the student is confusing two different facts; there are 100 cm in 1 m, not 10 — the 10 mm in 1 cm is a separate fact.', 'Yes, but only when measuring short objects.', 'No — actually 1 m = 1 000 cm.'], correctIndex: 1, explanation: 'There are 100 cm in 1 m (not 10). The student mixed this up with the separate fact that there are 10 mm in 1 cm.' },

        // Block C — Multi-step / mixed-unit conversions (9-12, Medium)
        { difficulty: 'Medium', question: 'A curtain rail measures 640 cm. Write this length using metres and centimetres together.', checkMode: 'auto', options: ['64 m 0 cm', '6 m 4 cm', '4 m 60 cm', '6 m 40 cm'], correctIndex: 3, explanation: '640 cm = 600 cm + 40 cm = 6 m 40 cm. (64 m 0 cm misplaces the decimal point; 6 m 4 cm drops a zero from the cm part; 4 m 60 cm swaps the digits.)' },
        { difficulty: 'Medium', question: 'A runner has completed 2 175 m of a race. The scoreboard shows distances using km and m together instead. What would it display?', checkMode: 'auto', options: ['21 km 75 m', '2 km 175 m', '2 km 17 m', '12 km 75 m'], correctIndex: 1, explanation: '2 175 m = 2 000 m + 175 m = 2 km 175 m. (2 km 17 m drops a digit; 21 km 75 m and 12 km 75 m misplace the digits.)' },
        { difficulty: 'Medium', question: 'A hiking app records a walk as 3 km 400 m. For a fitness report, the distance must be entered as a single number of metres. What should be entered?', checkMode: 'auto', options: ['340 m', '3 400 m', '3 040 m', '34 000 m'], correctIndex: 1, explanation: '3 km 400 m = 3 000 m + 400 m = 3 400 m. (340 m drops a zero; 3 040 m loses a zero from the 400; 34 000 m adds an extra zero.)' },
        { difficulty: 'Medium', question: 'A seamstress measured a curtain as 4 m 15 cm, but her invoice only allows centimetres. What single number of centimetres should she write?', checkMode: 'auto', options: ['4 015 cm', '451 cm', '41.5 cm', '415 cm'], correctIndex: 3, explanation: '4 m 15 cm = 400 cm + 15 cm = 415 cm. (4 015 cm keeps the metres digit separate instead of converting it; 451 cm swaps the digits; 41.5 cm divides by 10 by mistake.)' },

        // Block D — Comparing & ordering lengths (13-15, Medium)
        { difficulty: 'Medium', question: 'Which is shorter: 999 mm or 1 m?', checkMode: 'auto', options: ['1 m, because 1 is a smaller number than 999', '999 mm, because 999 is a smaller number than 1 000', '999 mm, because 1 m = 1 000 mm, and 999 mm is 1 mm less than 1 000 mm', 'They are exactly the same length'], correctIndex: 2, explanation: 'Converting to the same unit: 1 m = 1 000 mm, and 999 mm is 1 mm less, so 999 mm is shorter. Comparing the raw numbers 999 and 1 without converting units first is not a valid method, even though it happens to reach a similar-looking answer.' },
        { difficulty: 'Medium', question: 'A student claims that 2 500 m is shorter than 2 km, because "2 500 has more digits, so it must be a smaller amount." Is the student correct?', checkMode: 'auto', options: ['The student is correct — more digits always means a smaller number.', 'The student is incorrect — converting both to metres, 2 km = 2 000 m, and since 2 500 m is greater than 2 000 m, 2 500 m is actually longer than 2 km.', 'The student is correct — 2 500 m equals 2 km exactly.', 'The student is incorrect — 2 km is actually equal to 2 500 m.'], correctIndex: 1, explanation: 'Digit count is not a valid way to compare lengths in different units. Converting both to metres: 2 km = 2 000 m, and 2 500 m stays 2 500 m. Since 2 500 m > 2 000 m, 2 500 m is longer, not shorter.' },
        { difficulty: 'Medium', question: 'Order these three lengths from smallest to largest: 3 200 m, 2 km 900 m, 3 km 50 m.', checkMode: 'auto', options: ['3 200 m, 2 km 900 m, 3 km 50 m', '2 km 900 m, 3 200 m, 3 km 50 m', '2 km 900 m, 3 km 50 m, 3 200 m', '3 km 50 m, 2 km 900 m, 3 200 m'], correctIndex: 2, explanation: 'Convert all to metres: 3 200 m stays 3 200 m, 2 km 900 m = 2 900 m, 3 km 50 m = 3 050 m. Smallest to largest: 2 900 m, 3 050 m, 3 200 m — so 2 km 900 m, 3 km 50 m, 3 200 m. (The other orders mix up which converted value is smallest.)' },

        // Block E — Word problems (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'A piece of fencing wire is 3 m 60 cm long. Another piece is 2 m 85 cm long. What is the total length of both pieces?', checkMode: 'auto', options: ['6 m 35 cm', '6 m 45 cm', '7 m 45 cm', '6 m 55 cm'], correctIndex: 1, explanation: 'Add the cm: 60 + 85 = 145 cm. Since 145 ≥ 100, convert: 145 cm = 1 m 45 cm. Add the m: 3 + 2 + 1 (carried) = 6 m. Total: 6 m 45 cm. (The other options come from mishandling the carry.)' },
        { difficulty: 'Medium', question: 'A pipe is 9 m long. A plumber cuts off 3 m 65 cm to fit under a sink. How much pipe is left over?', checkMode: 'auto', options: ['5 m 35 cm', '6 m 35 cm', '5 m 45 cm', '5 m 65 cm'], correctIndex: 0, explanation: '9 m = 900 cm. 900 cm − 365 cm = 535 cm = 5 m 35 cm. (The other options come from a borrowing or subtraction slip.)' },
        { difficulty: 'Medium-Hard', question: 'A delivery van needs to drive 15 km to reach a warehouse. It has already driven 9 km 750 m. How much further does it still need to drive?', checkMode: 'auto', options: ['6 km 250 m', '5 km 250 m', '5 km 750 m', '4 km 250 m'], correctIndex: 1, explanation: '15 km − 9 km 750 m: borrow 1 km (1 000 m) to make 14 km 1 000 m, then subtract 9 km 750 m to get 5 km 250 m. (The other options come from a borrowing slip.)' },

        // Block F — Capstone (19, Hard)
        { difficulty: 'Hard', question: 'A wire fence needs posts every 4 m along a straight 32 m fence line, with a post at each end. If each post costs R95, what is the total cost of the posts?', checkMode: 'auto', options: ['R760', 'R950', 'R855', 'R665'], correctIndex: 2, explanation: 'Gaps = 32 ÷ 4 = 8. Since a post is needed at both ends, posts = gaps + 1 = 9. Total cost = 9 × R95 = R855. (R760 forgets the extra end post, using only 8 posts; R950 mistakenly uses 10 posts; R665 uses too few posts.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered unit sense, conversions and length word problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion rules and word problem key words, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block A — Unit sense & choosing units (0-3, Easy)
        { difficulty: 'Easy', question: 'Which unit would you use to measure the length of a soccer field: mm, cm, m or km?', checkMode: 'auto', options: ['mm', 'cm', 'm', 'km'], correctIndex: 2, explanation: 'A soccer field is a medium-large area, best measured in metres (m) — mm or cm would give an unreasonably huge number, and km would be far too large.' },
        { difficulty: 'Easy', question: 'Which unit would you use to measure the width of a fingernail: mm, cm, m or km?', checkMode: 'auto', options: ['km', 'cm', 'm', 'mm'], correctIndex: 3, explanation: 'A fingernail is very thin, best measured in millimetres (mm) — cm, m or km would all be too coarse to capture its width.' },
        { difficulty: 'Easy', question: 'Estimate the distance you can walk in about 10 minutes. Choose the most reasonable estimate.', checkMode: 'auto', options: ['1 m', '100 m', '1 km', '10 km'], correctIndex: 2, explanation: 'Walking for about 10 minutes covers roughly 1 km, matching the reference fact for a kilometre. 1 m and 100 m are far too short for 10 minutes of walking, and 10 km would take well over an hour.' },
        { difficulty: 'Easy', question: 'A ruler placed against a pencil shows the pencil reaches from the 0 cm mark to the 12 cm mark. Which statement correctly gives the measured length of the pencil and the reason we read from the 0 mark?', checkMode: 'auto', options: ['12 cm — we read from the 0 mark because rulers always start counting from the edge, and 0 just marks that point for decoration.', '12 cm — we read from the 0 mark because it is the true starting point of the scale; the physical edge of the ruler may be worn and not aligned with 0.', '13 cm — we read from the 0 mark and count the number of gridlines crossed, including the starting line.', '12 cm — but it does not matter whether you read from the edge or the 0 mark, they always give the same answer.'], correctIndex: 1, explanation: 'The pencil reaches from the 0 mark to the 12 cm mark, so it measures 12 cm. We read from the 0 mark, not the physical edge, because the edge is often slightly worn and does not always align exactly with the true zero of the scale.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="100" width="190" height="26" fill="none" stroke="#0f1f3d" stroke-width="2"/><g stroke="#0f1f3d" stroke-width="1.5"><line x1="15" y1="100" x2="15" y2="126"/><line x1="30" y1="100" x2="30" y2="114"/><line x1="45" y1="100" x2="45" y2="120"/><line x1="60" y1="100" x2="60" y2="114"/><line x1="75" y1="100" x2="75" y2="120"/><line x1="90" y1="100" x2="90" y2="114"/><line x1="105" y1="100" x2="105" y2="120"/><line x1="120" y1="100" x2="120" y2="114"/><line x1="135" y1="100" x2="135" y2="120"/><line x1="150" y1="100" x2="150" y2="114"/><line x1="165" y1="100" x2="165" y2="120"/><line x1="180" y1="100" x2="180" y2="114"/><line x1="195" y1="100" x2="195" y2="126"/></g><text x="15" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">0</text><text x="105" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">6</text><text x="195" y="140" font-size="13" font-weight="700" fill="#374151" text-anchor="middle">12</text><rect x="15" y="70" width="180" height="14" fill="#fde68a" stroke="#0f1f3d" stroke-width="2"/><polygon points="195,70 205,77 195,84" fill="#fde68a" stroke="#0f1f3d" stroke-width="2"/><text x="105" y="60" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">pencil</text></svg>' },

        // Block B — Single-step conversions (4-8, Easy-Medium)
        { difficulty: 'Easy', question: 'Convert 75 mm to cm.', checkMode: 'auto', options: ['0.75 cm', '75 cm', '750 cm', '7.5 cm'], correctIndex: 3, explanation: 'Divide by 10 to convert mm to cm: 75 ÷ 10 = 7.5 cm. (0.75 cm divides by 100; 75 cm forgets to convert; 750 cm multiplies instead of dividing.)' },
        { difficulty: 'Easy', question: 'A stack of 6 identical coins is exactly 6 cm tall. Express this height in millimetres.', checkMode: 'auto', options: ['6 mm', '600 mm', '60 mm', '0.6 mm'], correctIndex: 2, explanation: 'Multiply by 10 to convert cm to mm: 6 × 10 = 60 mm. (6 mm forgets to convert; 600 mm multiplies by 100 instead of 10; 0.6 mm divides instead of multiplying.)' },
        { difficulty: 'Easy-Medium', question: 'A roll of ribbon is labelled 250 cm. A craft recipe lists ribbon lengths in metres — how many metres is on the roll?', checkMode: 'auto', options: ['25 m', '2.5 m', '0.25 m', '250 m'], correctIndex: 1, explanation: 'Divide by 100 to convert cm to m: 250 ÷ 100 = 2.5 m. (25 m divides by 10 instead of 100; 0.25 m divides by 1 000; 250 m forgets to convert.)' },
        { difficulty: 'Medium', question: 'A weather report says a storm is moving toward the coast, currently 6 km away. How many metres away is the storm?', checkMode: 'auto', options: ['600 m', '6 000 m', '60 000 m', '60 m'], correctIndex: 1, explanation: 'Multiply by 1 000 to convert km to m: 6 × 1 000 = 6 000 m. (600 m and 60 m multiply by the wrong power of 10; 60 000 m multiplies by 10 000.)' },
        { difficulty: 'Medium', question: 'A student converts 250 cm to metres like this: "250 ÷ 10 = 25, so 250 cm = 25 m." Is this correct?', checkMode: 'auto', options: ['Yes, the student is correct.', 'No — the student divided by the wrong number; there are 100 cm in 1 m, not 10, so the correct working is 250 ÷ 100 = 2.5 m.', 'No — the student should have multiplied by 10 instead of dividing.', 'Yes, but the answer should be written as 2.5 m, not 25 m.'], correctIndex: 1, explanation: 'There are 100 cm in 1 m, so the correct conversion is 250 ÷ 100 = 2.5 m. Dividing by 10 would convert mm to cm, not cm to m — that is the mistake here.' },

        // Block C — Multi-step / mixed-unit conversions (9-12, Medium)
        { difficulty: 'Medium', question: 'A market table is 720 cm long. Write this length using metres and centimetres together.', checkMode: 'auto', options: ['72 m 0 cm', '7 m 2 cm', '2 m 70 cm', '7 m 20 cm'], correctIndex: 3, explanation: '720 cm = 700 cm + 20 cm = 7 m 20 cm. (72 m 0 cm misplaces the decimal point; 7 m 2 cm drops a zero from the cm part; 2 m 70 cm swaps the digits.)' },
        { difficulty: 'Medium', question: 'A delivery driver has covered 4 080 m of her route. Her dashboard shows distances using km and m together instead. What would it display?', checkMode: 'auto', options: ['40 km 8 m', '4 km 8 m', '4 km 80 m', '48 km 0 m'], correctIndex: 2, explanation: '4 080 m = 4 000 m + 80 m = 4 km 80 m. (4 km 8 m drops a zero; 40 km 8 m and 48 km 0 m misplace the digits.)' },
        { difficulty: 'Medium', question: 'A signpost shows the campsite is 5 km 90 m away. For a GPS device, this must be entered as a single number of metres. What should be entered?', checkMode: 'auto', options: ['590 m', '5 090 m', '5 900 m', '50 090 m'], correctIndex: 1, explanation: '5 km 90 m = 5 000 m + 90 m = 5 090 m. (590 m drops a zero; 5 900 m loses a zero from the 90; 50 090 m adds an extra zero.)' },
        { difficulty: 'Medium', question: 'An electrician measured a cable as 2 m 8 cm, but the invoice column only allows centimetres. What single number of centimetres should be written?', checkMode: 'auto', options: ['28 cm', '208 cm', '280 cm', '2 008 cm'], correctIndex: 1, explanation: '2 m 8 cm = 200 cm + 8 cm = 208 cm. (28 cm drops the metres entirely; 280 cm swaps the digits; 2 008 cm keeps the metres digit separate instead of converting it.)' },

        // Block D — Comparing & ordering lengths (13-15, Medium)
        { difficulty: 'Medium', question: 'Which is longer: 300 cm or 3 m 50 cm?', checkMode: 'auto', options: ['300 cm, because 300 is a bigger number than 3.50', '3 m 50 cm, because 300 cm = 3 m, and 3 m 50 cm is 50 cm more than that', 'They are exactly the same length', '300 cm, because centimetres are always the bigger unit'], correctIndex: 1, explanation: 'Converting to the same unit: 300 cm = 3 m, and 3 m 50 cm is greater than 3 m by 50 cm, so 3 m 50 cm is longer.' },
        { difficulty: 'Medium', question: 'A student claims that 650 mm is shorter than 60 cm, because "650 has 3 digits but 60 only has 2." Is the student correct?', checkMode: 'auto', options: ['The student is correct — more digits always means a longer measurement.', 'The student is incorrect — converting both to the same unit, 650 mm = 65 cm, and since 65 cm is greater than 60 cm, 650 mm is actually longer than 60 cm.', 'The student is correct — 650 mm equals exactly 60 cm.', 'The student is incorrect — 650 mm actually equals 6.5 cm, which is shorter than 60 cm.'], correctIndex: 1, explanation: 'You cannot compare lengths by digit count when the units differ. Converting to the same unit: 650 mm = 65 cm, and 60 cm stays 60 cm. Since 65 cm > 60 cm, 650 mm is longer than 60 cm, not shorter.' },
        { difficulty: 'Medium', question: 'Order these three lengths from smallest to largest: 1 450 mm, 1 m 30 cm, 138 cm.', checkMode: 'auto', options: ['1 450 mm, 138 cm, 1 m 30 cm', '1 m 30 cm, 138 cm, 1 450 mm', '138 cm, 1 m 30 cm, 1 450 mm', '1 m 30 cm, 1 450 mm, 138 cm'], correctIndex: 1, explanation: 'Convert all to cm: 1 450 mm = 145 cm, 1 m 30 cm = 130 cm, 138 cm stays 138 cm. Smallest to largest: 130 cm, 138 cm, 145 cm — so 1 m 30 cm, 138 cm, 1 450 mm. (The other orders mix up which converted value is smallest.)' },

        // Block E — Word problems (16-18, Medium-Hard)
        { difficulty: 'Medium', question: 'A wooden plank is 4 m 55 cm long. Another plank is 3 m 70 cm long. What is the total length of both planks?', checkMode: 'auto', options: ['7 m 25 cm', '8 m 25 cm', '8 m 15 cm', '9 m 25 cm'], correctIndex: 1, explanation: 'Add the cm: 55 + 70 = 125 cm. Since 125 ≥ 100, convert: 125 cm = 1 m 25 cm. Add the m: 4 + 3 + 1 (carried) = 8 m. Total: 8 m 25 cm. (The other options come from mishandling the carry.)' },
        { difficulty: 'Medium', question: 'A roll of fabric is 6 m long. A tailor cuts off 2 m 55 cm to make a dress. How much fabric is left over?', checkMode: 'auto', options: ['3 m 55 cm', '3 m 45 cm', '4 m 45 cm', '3 m 35 cm'], correctIndex: 1, explanation: '6 m = 600 cm. 600 cm − 255 cm = 345 cm = 3 m 45 cm. (The other options come from a borrowing or subtraction slip.)' },
        { difficulty: 'Medium-Hard', question: 'A wire that is 340 cm long is cut into 4 equal pieces to make picture-frame hooks. How long is each piece, and is there any wire left over?', checkMode: 'auto', options: ['85 cm, with 4 cm left over', '85 cm, with none left over', '80 cm, with 20 cm left over', '86 cm, with none left over'], correctIndex: 1, explanation: '"Equal pieces" means divide: 340 ÷ 4 = 85 cm exactly, with no remainder.' },

        // Block F — Capstone (19, Hard)
        { difficulty: 'Hard', question: 'Which method correctly shows whether 4 200 cm is more or less than 4 km 100 m?', checkMode: 'auto', options: ['Compare the raw numbers 4 200 and 4 100 directly — since 4 200 > 4 100, 4 200 cm is more.', 'Convert both to metres: 4 200 cm ÷ 100 = 42 m, and 4 km 100 m = 4 100 m. Since 42 m is far less than 4 100 m, 4 200 cm is less than 4 km 100 m.', 'Convert both to kilometres: 4 200 cm = 4.2 km, which is more than 4 km 100 m.', 'Since cm is a smaller unit than km, any number of cm is automatically more than any number of km.'], correctIndex: 1, explanation: 'Convert both lengths to the same unit, e.g. metres: 4 200 cm ÷ 100 = 42 m, and 4 km 100 m = 4 100 m. Comparing 42 m with 4 100 m shows that 4 200 cm is far less than 4 km 100 m — comparing raw numbers or unconverted units (as in the other options) gives the wrong answer.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered unit sense, conversions and length word problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion rules and word problem key words, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],
}
