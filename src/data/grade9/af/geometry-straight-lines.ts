import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (geometry of straight lines roles) ────────────────────────
// given angle      → blue   (#2563eb)
// calculated angle → orange (#ea580c)
// relationship used→ green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Meetkunde van Reguit Lyne',
  grade: 9,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — HERSIENING VAN HOEKVERWANTSKAPPE BY SNYENDE EN PARALLELLE LYNE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'revising-angle-relationships',
      title: 'Hersiening van Hoekverwantskappe by Snyende en Parallelle Lyne',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Ons konsolideer al die hoekverwantskappe wat in Graad 8 geleer is — ${gr('vertikaal-oorstaande hoeke')} (gelyk), ${gr('aangrensende hoeke op ʼn reguit lyn')} (supplementêr, tel op tot 180°), en hoeke gevorm deur ${bl('parallelle lyne gesny deur ʼn transversaal')} (${gr('ooreenkomstige hoeke')} gelyk, ${gr('verwisselende hoeke')} gelyk, ${gr('ko-binnehoeke')} supplementêr).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gegewe hoek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('berekende hoek')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verwantskap gebruik')}</span>` +
        `</div>` +

        // ── Key relationships ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutel hoekverwantskappe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vertikaal-oorstaande</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Wanneer twee reguit lyne sny, is die hoeke wat oorkant mekaar lê <strong>gelyk</strong>.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Aangrensend op ʼn reguit lyn</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Hoeke wat ʼn reguit lyn vorm, is <strong>supplementêr</strong> — hulle tel op tot 180°.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Ooreenkomstige hoeke (F-vorm)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Gelyk</strong> wanneer parallelle lyne deur ʼn transversaal gesny word.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Verwisselende hoeke (Z-vorm)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Gelyk</strong> wanneer parallelle lyne deur ʼn transversaal gesny word.</p>` +
        `</div>` +

        `<div style="background:#f5f3ff;border:1.5px solid #ddd6fe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#7c3aed;margin-bottom:4px;">Ko-binnehoeke (C-vorm)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>Supplementêr</strong> (som = 180°) wanneer parallelle lyne deur ʼn transversaal gesny word.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gee altyd ʼn rede</p>` +
        `<p style="margin:0;color:#1e3a8a;">In Graad 9 moet elke berekende hoek geregverdig word deur die verwantskap tussen hakies te skryf, byvoorbeeld: <em>x = 110° (ooreenkomstige hoeke; AB ∥ CD)</em>.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een hoek is 110°, wat ooreenkomstig is met hoek x. Bepaal x en die ko-binnehoek y langsaan.',
          answer: `${bl('x')} = ${or('110°')} en ${bl('y')} = ${or('70°')}`,
          steps: [
            `${bl('x')} = ${or('110°')} — ${gr('ooreenkomstige hoeke is gelyk')} (parallelle lyne gesny deur ʼn transversaal, F-vorm).`,
            `${bl('y')} = 180° − ${or('110°')} = ${or('70°')} — ${gr('ko-binnehoeke is supplementêr')} (hulle deel die transversaal en lê tussen die parallelle lyne, C-vorm; 110° + 70° = 180° ✓).`,
          ],
        },
        {
          question: 'Sipho het twee snyende lyne wat ʼn hoek van 72° vorm. Bepaal al vier hoeke.',
          answer: `Die vier hoeke is ${or('72°')}, ${or('108°')}, ${or('72°')}, ${or('108°')}`,
          steps: [
            `${bl('Gegewe hoek:')} ${bl('72°')}.`,
            `${gr('Vertikaal-oorstaande')} hoek = ${or('72°')} — ${gr('vertikaal-oorstaande hoeke is gelyk')}.`,
            `Elke ${gr('aangrensende hoek')} op die reguit lyn = 180° − ${bl('72°')} = ${or('108°')} — ${gr('aangrensende hoeke op ʼn reguit lyn is supplementêr')}.`,
            `Die oorblywende vierde hoek is vertikaal-oorstaande met ${or('108°')}, so dit is ook ${or('108°')} ✓`,
            `<strong>Al vier hoeke:</strong> ${or('72°')}, ${or('108°')}, ${or('72°')}, ${or('108°')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik — vertikaal-oorstaande ────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee lyne sny en vorm ʼn hoek van 58°. Bepaal die vertikaal-oorstaande hoek.',
          answer: '58°',
          checkMode: 'auto',
          correctAnswer: '58',
          correctAnswers: ['58', '58°'],
          explanation: 'Vertikaal-oorstaande hoeke is gelyk.\nVertikaal-oorstaande hoek = 58°.',
        },

        // ── V2 Medium — aangrensend op ʼn reguit lyn ───────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die aangrensende hoeke van ʼn hoek van 58° op ʼn reguit lyn.',
          answer: '122°',
          checkMode: 'auto',
          correctAnswer: '122',
          correctAnswers: ['122', '122°'],
          explanation: 'Aangrensende hoeke op ʼn reguit lyn is supplementêr (som = 180°).\n180° − 58° = 122°.',
        },

        // ── V3 Hard — ooreenkomstig vs verwisselend konseptueel ──────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê ooreenkomstige hoeke en verwisselende hoeke is altyd dieselfde waarde wanneer parallelle lyne deur ʼn transversaal gesny word. Is hy korrek? Verduidelik.',
          answer: 'Ja — beide ooreenkomstige en verwisselende hoekpare is gelyk aan mekaar, alhoewel hulle na verskillende posisies relatief tot die transversaal en die parallelle lyne verwys.',
          checkMode: 'self',
        },

        // ── V4 Maklik — ooreenkomstige hoeke ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een ooreenkomstige hoek is 88°. Bepaal die ander.',
          answer: '88°',
          checkMode: 'auto',
          correctAnswer: '88',
          correctAnswers: ['88', '88°'],
          explanation: 'Ooreenkomstige hoeke is gelyk wanneer parallelle lyne deur ʼn transversaal gesny word.\nOoreenkomstige hoek = 88°.',
        },

        // ── V5 Medium — ko-binnehoeke ────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die ko-binnehoek van ʼn hoek van 105°.',
          answer: '75°',
          checkMode: 'auto',
          correctAnswer: '75',
          correctAnswers: ['75', '75°'],
          explanation: 'Ko-binnehoeke is supplementêr (som = 180°).\n180° − 105° = 75°.',
        },

        // ── V6 Hard — hoeke rondom ʼn punt ──────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato het ʼn diagram met hoeke rondom ʼn punt: 80°, x, 110°, en 95°. Bepaal x.',
          answer: 'Hoeke rondom ʼn punt tel op tot 360°. 80 + x + 110 + 95 = 360. x = 75°.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video revising vertically opposite, adjacent, corresponding, alternate and co-interior angle relationships with parallel lines and transversals" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two parallel lines cut by a transversal with all five angle relationships labelled and colour coded" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OPLOS VAN MEERSTAP-PROBLEME MET GEKOMBINEERDE HOEKVERWANTSKAPPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multi-step-angle-problems',
      title: 'Oplos van Meerstap-probleme met Gekombineerde Hoekverwantskappe',
      icon: '∠',
      explanation:
        `<p style="margin-bottom:16px;">Ons pas verskeie hoekverwantskappe saam toe in meer komplekse diagramme met verskeie snyende en parallelle lyne, wat noukeurige stap-vir-stap redenering vereis om al die onbekende hoeke te bepaal.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoek van elke stap')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verwantskap toegepas')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Strategy steps ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Strategie vir meerstap-probleme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Identifiseer</strong> wat gegee is en wat onbekend is. Merk ${bl('bekende hoeke')} op die diagram.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kies</strong> die ${or('verwantskap')} wat die gegewe hoek aan ʼn onbekende koppel — stel dit as jou rede.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bereken</strong> en skryf die ${gr('finale antwoord')} met ʼn volledige rede tussen hakies.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Werk stap vir stap</p>` +
        `<p style="margin:0;color:#1e3a8a;">In komplekse diagramme het jy dikwels die antwoord van een stap nodig om die volgende te ontsluit. Moenie ooit stappe oorslaan nie — elke tussenhoek word ${bl('gegewe')} vir die volgende stap.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny, wat hoek a = 65° skep. ʼn Tweede transversaal sny dieselfde lyne en skep hoek b wat vertikaal-oorstaande is met die verwisselende hoek van a. Bepaal b.',
          answer: `${gr('b = 65°')}`,
          steps: [
            `${or('Verwisselende hoek')} van ${bl('a')} = ${bl('65°')} — ${or('verwisselende hoeke is gelyk')} (parallelle lyne, Z-vorm).`,
            `${gr('b')} = ${bl('65°')} — ${or('vertikaal-oorstaande hoeke is gelyk')}.`,
            `<strong>Antwoord:</strong> ${gr('b = 65°')} ✓`,
          ],
        },
        {
          question: 'Lerato het ʼn diagram met drie hoeke rondom ʼn punt: 95°, x, en 140°. Bepaal x.',
          answer: `${gr('x = 125°')}`,
          steps: [
            `${or('Hoeke rondom ʼn punt')} tel op tot 360°.`,
            `${bl('95°')} + ${bl('x')} + ${bl('140°')} = 360°`,
            `${bl('x')} = 360° − 95° − 140° = ${gr('125°')} ✓`,
          ],
        },
        {
          question: 'Thabo se diagram toon twee parallelle lyne met ʼn ko-binnehoekpaar waar een hoek dubbel die ander is. Bepaal albei hoeke.',
          answer: `${gr('60°')} en ${gr('120°')}`,
          steps: [
            `Laat die kleiner hoek = ${bl('x')}, die groter = ${bl('2x')}.`,
            `${or('Ko-binnehoeke is supplementêr:')} ${bl('x')} + ${bl('2x')} = 180°`,
            `3${bl('x')} = 180°`,
            `${bl('x')} = 60° → ${gr('kleiner hoek = 60°')}, ${gr('groter hoek = 120°')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Medium — verwisselende hoek ───────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny en skep hoek a = 72°. Bepaal die verwisselende hoek van a.',
          answer: '72°',
          checkMode: 'auto',
          correctAnswer: '72',
          correctAnswers: ['72', '72°'],
          explanation: 'Verwisselende hoeke is gelyk wanneer parallelle lyne deur ʼn transversaal gesny word.\nVerwisselende hoek = 72°.',
        },

        // ── V8 Hard — ko-binnehoeke met vermenigvuldiger ─────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo se diagram het ʼn ko-binnehoekpaar waar een hoek drie keer die ander is. Bepaal albei hoeke.',
          answer: 'Laat kleiner = x, groter = 3x. x + 3x = 180. x = 45°. Hoeke is 45° en 135°.',
          checkMode: 'self',
        },

        // ── V9 Medium — al vier hoeke van snyende lyne ─────────────────
        {
          difficulty: 'Medium',
          question: 'Twee snyende lyne vorm ʼn hoek van 36°. Bepaal al vier hoeke.',
          answer: '36°, 144°, 36°, 144°',
          checkMode: 'auto',
          correctAnswer: '36, 144, 36, 144',
          correctAnswers: ['36,144,36,144', '36°,144°,36°,144°', '36, 144, 36, 144', '36°, 144°, 36°, 144°'],
          explanation: 'Vertikaal-oorstaande hoek = 36°.\nAangrensende hoeke = 180° − 36° = 144° elk.\nVier hoeke: 36°, 144°, 36°, 144°.',
        },

        // ── V10 Hard — kettingredenasie ooreenkomstig dan vertikaal-oorstaande ─────────
        {
          difficulty: 'Hard',
          question: 'Amahle het hoek a = 65° wat ooreenkomstig is met hoek b op parallelle lyne. Hoek c is vertikaal-oorstaande met b. Bepaal c.',
          answer: 'b = 65° (ooreenkomstig gelyk aan a). c = 65° (vertikaal-oorstaande gelyk aan b).',
          checkMode: 'self',
        },

        // ── V11 Medium — ooreenkomstige hoek ─────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Bepaal die ooreenkomstige hoek van ʼn hoek van 112° tussen parallelle lyne gesny deur ʼn transversaal.',
          answer: '112°',
          checkMode: 'auto',
          correctAnswer: '112',
          correctAnswers: ['112', '112°'],
          explanation: 'Ooreenkomstige hoeke is gelyk wanneer parallelle lyne deur ʼn transversaal gesny word.\nOoreenkomstige hoek = 112°.',
        },

        // ── V12 Hard — konseptuele wanopvatting ──────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê alle hoeke gevorm deur ʼn transversaal wat twee parallelle lyne sny, is óf 90° óf supplementêr tot 90°. Is hy korrek? Verduidelik.',
          answer: 'Nee — die hoeke kan enige waarde hê, afhangende van die hoek van die transversaal; hulle is nie beperk tot 90° of die supplemente daarvan nie, tensy die transversaal toevallig loodreg is.',
          checkMode: 'self',
        },

        // ── V13 Hard — algebraïese ko-binnehoekpaar ─────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Een ko-binnehoek is x en die ander is 2x + 30. Bepaal x.',
          answer: 'x + (2x + 30) = 180. 3x + 30 = 180. 3x = 150. x = 50°.',
          checkMode: 'self',
        },

        // ── V14 Hard — drie snyende lyne by ʼn punt ────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato se diagram toon drie snyende lyne by ʼn punt, wat ses hoeke skep. As een hoek 40° is, bepaal so veel ander hoeke as moontlik deur vertikaal-oorstaande en aangrensende verwantskappe te gebruik.',
          answer: 'Die vertikaal-oorstaande hoek van 40° is ook 40°. Aangrensende hoeke by 40° sou elk 140° wees (180 − 40), alhoewel, sonder meer inligting oor die derde lyn se presiese posisie, nie al ses hoeke met sekerheid hieruit bepaal kan word nie.',
          checkMode: 'self',
        },

        // ── V15 Hard — kettingredenasie ko-binne en vertikaal-oorstaande ────────
        {
          difficulty: 'Hard',
          question: 'Twee parallelle lyne word deur ʼn transversaal gesny. Hoek a is ko-binne met hoek b, en hoek b is vertikaal-oorstaande met hoek c, wat gelyk is aan 65°. Bepaal a, b en c.',
          answer: 'c = 65°. b = 65° (vertikaal-oorstaande met c). a = 180 − 65 = 115° (ko-binne met b).',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to combine multiple angle relationships to solve complex geometry problems step by step" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing two parallel lines cut by two transversals with multiple angle relationships labelled and colour coded" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het meetkunde van reguit lyne bemeester.' },
    { minScore: 11, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die studiegids.' },
  ],
}
