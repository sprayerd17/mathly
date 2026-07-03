import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// smallest extreme  → blue   (#2563eb)
// largest extreme   → red    (#dc2626)
// range             → orange (#ea580c)
// connecting lines  → green  (#16a34a)
// bias factors      → red    (#dc2626)
// sample size       → orange (#ea580c)
// valid conclusions → green  (#16a34a)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Datahantering',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — DATA ORGANISEER EN MAATSTAWWE VAN VERSPREIDING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'organising-data-measures-of-dispersion',
      title: 'Data Organiseer en Maatstawwe van Verspreiding',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien die organisering van data met behulp van telmerke, tabelle en stingel-en-blaar-diagramme, groepeer data in intervalle, en som op met behulp van gemiddelde, mediaan en modus. Ons brei dit uit na <strong>maatstawwe van verspreiding</strong>, insluitend variasiewydte en ekstreme (die kleinste en grootste waardes in ʼn datastel).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kleinste ekstreem')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('grootste ekstreem')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('variasiewydte')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kleinste Ekstreem</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('kleinste waarde')} in ʼn datastel — ook die minimum genoem.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Grootste Ekstreem</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('grootste waarde')} in ʼn datastel — ook die maksimum genoem.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Variasiewydte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('verskil')} tussen die grootste en kleinste waardes — dit meet hoe versprei die data is.</p>` +
        `</div>` +

        `</div>` +

        // ── Range formula ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Variasiewydte-formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('Variasiewydte')} = ${re('grootste ekstreem')} − ${bl('kleinste ekstreem')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom verspreiding saak maak</p>` +
        `<p style="margin:0;color:#1e3a8a;">Twee datastelle kan dieselfde gemiddelde hê, maar heeltemal verskillende spreidings. Die ${or('variasiewydte')} wys hoe versprei die data is — ʼn groot variasiewydte beteken die waardes wissel wyd, terwyl ʼn klein variasiewydte beteken hulle is bymekaar gegroepeer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die variasiewydte en ekstreme van die datastel: 12, 45, 8, 33, 52, 19.',
          answer: `${bl('Kleinste ekstreem')} = ${bl('8')}, ${re('Grootste ekstreem')} = ${re('52')}, ${or('Variasiewydte')} = ${or('44')}`,
          steps: [
            `Identifiseer die ${bl('kleinste waarde (ekstreem)')} deur al die waardes te deurkyk: 12, 45, 8, 33, 52, 19. Die ${bl('kleinste ekstreem')} = ${bl('8')} (minimum).`,
            `Identifiseer die ${re('grootste waarde (ekstreem)')} in die datastel. Die ${re('grootste ekstreem')} = ${re('52')} (maksimum).`,
            `Bereken die ${or('variasiewydte')}: ${or('Variasiewydte')} = ${re('grootste ekstreem')} − ${bl('kleinste ekstreem')} = ${re('52')} − ${bl('8')} = ${or('44')}.`,
          ],
        },
        {
          question: 'Sipho groepeer toetstellings in intervalle van 10 (0–9, 10–19, 20–29, …). Waarom kan dit nuttig wees?',
          answer: 'Om data in intervalle te groepeer maak groot datastelle makliker om op te som en visueel voor te stel, veral met baie individuele waardes.',
          steps: [
            'Om data in intervalle te groepeer maak groot datastelle makliker om op te som en visueel voor te stel, veral wanneer daar baie individuele waardes is.',
            'In plaas daarvan om elke enkele telling te lys, laat intervalle jou toe om te sien hoeveel tellings binne elke interval val — wat die algehele vorm en verspreiding van die data onthul.',
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die variasiewydte van die datastel: 14, 22, 9, 31, 18.',
          answer: '22',
          checkMode: 'auto',
          correctAnswer: '22',
          explanation: 'Kleinste waarde = 9. Grootste waarde = 31.\nVariasiewydte = 31 − 9 = 22 ✓',
        },

        // ── V2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die ekstreme van die datastel: 45, 12, 67, 23, 8, 52.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Kleinste ekstreem',
              correctAnswer: '8',
              explanation: 'Rangskik die waardes in volgorde: 8, 12, 23, 45, 52, 67. Die kleinste ekstreem = 8.',
            },
            {
              label: 'b) Grootste ekstreem',
              correctAnswer: '67',
              explanation: 'Rangskik die waardes in volgorde: 8, 12, 23, 45, 52, 67. Die grootste ekstreem = 67.',
            },
          ],
        },

        // ── V3 Moeilik ────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê om data in intervalle te groepeer verloor altyd belangrike inligting. Is hy korrek? Verduidelik.',
          answer: 'Gedeeltelik — groepering maak data makliker om op te som en te visualiseer, maar dit verloor wel sommige individuele besonderhede, aangesien presiese waardes binne elke interval nie gewys word nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die variasiewydte en ekstreme van ʼn datastel te vind en waarom dit nuttig is om data in intervalle te groepeer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn datastel wys wat georganiseer is in ʼn stingel-en-blaar-diagram en gegroepeerde intervalle, met kleinste ekstreem in blou, grootste ekstreem in rooi en variasiewydte in oranje" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — DATA VOORSTEL MET HISTOGRAMME EN GEBROKELYN-GRAFIEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'histograms-broken-line-graphs',
      title: 'Data Voorstel met Histogramme en Gebrokelyn-Grafieke',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Ons teken ʼn verskeidenheid grafieke, insluitend staafgrafieke, dubbelstaafgrafieke, histogramme (met gegewe en eie intervalle), sirkelgrafieke, en nou <strong>gebrokelyn-grafieke</strong>, wat wys hoe data oor tyd verander deur middel van verbindende reguit lynsegmente.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('datapunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verbindende lyne')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('histogramstawe')}</span>` +
        `</div>` +

        // ── Graph types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes grafieke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Histogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Staafgrafiek vir gegroepeerde (aaneenlopende) data. ${or('Stawe moet raak')} — geen gapings tussen hulle nie. Elke staaf verteenwoordig ʼn klasinterval.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gebrokelyn-Grafiek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Datapunte')} word geplot en verbind deur ${gr('reguit lyne')}. Ideaal om te wys hoe data <strong>oor tyd verander</strong>.</p>` +
        `</div>` +

        `</div>` +

        // ── Histogram rules ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir histogramme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('Gelyke intervalle')} — alle klasintervalle moet dieselfde breedte hê sodat die histogram betekenisvol is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Stawe raak')} — daar is geen gapings tussen stawe nie, omdat die data aaneenlopend is (een interval vloei in die volgende).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Frekwensie op die y-as')} — die hoogte van elke staaf wys hoeveel waardes in daardie interval val.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Wanneer om ʼn gebrokelyn-grafiek te gebruik</p>` +
        `<p style="margin:0;color:#166534;">Gebruik ʼn gebrokelyn-grafiek wanneer die data op gereelde tydintervalle gemeet word (maande, jare, ure) en jy ${gr('neigings en veranderinge')} oor daardie tydperk wil wys.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf hoe ʼn gebrokelyn-grafiek maandelikse reënval oor ʼn jaar sou wys.',
          answer: `Elke maand se reënval word geplot as ʼn ${bl('datapunt')}, en die punte word verbind met ${gr('reguit lyne')}, wat toenames en afnames oor tyd wys.`,
          steps: [
            `Elke maand se reënvalwaarde word geplot as ʼn ${bl('datapunt')} op die grafiek, met die maande op die x-as en reënval (in mm) op die y-as.`,
            `Die ${bl('datapunte')} word dan verbind met ${gr('reguit lynsegmente')}, wat ʼn visuele prentjie skep van hoe reënval oor die jaar toeneem en afneem.`,
            `Opwaartse ${gr('verbindende lyne')} dui op stygende reënval, terwyl afwaartse lyne ʼn afname wys — wat dit maklik maak om die natste en droogste maande raak te sien. Sien die diagram hieronder.`,
          ],
        },
        {
          question: 'Lerato skep ʼn histogram vir toetstellings gegroepeer in intervalle van 10. Waarvoor moet sy versigtig wees?',
          answer: `Sy moet verseker dat intervalle gelyk in grootte is en dat ${or('histogramstawe')} mekaar raak (geen gapings nie), aangesien histogramme aaneenlopende datareekse verteenwoordig.`,
          steps: [
            `Sy moet verseker dat alle intervalle <strong>gelyk in grootte</strong> is (elkeen strek presies 10 punte: 0–9, 10–19, 20–29, ens.). Ongelyke intervalle maak die histogram misleidend.`,
            `Die ${or('histogramstawe')} moet <strong>mekaar raak sonder gapings</strong> tussen hulle, omdat toetstellings aaneenlopende data vorm — elke interval vloei direk in die volgende.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Maklik ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Watter tipe grafiek gebruik verbindende reguit lynsegmente om verandering oor tyd te wys?',
          answer: 'gebrokelyn-grafiek',
          checkMode: 'auto',
          correctAnswer: 'gebrokelyn-grafiek',
          correctAnswers: ['gebrokelyn-grafiek', 'gebroke lyn grafiek', 'lyngrafiek'],
          explanation: 'ʼn Gebrokelyn-grafiek plot datapunte en verbind hulle met reguit lynsegmente om te wys hoe waardes oor tyd verander.',
        },

        // ── V5 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Waarom moet histogramstawe mekaar raak sonder gapings?',
          answer: 'Omdat histogramme aaneenlopende data verteenwoordig, waar elke interval direk in die volgende vloei sonder onderbrekings.',
          checkMode: 'self',
        },

        // ── V6 Moeilik ────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato skep ʼn histogram met intervalle van verskillende groottes (sommige intervalle strek 10 punte, ander strek 20 punte). Waarom is dit ʼn probleem?',
          answer: 'Ongelyke intervalgroottes maak die histogram misleidend, aangesien staafhoogtes nie akkuraat die frekwensiedigtheid oor die data sou verteenwoordig nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn histogram met gelyke intervalle en ʼn gebrokelyn-grafiek met datapunte verbind deur reguit lyne te teken" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram benodig: ʼn gebrokelyn-grafiek wat maandelikse reënval oor 12 maande wys, met punte verbind deur reguit lyne" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — DATA KRITIES INTERPRETEER, ONTLEED EN RAPPORTEER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interpreting-analysing-data',
      title: 'Data Krities Interpreteer, Ontleed en Rapporteer',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">Ons lees en interpreteer data krities vanuit verskeie voorstellings (insluitend gebrokelyn-grafieke), ontleed data deur kategorieë, bronne, sentrale neigings, skale, steekproewe/populasies, verspreiding, en fout/vooroordeel te oorweeg. Ons rapporteer bevindinge in kort paragrawe wat gevolgtrekkings, voorspellings en die identifisering van vooroordeel insluit.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vooroordeelfaktore')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('steekproefgrootte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('geldige gevolgtrekkings')}</span>` +
        `</div>` +

        // ── Critical analysis checklist ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kritiese ontledingskontrolelys</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${re('Vooroordeel')} — Is die data-insamelingsmetode regverdig? Kan sekere groepe oor- of onder-verteenwoordig word?</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Steekproefgrootte')} — Is die ${or('steekproef')} groot genoeg en verteenwoordigend van die populasie? ʼn Klein of bevooroordeelde steekproef lei tot onbetroubare gevolgtrekkings.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Misleidende skale')} — Begin die grafiek-as by nul? ʼn Skaal wat nie by 0 begin nie, kan verskille veel groter laat lyk as wat hulle werklik is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Geldige gevolgtrekkings')} — Word die bevindinge deur die data ondersteun? ${gr('Geldige gevolgtrekkings')} is gebaseer op bewyse uit die data, nie aannames nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Sample vs population ─────────────────────────────────────────────
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Steekproef</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kleiner, gekose substel van die populasie. Die ${or('steekproefgrootte')} moet groot genoeg wees om die populasie betroubaar te verteenwoordig.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Populasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die hele groep wat bestudeer word. ${gr('Geldige gevolgtrekkings')} geld vir die populasie — maar slegs as die steekproef dit werklik verteenwoordig.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Bevraagteken altyd die data</p>` +
        `<p style="margin:0;color:#991b1b;">Wanneer jy data interpreteer, vra altyd: Wie het dit ingesamel? Hoe is dit ingesamel? Is die ${or('steekproef')} verteenwoordigend? Kon ${re('vooroordeel')} die resultate beïnvloed het? Slegs dan kan jy ${gr('geldige gevolgtrekkings')} maak.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Opname van 10 vriende wys 90% verkies ʼn sekere versnapering. Waarom kan hierdie gevolgtrekking bevooroordeeld wees?',
          answer: `Die ${or('steekproefgrootte')} is baie klein en nie ewekansig gekies nie, dus is dit nie verteenwoordigend van ʼn groter populasie nie.`,
          steps: [
            `Die ${or('steekproefgrootte')} is baie klein — slegs 10 mense. Dit is onwaarskynlik dat dit die voorkeure van ʼn groot en uiteenlopende populasie verteenwoordig.`,
            `Die steekproef is ook nie ewekansig gekies nie (vriende deel dalk soortgelyke smake weens soortgelyke agtergronde en voorkeure), wat ${re('vooroordeel')} in die data inbring.`,
            `Daarom is die gevolgtrekking dat 90% van mense hierdie versnapering verkies, ${re('bevooroordeeld')} en onbetroubaar — dit verteenwoordig nie ʼn breër populasie nie.`,
          ],
        },
        {
          question: "Thabo se data wys ʼn grafiek met ʼn skaal wat by 50 begin in plaas van 0. Hoe kan dit misleidend wees?",
          answer: `Om die skaal bo 0 te begin kan verskille tussen waardes ${re('oordryf')}, wat veranderinge groter laat lyk as wat hulle werklik is.`,
          steps: [
            `Wanneer ʼn grafiekskaal by 50 begin in plaas van 0, lyk die visuele gaping tussen stawe of punte baie groter as wat dit werklik is.`,
            `Dit is ʼn vorm van ʼn ${re('misleidende skaal')} — klein verskille word oordryf, wat veranderinge dramaties laat lyk terwyl hulle dalk gering is.`,
            `ʼn Kyker wat nie die as noukeurig lees nie, kan verkeerde ${re('bevooroordeelde')} gevolgtrekkings uit so ʼn grafiek maak. Kontroleer altyd waar die as begin voordat jy ʼn grafiek interpreteer.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Opname van 8 mense wys 75% verkies tee bo koffie. Waarom kan dit onbetroubaar wees?',
          answer: 'Die steekproefgrootte van 8 is baie klein, dus verteenwoordig die resultaat dalk nie ʼn groter populasie akkuraat nie.',
          checkMode: 'self',
        },

        // ── V8 Moeilik ────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Thabo se grafiek het ʼn y-as-skaal wat by 80 begin in plaas van 0. Waarom kan dit misleidend wees?",
          answer: 'Om die skaal bo 0 te begin, oordryf klein verskille tussen waardes, wat veranderinge veel groter laat lyk as wat hulle werklik is.',
          checkMode: 'self',
        },

        // ── V9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Onderskei tussen ʼn steekproef en ʼn populasie.',
          answer: 'ʼn Populasie is die hele groep wat bestudeer word, terwyl ʼn steekproef ʼn kleiner, gekose substel van daardie populasie is.',
          checkMode: 'self',
        },

        // ── V10 Moeilik ───────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle ondervra slegs mense wat ʼn gimnasium verlaat oor oefengewoontes. Waarom kan dit vooroordeel inbring?',
          answer: "Mense by ʼn gimnasium is meer geneig om aktief te wees, dus verteenwoordig hierdie steekproef nie die algemene populasie se oefengewoontes regverdig nie.",
          checkMode: 'self',
        },

        // ── V11 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Datastel het ʼn gemiddelde van 50 maar ʼn variasiewydte van 80. Wat vertel dit jou oor die verspreiding van die data?',
          answer: 'Die groot variasiewydte dui daarop dat die data wyd versprei is, met sommige waardes waarskynlik ver van die gemiddelde af.',
          checkMode: 'self',
        },

        // ── V12 Moeilik ───────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê om twee datastelle te vergelyk vereis slegs die vergelyking van hul gemiddeldes. Is hy korrek? Verduidelik.',
          answer: 'Nee — die vergelyking van datastelle behoort ook maatstawwe van verspreiding (soos variasiewydte) en moontlike uitskieters in te sluit, nie net die gemiddelde nie.',
          checkMode: 'self',
        },

        // ── V13 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Gebrokelyn-grafiek wys temperatuur wat gestadig styg en dan skielik daal. Wat kan hierdie patroon veroorsaak?',
          answer: 'ʼn Gestadige styging kon ʼn verwarmingsneiging gedurende die dag wees, met ʼn skielike daling moontlik veroorsaak deur ʼn koufront of skielike weersverandering.',
          checkMode: 'self',
        },

        // ── V14 Moeilik ───────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato vind ʼn uiterste uitskieter in haar datastel (een waarde veel hoër as die res). Hoe kan dit die gemiddelde beïnvloed?',
          answer: 'ʼn Uiterste uitskieter sal die gemiddelde aansienlik hoër trek, aangesien die gemiddelde sensitief is vir alle waardes, anders as die mediaan.',
          checkMode: 'self',
        },

        // ── V15 Moeilik ───────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê ʼn sirkelgrafiek is die beste manier om data te wys wat oor tyd verander. Is hy korrek? Verduidelik.',
          answer: 'Nee — ʼn sirkelgrafiek wys proporsies op ʼn enkele tydstip; ʼn gebrokelyn-grafiek is beter geskik om veranderinge oor tyd te wys.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om data krities uit grafieke te interpreteer, vooroordeel en misleidende skale te identifiseer, en geldige gevolgtrekkings te skryf" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee grafieke langs mekaar wys: een met y-as wat by 0 begin en een wat by 80 begin, wat illustreer hoe misleidende skale verskille kan oordryf" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het datahantering bemeester.' },
    { minScore: 12, message: 'Puik werk! Jy is op koers — gaan enige gemiste vrae deur en probeer weer.' },
    { minScore: 8, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
