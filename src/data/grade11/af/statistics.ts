import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (statistics roles) ───────────────────────────────────────
// minimum / maximum    → blue   (#2563eb)
// quartiles            → orange (#ea580c)
// median / std dev     → green  (#16a34a)
// negative skew        → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Statistiek',
  grade: 11,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — VYFGETALOPSOMMING EN MOND-EN-SNOR-DIAGRAMME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'five-number-summary',
      title: 'Vyfgetalopsomming en Mond-en-Snor-diagramme',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>vyfgetalopsomming</strong> bestaan uit die ${bl('minimum')}, ${or('Q1')} (onderkwartiel), ${gr('mediaan')} (Q2), ${or('Q3')} (bokwartiel), en ${bl('maksimum')} van ʼn datastel. ʼn <strong>Mond-en-snor-diagram</strong> stel hierdie opsomming visueel voor — ʼn mond van ${or('Q1')} tot ${or('Q3')} (met ʼn lyn by die ${gr('mediaan')}), en 'snorre' wat na die ${bl('minimum')}- en ${bl('maksimum')}-waardes strek, wat ʼn onmiddellike visuele indruk van verspreiding en skeefheid gee.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('minimum / maksimum')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwartiele (Q1, Q3)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('mediaan (Q2)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vyf waardes</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste waarde in die gerangskikte datastel.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Q1 (Onderkwartiel)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die mediaan van die onderste helfte van die data (onder Q2).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Mediaan (Q2)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die middelste waarde van die gerangskikte datastel.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Q3 (Bokwartiel)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die mediaan van die boonste helfte van die data (bo Q2).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Maksimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grootste waarde in die gerangskikte datastel.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Rangskik altyd die data eerste</p>` +
        `<p style="margin:0;color:#1e3a8a;">Rangskik die data in <strong>stygende volgorde</strong> voordat enige van die vyf waardes bepaal word. Die ${gr('mediaan')} verdeel die data in twee helftes; ${or('Q1')} is die mediaan van die onderste helfte en ${or('Q3')} is die mediaan van die boonste helfte. Sluit die mediaan self <em>nie</em> in enige helfte in wanneer die datastel ʼn onewe getal waardes het nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die vyfgetalopsomming van: 4, 7, 9, 12, 15, 18, 21, 25, 30.',
          answer: `${bl('Min = 4')} &nbsp;|&nbsp; ${or('Q1 = 8')} &nbsp;|&nbsp; ${gr('Mediaan = 15')} &nbsp;|&nbsp; ${or('Q3 = 23')} &nbsp;|&nbsp; ${bl('Maks = 30')}`,
          steps: [
            `Die data is reeds in stygende volgorde: 4, 7, 9, 12, 15, 18, 21, 25, 30. Daar is 9 waardes.`,
            `${bl('Minimum')} = ${bl('4')} (eerste waarde). &nbsp; ${bl('Maksimum')} = ${bl('30')} (laaste waarde).`,
            `${gr('Mediaan (Q2)')} = die middelste (5de) waarde van 9 = ${gr('15')}.`,
            `${or('Onderste helfte')} (waardes onder die mediaan): 4, 7, 9, 12. Q1 = mediaan van hierdie helfte = (7 + 9) ÷ 2 = ${or('8')}.`,
            `${or('Boonste helfte')} (waardes bo die mediaan): 18, 21, 25, 30. Q3 = mediaan van hierdie helfte = (21 + 25) ÷ 2 = ${or('23')}.`,
            `<strong>Vyfgetalopsomming:</strong> ${bl('Min = 4')}, ${or('Q1 = 8')}, ${gr('Mediaan = 15')}, ${or('Q3 = 23')}, ${bl('Maks = 30')}`,
          ],
        },
        {
          question: 'Sipho teken ʼn mond-en-snor-diagram met die vyfgetalopsomming uit Voorbeeld 1. Beskryf wat die diagram wys.',
          answer: 'Die mond strek van Q1 tot Q3 met ʼn mediaanlyn binne-in; snorre strek na die minimum en maksimum.',
          steps: [
            `Die ${or('mond')} strek van ${or('Q1 = 8')} tot ${or('Q3 = 23')}, met ʼn vertikale lyn by die ${gr('mediaan = 15')} binne die mond.`,
            `Snorre strek van die mond na die ${bl('minimum (4)')} aan die linkerkant en die ${bl('maksimum (30)')} aan die regterkant, wat die volle verspreiding van die data wys.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die vyfgetalopsomming te bepaal en ʼn mond-en-snor-diagram vir ʼn datastel te teken" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — OGIWES (KUMULATIEWE FREKWENSIEKROMMES)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'ogives',
      title: 'Ogiwes (Kumulatiewe Frekwensiekrommes)',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Ogief</strong> plot ${bl('kumulatiewe frekwensie')} teenoor die ${or('bogrens')} van elke interval, wat ʼn kromme skep wat altyd toeneem (aangesien frekwensies ophoop). Ogiewes word gebruik om die ${gr('mediaan')}, ${gr('kwartiele')} en ${gr('persentiele')} direk vanaf die grafiek te skat deur van die betrokke kumulatiewe frekwensiewaarde af oor te lees.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kumulatiewe frekwensie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('intervalgrense')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('geskatte waarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn ogief te konstrueer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">Bou ʼn kumulatiewe frekwensietabel: tel elke interval se frekwensie by ʼn lopende totaal, en teken die resultaat aan by die ${or('bogrens')} van elke interval.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Plot elke punt (${or('bogrens')}, ${bl('kumulatiewe frekwensie')}) op ʼn stel asse. Plot ook (ondergrens van eerste interval, 0) as beginpunt.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Verbind die punte met ʼn gladde, toenemende kromme. Om ${gr('geskatte waardes')} af te lees, trek ʼn horisontale lyn van die y-as na die kromme, en lees dan reguit af na die x-as.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Persentiele aflees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Vir ʼn totaal van <em>n</em> waardes: die ${gr('mediaan')} is by kumulatiewe frekwensie <strong>n/2</strong>, ${gr('Q1')} by <strong>n/4</strong>, en ${gr('Q3')} by <strong>3n/4</strong>. Lees van hierdie y-waardes na die kromme, en dan af na die x-as om jou ${gr('skattings')} te bepaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Datastel het intervalle 0–10 (frekwensie 5), 10–20 (frekwensie 8), 20–30 (frekwensie 12), 30–40 (frekwensie 5). Totaal = 30. Bepaal die kumulatiewe frekwensies om ʼn ogief te plot.',
          answer: `${bl('Kumulatiewe frekwensies:')} tot 10 = 5 &nbsp;|&nbsp; tot 20 = 13 &nbsp;|&nbsp; tot 30 = 25 &nbsp;|&nbsp; tot 40 = 30`,
          steps: [
            `Stel ʼn tabel op met ${or('bogrense')} en ʼn lopende ${bl('kumulatiewe frekwensie')}-totaal.`,
            `Tot ${or('10')}: kumulatiewe frekwensie = ${bl('5')} (slegs die eerste interval).`,
            `Tot ${or('20')}: kumulatiewe frekwensie = 5 + 8 = ${bl('13')}.`,
            `Tot ${or('30')}: kumulatiewe frekwensie = 13 + 12 = ${bl('25')}.`,
            `Tot ${or('40')}: kumulatiewe frekwensie = 25 + 5 = ${bl('30')} (gelyk aan die totaal — ʼn nuttige kontrole ✓).`,
            `Plot die punte (0, 0), (10, 5), (20, 13), (30, 25), (40, 30) en verbind hulle met ʼn gladde, toenemende kromme — dit is die ogief.`,
          ],
        },
        {
          question: 'Gebruik die ogief van Voorbeeld 1 (totaal = 30), skat die mediaan.',
          answer: `${gr('Geskatte mediaan ≈ 21–22')}`,
          steps: [
            `Die ${gr('mediaan')} is by die <strong>15de waarde</strong> (helfte van 30 = 15).`,
            `Trek op die ogief ʼn horisontale lyn van ${bl('kumulatiewe frekwensie = 15')} op die y-as oor na die kromme, en lees dan reguit af na die x-as.`,
            `Dit val binne die ${or('20–30-interval')}, wat ʼn ${gr('geskatte mediaan van ongeveer 21–22')} gee.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn ogief uit ʼn frekwensietabel te teken en dit te gebruik om die mediaan en kwartiele te skat" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VARIANSIE EN STANDAARDAFWYKING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'variance-standard-deviation',
      title: 'Variansie en Standaardafwyking',
      icon: 'σ',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Variansie</strong> meet die gemiddelde kwadratiese afstand van elke datapunt vanaf die gemiddelde, terwyl <strong>standaardafwyking</strong> (σ) die vierkantswortel van die variansie is — wat die maatstaf terugbring na dieselfde eenhede as die oorspronklike data. ʼn Klein standaardafwyking beteken data is styf saamgegroepeer naby die gemiddelde; ʼn groot standaardafwyking beteken data is meer versprei. Ons bereken hierdie met die hand vir klein datastelle en gebruik ʼn sakrekenaar vir groter datastelle.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('afwykings vanaf die gemiddelde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwadratiese afwykings')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('standaardafwyking')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om variansie en standaardafwyking te bereken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bepaal die gemiddelde</strong> (x̄) van die datastel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">Bepaal elke ${bl('afwyking vanaf die gemiddelde')}: trek x̄ van elke datawaarde af.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Kwadreer</strong> elke ${bl('afwyking')} om die ${or('kwadratiese afwykings')} te kry. Tel al die ${or('kwadratiese afwykings')} bymekaar en deel deur <em>n</em> om die <strong>variansie</strong> te kry.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;">Neem die vierkantswortel van die variansie om die ${gr('standaardafwyking')} σ te kry.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Populasiestandaardafwyking op jou sakrekenaar</p>` +
        `<p style="margin:0;color:#1e3a8a;">In Graad 11 gebruik ons die <strong>populasiestandaardafwyking</strong> (σ<sub>n</sub>), wat deur <em>n</em> deel. Op die Casio fx-82-reeks word dit gemerk as <strong>xσn</strong>. Die steekproefstandaardafwyking (wat deur <em>n − 1</em> deel) word in meer gevorderde statistiekkursusse gebruik.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die standaardafwyking van: 4, 8, 6, 10, 2 (gemiddelde = 6).',
          answer: `${gr('Standaardafwyking')} = √8 ≈ ${gr('2.83')}`,
          steps: [
            `Die gemiddelde word gegee as 6. Bepaal elke ${bl('afwyking vanaf die gemiddelde')}: 4 − 6 = ${bl('−2')}, 8 − 6 = ${bl('2')}, 6 − 6 = ${bl('0')}, 10 − 6 = ${bl('4')}, 2 − 6 = ${bl('−4')}.`,
            `${or('Kwadreer elke afwyking')}: (−2)² = ${or('4')}, 2² = ${or('4')}, 0² = ${or('0')}, 4² = ${or('16')}, (−4)² = ${or('16')}.`,
            `Som van ${or('kwadratiese afwykings')} = 4 + 4 + 0 + 16 + 16 = ${or('40')}.`,
            `Variansie = ${or('40')} ÷ 5 = 8.`,
            `${gr('Standaardafwyking')} = √8 ≈ ${gr('2.83')}.`,
          ],
        },
        {
          question: 'Lerato het twee klasse met dieselfde gemiddelde telling (65%) maar verskillende standaardafwykings: Klas A het σ = 5, Klas B het σ = 15. Wat vertel dit ons?',
          answer: 'Klas A se tellings is styf saamgegroepeer naby 65%; Klas B se tellings is baie meer versprei.',
          steps: [
            `Klas A (σ = ${gr('5')}): tellings is ${gr('styf saamgegroepeer')} naby 65% — die meeste leerders het tussen ongeveer 60% en 70% behaal. Daar is min variasie in hierdie klas.`,
            `Klas B (σ = ${or('15')}): tellings is ${or('veel meer versprei')}, met sommige leerders wat aansienlik bo of onder 65% behaal het. ʼn Groter standaardafwyking beteken nie swakker gemiddelde prestasie nie — die gemiddeldes is gelyk — maar dit beteken wel dat prestasie baie minder konsekwent was in Klas B.`,
          ],
        },
        {
          question: 'Gebruik ʼn sakrekenaar (Casio fx-82-reeks) om die standaardafwyking van: 12, 15, 18, 20, 25 te bepaal.',
          answer: `${gr('Standaardafwyking')} ≈ ${gr('4.45')}`,
          steps: [
            `Druk <strong>[MODE]</strong> → kies <strong>[STAT]</strong> → kies <strong>[1-VAR]</strong> om enkelveranderlike statistiekmodus te betree.`,
            `Voer elke waarde gevolg deur <strong>[=]</strong> in: 12 [=], 15 [=], 18 [=], 20 [=], 25 [=].`,
            `Druk <strong>[AC]</strong>, dan <strong>[SHIFT][1]</strong> (STAT-kieslys). Blaai na <strong>Var</strong> en kies <strong>xσn</strong> vir die populasiestandaardafwyking. Druk <strong>[=]</strong>.`,
            `Die sakrekenaar wys ${gr('≈ 4.45')} — dit is die ${gr('standaardafwyking')} van die datastel.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om variansie en standaardafwyking met die hand en met ʼn Casio fx-82-sakrekenaar te bereken" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — SIMMETRIESE EN SKEWE DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetric-skewed-data',
      title: 'Simmetriese en Skewe Data',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Simmetriese data</strong> het ʼn ongeveer gelyke verspreiding aan albei kante van die gemiddelde/mediaan, wat ʼn gebalanseerde mond-en-snor-diagram of klokvormige verspreiding tot gevolg het. <strong>Skewe data</strong> is ongelyk versprei — ${or('positief skewe (regs-skewe)')} data het ʼn langer stert aan die regterkant (na hoër waardes toe), terwyl ${re('negatief skewe (links-skewe)')} data ʼn langer stert aan die linkerkant het.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('simmetriese verspreiding')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('positiewe skeefheid (regterstert)')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negatiewe skeefheid (linkerstert)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Skeefheid identifiseer</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Simmetries</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Snorre is ongeveer gelyk in lengte; die mediaanlyn lê in die middel van die mond.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Gemiddelde ≈ Mediaan ≈ Modus</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Positiewe (Regse) Skeefheid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Langer stert/snor aan die regterkant; die mediaan is nader aan Q1 as aan Q3.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Gemiddelde &gt; Mediaan &gt; Modus</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Negatiewe (Linkse) Skeefheid</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Langer stert/snor aan die linkerkant; die mediaan is nader aan Q3 as aan Q1.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Gemiddelde &lt; Mediaan &lt; Modus</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#92400e;margin-bottom:6px;">Die stert wys in die rigting van die skeefheid</p>` +
        `<p style="margin:0;color:#78350f;">Die naam van die skeefheid verwys na die rigting van die langer stert: ${or('regse (positiewe)')} skeefheid het die stert aan die regterkant, ${re('linkse (negatiewe)')} skeefheid het die stert aan die linkerkant. Uiterste waardes in die stert trek die <strong>gemiddelde</strong> in daardie rigting, weg van die mediaan.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Mond-en-snor-diagram wys: Q1 = 10, Mediaan = 12, Q3 = 14, Minimum = 8, Maksimum = 30. Beskryf die skeefheid.',
          answer: `Die data is ${or('positief (regs) skewe')}.`,
          steps: [
            `Vergelyk die afstande aan elke kant van die ${gr('mediaan = 12')}: mediaan tot ${or('Q3')} = 14 − 12 = ${or('2')}; mediaan tot ${or('Q1')} = 12 − 10 = ${or('2')}. Die mond is simmetries.`,
            `Vergelyk die snorre: linkersnor = Q1 − Min = 10 − 8 = ${bl('2')}; regtersnor = Maks − Q3 = 30 − 14 = ${or('16')}.`,
            `Die regtersnor (${or('16')}) is baie langer as die linkersnor (${bl('2')}), wat op ${or('positiewe (regse) skeefheid')} dui — daar is ʼn paar ongewoon groot waardes wat die verspreiding na regs trek.`,
          ],
        },
        {
          question: 'Thabo sê simmetriese data het altyd ʼn gemiddelde wat presies gelyk is aan die mediaan. Is dit oor die algemeen waar?',
          answer: 'Ja — vir volkome simmetriese data val die gemiddelde en mediaan saam.',
          steps: [
            `Ja, vir ${bl('volkome simmetriese data')} val die gemiddelde en mediaan saam — die verspreiding is gebalanseerd, sodat uiterste waardes aan albei kante mekaar gelykop kanselleer.`,
            `Beduidende verskille tussen die gemiddelde en mediaan dui gewoonlik op ʼn mate van skeefheid: die <strong>gemiddelde is meer sensitief vir uiterste waardes</strong>, sodat in ʼn ${or('regs-skewe')} verspreiding die gemiddelde na die ${or('regterstert')} getrek word en groter as die mediaan word; in ʼn ${re('links-skewe')} verspreiding word die gemiddelde na die ${re('linkerstert')} getrek en word dit kleiner as die mediaan.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat simmetriese, positief skewe en negatief skewe data verduidelik deur middel van mond-en-snor-diagramme" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — BIVARIAATDATA EN SPREIDINGSDIAGRAMME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bivariate-scatter-plots',
      title: 'Bivariaatdata en Spreidingsdiagramme',
      icon: '↗',
      explanation:
        `<p style="margin-bottom:16px;"><strong>Bivariaatdata</strong> behels twee verwante veranderlikes wat saam gemeet word (bv. ure gestudeer en toetstelling). ʼn <strong>Spreidingsdiagram</strong> vertoon elke datapaar as ʼn ${bl('punt')}, wat ons in staat stel om visueel te beoordeel of ʼn verband bestaan, en indien wel, of dit ${gr('lineêr')}, ${or('kwadraties')} of ${or('eksponensieel')} van vorm voorkom, deur die algehele patroon van punte te ondersoek.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('datapunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('lineêre neiging')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('geboë (nie-lineêre) neiging')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes verbande</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Lineêr</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Punte volg ʼn ongeveer reguitlynpatroon. Die koers van verandering tussen die twee veranderlikes is redelik konstant.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Kwadraties</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Punte volg ʼn geboë (paraboliese) patroon — die koers van verandering is nie konstant nie en die kromme versnel of draai.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:6px;">Eksponensieel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Punte volg ʼn kromme wat teen ʼn steeds toenemende koers groei of afneem — die patroon buig skerp op- of afwaarts.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#14532d;margin-bottom:6px;">Korrelasie is nie oorsaaklikheid nie</p>` +
        `<p style="margin:0;color:#166534;">ʼn Spreidingsdiagram wys <strong>korrelasie</strong> (ʼn verband tussen twee veranderlikes) maar bewys nie <strong>oorsaaklikheid</strong> (dat een veranderlike die ander veroorsaak) nie. Oorweeg altyd die werklike-wêreld-konteks wanneer jy ʼn spreidingsdiagram interpreteer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Spreidingsdiagram van advertensiebesteding teenoor verkope wys punte wat gestadig in ʼn ongeveer reguit lyn styg. Watter model pas moontlik hierdie data die beste?',
          answer: `ʼn ${gr('Lineêre model')} sal waarskynlik die beste pas.`,
          steps: [
            `Die ${bl('punte')} styg gestadig van links na regs sonder enige duidelike geboë vorm — hierdie patroon dui op ʼn ${gr('lineêre verband')}.`,
            `ʼn ${gr('Lineêre model')} sal waarskynlik die beste pas, aangesien die patroon ʼn konsekwente, konstante koers van toename toon eerder as om te buig — wat aandui dat hoër advertensiebesteding met ʼn stygende koers aan hoër verkope gekoppel word.`,
          ],
        },
        {
          question: "Amahle se spreidingsdiagram van spoed teenoor remafstand wys punte wat al hoe skerper opwaarts buig namate spoed toeneem. Watter model sal beter as ʼn reguit lyn hierdie data pas?",
          answer: `ʼn ${or('Kwadratiese model')} sal waarskynlik beter pas.`,
          steps: [
            `Die ${bl('punte')} buig opwaarts en styg al hoe skerper namate spoed toeneem — dit sluit ʼn reguitlyn- (lineêre) model uit aangesien die koers van toename nie konstant is nie.`,
            `ʼn ${or('Kwadratiese model')} sal waarskynlik beter pas, aangesien remafstand tipies teen ʼn toenemende koers relatief tot spoed toeneem (in ooreenstemming met werklike-wêreld-fisika), wat ʼn ${or('geboë')} eerder as ʼn reguitlynpatroon tot gevolg het.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om spreidingsdiagramme te teken en te interpreteer, en om lineêre, kwadratiese en eksponensiële neigings in bivariaatdata te identifiseer" />',
    },
  ],
  scoreMessages: [
    { minScore: 10, message: 'Uitstekend! ʼn Volpunt — jy het Graad 11 Statistiek volkome bemeester. Hou so aan!' },
    { minScore: 8, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van statistiek. Gaan enige gemiste dele weer deur en jy sal dit perfek kry.' },
    { minScore: 6, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte laat val het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: "Moenie tou opgooi nie — elke kenner was eers ʼn beginner! Gaan deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer." },
  ],
}

export const topicPractice = [
  // V1 — Maklik ──────────────────────────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Bepaal die mediaan van: 6, 9, 12, 15, 18, 21, 24.',
    answer: '15',
    checkMode: 'auto',
    correctAnswer: '15',
    explanation: 'Die data is reeds gerangskik (7 waardes). Die mediaan is die 4de (middelste) waarde = 15.',
  },

  // V2 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Bepaal Q1 en Q3 van: 3, 7, 11, 15, 19, 23, 27, 31.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'Q1 =',
        correctAnswer: '9',
        explanation: 'Onderste helfte (eerste 4 waardes): 3, 7, 11, 15. Q1 = mediaan = (7 + 11) ÷ 2 = 9.',
      },
      {
        label: 'Q3 =',
        correctAnswer: '25',
        explanation: 'Boonste helfte (laaste 4 waardes): 19, 23, 27, 31. Q3 = mediaan = (23 + 27) ÷ 2 = 25.',
      },
    ],
  },

  // V3 — Moeilik (self) ────────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'ʼn Mond-en-snor-diagram wys: minimum = 5, Q1 = 10, mediaan = 14, Q3 = 20, maksimum = 35.\nBeskryf of die data simmetries, positief skewe, of negatief skewe voorkom, en regverdig jou antwoord.',
    answer: 'Die afstand van mediaan tot Q3 (6) en Q3 tot maksimum (15) is baie groter as die ooreenstemmende laer afstande (Q1 tot mediaan = 4, minimum tot Q1 = 5), wat op positiewe (regse) skeefheid dui.',
    checkMode: 'self',
    diagramPlaceholder: '<DiagramPlaceholder label="Mond-en-snor-diagram wat minimum=5, Q1=10, mediaan=14, Q3=20, maksimum=35 wys, geteken op ʼn getallelyn met die mond van Q1 tot Q3, ʼn lyn by die mediaan, en snorre wat na die minimum en maksimum strek" />',
  },

  // V4 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Gebruik die diagram in V3 (minimum = 5, Q1 = 10, mediaan = 14, Q3 = 20, maksimum = 35), bepaal die interkwartielwydte.',
    answer: '10',
    checkMode: 'auto',
    correctAnswer: '10',
    explanation: 'IKW = Q3 − Q1 = 20 − 10 = 10.',
  },

  // V5 — Moeilik (self) ────────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Gebruik die diagram in V3 (minimum = 5, Q1 = 10, mediaan = 14, Q3 = 20, maksimum = 35), bepaal die variasiewydte en vergelyk dit met die interkwartielwydte, en verduidelik wat die verskil aandui.',
    answer: 'Variasiewydte = 35 − 5 = 30. IKW = 10. Die baie groter variasiewydte in vergelyking met die IKW dui aan dat die data waardes ver van die sentrale groepering het, in ooreenstemming met die waargenome skeefheid.',
    checkMode: 'self',
  },

  // V6 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'ʼn Datastel het intervalle 0–10 (frekwensie 4), 10–20 (frekwensie 9), 20–30 (frekwensie 7), totaal 20. Bepaal die kumulatiewe frekwensies.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'Kumulatiewe frekwensie tot 10:',
        correctAnswer: '4',
        explanation: 'Slegs die eerste interval dra by: kumulatiewe frekwensie = 4.',
      },
      {
        label: 'Kumulatiewe frekwensie tot 20:',
        correctAnswer: '13',
        explanation: '4 (van eerste interval) + 9 (tweede interval) = 13.',
      },
      {
        label: 'Kumulatiewe frekwensie tot 30:',
        correctAnswer: '20',
        explanation: '13 + 7 = 20. Dit is gelyk aan die totaal (20), wat bevestig dat die tabel korrek is.',
      },
    ],
  },

  // V7 — Moeilik (self) ────────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Gebruik die kumulatiewe frekwensies van V6 (0–10: kumulatief 4, 10–20: kumulatief 13, 20–30: kumulatief 20, totaal 20), skat watter interval die mediaan bevat. Regverdig jou antwoord.',
    answer: 'Die mediaan is by die 10de waarde. Aangesien die kumulatiewe frekwensie 13 bereik binne die 10–20-interval (nadat dit slegs 4 daarvoor was), val die mediaan binne 10–20.',
    checkMode: 'self',
  },

  // V8 — Maklik ───────────────────────────────────────────────────────────────────
  {
    difficulty: 'Easy',
    question: 'Bepaal die standaardafwyking van: 2, 4, 6, 8, 10 (gemiddelde = 6).',
    answer: '2.83',
    checkMode: 'auto',
    correctAnswer: '2.83',
    explanation: 'Afwykings: −4, −2, 0, 2, 4. Kwadratiese afwykings: 16, 4, 0, 4, 16. Som = 40. Variansie = 40 ÷ 5 = 8. Standaardafwyking = √8 ≈ 2.83.',
  },

  // V9 — Medium ─────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Twee klasse het dieselfde gemiddelde maar Klas X het SA = 3 en Klas Y het SA = 12. Watter klas het meer wisselvallige tellings?',
    answer: 'Klas Y',
    checkMode: 'auto',
    correctAnswer: 'Klas Y',
    correctAnswers: ['Klas Y', 'klas Y', 'Y', 'klas y'],
    explanation: 'ʼn Groter standaardafwyking beteken data is meer versprei. SA = 12 > SA = 3, dus het Klas Y meer wisselvallige (minder konsekwente) tellings.',
  },

  // V10 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Bepaal die variansie van: 5, 8, 11, 14, 17 (gemiddelde = 11), en wys jou volledige werk.',
    answer: 'Afwykings: −6, −3, 0, 3, 6. Kwadratiese afwykings: 36, 9, 0, 9, 36. Som = 90. Variansie = 90 ÷ 5 = 18.',
    checkMode: 'self',
  },

  // V11 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Gebruik jou antwoord van V10 (variansie = 18), bepaal die standaardafwyking.',
    answer: '√18 ≈ 4.24.',
    checkMode: 'self',
  },

  // V12 — Medium ────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'ʼn Spreidingsdiagram wys punte wat in ʼn ongeveer reguit lyn styg. Watter tipe model pas hierdie data waarskynlik?',
    answer: 'lineêr',
    checkMode: 'auto',
    correctAnswer: 'lineêr',
    correctAnswers: ['lineêr', 'Lineêr', 'lineêre model', 'Lineêre model', 'ʼn lineêre model', 'ʼn Lineêre model', 'linear', 'Linear'],
    explanation: 'ʼn Gestadige, reguitlyn-stygende patroon dui op ʼn lineêre verband. ʼn Lineêre model sou hierdie data die beste pas.',
  },

  // V13 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "Sipho se spreidingsdiagram wys punte wat styg, ʼn piek bereik, en dan in ʼn geboë patroon val. Watter tipe model sal waarskynlik beter as lineêr pas? Regverdig jou antwoord.",
    answer: 'ʼn Kwadratiese model sal waarskynlik beter pas, aangesien die data ʼn styg-dan-val-patroon toon wat tipies van ʼn parabool is, wat ʼn reguit lyn nie kan voorstel nie.',
    checkMode: 'self',
  },

  // V14 — Medium ────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Beskryf wat ʼn mond-en-snor-diagram met ʼn lang linkersnor en ʼn kort regtersnor oor skeefheid aandui.',
    answer: 'negatief (links) skewe',
    checkMode: 'auto',
    correctAnswer: 'negatief (links) skewe',
    correctAnswers: [
      'negatief (links) skewe',
      'negatief skewe',
      'negatiewe skeefheid',
      'links skewe',
      'links-skewe',
      'negatief',
      'negatief skewe (links)',
    ],
    explanation: 'ʼn Lang linkersnor en ʼn kort regtersnor beteken die stert strek na links — dit dui op negatiewe (linkse) skeefheid.',
  },

  // V15 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Lerato sê positief skewe data het altyd ʼn gemiddelde wat groter as die mediaan is. Is dit oor die algemeen waar? Verduidelik.',
    answer: 'Ja — in positief (regs) skewe data trek die langer stert van hoër waardes die gemiddelde meer opwaarts as die mediaan, wat minder deur uiterste waardes beïnvloed word, wat tipies gemiddelde > mediaan tot gevolg het.',
    checkMode: 'self',
  },

  // V16 — Medium ────────────────────────────────────────────────────────────────
  {
    difficulty: 'Medium',
    question: 'Bepaal die vyfgetalopsomming van: 2, 5, 8, 11, 14, 17, 20, 23, 26, 29.',
    answer: '',
    checkMode: 'auto',
    parts: [
      {
        label: 'Minimum =',
        correctAnswer: '2',
        explanation: 'Die kleinste waarde in die gerangskikte datastel is 2.',
      },
      {
        label: 'Q1 =',
        correctAnswer: '6.5',
        explanation: 'n = 10. Q1 is by posisie n/4 = 2.5, dus Q1 = gemiddelde van 2de en 3de waardes = (5 + 8) ÷ 2 = 6.5.',
      },
      {
        label: 'Mediaan =',
        correctAnswer: '15.5',
        explanation: 'n = 10 (ewe). Mediaan = gemiddelde van 5de en 6de waardes = (14 + 17) ÷ 2 = 15.5.',
      },
      {
        label: 'Q3 =',
        correctAnswer: '21.5',
        explanation: 'Q3 is by posisie 3n/4 = 7.5, dus Q3 = gemiddelde van 7de en 8ste waardes = (20 + 23) ÷ 2 = 21.5.',
      },
      {
        label: 'Maksimum =',
        correctAnswer: '29',
        explanation: 'Die grootste waarde in die gerangskikte datastel is 29.',
      },
    ],
  },

  // V17 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'ʼn Datastel het ʼn standaardafwyking van 0. Wat vertel dit jou oor die data?',
    answer: 'ʼn Standaardafwyking van 0 beteken elke waarde in die datastel is identies (geen variasie hoegenaamd nie), aangesien daar geen afwykings vanaf die gemiddelde is nie.',
    checkMode: 'self',
  },

  // V18 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'ʼn Ogief (kumulatiewe frekwensiekromme) vir eksamentellings styg van (0, 0) tot ongeveer (100, 200). By telling = 40, is die kumulatiewe frekwensie 50; by telling = 70, is die kumulatiewe frekwensie 160. Die totale getal leerders is 200.\nGebruik die ogief om die persentasie leerders wat laer as 40 behaal het, te skat.',
    answer: 'Kumulatiewe frekwensie by 40 = 50 uit 200 totaal. Persentasie = 50 ÷ 200 × 100 = 25%.',
    checkMode: 'self',
    diagramPlaceholder: '<DiagramPlaceholder label="Ogief (kumulatiewe frekwensiekromme) vir eksamentellings wat styg van (0,0) na ongeveer (100,200), met gemerkte punte wat kumulatiewe frekwensie 50 by telling 40 en kumulatiewe frekwensie 160 by telling 70 wys" />',
  },

  // V19 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Gebruik dieselfde ogief van V18, skat die interkwartielwydte, gegewe dat Q1 ≈ 35 en Q3 ≈ 75 gebaseer op die aflesing van die kromme by die 25%- en 75%-kumulatiewe-frekwensiemerke.',
    answer: 'IKW = Q3 − Q1 = 75 − 35 = 40.',
    checkMode: 'self',
  },

  // V20 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "Amahle se spreidingsdiagram van planthoogte teenoor dae wys ʼn duidelike geboë, versnellende patroon (stadige groei aanvanklik, dan vinnige toename). Stel ʼn geskikte model voor en verduidelik jou redenasie.",
    answer: 'ʼn Eksponensiële model sal hierdie data waarskynlik die beste pas, aangesien eksponensiële groei kenmerkend stadig begin en dan vinnig versnel, wat by die beskryfde patroon pas eerder as ʼn konstante lineêre koers of ʼn simmetriese kwadratiese kromme.',
    checkMode: 'self',
  },
]

export const resultsConfig = {
  totalMarks: 20,
  messages: [
    { minScore: 20, message: 'Uitstekend! Jy het al die Graad 11-statistiek voltooi en bemeester.' },
    { minScore: 15, message: 'Puik werk!' },
    { minScore: 10, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
