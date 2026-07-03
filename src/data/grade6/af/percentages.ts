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
        '<VideoPlaceholder label="Kort video wat verduidelik wat ʼn persentasie is en hoe om tussen persentasies breuke en desimale breuke om te skakel" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die driehoekige verhouding tussen persentasies breuke en desimale breuke wys met omskakelingspyle gemerk vermenigvuldig met 100 en deel deur 100" />',
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
              correctAnswer: '0.5',
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
              correctAnswer: '12.5%',
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
              correctAnswer: '77.8%',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om tussen breuke desimale breuke en persentasies om te skakel deur die vermenigvuldig met 100 en deel deur 100 reëls te gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Driehoekdiagram wat breuke desimale breuke en persentasies by elke hoek wys met omskakelingspyle gemerk: breuk na persentasie deel dan vermenigvuldig met 100, persentasie na desimale breuk deel deur 100, desimale breuk na persentasie vermenigvuldig met 100" />',
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

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die twee metodes wys om ʼn persentasie van ʼn bedrag te vind: desimale metode (skakel om na ʼn desimale breuk en vermenigvuldig dan) en hoofrekenmetode (vind 10% en bou dan op)" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn persentasie van ʼn bedrag te vind deur die desimale metode en die hoofrekenmetode van opbou vanaf 10% te gebruik" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om persentasietoename en persentasieafname te bereken deur die tweestapmetode van eers die persentasie vind en dan by die oorspronklike te tel of daarvan af te trek" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat persentasietoename aan die linkerkant wys (oorspronklike bedrag plus persentasie gevind is gelyk aan nuwe bedrag) en persentasieafname aan die regterkant (oorspronklike bedrag minus persentasie gevind is gelyk aan nuwe bedrag) met kleurgekodeerde pyle" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik — persentasie na desimale breuk ──────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Skryf 45% as ʼn desimale breuk.',
      answer: '0,45',
      checkMode: 'auto',
      correctAnswer: '0.45',
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
      correctAnswer: '62.5%',
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
}
