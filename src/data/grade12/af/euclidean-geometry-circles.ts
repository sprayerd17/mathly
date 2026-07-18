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
// rows: 'n reeks [stelling, rede]-pare, uitgestal as 'n HTML-tabel wat by die
// webwerf se ontwerpstelsel pas (gebruik binne `explanation`-stringe vir riderbewyse).
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
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TERMINOLOGY AND REVISION OF CIRCLE PROPERTIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circle-terminology',
      title: 'Terminologie en Hersiening van Sirkeleienskappe',
      icon: '⊙',
      explanation:
        `<p style="margin-bottom:16px;">Voordat ons die stellings bestudeer, stel ons eers die sleutelterminologie vas. ʼn ${or('koord')} is ʼn lynstuk wat twee punte op ʼn sirkel verbind. ʼn ${gr('raaklyn')} is ʼn lyn wat die sirkel by presies een punt raak en loodreg op die ${bl('radius')} by daardie punt is. ʼn Boog is ʼn gedeelte van die omtrek. ʼn Koordevierhoek het al vier hoekpunte op die sirkel. Die middelpunt is ewe ver van elke punt op die omtrek af. Ons hersien ook dat die ${re('hoek wat ʼn koord by die middelpunt onderspan')} dubbel die hoek is wat dieselfde koord by die omtrek onderspan — dit is die grondslag van die meeste Graad 12-sirkelstellings. Verwys na die video vir ʼn visuele oorsig van al die sleutelterme wat op ʼn sirkel aangedui word.</p>` +

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
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lynstuk vanaf die middelpunt na enige punt op die omtrek. Al die radiusse van ʼn sirkel is ewe lank.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Koord</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lynstuk wat enige twee punte op die omtrek verbind. ʼn Middellyn is die langste koord — dit gaan deur die middelpunt.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Raaklyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Lyn wat die sirkel by presies een punt raak. Dit is altyd loodreg op die radius by die raakpunt.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Hoek by die Middelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die hoek wat by die middelpunt O deur twee radiusse gevorm word. Dit is dubbel die hoek wat by die omtrek deur dieselfde koord gevorm word.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Boog</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Gedeelte van die omtrek. Die klein boog is die korter gedeelte; die hoofboog is die langer gedeelte tussen die twee eindpunte.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Koordevierhoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Vierhoek waarvan al vier hoekpunte op die omtrek van dieselfde sirkel lê.</p>` +
        `</div>` +

        `</div>` +

        // ── Foundation theorem ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Grondslagstelling (hersiening)</p>` +
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:8px;">Hoek by die Middelpunt = 2 × Hoek by die Omtrek</p>` +
        `<p style="color:#374151;margin-bottom:8px;">Wanneer dieselfde ${or('koord')} ʼn ${re('hoek by die middelpunt O')} en ʼn hoek by ʼn punt op die omtrek (aan dieselfde kant) onderspan, is die ${re('hoek by die middelpunt')} presies dubbel die hoek by die omtrek:</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin:0;">${re('∠AOB')} = 2 × ∠APB</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom dit saak maak</p>` +
        `<p style="margin:0;color:#1e3a8a;">Byna elke Graad 12-sirkelstelling bou op hierdie een verwantskap. Bemeester die terminologie en hierdie grondslag, en die res van die bewyse sal natuurlik volg.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek van 80° by die middelpunt. Watter hoek onderspan AB by ʼn punt P op die hoofboog?',
          answer: `∠APB = ${re('40°')}`,
          steps: [
            `Die ${re('hoek by die middelpunt')} is dubbel die hoek by die omtrek wanneer albei aan dieselfde kant van koord ${or('AB')} is.`,
            `Hoek by die omtrek = ${re('hoek by die middelpunt')} ÷ 2 = ${re('80°')} ÷ 2 = ${re('40°')}.`,
            `<strong>Antwoord:</strong> ${or('Koord')} AB onderspan ʼn hoek van ${re('40°')} by punt P op die hoofboog. ✓`,
          ],
        },
        {
          question: 'Sipho sê die raaklyn aan ʼn sirkel by punt P maak ʼn hoek van 45° met die radius OP. Is dit moontlik?',
          answer: `Nee — die hoek tussen ʼn ${gr('raaklyn')} en die ${bl('radius')} by die raakpunt is altyd presies 90°.`,
          steps: [
            `ʼn ${gr('Raaklyn')} aan ʼn sirkel word gedefinieer as ʼn lyn wat die sirkel by presies een punt raak en <strong>loodreg</strong> op die ${bl('radius')} by daardie punt is.`,
            `Loodreg beteken die hoek tussen hulle is presies <strong>90°</strong> — nie 45°, nie 89°, altyd presies 90°.`,
            `<strong>Antwoord:</strong> Nee, dit is nie moontlik nie. Die hoek tussen die ${gr('raaklyn')} en die ${bl('radius')} OP is altyd 90°, nooit 45° nie. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In ʼn sirkel met middelpunt O onderspan koord PQ ʼn hoek van 100° by die middelpunt. Bepaal die hoek wat PQ by ʼn punt T op die hoofboog onderspan.',
          answer: '50°',
          checkMode: 'auto',
          correctAnswer: '50',
          correctAnswers: ['50', '50°', '50 degrees'],
          explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\nHoek by omtrek = 100° ÷ 2 = 50°.',
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
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'ʼn Raaklyn is loodreg op die radius by die raakpunt — die hoek is altyd 90°.',
            },
            {
              label: 'b) Koord AB onderspan 64° by die middelpunt. Watter hoek onderspan dit by die omtrek (dieselfde kant)?',
              correctAnswer: '32',
              correctAnswers: ['32', '32°', '32 degrees'],
              explanation: 'Hoek by omtrek = hoek by middelpunt ÷ 2 = 64° ÷ 2 = 32°.',
            },
            {
              label: 'c) Die hoek by die omtrek wat deur ʼn koord onderspan word, is 27°. Wat is die hoek by die middelpunt?',
              correctAnswer: '54',
              correctAnswers: ['54', '54°', '54 degrees'],
              explanation: 'Hoek by middelpunt = 2 × hoek by omtrek = 2 × 27° = 54°.',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek van 150° by die middelpunt (aan die kant van die hoofboog). Punt P lê op die klein boog en punt Q lê op die hoofboog.\n\na) Bepaal hoek APB (P op klein boog).\nb) Bepaal hoek AQB (Q op hoofboog).\nc) Wat merk jy op oor die som van hoeke APB en AQB?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Hoek APB (P op klein boog)',
              correctAnswer: '105',
              correctAnswers: ['105', '105°', '105 degrees'],
              explanation: 'P is op die klein boog — die teenoorgestelde kant van die 150°-hoek.\nReflekshoek AOB = 360° − 150° = 210°.\nHoek APB = 210° ÷ 2 = 105°.',
            },
            {
              label: 'b) Hoek AQB (Q op hoofboog)',
              correctAnswer: '75',
              correctAnswers: ['75', '75°', '75 degrees'],
              explanation: 'Q is op die hoofboog — dieselfde kant as die 150°-hoek.\nHoek AQB = 150° ÷ 2 = 75°.',
            },
            {
              label: 'c) Som van hoeke APB en AQB',
              correctAnswer: '180',
              correctAnswers: ['180', '180°', '180 degrees'],
              explanation: '105° + 75° = 180°.\nHoeke wat deur dieselfde koord aan teenoorgestelde kante onderspan word, tel altyd op tot 180° — ʼn sleuteleienskap van koordevierhoeke.',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat \'n visuele oorsig gee van al die sleutel sirkelterme gemerk op \'n sirkel — radius, koord, raaklyn, boog, koordevierhoek — en wys dat die hoek by die middelpunt gelyk is aan twee keer die hoek by die omtrek" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — THEOREMS: CHORD, CENTRE AND PERPENDICULARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'chord-centre-perpendicularity',
      title: 'Stellings — Koord, Middelpunt en Loodregtheid',
      icon: '⊥',
      explanation:
        `<p style="margin-bottom:16px;">Twee sleutelstellings verbind ${or('koorde')} aan die middelpunt: (1) Die loodlyn vanaf die middelpunt na ʼn ${or('koord')} halveer die ${or('koord')} — met ander woorde as ${or('OM')} ⊥ AB, dan is AM = MB. (2) Die lyn vanaf die middelpunt na die middelpunt van ʼn ${or('koord')} is loodreg op die ${or('koord')} — die omgekeerde van (1). Hierdie stellings word gebruik om ontbrekende lengtes te bepaal en om te bewys dat ʼn lyn deur die middelpunt gaan. Verwys na die video vir ʼn diagram wat ʼn ${or('koord')} met die ${or('loodlyn')} vanaf die middelpunt en die gelyke ${gr('helftes')} aandui.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('loodlyn vanaf die middelpunt')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('half-koord')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee stellings</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Loodlyn vanaf die Middelpunt Halveer die Koord</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ${or('OM')} ⊥ koord AB, dan is ${gr('AM = MB')}. Die ${or('loodlyn')} vanaf die middelpunt sny die koord presies in die helfte en skep twee gelyke ${gr('half-koorde')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Lyn vanaf die Middelpunt na die Middelpunt van die Koord is Loodreg (Omgekeerde)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As M die middelpunt van koord AB is (dus ${gr('AM = MB')}), dan is OM ⊥ AB. Gebruik dit om te bewys dat ʼn gegewe lyn deur die middelpunt gaan.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Pythagoras connection ─────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Afstande bereken</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;color:#374151;">Wanneer ${or('OM')} ⊥ koord AB, is driehoek OMA reghoekig by M. Pas die Stelling van Pythagoras toe:</p>` +
        `<p style="text-align:center;font-size:1.1em;font-weight:700;color:#374151;margin-bottom:8px;">${bl('OA')}² = ${or('OM')}² + ${gr('AM')}²</p>` +
        `<p style="margin:0;color:#374151;font-size:14px;">waar ${bl('OA')} = ${bl('radius')}, ${or('OM')} = ${or('loodregte afstand vanaf die middelpunt na die koord')}, ${gr('AM')} = ${gr('die helfte van die koordlengte')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie vir berekeningsvrae</p>` +
        `<p style="margin:0;color:#1e3a8a;">Halveer altyd eers die koord (${gr('AM = AB ÷ 2')}), identifiseer dan watter van die drie sye (${bl('radius')}, ${or('OM')}, of ${gr('AM')}) onbekend is. Herrangskik die Pythagoras-formule en los op.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In ʼn sirkel met middelpunt O en radius 13 cm is koord AB 10 cm lank. Bepaal die loodregte afstand vanaf O na AB.',
          answer: `${or('OM')} = ${or('12 cm')}`,
          steps: [
            `${or('OM')} ⊥ AB (gegee), dus halveer ${or('OM')} die koord. Daarom ${gr('AM = 10 ÷ 2 = 5 cm')}.`,
            `In reghoekige driehoek OMA: ${bl('OA')}² = ${or('OM')}² + ${gr('AM')}² (Pythagoras).`,
            `${or('OM')}² = ${bl('OA')}² − ${gr('AM')}² = ${bl('13')}² − ${gr('5')}² = ${bl('169')} − ${gr('25')} = 144.`,
            `${or('OM')} = √144 = <strong>${or('12 cm')}</strong>. ✓`,
          ],
        },
        {
          question: 'Lerato het ʼn koord van lengte 24 cm in ʼn sirkel met radius 15 cm. Die loodlyn vanaf die middelpunt ontmoet die koord by M. Bepaal OM.',
          answer: `${or('OM')} = ${or('9 cm')}`,
          steps: [
            `${gr('AM = 24 ÷ 2 = 12 cm')} (loodlyn vanaf die middelpunt halveer die koord).`,
            `${or('OM')}² = ${bl('OA')}² − ${gr('AM')}² = ${bl('15')}² − ${gr('12')}² = ${bl('225')} − ${gr('144')} = 81.`,
            `${or('OM')} = √81 = <strong>${or('9 cm')}</strong>. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'In ʼn sirkel met middelpunt O en radius 10 cm is koord AB 12 cm lank. Bepaal die loodregte afstand vanaf O na AB.',
          answer: '8 cm',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8cm', '8 cm'],
          explanation: 'AM = 12 ÷ 2 = 6 cm.\nOM² = 10² − 6² = 100 − 36 = 64.\nOM = √64 = 8 cm ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Los elk van die volgende op.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Sirkel het radius 17 cm en koord PQ = 16 cm. Bepaal die loodregte afstand vanaf die middelpunt na PQ.',
              correctAnswer: '15',
              correctAnswers: ['15', '15cm', '15 cm'],
              explanation: 'PM = 16 ÷ 2 = 8 cm.\nOM² = 17² − 8² = 289 − 64 = 225.\nOM = √225 = 15 cm ✓',
            },
            {
              label: 'b) Die loodregte afstand vanaf die middelpunt na ʼn koord is 5 cm en die radius is 13 cm. Bepaal die lengte van die koord.',
              correctAnswer: '24',
              correctAnswers: ['24', '24cm', '24 cm'],
              explanation: 'AM² = OA² − OM² = 13² − 5² = 169 − 25 = 144.\nAM = 12 cm.\nKoordlengte = 2 × AM = 24 cm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Twee ewewydige koorde AB en CD lê in ʼn sirkel met middelpunt O en radius 26 cm. Die loodregte afstand vanaf O na AB is 10 cm en die loodregte afstand vanaf O na CD is 24 cm.\n\na) Bepaal die lengte van koord AB.\nb) Bepaal die lengte van koord CD.\nc) As AB en CD aan dieselfde kant van die middelpunt is, bepaal die afstand tussen die twee koorde.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Lengte van koord AB',
              correctAnswer: '48',
              correctAnswers: ['48', '48cm', '48 cm'],
              explanation: 'AM² = OA² − OM² = 26² − 10² = 676 − 100 = 576.\nAM = 24 cm.\nAB = 2 × 24 = 48 cm ✓',
            },
            {
              label: 'b) Lengte van koord CD',
              correctAnswer: '20',
              correctAnswers: ['20', '20cm', '20 cm'],
              explanation: 'CM² = OC² − OM² = 26² − 24² = 676 − 576 = 100.\nCM = 10 cm.\nCD = 2 × 10 = 20 cm ✓',
            },
            {
              label: 'c) Afstand tussen die twee koorde (dieselfde kant van die middelpunt)',
              correctAnswer: '14',
              correctAnswers: ['14', '14cm', '14 cm'],
              explanation: 'Die koorde is 10 cm en 24 cm vanaf die middelpunt, aan dieselfde kant.\nAfstand tussen hulle = 24 − 10 = 14 cm ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn koord met die loodlyn vanaf die middelpunt wat dit halveer, wys — met die twee gelyke halfkoorde en die reghoekige driehoek wat vir Pythagoras-berekeninge gebruik word, gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — THEOREMS: ANGLES IN A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'angles-in-circle',
      title: 'Stellings — Hoeke in ʼn Sirkel',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Drie stellings handel oor hoeke: (1) Die ${re('hoek wat ʼn koord by die middelpunt onderspan')} is dubbel die ${bl('hoek wat dieselfde koord by die omtrek onderspan')} (aan dieselfde kant). (2) ${gr('Hoeke in dieselfde segment')} (onderspan deur dieselfde koord aan dieselfde kant) is ${gr('gelyk')}. (3) Die hoek in ʼn halfsirkel is altyd ${bl('90°')} — enige hoek wat in ʼn halfsirkel ingeskryf is (onderspan deur die middellyn) is ʼn regte hoek. Verwys na die video vir diagramme wat elke stelling met die relevante hoeke uitgelig toon.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hoek by die middelpunt')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoek by die omtrek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelyke hoeke in dieselfde segment')}</span>` +
        `</div>` +

        // ── Three theorems ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie stellings</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Hoek by die Middelpunt = 2 × Hoek by die Omtrek</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Die ${re('hoek by O')} is dubbel die ${bl('hoek by P')} wanneer albei deur dieselfde koord aan dieselfde kant onderspan word. Wanneer P op die teenoorgestelde (klein) boog is, gebruik die <strong>reflekshoek</strong> by die middelpunt.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Hoeke in Dieselfde Segment is Gelyk</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Enige twee ${gr('hoeke')} by die omtrek wat deur dieselfde koord aan dieselfde kant onderspan word, is ${gr('gelyk')}. Dit volg uit Stelling 1 — albei is gelyk aan die helfte van die hoek by die middelpunt.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoek in ʼn Halfsirkel = 90°</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As AB ʼn middellyn is, is die ${re('hoek by die middelpunt')} 180° (ʼn reguit lyn), dus is enige ${bl('hoek APB')} by die omtrek = 180° ÷ 2 = ${bl('90°')} — ongeag waar P op die sirkel lê.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Reflex angle note ─────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die reflekshoek gebruik</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ʼn punt op die <strong>klein boog</strong> (die kort boog) lê, is dit aan die teenoorgestelde kant van die koord as die gewone middelpuntshoek. In hierdie geval, gebruik die <strong>reflekshoek</strong> by O (360° minus die gewone hoek), en halveer dit dan om die ${bl('hoek by die omtrek')} te bepaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Koord AB onderspan ʼn hoek van 110° by die middelpunt O. Bepaal die hoek APB wat by punt P op die klein boog onderspan word.',
          answer: `∠APB = ${bl('125°')}`,
          steps: [
            `P is op die <strong>klein boog</strong> — die teenoorgestelde kant van koord AB as die 110°-hoek.`,
            `Gebruik die ${re('reflekshoek')} by O: Reflekshoek AOB = 360° − ${re('110°')} = ${re('250°')}.`,
            `${bl('Hoek by die omtrek')} = ${re('reflekshoek AOB')} ÷ 2 = ${re('250°')} ÷ 2 = ${bl('125°')}.`,
            `<strong>Antwoord:</strong> ∠APB = ${bl('125°')}. ✓`,
          ],
        },
        {
          question: 'Punte A, B, C en D lê almal op ʼn sirkel. ∠ACB = 35°. Koord AB onderspan ook hoek ADB by punt D, waar D aan dieselfde kant van AB as C is. Bepaal ∠ADB.',
          answer: `∠ADB = ${gr('35°')}`,
          steps: [
            `Beide C en D lê op <strong>dieselfde boog</strong> (dieselfde kant van koord AB).`,
            `Volgens Stelling 2: ${gr('hoeke in dieselfde segment is gelyk')}.`,
            `∠ADB = ∠ACB = ${gr('35°')}.`,
            `<strong>Antwoord:</strong> ∠ADB = ${gr('35°')}. ✓`,
          ],
        },
        {
          question: 'AB is ʼn middellyn van ʼn sirkel en P is enige punt op die omtrek (nie by A of B nie). Bepaal ∠APB.',
          answer: `∠APB = ${bl('90°')}`,
          steps: [
            `AB is ʼn middellyn, dus is die ${re('hoek wat by die middelpunt onderspan word')} ${re('180°')} (ʼn reguit lyn deur die middelpunt).`,
            `Volgens Stelling 1: ${bl('hoek by die omtrek')} = ${re('180°')} ÷ 2 = ${bl('90°')}.`,
            `<strong>Antwoord:</strong> ∠APB = ${bl('90°')} vir enige posisie van P op die sirkel. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'AB is ʼn middellyn van ʼn sirkel en P is ʼn punt op die sirkel. ∠PAB = 38°. Bepaal ∠PBA.',
          answer: '52°',
          checkMode: 'auto',
          correctAnswer: '52',
          correctAnswers: ['52', '52°', '52 degrees'],
          explanation: 'Aangesien AB ʼn middellyn is, ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: ∠PAB + ∠PBA + ∠APB = 180°.\n38° + ∠PBA + 90° = 180°.\n∠PBA = 180° − 90° − 38° = 52° ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Bepaal die onbekende hoek in elke geval.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Koord PQ onderspan 84° by die middelpunt. Bepaal die hoek by die omtrek op die hoofboog.',
              correctAnswer: '42',
              correctAnswers: ['42', '42°', '42 degrees'],
              explanation: 'Hoek by omtrek = 84° ÷ 2 = 42° ✓',
            },
            {
              label: 'b) ∠ADB = 47° en C lê op dieselfde boog as D. Bepaal ∠ACB.',
              correctAnswer: '47',
              correctAnswers: ['47', '47°', '47 degrees'],
              explanation: 'Hoeke in dieselfde segment is gelyk: ∠ACB = ∠ADB = 47° ✓',
            },
            {
              label: 'c) Koord AB onderspan 70° by die middelpunt. Bepaal die hoek by punt P op die klein boog.',
              correctAnswer: '145',
              correctAnswers: ['145', '145°', '145 degrees'],
              explanation: 'P is op die klein boog — gebruik die reflekshoek.\nReflekshoek AOB = 360° − 70° = 290°.\nHoek by P = 290° ÷ 2 = 145° ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'O is die middelpunt van die sirkel. Punte A, B, C en D lê op die sirkel. AB is ʼn middellyn. ∠CAB = 25° en ∠DBA = 40°.\n\na) Bepaal ∠ACB.\nb) Bepaal ∠ADB.\nc) Bepaal ∠CBD.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bepaal ∠ACB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'AB is ʼn middellyn, dus die hoek in ʼn halfsirkel: ∠ACB = 90° ✓',
            },
            {
              label: 'b) Bepaal ∠ADB',
              correctAnswer: '90',
              correctAnswers: ['90', '90°', '90 degrees'],
              explanation: 'AB is ʼn middellyn, dus ∠ADB = 90° ook — die hoek in ʼn halfsirkel is altyd 90° ongeag waar D op die sirkel is ✓',
            },
            {
              label: 'c) Bepaal ∠CBD',
              correctAnswer: '25',
              correctAnswers: ['25', '25°', '25 degrees'],
              explanation: 'In △ABC: ∠ACB = 90° (hoek in halfsirkel), ∠CAB = 25°.\n∠ABC = 180° − 90° − 25° = 65°.\n∠CBD = ∠ABC − ∠ABD = 65° − 40° = 25° ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat diagramme vir al drie hoekstellings wys — hoek by die middelpunt is twee keer die hoek by die omtrek, gelyke hoeke in dieselfde segment, en hoek in ʼn halfsirkel — met elke relevante hoek in sy kleur uitgelig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — THEOREMS: CYCLIC QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cyclic-quadrilaterals',
      title: 'Stellings — Koordevierhoeke',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Koordevierhoek het al vier hoekpunte op die sirkel. Twee sleutelstellings is van toepassing: (1) ${bl('Teenoorstaande hoeke')} van ʼn koordevierhoek is supplementêr — hulle tel op tot ${bl('180°')}. (2) Die ${gr('buitehoek')} van ʼn koordevierhoek is gelyk aan die ${or('teenoorstaande binnehoek')}. Hierdie stellings is omgekeerdes van mekaar en word gebruik om ontbrekende hoeke te bepaal en om te bewys dat vier punte konsiklies is (op ʼn gemeenskaplike sirkel lê). Verwys na die video vir ʼn gemerkte koordevierhoek met teenoorstaande hoekpare uitgelig.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('teenoorstaande hoekpaar 1')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('teenoorstaande hoekpaar 2')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('buitehoek')}</span>` +
        `</div>` +

        // ── Two theorems ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee stellings</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Teenoorstaande Hoeke is Supplementêr</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">In koordevierhoek ABCD is ${bl('∠A + ∠C = 180°')} en ${or('∠B + ∠D = 180°')}. Elke paar ${bl('teenoorstaande hoeke')} tel op tot 180°. Gebruik dit om ʼn ontbrekende hoek te bepaal of om te bewys dat vier punte konsiklies is.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Buitehoek = Teenoorstaande Binnehoek</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Die ${gr('buitehoek')} wat gevorm word deur een sy van ʼn koordevierhoek te verleng, is gelyk aan die ${or('teenoorstaande binnehoek')}. Dit is ʼn direkte gevolg van Stelling 1 en die som van hoeke op ʼn reguit lyn.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Bewys dat punte konsiklies is</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy kan wys dat teenoorstaande hoeke optel tot 180° (of dat ʼn buitehoek gelyk is aan die teenoorstaande binnehoek), kan jy aflei dat die vier hoekpunte op ʼn gemeenskaplike sirkel lê — hulle is konsiklies.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'In koordevierhoek ABCD is ∠A = 85° en ∠C = x. Bepaal x.',
          answer: `x = ${bl('95°')}`,
          steps: [
            `${bl('Teenoorstaande hoeke')} van ʼn koordevierhoek is supplementêr: ${bl('∠A + ∠C = 180°')}.`,
            `${bl('85°')} + x = 180°.`,
            `x = 180° − 85° = ${bl('95°')}.`,
            `<strong>Antwoord:</strong> x = ${bl('95°')}. ✓`,
          ],
        },
        {
          question: 'Sipho het koordevierhoek PQRS met ∠QRS = 112°. Bepaal die buitehoek by P (die hoek gevorm deur sy QP verby P te verleng).',
          answer: `${gr('Buitehoek by P')} = ${gr('112°')}`,
          steps: [
            `Die ${gr('buitehoek')} by P is gelyk aan die ${or('teenoorstaande binnehoek')}, naamlik ${or('∠QRS')}.`,
            `${or('∠QRS')} = ${or('112°')}.`,
            `Daarom is die ${gr('buitehoek by P')} = ${gr('112°')}.`,
            `<strong>Antwoord:</strong> ${gr('Buitehoek by P')} = ${gr('112°')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn gemerkte koordevierhoek ABCD wys met teenoorstaande hoekpare in blou en oranje uitgelig, en ʼn buitehoek in groen uitgelig, wat albei stellings demonstreer" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — THEOREMS: TANGENTS TO A CIRCLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tangents-to-circle',
      title: 'Stellings — Raaklyne aan ʼn Sirkel',
      icon: '↗',
      explanation:
        `<p style="margin-bottom:16px;">Drie sleutel-raaklynstellings: (1) Die ${gr('raaklyn')} aan ʼn sirkel is loodreg op die ${bl('radius')} by die raakpunt — die hoek tussen hulle is presies 90°. (2) Raaklyne wat vanuit ʼn eksterne punt aan ʼn sirkel getrek word, is ewe lank — die twee ${gr('raaklynstukke')} vanaf een eksterne punt is kongruent. (3) Die ${or('raaklyn-koordhoek')} (die hoek tussen ʼn ${gr('raaklyn')} en ʼn koord by die raakpunt) is gelyk aan die ingeskrewe hoek aan die teenoorgestelde kant van die koord — dit staan bekend as die raaklyn-koordstelling (of stelling van die oorstaande segment). Verwys na die video vir ʼn diagram wat die raaklyn, die radius by die raakpunt, en die raaklyn-koordhoek aandui.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('raaklyn')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius by die raakpunt')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('raaklyn-koordhoek')}</span>` +
        `</div>` +

        // ── Three theorems ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie stellings</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Raaklyn ⊥ Radius by die Raakpunt</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Die ${gr('raaklyn')} by enige punt op die sirkel is loodreg op die ${bl('radius')} wat na daardie punt getrek is. Die hoek tussen die ${gr('raaklyn')} en die ${bl('radius')} is altyd presies 90°.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Raaklynstukke vanaf ʼn Eksterne Punt is Ewe Lank</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">As ${gr('PA')} en ${gr('PB')} ${gr('raaklyne')} vanaf eksterne punt P aan ʼn sirkel is, dan is ${gr('PA = PB')}. Gebruik dit om ontbrekende lengtes te bepaal wanneer twee raaklynstukke dieselfde eksterne punt deel.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Raaklyn-koordstelling (Stelling van die Oorstaande Segment)</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Die ${or('hoek tussen ʼn raaklyn en ʼn koord')} by die raakpunt is gelyk aan die ${or('ingeskrewe hoek in die oorstaande segment')} (die segment aan die teenoorgestelde kant van die koord). In simbole: ${or('raaklyn-koordhoek')} = ingeskrewe hoek in die oorstaande segment.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Die oorstaande segment identifiseer</p>` +
        `<p style="margin:0;color:#78350f;">Die oorstaande segment is die gedeelte van die sirkel aan die <strong>teenoorgestelde kant</strong> van die koord as die raaklyn-koordhoek. Teken die koord, identifiseer na watter kant die ${or('hoek')} oopmaak, en kyk dan na die segment aan die <strong>ander</strong> kant — enige ingeskrewe hoek daar is gelyk aan jou ${or('raaklyn-koordhoek')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek. As PA = 7 cm, bepaal PB.',
          answer: `${gr('PB')} = ${gr('7 cm')}`,
          steps: [
            `${gr('Raaklynstukke')} vanaf ʼn eksterne punt is ewe lank.`,
            `${gr('PB = PA = 7 cm')}.`,
            `<strong>Antwoord:</strong> ${gr('PB')} = ${gr('7 cm')}. ✓`,
          ],
        },
        {
          question: 'ʼn Raaklyn by punt T maak ʼn hoek van 65° met koord TC. Bepaal die ingeskrewe hoek in die oorstaande segment (∠TBC, waar B in die oorstaande segment is).',
          answer: `∠TBC = ${or('65°')}`,
          steps: [
            `Die ${or('raaklyn-koordhoek')} by T tussen die raaklyn en koord TC is ${or('65°')}.`,
            `Volgens die raaklyn-koordstelling (stelling van die oorstaande segment) is die ingeskrewe hoek in die oorstaande segment gelyk aan die ${or('raaklyn-koordhoek')}.`,
            `∠TBC = ${or('65°')}.`,
            `<strong>Antwoord:</strong> ∠TBC = ${or('65°')}. ✓`,
          ],
        },
        {
          question: 'Lerato het ʼn raaklyn by punt A wat ʼn hoek van x met koord AB maak. Sy sê die hoek in die oorstaande segment moet ook x wees. Is sy korrek?',
          answer: 'Ja — dit is presies die raaklyn-koordstelling.',
          steps: [
            `Die ${or('raaklyn-koordhoek')} by A tussen die raaklyn en koord AB is x.`,
            `Volgens die raaklyn-koordstelling is die ingeskrewe hoek in die oorstaande segment (die segment aan die teenoorgestelde kant van koord AB as die ${or('raaklyn-koordhoek')}) gelyk aan x.`,
            `Ja — Lerato is korrek. Dit is presies wat die raaklyn-koordstelling sê: die ${or('raaklyn-koordhoek')} is gelyk aan die ingeskrewe hoek in die oorstaande segment. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat ʼn raaklyn aan ʼn sirkel wys — met die raaklyn in groen, die radius by die raakpunt in blou, gelyke raaklynsegmente vanaf ʼn eksterne punt, en die raaklyn-koord hoek in oranje met die ooreenstemmende alternerende segmenthoek, gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — COMBINED RIDERS: CIRCLES AND SIMILARITY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'combined-riders-circles-similarity',
      title: 'Gekombineerde Riders — Sirkels en Gelykvormigheid',
      icon: '∼',
      explanation:
        `<p style="margin-bottom:16px;">Die moeilikste riders in die Graad 12 Vraestel 2-eksamen toets byna nooit net een sirkelstelling op sy eie nie. In plaas daarvan skakel hulle ʼn ${re('sirkelstelling')} — wat vir jou ʼn hoek verniet gee — saam met ${gr('gelykhoekige (AA) gelykvormigheid')} om te bewys dat twee driehoeke gelykvormig is, en gebruik dan die gevolglike ${or('verhouding')} (soms met die Stelling van Pythagoras aan die einde) om by die vereiste resultaat uit te kom. Dit is presies die Graad 11-vaardighede (eweredigheid, gelykvormigheid, en Pythagoras met behulp van gelykvormige driehoeke) gekombineer met alles wat jy nou van sirkels weet.</p>` +
        `<p style="margin-bottom:16px;">Hierdie afdeling leer nie enige individuele stelling van voor af nie — elke stelling wat hieronder gebruik word, is vroeër in hierdie onderwerp (sirkels) of in Graad 11 (gelykvormigheid) gedek. In plaas daarvan wys dit jou presies hoe die stukke inmekaar pas, en gee jou ʼn stewige bank gekombineerde riders om dieselfde meerstap-redenering te oefen wat die eksamen vereis.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('hoek vanaf ʼn sirkelstelling')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gedeelde / gemeenskaplike hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelykhoekige (AA) driehoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gevolglike verhouding')}</span>` +
        `</div>` +

        // ── Strategy steps ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die gekombineerde strategie — vier stappe</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skryf neer wat <strong>gegee</strong> is en wat jy <strong>vereis word om te bewys</strong> (VOB). As die VOB ʼn gekwadreerde lengte is (soos ${or('x² = y·z')}) of ʼn produk van twee lengtes (soos ${or('AB·CD = EF·GH')}), is dit ʼn sterk teken dat gelykvormige driehoeke — nie net ʼn sirkelstelling nie — nodig gaan wees.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Deursoek die diagram vir ʼn ${re('sirkelstelling')} wat vir jou ʼn hoekverhouding verniet gee — ʼn raaklyn-koordhoek, ʼn hoek in ʼn halfsirkel, hoeke in dieselfde segment, of die teenoorstaande hoeke van ʼn koordevierhoek.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Kombineer daardie ${re('sirkelstelling-hoek')} met ʼn ${bl('gedeelde of gemeenskaplike hoek')} (of ʼn tweede sirkelstelling-hoek) tussen twee driehoeke. Twee pare passende hoeke is genoeg om te bewys dat die driehoeke ${gr('gelykhoekig, dus gelykvormig (AA), is')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Skryf die ${or('verhouding')} vanaf die gelykvormige driehoeke neer, deur ooreenstemmende sye in die korrekte volgorde te pas (die volgorde waarin jy die gelykvormigheid gestel het). Kruisvermenigvuldig, vervang die gegewe lengtes, en los op — pas ook die Stelling van Pythagoras toe as die VOB dit vereis.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die kombinasie raaksien</p>` +
        `<p style="margin:0;color:#1e3a8a;">Let op vir: twee driehoeke wat ʼn hoekpunt of ʼn hoek deel; ʼn koord wat ʼn ingeskrewe hoek by twee verskillende punte op die sirkel vorm; ʼn raaklyn-koordhoek; ʼn middellyn (wat altyd ʼn hoek van 90° aandui); of ʼn VOB geskryf as ${or('AB² = ...')} of ${or('AB × CD = EF × GH')} — dit beteken byna altyd "bewys eers dat twee driehoeke gelykvormig is, en kruisvermenigvuldig dan".</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'PT is ʼn raaklyn aan ʼn sirkel by T. PAB is ʼn snylyn vanaf die eksterne punt P, wat die sirkel by A (nader aan P) en B (verder van P) sny. PA = 4 cm en AB = 5 cm. Bewys dat PT² = PA · PB, en bepaal dus die lengte van PT.',
          answer: `PT = ${or('6 cm')}`,
          steps: [
            `<svg viewBox="0 0 280 240" width="280" height="240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="30" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="30" x2="40" y2="30" stroke="#16a34a" stroke-width="2.5"/><line x1="40" y1="30" x2="206.9" y2="180.21" stroke="#ea580c" stroke-width="2"/><path d="M 140,39 L 131,39 L 131,30" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="start">O</text><circle cx="140" cy="30" r="3" fill="#0f1f3d"/><text x="136" y="20" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">T</text><circle cx="40" cy="30" r="3" fill="#0f1f3d"/><text x="34" y="46" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">P</text><circle cx="73.1" cy="59.79" r="3" fill="#0f1f3d"/><text x="57.1" y="67.79" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="206.9" cy="180.21" r="3" fill="#0f1f3d"/><text x="216.9" y="188.21" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><text x="50" y="105" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">PA = 4 cm</text><text x="160" y="145" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">AB = 5 cm</text></svg>`,
            `<strong>Gegee:</strong> PT is ʼn raaklyn by T; PAB is ʼn snylyn met PA = 4 cm en AB = 5 cm (dus PB = PA + AB = 9 cm). <strong>Vereis om te bewys:</strong> PT² = PA · PB. Konstruksie: trek TA en TB om ${bl('△PTA')} en ${bl('△PBT')} te vorm.`,
            proofTable([
              ['∠P is gemeenskaplik aan △PTA en △PBT', 'Gemeenskaplike hoek (dieselfde hoekpunt P in albei driehoeke)'],
              [`${re('∠PTA = ∠PBT')}`, 'Raaklyn-koordhoek is gelyk aan die ingeskrewe hoek in die oorstaande segment (∠PBT = ∠TBA, die hoek wat koord TA by B onderspan)'],
              [`${gr('∴ △PTA ||| △PBT')}`, 'Twee pare hoeke gelyk (AA)'],
              [`${or('PT/PB = PA/PT')}`, 'Ooreenstemmende sye van gelykvormige driehoeke is eweredig'],
              [`${or('∴ PT² = PA · PB')}`, 'Kruisvermenigvuldig'],
              ['PT² = 4 × 9 = 36', 'Vervang PA = 4 cm en PB = 9 cm'],
              ['∴ PT = 6 cm', 'Trek die vierkantswortel'],
            ]),
            `<strong>Antwoord:</strong> PT = ${or('6 cm')}. ✓`,
          ],
        },
        {
          question: 'ABCD is ʼn koordevierhoek. Diagonale AC en BD sny mekaar by E. AE = 6 cm, ED = 4 cm en BE = 3 cm. Bewys dat AE · EC = BE · ED, en bepaal dus die lengte van EC.',
          answer: `EC = ${or('2 cm')}`,
          steps: [
            `<svg viewBox="0 0 280 240" width="280" height="240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="75" x2="224.57" y2="150.78" stroke="#ea580c" stroke-width="2"/><line x1="178.04" y1="38.43" x2="55.43" y2="150.78" stroke="#2563eb" stroke-width="2"/><line x1="62.06" y1="75" x2="178.04" y2="38.43" stroke="#0f1f3d" stroke-width="1.6"/><line x1="178.04" y1="38.43" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="1.6"/><line x1="224.57" y1="150.78" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55.43" y1="150.78" x2="62.06" y2="75" stroke="#0f1f3d" stroke-width="1.6"/><circle cx="62.06" cy="75" r="3" fill="#0f1f3d"/><text x="48.06" y="77" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="178.04" cy="38.43" r="3" fill="#0f1f3d"/><text x="180.04" y="28.43" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="224.57" cy="150.78" r="3" fill="#0f1f3d"/><text x="238.57" y="154.78" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="55.43" cy="150.78" r="3" fill="#0f1f3d"/><text x="41.43" y="154.78" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="112.47" cy="98.51" r="2.2" fill="#16a34a"/><text x="116.47" y="90.51" font-size="12" fill="#16a34a" font-weight="700" text-anchor="start">E</text></svg>`,
            `<strong>Gegee:</strong> ABCD is ʼn koordevierhoek met diagonale AC en BD wat mekaar by E sny; AE = 6 cm, ED = 4 cm, BE = 3 cm. <strong>Vereis om te bewys:</strong> AE · EC = BE · ED.`,
            proofTable([
              [`${bl('∠AED = ∠BEC')}`, 'Vertikaal-oorstaande hoeke'],
              [`${re('∠ADE = ∠BCE')}`, 'Hoeke in dieselfde segment (∠ADB = ∠ACB, albei onderspan koord AB vanaf dieselfde boog)'],
              [`${gr('∴ △AED ||| △BEC')}`, 'Twee pare hoeke gelyk (AA)'],
              [`${or('AE/BE = ED/EC')}`, 'Ooreenstemmende sye van gelykvormige driehoeke is eweredig'],
              [`${or('∴ AE · EC = BE · ED')}`, 'Kruisvermenigvuldig'],
              ['6 × EC = 3 × 4 = 12', 'Vervang AE = 6 cm, BE = 3 cm en ED = 4 cm'],
              ['∴ EC = 2 cm', 'Deel albei kante deur 6'],
            ]),
            `<strong>Antwoord:</strong> EC = ${or('2 cm')}. ✓`,
          ],
        },
        {
          question: 'AB is ʼn middellyn van ʼn sirkel met middelpunt O. C is ʼn punt op die sirkel, en CD ⊥ AB met D op AB. AD = 9 cm en DB = 16 cm. Bewys dat CD² = AD · DB, en bepaal dus die lengtes van CD en AC.',
          answer: `CD = ${or('12 cm')}, AC = ${or('15 cm')}`,
          steps: [
            `<svg viewBox="0 0 280 240" width="280" height="240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="120" x2="191.62" y2="46.28" stroke="#0f1f3d" stroke-width="1.8"/><line x1="191.62" y1="46.28" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.8"/><line x1="191.62" y1="46.28" x2="191.62" y2="120" stroke="#ea580c" stroke-width="2"/><path d="M 191.62,111 L 182.62,111 L 182.62,120" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="3" fill="#0f1f3d"/><text x="46" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="230" cy="120" r="3" fill="#0f1f3d"/><text x="234" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="191.62" cy="46.28" r="3" fill="#0f1f3d"/><text x="199.62" y="40.28" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="191.62" cy="120" r="3" fill="#0f1f3d"/><text x="195.62" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="136" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">O</text><text x="120" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">AD = 9 cm</text><text x="210" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">DB = 16 cm</text></svg>`,
            `<strong>Gegee:</strong> AB is ʼn middellyn van sirkel O; C is op die sirkel; CD ⊥ AB met D op AB; AD = 9 cm, DB = 16 cm. <strong>Vereis om te bewys:</strong> CD² = AD · DB.`,
            proofTable([
              [`${re('∠ACB = 90°')}`, 'Hoek in ʼn halfsirkel (AB is ʼn middellyn)'],
              [`In △ACD en △ABC: ${bl('∠ADC = ∠ACB = 90°')}, ∠DAC = ∠CAB (gemeenskaplik)`, 'CD ⊥ AB (gegee); gemeenskaplike hoek by A'],
              [`${gr('∴ △ACD ||| △ABC')}`, 'Twee pare hoeke gelyk (AA)'],
              [`In △CBD en △ABC: ${bl('∠BDC = ∠ACB = 90°')}, ∠DBC = ∠CBA (gemeenskaplik)`, 'CD ⊥ AB (gegee); gemeenskaplike hoek by B'],
              [`${gr('∴ △CBD ||| △ABC')}`, 'Twee pare hoeke gelyk (AA)'],
              [`${or('AD/CD = CD/DB')}`, '△ACD ||| △CBD (albei gelykvormig aan △ABC, dus aan mekaar); ooreenstemmende sye is eweredig'],
              [`${or('∴ CD² = AD · DB')}`, 'Kruisvermenigvuldig'],
              ['CD² = 9 × 16 = 144, dus CD = 12 cm', 'Vervang AD = 9 cm en DB = 16 cm'],
              [`${or('AD/AC = AC/AB')}`, '△ACD ||| △ABC; ooreenstemmende sye is eweredig'],
              ['AC² = AD · AB = 9 × 25 = 225, dus AC = 15 cm', 'Vervang AD = 9 cm en AB = AD + DB = 25 cm'],
            ]),
            `<strong>Antwoord:</strong> CD = ${or('12 cm')}, AC = ${or('15 cm')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn sirkelstelling (raaklyn-koordhoek, hoek in ʼn halfsirkel, koordevierhoek se teenoorstaande hoeke) te kombineer met gelykhoekige (AA) gelykvormige driehoeke om ʼn gekwadreerde lengte of ʼn produk-van-lengtes resultaat te bewys, deur die raaklyn-snylyn rider stap vir stap deur te werk" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — angle at circumference (major arc) ─────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die diagram om die hoek ACB te bepaal wat by C op die hoofboog onderspan word.\n\n[DIAGRAM: ʼn Sirkel met middelpunt O en radius 10 cm. Punte A, B, C en D lê op die omtrek. Hoek AOB = 140° by die middelpunt. C is op die hoofboog. D is op die kleinboog. M is die middelpunt van koord AB met OM loodreg op AB. Koord AB = 12 cm.]',
      answer: '70°',
      checkMode: 'auto',
      correctAnswer: '70',
      correctAnswers: ['70', '70°', '70 degrees'],
      explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\nHoek ACB = 140° ÷ 2 = 70° ✓',
    },

    // ── Q2 Medium — angle at circumference (minor arc) ───────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik dieselfde diagram om die hoek ADB te bepaal wat by D op die klein boog onderspan word.',
      answer: 'Reflekshoek AOB = 360° − 140° = 220°.\nHoek ADB = 220° ÷ 2 = 110°.',
      checkMode: 'self',
    },

    // ── Q3 Hard — perpendicular from centre, Pythagoras ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde diagram om die lengte OM te bepaal.',
      answer: 'AM = 6 cm (M halveer AB).\nOM² = 10² − 6² = 100 − 36 = 64.\nOM = 8 cm.',
      checkMode: 'self',
    },

    // ── Q4 Hard — cyclic quadrilateral from diagram ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde diagram: as hoek CAB = 35° en C en D op teenoorgestelde boë is, bepaal hoek CDB.',
      answer: 'CADB is ʼn koordevierhoek. Teenoorstaande hoeke tel op tot 180°: hoek CDB = 180° − 35° = 145°.',
      checkMode: 'self',
    },

    // ── Q5 Medium — state the theorem ────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik dieselfde diagram om die verwantskap tussen hoek AOB en hoek ACB te gee en die stelling te benoem.',
      answer: 'Hoek AOB = 2 × hoek ACB — die hoek by die middelpunt is dubbel die hoek by die omtrek (hoek-by-die-middelpunt-stelling).',
      checkMode: 'self',
    },

    // ── Q6 Easy — opposite angles of cyclic quadrilateral ────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die diagram om hoek BCD te bepaal.\n\n[DIAGRAM: Koordevierhoek ABCD ingeskryf in ʼn sirkel. Hoek DAB = 95°. Hoek ABC = 80°. Sy AB verleng verby B na punt E wat buitehoek CBE vorm.]',
      answer: '85°',
      checkMode: 'auto',
      correctAnswer: '85',
      correctAnswers: ['85', '85°', '85 degrees'],
      explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek tel op tot 180°.\nHoek BCD = 180° − 95° = 85° ✓',
    },

    // ── Q7 Medium — opposite angles of cyclic quadrilateral ──────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik dieselfde diagram om hoek ADC te bepaal.',
      answer: '100°',
      checkMode: 'auto',
      correctAnswer: '100',
      correctAnswers: ['100', '100°', '100 degrees'],
      explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek tel op tot 180°.\nHoek ADC = 180° − 80° = 100° ✓',
    },

    // ── Q8 Hard — exterior angle theorem ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde diagram om buitehoek CBE te bepaal en benoem die stelling wat gebruik is.',
      answer: 'Die buitehoek van ʼn koordevierhoek is gelyk aan die teenoorstaande binnehoek.\nHoek CBE = hoek ADC = 100°.',
      checkMode: 'self',
    },

    // ── Q9 Hard — critical reasoning, cyclic vs general quadrilateral ─────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê hoek DAB + hoek BCD moet in enige vierhoek gelyk aan 180° wees. Is hy korrek? Verduidelik.',
      answer: 'Nee — dit is slegs waar vir koordevierhoeke waar al vier hoekpunte op ʼn sirkel lê; algemene vierhoeke het nie hierdie eienskap nie.',
      checkMode: 'self',
    },

    // ── Q10 Easy — equal tangent segments ────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die diagram om PB te bepaal as PA = 9 cm.\n\n[DIAGRAM: ʼn Sirkel met eksterne punt P. Raaklyne PA en PB word vanaf P getrek en raak die sirkel onderskeidelik by A en B. Koord AB word getrek. Hoek APB = 50°. Punt C is op die hoofboog AB.]',
      answer: '9 cm',
      checkMode: 'auto',
      correctAnswer: '9',
      correctAnswers: ['9', '9cm', '9 cm'],
      explanation: 'Raaklynstukke vanaf ʼn eksterne punt is ewe lank.\nPB = PA = 9 cm ✓',
    },

    // ── Q11 Medium — isosceles triangle from equal tangents ──────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik dieselfde diagram om hoek PAB te bepaal.',
      answer: 'Driehoek PAB is gelykbenig (PA = PB).\nHoek PAB = (180° − 50°) ÷ 2 = 65°.',
      checkMode: 'self',
    },

    // ── Q12 Hard — alternate segment theorem ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die raaklyn-koordstelling om hoek ACB te bepaal, waar C op die hoofboog is.',
      answer: 'Hoek PAB = 65° is die raaklyn-koordhoek by A. Volgens die raaklyn-koordstelling is die ingeskrewe hoek in die oorstaande segment gelyk aan 65°. Dus is hoek ACB = 65°.',
      checkMode: 'self',
    },

    // ── Q13 Hard — reasoning about PO bisecting angle APB ────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die lyn vanaf P deur die middelpunt O halveer hoek APB. Is hy korrek? Verduidelik.',
      answer: 'Ja — aangesien PA = PB (gelyke raaklyne), is driehoek PAO kongruent aan driehoek PBO volgens SSS (OA = OB as radiusse, PA = PB, PO gemeenskaplik), dus halveer PO hoek APB.',
      checkMode: 'self',
    },

    // ── Q14 Easy — angle in a semicircle ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'AB is ʼn middellyn van ʼn sirkel en P is enige punt op die omtrek. Bepaal hoek APB.',
      answer: '90°',
      checkMode: 'auto',
      correctAnswer: '90',
      correctAnswers: ['90', '90°', '90 degrees'],
      explanation: 'Die hoek in ʼn halfsirkel is 90°. AB is ʼn middellyn, dus is die hoek by die middelpunt 180° en die hoek by die omtrek 180° ÷ 2 = 90° ✓',
    },

    // ── Q15 Medium — Pythagoras in semicircle ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'In dieselfde sirkel met radius 8 cm, as AP = 6 cm en AB = 16 cm, bepaal BP met behulp van die hoek-in-ʼn-halfsirkel-stelling.',
      answer: 'Hoek APB = 90°.\nBP² = AB² − AP² = 256 − 36 = 220.\nBP = √220 = 2√55 cm.',
      checkMode: 'self',
    },

    // ── Q16 Hard — perpendicular distance from centre to chord ────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Koord van lengte 18 cm word in ʼn sirkel met radius 15 cm getrek. Bepaal die loodregte afstand vanaf die middelpunt na die koord.',
      answer: 'Halwe koord = 9 cm.\nAfstand² = 15² − 9² = 225 − 81 = 144.\nAfstand = 12 cm.',
      checkMode: 'self',
    },

    // ── Q17 Medium — alternate segment theorem ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Raaklyn by punt T maak ʼn hoek van 72° met koord TC. B is in die oorstaande segment. Bepaal hoek TBC.',
      answer: '72°',
      checkMode: 'auto',
      correctAnswer: '72',
      correctAnswers: ['72', '72°', '72 degrees'],
      explanation: 'Volgens die raaklyn-koordstelling is die hoek in die oorstaande segment gelyk aan die raaklyn-koordhoek.\nHoek TBC = 72° ✓',
    },

    // ── Q18 Hard — find radius from OM and chord ──────────────────────────────
    {
      difficulty: 'Hard',
      question: 'In ʼn sirkel met middelpunt O is OM loodreg op koord PQ. OM = 12 cm en PQ = 18 cm. Bepaal die radius.',
      answer: 'PM = 9 cm.\nRadius² = 12² + 9² = 144 + 81 = 225.\nRadius = 15 cm.',
      checkMode: 'self',
    },

    // ── Q19 Hard — solve for x in cyclic quadrilateral ────────────────────────
    {
      difficulty: 'Hard',
      question: 'In koordevierhoek PQRS is hoek P = 3x en hoek R = x + 40°. Bepaal x en albei hoeke.',
      answer: '3x + (x + 40°) = 180°.\n4x = 140°.\nx = 35°.\nHoek P = 105°, hoek R = 75°.',
      checkMode: 'self',
    },

    // ── Q20 Hard — rectangle as cyclic quadrilateral ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn reghoek is altyd ʼn koordevierhoek. Is hy korrek? Verduidelik.',
      answer: 'Ja — ʼn reghoek het al vier hoeke gelyk aan 90°, dus tel teenoorstaande hoeke op tot 180°, wat aan die koordevierhoek-voorwaarde voldoen. Die diagonaal van die reghoek dien as die middellyn van die omgeskrewe sirkel.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het Euklidiese meetkunde — sirkels bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-3):   Loodlyn vanaf middelpunt halveer koord (Pythagoras)            — BENODIG DIAGRAM
    // Blok 2 (4-7):   Hoek by middelpunt = 2 × hoek by omtrek (+ reflekshoek)        — BENODIG DIAGRAM
    // Blok 3 (8-11):  Hoeke in dieselfde segment + hoek in ʼn halfsirkel            — BENODIG DIAGRAM
    // Blok 4 (12-15): Koordevierhoek — teenoorstaande hoeke / buitehoek             — BENODIG DIAGRAM
    // Blok 5 (16-19): Raaklyne — gelyke raaklyne / raaklyn-koordhoek (oorstaande segment) — BENODIG DIAGRAM
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Loodlyn vanaf middelpunt halveer koord (Pythagoras)
        { difficulty: 'Easy', question: 'ʼn Sirkel het middelpunt O en radius OA = 10 cm. OM word loodreg op koord AB getrek, waar AB = 16 cm. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], answer: '6 cm', explanation: 'Aangesien OM ⊥ AB, halveer OM die koord: AM = 16 ÷ 2 = 8 cm.\nOM² = OA² − AM² = 10² − 8² = 100 − 64 = 36.\nOM = √36 = 6 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 10 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 16 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Sirkel het middelpunt O en radius OP = 17 cm. OM is loodreg op koord PQ, en OM = 8 cm. Bepaal die lengte van koord PQ.', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30cm', '30 cm'], answer: '30 cm', explanation: 'PM² = OP² − OM² = 17² − 8² = 289 − 64 = 225.\nPM = √225 = 15 cm.\nAangesien OM die koord halveer, PQ = 2 × 15 = 30 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OP = 17 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 8 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het middelpunt O en radius 13 cm. Koord AB = 24 cm, en OM word vanaf O loodreg op AB getrek, en ontmoet dit by M. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], answer: '5 cm', explanation: 'Aangesien OM ⊥ AB, AM = 24 ÷ 2 = 12 cm.\nOM² = OA² − AM² = 13² − 12² = 169 − 144 = 25.\nOM = √25 = 5 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 13 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 24 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O en radius 25 cm. M is die middelpunt van koord AB, en OM = 7 cm. Bepaal die lengte van AB, en gee dan die grootte van hoek OMA.', checkMode: 'auto', correctAnswer: '48,90', correctAnswers: ['48,90', '48cm,90°', '48 cm, 90°'], answer: 'AB = 48 cm, ∠OMA = 90°', explanation: 'AM² = OA² − OM² = 25² − 7² = 625 − 49 = 576.\nAM = √576 = 24 cm.\nAB = 2 × 24 = 48 cm.\nAangesien OM die loodlyn vanaf die middelpunt na die koord is, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 7 cm</text><text x="140" y="228" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">∠OMA = 90°</text></svg>' },

        // Blok 2 — Hoek by middelpunt = 2 × hoek by omtrek (+ reflekshoek)
        { difficulty: 'Easy', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek ∠AOB = 96° by die middelpunt. Punt C lê op die hoofboog, aan dieselfde kant as die 96°-hoek. Bepaal ∠ACB.', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48°', '48 degrees'], answer: '48°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠ACB = 96° ÷ 2 = 48° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">96°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In ʼn sirkel met middelpunt O onderspan koord PQ ʼn hoek ∠PRQ = 57° by punt R op die omtrek. Bepaal ∠POQ by die middelpunt.', checkMode: 'auto', correctAnswer: '114', correctAnswers: ['114', '114°', '114 degrees'], answer: '114°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠POQ = 2 × 57° = 114° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="154" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="56" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">57°</text></svg>' },
        { difficulty: 'Medium', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek ∠AOB = 130° by die middelpunt, gemeet aan die kant van die hoofboog. Punt D lê op die klein boog. Bepaal die reflekshoek AOB, en bepaal dan ∠ADB.', checkMode: 'auto', correctAnswer: '230,115', correctAnswers: ['230,115', '230°,115°', '230°, 115°'], answer: 'Reflekshoek AOB = 230°, ∠ADB = 115°', explanation: 'Reflekshoek AOB = 360° − 130° = 230°.\nD is op die klein boog, gebruik dus die reflekshoek: ∠ADB = 230° ÷ 2 = 115° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="197.85" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155.43,138.38 A 24,24 0 0 1 124.57,138.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="197.85" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="82.15" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 145.13,44.1 A 15,15 0 0 1 134.87,44.1" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="179.85" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="90.15" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">130°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek van (5x + 10)° by die middelpunt en ∠ACB = (2x + 20)° by punt C op die omtrek (dieselfde kant). Bepaal x, en bepaal dan ∠ACB.', checkMode: 'auto', correctAnswer: '30,80', correctAnswers: ['30,80', '30,80°', 'x=30,80°'], answer: 'x = 30, ∠ACB = 80°', explanation: 'Hoek by middelpunt = 2 × hoek by omtrek:\n(5x + 10)° = 2(2x + 20)°.\n5x + 10 = 4x + 40.\nx = 30.\n∠ACB = 2(30) + 20 = 80° ✓ (toets: hoek by middelpunt = 5(30)+10=160°, en 2×80°=160° ✓)', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5x+10)°</text><text x="140" y="56" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+20)°</text></svg>' },

        // Blok 3 — Hoeke in dieselfde segment + hoek in ʼn halfsirkel
        { difficulty: 'Easy', question: 'In ʼn sirkel lê punte C en D op dieselfde boog relatief tot koord AB. ∠ACB = 38°. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38°', '38 degrees'], answer: '38°', explanation: 'C en D lê in dieselfde segment relatief tot koord AB, dus is hoeke in dieselfde segment gelyk.\n∠ADB = ∠ACB = 38° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">38°</text><text x="86.15" y="210.94" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'AB is ʼn middellyn van ʼn sirkel en P is ʼn punt op die omtrek. ∠PAB = 27°. Bepaal ∠APB, en bepaal dan ∠PBA.', checkMode: 'auto', correctAnswer: '90,63', correctAnswers: ['90,63', '90°,63°', '90°, 63°'], answer: '∠APB = 90°, ∠PBA = 63°', explanation: 'Aangesien AB ʼn middellyn is, ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: 27° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 27° = 63° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 204.18,71.39 L 207.19,80.93 L 216.73,77.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="58.379999999999995" font-size="13" fill="#0f1f3d" font-weight="700">P</text><path d="M 63.35,115.79 A 14,14 0 0 1 64,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="76" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">27°</text><text x="207.72" y="92.38" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Punte A, B, C en D lê op ʼn sirkel, met C en D op dieselfde boog relatief tot koord AB. ∠ACB = (3x + 4)° en ∠ADB = (5x − 16)°. Bepaal x, en bepaal dan ∠ACB.', checkMode: 'auto', correctAnswer: '10,34', correctAnswers: ['10,34', '10,34°', 'x=10,34°'], answer: 'x = 10, ∠ACB = 34°', explanation: 'Hoeke in dieselfde segment is gelyk: 3x + 4 = 5x − 16.\n20 = 2x.\nx = 10.\n∠ACB = 3(10) + 4 = 34° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(3x+4)°</text><text x="86.15" y="210.94" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5x−16)°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is ʼn middellyn van ʼn sirkel met AB = 20 cm. P is ʼn punt op die omtrek met AP = 12 cm. Bepaal ∠APB, en bepaal dan die lengte van BP.', checkMode: 'auto', correctAnswer: '90,16', correctAnswers: ['90,16', '90°,16cm', '90°, 16 cm'], answer: '∠APB = 90°, BP = 16 cm', explanation: 'AB is ʼn middellyn, dus ∠APB = 90° (hoek in ʼn halfsirkel).\nDriehoek APB is reghoekig by P: BP² = AB² − AP² = 20² − 12² = 400 − 144 = 256.\nBP = √256 = 16 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 203.43,94.93 L 208.74,103.41 L 218.61,101.8" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.3" cy="93.32" r="2.5" fill="#0f1f3d"/><text x="221.3" y="83.32" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="109.65" y="102.66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 12 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 20 cm</text><text x="247.65" y="100.66" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 4 — Koordevierhoek: teenoorstaande hoeke / buitehoek
        { difficulty: 'Easy', question: 'In koordevierhoek ABCD is ∠A = 102°. Bepaal ∠C.', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', '78°', '78 degrees'], answer: '78°', explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr.\n∠C = 180° − 102° = 78° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">102°</text><text x="198.26" y="141.2" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In koordevierhoek ABCD is ∠B = 95°. Bepaal ∠D.', checkMode: 'auto', correctAnswer: '85', correctAnswers: ['85', '85°', '85 degrees'], answer: '85°', explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr.\n∠D = 180° − 95° = 85° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="100.15" y="167.49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">95°</text><text x="179.85" y="72.51" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'PQRS is ʼn koordevierhoek met ∠PQR = 118°. Sy RS word verby S verleng na punt T, en vorm buitehoek ∠PST. Bepaal ∠PST, en noem die stelling wat gebruik is.', checkMode: 'auto', correctAnswer: '118', correctAnswers: ['118', '118°', '118 degrees'], answer: '118°', explanation: 'Die buitehoek van ʼn koordevierhoek is gelyk aan die teenoorstaande binnehoek.\n∠PST = ∠PQR = 118° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="204.57" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="208.94" y1="62.15" x2="71.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="26.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="26.06" y1="62.15" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="54.06" y="185" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="164.78" y="192.57" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">R</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="63.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">S</text><circle cx="26.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="16.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">T</text><text x="161.2" y="178.26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">118°</text><text x="54.85" y="77.02" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In koordevierhoek ABCD is ∠A = (2x + 15)° en ∠C = (x + 45)°. Bepaal x, en bepaal dan ∠A en ∠C.', checkMode: 'auto', correctAnswer: '40,95,85', correctAnswers: ['40,95,85', '40,95°,85°', 'x=40,95°,85°'], answer: 'x = 40, ∠A = 95°, ∠C = 85°', explanation: 'Teenoorstaande hoeke is supplementêr: (2x + 15) + (x + 45) = 180.\n3x + 60 = 180.\nx = 40.\n∠A = 2(40) + 15 = 95°, ∠C = 40 + 45 = 85°. Toets: 95° + 85° = 180° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+15)°</text><text x="198.26" y="141.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(x+45)°</text></svg>' },

        // Blok 5 — Raaklyne: gelyke raaklyne / raaklyn-koordhoek (oorstaande segment)
        { difficulty: 'Easy', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek. As PA = 11 cm, bepaal PB.', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11cm', '11 cm'], answer: '11 cm', explanation: 'Raaklynstukke vanaf ʼn eksterne punt is ewe lank.\nPB = PA = 11 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 201.26,57.46 L 194.37,63.25 L 202.05,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">PA = 11 cm</text><text x="194.47" y="41.08" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Raaklyn by punt T maak ʼn hoek van 58° met koord TC. Punt B lê in die oorstaande segment. Bepaal ∠TBC, en noem die stelling wat gebruik is.', checkMode: 'auto', correctAnswer: '58', correctAnswers: ['58', '58°', '58 degrees'], answer: '58°', explanation: 'Volgens die raaklyn-koordstelling (stelling van die oorstaande segment) is die ingeskrewe hoek in die oorstaande segment gelyk aan die raaklyn-koordhoek.\n∠TBC = 58° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="210" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 215.97,101.51 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">58°</text><text x="230.57" y="71.22" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek, met ∠APB = 46°. Aangesien PA = PB, is driehoek PAB gelykbenig. Bepaal ∠PAB.', checkMode: 'auto', correctAnswer: '67', correctAnswers: ['67', '67°', '67 degrees'], answer: '67°', explanation: 'Aangesien PA = PB (gelyke raaklyne vanaf ʼn eksterne punt), is driehoek PAB gelykbenig, dus ∠PAB = ∠PBA.\n∠PAB = (180° − 46°) ÷ 2 = 134° ÷ 2 = 67° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="208.94" y2="62.15" stroke="#ea580c" stroke-width="2.5"/><path d="M 124.64,29.39 A 18,18 0 0 0 155.36,29.39" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 83.86,54.33 A 15,15 0 0 1 86.06,62.15" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="68.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="54" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">46°</text><text x="96.09" y="55.11" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek, en raak dit by A en B. ∠APB = 40°. C is ʼn punt op die hoofboog AB. Bepaal ∠PAB, en gebruik dan die raaklyn-koordstelling om ∠ACB te bepaal.', checkMode: 'auto', correctAnswer: '70,70', correctAnswers: ['70,70', '70°,70°', '70°, 70°'], answer: '∠PAB = 70°, ∠ACB = 70°', explanation: 'Aangesien PA = PB, is driehoek PAB gelykbenig: ∠PAB = (180° − 40°) ÷ 2 = 70°.\n∠PAB is die raaklyn-koordhoek by A vir koord AB. Volgens die raaklyn-koordstelling, ∠ACB = ∠PAB = 70° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="15" x2="66.28" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="15" x2="213.72" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="66.28" y1="68.38" x2="213.72" y2="68.38" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="66.28" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.72" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 127.04,24.38 A 16,16 0 0 0 152.96,24.38" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 155.26,195.46 A 14,14 0 0 1 168.08,193.77" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="15" r="2.5" fill="#0f1f3d"/><text x="134" y="7" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="46.28" y="74.38" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="223.72" y="76.38" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="163.29" cy="206.93" r="2.5" fill="#0f1f3d"/><text x="157.29" y="226.93" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">40°</text><text x="163.29" y="192.93" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 6 — Riderbewyse (CAPS probleemoplossings-kognitiewe vlak)
        { difficulty: 'Hard', question: 'ABCD is ʼn koordevierhoek met middelpunt O. ∠BOD = 116° (by die middelpunt), met A op die hoofboog BD. Bewys dat ∠BCD = 122°.', checkMode: 'auto', correctAnswer: '122', correctAnswers: ['122', '122°', '122 degrees'], answer: '122°', explanation: `${re('∠BAD = 58°')} (hoek by middelpunt = 2 × hoek by omtrek), dus ${bl('∠BCD = 180° − 58° = 122°')} (oorstaande hoeke van ʼn koordevierhoek is supplementêr).` + proofTable([
          ['∠BAD = ½∠BOD = ½ × 116° = 58°', 'Hoek by die middelpunt is dubbel die hoek by die omtrek (dieselfde koord BD, A op hoofboog)'],
          ['∠BAD + ∠BCD = 180°', 'Oorstaande hoeke van ʼn koordevierhoek is supplementêr'],
          ['58° + ∠BCD = 180°', 'Vervang ∠BAD = 58°'],
          ['∴ ∠BCD = 122°', 'Los op vir ∠BCD'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="155.63" y1="208.63" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2"/><line x1="55.43" y1="89.22" x2="121.29" y2="31.97" stroke="#0f1f3d" stroke-width="2"/><line x1="121.29" y1="31.97" x2="204.74" y2="57.48" stroke="#0f1f3d" stroke-width="2"/><line x1="204.74" y1="57.48" x2="155.63" y2="208.63" stroke="#0f1f3d" stroke-width="2"/><line x1="140" y1="120" x2="55.43" y2="89.22" stroke="#dc2626" stroke-width="2"/><line x1="140" y1="120" x2="204.74" y2="57.48" stroke="#dc2626" stroke-width="2"/><path d="M 119.3,112.5 A 22,22 0 0 1 155.8,104.7" fill="none" stroke="#dc2626" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="155.63" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="161.63" y="222.63" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="121.29" cy="31.97" r="2.5" fill="#0f1f3d"/><text x="115.29" y="18.97" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="204.74" cy="57.48" r="2.5" fill="#0f1f3d"/><text x="214.74" y="51.48" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="138" y="98" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">116°</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Raaklyn raak ʼn sirkel by A. Koord AB word getrek, en die raaklyn-koordhoek ∠TAB = 62°. C en D lê albei op die hoofboog AB (die alternerende segment). Bewys dat ∠ADB = 62°.', checkMode: 'auto', correctAnswer: '62', correctAnswers: ['62', '62°', '62 degrees'], answer: '62°', explanation: `${or('∠ACB = 62°')} (raaklyn-koordhoek is gelyk aan die ingeskrewe hoek in die alternerende segment), dus ${gr('∠ADB = ∠ACB = 62°')} (hoeke in dieselfde segment is gelyk).` + proofTable([
          ['∠ACB = ∠TAB = 62°', 'Raaklyn-koordstelling (alternerende segment): C lê in die alternerende segment vir koord AB'],
          ['∠ADB = ∠ACB', 'Hoeke in dieselfde segment is gelyk (C en D onderspan albei AB vanaf die hoofboog)'],
          ['∴ ∠ADB = 62°', 'Vervanging'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="185.0" y2="42.06" stroke="#0f1f3d" stroke-width="1.6"/><line x1="185.0" y1="42.06" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.6"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="1.6"/><line x1="224.57" y1="89.22" x2="140" y2="210" stroke="#0f1f3d" stroke-width="1.6"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="185.0" cy="42.06" r="2.5" fill="#0f1f3d"/><text x="191" y="32.06" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">62°</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die Graad 12-sirkelstellings bemeester — loodlyn wat ʼn koord halveer, hoek by die middelpunt, hoeke in dieselfde segment, koordevierhoeke, en raaklynstellings.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae oor die koordevierhoek- of raaklyn-koordstelling weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde van elke sirkelstelling weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Loodlyn vanaf middelpunt halveer koord (Pythagoras)
        { difficulty: 'Easy', question: 'ʼn Sirkel het middelpunt O en radius OA = 15 cm. OM word loodreg op koord AB getrek, waar AB = 24 cm. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9cm', '9 cm'], answer: '9 cm', explanation: 'Aangesien OM ⊥ AB, AM = 24 ÷ 2 = 12 cm.\nOM² = OA² − AM² = 15² − 12² = 225 − 144 = 81.\nOM = √81 = 9 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 15 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 24 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Sirkel het middelpunt O en radius OA = 20 cm. OM is loodreg op koord AB, en OM = 12 cm. Bepaal die lengte van koord AB.', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32cm', '32 cm'], answer: '32 cm', explanation: 'AM² = OA² − OM² = 20² − 12² = 400 − 144 = 256.\nAM = √256 = 16 cm.\nAB = 2 × 16 = 32 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 20 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 12 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het middelpunt O en radius 26 cm. Koord AB = 48 cm, en OM word vanaf O loodreg op AB getrek. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10cm', '10 cm'], answer: '10 cm', explanation: 'AM = 48 ÷ 2 = 24 cm.\nOM² = OA² − AM² = 26² − 24² = 676 − 576 = 100.\nOM = √100 = 10 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 26 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 48 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O en radius 29 cm. M is die middelpunt van koord AB, en OM = 20 cm. Bepaal die lengte van AB, en gee dan die grootte van hoek OMA.', checkMode: 'auto', correctAnswer: '42,90', correctAnswers: ['42,90', '42cm,90°', '42 cm, 90°'], answer: 'AB = 42 cm, ∠OMA = 90°', explanation: 'AM² = OA² − OM² = 29² − 20² = 841 − 400 = 441.\nAM = √441 = 21 cm.\nAB = 2 × 21 = 42 cm.\nAangesien OM die loodlyn vanaf die middelpunt na die koord is, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 29 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 20 cm</text><text x="140" y="228" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">∠OMA = 90°</text></svg>' },

        // Blok 2 — Hoek by middelpunt = 2 × hoek by omtrek (+ reflekshoek)
        { difficulty: 'Easy', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek ∠AOB = 70° by die middelpunt. Punt C lê op die hoofboog, aan dieselfde kant as die 70°-hoek. Bepaal ∠ACB.', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35°', '35 degrees'], answer: '35°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠ACB = 70° ÷ 2 = 35° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In ʼn sirkel met middelpunt O onderspan koord PQ ʼn hoek ∠PRQ = 63° by punt R op die omtrek. Bepaal ∠POQ by die middelpunt.', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126', '126°', '126 degrees'], answer: '126°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠POQ = 2 × 63° = 126° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="154" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="56" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">63°</text></svg>' },
        { difficulty: 'Medium', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek ∠AOB = 100° by die middelpunt, gemeet aan die kant van die hoofboog. Punt D lê op die klein boog. Bepaal die reflekshoek AOB, en bepaal dan ∠ADB.', checkMode: 'auto', correctAnswer: '260,130', correctAnswers: ['260,130', '260°,130°', '260°, 130°'], answer: 'Reflekshoek AOB = 260°, ∠ADB = 130°', explanation: 'Reflekshoek AOB = 360° − 100° = 260°.\nD is op die klein boog, gebruik dus die reflekshoek: ∠ADB = 260° ÷ 2 = 130° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="197.85" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155.43,138.38 A 24,24 0 0 1 124.57,138.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="197.85" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="82.15" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 145.13,44.1 A 15,15 0 0 1 134.87,44.1" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="179.85" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="90.15" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">100°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek van (4x + 8)° by die middelpunt en ∠ACB = (x + 26)° by punt C op die omtrek (dieselfde kant). Bepaal x, en bepaal dan ∠ACB.', checkMode: 'auto', correctAnswer: '22,48', correctAnswers: ['22,48', '22,48°', 'x=22,48°'], answer: 'x = 22, ∠ACB = 48°', explanation: 'Hoek by middelpunt = 2 × hoek by omtrek:\n(4x + 8)° = 2(x + 26)°.\n4x + 8 = 2x + 52.\n2x = 44.\nx = 22.\n∠ACB = 22 + 26 = 48° ✓ (toets: hoek by middelpunt = 4(22)+8=96°, en 2×48°=96° ✓)', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x+8)°</text><text x="140" y="56" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(x+26)°</text></svg>' },

        // Blok 3 — Hoeke in dieselfde segment + hoek in ʼn halfsirkel
        { difficulty: 'Easy', question: 'In ʼn sirkel lê punte C en D op dieselfde boog relatief tot koord AB. ∠ACB = 52°. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '52', correctAnswers: ['52', '52°', '52 degrees'], answer: '52°', explanation: 'C en D lê in dieselfde segment relatief tot koord AB, dus is hoeke in dieselfde segment gelyk.\n∠ADB = ∠ACB = 52° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">52°</text><text x="86.15" y="210.94" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'AB is ʼn middellyn van ʼn sirkel en P is ʼn punt op die omtrek. ∠PAB = 34°. Bepaal ∠APB, en bepaal dan ∠PBA.', checkMode: 'auto', correctAnswer: '90,56', correctAnswers: ['90,56', '90°,56°', '90°, 56°'], answer: '∠APB = 90°, ∠PBA = 56°', explanation: 'Aangesien AB ʼn middellyn is, ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: 34° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 34° = 56° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 204.18,71.39 L 207.19,80.93 L 216.73,77.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="58.379999999999995" font-size="13" fill="#0f1f3d" font-weight="700">P</text><path d="M 63.35,115.79 A 14,14 0 0 1 64,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="76" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">34°</text><text x="207.72" y="92.38" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Punte A, B, C en D lê op ʼn sirkel, met C en D op dieselfde boog relatief tot koord AB. ∠ACB = (2x + 9)° en ∠ADB = (4x − 19)°. Bepaal x, en bepaal dan ∠ACB.', checkMode: 'auto', correctAnswer: '14,37', correctAnswers: ['14,37', '14,37°', 'x=14,37°'], answer: 'x = 14, ∠ACB = 37°', explanation: 'Hoeke in dieselfde segment is gelyk: 2x + 9 = 4x − 19.\n28 = 2x.\nx = 14.\n∠ACB = 2(14) + 9 = 37° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+9)°</text><text x="86.15" y="210.94" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x−19)°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is ʼn middellyn van ʼn sirkel met AB = 26 cm. P is ʼn punt op die omtrek met AP = 10 cm. Bepaal ∠APB, en bepaal dan die lengte van BP.', checkMode: 'auto', correctAnswer: '90,24', correctAnswers: ['90,24', '90°,24cm', '90°, 24 cm'], answer: '∠APB = 90°, BP = 24 cm', explanation: 'AB is ʼn middellyn, dus ∠APB = 90° (hoek in ʼn halfsirkel).\nDriehoek APB is reghoekig by P: BP² = AB² − AP² = 26² − 10² = 676 − 100 = 576.\nBP = √576 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 203.43,94.93 L 208.74,103.41 L 218.61,101.8" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.3" cy="93.32" r="2.5" fill="#0f1f3d"/><text x="221.3" y="83.32" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="109.65" y="102.66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 10 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 26 cm</text><text x="247.65" y="100.66" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 4 — Koordevierhoek: teenoorstaande hoeke / buitehoek
        { difficulty: 'Easy', question: 'In koordevierhoek ABCD is ∠A = 88°. Bepaal ∠C.', checkMode: 'auto', correctAnswer: '92', correctAnswers: ['92', '92°', '92 degrees'], answer: '92°', explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr.\n∠C = 180° − 88° = 92° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">88°</text><text x="198.26" y="141.2" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In koordevierhoek ABCD is ∠B = 73°. Bepaal ∠D.', checkMode: 'auto', correctAnswer: '107', correctAnswers: ['107', '107°', '107 degrees'], answer: '107°', explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr.\n∠D = 180° − 73° = 107° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="100.15" y="167.49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">73°</text><text x="179.85" y="72.51" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'WXYZ is ʼn koordevierhoek met ∠WXY = 126°. Sy YZ word verby Z verleng na punt T, en vorm buitehoek ∠WZT. Bepaal ∠WZT, en noem die stelling wat gebruik is.', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126', '126°', '126 degrees'], answer: '126°', explanation: 'Die buitehoek van ʼn koordevierhoek is gelyk aan die teenoorstaande binnehoek.\n∠WZT = ∠WXY = 126° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="204.57" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="208.94" y1="62.15" x2="71.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="26.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="26.06" y1="62.15" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="54.06" y="185" font-size="13" fill="#0f1f3d" font-weight="700">W</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="164.78" y="192.57" font-size="13" fill="#0f1f3d" font-weight="700">X</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">Y</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="63.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">Z</text><circle cx="26.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="16.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">T</text><text x="161.2" y="178.26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">126°</text><text x="54.85" y="77.02" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In koordevierhoek ABCD is ∠A = (3x − 10)° en ∠C = (x + 30)°. Bepaal x, en bepaal dan ∠A en ∠C.', checkMode: 'auto', correctAnswer: '40,110,70', correctAnswers: ['40,110,70', '40,110°,70°', 'x=40,110°,70°'], answer: 'x = 40, ∠A = 110°, ∠C = 70°', explanation: 'Teenoorstaande hoeke is supplementêr: (3x − 10) + (x + 30) = 180.\n4x + 20 = 180.\nx = 40.\n∠A = 3(40) − 10 = 110°, ∠C = 40 + 30 = 70°. Toets: 110° + 70° = 180° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(3x−10)°</text><text x="198.26" y="141.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(x+30)°</text></svg>' },

        // Blok 5 — Raaklyne: gelyke raaklyne / raaklyn-koordhoek (oorstaande segment)
        { difficulty: 'Easy', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek. As PA = 14 cm, bepaal PB.', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14cm', '14 cm'], answer: '14 cm', explanation: 'Raaklynstukke vanaf ʼn eksterne punt is ewe lank.\nPB = PA = 14 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 201.26,57.46 L 194.37,63.25 L 202.05,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">PA = 14 cm</text><text x="194.47" y="41.08" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Raaklyn by punt T maak ʼn hoek van 49° met koord TC. Punt B lê in die oorstaande segment. Bepaal ∠TBC, en noem die stelling wat gebruik is.', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '49°', '49 degrees'], answer: '49°', explanation: 'Volgens die raaklyn-koordstelling (stelling van die oorstaande segment) is die ingeskrewe hoek in die oorstaande segment gelyk aan die raaklyn-koordhoek.\n∠TBC = 49° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="210" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 215.97,101.51 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">49°</text><text x="230.57" y="71.22" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek, met ∠APB = 62°. Aangesien PA = PB, is driehoek PAB gelykbenig. Bepaal ∠PAB.', checkMode: 'auto', correctAnswer: '59', correctAnswers: ['59', '59°', '59 degrees'], answer: '59°', explanation: 'Aangesien PA = PB (gelyke raaklyne vanaf ʼn eksterne punt), is driehoek PAB gelykbenig, dus ∠PAB = ∠PBA.\n∠PAB = (180° − 62°) ÷ 2 = 118° ÷ 2 = 59° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="208.94" y2="62.15" stroke="#ea580c" stroke-width="2.5"/><path d="M 124.64,29.39 A 18,18 0 0 0 155.36,29.39" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 83.86,54.33 A 15,15 0 0 1 86.06,62.15" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="68.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="54" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">62°</text><text x="96.09" y="55.11" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek, en raak dit by A en B. ∠APB = 54°. C is ʼn punt op die hoofboog AB. Bepaal ∠PAB, en gebruik dan die raaklyn-koordstelling om ∠ACB te bepaal.', checkMode: 'auto', correctAnswer: '63,63', correctAnswers: ['63,63', '63°,63°', '63°, 63°'], answer: '∠PAB = 63°, ∠ACB = 63°', explanation: 'Aangesien PA = PB, is driehoek PAB gelykbenig: ∠PAB = (180° − 54°) ÷ 2 = 63°.\n∠PAB is die raaklyn-koordhoek by A vir koord AB. Volgens die raaklyn-koordstelling, ∠ACB = ∠PAB = 63° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="15" x2="66.28" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="15" x2="213.72" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="66.28" y1="68.38" x2="213.72" y2="68.38" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="66.28" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.72" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 127.04,24.38 A 16,16 0 0 0 152.96,24.38" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 155.26,195.46 A 14,14 0 0 1 168.08,193.77" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="15" r="2.5" fill="#0f1f3d"/><text x="134" y="7" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="46.28" y="74.38" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="223.72" y="76.38" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="163.29" cy="206.93" r="2.5" fill="#0f1f3d"/><text x="157.29" y="226.93" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">54°</text><text x="163.29" y="192.93" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 6 — Riderbewyse (CAPS probleemoplossings-kognitiewe vlak)
        { difficulty: 'Hard', question: 'ABCD is ʼn koordevierhoek met middelpunt O. Diagonaal AC onderspan ∠AOC = 118° by die middelpunt, met B op die hoofboog AC. Sy AD word verleng verby D na ʼn punt E, wat buitehoek ∠CDE vorm. Bewys dat ∠CDE = 59°.', checkMode: 'auto', correctAnswer: '59', correctAnswers: ['59', '59°', '59 degrees'], answer: '59°', explanation: `${re('∠ABC = 59°')} (hoek by middelpunt = 2 × hoek by omtrek), dus ${bl('∠CDE = ∠ABC = 59°')} (buitehoek van ʼn koordevierhoek is gelyk aan die teenoorstaande binnehoek).` + proofTable([
          ['∠ABC = ½∠AOC = ½ × 118° = 59°', 'Hoek by die middelpunt is dubbel die hoek by die omtrek (dieselfde koord AC, B op hoofboog)'],
          ['∠CDE = ∠ABC', 'Buitehoek van ʼn koordevierhoek is gelyk aan die teenoorstaande binnehoek (D en B is teenoorstaande hoekpunte van ABCD)'],
          ['∴ ∠CDE = 59°', 'Vervanging'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="124.37" y1="208.63" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2"/><line x1="208.94" y1="62.15" x2="69.08" y2="64.59" stroke="#0f1f3d" stroke-width="2"/><line x1="69.08" y1="64.59" x2="55.43" y2="150.78" stroke="#0f1f3d" stroke-width="2"/><line x1="55.43" y1="150.78" x2="124.37" y2="208.63" stroke="#0f1f3d" stroke-width="2"/><line x1="69.08" y1="64.59" x2="49.97" y2="185.26" stroke="#0f1f3d" stroke-width="1.8" stroke-dasharray="4,3"/><line x1="140" y1="120" x2="124.37" y2="208.63" stroke="#dc2626" stroke-width="2"/><line x1="140" y1="120" x2="69.08" y2="64.59" stroke="#dc2626" stroke-width="2"/><path d="M 136.2,141.7 A 22,22 0 0 1 122.7,106.5" fill="none" stroke="#dc2626" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="124.37" cy="208.63" r="2.5" fill="#0f1f3d"/><text x="118.37" y="224.63" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="69.08" cy="64.59" r="2.5" fill="#0f1f3d"/><text x="63.08" y="50.59" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="55.43" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="35.43" y="154.78" font-size="13" fill="#0f1f3d" font-weight="700">D</text><circle cx="49.97" cy="185.26" r="2.5" fill="#0f1f3d"/><text x="35.97" y="200.26" font-size="13" fill="#0f1f3d" font-weight="700">E</text><text x="150" y="98" font-size="12" fill="#dc2626" font-weight="700" text-anchor="middle">118°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is ʼn middellyn van ʼn sirkel met middelpunt O. C is ʼn punt op die sirkel sodat AC = BC. ʼn Lyn CT word getrek sodat ∠TCA = ∠CBA. Bewys dat CT ʼn raaklyn aan die sirkel by C is.', answer: `Aangesien AB ʼn middellyn is, is ${re('∠ACB = 90°')}. Aangesien AC = BC, is △ABC gelykbenig, dus ${bl('∠CAB = ∠CBA = 45°')} elk. Gegee ${gr('∠TCA = ∠CBA = 45°')}, volgens die omgekeerde van die raaklyn-koordstelling, is CT ʼn raaklyn aan die sirkel by C.` + proofTable([
          ['∠ACB = 90°', 'Hoek in ʼn halfsirkel (AB is ʼn middellyn)'],
          ['AC = BC', 'Gegee'],
          ['∠CAB = ∠CBA', 'Basishoeke van gelykbenige driehoek ABC (AC = BC) is gelyk'],
          ['∠CAB = ∠CBA = 45°', '∠CAB + ∠CBA = 180° − 90° = 90° (hoeksom van △ABC), en die twee basishoeke is gelyk, dus is elkeen 45°'],
          ['∠TCA = ∠CBA = 45°', 'Gegee'],
          ['∴ CT is ʼn raaklyn aan die sirkel by C', 'Omgekeerde van die raaklyn-koordstelling (alternerende segment): aangesien ∠TCA gelyk is aan die ingeskrewe hoek ∠CBA in die alternerende segment, moet CT ʼn raaklyn wees'],
        ]), checkMode: 'self', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="120" x2="140" y2="30" stroke="#0f1f3d" stroke-width="1.8"/><line x1="140" y1="30" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.8"/><line x1="60" y1="30" x2="220" y2="30" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="240" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="146" y="20" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="220" cy="30" r="2.5" fill="#0f1f3d"/><text x="230" y="24" font-size="13" fill="#0f1f3d" font-weight="700">T</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die Graad 12-sirkelstellings bemeester — loodlyn wat ʼn koord halveer, hoek by die middelpunt, hoeke in dieselfde segment, koordevierhoeke, en raaklynstellings.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae oor die koordevierhoek- of raaklyn-koordstelling weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde van elke sirkelstelling weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Loodlyn vanaf middelpunt halveer koord (Pythagoras)
        { difficulty: 'Easy', question: 'ʼn Sirkel het middelpunt O en radius OA = 20 cm. OM word loodreg op koord AB getrek, waar AB = 32 cm. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12cm', '12 cm'], answer: '12 cm', explanation: 'Aangesien OM ⊥ AB, AM = 32 ÷ 2 = 16 cm.\nOM² = OA² − AM² = 20² − 16² = 400 − 256 = 144.\nOM = √144 = 12 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 20 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 32 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Sirkel het middelpunt O en radius OA = 41 cm. OM is loodreg op koord AB, en OM = 9 cm. Bepaal die lengte van koord AB.', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', '80cm', '80 cm'], answer: '80 cm', explanation: 'AM² = OA² − OM² = 41² − 9² = 1681 − 81 = 1600.\nAM = √1600 = 40 cm.\nAB = 2 × 40 = 80 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 41 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 9 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het middelpunt O en radius 25 cm. Koord AB = 14 cm, en OM word vanaf O loodreg op AB getrek. Bepaal die lengte van OM.', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24cm', '24 cm'], answer: '24 cm', explanation: 'AM = 14 ÷ 2 = 7 cm.\nOM² = OA² − AM² = 25² − 7² = 625 − 49 = 576.\nOM = √576 = 24 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 25 cm</text><text x="140" y="67.19" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 14 cm</text><text x="154" y="83.59" font-size="12" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O en radius 37 cm. M is die middelpunt van koord AB, en OM = 12 cm. Bepaal die lengte van AB, en gee dan die grootte van hoek OMA.', checkMode: 'auto', correctAnswer: '70,90', correctAnswers: ['70,90', '70cm,90°', '70 cm, 90°'], answer: 'AB = 70 cm, ∠OMA = 90°', explanation: 'AM² = OA² − OM² = 37² − 12² = 1369 − 144 = 1225.\nAM = √1225 = 35 cm.\nAB = 2 × 35 = 70 cm.\nAangesien OM die loodlyn vanaf die middelpunt na die koord is, ∠OMA = 90° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="87.1" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="47.19" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 140,56.19 L 131,56.19 L 131,47.19" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="136" y="37.19" font-size="13" fill="#0f1f3d" font-weight="700">M</text><text x="105.55" y="81.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 37 cm</text><text x="140" y="67.19" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="154" y="83.59" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">OM = 12 cm</text><text x="140" y="228" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">∠OMA = 90°</text></svg>' },

        // Blok 2 — Hoek by middelpunt = 2 × hoek by omtrek (+ reflekshoek)
        { difficulty: 'Easy', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek ∠AOB = 112° by die middelpunt. Punt C lê op die hoofboog, aan dieselfde kant as die 112°-hoek. Bepaal ∠ACB.', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56°', '56 degrees'], answer: '56°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠ACB = 112° ÷ 2 = 56° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">112°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In ʼn sirkel met middelpunt O onderspan koord PQ ʼn hoek ∠PRQ = 44° by punt R op die omtrek. Bepaal ∠POQ by die middelpunt.', checkMode: 'auto', correctAnswer: '88', correctAnswers: ['88', '88°', '88 degrees'], answer: '88°', explanation: 'Die hoek by die middelpunt is dubbel die hoek by die omtrek.\n∠POQ = 2 × 44° = 88° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">Q</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">R</text><text x="140" y="154" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text><text x="140" y="56" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">44°</text></svg>' },
        { difficulty: 'Medium', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek ∠AOB = 140° by die middelpunt, gemeet aan die kant van die hoofboog. Punt D lê op die klein boog. Bepaal die reflekshoek AOB, en bepaal dan ∠ADB.', checkMode: 'auto', correctAnswer: '220,110', correctAnswers: ['220,110', '220°,110°', '220°, 110°'], answer: 'Reflekshoek AOB = 220°, ∠ADB = 110°', explanation: 'Reflekshoek AOB = 360° − 140° = 220°.\nD is op die klein boog, gebruik dus die reflekshoek: ∠ADB = 220° ÷ 2 = 110° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="197.85" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 155.43,138.38 A 24,24 0 0 1 124.57,138.38" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="197.85" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="82.15" y1="188.94" x2="140" y2="30" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 145.13,44.1 A 15,15 0 0 1 134.87,44.1" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="197.85" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="179.85" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="90.15" y="192.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="140" y="154" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">140°</text><text x="140" y="56" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In ʼn sirkel met middelpunt O onderspan koord AB ʼn hoek van (6x − 10)° by die middelpunt en ∠ACB = (2x + 15)° by punt C op die omtrek (dieselfde kant). Bepaal x, en bepaal dan ∠ACB.', checkMode: 'auto', correctAnswer: '20,55', correctAnswers: ['20,55', '20,55°', 'x=20,55°'], answer: 'x = 20, ∠ACB = 55°', explanation: 'Hoek by middelpunt = 2 × hoek by omtrek:\n(6x − 10)° = 2(2x + 15)°.\n6x − 10 = 4x + 30.\n2x = 40.\nx = 20.\n∠ACB = 2(20) + 15 = 55° ✓ (toets: hoek by middelpunt = 6(20)−10=110°, en 2×55°=110° ✓)', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="212.81" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="67.19" y2="172.9" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 159.42,134.11 A 24,24 0 0 1 120.58,134.11" fill="none" stroke="#dc2626" stroke-width="2"/><line x1="212.81" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><line x1="67.19" y1="172.9" x2="140" y2="30" stroke="#ea580c" stroke-width="2.5"/><path d="M 146.81,43.37 A 15,15 0 0 1 133.19,43.37" fill="none" stroke="#16a34a" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="212.81" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="194.81" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="67.19" cy="172.9" r="2.5" fill="#0f1f3d"/><text x="75.19" y="176.9" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="140" cy="30" r="2.5" fill="#0f1f3d"/><text x="134" y="18" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="154" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6x−10)°</text><text x="140" y="56" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+15)°</text></svg>' },

        // Blok 3 — Hoeke in dieselfde segment + hoek in ʼn halfsirkel
        { difficulty: 'Easy', question: 'In ʼn sirkel lê punte C en D op dieselfde boog relatief tot koord AB. ∠ACB = 61°. Bepaal ∠ADB.', checkMode: 'auto', correctAnswer: '61', correctAnswers: ['61', '61°', '61 degrees'], answer: '61°', explanation: 'C en D lê in dieselfde segment relatief tot koord AB, dus is hoeke in dieselfde segment gelyk.\n∠ADB = ∠ACB = 61° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">61°</text><text x="86.15" y="210.94" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'AB is ʼn middellyn van ʼn sirkel en P is ʼn punt op die omtrek. ∠PAB = 42°. Bepaal ∠APB, en bepaal dan ∠PBA.', checkMode: 'auto', correctAnswer: '90,48', correctAnswers: ['90,48', '90°,48°', '90°, 48°'], answer: '∠APB = 90°, ∠PBA = 48°', explanation: 'Aangesien AB ʼn middellyn is, ∠APB = 90° (hoek in ʼn halfsirkel).\nIn driehoek APB: 42° + 90° + ∠PBA = 180°.\n∠PBA = 180° − 90° − 42° = 48° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 204.18,71.39 L 207.19,80.93 L 216.73,77.92" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="221.72" y="58.379999999999995" font-size="13" fill="#0f1f3d" font-weight="700">P</text><path d="M 63.35,115.79 A 14,14 0 0 1 64,120" fill="none" stroke="#2563eb" stroke-width="2"/><text x="76" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">42°</text><text x="207.72" y="92.38" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Punte A, B, C en D lê op ʼn sirkel, met C en D op dieselfde boog relatief tot koord AB. ∠ACB = (4x − 6)° en ∠ADB = (2x + 18)°. Bepaal x, en bepaal dan ∠ACB.', checkMode: 'auto', correctAnswer: '12,42', correctAnswers: ['12,42', '12,42°', 'x=12,42°'], answer: 'x = 12, ∠ACB = 42°', explanation: 'Hoeke in dieselfde segment is gelyk: 4x − 6 = 2x + 18.\n2x = 24.\nx = 12.\n∠ACB = 4(12) − 6 = 42° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="192.9" y2="47.19" stroke="#ea580c" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="192.9" y1="47.19" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="87.1" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="192.9" y1="47.19" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5" stroke-dasharray="4,3"/><path d="M 163.74,191.33 A 15,15 0 0 1 172.87,189.72" fill="none" stroke="#2563eb" stroke-width="2"/><path d="M 82.78,170.95 A 18,18 0 0 1 93.23,174.76" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="87.1" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="69.1" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="192.9" cy="47.19" r="2.5" fill="#0f1f3d"/><text x="200.9" y="53.19" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="178.78" y="198.57" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="64.15" y="178.94" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="170.78" y="228.57" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x−6)°</text><text x="86.15" y="210.94" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+18)°</text></svg>' },
        { difficulty: 'Hard', question: 'AB is ʼn middellyn van ʼn sirkel met AB = 17 cm. P is ʼn punt op die omtrek met AP = 8 cm. Bepaal ∠APB, en bepaal dan die lengte van BP.', checkMode: 'auto', correctAnswer: '90,15', correctAnswers: ['90,15', '90°,15cm', '90°, 15 cm'], answer: '∠APB = 90°, BP = 15 cm', explanation: 'AB is ʼn middellyn, dus ∠APB = 90° (hoek in ʼn halfsirkel).\nDriehoek APB is reghoekig by P: BP² = AB² − AP² = 17² − 8² = 289 − 64 = 225.\nBP = √225 = 15 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#ea580c" stroke-width="2.5"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><line x1="50" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><line x1="230" y1="120" x2="213.3" y2="93.32" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 203.43,94.93 L 208.74,103.41 L 218.61,101.8" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="2.5" fill="#0f1f3d"/><text x="32" y="124" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="230" cy="120" r="2.5" fill="#0f1f3d"/><text x="238" y="124" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="213.3" cy="93.32" r="2.5" fill="#0f1f3d"/><text x="221.3" y="83.32" font-size="13" fill="#0f1f3d" font-weight="700">P</text><text x="109.65" y="102.66" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">AP = 8 cm</text><text x="140" y="140" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">AB = 17 cm</text><text x="247.65" y="100.66" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 4 — Koordevierhoek: teenoorstaande hoeke / buitehoek
        { difficulty: 'Easy', question: 'In koordevierhoek ABCD is ∠A = 97°. Bepaal ∠C.', checkMode: 'auto', correctAnswer: '83', correctAnswers: ['83', '83°', '83 degrees'], answer: '83°', explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr.\n∠C = 180° − 97° = 83° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">97°</text><text x="198.26" y="141.2" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'In koordevierhoek ABCD is ∠B = 64°. Bepaal ∠D.', checkMode: 'auto', correctAnswer: '116', correctAnswers: ['116', '116°', '116 degrees'], answer: '116°', explanation: 'Teenoorstaande hoeke van ʼn koordevierhoek is supplementêr.\n∠D = 180° − 64° = 116° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="100.15" y="167.49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">64°</text><text x="179.85" y="72.51" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'JKLM is ʼn koordevierhoek met ∠JKL = 109°. Sy LM word verby M verleng na punt T, en vorm buitehoek ∠JMT. Bepaal ∠JMT, en noem die stelling wat gebruik is.', checkMode: 'auto', correctAnswer: '109', correctAnswers: ['109', '109°', '109 degrees'], answer: '109°', explanation: 'Die buitehoek van ʼn koordevierhoek is gelyk aan die teenoorstaande binnehoek.\n∠JMT = ∠JKL = 109° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="62.06" y1="165" x2="170.78" y2="204.57" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170.78" y1="204.57" x2="208.94" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="208.94" y1="62.15" x2="71.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="26.06" y2="62.15" stroke="#0f1f3d" stroke-width="2.5"/><line x1="26.06" y1="62.15" x2="62.06" y2="165" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="62.06" cy="165" r="2.5" fill="#0f1f3d"/><text x="54.06" y="185" font-size="13" fill="#0f1f3d" font-weight="700">J</text><circle cx="170.78" cy="204.57" r="2.5" fill="#0f1f3d"/><text x="164.78" y="192.57" font-size="13" fill="#0f1f3d" font-weight="700">K</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="56.15" font-size="13" fill="#0f1f3d" font-weight="700">L</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="63.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">M</text><circle cx="26.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="16.06" y="50.15" font-size="13" fill="#0f1f3d" font-weight="700">T</text><text x="161.2" y="178.26" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">109°</text><text x="54.85" y="77.02" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'In koordevierhoek ABCD is ∠A = (4x − 20)° en ∠C = (2x + 50)°. Bepaal x, en bepaal dan ∠A en ∠C.', checkMode: 'auto', correctAnswer: '25,80,100', correctAnswers: ['25,80,100', '25,80°,100°', 'x=25,80°,100°'], answer: 'x = 25, ∠A = 80°, ∠C = 100°', explanation: 'Teenoorstaande hoeke is supplementêr: (4x − 20) + (2x + 50) = 180.\n6x + 30 = 180.\nx = 25.\n∠A = 4(25) − 20 = 80°, ∠C = 2(25) + 50 = 100°. Toets: 80° + 100° = 180° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="82.15" y2="188.94" stroke="#0f1f3d" stroke-width="2.5"/><line x1="82.15" y1="188.94" x2="224.57" y2="150.78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="224.57" y1="150.78" x2="197.85" y2="51.06" stroke="#0f1f3d" stroke-width="2.5"/><line x1="197.85" y1="51.06" x2="55.43" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="89.22" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="82.15" cy="188.94" r="2.5" fill="#0f1f3d"/><text x="76.15" y="206.94" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="224.57" cy="150.78" r="2.5" fill="#0f1f3d"/><text x="234.57" y="156.78" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="197.85" cy="51.06" r="2.5" fill="#0f1f3d"/><text x="201.85" y="39.06" font-size="13" fill="#0f1f3d" font-weight="700">D</text><text x="81.74" y="98.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4x−20)°</text><text x="198.26" y="141.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(2x+50)°</text></svg>' },

        // Blok 5 — Raaklyne: gelyke raaklyne / raaklyn-koordhoek (oorstaande segment)
        { difficulty: 'Easy', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek. As PA = 19 cm, bepaal PB.', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19cm', '19 cm'], answer: '19 cm', explanation: 'Raaklynstukke vanaf ʼn eksterne punt is ewe lank.\nPB = PA = 19 cm ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><path d="M 201.26,57.46 L 194.37,63.25 L 202.05,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">PA = 19 cm</text><text x="194.47" y="41.08" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Easy', question: 'ʼn Raaklyn by punt T maak ʼn hoek van 71° met koord TC. Punt B lê in die oorstaande segment. Bepaal ∠TBC, en noem die stelling wat gebruik is.', checkMode: 'auto', correctAnswer: '71', correctAnswers: ['71', '71°', '71 degrees'], answer: '71°', explanation: 'Volgens die raaklyn-koordstelling (stelling van die oorstaande segment) is die ingeskrewe hoek in die oorstaande segment gelyk aan die raaklyn-koordhoek.\n∠TBC = 71° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="210" x2="210" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="210" x2="55.43" y2="89.22" stroke="#ea580c" stroke-width="2.5"/><line x1="140" y1="210" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55.43" y1="89.22" x2="224.57" y2="89.22" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 118,210 A 22,22 0 0 1 127.38,191.98" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 215.97,101.51 A 15,15 0 0 1 209.57,89.22" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="210" r="2.5" fill="#0f1f3d"/><text x="146" y="226" font-size="13" fill="#0f1f3d" font-weight="700">T</text><circle cx="55.43" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="35.43" y="93.22" font-size="13" fill="#0f1f3d" font-weight="700">C</text><circle cx="224.57" cy="89.22" r="2.5" fill="#0f1f3d"/><text x="234.57" y="83.22" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="110" y="200" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">71°</text><text x="230.57" y="71.22" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek, met ∠APB = 38°. Aangesien PA = PB, is driehoek PAB gelykbenig. Bepaal ∠PAB.', checkMode: 'auto', correctAnswer: '71', correctAnswers: ['71', '71°', '71 degrees'], answer: '71°', explanation: 'Aangesien PA = PB (gelyke raaklyne vanaf ʼn eksterne punt), is driehoek PAB gelykbenig, dus ∠PAB = ∠PBA.\n∠PAB = (180° − 38°) ÷ 2 = 142° ÷ 2 = 71° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="71.06" y1="62.15" x2="208.94" y2="62.15" stroke="#ea580c" stroke-width="2.5"/><path d="M 124.64,29.39 A 18,18 0 0 0 155.36,29.39" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 83.86,54.33 A 15,15 0 0 1 86.06,62.15" fill="none" stroke="#ea580c" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="68.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="140" y="54" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">38°</text><text x="96.09" y="55.11" font-size="11" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Raaklyne PA en PB word vanaf eksterne punt P aan ʼn sirkel getrek, en raak dit by A en B. ∠APB = 64°. C is ʼn punt op die hoofboog AB. Bepaal ∠PAB, en gebruik dan die raaklyn-koordstelling om ∠ACB te bepaal.', checkMode: 'auto', correctAnswer: '58,58', correctAnswers: ['58,58', '58°,58°', '58°, 58°'], answer: '∠PAB = 58°, ∠ACB = 58°', explanation: 'Aangesien PA = PB, is driehoek PAB gelykbenig: ∠PAB = (180° − 64°) ÷ 2 = 58°.\n∠PAB is die raaklyn-koordhoek by A vir koord AB. Volgens die raaklyn-koordstelling, ∠ACB = ∠PAB = 58° ✓', diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="15" x2="66.28" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="15" x2="213.72" y2="68.38" stroke="#16a34a" stroke-width="2.5"/><line x1="66.28" y1="68.38" x2="213.72" y2="68.38" stroke="#ea580c" stroke-width="2.5" stroke-dasharray="4,3"/><line x1="66.28" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.72" y1="68.38" x2="163.29" y2="206.93" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 127.04,24.38 A 16,16 0 0 0 152.96,24.38" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 155.26,195.46 A 14,14 0 0 1 168.08,193.77" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="15" r="2.5" fill="#0f1f3d"/><text x="134" y="7" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="66.28" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="46.28" y="74.38" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="213.72" cy="68.38" r="2.5" fill="#0f1f3d"/><text x="223.72" y="76.38" font-size="13" fill="#0f1f3d" font-weight="700">B</text><circle cx="163.29" cy="206.93" r="2.5" fill="#0f1f3d"/><text x="157.29" y="226.93" font-size="13" fill="#0f1f3d" font-weight="700">C</text><text x="140" y="45" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">64°</text><text x="163.29" y="192.93" font-size="12" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },

        // Blok 6 — Riderbewys (CAPS probleemoplossings-kognitiewe vlak)
        { difficulty: 'Hard', question: 'ʼn Sirkel het middelpunt O en radius 9 cm. PA en PB is raaklyne vanaf eksterne punt P, wat die sirkel by A en B raak, met PA = 12 cm. Bewys dat OP = 15 cm.', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15cm', '15 cm'], answer: '15 cm', explanation: `${gr('PB = PA = 12 cm')} (gelyke raaklyne vanaf ʼn eksterne punt). Aangesien ${bl('OA ⊥ PA')} (raaklyn ⊥ radius), is △OAP reghoekig by A, dus ${re('OP² = OA² + AP² = 9² + 12² = 225')}, wat ${re('OP = 15 cm')} gee.` + proofTable([
          ['OA ⊥ PA', 'Raaklyn is loodreg op die radius by die raakpunt'],
          ['△OAP is reghoekig by A', 'Vanuit OA ⊥ PA hierbo'],
          ['OP² = OA² + AP²', 'Stelling van Pythagoras in reghoekige △OAP'],
          ['OP² = 9² + 12² = 81 + 144 = 225', 'Vervang OA = 9 cm (radius) en AP = 12 cm (gegee)'],
          ['∴ OP = √225 = 15 cm', 'Trek die vierkantswortel'],
        ]), diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="20" x2="71.06" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="20" x2="208.94" y2="62.15" stroke="#16a34a" stroke-width="2.5"/><line x1="140" y1="120" x2="71.06" y2="62.15" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="120" x2="140" y2="20" stroke="#374151" stroke-width="1.6" stroke-dasharray="4,3"/><path d="M 78.74,57.46 L 85.63,63.25 L 77.95,67.94" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="114" font-size="13" fill="#0f1f3d" font-weight="700">O</text><circle cx="140" cy="20" r="2.5" fill="#0f1f3d"/><text x="134" y="10" font-size="13" fill="#0f1f3d" font-weight="700">P</text><circle cx="71.06" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="51.06" y="66.15" font-size="13" fill="#0f1f3d" font-weight="700">A</text><circle cx="208.94" cy="62.15" r="2.5" fill="#0f1f3d"/><text x="218.94" y="72.15" font-size="13" fill="#0f1f3d" font-weight="700">B</text><text x="85.53" y="39.08" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">PA = 12 cm</text><text x="90" y="95" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">OA = 9 cm</text></svg>' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die Graad 12-sirkelstellings bemeester — loodlyn wat ʼn koord halveer, hoek by die middelpunt, hoeke in dieselfde segment, koordevierhoeke, en raaklynstellings.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige vrae oor die koordevierhoek- of raaklyn-koordstelling weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde van elke sirkelstelling weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — GEKOMBINEERDE RIDERS: SIRKELS EN GELYKVORMIGHEID (4 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4 — Gekombineerde Riders',
      questions: [
        {
          difficulty: 'Hard',
          question: 'PT is ʼn raaklyn aan ʼn sirkel by T. PAB is ʼn snylyn vanaf die eksterne punt P, wat die sirkel by A (nader aan P) en B (verder van P) sny. PA = 4 cm en AB = 12 cm. Bewys dat PT² = PA · PB, en bepaal dus die lengte van PT.',
          answer: '8 cm',
          checkMode: 'auto',
          correctAnswer: '8',
          correctAnswers: ['8', '8cm', '8 cm'],
          explanation: `Trek TA en TB. In ${bl('△PTA')} en ${bl('△PBT')} is ${bl('∠P')} gemeenskaplik, en ${re('∠PTA = ∠PBT')} (raaklyn-koordhoek is gelyk aan die ingeskrewe hoek in die oorstaande segment), dus ${gr('△PTA ||| △PBT')} (AA). Daarom ${or('PT² = PA · PB')}.` + proofTable([
            ['∠P is gemeenskaplik aan △PTA en △PBT', 'Gemeenskaplike hoek'],
            ['∠PTA = ∠PBT', 'Raaklyn-koordhoek is gelyk aan die ingeskrewe hoek in die oorstaande segment'],
            ['∴ △PTA ||| △PBT', 'Twee pare hoeke gelyk (AA)'],
            ['PT/PB = PA/PT, dus PT² = PA · PB', 'Ooreenstemmende sye van gelykvormige driehoeke is eweredig'],
            ['PB = PA + AB = 4 + 12 = 16 cm', 'Gegee PA = 4 cm, AB = 12 cm'],
            ['PT² = 4 × 16 = 64', 'Vervang PA = 4 cm en PB = 16 cm'],
            ['∴ PT = 8 cm', 'Trek die vierkantswortel'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="140" y1="120" x2="140" y2="210" stroke="#2563eb" stroke-width="2"/><line x1="140" y1="210" x2="240" y2="210" stroke="#16a34a" stroke-width="2.5"/><line x1="240" y1="210" x2="73.1" y2="59.79" stroke="#ea580c" stroke-width="2"/><path d="M 140,201 L 149,201 L 149,210" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="146" y="124" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="start">O</text><circle cx="140" cy="210" r="3" fill="#0f1f3d"/><text x="136" y="228" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">T</text><circle cx="240" cy="210" r="3" fill="#0f1f3d"/><text x="246" y="226" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">P</text><circle cx="206.9" cy="180.21" r="3" fill="#0f1f3d"/><text x="220.9" y="182.21" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="73.1" cy="59.79" r="3" fill="#0f1f3d"/><text x="63.1" y="53.79" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><text x="230" y="150" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">PA = 4 cm</text><text x="140" y="110" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">AB = 12 cm</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ABCD is ʼn koordevierhoek. Diagonale AC en BD sny mekaar by E. AE = 6 cm, ED = 3 cm en BE = 8 cm. Bewys dat AE · EC = BE · ED, en bepaal dus die lengte van EC.',
          answer: '4 cm',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4cm', '4 cm'],
          explanation: `${bl('∠AED = ∠BEC')} (vertikaal-oorstaande hoeke) en ${re('∠ADE = ∠BCE')} (hoeke in dieselfde segment, albei onderspan koord AB), dus ${gr('△AED ||| △BEC')} (AA). Daarom ${or('AE · EC = BE · ED')}.` + proofTable([
            ['∠AED = ∠BEC', 'Vertikaal-oorstaande hoeke'],
            ['∠ADE = ∠BCE', 'Hoeke in dieselfde segment (onderspan koord AB vanaf dieselfde boog)'],
            ['∴ △AED ||| △BEC', 'Twee pare hoeke gelyk (AA)'],
            ['AE/BE = ED/EC, dus AE · EC = BE · ED', 'Ooreenstemmende sye van gelykvormige driehoeke is eweredig'],
            ['6 × EC = 8 × 3 = 24', 'Vervang AE = 6 cm, BE = 8 cm en ED = 3 cm'],
            ['∴ EC = 4 cm', 'Deel albei kante deur 6'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53.07" y1="96.71" x2="213.72" y2="171.62" stroke="#ea580c" stroke-width="2"/><line x1="155.63" y1="31.37" x2="66.28" y2="171.62" stroke="#2563eb" stroke-width="2"/><line x1="53.07" y1="96.71" x2="155.63" y2="31.37" stroke="#0f1f3d" stroke-width="1.6"/><line x1="155.63" y1="31.37" x2="213.72" y2="171.62" stroke="#0f1f3d" stroke-width="1.6"/><line x1="213.72" y1="171.62" x2="66.28" y2="171.62" stroke="#0f1f3d" stroke-width="1.6"/><line x1="66.28" y1="171.62" x2="53.07" y2="96.71" stroke="#0f1f3d" stroke-width="1.6"/><circle cx="53.07" cy="96.71" r="3" fill="#0f1f3d"/><text x="39.07" y="98.71" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="155.63" cy="31.37" r="3" fill="#0f1f3d"/><text x="157.63" y="21.37" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="213.72" cy="171.62" r="3" fill="#0f1f3d"/><text x="227.72" y="175.62" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="66.28" cy="171.62" r="3" fill="#0f1f3d"/><text x="52.28" y="175.62" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="100.05" cy="118.62" r="2.2" fill="#16a34a"/><text x="96.05" y="132.62" font-size="12" fill="#16a34a" font-weight="700" text-anchor="end">E</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'AB is ʼn middellyn van ʼn sirkel met middelpunt O, en C is ʼn punt op die sirkel. CD ⊥ AB, met D op AB. AD = 2 cm en DB = 8 cm. Bewys dat CD² = AD · DB, en bepaal dus die lengte van CD.',
          answer: '4 cm',
          checkMode: 'auto',
          correctAnswer: '4',
          correctAnswers: ['4', '4cm', '4 cm'],
          explanation: `${re('∠ACB = 90°')} (hoek in ʼn halfsirkel), dus ${gr('△ACD ||| △ABC')} en ${gr('△CBD ||| △ABC')} (AA, met die regte hoek by D en die gemeenskaplike hoeke by A en B onderskeidelik) — daarom ook ${gr('△ACD ||| △CBD')}. Dit gee ${or('CD² = AD · DB')}.` + proofTable([
            ['∠ACB = 90°', 'Hoek in ʼn halfsirkel (AB is ʼn middellyn)'],
            ['△ACD ||| △ABC en △CBD ||| △ABC', 'AA: regte hoek by D (CD ⊥ AB) plus ʼn gemeenskaplike hoek by A (of B) in elke geval'],
            ['∴ △ACD ||| △CBD', 'Albei is gelykvormig aan △ABC, dus gelykvormig aan mekaar'],
            ['AD/CD = CD/DB, dus CD² = AD · DB', 'Ooreenstemmende sye van gelykvormige driehoeke is eweredig'],
            ['CD² = 2 × 8 = 16', 'Vervang AD = 2 cm en DB = 8 cm'],
            ['∴ CD = 4 cm', 'Trek die vierkantswortel'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="120" x2="230" y2="120" stroke="#2563eb" stroke-width="2"/><line x1="50" y1="120" x2="213.72" y2="68.38" stroke="#0f1f3d" stroke-width="1.8"/><line x1="213.72" y1="68.38" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.8"/><line x1="213.72" y1="68.38" x2="213.72" y2="120" stroke="#ea580c" stroke-width="2"/><path d="M 213.72,111 L 204.72,111 L 204.72,120" fill="none" stroke="#0f1f3d" stroke-width="1.8"/><circle cx="50" cy="120" r="3" fill="#0f1f3d"/><text x="46" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="230" cy="120" r="3" fill="#0f1f3d"/><text x="234" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="213.72" cy="68.38" r="3" fill="#0f1f3d"/><text x="221.72" y="62.38" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><circle cx="213.72" cy="120" r="3" fill="#0f1f3d"/><text x="225.72" y="136" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="140" cy="120" r="3" fill="#0f1f3d"/><text x="136" y="138" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">O</text><text x="180" y="138" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">AD = 2 cm</text><text x="224" y="150" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">DB = 8 cm</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ABCD is ʼn koordevierhoek. Sye AB en DC word verleng om by die eksterne punt E te ontmoet, met A tussen E en B, en D tussen E en C. EA = 3 cm, AB = 5 cm en ED = 4 cm. Bewys dat △EBC ||| △EDA, en bepaal dus die lengte van EC.',
          answer: '6 cm',
          checkMode: 'auto',
          correctAnswer: '6',
          correctAnswers: ['6', '6cm', '6 cm'],
          explanation: `${bl('∠BEC = ∠DEA')} is gemeenskaplik aan ${bl('△EBC')} en ${bl('△EDA')}, en ${re('∠EBC = ∠EDA')} (albei gelyk aan ${re('180° − ∠ADC')}, deur die koordevierhoek se teenoorstaande hoeke en die reguit lyne EAB, EDC te gebruik), dus ${gr('△EBC ||| △EDA')} (AA). Daarom ${or('EA · EB = ED · EC')}.` + proofTable([
            ['∠BEC = ∠DEA', 'Gemeenskaplike hoek (E, A, B lê op ʼn reguit lyn en E, D, C lê op ʼn reguit lyn)'],
            ['∠EBC = ∠ABC', 'E, A, B lê op ʼn reguit lyn (A tussen E en B), dus straal BE = straal BA'],
            ['∠ABC + ∠ADC = 180°', 'Teenoorstaande hoeke van koordevierhoek ABCD is supplementêr'],
            ['∠EDA + ∠ADC = 180°', 'E, D, C lê op ʼn reguit lyn (D tussen E en C), dus is ∠EDA en ∠ADC hoeke op ʼn reguit lyn'],
            ['∴ ∠EBC = ∠ABC = 180° − ∠ADC = ∠EDA', 'Deur die twee vergelykings hierbo te kombineer'],
            ['∴ △EBC ||| △EDA', 'Twee pare hoeke gelyk (AA)'],
            ['EB/ED = EC/EA, dus EA · EB = ED · EC', 'Ooreenstemmende sye van gelykvormige driehoeke is eweredig'],
            ['EB = EA + AB = 3 + 5 = 8 cm', 'Gegee EA = 3 cm, AB = 5 cm'],
            ['3 × 8 = 4 × EC', 'Vervang EA = 3 cm, EB = 8 cm en ED = 4 cm'],
            ['∴ EC = 6 cm', 'Deel albei kante deur 4'],
          ]),
          diagramSvg: '<svg viewBox="0 0 280 240" xmlns="http://www.w3.org/2000/svg"><circle cx="140" cy="120" r="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="210" x2="146.87" y2="30.26" stroke="#ea580c" stroke-width="2"/><line x1="20" y1="210" x2="229.42" y2="130.22" stroke="#2563eb" stroke-width="2"/><line x1="57.75" y1="156.53" x2="80.05" y2="187.12" stroke="#0f1f3d" stroke-width="1.6"/><line x1="146.87" y1="30.26" x2="229.42" y2="130.22" stroke="#0f1f3d" stroke-width="1.6"/><circle cx="20" cy="210" r="3" fill="#0f1f3d"/><text x="16" y="226" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">E</text><circle cx="57.75" cy="156.53" r="3" fill="#0f1f3d"/><text x="43.75" y="158.53" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">A</text><circle cx="146.87" cy="30.26" r="3" fill="#0f1f3d"/><text x="148.87" y="22.26" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">B</text><circle cx="80.05" cy="187.12" r="3" fill="#0f1f3d"/><text x="76.05" y="203.12" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">D</text><circle cx="229.42" cy="130.22" r="3" fill="#0f1f3d"/><text x="243.42" y="134.22" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="middle">C</text><text x="60" y="220" font-size="10" fill="#ea580c" font-weight="700" text-anchor="middle">EA = 3 cm</text><text x="50" y="135" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">ED = 4 cm</text></svg>',
        },
      ],
      scoreMessages: [
        { minScore: 4, message: 'Uitstekend! Jy het dit reggekry om sirkelstellings met gelykvormigheid en eweredigheid te kombineer — presies die meerstap-redenering wat Graad 12 Vraestel 2-riders vereis.' },
        { minScore: 3, message: 'Goeie werk! Hersien die rider wat jy gemis het, en let noukeurig op watter sirkelstelling die ooreenstemmende hoek verskaf voordat jy die gelykvormigheidstelling skryf.' },
        { minScore: 2, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde hierbo weer deur — fokus daarop om eers die sirkelstelling raak te sien, dan die gedeelde hoek, voordat jy die verhouding skryf.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die drie uitgewerkte voorbeelde, en probeer dan hierdie stel weer.' },
      ],
    },
  ],
}
