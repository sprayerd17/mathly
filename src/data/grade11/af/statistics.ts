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
          answer: `${gr('Standaardafwyking')} = √8 ≈ ${gr('2,83')}`,
          steps: [
            `Die gemiddelde word gegee as 6. Bepaal elke ${bl('afwyking vanaf die gemiddelde')}: 4 − 6 = ${bl('−2')}, 8 − 6 = ${bl('2')}, 6 − 6 = ${bl('0')}, 10 − 6 = ${bl('4')}, 2 − 6 = ${bl('−4')}.`,
            `${or('Kwadreer elke afwyking')}: (−2)² = ${or('4')}, 2² = ${or('4')}, 0² = ${or('0')}, 4² = ${or('16')}, (−4)² = ${or('16')}.`,
            `Som van ${or('kwadratiese afwykings')} = 4 + 4 + 0 + 16 + 16 = ${or('40')}.`,
            `Variansie = ${or('40')} ÷ 5 = 8.`,
            `${gr('Standaardafwyking')} = √8 ≈ ${gr('2,83')}.`,
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
          answer: `${gr('Standaardafwyking')} ≈ ${gr('4,45')}`,
          steps: [
            `Druk <strong>[MODE]</strong> → kies <strong>[STAT]</strong> → kies <strong>[1-VAR]</strong> om enkelveranderlike statistiekmodus te betree.`,
            `Voer elke waarde gevolg deur <strong>[=]</strong> in: 12 [=], 15 [=], 18 [=], 20 [=], 25 [=].`,
            `Druk <strong>[AC]</strong>, dan <strong>[SHIFT][1]</strong> (STAT-kieslys). Blaai na <strong>Var</strong> en kies <strong>xσn</strong> vir die populasiestandaardafwyking. Druk <strong>[=]</strong>.`,
            `Die sakrekenaar wys ${gr('≈ 4,45')} — dit is die ${gr('standaardafwyking')} van die datastel.`,
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

      diagramPlaceholder:
        'Spreidingsdiagram van advertensiebesteding (R duisend) teenoor verkope (R duisend) uit Voorbeeld 1, wat ses punte wys wat gestadig in ʼn ongeveer reguit lyn styg, met ʼn benaderde beste-passende lyn deur die punte wat ʼn lineêre verband illustreer',
      diagramSvg:
        '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="105" y1="245" x2="105" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="105" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="155" y1="245" x2="155" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="155" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="255" y1="245" x2="255" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="255" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="305" y1="245" x2="305" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="305" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="55" y1="190" x2="355" y2="25" stroke="#16a34a" stroke-width="2.5"/><circle cx="105" cy="176.25" r="3.5" fill="#2563eb"/><text x="105" y="166.25" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 50)</text><circle cx="155" cy="148.75" r="3.5" fill="#2563eb"/><text x="155" y="138.75" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 70)</text><circle cx="205" cy="114.375" r="3.5" fill="#2563eb"/><text x="205" y="104.375" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 95)</text><circle cx="255" cy="93.75" r="3.5" fill="#2563eb"/><text x="255" y="83.75" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 110)</text><circle cx="305" cy="52.5" r="3.5" fill="#2563eb"/><text x="305" y="42.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 140)</text><circle cx="355" cy="31.875" r="3.5" fill="#2563eb"/><text x="350" y="21.875" font-size="11" fill="#2563eb" font-weight="700" text-anchor="end">(60, 155)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Advertensiebesteding (R duisend)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Verkope (R duisend)</text></svg>',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om spreidingsdiagramme te teken en te interpreteer, en om lineêre, kwadratiese en eksponensiële neigings in bivariaatdata te identifiseer" />',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — Fase 1 (slegs inhoud, nog geen diagramSvg nie)
  // Elke stel het 20 vrae in 6 herhalende vaardigheidsblokke, Maklik → Moeilik:
  //   Blok 1 (V1-4)   Variansie / standaardafwyking van rou (ongegroepeerde) data
  //   Blok 2 (V5-8)   Ogief (kumulatiewe frekwensiekromme) — skat mediaan, Q1, Q3
  //   Blok 3 (V9-12)  Histogram / frekwensiepoligoon-interpretasie (modale klas, geskatte gemiddelde)
  //   Blok 4 (V13-16) Simmetries vs skewe oordeel van 'n gegewe vyfgetalopsomming
  //   Blok 5 (V17-18) Variansie / standaardafwyking-vergelyking van twee datastelle
  //   Blok 6 (V19-20) Gekombineerde ogief- en skeefheidsredenasie
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1 — Variansie / standaardafwyking van rou data (V1-4) ──────
        { difficulty: 'Easy', question: 'Bepaal die standaardafwyking van: 4, 6, 8, 10, 12 (gemiddelde = 8).', answer: '2,83', checkMode: 'auto', correctAnswer: '2,83', correctAnswers: ['2,83', '2.83'], explanation: 'Afwykings: −4, −2, 0, 2, 4. Kwadratiese afwykings: 16, 4, 0, 4, 16. Som = 40. Variansie = 40 ÷ 5 = 8. Standaardafwyking = √8 ≈ 2,83 ✓' },
        { difficulty: 'Easy', question: 'Bepaal die variansie van: 10, 12, 14, 16, 18, 20 (gemiddelde = 15).', answer: '11,67', checkMode: 'auto', correctAnswer: '11,67', correctAnswers: ['11,67', '11,7', '70/6', '11.67'], explanation: 'Afwykings: −5, −3, −1, 1, 3, 5. Kwadratiese afwykings: 25, 9, 1, 1, 9, 25. Som = 70. Variansie = 70 ÷ 6 ≈ 11,67 ✓' },
        { difficulty: 'Medium', question: 'Bepaal die standaardafwyking van: 3, 7, 11, 15, 19 (gemiddelde = 11), en wys jou werk.', answer: 'Afwykings: −8, −4, 0, 4, 8. Kwadratiese afwykings: 64, 16, 0, 16, 64. Som = 160. Variansie = 160 ÷ 5 = 32. Standaardafwyking = √32 ≈ 5,66.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die standaardafwyking van: 12, 15, 18, 21, 24, 27, 30 (gemiddelde = 21), en wys jou volledige werk.', answer: 'Afwykings: −9, −6, −3, 0, 3, 6, 9. Kwadratiese afwykings: 81, 36, 9, 0, 9, 36, 81. Som = 252. Variansie = 252 ÷ 7 = 36. Standaardafwyking = √36 = 6.', checkMode: 'self' },

        // ── Blok 2 — Ogief: skat mediaan, Q1, Q3 (V5-8) ─────────────────────
        { difficulty: 'Easy', question: 'ʼn Frekwensietabel vir eksamentellings (uit 50) het intervalle 0–10 (frekwensie 4), 10–20 (frekwensie 8), 20–30 (frekwensie 16), 30–40 (frekwensie 8), 40–50 (frekwensie 4). Totaal = 40. Bepaal die kumulatiewe frekwensie tot 30.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Kumulatiewe frekwensie tot 30 = 4 + 8 + 16 = 28 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Eksamentelling (bogrens)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde eksamentelling-data (intervalle 0–10 frek 4, 10–20 frek 8, 20–30 frek 16, 30–40 frek 8, 40–50 frek 4, totaal 40), die kumulatiewe frekwensies by die bogrense is: 4, 12, 28, 36, 40. Gebruik ʼn ogief geteken uit hierdie punte, skat die mediaantelling.', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 uit 50'], explanation: 'Die mediaan is by kumulatiewe frekwensie n/2 = 20. Dit val binne die 20–30-interval (kumulatiewe frekwensie styg van 12 na 28 daar). Skatting deur interpolasie: 20 + ((20−12)/16)×10 = 20 + 5 = 25 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Eksamentelling (bogrens)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde eksamentelling-ogief (intervalle 0–10 frek 4, 10–20 frek 8, 20–30 frek 16, 30–40 frek 8, 40–50 frek 4, totaal 40, kumulatiewe frekwensies 4, 12, 28, 36, 40), skat Q1 (die telling by die 25%-merk) deur interpolasie.', answer: '17,5', checkMode: 'auto', correctAnswer: '17,5', correctAnswers: ['17,5', '17.5'], explanation: 'Q1 is by kumulatiewe frekwensie n/4 = 10. Dit val binne die 10–20-interval (kumulatiewe frekwensie styg van 4 na 12 daar). Skatting: 10 + ((10−4)/8)×10 = 10 + 7,5 = 17,5 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Eksamentelling (bogrens)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde eksamentelling-ogief (intervalle 0–10 frek 4, 10–20 frek 8, 20–30 frek 16, 30–40 frek 8, 40–50 frek 4, totaal 40, kumulatiewe frekwensies 4, 12, 28, 36, 40), skat Q3 (die telling by die 75%-merk) en bepaal dus die interkwartielwydte, gegewe Q1 = 17,5.', answer: 'Q3 is by kumulatiewe frekwensie 3n/4 = 30, wat binne die 30–40-interval val (kumulatiewe frekwensie styg van 28 na 36 daar). Skatting: 30 + ((30−28)/8)×10 = 30 + 2,5 = 32,5. IKW = Q3 − Q1 = 32,5 − 17,5 = 15.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">50</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(10, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(50, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Eksamentelling (bogrens)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },

        // ── Blok 3 — Histogram / frekwensiepoligoon-interpretasie (V9-12) ───
        { difficulty: 'Easy', question: 'ʼn Histogram vir afleweringstye (minute) het stawe vir intervalle 0–10 (frekwensie 3), 10–20 (frekwensie 7), 20–30 (frekwensie 12), 30–40 (frekwensie 8). Identifiseer die modale klas.', answer: '20–30', checkMode: 'auto', correctAnswer: '20–30', correctAnswers: ['20-30', '20–30', '20 tot 30'], explanation: 'Die modale klas is die interval met die hoogste frekwensie. 20–30 het frekwensie 12, die hoogste van die vier intervalle ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="191.25" width="75" height="53.75" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="183.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><rect x="130" y="119.58333333333333" width="75" height="125.41666666666667" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="111.58333333333333" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><rect x="280" y="101.66666666666669" width="75" height="143.33333333333331" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="93.66666666666669" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Afleweringstyd (minute)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde afleweringstyd-data (intervalle 0–10 frek 3, 10–20 frek 7, 20–30 frek 12, 30–40 frek 8, totaal 30), skat die gemiddelde afleweringstyd deur gebruik te maak van intervalmiddelpunte.', answer: '23,33', checkMode: 'auto', correctAnswer: '23,33', correctAnswers: ['23,33', '23,3', '23.33'], explanation: 'Middelpunte: 5, 15, 25, 35. Σ(middelpunt × frek) = (5×3)+(15×7)+(25×12)+(35×8) = 15+105+300+280 = 700. Gemiddelde = 700 ÷ 30 ≈ 23,33 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="191.25" width="75" height="53.75" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="183.25" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">3</text><rect x="130" y="119.58333333333333" width="75" height="125.41666666666667" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="111.58333333333333" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">7</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><rect x="280" y="101.66666666666669" width="75" height="143.33333333333331" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="93.66666666666669" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Afleweringstyd (minute)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Frekwensiepoligoon word geteken uit dieselfde afleweringstyd-data (middelpunte 5, 15, 25, 35 met frekwensies 3, 7, 12, 8). Beskryf hoe die punte van die frekwensiepoligoon geplot en verbind word.', answer: 'Punte word geplot by (middelpunt, frekwensie): (5,3), (15,7), (25,12), (35,8), en in volgorde verbind met reguit lyne.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><polyline points="92.5,191.25 167.5,119.58333333333333 242.5,30 317.5,101.66666666666669" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="92.5" cy="191.25" r="3.5" fill="#2563eb"/><text x="92.5" y="181.25" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5, 3)</text><circle cx="167.5" cy="119.58333333333333" r="3.5" fill="#2563eb"/><text x="167.5" y="109.58333333333333" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(15, 7)</text><circle cx="242.5" cy="30" r="3.5" fill="#2563eb"/><text x="242.5" y="20" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(25, 12)</text><circle cx="317.5" cy="101.66666666666669" r="3.5" fill="#2563eb"/><text x="317.5" y="91.66666666666669" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(35, 8)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Afleweringstyd (minute)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Hard', question: 'Zanele sê ʼn frekwensiepoligoon en ʼn histogram wat uit dieselfde gegroepeerde data geteken word, sal altyd dieselfde modale klas direk op die grafiek wys. Kommentarieer of dit waar is, met verwysing na hoe elke grafiek frekwensie voorstel.', answer: 'Waar vir die histogram — die hoogste staaf wys die modale klas direk. Vir die frekwensiepoligoon word die modale klas aangedui deur die hoogste punt (piek) van die poligoon, wat by die middelpunt van die modale interval lê, sodat die modale klas steeds geïdentifiseer kan word, maar vanaf die posisie van die piek eerder as ʼn staaf gelees word.', checkMode: 'self' },

        // ── Blok 4 — Simmetries vs skewe oordeel van vyfgetalopsomming (V13-16) ──
        { difficulty: 'Easy', question: 'ʼn Datastel het minimum = 10, Q1 = 20, mediaan = 30, Q3 = 40, maksimum = 50. Is hierdie datastel simmetries, positief skewe, of negatief skewe?', answer: 'simmetries', checkMode: 'auto', correctAnswer: 'simmetries', correctAnswers: ['simmetries', 'Simmetries'], explanation: 'Mediaan tot Q3 = 10, mediaan tot Q1 = 10 (gelyke mondhelftes). Q1 tot minimum = 10, Q3 tot maksimum = 10 (gelyke snorre). Albei kante stem presies ooreen, dus is die data simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Datastel het minimum = 5, Q1 = 15, mediaan = 18, Q3 = 22, maksimum = 60. Bepaal die tipe skeefheid en regverdig jou antwoord met behulp van die snorlengtes.', answer: 'Positief (regs) skewe — die linkersnor (Q1 − min = 15 − 5 = 10) is baie korter as die regtersnor (maks − Q3 = 60 − 22 = 38), wat wys dat die data ʼn lang stert van hoë waardes aan die regterkant het.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Datastel het minimum = 2, Q1 = 25, mediaan = 35, Q3 = 40, maksimum = 48. Bepaal die tipe skeefheid en regverdig jou antwoord met behulp van beide die mond en die snorre.', answer: 'Negatief (links) skewe — die onderste mondhelfte (mediaan − Q1 = 35 − 25 = 10) is groter as die boonste mondhelfte (Q3 − mediaan = 40 − 35 = 5), en die linkersnor (Q1 − min = 25 − 2 = 23) is baie langer as die regtersnor (maks − Q3 = 48 − 40 = 8), wat ʼn lang stert van lae waardes aan die linkerkant wys.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Datastel het minimum = 10, Q1 = 18, mediaan = 24, Q3 = 32, maksimum = 45. Bepaal die tipe skeefheid, met gebruik van beide die mondhelftes en die snorre om jou antwoord te regverdig.', answer: 'Positief (regs) skewe — die boonste mondhelfte (Q3 − mediaan = 32 − 24 = 8) is groter as die onderste mondhelfte (mediaan − Q1 = 24 − 18 = 6), en die regtersnor (maks − Q3 = 45 − 32 = 13) is langer as die linkersnor (Q1 − min = 18 − 10 = 8), wat albei ʼn langer verspreiding aan die hoër kant aandui.', checkMode: 'self' },

        // ── Blok 5 — Variansie / SA-vergelyking van twee datastelle (V17-18) ──
        { difficulty: 'Hard', question: 'Klas A se toetstellings: 50, 55, 60, 65, 70 (gemiddelde = 60). Klas B se toetstellings: 40, 55, 60, 65, 80 (gemiddelde = 60). Bepaal die standaardafwyking van Klas A, en wys jou werk.', answer: 'Afwykings: −10, −5, 0, 5, 10. Kwadratiese afwykings: 100, 25, 0, 25, 100. Som = 250. Variansie = 250 ÷ 5 = 50. Standaardafwyking = √50 ≈ 7,07.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde twee klasse (Klas A: 50, 55, 60, 65, 70, gemiddelde 60; Klas B: 40, 55, 60, 65, 80, gemiddelde 60), bepaal die standaardafwyking van Klas B en gee aan watter klas meer konsekwente tellings het.', answer: 'Afwykings: −20, −5, 0, 5, 20. Kwadratiese afwykings: 400, 25, 0, 25, 400. Som = 850. Variansie = 850 ÷ 5 = 170. Standaardafwyking = √170 ≈ 13,04. Aangesien Klas A die kleiner standaardafwyking het (≈7,07 teenoor ≈13,04), het Klas A meer konsekwente tellings, al het albei klasse dieselfde gemiddelde.', checkMode: 'self' },

        // ── Blok 6 — Gekombineerde ogief- en skeefheidsredenasie (V19-20) ────
        { difficulty: 'Hard', question: 'ʼn Ogief vir die ouderdomme (in jaar) van 60 lede by ʼn gimnasium gaan deur die punte (10, 0), (30, 15), (50, 45), (70, 60). Gebruik hierdie geplotte punte, skat die interkwartielwydte van die ouderdomme.', answer: 'Q1 is by kumulatiewe frekwensie n/4 = 15, wat presies by die geplotte punt (30, 15) voorkom, dus Q1 = 30. Q3 is by kumulatiewe frekwensie 3n/4 = 45, wat presies by die geplotte punt (50, 45) voorkom, dus Q3 = 50. IKW = Q3 − Q1 = 50 − 30 = 20 jaar.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Gegee die geskatte vyfgetalopsomming van ʼn ogief van leerders se reistye (minute) skool toe: minimum = 5, Q1 = 12, mediaan = 16, Q3 = 20, maksimum = 55. Bepaal die skeefheid van die verspreiding en verduidelik wat dit aandui oor die groep leerders se reistye.", answer: 'Positief (regs) skewe — die regtersnor (maks − Q3 = 55 − 20 = 35) is baie langer as die linkersnor (Q1 − min = 12 − 5 = 7), en die boonste mondhelfte (Q3 − mediaan = 4) is effens groter as die onderste mondhelfte (mediaan − Q1 = 4, ongeveer gelyk). Dit dui aan dat die meeste leerders relatief kort, soortgelyke reistye het, maar ʼn klein aantal reis veel verder, wat die verspreiding se stert na regs trek.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het variansie, standaardafwyking, ogiewes, histogramme en skeefheidsoordele bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor ogiefinterpolasie of skeefheid weer deur, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor standaardafwyking en die lees van ʼn ogief weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1 — Variansie / standaardafwyking van rou data (V1-4) ──────
        { difficulty: 'Easy', question: 'Bepaal die standaardafwyking van: 5, 7, 9, 11, 13 (gemiddelde = 9).', answer: '2,83', checkMode: 'auto', correctAnswer: '2,83', correctAnswers: ['2,83', '2.83'], explanation: 'Afwykings: −4, −2, 0, 2, 4. Kwadratiese afwykings: 16, 4, 0, 4, 16. Som = 40. Variansie = 40 ÷ 5 = 8. Standaardafwyking = √8 ≈ 2,83 ✓' },
        { difficulty: 'Easy', question: 'Bepaal die variansie van: 11, 13, 15, 17, 19, 21 (gemiddelde = 16).', answer: '11,67', checkMode: 'auto', correctAnswer: '11,67', correctAnswers: ['11,67', '11,7', '70/6', '11.67'], explanation: 'Afwykings: −5, −3, −1, 1, 3, 5. Kwadratiese afwykings: 25, 9, 1, 1, 9, 25. Som = 70. Variansie = 70 ÷ 6 ≈ 11,67 ✓' },
        { difficulty: 'Medium', question: 'Bepaal die standaardafwyking van: 4, 8, 12, 16, 20 (gemiddelde = 12), en wys jou werk.', answer: 'Afwykings: −8, −4, 0, 4, 8. Kwadratiese afwykings: 64, 16, 0, 16, 64. Som = 160. Variansie = 160 ÷ 5 = 32. Standaardafwyking = √32 ≈ 5,66.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die standaardafwyking van: 13, 17, 19, 22, 26, 28, 33 (gemiddelde = 22,57, afgerond tot 2 desimale plekke), en wys jou volledige werk.', answer: 'Afwykings (met gemiddelde ≈ 22,57): −9,57, −5,57, −3,57, −0,57, 3,43, 5,43, 10,43. Kwadratiese afwykings ≈ 91,6, 31,0, 12,7, 0,3, 11,8, 29,5, 108,7. Som ≈ 285,7. Variansie ≈ 285,7 ÷ 7 ≈ 40,8. Standaardafwyking ≈ √40,8 ≈ 6,39.', checkMode: 'self' },

        // ── Blok 2 — Ogief: skat mediaan, Q1, Q3 (V5-8) ─────────────────────
        { difficulty: 'Easy', question: 'ʼn Frekwensietabel vir die hoogtes (cm) van 40 saailinge het intervalle 0–20 (frekwensie 4), 20–40 (frekwensie 8), 40–60 (frekwensie 16), 60–80 (frekwensie 8), 80–100 (frekwensie 4). Totaal = 40. Bepaal die kumulatiewe frekwensie tot 60.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Kumulatiewe frekwensie tot 60 = 4 + 8 + 16 = 28 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Saailinghoogte (bogrens, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde saailing-hoogte-data (intervalle 0–20 frek 4, 20–40 frek 8, 40–60 frek 16, 60–80 frek 8, 80–100 frek 4, totaal 40), die kumulatiewe frekwensies by die bogrense is: 4, 12, 28, 36, 40. Gebruik ʼn ogief geteken uit hierdie punte, skat die mediaanhoogte.', answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50cm', '50 cm'], explanation: 'Die mediaan is by kumulatiewe frekwensie n/2 = 20. Dit val binne die 40–60-interval (kumulatiewe frekwensie styg van 12 na 28 daar). Skatting: 40 + ((20−12)/16)×20 = 40 + 10 = 50 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Saailinghoogte (bogrens, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde saailing-hoogte-ogief (intervalle 0–20 frek 4, 20–40 frek 8, 40–60 frek 16, 60–80 frek 8, 80–100 frek 4, totaal 40, kumulatiewe frekwensies 4, 12, 28, 36, 40), skat Q1 (die hoogte by die 25%-merk) deur interpolasie.', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35cm', '35 cm'], explanation: 'Q1 is by kumulatiewe frekwensie n/4 = 10. Dit val binne die 20–40-interval (kumulatiewe frekwensie styg van 4 na 12 daar). Skatting: 20 + ((10−4)/8)×20 = 20 + 15 = 35 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Saailinghoogte (bogrens, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde saailing-hoogte-ogief (intervalle 0–20 frek 4, 20–40 frek 8, 40–60 frek 16, 60–80 frek 8, 80–100 frek 4, totaal 40, kumulatiewe frekwensies 4, 12, 28, 36, 40), skat Q3 (die hoogte by die 75%-merk) en bepaal dus die interkwartielwydte, gegewe Q1 = 35.', answer: 'Q3 is by kumulatiewe frekwensie 3n/4 = 30, wat binne die 60–80-interval val (kumulatiewe frekwensie styg van 28 na 36 daar). Skatting: 60 + ((30−28)/8)×20 = 60 + 5 = 65. IKW = Q3 − Q1 = 65 − 35 = 30.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(20, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(40, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(60, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(80, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Saailinghoogte (bogrens, cm)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },

        // ── Blok 3 — Histogram / frekwensiepoligoon-interpretasie (V9-12) ───
        { difficulty: 'Easy', question: 'ʼn Histogram vir die ouderdomme (jaar) van 30 kliënte het stawe vir intervalle 0–10 (frekwensie 5), 10–20 (frekwensie 9), 20–30 (frekwensie 10), 30–40 (frekwensie 6). Identifiseer die modale klas.', answer: '20–30', checkMode: 'auto', correctAnswer: '20–30', correctAnswers: ['20-30', '20–30', '20 tot 30'], explanation: 'Die modale klas is die interval met die hoogste frekwensie. 20–30 het frekwensie 10, die hoogste van die vier intervalle ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="137.5" width="75" height="107.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="129.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><rect x="130" y="51.5" width="75" height="193.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="43.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><rect x="280" y="116" width="75" height="129" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="108" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kliënt-ouderdom (jaar)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde kliënt-ouderdom-data (intervalle 0–10 frek 5, 10–20 frek 9, 20–30 frek 10, 30–40 frek 6, totaal 30), skat die gemiddelde ouderdom deur gebruik te maak van intervalmiddelpunte.', answer: '20,67', checkMode: 'auto', correctAnswer: '20,67', correctAnswers: ['20,67', '20,7', '20.67'], explanation: 'Middelpunte: 5, 15, 25, 35. Σ(middelpunt × frek) = (5×5)+(15×9)+(25×10)+(35×6) = 25+135+250+210 = 620. Gemiddelde = 620 ÷ 30 ≈ 20,67 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="137.5" width="75" height="107.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="129.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><rect x="130" y="51.5" width="75" height="193.5" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="43.5" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><rect x="280" y="116" width="75" height="129" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="108" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kliënt-ouderdom (jaar)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Frekwensiepoligoon word geteken uit dieselfde kliënt-ouderdom-data (middelpunte 5, 15, 25, 35 met frekwensies 5, 9, 10, 6). Beskryf hoe die punte van die frekwensiepoligoon geplot en verbind word.', answer: 'Punte word geplot by (middelpunt, frekwensie): (5,5), (15,9), (25,10), (35,6), en in volgorde verbind met reguit lyne.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><polyline points="92.5,137.5 167.5,51.5 242.5,30 317.5,116" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="92.5" cy="137.5" r="3.5" fill="#2563eb"/><text x="92.5" y="127.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5, 5)</text><circle cx="167.5" cy="51.5" r="3.5" fill="#2563eb"/><text x="167.5" y="41.5" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(15, 9)</text><circle cx="242.5" cy="30" r="3.5" fill="#2563eb"/><text x="242.5" y="20" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(25, 10)</text><circle cx="317.5" cy="116" r="3.5" fill="#2563eb"/><text x="317.5" y="106" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(35, 6)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Kliënt-ouderdom (jaar)</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Hard', question: 'Thabo sê om ʼn ekstra leë interval met frekwensie 0 by elke kant van ʼn frekwensiepoligoon by te voeg (voor die eerste en na die laaste data-interval) is goeie praktyk. Verduidelik waarom dit gedoen word.', answer: 'Deur ʼn nul-frekwensie-interval by elke kant by te voeg, kan die poligoon afgebring word om die x-as aan albei kante te raak, wat die vorm behoorlik afsluit sodat dit ʼn volledige, leesbare buitelyn van die verspreiding vorm eerder as om skielik in die lug te begin en te eindig.', checkMode: 'self' },

        // ── Blok 4 — Simmetries vs skewe oordeel van vyfgetalopsomming (V13-16) ──
        { difficulty: 'Easy', question: 'ʼn Datastel het minimum = 15, Q1 = 25, mediaan = 35, Q3 = 45, maksimum = 55. Is hierdie datastel simmetries, positief skewe, of negatief skewe?', answer: 'simmetries', checkMode: 'auto', correctAnswer: 'simmetries', correctAnswers: ['simmetries', 'Simmetries'], explanation: 'Mediaan tot Q3 = 10, mediaan tot Q1 = 10 (gelyke mondhelftes). Q1 tot minimum = 10, Q3 tot maksimum = 10 (gelyke snorre). Albei kante stem presies ooreen, dus is die data simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Datastel het minimum = 8, Q1 = 18, mediaan = 21, Q3 = 25, maksimum = 65. Bepaal die tipe skeefheid en regverdig jou antwoord met behulp van die snorlengtes.', answer: 'Positief (regs) skewe — die linkersnor (Q1 − min = 18 − 8 = 10) is baie korter as die regtersnor (maks − Q3 = 65 − 25 = 40), wat wys dat die data ʼn lang stert van hoë waardes aan die regterkant het.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Datastel het minimum = 4, Q1 = 28, mediaan = 38, Q3 = 43, maksimum = 50. Bepaal die tipe skeefheid en regverdig jou antwoord met behulp van beide die mond en die snorre.', answer: 'Negatief (links) skewe — die onderste mondhelfte (mediaan − Q1 = 38 − 28 = 10) is groter as die boonste mondhelfte (Q3 − mediaan = 43 − 38 = 5), en die linkersnor (Q1 − min = 28 − 4 = 24) is baie langer as die regtersnor (maks − Q3 = 50 − 43 = 7), wat ʼn lang stert van lae waardes aan die linkerkant wys.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Datastel het minimum = 12, Q1 = 20, mediaan = 26, Q3 = 35, maksimum = 48. Bepaal die tipe skeefheid, met gebruik van beide die mondhelftes en die snorre om jou antwoord te regverdig.', answer: 'Positief (regs) skewe — die boonste mondhelfte (Q3 − mediaan = 35 − 26 = 9) is groter as die onderste mondhelfte (mediaan − Q1 = 26 − 20 = 6), en die regtersnor (maks − Q3 = 48 − 35 = 13) is langer as die linkersnor (Q1 − min = 20 − 12 = 8), wat albei ʼn langer verspreiding aan die hoër kant aandui.', checkMode: 'self' },

        // ── Blok 5 — Variansie / SA-vergelyking van twee datastelle (V17-18) ──
        { difficulty: 'Hard', question: 'Klas A se toetstellings: 45, 50, 55, 60, 65 (gemiddelde = 55). Klas B se toetstellings: 35, 50, 55, 60, 75 (gemiddelde = 55). Bepaal die standaardafwyking van Klas A, en wys jou werk.', answer: 'Afwykings: −10, −5, 0, 5, 10. Kwadratiese afwykings: 100, 25, 0, 25, 100. Som = 250. Variansie = 250 ÷ 5 = 50. Standaardafwyking = √50 ≈ 7,07.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde twee klasse (Klas A: 45, 50, 55, 60, 65, gemiddelde 55; Klas B: 35, 50, 55, 60, 75, gemiddelde 55), bepaal die standaardafwyking van Klas B en gee aan watter klas meer konsekwente tellings het.', answer: 'Afwykings: −20, −5, 0, 5, 20. Kwadratiese afwykings: 400, 25, 0, 25, 400. Som = 850. Variansie = 850 ÷ 5 = 170. Standaardafwyking = √170 ≈ 13,04. Aangesien Klas A die kleiner standaardafwyking het (≈7,07 teenoor ≈13,04), het Klas A meer konsekwente tellings, al het albei klasse dieselfde gemiddelde.', checkMode: 'self' },

        // ── Blok 6 — Gekombineerde ogief- en skeefheidsredenasie (V19-20) ────
        { difficulty: 'Hard', question: 'ʼn Ogief vir die maandelikse dataverbruik (in GB) van 60 leerders gaan deur die punte (0, 0), (10, 15), (20, 45), (30, 60). Gebruik hierdie geplotte punte, skat die interkwartielwydte van die dataverbruik.', answer: 'Q1 is by kumulatiewe frekwensie n/4 = 15, wat presies by die geplotte punt (10, 15) voorkom, dus Q1 = 10GB. Q3 is by kumulatiewe frekwensie 3n/4 = 45, wat presies by die geplotte punt (20, 45) voorkom, dus Q3 = 20GB. IKW = Q3 − Q1 = 20 − 10 = 10GB.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Gegee die geskatte vyfgetalopsomming van ʼn ogief van huishoudings se maandelikse elektrisiteitskoste (rand): minimum = 200, Q1 = 450, mediaan = 600, Q3 = 750, maksimum = 2400. Bepaal die skeefheid van die verspreiding en verduidelik wat dit aandui oor die groep huishoudings se elektrisiteitskoste.", answer: 'Positief (regs) skewe — die regtersnor (maks − Q3 = 2400 − 750 = 1650) is baie langer as die linkersnor (Q1 − min = 450 − 200 = 250), en die mondhelftes is ongeveer gelyk (mediaan − Q1 = 150, Q3 − mediaan = 150). Dit dui aan dat die meeste huishoudings relatief soortgelyke, matige elektrisiteitskoste het, maar ʼn klein aantal huishoudings het baie hoë koste, wat die verspreiding se stert skerp na regs trek.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het variansie, standaardafwyking, ogiewes, histogramme en skeefheidsoordele bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor ogiefinterpolasie of skeefheid weer deur, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor standaardafwyking en die lees van ʼn ogief weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1 — Variansie / standaardafwyking van rou data (V1-4) ──────
        { difficulty: 'Easy', question: 'Bepaal die standaardafwyking van: 6, 8, 10, 12, 14 (gemiddelde = 10).', answer: '2,83', checkMode: 'auto', correctAnswer: '2,83', correctAnswers: ['2,83', '2.83'], explanation: 'Afwykings: −4, −2, 0, 2, 4. Kwadratiese afwykings: 16, 4, 0, 4, 16. Som = 40. Variansie = 40 ÷ 5 = 8. Standaardafwyking = √8 ≈ 2,83 ✓' },
        { difficulty: 'Easy', question: 'Bepaal die variansie van: 9, 11, 13, 15, 17, 19 (gemiddelde = 14).', answer: '11,67', checkMode: 'auto', correctAnswer: '11,67', correctAnswers: ['11,67', '11,7', '70/6', '11.67'], explanation: 'Afwykings: −5, −3, −1, 1, 3, 5. Kwadratiese afwykings: 25, 9, 1, 1, 9, 25. Som = 70. Variansie = 70 ÷ 6 ≈ 11,67 ✓' },
        { difficulty: 'Medium', question: 'Bepaal die standaardafwyking van: 2, 6, 10, 14, 18 (gemiddelde = 10), en wys jou werk.', answer: 'Afwykings: −8, −4, 0, 4, 8. Kwadratiese afwykings: 64, 16, 0, 16, 64. Som = 160. Variansie = 160 ÷ 5 = 32. Standaardafwyking = √32 ≈ 5,66.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bepaal die standaardafwyking van: 10, 14, 17, 20, 24, 27, 31 (gemiddelde = 20,43, afgerond tot 2 desimale plekke), en wys jou volledige werk.', answer: 'Afwykings (met gemiddelde ≈ 20,43): −10,43, −6,43, −3,43, −0,43, 3,57, 6,57, 10,57. Kwadratiese afwykings ≈ 108,8, 41,3, 11,8, 0,2, 12,7, 43,2, 111,7. Som ≈ 329,7. Variansie ≈ 329,7 ÷ 7 ≈ 47,1. Standaardafwyking ≈ √47,1 ≈ 6,86.', checkMode: 'self' },

        // ── Blok 2 — Ogief: skat mediaan, Q1, Q3 (V5-8) ─────────────────────
        { difficulty: 'Easy', question: 'ʼn Frekwensietabel vir die tyd (minute) wat 40 kliënte in ʼn ry spandeer het, het intervalle 0–6 (frekwensie 4), 6–12 (frekwensie 8), 12–18 (frekwensie 16), 18–24 (frekwensie 8), 24–30 (frekwensie 4). Totaal = 40. Bepaal die kumulatiewe frekwensie tot 18.', answer: '28', checkMode: 'auto', correctAnswer: '28', explanation: 'Kumulatiewe frekwensie tot 18 = 4 + 8 + 16 = 28 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ry-tyd (bogrens, minute)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde ry-tyd-data (intervalle 0–6 frek 4, 6–12 frek 8, 12–18 frek 16, 18–24 frek 8, 24–30 frek 4, totaal 40), die kumulatiewe frekwensies by die bogrense is: 4, 12, 28, 36, 40. Gebruik ʼn ogief geteken uit hierdie punte, skat die mediaan-ry-tyd.', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 minute'], explanation: 'Die mediaan is by kumulatiewe frekwensie n/2 = 20. Dit val binne die 12–18-interval (kumulatiewe frekwensie styg van 12 na 28 daar). Skatting: 12 + ((20−12)/16)×6 = 12 + 3 = 15 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ry-tyd (bogrens, minute)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'Gebruik dieselfde ry-tyd-ogief (intervalle 0–6 frek 4, 6–12 frek 8, 12–18 frek 16, 18–24 frek 8, 24–30 frek 4, totaal 40, kumulatiewe frekwensies 4, 12, 28, 36, 40), skat Q1 (die ry-tyd by die 25%-merk) deur interpolasie.', answer: '10,5', checkMode: 'auto', correctAnswer: '10,5', correctAnswers: ['10,5', '10.5', '10,5 minute'], explanation: 'Q1 is by kumulatiewe frekwensie n/4 = 10. Dit val binne die 6–12-interval (kumulatiewe frekwensie styg van 4 na 12 daar). Skatting: 6 + ((10−4)/8)×6 = 6 + 4,5 = 10,5 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ry-tyd (bogrens, minute)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde ry-tyd-ogief (intervalle 0–6 frek 4, 6–12 frek 8, 12–18 frek 16, 18–24 frek 8, 24–30 frek 4, totaal 40, kumulatiewe frekwensies 4, 12, 28, 36, 40), skat Q3 (die ry-tyd by die 75%-merk) en bepaal dus die interkwartielwydte, gegewe Q1 = 10,5.', answer: 'Q3 is by kumulatiewe frekwensie 3n/4 = 30, wat binne die 18–24-interval val (kumulatiewe frekwensie styg van 28 na 36 daar). Skatting: 18 + ((30−28)/8)×6 = 18 + 1,5 = 19,5. IKW = Q3 − Q1 = 19,5 − 10,5 = 9.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">12</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">18</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">24</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="50" y1="223" x2="55" y2="223" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="227" font-size="11" fill="#374151" text-anchor="end">4</text><line x1="50" y1="179" x2="55" y2="179" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="183" font-size="11" fill="#374151" text-anchor="end">12</text><line x1="50" y1="91" x2="55" y2="91" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="95" font-size="11" fill="#374151" text-anchor="end">28</text><line x1="50" y1="47" x2="55" y2="47" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="51" font-size="11" fill="#374151" text-anchor="end">36</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">40</text><path d="M 55,223 C 67.5,215.66666666666666 105,201 130,179 C 155,157 180,113 205,91 C 230,69 255,58 280,47 C 305,36 342.5,28.666666666666668 355,25 " fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="223" r="3.5" fill="#2563eb"/><text x="55" y="213" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 4)</text><circle cx="130" cy="179" r="3.5" fill="#2563eb"/><text x="130" y="169" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(12, 12)</text><circle cx="205" cy="91" r="3.5" fill="#2563eb"/><text x="205" y="81" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(18, 28)</text><circle cx="280" cy="47" r="3.5" fill="#2563eb"/><text x="280" y="37" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(24, 36)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(30, 40)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ry-tyd (bogrens, minute)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>' },

        // ── Blok 3 — Histogram / frekwensiepoligoon-interpretasie (V9-12) ───
        { difficulty: 'Easy', question: 'ʼn Histogram vir die aantal doele aangeteken per wedstryd deur 30 spanne oor ʼn seisoen het stawe vir intervalle 0–10 (frekwensie 2), 10–20 (frekwensie 8), 20–30 (frekwensie 14), 30–40 (frekwensie 6). Identifiseer die modale klas.', answer: '20–30', checkMode: 'auto', correctAnswer: '20–30', correctAnswers: ['20-30', '20–30', '20 tot 30'], explanation: 'Die modale klas is die interval met die hoogste frekwensie. 20–30 het frekwensie 14, die hoogste van die vier intervalle ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="214.28571428571428" width="75" height="30.714285714285722" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="206.28571428571428" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><rect x="130" y="122.14285714285715" width="75" height="122.85714285714285" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="114.14285714285715" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><rect x="280" y="152.85714285714286" width="75" height="92.14285714285714" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="144.85714285714286" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Doele per wedstryd</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde wedstryd-data (intervalle 0–10 frek 2, 10–20 frek 8, 20–30 frek 14, 30–40 frek 6, totaal 30), skat die gemiddelde deur gebruik te maak van intervalmiddelpunte.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: 'Middelpunte: 5, 15, 25, 35. Σ(middelpunt × frek) = (5×2)+(15×8)+(25×14)+(35×6) = 10+120+350+210 = 690. Gemiddelde = 690 ÷ 30 = 23 ✓' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><rect x="55" y="214.28571428571428" width="75" height="30.714285714285722" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="92.5" y="206.28571428571428" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">2</text><rect x="130" y="122.14285714285715" width="75" height="122.85714285714285" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="167.5" y="114.14285714285715" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><rect x="205" y="30" width="75" height="215" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="242.5" y="22" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">14</text><rect x="280" y="152.85714285714286" width="75" height="92.14285714285714" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2"/><text x="317.5" y="144.85714285714286" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Doele per wedstryd</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Frekwensiepoligoon word geteken uit dieselfde wedstryd-data (middelpunte 5, 15, 25, 35 met frekwensies 2, 8, 14, 6). Beskryf hoe die punte van die frekwensiepoligoon geplot en verbind word.', answer: 'Punte word geplot by (middelpunt, frekwensie): (5,2), (15,8), (25,14), (35,6), en in volgorde verbind met reguit lyne.', checkMode: 'self' , diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="30" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">30</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><polyline points="92.5,214.28571428571428 167.5,122.14285714285715 242.5,30 317.5,152.85714285714286" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="92.5" cy="214.28571428571428" r="3.5" fill="#2563eb"/><text x="92.5" y="204.28571428571428" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5, 2)</text><circle cx="167.5" cy="122.14285714285715" r="3.5" fill="#2563eb"/><text x="167.5" y="112.14285714285715" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(15, 8)</text><circle cx="242.5" cy="30" r="3.5" fill="#2563eb"/><text x="242.5" y="20" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(25, 14)</text><circle cx="317.5" cy="152.85714285714286" r="3.5" fill="#2563eb"/><text x="317.5" y="142.85714285714286" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(35, 6)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Doele per wedstryd</text><text x="14" y="137.5" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 137.5)">Frekwensie</text></svg>' },
        { difficulty: 'Hard', question: 'Amahle wil hierdie seisoen se wedstryd-data met verlede seisoen s\'n op dieselfde stel asse vergelyk. Verduidelik waarom ʼn frekwensiepoligoon ʼn beter keuse as ʼn histogram vir hierdie vergelyking sou wees.', answer: 'Twee frekwensiepoligone kan op dieselfde asse as dun lyne geteken word wat onderskeibaar bly, wat ʼn direkte visuele vergelyking van die twee seisoene moontlik maak. Twee histogramme op dieselfde asse sou soliede oorvleuelende stawe gebruik, wat mekaar sou verduister en vergelyking baie moeiliker sou maak om te lees.', checkMode: 'self' },

        // ── Blok 4 — Simmetries vs skewe oordeel van vyfgetalopsomming (V13-16) ──
        { difficulty: 'Easy', question: 'ʼn Datastel het minimum = 20, Q1 = 30, mediaan = 40, Q3 = 50, maksimum = 60. Is hierdie datastel simmetries, positief skewe, of negatief skewe?', answer: 'simmetries', checkMode: 'auto', correctAnswer: 'simmetries', correctAnswers: ['simmetries', 'Simmetries'], explanation: 'Mediaan tot Q3 = 10, mediaan tot Q1 = 10 (gelyke mondhelftes). Q1 tot minimum = 10, Q3 tot maksimum = 10 (gelyke snorre). Albei kante stem presies ooreen, dus is die data simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Datastel het minimum = 6, Q1 = 16, mediaan = 19, Q3 = 23, maksimum = 62. Bepaal die tipe skeefheid en regverdig jou antwoord met behulp van die snorlengtes.', answer: 'Positief (regs) skewe — die linkersnor (Q1 − min = 16 − 6 = 10) is baie korter as die regtersnor (maks − Q3 = 62 − 23 = 39), wat wys dat die data ʼn lang stert van hoë waardes aan die regterkant het.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Datastel het minimum = 3, Q1 = 26, mediaan = 36, Q3 = 41, maksimum = 47. Bepaal die tipe skeefheid en regverdig jou antwoord met behulp van beide die mond en die snorre.', answer: 'Negatief (links) skewe — die onderste mondhelfte (mediaan − Q1 = 36 − 26 = 10) is groter as die boonste mondhelfte (Q3 − mediaan = 41 − 36 = 5), en die linkersnor (Q1 − min = 26 − 3 = 23) is baie langer as die regtersnor (maks − Q3 = 47 − 41 = 6), wat ʼn lang stert van lae waardes aan die linkerkant wys.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Datastel het minimum = 14, Q1 = 22, mediaan = 28, Q3 = 38, maksimum = 50. Bepaal die tipe skeefheid, met gebruik van beide die mondhelftes en die snorre om jou antwoord te regverdig.', answer: 'Positief (regs) skewe — die boonste mondhelfte (Q3 − mediaan = 38 − 28 = 10) is groter as die onderste mondhelfte (mediaan − Q1 = 28 − 22 = 6), en die regtersnor (maks − Q3 = 50 − 38 = 12) is langer as die linkersnor (Q1 − min = 22 − 14 = 8), wat albei ʼn langer verspreiding aan die hoër kant aandui.', checkMode: 'self' },

        // ── Blok 5 — Variansie / SA-vergelyking van twee datastelle (V17-18) ──
        { difficulty: 'Hard', question: 'Klas A se toetstellings: 55, 60, 65, 70, 75 (gemiddelde = 65). Klas B se toetstellings: 45, 60, 65, 70, 85 (gemiddelde = 65). Bepaal die standaardafwyking van Klas A, en wys jou werk.', answer: 'Afwykings: −10, −5, 0, 5, 10. Kwadratiese afwykings: 100, 25, 0, 25, 100. Som = 250. Variansie = 250 ÷ 5 = 50. Standaardafwyking = √50 ≈ 7,07.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde twee klasse (Klas A: 55, 60, 65, 70, 75, gemiddelde 65; Klas B: 45, 60, 65, 70, 85, gemiddelde 65), bepaal die standaardafwyking van Klas B en gee aan watter klas meer konsekwente tellings het.', answer: 'Afwykings: −20, −5, 0, 5, 20. Kwadratiese afwykings: 400, 25, 0, 25, 400. Som = 850. Variansie = 850 ÷ 5 = 170. Standaardafwyking = √170 ≈ 13,04. Aangesien Klas A die kleiner standaardafwyking het (≈7,07 teenoor ≈13,04), het Klas A meer konsekwente tellings, al het albei klasse dieselfde gemiddelde.', checkMode: 'self' },

        // ── Blok 6 — Gekombineerde ogief- en skeefheidsredenasie (V19-20) ────
        { difficulty: 'Hard', question: 'ʼn Ogief vir die weeklikse afstande (in km) gehardloop deur 60 atlete gaan deur die punte (0, 0), (20, 15), (40, 45), (60, 60). Gebruik hierdie geplotte punte, skat die interkwartielwydte van die weeklikse afstande.', answer: 'Q1 is by kumulatiewe frekwensie n/4 = 15, wat presies by die geplotte punt (20, 15) voorkom, dus Q1 = 20km. Q3 is by kumulatiewe frekwensie 3n/4 = 45, wat presies by die geplotte punt (40, 45) voorkom, dus Q3 = 40km. IKW = Q3 − Q1 = 40 − 20 = 20km.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Gegee die geskatte vyfgetalopsomming van ʼn ogief van ʼn fabriek se daaglikse produksiefoute: minimum = 1, Q1 = 6, mediaan = 9, Q3 = 12, maksimum = 40. Bepaal die skeefheid van die verspreiding en verduidelik wat dit aandui oor die fabriek se daaglikse foutgetalle.", answer: 'Positief (regs) skewe — die regtersnor (maks − Q3 = 40 − 12 = 28) is baie langer as die linkersnor (Q1 − min = 6 − 1 = 5), en die mondhelftes is ongeveer gelyk (mediaan − Q1 = 3, Q3 − mediaan = 3). Dit dui aan dat die meeste dae ʼn soortgelyke, lae aantal foute het, maar ʼn klein aantal dae het ongewoon hoë foutgetalle, wat die verspreiding se stert skerp na regs trek.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het variansie, standaardafwyking, ogiewes, histogramme en skeefheidsoordele bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae oor ogiefinterpolasie of skeefheid weer deur, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor standaardafwyking en die lees van ʼn ogief weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
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
    diagramPlaceholder: 'Mond-en-snor-diagram wat minimum=5, Q1=10, mediaan=14, Q3=20, maksimum=35 wys, geteken op ʼn getallelyn met die mond van Q1 tot Q3, ʼn lyn by die mediaan, en snorre wat na die minimum en maksimum strek',
    diagramSvg: '<svg viewBox="0 0 380 155" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="20" y1="100" x2="355" y2="100" stroke="#0f1f3d" stroke-width="2"/><line x1="75" y1="100" x2="120" y2="100" stroke="#0f1f3d" stroke-width="2.5"/><line x1="75" y1="85" x2="75" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><rect x="120" y="75" width="90" height="50" fill="#eff6ff" stroke="#0f1f3d" stroke-width="2.5"/><line x1="156" y1="75" x2="156" y2="125" stroke="#16a34a" stroke-width="2.5"/><line x1="210" y1="100" x2="345" y2="100" stroke="#0f1f3d" stroke-width="2.5"/><line x1="345" y1="85" x2="345" y2="115" stroke="#0f1f3d" stroke-width="2.5"/><text x="75" y="65" font-size="11" fill="#374151" text-anchor="middle">Min</text><text x="120" y="65" font-size="11" fill="#374151" text-anchor="middle">Q1</text><text x="156" y="62" font-size="11" fill="#16a34a" font-weight="700" text-anchor="middle">Mediaan</text><text x="210" y="65" font-size="11" fill="#374151" text-anchor="middle">Q3</text><text x="345" y="65" font-size="11" fill="#374151" text-anchor="middle">Maks</text><text x="75" y="138" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">5</text><text x="120" y="138" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">10</text><text x="156" y="138" font-size="12" fill="#16a34a" font-weight="700" text-anchor="middle">14</text><text x="210" y="138" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">20</text><text x="345" y="138" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">35</text></svg>',
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
    answer: '2,83',
    checkMode: 'auto',
    correctAnswer: '2,83',
    explanation: 'Afwykings: −4, −2, 0, 2, 4. Kwadratiese afwykings: 16, 4, 0, 4, 16. Som = 40. Variansie = 40 ÷ 5 = 8. Standaardafwyking = √8 ≈ 2,83.',
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
    answer: '√18 ≈ 4,24.',
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
        correctAnswer: '6,5',
        explanation: 'n = 10. Q1 is by posisie n/4 = 2,5, dus Q1 = gemiddelde van 2de en 3de waardes = (5 + 8) ÷ 2 = 6,5.',
      },
      {
        label: 'Mediaan =',
        correctAnswer: '15,5',
        explanation: 'n = 10 (ewe). Mediaan = gemiddelde van 5de en 6de waardes = (14 + 17) ÷ 2 = 15,5.',
      },
      {
        label: 'Q3 =',
        correctAnswer: '21,5',
        explanation: 'Q3 is by posisie 3n/4 = 7,5, dus Q3 = gemiddelde van 7de en 8ste waardes = (20 + 23) ÷ 2 = 21,5.',
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
    diagramPlaceholder: 'Ogief (kumulatiewe frekwensiekromme) vir eksamentellings wat styg van (0,0) na ongeveer (100,200), met gemerkte punte wat kumulatiewe frekwensie 50 by telling 40 en kumulatiewe frekwensie 160 by telling 70 wys',
    diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="175" y1="190" x2="175" y2="245" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="190" x2="175" y2="190" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="265" y1="69" x2="265" y2="245" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="69" x2="265" y2="69" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 55,245 L 175,190 L 265,69 L 355,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="245" r="3.5" fill="#2563eb"/><text x="55" y="235" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(0, 0)</text><circle cx="175" cy="190" r="3.5" fill="#2563eb"/><text x="180" y="182" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">(40, 50)</text><circle cx="265" cy="69" r="3.5" fill="#2563eb"/><text x="270" y="61" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">(70, 160)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 200)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Eksamentelling</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>',
  },

  // V19 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Gebruik dieselfde ogief van V18 (n = 200 leerders), bepaal Q1 en Q3 deur die kromme by die 25%- en 75%-kumulatiewe-frekwensiemerke te lees, en bereken daarna die interkwartielwydte.',
    answer: 'Q1 is by kumulatiewe frekwensie n/4 = 50, wat presies op die geplotte punt (40, 50) val, dus Q1 = 40 (ʼn presiese aflesing, nie ʼn skatting nie). Q3 is by kumulatiewe frekwensie 3n/4 = 150, wat tussen die geplotte punte (40, 50) en (70, 160) val: breukdeel = (150 − 50) ÷ (160 − 50) = 100/110 ≈ 0.909, dus Q3 = 40 + 0.909 × (70 − 40) = 40 + 27.3 ≈ 67.3. IKW = Q3 − Q1 = 67.3 − 40 ≈ 27.3.',
    checkMode: 'self',
    diagramPlaceholder: 'Ogief (kumulatiewe frekwensiekromme) vir eksamentellings wat styg van (0,0) na ongeveer (100,200), met gemerkte punte wat kumulatiewe frekwensie 50 by telling 40 en kumulatiewe frekwensie 160 by telling 70 wys',
    diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" font-family="Arial, sans-serif"><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">20</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">40</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">60</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">80</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">100</text><line x1="175" y1="190" x2="175" y2="245" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="190" x2="175" y2="190" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="265" y1="69" x2="265" y2="245" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="55" y1="69" x2="265" y2="69" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 55,245 L 175,190 L 265,69 L 355,25" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="55" cy="245" r="3.5" fill="#2563eb"/><text x="55" y="235" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(0, 0)</text><circle cx="175" cy="190" r="3.5" fill="#2563eb"/><text x="180" y="182" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">(40, 50)</text><circle cx="265" cy="69" r="3.5" fill="#2563eb"/><text x="270" y="61" font-size="11" fill="#2563eb" font-weight="700" text-anchor="start">(70, 160)</text><circle cx="355" cy="25" r="3.5" fill="#2563eb"/><text x="355" y="41" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(100, 200)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Eksamentelling</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Kumulatiewe frekwensie</text></svg>',
  },

  // V20 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "Amahle se spreidingsdiagram van planthoogte teenoor dae wys ʼn duidelike geboë, versnellende patroon (stadige groei aanvanklik, dan vinnige toename). Stel ʼn geskikte model voor en verduidelik jou redenasie.",
    answer: 'ʼn Eksponensiële model sal hierdie data waarskynlik die beste pas, aangesien eksponensiële groei kenmerkend stadig begin en dan vinnig versnel, wat by die beskryfde patroon pas eerder as ʼn konstante lineêre koers of ʼn simmetriese kwadratiese kromme.',
    checkMode: 'self',
  },

  // V21 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: "Thandi se vyf vriende teken aan hoeveel minute elkeen een aand aan huiswerk spandeer het: 25, 30, 32, 35 en 28. Thandi se eie tyd, x, is onbekend, maar die gemiddelde vir al ses vriende (Thandi ingesluit) is 33 minute.\n(a) Bepaal x.\n(b) Die vyf aangetekende waardes (Thandi uitgesluit) het Q1 = 26,5 en Q3 = 33,5, dus IKW = 7. Gebruik die reël dat ʼn waarde onder Q1 − 1,5×IKW of bo Q3 + 1,5×IKW as ʼn uitskieter beskou word, en bepaal of Thandi se huiswerktyd ʼn uitskieter onder die ses vriende is, en gee kommentaar op wat dit aandui.",
    answer: "(a) Som van die vyf bekende tye = 25 + 30 + 32 + 35 + 28 = 150. Totaal vir al ses = 33 × 6 = 198, dus x = 198 − 150 = 48 minute.\n(b) Onderste grens = Q1 − 1,5×IKW = 26,5 − 1,5(7) = 26,5 − 10,5 = 16. Boonste grens = Q3 + 1,5×IKW = 33,5 + 10,5 = 44. Aangesien x = 48 > 44, is Thandi se tyd ʼn uitskieter — sy het onverwags lank aan huiswerk spandeer in vergelyking met haar vriende, ver buite wat die spreiding van die ander vyf waardes sou voorspel.",
    checkMode: 'self',
  },

  // V22 — Moeilik (self) ───────────────────────────────────────────────────────────
  {
    difficulty: 'Hard',
    question: 'Twee spitsspelers het elkeen 9 wedstryde hierdie seisoen gespeel. Hul doele per wedstryd was:\nSpeler A: 1, 2, 2, 3, 3, 3, 4, 4, 5\nSpeler B: 0, 0, 1, 2, 3, 4, 5, 6, 6\nBeide spelers het ʼn gemiddelde van 3 doele per wedstryd.\n(a) Bereken die standaardafwyking van elke speler se doele, en wys jou volledige werk.\n(b) Gebruik beide die standaardafwykings ÉN die vyfgetalopsomming (Q1, mediaan, Q3) van elke speler, en skryf ʼn kort, geregverdigde gevolgtrekking oor watter speler die meer konsekwente doelskiever is, en watter speler ʼn afrigter wat op geleentheidsgewyse groot telling-oorwinnings jaag, sou verkies om te kies.',
    answer: "(a) Speler A: afwykings −2, −1, −1, 0, 0, 0, 1, 1, 2; kwadratiese afwykings 4, 1, 1, 0, 0, 0, 1, 1, 4; som = 12; variansie = 12 ÷ 9 ≈ 1,33; standaardafwyking ≈ 1,15.\nSpeler B: afwykings −3, −3, −2, −1, 0, 1, 2, 3, 3; kwadratiese afwykings 9, 9, 4, 1, 0, 1, 4, 9, 9; som = 46; variansie = 46 ÷ 9 ≈ 5,11; standaardafwyking ≈ 2,26.\n(b) Vyfgetalopsommings: Speler A — Min 1, Q1 2, Mediaan 3, Q3 4, Maks 5 (IKW = 2). Speler B — Min 0, Q1 0,5, Mediaan 3, Q3 5,5, Maks 6 (IKW = 5). Beide spelers het dieselfde gemiddelde en mediaan (3), maar Speler A se baie kleiner standaardafwyking en IKW toon dat sy doelskiet-syfers eng gegroepeer is van wedstryd tot wedstryd — hy is die meer konsekwente doelskieter. Speler B se groter spreiding beteken hy is meer geneig tot beide baie lae (selfs 0-doel) en baie hoë doelskiet-wedstryde, dus behoort ʼn afrigter wat betroubare, voorspelbare uitset soek Speler A te kies, terwyl ʼn afrigter wat op geleentheidsgewyse groot telling-oorwinnings speel eerder Speler B mag verkies.",
    checkMode: 'self',
  },
]

export const resultsConfig = {
  totalMarks: 22,
  messages: [
    { minScore: 20, message: 'Uitstekend! Jy het al die Graad 11-statistiek voltooi en bemeester.' },
    { minScore: 15, message: 'Puik werk!' },
    { minScore: 10, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
