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
  subject: 'Mathematics',
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
        '<VideoPlaceholder label="Short video explaining the difference between similar and congruent triangles using matching angles and proportional sides with colour coded diagrams" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Side by side diagram showing two similar triangles with matching angles highlighted blue and proportional sides labelled orange versus two congruent triangles with identical sides highlighted green" />',
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
            `${re('Teenvoorbeeld:')} ʼn Parallelogram met hoekpunte by (0,0), (4,0), (5,2), (1,2) het diagonale met lengte √29 ≈ 5.39 en √13 ≈ 3.61 — hulle is NIE gelyk nie.`,
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
        '<VideoPlaceholder label="Short video investigating the properties of special quadrilaterals including sides angles and diagonals with colour coded proof steps and counter-examples" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Hierarchy diagram showing the relationships between special quadrilaterals from parallelogram down to rectangle rhombus and square with key properties labelled blue and counter-examples highlighted red" />',
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
        '<VideoPlaceholder label="Short video explaining how standard and alternative definitions of special quadrilaterals are proven to be equivalent using geometric reasoning" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a rhombus with the standard definition labelled blue and the alternative diagonal bisecting at right angles definition labelled orange with proof connecting them labelled green" />',
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
            `${re('Teenvoorbeeld:')} Trapesium met A(0,0), B(6,0), C(5,3), D(1,3). Diagonaal AC = √(25+9) = √34 ≈ 5.83. Diagonaal BD = √(25+9) = ... kom ons herbereken: BD van (6,0) na (1,3) = √(25+9) = √34. Probeer eerder D(2,3): AC van (0,0) na (5,3) = √34 ≈ 5.83; BD van (6,0) na (2,3) = √(16+9) = 5. Hierdie is ongelyk.`,
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
        '<VideoPlaceholder label="Short video demonstrating how to state test and either prove or disprove geometric conjectures about quadrilaterals using counter-examples and logical proofs" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a conjecture stated in blue tested with examples in orange leading to either a counter-example highlighted red or a formal proof highlighted green" />',
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
}
