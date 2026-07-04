import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (circle geometry roles) ───────────────────────────────────
// radius                        → blue   (#2563eb)
// chord / perpendicular from O  → orange (#ea580c)
// tangent / half-chord / equal angles in segment → green (#16a34a)
// angle at centre               → red    (#dc2626)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Euklidiese Meetkunde — Sirkels',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — CIRCLE TERMINOLOGY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circle-terminology',
      title: 'Sirkelterminologie',
      icon: '⊙',
      explanation:
        `<p style="margin-bottom:16px;">Dit is jou eerste formele kennismaking met ${re('sirkelmeetkunde')}-stellings, so ons begin deur elke deel van ʼn sirkel wat jy nodig sal hê, te benoem. ʼn ${bl('Radius')} verbind die middelpunt met enige punt op die omtrek. ʼn ${or('Koord')} verbind enige twee punte op die omtrek, en die langste moontlike koord (een wat deur die middelpunt gaan) word ʼn middellyn genoem. ʼn ${gr('Raaklyn')} raak die sirkel by presies een punt en is altyd loodreg op die ${bl('radius')} by daardie punt. ʼn Boog is ʼn gedeelte van die omtrek, en ʼn segment is die gebied wat tussen ʼn koord en ʼn boog ingesluit word. Verwys na die video vir ʼn visuele oorsig van al hierdie terme wat op een sirkel aangedui word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koord')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('raaklyn')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hoek by die middelpunt')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Radius</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lynstuk vanaf die middelpunt O na enige punt op die omtrek. Al die radiusse van ʼn sirkel is ewe lank.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Koord en Middellyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Koord verbind enige twee punte op die omtrek. ʼn Middellyn is die langste koord — dit gaan deur die middelpunt en is gelyk aan twee radiusse.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Raaklyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lyn wat die sirkel by presies een punt raak (die raakpunt) en nooit in die sirkel indring nie. Dit is loodreg op die radius wat na daardie punt getrek word.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Hoek by die Middelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die hoek wat by die middelpunt O deur twee radiusse gevorm word wat na die eindpunte van ʼn koord getrek word.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Boog en Segment</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Boog is ʼn gedeelte van die omtrek tussen twee punte. ʼn Segment is die gebied tussen ʼn koord en die boog wat dit afsny — die klein segment (kleiner) of hoofsegment (groter).</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Snylyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lyn wat deur ʼn sirkel sny en die omtrek by twee punte kruis — anders as ʼn raaklyn, wat net by een punt raak.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom terminologie belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Elke sirkelstelling wat jy van hier af leer, word met hierdie presiese woorde gestel. As jy nou gemaklik raak met "koord", "onderspan" (beteken "om ʼn hoek te vorm by") en "segment", sal elke bewys en berekening in hierdie onderwerp baie makliker wees om te volg.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn sirkel met middelpunt O, benoem die tipe lynstuk wat (a) deur O gaan en twee punte op die omtrek verbind, en (b) die sirkel by presies een punt raak.',
          answer: `(a) ${or('Middellyn')}   (b) ${gr('Raaklyn')}`,
          steps: [
            `(a) ʼn Lynstuk wat twee punte op die omtrek verbind en OOK deur die middelpunt gaan, is per definisie die langste moontlike koord — dit word ʼn ${or('middellyn')} genoem.`,
            `(b) ʼn Lyn wat die sirkel by presies een punt raak (en nie in die sirkel indring nie) word ʼn ${gr('raaklyn')} genoem.`,
            `<strong>Antwoord:</strong> (a) ${or('middellyn')}, (b) ${gr('raaklyn')}. ✓`,
          ],
        },
        {
          question: 'ʼn Raaklyn raak ʼn sirkel by punt T. Wat is die grootte van die hoek tussen die raaklyn en die radius OT?',
          answer: `${gr('90°')}`,
          steps: [
            `Per definisie is ʼn ${gr('raaklyn')} altyd loodreg op die ${bl('radius')} wat na die raakpunt getrek word.`,
            `Loodreg beteken die hoek tussen die twee lyne is presies ${gr('90°')}.`,
            `<strong>Antwoord:</strong> Die hoek tussen die raaklyn en OT is ${gr('90°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Wat is die spesiale naam wat gegee word aan ʼn koord wat deur die middelpunt van ʼn sirkel gaan?',
          answer: 'middellyn',
          checkMode: 'auto',
          correctAnswer: 'middellyn',
          correctAnswers: ['middellyn', "'n middellyn", 'n middellyn'],
          explanation: 'ʼn Koord wat deur die middelpunt gaan, is die langste moontlike koord en word ʼn middellyn genoem.',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende oor sirkelterminologie.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Wat is die hoek tussen ʼn raaklyn en die radius by die raakpunt?',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 grade'],
              explanation: 'ʼn Raaklyn is loodreg op die radius by die raakpunt — die hoek is altyd 90°.',
            },
            {
              label: 'b) Wat noem ons ʼn lyn wat by twee punte deur ʼn sirkel sny?',
              correctAnswer: 'snylyn',
              correctAnswers: ['snylyn', "'n snylyn", 'n snylyn'],
              explanation: 'ʼn Lyn wat die sirkel by twee punte kruis, word ʼn snylyn genoem.',
            },
            {
              label: 'c) Wat noem ons die gebied tussen ʼn koord en die boog wat dit afsny?',
              correctAnswer: 'segment',
              correctAnswers: ['segment', "'n segment", 'n segment'],
              explanation: 'Die gebied tussen ʼn koord en sy boog word ʼn segment genoem.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Thabo sê ʼn middellyn en ʼn koord is twee heeltemal verskillende, onverwante dinge. Is hy korrek? Verduidelik jou antwoord met behulp van die definisies van albei terme.',
          answer: 'Nee, Thabo is nie korrek nie. ʼn Middellyn is eintlik ʼn spesiale tipe koord — spesifiek, dit is die koord wat deur die middelpunt van die sirkel gaan. Elke middellyn is ʼn koord, maar nie elke koord is ʼn middellyn nie (net die langste een, wat deur die middelpunt gaan, is).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn visuele oorsig wys van al die sleutel sirkelterme gemerk op een sirkeldiagram — middelpunt, radius, middellyn, koord, raaklyn, snylyn, boog en segment" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THEOREM: PERPENDICULAR FROM THE CENTRE TO A CHORD
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'chord-centre-perpendicularity',
      title: 'Stelling — Die Loodlyn Vanaf die Middelpunt na ʼn Koord',
      icon: '⊥',
      explanation:
        `<p style="margin-bottom:16px;">Dit is die eerste sirkelstelling wat jy sal bewys en toepas: die ${or('loodlyn')} wat vanaf die middelpunt van ʼn sirkel na ʼn ${or('koord')} getrek word, halveer altyd daardie ${or('koord')} — dit sny dit in twee gelyke helftes. Die ${gr('omgekeerde')} is ook waar en net so bruikbaar: as ʼn lyn vanaf die middelpunt na die ${gr('middelpunt van die koord')} getrek word, moet daardie lyn loodreg op die koord wees. Saam laat hierdie twee stellings jou toe om ontbrekende lengtes te bepaal, en om te bewys dat ʼn gegewe lyn deur die middelpunt van ʼn sirkel gaan.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('loodlyn vanaf die middelpunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('halfkoord / middelpunt')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die stelling en sy omgekeerde</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Loodlyn Vanaf die Middelpunt Halveer die Koord</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ${or('OM')} ⊥ koord AB (met O die middelpunt), dan is ${gr('AM = MB')}. Trek ʼn loodlyn vanaf die middelpunt na enige koord, en dit val altyd presies op die middelpunt daarvan.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Lyn Vanaf die Middelpunt na die Middelpunt van die Koord is Loodreg (Omgekeerde)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As M die middelpunt van koord AB is (dus ${gr('AM = MB')}), dan moet die lyn OM loodreg op AB wees. Hierdie weergawe word gebruik om te bewys dat ʼn lyn deur die middelpunt gaan.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Pythagoras connection ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Ontbrekende afstande bepaal</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;color:#374151;">Omdat ${or('OM')} ⊥ koord AB, is driehoek OMA reghoekig by M. Dit beteken jy kan die stelling van Pythagoras toepas om enige een van die drie lengtes te bepaal as jy die ander twee ken:</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin-bottom:8px;">${bl('OA')}² = ${or('OM')}² + ${gr('AM')}²</p>` +
        `<p style="margin:0;color:#374151;font-size:14px;">waar ${bl('OA')} = ${bl('radius')}, ${or('OM')} = ${or('loodregte afstand vanaf die middelpunt na die koord')}, en ${gr('AM')} = ${gr('die helfte van die koordlengte')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie vir berekeningsvrae</p>` +
        `<p style="margin:0;color:#1e3a8a;">Halveer altyd eers die koord (${gr('AM = AB ÷ 2')}), en identifiseer dan watter van die drie sye van die reghoekige driehoek (${bl('radius')}, ${or('OM')}, of ${gr('AM')}) die onbekende is. Herrangskik die Pythagoras-vergelyking en los op.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn sirkel met middelpunt O en radius 10 cm, is ʼn koord AB 16 cm lank. Bepaal die loodregte afstand vanaf O na AB.',
          answer: `${or('OM')} = ${or('6 cm')}`,
          steps: [
            `Trek ${or('OM')} ⊥ AB. Volgens die stelling halveer hierdie loodlyn die koord, dus ${gr('AM = 16 ÷ 2 = 8 cm')}.`,
            `In reghoekige driehoek OMA: ${bl('OA')}² = ${or('OM')}² + ${gr('AM')}² (Pythagoras).`,
            `${or('OM')}² = ${bl('OA')}² − ${gr('AM')}² = ${bl('10')}² − ${gr('8')}² = ${bl('100')} − ${gr('64')} = 36.`,
            `${or('OM')} = √36 = <strong>${or('6 cm')}</strong>. ✓`,
          ],
        },
        {
          question: 'ʼn Koord CD in ʼn sirkel met radius 25 cm is op ʼn loodregte afstand van 24 cm vanaf die middelpunt O. Bepaal die lengte van CD.',
          answer: `${gr('CD')} = ${gr('14 cm')}`,
          steps: [
            `Laat M die punt wees waar die loodlyn vanaf O die koord CD ontmoet, dus ${or('OM')} = 24 cm en ${bl('OC')} = 25 cm (die radius).`,
            `In reghoekige driehoek OMC: ${gr('CM')}² = ${bl('OC')}² − ${or('OM')}² = ${bl('25')}² − ${or('24')}² = ${bl('625')} − ${or('576')} = 49.`,
            `${gr('CM')} = √49 = 7 cm. Aangesien M die koord halveer, is ${gr('CD = 2 × CM = 2 × 7 = 14 cm')}.`,
            `<strong>Antwoord:</strong> ${gr('CD')} = ${gr('14 cm')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In ʼn sirkel met middelpunt O en radius 13 cm, is ʼn koord AB 24 cm lank. Bepaal die loodregte afstand vanaf O na AB.',
          answer: '5 cm',
          checkMode: 'auto',
          correctAnswer: '5',
          correctAnswers: ['5', '5cm', '5 cm'],
          explanation: 'AM = 24 ÷ 2 = 12 cm.\nOM² = 13² − 12² = 169 − 144 = 25.\nOM = √25 = 5 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los elk van die volgende op.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Sirkel het radius 20 cm en koord PQ = 32 cm. Bepaal die loodregte afstand vanaf die middelpunt na PQ.',
              correctAnswer: '12',
              correctAnswers: ['12', '12cm', '12 cm'],
              explanation: 'PM = 32 ÷ 2 = 16 cm.\nOM² = 20² − 16² = 400 − 256 = 144.\nOM = √144 = 12 cm ✓',
            },
            {
              label: 'b) Die loodregte afstand vanaf die middelpunt na ʼn koord is 9 cm en die radius is 15 cm. Bepaal die lengte van die koord.',
              correctAnswer: '24',
              correctAnswers: ['24', '24cm', '24 cm'],
              explanation: 'AM² = OA² − OM² = 15² − 9² = 225 − 81 = 144.\nAM = 12 cm.\nKoordlengte = 2 × 12 = 24 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Twee parallelle koorde AB en CD lê aan weerskante van die middelpunt O van ʼn sirkel met radius 17 cm. Die loodregte afstand vanaf O na AB is 8 cm en die loodregte afstand vanaf O na CD is 15 cm.\n\na) Bepaal die lengte van koord AB.\nb) Bepaal die lengte van koord CD.\nc) Bepaal die totale afstand tussen die twee koorde.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Lengte van koord AB',
              correctAnswer: '30',
              correctAnswers: ['30', '30cm', '30 cm'],
              explanation: 'AM² = OA² − OM² = 17² − 8² = 289 − 64 = 225.\nAM = 15 cm.\nAB = 2 × 15 = 30 cm ✓',
            },
            {
              label: 'b) Lengte van koord CD',
              correctAnswer: '16',
              correctAnswers: ['16', '16cm', '16 cm'],
              explanation: 'CM² = OC² − OM² = 17² − 15² = 289 − 225 = 64.\nCM = 8 cm.\nCD = 2 × 8 = 16 cm ✓',
            },
            {
              label: 'c) Totale afstand tussen die twee koorde',
              correctAnswer: '23',
              correctAnswers: ['23', '23cm', '23 cm'],
              explanation: 'Aangesien die koorde aan weerskante van die middelpunt lê, tel die twee afstande bymekaar: 8 + 15 = 23 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn koord wys met die loodlyn vanaf die middelpunt wat dit halveer — met die twee gelyke halfkoorde en die reghoekige driehoek wat vir Pythagoras-berekeninge gebruik word, gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THEOREM: ANGLE AT THE CENTRE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angle-at-centre',
      title: 'Stelling — Die Hoek by die Middelpunt is Dubbel die Hoek by die Omtrek',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Dit is die grondslagstelling vir byna alles wat in sirkelmeetkunde volg, so maak seker jy ken dit goed: wanneer ʼn ${or('koord')} ʼn ${re('hoek by die middelpunt O')} en ʼn hoek by ʼn punt op die omtrek onderspan, aan ${bl('dieselfde kant')} van die koord, is die ${re('hoek by die middelpunt')} altyd presies dubbel die hoek by die omtrek. As die punt op die teenoorgestelde boog lê, moet jy eerder die reflekshoek by die middelpunt gebruik. Verwys na die video vir ʼn diagram wat albei gevalle wys.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hoek by die middelpunt')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoek by die omtrek')}</span>` +
        `</div>` +

        // ── Theorem statement ─────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:8px;">Hoek by die Middelpunt = 2 × Hoek by die Omtrek</p>` +
        `<p style="color:#374151;margin-bottom:8px;">Wanneer ${or('koord AB')} ${re('∠AOB')} by die middelpunt en ∠APB by ʼn punt P op die omtrek onderspan (dieselfde kant van die koord as O):</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('∠AOB')} = 2 × ∠APB</p>` +
        `</div>` +

        // ── Reflex angle note ─────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Wanneer die punt op die klein boog is — gebruik die reflekshoek</p>` +
        `<p style="margin:0;color:#1e3a8a;">As ʼn punt P op die <strong>klein boog</strong> (die korter boog) lê, sit dit aan die teenoorgestelde kant van die koord as die "gewone" middelpuntshoek. In hierdie geval, gebruik die <strong>reflekshoek</strong> by O (dit is, 360° minus die gewone hoek), en halveer dit dan om die hoek by die omtrek te kry.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn sirkel met middelpunt O, onderspan koord AB ʼn hoek van 96° by die middelpunt. Watter hoek onderspan AB by ʼn punt P op die hoofboog?',
          answer: `∠APB = ${bl('48°')}`,
          steps: [
            `${re('∠AOB')} en ∠APB word deur dieselfde ${or('koord AB')} onderspan, met P aan dieselfde kant as O (die hoofboog).`,
            `Volgens die stelling: ${re('hoek by die middelpunt')} = 2 × hoek by die omtrek.`,
            `Hoek by die omtrek = ${re('96°')} ÷ 2 = ${bl('48°')}.`,
            `<strong>Antwoord:</strong> ∠APB = ${bl('48°')}. ✓`,
          ],
        },
        {
          question: 'Koord CD onderspan ʼn hoek van 130° by die middelpunt O. Bepaal die hoek CQD wat by punt Q op die klein boog onderspan word.',
          answer: `∠CQD = ${bl('115°')}`,
          steps: [
            `Q is op die <strong>klein boog</strong> — die teenoorgestelde kant van koord CD as die 130°-hoek.`,
            `Gebruik die ${re('reflekshoek')} by O: Reflekshoek COD = 360° − ${re('130°')} = ${re('230°')}.`,
            `${bl('Hoek by die omtrek')} = ${re('reflekshoek COD')} ÷ 2 = ${re('230°')} ÷ 2 = ${bl('115°')}.`,
            `<strong>Antwoord:</strong> ∠CQD = ${bl('115°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In ʼn sirkel met middelpunt O, onderspan koord PQ ʼn hoek van 78° by die middelpunt. Bepaal die hoek wat PQ by ʼn punt T op die hoofboog onderspan.',
          answer: '39°',
          checkMode: 'auto',
          correctAnswer: '39',
          correctAnswers: ['39', '39°', '39 grade'],
          explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\nHoek by die omtrek = 78° ÷ 2 = 39° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bepaal die onbekende hoek in elke geval.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Koord AB onderspan 64° by die middelpunt. Bepaal die hoek by die omtrek op die hoofboog.',
              correctAnswer: '32',
              correctAnswers: ['32', '32°', '32 grade'],
              explanation: 'Hoek by die omtrek = 64° ÷ 2 = 32° ✓',
            },
            {
              label: 'b) Die hoek by die omtrek wat deur ʼn koord onderspan word, is 55°. Wat is die hoek by die middelpunt?',
              correctAnswer: '110',
              correctAnswers: ['110', '110°', '110 grade'],
              explanation: 'Hoek by die middelpunt = 2 × hoek by die omtrek = 2 × 55° = 110° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In ʼn sirkel met middelpunt O, onderspan koord AB ʼn hoek van 160° by die middelpunt (gemeet aan die hoofboog-kant). Punt P lê op die klein boog.\n\na) Bepaal die reflekshoek AOB.\nb) Bepaal hoek APB.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Reflekshoek AOB',
              correctAnswer: '200',
              correctAnswers: ['200', '200°', '200 grade'],
              explanation: 'Reflekshoek AOB = 360° − 160° = 200° ✓',
            },
            {
              label: 'b) Hoek APB',
              correctAnswer: '100',
              correctAnswers: ['100', '100°', '100 grade'],
              explanation: 'P is op die klein boog, dus gebruik die reflekshoek: 200° ÷ 2 = 100° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn koord wys wat ʼn hoek by die middelpunt en ʼn hoek by die omtrek onderspan, wat demonstreer dat die hoek by die middelpunt gelyk is aan dubbel die hoek by die omtrek, en wat die reflekshoek-geval vir ʼn punt op die klein boog wys" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn sirkel met middelpunt O, koord AB, die hoek AOB by die middelpunt uitgelig in rooi, en hoek APB by punt P op die omtrek uitgelig in blou wys, met ʼn stippel-reflekshoek getoon vir ʼn tweede punt op die klein boog" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THEOREM: ANGLES IN THE SAME SEGMENT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-in-same-segment',
      title: 'Stelling — Hoeke in Dieselfde Segment, en Gelyke Koorde',
      icon: '≡',
      explanation:
        `<p style="margin-bottom:16px;">Twee verwante stellings volg direk uit die hoek-by-die-middelpunt-stelling. (1) ${gr('Hoeke in dieselfde segment is gelyk')} — enige twee hoeke by die omtrek wat deur dieselfde koord onderspan word, aan dieselfde kant van daardie koord, is gelyk aan mekaar, aangesien albei gelyk is aan die helfte van dieselfde hoek by die middelpunt. (2) ${or('Gelyke koorde onderspan gelyke hoeke')} — beide by die middelpunt en by die omtrek. Dit maak sin: koorde van dieselfde lengte moet boë van dieselfde grootte "afsny", dus lewer hulle identiese hoeke, waar ook al hulle gemeet word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelyke hoeke in dieselfde segment')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gelyke koorde')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee stellings</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Hoeke in Dieselfde Segment is Gelyk</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As C en D albei op dieselfde boog lê (dieselfde kant van koord AB), dan is ${gr('∠ACB = ∠ADB')}. Albei hoeke is gelyk aan die helfte van dieselfde hoek by die middelpunt.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gelyke Koorde Onderspan Gelyke Hoeke</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ${or('AB = CD')} (gelyke koorde in dieselfde sirkel, of in sirkels met gelyke radius), dan onderspan hulle gelyke hoeke by die middelpunt, EN gelyke hoeke by die omtrek.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">"Dieselfde segment" in ʼn diagram identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Kontroleer twee dinge voordat jy hierdie stelling toepas: die twee hoeke moet deur dieselfde <strong>koord</strong> onderspan word, en hulle hoekpunte moet aan <strong>dieselfde kant</strong> van daardie koord wees. As ʼn punt op die teenoorgestelde boog is, is sy hoek anders (al is dit steeds gekoppel aan die middelpuntshoek).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Punte A, B, C en D lê op ʼn sirkel. ∠ACB = 42° en D lê op dieselfde boog as C (dieselfde kant van koord AB). Bepaal ∠ADB.',
          answer: `∠ADB = ${gr('42°')}`,
          steps: [
            `Beide C en D is op <strong>dieselfde boog</strong> relatief tot ${or('koord AB')}.`,
            `Volgens die stelling: ${gr('hoeke in dieselfde segment is gelyk')}.`,
            `∠ADB = ∠ACB = ${gr('42°')}.`,
            `<strong>Antwoord:</strong> ∠ADB = ${gr('42°')}. ✓`,
          ],
        },
        {
          question: 'In ʼn sirkel is koord PQ = koord RS. As PQ ʼn hoek van 70° by die middelpunt onderspan, watter hoek onderspan RS by die middelpunt?',
          answer: `${or('70°')}`,
          steps: [
            `${or('PQ')} en ${or('RS')} is ${or('gelyke koorde')} in dieselfde sirkel.`,
            `Volgens die stelling onderspan gelyke koorde gelyke hoeke by die middelpunt.`,
            `Aangesien PQ 70° by die middelpunt onderspan, moet ${or('RS')} ook ${or('70°')} by die middelpunt onderspan.`,
            `<strong>Antwoord:</strong> RS onderspan ${or('70°')} by die middelpunt. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: '∠AEB = 58° en F lê op dieselfde boog as E (dieselfde kant van koord AB). Bepaal ∠AFB.',
          answer: '58°',
          checkMode: 'auto',
          correctAnswer: '58',
          correctAnswers: ['58', '58°', '58 grade'],
          explanation: 'Hoeke in dieselfde segment is gelyk: ∠AFB = ∠AEB = 58° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bepaal die onbekende waarde in elke geval.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ∠PRQ = 33° en S lê op dieselfde boog as R. Bepaal ∠PSQ.',
              correctAnswer: '33',
              correctAnswers: ['33', '33°', '33 grade'],
              explanation: 'Hoeke in dieselfde segment is gelyk: ∠PSQ = ∠PRQ = 33° ✓',
            },
            {
              label: 'b) Koord MN = koord XY in dieselfde sirkel. MN onderspan 84° by die omtrek. Watter hoek onderspan XY by die omtrek?',
              correctAnswer: '84',
              correctAnswers: ['84', '84°', '84 grade'],
              explanation: 'Gelyke koorde onderspan gelyke hoeke by die omtrek: XY onderspan ook 84° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In ʼn sirkel met middelpunt O lê punte A, B, C en D op die omtrek, met C en D op dieselfde boog relatief tot koord AB. ∠ACB = 3x − 10° en ∠ADB = x + 30°.\n\na) Bepaal x.\nb) Bepaal die grootte van ∠ACB.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal x',
              correctAnswer: '20',
              correctAnswers: ['20', '20°', '20 grade'],
              explanation: 'Hoeke in dieselfde segment is gelyk: 3x − 10° = x + 30°.\n2x = 40°.\nx = 20° ✓',
            },
            {
              label: 'b) Grootte van ∠ACB',
              correctAnswer: '50',
              correctAnswers: ['50', '50°', '50 grade'],
              explanation: '∠ACB = 3(20°) − 10° = 60° − 10° = 50° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat twee hoeke wys wat deur dieselfde koord aan dieselfde kant onderspan word, wat demonstreer dat hoeke in dieselfde segment gelyk is, en wat dan twee gelyke koorde wys wat gelyke hoeke by die middelpunt en omtrek lewer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THEOREM: ANGLE IN A SEMICIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angle-in-semicircle',
      title: 'Stelling — Die Hoek in ʼn Halfsirkel',
      icon: '◐',
      explanation:
        `<p style="margin-bottom:16px;">Dit is ʼn spesiale geval van die hoek-by-die-middelpunt-stelling, en een van die mees gebruikte sirkelstellings in eksamens: as AB ʼn ${or('middellyn')} van ʼn sirkel is, dan is die hoek wat AB by ${bl('enige')} punt P op die omtrek onderspan, altyd presies ${bl('90°')}. Dit werk omdat ʼn middellyn ʼn gestrekte hoek (180°) by die middelpunt onderspan, en die hoek by die omtrek is altyd die helfte daarvan. Die ${gr('omgekeerde')} is net so belangrik: as ʼn koord ʼn hoek van 90° by ʼn punt op die sirkel onderspan, moet daardie koord ʼn middellyn wees.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middellyn')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('90°-hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('omgekeerde')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die stelling en sy omgekeerde</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoek in ʼn Halfsirkel = 90°</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ${or('AB')} ʼn middellyn is en P enige punt op die omtrek is (nie A of B nie), dan is ${bl('∠APB = 90°')} — altyd, ongeag waar P is.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Koord wat 90° Onderspan is ʼn Middellyn (Omgekeerde)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ʼn koord AB ${bl('∠APB = 90°')} by ʼn punt P op die sirkel onderspan, dan moet ${or('AB')} ʼn middellyn van die sirkel wees.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">ʼn Kragtige kortpad in driehoekprobleme</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer jy ʼn middellyn in ʼn sirkeldiagram sien, merk dadelik die hoek by enige derde punt op die sirkel as ${bl('90°')} — dit gee jou onmiddellik ʼn reghoekige driehoek, wat dikwels die res van die probleem met Pythagoras of basiese hoeksomme ontsluit.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'AB is ʼn middellyn van ʼn sirkel en P is ʼn punt op die omtrek. ∠PAB = 34°. Bepaal ∠APB en ∠PBA.',
          answer: `∠APB = ${bl('90°')}, ∠PBA = ${gr('56°')}`,
          steps: [
            `Aangesien ${or('AB')} ʼn middellyn is, is ${bl('∠APB = 90°')} (hoek in ʼn halfsirkel).`,
            `In driehoek APB tel die hoeke op tot 180°: ∠PAB + ∠APB + ∠PBA = 180°.`,
            `${gr('34° + 90° + ∠PBA = 180°')}, dus ${gr('∠PBA = 180° − 90° − 34° = 56°')}.`,
            `<strong>Antwoord:</strong> ∠APB = ${bl('90°')}, ∠PBA = ${gr('56°')}. ✓`,
          ],
        },
        {
          question: 'In ʼn sirkel onderspan koord XY ʼn hoek van 90° by punt Z op die omtrek. Wat kan jy oor XY aflei?',
          answer: `${or('XY is ʼn middellyn van die sirkel')}`,
          steps: [
            `Ons word vertel ${bl('∠XZY = 90°')}, waar Z ʼn punt op die sirkel is.`,
            `Volgens die ${gr('omgekeerde')} van die hoek-in-ʼn-halfsirkel-stelling: as ʼn koord 90° by ʼn punt op die sirkel onderspan, is daardie koord ʼn middellyn.`,
            `<strong>Antwoord:</strong> ${or('XY moet ʼn middellyn')} van die sirkel wees. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'AB is ʼn middellyn van ʼn sirkel en P is ʼn punt op die sirkel. ∠PAB = 41°. Bepaal ∠PBA.',
          answer: '49°',
          checkMode: 'auto',
          correctAnswer: '49',
          correctAnswers: ['49', '49°', '49 grade'],
          explanation: 'Aangesien AB ʼn middellyn is, is ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: 41° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 41° = 49° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Sirkel het middellyn AB = 26 cm. P is ʼn punt op die omtrek met AP = 10 cm. Beantwoord die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal die grootte van ∠APB.',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 grade'],
              explanation: 'AB is ʼn middellyn, dus die hoek in ʼn halfsirkel: ∠APB = 90° ✓',
            },
            {
              label: 'b) Bepaal die lengte van BP.',
              correctAnswer: '24',
              correctAnswers: ['24', '24cm', '24 cm'],
              explanation: 'Driehoek APB is reghoekig by P (Pythagoras): BP² = AB² − AP² = 26² − 10² = 676 − 100 = 576.\nBP = √576 = 24 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In ʼn sirkel met middelpunt O is AB ʼn middellyn. C en D is punte op die omtrek aan dieselfde kant van AB, met ∠CAB = 28° en ∠DBA = 35°.\n\na) Bepaal ∠ACB.\nb) Bepaal ∠ADB.\nc) Bepaal ∠ABC.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal ∠ACB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 grade'],
              explanation: 'AB is ʼn middellyn, dus ∠ACB = 90° (hoek in ʼn halfsirkel) ✓',
            },
            {
              label: 'b) Bepaal ∠ADB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 grade'],
              explanation: 'AB is ʼn middellyn, dus is ∠ADB = 90° ook — dit geld vir enige punt op die sirkel ✓',
            },
            {
              label: 'c) Bepaal ∠ABC',
              correctAnswer: '62',
              correctAnswers: ['62', '62°', '62 grade'],
              explanation: 'In driehoek ABC: ∠CAB = 28°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 28° = 62° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn middellyn met ʼn derde punt op die sirkel wys wat ʼn regte hoek vorm, wat demonstreer dat die hoek in ʼn halfsirkel altyd 90 grade is, en dan die omgekeerde wys waar ʼn 90-grade-hoek bewys dat ʼn koord ʼn middellyn is" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het Euklidiese meetkunde — sirkels bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het Euklidiese meetkunde — sirkels bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk deur die gids weer deur.' },
  ],
}
