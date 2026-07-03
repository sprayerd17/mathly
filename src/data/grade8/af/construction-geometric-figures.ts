import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (construction roles) ─────────────────────────────────────
// compass arcs       → blue   (#2563eb)
// bisecting line     → green  (#16a34a)
// perpendicular line / angle markings / incentre → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Konstruksie van Meetkundige Figure',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — KONSTRUKSIE VAN HALVEERDERS EN LOODREGTE LYNE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bisectors-perpendicular-lines',
      title: 'Konstruksie van Halveerders en Loodregte Lyne',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik ʼn passer, liniaal en gradeboog om lyne en hoeke te <strong>halveer</strong> (presies in twee gelyke dele te verdeel), en om <strong>loodregte lyne</strong> by ʼn gegewe punt of vanaf ʼn gegewe punt te konstrueer. Om ʼn lynstuk te halveer beteken om die presiese middelpunt daarvan te vind en ʼn lyn teen 90° daardeur te trek.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('passerboë')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('halveerlyn')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('loodregte lyn')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Halveer</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om presies in twee gelyke dele te verdeel — ʼn halveerder verdeel ʼn lynstuk of hoek in twee gelyke dele.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Middelloodlyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lyn wat ʼn ander lynstuk teen presies 90° deur sy middelpunt kruis.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Loodregte Lyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lyn wat ʼn ander lyn teen presies 90° ontmoet. Dit kan gekonstrueer word vanaf ʼn punt op of buite die lyn.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom gebruik ons ʼn passer en liniaal?</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Passer en liniaal laat ons toe om <strong>presiese</strong> meetkundige konstruksies te maak sonder om hoeke met ʼn gradeboog te meet. Die ${bl('passerboë')} word met ʼn vaste wydte getrek, wat verseker dat alle afstande gelyk is. Die ${gr('halveerlyn')} wat deur die boog-snypunte getrek word, gaan gewaarborg deur die middelpunt teen presies 90°.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf hoe om ʼn lynstuk AB met ʼn passer te halveer.',
          answer: `Die ${bl('passerboë')} vanaf A en B kruis bo en onder die lyn, en die ${gr('halveerlyn')} deur hierdie snypunte kruis AB teen presies 90° by die middelpunt.`,
          steps: [
            `Plaas die ${bl('passerpunt')} op <strong>A</strong> en trek ʼn ${bl('boog')} bo en onder die lyn.`,
            `Sonder om die passerwydte te verander, herhaal vanaf <strong>B</strong> — trek ʼn tweede ${bl('boog')} bo en onder die lyn. Die twee stelle boë kruis by twee punte.`,
            `Trek ʼn ${gr('lyn')} deur die twee punte waar die boë kruis — hierdie ${gr('halveerlyn')} halveer AB teen 90°. Sien die diagram hieronder.`,
          ],
        },
        {
          question: 'Sipho moet ʼn loodregte lyn konstrueer vanaf ʼn punt wat nie op die lyn is nie. Beskryf die metode.',
          answer: `Die ${or('loodregte lyn')} word vanaf die eksterne punt deur die snypunt van die ${bl('boë')} getrek, en ontmoet die oorspronklike lyn teen presies 90°.`,
          steps: [
            `Plaas die ${bl('passer')} op die eksterne punt en trek ʼn ${bl('boog')} wat die lyn by twee punte kruis.`,
            `Trek vanaf elk van daardie twee kruispunte ${bl('boë')} wat mekaar sny.`,
            `Trek ʼn ${or('lyn')} vanaf die oorspronklike punt deur die snypunt van hierdie boë — dit is die ${or('loodregte lyn')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step construction showing a line segment AB being bisected with compass arcs above and below, and the perpendicular bisector drawn through" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to bisect a line segment and construct a perpendicular line using compass and ruler, with compass arcs in blue, bisecting line in green and perpendicular line in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — KONSTRUKSIE VAN DRIEHOEKE EN VIERHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangles-quadrilaterals',
      title: 'Konstruksie van Driehoeke en Vierhoeke',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons konstrueer driehoeke en vierhoeke akkuraat met ʼn passer, liniaal en gradeboog, gegewe spesifieke sylengtes en/of hoeke. Ons konstrueer ook hoeke van <strong>30°, 45°, 60°</strong> en hul veelvoude sonder om ʼn gradeboog te gebruik, deur passer-gebaseerde metodes wat afgelei is van gelyksydige driehoeke en halvering.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('passerboë')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gekonstrueerde vorm')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoekmerke')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelhoeke uit passerkonstruksies</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${or('60°')} hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gekonstrueer met ʼn gelyksydige driehoek — al die sye gelyk beteken al die hoeke is 60°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${or('30°')} hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gekonstrueer deur ʼn 60°-hoek te halveer.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('45°')} hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Gekonstrueer deur ʼn 90°-hoek (loodregte lyn) te halveer.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom kan ons presiese hoeke sonder ʼn gradeboog konstrueer?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat ʼn gelyksydige driehoek al die sye gelyk het en al die hoeke gelyk aan ${or('60°')} is, lewer die konstruksie daarvan met ʼn passer outomaties hierdie hoek presies. Halvering halveer dit dan presies — geen meting nodig nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Konstrueer ʼn gelyksydige driehoek met sye van 5 cm deur slegs ʼn passer en liniaal te gebruik.',
          answer: `Die drie ${bl('passerboë')} sny mekaar om die derde hoekpunt te gee, en deur die drie punte te verbind, kry ons die ${gr('gelyksydige driehoek')}.`,
          steps: [
            `Trek ʼn ${gr('5 cm lynstuk')} AB met ʼn liniaal.`,
            `Plaas die ${bl('passer')} op eindpunt A met die wydte ingestel op 5 cm en trek ʼn ${bl('boog')} bo die lyn.`,
            `Sonder om die passerwydte te verander, herhaal vanaf eindpunt B — trek ʼn tweede ${bl('boog')} wat die eerste kruis. Die snypunt is die derde hoekpunt C.`,
            `Verbind A met C en B met C met ʼn liniaal om die ${gr('gelyksydige driehoek')} te voltooi. Sien die diagram hieronder.`,
          ],
        },
        {
          question: 'Lerato wil ʼn hoek van 60° sonder ʼn gradeboog konstrueer. Beskryf die metode.',
          answer: `Die ${or('60°')}-hoek word geskep omdat die passerkonstruksie die eienskappe van ʼn gelyksydige driehoek naboots — al drie ${or('hoeke')} is presies 60°.`,
          steps: [
            `Trek ʼn lynstuk en merk een eindpunt as die hoekpunt van die hoek.`,
            `Plaas die ${bl('passer')} op die eindpunt en trek ʼn ${bl('boog')} wat die lyn kruis.`,
            `Sonder om die passerwydte te verander, plaas die passer waar die ${bl('boog')} die lyn kruis en merk ʼn nuwe ${bl('boog')} wat die eerste kruis.`,
            `Trek ʼn ${gr('lyn')} vanaf die eindpunt deur hierdie nuwe kruispunt — dit skep ʼn ${or('60°')}-hoek, aangesien dit deel vorm van ʼn gelyksydige driehoek.`,
          ],
        },
      ],

      practiceQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Step-by-step construction of an equilateral triangle with compass arcs shown; separate diagram showing construction of a 60° angle" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to construct an equilateral triangle and a 60° angle using only compass and ruler, with compass arcs in blue, constructed shape in green and angle markings in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — HALVERING VAN HOEKE VAN ʼN DRIEHOEK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bisecting-angles-triangle',
      title: 'Halvering van Hoeke van ʼn Driehoek',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons konstrueer die halveerder van elke hoek in ʼn driehoek met ʼn passer en liniaal. ʼn <strong>Hoekhalveerder</strong> verdeel ʼn hoek in twee presies gelyke dele. Die drie hoekhalveerders van ʼn driehoek ontmoet altyd by ʼn enkele punt genaamd die <strong>binnesentrum</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('halveerlyn')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('binnesentrum')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoekhalveerder</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lyn wat vanaf ʼn hoekpunt getrek word en die ${bl('oorspronklike hoek')} in twee gelyke helftes verdeel.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Halveerlyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('lyn wat vanaf die hoekpunt getrek word')} deur die boog-snypunt — dit verdeel die hoek presies in twee.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Binnesentrum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('punt waar al drie hoekhalveerders ontmoet')} binne ʼn driehoek. Dit is altyd binne die driehoek.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die binnesentrum is altyd binne die driehoek</p>` +
        `<p style="margin:0;color:#1e3a8a;">Anders as die buitesentrum (waar die middelloodlyne van die sye ontmoet), is die ${or('binnesentrum')} altyd binne die driehoek geleë, ongeag of die driehoek skerphoekig, reghoekig of stomphoekig is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf hoe om ʼn enkele hoek in ʼn driehoek te halveer.',
          answer: `Die ${gr('halveerlyn')} wat vanaf die hoekpunt deur die boog-snypunt getrek word, verdeel die ${bl('oorspronklike hoek')} in twee gelyke helftes.`,
          steps: [
            `Plaas die passer op die <strong>hoekpunt</strong> van die ${bl('oorspronklike hoek')} en trek ʼn boog wat albei arms van die hoek kruis.`,
            `Trek vanaf elk van die twee kruispunte op die arms boë wat mekaar binne die hoek sny.`,
            `Trek ʼn ${gr('lyn')} vanaf die hoekpunt deur hierdie snypunt — hierdie ${gr('halveerlyn')} verdeel die hoek presies in twee.`,
          ],
        },
        {
          question: 'Thabo halveer al drie hoeke van ʼn driehoek. Wat merk hy op oor waar die drie halveerlyne ontmoet?',
          answer: `Al drie ${gr('hoekhalveerders')} ontmoet by ʼn enkele punt binne die driehoek — die ${or('binnesentrum')}.`,
          steps: [
            `Konstrueer die ${gr('hoekhalveerder')} van elk van die drie hoeke van die driehoek met die passermetode.`,
            `Al drie ${gr('halveerlyne')} ontmoet by ʼn enkele punt binne die driehoek, genaamd die ${or('binnesentrum')}. Sien die diagram hieronder wat dit wys.`,
          ],
        },
      ],

      practiceQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="A triangle with all three angle bisectors drawn, meeting at a single labelled incentre point" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to bisect all three angles of a triangle using a compass, with original angle in blue, bisector line in green and incentre in orange" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik ────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat beteken dit om ʼn lynstuk te halveer?',
      answer: 'Dit beteken om die lynstuk presies in twee gelyke dele te verdeel, deur die presiese middelpunt daarvan te vind.',
      checkMode: 'self',
    },

    // ── V2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf die eerste stap in die halvering van ʼn lynstuk AB met ʼn passer.',
      answer: 'Plaas die passerpunt op A en trek ʼn boog bo en onder die lynstuk.',
      checkMode: 'self',
    },

    // ── V3 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn middelloodlyn kruis die oorspronklike lyn altyd teen presies 90°. Is hy korrek? Verduidelik.',
      answer: 'Ja — per definisie kruis ʼn middelloodlyn die lynstuk by sy middelpunt teen presies 90°.',
      checkMode: 'self',
    },

    // ── V4 Maklik ────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter instrument, saam met ʼn passer en liniaal, word benodig om hoeke tot op een graad akkuraat te konstrueer?',
      answer: 'gradeboog',
      checkMode: 'auto',
      correctAnswer: 'gradeboog',
    },

    // ── V5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf hoe ʼn gelyksydige driehoek gekonstrueer kan word deur slegs ʼn passer en liniaal te gebruik.',
      answer: 'Trek ʼn lynstuk van die vereiste lengte, trek dan boë van dieselfde lengte vanaf elke eindpunt; waar die boë kruis, is die derde hoekpunt.',
      checkMode: 'self',
    },

    // ── V6 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê ʼn hoek van 60° kan sonder ʼn gradeboog gekonstrueer word deur die eienskappe van ʼn gelyksydige driehoek te gebruik. Is sy korrek? Verduidelik.',
      answer: 'Ja — aangesien al die hoeke in ʼn gelyksydige driehoek 60° is, gee die konstruksie van so ʼn driehoek ʼn hoek van 60° sonder om met ʼn gradeboog te meet.',
      checkMode: 'self',
    },

    // ── V7 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Hoe sou jy ʼn hoek van 30° sonder ʼn gradeboog konstrueer?',
      answer: 'Konstrueer eers ʼn hoek van 60°, en halveer dit dan om twee hoeke van 30° te kry.',
      checkMode: 'self',
    },

    // ── V8 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo wil ʼn hoek van 45° sonder ʼn gradeboog konstrueer. Stel ʼn metode voor.',
      answer: 'Konstrueer ʼn hoek van 90° (loodregte lyn), en halveer dit dan om twee hoeke van 45° te kry.',
      checkMode: 'self',
    },

    // ── V9 Maklik ────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat is die term vir die punt waar al drie hoekhalveerders van ʼn driehoek ontmoet?',
      answer: 'binnesentrum',
      checkMode: 'auto',
      correctAnswer: 'binnesentrum',
    },

    // ── V10 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf hoe om ʼn hoek in ʼn driehoek met ʼn passer te halveer.',
      answer: 'Plaas die passer op die hoekpunt en trek ʼn boog wat albei arms kruis; trek vanaf daardie kruispunte boë wat mekaar sny; trek ʼn lyn vanaf die hoekpunt deur hierdie snypunt.',
      checkMode: 'self',
    },

    // ── V11 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê die binnesentrum van ʼn driehoek is altyd binne die driehoek, ongeag sy vorm. Is sy korrek? Verduidelik.',
      answer: 'Ja — anders as sommige ander driehoeksentrums, is die binnesentrum altyd binne die driehoek geleë, vir enige driehoekvorm.',
      checkMode: 'self',
    },

    // ── V12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho konstrueer al drie middelloodlyne van ʼn driehoek se sye in plaas van sy hoekhalveerders. Sou hierdie by dieselfde punt as die hoekhalveerders ontmoet? Verduidelik.',
      answer: 'Nee — die middelloodlyne van die sye ontmoet by ʼn ander punt genaamd die buitesentrum, wat oor die algemeen nie dieselfde is as die binnesentrum wat deur hoekhalveerders gevorm word nie.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 12,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het konstruksie van meetkundige figure bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
    ],
  },
}
