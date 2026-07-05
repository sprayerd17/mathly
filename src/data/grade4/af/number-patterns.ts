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

      diagramPlaceholder: 'Funksiemasjien-diagram wat ʼn inset-pyl toon wat in ʼn blokkie ingaan wat met die reël geëtiketteer is, met ʼn uitset-pyl wat aan die ander kant uitkom',
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

      diagramPlaceholder: 'Getallelyn van 0 tot 25 wat die patroon 0 5 10 15 20 toon met kolletjies en pyle geëtiketteer tel 5 by tussen elkeen',

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
    // STEL 1 — GRONDBEGINSELS: BREI DIE PATROON UIT (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondbeginsels',
      questions: [
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n4, 7, 10, 13, __, __, __', answer: '16, 19, 22', checkMode: 'auto', correctAnswer: '16,19,22', correctAnswers: ['16,19,22', '161922'], explanation: 'Reël: tel elke keer 3 by (7−4=3, 10−7=3, 13−10=3).\n13+3=16, 16+3=19, 19+3=22' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n10, 15, 20, 25, __, __, __', answer: '30, 35, 40', checkMode: 'auto', correctAnswer: '30,35,40', correctAnswers: ['30,35,40', '303540'], explanation: 'Reël: tel elke keer 5 by.\n25+5=30, 30+5=35, 35+5=40' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n6, 8, 10, 12, __, __, __', answer: '14, 16, 18', checkMode: 'auto', correctAnswer: '14,16,18', correctAnswers: ['14,16,18', '141618'], explanation: 'Reël: tel elke keer 2 by.\n12+2=14, 14+2=16, 16+2=18' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n20, 30, 40, 50, __, __, __', answer: '60, 70, 80', checkMode: 'auto', correctAnswer: '60,70,80', correctAnswers: ['60,70,80', '607080'], explanation: 'Reël: tel elke keer 10 by.\n50+10=60, 60+10=70, 70+10=80' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n8, 12, 16, 20, __, __, __', answer: '24, 28, 32', checkMode: 'auto', correctAnswer: '24,28,32', correctAnswers: ['24,28,32', '242832'], explanation: 'Reël: tel elke keer 4 by.\n20+4=24, 24+4=28, 28+4=32' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n3, 9, 15, 21, __, __, __', answer: '27, 33, 39', checkMode: 'auto', correctAnswer: '27,33,39', correctAnswers: ['27,33,39', '273339'], explanation: 'Reël: tel elke keer 6 by.\n21+6=27, 27+6=33, 33+6=39' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n5, 14, 23, 32, __, __, __', answer: '41, 50, 59', checkMode: 'auto', correctAnswer: '41,50,59', correctAnswers: ['41,50,59', '415059'], explanation: 'Reël: tel elke keer 9 by.\n32+9=41, 41+9=50, 50+9=59' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n6, 13, 20, 27, __, __, __', answer: '34, 41, 48', checkMode: 'auto', correctAnswer: '34,41,48', correctAnswers: ['34,41,48', '344148'], explanation: 'Reël: tel elke keer 7 by.\n27+7=34, 34+7=41, 41+7=48' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n9, 17, 25, 33, __, __, __', answer: '41, 49, 57', checkMode: 'auto', correctAnswer: '41,49,57', correctAnswers: ['41,49,57', '414957'], explanation: 'Reël: tel elke keer 8 by.\n33+8=41, 41+8=49, 49+8=57' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n4, 15, 26, 37, __, __, __', answer: '48, 59, 70', checkMode: 'auto', correctAnswer: '48,59,70', correctAnswers: ['48,59,70', '485970'], explanation: 'Reël: tel elke keer 11 by.\n37+11=48, 48+11=59, 59+11=70' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n7, 19, 31, 43, __, __, __', answer: '55, 67, 79', checkMode: 'auto', correctAnswer: '55,67,79', correctAnswers: ['55,67,79', '556779'], explanation: 'Reël: tel elke keer 12 by.\n43+12=55, 55+12=67, 67+12=79' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n5, 20, 35, 50, __, __, __', answer: '65, 80, 95', checkMode: 'auto', correctAnswer: '65,80,95', correctAnswers: ['65,80,95', '658095'], explanation: 'Reël: tel elke keer 15 by.\n50+15=65, 65+15=80, 80+15=95' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n10, 30, 50, 70, __, __, __', answer: '90, 110, 130', checkMode: 'auto', correctAnswer: '90,110,130', correctAnswers: ['90,110,130', '90110130'], explanation: 'Reël: tel elke keer 20 by.\n70+20=90, 90+20=110, 110+20=130' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n0, 25, 50, 75, __, __, __', answer: '100, 125, 150', checkMode: 'auto', correctAnswer: '100,125,150', correctAnswers: ['100,125,150', '100125150'], explanation: 'Reël: tel elke keer 25 by.\n75+25=100, 100+25=125, 125+25=150' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n50, 100, 150, 200, __, __, __', answer: '250, 300, 350', checkMode: 'auto', correctAnswer: '250,300,350', correctAnswers: ['250,300,350', '250300350'], explanation: 'Reël: tel elke keer 50 by.\n200+50=250, 250+50=300, 300+50=350' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n30, 28, 26, 24, __, __, __', answer: '22, 20, 18', checkMode: 'auto', correctAnswer: '22,20,18', correctAnswers: ['22,20,18', '222018'], explanation: 'Reël: trek elke keer 2 af.\n24−2=22, 22−2=20, 20−2=18' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n40, 37, 34, 31, __, __, __', answer: '28, 25, 22', checkMode: 'auto', correctAnswer: '28,25,22', correctAnswers: ['28,25,22', '282522'], explanation: 'Reël: trek elke keer 3 af.\n31−3=28, 28−3=25, 25−3=22' },
        { difficulty: 'Easy', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n60, 55, 50, 45, __, __, __', answer: '40, 35, 30', checkMode: 'auto', correctAnswer: '40,35,30', correctAnswers: ['40,35,30', '403530'], explanation: 'Reël: trek elke keer 5 af.\n45−5=40, 40−5=35, 35−5=30' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n45, 41, 37, 33, __, __, __', answer: '29, 25, 21', checkMode: 'auto', correctAnswer: '29,25,21', correctAnswers: ['29,25,21', '292521'], explanation: 'Reël: trek elke keer 4 af.\n33−4=29, 29−4=25, 25−4=21' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n100, 90, 80, 70, __, __, __', answer: '60, 50, 40', checkMode: 'auto', correctAnswer: '60,50,40', correctAnswers: ['60,50,40', '605040'], explanation: 'Reël: trek elke keer 10 af.\n70−10=60, 60−10=50, 50−10=40' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n70, 64, 58, 52, __, __, __', answer: '46, 40, 34', checkMode: 'auto', correctAnswer: '46,40,34', correctAnswers: ['46,40,34', '464034'], explanation: 'Reël: trek elke keer 6 af.\n52−6=46, 46−6=40, 40−6=34' },
        { difficulty: 'Medium', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n90, 82, 74, 66, __, __, __', answer: '58, 50, 42', checkMode: 'auto', correctAnswer: '58,50,42', correctAnswers: ['58,50,42', '585042'], explanation: 'Reël: trek elke keer 8 af.\n66−8=58, 58−8=50, 50−8=42' },
        { difficulty: 'Hard', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n99, 90, 81, 72, __, __, __', answer: '63, 54, 45', checkMode: 'auto', correctAnswer: '63,54,45', correctAnswers: ['63,54,45', '635445'], explanation: 'Reël: trek elke keer 9 af.\n72−9=63, 63−9=54, 54−9=45' },
        { difficulty: 'Hard', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n200, 180, 160, 140, __, __, __', answer: '120, 100, 80', checkMode: 'auto', correctAnswer: '120,100,80', correctAnswers: ['120,100,80', '12010080'], explanation: 'Reël: trek elke keer 20 af.\n140−20=120, 120−20=100, 100−20=80' },
        { difficulty: 'Hard', question: 'Vind die reël en skryf die volgende 3 getalle:\n\n300, 275, 250, 225, __, __, __', answer: '200, 175, 150', checkMode: 'auto', correctAnswer: '200,175,150', correctAnswers: ['200,175,150', '200175150'], explanation: 'Reël: trek elke keer 25 af.\n225−25=200, 200−25=175, 175−25=150' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die uitbrei van getalpatrone bemeester.' },
        { minScore: 19, message: 'Goeie werk! Jy is selfversekerd met reëls vind en patrone uitbrei — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die identifisering van reëls weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — ONTBREKENDE GETALLE EN DIE REËL VIND (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Ontbrekende Getalle en Reëls',
      questions: [
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n10, 15, __, 25, 30', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20'], explanation: 'Reël: tel elke keer 5 by (15−10=5, 30−25=5).\n15+5=20\nKontroleer: 20+5=25 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n4, 8, __, 16, 20', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Reël: tel elke keer 4 by.\n8+4=12\nKontroleer: 12+4=16 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n6, 12, __, 24, 30', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Reël: tel elke keer 6 by.\n12+6=18\nKontroleer: 18+6=24 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n7, 14, __, 28, 35', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21'], explanation: 'Reël: tel elke keer 7 by.\n14+7=21\nKontroleer: 21+7=28 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n9, 18, __, 36, 45', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: 'Reël: tel elke keer 9 by.\n18+9=27\nKontroleer: 27+9=36 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n3, 6, __, 12, 15', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Reël: tel elke keer 3 by.\n6+3=9\nKontroleer: 9+3=12 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n50, 45, __, 35, 30', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Reël: trek elke keer 5 af.\n45−5=40\nKontroleer: 40−5=35 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n100, 90, __, 70, 60', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80'], explanation: 'Reël: trek elke keer 10 af.\n90−10=80\nKontroleer: 80−10=70 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n80, 70, __, 50, 40', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60'], explanation: 'Reël: trek elke keer 10 af.\n70−10=60\nKontroleer: 60−10=50 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n21, 18, __, 12, 9', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Reël: trek elke keer 3 af.\n18−3=15\nKontroleer: 15−3=12 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n2, 4, __, 8, 10', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Reël: tel elke keer 2 by.\n4+2=6\nKontroleer: 6+2=8 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n5, 10, __, 20, 25', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Reël: tel elke keer 5 by.\n10+5=15\nKontroleer: 15+5=20 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n12, 24, __, 48, 60', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Reël: tel elke keer 12 by.\n24+12=36\nKontroleer: 36+12=48 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n11, 22, __, 44, 55', answer: '33', checkMode: 'auto', correctAnswer: '33', correctAnswers: ['33'], explanation: 'Reël: tel elke keer 11 by.\n22+11=33\nKontroleer: 33+11=44 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n90, 80, __, 60, 50', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70'], explanation: 'Reël: trek elke keer 10 af.\n80−10=70\nKontroleer: 70−10=60 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende getal:\n\n63, 54, __, 36, 27', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: 'Reël: trek elke keer 9 af.\n54−9=45\nKontroleer: 45−9=36 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende getal:\n\n1, 2, __, 8, 16', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Dit is nie ʼn optelpatroon nie (2−1=1 maar 16−8=8). Kontroleer vermenigvuldiging: 1×2=2, 8×2=16.\nReël: vermenigvuldig elke keer met 2.\n2×2=4\nKontroleer: 4×2=8 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende getal:\n\n2, 6, __, 54, 162', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Reël: vermenigvuldig elke keer met 3 (2×3=6, 54×3=162).\n6×3=18\nKontroleer: 18×3=54 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende getal:\n\n5, 10, __, 40, 80', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20'], explanation: 'Reël: vermenigvuldig elke keer met 2 (5×2=10, 40×2=80).\n10×2=20\nKontroleer: 20×2=40 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n200, 180, __, 140, 120', answer: '160', checkMode: 'auto', correctAnswer: '160', correctAnswers: ['160'], explanation: 'Reël: trek elke keer 20 af.\n180−20=160\nKontroleer: 160−20=140 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n15, 30, __, 60, 75', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: 'Reël: tel elke keer 15 by.\n30+15=45\nKontroleer: 45+15=60 ✓' },
        { difficulty: 'Easy', question: 'Vind die ontbrekende getal:\n\n8, 16, __, 32, 40', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'Reël: tel elke keer 8 by.\n16+8=24\nKontroleer: 24+8=32 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n40, 36, __, 28, 24', answer: '32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32'], explanation: 'Reël: trek elke keer 4 af.\n36−4=32\nKontroleer: 32−4=28 ✓' },
        { difficulty: 'Hard', question: 'Vind die ontbrekende getal:\n\n17, 26, __, 44, 53', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35'], explanation: 'Reël: tel elke keer 9 by.\n26+9=35\nKontroleer: 35+9=44 ✓' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal:\n\n100, 125, __, 175, 200', answer: '150', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150'], explanation: 'Reël: tel elke keer 25 by.\n125+25=150\nKontroleer: 150+25=175 ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het die vind van ontbrekende getalle en die identifisering van reëls bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van ontbrekende getalle weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — INSET/UITSET-TABELLE EN WERKLIKE-LEWE-PATRONE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Inset/Uitset en Werklike-Lewe-Patrone',
      questions: [
        { difficulty: 'Easy', question: 'Die reël is tel 6 by. Vind die uitsette vir insette 4, 7 en 10.', answer: '10, 13, 16', checkMode: 'auto', correctAnswer: '10,13,16', correctAnswers: ['10,13,16', '101316'], explanation: '4+6=10, 7+6=13, 10+6=16' },
        { difficulty: 'Easy', question: 'Die reël is tel 9 by. Vind die uitsette vir insette 2, 5 en 8.', answer: '11, 14, 17', checkMode: 'auto', correctAnswer: '11,14,17', correctAnswers: ['11,14,17', '111417'], explanation: '2+9=11, 5+9=14, 8+9=17' },
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 4. Vind die uitsette vir insette 2, 5 en 8.', answer: '8, 20, 32', checkMode: 'auto', correctAnswer: '8,20,32', correctAnswers: ['8,20,32', '82032'], explanation: '2×4=8, 5×4=20, 8×4=32' },
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 6. Vind die uitsette vir insette 1, 3 en 5.', answer: '6, 18, 30', checkMode: 'auto', correctAnswer: '6,18,30', correctAnswers: ['6,18,30', '61830'], explanation: '1×6=6, 3×6=18, 5×6=30' },
        { difficulty: 'Medium', question: 'Die reël is trek 7 af. Vind die uitsette vir insette 10, 15 en 20.', answer: '3, 8, 13', checkMode: 'auto', correctAnswer: '3,8,13', correctAnswers: ['3,8,13', '3813'], explanation: '10−7=3, 15−7=8, 20−7=13' },
        { difficulty: 'Medium', question: 'Die reël is trek 12 af. Vind die uitsette vir insette 20, 30 en 40.', answer: '8, 18, 28', checkMode: 'auto', correctAnswer: '8,18,28', correctAnswers: ['8,18,28', '81828'], explanation: '20−12=8, 30−12=18, 40−12=28' },
        { difficulty: 'Medium', question: 'Vind die reël: inset 3 → uitset 9, inset 6 → uitset 18, inset 9 → uitset 27. Wat is die reël?', answer: 'Vermenigvuldig met 3', checkMode: 'auto', correctAnswer: 'Vermenigvuldig met 3', correctAnswers: ['Vermenigvuldig met 3', 'vermenigvuldig met 3', 'vermenigvuldigmet3', 'keer 3', 'keer3', 'x3', '×3'], explanation: '3×3=9, 6×3=18, 9×3=27 — elke uitset is 3 keer die inset.\nReël: Vermenigvuldig met 3' },
        { difficulty: 'Medium', question: 'Vind die reël: inset 5 → uitset 11, inset 10 → uitset 16, inset 15 → uitset 21. Wat is die reël?', answer: 'Tel 6 by', checkMode: 'auto', correctAnswer: 'Tel 6 by', correctAnswers: ['Tel 6 by', 'tel 6 by', 'tel6by', '+6', 'plus 6', 'plus6'], explanation: '11−5=6, 16−10=6, 21−15=6 — die verskil is altyd 6.\nReël: Tel 6 by' },
        { difficulty: 'Medium', question: 'Vind die reël: inset 8 → uitset 2, inset 16 → uitset 10, inset 24 → uitset 18. Wat is die reël?', answer: 'Trek 6 af', checkMode: 'auto', correctAnswer: 'Trek 6 af', correctAnswers: ['Trek 6 af', 'trek 6 af', 'trek6af', 'minus 6', 'minus6', '-6'], explanation: '8−2=6, 16−10=6, 24−18=6 — elke uitset is 6 minder as die inset.\nReël: Trek 6 af' },
        { difficulty: 'Medium', question: 'Die reël is tel 14 by. Die uitset is 30. Wat is die inset?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'Gebruik die inverse bewerking (trek 14 af) op die uitset.\n30−14=16\nKontroleer: 16+14=30 ✓' },
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 7. Die uitset is 63. Wat is die inset?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Gebruik die inverse bewerking (deel deur 7) op die uitset.\n63÷7=9\nKontroleer: 9×7=63 ✓' },
        { difficulty: 'Hard', question: 'Die reël is trek 18 af. Die uitset is 12. Wat is die inset?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30'], explanation: 'Gebruik die inverse bewerking (tel 18 by) op die uitset.\n12+18=30\nKontroleer: 30−18=12 ✓' },
        { difficulty: 'Medium', question: 'Die reël is vermenigvuldig met 5. Die uitset is 45. Wat is die inset?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9'], explanation: 'Gebruik die inverse bewerking (deel deur 5) op die uitset.\n45÷5=9\nKontroleer: 9×5=45 ✓' },
        { difficulty: 'Hard', question: 'Die reël is tel 23 by. Die uitset is 50. Wat is die inset?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: 'Gebruik die inverse bewerking (trek 23 af) op die uitset.\n50−23=27\nKontroleer: 27+23=50 ✓' },
        { difficulty: 'Hard', question: 'Die reël is trek 9 af. Die uitset is 31. Wat is die inset?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Gebruik die inverse bewerking (tel 9 by) op die uitset.\n31+9=40\nKontroleer: 40−9=31 ✓' },
        { difficulty: 'Easy', question: 'Thabo spaar elke week R12. Hoeveel spaar hy in week 6 alleen?', answer: 'R72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', 'R72'], explanation: 'Die patroon is 12, 24, 36, 48, 60, 72 (tel elke week 12 by).\nWeek 6 = 12 × 6 = R72' },
        { difficulty: 'Medium', question: 'Sipho lees elke dag 8 bladsye. Hoeveel bladsye lees hy op dag 5?', answer: '40 bladsye', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40bladsye', '40 bladsye'], explanation: 'Die patroon is 8, 16, 24, 32, 40 (tel elke dag 8 by).\nDag 5 = 8 × 5 = 40 bladsye' },
        { difficulty: 'Easy', question: 'Eiers word 6 per boks verpak. Hoeveel eiers is in 9 bokse?', answer: '54 eiers', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54eiers', '54 eiers'], explanation: 'Die patroon is 6, 12, 18 … (veelvoude van 6).\n9 bokse = 6 × 9 = 54 eiers' },
        { difficulty: 'Medium', question: 'Lerato haal elke 15 minute ʼn bus vanaf 07:00. Hoeveel minute na 07:00 kom die 4de bus aan?', answer: '45 minute', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45minute', '45 minute'], explanation: 'Bustye na 07:00: 1ste = 0 min, 2de = 15 min, 3de = 30 min, 4de = 45 min.\nReël: tel elke keer 15 minute by. 4de bus = 15 × 3 = 45 minute na 07:00.' },
        { difficulty: 'Medium', question: 'Amahle het 10 plakkers. Sy voeg elke dag nog 5 plakkers by. Hoeveel plakkers het sy na 6 dae (dag 1 ingesluit)?', answer: '35 plakkers', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35plakkers', '35 plakkers'], explanation: 'Die patroon is 10, 15, 20, 25, 30, 35 (tel elke dag 5 by, begin by 10).\nNa 6 dae: 10 + 5 × 5 = 35 plakkers' },
        { difficulty: 'Easy', question: 'Koppies word 3 per stapel gestapel. Hoeveel koppies is in 8 stapels?', answer: '24 koppies', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24koppies', '24 koppies'], explanation: 'Die patroon is 3, 6, 9 … (veelvoude van 3).\n8 stapels = 3 × 8 = 24 koppies' },
        { difficulty: 'Medium', question: 'ʼn Teëlpatroon begin met 5 teëls en voeg 5 teëls by vir elke nuwe vorm. Hoeveel teëls is in die 6de vorm?', answer: '30 teëls', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30teëls', '30 teëls'], explanation: 'Die patroon is 5, 10, 15, 20, 25, 30 (veelvoude van 5).\n6de vorm = 5 × 6 = 30 teëls' },
        { difficulty: 'Hard', question: 'ʼn Parkeerterrein hef R10 vir die eerste uur en R6 vir elke ekstra uur. Hoeveel kos 3 uur parkering altesaam?', answer: 'R22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', 'R22'], explanation: 'Eerste uur = R10. Twee ekstra ure = 2 × R6 = R12.\nTotaal = 10 + 12 = R22' },
        { difficulty: 'Medium', question: 'Stoele word 6 per stapel gestapel. Hoeveel stoele is in 5 stapels?', answer: '30 stoele', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30stoele', '30 stoele'], explanation: 'Die patroon is 6, 12, 18, 24, 30 (veelvoude van 6).\n5 stapels = 6 × 5 = 30 stoele' },
        { difficulty: 'Medium', question: 'Bome word 5 per ry geplant. Hoeveel bome is in 9 rye?', answer: '45 bome', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45bome', '45 bome'], explanation: 'Die patroon is 5, 10, 15 … (veelvoude van 5).\n9 rye = 5 × 9 = 45 bome' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het inset/uitset-reëls en werklike-lewe-getalpatrone bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inset/uitset-masjiene en woordprobleme weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MULTI-STAP EN GEKOMBINEERDE PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Multi-Stap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'ʼn Patroon begin by 5 en volg die reël tel 5 by. Wat is die 10de getal in die patroon?', answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50'], explanation: 'Die patroon is 5, 10, 15, 20, 25, 30, 35, 40, 45, 50 (veelvoude van 5).\nDie 10de getal = 5 × 10 = 50' },
        { difficulty: 'Medium', question: 'ʼn Patroon begin by 6 en volg die reël tel 4 by. Wat is die 8ste getal in die patroon?', answer: '34', checkMode: 'auto', correctAnswer: '34', correctAnswers: ['34'], explanation: 'Skryf die patroon uit: 6, 10, 14, 18, 22, 26, 30, 34.\nDie 8ste getal is 34.' },
        { difficulty: 'Hard', question: 'Begin met die getal 5. Pas eers die reël "tel 3 by" toe, en pas dan die reël "vermenigvuldig met 2" op daardie resultaat toe. Wat is die finale antwoord?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'Stap 1: 5 + 3 = 8\nStap 2: 8 × 2 = 16\nFinale antwoord: 16' },
        { difficulty: 'Medium', question: 'Vind die ontbrekende getal en verduidelik die reël:\n\n8, 16, 24, __, 40', answer: '32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32'], explanation: 'Reël: tel elke keer 8 by (16−8=8, 40−32=8).\n24+8=32\nKontroleer: 32+8=40 ✓' },
        { difficulty: 'Medium', question: 'In ʼn kolletjiepatroon het ry n drie keer soveel kolletjies as sy rynommer. Hoeveel kolletjies is in ry 6?', answer: '18 kolletjies', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18kolletjies', '18 kolletjies'], explanation: 'Rynommer × 3: ry 6 = 6 × 3 = 18 kolletjies' },
        { difficulty: 'Hard', question: 'Amahle se patroon begin by 100 en volg die reël trek 15 af. Skryf die eerste 6 getalle in haar patroon.', answer: '100, 85, 70, 55, 40, 25', checkMode: 'auto', correctAnswer: '100,85,70,55,40,25', correctAnswers: ['100,85,70,55,40,25', '1008570554025'], explanation: '100, 100−15=85, 85−15=70, 70−15=55, 55−15=40, 40−15=25\nPatroon: 100, 85, 70, 55, 40, 25' },
        { difficulty: 'Medium', question: 'Die reël vir ʼn tabel is vermenigvuldig met 4. Voltooi die uitsette vir insette 1 tot 6.', answer: '4, 8, 12, 16, 20, 24', checkMode: 'auto', correctAnswer: '4,8,12,16,20,24', correctAnswers: ['4,8,12,16,20,24', '4, 8, 12, 16, 20, 24', '4812162024'], explanation: '1×4=4, 2×4=8, 3×4=12, 4×4=16, 5×4=20, 6×4=24' },
        { difficulty: 'Hard', question: 'Sipho spaar geld volgens die patroon R20, R40, R60, R80, R100 oor 5 weke. Wat is die totale bedrag wat hy altesaam gespaar het na al 5 weke?', answer: 'R300', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300', 'R300'], explanation: 'Tel al 5 bedrae bymekaar: 20 + 40 + 60 + 80 + 100 = R300' },
        { difficulty: 'Medium', question: 'ʼn Teëlpatroon begin met 4 teëls en voeg 3 teëls by vir elke nuwe vorm. Hoeveel teëls is in die 7de vorm?', answer: '22 teëls', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22teëls', '22 teëls'], explanation: 'Patroon: 4, 7, 10, 13, 16, 19, 22 (tel elke keer 3 by, 7 vorms altesaam).\n7de vorm het 22 teëls.' },
        { difficulty: 'Hard', question: 'ʼn Patroon met die reël "tel 9 by" sluit die getalle …, 45, 54, 63 in. Watter getal kom net voor 45 in die patroon?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Gebruik die inverse reël (trek 9 af) om terugwaarts te werk.\n45−9=36' },
        { difficulty: 'Medium', question: 'ʼn Patroon tel in 25e vanaf 0: 0, 25, 50, 75, 100 … Is 175 ʼn getal in hierdie patroon? Antwoord ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: '175 ÷ 25 = 7 presies, sonder oorskot, dus is 175 die 8ste getal in die patroon (0 is die 1ste).\nAntwoord: Ja' },
        { difficulty: 'Medium', question: 'Lerato rangskik blomme in vase volgens die patroon 3, 6, 9, 12, 15 (een vaas vir elke getal). Wat is die totale aantal blomme in al 5 vase?', answer: '45 blomme', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45blomme', '45 blomme'], explanation: 'Tel al 5 bedrae bymekaar: 3 + 6 + 9 + 12 + 15 = 45 blomme' },
        { difficulty: 'Hard', question: 'ʼn Patroon begin by 3 en volg die reël tel 4 by. Wat is die 12de getal in die patroon?', answer: '47', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47'], explanation: 'Vanaf term 1 (wat 3 is), tel jy 4 altesaam 11 keer by om term 12 te bereik.\n3 + 4 × 11 = 3 + 44 = 47' },
        { difficulty: 'Hard', question: 'ʼn Patroon begin by 5 en volg die reël tel 10 by. Wat is die 15de getal in die patroon?', answer: '145', checkMode: 'auto', correctAnswer: '145', correctAnswers: ['145'], explanation: 'Vanaf term 1 (wat 5 is), tel jy 10 altesaam 14 keer by om term 15 te bereik.\n5 + 10 × 14 = 5 + 140 = 145' },
        { difficulty: 'Medium', question: 'ʼn Patroon begin by 7 en volg die reël tel 6 by. Wat is die 9de getal in die patroon?', answer: '55', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55'], explanation: 'Vanaf term 1 (wat 7 is), tel jy 6 altesaam 8 keer by om term 9 te bereik.\n7 + 6 × 8 = 7 + 48 = 55' },
        { difficulty: 'Hard', question: 'ʼn Patroon begin by 2 en volg die reël vermenigvuldig met 3. Wat is die 5de getal in die patroon?', answer: '162', checkMode: 'auto', correctAnswer: '162', correctAnswers: ['162'], explanation: 'Patroon: 2, 6, 18, 54, 162 (vermenigvuldig elke keer met 3).\nDie 5de getal is 162.' },
        { difficulty: 'Hard', question: 'ʼn Patroon begin by 1 en volg die reël vermenigvuldig met 2. Wat is die 9de getal in die patroon?', answer: '256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256'], explanation: 'Patroon: 1, 2, 4, 8, 16, 32, 64, 128, 256 (vermenigvuldig elke keer met 2, 9 terme).\nDie 9de getal is 256.' },
        { difficulty: 'Medium', checkMode: 'auto', question: 'Vind die ontbrekende getalle en die reël:\n\n90, __, 70, __, 50\n\na) Wat is die reël?\nb) Wat is die twee ontbrekende getalle?', answer: 'a) Trek 10 af    b) 80, 60', parts: [
          { label: 'a) Wat is die reël?', correctAnswer: 'Trek 10 af', correctAnswers: ['Trek 10 af', 'trek 10 af', 'trek10af', 'minus 10', 'minus10', '-10'], explanation: 'Van 90 na 70 is ʼn afname van 20 oor 2 stappe, dus is elke stap 20 ÷ 2 = 10.\nReël: Trek 10 af' },
          { label: 'b) Wat is die twee ontbrekende getalle?', correctAnswer: '80,60', correctAnswers: ['80,60', '8060'], explanation: '90−10=80, 70−10=60\nVolle reeks: 90, 80, 70, 60, 50' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon het die reël "vermenigvuldig met 2" en begin by 4. Thabo sê die 6de term is 24. Is hy korrek? Wat is die werklike 6de term?', answer: 'Nee, die werklike 6de term is 128', checkMode: 'auto', correctAnswer: '128', correctAnswers: ['128'], explanation: 'Patroon: 4, 8, 16, 32, 64, 128 (vermenigvuldig elke keer met 2).\nThabo het dalk elke keer 4 bygetel in plaas van vermenigvuldig. Die werklike 6de term is 128, nie 24 nie.' },
        { difficulty: 'Medium', question: 'ʼn Spaarpatroon is R15, R30, R45, R60 vir weke 1 tot 4. Wat is die reël, en hoeveel sou in week 7 gespaar word?', answer: 'Reël: tel R15 by    Week 7: R105', checkMode: 'auto', correctAnswer: '105', correctAnswers: ['105', 'R105'], explanation: 'Reël: tel elke week 15 by.\nWeek 7 = 15 × 7 = R105' },
        { difficulty: 'Hard', question: 'Verduidelik, in jou eie woorde, hoe jy kan bepaal of ʼn getalpatroon optelling/aftrekking of vermenigvuldiging as sy reël gebruik.', answer: 'As die verskil tussen opeenvolgende terme altyd dieselfde (konstant) is, is die reël optelling of aftrekking. As die verskil bly verander maar elke term is altyd die vorige term keer dieselfde getal, is die reël vermenigvuldiging. Jy kan toets deur opeenvolgende terme te deel — as die verhouding altyd dieselfde is, is dit ʼn vermenigvuldigingspatroon.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Beskryf die reël vir hierdie patroon en verduidelik hoe jy dit gevind het: 96, 84, 72, 60, 48', answer: 'Die reël is trek 12 af elke keer. Ek het dit gevind deur die verskil tussen opeenvolgende terme te bereken: 96−84=12, 84−72=12, 72−60=12, 60−48=12. Aangesien die verskil altyd 12 is en die getalle kleiner word, is die reël trek 12 af.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Patroon van vierkante gebruik 4 vuurhoutjies vir die 1ste vierkant, en 3 meer vuurhoutjies vir elke nuwe vierkant wat in ʼn ry bygevoeg word. Hoeveel vuurhoutjies word benodig vir 6 vierkante in ʼn ry?', answer: '19 vuurhoutjies', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19vuurhoutjies', '19 vuurhoutjies'], explanation: 'Patroon: 4, 7, 10, 13, 16, 19 (tel elke keer 3 by, 6 terme).\n6 vierkante benodig 19 vuurhoutjies.' },
        { difficulty: 'Hard', question: 'Skep jou eie toenemende getalpatroon met ten minste 6 getalle, beskryf dan die reël en gee een werklike-lewe-voorbeeld waar hierdie patroon kan voorkom.', answer: 'Aanvaar enige geldige patroon met ʼn duidelike, konsekwent toegepaste reël (bv. ʼn beginwaarde en optel/aftrek/vermenigvuldig met ʼn vaste bedrag), ten minste 6 terme, ʼn duidelik gestelde reël, en ʼn realistiese werklike-lewe-verband (bv. muntstukke tel, geld spaar, stoele in rye).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Patroon begin 12, 24, 36, 48 … Wat is die volgende 2 getalle, en wat is die 10de getal in die patroon?', answer: 'Volgende 2: 60, 72    10de getal: 120', checkMode: 'auto', correctAnswer: '60,72,120', correctAnswers: ['60,72,120', '6072120'], explanation: 'Reël: tel elke keer 12 by (veelvoude van 12).\nVolgende 2 getalle: 48+12=60, 60+12=72.\n10de getal = 12 × 10 = 120' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het multi-stap en gekombineerde getalpatroon-probleme bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die multi-stap-uitgewerkte voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

}
