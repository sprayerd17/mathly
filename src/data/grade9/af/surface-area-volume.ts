import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (measurement roles) ──────────────────────────────────────
// radius / formula used    → blue   (#2563eb)
// height / unit conversion → orange (#ea580c)
// volume / comparison      → green  (#16a34a)
// surface area             → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Oppervlakte en Volume',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SURFACE AREA AND VOLUME OF CYLINDERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'cylinders-surface-area-volume',
      title: 'Oppervlakte en Volume van Silinders',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons brei ons oppervlakte- en volumeberekeninge uit na <strong>silinders</strong>. Die ${gr('volume')} word gevind deur die oppervlakte van die sirkelbasis met die ${or('hoogte')} te vermenigvuldig: ${gr('V')} = π${bl('r')}²${or('h')}. Die ${re('oppervlakte')} tel die twee sirkelvormige eindvlakke by die geboë oppervlak, wat uitrol tot ʼn reghoek: ${re('O')} = 2π${bl('r')}² + 2π${bl('r')}${or('h')}.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hoogte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volume')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('oppervlakte')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Volume')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('V')} = π${bl('r')}²${or('h')}<br><span style="color:#6b7280;font-size:13px;">oppervlakte van sirkelbasis × hoogte</span></p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Oppervlakte')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('O')} = 2π${bl('r')}² + 2π${bl('r')}${or('h')}<br><span style="color:#6b7280;font-size:13px;">twee sirkelvormige eindvlakke + geboë oppervlak</span></p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die geboë oppervlak ʼn reghoek is</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy langs die sykant van ʼn silinder sny en dit oprol, kry jy ʼn reghoek. Die breedte daarvan is gelyk aan die omtrek (2π${bl('r')}) en die ${or('hoogte')} daarvan is gelyk aan ${or('h')}. Oppervlakte = 2π${bl('r')}${or('h')}, wat die tweede term in die oppervlakteformule is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Silinder het radius 4 cm en hoogte 10 cm. Vind die volume daarvan tot 2 desimale plekke.',
          answer: `${gr('Volume')} = ${gr('502,4')} cm³`,
          steps: [
            `Skryf die formule: ${gr('V')} = π${bl('r')}²${or('h')}`,
            `Vervang: ${gr('V')} = 3,14 × ${bl('4')}² × ${or('10')} = 3,14 × ${bl('16')} × ${or('10')}`,
            `Bereken: 3,14 × 16 × 10 = ${gr('502,4')} cm³`,
            `<strong>Antwoord:</strong> ${gr('Volume')} = ${gr('502,4')} cm³`,
          ],
        },
        {
          question: 'Vind die oppervlakte van dieselfde silinder (radius 4 cm, hoogte 10 cm).',
          answer: `${re('Oppervlakte')} = ${re('351,68')} cm²`,
          steps: [
            `Skryf die formule: ${re('O')} = 2π${bl('r')}² + 2π${bl('r')}${or('h')}`,
            `Vervang: ${re('O')} = 2 × 3,14 × ${bl('4')}² + 2 × 3,14 × ${bl('4')} × ${or('10')}`,
            `Bereken elke term: 2 × 3,14 × ${bl('16')} = 100,48 &nbsp;en&nbsp; 2 × 3,14 × ${bl('4')} × ${or('10')} = 251,2`,
            `Tel die terme bymekaar: 100,48 + 251,2 = ${re('351,68')} cm²`,
            `<strong>Antwoord:</strong> ${re('Oppervlakte')} = ${re('351,68')} cm²`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy — volume of cylinder ─────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Silinder het radius 5 cm en hoogte 12 cm. Vind die volume daarvan tot 2 desimale plekke.',
          answer: '942 cm³',
          checkMode: 'auto',
          correctAnswer: '942cm³',
          correctAnswers: ['942cm³', '942', '942 cm³', '942.00cm³', '942.00', '942,00cm³', '942,00'],
          explanation: 'V = πr²h = 3,14 × 5² × 12 = 3,14 × 25 × 12 = 942 cm³',
        },

        // ── Q2 Medium — surface area of cylinder ─────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die oppervlakte van ʼn silinder met radius 3 cm en hoogte 8 cm.',
          answer: '207,24 cm²',
          checkMode: 'auto',
          correctAnswer: '207.24cm²',
          correctAnswers: ['207.24cm²', '207.24', '207.24 cm²', '207,24cm²', '207,24', '207,24 cm²'],
          explanation: 'O = 2πr² + 2πrh = 2 × 3,14 × 9 + 2 × 3,14 × 3 × 8 = 56,52 + 150,72 = 207,24 cm²',
        },

        // ── Q3 Hard — check Sipho's calculation ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho bereken die volume van ʼn silinder met radius 6 cm en hoogte 10 cm en kry 1 130,4 cm³. Gaan sy antwoord na.',
          answer: 'Volume = 3,14 × 36 × 10 = 1 130,4 cm³. Hy is korrek.',
          checkMode: 'self',
        },

        // ── Q13 Hard — surface area with decimal radius ───────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Silinder het radius 2,5 cm en hoogte 8 cm. Vind die oppervlakte daarvan tot 2 desimale plekke.',
          answer: '164,93 cm²',
          checkMode: 'auto',
          correctAnswer: '164.93cm²',
          correctAnswers: ['164.93cm²', '164.93', '164.93 cm²', '164,93cm²', '164,93', '164,93 cm²'],
          explanation: 'O = 2πr² + 2πrh = 2 × π × 6,25 + 2 × π × 2,5 × 8 = 39,27 + 125,66 = 164,93 cm² (met π ≈ 3,14159)',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the volume and surface area formulae for cylinders, showing how the curved surface unwraps into a rectangle with width equal to the circumference" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a cylinder with radius and height labelled in blue and orange, showing the net unwrapped into two circles and a rectangle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — SOLVING PROBLEMS USING FORMULAE AND UNIT CONVERSIONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'formulae-unit-conversions',
      title: 'Probleme Oplos deur Formules en Eenheidomskakelings te Gebruik',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons gebruik toepaslike formules en omskakelings tussen SI-eenhede om werklike-lewe probleme op te los rondom die ${re('oppervlakte')}, ${gr('volume')} en kapasiteit van kubusse, reghoekige prismas, driehoekige prismas en silinders.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('formule gebruik')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eenheidomskakeling')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vergelyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutel SI-eenheidomskakelings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Volume → Kapasiteit')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">1 m³ = ${or('1 000 liter')}<br>1 liter = 1 000 cm³<br>1 cm³ = ${or('1 ml')}</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Volumeformules')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Prisma: ${bl('V')} = basisoppervlakte × lengte<br>Silinder: ${bl('V')} = π${bl('r')}²h</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Drie-stap strategie</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1</strong> — Identifiseer die vorm en skryf die ${bl('formule')} neer.<br><strong>Stap 2</strong> — Vervang waardes en bereken die volume of oppervlakte.<br><strong>Stap 3</strong> — Pas die ${or('eenheidomskakeling')} toe om die vereiste eenheid te kry.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Silindriese watertenk het radius 1,2 m en hoogte 2 m. Vind die kapasiteit daarvan in liter tot 2 desimale plekke.',
          answer: `Kapasiteit = ${gr('9 043,2')} liter`,
          steps: [
            `${bl('Formule:')} ${bl('V')} = π${bl('r')}²h = 3,14 × ${bl('1,2')}² × 2`,
            `Bereken: 3,14 × ${bl('1,44')} × 2 = ${gr('9,0432')} m³`,
            `${or('Skakel om na liter:')} 9,0432 × 1 000 = ${gr('9 043,2')} liter`,
            `<strong>Antwoord:</strong> Kapasiteit = ${gr('9 043,2')} liter`,
          ],
        },
        {
          question: 'Sipho vergelyk ʼn driehoekige prisma (driehoek-basisoppervlakte 15 cm², lengte 20 cm) met ʼn silinder (radius 3 cm, hoogte 25 cm) volgens volume. Watter een het meer volume?',
          answer: `Die ${gr('silinder')} het meer volume`,
          steps: [
            `${bl('Prismaformule:')} ${bl('V')} = basisoppervlakte × lengte = ${bl('15')} × 20 = ${gr('300')} cm³`,
            `${bl('Silinderformule:')} ${bl('V')} = πr²h = 3,14 × ${bl('9')} × 25 = ${gr('706,5')} cm³`,
            `${gr('Vergelyk:')} ${gr('706,5')} cm³ > ${gr('300')} cm³`,
            `<strong>Antwoord:</strong> Die ${gr('silinder')} het meer volume.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Easy — tank capacity ───────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Silindriese tenk het radius 1 m en hoogte 3 m. Vind die kapasiteit daarvan in liter.',
          answer: '9 420 liter',
          checkMode: 'auto',
          correctAnswer: '9420 litres',
          correctAnswers: ['9420 litres', '9420', '9 420 litres', '9 420', '9420 liter', '9 420 liter'],
          explanation: 'V = 3,14 × 1² × 3 = 9,42 m³. Skakel om: 9,42 × 1 000 = 9 420 liter',
        },

        // ── Q5 Medium — prism vs cylinder comparison ──────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Driehoekige prisma het basisoppervlakte 18 cm² en lengte 15 cm. ʼn Silinder het radius 4 cm en hoogte 20 cm. Watter een het meer volume?',
          answer: 'die silinder',
          checkMode: 'auto',
          correctAnswer: 'the cylinder',
          correctAnswers: ['the cylinder', 'cylinder', 'Cylinder', 'The cylinder', 'die silinder', 'silinder', 'Silinder', 'Die silinder'],
          explanation: 'Prisma: V = 18 × 15 = 270 cm³. Silinder: V = 3,14 × 16 × 20 = 1 004,8 cm³. Die silinder het meer volume.',
        },

        // ── Q11 Medium — convert cm³ to litres ───────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel ʼn silinder se volume van 4 500 cm³ om na liter.',
          answer: '4,5 liter',
          checkMode: 'auto',
          correctAnswer: '4.5 litres',
          correctAnswers: ['4.5 litres', '4.5', '4.5l', '4.5 l', '4,5 liter', '4,5', '4,5l', '4,5 l'],
          explanation: '1 liter = 1 000 cm³, dus 4 500 ÷ 1 000 = 4,5 liter',
        },

        // ── Q10 Hard — Thabo's pool ───────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo se silindriese swembad het radius 3,5 m en hoogte 1,5 m. Vind die kapasiteit daarvan in liter tot 2 desimale plekke.',
          answer: '57 727,5 liter',
          checkMode: 'auto',
          correctAnswer: '57727.5 litres',
          correctAnswers: ['57727.5 litres', '57727.5', '57 727.5 litres', '57 727.5', '57727,5 liter', '57727,5', '57 727,5 liter', '57 727,5'],
          explanation: 'V = 3,14 × 3,5² × 1,5 = 3,14 × 12,25 × 1,5 = 57,7275 m³. Skakel om: 57,7275 × 1 000 = 57 727,5 liter',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to apply volume formulae for prisms and cylinders and convert between SI units to solve real-life capacity problems" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram comparing a triangular prism and a cylinder side by side with labelled dimensions and calculated volumes, highlighting the unit conversion step" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — INVESTIGATING THE EFFECT OF DOUBLING DIMENSIONS ON VOLUME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'doubling-dimensions-volume',
      title: 'Ondersoek na die Effek van Dimensies Verdubbel op Volume',
      icon: '📐',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek hoe die verdubbeling van enige of al die dimensies van regte prismas en silinders hul ${gr('volume')} beïnvloed. Om al die lineêre dimensies te verdubbel, vermenigvuldig die volume met die skaalfaktor <strong>in die derdemag</strong>, aangesien volume met drie dimensies verband hou.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike dimensies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geskaleerde dimensies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('volumeverandering')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelverbande</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Skaalfaktor k — al die dimensies</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Nuwe volume = ${gr('k³')} × oorspronklike volume<br>Verdubbel al die dimensies → volume × ${gr('8')}<br>Verdriedubbel al die dimensies → volume × ${gr('27')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Skaleer net een dimensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Volume verander met die ${or('selfde faktor')} as daardie een dimensie, aangesien volume lineêr is in elke individuele dimensie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Radius teenoor hoogte in ʼn silinder</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat radius <strong>in die kwadraat</strong> in die silinderformule voorkom (π${bl('r')}²h), vergroot die verdubbeling van die ${bl('radius')} die volume met 2² = 4. Om net die hoogte te verdubbel, vergroot die volume slegs met 2. Hierdie twee bewerkings is <em>nie</em> gelykstaande nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Kubus het sye van 3 cm (volume = 27 cm³). Verdubbel die sye. Vind die nuwe volume en die skaalfaktor-verband.',
          answer: `Nuwe volume = ${gr('216')} cm³; volume het met faktor ${gr('8')} vergroot (= 2³)`,
          steps: [
            `${bl('Oorspronklik:')} sy = ${bl('3')} cm, volume = 3³ = ${bl('27')} cm³`,
            `${or('Nuwe sye:')} ${or('6')} cm (verdubbel vanaf 3)`,
            `${or('Nuwe volume:')} ${or('6')}³ = ${gr('216')} cm³`,
            `${gr('Volumeverandering:')} ${gr('216')} ÷ ${bl('27')} = ${gr('8')} = 2³ — dit bevestig dat die verdubbeling van al die dimensies die volume met die skaalfaktor in die derdemag vermenigvuldig.`,
            `<strong>Antwoord:</strong> Nuwe volume = ${gr('216')} cm³; faktor = ${gr('8')}`,
          ],
        },
        {
          question: 'Lerato het ʼn silinder met radius 2 cm en hoogte 5 cm. Verdriedubbel net die hoogte. Vergelyk die nuwe volume met die oorspronklike.',
          answer: `${bl('Oorspronklik')} = ${bl('62,8')} cm³; ${or('Nuut')} = ${gr('188,4')} cm³ — die volume het verdriedubbel`,
          steps: [
            `${bl('Oorspronklike volume:')} π${bl('r')}²h = 3,14 × ${bl('4')} × ${bl('5')} = ${bl('62,8')} cm³`,
            `${or('Nuwe hoogte:')} ${or('15')} cm (verdriedubbel vanaf 5)`,
            `${gr('Nuwe volume:')} 3,14 × ${bl('4')} × ${or('15')} = ${gr('188,4')} cm³`,
            `${gr('Verhouding:')} ${gr('188,4')} ÷ ${bl('62,8')} = ${gr('3')} — die volume het verdriedubbel, eweredig aan die enkele dimensie (hoogte) wat verander het.`,
            `<strong>Antwoord:</strong> Oorspronklik = ${bl('62,8')} cm³; Nuut = ${gr('188,4')} cm³ (verdriedubbel).`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q7 Medium — cube sides doubled ───────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Kubus het sye van 4 cm. Verdubbel die sye. Vind die nuwe volume.',
          answer: '512 cm³',
          checkMode: 'auto',
          correctAnswer: '512cm³',
          correctAnswers: ['512cm³', '512', '512 cm³'],
          explanation: 'Nuwe sy = 8 cm. Nuwe volume = 8³ = 512 cm³. (Oorspronklik = 4³ = 64 cm³; faktor = 512 ÷ 64 = 8 = 2³ ✓)',
        },

        // ── Q9 Medium — cylinder height tripled ──────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Silinder met radius 2 cm en hoogte 6 cm se hoogte word verdriedubbel. Vind die nuwe volume en vergelyk dit met die oorspronklike.',
          answer: 'Oorspronklike volume = 75,36 cm³. Nuwe volume (hoogte = 18 cm) = 226,08 cm³. Die volume het verdriedubbel.',
          checkMode: 'self',
        },

        // ── Q6 Hard — doubling radius vs height ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê om ʼn silinder se radius te verdubbel het dieselfde effek op volume as om die hoogte te verdubbel. Is sy korrek? Verduidelik.',
          answer: 'Nee — die verdubbeling van die radius vergroot die volume met ʼn faktor van 2² = 4 (aangesien radius in die kwadraat in die formule voorkom), terwyl die verdubbeling van die hoogte die volume slegs met ʼn faktor van 2 vergroot.',
          checkMode: 'self',
        },

        // ── Q8 Hard — find scale factor from volume ratio ─────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Kubus se volume vergroot van 8 cm³ na 216 cm³ nadat ʼn skaalfaktor op die sye toegepas is. Vind die skaalfaktor wat gebruik is.',
          answer: 'Volumeverhouding = 216 ÷ 8 = 27. Aangesien 27 = 3³, was die skaalfaktor wat op die sye toegepas is 3.',
          checkMode: 'self',
        },

        // ── Q12 Hard — doubling all three dimensions ──────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê die verdubbeling van al drie dimensies van ʼn reghoekige prisma (lengte, breedte, hoogte) vermenigvuldig die volume daarvan met 6. Is sy korrek? Verduidelik.',
          answer: 'Nee — die verdubbeling van al drie dimensies vermenigvuldig die volume met 2³ = 8, nie 6 nie, aangesien elk van die drie dimensies ʼn faktor van 2 bydra.',
          checkMode: 'self',
        },

        // ── Q14 Hard — cube with tripled sides ───────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho se kubus het ʼn volume van 64 cm³. As hy die sylengte verdriedubbel, vind die nuwe volume.',
          answer: 'Oorspronklike sy = 4 cm (aangesien 4³ = 64). Nuwe sy = 12 cm. Nuwe volume = 12³ = 1 728 cm³.',
          checkMode: 'self',
        },

        // ── Q15 Hard — cylinder radius halved ────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Silinder se radius word gehalveer terwyl die hoogte dieselfde bly. Die oorspronklike volume was 200 cm³. Vind die nuwe volume.',
          answer: 'Aangesien volume van radius in die kwadraat afhang, verminder die halvering van die radius die volume met ʼn faktor van (1/2)² = 1/4. Nuwe volume = 200 ÷ 4 = 50 cm³.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video investigating how doubling one or all dimensions of a prism or cylinder affects its volume, explaining the cubed scale factor relationship" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a small cube and a larger cube with sides doubled, shown side by side with volumes labelled, illustrating the 8x volume increase from doubling all three dimensions" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het oppervlakte en volume bemeester.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
