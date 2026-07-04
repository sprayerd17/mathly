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
        '<DiagramPlaceholder label="ʼn Liniaal wat ʼn 7 cm-lynstuk PQ meet, en ʼn gradeboog korrek geplaas by hoekpunt V wat ʼn 50°-hoek meet, met die basislyn en 0°-beginpunt uitgelig" />',

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
        '<DiagramPlaceholder label="ʼn Winkelhaak teen ʼn lyn AB geplaas met ʼn loodregte lyn deur punt P teen 90° getrek; ʼn tweede diagram wat ʼn winkelhaak wys wat langs ʼn liniaal skuif om ʼn lyn parallel aan CD deur punt R te teken, met gelyke afstande by twee punte gemerk" />',

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
        '<DiagramPlaceholder label="Stap-vir-stap konstruksie van ʼn driehoek met sye 6 cm, 7 cm en 9 cm, wat wys hoe die basis eerste getrek word, en dan twee passerboë wat daarbo kruis om die derde hoekpunt te vind; ʼn tweede diagram wat twee boë vanaf ʼn 9 cm-basis wys wat te kort is om te kruis, vir sye 3 cm en 4 cm" />',

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
}
