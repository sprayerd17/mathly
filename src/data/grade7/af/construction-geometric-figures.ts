import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (construction roles) ─────────────────────────────────────
// measured/given length or angle → blue   (#2563eb)
// drawn/constructed result       → green  (#16a34a)
// tool markings / set square     → orange (#ea580c)
// arc / compass width            → blue   (#2563eb) — reuses bl for consistency with Grade 8
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Konstruksie van Meetkundige Figure',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — USING A RULER AND PROTRACTOR ACCURATELY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ruler-protractor-accuracy',
      title: 'Die Akkurate Gebruik van ʼn Liniaal en Gradeboog',
      icon: '📏',
      explanation:
        `<p style="margin-bottom:16px;">Voordat ons vorms kan konstrueer, moet ons akkuraat kan meet en teken. ʼn <strong>Liniaal</strong> word gebruik om lynstukke van ʼn presiese lengte te meet en te teken, en ʼn <strong>gradeboog</strong> word gebruik om hoeke van ʼn presiese grootte te meet en te teken. Dit is noodsaaklik om hierdie basiese vaardighede reg te kry — elke konstruksie later hang af van versigtige, akkurate meting.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe lengte / hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('getrekte lyn / hoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gradeboog- / liniaalmerk')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn lynstuk van ʼn gegewe lengte te teken</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Plaas die ${or('0 cm-merk')} van die liniaal by jou beginpunt en merk dit as een eindpunt.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Hou die liniaal stil, vind die ${bl('gegewe lengte')}-merk op die liniaal se skaal en merk dit as die ander eindpunt.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Verbind die twee merke met ʼn reguit ${gr('getrekte lyn')} langs die rand van die liniaal.</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn hoek van ʼn gegewe grootte te teken</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Trek ʼn reguit lyn en merk ʼn punt daarop — hierdie punt is die <strong>hoekpunt</strong> van die hoek.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Plaas die ${or('middelpunt (oorsprong)')} van die gradeboog presies op die hoekpunt, met die ${or('basislyn')} van die gradeboog langs die reguit lyn.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Vind die ${bl('gegewe hoekgrootte')} op die gradeboog se skaal (lees vanaf 0° op die korrekte kant) en merk ʼn klein kolletjie op daardie punt.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#ea580c;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">4</div>` +
        `<p style="margin:0;color:#374151;">Verwyder die gradeboog en gebruik ʼn liniaal om die hoekpunt met die kolletjie te verbind deur ʼn reguit ${gr('getrekte lyn')} — dit voltooi die hoek.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Wenk: watter skaal om te lees</p>` +
        `<p style="margin:0;color:#92400e;">Die meeste gradebole het twee skale wat in teenoorgestelde rigtings loop (0°→180° en 180°→0°). Begin altyd tel vanaf ${or('0°')} aan die kant waar jou basislyn-arm lê, en nie net vanaf watter skaal ook al die naaste aan die gewenste getal lyk nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Teken ʼn lynstuk PQ wat 7 cm lank is.',
          answer: `ʼn Reguit ${gr('lynstuk')} van presies ${bl('7 cm')} lank, getrek met ʼn liniaal.`,
          steps: [
            `Plaas die ${or('0 cm-merk')} van die liniaal by punt <strong>P</strong>.`,
            `Vind die ${bl('7 cm')}-merk op die liniaal se skaal en merk hierdie punt as <strong>Q</strong>.`,
            `Verbind P met Q deur ʼn reguit ${gr('lyn')} langs die liniaal se rand. Kontroleer deur weer te meet: PQ = ${bl('7 cm')}.`,
          ],
        },
        {
          question: 'Gebruik ʼn gradeboog om ʼn hoek van 50° by punt V te teken.',
          answer: `ʼn Hoek van presies ${bl('50°')} getrek by hoekpunt <strong>V</strong>.`,
          steps: [
            `Trek ʼn reguit lyn deur <strong>V</strong> — dit sal een arm van die hoek wees.`,
            `Plaas die ${or('middelpunt')} van die gradeboog op <strong>V</strong>, met die ${or('basislyn')} presies langs die arm.`,
            `Begin vanaf ${or('0°')} aan daardie kant, tel na ${bl('50°')} toe en merk ʼn kolletjie.`,
            `Verbind <strong>V</strong> met die kolletjie met ʼn liniaal om die tweede arm te vorm — die hoek tussen die twee arms is ${gr('50°')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Watter instrument gebruik jy om die grootte van ʼn hoek in grade te meet?',
          answer: 'gradeboog',
          checkMode: 'auto',
          correctAnswer: 'gradeboog',
          explanation: 'ʼn Gradeboog het ʼn skaal wat in grade gemerk is (gewoonlik 0° tot 180°) en word gebruik om hoeke akkuraat te meet of te teken.',
        },
        {
          difficulty: 'Medium',
          question: 'Beskryf, in jou eie woorde, die stappe wat jy sou volg om ʼn lynstuk van presies 9,5 cm te teken met ʼn liniaal.',
          answer: 'Plaas die 0 cm-merk van die liniaal by die beginpunt, vind die 9,5 cm-merk op die skaal, merk daardie punt, en verbind dan die twee punte met ʼn reguit lyn langs die liniaal se rand.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Amahle meet ʼn hoek met haar gradeboog. Sy plaas die middelpunt korrek op die hoekpunt, maar lees 130° van die buitenste skaal af terwyl die hoek eintlik vanaf 0° op die binneste skaal oopmaak. Watter fout het sy gemaak, en wat is die korrekte grootte van die hoek as die binneste-skaal-lesing by dieselfde armposisie 50° is?\n\na) Verduidelik haar fout.\nb) Wat is die korrekte hoekgrootte?',
          answer: 'a) Sy het die verkeerde skaal gelees — gradebole het twee skale wat in teenoorgestelde rigtings loop, en sy moet lees vanaf 0° aan die kant waar die basislyn-arm werklik lê.\nb) 50°',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'ʼn Liniaal wat ʼn 7 cm-lynstuk PQ meet, en ʼn gradeboog by hoekpunt V met sy basislyn langs een arm, wat ʼn 50°-hoek vanaf die 0°-merk meet.',

      diagramSvg:
        '<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="95" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Liniaal wat PQ = 7 cm meet</text>' +
        '<rect x="15" y="25" width="160" height="20" fill="#f8fafc" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="15" y1="25" x2="15" y2="45" stroke="#ea580c" stroke-width="2"/>' +
        '<line x1="35" y1="25" x2="35" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="55" y1="25" x2="55" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="75" y1="25" x2="75" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="95" y1="25" x2="95" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="115" y1="25" x2="115" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="135" y1="25" x2="135" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<line x1="155" y1="25" x2="155" y2="45" stroke="#ea580c" stroke-width="2"/>' +
        '<line x1="175" y1="25" x2="175" y2="37" stroke="#0f1f3d" stroke-width="1"/>' +
        '<text x="15" y="48" font-size="9" fill="#374151" text-anchor="middle">0</text>' +
        '<text x="155" y="48" font-size="9" fill="#374151" text-anchor="middle">7</text>' +
        '<text x="175" y="48" font-size="9" fill="#374151" text-anchor="middle">8</text>' +
        '<line x1="15" y1="60" x2="155" y2="60" stroke="#16a34a" stroke-width="3"/>' +
        '<line x1="15" y1="55" x2="15" y2="65" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="155" y1="55" x2="155" y2="65" stroke="#16a34a" stroke-width="2"/>' +
        '<text x="15" y="78" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">P</text>' +
        '<text x="155" y="78" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Q</text>' +
        '<text x="85" y="93" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">7 cm</text>' +
        '<text x="235" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Gradeboog meet 50° by V</text>' +
        '<path d="M 165,150 A 70,70 0 0 1 305,150" fill="none" stroke="#0f1f3d" stroke-width="2"/>' +
        '<line x1="165" y1="150" x2="305" y2="150" stroke="#ea580c" stroke-width="2.5"/>' +
        '<line x1="235" y1="80" x2="235" y2="74" stroke="#0f1f3d" stroke-width="1"/>' +
        '<path d="M 255,150 A 20,20 0 0 1 247.9,134.7" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="266" y="141" font-size="11" font-weight="700" fill="#ea580c">50°</text>' +
        '<line x1="235" y1="150" x2="289.6" y2="84.9" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="276.8" cy="100.2" r="2.5" fill="#ea580c"/>' +
        '<circle cx="235" cy="150" r="3.5" fill="#ea580c"/>' +
        '<text x="235" y="166" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">V</text>' +
        '<text x="305" y="164" font-size="9" fill="#ea580c" text-anchor="middle">0°</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om akkuraat ʼn lynstuk van ʼn gegewe lengte met ʼn liniaal te teken, en ʼn hoek van ʼn gegewe grootte met ʼn gradeboog, met gegewe metings in blou en getrekte resultate in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CONSTRUCTING PERPENDICULAR AND PARALLEL LINES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perpendicular-parallel-lines',
      title: 'Konstruksie van Loodregte en Parallelle Lyne',
      icon: '⊥',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Loodregte lyn</strong> ontmoet ʼn ander lyn teen presies 90°. ʼn <strong>Parallelle lyn</strong> bly presies dieselfde afstand van ʼn ander lyn af regdeur en ontmoet dit nooit — ons sê die twee lyne is <strong>ekwidistant</strong> (ʼn gelyke afstand uitmekaar) by elke punt. Ons kan albei akkuraat konstrueer met ʼn liniaal en ʼn <strong>winkelhaak</strong> (ʼn regshoekige driehoekige instrument), of met ʼn passer.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike lyn')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('loodregte / parallelle lyn')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('winkelhaak')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Loodregte Lyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee lyne wat teen presies 90° (ʼn regte hoek) ontmoet.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Parallelle Lyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee reguit lyne in dieselfde vlak wat nooit ontmoet nie, ongeag hoe ver hulle verleng word.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ekwidistant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Gelyke afstand uitmekaar by elke punt. Parallelle lyne is ekwidistant van mekaar oor hul hele lengte.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn loodregte lyn met ʼn winkelhaak te konstrueer</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Lyn die ${or('winkelhaak')} se langer rand presies op met die ${bl('oorspronklike lyn')}, met die regte-hoek-hoekpunt by die punt waar die loodregte lyn moet deurgaan.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Trek die ${gr('loodregte lyn')} langs die winkelhaak se korter rand (die een wat die 90°-hoek vorm) — hierdie lyn ontmoet die ${bl('oorspronklike lyn')} teen presies 90°.</p>` +
        `</div>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn parallelle lyn met ʼn liniaal en winkelhaak te konstrueer</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#16a34a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Plaas een rand van die ${or('winkelhaak')} teen die ${bl('oorspronklike lyn')}, en plaas ʼn liniaal plat teen ʼn ander rand van die winkelhaak om as ʼn gids te dien.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#16a34a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Hou die liniaal stewig op sy plek en skuif die ${or('winkelhaak')} langs die liniaal na die posisie waar die ${gr('parallelle lyn')} getrek moet word.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#16a34a;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Trek die ${gr('parallelle lyn')} langs dieselfde rand van die winkelhaak as voorheen — aangesien die winkelhaak se hoek teenoor die liniaal nie verander het nie, is hierdie nuwe lyn ${or('ekwidistant')} van die oorspronklike lyn af regdeur, dus is dit parallel.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wenk: jou konstruksie kontroleer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Nadat jy ʼn ${gr('loodregte lyn')} gekonstrueer het, kontroleer dit met ʼn gradeboog — dit behoort presies 90° te lees. Nadat jy ʼn ${gr('parallelle lyn')} gekonstrueer het, meet die loodregte afstand tussen die twee lyne by twee verskillende punte — as die lyne werklik parallel is, sal albei afstande gelyk wees (${or('ekwidistant')}).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gebruik ʼn winkelhaak om ʼn lyn loodreg op lyn AB te konstrueer, wat deur punt P op die lyn gaan.',
          answer: `ʼn ${gr('Loodregte lyn')} deur <strong>P</strong>, wat AB teen presies 90° ontmoet.`,
          steps: [
            `Lyn die ${or('langer rand')} van die winkelhaak presies op met ${bl('lyn AB')}, met die regte-hoek-hoekpunt by <strong>P</strong>.`,
            `Trek ʼn ${gr('lyn')} langs die winkelhaak se ander rand, met beginpunt by <strong>P</strong>.`,
            `Hierdie ${gr('getrekte lyn')} ontmoet AB teen presies 90° by P, dus is dit loodreg op AB.`,
          ],
        },
        {
          question: 'Konstrueer ʼn lyn parallel aan lyn CD, wat deur punt R gaan wat 4 cm van CD af is.',
          answer: `ʼn ${gr('Parallelle lyn')} deur <strong>R</strong>, wat ${or('ekwidistant')} (4 cm) van CD af bly oor sy hele lengte.`,
          steps: [
            `Plaas ʼn winkelhaak teen ${bl('lyn CD')} en ʼn liniaal teen ʼn ander rand van die winkelhaak as ʼn skuifgids.`,
            `Skuif die winkelhaak langs die liniaal totdat sy rand met punt <strong>R</strong> ooreenstem (meet 4 cm vanaf CD met ʼn afsonderlike kontrole met die liniaal).`,
            `Trek die ${gr('parallelle lyn')} deur <strong>R</strong> langs die winkelhaak se rand.`,
            `Aangesien die winkelhaak se hoek teenoor die liniaal nie verander het terwyl dit geskuif is nie, is elke punt op die nuwe lyn dieselfde ${or('4 cm')} afstand van CD af — die lyne is parallel.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Wat is die wiskundige woord vir twee lyne wat altyd dieselfde afstand uitmekaar is en nooit ontmoet nie?',
          answer: 'parallel (die lyne is ekwidistant)',
          checkMode: 'auto',
          correctAnswer: 'ekwidistant',
          explanation: 'Punte of lyne wat ʼn gelyke afstand uitmekaar bly by elke punt, word ekwidistant genoem — dit is die eienskap wat twee lyne parallel maak.',
        },
        {
          difficulty: 'Medium',
          question: 'Beskryf hoe jy ʼn liniaal en winkelhaak sou gebruik om ʼn lyn loodreg op ʼn gegewe lyn AB by ʼn gemerkte punt P op die lyn te konstrueer.',
          answer: 'Lyn die langer rand van die winkelhaak presies op met AB met die regte-hoek-hoekpunt by P, en trek dan ʼn lyn langs die ander rand van die winkelhaak deur P — hierdie lyn ontmoet AB teen presies 90°.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Sipho konstrueer ʼn lyn wat hy beweer parallel is aan lyn EF. Hy meet die afstand tussen die twee lyne by een punt en kry 5 cm.\n\na) Is dit genoeg om die afstand by slegs een punt te meet om te bewys dat die lyne parallel is? Verduidelik.\nb) Watter ekstra kontrole moet Sipho doen om seker te maak?',
          answer: 'a) Nee — om net een punt te kontroleer is nie genoeg nie, want twee lyne kan 5 cm uitmekaar wees by daardie punt terwyl hulle elders nader aan mekaar of verder uitmekaar beweeg (d.w.s. nie werklik parallel nie).\nb) Hy moet die loodregte afstand tussen die lyne by ʼn tweede punt meet, ver van die eerste af. As albei afstande gelyk is (5 cm), is die lyne oral ekwidistant en dus parallel.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'ʼn Winkelhaak teen lyn AB geplaas met ʼn loodregte lyn deur punt P teen 90° getrek, en ʼn winkelhaak wat langs ʼn liniaalgids skuif om ʼn lyn parallel aan CD deur punt R te teken, met gelyke afstande van 4 cm by twee punte gemerk om te bevestig dat die lyne ewe ver uitmekaar is.',

      diagramSvg:
        '<svg viewBox="0 0 310 200" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="75" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Loodregte lyn deur P</text>' +
        '<line x1="15" y1="100" x2="140" y2="100" stroke="#2563eb" stroke-width="2.5"/>' +
        '<text x="15" y="115" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">A</text>' +
        '<text x="140" y="115" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">B</text>' +
        '<polygon points="77,100 30,100 77,50" fill="#ea580c" fill-opacity="0.12" stroke="#ea580c" stroke-width="1.8"/>' +
        '<polyline points="70,100 70,93 77,93" fill="none" stroke="#ea580c" stroke-width="1.5"/>' +
        '<line x1="77" y1="100" x2="77" y2="40" stroke="#16a34a" stroke-width="2.5"/>' +
        '<text x="77" y="116" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">P</text>' +
        '<text x="86" y="94" font-size="9" font-weight="700" fill="#ea580c">90°</text>' +
        '<text x="237" y="14" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Parallelle lyn deur R</text>' +
        '<line x1="175" y1="140" x2="300" y2="140" stroke="#2563eb" stroke-width="2.5"/>' +
        '<text x="175" y="155" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">C</text>' +
        '<text x="300" y="155" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">D</text>' +
        '<line x1="175" y1="80" x2="300" y2="80" stroke="#16a34a" stroke-width="2.5"/>' +
        '<line x1="225" y1="150" x2="225" y2="60" stroke="#ea580c" stroke-width="1.2" stroke-dasharray="4,3"/>' +
        '<polygon points="225,140 205,140 225,120" fill="#ea580c" fill-opacity="0.12" stroke="#ea580c" stroke-width="1.5"/>' +
        '<polygon points="225,80 205,80 225,60" fill="#ea580c" fill-opacity="0.12" stroke="#ea580c" stroke-width="1.5"/>' +
        '<line x1="190" y1="140" x2="190" y2="80" stroke="#ea580c" stroke-width="1.3"/>' +
        '<polygon points="190,80 186,88 194,88" fill="#ea580c"/>' +
        '<polygon points="190,140 186,132 194,132" fill="#ea580c"/>' +
        '<line x1="270" y1="140" x2="270" y2="80" stroke="#ea580c" stroke-width="1.3"/>' +
        '<polygon points="270,80 266,88 274,88" fill="#ea580c"/>' +
        '<polygon points="270,140 266,132 274,132" fill="#ea580c"/>' +
        '<text x="178" y="113" font-size="9" font-weight="700" fill="#ea580c" text-anchor="end">4 cm</text>' +
        '<text x="282" y="113" font-size="9" font-weight="700" fill="#ea580c" text-anchor="start">4 cm</text>' +
        '<circle cx="225" cy="80" r="2.5" fill="#16a34a"/>' +
        '<text x="225" y="70" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">R</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn loodregte lyn en ʼn parallelle lyn met ʼn liniaal en winkelhaak te konstrueer, met die oorspronklike lyn in blou, die gekonstrueerde loodregte of parallelle lyn in groen en die winkelhaak in oranje" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CONSTRUCTING TRIANGLES GIVEN THREE SIDES (SSS)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'constructing-triangles-sss',
      title: 'Konstruksie van Driehoeke Gegewe Drie Sye',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan ʼn driehoek akkuraat konstrueer wanneer al drie sylengtes gegee word, deur slegs ʼn <strong>passer</strong> en <strong>liniaal</strong> te gebruik. Hierdie metode werk omdat ʼn passer ons toelaat om elke punt te merk wat ʼn presiese vaste afstand (die ${bl('radius')}) van ʼn middelpunt af is — sodat waar twee ${bl('passerboë')} kruis, ʼn punt is wat gelyktydig die korrekte afstand van beide eindpunte van die basis af is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('passerboë')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekonstrueerde driehoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gegewe sylengtes')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn driehoek gegewe drie sylengtes te konstrueer</p>` +
        `<div style="margin-bottom:20px;">` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">1</div>` +
        `<p style="margin:0;color:#374151;">Kies die langste ${or('gegewe sy')} en teken dit eerste as jou basis, met ʼn liniaal, en merk die eindpunte A en B.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">2</div>` +
        `<p style="margin:0;color:#374151;">Stel die passer se wydte op die ${or('tweede sylengte')} (gebruik ʼn liniaal om die passeropening te meet). Plaas die passerpunt op <strong>A</strong> en trek ʼn wye ${bl('boog')} bo die basis.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;margin-bottom:8px;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">3</div>` +
        `<p style="margin:0;color:#374151;">Stel die passer se wydte op die ${or('derde sylengte')}. Plaas die passerpunt op <strong>B</strong> en trek ʼn tweede ${bl('boog')} wat die eerste kruis.</p>` +
        `</div>` +
        `<div style="display:flex;gap:10px;align-items:flex-start;">` +
        `<div style="flex-shrink:0;width:24px;height:24px;border-radius:50%;background:#2563eb;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;">4</div>` +
        `<p style="margin:0;color:#374151;">Merk die punt waar die twee ${bl('boë')} kruis as <strong>C</strong>. Verbind <strong>A</strong> met <strong>C</strong> en <strong>B</strong> met <strong>C</strong> met ʼn liniaal om die ${gr('driehoek')} te voltooi.</p>` +
        `</div>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#b45309;margin-bottom:6px;">Kan drie lengtes altyd ʼn driehoek vorm?</p>` +
        `<p style="margin:0;color:#92400e;">Nie altyd nie! As die twee korter sye saam <strong>nie langer</strong> is as die langste sy nie, sal die twee boë nie kruis nie — die driehoek kan nie gebou word nie. Kontroleer dus vinnig voor jy konstrueer: is <em>(kortste sy + middelste sy) &gt; langste sy</em>? Indien ja, kan die driehoek gekonstrueer word. As die twee korter sye presies gelyk is aan die langste sy, of minder, plat die "driehoek" bloot uit tot ʼn reguit lyn of kan glad nie sluit nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom werk hierdie metode?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke punt op ʼn ${bl('passerboog')} is presies dieselfde afstand van die middelpunt af (die passer se vaste radius). Deur een ${bl('boog')} die korrekte afstand vanaf A te teken en ʼn ander die korrekte afstand vanaf B, is die kruispunt outomaties die korrekte afstand van <strong>beide</strong> A en B gelyktydig — wat ons die presiese derde hoekpunt gee sonder enige raaiwerk.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Konstrueer ʼn driehoek met sye 6 cm, 7 cm en 9 cm.',
          answer: `ʼn ${gr('Driehoek')} met sye van presies ${or('6 cm')}, ${or('7 cm')} en ${or('9 cm')}.`,
          steps: [
            `Kontroleer eers: is ʼn driehoek moontlik? Twee korter sye: ${or('6')} + ${or('7')} = ${or('13')}, wat groter is as die langste sy (${or('9')}) — ja, dit is moontlik.`,
            `Teken die langste sy, ${or('9 cm')}, as die basis AB met ʼn liniaal.`,
            `Stel die passer op ${or('6 cm')}, plaas die punt op <strong>A</strong>, en trek ʼn ${bl('boog')} bo die basis.`,
            `Stel die passer op ${or('7 cm')}, plaas die punt op <strong>B</strong>, en trek ʼn tweede ${bl('boog')} wat die eerste kruis.`,
            `Merk die kruispunt as <strong>C</strong> en verbind A–C en B–C met ʼn liniaal om die ${gr('driehoek')} te voltooi.`,
          ],
        },
        {
          question: 'Thabo wil ʼn driehoek met sye 3 cm, 4 cm en 9 cm konstrueer. Sal dit werk? Verduidelik, en beskryf dan wat gebeur as hy dit tog probeer.',
          answer: `Nee — dit ${or('sal nie werk nie')}, want 3 cm + 4 cm = 7 cm is minder as 9 cm.`,
          steps: [
            `Kontroleer die twee korter sye saam: ${or('3')} + ${or('4')} = ${or('7')}.`,
            `Vergelyk dit met die langste sy: ${or('7')} is minder as ${or('9')}.`,
            `Aangesien die twee korter sye nie meer as die langste sy optel nie, sal die twee ${bl('passerboë')} — een met radius 3 cm vanaf een eindpunt, een met radius 4 cm vanaf die ander eindpunt van ʼn 9 cm-basis — nie lank genoeg wees om mekaar te bereik en te kruis nie.`,
            `As Thabo dit tog probeer, sal die boë nie sny nie, sodat geen derde hoekpunt gevind kan word nie en die driehoek nie gekonstrueer kan word nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Om ʼn driehoek met ʼn sy van 8 cm met ʼn passer te konstrueer, waarop moet jy die passer se radius (wydte) stel om die boog vir daardie sy te teken?',
          answer: '8 cm',
          checkMode: 'auto',
          correctAnswer: '8',
          explanation: 'Die passer se wydte moet presies op die lengte van die sy wat dit verteenwoordig gestel word, sodat die boog elke punt merk wat daardie afstand vanaf die eindpunt is.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoek het sye van 5 cm, 12 cm en 13 cm.\n\na) Kontroleer of hierdie drie lengtes ʼn driehoek kan vorm.\nb) Indien wel, watter sy moet eerste as die basis getrek word, en waarom?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Kan hierdie lengtes ʼn driehoek vorm? (ja/nee)',
              correctAnswer: 'ja',
              explanation: 'Twee korter sye: 5 + 12 = 17, wat groter is as die langste sy, 13. Dus ja, ʼn driehoek kan gevorm word.',
            },
            {
              label: 'b) Watter lengte (in cm) moet eerste as die basis getrek word?',
              correctAnswer: '13',
              explanation: 'Dit is die maklikste om die langste sy (13 cm) eerste as die basis te teken, en dan die twee passerboë (5 cm en 12 cm) vanaf sy eindpunte te swaai om die derde hoekpunt te vind.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Lerato kry drie lengtes: 4 cm, 5 cm en 10 cm, en word gevra om ʼn driehoek te konstrueer.\n\na) Wys of hierdie driehoek gekonstrueer kan word.\nb) Verduidelik, in terme van die passerboë, presies wat verkeerd sou gaan as Lerato dit tog probeer konstrueer.',
          answer: 'a) Nee — die twee korter sye tel op tot 4 + 5 = 9 cm, wat minder is as die langste sy, 10 cm, dus kan die driehoek nie gekonstrueer word nie.\nb) As Lerato die 10 cm-basis teken en dan ʼn 4 cm-boog vanaf een end en ʼn 5 cm-boog vanaf die ander end trek, is die twee boë te kort om mekaar bo die basislyn te bereik — hulle sal nie kruis nie, sodat daar geen moontlike posisie vir die derde hoekpunt is nie.',
          checkMode: 'self',
        },
      ],

      diagramPlaceholder:
        'ʼn Driehoek met sye 6 cm, 7 cm en 9 cm gekonstrueer vanaf ʼn 9 cm-basis met twee kruisende passerboë wat die derde hoekpunt vind, langs ʼn mislukte poging met sye 3 cm, 4 cm en 9 cm waar die twee boë te kort is om te kruis.',

      diagramSvg:
        '<svg viewBox="0 0 320 195" xmlns="http://www.w3.org/2000/svg">' +
        '<text x="65" y="14" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="middle">6, 7, 9 cm — moontlik</text>' +
        '<path d="M 77.96,124.47 A 60,60 0 0 1 20,80" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<path d="M 86.06,74.22 A 70,70 0 0 1 42.4,121.9" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<line x1="20" y1="140" x2="110" y2="140" stroke="#ea580c" stroke-width="2.5"/>' +
        '<line x1="20" y1="140" x2="57.78" y2="93.4" stroke="#16a34a" stroke-width="2.5"/>' +
        '<line x1="110" y1="140" x2="57.78" y2="93.4" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="20" cy="140" r="2.5" fill="#ea580c"/>' +
        '<circle cx="110" cy="140" r="2.5" fill="#ea580c"/>' +
        '<circle cx="57.78" cy="93.4" r="2.5" fill="#16a34a"/>' +
        '<text x="14" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">A</text>' +
        '<text x="116" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">B</text>' +
        '<text x="57.78" y="82" font-size="10" font-weight="700" fill="#16a34a" text-anchor="middle">C</text>' +
        '<text x="65" y="169" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">9 cm</text>' +
        '<text x="24" y="105" font-size="9" font-weight="700" fill="#2563eb">6 cm</text>' +
        '<text x="92" y="105" font-size="9" font-weight="700" fill="#2563eb">7 cm</text>' +
        '<text x="215" y="14" font-size="10.5" font-weight="700" fill="#dc2626" text-anchor="middle">3, 4, 9 cm — nie moontlik</text>' +
        '<path d="M 198.19,129.74 A 30,30 0 0 1 180.26,111.81" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<path d="M 246.32,102.41 A 40,40 0 0 1 222.41,126.32" fill="none" stroke="#2563eb" stroke-width="1.6"/>' +
        '<line x1="198.19" y1="129.74" x2="222.41" y2="126.32" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,2"/>' +
        '<line x1="170" y1="140" x2="260" y2="140" stroke="#ea580c" stroke-width="2.5"/>' +
        '<circle cx="170" cy="140" r="2.5" fill="#ea580c"/>' +
        '<circle cx="260" cy="140" r="2.5" fill="#ea580c"/>' +
        '<text x="164" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">A</text>' +
        '<text x="266" y="154" font-size="10" font-weight="700" fill="#ea580c" text-anchor="middle">B</text>' +
        '<text x="215" y="169" font-size="9.5" font-weight="700" fill="#ea580c" text-anchor="middle">9 cm</text>' +
        '<text x="176" y="120" font-size="9" font-weight="700" fill="#2563eb">3 cm</text>' +
        '<text x="234" y="112" font-size="9" font-weight="700" fill="#2563eb">4 cm</text>' +
        '<text x="210" y="118" font-size="9" font-weight="700" fill="#dc2626" text-anchor="middle">boë ontmoet nie</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn driehoek gegewe drie sylengtes met ʼn passer en liniaal te konstrueer, insluitend hoe om eers te kontroleer of die drie lengtes ʼn driehoek kan vorm, met gegewe sylengtes in oranje, passerboë in blou en die voltooide driehoek in groen" />',
    },
  ],

  resultsConfig: {
    totalMarks: 10,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het konstruksie van meetkundige figure bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 55, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
    ],
  },

  scoreMessages: [
    { minScore: 10, message: 'Uitstekend! ʼn Perfekte telling — jy het hierdie konstruksiebasiese vir Graad 7 heeltemal bemeester. Hou so aan!' },
    { minScore: 8, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van liniaal-, gradeboog- en passerkonstruksie. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 6, message: 'Goed gedoen! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Konstruksie van driehoeke (SSS/SAS) | 4-6 Konstruksie
    // van sirkels (radius/deursnee) | 7-10 Halvering van lyne & hoeke | 11-13
    // Konstruksie van spesifieke hoeke met ʼn passer | 14-16 Eienskappe/
    // terminologie van konstruksies | 17-19 Analise van ʼn reeds-gekonstrueerde
    // figuur (diagram-bewus)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek moet gekonstrueer word met sye 7 cm, 8 cm en 12 cm. Kontroleer of hierdie drie lengtes ʼn driehoek kan vorm.', answer: 'Ja — die twee korter sye, 7 cm + 8 cm = 15 cm, is groter as die langste sy, 12 cm, dus kan die driehoek gekonstrueer word.', checkMode: 'self', explanation: 'Twee korter sye: 7 + 8 = 15. Aangesien 15 groter is as die langste sy (12), is die driehoek moontlik.' },
        { difficulty: 'Easy', question: 'Beskryf die stappe wat jy sou volg om ʼn driehoek te konstrueer gegewe sy drie sylengtes (SSS), met ʼn passer en liniaal.', answer: 'Teken die langste sy as die basis met ʼn liniaal en merk die eindpunte. Stel die passer op die tweede sylengte en trek ʼn boog vanaf een eindpunt. Stel die passer op die derde sylengte en trek ʼn boog vanaf die ander eindpunt, wat die eerste boog kruis. Merk die kruispunt as die derde hoekpunt en verbind dit met beide eindpunte met ʼn liniaal.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek moet gekonstrueer word met sye 4 cm, 6 cm en 11 cm. Wys of dit moontlik is, en indien nie, verduidelik wat verkeerd sou gaan met die passerboë.', answer: 'Nie moontlik nie — die twee korter sye, 4 cm + 6 cm = 10 cm, is minder as die langste sy, 11 cm. As dit tog probeer word, sal ʼn boog met radius 4 cm vanaf een end van die 11 cm-basis en ʼn boog met radius 6 cm vanaf die ander end nie lank genoeg wees om mekaar te bereik nie, sodat hulle nooit sal kruis nie.', checkMode: 'self', explanation: '4 + 6 = 10, wat minder is as 11, dus kan die twee boë nie bo die basis ontmoet nie.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek moet gekonstrueer word gegewe twee sye van 9 cm en 6 cm met ʼn ingeslote hoek van 50° tussen hulle (SAS). Beskryf hoe jy hierdie driehoek sou konstrueer.', answer: 'Teken die 9 cm-sy as ʼn basis met ʼn liniaal. Gebruik by een eindpunt ʼn gradeboog om ʼn hoek van 50° te merk en te teken. Meet langs hierdie nuwe arm 6 cm vanaf daardie eindpunt met ʼn liniaal om die derde hoekpunt te merk. Verbind hierdie hoekpunt met die ver eindpunt van die basis om die driehoek te voltooi.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Op watter passerradius (wydte) moet die passer gestel word om die boog te teken wat nodig is om ʼn sirkel met ʼn radius van 6,5 cm te konstrueer?', answer: '6,5 cm', checkMode: 'auto', correctAnswer: '6,5', correctAnswers: ['6,5', '6,5 cm'], explanation: 'ʼn Sirkel word gekonstrueer deur die passerwydte deurgaans op die radius vas te hou, dus moet die passer op presies 6,5 cm gestel word.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Sirkel moet gekonstrueer word met ʼn deursnee van 14 cm. Watter passerwydte moet gebruik word?', answer: '7 cm', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 cm'], explanation: 'Die passerwydte vir ʼn sirkelkonstruksie moet gelyk wees aan die radius, nie die deursnee nie. Radius = deursnee ÷ 2 = 14 ÷ 2 = 7 cm.' },
        { difficulty: 'Medium', question: 'Beskryf die stappe om ʼn sirkel met radius 5 cm te konstrueer met ʼn passer, beginnende by ʼn gemerkte middelpunt.', answer: 'Stel die passerwydte op 5 cm met ʼn liniaal. Plaas die passerpunt presies op die gemerkte middelpunt. Hou die wydte vas terwyl jy die passer ʼn volle draai laat maak, sodat die potlood die sirkel trek.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Beskryf die stappe om die middelloodlyn van ʼn lynstuk AB te konstrueer met slegs ʼn passer en liniaal (geen gradeboog nie).', answer: 'Maak die passer oop tot ʼn wydte meer as die helfte van AB. Trek, met die punt op A, boë bo en onder die lyn. Hou dieselfde wydte, plaas die punt op B en trek boë bo en onder wat die eerste twee boë kruis. Verbind die twee kruispunte met ʼn reguit lyn met ʼn liniaal — hierdie lyn is die middelloodlyn.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Watter twee eienskappe het die middelloodlyn van ʼn lynstuk, in verhouding tot daardie lynstuk?', answer: 'Dit sny die lynstuk presies in die helfte (halveer dit) en kruis dit teen ʼn regte hoek (90°), dus is dit beide loodreg op en ʼn halveerder van die lynstuk.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In ʼn konstruksie word hoek PQR = 80° gehalveer deur die straal QS met ʼn passer. Wat is die grootte van hoek PQS?', answer: '40°', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40°', '40 grade'], explanation: 'Halvering verdeel ʼn hoek in twee gelyke helftes: 80° ÷ 2 = 40°.' },
        { difficulty: 'Medium', question: 'Hoek XYZ = 64° word met ʼn passer gehalveer om twee gelyke hoeke te vorm. Bereken die grootte van elk van die twee kleiner hoeke.', answer: '32°', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32°', '32 grade'], explanation: 'Halvering verdeel die hoek in twee gelyke dele: 64° ÷ 2 = 32° elk.' },
        { difficulty: 'Medium', question: 'Verduidelik, stap vir stap, hoe om ʼn gegewe hoek ABC te halveer met slegs ʼn passer en liniaal.', answer: 'Plaas die passerpunt op hoekpunt B en trek ʼn boog wat albei arms van die hoek kruis, wat twee punte merk. Sonder om die passerwydte te verander, plaas die punt op elk van hierdie twee gemerkte punte om die beurt en trek twee boë wat mekaar binne die hoek kruis. Verbind B met hierdie kruispunt met ʼn liniaal — hierdie straal halveer hoek ABC.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Beskryf hoe jy ʼn hoek van 60° sou konstrueer met slegs ʼn passer en liniaal, sonder ʼn gradeboog.', answer: 'Trek ʼn reguit lyn en merk ʼn punt as die hoekpunt. Trek, met die passer op die hoekpunt, ʼn boog wat die lyn kruis. Hou dieselfde passerwydte, plaas die punt waar daardie boog die lyn kruis en trek ʼn tweede boog wat die eerste kruis. Verbind die hoekpunt met hierdie kruispunt — die gevormde hoek is presies 60°, aangesien die konstruksie ʼn gelyksydige driehoek skep.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Hoek van 30° word benodig, en slegs ʼn passer en liniaal is beskikbaar (geen gradeboog nie). Verduidelik hoe die 30°-hoek uit ʼn 60°-konstruksie verkry kan word.', answer: 'Konstrueer eers ʼn hoek van 60° met die standaard passermetode. Halveer dan daardie 60°-hoek met die hoekhalveerder-konstruksie — halvering verdeel dit in twee gelyke hoeke van 30°.', checkMode: 'self', explanation: 'Halvering van ʼn gekonstrueerde 60°-hoek gee 60° ÷ 2 = 30°.' },
        { difficulty: 'Easy', question: 'Wat is die korrekte naam, in ʼn passerkonstruksie, vir die geboë lyn wat getrek word wanneer die passer op ʼn vaste wydte oopgemaak en om ʼn middelpunt gedraai word?', answer: 'boog', checkMode: 'auto', correctAnswer: 'boog', explanation: 'ʼn Geboë lyn wat deur ʼn passer teen ʼn vaste radius vanaf ʼn middelpunt getrek word, word ʼn boog genoem (of, vir ʼn volledige draai, ʼn sirkel).' },
        { difficulty: 'Easy', question: 'Wat is die wiskundige naam vir die punt waar twee sye van ʼn gekonstrueerde hoek of driehoek ontmoet?', answer: 'hoekpunt', checkMode: 'auto', correctAnswer: 'hoekpunt', correctAnswers: ['hoekpunt', 'ʼn hoekpunt'], explanation: 'Die punt waar twee lyne of arms van ʼn hoek ontmoet, word die hoekpunt genoem.' },
        { difficulty: 'Medium', question: 'Wanneer ʼn driehoek met passerboë gekonstrueer word, waarom moet die konstruksieboë sigbaar gelaat word op die finale diagram in plaas daarvan om uitgevee te word?', answer: 'Die boë is die bewys van hoe elke hoekpunt akkuraat met die passer bepaal is, en eksaminatore en nasieners gebruik hulle om te bevestig dat die korrekte konstruksiemetode (byvoorbeeld SSS of SAS) werklik gevolg is, eerder as dat die driehoek uit die vrye hand of net met ʼn gradeboog geteken is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Driehoek soos getoon is gekonstrueer met AB = 6 cm, BC = 8 cm en die ingeslote hoek B = 60°. Gee die konstruksiemetode wat gebruik is om hierdie driehoek te teken.', answer: 'SAS (twee sye en die ingeslote hoek)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'twee sye en die ingeslote hoek'], explanation: 'Twee sylengtes (AB en BC) en die hoek tussen hulle (hoek B) is gegee, wat die definisie is van die SAS-konstruksiemetode (sy-hoek-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="124,150 190,150 146,74" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 164,150 A 26,26 0 0 1 177,127.5" fill="none" stroke="#2563eb" stroke-width="2"/><text x="183" y="138" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text><text x="157" y="145" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="182" y="108" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><circle cx="124" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="190" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="146" cy="74" r="2.5" fill="#0f1f3d"/><text x="118" y="163" font-size="12" fill="#0f1f3d">A</text><text x="192" y="163" font-size="12" fill="#0f1f3d">B</text><text x="146" y="64" font-size="12" fill="#0f1f3d" text-anchor="middle">C</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek soos getoon, is al drie sye met ʼn liniaal gemeet voor konstruksie: PQ = 5 cm, QR = 7 cm en PR = 9 cm, met geen hoeke vooraf gegee nie. Watter konstruksiemetode (met slegs hierdie drie metings) het hierdie driehoek voortgebring?', answer: 'SSS (drie sye)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'drie sye'], explanation: 'Slegs drie sylengtes is gegee en gebruik om die driehoek te konstrueer, met die twee passerboë wat die derde hoekpunt bepaal het — dit is die SSS-metode (sy-sy-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 139,150 74.8,107.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="112" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="89.5" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="139" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="74.8" cy="107.4" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">P</text><text x="141" y="163" font-size="12" fill="#0f1f3d">R</text><text x="74.8" y="97" font-size="12" fill="#0f1f3d" text-anchor="middle">Q</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Konstruksie soos getoon het lynstuk AB met ʼn hoekhalveerder getrek vanaf ʼn punt op AB, wat hoek ABC = 96° in twee dele verdeel. Een deel word gemerk as 50°. Verduidelik waarom hierdie konstruksie ʼn fout moet bevat, en gee wat die twee gelyke dele werklik behoort te meet.', answer: 'Dit is ʼn fout — ʼn ware hoekhalveerder verdeel die hoek altyd in twee GELYKE dele, dus behoort albei dele 96° ÷ 2 = 48° te wees, nie 50° en 46° nie. ʼn Deel gemerk as 50° kan nie uit ʼn korrekte halvering van ʼn 96°-hoek kom nie.', checkMode: 'self', explanation: '96° ÷ 2 = 48°. ʼn Ware halveerder lewer altyd twee gelyke helftes, dus dui ongelyke dele (soos 50° en 46°) op ʼn konstruksie- of metingsfout.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="170" x2="39.4" y2="106.4" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="180.6" y2="106.4" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="110" y2="82.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 110,140 A 30,30 0 0 1 87.7,150.2" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 132.3,150.2 A 30,30 0 0 0 110,140" fill="none" stroke="#2563eb" stroke-width="2"/><text x="88" y="130" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50°</text><text x="132" y="130" font-size="13" fill="#0f1f3d" text-anchor="middle">?</text><circle cx="110" cy="170" r="2.5" fill="#0f1f3d"/><text x="103" y="183" font-size="12" fill="#0f1f3d">B</text><text x="30" y="103" font-size="12" fill="#0f1f3d">A</text><text x="185" y="103" font-size="12" fill="#0f1f3d">C</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het konstruksie van driehoeke, sirkels, halveerlyne en hoeke met ʼn passer en liniaal bemeester.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek moet gekonstrueer word met sye 6 cm, 9 cm en 13 cm. Kontroleer of hierdie drie lengtes ʼn driehoek kan vorm.', answer: 'Ja — die twee korter sye, 6 cm + 9 cm = 15 cm, is groter as die langste sy, 13 cm, dus kan die driehoek gekonstrueer word.', checkMode: 'self', explanation: 'Twee korter sye: 6 + 9 = 15. Aangesien 15 groter is as die langste sy (13), is die driehoek moontlik.' },
        { difficulty: 'Easy', question: 'Verduidelik, in jou eie woorde, die proses om ʼn driehoek te konstrueer wanneer al drie sylengtes gegee word (SSS).', answer: 'Gebruik ʼn liniaal om die langste sy as die basis te teken en merk die eindpunte. Maak die passer oop tot die tweede sylengte en trek ʼn boog vanaf een eindpunt. Stel die passer weer op die derde sylengte en trek ʼn boog vanaf die ander eindpunt sodat dit die eerste boog kruis. Die kruispunt is die derde hoekpunt — verbind dit met beide basis-eindpunte met ʼn liniaal.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek moet gekonstrueer word met sye 3 cm, 4 cm en 9 cm. Wys of dit moontlik is, en indien nie, verduidelik wat verkeerd sou gaan met die passerboë.', answer: 'Nie moontlik nie — die twee korter sye, 3 cm + 4 cm = 7 cm, is minder as die langste sy, 9 cm. As dit tog probeer word, sal ʼn boog met radius 3 cm vanaf een end van die 9 cm-basis en ʼn boog met radius 4 cm vanaf die ander end nie lank genoeg wees om mekaar te bereik nie, sodat hulle nooit sal kruis nie.', checkMode: 'self', explanation: '3 + 4 = 7, wat minder is as 9, dus kan die twee boë nie bo die basis ontmoet nie.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek moet gekonstrueer word gegewe twee sye van 7 cm en 5 cm met ʼn ingeslote hoek van 70° tussen hulle (SAS). Beskryf hoe jy hierdie driehoek sou konstrueer.', answer: 'Teken die 7 cm-sy as ʼn basis met ʼn liniaal. Gebruik by een eindpunt ʼn gradeboog om ʼn hoek van 70° te merk en te teken. Meet langs hierdie nuwe arm 5 cm vanaf daardie eindpunt met ʼn liniaal om die derde hoekpunt te merk. Verbind hierdie hoekpunt met die ver eindpunt van die basis om die driehoek te voltooi.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Op watter passerradius (wydte) moet die passer gestel word om die boog te teken wat nodig is om ʼn sirkel met ʼn radius van 4,5 cm te konstrueer?', answer: '4,5 cm', checkMode: 'auto', correctAnswer: '4,5', correctAnswers: ['4,5', '4,5 cm'], explanation: 'ʼn Sirkel word gekonstrueer deur die passerwydte deurgaans op die radius vas te hou, dus moet die passer op presies 4,5 cm gestel word.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Sirkel moet gekonstrueer word met ʼn deursnee van 20 cm. Watter passerwydte moet gebruik word?', answer: '10 cm', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 cm'], explanation: 'Die passerwydte vir ʼn sirkelkonstruksie moet gelyk wees aan die radius, nie die deursnee nie. Radius = deursnee ÷ 2 = 20 ÷ 2 = 10 cm.' },
        { difficulty: 'Medium', question: 'Beskryf die stappe om ʼn sirkel met radius 3 cm te konstrueer met ʼn passer, beginnende by ʼn gemerkte middelpunt.', answer: 'Stel die passerwydte op 3 cm met ʼn liniaal. Plaas die passerpunt presies op die gemerkte middelpunt. Hou die wydte vas terwyl jy die passer ʼn volle draai laat maak, sodat die potlood die sirkel trek.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Verduidelik die stappe om die middelloodlyn van ʼn lynstuk CD te konstrueer met slegs ʼn passer en liniaal (geen gradeboog nie).', answer: 'Maak die passer oop tot ʼn wydte meer as die helfte van CD. Trek, met die punt op C, boë bo en onder die lyn. Hou dieselfde wydte, plaas die punt op D en trek boë bo en onder wat die eerste twee boë kruis. Verbind die twee kruispunte met ʼn reguit lyn met ʼn liniaal — hierdie lyn is die middelloodlyn.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'As ʼn punt presies op die middelloodlyn van ʼn lynstuk AB lê, wat kan gesê word oor sy afstand tot A in vergelyking met sy afstand tot B?', answer: 'Die punt is ekwidistant van A en B — sy afstand tot A is presies gelyk aan sy afstand tot B.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In ʼn konstruksie word hoek LMN = 110° gehalveer deur die straal MK met ʼn passer. Wat is die grootte van hoek LMK?', answer: '55°', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55°', '55 grade'], explanation: 'Halvering verdeel ʼn hoek in twee gelyke helftes: 110° ÷ 2 = 55°.' },
        { difficulty: 'Medium', question: 'Hoek DEF = 76° word met ʼn passer gehalveer om twee gelyke hoeke te vorm. Bereken die grootte van elk van die twee kleiner hoeke.', answer: '38°', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38°', '38 grade'], explanation: 'Halvering verdeel die hoek in twee gelyke dele: 76° ÷ 2 = 38° elk.' },
        { difficulty: 'Medium', question: 'Verduidelik, stap vir stap, hoe om ʼn gegewe hoek DEF te halveer met slegs ʼn passer en liniaal.', answer: 'Plaas die passerpunt op hoekpunt E en trek ʼn boog wat albei arms van die hoek kruis, wat twee punte merk. Sonder om die passerwydte te verander, plaas die punt op elk van hierdie twee gemerkte punte om die beurt en trek twee boë wat mekaar binne die hoek kruis. Verbind E met hierdie kruispunt met ʼn liniaal — hierdie straal halveer hoek DEF.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder moet ʼn hoek van 60° konstrueer maar het geen gradeboog beskikbaar nie, slegs ʼn passer en liniaal. Beskryf die metode.', answer: 'Trek ʼn reguit lyn en merk ʼn punt as die hoekpunt. Trek, met die passer op die hoekpunt, ʼn boog wat die lyn kruis. Hou dieselfde passerwydte, plaas die punt waar daardie boog die lyn kruis en trek ʼn tweede boog wat die eerste kruis. Verbind die hoekpunt met hierdie kruispunt — die gevormde hoek is presies 60°, aangesien die konstruksie ʼn gelyksydige driehoek skep.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Hoek van 120° word benodig, met slegs ʼn passer en liniaal (geen gradeboog nie). Verduidelik hoe dit verkry kan word deur twee 60°-konstruksies te kombineer.', answer: 'Konstrueer ʼn hoek van 60° met die standaard passermetode langs ʼn reguit basislyn. Konstrueer dan, met dieselfde passerwydte, ʼn tweede hoek van 60° direk langsaan die eerste, wat dieselfde hoekpunt en een arm deel. Die twee 60°-hoeke langs mekaar geplaas kombineer om ʼn enkele hoek van 120° te vorm.', checkMode: 'self', explanation: '60° + 60° = 120°.' },
        { difficulty: 'Easy', question: 'Wat is die wiskundige term vir ʼn lyn, straal of punt wat ʼn gegewe lynstuk of hoek in twee presies gelyke dele verdeel?', answer: 'halveerder', checkMode: 'auto', correctAnswer: 'halveerder', correctAnswers: ['halveerder', 'ʼn halveerder'], explanation: 'ʼn Halveerder is ʼn lyn, straal of punt wat ʼn lynstuk of hoek in twee presies gelyke dele verdeel.' },
        { difficulty: 'Easy', question: 'Wat word die vaste afstand vanaf die middelpunt tot enige punt op die sirkel genoem, in ʼn sirkelkonstruksie?', answer: 'radius', checkMode: 'auto', correctAnswer: 'radius', explanation: 'Die radius is die vaste afstand vanaf die middelpunt van ʼn sirkel tot enige punt op die sirkel, en dit is die wydte waarop die passer tydens konstruksie gestel word.' },
        { difficulty: 'Medium', question: 'Wanneer die middelloodlyn van ʼn lynstuk gekonstrueer word, waarom moet die passerwydte wat vanaf elke eindpunt gebruik word meer as die helfte van die lynstuk se lengte wees?', answer: 'As die passerwydte minder as die helfte van die lynstuk se lengte is, sal die twee boë wat vanaf elke eindpunt getrek word nie ver genoeg strek om mekaar bo en onder die lyn te kruis nie, sodat geen snypunte gevind sou word om die halveerlyn deur te trek nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Driehoek soos getoon is gekonstrueer met DE = 5 cm, EF = 9 cm en die ingeslote hoek E = 45°. Gee die konstruksiemetode wat gebruik is om hierdie driehoek te teken.', answer: 'SAS (twee sye en die ingeslote hoek)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'twee sye en die ingeslote hoek'], explanation: 'Twee sylengtes (DE en EF) en die hoek tussen hulle (hoek E) is gegee, wat die definisie is van die SAS-konstruksiemetode (sy-hoek-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="140,150 195,150 125,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 169,150 A 26,26 0 0 1 176.6,131.6" fill="none" stroke="#2563eb" stroke-width="2"/><text x="180" y="140" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">45°</text><text x="167" y="145" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="172" y="112" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><circle cx="140" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="195" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="125" cy="80" r="2.5" fill="#0f1f3d"/><text x="132" y="163" font-size="12" fill="#0f1f3d">D</text><text x="198" y="163" font-size="12" fill="#0f1f3d">E</text><text x="125" y="70" font-size="12" fill="#0f1f3d" text-anchor="middle">F</text></svg>' },
        { difficulty: 'Medium', question: 'In die driehoek soos getoon, is al drie sye met ʼn liniaal gemeet voor konstruksie: XY = 6 cm, YZ = 8 cm en XZ = 10 cm, met geen hoeke vooraf gegee nie. Watter konstruksiemetode (met slegs hierdie drie metings) het hierdie driehoek voortgebring?', answer: 'SSS (drie sye)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'drie sye'], explanation: 'Slegs drie sylengtes is gegee en gebruik om die driehoek te konstrueer, met die twee passerboë wat die derde hoekpunt bepaal het — dit is die SSS-metode (sy-sy-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 150,150 79.6,97.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="52" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="122" y="128" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="95" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="150" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="79.6" cy="97.2" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">X</text><text x="153" y="163" font-size="12" fill="#0f1f3d">Z</text><text x="79.6" y="87" font-size="12" fill="#0f1f3d" text-anchor="middle">Y</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Konstruksie soos getoon het lynstuk KL met ʼn hoekhalveerder getrek vanaf ʼn punt op KL, wat hoek KLM = 140° in twee dele verdeel. Een deel word gemerk as 75°. Verduidelik waarom hierdie konstruksie ʼn fout moet bevat, en gee wat die twee gelyke dele werklik behoort te meet.', answer: 'Dit is ʼn fout — ʼn ware hoekhalveerder verdeel die hoek altyd in twee GELYKE dele, dus behoort albei dele 140° ÷ 2 = 70° te wees, nie 75° en 65° nie. ʼn Deel gemerk as 75° kan nie uit ʼn korrekte halvering van ʼn 140°-hoek kom nie.', checkMode: 'self', explanation: '140° ÷ 2 = 70°. ʼn Ware halveerder lewer altyd twee gelyke helftes, dus dui ongelyke dele (soos 75° en 65°) op ʼn konstruksie- of metingsfout.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="170" x2="20.7" y2="137.5" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="199.3" y2="137.5" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="110" y2="82.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 110,140 A 30,30 0 0 1 81.8,159.7" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 138.2,159.7 A 30,30 0 0 0 110,140" fill="none" stroke="#2563eb" stroke-width="2"/><text x="80" y="132" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">75°</text><text x="140" y="132" font-size="13" fill="#0f1f3d" text-anchor="middle">?</text><circle cx="110" cy="170" r="2.5" fill="#0f1f3d"/><text x="103" y="183" font-size="12" fill="#0f1f3d">L</text><text x="10" y="134" font-size="12" fill="#0f1f3d">K</text><text x="203" y="134" font-size="12" fill="#0f1f3d">M</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan met selfvertroue driehoeke, sirkels, halveerlyne en hoeke konstrueer met ʼn passer en liniaal.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike-lewe kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek moet gekonstrueer word met sye 8 cm, 10 cm en 14 cm. Kontroleer of hierdie drie lengtes ʼn driehoek kan vorm.', answer: 'Ja — die twee korter sye, 8 cm + 10 cm = 18 cm, is groter as die langste sy, 14 cm, dus kan die driehoek gekonstrueer word.', checkMode: 'self', explanation: 'Twee korter sye: 8 + 10 = 18. Aangesien 18 groter is as die langste sy (14), is die driehoek moontlik.' },
        { difficulty: 'Easy', question: 'ʼn Skrynwerker wil ʼn driehoekige stut merk met drie gegewe lengtes hout (SSS). Beskryf die stappe om hierdie driehoek akkuraat te konstrueer met ʼn passer en liniaal.', answer: 'Teken die langste lengte as die basis met ʼn liniaal en merk die eindpunte. Stel die passer op die tweede lengte en trek ʼn boog vanaf een eindpunt. Stel die passer op die derde lengte en trek ʼn boog vanaf die ander eindpunt, wat die eerste boog kruis. Merk die kruispunt as die derde hoekpunt en verbind dit met beide eindpunte met ʼn liniaal.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek moet gekonstrueer word met sye 5 cm, 6 cm en 13 cm. Wys of dit moontlik is, en indien nie, verduidelik wat verkeerd sou gaan met die passerboë.', answer: 'Nie moontlik nie — die twee korter sye, 5 cm + 6 cm = 11 cm, is minder as die langste sy, 13 cm. As dit tog probeer word, sal ʼn boog met radius 5 cm vanaf een end van die 13 cm-basis en ʼn boog met radius 6 cm vanaf die ander end nie lank genoeg wees om mekaar te bereik nie, sodat hulle nooit sal kruis nie.', checkMode: 'self', explanation: '5 + 6 = 11, wat minder is as 13, dus kan die twee boë nie bo die basis ontmoet nie.' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige vlag moet gekonstrueer word gegewe twee sye van 10 cm en 8 cm met ʼn ingeslote hoek van 40° tussen hulle (SAS). Beskryf hoe jy hierdie driehoek sou konstrueer.', answer: 'Teken die 10 cm-sy as ʼn basis met ʼn liniaal. Gebruik by een eindpunt ʼn gradeboog om ʼn hoek van 40° te merk en te teken. Meet langs hierdie nuwe arm 8 cm vanaf daardie eindpunt met ʼn liniaal om die derde hoekpunt te merk. Verbind hierdie hoekpunt met die ver eindpunt van die basis om die driehoek te voltooi.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Op watter passerradius (wydte) moet die passer gestel word om die boog te teken wat nodig is om ʼn sirkel met ʼn radius van 8,5 cm te konstrueer?', answer: '8,5 cm', checkMode: 'auto', correctAnswer: '8,5', correctAnswers: ['8,5', '8,5 cm'], explanation: 'ʼn Sirkel word gekonstrueer deur die passerwydte deurgaans op die radius vas te hou, dus moet die passer op presies 8,5 cm gestel word.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Sirkelvormige blombedding moet gekonstrueer word met ʼn deursnee van 6 m. Watter passer- (of pen-en-tou-) wydte moet gebruik word?', answer: '3 m', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 m'], explanation: 'Die passerwydte vir ʼn sirkelkonstruksie moet gelyk wees aan die radius, nie die deursnee nie. Radius = deursnee ÷ 2 = 6 ÷ 2 = 3 m.' },
        { difficulty: 'Medium', question: 'Beskryf die stappe om ʼn sirkel met radius 4 cm te konstrueer met ʼn passer, beginnende by ʼn gemerkte middelpunt.', answer: 'Stel die passerwydte op 4 cm met ʼn liniaal. Plaas die passerpunt presies op die gemerkte middelpunt. Hou die wydte vas terwyl jy die passer ʼn volle draai laat maak, sodat die potlood die sirkel trek.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Verduidelik die stappe om die middelloodlyn van ʼn lynstuk EF te konstrueer met slegs ʼn passer en liniaal (geen gradeboog nie).', answer: 'Maak die passer oop tot ʼn wydte meer as die helfte van EF. Trek, met die punt op E, boë bo en onder die lyn. Hou dieselfde wydte, plaas die punt op F en trek boë bo en onder wat die eerste twee boë kruis. Verbind die twee kruispunte met ʼn reguit lyn met ʼn liniaal — hierdie lyn is die middelloodlyn.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Waarom moet die passerwydte presies dieselfde bly wanneer boë vanaf albei eindpunte tydens ʼn middelloodlyn-konstruksie getrek word?', answer: 'As die wydtes verskillend was, sou die twee pare boë nie by punte kruis wat ekwidistant van beide eindpunte is nie, sodat die lyn wat gevorm word nie werklik ʼn ware middelloodlyn sou wees nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In ʼn konstruksie word hoek STU = 150° gehalveer deur die straal TV met ʼn passer. Wat is die grootte van hoek STV?', answer: '75°', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°', '75 grade'], explanation: 'Halvering verdeel ʼn hoek in twee gelyke helftes: 150° ÷ 2 = 75°.' },
        { difficulty: 'Medium', question: 'Hoek GHI = 58° word met ʼn passer gehalveer om twee gelyke hoeke te vorm. Bereken die grootte van elk van die twee kleiner hoeke.', answer: '29°', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', '29°', '29 grade'], explanation: 'Halvering verdeel die hoek in twee gelyke dele: 58° ÷ 2 = 29° elk.' },
        { difficulty: 'Medium', question: 'ʼn Tegniese-tekene-student moet hoek GHI halveer met slegs ʼn passer en liniaal. Verduidelik die stappe.', answer: 'Plaas die passerpunt op hoekpunt H en trek ʼn boog wat albei arms van die hoek kruis, wat twee punte merk. Sonder om die passerwydte te verander, plaas die punt op elk van hierdie twee gemerkte punte om die beurt en trek twee boë wat mekaar binne die hoek kruis. Verbind H met hierdie kruispunt met ʼn liniaal — hierdie straal halveer hoek GHI.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Uithangbord-skrywer moet ʼn hoek van 60° op ʼn bord merk maar het slegs ʼn passer en liniaal. Beskryf die metode.', answer: 'Trek ʼn reguit lyn en merk ʼn punt as die hoekpunt. Trek, met die passer op die hoekpunt, ʼn boog wat die lyn kruis. Hou dieselfde passerwydte, plaas die punt waar daardie boog die lyn kruis en trek ʼn tweede boog wat die eerste kruis. Verbind die hoekpunt met hierdie kruispunt — die gevormde hoek is presies 60°, aangesien die konstruksie ʼn gelyksydige driehoek skep.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Hoek van 150° word benodig, met slegs ʼn passer en liniaal (geen gradeboog nie). Verduidelik hoe dit verkry kan word deur ʼn 90°-konstruksie en ʼn 60°-konstruksie te kombineer.', answer: 'Konstrueer ʼn hoek van 90° by die gewenste hoekpunt langs ʼn reguit basislyn. Konstrueer dan, met dieselfde hoekpunt, ʼn hoek van 60° direk langsaan die 90°-hoek, wat een arm deel. Die twee hoeke langs mekaar geplaas kombineer om ʼn enkele hoek van 150° te vorm.', checkMode: 'self', explanation: '90° + 60° = 150°.' },
        { difficulty: 'Easy', question: 'Wat is die wiskundige term vir die vaste reguit-lyn-afstand oor ʼn sirkel, wat deur die middelpunt gaan?', answer: 'deursnee', checkMode: 'auto', correctAnswer: 'deursnee', explanation: 'Die deursnee is die reguit-lyn-afstand oor ʼn sirkel deur die middelpunt, en dit is altyd dubbel die radius.' },
        { difficulty: 'Easy', question: 'Wat is die korrekte naam vir die instrument, gemaak van twee skarnierende arms met ʼn punt en ʼn potlood, wat gebruik word om sirkels en boë van ʼn vaste radius te teken?', answer: 'passer', checkMode: 'auto', correctAnswer: 'passer', explanation: 'ʼn Passer is die skarnierende tweearminstrument, met ʼn punt aan die een kant en ʼn potlood aan die ander kant, wat gebruik word om sirkels en boë teen ʼn vaste radius te teken.' },
        { difficulty: 'Medium', question: 'ʼn Konstruksiediagram wys ʼn driehoek met al sy passerboë nog sigbaar, plus klein merkies op twee sye wat gelyk in lengte is. Wat vertel die teenwoordigheid van hierdie merkies jou oor die driehoek, benewens die SSS-konstruksiemetode wat gebruik is?', answer: 'Die merkies wys dat daardie twee sye gelyk in lengte is, wat beteken die driehoek is gelykbenig (of moontlik gelyksydig as al drie sye dieselfde merkie dra), benewens dat dit met drie gegewe sylengtes gekonstrueer is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Driehoek soos getoon is gekonstrueer met GH = 7 cm, die hoek by G = 55° en die hoek by H = 65°, met GH eerste geteken. Gee die konstruksiemetode wat gebruik is om hierdie driehoek te teken.', answer: 'ASA (twee hoeke en die ingeslote sy)', checkMode: 'auto', correctAnswer: 'ASA', correctAnswers: ['ASA', 'asa', 'twee hoeke en die ingeslote sy'], explanation: 'Een sylengte (GH) en die twee hoeke by sy eindpunte is gegee, wat die definisie is van die ASA-konstruksiemetode (hoek-sy-hoek).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 117,150 86.2,84" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 64,150 A 24,24 0 0 1 53.8,130.3" fill="none" stroke="#2563eb" stroke-width="2"/><text x="60" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">55°</text><path d="M 106.9,128.2 A 24,24 0 0 0 93,150" fill="none" stroke="#2563eb" stroke-width="2"/><text x="102" y="133" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">65°</text><text x="78" y="145" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="117" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="86.2" cy="84" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">G</text><text x="120" y="163" font-size="12" fill="#0f1f3d">H</text><text x="86.2" y="74" font-size="12" fill="#0f1f3d" text-anchor="middle">I</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Driehoek soos getoon is gekonstrueer met JK = 6 cm, KL = 8,5 cm en JL = 5 cm, met geen hoeke vooraf gegee nie. Watter konstruksiemetode (met slegs hierdie drie metings) het hierdie driehoek voortgebring?', answer: 'SSS (drie sye)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'drie sye'], explanation: 'Slegs drie sylengtes is gegee en gebruik om die driehoek te konstrueer, met die twee passerboë wat die derde hoekpunt bepaal het — dit is die SSS-metode (sy-sy-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 133.5,150 93.9,111.9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="60" y="138" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="114" y="138" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="86.75" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8,5 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="133.5" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="93.9" cy="111.9" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">K</text><text x="136" y="163" font-size="12" fill="#0f1f3d">L</text><text x="93.9" y="101" font-size="12" fill="#0f1f3d" text-anchor="middle">J</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Konstruksie soos getoon het lynstuk MN met ʼn hoekhalveerder getrek vanaf ʼn punt op MN, wat hoek MNO = 88° in twee dele verdeel. Een deel word gemerk as 50°. Verduidelik waarom hierdie konstruksie ʼn fout moet bevat, en gee wat die twee gelyke dele werklik behoort te meet.', answer: 'Dit is ʼn fout — ʼn ware hoekhalveerder verdeel die hoek altyd in twee GELYKE dele, dus behoort albei dele 88° ÷ 2 = 44° te wees, nie 50° en 38° nie. ʼn Deel gemerk as 50° kan nie uit ʼn korrekte halvering van ʼn 88°-hoek kom nie.', checkMode: 'self', explanation: '88° ÷ 2 = 44°. ʼn Ware halveerder lewer altyd twee gelyke helftes, dus dui ongelyke dele (soos 50° en 38°) op ʼn konstruksie- of metingsfout.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><line x1="110" y1="170" x2="44" y2="101.7" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="176" y2="101.7" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="170" x2="110" y2="82.6" stroke="#0f1f3d" stroke-width="2"/><path d="M 110,140 A 30,30 0 0 1 89.2,148.4" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 130.8,148.4 A 30,30 0 0 0 110,140" fill="none" stroke="#2563eb" stroke-width="2"/><text x="88" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50°</text><text x="132" y="135" font-size="13" fill="#0f1f3d" text-anchor="middle">?</text><circle cx="110" cy="170" r="2.5" fill="#0f1f3d"/><text x="103" y="183" font-size="12" fill="#0f1f3d">N</text><text x="34" y="98" font-size="12" fill="#0f1f3d">M</text><text x="180" y="98" font-size="12" fill="#0f1f3d">O</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy het ʼn sterk begrip van driehoek-, sirkel-, halveerlyn- en hoekkonstruksies.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
