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
  grade: 12,
  subject: 'Mathematics',
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
        '<VideoPlaceholder label="Short video showing a visual overview of all key circle terms labelled on a circle — radius, chord, tangent, arc, cyclic quadrilateral — and demonstrating the angle at centre equals twice the angle at circumference" />',
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
        '<VideoPlaceholder label="Short video showing a chord with the perpendicular from the centre bisecting it — labelling the two equal half-chords and the right-angled triangle used for Pythagoras calculations" />',
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
        '<VideoPlaceholder label="Short video showing diagrams for all three angle theorems — angle at centre twice angle at circumference, equal angles in same segment, and angle in a semicircle — with each relevant angle highlighted in its colour" />',
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
        '<VideoPlaceholder label="Short video showing a labelled cyclic quadrilateral ABCD with opposite angle pairs highlighted in blue and orange, and an exterior angle highlighted in green, demonstrating both theorems" />',
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
        '<VideoPlaceholder label="Short video showing a tangent touching a circle — labelling the tangent line in green, the radius at the contact point in blue, equal tangent segments from an external point, and the tangent-chord angle in orange with the matching alternate segment angle" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy — angle at circumference (major arc) ─────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die diagram om die hoek ACB te bepaal wat by C op die hoofboog onderspan word.\n\n[DIAGRAM: A circle with centre O and radius 10 cm. Points A, B, C and D lie on the circumference. Angle AOB = 140° at the centre. C is on the major arc. D is on the minor arc. M is the midpoint of chord AB with OM perpendicular to AB. Chord AB = 12 cm.]',
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
      question: 'Gebruik die diagram om hoek BCD te bepaal.\n\n[DIAGRAM: Cyclic quadrilateral ABCD inscribed in a circle. Angle DAB = 95°. Angle ABC = 80°. Side AB extended beyond B to point E forming exterior angle CBE.]',
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
      question: 'Gebruik die diagram om PB te bepaal as PA = 9 cm.\n\n[DIAGRAM: A circle with external point P. Tangents PA and PB are drawn from P touching the circle at A and B respectively. Chord AB is drawn. Angle APB = 50°. Point C is on the major arc AB.]',
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
}
