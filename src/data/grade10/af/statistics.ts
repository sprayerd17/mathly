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
          answer: `Benaderde gemiddelde ≈ ${or('16,11')}`,
          steps: [
            `Bepaal die ${or('middelpunt')} van elke ${bl('interval')}: ${bl('0≤x<10')} → ${or('5')}, ${bl('10≤x<20')} → ${or('15')}, ${bl('20≤x<30')} → ${or('25')}.`,
            `Bereken ${or('middelpunt')} × ${gr('frekwensie')} vir elke ${bl('interval')}: (${or('5')} × ${gr('4')}) + (${or('15')} × ${gr('8')}) + (${or('25')} × ${gr('6')}) = 20 + 120 + 150 = <strong>290</strong>.`,
            `Bepaal die totale ${gr('frekwensie')}: ${gr('4')} + ${gr('8')} + ${gr('6')} = ${gr('18')}.`,
            `<strong>Benaderde gemiddelde</strong> = 290 ÷ ${gr('18')} ≈ ${or('16,11')} ✓`,
          ],
        },
      ],

      openQuestions: [],

      videoPlaceholder:
        'Kort video wat wys hoe om die modale interval en benaderde gemiddelde uit ʼn gegroepeerde frekwensietabel te bepaal deur middelpunte en frekwensies te gebruik',
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
          answer: `Die sakrekenaar wys ${gr('≈ 16,11')}, wat die handberekening bevestig`,
          steps: [
            `Voer x-waardes as middelpunte in die <strong>x</strong>-kolom in: 5, 15, 25.`,
            `Voer ooreenstemmende frekwensies in die <strong>FREQ</strong>-kolom in: ${gr('4')}, ${gr('8')}, ${gr('6')}.`,
            `Druk ${bl('[AC]')} en dan ${bl('[SHIFT][1]')} (STAT) om toegang tot statistiese resultate te kry, kies dan ${or('Var')} (veranderlikes) en kies ${gr('x̄')} (x-streep) vir die gemiddelde.`,
            `Die sakrekenaar wys ${gr('≈ 16,11')}, wat die handberekening bevestig ✓`,
          ],
        },
      ],

      openQuestions: [],

      diagramPlaceholder:
        'Skerm-vir-skerm diagram van ʼn sakrekenaar wat die MODE-kieslys met STAT gekies, ʼn 1-VAR data-invoertabel met x- en FREQ-kolomme ingevul, en die finale STAT-resultateskerm met x-streep wys',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="6" width="190" height="28" rx="4" fill="#0f1f3d"/><text x="110" y="17" font-size="8.5" fill="#93c5fd" text-anchor="middle" font-weight="700">MODE</text><text x="46" y="29" font-size="8.5" fill="#e5e7eb" text-anchor="middle">1:COMP</text><text x="110" y="29" font-size="8.5" fill="#fdba74" text-anchor="middle" font-weight="700">2:STAT</text><text x="172" y="29" font-size="8.5" fill="#e5e7eb" text-anchor="middle">3:TABLE</text><line x1="110" y1="34" x2="110" y2="46" stroke="#374151" stroke-width="1.5"/><polygon points="110,50 105,42 115,42" fill="#374151"/><rect x="15" y="52" width="190" height="52" rx="4" fill="#0f1f3d"/><text x="110" y="63" font-size="8.5" fill="#fdba74" text-anchor="middle" font-weight="700">1-VAR:  x    FREQ</text><text x="70" y="77" font-size="8.5" fill="#ffffff" text-anchor="middle">5</text><text x="150" y="77" font-size="8.5" fill="#ffffff" text-anchor="middle">4</text><text x="70" y="89" font-size="8.5" fill="#ffffff" text-anchor="middle">15</text><text x="150" y="89" font-size="8.5" fill="#ffffff" text-anchor="middle">8</text><text x="70" y="101" font-size="8.5" fill="#ffffff" text-anchor="middle">25</text><text x="150" y="101" font-size="8.5" fill="#ffffff" text-anchor="middle">6</text><line x1="110" y1="112" x2="110" y2="124" stroke="#374151" stroke-width="1.5"/><polygon points="110,128 105,120 115,120" fill="#374151"/><rect x="15" y="130" width="190" height="30" rx="4" fill="#0f1f3d"/><text x="110" y="142" font-size="8.5" fill="#fdba74" text-anchor="middle" font-weight="700">STAT → Var</text><text x="110" y="155" font-size="13" fill="#4ade80" text-anchor="middle" font-weight="700">x̄ = 16,11</text></svg>',

      videoPlaceholder:
        'Kort video wat demonstreer hoe om gegroepeerde frekwensiedata in ʼn Casio fx-82-reeks sakrekenaar in STAT 1-VAR-modus in te voer en die gemiddelde af te lees',
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

      openQuestions: [],

      diagramPlaceholder:
        'Getallelyn wat datawaardes 21 tot 25 saam gegroepeer in blou en 99 geïsoleerd ver na regs in rooi wys, met ʼn asbreuk wat ʼn duidelike uitskieter illustreer',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="20" y1="100" x2="115" y2="100" stroke="#374151" stroke-width="1.8"/><line x1="131" y1="100" x2="200" y2="100" stroke="#374151" stroke-width="1.8"/><polygon points="200,100 192,96 192,104" fill="#374151"/><line x1="118" y1="94" x2="124" y2="106" stroke="#374151" stroke-width="1.5"/><line x1="123" y1="94" x2="129" y2="106" stroke="#374151" stroke-width="1.5"/><circle cx="30" cy="86" r="4.5" fill="#2563eb"/><circle cx="51" cy="86" r="4.5" fill="#2563eb"/><circle cx="72" cy="86" r="4.5" fill="#2563eb"/><circle cx="93" cy="86" r="4.5" fill="#2563eb"/><circle cx="114" cy="86" r="4.5" fill="#2563eb"/><text x="30" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">21</text><text x="51" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">22</text><text x="72" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="93" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">24</text><text x="114" y="114" font-size="10" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><circle cx="180" cy="86" r="5.5" fill="#dc2626" stroke="#0f1f3d" stroke-width="1.5"/><text x="180" y="114" font-size="11" fill="#dc2626" font-weight="700" text-anchor="middle">99</text><path d="M114,72 C140,55 160,55 178,74" fill="none" stroke="#dc2626" stroke-width="1.3" stroke-dasharray="3,2"/><text x="150" y="52" font-size="9" fill="#dc2626" font-weight="700" text-anchor="middle">groot gaping → uitskieter</text><text x="70" y="140" font-size="9" fill="#374151" text-anchor="middle">tipiese waardes gegroepeer</text></svg>',

      videoPlaceholder:
        'Kort video wat verduidelik wat ʼn uitskieter is, hoe om een visueel op ʼn getallelyn te herken, en hoe om te besluit of dit ʼn datafout of ʼn egte uiterste waarde is',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — HISTOGRAMME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'histograms',
      title: 'Histogramme',
      icon: '📊',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Histogram</strong> is ʼn staafgrafiek wat gebruik word om <strong>gegroepeerde aaneenlopende data</strong> met gelyke klasintervalle voor te stel. Anders as ʼn gewone staafgrafiek, word die stawe van ʼn histogram <strong>sonder gapings tussen hulle</strong> geteken, omdat die data aaneenlopend is — elke interval vloei direk oor in die volgende langs die getallelyn. Die hoogte van elke staaf wys die <strong>frekwensie</strong> van daardie klasinterval, en die interval met die hoogste staaf word die <strong>modale klas</strong> genoem.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('klasintervalle')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('staafhoogte / frekwensie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('modale klas')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Klasinterval</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke ${bl('staaf')} verteenwoordig een ${bl('klasinterval')} van aaneenlopende data (byvoorbeeld 10≤x<20). Die breedte van elke staaf is dieselfde wanneer intervalle gelyk is.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Staafhoogte = Frekwensie</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${gr('hoogte')} van elke staaf wys hoeveel datawaardes binne daardie ${bl('interval')} val — lees dit direk van die y-as af.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Modale Klas</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die ${bl('klasinterval')} met die ${or('hoogste staaf')} (hoogste ${gr('frekwensie')}) — dit is die modale klas van die histogram.</p>` +
        `</div>` +

        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn histogram te konstrueer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Teken die asse')}</strong> — Merk die x-as met die ${bl('klasintervalle')} (in volgorde, met gelyke breedte) en die y-as met ${gr('frekwensie')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Teken elke staaf')}</strong> — Teken vir elke ${bl('interval')} ʼn staaf waarvan die ${gr('hoogte')} gelyk is aan sy ${gr('frekwensie')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Los geen gapings nie')}</strong> — Omdat die data aaneenlopend is, moet elke staaf die volgende raak — daar is geen spasie tussen opeenvolgende stawe nie, anders as ʼn gewone staafgrafiek vir kategoriese data.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Histogramme en frekwensieveelhoeke</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${gr('Frekwensieveelhoek')} (sien die volgende afdeling) word gewoonlik geteken deur die ${bl('middelpunte')} van die boonste punte van die histogram se stawe met reguit lyne te verbind. Die twee voorstellings gebruik <strong>dieselfde data</strong> — die histogram wys dit as soliede ${bl('stawe')}, die poligoon wys dit as verbindende punte.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Histogram het stawe vir die intervalle 0≤x<10 (frekwensie 4), 10≤x<20 (frekwensie 8), 20≤x<30 (frekwensie 6), 30≤x<40 (frekwensie 2). Beskryf hoe die histogram geteken moet word en gee die modale klas.',
          answer: `Vier rakende stawe met hoogtes ${gr('4, 8, 6, 2')}; die modale klas is ${or('10≤x<20')}`,
          steps: [
            `Teken die x-as met die ${bl('klasintervalle')} in volgorde: ${bl('0≤x<10')}, ${bl('10≤x<20')}, ${bl('20≤x<30')}, ${bl('30≤x<40')}, elk met gelyke breedte.`,
            `Teken die y-as met ${gr('frekwensie')}.`,
            `Teken vier stawe met hoogtes ${gr('4')}, ${gr('8')}, ${gr('6')}, ${gr('2')} onderskeidelik, met <strong>geen gapings</strong> tussen opeenvolgende stawe nie aangesien die data aaneenlopend is.`,
            `Die hoogste staaf is ${bl('10≤x<20')} met ${gr('frekwensie')} ${gr('8')}, dus is die <strong>modale klas</strong> ${or('10≤x<20')}.`,
          ],
        },
        {
          question: 'ʼn Histogram wys vier stawe met hoogtes 5, 9, 11 en 3 vir vier gelyke intervalle. Hoeveel datawaardes verteenwoordig die histogram in totaal?',
          answer: `${gr('28')} datawaardes`,
          steps: [
            `Die totale aantal datawaardes is gelyk aan die som van al die staafhoogtes (frekwensies).`,
            `Totaal = ${gr('5')} + ${gr('9')} + ${gr('11')} + ${gr('3')} = ${gr('28')}.`,
          ],
        },
        {
          question: 'Verduidelik waarom ʼn histogram nie gapings tussen sy stawe kan hê nie, terwyl ʼn staafgrafiek van gunsteling sportsoorte (sokker, netbal, rugby) wel kan.',
          answer: 'ʼn Histogram vertoon aaneenlopende data, waar elke interval naatloos by die volgende aansluit, sodat gapings die data verkeerdelik as afsonderlike, onverwante kategorieë sou voorstel.',
          steps: [
            `ʼn Histogram verteenwoordig ${bl('aaneenlopende numeriese data')} wat in intervalle gegroepeer is — die einde van een interval is presies waar die volgende interval begin (bv. 10≤x<20 word onmiddellik gevolg deur 20≤x<30).`,
            `Omdat daar geen werklike "gaping" op die onderliggende getallelyn tussen intervalle is nie, moet die stawe raak om hierdie kontinuïteit korrek weer te gee.`,
            `ʼn Staafgrafiek van gunsteling sportsoorte vertoon ${bl('diskrete, onverwante kategorieë')} (sokker, netbal, rugby) wat geen numeriese volgorde of kontinuïteit het nie, sodat gapings tussen stawe korrek wys dat die kategorieë afsonderlik is.`,
          ],
        },
      ],

      openQuestions: [],

      diagramPlaceholder:
        'Histogram met vier rakende stawe vir gelyke klasintervalle gemerk op die x-as, staafhoogtes van 4, 8, 6, 2 as frekwensie, met die hoogste staaf uitgelig in oranje as die modale klas, en geen gapings tussen enige van die stawe nie',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="25" y1="140" x2="200" y2="140" stroke="#374151" stroke-width="1.5"/><polygon points="200,140 192,136 192,144" fill="#374151"/><line x1="30" y1="140" x2="30" y2="20" stroke="#374151" stroke-width="1.5"/><polygon points="30,20 26,28 34,28" fill="#374151"/><text x="18" y="18" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">f</text><rect x="30" y="90" width="40" height="50" fill="#16a34a" fill-opacity="0.75" stroke="#0f1f3d" stroke-width="1.5"/><rect x="70" y="40" width="40" height="100" fill="#ea580c" fill-opacity="0.85" stroke="#0f1f3d" stroke-width="1.5"/><rect x="110" y="65" width="40" height="75" fill="#16a34a" fill-opacity="0.75" stroke="#0f1f3d" stroke-width="1.5"/><rect x="150" y="115" width="40" height="25" fill="#16a34a" fill-opacity="0.75" stroke="#0f1f3d" stroke-width="1.5"/><text x="30" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">0</text><text x="70" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="110" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="150" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">30</text><text x="190" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><text x="90" y="32" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">modale klas</text><text x="115" y="165" font-size="9" fill="#374151" text-anchor="middle">stawe raak — deurlopende data</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn histogram uit ʼn gegroepeerde frekwensietabel met gelyke klasintervalle te teken, waarom die stawe moet raak sonder gapings, en hoe om die modale klas van die hoogste staaf te bepaal',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — FREKWENSIEPOLIGONE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'frequency-polygons',
      title: 'Frekwensieveelhoeke',
      icon: '📈',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Frekwensieveelhoek</strong> is ʼn lyngrafiek wat die frekwensie van data binne elke interval wys, geskep deur ʼn punt by die <strong>middelpunt</strong> van elke interval te plot (op die hoogte van sy frekwensie) en opeenvolgende punte met reguit lyne te verbind. Dit is nuttig om die vorm en verspreiding van gegroepeerde data te vergelyk, veral wanneer twee datastelle op dieselfde asse vergelyk word.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('middelpunte')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('frekwensiehoogte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('poligoonlyne')}</span>` +
        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn frekwensieveelhoek te konstrueer</p>` +
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
        `<p style="margin:0;color:#1e3a8a;">Twee frekwensieveelhoeke kan op dieselfde asse in verskillende kleure geteken word, wat dit maklik maak om twee datastelle direk te vergelyk. Histogramme oorvleuel en word moeilik om te lees wanneer hulle oor mekaar geplaas word.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf hoe om ʼn frekwensieveelhoek te konstrueer uit die data: 0≤x<10 (freq 4), 10≤x<20 (freq 8), 20≤x<30 (freq 6).',
          answer: `Punte by (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}) verbind deur ${gr('reguit lyne')}`,
          steps: [
            `Bepaal die ${bl('middelpunt')} van elke interval: ${bl('0≤x<10')} → ${bl('5')}, ${bl('10≤x<20')} → ${bl('15')}, ${bl('20≤x<30')} → ${bl('25')}.`,
            `Plot punte by elke (${bl('middelpunt')}, ${or('frekwensie')}): (${bl('5')}, ${or('4')}), (${bl('15')}, ${or('8')}), (${bl('25')}, ${or('6')}).`,
            `Verbind hierdie punte met ${gr('reguit lyne')} om die poligoon te vorm — sien die diagram hieronder.`,
          ],
        },
        {
          question: 'Lerato wil die Kwartaal 1- en Kwartaal 2-toetstellingverspreidings vergelyk. Hoe sal ʼn frekwensieveelhoek help?',
          answer: 'Twee frekwensieveelhoeke op dieselfde asse maak direkte visuele vergelyking van albei kwartale moontlik',
          steps: [
            `Konstrueer ʼn frekwensieveelhoek vir Kwartaal 1-data deur punte by elke (${bl('middelpunt')}, ${or('frekwensie')}) te plot en dit met ${gr('lyne')} te verbind.`,
            `Konstrueer op <strong>dieselfde asse</strong> ʼn tweede frekwensieveelhoek vir Kwartaal 2-data met ʼn ander kleur.`,
            `Deur albei datastelle as afsonderlike frekwensieveelhoeke op dieselfde asse te plot, kan direk visueel vergelyk word watter kwartaal beter/swakker presteer het en hoe die verspreiding van tellings verskil het.`,
          ],
        },
      ],

      openQuestions: [],

      diagramPlaceholder:
        'Frekwensieveelhoek met die x-as gemerk as intervalmiddelpunte 5, 15, 25 en punte op frekwensiehoogtes 4, 8, 6 verbind deur reguit lyne',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="25" y1="140" x2="200" y2="140" stroke="#374151" stroke-width="1.5"/><polygon points="200,140 192,136 192,144" fill="#374151"/><line x1="30" y1="140" x2="30" y2="20" stroke="#374151" stroke-width="1.5"/><polygon points="30,20 26,28 34,28" fill="#374151"/><text x="18" y="18" font-size="10" fill="#16a34a" font-weight="700" text-anchor="middle">f</text><path d="M50,90 L110,40 L170,65" fill="none" stroke="#16a34a" stroke-width="2.5"/><circle cx="50" cy="90" r="4.5" fill="#ea580c"/><circle cx="110" cy="40" r="4.5" fill="#ea580c"/><circle cx="170" cy="65" r="4.5" fill="#ea580c"/><text x="50" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="110" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="170" y="153" font-size="9" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="58" y="86" font-size="8.5" fill="#ea580c" font-weight="700">4</text><text x="118" y="36" font-size="8.5" fill="#ea580c" font-weight="700">8</text><text x="178" y="61" font-size="8.5" fill="#ea580c" font-weight="700">6</text><text x="115" y="165" font-size="9" fill="#374151" text-anchor="middle">middelpunte verbind deur reguit lyne</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om ʼn frekwensieveelhoek uit ʼn gegroepeerde frekwensietabel te teken deur middelpunt-frekwensie-pare te plot en dit met reguit lyne te verbind',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — STAM-EN-BLAAR-UITSTALLINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'stem-and-leaf-displays',
      title: 'Stam-en-Blaar-uitstallings',
      icon: '🌿',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>Stam-en-blaar-uitstalling</strong> (of stam-en-blaar-diagram) is ʼn manier om numeriese data te organiseer wat elke oorspronklike datawaarde sigbaar hou terwyl dit ook die algehele vorm van die verspreiding wys. Elke datawaarde word verdeel in ʼn <strong>stam</strong> (die voorste syfer of syfers) en ʼn <strong>blaar</strong> (die laaste syfer). Die stamme word een keer in ʼn gerangskikte kolom geskryf, en die blare wat by elke stam hoort word langsaan geskryf, gerangskik van kleinste na grootste.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('stam')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('blaar')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Stam</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die voorste syfer(s) van ʼn datawaarde. Vir die waarde 47 is die ${bl('stam')} ${bl('4')} (wat die tiental verteenwoordig).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Blaar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die laaste syfer van ʼn datawaarde. Vir die waarde 47 is die ${gr('blaar')} ${gr('7')}.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Sleutel/Legende</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Elke stam-en-blaar-diagram het ʼn sleutel nodig, bv. "${bl('4')} | ${gr('7')} = 47", sodat lesers weet hoe om die oorspronklike waardes te herbou.</p>` +
        `</div>` +

        `</div>` +

        // ── Construction steps ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn stam-en-blaar-diagram te konstrueer</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${bl('Lys die stamme')}</strong> — Skryf elke moontlike ${bl('stam')} een keer, in stygende volgorde, in ʼn vertikale kolom.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${gr('Voeg die blare by')}</strong> — Skryf vir elke datawaarde sy ${gr('blaar')}-syfer langs sy ooreenstemmende ${bl('stam')}.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>${or('Rangskik die blare')}</strong> — Herskryf die ${gr('blare')} vir elke ${bl('stam')} in stygende volgorde, van kleinste na grootste.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#64748b;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Voeg ʼn sleutel by</strong> — Sluit ʼn sleutel in soos "${bl('4')} | ${gr('7')} = 47" sodat die diagram korrek gelees kan word.</p>` +
        `</div>` +

        `</div>` +

        // ── Reading measures ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die modus, variasiewydte en mediaan van ʼn stam-en-blaar-diagram aflees</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<ul style="margin:0;padding-left:20px;display:flex;flex-direction:column;gap:8px;font-size:14px;color:#374151;">` +
        `<li><strong>Modus</strong> — die waarde (of waardes) wat die meeste as ʼn blaar teenoor dieselfde stam voorkom.</li>` +
        `<li><strong>Variasiewydte</strong> — herbou die kleinste waarde (eerste stam, eerste blaar) en die grootste waarde (laaste stam, laaste blaar), en trek dan af.</li>` +
        `<li><strong>Mediaan</strong> — aangesien die blare reeds gerangskik is, tel van albei kante af na binne toe langs die diagram (ry vir ry) om die middelste waarde te vind (of die gemiddelde van die twee middelste waardes te bereken).</li>` +
        `</ul>` +
        `</div>` +

        // ── Back-to-back explanation ─────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Rug-aan-rug stam-en-blaar-diagramme</p>` +
        `<p style="margin-bottom:16px;">ʼn <strong>Rug-aan-rug stam-en-blaar-diagram</strong> vergelyk twee datastelle met behulp van ʼn enkele, gedeelde kolom van ${bl('stamme')} in die middel. Die ${gr('blare')} vir een datastel word na die <strong>linkerkant</strong> van die stamme geskryf (gelees van regs na links, toenemend na die stam toe), en die ${gr('blare')} vir die ander datastel word na die <strong>regterkant</strong> geskryf (gelees van links na regs, toenemend weg van die stam af). Dit maak dit maklik om die verspreiding en vorm van twee datastelle langs mekaar te vergelyk.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Voordeel bo gegroepeerde data</p>` +
        `<p style="margin:0;color:#1e3a8a;">Anders as ʼn histogram of frekwensieveelhoek, wat data in intervalle groepeer, hou ʼn stam-en-blaar-diagram elke oorspronklike datawaarde sigbaar. Dit beteken jy kan ʼn presiese modus, mediaan en variasiewydte aflees in plaas van slegs ʼn benaderde modale klas of mediaaninterval.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Konstrueer ʼn stam-en-blaar-diagram vir die datastel: 23, 31, 27, 22, 35, 29, 31, 24.',
          answer: `Stamme ${bl('2')} en ${bl('3')} met gerangskikte ${gr('blare')} — sleutel: ${bl('2')} | ${gr('3')} = 23`,
          steps: [
            `Verdeel elke waarde in ʼn ${bl('stam')} (tiental) en ${gr('blaar')} (eenheid): 23 → ${bl('2')}|${gr('3')}, 31 → ${bl('3')}|${gr('1')}, 27 → ${bl('2')}|${gr('7')}, 22 → ${bl('2')}|${gr('2')}, 35 → ${bl('3')}|${gr('5')}, 29 → ${bl('2')}|${gr('9')}, 31 → ${bl('3')}|${gr('1')}, 24 → ${bl('2')}|${gr('4')}.`,
            `Lys die stamme in volgorde: ${bl('2')}, ${bl('3')}.`,
            `Voeg die blare by elke stam: ${bl('2')} | 3, 7, 2, 9, 4 en ${bl('3')} | 1, 5, 1.`,
            `Rangskik die blare vir elke stam: ${bl('2')} | ${gr('2, 3, 4, 7, 9')} en ${bl('3')} | ${gr('1, 1, 5')}.`,
            `Voeg ʼn sleutel by: ${bl('2')} | ${gr('3')} = 23.`,
          ],
        },
        {
          question: 'Gebruik die stam-en-blaar-diagram van Voorbeeld 1 (2 | 2,3,4,7,9 en 3 | 1,1,5; sleutel 2|3 = 23), bepaal die modus, variasiewydte en mediaan.',
          answer: `Modus = ${gr('31')}, Variasiewydte = ${gr('13')}, Mediaan = ${gr('28')}`,
          steps: [
            `<strong>Modus:</strong> As jy die blare lees, kom ${gr('1')} twee keer voor teenoor stam ${bl('3')} (wat 31 twee keer gee) terwyl elke ander waarde slegs een keer voorkom, dus is die <strong>modus 31</strong>.`,
            `<strong>Variasiewydte:</strong> Die kleinste waarde is ${bl('2')} | ${gr('2')} = 22, en die grootste waarde is ${bl('3')} | ${gr('5')} = 35. Variasiewydte = 35 − 22 = ${gr('13')}.`,
            `<strong>Mediaan:</strong> Daar is 8 waardes in totaal. In volgorde geskryf met behulp van die diagram: 22, 23, 24, 27, 29, 31, 31, 35. Met ʼn ewe getal is die mediaan die gemiddelde van die 4de en 5de waardes: (27 + 29) ÷ 2 = <strong>28</strong>.`,
          ],
        },
        {
          question: "Twee klasse het dieselfde toets geskryf. Klas A: 12, 15, 18, 21, 23, 27. Klas B: 14, 16, 19, 20, 22, 22, 28. Konstrueer ʼn rug-aan-rug stam-en-blaar-diagram wat hulle vergelyk, met ʼn gedeelde stamkolom van tiental-syfers.",
          answer: 'ʼn Rug-aan-rug diagram met Klas A se blare links en Klas B se blare regs van die gedeelde stamme 1 en 2',
          steps: [
            `Verdeel elke Klas A-waarde in stam en blaar: 12 → ${bl('1')}|2, 15 → ${bl('1')}|5, 18 → ${bl('1')}|8, 21 → ${bl('2')}|1, 23 → ${bl('2')}|3, 27 → ${bl('2')}|7.`,
            `Verdeel elke Klas B-waarde in stam en blaar: 14 → ${bl('1')}|4, 16 → ${bl('1')}|6, 19 → ${bl('1')}|9, 20 → ${bl('2')}|0, 22 → ${bl('2')}|2, 22 → ${bl('2')}|2, 28 → ${bl('2')}|8.`,
            `Teken een gedeelde, gerangskikte stamkolom in die middel: ${bl('1')}, ${bl('2')}.`,
            `Skryf Klas A se blare aan die <strong>linkerkant</strong> van elke stam, gerangskik sodat hulle na die stam toe toeneem: stam ${bl('1')} → 8, 5, 2 | stam ${bl('2')} → 7, 3, 1.`,
            `Skryf Klas B se blare aan die <strong>regterkant</strong> van elke stam, gerangskik sodat hulle weg van die stam af toeneem: stam ${bl('1')} → 4, 6, 9 | stam ${bl('2')} → 0, 2, 2, 8.`,
            `Volledige diagram — Klas A | Stam | Klas B: "8,5,2 | ${bl('1')} | 4,6,9" en "7,3,1 | ${bl('2')} | 0,2,2,8". Sleutel: 2|${bl('1')}|4 beteken Klas A = 12 en Klas B = 14.`,
            `As die rye vergelyk word, blyk dit dat Klas B een meer resultaat het (7 teenoor 6) en dat hul tellings oor die algemeen effens hoër en meer versprei aan die boonste kant is (28 teenoor 27), terwyl Klas A se tellings ietwat laer saamgroepeer.`,
          ],
        },
      ],

      openQuestions: [],

      diagramPlaceholder:
        'Rug-aan-rug stam-en-blaar-diagram met ʼn gedeelde sentrale stamkolom, Klas A se blare links en Klas B se blare regs, plus ʼn sleutel wat wys hoe om ʼn waarde te lees',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="60" y="18" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Klas A</text><text x="110" y="18" font-size="10" font-weight="700" fill="#2563eb" text-anchor="middle">Stam</text><text x="160" y="18" font-size="10" font-weight="700" fill="#0f1f3d" text-anchor="middle">Klas B</text><line x1="95" y1="26" x2="95" y2="100" stroke="#d1d5db" stroke-width="1"/><line x1="125" y1="26" x2="125" y2="100" stroke="#d1d5db" stroke-width="1"/><rect x="100" y="34" width="20" height="22" fill="#2563eb"/><text x="110" y="49" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">1</text><rect x="100" y="64" width="20" height="22" fill="#2563eb"/><text x="110" y="79" font-size="11" font-weight="700" fill="#ffffff" text-anchor="middle">2</text><text x="92" y="49" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="end">8  5  2</text><text x="128" y="49" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="start">4  6  9</text><text x="92" y="79" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="end">7  3  1</text><text x="128" y="79" font-size="10.5" font-weight="700" fill="#16a34a" text-anchor="start">0  2  2  8</text><text x="110" y="105" font-size="8" fill="#6b7280" text-anchor="middle">(blare naaste aan die stam = kleinste)</text><text x="110" y="130" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Sleutel: 2 | 1 | 4</text><text x="110" y="144" font-size="8.5" fill="#374151" text-anchor="middle">Klas A = 12,  Klas B = 14</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om datawaardes in stamme en blare te verdeel, ʼn gerangskikte stam-en-blaar-diagram met ʼn sleutel te bou, die modus, variasiewydte en mediaan daarvan af te lees, en ʼn rug-aan-rug stam-en-blaar-diagram te konstrueer wat twee datastelle vergelyk',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 7 — VARIASIEWYDTE, PERSENTIELE, KWARTIELE EN INTERKWARTIELWYDTE
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
          answer: `${bl('Q1')} = ${bl('9')}, ${bl('Q2')} = ${bl('16')}, ${bl('Q3')} = ${bl('23,5')}`,
          steps: [
            `Die data is reeds gerangskik: 4, 8, 10, 14, 18, 22, 25, 30. Daar is 8 waardes.`,
            `${bl('Q2')} (mediaan) = gemiddelde van die 4de en 5de waardes = (14 + 18) ÷ 2 = ${bl('16')}.`,
            `Onderste helfte (waardes onder Q2): 4, 8, 10, 14. ${bl('Q1')} = gemiddelde van 2de en 3de waardes = (8 + 10) ÷ 2 = ${bl('9')}.`,
            `Boonste helfte (waardes bo Q2): 18, 22, 25, 30. ${bl('Q3')} = gemiddelde van 2de en 3de waardes = (22 + 25) ÷ 2 = ${bl('23,5')}.`,
          ],
        },
        {
          question: 'Gebruik Q1 = 9 en Q3 = 23,5 uit Voorbeeld 2 om die interkwartielwydte te bepaal.',
          answer: `${or('IKW')} = ${or('14,5')}`,
          steps: [
            `${or('IKW')} = ${bl('Q3')} − ${bl('Q1')} = ${bl('23,5')} − ${bl('9')} = ${or('14,5')}.`,
            `Dit verteenwoordig die verspreiding van die middelste 50% van die data, onbeïnvloed deur enige uiterste uitskieters.`,
          ],
        },
      ],

      openQuestions: [],

      diagramPlaceholder:
        'Getallelyn wat gerangskikte data met Q1, Q2 en Q3 posisies gemerk wys, die interkwartielwydte in oranje tussen Q1 en Q3 gehaak, en die volle variasiewydte in groen van kleinste tot grootste waarde gehaak',

      diagramSvg:
        '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><line x1="25" y1="110" x2="205" y2="110" stroke="#374151" stroke-width="1.5"/><polygon points="205,110 197,106 197,114" fill="#374151"/><circle cx="51" cy="110" r="4" fill="#2563eb"/><circle cx="78" cy="110" r="4" fill="#2563eb"/><circle cx="115" cy="110" r="4.5" fill="#2563eb"/><circle cx="155" cy="110" r="4" fill="#2563eb"/><circle cx="189" cy="110" r="4" fill="#2563eb"/><text x="51" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">4</text><text x="78" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">Q1=9</text><text x="115" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">Q2=16</text><text x="155" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">Q3=23,5</text><text x="189" y="128" font-size="8.5" fill="#2563eb" font-weight="700" text-anchor="middle">30</text><path d="M78,88 L78,80 L155,80 L155,88" fill="none" stroke="#ea580c" stroke-width="1.6"/><text x="116" y="72" font-size="9" fill="#ea580c" font-weight="700" text-anchor="middle">IKW</text><path d="M51,142 L51,150 L189,150 L189,142" fill="none" stroke="#16a34a" stroke-width="1.6"/><text x="120" y="163" font-size="9" fill="#16a34a" font-weight="700" text-anchor="middle">variasiewydte</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die variasiewydte, Q1, Q2, Q3 en interkwartielwydte uit ʼn gerangskikte datastel te bepaal, en die verskil tussen variasiewydte en IKW verduidelik',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 8 — VYFGETALOPSOMMING EN BOKS-EN-PUNT-DIAGRAMME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'five-number-summary-box-whisker',
      title: 'Vyfgetalopsomming en Mond-en-Snordiagramme',
      icon: '📦',
      explanation:
        `<p style="margin-bottom:16px;">In die vorige afdeling het ons geleer hoe om ${bl('Q1')}, die mediaan en ${bl('Q3')} uit gerangskikte data te bepaal. Saam met die ${bl('minimum')} en ${bl('maksimum')} vorm hierdie vyf waardes die <strong>vyfgetalopsomming</strong>. ʼn <strong>Mond-en-snordiagram</strong> is ʼn manier om hierdie opsomming op ʼn skaal te teken, sodat die verspreiding en posisie van die data op ʼn oogopslag gesien kan word — ʼn boks van ${or('Q1')} tot ${or('Q3')} met ʼn lyn by die ${gr('mediaan')}, en 'punte' wat na die ${bl('minimum')} en ${bl('maksimum')} strek.</p>` +

        // ── Kleursleutel ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('minimum / maksimum')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('Q1 / Q3 (die boks)')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('mediaan')}</span>` +
        `</div>` +

        // ── Die vyf waardes ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vyfgetalopsomming</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">1. Minimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die kleinste waarde nadat die data gerangskik is.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">2. Q1 (Onderkwartiel)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die mediaan van die onderste helfte van die data (waardes onder die mediaan).</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">3. Mediaan (Q2)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die middelste waarde van die hele gerangskikte datastel.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">4. Q3 (Bokwartiel)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die mediaan van die boonste helfte van die data (waardes bo die mediaan).</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">5. Maksimum</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die grootste waarde nadat die data gerangskik is.</p>` +
        `</div>` +

        `</div>` +

        // ── Konstruksiestappe ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Stappe om ʼn mond-en-snordiagram te teken</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Bepaal die vyfgetalopsomming</strong> — rangskik die data, bepaal dan die ${bl('minimum')}, ${or('Q1')}, ${gr('mediaan')}, ${or('Q3')} en ${bl('maksimum')} met die metode uit die vorige afdeling.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#374151;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Teken ʼn skaal</strong> — teken ʼn getallelyn (horisontaal of vertikaal) wat die volle omvang van die data dek, van op of onder die ${bl('minimum')} tot op of bo die ${bl('maksimum')}, met eweredig gespasieerde merke.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Teken die boks</strong> — teken ʼn reghoek (die boks) van ${or('Q1')} tot ${or('Q3')} bo die skaal. Die breedte van hierdie boks is die interkwartielwydte.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">4</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Merk die mediaan</strong> — teken ʼn vertikale lyn binne die boks by die ${gr('mediaan')}, wat die boks in twee verdeel.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">5</span>` +
        `<p style="margin:0;font-size:14px;"><strong>Teken die punte</strong> — teken ʼn reguit lyn van elke kant van die boks na die ${bl('minimum')} en ${bl('maksimum')}. Hierdie lyne is die punte.</p>` +
        `</div>` +

        `</div>` +

        // ── Wenk-blokkie ──────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Die boksbreedte is die IKW</p>` +
        `<p style="margin:0;color:#1e3a8a;">Omdat die boks van ${or('Q1')} tot ${or('Q3')} strek, is sy breedte op die skaal presies die interkwartielwydte (IKW) uit die vorige afdeling. ʼn Wye boks beteken die middelste 50% van die data is versprei; ʼn smal boks beteken dit is styf saamgroepeer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Nege leerders behaal die volgende toetspunte uit 40 in ʼn klastoets: 10, 14, 16, 18, 22, 24, 26, 30, 34. Bepaal die vyfgetalopsomming.',
          answer: `${bl('Min = 10')} &nbsp;|&nbsp; ${or('Q1 = 15')} &nbsp;|&nbsp; ${gr('Mediaan = 22')} &nbsp;|&nbsp; ${or('Q3 = 28')} &nbsp;|&nbsp; ${bl('Maks = 34')}`,
          steps: [
            `Die data is reeds in stygende volgorde: 10, 14, 16, 18, 22, 24, 26, 30, 34. Daar is 9 waardes.`,
            `${bl('Minimum')} = ${bl('10')} (eerste waarde). &nbsp; ${bl('Maksimum')} = ${bl('34')} (laaste waarde).`,
            `${gr('Mediaan (Q2)')} = die middelste (5de) waarde van 9 = ${gr('22')}.`,
            `${or('Onderste helfte')} (waardes onder die mediaan): 10, 14, 16, 18. Q1 = mediaan van hierdie helfte = (14 + 16) ÷ 2 = ${or('15')}.`,
            `${or('Boonste helfte')} (waardes bo die mediaan): 24, 26, 30, 34. Q3 = mediaan van hierdie helfte = (26 + 30) ÷ 2 = ${or('28')}.`,
            `<strong>Vyfgetalopsomming:</strong> ${bl('Min = 10')}, ${or('Q1 = 15')}, ${gr('Mediaan = 22')}, ${or('Q3 = 28')}, ${bl('Maks = 34')}`,
          ],
        },
        {
          question: 'Gebruik die vyfgetalopsomming uit Voorbeeld 1 (Min = 10, Q1 = 15, Mediaan = 22, Q3 = 28, Maks = 34) om stap vir stap ʼn mond-en-snordiagram te teken.',
          answer: 'Die boks strek van 15 tot 28 met ʼn mediaanlyn by 22, en punte strek van 15 af tot by 10 en van 28 af tot by 34 — sien die diagram hieronder.',
          steps: [
            `<strong>Stap 1 — teken ʼn skaal:</strong> teken ʼn getallelyn van onder die ${bl('minimum')} tot bo die ${bl('maksimum')}, byvoorbeeld 0 tot 40, met eweredige spasiëring.`,
            `<strong>Stap 2 — merk die vyf waardes:</strong> dui ${bl('10')}, ${or('15')}, ${gr('22')}, ${or('28')} en ${bl('34')} op die skaal aan.`,
            `<strong>Stap 3 — teken die boks:</strong> teken ʼn reghoek van ${or('Q1 = 15')} tot ${or('Q3 = 28')} bo die skaal — hierdie boks wys die middelste 50% van die punte.`,
            `<strong>Stap 4 — merk die mediaan:</strong> teken ʼn vertikale lyn binne die boks by die ${gr('mediaan = 22')}.`,
            `<strong>Stap 5 — teken die punte:</strong> teken ʼn lyn van die linkerkant van die boks (${or('15')}) na die ${bl('minimum (10)')}, en ʼn lyn van die regterkant van die boks (${or('28')}) na die ${bl('maksimum (34)')}.`,
            `<strong>Voltooide diagram:</strong> die mond-en-snordiagram hieronder wys al vyf waardes in hul korrekte posisies ✓`,
          ],
        },
      ],


      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Datastel het vyfgetalopsomming Min = 2, Q1 = 6, Mediaan = 9, Q3 = 13, Maks = 18. Wat is die interkwartielwydte wat deur die breedte van die boks getoon word?',
          checkMode: 'auto',
          options: ['7', '4', '16', '3'],
          correctIndex: 0,
          explanation: 'IKW = Q3 − Q1 = 13 − 6 = 7. 4 is Q3 − Mediaan, 16 is die volle variasiewydte (Maks − Min), en 3 is Mediaan − Q1.',
        },
        {
          difficulty: 'Easy-Medium',
          question: 'Bepaal die vyfgetalopsomming van hierdie gerangskikte datastel: 6, 9, 11, 14, 17, 20, 23, 26, 29.',
          checkMode: 'auto',
          options: ['Min = 6, Q1 = 11, Mediaan = 17, Q3 = 23, Maks = 29', 'Min = 6, Q1 = 10, Mediaan = 17, Q3 = 24,5, Maks = 29', 'Min = 6, Q1 = 14, Mediaan = 17, Q3 = 20, Maks = 29', 'Min = 6, Q1 = 24,5, Mediaan = 17, Q3 = 10, Maks = 29'],
          correctIndex: 1,
          explanation: 'n=9 (onewe), dus mediaan = 5de waarde = 17. Onderste helfte (sonder mediaan): 6,9,11,14 → Q1=(9+11)÷2=10. Boonste helfte (sonder mediaan): 20,23,26,29 → Q3=(23+26)÷2=24,5. Min=6, Maks=29. (Om die mediaanwaarde self in elke helfte in te sluit, soos in die eerste opsie, is ʼn algemene kwartielposisie-fout.)',
        },
        {
          difficulty: 'Medium',
          question: 'Hierdie datastel is nog nie gerangskik nie: 18, 7, 12, 25, 9, 30, 15, 21, 4. Rangskik dit en bepaal die vyfgetalopsomming.',
          checkMode: 'auto',
          options: ['Min = 4, Q1 = 9, Mediaan = 15, Q3 = 21, Maks = 30', 'Min = 4, Q1 = 8, Mediaan = 12, Q3 = 23, Maks = 30', 'Min = 4, Q1 = 8, Mediaan = 15, Q3 = 23, Maks = 30', 'Min = 4, Q1 = 8, Mediaan = 15, Q3 = 23, Maks = 25'],
          correctIndex: 2,
          explanation: 'Gerangskik: 4,7,9,12,15,18,21,25,30. n=9, mediaan = 5de waarde = 15. Onderste helfte (sonder mediaan): 4,7,9,12 → Q1=(7+9)÷2=8. Boonste helfte (sonder mediaan): 18,21,25,30 → Q3=(21+25)÷2=23. Min=4, Maks=30. (Om die mediaan in elke helfte in te sluit, soos in die eerste opsie, verhoog Q1 en verlaag Q3 kunsmatig.)',
        },
        {
          difficulty: 'Medium',
          question: 'Die mond-en-snordiagram hieronder wys die tye (in minute) wat 9 hardlopers geneem het om ʼn skoffiehardloop te voltooi. Lees die mediaantyd van die diagram af.',
          checkMode: 'auto',
          options: ['23', '31', '18', '27'],
          correctIndex: 3,
          explanation: 'Die lyn binne die boks dui die mediaan aan, wat op 27 op die skaal geteken is. 23 is Q1 (linkerkant van die boks), 31 is Q3 (regterkant van die boks), en 18 is die minimum (linkerpunt-einde).',
          diagramSvg:
            '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><text x="230" y="16" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Mond-en-Snordiagram: Wedlooptye (minute)</text><line x1="40" y1="60" x2="135" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="287" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="43" width="152" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="211" y1="43" x2="211" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135" y1="110" x2="135" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="211" y1="110" x2="211" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="287" y1="110" x2="287" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="135" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="211" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">27</text><text x="287" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">31</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">38</text></svg>',
        },
        {
          difficulty: 'Medium',
          question: 'Gebruik dieselfde mond-en-snordiagram van wedlooptye — wat is die interkwartielwydte (IKW)?',
          checkMode: 'auto',
          options: ['8', '20', '4', '13'],
          correctIndex: 0,
          explanation: 'IKW = Q3 − Q1 = 31 − 23 = 8 minute. 20 is die volle variasiewydte (Maks − Min = 38 − 18), 13 is Q3 − Min (31 − 18), en 4 is die helfte van die korrekte IKW.',
          diagramSvg:
            '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><text x="230" y="16" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Mond-en-Snordiagram: Wedlooptye (minute)</text><line x1="40" y1="60" x2="135" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="287" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="43" width="152" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="211" y1="43" x2="211" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135" y1="110" x2="135" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="211" y1="110" x2="211" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="287" y1="110" x2="287" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="135" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="211" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">27</text><text x="287" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">31</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">38</text></svg>',
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Winkelbestuurder teken die aantal items aan wat deur 9 verkoopsassistente op ʼn dag verkoop is: 14, 8, 22, 11, 19, 25, 9, 17, 30. Bepaal die vyfgetalopsomming.',
          checkMode: 'auto',
          options: ['Min = 8, Q1 = 11, Mediaan = 17, Q3 = 22, Maks = 30', 'Min = 8, Q1 = 10, Mediaan = 17, Q3 = 23,5, Maks = 30', 'Min = 8, Q1 = 10, Mediaan = 14, Q3 = 23,5, Maks = 30', 'Min = 8, Q1 = 23,5, Mediaan = 17, Q3 = 10, Maks = 30'],
          correctIndex: 1,
          explanation: 'Gerangskik: 8,9,11,14,17,19,22,25,30. n=9, mediaan = 5de waarde = 17. Onderste helfte (sonder mediaan): 8,9,11,14 → Q1=(9+11)÷2=10. Boonste helfte (sonder mediaan): 19,22,25,30 → Q3=(22+25)÷2=23,5. Min=8, Maks=30.',
        },
      ],

      diagramSvg:
        '<svg viewBox="0 0 460 155" xmlns="http://www.w3.org/2000/svg"><text x="230" y="16" font-size="13" font-weight="700" fill="#0f1f3d" text-anchor="middle">Mond-en-Snordiagram: Toetspunte (uit 40)</text><text x="40" y="33" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Min</text><text x="119.17" y="33" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Q1</text><text x="230" y="33" font-size="11" font-weight="700" fill="#16a34a" text-anchor="middle">Mediaan</text><text x="325" y="33" font-size="11" font-weight="700" fill="#ea580c" text-anchor="middle">Q3</text><text x="420" y="33" font-size="11" font-weight="700" fill="#2563eb" text-anchor="middle">Maks</text><line x1="40" y1="60" x2="119.17" y2="60" stroke="#2563eb" stroke-width="2.5"/><line x1="325" y1="60" x2="420" y2="60" stroke="#2563eb" stroke-width="2.5"/><line x1="40" y1="43" x2="40" y2="77" stroke="#2563eb" stroke-width="2.5"/><line x1="420" y1="43" x2="420" y2="77" stroke="#2563eb" stroke-width="2.5"/><rect x="119.17" y="43" width="205.83" height="34" fill="#fff7ed" stroke="#ea580c" stroke-width="2.5"/><line x1="230" y1="43" x2="230" y2="77" stroke="#16a34a" stroke-width="3"/><line x1="30" y1="115" x2="430" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="119.17" y1="110" x2="119.17" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="230" y1="110" x2="230" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="325" y1="110" x2="325" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="138" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">10</text><text x="119.17" y="138" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">15</text><text x="230" y="138" font-size="13" font-weight="700" fill="#16a34a" text-anchor="middle">22</text><text x="325" y="138" font-size="13" font-weight="700" fill="#ea580c" text-anchor="middle">28</text><text x="420" y="138" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">34</text><text x="230" y="151" font-size="10" fill="#64748b" text-anchor="middle">Punte uit 40</text></svg>',

      videoPlaceholder:
        'Kort video wat wys hoe om die vyfgetalopsomming te bepaal en stap vir stap ʼn mond-en-snordiagram vir ʼn klein datastel te teken',
    },
  ],

  // ═══════════════════════════════════════════════════════════════════════════
  // OEFENSTELLE — Fase 1 (slegs inhoud, nog geen diagramSvg nie)
  // Elke stel het 20 vrae in 6 herhalende vaardigheidsblokke, Maklik → Medium → Moeilik:
  //   Blok 1 (V1-4)   Gemiddelde/mediaan/modus/variasiewydte uit rou data
  //   Blok 2 (V5-8)   Vyfgetalopsomming en IKW uit gerangskikte data
  //   Blok 3 (V9-12)  Mond-en-snordiagram interpretasie (5-getalopsomming in teks gegee)
  //   Blok 4 (V13-16) Spreidingsdiagram / korrelasie-interpretasie (koördinate in teks gegee)
  //   Blok 5 (V17-18) Uitskieter-effekte op gemiddelde teenoor mediaan
  //   Blok 6 (V19-20) Gekombineerde vergelyking van twee datastelle
  // ═══════════════════════════════════════════════════════════════════════════
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok 1 — Gemiddelde/mediaan/modus/variasiewydte uit rou data (V1-4)
        { difficulty: 'Easy', question: 'ʼn Netbalspan het hierdie punte in 6 wedstryde behaal: 12, 15, 12, 18, 20, 24. Bepaal die gemiddelde telling.', checkMode: 'auto', options: ['16,83', '16,5', '12', '20,2'], correctIndex: 0, explanation: 'Som = 12+15+12+18+20+24 = 101. Gemiddelde = 101÷6 ≈ 16,83. 16,5 is die mediaan (gemiddelde van die twee middelste gerangskikte waardes), 12 is die modus, en 20,2 kom van deling deur 5 in plaas van 6.' },
        { difficulty: 'Easy', question: 'Sewe leerders het die aantal broers en susters wat hulle het aangeteken: 14, 18, 14, 22, 16, 20, 14. Bepaal die modus van hierdie datastel.', checkMode: 'auto', options: ['16', '14', '16,86', '8'], correctIndex: 1, explanation: 'Gerangskik: 14,14,14,16,18,20,22. Die waarde 14 kom drie keer voor — meer as enige ander waarde — dus is dit die modus. 16 is die mediaan, ≈16,86 is die gemiddelde, en 8 is die variasiewydte.' },
        { difficulty: 'Medium', question: 'ʼn Datastel toetspunte (uit 50) is: 23, 19, 27, 31, 25, 29, 21, 33. Bepaal die mediaan.', checkMode: 'auto', options: ['25', '27', '26', '24'], correctIndex: 2, explanation: 'Gerangskik: 19,21,23,25,27,29,31,33 (8 waardes). Mediaan = gemiddelde van die 4de en 5de waardes = (25+27)÷2 = 26. Om net die 4de waarde (25) of net die 5de waarde (27) te neem sonder om te middel, is ʼn algemene fout.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Stel planthoogtes (in cm) is: 4,5, 5,2, 4,8, 5,2, 6,1, 4,5. Bepaal die variasiewydte van hierdie datastel.', checkMode: 'auto', options: ['5,05', '5,0', '4,5', '1,6'], correctIndex: 3, explanation: 'Gerangskik: 4,5, 4,5, 4,8, 5,2, 5,2, 6,1. Variasiewydte = grootste − kleinste = 6,1 − 4,5 = 1,6 cm. 5,05 is die gemiddelde, 5,0 is die mediaan, en 4,5 is een van die twee modusse (hierdie datastel is bimodaal).' },

        // ── Blok 2 — Vyfgetalopsomming en IKW uit gerangskikte data (V5-8) ──
        { difficulty: 'Easy', question: 'ʼn Gerangskikte datastel is: 8, 11, 14, 17, 20, 23, 26, 29. Bepaal Q1 en Q3.', checkMode: 'auto', options: ['Q1 = 12,5, Q3 = 24,5', 'Q1 = 9,5, Q3 = 27,5', 'Q1 = 24,5, Q3 = 12,5', 'Q1 = 14, Q3 = 23'], correctIndex: 0, explanation: 'Onderste helfte: 8,11,14,17 → Q1=(11+14)÷2=12,5. Boonste helfte: 20,23,26,29 → Q3=(23+26)÷2=24,5.' },
        { difficulty: 'Medium', question: 'ʼn Gerangskikte datastel is: 5, 9, 13, 15, 18, 22, 27, 31, 35. Bepaal die interkwartielwydte (IKW).', checkMode: 'auto', options: ['30', '18', '14', '16'], correctIndex: 1, explanation: 'n=9, mediaan (Q2) = 18 (5de waarde). Onderste helfte (sonder mediaan): 5,9,13,15 → Q1=(9+13)÷2=11. Boonste helfte (sonder mediaan): 22,27,31,35 → Q3=(27+31)÷2=29. IKW=29−11=18. 30 is die volle variasiewydte, en 14 kom van die insluiting van die mediaan in elke helfte wanneer Q1 en Q3 bepaal word.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Gerangskikte datastel is: 10, 12, 15, 18, 21, 24, 28, 33, 37, 42. Bepaal die mediaan en die IKW.', checkMode: 'auto', options: ['Mediaan = 21, IKW = 18', 'Mediaan = 22,5, IKW = 22', 'Mediaan = 22,5, IKW = 18', 'Mediaan = 22,5, IKW = 27'], correctIndex: 2, explanation: 'n=10 (ewe), mediaan = (21+24)÷2 = 22,5. Onderste helfte: 10,12,15,18,21 → Q1=15 (middelste waarde). Boonste helfte: 24,28,33,37,42 → Q3=33 (middelste waarde). IKW = 33−15 = 18.' },
        { difficulty: 'Hard', question: 'ʼn Gerangskikte datastel is: 2, 6, 9, 13, 16, 19, 24, 28. Hierdie datastel het ʼn vyfgetalopsomming met Q1 = 7,5 en Q3 = 21,5. ʼn Tweede datastel het dieselfde minimum en maksimum, maar Q1 = 4 en Q3 = 25. Watter datastel se middelste 50% is styfer saamgroepeer?', checkMode: 'auto', options: ['Die tweede datastel (Q1=4, Q3=25)', 'Albei datastelle is ewe saamgroepeer', 'Dit kan nie uit die gegewe inligting bepaal word nie', 'Die eerste datastel (Q1=7,5, Q3=21,5)'], correctIndex: 3, explanation: 'IKW van die eerste datastel = 21,5−7,5=14. IKW van die tweede datastel = 25−4=21. Die kleiner IKW (14) beteken die middelste 50% van die eerste datastel is styfer saamgroepeer.' },

        // ── Blok 3 — Mond-en-snordiagram interpretasie (V9-12) ────────────
        { difficulty: 'Easy', question: 'ʼn Mond-en-snordiagram vir ʼn stel afleweringstye (in minute) het minimum = 5, Q1 = 12, mediaan = 18, Q3 = 25, maksimum = 40. Bepaal die interkwartielwydte wat deur die boks getoon word.', checkMode: 'auto', options: ['13', '35', '7', '6'], correctIndex: 0, explanation: 'IKW = Q3 − Q1 = 25 − 12 = 13 minute. 35 is die volle variasiewydte (maks−min), 7 is Q3−mediaan, en 6 is mediaan−Q1.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="116" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="257.1428571428571" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="116" y="43" width="141.1428571428571" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="181.14285714285714" y1="43" x2="181.14285714285714" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="116" y1="110" x2="116" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="181.14285714285714" y1="110" x2="181.14285714285714" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="257.1428571428571" y1="110" x2="257.1428571428571" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5</text><text x="116" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="181.14285714285714" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">18</text><text x="257.1428571428571" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Mond-en-snordiagram vir ʼn stel wedlooptye het minimum = 10, Q1 = 22, mediaan = 28, Q3 = 34, maksimum = 60. Vergelyk die variasiewydte en die IKW, en gee aan watter een meer deur uiterste waardes beïnvloed word.', checkMode: 'auto', options: ['Variasiewydte = 50, IKW = 12; die IKW word meer deur uiterste waardes beïnvloed aangesien dit die boksbreedte insluit.', 'Variasiewydte = 50, IKW = 12; die variasiewydte word meer deur uiterste waardes beïnvloed aangesien dit slegs van die minimum en maksimum afhang.', 'Variasiewydte = 24, IKW = 12; die variasiewydte word meer deur uiterste waardes beïnvloed.', 'Variasiewydte = 50, IKW = 38; die variasiewydte word meer deur uiterste waardes beïnvloed.'], correctIndex: 1, explanation: 'Variasiewydte = maks−min = 60−10 = 50. IKW = Q3−Q1 = 34−22 = 12. Die variasiewydte word veel meer deur uiterste waardes beïnvloed aangesien dit slegs van die twee mees uiterste datapunte afhang, terwyl die IKW op die middelste 50% gebaseer is en uiterste waardes heeltemal ignoreer.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="131.2" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="222.4" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="131.2" y="43" width="91.20000000000002" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="176.79999999999998" y1="43" x2="176.79999999999998" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="131.2" y1="110" x2="131.2" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="176.79999999999998" y1="110" x2="176.79999999999998" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="222.4" y1="110" x2="222.4" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10</text><text x="131.2" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">22</text><text x="176.79999999999998" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">28</text><text x="222.4" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">34</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">60</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Mond-en-snordiagram vir ʼn stel salarisse het minimum = 20, Q1 = 23, mediaan = 25, Q3 = 38, maksimum = 42. Die regterpunt en die boonste deel van die boks is albei baie langer as die linkerpunt en onderste deel van die boks. Wat dui dit aan oor die vorm van die verspreiding?', checkMode: 'auto', options: ['Die data is na links skeef (negatief skeef).', 'Die data is simmetries, sonder skeefheid.', 'Die data is na regs skeef (positief skeef), aangesien die waardes bo die mediaan baie meer versprei is as daaronder.', 'Daar is nie genoeg inligting om skeefheid te bepaal nie.'], correctIndex: 2, explanation: 'ʼn Lang regterpunt/boks en ʼn kort linkerpunt/boks beteken die hoër waardes is meer versprei — dit is ʼn regse (positiewe) skeefheid.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="91.81818181818181" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="350.90909090909093" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="91.81818181818181" y="43" width="259.0909090909091" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="126.36363636363636" y1="43" x2="126.36363636363636" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="91.81818181818181" y1="110" x2="91.81818181818181" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="126.36363636363636" y1="110" x2="126.36363636363636" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="350.90909090909093" y1="110" x2="350.90909090909093" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="91.81818181818181" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">23</text><text x="126.36363636363636" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="350.90909090909093" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">38</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">42</text></svg>' },
        { difficulty: 'Hard', question: "Twee klasse se toetsuitslae word as mond-en-snordiagramme getoon. Klas A: minimum = 40, Q1 = 55, mediaan = 62, Q3 = 70, maksimum = 85. Klas B: minimum = 35, Q1 = 50, mediaan = 62, Q3 = 78, maksimum = 95. Albei klasse het dieselfde mediaan. Vergelyk watter klas se uitslae meer konsekwent (minder versprei) was, deur die IKW te gebruik.", checkMode: 'auto', options: ["Klas B het meer konsekwente uitslae gehad, aangesien sy IKW (15) kleiner is as Klas A se IKW (28).", "Geen van beide — albei klasse het identiese verspreiding aangesien hulle dieselfde mediaan (62) deel.", "Klas A het meer konsekwente uitslae gehad, maar slegs omdat sy variasiewydte (45) kleiner is as Klas B s'n (60).", "Klas A het meer konsekwente uitslae gehad, aangesien sy IKW (70−55=15) kleiner is as Klas B se IKW (78−50=28)."], correctIndex: 3, explanation: "Klas A se IKW = 70−55=15. Klas B se IKW = 78−50=28. Klas A het die kleiner IKW, dus was sy uitslae meer konsekwent (minder versprei), alhoewel albei klasse dieselfde mediaantelling van 62 deel.", diagramSvg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="165" x2="430" y2="165" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="50" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Klas A</text><line x1="81.66666666666666" y1="45" x2="176.66666666666666" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="271.6666666666667" y1="45" x2="366.6666666666667" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="81.66666666666666" y1="31" x2="81.66666666666666" y2="59" stroke="#0f1f3d" stroke-width="2"/><line x1="366.6666666666667" y1="31" x2="366.6666666666667" y2="59" stroke="#0f1f3d" stroke-width="2"/><rect x="176.66666666666666" y="31" width="95.00000000000003" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="221" y1="31" x2="221" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="110" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Klas B</text><line x1="50" y1="105" x2="145" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="322.3333333333333" y1="105" x2="430" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="91" x2="50" y2="119" stroke="#0f1f3d" stroke-width="2"/><line x1="430" y1="91" x2="430" y2="119" stroke="#0f1f3d" stroke-width="2"/><rect x="145" y="91" width="177.33333333333331" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="221" y1="91" x2="221" y2="119" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="160" x2="50" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">35</text><line x1="81.66666666666666" y1="160" x2="81.66666666666666" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="81.66666666666666" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><line x1="145" y1="160" x2="145" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="145" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">50</text><line x1="176.66666666666666" y1="160" x2="176.66666666666666" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="176.66666666666666" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">55</text><line x1="221" y1="160" x2="221" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="221" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">62</text><line x1="271.6666666666667" y1="160" x2="271.6666666666667" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="271.6666666666667" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70</text><line x1="322.3333333333333" y1="160" x2="322.3333333333333" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="322.3333333333333" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">78</text><line x1="366.6666666666667" y1="160" x2="366.6666666666667" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="366.6666666666667" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">85</text><line x1="430" y1="160" x2="430" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="430" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">95</text></svg>' },

        // ── Blok 4 — Spreidingsdiagram / korrelasie-interpretasie (V13-16) ──
        { difficulty: 'Easy', question: 'ʼn Spreidingsdiagram vergelyk ure studeer en toetstelling vir 7 leerders: (2,20), (4,35), (5,45), (7,60), (8,68), (10,85), (12,95). Soos ure studeer toeneem, neem die toetstelling ook konsekwent toe. Watter tipe korrelasie wys dit?', checkMode: 'auto', options: ['positief', 'negatief', 'geen korrelasie', 'kan nie bepaal word nie'], correctIndex: 0, explanation: 'Albei veranderlikes neem saam toe — soos ure studeer toeneem, neem die toetstelling ook konsekwent toe. Dit is ʼn positiewe korrelasie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure bestudeer</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Toetstelling</text><circle cx="85.71428571428572" cy="191.8181818181818" r="4.5" fill="#2563eb"/><circle cx="121.42857142857143" cy="163.1818181818182" r="4.5" fill="#2563eb"/><circle cx="139.28571428571428" cy="144.09090909090907" r="4.5" fill="#2563eb"/><circle cx="175" cy="115.45454545454547" r="4.5" fill="#2563eb"/><circle cx="192.85714285714286" cy="100.18181818181819" r="4.5" fill="#2563eb"/><circle cx="228.57142857142858" cy="67.72727272727272" r="4.5" fill="#2563eb"/><circle cx="264.2857142857143" cy="48.636363636363626" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Spreidingsdiagram vergelyk bestuurspoed (km/h) en aantal defekte gevind in ʼn fabrieksinspeksie vir 7 masjiene: (1,50), (3,42), (5,33), (6,28), (8,20), (9,15), (11,8). Soos spoed toeneem, neem die aantal defekte gevind konsekwent af. Beskryf die tipe korrelasie en verduidelik wat dit aandui.', checkMode: 'auto', options: ['Dit is ʼn positiewe korrelasie — soos spoed toeneem, neem defekte gevind ook toe.', 'Dit is ʼn negatiewe korrelasie — soos spoed toeneem, neem defekte gevind af, wat aandui dat vinniger inspeksiespoed met minder gevonde defekte geassosieer word.', 'Dit wys geen korrelasie nie, aangesien defekte gevind nie met spoed verband hou nie.', 'Dit is ʼn negatiewe korrelasie, en dit bewys dat vinniger spoed direk minder gevonde defekte veroorsaak.'], correctIndex: 1, explanation: 'Soos een veranderlike (spoed) toeneem, neem die ander (defekte gevind) konsekwent af — dit is ʼn negatiewe korrelasie. Dit dui op ʼn assosiasie tussen vinniger spoed en minder defekte, alhoewel dit (soos met enige korrelasie) nie op sigself bewys dat spoed die afname in defekte direk veroorsaak nie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Spoed (km/h)</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Defekte gevind</text><circle cx="69.23076923076923" cy="48.96551724137933" r="4.5" fill="#2563eb"/><circle cx="107.6923076923077" cy="77.93103448275863" r="4.5" fill="#2563eb"/><circle cx="146.15384615384616" cy="110.51724137931033" r="4.5" fill="#2563eb"/><circle cx="165.3846153846154" cy="128.6206896551724" r="4.5" fill="#2563eb"/><circle cx="203.84615384615387" cy="157.58620689655172" r="4.5" fill="#2563eb"/><circle cx="223.07692307692307" cy="175.68965517241378" r="4.5" fill="#2563eb"/><circle cx="261.53846153846155" cy="201.0344827586207" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Spreidingsdiagram vergelyk 7 leerders se skoengroottes en hul toetspunte: (20,5), (35,9), (15,3), (50,7), (28,6), (42,4), (18,8). Die punte is versprei sonder ʼn stygende of dalende patroon. Wat kan afgelei word oor die verwantskap tussen skoengrootte en toetspunte?', checkMode: 'auto', options: ['positiewe korrelasie', 'negatiewe korrelasie', 'geen korrelasie', 'ʼn sterk korrelasie met onbepaalde rigting'], correctIndex: 2, explanation: 'Die punte wys geen konsekwente stygende of dalende patroon nie, dus is daar geen korrelasie tussen skoengrootte en toetspunte nie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skoengrootte</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Toetspunt</text><circle cx="136.20689655172413" cy="134.54545454545456" r="4.5" fill="#2563eb"/><circle cx="200.86206896551724" cy="58.18181818181816" r="4.5" fill="#2563eb"/><circle cx="114.65517241379311" cy="172.72727272727275" r="4.5" fill="#2563eb"/><circle cx="265.51724137931035" cy="96.36363636363637" r="4.5" fill="#2563eb"/><circle cx="170.68965517241378" cy="115.45454545454547" r="4.5" fill="#2563eb"/><circle cx="231.0344827586207" cy="153.63636363636363" r="4.5" fill="#2563eb"/><circle cx="127.58620689655173" cy="77.27272727272728" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Hard', question: 'ʼn Spreidingsdiagram wys ʼn sterk positiewe korrelasie tussen die aantal ure sonskyn en koeldrankverkope by ʼn winkel, gebaseer op 10 duidelik opwaarts-neigende datapunte. Zanele maak die gevolgtrekking "sonskyn veroorsaak direk dat mense meer koeldrank koop." Verduidelik waarom ʼn sterk positiewe korrelasie op ʼn spreidingsdiagram nie op sigself kousaliteit bewys nie.', checkMode: 'auto', options: ['Zanele is korrek — ʼn sterk positiewe korrelasie op ʼn spreidingsdiagram bewys altyd dat een veranderlike die ander veroorsaak.', 'Die korrelasie is betekenisloos omdat spreidingsdiagramme geen werklike verwantskap kan wys nie.', 'Korrelasie geld slegs vir negatiewe verwantskappe, dus kan hierdie spreidingsdiagram nie kousaliteit in enige rigting wys nie.', 'ʼn Spreidingsdiagram wys slegs dat twee veranderlikes saam verander, nie dat een die ander direk veroorsaak nie — ʼn ander faktor (soos temperatuur) of toeval kan die patroon verklaar, dus vereis kousaliteit verdere ondersoek.'], correctIndex: 3, explanation: 'ʼn Spreidingsdiagram wys assosiasie, nie kousaliteit nie. Daar kan ʼn derde faktor betrokke wees (byvoorbeeld warmer temperature op sonnige dae wat mense dorstiger maak), of die verwantskap kan toevallig wees. Om kousaliteit te bewys vereis ondersoek buite die grafiek self.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="20" x2="92" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="20" x2="144" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="196" y1="20" x2="196" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="248" y1="20" x2="248" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure sonskyn</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Koeldrankverkope</text><circle cx="66" cy="204" r="4.5" fill="#2563eb"/><circle cx="92" cy="188" r="4.5" fill="#2563eb"/><circle cx="112.8" cy="178" r="4.5" fill="#2563eb"/><circle cx="136.2" cy="152" r="4.5" fill="#2563eb"/><circle cx="157" cy="144" r="4.5" fill="#2563eb"/><circle cx="177.8" cy="118" r="4.5" fill="#2563eb"/><circle cx="201.2" cy="102" r="4.5" fill="#2563eb"/><circle cx="222" cy="80" r="4.5" fill="#2563eb"/><circle cx="248" cy="66.00000000000003" r="4.5" fill="#2563eb"/><circle cx="274" cy="42" r="4.5" fill="#2563eb"/></svg>' },

        // ── Blok 5 — Uitskieter-effekte op gemiddelde teenoor mediaan (V17-18)
        { difficulty: 'Medium', question: 'ʼn Stel atlete se tye (in sekondes) is: 52, 55, 58, 54, 56, 110, 53. Bepaal die gemiddelde van hierdie datastel, met die uitskieter ingesluit, afgerond tot 2 desimale plekke.', checkMode: 'auto', options: ['62,57', '54,67', '55', '73'], correctIndex: 0, explanation: 'Som = 52+55+58+54+56+110+53 = 438. Gemiddelde = 438÷7 ≈ 62,57. 54,67 is die gemiddelde met die uitskieter uitgesluit, 55 is die mediaan, en 73 kom van deling deur 6 in plaas van 7.' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde datastel (52, 55, 58, 54, 56, 110, 53), bepaal die mediaan met die uitskieter (110) ingesluit, en die mediaan sonder dit. Verduidelik wat hierdie vergelyking wys oor die effek van ʼn uitskieter op die mediaan.', checkMode: 'auto', options: ['Mediaan met uitskieter = 62,57; mediaan sonder uitskieter = 54,5 — die uitskieter verander die mediaan drasties, net soos dit die gemiddelde verander.', 'Mediaan met uitskieter = 55; mediaan sonder uitskieter = 54,5 — baie naby aan mekaar, wat wys die mediaan word veel minder deur ʼn uitskieter beïnvloed as die gemiddelde, aangesien dit van posisie eerder as grootte afhang.', 'Mediaan met uitskieter = 55; mediaan sonder uitskieter = 54,5 — die uitskieter versteur die mediaan drasties, net soos dit die gemiddelde versteur.', 'Mediaan met uitskieter = 58; mediaan sonder uitskieter = 54,5 — dit wys die mediaan is hoogs sensitief vir uitskieters.'], correctIndex: 1, explanation: 'Gerangskik met uitskieter: 52,53,54,55,56,58,110 → mediaan (4de van 7) = 55. Gerangskik sonder uitskieter: 52,53,54,55,56,58 → mediaan = (54+55)÷2 = 54,5. Die twee mediane is baie na aan mekaar, wat wys die mediaan word veel minder deur ʼn uiterste uitskieter beïnvloed as wat die gemiddelde sou wees, aangesien dit van posisie eerder as grootte afhang.' },

        // ── Blok 6 — Gekombineerde vergelyking van twee datastelle (V19-20) ─
        { difficulty: 'Hard', question: "Twee takke van ʼn winkel teken hul daaglikse verkope (in duisende rand) vir ʼn maand aan. Tak X: gemiddelde = R45 000, IKW = R8 000. Tak Y: gemiddelde = R45 000, IKW = R22 000. Albei takke het dieselfde gemiddelde daaglikse verkope. Verduidelik watter tak meer konsekwente daaglikse verkope het, en waarom die gemiddelde alleen dit nie sou wys nie.", checkMode: 'auto', options: ["Tak Y is meer konsekwent, aangesien sy IKW (R22 000) groter is, wat beteken sy verkope dek ʼn wyer, meer betroubare reeks.", "Albei takke is ewe konsekwent, aangesien hulle dieselfde gemiddelde daaglikse verkope van R45 000 het.", "Tak X is meer konsekwent, aangesien sy IKW (R8 000) baie kleiner is as Tak Y s'n (R22 000); die gemiddelde alleen wys net die gemiddelde en sê niks oor verspreiding nie, dus kan gelyke gemiddeldes baie verskillende veranderlikheid verberg.", "Tak X is meer konsekwent, maar slegs omdat sy gemiddelde (R45 000) laer is as Tak Y s'n."], correctIndex: 2, explanation: "Tak X het meer konsekwente daaglikse verkope, aangesien sy IKW (R8 000) baie kleiner is as Tak Y se IKW (R22 000), wat beteken sy middelste 50% van verkoopwaardes is veel minder versprei. Die gemiddelde alleen wys net die gemiddelde — dit sê niks oor hoe versprei of konsekwent die individuele waardes is nie, dus kan twee datastelle dieselfde gemiddelde deel terwyl hulle baie verskillende vlakke van veranderlikheid het." },
        { difficulty: 'Hard', question: "Twee plase se weeklikse eierproduksie (in dosyne) word met mond-en-snordiagramme vergelyk. Plaas P: minimum = 30, Q1 = 42, mediaan = 50, Q3 = 58, maksimum = 70. Plaas Q: minimum = 20, Q1 = 44, mediaan = 50, Q3 = 56, maksimum = 85. Albei plase het dieselfde mediaanproduksie. Gebruik die variasiewydte en IKW om te verduidelik watter plaas se weeklikse produksie meer voorspelbaar is.", checkMode: 'auto', options: ['Plaas Q is meer voorspelbaar, aangesien dit die kleiner IKW het (12 teenoor 16), en IKW is die enigste relevante maatstaf van voorspelbaarheid.', "Plaas P is meer voorspelbaar bloot omdat dit die kleiner variasiewydte het (40 teenoor 65) — IKW is hier onbelangrik.", 'Albei plase is ewe voorspelbaar, aangesien hulle dieselfde mediaanproduksie van 50 deel.', "Plaas Q het die kleiner IKW (12 teenoor 16), maar Plaas P het geen sulke uiterste hoë of lae weke nie (variasiewydte 40 teenoor Plaas Q se 65), wat Plaas P se produksie meer voorspelbaar week-tot-week oor die algemeen maak."], correctIndex: 3, explanation: "Plaas P se variasiewydte = 70−30=40 en IKW = 58−42=16. Plaas Q se variasiewydte = 85−20=65 en IKW = 56−44=12. Plaas Q het die kleiner IKW, wat beteken sy middelste 50% is effens styfer saamgroepeer, maar sy baie groter variasiewydte (65 teenoor 40) wys meer uiterste hoë en lae weke. Oor die algemeen is Plaas P se produksie meer voorspelbaar week-tot-week aangesien dit geen sulke uiterste afwykende weke het nie, alhoewel sy middelste-50% verspreiding effens wyer is." },
      ],
          scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gemiddelde, mediaan, modus, omvang, IKW en die interpretasie van mond-en-snor-/verspreidingsgrafieke bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die vyfgetal-opsomming of korrelasie na, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor IKW en uitskieter-effekte na, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer, en probeer hierdie stel weer.' },
      ],
},

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok 1 — Gemiddelde/mediaan/modus/variasiewydte uit rou data (V1-4)
        { difficulty: 'Easy', question: 'ʼn Hokkiespan het hierdie doele in 7 wedstryde behaal: 13, 17, 13, 19, 15, 21, 13. Bepaal die gemiddelde telling, afgerond tot 2 desimale plekke.', checkMode: 'auto', options: ['15,86', '15', '13', '18,5'], correctIndex: 0, explanation: 'Som = 13+17+13+19+15+21+13 = 111. Gemiddelde = 111÷7 ≈ 15,86. 15 is die mediaan, 13 is die modus, en 18,5 kom van deling deur 6 in plaas van 7.' },
        { difficulty: 'Easy', question: 'Sewe leerders het die aantal boeke wat hulle hierdie kwartaal gelees het aangeteken: 24, 20, 16, 24, 18, 22, 24. Bepaal die modus van hierdie datastel.', checkMode: 'auto', options: ['22', '24', '21,14', '8'], correctIndex: 1, explanation: 'Gerangskik: 16,18,20,22,24,24,24. Die waarde 24 kom drie keer voor — meer as enige ander waarde — dus is dit die modus. 22 is die mediaan, ≈21,14 is die gemiddelde, en 8 is die variasiewydte.' },
        { difficulty: 'Medium', question: 'ʼn Datastel toetspunte (uit 50) is: 35, 28, 41, 22, 38, 31, 25, 44. Bepaal die mediaan.', checkMode: 'auto', options: ['31', '35', '33', '29,5'], correctIndex: 2, explanation: 'Gerangskik: 22,25,28,31,35,38,41,44 (8 waardes). Mediaan = gemiddelde van die 4de en 5de waardes = (31+35)÷2 = 33. Om net die 4de waarde (31) of net die 5de waarde (35) te neem sonder om te middel, is ʼn algemene fout, en 29,5 kom van die middeling van die verkeerde paar (die 3de en 4de waardes).' },
        { difficulty: 'Medium-Hard', question: 'ʼn Stel planthoogtes (in cm) is: 3,2, 4,1, 3,8, 4,1, 5,0, 3,2. Bepaal die variasiewydte van hierdie datastel.', checkMode: 'auto', options: ['3,9', '3,95', '3,2', '1,8'], correctIndex: 3, explanation: 'Gerangskik: 3,2, 3,2, 3,8, 4,1, 4,1, 5,0. Variasiewydte = grootste − kleinste = 5,0 − 3,2 = 1,8 cm. 3,9 is die gemiddelde, 3,95 is die mediaan, en 3,2 is een van die twee modusse (hierdie datastel is bimodaal).' },

        // ── Blok 2 — Vyfgetalopsomming en IKW uit gerangskikte data (V5-8) ──
        { difficulty: 'Easy', question: 'ʼn Gerangskikte datastel is: 6, 10, 14, 18, 22, 26, 30, 34. Bepaal Q1 en Q3.', checkMode: 'auto', options: ['Q1 = 12, Q3 = 28', 'Q1 = 8, Q3 = 32', 'Q1 = 28, Q3 = 12', 'Q1 = 18, Q3 = 22'], correctIndex: 0, explanation: 'Onderste helfte: 6,10,14,18 → Q1=(10+14)÷2=12. Boonste helfte: 22,26,30,34 → Q3=(26+30)÷2=28. Om die verkeerde paar waardes binne elke helfte te gebruik, gee Q1=8, Q3=32, en om Q1 en Q3 om te ruil gee die derde opsie.' },
        { difficulty: 'Medium', question: 'ʼn Gerangskikte datastel is: 4, 8, 12, 15, 19, 23, 27, 31, 36. Bepaal die interkwartielwydte (IKW).', checkMode: 'auto', options: ['32', '19', '15', '10'], correctIndex: 1, explanation: 'n=9 (onewe), mediaan (Q2) = 19. Onderste helfte (sonder mediaan): 4,8,12,15 → Q1=(8+12)÷2=10. Boonste helfte (sonder mediaan): 23,27,31,36 → Q3=(27+31)÷2=29. IKW=29−10=19. 32 is die volle variasiewydte (36−4), 15 kom van die verkeerdelike insluiting van die mediaan in elke helfte, en 10 is Q1 wat vir die IKW aangesien word.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Gerangskikte datastel is: 9, 13, 16, 20, 24, 27, 31, 35, 40, 45. Bepaal die mediaan en die IKW.', checkMode: 'auto', options: ['Mediaan = 24, IKW = 19', 'Mediaan = 25,5, IKW = 27', 'Mediaan = 25,5, IKW = 19', 'Mediaan = 25,5, IKW = 24'], correctIndex: 2, explanation: 'n=10 (ewe), mediaan = (24+27)÷2 = 25,5. Onderste helfte: 9,13,16,20,24 → Q1=16 (middelste waarde). Boonste helfte: 27,31,35,40,45 → Q3=35 (middelste waarde). IKW = 35−16 = 19. Om net die 5de waarde (24) as die mediaan te neem gee die eerste opsie, en om die verkeerde waardes vir Q1/Q3 te gebruik gee IKW = 27 of 24.' },
        { difficulty: 'Hard', question: 'ʼn Gerangskikte datastel is: 3, 7, 11, 14, 17, 21, 25, 29. Hierdie datastel het ʼn vyfgetalopsomming met Q1 = 9 en Q3 = 23. ʼn Tweede datastel het dieselfde minimum en maksimum, maar Q1 = 5 en Q3 = 27. Watter datastel se middelste 50% is styfer saamgroepeer?', checkMode: 'auto', options: ['Die tweede datastel (Q1=5, Q3=27)', 'Albei datastelle is ewe saamgroepeer', 'Dit kan nie uit die gegewe inligting bepaal word nie', 'Die eerste datastel (Q1=9, Q3=23)'], correctIndex: 3, explanation: 'IKW van die eerste datastel = 23−9=14. IKW van die tweede datastel = 27−5=22. Die kleiner IKW (14) beteken die middelste 50% van die eerste datastel is styfer saamgroepeer.' },

        // ── Blok 3 — Mond-en-snordiagram interpretasie (V9-12) ────────────
        { difficulty: 'Easy', question: 'ʼn Mond-en-snordiagram vir ʼn stel afleweringstye (in minute) het minimum = 8, Q1 = 16, mediaan = 22, Q3 = 29, maksimum = 45. Bepaal die interkwartielwydte wat deur die boks getoon word.', checkMode: 'auto', options: ['13', '37', '7', '6'], correctIndex: 0, explanation: 'IKW = Q3 − Q1 = 29 − 16 = 13 minute. 37 is die volle variasiewydte (maks−min), 7 is Q3−mediaan, en 6 is mediaan−Q1.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="122.16216216216216" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="255.67567567567568" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="122.16216216216216" y="43" width="133.51351351351352" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.7837837837838" y1="43" x2="183.7837837837838" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="122.16216216216216" y1="110" x2="122.16216216216216" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="183.7837837837838" y1="110" x2="183.7837837837838" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="255.67567567567568" y1="110" x2="255.67567567567568" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8</text><text x="122.16216216216216" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">16</text><text x="183.7837837837838" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">22</text><text x="255.67567567567568" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">29</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">45</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Mond-en-snordiagram vir ʼn stel wedlooptye het minimum = 15, Q1 = 28, mediaan = 35, Q3 = 42, maksimum = 68. Vergelyk die variasiewydte en die IKW, en gee aan watter een meer deur uiterste waardes beïnvloed word.', checkMode: 'auto', options: ['Variasiewydte = 53, IKW = 14; die IKW word meer deur uiterste waardes beïnvloed aangesien dit die boksbreedte insluit.', 'Variasiewydte = 53, IKW = 14; die variasiewydte word meer deur uiterste waardes beïnvloed aangesien dit slegs van die minimum en maksimum afhang.', 'Variasiewydte = 27, IKW = 14; die variasiewydte word meer deur uiterste waardes beïnvloed.', 'Variasiewydte = 53, IKW = 40; die variasiewydte word meer deur uiterste waardes beïnvloed.'], correctIndex: 1, explanation: 'Variasiewydte = maks−min = 68−15 = 53. IKW = Q3−Q1 = 42−28 = 14. Die variasiewydte word veel meer deur uiterste waardes beïnvloed aangesien dit slegs van die twee mees uiterste datapunte afhang, terwyl die IKW op die middelste 50% gebaseer is en uiterste waardes heeltemal ignoreer.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="133.20754716981133" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="233.58490566037736" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="133.20754716981133" y="43" width="100.37735849056602" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="183.39622641509436" y1="43" x2="183.39622641509436" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="133.20754716981133" y1="110" x2="133.20754716981133" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="183.39622641509436" y1="110" x2="183.39622641509436" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="233.58490566037736" y1="110" x2="233.58490566037736" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15</text><text x="133.20754716981133" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">28</text><text x="183.39622641509436" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">35</text><text x="233.58490566037736" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">42</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">68</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Mond-en-snordiagram vir ʼn stel salarisse het minimum = 25, Q1 = 29, mediaan = 32, Q3 = 44, maksimum = 50. Die regterpunt en die boonste deel van die boks is albei baie langer as die linkerpunt en onderste deel van die boks. Wat dui dit aan oor die vorm van die verspreiding?', checkMode: 'auto', options: ['Die data is na links skeef (negatief skeef).', 'Die data is simmetries, sonder skeefheid.', 'Die data is na regs skeef (positief skeef), aangesien die waardes bo die mediaan baie meer versprei is as daaronder.', 'Daar is nie genoeg inligting om skeefheid te bepaal nie.'], correctIndex: 2, explanation: 'ʼn Lang regterpunt/boks en ʼn kort linkerpunt/boks beteken die hoër waardes is meer versprei — dit is ʼn regse (positiewe) skeefheid.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="100.80000000000001" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="328.8" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="100.80000000000001" y="43" width="228" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="146.4" y1="43" x2="146.4" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="100.80000000000001" y1="110" x2="100.80000000000001" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="146.4" y1="110" x2="146.4" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="328.8" y1="110" x2="328.8" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">25</text><text x="100.80000000000001" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">29</text><text x="146.4" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">32</text><text x="328.8" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">44</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50</text></svg>' },
        { difficulty: 'Hard', question: "Twee klasse se toetsuitslae word as mond-en-snordiagramme getoon. Klas A: minimum = 45, Q1 = 58, mediaan = 65, Q3 = 73, maksimum = 88. Klas B: minimum = 40, Q1 = 53, mediaan = 65, Q3 = 81, maksimum = 98. Albei klasse het dieselfde mediaan. Vergelyk watter klas se uitslae meer konsekwent (minder versprei) was, deur die IKW te gebruik.", checkMode: 'auto', options: ["Klas B het meer konsekwente uitslae gehad, aangesien sy IKW (15) kleiner is as Klas A se IKW (28).", "Geen van beide — albei klasse het identiese verspreiding aangesien hulle dieselfde mediaan (65) deel.", "Klas A het meer konsekwente uitslae gehad, maar slegs omdat sy variasiewydte (43) kleiner is as Klas B s'n (58).", "Klas A het meer konsekwente uitslae gehad, aangesien sy IKW (73−58=15) kleiner is as Klas B se IKW (81−53=28)."], correctIndex: 3, explanation: "Klas A se IKW = 73−58=15. Klas B se IKW = 81−53=28. Klas A het die kleiner IKW, dus was sy uitslae meer konsekwent (minder versprei), alhoewel albei klasse dieselfde mediaantelling van 65 deel.", diagramSvg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="165" x2="430" y2="165" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="50" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Klas A</text><line x1="82.75862068965517" y1="45" x2="167.9310344827586" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="266.2068965517242" y1="45" x2="364.48275862068965" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="82.75862068965517" y1="31" x2="82.75862068965517" y2="59" stroke="#0f1f3d" stroke-width="2"/><line x1="364.48275862068965" y1="31" x2="364.48275862068965" y2="59" stroke="#0f1f3d" stroke-width="2"/><rect x="167.9310344827586" y="31" width="98.27586206896558" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="31" x2="213.79310344827584" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="110" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Klas B</text><line x1="50" y1="105" x2="135.17241379310343" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="318.6206896551724" y1="105" x2="430" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="91" x2="50" y2="119" stroke="#0f1f3d" stroke-width="2"/><line x1="430" y1="91" x2="430" y2="119" stroke="#0f1f3d" stroke-width="2"/><rect x="135.17241379310343" y="91" width="183.44827586206895" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="91" x2="213.79310344827584" y2="119" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="160" x2="50" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><line x1="82.75862068965517" y1="160" x2="82.75862068965517" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="82.75862068965517" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">45</text><line x1="135.17241379310343" y1="160" x2="135.17241379310343" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="135.17241379310343" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">53</text><line x1="167.9310344827586" y1="160" x2="167.9310344827586" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="167.9310344827586" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">58</text><line x1="213.79310344827584" y1="160" x2="213.79310344827584" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="213.79310344827584" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">65</text><line x1="266.2068965517242" y1="160" x2="266.2068965517242" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="266.2068965517242" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">73</text><line x1="318.6206896551724" y1="160" x2="318.6206896551724" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="318.6206896551724" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">81</text><line x1="364.48275862068965" y1="160" x2="364.48275862068965" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="364.48275862068965" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">88</text><line x1="430" y1="160" x2="430" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="430" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">98</text></svg>' },

        // ── Blok 4 — Spreidingsdiagram / korrelasie-interpretasie (V13-16) ──
        { difficulty: 'Easy', question: 'ʼn Spreidingsdiagram vergelyk ure studeer en toetstelling vir 7 leerders: (3,25), (5,38), (6,48), (8,62), (9,70), (11,88), (13,98). Soos ure studeer toeneem, neem die toetstelling ook konsekwent toe. Watter tipe korrelasie wys dit?', checkMode: 'auto', options: ['positief', 'negatief', 'geen korrelasie', 'kan nie bepaal word nie'], correctIndex: 0, explanation: 'Albei veranderlikes neem saam toe — soos ure studeer toeneem, neem die toetstelling ook konsekwent toe. Dit is ʼn positiewe korrelasie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure bestudeer</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Toetstelling</text><circle cx="100" cy="183.53982300884957" r="4.5" fill="#2563eb"/><circle cx="133.33333333333331" cy="159.38053097345133" r="4.5" fill="#2563eb"/><circle cx="150" cy="140.79646017699116" r="4.5" fill="#2563eb"/><circle cx="183.33333333333334" cy="114.77876106194691" r="4.5" fill="#2563eb"/><circle cx="200" cy="99.91150442477877" r="4.5" fill="#2563eb"/><circle cx="233.33333333333331" cy="66.46017699115043" r="4.5" fill="#2563eb"/><circle cx="266.6666666666667" cy="47.876106194690266" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Spreidingsdiagram vergelyk bestuurspoed (km/h) en aantal defekte gevind in ʼn fabrieksinspeksie vir 7 masjiene: (2,55), (4,47), (6,38), (7,33), (9,25), (10,20), (12,13). Soos spoed toeneem, neem die aantal defekte gevind konsekwent af. Beskryf die tipe korrelasie en verduidelik wat dit aandui.', checkMode: 'auto', options: ['Dit is ʼn positiewe korrelasie — soos spoed toeneem, neem defekte gevind ook toe.', 'Dit is ʼn negatiewe korrelasie — soos spoed toeneem, neem defekte gevind af, wat aandui dat vinniger inspeksiespoed met minder gevonde defekte geassosieer word.', 'Dit wys geen korrelasie nie, aangesien defekte gevind nie met spoed verband hou nie.', 'Dit is ʼn negatiewe korrelasie, en dit bewys dat vinniger spoed direk minder gevonde defekte veroorsaak.'], correctIndex: 1, explanation: 'Soos een veranderlike (spoed) toeneem, neem die ander (defekte gevind) konsekwent af — dit is ʼn negatiewe korrelasie. Dit dui op ʼn assosiasie tussen vinniger spoed en minder defekte, alhoewel dit (soos met enige korrelasie) nie op sigself bewys dat spoed die afname in defekte direk veroorsaak nie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Spoed (km/h)</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Defekte gevind</text><circle cx="85.71428571428572" cy="49.53125" r="4.5" fill="#2563eb"/><circle cx="121.42857142857143" cy="75.78125" r="4.5" fill="#2563eb"/><circle cx="157.14285714285714" cy="105.3125" r="4.5" fill="#2563eb"/><circle cx="175" cy="121.71875" r="4.5" fill="#2563eb"/><circle cx="210.71428571428572" cy="147.96875" r="4.5" fill="#2563eb"/><circle cx="228.57142857142858" cy="164.375" r="4.5" fill="#2563eb"/><circle cx="264.2857142857143" cy="187.34375" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Spreidingsdiagram vergelyk 7 leerders se skoengroottes en hul toetspunte: (22,6), (38,10), (17,4), (53,8), (30,7), (45,5), (20,9). Die punte is versprei sonder ʼn stygende of dalende patroon. Wat kan afgelei word oor die verwantskap tussen skoengrootte en toetspunte?', checkMode: 'auto', options: ['positiewe korrelasie', 'negatiewe korrelasie', 'geen korrelasie', 'ʼn sterk korrelasie met onbepaalde rigting'], correctIndex: 2, explanation: 'Die punte wys geen konsekwente stygende of dalende patroon nie, dus is daar geen korrelasie tussen skoengrootte en toetspunte nie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skoengrootte</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Toetspunt</text><circle cx="140.1639344262295" cy="125" r="4.5" fill="#2563eb"/><circle cx="205.7377049180328" cy="55" r="4.5" fill="#2563eb"/><circle cx="119.67213114754098" cy="160" r="4.5" fill="#2563eb"/><circle cx="267.21311475409834" cy="90" r="4.5" fill="#2563eb"/><circle cx="172.95081967213116" cy="107.49999999999999" r="4.5" fill="#2563eb"/><circle cx="234.42622950819674" cy="142.5" r="4.5" fill="#2563eb"/><circle cx="131.9672131147541" cy="72.5" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Hard', question: 'ʼn Spreidingsdiagram wys ʼn sterk positiewe korrelasie tussen die aantal ure sonskyn en koeldrankverkope by ʼn winkel, gebaseer op 10 duidelik opwaarts-neigende datapunte. Kagiso maak die gevolgtrekking "sonskyn veroorsaak direk dat mense meer koeldrank koop." Verduidelik waarom ʼn sterk positiewe korrelasie op ʼn spreidingsdiagram nie op sigself kousaliteit bewys nie.', checkMode: 'auto', options: ['Kagiso is korrek — ʼn sterk positiewe korrelasie op ʼn spreidingsdiagram bewys altyd dat een veranderlike die ander veroorsaak.', 'Die korrelasie is betekenisloos omdat spreidingsdiagramme geen werklike verwantskap kan wys nie.', 'Korrelasie geld slegs vir negatiewe verwantskappe, dus kan hierdie spreidingsdiagram nie kousaliteit in enige rigting wys nie.', 'ʼn Spreidingsdiagram wys slegs dat twee veranderlikes saam verander, nie dat een die ander direk veroorsaak nie — ʼn ander faktor (soos temperatuur) of toeval kan die patroon verklaar, dus vereis kousaliteit verdere ondersoek.'], correctIndex: 3, explanation: 'ʼn Spreidingsdiagram wys assosiasie, nie kousaliteit nie. Daar kan ʼn derde faktor betrokke wees (byvoorbeeld warmer temperature op sonnige dae wat mense dorstiger maak), of die verwantskap kan toevallig wees. Om kousaliteit te bewys vereis ondersoek buite die grafiek self.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="20" x2="92" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="20" x2="144" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="196" y1="20" x2="196" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="248" y1="20" x2="248" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure sonskyn</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Koeldrankverkope</text><circle cx="66" cy="204" r="4.5" fill="#2563eb"/><circle cx="92" cy="188" r="4.5" fill="#2563eb"/><circle cx="112.8" cy="178" r="4.5" fill="#2563eb"/><circle cx="136.2" cy="152" r="4.5" fill="#2563eb"/><circle cx="157" cy="144" r="4.5" fill="#2563eb"/><circle cx="177.8" cy="118" r="4.5" fill="#2563eb"/><circle cx="201.2" cy="102" r="4.5" fill="#2563eb"/><circle cx="222" cy="80" r="4.5" fill="#2563eb"/><circle cx="248" cy="66.00000000000003" r="4.5" fill="#2563eb"/><circle cx="274" cy="42" r="4.5" fill="#2563eb"/></svg>' },

        // ── Blok 5 — Uitskieter-effekte op gemiddelde teenoor mediaan (V17-18)
        { difficulty: 'Medium', question: 'ʼn Stel atlete se tye (in sekondes) is: 61, 64, 67, 63, 65, 125, 62. Bepaal die gemiddelde van hierdie datastel, met die uitskieter ingesluit, afgerond tot 2 desimale plekke.', checkMode: 'auto', options: ['72,43', '63,67', '64', '84,5'], correctIndex: 0, explanation: 'Som = 61+64+67+63+65+125+62 = 507. Gemiddelde = 507÷7 ≈ 72,43. 63,67 is die gemiddelde met die uitskieter uitgesluit, 64 is die mediaan, en 84,5 kom van deling deur 6 in plaas van 7.' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde datastel (61, 64, 67, 63, 65, 125, 62), bepaal die mediaan met die uitskieter (125) ingesluit, en die mediaan sonder dit. Verduidelik wat hierdie vergelyking wys oor die effek van ʼn uitskieter op die mediaan.', checkMode: 'auto', options: ['Mediaan met uitskieter = 72,43; mediaan sonder uitskieter = 63,5 — die uitskieter verander die mediaan drasties, net soos dit die gemiddelde verander.', 'Mediaan met uitskieter = 64; mediaan sonder uitskieter = 63,5 — baie naby aan mekaar, wat wys die mediaan word veel minder deur ʼn uitskieter beïnvloed as die gemiddelde, aangesien dit van posisie eerder as grootte afhang.', 'Mediaan met uitskieter = 64; mediaan sonder uitskieter = 63,5 — die uitskieter versteur die mediaan drasties, net soos dit die gemiddelde versteur.', 'Mediaan met uitskieter = 67; mediaan sonder uitskieter = 63,5 — dit wys die mediaan is hoogs sensitief vir uitskieters.'], correctIndex: 1, explanation: 'Gerangskik met uitskieter: 61,62,63,64,65,67,125 → mediaan (4de van 7) = 64. Gerangskik sonder uitskieter: 61,62,63,64,65,67 → mediaan = (63+64)÷2 = 63,5. Die twee mediane is baie na aan mekaar, wat wys die mediaan word veel minder deur ʼn uiterste uitskieter beïnvloed as wat die gemiddelde sou wees, aangesien dit van posisie eerder as grootte afhang.' },

        // ── Blok 6 — Gekombineerde vergelyking van twee datastelle (V19-20) ─
        { difficulty: 'Hard', question: "Twee takke van ʼn winkel teken hul daaglikse verkope (in duisende rand) vir ʼn maand aan. Tak X: gemiddelde = R52 000, IKW = R9 000. Tak Y: gemiddelde = R52 000, IKW = R24 000. Albei takke het dieselfde gemiddelde daaglikse verkope. Verduidelik watter tak meer konsekwente daaglikse verkope het, en waarom die gemiddelde alleen dit nie sou wys nie.", checkMode: 'auto', options: ["Tak Y is meer konsekwent, aangesien sy IKW (R24 000) groter is, wat beteken sy verkope dek ʼn wyer, meer betroubare reeks.", "Albei takke is ewe konsekwent, aangesien hulle dieselfde gemiddelde daaglikse verkope van R52 000 het.", "Tak X is meer konsekwent, aangesien sy IKW (R9 000) baie kleiner is as Tak Y s'n (R24 000); die gemiddelde alleen wys net die gemiddelde en sê niks oor verspreiding nie, dus kan gelyke gemiddeldes baie verskillende veranderlikheid verberg.", "Tak X is meer konsekwent, maar slegs omdat sy gemiddelde (R52 000) laer is as Tak Y s'n."], correctIndex: 2, explanation: "Tak X het meer konsekwente daaglikse verkope, aangesien sy IKW (R9 000) baie kleiner is as Tak Y se IKW (R24 000), wat beteken sy middelste 50% van verkoopwaardes is veel minder versprei. Die gemiddelde alleen wys net die gemiddelde — dit sê niks oor hoe versprei of konsekwent die individuele waardes is nie, dus kan twee datastelle dieselfde gemiddelde deel terwyl hulle baie verskillende vlakke van veranderlikheid het." },
        { difficulty: 'Hard', question: "Twee plase se weeklikse eierproduksie (in dosyne) word met mond-en-snordiagramme vergelyk. Plaas P: minimum = 34, Q1 = 46, mediaan = 54, Q3 = 62, maksimum = 74. Plaas Q: minimum = 24, Q1 = 48, mediaan = 54, Q3 = 60, maksimum = 90. Albei plase het dieselfde mediaanproduksie. Gebruik die variasiewydte en IKW om te verduidelik watter plaas se weeklikse produksie meer voorspelbaar is.", checkMode: 'auto', options: ['Plaas Q is meer voorspelbaar, aangesien dit die kleiner IKW het (12 teenoor 16), en IKW is die enigste relevante maatstaf van voorspelbaarheid.', "Plaas P is meer voorspelbaar bloot omdat dit die kleiner variasiewydte het (40 teenoor 66) — IKW is hier onbelangrik.", 'Albei plase is ewe voorspelbaar, aangesien hulle dieselfde mediaanproduksie van 54 deel.', "Plaas Q het die kleiner IKW (12 teenoor 16), maar Plaas P het geen sulke uiterste hoë of lae weke nie (variasiewydte 40 teenoor Plaas Q se 66), wat Plaas P se produksie meer voorspelbaar week-tot-week oor die algemeen maak."], correctIndex: 3, explanation: "Plaas P se variasiewydte = 74−34=40 en IKW = 62−46=16. Plaas Q se variasiewydte = 90−24=66 en IKW = 60−48=12. Plaas Q het die kleiner IKW, wat beteken sy middelste 50% is effens styfer saamgroepeer, maar sy baie groter variasiewydte (66 teenoor 40) wys meer uiterste hoë en lae weke. Oor die algemeen is Plaas P se produksie meer voorspelbaar week-tot-week aangesien dit geen sulke uiterste afwykende weke het nie, alhoewel sy middelste-50% verspreiding effens wyer is." },
      ],
          scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gemiddelde, mediaan, modus, omvang, IKW en die interpretasie van mond-en-snor-/verspreidingsgrafieke bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die vyfgetal-opsomming of korrelasie na, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor IKW en uitskieter-effekte na, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer, en probeer hierdie stel weer.' },
      ],
},

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 V)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok 1 — Gemiddelde/mediaan/modus/variasiewydte uit rou data (V1-4)
        { difficulty: 'Easy', question: 'ʼn Basketbalspan het hierdie punte in 7 wedstryde behaal: 16, 20, 16, 24, 18, 26, 16. Bepaal die gemiddelde telling, afgerond tot 2 desimale plekke.', checkMode: 'auto', options: ['19,43', '18', '16', '22,67'], correctIndex: 0, explanation: 'Som = 16+20+16+24+18+26+16 = 136. Gemiddelde = 136÷7 ≈ 19,43. 18 is die mediaan, 16 is die modus, en 22,67 kom van deling deur 6 in plaas van 7.' },
        { difficulty: 'Easy', question: 'Sewe leerders het die aantal flieks wat hulle hierdie maand gekyk het aangeteken: 30, 26, 22, 30, 24, 28, 30. Bepaal die modus van hierdie datastel.', checkMode: 'auto', options: ['28', '30', '27,14', '8'], correctIndex: 1, explanation: 'Gerangskik: 22,24,26,28,30,30,30. Die waarde 30 kom drie keer voor — meer as enige ander waarde — dus is dit die modus. 28 is die mediaan, ≈27,14 is die gemiddelde, en 8 is die variasiewydte.' },
        { difficulty: 'Medium', question: 'ʼn Datastel toetspunte (uit 60) is: 42, 35, 48, 29, 45, 38, 32, 51. Bepaal die mediaan.', checkMode: 'auto', options: ['38', '42', '40', '36,5'], correctIndex: 2, explanation: 'Gerangskik: 29,32,35,38,42,45,48,51 (8 waardes). Mediaan = gemiddelde van die 4de en 5de waardes = (38+42)÷2 = 40. Om net die 4de waarde (38) of net die 5de waarde (42) te neem sonder om te middel, is ʼn algemene fout, en 36,5 kom van die middeling van die verkeerde paar (die 3de en 4de waardes).' },
        { difficulty: 'Medium-Hard', question: 'ʼn Stel planthoogtes (in cm) is: 6,5, 7,4, 7,1, 7,4, 8,3, 6,5. Bepaal die variasiewydte van hierdie datastel.', checkMode: 'auto', options: ['7,2', '7,25', '6,5', '1,8'], correctIndex: 3, explanation: 'Gerangskik: 6,5, 6,5, 7,1, 7,4, 7,4, 8,3. Variasiewydte = grootste − kleinste = 8,3 − 6,5 = 1,8 cm. 7,2 is die gemiddelde, 7,25 is die mediaan, en 6,5 is een van die twee modusse (hierdie datastel is bimodaal).' },

        // ── Blok 2 — Vyfgetalopsomming en IKW uit gerangskikte data (V5-8) ──
        { difficulty: 'Easy', question: 'ʼn Gerangskikte datastel is: 9, 13, 17, 21, 25, 29, 33, 37. Bepaal Q1 en Q3.', checkMode: 'auto', options: ['Q1 = 15, Q3 = 31', 'Q1 = 11, Q3 = 35', 'Q1 = 31, Q3 = 15', 'Q1 = 21, Q3 = 25'], correctIndex: 0, explanation: 'Onderste helfte: 9,13,17,21 → Q1=(13+17)÷2=15. Boonste helfte: 25,29,33,37 → Q3=(29+33)÷2=31. Om die verkeerde paar waardes binne elke helfte te gebruik, gee Q1=11, Q3=35, en om Q1 en Q3 om te ruil gee die derde opsie.' },
        { difficulty: 'Medium', question: 'ʼn Gerangskikte datastel is: 7, 11, 15, 18, 22, 26, 30, 34, 39. Bepaal die interkwartielwydte (IKW).', checkMode: 'auto', options: ['32', '19', '15', '13'], correctIndex: 1, explanation: 'n=9 (onewe), mediaan (Q2) = 22. Onderste helfte (sonder mediaan): 7,11,15,18 → Q1=(11+15)÷2=13. Boonste helfte (sonder mediaan): 26,30,34,39 → Q3=(30+34)÷2=32. IKW=32−13=19. 32 is die volle variasiewydte (39−7), 15 kom van die verkeerdelike insluiting van die mediaan in elke helfte, en 13 is Q1 wat vir die IKW aangesien word.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Gerangskikte datastel is: 12, 16, 19, 23, 27, 30, 34, 38, 43, 48. Bepaal die mediaan en die IKW.', checkMode: 'auto', options: ['Mediaan = 27, IKW = 19', 'Mediaan = 28,5, IKW = 27', 'Mediaan = 28,5, IKW = 19', 'Mediaan = 28,5, IKW = 24'], correctIndex: 2, explanation: 'n=10 (ewe), mediaan = (27+30)÷2 = 28,5. Onderste helfte: 12,16,19,23,27 → Q1=19 (middelste waarde). Boonste helfte: 30,34,38,43,48 → Q3=38 (middelste waarde). IKW = 38−19 = 19. Om net die 5de waarde (27) as die mediaan te neem gee die eerste opsie, en om die verkeerde waardes vir Q1/Q3 te gebruik gee IKW = 27 of 24.' },
        { difficulty: 'Hard', question: 'ʼn Gerangskikte datastel is: 5, 9, 13, 16, 19, 23, 27, 31. Hierdie datastel het ʼn vyfgetalopsomming met Q1 = 11 en Q3 = 25. ʼn Tweede datastel het dieselfde minimum en maksimum, maar Q1 = 7 en Q3 = 29. Watter datastel se middelste 50% is styfer saamgroepeer?', checkMode: 'auto', options: ['Die tweede datastel (Q1=7, Q3=29)', 'Albei datastelle is ewe saamgroepeer', 'Dit kan nie uit die gegewe inligting bepaal word nie', 'Die eerste datastel (Q1=11, Q3=25)'], correctIndex: 3, explanation: 'IKW van die eerste datastel = 25−11=14. IKW van die tweede datastel = 29−7=22. Die kleiner IKW (14) beteken die middelste 50% van die eerste datastel is styfer saamgroepeer.' },

        // ── Blok 3 — Mond-en-snordiagram interpretasie (V9-12) ────────────
        { difficulty: 'Easy', question: 'ʼn Mond-en-snordiagram vir ʼn stel afleweringstye (in minute) het minimum = 12, Q1 = 20, mediaan = 27, Q3 = 34, maksimum = 50. Bepaal die interkwartielwydte wat deur die boks getoon word.', checkMode: 'auto', options: ['14', '38', '7', '15'], correctIndex: 0, explanation: 'IKW = Q3 − Q1 = 34 − 20 = 14 minute. 38 is die volle variasiewydte (maks−min), 7 is Q3−mediaan, en 15 is mediaan−minimum.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="120" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="260" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="120" y="43" width="140" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="190" y1="43" x2="190" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="120" y1="110" x2="120" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="190" y1="110" x2="190" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="260" y1="110" x2="260" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12</text><text x="120" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="190" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">27</text><text x="260" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">34</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Mond-en-snordiagram vir ʼn stel wedlooptye het minimum = 20, Q1 = 33, mediaan = 40, Q3 = 47, maksimum = 72. Vergelyk die variasiewydte en die IKW, en gee aan watter een meer deur uiterste waardes beïnvloed word.', checkMode: 'auto', options: ['Variasiewydte = 52, IKW = 14; die IKW word meer deur uiterste waardes beïnvloed aangesien dit die boksbreedte insluit.', 'Variasiewydte = 52, IKW = 14; die variasiewydte word meer deur uiterste waardes beïnvloed aangesien dit slegs van die minimum en maksimum afhang.', 'Variasiewydte = 27, IKW = 14; die variasiewydte word meer deur uiterste waardes beïnvloed.', 'Variasiewydte = 52, IKW = 39; die variasiewydte word meer deur uiterste waardes beïnvloed.'], correctIndex: 1, explanation: 'Variasiewydte = maks−min = 72−20 = 52. IKW = Q3−Q1 = 47−33 = 14. Die variasiewydte word veel meer deur uiterste waardes beïnvloed aangesien dit slegs van die twee mees uiterste datapunte afhang, terwyl die IKW op die middelste 50% gebaseer is en uiterste waardes heeltemal ignoreer.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="135" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="237.30769230769232" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="135" y="43" width="102.30769230769232" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="186.15384615384616" y1="43" x2="186.15384615384616" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="135" y1="110" x2="135" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="186.15384615384616" y1="110" x2="186.15384615384616" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="237.30769230769232" y1="110" x2="237.30769230769232" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20</text><text x="135" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">33</text><text x="186.15384615384616" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">40</text><text x="237.30769230769232" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">47</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">72</text></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Mond-en-snordiagram vir ʼn stel salarisse het minimum = 30, Q1 = 34, mediaan = 37, Q3 = 50, maksimum = 55. Die regterpunt en die boonste deel van die boks is albei baie langer as die linkerpunt en onderste deel van die boks. Wat dui dit aan oor die vorm van die verspreiding?', checkMode: 'auto', options: ['Die data is na links skeef (negatief skeef).', 'Die data is simmetries, sonder skeefheid.', 'Die data is na regs skeef (positief skeef), aangesien die waardes bo die mediaan baie meer versprei is as daaronder.', 'Daar is nie genoeg inligting om skeefheid te bepaal nie.'], correctIndex: 2, explanation: 'ʼn Lang regterpunt/boks en ʼn kort linkerpunt/boks beteken die hoër waardes is meer versprei — dit is ʼn regse (positiewe) skeefheid.', diagramSvg: '<svg viewBox="0 0 460 140" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="115" x2="420" y2="115" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="60" x2="100.80000000000001" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="344" y1="60" x2="420" y2="60" stroke="#0f1f3d" stroke-width="2"/><line x1="40" y1="43" x2="40" y2="77" stroke="#0f1f3d" stroke-width="2"/><line x1="420" y1="43" x2="420" y2="77" stroke="#0f1f3d" stroke-width="2"/><rect x="100.80000000000001" y="43" width="243.2" height="34" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="146.4" y1="43" x2="146.4" y2="77" stroke="#0f1f3d" stroke-width="2.5"/><line x1="40" y1="110" x2="40" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="100.80000000000001" y1="110" x2="100.80000000000001" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="146.4" y1="110" x2="146.4" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="344" y1="110" x2="344" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="420" y1="110" x2="420" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><text x="40" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">30</text><text x="100.80000000000001" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">34</text><text x="146.4" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">37</text><text x="344" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">50</text><text x="420" y="135" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">55</text></svg>' },
        { difficulty: 'Hard', question: "Twee klasse se toetsuitslae word as mond-en-snordiagramme getoon. Klas A: minimum = 50, Q1 = 63, mediaan = 70, Q3 = 78, maksimum = 93. Klas B: minimum = 45, Q1 = 58, mediaan = 70, Q3 = 86, maksimum = 103. Albei klasse het dieselfde mediaan. Vergelyk watter klas se uitslae meer konsekwent (minder versprei) was, deur die IKW te gebruik.", checkMode: 'auto', options: ["Klas B het meer konsekwente uitslae gehad, aangesien sy IKW (15) kleiner is as Klas A se IKW (28).", "Geen van beide — albei klasse het identiese verspreiding aangesien hulle dieselfde mediaan (70) deel.", "Klas A het meer konsekwente uitslae gehad, maar slegs omdat sy variasiewydte (43) kleiner is as Klas B s'n (58).", "Klas A het meer konsekwente uitslae gehad, aangesien sy IKW (78−63=15) kleiner is as Klas B se IKW (86−58=28)."], correctIndex: 3, explanation: "Klas A se IKW = 78−63=15. Klas B se IKW = 86−58=28. Klas A het die kleiner IKW, dus was sy uitslae meer konsekwent (minder versprei), alhoewel albei klasse dieselfde mediaantelling van 70 deel.", diagramSvg: '<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="165" x2="430" y2="165" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="50" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Klas A</text><line x1="82.75862068965517" y1="45" x2="167.9310344827586" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="266.2068965517242" y1="45" x2="364.48275862068965" y2="45" stroke="#0f1f3d" stroke-width="2"/><line x1="82.75862068965517" y1="31" x2="82.75862068965517" y2="59" stroke="#0f1f3d" stroke-width="2"/><line x1="364.48275862068965" y1="31" x2="364.48275862068965" y2="59" stroke="#0f1f3d" stroke-width="2"/><rect x="167.9310344827586" y="31" width="98.27586206896558" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="31" x2="213.79310344827584" y2="59" stroke="#0f1f3d" stroke-width="2.5"/><text x="50" y="110" font-size="13" fill="#0f1f3d" font-weight="700" text-anchor="end">Klas B</text><line x1="50" y1="105" x2="135.17241379310343" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="318.6206896551724" y1="105" x2="430" y2="105" stroke="#0f1f3d" stroke-width="2"/><line x1="50" y1="91" x2="50" y2="119" stroke="#0f1f3d" stroke-width="2"/><line x1="430" y1="91" x2="430" y2="119" stroke="#0f1f3d" stroke-width="2"/><rect x="135.17241379310343" y="91" width="183.44827586206895" height="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="213.79310344827584" y1="91" x2="213.79310344827584" y2="119" stroke="#0f1f3d" stroke-width="2.5"/><line x1="50" y1="160" x2="50" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="50" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">45</text><line x1="82.75862068965517" y1="160" x2="82.75862068965517" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="82.75862068965517" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">50</text><line x1="135.17241379310343" y1="160" x2="135.17241379310343" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="135.17241379310343" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">58</text><line x1="167.9310344827586" y1="160" x2="167.9310344827586" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="167.9310344827586" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">63</text><line x1="213.79310344827584" y1="160" x2="213.79310344827584" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="213.79310344827584" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">70</text><line x1="266.2068965517242" y1="160" x2="266.2068965517242" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="266.2068965517242" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">78</text><line x1="318.6206896551724" y1="160" x2="318.6206896551724" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="318.6206896551724" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">86</text><line x1="364.48275862068965" y1="160" x2="364.48275862068965" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="364.48275862068965" y="201" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">93</text><line x1="430" y1="160" x2="430" y2="170" stroke="#0f1f3d" stroke-width="1.5"/><text x="430" y="185" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">103</text></svg>' },

        // ── Blok 4 — Spreidingsdiagram / korrelasie-interpretasie (V13-16) ──
        { difficulty: 'Easy', question: 'ʼn Spreidingsdiagram vergelyk ure studeer en toetstelling vir 7 leerders: (4,30), (6,44), (7,54), (9,68), (10,76), (12,94), (14,104). Soos ure studeer toeneem, neem die toetstelling ook konsekwent toe. Watter tipe korrelasie wys dit?', checkMode: 'auto', options: ['positief', 'negatief', 'geen korrelasie', 'kan nie bepaal word nie'], correctIndex: 0, explanation: 'Albei veranderlikes neem saam toe — soos ure studeer toeneem, neem die toetstelling ook konsekwent toe. Dit is ʼn positiewe korrelasie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="249.99999999999997" y1="20" x2="249.99999999999997" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure bestudeer</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Toetstelling</text><circle cx="108.8235294117647" cy="177.5" r="4.5" fill="#2563eb"/><circle cx="138.23529411764707" cy="153" r="4.5" fill="#2563eb"/><circle cx="152.94117647058823" cy="135.5" r="4.5" fill="#2563eb"/><circle cx="182.35294117647058" cy="111" r="4.5" fill="#2563eb"/><circle cx="197.05882352941177" cy="97" r="4.5" fill="#2563eb"/><circle cx="226.47058823529412" cy="65.5" r="4.5" fill="#2563eb"/><circle cx="255.88235294117646" cy="48" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Spreidingsdiagram vergelyk bestuurspoed (km/h) en aantal defekte gevind in ʼn fabrieksinspeksie vir 7 masjiene: (3,60), (5,52), (7,43), (8,38), (10,30), (11,25), (13,18). Soos spoed toeneem, neem die aantal defekte gevind konsekwent af. Beskryf die tipe korrelasie en verduidelik wat dit aandui.', checkMode: 'auto', options: ['Dit is ʼn positiewe korrelasie — soos spoed toeneem, neem defekte gevind ook toe.', 'Dit is ʼn negatiewe korrelasie — soos spoed toeneem, neem defekte gevind af, wat aandui dat vinniger inspeksiespoed met minder gevonde defekte geassosieer word.', 'Dit wys geen korrelasie nie, aangesien defekte gevind nie met spoed verband hou nie.', 'Dit is ʼn negatiewe korrelasie, en dit bewys dat vinniger spoed direk minder gevonde defekte veroorsaak.'], correctIndex: 1, explanation: 'Soos een veranderlike (spoed) toeneem, neem die ander (defekte gevind) konsekwent af — dit is ʼn negatiewe korrelasie. Dit dui op ʼn assosiasie tussen vinniger spoed en minder defekte, alhoewel dit (soos met enige korrelasie) nie op sigself bewys dat spoed die afname in defekte direk veroorsaak nie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Spoed (km/h)</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Defekte gevind</text><circle cx="100" cy="47.39130434782609" r="4.5" fill="#2563eb"/><circle cx="133.33333333333331" cy="71.7391304347826" r="4.5" fill="#2563eb"/><circle cx="166.66666666666669" cy="99.13043478260869" r="4.5" fill="#2563eb"/><circle cx="183.33333333333334" cy="114.34782608695652" r="4.5" fill="#2563eb"/><circle cx="216.66666666666666" cy="138.69565217391306" r="4.5" fill="#2563eb"/><circle cx="233.33333333333331" cy="153.91304347826087" r="4.5" fill="#2563eb"/><circle cx="266.6666666666667" cy="175.2173913043478" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Medium-Hard', question: 'ʼn Spreidingsdiagram vergelyk 7 leerders se skoengroottes en hul toetspunte: (24,7), (40,11), (19,5), (56,9), (32,8), (48,6), (22,10). Die punte is versprei sonder ʼn stygende of dalende patroon. Wat kan afgelei word oor die verwantskap tussen skoengrootte en toetspunte?', checkMode: 'auto', options: ['positiewe korrelasie', 'negatiewe korrelasie', 'geen korrelasie', 'ʼn sterk korrelasie met onbepaalde rigting'], correctIndex: 2, explanation: 'Die punte wys geen konsekwente stygende of dalende patroon nie, dus is daar geen korrelasie tussen skoengrootte en toetspunte nie.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="50" y1="20" x2="50" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="20" x2="150" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="50" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="175" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Skoengrootte</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Toetspunt</text><circle cx="142.30769230769232" cy="116.92307692307693" r="4.5" fill="#2563eb"/><circle cx="203.84615384615387" cy="52.30769230769232" r="4.5" fill="#2563eb"/><circle cx="123.07692307692308" cy="149.23076923076923" r="4.5" fill="#2563eb"/><circle cx="265.38461538461536" cy="84.61538461538461" r="4.5" fill="#2563eb"/><circle cx="173.0769230769231" cy="100.76923076923077" r="4.5" fill="#2563eb"/><circle cx="234.6153846153846" cy="133.07692307692307" r="4.5" fill="#2563eb"/><circle cx="134.6153846153846" cy="68.46153846153845" r="4.5" fill="#2563eb"/></svg>' },
        { difficulty: 'Hard', question: 'ʼn Spreidingsdiagram wys ʼn sterk positiewe korrelasie tussen die aantal ure sonskyn en koeldrankverkope by ʼn winkel, gebaseer op 10 duidelik opwaarts-neigende datapunte. Amahle maak die gevolgtrekking "sonskyn veroorsaak direk dat mense meer koeldrank koop." Verduidelik waarom ʼn sterk positiewe korrelasie op ʼn spreidingsdiagram nie op sigself kousaliteit bewys nie.', checkMode: 'auto', options: ['Amahle is korrek — ʼn sterk positiewe korrelasie op ʼn spreidingsdiagram bewys altyd dat een veranderlike die ander veroorsaak.', 'Die korrelasie is betekenisloos omdat spreidingsdiagramme geen werklike verwantskap kan wys nie.', 'Korrelasie geld slegs vir negatiewe verwantskappe, dus kan hierdie spreidingsdiagram nie kousaliteit in enige rigting wys nie.', 'ʼn Spreidingsdiagram wys slegs dat twee veranderlikes saam verander, nie dat een die ander direk veroorsaak nie — ʼn ander faktor (soos temperatuur) of toeval kan die patroon verklaar, dus vereis kousaliteit verdere ondersoek.'], correctIndex: 3, explanation: 'ʼn Spreidingsdiagram wys assosiasie, nie kousaliteit nie. Daar kan ʼn derde faktor betrokke wees (byvoorbeeld warmer temperature op sonnige dae wat mense dorstiger maak), of die verwantskap kan toevallig wees. Om kousaliteit te bewys vereis ondersoek buite die grafiek self.', diagramSvg: '<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="92" y1="20" x2="92" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="144" y1="20" x2="144" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="196" y1="20" x2="196" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="248" y1="20" x2="248" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="300" y1="20" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="20" x2="300" y2="20" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="62" x2="300" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="104" x2="300" y2="104" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="146" x2="300" y2="146" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="188" x2="300" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="40" y1="230" x2="300" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="230" stroke="#0f1f3d" stroke-width="1.5"/><text x="170" y="272" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle">Ure sonskyn</text><text x="12" y="125" font-size="12" fill="#0f1f3d" font-weight="700" text-anchor="middle" transform="rotate(-90 12 125)">Koeldrankverkope</text><circle cx="66" cy="204" r="4.5" fill="#2563eb"/><circle cx="92" cy="188" r="4.5" fill="#2563eb"/><circle cx="112.8" cy="178" r="4.5" fill="#2563eb"/><circle cx="136.2" cy="152" r="4.5" fill="#2563eb"/><circle cx="157" cy="144" r="4.5" fill="#2563eb"/><circle cx="177.8" cy="118" r="4.5" fill="#2563eb"/><circle cx="201.2" cy="102" r="4.5" fill="#2563eb"/><circle cx="222" cy="80" r="4.5" fill="#2563eb"/><circle cx="248" cy="66.00000000000003" r="4.5" fill="#2563eb"/><circle cx="274" cy="42" r="4.5" fill="#2563eb"/></svg>' },

        // ── Blok 5 — Uitskieter-effekte op gemiddelde teenoor mediaan (V17-18)
        { difficulty: 'Medium', question: 'ʼn Stel atlete se tye (in sekondes) is: 71, 74, 77, 73, 75, 140, 72. Bepaal die gemiddelde van hierdie datastel, met die uitskieter ingesluit, afgerond tot 2 desimale plekke.', checkMode: 'auto', options: ['83,14', '73,67', '74', '97'], correctIndex: 0, explanation: 'Som = 71+74+77+73+75+140+72 = 582. Gemiddelde = 582÷7 ≈ 83,14. 73,67 is die gemiddelde met die uitskieter uitgesluit, 74 is die mediaan, en 97 kom van deling deur 6 in plaas van 7.' },
        { difficulty: 'Hard', question: 'Gebruik dieselfde datastel (71, 74, 77, 73, 75, 140, 72), bepaal die mediaan met die uitskieter (140) ingesluit, en die mediaan sonder dit. Verduidelik wat hierdie vergelyking wys oor die effek van ʼn uitskieter op die mediaan.', checkMode: 'auto', options: ['Mediaan met uitskieter = 83,14; mediaan sonder uitskieter = 73,5 — die uitskieter verander die mediaan drasties, net soos dit die gemiddelde verander.', 'Mediaan met uitskieter = 74; mediaan sonder uitskieter = 73,5 — baie naby aan mekaar, wat wys die mediaan word veel minder deur ʼn uitskieter beïnvloed as die gemiddelde, aangesien dit van posisie eerder as grootte afhang.', 'Mediaan met uitskieter = 74; mediaan sonder uitskieter = 73,5 — die uitskieter versteur die mediaan drasties, net soos dit die gemiddelde versteur.', 'Mediaan met uitskieter = 77; mediaan sonder uitskieter = 73,5 — dit wys die mediaan is hoogs sensitief vir uitskieters.'], correctIndex: 1, explanation: 'Gerangskik met uitskieter: 71,72,73,74,75,77,140 → mediaan (4de van 7) = 74. Gerangskik sonder uitskieter: 71,72,73,74,75,77 → mediaan = (73+74)÷2 = 73,5. Die twee mediane is baie na aan mekaar, wat wys die mediaan word veel minder deur ʼn uiterste uitskieter beïnvloed as wat die gemiddelde sou wees, aangesien dit van posisie eerder as grootte afhang.' },

        // ── Blok 6 — Gekombineerde vergelyking van twee datastelle (V19-20) ─
        { difficulty: 'Hard', question: "Twee takke van ʼn winkel teken hul daaglikse verkope (in duisende rand) vir ʼn maand aan. Tak X: gemiddelde = R60 000, IKW = R10 000. Tak Y: gemiddelde = R60 000, IKW = R26 000. Albei takke het dieselfde gemiddelde daaglikse verkope. Verduidelik watter tak meer konsekwente daaglikse verkope het, en waarom die gemiddelde alleen dit nie sou wys nie.", checkMode: 'auto', options: ["Tak Y is meer konsekwent, aangesien sy IKW (R26 000) groter is, wat beteken sy verkope dek ʼn wyer, meer betroubare reeks.", "Albei takke is ewe konsekwent, aangesien hulle dieselfde gemiddelde daaglikse verkope van R60 000 het.", "Tak X is meer konsekwent, aangesien sy IKW (R10 000) baie kleiner is as Tak Y s'n (R26 000); die gemiddelde alleen wys net die gemiddelde en sê niks oor verspreiding nie, dus kan gelyke gemiddeldes baie verskillende veranderlikheid verberg.", "Tak X is meer konsekwent, maar slegs omdat sy gemiddelde (R60 000) laer is as Tak Y s'n."], correctIndex: 2, explanation: "Tak X het meer konsekwente daaglikse verkope, aangesien sy IKW (R10 000) baie kleiner is as Tak Y se IKW (R26 000), wat beteken sy middelste 50% van verkoopwaardes is veel minder versprei. Die gemiddelde alleen wys net die gemiddelde — dit sê niks oor hoe versprei of konsekwent die individuele waardes is nie, dus kan twee datastelle dieselfde gemiddelde deel terwyl hulle baie verskillende vlakke van veranderlikheid het." },
        { difficulty: 'Hard', question: "Twee plase se weeklikse eierproduksie (in dosyne) word met mond-en-snordiagramme vergelyk. Plaas P: minimum = 38, Q1 = 50, mediaan = 58, Q3 = 66, maksimum = 78. Plaas Q: minimum = 28, Q1 = 52, mediaan = 58, Q3 = 64, maksimum = 94. Albei plase het dieselfde mediaanproduksie. Gebruik die variasiewydte en IKW om te verduidelik watter plaas se weeklikse produksie meer voorspelbaar is.", checkMode: 'auto', options: ['Plaas Q is meer voorspelbaar, aangesien dit die kleiner IKW het (12 teenoor 16), en IKW is die enigste relevante maatstaf van voorspelbaarheid.', "Plaas P is meer voorspelbaar bloot omdat dit die kleiner variasiewydte het (40 teenoor 66) — IKW is hier onbelangrik.", 'Albei plase is ewe voorspelbaar, aangesien hulle dieselfde mediaanproduksie van 58 deel.', "Plaas Q het die kleiner IKW (12 teenoor 16), maar Plaas P het geen sulke uiterste hoë of lae weke nie (variasiewydte 40 teenoor Plaas Q se 66), wat Plaas P se produksie meer voorspelbaar week-tot-week oor die algemeen maak."], correctIndex: 3, explanation: "Plaas P se variasiewydte = 78−38=40 en IKW = 66−50=16. Plaas Q se variasiewydte = 94−28=66 en IKW = 64−52=12. Plaas Q het die kleiner IKW, wat beteken sy middelste 50% is effens styfer saamgroepeer, maar sy baie groter variasiewydte (66 teenoor 40) wys meer uiterste hoë en lae weke. Oor die algemeen is Plaas P se produksie meer voorspelbaar week-tot-week aangesien dit geen sulke uiterste afwykende weke het nie, alhoewel sy middelste-50% verspreiding effens wyer is." },
      ],
          scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gemiddelde, mediaan, modus, omvang, IKW en die interpretasie van mond-en-snor-/verspreidingsgrafieke bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae oor die vyfgetal-opsomming of korrelasie na, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde oor IKW en uitskieter-effekte na, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk deur die studiegids weer, en probeer hierdie stel weer.' },
      ],
},
  ],

  topicPractice: [
    // ── Vraag 1 Maklik — modale interval ─────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Data het intervalle 0≤x<5 (freq 3), 5≤x<10 (freq 7), 10≤x<15 (freq 2). Identifiseer die modale interval.',
      checkMode: 'auto',
      options: ['5≤x<10', '0≤x<5', '10≤x<15', '0≤x<5 en 5≤x<10 (bimodaal)'],
      correctIndex: 0,
      explanation: 'Die modale interval is dié met die hoogste frekwensie. 5≤x<10 het frekwensie 7, die hoogste van die drie intervalle — 0≤x<5 het frekwensie 3 en 10≤x<15 het frekwensie 2, dus is nie een van dié korrek nie, en daar is geen gelykop vir bimodaal nie.',
    },

    // ── Vraag 2 Medium — benaderde gemiddelde ────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gebruik die data van Vraag 1 (intervalle 0≤x<5 freq 3, 5≤x<10 freq 7, 10≤x<15 freq 2), bepaal die benaderde gemiddelde.',
      checkMode: 'auto',
      options: ['4,58', '7,08', '7,5', '6,46'],
      correctIndex: 1,
      explanation: 'Middelpunte: 2,5, 7,5, 12,5. Σ(middelpunt × freq) = (2,5×3)+(7,5×7)+(12,5×2) = 7,5+52,5+25 = 85. Totale freq = 12. Gemiddelde = 85÷12 ≈ 7,08. 4,58 kom van die gebruik van die interval-eindpunte in plaas van middelpunte, 7,5 is bloot die ongeweegde gemiddelde van die drie middelpunte, en 6,46 kom van die weglating van die eerste term van die som.',
    },

    // ── Vraag 3 Hard — eindpunte teenoor middelpunte ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho bereken die benaderde gemiddelde van gegroepeerde data deur eindpunte in plaas van middelpunte te gebruik. Verduidelik waarom dit verkeerd is.',
      checkMode: 'auto',
      options: ['Dit is nie verkeerd nie — eindpunte en middelpunte gee altyd dieselfde gemiddelde vir gegroepeerde data.', 'Eindpunte is verkeerd omdat hulle altyd die ware gemiddelde oorskat, terwyl middelpunte dit altyd onderskat.', 'Die gebruik van eindpunte verteenwoordig nie die tipiese waarde binne elke interval nie; middelpunte gee ʼn regverdige skatting van waar die meeste datapunte waarskynlik binne daardie omvang val, wat die gemiddelde-berekening akkurater maak.', 'Dit is slegs verkeerd omdat eindpunte moeiliker is om te bereken as middelpunte, nie oor akkuraatheid nie.'],
      correctIndex: 2,
      explanation: 'Eindpunte merk slegs die grens van ʼn interval, nie ʼn tipiese waarde daarbinne nie, dus veroorsaak die gebruik daarvan sistematiese sydigheid. Middelpunte verteenwoordig die beste enkele skatting van waar datawaardes binne elke interval waarskynlik lê. Eindpunte oor- of onderskat nie konsekwent nie, en die probleem is akkuraatheid, nie berekeningsmoeite nie.',
    },

    // ── Vraag 4 Maklik — STAT-modus ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Op ʼn Casio fx-82 sakrekenaar, watter modus moet jy kies om statistiese berekeninge uit te voer?',
      checkMode: 'auto',
      options: ['COMP-modus', 'TABLE-modus', 'EQN-modus', 'STAT (statistiek) modus'],
      correctIndex: 3,
      explanation: 'Jy moet STAT (statistiek) modus kies, gewoonlik verkry deur MODE of MENU te druk en die STAT-opsie te kies. COMP is vir algemene berekeninge, TABLE genereer waardetabelle vir funksies, en EQN los vergelykings op.',
    },

    // ── Vraag 5 Medium — vorige data skoonmaak ──────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato voer data in haar sakrekenaar se STAT-modus in, maar vergeet om eers vorige data skoon te maak. Watter probleem kan dit veroorsaak?',
      checkMode: 'auto',
      options: ['dit kan ou en nuwe data saam meng, wat ʼn verkeerde resultaat gee', 'die sakrekenaar sal outomaties die ou data oorskryf, sodat dit geen effek op die resultaat het nie', 'die sakrekenaar sal ʼn fout vertoon en weier om enigiets te bereken', 'dit affekteer slegs die FREQ-kolom, nie die x-kolom nie, dus bly die gemiddelde korrek'],
      correctIndex: 0,
      explanation: 'Ou data bly in die geheue gestoor en word met die nuwe inskrywings gekombineer, wat alle statistiese resultate soos die gemiddelde verkeerd maak. Die sakrekenaar maak nie outomaties skoon of oorskryf vorige data nie, en dit sal dit ook nie opspoor of weier nie — dit bereken bloot statistiek met al die inskrywings tans gestoor, oud en nuut saam.',
    },

    // ── Vraag 6 Hard — sakrekenaarstappe vir gemiddelde ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Beskryf die algemene sakrekenaarstappe om die gemiddelde van gegroepeerde data wat met middelpunte en frekwensies ingevoer is, te bepaal.',
      checkMode: 'auto',
      options: ['Gaan na COMP-modus, tik die middelpunte geskei deur kommas, en druk dan die =-sleutel om die gemiddelde direk te vertoon.', 'Gaan na STAT-modus, voer slegs die frekwensies in (slaan die x-kolom oor), en lees die gemiddelde van die FREQ-totaal af.', 'Gaan na STAT-modus, kies 1-VAR, voer middelpunte in die x-kolom en frekwensies in die FREQ-kolom in, gaan dan na die Var-kieslys (SHIFT+1) en kies x̄ vir die gemiddelde.', 'Gaan na STAT-modus, kies 1-VAR, voer die interval-eindpunte (nie middelpunte nie) in die x-kolom in, en lees x̄ van die Var-kieslys af.'],
      correctIndex: 2,
      explanation: 'Die korrekte volgorde is: gaan na STAT-modus, kies 1-VAR, tik elke intervalmiddelpunt in die x-kolom in met sy frekwensie in die FREQ-kolom, druk dan SHIFT+1 (STAT), kies Var, en kies x̄ vir die gemiddelde. COMP-modus het geen FREQ-kolomme vir gegroepeerde data nie, om die x-kolom oor te slaan laat geen waardes oor om te middel nie, en om eindpunte in plaas van middelpunte te gebruik gee ʼn onakkurate (bevooroordeelde) gemiddelde.',
    },

    // ── Vraag 7 Maklik — identifiseer uitskieter ─────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Identifiseer die uitskieter in die datastel: 30, 32, 29, 31, 85, 28.',
      checkMode: 'auto',
      options: ['28', '31', '85', 'daar is geen uitskieter in hierdie datastel nie'],
      correctIndex: 2,
      explanation: 'Die meeste waardes groepeer tussen 28 en 32. Die waarde 85 is veel hoër as die res en is duidelik die uitskieter — 28 en 31 is tipiese (nie-uitskieter) waardes binne die groep.',
    },

    // ── Vraag 8 Medium — uitskieterbesluit ───────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Thabo het die datastel 15, 16, 14, 17, 3, 15. Moet 3 as ʼn definitiewe fout beskou word, of verder ondersoek word?',
      checkMode: 'auto',
      options: ['ʼn definitiewe datainvoerfout wat onmiddellik verwyder moet word', 'glad nie ʼn uitskieter nie, aangesien dit slegs een waarde van die res verwyderd is', 'die modus van die datastel, nie ʼn uitskieter nie', 'verder ondersoek word, aangesien dit ʼn egte uiterste waarde of ʼn opnamefout kan wees'],
      correctIndex: 3,
      explanation: 'Alhoewel 3 baie laer is as die ander waardes, kan dit ʼn egte uiterste waarde of ʼn datafout wees. Dit moet in konteks ondersoek word voordat besluit word of dit verwyder moet word — dit kan nie sonder meer as ʼn fout aanvaar word nie, en dit staan duidelik apart van die groepering van 14–17, dus is dit nie "glad nie ʼn uitskieter nie".',
    },

    // ── Vraag 9 Hard — kritiek op uitskieterverwydering ──────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê die verwydering van ʼn uitskieter maak ʼn datastel altyd meer "korrek". Is dit altyd waar? Verduidelik.',
      checkMode: 'auto',
      options: ['Nee — uitskieters moet voor verwydering ondersoek word; sommige uitskieters verteenwoordig egte, belangrike waardes, en om hulle sonder regverdiging te verwyder kan die ontleding bevooroordeeld maak en werklike inligting verberg.', 'Ja — uitskieters is altyd datafoute, dus maak die verwydering daarvan die akkuraatheid altyd beter.', 'Ja — aangesien uitskieters die gemiddelde weg van die mediaan trek, maak die verwydering daarvan altyd albei maatstawwe akkurater.', 'Nee — uitskieters moet nooit onder enige omstandighede verwyder word nie, selfs al is dit bewys as ʼn datainvoerfout.'],
      correctIndex: 0,
      explanation: 'Nie elke uitskieter is ʼn fout nie — sommige is egte, belangrike uiterste waardes, dus kan die verwydering daarvan sonder ondersoek die resultate bevooroordeel en werklike inligting verberg. Terselfdertyd is uitskieters nie altyd foute nie, en moet hulle ook nie onvoorwaardelik altyd behou word nie — konteks en ondersoek moet die besluit rig.',
    },

    // ── Vraag 10 Maklik — modale klas uit histogram ──────────────────────────
    {
      difficulty: 'Easy',
      question: 'ʼn Histogram het stawe vir die intervalle 0≤x<10 (frekwensie 4), 10≤x<20 (frekwensie 9), 20≤x<30 (frekwensie 5). Identifiseer die modale klas.',
      checkMode: 'auto',
      options: ['0≤x<10', '10≤x<20', '20≤x<30', '0≤x<10 en 20≤x<30 (bimodaal)'],
      correctIndex: 1,
      explanation: 'Die modale klas is die klasinterval met die hoogste staaf (hoogste frekwensie). 10≤x<20 het frekwensie 9, die hoogste van die drie, dus is dit die modale klas — daar is geen gelykop nie, dus is dit nie bimodaal nie.',
    },

    // ── Vraag 11 Medium — totale frekwensie uit histogramstawe ──────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Histogram het vier stawe met hoogtes (frekwensies) 6, 10, 8 en 4 vir vier gelyke klasintervalle. Hoeveel datawaardes verteenwoordig die histogram in totaal?',
      checkMode: 'auto',
      options: ['24', '7', '28', '34'],
      correctIndex: 2,
      explanation: 'Die totale aantal datawaardes is gelyk aan die som van al die staafhoogtes: 6+10+8+4 = 28. 24 kom van die weglating van die laaste staaf, 7 is die gemiddelde hoogte (28÷4), en 34 kom van ʼn optelfout.',
    },

    // ── Vraag 12 Hard — waarom histogramstawe geen gapings het nie ──────────
    {
      difficulty: 'Hard',
      question: 'Thabo teken ʼn histogram vir aaneenlopende toetspunt-data, maar los klein gapings tussen die stawe, soos ʼn gewone staafgrafiek. Verduidelik waarom dit verkeerd is.',
      checkMode: 'auto',
      options: ['Dit is nie eintlik verkeerd nie — gapings maak histogramme makliker om te lees en word aanbeveel vir aaneenlopende data.', 'Dit is slegs verkeerd omdat dit spasie op die bladsy mors, nie oor wat die data verteenwoordig nie.', 'Dit is verkeerd omdat histogramstawe altyd verskillende breedtes moet hê, en gapings pla dit.', 'ʼn Histogram verteenwoordig aaneenlopende data waar elke klasinterval direk by die volgende aansluit, dus moet die stawe raak sonder gapings; gapings los suggereer verkeerdelik dat die intervalle afsonderlike, onverwante kategorieë is, soos in ʼn staafgrafiek van diskrete kategorieë.'],
      correctIndex: 3,
      explanation: 'Aaneenlopende data vloei direk van een interval na die volgende, dus moet histogramstawe raak. Gapings suggereer verkeerdelik dat die intervalle afsonderlike, onverwante kategorieë is (soos in ʼn gewone staafgrafiek). Dit gaan oor die korrekte voorstelling van die data, nie leesbaarheid, spasie of staafbreedte nie.',
    },

    // ── Vraag 13 Medium — frekwensieveelhoekpunt ─────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Beskryf hoe om ʼn frekwensieveelhoekpunt vir die interval 20≤x<30 met frekwensie 12 te plot.',
      checkMode: 'auto',
      options: ['(25, 12)', '(20, 12)', '(30, 12)', '(25, 10)'],
      correctIndex: 0,
      explanation: 'Die middelpunt van 20≤x<30 is (20+30)÷2 = 25. Die frekwensie is 12. Plot die punt by koördinate (25, 12) — om die onderste grens (20) of boonste grens (30) in plaas van die middelpunt te gebruik, of die verkeerde frekwensiewaarde, is algemene foute.',
    },

    // ── Vraag 14 Hard — frekwensieveelhoeke vergelyk ──────────────────────────
    {
      difficulty: 'Hard',
      question: "Sipho se frekwensieveelhoek vir een datastel piek hoër as Lerato se poligoon vir ʼn ander datastel, albei op dieselfde asse geplot. Wat dui dit waarskynlik aan?",
      checkMode: 'auto',
      options: ["Dit beteken Sipho se datastel het meer datawaardes in totaal as Lerato s'n, ongeag wat.", "Dit dui aan dat Sipho se datastel waarskynlik ʼn hoër konsentrasie waardes rondom daardie spesifieke interval het in vergelyking met Lerato se datastel.", "Dit beteken Sipho se data het ʼn kleiner omvang as Lerato se data.", "Dit beteken daar is ʼn fout in een van die twee frekwensieveelhoeke, aangesien pieke altyd moet ooreenstem."],
      correctIndex: 1,
      explanation: "ʼn Hoër piek by ʼn gegewe interval beteken meer van Sipho se datawaardes val binne daardie spesifieke interval as Lerato s'n — ʼn hoër plaaslike frekwensie daar, nie noodwendig ʼn groter datastel in totaal nie, en dit sê niks oor omvang of dui op ʼn fout nie.",
    },

    // ── Vraag 15 Maklik — stamme en blare lees ───────────────────────────────
    {
      difficulty: 'Easy',
      question: 'In ʼn stam-en-blaar-diagram het stam 3 blare 1, 1, 4, 8, 9 (sleutel: 3|1 = 31). Lys die werklike datawaardes vir hierdie stam.',
      checkMode: 'auto',
      options: ['31, 34, 38, 39', '3, 3, 4, 8, 9', '31, 31, 34, 38, 39', '3,1, 3,1, 3,4, 3,8, 3,9'],
      correctIndex: 2,
      explanation: 'Elke blaar word by stam 3 (tiental) gevoeg: 3|1=31, 3|1=31, 3|4=34, 3|8=38, 3|9=39, wat 31, 31, 34, 38, 39 gee. Om die herhaalde blaar mis te lees, die stam nie by te voeg nie, of die desimale komma verkeerd te plaas, is algemene foute.',
    },

    // ── Vraag 16 Medium — modus, variasiewydte, mediaan uit ʼn stam-en-blaar-diagram
    {
      difficulty: 'Medium',
      question: 'ʼn Stam-en-blaar-diagram wys: 5 | 1, 4, 4, 8 en 6 | 2, 5, 7, 9 (sleutel: 5|1 = 51). Bepaal die modus, variasiewydte en mediaan van hierdie datastel.',
      checkMode: 'auto',
      options: ['Modus = 54, Variasiewydte = 18, Mediaan = 58', 'Modus = 51, Variasiewydte = 18, Mediaan = 60', 'Modus = 54, Variasiewydte = 8, Mediaan = 60', 'Modus = 54, Variasiewydte = 18, Mediaan = 60'],
      correctIndex: 3,
      explanation: 'Data in volgorde: 51, 54, 54, 58, 62, 65, 67, 69 (8 waardes). Modus = 54 (kom twee keer voor). Variasiewydte = 69−51 = 18. Mediaan = gemiddelde van 4de en 5de waardes = (58+62)÷2 = 60. Om net die 4de waarde (58) as die mediaan te neem, die eerste datawaarde (51) vir die modus aan te sien, of net die blaardigits (in plaas van die volle datawaardes) vir die variasiewydte af te trek, is algemene foute.',
    },

    // ── Vraag 17 Hard — rug-aan-rug stam-en-blaar-vergelyking ────────────────
    {
      difficulty: 'Hard',
      question: "ʼn Rug-aan-rug stam-en-blaar-diagram vergelyk Klas A en Klas B se toetstellings met gedeelde stamme 4 en 5: Klas A '8,5,2 | 4 | 0,4,6' en '7,3,1 | 5 | 2,5,5,9' vir Klas B (sleutel: 2|4|0 beteken Klas A=42, Klas B=40). Vergelyk die twee klasse se prestasie.",
      checkMode: 'auto',
      options: ["Klas A het 6 tellings (42,45,48,51,53,57) en Klas B het 7 tellings (40,44,46,52,55,55,59); Klas B het ʼn effens hoër maksimum (59 teenoor 57) en meer tellings in die 50s, wat aandui dat Klas B oor die algemeen effens beter presteer het, alhoewel albei klasse ʼn soortgelyke omvang dek.", "Klas A het 7 tellings en Klas B het 6; Klas A het duidelik beter presteer as Klas B aangesien dit meer tellings in totaal het.", "Albei klasse het presies dieselfde stel tellings, net in ʼn ander volgorde aan weerskante van die stam geskryf.", "Klas A het veel beter presteer as Klas B, aangesien Klas A se maksimum telling (57) hoër is as Klas B se minimum telling (40)."],
      correctIndex: 0,
      explanation: "Deur die stamme af te lees: Klas A = 42,45,48,51,53,57 (6 tellings) en Klas B = 40,44,46,52,55,55,59 (7 tellings). Klas B bereik ʼn effens hoër maksimum (59 teenoor 57) en het meer tellings in die 50s, wat op ʼn effens beter algehele prestasie dui, alhoewel die twee klasse ʼn breedweg soortgelyke omvang dek. Die aantal tellings is nie gelyk nie, die werklike waardes verskil tussen die klasse (nie net hul volgorde nie), en om ʼn maksimum met ʼn minimum te vergelyk, vergelyk nie prestasie regverdig nie.",
    },

    // ── Vraag 18 Maklik — variasiewydte ───────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Bepaal die variasiewydte van die datastel 22, 8, 45, 30, 12.',
      checkMode: 'auto',
      options: ['45', '37', '8', '33'],
      correctIndex: 1,
      explanation: 'Variasiewydte = grootste − kleinste = 45 − 8 = 37. 45 is bloot die maksimum, 8 is bloot die minimum, en 33 kom van die gebruik van die verkeerde minimum (12 in plaas van 8).',
    },

    // ── Vraag 19 Medium — kwartiele ───────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Bepaal Q1, Q2 en Q3 van die gerangskikte data: 5, 9, 13, 17, 21, 25, 29, 33.',
      checkMode: 'auto',
      options: ['Q1=27, Q2=19, Q3=11', 'Q1=7, Q2=19, Q3=31', 'Q1=11, Q2=19, Q3=27', 'Q1=17, Q2=19, Q3=21'],
      correctIndex: 2,
      explanation: 'Q2 (mediaan) = (17+21)÷2 = 19. Onderste helfte 5,9,13,17 → Q1=(9+13)÷2=11. Boonste helfte 21,25,29,33 → Q3=(25+29)÷2=27. Om Q1 en Q3 om te ruil, die verkeerde paar binne elke helfte te gebruik, of die randwaardes van elke helfte sonder middeling te kies, is algemene foute.',
    },

    // ── Vraag 20 Hard — IKW en wat dit verteenwoordig ─────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gebruik die kwartiele van Vraag 19 om die interkwartielwydte te bepaal en verduidelik wat dit verteenwoordig.',
      checkMode: 'auto',
      options: ['IKW=16. Dit verteenwoordig die gemiddelde afstand van elke datapunt vanaf die gemiddelde.', 'IKW=38. Dit verteenwoordig die volle verspreiding van die hele datastel vanaf minimum tot maksimum.', 'IKW=19. Dit verteenwoordig die middelste 50% van die data, en dit word méér deur uiterste waardes beïnvloed as die variasiewydte.', 'IKW=16. Dit verteenwoordig die verspreiding van die middelste 50% van die data, en gee ʼn maatstaf van verspreiding wat minder deur uiterste waardes beïnvloed word as die volle variasiewydte.'],
      correctIndex: 3,
      explanation: 'IKW = Q3−Q1 = 27−11 = 16. Dit verteenwoordig die verspreiding van die middelste 50% van die data (tussen Q1 en Q3), en omdat dit die uiterste 25% aan elke kant ignoreer, word dit minder deur uitskieters beïnvloed as die volle variasiewydte — nie meer nie, en dit is nie die gemiddelde afstand vanaf die gemiddelde (dit is nader aan standaardafwyking) of die volle verspreiding (dit is die variasiewydte) nie.',
    },

    // ── Vraag 21 Hard — mediaan gelyk aan Q2 ─────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê die mediaan is altyd gelyk aan Q2. Is hy korrek? Verduidelik.',
      checkMode: 'auto',
      options: ['Ja — per definisie is Q2 (die tweede kwartiel) dieselfde as die mediaan, aangesien albei die middelste waarde (50ste persentiel) van ʼn gerangskikte datastel verteenwoordig.', 'Nee — Q2 is altyd presies tussen Q1 en Q3, wat slegs soms gelyk is aan die mediaan.', 'Nee — die mediaan en Q2 is onverwante statistieke wat slegs toevallig soortgelyk is in die meeste datastelle.', 'Slegs waar vir datastelle met ʼn onewe aantal waardes; vir ewe aantalle verskil Q2 en die mediaan.'],
      correctIndex: 0,
      explanation: 'Thabo is korrek. Q2, die tweede kwartiel, word per definisie beskryf as die middelste waarde (50ste persentiel) van ʼn gerangskikte datastel — presies dieselfde as die definisie van die mediaan. Dit geld vir datastelle met beide onewe en ewe aantalle waardes, en Q2 word nie gedefinieer as die middelpunt tussen Q1 en Q3 nie.',
    },

    // ── Vraag 22 Hard — klein IKW relatief tot variasiewydte ──────────────────
    {
      difficulty: 'Hard',
      question: 'ʼn Datastel het Q1=20 en Q3=50. Bepaal die interkwartielwydte, en verduidelik dan wat ʼn klein IKW in vergelyking met die volle variasiewydte oor die data sou aandui.',
      checkMode: 'auto',
      options: ['IKW=70. ʼn Klein IKW relatief tot die variasiewydte beteken die data het geen uitskieters nie.', 'IKW=30. ʼn Klein IKW relatief tot die volle variasiewydte dui aan dat die middelste 50% van die data styf saamgroepeer is, met moontlik meer uiterste waardes wat die volle variasiewydte wyer trek, wat op moontlike uitskieters of ʼn skewe verspreiding dui.', 'IKW=30. ʼn Klein IKW relatief tot die variasiewydte beteken die data is eweredig versprei oor sy hele omvang sonder groepering.', 'IKW=20. ʼn Klein IKW relatief tot die variasiewydte bewys altyd dat die datastel ʼn berekeningsfout bevat.'],
      correctIndex: 1,
      explanation: 'IKW = Q3−Q1 = 50−20 = 30. ʼn Klein IKW in vergelyking met die volle variasiewydte dui aan dat die middelste 50% van die data styf saamgroepeer is terwyl sommige uiterste waardes die variasiewydte veel wyer trek — dit dui op moontlike uitskieters of skeefheid, nie dat die data eweredig versprei is nie, nie dat uitskieters uitgesluit word nie, en nie noodwendig op enige fout nie.',
    },

    // ── Vraag 23 Hard — benaderde gemiddelde uit gegroepeerde data ───────────
    {
      difficulty: 'Hard',
      question: 'Bepaal die benaderde gemiddelde van gegroepeerde data met intervalle 10≤x<20 (freq 5), 20≤x<30 (freq 9), 30≤x<40 (freq 6), deur middelpunte te gebruik.',
      checkMode: 'auto',
      options: ['20,5', '25', '25,5', '21,75'],
      correctIndex: 2,
      explanation: 'Middelpunte: 15,25,35. Σ(middelpunt×freq) = (15×5)+(25×9)+(35×6) = 75+225+210 = 510. Totale frekwensie = 20. Gemiddelde = 510÷20 = 25,5. 20,5 kom van die gebruik van die interval-eindpunte in plaas van middelpunte, 25 is bloot die ongeweegde gemiddelde van die drie middelpunte, en 21,75 kom van die weglating van die eerste term van die som.',
    },

    // ── Vraag 24 Hard — akkuraatheid van sakrekenaar-gemiddelde vir gegroepeerde data
    {
      difficulty: 'Hard',
      question: "Lerato sê ʼn sakrekenaar se gemiddelde-funksie gee die presiese gemiddelde vir gegroepeerde data. Is dit altyd akkuraat? Verduidelik.",
      checkMode: 'auto',
      options: ['Ja — sakrekenaars bereken altyd die presiese gemiddelde, ongeag of die data gegroepeer of ongegroepeerd is.', 'Ja, maar slegs as al die klasintervalle dieselfde breedte het.', 'Nee — sakrekenaars kan nooit enige soort gemiddelde vir gegroepeerde data bereken nie.', 'Nee — vir gegroepeerde data verskaf selfs die sakrekenaar slegs ʼn benaderde gemiddelde gebaseer op die middelpunte wat jy invoer, aangesien die presiese individuele waardes binne elke interval onbekend is.'],
      correctIndex: 3,
      explanation: 'ʼn Sakrekenaar bereken die gemiddelde uit watter waardes ook al ingevoer word — vir gegroepeerde data is dit middelpunte, nie die werklike individuele datawaardes nie, dus bly die resultaat slegs ʼn benaderde gemiddelde. Gelyke intervalbreedtes verander dit nie, en sakrekenaars kan wel ʼn gegroepeerde-data-gemiddelde bereken, maar die resultaat bly ʼn skatting, nie die presiese gemiddelde nie.',
    },

    // ── Vraag 25 Hard — 40ste persentiel in konteks ──────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle vind dat die 40ste persentiel van ʼn datastel in die interval 25≤x<35 val. Verduidelik wat dit in konteks beteken.',
      checkMode: 'auto',
      options: ['Dit beteken dat ongeveer 40% van die datawaardes onder die omvang 25≤x<35 val, wat hierdie interval as die ligging aandui waar die 40ste persentielwaarde lê.', 'Dit beteken presies 40 datawaardes val binne die interval 25≤x<35.', 'Dit beteken 40% van die datawaardes val bo 35, en die res val onder 25.', 'Dit beteken die interval 25≤x<35 bevat die gemiddelde van die datastel.'],
      correctIndex: 0,
      explanation: 'Die k-de persentiel is die waarde waaronder k% van die data val. Dat die 40ste persentiel in 25≤x<35 val, beteken ongeveer 40% van die waardes lê onder hierdie interval — dit sê niks oor presies 40 datawaardes nie, ook nie oor ʼn verdeling bo/onder 35 en 25 nie, en persentiele beskryf posisie/rangorde, nie die gemiddelde nie.',
    },

    // ── Vraag 26 Hard — variasiewydte teenoor IKW-uitskieterredenasie ────────
    {
      difficulty: 'Hard',
      question: "ʼn Datastel se variasiewydte is 60, maar sy interkwartielwydte is slegs 12. Sipho maak die gevolgtrekking dat daar minstens een uitskieter moet wees. Is sy redenasie geldig? Verduidelik.",
      checkMode: 'auto',
      options: ['Ja, heeltemal geldig — enige keer as die variasiewydte meer as 4 keer die IKW is, bewys dit wiskundig dat minstens een uitskieter bestaan.', 'Sy redenasie is redelik maar nie absoluut seker nie — ʼn groot verskil tussen variasiewydte en IKW dui dikwels op uitskieters wat die variasiewydte wyer trek as die styf saamgegroepeerde middelste 50%, maar dit moet steeds ondersoek word deur die werklike datawaardes te bestudeer eerder as om dit outomaties aan te neem.', 'Nee — die variasiewydte en IKW is onverwante statistieke, dus kan geen gevolgtrekking oor uitskieters ooit uit ʼn vergelyking daarvan gemaak word nie.', 'Nee — ʼn groot verskil tussen variasiewydte en IKW bewys eintlik dat die datastel geen uitskieters het nie.'],
      correctIndex: 1,
      explanation: 'ʼn Groot verskil tussen die variasiewydte (60) en die IKW (12) is ʼn redelike aanduiding dat een of meer uitskieters die variasiewydte wyer trek as die styf saamgegroepeerde middelste 50%, maar dit bewys nie wiskundig dat ʼn uitskieter bestaan nie — die werklike datawaardes moet steeds bestudeer word. Die variasiewydte en IKW is wel verwant (albei meet verspreiding), dus is ʼn vergelyking betekenisvol, en die verskil bewys ook nie die teenoorgestelde (geen uitskieters) nie.',
    },
  ],

  resultsConfig: {
    totalMarks: 26,
    messages: [
      { minScore: 26, message: 'Uitstekend! Jy het statistiek bemeester.' },
      { minScore: 20, message: 'Puik werk!' },
      { minScore: 13, message: 'Goeie poging, gaan deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },
}
