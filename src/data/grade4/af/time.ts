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
        { difficulty: 'Easy', question: 'Die kort wyser wys na 6 en die lang wyser wys na 12. Wat is die tyd?', answer: '6:00', checkMode: 'auto', correctAnswer: '6:00', correctAnswers: ['6:00', '600', '6uur', '6 uur'], explanation: 'Kort wyser by 6 = 6 ure. Lang wyser by 12 = 0 minute. Tyd: 6:00, of ses-uur.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"117\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 8 en 9, en die lang wyser wys tussen 10 en 11 (5 minute oor die 10). Wat is die tyd?', answer: '8:55', checkMode: 'auto', correctAnswer: '8:55', correctAnswers: ['8:55', '855'], explanation: 'Kort wyser tussen 8 en 9 = 8 ure. Lang wyser een klein merk oor die 10 = (10 × 5) + 5 = 55 minute. Tyd: 8:55, of vyf voor nege.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"53\" y2=\"86.4\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"60\" y2=\"41.7\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Skryf "kwart voor ses" in digitale formaat.', answer: '5:45', checkMode: 'auto', correctAnswer: '5:45', correctAnswers: ['5:45', '545'], explanation: 'Kwart voor beteken 15 minute voor die uur. Kwart voor ses = 60 − 15 = 45 minute oor vyf = 5:45.' },
        { difficulty: 'Easy', question: 'Skryf "vyf-en-twintig voor nege" in digitale formaat.', answer: '8:35', checkMode: 'auto', correctAnswer: '8:35', correctAnswers: ['8:35', '835'], explanation: 'Vyf-en-twintig voor nege beteken 60 − 25 = 35 minute oor agt = 8:35.' },
        // Afdeling B — vm./nm. en die 24-uur-dag (4-6, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Digitale horlosie wys 12:05, net ʼn paar minute na twaalfuur middag. Is hierdie tyd vm. of nm.? Verduidelik jou redenasie.', answer: '12:05 net na middag is nm. Middag self is die oomblik wanneer vm. verander na nm., so enige tyd vanaf 12:00 middag en later — insluitend 12:05 — val in die nm.-helfte van die dag.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Watter tyd is meer redelik vir ʼn skooldag om te eindig: 2:00 nm. of 9:00 nm.? Verduidelik jou antwoord.', answer: '2:00 nm. is meer redelik. Skool eindig gewoonlik in die middag, nie laat in die aand nie, dus sal 9:00 nm. nie sin maak vir die einde van ʼn gewone skooldag nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Les begin om 9:00 vm. en eindig om 11:00 vm. Hoe lank is die les?', answer: '2 ure', checkMode: 'auto', correctAnswer: '2ure', correctAnswers: ['2ure', '2 ure', '2uur', '120minute', '120'], explanation: 'Van 9:00 tot 11:00 is presies 2 ure.' },
        // Afdeling C — Eenheidsomskakeling (7-10, Medium)
        { difficulty: 'Medium', question: 'Skakel 5 ure om na minute.', answer: '300 minute', checkMode: 'auto', correctAnswer: '300minute', correctAnswers: ['300minute', '300', '300 minute', '300min'], explanation: 'Ure → minute: vermenigvuldig met 60. 5 × 60 = 300 minute.' },
        { difficulty: 'Medium', question: 'Skakel 300 sekondes om na minute.', answer: '5 minute', checkMode: 'auto', correctAnswer: '5minute', correctAnswers: ['5minute', '5', '5 minute', '5min'], explanation: 'Sekondes → minute: deel deur 60. 300 ÷ 60 = 5 minute.' },
        { difficulty: 'Medium', question: 'Skakel 200 minute om na ure en minute.', answer: '3 ure 20 minute', checkMode: 'auto', correctAnswer: '3ure20minute', correctAnswers: ['3ure20minute', '3 ure 20 minute', '3uur20min', '200minute', '200min', '200'], explanation: '200 ÷ 60 = 3 res 20. Dus is 200 minute = 3 ure 20 minute.' },
        { difficulty: 'Medium', question: 'Amahle sê 6 weke is dieselfde as 42 dae. Is sy korrek? Wys jou berekening.', answer: 'Ja, Amahle is korrek. 6 weke = 6 × 7 = 42 dae.', checkMode: 'self' },
        // Afdeling D — Tydsduur bereken (11-14, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Telefoonoproep begin om 9:50 vm. en eindig om 10:20 vm. Hoe lank duur die oproep?', answer: '30 minute', checkMode: 'auto', correctAnswer: '30minute', correctAnswers: ['30minute', '30 minute', '30min', '30'], explanation: 'Van 9:50 tot 10:00 is 10 minute, dan 10:00 tot 10:20 is 20 minute. Totaal: 30 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Werkswinkel begin om 8:00 vm. en eindig om 3:30 nm. Hoe lank duur dit?', answer: '7 ure 30 minute', checkMode: 'auto', correctAnswer: '7ure30minute', correctAnswers: ['7ure30minute', '7 ure 30 minute', '7uur30min', '450minute', '450'], explanation: 'Van 8:00 vm. tot 12:00 nm. = 4 ure. Van 12:00 nm. tot 3:30 nm. = 3 ure 30 minute. Totaal: 7 ure 30 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Nagtrein vertrek om 11:00 nm. en kom om 6:00 vm. die volgende dag aan. Hoe lank is die reis?', answer: '7 ure', checkMode: 'auto', correctAnswer: '7ure', correctAnswers: ['7ure', '7 ure', '7uur', '420minute', '420'], explanation: 'Van 11:00 nm. tot middernag = 1 uur. Van middernag tot 6:00 vm. = 6 ure. Totaal: 7 ure.' },
        { difficulty: 'Medium-Hard', question: 'Fliek A loop van 6:15 nm. tot 8:00 nm. Fliek B loop van 7:00 nm. tot 9:10 nm. Watter fliek is langer?', answer: 'Fliek B', checkMode: 'auto', correctAnswer: 'FliekB', correctAnswers: ['FliekB', 'Fliek B', 'fliekb', 'B', 'b'], explanation: 'Fliek A: 6:15 nm. tot 8:00 nm. = 1 uur 45 minute (105 minute). Fliek B: 7:00 nm. tot 9:10 nm. = 2 ure 10 minute (130 minute). Aangesien 130 > 105, is Fliek B langer.' },
        // Afdeling E — Begin-/eindtye en woordprobleme (15-17, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Swemsessie begin om 7:20 vm. Dit duur 2 ure 35 minute. Hoe laat eindig dit?', answer: '9:55 vm', checkMode: 'auto', correctAnswer: '9:55vm', correctAnswers: ['9:55vm', '9:55 vm', '955vm'], explanation: 'Tel voort vanaf die begintyd: 7:20 vm. + 2 ure 35 minute = 9:55 vm.' },
        { difficulty: 'Hard', question: 'ʼn Busrit eindig om 9:55 vm. Dit het 1 uur 20 minute geneem. Hoe laat het dit begin?', answer: '8:35 vm', checkMode: 'auto', correctAnswer: '8:35vm', correctAnswers: ['8:35vm', '8:35 vm', '835vm'], explanation: 'Tel terug vanaf die eindtyd: 9:55 vm. − 1 uur 20 minute = 8:35 vm.' },
        { difficulty: 'Hard', question: 'ʼn Resep benodig dat die oond vir 12 minute voorverhit word, en dan die kos vir 35 minute gebak word. As Lerato om 4:40 nm. begin voorverhit, hoe laat is die kos gereed?', answer: '5:27 nm', checkMode: 'auto', correctAnswer: '5:27nm', correctAnswers: ['5:27nm', '5:27 nm', '527nm'], explanation: 'Totale tyd = 12 + 35 = 47 minute. 4:40 nm. + 47 minute = 5:27 nm.' },
        // Afdeling F — Meerstap-redenering en regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'Sipho word om 6:15 vm. wakker. Dit vat hom 40 minute om reg te maak, en dan nog 15 minute om na die bushalte te loop. Hoe laat kom hy by die bushalte aan?', answer: '7:10 vm', checkMode: 'auto', correctAnswer: '7:10vm', correctAnswers: ['7:10vm', '7:10 vm', '710vm'], explanation: 'Regmaak: 6:15 vm. + 40 minute = 6:55 vm. Loop: 6:55 vm. + 15 minute = 7:10 vm.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe jy die eindtyd van ʼn aktiwiteit sou uitwerk as jy die begintyd en die tydsduur gegee word, deur ʼn stap-vir-stap-metode te gebruik.', answer: 'Tel eers die volle ure van die tydsduur by die begintyd. Tel dan die oorblywende minute by daardie resultaat. As die minute oor 60 gaan, dra 1 uur oor en hou die oorblywende minute. Onthou om te kyk of die antwoord van vm. na nm. oorgaan (of oor middernag), en pas dienooreenkomstig aan.', checkMode: 'self' },

        // Afdeling G — Die Geskiedenis van Tyd (20-21, Maklik-Medium)
        { difficulty: 'Easy', question: 'Voordat meganiese horlosies bestaan het, watter antieke tydmeetinstrument het die skaduwee van ʼn stok of pilaar gebruik om die tyd van die dag te wys?', answer: 'ʼn Sonwyser', checkMode: 'auto', correctAnswer: 'sonwyser', correctAnswers: ['sonwyser', 'ʼn sonwyser', 'n sonwyser'], explanation: 'ʼn Sonwyser gebruik ʼn wyser (gnomon) wat ʼn bewegende skaduwee gooi soos die son oor die lug beweeg, wat ongeveer wys hoe laat dit is.' },
        { difficulty: 'Medium', question: 'Waarom was ʼn sandloper nuttig vir matrose op ʼn bewegende skip, terwyl ʼn sonwyser dit nie was nie?', answer: 'ʼn Sandloper werk deur swaartekrag wat sand teen ʼn konstante tempo aftrek, maak nie saak hoe die skip wieg nie — dit is nie afhanklik daarvan om die son duidelik te sien nie soos ʼn sonwyser wel is.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 9 en 10, en die lang wyser wys na 6. Wat is die tyd?', answer: '9:30', checkMode: 'auto', correctAnswer: '9:30', correctAnswers: ['9:30', '930'], explanation: 'Kort wyser tussen 9 en 10 = 9 ure. Lang wyser by 6 = 6 × 5 = 30 minute. Tyd: 9:30, of half tien.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"54.1\" y2=\"76.7\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"135\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 6 en 7, en die lang wyser wys tussen 9 en 10 (5 minute oor die 9). Wat is die tyd?', answer: '6:50', checkMode: 'auto', correctAnswer: '6:50', correctAnswers: ['6:50', '650'], explanation: 'Kort wyser tussen 6 en 7 = 6 ure. Lang wyser een klein merk oor die 9 = (9 × 5) + 5 = 50 minute. Tyd: 6:50, of tien voor sewe.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"71.5\" y2=\"114\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"41.7\" y2=\"60\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Skryf "kwart oor elf" in digitale formaat.', answer: '11:15', checkMode: 'auto', correctAnswer: '11:15', correctAnswers: ['11:15', '1115'], explanation: 'Kwart oor beteken 15 minute oor die uur. Kwart oor elf = 11:15.' },
        { difficulty: 'Easy', question: 'Skryf "tien voor twaalf" in digitale formaat.', answer: '11:50', checkMode: 'auto', correctAnswer: '11:50', correctAnswers: ['11:50', '1150'], explanation: 'Tien voor twaalf beteken 60 − 10 = 50 minute oor elf = 11:50.' },
        // Afdeling B — vm./nm. en die 24-uur-dag (4-6, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Nomvula raak saans om 11:58 aan die slaap en word ʼn paar minute later wakker. Is die oomblik wanneer sy wakker word steeds vm., of het dit nm. geword? Verduidelik hoe jy weet.', answer: 'Dit hang af of middernag al verby is. 11:58 saans is nm. (voor middernag). As sy net ʼn paar minute later wakker word, maar dit steeds voor 12:00 middernag is, is dit steeds nm.; sodra die horlosie verby 12:00 middernag gaan, word die tyd vm. omdat ʼn nuwe dag begin het.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Watter tyd is meer redelik om ontbyt te eet: 7:00 vm. of 7:00 nm.? Verduidelik jou antwoord.', answer: '7:00 vm. is meer redelik. Ontbyt word in die oggend geëet, en 7:00 nm. is in die aand, wat eerder aandete-tyd sou wees.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Toets begin om 11:30 vm. en eindig om 12:30 nm. Hoe lank duur die toets?', answer: '1 uur', checkMode: 'auto', correctAnswer: '1uur', correctAnswers: ['1uur', '1 uur', '60minute', '60'], explanation: 'Van 11:30 vm. tot 12:30 nm. is presies 1 uur.' },
        // Afdeling C — Eenheidsomskakeling (7-10, Medium)
        { difficulty: 'Medium', question: 'Skakel 4 minute om na sekondes.', answer: '240 sekondes', checkMode: 'auto', correctAnswer: '240sekondes', correctAnswers: ['240sekondes', '240', '240 sekondes', '240sek'], explanation: 'Minute → sekondes: vermenigvuldig met 60. 4 × 60 = 240 sekondes.' },
        { difficulty: 'Medium', question: 'Skakel 72 ure om na dae.', answer: '3 dae', checkMode: 'auto', correctAnswer: '3dae', correctAnswers: ['3dae', '3', '3 dae'], explanation: 'Ure → dae: deel deur 24. 72 ÷ 24 = 3 dae.' },
        { difficulty: 'Medium', question: 'Skakel 90 minute om na ure en minute.', answer: '1 uur 30 minute', checkMode: 'auto', correctAnswer: '1uur30minute', correctAnswers: ['1uur30minute', '1 uur 30 minute', '1uur30min', '90minute', '90min', '90'], explanation: '90 ÷ 60 = 1 res 30. Dus is 90 minute = 1 uur 30 minute.' },
        { difficulty: 'Medium', question: 'Sipho sê dat om 3 ure na minute om te skakel, jy 3 deur 60 moet deel. Is Sipho korrek? Verduidelik wat hy eerder moet doen.', answer: 'Nee, Sipho is verkeerd. Ure is ʼn groter eenheid as minute, dus moet jy vermenigvuldig, nie deel nie. 3 × 60 = 180 minute.', checkMode: 'self' },
        // Afdeling D — Tydsduur bereken (11-14, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Dansklas begin om 4:45 nm. en eindig om 6:00 nm. Hoe lank is die klas?', answer: '1 uur 15 minute', checkMode: 'auto', correctAnswer: '1uur15minute', correctAnswers: ['1uur15minute', '1 uur 15 minute', '1uur15min', '75minute', '75'], explanation: 'Van 4:45 nm. tot 5:45 nm. = 1 uur. Van 5:45 nm. tot 6:00 nm. = 15 minute. Totaal: 1 uur 15 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Krieketwedstryd begin om 10:15 vm. en eindig om 1:45 nm. Hoe lank duur dit?', answer: '3 ure 30 minute', checkMode: 'auto', correctAnswer: '3ure30minute', correctAnswers: ['3ure30minute', '3 ure 30 minute', '3uur30min', '210minute', '210'], explanation: 'Van 10:15 vm. tot 1:15 nm. = 3 ure. Van 1:15 nm. tot 1:45 nm. = 30 minute. Totaal: 3 ure 30 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Laataandfliek begin om 10:30 nm. en eindig om 12:15 vm. die volgende dag. Hoe lank is die fliek?', answer: '1 uur 45 minute', checkMode: 'auto', correctAnswer: '1uur45minute', correctAnswers: ['1uur45minute', '1 uur 45 minute', '1uur45min', '105minute', '105'], explanation: 'Van 10:30 nm. tot 12:00 middernag = 1 uur 30 minute. Van middernag tot 12:15 vm. = 15 minute. Totaal: 1 uur 45 minute.' },
        { difficulty: 'Medium-Hard', question: 'Klas A loop van 8:30 vm. tot 9:50 vm. Klas B loop van 1:05 nm. tot 2:20 nm. Watter klas is langer?', answer: 'Klas A', checkMode: 'auto', correctAnswer: 'KlasA', correctAnswers: ['KlasA', 'Klas A', 'klasa', 'A', 'a'], explanation: 'Klas A: 8:30 vm. tot 9:50 vm. = 1 uur 20 minute (80 minute). Klas B: 1:05 nm. tot 2:20 nm. = 1 uur 15 minute (75 minute). Aangesien 80 > 75, is Klas A langer.' },
        // Afdeling E — Begin-/eindtye en woordprobleme (15-17, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Padreis begin om 3:40 nm. Dit duur 3 ure 50 minute. Hoe laat eindig dit?', answer: '7:30 nm', checkMode: 'auto', correctAnswer: '7:30nm', correctAnswers: ['7:30nm', '7:30 nm', '730nm'], explanation: 'Tel voort vanaf die begintyd: 3:40 nm. + 3 ure 50 minute = 7:30 nm.' },
        { difficulty: 'Hard', question: 'ʼn Fliek eindig om 2:30 nm. Dit was 1 uur 45 minute lank. Hoe laat het dit begin?', answer: '12:45 nm', checkMode: 'auto', correctAnswer: '12:45nm', correctAnswers: ['12:45nm', '12:45 nm', '1245nm'], explanation: 'Tel terug vanaf die eindtyd: 2:30 nm. − 1 uur 45 minute = 12:45 nm.' },
        { difficulty: 'Hard', question: 'ʼn Netbaltoernooi loop van 9:00 vm. tot 12:30 nm., met ʼn 20-minute-pouse in die middel. Hoeveel tyd word werklik spelend deurgebring?', answer: '3 ure 10 minute', checkMode: 'auto', correctAnswer: '3ure10minute', correctAnswers: ['3ure10minute', '3 ure 10 minute', '3uur10min', '190minute', '190'], explanation: 'Totale tyd van 9:00 vm. tot 12:30 nm. = 3 ure 30 minute = 210 minute. Trek die 20-minute-pouse af: 210 − 20 = 190 minute = 3 ure 10 minute.' },
        // Afdeling F — Meerstap-redenering en regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Sportdag-rooster begin met ʼn 400 m-wedloop om 9:20 vm. wat 15 minute duur, gevolg deur ʼn 25-minute-pouse, en dan verspringproewe wat 50 minute duur. Hoe laat eindig die verspringproewe?', answer: '10:50 vm', checkMode: 'auto', correctAnswer: '10:50vm', correctAnswers: ['10:50vm', '10:50 vm', '1050vm'], explanation: 'Totale tyd vanaf die begin van die wedloop tot die einde van die verspring = 15 + 25 + 50 = 90 minute = 1 uur 30 minute. 9:20 vm. + 1 uur 30 minute = 10:50 vm.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom om alle tye na minute (of ure) om te skakel voordat jy optel of aftrek, jou kan help om foute te vermy wanneer jy meervoudige-stap-tydprobleme oplos.', answer: 'Om alles na dieselfde eenheid (soos minute) om te skakel, beteken jy kan die getalle direk optel of aftrek, net soos gewone getalle, sonder om oor ure en minute apart te bekommer. Sodra jy die totaal in een eenheid het, skakel jy dit aan die einde terug na ure en minute om, wat die kans op ʼn fout tydens die berekening verminder.', checkMode: 'self' },

        // Afdeling G — Die Geskiedenis van Tyd (20-21, Maklik-Medium)
        { difficulty: 'Easy', question: 'Watter antieke tydmeetinstrument het water gebruik wat teen ʼn konstante tempo van een houer na ʼn ander gedrup het om die verbygaan van tyd te wys?', answer: 'ʼn Waterhorlosie', checkMode: 'auto', correctAnswer: 'waterhorlosie', correctAnswers: ['waterhorlosie', 'ʼn waterhorlosie', 'n waterhorlosie', 'clepsydra'], explanation: 'ʼn Waterhorlosie (ook genoem ʼn clepsydra) meet tyd deur water teen ʼn konstante tempo te laat drup, met gemerkte lyne wat wys hoeveel tyd verloop het.' },
        { difficulty: 'Medium', question: 'Noem een voordeel wat ʼn waterhorlosie bo ʼn sonwyser gehad het.', answer: 'ʼn Waterhorlosie kon binnenshuis, in die nag, of op ʼn bewolkte dag gebruik word, want dit het nie sonlig nodig gehad om te werk nie — ʼn sonwyser werk net in direkte sonlig.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 2 en 3, en die lang wyser wys na 12. Wat is die tyd?', answer: '2:00', checkMode: 'auto', correctAnswer: '2:00', correctAnswers: ['2:00', '200', '2uur', '2 uur'], explanation: 'Kort wyser tussen 2 en 3 beteken dit het pas 2 verbygegaan — die uur is 2. Lang wyser by 12 = 0 minute. Tyd: 2:00, of twee-uur.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"112.7\" y2=\"69\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"85\" y2=\"35\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Die kort wyser wys tussen 11 en 12, en die lang wyser wys na 4. Wat is die tyd?', answer: '11:20', checkMode: 'auto', correctAnswer: '11:20', correctAnswers: ['11:20', '1120'], explanation: 'Kort wyser tussen 11 en 12 = 11 ure. Lang wyser by 4 = 4 × 5 = 20 minute. Tyd: 11:20, of twintig oor elf.', diagramSvg: "<svg viewBox=\"0 0 170 170\" xmlns=\"http://www.w3.org/2000/svg\"><circle cx=\"85\" cy=\"85\" r=\"65\" fill=\"none\" stroke=\"#0f1f3d\" stroke-width=\"2.5\"/><text x=\"85\" y=\"36\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">12</text><text x=\"112\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">1</text><text x=\"131.8\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">2</text><text x=\"139\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">3</text><text x=\"131.8\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">4</text><text x=\"112\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">5</text><text x=\"85\" y=\"144\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">6</text><text x=\"58\" y=\"136.8\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">7</text><text x=\"38.2\" y=\"117\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">8</text><text x=\"31\" y=\"90\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">9</text><text x=\"38.2\" y=\"63\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">10</text><text x=\"58\" y=\"43.2\" font-size=\"13\" font-weight=\"700\" fill=\"#374151\" text-anchor=\"middle\">11</text><line x1=\"85\" y1=\"85\" x2=\"74.1\" y2=\"54.9\" stroke=\"#2563eb\" stroke-width=\"4\" stroke-linecap=\"round\"/><line x1=\"85\" y1=\"85\" x2=\"128.3\" y2=\"110\" stroke=\"#dc2626\" stroke-width=\"2.5\" stroke-linecap=\"round\"/><circle cx=\"85\" cy=\"85\" r=\"4\" fill=\"#0f1f3d\"/></svg>" },
        { difficulty: 'Easy', question: 'Skryf "half tien" in digitale formaat.', answer: '9:30', checkMode: 'auto', correctAnswer: '9:30', correctAnswers: ['9:30', '930'], explanation: 'Half beteken 30 minute oor die uur. Half tien = 9:30.' },
        { difficulty: 'Easy', question: 'Skryf "twintig oor twee" in digitale formaat.', answer: '2:20', checkMode: 'auto', correctAnswer: '2:20', correctAnswers: ['2:20', '220'], explanation: 'Twintig oor twee beteken 20 minute oor die uur = 2:20.' },
        // Afdeling B — vm./nm. en die 24-uur-dag (4-6, Maklik-Medium)
        { difficulty: 'Easy-Medium', question: 'Na watter syfer wys die lang wyser by "twintig oor" enige uur?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'Twintig oor = 20 minute. 20 ÷ 5 = 4, dus wys die lang wyser na die syfer 4.' },
        { difficulty: 'Easy-Medium', question: 'Watter tyd is meer redelik om op ʼn skoolnag bed toe te gaan: 8:30 nm. of 8:30 vm.? Verduidelik jou antwoord.', answer: '8:30 nm. is meer redelik. Slaaptyd is in die aand, en 8:30 vm. is in die oggend, wat reeds tyd sou wees om op te wees en vir skool reg te maak.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Sokkerwedstryd skop om 3:00 nm. af en eindig om 4:30 nm. Hoe lank duur die wedstryd?', answer: '1 uur 30 minute', checkMode: 'auto', correctAnswer: '1uur30minute', correctAnswers: ['1uur30minute', '1 uur 30 minute', '1uur30min', '90minute', '90'], explanation: 'Van 3:00 nm. tot 4:30 nm. is 1 uur 30 minute.' },
        // Afdeling C — Eenheidsomskakeling (7-10, Medium)
        { difficulty: 'Medium', question: 'Skakel 2 dae om na ure.', answer: '48 ure', checkMode: 'auto', correctAnswer: '48ure', correctAnswers: ['48ure', '48', '48 ure', '48uur'], explanation: 'Dae → ure: vermenigvuldig met 24. 2 × 24 = 48 ure.' },
        { difficulty: 'Medium', question: 'Skakel 21 dae om na weke.', answer: '3 weke', checkMode: 'auto', correctAnswer: '3weke', correctAnswers: ['3weke', '3', '3 weke'], explanation: 'Dae → weke: deel deur 7. 21 ÷ 7 = 3 weke.' },
        { difficulty: 'Medium', question: 'Skakel 100 ure om na dae en ure.', answer: '4 dae 4 ure', checkMode: 'auto', correctAnswer: '4dae4ure', correctAnswers: ['4dae4ure', '4 dae 4 ure', '100ure', '100'], explanation: '100 ÷ 24 = 4 res 4. Dus is 100 ure = 4 dae en 4 ure.' },
        { difficulty: 'Medium', question: 'ʼn Leerder sê: "2 ure 30 minute plus 45 minute is 2 ure 75 minute." Verduidelik wat verkeerd is met hierdie antwoord en gee die korrekte een.', answer: 'Die antwoord is verkeerd omdat 75 minute meer is as 60 minute, dus moet dit hergroepeer word na ʼn ekstra uur. 75 minute = 1 uur 15 minute, dus 2 ure + 1 uur 15 minute = 3 ure 15 minute.', checkMode: 'self' },
        // Afdeling D — Tydsduur bereken (11-14, Medium-Moeilik)
        { difficulty: 'Medium-Hard', question: 'ʼn Vasvra begin om 9:05 vm. en eindig om 9:55 vm. Hoe lank is die vasvra?', answer: '50 minute', checkMode: 'auto', correctAnswer: '50minute', correctAnswers: ['50minute', '50 minute', '50min', '50'], explanation: 'Van 9:05 tot 9:55 is 50 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Vlug vertrek om 10:40 vm. en kom om 1:25 nm. aan. Hoe lank is die vlug?', answer: '2 ure 45 minute', checkMode: 'auto', correctAnswer: '2ure45minute', correctAnswers: ['2ure45minute', '2 ure 45 minute', '2uur45min', '165minute', '165'], explanation: 'Van 10:40 vm. tot 1:40 nm. = 3 ure. Maar die vlug kom 15 minute vroeër aan om 1:25 nm., dus 3 ure − 15 minute = 2 ure 45 minute.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Mark maak om 11:30 nm. oop en om 5:00 vm. die volgende dag toe. Hoe lank is die mark oop?', answer: '5 ure 30 minute', checkMode: 'auto', correctAnswer: '5ure30minute', correctAnswers: ['5ure30minute', '5 ure 30 minute', '5uur30min', '330minute', '330'], explanation: 'Van 11:30 nm. tot middernag = 30 minute. Van middernag tot 5:00 vm. = 5 ure. Totaal: 5 ure 30 minute.' },
        { difficulty: 'Medium-Hard', question: 'Trein A reis van 8:10 vm. tot 11:40 vm. Trein B reis van 9:00 vm. tot 12:15 nm. Watter treinreis is langer?', answer: 'Trein A', checkMode: 'auto', correctAnswer: 'TreinA', correctAnswers: ['TreinA', 'Trein A', 'treina', 'A', 'a'], explanation: 'Trein A: 8:10 vm. tot 11:40 vm. = 3 ure 30 minute (210 minute). Trein B: 9:00 vm. tot 12:15 nm. = 3 ure 15 minute (195 minute). Aangesien 210 > 195, is Trein A langer.' },
        // Afdeling E — Begin-/eindtye en woordprobleme (15-17, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Kampeertog begin om 11:10 vm. Dit duur 4 ure 20 minute. Hoe laat eindig dit?', answer: '3:30 nm', checkMode: 'auto', correctAnswer: '3:30nm', correctAnswers: ['3:30nm', '3:30 nm', '330nm'], explanation: 'Tel voort vanaf die begintyd: 11:10 vm. + 4 ure 20 minute = 3:30 nm.' },
        { difficulty: 'Hard', question: 'ʼn Verjaardagpartytjie eindig om 5:00 nm. Dit het 3 ure geduur. Hoe laat het dit begin?', answer: '2:00 nm', checkMode: 'auto', correctAnswer: '2:00nm', correctAnswers: ['2:00nm', '2:00 nm', '200nm'], explanation: 'Tel terug vanaf die eindtyd: 5:00 nm. − 3 ure = 2:00 nm.' },
        { difficulty: 'Hard', question: "Thabo se gesin ry na die kus. Hulle vertrek om 5:45 vm. en die reis vat gewoonlik 6 ure, maar padwerke voeg 35 minute by. Hoe laat kom hulle aan?", answer: '12:20 nm', checkMode: 'auto', correctAnswer: '12:20nm', correctAnswers: ['12:20nm', '12:20 nm', '1220nm'], explanation: 'Totale reistyd = 6 ure + 35 minute = 6 ure 35 minute. 5:45 vm. + 6 ure 35 minute = 12:20 nm.' },
        // Afdeling F — Meerstap-redenering en regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Boer begin om 5:15 vm. om koeie te melk. Dit vat 1 uur 50 minute. Dan, na ʼn 40-minute-ontbytpouse, begin hy die diere voer, wat nog 1 uur 10 minute vat. Hoe laat maak hy klaar om die diere te voer?', answer: '8:55 vm', checkMode: 'auto', correctAnswer: '8:55vm', correctAnswers: ['8:55vm', '8:55 vm', '855vm'], explanation: 'Melk: 5:15 vm. + 1 uur 50 minute = 7:05 vm. Ontbyt: 7:05 vm. + 40 minute = 7:45 vm. Voer: 7:45 vm. + 1 uur 10 minute = 8:55 vm.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom dit belangrik is om te weet of ʼn tyd vm. of nm. is wanneer jy woordprobleme oor tydsduur oplos.', answer: 'vm. en nm. vertel jou of ʼn tyd in die eerste helfte of tweede helfte van die dag is. Sonder om dit te weet, kan jy die verkeerde tydsduur bereken — byvoorbeeld, om 7:00 vm. en 7:00 nm. te verwar, sal ʼn heeltemal ander (en verkeerde) antwoord gee vir hoe lank ʼn aktiwiteit geduur het.', checkMode: 'self' },

        // Afdeling G — Die Geskiedenis van Tyd (20-21, Maklik-Medium)
        { difficulty: 'Easy', question: 'Watter antieke tydmeetinstrument gebruik sand wat deur ʼn nou nekkie van ʼn boonste kamer na ʼn onderste kamer loop, om ʼn vaste tydperk te meet?', answer: 'ʼn Sandloper', checkMode: 'auto', correctAnswer: 'sandloper', correctAnswers: ['sandloper', 'ʼn sandloper', 'n sandloper', 'sandhorlosie'], explanation: 'ʼn Sandloper het twee glaskamers wat deur ʼn nou nekkie verbind is. Sand loop teen ʼn konstante tempo van bo na onder, wat ʼn vaste hoeveelheid tyd meet, dikwels presies een uur.' },
        { difficulty: 'Medium', question: 'Verduidelik een rede waarom moderne horlosies meer nuttig is in die alledaagse lewe as ʼn sonwyser of ʼn sandloper.', answer: 'Moderne horlosies werk enige tyd van die dag of nag, in enige weer, en kan tyd deurlopend en presies meet sonder dat iemand dit hoef dop te hou, te vul, of om te draai — anders as ʼn sonwyser (het sonlig nodig) of ʼn sandloper (moet omgedraai word en meet net ʼn vaste hoeveelheid tyd).', checkMode: 'self' },
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
