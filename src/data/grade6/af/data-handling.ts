import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// blue   (#2563eb) → categories / first data set / degrees / mean
// orange (#ea580c) → frequency / percentages / mode
// green  (#16a34a) → totals / axis labels / median
// red    (#dc2626) → second data set
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Datahantering',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Data Insamel en Organiseer',
      icon: '📋',
      explanation:
        `<p style="margin-bottom:16px;">Ons versamel data deur <strong>opnames</strong>, <strong>waarnemings</strong> of <strong>eksperimente</strong> te doen. Rou data word in ${bl('frekwensietabelle')} georganiseer om dit makliker te maak om te lees. ʼn Frekwensietabel wys elke ${bl('kategorie')} en hoeveel keer dit voorkom — hierdie telling word die ${or('frekwensie')} genoem.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kategorieë')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('frekwensie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('totale')}</span>` +
        `</div>` +

        // ── Frequency table structure ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dele van ʼn frekwensietabel</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kategoriekolom</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Lys elke groep of opsie wat getel word — byvoorbeeld, verskillende vakke of kleure.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Frekwensiekolom</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wys hoeveel keer elke kategorie voorkom — dit is die telling vir daardie groep.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Totaalry</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die som van al die frekwensies — dit moet ooreenstem met die totale aantal items wat getel is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd jou totaal</p>` +
        `<p style="margin:0;color:#1e3a8a;">Nadat jy ʼn frekwensietabel voltooi het, tel al die frekwensies bymekaar op. Die ${gr('totaal')} moet gelyk wees aan die aantal items waarmee jy begin het — dit is ʼn ingeboude kontrole dat jy niks gemis of dubbel getel het nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho doen ʼn opname onder 20 klasmaats oor hul gunstelingvakke: Wiskunde — 7, Engels — 5, Wetenskap — 8. Organiseer hierdie data in ʼn frekwensietabel.',
          answer: `Frekwensietabel: ${bl('Wiskunde')} = ${or('7')}, ${bl('Engels')} = ${or('5')}, ${bl('Wetenskap')} = ${or('8')}. ${gr('Totaal = 20')} ✓`,
          steps: [
            `Stel ʼn tabel op met twee kolomme: ${bl('Vak')} en ${or('Frekwensie')}.`,
            `Lys elke ${bl('kategorie')}: ${bl('Wiskunde')}, ${bl('Engels')}, ${bl('Wetenskap')}.`,
            `Skryf die ${or('frekwensie')} langs elke kategorie neer: ${bl('Wiskunde')} = ${or('7')}, ${bl('Engels')} = ${or('5')}, ${bl('Wetenskap')} = ${or('8')}.`,
            `Voeg ʼn ${gr('Totaal')}-ry onderaan by: ${gr('7 + 5 + 8 = 20')}. Dit stem ooreen met die 20 klasmaats wat opgeneem is. ✓`,
          ],
        },
        {
          question: 'Lerato tel die kleure van motors wat verbygaan: rooi — 4, blou — 9, wit — 7. Watter kleur was die algemeenste?',
          answer: `${bl('Blou')} was die algemeenste met ʼn ${or('frekwensie van 9')}`,
          steps: [
            `Organiseer in ʼn frekwensietabel: ${bl('Rooi')} = ${or('4')}, ${bl('Blou')} = ${or('9')}, ${bl('Wit')} = ${or('7')}.`,
            `Vergelyk die ${or('frekwensies')}: ${or('4')}, ${or('9')}, ${or('7')}.`,
            `${bl('Blou')} het die hoogste ${or('frekwensie')} met ${or('9')} — dit het die meeste voorgekom.`,
            `<strong>Antwoord:</strong> ${bl('Blou')} was die algemeenste motorkleur. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Voltooide frekwensietabel met kleurgekodeerde kolomme — kategorieë in blou, frekwensiewaardes in oranje, totaalry in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om data deur ʼn opname te versamel en dit in ʼn frekwensietabel met kategorieë en frekwensies te organiseer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BAR GRAPHS AND DOUBLE BAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bar-graphs-double-bar-graphs',
      title: 'Staafgrafieke en Dubbelstaafgrafieke',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Staafgrafiek</strong> stel data voor met stawe waar die hoogte van elke staaf die ${bl('frekwensie')} wys. ʼn <strong>Dubbelstaafgrafiek</strong> vergelyk twee datastelle langs mekaar vir elke ${bl('kategorie')}, met ${bl('een kleur')} vir die eerste datastel en ${re('ʼn ander kleur')} vir die tweede. Albei tipes moet ʼn titel, ${gr('geëtiketteerde asse')} en ʼn duidelike sleutel hê wanneer twee datastelle gewys word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eerste datastel')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('tweede datastel')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('asetikette')}</span>` +
        `</div>` +

        // ── Features of a bar graph ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleuteleienskappe van staafgrafieke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Titel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke grafiek moet ʼn titel hê wat beskryf wat die data wys.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Geëtiketteerde asse</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die horisontale as wys ${gr('kategorieë')}; die vertikale as wys ${gr('frekwensie')}. Albei moet geëtiketteer wees.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Sleutel (dubbelstaafgrafiek)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer twee datastelle vergelyk word, wys ʼn sleutel watter kleur ${bl('elke stel')} verteenwoordig.` +
        `</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">ʼn Dubbelstaafgrafiek lees</p>` +
        `<p style="margin:0;color:#14532d;">Vergelyk vir elke ${bl('kategorie')} die hoogte van die ${bl('eerste staaf')} met die ${re('tweede staaf')}. ʼn Langer ${re('tweede staaf')} beteken die waarde het toegeneem; ʼn korter ${re('tweede staaf')} beteken dit het afgeneem.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Dubbelstaafgrafiek vergelyk Kwartaal 1- en Kwartaal 2-toetstellings vir 4 leerders. Hoe sou jy lees wie van Kwartaal 1 na Kwartaal 2 verbeter het?',
          answer: `Enige leerder wie se ${re('Kwartaal 2-staaf')} langer is as hul ${bl('Kwartaal 1-staaf')} het verbetering getoon`,
          steps: [
            `Identifiseer die twee datastelle op die sleutel: ${bl('Kwartaal 1')} (eerste staaf) en ${re('Kwartaal 2')} (tweede staaf).`,
            `Vergelyk vir elke leerder (${gr('kategorie')}) die hoogte van hul ${bl('Kwartaal 1-staaf')} met hul ${re('Kwartaal 2-staaf')}.`,
            `ʼn Langer ${re('Kwartaal 2-staaf')} beteken daardie leerder het hoër in Kwartaal 2 behaal — hulle het verbeter.`,
            `ʼn Korter ${re('Kwartaal 2-staaf')} beteken die leerder het laer in Kwartaal 2 behaal — hul punt het gedaal.`,
          ],
        },
        {
          question: 'ʼn Staafgrafiek wys daaglikse verkope: Maandag — 12, Dinsdag — 18, Woensdag — 9. Watter dag het die meeste verkope gehad en wat was die totaal?',
          answer: `${bl('Dinsdag')} het die meeste verkope gehad (${or('18')}). ${gr('Totaal = 39')}`,
          steps: [
            `Lees elke staaf se hoogte: ${bl('Maandag')} = ${or('12')}, ${bl('Dinsdag')} = ${or('18')}, ${bl('Woensdag')} = ${or('9')}.`,
            `Vergelyk die hoogtes: ${or('18')} is die langste staaf, dus het ${bl('Dinsdag')} die meeste verkope gehad.`,
            `Tel al die waardes op vir die ${gr('totaal')}: ${gr('12 + 18 + 9 = 39')}.`,
            `<strong>Antwoord:</strong> ${bl('Dinsdag')} het die meeste verkope gehad met ${or('18')} items. Die ${gr('totaal')} oor al drie dae was ${gr('39')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Dubbelstaafgrafiek wat twee datastelle langs mekaar vergelyk, met die eerste datastel in blou en die tweede in rooi, met groen geëtiketteerde asse en ʼn duidelike sleutel" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik hoe om staafgrafieke en dubbelstaafgrafieke te lees en te teken, insluitend hoe om asse te etiketteer en ʼn sleutel by te voeg" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PIE CHARTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pie-charts',
      title: 'Sirkelgrafieke',
      icon: '🥧',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Sirkelgrafiek</strong> wys data as skywe van ʼn sirkel, waar elke skyf ʼn deel van die geheel verteenwoordig. Die hele sirkel verteenwoordig ${bl('360 grade')} of <strong>100%</strong> van die data. Groter skywe verteenwoordig groter dele van die data. Elke skyf kan beskryf word met ${or('persentasies')} of ${bl('grade')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;"><span style="color:#16a34a;font-weight:700">· · ·</span> skywe (verskillende kleure vir elke kategorie)</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasies')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('grade')}</span>` +
        `</div>` +

        // ── Key facts ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakeling tussen grade en persentasies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Grade → Persentasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel ${bl('grade')} deur 360 en vermenigvuldig dan met 100.<br><strong>Formule:</strong> ${bl('grade')} ÷ 360 × 100 = ${or('%')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Persentasie → Grade</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel ${or('persentasie')} deur 100 en vermenigvuldig dan met 360.<br><strong>Formule:</strong> ${or('%')} ÷ 100 × 360 = ${bl('grade')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Persentasie → Aantal items</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Vermenigvuldig die ${or('persentasie')} (as ʼn desimaal) met die totaal.<br><strong>Formule:</strong> ${or('%')} ÷ 100 × totaal = telling</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Alle skywe moet by die geheel optel</p>` +
        `<p style="margin:0;color:#9a3412;">Alle ${or('persentasies')} moet optel tot <strong>100%</strong> en alle ${bl('grade')} moet optel tot <strong>360°</strong>. Gebruik dit as ʼn kontrole nadat jy enige sirkelgrafiek gelees het.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sirkelgrafiek wys dat 50% van leerders skool toe stap, 30% ry bus en 20% word gery. As daar 200 leerders is, hoeveel stap?',
          answer: `${or('50%')} van 200 = ${gr('100 leerders')} stap`,
          steps: [
            `Identifiseer die ${or('persentasie')} vir stap: ${or('50%')}.`,
            `Kontroleer die totaal: ${or('50% + 30% + 20% = 100%')} ✓ — al die skywe maak saam die geheel op.`,
            `Bereken: ${or('50%')} van 200 = ${or('50')} ÷ 100 × 200 = ${gr('100')}.`,
            `<strong>Antwoord:</strong> ${gr('100 leerders')} stap skool toe. ✓`,
          ],
        },
        {
          question: "Amahle se sirkelgrafiek wys ʼn skyf van 90 grade. Watter persentasie van die data verteenwoordig hierdie skyf?",
          answer: `ʼn Skyf van ${bl('90°')} verteenwoordig ${or('25%')} van die data`,
          steps: [
            `Gebruik die formule: ${bl('grade')} ÷ 360 × 100 = ${or('persentasie')}.`,
            `Vervang: ${bl('90')} ÷ 360 × 100.`,
            `Bereken: 90 ÷ 360 = 0.25 &nbsp;→&nbsp; 0.25 × 100 = ${or('25')}.`,
            `<strong>Antwoord:</strong> Die skyf verteenwoordig ${or('25%')} van die data. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Sirkelgrafiek verdeel in drie skywe elk ʼn ander kleur, met persentasie-etikette in oranje en grademetings in blou" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn sirkelgrafiek te lees deur tussen grade en persentasies om te skakel en te bereken hoeveel items elke skyf verteenwoordig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MEAN, MEDIAN AND MODE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mean-median-mode',
      title: 'Gemiddelde, Mediaan en Modus',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Hierdie drie maatstawwe beskryf die <strong>middelpunt</strong> van ʼn datastel. Die ${bl('gemiddelde')} is die gemiddeld — tel al die waardes op en deel deur hoeveel daar is. Die ${gr('mediaan')} is die middelste waarde wanneer data van kleinste na grootste gerangskik word. Die ${or('modus')} is die waarde wat die meeste voorkom.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemiddelde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('mediaan')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('modus')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gemiddelde (gemiddeld)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel al die waardes bymekaar op, en deel dan deur hoeveel waardes daar is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Mediaan (middelste)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Rangskik die data van kleinste na grootste, en vind dan die middelste waarde. By ʼn ewe aantal waardes, bereken die gemiddeld van die twee middelste waardes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Modus (mees algemeen)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat die meeste in die data voorkom. Daar kan meer as een modus wees, of glad geen modus nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Rangskik altyd eers die data</p>` +
        `<p style="margin:0;color:#1e3a8a;">Voordat jy die ${gr('mediaan')} of ${or('modus')} vind, skryf die waardes in volgorde van kleinste na grootste neer. Dit maak dit baie makliker om die middelste waarde en die mees voorkomende waarde raak te sien.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die gemiddelde van 4, 8, 6, 10, 2.',
          answer: `${bl('Gemiddelde')} = ${bl('6')}`,
          steps: [
            `Tel al die waardes op: 4 + 8 + 6 + 10 + 2 = ${bl('30')}.`,
            `Tel hoeveel waardes daar is: <strong>5</strong> waardes.`,
            `${bl('Gemiddelde')} = totaal ÷ telling = ${bl('30')} ÷ 5 = ${bl('6')}.`,
            `<strong>Antwoord:</strong> Die ${bl('gemiddelde')} is ${bl('6')}. ✓`,
          ],
        },
        {
          question: 'Vind die mediaan en modus van 3, 7, 3, 9, 5, 3, 7.',
          answer: `${gr('Mediaan')} = ${gr('5')} &nbsp;·&nbsp; ${or('Modus')} = ${or('3')}`,
          steps: [
            `Rangskik die waardes van kleinste na grootste: ${gr('3, 3, 3, 5, 7, 7, 9')}.`,
            `Daar is <strong>7</strong> waardes, dus is die middelste waarde die 4de een.`,
            `Tel tot by die 4de waarde: 3, 3, 3, <strong style="color:#16a34a;">5</strong>, 7, 7, 9. Die ${gr('mediaan')} is ${gr('5')}.`,
            `Identifiseer die mees voorkomende waarde: ${or('3')} kom <strong>3 keer</strong> voor — meer as enige ander waarde. Die ${or('modus')} is ${or('3')}.`,
            `<strong>Antwoord:</strong> ${gr('Mediaan')} = ${gr('5')}, ${or('Modus')} = ${or('3')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="ʼn Getallelyn wat ʼn gerangskikte datastel wys met die mediaan uitgelig in groen, die gemiddelde gemerk in blou, en die modus-waarde omkring in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die gemiddelde te bereken deur op te tel en te deel, die mediaan te vind deur waardes te rangskik en die middelste te vind, en die modus te identifiseer" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! ʼn Volpunt-telling — jy het Datahantering vir Graad 6 heeltemal bemeester. Hou so aan!' },
    { minScore: 12, message: 'Uitstekende werk! Jy het ʼn baie goeie begrip van datahantering. Gaan enige gemiste dele deur en jy sal dit perfek kry.' },
    { minScore: 8, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 4, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling deur, en probeer dan weer.' },
  ],
}

export const topicPractice = [
  // ── Q1 Easy — purpose of a frequency table ───────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Waarvoor word ʼn frekwensietabel gebruik?',
    answer: 'Dit organiseer rou data deur te wys hoeveel keer elke kategorie voorkom, wat dit makliker maak om te lees en te ontleed.',
    checkMode: 'self',
  },

  // ── Q2 Medium — reading a frequency table total ───────────────────────────
  {
    difficulty: 'Medium',
    question: 'Sipho doen ʼn opname onder 30 leerders oor hul gunstelingsport — sokker: 14, netbal: 10, swem: 6. Hoeveel leerders het sokker of netbal gekies?',
    answer: '24',
    checkMode: 'auto',
    correctAnswer: '24',
    explanation: 'Sokker + netbal: 14 + 10 = 24 leerders ✓\nKontroleer: 14 + 10 + 6 = 30 — die totaal stem ooreen met die aantal opgeneem.',
  },

  // ── Q3 Hard — identifying an error in a frequency table ───────────────────
  {
    difficulty: 'Hard',
    question: 'Lerato versamel data van 25 mense, maar wanneer sy al die kategorieë in haar frekwensietabel optel, is die totaal net 23. Wat kan verkeerd wees?',
    answer: 'Sy het dalk 2 response gemis om aan te teken of ʼn telfout gemaak — die totaal moet gelyk wees aan die aantal opgeneem.',
    checkMode: 'self',
  },

  // ── Q4 Easy — required features of a bar graph ────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Wat moet elke staafgrafiek hê?',
    answer: 'ʼn Titel, geëtiketteerde asse en ʼn konstante skaal.',
    checkMode: 'self',
  },

  // ── Q5 Medium — reading a double bar graph ────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'ʼn Dubbelstaafgrafiek vergelyk seuns en dogters se sportkeuses. Sokker: seuns 12, dogters 5. Netbal: seuns 3, dogters 14. Watter sport verkies dogters meer?',
    answer: 'netbal',
    checkMode: 'auto',
    correctAnswer: 'netbal',
    correctAnswers: ['netbal', 'Netbal'],
    explanation: 'Vir dogters: Sokker = 5, Netbal = 14. Aangesien 14 > 5, verkies dogters netbal. ✓',
  },

  // ── Q6 Hard — bar graph totals and minimum ────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'ʼn Staafgrafiek wys maandelikse reënval — Januarie: 30 mm, Februarie: 45 mm, Maart: 20 mm.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'a) Vind die totale reënval oor al drie maande.',
        correctAnswer: '95mm',
        correctAnswers: ['95mm', '95 mm', '95'],
        explanation: 'Totale reënval: 30 + 45 + 20 = 95 mm ✓',
      },
      {
        label: 'b) Watter maand het die minste reën gehad?',
        correctAnswer: 'Maart',
        correctAnswers: ['Maart', 'maart'],
        explanation: 'Vergelyk: Januarie = 30 mm, Februarie = 45 mm, Maart = 20 mm.\nMaart het die minste reën gehad met 20 mm. ✓',
      },
    ],
  },

  // ── Q7 Easy — percentage of voters from pie chart ────────────────────────
  {
    difficulty: 'Easy',
    question: 'ʼn Sirkelgrafiek wys dat 25% van stemme na Party A gegaan het. As daar altesaam 80 stemgeregtigdes is, hoeveel het vir Party A gestem?',
    answer: '20',
    checkMode: 'auto',
    correctAnswer: '20',
    explanation: '25% van 80 = 25 ÷ 100 × 80 = 20 stemme ✓',
  },

  // ── Q8 Medium — converting degrees to percentage ──────────────────────────
  {
    difficulty: 'Medium',
    question: 'ʼn Sirkelgrafiekskyf beslaan 180 grade. Watter persentasie van die data verteenwoordig hierdie skyf?',
    answer: '50%',
    checkMode: 'auto',
    correctAnswer: '50%',
    correctAnswers: ['50%', '50'],
    explanation: 'Grade ÷ 360 × 100 = %\n180 ÷ 360 × 100 = 0.5 × 100 = 50% ✓\nʼn Skyf van 180° is presies die helfte van die sirkel.',
  },

  // ── Q9 Hard — calculating number of items from pie chart ─────────────────
  {
    difficulty: 'Hard',
    question: "Thabo se sirkelgrafiek wys: Sport — 40%, Lees — 35%, Speletjies — 25%. In ʼn klas van 40 leerders, hoeveel verkies speletjies?",
    answer: '10',
    checkMode: 'auto',
    correctAnswer: '10',
    explanation: '25% van 40 = 25 ÷ 100 × 40 = 10 leerders verkies speletjies. ✓\nKontroleer: 40% van 40 = 16 (sport) + 35% van 40 = 14 (lees) + 25% van 40 = 10 (speletjies) = 40 ✓',
  },

  // ── Q10 Easy — find the mean ──────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vind die gemiddelde van 5, 9, 7, 3, 6.',
    answer: '6',
    checkMode: 'auto',
    correctAnswer: '6',
    explanation: 'Tel al die waardes op: 5 + 9 + 7 + 3 + 6 = 30.\nTel: 5 waardes.\nGemiddelde = 30 ÷ 5 = 6 ✓',
  },

  // ── Q11 Easy — find the median ────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vind die mediaan van 8, 3, 12, 5, 9.',
    answer: '8',
    checkMode: 'auto',
    correctAnswer: '8',
    explanation: 'Rangskik die waardes: 3, 5, 8, 9, 12.\nDaar is 5 waardes, dus is die middelste (3de) waarde die mediaan.\nMediaan = 8 ✓',
  },

  // ── Q12 Medium — find the mode ────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vind die modus van 4, 7, 4, 9, 4, 2.',
    answer: '4',
    checkMode: 'auto',
    correctAnswer: '4',
    explanation: 'Tel hoeveel keer elke waarde voorkom:\n4 kom 3 keer voor, 7 kom 1 keer voor, 9 kom 1 keer voor, 2 kom 1 keer voor.\n4 kom die meeste voor — modus = 4 ✓',
  },

  // ── Q13 Hard — mean and median of a data set ─────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Amahle het die volgende toetstellings: 60, 75, 80, 55, 70, 90, 50.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'a) Vind die gemiddelde (rond af tot 2 desimale plekke).',
        correctAnswer: '68.57',
        correctAnswers: ['68.57', '68.571'],
        explanation: 'Tel al die tellings op: 60 + 75 + 80 + 55 + 70 + 90 + 50 = 480.\nTel: 7 tellings.\nGemiddelde = 480 ÷ 7 = 68.571... ≈ 68.57 ✓',
      },
      {
        label: 'b) Vind die mediaan.',
        correctAnswer: '70',
        explanation: 'Rangskik die tellings: 50, 55, 60, 70, 75, 80, 90.\nDaar is 7 waardes, dus is die middelste (4de) waarde die mediaan.\nMediaan = 70 ✓',
      },
    ],
  },

  // ── Q14 Medium — find the mean of ages ───────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vind die gemiddelde van hierdie ouderdomme: 11, 12, 12, 13, 11, 12. Rond jou antwoord af tot 2 desimale plekke.',
    answer: '11.83',
    checkMode: 'auto',
    correctAnswer: '11.83',
    correctAnswers: ['11.83', '11.833'],
    explanation: 'Tel al die ouderdomme op: 11 + 12 + 12 + 13 + 11 + 12 = 71.\nTel: 6 waardes.\nGemiddelde = 71 ÷ 6 = 11.833... ≈ 11.83 ✓',
  },

  // ── Q15 Hard — mode can have more than one value ─────────────────────────
  {
    difficulty: 'Hard',
    question: 'Sipho sê die modus van ʼn datastel kan meer as een waarde hê. Is hy korrek? Verduidelik jou antwoord.',
    answer: 'Ja — as twee of meer waardes met dieselfde hoogste frekwensie voorkom, het die datastel meer as een modus.',
    checkMode: 'self',
  },
]

export const resultsConfig = {
  totalMarks: 15,
  messages: [
    { minScore: 15, message: 'Uitstekend! Jy het datahantering bemeester.' },
    { minScore: 12, message: 'Puik werk!' },
    { minScore: 8, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
