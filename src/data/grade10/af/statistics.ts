import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (statistics roles) ───────────────────────────────────────
// blue   (#2563eb) → intervals / calculator buttons / midpoints / quartile positions
// orange (#ea580c) → midpoints / menu options / frequency height / interquartile range
// green  (#16a34a) → frequencies / displayed result / polygon lines / range
// red    (#dc2626) → outlier
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Statistiek',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — MAATSTAWWE VAN SENTRALE NEIGING VIR GEGROEPEERDE DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'measures-central-tendency-grouped',
      title: 'Maatstawwe van Sentrale Neiging vir Gegroepeerde Data',
      icon: '∑',
      explanation:
        `<p style="margin-bottom:16px;">Vir <strong>gegroepeerde data</strong> (data wat in intervalle georganiseer is) kan ons nie die presiese gemiddelde bepaal nie, aangesien ons nie individuele waardes ken nie — in plaas daarvan bereken ons ʼn <strong>benaderde gemiddelde</strong> deur die middelpunt van elke interval met sy frekwensie te vermenigvuldig. Ons identifiseer ook die <strong>modale interval</strong> (die interval met die hoogste frekwensie) en die <strong>interval waarin die mediaan lê</strong> (gevind deur die middelste posisie tussen die kumulatiewe frekwensies te bepaal).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('intervalle')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpunte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('frekwensies')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Modale Interval</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('interval')} met die hoogste ${gr('frekwensie')} — dit is die modusklas vir gegroepeerde data.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Middelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${or('middelpunt')} van ʼn ${bl('interval')} word bepaal deur die onder- en bogrens te middel: (onder + bo) ÷ 2.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Benaderde Gemiddelde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Bereken as: Σ(${or('middelpunt')} × ${gr('frekwensie')}) ÷ Σ${gr('frekwensie')}. Dit is benaderd omdat individuele datawaardes onbekend is.</p>` +
        `</div>` +

        `</div>` +

        // ── Formula ──────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Formule vir benaderde gemiddelde</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;text-align:center;">` +
        `<p style="font-size:1.1em;font-weight:700;color:#374151;margin:0;">Benaderde gemiddelde = Σ(${or('middelpunt')} × ${gr('frekwensie')}) ÷ Σ${gr('frekwensie')}</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom middelpunte?</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat ons nie die individuele waardes binne elke ${bl('interval')} ken nie, aanvaar ons dat hulle almal gelyk is aan die ${or('middelpunt')} van daardie ${bl('interval')}. Dit gee die beste enkele skatting vir elke groep.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Datastel het intervalle 0≤x<10 (frekwensie 4), 10≤x<20 (frekwensie 8), 20≤x<30 (frekwensie 6). Bepaal die modale interval.',
          answer: `Die ${bl('10≤x<20')} interval is die modale interval`,
          steps: [
            `Lys elke ${bl('interval')} met sy ${gr('frekwensie')}: ${bl('0≤x<10')} → ${gr('4')}, ${bl('10≤x<20')} → ${gr('8')}, ${bl('20≤x<30')} → ${gr('6')}.`,
            `Die ${bl('interval')} ${bl('10≤x<20')} het die hoogste ${gr('frekwensie')} (${gr('8')}), dus is dit die <strong>modale interval</strong>.`,
          ],
        },
        {
          question: 'Gebruik dieselfde data (0≤x<10 freq 4, 10≤x<20 freq 8, 20≤x<30 freq 6) om die benaderde gemiddelde te bepaal.',
          answer: `Benaderde gemiddelde ≈ ${or('16.11')}`,
          steps: [
            `Bepaal die ${or('middelpunt')} van elke ${bl('interval')}: ${bl('0≤x<10')} → ${or('5')}, ${bl('10≤x<20')} → ${or('15')}, ${bl('20≤x<30')} → ${or('25')}.`,
            `Bereken ${or('middelpunt')} × ${gr('frekwensie')} vir elke ${bl('interval')}: (${or('5')} × ${gr('4')}) + (${or('15')} × ${gr('8')}) + (${or('25')} × ${gr('6')}) = 20 + 120 + 150 = <strong>290</strong>.`,
            `Bepaal die totale ${gr('frekwensie')}: ${gr('4')} + ${gr('8')} + ${gr('6')} = ${gr('18')}.`,
            `<strong>Benaderde gemiddelde</strong> = 290 ÷ ${gr('18')} ≈ ${or('16.11')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Frekwensietabel met drie intervalle met middelpunte en frekwensies, en werk vir die berekening van die benaderde gemiddelde met kleurgekodeerde kolomme vir intervalle blou middelpunte oranje frekwensies groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die modale interval en benaderde gemiddelde uit ʼn gegroepeerde frekwensietabel te bepaal deur middelpunte en frekwensies te gebruik" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — SAKREKENAARVAARDIGHEDE VIR STATISTIEK (CASIO fx-82 REEKS)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculator-skills-statistics',
      title: 'Sakrekenaarvaardighede vir Statistiek (Casio fx-82 Reeks)',
      icon: '🔢',
      explanation:
        `<p style="margin-bottom:16px;">Die meeste Casio fx-82-reeks sakrekenaars (die standaardmodel wat by Suid-Afrikaanse skole gebruik word) kan die gemiddelde en ander statistiek outomaties bereken sodra data korrek ingevoer is, wat aansienlik tyd bespaar en foute by gegroepeerde-data-probleme verminder.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('sakrekenaarknoppies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('kieslys-opsies')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('vertoonde resultaat')}</span>` +
        `</div>` +

        // ── Overview ─────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene werkvloei</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Gaan na STAT-modus')}</strong> — Druk ${bl('[MENU]')} of ${bl('[MODE]')} en kies ${or('STAT')} (gewoonlik opsie 2).</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Kies 1-VAR')}</strong> — Kies ${or('1-VAR')} vir enkelveranderlike data. ʼn Tabel met kolomme <strong>x</strong> en <strong>FREQ</strong> verskyn.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Voer data in')}</strong> — Tik elke middelpunt in die <strong>x</strong>-kolom en die ooreenstemmende frekwensie in die <strong>FREQ</strong>-kolom in.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Lees die resultate')}</strong> — Druk ${bl('[AC]')} en dan ${bl('[SHIFT][1]')} (STAT), kies ${or('Var')}, en kies ${gr('x̄')} vir die gemiddelde.</p>` +
        `</div>` +

        `</div>` +

        // ── Warning box ──────────────────────────────────────────────────────
        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Maak altyd vorige data skoon</p>` +
        `<p style="margin:0;color:#991b1b;">Voordat jy ʼn nuwe berekening begin, maak die vorige statistiese data skoon — gewoonlik via ${bl('[SHIFT][CLR]')} of via die ${or('STAT-kieslys → Edit → Delete All')}. Presiese knoppie-etikette en kieslysstappe kan effens verskil tussen Casio fx-82-modelvariante (MS, ES PLUS, ZA PLUS).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Gaan na Statistiekmodus op ʼn Casio fx-82ZA PLUS (of soortgelyke ES PLUS-reeks).',
          answer: `Die ${or('STAT')} data-invoertabel verskyn met kolomme <strong>x</strong> en <strong>FREQ</strong>`,
          steps: [
            `Druk ${bl('[MENU]')} of ${bl('[MODE]')}, kies dan ${or('STAT')} (dikwels opsie 2 of via SETUP te vind).`,
            `Kies ${or('1-VAR')} vir enkelveranderlike data (soos ongegroepeerde of gegroepeerde frekwensiedata).`,
            `ʼn Data-invoertabel verskyn met kolomme vir <strong>x</strong> (waarde/middelpunt) en <strong>FREQ</strong> (frekwensie).`,
          ],
        },
        {
          question: 'Voer die gegroepeerde data van Afdeling 1 in (middelpunte 5, 15, 25 met frekwensies 4, 8, 6) en bepaal die gemiddelde.',
          answer: `Die sakrekenaar wys ${gr('≈ 16.11')}, wat die handberekening bevestig`,
          steps: [
            `Voer x-waardes as middelpunte in die <strong>x</strong>-kolom in: 5, 15, 25.`,
            `Voer ooreenstemmende frekwensies in die <strong>FREQ</strong>-kolom in: ${gr('4')}, ${gr('8')}, ${gr('6')}.`,
            `Druk ${bl('[AC]')} en dan ${bl('[SHIFT][1]')} (STAT) om toegang tot statistiese resultate te kry, kies dan ${or('Var')} (veranderlikes) en kies ${gr('x̄')} (x-streep) vir die gemiddelde.`,
            `Die sakrekenaar wys ${gr('≈ 16.11')}, wat die handberekening bevestig ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Skerm-vir-skerm diagram van ʼn Casio fx-82ZA PLUS wat die MODE-kieslys, 1-VAR-keuse, data-invoertabel met x- en FREQ-kolomme ingevul, en die STAT-resultateskerm met x-streep wys, met kleurgekodeerde knoppies blou kieslys-opsies oranje vertoonde resultaat groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat demonstreer hoe om gegroepeerde frekwensiedata in ʼn Casio fx-82-reeks sakrekenaar in STAT 1-VAR-modus in te voer en die gemiddelde af te lees" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — IDENTIFISERING VAN UITSKIETERS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'identification-outliers',
      title: 'Identifisering van Uitskieters',
      icon: '⚠',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Uitskieter</strong> is ʼn datawaarde wat aansienlik hoër of laer is as die meeste ander waardes in die datastel, en wat afsonderlik staan van die algemene patroon. Uitskieters kan foute in dataversameling aandui, of egte maar ongewone geldige resultate wees, en hulle kan die gemiddelde aansienlik beïnvloed as dit nie versigtig hanteer word nie.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('tipiese datawaardes')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('uitskieter')}</span>` +
        `</div>` +

        // ── What to look for ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn uitskieter te identifiseer</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Visuele inspeksie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Rangskik die data en soek na ʼn waarde wat ver van die ${bl('groepering van tipiese waardes')} af lê — ʼn groot gaping aan enige kant dui op ʼn moontlike ${re('uitskieter')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Effek op die gemiddelde</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Enkele ${re('uitskieter')} kan die gemiddelde aansienlik hoër of laer trek, wat dit ʼn swak verteenwoordiging van die ${bl('tipiese waardes')} in die datastel maak.</p>` +
        `</div>` +

        `</div>` +

        // ── Two causes ───────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Twee moontlike oorsake van ʼn uitskieter</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${re('Datafout')}</strong> — ʼn fout in die opneem, meet of vasleg van die data. Dit moet reggestel of verwyder word voor ontleding.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Egte uiterste waarde')}</strong> — ʼn werklike resultaat wat bloot veel hoër of laer is as die res. Dit moet behou word met ʼn aantekening oor die ongewone aard daarvan.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Konteks is belangrik</p>` +
        `<p style="margin:0;color:#1e3a8a;">Oorweeg altyd die konteks voordat jy besluit of ʼn ${re('uitskieter')} uitgesluit moet word. Vra of die waarde aanneemlik is gegewe die situasie, en of daar bewyse van ʼn opnamefout is voordat dit uit jou berekeninge verwyder word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Identifiseer enige uitskieter in hierdie datastel: 22, 25, 24, 23, 99, 21.',
          answer: `${re('99')} is ʼn duidelike uitskieter`,
          steps: [
            `Rangskik die data: ${bl('21')}, ${bl('22')}, ${bl('23')}, ${bl('24')}, ${bl('25')}, ${re('99')}.`,
            `Die meeste waardes groepeer tussen ${bl('21–25')}, maar ${re('99')} is veel hoër as die res — daar is ʼn groot gaping tussen 25 en 99.`,
            `<strong>Gevolgtrekking:</strong> ${re('99')} is ʼn duidelike uitskieter wat afsonderlik staan van die algemene patroon van die data.`,
          ],
        },
        {
          question: 'Sipho het eksamentellings: 65, 70, 68, 72, 15, 69. Moet die 15 as ʼn uitskieter of ʼn egte lae telling beskou word?',
          answer: `${re('15')} word gemerk as ʼn moontlike uitskieter wat verdere ondersoek benodig`,
          steps: [
            `Rangskik die data: ${re('15')}, ${bl('65')}, ${bl('68')}, ${bl('69')}, ${bl('70')}, ${bl('72')}.`,
            `Die meeste waardes groepeer tussen ${bl('65–72')}, maar ${re('15')} is veel laer — ʼn gaping van 50 punte skei dit van die volgende laagste waarde.`,
            `Dit vereis ondersoek — dit kan ʼn datainvoerfout wees (moontlik bedoel as 75 of iets soortgelyks), of dit kan ʼn leerder verteenwoordig wat werklik gesukkel het of afwesig was vir ʼn deel van die assessering.`,
            `<strong>Gevolgtrekking:</strong> Sonder meer konteks word ${re('15')} gemerk as ʼn moontlike uitskieter wat verdere ondersoek benodig voordat besluit word of dit in berekeninge ingesluit moet word.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn wat datawaardes 21 22 23 24 25 saam gegroepeer in blou en 99 geïsoleerd ver na regs in rooi wys, wat ʼn duidelike uitskieter illustreer" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik wat ʼn uitskieter is, hoe om een visueel op ʼn getallelyn te herken, en hoe om te besluit of dit ʼn datafout of ʼn egte uiterste waarde is" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — FREKWENSIEPOLIGONE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'frequency-polygons',
      title: 'Frekwensiepoligone',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Frekwensiepoligoon</strong> is ʼn lyngrafiek wat die frekwensie van data binne elke interval wys, geskep deur ʼn punt by die <strong>middelpunt</strong> van elke interval te plot (op die hoogte van sy frekwensie) en opeenvolgende punte met reguit lyne te verbind. Dit is nuttig om die vorm en verspreiding van gegroepeerde data te vergelyk, veral wanneer twee datastelle op dieselfde asse vergelyk word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('middelpunte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('frekwensiehoogte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('poligoonlyne')}</span>` +
        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn frekwensiepoligoon te konstrueer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Bepaal middelpunte')}</strong> — Bereken die ${bl('middelpunt')} van elke interval. Dit word jou x-koördinate.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Plot punte')}</strong> — Plot elke punt by (${bl('middelpunt')}, ${or('frekwensie')}). Die ${or('frekwensie')} is die hoogte van die punt.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Verbind punte')}</strong> — Verbind opeenvolgende punte met reguit ${gr('lyne')} om die poligoon te vorm.</p>` +
        `</div>` +

        `</div>` +

        // ── Advantage ────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Voordeel bo ʼn histogram</p>` +
        `<p style="margin:0;color:#1e3a8a;">Twee frekwensiepoligone kan op dieselfde asse in verskillende kleure geteken word, wat dit maklik maak om twee datastelle direk te vergelyk. Histogramme oorvleuel en word moeilik om te lees wanneer hulle oor mekaar geplaas word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf hoe om ʼn frekwensiepoligoon te konstrueer uit die data: 0≤x<10 (freq 4), 10≤x<20 (freq 8), 20≤x<30 (freq 6).',
          answer: `Punte by (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}) verbind deur ${gr('reguit lyne')}`,
          steps: [
            `Bepaal die ${bl('middelpunt')} van elke interval: ${bl('0≤x<10')} → ${bl('5')}, ${bl('10≤x<20')} → ${bl('15')}, ${bl('20≤x<30')} → ${bl('25')}.`,
            `Plot punte by elke (${bl('middelpunt')}, ${or('frekwensie')}): (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}).`,
            `Verbind hierdie punte met ${gr('reguit lyne')} om die poligoon te vorm.`,
            `<em>[Diagram benodig: ʼn frekwensiepoligoon wat punte (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}) verbind deur reguit lyne wys, met die x-as gemerk as intervalmiddelpunte en die y-as gemerk as frekwensie]</em>`,
          ],
        },
        {
          question: 'Lerato wil die Kwartaal 1- en Kwartaal 2-toetstellingverspreidings vergelyk. Hoe sal ʼn frekwensiepoligoon help?',
          answer: 'Twee frekwensiepoligone op dieselfde asse maak direkte visuele vergelyking van albei kwartale moontlik',
          steps: [
            `Konstrueer ʼn frekwensiepoligoon vir Kwartaal 1-data deur punte by elke (${bl('middelpunt')}, ${or('frekwensie')}) te plot en dit met ${gr('lyne')} te verbind.`,
            `Konstrueer op <strong>dieselfde asse</strong> ʼn tweede frekwensiepoligoon vir Kwartaal 2-data met ʼn ander kleur.`,
            `Deur albei datastelle as afsonderlike frekwensiepoligone op dieselfde asse te plot, kan direk visueel vergelyk word watter kwartaal beter/swakker presteer het en hoe die verspreiding van tellings verskil het.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Frekwensiepoligoon met die x-as gemerk as intervalmiddelpunte wat 5 15 25 in blou wys en die y-as gemerk as frekwensie wat punte op hoogtes 4 8 6 in oranje wys, verbind deur reguit groen lyne" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn frekwensiepoligoon uit ʼn gegroepeerde frekwensietabel te teken deur middelpunt-frekwensie-pare te plot en dit met reguit lyne te verbind" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — VARIASIEWYDTE, PERSENTIELE, KWARTIELE EN INTERKWARTIELWYDTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'range-percentiles-quartiles-iqr',
      title: 'Variasiewydte, Persentiele, Kwartiele en Interkwartielwydte',
      icon: '↔',
      explanation:
        `<p style="margin-bottom:16px;">Ons hersien <strong>variasiewydte</strong> (grootste minus kleinste waarde) en brei uit na <strong>persentiele</strong> (die waarde waaronder ʼn sekere persentasie van die data val), <strong>kwartiele</strong> (wat data in vier gelyke dele verdeel — Q1 by 25%, Q2/mediaan by 50%, Q3 by 75%), en die <strong>interkwartielwydte</strong> (IKW = Q3 − Q1, wat die verspreiding van die middelste 50% van die data meet, nuttig om die invloed van uitskieters te verminder).</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('kwartielposisies')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('interkwartielwydte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('variasiewydte')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelmaatstawwe van verspreiding</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Variasiewydte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Variasiewydte')} = grootste waarde − kleinste waarde. Meet die totale verspreiding, maar word sterk deur uitskieters beïnvloed.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Kwartiele</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Q1')} (25%), ${bl('Q2')} (50% = mediaan), ${bl('Q3')} (75%). Elke ${bl('kwartiel')} verdeel gerangskikte data in vier gelyke dele.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Interkwartielwydte</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('IKW')} = ${bl('Q3')} − ${bl('Q1')}. Meet die verspreiding van die middelste 50% van die data, onbeïnvloed deur uitskieters.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Persentiele</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die p-de persentiel is die waarde waaronder p% van die data val. ${bl('Q1')} = 25ste persentiel, ${bl('Q2')} = 50ste, ${bl('Q3')} = 75ste.</p>` +
        `</div>` +

        `</div>` +

        // ── Finding quartiles ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Kwartiele uit gerangskikte data bepaal</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<ol style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:14px;color:#374151;">` +
        `<li>Rangskik die data van kleinste tot grootste.</li>` +
        `<li>Bepaal ${bl('Q2')} (mediaan) — die middelste waarde (of gemiddelde van die twee middelste waardes vir ʼn ewe getal).</li>` +
        `<li>Bepaal ${bl('Q1')} — die mediaan van die <strong>onderste helfte</strong> van die data (waardes onder ${bl('Q2')}).</li>` +
        `<li>Bepaal ${bl('Q3')} — die mediaan van die <strong>boonste helfte</strong> van die data (waardes bo ${bl('Q2')}).</li>` +
        `<li>Bereken ${or('IKW')} = ${bl('Q3')} − ${bl('Q1')}.</li>` +
        `</ol>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">IKW teenoor Variasiewydte</p>` +
        `<p style="margin:0;color:#1e3a8a;">Die ${gr('variasiewydte')} gebruik slegs die twee uiterste waardes en kan deur ʼn enkele uitskieter verwring word. Die ${or('IKW')} fokus op die middelste 50% van die data en is daarom ʼn meer betroubare maatstaf van verspreiding wanneer uitskieters teenwoordig is.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Bepaal die variasiewydte van die datastel: 12, 45, 18, 90, 22, 15.',
          answer: `${gr('Variasiewydte')} = ${gr('78')}`,
          steps: [
            `Rangskik die data: 12, 15, 18, 22, 45, 90.`,
            `${gr('Variasiewydte')} = grootste − kleinste = 90 − 12 = ${gr('78')}.`,
          ],
        },
        {
          question: 'Bepaal Q1, Q2 en Q3 van die gerangskikte datastel: 4, 8, 10, 14, 18, 22, 25, 30.',
          answer: `${bl('Q1')} = ${bl('9')}, ${bl('Q2')} = ${bl('16')}, ${bl('Q3')} = ${bl('23.5')}`,
          steps: [
            `Die data is reeds gerangskik: 4, 8, 10, 14, 18, 22, 25, 30. Daar is 8 waardes.`,
            `${bl('Q2')} (mediaan) = gemiddelde van die 4de en 5de waardes = (14 + 18) ÷ 2 = ${bl('16')}.`,
            `Onderste helfte (waardes onder Q2): 4, 8, 10, 14. ${bl('Q1')} = gemiddelde van 2de en 3de waardes = (8 + 10) ÷ 2 = ${bl('9')}.`,
            `Boonste helfte (waardes bo Q2): 18, 22, 25, 30. ${bl('Q3')} = gemiddelde van 2de en 3de waardes = (22 + 25) ÷ 2 = ${bl('23.5')}.`,
          ],
        },
        {
          question: 'Gebruik Q1 = 9 en Q3 = 23.5 uit Voorbeeld 2 om die interkwartielwydte te bepaal.',
          answer: `${or('IKW')} = ${or('14.5')}`,
          steps: [
            `${or('IKW')} = ${bl('Q3')} − ${bl('Q1')} = ${bl('23.5')} − ${bl('9')} = ${or('14.5')}.`,
            `Dit verteenwoordig die verspreiding van die middelste 50% van die data, onbeïnvloed deur enige uiterste uitskieters.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Getallelyn wat gerangskikte data met Q1 Q2 en Q3 posisies in blou gemerk wys, die interkwartielwydte in oranje tussen Q1 en Q3 gehaak, en die volle variasiewydte in groen van kleinste tot grootste waarde gehaak" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om die variasiewydte, Q1, Q2, Q3 en interkwartielwydte uit ʼn gerangskikte datastel te bepaal, en die verskil tussen variasiewydte en IKW verduidelik" />',
    },
  ],

  topicPractice: [
    // ── Vraag 1 Maklik — modale interval ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Data het intervalle 0≤x<5 (freq 3), 5≤x<10 (freq 7), 10≤x<15 (freq 2). Identifiseer die modale interval.',
      answer: '5≤x<10',
      checkMode: 'auto',
      correctAnswer: '5≤x<10',
      explanation: 'Die modale interval is dié met die hoogste frekwensie. 5≤x<10 het frekwensie 7, wat die hoogste van die drie intervalle is.',
    },

    // ── Vraag 2 Medium — benaderde gemiddelde ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die data van Vraag 1 (intervalle 0≤x<5 freq 3, 5≤x<10 freq 7, 10≤x<15 freq 2), bepaal die benaderde gemiddelde.',
      answer: '6.92',
      checkMode: 'auto',
      correctAnswer: '6.92',
      explanation: 'Middelpunte: 2.5, 7.5, 12.5. Σ(middelpunt × freq) = (2.5×3)+(7.5×7)+(12.5×2) = 7.5+52.5+25 = 85. Totale freq = 12. Gemiddelde = 85÷12 ≈ 6.92.',
    },

    // ── Vraag 3 Hard — eindpunte teenoor middelpunte ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho bereken die benaderde gemiddelde van gegroepeerde data deur eindpunte in plaas van middelpunte te gebruik. Verduidelik waarom dit verkeerd is.',
      answer: 'Die gebruik van eindpunte verteenwoordig nie die tipiese waarde binne elke interval nie; middelpunte gee ʼn regverdige skatting van waar die meeste datapunte waarskynlik binne daardie omvang val, wat die gemiddelde-berekening akkurater maak.',
      checkMode: 'self',
    },

    // ── Vraag 4 Maklik — STAT-modus ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Op ʼn Casio fx-82 sakrekenaar, watter modus moet jy kies om statistiese berekeninge uit te voer?',
      answer: 'STAT (statistiek) modus',
      checkMode: 'auto',
      correctAnswer: 'STAT (statistiek) modus',
      correctAnswers: ['STAT (statistiek) modus', 'STAT modus', 'statistiek modus', 'STAT'],
      explanation: 'Jy moet STAT (statistiek) modus kies, gewoonlik verkry deur MODE of MENU te druk en die STAT-opsie te kies.',
    },

    // ── Vraag 5 Medium — vorige data skoonmaak ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato voer data in haar sakrekenaar se STAT-modus in, maar vergeet om eers vorige data skoon te maak. Watter probleem kan dit veroorsaak?',
      answer: 'dit kan ou en nuwe data saam meng, wat ʼn verkeerde resultaat gee',
      checkMode: 'auto',
      correctAnswer: 'dit kan ou en nuwe data saam meng, wat ʼn verkeerde resultaat gee',
      explanation: 'Ou data bly in die geheue gestoor en word met die nuwe inskrywings gekombineer, wat alle statistiese resultate soos die gemiddelde verkeerd maak.',
    },

    // ── Vraag 6 Hard — sakrekenaarstappe vir gemiddelde ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Beskryf die algemene sakrekenaarstappe om die gemiddelde van gegroepeerde data wat met middelpunte en frekwensies ingevoer is, te bepaal.',
      answer: 'Gaan na STAT-modus, kies 1-VAR, voer middelpunte in die x-kolom en frekwensies in die FREQ-kolom in, gaan dan na die Var-kieslys (dikwels via SHIFT+1) en kies x̄ vir die gemiddelde.',
      checkMode: 'self',
    },

    // ── Vraag 7 Maklik — identifiseer uitskieter ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Identifiseer die uitskieter in die datastel: 30, 32, 29, 31, 85, 28.',
      answer: '85',
      checkMode: 'auto',
      correctAnswer: '85',
      explanation: 'Die meeste waardes groepeer tussen 28 en 32. Die waarde 85 is veel hoër as die res en is duidelik die uitskieter.',
    },

    // ── Vraag 8 Medium — uitskieterbesluit ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo het die datastel 15, 16, 14, 17, 3, 15. Moet 3 as ʼn definitiewe fout beskou word, of verder ondersoek word?',
      answer: 'verder ondersoek word',
      checkMode: 'auto',
      correctAnswer: 'verder ondersoek word',
      explanation: 'Alhoewel 3 baie laer is as die ander waardes, kan dit ʼn egte uiterste waarde of ʼn datafout wees. Dit moet in konteks ondersoek word voordat besluit word of dit verwyder moet word.',
    },

    // ── Vraag 9 Hard — kritiek op uitskieterverwydering ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê die verwydering van ʼn uitskieter maak ʼn datastel altyd meer "korrek". Is dit altyd waar? Verduidelik.',
      answer: 'Nee — uitskieters moet voor verwydering ondersoek word; sommige uitskieters verteenwoordig egte, belangrike waardes, en om hulle sonder regverdiging te verwyder kan die ontleding bevooroordeeld maak en werklike inligting verberg.',
      checkMode: 'self',
    },

    // ── Vraag 10 Medium — frekwensiepoligoonpunt ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf hoe om ʼn frekwensiepoligoonpunt vir die interval 20≤x<30 met frekwensie 12 te plot.',
      answer: 'plot die punt by (25,12), deur die middelpunt (25) en frekwensie (12) te gebruik',
      checkMode: 'auto',
      correctAnswer: 'plot die punt by (25,12), deur die middelpunt (25) en frekwensie (12) te gebruik',
      explanation: 'Die middelpunt van 20≤x<30 is (20+30)÷2 = 25. Die frekwensie is 12. Plot die punt by koördinate (25, 12) op die grafiek.',
    },

    // ── Vraag 11 Hard — frekwensiepoligone vergelyk ──────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho se frekwensiepoligoon vir een datastel piek hoër as Lerato se poligoon vir ʼn ander datastel, albei op dieselfde asse geplot. Wat dui dit waarskynlik aan?",
      answer: "Dit dui aan dat Sipho se datastel waarskynlik ʼn hoër konsentrasie waardes rondom daardie spesifieke interval het in vergelyking met Lerato se datastel.",
      checkMode: 'self',
    },

    // ── Vraag 12 Maklik — variasiewydte ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die variasiewydte van die datastel 22, 8, 45, 30, 12.',
      answer: '37',
      checkMode: 'auto',
      correctAnswer: '37',
      explanation: 'Variasiewydte = grootste − kleinste = 45 − 8 = 37.',
    },

    // ── Vraag 13 Medium — kwartiele ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal Q1, Q2 en Q3 van die gerangskikte data: 5, 9, 13, 17, 21, 25, 29, 33.',
      answer: 'Q1=11, Q2=19, Q3=27',
      checkMode: 'auto',
      correctAnswer: 'Q1=11, Q2=19, Q3=27',
      correctAnswers: ['Q1=11, Q2=19, Q3=27', 'Q1 = 11, Q2 = 19, Q3 = 27', '11, 19, 27'],
      explanation: 'Q2 (mediaan) = (17+21)÷2 = 19. Onderste helfte 5,9,13,17 → Q1 = (9+13)÷2 = 11. Boonste helfte 21,25,29,33 → Q3 = (25+29)÷2 = 27.',
    },

    // ── Vraag 14 Hard — IKW en wat dit verteenwoordig ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die kwartiele van Vraag 13 om die interkwartielwydte te bepaal en verduidelik wat dit verteenwoordig.',
      answer: 'IKW=27-11=16. Dit verteenwoordig die verspreiding van die middelste 50% van die data, en gee ʼn maatstaf van verspreiding wat minder deur uiterste waardes beïnvloed word as die volle variasiewydte.',
      checkMode: 'self',
    },

    // ── Vraag 15 Hard — mediaan gelyk aan Q2 ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die mediaan is altyd gelyk aan Q2. Is hy korrek? Verduidelik.',
      answer: 'Ja — per definisie is Q2 (die tweede kwartiel) dieselfde as die mediaan, aangesien albei die middelste waarde (50ste persentiel) van ʼn gerangskikte datastel verteenwoordig.',
      checkMode: 'self',
    },

    // ── Vraag 16 Hard — klein IKW relatief tot variasiewydte ──────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Datastel het Q1=20 en Q3=50. Bepaal die interkwartielwydte, en verduidelik dan wat ʼn klein IKW in vergelyking met die volle variasiewydte oor die data sou aandui.',
      answer: 'IKW=50-20=30. ʼn Klein IKW relatief tot die volle variasiewydte dui aan dat die middelste 50% van die data styf saamgroepeer is, met moontlik meer uiterste waardes wat die volle variasiewydte wyer trek, wat op moontlike uitskieters of ʼn skewe verspreiding dui.',
      checkMode: 'self',
    },

    // ── Vraag 17 Hard — benaderde gemiddelde uit gegroepeerde data ───────────
    {
      difficulty: 'Hard',
      question: 'Bepaal die benaderde gemiddelde van gegroepeerde data met intervalle 10≤x<20 (freq 5), 20≤x<30 (freq 9), 30≤x<40 (freq 6), deur middelpunte te gebruik.',
      answer: 'Middelpunte: 15,25,35. Som=(15×5)+(25×9)+(35×6)=75+225+210=510. Totale frekwensie=20. Gemiddelde=510÷20=25.5.',
      checkMode: 'self',
    },

    // ── Vraag 18 Hard — akkuraatheid van sakrekenaar-gemiddelde vir gegroepeerde data
    {
      difficulty: 'Hard',
      question: "Lerato sê ʼn sakrekenaar se gemiddelde-funksie gee die presiese gemiddelde vir gegroepeerde data. Is dit altyd akkuraat? Verduidelik.",
      answer: 'Nee — vir gegroepeerde data verskaf selfs die sakrekenaar slegs ʼn benaderde gemiddelde gebaseer op die middelpunte wat jy invoer, aangesien die presiese individuele waardes binne elke interval onbekend is.',
      checkMode: 'self',
    },

    // ── Vraag 19 Hard — 40ste persentiel in konteks ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle vind dat die 40ste persentiel van ʼn datastel in die interval 25≤x<35 val. Verduidelik wat dit in konteks beteken.',
      answer: 'Dit beteken dat ongeveer 40% van die datawaardes onder die omvang 25≤x<35 val, wat hierdie interval as die ligging aandui waar die 40ste persentielwaarde lê.',
      checkMode: 'self',
    },

    // ── Vraag 20 Hard — variasiewydte teenoor IKW-uitskieterredenasie ────────
    {
      difficulty: 'Hard',
      question: "ʼn Datastel se variasiewydte is 60, maar sy interkwartielwydte is slegs 12. Sipho maak die gevolgtrekking dat daar minstens een uitskieter moet wees. Is sy redenasie geldig? Verduidelik.",
      answer: 'Sy redenasie is redelik maar nie absoluut seker nie — ʼn groot verskil tussen variasiewydte en IKW dui dikwels op uitskieters wat die variasiewydte wyer trek as die styf saamgegroepeerde middelste 50%, maar dit moet steeds ondersoek word deur die werklike datawaardes te bestudeer eerder as om dit outomaties aan te neem.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het statistiek bemeester.' },
      { minScore: 15, message: 'Puik werk!' },
      { minScore: 10, message: 'Goeie poging, gaan deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
