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
    },
  ],

  topicPractice: [

    // ── AFDELING 1: WAT IS ʼN GETALPATROON? ──────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skryf die reël en die volgende 3 getalle:\n\n' +
        '2, 4, 6, 8, __, __, __\n\n' +
        'a) Wat is die reël?\n' +
        'b) Skryf die volgende 3 getalle.',
      answer: 'a) Tel 2 by    b) 10, 12, 14',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Tel 2 by',
          correctAnswers: ['Tel 2 by', 'tel 2 by', '+2', 'plus 2', 'plus2', 'tel2by'],
          explanation:
            'Vind die verskil tussen opeenvolgende terme: 4 − 2 = 2, 6 − 4 = 2, 8 − 6 = 2.\n' +
            'Die getalle word elke keer 2 groter.\n' +
            'Reël: Tel 2 by',
        },
        {
          label: 'b) Skryf die volgende 3 getalle',
          correctAnswer: '10,12,14',
          correctAnswers: ['10,12,14', '101214'],
          explanation:
            'Pas die reël (tel 2 by) nog drie keer toe:\n' +
            '8 + 2 = 10\n' +
            '10 + 2 = 12\n' +
            '12 + 2 = 14\n\n' +
            'Volgende 3 getalle: 10, 12, 14',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skryf die reël en die volgende 3 getalle:\n\n' +
        '75, 70, 65, 60, __, __, __\n\n' +
        'a) Wat is die reël?\n' +
        'b) Skryf die volgende 3 getalle.',
      answer: 'a) Trek 5 af    b) 55, 50, 45',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Trek 5 af',
          correctAnswers: [
            'Trek 5 af', 'trek 5 af', 'trek5af',
            'minus 5', 'minus5', '-5', 'haalweg5', 'haal weg 5',
          ],
          explanation:
            'Vind die verskil: 75 − 70 = 5, 70 − 65 = 5, 65 − 60 = 5.\n' +
            'Die getalle word elke keer 5 kleiner — dit is ʼn afnemende patroon.\n' +
            'Reël: Trek 5 af',
        },
        {
          label: 'b) Skryf die volgende 3 getalle',
          correctAnswer: '55,50,45',
          correctAnswers: ['55,50,45', '555045'],
          explanation:
            'Pas die reël (trek 5 af) nog drie keer toe:\n' +
            '60 − 5 = 55\n' +
            '55 − 5 = 50\n' +
            '50 − 5 = 45\n\n' +
            'Volgende 3 getalle: 55, 50, 45',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Thabo sê die volgende getal in hierdie patroon is 45:\n\n' +
        '5, 10, 20, 40, __, ...\n\n' +
        'a) Is Thabo korrek?\n' +
        'b) Wat is die werklike reël?\n' +
        'c) Wat is die volgende getal?',
      answer: 'a) Nee    b) Vermenigvuldig met 2    c) 80',
      parts: [
        {
          label: 'a) Is Thabo korrek?',
          correctAnswer: 'Nee',
          correctAnswers: ['Nee', 'nee', 'verkeerd', 'onwaar', 'incorrect'],
          explanation:
            'Thabo het dalk elke keer 5 bygetel (5, 10, 15, 20 …), maar kyk na die verskille:\n' +
            '10 − 5 = 5, 20 − 10 = 10, 40 − 20 = 20.\n' +
            'Die verskille is nie dieselfde nie, dus is dit nie ʼn optelpatroon nie.\n' +
            'Thabo is verkeerd.',
        },
        {
          label: 'b) Wat is die werklike reël?',
          correctAnswer: 'Vermenigvuldig met 2',
          correctAnswers: [
            'Vermenigvuldig met 2', 'vermenigvuldig met 2', 'vermenigvuldigmet2',
            'keer 2', 'keer2', 'x2', '×2', 'verdubbel',
          ],
          explanation:
            'Kontroleer vermenigvuldiging: 5 × 2 = 10, 10 × 2 = 20, 20 × 2 = 40.\n' +
            'Elke term word verdubbel.\n' +
            'Reël: Vermenigvuldig met 2',
        },
        {
          label: 'c) Wat is die volgende getal?',
          correctAnswer: '80',
          explanation:
            'Pas die reël toe op die laaste bekende term:\n' +
            '40 × 2 = 80\n\n' +
            'Die volgende getal is 80 (nie 45 nie).',
        },
      ],
    },

    // ── AFDELING 2: SPRINGTEL-PATRONE ────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Tel vorentoe in 50e vanaf 300.\n\nSkryf die volgende 4 getalle.',
      answer: '350, 400, 450, 500',
      correctAnswer: '350,400,450,500',
      correctAnswers: ['350,400,450,500', '350400450500'],
      explanation:
        'Reël: tel elke keer 50 by.\n' +
        '300 + 50 = 350\n' +
        '350 + 50 = 400\n' +
        '400 + 50 = 450\n' +
        '450 + 50 = 500\n\n' +
        'Volgende 4 getalle: 350, 400, 450, 500',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Tel terugwaarts in 25e vanaf 250.\n\nSkryf die volgende 5 getalle.',
      answer: '225, 200, 175, 150, 125',
      correctAnswer: '225,200,175,150,125',
      correctAnswers: ['225,200,175,150,125', '225200175150125'],
      explanation:
        'Reël: trek elke keer 25 af.\n' +
        '250 − 25 = 225\n' +
        '225 − 25 = 200\n' +
        '200 − 25 = 175\n' +
        '175 − 25 = 150\n' +
        '150 − 25 = 125\n\n' +
        'Volgende 5 getalle: 225, 200, 175, 150, 125',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Patroon tel in 100e. Die 3de getal in die patroon is 450.\n\n' +
        'a) Wat is die 1ste getal?\n' +
        'b) Wat is die 5de getal?\n' +
        'c) Wat is die 10de getal?',
      answer: 'a) 250    b) 650    c) 1150',
      parts: [
        {
          label: 'a) Wat is die 1ste getal?',
          correctAnswer: '250',
          explanation:
            'Die 3de getal is 450. Tel terugwaarts in 100e om die 1ste getal te bereik.\n' +
            '3de = 450\n' +
            '2de = 450 − 100 = 350\n' +
            '1ste = 350 − 100 = 250',
        },
        {
          label: 'b) Wat is die 5de getal?',
          correctAnswer: '650',
          explanation:
            'Tel vorentoe in 100e vanaf die 3de getal (450).\n' +
            '3de = 450\n' +
            '4de = 450 + 100 = 550\n' +
            '5de = 550 + 100 = 650',
        },
        {
          label: 'c) Wat is die 10de getal?',
          correctAnswer: '1150',
          explanation:
            'Begin by die 1ste getal (250), tel 100 by vir elke stap.\n' +
            'Die nde getal = 250 + (n − 1) × 100\n' +
            '10de getal = 250 + 9 × 100 = 250 + 900 = 1150',
        },
      ],
    },

    // ── AFDELING 3: INSET- EN UITSETWAARDES ──────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Die reël is tel 9 by. Vind die uitset vir elke inset:\n\n' +
        'a) Uitset vir inset 3\n' +
        'b) Uitset vir inset 6\n' +
        'c) Uitset vir inset 9\n' +
        'd) Uitset vir inset 12',
      answer: 'a) 12    b) 15    c) 18    d) 21',
      parts: [
        {
          label: 'a) Uitset vir inset 3',
          correctAnswer: '12',
          explanation: 'Reël: tel 9 by.\n3 + 9 = 12',
        },
        {
          label: 'b) Uitset vir inset 6',
          correctAnswer: '15',
          explanation: 'Reël: tel 9 by.\n6 + 9 = 15',
        },
        {
          label: 'c) Uitset vir inset 9',
          correctAnswer: '18',
          explanation: 'Reël: tel 9 by.\n9 + 9 = 18',
        },
        {
          label: 'd) Uitset vir inset 12',
          correctAnswer: '21',
          explanation: 'Reël: tel 9 by.\n12 + 9 = 21',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Vind die reël en voltooi die tabel:\n\n' +
        'Inset:  4, 8, 12, 16\n' +
        'Uitset: 12, 24, 36, __\n\n' +
        'a) Wat is die reël?\n' +
        'b) Wat is die ontbrekende uitset?',
      answer: 'a) Vermenigvuldig met 3    b) 48',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Vermenigvuldig met 3',
          correctAnswers: [
            'Vermenigvuldig met 3', 'vermenigvuldig met 3', 'vermenigvuldigmet3',
            'keer 3', 'keer3', 'x3', '×3',
          ],
          explanation:
            'Vergelyk elke inset met sy uitset:\n' +
            '4 → 12: 4 × 3 = 12\n' +
            '8 → 24: 8 × 3 = 24\n' +
            '12 → 36: 12 × 3 = 36\n\n' +
            'Die uitset is altyd 3 keer die inset.\n' +
            'Reël: Vermenigvuldig met 3',
        },
        {
          label: 'b) Wat is die ontbrekende uitset?',
          correctAnswer: '48',
          explanation:
            'Pas die reël toe op die laaste inset:\n' +
            '16 × 3 = 48',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Die reël is trek 11 af. Die uitset is 23.\n\n' +
        'a) Wat is die inset?\n' +
        'b) Skryf die inverse bewerking wat jy gebruik het om dit te vind.\n' +
        'c) As die inset 50 was, wat sou die uitset wees?',
      answer: 'a) 34    b) 23 + 11 = 34    c) 39',
      parts: [
        {
          label: 'a) Wat is die inset?',
          correctAnswer: '34',
          explanation:
            'Om die inset te vind wanneer jy die uitset ken, gebruik die inverse bewerking.\n' +
            'Die inverse van trek 11 af is tel 11 by.\n' +
            'Inset = 23 + 11 = 34',
        },
        {
          label: 'b) Skryf die inverse bewerking',
          correctAnswer: '23+11=34',
          correctAnswers: ['23+11=34', '23+11', 'tel11by', 'tel 11 by', '+11'],
          explanation:
            'Die inverse van "trek 11 af" is "tel 11 by".\n' +
            'Uitset + 11 = Inset\n' +
            '23 + 11 = 34',
        },
        {
          label: 'c) As die inset 50 was, wat is die uitset?',
          correctAnswer: '39',
          explanation:
            'Pas die oorspronklike reël (trek 11 af) toe op die nuwe inset:\n' +
            '50 − 11 = 39',
        },
      ],
    },

    // ── AFDELING 4: VIND ONTBREKENDE GETALLE IN ʼN PATROON ───────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Vind die ontbrekende getal:\n\n10, 20, __, 40, 50',
      answer: '30',
      correctAnswer: '30',
      explanation:
        'Vind die reël: 20 − 10 = 10, 50 − 40 = 10.\n' +
        'Reël: tel elke keer 10 by.\n' +
        'Pas die reël toe op die getal voor die gaping: 20 + 10 = 30.\n' +
        'Kontroleer: 30 + 10 = 40 ✓',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Vind die ontbrekende getalle:\n\n' +
        '150, __, 110, __, 70\n\n' +
        'a) Wat is die reël?\n' +
        'b) Wat is die eerste ontbrekende getal?\n' +
        'c) Wat is die tweede ontbrekende getal?',
      answer: 'a) Trek 20 af    b) 130    c) 90',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Trek 20 af',
          correctAnswers: [
            'Trek 20 af', 'trek 20 af', 'trek20af',
            'minus 20', 'minus20', '-20',
          ],
          explanation:
            'Kyk na die bekende getalle: 150, 110, 70.\n' +
            'Van 150 na 110 is ʼn afname van 40 oor 2 stappe → elke stap = 40 ÷ 2 = 20.\n' +
            'Kontroleer: 110 na 70 = afname van 40 oor 2 stappe → 20 per stap. ✓\n' +
            'Reël: Trek 20 af',
        },
        {
          label: 'b) Eerste ontbrekende getal (tussen 150 en 110)',
          correctAnswer: '130',
          explanation:
            'Pas die reël toe op die eerste bekende getal:\n' +
            '150 − 20 = 130\n' +
            'Kontroleer: 130 − 20 = 110 ✓',
        },
        {
          label: 'c) Tweede ontbrekende getal (tussen 110 en 70)',
          correctAnswer: '90',
          explanation:
            'Pas die reël toe op 110:\n' +
            '110 − 20 = 90\n' +
            'Kontroleer: 90 − 20 = 70 ✓\n\n' +
            'Volle reeks: 150, 130, 110, 90, 70',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        '4, 8, __, 32, 64\n\n' +
        'a) Wat is die reël?\n' +
        'b) Wat is die ontbrekende getal?\n' +
        'c) Wat sou die 6de getal wees?',
      answer: 'a) Vermenigvuldig met 2    b) 16    c) 128',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Vermenigvuldig met 2',
          correctAnswers: [
            'Vermenigvuldig met 2', 'vermenigvuldig met 2', 'vermenigvuldigmet2',
            'keer 2', 'keer2', 'x2', '×2', 'verdubbel',
          ],
          explanation:
            'Kontroleer of optelling werk: 8 − 4 = 4, maar 64 − 32 = 32 — verskille nie gelyk nie. Nie optelling nie.\n' +
            'Kontroleer vermenigvuldiging: 4 × 2 = 8, 32 × 2 = 64. ✓\n' +
            'Reël: Vermenigvuldig met 2',
        },
        {
          label: 'b) Wat is die ontbrekende getal?',
          correctAnswer: '16',
          explanation:
            'Pas die reël toe op die getal voor die gaping:\n' +
            '8 × 2 = 16\n' +
            'Kontroleer: 16 × 2 = 32 ✓',
        },
        {
          label: 'c) Wat is die 6de getal?',
          correctAnswer: '128',
          explanation:
            'Die volle reeks tot dusver: 4, 8, 16, 32, 64 (5 terme).\n' +
            'Pas die reël nog een keer toe:\n' +
            '64 × 2 = 128',
        },
      ],
    },

    // ── AFDELING 5: PATRONE OP ʼN GETALLELYN VOORSTEL ────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'ʼn Patroon word op ʼn getallelyn gewys: 0, 10, 20, 30, 40.\n\n' +
        'a) Wat is die reël?\n' +
        'b) Wat is die volgende 2 getalle?',
      answer: 'a) Tel 10 by    b) 50, 60',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Tel 10 by',
          correctAnswers: ['Tel 10 by', 'tel 10 by', 'tel10by', '+10', 'plus 10', 'plus10'],
          explanation:
            'Vind die verskil tussen opeenvolgende terme: 10 − 0 = 10, 20 − 10 = 10.\n' +
            'Die getalle neem elke keer met 10 toe.\n' +
            'Reël: Tel 10 by',
        },
        {
          label: 'b) Wat is die volgende 2 getalle?',
          correctAnswer: '50,60',
          correctAnswers: ['50,60', '5060'],
          explanation:
            'Pas die reël twee keer toe:\n' +
            '40 + 10 = 50\n' +
            '50 + 10 = 60\n\n' +
            'Volgende 2 getalle: 50, 60',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Getallelyn toon hierdie gemerkte punte: 5, 11, 17, 23.\n\n' +
        'a) Wat is die reël?\n' +
        'b) Watter getal kom voor 5 op hierdie getallelyn?\n' +
        'c) Wat is die 6de getal in die patroon?',
      answer: 'a) Tel 6 by    b) −1    c) 35',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Tel 6 by',
          correctAnswers: ['Tel 6 by', 'tel 6 by', 'tel6by', '+6', 'plus 6', 'plus6'],
          explanation:
            'Vind die verskil: 11 − 5 = 6, 17 − 11 = 6, 23 − 17 = 6.\n' +
            'Reël: Tel 6 by',
        },
        {
          label: 'b) Watter getal kom voor 5?',
          correctAnswer: '-1',
          correctAnswers: ['-1', '−1', 'negatiefeen', 'negatief1', 'geengetal', 'geen', 'daarisgeengetal'],
          explanation:
            'Gebruik die inverse reël (trek 6 af) om terugwaarts te gaan:\n' +
            '5 − 6 = −1\n\n' +
            'Die getal voor 5 in hierdie patroon is −1.',
        },
        {
          label: 'c) Wat is die 6de getal?',
          correctAnswer: '35',
          explanation:
            'Die bekende terme is: 5 (1ste), 11 (2de), 17 (3de), 23 (4de).\n' +
            '5de = 23 + 6 = 29\n' +
            '6de = 29 + 6 = 35',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Patroon op ʼn getallelyn begin by 200 en eindig by 100. Daar is 4 gelyke stappe tussen hulle.\n\n' +
        'a) Wat is die reël?\n' +
        'b) Skryf al die getalle in die patroon.',
      answer: 'a) Trek 25 af    b) 200, 175, 150, 125, 100',
      parts: [
        {
          label: 'a) Wat is die reël?',
          correctAnswer: 'Trek 25 af',
          correctAnswers: [
            'Trek 25 af', 'trek 25 af', 'trek25af',
            'minus 25', 'minus25', '-25',
          ],
          explanation:
            'Totale afname = 200 − 100 = 100.\n' +
            'Aantal stappe = 4.\n' +
            'Elke stap = 100 ÷ 4 = 25.\n' +
            'Reël: Trek 25 af',
        },
        {
          label: 'b) Skryf al die getalle in die patroon',
          correctAnswer: '200,175,150,125,100',
          correctAnswers: ['200,175,150,125,100', '200175150125100'],
          explanation:
            'Begin by 200, trek elke keer 25 af:\n' +
            '200 − 25 = 175\n' +
            '175 − 25 = 150\n' +
            '150 − 25 = 125\n' +
            '125 − 25 = 100\n\n' +
            'Patroon: 200, 175, 150, 125, 100',
        },
      ],
    },

    // ── AFDELING 6: SKEP JOU EIE PATRONE ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skep ʼn toenemende patroon wat by 3 begin met die reël tel 7 by.\n\n' +
        'Skryf die eerste 6 getalle.',
      answer: '3, 10, 17, 24, 31, 38',
      correctAnswer: '3,10,17,24,31,38',
      correctAnswers: ['3,10,17,24,31,38', '31017243138'],
      explanation:
        'Beginwaarde: 3. Reël: tel 7 by.\n' +
        '3 + 7 = 10\n' +
        '10 + 7 = 17\n' +
        '17 + 7 = 24\n' +
        '24 + 7 = 31\n' +
        '31 + 7 = 38\n\n' +
        'Patroon: 3, 10, 17, 24, 31, 38',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skep ʼn afnemende patroon wat by 500 begin met die reël trek 45 af.\n\n' +
        'Skryf die eerste 5 getalle.',
      answer: '500, 455, 410, 365, 320',
      correctAnswer: '500,455,410,365,320',
      correctAnswers: ['500,455,410,365,320', '500455410365320'],
      explanation:
        'Beginwaarde: 500. Reël: trek 45 af.\n' +
        '500 − 45 = 455\n' +
        '455 − 45 = 410\n' +
        '410 − 45 = 365\n' +
        '365 − 45 = 320\n\n' +
        'Patroon: 500, 455, 410, 365, 320',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Skep jou eie getalpatroon met ten minste 6 getalle.\n\n' +
        'a) Skryf jou patroon.\n' +
        'b) Wat is die reël?\n' +
        'c) Beskryf ʼn alledaagse situasie waar jy hierdie patroon kan sien.',
      answer:
        'Aanvaar enige geldige patroon met ʼn duidelike reël.\n\n' +
        'Kontrolelys:\n' +
        '• a) Ten minste 6 getalle wat elke keer dieselfde reël volg\n' +
        '• b) ʼn Duidelike reël aangedui (bv. "Tel 5 by" of "Trek 10 af")\n' +
        '• c) ʼn Realistiese alledaagse verband\n\n' +
        'Voorbeeld: Begin by 5, reël tel 5 by → 5, 10, 15, 20, 25, 30\n' +
        'Alledaagse voorbeeld: 5c-muntstukke in ʼn spaarvarkie tel.',
    },

  ],

  scoreMessages: [
    {
      minScore: 38,
      message:
        'Uitstekend! 38 uit 38 — jy het Getalpatrone heeltemal bemeester. Elke enkele deel was korrek. Uitstekende werk! 🌟',
    },
    {
      minScore: 31,
      message:
        'Uitstekende werk! Jy het ʼn sterk begrip van getalpatrone. Gaan die dele wat jy gemis het weer deur en jy sal volpunte behaal.',
    },
    {
      minScore: 23,
      message:
        'Goeie poging! Jy maak goeie vordering met getalpatrone. Gaan terug oor die afdelings waar jy punte verloor het en probeer daardie vrae weer.',
    },
    {
      minScore: 0,
      message:
        'Hou aan probeer — patrone verg oefening! Werk weer deur die studiegids, fokus op die uitgewerkte voorbeelde, en probeer dan die vrae weer. Jy kan dit doen!',
    },
  ],
}
