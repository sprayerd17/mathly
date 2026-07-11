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
        '<VideoPlaceholder label="Kort video wat wys hoe om numeriese patrone te ondersoek en uit te brei, verskille te vind en die algemene reël in algebraïese notasie te skryf" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn numeriese patroon wys met terme uitgelig in blou, verskille in oranje en die afgeleide reël in groen" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om geometriese patrone met diagramme en tabelle te ondersoek en die algebraïese reël vir die nde term te skryf" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat driehoekige puntpatrone by stappe 1 tot 4 wys met stapnommers in blou, vorms in groen en die algebraïese reël in oranje" />',
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
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn algebraïese reël te regverdig deur waardes te vervang en met werklike patroonterme te vergelyk" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die verifikasieproses wys met die reël getoets in blou, vervangingstappe in oranje en bevestigde resultate in groen" />',
    },
  ],
  scoreMessages: [
    { minScore: 15, message: 'Uitstekend! Jy het numeriese en geometriese patrone bemeester.' },
    { minScore: 12, message: 'Goeie werk! Jy het ʼn sterk begrip van patrone. Gaan enige gemiste vrae weer deur en mik vir volpunte.' },
    { minScore: 8, message: 'Goeie poging! Gaan die afdelings waar jy gesukkel het weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer elke afdeling versigtig deurwerk.' },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-3): Numeriese reekse (volgende/ontbrekende term, lineêr & vermenigvuldigend)
    // Blok 2 (4-7): Vind die algemene term algebraïes (lineêr)
    // Blok 3 (8-10): Kwadratiese/nie-lineêre reekse (algemene term)
    // Blok 4 (11-13): Geometriese/groeiende patrone [DIAGRAM-GEMERK]
    // Blok 5 (14-16): Beskrywing/uitbreiding van patrone + foutopsporing
    // Blok 6 (17-19): Multi-stap/werklike-lewe patroonwoordprobleme
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1: Numeriese reekse (volgende/ontbrekende term) ─────────────
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 5, 12, 19, 26, 33, ?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40'], explanation: 'Die konstante verskil is 7 (12−5=7, 19−12=7, 26−19=7, 33−26=7). Volgende term: 33 + 7 = 40 ✓' },
        { difficulty: 'Easy', question: 'ʼn Spaarrekening begin met R2 400 en groei met R150 elke maand: R2 400, R2 550, R2 700, R2 850. Hoeveel sal in die rekening wees die volgende maand?', answer: '3000', checkMode: 'auto', correctAnswer: '3000', correctAnswers: ['3000', 'R3000', 'R3 000'], explanation: 'Die reël is voeg R150 by elke keer. R2 850 + R150 = R3 000 ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 8, ?, 26, 35.', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17'], explanation: 'Die bekende verskil is 35 − 26 = 9, so die reël is voeg 9 by elke keer. 8 + 9 = 17. Kontroleer: 26 − 17 = 9 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "vermenigvuldig die term met 2, voeg dan 3 by", beginnend by 4: 4, 11, 25, 53. Wat is die volgende term?', answer: '109', checkMode: 'auto', correctAnswer: '109', correctAnswers: ['109'], explanation: 'Pas die reël toe op 53: 53 × 2 = 106, dan 106 + 3 = 109 ✓' },

        // ── Blok 2: Vind die algemene term algebraïes (lineêr) ───────────────
        { difficulty: 'Medium', question: 'Beskryf die reël vir die patroon 6, 10, 14, 18 in woorde, en skryf dit dan algebraïes as die nde term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'voeg 4 by elke keer', checkMode: 'self', answer: 'Begin by 6 en voeg 4 by elke keer om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '4n+2', correctAnswers: ['4n+2', '4n + 2'], explanation: 'Konstante verskil = 4. Vervang n=1: 4(1)+c=6 → c=2. Reël: nde term = 4n+2. Kontroleer: 4(2)+2=10 ✓, 4(3)+2=14 ✓, 4(4)+2=18 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Vind die nde-term-reël vir die patroon 5, 13, 21, 29.', answer: 'nde term = 8n − 3', checkMode: 'auto', correctAnswer: '8n-3', correctAnswers: ['8n-3', '8n − 3', 'nde term=8n-3', 'nde term = 8n − 3'], explanation: 'Konstante verskil = 8. Vervang n=1: 8(1)+c=5 → c=−3. Reël: nde term = 8n − 3. Kontroleer: 8(2)−3=13 ✓, 8(3)−3=21 ✓, 8(4)−3=29 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 9, 16, 23, 30.\n\na) Vind die nde-term-reël.\nb) Vind die 25ste term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: '7n+2', correctAnswers: ['7n+2', '7n + 2', 'nde term=7n+2'], explanation: 'Konstante verskil = 7. Vervang n=1: 7(1)+c=9 → c=2. Reël: nde term = 7n+2. Kontroleer: 7(2)+2=16 ✓, 7(3)+2=23 ✓, 7(4)+2=30 ✓' },
          { label: 'b) 25ste term', correctAnswer: '177', explanation: '7(25) + 2 = 175 + 2 = 177.' },
        ] },
        { difficulty: 'Hard', question: 'Thabo sê die patroon 4, 9, 14, 19 het die reël nde term = 4n + 1. Toets sy reël teen elke term. Is hy korrek, en indien nie, wat is die korrekte reël?', answer: 'Thabo is verkeerd. Kontroleer n=1: 4(1)+1=5, nie 4 nie ✗ — sy reël faal van die heel eerste term af. Die konstante verskil is eintlik 5 (9−4=5, 14−9=5, 19−14=5), so die reël behoort met 5n te begin. Vervang n=1: 5(1)+c=4 → c=−1. Die korrekte reël is nde term = 5n − 1. Kontroleer: 5(1)−1=4 ✓, 5(2)−1=9 ✓, 5(3)−1=14 ✓, 5(4)−1=19 ✓.', checkMode: 'self' },

        // ── Blok 3: Kwadratiese/nie-lineêre reekse (algemene term) ───────────
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 5, 8, 13, 20. Die verskille is nie konstant nie, so hierdie patroon is kwadraties.\n\na) Vind die nde-term-reël.\nb) Vind die 15de term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: 'n²+4', correctAnswers: ['n²+4', 'n^2+4', 'nde term=n²+4'], explanation: 'Verskille: 3, 5, 7 — neem met 2 toe, wat dui op n². Kontroleer n²+4: 1+4=5 ✓, 4+4=8 ✓, 9+4=13 ✓, 16+4=20 ✓' },
          { label: 'b) 15de term', correctAnswer: '229', explanation: '15² + 4 = 225 + 4 = 229.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon het terme 3, 10, 21, 36. Die eerste verskille is 7, 11, 15, en die tweede verskille is konstant op 4, so die nde term het die vorm 2n² + bn + c.\n\na) Vind die nde-term-reël.\nb) Vind die 10de term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: '2n²+n', correctAnswers: ['2n²+n', '2n^2+n', 'nde term=2n²+n'], explanation: 'Tweede verskil = 4, so a = 4÷2 = 2. Vervang n=1 in 2n²+bn+c=3: 2+b+c=3. Vervang n=2 in 2n²+bn+c=10: 8+2b+c=10. Aftrekking gee b=1, dan c=0. Reël: nde term = 2n²+n. Kontroleer: 2(1)+1=3 ✓, 2(4)+2=10 ✓, 2(9)+3=21 ✓, 2(16)+4=36 ✓' },
          { label: 'b) 10de term', correctAnswer: '210', explanation: '2(10)² + 10 = 200 + 10 = 210.' },
        ] },
        { difficulty: 'Hard', question: 'Lerato sê die patroon 2, 9, 20, 35 volg die reël nde term = n² + 2n − 1. Verifieer dit vir n = 1, 2, 3 en 4. As die reël verkeerd is, vind die korrekte een.', answer: 'Kontroleer n=1: 1+2−1=2 ✓. Kontroleer n=2: 4+4−1=7, maar die werklike term is 9 ✗ — die reël faal van die tweede term af, so dit is onjuis. Die eerste verskille is 7, 11, 15, en die tweede verskil is konstant op 4, so a = 4÷2 = 2. Vervang n=1 in 2n²+bn+c=2: 2+b+c=2. Vervang n=2 in 2n²+bn+c=9: 8+2b+c=9. Aftrekking gee b=1, dan c=−1. Die korrekte reël is nde term = 2n² + n − 1. Kontroleer: 2(1)+1−1=2 ✓, 2(4)+2−1=9 ✓, 2(9)+3−1=20 ✓, 2(16)+4−1=35 ✓.', checkMode: 'self' },

        // ── Blok 4: Geometriese/groeiende patrone [DIAGRAM-GEMERK] ───────────
        { difficulty: 'Medium', question: 'ʼn Patroon van vierkante word met vuurhoutjies gebou, soos gewys, met elke nuwe vierkant aan die vorige een verbind en ʼn sy gedeel. Patroon 1 is ʼn enkele vierkant gemaak van 4 vuurhoutjies. Patroon 2 het twee vierkante in ʼn ry verbind, wat een vuurhoutjie deel, en gebruik altesaam 7 vuurhoutjies. Patroon 3 het drie vierkante in ʼn ry verbind, en gebruik altesaam 10 vuurhoutjies. Hoeveel vuurhoutjies word benodig vir Patroon 9?', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 vuurhoutjies'], explanation: 'Die patroon neem met 3 vuurhoutjies toe elke keer: 4, 7, 10 (verskille van 3). Reël: vuurhoutjies = 3n + 1. Kontroleer: 3(1)+1=4 ✓, 3(2)+1=7 ✓, 3(3)+1=10 ✓. Patroon 9: 3(9)+1 = 27+1 = 28 vuurhoutjies ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="18" y1="60" x2="38" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="78" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="60" x2="18" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="60" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">4 vuurhoutjies</text><g><line x1="85" y1="60" x2="103" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="121" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="78" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="78" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="60" x2="85" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121" y1="60" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="103" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="103" y="115" text-anchor="middle" fill="#374151" font-size="11">7 vuurhoutjies</text><g><line x1="160" y1="60" x2="178" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="196" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="214" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="78" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="78" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="78" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="60" x2="160" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="60" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="187" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="187" y="115" text-anchor="middle" fill="#374151" font-size="11">10 vuurhoutjies</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Patroon van teëls word in ʼn soliede vierkantrooster gerangskik, soos gewys. Patroon 1 is ʼn 1×1-rooster gemaak van 1 teël. Patroon 2 is ʼn 2×2-rooster gemaak van 4 teëls. Patroon 3 is ʼn 3×3-rooster gemaak van 9 teëls. Vind die reël vir die aantal teëls by patroon n, en gebruik dit dan om die aantal teëls in Patroon 7 te vind.', answer: '', checkMode: 'auto', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><rect x="24" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="32" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="32" y="105" text-anchor="middle" fill="#374151" font-size="11">1 teël</text><g><rect x="88" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="88" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="104" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="104" y="105" text-anchor="middle" fill="#374151" font-size="11">4 teëls</text><g><rect x="160" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="176" y="105" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="176" y="120" text-anchor="middle" fill="#374151" font-size="11">9 teëls</text></svg>', parts: [
          { label: 'a) Reël (teëls = ...)', correctAnswer: 'teëls = n²', correctAnswers: ['teëls = n²', 'teëls = n^2', 'n²', 'n^2'], explanation: 'Elke patroon is ʼn vierkantrooster met sy n, so die totale teëls is gelyk aan n². Kontroleer: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓' },
          { label: 'b) Teëls in Patroon 7', correctAnswer: '49', explanation: '7² = 49 teëls.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Ketting van sesshoeke word met vuurhoutjies gebou, soos gewys, met elke nuwe sesshoek aan die vorige een verbind en ʼn sy gedeel. Patroon 1 is ʼn enkele sesshoek gemaak van 6 vuurhoutjies. Patroon 2 het twee sesshoeke in ʼn ry verbind, wat een vuurhoutjie deel, en gebruik altesaam 11 vuurhoutjies. Patroon 3 het drie sesshoeke in ʼn ry verbind, en gebruik altesaam 16 vuurhoutjies. Zinhle sê Patroon 10 sal 52 vuurhoutjies benodig. Kontroleer haar antwoord met die reël, en verbeter dit indien sy verkeerd is.', answer: 'Zinhle is verkeerd. Die patroon neem met 5 vuurhoutjies toe elke keer: 6, 11, 16 (verskille van 5). Reël: vuurhoutjies = 5n + 1. Kontroleer: 5(1)+1=6 ✓, 5(2)+1=11 ✓, 5(3)+1=16 ✓. Vir Patroon 10: 5(10)+1 = 50+1 = 51 vuurhoutjies, nie 52 nie. Zinhle het waarskynlik die gedeelde vuurhoutjies verkeerd getel. Die korrekte antwoord is 51 vuurhoutjies.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="28" y1="53" x2="38" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="59" x2="38" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="71" x2="28" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="28" y1="77" x2="18" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="71" x2="18" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="59" x2="28" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">6 vuurhoutjies</text><g><line x1="90" y1="53" x2="100" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="71" x2="90" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="77" x2="80" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="71" x2="80" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="59" x2="90" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="53" x2="120" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="59" x2="120" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="71" x2="110" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="77" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="110" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="100" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="100" y="115" text-anchor="middle" fill="#374151" font-size="11">11 vuurhoutjies</text><g><line x1="160" y1="53" x2="170" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="71" x2="160" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="77" x2="150" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="71" x2="150" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="59" x2="160" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="53" x2="190" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="71" x2="180" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="77" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="180" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="53" x2="210" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="59" x2="210" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="71" x2="200" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="77" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="200" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="180" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="180" y="115" text-anchor="middle" fill="#374151" font-size="11">16 vuurhoutjies</text></svg>' },

        // ── Blok 5: Beskrywing/uitbreiding van patrone + foutopsporing ───────
        { difficulty: 'Medium', question: 'Brei die patroon 4, 10, 16, 22 uit deur die volgende twee terme te skryf, en beskryf die reël in woorde.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volgende twee terme', correctAnswer: '28,34', correctAnswers: ['28,34', '28, 34'], explanation: 'Konstante verskil = 6. 22+6=28, 28+6=34.' },
          { label: 'b) Reël in woorde', correctAnswer: 'voeg 6 by elke keer', checkMode: 'self', answer: 'Begin by 4 en voeg 6 by elke keer om die volgende term te kry.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon neem soos volg af: 50, 44, 38, 32. Beskryf die reël in woorde, en skryf dan die nde term algebraïes.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'trek 6 af elke keer', checkMode: 'self', answer: 'Begin by 50 en trek 6 af elke keer om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '56-6n', correctAnswers: ['56-6n', '56 − 6n', '-6n+56', '−6n+56'], explanation: 'Konstante verskil = −6. Vervang n=1: −6(1)+c=50 → c=56. Reël: nde term = 56 − 6n. Kontroleer: 56−6(2)=44 ✓, 56−6(3)=38 ✓, 56−6(4)=32 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Precious sê die patroon 12, 19, 26, 33 het die reël nde term = 7n, omdat die konstante verskil 7 is. Toets haar reël teen elke term. Is sy korrek, en indien nie, wat is die korrekte reël?', answer: 'Precious is verkeerd. ʼn Konstante verskil van 7 bepaal slegs die koëffisiënt van n — dit waarborg nie dat die reël 7n is nie. Kontroleer n=1: 7(1)=7, nie 12 nie ✗. Vervang n=1 in 7n+c=12 gee c=5. Die korrekte reël is nde term = 7n + 5. Kontroleer: 7(1)+5=12 ✓, 7(2)+5=19 ✓, 7(3)+5=26 ✓, 7(4)+5=33 ✓.', checkMode: 'self' },

        // ── Blok 6: Multi-stap/werklike-lewe patroonwoordprobleme ────────────
        { difficulty: 'Medium-Hard', question: 'ʼn Selfoonkontrak kos R100 om te aktiveer, plus R20 per maand, volgens die reël: koste = 20 × maande + 100. Voltooi die tabel vir 3, 6 en 10 maande.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 3 maande', correctAnswer: '160', explanation: '20 × 3 + 100 = 60 + 100 = 160' },
          { label: 'b) Koste vir 6 maande', correctAnswer: '220', explanation: '20 × 6 + 100 = 120 + 100 = 220' },
          { label: 'c) Koste vir 10 maande', correctAnswer: '300', explanation: '20 × 10 + 100 = 200 + 100 = 300' },
        ] },
        { difficulty: 'Hard', question: 'Gebruik die selfoonkontrak-reël koste = 20 × maande + 100, na hoeveel volle maande sal die totale koste eerste ten minste R400 bereik?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Stel op: 20 × maande + 100 ≥ 400, so 20 × maande ≥ 300, wat maande ≥ 15 gee. Kontroleer: 14 maande gee 20(14)+100 = 380 (te min). 15 maande gee 20(15)+100 = 400 ✓. 15 maande is die eerste om ten minste R400 te bereik.' },
        { difficulty: 'Hard', question: 'Blikkies word gestapel sodat die onderste ry 20 blikkies het, en elke ry hoër het 3 minder blikkies as die een onder dit, volgens die reël: blikkies in ry n = 23 − 3n.\n\na) Hoeveel blikkies is in ry 5?\nb) Watter ry het presies 2 blikkies?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Blikkies in ry 5', correctAnswer: '8', explanation: '23 − 3(5) = 23 − 15 = 8 blikkies.' },
          { label: 'b) Rynommer met 2 blikkies', correctAnswer: '7', explanation: 'Stel op: 23 − 3 × ry = 2. Trek 23 van albei kante af: −3 × ry = −21. Deel deur −3: ry = 7. Kontroleer: 23−3(7)=23−21=2 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het numeriese reekse, algemene-term-reëls, kwadratiese patrone en geometriese patrone bemeester — volpunte!' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van numeriese en geometriese patrone. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van die algemene term weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal daar uitkom!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde blokuitleg as Stel 1, nuwe bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1: Numeriese reekse (volgende/ontbrekende term) ─────────────
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 7, 15, 23, 31, 39, ?', answer: '47', checkMode: 'auto', correctAnswer: '47', correctAnswers: ['47'], explanation: 'Die konstante verskil is 8 (15−7=8, 23−15=8, 31−23=8, 39−31=8). Volgende term: 39 + 8 = 47 ✓' },
        { difficulty: 'Easy', question: 'ʼn Spaarrekening begin met R1 800 en groei met R200 elke maand: R1 800, R2 000, R2 200, R2 400. Hoeveel sal in die rekening wees die volgende maand?', answer: '2600', checkMode: 'auto', correctAnswer: '2600', correctAnswers: ['2600', 'R2600', 'R2 600'], explanation: 'Die reël is voeg R200 by elke keer. R2 400 + R200 = R2 600 ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 10, ?, 32, 43.', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21'], explanation: 'Die bekende verskil is 43 − 32 = 11, so die reël is voeg 11 by elke keer. 10 + 11 = 21. Kontroleer: 32 − 21 = 11 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "vermenigvuldig die term met 2, voeg dan 1 by", beginnend by 3: 3, 7, 15, 31. Wat is die volgende term?', answer: '63', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63'], explanation: 'Pas die reël toe op 31: 31 × 2 = 62, dan 62 + 1 = 63 ✓' },

        // ── Blok 2: Vind die algemene term algebraïes (lineêr) ───────────────
        { difficulty: 'Medium', question: 'Beskryf die reël vir die patroon 8, 13, 18, 23 in woorde, en skryf dit dan algebraïes as die nde term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'voeg 5 by elke keer', checkMode: 'self', answer: 'Begin by 8 en voeg 5 by elke keer om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '5n+3', correctAnswers: ['5n+3', '5n + 3'], explanation: 'Konstante verskil = 5. Vervang n=1: 5(1)+c=8 → c=3. Reël: nde term = 5n+3. Kontroleer: 5(2)+3=13 ✓, 5(3)+3=18 ✓, 5(4)+3=23 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Vind die nde-term-reël vir die patroon 6, 17, 28, 39.', answer: 'nde term = 11n − 5', checkMode: 'auto', correctAnswer: '11n-5', correctAnswers: ['11n-5', '11n − 5', 'nde term=11n-5', 'nde term = 11n − 5'], explanation: 'Konstante verskil = 11. Vervang n=1: 11(1)+c=6 → c=−5. Reël: nde term = 11n − 5. Kontroleer: 11(2)−5=17 ✓, 11(3)−5=28 ✓, 11(4)−5=39 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 11, 18, 25, 32.\n\na) Vind die nde-term-reël.\nb) Vind die 30ste term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: '7n+4', correctAnswers: ['7n+4', '7n + 4', 'nde term=7n+4'], explanation: 'Konstante verskil = 7. Vervang n=1: 7(1)+c=11 → c=4. Reël: nde term = 7n+4. Kontroleer: 7(2)+4=18 ✓, 7(3)+4=25 ✓, 7(4)+4=32 ✓' },
          { label: 'b) 30ste term', correctAnswer: '214', explanation: '7(30) + 4 = 210 + 4 = 214.' },
        ] },
        { difficulty: 'Hard', question: 'Sipho sê die patroon 7, 12, 17, 22 het die reël nde term = 5n. Toets sy reël teen elke term. Is hy korrek, en indien nie, wat is die korrekte reël?', answer: 'Sipho is verkeerd. Kontroleer n=1: 5(1)=5, nie 7 nie ✗ — sy reël faal van die heel eerste term af. Die konstante verskil is 5 (12−7=5, 17−12=5, 22−17=5), so die reël behoort met 5n te begin. Vervang n=1: 5(1)+c=7 → c=2. Die korrekte reël is nde term = 5n + 2. Kontroleer: 5(1)+2=7 ✓, 5(2)+2=12 ✓, 5(3)+2=17 ✓, 5(4)+2=22 ✓.', checkMode: 'self' },

        // ── Blok 3: Kwadratiese/nie-lineêre reekse (algemene term) ───────────
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 6, 9, 14, 21. Die verskille is nie konstant nie, so hierdie patroon is kwadraties.\n\na) Vind die nde-term-reël.\nb) Vind die 18de term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: 'n²+5', correctAnswers: ['n²+5', 'n^2+5', 'nde term=n²+5'], explanation: 'Verskille: 3, 5, 7 — neem met 2 toe, wat dui op n². Kontroleer n²+5: 1+5=6 ✓, 4+5=9 ✓, 9+5=14 ✓, 16+5=21 ✓' },
          { label: 'b) 18de term', correctAnswer: '329', explanation: '18² + 5 = 324 + 5 = 329.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon het terme 4, 13, 26, 43. Die eerste verskille is 9, 13, 17, en die tweede verskille is konstant op 4, so die nde term het die vorm 2n² + bn + c.\n\na) Vind die nde-term-reël.\nb) Vind die 12de term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: '2n²+3n-1', correctAnswers: ['2n²+3n-1', '2n^2+3n-1', '2n²+3n−1', 'nde term=2n²+3n-1'], explanation: 'Tweede verskil = 4, so a = 4÷2 = 2. Vervang n=1 in 2n²+bn+c=4: 2+b+c=4. Vervang n=2 in 2n²+bn+c=13: 8+2b+c=13. Aftrekking gee b=3, dan c=−1. Reël: nde term = 2n²+3n−1. Kontroleer: 2(1)+3−1=4 ✓, 2(4)+6−1=13 ✓, 2(9)+9−1=26 ✓, 2(16)+12−1=43 ✓' },
          { label: 'b) 12de term', correctAnswer: '323', explanation: '2(12)² + 3(12) − 1 = 288 + 36 − 1 = 323.' },
        ] },
        { difficulty: 'Hard', question: 'Amahle sê die patroon 1, 7, 17, 31 volg die reël nde term = n² + 3n − 3. Verifieer dit vir n = 1, 2, 3 en 4. As die reël verkeerd is, vind die korrekte een.', answer: 'Kontroleer n=1: 1+3−3=1 ✓. Kontroleer n=2: 4+6−3=7 ✓. Kontroleer n=3: 9+9−3=15, maar die werklike term is 17 ✗ — die reël faal van die derde term af, so dit is onjuis. Die eerste verskille is 6, 10, 14, en die tweede verskil is konstant op 4, so a = 4÷2 = 2. Vervang n=1 in 2n²+bn+c=1: 2+b+c=1. Vervang n=2 in 2n²+bn+c=7: 8+2b+c=7. Aftrekking gee b=0, dan c=−1. Die korrekte reël is nde term = 2n² − 1. Kontroleer: 2(1)−1=1 ✓, 2(4)−1=7 ✓, 2(9)−1=17 ✓, 2(16)−1=31 ✓.', checkMode: 'self' },

        // ── Blok 4: Geometriese/groeiende patrone [DIAGRAM-GEMERK] ───────────
        { difficulty: 'Medium', question: 'ʼn Patroon van vierkante word met vuurhoutjies gebou, soos gewys, met elke nuwe vierkant aan die vorige een verbind en ʼn sy gedeel. Patroon 1 is ʼn enkele vierkant gemaak van 4 vuurhoutjies. Patroon 2 het twee vierkante in ʼn ry verbind, wat een vuurhoutjie deel, en gebruik altesaam 7 vuurhoutjies. Patroon 3 het drie vierkante in ʼn ry verbind, en gebruik altesaam 10 vuurhoutjies. Hoeveel vuurhoutjies word benodig vir Patroon 13?', answer: '40', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 vuurhoutjies'], explanation: 'Die patroon neem met 3 vuurhoutjies toe elke keer: 4, 7, 10 (verskille van 3). Reël: vuurhoutjies = 3n + 1. Kontroleer: 3(1)+1=4 ✓, 3(2)+1=7 ✓, 3(3)+1=10 ✓. Patroon 13: 3(13)+1 = 39+1 = 40 vuurhoutjies ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="18" y1="60" x2="38" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="78" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="60" x2="18" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="60" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">4 vuurhoutjies</text><g><line x1="85" y1="60" x2="103" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="121" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="78" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="78" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="60" x2="85" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121" y1="60" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="103" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="103" y="115" text-anchor="middle" fill="#374151" font-size="11">7 vuurhoutjies</text><g><line x1="160" y1="60" x2="178" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="196" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="214" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="78" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="78" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="78" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="60" x2="160" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="60" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="187" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="187" y="115" text-anchor="middle" fill="#374151" font-size="11">10 vuurhoutjies</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Patroon van teëls word in ʼn soliede vierkantrooster gerangskik, soos gewys. Patroon 1 is ʼn 1×1-rooster gemaak van 1 teël. Patroon 2 is ʼn 2×2-rooster gemaak van 4 teëls. Patroon 3 is ʼn 3×3-rooster gemaak van 9 teëls. Vind die reël vir die aantal teëls by patroon n, en gebruik dit dan om die aantal teëls in Patroon 8 te vind.', answer: '', checkMode: 'auto', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><rect x="24" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="32" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="32" y="105" text-anchor="middle" fill="#374151" font-size="11">1 teël</text><g><rect x="88" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="88" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="104" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="104" y="105" text-anchor="middle" fill="#374151" font-size="11">4 teëls</text><g><rect x="160" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="176" y="105" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="176" y="120" text-anchor="middle" fill="#374151" font-size="11">9 teëls</text></svg>', parts: [
          { label: 'a) Reël (teëls = ...)', correctAnswer: 'teëls = n²', correctAnswers: ['teëls = n²', 'teëls = n^2', 'n²', 'n^2'], explanation: 'Elke patroon is ʼn vierkantrooster met sy n, so die totale teëls is gelyk aan n². Kontroleer: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓' },
          { label: 'b) Teëls in Patroon 8', correctAnswer: '64', explanation: '8² = 64 teëls.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Ketting van sesshoeke word met vuurhoutjies gebou, soos gewys, met elke nuwe sesshoek aan die vorige een verbind en ʼn sy gedeel. Patroon 1 is ʼn enkele sesshoek gemaak van 6 vuurhoutjies. Patroon 2 het twee sesshoeke in ʼn ry verbind, wat een vuurhoutjie deel, en gebruik altesaam 11 vuurhoutjies. Patroon 3 het drie sesshoeke in ʼn ry verbind, en gebruik altesaam 16 vuurhoutjies. Kagiso sê Patroon 12 sal 63 vuurhoutjies benodig. Kontroleer sy antwoord met die reël, en verbeter dit indien hy verkeerd is.', answer: 'Kagiso is verkeerd. Die patroon neem met 5 vuurhoutjies toe elke keer: 6, 11, 16 (verskille van 5). Reël: vuurhoutjies = 5n + 1. Kontroleer: 5(1)+1=6 ✓, 5(2)+1=11 ✓, 5(3)+1=16 ✓. Vir Patroon 12: 5(12)+1 = 60+1 = 61 vuurhoutjies, nie 63 nie. Kagiso het waarskynlik die gedeelde vuurhoutjies verkeerd getel. Die korrekte antwoord is 61 vuurhoutjies.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="28" y1="53" x2="38" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="59" x2="38" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="71" x2="28" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="28" y1="77" x2="18" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="71" x2="18" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="59" x2="28" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">6 vuurhoutjies</text><g><line x1="90" y1="53" x2="100" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="71" x2="90" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="77" x2="80" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="71" x2="80" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="59" x2="90" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="53" x2="120" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="59" x2="120" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="71" x2="110" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="77" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="110" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="100" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="100" y="115" text-anchor="middle" fill="#374151" font-size="11">11 vuurhoutjies</text><g><line x1="160" y1="53" x2="170" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="71" x2="160" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="77" x2="150" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="71" x2="150" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="59" x2="160" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="53" x2="190" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="71" x2="180" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="77" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="180" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="53" x2="210" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="59" x2="210" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="71" x2="200" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="77" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="200" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="180" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="180" y="115" text-anchor="middle" fill="#374151" font-size="11">16 vuurhoutjies</text></svg>' },

        // ── Blok 5: Beskrywing/uitbreiding van patrone + foutopsporing ───────
        { difficulty: 'Medium', question: 'Brei die patroon 5, 12, 19, 26 uit deur die volgende twee terme te skryf, en beskryf die reël in woorde.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volgende twee terme', correctAnswer: '33,40', correctAnswers: ['33,40', '33, 40'], explanation: 'Konstante verskil = 7. 26+7=33, 33+7=40.' },
          { label: 'b) Reël in woorde', correctAnswer: 'voeg 7 by elke keer', checkMode: 'self', answer: 'Begin by 5 en voeg 7 by elke keer om die volgende term te kry.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon neem soos volg af: 60, 53, 46, 39. Beskryf die reël in woorde, en skryf dan die nde term algebraïes.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'trek 7 af elke keer', checkMode: 'self', answer: 'Begin by 60 en trek 7 af elke keer om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '67-7n', correctAnswers: ['67-7n', '67 − 7n', '-7n+67', '−7n+67'], explanation: 'Konstante verskil = −7. Vervang n=1: −7(1)+c=60 → c=67. Reël: nde term = 67 − 7n. Kontroleer: 67−7(2)=53 ✓, 67−7(3)=46 ✓, 67−7(4)=39 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Bongani sê die patroon 15, 23, 31, 39 het die reël nde term = 8n, omdat die konstante verskil 8 is. Toets sy reël teen elke term. Is hy korrek, en indien nie, wat is die korrekte reël?', answer: 'Bongani is verkeerd. ʼn Konstante verskil van 8 bepaal slegs die koëffisiënt van n — dit waarborg nie dat die reël 8n is nie. Kontroleer n=1: 8(1)=8, nie 15 nie ✗. Vervang n=1 in 8n+c=15 gee c=7. Die korrekte reël is nde term = 8n + 7. Kontroleer: 8(1)+7=15 ✓, 8(2)+7=23 ✓, 8(3)+7=31 ✓, 8(4)+7=39 ✓.', checkMode: 'self' },

        // ── Blok 6: Multi-stap/werklike-lewe patroonwoordprobleme ────────────
        { difficulty: 'Medium-Hard', question: 'ʼn Internetkontrak kos R150 om te aktiveer, plus R25 per maand, volgens die reël: koste = 25 × maande + 150. Voltooi die tabel vir 3, 6 en 10 maande.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 3 maande', correctAnswer: '225', explanation: '25 × 3 + 150 = 75 + 150 = 225' },
          { label: 'b) Koste vir 6 maande', correctAnswer: '300', explanation: '25 × 6 + 150 = 150 + 150 = 300' },
          { label: 'c) Koste vir 10 maande', correctAnswer: '400', explanation: '25 × 10 + 150 = 250 + 150 = 400' },
        ] },
        { difficulty: 'Hard', question: 'Gebruik die internetkontrak-reël koste = 25 × maande + 150, na hoeveel volle maande sal die totale koste eerste ten minste R550 bereik?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16'], explanation: 'Stel op: 25 × maande + 150 ≥ 550, so 25 × maande ≥ 400, wat maande ≥ 16 gee. Kontroleer: 15 maande gee 25(15)+150 = 525 (te min). 16 maande gee 25(16)+150 = 550 ✓. 16 maande is die eerste om ten minste R550 te bereik.' },
        { difficulty: 'Hard', question: 'Blikkies word gestapel sodat die onderste ry 24 blikkies het, en elke ry hoër het 2 minder blikkies as die een onder dit, volgens die reël: blikkies in ry n = 26 − 2n.\n\na) Hoeveel blikkies is in ry 6?\nb) Watter ry het presies 4 blikkies?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Blikkies in ry 6', correctAnswer: '14', explanation: '26 − 2(6) = 26 − 12 = 14 blikkies.' },
          { label: 'b) Rynommer met 4 blikkies', correctAnswer: '11', explanation: 'Stel op: 26 − 2 × ry = 4. Trek 26 van albei kante af: −2 × ry = −22. Deel deur −2: ry = 11. Kontroleer: 26−2(11)=26−22=4 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het numeriese reekse, algemene-term-reëls, kwadratiese patrone en geometriese patrone bemeester — volpunte!' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van numeriese en geometriese patrone. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van die algemene term weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal daar uitkom!' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde blokuitleg as Stel 1 en 2, nuwe bewoording/konteks
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1: Numeriese reekse (volgende/ontbrekende term) ─────────────
        { difficulty: 'Easy', question: 'Vind die volgende term in die patroon: 9, 16, 23, 30, 37, ?', answer: '44', checkMode: 'auto', correctAnswer: '44', correctAnswers: ['44'], explanation: 'Die konstante verskil is 7 (16−9=7, 23−16=7, 30−23=7, 37−30=7). Volgende term: 37 + 7 = 44 ✓' },
        { difficulty: 'Easy', question: 'ʼn Skuld begin by R3 200 en verminder met R250 elke maand: R3 200, R2 950, R2 700, R2 450. Hoeveel sal geskuld word die volgende maand?', answer: '2200', checkMode: 'auto', correctAnswer: '2200', correctAnswers: ['2200', 'R2200', 'R2 200'], explanation: 'Die reël is trek R250 af elke keer. R2 450 − R250 = R2 200 ✓' },
        { difficulty: 'Easy-Medium', question: 'Vind die ontbrekende term: 12, ?, 34, 45.', answer: '23', checkMode: 'auto', correctAnswer: '23', correctAnswers: ['23'], explanation: 'Die bekende verskil is 45 − 34 = 11, so die reël is voeg 11 by elke keer. 12 + 11 = 23. Kontroleer: 34 − 23 = 11 ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon volg die reël "vermenigvuldig die term met 3, trek dan 2 af", beginnend by 2: 2, 4, 10, 28. Wat is die volgende term?', answer: '82', checkMode: 'auto', correctAnswer: '82', correctAnswers: ['82'], explanation: 'Pas die reël toe op 28: 28 × 3 = 84, dan 84 − 2 = 82 ✓' },

        // ── Blok 2: Vind die algemene term algebraïes (lineêr) ───────────────
        { difficulty: 'Medium', question: 'Beskryf die reël vir die patroon 3, 8, 13, 18 in woorde, en skryf dit dan algebraïes as die nde term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'voeg 5 by elke keer', checkMode: 'self', answer: 'Begin by 3 en voeg 5 by elke keer om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '5n-2', correctAnswers: ['5n-2', '5n − 2'], explanation: 'Konstante verskil = 5. Vervang n=1: 5(1)+c=3 → c=−2. Reël: nde term = 5n−2. Kontroleer: 5(2)−2=8 ✓, 5(3)−2=13 ✓, 5(4)−2=18 ✓' },
        ] },
        { difficulty: 'Medium', question: 'Vind die nde-term-reël vir die patroon 4, 15, 26, 37.', answer: 'nde term = 11n − 7', checkMode: 'auto', correctAnswer: '11n-7', correctAnswers: ['11n-7', '11n − 7', 'nde term=11n-7', 'nde term = 11n − 7'], explanation: 'Konstante verskil = 11. Vervang n=1: 11(1)+c=4 → c=−7. Reël: nde term = 11n − 7. Kontroleer: 11(2)−7=15 ✓, 11(3)−7=26 ✓, 11(4)−7=37 ✓' },
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 6, 13, 20, 27.\n\na) Vind die nde-term-reël.\nb) Vind die 28ste term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: '7n-1', correctAnswers: ['7n-1', '7n − 1', 'nde term=7n-1'], explanation: 'Konstante verskil = 7. Vervang n=1: 7(1)+c=6 → c=−1. Reël: nde term = 7n−1. Kontroleer: 7(2)−1=13 ✓, 7(3)−1=20 ✓, 7(4)−1=27 ✓' },
          { label: 'b) 28ste term', correctAnswer: '195', explanation: '7(28) − 1 = 196 − 1 = 195.' },
        ] },
        { difficulty: 'Hard', question: 'Nomvula sê die patroon 9, 14, 19, 24 het die reël nde term = 5n + 1. Toets haar reël teen elke term. Is sy korrek, en indien nie, wat is die korrekte reël?', answer: 'Nomvula is verkeerd. Kontroleer n=1: 5(1)+1=6, nie 9 nie ✗ — haar reël faal van die heel eerste term af. Die konstante verskil is 5 (14−9=5, 19−14=5, 24−19=5), so die reël behoort met 5n te begin. Vervang n=1: 5(1)+c=9 → c=4. Die korrekte reël is nde term = 5n + 4. Kontroleer: 5(1)+4=9 ✓, 5(2)+4=14 ✓, 5(3)+4=19 ✓, 5(4)+4=24 ✓.', checkMode: 'self' },

        // ── Blok 3: Kwadratiese/nie-lineêre reekse (algemene term) ───────────
        { difficulty: 'Medium-Hard', question: 'ʼn Patroon het terme 7, 10, 15, 22. Die verskille is nie konstant nie, so hierdie patroon is kwadraties.\n\na) Vind die nde-term-reël.\nb) Vind die 16de term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: 'n²+6', correctAnswers: ['n²+6', 'n^2+6', 'nde term=n²+6'], explanation: 'Verskille: 3, 5, 7 — neem met 2 toe, wat dui op n². Kontroleer n²+6: 1+6=7 ✓, 4+6=10 ✓, 9+6=15 ✓, 16+6=22 ✓' },
          { label: 'b) 16de term', correctAnswer: '262', explanation: '16² + 6 = 256 + 6 = 262.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon het terme 5, 16, 31, 50. Die eerste verskille is 11, 15, 19, en die tweede verskille is konstant op 4, so die nde term het die vorm 2n² + bn + c.\n\na) Vind die nde-term-reël.\nb) Vind die 11de term.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) nde term =', correctAnswer: '2n²+5n-2', correctAnswers: ['2n²+5n-2', '2n^2+5n-2', '2n²+5n−2', 'nde term=2n²+5n-2'], explanation: 'Tweede verskil = 4, so a = 4÷2 = 2. Vervang n=1 in 2n²+bn+c=5: 2+b+c=5. Vervang n=2 in 2n²+bn+c=16: 8+2b+c=16. Aftrekking gee b=5, dan c=−2. Reël: nde term = 2n²+5n−2. Kontroleer: 2(1)+5−2=5 ✓, 2(4)+10−2=16 ✓, 2(9)+15−2=31 ✓, 2(16)+20−2=50 ✓' },
          { label: 'b) 11de term', correctAnswer: '295', explanation: '2(11)² + 5(11) − 2 = 242 + 55 − 2 = 295.' },
        ] },
        { difficulty: 'Hard', question: 'Sipho sê die patroon 3, 12, 25, 42 volg die reël nde term = n² + 4n − 2. Verifieer dit vir n = 1, 2, 3 en 4. As die reël verkeerd is, vind die korrekte een.', answer: 'Kontroleer n=1: 1+4−2=3 ✓. Kontroleer n=2: 4+8−2=10, maar die werklike term is 12 ✗ — die reël faal van die tweede term af, so dit is onjuis. Die eerste verskille is 9, 13, 17, en die tweede verskil is konstant op 4, so a = 4÷2 = 2. Vervang n=1 in 2n²+bn+c=3: 2+b+c=3. Vervang n=2 in 2n²+bn+c=12: 8+2b+c=12. Aftrekking gee b=3, dan c=−2. Die korrekte reël is nde term = 2n² + 3n − 2. Kontroleer: 2(1)+3−2=3 ✓, 2(4)+6−2=12 ✓, 2(9)+9−2=25 ✓, 2(16)+12−2=42 ✓.', checkMode: 'self' },

        // ── Blok 4: Geometriese/groeiende patrone [DIAGRAM-GEMERK] ───────────
        { difficulty: 'Medium', question: 'ʼn Patroon van vierkante word met vuurhoutjies gebou, soos gewys, met elke nuwe vierkant aan die vorige een verbind en ʼn sy gedeel. Patroon 1 is ʼn enkele vierkant gemaak van 4 vuurhoutjies. Patroon 2 het twee vierkante in ʼn ry verbind, wat een vuurhoutjie deel, en gebruik altesaam 7 vuurhoutjies. Patroon 3 het drie vierkante in ʼn ry verbind, en gebruik altesaam 10 vuurhoutjies. Hoeveel vuurhoutjies word benodig vir Patroon 7?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 vuurhoutjies'], explanation: 'Die patroon neem met 3 vuurhoutjies toe elke keer: 4, 7, 10 (verskille van 3). Reël: vuurhoutjies = 3n + 1. Kontroleer: 3(1)+1=4 ✓, 3(2)+1=7 ✓, 3(3)+1=10 ✓. Patroon 7: 3(7)+1 = 21+1 = 22 vuurhoutjies ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="18" y1="60" x2="38" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="78" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="60" x2="18" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="60" x2="38" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">4 vuurhoutjies</text><g><line x1="85" y1="60" x2="103" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="121" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="78" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="78" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="85" y1="60" x2="85" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="103" y1="60" x2="103" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="121" y1="60" x2="121" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="103" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="103" y="115" text-anchor="middle" fill="#374151" font-size="11">7 vuurhoutjies</text><g><line x1="160" y1="60" x2="178" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="196" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="214" y2="60" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="78" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="78" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="78" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="60" x2="160" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="178" y1="60" x2="178" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="196" y1="60" x2="196" y2="78" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="60" x2="214" y2="78" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="187" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="187" y="115" text-anchor="middle" fill="#374151" font-size="11">10 vuurhoutjies</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Patroon van teëls word in ʼn soliede vierkantrooster gerangskik, soos gewys. Patroon 1 is ʼn 1×1-rooster gemaak van 1 teël. Patroon 2 is ʼn 2×2-rooster gemaak van 4 teëls. Patroon 3 is ʼn 3×3-rooster gemaak van 9 teëls. Vind die reël vir die aantal teëls by patroon n, en gebruik dit dan om die aantal teëls in Patroon 6 te vind.', answer: '', checkMode: 'auto', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><rect x="24" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="32" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="32" y="105" text-anchor="middle" fill="#374151" font-size="11">1 teël</text><g><rect x="88" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="47" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="88" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="104" y="63" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="104" y="90" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="104" y="105" text-anchor="middle" fill="#374151" font-size="11">4 teëls</text><g><rect x="160" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="39" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="55" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="160" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="176" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/><rect x="192" y="71" width="16" height="16" fill="#eff6ff" stroke="#0f1f3d" stroke-width="1.5"/></g><text x="176" y="105" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="176" y="120" text-anchor="middle" fill="#374151" font-size="11">9 teëls</text></svg>', parts: [
          { label: 'a) Reël (teëls = ...)', correctAnswer: 'teëls = n²', correctAnswers: ['teëls = n²', 'teëls = n^2', 'n²', 'n^2'], explanation: 'Elke patroon is ʼn vierkantrooster met sy n, so die totale teëls is gelyk aan n². Kontroleer: 1²=1 ✓, 2²=4 ✓, 3²=9 ✓' },
          { label: 'b) Teëls in Patroon 6', correctAnswer: '36', explanation: '6² = 36 teëls.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Ketting van sesshoeke word met vuurhoutjies gebou, soos gewys, met elke nuwe sesshoek aan die vorige een verbind en ʼn sy gedeel. Patroon 1 is ʼn enkele sesshoek gemaak van 6 vuurhoutjies. Patroon 2 het twee sesshoeke in ʼn ry verbind, wat een vuurhoutjie deel, en gebruik altesaam 11 vuurhoutjies. Patroon 3 het drie sesshoeke in ʼn ry verbind, en gebruik altesaam 16 vuurhoutjies. Themba sê Patroon 9 sal 47 vuurhoutjies benodig. Kontroleer sy antwoord met die reël, en verbeter dit indien hy verkeerd is.', answer: 'Themba is verkeerd. Die patroon neem met 5 vuurhoutjies toe elke keer: 6, 11, 16 (verskille van 5). Reël: vuurhoutjies = 5n + 1. Kontroleer: 5(1)+1=6 ✓, 5(2)+1=11 ✓, 5(3)+1=16 ✓. Vir Patroon 9: 5(9)+1 = 45+1 = 46 vuurhoutjies, nie 47 nie. Themba het waarskynlik die gedeelde vuurhoutjies verkeerd getel. Die korrekte antwoord is 46 vuurhoutjies.', checkMode: 'self', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><g><line x1="28" y1="53" x2="38" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="59" x2="38" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="71" x2="28" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="28" y1="77" x2="18" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="71" x2="18" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="18" y1="59" x2="28" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="28" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 1</text><text x="28" y="115" text-anchor="middle" fill="#374151" font-size="11">6 vuurhoutjies</text><g><line x1="90" y1="53" x2="100" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="71" x2="90" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="90" y1="77" x2="80" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="71" x2="80" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="80" y1="59" x2="90" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="53" x2="120" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="59" x2="120" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="120" y1="71" x2="110" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="77" x2="100" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="59" x2="110" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="100" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 2</text><text x="100" y="115" text-anchor="middle" fill="#374151" font-size="11">11 vuurhoutjies</text><g><line x1="160" y1="53" x2="170" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="71" x2="160" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="160" y1="77" x2="150" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="71" x2="150" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="150" y1="59" x2="160" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="53" x2="190" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="71" x2="180" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="180" y1="77" x2="170" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="170" y1="59" x2="180" y2="53" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="53" x2="210" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="59" x2="210" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="71" x2="200" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="200" y1="77" x2="190" y2="71" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="59" x2="200" y2="53" stroke="#0f1f3d" stroke-width="2.5"/></g><text x="180" y="100" text-anchor="middle" fill="#374151" font-size="12" font-weight="600">Patroon 3</text><text x="180" y="115" text-anchor="middle" fill="#374151" font-size="11">16 vuurhoutjies</text></svg>' },

        // ── Blok 5: Beskrywing/uitbreiding van patrone + foutopsporing ───────
        { difficulty: 'Medium', question: 'Brei die patroon 3, 9, 15, 21 uit deur die volgende twee terme te skryf, en beskryf die reël in woorde.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Volgende twee terme', correctAnswer: '27,33', correctAnswers: ['27,33', '27, 33'], explanation: 'Konstante verskil = 6. 21+6=27, 27+6=33.' },
          { label: 'b) Reël in woorde', correctAnswer: 'voeg 6 by elke keer', checkMode: 'self', answer: 'Begin by 3 en voeg 6 by elke keer om die volgende term te kry.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Patroon neem soos volg af: 45, 38, 31, 24. Beskryf die reël in woorde, en skryf dan die nde term algebraïes.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Reël in woorde', correctAnswer: 'trek 7 af elke keer', checkMode: 'self', answer: 'Begin by 45 en trek 7 af elke keer om die volgende term te kry.' },
          { label: 'b) nde term =', correctAnswer: '52-7n', correctAnswers: ['52-7n', '52 − 7n', '-7n+52', '−7n+52'], explanation: 'Konstante verskil = −7. Vervang n=1: −7(1)+c=45 → c=52. Reël: nde term = 52 − 7n. Kontroleer: 52−7(2)=38 ✓, 52−7(3)=31 ✓, 52−7(4)=24 ✓' },
        ] },
        { difficulty: 'Hard', question: 'Nomvula sê die patroon 10, 17, 24, 31 het die reël nde term = 7n, omdat die konstante verskil 7 is. Toets haar reël teen elke term. Is sy korrek, en indien nie, wat is die korrekte reël?', answer: 'Nomvula is verkeerd. ʼn Konstante verskil van 7 bepaal slegs die koëffisiënt van n — dit waarborg nie dat die reël 7n is nie. Kontroleer n=1: 7(1)=7, nie 10 nie ✗. Vervang n=1 in 7n+c=10 gee c=3. Die korrekte reël is nde term = 7n + 3. Kontroleer: 7(1)+3=10 ✓, 7(2)+3=17 ✓, 7(3)+3=24 ✓, 7(4)+3=31 ✓.', checkMode: 'self' },

        // ── Blok 6: Multi-stap/werklike-lewe patroonwoordprobleme ────────────
        { difficulty: 'Medium-Hard', question: 'ʼn Stroomdiens-intekening kos R200 om te aktiveer, plus R15 per maand, volgens die reël: koste = 15 × maande + 200. Voltooi die tabel vir 3, 6 en 10 maande.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Koste vir 3 maande', correctAnswer: '245', explanation: '15 × 3 + 200 = 45 + 200 = 245' },
          { label: 'b) Koste vir 6 maande', correctAnswer: '290', explanation: '15 × 6 + 200 = 90 + 200 = 290' },
          { label: 'c) Koste vir 10 maande', correctAnswer: '350', explanation: '15 × 10 + 200 = 150 + 200 = 350' },
        ] },
        { difficulty: 'Hard', question: 'Gebruik die stroomdiens-reël koste = 15 × maande + 200, na hoeveel volle maande sal die totale koste eerste ten minste R470 bereik?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18'], explanation: 'Stel op: 15 × maande + 200 ≥ 470, so 15 × maande ≥ 270, wat maande ≥ 18 gee. Kontroleer: 17 maande gee 15(17)+200 = 455 (te min). 18 maande gee 15(18)+200 = 470 ✓. 18 maande is die eerste om ten minste R470 te bereik.' },
        { difficulty: 'Hard', question: 'Blikkies word gestapel sodat die onderste ry 30 blikkies het, en elke ry hoër het 4 minder blikkies as die een onder dit, volgens die reël: blikkies in ry n = 34 − 4n.\n\na) Hoeveel blikkies is in ry 4?\nb) Watter ry het presies 6 blikkies?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Blikkies in ry 4', correctAnswer: '18', explanation: '34 − 4(4) = 34 − 16 = 18 blikkies.' },
          { label: 'b) Rynommer met 6 blikkies', correctAnswer: '7', explanation: 'Stel op: 34 − 4 × ry = 6. Trek 34 van albei kante af: −4 × ry = −28. Deel deur −4: ry = 7. Kontroleer: 34−4(7)=34−28=6 ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het numeriese reekse, algemene-term-reëls, kwadratiese patrone en geometriese patrone bemeester — volpunte!' },
        { minScore: 15, message: 'Goeie werk! Jy het ʼn sterk begrip van numeriese en geometriese patrone. Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor die vind van die algemene term weer deur, en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer. Jy sal daar uitkom!' },
      ],
    },
  ],
}
