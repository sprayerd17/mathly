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

// ─── CAPS-styl tweekolom (Stelling | Rede) bewystabel ─────────────────────────
// rows: 'n reeks van [stelling, rede]-pare, weergegee as 'n HTML-tabel wat by
// die werf se ontwerpstelsel pas (gebruik binne `explanation`-stringe vir
// formele stellingbewyse, en binne self-nagesiene raaisel-`answer`-stringe).
const proofTable = (rows: [string, string][]) =>
  `<div style="overflow-x:auto;margin-top:10px;margin-bottom:6px"><table style="border-collapse:collapse;font-size:0.92em;width:100%">` +
  `<thead><tr>` +
  `<th style="padding:8px 12px;background:#0f1f3d;color:#ffffff;border:1px solid #0f1f3d;font-weight:700;text-align:left">Stelling</th>` +
  `<th style="padding:8px 12px;background:#0f1f3d;color:#ffffff;border:1px solid #0f1f3d;font-weight:700;text-align:left">Rede</th>` +
  `</tr></thead><tbody>` +
  rows
    .map(
      ([s, r], i) =>
        `<tr style="background:${i % 2 === 0 ? '#f8fafc' : '#ffffff'}">` +
        `<td style="padding:8px 12px;border:1px solid #e2e8f0;color:#0f1f3d;">${s}</td>` +
        `<td style="padding:8px 12px;border:1px solid #e2e8f0;color:#374151;">${r}</td>` +
        `</tr>`
    )
    .join('') +
  `</tbody></table></div>`

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
        'Diagram wat ʼn sirkel met middelpunt O, koord AB, die hoek AOB by die middelpunt uitgelig in rooi, en hoek APB by punt P op die omtrek uitgelig in blou wys, met ʼn stippel-reflekshoek getoon vir ʼn tweede punt op die klein boog',

      diagramSvg:
        '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="206.88" y2="180.22" stroke="#dc2626" stroke-width="2.5"/><line x1="140" y1="120" x2="73.12" y2="180.22" stroke="#dc2626" stroke-width="2.5"/><path d="M 154.86,133.38 A 20,20 0 0 1 125.14,133.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="206.88" y1="180.22" x2="73.12" y2="180.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="30" x2="206.88" y2="180.22" stroke="#2563eb" stroke-width="2.5"/><line x1="140" y1="30" x2="73.12" y2="180.22" stroke="#2563eb" stroke-width="2.5"/><path d="M 148.14,48.28 A 20,20 0 0 1 131.86,48.28" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="210" x2="206.88" y2="180.22" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="140" y1="210" x2="73.12" y2="180.22" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 153.7,203.9 A 15,15 0 0 0 126.3,203.9" fill="none" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="206.88" cy="180.22" r="2.5" fill="#0f1f3d"/><text x="214" y="182" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="73.12" cy="180.22" r="2.5" fill="#0f1f3d"/><text x="50" y="182" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="112" y="222" font-size="12" fill="#6b7280" font-weight="700">Q</text><text x="140" y="149" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">96°</text><text x="140" y="64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">48°</text><text x="140" y="234" font-size="9" fill="#6b7280" text-anchor="middle" font-style="italic">Q op klein boog → gebruik die reflekshoek by O</text></svg>',
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

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — THEOREM: CYCLIC QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cyclic-quadrilaterals',
      title: 'Stelling — Koordevierhoeke',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Koordevierhoek')} is ʼn vierhoek waarvan al vier hoekpunte ${bl('almal')} op die omtrek van dieselfde sirkel lê. Twee stellings beheer die hoeke daarbinne: (1) ${bl('teenoorstaande hoeke')} van ʼn koordevierhoek is altyd ${bl('supplementêr')} (hulle tel op tot 180°), en (2) die ${gr('buitehoek')} van ʼn koordevierhoek (gevorm deur een sy te verleng) is altyd gelyk aan die ${or('teenoorstaande binnehoek')}. Albei stellings het ewe belangrike omgekeerdes, wat jou toelaat om te bewys dat vier punte op ʼn gemeenskaplike sirkel lê (dat hulle ${bl('konsiklies')} is) sonder om ooit daardie sirkel te teken. Dit is een van die twee mees gereeld geëksamineerde sirkelraaisels in Graad 11 CAPS Vraestel 2, so maak seker jy kan die bewys hieronder reproduseer, nie net die resultaat opsê nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teenoorstaande hoekpaar 1')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('teenoorstaande hoekpaar 2')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teenoorstaande binnehoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('buitehoek')}</span>` +
        `</div>` +

        // ── Two theorems + converses ───────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die stellings en hulle omgekeerdes</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Teenoorstaande Hoeke van ʼn Koordevierhoek is Supplementêr</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">In koordevierhoek ABCD is ${bl('∠A + ∠C = 180°')} en ${re('∠B + ∠D = 180°')}. Elke paar teenoorstaande hoeke tel op tot 180°, omdat elkeen die helfte is van een van die twee boë wat saam die volle 360° van die sirkel uitmaak.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Omgekeerde — Supplementêre Teenoorstaande Hoeke ⟹ Koordevierhoek</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ʼn vierhoek een paar teenoorstaande hoeke het wat optel tot 180°, dan is daardie vierhoek ʼn koordevierhoek — sy vier hoekpunte moet op een sirkel lê. Gebruik dit om te bewys dat punte konsiklies is.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Buitehoek = Teenoorstaande Binnehoek</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ʼn sy van koordevierhoek ABCD verleng word verby ʼn hoekpunt, is die ${gr('buitehoek')} wat daar gevorm word gelyk aan die ${or('teenoorstaande binnehoek')}. Dit is ʼn direkte gevolg van Stelling 1, hieronder bewys.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">4</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Omgekeerde — Buitehoek = Teenoorstaande Binnehoek ⟹ Koordevierhoek</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As die buitehoek van ʼn vierhoek gelyk is aan die teenoorstaande binnehoek, is die vierhoek ʼn koordevierhoek. Dit is bloot ʼn alternatiewe manier om die omgekeerde van Stelling 1 te stel.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Formal proof of Theorem 1 ───────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Bewys — Teenoorstaande Hoeke is Supplementêr</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Gegee:</strong> Koordevierhoek ABCD in ʼn sirkel met middelpunt O.</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Te bewys:</strong> ∠BAD + ∠BCD = 180°.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Konstruksie:</strong> Trek OB en OD.</p>` +
        proofTable([
          ['Refleks ∠BOD = 2∠BAD', '∠ by middelpunt = 2 × ∠ by omtrek (staan op boog BCD)'],
          ['∠BOD = 2∠BCD', '∠ by middelpunt = 2 × ∠ by omtrek (staan op boog BAD)'],
          ['Refleks ∠BOD + ∠BOD = 360°', '∠e rondom ʼn punt'],
          ['∴ 2∠BAD + 2∠BCD = 360°', 'substitusie uit die twee reëls hierbo'],
          ['∴ ∠BAD + ∠BCD = 180°, d.w.s. ∠A + ∠C = 180°', 'deel albei kante deur 2'],
        ]) +
        `<p style="margin:10px 0 0 0;color:#374151;font-size:14px;">Aangesien die hoeke van enige vierhoek optel tot 360°, volg ${bl('∠B + ∠D = 360° − (∠A + ∠C) = 360° − 180° = 180°')} onmiddellik — dus is albei pare teenoorstaande hoeke supplementêr.</p>` +
        `</div>` +

        // ── Corollary proof ──────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Bewys van die Gevolgtrekking — Buitehoek = Teenoorstaande Binnehoek</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Gegee:</strong> Koordevierhoek ABCD met sy AB verleng tot ʼn punt E.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Te bewys:</strong> ∠CBE = ∠ADC.</p>` +
        proofTable([
          ['∠ABC + ∠CBE = 180°', '∠e op ʼn reguit lyn AE'],
          ['∠ABC + ∠ADC = 180°', 'teenoorst ∠e van koordevierhoek ABCD'],
          ['∴ ∠CBE = ∠ADC', 'albei gelyk aan 180° − ∠ABC'],
        ]) +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Bewys dat punte konsiklies is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om te bewys dat vier punte op een sirkel lê, wys <strong>óf</strong> dat een paar teenoorstaande hoeke van die vierhoek wat hulle vorm supplementêr is, <strong>óf</strong> dat ʼn buitehoek gelyk is aan die teenoorstaande binnehoek. Enige een van die omgekeerdes is voldoende — jy hoef net een te bewys.</p>` +
        `</div>`,

      workedExamples: [
        {
          question:
            'In koordevierhoek ABCD (getoon), is ∠ABC = 92° en ∠ADC = x. Bepaal x.<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="170.78" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="35.43" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="95" y2="197.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="197.94" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 154.47,43.04 A 18,18 0 0 0 178.39,51.74" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 111.91,191.78 A 18,18 0 0 0 88.84,181.03" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="170.78" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="176.78" y="25.43" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="232.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="95" cy="197.94" r="2.5" fill="#0f1f3d"/><text x="85" y="216.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="159.15" y="71.39" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">92°</text><text x="109.37" y="171.14" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer: `x = ${or('88°')}`,
          steps: [
            `${bl('Teenoorstaande hoeke')} van ʼn koordevierhoek is supplementêr: ${bl('∠ABC + ∠ADC = 180°')}.`,
            `${bl('92°')} + x = 180°.`,
            `x = 180° − 92° = ${or('88°')}.`,
            `<strong>Antwoord:</strong> x = ${or('88°')}. ✓`,
          ],
        },
        {
          question: 'Koordevierhoek WXYZ het ∠WZY = 118°. Sy ZW word verleng verby W tot ʼn punt V. Bepaal die buitehoek ∠VWX.',
          answer: `∠VWX = ${gr('118°')}`,
          steps: [
            `Die ${gr('buitehoek')} by W (naamlik ∠VWX) is gelyk aan die ${or('teenoorstaande binnehoek')}, naamlik ${or('∠WZY')}.`,
            `${or('∠WZY')} = ${or('118°')}.`,
            `Daarom is ${gr('∠VWX')} = ${gr('118°')}.`,
            `<strong>Antwoord:</strong> ∠VWX = ${gr('118°')}. ✓`,
          ],
        },
        {
          question: 'Vierhoek PQRS het ∠P = 95° en ∠R = 85°. Zanele beweer PQRS moet ʼn koordevierhoek wees. Is sy korrek?',
          answer: 'Ja — volgens die omgekeerde van die stelling',
          steps: [
            `Kyk of die gegewe paar teenoorstaande hoeke supplementêr is: ${bl('∠P + ∠R = 95° + 85° = 180°')}.`,
            `Aangesien een paar teenoorstaande hoeke optel tot 180°, geld die omgekeerde: ʼn vierhoek met supplementêre teenoorstaande hoeke is ʼn koordevierhoek.`,
            `<strong>Antwoord:</strong> Ja, Zanele is korrek — PQRS is ʼn koordevierhoek, want ∠P en ∠R is supplementêr. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ABCD is ʼn koordevierhoek met ∠A = 112°. Bepaal ∠C.',
          answer: '68°',
          checkMode: 'auto',
          correctAnswer: '68',
          correctAnswers: ['68', '68°', '68 grade'],
          explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr: ∠A + ∠C = 180°.\n∠C = 180° − 112° = 68° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende oor koordevierhoek EFGH.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ∠F = 77°. Bepaal ∠H.',
              correctAnswer: '103',
              correctAnswers: ['103', '103°', '103 grade'],
              explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr: ∠H = 180° − 77° = 103° ✓',
            },
            {
              label: 'b) Sy FG word verleng verby G. As die teenoorstaande binnehoek ∠E = 99°, bepaal die buitehoek by G.',
              correctAnswer: '99',
              correctAnswers: ['99', '99°', '99 grade'],
              explanation: 'Buitehoek van ʼn koordevierhoek = teenoorstaande binnehoek = 99° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question:
            'In die diagram is O die middelpunt van die sirkel en ABCD is ʼn koordevierhoek. Koord AC onderspan ∠AOC = 130° by die middelpunt, aan dieselfde kant as B. D lê op die klein boog AC. Bepaal die grootte van ∠ABC en ∠ADC, en toon jou redes.<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#2563eb" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#2563eb" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#2563eb" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.71,201.4 A 15,15 0 0 1 152.29,201.4" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="228" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">130°</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="140" y="180" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer:
            `∠ABC = ${bl('65°')}, ∠ADC = ${gr('115°')}.` +
            proofTable([
              ['∠ABC = 130° ÷ 2 = 65°', '∠ by middelpunt = 2 × ∠ by omtrek (∠AOC en ∠ABC staan op dieselfde boog — B op die groot boog, dieselfde kant as O)'],
              ['∠ABC + ∠ADC = 180°', 'teenoorst ∠e van koordevierhoek ABCD'],
              ['∠ADC = 180° − 65° = 115°', 'substitusie'],
            ]),
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn koordevierhoek ABCD wys met teenoorstaande hoekpare uitgelig in blou en rooi, ʼn sy verleng om die buitehoek in groen te wys wat met die teenoorstaande binnehoek in oranje ooreenstem, en die middelpunt-konstruksie wat in die formele bewys gebruik word" />',

      diagramSvg:
        '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="170.78" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="35.43" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="95" y2="197.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="95" y1="197.94" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="35.43" x2="207.02" y2="18.53" stroke="#0f1f3d" stroke-width="2" stroke-dasharray="4,3"/><path d="M 71.74,81.61 A 18,18 0 0 1 61.59,106.13" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 154.47,43.04 A 18,18 0 0 0 178.39,51.74" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 187.09,27.82 A 18,18 0 0 1 178.39,51.74" fill="none" stroke="#16a34a" stroke-width="2" stroke-dasharray="2,2"/><path d="M 216.96,134.47 A 18,18 0 0 0 207.66,156.94" fill="none" stroke="#ea580c" stroke-width="2"/><path d="M 111.91,191.78 A 18,18 0 0 0 88.84,181.03" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="170.78" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="176.78" y="25.43" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="232.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="95" cy="197.94" r="2.5" fill="#0f1f3d"/><text x="85" y="216.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><circle cx="207.02" cy="18.53" r="2.5" fill="#0f1f3d"/><text x="212.02" y="14.53" font-size="12" fill="#0f1f3d" font-weight="700">E</text><text x="86.83" y="106.24" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">100°</text><text x="159.15" y="71.39" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">75°</text><text x="202.74" y="51.06" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">105°</text><text x="193.15" y="141.77" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">80°</text><text x="109.37" y="171.14" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">105°</text></svg>',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 7 — THEOREM: TANGENT-CHORD (ALTERNATE SEGMENT) THEOREM
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangent-chord-theorem',
      title: 'Stelling — Die Raaklyn-koordstelling (Stelling van die Oorstaande Segment)',
      icon: '↗',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ʼn ${gr('raaklyn')} ʼn sirkel by ʼn punt T raak, en ʼn ${or('koord')} vanaf T getrek word, word die ${gr('hoek tussen die raaklyn en die koord')} die raaklyn-koordhoek genoem. Hierdie stelling — ook die ${gr('stelling van die oorstaande segment')} genoem — sê dat die raaklyn-koordhoek altyd gelyk is aan die ingeskrewe hoek in die ${gr('oorstaande segment')} (die segment aan die ${bl('ander kant')} van die koord). Dit is die tweede swaar geëksamineerde sirkelraaisel in Graad 11 CAPS Vraestel 2, saam met die koordevierhoekstelling. ʼn Nuttige gevolgtrekking volg ook: twee raaklyne wat vanuit dieselfde eksterne punt aan ʼn sirkel getrek word, is altyd ewe lank.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('raaklyn / gelyke hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koord')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorstaande segment')}</span>` +
        `</div>` +

        // ── Theorem + converse + corollary ───────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die stelling, sy omgekeerde, en ʼn gevolgtrekking</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Raaklyn-koordstelling (Stelling van die Oorstaande Segment)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As PT ʼn raaklyn by T is en TC ʼn koord is, dan is die ${gr('raaklyn-koordhoek ∠PTC')} gelyk aan die ingeskrewe hoek ${gr('∠TAC')} in die oorstaande segment, vir enige punt A op die boog aan die ander kant van TC.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Omgekeerde — Gelyke Hoek ⟹ Raaklyn</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ʼn lyn deur ʼn punt T op ʼn sirkel ʼn hoek met ʼn koord TC vorm wat gelyk is aan die ingeskrewe hoek in die oorstaande segment, dan is daardie lyn ʼn raaklyn aan die sirkel by T. Gebruik dit om te bewys dat ʼn lyn ʼn raaklyn is.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Gevolgtrekking — Raaklyne vanaf ʼn Eksterne Punt is Ewe Lank</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ${or('PA')} en ${or('PB')} raaklyne is wat vanaf dieselfde eksterne punt P getrek word en die sirkel by A en B raak, dan is ${or('PA = PB')}.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Formal proof of the tan-chord theorem ────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Bewys — Raaklyn-koordstelling</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Gegee:</strong> Sirkel met middelpunt O; PT is ʼn raaklyn by T; TC is ʼn koord met raaklyn-koordhoek ${gr('∠PTC = x')}; A is ʼn punt op die sirkel in die oorstaande segment.</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Te bewys:</strong> ∠TAC = x.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Konstruksie:</strong> Trek middellyn TD deur T, en trek DC.</p>` +
        proofTable([
          ['∠DTP = 90°', 'raaklyn ⊥ middellyn by die raakpunt'],
          ['∠DTC = 90° − x', '∠DTC = ∠DTP − ∠PTC'],
          ['∠TCD = 90°', '∠ in halfsirkel (TD is ʼn middellyn)'],
          ['∠TDC = 180° − 90° − (90° − x) = x', '∠somme van △TDC = 180°'],
          ['∠TAC = ∠TDC = x', '∠e in dieselfde segment (A en D lê op dieselfde boog, albei onderspan TC)'],
          ['∴ ∠TAC = ∠PTC (albei gelyk aan x)', 'raaklyn-koordstelling bewys'],
        ]) +
        `</div>` +

        // ── Corollary proof ──────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;">Bewys van die Gevolgtrekking — Gelyke Raaklyne vanaf ʼn Eksterne Punt</p>` +
        `<p style="margin:0 0 6px 0;color:#374151;font-size:14px;"><strong>Gegee:</strong> PA en PB is raaklyne vanaf eksterne punt P, wat die sirkel (middelpunt O) by A en B raak.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Te bewys:</strong> PA = PB.</p>` +
        `<p style="margin:0 0 10px 0;color:#374151;font-size:14px;"><strong>Konstruksie:</strong> Trek OA, OB en OP.</p>` +
        proofTable([
          ['OA = OB', 'radiusse van dieselfde sirkel'],
          ['∠OAP = ∠OBP = 90°', 'raaklyn ⊥ radius'],
          ['OP = OP', 'gemeenskaplike sy'],
          ['∴ △OAP ≡ △OBP', 'RHS (regte hoek, skuinssy, sy)'],
          ['∴ PA = PB', 'ooreenstemmende sye van kongruente driehoeke'],
        ]) +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Die oorstaande segment identifiseer</p>` +
        `<p style="margin:0;color:#78350f;">Teken die koord, let op na watter kant die raaklyn-koordhoek oopmaak, en kyk dan na die segment aan die <strong>ander</strong> kant — enige ingeskrewe hoek wat vanuit daardie segment op die koord staan, is gelyk aan jou raaklyn-koordhoek.</p>` +
        `</div>`,

      workedExamples: [
        {
          question:
            'ʼn Raaklyn by punt T maak ʼn hoek van 58° met koord TC. Bepaal die hoek ∠TAC in die oorstaande segment (A op die ver boog).<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="210" x2="220" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 140,198 L 152,198 L 152,210" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="140" y1="210" x2="213.7" y2="68.3" stroke="#ea580c" stroke-width="2.5"/><line x1="62.06" y1="75" x2="140" y2="210" stroke="#0f1f3d" stroke-width="2"/><line x1="62.06" y1="75" x2="213.7" y2="68.3" stroke="#0f1f3d" stroke-width="2"/><path d="M 160,210 A 20,20 0 0 0 149.23,192.26" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 72.06,92.32 A 20,20 0 0 0 82.04,74.12" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="213.7" cy="68.3" r="2.5" fill="#0f1f3d"/><text x="221.7" y="62.3" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="62.06" cy="75" r="2.5" fill="#0f1f3d"/><text x="42.06" y="69" font-size="13" fill="#0f1f3d" font-weight="700">A</text><text x="169.92" y="196.84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">58°</text><text x="92.74" y="91.82" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer: `∠TAC = ${gr('58°')}`,
          steps: [
            `Die raaklyn-koordhoek by T tussen die raaklyn en koord TC is ${gr('58°')}.`,
            `Volgens die raaklyn-koordstelling (stelling van die oorstaande segment) is die ingeskrewe hoek in die oorstaande segment gelyk aan die raaklyn-koordhoek.`,
            `∠TAC = ${gr('58°')}.`,
            `<strong>Antwoord:</strong> ∠TAC = ${gr('58°')}. ✓`,
          ],
        },
        {
          question: 'ʼn Lyn ℓ raak ʼn sirkel by punt P. Koord PQ word getrek, en die hoek tussen ℓ en PQ is 47°. ʼn Punt R lê op die sirkel, in die segment aan die teenoorgestelde kant van PQ vanwaar daardie hoek oopmaak, met ∠PRQ = 47°. Sê, met rede, of ℓ ʼn raaklyn aan die sirkel by P is.',
          answer: 'Ja — volgens die omgekeerde van die raaklyn-koordstelling',
          steps: [
            `Die hoek tussen lyn ℓ en koord PQ (47°) is gelyk aan die ingeskrewe hoek ∠PRQ (47°) in die segment aan die ander kant van PQ.`,
            `Volgens die omgekeerde van die raaklyn-koordstelling, as die hoek wat ʼn lyn met ʼn koord vorm gelyk is aan die hoek in die oorstaande segment, moet daardie lyn ʼn raaklyn wees.`,
            `<strong>Antwoord:</strong> Ja, ℓ is ʼn raaklyn aan die sirkel by P. ✓`,
          ],
        },
        {
          question: 'Raaklyne PA en PB word vanaf eksterne punt P getrek, met PA = 3x − 2 en PB = x + 8. Bepaal x, en bepaal dan die lengte van PA.',
          answer: `x = ${or('5')}, PA = ${or('13')}`,
          steps: [
            `Raaklyne vanaf dieselfde eksterne punt is ewe lank: ${or('PA = PB')}.`,
            `${or('3x − 2 = x + 8')}.`,
            `2x = 10, dus x = ${or('5')}.`,
            `PA = 3(5) − 2 = 15 − 2 = ${or('13')}.`,
            `<strong>Antwoord:</strong> x = ${or('5')}, PA = ${or('13')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Raaklyn-koordhoek by punt T is 63°. Bepaal die hoek in die oorstaande segment.',
          answer: '63°',
          checkMode: 'auto',
          correctAnswer: '63',
          correctAnswers: ['63', '63°', '63 grade'],
          explanation: 'Volgens die raaklyn-koordstelling is die hoek in die oorstaande segment gelyk aan die raaklyn-koordhoek: 63° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Raaklyne PA en PB word vanaf eksterne punt P getrek, met PA = 4x + 1 en PB = 2x + 9. Bepaal PA.',
              correctAnswer: '17',
              correctAnswers: ['17', '17cm', '17 cm'],
              explanation: 'Raaklyne vanaf dieselfde eksterne punt is ewe lank: 4x + 1 = 2x + 9, dus 2x = 8, x = 4.\nPA = 4(4) + 1 = 17 ✓',
            },
            {
              label: 'b) Die hoek tussen ʼn raaklyn en ʼn koord by die raakpunt is 71°. Bepaal die hoek wat die koord in die oorstaande segment onderspan.',
              correctAnswer: '71',
              correctAnswers: ['71', '71°', '71 grade'],
              explanation: 'Volgens die raaklyn-koordstelling is die hoek in die oorstaande segment gelyk aan die raaklyn-koordhoek: 71° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question:
            'PT is ʼn raaklyn aan ʼn sirkel by T. TC is ʼn koord, en A is ʼn punt op die sirkel in die oorstaande segment, met TA en AC getrek om driehoek TAC te vorm. Die raaklyn-koordhoek by T (tussen die raaklyn en koord TC) is 50°, en ∠TCA = 65°. Bepaal ∠TAC en ∠ATC, en toon dat driehoek TAC gelykbenig is.<br>' +
            '<div style="margin:10px 0"><svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="210" x2="220" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="213.7" y2="68.3" stroke="#ea580c" stroke-width="2.5"/><line x1="62.06" y1="75" x2="140" y2="210" stroke="#0f1f3d" stroke-width="2"/><line x1="62.06" y1="75" x2="213.7" y2="68.3" stroke="#0f1f3d" stroke-width="2"/><path d="M 160,210 A 20,20 0 0 0 149.23,192.26" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 129,190.95 A 22,22 0 0 1 150.16,190.48" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 204.47,86.04 A 20,20 0 0 1 193.72,69.18" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="213.7" cy="68.3" r="2.5" fill="#0f1f3d"/><text x="221.7" y="62.3" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="62.06" cy="75" r="2.5" fill="#0f1f3d"/><text x="42.06" y="69" font-size="13" fill="#0f1f3d" font-weight="700">A</text><text x="169.92" y="191.84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">50°</text><text x="139.13" y="178" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">?</text><text x="184.18" y="87.12" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">65°</text><text x="92.74" y="91.82" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">?</text></svg></div>',
          answer:
            `∠TAC = ${gr('50°')}, ∠ATC = ${bl('65°')}, en aangesien ∠TCA = ∠ATC, is driehoek TAC gelykbenig met TA = AC.` +
            proofTable([
              ['∠TAC = 50°', 'raaklyn-koordstelling (∠TAC is die ∠ in die oorstaande segment, gelyk aan die raaklyn-koordhoek van 50°)'],
              ['∠ATC = 180° − 50° − 65° = 65°', '∠somme van △TAC = 180°'],
              ['∠TCA = ∠ATC = 65°', 'albei gelyk aan 65° (hierbo getoon)'],
              ['∴ TA = AC', 'sye teenoor gelyke hoeke in ʼn driehoek is gelyk, dus is △TAC gelykbenig'],
            ]),
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn raaklyn by T wys met die raaklyn-koordhoek in groen uitgelig, ʼn gelyke ingeskrewe hoek in die oorstaande segment ook in groen uitgelig, en ʼn aparte diagram wat twee gelyke raaklynstukke vanaf ʼn eksterne punt wys" />',

      diagramSvg:
        '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="210" x2="220" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="3,3"/><path d="M 140,198 L 152,198 L 152,210" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><line x1="140" y1="210" x2="213.7" y2="68.3" stroke="#ea580c" stroke-width="2.5"/><line x1="62.06" y1="75" x2="140" y2="210" stroke="#0f1f3d" stroke-width="2"/><line x1="62.06" y1="75" x2="213.7" y2="68.3" stroke="#0f1f3d" stroke-width="2"/><path d="M 160,210 A 20,20 0 0 0 149.23,192.26" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 72.06,92.32 A 20,20 0 0 0 82.04,74.12" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="213.7" cy="68.3" r="2.5" fill="#0f1f3d"/><text x="221.7" y="62.3" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="62.06" cy="75" r="2.5" fill="#0f1f3d"/><text x="42.06" y="69" font-size="13" fill="#0f1f3d" font-weight="700">A</text><text x="169.92" y="196.84" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">x</text><text x="92.74" y="91.82" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">x</text></svg>',
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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-3):   Sirkelterminologie                                          — abstrak, geen diagram
    // Blok 2 (4-7):   Loodlyn vanaf middelpunt halveer koord (Pythagoras)          — BENODIG DIAGRAM (4,5,6,7)
    // Blok 3 (8-11):  Hoek by middelpunt = 2 × hoek by omtrek (+ reflekshoek)      — BENODIG DIAGRAM (8,9,10,11)
    // Blok 4 (12-15): Hoeke in dieselfde segment / gelyke koorde                   — BENODIG DIAGRAM (12,13,14,15)
    // Blok 5 (16-19): Hoek in ʼn halfsirkel (90°) + omgekeerde                     — BENODIG DIAGRAM (16,17,18,19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Sirkelterminologie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Wat is die naam van die lynstuk wat die middelpunt van ʼn sirkel met enige punt op die omtrek verbind?', checkMode: 'auto', correctAnswer: 'radius', correctAnswers: ['radius', 'ʼn radius', "'n radius", 'n radius'], answer: 'radius', explanation: 'ʼn Radius verbind die middelpunt O met enige punt op die omtrek.' },
        { difficulty: 'Easy', question: 'Wat is die naam wat gegee word aan die langste moontlike koord in ʼn sirkel — een wat deur die middelpunt gaan?', checkMode: 'auto', correctAnswer: 'middellyn', correctAnswers: ['middellyn', 'ʼn middellyn', "'n middellyn", 'n middellyn'], answer: 'middellyn', explanation: 'ʼn Koord wat deur die middelpunt gaan, is die langste moontlike koord en word ʼn middellyn genoem.' },
        { difficulty: 'Medium', question: 'ʼn Lyn raak ʼn sirkel by presies een punt en dring nie in die sirkel in nie. Wat word hierdie lyn genoem, en wat is die grootte van die hoek wat dit met die radius by daardie punt maak?', checkMode: 'auto', correctAnswer: 'raaklyn,90', correctAnswers: ['raaklyn,90', 'raaklyn, 90°', 'raaklyn 90'], answer: 'raaklyn, 90°', explanation: 'ʼn Lyn wat die sirkel by presies een punt raak, is ʼn raaklyn. ʼn Raaklyn is altyd loodreg op die radius by die raakpunt, dus is die hoek 90°.' },
        { difficulty: 'Medium', question: 'Wat noem ons die gebied van ʼn sirkel wat tussen ʼn koord en die boog wat dit afsny, ingesluit word?', checkMode: 'auto', correctAnswer: 'segment', correctAnswers: ['segment', 'ʼn segment', "'n segment", 'n segment'], answer: 'segment', explanation: 'Die gebied tussen ʼn koord en die boog wat dit afsny, word ʼn segment genoem.' },

        // Blok 2 — Loodlyn vanaf middelpunt halveer koord (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, word OM loodreg op koord AB getrek, waar AB = 16 cm en die radius OA = 10 cm. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], answer: '6 cm', explanation: 'Aangesien OM ⊥ AB, halveer OM die koord: AM = 16 ÷ 2 = 8 cm.\nIn reghoekige driehoek OMA: OM² = OA² − AM² = 10² − 8² = 100 − 64 = 36.\nOM = √36 = 6 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="88.38" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88.38" y1="193.72" x2="191.62" y2="193.72" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,184.72 L 131,184.72 L 131,193.72" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="88.38" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="70.38" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="191.62" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="199.62" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="146" y="185.72" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="91.08" y="147.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 10 cm</text><text x="140" y="219.72" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 16 cm</text><text x="154" y="160.86" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O en radius 13 cm, is OM loodreg op koord AB en OM = 5 cm. Bepaal die lengte van koord AB.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'In reghoekige driehoek OMA: AM² = OA² − OM² = 13² − 5² = 169 − 25 = 144.\nAM = √144 = 12 cm.\nAangesien OM die koord halveer, is AB = 2 × AM = 2 × 12 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="208.94" y2="177.85" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,168.85 L 131,168.85 L 131,177.85" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="53.06" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="216.94" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="146" y="169.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="85.24" y="136.67" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 13 cm</text><text x="140" y="203.85" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="152.93" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 5 cm</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon met middelpunt O en radius 17 cm, is koord AB = 30 cm. OM word vanaf die middelpunt loodreg op AB getrek. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], answer: '8 cm', explanation: 'Aangesien OM ⊥ AB, halveer OM die koord: AM = 30 ÷ 2 = 15 cm.\nIn reghoekige driehoek OMA: OM² = OA² − AM² = 17² − 15² = 289 − 225 = 64.\nOM = √64 = 8 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="197.85" y2="188.94" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,179.94 L 131,179.94 L 131,188.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="205.85" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="146" y="180.94" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="88.82" y="144.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 17 cm</text><text x="140" y="214.94" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 30 cm</text><text x="154" y="158.47" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O en radius 25 cm, is M die middelpunt van koord AB, met OM = 7 cm. Bepaal die lengte van AB, en gee dan die grootte van hoek OMA.', checkMode: 'auto', correctAnswer: '48,90', correctAnswers: ['48,90', '48cm,90°', '48 cm, 90°'], answer: 'AB = 48 cm, ∠OMA = 90°', explanation: 'In reghoekige driehoek OMA: AM² = OA² − OM² = 25² − 7² = 625 − 49 = 576.\nAM = √576 = 24 cm.\nAB = 2 × AM = 2 × 24 = 48 cm.\nAangesien OM die loodlyn vanaf die middelpunt na die koord is, is ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="217.94" y2="165" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,156 L 131,156 L 131,165" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="44.06" y="171" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="225.94" y="171" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="165" r="2.5" fill="#0f1f3d"/><text x="146" y="157" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="83.03" y="128.64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="191" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="146.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 7 cm</text></svg>' },

        // Blok 3 — Hoek by middelpunt = 2 × hoek by omtrek (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ∠AOB = 84° by die middelpunt, en ∠ACB by punt C op die omtrek (hoofboog, dieselfde kant as O). Bepaal ∠ACB.', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42°', '42 grade'], answer: '42°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠ACB = 84° ÷ 2 = 42° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">84°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, onderspan koord PQ ∠PRQ = 53° by punt R op die omtrek. Bepaal die grootte van ∠POQ by die middelpunt.', checkMode: 'auto', correctAnswer: '106', correctAnswers: ['106', '106°', '106 grade'], answer: '106°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠POQ = 2 × 53° = 106° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="160" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">53°</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ∠AOB = 150° by die middelpunt (gemeet aan die hoofboog-kant). Punt D lê op die omtrek op die hoofboog, aan dieselfde kant as O. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75°', '75 grade'], answer: '75°', explanation: 'D is op die hoofboog, dieselfde kant as die gegewe 150°-hoek.\n∠ADB = 150° ÷ 2 = 75° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">150°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ʼn hoek van 160° by die middelpunt aan die hoofboog-kant. Punt E lê op die klein boog. Bepaal die reflekshoek AOB, en bepaal dan ∠AEB.', checkMode: 'auto', correctAnswer: '200,100', correctAnswers: ['200,100', '200°,100°', '200°, 100°'], answer: 'Reflekshoek AOB = 200°, ∠AEB = 100°', explanation: 'Reflekshoek AOB = 360° − 160° = 200°.\nE is op die klein boog, dus gebruik die reflekshoek: ∠AEB = 200° ÷ 2 = 100° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.71,201.4 A 15,15 0 0 1 152.29,201.4" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 109.93,130.94 A 32,32 0 1 1 170.07,130.94" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="134" y="230" font-size="13" fill="#0f1f3d" font-weight="700">E</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">160°</text><text x="140" y="180" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 4 — Hoeke in dieselfde segment / gelyke koorde (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon lê punte C en D op dieselfde boog relatief tot koord AB (dieselfde kant van AB). ∠ACB = 47°. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47', '47°', '47 grade'], answer: '47°', explanation: 'C en D lê op dieselfde segment relatief tot koord AB, dus is hoeke in dieselfde segment gelyk.\n∠ADB = ∠ACB = 47° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">47°</text><text x="123.12" y="62.91" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon is koord PQ = koord RS. Koord PQ onderspan ʼn hoek van 68° by die middelpunt. Bepaal die hoek wat koord RS by die middelpunt onderspan.', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68', '68°', '68 grade'], answer: '68°', explanation: 'Gelyke koorde onderspan gelyke hoeke by die middelpunt.\nRS onderspan dieselfde hoek as PQ: 68° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="217.94" y1="165" x2="124.37" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="100.58" y1="63.7" x2="94.85" y2="55.51" stroke="#ea580c" stroke-width="2"/><line x1="169.04" y1="182.28" x2="173.27" y2="191.35" stroke="#7c3aed" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="217.94" y2="165" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 121.21,113.16 A 20,20 0 0 1 140,100" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 165.98,135 A 30,30 0 0 1 134.79,149.54" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><text x="120.5" y="92.15" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">68°</text><text x="158.6" y="159.88" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="120" y="24" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="227.94" y="167" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="130.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">S</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon is koord MN = koord XY in dieselfde sirkel. MN onderspan ʼn hoek van 39° by die omtrek. Bepaal die hoek wat XY by die omtrek onderspan.', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '39°', '39 grade'], answer: '39°', explanation: 'Gelyke koorde onderspan gelyke hoeke by die omtrek.\nXY onderspan dieselfde hoek as MN: 39° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="155.63" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="68.17" y1="132.67" x2="58.32" y2="134.4" stroke="#ea580c" stroke-width="2"/><line x1="186.89" y1="175.88" x2="193.31" y2="183.54" stroke="#7c3aed" stroke-width="2"/><line x1="71.06" y1="177.85" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 211.58,96.72 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">V</text><line x1="224.57" y1="150.78" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.28,55.41 A 15,15 0 0 1 94.12,60.13" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="88.38" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="80.38" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="195.59" y="96.98" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">39°</text><text x="109.08" y="73.25" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="51.06" y="181.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="152.78" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">Y</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O lê punte A, B, C en D op die omtrek, met C en D op dieselfde boog relatief tot koord AB. ∠ACB = 2x + 8° en ∠ADB = 3x − 12°. Bepaal x, en bepaal dan die grootte van ∠ACB.', checkMode: 'auto', correctAnswer: '20,48', correctAnswers: ['20,48', '20,48°', 'x=20,48°'], answer: 'x = 20, ∠ACB = 48°', explanation: 'Hoeke in dieselfde segment is gelyk: 2x + 8° = 3x − 12°.\n20° = x.\n∠ACB = 2(20°) + 8° = 40° + 8° = 48° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2x + 8°</text><text x="123.12" y="62.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3x − 12°</text></svg>' },

        // Blok 5 — Hoek in ʼn halfsirkel + omgekeerde (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon is AB ʼn middellyn en P is ʼn punt op die omtrek. ∠PAB = 35°. Bepaal ∠APB, en bepaal dan ∠PBA.', checkMode: 'auto', correctAnswer: '90,55', correctAnswers: ['90,55', '90°,55°', '90°, 55°'], answer: '∠APB = 90°, ∠PBA = 55°', explanation: 'Aangesien AB ʼn middellyn is, is ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: 35° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 35° = 55° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 182.75,50.89 L 187.37,59.76 L 196.24,55.15" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="191.62" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="197.62" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="183.8" y="71.07" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">35°</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon onderspan koord XY ʼn hoek van 90° by punt Z op die omtrek. Wat kan jy oor koord XY aflei?', checkMode: 'auto', correctAnswer: 'middellyn', correctAnswers: ['middellyn', 'xy is ʼn middellyn', 'dit is ʼn middellyn'], answer: 'XY is ʼn middellyn van die sirkel', explanation: 'Volgens die omgekeerde van die hoek-in-ʼn-halfsirkel-stelling, as ʼn koord 90° by ʼn punt op die sirkel onderspan, moet daardie koord ʼn middellyn wees. Dus is XY ʼn middellyn ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="226.93" y2="96.71" stroke="#ea580c" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><line x1="226.93" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 126.42,201.47 L 132.85,193.81 L 138.58,202" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="53.07" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="33.07" y="100.71" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="226.93" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="234.93" y="96.71" font-size="13" fill="#0f1f3d" font-weight="700">Y</text><circle cx="132.16" cy="209.66" r="2.5" fill="#0f1f3d"/><text x="126.16" y="197.66" font-size="13" fill="#0f1f3d" font-weight="700">Z</text><text x="133.29" y="183.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon is AB ʼn middellyn met AB = 20 cm. P is ʼn punt op die omtrek met AP = 12 cm. Bepaal die grootte van ∠APB, en bepaal dan die lengte van BP.', checkMode: 'auto', correctAnswer: '90,16', correctAnswers: ['90,16', '90°,16cm', '90°, 16 cm'], answer: '∠APB = 90°, BP = 16 cm', explanation: 'AB is ʼn middellyn, dus is ∠APB = 90° (hoek in ʼn halfsirkel).\nDriehoek APB is reghoekig by P, dus deur Pythagoras: BP² = AB² − AP² = 20² − 12² = 400 − 144 = 256.\nBP = √256 = 16 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 199.55,65.57 L 202.97,74.97 L 212.36,71.55" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="214.94" y="52.15" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="197.96" y="85.71" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="119.47" y="85.07" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 12 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 20 cm</text><text x="240.51" y="85.6" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O is AB ʼn middellyn. C en D is punte op die omtrek aan dieselfde kant van AB, met ∠CAB = 31° en ∠DBA = 46°. Bepaal ∠ACB, ∠ADB, en ∠ABC.', checkMode: 'auto', correctAnswer: '90,90,59', correctAnswers: ['90,90,59', '90°,90°,59°', '90°, 90°, 59°'], answer: '∠ACB = 90°, ∠ADB = 90°, ∠ABC = 59°', explanation: 'AB is ʼn middellyn, dus is ∠ACB = 90° en ∠ADB = 90° (hoek in ʼn halfsirkel geld vir enige punt op die sirkel).\nIn driehoek ABC: ∠CAB = 31°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 31° = 59° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 132.93,37.07 L 140,44.14 L 147.07,37.07" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">P</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 205.14,71.08 L 207.85,79.67 L 216.43,76.96" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 63.57,76.96 L 72.15,79.67 L 74.86,71.08" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="60.38" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="58.28" y="58.38" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="73.72" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">31°</text><text x="206.28" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">46°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het sirkelterminologie en die sleutel sirkelstellings bemeester — loodlyn wat ʼn koord halveer, hoek by die middelpunt, hoeke in dieselfde segment, en die hoek in ʼn halfsirkel.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die hoek-by-middelpunt-stelling of die halfsirkel-stelling, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde van elke sirkelstelling weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Sirkelterminologie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Wat is die naam van die lyn wat deur ʼn sirkel sny en die omtrek by twee punte kruis?', checkMode: 'auto', correctAnswer: 'snylyn', correctAnswers: ['snylyn', 'ʼn snylyn', "'n snylyn", 'n snylyn'], answer: 'snylyn', explanation: 'ʼn Lyn wat deur ʼn sirkel by twee punte sny, word ʼn snylyn genoem.' },
        { difficulty: 'Easy', question: 'Wat is die naam van die hoek wat by die middelpunt O van ʼn sirkel deur twee radiusse gevorm word wat na die eindpunte van ʼn koord getrek word?', checkMode: 'auto', correctAnswer: 'hoek by die middelpunt', correctAnswers: ['hoek by die middelpunt', 'die hoek by die middelpunt', 'middelpuntshoek'], answer: 'hoek by die middelpunt', explanation: 'Die hoek wat by die middelpunt deur twee radiusse na die eindpunte van ʼn koord gevorm word, word die hoek by die middelpunt genoem.' },
        { difficulty: 'Medium', question: 'ʼn Koord gaan deur die middelpunt van ʼn sirkel. Wat word hierdie koord genoem, en hoe vergelyk sy lengte met die radius?', checkMode: 'auto', correctAnswer: 'middellyn,2', correctAnswers: ['middellyn,2', 'middellyn, twee keer die radius', 'middellyn,dubbel'], answer: 'middellyn, twee keer die radius', explanation: 'ʼn Koord deur die middelpunt word ʼn middellyn genoem. Dit is gelyk aan twee radiusse, dus is dit twee keer die lengte van die radius.' },
        { difficulty: 'Medium', question: 'ʼn Gedeelte van ʼn sirkel wat deur ʼn koord en die boog wat dit afsny, begrens word, word ʼn segment genoem. Wat noem ons die korter van die twee boë tussen twee punte op ʼn sirkel?', checkMode: 'auto', correctAnswer: 'klein boog', correctAnswers: ['klein boog', 'die klein boog'], answer: 'klein boog', explanation: 'Die korter boog tussen twee punte op ʼn sirkel word die klein boog genoem (die langer een is die hoofboog).' },

        // Blok 2 — Loodlyn vanaf middelpunt halveer koord (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, word OM loodreg op koord AB getrek, waar AB = 24 cm en die radius OA = 15 cm. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9cm', '9 cm'], answer: '9 cm', explanation: 'Aangesien OM ⊥ AB, halveer OM die koord: AM = 24 ÷ 2 = 12 cm.\nIn reghoekige driehoek OMA: OM² = OA² − AM² = 15² − 12² = 225 − 144 = 81.\nOM = √81 = 9 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="88.38" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88.38" y1="193.72" x2="191.62" y2="193.72" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,184.72 L 131,184.72 L 131,193.72" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="88.38" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="70.38" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="191.62" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="199.62" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="146" y="185.72" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="91.08" y="147.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 15 cm</text><text x="140" y="219.72" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 24 cm</text><text x="154" y="160.86" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O en radius 20 cm, is OM loodreg op koord AB en OM = 16 cm. Bepaal die lengte van koord AB.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'In reghoekige driehoek OMA: AM² = OA² − OM² = 20² − 16² = 400 − 256 = 144.\nAM = √144 = 12 cm.\nAangesien OM die koord halveer, is AB = 2 × AM = 2 × 12 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="208.94" y2="177.85" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,168.85 L 131,168.85 L 131,177.85" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="53.06" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="216.94" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="146" y="169.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="85.24" y="136.67" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 20 cm</text><text x="140" y="203.85" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="152.93" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 16 cm</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon met middelpunt O en radius 41 cm, is koord AB = 80 cm. OM word vanaf die middelpunt loodreg op AB getrek. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9cm', '9 cm'], answer: '9 cm', explanation: 'Aangesien OM ⊥ AB, halveer OM die koord: AM = 80 ÷ 2 = 40 cm.\nIn reghoekige driehoek OMA: OM² = OA² − AM² = 41² − 40² = 1681 − 1600 = 81.\nOM = √81 = 9 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="197.85" y2="188.94" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,179.94 L 131,179.94 L 131,188.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="205.85" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="146" y="180.94" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="88.82" y="144.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 41 cm</text><text x="140" y="214.94" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 80 cm</text><text x="154" y="158.47" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O en radius 61 cm, is M die middelpunt van koord AB, met OM = 11 cm. Bepaal die lengte van AB, en gee dan die grootte van hoek OMB.', checkMode: 'auto', correctAnswer: '120,90', correctAnswers: ['120,90', '120cm,90°', '120 cm, 90°'], answer: 'AB = 120 cm, ∠OMB = 90°', explanation: 'In reghoekige driehoek OMB: BM² = OB² − OM² = 61² − 11² = 3721 − 121 = 3600.\nBM = √3600 = 60 cm.\nAB = 2 × BM = 2 × 60 = 120 cm.\nAangesien OM die loodlyn vanaf die middelpunt na die koord is, is ∠OMB = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="217.94" y2="165" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,156 L 131,156 L 131,165" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="44.06" y="171" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="225.94" y="171" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="165" r="2.5" fill="#0f1f3d"/><text x="146" y="157" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="83.03" y="128.64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">r = 61 cm</text><text x="140" y="191" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="146.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 11 cm</text></svg>' },

        // Blok 3 — Hoek by middelpunt = 2 × hoek by omtrek (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ∠AOB = 96° by die middelpunt, en ∠ACB by punt C op die omtrek (hoofboog, dieselfde kant as O). Bepaal ∠ACB.', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48°', '48 grade'], answer: '48°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠ACB = 96° ÷ 2 = 48° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">96°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, onderspan koord PQ ∠PRQ = 47° by punt R op die omtrek. Bepaal die grootte van ∠POQ by die middelpunt.', checkMode: 'auto', correctAnswer: '94', correctAnswers: ['94', '94°', '94 grade'], answer: '94°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠POQ = 2 × 47° = 94° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="160" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">47°</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ∠AOB = 168° by die middelpunt (gemeet aan die hoofboog-kant). Punt D lê op die omtrek op die hoofboog, aan dieselfde kant as O. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84°', '84 grade'], answer: '84°', explanation: 'D is op die hoofboog, dieselfde kant as die gegewe 168°-hoek.\n∠ADB = 168° ÷ 2 = 84° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">168°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ʼn hoek van 140° by die middelpunt aan die hoofboog-kant. Punt E lê op die klein boog. Bepaal die reflekshoek AOB, en bepaal dan ∠AEB.', checkMode: 'auto', correctAnswer: '220,110', correctAnswers: ['220,110', '220°,110°', '220°, 110°'], answer: 'Reflekshoek AOB = 220°, ∠AEB = 110°', explanation: 'Reflekshoek AOB = 360° − 140° = 220°.\nE is op die klein boog, dus gebruik die reflekshoek: ∠AEB = 220° ÷ 2 = 110° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.71,201.4 A 15,15 0 0 1 152.29,201.4" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 109.93,130.94 A 32,32 0 1 1 170.07,130.94" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="134" y="230" font-size="13" fill="#0f1f3d" font-weight="700">E</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="180" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 4 — Hoeke in dieselfde segment / gelyke koorde (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon lê punte C en D op dieselfde boog relatief tot koord AB (dieselfde kant van AB). ∠ACB = 61°. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61', '61°', '61 grade'], answer: '61°', explanation: 'C en D lê op dieselfde segment relatief tot koord AB, dus is hoeke in dieselfde segment gelyk.\n∠ADB = ∠ACB = 61° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">61°</text><text x="123.12" y="62.91" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon is koord PQ = koord RS. Koord PQ onderspan ʼn hoek van 74° by die middelpunt. Bepaal die hoek wat koord RS by die middelpunt onderspan.', checkMode: 'auto', correctAnswer: '74', correctAnswers: ['74', '74°', '74 grade'], answer: '74°', explanation: 'Gelyke koorde onderspan gelyke hoeke by die middelpunt.\nRS onderspan dieselfde hoek as PQ: 74° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="217.94" y1="165" x2="124.37" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="100.58" y1="63.7" x2="94.85" y2="55.51" stroke="#ea580c" stroke-width="2"/><line x1="169.04" y1="182.28" x2="173.27" y2="191.35" stroke="#7c3aed" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="217.94" y2="165" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 121.21,113.16 A 20,20 0 0 1 140,100" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 165.98,135 A 30,30 0 0 1 134.79,149.54" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><text x="120.5" y="92.15" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">74°</text><text x="158.6" y="159.88" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="120" y="24" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="227.94" y="167" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="130.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">S</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon is koord MN = koord XY in dieselfde sirkel. MN onderspan ʼn hoek van 56° by die omtrek. Bepaal die hoek wat XY by die omtrek onderspan.', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56°', '56 grade'], answer: '56°', explanation: 'Gelyke koorde onderspan gelyke hoeke by die omtrek.\nXY onderspan dieselfde hoek as MN: 56° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="155.63" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="68.17" y1="132.67" x2="58.32" y2="134.4" stroke="#ea580c" stroke-width="2"/><line x1="186.89" y1="175.88" x2="193.31" y2="183.54" stroke="#7c3aed" stroke-width="2"/><line x1="71.06" y1="177.85" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 211.58,96.72 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">V</text><line x1="224.57" y1="150.78" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.28,55.41 A 15,15 0 0 1 94.12,60.13" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="88.38" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="80.38" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="195.59" y="96.98" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">56°</text><text x="109.08" y="73.25" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="51.06" y="181.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="152.78" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">Y</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O lê punte A, B, C en D op die omtrek, met C en D op dieselfde boog relatief tot koord AB. ∠ACB = 4x − 6° en ∠ADB = 2x + 18°. Bepaal x, en bepaal dan die grootte van ∠ACB.', checkMode: 'auto', correctAnswer: '12,42', correctAnswers: ['12,42', '12,42°', 'x=12,42°'], answer: 'x = 12, ∠ACB = 42°', explanation: 'Hoeke in dieselfde segment is gelyk: 4x − 6° = 2x + 18°.\n2x = 24°.\nx = 12°.\n∠ACB = 4(12°) − 6° = 48° − 6° = 42° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">4x − 6°</text><text x="123.12" y="62.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2x + 18°</text></svg>' },

        // Blok 5 — Hoek in ʼn halfsirkel + omgekeerde (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon is AB ʼn middellyn en P is ʼn punt op die omtrek. ∠PAB = 48°. Bepaal ∠APB, en bepaal dan ∠PBA.', checkMode: 'auto', correctAnswer: '90,42', correctAnswers: ['90,42', '90°,42°', '90°, 42°'], answer: '∠APB = 90°, ∠PBA = 42°', explanation: 'Aangesien AB ʼn middellyn is, is ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: 48° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 48° = 42° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 182.75,50.89 L 187.37,59.76 L 196.24,55.15" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="191.62" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="197.62" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="183.8" y="71.07" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">48°</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon onderspan koord MN ʼn hoek van 90° by punt K op die omtrek. Wat kan jy oor koord MN aflei?', checkMode: 'auto', correctAnswer: 'middellyn', correctAnswers: ['middellyn', 'mn is ʼn middellyn', 'dit is ʼn middellyn'], answer: 'MN is ʼn middellyn van die sirkel', explanation: 'Volgens die omgekeerde van die hoek-in-ʼn-halfsirkel-stelling, as ʼn koord 90° by ʼn punt op die sirkel onderspan, moet daardie koord ʼn middellyn wees. Dus is MN ʼn middellyn ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="226.93" y2="96.71" stroke="#ea580c" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><line x1="226.93" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 126.42,201.47 L 132.85,193.81 L 138.58,202" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="53.07" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="33.07" y="100.71" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="226.93" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="234.93" y="96.71" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="132.16" cy="209.66" r="2.5" fill="#0f1f3d"/><text x="126.16" y="197.66" font-size="13" fill="#0f1f3d" font-weight="700">K</text><text x="133.29" y="183.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon is AB ʼn middellyn met AB = 17 cm. P is ʼn punt op die omtrek met AP = 8 cm. Bepaal die grootte van ∠APB, en bepaal dan die lengte van BP.', checkMode: 'auto', correctAnswer: '90,15', correctAnswers: ['90,15', '90°,15cm', '90°, 15 cm'], answer: '∠APB = 90°, BP = 15 cm', explanation: 'AB is ʼn middellyn, dus is ∠APB = 90° (hoek in ʼn halfsirkel).\nDriehoek APB is reghoekig by P, dus deur Pythagoras: BP² = AB² − AP² = 17² − 8² = 289 − 64 = 225.\nBP = √225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 199.55,65.57 L 202.97,74.97 L 212.36,71.55" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="214.94" y="52.15" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="197.96" y="85.71" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="119.47" y="85.07" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 8 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 17 cm</text><text x="240.51" y="85.6" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O is AB ʼn middellyn. C en D is punte op die omtrek aan dieselfde kant van AB, met ∠CAB = 22° en ∠DBA = 39°. Bepaal ∠ACB, ∠ADB, en ∠ABC.', checkMode: 'auto', correctAnswer: '90,90,68', correctAnswers: ['90,90,68', '90°,90°,68°', '90°, 90°, 68°'], answer: '∠ACB = 90°, ∠ADB = 90°, ∠ABC = 68°', explanation: 'AB is ʼn middellyn, dus is ∠ACB = 90° en ∠ADB = 90° (hoek in ʼn halfsirkel geld vir enige punt op die sirkel).\nIn driehoek ABC: ∠CAB = 22°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 22° = 68° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 132.93,37.07 L 140,44.14 L 147.07,37.07" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">P</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 205.14,71.08 L 207.85,79.67 L 216.43,76.96" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 63.57,76.96 L 72.15,79.67 L 74.86,71.08" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="60.38" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="58.28" y="58.38" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="73.72" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">22°</text><text x="206.28" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">39°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het sirkelterminologie en die sleutel sirkelstellings bemeester — loodlyn wat ʼn koord halveer, hoek by die middelpunt, hoeke in dieselfde segment, en die hoek in ʼn halfsirkel.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die hoek-by-middelpunt-stelling of die halfsirkel-stelling, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde van elke sirkelstelling weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Sirkelterminologie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Wat is die naam van die lynstuk wat enige twee punte op die omtrek van ʼn sirkel verbind?', checkMode: 'auto', correctAnswer: 'koord', correctAnswers: ['koord', 'ʼn koord', "'n koord", 'n koord'], answer: 'koord', explanation: 'ʼn Koord is ʼn lynstuk wat enige twee punte op die omtrek verbind.' },
        { difficulty: 'Easy', question: 'Wat is die spesiale naam wat gegee word aan die gebied tussen ʼn koord en die boog wat dit afsny, wanneer dit die groter van die twee sulke gebiede is?', checkMode: 'auto', correctAnswer: 'hoofsegment', correctAnswers: ['hoofsegment', 'die hoofsegment'], answer: 'hoofsegment', explanation: 'Die groter gebied tussen ʼn koord en sy boog word die hoofsegment genoem (die kleiner een is die klein segment).' },
        { difficulty: 'Medium', question: 'ʼn Raaklyn raak ʼn sirkel by punt T. Verduidelik die verband tussen die raaklyn en die radius OT, en gee die hoek tussen hulle.', checkMode: 'auto', correctAnswer: 'loodreg,90', correctAnswers: ['loodreg,90', 'loodreg, 90°', 'loodreg 90'], answer: 'loodreg, 90°', explanation: 'ʼn Raaklyn is altyd loodreg op die radius wat na die raakpunt getrek word, dus is die hoek tussen hulle 90°.' },
        { difficulty: 'Medium', question: 'Wat noem ons al die radiusse wat in dieselfde sirkel getrek word, in terme van hulle lengtes?', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'hulle is gelyk', 'almal gelyk'], answer: 'gelyk', explanation: 'Al die radiusse van dieselfde sirkel is ewe lank, aangesien elkeen die afstand van die middelpunt na die omtrek is.' },

        // Blok 2 — Loodlyn vanaf middelpunt halveer koord (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, word OM loodreg op koord AB getrek, waar AB = 14 cm en die radius OA = 25 cm. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'Aangesien OM ⊥ AB, halveer OM die koord: AM = 14 ÷ 2 = 7 cm.\nIn reghoekige driehoek OMA: OM² = OA² − AM² = 25² − 7² = 625 − 49 = 576.\nOM = √576 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="88.38" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><line x1="88.38" y1="193.72" x2="191.62" y2="193.72" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="193.72" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,184.72 L 131,184.72 L 131,193.72" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="88.38" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="70.38" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="191.62" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="199.62" y="199.72" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="193.72" r="2.5" fill="#0f1f3d"/><text x="146" y="185.72" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="91.08" y="147.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="219.72" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 14 cm</text><text x="154" y="160.86" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O en radius 29 cm, is OM loodreg op koord AB en OM = 20 cm. Bepaal die lengte van koord AB.', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42cm', '42 cm'], answer: '42 cm', explanation: 'In reghoekige driehoek OMA: AM² = OA² − OM² = 29² − 20² = 841 − 400 = 441.\nAM = √441 = 21 cm.\nAangesien OM die koord halveer, is AB = 2 × AM = 2 × 21 = 42 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="208.94" y2="177.85" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="177.85" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,168.85 L 131,168.85 L 131,177.85" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="53.06" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="216.94" y="183.85" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="146" y="169.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="85.24" y="136.67" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 29 cm</text><text x="140" y="203.85" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="152.93" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 20 cm</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon met middelpunt O en radius 37 cm, is koord AB = 70 cm. OM word vanaf die middelpunt loodreg op AB getrek. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'Aangesien OM ⊥ AB, halveer OM die koord: AM = 70 ÷ 2 = 35 cm.\nIn reghoekige driehoek OMA: OM² = OA² − AM² = 37² − 35² = 1369 − 1225 = 144.\nOM = √144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="197.85" y2="188.94" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,179.94 L 131,179.94 L 131,188.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="205.85" y="194.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="146" y="180.94" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="88.82" y="144.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 37 cm</text><text x="140" y="214.94" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 70 cm</text><text x="154" y="158.47" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O en radius 53 cm, is M die middelpunt van koord AB, met OM = 28 cm. Bepaal die lengte van AB, en gee dan die grootte van hoek OMA.', checkMode: 'auto', correctAnswer: '90,90', correctAnswers: ['90,90', '90cm,90°', '90 cm, 90°'], answer: 'AB = 90 cm, ∠OMA = 90°', explanation: 'In reghoekige driehoek OMA: AM² = OA² − OM² = 53² − 28² = 2809 − 784 = 2025.\nAM = √2025 = 45 cm.\nAB = 2 × AM = 2 × 45 = 90 cm.\nAangesien OM die loodlyn vanaf die middelpunt na die koord is, is ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="217.94" y2="165" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,156 L 131,156 L 131,165" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="44.06" y="171" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="225.94" y="171" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="165" r="2.5" fill="#0f1f3d"/><text x="146" y="157" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="83.03" y="128.64" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 53 cm</text><text x="140" y="191" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="146.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 28 cm</text></svg>' },

        // Blok 3 — Hoek by middelpunt = 2 × hoek by omtrek (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ∠AOB = 72° by die middelpunt, en ∠ACB by punt C op die omtrek (hoofboog, dieselfde kant as O). Bepaal ∠ACB.', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36°', '36 grade'], answer: '36°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠ACB = 72° ÷ 2 = 36° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">72°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon met middelpunt O, onderspan koord PQ ∠PRQ = 61° by punt R op die omtrek. Bepaal die grootte van ∠POQ by die middelpunt.', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°', '122 grade'], answer: '122°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠POQ = 2 × 61° = 122° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="160" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="60" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">61°</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ∠AOB = 134° by die middelpunt (gemeet aan die hoofboog-kant). Punt D lê op die omtrek op die hoofboog, aan dieselfde kant as O. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '67', correctAnswers: ['67', '67°', '67 grade'], answer: '67°', explanation: 'D is op die hoofboog, dieselfde kant as die gegewe 134°-hoek.\n∠ADB = 134° ÷ 2 = 67° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 131.4,42.29 A 15,15 0 0 0 148.6,42.29" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">134°</text><text x="140" y="60" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O, onderspan koord AB ʼn hoek van 110° by die middelpunt aan die hoofboog-kant. Punt E lê op die klein boog. Bepaal die reflekshoek AOB, en bepaal dan ∠AEB.', checkMode: 'auto', correctAnswer: '250,125', correctAnswers: ['250,125', '250°,125°', '250°, 125°'], answer: 'Reflekshoek AOB = 250°, ∠AEB = 125°', explanation: 'Reflekshoek AOB = 360° − 110° = 250°.\nE is op die klein boog, dus gebruik die reflekshoek: ∠AEB = 250° ÷ 2 = 125° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 117.45,128.21 A 24,24 0 0 0 162.55,128.21" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="55.43" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="140" y2="210" stroke="#16a34a" stroke-width="2.5"/><path d="M 127.71,201.4 A 15,15 0 0 1 152.29,201.4" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 109.93,130.94 A 32,32 0 1 1 170.07,130.94" fill="none" stroke="#dc2626" stroke-width="2" stroke-dasharray="4,3"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="134" y="230" font-size="13" fill="#0f1f3d" font-weight="700">E</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="160" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">110°</text><text x="140" y="180" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 4 — Hoeke in dieselfde segment / gelyke koorde (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon lê punte C en D op dieselfde boog relatief tot koord AB (dieselfde kant van AB). ∠ACB = 39°. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '39°', '39 grade'], answer: '39°', explanation: 'C en D lê op dieselfde segment relatief tot koord AB, dus is hoeke in dieselfde segment gelyk.\n∠ADB = ∠ACB = 39° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">39°</text><text x="123.12" y="62.91" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon is koord PQ = koord RS. Koord PQ onderspan ʼn hoek van 88° by die middelpunt. Bepaal die hoek wat koord RS by die middelpunt onderspan.', checkMode: 'auto', correctAnswer: '88', correctAnswers: ['88', '88°', '88 grade'], answer: '88°', explanation: 'Gelyke koorde onderspan gelyke hoeke by die middelpunt.\nRS onderspan dieselfde hoek as PQ: 88° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="217.94" y1="165" x2="124.37" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="100.58" y1="63.7" x2="94.85" y2="55.51" stroke="#ea580c" stroke-width="2"/><line x1="169.04" y1="182.28" x2="173.27" y2="191.35" stroke="#7c3aed" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="217.94" y2="165" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 121.21,113.16 A 20,20 0 0 1 140,100" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 165.98,135 A 30,30 0 0 1 134.79,149.54" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><text x="120.5" y="92.15" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">88°</text><text x="158.6" y="159.88" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="120" y="24" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="217.94" cy="165" r="2.5" fill="#0f1f3d"/><text x="227.94" y="167" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="130.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">S</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon is koord MN = koord XY in dieselfde sirkel. MN onderspan ʼn hoek van 44° by die omtrek. Bepaal die hoek wat XY by die omtrek onderspan.', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44', '44°', '44 grade'], answer: '44°', explanation: 'Gelyke koorde onderspan gelyke hoeke by die omtrek.\nXY onderspan dieselfde hoek as MN: 44° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="177.85" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="155.63" y2="208.63" stroke="#7c3aed" stroke-width="2.5"/><line x1="68.17" y1="132.67" x2="58.32" y2="134.4" stroke="#ea580c" stroke-width="2"/><line x1="186.89" y1="175.88" x2="193.31" y2="183.54" stroke="#7c3aed" stroke-width="2"/><line x1="71.06" y1="177.85" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 211.58,96.72 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">V</text><line x1="224.57" y1="150.78" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="88.38" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 100.28,55.41 A 15,15 0 0 1 94.12,60.13" fill="none" stroke="#7c3aed" stroke-width="2"/><circle cx="88.38" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="80.38" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="195.59" y="96.98" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">44°</text><text x="109.08" y="73.25" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><circle cx="71.06" cy="177.85" r="2.5" fill="#0f1f3d"/><text x="51.06" y="181.85" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">N</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="152.78" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">Y</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O lê punte A, B, C en D op die omtrek, met C en D op dieselfde boog relatief tot koord AB. ∠ACB = 5x − 4° en ∠ADB = 3x + 10°. Bepaal x, en bepaal dan die grootte van ∠ACB.', checkMode: 'auto', correctAnswer: '7,31', correctAnswers: ['7,31', '7,31°', 'x=7,31°'], answer: 'x = 7, ∠ACB = 31°', explanation: 'Hoeke in dieselfde segment is gelyk: 5x − 4° = 3x + 10°.\n2x = 14°.\nx = 7°.\n∠ACB = 5(7°) − 4° = 35° − 4° = 31° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="185" y2="42.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="109.22" y2="35.43" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 174.28,51.06 A 14,14 0 0 0 189.79,55.21" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 171.21,53.63 A 18,18 0 0 0 191.16,58.97" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 103.3,48.12 A 14,14 0 0 0 119.12,45.33" fill="none" stroke="#16a34a" stroke-width="2"/><path d="M 101.61,51.74 A 18,18 0 0 0 121.95,48.16" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="158.78" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="193" y="36.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="109.22" cy="35.43" r="2.5" fill="#0f1f3d"/><text x="103.22" y="23.43" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="176.72" y="72.97" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5x − 4°</text><text x="123.12" y="62.91" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3x + 10°</text></svg>' },

        // Blok 5 — Hoek in ʼn halfsirkel + omgekeerde (Easy/Easy/Medium/Hard)
        { difficulty: 'Easy', question: 'In die sirkel getoon is AB ʼn middellyn en P is ʼn punt op die omtrek. ∠PAB = 27°. Bepaal ∠APB, en bepaal dan ∠PBA.', checkMode: 'auto', correctAnswer: '90,63', correctAnswers: ['90,63', '90°,63°', '90°, 63°'], answer: '∠APB = 90°, ∠PBA = 63°', explanation: 'Aangesien AB ʼn middellyn is, is ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: 27° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 27° = 63° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 182.75,50.89 L 187.37,59.76 L 196.24,55.15" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="191.62" cy="46.28" r="2.5" fill="#0f1f3d"/><text x="197.62" y="36.28" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="183.8" y="71.07" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">27°</text></svg>' },
        { difficulty: 'Easy', question: 'In die sirkel getoon onderspan koord GH ʼn hoek van 90° by punt W op die omtrek. Wat kan jy oor koord GH aflei?', checkMode: 'auto', correctAnswer: 'middellyn', correctAnswers: ['middellyn', 'gh is ʼn middellyn', 'dit is ʼn middellyn'], answer: 'GH is ʼn middellyn van die sirkel', explanation: 'Volgens die omgekeerde van die hoek-in-ʼn-halfsirkel-stelling, as ʼn koord 90° by ʼn punt op die sirkel onderspan, moet daardie koord ʼn middellyn wees. Dus is GH ʼn middellyn ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="226.93" y2="96.71" stroke="#ea580c" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><line x1="226.93" y1="96.71" x2="132.16" y2="209.66" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 126.42,201.47 L 132.85,193.81 L 138.58,202" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="53.07" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="33.07" y="100.71" font-size="13" fill="#0f1f3d" font-weight="700">G</text><circle cx="226.93" cy="96.71" r="2.5" fill="#0f1f3d"/><text x="234.93" y="96.71" font-size="13" fill="#0f1f3d" font-weight="700">H</text><circle cx="132.16" cy="209.66" r="2.5" fill="#0f1f3d"/><text x="126.16" y="197.66" font-size="13" fill="#0f1f3d" font-weight="700">W</text><text x="133.29" y="183.68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">90°</text></svg>' },
        { difficulty: 'Medium', question: 'In die sirkel getoon is AB ʼn middellyn met AB = 29 cm. P is ʼn punt op die omtrek met AP = 20 cm. Bepaal die grootte van ∠APB, en bepaal dan die lengte van BP.', checkMode: 'auto', correctAnswer: '90,21', correctAnswers: ['90,21', '90°,21cm', '90°, 21 cm'], answer: '∠APB = 90°, BP = 21 cm', explanation: 'AB is ʼn middellyn, dus is ∠APB = 90° (hoek in ʼn halfsirkel).\nDriehoek APB is reghoekig by P, dus deur Pythagoras: BP² = AB² − AP² = 29² − 20² = 841 − 400 = 441.\nBP = √441 = 21 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 199.55,65.57 L 202.97,74.97 L 212.36,71.55" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="214.94" y="52.15" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="197.96" y="85.71" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="119.47" y="85.07" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 20 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 29 cm</text><text x="240.51" y="85.6" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In die sirkel getoon met middelpunt O is AB ʼn middellyn. C en D is punte op die omtrek aan dieselfde kant van AB, met ∠CAB = 33° en ∠DBA = 51°. Bepaal ∠ACB, ∠ADB, en ∠ABC.', checkMode: 'auto', correctAnswer: '90,90,57', correctAnswers: ['90,90,57', '90°,90°,57°', '90°, 90°, 57°'], answer: '∠ACB = 90°, ∠ADB = 90°, ∠ABC = 57°', explanation: 'AB is ʼn middellyn, dus is ∠ACB = 90° en ∠ADB = 90° (hoek in ʼn halfsirkel geld vir enige punt op die sirkel).\nIn driehoek ABC: ∠CAB = 33°, ∠ACB = 90°.\n∠ABC = 180° − 90° − 33° = 57° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 132.93,37.07 L 140,44.14 L 147.07,37.07" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="30" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">P</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="66.28" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 205.14,71.08 L 207.85,79.67 L 216.43,76.96" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 63.57,76.96 L 72.15,79.67 L 74.86,71.08" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="60.38" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="58.28" y="58.38" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="73.72" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">33°</text><text x="206.28" y="110.35" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">51°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het sirkelterminologie en die sleutel sirkelstellings bemeester — loodlyn wat ʼn koord halveer, hoek by die middelpunt, hoeke in dieselfde segment, en die hoek in ʼn halfsirkel.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae oor die hoek-by-middelpunt-stelling of die halfsirkel-stelling, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde van elke sirkelstelling weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer deur en probeer hierdie stel weer.' },
      ],
    },
  ],
}
