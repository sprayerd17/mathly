import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (number sentences / equations) ────────────────────────────
// variable     → blue   (#2563eb)
// known values → green  (#16a34a)
// equals sign  → orange (#ea580c)
// equation     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Getalsinne en Vergelykings',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — WRITING AND UNDERSTANDING EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'writing-and-understanding-equations',
      title: 'Vergelykings Skryf en Verstaan',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Getalsin</strong> is ʼn wiskundige stelling wat getalle en simbole gebruik. ʼn ${re('Vergelyking')} is ʼn getalsin met ʼn gelykaanteken — dit wys dat die linkerkant dieselfde waarde het as die regterkant. ʼn <strong>${bl('Veranderlike')}</strong> is ʼn letter wat gebruik word om ʼn onbekende getal voor te stel. In Graad 6 skryf ons ${re('vergelykings')} met ${bl('veranderlikes')} en los hulle op om die onbekende waarde te vind. Die <strong>oplossing</strong> is die waarde van die ${bl('veranderlike')} wat die vergelyking waar maak.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('veranderlike')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bekende waardes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gelykaanteken')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vergelyking')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kernterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:4px;">Getalsin</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Wiskundige stelling wat getalle en bewerkingsimbole gebruik — byvoorbeeld 5 + 3 = 8.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vergelyking</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getalsin met ʼn gelykaanteken — die linkerkant en regterkant het dieselfde waarde.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Veranderlike</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Letter (soos n, x, of d) wat gebruik word om ʼn onbekende getal in ʼn vergelyking voor te stel.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Oplossing</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde van die veranderlike wat die vergelyking waar maak. Kontroleer deur die waarde terug te vervang.</p>` +
        `</div>` +

        `</div>` +

        // ── Anatomy of an equation ───────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Anatomie van ʼn vergelyking</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.4em;font-weight:700;color:#374151;margin:0 0 14px;">${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}</p>` +
        `<div style="display:flex;justify-content:center;gap:36px;flex-wrap:wrap;">` +
        `<span style="font-size:13px;color:#2563eb;font-weight:600;">${bl('veranderlike')}<br>onbekende waarde</span>` +
        `<span style="font-size:13px;color:#16a34a;font-weight:600;">${gr('bekende waarde')}<br>gegewe getal</span>` +
        `<span style="font-size:13px;color:#ea580c;font-weight:600;">${or('gelykaanteken')}<br>albei kante gelyk</span>` +
        `<span style="font-size:13px;color:#16a34a;font-weight:600;">${gr('bekende waarde')}<br>gegewe getal</span>` +
        `</div>` +
        `</div>` +

        // ── Strategy tip ─────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn vergelyking van ʼn woordprobleem te skryf</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Identifiseer die onbekende en ken dit ʼn ${bl('veranderlike')} toe (bv. n, x, d).<br><strong>Stap 2</strong> — Skakel die woorde om in ʼn ${re('vergelyking')} met die ${bl('veranderlike')} en ${gr('bekende waardes')}.<br><strong>Stap 3</strong> — Kontroleer: pas jou vergelyking by die situasie in die probleem?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skryf ʼn getalsin vir hierdie probleem — Sipho het ʼn aantal albasters. Hy kry 15 meer en het nou 34.',
          answer: `Die ${re('vergelyking')} is ${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}`,
          steps: [
            `Laat die onbekende aantal albasters ${bl('n')} wees. ʼn ${bl('Veranderlike')} is ʼn letter wat die onbekende voorstel — ons weet nie hoeveel albasters Sipho aan die begin gehad het nie.`,
            `Sipho begin met ${bl('n')} albasters en kry ${gr('15')} meer om ${gr('34')} te hê. Skakel dit om in ʼn vergelyking: ${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}.`,
            `<strong>Die ${re('vergelyking')} is ${bl('n')} + ${gr('15')} ${or('=')} ${gr('34')}.</strong>`,
          ],
        },
        {
          question: 'Is x = 7 ʼn oplossing vir 3x + 4 = 25?',
          answer: `Ja — ${bl('x')} ${or('=')} ${gr('7')} is ʼn oplossing want albei kante is gelyk aan ${gr('25')}`,
          steps: [
            `Vervang ${bl('x')} ${or('=')} ${gr('7')} in die ${re('vergelyking')} ${re('3x + 4 = 25')}. Vervang elke ${bl('x')} met ${gr('7')}.`,
            `${gr('3')} × ${gr('7')} + ${gr('4')} ${or('=')} ${gr('21')} + ${gr('4')} ${or('=')} ${gr('25')}. Die linkerkant is gelyk aan ${gr('25')}.`,
            `Die linkerkant ${or('=')} ${gr('25')} en die regterkant ${or('=')} ${gr('25')}. Albei kante is gelyk.`,
            `<strong>Ja — ${bl('x')} ${or('=')} ${gr('7')} is ʼn oplossing vir die ${re('vergelyking')}.</strong> ✓`,
          ],
        },
        {
          question: 'Skryf ʼn vergelyking vir hierdie probleem — Lerato verdien R450 per dag. Na hoeveel dae sal sy R2 700 hê?',
          answer: `Die ${re('vergelyking')} is ${gr('450')}${bl('d')} ${or('=')} ${gr('2 700')}`,
          steps: [
            `Laat die aantal dae ${bl('d')} wees. Die ${bl('veranderlike')} ${bl('d')} stel die onbekende aantal dae voor wat ons probeer vind.`,
            `Sy verdien R${gr('450')} per dag, dus is die totaal na ${bl('d')} dae ${gr('450')} × ${bl('d')}. Sy wil R${gr('2 700')} bereik: ${gr('450')} × ${bl('d')} ${or('=')} ${gr('2 700')}.`,
            `<strong>Die ${re('vergelyking')} is ${gr('450')}${bl('d')} ${or('=')} ${gr('2 700')}.</strong> (Ons skryf 450d om 450 × d te beteken.)`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die dele van ʼn vergelyking merk — veranderlike in blou, bekende waardes in groen, gelykaanteken in oranje, en die volledige vergelyking uitgelig in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om vergelykings van woordprobleme te skryf met veranderlikes en hoe om ʼn oplossing te kontroleer deur dit terug te vervang in die vergelyking" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING EQUATIONS USING INVERSE OPERATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-equations-inverse-operations',
      title: 'Vergelykings Oplos met Inverse Bewerkings',
      icon: '⚖',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn vergelyking op te los, vind ons die waarde van die ${bl('veranderlike')} wat die vergelyking waar maak. Ons gebruik <strong>${or('inverse bewerkings')}</strong> om die ${bl('veranderlike')} te isoleer — optelling en aftrekking is inverses van mekaar en vermenigvuldiging en deling is inverses van mekaar. Wat ons ook al aan een kant van die vergelyking doen, moet ons aan die ${gr('ander kant')} doen om dit gebalanseerd te hou. Ons kan aan ʼn vergelyking dink as ʼn gebalanseerde skaal — as ons iets by een kant voeg of daarvan wegneem, moet ons dieselfde aan die ander kant doen.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('veranderlike')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('inverse bewerking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('albei kante')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kontroleer')}</span>` +
        `</div>` +

        // ── Inverse operations reference ─────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Inverse bewerkingspare</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('Optelling ↔ Aftrekking')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">As die ${bl('veranderlike')} ʼn getal het wat <strong>bygetel</strong> is, <strong>trek</strong> daardie getal van ${gr('albei kante')} af.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As die ${bl('veranderlike')} ʼn getal het wat <strong>afgetrek</strong> is, <strong>tel</strong> daardie getal by ${gr('albei kante')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">${or('Vermenigvuldiging ↔ Deling')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">As die ${bl('veranderlike')} met ʼn getal <strong>vermenigvuldig</strong> word, <strong>deel</strong> ${gr('albei kante')} deur daardie getal.</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As die ${bl('veranderlike')} deur ʼn getal <strong>gedeel</strong> word, <strong>vermenigvuldig</strong> ${gr('albei kante')} met daardie getal.</p>` +
        `</div>` +

        `</div>` +

        // ── Balanced scale tip ───────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die reël van die gebalanseerde skaal</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wat jy ook al aan een kant van die vergelyking doen, jy <strong>moet dieselfde aan ${gr('albei kante')} doen</strong>. Die ${or('inverse bewerking')} maak ongedaan wat aan die ${bl('veranderlike')} gedoen is, en laat dit op sy eie staan. Kontroleer jou antwoord altyd ${re('deur')} dit terug te vervang in die oorspronklike vergelyking.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Los op: ${bl('x')} + 13 = 28.`,
          answer: `${bl('x')} = 15`,
          steps: [
            `Ons moet ${bl('x')} isoleer. Die ${or('inverse van 13 optel')} is ${or('13 aftrek')}.`,
            `${gr('Trek 13 van albei kante af:')} ${bl('x')} + 13 − 13 = 28 − 13`,
            `${bl('x')} = 15`,
            `${re('Kontroleer:')} 15 + 13 = 28 ✓`,
          ],
        },
        {
          question: `Los op: ${bl('y')} − 24 = 37.`,
          answer: `${bl('y')} = 61`,
          steps: [
            `Die ${or('inverse van 24 aftrek')} is ${or('24 optel')}.`,
            `${gr('Tel 24 by albei kante:')} ${bl('y')} − 24 + 24 = 37 + 24`,
            `${bl('y')} = 61`,
            `${re('Kontroleer:')} 61 − 24 = 37 ✓`,
          ],
        },
        {
          question: `Los op: 6${bl('m')} = 84.`,
          answer: `${bl('m')} = 14`,
          steps: [
            `Die ${or('inverse van met 6 vermenigvuldig')} is ${or('deur 6 deel')}.`,
            `${gr('Deel albei kante deur 6:')} 6${bl('m')} ÷ 6 = 84 ÷ 6`,
            `${bl('m')} = 14`,
            `${re('Kontroleer:')} 6 × 14 = 84 ✓`,
          ],
        },
        {
          question: `Los op: ${bl('p')} ÷ 9 = 12.`,
          answer: `${bl('p')} = 108`,
          steps: [
            `Die ${or('inverse van deur 9 deel')} is ${or('met 9 vermenigvuldig')}.`,
            `${gr('Vermenigvuldig albei kante met 9:')} ${bl('p')} ÷ 9 × 9 = 12 × 9`,
            `${bl('p')} = 108`,
            `${re('Kontroleer:')} 108 ÷ 9 = 12 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn gebalanseerde skaal wat ʼn vergelyking wys — veranderlike geïsoleer aan een kant nadat die inverse bewerking op albei kante toegepas is, kleurgekodeer met veranderlike in blou, inverse bewerking in oranje, albei kante in groen, en kontrole in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om optelling-, aftrekking-, vermenigvuldiging-, en delingsvergelykings op te los met inverse bewerkings en die gebalanseerde skaal model" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SOLVING TWO-STEP EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-two-step-equations',
      title: 'Twee-stap Vergelykings Oplos',
      icon: '✕',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Twee-stap vergelyking</strong> benodig twee inverse bewerkings om op te los. Ons maak bewerkings altyd ongedaan in die <strong>omgekeerde volgorde van BODMAS</strong> — ${bl('maak eers optelling of aftrekking ongedaan')} en dan ${gr('maak vermenigvuldiging of deling ongedaan')}. Vervang na die oplos altyd jou antwoord terug in die oorspronklike vergelyking om te ${re('kontroleer')} dat albei kante gelyk is.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste stap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tweede stap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('veranderlike')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kontroleer')}</span>` +
        `</div>` +

        // ── Two steps explained ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee stappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Maak optelling of aftrekking ongedaan')} — Gebruik die inverse bewerking om die getal wat met die veranderlike-term bygetel of afgetrek is, te verwyder.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Maak vermenigvuldiging of deling ongedaan')} — Gebruik die inverse bewerking om die ${or('veranderlike')} heeltemal te isoleer.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Kontroleer')} — Vervang jou antwoord terug in die oorspronklike vergelyking om te bevestig dat albei kante gelyk is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom omgekeerde volgorde?</p>` +
        `<p style="margin:0;color:#1e3a8a;">BODMAS sê vermenigvuldiging en deling word voor optelling en aftrekking gedoen. Om ʼn vergelyking <em>ongedaan te maak</em>, werk ons in die <strong>teenoorgestelde</strong> volgorde — ons ${bl('maak eers + of − ongedaan')}, dan ${gr('maak × of ÷ tweede ongedaan')}. Dit laat die ${or('veranderlike')} altyd op sy eie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Los op: 2${or('x')} + 5 = 17.`,
          answer: `${or('x')} = 6`,
          steps: [
            `${bl('Stap 1 — Maak die optelling ongedaan:')} Trek 5 van albei kante af.<br>2${or('x')} + 5 − 5 = 17 − 5<br>2${or('x')} = 12`,
            `${gr('Stap 2 — Maak die vermenigvuldiging ongedaan:')} Deel albei kante deur 2.<br>2${or('x')} ÷ 2 = 12 ÷ 2<br>${or('x')} = 6`,
            `${re('Kontroleer:')} 2 × 6 + 5 = 12 + 5 = 17 ✓`,
          ],
        },
        {
          question: `Los op: 3${or('y')} − 7 = 20.`,
          answer: `${or('y')} = 9`,
          steps: [
            `${bl('Stap 1 — Maak die aftrekking ongedaan:')} Tel 7 by albei kante.<br>3${or('y')} − 7 + 7 = 20 + 7<br>3${or('y')} = 27`,
            `${gr('Stap 2 — Maak die vermenigvuldiging ongedaan:')} Deel albei kante deur 3.<br>3${or('y')} ÷ 3 = 27 ÷ 3<br>${or('y')} = 9`,
            `${re('Kontroleer:')} 3 × 9 − 7 = 27 − 7 = 20 ✓`,
          ],
        },
        {
          question: 'Amahle dink aan ʼn getal. Sy vermenigvuldig dit met 4 en trek dan 6 af. Die antwoord is 26. Wat is die getal?',
          answer: `Die getal is 8`,
          steps: [
            `Laat die getal ${or('n')} wees. Skryf die vergelyking: 4${or('n')} − 6 = 26.`,
            `${bl('Stap 1 — Maak die aftrekking ongedaan:')} Tel 6 by albei kante.<br>4${or('n')} − 6 + 6 = 26 + 6<br>4${or('n')} = 32`,
            `${gr('Stap 2 — Maak die vermenigvuldiging ongedaan:')} Deel albei kante deur 4.<br>4${or('n')} ÷ 4 = 32 ÷ 4<br>${or('n')} = 8`,
            `${re('Kontroleer:')} 4 × 8 − 6 = 32 − 6 = 26 ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn twee-stap vergelyking wys wat in twee kleurgekodeerde stappe opgelos word — eerste stap in blou wat optelling of aftrekking ongedaan maak, dan tweede stap in groen wat vermenigvuldiging of deling ongedaan maak, met veranderlike in oranje en kontrole in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om twee-stap vergelykings op te los met inverse bewerkings in omgekeerde BODMAS-volgorde met uitgewerkte voorbeelde en kontrole deur substitusie" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — WORD PROBLEMS AND EQUATIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'word-problems-and-equations',
      title: 'Woordprobleme en Vergelykings',
      icon: '📝',
      explanation:
        `<p style="margin-bottom:16px;">Baie werklike lewe probleme kan opgelos word deur ʼn ${or('vergelyking')} te skryf en op te los. Lees die probleem noukeurig en identifiseer die onbekende — dit word jou ${bl('veranderlike')}. Skakel die woorde om in wiskundige simbole. Skryf die ${or('vergelyking')} en los dit op met inverse bewerkings. Kontroleer jou antwoord altyd ${re('deur')} dit terug te vervang en maak seker dit maak sin binne die konteks van die probleem.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('onbekende veranderlike')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelyking')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('oplossing')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('kontroleer')}</span>` +
        `</div>` +

        // ── Four steps ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn woordprobleem met ʼn vergelyking op te los</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Identifiseer die onbekende')} — Lees die probleem noukeurig. Besluit wat jy nie weet nie en laat ʼn ${bl('veranderlike')} (soos m, b, of s) dit voorstel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skryf die vergelyking')} — Skakel die woorde om in wiskundige simbole. Maak seker die ${or('vergelyking')} pas by die situasie in die probleem.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Los op vir die veranderlike')} — Gebruik inverse bewerkings om die ${bl('veranderlike')} te isoleer en die ${gr('oplossing')} te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${re('Kontroleer')} — Vervang jou ${gr('oplossing')} terug in die oorspronklike ${or('vergelyking')} en maak seker albei kante is gelyk en die antwoord maak sin binne konteks.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ───────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Woorde in simbole omskakel</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>"meer as" / "verhoog met"</strong> → tel op ( + )<br><strong>"minder as" / "verminder met" / "spandeer"</strong> → trek af ( − )<br><strong>"keer" / "teen R__ elk" / "per"</strong> → vermenigvuldig ( × )<br><strong>"gelykop gedeel" / "elk"</strong> → deel ( ÷ )<br><strong>"is" / "is gelyk aan" / "die resultaat is"</strong> → gelykaanteken ( = )</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo het geld. Nadat hy R245 spandeer het, het hy R380 oor. Hoeveel het hy aan die begin gehad?',
          answer: `Thabo het met ${gr('R625')} begin`,
          steps: [
            `Laat die beginbedrag ${bl('m')} wees. Die ${bl('veranderlike')} ${bl('m')} stel die onbekende voor — die bedrag waarmee Thabo begin het.`,
            `Nadat hy R245 spandeer het, het hy R380 oor. Skakel dit om in ʼn ${or('vergelyking:')} ${or('m − 245 = 380')}.`,
            `Tel 245 by albei kante: ${bl('m')} = 380 + 245 = ${gr('625')}.`,
            `${re('Kontroleer:')} ${re('625 − 245 = 380')} ✓ &nbsp; Thabo het met ${gr('R625')} begin.`,
          ],
        },
        {
          question: 'ʼn Skool koop ʼn aantal boeke teen R85 elk. Die totale koste is R1 275. Hoeveel boeke is gekoop?',
          answer: `Die skool het ${gr('15')} boeke gekoop`,
          steps: [
            `Laat die aantal boeke ${bl('b')} wees. Die ${bl('veranderlike')} ${bl('b')} stel die onbekende aantal boeke voor.`,
            `Teen R85 elk is die totale koste R85 × ${bl('b')} = R1 275. Skryf die ${or('vergelyking:')} ${or('85b = 1 275')}.`,
            `Deel albei kante deur 85: ${bl('b')} = 1 275 ÷ 85 = ${gr('15')}.`,
            `${re('Kontroleer:')} ${re('85 × 15 = 1 275')} ✓ &nbsp; Die skool het ${gr('15')} boeke gekoop.`,
          ],
        },
        {
          question: 'Sipho en Lerato het saam 84 plakkers. Sipho het 12 meer as Lerato. Hoeveel het elkeen?',
          answer: `Lerato het ${gr('36')} plakkers en Sipho het ${gr('48')} plakkers`,
          steps: [
            `Laat Lerato ${bl('s')} plakkers hê. Dan het Sipho ${bl('s')} + 12 plakkers.`,
            `Saam het hulle 84: ${or('s + s + 12 = 84')}, wat vereenvoudig tot ${or('2s + 12 = 84')}.`,
            `Trek 12 van albei kante af: 2${bl('s')} = 72. Deel albei kante deur 2: ${bl('s')} = ${gr('36')}.`,
            `Lerato het ${gr('36')} plakkers en Sipho het ${gr('36')} + 12 = ${gr('48')} plakkers.`,
            `${re('Kontroleer:')} ${re('36 + 48 = 84')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die vier stappe wys om ʼn woordprobleem op te los — identifiseer die onbekende veranderlike in blou, skryf die vergelyking in oranje, vind die oplossing in groen, en kontroleer in rooi" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om woordprobleme om te skakel in vergelykings met ʼn veranderlike en dan op te los en te kontroleer met drie uitgewerkte voorbeelde" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — check a solution by substitution ───────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is x = 5 ʼn oplossing vir x + 12 = 17?',
      answer: 'ja',
      checkMode: 'auto',
      correctAnswer: 'ja',
      correctAnswers: ['ja', 'Ja', 'JA'],
      explanation: 'Vervang x = 5 in x + 12 = 17.\n5 + 12 = 17 ✓\nAlbei kante is gelyk aan 17, dus is x = 5 ʼn oplossing.',
    },

    // ── Q2 Easy — write an equation from a word problem ──────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf ʼn vergelyking vir hierdie probleem: ʼn getal bygetel by 24 is gelyk aan 51.',
      answer: 'n + 24 = 51',
      checkMode: 'auto',
      correctAnswer: 'n + 24 = 51',
      correctAnswers: ['n + 24 = 51', 'n+24=51', '24 + n = 51', '24+n=51'],
      explanation: 'Laat n die onbekende getal wees.\nSkakel om: "ʼn getal bygetel by 24 is gelyk aan 51" → n + 24 = 51.',
    },

    // ── Q3 Medium — solve one-step addition equation ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: x + 17 = 42.',
      answer: '25',
      checkMode: 'auto',
      correctAnswer: '25',
      explanation: 'Inverse van 17 optel is 17 aftrek.\nx + 17 − 17 = 42 − 17\nx = 25\nKontroleer: 25 + 17 = 42 ✓',
    },

    // ── Q4 Medium — solve one-step subtraction equation ──────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: y − 33 = 28.',
      answer: '61',
      checkMode: 'auto',
      correctAnswer: '61',
      explanation: 'Inverse van 33 aftrek is 33 optel.\ny − 33 + 33 = 28 + 33\ny = 61\nKontroleer: 61 − 33 = 28 ✓',
    },

    // ── Q5 Medium — solve one-step multiplication equation ───────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: 8m = 96.',
      answer: '12',
      checkMode: 'auto',
      correctAnswer: '12',
      explanation: 'Inverse van met 8 vermenigvuldig is deur 8 deel.\n8m ÷ 8 = 96 ÷ 8\nm = 12\nKontroleer: 8 × 12 = 96 ✓',
    },

    // ── Q6 Medium — solve one-step division equation ─────────────────────────
    {
      difficulty: 'Medium',
      question: 'Los op: p ÷ 7 = 13.',
      answer: '91',
      checkMode: 'auto',
      correctAnswer: '91',
      explanation: 'Inverse van deur 7 deel is met 7 vermenigvuldig.\np ÷ 7 × 7 = 13 × 7\np = 91\nKontroleer: 91 ÷ 7 = 13 ✓',
    },

    // ── Q7 Hard — solve two-step equation ────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: 3x + 8 = 29.',
      answer: '7',
      checkMode: 'auto',
      correctAnswer: '7',
      explanation: 'Stap 1 — Maak die optelling ongedaan: trek 8 van albei kante af.\n3x + 8 − 8 = 29 − 8\n3x = 21\nStap 2 — Maak die vermenigvuldiging ongedaan: deel albei kante deur 3.\n3x ÷ 3 = 21 ÷ 3\nx = 7\nKontroleer: 3 × 7 + 8 = 21 + 8 = 29 ✓',
    },

    // ── Q8 Hard — solve two-step equation with subtraction ───────────────────
    {
      difficulty: 'Hard',
      question: 'Los op: 5y − 12 = 43.',
      answer: '11',
      checkMode: 'auto',
      correctAnswer: '11',
      explanation: 'Stap 1 — Maak die aftrekking ongedaan: tel 12 by albei kante.\n5y − 12 + 12 = 43 + 12\n5y = 55\nStap 2 — Maak die vermenigvuldiging ongedaan: deel albei kante deur 5.\n5y ÷ 5 = 55 ÷ 5\ny = 11\nKontroleer: 5 × 11 − 12 = 55 − 12 = 43 ✓',
    },

    // ── Q9 Hard — word problem, write and solve a two-step equation ──────────
    {
      difficulty: 'Hard',
      question: 'Sipho dink aan ʼn getal. Hy vermenigvuldig dit met 6 en tel 9 by. Die antwoord is 45. Wat is die getal?',
      answer: '6',
      checkMode: 'auto',
      correctAnswer: '6',
      explanation: 'Laat die getal n wees.\nVergelyking: 6n + 9 = 45\nStap 1: trek 9 van albei kante af → 6n = 36\nStap 2: deel albei kante deur 6 → n = 6\nKontroleer: 6 × 6 + 9 = 36 + 9 = 45 ✓',
    },

    // ── Q10 Hard — word problem, multi-step, self-check ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het geld. Sy spandeer R320 aan skoene en R175 aan ʼn sak. Sy het R405 oor. Hoeveel het sy aan die begin gehad?',
      answer: 'Laat m = beginbedrag.\nm − 320 − 175 = 405\nm − 495 = 405\nm = 900\nLerato het met R900 begin.',
      checkMode: 'self',
    },

    // ── Q11 Hard — word problem, solve by forming a division equation ─────────
    {
      difficulty: 'Hard',
      question: 'ʼn Fabriek vervaardig dieselfde aantal items elke dag. Na 14 dae het dit 4 228 items vervaardig. Hoeveel items vervaardig dit per dag?',
      answer: '302',
      checkMode: 'auto',
      correctAnswer: '302',
      explanation: 'Laat d = items per dag.\nVergelyking: 14d = 4 228\nDeel albei kante deur 14: d = 4 228 ÷ 14 = 302\nKontroleer: 14 × 302 = 4 228 ✓',
    },

    // ── Q12 Hard — word problem with two unknowns, self-check ────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle en Thabo versamel saam 120 blikkies vir ʼn kosinsameling. Amahle versamel 3 keer soveel as Thabo. Hoeveel versamel elkeen?',
      answer: 'Laat Thabo t blikkies versamel. Amahle versamel 3t.\nt + 3t = 120\n4t = 120\nt = 30\nThabo versamel 30 en Amahle versamel 90.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minScore: 12, message: 'Uitstekend! Jy het getalsinne en vergelykings baasgeraak.' },
      { minScore: 9, message: 'Goeie werk! Jy het ʼn sterk begrip van vergelykings.' },
      { minScore: 6, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn slag.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt-telling — jy het getalsinne en vergelykings vir Graad 6 heeltemal baasgeraak. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van vergelykings. Gaan enige gemiste dele deur en jy sal dit perfek hê.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eens ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde weer deur, en probeer dan weer." },
  ],
}
