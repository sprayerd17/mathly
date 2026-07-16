import type { PracticeSet, TopicData } from '@/src/data/grade4/en/numbers-operations'

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
        'ʼn Houer met sy volle inhoud geëtiketteer in blou en die huidige volume vloeistof binne-in geëtiketteer in groen, met die omskakeling 1 000 ml = 1 liter getoon',
      diagramSvg:
        '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="30" width="80" height="120" rx="4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="62" y="90" width="76" height="58" fill="#16a34a" fill-opacity="0.18"/><line x1="60" y1="30" x2="140" y2="30" stroke="#2563eb" stroke-width="2" stroke-dasharray="4,3"/><line x1="60" y1="90" x2="140" y2="90" stroke="#16a34a" stroke-width="2"/><text x="160" y="34" font-size="12" font-weight="700" fill="#2563eb" text-anchor="start">Inhoud</text><text x="160" y="48" font-size="12" font-weight="700" fill="#2563eb" text-anchor="start">= 2 l</text><text x="160" y="94" font-size="12" font-weight="700" fill="#16a34a" text-anchor="start">Volume</text><text x="160" y="108" font-size="12" font-weight="700" fill="#16a34a" text-anchor="start">= 1 l</text><text x="100" y="170" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">1 000 ml = 1 l</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen kapasiteit en volume verduidelik en hoe om milliliter en liter vir verskillende hoeveelhede vloeistof te gebruik" />',
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
        'Die omskakelingsverhouding tussen milliliter en liter, met ʼn groen pyl geëtiketteer vermenigvuldig met 1 000 wat van liter na milliliter gaan, ʼn rooi pyl geëtiketteer deel deur 1 000 wat van milliliter na liter gaan, en die omskakelingsfeit 1 000 ml = 1 l getoon in oranje',
      diagramSvg:
        '<svg viewBox="0 0 300 130" xmlns="http://www.w3.org/2000/svg"><rect x="20" y="45" width="90" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="65" y="70" font-size="15" font-weight="700" fill="#dc2626" text-anchor="middle">liter</text><rect x="190" y="45" width="90" height="40" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="235" y="70" font-size="15" font-weight="700" fill="#ea580c" text-anchor="middle">ml</text><line x1="115" y1="55" x2="185" y2="55" stroke="#16a34a" stroke-width="2"/><polygon points="189,55 181,50 181,60" fill="#16a34a"/><text x="150" y="45" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">× 1 000</text><line x1="185" y1="78" x2="115" y2="78" stroke="#dc2626" stroke-width="2"/><polygon points="111,78 119,73 119,83" fill="#dc2626"/><text x="150" y="98" font-size="11" font-weight="700" fill="#dc2626" text-anchor="middle">÷ 1 000</text><text x="150" y="118" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">1 000 ml = 1 l</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om tussen milliliter en liter om te skakel deur met 1 000 te vermenigvuldig wanneer na ʼn kleiner eenheid oorgeskakel word en deur 1 000 te deel wanneer na ʼn groter eenheid oorgeskakel word, met uitgewerkte voorbeelde" />',
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
        'ʼn Maatbeker wat skaalmerke in blou, die watervlak in groen en die lesing in oranje wys, met ʼn voorbeeld van hoe om tussen merke by die halfpadpunt te lees',
      diagramSvg:
        '<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="40" width="70" height="150" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="190" x2="42" y2="190" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="152" x2="42" y2="152" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="115" x2="42" y2="115" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="77" x2="42" y2="77" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="40" x2="42" y2="40" stroke="#2563eb" stroke-width="2"/><text x="34" y="194" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">0</text><text x="34" y="156" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">250</text><text x="34" y="119" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">500</text><text x="34" y="81" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">750</text><text x="34" y="44" font-size="10" fill="#2563eb" font-weight="700" text-anchor="end">1000</text><rect x="52" y="96" width="66" height="94" fill="#16a34a" fill-opacity="0.25"/><line x1="50" y1="96" x2="120" y2="96" stroke="#16a34a" stroke-width="2"/><line x1="120" y1="96" x2="140" y2="96" stroke="#ea580c" stroke-width="1.5" stroke-dasharray="3,2"/><text x="145" y="100" font-size="12" font-weight="700" fill="#ea580c" text-anchor="start">625 ml</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn maatbeker te lees deur skaalmerke te identifiseer, spasies te tel en op oogvlak vanaf die onderkant van die vloeistofkurwe te lees" />',
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

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om volumes op te tel en af te trek deur eers na dieselfde eenheid om te skakel, dan te bereken en die antwoord met die korrekte eenheid neer te skryf" />',
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
      answer: '3,75l',
      checkMode: 'auto',
      correctAnswer: '3,75l',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Inhoud vs Volume & Eenheidsin | 4-8 Omskakeling ml/l |
    // 9-11 Maatbekers Lees | 12-14 Foutopsporing & Regverdig Redenering |
    // 15-17 Woordprobleme (Optel/Aftrek) | 18-19 Multi-stap & Vergelykings
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Beker kan 2 liter water hou wanneer dit heeltemal vol is. Is 2 liter die inhoud of die volume van die beker?', checkMode: 'auto', correctAnswer: 'inhoud', correctAnswers: ['inhoud'], explanation: 'Inhoud is die maksimum hoeveelheid wat ʼn houer kan hou wanneer dit vol is. Aangesien 2 liter is wat die beker kan hou wanneer dit heeltemal vol is, is dit die inhoud.' },
        { difficulty: 'Easy', question: 'ʼn 1 liter bottel het 600 ml vrugtesap ingegooi. Is 600 ml die inhoud of die volume vrugtesap in die bottel?', checkMode: 'auto', correctAnswer: 'volume', correctAnswers: ['volume'], explanation: '600 ml is die hoeveelheid vrugtesap wat werklik nou in die bottel is, dus is dit die volume. Die bottel se inhoud is steeds 1 liter (1 000 ml) al is dit nie vol nie.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die hoeveelheid hoesstroop in ʼn klein medisynelepel te meet: ml of l?', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'milliliter', 'milliliters'], explanation: 'ʼn Medisynelepel hou ʼn baie klein hoeveelheid vloeistof, dus is milliliter (ml) die sinvolle eenheid. Liter sou ʼn ongemaklike klein desimaal gee.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die hoeveelheid water in ʼn swembad te meet: ml of l?', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'liter', 'liters'], explanation: 'ʼn Swembad hou ʼn baie groot hoeveelheid water, dus is liter (l) die sinvolle eenheid. Milliliter sou ʼn enorme, lomp getal gee.' },
        { difficulty: 'Easy', question: 'Skakel 2,5 l na milliliter om.', checkMode: 'auto', correctAnswer: '2500ml', correctAnswers: ['2500ml', '2500 ml', '2500'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 2,5 × 1 000 = 2 500 ml.' },
        { difficulty: 'Easy', question: 'Skakel 3,5 l na milliliter om.', checkMode: 'auto', correctAnswer: '3500ml', correctAnswers: ['3500ml', '3500 ml', '3500'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 3,5 × 1 000 = 3 500 ml.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 3 750 ml na liter om.', checkMode: 'auto', correctAnswer: '3,75l', correctAnswers: ['3,75l', '3,75 l', '3,75', '3.75l', '3.75 l', '3.75'], explanation: 'Om milliliter na liter om te skakel, deel deur 1 000. 3 750 ÷ 1 000 = 3,75 l.' },
        { difficulty: 'Medium', question: 'Skakel 0,6 l na milliliter om.', checkMode: 'auto', correctAnswer: '600ml', correctAnswers: ['600ml', '600 ml', '600'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 0,6 × 1 000 = 600 ml. Selfs ʼn desimaal kleiner as 1 word steeds op dieselfde manier vermenigvuldig.' },
        { difficulty: 'Medium', question: 'ʼn Houer is gemerk "6 250 ml". Skakel dit na liter om, en verduidelik dan in een sin waarom jou antwoord sinvol is in vergelyking met die oorspronklike getal.', checkMode: 'self', answer: '6 250 ml = 6,25 l. Dit maak sin omdat liter ʼn groter eenheid as milliliter is, dus behoort omskakeling na liter ʼn kleiner getal te gee — en 6,25 is baie kleiner as 6 250, wat wys dat die omskakelingsrigting (deel deur 1 000) korrek was.' },
        { difficulty: 'Medium', question: 'ʼn Maatbeker het merke elke 100 ml. Die watervlak is by die 6de merk bo 200 ml. Hoeveel water is in die beker?', checkMode: 'auto', correctAnswer: '800ml', correctAnswers: ['800ml', '800 ml', '800'], explanation: 'Begin by 200 ml en tel 6 merke van 100 ml elk op: 200 + (6 × 100) = 200 + 600 = 800 ml.' },
        { difficulty: 'Medium', question: 'ʼn Maatbeker het merke elke 250 ml. Die watervlak is presies halfpad tussen die 500 ml-merk en die 750 ml-merk. Hoeveel water is in die beker?', checkMode: 'auto', correctAnswer: '625ml', correctAnswers: ['625ml', '625 ml', '625'], explanation: 'Die verskil tussen die merke is 750 − 500 = 250. Die helfte van 250 is 125. Tel dit by die laer merk: 500 + 125 = 625 ml.' },
        { difficulty: 'Medium', question: 'ʼn Maatsilinder het merke elke 50 ml. Die vloeistofvlak is by die 9de merk bo 0 ml. Hoeveel vloeistof is in die silinder?', checkMode: 'auto', correctAnswer: '450ml', correctAnswers: ['450ml', '450 ml', '450'], explanation: 'Tel 9 merke van 50 ml elk vanaf 0 op: 9 × 50 = 450 ml.' },
        { difficulty: 'Medium-Hard', question: 'Thabo skakel 1,2 l na milliliter om deur te skryf 1,2 ÷ 1000 = 0,0012 ml. Is Thabo korrek? Verduidelik wat hy verkeerd gedoen het.', checkMode: 'self', answer: 'Nee, Thabo is verkeerd. Om van liter (ʼn groter eenheid) na milliliter (ʼn kleiner eenheid) om te skakel, moet jy met 1 000 vermenigvuldig, nie deel nie. Die korrekte berekening is 1,2 × 1 000 = 1 200 ml. Thabo het die verkeerde bewerking gebruik — deling het die getal baie kleiner gemaak, maar omskakeling na ʼn kleiner eenheid behoort die getal altyd groter te maak.' },
        { difficulty: 'Medium-Hard', question: 'Sipho lees ʼn maatbeker deur reg van bo af te kyk in plaas van van die kant af op ooghoogte, en skryf 850 ml neer. Verduidelik waarom sy lesing onakkuraat kan wees, en wat hy eerder moet doen.', checkMode: 'self', answer: 'As jy van bo af kyk, verwring dit hoe die watervlak met die graderings op die kant van die beker belyn, sodat die lesing hoër of laer as die werklike hoeveelheid kan lyk. Sipho moet afkniel (of die beker optel) sodat sy oë gelyk is met die vloeistofoppervlak, van die kant af kyk, en die meting by die onderkant van die kromming (die meniskus) lees vir ʼn akkurate resultaat.' },
        { difficulty: 'Hard', question: 'ʼn Resep benodig 1,8 l aftreksel. Nomvula het reeds 650 ml ingegooi. Hoeveel meer milliliter aftreksel moet sy nog byvoeg?', checkMode: 'auto', correctAnswer: '1150ml', correctAnswers: ['1150ml', '1150 ml', '1150', '1,15l', '1,15 l', '1.15l', '1.15 l'], explanation: 'Skakel 1,8 l na ml om: 1,8 × 1 000 = 1 800 ml. Trek af wat reeds ingegooi is: 1 800 − 650 = 1 150 ml word nog benodig.' },
        { difficulty: 'Hard', question: 'ʼn 3 l bottel koeldrank het 1 250 ml uitgeskink by ʼn verjaardagpartytjie. Hoeveel koeldrank is oor in die bottel, in milliliter?', checkMode: 'auto', correctAnswer: '1750ml', correctAnswers: ['1750ml', '1750 ml', '1750', '1,75l', '1,75 l', '1.75l', '1.75 l'], explanation: 'Skakel 3 l na ml om: 3 × 1 000 = 3 000 ml. Trek die hoeveelheid wat uitgeskink is af: 3 000 − 1 250 = 1 750 ml oor.' },
        { difficulty: 'Hard', question: 'By ʼn skool se sportdag drink ʼn atleet 4 bekers water, elk 200 ml, uit ʼn 2 l waterhouer. Hoeveel water is oor in die houer, in milliliter?', checkMode: 'auto', correctAnswer: '1200ml', correctAnswers: ['1200ml', '1200 ml', '1200', '1,2l', '1,2 l', '1.2l', '1.2 l'], explanation: 'Totaal gedrink: 4 × 200 ml = 800 ml. Skakel 2 l na ml om: 2 × 1 000 = 2 000 ml. Trek af: 2 000 − 800 = 1 200 ml oor.' },
        { difficulty: 'Hard', question: 'Lindiwe skink drie houers in ʼn leë 3 l beker: 900 ml, 1,3 l, en 450 ml. Sal alles inpas sonder dat die beker oorloop? Wys jou berekening en verduidelik.', checkMode: 'self', answer: 'Skakel alles na milliliter om: 900 ml + (1,3 × 1 000) ml + 450 ml = 900 + 1 300 + 450 = 2 650 ml. Die beker se inhoud is 3 l = 3 000 ml. Aangesien 2 650 ml minder is as 3 000 ml, pas alles in, met 350 ml spasie nog oor — die beker sal nie oorloop nie.' },
        { difficulty: 'Hard', question: 'Bottel A bevat 2,6 l olie. Bottel B bevat 2 450 ml olie. Watter bottel bevat meer olie, en met hoeveel milliliter?', checkMode: 'auto', correctAnswer: 'A150ml', correctAnswers: ['A150ml', 'A, 150ml', 'A 150ml', 'Bottel A 150ml', 'bottelA150ml'], explanation: 'Skakel Bottel A na milliliter om: 2,6 × 1 000 = 2 600 ml. Vergelyk met Bottel B: 2 450 ml. Bottel A het meer, met 2 600 − 2 450 = 150 ml.' },
        { difficulty: 'Hard', question: 'ʼn Vistenk het ʼn inhoud van 12 l. Dit word gevul deur ʼn 1,5 l beker 5 keer in te gooi, en dan word ʼn verdere 900 ml uit ʼn ander houer bygevoeg. Is die tenk nou vol, oorlopend, of steeds nie vol nie? Verduidelik jou redenasie met volledige berekening.', checkMode: 'self', answer: 'Water uit die beker: 5 × 1,5 l = 7,5 l = 7 500 ml. Tel die ekstra by: 7 500 + 900 = 8 400 ml, wat 8,4 l is. Die tenk se inhoud is 12 l. Aangesien 8,4 l minder is as 12 l, is die tenk nog nie vol nie — daar is nog 12 − 8,4 = 3,6 l (3 600 ml) spasie oor voordat dit sou oorloop.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het inhoud en volume, omskakelings en bekerlesings onder die knie.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van inhoud en volume — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor omskakelings en berekeninge weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout, nuwe fraseringe/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Ketel kan 1,7 liter water hou wanneer dit heeltemal vol is. Is 1,7 liter die inhoud of die volume van die ketel?', checkMode: 'auto', correctAnswer: 'inhoud', correctAnswers: ['inhoud'], explanation: 'Inhoud is die maksimum wat ʼn houer kan hou wanneer dit vol is. Aangesien 1,7 liter is wat die ketel kan hou wanneer dit heeltemal vol is, is dit die inhoud.' },
        { difficulty: 'Easy', question: 'ʼn 500 ml fles het 180 ml sop daarin. Is 180 ml die inhoud of die volume sop in die fles?', checkMode: 'auto', correctAnswer: 'volume', correctAnswers: ['volume'], explanation: '180 ml is die hoeveelheid sop wat werklik nou in die fles is, dus is dit die volume. Die fles se inhoud is steeds 500 ml al is dit net gedeeltelik vol.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die hoeveelheid oogdruppels uit ʼn klein druppelflessie te meet: ml of l?', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'milliliter', 'milliliters'], explanation: 'ʼn Druppelflessie gee ʼn baie klein hoeveelheid vloeistof, dus is milliliter (ml) die sinvolle eenheid. Liter sou ʼn ongemaklike, baie klein desimaal gee.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die hoeveelheid diesel in ʼn aflewervragmotor se brandstoftenk te meet: ml of l?', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'liter', 'liters'], explanation: 'ʼn Vragmotor se brandstoftenk hou ʼn groot hoeveelheid brandstof, dus is liter (l) die sinvolle eenheid. Milliliter sou ʼn enorme, lomp getal gee.' },
        { difficulty: 'Easy', question: 'Skakel 5 l na milliliter om.', checkMode: 'auto', correctAnswer: '5000ml', correctAnswers: ['5000ml', '5000 ml', '5000'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 5 × 1 000 = 5 000 ml.' },
        { difficulty: 'Easy', question: 'Skakel 2,75 l na milliliter om.', checkMode: 'auto', correctAnswer: '2750ml', correctAnswers: ['2750ml', '2750 ml', '2750'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 2,75 × 1 000 = 2 750 ml.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 6 250 ml na liter om.', checkMode: 'auto', correctAnswer: '6,25l', correctAnswers: ['6,25l', '6,25 l', '6,25', '6.25l', '6.25 l', '6.25'], explanation: 'Om milliliter na liter om te skakel, deel deur 1 000. 6 250 ÷ 1 000 = 6,25 l.' },
        { difficulty: 'Medium', question: 'Skakel 8 400 ml na liter om.', checkMode: 'auto', correctAnswer: '8,4l', correctAnswers: ['8,4l', '8,4 l', '8,4', '8,40l', '8,40 l', '8.4l', '8.4 l', '8.4'], explanation: 'Om milliliter na liter om te skakel, deel deur 1 000. 8 400 ÷ 1 000 = 8,4 l.' },
        { difficulty: 'Medium', question: 'ʼn Bottel is gemerk "0,85 l". Skakel dit na milliliter om, en verduidelik dan in een sin waarom jou antwoord sinvol is in vergelyking met die oorspronklike getal.', checkMode: 'self', answer: '0,85 l = 850 ml. Dit maak sin omdat milliliter ʼn kleiner eenheid as liter is, dus behoort omskakeling na milliliter ʼn groter getal te gee — en 850 is baie groter as 0,85, wat wys dat die omskakelingsrigting (vermenigvuldig met 1 000) korrek was.' },
        { difficulty: 'Medium', question: 'ʼn Maatbeker het merke elke 100 ml. Die watervlak is by die 8ste merk bo 0 ml. Hoeveel water is in die beker?', checkMode: 'auto', correctAnswer: '800ml', correctAnswers: ['800ml', '800 ml', '800'], explanation: 'Tel 8 merke van 100 ml elk vanaf 0 op: 8 × 100 = 800 ml.' },
        { difficulty: 'Medium', question: 'ʼn Maatbeker het merke elke 150 ml. Die watervlak is presies halfpad tussen die 300 ml-merk en die 600 ml-merk. Hoeveel water is in die beker?', checkMode: 'auto', correctAnswer: '450ml', correctAnswers: ['450ml', '450 ml', '450'], explanation: 'Die verskil tussen die merke is 600 − 300 = 300. Die helfte van 300 is 150. Tel dit by die laer merk: 300 + 150 = 450 ml.' },
        { difficulty: 'Medium', question: 'ʼn Maatsilinder het merke elke 20 ml. Die vloeistofvlak is by die 12de merk bo 0 ml. Hoeveel vloeistof is in die silinder?', checkMode: 'auto', correctAnswer: '240ml', correctAnswers: ['240ml', '240 ml', '240'], explanation: 'Tel 12 merke van 20 ml elk vanaf 0 op: 12 × 20 = 240 ml.' },
        { difficulty: 'Medium-Hard', question: 'Amahle skakel 2 400 ml na liter om deur te skryf 2 400 × 1000 = 2 400 000 l. Is Amahle korrek? Verduidelik wat sy verkeerd gedoen het.', checkMode: 'self', answer: 'Nee, Amahle is verkeerd. Om van milliliter (ʼn kleiner eenheid) na liter (ʼn groter eenheid) om te skakel, moet jy deur 1 000 deel, nie vermenigvuldig nie. Die korrekte berekening is 2 400 ÷ 1 000 = 2,4 l. Amahle het die verkeerde bewerking gebruik — vermenigvuldiging het die getal veels te groot gemaak, maar omskakeling na ʼn groter eenheid behoort die getal altyd kleiner te maak.' },
        { difficulty: 'Medium-Hard', question: 'Kagiso lees ʼn maatsilinder deur reg van bo af te kyk in plaas van van die kant af op ooghoogte, en skryf 320 ml neer. Verduidelik waarom sy lesing onakkuraat kan wees, en wat hy eerder moet doen.', checkMode: 'self', answer: 'As jy van bo af kyk, verander dit die hoek waarop die watervlak met die skaal lyk om te belyn, sodat die lesing hoër of laer as die werklike hoeveelheid kan lyk. Kagiso moet homself posisioneer sodat sy oë gelyk is met die vloeistofoppervlak, van die kant af kyk, en by die onderkant van die kromming (die meniskus) lees vir ʼn akkurate meting.' },
        { difficulty: 'Hard', question: 'ʼn Beker benodig 2,3 l limonade vir ʼn partytjie. Lerato het reeds 900 ml ingegooi. Hoeveel meer milliliter limonade moet sy nog byvoeg?', checkMode: 'auto', correctAnswer: '1400ml', correctAnswers: ['1400ml', '1400 ml', '1400', '1,4l', '1,4 l', '1.4l', '1.4 l'], explanation: 'Skakel 2,3 l na ml om: 2,3 × 1 000 = 2 300 ml. Trek af wat reeds ingegooi is: 2 300 − 900 = 1 400 ml word nog benodig.' },
        { difficulty: 'Hard', question: 'ʼn 2,5 l bottel vrugtesap het 1 600 ml in glase uitgeskink by ʼn familiebyeenkoms. Hoeveel vrugtesap is oor in die bottel, in milliliter?', checkMode: 'auto', correctAnswer: '900ml', correctAnswers: ['900ml', '900 ml', '900', '0,9l', '0,9 l', '0.9l', '0.9 l'], explanation: 'Skakel 2,5 l na ml om: 2,5 × 1 000 = 2 500 ml. Trek die hoeveelheid wat uitgeskink is af: 2 500 − 1 600 = 900 ml oor.' },
        { difficulty: 'Hard', question: 'Tydens ʼn wetenskap-eksperiment skink ʼn leerder 6 toetsbuise oplossing, elk 150 ml, uit ʼn 1 l beker. Hoeveel oplossing is oor in die beker, in milliliter?', checkMode: 'auto', correctAnswer: '100ml', correctAnswers: ['100ml', '100 ml', '100', '0,1l', '0,1 l', '0.1l', '0.1 l'], explanation: 'Totaal uitgeskink: 6 × 150 ml = 900 ml. Skakel 1 l na ml om: 1 × 1 000 = 1 000 ml. Trek af: 1 000 − 900 = 100 ml oor.' },
        { difficulty: 'Hard', question: 'Palesa skink drie houers in ʼn leë 2,5 l beker: 700 ml, 1,1 l, en 650 ml. Sal alles inpas sonder dat die beker oorloop? Wys jou berekening en verduidelik.', checkMode: 'self', answer: 'Skakel alles na milliliter om: 700 ml + (1,1 × 1 000) ml + 650 ml = 700 + 1 100 + 650 = 2 450 ml. Die beker se inhoud is 2,5 l = 2 500 ml. Aangesien 2 450 ml minder is as 2 500 ml, pas alles in, met slegs 50 ml spasie oor — dit is baie naby aan oorloop maar loop nie oor nie.' },
        { difficulty: 'Hard', question: 'Tenk X bevat 3,1 l water. Tenk Y bevat 3 050 ml water. Watter tenk bevat meer water, en met hoeveel milliliter?', checkMode: 'auto', correctAnswer: 'X50ml', correctAnswers: ['X50ml', 'X, 50ml', 'X 50ml', 'Tenk X 50ml', 'tenkX50ml'], explanation: 'Skakel Tenk X na milliliter om: 3,1 × 1 000 = 3 100 ml. Vergelyk met Tenk Y: 3 050 ml. Tenk X het meer, met 3 100 − 3 050 = 50 ml.' },
        { difficulty: 'Hard', question: 'ʼn Watertenk het ʼn inhoud van 15 l. Dit word gevul deur ʼn 2 l emmer 6 keer in te gooi, en dan word ʼn verdere 1,5 l met ʼn beker bygevoeg. Is die tenk nou vol, oorlopend, of steeds nie vol nie? Verduidelik jou redenasie met volledige berekening.', checkMode: 'self', answer: 'Water uit die emmer: 6 × 2 l = 12 l. Tel die ekstra by: 12 + 1,5 = 13,5 l. Die tenk se inhoud is 15 l. Aangesien 13,5 l minder is as 15 l, is die tenk nog nie vol nie — daar is nog 15 − 13,5 = 1,5 l (1 500 ml) spasie oor voordat dit sou oorloop.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue met inhoud, volume, omskakelings en bekerlesings werk.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn stewige begrip — gaan gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor omskakelings en berekeninge weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike-wêreld kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Gieter hou 4 liter water wanneer dit heeltemal vol is. Is 4 liter die inhoud of die volume van die gieter?', checkMode: 'auto', correctAnswer: 'inhoud', correctAnswers: ['inhoud'], explanation: 'Inhoud is die maksimum wat ʼn houer kan hou wanneer dit vol is. Aangesien 4 liter is wat die gieter hou wanneer dit heeltemal vol is, is dit die inhoud.' },
        { difficulty: 'Easy', question: 'ʼn 2 liter beker het 1,2 l ystee daarin by ʼn piekniek. Is 1,2 l die inhoud of die volume ystee in die beker?', checkMode: 'auto', correctAnswer: 'volume', correctAnswers: ['volume'], explanation: '1,2 l is die hoeveelheid ystee wat werklik nou in die beker is, dus is dit die volume. Die beker se inhoud is steeds 2 liter al is dit nie vol nie.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die hoeveelheid vanieljegeursel wat by kolwerk gevoeg word te meet: ml of l?', checkMode: 'auto', correctAnswer: 'ml', correctAnswers: ['ml', 'milliliter', 'milliliters'], explanation: 'Vanieljegeursel word in klein hoeveelhede bygevoeg, dus is milliliter (ml) die sinvolle eenheid. Liter sou ʼn ongemaklike, baie klein desimaal gee.' },
        { difficulty: 'Easy', question: 'Watter eenheid sal jy gebruik om die hoeveelheid reënwater wat in ʼn groot tuintenk opgevang word te meet: ml of l?', checkMode: 'auto', correctAnswer: 'l', correctAnswers: ['l', 'liter', 'liters'], explanation: 'ʼn Tuintenk vang ʼn groot hoeveelheid water op, dus is liter (l) die sinvolle eenheid. Milliliter sou ʼn enorme, lomp getal gee.' },
        { difficulty: 'Easy', question: 'Skakel 7 l na milliliter om.', checkMode: 'auto', correctAnswer: '7000ml', correctAnswers: ['7000ml', '7000 ml', '7000'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 7 × 1 000 = 7 000 ml.' },
        { difficulty: 'Easy', question: 'Skakel 4,5 l na milliliter om.', checkMode: 'auto', correctAnswer: '4500ml', correctAnswers: ['4500ml', '4500 ml', '4500'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 4,5 × 1 000 = 4 500 ml.' },
        { difficulty: 'Easy-Medium', question: 'Skakel 0,85 l na milliliter om.', checkMode: 'auto', correctAnswer: '850ml', correctAnswers: ['850ml', '850 ml', '850'], explanation: 'Om liter na milliliter om te skakel, vermenigvuldig met 1 000. 0,85 × 1 000 = 850 ml.' },
        { difficulty: 'Medium', question: 'Skakel 9 020 ml na liter om.', checkMode: 'auto', correctAnswer: '9,02l', correctAnswers: ['9,02l', '9,02 l', '9,02', '9.02l', '9.02 l', '9.02'], explanation: 'Om milliliter na liter om te skakel, deel deur 1 000. 9 020 ÷ 1 000 = 9,02 l. Let op dat die 0 sy plek as ʼn plekhouer in die desimaal behou.' },
        { difficulty: 'Medium', question: 'ʼn Houer is gemerk "300 ml". Skakel dit na liter om, en verduidelik dan in een sin waarom jou antwoord sinvol is in vergelyking met die oorspronklike getal.', checkMode: 'self', answer: '300 ml = 0,3 l. Dit maak sin omdat liter ʼn groter eenheid as milliliter is, dus behoort omskakeling na liter ʼn kleiner getal te gee — en 0,3 is baie kleiner as 300, wat wys dat die omskakelingsrigting (deel deur 1 000) korrek was.' },
        { difficulty: 'Medium', question: 'ʼn Maatbeker het merke elke 200 ml. Die watervlak is by die 5de merk bo 100 ml. Hoeveel water is in die beker?', checkMode: 'auto', correctAnswer: '1100ml', correctAnswers: ['1100ml', '1100 ml', '1100', '1,1l', '1,1 l', '1.1l', '1.1 l'], explanation: 'Begin by 100 ml en tel 5 merke van 200 ml elk op: 100 + (5 × 200) = 100 + 1 000 = 1 100 ml.' },
        { difficulty: 'Medium', question: 'ʼn Maatbeker het merke elke 250 ml. Die watervlak is presies halfpad tussen die 450 ml-merk en die 700 ml-merk. Hoeveel water is in die beker?', checkMode: 'auto', correctAnswer: '575ml', correctAnswers: ['575ml', '575 ml', '575'], explanation: 'Die verskil tussen die merke is 700 − 450 = 250. Die helfte van 250 is 125. Tel dit by die laer merk: 450 + 125 = 575 ml.' },
        { difficulty: 'Medium', question: 'ʼn Maatsilinder het merke elke 25 ml. Die vloeistofvlak is by die 10de merk bo 0 ml. Hoeveel vloeistof is in die silinder?', checkMode: 'auto', correctAnswer: '250ml', correctAnswers: ['250ml', '250 ml', '250'], explanation: 'Tel 10 merke van 25 ml elk vanaf 0 op: 10 × 25 = 250 ml.' },
        { difficulty: 'Medium-Hard', question: 'Gegewe die feit "1 000 ml = 1 l", neem ʼn student aan dat omskakeling van ml na l altyd die getal groter behoort te maak, aangesien ml "die kleintjie" is. Verduidelik met behulp van ʼn werklike voorbeeld of dit korrek is.', checkMode: 'self', answer: 'Dit is verkeerd — dis eintlik die teenoorgestelde. Milliliter is die kleiner eenheid, dus benodig ʼn gegewe hoeveelheid ʼn baie groter getal milliliters om te beskryf, maar ʼn baie kleiner getal liters. Byvoorbeeld, 5 000 ml = 5 l: as jy van milliliter na liter gaan, word die getal kleiner (5 000 word 5), omdat jy deur 1 000 deel. Omskakeling na ʼn groter eenheid (liter) maak die getal altyd kleiner, nie groter nie.' },
        { difficulty: 'Medium-Hard', question: 'Mpho lees ʼn maatbeker deur reg van bo af na die opening te kyk in plaas van van die kant af op ooghoogte, en skryf 1 450 ml neer. Verduidelik waarom sy lesing onakkuraat kan wees, en wat hy eerder moet doen.', checkMode: 'self', answer: 'As jy reguit van bo af kyk, verwring dit hoe die wateroppervlak met die skaal op die kant van die beker belyn, wat die lesing hoër of laer as die werklike hoeveelheid laat lyk. Mpho moet sy oë laat sak (of die beker optel) sodat dit gelyk is met die vloeistofoppervlak, dit van die kant af bekyk, en die meting by die onderkant van die kromming (die meniskus) lees vir ʼn akkurate resultaat.' },
        { difficulty: 'Hard', question: 'ʼn Ponsbak-resep benodig 2,25 l vrugtesapmengsel. Ayesha het reeds 800 ml ingegooi. Hoeveel meer milliliter vrugtesapmengsel moet sy nog byvoeg?', checkMode: 'auto', correctAnswer: '1450ml', correctAnswers: ['1450ml', '1450 ml', '1450', '1,45l', '1,45 l', '1.45l', '1.45 l'], explanation: 'Skakel 2,25 l na ml om: 2,25 × 1 000 = 2 250 ml. Trek af wat reeds ingegooi is: 2 250 − 800 = 1 450 ml word nog benodig.' },
        { difficulty: 'Hard', question: 'ʼn 5 l houer swembadchemikalie het 2 350 ml gebruik tydens ʼn skoonmaaksessie. Hoeveel chemikalie is oor in die houer, in milliliter?', checkMode: 'auto', correctAnswer: '2650ml', correctAnswers: ['2650ml', '2650 ml', '2650', '2,65l', '2,65 l', '2.65l', '2.65 l'], explanation: 'Skakel 5 l na ml om: 5 × 1 000 = 5 000 ml. Trek die hoeveelheid wat gebruik is af: 5 000 − 2 350 = 2 650 ml oor.' },
        { difficulty: 'Hard', question: 'By ʼn braai vul ʼn gasheer 7 koeldrankbottels, elk 250 ml, uit ʼn 3 l houer. Hoeveel koeldrank is oor in die houer, in milliliter?', checkMode: 'auto', correctAnswer: '1250ml', correctAnswers: ['1250ml', '1250 ml', '1250', '1,25l', '1,25 l', '1.25l', '1.25 l'], explanation: 'Totaal uitgeskink: 7 × 250 ml = 1 750 ml. Skakel 3 l na ml om: 3 × 1 000 = 3 000 ml. Trek af: 3 000 − 1 750 = 1 250 ml oor.' },
        { difficulty: 'Hard', question: 'Karabo skink drie houers in ʼn leë 3 l emmer: 1,5 l, 600 ml, en 700 ml. Sal alles inpas sonder dat die emmer oorloop? Wys jou berekening en verduidelik.', checkMode: 'self', answer: 'Skakel alles na milliliter om: (1,5 × 1 000) ml + 600 ml + 700 ml = 1 500 + 600 + 700 = 2 800 ml. Die emmer se inhoud is 3 l = 3 000 ml. Aangesien 2 800 ml minder is as 3 000 ml, pas alles in, met 200 ml spasie nog oor — die emmer sal nie oorloop nie.' },
        { difficulty: 'Hard', question: 'Houer P bevat 4,2 l verf. Houer Q bevat 4 150 ml verf. Watter houer bevat meer verf, en met hoeveel milliliter?', checkMode: 'auto', correctAnswer: 'P50ml', correctAnswers: ['P50ml', 'P, 50ml', 'P 50ml', 'Houer P 50ml', 'houerP50ml'], explanation: 'Skakel Houer P na milliliter om: 4,2 × 1 000 = 4 200 ml. Vergelyk met Houer Q: 4 150 ml. Houer P het meer, met 4 200 − 4 150 = 50 ml.' },
        { difficulty: 'Hard', question: 'ʼn Akwarium het ʼn inhoud van 20 l. Dit word gevul deur ʼn 2,5 l beker 7 keer in te gooi, en dan word ʼn verdere 1 800 ml uit ʼn tuinslang bygevoeg. Is die akwarium nou vol, oorlopend, of steeds nie vol nie? Verduidelik jou redenasie met volledige berekening.', checkMode: 'self', answer: 'Water uit die beker: 7 × 2,5 l = 17,5 l = 17 500 ml. Tel die ekstra by: 17 500 + 1 800 = 19 300 ml, wat 19,3 l is. Die akwarium se inhoud is 20 l. Aangesien 19,3 l minder is as 20 l, is die akwarium nog nie vol nie — daar is nog 20 − 19,3 = 0,7 l (700 ml) spasie oor voordat dit sou oorloop.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan inhoud, volume, omskakelings en bekerlesings op werklike-wêreld probleme toepas.' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van hierdie vaardighede — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor woordprobleme en berekeninge weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan! Werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ] as PracticeSet[],
}
