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
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Vergelykings, veranderlikes, kontroleer oplossings (Easy) — posisies 0-3
        { difficulty: 'Easy', question: 'Is die getalsin 8 + 6 = 15 waar of onwaar?', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'vals', 'nee'], explanation: 'Bereken die linkerkant: 8 + 6 = 14.\nIs 14 = 15? Nee.\nDie getalsin is onwaar.' },
        { difficulty: 'Easy', question: 'Noem in die vergelyking x + 12 = 30 die veranderlike, die bekende waardes, en verduidelik wat die gelykaanteken wys.', answer: 'Die veranderlike is x. Die bekende waardes is 12 en 30. Die gelykaanteken wys dat x + 12 dieselfde waarde het as 30 — albei kante is gebalanseerd.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Zanele het ʼn bedrag sakgeld. Is m = 40 ʼn oplossing vir m − 15 = 25? Wys jou kontrole deur substitusie.', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang m = 40 in m − 15 = 25.\n40 − 15 = 25 ✓\nAlbei kante is gelyk aan 25, dus is m = 40 ʼn oplossing.' },
        { difficulty: 'Easy', question: 'Thabo sê x = 9 is ʼn oplossing vir 4x + 3 = 39 — is hy korrek? Wys jou kontrole.', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang x = 9 in 4x + 3 = 39.\n4 × 9 + 3 = 36 + 3 = 39 ✓\nThabo is korrek — albei kante is gelyk aan 39.' },

        // Blok 2 — Woordprobleme in vergelykings omskakel, nie oplos nie (Easy-Medium) — posisies 4-7
        { difficulty: 'Easy', question: 'Skryf ʼn vergelyking vir hierdie probleem — moenie dit oplos nie: ʼn getal verhoog met 18 gee 42.', answer: 'n + 18 = 42', checkMode: 'auto', correctAnswer: 'n + 18 = 42', correctAnswers: ['n + 18 = 42', 'n+18=42', '18 + n = 42', '18+n=42'], explanation: 'Laat n die onbekende getal wees.\n"Verhoog met" beteken optel.\nn + 18 = 42' },
        { difficulty: 'Easy-Medium', question: 'Kagiso koop albasters teen R3 elk. Skryf ʼn vergelyking (moenie oplos nie) vir die totale koste, T, om k albasters te koop.', answer: 'T = 3k', checkMode: 'auto', correctAnswer: 'T = 3k', correctAnswers: ['T = 3k', 't=3k', '3k = T', '3k=t'], explanation: '"Teen R3 elk" beteken vermenigvuldig.\nKoste = prys per albaster × aantal albasters\nT = 3k' },
        { difficulty: 'Medium', question: 'Watter vergelyking pas by hierdie storie — Lindiwe het ʼn aantal sportpunte. Sy verloor 20 punte weens ʼn strafskop en het nou 65 punte.\n\nA) p − 20 = 65\nB) p + 20 = 65\nC) 20 − p = 65\n\nSkryf net "A", "B", of "C".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: '"Verloor" beteken trek af van haar beginpunte p.\nBeginpunte min 20 is gelyk aan 65: p − 20 = 65\nDit pas by vergelyking A.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf die vergelyking 8 + w = 40 vir hierdie probleem: "Nomvula deel 40 lekkers gelykop tussen 8 vriende. Hoeveel kry elke vriend?" Verduidelik wat verkeerd is met hierdie vergelyking.', answer: 'Die vergelyking is verkeerd want die probleem beskryf gelykop deel (deling), nie optelling nie. "Deel gelykop tussen 8 vriende" beteken die totaal van 40 moet deur 8 gedeel word, nie by 8 getel word nie. Die korrekte vergelyking is 40 ÷ 8 = w, of gelykstaande 8w = 40.', checkMode: 'self' },

        // Blok 3 — Een-stap vergelykings met inverse bewerkings (Medium) — posisies 8-11
        { difficulty: 'Medium', question: 'Los op: x + 29 = 64.', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: 'Inverse van 29 optel is 29 aftrek.\nx + 29 − 29 = 64 − 29\nx = 35\nKontroleer: 35 + 29 = 64 ✓' },
        { difficulty: 'Medium', question: 'Los op: 9m = 117. Watter inverse bewerking het jy gebruik, en waarom?', answer: 'm = 13. Ek het deling gebruik omdat m met 9 vermenigvuldig word, en deur 9 deel is die inverse bewerking wat vermenigvuldiging ongedaan maak en m isoleer. 117 ÷ 9 = 13. Kontroleer: 9 × 13 = 117 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Student los x − 37 = 48 op deur 37 van albei kante af te trek, en kry x = 11. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die student het die verkeerde inverse bewerking gebruik. Omdat 37 van x afgetrek word, is die inverse optelling, nie aftrekking nie. Deur 37 by albei kante te tel, kry ons x = 48 + 37 = 85. Kontroleer: 85 − 37 = 48 ✓. Die student se antwoord van 11 is verkeerd omdat om weer 37 af te trek nie die oorspronklike aftrekking ongedaan maak nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Verkoper verkoop appels in sakke van 6. Bongani beweer dat as 6b = 102, dan is b = 18. Is Bongani korrek? Wys jou kontrole.', answer: 'nee', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Deel albei kante deur 6: b = 102 ÷ 6 = 17.\nKontroleer Bongani se bewering: 6 × 18 = 108, nie 102 nie, dus is sy antwoord verkeerd.\nBongani is nie korrek nie; die korrekte antwoord is b = 17. Kontroleer: 6 × 17 = 102 ✓' },

        // Blok 4 — Twee-stap vergelykings, omgekeerde BODMAS-volgorde (Medium-Hard) — posisies 12-15
        { difficulty: 'Medium', question: 'Los op: 4x + 7 = 59.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: 'Stap 1 — Maak die optelling ongedaan: trek 7 van albei kante af.\n4x + 7 − 7 = 59 − 7\n4x = 52\nStap 2 — Maak die vermenigvuldiging ongedaan: deel albei kante deur 4.\n4x ÷ 4 = 52 ÷ 4\nx = 13\nKontroleer: 4 × 13 + 7 = 52 + 7 = 59 ✓' },
        { difficulty: 'Medium-Hard', question: 'Zinhle dink aan ʼn getal. Sy vermenigvuldig dit met 6 en trek 13 af, wat ʼn antwoord van 71 gee. Wat is haar getal?', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: 'Laat die getal n wees.\nVergelyking: 6n − 13 = 71\nStap 1: tel 13 by albei kante → 6n = 84\nStap 2: deel albei kante deur 6 → n = 14\nKontroleer: 6 × 14 − 13 = 84 − 13 = 71 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Student los 5x − 8 = 32 op deur eers albei kante deur 5 te deel, en kry x − 8 = 6,4, en tel dan 8 by om x = 14,4 te kry. Verduidelik die fout in hierdie volgorde van bewerkings en los korrek op.', answer: 'Die fout is om die bewerkings in die verkeerde volgorde ongedaan te maak. Omdat 5x − 8 = 32 eers deur met 5 te vermenigvuldig en dan 8 af te trek gebou is, moet ons eers aftrekking ongedaan maak (tel 8 by albei kante), en dan vermenigvuldiging ongedaan maak (deel deur 5) — nie andersom nie. Korrekte metode: 5x − 8 + 8 = 32 + 8, dus 5x = 40, dan x = 40 ÷ 5 = 8. Kontroleer: 5 × 8 − 8 = 40 − 8 = 32 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee vergelykings het die groter oplossing?\n\nA) 3x + 4 = 25\nB) 2x + 9 = 31\n\nSkryf net "A" of "B".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: 'A) 3x + 4 = 25 → 3x = 21 → x = 7\nB) 2x + 9 = 31 → 2x = 22 → x = 11\n11 > 7, dus het vergelyking B die groter oplossing.' },

        // Blok 5 — Multi-stap en gekombineerde-onbekende woordprobleme (Hard) — posisies 16-19
        { difficulty: 'Hard', question: 'Sipho begin met ʼn bedrag geld. Hy spandeer R145 aan skoene en R90 aan ʼn hemp, en sy oom gee hom dan R60. Hy eindig met R210. Hoeveel het hy aan die begin gehad?', answer: 'Laat s = beginbedrag.\ns − 145 − 90 + 60 = 210\ns − 175 = 210\ns = 385\nSipho het met R385 begin.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle en Kagiso deel 150 seëls. Amahle het 15 meer as twee keer soveel seëls as Kagiso. Hoeveel seëls het elkeen?', answer: 'Laat Kagiso k seëls hê. Amahle het 2k + 15.\nk + 2k + 15 = 150\n3k + 15 = 150\n3k = 135\nk = 45\nKagiso het 45 seëls en Amahle het 2 × 45 + 15 = 105 seëls.\nKontroleer: 45 + 105 = 150 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Tutor verdien dieselfde bedrag vir elke les wat sy gee. Nadat sy 8 lesse in ʼn week gegee het, het sy R376 verdien. Hoeveel verdien sy per les?', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: 'Laat r = tarief per les.\nVergelyking: 8r = 376\nDeel albei kante deur 8: r = 376 ÷ 8 = 47\nKontroleer: 8 × 47 = 376 ✓\nSy verdien R47 per les.' },
        { difficulty: 'Hard', question: 'Lerato sê x = 12 is die oplossing vir 5x − 20 = 40. Wys ʼn volledige kontrole deur substitusie en verduidelik of sy korrek is.', answer: 'Vervang x = 12 in 5x − 20 = 40.\n5 × 12 − 20 = 60 − 20 = 40\nDie linkerkant is gelyk aan 40 en die regterkant is 40, dus is albei kante gelyk. Lerato is korrek — x = 12 is die oplossing.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vergelykings, inverse bewerkings, en woordprobleme met getalsinne baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae oor twee-stap vergelykings of woordprobleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en omgekeerde BODMAS-volgorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Vergelykings, veranderlikes, kontroleer oplossings (Easy) — posisies 0-3
        { difficulty: 'Easy', question: 'Is die getalsin 9 × 7 = 64 waar of onwaar?', answer: 'onwaar', checkMode: 'auto', correctAnswer: 'onwaar', correctAnswers: ['onwaar', 'vals', 'nee'], explanation: 'Bereken die linkerkant: 9 × 7 = 63.\nIs 63 = 64? Nee.\nDie getalsin is onwaar.' },
        { difficulty: 'Easy', question: 'Noem in die vergelyking 5y − 8 = 32 die veranderlike en die twee bekende waardes.', answer: 'Die veranderlike is y. Die bekende waardes is 8 en 32.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Sipho het ʼn aantal doelwitte hierdie seisoen aangeteken. Is g = 14 ʼn oplossing vir g + 6 = 20?', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang g = 14 in g + 6 = 20.\n14 + 6 = 20 ✓\nAlbei kante is gelyk aan 20, dus is g = 14 ʼn oplossing.' },
        { difficulty: 'Easy', question: 'Precious sê x = 6 is ʼn oplossing vir 8x − 9 = 40 — is sy korrek? Wys jou kontrole.', answer: 'nee', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Vervang x = 6 in 8x − 9 = 40.\n8 × 6 − 9 = 48 − 9 = 39\nIs 39 = 40? Nee.\nPrecious is nie korrek nie — x = 6 is nie ʼn oplossing nie.' },

        // Blok 2 — Woordprobleme in vergelykings omskakel, nie oplos nie (Easy-Medium) — posisies 4-7
        { difficulty: 'Easy', question: 'Skryf ʼn vergelyking vir hierdie probleem — moenie dit oplos nie: ʼn getal verminder met 25 gee 60.', answer: 'n − 25 = 60', checkMode: 'auto', correctAnswer: 'n - 25 = 60', correctAnswers: ['n - 25 = 60', 'n-25=60', 'n − 25 = 60'], explanation: 'Laat n die onbekende getal wees.\n"Verminder met" beteken aftrek.\nn − 25 = 60' },
        { difficulty: 'Easy-Medium', question: 'ʼn Stadion het s sitplekke gelykop verdeel oor 12 afdelings, met 45 sitplekke in elke afdeling. Skryf ʼn vergelyking (moenie oplos nie) wat s aan die afdelings koppel.', answer: 's ÷ 12 = 45', checkMode: 'auto', correctAnswer: 's ÷ 12 = 45', correctAnswers: ['s ÷ 12 = 45', 's/12=45', 's÷12=45'], explanation: '"Gelykop verdeel oor 12" beteken deel deur 12.\nTotale sitplekke ÷ aantal afdelings = sitplekke per afdeling\ns ÷ 12 = 45' },
        { difficulty: 'Medium', question: 'Watter vergelyking pas by hierdie storie — Thandiwe het ʼn bedrag lugtyd gehad. Sy koop nog R35 se lugtyd en het nou R120 se lugtyd in totaal.\n\nA) a − 35 = 120\nB) a + 35 = 120\nC) 35a = 120\n\nSkryf net "A", "B", of "C".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: '"Koop nog" beteken tel by haar beginlugtyd a.\nBeginlugtyd plus 35 is gelyk aan 120: a + 35 = 120\nDit pas by vergelyking B.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf die vergelyking p − 9 = 63 vir hierdie probleem: "ʼn Winkel verkoop potlode teen R9 elk. Die totaal vir ʼn klasbestelling is R63. Hoeveel potlode is gekoop?" Verduidelik wat verkeerd is met hierdie vergelyking.', answer: 'Die vergelyking is verkeerd want die probleem beskryf ʼn prys per item (vermenigvuldiging), nie aftrekking nie. "Teen R9 elk" beteken die totale koste is gelyk aan R9 vermenigvuldig met die aantal potlode, p. Die korrekte vergelyking is 9p = 63.', checkMode: 'self' },

        // Blok 3 — Een-stap vergelykings met inverse bewerkings (Medium) — posisies 8-11
        { difficulty: 'Medium', question: 'Los op: y − 46 = 58.', answer: '104', checkMode: 'auto', correctAnswer: '104', explanation: 'Inverse van 46 aftrek is 46 optel.\ny − 46 + 46 = 58 + 46\ny = 104\nKontroleer: 104 − 46 = 58 ✓' },
        { difficulty: 'Medium', question: 'Los op: p ÷ 9 = 23. Watter inverse bewerking het jy gebruik, en waarom?', answer: 'p = 207. Ek het vermenigvuldiging gebruik omdat p deur 9 gedeel word, en met 9 vermenigvuldig is die inverse bewerking wat deling ongedaan maak en p isoleer. 23 × 9 = 207. Kontroleer: 207 ÷ 9 = 23 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Student los 7x = 154 op deur net die linkerkant deur 7 te deel, en kry x = 22 maar skryf die regterkant steeds as 154. Verduidelik die fout in hierdie redenasie, al is die finale numeriese antwoord korrek.', answer: 'Al is x = 22 toevallig numeries korrek (154 ÷ 7 = 22), is die beskryfde metode gebrekkige redenasie — jy moet BEIDE kante van die vergelyking deur 7 deel om dit gebalanseerd te hou, nie net die linkerkant isoleer terwyl die regterkant geïgnoreer word nie. Korrek geskryf: 7x ÷ 7 = 154 ÷ 7, dus x = 22. Om dit enige ander manier te doen, loop jy risiko vir foute in vergelykings waar die berekening minder voor die hand liggend is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Boer pak lemoene in kratte van 8. Nkosana beweer dat as 8c = 152, dan is c = 19. Is Nkosana korrek? Wys jou kontrole.', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Deel albei kante deur 8: c = 152 ÷ 8 = 19.\nKontroleer: 8 × 19 = 152 ✓\nNkosana is korrek.' },

        // Blok 4 — Twee-stap vergelykings, omgekeerde BODMAS-volgorde (Medium-Hard) — posisies 12-15
        { difficulty: 'Medium', question: 'Los op: 6x − 14 = 58.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Stap 1 — Maak die aftrekking ongedaan: tel 14 by albei kante.\n6x − 14 + 14 = 58 + 14\n6x = 72\nStap 2 — Maak die vermenigvuldiging ongedaan: deel albei kante deur 6.\n6x ÷ 6 = 72 ÷ 6\nx = 12\nKontroleer: 6 × 12 − 14 = 72 − 14 = 58 ✓' },
        { difficulty: 'Medium-Hard', question: 'Bongiwe dink aan ʼn getal. Sy vermenigvuldig dit met 12 en trek 27 af, wat ʼn antwoord van 105 gee. Wat is haar getal?', answer: '11', checkMode: 'auto', correctAnswer: '11', explanation: 'Laat die getal n wees.\nVergelyking: 12n − 27 = 105\nStap 1: tel 27 by albei kante → 12n = 132\nStap 2: deel albei kante deur 12 → n = 11\nKontroleer: 12 × 11 − 27 = 132 − 27 = 105 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Student los 3x + 15 = 60 op deur eers albei kante deur 3 te deel, en kry x + 15 = 20, en trek dan 15 af om x = 5 te kry. Verduidelik die fout in hierdie volgorde van bewerkings en los korrek op.', answer: 'Die fout is om die bewerkings in die verkeerde volgorde ongedaan te maak — om 60 deur 3 te deel, deel nie die hele regterkant korrek nie, want 15 is BY die vermenigvuldiging getel, dus kan dit nie net saam met die 3x-term gedeel word nie. Die korrekte metode is om eers optelling ongedaan te maak: trek 15 van albei kante af om 3x = 45 te kry, deel dan deur 3 om x = 15 te kry. Kontroleer: 3 × 15 + 15 = 45 + 15 = 60 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee vergelykings het die groter oplossing?\n\nA) 4x − 6 = 34\nB) 5x − 8 = 37\n\nSkryf net "A" of "B".', answer: 'A', checkMode: 'auto', correctAnswer: 'a', correctAnswers: ['a', 'A'], explanation: 'A) 4x − 6 = 34 → 4x = 40 → x = 10\nB) 5x − 8 = 37 → 5x = 45 → x = 9\n10 > 9, dus het vergelyking A die groter oplossing.' },

        // Blok 5 — Multi-stap en gekombineerde-onbekende woordprobleme (Hard) — posisies 16-19
        { difficulty: 'Hard', question: 'Nomsa begin met ʼn bedrag spaargeld. Sy verdien R220 deur huistake te doen en R85 as ʼn verjaardaggeskenk, en spandeer dan R150 aan ʼn geskenk vir ʼn vriend. Sy eindig met R430. Hoeveel het sy aan die begin gehad?', answer: 'Laat s = beginbedrag.\ns + 220 + 85 − 150 = 430\ns + 155 = 430\ns = 275\nNomsa het met R275 begin.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thulani en Refilwe deel 96 albasters. Thulani het 3 keer soveel albasters as Refilwe. Hoeveel albasters het elkeen?', answer: 'Laat Refilwe r albasters hê. Thulani het 3r.\nr + 3r = 96\n4r = 96\nr = 24\nRefilwe het 24 albasters en Thulani het 3 × 24 = 72 albasters.\nKontroleer: 24 + 72 = 96 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Afleweringsbestuurder verdien dieselfde bedrag vir elke pakkie wat afgelewer word. Nadat hy 6 dae lank pakkies afgelewer het, het hy R2 748 verdien. As hy elke dag dieselfde bedrag verdien, hoeveel verdien hy per dag?', answer: '458', checkMode: 'auto', correctAnswer: '458', explanation: 'Laat r = verdienste per dag.\nVergelyking: 6r = 2 748\nDeel albei kante deur 6: r = 2 748 ÷ 6 = 458\nKontroleer: 6 × 458 = 2 748 ✓\nHy verdien R458 per dag.' },
        { difficulty: 'Hard', question: 'Kagiso sê x = 15 is die oplossing vir 3x − 25 = 20. Wys ʼn volledige kontrole deur substitusie en verduidelik of hy korrek is.', answer: 'Vervang x = 15 in 3x − 25 = 20.\n3 × 15 − 25 = 45 − 25 = 20\nDie linkerkant is gelyk aan 20 en die regterkant is 20, dus is albei kante gelyk. Kagiso is korrek — x = 15 is die oplossing.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vergelykings, inverse bewerkings, en woordprobleme met getalsinne baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae oor twee-stap vergelykings of woordprobleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en omgekeerde BODMAS-volgorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Vergelykings, veranderlikes, kontroleer oplossings (Easy) — posisies 0-3
        { difficulty: 'Easy', question: 'Is die getalsin 72 ÷ 8 = 9 waar of onwaar?', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja'], explanation: 'Bereken die linkerkant: 72 ÷ 8 = 9.\nIs 9 = 9? Ja.\nDie getalsin is waar.' },
        { difficulty: 'Easy', question: 'Noem in die vergelyking 7t + 4 = 60 die veranderlike en verduidelik wat die gelykaanteken wys.', answer: 'Die veranderlike is t. Die gelykaanteken wys dat die uitdrukking 7t + 4 presies dieselfde waarde het as 60 — die twee kante is gebalanseerd.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Mpho het ʼn aantal albasters. Is m = 22 ʼn oplossing vir m − 9 = 13?', answer: 'ja', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Vervang m = 22 in m − 9 = 13.\n22 − 9 = 13 ✓\nAlbei kante is gelyk aan 13, dus is m = 22 ʼn oplossing.' },
        { difficulty: 'Easy', question: 'Karabo sê x = 5 is ʼn oplossing vir 6x + 8 = 40 — is hy korrek? Wys jou kontrole.', answer: 'nee', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Vervang x = 5 in 6x + 8 = 40.\n6 × 5 + 8 = 30 + 8 = 38\nIs 38 = 40? Nee.\nKarabo is nie korrek nie — x = 5 is nie ʼn oplossing nie.' },

        // Blok 2 — Woordprobleme in vergelykings omskakel, nie oplos nie (Easy-Medium) — posisies 4-7
        { difficulty: 'Easy', question: 'Skryf ʼn vergelyking vir hierdie probleem — moenie dit oplos nie: ʼn getal vermenigvuldig met 7 gee 84.', answer: '7n = 84', checkMode: 'auto', correctAnswer: '7n = 84', correctAnswers: ['7n = 84', '7n=84', 'n × 7 = 84', 'n x 7 = 84'], explanation: 'Laat n die onbekende getal wees.\n"Vermenigvuldig met 7" beteken vermenigvuldig.\n7n = 84' },
        { difficulty: 'Easy-Medium', question: 'Palesa koop ʼn baadjie teen R450 en betaal ʼn deposito van R120 kontant, en betaal dan die res, b, met kaart. Skryf ʼn vergelyking (moenie oplos nie) wat die deposito en die oorblywende bedrag aan die totaal koppel.', answer: '120 + b = 450', checkMode: 'auto', correctAnswer: '120 + b = 450', correctAnswers: ['120 + b = 450', '120+b=450', 'b + 120 = 450', 'b+120=450'], explanation: 'Die deposito plus die oorblywende bedrag is gelyk aan die totale prys.\n120 + b = 450' },
        { difficulty: 'Medium', question: 'Watter vergelyking pas by hierdie storie — Vusi het ʼn aantal doelwitte hierdie seisoen aangeteken. Hy tel dan nog 5 doelwitte aan in die finale wedstryd, wat hom 23 doelwitte in totaal gee.\n\nA) g − 5 = 23\nB) 5g = 23\nC) g + 5 = 23\n\nSkryf net "A", "B", of "C".', answer: 'C', checkMode: 'auto', correctAnswer: 'c', correctAnswers: ['c', 'C'], explanation: '"Tel nog 5 aan" beteken tel 5 by sy beginaantal doelwitte g.\nBeginaantal plus 5 is gelyk aan 23: g + 5 = 23\nDit pas by vergelyking C.' },
        { difficulty: 'Medium', question: 'ʼn Leerder skryf die vergelyking d + 6 = 90 vir hierdie probleem: "ʼn Totaal van 90 muffins word gelykop tussen 6 klasse verdeel. Hoeveel kry elke klas, d?" Verduidelik wat verkeerd is met hierdie vergelyking.', answer: 'Die vergelyking is verkeerd want die probleem beskryf gelykop deel (deling), nie optelling nie. "Gelykop verdeel tussen 6 klasse" beteken die totaal van 90 moet deur 6 gedeel word. Die korrekte vergelyking is 90 ÷ 6 = d, of gelykstaande 6d = 90.', checkMode: 'self' },

        // Blok 3 — Een-stap vergelykings met inverse bewerkings (Medium) — posisies 8-11
        { difficulty: 'Medium', question: 'Los op: x + 68 = 121.', answer: '53', checkMode: 'auto', correctAnswer: '53', explanation: 'Inverse van 68 optel is 68 aftrek.\nx + 68 − 68 = 121 − 68\nx = 53\nKontroleer: 53 + 68 = 121 ✓' },
        { difficulty: 'Medium', question: 'Los op: 11n = 132. Watter inverse bewerking het jy gebruik, en waarom?', answer: 'n = 12. Ek het deling gebruik omdat n met 11 vermenigvuldig word, en deur 11 deel is die inverse bewerking wat vermenigvuldiging ongedaan maak en n isoleer. 132 ÷ 11 = 12. Kontroleer: 11 × 12 = 132 ✓', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Student los x ÷ 7 = 15 op deur albei kante weer deur 7 te deel, en kry x = 15 ÷ 7. Verduidelik die fout en gee die korrekte antwoord.', answer: 'Die student het die verkeerde inverse bewerking gebruik. Omdat x deur 7 gedeel word, is die inverse vermenigvuldiging, nie verdere deling nie. Deur albei kante met 7 te vermenigvuldig, kry ons x = 15 × 7 = 105. Kontroleer: 105 ÷ 7 = 15 ✓. Om weer te deel beweeg verder weg van om x te isoleer, in plaas daarvan om die deling ongedaan te maak.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Skool pak leerders in busse van 45 sitplekke. Ayanda beweer dat as 45b = 405, dan is b = 8. Is Ayanda korrek? Wys jou kontrole.', answer: 'nee', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Deel albei kante deur 45: b = 405 ÷ 45 = 9.\nKontroleer: 45 × 9 = 405 ✓, maar 45 × 8 = 360 ≠ 405.\nAyanda is nie korrek nie — die korrekte antwoord is b = 9.' },

        // Blok 4 — Twee-stap vergelykings, omgekeerde BODMAS-volgorde (Medium-Hard) — posisies 12-15
        { difficulty: 'Medium', question: 'Los op: 8x + 37 = 133.', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: 'Stap 1 — Maak die optelling ongedaan: trek 37 van albei kante af.\n8x + 37 − 37 = 133 − 37\n8x = 96\nStap 2 — Maak die vermenigvuldiging ongedaan: deel albei kante deur 8.\n8x ÷ 8 = 96 ÷ 8\nx = 12\nKontroleer: 8 × 12 + 37 = 96 + 37 = 133 ✓' },
        { difficulty: 'Medium-Hard', question: 'Ntombi dink aan ʼn getal. Sy vermenigvuldig dit met 15 en trek 48 af, wat ʼn antwoord van 192 gee. Wat is haar getal?', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Laat die getal n wees.\nVergelyking: 15n − 48 = 192\nStap 1: tel 48 by albei kante → 15n = 240\nStap 2: deel albei kante deur 15 → n = 16\nKontroleer: 15 × 16 − 48 = 240 − 48 = 192 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Student los 9x − 18 = 63 op deur eers 18 van 63 af te trek (in plaas van optel), en kry 9x = 45 en dan x = 5. Verduidelik die fout in hierdie volgorde van bewerkings en los korrek op.', answer: 'Die fout is om die verkeerde inverse bewerking te gebruik — omdat 18 op die linkerkant afgetrek word, moet ons 18 by ALBEI kante TEL om dit ongedaan te maak, nie weer 18 aftrek nie. Korrekte metode: 9x − 18 + 18 = 63 + 18, dus 9x = 81, dan x = 81 ÷ 9 = 9. Kontroleer: 9 × 9 − 18 = 81 − 18 = 63 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Watter een van hierdie twee vergelykings het die groter oplossing?\n\nA) 6x + 5 = 41\nB) 4x + 3 = 39\n\nSkryf net "A" of "B".', answer: 'B', checkMode: 'auto', correctAnswer: 'b', correctAnswers: ['b', 'B'], explanation: 'A) 6x + 5 = 41 → 6x = 36 → x = 6\nB) 4x + 3 = 39 → 4x = 36 → x = 9\n9 > 6, dus het vergelyking B die groter oplossing.' },

        // Blok 5 — Multi-stap en gekombineerde-onbekende woordprobleme (Hard) — posisies 16-19
        { difficulty: 'Hard', question: 'Lindiwe begin met ʼn bedrag lugtytkrediet. Sy gebruik R65 aan oproepe en R40 aan data, en koop dan nog R100 se lugtyd. Sy eindig met R95 krediet. Hoeveel het sy aan die begin gehad?', answer: 'Laat s = beginbedrag.\ns − 65 − 40 + 100 = 95\ns − 5 = 95\ns = 100\nLindiwe het met R100 begin.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sibusiso en Andile deel 200 plakkers. Sibusiso het 20 meer as twee keer soveel plakkers as Andile. Hoeveel plakkers het elkeen?', answer: 'Laat Andile a plakkers hê. Sibusiso het 2a + 20.\na + 2a + 20 = 200\n3a + 20 = 200\n3a = 180\na = 60\nAndile het 60 plakkers en Sibusiso het 2 × 60 + 20 = 140 plakkers.\nKontroleer: 60 + 140 = 200 ✓', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Karwas-span verdien dieselfde bedrag vir elke motor wat gewas word. Nadat hulle 9 dae lank motors gewas het, het die span R3 411 verdien. Hoeveel verdien die span per dag?', answer: '379', checkMode: 'auto', correctAnswer: '379', explanation: 'Laat r = verdienste per dag.\nVergelyking: 9r = 3 411\nDeel albei kante deur 9: r = 3 411 ÷ 9 = 379\nKontroleer: 9 × 379 = 3 411 ✓\nDie span verdien R379 per dag.' },
        { difficulty: 'Hard', question: 'Thandeka sê x = 18 is die oplossing vir 4x − 27 = 45. Wys ʼn volledige kontrole deur substitusie en verduidelik of sy korrek is.', answer: 'Vervang x = 18 in 4x − 27 = 45.\n4 × 18 − 27 = 72 − 27 = 45\nDie linkerkant is gelyk aan 45 en die regterkant is 45, dus is albei kante gelyk. Thandeka is korrek — x = 18 is die oplossing.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het vergelykings, inverse bewerkings, en woordprobleme met getalsinne baasgeraak.' },
        { minScore: 15, message: 'Goeie werk! Gaan gemiste vrae oor twee-stap vergelykings of woordprobleme deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor inverse bewerkings en omgekeerde BODMAS-volgorde weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
