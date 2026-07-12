import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (euclidean geometry roles) ────────────────────────────────
// matching angles / properties tested / standard definition / conjecture → blue   (#2563eb)
// proportional sides / proof steps / alternative definition / testing   → orange  (#ea580c)
// congruent (identical) / proof connecting / conclusion proven           → green   (#16a34a)
// counter-examples / conclusion disproven                                → red     (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Euklidiese Meetkunde',
  grade: 10,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — REVISING SIMILARITY AND CONGRUENCE OF TRIANGLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'similarity-congruence-triangles',
      title: 'Hersiening van Gelykvormigheid en Kongruensie van Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">Twee driehoeke is <strong>gelykvormig</strong> as hulle ${bl('ooreenstemmende hoeke gelyk')} is — hulle sye is dan outomaties in verhouding. Twee driehoeke is <strong>kongruent</strong> as beide hulle ${bl('hoeke')} ÉN hulle ${gr('ooreenstemmende sye')} gelyk is. ${gr('Kongruente')} driehoeke is in wese identiese afskrifte, terwyl ${or('gelykvormige')} driehoeke geskaleerde weergawes van mekaar is.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('ooreenstemmende hoeke')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('eweredige sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('kongruent (identies)')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Gelykvormige driehoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde ${bl('vorm')}, ander grootte. ${bl('Hoeke')} is gelyk; sye is in ʼn vaste ${or('verhouding')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Kongruente driehoeke</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Dieselfde ${bl('vorm')} ÉN dieselfde grootte. ${bl('Hoeke')} gelyk ÉN ${gr('sye')} gelyk — ${gr('identiese afskrifte')}.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Ooreenstemmende sye</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Sye wat teenoor ${bl('gelyke hoeke')} lê. In gelykvormige driehoeke is hulle in ${or('verhouding')}; in kongruente driehoeke is hulle ${gr('gelyk')}.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gelykvormigheid vs Kongruensie op ʼn oogopslag</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:6px;">Gelykvormig (|||)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Ooreenstemmende hoeke')} is gelyk</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ Sye in ${or('verhouding')} (dieselfde skaal)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✖ Sye is NIE noodwendig gelyk nie</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:6px;">Kongruent (≡)</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${bl('Ooreenstemmende hoeke')} is gelyk</p>` +
        `<p style="color:#374151;font-size:14px;margin-bottom:4px;">✔ ${gr('Ooreenstemmende sye')} is gelyk</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">✔ Driehoeke is ${gr('identies in elke opsig')}</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Onthou-wenk</p>` +
        `<p style="margin:0;color:#1e3a8a;">Alle ${gr('kongruente')} driehoeke is outomaties ${or('gelykvormig')}, maar NIE alle ${or('gelykvormige')} driehoeke is ${gr('kongruent')} nie. Beskou kongruensie as ʼn strenger vereiste — dit vereis beide ${bl('gelyke hoeke')} ÉN ${gr('gelyke sye')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Driehoek ABC het hoeke 40°, 60°, 80°. Driehoek DEF het hoeke 40°, 60°, 80° maar verskillende sylengtes. Is die driehoeke gelykvormig of kongruent?',
          answer: `Die driehoeke is ${or('gelykvormig')}, nie ${gr('kongruent')} nie`,
          steps: [
            `Kontroleer die ${bl('hoeke')}: Driehoek ABC het ${bl('40°')}, ${bl('60°')}, ${bl('80°')} en driehoek DEF het ook ${bl('40°')}, ${bl('60°')}, ${bl('80°')} — die ${bl('ooreenstemmende hoeke is gelyk')} ✓`,
            `Kontroleer die sye: Die vraag stel dat die driehoeke <strong>verskillende sylengtes</strong> het, dus is die sye NIE ${gr('gelyk')} nie — hulle is in ${or('verhouding')} (dieselfde skaal), maar nie identies nie.`,
            `<strong>Gevolgtrekking:</strong> Omdat die ${bl('hoeke ooreenstem')} maar die sye verskil (geskaleer), is die driehoeke ${or('gelykvormig')} (|||), nie ${gr('kongruent')} (≡) nie. Om kongruent te wees, moet BEIDE die hoeke ÉN die sye gelyk wees.`,
          ],
        },
        {
          question: 'Sipho sê twee driehoeke met dieselfde oppervlakte is altyd kongruent. Is hy korrek?',
          answer: `Nee — Sipho is ${re('verkeerd')}`,
          steps: [
            `Beskou ʼn reghoekige driehoek met basis 2 cm en hoogte 6 cm: oppervlakte = ½ × 2 × 6 = ${bl('6 cm²')}.`,
            `Beskou nou ʼn ander reghoekige driehoek met basis 3 cm en hoogte 4 cm: oppervlakte = ½ × 3 × 4 = ${bl('6 cm²')}.`,
            `Albei driehoeke het dieselfde oppervlakte (${bl('6 cm²')}), tog het hulle heeltemal verskillende sylengtes en verskillende ${bl('hoek')}groottes — hulle is nóg gelykvormig nóg kongruent.`,
            `<strong>Gevolgtrekking:</strong> ${re('Gelyke oppervlakte impliseer NIE kongruensie nie.')} ʼn ${re('Teenvoorbeeld')} soos hierdie is genoeg om Sipho se bewering te weerlê. Kongruensie vereis BEIDE gelyke ${bl('hoeke')} ÉN gelyke ${gr('sye')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die verskil tussen gelykvormige en kongruente driehoeke verduidelik deur ooreenstemmende hoeke en proporsionele sye te gebruik, met kleurgekodeerde diagramme" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat twee gelykvormige driehoeke langs mekaar wys met ooreenstemmende hoeke in blou en eweredige sye in oranje gemerk, teenoor twee kongruente driehoeke met identiese sye in groen gemerk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — INVESTIGATING PROPERTIES OF SPECIAL QUADRILATERALS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'properties-special-quadrilaterals',
      title: 'Ondersoek van die Eienskappe van Spesiale Vierhoeke',
      icon: '▱',
      explanation:
        `<p style="margin-bottom:16px;">Ons ondersoek en formuleer <strong>vermoedens</strong> oor die eienskappe van die ${bl('vlieër')}, ${bl('parallelogram')}, ${bl('reghoek')}, ${bl('ruit')}, ${bl('vierkant')}, en ${bl('trapesium')}, deur hulle sye, hoeke, diagonale en oppervlaktes te ondersoek. Ons probeer dan hierdie vermoedens ${or('bewys')} met behulp van bekende meetkundige resultate, of vals vermoedens ${re('weerlê')} met ʼn teenvoorbeeld — ʼn enkele spesifieke geval waar die vermoede faal.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('eienskap wat getoets word')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('bewysstappe')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('teenvoorbeelde')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Spesiale vierhoeke en hulle sleuteleienskappe</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Parallelogram</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('Oorstaande sye parallel')} en gelyk; ${bl('oorstaande hoeke')} gelyk; diagonale halveer mekaar.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Reghoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram met ${bl('4 regte hoeke')}; diagonale is ${or('gelyk')} en halveer mekaar.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Ruit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Parallelogram met ${bl('4 gelyke sye')}; diagonale halveer mekaar teen ${or('90°')} en halveer die ${bl('hoekpunthoeke')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Reghoek ÉN ruit — ${bl('4 regte hoeke')} ÉN ${bl('4 gelyke sye')}; diagonale gelyk, halveer mekaar teen 90°.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Vlieër</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Twee pare ${bl('aangrensende gelyke sye')}; een diagonaal is ʼn simmetrielyn; diagonale is ${or('loodreg')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Trapesium</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Presies ${bl('een paar parallelle sye')}. ʼn Gelykbenige trapesium het ook gelyke ${bl('bene')} en gelyke diagonale.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:6px;">Een teenvoorbeeld is genoeg</p>` +
        `<p style="margin:0;color:#991b1b;">Om ʼn vermoede te ${re('weerlê')} het jy net EEN spesifieke voorbeeld nodig wat dit weerspreek. Om ʼn vermoede te ${or('bewys')} moet jy toon dat dit in ALLE moontlike gevalle geld deur logiese meetkundige redenasie te gebruik — ʼn paar voorbeelde te kontroleer is NIE genoeg vir ʼn bewys nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Ondersoek of die diagonale van ʼn parallelogram altyd gelyk in lengte is.',
          answer: `Die vermoede is ${re('VALS')} — parallelogramdiagonale is NIE altyd gelyk nie`,
          steps: [
            `${bl('Eienskap wat getoets word:')} Is die diagonale van elke parallelogram gelyk in lengte?`,
            `Teken ʼn algemene parallelogram (bv. een met hoeke 60° en 120°) en meet albei diagonale. Die twee diagonale sal oor die algemeen ${re('verskillende lengtes')} hê.`,
            `${re('Teenvoorbeeld:')} ʼn Parallelogram met hoekpunte by (0,0), (4,0), (5,2), (1,2) het diagonale met lengte √29 ≈ 5,39 en √13 ≈ 3,61 — hulle is NIE gelyk nie.`,
            `<strong>Gevolgtrekking:</strong> ${re('Die vermoede word weerlê.')} ʼn Enkele teenvoorbeeld is voldoende. (Let wel: ʼn reghoek is ʼn spesiale parallelogram waarvan die diagonale WEL gelyk is — maar dit maak nie die algemene vermoede waar nie.)`,
          ],
        },
        {
          question: 'Bewys dat die diagonale van ʼn ruit mekaar teen regte hoeke halveer.',
          answer: `Die diagonale van ʼn ruit halveer mekaar teen ${or('90°')} — ${or('bewys')}`,
          steps: [
            `${bl('Eienskap wat getoets word:')} Ontmoet die diagonale van ʼn ruit altyd teen 90°?`,
            `${or('Stap 1 — Diagonale halveer mekaar:')} ʼn Ruit is ʼn parallelogram (oorstaande sye parallel), dus halveer sy diagonale mekaar. Laat die snypunt O wees.`,
            `${or('Stap 2 — Vier kongruente driehoeke:')} Benoem die ruit ABCD met diagonale AC en BD wat by O sny. Aangesien al 4 sye van ʼn ruit gelyk is, het driehoeke AOB, BOC, COD en DOA elk twee sye gelyk aan die helfte van die onderskeie diagonaal ÉN een sy gelyk aan ʼn sy van die ruit.`,
            `${or('Stap 3 — Kongruensie-argument:')} Deur die SSS-kongruensiereël te gebruik (al drie sye van △AOB = al drie sye van △AOD, aangesien AB = AD en AO = AO), kry ons △AOB ≡ △AOD. Daarom is ∠AOB = ∠AOD.`,
            `${or('Stap 4 — Regte hoeke:')} Aangesien ∠AOB + ∠AOD = 180° (hoeke op ʼn reguitlyn) en ∠AOB = ∠AOD, moet elke hoek 90° wees.`,
            `<strong>Gevolgtrekking:</strong> Die diagonale van ʼn ruit halveer mekaar teen ${or('regte hoeke')}. ✓`,
          ],
        },
        {
          question: 'Lerato sê ʼn vierkant is net ʼn spesiale reghoek. Is dit ʼn akkurate beskrywing van die verwantskap?',
          answer: `Ja — ʼn vierkant is ʼn ${or('spesiale geval')} binne die breër kategorie van reghoeke`,
          steps: [
            `${bl('Eienskappe van ʼn reghoek:')} 4 regte hoeke, oorstaande sye parallel en gelyk, diagonale gelyk en halveer mekaar.`,
            `${bl('Eienskappe van ʼn vierkant:')} 4 regte hoeke, ${or('al 4 sye gelyk')}, diagonale gelyk en halveer mekaar teen 90°.`,
            `${or('Kontroleer:')} Voldoen ʼn vierkant aan AL die eienskappe van ʼn reghoek? Ja — ʼn vierkant het 4 regte hoeke en oorstaande sye parallel en gelyk. Dit kwalifiseer as ʼn reghoek.`,
            `Die vierkant VOEG die addisionele voorwaarde by dat ${or('al 4 sye gelyk')} is, wat dit ʼn meer beperkte (spesiale) geval van ʼn reghoek maak.`,
            `<strong>Gevolgtrekking:</strong> Lerato is korrek. ʼn Vierkant is ʼn spesiale reghoek — elke vierkant is ʼn reghoek, maar nie elke reghoek is ʼn vierkant nie. ✓`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die eienskappe van spesiale vierhoeke ondersoek, insluitend sye, hoeke en diagonale, met kleurgekodeerde bewysstappe en teenvoorbeelde" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Hiërargie-diagram wat die verwantskappe tussen spesiale vierhoeke wys, van parallelogram af tot by reghoek, ruit en vierkant, met sleuteleienskappe in blou gemerk en teenvoorbeelde in rooi uitgelig" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — ALTERNATIVE DEFINITIONS OF POLYGONS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'alternative-definitions-polygons',
      title: 'Alternatiewe Definisies van Veelhoeke',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Baie veelhoeke kan op meer as een geldige manier gedefinieer word. Byvoorbeeld, die ${bl('standaarddefinisie')} van ʼn parallelogram is "ʼn vierhoek met beide pare oorstaande sye parallel", maar dit kan ook gedefinieer word as "ʼn vierhoek met beide pare oorstaande hoeke gelyk" — albei definisies beskryf presies dieselfde vorm, aangesien een ${or('alternatiewe definisie')} bewys kan word om die ander te impliseer deur ${gr('bekende meetkundige resultate')} te gebruik.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('standaarddefinisie')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('alternatiewe definisie')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('bewys wat hulle verbind')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Waarom alternatiewe definisies belangrik is</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Standaarddefinisies')} is die mees algemene beginpunt, maar ʼn ${or('alternatiewe definisie')} is net so geldig as dit bewys kan word om presies dieselfde stel vorms te beskryf.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">ʼn ${or('Alternatiewe definisie')} is geldig as en slegs as dit beide nodig ÉN voldoende is — elke vorm in die kategorie voldoen daaraan, en elke vorm wat daaraan voldoen, is in die kategorie.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3</span>` +
        `<p style="margin:0;font-size:14px;">Die ${gr('bewys wat')} die ${bl('standaard-')} en ${or('alternatiewe')} definisies verbind, toon dat hulle logies ekwivalent is — elkeen impliseer die ander.</p>` +
        `</div>` +

        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene alternatiewe definisies</p>` +
        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:12px;padding:16px 20px;margin-bottom:20px;">` +
        `<p style="margin-bottom:8px;"><strong>Parallelogram</strong> — ${bl('Standaard:')} beide pare oorstaande sye parallel &nbsp;|&nbsp; ${or('Alternatief 1:')} beide pare oorstaande sye gelyk &nbsp;|&nbsp; ${or('Alternatief 2:')} beide pare oorstaande hoeke gelyk &nbsp;|&nbsp; ${or('Alternatief 3:')} diagonale halveer mekaar</p>` +
        `<p style="margin-bottom:8px;"><strong>Ruit</strong> — ${bl('Standaard:')} parallelogram met al 4 sye gelyk &nbsp;|&nbsp; ${or('Alternatief:')} vierhoek met diagonale wat mekaar teen regte hoeke halveer</p>` +
        `<p style="margin:0;"><strong>Reghoek</strong> — ${bl('Standaard:')} parallelogram met een regte hoek &nbsp;|&nbsp; ${or('Alternatief:')} parallelogram met gelyke diagonale</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#15803d;margin-bottom:6px;">Hoe om ʼn alternatiewe definisie te bekragtig</p>` +
        `<p style="margin:0;color:#14532d;">Toon dat ${bl('standaard → alternatief')} (elke vorm wat by die standaarddefinisie pas, pas ook by die alternatief) ÉN ${or('alternatief → standaard')} (elke vorm wat by die alternatief pas, pas ook by die standaard). As beide rigtings geld, is die definisies ${gr('ekwivalent')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Toon dat 'ʼn vierhoek met diagonale wat mekaar teen regte hoeke halveer' ʼn alternatiewe definisie van ʼn ruit is.",
          answer: `Bevestig — dit is ʼn ${or('geldige alternatiewe definisie')} van ʼn ruit`,
          steps: [
            `${bl('Standaarddefinisie van ʼn ruit:')} ʼn Parallelogram met al vier sye gelyk.`,
            `${or('Alternatiewe definisie om te toets:')} ʼn Vierhoek waarvan die diagonale mekaar teen regte hoeke halveer.`,
            `${gr('Bewys — standaard impliseer alternatief:')} Laat ABCD ʼn ruit wees met diagonale AC en BD wat by O ontmoet. Aangesien ABCD ʼn parallelogram is, halveer die diagonale mekaar (AO = OC en BO = OD). Deur SSS-kongruensie te gebruik (AB = AD, AO = AO, BO = OD gedeel), △AOB ≡ △AOD, wat ∠AOB = ∠AOD = 90° gee. Die diagonale ontmoet dus teen regte hoeke. ✓`,
            `${gr('Bewys — alternatief impliseer standaard:')} Veronderstel nou ʼn vierhoek het diagonale wat mekaar teen regte hoeke halveer. Die halveer-eienskap beteken die teenoorstaande driehoeke wat gevorm word, is kongruent, wat oorstaande sye gelyk en parallel gee (parallelogram). Die regte-hoek-eienskap skep vier kongruente reghoekige driehoeke, wat al vier buitenste sye dwing om gelyk te wees. ✓`,
            `<strong>Gevolgtrekking:</strong> Albei rigtings geld, dus is die ${or('alternatiewe definisie')} ${gr('logies ekwivalent')} aan die ${bl('standaarddefinisie')}.`,
          ],
        },
        {
          question: "Thabo sê 'ʼn vierhoek met een paar oorstaande sye gelyk en parallel' is ʼn geldige alternatiewe definisie van ʼn parallelogram. Is hy korrek?",
          answer: `Ja — Thabo is ${gr('korrek')}`,
          steps: [
            `${bl('Standaarddefinisie van ʼn parallelogram:')} ʼn Vierhoek met beide pare oorstaande sye parallel.`,
            `${or('Voorgestelde alternatiewe definisie:')} ʼn Vierhoek met net een paar oorstaande sye wat beide gelyk ÉN parallel is.`,
            `${gr('Bewys:')} Laat ABCD ʼn vierhoek wees waar AB = CD en AB ∥ CD. Teken diagonaal BD. Aangesien AB ∥ CD, is verwisselende binnehoeke ∠ABD = ∠CDB (AB ∥ CD, BD snylyn). AB = CD is gegee, en BD is ʼn gedeelde sy, dus △ABD ≡ △CDB deur SHS.`,
            `Vanuit die kongruensie: AD = BC en ∠ADB = ∠CBD. Aangesien ∠ADB = ∠CBD verwisselende binnehoeke is met BD as snylyn, volg dit dat AD ∥ BC.`,
            `Beide pare oorstaande sye is nou parallel, wat aan die ${bl('standaard parallelogramdefinisie')} voldoen. ✓`,
            `<strong>Gevolgtrekking:</strong> Thabo is korrek — die ${or('alternatiewe definisie')} is geldig en ekwivalent aan die ${bl('standaarddefinisie')}.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat verduidelik hoe standaard- en alternatiewe definisies van spesiale vierhoeke as ekwivalent bewys word deur geometriese redenering" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn ruit wys met die standaarddefinisie in blou gemerk en die alternatiewe definisie (diagonale wat mekaar teen regte hoeke halveer) in oranje gemerk, met die bewys wat hulle verbind in groen aangedui" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — PROVING GEOMETRIC CONJECTURES AND DISPROVING FALSE ONES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'proving-disproving-conjectures',
      title: 'Bewys van Meetkundige Vermoedens en Weerlegging van Vals Vermoedens',
      icon: '🔍',
      explanation:
        `<p style="margin-bottom:16px;">Wanneer ons meetkundige eienskappe ondersoek, formuleer ons ${bl('vermoedens')} gebaseer op patrone wat ons waarneem. Ons ${gr('bekragtig (bewys)')} hulle dan deur logiese meetkundige redenasie te gebruik, of ons ${re('weerlê')} hulle deur ʼn teenvoorbeeld te vind — ʼn enkele spesifieke geval waar die vermoede faal. Die ${or('toetsproses')} behels die teken van voorbeelde, meet, redenasie oor eienskappe, en die toepassing van bekende stellings.</p>` +

        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vermoede gestel')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('toetsproses')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gevolgtrekking: bewys')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('gevolgtrekking: weerlê')}</span>` +
        `</div>` +

        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Hoe om ʼn meetkundige vermoede te toets</p>` +
        `<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#2563eb;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">1</span>` +
        `<p style="margin:0;font-size:14px;">${bl('Stel die vermoede duidelik')} — skryf presies neer wat jy glo waar is voordat jy toets.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">2</span>` +
        `<p style="margin:0;font-size:14px;">${or('Toets met verskeie voorbeelde')} — teken verskeie verskillende gevalle, meet, en soek na ʼn patroon.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3a</span>` +
        `<p style="margin:0;font-size:14px;"><strong>As jy ʼn geval vind waar dit faal:</strong> Het jy ʼn ${re('teenvoorbeeld')} — die vermoede is ${re('WEERLÊ')}. Hou hier op; een teenvoorbeeld is voldoende.</p>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:10px 14px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:9px;">` +
        `<span style="display:inline-block;min-width:22px;height:22px;line-height:22px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:12px;text-align:center;flex-shrink:0;">3b</span>` +
        `<p style="margin:0;font-size:14px;"><strong>As alle voorbeelde geld:</strong> Bou ʼn ${gr('formele bewys')} met behulp van bekende stellings en logiese redenasie. Voorbeelde alleen is nie genoeg om ʼn vermoede te ${gr('bewys')} nie.</p>` +
        `</div>` +

        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Bewys vs teenvoorbeeld</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn ${re('Teenvoorbeeld')} weerlê met EEN geval. ʼn ${gr('Bewys')} moet ALLE moontlike gevalle dek — dit vereis logiese redenasie, nie net metings nie. "Ek het 10 vorms geteken en dit het gewerk" is nooit ʼn bewys nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: "Amahle vermoed dat 'alle vierhoeke met een paar parallelle sye gelyke diagonale het'. Toets hierdie vermoede met ʼn trapesium.",
          answer: `Die vermoede is ${re('VALS')} — weerlê deur ʼn teenvoorbeeld`,
          steps: [
            `${bl('Vermoede gestel:')} Alle vierhoeke met een paar parallelle sye (trapesiums) het gelyke diagonale.`,
            `${or('Toetsproses:')} Teken ʼn algemene (nie-gelykbenige) trapesium ABCD waar AB ∥ CD maar AD ≠ BC. Meet albei diagonale AC en BD.`,
            `${re('Teenvoorbeeld:')} Trapesium met A(0,0), B(6,0), C(5,3), D(1,3). Diagonaal AC = √(25+9) = √34 ≈ 5,83. Diagonaal BD = √(25+9) = ... kom ons herbereken: BD van (6,0) na (1,3) = √(25+9) = √34. Probeer eerder D(2,3): AC van (0,0) na (5,3) = √34 ≈ 5,83; BD van (6,0) na (2,3) = √(16+9) = 5. Hierdie is ongelyk.`,
            `ʼn Algemene (skalene) trapesium het ${re('ongelyke diagonale')}, wat ʼn duidelike teenvoorbeeld verskaf.`,
            `<strong>Gevolgtrekking:</strong> ${re('Die vermoede word weerlê.')} Slegs ʼn gelykbenige trapesium (waar die nie-parallelle sye gelyk is) het gelyke diagonale — dit is ʼn spesiale geval, nie die algemene reël nie.`,
          ],
        },
        {
          question: "Sipho vermoed dat 'die diagonale van ʼn vlieër altyd loodreg is'. Ondersoek en bevestig of weerlê hierdie vermoede.",
          answer: `Die vermoede is ${gr('WAAR')} — die diagonale van ʼn vlieër is altyd loodreg`,
          steps: [
            `${bl('Vermoede gestel:')} Die diagonale van enige vlieër sny mekaar teen 90°.`,
            `${or('Toetsproses:')} Teken verskeie vlieërs van verskillende vorms en groottes. Meet in elke geval die hoek waarteen die diagonale mekaar sny.`,
            `${or('Waarnemings:')} Elke vlieër wat getoets word, toon ʼn hoek van 90° by die snypunt van die diagonale — die patroon geld deurgaans.`,
            `${gr('Formele bewys:')} ʼn Vlieër ABCD het AB = AD en CB = CD. Die hoofdiagonaal AC is ʼn simmetrielyn vir die vlieër. As gevolg van hierdie simmetrie is B en D spieëlbeelde van mekaar oor AC. Die diagonaal BD sny AC dus teen regte hoeke (dit is loodreg op die simmetrie-as).`,
            `Meer formeel: △ABC ≡ △ADC (SSS, aangesien AB = AD, CB = CD, AC gedeel). Daarom is ∠BAO = ∠DAO, wat beteken AO halveer ∠BAD. In △ABO en △ADO is AO gemeenskaplik, AB = AD, en ∠BAO = ∠DAO, dus deur SHS △ABO ≡ △ADO. Daarom is ∠AOB = ∠AOD. Aangesien ∠AOB + ∠AOD = 180°, is elkeen gelyk aan 90°. ✓`,
            `<strong>Gevolgtrekking:</strong> ${gr('Die vermoede word bewys.')} Die diagonale van ʼn vlieër sny mekaar altyd teen regte hoeke.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat demonstreer hoe om geometriese vermoedens oor vierhoeke te stel, te toets en óf te bewys óf te weerlê deur teenvoorbeelde en logiese bewyse te gebruik" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat ʼn vermoede in blou gestel wys, getoets met voorbeelde in oranje, wat lei tot óf ʼn teenvoorbeeld in rooi uitgelig óf ʼn formele bewys in groen uitgelig" />',
    },
  ],

  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Twee driehoeke het identiese hoeke maar verskillende sylengtes. Is hulle gelykvormig of kongruent?',
      answer: 'gelykvormig',
      checkMode: 'auto',
      correctAnswer: 'gelykvormig',
      explanation: 'Dieselfde hoeke maar verskillende sylengtes beteken die driehoeke het dieselfde vorm maar ʼn ander grootte — dit is die definisie van gelykvormigheid. Kongruensie vereis beide gelyke hoeke ÉN gelyke sye.',
    },

    // ── Q2 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Twee driehoeke het dieselfde hoeke ÉN dieselfde sylengtes. Is hulle gelykvormig, kongruent, of albei?',
      answer: 'albei',
      checkMode: 'auto',
      correctAnswer: 'albei',
      explanation: 'Gelyke hoeke voldoen aan die gelykvormigheidsvoorwaarde; gelyke sye voldoen bykomend aan die kongruensievoorwaarde. Aangesien kongruente driehoeke outomaties gelyke hoeke het, is hulle beide gelykvormig en kongruent.',
    },

    // ── Q3 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê alle kongruente driehoeke is ook gelykvormig, maar nie alle gelykvormige driehoeke is kongruent nie. Is hy korrek? Verduidelik.',
      answer: 'Ja — kongruente driehoeke voldoen aan die voorwaardes vir gelykvormigheid (gelyke hoeke) plus gelyke sye, maar gelykvormige driehoeke vereis slegs gelyke hoeke, dus kan hulle in grootte verskil.',
      checkMode: 'self',
    },

    // ── Q4 Easy ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Is die diagonale van ʼn algemene parallelogram altyd gelyk?',
      answer: 'nee',
      checkMode: 'auto',
      correctAnswer: 'nee',
      explanation: 'Slegs reghoeke (en vierkante) onder parallelogramme het gelyke diagonale. ʼn Algemene parallelogram met nie-regte hoeke het diagonale van verskillende lengtes.',
    },

    // ── Q5 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Watter addisionele eienskap moet ʼn parallelogram hê sodat sy diagonale gelyk is?',
      answer: 'dit moet ʼn reghoek wees',
      checkMode: 'auto',
      correctAnswer: 'dit moet ʼn reghoek wees',
      explanation: 'ʼn Parallelogram het gelyke diagonale as en slegs as al vier hoeke regte hoeke is — wat dit ʼn reghoek maak. Gelyke diagonale is ʼn direkte gevolg van die regte-hoek-eienskap.',
    },

    // ── Q6 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato sê die diagonale van elke ruit halveer mekaar teen regte hoeke. Is dit altyd waar? Verduidelik met behulp van die ruit se eienskappe.",
      answer: "Ja — dit is ʼn bewese eienskap van alle ruite, aangesien ʼn ruit se diagonale kongruente driehoeke skep as gevolg van sy vier gelyke sye, wat loodregte snyding afdwing.",
      checkMode: 'self',
    },

    // ── Q7 Medium ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gee die standaarddefinisie van ʼn parallelogram.',
      answer: 'ʼn vierhoek met beide pare oorstaande sye parallel',
      checkMode: 'auto',
      correctAnswer: 'ʼn vierhoek met beide pare oorstaande sye parallel',
      explanation: 'Die standaarddefinisie van ʼn parallelogram vereis dat beide pare oorstaande sye parallel is. Dit is die minimum voorwaarde wat ʼn parallelogram van ander vierhoeke onderskei.',
    },

    // ── Q8 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gee ʼn alternatiewe definisie van ʼn parallelogram deur hoeke in plaas van sye te gebruik.',
      answer: 'ʼn Vierhoek waarin beide pare oorstaande hoeke gelyk is.',
      checkMode: 'self',
    },

    // ── Q9 Hard ───────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Thabo sê 'ʼn vierhoek met diagonale wat mekaar halveer' is voldoende om ʼn parallelogram te definieer. Is hy korrek? Verduidelik.",
      answer: "Ja — as die diagonale van ʼn vierhoek mekaar halveer, is dit alleen voldoende om te bewys dat beide pare oorstaande sye parallel is, wat aan die parallelogramdefinisie voldoen.",
      checkMode: 'self',
    },

    // ── Q10 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Amahle vermoed dat alle reghoeke vierkante is. Vind ʼn teenvoorbeeld om dit te weerlê.',
      answer: 'Enige reghoek waar lengte ≠ breedte, bv. ʼn reghoek van 4 cm by 6 cm — dit het vier regte hoeke (wat dit ʼn reghoek maak) maar sy sye is nie almal gelyk nie (dus is dit nie ʼn vierkant nie).',
      checkMode: 'self',
    },

    // ── Q11 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Ondersoek of die vermoede 'alle vlieërs het ten minste een paar gelyke hoeke' waar is, en verduidelik jou redenasie.",
      answer: "Ja — ʼn vlieër het een paar oorstaande hoeke gelyk (tussen die twee pare aangrensende gelyke sye), wat bewys kan word deur die simmetrielyn te gebruik wat die vlieër in twee kongruente driehoeke verdeel.",
      checkMode: 'self',
    },

    // ── Q12 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sipho sê ʼn trapesium het altyd gelyke diagonale. Gee ʼn teenvoorbeeld.',
      answer: 'ʼn Algemene (nie-gelykbenige) trapesium het tipies ongelyke diagonale; slegs gelykbenige trapesiums het gelyke diagonale, wat die algemene vermoede vals maak.',
      checkMode: 'self',
    },

    // ── Q13 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Bewys dat as ʼn vierhoek een paar oorstaande sye het wat beide gelyk en parallel is, dit ʼn parallelogram moet wees.',
      answer: 'As een paar sye gelyk en parallel is, skep die diagonaal wat die ander twee hoekpunte verbind twee kongruente driehoeke (deur SHS), wat die ander paar sye dwing om ook gelyk en parallel te wees.',
      checkMode: 'self',
    },

    // ── Q14 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Gee twee eienskappe wat ʼn vierkant van ʼn algemene ruit onderskei.',
      answer: 'ʼn vierkant het 4 regte hoeke en gelyke diagonale',
      checkMode: 'auto',
      correctAnswer: 'ʼn vierkant het 4 regte hoeke en gelyke diagonale',
      explanation: 'ʼn Ruit het vier gelyke sye maar sy hoeke hoef nie 90° te wees nie. ʼn Vierkant voeg die vereiste van vier regte hoeke by, wat ook die diagonale dwing om gelyk in lengte te wees — wat dit van ʼn algemene ruit onderskei.',
    },

    // ── Q15 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Lerato vermoed dat 'die diagonale van ʼn vlieër altyd mekaar halveer'. Ondersoek dit vir ʼn algemene vlieër en stel jou gevolgtrekking.",
      answer: "Dit is oor die algemeen vals — slegs een diagonaal van ʼn vlieër word deur die ander gehalveer; die diagonale van ʼn vlieër halveer nie albei mekaar nie, tensy dit ook ʼn ruit is.",
      checkMode: 'self',
    },

    // ── Q16 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo sê twee driehoeke met twee pare gelyke hoeke moet gelykvormig wees. Is hy korrek? Verduidelik.',
      answer: "Ja — as twee hoeke ooreenstem, moet die derde hoek ook ooreenstem (aangesien hoeke optel tot 180°), wat aan die HH-gelykvormigheidsvoorwaarde voldoen.",
      checkMode: 'self',
    },

    // ── Q17 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Gee ʼn bewys of weerlegging vir die vermoede: 'alle vierhoeke met loodregte diagonale is vlieërs'.",
      answer: "Dit is vals — ʼn vierkant het ook loodregte diagonale maar word nie spesifiek as ʼn vlieër geklassifiseer nie (alhoewel dit tegnies ook aan vlieër-eienskappe voldoen); meer presies, om net loodregte diagonale te hê waarborg nie die aangrensende-sy-pare-eienskap wat ʼn vlieër streng definieer nie.",
      checkMode: 'self',
    },

    // ── Q18 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: "Amahle ondersoek of 'ʼn vierhoek met een regte hoek altyd ʼn reghoek is'. Vind ʼn teenvoorbeeld.",
      answer: "ʼn Reghoekige trapesium het een regte hoek maar is nie ʼn reghoek nie, aangesien nie al vier hoeke 90° is nie.",
      checkMode: 'self',
    },

    // ── Q19 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Gee die alternatiewe definisie van ʼn ruit gebaseer op sy diagonale.',
      answer: 'ʼn vierhoek waarvan die diagonale mekaar teen regte hoeke halveer',
      checkMode: 'auto',
      correctAnswer: 'ʼn vierhoek waarvan die diagonale mekaar teen regte hoeke halveer',
      explanation: 'Dit is ʼn geldige alternatiewe definisie van ʼn ruit — ekwivalent aan die standaarddefinisie (ʼn parallelogram met al vier sye gelyk). Albei definisies beskryf presies dieselfde stel vorms.',
    },

    // ── Q20 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê om ʼn vermoede met vyf verskillende voorbeelde te bewys is genoeg om dit as altyd waar vas te stel. Is hy korrek? Verduidelik waarom of waarom nie.',
      answer: 'Nee — verskeie spesifieke voorbeelde wat ʼn vermoede ondersteun, is nie ʼn algemene bewys nie; ʼn formele meetkundige bewys met gevestigde eienskappe en logiese redenasie word vereis om ʼn vermoede vir alle gevalle waar te bewys.',
      checkMode: 'self',
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het Euklidiese meetkunde bemeester.' },
      { minPercent: 75, message: 'Goeie werk!' },
      { minPercent: 50, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer, werk weer deur die gids.' },
    ],
  },

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blok 1 (0-3):   Gelykvormigheid vs kongruensie klassifikasie             — abstrak, geen diagram
    // Blok 2 (4-6):   Spesiale vierhoek eienskap herroeping                   — abstrak, geen diagram
    // Blok 3 (7-10):  Parallelogram / reghoek / ruit ontbrekende waarde        — BENODIG DIAGRAM (7,8,9,10)
    // Blok 4 (11-13): Vlieër / trapesium ontbrekende waarde                   — BENODIG DIAGRAM (11,12,13)
    // Blok 5 (14-16): Alternatiewe definisies / vermoede-redenasie            — abstrak, geen diagram
    // Blok 6 (17-19): Gelykvormige driehoek eweredige sye                     — BENODIG DIAGRAM (17)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Gelykvormigheid vs kongruensie klassifikasie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek PQR het hoeke 45°, 55°, 80°. Driehoek XYZ het hoeke 45°, 55°, 80° maar verskillende sylengtes. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', correctAnswer: 'gelykvormig', answer: 'gelykvormig', explanation: 'Die ooreenstemmende hoeke is gelyk, maar die sye verskil in lengte, dus is die driehoeke dieselfde vorm maar nie dieselfde grootte nie — dit is gelykvormigheid, nie kongruensie nie.' },
        { difficulty: 'Easy', question: 'Twee driehoeke het presies dieselfde drie sylengtes: 6 cm, 8 cm en 10 cm elk. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', correctAnswer: 'albei', answer: 'albei', explanation: 'Gelyke ooreenstemmende sye (SSS) beteken die driehoeke is kongruent. Kongruente driehoeke het outomaties ook gelyke hoeke, dus is hulle ook gelykvormig — die driehoeke is albei.' },
        { difficulty: 'Medium', question: 'Driehoek DEF het hoeke van 50° en 70°. Driehoek GHI het hoeke van 50° en 60°. Verduidelik of die twee driehoeke gelykvormig kan wees.', answer: 'Nee — die derde hoek van driehoek DEF is 180° − 50° − 70° = 60°, wat hoeke 50°, 70°, 60° gee. Die derde hoek van driehoek GHI is 180° − 50° − 60° = 70°, wat hoeke 50°, 60°, 70° gee. Albei driehoeke het eintlik dieselfde drie hoeke (50°, 60°, 70°), dus is hulle WEL gelykvormig — die verskillende volgorde waarin die hoeke gelys is, verander nie die driehoek nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Nomsa sê as twee driehoeke dieselfde oppervlakte het, moet hulle gelykvormig wees. Is sy korrek? Verduidelik met ʼn teenvoorbeeld.', answer: 'Nee — ʼn driehoek met basis 4 cm en hoogte 6 cm het oppervlakte ½ × 4 × 6 = 12 cm². ʼn Heeltemal ander driehoek met basis 8 cm en hoogte 3 cm het ook oppervlakte ½ × 8 × 3 = 12 cm². Hierdie driehoeke kan heeltemal verskillende hoeke en sy-verhoudings hê, dus waarborg gelyke oppervlakte nie gelykvormigheid nie.', checkMode: 'self' },

        // Blok 2 — Spesiale vierhoek eienskap herroeping (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Gee een eienskap van die diagonale van ʼn reghoek wat ʼn algemene parallelogram nie noodwendig het nie.', checkMode: 'auto', correctAnswer: 'die diagonale is gelyk in lengte', correctAnswers: ['die diagonale is gelyk in lengte', 'diagonale is gelyk', 'die diagonale is gelyk'], answer: 'die diagonale is gelyk in lengte', explanation: 'Beide ʼn reghoek en ʼn algemene parallelogram het diagonale wat mekaar halveer, maar slegs ʼn reghoek (weens sy regte hoeke) waarborg diagonale van gelyke lengte.' },
        { difficulty: 'Medium', question: 'ʼn Ruit het diagonale wat mekaar teen regte hoeke halveer. Stel of hierdie eienskap ook op ʼn algemene parallelogram van toepassing is, en verduidelik waarom of waarom nie.', answer: 'Nee — in ʼn algemene parallelogram halveer die diagonale mekaar, maar hulle ontmoet nie noodwendig teen regte hoeke nie. Die loodregte snyding vind slegs plaas omdat ʼn ruit vier gelyke sye het, wat die driehoeke wat deur die diagonale gevorm word, dwing om kongruent te wees, wat die hoek tussen hulle 90° maak. ʼn Parallelogram sonder gelyke sye het nie hierdie ekstra simmetrie nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Verduidelik waarom elke vierkant ook as ʼn vlieër geklassifiseer word, deur die definisie van ʼn vlieër (twee pare aangrensende gelyke sye) te gebruik.', answer: 'ʼn Vierkant het al vier sye gelyk, dus het dit triviaal twee pare aangrensende sye wat gelyk is (trouens, al vier sye is gelyk). Dit voldoen aan die vlieër-definisie, dus is ʼn vierkant ʼn spesiale geval van ʼn vlieër — net soos dit ook ʼn spesiale geval van ʼn reghoek en ʼn ruit is.', checkMode: 'self' },

        // Blok 3 — Parallelogram / reghoek / ruit ontbrekende waarde (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD is hoek A = 60°. Aangesien opeenvolgende hoeke in ʼn parallelogram supplementêr is, bepaal die grootte van hoek B.', checkMode: 'auto', correctAnswer: '120°', correctAnswers: ['120°', '120'], answer: '120°', explanation: 'Opeenvolgende (mede-binne) hoeke in ʼn parallelogram is supplementêr — hulle tel op tot 180°.\nHoek B = 180° − 60° = 120°' },
        { difficulty: 'Medium', question: 'Reghoek ABCD het lengte AB = 12 cm en breedte BC = 5 cm. Bepaal die lengte van diagonaal AC.', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13 cm', '13'], answer: '13 cm', explanation: 'Die diagonaal van ʼn reghoek kan met die Stelling van Pythagoras bereken word, aangesien die sye teen 90° ontmoet.\nAC² = AB² + BC² = 12² + 5² = 144 + 25 = 169\nAC = √169 = 13 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Ruit ABCD het sylengte 10 cm. Sy diagonale halveer mekaar teen regte hoeke by punt O, met AO = OC = 6 cm. Bepaal die volle lengte van diagonaal BD.', checkMode: 'auto', correctAnswer: '16cm', correctAnswers: ['16cm', '16 cm', '16'], answer: '16 cm', explanation: 'Die diagonale van ʼn ruit halveer mekaar teen regte hoeke, dus is driehoek AOB reghoekig by O met skuinssy AB = 10 cm en een sy AO = 6 cm.\nOB² = AB² − AO² = 10² − 6² = 100 − 36 = 64\nOB = 8 cm\nAangesien die diagonaal gehalveer word, BD = 2 × OB = 2 × 8 = 16 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,90 110,150 185,90 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="90" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="150" x2="110" y2="30" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="25" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="168" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="195" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="22" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="58.5" y="126" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="72.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="128" y="120" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD het AB = 9 cm, BC = 6 cm, en hoek A = 70°. Hoek B is supplementêr tot hoek A. Bepaal die grootte van hoek C.', checkMode: 'auto', correctAnswer: '70°', correctAnswers: ['70°', '70'], answer: '70°', explanation: 'In ʼn parallelogram is oorstaande hoeke gelyk.\nHoek C is oorstaande hoek A, dus hoek C = hoek A = 70°.\n(Kontroleer: hoek B = 180° − 70° = 110°, en hoek D = hoek B = 110°, wat 70° + 110° + 70° + 110° = 360° gee ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="199" y="29" font-size="12" fill="#374151" font-weight="600">C</text><text x="60" y="29" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 62,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">70°</text><path d="M 179,37 A 16,16 0 0 1 187,51" fill="none" stroke="#ea580c" stroke-width="2"/><text x="165" y="57" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">6 cm</text></svg>' },

        // Blok 4 — Vlieër / trapesium ontbrekende waarde (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gelykbenige trapesium ABCD het AB ∥ CD, met AB = 6 cm en CD = 14 cm. Die gelyke bene AD = BC = 5 cm, en elke been strek 4 cm horisontaal verder as die korter parallelle sy. Bepaal die hoogte van die trapesium.', checkMode: 'auto', correctAnswer: '3cm', correctAnswers: ['3cm', '3 cm', '3'], answer: '3 cm', explanation: 'Laat ʼn loodlyn sak vanaf ʼn hoekpunt van die korter sy na die langer sy, wat ʼn reghoekige driehoek vorm met skuinssy (been) = 5 cm en basis = 4 cm.\nHoogte² = 5² − 4² = 25 − 16 = 9\nHoogte = √9 = 3 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="34,45 186,45 190,135 30,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="34" y1="45" x2="34" y2="135" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 34,123 L 46,123 L 46,135" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="24" y="39" font-size="12" fill="#374151" font-weight="600">A</text><text x="190" y="39" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="143" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="143" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="35" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="110" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">14 cm</text><text x="20" y="90" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">5 cm</text><text x="200" y="90" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="50" y="90" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Vlieër ABCD het diagonaal AC as sy simmetrie-as, wat diagonaal BD by O ontmoet. AO = 16 cm, OC = 5 cm, en OB = OD = 12 cm (die diagonale is loodreg). Bepaal die lengte van sy AB.', checkMode: 'auto', correctAnswer: '20cm', correctAnswers: ['20cm', '20 cm', '20'], answer: '20 cm', explanation: 'Aangesien die diagonale van ʼn vlieër loodreg is, is driehoek AOB reghoekig by O.\nAB² = AO² + OB² = 16² + 12² = 256 + 144 = 400\nAB = √400 = 20 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,78 115,150 193,78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="78" x2="193" y2="78" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,78 L 106,69 L 115,69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="92" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">16 cm</text><text x="123" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="76" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="56" y="47" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Met dieselfde vlieër ABCD (AO = 16 cm, OC = 5 cm, OB = OD = 12 cm, diagonale loodreg by O), bepaal die omtrek van die vlieër.', checkMode: 'auto', correctAnswer: '66cm', correctAnswers: ['66cm', '66 cm', '66'], answer: '66 cm', explanation: 'Sy AB = √(AO² + OB²) = √(16² + 12²) = √400 = 20 cm (dit is gelyk aan AD weens die vlieër se simmetrie).\nSy CB = √(OC² + OB²) = √(5² + 12²) = √169 = 13 cm (dit is gelyk aan CD weens die vlieër se simmetrie).\nOmtrek = AB + BC + CD + DA = 20 + 13 + 13 + 20 = 66 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,78 115,150 193,78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="78" x2="193" y2="78" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,78 L 106,69 L 115,69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="92" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">16 cm</text><text x="123" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">5 cm</text><text x="76" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="154" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text></svg>' },

        // Blok 5 — Alternatiewe definisies / vermoede-redenasie (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gee ʼn alternatiewe definisie van ʼn reghoek in terme van sy diagonale, in plaas van hoeke te gebruik.', answer: 'ʼn Reghoek kan gedefinieer word as ʼn parallelogram waarvan die diagonale gelyk in lengte is.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Bongani vermoed dat 'alle vierhoeke met twee pare aangrensende gelyke sye loodregte diagonale het'. Ondersoek of hierdie vermoede (die definisie van ʼn vlieër) altyd waar is.", answer: 'Ja — hierdie vermoede is waar en vorm deel van die standaardbewys dat vlieërs loodregte diagonale het. Aangesien AB = AD en CB = CD, is die hoofdiagonaal AC ʼn simmetrie-as, dus driehoek ABC ≡ driehoek ADC (SSS). Dit maak dat AO hoek BAD halveer, en dan driehoek ABO ≡ driehoek ADO (SHS), wat gelyke aangrensende hoeke by O gee wat optel tot 180° — wat elkeen dwing om 90° te wees.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Thandiwe sê 'ʼn vierhoek met een paar oorstaande hoeke gelyk is altyd ʼn parallelogram'. Vind ʼn teenvoorbeeld om dit te weerlê.", answer: 'ʼn Vlieër het tipies presies een paar oorstaande hoeke gelyk (die hoeke tussen die ongelyke sye), maar sy ander paar oorstaande hoeke is gewoonlik ongelyk, en sy sye is nie albei pare parallel nie — dus voldoen ʼn vlieër aan die een-paar-gelyke-hoeke-voorwaarde sonder om ʼn parallelogram te wees, wat die vermoede weerlê.', checkMode: 'self' },

        // Blok 6 — Gelykvormige driehoek eweredige sye (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat met DE ooreenstem en BC wat met EF ooreenstem. AB = 6 cm, BC = 9 cm, en DE = 9 cm. Bepaal die lengte van EF.', checkMode: 'auto', correctAnswer: '13,5cm', correctAnswers: ['13.5cm', '13,5cm', '13,5 cm', '13.5 cm', '13,5', '13.5'], answer: '13,5 cm', explanation: 'Die skaalfaktor van driehoek ABC na driehoek DEF = DE ÷ AB = 9 ÷ 6 = 1,5\nEF = BC × 1,5 = 9 × 1,5 = 13,5 cm', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">6 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">9 cm</text><polygon points="190,140 300,140 235,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="233" y="34" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="281.5" y="90" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 3 : 7. As die omtrek van die kleiner driehoek 24 cm is, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', correctAnswer: '56cm', correctAnswers: ['56cm', '56 cm', '56'], answer: '56 cm', explanation: 'Die verhouding van omtrekke is gelyk aan die verhouding van ooreenstemmende sye, 3 : 7.\nGroter omtrek = 24 × (7 ÷ 3) = 56 cm' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 4 : 81. Bepaal die verhouding van hulle ooreenstemmende sylengtes.', answer: 'Aangesien die oppervlakteverhouding gelyk is aan die kwadraat van die syverhouding, is die syverhouding = √4 : √81 = 2 : 9.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormigheid, kongruensie, spesiale vierhoek-eienskappe en bewysgebaseerde redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan weer deur enige gemiste vrae oor vierhoek-eienskappe of ontbrekende sy/hoek-berekeninge, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor spesiale vierhoeke en vermoede-toetsing, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Gelykvormigheid vs kongruensie klassifikasie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek PQR het hoeke 40°, 65°, 75°. Driehoek XYZ het hoeke 40°, 65°, 75° maar verskillende sylengtes. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', correctAnswer: 'gelykvormig', answer: 'gelykvormig', explanation: 'Die ooreenstemmende hoeke is gelyk, maar die sye verskil in lengte, dus is die driehoeke dieselfde vorm maar nie dieselfde grootte nie — dit is gelykvormigheid, nie kongruensie nie.' },
        { difficulty: 'Easy', question: 'Twee driehoeke het presies dieselfde drie sylengtes: 7 cm, 9 cm en 11 cm elk. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', correctAnswer: 'albei', answer: 'albei', explanation: 'Gelyke ooreenstemmende sye (SSS) beteken die driehoeke is kongruent. Kongruente driehoeke het outomaties ook gelyke hoeke, dus is hulle ook gelykvormig — die driehoeke is albei.' },
        { difficulty: 'Medium', question: 'Driehoek DEF het hoeke van 55° en 65°. Driehoek GHI het hoeke van 55° en 60°. Verduidelik of die twee driehoeke gelykvormig kan wees.', answer: 'Nee — die derde hoek van driehoek DEF is 180° − 55° − 65° = 60°, wat hoeke 55°, 65°, 60° gee. Die derde hoek van driehoek GHI is 180° − 55° − 60° = 65°, wat hoeke 55°, 60°, 65° gee. Albei driehoeke het eintlik dieselfde drie hoeke (55°, 60°, 65°), dus is hulle WEL gelykvormig — die verskillende volgorde waarin die hoeke gelys is, verander nie die driehoek nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Kagiso sê as twee driehoeke dieselfde omtrek het, moet hulle gelykvormig wees. Is hy korrek? Verduidelik met ʼn teenvoorbeeld.', answer: 'Nee — ʼn gelyksydige driehoek met sye 5 cm, 5 cm, 5 cm het omtrek 15 cm. ʼn Skalene driehoek met sye 3 cm, 5 cm, 7 cm het ook omtrek 15 cm. Hierdie driehoeke het heeltemal verskillende hoeke en sy-verhoudings, dus waarborg gelyke omtrek nie gelykvormigheid nie.', checkMode: 'self' },

        // Blok 2 — Spesiale vierhoek eienskap herroeping (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Gee een eienskap van die diagonale van ʼn ruit wat ʼn algemene parallelogram nie noodwendig het nie.', checkMode: 'auto', correctAnswer: 'die diagonale halveer mekaar teen regte hoeke', correctAnswers: ['die diagonale halveer mekaar teen regte hoeke', 'diagonale is loodreg', 'die diagonale is loodreg'], answer: 'die diagonale halveer mekaar teen regte hoeke', explanation: 'Beide ʼn ruit en ʼn algemene parallelogram het diagonale wat mekaar halveer, maar slegs ʼn ruit (weens sy vier gelyke sye) waarborg diagonale wat teen regte hoeke ontmoet.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het diagonale wat gelyk in lengte is. Stel of hierdie eienskap ook op ʼn algemene parallelogram van toepassing is, en verduidelik waarom of waarom nie.', answer: 'Nee — in ʼn algemene parallelogram halveer die diagonale mekaar, maar hulle is nie noodwendig gelyk in lengte nie. Gelyke diagonale kom slegs voor omdat ʼn reghoek vier regte hoeke het, wat die twee diagonale (elk die skuinssy van ʼn kongruente reghoekige driehoek gevorm met die sye) dwing om dieselfde lengte te wees. ʼn Parallelogram sonder regte hoeke het nie hierdie eienskap nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Verduidelik waarom elke ruit ook as ʼn parallelogram geklassifiseer word, deur die definisie van ʼn parallelogram (beide pare oorstaande sye parallel) te gebruik.', answer: 'ʼn Ruit word gedefinieer as ʼn parallelogram met al vier sye gelyk — dus voldoen dit reeds per definisie aan die parallelogramvereiste dat beide pare oorstaande sye parallel is. Die gelyke-sye-voorwaarde is bloot ʼn addisionele beperking bo-op die parallelogramdefinisie, wat ʼn ruit ʼn spesiale geval van ʼn parallelogram maak.', checkMode: 'self' },

        // Blok 3 — Parallelogram / reghoek / ruit ontbrekende waarde (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD is hoek A = 72°. Aangesien opeenvolgende hoeke in ʼn parallelogram supplementêr is, bepaal die grootte van hoek B.', checkMode: 'auto', correctAnswer: '108°', correctAnswers: ['108°', '108'], answer: '108°', explanation: 'Opeenvolgende (mede-binne) hoeke in ʼn parallelogram is supplementêr — hulle tel op tot 180°.\nHoek B = 180° − 72° = 108°' },
        { difficulty: 'Medium', question: 'Reghoek ABCD het lengte AB = 15 cm en breedte BC = 8 cm. Bepaal die lengte van diagonaal AC.', checkMode: 'auto', correctAnswer: '17cm', correctAnswers: ['17cm', '17 cm', '17'], answer: '17 cm', explanation: 'Die diagonaal van ʼn reghoek kan met die Stelling van Pythagoras bereken word, aangesien die sye teen 90° ontmoet.\nAC² = AB² + BC² = 15² + 8² = 225 + 64 = 289\nAC = √289 = 17 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Ruit ABCD het sylengte 13 cm. Sy diagonale halveer mekaar teen regte hoeke by punt O, met AO = OC = 5 cm. Bepaal die volle lengte van diagonaal BD.', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24 cm', '24'], answer: '24 cm', explanation: 'Die diagonale van ʼn ruit halveer mekaar teen regte hoeke, dus is driehoek AOB reghoekig by O met skuinssy AB = 13 cm en een sy AO = 5 cm.\nOB² = AB² − AO² = 13² − 5² = 169 − 25 = 144\nOB = 12 cm\nAangesien die diagonaal gehalveer word, BD = 2 × OB = 2 × 12 = 24 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,90 110,150 185,90 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="90" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="150" x2="110" y2="30" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="25" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="168" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="195" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="22" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="58.5" y="126" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">13 cm</text><text x="72.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="128" y="120" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD het AB = 10 cm, BC = 7 cm, en hoek A = 85°. Hoek B is supplementêr tot hoek A. Bepaal die grootte van hoek C.', checkMode: 'auto', correctAnswer: '85°', correctAnswers: ['85°', '85'], answer: '85°', explanation: 'In ʼn parallelogram is oorstaande hoeke gelyk.\nHoek C is oorstaande hoek A, dus hoek C = hoek A = 85°.\n(Kontroleer: hoek B = 180° − 85° = 95°, en hoek D = hoek B = 95°, wat 85° + 95° + 85° + 95° = 360° gee ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="199" y="29" font-size="12" fill="#374151" font-weight="600">C</text><text x="60" y="29" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 62,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">85°</text><path d="M 179,37 A 16,16 0 0 1 187,51" fill="none" stroke="#ea580c" stroke-width="2"/><text x="165" y="57" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">7 cm</text></svg>' },

        // Blok 4 — Vlieër / trapesium ontbrekende waarde (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gelykbenige trapesium ABCD het AB ∥ CD, met AB = 8 cm en CD = 20 cm. Die gelyke bene AD = BC = 10 cm, en elke been strek 6 cm horisontaal verder as die korter parallelle sy. Bepaal die hoogte van die trapesium.', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8 cm', '8'], answer: '8 cm', explanation: 'Laat ʼn loodlyn sak vanaf ʼn hoekpunt van die korter sy na die langer sy, wat ʼn reghoekige driehoek vorm met skuinssy (been) = 10 cm en basis = 6 cm.\nHoogte² = 10² − 6² = 100 − 36 = 64\nHoogte = √64 = 8 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="36,45 184,45 190,135 30,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="36" y1="45" x2="36" y2="135" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 36,123 L 48,123 L 48,135" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="26" y="39" font-size="12" fill="#374151" font-weight="600">A</text><text x="188" y="39" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="143" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="143" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="35" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="110" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="21" y="90" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">10 cm</text><text x="199" y="90" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><text x="52" y="90" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Vlieër ABCD het diagonaal AC as sy simmetrie-as, wat diagonaal BD by O ontmoet. AO = 8 cm, OC = 20 cm, en OB = OD = 15 cm (die diagonale is loodreg). Bepaal die lengte van sy AB.', checkMode: 'auto', correctAnswer: '17cm', correctAnswers: ['17cm', '17 cm', '17'], answer: '17 cm', explanation: 'Aangesien die diagonale van ʼn vlieër loodreg is, is driehoek AOB reghoekig by O.\nAB² = AO² + OB² = 8² + 15² = 64 + 225 = 289\nAB = √289 = 17 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,78 115,150 193,78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="78" x2="193" y2="78" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,78 L 106,69 L 115,69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="92" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="123" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">20 cm</text><text x="76" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="154" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="56" y="47" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Met dieselfde vlieër ABCD (AO = 8 cm, OC = 20 cm, OB = OD = 15 cm, diagonale loodreg by O), bepaal die omtrek van die vlieër.', checkMode: 'auto', correctAnswer: '84cm', correctAnswers: ['84cm', '84 cm', '84'], answer: '84 cm', explanation: 'Sy AB = √(AO² + OB²) = √(8² + 15²) = √289 = 17 cm (dit is gelyk aan AD weens die vlieër se simmetrie).\nSy CB = √(OC² + OB²) = √(20² + 15²) = √625 = 25 cm (dit is gelyk aan CD weens die vlieër se simmetrie).\nOmtrek = AB + BC + CD + DA = 17 + 25 + 25 + 17 = 84 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,78 115,150 193,78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="78" x2="193" y2="78" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,78 L 106,69 L 115,69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="92" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">8 cm</text><text x="123" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">20 cm</text><text x="76" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="154" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text></svg>' },

        // Blok 5 — Alternatiewe definisies / vermoede-redenasie (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gee ʼn alternatiewe definisie van ʼn ruit in terme van sy diagonale, in plaas van sylengtes te gebruik.', answer: 'ʼn Ruit kan gedefinieer word as ʼn vierhoek waarvan die diagonale mekaar teen regte hoeke halveer.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Palesa vermoed dat 'alle vierhoeke met twee pare aangrensende gelyke sye een diagonaal het wat die ander halveer'. Ondersoek of hierdie vermoede (ʼn eienskap van vlieërs) altyd waar is.", answer: 'Ja — hierdie vermoede is waar. Aangesien AB = AD en CB = CD, is driehoek ABC ≡ driehoek ADC (SSS) met AC as die gedeelde sy, dus is AC ʼn simmetrie-as. Hierdie simmetrie beteken diagonaal AC halveer diagonaal BD (aangesien B en D spieëlbeelde van mekaar oor AC is), alhoewel AC self nie noodwendig deur BD gehalveer word nie — slegs een diagonaal halveer die ander in ʼn algemene vlieër, nie albei nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Sizwe sê 'ʼn vierhoek met al vier sye gelyk is altyd ʼn vierkant'. Vind ʼn teenvoorbeeld om dit te weerlê.", answer: 'ʼn Ruit met hoeke 60° en 120° het al vier sye gelyk maar het nie regte hoeke nie, dus is dit nie ʼn vierkant nie. Dit toon dat gelyke sye alleen nie voldoende is om ʼn vierkant te waarborg nie — die vorm moet ook vier regte hoeke hê.', checkMode: 'self' },

        // Blok 6 — Gelykvormige driehoek eweredige sye (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat met DE ooreenstem en BC wat met EF ooreenstem. AB = 8 cm, BC = 10 cm, en DE = 12 cm. Bepaal die lengte van EF.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Die skaalfaktor van driehoek ABC na driehoek DEF = DE ÷ AB = 12 ÷ 8 = 1,5\nEF = BC × 1,5 = 10 × 1,5 = 15 cm', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">8 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">10 cm</text><polygon points="190,140 300,140 235,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="233" y="34" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="281.5" y="90" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 4 : 9. As die omtrek van die kleiner driehoek 32 cm is, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', correctAnswer: '72cm', correctAnswers: ['72cm', '72 cm', '72'], answer: '72 cm', explanation: 'Die verhouding van omtrekke is gelyk aan die verhouding van ooreenstemmende sye, 4 : 9.\nGroter omtrek = 32 × (9 ÷ 4) = 72 cm' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 9 : 100. Bepaal die verhouding van hulle ooreenstemmende sylengtes.', answer: 'Aangesien die oppervlakteverhouding gelyk is aan die kwadraat van die syverhouding, is die syverhouding = √9 : √100 = 3 : 10.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormigheid, kongruensie, spesiale vierhoek-eienskappe en bewysgebaseerde redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan weer deur enige gemiste vrae oor vierhoek-eienskappe of ontbrekende sy/hoek-berekeninge, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor spesiale vierhoeke en vermoede-toetsing, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Gelykvormigheid vs kongruensie klassifikasie (Easy/Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Driehoek PQR het hoeke 48°, 82°, 50°. Driehoek XYZ het hoeke 48°, 82°, 50° maar verskillende sylengtes. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', correctAnswer: 'gelykvormig', answer: 'gelykvormig', explanation: 'Die ooreenstemmende hoeke is gelyk, maar die sye verskil in lengte, dus is die driehoeke dieselfde vorm maar nie dieselfde grootte nie — dit is gelykvormigheid, nie kongruensie nie.' },
        { difficulty: 'Easy', question: 'Twee driehoeke het presies dieselfde drie sylengtes: 5 cm, 12 cm en 13 cm elk. Is die driehoeke gelykvormig, kongruent, of albei?', checkMode: 'auto', correctAnswer: 'albei', answer: 'albei', explanation: 'Gelyke ooreenstemmende sye (SSS) beteken die driehoeke is kongruent. Kongruente driehoeke het outomaties ook gelyke hoeke, dus is hulle ook gelykvormig — die driehoeke is albei.' },
        { difficulty: 'Medium', question: 'Driehoek DEF het hoeke van 48° en 82°. Driehoek GHI het hoeke van 48° en 50°. Verduidelik of die twee driehoeke gelykvormig kan wees.', answer: 'Nee — die derde hoek van driehoek DEF is 180° − 48° − 82° = 50°, wat hoeke 48°, 82°, 50° gee. Die derde hoek van driehoek GHI is 180° − 48° − 50° = 82°, wat hoeke 48°, 50°, 82° gee. Albei driehoeke het eintlik dieselfde drie hoeke (48°, 50°, 82°), dus is hulle WEL gelykvormig — die verskillende volgorde waarin die hoeke gelys is, verander nie die driehoek nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Zanele sê as twee reghoekige driehoeke dieselfde skuinssylengte het, moet hulle kongruent wees. Is sy korrek? Verduidelik met ʼn teenvoorbeeld.', answer: 'Nee — ʼn reghoekige driehoek met bene 6 cm en 8 cm het skuinssy 10 cm. ʼn Ander reghoekige driehoek kan ook gevorm word om ʼn skuinssy van 10 cm te hê met heeltemal ander beenlengtes, bv. bene van ongeveer 3,5 cm en 9,4 cm. Aangesien slegs die skuinssy ooreenstem, kan die bene en hoeke heeltemal verskil, dus waarborg gelyke skuinssy alleen nie kongruensie nie — SHS vereis ook een ander ooreenstemmende sy.', checkMode: 'self' },

        // Blok 2 — Spesiale vierhoek eienskap herroeping (Easy/Medium/Medium)
        { difficulty: 'Easy', question: 'Gee een eienskap van ʼn vierkant wat ʼn algemene reghoek nie noodwendig het nie.', checkMode: 'auto', correctAnswer: 'al vier sye is gelyk', correctAnswers: ['al vier sye is gelyk', 'vier gelyke sye', 'al die sye is gelyk'], answer: 'al vier sye is gelyk', explanation: 'Beide ʼn vierkant en ʼn algemene reghoek het vier regte hoeke en gelyke diagonale, maar slegs ʼn vierkant waarborg dat al vier sye gelyk in lengte is.' },
        { difficulty: 'Medium', question: 'ʼn Vlieër het een diagonaal wat as ʼn simmetrie-as dien. Stel of albei diagonale van ʼn vlieër altyd simmetrie-asse is, en verduidelik waarom of waarom nie.', answer: 'Nee — slegs die diagonaal wat die hoekpunte tussen die twee pare gelyke sye verbind (die hoofdiagonaal) is ʼn simmetrie-as. Die ander diagonaal is nie ʼn simmetrie-as nie, tensy die vlieër ook ʼn ruit is, omdat die twee driehoeke aan weerskante van die hoofdiagonaal spieëlbeelde is, maar die twee driehoeke aan weerskante van die ander diagonaal nie kongruent is in ʼn algemene vlieër nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Verduidelik waarom elke reghoek ook as ʼn parallelogram geklassifiseer word, deur die definisie van ʼn parallelogram (beide pare oorstaande sye parallel) te gebruik.', answer: 'ʼn Reghoek word gedefinieer as ʼn parallelogram met vier regte hoeke — dus voldoen dit reeds per definisie aan die parallelogramvereiste dat beide pare oorstaande sye parallel is. Die regte-hoek-voorwaarde is bloot ʼn addisionele beperking bo-op die parallelogramdefinisie, wat ʼn reghoek ʼn spesiale geval van ʼn parallelogram maak.', checkMode: 'self' },

        // Blok 3 — Parallelogram / reghoek / ruit ontbrekende waarde (Easy/Medium/Medium/Hard)
        { difficulty: 'Easy', question: 'In parallelogram ABCD is hoek A = 105°. Aangesien opeenvolgende hoeke in ʼn parallelogram supplementêr is, bepaal die grootte van hoek B.', checkMode: 'auto', correctAnswer: '75°', correctAnswers: ['75°', '75'], answer: '75°', explanation: 'Opeenvolgende (mede-binne) hoeke in ʼn parallelogram is supplementêr — hulle tel op tot 180°.\nHoek B = 180° − 105° = 75°' },
        { difficulty: 'Medium', question: 'Reghoek ABCD het lengte AB = 9 cm en breedte BC = 12 cm. Bepaal die lengte van diagonaal AC.', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15 cm', '15'], answer: '15 cm', explanation: 'Die diagonaal van ʼn reghoek kan met die Stelling van Pythagoras bereken word, aangesien die sye teen 90° ontmoet.\nAC² = AB² + BC² = 9² + 12² = 81 + 144 = 225\nAC = √225 = 15 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="50" width="160" height="90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="140" x2="190" y2="50" stroke="#ea580c" stroke-width="2"/><path d="M 30,128 L 42,128 L 42,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,128 L 178,128 L 178,140" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 30,62 L 42,62 L 42,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><path d="M 190,62 L 178,62 L 178,50" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="20" y="154" font-size="12" fill="#374151" font-weight="600">A</text><text x="194" y="154" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="44" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="44" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="156" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="206" y="95" font-size="14" fill="#2563eb" font-weight="700" text-anchor="middle">12 cm</text><text x="124" y="89" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Medium', question: 'Ruit ABCD het sylengte 15 cm. Sy diagonale halveer mekaar teen regte hoeke by punt O, met AO = OC = 9 cm. Bepaal die volle lengte van diagonaal BD.', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24 cm', '24'], answer: '24 cm', explanation: 'Die diagonale van ʼn ruit halveer mekaar teen regte hoeke, dus is driehoek AOB reghoekig by O met skuinssy AB = 15 cm en een sy AO = 9 cm.\nOB² = AB² − AO² = 15² − 9² = 225 − 81 = 144\nOB = 12 cm\nAangesien die diagonaal gehalveer word, BD = 2 × OB = 2 × 12 = 24 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="35,90 110,150 185,90 110,30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="90" x2="185" y2="90" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="110" y1="150" x2="110" y2="30" stroke="#ea580c" stroke-width="2" stroke-dasharray="4,3"/><path d="M 100,90 L 100,80 L 110,80" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="25" y="94" font-size="12" fill="#374151" font-weight="600">A</text><text x="110" y="168" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">B</text><text x="195" y="94" font-size="12" fill="#374151" font-weight="600">C</text><text x="110" y="22" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">D</text><text x="118" y="74" font-size="11" fill="#374151" font-weight="600">O</text><text x="58.5" y="126" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="72.5" y="106" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">9 cm</text><text x="128" y="120" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Parallelogram ABCD het AB = 11 cm, BC = 8 cm, en hoek A = 95°. Hoek B is supplementêr tot hoek A. Bepaal die grootte van hoek C.', checkMode: 'auto', correctAnswer: '95°', correctAnswers: ['95°', '95'], answer: '95°', explanation: 'In ʼn parallelogram is oorstaande hoeke gelyk.\nHoek C is oorstaande hoek A, dus hoek C = hoek A = 95°.\n(Kontroleer: hoek B = 180° − 95° = 85°, en hoek D = hoek B = 85°, wat 95° + 85° + 95° + 85° = 360° gee ✓)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="40,135 165,135 195,35 70,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="30" y="143" font-size="12" fill="#374151" font-weight="600">A</text><text x="169" y="143" font-size="12" fill="#374151" font-weight="600">B</text><text x="199" y="29" font-size="12" fill="#374151" font-weight="600">C</text><text x="60" y="29" font-size="12" fill="#374151" font-weight="600">D</text><path d="M 68,135 A 28,28 0 0 1 62,116" fill="none" stroke="#2563eb" stroke-width="2"/><text x="74" y="125" font-size="13" fill="#2563eb" font-weight="700">95°</text><path d="M 179,37 A 16,16 0 0 1 187,51" fill="none" stroke="#ea580c" stroke-width="2"/><text x="165" y="57" font-size="13" fill="#ea580c" font-weight="700">?</text><text x="102.5" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">11 cm</text><text x="34" y="85" font-size="13" fill="#2563eb" font-weight="700" text-anchor="end">8 cm</text></svg>' },

        // Blok 4 — Vlieër / trapesium ontbrekende waarde (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gelykbenige trapesium ABCD het AB ∥ CD, met AB = 10 cm en CD = 28 cm. Die gelyke bene AD = BC = 15 cm, en elke been strek 9 cm horisontaal verder as die korter parallelle sy. Bepaal die hoogte van die trapesium.', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12 cm', '12'], answer: '12 cm', explanation: 'Laat ʼn loodlyn sak vanaf ʼn hoekpunt van die korter sy na die langer sy, wat ʼn reghoekige driehoek vorm met skuinssy (been) = 15 cm en basis = 9 cm.\nHoogte² = 15² − 9² = 225 − 81 = 144\nHoogte = √144 = 12 cm', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="39,45 181,45 190,135 30,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="39" y1="45" x2="39" y2="135" stroke="#ea580c" stroke-width="2" stroke-dasharray="3,3"/><path d="M 39,123 L 51,123 L 51,135" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="29" y="39" font-size="12" fill="#374151" font-weight="600">A</text><text x="185" y="39" font-size="12" fill="#374151" font-weight="600">B</text><text x="194" y="143" font-size="12" fill="#374151" font-weight="600">C</text><text x="20" y="143" font-size="12" fill="#374151" font-weight="600">D</text><text x="110" y="35" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">10 cm</text><text x="110" y="153" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">28 cm</text><text x="22.5" y="90" font-size="12" fill="#2563eb" font-weight="700" text-anchor="end">15 cm</text><text x="197.5" y="90" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="55" y="90" font-size="14" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Vlieër ABCD het diagonaal AC as sy simmetrie-as, wat diagonaal BD by O ontmoet. AO = 15 cm, OC = 21 cm, en OB = OD = 20 cm (die diagonale is loodreg). Bepaal die lengte van sy AB.', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25 cm', '25'], answer: '25 cm', explanation: 'Aangesien die diagonale van ʼn vlieër loodreg is, is driehoek AOB reghoekig by O.\nAB² = AO² + OB² = 15² + 20² = 225 + 400 = 625\nAB = √625 = 25 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,78 115,150 193,78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="78" x2="193" y2="78" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,78 L 106,69 L 115,69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="92" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="123" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">21 cm</text><text x="76" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="154" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="56" y="47" font-size="15" fill="#ea580c" font-weight="700" text-anchor="middle">?</text></svg>' },
        { difficulty: 'Hard', question: 'Met dieselfde vlieër ABCD (AO = 15 cm, OC = 21 cm, OB = OD = 20 cm, diagonale loodreg by O), bepaal die omtrek van die vlieër.', checkMode: 'auto', correctAnswer: '108cm', correctAnswers: ['108cm', '108 cm', '108'], answer: '108 cm', explanation: 'Sy AB = √(AO² + OB²) = √(15² + 20²) = √625 = 25 cm (dit is gelyk aan AD weens die vlieër se simmetrie).\nSy CB = √(OC² + OB²) = √(21² + 20²) = √841 = 29 cm (dit is gelyk aan CD weens die vlieër se simmetrie).\nOmtrek = AB + BC + CD + DA = 25 + 29 + 29 + 25 = 108 cm', diagramSvg: '<svg viewBox="0 0 240 170" xmlns="http://www.w3.org/2000/svg"><polygon points="115,20 37,78 115,150 193,78" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="115" y1="20" x2="115" y2="150" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="37" y1="78" x2="193" y2="78" stroke="#0f1f3d" stroke-width="1.5" stroke-dasharray="4,3"/><path d="M 106,78 L 106,69 L 115,69" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="115" y="12" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">A</text><text x="29" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="end">B</text><text x="115" y="166" font-size="12" fill="#374151" font-weight="600" text-anchor="middle">C</text><text x="201" y="72" font-size="12" fill="#374151" font-weight="600" text-anchor="start">D</text><text x="123" y="92" font-size="11" fill="#374151" font-weight="600">O</text><text x="123" y="49" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">15 cm</text><text x="123" y="118" font-size="12" fill="#2563eb" font-weight="700" text-anchor="start">21 cm</text><text x="76" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text><text x="154" y="68" font-size="12" fill="#2563eb" font-weight="700" text-anchor="middle">20 cm</text></svg>' },

        // Blok 5 — Alternatiewe definisies / vermoede-redenasie (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Gee ʼn alternatiewe definisie van ʼn parallelogram in terme van sy diagonale, in plaas van sye of hoeke te gebruik.', answer: 'ʼn Parallelogram kan gedefinieer word as ʼn vierhoek waarvan die diagonale mekaar halveer.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Mpho vermoed dat 'alle vierhoeke met twee pare aangrensende gelyke sye presies een paar oorstaande hoeke gelyk het'. Ondersoek of hierdie vermoede (ʼn eienskap van vlieërs) altyd waar is.", answer: 'Ja — hierdie vermoede is waar. Aangesien AB = AD en CB = CD, is driehoek ABC ≡ driehoek ADC (SSS), dus hoek B = hoek D (die hoeke tussen die ongelyke sye is gelyk). Die ander paar oorstaande hoeke, by A en C, is oor die algemeen NIE gelyk nie, tensy die vlieër ook ʼn ruit is, wat bevestig dat presies een paar oorstaande hoeke gelyk is in ʼn algemene vlieër.', checkMode: 'self' },
        { difficulty: 'Hard', question: "Katlego sê 'ʼn vierhoek met diagonale van gelyke lengte is altyd ʼn reghoek'. Vind ʼn teenvoorbeeld om dit te weerlê.", answer: 'ʼn Gelykbenige trapesium het diagonale van gelyke lengte (ʼn bekende eienskap), maar dit is nie ʼn reghoek nie aangesien dit slegs een paar parallelle sye het en nie vier regte hoeke het nie. Dit toon dat gelyke diagonale alleen nie voldoende is om ʼn reghoek te waarborg nie.', checkMode: 'self' },

        // Blok 6 — Gelykvormige driehoek eweredige sye (Medium/Hard/Hard)
        { difficulty: 'Medium', question: 'Driehoek ABC is gelykvormig aan driehoek DEF, met AB wat met DE ooreenstem en BC wat met EF ooreenstem. AB = 5 cm, BC = 7 cm, en DE = 15 cm. Bepaal die lengte van EF.', checkMode: 'auto', correctAnswer: '21cm', correctAnswers: ['21cm', '21 cm', '21'], answer: '21 cm', explanation: 'Die skaalfaktor van driehoek ABC na driehoek DEF = DE ÷ AB = 15 ÷ 5 = 3\nEF = BC × 3 = 7 × 3 = 21 cm', diagramSvg: '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg"><polygon points="30,140 120,140 70,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="20" y="150" font-size="12" fill="#374151" font-weight="600">A</text><text x="124" y="150" font-size="12" fill="#374151" font-weight="600">B</text><text x="68" y="34" font-size="12" fill="#374151" font-weight="600">C</text><text x="75" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">5 cm</text><text x="109" y="90" font-size="13" fill="#2563eb" font-weight="700" text-anchor="start">7 cm</text><polygon points="190,140 300,140 235,40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="180" y="150" font-size="12" fill="#374151" font-weight="600">D</text><text x="304" y="150" font-size="12" fill="#374151" font-weight="600">E</text><text x="233" y="34" font-size="12" fill="#374151" font-weight="600">F</text><text x="245" y="158" font-size="13" fill="#2563eb" font-weight="700" text-anchor="middle">15 cm</text><text x="281.5" y="90" font-size="13" fill="#ea580c" font-weight="700" text-anchor="start">?</text></svg>' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het ooreenstemmende sye in die verhouding 5 : 8. As die omtrek van die kleiner driehoek 40 cm is, bepaal die omtrek van die groter driehoek.', checkMode: 'auto', correctAnswer: '64cm', correctAnswers: ['64cm', '64 cm', '64'], answer: '64 cm', explanation: 'Die verhouding van omtrekke is gelyk aan die verhouding van ooreenstemmende sye, 5 : 8.\nGroter omtrek = 40 × (8 ÷ 5) = 64 cm' },
        { difficulty: 'Hard', question: 'Twee gelykvormige driehoeke het oppervlaktes in die verhouding 25 : 64. Bepaal die verhouding van hulle ooreenstemmende sylengtes.', answer: 'Aangesien die oppervlakteverhouding gelyk is aan die kwadraat van die syverhouding, is die syverhouding = √25 : √64 = 5 : 8.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het gelykvormigheid, kongruensie, spesiale vierhoek-eienskappe en bewysgebaseerde redenasie bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan weer deur enige gemiste vrae oor vierhoek-eienskappe of ontbrekende sy/hoek-berekeninge, en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan weer deur die uitgewerkte voorbeelde oor spesiale vierhoeke en vermoede-toetsing, en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
