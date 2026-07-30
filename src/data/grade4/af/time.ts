import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Tyd',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — TYD LEES EN VERTEL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-telling-time',
      title: 'Tyd Lees en Vertel',
      icon: '🕐',
      explanation: `
<p style="margin-bottom:14px;">Ons gebruik horlosies om tyd te meet en te vertel. Daar is twee hooftipes horlosies — <strong>analoog</strong> en <strong>digitaal</strong>. Albei toon dieselfde tyd op verskillende maniere. Tyd bestaan uit <strong style="color:#1e40af;">ure</strong>, <strong style="color:#dc2626;">minute</strong> en <strong style="color:#16a34a;">sekondes</strong>.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Analoog horlosies</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">ʼn Analoog horlosie het ʼn ronde wyserplaat met die syfers 1 tot 12 en twee wysers wat om die wyserplaat beweeg.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Kort wyser<br/><span style="font-weight:400;font-size:12px;">(uurwyser)</span></span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Die <strong>kort wyser</strong> wys na die <strong style="color:#1e40af;">uur</strong>. Dit beweeg stadig — dit vat 12 ure om heeltemal om die wyserplaat te gaan.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:120px;text-align:center;">Lang wyser<br/><span style="font-weight:400;font-size:12px;">(minuutwyser)</span></span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Die <strong>lang wyser</strong> wys na die <strong style="color:#dc2626;">minute</strong>. Elke syfer op die wyserplaat verteenwoordig <strong>5 minute</strong>. Dit vat 60 minute (1 uur) om heeltemal om te gaan.</span>
    </div>

  </div>
  <div style="margin-top:12px;background:#dbeafe;border-radius:8px;padding:10px 14px;">
    <div style="font-size:13px;font-weight:700;color:#1e40af;margin-bottom:6px;">Minuuttelling op ʼn analoog horlosie</div>
    <div style="display:flex;flex-wrap:wrap;gap:6px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">12 → 0 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">1 → 5 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">2 → 10 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">3 → 15 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">4 → 20 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">5 → 25 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">6 → 30 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">7 → 35 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">8 → 40 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">9 → 45 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">10 → 50 min</span>
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-size:13px;font-weight:600;">11 → 55 min</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Digitale horlosies</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:10px;">ʼn Digitale horlosie toon die tyd as syfers en gebruik ʼn <strong>dubbelpunt (:)</strong> om ure en minute te skei.</p>
  <div style="display:flex;align-items:center;gap:16px;margin-bottom:10px;">
    <span style="background:#0f1f3d;color:#fff;border-radius:8px;padding:8px 20px;font-size:22px;font-weight:700;letter-spacing:2px;"><span style="color:#60a5fa;">3</span><span style="color:#fff;">:</span><span style="color:#f87171;">45</span></span>
    <span style="font-size:15px;color:#1e3a8a;"><strong style="color:#1e40af;">3 ure</strong> en <strong style="color:#dc2626;">45 minute</strong></span>
  </div>
  <div style="font-size:14px;color:#1e3a8a;">Die syfer voor die dubbelpunt is die <strong style="color:#1e40af;">uur</strong>. Die syfer na die dubbelpunt is die <strong style="color:#dc2626;">minute</strong>. Minute word altyd met twee syfers geskryf — dus word 5 minute geskryf as <strong style="color:#dc2626;">:05</strong>.</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">vm. en nm.</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">Die dag het 24 ure, maar ʼn horlosie wys net 12. Ons gebruik <strong>vm.</strong> en <strong>nm.</strong> om te wys watter helfte van die dag ons bedoel.</p>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:60px;text-align:center;">vm.</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Middernag tot middag</strong> — die oggendure (12:00 middernag tot 11:59 in die oggend).</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:60px;text-align:center;">nm.</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong>Middag tot middernag</strong> — die middag- en aanduure (12:00 middag tot 11:59 in die nag).</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Tydwoordeskat 📖</span>
  <div style="display:flex;flex-direction:column;gap:6px;margin-top:10px;font-size:14px;color:#78350f;">
    <div><strong>Uur</strong> — die minuutwyser is op 12 (bv. 3:00 = drie-uur)</div>
    <div><strong>Kwart oor</strong> — 15 minute oor die uur (bv. 3:15)</div>
    <div><strong>Half</strong> — 30 minute oor die uur (bv. 3:30)</div>
    <div><strong>Kwart voor</strong> — 15 minute voor die volgende uur (bv. 3:45 = kwart voor vier)</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Die kort wyser wys na 4 en die lang wyser wys na 6. Wat is die tyd?',
          steps: [
            'Die <strong style="color:#1e40af;">kort wyser</strong> by <strong>4</strong> beteken dit is <strong style="color:#1e40af;">4 ure</strong>.',
            'Die <strong style="color:#dc2626;">lang wyser</strong> by <strong>6</strong> beteken <strong>6 × 5</strong> = <strong style="color:#dc2626;">30 minute</strong>.',
          ],
          answer: '4:30, of half vier.',
        },
        {
          question: 'Skryf 7:15 vm. in woorde.',
          steps: [
            'Die <strong style="color:#1e40af;">uur</strong> is <strong>7</strong> en die <strong style="color:#dc2626;">minute</strong> is <strong>15</strong>.',
            '15 minute oor die uur word <strong>kwart oor</strong> genoem.',
            'vm. beteken dit is in die <strong>oggend</strong>.',
          ],
          answer: 'Kwart oor sewe in die oggend.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Twee horlosies langs mekaar — ʼn analoog horlosie wat 4:30 toon met die uur- en minuutwysers geëtiketteer, en ʼn digitale horlosie wat 4:30 toon',
      videoPlaceholder:
        'Kort video wat wys hoe om analoog en digitale horlosies te lees en die verskil tussen vm. en nm. verduidelik',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — EENHEDE VAN TYD EN OMSKAKELING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-time-conversion',
      title: 'Eenhede van Tyd en Omskakeling',
      icon: '⏱️',
      explanation: `
<p style="margin-bottom:14px;">Tyd word in verskillende eenhede gemeet — van klein <strong style="color:#16a34a;">sekondes</strong> tot lang tydperke soos jare. Om te weet hoe om tussen eenhede om te skakel, help jou om probleme met tyd op te los.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Omskakelingsfeite</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">60 sekondes</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#1e40af;">1 minuut</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">60 minute</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#dc2626;">1 uur</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">24 ure</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong style="color:#ea580c;">1 dag</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">7 dae</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 week</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">28–31 dae</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 maand</strong> (hang af van die maand)</span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">12 maande</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 jaar</strong></span>
    </div>

    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">365 dae</span>
      <span style="font-size:15px;color:#1e3a8a;">= <strong>1 jaar</strong> (366 dae in ʼn skrikkeljaar)</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Omskakelingsreëls</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Groter → Kleiner</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Om van ʼn <strong>groter eenheid</strong> na ʼn <strong>kleiner eenheid</strong> om te skakel — <strong style="color:#16a34a;">vermenigvuldig</strong>. Die getal word groter. (bv. ure → minute: × 60)</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Kleiner → Groter</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Om van ʼn <strong>kleiner eenheid</strong> na ʼn <strong>groter eenheid</strong> om te skakel — <strong style="color:#dc2626;">deel</strong>. Die getal word kleiner. (bv. minute → ure: ÷ 60)</span>
    </div>

  </div>
</div>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Geheue-wenk 💡</div>
  <div style="color:#7f1d1d;font-size:15px;">Na ʼn <strong>kleiner eenheid</strong> toe → <strong style="color:#16a34a;">vermenigvuldig</strong> → die getal word <strong>groter</strong>.<br/>Na ʼn <strong>groter eenheid</strong> toe → <strong style="color:#dc2626;">deel</strong> → die getal word <strong>kleiner</strong>.</div>
</div>
`,
      workedExamples: [
        {
          question: 'Skakel 3 ure om na minute.',
          steps: [
            'Ure → minute: van ʼn <strong>groter eenheid</strong> na ʼn <strong>kleiner eenheid</strong> — <strong style="color:#16a34a;">vermenigvuldig met 60</strong>.',
            '<strong style="color:#dc2626;">3</strong> × <strong style="color:#16a34a;">60</strong> = <strong style="color:#1e40af;">180</strong>.',
          ],
          answer: '3 ure = 180 minute.',
        },
        {
          question: 'Skakel 150 minute om na ure en minute.',
          steps: [
            'Minute → ure: van ʼn <strong>kleiner eenheid</strong> na ʼn <strong>groter eenheid</strong> — <strong style="color:#dc2626;">deel deur 60</strong>.',
            '<strong style="color:#1e40af;">150</strong> ÷ <strong style="color:#dc2626;">60</strong> = <strong>2</strong> res <strong>30</strong>.',
            '<strong>2</strong> volle ure met <strong>30</strong> minute oor.',
          ],
          answer: '150 minute = 2 ure 30 minute.',
        },
        {
          question: 'Hoeveel dae is daar in 4 weke?',
          steps: [
            'Weke → dae: van ʼn <strong>groter eenheid</strong> na ʼn <strong>kleiner eenheid</strong> — <strong style="color:#16a34a;">vermenigvuldig met 7</strong>.',
            '<strong style="color:#ea580c;">4</strong> × <strong style="color:#16a34a;">7</strong> = <strong style="color:#ea580c;">28</strong>.',
          ],
          answer: '4 weke = 28 dae.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Tydomskakelingsleer wat sekondes minute ure dae weke maande en jare toon met vermenigvuldigings- en delingspyle tussen elke eenheid',
      videoPlaceholder:
        'Kort video wat wys hoe om tussen eenhede van tyd om te skakel deur vermenigvuldiging en deling te gebruik',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — TYDSDUUR BEREKEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-duration',
      title: 'Tydsduur Bereken',
      icon: '⏳',
      explanation: `
