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
          answer: `${bl('Min = 5')}, ${or('Q1 = 10,5')}, ${gr('Mediaan = 18')}, ${or('Q3 = 29')}, ${bl('Maks = 38')}`,
          steps: [
            'Rangskik in stygende volgorde: 5, 9, 12, 15, 18, 22, 27, 31, 38 (reeds gerangskik). Daar is 9 waardes.',
            `${bl('Minimum')} = ${bl('5')} (die kleinste waarde). ${bl('Maksimum')} = ${bl('38')} (die grootste waarde).`,
            `${gr('Mediaan')} = ${gr('18')} — die 5de waarde in ʼn stel van 9 is die middelste waarde.`,
            `Onderste helfte (waardes onder die mediaan): 5, 9, 12, 15. ${or('Q1')} = mediaan van onderste helfte = (9 + 12) ÷ 2 = ${or('10,5')}.`,
            `Boonste helfte (waardes bo die mediaan): 22, 27, 31, 38. ${or('Q3')} = mediaan van boonste helfte = (27 + 31) ÷ 2 = ${or('29')}.`,
            `<strong>Vyfgetalopsomming:</strong> ${bl('Min = 5')}, ${or('Q1 = 10,5')}, ${gr('Mediaan = 18')}, ${or('Q3 = 29')}, ${bl('Maks = 38')}.`,
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
        `<p style="margin-bottom:16px;">Die <strong>normaalverspreiding</strong> is ʼn volkome simmetriese klokvormige verspreiding waar die ${bl('gemiddelde')}, ${or('mediaan')} en modus almal gelyk is en in die middel lê. Dit volg die <strong>68-95-99,7-reël</strong>: ongeveer ${gr('68%')} van die data val binne ${gr('1 standaardafwyking')} van die gemiddelde (tussen μ − σ en μ + σ), ${or('95%')} binne ${or('2 standaardafwykings')}, en ${re('99,7%')} binne ${re('3 standaardafwykings')}. Hierdie reël stel ons in staat om die persentasie data wat in enige gegewe interval om die gemiddelde val, te bereken.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('gemiddeldesentrum (μ)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('1 standaardafwyking — 68%')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('2 standaardafwykings — 95%')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('3 standaardafwykings — 99,7%')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die 68-95-99,7-reël</p>` +
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
        `<p style="margin:0;font-size:14px;">${re('99,7%')} van die data val binne ${re('3 standaardafwykings')} van die gemiddelde: tussen ${bl('μ')} − ${re('3σ')} en ${bl('μ')} + ${re('3σ')}.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Simmetrie gebruik om buitenste persentasies te vind</p>` +
        `<p style="margin:0;color:#1e3a8a;">Aangesien die normaalverspreiding simmetries is om die ${bl('gemiddelde')}, word die persentasie buite ʼn gegewe band gelykop tussen die twee sterte verdeel. Byvoorbeeld, 5% val buite 2 standaardafwykings — dus val 2,5% bo μ + 2σ en 2,5% val onder μ − 2σ.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die lengtes van Graad 12-leerders is normaal verdeel met gemiddelde 165 cm en standaardafwyking 8 cm. Bepaal die persentasie leerders met ʼn lengte tussen 157 cm en 173 cm.',
          answer: `Ongeveer ${gr('68%')} van leerders`,
          steps: [
            `Identifiseer die grense: 157 = 165 − 8 = ${bl('μ')} − ${gr('σ')} en 173 = 165 + 8 = ${bl('μ')} + ${gr('σ')}.`,
            `Hierdie grense is presies ${gr('1 standaardafwyking')} van die gemiddelde aan elke kant.`,
            `Volgens die 68-95-99,7-reël val ongeveer ${gr('68%')} van die data binne 1 standaardafwyking van die gemiddelde.`,
            `<strong>Antwoord:</strong> Ongeveer ${gr('68%')} van leerders het ʼn lengte tussen 157 cm en 173 cm.`,
          ],
        },
        {
          question: 'Gebruik dieselfde verspreiding (gemiddelde 165 cm, standaardafwyking 8 cm), bepaal die persentasie leerders langer as 181 cm.',
          answer: `Ongeveer ${or('2,5%')} van leerders`,
          steps: [
            `Bepaal hoeveel standaardafwykings 181 cm van die gemiddelde is: 181 = 165 + 2 × 8 = ${bl('μ')} + ${or('2σ')}.`,
            `Volgens die 68-95-99,7-reël val ${or('95%')} van die data binne ${or('2 standaardafwykings')} van die gemiddelde.`,
            `Daarom val ${or('5%')} buite 2 standaardafwykings (in albei sterte gesamentlik).`,
            `Aangesien die verspreiding simmetries is, val 5% ÷ 2 = ${or('2,5%')} bo ${bl('μ')} + ${or('2σ')}.`,
            `<strong>Antwoord:</strong> Ongeveer ${or('2,5%')} van leerders is langer as 181 cm.`,
          ],
        },
        {
          question: 'Lerato sê dat in ʼn normaalverspreiding, feitlik al die data binne 3 standaardafwykings van die gemiddelde val. Is sy korrek?',
          answer: `Ja — Lerato is ${re('korrek')}`,
          steps: [
            `Volgens die 68-95-99,7-reël val ${re('99,7%')} van die data binne ${re('3 standaardafwykings')} van die gemiddelde (tussen ${bl('μ')} − ${re('3σ')} en ${bl('μ')} + ${re('3σ')}).`,
            `Slegs 0,3% van die data val buite 3 standaardafwykings — ʼn uiters klein gedeelte.`,
            `<strong>Antwoord:</strong> Ja — Lerato is korrek. ${re('Feitlik al')} die data (99,7%) in ʼn normaalverspreiding val binne 3 standaardafwykings, wat haar stelling effektief korrek maak vir praktiese doeleindes.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die normaalverspreiding en die 68-95-99,7-reël verduidelik met uitgewerkte voorbeelde wat gebruik maak van standaardafwykingintervalle" />',
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
        `<p style="margin-bottom:16px;">ʼn <strong>Spreidingsdiagram</strong> vertoon bivariaatdata (twee verwante veranderlikes) as punte, wat ons in staat stel om neigings visueel te identifiseer. Die <strong>kleinste-kwadrate-${bl('regressielyn')}</strong> (lyn van beste passing) het die vergelyking y = a + bx, waar ${bl('b')} = gradiënt en ${bl('a')} = y-afsnit. Hierdie lyn minimeer die som van die kwadrate van die vertikale afstande van elke punt na die lyn. Die <strong>korrelasiekoëffisiënt ${or('r')}</strong> meet die sterkte en rigting van die lineêre verband: ${or('r')} = 1 is volmaakte ${gr('positiewe korrelasie')}, ${or('r')} = −1 is volmaakte ${re('negatiewe korrelasie')}, ${or('r')} = 0 beteken geen lineêre korrelasie nie. Waardes tussen 0,75 en 1 (of −1 en −0,75) dui op sterk korrelasie, 0,5 tot 0,75 op matige korrelasie, en onder 0,5 op swak korrelasie. Op die Casio fx-82-reeks: gaan na STAT-modus, kies A+BX (lineêre regressie), voer x- en y-waardes in, en gaan dan na die regressiekieslys om ${bl('a')}, ${bl('b')} en ${or('r')} te vind.</p>` +

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
          question: 'ʼn Spreidingsdiagram wys ure gestudeer teenoor toetstellings wat in ʼn redelik reguit lyn styg, met r = 0,89. Beskryf die verband.',
          answer: `${or('r')} = 0,89 dui op ʼn ${gr('sterk positiewe lineêre korrelasie')}`,
          steps: [
            `Identifiseer die ${or('r')}-waarde: ${or('r')} = ${or('0,89')}.`,
            `Bepaal die rigting: ${or('r')} is ${gr('positief')} — namate ure gestudeer toeneem, neig toetstellings om toe te neem.`,
            `Bepaal die sterkte: ${or('r')} = 0,89 lê tussen 0,75 en 1, wat op ʼn ${gr('sterk')} lineêre korrelasie dui.`,
            `<strong>Gevolgtrekking:</strong> ${or('r')} = 0,89 dui op ʼn ${gr('sterk positiewe lineêre korrelasie')} — namate ure gestudeer toeneem, neig toetstellings om teen ʼn konstante koers toe te neem.`,
          ],
        },
        {
          question: 'Lerato het bivariaatdata en vind regressielyn y = 15 + 4,2x en korrelasiekoëffisiënt r = 0,93. Voorspel y wanneer x = 10.',
          answer: `y = ${bl('57')}; die voorspelling is betroubaar aangesien ${or('r')} = 0,93 naby 1 is`,
          steps: [
            `Skryf die ${bl('regressielyn')} neer: y = ${bl('15')} + ${bl('4,2')}x.`,
            `Vervang x = 10: y = 15 + 4,2 × 10 = 15 + 42 = ${bl('57')}.`,
            `Kontroleer betroubaarheid met ${or('r')}: ${or('r')} = ${or('0,93')} lê tussen 0,75 en 1 — dit is ʼn ${gr('sterk positiewe')} korrelasie.`,
            `Aangesien ${or('r')} naby 1 is en x = 10 binne die datareeks val, is hierdie voorspelling ${gr('betroubaar')}.`,
            `<strong>Antwoord:</strong> y = ${bl('57')}.`,
          ],
        },
        {
          question: 'Thabo bereken r = −0,3 vir sy datastel. Beskryf wat dit beteken.',
          answer: `${or('r')} = −0,3 dui op ʼn ${re('swak negatiewe lineêre korrelasie')} — die lineêre model pas swak`,
          steps: [
            `Identifiseer die ${or('r')}-waarde: ${or('r')} = ${or('−0,3')}.`,
            `Bepaal die rigting: ${or('r')} is ${re('negatief')} — daar is ʼn geringe neiging vir y om af te neem namate x toeneem.`,
            `Bepaal die sterkte: |${or('r')}| = 0,3 is onder 0,5, wat op ʼn ${re('swak')} lineêre korrelasie dui.`,
            `<strong>Gevolgtrekking:</strong> ${or('r')} = −0,3 dui op ʼn ${re('swak negatiewe lineêre korrelasie')} — daar is ʼn geringe neiging vir y om af te neem namate x toeneem, maar die verband is baie onbetroubaar en die ${bl('regressielyn')} pas swak by hierdie data.`,
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
      explanation: '60 = μ − σ = 70 − 10 en 80 = μ + σ = 70 + 10. Volgens die 68-95-99,7-reël val 68% van die data binne 1 standaardafwyking van die gemiddelde.',
    },

    // ── V7 Medium — 95%-reël vanaf normaalverspreiding ────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die diagram, watter persentasie van die data val tussen 50 en 90?\n[Diagram: normaalverspreiding-klokkromme. Gemiddelde μ=70, standaardafwyking σ=10. Vertikale lyne by 50, 60, 70, 80 en 90.]',
      answer: '95%',
      checkMode: 'auto',
      correctAnswer: '95%',
      correctAnswers: ['95%', '95'],
      explanation: '50 = μ − 2σ = 70 − 20 en 90 = μ + 2σ = 70 + 20. Volgens die 68-95-99,7-reël val 95% van die data binne 2 standaardafwykings van die gemiddelde.',
    },

    // ── V8 Moeilik — persentasie bo 2 SA ─────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die diagram, bepaal die persentasie van die data wat bo 90 val.\n[Diagram: normaalverspreiding-klokkromme. Gemiddelde μ=70, standaardafwyking σ=10. Vertikale lyne by 50, 60, 70, 80 en 90.]',
      answer: '95% val binne 2 standaardafwykings (50 tot 90). 5% val daarbuite. Volgens simmetrie val 2,5% bo 90.',
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
      question: 'ʼn Spreidingsdiagram wys r=0,92. Beskryf die korrelasie.',
      answer: 'sterk positiewe lineêre korrelasie',
      checkMode: 'auto',
      correctAnswer: 'sterk positiewe lineêre korrelasie',
      correctAnswers: ['sterk positiewe lineêre korrelasie', 'sterk positiewe korrelasie'],
      explanation: 'r = 0,92 lê tussen 0,75 en 1, wat op ʼn sterk positiewe lineêre korrelasie dui — namate x toeneem, neig y om teen ʼn konstante koers toe te neem.',
    },

    // ── V14 Maklik — voorspel y vanaf regressielyn ────────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Regressielyn is y=8+3,5x. Bepaal y wanneer x=6.',
      answer: '29',
      checkMode: 'auto',
      correctAnswer: '29',
      explanation: 'y = 8 + 3,5(6) = 8 + 21 = 29',
    },

    // ── V15 Moeilik — voorspel en kommentaar oor betroubaarheid ───────────────
    {
      difficulty: 'Hard',
      question: 'Thabo het ʼn regressielyn y=50−2,3x en r=−0,88. Voorspel y wanneer x=15 en lewer kommentaar oor die betroubaarheid.',
      answer: 'y = 50 − 2,3(15) = 50 − 34,5 = 15,5. Aangesien r = −0,88 op ʼn sterk negatiewe korrelasie dui, is die voorspelling betroubaar mits x=15 binne die oorspronklike datareeks val.',
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
      answer: 'Q1 is by 25% van 40 = 10de waarde. Die kumulatiewe frekwensie bereik 10 tussen die 20–40-interval (kf gaan van 8 na 20). Q1 = 20 + [(10−8)/(20−8)]×20 ≈ 23,3. Q3 is by 75% van 40 = 30ste waarde. Die kumulatiewe frekwensie bereik 30 tussen die 40–60-interval (kf gaan van 20 na 32). Q3 = 40 + [(30−20)/(32−20)]×20 ≈ 56,7.',
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
      answer: '66 = 78 − 2(6) = μ − 2σ en 90 = 78 + 2(6) = μ + 2σ. Volgens die 68-95-99,7-reël val 95% van die data binne 2 standaardafwykings. Waarskynlikheid ≈ 0,95.',
      checkMode: 'self',
    },

    // ── V21 Moeilik — werk terug na ʼn beperking op σ ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Fabriek vul bottels met ʼn gemiddelde volume van 500 mL. Volumes is normaal verdeel met standaardafwyking σ mL. Kwaliteitsbeheer verwerp ʼn bottel slegs as die volume meer as 2 standaardafwykings van die gemiddelde af lê. ʼn Bottel met 485 mL word NIE verwerp nie.\n(a) Skryf ʼn ongelykheid in σ neer wat moet geld sodat hierdie bottel deurkom.\n(b) Bepaal dus die kleinste moontlike heelgetalwaarde van σ wat met hierdie inligting bestaanbaar is.',
      answer: '(a) Vir die bottel om deur te kom, moet dit binne 2 standaardafwykings van die gemiddelde lê: |500 − 485| ≤ 2σ, dit wil sê 15 ≤ 2σ, dus σ ≥ 7,5.\n(b) Die kleinste heelgetalwaarde van σ wat aan σ ≥ 7,5 voldoen, is σ = 8 mL.',
      checkMode: 'self',
    },

    // ── V22 Moeilik — uitskieter-besluit + gemiddelde-vs-mediaan-aanbeveling ──
    {
      difficulty: 'Hard',
      question: "ʼn Kwaliteitsinspekteur teken die deursnee (in mm) van 9 koeëllaers van ʼn masjien aan: 20, 21, 21, 22, 22, 22, 23, 23, 46. Daar word vermoed dat die lesing van 46 mm ʼn metingsfout is.\n(a) Bepaal die vyfgetalopsomming van al 9 waardes soos aangeteken, en gebruik die reël dat ʼn waarde onder Q1 − 1,5×IKW of bo Q3 + 1,5×IKW ʼn uitskieter is, om te toets of 46 mm as ʼn uitskieter geklassifiseer moet word.\n(b) Die inspekteur moet ʼn enkele 'tipiese' deursnee aan die produksiebestuurder rapporteer. Gebruik jou antwoord in (a) en hoe die gemiddelde en mediaan verskillend op uiterste waardes reageer, en verduidelik watter maatstaf van sentrale tendens hier meer geskik is, en waarom.",
      answer: "(a) Gerangskik: 20, 21, 21, 22, 22, 22, 23, 23, 46. Mediaan = 22 (5de waarde). Onderste helfte (20, 21, 21, 22): Q1 = (21+21)÷2 = 21. Boonste helfte (22, 23, 23, 46): Q3 = (23+23)÷2 = 23. IKW = 23 − 21 = 2. Boonste grens = Q3 + 1,5×IKW = 23 + 3 = 26. Aangesien 46 > 26, IS dit ʼn uitskieter.\n(b) Gemiddelde (met 46 ingesluit) = 220 ÷ 9 ≈ 24,44, wat merkbaar deur die enkele 46 mm-lesing opwaarts getrek word, terwyl die mediaan (22) daardeur onaangeraak bly aangesien dit slegs van die middelste posisie afhang. Aangesien 46 mm reeds in (a) as ʼn uitskieter geïdentifiseer is, is die mediaan die meer geskikte 'tipiese' waarde om te rapporteer — die gemiddelde word deur die een uiterste (waarskynlik foutiewe) lesing vervorm, terwyl die mediaan die ware middelpunt van die ander agt konsekwente metings weerspieël.",
      checkMode: 'self',
    },
  ],

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het statistiek volkome bemeester.' },
    { minScore: 15, message: 'Puik werk!' },
    { minScore: 10, message: 'Goeie poging, gaan deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],

  // ═════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — bivariaatdata: spreidingsdiagramme, kleinste-kwadrate-
  // regressielyn (y = a + bx), korrelasiekoëffisiënt r, residue.
  // Fase 1 (slegs inhoud): vrae wat later ʼn spreidingsdiagram sal kry, is
  // selfstandig geformuleer — elke koördinaatpaar of regressiedetail wat
  // benodig word, word in die vraagteks self gestel. Geen diagramSvg-velde
  // word in hierdie fase bygevoeg nie.
  //
  // Vaardigheidsblokke (herhaal in elk van die 3 stelle, Maklik → Moeilik):
  //   Blok A (V1–3)   Lees/plot spreidingsdiagrampunte, identifiseer
  //                    onafhanklike/afhanklike veranderlike
  //   Blok B (V4–7)   Interpreteer korrelasiesterkte/-rigting vanaf r
  //   Blok C (V8–10)  Gebruik ʼn gegewe regressielyn om y vanaf x te voorspel
  //   Blok D (V11–13) Residue (werklike y − voorspelde y)
  //   Blok E (V14–16) Gekombineerde voorspelling + betroubaarheidsoordeel met r
  //   Blok F (V17–20) Regressielyn-eienskappe, ekstrapolasiegevaar,
  //                    vergelyk korrelasies, korrelasie teenoor kousaliteit
  // ═════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok A: lees spreidingsdiagrampunte / veranderlikes (V1–3) ─────
        {
          difficulty: 'Easy',
          question: 'ʼn Spreidingsdiagram vergelyk die aantal ure wat ʼn leerder studeer (x) en hulle toetspunt uit 100 (y). Watter veranderlike is die onafhanklike veranderlike?',
          answer: 'Ure gestudeer (x)',
          checkMode: 'auto',
          correctAnswer: 'uregestudeer',
          correctAnswers: ['ure gestudeer', 'ure gestudeer (x)', 'x', 'ure'],
          explanation: 'Die onafhanklike veranderlike is dié een wat ons beheer of kies — ure gestudeer — geplot op die x-as. Die toetspunt hang daarvan af, dus is dit die afhanklike veranderlike (y).',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">20</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">40</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">60</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">80</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">100</text><circle cx="115" cy="201" r="4" fill="#2563eb"/><circle cx="145" cy="168" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="235" cy="108.6" r="4" fill="#2563eb"/><circle cx="295" cy="66.8" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure gestudeer (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Toetspunt (y)</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee datapunte op ʼn spreidingsdiagram van ure gestudeer (x) teenoor toetspunt (y) is geplot by (4, 68) en (7, 74). Watter leerder het meer ure gestudeer, en met hoeveel meer ure?',
          answer: 'Die leerder by (7, 74) het meer gestudeer, met 3 ure',
          checkMode: 'auto',
          correctAnswer: '3',
          correctAnswers: ['3', '3 ure', '(7,74) met 3 ure'],
          explanation: 'Die x-waardes (ure gestudeer) is 4 en 7. Die leerder by (7, 74) het meer gestudeer, en die verskil is 7 − 4 = 3 ure.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">20</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">40</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">60</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">80</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">100</text><circle cx="175" cy="95.4" r="4" fill="#2563eb"/><circle cx="265" cy="82.2" r="4" fill="#2563eb"/><text x="175" y="83.4" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(4, 68)</text><text x="265" y="70.2" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(7, 74)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure gestudeer (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Toetspunt (y)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'ʼn Spreidingsdiagram wys die punte (2, 20), (3, 35), (5, 55), (6, 62), (8, 81) vir ure gestudeer (x) teenoor toetspunt (y). Namate x toeneem oor hierdie punte, wat gebeur met y?',
          answer: 'y neem toe namate x toeneem',
          checkMode: 'auto',
          correctAnswer: 'yneemtoe',
          correctAnswers: ['y neem toe', 'neem toe', 'y neem toe namate x toeneem'],
          explanation: 'As jy die punte in volgorde van toenemende x lees (2, 3, 5, 6, 8), neem die y-waardes ook toe (20, 35, 55, 62, 81) — die punte neig opwaarts, wat op ʼn positiewe verband dui.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">20</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">40</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">60</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">80</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">100</text><circle cx="115" cy="201" r="4" fill="#2563eb"/><circle cx="145" cy="168" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="235" cy="108.6" r="4" fill="#2563eb"/><circle cx="295" cy="66.8" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure gestudeer (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Toetspunt (y)</text></svg>',
        },

        // ── Blok B: r interpreteer (V4–7) ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Datastel het korrelasiekoëffisiënt r = 0,95. Is dit ʼn positiewe of negatiewe korrelasie?',
          answer: 'Positief',
          checkMode: 'auto',
          correctAnswer: 'positief',
          correctAnswers: ['positief', 'positiewe korrelasie'],
          explanation: 'Aangesien r = 0,95 groter as 0 is, is die korrelasie positief — namate x toeneem, neig y ook om toe te neem.',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'ʼn Datastel het korrelasiekoëffisiënt r = 0,82. Beskryf die sterkte van hierdie korrelasie.',
          answer: 'Sterk (positiewe) korrelasie',
          checkMode: 'auto',
          correctAnswer: 'sterk',
          correctAnswers: ['sterk', 'sterk korrelasie', 'sterk positiewe korrelasie'],
          explanation: 'r = 0,82 lê tussen 0,75 en 1, wat op ʼn sterk lineêre korrelasie dui.',
        },
        {
          difficulty: 'Medium',
          question: 'Twee datastelle het korrelasiekoëffisiënte r = 0,4 en r = −0,9. Watter een wys die sterker lineêre verband?',
          answer: 'Die datastel met r = −0,9',
          checkMode: 'auto',
          correctAnswer: 'r=-0,9',
          correctAnswers: ['r = -0,9', 'r = -0.9', '-0,9', '-0.9', 'die een met r=-0,9', 'die een met r=-0.9', 'r=-0,9', 'r=-0.9'],
          explanation: 'Sterkte word gemeet aan die grootte van r ongeag die teken. |−0,9| = 0,9 is groter as |0,4| = 0,4, dus wys r = −0,9 die sterker (negatiewe) lineêre verband.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Spreidingsdiagram van roomys-verkope (x) teenoor daaglikse temperatuur (y) het r = 0,05. Wat dui dit aan oor die lineêre verband tussen die veranderlikes?',
          answer: 'Daar is min tot geen lineêre korrelasie tussen die veranderlikes nie',
          checkMode: 'auto',
          correctAnswer: 'geenlineerekorrelasie',
          correctAnswers: ['geen lineêre korrelasie', 'min tot geen korrelasie', 'geen korrelasie', 'baie swak korrelasie'],
          explanation: 'r = 0,05 is baie naby aan 0, wat op byna geen lineêre verband tussen die twee veranderlikes dui nie.',
        },

        // ── Blok C: regressielynvoorspelling (V8–10) ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Die kleinste-kwadrate-regressielyn vir ure gestudeer (x) teenoor toetspunt (y) is y = 12 + 2,5x. Voorspel die toetspunt vir ʼn leerder wat 8 ure studeer.',
          answer: '32',
          checkMode: 'auto',
          correctAnswer: '32',
          explanation: 'y = 12 + 2,5(8) = 12 + 20 = 32.',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde regressielyn y = 12 + 2,5x, het ʼn leerder wat werklik 8 ure gestudeer het, 35 in die toets behaal. Bepaal die residu (werklike y − voorspelde y) vir hierdie leerder.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Voorspelde y = 12 + 2,5(8) = 32. Residu = werklik − voorspel = 35 − 32 = 3.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn vir afstand afgelê (x, in km) teenoor brandstof gebruik (y, in liter) is y = 1,5 + 0,08x. Voorspel die brandstofgebruik vir ʼn rit van 200 km.',
          answer: '17,5 liter',
          checkMode: 'auto',
          correctAnswer: '17,5',
          correctAnswers: ['17.5', '17.5 liter', '17,5'],
          explanation: 'y = 1,5 + 0,08(200) = 1,5 + 16 = 17,5 liter.',
        },

        // ── Blok D: residue (V11–13) ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn is y = 5 + 3x. Vir x = 6 is die werklike waargenome waarde y = 27. Bereken die residu.',
          answer: '4',
          checkMode: 'auto',
          correctAnswer: '4',
          explanation: 'Voorspelde y = 5 + 3(6) = 5 + 18 = 23. Residu = werklik − voorspel = 27 − 23 = 4.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'ʼn Regressielyn is y = 40 − 1,5x. Vir x = 10 is die werklike waargenome waarde y = 22. Bereken die residu en stel vas of die werklike punt bo of onder die regressielyn lê.',
          answer: 'Residu = −3; die punt lê onder die regressielyn',
          checkMode: 'auto',
          correctAnswer: '-3onder',
          correctAnswers: ['-3, onder', '-3 onder', 'residu -3 onder die lyn'],
          explanation: 'Voorspelde y = 40 − 1,5(10) = 40 − 15 = 25. Residu = werklik − voorspel = 22 − 25 = −3. ʼn Negatiewe residu beteken die werklike punt lê onder die regressielyn.',
        },
        {
          difficulty: 'Hard',
          question: 'Zanele sê ʼn residu van 0 beteken die regressielyn is ʼn perfekte passing vir die hele datastel. Is sy korrek? Verduidelik.',
          answer: 'Nee — ʼn residu van 0 beteken slegs dat een spesifieke punt presies op die lyn lê. Ander punte in die datastel kan steeds groot residue hê, dus moet die algehele passing beoordeel word deur al die residue (of r) te gebruik, nie net een punt nie.',
          checkMode: 'self',
        },

        // ── Blok E: gekombineerde voorspelling + betroubaarheid (V14–16) ────
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn vir ure ekstra onderrig (x) teenoor verbetering in toetspunt (y, uit 100) is y = 20 + 1,8x, met korrelasiekoëffisiënt r = 0,93. Voorspel die verbetering in toetspunt vir ʼn leerder wat 15 ure onderrig ontvang.',
          answer: '47',
          checkMode: 'auto',
          correctAnswer: '47',
          explanation: 'y = 20 + 1,8(15) = 20 + 27 = 47.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Met die regressielyn y = 20 + 1,8x en korrelasiekoëffisiënt r = 0,93, het ʼn datapunt by x = 15 ʼn werklike y-waarde van 50. Bereken die residu en lewer kommentaar oor of r = 0,93 daarop dui dat hierdie regressielyn oor die algemeen betroubaar is vir voorspelling.',
          answer: 'Residu = 3. Aangesien r = 0,93 naby 1 is, dui dit op ʼn sterk positiewe korrelasie, dus is die regressielyn oor die algemeen ʼn betroubare model vir voorspelling.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Tweede datastel het regressielyn y = 20 + 1,8x maar korrelasiekoëffisiënt r = 0,21. Sipho gebruik hierdie lyn om y te voorspel wanneer x = 15, en kry y = 47, en beweer hierdie voorspelling is net so betroubaar as een van ʼn datastel met r = 0,93. Is hy korrek? Verduidelik.',
          answer: 'Nee — alhoewel die berekening y = 47 wiskundig korrek is, dui r = 0,21 op ʼn baie swak lineêre korrelasie, wat beteken die datapunte is wyd versprei rondom die lyn. Die voorspelling is veel minder betroubaar as een gemaak met ʼn datastel met r = 0,93, wat ʼn sterk lineêre patroon toon.',
          checkMode: 'self',
        },

        // ── Blok F: regressielyn-eienskappe / ekstrapolasie / kousaliteit (V17–20) ──
        {
          difficulty: 'Medium-Hard',
          question: 'ʼn Datastel van ure gestudeer (x) het x-waardes wat wissel van 1 tot 10. Die regressielyn is y = 12 + 2,5x. Thabo wil hierdie lyn gebruik om die toetspunt te voorspel vir ʼn leerder wat 40 ure gestudeer het. Verduidelik waarom hierdie voorspelling onbetroubaar sou wees.',
          answer: 'x = 40 lê ver buite die oorspronklike datareeks (1 tot 10). Om die regressielyn te gebruik om waardes ver buite die reeks van die oorspronklike data te voorspel, staan bekend as ekstrapolasie, en dit is onbetroubaar omdat daar geen bewys is dat die lineêre neiging buite die waargenome data voortduur nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Datastel van ure gestudeer (x) teenoor toetspunt (y) het gemiddelde x̄ = 5,5 ure en gemiddelde ȳ = 51,75 punte. Lerato sê die kleinste-kwadrate-regressielyn vir hierdie data moet deur die punt (5,5; 51,75) gaan. Is sy korrek? Verduidelik.',
          answer: 'Ja — die kleinste-kwadrate-regressielyn gaan altyd deur die gemiddeldepunt (x̄, ȳ) van die data. Dit is ʼn wiskundige eienskap van hoe die lyn bereken word.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Navorser vind ʼn sterk positiewe korrelasie (r = 0,88) tussen die aantal brandweerwaens wat na ʼn brand gestuur word en die hoeveelheid skade wat veroorsaak word. Sy maak die gevolgtrekking dat brandweerwaens meer skade veroorsaak. Verduidelik die fout in haar redenasie.',
          answer: 'Korrelasie beteken nie kousaliteit nie. ʼn Waarskynlike verduideliking is ʼn derde (verwarrende) veranderlike — die grootte van die brand. Groter brande veroorsaak meer skade EN vereis meer brandweerwaens om gestuur te word, wat die korrelasie skep sonder dat die brandweerwaens die skade veroorsaak.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Spreidingsdiagram van x teenoor y wys die punte (1, 2), (2, 8), (3, 18), (4, 32), (5, 50) wat ʼn duidelike geboë (U-vormige) patroon vorm, nie ʼn reguit lyn nie. Die korrelasiekoëffisiënt word bereken as r = 0,98. Amahle sê hierdie hoë r-waarde bewys dat ʼn reguit lyn die beste model vir hierdie data is. Is sy korrek? Verduidelik.',
          answer: 'Nee — r meet slegs die sterkte van ʼn LINEÊRE verband. Alhoewel r = 0,98 naby 1 is, wys die spreidingsdiagram duidelik ʼn geboë (nie-lineêre) patroon. ʼn Reguit lyn sou nie ʼn geskikte model hier wees nie ondanks die hoë r-waarde; kontroleer altyd die vorm van die spreidingsdiagram, nie net r nie.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het spreidingsdiagramme, regressielyne en korrelasie bemeester.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 V) — dieselfde bloklayout as Stel 1, vars getalle/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok A: lees spreidingsdiagrampunte / veranderlikes (V1–3) ─────
        {
          difficulty: 'Easy',
          question: 'ʼn Spreidingsdiagram vergelyk die aantal advertensies wat ʼn winkel per week uitsaai (x) en sy weeklikse verkope in rand (y). Watter veranderlike is die afhanklike veranderlike?',
          answer: 'Weeklikse verkope (y)',
          checkMode: 'auto',
          correctAnswer: 'weeklikseverkope',
          correctAnswers: ['weeklikse verkope', 'weeklikse verkope (y)', 'y', 'verkope'],
          explanation: 'Die afhanklike veranderlike is dié een wat reageer op veranderinge in die ander veranderlike — weeklikse verkope hang af van die aantal advertensies wat uitgesaai word, dus word dit op die y-as geplot.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="130" y1="25" x2="130" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="205" y1="25" x2="205" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="280" y1="25" x2="280" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="190" x2="355" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="135" x2="355" y2="135" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="80" x2="355" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="190" x2="55" y2="190" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="194" font-size="11" fill="#374151" text-anchor="end">5000</text><line x1="50" y1="135" x2="55" y2="135" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="139" font-size="11" fill="#374151" text-anchor="end">10000</text><line x1="50" y1="80" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="84" font-size="11" fill="#374151" text-anchor="end">15000</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">20000</text><circle cx="92.5" cy="190" r="4" fill="#2563eb"/><circle cx="130" cy="162.5" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="242.5" cy="96.5" r="4" fill="#2563eb"/><circle cx="317.5" cy="58" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Advertensies per week (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Weeklikse verkope (R) (y)</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee datapunte op ʼn spreidingsdiagram van advertensies uitgesaai (x) teenoor weeklikse verkope in rand (y) is geplot by (6, 14 200) en (6, 15 900). Hierdie twee winkels het dieselfde aantal advertensies uitgesaai — wat is die verskil in hulle weeklikse verkope?',
          answer: 'R1 700',
          checkMode: 'auto',
          correctAnswer: '1700',
          correctAnswers: ['1700', 'R1700', 'R1 700'],
          explanation: 'Albei punte het x = 6 advertensies. Die verskil in die y-waardes (verkope) is 15 900 − 14 200 = R1 700.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="130" y1="25" x2="130" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="205" y1="25" x2="205" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="280" y1="25" x2="280" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="190" x2="355" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="135" x2="355" y2="135" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="80" x2="355" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="190" x2="55" y2="190" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="194" font-size="11" fill="#374151" text-anchor="end">5000</text><line x1="50" y1="135" x2="55" y2="135" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="139" font-size="11" fill="#374151" text-anchor="end">10000</text><line x1="50" y1="80" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="84" font-size="11" fill="#374151" text-anchor="end">15000</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">20000</text><circle cx="280" cy="88.8" r="4" fill="#2563eb"/><circle cx="280" cy="70.1" r="4" fill="#2563eb"/><text x="280" y="104.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 14 200)</text><text x="280" y="58.1" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(6, 15 900)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Advertensies per week (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Weeklikse verkope (R) (y)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'ʼn Spreidingsdiagram wys die punte (1, 5 000), (2, 7 500), (4, 11 000), (5, 13 500), (7, 17 000) vir advertensies uitgesaai (x) teenoor weeklikse verkope (y). Namate x toeneem oor hierdie punte, wat gebeur met y?',
          answer: 'y neem toe namate x toeneem',
          checkMode: 'auto',
          correctAnswer: 'yneemtoe',
          correctAnswers: ['y neem toe', 'neem toe', 'y neem toe namate x toeneem'],
          explanation: 'As jy die punte in volgorde van toenemende x lees (1, 2, 4, 5, 7), neem die y-waardes ook toe (5000, 7500, 11000, 13500, 17000) — die punte neig opwaarts, wat op ʼn positiewe verband dui.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="130" y1="25" x2="130" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="205" y1="25" x2="205" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="280" y1="25" x2="280" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="190" x2="355" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="135" x2="355" y2="135" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="80" x2="355" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="130" y1="245" x2="130" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="130" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="205" y1="245" x2="205" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="205" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="280" y1="245" x2="280" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="280" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="190" x2="55" y2="190" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="194" font-size="11" fill="#374151" text-anchor="end">5000</text><line x1="50" y1="135" x2="55" y2="135" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="139" font-size="11" fill="#374151" text-anchor="end">10000</text><line x1="50" y1="80" x2="55" y2="80" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="84" font-size="11" fill="#374151" text-anchor="end">15000</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">20000</text><circle cx="92.5" cy="190" r="4" fill="#2563eb"/><circle cx="130" cy="162.5" r="4" fill="#2563eb"/><circle cx="205" cy="124" r="4" fill="#2563eb"/><circle cx="242.5" cy="96.5" r="4" fill="#2563eb"/><circle cx="317.5" cy="58" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Advertensies per week (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Weeklikse verkope (R) (y)</text></svg>',
        },

        // ── Blok B: r interpreteer (V4–7) ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Datastel het korrelasiekoëffisiënt r = −0,78. Is dit ʼn positiewe of negatiewe korrelasie?',
          answer: 'Negatief',
          checkMode: 'auto',
          correctAnswer: 'negatief',
          correctAnswers: ['negatief', 'negatiewe korrelasie'],
          explanation: 'Aangesien r = −0,78 kleiner as 0 is, is die korrelasie negatief — namate x toeneem, neig y om af te neem.',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'ʼn Datastel het korrelasiekoëffisiënt r = −0,6. Beskryf die sterkte van hierdie korrelasie.',
          answer: 'Matige (negatiewe) korrelasie',
          checkMode: 'auto',
          correctAnswer: 'matig',
          correctAnswers: ['matig', 'matige korrelasie', 'matige negatiewe korrelasie'],
          explanation: '|r| = 0,6 lê tussen 0,5 en 0,75, wat op ʼn matige lineêre korrelasie dui.',
        },
        {
          difficulty: 'Medium',
          question: 'Twee datastelle het korrelasiekoëffisiënte r = −0,85 en r = 0,3. Watter een wys die sterker lineêre verband?',
          answer: 'Die datastel met r = −0,85',
          checkMode: 'auto',
          correctAnswer: 'r=-0,85',
          correctAnswers: ['r = -0,85', 'r = -0.85', '-0,85', '-0.85', 'die een met r=-0,85', 'die een met r=-0.85', 'r=-0,85', 'r=-0.85'],
          explanation: 'Sterkte word gemeet aan die grootte van r ongeag die teken. |−0,85| = 0,85 is groter as |0,3| = 0,3, dus wys r = −0,85 die sterker (negatiewe) lineêre verband.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Spreidingsdiagram van skoengrootte (x) teenoor maandelikse inkomste (y) het r = 0,02. Wat dui dit aan oor die lineêre verband tussen die veranderlikes?',
          answer: 'Daar is min tot geen lineêre korrelasie tussen die veranderlikes nie',
          checkMode: 'auto',
          correctAnswer: 'geenlineerekorrelasie',
          correctAnswers: ['geen lineêre korrelasie', 'min tot geen korrelasie', 'geen korrelasie', 'baie swak korrelasie'],
          explanation: 'r = 0,02 is baie naby aan 0, wat op byna geen lineêre verband tussen die twee veranderlikes dui nie.',
        },

        // ── Blok C: regressielynvoorspelling (V8–10) ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Die kleinste-kwadrate-regressielyn vir advertensies uitgesaai (x) teenoor weeklikse verkope in honderde rand (y) is y = 8 + 3,2x. Voorspel die weeklikse verkope (in honderde rand) wanneer 9 advertensies uitgesaai word.',
          answer: '36,8',
          checkMode: 'auto',
          correctAnswer: '36,8',
          correctAnswers: ['36.8', '36,8'],
          explanation: 'y = 8 + 3,2(9) = 8 + 28,8 = 36,8 (honderde rand).',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde regressielyn y = 8 + 3,2x, het ʼn winkel wat werklik 9 advertensies uitgesaai het, weeklikse verkope van 40 (honderde rand) gehad. Bepaal die residu (werklike y − voorspelde y) vir hierdie winkel.',
          answer: '3,2',
          checkMode: 'auto',
          correctAnswer: '3,2',
          correctAnswers: ['3.2', '3,2'],
          explanation: 'Voorspelde y = 8 + 3,2(9) = 36,8. Residu = werklik − voorspel = 40 − 36,8 = 3,2.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn vir erfgrootte in m² (x) teenoor huisprys in duisende rand (y) is y = 300 + 0,6x. Voorspel die huisprys vir ʼn erf van 250 m².',
          answer: '450 (duisend rand)',
          checkMode: 'auto',
          correctAnswer: '450',
          explanation: 'y = 300 + 0,6(250) = 300 + 150 = 450 (duisend rand).',
        },

        // ── Blok D: residue (V11–13) ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn is y = 10 + 4x. Vir x = 5 is die werklike waargenome waarde y = 33. Bereken die residu.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Voorspelde y = 10 + 4(5) = 10 + 20 = 30. Residu = werklik − voorspel = 33 − 30 = 3.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'ʼn Regressielyn is y = 60 − 2x. Vir x = 12 is die werklike waargenome waarde y = 33. Bereken die residu en stel vas of die werklike punt bo of onder die regressielyn lê.',
          answer: 'Residu = −3; die punt lê onder die regressielyn',
          checkMode: 'auto',
          correctAnswer: '-3onder',
          correctAnswers: ['-3, onder', '-3 onder', 'residu -3 onder die lyn'],
          explanation: 'Voorspelde y = 60 − 2(12) = 60 − 24 = 36. Residu = werklik − voorspel = 33 − 36 = −3. ʼn Negatiewe residu beteken die werklike punt lê onder die regressielyn.',
        },
        {
          difficulty: 'Hard',
          question: 'Bongani sê as die meeste residue in ʼn datastel naby nul is, moet die regressielyn se r naby 1 wees. Is hy korrek? Verduidelik.',
          answer: 'Ja, oor die algemeen korrek — klein residue beteken die waargenome punte lê naby aan die regressielyn, wat presies is wat ʼn sterk korrelasie (|r| naby 1) beskryf. Groot, verspreide residue sou eerder op ʼn swak korrelasie (|r| naby 0) dui.',
          checkMode: 'self',
        },

        // ── Blok E: gekombineerde voorspelling + betroubaarheid (V14–16) ────
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn vir aantal werknemers opgelei (x) teenoor maandelikse uitsettoename (y, in eenhede) is y = 100 + 4x, met korrelasiekoëffisiënt r = 0,89. Voorspel die uitsettoename wanneer 6 werknemers opgelei word.',
          answer: '124',
          checkMode: 'auto',
          correctAnswer: '124',
          explanation: 'y = 100 + 4(6) = 100 + 24 = 124.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Met die regressielyn y = 100 + 4x en korrelasiekoëffisiënt r = 0,89, het ʼn datapunt by x = 6 ʼn werklike y-waarde van 130. Bereken die residu en lewer kommentaar oor of r = 0,89 daarop dui dat hierdie regressielyn oor die algemeen betroubaar is vir voorspelling.',
          answer: 'Residu = 6. Aangesien r = 0,89 naby 1 is, dui dit op ʼn sterk positiewe korrelasie, dus is die regressielyn oor die algemeen ʼn betroubare model vir voorspelling.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Tweede datastel het regressielyn y = 100 + 4x maar korrelasiekoëffisiënt r = 0,15. Nomvula gebruik hierdie lyn om y te voorspel wanneer x = 6, en kry y = 124, en beweer hierdie voorspelling is net so betroubaar as een van ʼn datastel met r = 0,89. Is sy korrek? Verduidelik.',
          answer: 'Nee — alhoewel die berekening y = 124 wiskundig korrek is, dui r = 0,15 op ʼn baie swak lineêre korrelasie, wat beteken die datapunte is wyd versprei rondom die lyn. Die voorspelling is veel minder betroubaar as een gemaak met ʼn datastel met r = 0,89, wat ʼn sterk lineêre patroon toon.',
          checkMode: 'self',
        },

        // ── Blok F: regressielyn-eienskappe / ekstrapolasie / kousaliteit (V17–20) ──
        {
          difficulty: 'Medium-Hard',
          question: 'ʼn Datastel van advertensies uitgesaai (x) het x-waardes wat wissel van 1 tot 10. Die regressielyn is y = 8 + 3,2x. Kabelo wil hierdie lyn gebruik om weeklikse verkope te voorspel vir ʼn winkel wat 60 advertensies uitsaai. Verduidelik waarom hierdie voorspelling onbetroubaar sou wees.',
          answer: 'x = 60 lê ver buite die oorspronklike datareeks (1 tot 10). Om die regressielyn te gebruik om waardes ver buite die reeks van die oorspronklike data te voorspel, staan bekend as ekstrapolasie, en dit is onbetroubaar omdat daar geen bewys is dat die lineêre neiging buite die waargenome data voortduur nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Datastel van advertensies uitgesaai (x) teenoor weeklikse verkope (y) het gemiddelde x̄ = 4 advertensies en gemiddelde ȳ = 20,8 (honderde rand). Aisha sê die kleinste-kwadrate-regressielyn vir hierdie data moet deur die punt (4; 20,8) gaan. Is sy korrek? Verduidelik.',
          answer: 'Ja — die kleinste-kwadrate-regressielyn gaan altyd deur die gemiddeldepunt (x̄, ȳ) van die data. Dit is ʼn wiskundige eienskap van hoe die lyn bereken word.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Navorser vind ʼn sterk positiewe korrelasie (r = 0,91) tussen maandelikse roomys-verkope en die aantal verdrinkingsvoorvalle by strande. Hy maak die gevolgtrekking dat roomys verdrinking veroorsaak. Verduidelik die fout in sy redenasie.',
          answer: 'Korrelasie beteken nie kousaliteit nie. ʼn Waarskynlike verduideliking is ʼn derde (verwarrende) veranderlike — warm weer. Warm weer verhoog beide roomys-verkope EN die aantal mense wat swem (en dus verdrinkingsrisiko), wat die korrelasie skep sonder dat roomys verdrinking veroorsaak.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Spreidingsdiagram van x teenoor y wys die punte (1, 3), (2, 10), (3, 21), (4, 36), (5, 55) wat ʼn duidelike geboë (U-vormige) patroon vorm, nie ʼn reguit lyn nie. Die korrelasiekoëffisiënt word bereken as r = 0,97. Kagiso sê hierdie hoë r-waarde bewys dat ʼn reguit lyn die beste model vir hierdie data is. Is hy korrek? Verduidelik.',
          answer: 'Nee — r meet slegs die sterkte van ʼn LINEÊRE verband. Alhoewel r = 0,97 naby 1 is, wys die spreidingsdiagram duidelik ʼn geboë (nie-lineêre) patroon. ʼn Reguit lyn sou nie ʼn geskikte model hier wees nie ondanks die hoë r-waarde; kontroleer altyd die vorm van die spreidingsdiagram, nie net r nie.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan spreidingsdiagramme, regressielyne en korrelasie met selfvertroue interpreteer.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 V) — dieselfde bloklayout, meer werklike-wêreld-kontekste + redenasie
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok A: lees spreidingsdiagrampunte / veranderlikes (V1–3) ─────
        {
          difficulty: 'Easy',
          question: 'ʼn Spreidingsdiagram vergelyk ʼn motor se ouderdom in jare (x) en sy herverkoopwaarde in duisende rand (y). Watter veranderlike is die onafhanklike veranderlike?',
          answer: 'Ouderdom van die motor (x)',
          checkMode: 'auto',
          correctAnswer: 'ouderdom',
          correctAnswers: ['ouderdom', 'ouderdom van die motor', 'ouderdom van die motor (x)', 'x'],
          explanation: 'Die onafhanklike veranderlike is dié een wat ons beheer of kies — die motor se ouderdom — geplot op die x-as. Die herverkoopwaarde hang daarvan af, dus is dit die afhanklike veranderlike (y).',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">50</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">100</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">150</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">200</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">250</text><circle cx="85" cy="51.4" r="4" fill="#2563eb"/><circle cx="115" cy="69" r="4" fill="#2563eb"/><circle cx="175" cy="99.8" r="4" fill="#2563eb"/><circle cx="235" cy="130.6" r="4" fill="#2563eb"/><circle cx="295" cy="161.4" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ouderdom van motor (jare) (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Herverkoopwaarde (R\'000) (y)</text></svg>',
        },
        {
          difficulty: 'Easy',
          question: 'Twee datapunte op ʼn spreidingsdiagram van motorouderdom in jare (x) teenoor herverkoopwaarde in duisende rand (y) is geplot by (5, 140) en (9, 95). Watter motor het die hoër herverkoopwaarde, en met hoeveel (in duisende rand)?',
          answer: 'Die 5-jaar-oue motor, met 45 (duisend rand)',
          checkMode: 'auto',
          correctAnswer: '45',
          correctAnswers: ['45', '5 jaar oue motor met 45', 'die motor by (5,140) met 45'],
          explanation: 'Die y-waardes (herverkoopwaarde) is 140 en 95. Die motor by (5, 140) het die hoër herverkoopwaarde, en die verskil is 140 − 95 = 45 (duisend rand).',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">50</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">100</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">150</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">200</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">250</text><circle cx="205" cy="121.8" r="4" fill="#2563eb"/><circle cx="325" cy="161.4" r="4" fill="#2563eb"/><text x="205" y="109.8" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(5, 140)</text><text x="325" y="149.4" font-size="11" fill="#2563eb" font-weight="700" text-anchor="middle">(9, 95)</text><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ouderdom van motor (jare) (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Herverkoopwaarde (R\'000) (y)</text></svg>',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'ʼn Spreidingsdiagram wys die punte (1, 220), (2, 200), (4, 165), (6, 130), (8, 95) vir motorouderdom in jare (x) teenoor herverkoopwaarde in duisende rand (y). Namate x toeneem oor hierdie punte, wat gebeur met y?',
          answer: 'y neem af namate x toeneem',
          checkMode: 'auto',
          correctAnswer: 'yneemaf',
          correctAnswers: ['y neem af', 'neem af', 'y neem af namate x toeneem'],
          explanation: 'As jy die punte in volgorde van toenemende x lees (1, 2, 4, 6, 8), neem die y-waardes af (220, 200, 165, 130, 95) — die punte neig afwaarts, wat op ʼn negatiewe verband dui.',
          diagramSvg: '<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg"><line x1="55" y1="25" x2="55" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="115" y1="25" x2="115" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="175" y1="25" x2="175" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="235" y1="25" x2="235" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="295" y1="25" x2="295" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="355" y1="25" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="245" x2="355" y2="245" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="201" x2="355" y2="201" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="157" x2="355" y2="157" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="113" x2="355" y2="113" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="69" x2="355" y2="69" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="355" y2="25" stroke="#e2e8f0" stroke-width="1"/><line x1="55" y1="25" x2="55" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="355" y2="245" stroke="#0f1f3d" stroke-width="2"/><line x1="55" y1="245" x2="55" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="55" y="263" font-size="11" fill="#374151" text-anchor="middle">0</text><line x1="115" y1="245" x2="115" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="263" font-size="11" fill="#374151" text-anchor="middle">2</text><line x1="175" y1="245" x2="175" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="263" font-size="11" fill="#374151" text-anchor="middle">4</text><line x1="235" y1="245" x2="235" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="235" y="263" font-size="11" fill="#374151" text-anchor="middle">6</text><line x1="295" y1="245" x2="295" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="295" y="263" font-size="11" fill="#374151" text-anchor="middle">8</text><line x1="355" y1="245" x2="355" y2="250" stroke="#0f1f3d" stroke-width="1.5"/><text x="355" y="263" font-size="11" fill="#374151" text-anchor="middle">10</text><line x1="50" y1="245" x2="55" y2="245" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="249" font-size="11" fill="#374151" text-anchor="end">0</text><line x1="50" y1="201" x2="55" y2="201" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="205" font-size="11" fill="#374151" text-anchor="end">50</text><line x1="50" y1="157" x2="55" y2="157" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="161" font-size="11" fill="#374151" text-anchor="end">100</text><line x1="50" y1="113" x2="55" y2="113" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="117" font-size="11" fill="#374151" text-anchor="end">150</text><line x1="50" y1="69" x2="55" y2="69" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="73" font-size="11" fill="#374151" text-anchor="end">200</text><line x1="50" y1="25" x2="55" y2="25" stroke="#0f1f3d" stroke-width="1.5"/><text x="46" y="29" font-size="11" fill="#374151" text-anchor="end">250</text><circle cx="85" cy="51.4" r="4" fill="#2563eb"/><circle cx="115" cy="69" r="4" fill="#2563eb"/><circle cx="175" cy="99.8" r="4" fill="#2563eb"/><circle cx="235" cy="130.6" r="4" fill="#2563eb"/><circle cx="295" cy="161.4" r="4" fill="#2563eb"/><text x="205" y="292" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ouderdom van motor (jare) (x)</text><text x="14" y="135" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 14 135)">Herverkoopwaarde (R\'000) (y)</text></svg>',
        },

        // ── Blok B: r interpreteer (V4–7) ───────────────────────────────────
        {
          difficulty: 'Easy',
          question: 'ʼn Datastel het korrelasiekoëffisiënt r = −0,97. Is dit ʼn positiewe of negatiewe korrelasie?',
          answer: 'Negatief',
          checkMode: 'auto',
          correctAnswer: 'negatief',
          correctAnswers: ['negatief', 'negatiewe korrelasie'],
          explanation: 'Aangesien r = −0,97 kleiner as 0 is, is die korrelasie negatief — namate x toeneem, neig y om af te neem.',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'ʼn Datastel het korrelasiekoëffisiënt r = 0,68. Beskryf die sterkte van hierdie korrelasie.',
          answer: 'Matige (positiewe) korrelasie',
          checkMode: 'auto',
          correctAnswer: 'matig',
          correctAnswers: ['matig', 'matige korrelasie', 'matige positiewe korrelasie'],
          explanation: 'r = 0,68 lê tussen 0,5 en 0,75, wat op ʼn matige lineêre korrelasie dui.',
        },
        {
          difficulty: 'Medium',
          question: 'Twee datastelle het korrelasiekoëffisiënte r = 0,55 en r = −0,97. Watter een wys die sterker lineêre verband?',
          answer: 'Die datastel met r = −0,97',
          checkMode: 'auto',
          correctAnswer: 'r=-0,97',
          correctAnswers: ['r = -0,97', 'r = -0.97', '-0,97', '-0.97', 'die een met r=-0,97', 'die een met r=-0.97', 'r=-0,97', 'r=-0.97'],
          explanation: 'Sterkte word gemeet aan die grootte van r ongeag die teken. |−0,97| = 0,97 is groter as |0,55| = 0,55, dus wys r = −0,97 die sterker (negatiewe) lineêre verband.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Spreidingsdiagram van ʼn persoon se geboortemaand (x) teenoor hulle lengte (y) het r = −0,03. Wat dui dit aan oor die lineêre verband tussen die veranderlikes?',
          answer: 'Daar is min tot geen lineêre korrelasie tussen die veranderlikes nie',
          checkMode: 'auto',
          correctAnswer: 'geenlineerekorrelasie',
          correctAnswers: ['geen lineêre korrelasie', 'min tot geen korrelasie', 'geen korrelasie', 'baie swak korrelasie'],
          explanation: 'r = −0,03 is baie naby aan 0, wat op byna geen lineêre verband tussen die twee veranderlikes dui nie.',
        },

        // ── Blok C: regressielynvoorspelling (V8–10) ────────────────────────
        {
          difficulty: 'Medium',
          question: 'Die kleinste-kwadrate-regressielyn vir oefenure per week (x) teenoor kompetisietelling uit 100 (y) is y = 15 + 1,6x. Voorspel die kompetisietelling vir ʼn atleet wat 20 ure per week oefen.',
          answer: '47',
          checkMode: 'auto',
          correctAnswer: '47',
          explanation: 'y = 15 + 1,6(20) = 15 + 32 = 47.',
        },
        {
          difficulty: 'Medium',
          question: 'Met dieselfde regressielyn y = 15 + 1,6x, het ʼn atleet wat werklik 20 ure geoefen het, 52 in die kompetisie behaal. Bepaal die residu (werklike y − voorspelde y) vir hierdie atleet.',
          answer: '5',
          checkMode: 'auto',
          correctAnswer: '5',
          explanation: 'Voorspelde y = 15 + 1,6(20) = 47. Residu = werklik − voorspel = 52 − 47 = 5.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn vir temperatuur in °C (x) teenoor koeldrank-verkope in liter (y) is y = 40 + 5,5x. Voorspel die koeldrank-verkope wanneer die temperatuur 28°C is.',
          answer: '194 liter',
          checkMode: 'auto',
          correctAnswer: '194',
          explanation: 'y = 40 + 5,5(28) = 40 + 154 = 194 liter.',
        },

        // ── Blok D: residue (V11–13) ────────────────────────────────────────
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn is y = 8 + 6x. Vir x = 4 is die werklike waargenome waarde y = 35. Bereken die residu.',
          answer: '3',
          checkMode: 'auto',
          correctAnswer: '3',
          explanation: 'Voorspelde y = 8 + 6(4) = 8 + 24 = 32. Residu = werklik − voorspel = 35 − 32 = 3.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'ʼn Regressielyn is y = 220 − 8x. Vir x = 15 is die werklike waargenome waarde y = 92. Bereken die residu en stel vas of die werklike punt bo of onder die regressielyn lê.',
          answer: 'Residu = −8; die punt lê onder die regressielyn',
          checkMode: 'auto',
          correctAnswer: '-8onder',
          correctAnswers: ['-8, onder', '-8 onder', 'residu -8 onder die lyn'],
          explanation: 'Voorspelde y = 220 − 8(15) = 220 − 120 = 100. Residu = werklik − voorspel = 92 − 100 = −8. ʼn Negatiewe residu beteken die werklike punt lê onder die regressielyn.',
        },
        {
          difficulty: 'Hard',
          question: 'Precious sê residue kan nooit negatief wees nie, aangesien ʼn residu net ʼn "afstand" vanaf die lyn meet. Is sy korrek? Verduidelik.',
          answer: 'Nee — ʼn residu word bereken as werklike y minus voorspelde y, dus kan dit positief (punt bo die lyn), negatief (punt onder die lyn), of nul (punt presies op die lyn) wees. Slegs die grootte (absolute waarde) van die residu verteenwoordig ʼn afstand; die teken dui die rigting aan.',
          checkMode: 'self',
        },

        // ── Blok E: gekombineerde voorspelling + betroubaarheid (V14–16) ────
        {
          difficulty: 'Medium',
          question: 'ʼn Regressielyn vir ure sonlig per dag (x) teenoor plantgroei in mm (y) is y = 50 + 6x, met korrelasiekoëffisiënt r = 0,87. Voorspel die plantgroei vir 7 ure sonlig per dag.',
          answer: '92',
          checkMode: 'auto',
          correctAnswer: '92',
          explanation: 'y = 50 + 6(7) = 50 + 42 = 92.',
        },
        {
          difficulty: 'Medium-Hard',
          question: 'Met die regressielyn y = 50 + 6x en korrelasiekoëffisiënt r = 0,87, het ʼn datapunt by x = 7 ʼn werklike y-waarde van 85. Bereken die residu en lewer kommentaar oor of r = 0,87 daarop dui dat hierdie regressielyn oor die algemeen betroubaar is vir voorspelling.',
          answer: 'Residu = −7. Aangesien r = 0,87 naby 1 is, dui dit op ʼn sterk positiewe korrelasie, dus is die regressielyn oor die algemeen ʼn betroubare model vir voorspelling.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Tweede datastel het regressielyn y = 50 + 6x maar korrelasiekoëffisiënt r = 0,18. Thandiwe gebruik hierdie lyn om y te voorspel wanneer x = 7, en kry y = 92, en beweer hierdie voorspelling is net so betroubaar as een van ʼn datastel met r = 0,87. Is sy korrek? Verduidelik.',
          answer: 'Nee — alhoewel die berekening y = 92 wiskundig korrek is, dui r = 0,18 op ʼn baie swak lineêre korrelasie, wat beteken die datapunte is wyd versprei rondom die lyn. Die voorspelling is veel minder betroubaar as een gemaak met ʼn datastel met r = 0,87, wat ʼn sterk lineêre patroon toon.',
          checkMode: 'self',
        },

        // ── Blok F: regressielyn-eienskappe / ekstrapolasie / kousaliteit (V17–20) ──
        {
          difficulty: 'Medium-Hard',
          question: 'ʼn Datastel van motorouderdom in jare (x) het x-waardes wat wissel van 1 tot 10. Die regressielyn is y = 220 − 8x. Gegewe dat herverkoopwaarde nie negatief kan wees nie, verduidelik waarom die gebruik van hierdie lyn om herverkoopwaarde vir ʼn 40-jaar-oue motor te voorspel, onbetroubaar sou wees.',
          answer: 'x = 40 lê ver buite die oorspronklike datareeks (1 tot 10). Om die regressielyn te gebruik om waardes ver buite die reeks van die oorspronklike data te voorspel, staan bekend as ekstrapolasie, en dit is onbetroubaar — inderdaad, y = 220 − 8(40) = −100, ʼn negatiewe herverkoopwaarde, wat onmoontlik is en wys dat die lineêre neiging nie onbepaald kan voortduur nie.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Datastel van oefenure (x) teenoor kompetisietelling (y) het gemiddelde x̄ = 11 ure en gemiddelde ȳ = 32,6. Karabo sê die kleinste-kwadrate-regressielyn vir hierdie data moet deur die punt (11; 32,6) gaan. Is hy korrek? Verduidelik.',
          answer: 'Ja — die kleinste-kwadrate-regressielyn gaan altyd deur die gemiddeldepunt (x̄, ȳ) van die data. Dit is ʼn wiskundige eienskap van hoe die lyn bereken word.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Navorser vind ʼn sterk positiewe korrelasie (r = 0,94) tussen die aantal brandweermanne by ʼn toneel en die hoeveelheid sigbare rook. Sy maak die gevolgtrekking dat meer brandweermanne meer rook veroorsaak. Verduidelik die fout in haar redenasie.',
          answer: 'Korrelasie beteken nie kousaliteit nie. ʼn Waarskynlike verduideliking is ʼn derde (verwarrende) veranderlike — die grootte/intensiteit van die brand. ʼn Groter, meer intense brand produseer meer rook EN vereis meer brandweermanne om gestuur te word, wat die korrelasie skep sonder dat die brandweermanne die rook veroorsaak.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Spreidingsdiagram van x teenoor y wys die punte (1, 4), (2, 15), (3, 32), (4, 55), (5, 84) wat ʼn duidelike geboë patroon vorm, nie ʼn reguit lyn nie. Die korrelasiekoëffisiënt word bereken as r = 0,96. Boitumelo sê hierdie hoë r-waarde bewys dat ʼn reguit lyn die beste model vir hierdie data is. Is sy korrek? Verduidelik.',
          answer: 'Nee — r meet slegs die sterkte van ʼn LINEÊRE verband. Alhoewel r = 0,96 naby 1 is, wys die spreidingsdiagram duidelik ʼn geboë (nie-lineêre) patroon. ʼn Reguit lyn sou nie ʼn geskikte model hier wees nie ondanks die hoë r-waarde; kontroleer altyd die vorm van die spreidingsdiagram, nie net r nie.',
          checkMode: 'self',
        },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan spreidingsdiagramme, regressielyne en korrelasie op werklike-wêreld-probleme toepas.' },
        { minScore: 15, message: 'Puik werk! Gaan enige gemiste vrae na en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
