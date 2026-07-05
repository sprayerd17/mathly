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
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — GRONDLIGGENDE TYD-LEES EN EENHEIDSOMSKAKELINGS (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Tyd Lees en Eenheidsomskakelings',
      questions: [
        { difficulty: 'Easy', question: 'Die kort wyser wys na 6 en die lang wyser wys na 12. Wat is die tyd?', answer: '6:00', checkMode: 'auto', correctAnswer: '6:00', correctAnswers: ['6:00', '600', '6uur', '6 uur'], explanation: 'Kort wyser by 6 = 6 ure. Lang wyser by 12 = 0 minute. Tyd: 6:00, of ses-uur.' },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 3 en 4, en die lang wyser wys na 6. Wat is die tyd?', answer: '3:30', checkMode: 'auto', correctAnswer: '3:30', correctAnswers: ['3:30', '330', '3:30nm', '3:30vm'], explanation: 'Kort wyser tussen 3 en 4 = 3 ure. Lang wyser by 6 = 6 × 5 = 30 minute. Tyd: 3:30, of half vier.' },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 8 en 9, en die lang wyser wys na 3. Wat is die tyd?', answer: '8:15', checkMode: 'auto', correctAnswer: '8:15', correctAnswers: ['8:15', '815'], explanation: 'Kort wyser tussen 8 en 9 = 8 ure. Lang wyser by 3 = 3 × 5 = 15 minute. Tyd: 8:15, of kwart oor agt.' },
        { difficulty: 'Easy', question: 'Skryf "half tien" in digitale formaat.', answer: '9:30', checkMode: 'auto', correctAnswer: '9:30', correctAnswers: ['9:30', '930'], explanation: 'Half beteken 30 minute oor die uur. Half tien = 9:30.' },
        { difficulty: 'Easy', question: 'Skryf "kwart voor ses" in digitale formaat.', answer: '5:45', checkMode: 'auto', correctAnswer: '5:45', correctAnswers: ['5:45', '545'], explanation: 'Kwart voor beteken 15 minute voor die uur. Kwart voor ses = 60 − 15 = 45 minute oor vyf = 5:45.' },
        { difficulty: 'Easy', question: 'Skryf "kwart oor elf" in digitale formaat.', answer: '11:15', checkMode: 'auto', correctAnswer: '11:15', correctAnswers: ['11:15', '1115'], explanation: 'Kwart oor beteken 15 minute oor die uur. Kwart oor elf = 11:15.' },
        { difficulty: 'Easy', question: 'Skryf "kwart voor ses in die aand" in digitale formaat met vm./nm.', answer: '5:45 nm', checkMode: 'auto', correctAnswer: '5:45nm', correctAnswers: ['5:45nm', '5:45 nm', '545nm'], explanation: 'Kwart voor ses = 45 minute oor vyf = 5:45. Aand = nm. Digitaal: 5:45 nm.' },
        { difficulty: 'Easy', question: 'Skryf "vyf-en-twintig voor nege" in digitale formaat.', answer: '8:35', checkMode: 'auto', correctAnswer: '8:35', correctAnswers: ['8:35', '835'], explanation: 'Vyf-en-twintig voor nege beteken 60 − 25 = 35 minute oor agt = 8:35.' },
        { difficulty: 'Easy', question: 'Skryf "tien voor twaalf" in digitale formaat.', answer: '11:50', checkMode: 'auto', correctAnswer: '11:50', correctAnswers: ['11:50', '1150'], explanation: 'Tien voor twaalf beteken 60 − 10 = 50 minute oor elf = 11:50.' },
        { difficulty: 'Easy', question: 'Skryf "twintig oor twee" in digitale formaat.', answer: '2:20', checkMode: 'auto', correctAnswer: '2:20', correctAnswers: ['2:20', '220'], explanation: 'Twintig oor twee beteken 20 minute oor die uur = 2:20.' },
        { difficulty: 'Medium', question: 'Op ʼn digitale horlosie, kom 7:05 voor of na middag as dit vm. is?', answer: 'voor middag', checkMode: 'auto', correctAnswer: 'voor middag', correctAnswers: ['voor middag', 'voormiddag', 'voor', 'vm', 'vm.'], explanation: 'vm. beteken die tyd is tussen middernag en middag, dus is 7:05 vm. voor middag.' },
        { difficulty: 'Medium', question: 'Op ʼn digitale horlosie, kom 9:40 voor of na middag as dit nm. is?', answer: 'na middag', checkMode: 'auto', correctAnswer: 'na middag', correctAnswers: ['na middag', 'namiddag', 'na', 'nm', 'nm.'], explanation: 'nm. beteken die tyd is tussen middag en middernag, dus is 9:40 nm. na middag.' },
        { difficulty: 'Medium', question: 'Na watter syfer wys die lang wyser by "twintig oor" enige uur?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'Twintig oor = 20 minute. 20 ÷ 5 = 4, dus wys die lang wyser na die syfer 4.' },
        { difficulty: 'Medium', question: 'Skakel 5 ure om na minute.', answer: '300 minute', checkMode: 'auto', correctAnswer: '300minute', correctAnswers: ['300minute', '300', '300 minute', '300min'], explanation: 'Ure → minute: vermenigvuldig met 60. 5 × 60 = 300 minute.' },
        { difficulty: 'Medium', question: 'Skakel 240 minute om na ure.', answer: '4 ure', checkMode: 'auto', correctAnswer: '4ure', correctAnswers: ['4ure', '4', '4 ure', '4uur'], explanation: 'Minute → ure: deel deur 60. 240 ÷ 60 = 4 ure.' },
        { difficulty: 'Medium', question: 'Skakel 4 minute om na sekondes.', answer: '240 sekondes', checkMode: 'auto', correctAnswer: '240sekondes', correctAnswers: ['240sekondes', '240', '240 sekondes', '240sek'], explanation: 'Minute → sekondes: vermenigvuldig met 60. 4 × 60 = 240 sekondes.' },
        { difficulty: 'Medium', question: 'Skakel 300 sekondes om na minute.', answer: '5 minute', checkMode: 'auto', correctAnswer: '5minute', correctAnswers: ['5minute', '5', '5 minute', '5min'], explanation: 'Sekondes → minute: deel deur 60. 300 ÷ 60 = 5 minute.' },
        { difficulty: 'Medium', question: 'Skakel 2 dae om na ure.', answer: '48 ure', checkMode: 'auto', correctAnswer: '48ure', correctAnswers: ['48ure', '48', '48 ure', '48uur'], explanation: 'Dae → ure: vermenigvuldig met 24. 2 × 24 = 48 ure.' },
        { difficulty: 'Medium', question: 'Skakel 72 ure om na dae.', answer: '3 dae', checkMode: 'auto', correctAnswer: '3dae', correctAnswers: ['3dae', '3', '3 dae'], explanation: 'Ure → dae: deel deur 24. 72 ÷ 24 = 3 dae.' },
        { difficulty: 'Medium', question: 'Skakel 3 weke om na dae.', answer: '21 dae', checkMode: 'auto', correctAnswer: '21dae', correctAnswers: ['21dae', '21', '21 dae'], explanation: 'Weke → dae: vermenigvuldig met 7. 3 × 7 = 21 dae.' },
        { difficulty: 'Medium', question: 'Skakel 21 dae om na weke.', answer: '3 weke', checkMode: 'auto', correctAnswer: '3weke', correctAnswers: ['3weke', '3', '3 weke'], explanation: 'Dae → weke: deel deur 7. 21 ÷ 7 = 3 weke.' },
        { difficulty: 'Medium', question: 'Skakel 90 minute om na ure en minute.', answer: '1 uur 30 minute', checkMode: 'auto', correctAnswer: '1uur30minute', correctAnswers: ['1uur30minute', '1 uur 30 minute', '1uur30min', '90minute', '90min', '90'], explanation: '90 ÷ 60 = 1 res 30. Dus is 90 minute = 1 uur 30 minute.' },
        { difficulty: 'Medium', question: 'Skakel 200 minute om na ure en minute.', answer: '3 ure 20 minute', checkMode: 'auto', correctAnswer: '3ure20minute', correctAnswers: ['3ure20minute', '3 ure 20 minute', '3uur20min', '200minute', '200min', '200'], explanation: '200 ÷ 60 = 3 res 20. Dus is 200 minute = 3 ure 20 minute.' },
        { difficulty: 'Hard', question: 'Amahle sê 6 weke is dieselfde as 42 dae. Is sy korrek? Wys jou berekening.', answer: 'Ja, Amahle is korrek. 6 weke = 6 × 7 = 42 dae.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Skakel 100 ure om na dae en ure.', answer: '4 dae 4 ure', checkMode: 'auto', correctAnswer: '4dae4ure', correctAnswers: ['4dae4ure', '4 dae 4 ure', '100ure', '100'], explanation: '100 ÷ 24 = 4 res 4. Dus is 100 ure = 4 dae en 4 ure.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue tyd vertel en tussen tydeenhede omskakel.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Kyk weer na die horlosielees- en omskakelingsvoorbeelde.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — VERLOPE TYD / TYDSDUURBEREKENINGE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Verlope Tyd en Tydsduur',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Les begin om 9:00 vm. en eindig om 11:00 vm. Hoe lank is die les?', answer: '2 ure', checkMode: 'auto', correctAnswer: '2ure', correctAnswers: ['2ure', '2 ure', '2uur', '120minute', '120'], explanation: 'Van 9:00 tot 11:00 is presies 2 ure.' },
        { difficulty: 'Easy', question: 'ʼn Speletjie begin om 6:20 vm. en eindig om 6:50 vm. Hoe lank duur die speletjie?', answer: '30 minute', checkMode: 'auto', correctAnswer: '30minute', correctAnswers: ['30minute', '30 minute', '30min', '30'], explanation: 'Van 6:20 tot 6:50 is 30 minute.' },
        { difficulty: 'Easy', question: 'ʼn Telefoonoproep begin om 9:50 vm. en eindig om 10:20 vm. Hoe lank duur die oproep?', answer: '30 minute', checkMode: 'auto', correctAnswer: '30minute', correctAnswers: ['30minute', '30 minute', '30min', '30'], explanation: 'Van 9:50 tot 10:00 is 10 minute, dan 10:00 tot 10:20 is 20 minute. Totaal: 30 minute.' },
        { difficulty: 'Easy', question: 'ʼn Toets begin om 11:30 vm. en eindig om 12:30 nm. Hoe lank duur die toets?', answer: '1 uur', checkMode: 'auto', correctAnswer: '1uur', correctAnswers: ['1uur', '1 uur', '60minute', '60'], explanation: 'Van 11:30 vm. tot 12:30 nm. is presies 1 uur.' },
        { difficulty: 'Medium', question: 'ʼn Krieketwedstryd begin om 10:15 vm. en eindig om 1:45 nm. Hoe lank duur dit?', answer: '3 ure 30 minute', checkMode: 'auto', correctAnswer: '3ure30minute', correctAnswers: ['3ure30minute', '3 ure 30 minute', '3uur30min', '210minute', '210'], explanation: 'Van 10:15 vm. tot 1:15 nm. = 3 ure. Van 1:15 nm. tot 1:45 nm. = 30 minute. Totaal: 3 ure 30 minute.' },
        { difficulty: 'Medium', question: 'ʼn Toneelstuk begin om 11:40 vm. en eindig om 1:10 nm. Hoe lank is die toneelstuk?', answer: '1 uur 30 minute', checkMode: 'auto', correctAnswer: '1uur30minute', correctAnswers: ['1uur30minute', '1 uur 30 minute', '1uur30min', '90minute', '90'], explanation: 'Van 11:40 vm. tot 12:40 nm. = 1 uur. Van 12:40 nm. tot 1:10 nm. = 30 minute. Totaal: 1 uur 30 minute.' },
        { difficulty: 'Medium', question: 'ʼn Radioprogram begin om 2:50 nm. en eindig om 4:05 nm. Hoe lank is die program?', answer: '1 uur 15 minute', checkMode: 'auto', correctAnswer: '1uur15minute', correctAnswers: ['1uur15minute', '1 uur 15 minute', '1uur15min', '75minute', '75'], explanation: 'Van 2:50 nm. tot 3:50 nm. = 1 uur. Van 3:50 nm. tot 4:05 nm. = 15 minute. Totaal: 1 uur 15 minute.' },
        { difficulty: 'Medium', question: 'ʼn Werkswinkel begin om 8:00 vm. en eindig om 3:30 nm. Hoe lank duur dit?', answer: '7 ure 30 minute', checkMode: 'auto', correctAnswer: '7ure30minute', correctAnswers: ['7ure30minute', '7 ure 30 minute', '7uur30min', '450minute', '450'], explanation: 'Van 8:00 vm. tot 12:00 nm. = 4 ure. Van 12:00 nm. tot 3:30 nm. = 3 ure 30 minute. Totaal: 7 ure 30 minute.' },
        { difficulty: 'Medium', question: 'ʼn Konsert begin om 7:15 nm. en eindig om 9:00 nm. Hoe lank duur dit?', answer: '1 uur 45 minute', checkMode: 'auto', correctAnswer: '1uur45minute', correctAnswers: ['1uur45minute', '1 uur 45 minute', '1uur45min', '105minute', '105'], explanation: 'Van 7:15 nm. tot 8:15 nm. = 1 uur. Van 8:15 nm. tot 9:00 nm. = 45 minute. Totaal: 1 uur 45 minute.' },
        { difficulty: 'Medium', question: 'ʼn Vergadering begin om 12:00 nm. en eindig om 3:15 nm. Hoe lank is die vergadering?', answer: '3 ure 15 minute', checkMode: 'auto', correctAnswer: '3ure15minute', correctAnswers: ['3ure15minute', '3 ure 15 minute', '3uur15min', '195minute', '195'], explanation: 'Van 12:00 nm. tot 3:00 nm. = 3 ure. Van 3:00 nm. tot 3:15 nm. = 15 minute. Totaal: 3 ure 15 minute.' },
        { difficulty: 'Medium', question: 'ʼn Dansklas begin om 4:45 nm. en eindig om 6:00 nm. Hoe lank is die klas?', answer: '1 uur 15 minute', checkMode: 'auto', correctAnswer: '1uur15minute', correctAnswers: ['1uur15minute', '1 uur 15 minute', '1uur15min', '75minute', '75'], explanation: 'Van 4:45 nm. tot 5:45 nm. = 1 uur. Van 5:45 nm. tot 6:00 nm. = 15 minute. Totaal: 1 uur 15 minute.' },
        { difficulty: 'Medium', question: 'ʼn Kort pouse begin om 7:40 vm. en eindig om 8:05 vm. Hoe lank is die pouse?', answer: '25 minute', checkMode: 'auto', correctAnswer: '25minute', correctAnswers: ['25minute', '25 minute', '25min', '25'], explanation: 'Van 7:40 tot 8:00 = 20 minute. Van 8:00 tot 8:05 = 5 minute. Totaal: 25 minute.' },
        { difficulty: 'Medium', question: 'ʼn Wandeltog begin om 1:20 nm. en eindig om 5:50 nm. Hoe lank is die wandeltog?', answer: '4 ure 30 minute', checkMode: 'auto', correctAnswer: '4ure30minute', correctAnswers: ['4ure30minute', '4 ure 30 minute', '4uur30min', '270minute', '270'], explanation: 'Van 1:20 nm. tot 5:20 nm. = 4 ure. Van 5:20 nm. tot 5:50 nm. = 30 minute. Totaal: 4 ure 30 minute.' },
        { difficulty: 'Medium', question: 'ʼn Vasvra begin om 9:05 vm. en eindig om 9:55 vm. Hoe lank is die vasvra?', answer: '50 minute', checkMode: 'auto', correctAnswer: '50minute', correctAnswers: ['50minute', '50 minute', '50min', '50'], explanation: 'Van 9:05 tot 9:55 is 50 minute.' },
        { difficulty: 'Hard', question: 'ʼn Laataandfliek begin om 10:30 nm. en eindig om 12:15 vm. die volgende dag. Hoe lank is die fliek?', answer: '1 uur 45 minute', checkMode: 'auto', correctAnswer: '1uur45minute', correctAnswers: ['1uur45minute', '1 uur 45 minute', '1uur45min', '105minute', '105'], explanation: 'Van 10:30 nm. tot 12:00 middernag = 1 uur 30 minute. Van middernag tot 12:15 vm. = 15 minute. Totaal: 1 uur 45 minute.' },
        { difficulty: 'Hard', question: 'ʼn Nagtrein vertrek om 11:00 nm. en kom om 6:00 vm. die volgende dag aan. Hoe lank is die reis?', answer: '7 ure', checkMode: 'auto', correctAnswer: '7ure', correctAnswers: ['7ure', '7 ure', '7uur', '420minute', '420'], explanation: 'Van 11:00 nm. tot middernag = 1 uur. Van middernag tot 6:00 vm. = 6 ure. Totaal: 7 ure.' },
        { difficulty: 'Hard', question: 'ʼn Fliek eindig om 2:30 nm. Dit was 1 uur 45 minute lank. Hoe laat het dit begin?', answer: '12:45 nm', checkMode: 'auto', correctAnswer: '12:45nm', correctAnswers: ['12:45nm', '12:45 nm', '1245nm'], explanation: 'Tel terug vanaf die eindtyd: 2:30 nm. − 1 uur 45 minute = 12:45 nm.' },
        { difficulty: 'Hard', question: 'ʼn Busrit eindig om 9:55 vm. Dit het 1 uur 20 minute geneem. Hoe laat het dit begin?', answer: '8:35 vm', checkMode: 'auto', correctAnswer: '8:35vm', correctAnswers: ['8:35vm', '8:35 vm', '835vm'], explanation: 'Tel terug vanaf die eindtyd: 9:55 vm. − 1 uur 20 minute = 8:35 vm.' },
        { difficulty: 'Hard', question: 'ʼn Swemsessie begin om 7:20 vm. Dit duur 2 ure 35 minute. Hoe laat eindig dit?', answer: '9:55 vm', checkMode: 'auto', correctAnswer: '9:55vm', correctAnswers: ['9:55vm', '9:55 vm', '955vm'], explanation: 'Tel voort vanaf die begintyd: 7:20 vm. + 2 ure 35 minute = 9:55 vm.' },
        { difficulty: 'Hard', question: 'ʼn Padreis begin om 3:40 nm. Dit duur 3 ure 50 minute. Hoe laat eindig dit?', answer: '7:30 nm', checkMode: 'auto', correctAnswer: '7:30nm', correctAnswers: ['7:30nm', '7:30 nm', '730nm'], explanation: 'Tel voort vanaf die begintyd: 3:40 nm. + 3 ure 50 minute = 7:30 nm.' },
        { difficulty: 'Hard', question: 'ʼn Kampeertog begin om 11:10 vm. Dit duur 4 ure 20 minute. Hoe laat eindig dit?', answer: '3:30 nm', checkMode: 'auto', correctAnswer: '3:30nm', correctAnswers: ['3:30nm', '3:30 nm', '330nm'], explanation: 'Tel voort vanaf die begintyd: 11:10 vm. + 4 ure 20 minute = 3:30 nm.' },
        { difficulty: 'Hard', question: 'Sipho sê die tyd van 8:45 vm. tot 1:20 nm. is 4 ure 20 minute. Is hy korrek? Wys jou berekening.', answer: 'Nee, Sipho is verkeerd. Van 8:45 vm. tot 12:45 nm. is 4 ure. Van 12:45 nm. tot 1:20 nm. is 35 minute. Totaal: 4 ure 35 minute, nie 4 ure 20 minute nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Studiesessie begin om 9:55 vm. Dit duur 1 uur 20 minute. Hoe laat eindig dit?', answer: '11:15 vm', checkMode: 'auto', correctAnswer: '11:15vm', correctAnswers: ['11:15vm', '11:15 vm', '1115vm'], explanation: 'Tel voort vanaf die begintyd: 9:55 vm. + 1 uur 20 minute = 11:15 vm.' },
        { difficulty: 'Hard', question: 'Twee lesse loop na mekaar: Les A neem 1 uur 30 minute en Les B neem 55 minute. Wat is die totale tyd vir albei lesse in ure en minute?', answer: '2 ure 25 minute', checkMode: 'auto', correctAnswer: '2ure25minute', correctAnswers: ['2ure25minute', '2 ure 25 minute', '2uur25min', '145minute', '145'], explanation: '1 uur 30 minute = 90 minute. 90 + 55 = 145 minute. 145 ÷ 60 = 2 res 25. Totaal: 2 ure 25 minute.' },
        { difficulty: 'Hard', question: 'ʼn Aflosresies word in twee dele gehardloop. Deel 1 neem 8 minute en Deel 2 neem 5 minute 20 sekondes minder as Deel 1. Wat is die tydsduur van Deel 2? Gee jou antwoord in minute en sekondes.', answer: '2 minute 40 sekondes', checkMode: 'auto', correctAnswer: '2minute40sekondes', correctAnswers: ['2minute40sekondes', '2 minute 40 sekondes', '2min40sek', '160sekondes', '160'], explanation: 'Deel 1 = 8 minute = 8 min 0 sek. Deel 2 = Deel 1 − 5 minute 20 sekondes = 8 min 0 sek − 5 min 20 sek = 2 minute 40 sekondes.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan met selfvertroue verlope tyd en tydsduur bereken.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Kyk weer na die tydsduurberekening-voorbeelde.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — WÊRELDGERIGTE TYD-WOORDPROBLEME (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Wêreldgerigte Tyd-woordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'Lerato verlaat die huis om 7:15 vm. Dit vat haar 20 minute om skool toe te loop. Hoe laat kom sy aan?', answer: '7:35 vm', checkMode: 'auto', correctAnswer: '7:35vm', correctAnswers: ['7:35vm', '7:35 vm', '735vm'], explanation: 'Tel die looptyd by die begintyd: 7:15 vm. + 20 minute = 7:35 vm.' },
        { difficulty: 'Easy', question: 'ʼn Busrit begin om 8:05 vm. en eindig om 8:47 vm. Hoe lank is die busrit?', answer: '42 minute', checkMode: 'auto', correctAnswer: '42minute', correctAnswers: ['42minute', '42 minute', '42min', '42'], explanation: 'Van 8:05 tot 8:47 is 42 minute.' },
        { difficulty: 'Easy', question: 'ʼn Sokkerwedstryd skop om 3:00 nm. af en eindig om 4:30 nm. Hoe lank duur die wedstryd?', answer: '1 uur 30 minute', checkMode: 'auto', correctAnswer: '1uur30minute', correctAnswers: ['1uur30minute', '1 uur 30 minute', '1uur30min', '90minute', '90'], explanation: 'Van 3:00 nm. tot 4:30 nm. is 1 uur 30 minute.' },
        { difficulty: 'Easy', question: 'ʼn Winkel maak om 8 vm. oop en om 5 nm. toe. Hoeveel ure is die winkel oop?', answer: '9 ure', checkMode: 'auto', correctAnswer: '9ure', correctAnswers: ['9ure', '9 ure', '9uur', '540minute', '540'], explanation: 'Van 8 vm. tot 5 nm. is 9 ure.' },
        { difficulty: 'Easy', question: 'ʼn Swemles begin om 4:15 nm. en duur 45 minute. Hoe laat eindig dit?', answer: '5:00 nm', checkMode: 'auto', correctAnswer: '5:00nm', correctAnswers: ['5:00nm', '5:00 nm', '500nm'], explanation: 'Tel die lesduur by die begintyd: 4:15 nm. + 45 minute = 5:00 nm.' },
        { difficulty: 'Medium', question: 'ʼn Fliek begin om 6:30 nm. en duur 1 uur 50 minute. Hoe laat eindig dit?', answer: '8:20 nm', checkMode: 'auto', correctAnswer: '8:20nm', correctAnswers: ['8:20nm', '8:20 nm', '820nm'], explanation: 'Tel die fliekduur by die begintyd: 6:30 nm. + 1 uur 50 minute = 8:20 nm.' },
        { difficulty: 'Medium', question: 'ʼn Vlug vertrek om 10:40 vm. en kom om 1:25 nm. aan. Hoe lank is die vlug?', answer: '2 ure 45 minute', checkMode: 'auto', correctAnswer: '2ure45minute', correctAnswers: ['2ure45minute', '2 ure 45 minute', '2uur45min', '165minute', '165'], explanation: 'Van 10:40 vm. tot 1:40 nm. = 3 ure. Maar die vlug kom 15 minute vroeër aan om 1:25 nm., dus 3 ure − 15 minute = 2 ure 45 minute.' },
        { difficulty: 'Medium', question: "Thabo se huiswerk vat 25 minute lees en 40 minute wiskunde. Wat is die totale huiswerktyd in minute?", answer: '65 minute', checkMode: 'auto', correctAnswer: '65minute', correctAnswers: ['65minute', '65 minute', '65min', '65', '1uur5minute', '1 uur 5 minute'], explanation: '25 + 40 = 65 minute, wat dieselfde is as 1 uur 5 minute.' },
        { difficulty: 'Medium', question: 'ʼn Verjaardagpartytjie begin om 2:00 nm. en duur 3 ure. Hoe laat eindig dit?', answer: '5:00 nm', checkMode: 'auto', correctAnswer: '5:00nm', correctAnswers: ['5:00nm', '5:00 nm', '500nm'], explanation: 'Tel die partytjieduur by die begintyd: 2:00 nm. + 3 ure = 5:00 nm.' },
        { difficulty: 'Medium', question: 'ʼn Trein vertrek om 6:55 vm. Die reis vat 2 ure 40 minute. Hoe laat kom dit aan?', answer: '9:35 vm', checkMode: 'auto', correctAnswer: '9:35vm', correctAnswers: ['9:35vm', '9:35 vm', '935vm'], explanation: 'Tel die reistyd by die vertrektyd: 6:55 vm. + 2 ure 40 minute = 9:35 vm.' },
        { difficulty: 'Medium', question: 'Sipho woon vandag 3 klasse by die skool by, elk 45 minute lank. Wat is die totale klastyd in ure en minute?', answer: '2 ure 15 minute', checkMode: 'auto', correctAnswer: '2ure15minute', correctAnswers: ['2ure15minute', '2 ure 15 minute', '2uur15min', '135minute', '135'], explanation: '3 × 45 = 135 minute. 135 ÷ 60 = 2 res 15. Totaal: 2 ure 15 minute.' },
        { difficulty: 'Medium', question: 'ʼn Resep benodig dat die oond vir 12 minute voorverhit word, en dan die kos vir 35 minute gebak word. Hoe lank vat die hele proses?', answer: '47 minute', checkMode: 'auto', correctAnswer: '47minute', correctAnswers: ['47minute', '47 minute', '47min', '47'], explanation: '12 + 35 = 47 minute.' },
        { difficulty: 'Medium', question: 'ʼn Tweedelige motorrit vat 1 uur 20 minute vir die eerste deel en 55 minute vir die tweede deel. Wat is die totale reistyd in ure en minute?', answer: '2 ure 15 minute', checkMode: 'auto', correctAnswer: '2ure15minute', correctAnswers: ['2ure15minute', '2 ure 15 minute', '2uur15min', '135minute', '135'], explanation: '1 uur 20 minute = 80 minute. 80 + 55 = 135 minute = 2 ure 15 minute.' },
        { difficulty: 'Medium', question: 'Lerato moet ʼn bus haal wat in 90 minute vertrek. As dit nou 2:10 nm. is, hoe laat vertrek die bus?', answer: '3:40 nm', checkMode: 'auto', correctAnswer: '3:40nm', correctAnswers: ['3:40nm', '3:40 nm', '340nm'], explanation: '90 minute = 1 uur 30 minute. 2:10 nm. + 1 uur 30 minute = 3:40 nm.' },
        { difficulty: 'Medium', question: 'ʼn Netbaltoernooi loop van 9:00 vm. tot 12:30 nm., met ʼn 20-minute-pouse in die middel. Hoeveel tyd word werklik spelend deurgebring?', answer: '3 ure 10 minute', checkMode: 'auto', correctAnswer: '3ure10minute', correctAnswers: ['3ure10minute', '3 ure 10 minute', '3uur10min', '190minute', '190'], explanation: 'Totale tyd van 9:00 vm. tot 12:30 nm. = 3 ure 30 minute = 210 minute. Trek die 20-minute-pouse af: 210 − 20 = 190 minute = 3 ure 10 minute.' },
        { difficulty: 'Medium', question: "Amahle se klavierles is 30 minute lank. As dit om 4:50 nm. begin, hoe laat eindig dit?", answer: '5:20 nm', checkMode: 'auto', correctAnswer: '5:20nm', correctAnswers: ['5:20nm', '5:20 nm', '520nm'], explanation: 'Tel die lesduur by die begintyd: 4:50 nm. + 30 minute = 5:20 nm.' },
        { difficulty: 'Hard', question: "Thabo se vakansiereis vat 2 dae en 5 ure. Hoeveel ure is dit in totaal?", answer: '53 ure', checkMode: 'auto', correctAnswer: '53ure', correctAnswers: ['53ure', '53 ure', '53uur', '53'], explanation: '2 dae = 2 × 24 = 48 ure. 48 + 5 = 53 ure.' },
        { difficulty: 'Hard', question: 'ʼn Skoolkamp duur 3 weke en 2 dae. Hoeveel dae is dit in totaal?', answer: '23 dae', checkMode: 'auto', correctAnswer: '23dae', correctAnswers: ['23dae', '23 dae', '23'], explanation: '3 weke = 3 × 7 = 21 dae. 21 + 2 = 23 dae.' },
        { difficulty: 'Hard', question: 'Trein A reis van 8:10 vm. tot 11:40 vm. Trein B reis van 9:00 vm. tot 12:15 nm. Watter treinreis is langer?', answer: 'Trein A', checkMode: 'auto', correctAnswer: 'TreinA', correctAnswers: ['TreinA', 'Trein A', 'treina', 'A', 'a'], explanation: 'Trein A: 8:10 vm. tot 11:40 vm. = 3 ure 30 minute (210 minute). Trein B: 9:00 vm. tot 12:15 nm. = 3 ure 15 minute (195 minute). Aangesien 210 > 195, is Trein A langer.' },
        { difficulty: 'Hard', question: "Thabo oefen sokker van 4:00 nm. tot 5:30 nm., rus, en doen dan huiswerk van 6:20 nm. tot 7:10 nm. Hoe lank is die rustussenpose tussen sokker en huiswerk?", answer: '50 minute', checkMode: 'auto', correctAnswer: '50minute', correctAnswers: ['50minute', '50 minute', '50min', '50'], explanation: 'Sokker eindig om 5:30 nm. Huiswerk begin om 6:20 nm. Van 5:30 nm. tot 6:20 nm. is 50 minute.' },
        { difficulty: 'Hard', question: "Thabo oefen sokker van 4:00 nm. tot 5:30 nm., en doen later huiswerk van 6:20 nm. tot 7:10 nm. Wat is sy totale aktiwiteitstyd (sokker plus huiswerk), sonder die rustussenpose?", answer: '2 ure 20 minute', checkMode: 'auto', correctAnswer: '2ure20minute', correctAnswers: ['2ure20minute', '2 ure 20 minute', '2uur20min', '140minute', '140'], explanation: 'Sokker = 4:00 nm. tot 5:30 nm. = 90 minute. Huiswerk = 6:20 nm. tot 7:10 nm. = 50 minute. Totaal: 90 + 50 = 140 minute = 2 ure 20 minute.' },
        { difficulty: 'Hard', question: 'ʼn Winkel is 9 ure per dag oop, 6 dae per week. Hoeveel ure is die winkel in totaal vir die week oop?', answer: '54 ure', checkMode: 'auto', correctAnswer: '54ure', correctAnswers: ['54ure', '54 ure', '54uur', '54'], explanation: '9 ure × 6 dae = 54 ure.' },
        { difficulty: 'Hard', question: 'ʼn Biblioteek is elke dag van 8:30 vm. tot 4:00 nm. oop. Dit is vir 30 minute tydens middagete toe. Hoeveel ure is die biblioteek werklik elke dag oop?', answer: '7 ure', checkMode: 'auto', correctAnswer: '7ure', correctAnswers: ['7ure', '7 ure', '7uur', '420minute', '420'], explanation: 'Totale tyd van 8:30 vm. tot 4:00 nm. = 7 ure 30 minute = 450 minute. Trek die 30-minute-middagetepouse af: 450 − 30 = 420 minute = 7 ure.' },
        { difficulty: 'Hard', question: "Lerato se gesin ry na die kus. Hulle vertrek om 5:45 vm. en die reis vat gewoonlik 6 ure, maar padwerke voeg 35 minute by. Hoe laat kom hulle aan?", answer: '12:20 nm', checkMode: 'auto', correctAnswer: '12:20nm', correctAnswers: ['12:20nm', '12:20 nm', '1220nm'], explanation: 'Totale reistyd = 6 ure + 35 minute = 6 ure 35 minute. 5:45 vm. + 6 ure 35 minute = 12:20 nm.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom dit belangrik is om te weet of ʼn tyd vm. of nm. is wanneer jy woordprobleme oor tydsduur oplos.', answer: 'vm. en nm. vertel jou of ʼn tyd in die eerste helfte of tweede helfte van die dag is. Sonder om dit te weet, kan jy die verkeerde tydsduur bereken — byvoorbeeld, om 7:00 vm. en 7:00 nm. te verwar, sal ʼn heeltemal ander (en verkeerde) antwoord gee vir hoe lank ʼn aktiwiteit geduur het.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantasties! Jy kan tydberekenings op wêreldgerigte probleme toepas.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Kyk weer na die voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MEERVOUDIGE-STAP / GEKOMBINEERDE PROBLEME EN SELFNAGAAN-REDENERING (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Meervoudige-stap Tydprobleme',
      questions: [
        { difficulty: 'Easy', question: 'Sipho word om 6:15 vm. wakker. Dit vat hom 40 minute om reg te maak. Hoe laat is hy reg?', answer: '6:55 vm', checkMode: 'auto', correctAnswer: '6:55vm', correctAnswers: ['6:55vm', '6:55 vm', '655vm'], explanation: 'Tel die tyd om reg te maak by die wakkerword-tyd: 6:15 vm. + 40 minute = 6:55 vm.' },
        { difficulty: 'Easy', question: 'Nadat Sipho om 6:55 vm. reg is, vat dit hom 15 minute om na die bushalte te loop. Hoe laat kom hy by die bushalte aan?', answer: '7:10 vm', checkMode: 'auto', correctAnswer: '7:10vm', correctAnswers: ['7:10vm', '7:10 vm', '710vm'], explanation: 'Tel die looptyd by: 6:55 vm. + 15 minute = 7:10 vm.' },
        { difficulty: 'Easy', question: 'Van wanneer Sipho wakker word (6:15 vm.) tot wanneer hy die bushalte bereik (7:10 vm.), hoeveel minute verloop in totaal?', answer: '55 minute', checkMode: 'auto', correctAnswer: '55minute', correctAnswers: ['55minute', '55 minute', '55min', '55'], explanation: 'Regmaak (40 minute) plus loop (15 minute) = 40 + 15 = 55 minute.' },
        { difficulty: 'Medium', question: "Lerato se skooldag loop van 7:45 vm. tot 2:15 nm. Hoe lank is die totale skooldag?", answer: '6 ure 30 minute', checkMode: 'auto', correctAnswer: '6ure30minute', correctAnswers: ['6ure30minute', '6 ure 30 minute', '6uur30min', '390minute', '390'], explanation: 'Van 7:45 vm. tot 2:15 nm. is 6 ure 30 minute.' },
        { difficulty: 'Medium', question: "Lerato se skooldag (6 ure 30 minute) sluit ʼn 30-minute-middagetepouse en ʼn 20-minute-oggendpouse in. Hoeveel werklike lestyd is daar?", answer: '5 ure 40 minute', checkMode: 'auto', correctAnswer: '5ure40minute', correctAnswers: ['5ure40minute', '5 ure 40 minute', '5uur40min', '340minute', '340'], explanation: '6 ure 30 minute = 390 minute. Trek die pouses af: 390 − 30 − 20 = 340 minute = 5 ure 40 minute.' },
        { difficulty: 'Medium', question: 'ʼn Dubbel-fliekaand begin om 5:00 nm. Die eerste fliek is 1 uur 35 minute lank, daar is ʼn 15-minute-pouse, en dan is die tweede fliek 1 uur 50 minute lank. Hoe laat eindig die fliekaand?', answer: '8:40 nm', checkMode: 'auto', correctAnswer: '8:40nm', correctAnswers: ['8:40nm', '8:40 nm', '840nm'], explanation: 'Totale tyd = 95 + 15 + 110 = 220 minute = 3 ure 40 minute. 5:00 nm. + 3 ure 40 minute = 8:40 nm.' },
        { difficulty: 'Medium', question: 'Met die fliekaand van die vorige vraag, hoe lank in totaal (in ure en minute) is die twee flieks, sonder die pouse?', answer: '3 ure 25 minute', checkMode: 'auto', correctAnswer: '3ure25minute', correctAnswers: ['3ure25minute', '3 ure 25 minute', '3uur25min', '205minute', '205'], explanation: '1 uur 35 minute = 95 minute. 1 uur 50 minute = 110 minute. 95 + 110 = 205 minute = 3 ure 25 minute.' },
        { difficulty: 'Medium', question: "Amahle se gesinsreis het 2 ryafdelings. Deel 1 vat 3 ure 45 minute. Deel 2 vat 2 ure 50 minute. Wat is die totale rytyd?", answer: '6 ure 35 minute', checkMode: 'auto', correctAnswer: '6ure35minute', correctAnswers: ['6ure35minute', '6 ure 35 minute', '6uur35min', '395minute', '395'], explanation: '3 ure 45 minute = 225 minute. 2 ure 50 minute = 170 minute. 225 + 170 = 395 minute = 6 ure 35 minute.' },
        { difficulty: 'Medium', question: 'As die gesinsreis in die vorige vraag om 6:30 vm. begin, en hulle stop halfpad vir ʼn 25-minute-pouse, hoe laat kom hulle aan (die pouse ingesluit)?', answer: '1:30 nm', checkMode: 'auto', correctAnswer: '1:30nm', correctAnswers: ['1:30nm', '1:30 nm', '130nm'], explanation: 'Totale tyd met pouse = 6 ure 35 minute + 25 minute = 7 ure. 6:30 vm. + 7 ure = 1:30 nm.' },
        { difficulty: 'Hard', question: 'ʼn Skoolsnoepiewinkel is elke pouse 45 minute oop, twee keer per dag, 5 dae per week. Hoeveel minute is die snoepiewinkel in totaal vir die week oop?', answer: '450 minute', checkMode: 'auto', correctAnswer: '450minute', correctAnswers: ['450minute', '450 minute', '450min', '450', '7ure30minute', '7 ure 30 minute'], explanation: '45 minute × 2 pouses = 90 minute per dag. 90 minute × 5 dae = 450 minute (wat 7 ure 30 minute is).' },
        { difficulty: 'Hard', question: 'Skakel jou antwoord op die vorige vraag (450 minute) om na ure en minute.', answer: '7 ure 30 minute', checkMode: 'auto', correctAnswer: '7ure30minute', correctAnswers: ['7ure30minute', '7 ure 30 minute', '7uur30min', '450minute', '450'], explanation: '450 ÷ 60 = 7 res 30. Dus is 450 minute = 7 ure 30 minute.' },
        { difficulty: 'Hard', question: "Thabo se vakansie begin op 28 Junie en eindig op 21 Julie. Hoeveel dae vakansie het hy in totaal?", answer: '24 dae', checkMode: 'auto', correctAnswer: '24dae', correctAnswers: ['24dae', '24', '24 dae'], explanation: 'Dae oor in Junie na die 28ste: 28, 29, 30 = 3 dae. Dae in Julie tot die 21ste = 21 dae. Totaal: 3 + 21 = 24 dae.' },
        { difficulty: 'Hard', question: 'Met die vakansie van die vorige vraag (24 dae in totaal), hoeveel volle weke en ekstra dae is dit?', answer: '3 weke en 3 dae', checkMode: 'auto', correctAnswer: '3weke3dae', correctAnswers: ['3weke3dae', '3 weke 3 dae', '3weke en 3dae', '3 weke en 3 dae'], explanation: '24 ÷ 7 = 3 res 3. Dus is 24 dae = 3 weke en 3 dae.' },
        { difficulty: 'Hard', question: 'ʼn Trein vertrek om 8:45 vm. en kom om 1:20 nm. aan, met ʼn 15-minute-stop langs die pad. Hoe lank is die werklike reistyd (die stop uitgesluit)?', answer: '4 ure 20 minute', checkMode: 'auto', correctAnswer: '4ure20minute', correctAnswers: ['4ure20minute', '4 ure 20 minute', '4uur20min', '260minute', '260'], explanation: 'Totale reis: 8:45 vm. tot 1:20 nm. = 4 ure 35 minute. Trek die 15-minute-stop af: 4 ure 35 minute − 15 minute = 4 ure 20 minute.' },
        { difficulty: 'Hard', question: 'Die trein van die vorige vraag maak ʼn terugreis wat 30 minute langer as die oorspronklike 4 ure 35 minute reis vat. As dit om 2:00 nm. vertrek, hoe laat kom dit aan?', answer: '7:05 nm', checkMode: 'auto', correctAnswer: '7:05nm', correctAnswers: ['7:05nm', '7:05 nm', '705nm'], explanation: 'Terugreis = 4 ure 35 minute + 30 minute = 5 ure 5 minute. 2:00 nm. + 5 ure 5 minute = 7:05 nm.' },
        { difficulty: 'Hard', question: 'ʼn Aflosresies het 4 hardlopers. Elke hardloper vat ongeveer 3 minute 15 sekondes om hul afdeling te voltooi. Ongeveer hoe lank vat die hele resies, in minute en sekondes?', answer: '13 minute 0 sekondes', checkMode: 'auto', correctAnswer: '13minute', correctAnswers: ['13minute', '13 minute', '13min', '780sekondes', '780'], explanation: '3 minute 15 sekondes = 195 sekondes. 195 × 4 = 780 sekondes. 780 ÷ 60 = presies 13 minute.' },
        { difficulty: 'Hard', question: 'Twee vriende vergelyk hul naweek-leestyd. Amahle lees vir 1 uur 20 minute op Saterdag en 55 minute op Sondag. Sipho lees vir 45 minute op Saterdag en 1 uur 35 minute op Sondag. Wat is elke vriend se totale leestyd vir die naweek? Gee Amahle se totaal eerste, dan Sipho s\'n, geskei deur ʼn komma (in minute).', answer: '135 minute, 140 minute', checkMode: 'auto', correctAnswer: '135140', correctAnswers: ['135140', '135, 140', '135 minute, 140 minute'], explanation: 'Amahle: 1 uur 20 minute + 55 minute = 80 + 55 = 135 minute. Sipho: 45 minute + 1 uur 35 minute = 45 + 95 = 140 minute.' },
        { difficulty: 'Hard', question: 'Met die vorige vraag, wie het langer oor die naweek gelees, en met hoeveel minute?', answer: 'Sipho het 5 minute langer gelees.', checkMode: 'auto', correctAnswer: '5minute', correctAnswers: ['5minute', '5 minute', '5min', '5', 'sipho5minute', 'sipho'], explanation: 'Sipho: 140 minute. Amahle: 135 minute. Verskil: 140 − 135 = 5 minute. Sipho het langer gelees.' },
        { difficulty: 'Hard', question: 'ʼn Skoolsamekoms vind een keer per week plaas en duur 25 minute. Hoeveel minute samekomstyd is daar in ʼn skoolkwartaal van 10 weke?', answer: '250 minute', checkMode: 'auto', correctAnswer: '250minute', correctAnswers: ['250minute', '250 minute', '250min', '250', '4ure10minute', '4 ure 10 minute'], explanation: '25 minute × 10 weke = 250 minute.' },
        { difficulty: 'Hard', question: 'Skakel die totale samekomstyd van die vorige vraag (250 minute) om na ure en minute.', answer: '4 ure 10 minute', checkMode: 'auto', correctAnswer: '4ure10minute', correctAnswers: ['4ure10minute', '4 ure 10 minute', '4uur10min', '250minute', '250'], explanation: '250 ÷ 60 = 4 res 10. Dus is 250 minute = 4 ure 10 minute.' },
        { difficulty: 'Hard', question: 'ʼn Boer begin om 5:15 vm. om koeie te melk. Dit vat 1 uur 50 minute. Dan, na ʼn 40-minute-ontbytpouse, begin hy die diere voer, wat nog 1 uur 10 minute vat. Hoe laat maak hy klaar om die diere te voer?', answer: '8:55 vm', checkMode: 'auto', correctAnswer: '8:55vm', correctAnswers: ['8:55vm', '8:55 vm', '855vm'], explanation: 'Melk: 5:15 vm. + 1 uur 50 minute = 7:05 vm. Ontbyt: 7:05 vm. + 40 minute = 7:45 vm. Voer: 7:45 vm. + 1 uur 10 minute = 8:55 vm.' },
        { difficulty: 'Hard', question: 'Met die boer van die vorige vraag, wat is sy totale werktyd van 5:15 vm. tot 8:55 vm., sonder die 40-minute-ontbytpouse?', answer: '3 ure', checkMode: 'auto', correctAnswer: '3ure', correctAnswers: ['3ure', '3 ure', '3uur', '180minute', '180'], explanation: 'Totale tyd van 5:15 vm. tot 8:55 vm. = 3 ure 40 minute = 220 minute. Trek die 40-minute-pouse af: 220 − 40 = 180 minute = 3 ure.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe jy die eindtyd van ʼn aktiwiteit sou uitwerk as jy die begintyd en die tydsduur gegee word, deur ʼn stap-vir-stap-metode te gebruik.', answer: 'Tel eers die volle ure van die tydsduur by die begintyd. Tel dan die oorblywende minute by daardie resultaat. As die minute oor 60 gaan, dra 1 uur oor en hou die oorblywende minute. Onthou om te kyk of die antwoord van vm. na nm. oorgaan (of oor middernag), en pas dienooreenkomstig aan.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik waarom om alle tye na minute (of ure) om te skakel voordat jy optel of aftrek, jou kan help om foute te vermy wanneer jy meervoudige-stap-tydprobleme oplos.', answer: 'Om alles na dieselfde eenheid (soos minute) om te skakel, beteken jy kan die getalle direk optel of aftrek, net soos gewone getalle, sonder om oor ure en minute apart te bekommer. Sodra jy die totaal in een eenheid het, skakel jy dit aan die einde terug na ure en minute om, wat die kans op ʼn fout tydens die berekening verminder.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Weeklikse sportrooster het oefening op 3 dae, elk 1 uur 15 minute lank. Hoeveel totale oefentyd is daar in die week, in ure en minute?', answer: '3 ure 45 minute', checkMode: 'auto', correctAnswer: '3ure45minute', correctAnswers: ['3ure45minute', '3 ure 45 minute', '3uur45min', '225minute', '225'], explanation: '1 uur 15 minute = 75 minute. 75 × 3 = 225 minute = 3 ure 45 minute.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantasties! Jy kan meervoudige-stap-tydprobleme met selfvertroue oplos.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Kyk weer na die meervoudige-stap-voorbeelde en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
