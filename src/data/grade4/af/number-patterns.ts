import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Getalpatrone',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ʼN GETALPATROON?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-number-pattern',
      title: 'Wat is ʼn Getalpatroon?',
      icon: '🔢',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Getalpatroon</strong> is ʼn lys getalle wat ʼn <strong>reël</strong> volg. Elke getal in die lys word ʼn <strong>term</strong> genoem. As jy die reël ken, kan jy voorspel wat volgende kom — selfs al gaan die lys ewig voort!</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Alledaagse voorbeelde 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>Bladsynommers in ʼn boek:</strong> 1, 2, 3, 4, 5 … — tel elke keer 1 by</li>
    <li><strong>Huisnommers in ʼn straat:</strong> 2, 4, 6, 8, 10 … — tel elke keer 2 by</li>
    <li><strong>Geld tel in 5c-muntstukke:</strong> 5, 10, 15, 20, 25 … — tel elke keer 5 by</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Sleuteldele van ʼn patroon</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#dbeafe;border-radius:8px;padding:10px 16px;flex:1;min-width:160px;">
      <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:4px;">Patroongetalle</div>
      <div style="color:#1e3a8a;font-size:15px;">Die getalle in die reeks — getoon in <span style="color:#1e40af;font-weight:700;">blou</span></div>
    </div>
    <div style="background:#fee2e2;border-radius:8px;padding:10px 16px;flex:1;min-width:160px;">
      <div style="font-size:13px;font-weight:700;color:#dc2626;margin-bottom:4px;">Die reël</div>
      <div style="color:#7f1d1d;font-size:15px;">Wat jy elke keer doen om die volgende getal te kry — getoon in <span style="color:#dc2626;font-weight:700;">rooi</span></div>
    </div>
    <div style="background:#f0fdf4;border-radius:8px;padding:10px 16px;flex:1;min-width:160px;">
      <div style="font-size:13px;font-weight:700;color:#16a34a;margin-bottom:4px;">Volgende getal</div>
      <div style="color:#14532d;font-size:15px;">Die voorspelde volgende term — getoon in <span style="color:#16a34a;font-weight:700;">groen</span></div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Twee soorte patrone</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">📈 Toenemende patroon</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">Getalle word elke keer <strong>groter</strong>.<br/>
        Voorbeeld: <span style="color:#1e40af;font-weight:700;">2, 4, 6, 8</span> <span style="color:#dc2626;font-weight:700;">(+2)</span> → <span style="color:#16a34a;font-weight:700;">10</span>
      </div>
    </div>
    <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#c2410c;margin-bottom:6px;">📉 Afnemende patroon</div>
      <div style="color:#7c2d12;font-size:14px;line-height:1.7;">Getalle word elke keer <strong>kleiner</strong>.<br/>
        Voorbeeld: <span style="color:#1e40af;font-weight:700;">50, 40, 30, 20</span> <span style="color:#dc2626;font-weight:700;">(−10)</span> → <span style="color:#16a34a;font-weight:700;">10</span>
      </div>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Identifiseer die reël en vind die volgende 3 getalle:  5, 10, 15, 20, __, __, __',
          answer: '25, 30, 35',
          steps: [
            `Vind die verskil tussen opeenvolgende terme:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">10 − 5 = 5</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">15 − 10 = 5</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">20 − 15 = 5</span>
</div>
<p style="margin-top:8px;margin-bottom:0;">Die verskil is altyd <strong>5</strong> — dit is ʼn <strong>toenemende patroon</strong>.</p>`,
            `<strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">tel elke keer 5 by</span>`,
            `Pas die reël toe om die volgende 3 terme te vind:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">20</span>
  <span style="color:#dc2626;font-weight:700;">+ 5</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 25</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">25</span>
  <span style="color:#dc2626;font-weight:700;">+ 5</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 30</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">30</span>
  <span style="color:#dc2626;font-weight:700;">+ 5</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 35</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">5, 10, 15, 20,</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">25, 30, 35</span>
</div>`,
          ],
        },
        {
          question: 'Identifiseer die reël en vind die volgende 3 getalle:  100, 90, 80, 70, __, __, __',
          answer: '60, 50, 40',
          steps: [
            `Vind die verskil tussen opeenvolgende terme:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">100 − 90 = 10</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">90 − 80 = 10</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">80 − 70 = 10</span>
</div>
<p style="margin-top:8px;margin-bottom:0;">Die getalle word elke keer <strong>10</strong> kleiner — dit is ʼn <strong>afnemende patroon</strong>.</p>`,
            `<strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">trek elke keer 10 af</span>`,
            `Pas die reël toe om die volgende 3 terme te vind:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">70</span>
  <span style="color:#dc2626;font-weight:700;">− 10</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 60</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">60</span>
  <span style="color:#dc2626;font-weight:700;">− 10</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 50</span>
  <span style="color:#374151;margin:0 4px;">→</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">50</span>
  <span style="color:#dc2626;font-weight:700;">− 10</span>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">= 40</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">100, 90, 80, 70,</span>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">60, 50, 40</span>
</div>`,
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om die reël in ʼn getalpatroon te identifiseer en dit uit te brei',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — SPRINGTEL-PATRONE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'skip-counting-patterns',
      title: 'Springtel-patrone',
      icon: '⏭️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Springtel</strong> beteken om vorentoe of terugwaarts te tel met <strong>dieselfde getal</strong> elke keer — die getalle tussenin word oorgeslaan. Dit is een van die nuttigste patrone in wiskunde!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:4px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;margin-top:8px;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = die springetal (die reël)</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = die patroongetalle</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:14px;">Algemene springtel-patrone</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Tel in 2e</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">2, 4, 6, 8, 10 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Tel in 3e</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">3, 6, 9, 12, 15 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Tel in 4e</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">4, 8, 12, 16, 20 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Tel in 5e</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">5, 10, 15, 20, 25 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Tel in 25e</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">25, 50, 75, 100, 125 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Tel in 50e</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">50, 100, 150, 200, 250 …</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
      <span style="min-width:110px;background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;font-size:14px;text-align:center;">Tel in 100e</span>
      <span style="color:#1e40af;font-weight:700;font-size:15px;">100, 200, 300, 400, 500 …</span>
    </div>

  </div>
</div>`,

      workedExamples: [
        {
          question: 'Tel vorentoe in 25e vanaf 150. Skryf die volgende 5 getalle.',
          answer: '175, 200, 225, 250, 275',
          steps: [
            `<strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">tel elke keer 25 by</span> &nbsp;(vorentoe tel — toenemende patroon)`,
            `Pas die reël stap vir stap toe:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">150</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 175</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">175</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 200</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">200</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 225</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">225</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 250</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">250</span>
  <span style="color:#dc2626;font-weight:700;">+ 25</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 275</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">150,</span>
  <span style="font-size:19px;font-weight:700;color:#16a34a;">175, 200, 225, 250, 275</span>
</div>`,
          ],
        },
        {
          question: 'Tel terugwaarts in 50e vanaf 500. Skryf die volgende 5 getalle.',
          answer: '450, 400, 350, 300, 250',
          steps: [
            `<strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">trek elke keer 50 af</span> &nbsp;(terugwaarts tel — afnemende patroon)`,
            `Pas die reël stap vir stap toe:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">500</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 450</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">450</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 400</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">400</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 350</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">350</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 300</span>
  <span style="color:#374151;margin:0 2px;">→</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">300</span>
  <span style="color:#dc2626;font-weight:700;">− 50</span>
  <span style="font-size:17px;font-weight:700;color:#16a34a;">= 250</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">500,</span>
  <span style="font-size:19px;font-weight:700;color:#16a34a;">450, 400, 350, 300, 250</span>
</div>`,
          ],
        },
      ],

      diagramPlaceholder: 'Getallelyn wat springtel in 25e toon van 0 tot 200 met elke landingsgetal gemerk en geëtiketteer',
      diagramSvg:
        '<svg viewBox="0 0 600 100" xmlns="http://www.w3.org/2000/svg"><line x1="30" y1="50" x2="570" y2="50" stroke="#0f1f3d" stroke-width="2"/><polygon points="570,50 560,45 560,55" fill="#0f1f3d"/><text x="63.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="131.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="198.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="266.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="333.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="401.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="468.75" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><text x="536.25" y="34" font-size="10" font-weight="700" fill="#dc2626" text-anchor="middle">+25</text><circle cx="30" cy="50" r="5" fill="#1e40af"/><circle cx="97.5" cy="50" r="5" fill="#1e40af"/><circle cx="165" cy="50" r="5" fill="#1e40af"/><circle cx="232.5" cy="50" r="5" fill="#1e40af"/><circle cx="300" cy="50" r="5" fill="#1e40af"/><circle cx="367.5" cy="50" r="5" fill="#1e40af"/><circle cx="435" cy="50" r="5" fill="#1e40af"/><circle cx="502.5" cy="50" r="5" fill="#1e40af"/><circle cx="570" cy="50" r="5" fill="#1e40af"/><text x="30" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">0</text><text x="97.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">25</text><text x="165" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">50</text><text x="232.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">75</text><text x="300" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">100</text><text x="367.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">125</text><text x="435" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">150</text><text x="502.5" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">175</text><text x="570" y="75" font-size="12" font-weight="700" fill="#1e40af" text-anchor="middle">200</text></svg>',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — INSET- EN UITSETWAARDES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'input-and-output-values',
      title: 'Inset- en Uitsetwaardes',
      icon: '⚙️',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Inset/uitset-masjien</strong> neem ʼn getal, pas ʼn <strong>reël</strong> toe, en lewer ʼn nuwe getal. Jy kan dit sien soos ʼn masjien in ʼn fabriek — iets gaan in, die masjien doen sy werk, en iets nuuts kom aan die ander kant uit.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe die masjien werk</div>
  <div style="display:flex;align-items:center;justify-content:center;gap:0;flex-wrap:wrap;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;">Inset</span>
      <div style="background:#dbeafe;border:2px solid #1e40af;border-radius:8px;padding:10px 18px;font-size:20px;font-weight:700;color:#1e40af;">5</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;padding:0 8px;margin-top:18px;">
      <span style="font-size:22px;color:#374151;font-weight:300;">→</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;">Reël</span>
      <div style="background:#fee2e2;border:2px solid #dc2626;border-radius:8px;padding:10px 18px;font-size:16px;font-weight:700;color:#dc2626;">× 3</div>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;padding:0 8px;margin-top:18px;">
      <span style="font-size:22px;color:#374151;font-weight:300;">→</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="font-size:13px;font-weight:700;color:#16a34a;text-transform:uppercase;letter-spacing:.05em;">Uitset</span>
      <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:8px;padding:10px 18px;font-size:20px;font-weight:700;color:#16a34a;">15</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Drie dinge wat jy gevra kan word om te doen</div>
  <ul style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2.1;font-size:15px;">
    <li><strong>Vind die uitset</strong> — jy ken die inset en die reël, bereken die uitset.</li>
    <li><strong>Vind die reël</strong> — jy ken die insette en uitsette, werk uit wat die masjien doen.</li>
    <li><strong>Vind die inset</strong> — jy ken die uitset en die reël, werk terugwaarts deur die inverse bewerking te gebruik.</li>
  </ul>