<p style="margin-bottom:14px;"><strong>Tydsduur</strong> beteken <strong>hoe lank iets vat</strong> van begin tot einde. Om die tydsduur te vind, tel jy voort van die <strong style="color:#1e40af;">begintyd</strong> na die <strong style="color:#dc2626;">eindtyd</strong> en tel die totale tyd wat verloop het bymekaar.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Metode om tydsduur te bereken</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Skryf die <strong style="color:#1e40af;">begintyd</strong> neer.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Skryf die <strong style="color:#dc2626;">eindtyd</strong> neer.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel voort</strong> van die <strong style="color:#1e40af;">begintyd</strong> na die <strong style="color:#dc2626;">eindtyd</strong> — tel eers volle ure, dan die oorblywende minute.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel</strong> die ure en minute wat getel is bymekaar om die <strong style="color:#16a34a;">tydsduur</strong> te vind.</span>
    </div>

  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Wenk: kruis middag versigtig 🕛</div>
  <div style="color:#14532d;font-size:15px;">Wanneer die <strong style="color:#1e40af;">begintyd</strong> vm. is en die <strong style="color:#dc2626;">eindtyd</strong> nm. is, breek die berekening op by <strong>12:00 middag</strong> — tel eers tot by middag, tel dan van middag na die eindtyd.</div>
</div>
`,
      workedExamples: [
        {
          question: 'ʼn Fliek begin om 2:15 nm. en eindig om 4:45 nm. Hoe lank is die fliek?',
          steps: [
            '<strong style="color:#1e40af;">Begintyd:</strong> 2:15 nm. &nbsp; <strong style="color:#dc2626;">Eindtyd:</strong> 4:45 nm.',
            'Van <strong style="color:#1e40af;">2:15</strong> tot <strong>4:15</strong> = <strong>2 ure</strong>.',
            'Van <strong>4:15</strong> tot <strong style="color:#dc2626;">4:45</strong> = <strong>30 minute</strong>.',
            'Totaal: <strong>2 ure</strong> + <strong>30 minute</strong> = <strong style="color:#16a34a;">2 ure 30 minute</strong>.',
          ],
          answer: 'Die fliek is 2 ure 30 minute lank.',
        },
        {
          question: 'Skool begin om 7:30 vm. en eindig om 2:00 nm. Hoe lank is die skooldag?',
          steps: [
            '<strong style="color:#1e40af;">Begintyd:</strong> 7:30 vm. &nbsp; <strong style="color:#dc2626;">Eindtyd:</strong> 2:00 nm.',
            'Kruis middag: van <strong style="color:#1e40af;">7:30</strong> tot <strong>12:00</strong> = <strong>4 ure 30 minute</strong>.',
            'Van <strong>12:00</strong> tot <strong style="color:#dc2626;">2:00</strong> nm. = <strong>2 ure</strong>.',
            'Totaal: <strong>4 ure 30 minute</strong> + <strong>2 ure</strong> = <strong style="color:#16a34a;">6 ure 30 minute</strong>.',
          ],
          answer: 'Die skooldag is 6 ure 30 minute lank.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om die tydsduur tussen twee tye te bereken en ʼn kalender te gebruik om dae tussen datums te tel',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — KALENDERS EN TYD WOORDPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calendars-time-word-problems',
      title: 'Kalenders en Tyd Woordprobleme',
      icon: '📅',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Kalender</strong> toon die dae, weke en maande van die jaar. Ons gebruik dit om datums te vind, dae tussen gebeurtenisse te tel en tydprobleme op te los. Kyk altyd vir <strong style="color:#ea580c;">sleutelwoorde</strong> in ʼn probleem — hulle vertel jou wat om te bereken.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Dae in elke maand</div>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">31 dae</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">Januarie</strong>, <strong style="color:#ea580c;">Maart</strong>, <strong style="color:#ea580c;">Mei</strong>, <strong style="color:#ea580c;">Julie</strong>, <strong style="color:#ea580c;">Augustus</strong>, <strong style="color:#ea580c;">Oktober</strong>, <strong style="color:#ea580c;">Desember</strong></span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">30 dae</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">April</strong>, <strong style="color:#ea580c;">Junie</strong>, <strong style="color:#ea580c;">September</strong>, <strong style="color:#ea580c;">November</strong></span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">28/29 dae</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">Februarie</strong> — 28 dae in ʼn gewone jaar, 29 dae in ʼn skrikkeljaar.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Geheue-wenk — kneukelmetode 🤜</div>
  <div style="color:#78350f;font-size:15px;">Maak ʼn vuis en tel jou kneukels en die duike tussen hulle van links na regs. <strong>Kneukels = 31 dae. Duike = 30 dae (of 28/29 vir Februarie).</strong> Wanneer jy by die laaste kneukel (Julie) kom, begin weer by die eerste kneukel (Augustus).</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Sleutelwoorde in tyd woordprobleme</div>
  <div style="display:flex;flex-direction:column;gap:6px;font-size:15px;color:#1e3a8a;">
    <div><strong style="color:#ea580c;">Hoe lank</strong>, <strong style="color:#ea580c;">tydsduur</strong>, <strong style="color:#ea580c;">hoeveel ure/minute</strong> — bereken die tydsduur tussen twee tye.</div>
    <div><strong style="color:#ea580c;">Hoeveel dae tot</strong>, <strong style="color:#ea580c;">dae tussen</strong> — tel dae op ʼn kalender.</div>
    <div><strong style="color:#ea580c;">Hoe laat eindig dit</strong> — tel die tydsduur by die begintyd.</div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Hoeveel dae is daar van 5 Maart tot 20 Maart?',
          steps: [
            'Albei datums is in <strong style="color:#ea580c;">Maart</strong> — tel dae binne dieselfde maand.',
            'Trek af: <strong>20 − 5</strong> = <strong style="color:#16a34a;">15 dae</strong>.',
          ],
          answer: '15 dae.',
        },
        {
          question: "Thabo se verjaardag is op 15 Junie. Vandag is 28 Mei. Hoeveel dae is daar tot sy verjaardag?",
          steps: [
            'Dae oor in <strong style="color:#ea580c;">Mei</strong>: <strong>31 − 28</strong> = <strong>3 dae</strong>.',
            'Dae in <strong style="color:#ea580c;">Junie</strong> tot die 15de: <strong>15 dae</strong>.',
            'Totaal: <strong>3</strong> + <strong>15</strong> = <strong style="color:#16a34a;">18 dae</strong>.',
          ],
          answer: "18 dae tot Thabo se verjaardag.",
        },
        {
          question: 'ʼn Bus vertrek om 9:45 vm. en kom om 1:15 nm. aan. Hoe lank is die reis?',
          steps: [
            '<strong style="color:#1e40af;">Begin:</strong> 9:45 vm. &nbsp; <strong style="color:#dc2626;">Einde:</strong> 1:15 nm.',
            'Van <strong style="color:#1e40af;">9:45</strong> tot <strong>1:45</strong> nm. sou presies <strong>4 ure</strong> wees.',
            'Maar die eindtyd is <strong style="color:#dc2626;">1:15</strong>, wat <strong>30 minute vroeër</strong> is as 1:45.',
            '4 ure − 30 minute = <strong style="color:#16a34a;">3 ure 30 minute</strong>.',
          ],
          answer: 'Die reis vat 3 ure 30 minute.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om die tydsduur tussen twee tye te bereken en ʼn kalender te gebruik om dae tussen datums te tel',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — DIE GESKIEDENIS VAN TYD
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'history-of-time',
      title: 'Die Geskiedenis van Tyd',
      icon: '📜',
      explanation: `
