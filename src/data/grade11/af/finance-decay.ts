import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (finance decay roles) ────────────────────────────────────
// P (original value)  → blue   (#2563eb)
// i / rate factor     → red    (#dc2626)
// n (years/exponent)  → green  (#16a34a)
// A (final value)     → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const ye = (t: string) => `<span style="color:#ca8a04;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Finansies - Enkelvoudige en Saamgestelde Verval',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — SIMPLE DECAY (STRAIGHT-LINE DEPRECIATION)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-decay-straight-line',
      title: 'Enkelvoudige Verval (Reguitlyn-waardevermindering)',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Enkelvoudige verval, ook genoem <strong>reguitlyn-waardevermindering</strong>, verminder ʼn waarde met dieselfde vaste bedrag elke jaar. Die formule is <strong>A = P(1 − ni)</strong>, waar ${bl('P')} die oorspronklike waarde is, ${re('i')} die jaarlikse waardeverminderingskoers as ʼn desimale breuk is, ${gr('n')} die aantal jare is, en ${or('A')} die waarde na waardevermindering is. Omdat dieselfde randbedrag elke jaar afgetrek word, is ʼn grafiek van waarde teenoor tyd ʼn <strong>reguit lyn</strong>.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('P — oorspronklike waarde')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('i — koers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('n — jare')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('A — finale waarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#374151;margin:0;">${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')})</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Hoofsom (oorspronklike waarde)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beginwaarde van die bate voordat enige waardevermindering plaasvind.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">i — Jaarlikse waardeverminderingskoers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Uitgedruk as ʼn desimale breuk (bv. 15% p.j. → i = 0,15).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Aantal jare</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die tydperk waaroor die bate in waarde verminder.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">A — Finale waarde (boekwaarde)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde van die bate na n jaar se waardevermindering.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reguitlyn-grafiek</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat dieselfde vaste randbedrag elke jaar afgetrek word, is die grafiek van waarde teenoor tyd ʼn <strong>reguit lyn</strong> wat afwaarts loop. Die bate kan uiteindelik ʼn waarde van nul bereik as die waardeverminderingstydperk lank genoeg is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Motor ter waarde van R200 000 verminder in waarde teen 15% p.j. volgens die reguitlynmetode. Bereken die waarde na 4 jaar.',
          answer: `${or('A = R80 000')}`,
          steps: [
            `Identifiseer ${bl('P = R200 000')}, ${re('i = 0,15')}, ${gr('n = 4')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')}): ${or('A')} = ${bl('200 000')}(1 − ${gr('4')} × ${re('0,15')}).`,
            `Bereken: ${or('A')} = ${bl('200 000')}(1 − 0,6) = ${bl('200 000')}(0,4) = ${or('R80 000')}.`,
          ],
        },
        {
          question: 'ʼn Stuk toerusting verminder in waarde van R10 000 tot R5 000 in vier jaar volgens die reguitlynmetode. Bereken die waardeverminderingskoers.',
          answer: `${re('i = 12,5% p.j.')}`,
          steps: [
            `Identifiseer ${bl('P = R10 000')}, ${or('A = R5 000')}, ${gr('n = 4')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')}): ${or('5 000')} = ${bl('10 000')}(1 − ${gr('4')} × ${re('i')}).`,
            `Deel albei kante deur ${bl('10 000')}: 0,5 = 1 − ${gr('4')} × ${re('i')}.`,
            `Los op vir ${re('i')}: ${gr('4')} × ${re('i')} = 0,5, dus ${re('i')} = 0,125 = ${re('12,5% p.j.')}.`,
          ],
        },
        {
          question: 'ʼn Masjien wat vir R45 000 gekoop is, verminder in waarde met R6 000 elke jaar. Bepaal die boekwaarde na 5 jaar en druk die jaarlikse waardevermindering uit as ʼn persentasie van die oorspronklike prys.',
          answer: `${re('i = 13,33% p.j.')}, ${or('A = R15 000')}`,
          steps: [
            `Bereken die jaarlikse waardeverminderingskoers: ${re('i')} = 6 000 ÷ ${bl('45 000')} = 0,1333 = ${re('13,33% p.j.')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(1 − ${gr('n')} × ${re('i')}): ${or('A')} = ${bl('45 000')}(1 − ${gr('5')} × ${re('0,1333')}).`,
            `Bereken: ${or('A')} = ${bl('45 000')}(1 − 0,6667) = ${bl('45 000')}(0,3333) = ${or('R15 000')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Skootrekenaar ter waarde van R12 000 verminder in waarde teen 20% p.j. volgens die reguitlynmetode. Bereken die boekwaarde na 3 jaar.',
          answer: 'R4 800',
          checkMode: 'auto',
          correctAnswer: '4800',
          correctAnswers: ['R4800', 'R4 800', '4800', '4 800'],
          explanation: 'P = 12 000, i = 0,20, n = 3\nA = 12 000(1 − 3 × 0,20)\nA = 12 000(1 − 0,6) = 12 000(0,4) = R4 800 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Gebruik die reguitlyn-waardeverminderingsformule vir elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Vragmotor ter waarde van R320 000 verminder in waarde teen 12% p.j. vir 5 jaar. Vind A.',
              correctAnswer: '128000',
              correctAnswers: ['R128000', 'R128 000', '128000', '128 000'],
              explanation: 'P = 320 000, i = 0,12, n = 5\nA = 320 000(1 − 5 × 0,12) = 320 000(1 − 0,6) = 320 000(0,4) = R128 000 ✓',
            },
            {
              label: 'b) Toerusting verminder in waarde van R50 000 tot R20 000 oor 6 jaar. Vind i (as ʼn persentasie).',
              correctAnswer: '10',
              correctAnswers: ['10%', '10', '10% p.j.'],
              explanation: 'P = 50 000, A = 20 000, n = 6\n20 000 = 50 000(1 − 6i)\n0,4 = 1 − 6i → 6i = 0,6 → i = 0,10 = 10% p.j. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Fotostaatmasjien ter waarde van R96 000 verloor R8 000 aan waarde elke jaar.\n\na) Druk die jaarlikse waardevermindering uit as ʼn persentasie van die oorspronklike waarde.\nb) Bereken die boekwaarde na 7 jaar.\nc) Na hoeveel volle jare sal die boekwaarde die eerste keer nul bereik?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Jaarlikse waardeverminderingskoers (%)',
              correctAnswer: '8,33',
              correctAnswers: ['8.33%', '8.33', '8.3%', '8.3'],
              explanation: 'i = 8 000 / 96 000 = 0,0833 = 8,33% p.j. ✓',
            },
            {
              label: 'b) Boekwaarde na 7 jaar',
              correctAnswer: '40000',
              correctAnswers: ['R40000', 'R40 000', '40000', '40 000'],
              explanation: 'A = 96 000(1 − 7 × 0,0833) = 96 000(1 − 0,5833) = 96 000(0,4167) ≈ R40 000 ✓',
            },
            {
              label: 'c) Na hoeveel volle jare is die boekwaarde nul?',
              correctAnswer: '12',
              explanation: '0 = 96 000(1 − n × 0,0833)\n0,0833n = 1 → n = 12 jaar ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die reguitlyn-waardeverminderingsformule A = P(1 − ni) stap vir stap toepas, met kleurgekodeerde veranderlikes" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOUND DECAY (REDUCING BALANCE DEPRECIATION)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'compound-decay-reducing-balance',
      title: 'Saamgestelde Verval (Verminderende-balans-waardevermindering)',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Saamgestelde verval, ook genoem <strong>waardevermindering op ʼn verminderende balans</strong>, verminder ʼn waarde met ʼn vaste persentasie van sy <em>huidige</em> waarde elke jaar, nie die oorspronklike waarde nie. Die formule is <strong>A = P(1 − i)<sup>n</sup></strong>, waar ${bl('P')} die oorspronklike waarde is, ${re('(1 − i)')} die koersfaktor is, ${gr('n')} die aantal jare is, en ${or('A')} die waarde na waardevermindering is. Omdat elke jaar se waardevermindering op ʼn reeds-verminderde bedrag bereken word, neem die waarde eers vinnig af en later stadiger, wat ʼn <strong>geboë grafiek</strong> eerder as ʼn reguit lyn gee.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('P — oorspronklike waarde')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('(1−i) — koersfaktor')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('n — eksponent (jare)')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('A — finale waarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#374151;margin:0;">${or('A')} = ${bl('P')}(${re('1 − i')})<sup style="font-size:0.85em;">${gr('n')}</sup></p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Hoofsom (oorspronklike waarde)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die beginwaarde van die bate voordat enige waardevermindering plaasvind.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">(1 − i) — Koersfaktor</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Trek die koers i van 1 af (bv. 15% → 1 − 0,15 = 0,85).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">n — Aantal jare (eksponent)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die tydperk; (1 − i) word tot die mag n verhef.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">A — Finale waarde (boekwaarde)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die waarde van die bate na n jaar se waardevermindering.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Geboë grafiek</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat elke jaar se waardevermindering op ʼn <strong>kleiner basis</strong> bereken word, verloor die bate meer waarde in vroeë jare en minder in latere jare. Die grafiek is ʼn <strong>kromme</strong> wat nul nader maar dit wiskundig nooit presies bereik nie — anders as die reguitlynmetode.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Motor ter waarde van R200 000 verminder in waarde teen 15% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 4 jaar.',
          answer: `${or('A ≈ R104 400')}`,
          steps: [
            `Identifiseer ${bl('P = R200 000')}, ${re('i = 0,15')} dus ${re('1 − i = 0,85')}, ${gr('n = 4')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(${re('1 − i')})<sup>${gr('n')}</sup>: ${or('A')} = ${bl('200 000')} × (${re('0,85')})<sup>${gr('4')}</sup>.`,
            `Bereken: ${or('A')} = ${bl('200 000')} × 0,522 = ${or('R104 400')}.`,
          ],
        },
        {
          question: 'ʼn Stuk toerusting verminder in waarde van R10 000 tot R5 000 in vier jaar volgens die verminderende-balans-metode. Bereken die waardeverminderingskoers.',
          answer: `${re('i ≈ 15,91% p.j.')}`,
          steps: [
            `Identifiseer ${bl('P = R10 000')}, ${or('A = R5 000')}, ${gr('n = 4')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(${re('1 − i')})<sup>${gr('n')}</sup>: ${or('5 000')} = ${bl('10 000')}(${re('1 − i')})<sup>${gr('4')}</sup>.`,
            `Deel albei kante deur ${bl('10 000')}: 0,5 = (${re('1 − i')})<sup>${gr('4')}</sup>.`,
            `Neem die vierdemagswortel van albei kante: ${re('1 − i')} = 0,8409.`,
            `Los op vir ${re('i')}: ${re('i')} = 1 − 0,8409 = 0,1591 = ${re('15,91% p.j.')}.`,
          ],
        },
        {
          question: 'ʼn Afleweringsvoertuig wat vir R350 000 gekoop is, verminder in waarde teen 18% p.j. volgens die verminderende-balans-metode. Na hoeveel jaar sal dit minder as R100 000 werd wees?',
          answer: `${gr('7 jaar')}`,
          steps: [
            `Identifiseer ${bl('P = R350 000')}, ${re('1 − i = 0,82')}, drempel ${or('A = R100 000')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(${re('1 − i')})<sup>${gr('n')}</sup>: ${or('100 000')} = ${bl('350 000')} × (${re('0,82')})<sup>${gr('n')}</sup>.`,
            `Deel albei kante deur ${bl('350 000')}: 0,2857 = (${re('0,82')})<sup>${gr('n')}</sup>.`,
            `<strong>Neem logaritmes van albei kante</strong> (hierdie logaritme-metode word ook by saamgestelde groei gebruik): ${gr('n')} = log(0,2857) ÷ log(${re('0,82')}).`,
            `Bereken: ${gr('n')} = (−0,5441) ÷ (−0,0862) = 6,32. Rond na bo af aangesien die waarde <em>onder</em> die drempel moet daal — die voertuig sal na ${gr('7 jaar')} minder as R100 000 werd wees.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Yskas ter waarde van R15 000 verminder in waarde teen 10% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 3 jaar.',
          answer: 'R10 935',
          checkMode: 'auto',
          correctAnswer: '10935',
          correctAnswers: ['R10935', 'R10 935', '10935', '10 935'],
          explanation: 'P = 15 000, i = 0,10, n = 3\nA = 15 000 × (0,90)³\nA = 15 000 × 0,729 = R10 935 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Gebruik die verminderende-balans-waardeverminderingsformule vir elk van die volgende.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Masjien ter waarde van R80 000 verminder in waarde teen 20% p.j. vir 4 jaar. Vind A.',
              correctAnswer: '32768',
              correctAnswers: ['R32768', 'R32 768', '32768', '32 768'],
              explanation: 'A = 80 000 × (0,80)⁴ = 80 000 × 0,4096 = R32 768 ✓',
            },
            {
              label: 'b) ʼn Rekenaar verminder in waarde van R25 000 tot R6 250 in 4 jaar volgens die verminderende-balans-metode. Vind i (as ʼn persentasie).',
              correctAnswer: '29,29',
              correctAnswers: ['29.29%', '29.29', '29.3%', '29.3'],
              explanation: 'P = 25 000, A = 6 250, n = 4\n6 250 = 25 000(1 − i)⁴\n0,25 = (1 − i)⁴\n1 − i = ⁴√0,25 = 0,7071 → i = 0,2929 = 29,29% p.j. ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Boot word vir R500 000 gekoop en verminder in waarde teen 22% p.j. volgens die verminderende-balans-metode.\n\na) Bereken die waarde van die boot na 3 jaar.\nb) Na hoeveel jaar sal die boot minder as R150 000 werd wees?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Waarde na 3 jaar',
              correctAnswer: '237276',
              correctAnswers: ['R237276', 'R237 276', '237276', '237 276'],
              explanation: 'A = 500 000 × (0,78)³ = 500 000 × 0,4746 = R237 276 ✓',
            },
            {
              label: 'b) Na hoeveel jaar is A < R150 000? (rond na bo af)',
              correctAnswer: '5',
              explanation: '150 000 = 500 000 × (0,78)ⁿ\n0,3 = (0,78)ⁿ\nn = log(0,3)/log(0,78) = 4,84 → rond na bo af na 5 jaar.\nKontroleer: 500 000 × (0,78)⁵ ≈ R144 358 < R150 000 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verminderende-balans-waardeverminderingsformule A = P(1 − i)^n stap vir stap toepas, insluitend ʼn logaritme-voorbeeld om n te vind" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — COMPARING STRAIGHT-LINE AND REDUCING-BALANCE DEPRECIATION
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-depreciation-methods',
      title: 'Vergelyking van Reguitlyn- en Verminderende-balans-waardevermindering',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">Dieselfde bate verminder verskillend in waarde afhangende van watter metode gebruik word. <strong>Reguitlyn-waardevermindering</strong> verwyder dieselfde randwaarde elke jaar, sodat die bate ʼn waarde van nul kan bereik. <strong>Verminderende-balans-waardevermindering</strong> verwyder ʼn persentasie van die huidige waarde elke jaar, sodat die bate se waarde nul nader maar dit wiskundig nooit presies bereik nie. Vir dieselfde oorspronklike waarde en dieselfde aantal jare laat die verminderende-balans-metode gewoonlik ʼn hoër resterende waarde as die reguitlynmetode nadat verskeie jare verloop het, omdat latere jare op ʼn kleiner basis waardeverminder word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reguitlyn-resultate')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('verminderende-balans-resultate')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('vergelykende gevolgtrekkings')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelverskille op ʼn oogopslag</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Reguitlyn: A = P(1 − ni)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde randbedrag word elke jaar afgetrek. Grafiek: reguit lyn. Bate kan nul bereik.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Verminderende balans: A = P(1 − i)<sup>n</sup></p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde persentasie van die huidige waarde word afgetrek. Grafiek: kromme. Bereik wiskundig nooit nul nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Praktiese wenk</p>` +
        `<p style="margin:0;color:#92400e;">Vir dieselfde koers en dieselfde tydperk laat ${or('verminderende-balans gewoonlik ʼn hoër resterende waarde')} as reguitlyn nadat verskeie jare verloop het. Watter metode die groter belastingaftrekking gee, hang af van die koers en die aantal jare — bereken altyd albei en vergelyk.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Rekenaar ter waarde van R18 000 verminder in waarde teen 20% p.j. Bereken die waarde na 3 jaar met (a) die reguitlynmetode en (b) die verminderende-balans-metode.',
          answer: `${bl('Reguitlyn: R7 200')}; ${gr('Verminderende balans: R9 216')}`,
          steps: [
            `${bl('Reguitlyn:')} A = 18 000(1 − 3 × 0,2) = 18 000(0,4) = ${bl('R7 200')}.`,
            `${gr('Verminderende balans:')} A = 18 000(1 − 0,2)<sup>3</sup> = 18 000(0,8)<sup>3</sup> = 18 000(0,512) = ${gr('R9 216')}.`,
            `${or('Vergelyk:')} die verminderende-balans-waarde (${gr('R9 216')}) is hoër as die reguitlynwaarde (${bl('R7 200')}) na dieselfde tydperk.`,
          ],
        },
        {
          question: 'Twee identiese masjiene ter waarde van R80 000 elk verminder oor 5 jaar in waarde, een teen 10% p.j. reguitlyn en die ander teen 10% p.j. verminderende balans. Bepaal watter masjien die hoër boekwaarde na 5 jaar het, sonder om die volledige verminderende-balans-berekening te doen.',
          answer: `${or('Die verminderende-balans-masjien het die hoër boekwaarde.')}`,
          steps: [
            `Besef dat verminderende-balans-waardevermindering minder waarde in latere jare verwyder aangesien dit op ʼn ${gr('krimpende basis')} inwerk.`,
            `${or('Gevolgtrekking:')} teen dieselfde koers en dieselfde tydperk (na jaar 1) sal die ${gr('verminderende-balans')}-masjien altyd ʼn hoër boekwaarde behou as die ${bl('reguitlyn')}-masjien. Die reguitlynmetode verwyder elke jaar dieselfde vaste bedrag ongeag hoe laag die waarde reeds geval het.`,
          ],
        },
        {
          question: 'ʼn Besigheid moet ʼn waardeverminderingsmetode vir belastingdoeleindes kies. Bate A kos R60 000 en verminder in waarde teen 25% p.j. Bereken die boekwaarde na 2 jaar met albei metodes en verduidelik watter metode ʼn laer belasbare boekwaarde (en dus ʼn groter waardeverminderingsaftrekking) in hierdie geval tot gevolg het.',
          answer: `${or('Reguitlyn gee die laer boekwaarde (R30 000) en die groter aftrekking.')}`,
          steps: [
            `${bl('Reguitlyn:')} A = 60 000(1 − 2 × 0,25) = 60 000(0,5) = ${bl('R30 000')}.`,
            `${gr('Verminderende balans:')} A = 60 000(1 − 0,25)<sup>2</sup> = 60 000(0,75)<sup>2</sup> = 60 000(0,5625) = ${gr('R33 750')}.`,
            `${or('Gevolgtrekking:')} die reguitlynmetode gee die laer boekwaarde (${bl('R30 000')}), wat ʼn groter waardeverminderingsaftrekking van R30 000 oor 2 jaar beteken in vergelyking met R26 250 onder die verminderende-balans-metode.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Motorfiets ter waarde van R50 000 verminder in waarde teen 15% p.j. Bereken die waarde na 2 jaar met albei metodes en dui aan watter een die hoër boekwaarde gee.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Reguitlynwaarde na 2 jaar (R)',
              correctAnswer: '35000',
              correctAnswers: ['R35000', 'R35 000', '35000', '35 000'],
              explanation: 'A = 50 000(1 − 2 × 0,15) = 50 000(0,70) = R35 000 ✓',
            },
            {
              label: 'b) Verminderende-balans-waarde na 2 jaar (R)',
              correctAnswer: '36125',
              correctAnswers: ['R36125', 'R36 125', '36125', '36 125'],
              explanation: 'A = 50 000(0,85)² = 50 000 × 0,7225 = R36 125 ✓',
            },
            {
              label: 'c) Watter metode gee die hoër boekwaarde?',
              correctAnswer: 'reducing-balance',
              correctAnswers: ['reducing-balance', 'reducing balance', 'RB', 'compound decay', 'verminderende balans', 'verminderende-balans'],
              explanation: 'Verminderende balans (R36 125) > reguitlyn (R35 000) — verminderende balans gee die hoër boekwaarde ✓',
            },
          ],
        },
        {
          difficulty: 'Medium',
          question: 'Kantoormeubels ter waarde van R24 000 verminder oor 4 jaar in waarde teen 20% p.j. met albei metodes.\n\na) Bereken die reguitlyn-boekwaarde na 4 jaar.\nb) Bereken die verminderende-balans-boekwaarde na 4 jaar.\nc) Wat is die verskil tussen die twee waardes?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Reguitlynwaarde (R)',
              correctAnswer: '4800',
              correctAnswers: ['R4800', 'R4 800', '4800', '4 800'],
              explanation: 'A = 24 000(1 − 4 × 0,20) = 24 000(0,2) = R4 800 ✓',
            },
            {
              label: 'b) Verminderende-balans-waarde (R)',
              correctAnswer: '9830',
              correctAnswers: ['R9830', 'R9 830', '9830', '9 830', '9830.4', 'R9830.4', 'R9 830.40'],
              explanation: 'A = 24 000(0,80)⁴ = 24 000 × 0,4096 = R9 830,40 ✓',
            },
            {
              label: 'c) Verskil tussen die twee waardes (R)',
              correctAnswer: '5030',
              correctAnswers: ['R5030', 'R5 030', '5030', '5 030', '5030.4', 'R5030.4'],
              explanation: 'R9 830 − R4 800 = R5 030 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Fabrieksmasjien ter waarde van R200 000 moet in waarde verminder tot ʼn resterende waarde van R50 000.\n\na) Hoeveel jare neem dit met reguitlyn-waardevermindering teen 10% p.j.?\nb) Hoeveel jare neem dit met verminderende-balans-waardevermindering teen 10% p.j.? (rond na bo af)\nc) Watter metode bereik die teiken-resterende waarde in minder jare?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Jare met reguitlyn (10% p.j.)',
              correctAnswer: '7,5',
              correctAnswers: ['7.5', '7.5 jaar', '7½'],
              explanation: '50 000 = 200 000(1 − n × 0,10)\n0,25 = 1 − 0,10n → 0,10n = 0,75 → n = 7,5 jaar ✓',
            },
            {
              label: 'b) Jare met verminderende balans (10% p.j.), na bo afgerond',
              correctAnswer: '14',
              explanation: '50 000 = 200 000(0,90)ⁿ\n0,25 = (0,90)ⁿ\nn = log(0,25)/log(0,90) = 13,16 → rond na bo af na 14 jaar ✓',
            },
            {
              label: 'c) Watter metode bereik R50 000 in minder jare?',
              correctAnswer: 'straight-line',
              correctAnswers: ['straight-line', 'straight line', 'SL', 'simple decay', 'reguitlyn', 'reguitlynmetode'],
              explanation: 'Reguitlyn (7,5 jaar) bereik R50 000 baie vroeër as verminderende balans (14 jaar) teen dieselfde koers ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat reguitlyn- en verminderende-balans-waardevermindering langs mekaar vergelyk vir dieselfde bate, koers, en tydperk" />',
      diagramPlaceholder:
        'Albei die reguitlyn- en verminderende-balans-grafieke geteken op dieselfde stel asse vir dieselfde beginwaarde, met die punt waar die verminderende-balans-kromme bo die reguit lyn lê duidelik gemerk',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 200" width="100%" style="max-width:340px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="45" y1="12" x2="45" y2="165" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="45,5 40,15 50,15" fill="#0f1f3d"/>` +
        `<line x1="40" y1="160" x2="253" y2="160" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="260,160 250,155 250,165" fill="#0f1f3d"/>` +
        `<text x="18" y="24" font-size="8" fill="#6b7280">R18 000</text>` +
        `<text x="30" y="164" font-size="8" fill="#6b7280">0</text>` +
        `<line x1="45" y1="159" x2="45" y2="161" stroke="#6b7280" stroke-width="1"/>` +
        `<line x1="85" y1="159" x2="85" y2="161" stroke="#6b7280" stroke-width="1"/>` +
        `<line x1="125" y1="159" x2="125" y2="161" stroke="#6b7280" stroke-width="1"/>` +
        `<line x1="165" y1="159" x2="165" y2="161" stroke="#6b7280" stroke-width="1"/>` +
        `<line x1="205" y1="159" x2="205" y2="161" stroke="#6b7280" stroke-width="1"/>` +
        `<line x1="245" y1="159" x2="245" y2="161" stroke="#6b7280" stroke-width="1"/>` +
        `<text x="45" y="175" text-anchor="middle" font-size="8" fill="#6b7280">0</text>` +
        `<text x="85" y="175" text-anchor="middle" font-size="8" fill="#6b7280">1</text>` +
        `<text x="125" y="175" text-anchor="middle" font-size="8" fill="#6b7280">2</text>` +
        `<text x="165" y="175" text-anchor="middle" font-size="8" fill="#6b7280">3</text>` +
        `<text x="205" y="175" text-anchor="middle" font-size="8" fill="#6b7280">4</text>` +
        `<text x="245" y="175" text-anchor="middle" font-size="8" fill="#6b7280">5 jr</text>` +
        `<polyline points="45,20 85,48 125,76 165,104 205,132 245,160" fill="none" stroke="#2563eb" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<polyline points="45,20 85,48 125,70 165,88 205,103 245,114" fill="none" stroke="#16a34a" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>` +
        `<circle cx="85" cy="48" r="3.5" fill="#0f1f3d"/>` +
        `<line x1="175" y1="14" x2="190" y2="14" stroke="#2563eb" stroke-width="2.5"/>` +
        `<text x="194" y="17" font-size="8" font-weight="700" fill="#2563eb">Reguitlyn</text>` +
        `<line x1="175" y1="26" x2="190" y2="26" stroke="#16a34a" stroke-width="2.5"/>` +
        `<text x="194" y="29" font-size="8" font-weight="700" fill="#16a34a">Verm. balans</text>` +
        `<text x="140" y="192" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">Selfde P, selfde koers: verminderende balans bly hoër ná jaar 1</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — COMPOUND AND SIMPLE GROWTH
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'compound-and-simple-growth',
      title: 'Saamgestelde en Enkelvoudige Groei',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 10 het jy twee groeiformules leer ken: <strong>enkelvoudige groei</strong>, ${or('A')} = ${bl('P')}(1 + ${gr('n')} × ${re('i')}), en <strong>saamgestelde groei</strong>, ${or('A')} = ${bl('P')}(1 + ${re('i')})<sup>${gr('n')}</sup>. In Graad 11 word dieselfde twee formules hersien en toegepas op moeiliker, meer realistiese probleme — <strong>huurkoop</strong>-ooreenkomste met ʼn deposito en maandelikse paaiemente, <strong>bevolkingsgroei</strong>, en <strong>beleggingsgroei</strong> — en word daar dikwels van jou verwag om vir ${bl('P')}, ${re('i')} of ${gr('n')} op te los, en nie net vir ${or('A')} nie.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('P — oorspronklike waarde')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('i — koers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('n — jare')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('A — finale waarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee groeiformules (hersiening)</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;font-size:0.95em;">Enkelvoudige groei</p>` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${or('A')} = ${bl('P')}(1 + ${gr('n')} × ${re('i')})</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;text-align:center;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:6px;font-size:0.95em;">Saamgestelde groei</p>` +
        `<p style="font-size:1.2em;font-weight:700;color:#374151;margin:0;">${or('A')} = ${bl('P')}(1 + ${re('i')})<sup style="font-size:0.85em;">${gr('n')}</sup></p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Werklike groeikontekste</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Huurkoop</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Deposito word eers van die kontantprys afgetrek. Enkelvoudige groei word dan op die <strong>oorblywende balans</strong> toegepas om die totaal van die paaiemente te vind. Deel daardie totaal deur die aantal maande om die maandelikse paaiement te vind.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Bevolkingsgroei</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Groeiende bevolking groei presies soos saamgestelde rente — elke jaar se groei word bereken op die <strong>nuwe, groter</strong> bevolking, nie op die oorspronklike bevolking nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Beleggingsgroei</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Eenmalige beleggings groei onder saamgestelde groei. Graad 11-probleme gee dikwels die <strong>teiken</strong>-toekomstige bedrag en vra jou om agteruit te werk om die hoofsom, koers, of tyd te vind wat benodig word om dit te bereik.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Oplos vir P, i of n</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat ${gr('n')} ʼn eksponent in die saamgestelde formule is, beteken die oplos vir ${re('i')} gewoonlik dat albei kante gedeel word en dan die ${gr('n')}<sup>de</sup> wortel getrek word, terwyl die oplos vir ${bl('P')} bloot ʼn deling is. Om vir ${gr('n')} self op te los, benodig logaritmes, wat behandel word in die Nominale en Effektiewe Rentekoerse- en Gemengde Toepassings-afdelings.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Wasmasjien het ʼn kontantprys van R14 500. Naledi betaal ʼn 10%-deposito en betaal die balans, plus enkelvoudige rente teen 16% p.j., oor 3 jaar in gelyke maandelikse paaiemente terug. Bereken (a) haar deposito, (b) haar totale terugbetaling, en (c) haar maandelikse paaiement.',
          answer: `${bl('Deposito = R1 450')}; ${or('Totale terugbetaling = R20 764')}; ${gr('Maandelikse paaiement = R536,50')}`,
          steps: [
            `${bl('Deposito:')} 10% × R14 500 = ${bl('R1 450')}.`,
            `${bl('Balans verskuldig:')} R14 500 − ${bl('R1 450')} = ${bl('R13 050')}. Hierdie balans word die nuwe ${bl('P')} vir die enkelvoudige-groei-formule.`,
            `Pas enkelvoudige groei op die balans toe: ${or('A')} = ${bl('P')}(1 + ${gr('n')} × ${re('i')}) = ${bl('13 050')}(1 + ${gr('3')} × ${re('0,16')}) = ${bl('13 050')}(1,48) = ${or('R19 314')}. Dit is die totaal wat sy op die balans terugbetaal.`,
            `${or('Totale terugbetaling')} = deposito + balansterugbetaling = ${bl('R1 450')} + ${or('R19 314')} = ${or('R20 764')}.`,
            `${gr('Maandelikse paaiement')} = ${or('R19 314')} ÷ (${gr('3')} × 12 maande) = R19 314 ÷ 36 = ${gr('R536,50')}.`,
          ],
        },
        {
          question: 'ʼn Dorp se bevolking het van 42 000 tot 51 660 oor 7 jaar gegroei, met die aanname van saamgestelde groei. Bereken die jaarlikse bevolkingsgroeikoers.',
          answer: `${re('i ≈ 3,00% p.j.')}`,
          steps: [
            `Identifiseer ${bl('P = 42 000')}, ${or('A = 51 660')}, ${gr('n = 7')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(1 + ${re('i')})<sup>${gr('n')}</sup>: ${or('51 660')} = ${bl('42 000')}(1 + ${re('i')})<sup>${gr('7')}</sup>.`,
            `Deel albei kante deur ${bl('42 000')}: (1 + ${re('i')})<sup>${gr('7')}</sup> = 1,23.`,
            `Trek die 7de wortel van albei kante: 1 + ${re('i')} = 1,23<sup>1/7</sup> = 1,0300.`,
            `Los op vir ${re('i')}: ${re('i')} = 1,0300 − 1 = 0,0300 = ${re('3,00% p.j.')}.`,
          ],
        },
        {
          question: 'Thabo wil oor 6 jaar R250 000 beskikbaar hê. As hy vandag ʼn enkelbedrag teen 9,5% p.j. jaarliks saamgestel belê, hoeveel moet hy nou belê?',
          answer: `${bl('P ≈ R145 029,15')}`,
          steps: [
            `Identifiseer ${or('A = R250 000')}, ${re('i = 0,095')}, ${gr('n = 6')}. Hierdie keer los ons vir ${bl('P')} op, nie vir ${or('A')} nie.`,
            `Vervang in ${or('A')} = ${bl('P')}(1 + ${re('i')})<sup>${gr('n')}</sup>: ${or('250 000')} = ${bl('P')}(1,095)<sup>${gr('6')}</sup>.`,
            `Bereken die groeifaktor: (1,095)<sup>6</sup> ≈ 1,723791.`,
            `Los op vir ${bl('P')}: ${bl('P')} = ${or('250 000')} ÷ 1,723791 ≈ ${bl('R145 029,15')}.`,
            `Toets: ${bl('R145 029,15')} × (1,095)<sup>6</sup> ≈ ${or('R250 000')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Kagiso belê R18 000 teen 9% p.j. saamgestelde rente vir 5 jaar. Bereken die finale bedrag, afgerond na die naaste rand.',
          answer: 'R27 695',
          checkMode: 'auto',
          correctAnswer: '27695',
          correctAnswers: ['R27695', 'R27 695', '27695', '27 695'],
          explanation: 'A = P(1 + i)ⁿ\nA = 18 000(1,09)⁵\nA = 18 000 × 1,538624 ≈ R27 695 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Yskas het ʼn kontantprys van R22 000. Zanele betaal ʼn 12%-deposito en betaal die balans, plus enkelvoudige rente teen 14% p.j., oor 4 jaar in gelyke maandelikse paaiemente terug.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bereken haar deposito (R).',
              correctAnswer: '2640',
              correctAnswers: ['R2640', 'R2 640', '2640', '2 640'],
              explanation: 'Deposito = 12% × 22 000 = R2 640 ✓',
            },
            {
              label: 'b) Bereken haar totale terugbetaling (deposito plus paaiemente), tot die naaste sent.',
              correctAnswer: '32841.60',
              correctAnswers: ['R32841,60', 'R32 841,60', '32841,60', '32 841,60', 'R32842', 'R32 842', '32842'],
              explanation: 'Balans = 22 000 − 2 640 = R19 360.\nBalansterugbetaling: A = 19 360(1 + 4 × 0,14) = 19 360(1,56) = R30 201,60.\nTotale terugbetaling = 2 640 + 30 201,60 = R32 841,60 ✓',
            },
            {
              label: 'c) Bereken haar maandelikse paaiement (R).',
              correctAnswer: '629.20',
              correctAnswers: ['R629,20', 'R629,2', '629,20', '629,2'],
              explanation: 'Maandelikse paaiement = R30 201,60 ÷ (4 × 12) = R30 201,60 ÷ 48 = R629,20 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Beantwoord die volgende groeiprobleme, wat elkeen vereis dat jy vir ʼn veranderlike anders as A oplos.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Stad se bevolking het van 28 000 tot 34 000 oor 4 jaar gegroei as gevolg van saamgestelde groei. Bereken die jaarlikse groeikoers (%, tot 2 desimale plekke).',
              correctAnswer: '4.97',
              correctAnswers: ['4.97%', '4.97', '4,97%', '4,97', '5.0%', '5.0', '5,0%', '5,0', '5%'],
              explanation: '34 000 = 28 000(1 + i)⁴\n(1 + i)⁴ = 1,214286\n1 + i = 1,214286^(1/4) ≈ 1,0497\ni ≈ 0,0497 = 4,97% p.j. ✓',
            },
            {
              label: 'b) ʼn Belegger wil oor 5 jaar R200 000 beskikbaar hê. As sy nou ʼn enkelbedrag teen 10% p.j. jaarliks saamgestel belê, bereken die bedrag wat sy vandag moet belê (R, tot die naaste rand).',
              correctAnswer: '124184',
              correctAnswers: ['R124184', 'R124 184', '124184', '124 184'],
              explanation: '200 000 = P(1,10)⁵\n(1,10)⁵ ≈ 1,61051\nP = 200 000 ÷ 1,61051 ≈ R124 184 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat enkelvoudige en saamgestelde groei van Graad 10 hersien en dit toepas op moeiliker Graad 11-probleme: huurkoop met deposito en paaiemente, oplos vir die groeikoers in ʼn bevolkingsprobleem, en oplos vir die hoofsom in ʼn beleggingsprobleem" />',
      diagramPlaceholder:
        'ʼn Vloeidiagram vir die huurkoop-uitgewerkte-voorbeeld wat die kontantprys, afgetrekte deposito, oorblywende balans, en die balans wat onder enkelvoudige rente groei tot gelyke maandelikse paaiemente, wys',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 310 115" width="100%" style="max-width:380px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<rect x="2" y="40" width="58" height="42" rx="6" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="31" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">Kontantprys</text>` +
        `<text x="31" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">R14 500</text>` +
        `<line x1="60" y1="61" x2="82" y2="61" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="82,61 74,57 74,65" fill="#0f1f3d"/>` +
        `<text x="71" y="33" text-anchor="middle" font-size="7" font-weight="700" fill="#dc2626">−10% deposito</text>` +
        `<rect x="82" y="40" width="58" height="42" rx="6" fill="rgba(37,99,235,0.08)" stroke="#2563eb" stroke-width="1.5"/>` +
        `<text x="111" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">Balans</text>` +
        `<text x="111" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">R13 050</text>` +
        `<line x1="140" y1="61" x2="162" y2="61" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="162,61 154,57 154,65" fill="#0f1f3d"/>` +
        `<text x="151" y="33" text-anchor="middle" font-size="7" font-weight="700" fill="#dc2626">+16% p.j. × 3jr</text>` +
        `<rect x="162" y="40" width="58" height="42" rx="6" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="191" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">Totale terugb.</text>` +
        `<text x="191" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">R19 314</text>` +
        `<line x1="220" y1="61" x2="242" y2="61" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="242,61 234,57 234,65" fill="#0f1f3d"/>` +
        `<text x="231" y="33" text-anchor="middle" font-size="7" font-weight="700" fill="#16a34a">÷ 36 maande</text>` +
        `<rect x="242" y="40" width="58" height="42" rx="6" fill="rgba(234,88,12,0.08)" stroke="#ea580c" stroke-width="1.5"/>` +
        `<text x="271" y="58" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">Paaiement</text>` +
        `<text x="271" y="70" text-anchor="middle" font-size="9" font-weight="700" fill="#ea580c">R536,50</text>` +
        `<text x="155" y="100" text-anchor="middle" font-size="8" fill="#6b7280">Deposito → balans → enkelvoudige rente → gelyke maandelikse paaiemente</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — NOMINAL AND EFFECTIVE INTEREST RATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nominal-effective-interest-rates',
      title: 'Nominale en Effektiewe Rentekoerse',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>nominale rentekoers</strong> is die genoemde jaarlikse koers voordat samestelling binne die jaar in ag geneem word. Die <strong>effektiewe jaarlikse rentekoers</strong> is die werklike koers wat in ʼn jaar verdien of betaal word sodra samestellingstydperke in ag geneem word, en is altyd hoër as die nominale koers wanneer samestelling meer as een keer per jaar plaasvind. Die formule wat hulle verbind, is: ${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup>${ye('m')}</sup> − 1, waar ${re('i_nom')} die nominale jaarlikse koers is en ${ye('m')} die aantal samestellingstydperke per jaar is (byvoorbeeld 12 vir maandeliks, 4 vir kwartaalliks, 2 vir halfjaarliks, 365 vir daagliks).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('i_nom — nominale koers')}</span>` +
        `<span style="background:#fefce8;border:1px solid #fde047;border-radius:6px;padding:3px 10px;font-size:13px;">${ye('m — samestellingstydperke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('i_eff — effektiewe koers')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die formule</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.3em;font-weight:700;color:#374151;margin:0;">${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup style="font-size:0.85em;">${ye('m')}</sup> − 1</p>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">i_nom — Nominale jaarlikse koers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die genoemde jaarlikse rentekoers, voordat die samestellingsfrekwensie in ag geneem word. Skakel persentasie om na desimaal (bv. 12% → 0,12).</p>` +
        `</div>` +

        `<div style="background:#fefce8;border:1.5px solid #fde047;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ca8a04;margin-bottom:4px;">m — Samestellingstydperke per jaar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Aantal kere wat rente per jaar toegepas word: 2 = halfjaarliks, 4 = kwartaalliks, 12 = maandeliks, 365 = daagliks.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">i_eff — Effektiewe jaarlikse koers</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die werklike koers verdien na alle samestelling binne die jaar. Altyd groter as of gelyk aan die nominale koers.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die effektiewe koers belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer twee rentekoerse met verskillende samestellingsfrekwensies vergelyk word, skakel altyd albei om na hul effektiewe jaarlikse koerse voordat jy vergelyk — die effektiewe koers stel almal op gelyke voet en wys jou watter opsie werklik meer verdien.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Bank bied ʼn nominale rentekoers van 12% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers.',
          answer: `${gr('i_eff = 12,68% p.j.')}`,
          steps: [
            `Identifiseer ${re('i_nom = 0,12')}, ${ye('m = 12')} (maandeliks).`,
            `Vervang in ${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup>${ye('m')}</sup> − 1: ${gr('i_eff')} = (1 + ${re('0,12')} ÷ ${ye('12')})<sup>${ye('12')}</sup> − 1.`,
            `Vereenvoudig binne die hakie: (1 + 0,01)<sup>12</sup> − 1 = (1,01)<sup>12</sup> − 1.`,
            `Bereken: ${gr('i_eff')} = 1,1268 − 1 = 0,1268 = ${gr('12,68% p.j.')}.`,
          ],
        },
        {
          question: 'Watter is die beter belegging: 10,5% p.j. daagliks saamgestel, of 10,55% p.j. maandeliks saamgestel?',
          answer: `${gr('Albei gee ʼn effektiewe koers van ongeveer 11,07% — hulle is in wese ewe goed.')}`,
          steps: [
            `Opsie 1: ${re('i_nom = 0,105')}, ${ye('m = 365')}. ${gr('i_eff1')} = (1 + ${re('0,105')} ÷ ${ye('365')})<sup>${ye('365')}</sup> − 1 = 0,1107 = ${gr('11,07%')}.`,
            `Opsie 2: ${re('i_nom = 0,1055')}, ${ye('m = 12')}. ${gr('i_eff2')} = (1 + ${re('0,1055')} ÷ ${ye('12')})<sup>${ye('12')}</sup> − 1 = 0,1107 = ${gr('11,07%')}.`,
            `Albei opsies gee ʼn effektiewe jaarlikse koers van ${gr('ongeveer 11,07%')} — hulle is in wese ewe goeie beleggings.`,
          ],
        },
        {
          question: 'ʼn Effektiewe jaarlikse rentekoers van 8,5% word genoem. Bepaal die ekwivalente nominale jaarlikse koers as rente kwartaalliks saamgestel word.',
          answer: `${re('i_nom = 8,24% p.j.')}`,
          steps: [
            `Vervang in ${gr('i_eff')} = (1 + ${re('i_nom')} ÷ ${ye('m')})<sup>${ye('m')}</sup> − 1 met ${gr('i_eff = 0,085')} en ${ye('m = 4')}: 0,085 = (1 + ${re('i_nom')} ÷ ${ye('4')})<sup>${ye('4')}</sup> − 1.`,
            `Tel 1 by albei kante: 1,085 = (1 + ${re('i_nom')} ÷ ${ye('4')})<sup>${ye('4')}</sup>.`,
            `Neem die vierdemagswortel van albei kante: 1 + ${re('i_nom')} ÷ ${ye('4')} = ⁴√1,085 = 1,0206.`,
            `Los op vir ${re('i_nom')}: ${re('i_nom')} ÷ ${ye('4')} = 0,0206, dus ${re('i_nom')} = 4 × 0,0206 = 0,0824 = ${re('8,24% p.j.')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Bank bied 9% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (gee jou antwoord as ʼn persentasie tot 2 desimale plekke).',
          answer: '9,38%',
          checkMode: 'auto',
          correctAnswer: '9,38',
          correctAnswers: ['9.38%', '9.38', '9.4%', '9.4'],
          explanation: 'i_nom = 0,09, m = 12\ni_eff = (1 + 0,09/12)^12 − 1 = (1,0075)^12 − 1 = 1,09381 − 1 = 9,38% ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Beantwoord die volgende nominale en effektiewe rentekoers-vrae.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) ʼn Spaarrekening betaal 18% p.j. kwartaalliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (%).',
              correctAnswer: '19,25',
              correctAnswers: ['19.25%', '19.25', '19.3%', '19.3'],
              explanation: 'i_eff = (1 + 0,18/4)^4 − 1 = (1,045)^4 − 1 = 1,19252 − 1 = 19,25% ✓',
            },
            {
              label: 'b) ʼn Effektiewe jaarlikse koers van 15% is ekwivalent aan watter nominale koers, maandeliks saamgestel (%)? Gee jou antwoord tot 2 desimale plekke.',
              correctAnswer: '14,06',
              correctAnswers: ['14.06%', '14.06', '14.1%', '14.1'],
              explanation: '0,15 = (1 + i_nom/12)^12 − 1\n1,15 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1,15 = 1,01172\ni_nom = 12 × 0,01172 = 14,06% ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Bank bied ʼn spaarrekening teen 12% p.j., óf kwartaalliks óf maandeliks saamgestel.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bereken die effektiewe jaarlikse koers indien kwartaalliks saamgestel (%).',
              correctAnswer: '12,55',
              correctAnswers: ['12.55%', '12.55', '12.6%', '12.6'],
              explanation: 'i_eff = (1 + 0,12/4)^4 − 1 = (1,03)^4 − 1 = 1,12551 − 1 = 12,55% ✓',
            },
            {
              label: 'b) Bereken die effektiewe jaarlikse koers indien maandeliks saamgestel (%).',
              correctAnswer: '12,68',
              correctAnswers: ['12.68%', '12.68', '12.7%', '12.7'],
              explanation: 'i_eff = (1 + 0,12/12)^12 − 1 = (1,01)^12 − 1 = 1,12683 − 1 = 12,68% ✓',
            },
            {
              label: 'c) Op ʼn deposito van R100 000 vir 1 jaar, hoeveel meer rente (in rand) verdien maandelikse samestelling in vergelyking met kwartaallikse?',
              correctAnswer: '132',
              correctAnswers: ['R132', '132', 'R132.50', '132.50', 'R133', '133'],
              explanation: 'Maandelikse rente: R100 000 × 0,1268 = R12 683\nKwartaallikse rente: R100 000 × 0,1255 = R12 551\nVerskil: R12 683 − R12 551 = R132 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Belegger sit ʼn enkelbedrag in ʼn rekening wat ʼn nominale rentekoers van 16% p.j. maandeliks saamgestel bied. Sy maak geen verdere deposito\'s of onttrekkings nie. Na presies 3 jaar het die belegging tot R76 000 gegroei.\n\na) Bereken die effektiewe jaarlikse rentekoers vir hierdie rekening (tot 2 desimale plekke).\nb) Bereken dus die bedrag wat sy oorspronklik gedeponeer het (tot die naaste rand).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Effektiewe jaarlikse rentekoers (%)',
              correctAnswer: '17,23',
              correctAnswers: ['17.23%', '17.23', '17.2%', '17.2'],
              explanation: 'i_nom = 0,16, m = 12\ni_eff = (1 + 0,16/12)^12 − 1 = (1,013333)^12 − 1 ≈ 1,17227 − 1 = 17,23% ✓',
            },
            {
              label: 'b) Oorspronklike bedrag gedeponeer (R, tot die naaste rand)',
              correctAnswer: '47177',
              correctAnswers: ['R47177', 'R47 177', '47177', '47 177', 'R47176', '47176', 'R47178', '47178'],
              explanation: 'Om teen 16% p.j. maandeliks saamgestel te groei vir 3 jaar (36 maande) is presies dieselfde as om teen i_eff = 17,23% p.j. vir 3 jaar te groei, aangesien albei van dieselfde onderliggende maandelikse koers afkomstig is.\n76 000 = P(1,013333)^36 = P × 1,610957\nP = 76 000 ÷ 1,610957 ≈ R47 177 ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die nominale-na-effektiewe-koersformule stap vir stap toepas, met voorbeelde van maandelikse, kwartaallikse en daaglikse samestelling" />',
      diagramPlaceholder:
        'ʼn Vergelykende staafgrafiek wat dieselfde nominale koers teen verskillende samestellingsfrekwensies (jaarliks, maandeliks, daagliks) wys wat na ʼn effens hoër effektiewe koers konvergeer, om te illustreer dat meer gereelde samestelling die effektiewe koers verhoog',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 185" width="100%" style="max-width:300px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<text x="125" y="15" text-anchor="middle" font-size="10" font-weight="700" fill="#0f1f3d">Nominale koers: 12% p.j.</text>` +
        `<line x1="35" y1="25" x2="35" y2="145" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<line x1="30" y1="140" x2="40" y2="136" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<line x1="30" y1="134" x2="40" y2="130" stroke="#0f1f3d" stroke-width="1.2"/>` +
        `<line x1="30" y1="140" x2="220" y2="140" stroke="#0f1f3d" stroke-width="1.5"/>` +
        `<polygon points="228,140 218,136 218,144" fill="#0f1f3d"/>` +
        `<rect x="50" y="103" width="40" height="37" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<rect x="110" y="101" width="40" height="39" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<rect x="170" y="101" width="40" height="39" fill="rgba(22,163,74,0.15)" stroke="#16a34a" stroke-width="1.5"/>` +
        `<text x="70" y="98" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">12,00%</text>` +
        `<text x="130" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">12,68%</text>` +
        `<text x="190" y="96" text-anchor="middle" font-size="9" font-weight="700" fill="#16a34a">12,75%</text>` +
        `<text x="70" y="152" text-anchor="middle" font-size="8" fill="#6b7280">Jaarliks</text>` +
        `<text x="70" y="163" text-anchor="middle" font-size="8" fill="#6b7280">(m=1)</text>` +
        `<text x="130" y="152" text-anchor="middle" font-size="8" fill="#6b7280">Maandeliks</text>` +
        `<text x="130" y="163" text-anchor="middle" font-size="8" fill="#6b7280">(m=12)</text>` +
        `<text x="190" y="152" text-anchor="middle" font-size="8" fill="#6b7280">Daagliks</text>` +
        `<text x="190" y="163" text-anchor="middle" font-size="8" fill="#6b7280">(m=365)</text>` +
        `<text x="120" y="178" text-anchor="middle" font-size="8" fill="#6b7280">Meer gereelde samestelling → kleiner effektiewe-koerstoename</text>` +
        `</svg>`,
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 6 — MIXED APPLICATIONS: DECAY AND COMPOUNDING COMBINED
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mixed-applications-decay-compounding',
      title: 'Gemengde Toepassings — Verval en Samestelling Gekombineer',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Eksamenstyl-finansiëleprobleme kombineer dikwels enkelvoudige of saamgestelde verval met veranderende rentekoerse, onttrekkings, of vergelykings tussen waardeverminderingsmetodes binne een enkele scenario. Om deur hierdie probleme te werk, moet jy identifiseer watter formule op elke fase van die probleem van toepassing is en die waarde van die belegging of bate versigtig dophou soos toestande halfpad deur die tydperk verander.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('Fase 1')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('Fase 2')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Fase 3')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('Finale antwoord')}</span>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;margin-bottom:16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om multi-fase-probleme aan te pak</p>` +
        `<p style="margin:0;color:#1e3a8a;">1. Identifiseer elke fase en die formule wat van toepassing is.<br>2. Werk deur die fases in volgorde — die uitset van een fase word die inset (P) van die volgende.<br>3. Pas onttrekkings of deposito's op die korrekte tydstip toe.<br>4. Rond eers aan die einde af, of wanneer uitdruklik aangedui.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Afleweringsvoertuig wat vir R280 000 gekoop is, verminder in waarde volgens die verminderende-balans-metode teen 20% p.j. vir die eerste 2 jaar, waarna die waardeverminderingskoers na 12% p.j. verander vir die volgende 2 jaar. Bereken die waarde van die voertuig na 4 jaar.',
          answer: `${re('A ≈ R138 781')}`,
          steps: [
            `${bl('Fase 1 (jaar 1–2, 20% p.j.):')} ${bl('A₁')} = ${bl('280 000')}(1 − 0,20)² = ${bl('280 000')}(0,80)² = ${bl('280 000')} × 0,64 = ${bl('R179 200')}.`,
            `${gr('Fase 2 (jaar 3–4, 12% p.j.):')} gebruik ${bl('R179 200')} as die nuwe beginwaarde. ${gr('A₂')} = ${bl('179 200')}(1 − 0,12)² = ${bl('179 200')}(0,88)² = ${bl('179 200')} × 0,7744 = ${re('R138 781')}.`,
          ],
        },
        {
          question: 'R50 000 word teen 8% p.j. kwartaalliks saamgestel vir die eerste 18 maande belê. Die rentekoers verander dan na 6% p.j. maandeliks saamgestel. Twee jaar nadat die geld belê is, word R10 000 onttrek. Bereken hoeveel in die rekening is na 4 jaar.',
          answer: `${re('A ≈ R54 124,65')}`,
          steps: [
            `${bl('Fase 1 (0 tot 18 maande = 6 kwartale teen 8% p.j.):')} ${bl('A₁')} = ${bl('50 000')}(1 + 0,08 ÷ 4)<sup>6</sup> = ${bl('50 000')}(1,02)<sup>6</sup> = ${bl('50 000')} × 1,126162 = ${bl('R56 308,12')}.`,
            `${gr('Fase 2 (18 tot 24 maande = 6 maande teen 6% p.j.):')} ${gr('A₂')} = ${bl('56 308,12')}(1 + 0,06 ÷ 12)<sup>6</sup> = ${bl('56 308,12')}(1,005)<sup>6</sup> = ${bl('56 308,12')} × 1,030378 = ${gr('R58 018,62')}.`,
            `Onttrekking na 2 jaar: ${gr('R58 018,62')} − R10 000 = ${or('R48 018,62')}.`,
            `${or('Fase 3 (24 tot 48 maande = 24 maande teen 6% p.j.):')} ${re('A₃')} = ${or('48 018,62')}(1,005)<sup>24</sup> = ${or('48 018,62')} × 1,127160 = ${re('R54 124,65')}.`,
          ],
        },
        {
          question: 'ʼn Besigheidsbate kos R120 000 en verminder in waarde teen 18% p.j. volgens die verminderende-balans-metode. Bepaal na hoeveel volle jare die bate se waarde met meer as 50% van sy oorspronklike prys sal afgeneem het.',
          answer: `${gr('Na 4 volle jare')}`,
          steps: [
            `Die waarde moet onder 50% van R120 000 = ${bl('R60 000')} val. Stel die ongelykheid op: ${bl('120 000')}(0,82)<sup>n</sup> < ${bl('60 000')}.`,
            `Deel albei kante deur ${bl('120 000')}: (0,82)<sup>n</sup> < 0,5.`,
            `Neem logaritmes van albei kante: n × log(0,82) < log(0,5). Aangesien log(0,82) negatief is, <strong>draai</strong> die ongelykheidsteken om wanneer daar gedeel word: n > log(0,5) ÷ log(0,82).`,
            `Bereken: n > (−0,3010) ÷ (−0,0862) = 3,50. Aangesien n ʼn heelgetal aantal volle jare moet wees, is ${gr('n = 4 jaar')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Masjien ter waarde van R100 000 verminder in waarde teen 20% p.j. volgens die verminderende-balans-metode vir 2 jaar, waarna die koers na 15% p.j. verander vir nog 1 jaar. Bereken die boekwaarde na 3 jaar.',
          answer: 'R54 400',
          checkMode: 'auto',
          correctAnswer: '54400',
          correctAnswers: ['R54400', 'R54 400', '54400', '54 400'],
          explanation: 'Fase 1 (2 jaar teen 20%): A₁ = 100 000 × (0,80)² = 100 000 × 0,64 = R64 000\nFase 2 (1 jaar teen 15%): A₂ = 64 000 × (0,85)¹ = 64 000 × 0,85 = R54 400 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'R40 000 word teen 12% p.j. maandeliks saamgestel vir 1 jaar belê. Die rentekoers verander dan na 8% p.j. kwartaalliks saamgestel.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Bereken die waarde na die eerste jaar teen 12% maandeliks saamgestel (R).',
              correctAnswer: '45073',
              correctAnswers: ['R45073', 'R45 073', '45073', '45 073', 'R45074', '45074'],
              explanation: 'A₁ = 40 000 × (1 + 0,12/12)^12 = 40 000 × (1,01)^12 = 40 000 × 1,12683 = R45 073 ✓',
            },
            {
              label: 'b) Bereken die waarde na nog 2 jaar teen 8% kwartaalliks saamgestel (R, tot die naaste rand).',
              correctAnswer: '52812',
              correctAnswers: ['R52812', 'R52 812', '52812', '52 812', 'R52813', '52813', 'R52811', '52811'],
              explanation: 'A₂ = 45 073 × (1 + 0,08/4)^8 = 45 073 × (1,02)^8 = 45 073 × 1,17166 = R52 812 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Motor ter waarde van R180 000 verminder in waarde teen 16% p.j. volgens die verminderende-balans-metode.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Na hoeveel volle jare sal die motor se waarde die eerste keer onder R80 000 val?',
              correctAnswer: '5',
              explanation: '180 000 × (0,84)^n < 80 000\n(0,84)^n < 4/9 ≈ 0,4444\nn > log(4/9) ÷ log(0,84) = (−0,3522) ÷ (−0,0757) = 4,65\n→ 5 volle jare ✓',
            },
            {
              label: 'b) Bereken die motor se boekwaarde aan die einde van daardie jaar (R, tot die naaste rand).',
              correctAnswer: '75278',
              correctAnswers: ['R75278', 'R75 278', '75278', '75 278', 'R75277', '75277', 'R75279', '75279'],
              explanation: 'A = 180 000 × (0,84)^5 = 180 000 × 0,41821 = R75 278 ✓',
            },
            {
              label: 'c) Hoeveel waarde (in rand) het die motor na daardie jare verloor?',
              correctAnswer: '104722',
              correctAnswers: ['R104722', 'R104 722', '104722', '104 722', 'R104723', '104723'],
              explanation: 'Verlies = R180 000 − R75 278 = R104 722 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Grader word vir R450 000 gekoop. Dit verminder in waarde volgens die verminderende-balans-metode teen ʼn onbekende jaarlikse koers vir die eerste 2 jaar. Die waardeverminderingskoers verander dan na 10% p.j. vir die volgende 3 jaar. Na die volle 5 jaar is die grader R254 041,92 werd. Bepaal die waardeverminderingskoers wat tydens die eerste 2 jaar toegepas is.',
          answer: '12% p.j.',
          checkMode: 'auto',
          correctAnswer: '12',
          correctAnswers: ['12%', '12', '12.00%', '12.0%'],
          explanation: 'Stap 1 — werk agteruit deur Fase 2 (bekende 10% p.j. vir 3 jaar) om die waarde aan die einde van jaar 2 te vind:\nV = 254 041,92 ÷ (0,90)³ = 254 041,92 ÷ 0,729 = R348 480\nStap 2 — los die onbekende Fase 1-koers op met 450 000(1 − r)² = 348 480:\n(1 − r)² = 348 480 ÷ 450 000 = 0,7744\n1 − r = √0,7744 = 0,88\nr = 1 − 0,88 = 0,12 = 12% p.j. ✓',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat stap vir stap deur ʼn multi-fase-finansiëleprobleem werk, wat wys hoe om ʼn koersverandering en ʼn onttrekking halfpad deur die tydperk te hanteer" />',
      diagramPlaceholder:
        'ʼn Tydlyn wat die multi-fase-scenario van Voorbeeld 2 wys, met merkers by 18 maande (koersverandering), 24 maande (onttrekking), en 48 maande (finale waarde), sodat die volgorde van gebeure visueel duidelik is',

      diagramSvg:
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 155" width="100%" style="max-width:400px;display:block;margin:16px auto 20px;font-family:sans-serif;">` +
        `<line x1="30" y1="80" x2="127.5" y2="80" stroke="#2563eb" stroke-width="6" stroke-linecap="round"/>` +
        `<line x1="127.5" y1="80" x2="160" y2="80" stroke="#16a34a" stroke-width="6" stroke-linecap="round"/>` +
        `<line x1="160" y1="80" x2="290" y2="80" stroke="#ea580c" stroke-width="6" stroke-linecap="round"/>` +
        `<polygon points="300,80 290,75 290,85" fill="#ea580c"/>` +
        `<circle cx="30" cy="80" r="4" fill="#0f1f3d"/>` +
        `<circle cx="127.5" cy="80" r="4" fill="#0f1f3d"/>` +
        `<circle cx="160" cy="80" r="4" fill="#dc2626"/>` +
        `<circle cx="290" cy="80" r="4" fill="#0f1f3d"/>` +
        `<line x1="160" y1="50" x2="160" y2="72" stroke="#dc2626" stroke-width="1.5"/>` +
        `<polygon points="160,74 156,66 164,66" fill="#dc2626"/>` +
        `<text x="160" y="42" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">− R10 000</text>` +
        `<text x="30" y="65" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">R50 000</text>` +
        `<text x="127.5" y="65" text-anchor="middle" font-size="9" font-weight="700" fill="#2563eb">R56 308,12</text>` +
        `<text x="290" y="65" text-anchor="middle" font-size="9" font-weight="700" fill="#dc2626">R54 124,65</text>` +
        `<text x="160" y="100" text-anchor="middle" font-size="8" font-weight="700" fill="#16a34a">R58 018,62</text>` +
        `<text x="160" y="112" text-anchor="middle" font-size="8" font-weight="700" fill="#dc2626">→ R48 018,62</text>` +
        `<text x="30" y="128" text-anchor="middle" font-size="9" fill="#6b7280">0 md</text>` +
        `<text x="127.5" y="128" text-anchor="middle" font-size="9" fill="#6b7280">18 md</text>` +
        `<text x="160" y="128" text-anchor="middle" font-size="9" fill="#6b7280">24 md</text>` +
        `<text x="290" y="128" text-anchor="middle" font-size="9" fill="#6b7280">48 md</text>` +
        `<text x="160" y="145" text-anchor="middle" font-size="8" fill="#6b7280">Fase 1: 8% p.j. kw. · Fase 2: 6% p.j. mnd. · Fase 3: 6% p.j. mnd. (na onttrekking)</text>` +
        `</svg>`,
    },
  ],

  scoreMessages: [
    { minScore: 27, message: 'Uitstekend! ʼn Volpunt — jy het finansiële verval vir Graad 11 volkome bemeester. Hou so aan!' },
    { minScore: 21, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van waardevermindering. Hersien enige stappe wat jy gemis het en jy sal dit perfek kry.' },
    { minScore: 15, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 9, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae) — geen diagramme nie, suiwer formule-/woordprobleem-inhoud
    // Blok 1 (0-3):   Nominale → effektiewe koers-omskakeling
    // Blok 2 (4-6):   Effektiewe → nominale koers-omskakeling
    // Blok 3 (7-10):  Reguitlyn-waardevermindering
    // Blok 4 (11-14): Verminderende-balans-waardevermindering
    // Blok 5 (15-16): Vergelyking van waardeverminderingsmetodes
    // Blok 6 (17-19): Gekombineerde multi-stap probleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Nominale → effektiewe koers-omskakeling (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'ʼn Bank bied ʼn nominale rentekoers van 12% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '12,68', correctAnswers: ['12,68%', '12,68', '12.68%', '12.68', '12,7%', '12,7', '12.7%', '12.7'], answer: '12,68%', explanation: 'i_eff = (1 + 0,12/12)^12 − 1 = (1,01)^12 − 1 = 1,126825 − 1 = 12,68% ✓' },
        { difficulty: 'Easy', question: 'ʼn Spaarrekening betaal 8% p.j. kwartaalliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '8,24', correctAnswers: ['8,24%', '8,24', '8.24%', '8.24', '8,2%', '8,2', '8.2%', '8.2'], answer: '8,24%', explanation: 'i_eff = (1 + 0,08/4)^4 − 1 = (1,02)^4 − 1 = 1,082432 − 1 = 8,24% ✓' },
        { difficulty: 'Medium', question: 'ʼn Lening dra ʼn nominale rentekoers van 15% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '16,08', correctAnswers: ['16,08%', '16,08', '16.08%', '16.08', '16,1%', '16,1', '16.1%', '16.1'], answer: '16,08%', explanation: 'i_eff = (1 + 0,15/12)^12 − 1 = (1,0125)^12 − 1 = 1,160755 − 1 = 16,08% ✓' },
        { difficulty: 'Medium', question: 'ʼn Kredietkaart hef 18% p.j. kwartaalliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '19,25', correctAnswers: ['19,25%', '19,25', '19.25%', '19.25', '19,3%', '19,3', '19.3%', '19.3'], answer: '19,25%', explanation: 'i_eff = (1 + 0,18/4)^4 − 1 = (1,045)^4 − 1 = 1,192519 − 1 = 19,25% ✓' },

        // Blok 2 — Effektiewe → nominale koers-omskakeling (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Effektiewe jaarlikse rentekoers van 13% word genoem. Bepaal die ekwivalente nominale jaarlikse koers as rente maandeliks saamgestel word (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '12,28', correctAnswers: ['12,28%', '12,28', '12.28%', '12.28', '12,3%', '12,3', '12.3%', '12.3'], answer: '12,28%', explanation: '1,13 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1,13 = 1,010237\ni_nom = 12 × 0,010237 = 12,28% ✓' },
        { difficulty: 'Medium', question: 'ʼn Effektiewe jaarlikse rentekoers van 9% word genoem. Bepaal die ekwivalente nominale jaarlikse koers as rente kwartaalliks saamgestel word (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '8,71', correctAnswers: ['8,71%', '8,71', '8.71%', '8.71', '8,7%', '8,7', '8.7%', '8.7'], answer: '8,71%', explanation: '1,09 = (1 + i_nom/4)^4\n1 + i_nom/4 = ⁴√1,09 = 1,021783\ni_nom = 4 × 0,021783 = 8,71% ✓' },
        { difficulty: 'Hard', question: 'ʼn Bank adverteer ʼn effektiewe jaarlikse rentekoers van 20%. Bepaal die ekwivalente nominale jaarlikse koers, maandeliks saamgestel (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '18,37', correctAnswers: ['18,37%', '18,37', '18.37%', '18.37', '18,4%', '18,4', '18.4%', '18.4'], answer: '18,37%', explanation: '1,20 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1,20 = 1,015310\ni_nom = 12 × 0,015310 = 18,37% ✓' },

        // Blok 3 — Reguitlyn-waardevermindering (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Wasmasjien ter waarde van R15 000 verminder in waarde teen 15% p.j. volgens die reguitlynmetode. Bereken die waarde na 3 jaar.', checkMode: 'auto', correctAnswer: '8250', correctAnswers: ['R8250', 'R8 250', '8250', '8 250'], answer: 'R8 250', explanation: 'A = P(1 − ni) = 15 000(1 − 3 × 0,15) = 15 000(0,55) = R8 250 ✓' },
        { difficulty: 'Medium', question: 'ʼn Trekker ter waarde van R250 000 verminder in waarde teen 10% p.j. volgens die reguitlynmetode. Bereken die boekwaarde na 6 jaar.', checkMode: 'auto', correctAnswer: '100000', correctAnswers: ['R100000', 'R100 000', '100000', '100 000'], answer: 'R100 000', explanation: 'A = 250 000(1 − 6 × 0,10) = 250 000(0,40) = R100 000 ✓' },
        { difficulty: 'Medium', question: 'Toerusting ter waarde van R20 000 verminder volgens die reguitlynmetode tot R12 000 na 4 jaar. Bereken die jaarlikse waardeverminderingskoers (as ʼn persentasie, tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10%', '10', '10,00%', '10,0%'], answer: '10%', explanation: '12 000 = 20 000(1 − 4i)\n0,6 = 1 − 4i → 4i = 0,4 → i = 0,10 = 10% ✓' },
        { difficulty: 'Hard', question: 'ʼn Generator ter waarde van R340 000 verminder in waarde teen 12% p.j. volgens die reguitlynmetode. Bereken die boekwaarde na 5 jaar.', checkMode: 'auto', correctAnswer: '136000', correctAnswers: ['R136000', 'R136 000', '136000', '136 000'], answer: 'R136 000', explanation: 'A = 340 000(1 − 5 × 0,12) = 340 000(0,40) = R136 000 ✓' },

        // Blok 4 — Verminderende-balans-waardevermindering (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Vurkhyser ter waarde van R90 000 verminder in waarde teen 20% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '46080', correctAnswers: ['R46080', 'R46 080', '46080', '46 080', 'R46080,00', 'R46 080,00'], answer: 'R46 080', explanation: 'A = P(1 − i)ⁿ = 90 000(0,80)³ = 90 000 × 0,512 = R46 080 ✓' },
        { difficulty: 'Medium', question: 'ʼn Bus ter waarde van R150 000 verminder in waarde teen 15% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 5 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '66556', correctAnswers: ['R66556', 'R66 556', '66556', '66 556', 'R66555,80', 'R66555,8', 'R66 555,80'], answer: 'R66 555,80', explanation: 'A = 150 000(0,85)⁵ = 150 000 × 0,443705 ≈ R66 555,80 ✓' },
        { difficulty: 'Medium', question: 'ʼn Drukker ter waarde van R40 000 verminder volgens die verminderende-balans-metode tot R23 000 na 4 jaar. Bereken die jaarlikse waardeverminderingskoers (as ʼn persentasie, tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '12,92', correctAnswers: ['12,92%', '12,92', '12.92%', '12.92', '12,9%', '12,9', '12.9%', '12.9'], answer: '12,92%', explanation: '23 000 = 40 000(1 − i)⁴\n0,575 = (1 − i)⁴\n1 − i = ⁴√0,575 = 0,870798\ni = 1 − 0,870798 = 0,129202 = 12,92% ✓' },
        { difficulty: 'Hard', question: 'ʼn Hyskraan ter waarde van R220 000 verminder in waarde teen 18% p.j. volgens die verminderende-balans-metode. Na hoeveel volle jare sal dit die eerste keer minder as R90 000 werd wees?', checkMode: 'auto', correctAnswer: '5', explanation: '90 000 = 220 000(0,82)ⁿ\n0,409091 = (0,82)ⁿ\nn = log(0,409091) ÷ log(0,82) = 4,50 → rond na bo af na 5 volle jare.\nKontroleer: 220 000 × (0,82)⁵ ≈ R81 562,77 < R90 000 ✓' },

        // Blok 5 — Vergelyking van waardeverminderingsmetodes (Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Voertuig ter waarde van R40 000 verminder in waarde teen 15% p.j. Bereken die verskil tussen die verminderende-balans-waarde en die reguitlynwaarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '2565', correctAnswers: ['R2565', 'R2 565', '2565', '2 565', 'R2565,00', 'R2 565,00'], answer: 'R2 565', explanation: 'Reguitlyn: 40 000(1 − 3 × 0,15) = 40 000(0,55) = R22 000.\nVerminderende balans: 40 000(0,85)³ = 40 000 × 0,614125 ≈ R24 565.\nVerskil = R24 565 − R22 000 = R2 565 ✓' },
        { difficulty: 'Hard', question: 'ʼn Masjien ter waarde van R60 000 verminder in waarde teen 18% p.j. Bereken die verskil tussen die verminderende-balans-waarde en die reguitlynwaarde na 4 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '10327', correctAnswers: ['R10327', 'R10 327', '10327', '10 327', 'R10327,31', 'R10 327,31'], answer: 'R10 327,31', explanation: 'Reguitlyn: 60 000(1 − 4 × 0,18) = 60 000(0,28) = R16 800.\nVerminderende balans: 60 000(0,82)⁴ = 60 000 × 0,452122 ≈ R27 127,31.\nVerskil ≈ R27 127,31 − R16 800 = R10 327,31 ✓' },

        // Blok 6 — Gekombineerde multi-stap probleme (Easy, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Vragmotor ter waarde van R120 000 verminder in waarde volgens die verminderende-balans-metode teen 20% p.j. vir die eerste 2 jaar, waarna die koers na 10% p.j. verander vir nog 1 jaar. Bereken die waarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '69120', correctAnswers: ['R69120', 'R69 120', '69120', '69 120', 'R69120,00', 'R69 120,00'], answer: 'R69 120', explanation: 'Fase 1 (2 jaar teen 20%): A₁ = 120 000 × (0,80)² = 120 000 × 0,64 = R76 800.\nFase 2 (1 jaar teen 10%): A₂ = 76 800 × 0,90 = R69 120 ✓' },
        { difficulty: 'Medium', question: 'R25 000 word teen 10% p.j. maandeliks saamgestel belê. Skakel dit om na die effektiewe jaarlikse koers, en gebruik dit om die waarde van die belegging na 2 jaar te bereken, jaarliks saamgestel teen daardie effektiewe koers (tot die naaste rand).', checkMode: 'auto', correctAnswer: '30510', correctAnswers: ['R30510', 'R30 510', '30510', '30 510', 'R30509,77', 'R30 509,77'], answer: 'R30 509,77', explanation: 'i_eff = (1 + 0,10/12)^12 − 1 = 0,104713 = 10,4713%.\nA = 25 000(1,104713)² = 25 000 × 1,220391 ≈ R30 509,77 ✓' },
        { difficulty: 'Hard', question: 'ʼn Masjien ter waarde van R150 000 verminder in waarde teen 20% p.j. volgens die verminderende-balans-metode.\n\na) Na hoeveel volle jare sal die waarde die eerste keer onder R50 000 val?\nb) Bereken die boekwaarde aan die einde van daardie jaar (tot die naaste rand).', checkMode: 'auto', parts: [
          { label: 'a) Volle jare tot die waarde die eerste keer onder R50 000 val', correctAnswer: '5', explanation: '50 000 = 150 000(0,80)ⁿ\n0,333333 = (0,80)ⁿ\nn = log(0,333333) ÷ log(0,80) = 4,92 → rond na bo af na 5 volle jare ✓' },
          { label: 'b) Boekwaarde aan die einde van daardie jaar (R)', correctAnswer: '49152', correctAnswers: ['R49152', 'R49 152', '49152', '49 152', 'R49152,00', 'R49 152,00'], explanation: 'A = 150 000 × (0,80)⁵ = 150 000 × 0,32768 = R49 152 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het nominale/effektiewe koerse en waardeverminderingsmetodes volkome bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae oor die gekombineerde multi-stap probleme, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor elke waardeverminderingsmetode weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Nominale → effektiewe koers-omskakeling (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'ʼn Bank bied ʼn nominale rentekoers van 14% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '14,93', correctAnswers: ['14,93%', '14,93', '14.93%', '14.93', '14,9%', '14,9', '14.9%', '14.9'], answer: '14,93%', explanation: 'i_eff = (1 + 0,14/12)^12 − 1 = (1,011667)^12 − 1 = 1,149342 − 1 = 14,93% ✓' },
        { difficulty: 'Easy', question: 'ʼn Spaarrekening betaal 6% p.j. kwartaalliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '6,14', correctAnswers: ['6,14%', '6,14', '6.14%', '6.14', '6,1%', '6,1', '6.1%', '6.1'], answer: '6,14%', explanation: 'i_eff = (1 + 0,06/4)^4 − 1 = (1,015)^4 − 1 = 1,061364 − 1 = 6,14% ✓' },
        { difficulty: 'Medium', question: 'ʼn Lening dra ʼn nominale rentekoers van 20% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '21,94', correctAnswers: ['21,94%', '21,94', '21.94%', '21.94', '21,9%', '21,9', '21.9%', '21.9'], answer: '21,94%', explanation: 'i_eff = (1 + 0,20/12)^12 − 1 = (1,016667)^12 − 1 = 1,219391 − 1 = 21,94% ✓' },
        { difficulty: 'Medium', question: 'ʼn Kredietkaart hef 16% p.j. kwartaalliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '16,99', correctAnswers: ['16,99%', '16,99', '16.99%', '16.99', '17,0%', '17%', '17,0'], answer: '16,99%', explanation: 'i_eff = (1 + 0,16/4)^4 − 1 = (1,04)^4 − 1 = 1,169859 − 1 = 16,99% ✓' },

        // Blok 2 — Effektiewe → nominale koers-omskakeling (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Effektiewe jaarlikse rentekoers van 16% word genoem. Bepaal die ekwivalente nominale jaarlikse koers as rente maandeliks saamgestel word (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '14,93', correctAnswers: ['14,93%', '14,93', '14.93%', '14.93', '14,9%', '14,9', '14.9%', '14.9'], answer: '14,93%', explanation: '1,16 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1,16 = 1,012445\ni_nom = 12 × 0,012445 = 14,93% ✓' },
        { difficulty: 'Medium', question: 'ʼn Effektiewe jaarlikse rentekoers van 10% word genoem. Bepaal die ekwivalente nominale jaarlikse koers as rente kwartaalliks saamgestel word (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '9,65', correctAnswers: ['9,65%', '9,65', '9.65%', '9.65', '9,6%', '9,6', '9.6%', '9.6'], answer: '9,65%', explanation: '1,10 = (1 + i_nom/4)^4\n1 + i_nom/4 = ⁴√1,10 = 1,024114\ni_nom = 4 × 0,024114 = 9,65% ✓' },
        { difficulty: 'Hard', question: 'ʼn Bank adverteer ʼn effektiewe jaarlikse rentekoers van 25%. Bepaal die ekwivalente nominale jaarlikse koers, maandeliks saamgestel (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '22,52', correctAnswers: ['22,52%', '22,52', '22.52%', '22.52', '22,5%', '22,5', '22.5%', '22.5'], answer: '22,52%', explanation: '1,25 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1,25 = 1,018768\ni_nom = 12 × 0,018768 = 22,52% ✓' },

        // Blok 3 — Reguitlyn-waardevermindering (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Yskas ter waarde van R18 000 verminder in waarde teen 20% p.j. volgens die reguitlynmetode. Bereken die waarde na 3 jaar.', checkMode: 'auto', correctAnswer: '7200', correctAnswers: ['R7200', 'R7 200', '7200', '7 200'], answer: 'R7 200', explanation: 'A = 18 000(1 − 3 × 0,20) = 18 000(0,40) = R7 200 ✓' },
        { difficulty: 'Medium', question: 'ʼn Afleweringsvoertuig ter waarde van R280 000 verminder in waarde teen 8% p.j. volgens die reguitlynmetode. Bereken die boekwaarde na 7 jaar.', checkMode: 'auto', correctAnswer: '123200', correctAnswers: ['R123200', 'R123 200', '123200', '123 200'], answer: 'R123 200', explanation: 'A = 280 000(1 − 7 × 0,08) = 280 000(0,44) = R123 200 ✓' },
        { difficulty: 'Medium', question: 'Toerusting ter waarde van R32 000 verminder volgens die reguitlynmetode tot R18 800 na 5 jaar. Bereken die jaarlikse waardeverminderingskoers (as ʼn persentasie, tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '8,25', correctAnswers: ['8,25%', '8,25', '8.25%', '8.25', '8,3%', '8,3', '8.3%', '8.3'], answer: '8,25%', explanation: '18 800 = 32 000(1 − 5i)\n0,5875 = 1 − 5i → 5i = 0,4125 → i = 0,0825 = 8,25% ✓' },
        { difficulty: 'Hard', question: 'ʼn Stootskraper ter waarde van R400 000 verminder in waarde teen 15% p.j. volgens die reguitlynmetode. Bereken die boekwaarde na 4 jaar.', checkMode: 'auto', correctAnswer: '160000', correctAnswers: ['R160000', 'R160 000', '160000', '160 000'], answer: 'R160 000', explanation: 'A = 400 000(1 − 4 × 0,15) = 400 000(0,40) = R160 000 ✓' },

        // Blok 4 — Verminderende-balans-waardevermindering (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Fotostaatmasjien ter waarde van R60 000 verminder in waarde teen 25% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '25313', correctAnswers: ['R25313', 'R25 313', '25313', '25 313', 'R25312,50', 'R25 312,50'], answer: 'R25 312,50', explanation: 'A = 60 000(0,75)³ = 60 000 × 0,421875 = R25 312,50 ✓' },
        { difficulty: 'Medium', question: 'ʼn Minibus ter waarde van R175 000 verminder in waarde teen 12% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 6 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '81271', correctAnswers: ['R81271', 'R81 271', '81271', '81 271', 'R81270,72', 'R81 270,72'], answer: 'R81 270,72', explanation: 'A = 175 000(0,88)⁶ = 175 000 × 0,464404 ≈ R81 270,72 ✓' },
        { difficulty: 'Medium', question: 'ʼn Kamera ter waarde van R55 000 verminder volgens die verminderende-balans-metode tot R28 000 na 5 jaar. Bereken die jaarlikse waardeverminderingskoers (as ʼn persentasie, tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '12,63', correctAnswers: ['12,63%', '12,63', '12.63%', '12.63', '12,6%', '12,6', '12.6%', '12.6'], answer: '12,63%', explanation: '28 000 = 55 000(1 − i)⁵\n0,509091 = (1 − i)⁵\n1 − i = ⁵√0,509091 = 0,873693\ni = 1 − 0,873693 = 0,126307 = 12,63% ✓' },
        { difficulty: 'Hard', question: 'ʼn Gruistrekker ter waarde van R400 000 verminder in waarde teen 20% p.j. volgens die verminderende-balans-metode. Na hoeveel volle jare sal dit die eerste keer minder as R120 000 werd wees?', checkMode: 'auto', correctAnswer: '6', explanation: '120 000 = 400 000(0,80)ⁿ\n0,30 = (0,80)ⁿ\nn = log(0,30) ÷ log(0,80) = 5,40 → rond na bo af na 6 volle jare.\nKontroleer: 400 000 × (0,80)⁶ ≈ R104 858 < R120 000 ✓' },

        // Blok 5 — Vergelyking van waardeverminderingsmetodes (Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Voertuig ter waarde van R60 000 verminder in waarde teen 18% p.j. Bereken die verskil tussen die verminderende-balans-waarde en die reguitlynwaarde na 4 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '10327', correctAnswers: ['R10327', 'R10 327', '10327', '10 327', 'R10327,31', 'R10 327,31'], answer: 'R10 327,31', explanation: 'Reguitlyn: 60 000(1 − 4 × 0,18) = 60 000(0,28) = R16 800.\nVerminderende balans: 60 000(0,82)⁴ = 60 000 × 0,452122 ≈ R27 127,31.\nVerskil ≈ R27 127,31 − R16 800 = R10 327,31 ✓' },
        { difficulty: 'Hard', question: 'ʼn Masjien ter waarde van R80 000 verminder in waarde teen 15% p.j. Bereken die verskil tussen die verminderende-balans-waarde en die reguitlynwaarde na 5 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '15496', correctAnswers: ['R15496', 'R15 496', '15496', '15 496', 'R15496,42', 'R15 496,42'], answer: 'R15 496,42', explanation: 'Reguitlyn: 80 000(1 − 5 × 0,15) = 80 000(0,25) = R20 000.\nVerminderende balans: 80 000(0,85)⁵ = 80 000 × 0,443705 ≈ R35 496,42.\nVerskil ≈ R35 496,42 − R20 000 = R15 496,42 ✓' },

        // Blok 6 — Gekombineerde multi-stap probleme (Easy, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Bus ter waarde van R200 000 verminder in waarde volgens die verminderende-balans-metode teen 25% p.j. vir die eerste 2 jaar, waarna die koers na 15% p.j. verander vir nog 1 jaar. Bereken die waarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '95625', correctAnswers: ['R95625', 'R95 625', '95625', '95 625', 'R95625,00', 'R95 625,00'], answer: 'R95 625', explanation: 'Fase 1 (2 jaar teen 25%): A₁ = 200 000 × (0,75)² = 200 000 × 0,5625 = R112 500.\nFase 2 (1 jaar teen 15%): A₂ = 112 500 × 0,85 = R95 625 ✓' },
        { difficulty: 'Medium', question: 'R30 000 word teen 12% p.j. kwartaalliks saamgestel belê. Skakel dit om na die effektiewe jaarlikse koers, en gebruik dit om die waarde van die belegging na 3 jaar te bereken, jaarliks saamgestel teen daardie effektiewe koers (tot die naaste rand).', checkMode: 'auto', correctAnswer: '42773', correctAnswers: ['R42773', 'R42 773', '42773', '42 773', 'R42772,83', 'R42 772,83'], answer: 'R42 772,83', explanation: 'i_eff = (1 + 0,12/4)^4 − 1 = 0,125509 = 12,5509%.\nA = 30 000(1,125509)³ = 30 000 × 1,425761 ≈ R42 772,83 ✓' },
        { difficulty: 'Hard', question: 'ʼn Masjien ter waarde van R180 000 verminder in waarde teen 15% p.j. volgens die verminderende-balans-metode.\n\na) Na hoeveel volle jare sal die waarde die eerste keer onder R70 000 val?\nb) Bereken die boekwaarde aan die einde van daardie jaar (tot die naaste rand).', checkMode: 'auto', parts: [
          { label: 'a) Volle jare tot die waarde die eerste keer onder R70 000 val', correctAnswer: '6', explanation: '70 000 = 180 000(0,85)ⁿ\n0,388889 = (0,85)ⁿ\nn = log(0,388889) ÷ log(0,85) = 5,81 → rond na bo af na 6 volle jare ✓' },
          { label: 'b) Boekwaarde aan die einde van daardie jaar (R)', correctAnswer: '67887', correctAnswers: ['R67887', 'R67 887', '67887', '67 887', 'R67886,91', 'R67 886,91'], explanation: 'A = 180 000 × (0,85)⁶ = 180 000 × 0,377150 ≈ R67 886,91 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het nominale/effektiewe koerse en waardeverminderingsmetodes volkome bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae oor die gekombineerde multi-stap probleme, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor elke waardeverminderingsmetode weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Nominale → effektiewe koers-omskakeling (Easy, Easy, Medium, Medium)
        { difficulty: 'Easy', question: 'ʼn Bank bied ʼn nominale rentekoers van 13% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '13,80', correctAnswers: ['13,80%', '13,80', '13.80%', '13.80', '13,8%', '13,8', '13.8%', '13.8'], answer: '13,80%', explanation: 'i_eff = (1 + 0,13/12)^12 − 1 = (1,010833)^12 − 1 = 1,138032 − 1 = 13,80% ✓' },
        { difficulty: 'Easy', question: 'ʼn Spaarrekening betaal 7% p.j. kwartaalliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '7,19', correctAnswers: ['7,19%', '7,19', '7.19%', '7.19', '7,2%', '7,2', '7.2%', '7.2'], answer: '7,19%', explanation: 'i_eff = (1 + 0,07/4)^4 − 1 = (1,0175)^4 − 1 = 1,071859 − 1 = 7,19% ✓' },
        { difficulty: 'Medium', question: 'ʼn Lening dra ʼn nominale rentekoers van 22% p.j. maandeliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '24,36', correctAnswers: ['24,36%', '24,36', '24.36%', '24.36', '24,4%', '24,4', '24.4%', '24.4'], answer: '24,36%', explanation: 'i_eff = (1 + 0,22/12)^12 − 1 = (1,018333)^12 − 1 = 1,243597 − 1 = 24,36% ✓' },
        { difficulty: 'Medium', question: 'ʼn Kredietkaart hef 20% p.j. kwartaalliks saamgestel. Bereken die effektiewe jaarlikse rentekoers (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '21,55', correctAnswers: ['21,55%', '21,55', '21.55%', '21.55', '21,6%', '21,6', '21.6%', '21.6'], answer: '21,55%', explanation: 'i_eff = (1 + 0,20/4)^4 − 1 = (1,05)^4 − 1 = 1,215506 − 1 = 21,55% ✓' },

        // Blok 2 — Effektiewe → nominale koers-omskakeling (Medium, Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Effektiewe jaarlikse rentekoers van 14% word genoem. Bepaal die ekwivalente nominale jaarlikse koers as rente maandeliks saamgestel word (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '13,17', correctAnswers: ['13,17%', '13,17', '13.17%', '13.17', '13,2%', '13,2', '13.2%', '13.2'], answer: '13,17%', explanation: '1,14 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1,14 = 1,010979\ni_nom = 12 × 0,010979 = 13,17% ✓' },
        { difficulty: 'Medium', question: 'ʼn Effektiewe jaarlikse rentekoers van 11% word genoem. Bepaal die ekwivalente nominale jaarlikse koers as rente kwartaalliks saamgestel word (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '10,57', correctAnswers: ['10,57%', '10,57', '10.57%', '10.57', '10,6%', '10,6', '10.6%', '10.6'], answer: '10,57%', explanation: '1,11 = (1 + i_nom/4)^4\n1 + i_nom/4 = ⁴√1,11 = 1,026433\ni_nom = 4 × 0,026433 = 10,57% ✓' },
        { difficulty: 'Hard', question: 'ʼn Bank adverteer ʼn effektiewe jaarlikse rentekoers van 18%. Bepaal die ekwivalente nominale jaarlikse koers, maandeliks saamgestel (tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '16,67', correctAnswers: ['16,67%', '16,67', '16.67%', '16.67', '16,7%', '16,7', '16.7%', '16.7'], answer: '16,67%', explanation: '1,18 = (1 + i_nom/12)^12\n1 + i_nom/12 = ¹²√1,18 = 1,013889\ni_nom = 12 × 0,013889 = 16,67% ✓' },

        // Blok 3 — Reguitlyn-waardevermindering (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Skottelgoedwasser ter waarde van R22 000 verminder in waarde teen 25% p.j. volgens die reguitlynmetode. Bereken die waarde na 2 jaar.', checkMode: 'auto', correctAnswer: '11000', correctAnswers: ['R11000', 'R11 000', '11000', '11 000'], answer: 'R11 000', explanation: 'A = 22 000(1 − 2 × 0,25) = 22 000(0,50) = R11 000 ✓' },
        { difficulty: 'Medium', question: 'ʼn Sementmenger ter waarde van R320 000 verminder in waarde teen 9% p.j. volgens die reguitlynmetode. Bereken die boekwaarde na 8 jaar.', checkMode: 'auto', correctAnswer: '89600', correctAnswers: ['R89600', 'R89 600', '89600', '89 600'], answer: 'R89 600', explanation: 'A = 320 000(1 − 8 × 0,09) = 320 000(0,28) = R89 600 ✓' },
        { difficulty: 'Medium', question: 'Toerusting ter waarde van R45 000 verminder volgens die reguitlynmetode tot R27 000 na 4 jaar. Bereken die jaarlikse waardeverminderingskoers (as ʼn persentasie, tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10%', '10', '10,00%', '10,0%'], answer: '10%', explanation: '27 000 = 45 000(1 − 4i)\n0,6 = 1 − 4i → 4i = 0,4 → i = 0,10 = 10% ✓' },
        { difficulty: 'Hard', question: 'ʼn Boot ter waarde van R500 000 verminder in waarde teen 18% p.j. volgens die reguitlynmetode. Bereken die boekwaarde na 3 jaar.', checkMode: 'auto', correctAnswer: '230000', correctAnswers: ['R230000', 'R230 000', '230000', '230 000'], answer: 'R230 000', explanation: 'A = 500 000(1 − 3 × 0,18) = 500 000(0,46) = R230 000 ✓' },

        // Blok 4 — Verminderende-balans-waardevermindering (Easy, Medium, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Dromvliegtuig (drone) ter waarde van R70 000 verminder in waarde teen 18% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '38596', correctAnswers: ['R38596', 'R38 596', '38596', '38 596', 'R38595,76', 'R38 595,76'], answer: 'R38 595,76', explanation: 'A = 70 000(0,82)³ = 70 000 × 0,551368 ≈ R38 595,76 ✓' },
        { difficulty: 'Medium', question: 'ʼn Toerbus ter waarde van R195 000 verminder in waarde teen 14% p.j. volgens die verminderende-balans-metode. Bereken die waarde na 6 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '78891', correctAnswers: ['R78891', 'R78 891', '78891', '78 891', 'R78890,61', 'R78 890,61'], answer: 'R78 890,61', explanation: 'A = 195 000(0,86)⁶ = 195 000 × 0,404567 ≈ R78 890,61 ✓' },
        { difficulty: 'Medium', question: 'ʼn Skootrekenaar ter waarde van R65 000 verminder volgens die verminderende-balans-metode tot R30 000 na 5 jaar. Bereken die jaarlikse waardeverminderingskoers (as ʼn persentasie, tot 2 desimale plekke).', checkMode: 'auto', correctAnswer: '14,33', correctAnswers: ['14,33%', '14,33', '14.33%', '14.33', '14,3%', '14,3', '14.3%', '14.3'], answer: '14,33%', explanation: '30 000 = 65 000(1 − i)⁵\n0,461538 = (1 − i)⁵\n1 − i = ⁵√0,461538 = 0,856725\ni = 1 − 0,856725 = 0,143275 = 14,33% ✓' },
        { difficulty: 'Hard', question: 'ʼn Jag ter waarde van R600 000 verminder in waarde teen 22% p.j. volgens die verminderende-balans-metode. Na hoeveel volle jare sal dit die eerste keer minder as R150 000 werd wees?', checkMode: 'auto', correctAnswer: '6', explanation: '150 000 = 600 000(0,78)ⁿ\n0,25 = (0,78)ⁿ\nn = log(0,25) ÷ log(0,78) = 5,58 → rond na bo af na 6 volle jare.\nKontroleer: 600 000 × (0,78)⁶ ≈ R135 119,76 < R150 000 ✓' },

        // Blok 5 — Vergelyking van waardeverminderingsmetodes (Medium, Hard)
        { difficulty: 'Medium', question: 'ʼn Afleweringsfiets ter waarde van R50 000 verminder in waarde teen 20% p.j. Bereken die verskil tussen die verminderende-balans-waarde en die reguitlynwaarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '5600', correctAnswers: ['R5600', 'R5 600', '5600', '5 600', 'R5600,00', 'R5 600,00'], answer: 'R5 600', explanation: 'Reguitlyn: 50 000(1 − 3 × 0,20) = 50 000(0,40) = R20 000.\nVerminderende balans: 50 000(0,80)³ = 50 000 × 0,512 = R25 600.\nVerskil = R25 600 − R20 000 = R5 600 ✓' },
        { difficulty: 'Hard', question: 'ʼn Vurkhyser ter waarde van R100 000 verminder in waarde teen 16% p.j. Bereken die verskil tussen die verminderende-balans-waarde en die reguitlynwaarde na 6 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '31130', correctAnswers: ['R31130', 'R31 130', '31130', '31 130', 'R31129,80', 'R31 129,80'], answer: 'R31 129,80', explanation: 'Reguitlyn: 100 000(1 − 6 × 0,16) = 100 000(0,04) = R4 000.\nVerminderende balans: 100 000(0,84)⁶ = 100 000 × 0,351298 ≈ R35 129,80.\nVerskil ≈ R35 129,80 − R4 000 = R31 129,80 ✓' },

        // Blok 6 — Gekombineerde multi-stap probleme (Easy, Medium, Hard)
        { difficulty: 'Easy', question: 'ʼn Vragmotor ter waarde van R160 000 verminder in waarde volgens die verminderende-balans-metode teen 18% p.j. vir die eerste 2 jaar, waarna die koers na 12% p.j. verander vir nog 1 jaar. Bereken die waarde na 3 jaar (tot die naaste rand).', checkMode: 'auto', correctAnswer: '94674', correctAnswers: ['R94674', 'R94 674', '94674', '94 674', 'R94673,92', 'R94 673,92'], answer: 'R94 673,92', explanation: 'Fase 1 (2 jaar teen 18%): A₁ = 160 000 × (0,82)² = 160 000 × 0,6724 = R107 584.\nFase 2 (1 jaar teen 12%): A₂ = 107 584 × 0,88 ≈ R94 673,92 ✓' },
        { difficulty: 'Medium', question: 'R45 000 word teen 9% p.j. maandeliks saamgestel belê. Skakel dit om na die effektiewe jaarlikse koers, en gebruik dit om die waarde van die belegging na 2 jaar te bereken, jaarliks saamgestel teen daardie effektiewe koers (tot die naaste rand).', checkMode: 'auto', correctAnswer: '53839', correctAnswers: ['R53839', 'R53 839', '53839', '53 839', 'R53838,61', 'R53 838,61'], answer: 'R53 838,61', explanation: 'i_eff = (1 + 0,09/12)^12 − 1 = 0,093807 = 9,3807%.\nA = 45 000(1,093807)² = 45 000 × 1,196410 ≈ R53 838,61 ✓' },
        { difficulty: 'Hard', question: 'ʼn Masjien ter waarde van R210 000 verminder in waarde teen 12% p.j. volgens die verminderende-balans-metode.\n\na) Na hoeveel volle jare sal die waarde die eerste keer onder R90 000 val?\nb) Bereken die boekwaarde aan die einde van daardie jaar (tot die naaste rand).', checkMode: 'auto', parts: [
          { label: 'a) Volle jare tot die waarde die eerste keer onder R90 000 val', correctAnswer: '7', explanation: '90 000 = 210 000(0,88)ⁿ\n0,428571 = (0,88)ⁿ\nn = log(0,428571) ÷ log(0,88) = 6,63 → rond na bo af na 7 volle jare ✓' },
          { label: 'b) Boekwaarde aan die einde van daardie jaar (R)', correctAnswer: '85822', correctAnswers: ['R85822', 'R85 822', '85822', '85 822', 'R85821,88', 'R85 821,88'], explanation: 'A = 210 000 × (0,88)⁷ = 210 000 × 0,408676 ≈ R85 821,88 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het nominale/effektiewe koerse en waardeverminderingsmetodes volkome bemeester.' },
        { minScore: 15, message: 'Puik werk! Hersien enige gemiste vrae oor die gekombineerde multi-stap probleme, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor elke waardeverminderingsmetode weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
