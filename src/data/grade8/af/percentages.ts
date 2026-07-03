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
}