</div>`,

      workedExamples: [
        {
          question: 'Die reël is vermenigvuldig met 3. Voltooi die tabel:\nInset: 2, 4, 6, 8\nUitset: ?, ?, ?, ?',
          answer: 'Uitset: 6, 12, 18, 24',
          steps: [
            `<strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">× 3</span> — vermenigvuldig elke inset met 3 om die uitset te kry.`,
            `Pas die reël toe op elke <span style="color:#1e40af;font-weight:700;">inset</span>:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <table style="border-collapse:collapse;min-width:320px;width:100%;">
    <thead>
      <tr>
        <th style="background:#dbeafe;color:#1e40af;font-weight:700;padding:8px 16px;border:1.5px solid #bfdbfe;font-size:14px;">Inset</th>
        <th style="background:#fee2e2;color:#dc2626;font-weight:700;padding:8px 16px;border:1.5px solid #fca5a5;font-size:14px;">Berekening</th>
        <th style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:8px 16px;border:1.5px solid #86efac;font-size:14px;">Uitset</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">2</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">2 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">6</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">4</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">4 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">12</td>
      </tr>
      <tr>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">6</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">6 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">18</td>
      </tr>
      <tr style="background:#f9fafb;">
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #bfdbfe;font-weight:700;color:#1e40af;font-size:16px;">8</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #fca5a5;color:#dc2626;font-weight:600;">8 × 3</td>
        <td style="text-align:center;padding:8px 16px;border:1.5px solid #86efac;font-weight:700;color:#16a34a;font-size:16px;">24</td>
      </tr>
    </tbody>
  </table>
</div>`,
            `<strong>Antwoord:</strong> Uitsetwaardes is <span style="color:#16a34a;font-weight:700;">6, 12, 18, 24</span>`,
          ],
        },
        {
          question: 'Vind die reël. Voltooi die tabel:\nInset: 5, 10, 15, 20\nUitset: 9, 14, 19, 24',
          answer: 'Reël: tel 4 by',
          steps: [
            `Vergelyk die <span style="color:#1e40af;font-weight:700;">inset</span> en <span style="color:#16a34a;font-weight:700;">uitset</span> vir elke paar — vind die verskil:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:10px;">
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">5</span> → <span style="color:#16a34a;font-weight:700;">9</span> &nbsp; verskil: <span style="color:#dc2626;font-weight:700;">9 − 5 = 4</span></span>
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">10</span> → <span style="color:#16a34a;font-weight:700;">14</span> &nbsp; verskil: <span style="color:#dc2626;font-weight:700;">14 − 10 = 4</span></span>
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">15</span> → <span style="color:#16a34a;font-weight:700;">19</span> &nbsp; verskil: <span style="color:#dc2626;font-weight:700;">19 − 15 = 4</span></span>
  <span style="background:#f9fafb;border:1.5px solid #d1d5db;border-radius:6px;padding:6px 12px;font-size:14px;"><span style="color:#1e40af;font-weight:700;">20</span> → <span style="color:#16a34a;font-weight:700;">24</span> &nbsp; verskil: <span style="color:#dc2626;font-weight:700;">24 − 20 = 4</span></span>
</div>`,
            `Die verskil is altyd <strong>4</strong> en die uitset is altyd <em>groter</em> as die inset, dus is die reël om by te tel.<br/>
<strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">tel 4 by</span>`,
            `<strong>Antwoord:</strong> Die reël is <span style="color:#dc2626;font-weight:700;">tel 4 by</span>. Kontroleer: <span style="color:#1e40af;font-weight:700;">5</span> + 4 = <span style="color:#16a34a;font-weight:700;">9</span> ✓`,
          ],
        },
        {
          question: 'Die reël is trek 7 af. Die uitset is 15. Wat is die inset?',
          answer: 'Inset is 22',
          steps: [
            `Ons weet die <span style="color:#16a34a;font-weight:700;">uitset = 15</span> en die <span style="color:#dc2626;font-weight:700;">reël = trek 7 af</span>. Ons moet die <span style="color:#1e40af;font-weight:700;">inset</span> vind.`,
            `Om terugwaarts te werk, gebruik die <strong>inverse bewerking</strong>. Die inverse van aftrekking is optelling.<br/>
<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:8px;padding:10px 16px;margin-top:10px;display:inline-block;">
  <span style="color:#ea580c;font-weight:700;">Inverse reël: tel 7 by</span>
</div>`,
            `Pas die inverse toe op die uitset:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:12px;font-weight:700;color:#16a34a;text-transform:uppercase;">Uitset</span>
    <div style="background:#f0fdf4;border:2px solid #16a34a;border-radius:8px;padding:8px 16px;font-size:20px;font-weight:700;color:#16a34a;">15</div>
  </div>
  <div style="margin-top:16px;">
    <span style="color:#ea580c;font-weight:700;font-size:16px;">+ 7 (inverse)</span>
  </div>
  <div style="margin-top:16px;font-size:20px;color:#374151;font-weight:300;">→</div>
  <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
    <span style="font-size:12px;font-weight:700;color:#1e40af;text-transform:uppercase;">Inset</span>
    <div style="background:#dbeafe;border:2px solid #1e40af;border-radius:8px;padding:8px 16px;font-size:20px;font-weight:700;color:#1e40af;">22</div>
  </div>
</div>`,
            `<strong>Antwoord:</strong> Die inset is <span style="color:#1e40af;font-weight:700;font-size:17px;">22</span>.<br/>
<span style="color:#16a34a;font-weight:600;font-size:14px;margin-top:4px;display:inline-block;">Kontroleer: 22 − 7 = 15 ✓</span>`,
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe inset- en uitset-funksiemasjiene met verskillende reëls werk',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — VIND ONTBREKENDE GETALLE IN ʼN PATROON
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'finding-missing-numbers',
      title: 'Vind Ontbrekende Getalle in ʼn Patroon',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Soms ontbreek ʼn getal <strong>in die middel van ʼn patroon</strong>. Jy kan nie net van die begin af aanhou optel of aftrek nie — jy moet eers die reël vind, en dit dan gebruik om die gaping in te vul.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = bekende getalle</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#ea580c;display:inline-block;"></span>
      <span style="color:#ea580c;font-weight:700;">Oranje = ontbrekende getal</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = die reël</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die 3-stap-metode</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vind die reël</strong> deur na die getalle te kyk wat jy kan sien — vind die verskil of kontroleer vir vermenigvuldiging.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Pas die reël toe</strong> op die getal net voor die gaping om die ontbrekende getal te vind.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Kontroleer jou antwoord</strong> deur die reël op die ontbrekende getal toe te pas — jy behoort die volgende bekende getal te kry.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Vind die ontbrekende getal:  12, 18, __, 30, 36',
          answer: '24',
          steps: [
            `Vind die reël met behulp van die getalle wat jy kan sien:<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">18 − 12 = 6</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">36 − 30 = 6</span>
</div>
<p style="margin-top:8px;margin-bottom:0;"><strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">tel elke keer 6 by</span></p>`,
            `Pas die reël toe op die getal voor die gaping:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">18</span>
  <span style="color:#dc2626;font-weight:700;">+ 6</span>
  <span style="font-size:18px;font-weight:700;color:#ea580c;">= 24</span>
</div>`,
            `Kontroleer: pas die reël op die ontbrekende getal toe — dit moet die volgende bekende getal gee:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#ea580c;">24</span>
  <span style="color:#dc2626;font-weight:700;">+ 6</span>
  <span style="font-size:18px;font-weight:700;color:#1e40af;">= 30</span>
  <span style="color:#16a34a;font-weight:700;margin-left:4px;">✓</span>
</div>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">12, 18,</span>
  <span style="font-size:20px;font-weight:700;color:#ea580c;">24</span>
  <span style="font-size:18px;font-weight:700;color:#1e40af;">, 30, 36</span>
</div>`,
          ],
        },
        {
          question: 'Vind die ontbrekende getalle:  200, __, 160, __, 120',
          answer: '180 en 140',
          steps: [
            `Twee getalle ontbreek, maar ons kan steeds die reël vind deur te kyk na wat ons weet.<br/>
Van <span style="color:#1e40af;font-weight:700;">200</span> na <span style="color:#1e40af;font-weight:700;">160</span> is ʼn afname van <strong>40</strong> oor <strong>2 stappe</strong>.<br/>
<div style="background:#dbeafe;border-radius:6px;padding:6px 12px;display:inline-block;margin-top:8px;color:#1e40af;font-weight:600;">40 ÷ 2 = 20 per stap</div>`,
            `<strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">trek elke keer 20 af</span>`,
            `Pas die reël toe om albei ontbrekende getalle te vind:<br/>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">200</span>
  <span style="color:#dc2626;font-weight:700;">− 20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">= 180</span>
  <span style="color:#374151;margin:0 4px;">en</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">160</span>
  <span style="color:#dc2626;font-weight:700;">− 20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">= 140</span>
</div>`,
            `Kontroleer die volle reeks — elke stap moet met 20 afneem:<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">200</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">180</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">160</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#ea580c;">140</span>
  <span style="color:#dc2626;font-weight:600;font-size:13px;">−20</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">120</span>
  <span style="color:#16a34a;font-weight:700;margin-left:4px;">✓</span>
</div>`,
          ],
        },
        {
          question: 'Vind die ontbrekende getal:  3, 6, __, 24, 48',
          answer: '12',
          steps: [
            `Kontroleer eers of dit ʼn optelpatroon is:<br/>
<div style="background:#fef2f2;border-radius:6px;padding:6px 12px;display:inline-block;margin-top:8px;color:#dc2626;font-weight:600;">6 − 3 = 3 &nbsp; maar &nbsp; 48 − 24 = 24 — die verskil bly verander. Nie optelling nie.</div>`,
            `Kontroleer vermenigvuldiging — word elke getal met dieselfde hoeveelheid vermenigvuldig?<br/>
<div style="display:flex;flex-wrap:wrap;gap:8px;margin-top:8px;">
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">3 × 2 = 6 ✓</span>
  <span style="background:#dbeafe;border-radius:6px;padding:4px 10px;font-weight:600;color:#1e40af;">24 × 2 = 48 ✓</span>
</div>
<p style="margin-top:8px;margin-bottom:0;"><strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:4px 12px;color:#dc2626;font-weight:700;">vermenigvuldig elke keer met 2</span></p>`,
            `Pas die reël toe om die ontbrekende getal te vind:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#1e40af;">6</span>
  <span style="color:#dc2626;font-weight:700;">× 2</span>
  <span style="font-size:18px;font-weight:700;color:#ea580c;">= 12</span>
</div>`,
            `Kontroleer: pas die reël op die ontbrekende getal toe — dit moet die volgende bekende getal gee:<br/>
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:8px;">
  <span style="font-size:18px;font-weight:700;color:#ea580c;">12</span>
  <span style="color:#dc2626;font-weight:700;">× 2</span>
  <span style="font-size:18px;font-weight:700;color:#1e40af;">= 24</span>
  <span style="color:#16a34a;font-weight:700;margin-left:4px;">✓</span>
</div>
<div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">3, 6,</span>
  <span style="font-size:20px;font-weight:700;color:#ea580c;">12</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">, 24, 48</span>
</div>`,
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om ontbrekende getalle in ʼn patroon te vind deur eers die reël te identifiseer',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — PATRONE OP ʼN GETALLELYN VOORSTEL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'patterns-on-a-number-line',
      title: 'Patrone op ʼn Getallelyn Voorstel',
      icon: '📏',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Getallelyn</strong> is ʼn goeie manier om ʼn patroon te <em>sien</em>. Jy merk elke getal in die reeks met ʼn kolletjie, en teken dan pyle tussen die kolletjies om te wys hoe ver die patroon elke keer spring.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Kleurgids</div>
  <div style="display:flex;gap:20px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = gemerkte getalle (kolletjies)</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = pyle wat elke sprong toon</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
      <span style="color:#16a34a;font-weight:700;">Groen = die reël-etiket op elke pyl</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Hoe om ʼn patroon op ʼn getallelyn te teken</div>
  <ol style="margin:0;padding-left:20px;color:#1e3a8a;line-height:2.2;font-size:15px;">
    <li><strong>Teken ʼn getallelyn</strong> lank genoeg om al die getalle in die patroon te pas.</li>
    <li><strong>Merk elke getal</strong> in die reeks met ʼn kolletjie in <span style="color:#1e40af;font-weight:700;">blou</span>.</li>
    <li><strong>Teken ʼn pyl</strong> van elke kolletjie na die volgende in <span style="color:#dc2626;font-weight:700;">rooi</span>, en etiketteer dit met die reël in <span style="color:#16a34a;font-weight:700;">groen</span>.</li>
  </ol>
</div>`,

      workedExamples: [
        {
          question: 'Wys die patroon 0, 5, 10, 15, 20 op ʼn getallelyn.',
          answer: 'Getallelyn van 0 tot 25 met kolletjies by 0, 5, 10, 15, 20 en pyle geëtiketteer "+5" tussen elkeen.',
          steps: [
            `Teken ʼn getallelyn van <span style="color:#1e40af;font-weight:700;">0</span> tot <span style="color:#1e40af;font-weight:700;">25</span> — laat genoeg plek vir al die getalle in die patroon plus ʼn bietjie ekstra.`,
            `Merk elke getal in die patroon met ʼn <span style="color:#1e40af;font-weight:700;">blou kolletjie</span>: <span style="color:#1e40af;font-weight:700;">0, 5, 10, 15, 20</span>.`,
            `Teken ʼn <span style="color:#dc2626;font-weight:700;">rooi pyl</span> van elke kolletjie na die volgende. Etiketteer elke pyl met die reël in <span style="color:#16a34a;font-weight:700;">groen</span>:<br/>
<div style="overflow-x:auto;margin-top:12px;">
  <div style="display:flex;align-items:center;gap:0;min-width:420px;">
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">0</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">5</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">10</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">15</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;flex:1;gap:2px;">
      <span style="font-size:12px;font-weight:700;color:#16a34a;">+5</span>
      <span style="color:#dc2626;font-size:18px;font-weight:300;line-height:1;">⟶</span>
    </div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:block;"></span>
      <span style="font-size:14px;font-weight:700;color:#1e40af;">20</span>
    </div>
  </div>
</div>`,
            `Die diagram toon nou duidelik die patroon: elke sprong is dieselfde grootte — die reël is <span style="color:#16a34a;font-weight:700;">tel 5 by</span> elke keer.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — SKEP JOU EIE PATRONE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'creating-your-own-patterns',
      title: 'Skep Jou Eie Patrone',
      icon: '✏️',
      explanation: `
<p style="margin-bottom:14px;">Jy hoef nie altyd ʼn patroon te <em>vind</em> nie — jy kan self <strong>een skep</strong>! Al wat jy nodig het is ʼn beginwaarde en ʼn reël, en jy kan ʼn patroon bou wat so lank aangaan as wat jy wil.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die 4 stappe</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Kies ʼn beginwaarde</strong> — dit is die eerste term in jou patroon.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Kies ʼn reël</strong> — besluit wat jy elke keer gaan doen (bytel, aftrek, of met ʼn getal vermenigvuldig).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#7c3aed;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Pas die reël herhaaldelik toe</strong> — gebruik die reël oor en oor om elke volgende term te kry.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Skryf ten minste 6 getalle</strong> — ʼn patroon het genoeg terme nodig sodat die reël duidelik is.</span>
    </div>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Skep ʼn patroon wat by 7 begin met die reël: tel 8 by.',
          answer: '7, 15, 23, 31, 39, 47',
          steps: [
            `<strong>Beginwaarde:</strong> <span style="color:#1e40af;font-weight:700;">7</span> &nbsp;|&nbsp; <strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:3px 10px;color:#dc2626;font-weight:700;">tel 8 by</span>`,
            `Pas die reël herhaaldelik toe:<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">7</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">15</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">23</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">31</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">39</span>
  <span style="color:#dc2626;font-weight:700;">+8</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">47</span>
</div>`,
            `<strong>Patroon:</strong> <span style="color:#1e40af;font-weight:700;font-size:17px;">7, 15, 23, 31, 39, 47</span>`,
          ],
        },
        {
          question: 'Skep ʼn afnemende patroon wat by 120 begin met die reël: trek 15 af.',
          answer: '120, 105, 90, 75, 60, 45',
          steps: [
            `<strong>Beginwaarde:</strong> <span style="color:#1e40af;font-weight:700;">120</span> &nbsp;|&nbsp; <strong>Reël:</strong> <span style="background:#fee2e2;border-radius:6px;padding:3px 10px;color:#dc2626;font-weight:700;">trek 15 af</span> &nbsp;(afnemende patroon)`,
            `Pas die reël herhaaldelik toe:<br/>
<div style="display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-top:10px;">
  <span style="font-size:17px;font-weight:700;color:#1e40af;">120</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">105</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">90</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">75</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">60</span>
  <span style="color:#dc2626;font-weight:700;">−15</span>
  <span style="font-size:17px;font-weight:700;color:#1e40af;">45</span>
</div>`,
            `<strong>Patroon:</strong> <span style="color:#1e40af;font-weight:700;font-size:17px;">120, 105, 90, 75, 60, 45</span>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae) — Afdelings: Brei uit(0-3) / Ontbrekend(4-7) /
    // Inset/Uitset(8-11) / Woordprobleme(12-15) / Redenering(16-18) / Kroon(19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Afdeling 1 — Brei die patroon uit (Maklik)
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n4, 7, 10, 13, __, __, __', checkMode: 'auto', options: ['13, 16, 19', '16, 19, 22', '17, 20, 23', '16, 19, 23'], correctIndex: 1, explanation: 'Reël: tel elke keer 3 by (7−4=3, 10−7=3, 13−10=3). 13+3=16, 16+3=19, 19+3=22, wat 16, 19, 22 gee. (13, 16, 19 herhaal die laaste gegewe term in plaas daarvan om die nuwe getalle van 16 af te begin; 17, 20, 23 gebruik verkeerdelik tel 4 by; 16, 19, 23 raak halfpad deurmekaar.)' },
        { difficulty: 'Easy', question: 'Tel in 9e vanaf 6. Skryf die volgende 3 getalle:\n\n6, 15, 24, 33, __, __, __', checkMode: 'auto', options: ['33, 42, 51', '41, 50, 59', '42, 50, 59', '42, 51, 60'], correctIndex: 3, explanation: 'Reël: tel elke keer 9 by. 33+9=42, 42+9=51, 51+9=60. (33, 42, 51 herhaal die laaste gegewe term as die eerste nuwe getal; 41, 50, 59 tel per ongeluk in 9e vanaf een te laag; 42, 50, 59 tel eers korrek 9 by en verander dan na tel 8 by.)' },
        { difficulty: 'Easy', question: 'ʼn Patroon gaan 60, 55, 50, 45 en gaan dan op dieselfde manier voort. Wat is die volgende 3 getalle?', checkMode: 'auto', options: ['40, 35, 30', '45, 40, 35', '35, 30, 25', '40, 34, 29'], correctIndex: 0, explanation: 'Reël: trek elke keer 5 af. 45−5=40, 40−5=35, 35−5=30. (45, 40, 35 herhaal die laaste gegewe term in plaas daarvan om van 40 af voort te gaan; 35, 30, 25 trek 10 af in plaas van 5; 40, 34, 29 begin korrek maar trek dan 6 af in plaas van 5.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n300, 275, 250, 225, __, __, __', checkMode: 'auto', options: ['225, 200, 175', '200, 170, 145', '200, 175, 150', '175, 150, 125'], correctIndex: 2, explanation: 'Reël: trek elke keer 25 af. 225−25=200, 200−25=175, 175−25=150. (225, 200, 175 herhaal die laaste gegewe term; 200, 170, 145 trek 30 af in plaas van 25 na die eerste stap; 175, 150, 125 trek een ekstra 25 te veel af en spring ʼn stap vooruit.)' },

        // Afdeling 2 — Ontbrekende getal in die middel (Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende getal:\n\n10, 15, __, 25, 30', checkMode: 'auto', options: ['15', '18', '20', '22'], correctIndex: 2, explanation: 'Reël: tel elke keer 5 by (15−10=5, 30−25=5). 15+5=20. Kontroleer: 20+5=25 ✓ (15 herhaal die term voor die gaping in plaas daarvan om die reël toe te pas; 18 en 22 kom van die reël verkeerdelik toe te pas as tel 3 by of tel 7 by.)' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n63, 54, __, 36, 27', checkMode: 'auto', options: ['45', '36', '42', '48'], correctIndex: 0, explanation: 'Reël: trek elke keer 9 af (54−63=−9, 27−36=−9). 54−9=45. Kontroleer: 45−9=36 ✓ (36 herhaal die term na die gaping; 42 en 48 kom van verkeerdelik 12 of 6 af te trek.)' },
        { difficulty: 'Medium', question: 'Vind die twee ontbrekende getalle:\n\n200, __, 160, __, 120', checkMode: 'auto', options: ['180, 140', '170, 130', '190, 150', '180, 150'], correctIndex: 0, explanation: 'Van 200 na 160 is ʼn afname van 40 oor 2 stappe, dus is elke stap 40÷2=20. Reël: trek elke keer 20 af. 200−20=180, 160−20=140. (170, 130 gebruik verkeerdelik ʼn stap van 30; 190, 150 gebruik verkeerdelik ʼn stap van 10; 180, 150 kry die eerste ontbrekende getal reg maar bereken die tweede verkeerd.)' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n2, 6, __, 54, 162', checkMode: 'auto', options: ['18', '12', '16', '24'], correctIndex: 0, explanation: 'Dit is nie ʼn optelpatroon nie (6−2=4 maar 162−54=108). Kontroleer vermenigvuldiging: 2×3=6, 54×3=162. Reël: vermenigvuldig elke keer met 3. 6×3=18. Kontroleer: 18×3=54 ✓ (12 gebruik vermenigvuldig met 2 in plaas van 3; 16 kom van ʼn optelreël te raai in plaas daarvan om vermenigvuldiging te kontroleer; 24 gebruik vermenigvuldig met 4 in plaas van 3.)' },

        // Afdeling 3 — Inset/uitset-masjiene (Medium)
        { difficulty: 'Medium', question: 'Die reël is tel 9 by. Vind die uitsette vir insette 2, 5 en 8.', checkMode: 'auto', options: ['20, 23, 26', '11, 14, 17', '13, 16, 19', '11, 15, 19'], correctIndex: 1, explanation: '2+9=11, 5+9=14, 8+9=17. (20, 23, 26 tel per ongeluk 9 twee keer by, dit wil sê tel 18 by; 13, 16, 19 lees die reël verkeerd as tel 11 by; 11, 15, 19 kry die eerste uitset reg maar tel dan onbestendige bedrae by in plaas van elke keer 9.)' },
        { difficulty: 'Medium', question: 'Vind die reël: inset 3 → uitset 9, inset 6 → uitset 18, inset 9 → uitset 27. Wat is die reël?', checkMode: 'auto', options: ['Tel 6 by', 'Vermenigvuldig met 2', 'Vermenigvuldig met 3', 'Tel 9 by'], correctIndex: 2, explanation: '3×3=9, 6×3=18, 9×3=27 — elke uitset is 3 keer die inset. Reël: Vermenigvuldig met 3. (Tel 6 by werk net vir die eerste paar (3→9) maar nie vir die ander nie (6+6=12≠18); Vermenigvuldig met 2 en Tel 9 by werk albei vir geen paar nie.)' },
        { difficulty: 'Medium', question: 'Die reël is trek 18 af. Die uitset is 12. Wat is die inset?', checkMode: 'auto', options: ['-6', '24', '30', '6'], correctIndex: 2, explanation: 'Gebruik die inverse bewerking (tel 18 by) op die uitset. 12+18=30. Kontroleer: 30−18=12 ✓ (−6 herhaal per ongeluk die aftrekking (12−18) in plaas daarvan om dit om te keer; 24 tel net 12 by in plaas van 18; 6 bereken 18−12 in plaas van 18+12.)' },
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 5. Voltooi die tabel:\n\nInset: 2, 4, 6, 8\nUitset: ?, ?, ?, ?', checkMode: 'auto', options: ['7, 9, 11, 13', '10, 20, 30, 40', '10, 15, 20, 25', '12, 24, 36, 48'], correctIndex: 1, explanation: '2×5=10, 4×5=20, 6×5=30, 8×5=40. (7, 9, 11, 13 tel per ongeluk 5 by in plaas daarvan om te vermenigvuldig; 10, 15, 20, 25 kry die eerste uitset per toeval reg, en verander dan na tel 5 by in plaas van vermenigvuldig; 12, 24, 36, 48 gebruik vermenigvuldig met 6 in plaas van 5.)' },

        // Afdeling 4 — Werklike-lewe-woordprobleme (Medium)
        { difficulty: 'Medium', question: 'Thabo spaar elke week R12. Hoeveel het hy altesaam gespaar teen die einde van week 6?', checkMode: 'auto', options: ['R60', 'R84', 'R66', 'R72'], correctIndex: 3, explanation: 'Die patroon is 12, 24, 36, 48, 60, 72 (tel elke week R12 by). Week 6 = 12×6 = R72. (R60 = 12×5, tel net 5 weke; R84 = 12×7, tel een week te veel; R66 kom van ʼn verkeerd berekende optelling.)' },
        { difficulty: 'Medium', question: 'ʼn Parkeerterrein hef R10 vir die eerste uur en R6 vir elke ekstra uur. Hoeveel kos 3 uur parkering altesaam?', checkMode: 'auto', options: ['R28', 'R18', 'R16', 'R22'], correctIndex: 3, explanation: 'Eerste uur = R10. Twee ekstra ure = 2×R6 = R12. Totaal = 10+12 = R22. (R28 hef verkeerdelik R6 vir al drie ure bo-op die R10; R18 = 3×R6, en ignoreer die spesiale R10-eersteuurtarief; R16 = R10+R6, en tel net een ekstra uur in plaas van twee.)' },
        { difficulty: 'Medium', question: 'Eiers word 6 per boks verpak. Hoeveel eiers is in 9 bokse?', checkMode: 'auto', options: ['15', '54', '48', '60'], correctIndex: 1, explanation: 'Die patroon is 6, 12, 18 … (veelvoude van 6). 9 bokse = 6×9 = 54 eiers. (15 = 6+9, optel in plaas van vermenigvuldig; 48 = 6×8, een boks te min; 60 = 6×10, een boks te veel.)' },
        { difficulty: 'Medium', question: 'ʼn Trap se treetjies styg elke keer 18 cm. As die eerste treetjie 18 cm bo die grond is, hoeveel sentimeter bo die grond is die 5de treetjie?', checkMode: 'auto', options: ['72 cm', '108 cm', '90 cm', '85 cm'], correctIndex: 2, explanation: 'Die patroon is 18, 36, 54, 72, 90 (veelvoude van 18). 5de treetjie = 18×5 = 90 cm. (72 cm = 18×4, en mis een styging deur die eerste treetjie as treetjie 0 te behandel; 108 cm = 18×6, en tel een treetjie te veel; 85 cm kom van ʼn rekenfout tydens optelling.)' },

        // Afdeling 5 — Redenering, foutopsporing & regverdiging (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon neem af: 50, 43, 36, 29, 22. ʼn Leerder beweer die reël is "trek 5 af". Watter stelling evalueer hierdie bewering korrek?', checkMode: 'auto', options: ['Die leerder is korrek — die reël is trek 5 af.', 'Die leerder is verkeerd — die werklike reël is trek 7 af.', 'Die leerder is verkeerd — die werklike reël is trek 6 af.', 'Die leerder is korrek, maar net vir die eerste twee terme.'], correctIndex: 1, explanation: '50−43=7, 43−36=7, 36−29=7, 29−22=7 — die verskil is altyd 7, nie 5 nie. Die leerder is verkeerd: die werklike reël is trek 7 af. (Trek 6 af stem met geen opeenvolgende paar ooreen nie; om korrektheid vir die eerste twee terme te beweer is ook verkeerd aangesien 50−43=7, nie 5 nie.)' },
        { difficulty: 'Medium-Hard', question: 'Patroon A begin by 4 en volg die reël tel 6 by. Patroon B begin by 10 en volg die reël tel 4 by. Watter patroon het die groter 5de term?', checkMode: 'auto', options: ['Patroon B', 'Albei patrone het dieselfde 5de term', 'Patroon A', 'Patroon B, omdat dit met ʼn groter getal begin'], correctIndex: 2, explanation: 'Patroon A: 4, 10, 16, 22, 28 — 5de term is 28. Patroon B: 10, 14, 18, 22, 26 — 5de term is 26. 28>26, dus het Patroon A die groter 5de term. (Hulle is nie gelyk nie, en die feit dat Patroon B met ʼn groter getal begin, maak nie op vir sy kleiner reël oor 5 terme nie.)' },
        { difficulty: 'Medium-Hard', question: 'Watter stelling verduidelik korrek hoe jy kan bepaal of ʼn getalpatroon optelling/aftrekking of vermenigvuldiging as sy reël gebruik?', checkMode: 'auto', options: ['As die eerste twee terme dieselfde verskil het as die laaste twee terme, moet die reël vermenigvuldiging wees.', 'ʼn Patroon gebruik net vermenigvuldiging as al die terme ewe getalle is.', 'Jy kan die reël net bepaal deur elke moontlike getal van 1 tot 10 te raai en te toets.', 'As die verskil tussen opeenvolgende terme altyd dieselfde is, is die reël optelling of aftrekking; as elke term altyd die vorige term keer dieselfde getal is, is die reël vermenigvuldiging.'], correctIndex: 3, explanation: 'Konstante verskille tussen opeenvolgende terme dui op ʼn optel/aftrek-reël; ʼn konstante verhouding tussen opeenvolgende terme (elke term is die vorige term keer dieselfde getal) dui op ʼn vermenigvuldigingsreël. (Ooreenstemmende verskille aan die begin en einde bewys nie op sigself vermenigvuldiging nie; ewe getalle het niks met die tipe reël te doen nie; en daar is geen nodigheid om lukraak te raai nie — kontroleer die patroon stelselmatig.)' },

        // Afdeling 6 — Multi-stap / nde-term-kroon (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Patroon begin by 6 en volg die reël tel 5 by. Wat is die 12de getal in die patroon?', checkMode: 'auto', options: ['66', '56', '65', '61'], correctIndex: 3, explanation: 'Vanaf term 1 (wat 6 is), tel jy 5 altesaam 11 keer by om term 12 te bereik. 6+5×11=6+55=61. (66 = 6+5×12, en tel die reël een keer te veel by; 56 = 6+5×10, en tel dit een keer te min by; 65 kom van ʼn rekenfout tydens die optelling van 6+55.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalpatrone bemeester — elke vaardigheid in hierdie stel, van patrone uitbrei tot multi-stap-redenering.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met die meeste getalpatroon-vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae) — dieselfde afdeling-uitleg as Stel 1, ander vrae/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Afdeling 1 — Brei die patroon uit (Maklik)
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n9, 17, 25, 33, __, __, __', checkMode: 'auto', options: ['33, 41, 49', '41, 49, 57', '42, 51, 60', '41, 49, 58'], correctIndex: 1, explanation: 'Reël: tel elke keer 8 by. 33+8=41, 41+8=49, 49+8=57. (33, 41, 49 herhaal die laaste gegewe term in plaas daarvan om van 41 af te begin; 42, 51, 60 gebruik verkeerdelik tel 9 by; 41, 49, 58 kry die eerste twee reg maar gly op die derde.)' },
        { difficulty: 'Easy', question: 'Tel in 12e vanaf 7. Skryf die volgende 3 getalle:\n\n7, 19, 31, 43, __, __, __', checkMode: 'auto', options: ['43, 55, 67', '54, 66, 78', '55, 67, 79', '55, 66, 77'], correctIndex: 2, explanation: 'Reël: tel elke keer 12 by. 43+12=55, 55+12=67, 67+12=79. (43, 55, 67 herhaal die laaste gegewe term; 54, 66, 78 tel in 12e vanaf een te laag; 55, 66, 77 tel eers 12 by en verander dan na tel 11 by.)' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n40, 37, 34, 31, __, __, __', checkMode: 'auto', options: ['31, 28, 25', '28, 25, 22', '27, 24, 21', '28, 24, 20'], correctIndex: 1, explanation: 'Reël: trek elke keer 3 af. 31−3=28, 28−3=25, 25−3=22. (31, 28, 25 herhaal die laaste gegewe term; 27, 24, 21 trek 4 af in plaas van 3; 28, 24, 20 trek eers 3 af en verander dan na trek 4 af.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n200, 180, 160, 140, __, __, __', checkMode: 'auto', options: ['140, 120, 100', '120, 100, 80', '115, 90, 65', '120, 105, 90'], correctIndex: 1, explanation: 'Reël: trek elke keer 20 af. 140−20=120, 120−20=100, 100−20=80. (140, 120, 100 herhaal die laaste gegewe term; 115, 90, 65 trek 25 af in plaas van 20; 120, 105, 90 trek eers 20 af en verander dan na trek 15 af.)' },

        // Afdeling 2 — Ontbrekende getal in die middel (Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende getal:\n\n40, 36, __, 28, 24', checkMode: 'auto', options: ['28', '30', '32', '34'], correctIndex: 2, explanation: 'Reël: trek elke keer 4 af (36−40=−4, 24−28=−4). 36−4=32. Kontroleer: 32−4=28 ✓ (28 herhaal die term na die gaping; 30 en 34 kom van verkeerdelik 6 of 2 af te trek.)' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n17, 26, __, 44, 53', checkMode: 'auto', options: ['26', '33', '35', '37'], correctIndex: 2, explanation: 'Reël: tel elke keer 9 by. 26+9=35. Kontroleer: 35+9=44 ✓ (26 herhaal die term voor die gaping; 33 en 37 kom van verkeerdelik 7 of 11 by te tel.)' },
        { difficulty: 'Medium', question: 'Vind die twee ontbrekende getalle:\n\n90, __, 70, __, 50', checkMode: 'auto', options: ['80, 60', '85, 55', '75, 65', '80, 65'], correctIndex: 0, explanation: 'Van 90 na 70 is ʼn afname van 20 oor 2 stappe, dus is elke stap 20÷2=10. Reël: trek elke keer 10 af. 90−10=80, 70−10=60. (85, 55 gebruik verkeerdelik ʼn stap van 5; 75, 65 gebruik verkeerdelik ʼn stap van 15; 80, 65 kry die eerste ontbrekende getal reg maar bereken die tweede verkeerd.)' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n1, 2, __, 8, 16', checkMode: 'auto', options: ['3', '4', '5', '6'], correctIndex: 1, explanation: 'Dit is nie ʼn optelpatroon nie (2−1=1 maar 16−8=8). Kontroleer vermenigvuldiging: 1×2=2, 8×2=16. Reël: vermenigvuldig elke keer met 2. 2×2=4. Kontroleer: 4×2=8 ✓ (3 kom van verkeerdelik ʼn gemiddeld te bereken in plaas daarvan om te vermenigvuldig; 5 en 6 kom van verkeerdelik ʼn optelreël aan te neem in plaas daarvan om vermenigvuldiging te kontroleer.)' },

        // Afdeling 3 — Inset/uitset-masjiene (Medium)
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 4. Vind die uitsette vir insette 2, 5 en 8.', checkMode: 'auto', options: ['6, 9, 12', '10, 13, 16', '8, 15, 22', '8, 20, 32'], correctIndex: 3, explanation: '2×4=8, 5×4=20, 8×4=32. (6, 9, 12 tel per ongeluk 4 by in plaas daarvan om te vermenigvuldig; 10, 13, 16 tel per ongeluk 8 by; 8, 15, 22 kry die eerste uitset reg maar tel dan onbestendige bedrae by in plaas daarvan om met 4 te vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Vind die reël: inset 5 → uitset 11, inset 10 → uitset 16, inset 15 → uitset 21. Wat is die reël?', checkMode: 'auto', options: ['Tel 6 by', 'Vermenigvuldig met 2', 'Tel 5 by', 'Vermenigvuldig met 3'], correctIndex: 0, explanation: '11−5=6, 16−10=6, 21−15=6 — die verskil is altyd 6. Reël: Tel 6 by. (Vermenigvuldig met 2 en Vermenigvuldig met 3 werk albei vir geen paar nie; Tel 5 by werk net vir die eerste paar (5→10, nie 11 nie) maar nie vir die ander nie.)' },
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 7. Die uitset is 63. Wat is die inset?', checkMode: 'auto', options: ['56', '70', '9', '7'], correctIndex: 2, explanation: 'Gebruik die inverse bewerking (deel deur 7) op die uitset. 63÷7=9. Kontroleer: 9×7=63 ✓ (56 trek per ongeluk 7 van 63 af in plaas daarvan om te deel; 70 tel per ongeluk 7 by; 7 verwar die inset met die reël se vermenigvuldiger self.)' },
        { difficulty: 'Medium', question: 'Die reël is trek 3 af. Voltooi die tabel:\n\nInset: 10, 15, 20, 25\nUitset: ?, ?, ?, ?', checkMode: 'auto', options: ['13, 18, 23, 28', '7, 10, 13, 16', '10, 15, 20, 25', '7, 12, 17, 22'], correctIndex: 3, explanation: '10−3=7, 15−3=12, 20−3=17, 25−3=22. (13, 18, 23, 28 tel per ongeluk 3 by in plaas daarvan om af te trek; 7, 10, 13, 16 kry die eerste uitset reg maar trek dan onbestendig af; 10, 15, 20, 25 herhaal die insette in plaas daarvan om die reël toe te pas.)' },

        // Afdeling 4 — Werklike-lewe-woordprobleme (Medium)
        { difficulty: 'Medium', question: 'Lerato haal elke 15 minute ʼn bus vanaf 07:00. Hoeveel minute na 07:00 kom die 4de bus aan?', checkMode: 'auto', options: ['60 minute', '30 minute', '50 minute', '45 minute'], correctIndex: 3, explanation: 'Bustye na 07:00: 1ste = 0 min, 2de = 15 min, 3de = 30 min, 4de = 45 min. Reël: tel elke keer 15 minute by. 4de bus = 15×3 = 45 minute na 07:00. (60 minute = 15×4, en behandel die 1ste bus asof dit na 15 minute aankom in plaas van by 0; 30 minute is die 3de bus se tyd, een bus te vroeg; 50 minute kom van ʼn rekenfout.)' },
        { difficulty: 'Medium', question: 'Amahle het 10 plakkers. Sy voeg elke dag nog 5 plakkers by. Hoeveel plakkers het sy altesaam na 6 dae (dag 1 ingesluit)?', checkMode: 'auto', options: ['35 plakkers', '40 plakkers', '30 plakkers', '25 plakkers'], correctIndex: 0, explanation: 'Die patroon is 10, 15, 20, 25, 30, 35 (tel elke dag 5 by, begin by 10). Na 6 dae: 10+5×5=35 plakkers. (40 plakkers = 10+5×6, en tel een dag te veel by; 30 plakkers = 10+5×4, een dag te min; 25 plakkers = 10+5×3, twee dae te min.)' },
        { difficulty: 'Medium', question: 'ʼn Tuinier natlei ʼn ry plante elke 4de dag, beginnende op dag 4. Op watter dag natlei sy die plante vir die 5de keer?', checkMode: 'auto', options: ['Dag 20', 'Dag 16', 'Dag 24', 'Dag 25'], correctIndex: 0, explanation: 'Die patroon is 4, 8, 12, 16, 20 (veelvoude van 4). 5de natleidag = 4×5 = dag 20. (Dag 16 = 4×4, een natleiing te vroeg; Dag 24 = 4×6, een natleiing te laat; Dag 25 kom van ʼn rekenfout.)' },
        { difficulty: 'Medium', question: 'ʼn Drukker nommer kaartjies vanaf 100, en elke nuwe kaartjienommer is 4 meer as die vorige een. Wat is die nommer op die 6de kaartjie wat gedruk word?', checkMode: 'auto', options: ['120', '124', '116', '104'], correctIndex: 0, explanation: 'Die patroon is 100, 104, 108, 112, 116, 120 (tel elke keer 4 by, begin by 100). 6de kaartjie = 100+4×5=120. (124 = 100+4×6, en tel een keer te veel by; 116 is die 5de kaartjie, een te vroeg; 104 is net die 2de kaartjie.)' },

        // Afdeling 5 — Redenering, foutopsporing & regverdiging (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het die reël "vermenigvuldig met 2" en begin by 4. Thabo sê die 6de term is 24. Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Hy is korrek — die 6de term is 24.', 'Hy is verkeerd — die werklike 6de term is 64, aangesien die patroon net 5 keer verdubbel.', 'Hy is verkeerd — die werklike 6de term is 128, aangesien die patroon 4, 8, 16, 32, 64, 128 is.', 'Hy is korrek, maar net as die patroon agteruit gelees word.'], correctIndex: 2, explanation: 'Patroon: 4, 8, 16, 32, 64, 128 (vermenigvuldig elke keer met 2). Thabo het dalk elke keer 4 bygetel in plaas van vermenigvuldig (4+4×5=24). Die werklike 6de term is 128, nie 24 nie. (64 is die 5de term, een verdubbeling te min; om die patroon agteruit te lees maak 24 nie korrek nie.)' },
        { difficulty: 'Medium-Hard', question: 'Patroon A begin by 20 en volg die reël trek 3 af. Patroon B begin by 8 en volg die reël tel 2 by. Watter patroon het die groter 6de term?', checkMode: 'auto', options: ['Patroon A', 'Patroon B', 'Albei patrone het dieselfde 6de term', 'Patroon A, omdat dit met ʼn groter getal begin'], correctIndex: 1, explanation: 'Patroon A: 20, 17, 14, 11, 8, 5 — 6de term is 5. Patroon B: 8, 10, 12, 14, 16, 18 — 6de term is 18. 18>5, dus het Patroon B die groter 6de term. (Hulle is nie gelyk nie, en Patroon A se groter beginwaarde word oorskadu deurdat dit afneem in plaas van toeneem.)' },
        { difficulty: 'Medium-Hard', question: 'Watter stelling verduidelik korrek waarom jy ʼn ontbrekende-getal-antwoord beide voorwaarts en terugwaarts moet kontroleer, nie net op een manier nie?', checkMode: 'auto', options: ['Terugwaartse kontrolering is net nodig wanneer die patroon afneem, nie wanneer dit toeneem nie.', 'Dit maak nie saak in watter rigting jy kontroleer nie, so lank jy dieselfde paar getalle twee keer kontroleer.', 'Terugwaartse kontrolering is vinniger, so jy behoort altyd net terugwaarts te kontroleer en die voorwaartse kontrolering oor te slaan.', 'Om net voorwaarts te kontroleer kan ʼn fout wegsteek as die verkeerde reël per ongeluk gekies is; om ook terugwaarts te kontroleer bevestig dat die reël konsekwent in albei rigtings werk.'], correctIndex: 3, explanation: 'As jy net op een manier kontroleer (byvoorbeeld net dat die getal voor die gaping plus die reël jou antwoord gee), kan dit ʼn fout wegsteek as jy per ongeluk die verkeerde reël gekies het. Om ook terugwaarts te kontroleer — deur jou antwoord met die reël te gebruik om te sien of dit die volgende bekende getal gee — bevestig dat die reël konsekwent werk, sodat jy seker kan wees die antwoord is korrek en nie net ʼn gelukkige raaiskoot nie. (Die rigting wat nodig is, hang nie af van of die patroon toeneem of afneem nie; om dieselfde paar twee keer te kontroleer vang nie ʼn verkeerde reël op nie; en om die voorwaartse kontrolering oor te slaan mis foute net so maklik soos om die terugwaartse kontrolering oor te slaan.)' },

        // Afdeling 6 — Multi-stap / nde-term-kroon (Moeilik)
        { difficulty: 'Hard', question: 'Begin met die getal 6. Pas eers die reël "tel 4 by" toe, en pas dan die reël "vermenigvuldig met 3" op daardie resultaat toe. Wat is die finale antwoord?', checkMode: 'auto', options: ['22', '18', '34', '30'], correctIndex: 3, explanation: 'Stap 1: 6+4=10. Stap 2: 10×3=30. Finale antwoord: 30. (22 kom van die reëls in die verkeerde volgorde toe te pas — eers met 3 vermenigvuldig en dan 4 bytel; 18 pas net die vermenigvuldig-met-3-stap toe en slaan die tel-4-by-stap oor; 34 kom van ʼn rekenfout in die finale vermenigvuldiging.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalpatrone bemeester — elke vaardigheid in hierdie stel, van patrone uitbrei tot multi-stap-redenering.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met die meeste getalpatroon-vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae) — dieselfde afdeling-uitleg as Stelle 1-2, ander vrae/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Afdeling 1 — Brei die patroon uit (Maklik)
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n5, 14, 23, 32, __, __, __', checkMode: 'auto', options: ['32, 41, 50', '41, 50, 59', '42, 51, 60', '41, 50, 60'], correctIndex: 1, explanation: 'Reël: tel elke keer 9 by. 32+9=41, 41+9=50, 50+9=59. (32, 41, 50 herhaal die laaste gegewe term; 42, 51, 60 gebruik verkeerdelik tel 10 by; 41, 50, 60 kry die eerste twee reg maar gly op die derde.)' },
        { difficulty: 'Easy', question: 'Tel in 11e vanaf 4. Skryf die volgende 3 getalle:\n\n4, 15, 26, 37, __, __, __', checkMode: 'auto', options: ['37, 48, 59', '47, 58, 69', '48, 59, 70', '48, 58, 68'], correctIndex: 2, explanation: 'Reël: tel elke keer 11 by. 37+11=48, 48+11=59, 59+11=70. (37, 48, 59 herhaal die laaste gegewe term; 47, 58, 69 tel in 11e vanaf een te laag; 48, 58, 68 tel eers 11 by en verander dan na tel 10 by.)' },
        { difficulty: 'Easy', question: 'ʼn Patroon gaan 45, 41, 37, 33 en gaan dan op dieselfde manier voort. Wat is die volgende 3 getalle?', checkMode: 'auto', options: ['33, 29, 25', '29, 25, 21', '28, 24, 20', '29, 24, 19'], correctIndex: 1, explanation: 'Reël: trek elke keer 4 af. 33−4=29, 29−4=25, 25−4=21. (33, 29, 25 herhaal die laaste gegewe term; 28, 24, 20 trek 5 af in plaas van 4; 29, 24, 19 trek eers 4 af en verander dan na trek 5 af.)' },
        { difficulty: 'Easy-Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n99, 90, 81, 72, __, __, __', checkMode: 'auto', options: ['72, 63, 54', '63, 54, 45', '62, 53, 44', '63, 53, 43'], correctIndex: 1, explanation: 'Reël: trek elke keer 9 af. 72−9=63, 63−9=54, 54−9=45. (72, 63, 54 herhaal die laaste gegewe term; 62, 53, 44 trek 10 af in plaas van 9; 63, 53, 43 trek eers 9 af en verander dan na trek 10 af.)' },

        // Afdeling 2 — Ontbrekende getal in die middel (Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende getal:\n\n21, 18, __, 12, 9', checkMode: 'auto', options: ['12', '14', '15', '16'], correctIndex: 2, explanation: 'Reël: trek elke keer 3 af (18−21=−3, 9−12=−3). 18−3=15. Kontroleer: 15−3=12 ✓ (12 herhaal die term na die gaping; 14 en 16 kom van verkeerdelik 4 of 2 af te trek.)' },
        { difficulty: 'Medium', question: 'Vind die twee ontbrekende getalle:\n\n84, __, 60, __, 36', checkMode: 'auto', options: ['72, 48', '78, 42', '66, 54', '72, 54'], correctIndex: 0, explanation: 'Van 84 na 60 is ʼn afname van 24 oor 2 stappe, dus is elke stap 24÷2=12. Reël: trek elke keer 12 af. 84−12=72, 60−12=48. (78, 42 gebruik verkeerdelik ʼn stap van 6; 66, 54 gebruik verkeerdelik ʼn stap van 18; 72, 54 kry die eerste ontbrekende getal reg maar bereken die tweede verkeerd.)' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n100, 125, __, 175, 200', checkMode: 'auto', options: ['125', '145', '150', '155'], correctIndex: 2, explanation: 'Reël: tel elke keer 25 by. 125+25=150. Kontroleer: 150+25=175 ✓ (125 herhaal die term voor die gaping; 145 en 155 kom van verkeerdelik 20 of 30 by te tel.)' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n5, 10, __, 40, 80', checkMode: 'auto', options: ['15', '20', '25', '30'], correctIndex: 1, explanation: 'Dit is nie ʼn optelpatroon nie (10−5=5 maar 80−40=40). Kontroleer vermenigvuldiging: 5×2=10, 40×2=80. Reël: vermenigvuldig elke keer met 2. 10×2=20. Kontroleer: 20×2=40 ✓ (15 kom van verkeerdelik 5 by te tel; 25 en 30 kom van verkeerdelik ʼn optelreël aan te neem in plaas daarvan om vermenigvuldiging te kontroleer.)' },

        // Afdeling 3 — Inset/uitset-masjiene (Medium)
        { difficulty: 'Medium', question: 'Die reël is trek 7 af. Vind die uitsette vir insette 10, 15 en 20.', checkMode: 'auto', options: ['3, 8, 13', '17, 22, 27', '3, 6, 9', '3, 9, 15'], correctIndex: 0, explanation: '10−7=3, 15−7=8, 20−7=13. (17, 22, 27 tel per ongeluk 7 by in plaas daarvan om af te trek; 3, 6, 9 kry die eerste uitset reg maar trek dan onbestendig af; 3, 9, 15 kry die eerste uitset reg maar tel dan by in plaas daarvan om af te trek vir die res.)' },
        { difficulty: 'Medium', question: 'Vind die reël: inset 8 → uitset 2, inset 16 → uitset 10, inset 24 → uitset 18. Wat is die reël?', checkMode: 'auto', options: ['Trek 6 af', 'Tel 6 by', 'Trek 8 af', 'Deel deur 4'], correctIndex: 0, explanation: '8−2=6, 16−10=6, 24−18=6 — elke uitset is 6 minder as die inset. Reël: Trek 6 af. (Tel 6 by gaan heeltemal die verkeerde rigting; Trek 8 af werk net vir die eerste paar (8→0, nie 2 nie) maar nie vir die ander nie; Deel deur 4 werk vir geen paar nie, bv. 8÷4=2 per toeval maar 16÷4=4≠10.)' },
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 5. Die uitset is 45. Wat is die inset?', checkMode: 'auto', options: ['40', '50', '9', '5'], correctIndex: 2, explanation: 'Gebruik die inverse bewerking (deel deur 5) op die uitset. 45÷5=9. Kontroleer: 9×5=45 ✓ (40 trek per ongeluk 5 van 45 af in plaas daarvan om te deel; 50 tel per ongeluk 5 by; 5 verwar die inset met die reël se vermenigvuldiger self.)' },
        { difficulty: 'Medium', question: 'Die reël is tel 8 by. Voltooi die tabel:\n\nInset: 3, 6, 9, 12\nUitset: ?, ?, ?, ?', checkMode: 'auto', options: ['11, 14, 17, 20', '5, 8, 11, 14', '11, 13, 15, 17', '3, 6, 9, 12'], correctIndex: 0, explanation: '3+8=11, 6+8=14, 9+8=17, 12+8=20. (5, 8, 11, 14 trek per ongeluk 8 af in plaas daarvan om by te tel; 11, 13, 15, 17 kry die eerste uitset reg maar tel dan onbestendig by; 3, 6, 9, 12 herhaal die insette in plaas daarvan om die reël toe te pas.)' },

        // Afdeling 4 — Werklike-lewe-woordprobleme (Medium)
        { difficulty: 'Medium', question: 'Sipho lees elke dag 8 bladsye. Hoeveel bladsye het hy altesaam teen dag 5 gelees?', checkMode: 'auto', options: ['32 bladsye', '48 bladsye', '35 bladsye', '40 bladsye'], correctIndex: 3, explanation: 'Die patroon is 8, 16, 24, 32, 40 (tel elke dag 8 by). Dag 5 = 8×5 = 40 bladsye. (32 bladsye = 8×4, een dag te min; 48 bladsye = 8×6, een dag te veel; 35 bladsye kom van ʼn rekenfout.)' },
        { difficulty: 'Medium', question: 'ʼn Teëlpatroon begin met 5 teëls en voeg 5 teëls by vir elke nuwe vorm. Hoeveel teëls is in die 6de vorm?', checkMode: 'auto', options: ['25 teëls', '35 teëls', '24 teëls', '30 teëls'], correctIndex: 3, explanation: 'Die patroon is 5, 10, 15, 20, 25, 30 (veelvoude van 5). 6de vorm = 5×6 = 30 teëls. (25 teëls = 5×5, een vorm te min; 35 teëls = 5×7, een vorm te veel; 24 teëls kom van ʼn rekenfout.)' },
        { difficulty: 'Medium', question: 'Hoeveel betaal ʼn geleentheid-organiseerder altesaam vir kaartjienommering as die drukker R50 kos om op te stel plus R2 per kaartjie, vir ʼn bestelling van 20 kaartjies?', checkMode: 'auto', options: ['R40', 'R52', 'R70', 'R90'], correctIndex: 3, explanation: 'Opstelfooi = R50. 20 kaartjies = 20×R2 = R40. Totaal = 50+40 = R90. (R40 vergeet om die R50-opstelfooi by te tel; R52 vergeet om die R2 met die aantal kaartjies te vermenigvuldig; R70 gebruik verkeerdelik net 10 kaartjies wanneer die kaartjiekoste bereken word.)' },
        { difficulty: 'Medium', question: 'ʼn Stapel stoele groei met 6 stoele elke keer ʼn nuwe stapel bygevoeg word. As die eerste stapel 6 stoele het, hoeveel minute na die begin is die 5de stapel klaar as elke stapel 3 minute neem om te bou?', checkMode: 'auto', options: ['18 minute', '12 minute', '9 minute', '15 minute'], correctIndex: 3, explanation: 'Elke stapel neem 3 minute, en die 5de stapel is klaar nadat 5 stapels gebou is. 5×3=15 minute na die begin. (18 minute = 6×3, en tel een stapel te veel; 12 minute = 4×3, een stapel te min; 9 minute = 3×3, en tel net 3 stapels.)' },

        // Afdeling 5 — Redenering, foutopsporing & regverdiging (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon neem toe: 8, 20, 32, 44, 56. ʼn Leerder beweer die reël is "tel 10 by". Watter stelling evalueer hierdie bewering korrek?', checkMode: 'auto', options: ['Die leerder is korrek — die reël is tel 10 by.', 'Die leerder is verkeerd — die werklike reël is tel 12 by.', 'Die leerder is verkeerd — die werklike reël is tel 11 by.', 'Die leerder is korrek, maar net vir die eerste twee terme.'], correctIndex: 1, explanation: '20−8=12, 32−20=12, 44−32=12, 56−44=12 — die verskil is altyd 12, nie 10 nie. Die leerder is verkeerd: die werklike reël is tel 12 by. (Tel 11 by stem met geen opeenvolgende paar ooreen nie; om korrektheid vir die eerste twee terme te beweer is ook verkeerd aangesien 20−8=12, nie 10 nie.)' },
        { difficulty: 'Medium-Hard', question: 'Patroon A begin by 3 en volg die reël vermenigvuldig met 2. Patroon B begin by 3 en volg die reël tel 8 by. Watter patroon het die groter 5de term?', checkMode: 'auto', options: ['Patroon A', 'Patroon B', 'Albei patrone het dieselfde 5de term', 'Patroon B, omdat optelling betroubaarder is as vermenigvuldiging'], correctIndex: 0, explanation: 'Patroon A: 3, 6, 12, 24, 48 — 5de term is 48. Patroon B: 3, 11, 19, 27, 35 — 5de term is 35. 48>35, dus het Patroon A die groter 5de term. Om herhaaldelik te vermenigvuldig groei uiteindelik vinniger as om ʼn vaste bedrag by te tel. (Hulle is nie gelyk nie, en daar is geen reël wat sê dat optelling inherent betroubaarder is as vermenigvuldiging nie.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vriend kyk net na die eerste paar getalle in ʼn reeks en sê toe hy weet die reël vir die hele patroon. Watter stelling verduidelik die beste waarom dit riskant is, en wat ʼn beter benadering is?', checkMode: 'auto', options: ['Dit is net riskant as die reeks meer as 10 terme het; vir korter reekse is dit altyd genoeg om net die eerste paar te kontroleer.', 'Dit is nie eintlik riskant nie, aangesien getalpatrone altyd net een moontlike reël kan hê.', 'Dit is riskant, so in plaas daarvan om enige pare te kontroleer, moet jy net die volgende term direk raai.', 'Dit is riskant omdat twee verskillende reëls toevallig by die eerste paar kan ooreenstem; ʼn beter manier is om die reël teen elke opeenvolgende paar in die reeks te toets.'], correctIndex: 3, explanation: 'Om net na een paar getalle te kyk kan misleidend wees, want twee verskillende reëls kan toevallig dieselfde resultaat vir net een stap gee. ʼn Beter manier is om die reël teen elke opeenvolgende paar terme te toets — as dieselfde reël vir almal werk, kan jy seker wees dit is korrek. (Die lengte van die reeks verander nie hierdie risiko nie; meer as een reël kan wel by ʼn kort stukkie data pas; en om die volgende term te raai sonder om te kontroleer is selfs minder betroubaar.)' },

        // Afdeling 6 — Multi-stap / nde-term-kroon (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Patroon het die reël "tel 7 by" en sluit die getalle …, 38, 45, 52 in. Watter getal kom net voor 38 in die patroon?', checkMode: 'auto', options: ['45', '24', '31', '38'], correctIndex: 2, explanation: 'Gebruik die inverse reël (trek 7 af) om terugwaarts te werk. 38−7=31. (45 verwar voor en na, en herhaal eenvoudig die volgende term in die reeks; 24 trek 14 af in plaas van 7 — trek per ongeluk twee keer af; 38 herhaal eenvoudig die gegewe getal in plaas daarvan om terugwaarts te werk.)' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het getalpatrone bemeester — elke vaardigheid in hierdie stel, van patrone uitbrei tot multi-stap-redenering.' },
        { minScore: 15, message: 'Goeie werk! Jy is selfversekerd met die meeste getalpatroon-vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

}
