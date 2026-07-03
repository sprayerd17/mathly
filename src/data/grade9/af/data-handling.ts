import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (data handling roles) ─────────────────────────────────────
// criteria one / data set one → blue   (#2563eb)
// criteria two / data set two → orange (#ea580c)
// outlier / negative trend    → red    (#dc2626)
// positive trend / conclusion → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Datahantering',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — DATA ORGANISEER VOLGENS VEELVULDIGE KRITERIA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'organising-data-multiple-criteria',
      title: 'Data Organiseer volgens Veelvuldige Kriteria',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons organiseer numeriese data op verskillende maniere om dit op te som, deur <strong>maatstawwe van sentrale neiging</strong> (gemiddelde, mediaan, modus) en <strong>maatstawwe van verspreiding</strong> (variasiewydte, ekstreme, uitskieters) te bepaal, en organiseer data volgens meer as een kriterium gelyktydig (bv. groepering volgens beide ${bl('geslag')} en ${or('ouderdomsgroep')}).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kriterium een')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kriterium twee')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('uitskieter')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Maatstawwe van sentrale neiging</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gemiddelde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die som van al die waardes gedeel deur die aantal waardes — die rekenkundige gemiddelde. Sensitief vir uitskieters.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Mediaan</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die middelste waarde wanneer data in volgorde gerangskik word. Word nie deur ekstreme waardes beïnvloed nie.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Modus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat die meeste voorkom. ʼn Datastel kan meer as een modus hê.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Maatstawwe van verspreiding</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Uitskieter</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Waarde ver van die res van die data af. Dit kan die gemiddelde buite verhouding beïnvloed, maar het min effek op die mediaan.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Variasiewydte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoogste waarde min laagste waarde. Wys hoe versprei die data is.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom veelvuldige kriteria gebruik?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Groepering volgens ${bl('een kriterium')} gee ʼn oorsig, maar groepering volgens ${bl('twee kriteria')} gelyktydig — soos ${bl('geslag')} en ${or('ouderdomsgroep')} — stel jou in staat om patrone binne subgroepe te vind wat ʼn enkele kriterium sou verdoesel.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "ʼn Klas se toetstellings word volgens beide geslag en slaag/druip-status gegroepeer. Waarom kan hierdie dubbelkriterium-organisasie nuttig wees?",
          answer: `Organisering volgens ${bl('twee kriteria')} gelyktydig maak vergelykings binne en tussen groepe moontlik`,
          steps: [
            `Wanneer data slegs volgens ${bl('een kriterium')} gegroepeer word (bv. geslag alleen), sien jy algehele verskille tussen groepe, maar mis patrone daarbinne.`,
            `Organisering volgens ${bl('twee kriteria')} gelyktydig — soos beide ${bl('geslag')} en ${or('slaag/druip-status')} — maak vergelykings binne en tussen groepe moontlik.`,
            `Byvoorbeeld, om slaagsyfers tussen ${bl('seuns')} en ${or('meisies')} apart te vergelyk, kan patrone onthul wat ʼn enkele kriterium mag verdoesel.`,
          ],
        },
        {
          question: 'Sipho het die volgende data: 12, 45, 18, 90, 22, 15. Identifiseer enige moontlike uitskieter en verduidelik waarom.',
          answer: `${re('90')} is ʼn waarskynlike uitskieter — dit is baie hoër as die res van die data`,
          steps: [
            `Rangskik die waardes in volgorde: 12, 15, 18, 22, 45, ${re('90')}.`,
            `Die meeste waardes is tussen 12 en 45 gegroepeer, maar ${re('90')} is baie hoër as die res.`,
            `${re('90')} is ʼn waarskynlike ${re('uitskieter')} wat die gemiddelde buite verhouding kan beïnvloed.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Identifiseer die uitskieter in hierdie datastel: 8, 12, 15, 9, 11, 85.',
          answer: '85',
          checkMode: 'auto',
          correctAnswer: '85',
          explanation: 'Die meeste waardes is tussen 8 en 15 gegroepeer, maar 85 is baie hoër as die res, wat dit ʼn duidelike uitskieter maak.\nAntwoord: 85 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Waarom kan die groepering van data volgens twee kriteria patrone onthul wat ʼn enkele kriterium sou mis?',
          answer: 'Dit maak vergelykings binne en tussen subgroepe moontlik, wat verwantskappe kan onthul wat verborge bly wanneer slegs na een faktor op ʼn slag gekyk word.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho het ʼn datastel met ʼn uiterste uitskieter. Hoe sal die verwydering daarvan waarskynlik die gemiddelde en mediaan verskillend beïnvloed?',
          answer: 'Die verwydering van die uitskieter sal waarskynlik die gemiddelde aansienlik verander (aangesien dit sensitief is vir alle waardes), maar min tot geen effek op die mediaan hê nie (aangesien dit op posisie gebaseer is, nie grootte nie).',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle sê uitskieters moet altyd voor ontleding uit ʼn datastel verwyder word. Is sy korrek? Verduidelik.',
          answer: 'Nie noodwendig nie — uitskieters moet eers ondersoek word, aangesien hulle egte, belangrike inligting kan verteenwoordig eerder as foute; om hulle sonder goeie rede te verwyder, kan die ontleding bevooroordeeld maak.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Lerato het data wat volgens beide ouderdomsgroep en oefenfrekwensie gegroepeer is. Stel een insig voor wat hierdie dubbelkriterium-groepering kan onthul wat enkelkriterium-groepering mag mis.',
          answer: 'Dit kan onthul of oefenfrekwensie spesifiek binne sekere ouderdomsgroepe verskil, eerder as net ʼn algehele gemiddelde oor alle ouderdomme heen.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: "Thabo se datastel is 22, 25, 24, 23, 99, 21. Identifiseer die waarskynlike uitskieter en verduidelik hoe dit sy berekende gemiddelde kan beïnvloed.",
          answer: "99 is die waarskynlike uitskieter, aangesien dit baie hoër is as die ander nou opeengehoopte waardes. Om dit in te sluit sal die gemiddelde aansienlik oordryf in vergelyking met die ware sentrale neiging van die res van die data.",
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik hoe om uitskieters te identifiseer en data volgens veelvuldige kriteria te organiseer om verborge patrone in datastelle te onthul" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram benodig: ʼn tweerigting-tabel wat data volgens twee kriteria gelyktydig groepeer — byvoorbeeld geslag oor rye en slaag/druip-status oor kolomme met tellings in elke sel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — SPREIDINGSDIAGRAMME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scatter-plots',
      title: 'Spreidingsdiagramme',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Spreidingsdiagram wys die verwantskap tussen twee numeriese veranderlikes, met elke ${bl('datapunt')} as ʼn kolletjie geplot op grond van sy twee waardes. Spreidingsdiagramme help ons om neigings te identifiseer — ${gr('positiewe korrelasie')} (albei neem saam toe), ${re('negatiewe korrelasie')} (een neem toe terwyl die ander afneem), of geen korrelasie (geen duidelike patroon nie).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('datapunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('positiewe neiging')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negatiewe neiging')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes korrelasie</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Positiewe korrelasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Soos een veranderlike toeneem, neem die ander ook toe. Punte styg van ${gr('links-onder na regs-bo')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Negatiewe korrelasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Soos een veranderlike toeneem, neem die ander af. Punte val van ${re('links-bo na regs-onder')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Geen korrelasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Punte is ewekansig versprei sonder ʼn duidelike rigting — die twee veranderlikes blyk onverwant te wees.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Spreidingsdiagram lees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke ${bl('datapunt')} verteenwoordig een waarneming. Kyk na die algehele rigting van die ${bl('punte')}: ʼn duidelike ${gr('opwaartse neiging')} dui op positiewe korrelasie; ʼn duidelike ${re('afwaartse neiging')} dui op negatiewe korrelasie; ʼn ewekansige spreiding dui op geen korrelasie nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Spreidingsdiagram wys ure bestudeer teenoor toetstellings, met punte wat oor die algemeen van links-onder na regs-bo styg. Wat dui dit aan?',
          answer: `Dit dui op ʼn ${gr('positiewe korrelasie')} — soos ure bestudeer toeneem, neig toetstellings ook om toe te neem`,
          steps: [
            `Die ${bl('datapunte')} styg van links-onder na regs-bo, wat ʼn opwaartse patroon vorm.`,
            `Dit dui op ʼn ${gr('positiewe korrelasie')} — soos ure bestudeer toeneem, neig toetstellings ook om toe te neem. Sien die diagram hieronder wat hierdie neiging wys.`,
          ],
        },
        {
          question: "Lerato se spreidingsdiagram wys motorouderdom teenoor motorwaarde, met punte wat van links-bo na regs-onder val. Watter korrelasie wys dit?",
          answer: `Dit wys ʼn ${re('negatiewe korrelasie')} — soos motorouderdom toeneem, neig motorwaarde om af te neem`,
          steps: [
            `Die ${bl('datapunte')} val van links-bo na regs-onder, wat ʼn afwaartse patroon vorm.`,
            `Dit wys ʼn ${re('negatiewe korrelasie')} — soos motorouderdom toeneem, neig motorwaarde om af te neem.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Spreidingsdiagram wys punte wat van links-onder na regs-bo styg. Watter tipe korrelasie is dit?',
          answer: 'positief',
          checkMode: 'auto',
          correctAnswer: 'positief',
          correctAnswers: ['positief', 'positiewe korrelasie'],
          explanation: 'Punte wat van links-onder na regs-bo styg, dui op ʼn positiewe korrelasie — soos een veranderlike toeneem, doen die ander dit ook.\nAntwoord: positiewe korrelasie ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Spreidingsdiagram wys punte wat van links-bo na regs-onder val. Watter tipe korrelasie is dit?',
          answer: 'negatief',
          checkMode: 'auto',
          correctAnswer: 'negatief',
          correctAnswers: ['negatief', 'negatiewe korrelasie'],
          explanation: 'Punte wat van links-bo na regs-onder val, dui op ʼn negatiewe korrelasie — soos een veranderlike toeneem, neem die ander af.\nAntwoord: negatiewe korrelasie ✓',
        },
        {
          difficulty: 'Hard',
          question: "Lerato se spreidingsdiagram wys punte wat ewekansig versprei is sonder ʼn duidelike patroon. Wat dui dit aan oor die verwantskap tussen die twee veranderlikes?",
          answer: "Dit dui aan dat daar geen korrelasie tussen die twee veranderlikes is nie — hulle blyk nie op ʼn konsekwente wyse verwant te wees nie.",
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Spreidingsdiagram van roomysverkope teenoor temperatuur wys ʼn positiewe korrelasie. Wat dui dit aan?',
          answer: 'soos temperatuur toeneem, neig roomysverkope ook om toe te neem',
          checkMode: 'auto',
          correctAnswer: 'soos temperatuur toeneem neig roomysverkope ook om toe te neem',
          correctAnswers: [
            'soos temperatuur toeneem neig roomysverkope ook om toe te neem',
            'soos temperatuur toeneem, neig roomysverkope ook om toe te neem',
            'positief',
            'positiewe korrelasie',
            'roomysverkope neem toe soos temperatuur toeneem',
          ],
          explanation: 'ʼn Positiewe korrelasie beteken albei veranderlikes neem saam toe — soos temperatuur styg, neig roomysverkope ook om te styg.\nAntwoord: soos temperatuur toeneem, neig roomysverkope ook om toe te neem ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Identifiseer die tipe korrelasie as ʼn spreidingsdiagram motorspoed teenoor reistyd vir ʼn vaste afstand wys.',
          answer: 'negatief',
          checkMode: 'auto',
          correctAnswer: 'negatief',
          correctAnswers: ['negatief', 'negatiewe korrelasie'],
          explanation: 'Vir ʼn vaste afstand, soos spoed toeneem, neem reistyd af — dit is ʼn negatiewe korrelasie.\nAntwoord: negatiewe korrelasie ✓',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Spreidingsdiagram wys geen duidelike patroon tussen skoengrootte en toetstellings nie. Wat kan afgelei word?',
          answer: 'Daar is geen betekenisvolle korrelasie tussen skoengrootte en toetstellings nie; die twee veranderlikes blyk onverwant te wees.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om spreidingsdiagramme te teken en te interpreteer en positiewe, negatiewe en geen korrelasie uit die patroon van datapunte te identifiseer" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram benodig: twee spreidingsdiagramme langs mekaar — een wat positiewe korrelasie wys (punte wat van links na regs styg) en een wat negatiewe korrelasie wys (punte wat van links na regs val), elk met ʼn duidelike neigingslyn" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — TWEE STELLE DATA VERGELYK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-two-sets-of-data',
      title: 'Twee Stelle Data Vergelyk',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons vergelyk krities twee stelle data wat met dieselfde kwessie verband hou, deur verskille in sentrale neiging en verspreiding te ontleed, en bronne van fout of vooroordeel te identifiseer, en rapporteer dan vergelykings in kort paragrawe met gevolgtrekkings en voorspellings.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('datastel een')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('datastel twee')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vergelykingsgevolgtrekking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wat om te vergelyk</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Sentrale neiging</strong> — Vergelyk die gemiddelde, mediaan of modus van elke datastel. Is die gemiddeldes soortgelyk of verskillend?</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Verspreiding</strong> — Vergelyk die variasiewydte van elke datastel. ʼn Groter variasiewydte beteken meer wisselvalligheid tussen waardes.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Gevolgtrekking')} — Skryf ʼn kort paragraaf wat die ooreenkomste en verskille opsom, en maak waar toepaslik ʼn voorspelling.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dieselfde gemiddelde ≠ dieselfde datastel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Twee datastelle kan dieselfde ${bl('gemiddelde')} hê, maar baie verskillende ${or('variasiewydtes')}. Vergelyk altyd beide sentrale neiging en verspreiding voordat jy ʼn ${gr('gevolgtrekking')} maak.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Klas A se toetstellings het ʼn gemiddelde van 65% met ʼn variasiewydte van 20%. Klas B se tellings het ʼn gemiddelde van 65% met ʼn variasiewydte van 50%. Vergelyk hulle.",
          answer: `Beide klasse het dieselfde ${bl('gemiddelde')} (65%), maar ${or('Klas B')} het veel meer wisselvallige individuele prestasie`,
          steps: [
            `Vergelyk sentrale neiging: ${bl('Klas A')} se gemiddelde = 65%, ${or('Klas B')} se gemiddelde = 65%. Beide klasse het dieselfde gemiddelde prestasie (gemiddelde).`,
            `Vergelyk verspreiding: ${bl('Klas A')} se variasiewydte = 20%, ${or('Klas B')} se variasiewydte = 50%. ${or('Klas B')} se tellings is veel meer versprei (groter variasiewydte).`,
            `${gr('Gevolgtrekking:')} Beide klasse het dieselfde gemiddelde prestasie (gemiddelde), maar ${or('Klas B')} se tellings is veel meer versprei (groter variasiewydte), wat op meer variasie in individuele prestasie binne ${or('Klas B')} dui.`,
          ],
        },
        {
          question: "Thabo vergelyk reënvaldata van twee stede oor ʼn jaar, en merk op dat Stad A konsekwent laer waardes met minder variasie het, terwyl Stad B hoër maar meer wisselvallige waardes het. Wat kan dit aandui?",
          answer: `${bl('Stad A')} het waarskynlik ʼn meer stabiele, voorspelbare klimaat, terwyl ${or('Stad B')} moontlik meer uiterste of seisoenale weersvariasie ervaar`,
          steps: [
            `${bl('Stad A')} het konsekwent laer waardes met minder variasie — klein variasiewydte, stabiele en voorspelbare data.`,
            `${or('Stad B')} het hoër maar meer wisselvallige waardes — groot variasiewydte, minder voorspelbare data.`,
            `${gr('Gevolgtrekking:')} Stad A het waarskynlik ʼn meer stabiele, voorspelbare klimaat, terwyl Stad B moontlik meer uiterste of seisoenale weersvariasie ervaar.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Medium',
          question: "Klas A het ʼn gemiddelde toetstelling van 70% met ʼn variasiewydte van 15%. Klas B het ʼn gemiddelde van 70% met ʼn variasiewydte van 40%. Watter klas het meer wisselvallige prestasie?",
          answer: 'Klas B',
          checkMode: 'auto',
          correctAnswer: 'Klas B',
          correctAnswers: ['Klas B', 'klas b', 'B', 'b'],
          explanation: 'Beide klasse het dieselfde gemiddelde (70%), maar Klas B het ʼn groter variasiewydte (40% teenoor 15%), wat op meer wisselvallige individuele prestasie dui.\nAntwoord: Klas B ✓',
        },
        {
          difficulty: 'Hard',
          question: 'Thabo vergelyk twee datastelle met dieselfde gemiddelde maar verskillende variasiewydtes. Waarom is die variasiewydte alleen nie genoeg om ʼn datastel ten volle te beskryf nie?',
          answer: 'Variasiewydte wys slegs die verspreiding tussen ekstreme, nie hoe die res van die data versprei is nie; twee datastelle kan dieselfde variasiewydte hê, maar baie verskillende algehele patrone.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho vergelyk reënval in twee dorpe: Dorp A (gemiddelde = 50 mm, variasiewydte = 10 mm) en Dorp B (gemiddelde = 50 mm, variasiewydte = 60 mm). Skryf ʼn kort vergelykingsgevolgtrekking.',
          answer: 'Beide dorpe het dieselfde gemiddelde reënval, maar Dorp B ervaar veel meer wisselvallige reënvalpatrone as die konsekwent stabiele reënval in Dorp A.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om twee datastelle te vergelyk met behulp van gemiddelde en variasiewydte en hoe om ʼn kort vergelykingsparagraaf met ʼn gevolgtrekking te skryf" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram benodig: twee kant-langs-kant staafgrafieke wat twee verskillende datastelle met dieselfde gemiddelde maar verskillende variasiewydtes verteenwoordig, vir visuele vergelyking van verspreiding" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het datahantering bemeester.' },
    { minScore: 12, message: 'Puik werk!' },
    { minScore: 8, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
