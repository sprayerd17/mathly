import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (finance roles) ──────────────────────────────────────────
// principal / log conversion / nominal rate → blue   (#2563eb)
// rate / power law step / compounding periods → orange (#ea580c)
// final amount / calculated n / effective rate → green (#16a34a)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Finansies',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISION: SIMPLE AND COMPOUND GROWTH AND DECAY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-compound-growth-decay',
      title: 'Hersiening — Enkelvoudige en Saamgestelde Groei en Verval',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">In hierdie afdeling hersien ons die vier kernformules vir groei en verval. <strong>Enkelvoudige groei</strong> gebruik ${gr('A')} = ${bl('P')}(1 + n${or('i')}) en <strong>enkelvoudige verval</strong> gebruik ${gr('A')} = ${bl('P')}(1 − n${or('i')}), waar ${gr('A')} die finale bedrag is, ${bl('P')} die hoofsom is, n die aantal tydperke is, en ${or('i')} die rentekoers as ʼn desimale breuk is. <strong>Saamgestelde groei</strong> gebruik ${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ en <strong>saamgestelde verval</strong> gebruik ${gr('A')} = ${bl('P')}(1 − ${or('i')})ⁿ. Saamgestelde groei en verval pas rente toe op die groeiende of dalende balans by elke tydperk, wat dit oor tyd kragtiger maak as enkelvoudige rente. Hierdie formules is van toepassing op spaargeld, lenings, huurkoop, waardevermindering en bevolkingsgroei.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoofsom P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koers i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale bedrag A')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier formules</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Enkelvoudige Groei</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 + n${or('i')})</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Rente word slegs op die oorspronklike ${bl('hoofsom')} bereken. Die bedrag groei elke tydperk met dieselfde vaste waarde.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Enkelvoudige Verval</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 − n${or('i')})</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gebruik vir reguitlyn-waardevermindering. Die waarde verminder elke tydperk met dieselfde vaste bedrag.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Saamgestelde Groei</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Rente word elke tydperk op die groeiende balans toegepas. Kragtiger as enkelvoudige rente oor tyd — gebruik vir spaargeld en beleggings.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#b91c1c;margin-bottom:6px;">Saamgestelde Verval</p>` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin-bottom:6px;">${gr('A')} = ${bl('P')}(1 − ${or('i')})ⁿ</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Gebruik vir waardevermindering op ʼn verminderende balans. Elke tydperk is die afname kleiner omdat die basis kleiner is — gebruik vir voertuie en masjinerie.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Veranderlike-verwysing</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Hoofsom</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die oorspronklike beginbedrag — die belegging, leningswaarde, of aanvangsprys.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Rentekoers</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die koers as ʼn <strong>desimale breuk</strong>. Skakel ʼn persentasie om deur deur 100 te deel (bv. 7% → 0,07).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">n — Aantal tydperke</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die aantal tydperke (in jare tensy anders aangedui).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">A — Finale bedrag</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die opgehoopte of verminderde waarde aan die einde van die tydperk.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Saamgestelde rente klop enkelvoudige rente oor tyd</p>` +
        `<p style="margin:0;color:#1e3a8a;">Oor kort tydperke is die verskil tussen enkelvoudige en saamgestelde rente klein. Oor langer tydperke word saamstelling aansienlik groter omdat elke tydperk se rente self ook rente verdien. Wanneer beleggings vergelyk word, kontroleer altyd of die koers enkelvoudig of saamgestel is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato belê R12 000 teen 7% enkelvoudige rente vir 5 jaar. Vind die finale bedrag.',
          answer: `${gr('A')} = R16 200`,
          steps: [
            `Skryf die formule vir enkelvoudige groei neer: ${gr('A')} = ${bl('P')}(1 + n${or('i')})`,
            `Identifiseer die waardes: ${bl('P')} = R12 000, ${or('i')} = 7% = ${or('0,07')}, n = 5`,
            `Vervang: ${gr('A')} = ${bl('12 000')}(1 + 5 × ${or('0,07')})`,
            `Vereenvoudig binne die hakie: 5 × ${or('0,07')} = 0,35, dus 1 + 0,35 = 1,35`,
            `Bereken: ${gr('A')} = ${bl('12 000')} × 1,35 = ${gr('R16 200')}`,
          ],
        },
        {
          question: 'Sipho belê R8 000 teen 6% saamgestelde rente per jaar vir 4 jaar. Vind die finale bedrag.',
          answer: `${gr('A')} ≈ R10 100`,
          steps: [
            `Skryf die formule vir saamgestelde groei neer: ${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ`,
            `Identifiseer die waardes: ${bl('P')} = R8 000, ${or('i')} = 6% = ${or('0,06')}, n = 4`,
            `Vervang: ${gr('A')} = ${bl('8 000')}(1 + ${or('0,06')})⁴ = ${bl('8 000')}(1,06)⁴`,
            `Bereken (1,06)⁴: 1,06² = 1,1236; 1,1236² ≈ 1,2625`,
            `Bereken: ${gr('A')} = ${bl('8 000')} × 1,2625 ≈ ${gr('R10 100')}`,
          ],
        },
        {
          question: 'ʼn Motor gekoop vir R280 000 verminder in waarde teen 15% per jaar op ʼn verminderende balans. Vind die waarde na 5 jaar.',
          answer: `${gr('A')} ≈ R124 236`,
          steps: [
            `Skryf die formule vir saamgestelde verval neer: ${gr('A')} = ${bl('P')}(1 − ${or('i')})ⁿ`,
            `Identifiseer die waardes: ${bl('P')} = R280 000, ${or('i')} = 15% = ${or('0,15')}, n = 5`,
            `Vervang: ${gr('A')} = ${bl('280 000')}(1 − ${or('0,15')})⁵ = ${bl('280 000')}(0,85)⁵`,
            `Bereken (0,85)⁵: 0,85² = 0,7225; 0,7225 × 0,85 ≈ 0,6141; 0,6141 × 0,85 ≈ 0,5220; 0,5220 × 0,85 ≈ 0,4437`,
            `Bereken: ${gr('A')} = ${bl('280 000')} × 0,4437 ≈ ${gr('R124 236')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die finale bedrag as R10 000 teen 8% enkelvoudige rente vir 3 jaar belê word.',
          answer: 'R12 400',
          checkMode: 'auto',
          correctAnswer: 'R12400',
          correctAnswers: ['R12400', '12400', 'R12,400', '12,400', 'R12 400', '12 400'],
          explanation: 'A = P(1 + ni) = 10 000(1 + 3 × 0,08) = 10 000 × 1,24 = R12 400 ✓',
        },

        // ── Q2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die finale bedrag as R6 000 teen 5% saamgestelde rente vir 6 jaar belê word.',
          answer: 'R8 040,57',
          checkMode: 'auto',
          correctAnswer: 'R8040.57',
          correctAnswers: ['R8040.57', '8040.57', 'R8,040.57', '8,040.57', 'R8 040.57', '8 040.57', 'R8040,57', 'R8 040,57'],
          explanation: 'A = P(1 + i)ⁿ = 6 000(1,05)⁶ ≈ 6 000 × 1,3401 ≈ R8 040,57 ✓',
        },

        // ── Q3 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê saamgestelde rente gee altyd ʼn hoër finale bedrag as enkelvoudige rente oor dieselfde tydperk en koers. Is hy korrek? Verduidelik.',
          answer: 'Ja — enkelvoudige rente word slegs op die oorspronklike hoofsom bereken, terwyl saamgestelde rente ook rente op voorheen opgehoopte rente verdien, wat dit oor tyd vinniger laat groei.',
          checkMode: 'self',
        },

        // ── Q4 Easy ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Masjien ter waarde van R90 000 verminder in waarde teen 10% per jaar op ʼn verminderende balans. Vind die waarde na 4 jaar.',
          answer: 'R59 049',
          checkMode: 'auto',
          correctAnswer: 'R59049',
          correctAnswers: ['R59049', '59049', 'R59,049', '59,049', 'R59 049', '59 049'],
          explanation: 'A = P(1 − i)ⁿ = 90 000(0,90)⁴ = 90 000 × 0,6561 = R59 049 ✓',
        },

        // ── Q18 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'ʼn Motor gekoop vir R400 000 verminder in waarde teen 20% per jaar (verminderende balans). Terselfdertyd neem dieselfde model motor se vervangingskoste toe teen 8% per jaar. Vind na hoeveel jare daar ʼn gaping van R500 000 tussen die vervangingskoste en die motor se boekwaarde sal wees.',
          answer: 'Gaping = 400 000(1,08)ⁿ − 400 000(0,80)ⁿ = 500 000. Dit vereis probeer en verbeter aangesien albei terme n bevat:\nProbeer n = 5: 400 000(1,4693) − 400 000(0,3277) = 587 720 − 131 080 = 456 640 (te laag)\nProbeer n = 6: 400 000(1,5869) − 400 000(0,2621) = 634 760 − 104 840 = 529 920 (naby)\nOngeveer 6 jaar.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining simple and compound growth and decay formulae with worked examples on savings depreciation and population growth" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — USING LOGARITHMS TO CALCULATE n
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'logarithms-calculate-n',
      title: 'Gebruik van Logaritmes om n te Bereken',
      icon: 'log',
      explanation:
        `<p style="margin-bottom:16px;">In Graad 10 en 11 het ons probeer en verbeter gebruik om n (die aantal tydperke) te vind. In Graad 12 gebruik ons <strong>logaritmes</strong> om n presies te bereken. Beginnende by ${gr('A')} = ${bl('P')}(1 + ${or('i')})ⁿ, deel ons albei kante deur ${bl('P')}, neem dan die log van albei kante en pas die <strong>magswet</strong> toe om n uit die eksponent te bring: log(xᵃ) = a·log(x).</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('log-omskakeling')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('magswet-stap')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('berekende n')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Afleiding van die metode</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Begin:</strong> A = P(1 + i)ⁿ</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Deel albei kante deur P:')} A/P = (1 + i)ⁿ</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Neem log van albei kante:')} log(A/P) = log(1 + i)ⁿ</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('Pas die magswet toe')} log(xᵃ) = a·log(x): log(A/P) = n·log(1 + i)</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Los op vir n:')} n = log(A/P) ÷ log(1 + i)</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Dieselfde metode vir verval</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir saamgestelde verval, vervang (1 + i)ⁿ met (1 − i)ⁿ. Die logaritme van ʼn getal tussen 0 en 1 is negatief, en die log van (1 − i) is ook negatief, sodat die twee negatiewe waardes uitkanselleer en n positief uitkom — soos verwag.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoe lank sal dit vir R5 000 neem om na R8 000 te groei teen 9% saamgestelde rente per jaar?',
          answer: `${gr('n')} ≈ 5,46 jaar`,
          steps: [
            `Stel die vergelyking op: 8 000 = 5 000(1,09)ⁿ`,
            `${bl('Deel albei kante deur 5 000:')} 8 000 ÷ 5 000 = (1,09)ⁿ → 1,6 = (1,09)ⁿ`,
            `${bl('Neem log van albei kante:')} log(1,6) = log(1,09)ⁿ`,
            `${or('Pas die magswet toe:')} log(1,6) = n·log(1,09)`,
            `${gr('Los op vir n:')} n = log(1,6) ÷ log(1,09) ≈ 0,2041 ÷ 0,0374 ≈ ${gr('5,46 jaar')}`,
          ],
        },
        {
          question: 'ʼn Bevolking van 2 miljoen groei teen 3% per jaar. Hoeveel jare tot dit 3 miljoen bereik?',
          answer: `${gr('n')} ≈ 13,72 jaar, dus ongeveer 14 jaar`,
          steps: [
            `Stel die vergelyking op: 3 000 000 = 2 000 000(1,03)ⁿ`,
            `${bl('Deel albei kante deur 2 000 000:')} 3 000 000 ÷ 2 000 000 = (1,03)ⁿ → 1,5 = (1,03)ⁿ`,
            `${bl('Neem log van albei kante:')} log(1,5) = log(1,03)ⁿ`,
            `${or('Pas die magswet toe:')} log(1,5) = n·log(1,03)`,
            `${gr('Los op vir n:')} n = log(1,5) ÷ log(1,03) ≈ 0,1761 ÷ 0,01284 ≈ ${gr('13,72')} jaar`,
            `Aangesien ons ʼn heelgetal aantal jare benodig: ongeveer <strong>14 jaar</strong>.`,
          ],
        },
        {
          question: 'Hoe lank sal dit vir ʼn motor ter waarde van R200 000 neem om na R80 000 te verminder teen 12% per jaar op ʼn verminderende balans?',
          answer: `${gr('n')} ≈ 7,17 jaar`,
          steps: [
            `Stel die vergelyking op: 80 000 = 200 000(0,88)ⁿ`,
            `${bl('Deel albei kante deur 200 000:')} 80 000 ÷ 200 000 = (0,88)ⁿ → 0,4 = (0,88)ⁿ`,
            `${bl('Neem log van albei kante:')} log(0,4) = log(0,88)ⁿ`,
            `${or('Pas die magswet toe:')} log(0,4) = n·log(0,88)`,
            `${gr('Los op vir n:')} n = log(0,4) ÷ log(0,88) ≈ −0,3979 ÷ (−0,0555) ≈ ${gr('7,17 jaar')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q5 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Hoe lank sal dit vir R3 000 neem om na R5 000 te groei teen 8% saamgestelde rente per jaar, deur logaritmes te gebruik?',
          answer: 'ongeveer 6,64 jaar',
          checkMode: 'auto',
          correctAnswer: '6.64',
          correctAnswers: ['6.64', '6.64 years', 'approximately 6.64 years', '≈ 6.64 years', '6,64', '6,64 jaar', 'ongeveer 6,64 jaar', '≈ 6,64 jaar'],
          explanation: '5 000 = 3 000(1,08)ⁿ\n5 000 ÷ 3 000 = (1,08)ⁿ → 1,6667 = (1,08)ⁿ\nn = log(1,6667) ÷ log(1,08) ≈ 0,2218 ÷ 0,0334 ≈ 6,64 jaar ✓',
        },

        // ── Q6 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato wil haar belegging van R15 000 teen 7% saamgestelde rente verdubbel. Vind die presiese aantal jare deur logaritmes te gebruik.',
          answer: '30 000 = 15 000(1,07)ⁿ\n2 = (1,07)ⁿ\nn = log 2 ÷ log 1,07 ≈ 0,30103 ÷ 0,02938 ≈ 10,24 jaar',
          checkMode: 'self',
        },

        // ── Q7 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Motor ter waarde van R350 000 verminder in waarde teen 18% per jaar op ʼn verminderende balans. Hoeveel jare tot dit minder as R100 000 werd is?',
          answer: '100 000 = 350 000(0,82)ⁿ\n0,2857 = (0,82)ⁿ\nn = log(0,2857) ÷ log(0,82) ≈ 6,47 jaar, dus meer as 6 jaar.',
          checkMode: 'self',
        },

        // ── Q17 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind hoe lank dit neem vir ʼn nominale koers van 6% maandeliks saamgestel om ʼn belegging met 50% te laat groei.',
          answer: '(1,005)ⁿ = 1,5\nn = log(1,5) ÷ log(1,005) ≈ 0,17609 ÷ 0,002166 ≈ 81,3 maande ≈ 6,78 jaar',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to use logarithms to solve for n in compound growth and decay equations using the power law" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — NOMINAL AND EFFECTIVE INTEREST RATES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'nominal-effective-interest-rates',
      title: 'Nominale en Effektiewe Rentekoerse',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer rente meer gereeld as een keer per jaar saamgestel word (bv. maandeliks of kwartaalliks), verskil die <strong>effektiewe jaarlikse koers</strong> — die ware koers wat werklik oor ʼn jaar verdien of betaal word — van die <strong>nominale jaarlikse koers</strong>, wat die genoemde koers is. Die verband is:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">(1 + ${gr('effektiewe koers')}) = (1 + ${bl('nominale koers')} ÷ ${or('m')})${or('^m')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">waar ${or('m')} die aantal samestellingstydperke per jaar is</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('nominale koers')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('samestellingstydperke m')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('effektiewe koers')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene waardes van m</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 4')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Kwartaalliks</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 12')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Maandeliks</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 52')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Weekliks</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#ea580c;font-size:1.3em;margin-bottom:4px;">${or('m = 365')}</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Daagliks</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die effektiewe koers belangrik is</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer twee beleggings met verskillende samestellingsfrekwensies vergelyk word, skakel altyd eers albei om na hul ${gr('effektiewe jaarlikse koers')}. Die belegging met die hoër effektiewe koers gee jou meer geld aan die einde van die jaar, ongeag wat die ${bl('nominale koerse')} sê.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die effektiewe jaarlikse koers ekwivalent aan ʼn nominale koers van 12% maandeliks saamgestel.',
          answer: `${gr('Effektiewe koers')} ≈ 12,68%`,
          steps: [
            `Identifiseer die waardes: ${bl('nominale koers')} = 12% = ${bl('0,12')}, ${or('m')} = ${or('12')} (maandeliks)`,
            `Skryf die formule: (1 + ${gr('effektiewe koers')}) = (1 + ${bl('0,12')} ÷ ${or('12')})^${or('12')}`,
            `Vereenvoudig: (1 + ${gr('effektiewe koers')}) = (1 + 0,01)^${or('12')} = (1,01)^${or('12')}`,
            `Bereken (1,01)¹²: ≈ 1,1268`,
            `${gr('Effektiewe koers')} = 1,1268 − 1 = 0,1268 = ${gr('12,68%')}`,
          ],
        },
        {
          question: 'Sipho vergelyk twee beleggings: 10,5% per jaar daagliks saamgestel, teenoor 10,55% per jaar maandeliks saamgestel. Watter een is beter?',
          answer: `Die ${gr('maandeliks saamgestelde')} opsie is marginaal beter`,
          steps: [
            `<strong>Opsie 1 — Daagliks:</strong> ${bl('nominale koers')} = ${bl('0,105')}, ${or('m')} = ${or('365')}`,
            `${gr('Effektiewe koers')} = (1 + ${bl('0,105')} ÷ ${or('365')})^${or('365')} − 1 ≈ (1,000288)^${or('365')} − 1 ≈ 1,1107 − 1 = ${gr('11,07%')}`,
            `<strong>Opsie 2 — Maandeliks:</strong> ${bl('nominale koers')} = ${bl('0,1055')}, ${or('m')} = ${or('12')}`,
            `${gr('Effektiewe koers')} = (1 + ${bl('0,1055')} ÷ ${or('12')})^${or('12')} − 1 ≈ (1,008792)^${or('12')} − 1 ≈ 1,1108 − 1 = ${gr('11,08%')}`,
            `Vergelyk: ${gr('11,08%')} &gt; ${gr('11,07%')}. Die <strong>maandeliks saamgestelde</strong> opsie teen 10,55% is marginaal beter.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q8 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die effektiewe jaarlikse koers ekwivalent aan ʼn nominale koers van 18% maandeliks saamgestel.',
          answer: '19,56%',
          checkMode: 'auto',
          correctAnswer: '19.56%',
          correctAnswers: ['19.56%', '19.56', '≈ 19.56%', 'approximately 19.56%', '19,56%', '19,56', '≈ 19,56%', 'ongeveer 19,56%'],
          explanation: '(1 + effektief) = (1 + 0,18 ÷ 12)¹² = (1,015)¹² ≈ 1,1956\nEffektiewe koers = 1,1956 − 1 = 0,1956 = 19,56% ✓',
        },

        // ── Q9 Hard ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo vergelyk 10% per jaar kwartaalliks saamgestel teenoor 10,2% per jaar jaarliks saamgestel. Watter een het die hoër effektiewe koers?',
          answer: 'Kwartaalliks: (1 + 0,10/4)⁴ − 1 = (1,025)⁴ − 1 ≈ 10,38%\nJaarliks: 10,2%\nDie kwartaalliks saamgestelde koers is hoër teen 10,38%.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the difference between nominal and effective interest rates and how to convert between them using the compounding formula" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — FUTURE VALUE ANNUITIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'future-value-annuities',
      title: 'Toekomstige Waarde Annuïteite',
      icon: 'FV',
      explanation:
        `<p style="margin-bottom:16px;">ʼn Annuïteit is ʼn reeks gelyke, gereelde betalings gemaak teen gelyke tydintervalle. ʼn <strong>Toekomstige waarde annuïteit</strong> bereken hoeveel ʼn reeks gereelde deposito’s oor tyd sal groei. Die formule is:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">Betalings word aanvaar om een tydperk vanaf nou te begin en na n tydperke te eindig</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gereelde betaling x')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('rente per tydperk i')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toekomstige waarde F')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Veranderlike-verwysing</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">F — Toekomstige waarde</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die totale opgehoopte waarde van alle deposito’s plus rente aan die einde van n tydperke.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">x — Gereelde betaling</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die vaste bedrag gedeponeer aan die einde van elke tydperk.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">i — Rente per tydperk</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die nominale jaarlikse koers gedeel deur die aantal samestellingstydperke per jaar (bv. 9% ÷ 12 = 0,0075 per maand).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">n — Aantal betalings</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die totale aantal gelyke betalings gemaak (bv. 5 jaar × 12 maande = 60 betalings).</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Sleutelaanname</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die toekomstige waarde annuïteit-formule aanvaar dat betalings aan die <strong>einde</strong> van elke tydperk gemaak word. Die eerste betaling verdien rente vir n − 1 tydperke en die laaste betaling verdien geen rente nie. Die ${or('rentekoers per tydperk i')} moet altyd met die samestellingsfrekwensie ooreenstem — as jy maandeliks deponeer, gebruik die maandelikse koers.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato deponeer R1 500 aan die einde van elke maand in ʼn rekening wat 9% per jaar maandeliks saamgestel verdien. Vind die totale waarde na 5 jaar.',
          answer: `${gr('F')} ≈ R113 133`,
          steps: [
            `Identifiseer die ${or('rentekoers per tydperk')}: ${or('i')} = 0,09 ÷ 12 = ${or('0,0075')} per maand`,
            `Bepaal die aantal betalings: n = 5 × 12 = 60 maande`,
            `Skryf die formule neer: ${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}`,
            `Vervang: ${gr('F')} = ${bl('1 500')} × [(1 + ${or('0,0075')})⁶⁰ − 1] ÷ ${or('0,0075')}`,
            `Bereken (1,0075)⁶⁰ ≈ 1,5657`,
            `Teller: 1,5657 − 1 = 0,5657`,
            `Deel: 0,5657 ÷ ${or('0,0075')} ≈ 75,42`,
            `Bereken: ${gr('F')} = ${bl('1 500')} × 75,42 ≈ ${gr('R113 133')}`,
          ],
        },
        {
          question: 'Thabo spaar R2 000 per maand teen 8% per jaar maandeliks saamgestel vir 3 jaar om ʼn motor te koop. Vind die toekomstige waarde van sy spaargeld.',
          answer: `${gr('F')} ≈ R81 020`,
          steps: [
            `Identifiseer die ${or('rentekoers per tydperk')}: ${or('i')} = 0,08 ÷ 12 ≈ ${or('0,00667')} per maand`,
            `Bepaal die aantal betalings: n = 3 × 12 = 36 maande`,
            `Skryf die formule neer: ${gr('F')} = ${bl('x')} × [(1 + ${or('i')})ⁿ − 1] ÷ ${or('i')}`,
            `Vervang: ${gr('F')} = ${bl('2 000')} × [(1 + ${or('0,00667')})³⁶ − 1] ÷ ${or('0,00667')}`,
            `Bereken (1,00667)³⁶ ≈ 1,2702`,
            `Teller: 1,2702 − 1 = 0,2702`,
            `Deel: 0,2702 ÷ ${or('0,00667')} ≈ 40,51`,
            `Bereken: ${gr('F')} = ${bl('2 000')} × 40,51 ≈ ${gr('R81 020')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q10 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Amahle deponeer R800 per maand in ʼn rekening wat 6% per jaar maandeliks saamgestel verdien vir 4 jaar. Vind die toekomstige waarde.',
          answer: 'R43 017,83',
          checkMode: 'auto',
          correctAnswer: 'R43017.83',
          correctAnswers: ['R43017.83', '43017.83', 'R43,017.83', '43,017.83', 'R43 017.83', '43 017.83', 'R43017,83', 'R43 017,83'],
          explanation: 'i = 0,06 ÷ 12 = 0,005, n = 4 × 12 = 48\nF = 800 × [(1,005)⁴⁸ − 1] ÷ 0,005 ≈ R43 017,83 ✓',
        },

        // ── Q11 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho spaar R1 200 per maand teen 7,2% per jaar maandeliks saamgestel vir 10 jaar. Vind die toekomstige waarde van sy spaargeld.',
          answer: 'i = 0,072 ÷ 12 = 0,006, n = 120\nF = 1 200 × [(1,006)¹²⁰ − 1] ÷ 0,006\n(1,006)¹²⁰ ≈ 2,0508\nF = 1 200 × (1,0508 ÷ 0,006) = 1 200 × 175,13 ≈ R210 160',
          checkMode: 'self',
        },

        // ── Q15 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho wil R500 000 spaar in 8 jaar deur gelyke maandelikse deposito’s in ʼn rekening te maak wat 8,4% per jaar maandeliks saamgestel verdien. Vind die maandelikse deposito benodig.',
          answer: 'i = 0,084 ÷ 12 = 0,007, n = 96\n500 000 = x × [(1,007)⁹⁶ − 1] ÷ 0,007\n(1,007)⁹⁶ ≈ 1,9316\n500 000 = x × (0,9316 ÷ 0,007) = x × 133,09\nx ≈ R3 756',
          checkMode: 'self',
        },

        // ── Q19 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo deponeer R2 500 per maand vir 5 jaar in ʼn rekening wat 7,8% per jaar maandeliks saamgestel verdien. Hy hou dan op met deposito’s en laat die geld nog 5 jaar teen dieselfde koers staan. Vind die totale waarde aan die einde van die 10-jaar-tydperk.',
          answer: 'Na 5 jaar van deposito’s: i = 0,0065, n = 60\nF = 2 500 × [(1,0065)⁶⁰ − 1] ÷ 0,0065\n(1,0065)⁶⁰ ≈ 1,4749\nF = 2 500 × (0,4749 ÷ 0,0065) ≈ R182 654\nDit groei dan vir nog 5 jaar: 182 654 × (1,0065)⁶⁰ ≈ 182 654 × 1,4749 ≈ R269 393',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining future value annuities with worked examples on monthly savings and investment growth using the annuity formula" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — PRESENT VALUE ANNUITIES AND BOND REPAYMENTS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'present-value-annuities',
      title: 'Huidige Waarde Annuïteite en Verbandaflossings',
      icon: 'PV',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Huidige waarde annuïteit</strong> bereken die enkelbedrag wat nou benodig word (die huidige waarde) om ʼn reeks gelyke toekomstige betalings te befonds. Die formule is:</p>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">${bl('P')} = ${or('x')} × [1 − (1 + i)⁻ⁿ] ÷ i</p>` +
        `<p style="font-size:13px;color:#6b7280;margin-top:8px;margin-bottom:0;">Dit is direk van toepassing op verbande en lenings — die leningsbedrag is ${bl('P')} en die maandelikse terugbetaling is ${or('x')}</p>` +
        `</div>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('leningsbedrag P')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('maandelikse terugbetaling x')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('uitstaande balans')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Veranderlike-verwysing</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">P — Huidige waarde / Leningsbedrag</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die enkelbedrag geleen of benodig nou om die reeks betalings te befonds.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">x — Gereelde betaling</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die vaste maandelikse terugbetaling of onttrekkingsbedrag.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">i — Rente per tydperk</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die nominale jaarlikse koers gedeel deur die aantal samestellingstydperke per jaar.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">n — Aantal betalings</p>` +
        `<p style="color:#374151;font-size:13px;margin:0;">Die totale aantal gelyke terugbetalings oor die leningstermyn.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vind die uitstaande balans</p>` +
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#166534;">Om die ${gr('uitstaande balans')} na k betalings te vind, bereken die huidige waarde van die <strong>oorblywende</strong> betalings: gebruik dieselfde terugbetalingsbedrag ${or('x')} en die oorblywende aantal tydperke (n − k). Dit gee die enkelbedrag wat die lening op daardie stadium sou vereffen.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Herrangskikking van die formule</p>` +
        `<p style="margin:0;color:#1e3a8a;">As jy ${bl('P')} ken en ${or('x')} benodig, herrangskik: ${or('x')} = ${bl('P')} × i ÷ [1 − (1 + i)⁻ⁿ]. As jy die terugbetaling ken en die aantal maande benodig, isoleer (1 + i)⁻ⁿ, neem dan logs en pas die magswet toe — presies soos in Afdeling 2.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle neem ʼn lening van R250 000 teen 11% per jaar maandeliks saamgestel oor 20 jaar. Vind haar maandelikse terugbetaling.',
          answer: `${or('x')} ≈ R2 584 per maand`,
          steps: [
            `Identifiseer die rentekoers per tydperk: i = 0,11 ÷ 12 ≈ 0,009167 per maand`,
            `Bepaal die aantal betalings: n = 20 × 12 = 240 maande`,
            `Skryf die formule: ${bl('P')} = ${or('x')} × [1 − (1 + i)⁻ⁿ] ÷ i`,
            `Vervang: ${bl('250 000')} = ${or('x')} × [1 − (1,009167)⁻²⁴⁰] ÷ 0,009167`,
            `Bereken (1,009167)⁻²⁴⁰ ≈ 0,1130`,
            `Teller: 1 − 0,1130 = 0,8870`,
            `Deel: 0,8870 ÷ 0,009167 ≈ 96,76`,
            `Herrangskik om vir ${or('x')} op te los: ${or('x')} = ${bl('250 000')} ÷ 96,76 ≈ ${or('R2 584')} per maand`,
          ],
        },
        {
          question: 'Sipho neem ʼn lening van R180 000 teen 9% per jaar maandeliks saamgestel en betaal R2 000 per maand terug. Vind hoeveel maande dit neem om die lening terug te betaal.',
          answer: `n ≈ 131 maande`,
          steps: [
            `Identifiseer die rentekoers per tydperk: i = 0,09 ÷ 12 = 0,0075 per maand`,
            `Stel die vergelyking op: ${bl('180 000')} = ${or('2 000')} × [1 − (1,0075)⁻ⁿ] ÷ 0,0075`,
            `Vermenigvuldig albei kante met 0,0075: ${bl('180 000')} × 0,0075 = ${or('2 000')} × [1 − (1,0075)⁻ⁿ]`,
            `Deel albei kante deur ${or('2 000')}: 0,675 = 1 − (1,0075)⁻ⁿ`,
            `Herrangskik: (1,0075)⁻ⁿ = 1 − 0,675 = 0,325`,
            `Neem log van albei kante: −n · log(1,0075) = log(0,325)`,
            `Pas die magswet toe en los op: n = −log(0,325) ÷ log(1,0075) ≈ 0,4881 ÷ 0,003244 ≈ <strong>131 maande</strong>`,
          ],
        },
        {
          question: 'Lerato het R500 000 geleen teen 10% per jaar maandeliks saamgestel oor 20 jaar. Vind die uitstaande balans na 5 jaar (60 betalings).',
          answer: `${gr('Uitstaande balans')} ≈ R449 086`,
          steps: [
            `Stap 1 — Vind die maandelikse terugbetaling. i = 0,10 ÷ 12 ≈ 0,008333 per maand, n = 240 maande`,
            `${bl('500 000')} = ${or('x')} × [1 − (1,008333)⁻²⁴⁰] ÷ 0,008333`,
            `(1,008333)⁻²⁴⁰ ≈ 0,1364; teller = 1 − 0,1364 = 0,8636; 0,8636 ÷ 0,008333 ≈ 103,63`,
            `${or('x')} = ${bl('500 000')} ÷ 103,63 ≈ ${or('R4 825')} per maand`,
            `Stap 2 — Vind die ${gr('uitstaande balans')} na 60 betalings. Oorblywende betalings: 240 − 60 = 180`,
            `${gr('Uitstaande balans')} = ${or('4 825')} × [1 − (1,008333)⁻¹⁸⁰] ÷ 0,008333`,
            `(1,008333)⁻¹⁸⁰ ≈ 0,2245; teller = 1 − 0,2245 = 0,7755; 0,7755 ÷ 0,008333 ≈ 93,06`,
            `${gr('Uitstaande balans')} = ${or('4 825')} × 93,06 ≈ ${gr('R449 086')}`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q12 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Lerato neem ʼn lening van R100 000 teen 12% per jaar maandeliks saamgestel oor 10 jaar. Vind haar maandelikse terugbetaling.',
          answer: 'R1 434,71',
          checkMode: 'auto',
          correctAnswer: 'R1434.71',
          correctAnswers: ['R1434.71', '1434.71', 'R1,434.71', '1,434.71', 'R1 434.71', '1 434.71', 'R1434,71', 'R1 434,71'],
          explanation: 'i = 0,12 ÷ 12 = 0,01, n = 120\nx = 100 000 × 0,01 ÷ [1 − (1,01)⁻¹²⁰] ≈ 1 000 ÷ 0,6971 ≈ R1 434,71 ✓',
        },

        // ── Q13 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Thabo neem ʼn lening van R50 000 teen 9% per jaar maandeliks saamgestel en betaal R800 per maand terug. Hoeveel maande sal dit neem om terug te betaal?',
          answer: 'ongeveer 79 maande',
          checkMode: 'auto',
          correctAnswer: '79',
          correctAnswers: ['79', 'approximately 79 months', '79 months', '≈ 79 months', '79 maande', 'ongeveer 79 maande', '≈ 79 maande'],
          explanation: '50 000 = 800 × [1 − (1,0075)⁻ⁿ] ÷ 0,0075\nOplos: (1,0075)⁻ⁿ = 0,53125\nn = log(0,53125) ÷ (−log(1,0075)) ≈ 79 maande ✓',
        },

        // ── Q14 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle het R320 000 geleen teen 10,5% per jaar maandeliks saamgestel oor 15 jaar. Bereken die totale bedrag terugbetaal oor die volle termyn en die totale rente betaal.',
          answer: 'i = 0,105 ÷ 12 = 0,00875, n = 180\nMaandelikse terugbetaling = 320 000 × 0,00875 ÷ [1 − (1,00875)⁻¹⁸⁰] ≈ R3 540\nTotaal betaal = 3 540 × 180 = R637 200\nTotale rente = 637 200 − 320 000 = R317 200',
          checkMode: 'self',
        },

        // ── Q16 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê om die maandelikse terugbetaling op ʼn verband te verdubbel, halveer altyd die terugbetalingstydperk. Is sy korrek? Verduidelik.',
          answer: 'Nee — as gevolg van saamgestelde rente verminder die verdubbeling van die terugbetaling die termyn met meer as die helfte, aangesien ʼn groter betaling die hoofsom vinniger delg en die totale opgehoopte rente verminder.',
          checkMode: 'self',
        },

        // ── Q20 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle vergelyk krities twee leningsopsies vir R200 000: Opsie A teen 9% per jaar maandeliks saamgestel oor 20 jaar, Opsie B teen 10% per jaar maandeliks saamgestel oor 15 jaar. Vind die maandelikse terugbetaling en totale terugbetaling vir elke opsie, en dui dan aan watter een oor die algemeen goedkoper is en waarom.',
          answer: 'Opsie A: i = 0,0075, n = 240\nx = 200 000 × 0,0075 ÷ [1 − (1,0075)⁻²⁴⁰] ≈ R1 799\nTotaal = 1 799 × 240 = R431 760\n\nOpsie B: i = 0,00833, n = 180\nx = 200 000 × 0,00833 ÷ [1 − (1,00833)⁻¹⁸⁰] ≈ R2 149\nTotaal = 2 149 × 180 = R386 820\n\nOpsie B is oor die algemeen goedkoper ondanks hoër maandelikse betalings, aangesien die korter termyn beteken beduidend minder totale rente betaal word.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining present value annuities and bond repayments with worked examples on monthly repayments outstanding balance and solving for the number of payments" />',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het finansies bemeester.' },
      { minScore: 15, message: 'Puik werk!' },
      { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het finansies bemeester.' },
    { minScore: 15, message: 'Puik werk!' },
    { minScore: 10, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
