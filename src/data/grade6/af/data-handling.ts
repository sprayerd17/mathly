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
            `Bereken: 90 ÷ 360 = 0,25 &nbsp;→&nbsp; 0,25 × 100 = ${or('25')}.`,
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
      title: 'Modus en Mediaan (Met ʼn Blik op Gemiddelde)',
      icon: '📐',
      explanation:
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:16px;padding:12px 16px;background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;">` +
        `<span style="font-size:18px;line-height:1;">🔭</span>` +
        `<p style="margin:0;font-size:14px;color:#6b21a8;"><strong>CAPS Graad 6-fokus:</strong> die ${gr('mediaan')} (die middelste waarde sodra data gerangskik is) en die ${bl('modus')} (die waarde wat die meeste voorkom) is die twee maatstawwe van sentrale neiging wat in Graad 6 vereis word, wat op modus alleen uit Graad 5 voortbou. Die ${or('gemiddelde')} word hieronder as verryking ingesluit, aangesien dit ʼn natuurlike volgende stap is, maar eers later formeel vereis word.</p>` +
        `</div>` +
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Data insamel en organiseer (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Veearts doen ʼn opname onder 32 troeteldiereienaars oor watter troeteldier hulle aanhou: Hond — 10, Kat — 8, Vis — 6, Voël — 8. Organiseer dit in ʼn frekwensietabel, en skryf dan die totaal neer.', answer: 'Hond = 10, Kat = 8, Vis = 6, Voël = 8. Totaal = 32', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', 'hond10kat8vis6voel8totaal32'], explanation: 'Lys elke kategorie met sy frekwensie: Hond = 10, Kat = 8, Vis = 6, Voël = 8.\nTel die frekwensies op vir die totaal: 10 + 8 + 6 + 8 = 32, wat ooreenstem met die 32 troeteldiereienaars wat opgeneem is ✓' },
        { difficulty: 'Easy', question: 'Gebruik die troeteldier-frekwensietabel hierbo (Hond — 10, Kat — 8, Vis — 6, Voël — 8). Hoeveel mense hou ʼn hond of ʼn vis aan?', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: 'Hond + Vis = 10 + 6 = 16 mense ✓' },
        { difficulty: 'Easy', question: 'Karabo sê sy het 27 klasmaats oor hul gunsteling-roomysgeur uitgevra, en haar frekwensietabel wys: Sjokolade — 8, Vanielje — 7, Aarbei — 6, Kruisement — 5. Is haar tabel korrek? Verduidelik.', answer: 'Nee — die frekwensies tel op tot 8 + 7 + 6 + 5 = 26, nie 27 nie. Haar tabel het ʼn fout — sy het waarskynlik 1 respons gemis om aan te teken.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Naledi sê dat sodra sy ʼn frekwensietabel opgestel het, sy nie meer die oorspronklike rou opname-antwoorde nodig het nie. Is sy korrek? Verduidelik jou redenasie.', answer: 'Oor die algemeen ja, vir die meeste doeleindes — ʼn korrek opgestelde frekwensietabel som reeds op hoeveel keer elke kategorie voorgekom het, dus kan dit die meeste vrae beantwoord wat die rou data ook kon beantwoord. Dit is egter steeds nuttig om die rou data te behou ingeval ʼn fout later in die tabel opgespoor word en dit nagegaan of reggestel moet word.', checkMode: 'self' },

        // Blok 2 — Staafgrafieke en dubbelstaafgrafieke (4-8, Maklik-Medium) — DIAGRAM-GEMERK
        { difficulty: 'Easy', question: 'ʼn Staafgrafiek wys roomysstalletjie-verkope van Maandag tot Vrydag: Maandag — 16, Dinsdag — 24, Woensdag — 11, Donderdag — 19, Vrydag — 28. Watter dag het die hoogste verkope gehad, en watter die laagste?', answer: 'Hoogste: Vrydag (28). Laagste: Woensdag (11)', checkMode: 'auto', correctAnswer: 'Vrydag, Woensdag', correctAnswers: ['Vrydag, Woensdag', 'Vrydag en Woensdag', 'vrydag,woensdag'], explanation: 'Vergelyk al vyf stawe: 16, 24, 11, 19, 28.\nDie langste staaf is Vrydag met 28 — die hoogste.\nDie kortste staaf is Woensdag met 11 — die laagste ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Roomysstalletjie-verkope</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="136.3" x2="210" y2="136.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="117.6" x2="210" y2="117.6" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">15</text><line x1="34" y1="98.9" x2="210" y2="98.9" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="80.1" x2="210" y2="80.1" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">25</text><line x1="34" y1="61.4" x2="210" y2="61.4" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="42.7" x2="210" y2="42.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">35</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="95.1" width="25.6" height="59.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="91.1" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Ma</text><rect x="75.6" y="65.2" width="25.6" height="89.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="61.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Di</text><rect x="109.2" y="113.8" width="25.6" height="41.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="109.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">11</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wo</text><rect x="142.8" y="83.9" width="25.6" height="71.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="79.9" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">19</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Do</text><rect x="176.4" y="50.2" width="25.6" height="104.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="46.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">28</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Vr</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde roomysstalletjie-verkope — Maandag 16, Dinsdag 24, Woensdag 11, Donderdag 19, Vrydag 28 — vind die totale verkope vir die hele week en die verskil tussen die besigste en stilste dag.', answer: 'Totaal = 98, Verskil = 17', checkMode: 'auto', correctAnswer: '98,17', correctAnswers: ['98,17', '98, 17'], explanation: 'Totaal: 16 + 24 + 11 + 19 + 28 = 98.\nBesigste dag = 28 (Vrydag), stilste dag = 11 (Woensdag).\nVerskil: 28 − 11 = 17 ✓' },
        { difficulty: 'Medium', question: 'ʼn Dubbelstaafgrafiek vergelyk die aantal boeke wat seuns en dogters oor 4 weke gelees het: Week 1 — seuns 5, dogters 8. Week 2 — seuns 7, dogters 6. Week 3 — seuns 6, dogters 10. Week 4 — seuns 9, dogters 7. In watter week het dogters die meeste meer boeke as seuns gelees, en met hoeveel meer?', answer: 'Week 3, met 4 meer', checkMode: 'auto', correctAnswer: 'Week 3, 4', correctAnswers: ['Week 3, 4', 'week3,4', 'Week 3 met 4'], explanation: 'Vergelyk dogters minus seuns vir elke week: Week 1: 8 − 5 = 3. Week 2: 6 − 7 = −1. Week 3: 10 − 6 = 4. Week 4: 7 − 9 = −2.\nDie grootste dogters-bo-seuns gaping is Week 3, met 4 meer boeke ✓' },
        { difficulty: 'Medium', question: 'ʼn Staafgrafiek teken die aantal besoekers aan ʼn biblioteek elke dag van ʼn werksweek aan: Maandag — 40, Dinsdag — 55, Woensdag — 38, Donderdag — 62, Vrydag — 45. Vind die totale aantal besoekers vir die week.', answer: '240', checkMode: 'auto', correctAnswer: '240', explanation: '40 + 55 + 38 + 62 + 45 = 240 besoekers ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Biblioteekbesoekers Hierdie Week</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="138.6" x2="34" y2="138.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="141.6" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="138.6" x2="210" y2="138.6" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="122.3" x2="34" y2="122.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="125.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="122.3" x2="210" y2="122.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="105.9" x2="34" y2="105.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="108.9" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="105.9" x2="210" y2="105.9" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">40</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="73.1" x2="34" y2="73.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="76.1" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">50</text><line x1="34" y1="73.1" x2="210" y2="73.1" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="56.8" x2="34" y2="56.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="59.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">60</text><line x1="34" y1="56.8" x2="210" y2="56.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="40.4" x2="34" y2="40.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="43.4" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">70</text><line x1="34" y1="40.4" x2="210" y2="40.4" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">80</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="89.5" width="25.6" height="65.5" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="85.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Ma</text><rect x="75.6" y="64.9" width="25.6" height="90.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="60.9" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">55</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Di</text><rect x="109.2" y="92.8" width="25.6" height="62.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="88.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">38</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wo</text><rect x="142.8" y="53.5" width="25.6" height="101.5" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="49.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">62</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Do</text><rect x="176.4" y="81.3" width="25.6" height="73.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="77.3" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">45</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Vr</text></svg>' },
        { difficulty: 'Medium', question: 'Thandiwe teken ʼn dubbelstaafgrafiek wat reënval in Kaapstad en Durban oor 6 maande vergelyk, maar gebruik dieselfde kleur vir albei stede se stawe. Waarom maak dit die grafiek onmoontlik om korrek te lees?', answer: 'Sonder twee verskillende kleure (en ʼn sleutel wat wys watter kleur watter stad is) kan ʼn leser nie die Kaapstad-staaf van die Durban-staaf vir enige maand onderskei nie, so kan geen betroubare vergelyking tussen die twee stede gemaak word nie.', checkMode: 'self' },

        // Blok 3 — Sirkelgrafieke (9-12, Medium) — DIAGRAM-GEMERK
        { difficulty: 'Medium', question: 'ʼn Sirkelgrafiekskyf beslaan 63 grade. Watter persentasie van die data verteenwoordig hierdie skyf?', answer: '17,5%', checkMode: 'auto', correctAnswer: '17,5%', correctAnswers: ['17,5%', '17,5', '17.5%', '17.5'], explanation: 'Grade ÷ 360 × 100 = %\n63 ÷ 360 × 100 = 0,175 × 100 = 17,5% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Opname-uitslae</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 145.2,76.9 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 145.2,76.9 A 62,62 0 0 1 65.8,162.1 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 65.8,162.1 A 62,62 0 0 1 36.3,74.0 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 36.3,74.0 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="129.7" y="40.2" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">63°</text><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="8" fill="#374151" font-weight="600">Skyf A</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="8" fill="#374151" font-weight="600">B</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="8" fill="#374151" font-weight="600">C</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="8" fill="#374151" font-weight="600">D</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelgrafiek wys dat 15% van 220 kopers by ʼn mall skoene gekoop het. Hoeveel kopers het skoene gekoop?', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: '15% van 220 = 15 ÷ 100 × 220 = 33 kopers ✓' },
        { difficulty: 'Medium', question: 'In ʼn opname van 200 leerders het 34 gesê hul gunstelingvak is Kuns. Watter persentasie van die groep het Kuns gekies?', answer: '17%', checkMode: 'auto', correctAnswer: '17%', correctAnswers: ['17%', '17'], explanation: 'Persentasie = (deel ÷ totaal) × 100 = (34 ÷ 200) × 100 = 0,17 × 100 = 17% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunstelingvak-opname (200 leerders)</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 144.3,75.1 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 144.3,75.1 A 62,62 0 0 1 101.6,165.9 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><text x="124.8" y="121.4" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">30%</text><path d="M 90,105 L 101.6,165.9 A 62,62 0 0 1 28.0,105.0 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><text x="65.5" y="134.6" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">28%</text><path d="M 90,105 L 28.0,105.0 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><text x="62.8" y="77.8" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">25%</text><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="7.6" fill="#374151" font-weight="600">Kuns: 34 leerders</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="7.6" fill="#374151" font-weight="600">Wiskunde: 30%</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="7.6" fill="#374151" font-weight="600">Wetenskap: 28%</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="7.6" fill="#374151" font-weight="600">Engels: 25%</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sirkelgrafiek verdeel ʼn opname van gunsteling skoolvakke in vier skywe: Wiskunde — 28%, Wetenskap — 33%, Engels — 19%, en Lewensvaardighede — die ontbrekende skyf. Watter persentasie verteenwoordig die Lewensvaardighede-skyf?', answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Alle skywe moet optel tot 100%.\n28% + 33% + 19% = 80%.\nOntbrekende skyf: 100% − 80% = 20% ✓' },

        // Blok 4 — Mediaan en modus (13-16, Medium-Moeilik)
        { difficulty: 'Medium', question: 'ʼn Fietsryer teken hierdie afstande (in km) vir 6 oefenritte aan: 64, 72, 88, 68, 80, 68. Vind die mediaan en die modus van hierdie afstande.', answer: 'Mediaan = 70 km, Modus = 68 km', checkMode: 'auto', correctAnswer: '70,68', correctAnswers: ['70,68', 'mediaan70modus68', '70, 68'], explanation: 'Rangskik die waardes: 64, 68, 68, 72, 80, 88. Daar is 6 waardes (ewe), dus is die mediaan die gemiddeld van die twee middelste waardes (3de en 4de): (68 + 72) ÷ 2 = 70 km.\nModus: 68 kom twee keer voor, meer as enige ander waarde, dus is die modus 68 km.\nMediaan = 70 km, Modus = 68 km ✓' },
        { difficulty: 'Medium-Hard', question: 'Die temperatuur (°C) word op middag vir 7 dae aangeteken: 24,6, 26,1, 22,8, 25,3, 23,9, 27,2, 21,5. Vind die mediaantemperatuur.', answer: '24,6°C', checkMode: 'auto', correctAnswer: '24,6', correctAnswers: ['24,6', '24,6°C', '24.6', '24.6°C'], explanation: 'Rangskik die waardes van kleinste na grootste: 21,5, 22,8, 23,9, 24,6, 25,3, 26,1, 27,2. Daar is 7 waardes (onewe), dus is die middelste (4de) waarde die mediaan: 24,6°C ✓' },
        { difficulty: 'Hard', question: "Lindiwe se weeklikse sakgeld oor 9 weke (in rand) was: 30, 45, 35, 50, 40, 55, 35, 48, 60. Vind die mediaan en die modus.", answer: 'Mediaan = R45, Modus = R35', checkMode: 'auto', correctAnswer: '45,35', correctAnswers: ['45,35', 'mediaan45modus35', '45, 35'], explanation: 'Rangskik die waardes: 30, 35, 35, 40, 45, 48, 50, 55, 60. Daar is 9 waardes (onewe), dus is die middelste (5de) waarde die mediaan: R45.\nModus: R35 kom twee keer voor, meer as enige ander waarde, dus is die modus R35.\nMediaan = R45, Modus = R35 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê die modus van 12, 18, 12, 21, 9, 13 is 21, omdat dit die grootste getal in die lys is. Is dit korrek? Verduidelik die fout en gee die korrekte modus.', answer: 'Nee — die modus is nie die grootste waarde nie, dit is die waarde wat die meeste voorkom. Tel: 12 kom twee keer voor (meer as enige ander waarde), terwyl 18, 21, 9 en 13 elk een keer voorkom. Die korrekte modus is 12, nie 21 nie.', checkMode: 'self' },

        // Blok 5 — Modus en gemengde redenering (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Vind die modus van hierdie datastel: 8, 3, 8, 5, 3, 8, 9.', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Tel hoeveel keer elke waarde voorkom: 8 kom 3 keer voor, 3 kom 2 keer voor, 5 kom 1 keer voor, 9 kom 1 keer voor.\n8 kom die meeste voor — modus = 8 ✓' },
        { difficulty: 'Hard', question: 'Twee klasse teken aan hoeveel minute elke leerder aan huiswerk spandeer het: Klas A: 6, 6, 9, 4, 6, 2. Klas B: 3, 5, 3, 7, 3, 9. Vergelyk die modusse van Klas A en Klas B — watter klas het ʼn hoër modus?', answer: 'Klas A het ʼn hoër modus (6) in vergelyking met Klas B (3)', checkMode: 'auto', correctAnswer: 'Klas A, 6', correctAnswers: ['Klas A, 6', 'klasa,6', 'Klas A'], explanation: 'Klas A: 2 kom 1 keer voor, 4 kom 1 keer voor, 6 kom 3 keer voor, 9 kom 1 keer voor. Modus van A = 6.\nKlas B: 3 kom 3 keer voor, 5 kom 1 keer voor, 7 kom 1 keer voor, 9 kom 1 keer voor. Modus van B = 3.\nAangesien 6 > 3, het Klas A die hoër modus ✓' },
        { difficulty: 'Hard', question: 'ʼn Opname van 45 leerders oor gunsteling pouse-aktiwiteite word op ʼn sirkelgrafiek gewys: Lees — 40%, Sport — 20%, Kuns — die ontbrekende skyf. Vind die aantal leerders vir elke aktiwiteit, en vind dan die modus van hierdie drie tellings.', answer: 'Lees = 18, Sport = 9, Kuns = 18. Modus = 18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'modus18'], explanation: 'Lees: 40% van 45 = 18. Sport: 20% van 45 = 9. Kuns (ontbrekende skyf): 100% − 40% − 20% = 40%, so 40% van 45 = 18.\nKontroleer: 18 + 9 + 18 = 45 ✓\nDie tellings is 18, 9, 18 — die waarde 18 kom twee keer voor, meer as enige ander telling. Modus = 18 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het frekwensietabelle, staafgrafieke, sirkelgrafieke, en gemiddelde, mediaan en modus bemeester.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van jouself hiermee — gaan enige gemiste vrae deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die studiegids-afdelings oor grafieke en middelwaardes deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Data insamel en organiseer (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Opname onder 36 leerders vra hoe hulle skool toe kom: Motor — 9, Taxi — 14, Bus — 8, Fiets — 5. Organiseer dit in ʼn frekwensietabel, en skryf dan die totaal neer.', answer: 'Motor = 9, Taxi = 14, Bus = 8, Fiets = 5. Totaal = 36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', 'motor9taxi14bus8fiets5totaal36'], explanation: 'Lys elke kategorie met sy frekwensie: Motor = 9, Taxi = 14, Bus = 8, Fiets = 5.\nTel die frekwensies op: 9 + 14 + 8 + 5 = 36, wat ooreenstem met die 36 leerders wat opgeneem is ✓' },
        { difficulty: 'Easy', question: 'Gebruik die skoolvervoer-frekwensietabel hierbo (Motor — 9, Taxi — 14, Bus — 8, Fiets — 5). Hoeveel leerders reis per taxi of bus?', answer: '22', checkMode: 'auto', correctAnswer: '22', explanation: 'Taxi + Bus = 14 + 8 = 22 leerders ✓' },
        { difficulty: 'Easy', question: 'Bafana beweer hy het 30 mense oor hul gunsteling-wegneemetes uitgevra, maar sy frekwensietabel wys: Pizza — 9, Burgers — 8, Slap Chips — 7, Hoender — 7. Stem sy tabel ooreen met sy bewering? Verduidelik.', answer: 'Nee — die frekwensies tel op tot 9 + 8 + 7 + 7 = 31, nie 30 nie. Hy het waarskynlik een respons dubbel getel of ʼn telfout gemaak.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Refilwe sê ʼn frekwensietabel kan net gebruik word om dinge te tel wat mense in ʼn opname sê, nie dinge wat jy self direk waarneem nie. Is sy korrek? Verduidelik.', answer: 'Nee — ʼn frekwensietabel kan enige versamelde data organiseer, insluitend direkte waarnemings (soos die kleure van motors wat verbygaan te tel) of eksperimentresultate, nie net opname-response nie.', checkMode: 'self' },

        // Blok 2 — Staafgrafieke en dubbelstaafgrafieke (4-8, Maklik-Medium) — DIAGRAM-GEMERK
        { difficulty: 'Easy', question: 'ʼn Staafgrafiek wys lekkers wat by ʼn skool-snoepie van Maandag tot Vrydag verkoop is: Maandag — 21, Dinsdag — 17, Woensdag — 26, Donderdag — 14, Vrydag — 23. Watter dag het die hoogste verkope gehad, en watter die laagste?', answer: 'Hoogste: Woensdag (26). Laagste: Donderdag (14)', checkMode: 'auto', correctAnswer: 'Woensdag, Donderdag', correctAnswers: ['Woensdag, Donderdag', 'Woensdag en Donderdag', 'woensdag,donderdag'], explanation: 'Vergelyk al vyf stawe: 21, 17, 26, 14, 23.\nDie langste staaf is Woensdag met 26 — die hoogste.\nDie kortste staaf is Donderdag met 14 — die laagste ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Snoepie-lekkerverkope</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="136.3" x2="210" y2="136.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="117.6" x2="210" y2="117.6" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">15</text><line x1="34" y1="98.9" x2="210" y2="98.9" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="80.1" x2="210" y2="80.1" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">25</text><line x1="34" y1="61.4" x2="210" y2="61.4" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="42.7" x2="210" y2="42.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">35</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="76.4" width="25.6" height="78.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="72.4" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">21</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Ma</text><rect x="75.6" y="91.4" width="25.6" height="63.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="87.4" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Di</text><rect x="109.2" y="57.7" width="25.6" height="97.3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="53.7" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">26</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wo</text><rect x="142.8" y="102.6" width="25.6" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="98.6" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Do</text><rect x="176.4" y="68.9" width="25.6" height="86.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="64.9" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Vr</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde snoepie-lekkerverkope — Maandag 21, Dinsdag 17, Woensdag 26, Donderdag 14, Vrydag 23 — vind die totale verkope vir die hele week en die verskil tussen die besigste en stilste dag.', answer: 'Totaal = 101, Verskil = 12', checkMode: 'auto', correctAnswer: '101,12', correctAnswers: ['101,12', '101, 12'], explanation: 'Totaal: 21 + 17 + 26 + 14 + 23 = 101.\nBesigste dag = 26 (Woensdag), stilste dag = 14 (Donderdag).\nVerskil: 26 − 14 = 12 ✓' },
        { difficulty: 'Medium', question: 'ʼn Dubbelstaafgrafiek vergelyk stemme vir klaspresident van seuns en dogters oor 4 kandidate: Kandidaat A — seuns 11, dogters 9. Kandidaat B — seuns 7, dogters 12. Kandidaat C — seuns 13, dogters 6. Kandidaat D — seuns 5, dogters 14. Watter kandidaat het meer totale stemme as enige ander gekry, en hoeveel totale stemme het hulle gekry?', answer: 'Kandidaat A, met 20 totale stemme', checkMode: 'auto', correctAnswer: 'Kandidaat A, 20', correctAnswers: ['Kandidaat A, 20', 'kandidaata,20', 'Kandidaat A'], explanation: 'Totale: A = 11 + 9 = 20. B = 7 + 12 = 19. C = 13 + 6 = 19. D = 5 + 14 = 19.\nKandidaat A het die hoogste totaal met 20 stemme — meer as B, C of D (elk met 19) ✓' },
        { difficulty: 'Medium', question: 'ʼn Staafgrafiek volg die aantal besoekers aan ʼn skool-wetenskaptentoonstelling oor 4 dae: Donderdag — 52, Vrydag — 68, Saterdag — 91, Sondag — 74. Vind die totale aantal besoekers oor al vier dae.', answer: '285', checkMode: 'auto', correctAnswer: '285', explanation: '52 + 68 + 91 + 74 = 285 besoekers ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wetenskaptentoonstelling-besoekers</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="133.2" x2="210" y2="133.2" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">40</text><line x1="34" y1="111.3" x2="210" y2="111.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">60</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">80</text><line x1="34" y1="67.7" x2="210" y2="67.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">100</text><line x1="34" y1="45.8" x2="210" y2="45.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">120</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="98.2" width="34.0" height="56.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.0" y="94.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">52</text><text x="59.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Do</text><rect x="84.0" y="80.8" width="34.0" height="74.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.0" y="76.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">68</text><text x="101.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Vr</text><rect x="126.0" y="55.7" width="34.0" height="99.3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="143.0" y="51.7" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">91</text><text x="143.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Sa</text><rect x="168.0" y="74.2" width="34.0" height="80.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="185.0" y="70.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">74</text><text x="185.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">So</text></svg>' },
        { difficulty: 'Medium', question: 'Zolani kyk na ʼn staafgrafiek van maandelikse verkope en sê Desember moet die beste maand wees omdat sy staaf in ʼn helderrooi kleur geteken is terwyl die ander grys is. Verduidelik waarom staafkleur alleen jou niks van die waarde van ʼn staaf vertel nie.', answer: 'Kleur is bloot ʼn visuele styl-keuse — dit verteenwoordig geen datawaarde nie. Slegs die staaf se hoogte, gemeet teen die skaal op die as, wys die werklike waarde. ʼn Helder gekleurde staaf kan maklik korter wees as ʼn gewone grys een.', checkMode: 'self' },

        // Blok 3 — Sirkelgrafieke (9-12, Medium) — DIAGRAM-GEMERK
        { difficulty: 'Medium', question: 'ʼn Sirkelgrafiekskyf beslaan 126 grade. Watter persentasie van die data verteenwoordig hierdie skyf?', answer: '35%', checkMode: 'auto', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Grade ÷ 360 × 100 = %\n126 ÷ 360 × 100 = 0,35 × 100 = 35% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Opname-uitslae</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 140.2,141.4 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 140.2,141.4 A 62,62 0 0 1 45.4,148.1 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 45.4,148.1 A 62,62 0 0 1 39.8,68.6 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 39.8,68.6 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="157.7" y="70.5" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">126°</text><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="8" fill="#374151" font-weight="600">Skyf A</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="8" fill="#374151" font-weight="600">B</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="8" fill="#374151" font-weight="600">C</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="8" fill="#374151" font-weight="600">D</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelgrafiek wys dat 18% van 250 besoekers by ʼn skou ʼn ritkaartjie gekoop het. Hoeveel besoekers het ʼn ritkaartjie gekoop?', answer: '45', checkMode: 'auto', correctAnswer: '45', explanation: '18% van 250 = 18 ÷ 100 × 250 = 45 besoekers ✓' },
        { difficulty: 'Medium', question: 'In ʼn opname van 60 mense het 21 gesê hul gunstelingvrug is piesang. Watter persentasie van die groep het piesang gekies?', answer: '35%', checkMode: 'auto', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Persentasie = (deel ÷ totaal) × 100 = (21 ÷ 60) × 100 = 0,35 × 100 = 35% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunstelingvrug-opname (60 mense)</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 140.2,141.4 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 140.2,141.4 A 62,62 0 0 1 53.6,155.2 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><text x="96.0" y="143.0" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">25%</text><path d="M 90,105 L 53.6,155.2 A 62,62 0 0 1 33.9,78.6 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><text x="52.8" y="114.6" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">22%</text><path d="M 90,105 L 33.9,78.6 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><text x="69.4" y="72.5" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">18%</text><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="7.6" fill="#374151" font-weight="600">Piesang: 21 mense</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="7.6" fill="#374151" font-weight="600">Appel: 25%</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="7.6" fill="#374151" font-weight="600">Lemoen: 22%</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="7.6" fill="#374151" font-weight="600">Druiwe: 18%</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sirkelgrafiek verdeel ʼn opname van huisdiere in vier skywe: Honde — 32%, Katte — 41%, Visse — 15%, en Voëls — die ontbrekende skyf. Watter persentasie verteenwoordig die Voëls-skyf?', answer: '12%', checkMode: 'auto', correctAnswer: '12%', correctAnswers: ['12%', '12'], explanation: 'Alle skywe moet optel tot 100%.\n32% + 41% + 15% = 88%.\nOntbrekende skyf: 100% − 88% = 12% ✓' },

        // Blok 4 — Mediaan en modus (13-16, Medium-Moeilik)
        { difficulty: 'Medium', question: 'ʼn Draffer teken hierdie tye (in minute) vir 6 oefenlope aan: 50, 58, 66, 54, 62, 58. Vind die mediaan en die modus van hierdie tye.', answer: 'Mediaan = 58 minute, Modus = 58 minute', checkMode: 'auto', correctAnswer: '58,58', correctAnswers: ['58,58', 'mediaan58modus58', '58, 58'], explanation: 'Rangskik die waardes: 50, 54, 58, 58, 62, 66. Daar is 6 waardes (ewe), dus is die mediaan die gemiddeld van die twee middelste waardes (3de en 4de): (58 + 58) ÷ 2 = 58 minute.\nModus: 58 kom twee keer voor, meer as enige ander waarde, dus is die modus 58 minute.\nMediaan = 58 minute, Modus = 58 minute ✓' },
        { difficulty: 'Medium-Hard', question: 'Die massa (in kg) van 8 pakkies by ʼn afleweringsdepot word aangeteken: 16,4, 18,2, 15,9, 17,6, 19,1, 14,8, 18,5, 16,0. Vind die mediaanmassa.', answer: '17,0 kg', checkMode: 'auto', correctAnswer: '17,0', correctAnswers: ['17,0', '17', '17,0kg', '17.0', '17.0kg', '17kg'], explanation: 'Rangskik die waardes van kleinste na grootste: 14,8, 15,9, 16,0, 16,4, 17,6, 18,2, 18,5, 19,1. Daar is 8 waardes (ewe), dus is die mediaan die gemiddeld van die twee middelste waardes (4de en 5de): (16,4 + 17,6) ÷ 2 = 17,0 kg ✓' },
        { difficulty: 'Hard', question: "Ayanda se weeklikse sakgeld oor 7 weke (in rand) was: 25, 40, 30, 50, 35, 45, 30. Vind die mediaan en die modus.", answer: 'Mediaan = R35, Modus = R30', checkMode: 'auto', correctAnswer: '35,30', correctAnswers: ['35,30', 'mediaan35modus30', '35, 30'], explanation: 'Rangskik die waardes: 25, 30, 30, 35, 40, 45, 50. Daar is 7 waardes (onewe), dus is die middelste (4de) waarde die mediaan: R35.\nModus: R30 kom twee keer voor, meer as enige ander waarde, dus is die modus R30.\nMediaan = R35, Modus = R30 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder vind die mediaan van 14, 6, 22, 10, 18, 8 deur die middelste getal in die volgorde soos gegee te kies, sonder om eers te rangskik. Verduidelik waarom hierdie benadering verkeerd is en vind die korrekte mediaan.', answer: 'Die waardes moet van kleinste na grootste gerangskik word voordat die mediaan gevind word. Gerangskik: 6, 8, 10, 14, 18, 22. Daar is 6 waardes (ewe), dus bereken die gemiddeld van die twee middelste waardes (3de en 4de): (10 + 14) ÷ 2 = 12.', checkMode: 'self' },

        // Blok 5 — Modus en gemengde redenering (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Vind die modus van hierdie datastel: 7, 2, 7, 9, 2, 7, 5.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Tel hoeveel keer elke waarde voorkom: 7 kom 3 keer voor, 2 kom 2 keer voor, 9 kom 1 keer voor, 5 kom 1 keer voor.\n7 kom die meeste voor — modus = 7 ✓' },
        { difficulty: 'Hard', question: 'Sibusiso sê ʼn modus moet altyd een van die kleiner waardes in ʼn datastel wees. Gebruik die datastel 4, 7, 4, 4, 9, 2 om te kyk of hy korrek is.', answer: 'Nee — die modus is eenvoudig die waarde wat die meeste voorkom; dit kan ʼn klein, middel- of groot waarde in die stel wees. In 4, 7, 4, 4, 9, 2 kom die waarde 4 3 keer voor (meer as enige ander), dus is die modus 4 — maar dit het niks daarmee te doen dat 4 klein of groot is nie, net met hoe gereeld dit voorkom.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Opname van 50 leerders oor gunsteling musiekgenres word op ʼn sirkelgrafiek gewys: Pop — 34%, Hip-hop — 26%, Gospel — die ontbrekende skyf. Vind die aantal leerders vir elke genre, en vind dan die mediaan van hierdie drie tellings.', answer: 'Pop = 17, Hip-hop = 13, Gospel = 20. Mediaan = 17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17'], explanation: 'Pop: 34% van 50 = 17. Hip-hop: 26% van 50 = 13. Gospel (ontbrekende skyf): 100% − 34% − 26% = 40%, so 40% van 50 = 20.\nKontroleer: 17 + 13 + 20 = 50 ✓\nRangskik die drie tellings: 13, 17, 20. Daar is 3 waardes, dus is die middelste (2de) waarde die mediaan: 17 ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het frekwensietabelle, staafgrafieke, sirkelgrafieke, en gemiddelde, mediaan en modus bemeester.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van jouself hiermee — gaan enige gemiste vrae deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die studiegids-afdelings oor grafieke en middelwaardes deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Data insamel en organiseer (0-3, Maklik)
        { difficulty: 'Easy', question: 'ʼn Opname onder 35 leerders vra oor hul gunsteling pouse-aktiwiteit: Lees — 9, Sport — 15, Kuns — 6, Musiek — 5. Organiseer dit in ʼn frekwensietabel, en skryf dan die totaal neer.', answer: 'Lees = 9, Sport = 15, Kuns = 6, Musiek = 5. Totaal = 35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', 'lees9sport15kuns6musiek5totaal35'], explanation: 'Lys elke kategorie met sy frekwensie: Lees = 9, Sport = 15, Kuns = 6, Musiek = 5.\nTel die frekwensies op: 9 + 15 + 6 + 5 = 35, wat ooreenstem met die 35 leerders wat opgeneem is ✓' },
        { difficulty: 'Easy', question: 'Gebruik die pouse-aktiwiteit-frekwensietabel hierbo (Lees — 9, Sport — 15, Kuns — 6, Musiek — 5). Hoeveel leerders het sport of kuns gekies?', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: 'Sport + Kuns = 15 + 6 = 21 leerders ✓' },
        { difficulty: 'Easy', question: 'Tumi sê hy het data van 24 mense oor hul gunsteling bordspeletjie versamel, en sy frekwensietabel wys: Skaak — 7, Dambord — 6, Slange en Leiters — 5, Monopolie — 7. Is sy tabel korrek? Verduidelik.', answer: 'Nee — die frekwensies tel op tot 7 + 6 + 5 + 7 = 25, nie 24 nie. Sy tabel het ʼn fout — hy het waarskynlik een respons dubbel getel.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Ntombi sê wanneer twee kategorieë in ʼn frekwensietabel dieselfde frekwensie het, moet een van hulle ʼn fout wees. Is sy korrek? Verduidelik.', answer: 'Nee — dit is heeltemal normaal en geldig vir twee of meer kategorieë om dieselfde frekwensie te hê. Dit beteken bloot dat daardie kategorieë ewe veel keer in die data voorgekom het; dit is nie outomaties ʼn fout nie.', checkMode: 'self' },

        // Blok 2 — Staafgrafieke en dubbelstaafgrafieke (4-8, Maklik-Medium) — DIAGRAM-GEMERK
        { difficulty: 'Easy', question: 'ʼn Staafgrafiek wys koekies wat by ʼn skool-bakverkoping van Maandag tot Vrydag verkoop is: Maandag — 13, Dinsdag — 19, Woensdag — 24, Donderdag — 10, Vrydag — 17. Watter dag het die hoogste verkope gehad, en watter die laagste?', answer: 'Hoogste: Woensdag (24). Laagste: Donderdag (10)', checkMode: 'auto', correctAnswer: 'Woensdag, Donderdag', correctAnswers: ['Woensdag, Donderdag', 'Woensdag en Donderdag', 'woensdag,donderdag'], explanation: 'Vergelyk al vyf stawe: 13, 19, 24, 10, 17.\nDie langste staaf is Woensdag met 24 — die hoogste.\nDie kortste staaf is Donderdag met 10 — die laagste ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Bakverkoping-koekies Verkoop</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="133.2" x2="210" y2="133.2" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">10</text><line x1="34" y1="111.3" x2="210" y2="111.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">15</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">20</text><line x1="34" y1="67.7" x2="210" y2="67.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">25</text><line x1="34" y1="45.8" x2="210" y2="45.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">30</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="98.2" width="25.6" height="56.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="94.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">13</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Ma</text><rect x="75.6" y="72.0" width="25.6" height="83.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="68.0" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">19</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Di</text><rect x="109.2" y="50.2" width="25.6" height="104.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="46.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Wo</text><rect x="142.8" y="111.3" width="25.6" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="107.3" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Do</text><rect x="176.4" y="80.8" width="25.6" height="74.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="76.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">17</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">Vr</text></svg>' },
        { difficulty: 'Easy-Medium', question: 'Gebruik dieselfde bakverkoping-koekiegetalle — Maandag 13, Dinsdag 19, Woensdag 24, Donderdag 10, Vrydag 17 — vind die totale koekies verkoop vir die hele week en die verskil tussen die besigste en stilste dag.', answer: 'Totaal = 83, Verskil = 14', checkMode: 'auto', correctAnswer: '83,14', correctAnswers: ['83,14', '83, 14'], explanation: 'Totaal: 13 + 19 + 24 + 10 + 17 = 83.\nBesigste dag = 24 (Woensdag), stilste dag = 10 (Donderdag).\nVerskil: 24 − 10 = 14 ✓' },
        { difficulty: 'Medium', question: 'ʼn Dubbelstaafgrafiek vergelyk biblioteekbesoeke tussen Graad 5- en Graad 6-leerders oor 4 kwartale: Kwartaal 1 — Graad 5: 10, Graad 6: 14. Kwartaal 2 — Graad 5: 15, Graad 6: 9. Kwartaal 3 — Graad 5: 7, Graad 6: 13. Kwartaal 4 — Graad 5: 12, Graad 6: 8. In watter kwartaal het Graad 6 die meeste meer besoeke as Graad 5 gehad, en met hoeveel meer?', answer: 'Kwartaal 3, met 6 meer', checkMode: 'auto', correctAnswer: 'Kwartaal 3, 6', correctAnswers: ['Kwartaal 3, 6', 'kwartaal3,6', 'Kwartaal 3 met 6'], explanation: 'Vergelyk Graad 6 minus Graad 5 vir elke kwartaal: Kwartaal 1: 14 − 10 = 4. Kwartaal 2: 9 − 15 = −6. Kwartaal 3: 13 − 7 = 6. Kwartaal 4: 8 − 12 = −4.\nDie grootste Graad-6-bo-Graad-5 gaping is Kwartaal 3, met 6 meer besoeke ✓' },
        { difficulty: 'Medium', question: 'ʼn Staafgrafiek teken die aantal doele aan wat ʼn sokkerspan oor 5 wedstryde aangeteken het: 2, 4, 1, 3, 5. Vind die totale aantal doele oor al 5 wedstryde en die verskil tussen die hoogste-telling en laagste-telling wedstryd.', answer: 'Totaal = 15, Verskil = 4', checkMode: 'auto', correctAnswer: '15,4', correctAnswers: ['15,4', '15, 4'], explanation: 'Totaal: 2 + 4 + 1 + 3 + 5 = 15 doele.\nHoogste-telling wedstryd = 5 doele, laagste-telling wedstryd = 1 doel.\nVerskil: 5 − 1 = 4 ✓', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Doele Oor 5 Wedstryde</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">1</text><line x1="34" y1="133.2" x2="210" y2="133.2" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">2</text><line x1="34" y1="111.3" x2="210" y2="111.3" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">3</text><line x1="34" y1="89.5" x2="210" y2="89.5" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">4</text><line x1="34" y1="67.7" x2="210" y2="67.7" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">5</text><line x1="34" y1="45.8" x2="210" y2="45.8" stroke="#e5e7eb" stroke-width="0.6"/><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9" fill="#9ca3af" font-weight="700" text-anchor="end">6</text><line x1="34" y1="24.0" x2="210" y2="24.0" stroke="#e5e7eb" stroke-width="0.6"/><rect x="42.0" y="111.3" width="25.6" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="54.8" y="107.3" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><text x="54.8" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">W1</text><rect x="75.6" y="67.7" width="25.6" height="87.3" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="88.4" y="63.7" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="88.4" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">W2</text><rect x="109.2" y="133.2" width="25.6" height="21.8" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="122.0" y="129.2" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><text x="122.0" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">W3</text><rect x="142.8" y="89.5" width="25.6" height="65.5" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="155.6" y="85.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><text x="155.6" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">W4</text><rect x="176.4" y="45.8" width="25.6" height="109.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="189.2" y="41.8" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="189.2" y="167" font-size="9" fill="#374151" font-weight="700" text-anchor="middle">W5</text></svg>' },
        { difficulty: 'Medium', question: 'Mpho sien ʼn staafgrafiek waar die stawe met 3D-skadu en effens skuins geteken is. Hy sê die grafiek lyk meer "professioneel" so. Verduidelik waarom 3D- of skuins staaf-effekte ʼn grafiek eintlik moeiliker kan maak om akkuraat te lees.', answer: '3D- en skuins-effekte kan vervorm hoe hoog ʼn staaf lyk, wat dit moeiliker maak om die bokant van die staaf akkuraat teen die skaal op die as te belyn. ʼn Plat, gewone staaf met ʼn duidelike bokant is makliker en meer akkuraat om te lees, al lyk dit minder versierd.', checkMode: 'self' },

        // Blok 3 — Sirkelgrafieke (9-12, Medium) — DIAGRAM-GEMERK
        { difficulty: 'Medium', question: 'ʼn Sirkelgrafiekskyf beslaan 234 grade. Watter persentasie van die data verteenwoordig hierdie skyf?', answer: '65%', checkMode: 'auto', correctAnswer: '65%', correctAnswers: ['65%', '65'], explanation: 'Grade ÷ 360 × 100 = %\n234 ÷ 360 × 100 = 0,65 × 100 = 65% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Opname-uitslae</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 1 1 39.8,141.4 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 39.8,141.4 A 62,62 0 0 1 29.8,90.0 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 29.8,90.0 A 62,62 0 0 1 57.1,52.4 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 57.1,52.4 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="157.7" y="139.5" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">234°</text><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="8" fill="#374151" font-weight="600">Skyf A</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="8" fill="#374151" font-weight="600">B</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="8" fill="#374151" font-weight="600">C</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="8" fill="#374151" font-weight="600">D</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkelgrafiek wys dat 55% van 180 mense by ʼn stadion die tuisspan ondersteun. Hoeveel mense ondersteun die tuisspan?', answer: '99', checkMode: 'auto', correctAnswer: '99', explanation: '55% van 180 = 55 ÷ 100 × 180 = 99 mense ✓' },
        { difficulty: 'Medium', question: 'In ʼn opname van 48 mense het 12 gesê hul gunstelingdrankie is ystee. Watter persentasie van die groep het ystee gekies?', answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Persentasie = (deel ÷ totaal) × 100 = (12 ÷ 48) × 100 = 0,25 × 100 = 25% ✓', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><text x="110" y="16" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunstelingdrankie-opname (48 mense)</text><path d="M 90,105 L 90.0,43.0 A 62,62 0 0 1 152.0,105.0 Z" fill="#2563eb" stroke="#ffffff" stroke-width="1.5"/><path d="M 90,105 L 152.0,105.0 A 62,62 0 0 1 53.6,155.2 Z" fill="#16a34a" stroke="#ffffff" stroke-width="1.5"/><text x="107.5" y="139.3" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">35%</text><path d="M 90,105 L 53.6,155.2 A 62,62 0 0 1 39.8,68.6 Z" fill="#ea580c" stroke="#ffffff" stroke-width="1.5"/><text x="52.0" y="111.0" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">25%</text><path d="M 90,105 L 39.8,68.6 A 62,62 0 0 1 90.0,43.0 Z" fill="#9ca3af" stroke="#ffffff" stroke-width="1.5"/><text x="72.5" y="70.7" font-size="10.5" fill="#ffffff" font-weight="700" text-anchor="middle">15%</text><circle cx="90" cy="105" r="62" fill="none" stroke="#0f1f3d" stroke-width="2"/><rect x="168" y="32" width="10" height="10" fill="#2563eb"/><text x="182" y="40" font-size="7.6" fill="#374151" font-weight="600">Ystee: 12 mense</text><rect x="168" y="48" width="10" height="10" fill="#16a34a"/><text x="182" y="56" font-size="7.6" fill="#374151" font-weight="600">Koffie: 35%</text><rect x="168" y="64" width="10" height="10" fill="#ea580c"/><text x="182" y="72" font-size="7.6" fill="#374151" font-weight="600">Sap: 25%</text><rect x="168" y="80" width="10" height="10" fill="#9ca3af"/><text x="182" y="88" font-size="7.6" fill="#374151" font-weight="600">Water: 15%</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sirkelgrafiek verdeel ʼn opname van gunsteling sosiale media-toepassings in vier skywe: Toep A — 18%, Toep B — 47%, Toep C — 21%, en Toep D — die ontbrekende skyf. Watter persentasie verteenwoordig die Toep D-skyf?', answer: '14%', checkMode: 'auto', correctAnswer: '14%', correctAnswers: ['14%', '14'], explanation: 'Alle skywe moet optel tot 100%.\n18% + 47% + 21% = 86%.\nOntbrekende skyf: 100% − 86% = 14% ✓' },

        // Blok 4 — Mediaan en modus (13-16, Medium-Moeilik)
        { difficulty: 'Medium', question: 'ʼn Leerder teken sy speltoetsuitslae (uit 60) vir 7 toetse aan: 45, 52, 38, 60, 49, 52, 41. Vind die mediaan en die modus van hierdie uitslae.', answer: 'Mediaan = 49, Modus = 52', checkMode: 'auto', correctAnswer: '49,52', correctAnswers: ['49,52', 'mediaan49modus52', '49, 52'], explanation: 'Rangskik die waardes: 38, 41, 45, 49, 52, 52, 60. Daar is 7 waardes (onewe), dus is die middelste (4de) waarde die mediaan: 49.\nModus: 52 kom twee keer voor, meer as enige ander waarde, dus is die modus 52.\nMediaan = 49, Modus = 52 ✓' },
        { difficulty: 'Medium-Hard', question: 'Die hoogte (in cm) van 9 saailinge word gemeet: 8,4, 9,1, 7,6, 8,9, 9,5, 7,2, 8,0, 9,3, 8,6. Vind die mediaanhoogte.', answer: '8,6 cm', checkMode: 'auto', correctAnswer: '8,6', correctAnswers: ['8,6', '8,6cm', '8.6', '8.6cm'], explanation: 'Rangskik die waardes van kleinste na grootste: 7,2, 7,6, 8,0, 8,4, 8,6, 8,9, 9,1, 9,3, 9,5. Daar is 9 waardes (onewe), dus is die middelste (5de) waarde die mediaan: 8,6 cm ✓' },
        { difficulty: 'Hard', question: "Boitumelo se weeklikse sakgeld oor 6 weke (in rand) was: 30, 40, 50, 35, 45, 40. Vind die mediaan en die modus.", answer: 'Mediaan = R40, Modus = R40', checkMode: 'auto', correctAnswer: '40,40', correctAnswers: ['40,40', 'mediaan40modus40', '40, 40'], explanation: 'Rangskik die waardes: 30, 35, 40, 40, 45, 50. Daar is 6 waardes (ewe), dus is die mediaan die gemiddeld van die twee middelste waardes (3de en 4de): (40 + 40) ÷ 2 = R40.\nModus: R40 kom twee keer voor, meer as enige ander waarde, dus is die modus R40.\nMediaan = R40, Modus = R40 ✓' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê die modus van 20, 35, 20, 40, 30 is 40, omdat dit die grootste getal in die lys is. Is dit korrek? Verduidelik die fout en gee die korrekte modus.', answer: 'Nee — die modus is nie die grootste waarde nie, dit is die waarde wat die meeste voorkom. Tel: 20 kom twee keer voor (meer as enige ander waarde), terwyl 35, 40 en 30 elk een keer voorkom. Die korrekte modus is 20, nie 40 nie.', checkMode: 'self' },

        // Blok 5 — Modus en gemengde redenering (17-19, Moeilik)
        { difficulty: 'Hard', question: 'Vind die modus van hierdie datastel: 5, 8, 5, 3, 8, 5, 1.', answer: '5', checkMode: 'auto', correctAnswer: '5', explanation: 'Tel hoeveel keer elke waarde voorkom: 5 kom 3 keer voor, 8 kom 2 keer voor, 3 kom 1 keer voor, 1 kom 1 keer voor.\n5 kom die meeste voor — modus = 5 ✓' },
        { difficulty: 'Hard', question: 'Twee spanne teken die aantal opstote aan wat elke speler in een minuut gedoen het: Span A: 9, 3, 9, 6, 3, 9. Span B: 4, 7, 4, 4, 2, 7. Vergelyk die modusse van Span A en Span B — watter span het ʼn hoër modus?', answer: 'Span A het ʼn hoër modus (9) in vergelyking met Span B (4)', checkMode: 'auto', correctAnswer: 'Span A, 9', correctAnswers: ['Span A, 9', 'spana,9', 'Span A'], explanation: 'Span A: 3 kom 2 keer voor, 6 kom 1 keer voor, 9 kom 3 keer voor. Modus van A = 9.\nSpan B: 2 kom 1 keer voor, 4 kom 3 keer voor, 7 kom 2 keer voor. Modus van B = 4.\nAangesien 9 > 4, het Span A die hoër modus ✓' },
        { difficulty: 'Hard', question: 'ʼn Opname van 60 leerders oor gunsteling naweekaktiwiteite word op ʼn sirkelgrafiek gewys: Sport — 35%, Lees — 25%, Skermtyd — die ontbrekende skyf. Vind die aantal leerders vir elke aktiwiteit, en vind dan die modus van hierdie drie tellings.', answer: 'Sport = 21, Lees = 15, Skermtyd = 24. Geen modus nie (al drie tellings verskil)', checkMode: 'auto', correctAnswer: 'Geen modus', correctAnswers: ['Geen modus', 'geenmodus', 'geen modus'], explanation: 'Sport: 35% van 60 = 21. Lees: 25% van 60 = 15. Skermtyd (ontbrekende skyf): 100% − 35% − 25% = 40%, so 40% van 60 = 24.\nKontroleer: 21 + 15 + 24 = 60 ✓\nDie drie tellings (21, 15, 24) verskil almal, dus is daar geen modus nie ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het frekwensietabelle, staafgrafieke, sirkelgrafieke, en gemiddelde, mediaan en modus bemeester.' },
        { minScore: 15, message: 'Puik werk! Jy is redelik seker van jouself hiermee — gaan enige gemiste vrae deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die studiegids-afdelings oor grafieke en middelwaardes deur, en probeer dan weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
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
    explanation: 'Grade ÷ 360 × 100 = %\n180 ÷ 360 × 100 = 0,5 × 100 = 50% ✓\nʼn Skyf van 180° is presies die helfte van die sirkel.',
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

  // ── Q10 Easy — find the mode ──────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Vind die modus van 5, 9, 7, 9, 6.',
    answer: '9',
    checkMode: 'auto',
    correctAnswer: '9',
    explanation: 'Tel hoeveel keer elke waarde voorkom: 5 kom 1 keer voor, 9 kom 2 keer voor, 7 kom 1 keer voor, 6 kom 1 keer voor.\n9 kom die meeste voor — modus = 9 ✓',
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

  // ── Q13 Hard — mode and median of a data set ─────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Amahle het die volgende toetstellings: 60, 75, 70, 55, 70, 90, 50.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'a) Vind die modus.',
        correctAnswer: '70',
        correctAnswers: ['70'],
        explanation: 'Tel hoeveel keer elke telling voorkom: 60 kom 1 keer voor, 75 kom 1 keer voor, 70 kom 2 keer voor, 55 kom 1 keer voor, 90 kom 1 keer voor, 50 kom 1 keer voor.\n70 kom die meeste voor, dus is die modus 70 ✓',
      },
      {
        label: 'b) Vind die mediaan.',
        correctAnswer: '70',
        explanation: 'Rangskik die tellings: 50, 55, 60, 70, 70, 75, 90.\nDaar is 7 waardes, dus is die middelste (4de) waarde die mediaan.\nMediaan = 70 ✓',
      },
    ],
  },

  // ── Q14 Medium — find the mode of ages ───────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Vind die modus van hierdie ouderdomme: 11, 12, 12, 13, 11, 12.',
    answer: '12',
    checkMode: 'auto',
    correctAnswer: '12',
    explanation: 'Tel hoeveel keer elke ouderdom voorkom: 11 kom 2 keer voor, 12 kom 3 keer voor, 13 kom 1 keer voor.\n12 kom die meeste voor — modus = 12 ✓',
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
