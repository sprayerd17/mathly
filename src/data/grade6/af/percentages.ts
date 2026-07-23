import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (percentage roles) ───────────────────────────────────────
// percentage symbol → orange  (#ea580c)
// fraction          → blue    (#2563eb)
// decimal           → green   (#16a34a)
// conversion steps  → red     (#dc2626)
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Persentasies',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ʼN PERSENTASIE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-percentage',
      title: 'Wat is ʼn Persentasie?',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Persentasie</strong> is ʼn manier om ʼn getal as ʼn ${bl('breuk')} van 100 uit te druk. Die woord <em>persent</em> beteken <strong>uit 100</strong>. Die simbool vir persent is ${or('%')}. So beteken ${or('45%')} 45 uit 100, of ${bl('45/100')}. Persentasies word oral in die alledaagse lewe gebruik — eksamenpunte, winkelkortings, bankrente en statistiek. ʼn Persentasie kan altyd geskryf word as ʼn ${bl('breuk')} met noemer 100, of as ʼn ${gr('desimale breuk')} deur deur 100 te deel.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie %')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('breuk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('desimale breuk')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('omskakelingstappe')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Persentasie (${or('%')})</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Getal uitgedruk as ʼn deel van 100. Die simbool ${or('%')} beteken "uit 100".</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Persentasie kan altyd geskryf word as ʼn ${bl('breuk')} met noemer 100, bv. ${or('35%')} = ${bl('35/100')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Desimale breuk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Deel ʼn persentasie deur 100 om die ${gr('desimale vorm')} te kry, bv. ${or('35%')} ÷ 100 = ${gr('0,35')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Converting between forms ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Omskakeling tussen vorme</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${or('% → breuk:')} Skryf die persentasie oor 100, en vereenvoudig dan. &nbsp;${or('45%')} = ${bl('45/100')} = ${bl('9/20')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${re('% → desimale breuk:')} ${re('Deel deur 100')} (skuif die desimale komma 2 plekke links). &nbsp;${or('35%')} ${re('÷ 100')} = ${gr('0,35')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('desimale breuk → %:')} ${re('Vermenigvuldig met 100')} (skuif die desimale komma 2 plekke regs). &nbsp;${gr('0,6')} ${re('× 100')} = ${or('60%')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${re('breuk → %:')} ${re('Vermenigvuldig met 100')} of skakel om na ʼn ${bl('breuk')} met noemer 100. &nbsp;${bl('3/4')} ${re('× 100')} = ${or('75%')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die vinnige reël</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om <strong>na</strong> ʼn persentasie te verander: ${re('× 100')}. Om <strong>van</strong> ʼn persentasie te verander: ${re('÷ 100')}. Die ${or('%')}-teken beteken altyd "uit 100", dus is 100 die brug tussen al drie vorme.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 1: 35% as ʼn breuk en desimale breuk ─────────────────────
        {
          question: 'Skryf 35% as ʼn breuk en as ʼn desimale breuk.',
          answer: `${or('35%')} = ${bl('7/20')} = ${gr('0,35')}`,
          steps: [
            `<strong>As ʼn ${bl('breuk')}:</strong> Skryf die persentasie oor 100. ${or('35%')} = ${bl('35/100')}.`,
            `${re('Vereenvoudig')} deur teller en noemer deur die GGF van 5 te deel: ${bl('35/100')} = ${bl('7/20')}.`,
            `<strong>As ʼn ${gr('desimale breuk')}:</strong> ${re('Deel deur 100')} — skuif die desimale komma 2 plekke links. 35 ${re('÷ 100')} = ${gr('0,35')}.`,
            `<strong>Antwoord:</strong> ${or('35%')} = ${bl('7/20')} = ${gr('0,35')} ✓`,
          ],
        },

        // ── Voorbeeld 2: 0,6 as ʼn persentasie ───────────────────────────────────
        {
          question: 'Skryf 0,6 as ʼn persentasie.',
          answer: `${gr('0,6')} = ${or('60%')}`,
          steps: [
            `Om ʼn ${re('desimale breuk na ʼn persentasie om te skakel')}, ${re('vermenigvuldig met 100')}.`,
            `${gr('0,6')} ${re('× 100')} = ${or('60')}.`,
            `<strong>Antwoord:</strong> ${gr('0,6')} = ${or('60%')} ✓`,
          ],
        },

        // ── Voorbeeld 3: 3/4 as ʼn persentasie ───────────────────────────────────
        {
          question: 'Skryf 3/4 as ʼn persentasie.',
          answer: `${bl('3/4')} = ${or('75%')}`,
          steps: [
            `<strong>Metode 1 — ${re('skakel om na noemer 100')}:</strong> Vind die ekwivalente breuk met noemer 100. 100 ÷ 4 = 25, dus vermenigvuldig teller en noemer met 25: ${bl('3/4')} = ${bl('75/100')} = ${or('75%')}.`,
            `<strong>Metode 2 — ${re('vermenigvuldig met 100')}:</strong> 3 ÷ 4 ${re('× 100')} = ${gr('0,75')} × 100 = ${or('75%')}.`,
            `<strong>Antwoord:</strong> ${bl('3/4')} = ${or('75%')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat verduidelik wat ʼn persentasie is en hoe om tussen persentasies breuke en desimale breuke om te skakel',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OMSKAKELING TUSSEN BREUKE, DESIMALE BREUKE EN PERSENTASIES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'converting-fractions-decimals-percentages',
      title: 'Omskakeling Tussen Breuke, Desimale Breuke en Persentasies',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Breuke, desimale breuke en persentasies is drie maniere om dieselfde waarde uit te druk. Om vinnig tussen al drie vorme te kan beweeg, is ʼn belangrike vaardigheid in Graad 6. Om ʼn ${bl('breuk')} na ʼn ${or('persentasie')} om te skakel: ${re('deel die teller deur die noemer en vermenigvuldig met 100')}. Om ʼn ${or('persentasie')} na ʼn ${bl('breuk')} om te skakel: skryf dit oor 100 en vereenvoudig. Om ʼn ${gr('desimale breuk')} na ʼn ${or('persentasie')} om te skakel: ${re('vermenigvuldig met 100')}. Om ʼn ${or('persentasie')} na ʼn ${gr('desimale breuk')} om te skakel: ${re('deel deur 100')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('breuk')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('desimale breuk')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie %')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('omskakelingsbewerking')}</span>` +
        `</div>` +

        // ── Four conversion rules ────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vier omskakelingsreëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Breuk')} → ${or('%')}: ${re('Deel die teller deur die noemer, en vermenigvuldig dan met 100.')} &nbsp;${bl('3/8')} → 3 ÷ 8 ${re('× 100')} = ${or('37,5%')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('%')} → ${bl('Breuk')}: ${re('Skryf die persentasie oor 100 en vereenvoudig.')} &nbsp;${or('64%')} = ${bl('64/100')} = ${bl('16/25')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Desimale breuk')} → ${or('%')}: ${re('Vermenigvuldig met 100')} (skuif die desimale komma 2 plekke regs). &nbsp;${gr('0,045')} ${re('× 100')} = ${or('4,5%')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">${or('%')} → ${gr('Desimale breuk')}: ${re('Deel deur 100')} (skuif die desimale komma 2 plekke links). &nbsp;${or('37,5%')} ${re('÷ 100')} = ${gr('0,375')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Vereenvoudiging van breuke — die GGF-metode</p>` +
        `<p style="margin:0;color:#1e3a8a;">Wanneer ʼn ${or('persentasie')} na ʼn ${bl('breuk')} omgeskakel word, vereenvoudig altyd deur teller en noemer deur hulle <strong>Grootste Gemene Faktor (GGF)</strong> te deel. Vir ${or('64%')}: GGF van 64 en 100 is 4, dus ${bl('64/100')} ÷ 4 = ${bl('16/25')}. ʼn Breuk is in <strong>eenvoudigste vorm</strong> wanneer die enigste gemene faktor van teller en noemer 1 is.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 4: 3/8 na ʼn persentasie ──────────────────────────────
        {
          question: 'Skakel 3/8 om na ʼn persentasie.',
          answer: `${bl('3/8')} = ${or('37,5%')}`,
          steps: [
            `${re('Stap 1 — Deel die teller deur die noemer:')} 3 ÷ 8 = ${gr('0,375')}.`,
            `${re('Stap 2 — Vermenigvuldig met 100:')} ${gr('0,375')} ${re('× 100')} = ${or('37,5')}.`,
            `<strong>Antwoord:</strong> ${bl('3/8')} = ${or('37,5%')} ✓`,
          ],
        },

        // ── Voorbeeld 5: 64% na ʼn breuk in eenvoudigste vorm ───────────────────
        {
          question: 'Skakel 64% om na ʼn breuk in eenvoudigste vorm.',
          answer: `${or('64%')} = ${bl('16/25')}`,
          steps: [
            `${re('Stap 1 — Skryf as ʼn breuk:')} ${or('64%')} = ${bl('64/100')}.`,
            `${re('Stap 2 — Vind die GGF van 64 en 100:')} GGF = 4.`,
            `${re('Stap 3 — Deel albei deur 4:')} ${bl('64/100')} = ${bl('16/25')}.`,
            `<strong>Antwoord:</strong> ${or('64%')} = ${bl('16/25')} ✓`,
          ],
        },

        // ── Voorbeeld 6: 0,045 na ʼn persentasie ────────────────────────────────
        {
          question: 'Skakel 0,045 om na ʼn persentasie.',
          answer: `${gr('0,045')} = ${or('4,5%')}`,
          steps: [
            `${re('Vermenigvuldig met 100:')} ${gr('0,045')} ${re('× 100')} = ${or('4,5')}.`,
            `<strong>Antwoord:</strong> ${gr('0,045')} = ${or('4,5%')} ✓`,
          ],
        },

        // ── Voorbeeld 7: Sipho se toetspunt as ʼn persentasie ────────────────
        {
          question: "Sipho behaal 18 uit 24 in ʼn toets. Skryf sy punt as ʼn persentasie.",
          answer: `${bl('18/24')} = ${or('75%')}`,
          steps: [
            `${re('Stap 1 — Skryf as ʼn breuk:')} ${bl('18/24')}.`,
            `${re('Stap 2 — Deel:')} 18 ÷ 24 = ${gr('0,75')}.`,
            `${re('Stap 3 — Vermenigvuldig met 100:')} ${gr('0,75')} ${re('× 100')} = ${or('75')}.`,
            `<strong>Antwoord:</strong> ${bl('18/24')} = ${or('75%')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── V1 Maklik ───────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Skakel elk van die volgende om.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skakel 0,8 om na ʼn persentasie.',
              correctAnswer: '80%',
              correctAnswers: ['80%', '80'],
              explanation: 'Vermenigvuldig met 100: 0,8 × 100 = 80. Antwoord: 80% ✓',
            },
            {
              label: 'b) Skakel 50% om na ʼn desimale breuk.',
              correctAnswer: '0,5',
              correctAnswers: ['0.5', '0.50', '0,5', '0,50'],
              explanation: 'Deel deur 100: 50 ÷ 100 = 0,5. Antwoord: 0,5 ✓',
            },
            {
              label: 'c) Skakel 1/4 om na ʼn persentasie.',
              correctAnswer: '25%',
              correctAnswers: ['25%', '25'],
              explanation: '1 ÷ 4 = 0,25. 0,25 × 100 = 25. Antwoord: 25% ✓',
            },
          ],
        },

        // ── V2 Medium ─────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Skakel elk van die volgende om.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Skakel 3/5 om na ʼn persentasie.',
              correctAnswer: '60%',
              correctAnswers: ['60%', '60'],
              explanation: '3 ÷ 5 = 0,6. 0,6 × 100 = 60. Antwoord: 60% ✓',
            },
            {
              label: 'b) Skakel 85% om na ʼn breuk in eenvoudigste vorm.',
              correctAnswer: '17/20',
              explanation: '85% = 85/100. GGF van 85 en 100 is 5. 85 ÷ 5 = 17, 100 ÷ 5 = 20. Antwoord: 17/20 ✓',
            },
            {
              label: 'c) Skakel 0,125 om na ʼn persentasie.',
              correctAnswer: '12,5%',
              correctAnswers: ['12.5%', '12.5', '12,5%', '12,5'],
              explanation: '0,125 × 100 = 12,5. Antwoord: 12,5% ✓',
            },
          ],
        },

        // ── V3 Moeilik ───────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato behaal 42 uit 56 in ʼn wiskundetoets, en Thabo behaal 35 uit 45 in ʼn natuurwetenskaptoets.\n\na) Skryf Lerato se punt as ʼn persentasie.\nb) Skryf Thabo se punt as ʼn persentasie (rond af tot een desimale plek).\nc) Wie het beter gevaar? Verduidelik jou antwoord.",
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: "a) Lerato se punt as ʼn persentasie",
              correctAnswer: '75%',
              correctAnswers: ['75%', '75'],
              explanation: 'Skryf as breuk: 42/56. Deel: 42 ÷ 56 = 0,75. Vermenigvuldig met 100: 0,75 × 100 = 75. Antwoord: 75% ✓',
            },
            {
              label: "b) Thabo se punt as ʼn persentasie",
              correctAnswer: '77,8%',
              correctAnswers: ['77.8%', '77.8', '77,8%', '77,8'],
              explanation: 'Skryf as breuk: 35/45. Deel: 35 ÷ 45 = 0,7777... ≈ 0,778. Vermenigvuldig met 100: 77,8. Antwoord: 77,8% ✓',
            },
            {
              label: 'c) Wie het beter gevaar?',
              correctAnswer: 'Thabo',
              checkMode: 'self',
              answer: "Thabo het beter gevaar. Sy punt van 77,8% is hoër as Lerato se 75%. Deur na persentasies om te skakel, kan ons punte regverdig vergelyk selfs wanneer die toetse verskillende totale gehad het.",
            },
          ],
        },
      ],

      videoPlaceholder:
        'Kort video wat wys hoe om tussen breuke desimale breuke en persentasies om te skakel deur die vermenigvuldig met 100 en deel deur 100 reëls te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VIND ʼN PERSENTASIE VAN ʼN BEDRAG
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'finding-percentage-of-amount',
      title: 'Vind ʼn Persentasie van ʼn Bedrag',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">Om ʼn persentasie van ʼn bedrag te vind, ${or('skakel ons die persentasie om na ʼn desimale breuk of breuk')} en ${bl('vermenigvuldig dan met die bedrag')}. Die woord <em>van</em> in wiskunde beteken <strong>vermenigvuldig</strong>. Byvoorbeeld, om ${or('20%')} van 350 te vind, bereken ons ${bl('0,20 × 350')} of ${or('20/100')} ${bl('× 350')}. ʼn Nuttige hoofrekenmetode is om eers ${or('10%')} te vind deur deur 10 te deel, en dit dan te gebruik om ander persentasies te vind.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie omgeskakel')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vermenigvuldiging')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('korting')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('finale antwoord')}</span>` +
        `</div>` +

        // ── Two methods ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee metodes om ʼn persentasie van ʼn bedrag te vind</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Desimale metode:</strong> ${or('Skakel die persentasie om na ʼn desimale breuk')} deur deur 100 te deel, en ${bl('vermenigvuldig dan met die bedrag')}. &nbsp;${or('25%')} = ${or('0,25')} → ${bl('0,25 × 360')} = ${gr('90')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Hoofrekenmetode:</strong> Vind ${or('10%')} deur die bedrag deur 10 te deel, en ${bl('bou dan op')} tot die verlangde persentasie deur veelvoude van 10% en 5% (die helfte van 10%) te kombineer.</p>` +
        `</div>` +

        `</div>` +

        // ── "of" means multiply tip ──────────────────────────────────────────
        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">"van" beteken vermenigvuldig</p>` +
        `<p style="margin:0;color:#14532d;">Wanneer jy die woord <strong>van</strong> in ʼn wiskundevraagstuk sien, vervang dit met ${bl('×')}. So word "${or('20%')} van 350" ${or('0,20')} ${bl('× 350')} = ${gr('70')}.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoofrekenkortpad — bou op vanaf 10%</p>` +
        `<p style="margin:0;color:#1e3a8a;">${or('10%')} = bedrag ÷ 10. &nbsp;${or('5%')} = helfte van 10%. &nbsp;${or('20%')} = dubbel 10%. &nbsp;${or('15%')} = 10% + 5%. &nbsp;${or('30%')} = 3 × 10%. Hierdie kortpad laat jou toe om algemene persentasies vinnig te bereken sonder ʼn sakrekenaar.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 8: 25% van 360 ────────────────────────────────────────────
        {
          question: 'Vind 25% van 360.',
          answer: `${or('25%')} van 360 = ${gr('90')}`,
          steps: [
            `${or('Skakel 25% om na ʼn desimale breuk:')} 25 ÷ 100 = ${or('0,25')}.`,
            `${bl('Vermenigvuldig:')} ${or('0,25')} ${bl('× 360')} = ${gr('90')}.`,
            `<strong>Antwoord:</strong> ${gr('90')} ✓`,
          ],
        },

        // ── Voorbeeld 9: 15% van 240 (hoofrekenmetode) ───────────────────────────
        {
          question: 'Vind 15% van 240.',
          answer: `${or('15%')} van 240 = ${gr('36')}`,
          steps: [
            `Vind eers ${or('10%')}: 240 ÷ 10 = ${or('24')}.`,
            `Vind ${or('5%')}: helfte van 10% = ${or('24')} ÷ 2 = ${or('12')}.`,
            `${bl('Tel by:')} 10% + 5% = ${or('24')} ${bl('+')} ${or('12')} = ${gr('36')}.`,
            `<strong>Antwoord:</strong> ${gr('36')} ✓`,
          ],
        },

        // ── Voorbeeld 10: 30% korting op R450 baadjie ──────────────────────────
        {
          question: 'ʼn Winkel bied ʼn 30% korting op ʼn baadjie wat R450 kos. Wat is die kortingsbedrag en wat is die verkoopprys?',
          answer: `${re('Korting')} = ${gr('R135')} &nbsp;|&nbsp; Verkoopprys = ${gr('R315')}`,
          steps: [
            `Vind ${or('30%')} van R450: ${or('0,30')} ${bl('× 450')} = ${re('R135')}.`,
            `${re('Korting')} = ${re('R135')}.`,
            `Verkoopprys = R450 − ${re('R135')} = ${gr('R315')}.`,
          ],
        },

        // ── Voorbeeld 11: Lerato se toetspunte ──────────────────────────────────
        {
          question: "Lerato behaal 68% in ʼn toets uit 75 punte. Hoeveel punte het sy behaal?",
          answer: `Lerato het ${gr('51')} punte behaal`,
          steps: [
            `Vind ${or('68%')} van 75: ${or('0,68')} ${bl('× 75')} = ${gr('51')}.`,
            `<strong>Antwoord:</strong> Lerato het ${gr('51')} punte behaal ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder: 'Persentasiestaaf verdeel in tien gelyke 10%-strokies, met 15% opgebou deur een volle strokie plus die helfte van die volgende strokie te skakeer',
      diagramSvg: '<svg viewBox="0 0 220 110" xmlns="http://www.w3.org/2000/svg"><text x="105" y="16" font-weight="700" font-size="13" text-anchor="middle" fill="#0f1f3d">Bou 15% op uit 10% + 5%</text><rect x="15" y="30" width="180" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="15" y="30" width="18" height="30" fill="#2563eb"/><rect x="33" y="30" width="9" height="30" fill="#ea580c"/><line x1="33" y1="30" x2="33" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="51" y1="30" x2="51" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="69" y1="30" x2="69" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="87" y1="30" x2="87" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="105" y1="30" x2="105" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="123" y1="30" x2="123" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="141" y1="30" x2="141" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="159" y1="30" x2="159" y2="60" stroke="#0f1f3d" stroke-width="1"/><line x1="177" y1="30" x2="177" y2="60" stroke="#0f1f3d" stroke-width="1"/><text x="24" y="78" font-weight="700" font-size="11" text-anchor="middle" fill="#2563eb">10%</text><text x="37.5" y="90" font-weight="700" font-size="11" text-anchor="middle" fill="#ea580c">5%</text><text x="105" y="102" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">10% + 5% = 15%</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn persentasie van ʼn bedrag te vind deur die desimale metode en die hoofrekenmetode van opbou vanaf 10% te gebruik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — PERSENTASIETOENAME EN -AFNAME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'percentage-increase-decrease',
      title: 'Persentasietoename en -afname',
      icon: '%',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Persentasietoename</strong> beteken om ʼn persentasie van die ${bl('oorspronklike bedrag')} by die ${bl('oorspronklike')} te tel. ʼn <strong>Persentasieafname</strong> beteken om ʼn persentasie van die ${bl('oorspronklike bedrag')} van die ${bl('oorspronklike')} af te trek. Om ʼn persentasietoename te bereken, vind ${or('die persentasie van die bedrag')} en ${gr('tel dit by')}. Om ʼn persentasieafname te bereken, vind ${or('die persentasie van die bedrag')} en ${re('trek dit af')}. Ons gebruik persentasietoename en -afname in die alledaagse lewe vir prysverhogings, salarisverhogings, kortings en bevolkingsveranderinge.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('oorspronklike bedrag')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('persentasie gevind')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('toename')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('afname')}</span>` +
        `</div>` +

        // ── Two rules ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die twee reëls</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Persentasietoename:</strong> Vind ${or('die persentasie van die oorspronklike')} → ${gr('tel dit by')} die ${bl('oorspronklike bedrag')}. &nbsp;Nuwe bedrag = ${bl('oorspronklike')} ${gr('+')} ${or('persentasie van oorspronklike')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Persentasieafname:</strong> Vind ${or('die persentasie van die oorspronklike')} → ${re('trek dit af')} van die ${bl('oorspronklike bedrag')}. &nbsp;Nuwe bedrag = ${bl('oorspronklike')} ${re('−')} ${or('persentasie van oorspronklike')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Real-life uses ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gebruike in die alledaagse lewe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Toenames')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Prysverhogings, salarisverhogings, bevolkingsgroei, BTW.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">${re('Afnames')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kortings, uitverkoopspryse, waardevermindering, bevolkingsafname.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Tweestapmetode</p>` +
        `<p style="margin:0;color:#1e3a8a;"><strong>Stap 1:</strong> Vind ${or('die persentasie van die oorspronklike bedrag')} (skakel persentasie om na ʼn desimale breuk en vermenigvuldig). <br><strong>Stap 2:</strong> ${gr('Tel by')} vir ʼn toename of ${re('trek af')} vir ʼn afname. Begin altyd by die ${bl('oorspronklike bedrag')}.</p>` +
        `</div>`,

      workedExamples: [
        // ── Voorbeeld 12: TV-prystoename 12% ────────────────────────────────
        {
          question: 'ʼn Winkel verhoog die prys van ʼn televisie met 12%. Die oorspronklike prys is R3 500. Wat is die nuwe prys?',
          answer: `Nuwe prys = ${gr('R3 920')}`,
          steps: [
            `Vind ${or('12%')} van ${bl('R3 500')}: 0,12 × ${bl('3 500')} = ${or('R420')}.`,
            `${gr('Tel by')} die oorspronklike: ${bl('R3 500')} ${gr('+')} ${or('R420')} = ${gr('R3 920')}.`,
            `<strong>Antwoord:</strong> Die nuwe prys is ${gr('R3 920')} ✓`,
          ],
        },

        // ── Voorbeeld 13: Snoepiewinkelprysafname 15% ─────────────────────────
        {
          question: 'ʼn Skool verlaag sy snoepiewinkelpryse met 15%. ʼn Pastei kos oorspronklik R12. Wat is die nuwe prys?',
          answer: `Nuwe prys = ${re('R10,20')}`,
          steps: [
            `Vind ${or('15%')} van ${bl('R12')}: 0,15 × ${bl('12')} = ${or('R1,80')}.`,
            `${re('Trek af')} van die oorspronklike: ${bl('R12')} ${re('−')} ${or('R1,80')} = ${re('R10,20')}.`,
            `<strong>Antwoord:</strong> Die nuwe prys is ${re('R10,20')} ✓`,
          ],
        },

        // ── Voorbeeld 14: Salaristoename 10% ──────────────────────────────────
        {
          question: 'Sipho verdien R8 500 per maand. Hy kry ʼn 10% salarisverhoging. Wat is sy nuwe salaris?',
          answer: `Nuwe salaris = ${gr('R9 350')}`,
          steps: [
            `Vind ${or('10%')} van ${bl('R8 500')}: ${bl('8 500')} ÷ 10 = ${or('R850')}.`,
            `${gr('Tel by')} die oorspronklike: ${bl('R8 500')} ${gr('+')} ${or('R850')} = ${gr('R9 350')}.`,
            `<strong>Antwoord:</strong> Sipho verdien nou ${gr('R9 350')} per maand ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om persentasietoename en persentasieafname te bereken deur die tweestapmetode van eers die persentasie vind en dan by die oorspronklike te tel of daarvan af te trek',

      diagramPlaceholder: 'Twee staafmodelle — boonste staaf wys die oorspronklike bedrag verleng met ʼn 12%-toename, onderste staaf wys die oorspronklike bedrag met ʼn 15%-afname daaruit verwyder',
      diagramSvg: '<svg viewBox="0 0 200 140" xmlns="http://www.w3.org/2000/svg"><text x="85" y="16" font-size="11" text-anchor="middle" fill="#2563eb">Oorspronklik</text><text x="163" y="16" font-size="11" text-anchor="middle" fill="#16a34a">+12%</text><rect x="15" y="20" width="157" height="22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="15" y="20" width="140" height="22" fill="#93c5fd"/><rect x="155" y="20" width="17" height="22" fill="#86efac"/><line x1="155" y1="20" x2="155" y2="42" stroke="#0f1f3d" stroke-width="1.5"/><text x="93" y="60" font-weight="700" font-size="12" text-anchor="middle" fill="#16a34a">Nuwe = Oorspronklik + 12%</text><text x="85" y="82" font-size="11" text-anchor="middle" fill="#2563eb">Oorspronklik</text><text x="144" y="82" font-size="11" text-anchor="middle" fill="#dc2626">−15%</text><rect x="15" y="86" width="140" height="22" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="15" y="86" width="119" height="22" fill="#93c5fd"/><rect x="134" y="86" width="21" height="22" fill="#fca5a5"/><line x1="134" y1="86" x2="134" y2="108" stroke="#0f1f3d" stroke-width="1.5"/><text x="85" y="126" font-weight="700" font-size="12" text-anchor="middle" fill="#dc2626">Nuwe = Oorspronklik − 15%</text></svg>',
    },
  ],
  topicPractice: [
    // ── V1 Maklik — persentasie na desimale breuk ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf 45% as ʼn desimale breuk.',
      answer: '0,45',
      checkMode: 'auto',
      correctAnswer: '0,45',
      correctAnswers: ['0.45', '0,45'],
      explanation: 'Deel deur 100 (skuif die desimale komma 2 plekke links).\n45 ÷ 100 = 0,45 ✓',
    },

    // ── V2 Maklik — desimale breuk na persentasie ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf 0,72 as ʼn persentasie.',
      answer: '72%',
      checkMode: 'auto',
      correctAnswer: '72%',
      correctAnswers: ['72%', '72'],
      explanation: 'Vermenigvuldig met 100 (skuif die desimale komma 2 plekke regs).\n0,72 × 100 = 72. Antwoord: 72% ✓',
    },

    // ── V3 Medium — breuk na persentasie ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf 5/8 as ʼn persentasie.',
      answer: '62,5%',
      checkMode: 'auto',
      correctAnswer: '62,5%',
      correctAnswers: ['62.5%', '62.5', '62,5%', '62,5'],
      explanation: 'Deel die teller deur die noemer, en vermenigvuldig dan met 100.\n5 ÷ 8 = 0,625. 0,625 × 100 = 62,5. Antwoord: 62,5% ✓',
    },

    // ── V4 Medium — persentasie na breuk in eenvoudigste vorm ──────────────────
    {
      difficulty: 'Medium',
      question: 'Skryf 84% as ʼn breuk in eenvoudigste vorm.',
      answer: '21/25',
      checkMode: 'auto',
      correctAnswer: '21/25',
      explanation: 'Skryf as ʼn breuk oor 100: 84/100.\nGGF van 84 en 100 is 4. 84 ÷ 4 = 21, 100 ÷ 4 = 25.\nAntwoord: 21/25 ✓',
    },

    // ── V5 Moeilik — verduidelik breuk-persentasie-ekwivalensie ────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho sê 3/5 is dieselfde as 60%. Is hy korrek? Verduidelik jou antwoord.",
      answer: 'Ja — 3/5 = 3 ÷ 5 = 0,6 = 60%. Sipho is korrek.',
      checkMode: 'self',
    },

    // ── V6 Maklik — vind 10% van ʼn bedrag ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind 10% van 350.',
      answer: '35',
      checkMode: 'auto',
      correctAnswer: '35',
      explanation: '10% van ʼn bedrag = bedrag ÷ 10.\n350 ÷ 10 = 35. Antwoord: 35 ✓',
    },

    // ── V7 Maklik — vind 25% van ʼn bedrag ──────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Vind 25% van 200.',
      answer: '50',
      checkMode: 'auto',
      correctAnswer: '50',
      explanation: 'Skakel 25% om na ʼn desimale breuk: 0,25.\n0,25 × 200 = 50. Antwoord: 50 ✓',
    },

    // ── V8 Medium — vind 35% van ʼn bedrag ────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Vind 35% van 480.',
      answer: '168',
      checkMode: 'auto',
      correctAnswer: '168',
      explanation: 'Skakel 35% om na ʼn desimale breuk: 0,35.\n0,35 × 480 = 168. Antwoord: 168 ✓',
    },

    // ── V9 Medium — persentasie van bedrag in konteks ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Skool het 650 leerders. 40% is seuns. Hoeveel seuns is daar?',
      answer: '260',
      checkMode: 'auto',
      correctAnswer: '260',
      explanation: 'Vind 40% van 650.\nSkakel 40% om na ʼn desimale breuk: 0,40.\n0,40 × 650 = 260. Antwoord: 260 seuns ✓',
    },

    // ── V10 Moeilik — persentasie van ʼn toetspunt ─────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato behaal 72% in ʼn toets uit 150. Hoeveel punte het sy behaal?',
      answer: '108',
      checkMode: 'auto',
      correctAnswer: '108',
      explanation: 'Vind 72% van 150.\n0,72 × 150 = 108. Antwoord: 108 punte ✓',
    },

    // ── V11 Moeilik — druk ʼn punt as ʼn persentasie uit ───────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle beantwoord 45 vrae korrek uit 60. Watter persentasie het sy behaal?',
      answer: '75%',
      checkMode: 'auto',
      correctAnswer: '75%',
      correctAnswers: ['75%', '75'],
      explanation: 'Skryf as ʼn breuk: 45/60.\nDeel: 45 ÷ 60 = 0,75.\nVermenigvuldig met 100: 0,75 × 100 = 75. Antwoord: 75% ✓',
    },

    // ── V12 Medium — persentasieafname (korting) ───────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Baadjie kos R680. Dit word met 20% verminder. Wat is die verkoopprys?',
      answer: 'R544',
      checkMode: 'auto',
      correctAnswer: 'R544',
      correctAnswers: ['R544', '544'],
      explanation: 'Vind 20% van R680: 0,20 × 680 = R136 (korting).\nVerkoopprys = R680 − R136 = R544. Antwoord: R544 ✓',
    },

    // ── V13 Medium — persentasietoename ─────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Winkel verhoog ʼn prys van R240 met 15%. Wat is die nuwe prys?',
      answer: 'R276',
      checkMode: 'auto',
      correctAnswer: 'R276',
      correctAnswers: ['R276', '276'],
      explanation: 'Vind 15% van R240: 0,15 × 240 = R36 (toename).\nNuwe prys = R240 + R36 = R276. Antwoord: R276 ✓',
    },

    // ── V14 Moeilik — salaristoename ────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo verdien R12 400 per maand. Hy kry ʼn 8% salarisverhoging. Wat is sy nuwe maandelikse salaris?',
      answer: 'R13 392',
      checkMode: 'auto',
      correctAnswer: 'R13392',
      correctAnswers: ['R13392', 'R13 392', '13392', '13 392'],
      explanation: 'Vind 8% van R12 400: 0,08 × 12 400 = R992 (toename).\nNuwe salaris = R12 400 + R992 = R13 392. Antwoord: R13 392 ✓',
    },

    // ── V15 Moeilik — korting (spaar en betaal) ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Televisie kos R4 500. Die winkel bied ʼn 12% korting op Vrydae. Sipho koop die televisie op ʼn Vrydag.',
      answer: '',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Hoeveel spaar Sipho?',
          correctAnswer: 'R540',
          correctAnswers: ['R540', '540'],
          explanation: 'Vind 12% van R4 500: 0,12 × 4 500 = R540. Sipho spaar R540 ✓',
        },
        {
          label: 'b) Hoeveel betaal Sipho?',
          correctAnswer: 'R3960',
          correctAnswers: ['R3960', 'R3 960', '3960', '3 960'],
          explanation: 'Verkoopprys = R4 500 − R540 = R3 960. Sipho betaal R3 960 ✓',
        },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het persentasies bemeester.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van persentasies.' },
      { minPercent: 50, message: 'Goeie poging! Hersien die afdelings waar jy punte verloor het en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn slag.' },
    ],
  },

  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt — jy het persentasies vir Graad 6 heeltemal bemeester. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van persentasies. Hersien enige gemiste dele en jy sal dit perfek kry.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer." },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — 3 stelle × 20 vrae
  // Bloklayout per stel: 0-3 betekenis van persentasie/basiese omskakeling (Maklik) |
  // 4-6 breuk<->persentasie algemeen (Maklik-Medium) | 7-9 persentasie<->breuk/
  // desimale breuk met vereenvoudiging/presisie (Medium) | 10-13 vind ʼn persentasie
  // van ʼn bedrag (Medium) | 14-16 persentasietoename/-afname enkelstap
  // (Medium-Moeilik) | 17-19 multistap- en vergelykende persentasievraagstukke (Moeilik)
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: "Wat beteken die woord 'persent'?", answer: "'Persent' beteken 'uit 100'. So beteken 45% dus 45 uit elke 100 dele.", checkMode: 'self' },
        { difficulty: 'Easy', question: 'Skryf 20% as ʼn breuk in eenvoudigste vorm.', answer: '1/5', checkMode: 'auto', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: '20% = 20/100. GGF van 20 en 100 is 20. 20 ÷ 20 = 1, 100 ÷ 20 = 5. Antwoord: 1/5 ✓' },
        { difficulty: 'Easy', question: 'Skakel elk van die volgende om.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skryf 0,6 as ʼn persentasie.', correctAnswer: '60%', correctAnswers: ['60%', '60'], explanation: 'Vermenigvuldig met 100: 0,6 × 100 = 60. Antwoord: 60% ✓' },
          { label: 'b) Skryf 75% as ʼn desimale breuk.', correctAnswer: '0,75', correctAnswers: ['0.75', '0,75'], explanation: 'Deel deur 100: 75 ÷ 100 = 0,75. Antwoord: 0,75 ✓' },
          { label: 'c) Skryf 75% as ʼn breuk in eenvoudigste vorm.', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: '75% = 75/100. GGF van 75 en 100 is 25. 75 ÷ 25 = 3, 100 ÷ 25 = 4. Antwoord: 3/4 ✓' },
        ] },
        { difficulty: 'Easy', question: "Karabo sê 10% as ʼn breuk is 10/100 en dit is reeds in eenvoudigste vorm. Is sy korrek? Verduidelik.", answer: 'Nee — 10/100 vereenvoudig verder na 1/10, aangesien die GGF van 10 en 100 gelyk is aan 10. Sy het vergeet om te vereenvoudig.', checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Skakel 9/20 om na ʼn persentasie.', answer: '45%', checkMode: 'auto', correctAnswer: '45%', correctAnswers: ['45%', '45'], explanation: 'Deel die teller deur die noemer: 9 ÷ 20 = 0,45. Vermenigvuldig met 100: 0,45 × 100 = 45. Antwoord: 45% ✓' },
        { difficulty: 'Medium', question: "In ʼn speltoets uit 20 spel Amahle 17 woorde korrek. Watter persentasie het sy behaal?", answer: '85%', checkMode: 'auto', correctAnswer: '85%', correctAnswers: ['85%', '85'], explanation: 'Skryf as ʼn breuk: 17/20. Deel: 17 ÷ 20 = 0,85. Vermenigvuldig met 100: 85. Antwoord: 85% ✓' },
        { difficulty: 'Medium', question: 'Watter een is groter: 3/8 of 40%? Wys jou berekening.', answer: '40%', checkMode: 'auto', correctAnswer: '40%', correctAnswers: ['40%', '40'], explanation: 'Skakel 3/8 om na ʼn persentasie: 3 ÷ 8 = 0,375, ×100 = 37,5%. Vergelyk 37,5% met 40%: 40% is groter. Antwoord: 40% ✓' },
        { difficulty: 'Medium', question: 'Skakel 64% om na ʼn breuk in eenvoudigste vorm.', answer: '16/25', checkMode: 'auto', correctAnswer: '16/25', correctAnswers: ['16/25'], explanation: '64% = 64/100. GGF van 64 en 100 is 4. 64 ÷ 4 = 16, 100 ÷ 4 = 25. Antwoord: 16/25 ✓' },
        { difficulty: 'Medium', question: "Bongani vereenvoudig 56% na ʼn breuk. Hy skryf 56/100 = 28/50 en stop daar, en sê dit is die eenvoudigste vorm. Is hy korrek?", answer: 'Nee — 28/50 kan nog verder vereenvoudig word. Die GGF van 56 en 100 is eintlik 4, dus 56/100 = 14/25 in eenvoudigste vorm. Bongani het slegs een keer deur 2 gedeel en te vroeg gestop.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Beantwoord elke deel.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skakel 0,045 om na ʼn persentasie.', correctAnswer: '4,5%', correctAnswers: ['4.5%', '4.5', '4,5%', '4,5'], explanation: 'Vermenigvuldig met 100: 0,045 × 100 = 4,5. Antwoord: 4,5% ✓' },
          { label: 'b) Skakel 92% om na ʼn breuk in eenvoudigste vorm.', correctAnswer: '23/25', correctAnswers: ['23/25'], explanation: '92% = 92/100. GGF van 92 en 100 is 4. 92 ÷ 4 = 23, 100 ÷ 4 = 25. Antwoord: 23/25 ✓' },
          { label: 'c) Skakel 6,5% om na ʼn desimale breuk.', correctAnswer: '0,065', correctAnswers: ['0.065', '0,065'], explanation: 'Deel deur 100: 6,5 ÷ 100 = 0,065. Antwoord: 0,065 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Snoepiewinkel verkoop koeldrank vir R12. As BTW 15% by die prys voeg, hoeveel ekstra moet ʼn leerder betaal?', answer: 'R1,80', checkMode: 'auto', correctAnswer: 'R1,80', correctAnswers: ['R1.80', '1.80', 'R1,80', '1,80'], explanation: 'Vind 15% van R12: 0,15 × 12 = 1,80. Antwoord: R1,80 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die 10%-opboumetode om 45% van R640 te vind.', answer: 'R288', checkMode: 'auto', correctAnswer: 'R288', correctAnswers: ['R288', '288'], explanation: '10% van 640 = 64. 45% = 4 × 10% + 5%. 4 × 64 = 256. 5% = helfte van 64 = 32. 256 + 32 = 288. Antwoord: R288 ✓' },
        { difficulty: 'Medium', question: "ʼn Leerder werk 15% van R640 uit deur die opboumetode: 'Aangesien 10% gelyk is aan 64, moet 15% dus 64 + 6 = 70 wees.' Wat het verkeerd gegaan?", answer: "Die leerder het 6 bygetel in plaas van die helfte van 64. 5% is die helfte van 10%, dus is 5% van 640 gelyk aan 32, nie 6 nie. Die korrekte antwoord is 64 + 32 = R96, nie R70 nie.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter een is meer: 30% van R450 of 40% van R320?', answer: '30% van R450', checkMode: 'auto', correctAnswer: '30% van R450', correctAnswers: ['30% van R450', '30% van 450', 'R135', '135'], explanation: '30% van R450 = 0,30 × 450 = R135. 40% van R320 = 0,40 × 320 = R128. R135 is meer as R128, dus is 30% van R450 meer.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Winkel verhoog die prys van ʼn skooltas met 12%. Die oorspronklike prys is R650. Wat is die nuwe prys?', answer: 'R728', checkMode: 'auto', correctAnswer: 'R728', correctAnswers: ['R728', '728'], explanation: 'Vind 12% van R650: 0,12 × 650 = 78. Tel by die oorspronklike: 650 + 78 = 728. Antwoord: R728 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Paar skoene kos R560. Die winkel bied ʼn 25%-korting tydens ʼn uitverkoping. Wat is die verkoopprys?', answer: 'R420', checkMode: 'auto', correctAnswer: 'R420', correctAnswers: ['R420', '420'], explanation: 'Vind 25% van R560: 0,25 × 560 = 140. Trek af van die oorspronklike: 560 − 140 = 420. Antwoord: R420 ✓' },
        { difficulty: 'Hard', question: "Thabo werk uit dat ʼn R380-baadjie met ʼn 30%-korting 380 + 114 = R494 behoort te kos. Watter fout het hy gemaak, en wat is die korrekte verkoopprys?", answer: "Thabo het die korting bygetel in plaas daarvan om dit af te trek — ʼn korting laat die prys daal, nie styg nie. Die korrekte verkoopprys is 380 − 114 = R266.", checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Fiets kos R1 800. Dit is in ʼn uitverkoping met ʼn 20%-korting.\n\na) Wat is die kortingsbedrag?\nb) Wat is die finale verkoopprys?", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R360', correctAnswers: ['R360', '360'], explanation: 'Vind 20% van R1 800: 0,20 × 1 800 = 360. Antwoord: R360 ✓' },
          { label: 'b) Finale verkoopprys', correctAnswer: 'R1440', correctAnswers: ['R1440', 'R1 440', '1440', '1 440'], explanation: 'Verkoopprys = 1 800 − 360 = 1 440. Antwoord: R1 440 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee klasse skryf verskillende toetse. Klas A behaal 24 uit 30, en Klas B behaal 5 uit 6. Watter klas het ʼn hoër persentasie behaal?', answer: 'Klas B', checkMode: 'auto', correctAnswer: 'Klas B', correctAnswers: ['Klas B', 'B'], explanation: 'Klas A: 24 ÷ 30 = 0,8 = 80%. Klas B: 5 ÷ 6 = 0,8333... ≈ 83,3%. Klas B het ʼn hoër persentasie behaal.' },
        { difficulty: 'Hard', question: "ʼn Winkel adverteer 'Kry nog ʼn ekstra 10% af op reeds-verminderde pryse!' ʼn Trui is reeds met 20% verminder vanaf R500. ʼn Leerder beweer die totale besparing is 30% van die oorspronklike prys. Is dit korrek? Verduidelik.", answer: "Nee. Na ʼn 20%-korting word R500 R400 (500 − 100). ʼn Verdere 10% af R400 is R40, wat die finale prys R360 maak. Die totale besparing is 500 − 360 = R140, wat 28% van die oorspronklike prys is, nie 30% nie. Opeenvolgende persentasies kan nie sommer bygetel word nie, want die tweede persentasie word van ʼn kleiner, reeds-verminderde bedrag afgetrek.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het ʼn baie stewige begrip van persentasies.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklayout as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: "Voltooi die sin: 45% beteken 45 uit elke ___ dele.", answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100'], explanation: "'Persent' beteken 'uit 100', dus beteken 45% 45 uit elke 100 dele." },
        { difficulty: 'Easy', question: 'Skryf 50% as ʼn breuk in eenvoudigste vorm.', answer: '1/2', checkMode: 'auto', correctAnswer: '1/2', correctAnswers: ['1/2'], explanation: '50% = 50/100. GGF van 50 en 100 is 50. 50 ÷ 50 = 1, 100 ÷ 50 = 2. Antwoord: 1/2 ✓' },
        { difficulty: 'Easy', question: 'Voltooi elke omskakeling.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skryf 0,9 as ʼn persentasie.', correctAnswer: '90%', correctAnswers: ['90%', '90'], explanation: 'Vermenigvuldig met 100: 0,9 × 100 = 90. Antwoord: 90% ✓' },
          { label: 'b) Skryf 20% as ʼn desimale breuk.', correctAnswer: '0,2', correctAnswers: ['0.2', '0.20', '0,2', '0,20'], explanation: 'Deel deur 100: 20 ÷ 100 = 0,2. Antwoord: 0,2 ✓' },
          { label: 'c) Skryf 20% as ʼn breuk in eenvoudigste vorm.', correctAnswer: '1/5', correctAnswers: ['1/5'], explanation: '20% = 20/100. GGF van 20 en 100 is 20. 20 ÷ 20 = 1, 100 ÷ 20 = 5. Antwoord: 1/5 ✓' },
        ] },
        { difficulty: 'Easy', question: "Zanele skakel 4/10 om na ʼn persentasie deur te skryf 4 ÷ 10 = 40, en sê toe die antwoord is 40. Watter fout het sy gemaak?", answer: "Sy het die laaste stap vergeet. Na deling is 4 ÷ 10 = 0,4, en sy moet nog met 100 vermenigvuldig om 40% te kry. Om net '40' te skryf sonder die persentasieteken — en die vermenigvuldig-met-100-stap oor te slaan — lei tot verwarring. Die korrekte antwoord is 40%.", checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Skakel 13/40 om na ʼn persentasie.', answer: '32,5%', checkMode: 'auto', correctAnswer: '32,5%', correctAnswers: ['32.5%', '32.5', '32,5%', '32,5'], explanation: 'Deel: 13 ÷ 40 = 0,325. Vermenigvuldig met 100: 32,5. Antwoord: 32,5% ✓' },
        { difficulty: 'Medium', question: "Tydens ʼn sokkerwedstryd keer ʼn doelwagter 13 uit 16 skote. Watter persentasie van die skote het hy gekeer?", answer: '81,25%', checkMode: 'auto', correctAnswer: '81,25%', correctAnswers: ['81.25%', '81.25', '81,25%', '81,25'], explanation: 'Skryf as ʼn breuk: 13/16. Deel: 13 ÷ 16 = 0,8125. Vermenigvuldig met 100: 81,25. Antwoord: 81,25% ✓' },
        { difficulty: 'Medium', question: 'Rangskik hierdie van klein na groot: 1/4, 30%, 0,2', answer: '0,2, 1/4, 30%', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Skakel 85% om na ʼn breuk in eenvoudigste vorm.', answer: '17/20', checkMode: 'auto', correctAnswer: '17/20', correctAnswers: ['17/20'], explanation: '85% = 85/100. GGF van 85 en 100 is 5. 85 ÷ 5 = 17, 100 ÷ 5 = 20. Antwoord: 17/20 ✓' },
        { difficulty: 'Medium', question: "Lindiwe sê 0,5% is dieselfde as 0,5 as ʼn desimale breuk, dus skryf sy 0,5% = 0,5. Is sy korrek? Verduidelik.", answer: "Nee — sy het verkeerd gedeel. Om ʼn persentasie na ʼn desimale breuk om te skakel, deel deur 100: 0,5 ÷ 100 = 0,005, nie 0,5 nie. Lindiwe het die desimale komma verkeerd geplaas.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Beantwoord elke deel.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skakel 0,008 om na ʼn persentasie.', correctAnswer: '0,8%', correctAnswers: ['0.8%', '0.8', '0,8%', '0,8'], explanation: 'Vermenigvuldig met 100: 0,008 × 100 = 0,8. Antwoord: 0,8% ✓' },
          { label: 'b) Skakel 36% om na ʼn breuk in eenvoudigste vorm.', correctAnswer: '9/25', correctAnswers: ['9/25'], explanation: '36% = 36/100. GGF van 36 en 100 is 4. 36 ÷ 4 = 9, 100 ÷ 4 = 25. Antwoord: 9/25 ✓' },
          { label: 'c) Skakel 115% om na ʼn desimale breuk.', correctAnswer: '1,15', correctAnswers: ['1.15', '1,15'], explanation: 'Deel deur 100: 115 ÷ 100 = 1,15. Antwoord: 1,15 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Skool het 250 leerders. 72% van hulle besit ʼn selfoon. Hoeveel leerders besit ʼn selfoon?', answer: '180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180'], explanation: 'Vind 72% van 250: 0,72 × 250 = 180. Antwoord: 180 leerders ✓' },
        { difficulty: 'Medium', question: 'Gebruik die 10%-opboumetode om 15% van R820 te vind.', answer: 'R123', checkMode: 'auto', correctAnswer: 'R123', correctAnswers: ['R123', '123'], explanation: '10% van 820 = 82. 5% = helfte van 82 = 41. 15% = 10% + 5% = 82 + 41 = 123. Antwoord: R123 ✓' },
        { difficulty: 'Medium', question: "ʼn Leerder bereken 30% van R900 met die opboumetode: 'Aangesien 10% gelyk is aan 90, is 30% dus 90 + 90 = 180.' Is die finale antwoord korrek, en indien nie, waar is die fout?", answer: "Nee, die antwoord is verkeerd. 30% is 3 x 10%, dus behoort dit 90 + 90 + 90 = 270 te wees, nie 90 + 90 = 180 nie. Die leerder het slegs twee stelle van 10% bygetel in plaas van drie.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter een is meer: 45% van R220 of 40% van R250?', answer: '40% van R250', checkMode: 'auto', correctAnswer: '40% van R250', correctAnswers: ['40% van R250', '40% van 250', 'R100', '100'], explanation: '45% van R220 = 0,45 × 220 = R99. 40% van R250 = 0,40 × 250 = R100. R100 is meer as R99, dus is 40% van R250 meer.' },
        { difficulty: 'Medium-Hard', question: 'Sipho verdien R6 200 per maand. Hy kry ʼn 5%-salarisverhoging. Wat is sy nuwe salaris?', answer: 'R6510', checkMode: 'auto', correctAnswer: 'R6510', correctAnswers: ['R6510', 'R6 510', '6510', '6 510'], explanation: 'Vind 5% van R6 200: 0,05 × 6 200 = 310. Tel by die oorspronklike: 6 200 + 310 = 6 510. Antwoord: R6 510 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Selfoon kos R2 800. Tydens ʼn uitverkoping word die prys met 15% verminder. Wat is die verkoopprys?', answer: 'R2380', checkMode: 'auto', correctAnswer: 'R2380', correctAnswers: ['R2380', 'R2 380', '2380', '2 380'], explanation: 'Vind 15% van R2 800: 0,15 × 2 800 = 420. Trek af van die oorspronklike: 2 800 − 420 = 2 380. Antwoord: R2 380 ✓' },
        { difficulty: 'Hard', question: "Nomvula sê ʼn skootrekenaar wat met 6% in prys styg vanaf R6 400 kos nou R384. Wat het verkeerd gegaan, en wat is die korrekte nuwe prys?", answer: "Nomvula het die toenamebedrag (R384) gegee in plaas van die nuwe totale prys. Sy moes R384 by die oorspronklike R6 400 tel. Die korrekte nuwe prys is 6 400 + 384 = R6 784.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Lerato verdien R7 200 per maand en kry ʼn 12,5%-verhoging.\n\na) Wat is haar nuwe maandelikse salaris?\nb) As sy 1/4 van haar nuwe salaris aan huur bestee, hoeveel is dit?", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Nuwe maandelikse salaris', correctAnswer: 'R8100', correctAnswers: ['R8100', 'R8 100', '8100', '8 100'], explanation: 'Vind 12,5% van R7 200: 0,125 × 7 200 = 900. Nuwe salaris = 7 200 + 900 = 8 100. Antwoord: R8 100 ✓' },
          { label: 'b) Bedrag aan huur bestee', correctAnswer: 'R2025', correctAnswers: ['R2025', 'R2 025', '2025', '2 025'], explanation: '1/4 van R8 100 = 8 100 ÷ 4 = 2 025. Antwoord: R2 025 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee winkels verkoop dieselfde boek. Winkel A verkoop 18 uit 24 eksemplare in ʼn week, en Winkel B verkoop 21 uit 30 eksemplare. Watter winkel het ʼn hoër persentasie van sy voorraad verkoop?', answer: 'Winkel A', checkMode: 'auto', correctAnswer: 'Winkel A', correctAnswers: ['Winkel A', 'A'], explanation: 'Winkel A: 18 ÷ 24 = 0,75 = 75%. Winkel B: 21 ÷ 30 = 0,7 = 70%. Winkel A het ʼn hoër persentasie van sy voorraad verkoop.' },
        { difficulty: 'Hard', question: "ʼn Winkel bied 'nog ʼn ekstra 10% af' bo-op ʼn reeds-geadverteerde 20%-korting op ʼn R500-baadjie. ʼn Kliënt beweer dit beteken die baadjie is altesaam 30% goedkoper. Is die kliënt korrek? Verduidelik met syfers.", answer: "Nee. Eerste korting: 20% van R500 = R100, dus daal die prys na R400. Tweede korting: 10% van R400 = R40, dus is die finale prys R360. Totale besparing = 500 − 360 = R140, wat 28% van die oorspronklike prys is, nie 30% nie. Jy kan nie opeenvolgende persentasies sommer bytel nie, want die tweede korting geld op die reeds-verminderde prys, nie op die oorspronklike prys nie.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue met persentasies in werklike kontekste werk.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklayout, meer werklike kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: "ʼn Plakkaat wys '25% van leerders stap skool toe.' Wat beteken die 25% in hierdie sin?", answer: '25 uit elke 100 leerders stap skool toe.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Skryf 75% as ʼn breuk in eenvoudigste vorm.', answer: '3/4', checkMode: 'auto', correctAnswer: '3/4', correctAnswers: ['3/4'], explanation: '75% = 75/100. GGF van 75 en 100 is 25. 75 ÷ 25 = 3, 100 ÷ 25 = 4. Antwoord: 3/4 ✓' },
        { difficulty: 'Easy', question: 'Voltooi elke omskakeling.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skryf 0,35 as ʼn persentasie.', correctAnswer: '35%', correctAnswers: ['35%', '35'], explanation: 'Vermenigvuldig met 100: 0,35 × 100 = 35. Antwoord: 35% ✓' },
          { label: 'b) Skryf 10% as ʼn desimale breuk.', correctAnswer: '0,1', correctAnswers: ['0.1', '0.10', '0,1', '0,10'], explanation: 'Deel deur 100: 10 ÷ 100 = 0,1. Antwoord: 0,1 ✓' },
          { label: 'c) Skryf 10% as ʼn breuk in eenvoudigste vorm.', correctAnswer: '1/10', correctAnswers: ['1/10'], explanation: '10% = 10/100. GGF van 10 en 100 is 10. 10 ÷ 10 = 1, 100 ÷ 10 = 10. Antwoord: 1/10 ✓' },
        ] },
        { difficulty: 'Easy', question: "Gegewe dat 30% = 0,3 = 3/10, sê ʼn leerder 30% moet ook gelyk wees aan 3/100 omdat persent 'oor 100' beteken. Is dit korrek? Verduidelik.", answer: "Nee — die breuk 30/100 vereenvoudig na 3/10, nie 3/100 nie. Die leerder het die teller deur 10 gedeel sonder om ook die noemer deur 10 te deel, wat die waarde van die breuk verander.", checkMode: 'self' },
        { difficulty: 'Easy-Medium', question: 'Skakel 11/20 om na ʼn persentasie.', answer: '55%', checkMode: 'auto', correctAnswer: '55%', correctAnswers: ['55%', '55'], explanation: 'Deel: 11 ÷ 20 = 0,55. Vermenigvuldig met 100: 55. Antwoord: 55% ✓' },
        { difficulty: 'Medium', question: "Uit 40 leerders in ʼn klas het 27 die skool se sportdag bygewoon. Watter persentasie van die klas het bygewoon?", answer: '67,5%', checkMode: 'auto', correctAnswer: '67,5%', correctAnswers: ['67.5%', '67.5', '67,5%', '67,5'], explanation: 'Skryf as ʼn breuk: 27/40. Deel: 27 ÷ 40 = 0,675. Vermenigvuldig met 100: 67,5. Antwoord: 67,5% ✓' },
        { difficulty: 'Medium', question: 'Watter een is groter: 7/20 of 30%? Wys jou berekening.', answer: '7/20', checkMode: 'auto', correctAnswer: '7/20', correctAnswers: ['7/20', '35%'], explanation: 'Skakel 7/20 om na ʼn persentasie: 7 ÷ 20 = 0,35, ×100 = 35%. Vergelyk 35% met 30%: 35% is groter. Antwoord: 7/20 ✓' },
        { difficulty: 'Medium', question: 'Skakel 44% om na ʼn breuk in eenvoudigste vorm.', answer: '11/25', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25'], explanation: '44% = 44/100. GGF van 44 en 100 is 4. 44 ÷ 4 = 11, 100 ÷ 4 = 25. Antwoord: 11/25 ✓' },
        { difficulty: 'Medium', question: "Kagiso vereenvoudig 48% deur teller en noemer deur 6 te deel, en kry 8/16,67, waarna hy sê die breuk kan nie verder vereenvoudig word nie. Wat is die werklike fout, en wat is die korrekte eenvoudigste vorm?", answer: "6 is nie ʼn gemene faktor van 48 en 100 nie (100 ÷ 6 is nie ʼn heelgetal nie), dus was dit ongeldig om deur 6 te deel. Die korrekte GGF van 48 en 100 is 4. 48 ÷ 4 = 12, 100 ÷ 4 = 25, dus is die eenvoudigste vorm 12/25.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Beantwoord elke deel.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Skakel 0,0625 om na ʼn persentasie.', correctAnswer: '6,25%', correctAnswers: ['6.25%', '6.25', '6,25%', '6,25'], explanation: 'Vermenigvuldig met 100: 0,0625 × 100 = 6,25. Antwoord: 6,25% ✓' },
          { label: 'b) Skakel 88% om na ʼn breuk in eenvoudigste vorm.', correctAnswer: '22/25', correctAnswers: ['22/25'], explanation: '88% = 88/100. GGF van 88 en 100 is 4. 88 ÷ 4 = 22, 100 ÷ 4 = 25. Antwoord: 22/25 ✓' },
          { label: 'c) Skakel 0,9% om na ʼn desimale breuk.', correctAnswer: '0,009', correctAnswers: ['0.009', '0,009'], explanation: 'Deel deur 100: 0,9 ÷ 100 = 0,009. Antwoord: 0,009 ✓' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Snoepiewinkel bestel 1 200 sapboksies. 25% daarvan is appelgeur. Hoeveel appelgeur-sapboksies is bestel?', answer: '300', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300'], explanation: 'Vind 25% van 1 200: 0,25 × 1 200 = 300. Antwoord: 300 sapboksies ✓' },
        { difficulty: 'Medium', question: 'Gebruik die 10%-opboumetode om 65% van R480 te vind.', answer: 'R312', checkMode: 'auto', correctAnswer: 'R312', correctAnswers: ['R312', '312'], explanation: '10% van 480 = 48. 65% = 6 × 10% + 5%. 6 × 48 = 288. 5% = helfte van 48 = 24. 288 + 24 = 312. Antwoord: R312 ✓' },
        { difficulty: 'Medium', question: "ʼn Leerder vind 25% van R840 met die opboumetode: 'Aangesien 10% gelyk is aan 84, is 25% dus 84 + 84 = 168, plus ʼn bietjie meer.' Sy rond dit af na R168 as haar finale antwoord. Wat is verkeerd met hierdie redenasie, en wat is die korrekte antwoord?", answer: "84 + 84 gee slegs 20% (twee stelle van 10%), nie 25% nie — sy het nog 5% nodig, wat die helfte van 84 = 42 is. Die korrekte antwoord is 84 + 84 + 42 = R210, nie R168 nie.", checkMode: 'self' },
        { difficulty: 'Medium', question: 'Watter een is meer: 8% van R950 of 12% van R650?', answer: '12% van R650', checkMode: 'auto', correctAnswer: '12% van R650', correctAnswers: ['12% van R650', '12% van 650', 'R78', '78'], explanation: '8% van R950 = 0,08 × 950 = R76. 12% van R650 = 0,12 × 650 = R78. R78 is meer as R76, dus is 12% van R650 meer.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skootrekenaar kos R6 400. Die prys word met 6% verhoog weens nuwe invoerkoste. Wat is die nuwe prys?', answer: 'R6784', checkMode: 'auto', correctAnswer: 'R6784', correctAnswers: ['R6784', 'R6 784', '6784', '6 784'], explanation: 'Vind 6% van R6 400: 0,06 × 6 400 = 384. Tel by die oorspronklike: 6 400 + 384 = 6 784. Antwoord: R6 784 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Hemp kos R380. Dit word met 30% verminder tydens ʼn einde-van-seisoen-uitverkoping. Wat is die verkoopprys?', answer: 'R266', checkMode: 'auto', correctAnswer: 'R266', correctAnswers: ['R266', '266'], explanation: 'Vind 30% van R380: 0,30 × 380 = 114. Trek af van die oorspronklike: 380 − 114 = 266. Antwoord: R266 ✓' },
        { difficulty: 'Hard', question: "Sizwe sê sy maandelikse salaris van R9 500 met ʼn 10%-verhoging is nou R950. Watter fout het hy gemaak, en wat is die korrekte nuwe salaris?", answer: "Sizwe het die toenamebedrag (R950) genoem in plaas van die nuwe totale salaris. Hy moes die toename by die oorspronklike salaris tel. Die korrekte nuwe salaris is 9 500 + 950 = R10 450.", checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Meubelwinkel verkoop ʼn rusbank vir R7 500 met ʼn 20%-korting vir ʼn naweekuitverkoping.\n\na) Wat is die kortingsbedrag?\nb) Wat is die finale verkoopprys?", answer: '', checkMode: 'auto', parts: [
          { label: 'a) Kortingsbedrag', correctAnswer: 'R1500', correctAnswers: ['R1500', 'R1 500', '1500', '1 500'], explanation: 'Vind 20% van R7 500: 0,20 × 7 500 = 1 500. Antwoord: R1 500 ✓' },
          { label: 'b) Finale verkoopprys', correctAnswer: 'R6000', correctAnswers: ['R6000', 'R6 000', '6000', '6 000'], explanation: 'Verkoopprys = 7 500 − 1 500 = 6 000. Antwoord: R6 000 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Twee plase rapporteer hulle mielie-oes as ʼn persentasie van die verwagte opbrengs. Plaas A oes 34 uit 40 verwagte ton, en Plaas B oes 56 uit 70 verwagte ton. Watter plaas het ʼn hoër persentasie van sy verwagte opbrengs behaal?', answer: 'Plaas A', checkMode: 'auto', correctAnswer: 'Plaas A', correctAnswers: ['Plaas A', 'A'], explanation: 'Plaas A: 34 ÷ 40 = 0,85 = 85%. Plaas B: 56 ÷ 70 = 0,8 = 80%. Plaas A het ʼn hoër persentasie van sy verwagte opbrengs behaal.' },
        { difficulty: 'Hard', question: "ʼn Sportwinkel adverteer '20% af, plus nog ʼn ekstra 10% af vir lidkaarthouers' op hardloopskoene wat oorspronklik R900 kos. ʼn Lidkaarthouer beweer sy sal slegs 70% van die oorspronklike prys betaal, dit wil sê R630. Is sy korrek? Verduidelik met syfers, en gee aan wat sy werklik betaal.", answer: "Nee. Eerste korting: 20% van R900 = R180, dus daal die prys na R720. Tweede korting: 10% van R720 = R72, dus is die finale prys R720 − 72 = R648. Dit is nie dieselfde as om 70% van R900 (R630) te betaal nie, want die tweede 10% word op die reeds-verminderde R720 bereken, nie op die oorspronklike R900 nie. Die opeenvolgende kortings gee ʼn kleiner totale besparing as om eenvoudig 20% + 10% by te tel.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan persentasies met selfvertroue op werklike vraagstukke toepas.' },
        { minScore: 15, message: 'Goeie werk! Hersien enige gemiste vrae en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die uitgewerkte voorbeelde en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
