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
        'Stap-vir-stap konstruksie wat wys hoe ʼn lynstuk AB gehalveer word met passerboë bo en onder, en die middelloodlyn deurgetrek',

      diagramSvg:
        '<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">' +
        '<line x1="40" y1="110" x2="180" y2="110" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<circle cx="40" cy="110" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="180" cy="110" r="2.5" fill="#0f1f3d"/>' +
        '<text x="40" y="128" font-size="12" text-anchor="middle" fill="#0f1f3d">A</text>' +
        '<text x="180" y="128" font-size="12" text-anchor="middle" fill="#0f1f3d">B</text>' +
        '<path d="M 110,62 A 85,85 0 0 1 110,158" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 110,62 A 85,85 0 0 0 110,158" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="110" y1="50" x2="110" y2="170" stroke="#16a34a" stroke-width="2.5"/>' +
        '<rect x="103" y="103" width="7" height="7" fill="none" stroke="#ea580c" stroke-width="1.5"/>' +
        '<text x="55" y="80" font-size="11" font-weight="700" fill="#2563eb">Passerboë</text>' +
        '<text x="110" y="42" font-size="11" font-weight="700" text-anchor="middle" fill="#16a34a">Halveerlyn</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn lynstuk te halveer en ʼn loodregte lyn te konstrueer met ʼn passer en liniaal, met passerboë in blou, halveerlyn in groen en loodregte lyn in oranje" />',
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
        'Stap-vir-stap konstruksie van ʼn gelyksydige driehoek met passerboë gewys, en ʼn aparte konstruksie van ʼn 60°-hoek',

      diagramSvg:
        '<svg viewBox="0 0 340 200" xmlns="http://www.w3.org/2000/svg">' +
        '<g transform="translate(85,110)">' +
        '<path d="M -22,-20 Q -5,-52 8,-30" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 22,-20 Q 5,-52 -8,-30" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<polygon points="-50,30 50,30 0,-56.6" fill="none" stroke="#16a34a" stroke-width="2.5"/>' +
        '<circle cx="-50" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="50" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="0" cy="-56.6" r="2.5" fill="#0f1f3d"/>' +
        '<text x="-50" y="46" font-size="11" text-anchor="middle" fill="#0f1f3d">A</text>' +
        '<text x="50" y="46" font-size="11" text-anchor="middle" fill="#0f1f3d">B</text>' +
        '<text x="0" y="-64" font-size="11" text-anchor="middle" fill="#0f1f3d">C</text>' +
        '<text x="0" y="60" font-size="11" font-weight="700" text-anchor="middle" fill="#16a34a">Gelyksydige driehoek</text>' +
        '</g>' +
        '<g transform="translate(255,110)">' +
        '<line x1="0" y1="30" x2="75" y2="30" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<circle cx="0" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<path d="M 45,30 A 45,45 0 0 0 22.5,-9" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<path d="M 8,14 A 45,45 0 0 1 24,-7" fill="none" stroke="#2563eb" stroke-width="2"/>' +
        '<line x1="0" y1="30" x2="25" y2="-13" stroke="#16a34a" stroke-width="2.5"/>' +
        '<path d="M 15,30 A 15,15 0 0 0 7.5,17" fill="none" stroke="#ea580c" stroke-width="2"/>' +
        '<text x="20" y="26" font-size="11" font-weight="700" fill="#ea580c">60°</text>' +
        '<text x="0" y="46" font-size="11" text-anchor="middle" fill="#0f1f3d">V</text>' +
        '<text x="37" y="60" font-size="11" font-weight="700" text-anchor="middle" fill="#16a34a">60°-hoek</text>' +
        '</g>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn gelyksydige driehoek en ʼn 60°-hoek te konstrueer met slegs ʼn passer en liniaal, met passerboë in blou, gekonstrueerde vorm in groen en hoekmerke in oranje" />',
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
        'ʼn Driehoek met al drie hoekhalveerders getrek, wat by ʼn enkele gemerkte binnesentrumpunt ontmoet',

      diagramSvg:
        '<svg viewBox="0 0 220 185" xmlns="http://www.w3.org/2000/svg">' +
        '<polygon points="20,150 190,150 90,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/>' +
        '<line x1="20" y1="150" x2="96.35" y2="106.13" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="190" y1="150" x2="96.35" y2="106.13" stroke="#16a34a" stroke-width="2"/>' +
        '<line x1="90" y1="30" x2="96.35" y2="106.13" stroke="#16a34a" stroke-width="2"/>' +
        '<circle cx="96.35" cy="106.13" r="4" fill="#ea580c"/>' +
        '<circle cx="20" cy="150" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="190" cy="150" r="2.5" fill="#0f1f3d"/>' +
        '<circle cx="90" cy="30" r="2.5" fill="#0f1f3d"/>' +
        '<path d="M 34,150 A 14,14 0 0 1 26.9,138.2" fill="none" stroke="#2563eb" stroke-width="1.8"/>' +
        '<path d="M 176,150 A 14,14 0 0 0 182.4,138.9" fill="none" stroke="#2563eb" stroke-width="1.8"/>' +
        '<path d="M 84,43.5 A 14,14 0 0 0 96.2,43.7" fill="none" stroke="#2563eb" stroke-width="1.8"/>' +
        '<text x="14" y="168" font-size="11" fill="#0f1f3d">A</text>' +
        '<text x="192" y="168" font-size="11" fill="#0f1f3d">B</text>' +
        '<text x="90" y="20" font-size="11" text-anchor="middle" fill="#0f1f3d">C</text>' +
        '<text x="96.35" y="126" font-size="11" font-weight="700" text-anchor="middle" fill="#ea580c">Binnesentrum</text>' +
        '</svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om al drie hoeke van ʼn driehoek met ʼn passer te halveer, met die oorspronklike hoek in blou, halveerlyn in groen en binnesentrum in oranje" />',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Konstruksie van driehoeke gegewe verskeie inligting (SSS/
    // SAS/ASA/RHS-scenario's) | 4-7 Konstruksie van vierhoeke | 8-11
    // Halvering van lyne/hoeke & konstruksie van spesifieke hoeke | 12-15
    // Kongruensievoorwaardes — terminologie en redenasie | 16-19 Analise van
    // ʼn reeds-gekonstrueerde figuur (diagram-bewus)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek moet gekonstrueer word met sye 8 cm, 10 cm en 15 cm. Kontroleer of hierdie drie lengtes werklik ʼn driehoek kan vorm voordat jy begin.', answer: 'Ja — die twee korter sye, 8 cm + 10 cm = 18 cm, is groter as die langste sy, 15 cm, dus kan die driehoek gekonstrueer word.', checkMode: 'self', explanation: 'Twee korter sye: 8 + 10 = 18. Aangesien 18 groter is as die langste sy (15), is die driehoek moontlik.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek moet gekonstrueer word met AB = 8 cm, hoek A = 50° en hoek B = 60° (ASA). Verduidelik die volgorde van stappe wat nodig is, en gee die grootte van die derde hoek.', answer: 'Teken AB = 8 cm as die basis met ʼn liniaal. Gebruik ʼn gradeboog om ʼn hoek van 50° by A en ʼn hoek van 60° by B te konstrueer, albei gemeet vanaf die basis AB. Verleng die twee nuwe arms totdat hulle ontmoet — daardie snypunt is die derde hoekpunt, C. Die derde hoek is 180° − 50° − 60° = 70°.', checkMode: 'self', explanation: 'Hoeke van ʼn driehoek som tot 180°: 180° − 50° − 60° = 70°.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige driehoek moet gekonstrueer word met die skuinssy 13 cm en een ander sy 5 cm (RHS). Beskryf hoe die derde sy bepaal word, en gee die lengte daarvan.', answer: 'Teken die 5 cm-sy, konstrueer dan ʼn hoek van 90° by een eindpunt met ʼn gradeboog. Stel ʼn passer op 13 cm, plaas die punt op die teenoorgestelde eindpunt van die 5 cm-sy, en trek ʼn boog wat die loodregte arm kruis — dit bepaal die derde hoekpunt. Volgens Pythagoras is die derde sy 12 cm, aangesien 5² + 12² = 25 + 144 = 169 = 13².', checkMode: 'self', explanation: 'Deur a² + b² = c² te gebruik: 5² + b² = 13², dus b² = 169 − 25 = 144, wat b = 12 cm gee.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek moet gekonstrueer word met sye 5 cm, 7 cm en 13 cm. Wys of dit moontlik is, en indien nie, verduidelik presies wat verkeerd sou gaan met die passerboë.', answer: 'Nie moontlik nie — die twee korter sye, 5 cm + 7 cm = 12 cm, is minder as die langste sy, 13 cm. As dit tog probeer word, sal ʼn boog met radius 5 cm vanaf een end van die 13 cm-basis en ʼn boog met radius 7 cm vanaf die ander end nie lank genoeg wees om mekaar te bereik nie, sodat hulle nooit sal kruis nie en geen derde hoekpunt gevind kan word nie.', checkMode: 'self', explanation: '5 + 7 = 12, wat minder is as 13, dus kan die twee boë nie bo die basis ontmoet nie — geen geldige driehoek bestaan nie.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek ABCD moet gekonstrueer word deur dit eers in twee driehoeke te verdeel langs diagonaal AC. As AC = 9 cm, en driehoek ABC het AB = 6 cm en BC = 7 cm, verduidelik waarom driehoek ABC met SSS gekonstrueer kan word.', answer: 'Al drie sye van driehoek ABC is bekend — AB = 6 cm, BC = 7 cm en AC = 9 cm — dus kan die SSS-metode direk gebruik word: teken AC as ʼn basis, trek dan ʼn boog van 6 cm vanaf A en ʼn boog van 7 cm vanaf C om B te vind waar hulle kruis.', checkMode: 'self', explanation: 'Kontroleer die driehoeksongelykheid: 6 + 7 = 13 > 9, dus is driehoek ABC geldig en konstrueerbaar met SSS.' },
        { difficulty: 'Medium', question: 'Beskryf die algemene metode om ʼn vierhoek te konstrueer wanneer al vier sye en een diagonaal bekend is.', answer: 'Teken eers die bekende diagonaal, aangesien dit die vierhoek in twee driehoeke verdeel wat daardie diagonaal as ʼn gemeenskaplike sy deel. Konstrueer die eerste driehoek met SSS deur die diagonaal en die twee sye aan daardie kant van die figuur te gebruik. Konstrueer dan die tweede driehoek aan die ander kant van dieselfde diagonaal, met SSS en die oorblywende twee sye. Deur al die hoekpunte in volgorde te verbind, voltooi jy die vierhoek.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het binnehoeke van 100°, 80°, 95° en ʼn onbekende vierde hoek. Bereken die grootte van die vierde hoek sodat die vierhoek korrek gekonstrueer kan word.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 grade'], explanation: 'Die hoeke van ʼn vierhoek som tot 360°: 360° − 100° − 80° − 95° = 85°.' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek PQRS moet gekonstrueer word met PQ = 6 cm, QR = 8 cm, hoek Q = 90°, en diagonaal PR = 10 cm. Verduidelik hoe om PR vooraf te ken help om die konstruksie van driehoek PQR te bevestig voordat die res van die vierhoek bygevoeg word.', answer: 'Driehoek PQR kan eers gekonstrueer word met SAS (PQ = 6 cm, hoek Q = 90°, QR = 8 cm), en dan kan PR teen Pythagoras gekontroleer word as ʼn bevestiging: 6² + 8² = 36 + 64 = 100 = 10², wat presies ooreenstem met die gegewe diagonaal van 10 cm — wat bevestig dat die regte hoek by Q akkuraat gekonstrueer is voordat hoekpunt S bygevoeg word om die vierhoek te voltooi.', checkMode: 'self', explanation: 'Pythagoras bevestig konsekwentheid: 6² + 8² = 10², dus is PR = 10 cm korrek vir ʼn regte hoek by Q.' },
        { difficulty: 'Medium', question: 'Beskryf, stap vir stap, hoe om ʼn hoek van 84° te halveer met slegs ʼn passer en liniaal, en gee die grootte van elke resulterende helfte.', answer: 'Plaas die passer op die hoekpunt en trek ʼn boog wat albei arms van die 84°-hoek kruis. Trek vanaf elk van daardie twee kruispunte boë van gelyke radius wat mekaar binne die hoek sny. Trek ʼn lyn vanaf die hoekpunt deur hierdie snypunt — dit halveer die hoek in twee gelyke helftes van 42° elk.', checkMode: 'self', explanation: 'Halvering verdeel die hoek in twee gelyke dele: 84° ÷ 2 = 42°.' },
        { difficulty: 'Medium', question: 'Beskryf, sonder om ʼn gradeboog te gebruik, hoe om ʼn hoek van 15° te konstrueer met slegs ʼn passer en liniaal.', answer: 'Konstrueer eers ʼn hoek van 60° met die passermetode vir ʼn gelyksydige driehoek. Halveer dit om ʼn hoek van 30° te kry. Halveer die 30°-hoek weer om ʼn hoek van 15° te kry.', checkMode: 'self', explanation: '60° ÷ 2 = 30°, dan 30° ÷ 2 = 15° — twee opeenvolgende halverings van ʼn gekonstrueerde 60°-hoek.' },
        { difficulty: 'Easy', question: 'Wat is die korrekte term vir ʼn lyn wat ʼn lynstuk in twee gelyke dele verdeel terwyl dit dit ook teen presies 90° kruis?', answer: 'middelloodlyn', checkMode: 'auto', correctAnswer: 'middelloodlyn', correctAnswers: ['middelloodlyn', 'die middelloodlyn'], explanation: 'ʼn Middelloodlyn sny ʼn lynstuk presies in die helfte en ontmoet dit gelyktydig teen ʼn regte hoek.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe ʼn hoek van 105° gekonstrueer kan word sonder ʼn gradeboog, deur slegs passerkonstruksies van 60° en 45° te gebruik.', answer: 'Konstrueer ʼn hoek van 60° by die vereiste hoekpunt langs ʼn reguit basislyn. Konstrueer dan, met dieselfde hoekpunt, ʼn hoek van 45° (ʼn gehalveerde 90°-hoek) direk langsaan die 60°-hoek, wat een arm deel. Die twee hoeke langs mekaar geplaas kombineer om ʼn enkele hoek van 105° te gee.', checkMode: 'self', explanation: '60° + 45° = 105°.' },
        { difficulty: 'Easy', question: 'Watter kongruensievoorwaarde geld wanneer ʼn driehoek gekonstrueer word met twee gegewe sylengtes en die hoek wat tussen hulle ingesluit is?', answer: 'SAS', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'sy-hoek-sy'], explanation: 'SAS (sy-hoek-sy) word gebruik wanneer twee sye en die ingeslote hoek tussen hulle bekend is.' },
        { difficulty: 'Medium', question: 'Twee driehoeke het elk al drie ooreenstemmende sylengtes gelyk. Verduidelik watter kongruensievoorwaarde bewys dat hulle kongruent is, en waarom geen hoeke gemeet hoef te word nie.', answer: 'SSS (sy-sy-sy) bewys dat die driehoeke kongruent is, want sodra al drie sylengtes van ʼn driehoek vasgestel is, is sy vorm (en dus al sy hoeke) volledig bepaal — daar is slegs een moontlike driehoek met daardie drie sylengtes, dus is geen hoekmetings nodig nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee reghoekige driehoeke het albei dieselfde skuinssylengte en dieselfde lengte vir een ander ooreenstemmende sy. Gee die kongruensievoorwaarde wat bewys dat die driehoeke kongruent is.', answer: 'RHS', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', 'regte hoek-skuinssy-sy'], explanation: 'RHS (regte hoek-skuinssy-sy) geld spesifiek vir reghoekige driehoeke wanneer die skuinssy en een ander sy ooreenstem.' },
        { difficulty: 'Hard', question: 'Sipho sê dat as twee driehoeke al drie pare ooreenstemmende hoeke gelyk het (HHH), moet hulle kongruent wees. Is hy korrek? Verduidelik, met ʼn voorbeeld.', answer: 'Nee — HHH bewys slegs dat die driehoeke gelykvormig is (dieselfde vorm), nie kongruent (dieselfde vorm ÉN grootte) nie. Byvoorbeeld, ʼn driehoek met hoeke 60°, 60°, 60° en sye almal 4 cm het presies dieselfde hoeke as een met sye almal 8 cm, maar die twee driehoeke is duidelik verskillende groottes, dus kan hoeke alleen nie kongruensie waarborg nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In die driehoek soos getoon, is al drie sye voor konstruksie gemeet: DE = 6 cm, EF = 9 cm en DF = 11 cm, met geen hoeke vooraf gegee nie. Gee watter konstruksie-/kongruensievoorwaarde op hierdie driehoek van toepassing is.', answer: 'SSS (drie sye)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'drie sye'], explanation: 'Slegs drie sylengtes is gegee en gebruik om die driehoek te konstrueer — dit is die SSS-voorwaarde (sy-sy-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 128,150 67.6,110.8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="53.8" y="125.8" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="97.8" y="125.8" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="84" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="128" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="67.6" cy="110.8" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">D</text><text x="131" y="163" font-size="12" fill="#0f1f3d">F</text><text x="67.6" y="100.8" font-size="12" fill="#0f1f3d" text-anchor="middle">E</text></svg>' },
        { difficulty: 'Medium', question: 'Die driehoek soos getoon is gekonstrueer met GH = 7 cm, HI = 9 cm en die ingeslote hoek H = 55°. Gee watter konstruksie-/kongruensievoorwaarde van toepassing is.', answer: 'SAS (twee sye en die ingeslote hoek)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'twee sye en die ingeslote hoek'], explanation: 'Twee sylengtes (GH en HI) en die hoek tussen hulle (hoek H) is gegee — dit is die SAS-voorwaarde.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,150 130,150 78.4,76.3" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 106,150 A 24,24 0 0 1 116.2,130.3" fill="none" stroke="#2563eb" stroke-width="2"/><text x="111.1" y="137.2" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">55°</text><text x="95" y="145.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="112.2" y="115.2" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><circle cx="60" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="130" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="78.4" cy="76.3" r="2.5" fill="#0f1f3d"/><text x="52" y="163" font-size="12" fill="#0f1f3d">G</text><text x="133" y="163" font-size="12" fill="#0f1f3d">H</text><text x="78.4" y="66.3" font-size="12" fill="#0f1f3d" text-anchor="middle">I</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek soos getoon het ʼn regte hoek by J, skuinssy KL = 13 cm, en sy JK = 5 cm. Gee watter konstruksie-/kongruensievoorwaarde van toepassing is, en bereken die lengte van sy JL.', answer: 'RHS; JL = 12 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '12', '12 cm', 'RHS, 12 cm'], explanation: 'Dit is die RHS-voorwaarde (regte hoek, skuinssy, een sy bekend). Volgens Pythagoras: 5² + JL² = 13², dus JL² = 169 − 25 = 144, wat JL = 12 cm gee.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,160 90,160 40,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="150" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="65" y="178" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="75" y="96" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">13 cm</text><circle cx="40" cy="160" r="2.5" fill="#0f1f3d"/><circle cx="90" cy="160" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="40" r="2.5" fill="#0f1f3d"/><text x="26" y="164" font-size="12" fill="#0f1f3d">J</text><text x="95" y="176" font-size="12" fill="#0f1f3d">K</text><text x="26" y="42" font-size="12" fill="#0f1f3d">L</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek soos getoon het binnehoeke van 75°, 105°, 80° en ʼn vierde hoek gemerk as 90°. ʼn Leerder beweer dat dit korrek gekonstrueer is. Kontroleer die hoeksom en gee of die leerder korrek is.', answer: 'Nee, die leerder is verkeerd — die vier hoeke behoort tot 360° te som, maar 75° + 105° + 80° + 90° = 350°, wat 10° te min is vir 360°. Die konstruksie (of die gemerkte hoek) moet ʼn fout bevat.', checkMode: 'self', explanation: '75 + 105 + 80 + 90 = 350, nie 360 nie, dus is die vierhoek soos gemerk nie meetkundig geldig nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,50 165,55 180,150 40,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="50" r="2.5" fill="#0f1f3d"/><circle cx="165" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="180" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="145" r="2.5" fill="#0f1f3d"/><text x="69" y="68" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">75°</text><text x="149" y="73" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">105°</text><text x="162" y="142" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text><text x="56" y="137" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">80°</text><text x="41" y="46" font-size="12" fill="#0f1f3d">P</text><text x="171" y="51" font-size="12" fill="#0f1f3d">Q</text><text x="186" y="154" font-size="12" fill="#0f1f3d">R</text><text x="24" y="149" font-size="12" fill="#0f1f3d">S</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy het die konstruksie van driehoeke, vierhoeke en die toepassing van kongruensievoorwaardes bemeester.' },
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
        { difficulty: 'Easy', question: 'ʼn Driehoek moet gekonstrueer word met sye 9 cm, 11 cm en 17 cm. Kontroleer of hierdie drie lengtes werklik ʼn driehoek kan vorm voordat jy begin.', answer: 'Ja — die twee korter sye, 9 cm + 11 cm = 20 cm, is groter as die langste sy, 17 cm, dus kan die driehoek gekonstrueer word.', checkMode: 'self', explanation: 'Twee korter sye: 9 + 11 = 20. Aangesien 20 groter is as die langste sy (17), is die driehoek moontlik.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek moet gekonstrueer word met XY = 7 cm, hoek X = 45° en hoek Y = 65° (ASA). Verduidelik die volgorde van stappe wat nodig is, en gee die grootte van die derde hoek.', answer: 'Teken XY = 7 cm as die basis met ʼn liniaal. Gebruik ʼn gradeboog om ʼn hoek van 45° by X en ʼn hoek van 65° by Y te konstrueer, albei gemeet vanaf die basis XY. Verleng die twee nuwe arms totdat hulle ontmoet — daardie snypunt is die derde hoekpunt, Z. Die derde hoek is 180° − 45° − 65° = 70°.', checkMode: 'self', explanation: 'Hoeke van ʼn driehoek som tot 180°: 180° − 45° − 65° = 70°.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige driehoek moet gekonstrueer word met die skuinssy 10 cm en een ander sy 6 cm (RHS). Beskryf hoe die derde sy bepaal word, en gee die lengte daarvan.', answer: 'Teken die 6 cm-sy, konstrueer dan ʼn hoek van 90° by een eindpunt met ʼn gradeboog. Stel ʼn passer op 10 cm, plaas die punt op die teenoorgestelde eindpunt van die 6 cm-sy, en trek ʼn boog wat die loodregte arm kruis — dit bepaal die derde hoekpunt. Volgens Pythagoras is die derde sy 8 cm, aangesien 6² + 8² = 36 + 64 = 100 = 10².', checkMode: 'self', explanation: 'Deur a² + b² = c² te gebruik: 6² + b² = 10², dus b² = 100 − 36 = 64, wat b = 8 cm gee.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek moet gekonstrueer word met sye 4 cm, 5 cm en 11 cm. Wys of dit moontlik is, en indien nie, verduidelik presies wat verkeerd sou gaan met die passerboë.', answer: 'Nie moontlik nie — die twee korter sye, 4 cm + 5 cm = 9 cm, is minder as die langste sy, 11 cm. As dit tog probeer word, sal ʼn boog met radius 4 cm vanaf een end van die 11 cm-basis en ʼn boog met radius 5 cm vanaf die ander end nie lank genoeg wees om mekaar te bereik nie, sodat hulle nooit sal kruis nie en geen derde hoekpunt gevind kan word nie.', checkMode: 'self', explanation: '4 + 5 = 9, wat minder is as 11, dus kan die twee boë nie bo die basis ontmoet nie — geen geldige driehoek bestaan nie.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek JKLM moet gekonstrueer word deur dit eers in twee driehoeke te verdeel langs diagonaal JL. As JL = 8 cm, en driehoek JKL het JK = 5 cm en KL = 6 cm, verduidelik waarom driehoek JKL met SSS gekonstrueer kan word.', answer: 'Al drie sye van driehoek JKL is bekend — JK = 5 cm, KL = 6 cm en JL = 8 cm — dus kan die SSS-metode direk gebruik word: teken JL as ʼn basis, trek dan ʼn boog van 5 cm vanaf J en ʼn boog van 6 cm vanaf L om K te vind waar hulle kruis.', checkMode: 'self', explanation: 'Kontroleer die driehoeksongelykheid: 5 + 6 = 11 > 8, dus is driehoek JKL geldig en konstrueerbaar met SSS.' },
        { difficulty: 'Medium', question: 'Verduidelik, in jou eie woorde, die algemene metode om ʼn vierhoek te konstrueer wanneer al vier sye en een diagonaal bekend is.', answer: 'Teken eers die bekende diagonaal, aangesien dit die vierhoek in twee driehoeke verdeel wat daardie diagonaal as ʼn gemeenskaplike sy deel. Konstrueer die eerste driehoek met SSS deur die diagonaal en die twee sye aan daardie kant van die figuur te gebruik. Konstrueer dan die tweede driehoek aan die ander kant van dieselfde diagonaal, met SSS en die oorblywende twee sye. Deur al die hoekpunte in volgorde te verbind, voltooi jy die vierhoek.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het binnehoeke van 90°, 100°, 85° en ʼn onbekende vierde hoek. Bereken die grootte van die vierde hoek sodat die vierhoek korrek gekonstrueer kan word.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 grade'], explanation: 'Die hoeke van ʼn vierhoek som tot 360°: 360° − 90° − 100° − 85° = 85°.' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek WXYZ moet gekonstrueer word met WX = 9 cm, XY = 12 cm, hoek X = 90°, en diagonaal WY = 15 cm. Verduidelik hoe om WY vooraf te ken help om die konstruksie van driehoek WXY te bevestig voordat die res van die vierhoek bygevoeg word.', answer: 'Driehoek WXY kan eers gekonstrueer word met SAS (WX = 9 cm, hoek X = 90°, XY = 12 cm), en dan kan WY teen Pythagoras gekontroleer word as ʼn bevestiging: 9² + 12² = 81 + 144 = 225 = 15², wat presies ooreenstem met die gegewe diagonaal van 15 cm — wat bevestig dat die regte hoek by X akkuraat gekonstrueer is voordat hoekpunt Z bygevoeg word om die vierhoek te voltooi.', checkMode: 'self', explanation: 'Pythagoras bevestig konsekwentheid: 9² + 12² = 15², dus is WY = 15 cm korrek vir ʼn regte hoek by X.' },
        { difficulty: 'Medium', question: 'Beskryf, stap vir stap, hoe om ʼn hoek van 96° te halveer met slegs ʼn passer en liniaal, en gee die grootte van elke resulterende helfte.', answer: 'Plaas die passer op die hoekpunt en trek ʼn boog wat albei arms van die 96°-hoek kruis. Trek vanaf elk van daardie twee kruispunte boë van gelyke radius wat mekaar binne die hoek sny. Trek ʼn lyn vanaf die hoekpunt deur hierdie snypunt — dit halveer die hoek in twee gelyke helftes van 48° elk.', checkMode: 'self', explanation: 'Halvering verdeel die hoek in twee gelyke dele: 96° ÷ 2 = 48°.' },
        { difficulty: 'Medium', question: 'Beskryf, sonder om ʼn gradeboog te gebruik, hoe om ʼn hoek van 22,5° te konstrueer met slegs ʼn passer en liniaal.', answer: 'Konstrueer eers ʼn hoek van 90° (loodregte lyn). Halveer dit om ʼn hoek van 45° te kry. Halveer die 45°-hoek weer om ʼn hoek van 22,5° te kry.', checkMode: 'self', explanation: '90° ÷ 2 = 45°, dan 45° ÷ 2 = 22,5° — twee opeenvolgende halverings van ʼn gekonstrueerde 90°-hoek.' },
        { difficulty: 'Easy', question: 'Wat is die korrekte term vir ʼn straal vanaf ʼn hoekpunt wat ʼn hoek in twee presies gelyke dele verdeel?', answer: 'hoekhalveerder', checkMode: 'auto', correctAnswer: 'hoekhalveerder', correctAnswers: ['hoekhalveerder', 'die hoekhalveerder', 'halveerder'], explanation: 'ʼn Hoekhalveerder is ʼn straal vanaf die hoekpunt wat die hoek in twee presies gelyke helftes verdeel.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe ʼn hoek van 135° gekonstrueer kan word sonder ʼn gradeboog, deur slegs passerkonstruksies van 90° en 45° te gebruik.', answer: 'Konstrueer ʼn hoek van 90° by die vereiste hoekpunt langs ʼn reguit basislyn. Konstrueer dan, met dieselfde hoekpunt, ʼn hoek van 45° (ʼn gehalveerde 90°-hoek) direk langsaan die eerste 90°-hoek, wat een arm deel. Die twee hoeke langs mekaar geplaas kombineer om ʼn enkele hoek van 135° te gee.', checkMode: 'self', explanation: '90° + 45° = 135°.' },
        { difficulty: 'Easy', question: 'Watter kongruensievoorwaarde geld wanneer ʼn driehoek gekonstrueer word met twee gegewe hoeke en die sy wat tussen hulle ingesluit is?', answer: 'ASA', checkMode: 'auto', correctAnswer: 'ASA', correctAnswers: ['ASA', 'asa', 'hoek-sy-hoek'], explanation: 'ASA (hoek-sy-hoek) word gebruik wanneer twee hoeke en die ingeslote sy tussen hulle bekend is.' },
        { difficulty: 'Medium', question: 'Twee driehoeke het elk al drie ooreenstemmende sylengtes gelyk. Verduidelik watter kongruensievoorwaarde bewys dat hulle kongruent is, en waarom geen hoeke gemeet hoef te word nie.', answer: 'SSS (sy-sy-sy) bewys dat die driehoeke kongruent is, want sodra al drie sylengtes van ʼn driehoek vasgestel is, is sy vorm (en dus al sy hoeke) volledig bepaal — daar is slegs een moontlike driehoek met daardie drie sylengtes, dus is geen hoekmetings nodig nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee reghoekige driehoeke het albei dieselfde skuinssylengte en dieselfde lengte vir een ander ooreenstemmende sy. Gee die kongruensievoorwaarde wat bewys dat die driehoeke kongruent is.', answer: 'RHS', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', 'regte hoek-skuinssy-sy'], explanation: 'RHS (regte hoek-skuinssy-sy) geld spesifiek vir reghoekige driehoeke wanneer die skuinssy en een ander sy ooreenstem.' },
        { difficulty: 'Hard', question: 'Lerato sê dat as twee driehoeke twee pare ooreenstemmende sye gelyk het plus een paar gelyke hoeke wat NIE tussen daardie sye lê nie (SSH), moet hulle kongruent wees. Is sy korrek? Verduidelik, met ʼn voorbeeld.', answer: 'Nee — SSH waarborg nie kongruensie nie, want met twee gegewe sye en ʼn nie-ingeslote hoek is dit soms moontlik om die passerboog na twee verskillende geldige posisies vir die derde hoekpunt te swaai, wat twee verskillende driehoeke oplewer wat albei dieselfde SSH-data bevredig. Anders as SAS, ASA en RHS, is SSH nie ʼn betroubare kongruensievoorwaarde nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In die driehoek soos getoon, is al drie sye voor konstruksie gemeet: PQ = 5 cm, QR = 6 cm en PR = 8 cm, met geen hoeke vooraf gegee nie. Gee watter konstruksie-/kongruensievoorwaarde op hierdie driehoek van toepassing is.', answer: 'SSS (drie sye)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'drie sye'], explanation: 'Slegs drie sylengtes is gegee en gebruik om die driehoek te konstrueer — dit is die SSS-voorwaarde (sy-sy-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 136,150 79.8,105.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="59.9" y="123" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="107.9" y="123" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="88" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="136" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="79.8" cy="105.1" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">P</text><text x="139" y="163" font-size="12" fill="#0f1f3d">R</text><text x="79.8" y="95.1" font-size="12" fill="#0f1f3d" text-anchor="middle">Q</text></svg>' },
        { difficulty: 'Medium', question: 'Die driehoek soos getoon is gekonstrueer met ST = 8 cm, TU = 7 cm en die ingeslote hoek T = 70°. Gee watter konstruksie-/kongruensievoorwaarde van toepassing is.', answer: 'SAS (twee sye en die ingeslote hoek)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'twee sye en die ingeslote hoek'], explanation: 'Twee sylengtes (ST en TU) en die hoek tussen hulle (hoek T) is gegee — dit is die SAS-voorwaarde.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="50,150 130,150 106.1,84.2" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 106,150 A 24,24 0 0 1 121.8,127.4" fill="none" stroke="#2563eb" stroke-width="2"/><text x="113.9" y="135.7" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="90" y="145.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="126.1" y="119.1" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text><circle cx="50" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="130" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="106.1" cy="84.2" r="2.5" fill="#0f1f3d"/><text x="42" y="163" font-size="12" fill="#0f1f3d">S</text><text x="133" y="163" font-size="12" fill="#0f1f3d">T</text><text x="106.1" y="74.2" font-size="12" fill="#0f1f3d" text-anchor="middle">U</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek soos getoon het ʼn regte hoek by V, skuinssy UW = 25 cm, en sy UV = 7 cm. Gee watter konstruksie-/kongruensievoorwaarde van toepassing is, en bereken die lengte van sy VW.', answer: 'RHS; VW = 24 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '24', '24 cm', 'RHS, 24 cm'], explanation: 'Dit is die RHS-voorwaarde (regte hoek, skuinssy, een sy bekend). Volgens Pythagoras: 7² + VW² = 25², dus VW² = 625 − 49 = 576, wat VW = 24 cm gee.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,170 78.5,170 40,38" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="160" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="59.3" y="188" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="69.3" y="100" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">25 cm</text><circle cx="40" cy="170" r="2.5" fill="#0f1f3d"/><circle cx="78.5" cy="170" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="38" r="2.5" fill="#0f1f3d"/><text x="26" y="174" font-size="12" fill="#0f1f3d">V</text><text x="83.5" y="186" font-size="12" fill="#0f1f3d">U</text><text x="26" y="40" font-size="12" fill="#0f1f3d">W</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek soos getoon het binnehoeke van 85°, 95°, 70° en ʼn vierde hoek gemerk as 120°. ʼn Leerder beweer dat dit korrek gekonstrueer is. Kontroleer die hoeksom en gee of die leerder korrek is.', answer: 'Nee, die leerder is verkeerd — die vier hoeke behoort tot 360° te som, maar 85° + 95° + 70° + 120° = 370°, wat 10° meer is as 360°. Die konstruksie (of die gemerkte hoek) moet ʼn fout bevat.', checkMode: 'self', explanation: '85 + 95 + 70 + 120 = 370, nie 360 nie, dus is die vierhoek soos gemerk nie meetkundig geldig nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,50 165,55 180,150 40,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="50" r="2.5" fill="#0f1f3d"/><circle cx="165" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="180" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="145" r="2.5" fill="#0f1f3d"/><text x="69" y="68" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">85°</text><text x="149" y="73" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">95°</text><text x="162" y="142" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">120°</text><text x="56" y="137" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="41" y="46" font-size="12" fill="#0f1f3d">P</text><text x="171" y="51" font-size="12" fill="#0f1f3d">Q</text><text x="186" y="154" font-size="12" fill="#0f1f3d">R</text><text x="24" y="149" font-size="12" fill="#0f1f3d">S</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Uitstekend! Jy kan met selfvertroue driehoeke, vierhoeke konstrueer en kongruensievoorwaardes toepas.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike-lewe kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Driehoek moet gekonstrueer word met sye 7 cm, 9 cm en 14 cm. Kontroleer of hierdie drie lengtes werklik ʼn driehoek kan vorm voordat jy begin.', answer: 'Ja — die twee korter sye, 7 cm + 9 cm = 16 cm, is groter as die langste sy, 14 cm, dus kan die driehoek gekonstrueer word.', checkMode: 'self', explanation: 'Twee korter sye: 7 + 9 = 16. Aangesien 16 groter is as die langste sy (14), is die driehoek moontlik.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek moet gekonstrueer word met MN = 9 cm, hoek M = 70° en hoek N = 55° (ASA). Verduidelik die volgorde van stappe wat nodig is, en gee die grootte van die derde hoek.', answer: 'Teken MN = 9 cm as die basis met ʼn liniaal. Gebruik ʼn gradeboog om ʼn hoek van 70° by M en ʼn hoek van 55° by N te konstrueer, albei gemeet vanaf die basis MN. Verleng die twee nuwe arms totdat hulle ontmoet — daardie snypunt is die derde hoekpunt, O. Die derde hoek is 180° − 70° − 55° = 55°.', checkMode: 'self', explanation: 'Hoeke van ʼn driehoek som tot 180°: 180° − 70° − 55° = 55°.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige driehoek moet gekonstrueer word met die skuinssy 17 cm en een ander sy 8 cm (RHS). Beskryf hoe die derde sy bepaal word, en gee die lengte daarvan.', answer: 'Teken die 8 cm-sy, konstrueer dan ʼn hoek van 90° by een eindpunt met ʼn gradeboog. Stel ʼn passer op 17 cm, plaas die punt op die teenoorgestelde eindpunt van die 8 cm-sy, en trek ʼn boog wat die loodregte arm kruis — dit bepaal die derde hoekpunt. Volgens Pythagoras is die derde sy 15 cm, aangesien 8² + 15² = 64 + 225 = 289 = 17².', checkMode: 'self', explanation: 'Deur a² + b² = c² te gebruik: 8² + b² = 17², dus b² = 289 − 64 = 225, wat b = 15 cm gee.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek moet gekonstrueer word met sye 3 cm, 5 cm en 10 cm. Wys of dit moontlik is, en indien nie, verduidelik presies wat verkeerd sou gaan met die passerboë.', answer: 'Nie moontlik nie — die twee korter sye, 3 cm + 5 cm = 8 cm, is minder as die langste sy, 10 cm. As dit tog probeer word, sal ʼn boog met radius 3 cm vanaf een end van die 10 cm-basis en ʼn boog met radius 5 cm vanaf die ander end nie lank genoeg wees om mekaar te bereik nie, sodat hulle nooit sal kruis nie en geen derde hoekpunt gevind kan word nie.', checkMode: 'self', explanation: '3 + 5 = 8, wat minder is as 10, dus kan die twee boë nie bo die basis ontmoet nie — geen geldige driehoek bestaan nie.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek EFGH moet gekonstrueer word deur dit eers in twee driehoeke te verdeel langs diagonaal EG. As EG = 10 cm, en driehoek EFG het EF = 7 cm en FG = 8 cm, verduidelik waarom driehoek EFG met SSS gekonstrueer kan word.', answer: 'Al drie sye van driehoek EFG is bekend — EF = 7 cm, FG = 8 cm en EG = 10 cm — dus kan die SSS-metode direk gebruik word: teken EG as ʼn basis, trek dan ʼn boog van 7 cm vanaf E en ʼn boog van 8 cm vanaf G om F te vind waar hulle kruis.', checkMode: 'self', explanation: 'Kontroleer die driehoeksongelykheid: 7 + 8 = 15 > 10, dus is driehoek EFG geldig en konstrueerbaar met SSS.' },
        { difficulty: 'Medium', question: 'ʼn Bouer moet ʼn vierhoekige erf uitmerk gegewe al vier grenslengtes en een diagonaal. Verduidelik, in jou eie woorde, die algemene metode om ʼn vierhoek uit hierdie inligting te konstrueer.', answer: 'Teken eers die bekende diagonaal, aangesien dit die vierhoek in twee driehoeke verdeel wat daardie diagonaal as ʼn gemeenskaplike sy deel. Konstrueer die eerste driehoek met SSS deur die diagonaal en die twee sye aan daardie kant van die figuur te gebruik. Konstrueer dan die tweede driehoek aan die ander kant van dieselfde diagonaal, met SSS en die oorblywende twee sye. Deur al die hoekpunte in volgorde te verbind, voltooi jy die vierhoek (erfgrens).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het binnehoeke van 70°, 110°, 95° en ʼn onbekende vierde hoek. Bereken die grootte van die vierde hoek sodat die vierhoek korrek gekonstrueer kan word.', answer: '85°', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 grade'], explanation: 'Die hoeke van ʼn vierhoek som tot 360°: 360° − 70° − 110° − 95° = 85°.' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek RSTU moet gekonstrueer word met RS = 10 cm, ST = 24 cm, hoek S = 90°, en diagonaal RT = 26 cm. Verduidelik hoe om RT vooraf te ken help om die konstruksie van driehoek RST te bevestig voordat die res van die vierhoek bygevoeg word.', answer: 'Driehoek RST kan eers gekonstrueer word met SAS (RS = 10 cm, hoek S = 90°, ST = 24 cm), en dan kan RT teen Pythagoras gekontroleer word as ʼn bevestiging: 10² + 24² = 100 + 576 = 676 = 26², wat presies ooreenstem met die gegewe diagonaal van 26 cm — wat bevestig dat die regte hoek by S akkuraat gekonstrueer is voordat hoekpunt U bygevoeg word om die vierhoek te voltooi.', checkMode: 'self', explanation: 'Pythagoras bevestig konsekwentheid: 10² + 24² = 26², dus is RT = 26 cm korrek vir ʼn regte hoek by S.' },
        { difficulty: 'Medium', question: 'Beskryf, stap vir stap, hoe om ʼn hoek van 72° te halveer met slegs ʼn passer en liniaal, en gee die grootte van elke resulterende helfte.', answer: 'Plaas die passer op die hoekpunt en trek ʼn boog wat albei arms van die 72°-hoek kruis. Trek vanaf elk van daardie twee kruispunte boë van gelyke radius wat mekaar binne die hoek sny. Trek ʼn lyn vanaf die hoekpunt deur hierdie snypunt — dit halveer die hoek in twee gelyke helftes van 36° elk.', checkMode: 'self', explanation: 'Halvering verdeel die hoek in twee gelyke dele: 72° ÷ 2 = 36°.' },
        { difficulty: 'Medium', question: 'Beskryf, sonder om ʼn gradeboog te gebruik, hoe om ʼn hoek van 7,5° te konstrueer met slegs ʼn passer en liniaal.', answer: 'Konstrueer eers ʼn hoek van 60° met die passermetode vir ʼn gelyksydige driehoek. Halveer dit om 30° te kry, halveer dit om 15° te kry, en halveer dan die 15°-hoek weer om ʼn hoek van 7,5° te kry.', checkMode: 'self', explanation: '60° ÷ 2 = 30°, 30° ÷ 2 = 15°, dan 15° ÷ 2 = 7,5° — drie opeenvolgende halverings van ʼn gekonstrueerde 60°-hoek.' },
        { difficulty: 'Easy', question: 'Wat is die korrekte term vir die punt waar die drie hoekhalveerders van ʼn driehoek ontmoet?', answer: 'binnesentrum', checkMode: 'auto', correctAnswer: 'binnesentrum', explanation: 'Die binnesentrum is die enkele punt binne ʼn driehoek waar al drie hoekhalveerders sny.' },
        { difficulty: 'Hard', question: 'Verduidelik hoe ʼn hoek van 165° gekonstrueer kan word sonder ʼn gradeboog, deur slegs passerkonstruksies van 120° en 45° te gebruik.', answer: 'Konstrueer ʼn hoek van 120° by die vereiste hoekpunt (twee aangrensende 60°-hoeke langs mekaar geplaas). Konstrueer dan, met dieselfde hoekpunt, ʼn hoek van 45° (ʼn gehalveerde 90°-hoek) direk langsaan die 120°-hoek, wat een arm deel. Die twee hoeke langs mekaar geplaas kombineer om ʼn enkele hoek van 165° te gee.', checkMode: 'self', explanation: '120° + 45° = 165°.' },
        { difficulty: 'Easy', question: 'Watter kongruensievoorwaarde geld spesifiek en slegs vir reghoekige driehoeke, met die skuinssy en een ander sy?', answer: 'RHS', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', 'regte hoek-skuinssy-sy'], explanation: 'RHS (regte hoek-skuinssy-sy) is die voorwaarde wat gereserveer word vir reghoekige driehoeke waar die skuinssy en een ander sy bekend is.' },
        { difficulty: 'Medium', question: 'Twee driehoeke het elk twee pare ooreenstemmende hoeke gelyk en die sy tussen daardie hoeke gelyk. Verduidelik watter kongruensievoorwaarde bewys dat hulle kongruent is.', answer: 'ASA (hoek-sy-hoek) bewys dat die driehoeke kongruent is, want sodra twee hoeke en die ingeslote sy vasgestel is, word die derde hoek outomaties bepaal (hoeke som tot 180°) en word die oorblywende twee sye gedwing tot ʼn enkele moontlike driehoekvorm en -grootte.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Twee driehoeke het elk al drie ooreenstemmende sylengtes gelyk. Gee die kongruensievoorwaarde wat bewys dat die driehoeke kongruent is.', answer: 'SSS', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'sy-sy-sy'], explanation: 'SSS (sy-sy-sy) geld wanneer al drie ooreenstemmende sye van twee driehoeke gelyk is.' },
        { difficulty: 'Hard', question: 'Thabo sê dat om te weet dat twee driehoeke twee pare gelyke sye en een paar gelyke hoeke het, altyd genoeg is om kongruensie te bewys, ongeag waar die gelyke hoek geleë is. Is hy korrek? Verduidelik.', answer: 'Nee — dit is slegs betroubaar waar wanneer die gelyke hoek die INGESLOTE hoek tussen die twee bekende sye is (SAS). As die gelyke hoek nie tussen die twee bekende sye lê nie (SSH), is die twee driehoeke nie gewaarborg kongruent nie, aangesien die derde sy soms in twee verskillende geldige posisies geteken kan word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'In die driehoek soos getoon, is al drie sye voor konstruksie gemeet: AB = 7 cm, BC = 8 cm en AC = 10 cm, met geen hoeke vooraf gegee nie. Gee watter konstruksie-/kongruensievoorwaarde op hierdie driehoek van toepassing is.', answer: 'SSS (drie sye)', checkMode: 'auto', correctAnswer: 'SSS', correctAnswers: ['SSS', 'sss', 'drie sye'], explanation: 'Slegs drie sylengtes is gegee en gebruik om die driehoek te konstrueer — dit is die SSS-voorwaarde (sy-sy-sy).', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 140,150 82.5,94.4" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="61.3" y="117.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">7 cm</text><text x="111.3" y="117.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="90" y="166" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="140" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="82.5" cy="94.4" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">A</text><text x="143" y="163" font-size="12" fill="#0f1f3d">C</text><text x="82.5" y="84.4" font-size="12" fill="#0f1f3d" text-anchor="middle">B</text></svg>' },
        { difficulty: 'Medium', question: 'Die driehoek soos getoon is gekonstrueer met CD = 10 cm, DE = 8 cm en die ingeslote hoek D = 45°. Gee watter konstruksie-/kongruensievoorwaarde van toepassing is.', answer: 'SAS (twee sye en die ingeslote hoek)', checkMode: 'auto', correctAnswer: 'SAS', correctAnswers: ['SAS', 'sas', 'twee sye en die ingeslote hoek'], explanation: 'Twee sylengtes (CD en DE) en die hoek tussen hulle (hoek D) is gegee — dit is die SAS-voorwaarde.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,150 130,150 79.1,99.1" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 106,150 A 24,24 0 0 1 113,133" fill="none" stroke="#2563eb" stroke-width="2"/><text x="109.5" y="138.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">45°</text><text x="85" y="145.4" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="112.6" y="126.6" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><circle cx="40" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="130" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="79.1" cy="99.1" r="2.5" fill="#0f1f3d"/><text x="32" y="163" font-size="12" fill="#0f1f3d">C</text><text x="133" y="163" font-size="12" fill="#0f1f3d">D</text><text x="79.1" y="89.1" font-size="12" fill="#0f1f3d" text-anchor="middle">E</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige driehoek soos getoon het ʼn regte hoek by F, skuinssy EG = 15 cm, en sy EF = 9 cm. Gee watter konstruksie-/kongruensievoorwaarde van toepassing is, en bereken die lengte van sy FG.', answer: 'RHS; FG = 12 cm', checkMode: 'auto', correctAnswer: 'RHS', correctAnswers: ['RHS', 'rhs', '12', '12 cm', 'RHS, 12 cm'], explanation: 'Dit is die RHS-voorwaarde (regte hoek, skuinssy, een sy bekend). Volgens Pythagoras: 9² + FG² = 15², dus FG² = 225 − 81 = 144, wat FG = 12 cm gee.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="40,165 121,165 40,57" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="40" y="155" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="80.5" y="183" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="90.5" y="107" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><circle cx="40" cy="165" r="2.5" fill="#0f1f3d"/><circle cx="121" cy="165" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="57" r="2.5" fill="#0f1f3d"/><text x="26" y="169" font-size="12" fill="#0f1f3d">F</text><text x="126" y="181" font-size="12" fill="#0f1f3d">E</text><text x="26" y="59" font-size="12" fill="#0f1f3d">G</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek soos getoon het binnehoeke van 60°, 120°, 65° en ʼn vierde hoek gemerk as 105°. ʼn Leerder beweer dat dit korrek gekonstrueer is. Kontroleer die hoeksom en gee of die leerder korrek is.', answer: 'Nee, die leerder is verkeerd — die vier hoeke behoort tot 360° te som, maar 60° + 120° + 65° + 105° = 350°, wat 10° te min is vir 360°. Die konstruksie (of die gemerkte hoek) moet ʼn fout bevat.', checkMode: 'self', explanation: '60 + 120 + 65 + 105 = 350, nie 360 nie, dus is die vierhoek soos gemerk nie meetkundig geldig nie.', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="55,50 165,55 180,150 40,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="50" r="2.5" fill="#0f1f3d"/><circle cx="165" cy="55" r="2.5" fill="#0f1f3d"/><circle cx="180" cy="150" r="2.5" fill="#0f1f3d"/><circle cx="40" cy="145" r="2.5" fill="#0f1f3d"/><text x="69" y="68" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60°</text><text x="149" y="73" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">120°</text><text x="162" y="142" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">105°</text><text x="56" y="137" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">65°</text><text x="41" y="46" font-size="12" fill="#0f1f3d">P</text><text x="171" y="51" font-size="12" fill="#0f1f3d">Q</text><text x="186" y="154" font-size="12" fill="#0f1f3d">R</text><text x="24" y="149" font-size="12" fill="#0f1f3d">S</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 18, message: 'Fantasties! Jy het ʼn sterk begrip van driehoek- en vierhoekkonstruksie en kongruensieredenasie.' },
        { minScore: 13, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 8, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
