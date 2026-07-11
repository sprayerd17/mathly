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

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-2):   Volume van 'n reghoekige prisma / kubus
    // Blok 2 (3-5):   Oppervlakte van 'n reghoekige prisma / kubus
    // Blok 3 (6-9):   Volume van 'n silinder
    // Blok 4 (10-12): Oppervlakte van 'n silinder
    // Blok 5 (13-15): Eenheidomskakelings (cm³ ↔ m³ ↔ liter)
    // Blok 6 (16-19): Saamgestelde vaste liggame en skalering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Volume van 'n reghoekige prisma / kubus (Easy)
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 8 cm, breedte 5 cm en hoogte 4 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '160cm³', correctAnswers: ['160cm³', '160', '160 cm³', '160cm^3', '160 cm^3'], answer: '160 cm³', explanation: 'V = lengte × breedte × hoogte = 8 × 5 × 4 = 160 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text></svg>'},
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 6 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '216cm³', correctAnswers: ['216cm³', '216', '216 cm³', '216cm^3', '216 cm^3'], answer: '216 cm³', explanation: 'V = sy³ = 6³ = 216 cm³' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 12 cm, breedte 6 cm en hoogte 5 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '360cm³', correctAnswers: ['360cm³', '360', '360 cm³', '360cm^3', '360 cm^3'], answer: '360 cm³', explanation: 'V = lengte × breedte × hoogte = 12 × 6 × 5 = 360 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},

        // Blok 2 — Oppervlakte van 'n reghoekige prisma / kubus (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Kubus het sye van 5 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '150cm²', correctAnswers: ['150cm²', '150', '150 cm²', '150cm^2', '150 cm^2'], answer: '150 cm²', explanation: 'O = 6 × sy² = 6 × 5² = 6 × 25 = 150 cm²' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 10 cm, breedte 4 cm en hoogte 3 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '164cm²', correctAnswers: ['164cm²', '164', '164 cm²', '164cm^2', '164 cm^2'], answer: '164 cm²', explanation: 'O = 2(lb + lh + bh) = 2(10×4 + 10×3 + 4×3) = 2(40 + 30 + 12) = 2(82) = 164 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">4 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 9 cm, breedte 6 cm en hoogte 4 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '228cm²', correctAnswers: ['228cm²', '228', '228 cm²', '228cm^2', '228 cm^2'], answer: '228 cm²', explanation: 'O = 2(lb + lh + bh) = 2(9×6 + 9×4 + 6×4) = 2(54 + 36 + 24) = 2(114) = 228 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},

        // Blok 3 — Volume van 'n silinder (Medium)
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 3 cm en hoogte 7 cm. Vind die volume daarvan tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '197.82cm³', correctAnswers: ['197.82cm³', '197.82', '197.82 cm³', '197,82cm³', '197,82', '197,82 cm³'], answer: '197,82 cm³', explanation: 'V = πr²h = 3,14 × 3² × 7 = 3,14 × 9 × 7 = 197,82 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 5 cm en hoogte 9 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '706.5cm³', correctAnswers: ['706.5cm³', '706.5', '706.5 cm³', '706.50cm³', '706.50', '706,5cm³', '706,5', '706,5 cm³', '706,50cm³', '706,50'], answer: '706,5 cm³', explanation: 'V = πr²h = 3,14 × 5² × 9 = 3,14 × 25 × 9 = 706,5 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 2,5 cm en hoogte 6 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '117.75cm³', correctAnswers: ['117.75cm³', '117.75', '117.75 cm³', '117,75cm³', '117,75', '117,75 cm³'], answer: '117,75 cm³', explanation: 'V = πr²h = 3,14 × 2,5² × 6 = 3,14 × 6,25 × 6 = 117,75 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silindriese watertenk het radius 6 cm en hoogte 15 cm. Vind die volume daarvan tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '1695.6cm³', correctAnswers: ['1695.6cm³', '1695.6', '1695.6 cm³', '1695.60cm³', '1695.60', '1 695.6cm³', '1 695.6', '1695,6cm³', '1695,6', '1695,6 cm³', '1 695,6cm³', '1 695,6'], answer: '1 695,6 cm³', explanation: 'V = πr²h = 3,14 × 6² × 15 = 3,14 × 36 × 15 = 1 695,6 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 15 cm</text></svg>'},

        // Blok 4 — Oppervlakte van 'n silinder (Medium)
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 3 cm en hoogte 7 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '188.4cm²', correctAnswers: ['188.4cm²', '188.4', '188.4 cm²', '188.40cm²', '188.40', '188,4cm²', '188,4', '188,4 cm²', '188,40cm²', '188,40'], answer: '188,4 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×9 + 2×3,14×3×7 = 56,52 + 131,88 = 188,4 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 7 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 4 cm en hoogte 9 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '326.56cm²', correctAnswers: ['326.56cm²', '326.56', '326.56 cm²', '326,56cm²', '326,56', '326,56 cm²'], answer: '326,56 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×16 + 2×3,14×4×9 = 100,48 + 226,08 = 326,56 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 2 cm en hoogte 10 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '150.72cm²', correctAnswers: ['150.72cm²', '150.72', '150.72 cm²', '150,72cm²', '150,72', '150,72 cm²'], answer: '150,72 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×4 + 2×3,14×2×10 = 25,12 + 125,6 = 150,72 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 10 cm</text></svg>'},

        // Blok 5 — Eenheidomskakelings (cm³ ↔ m³ ↔ liter) (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Skakel 2,5 m³ om na cm³.', checkMode: 'auto', correctAnswer: '2500000cm³', correctAnswers: ['2500000cm³', '2500000', '2 500 000cm³', '2 500 000', '2500000 cm³', '2 500 000 cm³'], answer: '2 500 000 cm³', explanation: '1 m³ = 1 000 000 cm³, dus 2,5 × 1 000 000 = 2 500 000 cm³' },
        { difficulty: 'Medium-Hard', question: 'Skakel 750 000 cm³ om na m³.', checkMode: 'auto', correctAnswer: '0.75m³', correctAnswers: ['0.75m³', '0.75', '0.75 m³', '0,75m³', '0,75', '0,75 m³'], answer: '0,75 m³', explanation: '1 m³ = 1 000 000 cm³, dus 750 000 ÷ 1 000 000 = 0,75 m³' },
        { difficulty: 'Medium-Hard', question: 'ʼn Silindriese tenk het radius 1,5 m en hoogte 2 m. Vind die kapasiteit daarvan in liter.', checkMode: 'auto', correctAnswer: '14130litres', correctAnswers: ['14130litres', '14130', '14 130litres', '14 130', '14130 litres', '14 130 litres', '14130liter', '14 130liter', '14130 liter', '14 130 liter'], answer: '14 130 liter', explanation: 'V = πr²h = 3,14 × 1,5² × 2 = 3,14 × 2,25 × 2 = 14,13 m³. Skakel om: 14,13 × 1 000 = 14 130 liter'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 2 cm</text></svg>'},

        // Blok 6 — Saamgestelde vaste liggame en skalering (Hard)
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vaste liggaam bestaan uit ʼn reghoekige prisma (10 cm × 6 cm × 4 cm) met ʼn kubus met sy 3 cm bo-op geplaas. Vind die totale volume van die vaste liggaam.', checkMode: 'auto', correctAnswer: '267cm³', correctAnswers: ['267cm³', '267', '267 cm³'], answer: '267 cm³', explanation: 'Prismavolume = 10 × 6 × 4 = 240 cm³. Kubusvolume = 3³ = 27 cm³. Totaal = 240 + 27 = 267 cm³'  , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">4 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><rect x="70" y="45" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="55" y1="57" x2="70" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="57" x2="110" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="97" x2="110" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="55" y="57" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="75" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Kubus met sy 3 cm word opgeskaleer sodat sy nuwe sy 9 cm is. Vind die skaalfaktor wat op die volume toegepas is.', answer: 'Lineêre skaalfaktor = 9 ÷ 3 = 3. Volumeskaalfaktor = 3³ = 27, aangesien volume met die derdemag van die lineêre skaalfaktor vergroot.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma het dimensies 4 cm × 3 cm × 2 cm (volume 24 cm³). Al drie dimensies word verdubbel. Vind die nuwe volume.', checkMode: 'auto', correctAnswer: '192cm³', correctAnswers: ['192cm³', '192', '192 cm³'], answer: '192 cm³', explanation: 'Nuwe dimensies: 8 cm × 6 cm × 4 cm. Nuwe volume = 8 × 6 × 4 = 192 cm³. Kontroleer: 24 × 2³ = 24 × 8 = 192 cm³ ✓'  , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="45" x2="115" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="100" x2="115" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="55" y="118" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text><text x="10" y="72.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 10 72.5)">2 cm</text><text x="105" y="38" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">3 cm</text><text x="55" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="130" y1="90" x2="175" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc)"/><defs><marker id="arrowSc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><text x="152" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><rect x="215" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="185" y1="33" x2="215" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="33" x2="305" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="103" x2="305" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="230" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="171" y="68" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 171 68)">4 cm</text><text x="295" y="26" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="230" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'Thabo het ʼn reghoekige prisma (lengte 10 cm, breedte 6 cm, hoogte 4 cm) en ʼn silinder (radius 4 cm, hoogte 10 cm) met ʼn kubus met sy 3 cm wat van binne die silinder verwyder is. Verduidelik, sonder om noodwendig die presiese finale waarde te bereken, hoe jy die oorblywende volume van die silinder sou vind nadat die kubus verwyder is.', answer: 'Vind die volume van die silinder deur V = πr²h te gebruik, vind dan die volume van die kubus deur V = sy³ te gebruik, en trek die kubus se volume af van die silinder se volume: oorblywende volume = silindervolume − kubusvolume.', checkMode: 'self'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 10 cm</text><rect x="88" y="75" width="44" height="44" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="110" y="132" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text></svg>'},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het oppervlakte- en volumeberekenings vir prismas en silinders bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor saamgestelde vaste liggame of eenheidomskakelings na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor silindervolume en -oppervlakte weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Volume van 'n reghoekige prisma / kubus (Easy)
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 9 cm, breedte 4 cm en hoogte 3 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '108cm³', correctAnswers: ['108cm³', '108', '108 cm³'], answer: '108 cm³', explanation: 'V = lengte × breedte × hoogte = 9 × 4 × 3 = 108 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">4 cm</text></svg>'},
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 7 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '343cm³', correctAnswers: ['343cm³', '343', '343 cm³'], answer: '343 cm³', explanation: 'V = sy³ = 7³ = 343 cm³' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 15 cm, breedte 8 cm en hoogte 2 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '240cm³', correctAnswers: ['240cm³', '240', '240 cm³'], answer: '240 cm³', explanation: 'V = lengte × breedte × hoogte = 15 × 8 × 2 = 240 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">2 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text></svg>'},

        // Blok 2 — Oppervlakte van 'n reghoekige prisma / kubus (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Kubus het sye van 6 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '216cm²', correctAnswers: ['216cm²', '216', '216 cm²'], answer: '216 cm²', explanation: 'O = 6 × sy² = 6 × 6² = 6 × 36 = 216 cm²' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 12 cm, breedte 5 cm en hoogte 3 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '222cm²', correctAnswers: ['222cm²', '222', '222 cm²'], answer: '222 cm²', explanation: 'O = 2(lb + lh + bh) = 2(12×5 + 12×3 + 5×3) = 2(60 + 36 + 15) = 2(111) = 222 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 8 cm, breedte 7 cm en hoogte 5 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '262cm²', correctAnswers: ['262cm²', '262', '262 cm²'], answer: '262 cm²', explanation: 'O = 2(lb + lh + bh) = 2(8×7 + 8×5 + 7×5) = 2(56 + 40 + 35) = 2(131) = 262 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">5 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text></svg>'},

        // Blok 3 — Volume van 'n silinder (Medium)
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 4 cm en hoogte 8 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '401.92cm³', correctAnswers: ['401.92cm³', '401.92', '401.92 cm³', '401,92cm³', '401,92', '401,92 cm³'], answer: '401,92 cm³', explanation: 'V = πr²h = 3,14 × 4² × 8 = 3,14 × 16 × 8 = 401,92 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 6 cm en hoogte 10 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '1130.4cm³', correctAnswers: ['1130.4cm³', '1130.4', '1130.4 cm³', '1 130.4cm³', '1 130.4', '1130,4cm³', '1130,4', '1130,4 cm³', '1 130,4cm³', '1 130,4'], answer: '1 130,4 cm³', explanation: 'V = πr²h = 3,14 × 6² × 10 = 3,14 × 36 × 10 = 1 130,4 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 10 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 1,5 cm en hoogte 5 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '35.325cm³', correctAnswers: ['35.325cm³', '35.325', '35.325 cm³', '35.33cm³', '35.33', '35,325cm³', '35,325', '35,325 cm³', '35,33cm³', '35,33'], answer: '35,325 cm³', explanation: 'V = πr²h = 3,14 × 1,5² × 5 = 3,14 × 2,25 × 5 = 35,325 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 5 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silindriese watertenk het radius 7 cm en hoogte 12 cm. Vind die volume daarvan tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '1846.32cm³', correctAnswers: ['1846.32cm³', '1846.32', '1846.32 cm³', '1 846.32cm³', '1 846.32', '1846,32cm³', '1846,32', '1846,32 cm³', '1 846,32cm³', '1 846,32'], answer: '1 846,32 cm³', explanation: 'V = πr²h = 3,14 × 7² × 12 = 3,14 × 49 × 12 = 1 846,32 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 7 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 12 cm</text></svg>'},

        // Blok 4 — Oppervlakte van 'n silinder (Medium)
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 4 cm en hoogte 8 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '301.44cm²', correctAnswers: ['301.44cm²', '301.44', '301.44 cm²', '301,44cm²', '301,44', '301,44 cm²'], answer: '301,44 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×16 + 2×3,14×4×8 = 100,48 + 200,96 = 301,44 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 8 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 5 cm en hoogte 11 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '502.4cm²', correctAnswers: ['502.4cm²', '502.4', '502.4 cm²', '502.40cm²', '502.40', '502,4cm²', '502,4', '502,4 cm²', '502,40cm²', '502,40'], answer: '502,4 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×25 + 2×3,14×5×11 = 157 + 345,4 = 502,4 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 3 cm en hoogte 9 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '226.08cm²', correctAnswers: ['226.08cm²', '226.08', '226.08 cm²', '226,08cm²', '226,08', '226,08 cm²'], answer: '226,08 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×9 + 2×3,14×3×9 = 56,52 + 169,56 = 226,08 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 9 cm</text></svg>'},

        // Blok 5 — Eenheidomskakelings (cm³ ↔ m³ ↔ liter) (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Skakel 3,2 m³ om na liter.', checkMode: 'auto', correctAnswer: '3200litres', correctAnswers: ['3200litres', '3200', '3 200litres', '3 200', '3200 litres', '3 200 litres', '3200liter', '3 200liter', '3200 liter', '3 200 liter'], answer: '3 200 liter', explanation: '1 m³ = 1 000 liter, dus 3,2 × 1 000 = 3 200 liter' },
        { difficulty: 'Medium-Hard', question: 'Skakel 5 200 000 cm³ om na m³.', checkMode: 'auto', correctAnswer: '5.2m³', correctAnswers: ['5.2m³', '5.2', '5.2 m³', '5,2m³', '5,2', '5,2 m³'], answer: '5,2 m³', explanation: '1 m³ = 1 000 000 cm³, dus 5 200 000 ÷ 1 000 000 = 5,2 m³' },
        { difficulty: 'Medium-Hard', question: 'ʼn Silindriese tenk het radius 2 m en hoogte 1,5 m. Vind die kapasiteit daarvan in liter.', checkMode: 'auto', correctAnswer: '18840litres', correctAnswers: ['18840litres', '18840', '18 840litres', '18 840', '18840 litres', '18 840 litres', '18840liter', '18 840liter', '18840 liter', '18 840 liter'], answer: '18 840 liter', explanation: 'V = πr²h = 3,14 × 2² × 1,5 = 3,14 × 4 × 1,5 = 18,84 m³. Skakel om: 18,84 × 1 000 = 18 840 liter'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 2 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 1.5 cm</text></svg>'},

        // Blok 6 — Saamgestelde vaste liggame en skalering (Hard)
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vaste liggaam bestaan uit ʼn reghoekige prisma (12 cm × 5 cm × 3 cm) met ʼn kubus met sy 2 cm bo-op geplaas. Vind die totale volume van die vaste liggaam.', checkMode: 'auto', correctAnswer: '188cm³', correctAnswers: ['188cm³', '188', '188 cm³'], answer: '188 cm³', explanation: 'Prismavolume = 12 × 5 × 3 = 180 cm³. Kubusvolume = 2³ = 8 cm³. Totaal = 180 + 8 = 188 cm³'  , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">3 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><rect x="70" y="45" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="55" y1="57" x2="70" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="57" x2="110" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="97" x2="110" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="55" y="57" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="75" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">2 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Kubus met sy 2 cm word opgeskaleer sodat sy nuwe sy 6 cm is. Vind die skaalfaktor wat op die volume toegepas is.', answer: 'Lineêre skaalfaktor = 6 ÷ 2 = 3. Volumeskaalfaktor = 3³ = 27, aangesien volume met die derdemag van die lineêre skaalfaktor vergroot.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma het dimensies 3 cm × 2 cm × 2 cm (volume 12 cm³). Al drie dimensies word verdriedubbel. Vind die nuwe volume.', checkMode: 'auto', correctAnswer: '324cm³', correctAnswers: ['324cm³', '324', '324 cm³'], answer: '324 cm³', explanation: 'Nuwe dimensies: 9 cm × 6 cm × 6 cm. Nuwe volume = 9 × 6 × 6 = 324 cm³. Kontroleer: 12 × 3³ = 12 × 27 = 324 cm³ ✓'  , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="45" x2="115" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="100" x2="115" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="55" y="118" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">3 cm</text><text x="10" y="72.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 10 72.5)">2 cm</text><text x="105" y="38" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">2 cm</text><text x="55" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="130" y1="90" x2="175" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc)"/><defs><marker id="arrowSc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><text x="152" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">×3</text><rect x="215" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="185" y1="33" x2="215" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="33" x2="305" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="103" x2="305" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="230" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="171" y="68" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 171 68)">6 cm</text><text x="295" y="26" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="230" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'Lerato het ʼn reghoekige prisma (lengte 12 cm, breedte 5 cm, hoogte 3 cm) en ʼn silinder (radius 5 cm, hoogte 11 cm) met ʼn kubus met sy 2 cm wat van binne die silinder verwyder is. Verduidelik, sonder om noodwendig die presiese finale waarde te bereken, hoe jy die oorblywende volume van die silinder sou vind nadat die kubus verwyder is.', answer: 'Vind die volume van die silinder deur V = πr²h te gebruik, vind dan die volume van die kubus deur V = sy³ te gebruik, en trek die kubus se volume af van die silinder se volume: oorblywende volume = silindervolume − kubusvolume.', checkMode: 'self'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text><rect x="88" y="75" width="44" height="44" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="110" y="132" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">2 cm</text></svg>'},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het oppervlakte- en volumeberekenings vir prismas en silinders bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor saamgestelde vaste liggame of eenheidomskakelings na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor silindervolume en -oppervlakte weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Volume van 'n reghoekige prisma / kubus (Easy)
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 11 cm, breedte 5 cm en hoogte 3 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '165cm³', correctAnswers: ['165cm³', '165', '165 cm³'], answer: '165 cm³', explanation: 'V = lengte × breedte × hoogte = 11 × 5 × 3 = 165 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text></svg>'},
        { difficulty: 'Easy', question: 'ʼn Kubus het sye van 9 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '729cm³', correctAnswers: ['729cm³', '729', '729 cm³'], answer: '729 cm³', explanation: 'V = sy³ = 9³ = 729 cm³' },
        { difficulty: 'Easy', question: 'ʼn Reghoekige prisma het lengte 14 cm, breedte 6 cm en hoogte 4 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '336cm³', correctAnswers: ['336cm³', '336', '336 cm³'], answer: '336 cm³', explanation: 'V = lengte × breedte × hoogte = 14 × 6 × 4 = 336 cm³'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},

        // Blok 2 — Oppervlakte van 'n reghoekige prisma / kubus (Easy-Medium)
        { difficulty: 'Easy-Medium', question: 'ʼn Kubus het sye van 8 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '384cm²', correctAnswers: ['384cm²', '384', '384 cm²'], answer: '384 cm²', explanation: 'O = 6 × sy² = 6 × 8² = 6 × 64 = 384 cm²' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 11 cm, breedte 6 cm en hoogte 4 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '268cm²', correctAnswers: ['268cm²', '268', '268 cm²'], answer: '268 cm²', explanation: 'O = 2(lb + lh + bh) = 2(11×6 + 11×4 + 6×4) = 2(66 + 44 + 24) = 2(134) = 268 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">4 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text></svg>'},
        { difficulty: 'Easy-Medium', question: 'ʼn Reghoekige prisma het lengte 10 cm, breedte 7 cm en hoogte 3 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '242cm²', correctAnswers: ['242cm²', '242', '242 cm²'], answer: '242 cm²', explanation: 'O = 2(lb + lh + bh) = 2(10×7 + 10×3 + 7×3) = 2(70 + 30 + 21) = 2(121) = 242 cm²'  , diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="30" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="55" x2="75" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="55" x2="185" y2="30" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="140" x2="185" y2="115" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="55" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="26" y="97.5" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 97.5)">3 cm</text><text x="173.5" y="38.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text></svg>'},

        // Blok 3 — Volume van 'n silinder (Medium)
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 5 cm en hoogte 6 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '471cm³', correctAnswers: ['471cm³', '471', '471 cm³', '471.00cm³', '471.00', '471,00cm³', '471,00'], answer: '471 cm³', explanation: 'V = πr²h = 3,14 × 5² × 6 = 3,14 × 25 × 6 = 471 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 8 cm en hoogte 11 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '2210.56cm³', correctAnswers: ['2210.56cm³', '2210.56', '2210.56 cm³', '2 210.56cm³', '2 210.56', '2210,56cm³', '2210,56', '2210,56 cm³', '2 210,56cm³', '2 210,56'], answer: '2 210,56 cm³', explanation: 'V = πr²h = 3,14 × 8² × 11 = 3,14 × 64 × 11 = 2 210,56 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 8 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 3,5 cm en hoogte 4 cm. Vind die volume daarvan.', checkMode: 'auto', correctAnswer: '153.86cm³', correctAnswers: ['153.86cm³', '153.86', '153.86 cm³', '153,86cm³', '153,86', '153,86 cm³'], answer: '153,86 cm³', explanation: 'V = πr²h = 3,14 × 3,5² × 4 = 3,14 × 12,25 × 4 = 153,86 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 3.5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 4 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silindriese watertenk het radius 4 cm en hoogte 20 cm. Vind die volume daarvan tot 2 desimale plekke.', checkMode: 'auto', correctAnswer: '1004.8cm³', correctAnswers: ['1004.8cm³', '1004.8', '1004.8 cm³', '1004.80cm³', '1004.80', '1 004.8cm³', '1 004.8', '1004,8cm³', '1004,8', '1004,8 cm³', '1 004,8cm³', '1 004,8'], answer: '1 004,8 cm³', explanation: 'V = πr²h = 3,14 × 4² × 20 = 3,14 × 16 × 20 = 1 004,8 cm³'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 20 cm</text></svg>'},

        // Blok 4 — Oppervlakte van 'n silinder (Medium)
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 5 cm en hoogte 6 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '345.4cm²', correctAnswers: ['345.4cm²', '345.4', '345.4 cm²', '345.40cm²', '345.40', '345,4cm²', '345,4', '345,4 cm²', '345,40cm²', '345,40'], answer: '345,4 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×25 + 2×3,14×5×6 = 157 + 188,4 = 345,4 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 5 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 6 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 6 cm en hoogte 13 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '715.92cm²', correctAnswers: ['715.92cm²', '715.92', '715.92 cm²', '715,92cm²', '715,92', '715,92 cm²'], answer: '715,92 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×36 + 2×3,14×6×13 = 226,08 + 489,84 = 715,92 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 6 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 13 cm</text></svg>'},
        { difficulty: 'Medium', question: 'ʼn Silinder het radius 4 cm en hoogte 7 cm. Vind die totale oppervlakte daarvan.', checkMode: 'auto', correctAnswer: '276.32cm²', correctAnswers: ['276.32cm²', '276.32', '276.32 cm²', '276,32cm²', '276,32', '276,32 cm²'], answer: '276,32 cm²', explanation: 'O = 2πr² + 2πrh = 2×3,14×16 + 2×3,14×4×7 = 100,48 + 175,84 = 276,32 cm²'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 4 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 7 cm</text></svg>'},

        // Blok 5 — Eenheidomskakelings (cm³ ↔ m³ ↔ liter) (Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Skakel 4,8 m³ om na liter.', checkMode: 'auto', correctAnswer: '4800litres', correctAnswers: ['4800litres', '4800', '4 800litres', '4 800', '4800 litres', '4 800 litres', '4800liter', '4 800liter', '4800 liter', '4 800 liter'], answer: '4 800 liter', explanation: '1 m³ = 1 000 liter, dus 4,8 × 1 000 = 4 800 liter' },
        { difficulty: 'Medium-Hard', question: 'Skakel 2 300 000 cm³ om na m³.', checkMode: 'auto', correctAnswer: '2.3m³', correctAnswers: ['2.3m³', '2.3', '2.3 m³', '2,3m³', '2,3', '2,3 m³'], answer: '2,3 m³', explanation: '1 m³ = 1 000 000 cm³, dus 2 300 000 ÷ 1 000 000 = 2,3 m³' },
        { difficulty: 'Medium-Hard', question: 'ʼn Silindriese tenk het radius 1,2 m en hoogte 2,5 m. Vind die kapasiteit daarvan in liter.', checkMode: 'auto', correctAnswer: '11304litres', correctAnswers: ['11304litres', '11304', '11 304litres', '11 304', '11304 litres', '11 304 litres', '11304liter', '11 304liter', '11304 liter', '11 304 liter'], answer: '11 304 liter', explanation: 'V = πr²h = 3,14 × 1,2² × 2,5 = 3,14 × 1,44 × 2,5 = 11,304 m³. Skakel om: 11,304 × 1 000 = 11 304 liter'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 1.2 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 2.5 cm</text></svg>'},

        // Blok 6 — Saamgestelde vaste liggame en skalering (Hard)
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vaste liggaam bestaan uit ʼn reghoekige prisma (14 cm × 6 cm × 4 cm) met ʼn kubus met sy 4 cm bo-op geplaas. Vind die totale volume van die vaste liggaam.', checkMode: 'auto', correctAnswer: '400cm³', correctAnswers: ['400cm³', '400', '400 cm³'], answer: '400 cm³', explanation: 'Prismavolume = 14 × 6 × 4 = 336 cm³. Kubusvolume = 4³ = 64 cm³. Totaal = 336 + 64 = 400 cm³'  , diagramSvg: '<svg viewBox="0 0 220 210" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="90" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="40" y1="115" x2="75" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="115" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.6"/><line x1="150" y1="200" x2="185" y2="175" stroke="#0f1f3d" stroke-width="1.6"/><rect x="40" y="115" width="110" height="85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="192" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="26" y="157.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 26 157.5)">4 cm</text><text x="173.5" y="98.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><rect x="70" y="45" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="55" y1="57" x2="70" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="57" x2="110" y2="45" stroke="#0f1f3d" stroke-width="1.4"/><line x1="95" y1="97" x2="110" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="55" y="57" width="40" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="75" y="112" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>'},
        { difficulty: 'Hard', question: 'ʼn Kubus met sy 4 cm word opgeskaleer sodat sy nuwe sy 8 cm is. Vind die skaalfaktor wat op die volume toegepas is.', answer: 'Lineêre skaalfaktor = 8 ÷ 4 = 2. Volumeskaalfaktor = 2³ = 8, aangesien volume met die derdemag van die lineêre skaalfaktor vergroot.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige prisma het dimensies 5 cm × 3 cm × 2 cm (volume 30 cm³). Al drie dimensies word verdubbel. Vind die nuwe volume.', checkMode: 'auto', correctAnswer: '240cm³', correctAnswers: ['240cm³', '240', '240 cm³'], answer: '240 cm³', explanation: 'Nuwe dimensies: 10 cm × 6 cm × 4 cm. Nuwe volume = 10 × 6 × 4 = 240 cm³. Kontroleer: 30 × 2³ = 30 × 8 = 240 cm³ ✓'  , diagramSvg: '<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="30" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="20" y1="45" x2="45" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="45" x2="115" y2="30" stroke="#0f1f3d" stroke-width="1.4"/><line x1="90" y1="100" x2="115" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="20" y="45" width="70" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="55" y="118" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="10" y="72.5" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 10 72.5)">2 cm</text><text x="105" y="38" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">3 cm</text><text x="55" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Original</text><line x1="130" y1="90" x2="175" y2="90" stroke="#ea580c" stroke-width="2.5" marker-end="url(#arrowSc)"/><defs><marker id="arrowSc" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#ea580c"/></marker></defs><text x="152" y="80" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">×2</text><rect x="215" y="15" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="1.4" stroke-dasharray="3,2"/><line x1="185" y1="33" x2="215" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="33" x2="305" y2="15" stroke="#0f1f3d" stroke-width="1.4"/><line x1="275" y1="103" x2="305" y2="85" stroke="#0f1f3d" stroke-width="1.4"/><rect x="185" y="33" width="90" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.2"/><text x="230" y="122" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="171" y="68" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 171 68)">4 cm</text><text x="295" y="26" font-size="10" fill="#2563eb" font-weight="700" text-anchor="start">6 cm</text><text x="230" y="150" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Scaled</text></svg>'},
        { difficulty: 'Hard', question: 'Amahle het ʼn reghoekige prisma (lengte 14 cm, breedte 6 cm, hoogte 4 cm) en ʼn silinder (radius 8 cm, hoogte 11 cm) met ʼn kubus met sy 4 cm wat van binne die silinder verwyder is. Verduidelik, sonder om noodwendig die presiese finale waarde te bereken, hoe jy die oorblywende volume van die silinder sou vind nadat die kubus verwyder is.', answer: 'Vind die volume van die silinder deur V = πr²h te gebruik, vind dan die volume van die kubus deur V = sy³ te gebruik, en trek die kubus se volume af van die silinder se volume: oorblywende volume = silindervolume − kubusvolume.', checkMode: 'self'  , diagramSvg: '<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg"><ellipse cx="110" cy="45" rx="55" ry="18" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="55" y1="45" x2="55" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><line x1="165" y1="45" x2="165" y2="145" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 0 165,145" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 55,145 A 55,18 0 0 1 165,145" fill="none" stroke="#0f1f3d" stroke-width="1.6" stroke-dasharray="4,3"/><line x1="110" y1="45" x2="163" y2="45" stroke="#2563eb" stroke-width="2"/><text x="137" y="38" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">r = 8 cm</text><line x1="30" y1="45" x2="30" y2="145" stroke="#2563eb" stroke-width="2"/><text x="16" y="95" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle" transform="rotate(-90 16 95)">h = 11 cm</text><rect x="88" y="75" width="44" height="44" fill="none" stroke="#374151" stroke-width="1.8" stroke-dasharray="5,4"/><text x="110" y="132" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">4 cm</text></svg>'},
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het oppervlakte- en volumeberekenings vir prismas en silinders bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor saamgestelde vaste liggame of eenheidomskakelings na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor silindervolume en -oppervlakte weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