<p style="margin-bottom:14px;">Horlosies en oorlosies het nie altyd bestaan nie! Lank gelede het mense steeds nodig gehad om ongeveer te weet hoe laat dit is — om te weet wanneer om gewasse te plant, mense te ontmoet, of ʼn reis te begin. Hulle het slim maniere gevind om tyd te meet deur die <strong style="color:#ea580c;">son</strong>, <strong style="color:#1e40af;">water</strong> en <strong style="color:#16a34a;">sand</strong> te gebruik.</p>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">☀️ Sonwysers</div>
  <p style="font-size:15px;color:#7c2d12;margin-bottom:8px;">ʼn <strong>Sonwyser</strong> is ʼn plat oppervlak met ʼn stok of wyser (genoem ʼn <strong>gnomon</strong>) wat regop in die middel staan. Soos die son gedurende die dag oor die lug beweeg, beweeg die <strong>skaduwee</strong> van die wyser ook, en die posisie daarvan wys ongeveer hoe laat dit is.</p>
  <p style="font-size:14px;color:#9a3412;">Sonwysers is duisende jare gelede deur die antieke Egiptenare gebruik. Die groot probleem met ʼn sonwyser? Dit werk net wanneer die <strong>son skyn</strong> — nutteloos in die nag of op ʼn bewolkte dag!</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">💧 Waterhorlosies</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:8px;">ʼn <strong>Waterhorlosie</strong> (ook genoem ʼn <em>clepsydra</em>) meet tyd deur <strong>water</strong> teen ʼn konstante tempo van een houer na ʼn ander te laat <strong>drup</strong>. Lyne wat op die houer gemerk is, het gewys hoeveel tyd verloop het soos die waterviak gestyg of gedaal het.</p>
  <p style="font-size:14px;color:#1e40af;">Anders as ʼn sonwyser, kon ʼn waterhorlosie <strong>binnenshuis, in die nag, of op ʼn bewolkte dag</strong> gebruik word, want dit het glad nie op sonlig staatgemaak nie.</p>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">⏳ Sandlopers</div>
  <p style="font-size:15px;color:#14532d;margin-bottom:8px;">ʼn <strong>Sandloper</strong> het twee glaskamers wat deur ʼn nou nekkie verbind is. <strong>Sand</strong> loop stadig van die boonste kamer na die onderste een, en wanneer dit almal deurgeloop het, het ʼn vaste hoeveelheid tyd verbygegaan (dikwels presies een uur).</p>
  <p style="font-size:14px;color:#15803d;">Matrose op skepe het sandlopers besonder nuttig gevind — anders as ʼn sonwyser, werk ʼn sandloper steeds konstant, maak nie saak hoeveel die skip op die golwe wieg nie!</p>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">🕯️ Kershorlosies</span>
  <div style="color:#78350f;font-size:15px;margin-top:8px;">Sommige kulture het kerse met eweredig gespasieerde lyne gemerk. Soos die kers teen ʼn konstante tempo afgebrand het, het dit elke lyn na ongeveer dieselfde hoeveelheid tyd verbygesteek — ʼn eenvoudige manier om die verbygaan van ure te meet, selfs na donker.</div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">📅 Vroeë Kalenders</div>
  <p style="font-size:15px;color:#1e3a8a;">Lank voordat gedrukte kalenders bestaan het, het mense langer tydperke opgespoor deur die <strong>maan</strong> en die <strong>son</strong> dop te hou. Baie vroeë kalenders het die veranderende vorm van die maan van nag tot nag gevolg. Die antieke Egiptenare het een van die eerste kalenders ontwikkel wat op die son en die jaarlikse oorstroming van die Nylrivier gebaseer was, om hulle te help weet wanneer om hulle gewasse te plant en te oes.</p>
</div>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 18px;">
  <div style="font-size:13px;font-weight:700;color:#0f1f3d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Waarom moderne horlosies so nuttig is</div>
  <div style="color:#374151;font-size:15px;">Anders as ʼn sonwyser, waterhorlosie, sandloper of kers, werk ʼn moderne horlosie <strong>dag en nag</strong>, in <strong>enige weer</strong>, en hou <strong>presies</strong> die tyd sonder dat iemand dit hoef dop te hou, te vul, of om te draai!</div>
