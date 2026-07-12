import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (percentage / interest roles) ─────────────────────────────
// original amount / principal → blue   (#2563eb)
// percentage found / rate    → orange  (#ea580c)
// increase / time            → green   (#16a34a)
// decrease / interest        → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Persentasies',
  grade: 7,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — PERSENTASIETOENAME EN -AFNAME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'percentage-increase-decrease',
      title: 'Persentasietoename en -afname',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Persentasietoename</strong> tel ʼn persentasie van die oorspronklike bedrag by daardie bedrag. ʼn <strong>Persentasieafname</strong> trek ʼn persentasie van die oorspronklike bedrag van daardie bedrag af. Om enige van die twee te bereken, vind ons eers die persentasie van die bedrag, en tel dit dan by of trek dit af van die oorspronklike.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike bedrag')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie gevind')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toename')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('afname')}</span>` +
        `</div>` +

        // ── Steps reference ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn persentasietoename of -afname te bereken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Skakel die persentasie om na ʼn desimale breuk (deel deur 100) en vermenigvuldig dit met die ${bl('oorspronklike bedrag')} om die ${or('persentasiewaarde')} te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Toename')}:</strong> Tel die ${or('persentasiewaarde')} by die ${bl('oorspronklike bedrag')} om die nuwe, hoër bedrag te vind.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Afname')}:</strong> Trek die ${or('persentasiewaarde')} van die ${bl('oorspronklike bedrag')} af om die nuwe, laer bedrag te vind.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Om ʼn persentasie na ʼn desimale breuk om te skakel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Deel die persentasie deur 100: 15% = 0,15, 20% = 0,20, 8% = 0,08. Jy kan dit dan direk met die oorspronklike bedrag vermenigvuldig om die persentasiewaarde te vind.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Hemp kos R280. Die prys styg met 15%. Bereken die nuwe prys.',
          answer: `Nuwe prys = R${gr('322')}`,
          steps: [
            `Vind 15% van ${bl('280')}: 0,15 × ${bl('280')} = ${or('42')}`,
            `${gr('Toename')}: ${bl('280')} + ${or('42')} = ${gr('322')}`,
            `<strong>Nuwe prys = R${gr('322')}</strong>`,
          ],
        },
        {
          question: 'ʼn Skootrekenaar kos R8 500. Dit word met 20% afgeslaan. Bereken die verkoopprys.',
          answer: `Verkoopprys = R${re('6 800')}`,
          steps: [
            `Vind 20% van ${bl('8 500')}: 0,20 × ${bl('8 500')} = ${or('1 700')}`,
            `${re('Afname')}: ${bl('8 500')} − ${or('1 700')} = ${re('6 800')}`,
            `<strong>Verkoopprys = R${re('6 800')}</strong>`,
          ],
        },
        {
          question: "Sipho se salaris van R12 000 styg met 8%. Bereken sy nuwe salaris.",
          answer: `Nuwe salaris = R${gr('12 960')}`,
          steps: [
            `Vind 8% van ${bl('12 000')}: 0,08 × ${bl('12 000')} = ${or('960')}`,
            `${gr('Toename')}: ${bl('12 000')} + ${or('960')} = ${gr('12 960')}`,
            `<strong>Nuwe salaris = R${gr('12 960')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om persentasietoename en -afname te bereken deur die persentasie na ʼn desimale breuk om te skakel en dit dan by die oorspronklike bedrag te tel of daarvan af te trek" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat persentasietoename en -afname wys met die oorspronklike bedrag in blou, die gevonde persentasiewaarde in oranje, die toename-resultaat in groen en die afname-resultaat in rooi" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — ENKELVOUDIGE RENTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-interest',
      title: 'Enkelvoudige Rente',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Enkelvoudige rente is geld wat verdien of betaal word op ʼn bedrag geld oor tyd, <strong>slegs op die oorspronklike bedrag</strong> (die hoofsom) bereken. Die formule is:</p>` +

        // ── Formula box ──────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.15em;font-weight:700;color:#374151;margin:0;">Enkelvoudige Rente = ${bl('Hoofsom (P)')} × ${or('Koers (i)')} × ${gr('Tyd (n)')}</p>` +
        `<p style="font-size:0.88em;color:#6b7280;margin:8px 0 0 0;">waar ${or('Koers')} as ʼn desimale breuk geskryf word en ${gr('Tyd')} in jare is</p>` +
        `</div>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hoofsom')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('koers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('tyd')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('rente')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hoofsom (P)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die oorspronklike bedrag geld wat belê of geleen word.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Koers (i)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die rentekoers per jaar, as ʼn desimale breuk geskryf. Bv. 6% = 0,06.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tyd (n)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die tydperk in jare waarvoor die geld belê of geleen word.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Enkelvoudige Rente (ER)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die bedrag rente wat verdien of betaal word, slegs op die hoofsom bereken.</p>` +
        `</div>` +

        `</div>` +

        // ── Total amount ─────────────────────────────────────────────────────
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0;">Totale Bedrag = ${bl('Hoofsom')} + ${re('Enkelvoudige Rente')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom "enkelvoudig"?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Enkelvoudige rente word <strong>elke jaar slegs op die hoofsom</strong> bereken — dit verdien nie rente op rente wat voorheen verdien is nie. Dit maak dit maklik om te bereken.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato belê R5 000 teen 6% enkelvoudige rente per jaar vir 3 jaar. Bereken die rente verdien.',
          answer: `Rente verdien = R${re('900')}`,
          steps: [
            `Skryf die waardes neer: ${bl('P')} = R${bl('5 000')}, ${or('i')} = ${or('0,06')} (6% ÷ 100), ${gr('n')} = ${gr('3')} jaar`,
            `Pas die formule toe: ER = ${bl('P')} × ${or('i')} × ${gr('n')} = ${bl('5 000')} × ${or('0,06')} × ${gr('3')} = ${re('900')}`,
            `<strong>Rente verdien = R${re('900')}</strong>`,
          ],
        },
        {
          question: 'Bereken die totale bedrag wat Lerato na 3 jaar het.',
          answer: `Totale bedrag = R${gr('5 900')}`,
          steps: [
            `Van die vorige voorbeeld: ${bl('Hoofsom')} = R${bl('5 000')}, ${re('Rente')} = R${re('900')}`,
            `Totaal = ${bl('Hoofsom')} + ${re('Rente')} = R${bl('5 000')} + R${re('900')} = R${gr('5 900')}`,
            `<strong>Totale bedrag = R${gr('5 900')}</strong>`,
          ],
        },
        {
          question: 'Amahle leen R8 000 teen 10% enkelvoudige rente vir 2 jaar. Hoeveel moet sy in totaal terugbetaal?',
          answer: `Totaal om terug te betaal = R${gr('9 600')}`,
          steps: [
            `Skryf die waardes neer: ${bl('P')} = R${bl('8 000')}, ${or('i')} = ${or('0,10')} (10% ÷ 100), ${gr('n')} = ${gr('2')} jaar`,
            `Bereken ER: ER = ${bl('8 000')} × ${or('0,10')} × ${gr('2')} = ${re('1 600')}`,
            `Totaal = ${bl('8 000')} + ${re('1 600')} = ${gr('9 600')}`,
            `<strong>Totaal om terug te betaal = R${gr('9 600')}</strong>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die enkelvoudige-rente-formule ER = P x i x n toe te pas en die totale bedrag te vind deur rente by die hoofsom te tel" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die enkelvoudige-rente-formule wys met hoofsom in blou, koers in oranje, tyd in groen en rente verdien in rooi, plus die totale bedrag berekening" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — WINS, VERLIES, BEGROTINGS EN REKENINGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'profit-loss-budgets-accounts',
      title: 'Wins, Verlies, Begrotings en Rekeninge',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Alledaagse geldbesluite gebruik dieselfde persentasievaardighede in nuwe kontekste: bepaal of ʼn besigheid ʼn <strong>wins</strong> of ʼn <strong>verlies</strong> gemaak het, ʼn <strong>begroting</strong> beplan sodat uitgawes nie inkomste oorskry nie, ʼn <strong>rekening</strong>-staat nagaan, en ʼn <strong>lening</strong> verstaan.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kosprys / inkomste')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie gevind')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('wins / saldo')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verlies / uitgawe')}</span>` +
        `</div>` +

        // ── Profit and loss ──────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Wins en verlies</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.05em;font-weight:700;color:#374151;margin:0 0 6px 0;">${gr('Wins')} = ${or('Verkoopprys')} − ${bl('Kosprys')} &nbsp;&nbsp;|&nbsp;&nbsp; ${re('Verlies')} = ${bl('Kosprys')} − ${or('Verkoopprys')}</p>` +
        `<p style="font-size:0.88em;color:#6b7280;margin:0;">ʼn Persentasiewins of -verlies word altyd op die ${bl('kosprys')} bereken (wat die verkoper oorspronklik betaal het).</p>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Begroting</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Plan van verwagte ${gr('inkomste')} en ${re('uitgawes')} oor ʼn tydperk, gebruik om te verseker dat uitgawes nie inkomste oorskry nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Rekening</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Rekord van geld verskuldig of betaal oor tyd, bv. ʼn winkelrekening of nutsdiensrekening, dikwels maandeliks gefaktureer.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Lening</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Geld wat geleen word en terugbetaal moet word, gewoonlik met enkelvoudige rente bygevoeg, oor ʼn ooreengekome tydperk.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Saldo</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Inkomste')} minus ${re('uitgawes')}. ʼn Positiewe saldo beteken geld is oor; ʼn negatiewe saldo beteken oorbesteding.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Persentasiewins of -verlies</p>` +
        `<p style="margin:0;color:#1e3a8a;">% wins = (${gr('Wins')} ÷ ${bl('Kosprys')}) × 100. % verlies = (${re('Verlies')} ÷ ${bl('Kosprys')}) × 100. Deel altyd deur die <strong>kosprys</strong>, nooit die verkoopprys nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Spazawinkel koop ʼn boks aartappelskyfies vir R80 (kosprys) en verkoop dit vir R100 (verkoopprys). Bereken die wins en die persentasiewins.',
          answer: `Wins = R${gr('20')}, persentasiewins = ${gr('25%')}`,
          steps: [
            `Wins = ${or('Verkoopprys')} − ${bl('Kosprys')} = ${or('100')} − ${bl('80')} = ${gr('20')}`,
            `% wins = (${gr('Wins')} ÷ ${bl('Kosprys')}) × 100 = (${gr('20')} ÷ ${bl('80')}) × 100 = ${gr('25%')}`,
            `<strong>Wins = R${gr('20')}, persentasiewins = ${gr('25%')}</strong>`,
          ],
        },
        {
          question: 'ʼn Handelaar koop ʼn baadjie vir R450 (kosprys) en, weens ʼn skeur in die naat, moet dit vir R360 (verkoopprys) verkoop word. Bereken die verlies en die persentasieverlies.',
          answer: `Verlies = R${re('90')}, persentasieverlies = ${re('20%')}`,
          steps: [
            `Verlies = ${bl('Kosprys')} − ${or('Verkoopprys')} = ${bl('450')} − ${or('360')} = ${re('90')}`,
            `% verlies = (${re('Verlies')} ÷ ${bl('Kosprys')}) × 100 = (${re('90')} ÷ ${bl('450')}) × 100 = ${re('20%')}`,
            `<strong>Verlies = R${re('90')}, persentasieverlies = ${re('20%')}</strong>`,
          ],
        },
        {
          question: 'Lindiwe begroot R4 500 maandelikse inkomste. Haar uitgawes is: huur R2 200, kos R950, vervoer R600 en lugtyd R150. Bereken haar totale uitgawes en haar saldo.',
          answer: `Totale uitgawes = R${re('3 900')}, saldo = R${gr('600')}`,
          steps: [
            `Totale ${re('uitgawes')} = 2 200 + 950 + 600 + 150 = ${re('3 900')}`,
            `Saldo = ${gr('Inkomste')} − ${re('Uitgawes')} = ${bl('4 500')} − ${re('3 900')} = ${gr('600')}`,
            `<strong>Totale uitgawes = R${re('3 900')}, saldo = R${gr('600')}</strong> (geld oor)`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om wins en verlies op die kosprys te bereken, en hoe om ʼn eenvoudige begroting op te stel deur totale uitgawes van inkomste af te trek" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik — persentasietoename ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Baadjie kos R450. Dit styg met 10%. Bereken die nuwe prys.',
      answer: 'R495',
      checkMode: 'auto',
      correctAnswer: 'R495',
      correctAnswers: ['R495', '495'],
      explanation: 'Vind 10% van R450: 0,10 × 450 = R45\nNuwe prys: 450 + 45 = R495 ✓',
    },

    // ── V2 Maklik — persentasieafname ────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn TV kos R6 000. Dit word met 25% afgeslaan. Bereken die verkoopprys.',
      answer: 'R4 500',
      checkMode: 'auto',
      correctAnswer: 'R4500',
      correctAnswers: ['R4500', '4500', 'R4 500', '4 500'],
      explanation: 'Vind 25% van R6 000: 0,25 × 6 000 = R1 500\nVerkoopprys: 6 000 − 1 500 = R4 500 ✓',
    },

    // ── V3 Medium — salaristoename ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: "Sipho se salaris van R15 000 styg met 12%. Bereken sy nuwe salaris.",
      answer: 'R16 800',
      checkMode: 'auto',
      correctAnswer: 'R16800',
      correctAnswers: ['R16800', '16800', 'R16 800', '16 800'],
      explanation: 'Vind 12% van R15 000: 0,12 × 15 000 = R1 800\nNuwe salaris: 15 000 + 1 800 = R16 800 ✓',
    },

    // ── V4 Moeilik — opeenvolgende persentasieredenering ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê ʼn R200-item wat met 50% afgeslaan word en dan met 50% verhoog word, keer terug na R200. Is sy korrek? Verduidelik.',
      answer: 'Nee — met 50% afgeslaan gee R100, en dan met 50% van R100 (R50) verhoog gee R150, nie R200 nie.',
      checkMode: 'self',
    },

    // ── V5 Maklik — enkelvoudige rente berekening ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die enkelvoudige rente op R3 000 teen 5% vir 2 jaar.',
      answer: 'R300',
      checkMode: 'auto',
      correctAnswer: 'R300',
      correctAnswers: ['R300', '300'],
      explanation: 'ER = P × i × n = 3 000 × 0,05 × 2 = R300 ✓',
    },

    // ── V6 Maklik — enkelvoudige rente berekening ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bereken die enkelvoudige rente op R4 500 teen 8% vir 1 jaar.',
      answer: 'R360',
      checkMode: 'auto',
      correctAnswer: 'R360',
      correctAnswers: ['R360', '360'],
      explanation: 'ER = P × i × n = 4 500 × 0,08 × 1 = R360 ✓',
    },

    // ── V7 Medium — totale bedrag na rente ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo belê R6 000 teen 7% enkelvoudige rente vir 4 jaar. Bereken die totale bedrag na 4 jaar.',
      answer: 'R7 680',
      checkMode: 'auto',
      correctAnswer: 'R7680',
      correctAnswers: ['R7680', '7680', 'R7 680', '7 680'],
      explanation: 'ER = 6 000 × 0,07 × 4 = R1 680\nTotaal = 6 000 + 1 680 = R7 680 ✓',
    },

    // ── V8 Medium — totale terugbetaling ───────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle leen R10 000 teen 12% enkelvoudige rente vir 3 jaar. Hoeveel moet sy in totaal terugbetaal?',
      answer: 'R13 600',
      checkMode: 'auto',
      correctAnswer: 'R13600',
      correctAnswers: ['R13600', '13600', 'R13 600', '13 600'],
      explanation: 'ER = 10 000 × 0,12 × 3 = R3 600\nTotaal = 10 000 + 3 600 = R13 600 ✓',
    },

    // ── V9 Moeilik — vind die tyd ───────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho belê R8 000 teen 6% enkelvoudige rente. Na hoeveel jaar sal hy R2 400 rente verdien?',
      answer: '5',
      checkMode: 'auto',
      correctAnswer: '5',
      correctAnswers: ['5', '5 jaar'],
      explanation: 'ER = P × i × n → 2 400 = 8 000 × 0,06 × n\n2 400 = 480 × n\nn = 2 400 ÷ 480 = 5 jaar ✓',
    },

    // ── V10 Moeilik — enkelvoudige-rente redenering ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê enkelvoudige rente groei elke jaar met dieselfde bedrag. Is sy korrek? Verduidelik.',
      answer: 'Ja — enkelvoudige rente word altyd op die oorspronklike hoofsom bereken, dus bly die rente wat elke jaar verdien word dieselfde.',
      checkMode: 'self',
    },

    // ── V11 Medium — kortingsbedrag en nuwe prys (twee dele) ───────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn R500-item word met 30% afgeslaan. Bereken die kortingsbedrag en die nuwe prys.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Kortingsbedrag',
          correctAnswer: 'R150',
          correctAnswers: ['R150', '150'],
          explanation: 'Korting = 30% van R500: 0,30 × 500 = R150 ✓',
        },
        {
          label: 'b) Nuwe prys',
          correctAnswer: 'R350',
          correctAnswers: ['R350', '350'],
          explanation: 'Nuwe prys = 500 − 150 = R350 ✓',
        },
      ],
    },

    // ── V12 Moeilik — totale bedrag met enkelvoudige rente ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle deponeer R12 000 teen 9% enkelvoudige rente vir 5 jaar. Bereken die totale bedrag in haar rekening.',
      answer: 'R17 400',
      checkMode: 'auto',
      correctAnswer: 'R17400',
      correctAnswers: ['R17400', '17400', 'R17 400', '17 400'],
      explanation: 'ER = 12 000 × 0,09 × 5 = R5 400\nTotaal = 12 000 + 5 400 = R17 400 ✓',
    },

    // ── V13 Maklik — wins en persentasiewins ────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Smous koop ʼn boks lemoene vir R150 (kosprys) en verkoop dit vir R210 (verkoopprys). Bereken die wins en die persentasiewins.',
      answer: '',
      checkMode: 'auto',
      parts: [
        { label: 'a) Wins', correctAnswer: 'R60', correctAnswers: ['R60', '60'], explanation: 'Wins = Verkoopprys − Kosprys = 210 − 150 = R60 ✓' },
        { label: 'b) Persentasiewins', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: '% wins = (Wins ÷ Kosprys) × 100 = (60 ÷ 150) × 100 = 40% ✓' },
      ],
    },

    // ── V14 Medium — verlies en persentasieverlies ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Winkel koop ʼn verwarmer vir R680 (kosprys). Omdat dit verlede seisoen se model is, word dit vir R544 (verkoopprys) verkoop. Bereken die verlies en die persentasieverlies.',
      answer: '',
      checkMode: 'auto',
      parts: [
        { label: 'a) Verlies', correctAnswer: 'R136', correctAnswers: ['R136', '136'], explanation: 'Verlies = Kosprys − Verkoopprys = 680 − 544 = R136 ✓' },
        { label: 'b) Persentasieverlies', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% verlies = (Verlies ÷ Kosprys) × 100 = (136 ÷ 680) × 100 = 20% ✓' },
      ],
    },

    // ── V15 Medium — begrotingsaldo ────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bongani het ʼn maandelikse inkomste van R6 000. Sy begrote uitgawes is: huur R2 500, kos R1 200, vervoer R800 en ander koste R300. Bereken sy totale uitgawes en sy saldo.',
      answer: '',
      checkMode: 'auto',
      parts: [
        { label: 'a) Totale uitgawes', correctAnswer: 'R4 800', correctAnswers: ['R4800', '4800', 'R4 800', '4 800'], explanation: 'Totale uitgawes = 2 500 + 1 200 + 800 + 300 = R4 800 ✓' },
        { label: 'b) Saldo', correctAnswer: 'R1 200', correctAnswers: ['R1200', '1200', 'R1 200', '1 200'], explanation: 'Saldo = Inkomste − Uitgawes = 6 000 − 4 800 = R1 200 ✓' },
      ],
    },

    // ── V16 Moeilik — rekeningsaldo ─────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Zinhle se kleresrekening wys ʼn openingsaldo verskuldig van R450. Gedurende die maand koop sy R320 nuwe items op rekening, en maak sy ʼn betaling van R200 teenoor die rekening. Bereken die sluitingsaldo verskuldig.",
      answer: 'R570',
      checkMode: 'auto',
      correctAnswer: 'R570',
      correctAnswers: ['R570', '570'],
      explanation: 'Sluitingsaldo = Openingsaldo + Aankope − Betaling = 450 + 320 − 200 = R570 ✓',
    },

    // ── V17 Moeilik — leningredenering ───────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho neem ʼn lening van R5 000 teen 8% enkelvoudige rente per jaar, terug te betaal oor 2 jaar. Hy sê hy hoef net R5 000 terug te betaal, aangesien dit is wat hy geleen het. Is hy korrek? Verduidelik, en gee die totale terugbetaling.',
      answer: 'Nee — ʼn lening moet met rente bygevoeg terugbetaal word. ER = 5 000 × 0,08 × 2 = R800, dus is die totale terugbetaling R5 000 + R800 = R5 800, nie R5 000 nie.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 17,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het persentasies bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, hersien en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 17, message: 'Uitstekend! Jy het persentasies bemeester.' },
    { minScore: 12, message: 'Goeie werk!' },
    { minScore: 8, message: 'Goeie poging, hersien en probeer weer.' },
    { minScore: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (24 vrae)
    // Blokke: 1-3 Omskakeling %/breuke/desimale | 4-7 Vind ʼn % van ʼn bedrag |
    // 8-10 Een hoeveelheid as ʼn % van ʼn ander | 11-14 %-toename en -afname |
    // 15-18 Korting/opslag woordprobleme (Rand-kontekste) | 19-20 Multi-stap /
    // foutopsporing | 21-24 Wins, verlies, begrotings en rekeninge
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Omskakeling tussen persentasies, breuke en desimale (0-2)
        { difficulty: 'Easy', question: 'Skryf 7/8 as ʼn persentasie.', answer: '87,5%', checkMode: 'auto', correctAnswer: '87,5%', correctAnswers: ['87,5%', '87,5', '87.5%', '87.5'], explanation: 'Deel die teller deur die noemer, en vermenigvuldig dan met 100.\n7 ÷ 8 = 0,875. 0,875 × 100 = 87,5%. ✓' },
        { difficulty: 'Easy', question: 'Skryf 0,35 as ʼn persentasie en as ʼn breuk in eenvoudigste vorm.', answer: '35%, 7/20', checkMode: 'auto', correctAnswer: '35%,7/20', correctAnswers: ['35%,7/20', '35,7/20', '35% en 7/20', '35, 7/20'], explanation: 'Persentasie: vermenigvuldig met 100. 0,35 × 100 = 35%.\nBreuk: 0,35 = 35/100. GGF van 35 en 100 is 5, dus 35/100 = 7/20. ✓' },
        { difficulty: 'Medium', question: 'ʼn Resep gebruik 18/25 van ʼn sak meel. Skryf hierdie hoeveelheid as ʼn persentasie en as ʼn desimale breuk.', answer: '72%, 0,72', checkMode: 'auto', correctAnswer: '72%,0,72', correctAnswers: ['72%,0,72', '72,0,72', '72% en 0,72', '72%,0.72'], explanation: 'Persentasie: 18 ÷ 25 = 0,72, en dan 0,72 × 100 = 72%.\nDesimale breuk: 18 ÷ 25 = 0,72 direk. ✓' },

        // Blok 2 — Vind ʼn persentasie van ʼn bedrag (3-6)
        { difficulty: 'Easy', question: 'Bereken 35% van 480.', answer: '168', checkMode: 'auto', correctAnswer: '168', explanation: 'Skakel 35% om na ʼn desimale breuk: 35 ÷ 100 = 0,35.\nVermenigvuldig: 0,35 × 480 = 168. ✓' },
        { difficulty: 'Easy', question: 'ʼn Graad het 950 leerders in totaal. 8% van hulle bespeel ʼn musiekinstrument. Hoeveel leerders bespeel ʼn instrument?', answer: '76', checkMode: 'auto', correctAnswer: '76', explanation: 'Bereken 8% van 950: 0,08 × 950 = 76 leerders. ✓' },
        { difficulty: 'Medium', question: 'ʼn Stadion het 650 sitplekke in die westelike pawiljoen. Vir ʼn skoolatletiekdag word 62% van die sitplekke gevul. Hoeveel sitplekke word gevul?', answer: '403', checkMode: 'auto', correctAnswer: '403', explanation: 'Bereken 62% van 650: 0,62 × 650 = 403 sitplekke. ✓' },
        { difficulty: 'Medium', question: 'Zinhle het R220 gespaar. Sy spandeer 45% daarvan aan ʼn verjaardaggeskenk. Hoeveel geld spandeer sy, en hoeveel het sy oor?', answer: 'Gespandeer = R99, oor = R121', checkMode: 'auto', correctAnswer: '99,121', correctAnswers: ['99,121', 'R99,R121', 'R99, R121', '99, 121'], explanation: 'Bedrag gespandeer: 45% van 220 = 0,45 × 220 = R99.\nBedrag oor: 220 − 99 = R121. ✓' },

        // Blok 3 — Een hoeveelheid as ʼn persentasie van ʼn ander (7-9)
        { difficulty: 'Easy', question: 'Skryf 45 as ʼn persentasie van 60.', answer: '75%', checkMode: 'auto', correctAnswer: '75%', correctAnswers: ['75%', '75'], explanation: 'Skryf as ʼn breuk en vermenigvuldig met 100: (45 ÷ 60) × 100 = 0,75 × 100 = 75%. ✓' },
        { difficulty: 'Medium', question: 'ʼn Boer plant 840 saailinge, en 126 daarvan groei nie. Watter persentasie van die saailinge het nie gegroei nie?', answer: '15%', checkMode: 'auto', correctAnswer: '15%', correctAnswers: ['15%', '15'], explanation: 'Persentasie wat nie gegroei het nie = (126 ÷ 840) × 100 = 0,15 × 100 = 15%. ✓' },
        { difficulty: 'Medium', question: 'Sipho behaal 19 uit 25 in ʼn speltoets, en Amahle behaal 34 uit 40 in dieselfde toets. Wie se persentasiepunt is hoër, en met hoeveel persentasiepunte?', answer: 'Amahle s\'n is hoër, met 9 persentasiepunte', checkMode: 'auto', correctAnswer: 'Amahle,9', correctAnswers: ['Amahle,9', 'amahle,9', 'Amahle met 9', 'Amahle, 9'], explanation: 'Sipho: (19 ÷ 25) × 100 = 76%.\nAmahle: (34 ÷ 40) × 100 = 85%.\nAmahle se punt is hoër: 85% − 76% = 9 persentasiepunte. ✓' },

        // Blok 4 — Persentasietoename en -afname (10-13)
        { difficulty: 'Easy', question: 'Thabo se maandelikse salaris van R14 500 styg met 9%. Bereken sy nuwe salaris.', answer: 'R15 805', checkMode: 'auto', correctAnswer: 'R15805', correctAnswers: ['R15805', '15805', 'R15 805', '15 805'], explanation: 'Bereken 9% van R14 500: 0,09 × 14 500 = R1 305.\nNuwe salaris: 14 500 + 1 305 = R15 805. ✓' },
        { difficulty: 'Medium', question: 'ʼn Gesin betaal R3 200 huur per maand. Die verhuurder verhoog die huur met 7,5%. Bereken die nuwe maandelikse huur.', answer: 'R3 440', checkMode: 'auto', correctAnswer: 'R3440', correctAnswers: ['R3440', '3440', 'R3 440', '3 440'], explanation: 'Bereken 7,5% van R3 200: 0,075 × 3 200 = R240.\nNuwe huur: 3 200 + 240 = R3 440. ✓' },
        { difficulty: 'Medium', question: 'ʼn Klein dorpie het ʼn bevolking van 5 200 mense. Oor vyf jaar groei die bevolking met 18%. Bereken die nuwe bevolking.', answer: '6 136', checkMode: 'auto', correctAnswer: '6136', correctAnswers: ['6136', '6 136'], explanation: 'Bereken 18% van 5 200: 0,18 × 5 200 = 936.\nNuwe bevolking: 5 200 + 936 = 6 136 mense. ✓' },
        { difficulty: 'Medium', question: 'ʼn Fiets wat oorspronklik R2 400 kos, word met 15% afgeslaan. Bereken die verkoopprys.', answer: 'R2 040', checkMode: 'auto', correctAnswer: 'R2040', correctAnswers: ['R2040', '2040', 'R2 040', '2 040'], explanation: 'Bereken 15% van R2 400: 0,15 × 2 400 = R360.\nVerkoopprys: 2 400 − 360 = R2 040. ✓' },

        // Blok 5 — Korting/opslag woordprobleme, Rand-kontekste (14-17)
        { difficulty: 'Easy-Medium', question: 'ʼn Paar hardloopskoene kos R899 by ʼn sportwinkel. Tydens ʼn uitverkoping trek die winkel 20% af. Bereken die kortingsbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R179,80', correctAnswers: ['R179,80', '179,80', 'R179.80', '179.80', 'R179,8', '179,8'], explanation: 'Korting = 20% van R899: 0,20 × 899 = R179,80 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R719,20', correctAnswers: ['R719,20', '719,20', 'R719.20', '719.20', 'R719,2', '719,2'], explanation: 'Verkoopprys = 899 − 179,80 = R719,20 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Skooluitstappie kos gewoonlik R560 per leerder. Weens stygende brandstofkoste verhoog die busmaatskappy sy prys met 8%. Bereken die nuwe koste per leerder.', answer: 'R604,80', checkMode: 'auto', correctAnswer: 'R604,80', correctAnswers: ['R604,80', '604,80', 'R604.80', '604.80', 'R604,8', '604,8'], explanation: 'Bereken 8% van R560: 0,08 × 560 = R44,80.\nNuwe prys: 560 + 44,80 = R604,80. ✓' },
        { difficulty: 'Medium', question: 'ʼn Spazawinkel koop ʼn kissie sap vir R120 en verhoog die prys met 40% opslag om aan kliënte te verkoop. Bereken die opslagbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Opslagbedrag', correctAnswer: 'R48', correctAnswers: ['R48', '48'], explanation: 'Opslag = 40% van R120: 0,40 × 120 = R48 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R168', correctAnswers: ['R168', '168'], explanation: 'Verkoopprys = 120 + 48 = R168 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Restaurantrekening kom tot R250 voordat ʼn diensfooi van 15% bygevoeg word. Bereken die totale bedrag wat die kliënt moet betaal, die diensfooi ingesluit.', answer: 'R287,50', checkMode: 'auto', correctAnswer: 'R287,50', correctAnswers: ['R287,50', '287,50', 'R287.50', '287.50', 'R287,5', '287,5'], explanation: 'Bereken 15% van R250: 0,15 × 250 = R37,50.\nTotaal = 250 + 37,50 = R287,50. ✓' },

        // Blok 6 — Multi-stap / foutopsporing (18-19)
        { difficulty: 'Hard', question: 'ʼn Baadjie kos R800. Die winkel verhoog eers die prys met 10%, en ʼn week later plaas hulle dit op ʼn uitverkoping teen 10% af van die nuwe prys. Bereken die finale prys, en sê of dit dieselfde is as die oorspronklike R800.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Finale prys', correctAnswer: 'R792', correctAnswers: ['R792', '792'], explanation: 'Na die 10%-toename: 800 × 1,10 = R880.\nNa die 10%-afname op die nuwe prys: 880 × 0,90 = R792. ✓' },
          { label: 'b) Is die finale prys dieselfde as die oorspronklike R800?', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'R792 is R8 minder as R800 — ʼn persentasietoename gevolg deur dieselfde persentasieafname gee nie die oorspronklike bedrag terug nie, want die tweede persentasie word op ʼn ander (groter) basis bereken. ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Luidspreker kos R400. Lerato sê: "Die winkel het dit met 20% afgeslaan na R320, en dit toe met 20% verhoog terug na R384, dus is dit R16 goedkoper as die oorspronklike prys — maar dit moet ʼn fout wees, want ʼn afname van 20% en ʼn toename van 20% behoort mekaar op te hef." Het Lerato reg dat dit ʼn fout moet wees? Verduidelik.', answer: 'Nee, Lerato is verkeerd dat dit ʼn fout is — die berekening R320 en dan R384 is korrek. ʼn Afname van 20% en ʼn toename van 20% hef nie mekaar op nie, want dit is persentasies van verskillende bedrae: die afname is 20% van R400 (R80), maar die toename is 20% van die kleiner R320 (R64), dus eindig die finale prys laer as die oorspronklike.', checkMode: 'self' },

        // Blok 7 — Wins, verlies, begrotings en rekeninge (20-23)
        { difficulty: 'Easy-Medium', question: 'ʼn Smous koop ʼn kissie tamaties vir R320 (kosprys) en verkoop dit vir R400 (verkoopprys). Bereken die wins en die persentasiewins.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wins', correctAnswer: 'R80', correctAnswers: ['R80', '80'], explanation: 'Wins = Verkoopprys − Kosprys = 400 − 320 = R80 ✓' },
          { label: 'b) Persentasiewins', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: '% wins = (Wins ÷ Kosprys) × 100 = (80 ÷ 320) × 100 = 25% ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Winkel koop ʼn waaier vir R560 (kosprys). Aan die einde van die winter word dit vir R448 (verkoopprys) verkoop. Bereken die verlies en die persentasieverlies.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Verlies', correctAnswer: 'R112', correctAnswers: ['R112', '112'], explanation: 'Verlies = Kosprys − Verkoopprys = 560 − 448 = R112 ✓' },
          { label: 'b) Persentasieverlies', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% verlies = (Verlies ÷ Kosprys) × 100 = (112 ÷ 560) × 100 = 20% ✓' },
        ] },
        { difficulty: 'Medium', question: 'Thandeka het ʼn maandelikse inkomste van R5 200. Haar begrote uitgawes is: huur R1 800, kos R900, vervoer R500 en ander koste R200. Bereken haar totale uitgawes en haar saldo.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale uitgawes', correctAnswer: 'R3 400', correctAnswers: ['R3400', '3400', 'R3 400', '3 400'], explanation: 'Totale uitgawes = 1 800 + 900 + 500 + 200 = R3 400 ✓' },
          { label: 'b) Saldo', correctAnswer: 'R1 800', correctAnswers: ['R1800', '1800', 'R1 800', '1 800'], explanation: 'Saldo = Inkomste − Uitgawes = 5 200 − 3 400 = R1 800 ✓' },
        ] },
        { difficulty: 'Hard', question: "Kagiso se selfoonrekening wys ʼn openingsaldo verskuldig van R380. Gedurende die maand voeg hy R150 ekstra data by die rekening, en maak hy ʼn betaling van R230. Bereken die sluitingsaldo verskuldig.", answer: 'R300', checkMode: 'auto', correctAnswer: 'R300', correctAnswers: ['R300', '300'], explanation: 'Sluitingsaldo = Openingsaldo + Aankope − Betaling = 380 + 150 − 230 = R300 ✓' },
      ],
      scoreMessages: [
        { minScore: 24, message: 'Uitstekend! Jy het persentasies bemeester, van omskakelings tot werklike-wêreld korting-, wins/verlies- en begrotingsprobleme.' },
        { minScore: 18, message: 'Goeie werk! Jy is seker van meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 12, message: 'Goeie poging! Gaan die studiegids se afdelings oor persentasies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (24 vrae) — dieselfde blokindeling as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Omskakeling tussen persentasies, breuke en desimale (0-2)
        { difficulty: 'Easy', question: 'Skryf 5/8 as ʼn persentasie.', answer: '62,5%', checkMode: 'auto', correctAnswer: '62,5%', correctAnswers: ['62,5%', '62,5', '62.5%', '62.5'], explanation: 'Deel die teller deur die noemer, en vermenigvuldig dan met 100.\n5 ÷ 8 = 0,625. 0,625 × 100 = 62,5%. ✓' },
        { difficulty: 'Easy', question: 'Skryf 0,28 as ʼn persentasie en as ʼn breuk in eenvoudigste vorm.', answer: '28%, 7/25', checkMode: 'auto', correctAnswer: '28%,7/25', correctAnswers: ['28%,7/25', '28,7/25', '28% en 7/25', '28, 7/25'], explanation: 'Persentasie: vermenigvuldig met 100. 0,28 × 100 = 28%.\nBreuk: 0,28 = 28/100. GGF van 28 en 100 is 4, dus 28/100 = 7/25. ✓' },
        { difficulty: 'Medium', question: 'ʼn Tenk word tot 11/20 van sy kapasiteit gevul. Skryf hierdie hoeveelheid as ʼn persentasie en as ʼn desimale breuk.', answer: '55%, 0,55', checkMode: 'auto', correctAnswer: '55%,0,55', correctAnswers: ['55%,0,55', '55,0,55', '55% en 0,55', '55%,0.55'], explanation: 'Persentasie: 11 ÷ 20 = 0,55, en dan 0,55 × 100 = 55%.\nDesimale breuk: 11 ÷ 20 = 0,55 direk. ✓' },

        // Blok 2 — Vind ʼn persentasie van ʼn bedrag (3-6)
        { difficulty: 'Easy', question: 'Bereken 45% van 520.', answer: '234', checkMode: 'auto', correctAnswer: '234', explanation: 'Skakel 45% om na ʼn desimale breuk: 45 ÷ 100 = 0,45.\nVermenigvuldig: 0,45 × 520 = 234. ✓' },
        { difficulty: 'Easy', question: 'ʼn Biblioteek het 725 boeke in sy fiksie-afdeling. 16% daarvan is tans uitgeleen. Hoeveel fiksieboeke is uitgeleen?', answer: '116', checkMode: 'auto', correctAnswer: '116', explanation: 'Bereken 16% van 725: 0,16 × 725 = 116 boeke. ✓' },
        { difficulty: 'Medium', question: 'ʼn Konsertsaal het 1 150 kaartjies beskikbaar. Vir ʼn uitverkochte show word 6% vir VIP-gaste gereserveer. Hoeveel kaartjies word vir VIP-gaste gereserveer?', answer: '69', checkMode: 'auto', correctAnswer: '69', explanation: 'Bereken 6% van 1 150: 0,06 × 1 150 = 69 kaartjies. ✓' },
        { difficulty: 'Medium', question: 'Bongani het R250 in sy beursie. Hy spandeer 72% daarvan aan ʼn sokkertrui. Hoeveel geld spandeer hy, en hoeveel het hy oor?', answer: 'Gespandeer = R180, oor = R70', checkMode: 'auto', correctAnswer: '180,70', correctAnswers: ['180,70', 'R180,R70', 'R180, R70', '180, 70'], explanation: 'Bedrag gespandeer: 72% van 250 = 0,72 × 250 = R180.\nBedrag oor: 250 − 180 = R70. ✓' },

        // Blok 3 — Een hoeveelheid as ʼn persentasie van ʼn ander (7-9)
        { difficulty: 'Easy', question: 'Skryf 36 as ʼn persentasie van 48.', answer: '75%', checkMode: 'auto', correctAnswer: '75%', correctAnswers: ['75%', '75'], explanation: 'Skryf as ʼn breuk en vermenigvuldig met 100: (36 ÷ 48) × 100 = 0,75 × 100 = 75%. ✓' },
        { difficulty: 'Medium', question: 'ʼn Fabriek vervaardig 900 items in ʼn lot, en 153 daarvan word as defek gevind. Watter persentasie van die lot is defek?', answer: '17%', checkMode: 'auto', correctAnswer: '17%', correctAnswers: ['17%', '17'], explanation: 'Persentasie defek = (153 ÷ 900) × 100 = 0,17 × 100 = 17%. ✓' },
        { difficulty: 'Medium', question: 'Naledi behaal 21 uit 28 in ʼn wetenskapkwis, en Kagiso behaal 39 uit 52 in dieselfde kwis. Wie se persentasiepunt is hoër, en met hoeveel persentasiepunte?', answer: 'Nie een nie — hulle het dieselfde persentasie behaal', checkMode: 'auto', correctAnswer: 'dieselfde', correctAnswers: ['dieselfde', 'nie een nie', 'gelyk', 'hulle is gelyk'], explanation: 'Naledi: (21 ÷ 28) × 100 = 75%.\nKagiso: (39 ÷ 52) × 100 = 75%.\nAlbei het presies 75% behaal — hulle persentasies is gelyk, al is die rou punte verskillend. ✓' },

        // Blok 4 — Persentasietoename en -afname (10-13)
        { difficulty: 'Easy', question: 'Naledi se maandelikse salaris van R18 800 styg met 6%. Bereken haar nuwe salaris.', answer: 'R19 928', checkMode: 'auto', correctAnswer: 'R19928', correctAnswers: ['R19928', '19928', 'R19 928', '19 928'], explanation: 'Bereken 6% van R18 800: 0,06 × 18 800 = R1 128.\nNuwe salaris: 18 800 + 1 128 = R19 928. ✓' },
        { difficulty: 'Medium', question: 'ʼn Selfoondatabundel kos R250 per maand. Die netwerk verhoog die prys met 4%. Bereken die nuwe maandelikse prys.', answer: 'R260', checkMode: 'auto', correctAnswer: 'R260', correctAnswers: ['R260', '260'], explanation: 'Bereken 4% van R250: 0,04 × 250 = R10.\nNuwe prys: 250 + 10 = R260. ✓' },
        { difficulty: 'Medium', question: 'ʼn Naweekmark het gewoonlik 850 besoekers. Weens slegte weer daal die opkoms met 12%. Bereken die nuwe opkoms.', answer: '748', checkMode: 'auto', correctAnswer: '748', explanation: 'Bereken 12% van 850: 0,12 × 850 = 102.\nNuwe opkoms: 850 − 102 = 748 besoekers. ✓' },
        { difficulty: 'Medium', question: 'ʼn Slimfoon wat oorspronklik R6 200 kos, word met 20% afgeslaan. Bereken die verkoopprys.', answer: 'R4 960', checkMode: 'auto', correctAnswer: 'R4960', correctAnswers: ['R4960', '4960', 'R4 960', '4 960'], explanation: 'Bereken 20% van R6 200: 0,20 × 6 200 = R1 240.\nVerkoopprys: 6 200 − 1 240 = R4 960. ✓' },

        // Blok 5 — Korting/opslag woordprobleme, Rand-kontekste (14-17)
        { difficulty: 'Easy-Medium', question: 'ʼn Paar jeans kos R650 by ʼn kledingwinkel. Tydens ʼn uitverkoping trek die winkel 30% af. Bereken die kortingsbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R195', correctAnswers: ['R195', '195'], explanation: 'Korting = 30% van R650: 0,30 × 650 = R195 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R455', correctAnswers: ['R455', '455'], explanation: 'Verkoopprys = 650 − 195 = R455 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Skryfbehoeftepak kos gewoonlik R84 aan die begin van die jaar. Weens hoër papierkoste verhoog die verskaffer die prys met 5%. Bereken die nuwe koste van die pak.', answer: 'R88,20', checkMode: 'auto', correctAnswer: 'R88,20', correctAnswers: ['R88,20', '88,20', 'R88.20', '88.20', 'R88,2', '88,2'], explanation: 'Bereken 5% van R84: 0,05 × 84 = R4,20.\nNuwe prys: 84 + 4,20 = R88,20. ✓' },
        { difficulty: 'Medium', question: 'ʼn Spazawinkel koop ʼn boks lekkers vir R80 en verhoog die prys met 60% opslag om aan kliënte te verkoop. Bereken die opslagbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Opslagbedrag', correctAnswer: 'R48', correctAnswers: ['R48', '48'], explanation: 'Opslag = 60% van R80: 0,60 × 80 = R48 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R128', correctAnswers: ['R128', '128'], explanation: 'Verkoopprys = 80 + 48 = R128 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Hardewarerekening kom tot R340 voordat ʼn afleweringsfooi van 15% bygevoeg word. Bereken die totale bedrag wat die kliënt moet betaal, die afleweringsfooi ingesluit.', answer: 'R391', checkMode: 'auto', correctAnswer: 'R391', correctAnswers: ['R391', '391'], explanation: 'Bereken 15% van R340: 0,15 × 340 = R51.\nTotaal = 340 + 51 = R391. ✓' },

        // Blok 6 — Multi-stap / foutopsporing (18-19)
        { difficulty: 'Hard', question: 'ʼn Televisie kos R1 500. Die winkel verhoog eers die prys met 20%, en ʼn maand later plaas hulle dit op ʼn uitverkoping teen 15% af van die nuwe prys. Bereken die finale prys, en sê of dit dieselfde is as die oorspronklike R1 500.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Finale prys', correctAnswer: 'R1 530', correctAnswers: ['R1 530', 'R1530', '1530', '1 530'], explanation: 'Na die 20%-toename: 1 500 × 1,20 = R1 800.\nNa die 15%-afname op die nuwe prys: 1 800 × 0,85 = R1 530. ✓' },
          { label: 'b) Is die finale prys dieselfde as die oorspronklike R1 500?', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'R1 530 is R30 meer as R1 500 — die twee persentasies is op verskillende basisbedrae toegepas, dus hef hulle nie mekaar op nie. ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Ketellapper kos R600. Thabo sê: "Die winkel het dit met 25% afgeslaan na R450, en dit toe met 25% verhoog terug na R562,50, dus is dit R37,50 meer as die oorspronklike prys — maar dit moet ʼn fout wees, want ʼn afname van 25% en ʼn toename van 25% behoort mekaar op te hef." Het Thabo reg dat dit ʼn fout moet wees? Verduidelik.', answer: 'Nee, Thabo is verkeerd dat dit ʼn fout is — die berekening R450 en dan R562,50 is korrek. ʼn Afname van 25% en ʼn toename van 25% hef nie mekaar op nie, want dit is persentasies van verskillende bedrae: die afname is 25% van R600 (R150), maar die toename is 25% van die kleiner R450 (R112,50), dus is die finale prys steeds laer as wat ʼn mens sou verwag, al is dit hoër as die afgeslane prys.', checkMode: 'self' },

        // Blok 7 — Wins, verlies, begrotings en rekeninge (20-23)
        { difficulty: 'Easy-Medium', question: 'ʼn Smous koop ʼn kis piesangs vir R240 (kosprys) en verkoop dit vir R300 (verkoopprys). Bereken die wins en die persentasiewins.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wins', correctAnswer: 'R60', correctAnswers: ['R60', '60'], explanation: 'Wins = Verkoopprys − Kosprys = 300 − 240 = R60 ✓' },
          { label: 'b) Persentasiewins', correctAnswer: '25%', correctAnswers: ['25%', '25'], explanation: '% wins = (Wins ÷ Kosprys) × 100 = (60 ÷ 240) × 100 = 25% ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Winkel koop ʼn stel tuinstoele vir R720 (kosprys). Omdat die bokse beskadig is, word dit vir R612 (verkoopprys) verkoop. Bereken die verlies en die persentasieverlies.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Verlies', correctAnswer: 'R108', correctAnswers: ['R108', '108'], explanation: 'Verlies = Kosprys − Verkoopprys = 720 − 612 = R108 ✓' },
          { label: 'b) Persentasieverlies', correctAnswer: '15%', correctAnswers: ['15%', '15'], explanation: '% verlies = (Verlies ÷ Kosprys) × 100 = (108 ÷ 720) × 100 = 15% ✓' },
        ] },
        { difficulty: 'Medium', question: 'Naledi het ʼn maandelikse inkomste van R4 800. Haar begrote uitgawes is: huur R1 600, kos R750, vervoer R450 en ander koste R100. Bereken haar totale uitgawes en haar saldo.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale uitgawes', correctAnswer: 'R2 900', correctAnswers: ['R2900', '2900', 'R2 900', '2 900'], explanation: 'Totale uitgawes = 1 600 + 750 + 450 + 100 = R2 900 ✓' },
          { label: 'b) Saldo', correctAnswer: 'R1 900', correctAnswers: ['R1900', '1900', 'R1 900', '1 900'], explanation: 'Saldo = Inkomste − Uitgawes = 4 800 − 2 900 = R1 900 ✓' },
        ] },
        { difficulty: 'Hard', question: "Amahle se meubelrekening wys ʼn openingsaldo verskuldig van R500. Gedurende die maand koop sy R180 ekstra items op rekening, en maak sy ʼn betaling van R280. Bereken die sluitingsaldo verskuldig.", answer: 'R400', checkMode: 'auto', correctAnswer: 'R400', correctAnswers: ['R400', '400'], explanation: 'Sluitingsaldo = Openingsaldo + Aankope − Betaling = 500 + 180 − 280 = R400 ✓' },
      ],
      scoreMessages: [
        { minScore: 24, message: 'Uitstekend! Jy het persentasies bemeester, van omskakelings tot werklike-wêreld korting-, wins/verlies- en begrotingsprobleme.' },
        { minScore: 18, message: 'Goeie werk! Jy is seker van meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 12, message: 'Goeie poging! Gaan die studiegids se afdelings oor persentasies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (24 vrae) — dieselfde blokindeling as Stel 1 en Stel 2, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Omskakeling tussen persentasies, breuke en desimale (0-2)
        { difficulty: 'Easy', question: 'Skryf 9/16 as ʼn persentasie.', answer: '56,25%', checkMode: 'auto', correctAnswer: '56,25%', correctAnswers: ['56,25%', '56,25', '56.25%', '56.25'], explanation: 'Deel die teller deur die noemer, en vermenigvuldig dan met 100.\n9 ÷ 16 = 0,5625. 0,5625 × 100 = 56,25%. ✓' },
        { difficulty: 'Easy', question: 'Skryf 0,62 as ʼn persentasie en as ʼn breuk in eenvoudigste vorm.', answer: '62%, 31/50', checkMode: 'auto', correctAnswer: '62%,31/50', correctAnswers: ['62%,31/50', '62,31/50', '62% en 31/50', '62, 31/50'], explanation: 'Persentasie: vermenigvuldig met 100. 0,62 × 100 = 62%.\nBreuk: 0,62 = 62/100. GGF van 62 en 100 is 2, dus 62/100 = 31/50. ✓' },
        { difficulty: 'Medium', question: 'ʼn Waterbottel word tot 7/20 van sy kapasiteit gevul. Skryf hierdie hoeveelheid as ʼn persentasie en as ʼn desimale breuk.', answer: '35%, 0,35', checkMode: 'auto', correctAnswer: '35%,0,35', correctAnswers: ['35%,0,35', '35,0,35', '35% en 0,35', '35%,0.35'], explanation: 'Persentasie: 7 ÷ 20 = 0,35, en dan 0,35 × 100 = 35%.\nDesimale breuk: 7 ÷ 20 = 0,35 direk. ✓' },

        // Blok 2 — Vind ʼn persentasie van ʼn bedrag (3-6)
        { difficulty: 'Easy', question: 'Bereken 28% van 650.', answer: '182', checkMode: 'auto', correctAnswer: '182', explanation: 'Skakel 28% om na ʼn desimale breuk: 28 ÷ 100 = 0,28.\nVermenigvuldig: 0,28 × 650 = 182. ✓' },
        { difficulty: 'Easy', question: 'ʼn Skool het 850 leerders in totaal. 18% van hulle fiets skool toe. Hoeveel leerders fiets skool toe?', answer: '153', checkMode: 'auto', correctAnswer: '153', explanation: 'Bereken 18% van 850: 0,18 × 850 = 153 leerders. ✓' },
        { difficulty: 'Medium', question: 'ʼn Pakhuis stoor 1 300 bokse. Vir ʼn voorraadopname word 9% van die bokse oopgemaak en geïnspekteer. Hoeveel bokse word geïnspekteer?', answer: '117', checkMode: 'auto', correctAnswer: '117', explanation: 'Bereken 9% van 1 300: 0,09 × 1 300 = 117 bokse. ✓' },
        { difficulty: 'Medium', question: 'Kagiso het R375 gespaar. Hy spandeer 64% daarvan aan ʼn paar oorfone. Hoeveel geld spandeer hy, en hoeveel het hy oor?', answer: 'Gespandeer = R240, oor = R135', checkMode: 'auto', correctAnswer: '240,135', correctAnswers: ['240,135', 'R240,R135', 'R240, R135', '240, 135'], explanation: 'Bedrag gespandeer: 64% van 375 = 0,64 × 375 = R240.\nBedrag oor: 375 − 240 = R135. ✓' },

        // Blok 3 — Een hoeveelheid as ʼn persentasie van ʼn ander (7-9)
        { difficulty: 'Easy', question: 'Skryf 56 as ʼn persentasie van 80.', answer: '70%', checkMode: 'auto', correctAnswer: '70%', correctAnswers: ['70%', '70'], explanation: 'Skryf as ʼn breuk en vermenigvuldig met 100: (56 ÷ 80) × 100 = 0,70 × 100 = 70%. ✓' },
        { difficulty: 'Medium', question: 'ʼn Afleweringsmaatskappy hanteer 275 pakkies op ʼn dag, en 88 daarvan word voor middagete afgelewer. Watter persentasie van pakkies word voor middagete afgelewer?', answer: '32%', checkMode: 'auto', correctAnswer: '32%', correctAnswers: ['32%', '32'], explanation: 'Persentasie voor middagete = (88 ÷ 275) × 100 = 0,32 × 100 = 32%. ✓' },
        { difficulty: 'Medium', question: 'Amahle behaal 39 uit 52 in ʼn geografietoets, en Sipho behaal 34 uit 40 in dieselfde toets. Wie se persentasiepunt is hoër, en met hoeveel persentasiepunte?', answer: 'Sipho s\'n is hoër, met 10 persentasiepunte', checkMode: 'auto', correctAnswer: 'Sipho,10', correctAnswers: ['Sipho,10', 'sipho,10', 'Sipho met 10', 'Sipho, 10'], explanation: 'Amahle: (39 ÷ 52) × 100 = 75%.\nSipho: (34 ÷ 40) × 100 = 85%.\nSipho se punt is hoër: 85% − 75% = 10 persentasiepunte. ✓' },

        // Blok 4 — Persentasietoename en -afname (10-13)
        { difficulty: 'Easy', question: 'Kagiso se maandelikse salaris van R21 000 styg met 5,5%. Bereken sy nuwe salaris.', answer: 'R22 155', checkMode: 'auto', correctAnswer: 'R22155', correctAnswers: ['R22155', '22155', 'R22 155', '22 155'], explanation: 'Bereken 5,5% van R21 000: 0,055 × 21 000 = R1 155.\nNuwe salaris: 21 000 + 1 155 = R22 155. ✓' },
        { difficulty: 'Medium', question: 'ʼn Huishouding se elektrisiteitsrekening is gewoonlik R980 per maand. Na ʼn tarieftoename styg die rekening met 9%. Bereken die nuwe maandelikse rekening.', answer: 'R1 068,20', checkMode: 'auto', correctAnswer: 'R1068,20', correctAnswers: ['R1068,20', '1068,20', 'R1 068,20', '1 068,20', 'R1068.20', 'R1 068.20'], explanation: 'Bereken 9% van R980: 0,09 × 980 = R88,20.\nNuwe rekening: 980 + 88,20 = R1 068,20. ✓' },
        { difficulty: 'Medium', question: 'ʼn Gimnasium het 650 lede. Oor die winter maande daal die ledetal met 8%. Bereken die nuwe ledetal.', answer: '598', checkMode: 'auto', correctAnswer: '598', explanation: 'Bereken 8% van 650: 0,08 × 650 = 52.\nNuwe ledetal: 650 − 52 = 598 lede. ✓' },
        { difficulty: 'Medium', question: 'ʼn Tablet wat oorspronklik R4 800 kos, word met 35% afgeslaan. Bereken die verkoopprys.', answer: 'R3 120', checkMode: 'auto', correctAnswer: 'R3120', correctAnswers: ['R3120', '3120', 'R3 120', '3 120'], explanation: 'Bereken 35% van R4 800: 0,35 × 4 800 = R1 680.\nVerkoopprys: 4 800 − 1 680 = R3 120. ✓' },

        // Blok 5 — Korting/opslag woordprobleme, Rand-kontekste (14-17)
        { difficulty: 'Easy-Medium', question: 'ʼn Winterbaadjie kos R1 200 by ʼn kledingwinkel. Tydens ʼn uitverkoping trek die winkel 25% af. Bereken die kortingsbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R300', correctAnswers: ['R300', '300'], explanation: 'Korting = 25% van R1 200: 0,25 × 1 200 = R300 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R900', correctAnswers: ['R900', '900'], explanation: 'Verkoopprys = 1 200 − 300 = R900 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Taxirit van die huis na die skool kos gewoonlik R45. Weens stygende petrolpryse verhoog die rit met 10%. Bereken die nuwe rit.', answer: 'R49,50', checkMode: 'auto', correctAnswer: 'R49,50', correctAnswers: ['R49,50', '49,50', 'R49.50', '49.50', 'R49,5', '49,5'], explanation: 'Bereken 10% van R45: 0,10 × 45 = R4,50.\nNuwe rit: 45 + 4,50 = R49,50. ✓' },
        { difficulty: 'Medium', question: 'ʼn Spazawinkel koop ʼn kissie blikkieskos vir R150 en verhoog die prys met 50% opslag om aan kliënte te verkoop. Bereken die opslagbedrag en die verkoopprys.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Opslagbedrag', correctAnswer: 'R75', correctAnswers: ['R75', '75'], explanation: 'Opslag = 50% van R150: 0,50 × 150 = R75 ✓' },
          { label: 'b) Verkoopprys', correctAnswer: 'R225', correctAnswers: ['R225', '225'], explanation: 'Verkoopprys = 150 + 75 = R225 ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Spysenieringsrekening kom tot R560 voordat ʼn diensfooi van 15% bygevoeg word. Bereken die totale bedrag wat die kliënt moet betaal, die diensfooi ingesluit.', answer: 'R644', checkMode: 'auto', correctAnswer: 'R644', correctAnswers: ['R644', '644'], explanation: 'Bereken 15% van R560: 0,15 × 560 = R84.\nTotaal = 560 + 84 = R644. ✓' },

        // Blok 6 — Multi-stap / foutopsporing (18-19)
        { difficulty: 'Hard', question: 'ʼn Mikrogolfoond kos R2 000. Die winkel verlaag eers die prys met 10% vir ʼn uitverkoping, en ʼn maand later verhoog hulle die uitverkoopprys met 10%. Bereken die finale prys, en sê of dit dieselfde is as die oorspronklike R2 000.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Finale prys', correctAnswer: 'R1 980', correctAnswers: ['R1 980', 'R1980', '1980', '1 980'], explanation: 'Na die 10%-afname: 2 000 × 0,90 = R1 800.\nNa die 10%-toename op die uitverkoopprys: 1 800 × 1,10 = R1 980. ✓' },
          { label: 'b) Is die finale prys dieselfde as die oorspronklike R2 000?', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'R1 980 is R20 minder as R2 000 — die twee persentasies is op verskillende basisbedrae toegepas, dus hef hulle nie mekaar op nie. ✓' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Paar sonbrille kos R350. Naledi sê: "Die winkel het die prys met 40% verhoog na R490, en dit toe met 40% verlaag terug na R294, dus is dit R56 goedkoper as die oorspronklike prys — maar dit moet ʼn fout wees, want ʼn toename van 40% en ʼn afname van 40% behoort mekaar op te hef." Het Naledi reg dat dit ʼn fout moet wees? Verduidelik.', answer: 'Nee, Naledi is verkeerd dat dit ʼn fout is — die berekening R490 en dan R294 is korrek. ʼn Toename van 40% en ʼn afname van 40% hef nie mekaar op nie, want dit is persentasies van verskillende bedrae: die toename is 40% van R350 (R140), maar die afname is 40% van die groter R490 (R196), dus eindig die finale prys laer as die oorspronklike R350.', checkMode: 'self' },

        // Blok 7 — Wins, verlies, begrotings en rekeninge (20-23)
        { difficulty: 'Easy-Medium', question: 'ʼn Smous koop ʼn lading skoolsakke vir R410 (kosprys) en verkoop dit vir R492 (verkoopprys). Bereken die wins en die persentasiewins.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Wins', correctAnswer: 'R82', correctAnswers: ['R82', '82'], explanation: 'Wins = Verkoopprys − Kosprys = 492 − 410 = R82 ✓' },
          { label: 'b) Persentasiewins', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% wins = (Wins ÷ Kosprys) × 100 = (82 ÷ 410) × 100 = 20% ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Winkel koop ʼn stel patio-sambrele vir R850 (kosprys). Omdat die seisoen verby is, word dit vir R680 (verkoopprys) verkoop. Bereken die verlies en die persentasieverlies.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Verlies', correctAnswer: 'R170', correctAnswers: ['R170', '170'], explanation: 'Verlies = Kosprys − Verkoopprys = 850 − 680 = R170 ✓' },
          { label: 'b) Persentasieverlies', correctAnswer: '20%', correctAnswers: ['20%', '20'], explanation: '% verlies = (Verlies ÷ Kosprys) × 100 = (170 ÷ 850) × 100 = 20% ✓' },
        ] },
        { difficulty: 'Medium', question: 'Kagiso het ʼn maandelikse inkomste van R7 500. Sy begrote uitgawes is: huur R3 000, kos R1 400, vervoer R700 en ander koste R400. Bereken sy totale uitgawes en sy saldo.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Totale uitgawes', correctAnswer: 'R5 500', correctAnswers: ['R5500', '5500', 'R5 500', '5 500'], explanation: 'Totale uitgawes = 3 000 + 1 400 + 700 + 400 = R5 500 ✓' },
          { label: 'b) Saldo', correctAnswer: 'R2 000', correctAnswers: ['R2000', '2000', 'R2 000', '2 000'], explanation: 'Saldo = Inkomste − Uitgawes = 7 500 − 5 500 = R2 000 ✓' },
        ] },
        { difficulty: 'Hard', question: "Sipho se hardewarerekening wys ʼn openingsaldo verskuldig van R600. Gedurende die maand koop hy R250 ekstra gereedskap op rekening, en maak hy ʼn betaling van R350. Bereken die sluitingsaldo verskuldig.", answer: 'R500', checkMode: 'auto', correctAnswer: 'R500', correctAnswers: ['R500', '500'], explanation: 'Sluitingsaldo = Openingsaldo + Aankope − Betaling = 600 + 250 − 350 = R500 ✓' },
      ],
      scoreMessages: [
        { minScore: 24, message: 'Uitstekend! Jy het persentasies bemeester, van omskakelings tot werklike-wêreld korting-, wins/verlies- en begrotingsprobleme.' },
        { minScore: 18, message: 'Goeie werk! Jy is seker van meeste hiervan — gaan gemiste vrae weer deur.' },
        { minScore: 12, message: 'Goeie poging! Gaan die studiegids se afdelings oor persentasies weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
