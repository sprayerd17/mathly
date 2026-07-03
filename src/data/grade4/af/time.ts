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
      videoPlaceholder:
        'Kort video wat wys hoe om die tydsduur tussen twee tye te bereken en ʼn kalender te gebruik om dae tussen datums te tel',
    },
  ],
  topicPractice: [

    // ── AFDELING 1 — Tyd Lees en Vertel ──────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Skryf die volgende tye in digitale formaat.',
      checkMode: 'auto',
      answer: 'a) 3:30 nm   b) 7:15 vm   c) 4:40 nm',
      parts: [
        {
          label: 'a) Half drie in die middag',
          correctAnswer: '3:30nm',
          correctAnswers: ['3:30nm', '3:30 nm', '330nm', '3:30pm', '3:30 pm'],
          explanation: 'Half drie = 30 minute oor 3. Middag = nm. Digitaal: 3:30 nm.',
        },
        {
          label: 'b) Kwart oor sewe in die oggend',
          correctAnswer: '7:15vm',
          correctAnswers: ['7:15vm', '7:15 vm', '715vm', '7:15am', '7:15 am'],
          explanation: 'Kwart oor sewe = 15 minute oor 7. Oggend = vm. Digitaal: 7:15 vm.',
        },
        {
          label: 'c) Twintig minute voor vyf in die aand',
          correctAnswer: '4:40nm',
          correctAnswers: ['4:40nm', '4:40 nm', '440nm', '4:40pm', '4:40 pm'],
          explanation: '20 minute voor vyf beteken 60 − 20 = 40 minute oor vier. Aand = nm. Digitaal: 4:40 nm.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Beantwoord die volgende vrae oor analoog horlosies.',
      checkMode: 'auto',
      answer: 'a) 8:15   b) 11:00   c) 3',
      parts: [
        {
          label: 'a) Die kort wyser wys tussen 8 en 9 en die lang wyser wys na 3. Wat is die tyd?',
          correctAnswer: '8:15',
          correctAnswers: ['8:15', '815', '8:15vm', '8:15 vm'],
          explanation: 'Kort wyser tussen 8 en 9 = 8 ure. Lang wyser by 3 = 3 × 5 = 15 minute. Tyd: 8:15.',
        },
        {
          label: 'b) Die kort wyser wys na 11 en die lang wyser wys na 12. Wat is die tyd?',
          correctAnswer: '11:00',
          correctAnswers: ['11:00', '1100', '11uur', '11 uur', '11:00vm'],
          explanation: 'Kort wyser by 11 = 11 ure. Lang wyser by 12 = 0 minute (uur). Tyd: 11:00.',
        },
        {
          label: 'c) Na watter syfer wys die lang wyser by kwart oor enige uur?',
          correctAnswer: '3',
          correctAnswers: ['3', 'drie'],
          explanation: 'Kwart oor = 15 minute. 15 ÷ 5 = 3, dus wys die lang wyser na die syfer 3.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Lerato vertrek van die huis af om 7:45 vm. en kom om 8:10 vm. by die skool aan.',
      checkMode: 'auto',
      answer: 'a) Voor middag   b) Voor middag',
      parts: [
        {
          label: 'a) Is 7:45 vm. voor of na middag?',
          correctAnswer: 'voor middag',
          correctAnswers: ['voor middag', 'voormiddag', 'voor', 'vm', 'vm.'],
          explanation: 'vm. beteken die tyd is tussen middernag en middag — dus is 7:45 vm. voor middag.',
        },
        {
          label: 'b) Is 8:10 vm. voor of na middag?',
          correctAnswer: 'voor middag',
          correctAnswers: ['voor middag', 'voormiddag', 'voor', 'vm', 'vm.'],
          explanation: 'vm. beteken die tyd is tussen middernag en middag — dus is 8:10 vm. ook voor middag.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Lerato vertrek van die huis af om 7:45 vm. en kom om 8:10 vm. by die skool aan.',
      checkMode: 'self',
      answer: 'Kwart voor agt in die oggend (7:45 vm.) en tien oor agt in die oggend (8:10 vm.).',
      parts: [
        {
          label: 'c) Skryf albei tye in woorde.',
          correctAnswer: '',
          explanation: '7:45 vm. = kwart voor agt in die oggend. 8:10 vm. = tien oor agt in die oggend.',
        },
      ],
    },

    // ── AFDELING 2 — Eenhede van Tyd en Omskakeling ──────────────────────────

    {
      difficulty: 'Easy',
      question: 'Skakel die volgende om.',
      checkMode: 'auto',
      answer: 'a) 120 minute   b) 180 sekondes',
      parts: [
        {
          label: 'a) 2 ure na minute',
          correctAnswer: '120minute',
          correctAnswers: ['120minute', '120', '120 minute', '120min'],
          explanation: 'Ure → minute: vermenigvuldig met 60. 2 × 60 = 120 minute.',
        },
        {
          label: 'b) 3 minute na sekondes',
          correctAnswer: '180sekondes',
          correctAnswers: ['180sekondes', '180', '180 sekondes', '180sek'],
          explanation: 'Minute → sekondes: vermenigvuldig met 60. 3 × 60 = 180 sekondes.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question: 'Skakel die volgende om.',
      checkMode: 'auto',
      answer: 'a) 3 ure   b) 14 dae   c) 36 maande   d) 2 minute',
      parts: [
        {
          label: 'a) 180 minute na ure',
          correctAnswer: '3ure',
          correctAnswers: ['3ure', '3', '3 ure', '3uur'],
          explanation: 'Minute → ure: deel deur 60. 180 ÷ 60 = 3 ure.',
        },
        {
          label: 'b) 2 weke na dae',
          correctAnswer: '14dae',
          correctAnswers: ['14dae', '14', '14 dae'],
          explanation: 'Weke → dae: vermenigvuldig met 7. 2 × 7 = 14 dae.',
        },
        {
          label: 'c) 3 jaar na maande',
          correctAnswer: '36maande',
          correctAnswers: ['36maande', '36', '36 maande'],
          explanation: 'Jaar → maande: vermenigvuldig met 12. 3 × 12 = 36 maande.',
        },
        {
          label: 'd) 120 sekondes na minute',
          correctAnswer: '2minute',
          correctAnswers: ['2minute', '2', '2 minute', '2min'],
          explanation: 'Sekondes → minute: deel deur 60. 120 ÷ 60 = 2 minute.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Sipho sê 2 ure 45 minute is dieselfde as 145 minute. Is hy korrek? Wys jou berekening.',
      checkMode: 'self',
      answer: 'Nee, Sipho is verkeerd. 2 ure = 2 × 60 = 120 minute. 120 + 45 = 165 minute. 2 ure 45 minute = 165 minute, nie 145 minute nie.',
    },

    // ── AFDELING 3 — Tydsduur Bereken ─────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'ʼn TV-program begin om 6:00 nm. en eindig om 7:30 nm. Hoe lank is die program?',
      checkMode: 'auto',
      answer: '1 uur 30 minute',
      correctAnswer: '1uur30minute',
      correctAnswers: ['1uur30minute', '1 uur 30 minute', '1uur30min', '90minute', '90min', '90'],
      explanation: 'Van 6:00 tot 7:00 = 1 uur. Van 7:00 tot 7:30 = 30 minute. Totaal: 1 uur 30 minute.',
    },

    {
      difficulty: 'Medium',
      question: 'Bereken die tydsduur vir elk van die volgende.',
      checkMode: 'auto',
      answer: 'a) 2 ure 30 minute   b) 6 ure 30 minute   c) 2 ure 30 minute',
      parts: [
        {
          label: 'a) Begin: 9:15 vm.   Einde: 11:45 vm.',
          correctAnswer: '2ure30minute',
          correctAnswers: ['2ure30minute', '2 ure 30 minute', '2uur30min', '150minute', '150'],
          explanation: 'Van 9:15 tot 11:15 = 2 ure. Van 11:15 tot 11:45 = 30 minute. Totaal: 2 ure 30 minute.',
        },
        {
          label: 'b) Begin: 7:30 vm.   Einde: 2:00 nm.',
          correctAnswer: '6ure30minute',
          correctAnswers: ['6ure30minute', '6 ure 30 minute', '6uur30min', '390minute', '390'],
          explanation: 'Van 7:30 tot 12:00 = 4 ure 30 minute. Van 12:00 tot 2:00 = 2 ure. Totaal: 6 ure 30 minute.',
        },
        {
          label: 'c) Begin: 3:20 nm.   Einde: 5:50 nm.',
          correctAnswer: '2ure30minute',
          correctAnswers: ['2ure30minute', '2 ure 30 minute', '2uur30min', '150minute', '150'],
          explanation: 'Van 3:20 tot 5:20 = 2 ure. Van 5:20 tot 5:50 = 30 minute. Totaal: 2 ure 30 minute.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Trein vertrek om 8:45 vm. en kom om 1:20 nm. aan.',
      checkMode: 'auto',
      answer: 'a) 4 ure 35 minute   b) 4 ure 20 minute   c) 6:35 nm.',
      parts: [
        {
          label: 'a) Hoe lank is die treinreis?',
          correctAnswer: '4ure35minute',
          correctAnswers: ['4ure35minute', '4 ure 35 minute', '4uur35min', '275minute', '275'],
          explanation: 'Van 8:45 tot 12:45 = 4 ure. Van 12:45 tot 1:20 = 35 minute. Totaal: 4 ure 35 minute.',
        },
        {
          label: 'b) Die trein maak ʼn 15-minute-stop langs die pad. Hoe lank is die werklike reistyd?',
          correctAnswer: '4ure20minute',
          correctAnswers: ['4ure20minute', '4 ure 20 minute', '4uur20min', '260minute', '260'],
          explanation: 'Trek die stop af van die totale reis: 4 ure 35 minute − 15 minute = 4 ure 20 minute.',
        },
        {
          label: 'c) Die terugreis vat 30 minute langer. Hoe laat kom dit aan as dit om 2:00 nm. vertrek?',
          correctAnswer: '6:35nm',
          correctAnswers: ['6:35nm', '6:35 nm', '635nm', '18:35', '1835', '6:35pm', '6:35 pm'],
          explanation: 'Terugreis = 4 ure 35 minute. Van 2:00 nm.: 2:00 + 4 ure = 6:00 nm. 6:00 + 35 minute = 6:35 nm.',
        },
      ],
    },

    // ── AFDELING 4 — Kalenders en Tyd Woordprobleme ───────────────────────────

    {
      difficulty: 'Easy',
      question: 'Hoeveel dae is daar van 10 April tot 25 April?',
      checkMode: 'auto',
      answer: '15 dae',
      correctAnswer: '15dae',
      correctAnswers: ['15dae', '15', '15 dae'],
      explanation: 'Albei datums is in April. Trek af: 25 − 10 = 15 dae.',
    },

    {
      difficulty: 'Medium',
      question: 'Beantwoord die volgende kalendervrae.',
      checkMode: 'auto',
      answer: 'a) 30   b) 28   c) 16 dae',
      parts: [
        {
          label: 'a) Hoeveel dae is daar in September?',
          correctAnswer: '30dae',
          correctAnswers: ['30dae', '30', '30 dae'],
          explanation: 'September is een van die maande met 30 dae: April, Junie, September, November.',
        },
        {
          label: 'b) Hoeveel dae is daar in Februarie in ʼn gewone jaar?',
          correctAnswer: '28dae',
          correctAnswers: ['28dae', '28', '28 dae'],
          explanation: 'Februarie het 28 dae in ʼn gewone jaar en 29 dae in ʼn skrikkeljaar.',
        },
        {
          label: 'c) Hoeveel dae is daar van 20 Maart tot 5 April?',
          correctAnswer: '16dae',
          correctAnswers: ['16dae', '16', '16 dae'],
          explanation: 'Dae oor in Maart na die 20ste: 31 − 20 = 11 dae. Dae in April tot die 5de: 5 dae. Totaal: 11 + 5 = 16 dae.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: "Thabo se skoolvakansie begin op 28 Junie en eindig op 21 Julie.",
      checkMode: 'auto',
      answer: 'a) 3 dae   b) 21 dae   c) 24 dae   d) 3 weke en 3 dae',
      parts: [
        {
          label: 'a) Hoeveel dae is daar in Junie oor na die 28ste?',
          correctAnswer: '3dae',
          correctAnswers: ['3dae', '3', '3 dae'],
          explanation: 'Junie het 30 dae. Tel van die 28ste: 28, 29, 30 = 3 dae.',
        },
        {
          label: 'b) Hoeveel vakansiedae is daar in Julie?',
          correctAnswer: '21dae',
          correctAnswers: ['21dae', '21', '21 dae'],
          explanation: 'Die vakansie in Julie loop van 1 Julie tot 21 Julie = 21 dae.',
        },
        {
          label: 'c) Wat is die totale lengte van die vakansie in dae?',
          correctAnswer: '24dae',
          correctAnswers: ['24dae', '24', '24 dae'],
          explanation: 'Tel die Junie-dae en Julie-dae bymekaar: 3 + 21 = 24 dae.',
        },
        {
          label: 'd) Hoeveel weke en dae is dit?',
          correctAnswer: '3weke3dae',
          correctAnswers: ['3weke3dae', '3 weke 3 dae', '3weke en 3dae', '3 weke en 3 dae'],
          explanation: '24 ÷ 7 = 3 res 3. Dus is 24 dae = 3 weke en 3 dae.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 31, message: 'Volpunte! Jy het Tyd baasgeraak.' },
    { minScore: 24, message: 'Uitstekende werk! Gaan deur die vrae wat jy verkeerd gehad het en jy sal dit baasraak.' },
    { minScore: 16, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
