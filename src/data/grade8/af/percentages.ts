import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (percentage roles) ───────────────────────────────────────
// original amount  → blue   (#2563eb)
// percentage change→ orange (#ea580c)
// final amount     → green  (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Persentasies',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — PERSENTASIETOENAME EN -AFNAME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'percentage-increase-and-decrease',
      title: 'Persentasietoename en -afname',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien hoe om persentasies van heelgetalle te vind en persentasietoename of -afname te bereken. In Graad 8 brei ons dit uit na die berekening van die <strong>oorspronklike</strong> of <strong>finale</strong> bedrag wanneer ʼn persentasietoename of -afname gegee word, deur <strong>agteruit</strong> vanaf die verandering te werk.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasieverandering')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike bedrag')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale bedrag')}</span>` +
        `</div>` +

        // ── Key formulas ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelformules — die oorspronklike bedrag vind</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Na ʼn toename van x%</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die nuwe prys = ${or('(100 + x)%')} van die oorspronklike.</p>` +
        `<p style="font-family:monospace;font-size:13px;color:#374151;margin:0;">${bl('Oorspronklike')} = ${gr('Nuwe prys')} ÷ (1 + x/100)</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Na ʼn afname van x%</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Die nuwe prys = ${or('(100 − x)%')} van die oorspronklike.</p>` +
        `<p style="font-family:monospace;font-size:13px;color:#374151;margin:0;">${bl('Oorspronklike')} = ${gr('Nuwe prys')} ÷ (1 − x/100)</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dink in persentasies van die oorspronklike</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${bl('oorspronklike')} is altyd <strong>100%</strong>. ʼn ${or('15%-toename')} beteken die nuwe prys is <strong>115%</strong> van die oorspronklike. ʼn ${or('20%-afname')} beteken die nuwe prys is <strong>80%</strong> van die oorspronklike. Deel die ${gr('finale bedrag')} deur daardie persentasie (as ʼn desimale breuk geskryf) om agteruit na die ${bl('oorspronklike')} te werk.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Prys styg met 15% na R460. Bereken die oorspronklike prys.',
          answer: `Die oorspronklike prys was ${bl('R400')}`,
          steps: [
            `Die ${gr('nuwe prys')} verteenwoordig ${or('115%')} van die ${bl('oorspronklike')} — die oorspronklike is 100% en die ${or('toename')} is ${or('15%')}, so 100% + 15% = ${or('115%')}.`,
            `Om die ${bl('oorspronklike')} te vind, deel die ${gr('finale bedrag')} deur 1,15 (wat 115% as ʼn desimale breuk is).`,
            `${bl('Oorspronklike')} = ${gr('460')} ÷ 1,15 = ${bl('R400')}`,
            `<strong>Toets:</strong> ${bl('400')} × 1,15 = ${gr('460')} ✓`,
          ],
        },
        {
          question: 'ʼn Prys daal met 20% na R320. Bereken die oorspronklike prys.',
          answer: `Die oorspronklike prys was ${bl('R400')}`,
          steps: [
            `Die ${gr('nuwe prys')} verteenwoordig ${or('80%')} van die ${bl('oorspronklike')} — die oorspronklike is 100% en die ${or('afname')} is ${or('20%')}, so 100% − 20% = ${or('80%')}.`,
            `Om die ${bl('oorspronklike')} te vind, deel die ${gr('finale bedrag')} deur 0,8 (wat 80% as ʼn desimale breuk is).`,
            `${bl('Oorspronklike')} = ${gr('320')} ÷ 0,8 = ${bl('R400')}`,
            `<strong>Toets:</strong> ${bl('400')} × 0,8 = ${gr('320')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Prys styg met 20% na R360. Bereken die oorspronklike prys.',
          answer: 'R300',
          checkMode: 'auto',
          correctAnswer: 'R300',
          correctAnswers: ['R300', '300'],
          explanation: 'Nuwe prys = 120% van oorspronklike.\nOorspronklike = 360 ÷ 1,2 = R300.\nToets: 300 × 1,2 = 360 ✓',
        },

        // ── V2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Prys daal met 25% na R450. Bereken die oorspronklike prys.',
          answer: 'R600',
          checkMode: 'auto',
          correctAnswer: 'R600',
          correctAnswers: ['R600', '600'],
          explanation: 'Nuwe prys = 75% van oorspronklike.\nOorspronklike = 450 ÷ 0,75 = R600.\nToets: 600 × 0,75 = 450 ✓',
        },

        // ── V3 Moeilik ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê as ʼn prys met 10% styg na R220, was die oorspronklike R200. Is hy korrek? Verduidelik.',
          answer: 'Ja — 220÷1,1=200, so die oorspronklike prys was R200.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die oorspronklike prys na ʼn persentasietoename of -afname te vind deur agteruit te werk met behulp van deling" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat wys hoe om ʼn persentasietoename en -afname om te keer om die oorspronklike bedrag in blou te vind vanaf die finale bedrag in groen met die persentasieverandering in oranje" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — BEDRAE BEREKEN VANAF GEGEWE PERSENTASIEVERANDERINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-amounts-from-percentage-changes',
      title: 'Bedrae Bereken vanaf Gegewe Persentasieveranderings',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Gegewe ʼn oorspronklike bedrag en ʼn persentasietoename of -afname, bereken ons die resulterende bedrag <strong>direk</strong> deur die persentasie van die oorspronklike by te tel of af te trek.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike bedrag')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie gevind')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale bedrag')}</span>` +
        `</div>` +

        // ── Methods ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tweestap-metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Vind die ${or('persentasiebedrag')}:</strong> Vermenigvuldig die ${bl('oorspronklike')} met die persentasie as ʼn desimale breuk geskryf.<br>bv. 9% van R12 000 = ${or('0,09')} × ${bl('12 000')} = ${or('1 080')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Tel by of trek af om die ${gr('finale bedrag')} te vind:</strong><br>Toename: ${gr('Finale')} = ${bl('Oorspronklike')} + ${or('persentasiebedrag')}<br>Afname: ${gr('Finale')} = ${bl('Oorspronklike')} − ${or('persentasiebedrag')}</p>` +
        `</div>` +

        `</div>` +

        // ── Shortcut ─────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Eenstap-kortpad</p>` +
        `<p style="margin:0;color:#1e3a8a;">In plaas van twee stappe, vermenigvuldig die ${bl('oorspronklike')} met ʼn <strong>enkele vermenigvuldiger</strong>.<br>Toename van 9%: ${bl('Oorspronklike')} × <strong>1,09</strong> = ${gr('Finale')}<br>Afname van 30%: ${bl('Oorspronklike')} × <strong>0,7</strong> = ${gr('Finale')}</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Salaris van R12 000 styg met 9%. Bereken die nuwe salaris.',
          answer: `Die nuwe salaris is ${gr('R13 080')}`,
          steps: [
            `Vind die ${or('toename')}: ${or('0,09')} × ${bl('12 000')} = ${or('1 080')}`,
            `Nuwe salaris = ${bl('12 000')} + ${or('1 080')} = ${gr('R13 080')}`,
            `<strong>Toets (eenstap):</strong> ${bl('12 000')} × 1,09 = ${gr('13 080')} ✓`,
          ],
        },
        {
          question: 'ʼn Item met ʼn prys van R850 word met 30% afgeslaan. Bereken die verkoopprys.',
          answer: `Die verkoopprys is ${gr('R595')}`,
          steps: [
            `Vind die ${or('korting')}: ${or('0,3')} × ${bl('850')} = ${or('255')}`,
            `Verkoopprys = ${bl('850')} − ${or('255')} = ${gr('R595')}`,
            `<strong>Toets (eenstap):</strong> ${bl('850')} × 0,7 = ${gr('595')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V4 Maklik ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Salaris van R15 000 styg met 6%. Bereken die nuwe salaris.',
          answer: 'R15 900',
          checkMode: 'auto',
          correctAnswer: 'R15900',
          correctAnswers: ['R15900', '15900', 'R15,900', '15,900', 'R15 900'],
          explanation: 'Toename = 0,06 × 15 000 = 900.\nNuwe salaris = 15 000 + 900 = R15 900 ✓',
        },

        // ── V5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Item met ʼn prys van R720 word met 35% afgeslaan. Bereken die verkoopprys.',
          answer: 'R468',
          checkMode: 'auto',
          correctAnswer: 'R468',
          correctAnswers: ['R468', '468'],
          explanation: 'Korting = 0,35 × 720 = 252.\nVerkoopprys = 720 − 252 = R468 ✓',
        },

        // ── V6 Moeilik ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê as R500 met 40% verminder word, kry jy R300. Is sy korrek? Verduidelik.',
          answer: 'Nee — 40% van 500 is 200, dus is die verminderde bedrag 500-200=R300. Haar antwoord is eintlik korrek.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn nuwe bedrag na ʼn persentasietoename of -afname te bereken deur die tweestap-metode en die eenstap-vermenigvuldiger-kortpad te gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat wys hoe om bedrae na persentasieveranderings te bereken met die oorspronklike bedrag in blou, die gevonde persentasie in oranje en die finale bedrag in groen" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — PROBLEME MET PERSENTASIES OPLOS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'solving-problems-involving-percentages',
      title: 'Probleme met Persentasies Oplos',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Ons los <strong>meerstap-, werklike-lewe-probleme</strong> met persentasies op, dikwels deur persentasietoename/-afname met ander bewerkings soos verhoudings, wins/verlies of opeenvolgende persentasieveranderings te kombineer.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('opeenvolgende veranderings')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale resultaat')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Opeenvolgende persentasieveranderings</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Pas elke verandering een na die ander toe. Die ${or('tweede verandering')} word op die <em>nuwe</em> bedrag bereken, nie die oorspronklike nie. ʼn Toename van 10% gevolg deur ʼn afname van 10% keer <strong>nie</strong> na die oorspronklike terug nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Persentasieveranderingsformule</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">Om te bepaal met watter persentasie ʼn waarde relatief tot die oorspronklike verander het:</p>` +
        `<p style="font-family:monospace;font-size:13px;color:#374151;margin:0;">% verandering = (verandering ÷ ${bl('oorspronklike')}) × 100</p>` +
        `</div>` +

        `</div>` +

        // ── Warning box ───────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Algemene fout: opeenvolgende veranderings is nie simmetries nie</p>` +
        `<p style="margin:0;color:#991b1b;">ʼn Toename van x% gevolg deur ʼn afname van x% gee ʼn ${gr('finale resultaat')} <strong>kleiner as</strong> die ${bl('oorspronklike')}. Dit is omdat die afname x% van die <em>verhoogde</em> bedrag is, wat groter as die oorspronklike is — so word meer weggeneem as wat bygetel is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Winkel verhoog pryse met 10% en bied dan ʼn afslag van 10% op die nuwe prys aan. Is die finale prys dieselfde as die oorspronklike?',
          answer: `Die finale prys is ${gr('R99')}, nie R100 nie — dit is effens laer`,
          steps: [
            `Begin met ${bl('R100')}.`,
            `${or('Toename')} van 10%: ${bl('100')} × 1,1 = ${or('110')}`,
            `${or('Afslag')} van 10% op die nuwe prys: ${or('110')} × 0,9 = ${gr('99')}`,
            `Die ${gr('finale prys')} is R99, nie R100 nie — ${or('opeenvolgende persentasieveranderings')} kanselleer nie uit nie omdat die tweede verandering op ʼn ander basis inwerk.`,
          ],
        },
        {
          question: "Sipho se toetspunt het van 60% na 75% toegeneem. Bereken die persentasietoename relatief tot sy oorspronklike punt.",
          answer: `Die persentasietoename is ${gr('25%')}`,
          steps: [
            `Bereken die werklike toename: 75 − ${bl('60')} = ${or('15')}`,
            `Persentasietoename = ${or('15')} ÷ ${bl('60')} × 100 = ${gr('25%')}`,
            `<strong>Antwoord:</strong> Sipho se punt het met ${gr('25%')} toegeneem relatief tot sy ${bl('oorspronklike')} punt van 60%. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V7 Maklik ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Winkel verhoog ʼn R100-item met 10% en verlaag die nuwe prys later met 10%. Bereken die finale prys.',
          answer: 'R99',
          checkMode: 'auto',
          correctAnswer: 'R99',
          correctAnswers: ['R99', '99'],
          explanation: 'Toename: 100 × 1,1 = 110.\nAfslag: 110 × 0,9 = 99.\nFinale prys = R99 ✓',
        },

        // ── V8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "Thabo se punt het van 50% na 65% toegeneem. Bereken die persentasietoename relatief tot sy oorspronklike punt.",
          answer: '30%',
          checkMode: 'auto',
          correctAnswer: '30%',
          correctAnswers: ['30%', '30'],
          explanation: 'Toename = 65 − 50 = 15.\nPersentasietoename = 15 ÷ 50 × 100 = 30% ✓',
        },

        // ── V9 Moeilik ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle belê R8 000. Na een jaar neem dit met 12% toe, en dan die volgende jaar met 5% af. Bereken die finale bedrag.',
          answer: 'Na jaar 1: 8000x1,12=8960. Na jaar 2: 8960x0,95=8512. Finale bedrag=R8 512.',
          checkMode: 'self',
        },

        // ── V10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn R900-item word met 15% afgeslaan, en dan word BTW van 15% op die nuwe prys bygetel. Bereken die finale prys.',
          answer: 'R879,75',
          checkMode: 'auto',
          correctAnswer: 'R879.75',
          correctAnswers: ['R879.75', '879.75', 'R879,75'],
          explanation: 'Afslag: 900 × 0,15 = 135. Nuwe prys = 900 − 135 = 765.\nBTW: 765 × 0,15 = 114,75. Finale prys = 765 + 114,75 = R879,75 ✓',
        },

        // ── V11 Moeilik ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê om met dieselfde persentasie te verhoog en dan te verlaag, keer altyd terug na die oorspronklike bedrag. Is hy korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Nee — byvoorbeeld R100 verhoog met 20% gee R120, en dan verlaag met 20% gee R96, nie R100 nie.',
          checkMode: 'self',
        },

        // ── V12 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: "ʼn Fiets se prys daal met 30% na R980. Bereken die oorspronklike prys.",
          answer: 'R1 400',
          checkMode: 'auto',
          correctAnswer: 'R1400',
          correctAnswers: ['R1400', '1400', 'R1,400', '1,400', 'R1 400'],
          explanation: 'Nuwe prys = 70% van oorspronklike.\nOorspronklike = 980 ÷ 0,7 = R1 400 ✓',
        },

        // ── V13 Moeilik ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato se salaris van R18 000 styg met 8%, en sy ontvang dan ʼn verdere toename van 5% op die nuwe salaris. Bereken haar finale salaris.",
          answer: 'R20 412',
          checkMode: 'auto',
          correctAnswer: 'R20412',
          correctAnswers: ['R20412', '20412', 'R20,412', '20,412', 'R20 412'],
          explanation: 'Na 8%-toename: 18 000 × 1,08 = 19 440.\nNa 5%-toename: 19 440 × 1,05 = R20 412 ✓',
        },

        // ── V14 Moeilik ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "ʼn Winkel se inkomste het van R45 000 na R54 000 toegeneem. Bereken die persentasietoename.",
          answer: '20%',
          checkMode: 'auto',
          correctAnswer: '20%',
          correctAnswers: ['20%', '20'],
          explanation: 'Toename = 54 000 − 45 000 = 9 000.\nPersentasietoename = 9 000 ÷ 45 000 × 100 = 20% ✓',
        },

        // ── V15 Moeilik ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo sê ʼn toename van 50% gevolg deur ʼn afname van 50% lei tot geen algehele verandering nie. Is hy korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Nee — byvoorbeeld R200 verhoog met 50% gee R300, en dan verlaag met 50% gee R150, nie R200 nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om meerstap-persentasieprobleme op te los wat opeenvolgende persentasieveranderings en persentasietoename relatief tot die oorspronklike behels" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat opeenvolgende persentasieveranderings wys met die oorspronklike bedrag in blou, elke verandering in oranje en die finale resultaat in groen wat illustreer waarom hulle nie uitkanselleer nie" />',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het persentasies bemeester.' },
    { minScore: 11, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 1-3 Die oorspronklike bedrag vind (agteruit werk) | 4-7 Die nuwe
    // bedrag direk bereken (eenstap-vermenigvuldiger) | 8-10 ʼn Verandering as
    // ʼn persentasie uitdruk (persentasieveranderingsformule) | 11-14
    // Korting/opslag/BTW woordprobleme (Rand-kontekste) | 15-17 Multi-stap
    // opeenvolgende persentasieveranderingskettings | 18-20 Foutopsporing/redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Die oorspronklike bedrag vind (0-2)
        { difficulty: 'Easy', question: 'ʼn Tablet se prys styg met 15% na R552. Bereken die oorspronklike prys.', answer: 'R480', checkMode: 'auto', correctAnswer: 'R480', correctAnswers: ['R480', '480'], explanation: 'Nuwe prys = 115% van oorspronklike.\nOorspronklike = 552 ÷ 1,15 = R480.\nToets: 480 × 1,15 = 552 ✓' },
        { difficulty: 'Medium', question: 'Na ʼn korting van 10% kos ʼn baadjie R522. Bereken die oorspronklike prys van die baadjie.', answer: 'R580', checkMode: 'auto', correctAnswer: 'R580', correctAnswers: ['R580', '580'], explanation: 'Nuwe prys = 90% van oorspronklike.\nOorspronklike = 522 ÷ 0,9 = R580.\nToets: 580 × 0,9 = 522 ✓' },
        { difficulty: 'Medium', question: 'ʼn Klub se ledetal het met 20% na 840 lede toegeneem hierdie jaar. Bereken verlede jaar se ledetal.', answer: '700', checkMode: 'auto', correctAnswer: '700', explanation: 'Nuwe totaal = 120% van oorspronklike.\nOorspronklike = 840 ÷ 1,2 = 700 lede.\nToets: 700 × 1,2 = 840 ✓' },

        // Blok 2 — Die nuwe bedrag direk bereken (3-6)
        { difficulty: 'Easy', question: 'Zanele se salaris van R6 500 styg met 9%. Gebruik die eenstap-vermenigvuldiger om haar nuwe salaris te bereken.', answer: 'R7 085', checkMode: 'auto', correctAnswer: 'R7085', correctAnswers: ['R7085', '7085', 'R7 085', '7 085'], explanation: 'Vermenigvuldiger vir ʼn toename van 9% = 1,09.\nNuwe salaris = 6 500 × 1,09 = R7 085 ✓' },
        { difficulty: 'Medium', question: 'ʼn Kragopwekker met ʼn prys van R3 400 word met 18% afgeslaan. Bereken die verkoopprys deur ʼn enkele vermenigvuldiger te gebruik.', answer: 'R2 788', checkMode: 'auto', correctAnswer: 'R2788', correctAnswers: ['R2788', '2788', 'R2 788', '2 788'], explanation: 'Vermenigvuldiger vir ʼn afname van 18% = 0,82.\nVerkoopprys = 3 400 × 0,82 = R2 788 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wildreservaat het 12 500 diere gehad. Oor drie jaar het versigtige bewaring die bevolking met 24% laat toeneem. Bereken die nuwe bevolking.', answer: '15 500', checkMode: 'auto', correctAnswer: '15500', correctAnswers: ['15500', '15 500'], explanation: 'Vermenigvuldiger vir ʼn toename van 24% = 1,24.\nNuwe bevolking = 12 500 × 1,24 = 15 500 diere ✓' },
        { difficulty: 'Medium', question: 'ʼn Krieketkolf kos R940 en word met 25% afgeslaan vir ʼn einde-van-seisoen-uitverkoping. Bereken die kortingsbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R235', correctAnswers: ['R235', '235'], explanation: 'Korting = 25% van R940: 0,25 × 940 = R235 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R705', correctAnswers: ['R705', '705'], explanation: 'Verkoopprys = 940 − 235 = R705 ✓' },
        ] },

        // Blok 3 — ʼn Verandering as ʼn persentasie uitdruk (7-9)
        { difficulty: 'Easy', question: 'ʼn Leerder se speltoetspunt het van 65 na 78 gestyg (albei uit 100). Bereken die persentasietoename relatief tot die oorspronklike punt.', answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Toename = 78 − 65 = 13.\nPersentasietoename = 13 ÷ 65 × 100 = 20% ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel se weeklikse verkope het van R450 000 na R360 000 gedaal. Bereken die persentasieafname.', answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Afname = 450 000 − 360 000 = 90 000.\nPersentasieafname = 90 000 ÷ 450 000 × 100 = 20% ✓' },
        { difficulty: 'Medium', question: 'ʼn Watertenk het 120 liter bevat en bevat nou 150 liter na reën. Bereken die persentasietoename in die hoeveelheid water.', answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Toename = 150 − 120 = 30.\nPersentasietoename = 30 ÷ 120 × 100 = 25% ✓' },

        // Blok 4 — Korting/opslag/BTW woordprobleme, Rand-kontekste (10-13)
        { difficulty: 'Medium', question: 'ʼn Wasmasjien het ʼn prys van R780 voor BTW. Bereken die totale prys sodra 15% BTW bygevoeg word.', answer: 'R897', checkMode: 'auto', correctAnswer: 'R897', correctAnswers: ['R897', '897'], explanation: 'BTW = 15% van R780: 0,15 × 780 = R117.\nTotaal = 780 + 117 = R897 ✓' },
        { difficulty: 'Medium', question: 'ʼn Groothandelaar koop kissies eiers vir R250 elk en verhoog die prys met 50% opslag om aan ʼn supermark te verkoop. Bereken die verkoopprys per kissie.', answer: 'R375', checkMode: 'auto', correctAnswer: 'R375', correctAnswers: ['R375', '375'], explanation: 'Opslag = 50% van R250: 0,50 × 250 = R125.\nVerkoopprys = 250 + 125 = R375 ✓' },
        { difficulty: 'Medium', question: 'ʼn Meubelwinkel koop ʼn rusbank vir R340 en verhoog dit met 45% opslag voordat dit verkoop word. Bereken die opslagbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Opslagbedrag', correctAnswer: 'R153', correctAnswers: ['R153', '153'], explanation: 'Opslag = 45% van R340: 0,45 × 340 = R153 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R493', correctAnswers: ['R493', '493'], explanation: 'Verkoopprys = 340 + 153 = R493 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Restaurant-kateraar vra R620 vir ʼn funksie voordat ʼn diensfooi van 15% bygevoeg word. Bereken die totale bedrag wat die kliënt betaal.', answer: 'R713', checkMode: 'auto', correctAnswer: 'R713', correctAnswers: ['R713', '713'], explanation: 'Diensfooi = 15% van R620: 0,15 × 620 = R93.\nTotaal = 620 + 93 = R713 ✓' },

        // Blok 5 — Multi-stap opeenvolgende persentasieveranderingskettings (14-16)
        { difficulty: 'Hard', question: 'ʼn Stuk grond met ʼn waarde van R5 000 se waarde styg met 20%, en die volgende jaar daal die nuwe waarde met 10%. Bereken die waarde na albei veranderings.', answer: 'R5 400', checkMode: 'auto', correctAnswer: 'R5400', correctAnswers: ['R5400', '5400', 'R5 400', '5 400'], explanation: 'Na die toename van 20%: 5 000 × 1,20 = R6 000.\nNa die afname van 10% op die nuwe waarde: 6 000 × 0,90 = R5 400 ✓' },
        { difficulty: 'Hard', question: 'ʼn Tweedehandse motor met ʼn prys van R2 000 word met 30% afgeslaan vir ʼn vinnige verkoop, en dan verhoog die handelaar die afgeslane prys die volgende maand met 20%. Bereken die finale prys.', answer: 'R1 680', checkMode: 'auto', correctAnswer: 'R1680', correctAnswers: ['R1680', '1680', 'R1 680', '1 680'], explanation: 'Na die afname van 30%: 2 000 × 0,70 = R1 400.\nNa die toename van 20% op die nuwe prys: 1 400 × 1,20 = R1 680 ✓' },
        { difficulty: 'Hard', question: 'ʼn Belegging van R4 000 groei met 10% in die eerste jaar, en dan groei die nuwe balans met ʼn verdere 10% in die tweede jaar. Bereken die finale balans.', answer: 'R4 840', checkMode: 'auto', correctAnswer: 'R4840', correctAnswers: ['R4840', '4840', 'R4 840', '4 840'], explanation: 'Na jaar 1: 4 000 × 1,10 = R4 400.\nNa jaar 2 (10% van die nuwe balans): 4 400 × 1,10 = R4 840 ✓' },

        // Blok 6 — Foutopsporing/redenering (17-19)
        { difficulty: 'Hard', question: 'ʼn Foon kos R900. Die winkel verhoog die prys met 30%, en ʼn maand later slaan hulle die nuwe prys met 30% af. Bereken die finale prys, en sê of dit gelyk is aan die oorspronklike R900.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Finale prys', correctAnswer: 'R819', correctAnswers: ['R819', '819'], explanation: 'Na die toename van 30%: 900 × 1,30 = R1 170.\nNa die afname van 30% op die nuwe prys: 1 170 × 0,70 = R819 ✓' },
          { label: 'b) Is die finale prys gelyk aan die oorspronklike R900?', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'R819 is R81 minder as R900 — die afname van 30% word op die groter, verhoogde bedrag bereken, dus word meer weggeneem as wat bygevoeg is. ✓' },
        ] },
        { difficulty: 'Hard', question: 'Sipho sê: "ʼn Prys wat met 50% verminder word en dan met 100% verhoog word, sal altyd na die oorspronklike bedrag terugkeer, ongeag wat die beginprys is." Ondersoek sy bewering deur R600 as die beginprys te gebruik, en verduidelik of hy korrek is.', answer: 'Ja, hy is korrek vir hierdie voorbeeld (en in die algemeen): R600 verminder met 50% gee R300, en R300 verhoog met 100% gee weer R600 — want ʼn toename van 100% verdubbel altyd enige bedrag waarop dit toegepas word, en die verdubbeling van ʼn gehalveerde bedrag gee die oorspronklike terug.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle sê ʼn toename van 45% gevolg deur ʼn afname van 20% op ʼn R2 000-item gee dieselfde finale prys as ʼn enkele toename van 25%, "aangesien 45% − 20% = 25%". Bereken die werklike finale prys na die twee opeenvolgende veranderings, en verduidelik waarom haar redenasie verkeerd is.', answer: 'Die werklike finale prys is R2 320 (2 000 × 1,45 = 2 900, en dan 2 900 × 0,80 = 2 320), wat nie dieselfde is as ʼn enkele toename van 25% op R2 000 nie (wat R2 500 sou gee). Amahle se redenasie is verkeerd omdat persentasieveranderings nie eenvoudig afgetrek kan word nie — elke persentasie word op ʼn ander basisbedrag toegepas, dus moet die gekombineerde effek stap-vir-stap bereken word, nie deur die persentasies af te trek nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het Graad 8-persentasies bemeester, van die omkeer van veranderings tot multi-stap-kettings en werklike-wêreld Rand-probleme.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die studiegids se afdelings oor persentasies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklaaiout as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Die oorspronklike bedrag vind (0-2)
        { difficulty: 'Easy', question: 'ʼn Paar tekkies se prys styg met 25% na R875. Bereken die oorspronklike prys.', answer: 'R700', checkMode: 'auto', correctAnswer: 'R700', correctAnswers: ['R700', '700'], explanation: 'Nuwe prys = 125% van oorspronklike.\nOorspronklike = 875 ÷ 1,25 = R700.\nToets: 700 × 1,25 = 875 ✓' },
        { difficulty: 'Medium', question: 'Na ʼn korting van 15% kos ʼn verwarmer R578. Bereken die oorspronklike prys van die verwarmer.', answer: 'R680', checkMode: 'auto', correctAnswer: 'R680', correctAnswers: ['R680', '680'], explanation: 'Nuwe prys = 85% van oorspronklike.\nOorspronklike = 578 ÷ 0,85 = R680.\nToets: 680 × 0,85 = 578 ✓' },
        { difficulty: 'Medium', question: 'ʼn Koor se ledetal het met 12% na 896 sangers toegeneem hierdie jaar. Bereken verlede jaar se ledetal.', answer: '800', checkMode: 'auto', correctAnswer: '800', explanation: 'Nuwe totaal = 112% van oorspronklike.\nOorspronklike = 896 ÷ 1,12 = 800 sangers.\nToets: 800 × 1,12 = 896 ✓' },

        // Blok 2 — Die nuwe bedrag direk bereken (3-6)
        { difficulty: 'Easy', question: 'Bongani se salaris van R7 200 styg met 7%. Gebruik die eenstap-vermenigvuldiger om sy nuwe salaris te bereken.', answer: 'R7 704', checkMode: 'auto', correctAnswer: 'R7704', correctAnswers: ['R7704', '7704', 'R7 704', '7 704'], explanation: 'Vermenigvuldiger vir ʼn toename van 7% = 1,07.\nNuwe salaris = 7 200 × 1,07 = R7 704 ✓' },
        { difficulty: 'Medium', question: 'ʼn Dronevliegtuig met ʼn prys van R2 600 word met 35% afgeslaan. Bereken die verkoopprys deur ʼn enkele vermenigvuldiger te gebruik.', answer: 'R1 690', checkMode: 'auto', correctAnswer: 'R1690', correctAnswers: ['R1690', '1690', 'R1 690', '1 690'], explanation: 'Vermenigvuldiger vir ʼn afname van 35% = 0,65.\nVerkoopprys = 2 600 × 0,65 = R1 690 ✓' },
        { difficulty: 'Medium', question: 'ʼn Natuurreservaat het 9 800 bome gehad. Oor vyf jaar het ʼn plantprogram die aantal bome met 15% laat toeneem. Bereken die nuwe aantal bome.', answer: '11 270', checkMode: 'auto', correctAnswer: '11270', correctAnswers: ['11270', '11 270'], explanation: 'Vermenigvuldiger vir ʼn toename van 15% = 1,15.\nNuwe totaal = 9 800 × 1,15 = 11 270 bome ✓' },
        { difficulty: 'Medium', question: 'ʼn Rugbybal kos R875 en word met 32% afgeslaan vir ʼn opruimingsverkoping. Bereken die kortingsbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R280', correctAnswers: ['R280', '280'], explanation: 'Korting = 32% van R875: 0,32 × 875 = R280 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R595', correctAnswers: ['R595', '595'], explanation: 'Verkoopprys = 875 − 280 = R595 ✓' },
        ] },

        // Blok 3 — ʼn Verandering as ʼn persentasie uitdruk (7-9)
        { difficulty: 'Easy', question: 'ʼn Leerder se wiskundepunt het van 80 na 92 gestyg (albei uit 100). Bereken die persentasietoename relatief tot die oorspronklike punt.', answer: '15%', checkMode: 'auto', correctAnswer: '15%', correctAnswers: ['15%', '15'], explanation: 'Toename = 92 − 80 = 12.\nPersentasietoename = 12 ÷ 80 × 100 = 15% ✓' },
        { difficulty: 'Medium', question: 'ʼn Fabriek se maandelikse produksie het van 560 eenhede na 420 eenhede gedaal. Bereken die persentasieafname.', answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Afname = 560 − 420 = 140.\nPersentasieafname = 140 ÷ 560 × 100 = 25% ✓' },
        { difficulty: 'Medium', question: 'ʼn Gemeenskapsgroentetuin het verlede seisoen 150 kg produkte gelewer en hierdie seisoen 198 kg. Bereken die persentasietoename in produkte.', answer: '32%', checkMode: 'auto', correctAnswer: '32%', correctAnswers: ['32%', '32'], explanation: 'Toename = 198 − 150 = 48.\nPersentasietoename = 48 ÷ 150 × 100 = 32% ✓' },

        // Blok 4 — Korting/opslag/BTW woordprobleme, Rand-kontekste (10-13)
        { difficulty: 'Medium', question: 'ʼn Yskas het ʼn prys van R640 voor BTW. Bereken die totale prys sodra 15% BTW bygevoeg word.', answer: 'R736', checkMode: 'auto', correctAnswer: 'R736', correctAnswers: ['R736', '736'], explanation: 'BTW = 15% van R640: 0,15 × 640 = R96.\nTotaal = 640 + 96 = R736 ✓' },
        { difficulty: 'Medium', question: 'ʼn Groothandelaar koop bokse teëls vir R400 elk en verhoog die prys met 35% opslag om aan ʼn hardewarewinkel te verkoop. Bereken die verkoopprys per boks.', answer: 'R540', checkMode: 'auto', correctAnswer: 'R540', correctAnswers: ['R540', '540'], explanation: 'Opslag = 35% van R400: 0,35 × 400 = R140.\nVerkoopprys = 400 + 140 = R540 ✓' },
        { difficulty: 'Medium', question: 'ʼn Bakkery koop ʼn sak meel vir R275 en verhoog dit met 20% opslag voordat dit gebruik word om brood te prys. Bereken die opslagbedrag en die opgeslane prys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Opslagbedrag', correctAnswer: 'R55', correctAnswers: ['R55', '55'], explanation: 'Opslag = 20% van R275: 0,20 × 275 = R55 ✓' },
          { label: 'b) Opgeslane prys', correctAnswer: 'R330', correctAnswers: ['R330', '330'], explanation: 'Opgeslane prys = 275 + 55 = R330 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Gebeurtenismaatskappy vra R950 vir ʼn bespreking voordat ʼn diensfooi van 12% bygevoeg word. Bereken die totale bedrag wat die kliënt betaal.', answer: 'R1 064', checkMode: 'auto', correctAnswer: 'R1064', correctAnswers: ['R1064', '1064', 'R1 064', '1 064'], explanation: 'Diensfooi = 12% van R950: 0,12 × 950 = R114.\nTotaal = 950 + 114 = R1 064 ✓' },

        // Blok 5 — Multi-stap opeenvolgende persentasieveranderingskettings (14-16)
        { difficulty: 'Hard', question: 'ʼn Aandeel met ʼn prys van R3 000 se waarde styg met 30%, en die volgende maand daal die nuwe waarde met 20%. Bereken die waarde na albei veranderings.', answer: 'R3 120', checkMode: 'auto', correctAnswer: 'R3120', correctAnswers: ['R3120', '3120', 'R3 120', '3 120'], explanation: 'Na die toename van 30%: 3 000 × 1,30 = R3 900.\nNa die afname van 20% op die nuwe waarde: 3 900 × 0,80 = R3 120 ✓' },
        { difficulty: 'Hard', question: 'ʼn Motorfiets met ʼn prys van R1 600 word met 25% afgeslaan vir ʼn vinnige verkoop, en dan verhoog die handelaar die afgeslane prys die volgende maand met 40%. Bereken die finale prys.', answer: 'R1 680', checkMode: 'auto', correctAnswer: 'R1680', correctAnswers: ['R1680', '1680', 'R1 680', '1 680'], explanation: 'Na die afname van 25%: 1 600 × 0,75 = R1 200.\nNa die toename van 40% op die nuwe prys: 1 200 × 1,40 = R1 680 ✓' },
        { difficulty: 'Hard', question: 'ʼn Spaarbalans van R5 000 daal met 20% in ʼn moeilike maand, en dan daal die nuwe balans met ʼn verdere 20% die volgende maand. Bereken die finale balans.', answer: 'R3 200', checkMode: 'auto', correctAnswer: 'R3200', correctAnswers: ['R3200', '3200', 'R3 200', '3 200'], explanation: 'Na maand 1: 5 000 × 0,80 = R4 000.\nNa maand 2 (20% van die nuwe balans): 4 000 × 0,80 = R3 200 ✓' },

        // Blok 6 — Foutopsporing/redenering (17-19)
        { difficulty: 'Hard', question: 'ʼn Luidspreker kos R640. Die winkel verlaag die prys met 25%, en ʼn maand later verhoog hulle die nuwe prys met 25%. Bereken die finale prys, en sê of dit gelyk is aan die oorspronklike R640.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Finale prys', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Na die afname van 25%: 640 × 0,75 = R480.\nNa die toename van 25% op die nuwe prys: 480 × 1,25 = R600 ✓' },
          { label: 'b) Is die finale prys gelyk aan die oorspronklike R640?', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'R600 is R40 minder as R640 — die toename van 25% word op die kleiner, afgeslane bedrag bereken, dus word minder teruggevoeg as wat weggeneem is. ✓' },
        ] },
        { difficulty: 'Hard', question: 'Thabo sê: "ʼn Prys wat met 50% verminder word en dan met 100% verhoog word, sal altyd na die oorspronklike bedrag terugkeer, ongeag wat die beginprys is." Ondersoek sy bewering deur R750 as die beginprys te gebruik, en verduidelik of hy korrek is.', answer: 'Ja, hy is korrek vir hierdie voorbeeld (en in die algemeen): R750 verminder met 50% gee R375, en R375 verhoog met 100% gee weer R750 — want ʼn toename van 100% verdubbel altyd enige bedrag waarop dit toegepas word, en die verdubbeling van ʼn gehalveerde bedrag gee die oorspronklike terug.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê ʼn toename van 40% gevolg deur ʼn afname van 20% op ʼn R1 500-item gee dieselfde finale prys as ʼn enkele toename van 20%, "aangesien 40% − 20% = 20%". Bereken die werklike finale prys na die twee opeenvolgende veranderings, en verduidelik waarom haar redenasie verkeerd is.', answer: 'Die werklike finale prys is R1 680 (1 500 × 1,40 = 2 100, en dan 2 100 × 0,80 = 1 680), wat nie dieselfde is as ʼn enkele toename van 20% op R1 500 nie (wat R1 800 sou gee). Lerato se redenasie is verkeerd omdat persentasieveranderings nie eenvoudig afgetrek kan word nie — elke persentasie word op ʼn ander basisbedrag toegepas, dus moet die gekombineerde effek stap-vir-stap bereken word, nie deur die persentasies af te trek nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het Graad 8-persentasies bemeester, van die omkeer van veranderings tot multi-stap-kettings en werklike-wêreld Rand-probleme.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die studiegids se afdelings oor persentasies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklaaiout as Stel 1 en Stel 2, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Die oorspronklike bedrag vind (0-2)
        { difficulty: 'Easy', question: 'ʼn Mikrogolfoond se prys styg met 18% na R1 180. Bereken die oorspronklike prys.', answer: 'R1 000', checkMode: 'auto', correctAnswer: 'R1000', correctAnswers: ['R1000', '1000', 'R1 000', '1 000'], explanation: 'Nuwe prys = 118% van oorspronklike.\nOorspronklike = 1 180 ÷ 1,18 = R1 000.\nToets: 1 000 × 1,18 = 1 180 ✓' },
        { difficulty: 'Medium', question: 'Na ʼn korting van 40% kos ʼn jas R450. Bereken die oorspronklike prys van die jas.', answer: 'R750', checkMode: 'auto', correctAnswer: 'R750', correctAnswers: ['R750', '750'], explanation: 'Nuwe prys = 60% van oorspronklike.\nOorspronklike = 450 ÷ 0,6 = R750.\nToets: 750 × 0,6 = 450 ✓' },
        { difficulty: 'Medium', question: 'ʼn Sokkerklub se aanhangerbasis het met 35% na 945 lede toegeneem hierdie jaar. Bereken verlede jaar se aanhangerbasis.', answer: '700', checkMode: 'auto', correctAnswer: '700', explanation: 'Nuwe totaal = 135% van oorspronklike.\nOorspronklike = 945 ÷ 1,35 = 700 lede.\nToets: 700 × 1,35 = 945 ✓' },

        // Blok 2 — Die nuwe bedrag direk bereken (3-6)
        { difficulty: 'Easy', question: 'Nomsa se salaris van R8 400 styg met 11%. Gebruik die eenstap-vermenigvuldiger om haar nuwe salaris te bereken.', answer: 'R9 324', checkMode: 'auto', correctAnswer: 'R9324', correctAnswers: ['R9324', '9324', 'R9 324', '9 324'], explanation: 'Vermenigvuldiger vir ʼn toename van 11% = 1,11.\nNuwe salaris = 8 400 × 1,11 = R9 324 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wasmasjien met ʼn prys van R5 600 word met 22% afgeslaan. Bereken die verkoopprys deur ʼn enkele vermenigvuldiger te gebruik.', answer: 'R4 368', checkMode: 'auto', correctAnswer: 'R4368', correctAnswers: ['R4368', '4368', 'R4 368', '4 368'], explanation: 'Vermenigvuldiger vir ʼn afname van 22% = 0,78.\nVerkoopprys = 5 600 × 0,78 = R4 368 ✓' },
        { difficulty: 'Medium', question: 'ʼn Wildernisreservaat het 7 500 hektaar beskermde grond gehad. Oor vier jaar het nuwe skenkings die beskermde area met 32% laat toeneem. Bereken die nuwe area.', answer: '9 900', checkMode: 'auto', correctAnswer: '9900', correctAnswers: ['9900', '9 900'], explanation: 'Vermenigvuldiger vir ʼn toename van 32% = 1,32.\nNuwe area = 7 500 × 1,32 = 9 900 hektaar ✓' },
        { difficulty: 'Medium', question: 'ʼn Eettafel kos R1 260 en word met 15% afgeslaan vir ʼn opruimingsverkoping. Bereken die kortingsbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R189', correctAnswers: ['R189', '189'], explanation: 'Korting = 15% van R1 260: 0,15 × 1 260 = R189 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R1 071', correctAnswers: ['R1071', '1071', 'R1 071', '1 071'], explanation: 'Verkoopprys = 1 260 − 189 = R1 071 ✓' },
        ] },

        // Blok 3 — ʼn Verandering as ʼn persentasie uitdruk (7-9)
        { difficulty: 'Easy', question: 'ʼn Leerder se natuurwetenskappunt het van 40 na 54 gestyg (albei uit 100). Bereken die persentasietoename relatief tot die oorspronklike punt.', answer: '35%', checkMode: 'auto', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Toename = 54 − 40 = 14.\nPersentasietoename = 14 ÷ 40 × 100 = 35% ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel se daaglikse kliëntetal het van 720 klante na 540 klante gedaal. Bereken die persentasieafname.', answer: '25%', checkMode: 'auto', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: 'Afname = 720 − 540 = 180.\nPersentasieafname = 180 ÷ 720 × 100 = 25% ✓' },
        { difficulty: 'Medium', question: 'ʼn Dam het 250 miljoen liter water bevat en bevat nou 300 miljoen liter na swaar reën. Bereken die persentasietoename in gestoorde water.', answer: '20%', checkMode: 'auto', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: 'Toename = 300 − 250 = 50.\nPersentasietoename = 50 ÷ 250 × 100 = 20% ✓' },

        // Blok 4 — Korting/opslag/BTW woordprobleme, Rand-kontekste (10-13)
        { difficulty: 'Medium', question: 'ʼn Skootrekenaar het ʼn prys van R860 voor BTW. Bereken die totale prys sodra 15% BTW bygevoeg word.', answer: 'R989', checkMode: 'auto', correctAnswer: 'R989', correctAnswers: ['R989', '989'], explanation: 'BTW = 15% van R860: 0,15 × 860 = R129.\nTotaal = 860 + 129 = R989 ✓' },
        { difficulty: 'Medium', question: 'ʼn Groothandelaar koop stelle gereedskap vir R480 elk en verhoog die prys met 25% opslag om aan ʼn hardewarewinkel te verkoop. Bereken die verkoopprys per stel.', answer: 'R600', checkMode: 'auto', correctAnswer: 'R600', correctAnswers: ['R600', '600'], explanation: 'Opslag = 25% van R480: 0,25 × 480 = R120.\nVerkoopprys = 480 + 120 = R600 ✓' },
        { difficulty: 'Medium', question: 'ʼn Spazawinkel koop ʼn kissie koeldrank vir R180 en verhoog dit met 60% opslag voordat dit aan kliënte verkoop word. Bereken die opslagbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Opslagbedrag', correctAnswer: 'R108', correctAnswers: ['R108', '108'], explanation: 'Opslag = 60% van R180: 0,60 × 180 = R108 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R288', correctAnswers: ['R288', '288'], explanation: 'Verkoopprys = 180 + 108 = R288 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Fotografiestudio vra R750 vir ʼn skoot voordat ʼn diensfooi van 18% bygevoeg word. Bereken die totale bedrag wat die kliënt betaal.', answer: 'R885', checkMode: 'auto', correctAnswer: 'R885', correctAnswers: ['R885', '885'], explanation: 'Diensfooi = 18% van R750: 0,18 × 750 = R135.\nTotaal = 750 + 135 = R885 ✓' },

        // Blok 5 — Multi-stap opeenvolgende persentasieveranderingskettings (14-16)
        { difficulty: 'Hard', question: 'ʼn Werkswinkel met ʼn waarde van R4 000 se waarde styg met 15%, en die volgende jaar daal die nuwe waarde met 15%. Bereken die waarde na albei veranderings.', answer: 'R3 910', checkMode: 'auto', correctAnswer: 'R3910', correctAnswers: ['R3910', '3910', 'R3 910', '3 910'], explanation: 'Na die toename van 15%: 4 000 × 1,15 = R4 600.\nNa die afname van 15% op die nuwe waarde: 4 600 × 0,85 = R3 910 ✓' },
        { difficulty: 'Hard', question: 'ʼn Sleepwa met ʼn prys van R3 000 word met 10% afgeslaan vir ʼn vinnige verkoop, en dan verhoog die handelaar die afgeslane prys die volgende maand met 30%. Bereken die finale prys.', answer: 'R3 510', checkMode: 'auto', correctAnswer: 'R3510', correctAnswers: ['R3510', '3510', 'R3 510', '3 510'], explanation: 'Na die afname van 10%: 3 000 × 0,90 = R2 700.\nNa die toename van 30% op die nuwe prys: 2 700 × 1,30 = R3 510 ✓' },
        { difficulty: 'Hard', question: 'ʼn Belegging van R1 600 groei met 25% in die eerste jaar, en dan groei die nuwe balans met ʼn verdere 25% in die tweede jaar. Bereken die finale balans.', answer: 'R2 500', checkMode: 'auto', correctAnswer: 'R2500', correctAnswers: ['R2500', '2500', 'R2 500', '2 500'], explanation: 'Na jaar 1: 1 600 × 1,25 = R2 000.\nNa jaar 2 (25% van die nuwe balans): 2 000 × 1,25 = R2 500 ✓' },

        // Blok 6 — Foutopsporing/redenering (17-19)
        { difficulty: 'Hard', question: 'ʼn Horlosie kos R2 000. Die winkel verhoog die prys met 45%, en ʼn maand later slaan hulle die nuwe prys met 20% af. Bereken die finale prys, en sê of dit gelyk is aan die oorspronklike R2 000.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Finale prys', correctAnswer: 'R2 320', correctAnswers: ['R2320', '2320', 'R2 320', '2 320'], explanation: 'Na die toename van 45%: 2 000 × 1,45 = R2 900.\nNa die afname van 20% op die nuwe prys: 2 900 × 0,80 = R2 320 ✓' },
          { label: 'b) Is die finale prys gelyk aan die oorspronklike R2 000?', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'R2 320 is R320 meer as R2 000 — die persentasietoename was groter en is eerste op die kleiner basis toegepas, dus is die algehele effek ʼn netto toename, nie ʼn terugkeer na die oorspronklike nie. ✓' },
        ] },
        { difficulty: 'Hard', question: 'Kagiso sê: "ʼn Prys wat met 50% verminder word en dan met 100% verhoog word, sal altyd na die oorspronklike bedrag terugkeer, ongeag wat die beginprys is." Ondersoek sy bewering deur R500 as die beginprys te gebruik, en verduidelik of hy korrek is.', answer: 'Ja, hy is korrek vir hierdie voorbeeld (en in die algemeen): R500 verminder met 50% gee R250, en R250 verhoog met 100% gee weer R500 — want ʼn toename van 100% verdubbel altyd enige bedrag waarop dit toegepas word, en die verdubbeling van ʼn gehalveerde bedrag gee die oorspronklike terug.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zinhle sê ʼn toename van 60% gevolg deur ʼn afname van 60% op ʼn R500-item gee die oorspronklike prys terug, "aangesien die persentasies dieselfde is, moet hulle mekaar ophef". Bereken die werklike finale prys na die twee opeenvolgende veranderings, en verduidelik waarom haar redenasie verkeerd is.', answer: 'Die werklike finale prys is R320 (500 × 1,60 = 800, en dan 800 × 0,40 = 320), wat nie dieselfde is as die oorspronklike R500 nie. Zinhle se redenasie is verkeerd omdat die afname van 60% op die groter, verhoogde bedrag (R800) bereken word, nie op die oorspronklike R500 nie, dus word meer weggeneem as wat die toename oorspronklik bygevoeg het — die twee veranderings hef nie mekaar op nie, selfs al is die persentasies gelyk.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het Graad 8-persentasies bemeester, van die omkeer van veranderings tot multi-stap-kettings en werklike-wêreld Rand-probleme.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die studiegids se afdelings oor persentasies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
