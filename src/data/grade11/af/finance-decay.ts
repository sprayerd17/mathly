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
              correctAnswer: '8.33',
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
        '<VideoPlaceholder label="Short video showing the straight-line depreciation formula A = P(1 − ni) applied step by step with colour-coded variables" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a straight downward-sloping line graph of value (y-axis) against time in years (x-axis), showing equal vertical drops between each year mark" />',
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
          answer: `${or('A ≈ R104 427')}`,
          steps: [
            `Identifiseer ${bl('P = R200 000')}, ${re('i = 0,15')} dus ${re('1 − i = 0,85')}, ${gr('n = 4')}.`,
            `Vervang in ${or('A')} = ${bl('P')}(${re('1 − i')})<sup>${gr('n')}</sup>: ${or('A')} = ${bl('200 000')} × (${re('0,85')})<sup>${gr('4')}</sup>.`,
            `Bereken: ${or('A')} = ${bl('200 000')} × 0,522 = ${or('R104 427')}.`,
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
              correctAnswer: '29.29',
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
        '<VideoPlaceholder label="Short video showing the reducing-balance depreciation formula A = P(1 − i)^n applied step by step, including a logarithm example to find n" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a curved downward-sloping graph of value against time, steep at first and flattening out, shown alongside the straight-line graph from Section 1 for visual contrast" />',
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
              explanation: 'A = 24 000(0,80)⁴ = 24 000 × 0,4096 = R9 830.40 ✓',
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
              correctAnswer: '7.5',
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
        '<VideoPlaceholder label="Short video comparing straight-line and reducing-balance depreciation side by side with the same asset, rate, and time period" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: both the straight-line and reducing-balance graphs plotted on the same set of axes for the same starting value, with the point where the reducing-balance curve sits above the straight line clearly marked" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — NOMINAL AND EFFECTIVE INTEREST RATES
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
          correctAnswer: '9.38',
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
              correctAnswer: '19.25',
              correctAnswers: ['19.25%', '19.25', '19.3%', '19.3'],
              explanation: 'i_eff = (1 + 0,18/4)^4 − 1 = (1,045)^4 − 1 = 1,19252 − 1 = 19,25% ✓',
            },
            {
              label: 'b) ʼn Effektiewe jaarlikse koers van 15% is ekwivalent aan watter nominale koers, maandeliks saamgestel (%)? Gee jou antwoord tot 2 desimale plekke.',
              correctAnswer: '14.06',
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
              correctAnswer: '12.55',
              correctAnswers: ['12.55%', '12.55', '12.6%', '12.6'],
              explanation: 'i_eff = (1 + 0,12/4)^4 − 1 = (1,03)^4 − 1 = 1,12551 − 1 = 12,55% ✓',
            },
            {
              label: 'b) Bereken die effektiewe jaarlikse koers indien maandeliks saamgestel (%).',
              correctAnswer: '12.68',
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
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing the nominal-to-effective rate formula applied step by step with monthly, quarterly and daily compounding examples" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a simple comparison bar or line showing the same nominal rate compounded at different frequencies (annually, monthly, daily) converging toward a slightly higher effective rate, to illustrate that more frequent compounding increases the effective rate" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — MIXED APPLICATIONS: DECAY AND COMPOUNDING COMBINED
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
          answer: `${re('A ≈ R54 134')}`,
          steps: [
            `${bl('Fase 1 (0 tot 18 maande = 6 kwartale teen 8% p.j.):')} ${bl('A₁')} = ${bl('50 000')}(1 + 0,08 ÷ 4)<sup>6</sup> = ${bl('50 000')}(1,02)<sup>6</sup> = ${bl('50 000')} × 1,1262 = ${bl('R56 308')}.`,
            `${gr('Fase 2 (18 tot 24 maande = 6 maande teen 6% p.j.):')} ${gr('A₂')} = ${bl('56 308')}(1 + 0,06 ÷ 12)<sup>6</sup> = ${bl('56 308')}(1,005)<sup>6</sup> = ${bl('56 308')} × 1,0304 = ${gr('R58 022')}.`,
            `Onttrekking na 2 jaar: ${gr('R58 022')} − R10 000 = ${or('R48 022')}.`,
            `${or('Fase 3 (24 tot 48 maande = 24 maande teen 6% p.j.):')} ${re('A₃')} = ${or('48 022')}(1,005)<sup>24</sup> = ${or('48 022')} × 1,1272 = ${re('R54 134')}.`,
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
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-phase finance problem step by step, showing how to handle a rate change and a mid-period withdrawal" />',
      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram needed: a timeline showing the multi-stage scenario from Example 2, with markers at 18 months (rate change), 24 months (withdrawal), and 48 months (final value), so the sequence of events is visually clear" />',
    },
  ],

  scoreMessages: [
    { minScore: 27, message: 'Uitstekend! ʼn Volpunt — jy het finansiële verval vir Graad 11 volkome bemeester. Hou so aan!' },
    { minScore: 21, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van waardevermindering. Hersien enige stappe wat jy gemis het en jy sal dit perfek kry.' },
    { minScore: 15, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 9, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling weer deur, en probeer dan weer.' },
  ],
}