</div>
`,
      workedExamples: [
        {
          question:
            'Voordat horlosies uitgevind is, hoe het die antieke Egiptenare die son gebruik om tyd gedurende die dag te meet?',
          steps: [
            'Hulle het opgemerk dat die skaduwee van ʼn stok of pilaar in ʼn voorspelbare patroon beweeg vanaf sonop tot sonsondergang.',
            'Hulle het merke rondom die stok geplaas, wat ʼn sonwyser gevorm het, om verskillende tye van die dag te wys.',
            'Deur te lees waar die skaduwee tussen die merke val, kon mense ongeveer sê hoe laat dit is.',
          ],
          answer:
            'Hulle het ʼn sonwyser gebruik — ʼn wyser wat ʼn bewegende skaduwee gooi soos die son oor die lug beweeg, wat ongeveer wys hoe laat dit is.',
        },
        {
          question:
            'Matrose op ou skepe moes tyd meet, maar ʼn sonwyser was nie baie nuttig vir hulle op see nie. Hoekom nie, en wat het hulle eerder gebruik?',
          steps: [
            'ʼn Sonwyser moet stilstaan en reguit na die son wys om te werk — moeilik om te doen op ʼn skip wat op die golwe wieg.',
            'ʼn Sandloper werk steeds dieselfde, maak nie saak hoe die skip beweeg nie, want swaartekrag trek die sand teen ʼn konstante tempo af.',
            'Matrose het die sandloper elke keer omgedraai wanneer die sand klaar deurgeloop het, om die ure aan te hou tel.',
          ],
          answer:
            'ʼn Sonwyser werk nie goed op ʼn bewegende, wiegende skip nie. Matrose het eerder ʼn sandloper gebruik, wat ʼn vaste hoeveelheid tyd meet deur vallende sand, ongeag die skip se beweging.',
        },
        {
          question: 'Waarom word ʼn waterhorlosie as ʼn verbetering op ʼn sonwyser beskou?',
          steps: [
            'ʼn Sonwyser werk net wanneer die son skyn en sigbaar in die lug is.',
            'ʼn Waterhorlosie gebruik water wat teen ʼn konstante tempo van een houer na ʼn ander drup, met lyne gemerk om die verlope tyd te wys.',
            'Dit beteken mense kon tyd binnenshuis, in die nag, of op ʼn bewolkte dag meet — situasies waar ʼn sonwyser nutteloos sou wees.',
          ],
          answer:
            'ʼn Waterhorlosie is nie afhanklik van sonlig nie, dus kan dit binnenshuis, in die nag, en op bewolkte dae gebruik word, anders as ʼn sonwyser.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Eenvoudige tydlyn wat ʼn sonwyser, ʼn waterhorlosie, ʼn sandloper, ʼn kershorlosie en ʼn moderne digitale horlosie in volgorde wys',
      videoPlaceholder:
        'Kort video wat wys hoe antieke mense tyd gemeet het deur sonwysers, waterhorlosies en sandlopers te gebruik voordat moderne horlosies bestaan het',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Afdeling A — Horlosies lees en tydwoordeskat (0-3, Maklik)
        { difficulty: 'Easy', question: 'Die kort wyser wys na 6 en die lang wyser wys na 12. Wat is die tyd?', checkMode: 'auto', options: ['6:00, of ses-uur', '12:30', '6:12', '5:00'], correctIndex: 0, explanation: "Kort wyser by 6 = 6 ure. Lang wyser by 12 = 0 minute. Tyd: 6:00, of ses-uur. (12:30 verwar watter wyser die uur en watter die minute wys; 6:12 lees die lang wyser by 12 verkeerd as '12 minute' in plaas van 0; 5:00 lees die kort wyser een syfer te laag.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"117\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 8 en 9, en die lang wyser wys na 11. Wat is die tyd?', checkMode: 'auto', options: ['9:55', '8:55', '8:11', '8:45'], correctIndex: 1, explanation: "Kort wyser tussen 8 en 9 = 8 ure. Lang wyser by 11 = 11 × 5 = 55 minute. Tyd: 8:55, of vyf voor nege. (9:55 rond die uur verkeerdelik op omdat die minuutwyser naby die einde is; 8:11 lees die lang wyser se posisie as letterlike minute; 8:45 tel die lang wyser se posisie een syfer verkeerd.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"53\" y2=\"86.4\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"60\" y2=\"41.7\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Skryf "kwart voor ses" in digitale formaat.', checkMode: 'auto', options: ['6:45', '6:15', '5:45', '5:15'], correctIndex: 2, explanation: 'Kwart voor beteken 15 minute voor die uur. Kwart voor ses = 60 − 15 = 45 minute oor vyf = 5:45. (6:45 hou die uur as ses in plaas daarvan om een af te trek; 6:15 verwar kwart voor met kwart oor; 5:15 kry die regte uur reg maar verwar steeds voor/oor.)' },
        { difficulty: 'Easy', question: 'Skryf "vyf-en-twintig voor nege" in digitale formaat.', checkMode: 'auto', options: ['9:25', '9:35', '8:25', '8:35'], correctIndex: 3, explanation: 'Vyf-en-twintig voor nege beteken 60 − 25 = 35 minute oor agt = 8:35. (9:25 hou die uur as nege en plaas die 25 verkeerd; 9:35 het die regte minute maar die verkeerde uur; 8:25 het die regte uur maar gebruik 25 direk in plaas van 60 − 25.)' },
        // Afdeling B — vm./nm. en die 24-uur-dag (4-6, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Digitale horlosie wys 12:05, net ʼn paar minute na twaalfuur middag. Is hierdie tyd vm. of nm.?', checkMode: 'auto', options: ['nm. — 12:00 middag is die presiese oomblik wanneer die dag van vm. na nm. verander, dus is 12:05 (net na daardie oorgang) nm.', 'vm. — die digitale horlosie wys die uur as 12, en enige tyd wat 12 wys is altyd vm., ongeag die minute.', 'vm. — omdat 12:05 so naby aan middag is, tel dit steeds as deel van die oggend voordat die oorgang plaasvind.', 'Dit is onmoontlik om van ʼn digitale horlosie af te sê of ʼn tyd vm. of nm. is.'], correctIndex: 0, explanation: 'Middag self is die oomblik wanneer vm. verander na nm., so enige tyd vanaf 12:00 middag en later — insluitend 12:05 — val in die nm.-helfte van die dag. Nie elke tyd wat "12" wys is vm. nie (12:00 middernag is), en naby middag te wees maak nie ʼn tyd vroeër as middag nie.' },
        { difficulty: 'Easy-Medium', question: 'Watter tyd is meer redelik vir ʼn skooldag om te eindig: 2:00 nm. of 9:00 nm.?', checkMode: 'auto', options: ['9:00 nm. — skool loop dikwels laat uit met na-skoolse aktiwiteite, dus is ʼn laat einde soos 9:00 nm. redelik.', '2:00 nm. is meer redelik. Skool eindig gewoonlik in die middag, nie laat in die aand nie, dus sal 9:00 nm. nie sin maak vir die einde van ʼn gewone skooldag nie.', 'Albei is ewe redelik, aangesien skoolure baie verskil van skool tot skool.', '9:00 nm. — aangesien 9:00 ná 2:00 op die wyserplaat se syfers kom, moet dit ʼn later, meer volledige skooldag verteenwoordig.'], correctIndex: 1, explanation: 'Skool eindig gewoonlik in die middag, nie laat in die aand nie, dus sal 9:00 nm. nie sin maak vir die einde van ʼn gewone skooldag nie. Syfers op die wyserplaat alleen bepaal nie wat realisties is nie.' },
        { difficulty: 'Medium', question: 'ʼn Les begin om 9:00 vm. en eindig om 11:00 vm. Hoe lank is die les?', checkMode: 'auto', options: ['3 ure', '20 ure', '2 ure', '1 uur'], correctIndex: 2, explanation: 'Van 9:00 tot 11:00 is presies 2 ure. (3 ure tel albei eindpunte in; 20 ure tel die uur-syfers verkeerdelik bymekaar in plaas van af te trek; 1 uur tel die verskil te min.)' },
        // Afdeling C — Eenheidsomskakeling (7-10, Medium)
        { difficulty: 'Medium', question: 'Skakel 5 ure om na minute.', checkMode: 'auto', options: ['65 minute', '12 minute', '50 minute', '300 minute'], correctIndex: 3, explanation: 'Ure → minute: vermenigvuldig met 60. 5 × 60 = 300 minute. (65 tel bymekaar in plaas van te vermenigvuldig; 12 deel in plaas van te vermenigvuldig; 50 vermenigvuldig met 10 in plaas van 60.)' },
        { difficulty: 'Medium', question: 'Skakel 300 sekondes om na minute.', checkMode: 'auto', options: ['5 minute', '18 000 minute', '50 minute', '300 minute'], correctIndex: 0, explanation: 'Sekondes → minute: deel deur 60. 300 ÷ 60 = 5 minute. (18 000 vermenigvuldig in plaas van te deel; 50 deel deur 6 in plaas van 60; 300 vergeet om heeltemal om te skakel.)' },
        { difficulty: 'Medium', question: 'Skakel 200 minute om na ure en minute.', checkMode: 'auto', options: ['2 ure 40 minute', '3 ure 20 minute', '20 ure 3 minute', '3 ure 200 minute'], correctIndex: 1, explanation: '200 ÷ 60 = 3 res 20. Dus is 200 minute = 3 ure 20 minute. (2 u 40 min tel die res verkeerd; 20 u 3 min verwissel die kwosiënt en die res; 3 u 200 min kry die ure reg maar vergeet om die oorblywende minute om te skakel.)' },
        { difficulty: 'Medium', question: 'Amahle sê 6 weke is dieselfde as 42 dae. Is sy korrek?', checkMode: 'auto', options: ['Nee — 6 weke is 36 dae, aangesien ʼn week soms as 6 dae getel word.', 'Nee — 6 weke is 48 dae, want jy moet met 8 vermenigvuldig, nie 7 nie.', 'Ja — Amahle is korrek, aangesien 6 weke = 6 × 7 = 42 dae.', 'Nee — 6 weke is 60 dae, want jy moet elke week as 10 dae soos ʼn metrieke eenheid behandel.'], correctIndex: 2, explanation: 'ʼn Week het altyd 7 dae, dus 6 weke = 6 × 7 = 42 dae. Amahle is korrek.' },
        // Afdeling D — Tydsduur bereken (11-14, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Telefoonoproep begin om 9:50 vm. en eindig om 10:20 vm. Hoe lank duur die oproep?', checkMode: 'auto', options: ['70 minute', '20 minute', '40 minute', '30 minute'], correctIndex: 3, explanation: "Van 9:50 tot 10:00 is 10 minute, dan 10:00 tot 10:20 is 20 minute. Totaal: 30 minute. (70 minute tel verkeerdelik 50 + 20 bymekaar; 20 minute kopieer net die eindtyd se minute; 40 minute tel die eerste deel verkeerd as 20 minute in plaas van 10.)" },
        { difficulty: 'Medium-Hard', question: 'ʼn Werkswinkel begin om 8:00 vm. en eindig om 3:30 nm. Hoe lank duur dit?', checkMode: 'auto', options: ['7 ure 30 minute', '4 ure 30 minute', '8 ure 30 minute', '6 ure 30 minute'], correctIndex: 0, explanation: 'Van 8:00 vm. tot 12:00 nm. = 4 ure. Van 12:00 nm. tot 3:30 nm. = 3 ure 30 minute. Totaal: 7 ure 30 minute. (4 u 30 min trek die wyserplaat-syfers direk af sonder om behoorlik oor middag te gaan; 8 u 30 min tel die oorgang oor middag te veel; 6 u 30 min stop die telling by 3:00 nm. in plaas van 3:30 nm.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Nagtrein vertrek om 11:00 nm. en kom om 6:00 vm. die volgende dag aan. Hoe lank is die reis?', checkMode: 'auto', options: ['5 ure', '7 ure', '17 ure', '6 ure'], correctIndex: 1, explanation: 'Van 11:00 nm. tot middernag = 1 uur. Van middernag tot 6:00 vm. = 6 ure. Totaal: 7 ure. (5 ure trek 11 − 6 af asof geen dag verbygegaan het nie; 17 ure tel verkeerdelik 11 + 6 bymekaar; 6 ure vergeet die 1 uur van 11 nm. tot middernag.)' },
        { difficulty: 'Medium-Hard', question: 'Fliek A loop van 6:15 nm. tot 8:00 nm. Fliek B loop van 7:00 nm. tot 9:10 nm. Watter fliek is langer?', checkMode: 'auto', options: ['Fliek A — omdat dit vroeër in die dag begin, moet dit die langer fliek wees.', 'Geeneen — albei flieks is presies dieselfde lengte.', 'Fliek B', 'Fliek A — 8:00 minus 6:15 gee 2 ure 15 minute, wat langer is as Fliek B se speeltyd.'], correctIndex: 2, explanation: "Fliek A: 6:15 nm. tot 8:00 nm. = 1 uur 45 minute (105 minute). Fliek B: 7:00 nm. tot 9:10 nm. = 2 ure 10 minute (130 minute). Aangesien 130 > 105, is Fliek B langer. Om vroeër te begin maak nie ʼn fliek langer nie, en Fliek A se werklike lengte is 1 u 45 min, nie 2 u 15 min nie." },
        // Afdeling E — Begin-/eindtye en woordprobleme (15-17, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Swemsessie begin om 7:20 vm. Dit duur 2 ure 35 minute. Hoe laat eindig dit?', checkMode: 'auto', options: ['9:35 vm', '10:15 vm', '9:45 vm', '9:55 vm'], correctIndex: 3, explanation: 'Tel voort vanaf die begintyd: 7:20 vm. + 2 ure 35 minute = 9:55 vm. (9:35 vm. laat die 20 minute van die begintyd uit; 10:15 vm. dra te veel oor; 9:45 vm. tel 20 + 35 verkeerd as 45 in plaas van 55.)' },
        { difficulty: 'Hard', question: 'ʼn Busrit eindig om 9:55 vm. Dit het 1 uur 20 minute geneem. Hoe laat het dit begin?', checkMode: 'auto', options: ['8:35 vm', '11:15 vm', '8:55 vm', '8:15 vm'], correctIndex: 0, explanation: 'Tel terug vanaf die eindtyd: 9:55 vm. − 1 uur 20 minute = 8:35 vm. (11:15 vm. tel die tydsduur by in plaas daarvan om dit af te trek; 8:55 vm. vergeet om die 20 minute af te trek; 8:15 vm. tel 55 − 20 verkeerd as 15 in plaas van 35.)' },
        { difficulty: 'Hard', question: 'ʼn Resep benodig dat die oond vir 12 minute voorverhit word, en dan die kos vir 35 minute gebak word. As Lerato om 4:40 nm. begin voorverhit, hoe laat is die kos gereed?', checkMode: 'auto', options: ['5:17 nm', '5:27 nm', '4:87 nm', '5:52 nm'], correctIndex: 1, explanation: 'Totale tyd = 12 + 35 = 47 minute. 4:40 nm. + 47 minute = 5:27 nm. (5:17 nm. verloor 10 minute wanneer die uur oorgedra word; 4:87 nm. groepeer nooit die minute in ʼn ekstra uur nie, wat ʼn ongeldige tyd laat; 5:52 nm. tel die twee tydsduur verkeerd bymekaar.)' },
        // Afdeling F — Meerstap-redenering en regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'Sipho word om 6:15 vm. wakker. Dit vat hom 40 minute om reg te maak, en dan nog 15 minute om na die bushalte te loop. Hoe laat kom hy by die bushalte aan?', checkMode: 'auto', options: ['6:70 vm', '7:00 vm', '7:10 vm', '6:55 vm'], correctIndex: 2, explanation: 'Regmaak: 6:15 vm. + 40 minute = 6:55 vm. Loop: 6:55 vm. + 15 minute = 7:10 vm. (6:70 vm. tel die twee tydsduur bymekaar maar groepeer nooit die minute in ʼn ekstra uur nie; 7:00 vm. vergeet die 15-minute-stap; 6:55 vm. vergeet om die stap by die regmaak-tyd te tel.)' },
        { difficulty: 'Hard', question: 'Watter stap-vir-stap-metode werk korrek die eindtyd van ʼn aktiwiteit uit, gegee die begintyd en tydsduur?', checkMode: 'auto', options: ['Tel eers die minute, dan die ure, en as die totale ure oor 24 gaan, trek 12 af om dit reg te stel.', 'Tel net die ure van die tydsduur by die begintyd; die minute bly altyd dieselfde as die begintyd se minute.', 'Skakel die begintyd om na sekondes, tel die tydsduur in sekondes by, en deel dan deur 1 000 om die eindtyd te kry.', 'Tel eers die volle ure van die tydsduur by die begintyd. Tel dan die oorblywende minute by daardie resultaat. As die minute oor 60 gaan, dra 1 uur oor en hou die oorblywende minute. Kyk of die antwoord van vm. na nm. oorgaan (of oor middernag), en pas dienooreenkomstig aan.'], correctIndex: 3, explanation: 'Tel eers die volle ure by, dan die oorblywende minute, en dra ʼn uur oor wanneer die minute oor 60 gaan; kyk aan die einde ook of die antwoord oor vm./nm. of middernag gaan.' },

        // Afdeling G — Die Geskiedenis van Tyd (20-21, Maklik-Medium)
        { difficulty: 'Easy', question: 'Voordat meganiese horlosies bestaan het, watter antieke tydmeetinstrument het die skaduwee van ʼn stok of pilaar gebruik om die tyd van die dag te wys?', checkMode: 'auto', options: ['ʼn Sonwyser — dit gebruik ʼn wyser wat ʼn bewegende skaduwee gooi soos die son oor die lug beweeg.', 'ʼn Waterhorlosie — dit gebruik ʼn stok of pilaar met lyne gemerk om die skaduwee se posisie te wys.', 'ʼn Sandloper — sand wat deur ʼn stok-gevormde kamer loop, wys die tyd van die dag.', 'ʼn Kershorlosie — die skaduwee van die brandende kers beweeg oor gemerkte lyne om die tyd te wys.'], correctIndex: 0, explanation: 'ʼn Sonwyser gebruik ʼn wyser (gnomon) wat ʼn bewegende skaduwee gooi soos die son oor die lug beweeg, wat ongeveer wys hoe laat dit is. ʼn Waterhorlosie, sandloper en kershorlosie meet almal tyd sonder om ʼn skaduwee te gebruik.' },
        { difficulty: 'Medium', question: 'Waarom was ʼn sandloper nuttig vir matrose op ʼn bewegende skip, terwyl ʼn sonwyser dit nie was nie?', checkMode: 'auto', options: ['Omdat ʼn sandloper selfs in die donker gelees kan word, terwyl ʼn sonwyser te helder skyn om duidelik op die dek te sien.', 'ʼn Sandloper werk deur swaartekrag wat sand teen ʼn konstante tempo aftrek, maak nie saak hoe die skip wieg nie — dit is nie afhanklik daarvan om die son duidelik te sien nie soos ʼn sonwyser wel is.', 'Omdat matrose ʼn sonwyser in hulle sak kon dra, maar ʼn sandloper te groot was om op ʼn skip saam te neem.', 'Omdat ʼn sandloper nooit omgedraai hoef te word nie, so dit hou vir ewig aan om tyd te meet sonder dat matrose enigiets doen.'], correctIndex: 1, explanation: 'ʼn Sandloper werk deur swaartekrag wat sand teen ʼn konstante tempo aftrek, maak nie saak hoe die skip wieg nie, terwyl ʼn sonwyser afhang van om die son duidelik te sien — moeilik op ʼn bewegende, wolkbedekte see.' },
      ],
      scoreMessages: [
        { minScore: 22, message: 'Uitstekend! Jy kan met selfvertroue tyd vertel en tydprobleme oplos.' },
        { minScore: 17, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 11, message: 'Goeie poging! Kyk weer na die voorbeelde en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Afdeling A — Horlosies lees en tydwoordeskat (0-3, Maklik)
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 9 en 10, en die lang wyser wys na 6. Wat is die tyd?', checkMode: 'auto', options: ['9:30, of half tien', '10:30', '9:06', '6:45'], correctIndex: 0, explanation: "Kort wyser tussen 9 en 10 = 9 ure. Lang wyser by 6 = 6 × 5 = 30 minute. Tyd: 9:30, of half tien. (10:30 rond die kort wyser op na die volgende syfer; 9:06 lees die lang wyser se posisie verkeerd as letterlike minute; 6:45 verwar watter wyser die uur wys en watter die minute wys.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"54.1\" y2=\"76.7\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 6 en 7, en die lang wyser wys na 10. Wat is die tyd?', checkMode: 'auto', options: ['7:50', '6:50', '6:10', '6:02'], correctIndex: 1, explanation: "Kort wyser tussen 6 en 7 = 6 ure. Lang wyser by 10 = 10 × 5 = 50 minute. Tyd: 6:50, of tien voor sewe. (7:50 rond die kort wyser op; 6:10 lees die lang wyser se posisie verkeerd as letterlike minute; 6:02 lees die lang wyser se posisie-syfer heeltemal verkeerd.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"71.5\" y2=\"114\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"41.7\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Skryf "kwart oor elf" in digitale formaat.', checkMode: 'auto', options: ['11:45', '1:15', '11:15', '10:15'], correctIndex: 2, explanation: 'Kwart oor beteken 15 minute oor die uur. Kwart oor elf = 11:15. (11:45 verwar oor met voor; 1:15 keer die dubbelsyfer-uur om; 10:15 trek verkeerdelik ʼn uur af.)' },
        { difficulty: 'Easy', question: 'Skryf "tien voor twaalf" in digitale formaat.', checkMode: 'auto', options: ['12:50', '11:10', '12:10', '11:50'], correctIndex: 3, explanation: 'Tien voor twaalf beteken 60 − 10 = 50 minute oor elf = 11:50. (12:50 hou die uur as twaalf in plaas daarvan om een af te trek; 11:10 gebruik die 10 direk in plaas van 60 − 10; 12:10 kombineer albei foute.)' },
        // Afdeling B — vm./nm. en die 24-uur-dag (4-6, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Nomvula raak saans om 11:58 aan die slaap en word ʼn paar minute later wakker. Is die oomblik wanneer sy wakker word steeds nm., of het dit vm. geword?', checkMode: 'auto', options: ['Dit hang af of middernag al verby is. 11:58 saans is nm. (voor middernag). As sy net ʼn paar minute later wakker word, maar dit steeds voor 12:00 middernag is, is dit steeds nm.; sodra die horlosie verby 12:00 middernag gaan, word die tyd vm. omdat ʼn nuwe dag begin het.', 'Dit is altyd vm., want enige tyd naby middernag tel reeds as die begin van die volgende oggend.', 'Dit is altyd nm., want 11:58 nm. is reeds in die nm.-helfte van die dag, en dit verander nooit ongeag hoeveel tyd daarna verloop nie.', 'Dit hang af van hoeveel minute verloop — as minder as 5 minute verloop, bly dit nm., maar as meer as 5 minute verloop, word dit vm.'], correctIndex: 0, explanation: "Middernag (12:00) is die presiese oomblik wanneer nm. verander na vm. Of Nomvula steeds nm. is, of nou vm., hang net af van of die horlosie verby middernag gegaan het, nie van hoe 'naby' dit is nie, of enige minuutgrens." },
        { difficulty: 'Easy-Medium', question: 'Watter tyd is meer redelik om ontbyt te eet: 7:00 vm. of 7:00 nm.?', checkMode: 'auto', options: ['7:00 nm. — die meeste mense verkies om ʼn groter maaltyd aan die begin van die aand te eet, so dit pas ontbyt die beste.', '7:00 vm. is meer redelik. Ontbyt word in die oggend geëet, en 7:00 nm. is in die aand, wat eerder aandete-tyd sou wees.', 'Albei is ewe redelik, aangesien ontbyt op enige tyd van die dag geëet kan word.', '7:00 nm. — aangesien nm. na vm. in die dag kom, moet dit die eerste maaltyd van ʼn nuwe siklus verteenwoordig.'], correctIndex: 1, explanation: 'Ontbyt word in die oggend geëet, en 7:00 nm. is in die aand, wat eerder aandete-tyd sou wees.' },
        { difficulty: 'Medium', question: 'ʼn Toets begin om 11:30 vm. en eindig om 12:30 nm. Hoe lank duur die toets?', checkMode: 'auto', options: ['13 ure', '30 minute', '1 uur', '11 ure'], correctIndex: 2, explanation: 'Van 11:30 vm. tot 12:30 nm. is presies 1 uur. (13 ure tel verkeerdelik 12 ure by omdat die tyd van vm. na nm. oorgaan; 30 minute tel net die oorblywende minute; 11 ure verwar die wyserplaat se uur-syfers.)' },
        // Afdeling C — Eenheidsomskakeling (7-10, Medium)
        { difficulty: 'Medium', question: 'Skakel 4 minute om na sekondes.', checkMode: 'auto', options: ['4 sekondes', '24 sekondes', '44 sekondes', '240 sekondes'], correctIndex: 3, explanation: 'Minute → sekondes: vermenigvuldig met 60. 4 × 60 = 240 sekondes. (4 sekondes vergeet om heeltemal om te skakel; 24 sekondes laat ʼn nul val en vermenigvuldig met 6 in plaas van 60; 44 sekondes tel 40 by in plaas daarvan om te vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Skakel 72 ure om na dae.', checkMode: 'auto', options: ['3 dae', '1 728 dae', '6 dae', '48 dae'], correctIndex: 0, explanation: 'Ure → dae: deel deur 24. 72 ÷ 24 = 3 dae. (1 728 vermenigvuldig in plaas van te deel; 6 deel deur 12 in plaas van 24; 48 trek 24 af in plaas daarvan om te deel.)' },
        { difficulty: 'Medium', question: 'Skakel 90 minute om na ure en minute.', checkMode: 'auto', options: ['1 uur 90 minute', '1 uur 30 minute', '9 ure 0 minute', '0 ure 90 minute'], correctIndex: 1, explanation: '90 ÷ 60 = 1 res 30. Dus is 90 minute = 1 uur 30 minute. (1 u 90 min vind die uur reg maar vergeet om die res om te skakel; 9 u 0 min misplaas die plekwaarde; 0 u 90 min mis dat 90 minute wel ʼn volle uur bevat.)' },
        { difficulty: 'Medium', question: 'Sipho sê dat om 3 ure na minute om te skakel, jy 3 deur 60 moet deel. Is Sipho korrek?', checkMode: 'auto', options: ['Ja, Sipho is korrek — deling maak altyd vermenigvuldiging ongedaan, en aangesien ure verkry word deur minute te deel, gee 3 deur 60 die regte aantal minute.', 'Nee, Sipho is verkeerd — hy moet eerder 60 deur 3 deel, aangesien minute die groter eenheid is.', 'Nee, Sipho is verkeerd. Ure is ʼn groter eenheid as minute, dus moet jy vermenigvuldig, nie deel nie. 3 × 60 = 180 minute.', 'Ja, Sipho is korrek — 3 ÷ 60 gee 0,05, en jy vermenigvuldig dan met 1 000 om 50 minute te kry.'], correctIndex: 2, explanation: 'Ure is ʼn groter eenheid as minute, dus beteken omskakeling na die kleiner eenheid vermenigvuldiging, nie deling nie. 3 × 60 = 180 minute.' },
        // Afdeling D — Tydsduur bereken (11-14, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Dansklas begin om 4:45 nm. en eindig om 6:00 nm. Hoe lank is die klas?', checkMode: 'auto', options: ['45 minute', '1 uur 45 minute', '2 ure 15 minute', '1 uur 15 minute'], correctIndex: 3, explanation: 'Van 4:45 nm. tot 5:45 nm. = 1 uur. Van 5:45 nm. tot 6:00 nm. = 15 minute. Totaal: 1 uur 15 minute. (45 minute lees net die minuutsyfers wat gewys word; 1 u 45 min oortel die eerste gedeelte; 2 u 15 min tel per ongeluk ekstra tyd by.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Krieketwedstryd begin om 10:15 vm. en eindig om 1:45 nm. Hoe lank duur dit?', checkMode: 'auto', options: ['3 ure 30 minute', '3 ure', '4 ure 30 minute', '2 ure 30 minute'], correctIndex: 0, explanation: 'Van 10:15 vm. tot 1:15 nm. = 3 ure. Van 1:15 nm. tot 1:45 nm. = 30 minute. Totaal: 3 ure 30 minute. (3 ure vergeet die ekstra 30 minute; 4 u 30 min oortel wanneer dit oor middag gaan; 2 u 30 min trek die wyserplaat-syfers direk af sonder om 12 vir nm. by te tel.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Laataandfliek begin om 10:30 nm. en eindig om 12:15 vm. die volgende dag. Hoe lank is die fliek?', checkMode: 'auto', options: ['13 ure 45 minute', '1 uur 45 minute', '2 ure 15 minute', '1 uur 15 minute'], correctIndex: 1, explanation: 'Van 10:30 nm. tot 12:00 middernag = 1 uur 30 minute. Van middernag tot 12:15 vm. = 15 minute. Totaal: 1 uur 45 minute. (13 u 45 min behandel 12:15 vm. verkeerdelik asof dit 12 ure later dieselfde dag is; 2 u 15 min tel die gedeelte na middernag verkeerd; 1 u 15 min vergeet die 30 minute voor middernag.)' },
        { difficulty: 'Medium-Hard', question: 'Klas A loop van 8:30 vm. tot 9:50 vm. Klas B loop van 1:05 nm. tot 2:20 nm. Watter klas is langer?', checkMode: 'auto', options: ['Klas B — omdat sy begintyd (1:05 nm.) later in die dag is, moet dit langer duur.', 'Albei klasse is dieselfde lengte.', 'Klas A', 'Klas B — 2:20 minus 1:05 gee 1 uur 25 minute, wat langer is as Klas A se tyd.'], correctIndex: 2, explanation: "Klas A: 8:30 vm. tot 9:50 vm. = 1 uur 20 minute (80 minute). Klas B: 1:05 nm. tot 2:20 nm. = 1 uur 15 minute (75 minute). Aangesien 80 > 75, is Klas A langer — ʼn later begintyd maak nie ʼn klas langer nie, en Klas B se werklike tydsduur is 1 u 15 min, nie 1 u 25 min nie." },
        // Afdeling E — Begin-/eindtye en woordprobleme (15-17, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Padreis begin om 3:40 nm. Dit duur 3 ure 50 minute. Hoe laat eindig dit?', checkMode: 'auto', options: ['7:20 nm', '6:30 nm', '7:90 nm', '7:30 nm'], correctIndex: 3, explanation: 'Tel voort vanaf die begintyd: 3:40 nm. + 3 ure 50 minute = 7:30 nm. (7:20 nm. verloor 10 minute wanneer die uur oorgedra word; 6:30 nm. vergeet een van die ure; 7:90 nm. groepeer nooit die minute in ʼn ekstra uur nie.)' },
        { difficulty: 'Hard', question: 'ʼn Fliek eindig om 2:30 nm. Dit was 1 uur 45 minute lank. Hoe laat het dit begin?', checkMode: 'auto', options: ['12:45 nm', '1:15 nm', '4:15 nm', '12:15 nm'], correctIndex: 0, explanation: 'Tel terug vanaf die eindtyd: 2:30 nm. − 1 uur 45 minute = 12:45 nm. (1:15 nm. leen die minute verkeerd; 4:15 nm. tel die tydsduur by in plaas daarvan om dit af te trek; 12:15 nm. leen verkeerd en is 30 minute uit.)' },
        { difficulty: 'Hard', question: 'ʼn Netbaltoernooi loop van 9:00 vm. tot 12:30 nm., met ʼn 20-minute-pouse in die middel. Hoeveel tyd word werklik spelend deurgebring?', checkMode: 'auto', options: ['3 ure 30 minute', '3 ure 10 minute', '2 ure 50 minute', '3 ure 50 minute'], correctIndex: 1, explanation: 'Totale tyd van 9:00 vm. tot 12:30 nm. = 3 ure 30 minute = 210 minute. Trek die 20-minute-pouse af: 210 − 20 = 190 minute = 3 ure 10 minute. (3 u 30 min vergeet heeltemal om die pouse af te trek; 2 u 50 min trek die pouse twee keer af; 3 u 50 min tel die pouse by in plaas daarvan om dit af te trek.)' },
        // Afdeling F — Meerstap-redenering en regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Sportdag-rooster begin met ʼn 400 m-wedloop om 9:20 vm. wat 15 minute duur, gevolg deur ʼn 25-minute-pouse, en dan verspringproewe wat 50 minute duur. Hoe laat eindig die verspringproewe?', checkMode: 'auto', options: ['10:20 vm', '9:50 vm', '10:50 vm', '11:20 vm'], correctIndex: 2, explanation: 'Totale tyd vanaf die begin van die wedloop tot die einde van die verspring = 15 + 25 + 50 = 90 minute = 1 uur 30 minute. 9:20 vm. + 1 uur 30 minute = 10:50 vm. (10:20 vm. vergeet die 25-minute-pouse; 9:50 vm. tel net die wedloop se tyd; 11:20 vm. dra die uur te veel oor wanneer 90 minute bygetel word.)' },
        { difficulty: 'Hard', question: 'Waarom help dit om alle tye na minute (of ure) om te skakel voordat jy optel of aftrek, om foute te vermy wanneer jy meervoudige-stap-tydprobleme oplos?', checkMode: 'auto', options: ['Dit help omdat minute altyd ʼn kleiner getal is as ure, dus is foute minder waarskynlik met kleiner getalle.', 'Dit help omdat jy hergroepering heeltemal kan oorslaan sodra alles in minute geskryf is.', 'Dit help omdat vm. en nm. nie meer saak maak sodra ʼn tyd in minute geskryf is nie.', 'Om alles na dieselfde eenheid (soos minute) om te skakel, beteken jy kan die getalle direk optel of aftrek, net soos gewone getalle, sonder om oor ure en minute apart te bekommer. Sodra jy die totaal in een eenheid het, skakel jy dit aan die einde terug na ure en minute om, wat die kans op ʼn fout tydens die berekening verminder.'], correctIndex: 3, explanation: 'Om in een eenheid te werk, laat jou toe om soos gewone getalle op te tel of af te trek, en dan skakel jy dit slegs een keer aan die einde terug na ure en minute — wat die kans op ʼn fout op pad verminder.' },

        // Afdeling G — Die Geskiedenis van Tyd (20-21, Maklik-Medium)
        { difficulty: 'Easy', question: 'Watter antieke tydmeetinstrument het water gebruik wat teen ʼn konstante tempo van een houer na ʼn ander gedrup het om die verbygaan van tyd te wys?', checkMode: 'auto', options: ['ʼn Waterhorlosie — dit meet tyd deur water teen ʼn konstante tempo te laat drup, met gemerkte lyne wat wys hoeveel tyd verloop het.', 'ʼn Sonwyser — dit meet tyd deur water wat teen ʼn konstante tempo tussen twee houers drup.', 'ʼn Sandloper — dit gebruik drupwater in plaas van sand om ʼn vaste tydperk te meet.', 'ʼn Kershorlosie — dit gebruik eweredig gespasieerde watermerke wat in die was gebrand is om die verbygaande ure te wys.'], correctIndex: 0, explanation: 'ʼn Waterhorlosie (ook genoem ʼn clepsydra) meet tyd deur water teen ʼn konstante tempo te laat drup, met gemerkte lyne wat wys hoeveel tyd verloop het. ʼn Sonwyser, sandloper en kershorlosie meet almal tyd sonder om water te laat drup.' },
        { difficulty: 'Medium', question: 'Noem een voordeel wat ʼn waterhorlosie bo ʼn sonwyser gehad het.', checkMode: 'auto', options: ['ʼn Waterhorlosie is akkurater as ʼn sonwyser omdat water altyd teen presies dieselfde spoed drup, maak nie saak wat die temperatuur is nie.', 'ʼn Waterhorlosie kon binnenshuis, in die nag, of op ʼn bewolkte dag gebruik word, want dit het nie sonlig nodig gehad om te werk nie — ʼn sonwyser werk net in direkte sonlig.', 'ʼn Waterhorlosie is kleiner en makliker om rond te dra as ʼn sonwyser, sodat mense dit oral kon saamneem.', 'ʼn Waterhorlosie hoef nooit weer gevul te word nie, sodat dit vir ewig tyd kan meet sonder dat iemand dit dophou.'], correctIndex: 1, explanation: 'ʼn Waterhorlosie kon binnenshuis, in die nag, of op ʼn bewolkte dag gebruik word, want dit het nie sonlig nodig gehad om te werk nie — ʼn sonwyser werk net in direkte sonlig.' },
      ],
      scoreMessages: [
        { minScore: 22, message: 'Uitstekend! Jy kan met selfvertroue verlope tyd en tydsduur bereken.' },
        { minScore: 17, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 11, message: 'Goeie poging! Kyk weer na die tydsduurberekening-voorbeelde.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Afdeling A — Horlosies lees en tydwoordeskat (0-3, Maklik)
        { difficulty: 'Easy', question: 'Die kort wyser wys na 2, en die lang wyser wys na 12. Wat is die tyd?', checkMode: 'auto', options: ['2:00, of twee-uur', '12:10', '2:12', '3:00'], correctIndex: 0, explanation: "Kort wyser presies by 2 en lang wyser by 12 beteken dit is presies 2:00, of twee-uur. (12:10 verwar watter wyser die uur wys en watter die minute wys; 2:12 lees die lang wyser by 12 verkeerd as '12 minute' in plaas van 0; 3:00 rond die kort wyser op na die volgende syfer.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"112.7\" y2=\"69\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 11 en 12, en die lang wyser wys na 4. Wat is die tyd?', checkMode: 'auto', options: ['12:20', '11:20, of twintig oor elf', '11:04', '10:20'], correctIndex: 1, explanation: "Kort wyser tussen 11 en 12 = 11 ure. Lang wyser by 4 = 4 × 5 = 20 minute. Tyd: 11:20, of twintig oor elf. (12:20 rond die kort wyser op na die volgende syfer; 11:04 lees die lang wyser se posisie verkeerd as letterlike minute; 10:20 lees die kort wyser een syfer te laag.)", diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"74.1\" y2=\"54.9\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"128.3\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Skryf "half tien" in digitale formaat.', checkMode: 'auto', options: ['9:03', '10:30', '9:30', '9:15'], correctIndex: 2, explanation: "Half beteken 30 minute oor die uur. Half tien = 9:30. (9:03 verwar half met die uur-notasie; 10:30 tel per ongeluk ʼn ekstra uur by; 9:15 verwar half met kwart oor.)" },
        { difficulty: 'Easy', question: 'Skryf "twintig oor twee" in digitale formaat.', checkMode: 'auto', options: ['2:02', '3:20', '2:40', '2:20'], correctIndex: 3, explanation: 'Twintig oor twee beteken 20 minute oor die uur = 2:20. (2:02 keer die syfers om na die minuutplek; 3:20 tel ʼn ekstra uur by; 2:40 verdubbel per ongeluk die twintig.)' },
        // Afdeling B — vm./nm. en die 24-uur-dag (4-6, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Na watter syfer wys die lang wyser by "twintig oor" enige uur?', checkMode: 'auto', options: ['4', '20', '5', '2'], correctIndex: 0, explanation: 'Twintig oor = 20 minute. 20 ÷ 5 = 4, dus wys die lang wyser na die syfer 4. (20 gee die minute self in plaas van die wyserplaat-syfer; 5 is een syfer te veel, vir 25 minute; 2 deel verkeerdelik deur 10 in plaas van 5.)' },
        { difficulty: 'Easy-Medium', question: 'Watter tyd is meer redelik om op ʼn skoolnag bed toe te gaan: 8:30 nm. of 8:30 vm.?', checkMode: 'auto', options: ['8:30 vm. — die oggend is stiller, dus is dit ʼn meer rustige tyd om te slaap.', '8:30 nm. is meer redelik. Slaaptyd is in die aand, en 8:30 vm. is in die oggend, wat reeds tyd sou wees om op te wees en vir skool reg te maak.', 'Albei is ewe redelik, aangesien elkeen se slaaptyd verskil.', '8:30 vm. — want vm.-tye kom altyd voor nm.-tye, dus moet slaaptyd, wat voor wakker word kom, vm. wees.'], correctIndex: 1, explanation: 'Slaaptyd is in die aand, en 8:30 vm. is in die oggend, wat reeds tyd sou wees om op te wees en vir skool reg te maak.' },
        { difficulty: 'Medium', question: 'ʼn Sokkerwedstryd skop om 3:00 nm. af en eindig om 4:30 nm. Hoe lank duur die wedstryd?', checkMode: 'auto', options: ['30 minute', '2 ure 30 minute', '1 uur 30 minute', '1 uur'], correctIndex: 2, explanation: 'Van 3:00 nm. tot 4:30 nm. is 1 uur 30 minute. (30 minute lees net die minute wat gewys word en ignoreer die uur wat verbygegaan het; 2 u 30 min tel per ongeluk ʼn ekstra uur by; 1 uur vergeet die ekstra 30 minute na 4:00 nm.)' },
        // Afdeling C — Eenheidsomskakeling (7-10, Medium)
        { difficulty: 'Medium', question: 'Skakel 2 dae om na ure.', checkMode: 'auto', options: ['26 ure', '12 ure', '2 ure', '48 ure'], correctIndex: 3, explanation: 'Dae → ure: vermenigvuldig met 24. 2 × 24 = 48 ure. (26 ure tel verkeerdelik 24 + 2 bymekaar; 12 ure deel in plaas van te vermenigvuldig; 2 ure vergeet om heeltemal om te skakel.)' },
        { difficulty: 'Medium', question: 'Skakel 21 dae om na weke.', checkMode: 'auto', options: ['3 weke', '147 weke', '2 weke', '21 weke'], correctIndex: 0, explanation: 'Dae → weke: deel deur 7. 21 ÷ 7 = 3 weke. (147 weke vermenigvuldig in plaas van te deel; 2 weke deel deur die verkeerde faktor; 21 weke vergeet om heeltemal om te skakel.)' },
        { difficulty: 'Medium', question: 'Skakel 100 ure om na dae en ure.', checkMode: 'auto', options: ['4 dae 24 ure', '4 dae 4 ure', '10 dae 0 ure', '0 dae 100 ure'], correctIndex: 1, explanation: '100 ÷ 24 = 4 res 4. Dus is 100 ure = 4 dae en 4 ure. (4 dae 24 u laat ʼn ongeldige res wat self ʼn volle dag is; 10 dae 0 u misplaas die plekwaarde; 0 dae 100 u mis dat 100 ure wel volle dae bevat.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê: "2 ure 30 minute plus 45 minute is 2 ure 75 minute." Watter stelling verduidelik korrek wat verkeerd is met hierdie antwoord?', checkMode: 'auto', options: ['Die leerder is korrek — 2 ure 75 minute is ʼn heeltemal geldige manier om die antwoord te skryf, aangesien minute bo 60 kan gaan.', 'Die antwoord is verkeerd omdat jy 45 minute moes afgetrek het in plaas daarvan om dit by te tel, wat 1 uur 45 minute sou gee.', 'Die antwoord is verkeerd omdat 75 minute meer is as 60 minute, dus moet dit hergroepeer word na ʼn ekstra uur. 75 minute = 1 uur 15 minute, dus 2 ure + 1 uur 15 minute = 3 ure 15 minute.', 'Die antwoord is verkeerd omdat 30 + 45 gelyk moet wees aan 70 minute, nie 75 minute nie, dus is die korrekte antwoord 2 ure 70 minute.'], correctIndex: 2, explanation: '75 minute is meer as 60 minute, dus moet dit hergroepeer word: 75 minute = 1 uur 15 minute, wat 2 ure + 1 uur 15 minute = 3 ure 15 minute gee. ʼn Tyd kan nooit korrek gelaat word met 60 of meer minute wat gewys word nie.' },
        // Afdeling D — Tydsduur bereken (11-14, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Vasvra begin om 9:05 vm. en eindig om 9:55 vm. Hoe lank is die vasvra?', checkMode: 'auto', options: ['45 minute', '1 uur 5 minute', '55 minute', '50 minute'], correctIndex: 3, explanation: "Van 9:05 tot 9:55 is 50 minute. (45 minute trek die syfers in die verkeerde volgorde af; 1 u 5 min tel verkeerdelik ʼn uur by wat nooit verbygegaan het nie; 55 minute kopieer net die eindtyd se minute.)" },
        { difficulty: 'Medium-Hard', question: 'ʼn Vlug vertrek om 10:40 vm. en kom om 1:25 nm. aan. Hoe lank is die vlug?', checkMode: 'auto', options: ['2 ure 45 minute', '3 ure 15 minute', '2 ure 15 minute', '3 ure 45 minute'], correctIndex: 0, explanation: 'Van 10:40 vm. tot 1:40 nm. = 3 ure. Maar die vlug kom 15 minute vroeër aan om 1:25 nm., dus 3 ure − 15 minute = 2 ure 45 minute. (3 u 15 min vergeet om die 15 minute af te trek; 2 u 15 min trek 30 minute af in plaas van 15; 3 u 45 min tel per ongeluk ʼn ekstra uur by.)' },
        { difficulty: 'Medium-Hard', question: 'ʼn Mark maak om 11:30 nm. oop en om 5:00 vm. die volgende dag toe. Hoe lank is die mark oop?', checkMode: 'auto', options: ['6 ure 30 minute', '5 ure 30 minute', '17 ure 30 minute', '4 ure 30 minute'], correctIndex: 1, explanation: 'Van 11:30 nm. tot middernag = 30 minute. Van middernag tot 5:00 vm. = 5 ure. Totaal: 5 ure 30 minute. (6 u 30 min tel die gedeelte na middernag verkeerd; 17 u 30 min behandel 5 vm. asof dit 5 nm. dieselfde dag is; 4 u 30 min vergeet die 30 minute voor middernag.)' },
        { difficulty: 'Medium-Hard', question: 'Trein A reis van 8:10 vm. tot 11:40 vm. Trein B reis van 9:00 vm. tot 12:15 nm. Watter treinreis is langer?', checkMode: 'auto', options: ['Trein B — omdat dit later in die oggend vertrek, moet sy reis verder in die dag inloop.', 'Albei treinreise vat presies dieselfde tyd.', 'Trein A', 'Trein B — 12:15 minus 9:00 gee 3 ure 30 minute, dieselfde as Trein A, dus moet Trein B eintlik die langer een wees omdat dit in die middag aankom.'], correctIndex: 2, explanation: 'Trein A: 8:10 vm. tot 11:40 vm. = 3 ure 30 minute (210 minute). Trein B: 9:00 vm. tot 12:15 nm. = 3 ure 15 minute (195 minute). Aangesien 210 > 195, is Trein A langer — later vertrek maak nie ʼn reis langer nie.' },
        // Afdeling E — Begin-/eindtye en woordprobleme (15-17, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Kampeertog begin om 11:10 vm. Dit duur 4 ure 20 minute. Hoe laat eindig dit?', checkMode: 'auto', options: ['3:10 nm', '4:30 nm', '3:50 nm', '3:30 nm'], correctIndex: 3, explanation: 'Tel voort vanaf die begintyd: 11:10 vm. + 4 ure 20 minute = 3:30 nm. (3:10 nm. vergeet om die 20 minute by te tel; 4:30 nm. dra die uur te veel oor; 3:50 nm. tel 10 + 20 verkeerd as 40 in plaas van 30.)' },
        { difficulty: 'Hard', question: 'ʼn Verjaardagpartytjie eindig om 5:00 nm. Dit het 3 ure geduur. Hoe laat het dit begin?', checkMode: 'auto', options: ['2:00 nm', '8:00 nm', '2:30 nm', '5:00 vm'], correctIndex: 0, explanation: 'Tel terug vanaf die eindtyd: 5:00 nm. − 3 ure = 2:00 nm. (8:00 nm. tel die tydsduur by in plaas daarvan om dit af te trek; 2:30 nm. tel per ongeluk ʼn ekstra 30 minute by; 5:00 vm. trek verkeerdelik 12 ure af in plaas van 3.)' },
        { difficulty: 'Hard', question: "Thabo se gesin ry na die kus. Hulle vertrek om 5:45 vm. en die reis vat gewoonlik 6 ure, maar padwerke voeg 35 minute by. Hoe laat kom hulle aan?", checkMode: 'auto', options: ['11:20 vm', '12:20 nm', '12:20 vm', '11:80 vm'], correctIndex: 1, explanation: 'Totale reistyd = 6 ure + 35 minute = 6 ure 35 minute. 5:45 vm. + 6 ure 35 minute = 12:20 nm. (11:20 vm. vergeet die 35-minute-padwerke-vertraging; 12:20 vm. hou die tyd in vm. in plaas daarvan om na nm. oor te gaan; 11:80 vm. groepeer nooit die minute in ʼn ekstra uur nie.)' },
        // Afdeling F — Meerstap-redenering en regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Boer begin om 5:15 vm. om koeie te melk. Dit vat 1 uur 50 minute. Dan, na ʼn 40-minute-ontbytpouse, begin hy die diere voer, wat nog 1 uur 10 minute vat. Hoe laat maak hy klaar om die diere te voer?', checkMode: 'auto', options: ['7:45 vm', '8:15 vm', '8:55 vm', '9:15 vm'], correctIndex: 2, explanation: 'Melk: 5:15 vm. + 1 uur 50 minute = 7:05 vm. Ontbyt: 7:05 vm. + 40 minute = 7:45 vm. Voer: 7:45 vm. + 1 uur 10 minute = 8:55 vm. (7:45 vm. vergeet die laaste voer-stap; 8:15 vm. tel die voer-tyd verkeerd; 9:15 vm. tel die totale oordrag verkeerd.)' },
        { difficulty: 'Hard', question: 'Waarom is dit belangrik om te weet of ʼn tyd vm. of nm. is wanneer jy woordprobleme oor tydsduur oplos?', checkMode: 'auto', options: ['Dit is net belangrik vir baie lang aktiwiteite, soos ʼn reis wat verskeie dae duur, maar nie vir kort aktiwiteite soos ʼn enkele klas nie.', 'Dit maak net saak vir hoe netjies die finale antwoord geskryf word, nie vir die werklike berekening van die tydsduur nie.', 'vm. en nm. vertel jou die presiese minuut waarop ʼn aktiwiteit begin het, dus hoef jy nie na die res van die tyd te kyk nie.', 'vm. en nm. vertel jou of ʼn tyd in die eerste helfte of tweede helfte van die dag is. Sonder om dit te weet, kan jy die verkeerde tydsduur bereken — byvoorbeeld, om 7:00 vm. en 7:00 nm. te verwar, sal ʼn heeltemal ander (en verkeerde) antwoord gee vir hoe lank ʼn aktiwiteit geduur het.'], correctIndex: 3, explanation: 'vm. en nm. vertel jou of ʼn tyd in die eerste of tweede helfte van die dag is — om dit te verwar (bv. 7:00 vm. met 7:00 nm.) gee ʼn heeltemal verkeerde tydsduur, vir aktiwiteite van enige lengte.' },

        // Afdeling G — Die Geskiedenis van Tyd (20-21, Maklik-Medium)
        { difficulty: 'Easy', question: 'Watter antieke tydmeetinstrument gebruik sand wat deur ʼn nou nekkie van ʼn boonste kamer na ʼn onderste kamer loop, om ʼn vaste tydperk te meet?', checkMode: 'auto', options: ['ʼn Sandloper — sand loop deur ʼn nou nekkie van ʼn boonste kamer na ʼn onderste kamer, wat ʼn vaste tydperk meet.', 'ʼn Sonwyser — sand binne-in sy basis loop deur ʼn nou nekkie om ʼn vaste tydperk te meet.', 'ʼn Waterhorlosie — dit gebruik ʼn nou nekkie tussen twee glaskamers gevul met drupwater in plaas van sand.', 'ʼn Kershorlosie — was loop af deur ʼn nou opening aan die basis van die kers om die ure te merk.'], correctIndex: 0, explanation: 'ʼn Sandloper het twee glaskamers wat deur ʼn nou nekkie verbind is. Sand loop teen ʼn konstante tempo van bo na onder, wat ʼn vaste hoeveelheid tyd meet, dikwels presies een uur. ʼn Sonwyser, waterhorlosie en kershorlosie gebruik nie lopende sand nie.' },
        { difficulty: 'Medium', question: 'Watter een van hierdie is ʼn korrekte rede waarom moderne horlosies meer nuttig is in die alledaagse lewe as ʼn sonwyser of ʼn sandloper?', checkMode: 'auto', options: ['Moderne horlosies is die enigste tydmeetinstrumente wat nog ooit binnenshuis bestaan het, anders as ʼn sonwyser of sandloper wat net buite werk.', 'Moderne horlosies werk enige tyd van die dag of nag, in enige weer, en kan tyd deurlopend en presies meet sonder dat iemand dit hoef dop te hou, te vul, of om te draai — anders as ʼn sonwyser (het sonlig nodig) of ʼn sandloper (moet omgedraai word en meet net ʼn vaste hoeveelheid tyd).', 'Moderne horlosies is hoofsaaklik nuttig omdat hulle kleiner en ligter is as ʼn sonwyser, wat hulle makliker maak om rond te dra.', 'Moderne horlosies is net beter omdat hulle minute en sekondes wys, terwyl ʼn sonwyser en sandloper net volle ure kan wys.'], correctIndex: 1, explanation: 'Moderne horlosies werk enige tyd van die dag of nag, in enige weer, en meet tyd deurlopend en presies sonder dat dit dopgehou, gevul, of omgedraai hoef te word — anders as ʼn sonwyser of ʼn sandloper.' },
      ],
      scoreMessages: [
        { minScore: 22, message: 'Fantasties! Jy kan tydberekenings op wêreldgerigte probleme toepas.' },
        { minScore: 17, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 11, message: 'Goeie poging! Kyk weer na die voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
