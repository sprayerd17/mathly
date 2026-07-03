import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers ───────────────────────────────────────────────────────────
// Section 1: minimum/maximum → blue (#2563eb), quartiles → orange (#ea580c), median → green (#16a34a)
// Section 2: mean → blue (#2563eb), median → orange (#ea580c), skew direction → red (#dc2626)
// Section 3: mean centre → blue (#2563eb), 1 SD → green (#16a34a), 2 SD → orange (#ea580c), 3 SD → red (#dc2626)
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Statistiek',
  grade: 12,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — HERSIENING: VYFGETALOPSOMMING, MOND-EN-SNOR-DIAGRAM EN OGIEWES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'five-number-summary-box-whisker-ogives',
      title: 'Hersiening — Vyfgetalopsomming, Mond-en-Snor-diagram en Ogiewes',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien sleutelbegrippe van Graad 11-statistiek. Die <strong>vyfgetalopsomming</strong> bestaan uit die ${bl('minimum')}, ${or('Q1')}, ${gr('mediaan (Q2)')}, ${or('Q3')} en ${bl('maksimum')}. ʼn <strong>Mond-en-snor-diagram</strong> stel dit visueel voor — ʼn mond van Q1 tot Q3 met ʼn lyn by die mediaan, en snorre wat na die minimum en maksimum strek. ʼn <strong>Ogief</strong> is ʼn kumulatiewe frekwensiekromme wat teenoor bogrense van intervalle geplot word — dit word gebruik om mediane, kwartiele en persentiele te skat deur van die betrokke kumulatiewe frekwensiewaarde af oor te lees. <strong>Standaardafwyking</strong> meet hoe versprei data vanaf die gemiddelde is — ʼn klein standaardafwyking beteken data is styf saamgegroepeer, ʼn groot een beteken dit is meer versprei.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('minimum / maksimum')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kwartiele (Q1, Q3)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('mediaan (Q2)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Minimum &amp; Maksimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste en grootste waardes in die datastel — die eindpunte van die snorre.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Q1 en Q3</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die onder- en bokwartiele — die mediane van die onderste en boonste helftes van die data.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Mediaan (Q2)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die middelste waarde van die datastel — aangedui deur die lyn binne die mond.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Ogief</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Kumulatiewe frekwensiekromme — plot kumulatiewe frekwensie teenoor bogrense van intervalle en verbind met ʼn gladde kromme.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Struktuur van die mond-en-snor-diagram</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<div style="display:flex;align-items:center;gap:0;margin-bottom:12px;font-size:13px;font-weight:600;overflow-x:auto;">` +
        `<span style="color:#2563eb;white-space:nowrap;">Min</span>` +
        `<span style="flex:1;min-width:16px;height:2px;background:#2563eb;margin:0 4px;"></span>` +
        `<span style="border:2px solid #ea580c;padding:6px 16px;color:#ea580c;white-space:nowrap;">Q1</span>` +
        `<span style="border:2px solid #ea580c;border-left:none;background:#f0fdf4;padding:6px 20px;white-space:nowrap;"><span style="color:#16a34a;font-weight:700;">Mediaan</span></span>` +
        `<span style="border:2px solid #ea580c;border-left:none;padding:6px 16px;color:#ea580c;white-space:nowrap;">Q3</span>` +
        `<span style="flex:1;min-width:16px;height:2px;background:#2563eb;margin:0 4px;"></span>` +
        `<span style="color:#2563eb;white-space:nowrap;">Maks</span>` +
        `</div>` +
        `<p style="margin:0;font-size:13px;color:#6b7280;">Die mond strek van ${or('Q1')} tot ${or('Q3')}. Die lyn binne die mond is die ${gr('mediaan')}. Die snorre strek na die ${bl('minimum')} en ${bl('maksimum')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die ogief aflees</p>` +
        `<p style="margin:0;color:#1e3a8a;">Om die mediaan te skat, lees oor vanaf 50% van die totale frekwensie na die kromme, en lees dan af na die horisontale as. Vir kwartiele, lees oor vanaf 25% (Q1) en 75% (Q3) van die totaal. Vir persentiele, gebruik die betrokke persentasie van die totale frekwensie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die vyfgetalopsomming van: 5, 9, 12, 15, 18, 22, 27, 31, 38.',
          answer: `${bl('Min = 5')}, ${or('Q1 = 10.5')}, ${gr('Mediaan = 18')}, ${or('Q3 = 29')}, ${bl('Maks = 38')}`,
          steps: [
            'Rangskik in stygende volgorde: 5, 9, 12, 15, 18, 22, 27, 31, 38 (reeds gerangskik). Daar is 9 waardes.',
            `${bl('Minimum')} = ${bl('5')} (die kleinste waarde). ${bl('Maksimum')} = ${bl('38')} (die grootste waarde).`,
            `${gr('Mediaan')} = ${gr('18')} — die 5de waarde in ʼn stel van 9 is die middelste waarde.`,
            `Onderste helfte (waardes onder die mediaan): 5, 9, 12, 15. ${or('Q1')} = mediaan van onderste helfte = (9 + 12) ÷ 2 = ${or('10.5')}.`,
            `Boonste helfte (waardes bo die mediaan): 22, 27, 31, 38. ${or('Q3')} = mediaan van boonste helfte = (27 + 31) ÷ 2 = ${or('29')}.`,
            `<strong>Vyfgetalopsomming:</strong> ${bl('Min = 5')}, ${or('Q1 = 10.5')}, ${gr('Mediaan = 18')}, ${or('Q3 = 29')}, ${bl('Maks = 38')}.`,
          ],
        },
        {
          question: 'ʼn Datastel het intervalle 0–10 (frekwensie 4), 10–20 (frekwensie 8), 20–30 (frekwensie 12), 30–40 (frekwensie 6), totaal 30. Bepaal die kumulatiewe frekwensies vir die ogief.',
          answer: 'Tot 10: 4 | Tot 20: 12 | Tot 30: 24 | Tot 40: 30',
          steps: [
            'Kumulatiewe frekwensie tel frekwensies geleidelik van die laagste interval opwaarts bymekaar.',
            'Tot 10 (bogrens 10): frekwensie = 4. Kumulatiewe frekwensie = <strong>4</strong>.',
            'Tot 20 (bogrens 20): 4 + 8 = <strong>12</strong>.',
            'Tot 30 (bogrens 30): 12 + 12 = <strong>24</strong>.',
            'Tot 40 (bogrens 40): 24 + 6 = <strong>30</strong>. Dit is gelyk aan die totaal — kontroleer dit altyd.',
            'Plot die ogief met die punte (10, 4), (20, 12), (30, 24), (40, 30) met bogrense van intervalle op die horisontale as en kumulatiewe frekwensie op die vertikale as.',
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die vyfgetalopsomming, mond-en-snor-diagram en hoe om ʼn ogief uit ʼn frekwensietabel te teken en te lees, verduidelik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — SIMMETRIESE EN SKEWE DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'symmetric-skewed-data',
      title: 'Simmetriese en Skewe Data',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">Simmetriese data het ʼn gelyke verspreiding aan albei kante van die ${bl('gemiddelde')} — die ${bl('gemiddelde')}, ${or('mediaan')} en modus is ongeveer gelyk en die verspreiding is klokvormig. <strong>Positief skewe</strong> (regs-skewe) data het ʼn langer stert na regs, wat die ${bl('gemiddelde')} bo die ${or('mediaan')} trek (${bl('gemiddelde')} &gt; ${or('mediaan')} &gt; modus). <strong>Negatief skewe</strong> (links-skewe) data het ʼn langer stert na links, wat die ${bl('gemiddelde')} onder die ${or('mediaan')} trek (${bl('gemiddelde')} &lt; ${or('mediaan')} &lt; modus). Mond-en-snor-diagramme openbaar skeefheid — as die ${or('mediaan')}-lyn nader aan Q1 lê, is die data positief skewe; as dit nader aan Q3 lê, is dit negatief skewe.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemiddelde')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('mediaan')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('skeefheidsrigting')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes verspreidings</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Simmetries</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">Gemiddelde ≈ Mediaan ≈ Modus. Klokvormig — gelyke sterte aan albei kante.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Mediaanlyn lê in die middel van die mond.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Positief Skewe (Regs)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Gemiddelde')} &gt; ${or('Mediaan')} &gt; Modus. Langer stert na ${re('regs')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Mediaan lê nader aan Q1; regtersnor is langer.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Negatief Skewe (Links)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:6px;">${bl('Gemiddelde')} &lt; ${or('Mediaan')} &lt; Modus. Langer stert na ${re('links')}.</p>` +
        `<p style="color:#6b7280;font-size:13px;margin:0;">Mediaan lê nader aan Q3; linkersnor is langer.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Geheuehulpmiddel</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${bl('gemiddelde')} word altyd na die ${re('stert')} getrek — dit volg die rigting van die skeefheid. Die ${or('mediaan')} is meer bestand teen uiterste waardes. Vergelyk ${bl('gemiddelde')} en ${or('mediaan')} om die rigting van skeefheid te bepaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Datastel het gemiddelde = 65, mediaan = 72, modus = 78. Beskryf die skeefheid.',
          answer: `Die data is ${re('negatief (links) skewe')}`,
          steps: [
            `Identifiseer die maatstawwe van sentrale tendens: ${bl('gemiddelde')} = ${bl('65')}, ${or('mediaan')} = ${or('72')}, modus = 78.`,
            `Vergelyk: ${bl('gemiddelde')} &lt; ${or('mediaan')} &lt; modus → 65 &lt; 72 &lt; 78.`,
            `Aangesien ${bl('gemiddelde')} &lt; ${or('mediaan')} &lt; modus, is die data ${re('negatief (links) skewe')}.`,
            `${re('Verduideliking:')} Die ${bl('gemiddelde')} word afwaarts getrek deur ʼn langer stert van laer waardes na links — dit is kenmerkend van negatiewe skeefheid.`,
          ],
        },
        {
          question: 'Sipho het ʼn mond-en-snor-diagram waar Q1 = 20, mediaan = 22, Q3 = 35, minimum = 15, maksimum = 50. Beskryf die skeefheid.',
          answer: `Die data is ${re('positief (regs) skewe')}`,
          steps: [
            `Ondersoek die posisie van die ${or('mediaan')} binne die mond: Q1 = 20, ${or('mediaan')} = ${or('22')}, Q3 = 35.`,
            `Afstand van Q1 tot ${or('mediaan')}: 22 − 20 = 2 (kort). Afstand van ${or('mediaan')} tot Q3: 35 − 22 = 13 (lank).`,
            `Ondersoek die snorre: linkersnor = 20 − 15 = 5 (kort). Regtersnor = 50 − 35 = 15 (lank).`,
            `Die ${or('mediaan')} lê baie nader aan Q1 as aan Q3, en die regtersnor is baie langer as die linkersnor — dit bevestig ${re('positiewe (regse) skeefheid')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat simmetriese en skewe verspreidings verduidelik met voorbeelde van positiewe en negatiewe skeefheid deur middel van mond-en-snor-diagramme" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — DIE NORMAALVERSPREIDING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'normal-distribution',
      title: 'Die Normaalverspreiding',
      icon: '🔔',
      explanation:
        `<p style="margin-bottom:16px;">Die <strong>normaalverspreiding</strong> is ʼn volkome simmetriese klokvormige verspreiding waar die ${bl('gemiddelde')}, ${or('mediaan')} en modus almal gelyk is en in die middel lê. Dit volg die <strong>68-95-99.7-reël</strong>: ongeveer ${gr('68%')} van die data val binne ${gr('1 standaardafwyking')} van die gemiddelde (tussen μ − σ en μ + σ), ${or('95%')} binne ${or('2 standaardafwykings')}, en ${re('99.7%')} binne ${re('3 standaardafwykings')}. Hierdie reël stel ons in staat om die persentasie data wat in enige gegewe interval om die gemiddelde val, te bereken.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemiddeldesentrum (μ)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('1 standaardafwyking — 68%')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('2 standaardafwykings — 95%')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('3 standaardafwykings — 99.7%')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die 68-95-99.7-reël</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${gr('68%')} van die data val binne ${gr('1 standaardafwyking')} van die gemiddelde: tussen ${bl('μ')} − ${gr('σ')} en ${bl('μ')} + ${gr('σ')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('95%')} van die data val binne ${or('2 standaardafwykings')} van die gemiddelde: tussen ${bl('μ')} − ${or('2σ')} en ${bl('μ')} + ${or('2σ')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">${re('99.7%')} van die data val binne ${re('3 standaardafwykings')} van die gemiddelde: tussen ${bl('μ')} − ${re('3σ')} en ${bl('μ')} + ${re('3σ')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Simmetrie gebruik om buitenste persentasies te vind</p>` +
        `<p style="margin:0;color:#1e3a8a;">Aangesien die normaalverspreiding simmetries is om die ${bl('gemiddelde')}, word die persentasie buite ʼn gegewe band gelykop tussen die twee sterte verdeel. Byvoorbeeld, 5% val buite 2 standaardafwykings — dus val 2.5% bo μ + 2σ en 2.5% val onder μ − 2σ.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die lengtes van Graad 12-leerders is normaal verdeel met gemiddelde 165 cm en standaardafwyking 8 cm. Bepaal die persentasie leerders met ʼn lengte tussen 157 cm en 173 cm.',
          answer: `Ongeveer ${gr('68%')} van leerders`,
          steps: [
            `Identifiseer die grense: 157 = 165 − 8 = ${bl('μ')} − ${gr('σ')} en 173 = 165 + 8 = ${bl('μ')} + ${gr('σ')}.`,
            `Hierdie grense is presies ${gr('1 standaardafwyking')} van die gemiddelde aan elke kant.`,
            `Volgens die 68-95-99.7-reël val ongeveer ${gr('68%')} van die data binne 1 standaardafwyking van die gemiddelde.`,
            `<strong>Antwoord:</strong> Ongeveer ${gr('68%')} van leerders het ʼn lengte tussen 157 cm en 173 cm.`,
          ],
        },
        {
          question: 'Gebruik dieselfde verspreiding (gemiddelde 165 cm, standaardafwyking 8 cm), bepaal die persentasie leerders langer as 181 cm.',
          answer: `Ongeveer ${or('2.5%')} van leerders`,
          steps: [
            `Bepaal hoeveel standaardafwykings 181 cm van die gemiddelde is: 181 = 165 + 2 × 8 = ${bl('μ')} + ${or('2σ')}.`,
            `Volgens die 68-95-99.7-reël val ${or('95%')} van die data binne ${or('2 standaardafwykings')} van die gemiddelde.`,
            `Daarom val ${or('5%')} buite 2 standaardafwykings (in albei sterte gesamentlik).`,
            `Aangesien die verspreiding simmetries is, val 5% ÷ 2 = ${or('2.5%')} bo ${bl('μ')} + ${or('2σ')}.`,
            `<strong>Antwoord:</strong> Ongeveer ${or('2.5%')} van leerders is langer as 181 cm.`,
          ],
        },
        {
          question: 'Lerato sê dat in ʼn normaalverspreiding, feitlik al die data binne 3 standaardafwykings van die gemiddelde val. Is sy korrek?',
          answer: `Ja — Lerato is ${re('korrek')}`,
          steps: [
            `Volgens die 68-95-99.7-reël val ${re('99.7%')} van die data binne ${re('3 standaardafwykings')} van die gemiddelde (tussen ${bl('μ')} − ${re('3σ')} en ${bl('μ')} + ${re('3σ')}).`,
            `Slegs 0.3% van die data val buite 3 standaardafwykings — ʼn uiters klein gedeelte.`,
            `<strong>Antwoord:</strong> Ja — Lerato is korrek. ${re('Feitlik al')} die data (99.7%) in ʼn normaalverspreiding val binne 3 standaardafwykings, wat haar stelling effektief korrek maak vir praktiese doeleindes.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die normaalverspreiding en die 68-95-99.7-reël verduidelik met uitgewerkte voorbeelde wat gebruik maak van standaardafwykingintervalle" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — STEEKPROEFNEMING EN VOOROORDEEL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sampling-and-bias',
      title: 'Steekproefneming en Vooroordeel',
      icon: '🎯',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Populasie')} is die volledige groep wat bestudeer word. ʼn ${or('Steekproef')} is ʼn kleiner geselekteerde deelversameling wat gebruik word om die ${bl('populasie')} te verteenwoordig. ʼn <strong>verteenwoordigende steekproef</strong> weerspieël akkuraat die eienskappe van die hele ${bl('populasie')}. ${re('Vooroordeel')} kom voor wanneer die ${or('steekproef')} op ʼn wyse gekies word wat sistematies sekere uitkomste bevoordeel — algemene bronne van ${re('vooroordeel')} sluit in gerieflikheidsteekproefneming (slegs steekproewe neem van wat maklik toeganklik is), vrywillige-reaksie-${re('vooroordeel')} (slegs mense met sterk menings reageer), en leidende vrae. Groter ${or('steekproewe')} is oor die algemeen meer betroubaar, maar bly steeds vatbaar vir sistematiese ${re('vooroordeel')} as die seleksiemetode gebrekkig is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('populasie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('steekproef')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('vooroordeel')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelbegrippe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Populasie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die volledige groep wat ondersoek word — elke lid waaroor ons gevolgtrekkings wil maak.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Steekproef</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Deelversameling van die populasie wat vir studie gekies is. ʼn Verteenwoordigende steekproef weerspieël die populasie se eienskappe.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Vooroordeel</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Sistematiese fout wat deur ʼn gebrekkige seleksiemetode veroorsaak word — lei tot ʼn steekproef wat die populasie nie regverdig verteenwoordig nie.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gerieflikheidsteekproefneming</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Om te kies wie ook al die maklikste bereikbaar is — bring byna altyd vooroordeel mee omdat toeganklikheid nie ewekansig is nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#991b1b;margin-bottom:6px;">Belangrik</p>` +
        `<p style="margin:0;color:#7f1d1d;">ʼn Groter ${or('steekproef')} verminder ewekansige fout, maar herstel ${re('nie')} sistematiese ${re('vooroordeel')} nie. As die seleksiemetode gebrekkig is, sal die versameling van meer data die ${re('bevooroordeelde')} resultaat eenvoudig versterk. Evalueer altyd beide die grootte en die seleksiemetode van ʼn ${or('steekproef')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Skool wil weet wat leerders se opinies is oor die snoepwinkel-spyskaart. Die skoolhoof doen ʼn opname net onder die Graad 8-leerders. Identifiseer die vooroordeel.',
          answer: `Dit is ʼn ${re('bevooroordeelde')} steekproef — ${or('Graad 8-leerders')} verteenwoordig nie die hele ${bl('skoolpopulasie')} nie`,
          steps: [
            `Identifiseer die ${bl('populasie')}: alle leerders by die skool.`,
            `Identifiseer die ${or('steekproef')}: slegs Graad 8-leerders.`,
            `Beoordeel verteenwoordigendheid: Graad 8-leerders mag heel ander voorkeure hê as ouer leerders — hulle is slegs ʼn deelversameling van een jaargroep.`,
            `Die ${or('steekproef')} is ${re('nie verteenwoordigend')} van die hele ${bl('skoolpopulasie')} nie — dit is ʼn ${re('bevooroordeelde')} steekproef. Die gevolgtrekkings uit hierdie opname kan nie na die hele skool veralgemeen word nie.`,
          ],
        },
        {
          question: 'Sipho doen ʼn opname onder mense wat ʼn gimnasium verlaat oor oefengewoontes. Hy maak die gevolgtrekking dat 90% van Suid-Afrikaners gereeld oefen. Is sy gevolgtrekking geldig?',
          answer: `Nee — dit is ʼn erg ${re('bevooroordeelde')} gerieflikheidsteekproef ${or('wat')} nie na alle Suid-Afrikaners veralgemeen kan word nie`,
          steps: [
            `Identifiseer die ${bl('populasie')} waarna Sipho wil veralgemeen: alle Suid-Afrikaners.`,
            `Identifiseer die ${or('steekproef')}: mense wat ʼn gimnasium verlaat.`,
            `Beoordeel die ${re('vooroordeel')}: gimnasiumgangers oefen baie meer waarskynlik gereeld as die algemene ${bl('populasie')} — hulle het hulself in ʼn groep met sterk oefengewoontes geplaas.`,
            `Dit is ʼn erg ${re('bevooroordeelde')} gerieflikheidsteekproef. Die syfer van 90% weerspieël slegs gimnasiumgebruikers, nie die breër ${bl('populasie')} nie.`,
            `<strong>Gevolgtrekking:</strong> Nee — Sipho se gevolgtrekking is nie geldig nie. Die ${or('steekproef')} is nie verteenwoordigend van alle Suid-Afrikaners nie, en die resultaat kan nie veralgemeen word nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat populasie teenoor steekproef, verteenwoordigende steekproewe, en algemene bronne van vooroordeel insluitend gerieflikheidsteekproefneming en vrywillige-reaksie-vooroordeel verduidelik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — SPREIDINGSDIAGRAMME, KLEINSTE-KWADRATE-REGRESSIELYN EN KORRELASIEKOËFFISIËNT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'scatter-plots-regression-correlation',
      title: 'Spreidingsdiagramme, Kleinste-kwadrate-regressielyn en Korrelasiekoëffisiënt',
      icon: '📉',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Spreidingsdiagram</strong> vertoon bivariaatdata (twee verwante veranderlikes) as punte, wat ons in staat stel om neigings visueel te identifiseer. Die <strong>kleinste-kwadrate-${bl('regressielyn')}</strong> (lyn van beste passing) het die vergelyking y = a + bx, waar ${bl('b')} = gradiënt en ${bl('a')} = y-afsnit. Hierdie lyn minimeer die som van die kwadrate van die vertikale afstande van elke punt na die lyn. Die <strong>korrelasiekoëffisiënt ${or('r')}</strong> meet die sterkte en rigting van die lineêre verband: ${or('r')} = 1 is volmaakte ${gr('positiewe korrelasie')}, ${or('r')} = −1 is volmaakte ${re('negatiewe korrelasie')}, ${or('r')} = 0 beteken geen lineêre korrelasie nie. Waardes tussen 0.75 en 1 (of −1 en −0.75) dui op sterk korrelasie, 0.5 tot 0.75 op matige korrelasie, en onder 0.5 op swak korrelasie. Op die Casio fx-82-reeks: gaan na STAT-modus, kies A+BX (lineêre regressie), voer x- en y-waardes in, en gaan dan na die regressiekieslys om ${bl('a')}, ${bl('b')} en ${or('r')} te vind.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('positiewe korrelasie')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('negatiewe korrelasie')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('regressielyn / a en b')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('r-waarde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">r interpreteer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">+</span>` +
        `<p style="margin:0;font-size:14px;">${gr('Positiewe r')} (0 tot 1): namate x toeneem, neig y ook om toe te neem. ${or('r')} naby ${gr('1')} = sterk ${gr('positiewe')} lineêre korrelasie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">−</span>` +
        `<p style="margin:0;font-size:14px;">${re('Negatiewe r')} (−1 tot 0): namate x toeneem, neig y om af te neem. ${or('r')} naby ${re('−1')} = sterk ${re('negatiewe')} lineêre korrelasie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#6b7280;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">0</span>` +
        `<p style="margin:0;font-size:14px;">${or('r')} naby 0: geen lineêre verband tussen x en y nie — die spreidingsdiagram wys ʼn wolk van punte sonder ʼn duidelike rigting.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Casio fx-82-wenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">MODE → STAT → A+BX. Voer al die x-waardes en dan die y-waardes in. Druk SHIFT + 1 (STAT) → Reg om ${bl('a')}, ${bl('b')} en ${or('r')} te vind. Kontroleer altyd ${or('r')} voordat jy die ${bl('regressielyn')} gebruik om voorspellings te maak — ʼn swak ${or('r')} beteken die model is onbetroubaar.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Spreidingsdiagram wys ure gestudeer teenoor toetstellings wat in ʼn redelik reguit lyn styg, met r = 0.89. Beskryf die verband.',
          answer: `${or('r')} = 0.89 dui op ʼn ${gr('sterk positiewe lineêre korrelasie')}`,
          steps: [
            `Identifiseer die ${or('r')}-waarde: ${or('r')} = ${or('0.89')}.`,
            `Bepaal die rigting: ${or('r')} is ${gr('positief')} — namate ure gestudeer toeneem, neig toetstellings om toe te neem.`,
            `Bepaal die sterkte: ${or('r')} = 0.89 lê tussen 0.75 en 1, wat op ʼn ${gr('sterk')} lineêre korrelasie dui.`,
            `<strong>Gevolgtrekking:</strong> ${or('r')} = 0.89 dui op ʼn ${gr('sterk positiewe lineêre korrelasie')} — namate ure gestudeer toeneem, neig toetstellings om teen ʼn konstante koers toe te neem.`,
          ],
        },
        {
          question: 'Lerato het bivariaatdata en vind regressielyn y = 15 + 4.2x en korrelasiekoëffisiënt r = 0.93. Voorspel y wanneer x = 10.',
          answer: `y = ${bl('57')}; die voorspelling is betroubaar aangesien ${or('r')} = 0.93 naby 1 is`,
          steps: [
            `Skryf die ${bl('regressielyn')} neer: y = ${bl('15')} + ${bl('4.2')}x.`,
            `Vervang x = 10: y = 15 + 4.2 × 10 = 15 + 42 = ${bl('57')}.`,
            `Kontroleer betroubaarheid met ${or('r')}: ${or('r')} = ${or('0.93')} lê tussen 0.75 en 1 — dit is ʼn ${gr('sterk positiewe')} korrelasie.`,
            `Aangesien ${or('r')} naby 1 is en x = 10 binne die datareeks val, is hierdie voorspelling ${gr('betroubaar')}.`,
            `<strong>Antwoord:</strong> y = ${bl('57')}.`,
          ],
        },
        {
          question: 'Thabo bereken r = −0.3 vir sy datastel. Beskryf wat dit beteken.',
          answer: `${or('r')} = −0.3 dui op ʼn ${re('swak negatiewe lineêre korrelasie')} — die lineêre model pas swak`,
          steps: [
            `Identifiseer die ${or('r')}-waarde: ${or('r')} = ${or('−0.3')}.`,
            `Bepaal die rigting: ${or('r')} is ${re('negatief')} — daar is ʼn geringe neiging vir y om af te neem namate x toeneem.`,
            `Bepaal die sterkte: |${or('r')}| = 0.3 is onder 0.5, wat op ʼn ${re('swak')} lineêre korrelasie dui.`,
            `<strong>Gevolgtrekking:</strong> ${or('r')} = −0.3 dui op ʼn ${re('swak negatiewe lineêre korrelasie')} — daar is ʼn geringe neiging vir y om af te neem namate x toeneem, maar die verband is baie onbetroubaar en die ${bl('regressielyn')} pas swak by hierdie data.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat spreidingsdiagramme verduidelik, hoe om die kleinste-kwadrate-regressielyn te vind en te interpreteer, en wat die korrelasiekoëffisiënt r beteken met voorbeelde van sterk, matige en swak korrelasie" />',
    },
  ],

  topicPractice: [
    // ── V1 Maklik — interkwartielwydte vanaf mond-en-snor-diagram ────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die diagram, bepaal die interkwartielwydte.\n[Diagram: mond-en-snor-diagram op ʼn getallelyn 0–80. Min=10, Q1=25, Mediaan=35, Q3=55, Maks=75.]',
      answer: '30',
      checkMode: 'auto',
      correctAnswer: '30',
      explanation: 'IKW = Q3 − Q1 = 55 − 25 = 30',
    },

    // ── V2 Medium — variasiewydte vanaf mond-en-snor-diagram ──────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die diagram, bepaal die variasiewydte.\n[Diagram: mond-en-snor-diagram op ʼn getallelyn 0–80. Min=10, Q1=25, Mediaan=35, Q3=55, Maks=75.]',
      answer: '65',
      checkMode: 'auto',
      correctAnswer: '65',
      explanation: 'Variasiewydte = Maksimum − Minimum = 75 − 10 = 65',
    },

    // ── V3 Moeilik — skeefheid vanaf mond-en-snor-diagram ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die diagram, beskryf die skeefheid van die data en regverdig jou antwoord.\n[Diagram: mond-en-snor-diagram op ʼn getallelyn 0–80. Min=10, Q1=25, Mediaan=35, Q3=55, Maks=75.]',
      answer: 'Die mediaan (35) lê nader aan Q1 (25) as aan Q3 (55), en die regtersnor (20 eenhede) is langer as die linkersnor (15 eenhede) — dit dui op positiewe (regse) skeefheid.',
      checkMode: 'self',
    },

    // ── V4 Medium — persentasie tussen Q1 en Q3 ───────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die diagram, watter persentasie van die data val tussen Q1 en Q3?\n[Diagram: mond-en-snor-diagram op ʼn getallelyn 0–80. Min=10, Q1=25, Mediaan=35, Q3=55, Maks=75.]',
      answer: '50%',
      checkMode: 'auto',
      correctAnswer: '50%',
      correctAnswers: ['50%', '50'],
      explanation: 'Per definisie bevat die interkwartielwydte (die mond) altyd presies 50% van die data — 25% onder die mediaan en 25% daarbo.',
    },

    // ── V5 Moeilik — vergelyk skeefheid van twee datastelle ───────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Tweede datastel het Q1=30, mediaan=45, Q3=50. Vergelyk sy skeefheid met dié van die diagram en stel vas watter een meer simmetries is.\n[Diagram: mond-en-snor-diagram op ʼn getallelyn 0–80. Min=10, Q1=25, Mediaan=35, Q3=55, Maks=75.]',
      answer: 'Die tweede datastel het ʼn mediaan (45) nader aan Q3 (50) as aan Q1 (30), wat op negatiewe skeefheid dui. Die oorspronklike diagram is positief skewe. Geen van die twee is simmetries nie — maar die tweede stel se mond is minder uiters in sy skeefheidsvorm, afhangend van die snorlengtes.',
      checkMode: 'self',
    },

    // ── V6 Maklik — 68%-reël vanaf normaalverspreiding ────────────────────────
    {
      difficulty: 'Easy',
      question: 'Gebruik die diagram, watter persentasie van die data val tussen 60 en 80?\n[Diagram: normaalverspreiding-klokkromme. Gemiddelde μ=70, standaardafwyking σ=10. Vertikale lyne by 50, 60, 70, 80 en 90.]',
      answer: '68%',
      checkMode: 'auto',
      correctAnswer: '68%',
      correctAnswers: ['68%', '68'],
      explanation: '60 = μ − σ = 70 − 10 en 80 = μ + σ = 70 + 10. Volgens die 68-95-99.7-reël val 68% van die data binne 1 standaardafwyking van die gemiddelde.',
    },

    // ── V7 Medium — 95%-reël vanaf normaalverspreiding ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die diagram, watter persentasie van die data val tussen 50 en 90?\n[Diagram: normaalverspreiding-klokkromme. Gemiddelde μ=70, standaardafwyking σ=10. Vertikale lyne by 50, 60, 70, 80 en 90.]',
      answer: '95%',
      checkMode: 'auto',
      correctAnswer: '95%',
      correctAnswers: ['95%', '95'],
      explanation: '50 = μ − 2σ = 70 − 20 en 90 = μ + 2σ = 70 + 20. Volgens die 68-95-99.7-reël val 95% van die data binne 2 standaardafwykings van die gemiddelde.',
    },

    // ── V8 Moeilik — persentasie bo 2 SA ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die diagram, bepaal die persentasie van die data wat bo 90 val.\n[Diagram: normaalverspreiding-klokkromme. Gemiddelde μ=70, standaardafwyking σ=10. Vertikale lyne by 50, 60, 70, 80 en 90.]',
      answer: '95% val binne 2 standaardafwykings (50 tot 90). 5% val daarbuite. Volgens simmetrie val 2.5% bo 90.',
      checkMode: 'self',
    },

    // ── V9 Moeilik — persentiel vanaf normaalverspreiding ─────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die diagram, ʼn leerder behaal 80. Watter persentasie van leerders het laer as hulle behaal?\n[Diagram: normaalverspreiding-klokkromme. Gemiddelde μ=70, standaardafwyking σ=10. Vertikale lyne by 50, 60, 70, 80 en 90.]',
      answer: '80 = μ + σ. 68% val tussen μ − σ en μ + σ. Dus val 34% tussen μ en μ + σ. Plus 50% onder die gemiddelde: 50 + 34 = 84% van leerders het laer as 80 behaal.',
      checkMode: 'self',
    },

    // ── V10 Medium — skeefheid vanaf gemiddelde en mediaan ────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Datastel het gemiddelde=45 en mediaan=52. Beskryf die skeefheid.',
      answer: 'negatief (links) skewe aangesien gemiddelde < mediaan',
      checkMode: 'auto',
      correctAnswer: 'negatief skewe',
      correctAnswers: ['negatief skewe', 'negatiewe skeefheid', 'links skewe', 'negatief (links) skewe'],
      explanation: 'Aangesien gemiddelde (45) < mediaan (52), is die data negatief (links) skewe — die gemiddelde word na ʼn langer linkerstert getrek.',
    },

    // ── V11 Maklik — tipe steekproefvooroordeel ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Sipho doen slegs ʼn opname onder sy vriende oor hulle gunstelingsport. Watter tipe vooroordeel is dit?',
      answer: 'gerieflikheidsteekproefnemingsvooroordeel',
      checkMode: 'auto',
      correctAnswer: 'gerieflikheidsteekproefnemingsvooroordeel',
      correctAnswers: ['gerieflikheidsteekproefnemingsvooroordeel', 'gerieflikheidsvooroordeel', 'gerieflikheidsteekproefneming'],
      explanation: 'Om slegs sy vriende te ondersoek is gerieflikheidsteekproefneming — die keuse van wie ook al maklik bereikbaar is — wat vooroordeel meebring omdat sy vriende nie die breër populasie verteenwoordig nie.',
    },

    // ── V12 Moeilik — geldigheid van groot vrywillige-reaksie-steekproef ──────
    {
      difficulty: 'Hard',
      question: 'Lerato doen ʼn vrywillige aanlynopname en kry 500 response. Sy beweer haar steekproef is groot genoeg om verteenwoordigend te wees. Is sy korrek? Verduidelik.',
      answer: 'Nie noodwendig nie — vrywillige-reaksie-opnames trek mense met sterk menings aan, wat sistematiese vooroordeel meebring ongeag steekproefgrootte; ʼn groot bevooroordeelde steekproef is steeds bevooroordeeld.',
      checkMode: 'self',
    },

    // ── V13 Medium — beskryf korrelasiekoëffisiënt ────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Spreidingsdiagram wys r=0.92. Beskryf die korrelasie.',
      answer: 'sterk positiewe lineêre korrelasie',
      checkMode: 'auto',
      correctAnswer: 'sterk positiewe lineêre korrelasie',
      correctAnswers: ['sterk positiewe lineêre korrelasie', 'sterk positiewe korrelasie'],
      explanation: 'r = 0.92 lê tussen 0.75 en 1, wat op ʼn sterk positiewe lineêre korrelasie dui — namate x toeneem, neig y om teen ʼn konstante koers toe te neem.',
    },

    // ── V14 Maklik — voorspel y vanaf regressielyn ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Regressielyn is y=8+3.5x. Bepaal y wanneer x=6.',
      answer: '29',
      checkMode: 'auto',
      correctAnswer: '29',
      explanation: 'y = 8 + 3.5(6) = 8 + 21 = 29',
    },

    // ── V15 Moeilik — voorspel en kommentaar oor betroubaarheid ───────────────
    {
      difficulty: 'Hard',
      question: 'Thabo het ʼn regressielyn y=50−2.3x en r=−0.88. Voorspel y wanneer x=15 en lewer kommentaar oor die betroubaarheid.',
      answer: 'y = 50 − 2.3(15) = 50 − 34.5 = 15.5. Aangesien r = −0.88 op ʼn sterk negatiewe korrelasie dui, is die voorspelling betroubaar mits x=15 binne die oorspronklike datareeks val.',
      checkMode: 'self',
    },

    // ── V16 Moeilik — r=0 beteken nie totaal onverwant nie ────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê ʼn korrelasiekoëffisiënt van r=0 beteken die twee veranderlikes is heeltemal onverwant. Is sy heeltemal korrek? Verduidelik.',
      answer: 'Nie heeltemal nie — r=0 beteken daar is geen LINEÊRE verband nie, maar ʼn sterk nie-lineêre verband (soos kwadraties of eksponensieel) kan steeds tussen die veranderlikes bestaan.',
      checkMode: 'self',
    },

    // ── V17 Medium — skat mediaan vanaf ogief ─────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Datastel het kumulatiewe frekwensies: tot 20=8, tot 40=20, tot 60=32, tot 80=40 (totaal=40). Skat die mediaan vanaf die ogief.',
      answer: 'Die mediaan is by die 20ste waarde. Die kumulatiewe frekwensie bereik 20 by die bogrens van 40. Die mediaan is ongeveer 40.',
      checkMode: 'self',
    },

    // ── V18 Moeilik — skat Q1 en Q3 vanaf ogief ───────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik dieselfde ogief (kumulatiewe frekwensies: tot 20=8, tot 40=20, tot 60=32, tot 80=40, totaal=40), skat Q1 en Q3.',
      answer: 'Q1 is by 25% van 40 = 10de waarde. Die kumulatiewe frekwensie bereik 10 tussen die 0–20-interval (bereik 8) en die 20–40-interval (bereik 20). Q1 ≈ 26. Q3 is by 75% van 40 = 30ste waarde. Die kumulatiewe frekwensie bereik 30 in die 40–60-interval. Q3 ≈ 50.',
      checkMode: 'self',
    },

    // ── V19 Moeilik — regressielyn gaan deur die gemiddeldepunt ───────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê die regressielyn gaan altyd deur die gemiddeldepunt (x̄, ȳ). Is hy korrek? Verduidelik.',
      answer: 'Ja — die kleinste-kwadrate-regressielyn gaan altyd deur die gemiddelde van x en die gemiddelde van y. Dit is ʼn wiskundige eienskap van hoe die lyn bereken word.',
      checkMode: 'self',
    },

    // ── V20 Moeilik — normaalverspreiding-waarskynlikheid ─────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Datastel het gemiddelde=78 en standaardafwyking=6, normaal verdeel. Bepaal die waarskynlikheid dat ʼn ewekansig gekose waarde tussen 66 en 90 lê.',
      answer: '66 = 78 − 2(6) = μ − 2σ en 90 = 78 + 2(6) = μ + 2σ. Volgens die 68-95-99.7-reël val 95% van die data binne 2 standaardafwykings. Waarskynlikheid ≈ 0.95.',
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het statistiek volkome bemeester.' },
    { minScore: 15, message: 'Puik werk!' },
    { minScore: 10, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
