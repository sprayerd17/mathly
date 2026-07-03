import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Sec 1 — pattern terms blue, differences orange, rule green
// Sec 2 — step numbers blue, pattern shapes green, algebraic rule orange
// Sec 3 — rule tested blue, verification steps orange, confirmed result green
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Numeriese en Geometriese Patrone',
  grade: 8,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — INVESTIGATING NUMERIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'investigating-numeric-patterns',
      title: 'Ondersoek van Numeriese Patrone',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek en brei <strong>numeriese patrone</strong> uit, en soek na verwantskappe tussen getalle wat nie beperk is tot ʼn konstante verskil of verhouding nie. Ons beskryf en regverdig die <strong>algemene reël</strong> in ons eie woorde of in algebraïese taal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('patroonterme')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verskille')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('reël')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Patroonterme</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die getalle in die reeks, elkeen gemerk volgens sy posisie n.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Verskille</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die gapings tussen opeenvolgende terme — kyk hoe hulle verander om die verwantskap raak te sien.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Algemene reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Algebraïese uitdrukking vir die nde term wat enige term in die reeks lewer.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Strategie: kontroleer eers die verskille</p>` +
        `<p style="margin:0;color:#1e3a8a;">As die ${or('verskille')} <strong>konstant</strong> is, is die reël lineêr (soos <em>an + b</em>). As die ${or('verskille')} <strong>met ʼn konstante hoeveelheid toeneem</strong>, is die reël kwadraties (bevat n²). Toets jou ${gr('reël')} altyd teen ten minste drie ${bl('patroonterme')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Vind die reël vir die patroon 3, 8, 15, 24.',
          answer: `nde term = ${gr('n² + 2n')}`,
          steps: [
            `Skryf die ${bl('patroonterme')} uit: ${bl('3')}, ${bl('8')}, ${bl('15')}, ${bl('24')}.`,
            `Bereken die ${or('verskille')}: ${or('5')}, ${or('7')}, ${or('9')} — die verskille ${or('neem met 2 toe')}, wat dui op ʼn <strong>vierkantsverwantskap</strong>.`,
            `Toets ${gr('n² + 2n')}: n=1 gee 1+2=<strong>3</strong> ✓ · n=2 gee 4+4=<strong>8</strong> ✓ · n=3 gee 9+6=<strong>15</strong> ✓`,
            `<strong>Reël:</strong> nde term = ${gr('n² + 2n')}`,
          ],
        },
        {
          question: 'Sipho let op dat die patroon 1, 4, 9, 16 die reël n² volg. Vind die 10de term.',
          answer: `10de term = ${gr('100')}`,
          steps: [
            `Identifiseer die ${gr('reël')}: nde term = ${gr('n²')}.`,
            `Vervang n = 10: 10² = ${gr('100')}.`,
            `<strong>Antwoord:</strong> Die 10de term is ${gr('100')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q1 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die volgende term in die patroon: 4, 9, 14, 19.',
          answer: '24',
          checkMode: 'auto',
          correctAnswer: '24',
          explanation: 'Die konstante verskil is 5.\nVolgende term: 19 + 5 = 24 ✓',
        },

        // ── Q2 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die reël vir die patroon 2, 5, 10, 17.',
          answer: 'n²+1',
          checkMode: 'auto',
          correctAnswer: 'n²+1',
          explanation: 'Verskille: 3, 5, 7 — neem met 2 toe, wat dui op ʼn kwadratiese patroon.\nKontroleer n²+1: n=1: 1+1=2 ✓, n=2: 4+1=5 ✓, n=3: 9+1=10 ✓, n=4: 16+1=17 ✓\nReël: nde term = n²+1',
        },

        // ── Q6 Easy ──────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Vind die volgende term in die patroon: 3, 6, 12, 24.',
          answer: '48',
          checkMode: 'auto',
          correctAnswer: '48',
          explanation: 'Elke term word verdubbel: 3, 6, 12, 24 → volgende term: 24 × 2 = 48 ✓',
        },

        // ── Q9 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Vind die reël vir die patroon 7, 12, 17, 22.',
          answer: '5n+2',
          checkMode: 'auto',
          correctAnswer: '5n+2',
          explanation: 'Die konstante verskil is 5.\nKontroleer 5n+2: n=1: 5+2=7 ✓, n=2: 10+2=12 ✓, n=3: 15+2=17 ✓, n=4: 20+2=22 ✓\nReël: nde term = 5n+2',
        },

        // ── Q11 Easy ─────────────────────────────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'Gebruik die reël n²+3 om die 5de term van die patroon te vind.',
          answer: '28',
          checkMode: 'auto',
          correctAnswer: '28',
          explanation: 'Vervang n=5: 5²+3 = 25+3 = 28 ✓',
        },

        // ── Q12 Medium ───────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Patroon begin met 2, 7, 14, 23. Vind die reël vir die nde term.',
          answer: 'n²+2n-1',
          checkMode: 'auto',
          correctAnswer: 'n²+2n-1',
          explanation: 'Verskille: 5, 7, 9 — neem met 2 toe, kwadratiese patroon.\nKontroleer n²+2n−1: n=1: 1+2−1=2 ✓, n=2: 4+4−1=7 ✓, n=3: 9+6−1=14 ✓, n=4: 16+8−1=23 ✓\nReël: nde term = n²+2n−1',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to investigate and extend numeric patterns, find differences and write the general rule using algebraic notation" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a numeric pattern with terms highlighted in blue, differences in orange and the derived rule in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING GEOMETRIC PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'investigating-geometric-patterns',
      title: 'Ondersoek van Geometriese Patrone',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek en brei <strong>geometriese patrone</strong> uit wat in fisiese of diagramvorm, in tabelle, en algebraïes met veranderlikes voorgestel word.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stapnommers')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('patroonvorms')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('algebraïese reël')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Vorme van voorstelling</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Diagramvorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Patrone wat as tekeninge of rangskikkings van vorms gewys word wat van een stap na die volgende groei.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Tabelvorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Tabel wat die ${bl('stapnommer')} koppel aan die aantal ${gr('vorms')} by daardie stap.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Algebraïese reël</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn ${or('Algebraïese uitdrukking')} in n wat die aantal vorms by enige stap gee.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Bou eers ʼn tabel</p>` +
        `<p style="margin:0;color:#166534;">Begin deur die ${gr('vorms')} by elke ${bl('stap')} te tel en die waardes in ʼn tabel in te voer. Soek dan na die patroon in die getalreeks en skryf die ${or('algebraïese reël')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Patroon van kolletjies vorm driehoeksgetalle — 1, 3, 6, 10. Vind die algebraïese reël.',
          answer: `nde term = ${or('n(n+1)/2')}`,
          steps: [
            `Identifiseer die ${gr('patroonvorms')}: ${bl('stap 1')} = 1, ${bl('stap 2')} = 3, ${bl('stap 3')} = 6, ${bl('stap 4')} = 10.`,
            `Dit is die <strong>driehoeksgetalreeks</strong>.`,
            `<strong>Reël:</strong> nde term = ${or('n(n+1)/2')}.`,
          ],
        },
        {
          question: "Lerato se patroon van vierkante het 4 vierkante in stap 1, 9 in stap 2, 16 in stap 3. Vind die reël en die 6de term.",
          answer: `Reël: ${or('(n+1)²')} · 6de term = ${gr('49')}`,
          steps: [
            `Teken die ${gr('patroonvorms')} aan: ${bl('stap 1')} = 4, ${bl('stap 2')} = 9, ${bl('stap 3')} = 16.`,
            `Let op dat 4 = 2², 9 = 3², 16 = 4² — dit volg <strong>(n+1)²</strong>.`,
            `<strong>Reël:</strong> nde term = ${or('(n+1)²')}.`,
            `6de term: (6+1)² = 7² = ${gr('49')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q4 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Geometriese patroon van kolletjies lewer die reeks 1, 3, 6, 10. Vind die reël vir die nde term.',
          answer: 'n(n+1)/2',
          checkMode: 'auto',
          correctAnswer: 'n(n+1)/2',
          explanation: 'Dit is die driehoeksgetalreeks.\nKontroleer: n=1: 1(2)/2=1 ✓, n=2: 2(3)/2=3 ✓, n=3: 3(4)/2=6 ✓, n=4: 4(5)/2=10 ✓\nReël: nde term = n(n+1)/2',
        },

        // ── Q5 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: "Lerato se patroon van vierkante het 4 vierkante in stap 1, 9 in stap 2, 16 in stap 3, en 25 in stap 4. Vind die reël en die 7de term.",
          answer: 'Reël: (n+1)². 7de term = (7+1)² = 64.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to investigate geometric patterns using diagrams and tables and write the algebraic rule for the nth term" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing triangular dot patterns at steps 1 to 4 with step numbers in blue, shapes in green and the algebraic rule in orange" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — JUSTIFYING GENERAL RULES IN ALGEBRAIC LANGUAGE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'justifying-general-rules',
      title: 'Regverdiging van Algemene Reëls in Algebraïese Taal',
      icon: '=',
      explanation:
        `<p style="margin-bottom:16px;">Ons beweeg verby die beskrywing van patrone in woorde na die <strong>skryf en regverdiging van reëls</strong> met algebraïese notasie, en toets die reël teen verskeie terme in die patroon om te bevestig dat dit konsekwent werk.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleurgids:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('reël getoets')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('verifikasiestappe')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bevestigde resultaat')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn reël te regverdig</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Skryf die reël')} — Stel die algebraïese uitdrukking duidelik, bv. 4n+1.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Vervang waardes')} — Vervang n met 1, 2, 3 (en meer indien nodig) en bereken elke resultaat.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Vergelyk en bevestig')} — Kontroleer elke resultaat teen die werklike term. As almal ooreenstem, is die reël ${gr('geverifieer')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Een teenvoorbeeld is genoeg om te weerlê</p>` +
        `<p style="margin:0;color:#991b1b;">As selfs <strong>een</strong> vervanging die verkeerde term lewer, is die ${bl('reël')} onjuis. Jy hoef nie elke term te toets nie — een mislukking is voldoende om die reël te verwerp.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Thabo beweer die reël vir 5, 9, 13, 17 is 4n+1. Verifieer dit vir die eerste drie terme.',
          answer: `${bl('Reël 4n+1')} is ${gr('geverifieer')} vir die eerste drie terme`,
          steps: [
            `${bl('Reël om te toets:')} 4n+1.`,
            `${or('n=1:')} 4(1)+1 = 5 — werklike term is 5. ${gr('✓')}`,
            `${or('n=2:')} 4(2)+1 = 9 — werklike term is 9. ${gr('✓')}`,
            `${or('n=3:')} 4(3)+1 = 13 — werklike term is 13. ${gr('✓')}`,
            `<strong>Gevolgtrekking:</strong> Die reël is ${gr('geverifieer')}.`,
          ],
        },
        {
          question: 'Amahle sê die patroon 2, 6, 12, 20 volg die reël n(n+1). Kontroleer dit vir n=4.',
          answer: `${bl('Reël n(n+1)')} ${gr('geld vir n=4')}`,
          steps: [
            `${bl('Reël om te toets:')} n(n+1).`,
            `${or('Vervang n=4:')} 4(4+1) = 4(5) = 20.`,
            `Die werklike 4de term is 20. ${gr('✓')}`,
            `<strong>Gevolgtrekking:</strong> Die reël ${gr('geld vir die 4de term')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        // ── Q3 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê die patroon 6, 11, 18, 27 volg die reël n²+n+4. Verifieer dit vir n=1 en n=2.',
          answer: 'n=1: 1+1+4=6 ✓. n=2: 4+2+4=10, maar die werklike term is 11. Die reël geld nie — dit is onjuis.',
          checkMode: 'self',
        },

        // ── Q7 Medium ────────────────────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'Verifieer dat die reël 3n+2 werk vir die patroon 5, 8, 11, 14 by n=3.',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja', 'JA'],
          explanation: 'Vervang n=3 in 3n+2: 3(3)+2 = 9+2 = 11.\nDie 3de term van die patroon is 11 ✓\nDie reël geld by n=3.',
        },

        // ── Q8 Hard ──────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Thabo beweer die patroon 1, 8, 27, 64 volg die reël n³. Verifieer dit vir n=4.',
          answer: 'n³ = 4³ = 64 ✓. Die reël is geverifieer.',
          checkMode: 'self',
        },

        // ── Q10 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Amahle sê die reël vir die patroon 0, 3, 8, 15 is n²−1. Verifieer dit vir n=1, n=2, en n=3.',
          answer: 'n=1: 1−1=0 ✓. n=2: 4−1=3 ✓. n=3: 9−1=8 ✓. Die reël geld.',
          checkMode: 'self',
        },

        // ── Q13 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Sipho sê om elke term in ʼn patroon te verdubbel, verdubbel altyd die verskil tussen terme. Is hy korrek? Verduidelik met ʼn voorbeeld.',
          answer: 'Ja — byvoorbeeld die patroon 2, 4, 6, 8 het ʼn verskil van 2. Verdubbeling gee 4, 8, 12, 16 met ʼn verskil van 4, wat dubbel die oorspronklike verskil is.',
          checkMode: 'self',
        },

        // ── Q14 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Vind die 12de term van die patroon met reël n(n+2).',
          answer: '168',
          checkMode: 'auto',
          correctAnswer: '168',
          explanation: 'Vervang n=12: 12(12+2) = 12 × 14 = 168 ✓',
        },

        // ── Q15 Hard ─────────────────────────────────────────────────────────
        {
          difficulty: 'Hard',
          question: 'Lerato sê die patroon 5, 14, 27, 44 volg die reël 2n²+n+2. Verifieer dit vir n=1 en n=4.',
          answer: 'n=1: 2+1+2=5 ✓. n=4: 32+4+2=38, maar die werklike term is 44. Die reël is onjuis.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to justify an algebraic rule by substituting values and comparing with actual pattern terms" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the verification process with the rule tested in blue, substitution steps in orange and confirmed results in green" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het numeriese en geometriese patrone bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip van patrone. Gaan enige gemiste vrae weer deur en mik vir volpunte.' },
    { minScore: 8, message: 'Goeie poging! Gaan die afdelings waar jy gesukkel het weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer elke afdeling versigtig deurwerk.' },
  ],
}
