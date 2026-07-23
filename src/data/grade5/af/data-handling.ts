import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (data handling roles) ────────────────────────────────────
// tally marks     → blue   (#2563eb)
// frequency nums  → orange (#ea580c)
// most common     → green  (#16a34a)
// least common    → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

// ─── Tally mark renderers ─────────────────────────────────────────────────────
const t5 = () =>
  `<svg width="26" height="18" viewBox="0 0 26 18" style="display:inline-block;vertical-align:middle;" xmlns="http://www.w3.org/2000/svg">` +
  `<line x1="3" y1="1" x2="3" y2="17" stroke="#2563eb" stroke-width="2.5"/>` +
  `<line x1="9" y1="1" x2="9" y2="17" stroke="#2563eb" stroke-width="2.5"/>` +
  `<line x1="15" y1="1" x2="15" y2="17" stroke="#2563eb" stroke-width="2.5"/>` +
  `<line x1="21" y1="1" x2="21" y2="17" stroke="#2563eb" stroke-width="2.5"/>` +
  `<line x1="0" y1="17" x2="24" y2="1" stroke="#2563eb" stroke-width="2.5"/>` +
  `</svg>`
const t3 = () => bl('|||')
const t2 = () => bl('||')

export const topicData: TopicData = {
  title: 'Datahantering',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Data Insamel en Organiseer',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Data is inligting wat ons oor die wêreld om ons versamel. Ons versamel data deur <strong>vrae te vra</strong>, <strong>opnames</strong> te doen, of <strong>dinge te tel</strong>. Rou data is data wat nog nie georganiseer is nie — dit is net ʼn lys van antwoorde of tellings. Om data makliker te maak om mee te werk, organiseer ons dit in ʼn <strong>telmerktabel</strong> of ʼn <strong>frekwensietabel</strong>.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('telmerke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('frekwensiegetalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('mees algemeen')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('minste algemeen')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:4px;">Rou data</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Ongeorganiseerde inligting — die oorspronklike antwoorde of tellings voordat enige sortering of groepering plaasgevind het.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Telmerk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Merk (|) wat ons maak elke keer wanneer ons een item tel. Elke vyfde telmerk sny deur die vorige vier, wat groepe van 5 maklik maak om te tel.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoeveel keer elke item voorkom. Die frekwensie is die getal wat jy neerskryf nadat jy al die telmerke in ʼn groep getel het.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Frekwensietabel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Tabel wat elke item saam met sy telmerke en frekwensie lys. Dit gee ʼn duidelike, georganiseerde opsomming van die data.</p>` +
        `</div>` +

        `</div>` +

        // ── How tally marks work ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe telmerke werk</p>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:12px;color:#1e3a8a;">Maak een merk vir elke item. Wanneer jy die <strong>vyfde</strong> item bereik, trek ʼn skuinslyn deur die vier merke voor dit. Tel groepe van 5 vinnig aan die einde.</p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:16px;align-items:center;">` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">1 item</p>` +
        `<p style="font-size:1.3em;margin:0;font-family:monospace;">${bl('|')}</p>` +
        `</div>` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">3 items</p>` +
        `<p style="font-size:1.3em;margin:0;font-family:monospace;">${bl('|||')}</p>` +
        `</div>` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">5 items</p>` +
        `<p style="font-size:1.3em;margin:0;">${t5()}</p>` +
        `</div>` +

        `<div style="text-align:center;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:6px;">8 items</p>` +
        `<p style="font-size:1.3em;margin:0;">${t5()} ${bl('|||')}</p>` +
        `</div>` +

        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Kontroleer altyd jou totaal</p>` +
        `<p style="margin:0;color:#166534;">Nadat jy jou telmerktabel voltooi het, tel al die ${or('frekwensies')} bymekaar op. Die som moet gelyk wees aan die totale aantal items waarmee jy begin het. Indien nie, gaan terug en tel weer.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: Sipho's fruit survey ──────────────────────────────────
        {
          question: 'Sipho vra 10 klasmaats wat hul gunstelingvrug is. Die antwoorde is: appel, piesang, appel, mango, piesang, appel, mango, appel, piesang, appel. Organiseer hierdie data in ʼn telmerktabel.',
          answer: 'Appel: 5 &nbsp; Piesang: 3 &nbsp; Mango: 2 &nbsp; Totaal: 10',
          steps: [
            `Lys elke <strong>verskillende vrug</strong> wat in die antwoorde voorkom. Ons het drie vrugte: appel, piesang, en mango. Teken ʼn tabel met drie kolomme — Vrug, Telmerk, Frekwensie.`,
            `Gaan deur die antwoorde <strong>een vir een</strong> en maak ʼn ${bl('telmerk')} vir elke antwoord in die korrekte ry. Werk deur die lys in volgorde: appel → appel → piesang → appel → mango → piesang → appel → mango → appel → piesang.`,
            `<strong>Appel</strong> kom <strong>5</strong> keer voor. Die vyfde merk sny deur die vier voor dit — ${bl('telmerk')}: ${t5()} &nbsp; ${or('Frekwensie')}: ${or('5')}`,
            `<strong>Piesang</strong> kom <strong>3</strong> keer voor — ${bl('telmerk')}: ${t3()} &nbsp; ${or('Frekwensie')}: ${or('3')}`,
            `<strong>Mango</strong> kom <strong>2</strong> keer voor — ${bl('telmerk')}: ${t2()} &nbsp; ${or('Frekwensie')}: ${or('2')}`,
            `<strong>Kontroleer die totaal:</strong> ${or('5')} + ${or('3')} + ${or('2')} = ${or('10')}. Dit stem ooreen met die aantal klasmaats wat Sipho gevra het. ✓` +
            `<br><br>` +
            `<table style="border-collapse:collapse;width:100%;max-width:400px;font-size:14px;">` +
            `<thead><tr style="background:#eff6ff;">` +
            `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:left;color:#1e40af;">Vrug</th>` +
            `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Telmerk</th>` +
            `<th style="border:1.5px solid #bfdbfe;padding:8px 12px;text-align:center;color:#1e40af;">Frekwensie</th>` +
            `</tr></thead><tbody>` +
            `<tr><td style="border:1px solid #e2e8f0;padding:8px 12px;">Appel</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;">${t5()}</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;font-weight:700;color:#ea580c;">${or('5')}</td></tr>` +
            `<tr style="background:#f8fafc;"><td style="border:1px solid #e2e8f0;padding:8px 12px;">Piesang</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;">${t3()}</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;font-weight:700;color:#ea580c;">${or('3')}</td></tr>` +
            `<tr><td style="border:1px solid #e2e8f0;padding:8px 12px;">Mango</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;">${t2()}</td><td style="border:1px solid #e2e8f0;padding:8px 12px;text-align:center;font-weight:700;color:#ea580c;">${or('2')}</td></tr>` +
            `<tr style="background:#f0fdf4;font-weight:700;"><td style="border:1.5px solid #bbf7d0;padding:8px 12px;">Totaal</td><td style="border:1.5px solid #bbf7d0;padding:8px 12px;text-align:center;"></td><td style="border:1.5px solid #bbf7d0;padding:8px 12px;text-align:center;color:#ea580c;">${or('10')}</td></tr>` +
            `</tbody></table>`,
          ],
        },

        // ── Example 2: Lerato's car colours ──────────────────────────────────
        {
          question: 'Lerato tel die kleure van motors wat by haar huis verbygaan — rooi: 8, blou: 5, wit: 12, silwer: 6. Watter kleur het die meeste voorgekom en watter het die minste voorgekom?',
          answer: `${gr('Wit')} het die meeste voorgekom (${gr('12')}) en ${re('blou')} het die minste voorgekom (${re('5')})`,
          steps: [
            `Kyk na die ${or('frekwensies')} vir elke kleur: rooi = ${or('8')}, blou = ${or('5')}, wit = ${or('12')}, silwer = ${or('6')}.`,
            `Om die <strong>mees algemene</strong> te vind: vergelyk al die frekwensies en vind die <strong>hoogste</strong> getal. ${or('12')} is die hoogste frekwensie. Die kleur met frekwensie ${or('12')} is <strong>wit</strong>. ${gr('Wit')} is die ${gr('mees algemene')} kleur — dit het ${gr('12')} keer voorgekom.`,
            `Om die <strong>minste algemene</strong> te vind: vergelyk al die frekwensies en vind die <strong>laagste</strong> getal. ${or('5')} is die laagste frekwensie. Die kleur met frekwensie ${or('5')} is <strong>blou</strong>. ${re('Blou')} is die ${re('minste algemene')} kleur — dit het ${re('5')} keer voorgekom.`,
            `<strong>Antwoord:</strong> ${gr('Wit')} het <strong>die meeste</strong> voorgekom (${gr('12')} keer) en ${re('blou')} het <strong>die minste</strong> voorgekom (${re('5')} keer). ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — tally marks (self) ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Waarvoor word ʼn telmerk gebruik?',
          answer: 'ʼn Telmerk word gebruik om data te tel — ons maak ʼn merk vir elke item en elke vyfde merk sny deur die vorige vier om tel makliker te maak.',
          checkMode: 'self',
        },

        // ── Q2 Easy — total cars ─────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Sipho tel altesaam 20 motors. Rooi: 8, Blou: 5, Wit: 7. Hoeveel motors was ʼn ander kleur as hierdie drie?',
          answer: '0',
          checkMode: 'auto',
          correctAnswer: '0',
          explanation: 'Rooi + Blou + Wit = 8 + 5 + 7 = 20. Totale motors = 20. 20 − 20 = 0 motors was ʼn ander kleur as hierdie drie.',
        },

        // ── Q3 Medium — total surveyed ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Lerato versamel data oor gunstelingkleure — rooi: 6, blou: 9, groen: 4, geel: 5. Hoeveel leerders is altesaam opgeneem?',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: '6 + 9 + 4 + 5 = 24 leerders is altesaam opgeneem.',
        },

        // ── Q4 Hard — swimming count and fraction ────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle versamel data van 30 leerders. 12 het sokker gekies, 8 het netbal gekies en die res het swem gekies. Hoeveel het swem gekies en watter breuk van die totaal is dit?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel leerders het swem gekies?',
              correctAnswer: '10',
              explanation: '30 − 12 − 8 = 10 leerders het swem gekies.',
            },
            {
              label: 'b) Watter breuk van die totaal het swem gekies?',
              correctAnswer: '1/3',
              correctAnswers: ['1/3', '10/30'],
              explanation: '10 uit 30 leerders het swem gekies. 10/30 = 1/3.',
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om rou data te versamel en dit stap vir stap in ʼn telmerktabel en frekwensietabel te organiseer',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — BAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bar-graphs',
      title: 'Staafgrafieke',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Staafgrafiek</strong> gebruik stawe om data voor te stel. Elke staaf verteenwoordig ʼn kategorie en die <strong>hoogte</strong> van die staaf wys die ${or('frekwensie')}. ʼn Staafgrafiek moet ʼn titel, geëtiketteerde asse, en ʼn ${or('skaal')} op die vertikale as hê.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('horisontale as')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vertikale as')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('stawe')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('skaal')}</span>` +
        `</div>` +

        // ── Parts of a bar graph ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dele van ʼn staafgrafiek</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Horisontale as')} — Wys die <strong>kategorieë</strong>. Etiketteer dit met die naam van die kategorie (byvoorbeeld: Sportsoorte, Dae van die Week). Elke kategorie kry sy eie staaf.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('Vertikale as')} — Wys die <strong>frekwensie</strong>. Etiketteer dit met wat getel word (byvoorbeeld: Aantal Leerders). Die hoogte van elke staaf word van hierdie as afgelees.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skaal')} — Getalle geskryf op die ${re('vertikale as')}. Die ${or('skaal')} moet <strong>konstant</strong> wees — die gapings tussen getalle moet gelyk wees (byvoorbeeld: tel op in 2e: 0, 2, 4, 6, 8, 10).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Stawe')} — Elke ${gr('staaf')} moet <strong>dieselfde breedte</strong> wees en stawe mag <strong>nie raak</strong> nie. Die hoogte van elke staaf wys die frekwensie vir daardie kategorie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Titel</strong> — Elke staafgrafiek moet ʼn titel hê wat beskryf wat die grafiek wys.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Skaal kies</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kyk na die <strong>hoogste frekwensie</strong> in jou data. Kies ʼn ${or('skaal')} wat ten minste tot by daardie getal gaan, en tel op in gelyke stappe (2e, 5e, of 10e). Maak seker elke staaf se hoogte kan duidelik van die ${or('skaal')} afgelees word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle doen ʼn opname in haar klas oor hul gunstelingsport. Die resultate is: sokker: 10, netbal: 8, krieket: 5, swem: 7. Beskryf hoe sy ʼn staafgrafiek moet teken.',
          answer: 'ʼn Staafgrafiek met titel "Gunstelingsport in Graad 5", horisontale as geëtiketteer Sport, vertikale as geëtiketteer Aantal Leerders, skaal wat in 2e tel van 0 tot 10, en een staaf vir elke sport op die korrekte hoogte.',
          steps: [
            `Teken ʼn ${bl('horisontale as')} en etiketteer dit <strong>Sport</strong>. Merk vier gelyk-gespasieerde posisies daarlangs — een vir elke sport: Sokker, Netbal, Krieket, Swem.`,
            `Teken ʼn ${re('vertikale as')} en etiketteer dit <strong>Aantal Leerders</strong>. Hierdie as sal die ${or('frekwensie')} wys (hoeveel leerders elke sport gekies het).`,
            `Kies ʼn ${or('skaal')} — die hoogste frekwensie is 10. Tel op in <strong>2e</strong> van 0 tot 10: 0, 2, 4, 6, 8, 10. Merk hierdie getalle eweredig op die ${re('vertikale as')}.`,
            `Teken ʼn ${gr('staaf')} vir elke sport op die korrekte hoogte. Sokker → ${gr('10')}, Netbal → ${gr('8')}, Krieket → ${gr('5')}, Swem → ${gr('7')}. Al die stawe moet dieselfde breedte wees en mag nie mekaar raak nie.`,
            `Gee die grafiek ʼn <strong>titel</strong>: <em>Gunstelingsport in Graad 5</em>. Die grafiek is nou voltooi.`,
          ],
        },
        {
          question: 'ʼn Staafgrafiek wys die aantal items wat elke dag aangeteken is — Maandag: 6, Dinsdag: 9, Woensdag: 4, Donderdag: 7, Vrydag: 8. Wat was die totale aantal aangeteken oor al vyf dae?',
          answer: `Die totaal oor al vyf dae is ${gr('34')}`,
          steps: [
            `Lees die hoogte van elke ${gr('staaf')} van die ${or('skaal')} op die ${re('vertikale as')}: Maandag = ${or('6')}, Dinsdag = ${or('9')}, Woensdag = ${or('4')}, Donderdag = ${or('7')}, Vrydag = ${or('8')}.`,
            `Tel al die waardes bymekaar: ${or('6')} + ${or('9')} + ${or('4')} + ${or('7')} + ${or('8')} = ${gr('34')}.`,
            `<strong>Antwoord:</strong> Die totale aantal aangeteken oor al vyf dae is ${gr('34')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Easy — bar graph requirements (self) ──────────────────────────
        {
          difficulty: 'Easy',
          question: 'Wat moet ʼn staafgrafiek altyd hê?',
          answer: 'ʼn Staafgrafiek moet ʼn titel, geëtiketteerde asse en ʼn konstante skaal op die vertikale as hê.',
          checkMode: 'self',
        },

        // ── Q6 Medium — difference from bar graph ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Staafgrafiek wys — Katte: 8, Honde: 14, Visse: 6, Voëls: 4. Hoeveel meer mense het honde gekies as katte?',
          answer: '6',
          checkMode: 'auto',
          correctAnswer: '6',
          explanation: '14 − 8 = 6 meer mense het honde as katte gekies.',
        },

        // ── Q7 Hard — reading between scale intervals ────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Staafgrafiek het ʼn skaal wat in 5e opgaan. Die staaf vir Maandag bereik halfpad tussen 15 en 20. Watter waarde wys die Maandag-staaf?',
          answer: '17,5',
          checkMode: 'auto',
          correctAnswer: '17,5',
          explanation: 'Halfpad tussen 15 en 20: (15 + 20) ÷ 2 = 35 ÷ 2 = 17,5.',
        },
      ],

      diagramPlaceholder:
        'Staafgrafiek wat Amahle se gunstelingsport-opname wys met horisontale as geëtiketteer Sport in blou vertikale as geëtiketteer Aantal Leerders in rooi skaal in oranje wat in 2e tel van 0 tot 10 en groen stawe vir sokker 10 netbal 8 krieket 5 swem 7',

      diagramSvg:
        '<svg viewBox="0 0 220 205" xmlns="http://www.w3.org/2000/svg"><text x="115" y="14" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunstelingsport — Graad 5</text><text x="14" y="90.5" font-size="9.5" fill="#dc2626" font-weight="700" text-anchor="middle" transform="rotate(-90 14 90.5)">Aantal Leerders</text><line x1="44" y1="26" x2="44" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="44" y1="155" x2="212" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="41" y1="155" x2="44" y2="155" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="158" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="41" y1="129.2" x2="44" y2="129.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="132.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="41" y1="103.4" x2="44" y2="103.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="106.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="41" y1="77.6" x2="44" y2="77.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="80.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="41" y1="51.8" x2="44" y2="51.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="54.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="41" y1="26.0" x2="44" y2="26.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="29.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><rect x="53" y="26.0" width="24" height="129.0" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="65" y="169" font-size="8.3" fill="#2563eb" font-weight="700" text-anchor="middle">Sokker</text><rect x="95" y="51.8" width="24" height="103.2" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="107" y="169" font-size="8.3" fill="#2563eb" font-weight="700" text-anchor="middle">Netbal</text><rect x="137" y="90.5" width="24" height="64.5" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="149" y="169" font-size="8.3" fill="#2563eb" font-weight="700" text-anchor="middle">Krieket</text><rect x="179" y="64.7" width="24" height="90.3" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="191" y="169" font-size="8.3" fill="#2563eb" font-weight="700" text-anchor="middle">Swem</text><text x="128" y="188" font-size="10.5" fill="#2563eb" font-weight="700" text-anchor="middle">Sport</text></svg>',

      videoPlaceholder:
        'Kort video wat stap vir stap wys hoe om ʼn staafgrafiek te teken met ʼn geëtiketteerde horisontale as vertikale as konstante skaal en korrek gespasieerde stawe',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — PICTOGRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pictographs',
      title: 'Prentgrafieke',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Prentgrafiek</strong> gebruik prente of simbole om data voor te stel. Elke simbool verteenwoordig ʼn sekere aantal items — dit word die ${bl('sleutel')} genoem. Kontroleer altyd die ${bl('sleutel')} voordat jy ʼn prentgrafiek lees, want een simbool kan 2, 5, of 10 items verteenwoordig. As ʼn simbool net gedeeltelik (half) geteken is, verteenwoordig dit die helfte van die ${bl('sleutel')}-waarde. Prentgrafieke moet ʼn <strong>titel</strong>, <strong>etikette</strong>, en ʼn <strong>${bl('sleutel')}</strong> hê.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sleutelwaarde')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volle simbole')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('half simbole')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('totaal')}</span>` +
        `</div>` +

        // ── Parts of a pictograph ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Dele van ʼn prentgrafiek</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Titel</strong> — Beskryf wat die prentgrafiek wys. Elke prentgrafiek moet een hê.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Etikette</strong> — Benoem elke ry of kolom sodat die leser weet aan watter kategorie elke ry simbole behoort.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Sleutel')} — Wys die waarde van een simbool. Lees altyd eers die ${bl('sleutel')}. Een simbool kan 2, 5, 10, of enige ander aantal items verteenwoordig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Half simbool')} — ʼn Simbool wat net gedeeltelik geteken is, verteenwoordig <strong>die helfte</strong> van die ${bl('sleutel')}-waarde. Byvoorbeeld, as die sleutel 2 is, dan is ʼn half simbool = 1.</p>` +
        `</div>` +

        `</div>` +

        // ── How to read a pictograph ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn prentgrafiek te lees</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stap 1: Vind die sleutel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Identifiseer die ${bl('sleutelwaarde')} — hoeveel items een simbool verteenwoordig.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Stap 2: Tel volle simbole</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die ${gr('volle simbole')} in ʼn ry. Vermenigvuldig met die ${bl('sleutelwaarde')} om hul totaal te kry.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Stap 3: Hanteer half simbole</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">As daar ʼn ${or('half simbool')} is, tel die helfte van die ${bl('sleutelwaarde')} by jou totaal.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Stap 4: Skryf die totaal</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${re('totaal')} vir ʼn ry = (${gr('volle simbole')} × ${bl('sleutelwaarde')}) + enige ${or('half simbool')}-waarde.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kontroleer altyd eers die sleutel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${bl('sleutel')} is die belangrikste deel van ʼn prentgrafiek. Sonder dit beteken die simbole niks. Kontroleer die ${bl('sleutelwaarde')} voordat jy enige simbole tel.</p>` +
        `</div>`,

      workedExamples: [
        // ── Example 1: books read ─────────────────────────────────────────────
        {
          question: 'ʼn Prentgrafiek wys boeke gelees deur leerders. Die sleutel wys dat een boeksimbool = 2 boeke. Sipho het 4 boeksimbole en Lerato het 3 en ʼn half simbole. Hoeveel boeke het elke leerder gelees?',
          answer: `Sipho het ${re('8')} boeke gelees. Lerato het ${re('7')} boeke gelees.`,
          steps: [
            `<strong>Kontroleer die ${bl('sleutel')}:</strong> een simbool = ${bl('2')} boeke. Dit is die ${bl('sleutelwaarde')} — dit vertel ons hoeveel elke simbool werd is.`,
            `<strong>Sipho — tel ${gr('volle simbole')}:</strong> Sipho het ${gr('4')} volle boeksimbole. Vermenigvuldig met die ${bl('sleutelwaarde')}: ${gr('4')} × ${bl('2')} = ${re('8')} boeke.`,
            `<strong>Lerato — tel ${gr('volle simbole')}:</strong> Lerato het ${gr('3')} volle boeksimbole. ${gr('3')} × ${bl('2')} = 6 boeke.`,
            `<strong>Lerato — hanteer die ${or('half simbool')}:</strong> Lerato het ook ${or('ʼn half simbool')}. Die helfte van die ${bl('sleutelwaarde')} = ${bl('2')} ÷ 2 = ${or('1')} boek.`,
            `<strong>Lerato se ${re('totaal')}:</strong> 6 boeke + ${or('1')} boek = ${re('7')} boeke.`,
            `<strong>Antwoord:</strong> Sipho het ${re('8')} boeke gelees. Lerato het ${re('7')} boeke gelees. ✓`,
          ],
        },

        // ── Example 2: drawing symbols ────────────────────────────────────────
        {
          question: 'Thabo wil wys dat 15 leerders pizza gekies het in ʼn prentgrafiek waar elke simbool 5 leerders verteenwoordig. Hoeveel simbole moet hy teken?',
          answer: `Thabo moet ${gr('3')} volle simbole vir pizza teken.`,
          steps: [
            `<strong>Identifiseer die ${bl('sleutelwaarde')}:</strong> elke simbool = ${bl('5')} leerders.`,
            `<strong>Deel</strong> die aantal leerders deur die ${bl('sleutelwaarde')}: ${re('15')} ÷ ${bl('5')} = ${gr('3')}.`,
            `<strong>Kontroleer:</strong> ${gr('3')} × ${bl('5')} = ${re('15')} ✓ — geen half simbool nodig nie omdat 15 eweredig deel.`,
            `<strong>Antwoord:</strong> Thabo moet ${gr('3')} ${gr('volle simbole')} vir pizza teken. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Easy — pictograph symbols ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'In ʼn prentgrafiek verteenwoordig elke simbool 5 leerders. Thabo het 3 simbole langs sy naam. Hoeveel leerders verteenwoordig dit?',
          answer: '15',
          checkMode: 'auto',
          correctAnswer: '15',
          explanation: '3 simbole × 5 leerders per simbool = 15 leerders.',
        },

        // ── Q9 Medium — half symbol in pictograph ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Prentgrafiek wys — Sipho: 4 simbole, Lerato: 2 en ʼn half simbole, Amahle: 3 simbole. Die sleutel wys elke simbool = 4 boeke. Hoeveel boeke het Lerato gelees?',
          answer: '10',
          checkMode: 'auto',
          correctAnswer: '10',
          explanation: 'Lerato het 2 volle simbole en ʼn half simbool.\n2 volle simbole: 2 × 4 = 8 boeke.\nHalf simbool: 4 ÷ 2 = 2 boeke.\nTotaal: 8 + 2 = 10 boeke.',
        },

        // ── Q10 Hard — drawing pictograph with remainder (self) ──────────────
        {
          difficulty: 'Hard',
          question: 'Thabo wil 22 leerders in ʼn prentgrafiek wys waar elke simbool = 5 leerders. Hoeveel simbole moet hy teken en sal daar ʼn half simbool wees?',
          answer: '22 gedeel deur 5 = 4 oor 2. Hy teken 4 volle simbole en ʼn half simbool aangesien 2 naby aan die helfte van 5 is. Hy wys 4 en ʼn half simbole.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'Prentgrafiek wat boeke gelees deur Sipho 4 volle simbole en Lerato 3 en ʼn half simbole wys met sleutelwaarde 2 in blou volle simbole in groen half simbool in oranje en totale in rooi',

      diagramSvg:
        '<svg viewBox="0 0 200 100" xmlns="http://www.w3.org/2000/svg"><text x="100" y="13" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Boeke Gelees — Sipho &amp; Lerato</text><text x="6" y="28" font-size="10" fill="#0f1f3d" font-weight="700">Sleutel:</text><circle cx="42" cy="25" r="5" fill="#16a34a"/><text x="50" y="28" font-size="10" fill="#2563eb" font-weight="700">= 2 boeke</text><line x1="6" y1="34" x2="194" y2="34" stroke="#9ca3af" stroke-width="1"/><text x="6" y="54" font-size="10.5" fill="#0f1f3d" font-weight="700">Sipho</text><circle cx="70" cy="50" r="6" fill="#16a34a"/><circle cx="86" cy="50" r="6" fill="#16a34a"/><circle cx="102" cy="50" r="6" fill="#16a34a"/><circle cx="118" cy="50" r="6" fill="#16a34a"/><text x="170" y="54" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">8</text><line x1="6" y1="64" x2="194" y2="64" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="6" y="84" font-size="10.5" fill="#0f1f3d" font-weight="700">Lerato</text><circle cx="70" cy="80" r="6" fill="#16a34a"/><circle cx="86" cy="80" r="6" fill="#16a34a"/><circle cx="102" cy="80" r="6" fill="#16a34a"/><path d="M 118,74 A 6,6 0 0 0 118,86 Z" fill="#ea580c"/><circle cx="118" cy="80" r="6" fill="none" stroke="#ea580c" stroke-width="1.2"/><text x="170" y="84" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">7</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn prentgrafiek te lees deur die sleutelwaarde te kontroleer volle simbole te tel en half simbole te hanteer om totale te vind',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — MEAN, MEDIAN AND MODE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mean-median-mode',
      title: 'Modus (Met ʼn Blik op Mediaan en Gemiddelde)',
      icon: '📊',
      explanation:
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:16px;padding:12px 16px;background:#faf5ff;border:1.5px solid #d8b4fe;border-radius:10px;">` +
        `<span style="font-size:18px;line-height:1;">🔭</span>` +
        `<p style="margin:0;font-size:14px;color:#6b21a8;"><strong>CAPS Graad 5-fokus:</strong> die ${bl('modus')} — die waarde wat die meeste voorkom — is die enigste maatstaf van sentrale neiging wat in Graad 5 vereis word. Die ${gr('mediaan')} word in <strong>Graad 6</strong> bekendgestel, en die ${or('gemiddelde')} kom eers later. Mediaan en gemiddelde word hieronder as verryking ingesluit, aangesien hulle natuurlik op modus voortbou.</p>` +
        `</div>` +
        `<p style="margin-bottom:16px;">Die ${bl('modus')}, ${gr('mediaan')}, en ${or('gemiddelde')} is drie maniere om die middelste of mees tipiese waarde in ʼn datastel te beskryf. Hierdie word <strong>maatstawwe van sentrale neiging</strong> genoem omdat hulle ons vertel oor die middelpunt van die data.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('modus')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('mediaan')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gemiddelde')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('datawaardes')}</span>` +
        `</div>` +

        // ── Three measures ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie maatstawwe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Modus</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde wat <strong>die meeste</strong> in die datastel voorkom. Daar kan meer as een modus wees as twee of meer waardes gelyk staan vir die hoogste telling.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Mediaan</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die <strong>middelste waarde</strong> wanneer al die waardes van kleinste na grootste gerangskik word. As daar ʼn ewe aantal waardes is, is die mediaan die gemiddelde van die twee middelste waardes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gemiddelde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die <strong>gemiddeld</strong> — tel al die waardes bymekaar en deel deur hoeveel waardes daar is. Die gemiddelde gee ʼn regverdige deel as al die waardes gelyk was.</p>` +
        `</div>` +

        `</div>` +

        // ── How to calculate each ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om elke maatstaf te bereken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">M</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Modus')} — Tel hoeveel keer elke waarde voorkom. Die waarde wat die meeste voorkom is die ${bl('modus')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">M</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Mediaan')} — Rangskik al die waardes van kleinste na grootste. Vind die middelste waarde. As daar twee middelste waardes is, tel hulle bymekaar en deel deur 2.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">M</span>` +
        `<p style="margin:0;font-size:14px;">${or('Gemiddelde')} — Tel al die waardes bymekaar om ʼn totaal te kry. Deel die totaal deur hoeveel waardes daar is.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou: Modus, Mediaan, Gemiddelde</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${bl('modus')} is die mees <strong>gewilde</strong> waarde. Die ${gr('mediaan')} is die <strong>middelste</strong> waarde na sortering. Die ${or('gemiddelde')} is die <strong>gemiddeld</strong> — tel dan deel. Al drie word maatstawwe van sentrale neiging genoem.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: `Vind die ${bl('modus')} van hierdie datastel: ${re('3')}, ${re('7')}, ${re('5')}, ${re('3')}, ${re('9')}, ${re('3')}, ${re('7')}.`,
          answer: `Die ${bl('modus')} is ${bl('3')}`,
          steps: [
            `Tel hoeveel keer elke getal in die datastel voorkom: ${re('3')}, ${re('7')}, ${re('5')}, ${re('3')}, ${re('9')}, ${re('3')}, ${re('7')}.`,
            `${re('3')} kom <strong>3 keer</strong> voor. ${re('7')} kom <strong>2 keer</strong> voor. ${re('5')} kom <strong>1 keer</strong> voor. ${re('9')} kom <strong>1 keer</strong> voor.`,
            `Die ${bl('modus')} is die waarde wat die meeste voorkom. ${re('3')} het die hoogste telling (3 keer).`,
            `<strong>Antwoord:</strong> Die ${bl('modus')} is ${bl('3')} omdat dit die meeste voorkom. ✓`,
          ],
        },
        {
          question: `Vind die ${gr('mediaan')} van hierdie datastel: ${re('8')}, ${re('3')}, ${re('6')}, ${re('1')}, ${re('9')}.`,
          answer: `Die ${gr('mediaan')} is ${gr('6')}`,
          steps: [
            `Rangskik die waardes van kleinste na grootste: ${re('1')}, ${re('3')}, ${re('6')}, ${re('8')}, ${re('9')}.`,
            `Tel hoeveel waardes daar is — daar is <strong>5</strong> waardes, dus is die middelste die <strong>3de waarde</strong>.`,
            `Die 3de waarde in die gerangskikte lys is ${re('6')}.`,
            `<strong>Antwoord:</strong> Die ${gr('mediaan')} is ${gr('6')}. ✓`,
          ],
        },
        {
          question: `Vind die ${or('gemiddelde')} van hierdie datastel: ${re('4')}, ${re('8')}, ${re('6')}, ${re('10')}, ${re('2')}.`,
          answer: `Die ${or('gemiddelde')} is ${or('6')}`,
          steps: [
            `Tel al die waardes bymekaar: ${re('4')} + ${re('8')} + ${re('6')} + ${re('10')} + ${re('2')} = <strong>30</strong>.`,
            `Tel hoeveel waardes daar is — daar is <strong>5</strong> waardes.`,
            `Deel: <strong>30</strong> ÷ 5 = ${or('6')}.`,
            `<strong>Antwoord:</strong> Die ${or('gemiddelde')} is ${or('6')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q11 Easy — mode ──────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die modus van hierdie datastel: 2, 5, 3, 5, 7, 5, 2.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Tel hoeveel keer elke waarde voorkom:\n2 kom 2 keer voor, 3 kom 1 keer voor, 5 kom 3 keer voor, 7 kom 1 keer voor.\n5 kom die meeste voor, dus is die modus 5.',
        },

        // ── Q12 Medium — median ──────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die mediaan van hierdie datastel: 12, 7, 3, 9, 15.',
          answer: '9',
          checkMode: 'auto',
          correctAnswer: '9',
          explanation: 'Rangskik van kleinste na grootste: 3, 7, 9, 12, 15.\nDaar is 5 waardes, dus is die middelste (3de) waarde 9.\nDie mediaan is 9.',
        },

        // ── Q13 Hard — mode ──────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die modus van hierdie toetstellings: 60, 75, 80, 55, 75, 90, 75.',
          answer: '75',
          checkMode: 'auto',
          correctAnswer: '75',
          explanation: 'Tel hoeveel keer elke telling voorkom: 60 kom 1 keer voor, 75 kom 3 keer voor, 80 kom 1 keer voor, 55 kom 1 keer voor, 90 kom 1 keer voor.\n75 kom die meeste voor, dus is die modus 75.',
        },
      ],

      diagramPlaceholder:
        'Drie panele wat modus in blou wys met 3 as die mees algemene waarde mediaan in groen met gerangskikte datastel en middelste waarde uitgelig en gemiddelde in oranje wat die optelling en delingstappe wys',

      diagramSvg:
        '<svg viewBox="0 0 210 125" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="18" width="64" height="100" rx="8" fill="none" stroke="#2563eb" stroke-width="1.5"/><rect x="73" y="18" width="64" height="100" rx="8" fill="none" stroke="#16a34a" stroke-width="1.5"/><rect x="144" y="18" width="64" height="100" rx="8" fill="none" stroke="#ea580c" stroke-width="1.5"/><text x="34" y="30" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">MODUS</text><text x="105" y="30" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">MEDIAAN</text><text x="176" y="30" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">GEMIDDELDE</text><circle cx="13" cy="46" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="13" y="49" font-size="7.5" fill="#ffffff" font-weight="700" text-anchor="middle">3</text><circle cx="29" cy="46" r="7" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="29" y="49" font-size="7.5" fill="#374151" font-weight="700" text-anchor="middle">7</text><circle cx="45" cy="46" r="7" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="45" y="49" font-size="7.5" fill="#374151" font-weight="700" text-anchor="middle">5</text><circle cx="61" cy="46" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="61" y="49" font-size="7.5" fill="#ffffff" font-weight="700" text-anchor="middle">3</text><circle cx="13" cy="64" r="7" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="13" y="67" font-size="7.5" fill="#374151" font-weight="700" text-anchor="middle">9</text><circle cx="29" cy="64" r="7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1"/><text x="29" y="67" font-size="7.5" fill="#ffffff" font-weight="700" text-anchor="middle">3</text><circle cx="45" cy="64" r="7" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="45" y="67" font-size="7.5" fill="#374151" font-weight="700" text-anchor="middle">7</text><text x="34" y="90" font-size="11.5" fill="#2563eb" font-weight="700" text-anchor="middle">Modus = 3</text><text x="34" y="102" font-size="6.1" fill="#6b7280" text-anchor="middle">(mees algemene waarde)</text><circle cx="80" cy="50" r="6" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="80" y="53" font-size="7" fill="#374151" font-weight="700" text-anchor="middle">1</text><circle cx="93" cy="50" r="6" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="93" y="53" font-size="7" fill="#374151" font-weight="700" text-anchor="middle">3</text><circle cx="106" cy="50" r="7" fill="#16a34a" stroke="#0f1f3d" stroke-width="1"/><text x="106" y="53" font-size="7.5" fill="#ffffff" font-weight="700" text-anchor="middle">6</text><circle cx="119" cy="50" r="6" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="119" y="53" font-size="7" fill="#374151" font-weight="700" text-anchor="middle">8</text><circle cx="132" cy="50" r="6" fill="#ffffff" stroke="#9ca3af" stroke-width="1"/><text x="132" y="53" font-size="7" fill="#374151" font-weight="700" text-anchor="middle">9</text><text x="106" y="38" font-size="6.3" fill="#16a34a" font-weight="700" text-anchor="middle">middelste</text><text x="105" y="90" font-size="11.5" fill="#16a34a" font-weight="700" text-anchor="middle">Mediaan = 6</text><text x="105" y="102" font-size="6.1" fill="#6b7280" text-anchor="middle">(middelste waarde)</text><text x="176" y="46" font-size="7.3" fill="#0f1f3d" font-weight="700" text-anchor="middle">4+8+6+10+2</text><text x="176" y="60" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="middle">= 30</text><text x="176" y="76" font-size="7.8" fill="#0f1f3d" font-weight="700" text-anchor="middle">30 &#247; 5 = 6</text><text x="176" y="96" font-size="11.5" fill="#ea580c" font-weight="700" text-anchor="middle">Gemiddelde = 6</text><text x="176" y="108" font-size="6.1" fill="#6b7280" text-anchor="middle">(totaal &#247; aantal)</text></svg>',

      videoPlaceholder:
        'Kort video wat modus mediaan en gemiddelde verduidelik met uitgewerkte voorbeelde wat wys hoe om die mees algemene waarde die middelste waarde en die gemiddeld van ʼn datastel te vind',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — INTERPRETING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'interpreting-data',
      title: 'Data Interpreteer',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Data interpreteer beteken om ʼn grafiek of tabel te lees en die inligting te gebruik om vrae te beantwoord en gevolgtrekkings te maak. Wanneer jy data interpreteer, lees altyd eers noukeurig die titel, etikette en skaal voordat jy vrae beantwoord. Soek na patrone — watter kategorie is die ${gr('hoogste')} of ${re('laagste')}, neem waardes toe of af, wat vertel die data ons in geheel. Gee altyd jou antwoord binne die konteks van die vraag.</p>` +

        // ── Colour key ───────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('hoogste waarde')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('laagste waarde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('totale')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('breuke')}</span>` +
        `</div>` +

        // ── Steps for interpreting data ──────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om data te interpreteer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Lees die titel, etikette en skaal</strong> — Voordat jy enige vraag beantwoord, identifiseer waaroor die grafiek of tabel gaan en wat elke as of kolom verteenwoordig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vind die hoogste waarde')} — Soek die langste staaf, die grootste getal, of die kategorie met die meeste. Dit is die ${gr('maksimum')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('Vind die laagste waarde')} — Soek die kortste staaf, die kleinste getal, of die kategorie met die minste. Dit is die ${re('minimum')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Bereken totale')} — Tel al die waardes bymekaar om die ${or('totaal')} te vind. Kontroleer jou optelling noukeurig.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Druk uit as ʼn breuk')} — Wanneer gevra word watter breuk ʼn kategorie van die geheel is, skryf die kategoriewaarde oor die ${or('totaal')}: deel ÷ ${or('totaal')} = ${bl('breuk')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Antwoord altyd binne konteks</p>` +
        `<p style="margin:0;color:#166534;">Gee altyd jou antwoord binne die konteks van die vraag. Skryf nie net ʼn getal nie — skryf ʼn sin wat die kategorienaam insluit en wat die getal beteken. Skryf byvoorbeeld "Vrydag het die meeste afwesighede gehad met 8" eerder as net "8".</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Staafgrafiek wys die aantal leerders wat elke dag afwesig was — Maandag: 3, Dinsdag: 7, Woensdag: 2, Donderdag: 5, Vrydag: 8. Op watter dag was die meeste leerders afwesig en wat was die totale afwesighede vir die week?',
          answer: `${gr('Vrydag')} het die meeste afwesighede gehad met ${gr('8')} leerders. Die totale afwesighede vir die week was ${or('25')}.`,
          steps: [
            `Lees die data van die staafgrafiek: Maandag = 3, Dinsdag = 7, Woensdag = ${re('2')}, Donderdag = 5, Vrydag = ${gr('8')}.`,
            `${gr('Soek die hoogste staaf')} — vergelyk al die waardes: 3, 7, ${re('2')}, 5, ${gr('8')}. Die ${gr('hoogste')} waarde is ${gr('8')}, wat aan Vrydag behoort. Vrydag het die ${gr('meeste afwesighede')} gehad.`,
            `Tel al die waardes bymekaar om die ${or('totaal')} te vind: 3 + 7 + ${re('2')} + 5 + ${gr('8')} = ${or('25')} afwesighede vir die week.`,
            `<strong>Antwoord:</strong> ${gr('Vrydag')} het die meeste afwesighede gehad met ${gr('8')} leerders. Die totale afwesighede vir die week was ${or('25')}.`,
          ],
        },
        {
          question: 'ʼn Opname wys dat 30 leerders somer verkies, 12 winter verkies en 18 lente verkies. Watter breuk van leerders verkies winter?',
          answer: `${bl('1/5')} van die leerders verkies winter.`,
          steps: [
            `Vind die ${or('totale')} aantal leerders: 30 + ${re('12')} + 18 = ${or('60')} leerders altesaam.`,
            `Identifiseer die aantal wat winter verkies: ${re('12')} leerders verkies winter.`,
            `Skryf die ${bl('breuk')}: winter ÷ totaal = ${re('12')} ÷ ${or('60')} = ${bl('12/60')}.`,
            `Vereenvoudig die ${bl('breuk')}: ${bl('12/60')} = ${bl('1/5')}. (Deel albei deur 12: 12 ÷ 12 = 1, 60 ÷ 12 = 5.)`,
            `<strong>Antwoord:</strong> ${bl('1/5')} van die leerders verkies winter. Een vyfde van die leerders verkies winter. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q14 Medium — most and least rainfall ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Grafiek wys reënval in mm — Jan: 40, Feb: 25, Mrt: 60, Apr: 35. Watter maand het die meeste reën gehad en watter het die minste gehad?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Watter maand het die meeste reën gehad?',
              correctAnswer: 'Maart',
              correctAnswers: ['Maart', 'Mrt'],
              explanation: 'Die hoogste waarde is 60 mm, wat aan Maart behoort. Maart het die meeste reën gehad.',
            },
            {
              label: 'b) Watter maand het die minste reën gehad?',
              correctAnswer: 'Februarie',
              correctAnswers: ['Februarie', 'Feb'],
              explanation: 'Die laagste waarde is 25 mm, wat aan Februarie behoort. Februarie het die minste reën gehad.',
            },
          ],
        },

        // ── Q15 Hard — fraction and percentage from survey ───────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Opname van 40 leerders wys dat 15 lees verkies, 10 sport verkies en die res kuns verkies. Watter breuk verkies kuns en watter persentasie verkies lees?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Watter breuk van leerders verkies kuns?',
              correctAnswer: '3/8',
              correctAnswers: ['3/8', '15/40'],
              explanation: 'Leerders wat kuns verkies: 40 − 15 − 10 = 15.\nBreuk = 15/40 = 3/8.',
            },
            {
              label: 'b) Watter persentasie verkies lees?',
              correctAnswer: '37,5%',
              correctAnswers: ['37.5%', '37.5'],
              explanation: '15 uit 40 verkies lees.\nPersentasie = (15 ÷ 40) × 100 = 37,5%.',
            },
          ],
        },
      ],

      diagramPlaceholder:
        'Staafgrafiek wat leerder-afwesighede per dag wys Maandag 3 Dinsdag 7 Woensdag 2 in rooi Donderdag 5 Vrydag 8 in groen met totaal 25 in oranje en breukpaneel wat 12 uit 60 gelyk aan 1/5 in blou wys',

      diagramSvg:
        '<svg viewBox="0 0 220 205" xmlns="http://www.w3.org/2000/svg"><text x="110" y="13" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Leerder-afwesighede Hierdie Week</text><line x1="30" y1="26" x2="30" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="30" y1="120" x2="210" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="27" y1="120" x2="30" y2="120" stroke="#9ca3af" stroke-width="1"/><text x="24" y="123" font-size="8" fill="#6b7280" text-anchor="end">0</text><line x1="27" y1="96.5" x2="30" y2="96.5" stroke="#9ca3af" stroke-width="1"/><text x="24" y="99.5" font-size="8" fill="#6b7280" text-anchor="end">2</text><line x1="27" y1="73" x2="30" y2="73" stroke="#9ca3af" stroke-width="1"/><text x="24" y="76" font-size="8" fill="#6b7280" text-anchor="end">4</text><line x1="27" y1="49.5" x2="30" y2="49.5" stroke="#9ca3af" stroke-width="1"/><text x="24" y="52.5" font-size="8" fill="#6b7280" text-anchor="end">6</text><line x1="27" y1="26" x2="30" y2="26" stroke="#9ca3af" stroke-width="1"/><text x="24" y="29" font-size="8" fill="#6b7280" text-anchor="end">8</text><rect x="38" y="84.75" width="20" height="35.25" fill="#94a3b8" stroke="#0f1f3d" stroke-width="1.5"/><text x="48" y="134" font-size="8.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ma</text><rect x="74" y="37.75" width="20" height="82.25" fill="#94a3b8" stroke="#0f1f3d" stroke-width="1.5"/><text x="84" y="134" font-size="8.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Di</text><rect x="110" y="96.5" width="20" height="23.5" fill="#dc2626" stroke="#0f1f3d" stroke-width="1.5"/><text x="120" y="134" font-size="8.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Wo</text><rect x="146" y="61.25" width="20" height="58.75" fill="#94a3b8" stroke="#0f1f3d" stroke-width="1.5"/><text x="156" y="134" font-size="8.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Do</text><rect x="182" y="26" width="20" height="94" fill="#16a34a" stroke="#0f1f3d" stroke-width="1.5"/><text x="192" y="134" font-size="8.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Vr</text><text x="110" y="148" font-size="10.5" fill="#ea580c" font-weight="700" text-anchor="middle">Totaal = 25</text><line x1="10" y1="156" x2="210" y2="156" stroke="#e2e8f0" stroke-width="1"/><text x="110" y="166" font-size="7.5" fill="#6b7280" text-anchor="middle">12 uit 60 leerders verkies winter</text><text x="85" y="180" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><line x1="72" y1="186" x2="98" y2="186" stroke="#2563eb" stroke-width="2"/><text x="85" y="200" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">60</text><text x="108" y="190" font-size="15" fill="#0f1f3d" font-weight="700" text-anchor="middle">=</text><text x="132" y="180" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">1</text><line x1="122" y1="186" x2="142" y2="186" stroke="#2563eb" stroke-width="2"/><text x="132" y="200" font-size="15" fill="#2563eb" font-weight="700" text-anchor="middle">5</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn staafgrafiek en datatabel te interpreteer deur die titel etikette en skaal te lees die hoogste en laagste waardes te identifiseer totale te bereken en waardes as breuke uit te druk',
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Data Insamel en Organiseer (0-3) ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Nomvula vra 12 leerders hoe hulle skool toe reis. Sy skryf neer: loop, taxi, loop, motor, loop, taxi, motor, loop, taxi, loop, motor, loop. Hoeveel leerders het gesê hulle loop skool toe?',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6'],
          explanation: 'Tel elke keer wat "loop" in die lys voorkom: loop, loop, loop, loop, loop, loop = 6 leerders loop skool toe.',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Telmerktabel wys die aantal leerders wat elke troeteldier gekies het: Hond = ⁙| (6), Kat = |||| (4), Voël = ||| (3). Wat is die totale aantal leerders wat gevra is?',
          checkMode: 'auto',
          correctAnswer: '13',
          correctAnswers: ['13'],
          explanation: 'Tel die frekwensies bymekaar: 6 + 4 + 3 = 13 leerders is gevra.',
        },
        {
          difficulty: 'Easy',
          question: 'In ʼn telmerktabel word een groep van 5 telmerke plus 2 ekstra enkelmerke langs "Druiwe" geteken. Watter frekwensie moet vir druiwe neergeskryf word?',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7'],
          explanation: 'ʼn Volle groep van 5 telmerke is gelyk aan 5. As 2 ekstra enkelmerke bygetel word: 5 + 2 = 7.',
        },
        {
          difficulty: 'Easy',
          question: 'Verduidelik waarom elke vyfde telmerk deur die vorige vier merke getrek word in plaas daarvan om net nog ʼn reguit lyn te wees.',
          answer: 'Deur die vyfde merk as ʼn skuinslyn deur die ander vier te trek, word die telmerke in groepe van 5 georganiseer. Dit maak dit baie vinniger om ʼn groot aantal telmerke aan die einde te tel — jy kan in 5e tel en dan enige ekstra enkelmerke bytel, in plaas daarvan om elke merk een vir een te tel.',
          checkMode: 'self',
        },

        // ── Staafgrafieke (4-7) — DIAGRAM BLOK ──────────────────────────────
        // Gedeelde staafgrafiek: "Gunsteling Troeteldiere van Graad 5 Leerders"
        // Kategorieë (x-as): Honde, Katte, Visse, Voëls
        // Waardes (y-as, Aantal Leerders): Honde = 12, Katte = 9, Visse = 4, Voëls = 7
        // Skaal: tel in 2e van 0 tot 12
        {
          difficulty: 'Easy',
          question: 'Volgens die staafgrafiek hierbo getiteld "Gunsteling Troeteldiere van Graad 5 Leerders", wat Honde = 12, Katte = 9, Visse = 4 en Voëls = 7 leerders wys, hoeveel leerders het Visse as hul gunsteling troeteldier gekies?',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4'],
          explanation: 'As jy die hoogte van die Visse-staaf op die grafiek lees, bereik dit 4 op die skaal. Dus het 4 leerders Visse gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Troeteldiere</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Honde</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Katte</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Visse</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Voëls</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Volgens die staafgrafiek hierbo, watter troeteldier is deur meer leerders gekies: Katte of Voëls?',
          checkMode: 'auto',
          correctAnswer: 'Katte',
          correctAnswers: ['Katte', 'katte'],
          explanation: 'Katte = 9 leerders en Voëls = 7 leerders. Aangesien 9 groter is as 7, is Katte deur meer leerders gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Troeteldiere</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Honde</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Katte</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Visse</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Voëls</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die staafgrafiek hierbo, hoeveel meer leerders het Honde gekies as Visse?',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'Honde = 12 en Visse = 4. Die verskil is 12 − 4 = 8 meer leerders het Honde as Visse gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Troeteldiere</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Honde</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Katte</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Visse</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Voëls</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die staafgrafiek hierbo, hoeveel leerders altesaam het Katte of Voëls as hul gunsteling troeteldier gekies?',
          checkMode: 'auto',
          correctAnswer: '16',
          correctAnswers: ['16'],
          explanation: 'Katte = 9 en Voëls = 7. Tel dit bymekaar: 9 + 7 = 16 leerders het Katte of Voëls gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Troeteldiere</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="133.2" x2="34" y2="133.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="136.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="111.3" x2="34" y2="111.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="114.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="89.5" x2="34" y2="89.5" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="92.5" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="67.7" x2="34" y2="67.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="70.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="45.8" x2="34" y2="45.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="48.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Honde</text><rect x="90.8" y="56.8" width="22" height="98.2" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Katte</text><rect x="133.2" y="111.3" width="22" height="43.7" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Visse</text><rect x="175.8" y="78.6" width="22" height="76.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Voëls</text></svg>',
        },

        // ── Prentgrafieke (8-11) — DIAGRAM BLOK ─────────────────────────────
        // Gedeelde prentgrafiek: "Boeke Gelees Gedurende die Week"
        // Sleutel: 1 boeksimbool = 2 boeke
        // Rye: Maandag = 5 simbole (10 boeke), Dinsdag = 3 simbole (6 boeke),
        //      Woensdag = 2 en ʼn half simbole (5 boeke), Donderdag = 4 simbole (8 boeke)
        {
          difficulty: 'Medium',
          question: 'Die prentgrafiek hierbo, "Boeke Gelees Gedurende die Week", het ʼn sleutel waar 1 boeksimbool = 2 boeke. Maandag wys 5 simbole. Hoeveel boeke is op Maandag gelees?',
          checkMode: 'auto',
          correctAnswer: '10',
          correctAnswers: ['10'],
          explanation: 'Elke simbool verteenwoordig 2 boeke. Maandag het 5 simbole, dus 5 × 2 = 10 boeke is op Maandag gelees.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Boeke Gelees Gedurende die Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 boeke</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Maandag</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Dinsdag</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Woensdag</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Donderdag</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, Woensdag wys 2 volle simbole en 1 half simbool. Hoeveel boeke is op Woensdag gelees?',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5'],
          explanation: '2 volle simbole = 2 × 2 = 4 boeke. ʼn Half simbool = die helfte van 2 = 1 boek. Totaal: 4 + 1 = 5 boeke is op Woensdag gelees.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Boeke Gelees Gedurende die Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 boeke</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Maandag</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Dinsdag</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Woensdag</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Donderdag</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, Dinsdag wys 3 simbole en Donderdag wys 4 simbole. Hoeveel meer boeke is op Donderdag as op Dinsdag gelees?',
          checkMode: 'auto',
          correctAnswer: '2',
          correctAnswers: ['2'],
          explanation: 'Dinsdag: 3 × 2 = 6 boeke. Donderdag: 4 × 2 = 8 boeke. Verskil: 8 − 6 = 2 meer boeke is op Donderdag gelees.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Boeke Gelees Gedurende die Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 boeke</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Maandag</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Dinsdag</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Woensdag</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Donderdag</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, hoeveel boeke is altesaam op Maandag en Donderdag saam gelees?',
          checkMode: 'auto',
          correctAnswer: '18',
          correctAnswers: ['18'],
          explanation: 'Maandag = 5 × 2 = 10 boeke. Donderdag = 4 × 2 = 8 boeke. Totaal: 10 + 8 = 18 boeke.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11" fill="#0f1f3d" font-weight="700" text-anchor="middle">Boeke Gelees Gedurende die Week</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 2 boeke</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Maandag</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Dinsdag</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Woensdag</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Donderdag</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },

        // ── Modus en Mediaan (12-15) ─────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die modus van hierdie datastel: 4, 7, 4, 9, 4, 2.',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4'],
          explanation: 'Tel hoe gereeld elke waarde voorkom: 4 kom 3 keer voor, 7 kom 1 keer voor, 9 kom 1 keer voor, 2 kom 1 keer voor. Aangesien 4 die meeste voorkom, is die modus 4.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die mediaan van hierdie datastel: 11, 4, 8, 15, 6.',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'Rangskik eers die waardes van kleinste na grootste: 4, 6, 8, 11, 15. Daar is 5 waardes, dus is die middelste (3de) waarde die mediaan: 8.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die modus van hierdie datastel: 9, 14, 7, 10, 14.',
          checkMode: 'auto',
          correctAnswer: '14',
          correctAnswers: ['14'],
          explanation: 'Tel hoeveel keer elke waarde voorkom: 9 kom 1 keer voor, 14 kom 2 keer voor, 7 kom 1 keer voor, 10 kom 1 keer voor. Aangesien 14 die meeste voorkom, is die modus 14.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Datastel is: 3, 8, 5, 12. Het hierdie datastel ʼn modus? Verduidelik jou antwoord.',
          answer: 'Nee, hierdie datastel het nie ʼn modus nie. Elke waarde (3, 8, 5, en 12) kom presies een keer voor, dus kom geen waarde meer gereeld voor as ʼn ander nie. Daar is geen enkele waarde wat "die meeste" voorkom nie, dus is daar geen modus vir hierdie datastel nie.',
          checkMode: 'self',
        },

        // ── Data Interpreteer — enkelstap-redenering (16-17) ────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Opname oor gunsteling roomysgeure gee hierdie resultate: Vanielje kom 9 keer voor, Sjokolade kom 6 keer voor, Aarbei kom 9 keer voor. Zanele sê die modus is 9. Verduidelik wat verkeerd is met Zanele se stelling en gee die korrekte modus(se).',
          answer: 'Zanele is verkeerd. Die modus moet die datawaarde wees wat die meeste voorkom — in hierdie geval ʼn geursnaam, nie ʼn frekwensie nie. Vanielje en Aarbei kom albei 9 keer voor, wat die hoogste frekwensie is, dus is albei modusse. Die korrekte antwoord is dat hierdie datastel twee modusse het: Vanielje en Aarbei (dit is bimodaal). Die getal 9 is die frekwensie, nie die modus self nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Klas A het ʼn modustoetstelling van 68 aangeteken (hierdie telling het die meeste voorgekom) en Klas B het ʼn modustoetstelling van 74 aangeteken. Wat vertel die vergelyking van hierdie twee modusse ons oor die twee klasse se mees algemene telling?',
          checkMode: 'auto',
          correctAnswer: 'Klas B se mees algemene toetstelling was hoër as Klas A s\'n',
          correctAnswers: ['Klas B se mees algemene toetstelling was hoër as Klas A s\'n', 'Klas B se mees algemene telling was hoër', 'Klas B se tipiese telling was hoër as Klas A s\'n'],
          explanation: 'Die modus vertel ons watter toetstelling die meeste vir elke klas voorgekom het. Aangesien 74 groter is as 68, was Klas B se mees algemene (mees voorkomende) toetstelling hoër as Klas A s\'n.',
        },

        // ── Data Interpreteer — multi-stap toepassing en breuke (18-19) ─────
        {
          difficulty: 'Hard',
          question: 'Nomvula doen ʼn opname onder 20 leerders oor hul gunsteling skoolklub. 8 kies Sokkerklub, 5 kies Skaakklub, en die res kies Leesklub. Hoeveel leerders het Leesklub gekies, en watter breuk van die hele groep is dit?',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel leerders het Leesklub gekies?',
              correctAnswer: '7',
              correctAnswers: ['7'],
              explanation: '20 − 8 − 5 = 7 leerders het Leesklub gekies.',
            },
            {
              label: 'b) Watter breuk van die 20 leerders het Leesklub gekies?',
              correctAnswer: '7/20',
              correctAnswers: ['7/20'],
              explanation: '7 uit 20 leerders het Leesklub gekies, wat die breuk 7/20 gee. Hierdie breuk kan nie verder vereenvoudig word nie, aangesien 7 en 20 geen gemeenskaplike faktore anders as 1 deel nie.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Leerder skryf die aantal plakkers wat elke dag van Maandag tot Vrydag versamel is neer: 6, 9, 4, 7, 9. Sy sê die modus is 6, omdat 6 die eerste getal in die lys is. Is sy korrek? Indien nie, vind die korrekte modus.',
          checkMode: 'auto',
          correctAnswer: '9',
          correctAnswers: ['9'],
          explanation: 'Sy is verkeerd. Die modus is die waarde wat die meeste voorkom, nie die eerste waarde in die lys nie. Tel: 6 kom 1 keer voor, 9 kom 2 keer voor, 4 kom 1 keer voor, 7 kom 1 keer voor. Aangesien 9 die meeste voorkom, is die korrekte modus 9, nie 6 nie.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! ʼn Volpunt-telling op Stel 1 — jy het telmerktabelle, staafgrafieke, prentgrafieke en gemiddelde, mediaan en modus heeltemal baasgeraak. Puik werk!' },
        { minScore: 15, message: 'Puik werk op Stel 1! Jy het ʼn sterk begrip van datahantering. Kyk weer na enige vrae wat jy gemis het om dit perfek te maak.' },
        { minScore: 10, message: 'Goeie poging op Stel 1! Jy verstaan baie van hierdie afdeling. Gaan weer deur die uitgewerkte voorbeelde vir die dele wat jou probleme gegee het.' },
        { minScore: 0, message: "Hou aan oefen met Stel 1 — datahantering verg oefening om te bemeester. Gaan weer deur die verduidelikings en uitgewerkte voorbeelde, en probeer dan weer." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Data Insamel en Organiseer (0-3) ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Thabo vra 14 klasmaats wat hul gunsteling seisoen is. Hy skryf neer: somer, winter, somer, lente, somer, winter, somer, lente, winter, somer, lente, somer, winter, somer. Hoeveel klasmaats het somer gekies?',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7'],
          explanation: 'Tel elke keer wat "somer" voorkom: somer, somer, somer, somer, somer, somer, somer = 7 klasmaats het somer gekies.',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Telmerktabel wys die aantal leerders wat elke drankie gekies het: Sap = ⁙||| (8), Water = ⁙ (5), Melk = || (2). Wat is die totale aantal leerders wat gevra is?',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15'],
          explanation: 'Tel die frekwensies bymekaar: 8 + 5 + 2 = 15 leerders is gevra.',
        },
        {
          difficulty: 'Easy',
          question: 'In ʼn telmerktabel word twee volle groepe van 5 telmerke plus 1 ekstra enkelmerk langs "Lemoene" geteken. Watter frekwensie moet vir lemoene neergeskryf word?',
          checkMode: 'auto',
          correctAnswer: '11',
          correctAnswers: ['11'],
          explanation: 'Twee volle groepe van 5 telmerke is gelyk aan 5 + 5 = 10. As 1 ekstra enkelmerk bygetel word: 10 + 1 = 11.',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Leerder het ʼn telmerktabel voltooi en die frekwensies tel op tot 27, maar sy het 30 mense opgeneem. Wat moet sy doen, en waarom?',
          answer: 'Sy moet teruggaan en haar telmerke en frekwensies weer tel, want die totale frekwensie moet altyd ooreenstem met die totale aantal mense wat opgeneem is. Aangesien 27 nie gelyk is aan 30 nie, het sy êrens ʼn fout gemaak — sy het óf sommige telmerke verkeerd getel, óf ʼn verkeerde frekwensie neergeskryf, óf 3 van die antwoorde nie aangeteken nie. Om versigtig weer te tel sal haar help om die fout te vind en reg te maak sodat die totaal ooreenstem met 30.',
          checkMode: 'self',
        },

        // ── Staafgrafieke (4-7) — DIAGRAM BLOK ──────────────────────────────
        // Gedeelde staafgrafiek: "Gunsteling Sapgeure"
        // Kategorieë (x-as): Lemoen, Appel, Druif, Mango
        // Waardes (y-as, Aantal Leerders): Lemoen = 14, Appel = 10, Druif = 6, Mango = 8
        // Skaal: tel in 2e van 0 tot 14
        {
          difficulty: 'Easy',
          question: 'Volgens die staafgrafiek hierbo getiteld "Gunsteling Sapgeure", wat Lemoen = 14, Appel = 10, Druif = 6 en Mango = 8 leerders wys, hoeveel leerders het Druif as hul gunsteling sapgeur gekies?',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6'],
          explanation: 'As jy die hoogte van die Druif-staaf op die grafiek lees, bereik dit 6 op die skaal. Dus het 6 leerders Druif gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Sapgeure</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Lemoen</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Appel</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Druif</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Volgens die staafgrafiek hierbo, watter geur is deur minder leerders gekies: Appel of Mango?',
          checkMode: 'auto',
          correctAnswer: 'Mango',
          correctAnswers: ['Mango', 'mango'],
          explanation: 'Appel = 10 leerders en Mango = 8 leerders. Aangesien 8 kleiner is as 10, is Mango deur minder leerders gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Sapgeure</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Lemoen</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Appel</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Druif</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die staafgrafiek hierbo, hoeveel meer leerders het Lemoen gekies as Druif?',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'Lemoen = 14 en Druif = 6. Die verskil is 14 − 6 = 8 meer leerders het Lemoen as Druif gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Sapgeure</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Lemoen</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Appel</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Druif</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die staafgrafiek hierbo, hoeveel leerders altesaam het Appel of Mango as hul gunsteling sapgeur gekies?',
          checkMode: 'auto',
          correctAnswer: '18',
          correctAnswers: ['18'],
          explanation: 'Appel = 10 en Mango = 8. Tel dit bymekaar: 10 + 8 = 18 leerders het Appel of Mango gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Sapgeure</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="136.3" x2="34" y2="136.3" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="139.3" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">2</text><line x1="31" y1="117.6" x2="34" y2="117.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="120.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">4</text><line x1="31" y1="98.9" x2="34" y2="98.9" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="101.9" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="80.1" x2="34" y2="80.1" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="83.1" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">8</text><line x1="31" y1="61.4" x2="34" y2="61.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="64.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">10</text><line x1="31" y1="42.7" x2="34" y2="42.7" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="45.7" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">14</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Lemoen</text><rect x="90.8" y="61.4" width="22" height="93.6" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Appel</text><rect x="133.2" y="98.9" width="22" height="56.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Druif</text><rect x="175.8" y="80.1" width="22" height="74.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Mango</text></svg>',
        },

        // ── Prentgrafieke (8-11) — DIAGRAM BLOK ─────────────────────────────
        // Gedeelde prentgrafiek: "Plakkers Versamel Hierdie Kwartaal"
        // Sleutel: 1 stersimbool = 4 plakkers
        // Rye: Ayanda = 5 simbole (20 plakkers), Zanele = 3 simbole (12 plakkers),
        //      Kabelo = 2 en ʼn half simbole (10 plakkers), Naledi = 4 simbole (16 plakkers)
        {
          difficulty: 'Medium',
          question: 'Die prentgrafiek hierbo, "Plakkers Versamel Hierdie Kwartaal", het ʼn sleutel waar 1 stersimbool = 4 plakkers. Ayanda wys 5 simbole. Hoeveel plakkers het Ayanda versamel?',
          checkMode: 'auto',
          correctAnswer: '20',
          correctAnswers: ['20'],
          explanation: 'Elke simbool verteenwoordig 4 plakkers. Ayanda het 5 simbole, dus 5 × 4 = 20 plakkers.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Plakkers Versamel Hierdie Kwartaal</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 plakkers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, Kabelo wys 2 volle simbole en 1 half simbool. Hoeveel plakkers het Kabelo versamel?',
          checkMode: 'auto',
          correctAnswer: '10',
          correctAnswers: ['10'],
          explanation: '2 volle simbole = 2 × 4 = 8 plakkers. ʼn Half simbool = die helfte van 4 = 2 plakkers. Totaal: 8 + 2 = 10 plakkers.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Plakkers Versamel Hierdie Kwartaal</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 plakkers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, Zanele wys 3 simbole en Naledi wys 4 simbole. Hoeveel meer plakkers het Naledi as Zanele versamel?',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4'],
          explanation: 'Zanele: 3 × 4 = 12 plakkers. Naledi: 4 × 4 = 16 plakkers. Verskil: 16 − 12 = 4 meer plakkers deur Naledi versamel.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Plakkers Versamel Hierdie Kwartaal</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 plakkers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, hoeveel plakkers is altesaam deur Ayanda en Naledi saam versamel?',
          checkMode: 'auto',
          correctAnswer: '36',
          correctAnswers: ['36'],
          explanation: 'Ayanda = 5 × 4 = 20 plakkers. Naledi = 4 × 4 = 16 plakkers. Totaal: 20 + 16 = 36 plakkers.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="10.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Plakkers Versamel Hierdie Kwartaal</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 4 plakkers</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Ayanda</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="#16a34a"/><circle cx="159" cy="55" r="6.5" fill="#16a34a"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Zanele</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><circle cx="127" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Kabelo</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><path d="M 127,102.5 A 6.5,6.5 0 0 0 127,115.5 Z" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Naledi</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="#16a34a"/><circle cx="127" cy="136" r="6.5" fill="#16a34a"/><circle cx="143" cy="136" r="6.5" fill="#16a34a"/></svg>',
        },

        // ── Modus en Mediaan (12-15) ─────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die modus van hierdie datastel: 5, 3, 5, 8, 5, 1.',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5'],
          explanation: 'Tel hoe gereeld elke waarde voorkom: 5 kom 3 keer voor, 3 kom 1 keer voor, 8 kom 1 keer voor, 1 kom 1 keer voor. Aangesien 5 die meeste voorkom, is die modus 5.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die mediaan van hierdie datastel: 22, 9, 14, 17, 3.',
          checkMode: 'auto',
          correctAnswer: '14',
          correctAnswers: ['14'],
          explanation: 'Rangskik eers die waardes van kleinste na grootste: 3, 9, 14, 17, 22. Daar is 5 waardes, dus is die middelste (3de) waarde die mediaan: 14.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die modus van hierdie datastel: 12, 18, 15, 18, 9.',
          checkMode: 'auto',
          correctAnswer: '18',
          correctAnswers: ['18'],
          explanation: 'Tel hoeveel keer elke waarde voorkom: 12 kom 1 keer voor, 18 kom 2 keer voor, 15 kom 1 keer voor, 9 kom 1 keer voor. Aangesien 18 die meeste voorkom, is die modus 18.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Datastel is: 7, 2, 9, 4. Het hierdie datastel ʼn modus? Verduidelik jou antwoord.',
          answer: 'Nee, hierdie datastel het nie ʼn modus nie. Elke waarde (7, 2, 9, en 4) kom presies een keer voor, dus kom geen waarde meer gereeld voor as ʼn ander nie. Aangesien geen enkele waarde meer gereeld voorkom as die res nie, het hierdie datastel geen modus nie.',
          checkMode: 'self',
        },

        // ── Data Interpreteer — enkelstap-redenering (16-17) ────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Opname oor gunsteling vrugte gee hierdie resultate: Appel kom 8 keer voor, Piesang kom 5 keer voor, Naartjie kom 8 keer voor. Kagiso sê die modus van hierdie datastel is ʼn enkele waarde. Verduidelik wat verkeerd is met Kagiso se stelling en gee die korrekte modus(se).',
          answer: 'Kagiso is verkeerd. Appel en Naartjie kom albei 8 keer voor, wat die hoogste frekwensie in die datastel is, dus is albei vrugte modusse — nie net een nie. Hierdie datastel is bimodaal, wat beteken dit het twee modusse: Appel en Naartjie. ʼn Datastel kan meer as een modus hê wanneer twee of meer waardes gelyk staan vir die hoogste frekwensie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Span X se modusgetal doele per wedstryd was 6 (hierdie telling het die meeste voorgekom), en Span Y se modus was 4. Wat vertel die vergelyking van hierdie twee modusse ons oor die twee spanne se mees algemene doelaantekening?',
          checkMode: 'auto',
          correctAnswer: 'Span X se mees algemene telling was hoër as Span Y s\'n',
          correctAnswers: ['Span X se mees algemene telling was hoër as Span Y s\'n', 'Span X se mees algemene telling was hoër', 'Span X het meer doele die meeste voorgekom as Span Y'],
          explanation: 'Die modus vertel ons hoeveel doele die meeste vir elke span voorgekom het. Aangesien 6 groter is as 4, was Span X se mees algemene (mees voorkomende) telling per wedstryd hoër as Span Y s\'n.',
        },

        // ── Data Interpreteer — multi-stap toepassing en breuke (18-19) ─────
        {
          difficulty: 'Hard',
          question: 'Thabo doen ʼn opname onder 25 leerders oor hul gunsteling sport om te speel. 10 kies Krieket, 8 kies Sokker, en die res kies Tennis. Hoeveel leerders het Tennis gekies, en watter breuk van die hele groep is dit?',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel leerders het Tennis gekies?',
              correctAnswer: '7',
              correctAnswers: ['7'],
              explanation: '25 − 10 − 8 = 7 leerders het Tennis gekies.',
            },
            {
              label: 'b) Watter breuk van die 25 leerders het Tennis gekies?',
              correctAnswer: '7/25',
              correctAnswers: ['7/25'],
              explanation: '7 uit 25 leerders het Tennis gekies, wat die breuk 7/25 gee. Hierdie breuk kan nie verder vereenvoudig word nie, aangesien 7 en 25 geen gemeenskaplike faktore anders as 1 deel nie.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Winkel skryf die aantal brode wat elke dag van Maandag tot Vrydag verkoop is neer: 12, 15, 9, 18, 6. ʼn Leerder sê die mediaan is 9, omdat 9 derde in die oorspronklike lys geskryf is. Is die leerder korrek? Indien nie, vind die korrekte mediaan.',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12'],
          explanation: 'Die leerder is verkeerd. Om die mediaan te vind, moet die waardes eers van kleinste na grootste gerangskik word: 6, 9, 12, 15, 18. Eers dan word die middelste waarde gevind — die 3de waarde in hierdie gerangskikte lys is 12, nie 9 nie. Die leerder het die fout gemaak om die oorspronklike, ongerangskikte posisie te gebruik in plaas van eers te sorteer.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! ʼn Volpunt-telling op Stel 2 — jy het telmerktabelle, staafgrafieke, prentgrafieke en gemiddelde, mediaan en modus heeltemal baasgeraak. Puik werk!' },
        { minScore: 15, message: 'Puik werk op Stel 2! Jy het ʼn sterk begrip van datahantering. Kyk weer na enige vrae wat jy gemis het om dit perfek te maak.' },
        { minScore: 10, message: 'Goeie poging op Stel 2! Jy verstaan baie van hierdie afdeling. Gaan weer deur die uitgewerkte voorbeelde vir die dele wat jou probleme gegee het.' },
        { minScore: 0, message: "Hou aan oefen met Stel 2 — datahantering verg oefening om te bemeester. Gaan weer deur die verduidelikings en uitgewerkte voorbeelde, en probeer dan weer." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Data Insamel en Organiseer (0-3) ────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Amahle vra 15 klasmaats wat hul gunsteling stokperdjie is. Sy skryf neer: lees, teken, lees, speletjies, lees, teken, speletjies, lees, teken, lees, speletjies, lees, teken, lees, speletjies. Hoeveel klasmaats het lees gekies?',
          checkMode: 'auto',
          correctAnswer: '7',
          correctAnswers: ['7'],
          explanation: 'Tel elke keer wat "lees" voorkom: lees, lees, lees, lees, lees, lees, lees = 7 klasmaats het lees gekies.',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Telmerktabel wys die aantal leerders wat elke vervoermetode gekies het: Bus = ⁙|| (7), Taxi = ⁙ (5), Fiets = ||| (3). Wat is die totale aantal leerders wat gevra is?',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15'],
          explanation: 'Tel die frekwensies bymekaar: 7 + 5 + 3 = 15 leerders is gevra.',
        },
        {
          difficulty: 'Easy',
          question: 'In ʼn telmerktabel word drie volle groepe van 5 telmerke langs "Geel" geteken. Watter frekwensie moet vir geel neergeskryf word?',
          checkMode: 'auto',
          correctAnswer: '15',
          correctAnswers: ['15'],
          explanation: 'Drie volle groepe van 5 telmerke is gelyk aan 5 + 5 + 5 = 15. Aangesien daar geen ekstra enkelmerke is nie, is die frekwensie 15.',
        },
        {
          difficulty: 'Easy',
          question: 'ʼn Leerder wil die oogkleur van almal in haar klas met telmerke aanteken. Beskryf die stappe wat sy moet volg om ʼn volledige telmerk- en frekwensietabel op te stel.',
          answer: 'Eers moet sy al die verskillende oogkleure wat in die klas voorkom as ry-opskrifte lys (byvoorbeeld, bruin, blou, groen). Dan moet sy een leerder op ʼn slag deur die klas gaan en een telmerk in die korrekte ry maak vir elke leerder se oogkleur, en onthou om die vyfde merk deur die vorige vier in elke groep te trek. Sodra almal aangeteken is, moet sy die telmerke in elke ry tel en die frekwensie (die totale telling) langs elke kleur neerskryf. Laastens moet sy al die frekwensies bymekaar tel en kontroleer dat die totaal ooreenstem met die aantal leerders in die klas.',
          checkMode: 'self',
        },

        // ── Staafgrafieke (4-7) — DIAGRAM BLOK ──────────────────────────────
        // Gedeelde staafgrafiek: "Gunsteling Skoolvakke"
        // Kategorieë (x-as): Wiskunde, Engels, Wetenskap, Kuns
        // Waardes (y-as, Aantal Leerders): Wiskunde = 15, Engels = 11, Wetenskap = 8, Kuns = 6
        // Skaal: tel in 3e van 0 tot 15
        {
          difficulty: 'Easy',
          question: 'Volgens die staafgrafiek hierbo getiteld "Gunsteling Skoolvakke", wat Wiskunde = 15, Engels = 11, Wetenskap = 8 en Kuns = 6 leerders wys, hoeveel leerders het Wetenskap as hul gunstelingvak gekies?',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8'],
          explanation: 'As jy die hoogte van die Wetenskap-staaf op die grafiek lees, bereik dit 8 op die skaal. Dus het 8 leerders Wetenskap gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Skoolvakke</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wisk.</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Eng.</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wet.</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Kuns</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Volgens die staafgrafiek hierbo, watter vak is deur meer leerders gekies: Engels of Kuns?',
          checkMode: 'auto',
          correctAnswer: 'Engels',
          correctAnswers: ['Engels', 'engels'],
          explanation: 'Engels = 11 leerders en Kuns = 6 leerders. Aangesien 11 groter is as 6, is Engels deur meer leerders gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Skoolvakke</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wisk.</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Eng.</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wet.</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Kuns</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die staafgrafiek hierbo, hoeveel meer leerders het Wiskunde gekies as Kuns?',
          checkMode: 'auto',
          correctAnswer: '9',
          correctAnswers: ['9'],
          explanation: 'Wiskunde = 15 en Kuns = 6. Die verskil is 15 − 6 = 9 meer leerders het Wiskunde as Kuns gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Skoolvakke</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wisk.</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Eng.</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wet.</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Kuns</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die staafgrafiek hierbo, hoeveel leerders altesaam het Engels of Wetenskap as hul gunstelingvak gekies?',
          checkMode: 'auto',
          correctAnswer: '19',
          correctAnswers: ['19'],
          explanation: 'Engels = 11 en Wetenskap = 8. Tel dit bymekaar: 11 + 8 = 19 leerders het Engels of Wetenskap gekies.',
          diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><text x="110" y="14" font-size="12.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Gunsteling Skoolvakke</text><line x1="34" y1="24" x2="34" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="34" y1="155" x2="210" y2="155" stroke="#0f1f3d" stroke-width="2"/><line x1="31" y1="155.0" x2="34" y2="155.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="158.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">0</text><line x1="31" y1="128.8" x2="34" y2="128.8" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="131.8" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">3</text><line x1="31" y1="102.6" x2="34" y2="102.6" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="105.6" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">6</text><line x1="31" y1="76.4" x2="34" y2="76.4" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="79.4" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">9</text><line x1="31" y1="50.2" x2="34" y2="50.2" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="53.2" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">12</text><line x1="31" y1="24.0" x2="34" y2="24.0" stroke="#0f1f3d" stroke-width="1.5"/><text x="28" y="27.0" font-size="9.5" fill="#ea580c" font-weight="700" text-anchor="end">15</text><rect x="48.2" y="24.0" width="22" height="131.0" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wisk.</text><rect x="90.8" y="58.9" width="22" height="96.1" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="101.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Eng.</text><rect x="133.2" y="85.1" width="22" height="69.9" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="144.2" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Wet.</text><rect x="175.8" y="102.6" width="22" height="52.4" fill="#2563eb" stroke="#0f1f3d" stroke-width="1.5"/><text x="186.8" y="167" font-size="9.5" fill="#2563eb" font-weight="700" text-anchor="middle">Kuns</text></svg>',
        },

        // ── Prentgrafieke (8-11) — DIAGRAM BLOK ─────────────────────────────
        // Gedeelde prentgrafiek: "Stemme vir Klas-sportdag Spanname"
        // Sleutel: 1 trofeesimbool = 10 stemme
        // Rye: Span A = 3 en ʼn half simbole (35 stemme), Span B = 2 simbole (20 stemme),
        //      Span C = 4 simbole (40 stemme), Span D = 1 en ʼn half simbole (15 stemme)
        {
          difficulty: 'Medium',
          question: 'Die prentgrafiek hierbo, "Stemme vir Klas-sportdag Spanname", het ʼn sleutel waar 1 trofeesimbool = 10 stemme. Span C wys 4 simbole. Hoeveel stemme het Span C ontvang?',
          checkMode: 'auto',
          correctAnswer: '40',
          correctAnswers: ['40'],
          explanation: 'Elke simbool verteenwoordig 10 stemme. Span C het 4 simbole, dus 4 × 10 = 40 stemme.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stemme vir Sportdag Spanname</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 stemme</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Span A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 143,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Span B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Span C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Span D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 111,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, Span A wys 3 volle simbole en 1 half simbool. Hoeveel stemme het Span A ontvang?',
          checkMode: 'auto',
          correctAnswer: '35',
          correctAnswers: ['35'],
          explanation: '3 volle simbole = 3 × 10 = 30 stemme. ʼn Half simbool = die helfte van 10 = 5 stemme. Totaal: 30 + 5 = 35 stemme.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stemme vir Sportdag Spanname</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 stemme</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Span A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 143,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Span B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Span C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Span D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 111,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, Span B wys 2 simbole en Span D wys 1 en ʼn half simbole. Hoeveel meer stemme het Span B as Span D ontvang?',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5'],
          explanation: 'Span B: 2 × 10 = 20 stemme. Span D: 1 volle simbool (10) + half simbool (5) = 15 stemme. Verskil: 20 − 15 = 5 meer stemme vir Span B.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stemme vir Sportdag Spanname</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 stemme</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Span A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 143,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Span B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Span C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Span D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 111,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Volgens die prentgrafiek hierbo, hoeveel stemme is altesaam vir Span A en Span C saam uitgebring?',
          checkMode: 'auto',
          correctAnswer: '75',
          correctAnswers: ['75'],
          explanation: 'Span A = 35 stemme. Span C = 4 × 10 = 40 stemme. Totaal: 35 + 40 = 75 stemme.',
          diagramSvg: '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg"><text x="110" y="15" font-size="11.5" fill="#0f1f3d" font-weight="700" text-anchor="middle">Stemme vir Sportdag Spanname</text><text x="8" y="31" font-size="11" fill="#2563eb" font-weight="700">Sleutel:</text><circle cx="34" cy="27.5" r="5" fill="#16a34a"/><text x="43" y="31" font-size="11" fill="#2563eb" font-weight="700">= 10 stemme</text><line x1="8" y1="37" x2="212" y2="37" stroke="#9ca3af" stroke-width="1"/><text x="8" y="59" font-size="11.5" fill="#374151" font-weight="700">Span A</text><circle cx="95" cy="55" r="6.5" fill="#16a34a"/><circle cx="111" cy="55" r="6.5" fill="#16a34a"/><circle cx="127" cy="55" r="6.5" fill="#16a34a"/><path d="M 143,48.5 A 6.5,6.5 0 0 0 143,61.5 Z" fill="#16a34a"/><circle cx="143" cy="55" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/><line x1="8" y1="68" x2="212" y2="68" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="86" font-size="11.5" fill="#374151" font-weight="700">Span B</text><circle cx="95" cy="82" r="6.5" fill="#16a34a"/><circle cx="111" cy="82" r="6.5" fill="#16a34a"/><line x1="8" y1="96" x2="212" y2="96" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="113" font-size="11.5" fill="#374151" font-weight="700">Span C</text><circle cx="95" cy="109" r="6.5" fill="#16a34a"/><circle cx="111" cy="109" r="6.5" fill="#16a34a"/><circle cx="127" cy="109" r="6.5" fill="#16a34a"/><circle cx="143" cy="109" r="6.5" fill="#16a34a"/><line x1="8" y1="122" x2="212" y2="122" stroke="#9ca3af" stroke-width="0.6" stroke-dasharray="2,2"/><text x="8" y="140" font-size="11.5" fill="#374151" font-weight="700">Span D</text><circle cx="95" cy="136" r="6.5" fill="#16a34a"/><path d="M 111,129.5 A 6.5,6.5 0 0 0 111,142.5 Z" fill="#16a34a"/><circle cx="111" cy="136" r="6.5" fill="none" stroke="#16a34a" stroke-width="1.2"/></svg>',
        },

        // ── Modus en Mediaan (12-15) ─────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die modus van hierdie datastel: 6, 2, 6, 10, 6, 4.',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6'],
          explanation: 'Tel hoe gereeld elke waarde voorkom: 6 kom 3 keer voor, 2 kom 1 keer voor, 10 kom 1 keer voor, 4 kom 1 keer voor. Aangesien 6 die meeste voorkom, is die modus 6.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die mediaan van hierdie datastel: 19, 7, 12, 25, 4.',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12'],
          explanation: 'Rangskik eers die waardes van kleinste na grootste: 4, 7, 12, 19, 25. Daar is 5 waardes, dus is die middelste (3de) waarde die mediaan: 12.',
        },
        {
          difficulty: 'Medium',
          question: 'Vind die modus van hierdie datastel: 8, 13, 6, 13, 9.',
          checkMode: 'auto',
          correctAnswer: '13',
          correctAnswers: ['13'],
          explanation: 'Tel hoeveel keer elke waarde voorkom: 8 kom 1 keer voor, 13 kom 2 keer voor, 6 kom 1 keer voor, 9 kom 1 keer voor. Aangesien 13 die meeste voorkom, is die modus 13.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Datastel is: 5, 11, 3, 9. Het hierdie datastel ʼn modus? Verduidelik jou antwoord.',
          answer: 'Nee, hierdie datastel het nie ʼn modus nie. Elke waarde (5, 11, 3, en 9) kom presies een keer voor, dus kom geen waarde meer gereeld voor as ʼn ander nie. Omdat geen enkele waarde meer herhaal as die ander nie, het hierdie datastel geen modus nie.',
          checkMode: 'self',
        },

        // ── Data Interpreteer — enkelstap-redenering (16-17) ────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Opname oor gunsteling kleure gee hierdie resultate: Blou kom 10 keer voor, Rooi kom 6 keer voor, Groen kom 10 keer voor. Sipho sê die modus is Rooi, omdat Rooi die tweede kleur in die resultate gelys is. Verduidelik wat verkeerd is met Sipho se stelling en gee die korrekte modus(se).',
          answer: 'Sipho is verkeerd. Die modus word gevind deur te kyk watter waarde die hoogste frekwensie het, nie deur die volgorde waarin waardes gelys is nie. Rooi kom slegs 6 keer voor, wat die laagste frekwensie hier is, dus kan dit nie die modus wees nie. Blou en Groen kom albei 10 keer voor, wat die hoogste frekwensie is, dus is albei modusse. Hierdie datastel is bimodaal, met modusse Blou en Groen.',
          checkMode: 'self',
        },
        {
          difficulty: 'Medium',
          question: 'Bakkery A se modusgetal brode wat per dag verkoop is, was 42 (hierdie hoeveelheid het die meeste voorgekom), en Bakkery B se modus was 50. Wat vertel die vergelyking van hierdie twee modusse ons oor die twee bakkerye se mees algemene daaglikse verkope?',
          checkMode: 'auto',
          correctAnswer: 'Bakkery B se mees algemene daaglikse verkope was hoër as Bakkery A s\'n',
          correctAnswers: ['Bakkery B se mees algemene daaglikse verkope was hoër as Bakkery A s\'n', 'Bakkery B se mees algemene daaglikse verkope was hoër', 'Bakkery B het meer brode die meeste verkoop as Bakkery A'],
          explanation: 'Die modus vertel ons hoeveel brode die meeste per dag vir elke bakkery verkoop is. Aangesien 50 groter is as 42, was Bakkery B se mees algemene (mees voorkomende) daaglikse verkoopshoeveelheid hoër as Bakkery A s\'n.',
        },

        // ── Data Interpreteer — multi-stap toepassing en breuke (18-19) ─────
        {
          difficulty: 'Hard',
          question: 'Amahle doen ʼn opname onder 32 leerders oor hul gunsteling troeteldier. 14 kies Honde, 10 kies Katte, en die res kies Voëls. Hoeveel leerders het Voëls gekies, en watter breuk van die hele groep is dit? Gee die breuk in sy eenvoudigste vorm.',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoeveel leerders het Voëls gekies?',
              correctAnswer: '8',
              correctAnswers: ['8'],
              explanation: '32 − 14 − 10 = 8 leerders het Voëls gekies.',
            },
            {
              label: 'b) Watter breuk van die 32 leerders het Voëls gekies, in eenvoudigste vorm?',
              correctAnswer: '1/4',
              correctAnswers: ['1/4', '8/32'],
              explanation: '8 uit 32 leerders het Voëls gekies, wat die breuk 8/32 gee. Deur beide die teller en noemer deur 8 te deel: 8 ÷ 8 = 1 en 32 ÷ 8 = 4, dus is die eenvoudigste vorm 1/4.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Snoepiewinkel skryf die aantal pasteie wat elke dag van Maandag tot Vrydag verkoop is neer: 10, 14, 8, 14, 7. ʼn Leerder sê die modus is 10, omdat 10 die eerste getal in die lys is. Verduidelik die fout en vind die korrekte modus.',
          checkMode: 'auto',
          correctAnswer: '14',
          correctAnswers: ['14'],
          explanation: 'Die fout is om te dink die modus is bloot die eerste waarde in die lys — die modus is eintlik die waarde wat die meeste voorkom. Tel: 10 kom 1 keer voor, 14 kom 2 keer voor, 8 kom 1 keer voor, 7 kom 1 keer voor. Aangesien 14 die meeste voorkom, is die korrekte modus 14, nie 10 nie.',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! ʼn Volpunt-telling op Stel 3 — jy het telmerktabelle, staafgrafieke, prentgrafieke en gemiddelde, mediaan en modus heeltemal baasgeraak. Puik werk!' },
        { minScore: 15, message: 'Puik werk op Stel 3! Jy het ʼn sterk begrip van datahantering. Kyk weer na enige vrae wat jy gemis het om dit perfek te maak.' },
        { minScore: 10, message: 'Goeie poging op Stel 3! Jy verstaan baie van hierdie afdeling. Gaan weer deur die uitgewerkte voorbeelde vir die dele wat jou probleme gegee het.' },
        { minScore: 0, message: "Hou aan oefen met Stel 3 — datahantering verg oefening om te bemeester. Gaan weer deur die verduidelikings en uitgewerkte voorbeelde, en probeer dan weer." },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het datahantering baasgeraak.' },
      { minPercent: 75, message: 'Puik werk! Jy het ʼn sterk begrip van datahantering.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! ʼn Volpunt-telling — jy het datahantering vir Graad 5 heeltemal baasgeraak. Hou so aan!' },
    { minScore: 12, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van datahantering. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 9, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 5, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer." },
  ],
}
