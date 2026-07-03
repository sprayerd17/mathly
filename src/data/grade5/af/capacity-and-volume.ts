import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (capacity/volume roles) ───────────────────────────────────
// capacity  → blue    (#2563eb)
// volume    → green   (#16a34a)
// ml        → orange  (#ea580c)
// litres    → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Inhoud en Volume',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNDERSTANDING CAPACITY AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'understanding-capacity-and-volume',
      title: 'Inhoud en Volume Verstaan',
      icon: '💧',
      explanation:
        `<p style="margin-bottom:16px;">${bl('Inhoud')} is die hoeveelheid vloeistof wat ʼn houer kan hou wanneer dit vol is. ${gr('Volume')} is die hoeveelheid vloeistof wat werklik in die houer is. Byvoorbeeld, ʼn bottel kan ʼn ${bl('inhoud')} van 2 ${re('liter')} hê maar slegs 1 ${re('liter')} water bevat — die ${bl('inhoud')} is 2 ${re('liter')} en die ${gr('volume')} is 1 ${re('liter')}. Ons meet ${bl('inhoud')} en ${gr('volume')} in ${or('milliliter')} (${or('ml')}) en ${re('liter')} (${re('l')}). 1 000 ${or('ml')} = 1 ${re('liter')}. ${or('Milliliter')} word gebruik vir kleiner hoeveelhede soos ʼn teelepel medisyne. ${re('Liter')} word gebruik vir groter hoeveelhede soos ʼn bottel vrugtesap.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('inhoud')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('ml')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('liter')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Inhoud</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die maksimum hoeveelheid vloeistof wat ʼn houer kan hou wanneer dit heeltemal vol is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Volume</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die werklike hoeveelheid vloeistof wat op hierdie oomblik binne-in die houer is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Milliliter (ml)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Klein eenheid om vloeistof mee te meet. Word gebruik vir hoeveelhede soos medisyne of ʼn teelepel.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Liter (l)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Groter eenheid om vloeistof mee te meet. Word gebruik vir hoeveelhede soos ʼn bottel vrugtesap. 1 liter = 1 000 ml.</p>` +
        `</div>` +

        `</div>` +

        // ── Key conversion ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelomskakeling</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;display:flex;flex-wrap:wrap;gap:12px;align-items:center;justify-content:center;">` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Klein hoeveelhede</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${or('1 000 ml')}</p>` +
        `</div>` +
        `<div style="color:#9ca3af;font-size:1.4em;font-weight:300;">=</div>` +
        `<div style="text-align:center;min-width:150px;">` +
        `<p style="font-size:0.75em;font-weight:700;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Groot hoeveelhede</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('1 liter')}</p>` +
        `</div>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou die verskil</p>` +
        `<p style="margin:0;color:#1e3a8a;">${bl('Inhoud')} is die houer se <strong>maksimum</strong> — dit bly dieselfde. ${gr('Volume')} is wat <strong>werklik binne-in</strong> is — dit kan verander. ʼn Emmer kan ʼn ${bl('inhoud')} van 10 ${re('liter')} hê maar ʼn ${gr('volume')} van slegs 6 ${re('liter')} as dit nie vol is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Emmer kan 10 liter hou wanneer dit vol is. Sipho vul dit met 6 liter water. Wat is die inhoud en wat is die volume?',
          answer: `${bl('Inhoud')} = 10 ${re('l')}, ${gr('Volume')} = 6 ${re('l')}`,
          steps: [
            `Die ${bl('inhoud')} is hoeveel die emmer kan hou wanneer dit vol is — ${re('10 liter')}. Dit is die maksimum hoeveelheid wat die houer kan hou.`,
            `Die ${gr('volume')} is hoeveel water werklik daarin is — ${re('6 liter')}. Dit is die hoeveelheid wat tans binne-in is.`,
            `<strong>Antwoord:</strong> ${bl('Inhoud')} = ${re('10 l')}, ${gr('Volume')} = ${re('6 l')} ✓`,
          ],
        },
        {
          question: 'Watter eenheid sal jy gebruik om die hoeveelheid vrugtesap in ʼn glas te meet?',
          answer: `Ons sal ${or('milliliter')} gebruik — ʼn glas hou ongeveer ${or('250 ml')}`,
          steps: [
            `ʼn Glas hou ʼn klein hoeveelheid vloeistof.`,
            `${re('Liter')} sou ʼn desimaal soos ${re('0,25 l')} gee wat moeiliker is om mee te werk.`,
            `${or('Milliliter')} is beter vir kleiner hoeveelhede.`,
            `<strong>Antwoord:</strong> Ons sal ${or('milliliter')} gebruik — ʼn glas hou ongeveer ${or('250 ml')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a container with its full capacity labelled in blue and the current volume of liquid inside labelled in green with the conversion 1 000 ml equals 1 litre shown" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between capacity and volume and how to use millilitres and litres for different amounts of liquid" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONVERTING BETWEEN MILLILITRES AND LITRES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-ml-and-litres',
      title: 'Omskakeling Tussen Milliliter en Liter',
      icon: '⇄',
      explanation:
        `<p style="margin-bottom:16px;">Ons skakel om tussen ${or('milliliter')} en ${re('liter')} deur die verwantskap ${or('1 000 ml')} = ${re('1 l')} te gebruik. Om van ${re('liter')} na ${or('milliliter')} om te skakel, ${gr('vermenigvuldig')} ons met 1 000. Om van ${or('milliliter')} na ${re('liter')} om te skakel, ${re('deel')} ons deur 1 000. Kyk altyd of jou antwoord sinvol is — ʼn kleiner eenheid behoort ʼn groter getal te gee en ʼn groter eenheid behoort ʼn kleiner getal te gee.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vermenigvuldig')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deel')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('omskakelingsfeit')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('antwoord')}</span>` +
        `</div>` +

        // ── How to convert ───────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om om te skakel</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">${re('Liter')} → ${or('Milliliter')}: ${gr('× 1 000')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Jy gaan van ʼn groter eenheid na ʼn kleiner eenheid, dus ${gr('vermenigvuldig')} jy met ${or('1 000')}. Die getal word groter.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: ${re('2 l')} = 2 ${gr('×')} ${or('1 000')} = ${bl('2 000 ml')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">${or('Milliliter')} → ${re('Liter')}: ${re('÷ 1 000')}</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Jy gaan van ʼn kleiner eenheid na ʼn groter eenheid, dus ${re('deel')} jy deur ${or('1 000')}. Die getal word kleiner.</p>` +
        `<p style="color:#6b7280;font-size:13px;font-style:italic;margin:0;">Voorbeeld: ${or('5 000 ml')} = 5 000 ${re('÷')} ${or('1 000')} = ${bl('5 l')}</p>` +
        `</div>` +

        `</div>` +

        // ── Sense-check tip ──────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Kyk altyd of jou antwoord sinvol is</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Kleiner eenheid (${or('ml')}) gee altyd ʼn <strong>groter</strong> getal. ʼn Groter eenheid (${re('l')}) gee altyd ʼn <strong>kleiner</strong> getal. As jy ${re('3 l')} na ${or('ml')} omskakel en ʼn getal kleiner as 3 kry, het jy ʼn fout gemaak — gaan terug en kyk of jy behoort te ${gr('vermenigvuldig')} of te ${re('deel')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Skakel 3 l na milliliter om.',
          answer: `${re('3 l')} = ${bl('3 000 ml')}`,
          steps: [
            `Ons skakel van ʼn groter eenheid (${re('liter')}) na ʼn kleiner eenheid (${or('milliliter')}) om.`,
            `Ons ${gr('vermenigvuldig')}.`,
            `${or('1 l')} = ${or('1 000 ml')}`,
            `${re('3 l')} = 3 ${gr('×')} ${or('1 000')} = ${bl('3 000 ml')}`,
          ],
        },
        {
          question: 'Skakel 2 500 ml na liter om.',
          answer: `${or('2 500 ml')} = ${bl('2,5 l')}`,
          steps: [
            `Ons skakel van ʼn kleiner eenheid (${or('milliliter')}) na ʼn groter eenheid (${re('liter')}) om.`,
            `Ons ${re('deel')}.`,
            `${or('1 000 ml')} = ${or('1 l')}`,
            `${or('2 500 ml')} = 2 500 ${re('÷')} ${or('1 000')} = ${bl('2,5 l')}`,
          ],
        },
        {
          question: 'Skakel 1,5 l na milliliter om.',
          answer: `${re('1,5 l')} = ${bl('1 500 ml')}`,
          steps: [
            `Ons skakel van ʼn groter eenheid (${re('liter')}) na ʼn kleiner eenheid (${or('milliliter')}) om.`,
            `Ons ${gr('vermenigvuldig')}.`,
            `${or('1 l')} = ${or('1 000 ml')}`,
            `${re('1,5 l')} = 1,5 ${gr('×')} ${or('1 000')} = ${bl('1 500 ml')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the conversion relationship between millilitres and litres with an arrow labelled multiply by 1 000 going from litres to millilitres in green and an arrow labelled divide by 1 000 going from millilitres to litres in red with the conversion fact 1 000 ml equals 1 l shown in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to convert between millilitres and litres by multiplying by 1 000 when going to a smaller unit and dividing by 1 000 when going to a larger unit with worked examples" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — READING MEASURING JUGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-measuring-jugs',
      title: 'Maatbekers Lees',
      icon: '🧪',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Maatbeker het ${bl('graderings')} op die kant om te wys hoeveel vloeistof dit bevat. Om ʼn maatbeker te lees, kyk na die ${bl('graderings')} en vind die naaste gemerkte getal. Tel die spasies tussen merke om uit te werk wat elke klein merk werd is. Lees die meting altyd op ooghoogte — kyk van die kant af op dieselfde hoogte as die ${gr('vloeistofoppervlak')}. Die oppervlak van die vloeistof kan effens krom wees — lees altyd van die onderkant van die kromming af.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('skaalgraderings')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('watervlak')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('lesing')}</span>` +
        `</div>` +

        // ── How to read ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn maatbeker te lees</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#2563eb;">Vind die skaal</strong> — Kyk na die ${bl('graderings')} op die kant en identifiseer die genommerde merke. Tel die spasies tussen twee genommerde merke om uit te werk wat elke klein merk werd is.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#16a34a;">Lees op ooghoogte</strong> — Plaas jouself sodat jou oë gelyk is met die ${gr('watervlak')}. Kyk van die kant af op dieselfde hoogte as die vloeistof.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong style="color:#ea580c;">Skryf die lesing neer</strong> — Lees die ${or('meting')} by die onderkant van die kromming op die vloeistofoppervlak. Tel op vanaf die naaste ${bl('gemerkte getal')} onder die ${gr('watervlak')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Lees tussen merke</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die ${gr('watervlak')} tussen twee ${bl('graderings')} is, vind die halfpadpunt. Trek die laer ${bl('gemerkte waarde')} van die hoër ${bl('gemerkte waarde')} af, halveer die verskil, en tel dit dan by die laer waarde om die ${or('lesing')} te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Maatbeker het graderings elke 100 ml tot by 1 000 ml. Die watervlak is by die derde merk bo 400 ml. Hoeveel water is in die beker?',
          answer: `Daar is ${or('700 ml')} water in die beker`,
          steps: [
            `Kyk na die ${bl('skaalgraderings')} — die merke gaan op in ${bl('100 ml')}-stappe.`,
            `Vind die beginpunt: die naaste genommerde ${bl('merk')} onder die ${gr('watervlak')} is ${bl('400 ml')}.`,
            `Tel drie merke op bo ${bl('400 ml')}: 400 + 100 + 100 + 100 = ${or('700 ml')}.`,
            `<strong>Antwoord:</strong> Daar is ${or('700 ml')} water in die beker ✓`,
          ],
        },
        {
          question: 'Lerato lees ʼn maatbeker. Die merke gaan op in 250 ml-stappe. Die water is halfpad tussen die 500 ml- en 750 ml-merke. Hoeveel water is daar?',
          answer: `Daar is ${or('625 ml')} water in die beker`,
          steps: [
            `Kyk na die ${bl('skaalgraderings')} — die merke gaan op in ${bl('250 ml')}-stappe.`,
            `Die ${gr('watervlak')} is halfpad tussen ${bl('500 ml')} en ${bl('750 ml')}.`,
            `Vind die verskil tussen die twee ${bl('merke')}: 750 − 500 = 250.`,
            `Die helfte van 250 = 125. Tel dit by die laer ${bl('merk')}: 500 + 125 = ${or('625 ml')}.`,
            `<strong>Antwoord:</strong> Daar is ${or('625 ml')} water in die beker ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a measuring jug showing scale markings in blue water level in green and the reading in orange with an example of reading between marks at the halfway point" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a measuring jug by identifying scale markings counting spaces and reading at eye level from the bottom of the liquid curve" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — CALCULATING WITH CAPACITY AND VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-with-capacity-and-volume',
      title: 'Bereken met Inhoud en Volume',
      icon: '🧮',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan volumes ${gr('optel')} en ${re('aftrek')} om probleme op te los. Maak altyd seker dat alle metings in <strong>dieselfde eenheid</strong> is voordat jy bereken. As die eenhede verskillend is, ${bl('skakel')} eers om, en bereken dan. Skryf ná berekening altyd die korrekte eenheid langs jou ${or('antwoord')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('omskakeling')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('optelling')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('aftrekking')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('antwoord')}</span>` +
        `</div>` +

        // ── Rules ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reëls vir berekening met inhoud en volume</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Skakel om')} — Maak seker dat alle metings in <strong>dieselfde eenheid</strong> is voordat jy bereken. As hulle verskillend is, skakel eers na dieselfde eenheid om.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Tel op of trek af')} — Sodra alle metings in dieselfde eenheid is, voer die berekening uit. Tel hoeveelhede bymekaar of trek een hoeveelheid van ʼn ander af.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${or('Skryf die eenheid')} — Skryf altyd die korrekte eenheid (${or('ml')} of ${or('l')}) langs jou antwoord. ʼn Getal sonder ʼn eenheid is nie ʼn volledige antwoord nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dieselfde eenheid voordat jy bereken</p>` +
        `<p style="margin:0;color:#1e3a8a;">Moet nooit metings optel of aftrek wat in verskillende eenhede is nie. As een meting in ${re('liter')} is en ʼn ander in ${or('milliliter')}, ${bl('skakel')} eers een van hulle om. Onthou: ${bl('1 l = 1 000 ml')}. Ná berekening kan jy jou ${or('antwoord')} terug omskakel na die geskikste eenheid.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle het 1,5 l vrugtesap en skink nog 750 ml by. Hoeveel vrugtesap het sy in totaal?',
          answer: `Amahle het ${or('2 250 ml')} of ${or('2,25 l')} vrugtesap`,
          steps: [
            `${bl('Skakel om')} na dieselfde eenheid: ${bl('1,5 l')} = 1,5 × 1 000 = ${bl('1 500 ml')}.`,
            `${gr('Tel op:')} ${bl('1 500 ml')} + 750 ml = ${gr('2 250 ml')}.`,
            `${bl('Skakel')} terug om: ${bl('2 250 ml')} ÷ 1 000 = ${bl('2,25 l')}.`,
            `<strong>Antwoord:</strong> Amahle het ${or('2 250 ml')} of ${or('2,25 l')} vrugtesap ✓`,
          ],
        },
        {
          question: 'ʼn 2 l bottel koeldrank het 650 ml uitgeskink. Hoeveel is oor?',
          answer: `Daar is ${or('1 350 ml')} of ${or('1,35 l')} oor`,
          steps: [
            `${bl('Skakel')} 2 l na milliliter om: 2 × 1 000 = ${bl('2 000 ml')}.`,
            `${re('Trek af:')} ${bl('2 000 ml')} − 650 ml = ${re('1 350 ml')}.`,
            `${bl('Skakel')} terug om: ${bl('1 350 ml')} ÷ 1 000 = ${bl('1,35 l')}.`,
            `<strong>Antwoord:</strong> Daar is ${or('1 350 ml')} of ${or('1,35 l')} oor ✓`,
          ],
        },
        {
          question: 'Sipho vul 4 glase wat elk 200 ml hou uit ʼn 1 l bottel. Hoeveel is oor in die bottel?',
          answer: `Daar is ${or('200 ml')} oor in die bottel`,
          steps: [
            `${gr('Totaal uitgeskink:')} 4 × 200 ml = ${gr('800 ml')}.`,
            `${bl('Skakel')} 1 l na milliliter om: ${bl('1 000 ml')}.`,
            `${re('Trek af:')} ${bl('1 000 ml')} − ${gr('800 ml')} = ${re('200 ml')}.`,
            `<strong>Antwoord:</strong> Daar is ${or('200 ml')} oor in die bottel ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two containers being combined with addition in green and a container with liquid removed shown with subtraction in red the conversion step highlighted in blue and the final answer labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to add and subtract volumes by first converting to the same unit then calculating and writing the answer with the correct unit" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy — capacity vs volume ─────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die verskil tussen inhoud en volume?',
      answer: 'Inhoud is hoeveel ʼn houer kan hou wanneer dit vol is. Volume is hoeveel vloeistof werklik in die houer is.',
      checkMode: 'self',
    },

    // ── Q2 Easy — unit selection ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter eenheid sal jy gebruik om die hoeveelheid water in ʼn swembad te meet?',
      answer: 'liter',
      checkMode: 'auto',
      correctAnswer: 'liter',
      correctAnswers: ['liter', 'litres', 'litre', 'liters', 'l'],
    },

    // ── Q3 Medium — remaining capacity ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Bottel het ʼn inhoud van 500ml en bevat 320ml water. Hoeveel meer water kan dit hou?',
      answer: '180ml',
      checkMode: 'auto',
      correctAnswer: '180ml',
    },

    // ── Q4 Easy — convert l to ml ─────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skakel 4l na milliliter om.',
      answer: '4000ml',
      checkMode: 'auto',
      correctAnswer: '4000ml',
    },

    // ── Q5 Medium — convert ml to l ──────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skakel 3750ml na liter om.',
      answer: '3.75l',
      checkMode: 'auto',
      correctAnswer: '3.75l',
      correctAnswers: ['3.75l', '3,75l', '3.75', '3,75', '3.75 l', '3,75 l'],
    },

    // ── Q6 Hard — error analysis ──────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato skakel 2,8l na milliliter om en kry 280ml. Is sy korrek? Verduidelik.',
      answer: 'Nee — om liter na milliliter om te skakel, vermenigvuldig ons met 1000. 2,8 x 1000 = 2800ml, nie 280ml nie. Sy het vergeet om met 1000 te vermenigvuldig.',
      checkMode: 'self',
    },

    // ── Q7 Easy — reading a jug ───────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Maatbeker het merke elke 100ml. Die water is by die 6de merk. Hoeveel water is in die beker?',
      answer: '600ml',
      checkMode: 'auto',
      correctAnswer: '600ml',
    },

    // ── Q8 Medium — reading between marks ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Maatbeker het merke elke 250ml. Die water is halfpad tussen 750ml en 1000ml. Hoeveel water is daar?',
      answer: '875ml',
      checkMode: 'auto',
      correctAnswer: '875ml',
    },

    // ── Q9 Hard — reading accuracy ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho lees ʼn maatbeker van bo af in plaas van op ooghoogte. Waarom kan sy lesing verkeerd wees?',
      answer: 'As jy van bo af lees, lyk die watervlak anders as wat dit werklik is. Jy moet altyd ʼn maatbeker op ooghoogte lees om ʼn akkurate meting te kry.',
      checkMode: 'self',
    },

    // ── Q10 Medium — subtraction word problem ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle het 2l melk. Sy gebruik 450ml vir graankos en 300ml vir tee. Hoeveel melk is oor?',
      answer: '1250ml',
      checkMode: 'auto',
      correctAnswer: '1250ml',
    },

    // ── Q11 Hard — multi-step word problem ───────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo vul 5 bottels wat elk 350ml hou uit ʼn 2l houer. Hoeveel water is oor in die houer?',
      answer: '250ml',
      checkMode: 'auto',
      correctAnswer: '250ml',
    },

    // ── Q12 Hard — combined volumes ───────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato het 3 houers met 1,2l, 850ml en 600ml. Sy skink alles in ʼn 3l beker. Pas alles in? Verduidelik.',
      answer: 'Totaal = 1200ml + 850ml + 600ml = 2650ml. Skakel 3l na ml om = 3000ml. 2650ml is minder as 3000ml, dus pas alles in met 350ml oor.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het inhoud en volume onder die knie.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van inhoud en volume.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
}
