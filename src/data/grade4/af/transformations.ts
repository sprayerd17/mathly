import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Saamgestelde Vorms en Tessellasie',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — BUILDING COMPOSITE SHAPES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'building-composite-shapes',
      title: 'Saamgestelde Vorms Bou',
      icon: '🧩',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Saamgestelde vorm</strong> is ʼn nuwe vorm wat gemaak word deur <strong>twee of meer basiese vorms</strong> bymekaar te sit. Net soos legkaartstukkies inmekaar pas om ʼn prentjie te maak, kan eenvoudige vorms soos driehoeke, vierkante, reghoeke en sirkels gekombineer word om ʼn saamgestelde vorm te bou.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Sleutelreël 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Wanneer basiese vorms saam aangesit word, moet hulle <strong>sye presies raak</strong> — met geen gapings en geen oorvleueling nie. Die basiese vorms verdwyn nie; hulle is steeds daar, net saamgevoeg om ʼn groter, nuwe vorm te maak.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Regte-lewe-voorbeelde 🌍</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">Huis</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">ʼn <strong>Driehoek</strong> (die dak) wat bo-op ʼn <strong>vierkant</strong> (die mure) sit.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">Pyl</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">ʼn <strong>Driehoek</strong> (die punt) wat aan ʼn <strong>reghoek</strong> (die skag) vasgemaak is.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:4px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:80px;text-align:center;">Roomys</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">ʼn <strong>Sirkel</strong> (die skepbal) wat bo-op ʼn <strong>driehoek</strong> (die horinkie) sit.</span>
    </div>
  </div>
</div>

<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
  <div style="display:flex;flex-direction:column;align-items:center;">
    <div style="width:0;height:0;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:35px solid #fca5a5;"></div>
    <div style="width:70px;height:50px;background:#93c5fd;border:2px solid #1e40af;"></div>
  </div>
  <span style="font-size:20px;color:#374151;">=</span>
  <span style="color:#374151;font-size:15px;">1 driehoek + 1 vierkant = ʼn huisvormige saamgestelde vorm</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die basiese vorms binne-in ʼn saamgestelde vorm vind</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Kyk vir <strong>reguit rande</strong> waar twee vorms ontmoet — dit is dikwels waar een basiese vorm eindig en ʼn ander begin.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Noem elke basiese vorm wat jy kan sien — byvoorbeeld "driehoek" en "vierkant".</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Tel hoeveel van elke basiese vorm gebruik is om die saamgestelde vorm te bou.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Kyk na ʼn prentjie van ʼn boot: ʼn driehoek (die seil) sit bo-op ʼn reghoek (die boot se romp bo-oor), wat bo-op ʼn halfsirkel (die romp onder) sit. Watter basiese vorms maak hierdie saamgestelde vorm op?',
          steps: [
            'Kyk vir reguit rande wat die vorms van mekaar skei.',
            'Die seil is ʼn <strong style="color:#dc2626;">driehoek</strong>.',
            'Die liggaam van die boot is ʼn <strong style="color:#1e40af;">reghoek</strong>.',
            'Die romp (onderkant) is ʼn <strong style="color:#16a34a;">halfsirkel</strong> (die helfte van ʼn sirkel).',
          ],
          answer: 'Die boot is gemaak van 1 driehoek, 1 reghoek en 1 halfsirkel.',
        },
        {
          question: 'Thabo bou ʼn robotprentjie met 1 vierkant (die kop), 1 reghoek (die lyf) en 2 klein sirkels (die oë). Hoeveel basiese vorms het Thabo altesaam gebruik?',
          steps: [
            'Tel elke basiese vorm een op ʼn slag: 1 vierkant, 1 reghoek, en 2 sirkels.',
            'Tel dit bymekaar: 1 + 1 + 2 = 4.',
          ],
          answer: 'Thabo het altesaam 4 basiese vorms gebruik.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat eenvoudige prentjies (ʼn huis, ʼn pyl, ʼn roomyshorinkie) wys wat uit basiese 2D-vorms saam gebou word, met elke basiese vorm in ʼn ander kleur uitgelig',
      diagramPlaceholder:
        'ʼn Saamgestelde-vorm-prentjie van ʼn boot gemaak van ʼn driehoekseil, ʼn reghoeklyf en ʼn halfsirkelromp, met elke basiese vorm in ʼn ander kleur omlyn en gemerk',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — COMPOSITE SHAPES WITH LINE SYMMETRY
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'composite-shapes-line-symmetry',
      title: 'Saamgestelde Vorms met Simmetrielyn',
      icon: '🪞',
      explanation: `
<p style="margin-bottom:14px;">Jy weet al dat ʼn vorm <strong>simmetries</strong> is as jy dit in die helfte kan vou sodat albei kante presies pas. Wanneer ons ʼn saamgestelde vorm noukeurig bou, kan die klaargemaakte vorm ook ʼn simmetrielyn hê — al is dit gemaak van aparte basiese vorms wat saamgevoeg is.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Sleutelreël 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Om ʼn <strong>simmetriese saamgestelde vorm</strong> te bou, rangskik die basiese vorms sodat die een helfte die <strong>spieëlbeeld</strong> van die ander helfte is. Om twee identiese vorms so te plaas dat hulle mekaar spieël, is die maklikste manier om dit te doen.</p>
</div>

<div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-bottom:16px;">
  <div style="display:flex;align-items:center;">
    <div style="width:0;height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-right:45px solid #93c5fd;"></div>
    <div style="width:3px;height:60px;background:#dc2626;"></div>
    <div style="width:0;height:0;border-top:30px solid transparent;border-bottom:30px solid transparent;border-left:45px solid #93c5fd;"></div>
  </div>
  <span style="color:#374151;font-size:15px;">Twee identiese driehoeke wat rug-aan-rug geplaas is, maak ʼn simmetriese diamant, met die <span style="color:#dc2626;font-weight:700;">rooi lyn</span> as die simmetrielyn.</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">ʼn Saamgestelde vorm vir simmetrie kontroleer</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Verbeel jou dat jy die hele saamgestelde vorm langs ʼn lyn vou, net soos die <strong>vou-toets</strong> wat jy al ken.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">As <strong>elke basiese vorm</strong> op die een kant met ʼn basiese vorm aan die ander kant ooreenstem, is die saamgestelde vorm simmetries.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">As selfs <strong>een</strong> vorm sy passende maat aan die ander kant kortkom, is die saamgestelde vorm <span style="color:#dc2626;font-weight:700;">nie</span> simmetries langs daardie lyn nie.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 20px;margin-bottom:8px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Simmetriese teenoor nie-simmetriese saamgestelde vorms</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Simmetries</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;">ʼn Huisvorm (ʼn driehoekdak presies gesentreer bo-op ʼn vierkant) — as jy in die middel vou, pas albei kante.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:180px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Nie simmetries nie</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;">ʼn Pylvorm (ʼn driehoek aan een punt van ʼn reghoek vasgemaak) — as jy in die middel vou, pas dit nie, aangesien die driehoek net aan een kant is.</div>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Lerato bou ʼn saamgestelde vorm van ʼn vierkant met een identiese klein driehoek wat net aan die boonste linkerhoek vasgemaak is. Is haar saamgestelde vorm simmetries?',
          steps: [
            'Verbeel jou dat jy die saamgestelde vorm in die middel vou.',
            'Die driehoek is net aan die <strong>linkerkant</strong> — daar is geen passende driehoek aan die regterkant nie.',
            'Aangesien die twee helftes nie ooreenstem nie, is die saamgestelde vorm nie simmetries nie.',
          ],
          answer: 'Nee — Lerato se saamgestelde vorm is nie simmetries nie, want die driehoek verskyn net aan een kant.',
        },
        {
          question: 'Sipho plaas twee identiese halfsirkels, met hul plat kante aan mekaar rakend, om ʼn volle sirkel te vorm. Is hierdie saamgestelde vorm simmetries?',
          steps: [
            'ʼn Volle sirkel kan langs <strong>enige</strong> lyn deur sy middelpunt gevou word en albei helftes sal altyd ooreenstem.',
            'Aangesien die twee halfsirkels identies is en so geplaas is dat hulle mekaar spieël, stem elke vou deur die middelpunt ooreen.',
          ],
          answer: 'Ja — hierdie saamgestelde vorm (ʼn volle sirkel) is simmetries, en dit het eintlik baie simmetrielyne.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe twee identiese driehoeke rug-aan-rug geplaas word om ʼn simmetriese diamantvorm te bou, met die simmetrielyn in rooi in die middel geteken',
      diagramPlaceholder:
        'Diagramme langs mekaar wat ʼn simmetriese saamgestelde huisvorm (ʼn driehoek gesentreer op ʼn vierkant) met ʼn nie-simmetriese saamgestelde pylvorm (ʼn driehoek net aan een punt van ʼn reghoek) vergelyk',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — TESSELLATING PATTERNS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'tessellating-patterns',
      title: 'Tessellerende Patrone',
      icon: '🔲',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>Tessellasie</strong> is ʼn patroon wat gemaak word deur vorms oor en oor te herhaal sodat hulle ʼn plat oppervlak heeltemal bedek, met <strong>geen gapings</strong> en <strong>geen oorvleueling</strong> nie. Jy sien tessellasies elke dag — vloerteëls, baksteenmure en heuningkoek is almal voorbeelde.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Sleutelreël 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">ʼn Vorm <strong>tesseleer</strong> as kopieë daarvan perfek inmekaar pas, rand-aan-rand, om ʼn oppervlak te bedek sonder om enige gapings te laat en sonder dat enige vorms met mekaar oorvleuel.</p>
</div>

<div style="display:flex;align-items:center;gap:0;flex-wrap:wrap;margin-bottom:16px;">
  <div style="width:40px;height:40px;background:#93c5fd;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#bfdbfe;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#93c5fd;border:2px solid #1e40af;"></div>
  <div style="width:40px;height:40px;background:#bfdbfe;border:2px solid #1e40af;"></div>
  <span style="margin-left:16px;color:#374151;font-size:15px;">Vierkante tesseleer perfek in ʼn ry — geen gapings, geen oorvleueling nie.</span>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Watter vorms tesseleer op hul eie?</div>
  <div style="display:flex;flex-wrap:wrap;gap:12px;">
    <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:8px;padding:12px 16px;flex:1;min-width:200px;">
      <div style="font-size:15px;font-weight:700;color:#15803d;margin-bottom:6px;">✓ Tesseleer</div>
      <div style="color:#14532d;font-size:14px;line-height:1.7;"><strong>Vierkante</strong>, <strong>reghoeke</strong>, <strong>gelyksydige driehoeke</strong> en <strong>reëlmatige seshoeke</strong> — hul hoeke pas presies om ʼn punt inmekaar.</div>
    </div>
    <div style="background:#fef2f2;border:1.5px solid #fca5a5;border-radius:8px;padding:12px 16px;flex:1;min-width:200px;">
      <div style="font-size:15px;font-weight:700;color:#dc2626;margin-bottom:6px;">✗ Tesseleer Nie (alleen)</div>
      <div style="color:#7f1d1d;font-size:14px;line-height:1.7;"><strong>Sirkels</strong> en <strong>reëlmatige vyfhoeke</strong> laat altyd gapings tussen hulle, ongeag hoe hulle gerangskik word.</div>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Regte-lewe-voorbeelde 🌍</div>
  <ul style="margin-top:0;margin-bottom:0;padding-left:20px;color:#1e3a8a;line-height:2;">
    <li><strong>Vloer- en muurteëls:</strong> gewoonlik vierkantige of reghoekige teëls wat oor ʼn vloer tesseleer</li>
    <li><strong>ʼn Heuningkoek:</strong> bye bou seshoekvormige selle wat perfek tesseleer met geen gapings nie</li>
    <li><strong>ʼn Baksteenmuur:</strong> reghoekige bakstene tesseleer in rye, dikwels halfpad oorvleuel vir sterkte</li>
  </ul>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Hoe om te toets of ʼn vorm tesseleer</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">Teken of verbeel verskeie kopieë van die vorm wat rand-aan-rand inmekaar pas. As jy die patroon in elke rigting kan bly herhaal sonder dat <strong>enige gapings</strong> êrens verskyn, tesseleer die vorm.</p>
</div>
`,
      workedExamples: [
        {
          question: 'Tesseleer ʼn reëlmatige seshoek op sy eie?',
          steps: [
            'Verbeel jou verskeie seshoeke rand-aan-rand geplaas, soos die selle van ʼn heuningkoek.',
            'Elke hoek van ʼn reëlmatige seshoek is 120°, en 3 seshoeke wat by ʼn punt ontmoet, maak 120° + 120° + 120° = 360° — ʼn volle draai, met geen gaping nie.',
            'Aangesien die seshoeke perfek rondom elke punt inmekaar pas, kan die patroon vir ewig in elke rigting herhaal sonder gapings.',
          ],
          answer: 'Ja — ʼn reëlmatige seshoek tesseleer op sy eie, net soos die heuningkoekpatroon wat bye bou.',
        },
        {
          question: 'Amahle probeer sirkels tesseleer deur hulle in rye te plaas, met elke sirkel wat sy bure raak. Tesseleer dit?',
          steps: [
            'Kyk na die spasies tussen die sirkels waar hulle raak.',
            'Geboë vorms soos sirkels laat altyd klein geboë gapings tussen hulle, ongeag hoe hulle gerangskik word.',
            'Aangesien daar gapings is, bedek die sirkels nie die oppervlak heeltemal nie.',
          ],
          answer: 'Nee — sirkels tesseleer nie. Daar sal altyd klein gapings tussen die sirkels oorbly.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat vierkante, driehoeke en seshoeke wys wat perfek oor ʼn oppervlak tesseleer, gevolg deur ʼn voorbeeld van sirkels wat nie tesseleer nie weens die gapings wat tussen hulle oorbly',
      diagramPlaceholder:
        'ʼn Rooster wat ʼn perfekte vierkant-tessellasie met geen gapings vergelyk met ʼn mislukte sirkel-tessellasie wat geboë gapings tussen elke sirkel wys',
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — GRONDSLAE: BASIESE VORMS IDENTIFISEER EN TEL (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Saamgestelde Vorms Bou',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Huisprentjie is gemaak van 1 driehoek (die dak) en 1 vierkant (die mure). Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: '1 driehoek + 1 vierkant = 2 basiese vorms altesaam ✓' },
        { difficulty: 'Easy', question: 'ʼn Roomysprentjie is gemaak van 1 sirkel (die skepbal) en 1 driehoek (die horinkie). Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: '1 sirkel + 1 driehoek = 2 basiese vorms ✓' },
        { difficulty: 'Easy', question: 'ʼn Pylprentjie is gemaak van 1 driehoek (die punt) en 1 reghoek (die skag). Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: '1 driehoek + 1 reghoek = 2 basiese vorms ✓' },
        { difficulty: 'Easy', question: 'ʼn Bootprentjie is gemaak van 1 driehoek (die seil), 1 reghoek (die romp) en 1 halfsirkel (die onderromp). Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: '1 driehoek + 1 reghoek + 1 halfsirkel = 3 basiese vorms ✓' },
        { difficulty: 'Easy', question: 'ʼn Sneeupopprentjie is gemaak van 3 sirkels, bo-op mekaar gestapel. Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Die sneeupop gebruik altesaam 3 sirkels ✓' },
        { difficulty: 'Easy', question: 'ʼn Blomprentjie is gemaak van 5 identiese blomblare (elkeen ʼn sirkel) rondom 1 sirkel in die middel. Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: '5 blomblaar-sirkels + 1 middelsirkel = 6 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Robotprentjie is gebou van 1 vierkant (kop), 1 reghoek (lyf), 2 klein sirkels (oë) en 2 reghoeke (arms). Hoeveel basiese vorms is altesaam gebruik?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: '1 vierkant + 1 reghoek + 2 sirkels + 2 reghoeke = 6 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Vuurpylprentjie is gemaak van 1 driehoek (neuskeël), 1 reghoek (lyf) en 2 klein driehoeke (vinne). Hoeveel basiese vorms is altesaam gebruik?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: '1 driehoek + 1 reghoek + 2 driehoeke = 4 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Visprentjie is gemaak van 1 sirkel (lyf), 1 driehoek (stert) en 1 klein driehoek (vin). Hoeveel basiese vorms is altesaam gebruik?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: '1 sirkel + 1 driehoek + 1 driehoek = 3 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Treinprentjie is gemaak van 3 reghoeke (die waens) en 4 sirkels (die wiele). Hoeveel basiese vorms is altesaam gebruik?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'sewe'], explanation: '3 reghoeke + 4 sirkels = 7 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Ruspeerprentjie is gemaak van 6 sirkels vir die lyf en 2 klein driehoeke vir voelhorings. Hoeveel basiese vorms is altesaam gebruik?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: '6 sirkels + 2 driehoeke = 8 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Huisprentjie is gemaak van 1 driehoek (dak), 1 vierkant (mure), 1 reghoek (deur) en 2 vierkante (vensters). Hoeveel basiese vorms is altesaam gebruik?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: '1 driehoek + 1 vierkant + 1 reghoek + 2 vierkante = 5 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Motorprentjie is gemaak van 1 reghoek (die lyf), 2 sirkels (die wiele) en 1 vierkant (die venster). Hoeveel basiese vorms is altesaam gebruik?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: '1 reghoek + 2 sirkels + 1 vierkant = 4 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoenlapperprentjie is gemaak van 4 sirkels (die vlerke) en 1 reghoek (die lyf). Hoeveel basiese vorms is altesaam gebruik?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: '4 sirkels + 1 reghoek = 5 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm genaamd ʼn "verkeerslig" is gemaak van 1 reghoek (die boks) en 3 sirkels (die ligte). Hoeveel basiese vorms is altesaam gebruik?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: '1 reghoek + 3 sirkels = 4 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Prentjie van ʼn eenvoudige persoon is gemaak van 1 sirkel (kop), 1 reghoek (lyf), 2 reghoeke (arms) en 2 reghoeke (bene). Hoeveel basiese vorms is altesaam gebruik?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: '1 sirkel + 1 reghoek + 2 reghoeke + 2 reghoeke = 6 basiese vorms ✓' },
        { difficulty: 'Medium', question: 'ʼn Windpompprentjie is gemaak van 4 driehoeke (die lemme) en 1 reghoek (die paal). Hoeveel basiese vorms is altesaam gebruik?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: '4 driehoeke + 1 reghoek = 5 basiese vorms ✓' },
        { difficulty: 'Hard', question: 'Thandi bou ʼn prentjie van ʼn ruspeer met 8 sirkels vir die lyf en 1 driehoek vir die kop. Sy voeg dan 2 klein driehoeke as voelhorings by. Hoeveel basiese vorms het sy altesaam gebruik?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'elf'], explanation: '8 sirkels + 1 driehoek (kop) + 2 driehoeke (voelhorings) = 11 basiese vorms ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde-vorm-prentjie van ʼn kasteel is gemaak van 1 reghoek (hoofmuur), 2 vierkante (syrings), 2 driehoeke (ringdakke) en 3 reghoeke (vensters). Hoeveel basiese vorms is altesaam gebruik?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: '1 reghoek + 2 vierkante + 2 driehoeke + 3 reghoeke = 8 basiese vorms ✓' },
        { difficulty: 'Hard', question: 'ʼn Prentjie van ʼn blommetuin wys 3 blomme, en elke blom is gemaak van 4 blomblaar-sirkels en 1 middelsirkel. Hoeveel basiese vorms is daar altesaam in al 3 blomme?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'vyftien'], explanation: 'Elke blom het 4 + 1 = 5 sirkels. 3 blomme × 5 sirkels = 15 basiese vorms ✓' },
        { difficulty: 'Hard', question: 'Sipho bou 2 identiese robotprentjies, en elke robot gebruik 1 vierkant (kop), 1 reghoek (lyf), 2 sirkels (oë) en 2 reghoeke (arms). Hoeveel basiese vorms het hy altesaam vir albei robotte gebruik?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twaalf'], explanation: 'Elke robot gebruik 1 + 1 + 2 + 2 = 6 basiese vorms. 2 robotte × 6 vorms = 12 basiese vorms ✓' },
        { difficulty: 'Easy', question: 'Kyk na ʼn prentjie van ʼn vuurpyl: ʼn driehoek bo-aan, ʼn reghoek in die middel, en twee klein driehoeke as vinne aan die kante. Noem die basiese vorms wat gebruik is.', answer: 'Die vuurpyl is gemaak van 3 driehoeke (die neuskeël en 2 vinne) en 1 reghoek (die lyf).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Teken of beskryf ʼn saamgestelde vorm wat jy kan bou met presies 1 sirkel en 2 driehoeke.', answer: 'Antwoorde sal verskil — byvoorbeeld, ʼn roomyshorinkie (sirkel-skepbal op ʼn driehoek-horinkie) met ʼn klein driehoekvlaggie bo-in gesteek, of ʼn vis (sirkellyf met ʼn driehoekstert en ʼn driehoekvin).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Kyk na ʼn prentjie van ʼn seilboot: 1 halfsirkel (die romp), 1 reghoek (die mas) en 2 driehoeke (die seile). Noem die basiese vorms en hoeveel van elkeen gebruik is.', answer: 'Die seilboot is gemaak van 1 halfsirkel (die romp), 1 reghoek (die mas) en 2 driehoeke (die seile) — 4 basiese vorms altesaam.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Kagiso sê enige saamgestelde vorm moet uit ten minste 3 basiese vorms gemaak word. Is hy korrek? Verduidelik.', answer: 'Nee — ʼn saamgestelde vorm het net 2 of meer basiese vorms nodig wat saamgevoeg is. Byvoorbeeld, ʼn huisvorm wat van net 1 driehoek en 1 vierkant gemaak is, is reeds ʼn saamgestelde vorm, al gebruik dit net 2 basiese vorms.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het die identifisering en telling van basiese vorms in saamgestelde prentjies bemeester.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug en lees weer deur saamgestelde vorms bou.' },
        { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — SAAMGESTELDE VORMS EN SIMMETRIELYN (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Saamgestelde Vorms en Simmetrie',
      questions: [
        { difficulty: 'Easy', question: 'Twee identiese driehoeke word rug-aan-rug geplaas, met hul plat kante aan mekaar rakend, om ʼn diamant te vorm. Is hierdie saamgestelde vorm simmetries? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die twee identiese driehoeke spieël mekaar presies, so as jy langs die verbindingslyn vou, pas albei helftes ✓' },
        { difficulty: 'Easy', question: 'ʼn Pylvorm het 1 driehoek net aan die regterpunt van ʼn reghoek vasgemaak. Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn in die middel? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Die driehoek verskyn net aan die regterkant, so as jy in die middel vou, sal die linker- en regterhelftes nie ooreenstem nie ✓' },
        { difficulty: 'Easy', question: 'ʼn Saamgestelde vorm is gemaak van ʼn vierkant met 1 identiese klein driehoek presies gesentreer bo-op (soos ʼn eenvoudige huis). Is hierdie saamgestelde vorm simmetries? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Aangesien die driehoek presies in die middel van die vierkant gesentreer is, sal ʼn vou langs die vertikale middellyn albei helftes laat ooreenstem ✓' },
        { difficulty: 'Easy', question: 'Twee identiese halfsirkels word geplaas met hul plat (reguit) kante aan mekaar rakend, om ʼn volle sirkel te vorm. Is hierdie saamgestelde vorm simmetries? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'ʼn Volle sirkel kan langs enige lyn deur sy middelpunt gevou word en albei helftes stem altyd ooreen ✓' },
        { difficulty: 'Easy', question: 'ʼn Saamgestelde vorm het 1 vierkant met 1 identiese klein sirkel net aan die boonste regterhoek vasgemaak. Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn in die middel? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Die sirkel is net aan die regterkant, so as jy in die middel vou, sal die twee helftes nie ooreenstem nie ✓' },
        { difficulty: 'Easy', question: 'ʼn Robotprentjie het 1 identiese sirkel-oog links en 1 identiese sirkel-oog regs, elkeen dieselfde afstand van die middel van ʼn vierkantkop geplaas. Is hierdie rangskikking van die twee oë simmetries langs ʼn vertikale lyn in die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Aangesien albei oë identies is en dieselfde afstand van die middel af geplaas is, sal ʼn vou in die middel hulle presies laat ooreenstem ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van 2 identiese reghoeke wat langs mekaar geplaas is, met een lang rand wat gedeel word, om ʼn groter reghoek te vorm. Is hierdie saamgestelde vorm simmetries langs die vertikale lyn waar die twee reghoeke saamkom? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Aangesien die twee reghoeke identies is, sal ʼn vou langs die verbindingslyn albei helftes presies laat ooreenstem ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 4 identiese klein driehoeke, elkeen aan een kant van ʼn sentrale vierkant vasgemaak (een bo-op, een onder, een links, een regs). Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die linker- en regterdriehoeke spieël mekaar, en die bo- en onderdriehoeke spieël elkeen hulself oor hierdie lyn, so dit is simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 3 identiese driehoeke aan die bo-, linker- en regterkant van ʼn sentrale vierkant vasgemaak, maar geen driehoek aan die onderkant nie. Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die linker- en regterdriehoeke spieël mekaar, en die boonste driehoek spieël homself oor die vertikale middellyn, so dit is steeds simmetries langs hierdie lyn ✓' },
        { difficulty: 'Medium', question: 'Met dieselfde vorm as voorheen (3 identiese driehoeke bo, links en regs van ʼn sentrale vierkant, geen onder nie), is hierdie saamgestelde vorm simmetries langs ʼn horisontale lyn deur die middel? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Die boonste driehoek het geen passende driehoek aan die onderkant nie, so ʼn vou langs ʼn horisontale middellyn laat nie albei helftes ooreenstem nie ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van ʼn reghoek met 1 halfsirkel aan die boonste rand vasgemaak, presies in die middel gesentreer (soos ʼn eenvoudige boogingang). Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Aangesien die halfsirkel presies op die reghoek gesentreer is, sal ʼn vou langs die vertikale middellyn albei helftes laat ooreenstem ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van ʼn reghoek met 1 driehoek aan die boonste rand vasgemaak, maar die driehoek is nader aan die linkerkant as die regterkant geposisioneer. Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn deur die middel van die reghoek? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Aangesien die driehoek nie in die middel is nie, sal ʼn vou in die middel van die reghoek nie albei helftes laat ooreenstem nie ✓' },
        { difficulty: 'Medium', question: 'ʼn Skoenlapperprentjie het 2 identiese vlerkvorms (sirkels), een links en een regs van ʼn sentrale reghoeklyf, albei dieselfde grootte en dieselfde afstand van die lyf af. Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn deur die lyf? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die twee identiese vlerke spieël mekaar presies oor die vertikale lyn deur die lyf ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 2 driehoeke aan ʼn sentrale vierkant vasgemaak, maar een driehoek is groter as die ander. Is hierdie saamgestelde vorm simmetries langs die lyn tussen die twee driehoeke? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Aangesien die twee driehoeke verskillende groottes het, kan hulle nie presies ooreenstem wanneer gevou nie, so die vorm is nie simmetries nie ✓' },
        { difficulty: 'Medium', question: 'ʼn Gesigprentjie het 2 identiese sirkel-oë simmetries geplaas en 1 halfsirkel-glimlag presies in die middel gesentreer. Is die hele saamgestelde gesigsprentjie simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Aangesien die oë simmetries geplaas is en die glimlag gesentreer is, stem elke deel ooreen oor die vertikale middellyn ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm het 6 identiese klein driehoeke eweredig en simmetries rondom ʼn sentrale reëlmatige seshoek gerangskik, soos die blomblare van ʼn blom. Het hierdie saamgestelde vorm meer as een simmetrielyn? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Omdat die seshoek en die 6 eweredig-geplaasde driehoeke met gelyke spasiëring rondom die middel gerangskik is, is daar verskeie verskillende lyne deur die middel wat albei helftes laat ooreenstem ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm is gebou van 1 vierkant met 2 identiese driehoeke, een bo-op en een onder vasgemaak, albei gesentreer. Is hierdie vorm simmetries langs ʼn horisontale lyn deur die middel van die vierkant? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die bo- en onderdriehoeke is identies en gesentreer, so ʼn vou langs ʼn horisontale middellyn laat hulle presies ooreenstem ✓' },
        { difficulty: 'Hard', question: 'Met dieselfde vorm as voorheen (ʼn vierkant met 1 identiese gesentreerde driehoek bo-op en 1 identiese gesentreerde driehoek onder), is dit ook simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Aangesien albei driehoeke presies op die vierkant gesentreer is, is hulle ook simmetries om die vertikale lyn, so hierdie vorm het twee simmetrielyne ✓' },
        { difficulty: 'Medium', question: 'Thandi wil ʼn simmetriese saamgestelde vorm met 2 halfsirkels bou. Hoe moet sy dit rangskik?', answer: 'Sy moet die twee halfsirkels so plaas dat hul plat (reguit) kante aan mekaar raak, om ʼn volle sirkel te vorm. Dit maak die vorm simmetries, aangesien elke vou deur die middelpunt albei helftes laat ooreenstem.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Lerato bou ʼn saamgestelde vorm van ʼn vierkant met een identiese klein driehoek net aan die boonste linkerhoek vasgemaak. Is haar saamgestelde vorm simmetries? Verduidelik.', answer: 'Nee — Lerato se saamgestelde vorm is nie simmetries nie, want die driehoek is net aan een hoek en het geen passende driehoek aan die teenoorgestelde kant nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Sipho bou ʼn saamgestelde vorm van 4 identiese klein driehoeke, elkeen aan een kant van ʼn sentrale vierkant vasgemaak (een bo-op, een onder, een links, een regs). Verduidelik waarom hierdie saamgestelde vorm simmetries is, en noem twee verskillende simmetrielyne wat dit het.', answer: 'Hierdie vorm is simmetries omdat die driehoeke identies en eweredig aan al vier kante van die vierkant geplaas is. Dit het (ten minste) twee simmetrielyne: ʼn vertikale lyn deur die middel (wat die linker- en regterdriehoeke ooreenstem, en die bo- en onderdriehoeke met hulself), en ʼn horisontale lyn deur die middel (wat die bo- en onderdriehoeke ooreenstem, en die linker- en regterdriehoeke met hulself).', checkMode: 'self' },
        { difficulty: 'Easy', question: 'ʼn Saamgestelde vorm het 1 identiese halfsirkel aan elke punt van ʼn reghoek vasgemaak (soos ʼn hardloopbaanvorm). Is hierdie saamgestelde vorm simmetries langs ʼn horisontale lyn deur die middel van die reghoek? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die identiese halfsirkels en die reghoek is almal simmetries om die horisontale middellyn, so die hele vorm is simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 1 driehoek gesentreer bo-op ʼn reghoek, maar die driehoek leun effens na een kant toe in plaas daarvan om reguit op te wys. Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'ʼn Leunende (skeewe) driehoek is nie ʼn spieëlbeeld van homself nie, so die twee helftes sou nie ooreenstem wanneer gevou nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm is gemaak van 2 identiese vierkante wat diagonaal teenoor mekaar rondom ʼn sentrale punt geplaas is, met 2 identiese sirkels in die oorblywende teenoorgestelde posisies geplaas. Is hierdie hele rangskikking simmetries om ʼn lyn wat deur die middel en deur albei vierkante loop? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Langs daardie lyn spieël die twee identiese sirkels mekaar aan weerskante, so die saamgestelde vorm is simmetries daaromheen ✓' },
        { difficulty: 'Hard', question: 'Verduidelik, in jou eie woorde, die algemene reël om te kontroleer of enige saamgestelde vorm simmetries is langs ʼn gekose voulyn.', answer: 'Om vir simmetrie langs ʼn gekose lyn te kontroleer, verbeel jou dat jy die saamgestelde vorm langs daardie lyn vou. As elke basiese vorm op die een kant ʼn identiese passende basiese vorm in dieselfde posisie aan die ander kant het, is die saamgestelde vorm simmetries langs daardie lyn. As selfs een vorm sy maat kortkom, is dit nie simmetries langs daardie lyn nie.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het die kontrolering van saamgestelde vorms vir simmetrielyne bemeester.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug en lees weer deur saamgestelde vorms met simmetrielyn.' },
        { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — TESSELLERENDE PATRONE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Tessellerende Patrone',
      questions: [
        { difficulty: 'Easy', question: 'Tesseleer vierkante op hul eie (pas hulle inmekaar met geen gapings nie)? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Vierkante pas rand-aan-rand inmekaar met geen gapings nie, so hulle tesseleer ✓' },
        { difficulty: 'Easy', question: 'Tesseleer sirkels op hul eie (pas hulle inmekaar met geen gapings nie)? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Sirkels laat altyd geboë gapings tussen hulle, so hulle tesseleer nie ✓' },
        { difficulty: 'Easy', question: 'Tesseleer reghoeke op hul eie? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Reghoeke pas rand-aan-rand inmekaar met geen gapings nie, net soos vierkante, so hulle tesseleer ✓' },
        { difficulty: 'Easy', question: 'Tesseleer reëlmatige seshoeke op hul eie? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Reëlmatige seshoeke pas perfek inmekaar met geen gapings nie, soos die selle van ʼn heuningkoek ✓' },
        { difficulty: 'Easy', question: 'Tesseleer gelyksydige driehoeke op hul eie? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Gelyksydige driehoeke pas perfek rondom ʼn punt inmekaar met geen gapings nie, so hulle tesseleer ✓' },
        { difficulty: 'Easy', question: 'Tesseleer reëlmatige vyfhoeke op hul eie? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Reëlmatige vyfhoeke laat altyd klein gapings tussen hulle, ongeag hoe hulle gerangskik word ✓' },
        { difficulty: 'Medium', question: 'Noem een alledaagse voorwerp of plek waar jy ʼn tessellerende patroon kan sien.', answer: 'vloerteëls (of heuningkoek, of ʼn baksteenmuur)', checkMode: 'auto', correctAnswer: 'vloerteëls', correctAnswers: ['floor tiles', 'vloerteëls', 'tiles', 'teëls', 'honeycomb', 'heuningkoek', 'brick wall', 'baksteenmuur', 'bricks', 'bakstene', 'wall tiles', 'muurteëls', 'floor', 'vloer', 'wall', 'muur'], explanation: 'Vloerteëls, heuningkoeke en baksteenmure is almal alledaagse voorbeelde van tessellerende patrone ✓' },
        { difficulty: 'Medium', question: 'ʼn Heuningkoek is opgebou uit watter basiese vorm, wat oor en oor met geen gapings herhaal word?', answer: 'seshoek', checkMode: 'auto', correctAnswer: 'seshoek', correctAnswers: ['seshoek', 'seshoeke', 'reëlmatige seshoek', 'ʼn seshoek', 'hexagon'], explanation: 'Bye bou heuningkoekselle in die vorm van reëlmatige seshoeke, wat perfek tesseleer ✓' },
        { difficulty: 'Medium', question: 'Vloerteëls is gewoonlik watter basiese vorm of vorms?', answer: 'vierkante of reghoeke', checkMode: 'auto', correctAnswer: 'vierkante of reghoeke', correctAnswers: ['vierkante of reghoeke', 'vierkant of reghoek', 'vierkante en reghoeke', 'vierkant', 'vierkante', 'reghoek', 'reghoeke'], explanation: 'Vloerteëls is gewoonlik vierkantig of reghoekig omdat hierdie vorms met geen gapings tesseleer nie ✓' },
        { difficulty: 'Medium', question: 'Waarom laat 4 vierkante wat by ʼn enkele punt ontmoet geen gaping nie? Elke hoek van ʼn vierkant is 90°. Wat tel die 4 hoeke op tot?', answer: '360°', checkMode: 'auto', correctAnswer: '360', correctAnswers: ['360', '360°', '360 grade'], explanation: '90° + 90° + 90° + 90° = 360°, ʼn volledige draai met geen gaping nie ✓' },
        { difficulty: 'Medium', question: 'Waarom laat 3 reëlmatige seshoeke wat by ʼn enkele punt ontmoet geen gaping nie? Elke hoek van ʼn reëlmatige seshoek is 120°. Wat tel die 3 hoeke op tot?', answer: '360°', checkMode: 'auto', correctAnswer: '360', correctAnswers: ['360', '360°', '360 grade'], explanation: '120° + 120° + 120° = 360°, ʼn volledige draai met geen gaping nie ✓' },
        { difficulty: 'Medium', question: 'ʼn Baksteenmuur is ʼn regte-lewe-voorbeeld van watter basiese vorm wat tesseleer?', answer: 'reghoek', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'reghoeke', 'ʼn reghoek'], explanation: 'Bakstene is reghoekig, en hulle tesseleer in rye om ʼn muur te bou ✓' },
        { difficulty: 'Medium', question: 'Amahle probeer sirkels tesseleer deur hulle in rye te plaas, met elke sirkel wat sy bure raak. Bedek dit die oppervlak met geen gapings nie? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Geboë vorms soos sirkels laat altyd klein geboë gapings tussen hulle, ongeag hoe hulle gerangskik word ✓' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige vyfhoek het binnehoeke van elk 108°. Tel 3 van hierdie hoeke presies op tot 360°? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: '108° + 108° + 108° = 324°, wat minder as 360° is, so daar bly ʼn gaping oor ✓' },
        { difficulty: 'Medium', question: 'Sokkerballe word dikwels met seshoek- en vyfhoekvorms bedek wat aanmekaar gewerk word. Tesseleer reëlmatige vyfhoeke alleen perfek op ʼn plat oppervlak? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Reëlmatige vyfhoeke kan nie alleen op ʼn plat oppervlak tesseleer nie — hulle laat altyd gapings ✓' },
        { difficulty: 'Hard', question: 'ʼn Reëlmatige seshoek het binnehoeke van 120°. Verduidelik waarom reëlmatige seshoeke perfek tesseleer, deur hierdie hoek in jou antwoord te gebruik.', answer: 'Wanneer seshoeke by ʼn enkele punt ontmoet, pas 3 seshoeke rondom daardie punt omdat 120° + 120° + 120° = 360°, wat ʼn volledige draai is met geen gaping en geen oorvleueling nie. Aangesien die hoeke eweredig in 360° deel, teël die seshoeke die oppervlak perfek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê ʼn reëlmatige vyfhoek sal op sy eie tesseleer omdat dit reguit sye het. Is sy korrek? Verduidelik.', answer: 'Nee, Lerato is nie korrek nie. Al het ʼn reëlmatige vyfhoek reguit sye, deel sy hoeke (elk 108°) nie eweredig in 360° nie, so wanneer jy probeer om vyfhoeke rondom ʼn punt inmekaar te pas, bly daar altyd klein gapings oor. Reguit sye alleen is nie genoeg nie — die hoeke moet ook perfek inmekaar pas.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Het jy gapings tussen vorms nodig vir ʼn patroon om ʼn ware tessellasie te wees? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'ʼn Ware tessellasie het geen gapings en geen oorvleueling tussen die herhalende vorms nie ✓' },
        { difficulty: 'Easy', question: 'Word dit toegelaat dat vorms in ʼn tessellasie oorvleuel? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'ʼn Ware tessellasie het geen oorvleuelende vorms nie, sowel as geen gapings nie ✓' },
        { difficulty: 'Medium', question: 'Watter vorm gebruik muurteëls in ʼn badkamer meestal om te tesseleer?', answer: 'vierkante of reghoeke', checkMode: 'auto', correctAnswer: 'vierkante of reghoeke', correctAnswers: ['vierkante of reghoeke', 'vierkant of reghoek', 'vierkante en reghoeke', 'vierkant', 'vierkante', 'reghoek', 'reghoeke'], explanation: 'Muurteëls is gewoonlik vierkantige of reghoekige teëls wat oor die muur tesseleer ✓' },
        { difficulty: 'Medium', question: 'As jy probeer om ʼn patroon te tesseleer deur slegs reëlmatige vyfhoeke en reëlmatige seshoeke saam te meng, sal die vyfhoeke alleen steeds gapings laat wanneer hulle op hul eie gebruik word? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Reëlmatige vyfhoeke laat altyd gapings op hul eie, aangesien hulle 108°-hoeke nie eweredig in 360° deel nie ✓' },
        { difficulty: 'Hard', question: 'Verduidelik hoe om te toets of enige vorm sal tesseleer, sonder om die presiese hoekmetings te ken.', answer: 'Teken of verbeel verskeie kopieë van die vorm wat rand-aan-rand rondom ʼn punt inmekaar pas. As die kopieë perfek regrondom inmekaar pas met geen gapings en geen oorvleueling nie, en jy hierdie patroon in elke rigting kan bly herhaal, tesseleer die vorm. As gapings altyd verskyn, ongeag hoe die vorm gerangskik word, tesseleer dit nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Bongani sê enige vorm met reguit sye sal tesseleer. Gee een voorbeeld wat bewys dat hy verkeerd is.', answer: 'Bongani is verkeerd. ʼn Reëlmatige vyfhoek het reguit sye, maar dit tesseleer nie op sy eie nie — sy binnehoeke van 108° deel nie eweredig in 360° nie, so gapings word altyd gelaat wanneer vyfhoeke rondom ʼn punt inmekaar gepas word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Teëlwerker bedek ʼn vloer en wil geen gapings of oorvleueling hê nie. Moet sy sirkelvormige teëls of vierkantige teëls kies?', answer: 'vierkantige teëls', checkMode: 'auto', correctAnswer: 'vierkantige teëls', correctAnswers: ['vierkantige teëls', 'vierkante', 'vierkant'], explanation: 'Vierkantige teëls tesseleer met geen gapings nie, terwyl sirkelvormige teëls altyd geboë gapings laat ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie vorms tesseleer op sy eie: ʼn reëlmatige vyfhoek of ʼn gelyksydige driehoek?', answer: 'gelyksydige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydige driehoek', correctAnswers: ['gelyksydige driehoek', 'driehoek', 'ʼn gelyksydige driehoek', 'ʼn driehoek'], explanation: 'Gelyksydige driehoeke tesseleer omdat 6 van hul 60°-hoeke presies rondom ʼn punt pas (6 × 60° = 360°); reëlmatige vyfhoeke tesseleer nie ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het bemeester watter vorms tesseleer en waarom.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug en lees weer deur tessellerende patrone.' },
        { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — VEELSTAPPIGE, GEKOMBINEERDE EN REDENASIE-VRAE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelstappige en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'ʼn Huisprentjie is gemaak van 1 driehoek (dak) en 1 vierkant (mure), en die dakdriehoek is presies bo-op die vierkant gesentreer. Hoeveel basiese vorms maak hierdie saamgestelde vorm op, en is dit simmetries langs ʼn vertikale lyn deur die middel? Gee albei antwoorde.', answer: '2 basiese vorms; Ja, dit is simmetries', checkMode: 'auto', correctAnswer: '2, ja', correctAnswers: ['2, ja', '2 en ja', '2; ja', '2 ja'], explanation: '1 driehoek + 1 vierkant = 2 basiese vorms. Aangesien die driehoek gesentreer is, laat ʼn vou in die middel albei helftes ooreenstem, so dit is simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van 4 vierkante in ʼn 2-by-2-blok gerangskik met geen gapings nie. Hoeveel basiese vorms maak hierdie saamgestelde vorm op, en tesseleer vierkante op hul eie?', answer: '4 basiese vorms; Ja, vierkante tesseleer', checkMode: 'auto', correctAnswer: '4, ja', correctAnswers: ['4, ja', '4 en ja', '4; ja', '4 ja'], explanation: '4 vierkante maak die vorm op. Vierkante tesseleer op hul eie omdat hul 90°-hoeke eweredig in 360° deel ✓' },
        { difficulty: 'Medium', question: 'ʼn Patroon is gemaak van 6 identiese gelyksydige driehoeke rand-aan-rand gerangskik met geen gapings nie om ʼn reëlmatige seshoekvorm te vorm. Hoeveel basiese vorms is gebruik, en tesseleer gelyksydige driehoeke op hul eie?', answer: '6 basiese vorms; Ja, hulle tesseleer', checkMode: 'auto', correctAnswer: '6, ja', correctAnswers: ['6, ja', '6 en ja', '6; ja', '6 ja'], explanation: '6 driehoeke maak die patroon op. Gelyksydige driehoeke tesseleer omdat 6 van hul 60°-hoeke optel tot 360° ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm is gebou van 2 identiese halfsirkels wat by hul plat kante saamgevoeg is om ʼn sirkel te vorm, met ʼn klein driehoek gesentreer bo-op vasgemaak. Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: '2 halfsirkels + 1 driehoek = 3 basiese vorms ✓' },
        { difficulty: 'Hard', question: 'Met die vorm van die vorige vraag (2 identiese halfsirkels wat ʼn sirkel vorm, met ʼn klein driehoek gesentreer bo-op), is die hele saamgestelde vorm simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Die sirkel is simmetries om enige lyn deur sy middelpunt, en die driehoek is ook gesentreer, so die hele vorm is simmetries langs die vertikale middellyn ✓' },
        { difficulty: 'Hard', question: 'ʼn Huis-saamgestelde-vorm (1 dakdriehoek gesentreer op 1 vierkant) is simmetries. ʼn Vyfhoek tesseleer nie op sy eie nie. Watter basiese 2D-vorm verskyn beide in die huisvoorbeeld en tesseleer op sy eie?', answer: 'vierkant', checkMode: 'auto', correctAnswer: 'vierkant', correctAnswers: ['vierkant', 'ʼn vierkant', 'vierkante'], explanation: 'Die vierkant in die huis is die vorm wat beide in ʼn simmetriese saamgestelde vorm verskyn en op sy eie tesseleer ✓' },
        { difficulty: 'Hard', question: 'ʼn Patroon gebruik 3 reëlmatige seshoeke wat by ʼn enkele punt met geen gapings ontmoet. Hoeveel grade meet elke seshoekhoek, en wat tel die 3 hoeke op tot?', answer: '120° elk; totaal 360°', checkMode: 'auto', correctAnswer: '120, 360', correctAnswers: ['120, 360', '120 en 360', '120° en 360°', '120° elk; totaal 360°'], explanation: 'Elke binnehoek van ʼn reëlmatige seshoek is 120°, en 120° × 3 = 360°, ʼn volledige draai met geen gaping nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm het 2 identiese driehoeke aan die linker- en regterkant van ʼn sentrale sirkel vasgemaak, simmetries gerangskik. Dit gebruik ook sirkels, wat nie op hul eie tesseleer nie. Is die saamgestelde vorm self simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Of ʼn vorm tesseleer is ʼn aparte eienskap van of ʼn saamgestelde vorm simmetries is — die twee identiese, simmetries geplaaste driehoeke en die sirkel maak hierdie saamgestelde vorm steeds simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van 1 reghoek (lyf) met 2 identiese sirkels (wiele) simmetries daaronder geplaas, soos ʼn eenvoudige motor. Hoeveel basiese vorms is daar, en is die hele prentjie simmetries langs ʼn vertikale lyn deur die middel?', answer: '3 basiese vorms; Ja, dit is simmetries', checkMode: 'auto', correctAnswer: '3, ja', correctAnswers: ['3, ja', '3 en ja', '3; ja', '3 ja'], explanation: '1 reghoek + 2 sirkels = 3 basiese vorms. Aangesien die wiele identies is en simmetries geplaas is, is die prentjie simmetries ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van 1 reghoek (lyf) met 2 verskillende-grootte sirkels (wiele) daaronder geplaas — een groter as die ander. Is die hele prentjie simmetries langs ʼn vertikale lyn deur die middel? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Aangesien die twee wiele verskillende groottes het, spieël hulle nie mekaar presies nie, so die prentjie is nie simmetries nie ✓' },
        { difficulty: 'Hard', question: 'ʼn Teëlpatroon gebruik slegs reëlmatige seshoeke, wat met geen gapings tesseleer nie. ʼn Tweede patroon gebruik slegs sirkels, wat gapings laat. As ʼn bouer geen gapings op ʼn vloer wil hê nie, watter patroon moet sy kies?', answer: 'die seshoekpatroon', checkMode: 'auto', correctAnswer: 'seshoekpatroon', correctAnswers: ['seshoekpatroon', 'die seshoekpatroon', 'seshoeke', 'seshoek'], explanation: 'Reëlmatige seshoeke tesseleer met geen gapings nie, so die seshoekpatroon is die korrekte keuse vir ʼn gaping-vrye vloer ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm is gemaak van 5 identiese vierkante in ʼn plus/kruisvorm gerangskik (een sentrale vierkant met een vierkant aan elk van sy vier kante vasgemaak). Hoeveel basiese vorms maak hierdie saamgestelde vorm op, en hoeveel simmetrielyne het die hele kruisvorm (ten minste)?', answer: '5 basiese vorms; ten minste 2 simmetrielyne', checkMode: 'auto', correctAnswer: '5, 2', correctAnswers: ['5, 2', '5 en 2', '5; 2', '5, ten minste 2'], explanation: '5 vierkante maak die kruis op. Dit het ten minste 2 simmetrielyne: een vertikale lyn en een horisontale lyn deur die middel ✓' },
        { difficulty: 'Medium', question: 'Watter basiese vorm wat in die plus/kruis-saamgestelde vorm gebruik word (vierkante) tesseleer ook op sy eie met geen gapings nie?', answer: 'vierkant', checkMode: 'auto', correctAnswer: 'vierkant', correctAnswers: ['vierkant', 'ʼn vierkant', 'vierkante'], explanation: 'Vierkante tesseleer op hul eie, en hulle is ook die basiese vorm wat gebruik word om die kruis-saamgestelde vorm te bou ✓' },
        { difficulty: 'Hard', question: 'ʼn Vensterontwerp is gemaak van 1 groot vierkant wat visueel in 4 kleiner identiese vierkante verdeel is deur ʼn kruisvorm in die middel. Hoeveel basiese vorms (die 4 klein vierkante) maak die venster op, en is die ontwerp simmetries langs beide ʼn vertikale en horisontale lyn deur die middel?', answer: '4 basiese vorms; Ja, simmetries langs beide lyne', checkMode: 'auto', correctAnswer: '4, ja', correctAnswers: ['4, ja', '4 en ja', '4; ja', '4 ja'], explanation: '4 klein vierkante maak die venster op. Aangesien al 4 vierkante identies en eweredig geplaas is, is die ontwerp simmetries langs beide die vertikale en horisontale middellyne ✓' },
        { difficulty: 'Hard', question: 'ʼn Halssnoerpatroon herhaal 1 sirkelkraal dan 1 vierkantkraal dan 1 sirkelkraal dan 1 vierkantkraal, ensovoorts. As daar altesaam 12 krale is, hoeveel is sirkels?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'Die patroon wissel sirkel, vierkant, sirkel, vierkant... so presies die helfte van die 12 krale is sirkels: 12 ÷ 2 = 6 ✓' },
        { difficulty: 'Hard', question: 'Kagiso bou ʼn heiningpatroon met 10 identiese driehoekige heiningpale en 10 identiese reghoekige heiningpanele, om die beurt afwisselend. Hoeveel basiese vorms maak die hele heiningpatroon op?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', 'twintig'], explanation: '10 driehoeke + 10 reghoeke = 20 basiese vorms ✓' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn vloerpatroon wat slegs vierkante gebruik met een wat slegs reëlmatige vyfhoeke gebruik. Verduidelik watter een sal tesseleer met geen gapings nie en waarom.', answer: 'Die vierkantpatroon sal tesseleer met geen gapings nie, omdat die binnehoeke van ʼn vierkant (elk 90°) eweredig in 360° deel (4 × 90° = 360°). Reëlmatige vyfhoeke het binnehoeke van elk 108°, en 108° deel nie eweredig in 360° nie, so gapings word altyd tussen vyfhoeke gelaat.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik die verskil tussen ʼn saamgestelde vorm wat "simmetries" is en ʼn vorm wat "tesseleer." Gebruik ʼn voorbeeld van elkeen om jou verduideliking te ondersteun.', answer: 'ʼn Saamgestelde vorm is simmetries as dit langs ʼn lyn gevou kan word sodat albei helftes presies ooreenstem — byvoorbeeld, ʼn huis gemaak van ʼn driehoek gesentreer op ʼn vierkant is simmetries. ʼn Vorm tesseleer as kopieë daarvan oor en oor herhaal kan word om ʼn plat oppervlak te bedek met geen gapings of oorvleueling nie — byvoorbeeld, vierkante tesseleer omdat hulle rand-aan-rand oor ʼn hele vloer inmekaar pas. Simmetrie gaan oor een vorm wat op homself vou, terwyl tessellasie gaan oor baie kopieë van ʼn vorm wat ʼn oppervlak bedek.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Zanele bou ʼn saamgestelde prentjie van ʼn blom met 1 sentrale sirkel en 6 identiese blomblaar-sirkels eweredig regrondom gerangskik. Verduidelik of hierdie saamgestelde vorm simmetries is, en hoeveel basiese vorms dit gebruik.', answer: 'Die blom gebruik 1 + 6 = 7 basiese vorms altesaam. Dit is simmetries, en omdat die 6 blomblare eweredig regrondom die middel gerangskik is, is daar verskeie verskillende simmetrielyne wat deur die middel en deur teenoorgestelde blomblare loop.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn reëlmatige seshoek tesseleer maar ʼn sirkel nie, al lyk beide vorms redelik "rond" of glad-syïg wanneer daar baie van hulle saam is.', answer: 'ʼn Reëlmatige seshoek het reguit sye en hoeke (elk 120°) wat eweredig in 360° deel, so 3 seshoeke pas perfek rondom ʼn punt met geen gapings nie. ʼn Sirkel het ʼn geboë rand met geen reguit sye of hoeke nie, so wanneer sirkels langs mekaar geplaas word, laat die krommes altyd klein gapings tussen hulle — geen rangskikking van sirkels kan hierdie gapings verwyder nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm gebruik 1 reghoek en 1 halfsirkel om ʼn deur met ʼn gebooide boonste deel te maak. Is ʼn halfsirkel een van die vorms wat gelys word as vorms wat op hul eie tesseleer? Skryf ja of nee.', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee', 'No', 'no'], explanation: 'Halfsirkels is nie in die lys van vorms (vierkante, reghoeke, gelyksydige driehoeke, reëlmatige seshoeke) wat op hul eie tesseleer nie ✓' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm gebruik 2 reghoeke, en reghoeke is bekend daarvoor dat hulle op hul eie tesseleer. As jy 100 identiese reghoeke rand-aan-rand met geen gapings gebruik het, sou dit ʼn geldige tessellasie wees? Skryf ja of nee.', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja', 'Yes', 'yes'], explanation: 'Aangesien reghoeke op hul eie tesseleer, vorm enige aantal identiese reghoeke rand-aan-rand met geen gapings ʼn geldige tessellasie ✓' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm is simmetries, gemaak van 2 identiese driehoeke wat ʼn diamant vorm. As jy dan probeer om hierdie diamant-saamgestelde vorm te tesseleer deur dit baie kere met geen gapings te herhaal, sal dit werk? Verduidelik jou redenasie.', answer: 'Ja, dit sal werk. ʼn Diamant gemaak van 2 identiese driehoeke is ʼn viersydige vorm (ʼn ruit), en vorms soos hierdie tesseleer omdat hul hoeke perfek inmekaar pas rondom elke punt waar die diamante ontmoet, net soos vierkante en reghoeke.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Ontwerp gebruik ʼn simmetriese saamgestelde vorm (ʼn huis: 1 driehoek gesentreer op 1 vierkant) wat baie kere in ʼn ry herhaal word, elke huis wat die volgende raak met geen gapings tussen die vierkantmure nie. Waarborg die gebruik van ʼn simmetriese saamgestelde vorm dat die herhaalde patroon perfek sal tesseleer? Verduidelik.', answer: 'Nie noodwendig nie — of ʼn saamgestelde vorm simmetries is, is ʼn aparte eienskap van of dit tesseleer. In hierdie geval tesseleer die vierkantmure wel (aangesien vierkante op hul eie tesseleer), maar die driehoekdakke wat uitsteek sou gapings tussen die huise laat tensy die vorm spesiaal ontwerp is om inmekaar te pas, so die hele saamgestelde huisvorm tesseleer nie outomaties net omdat dit simmetries is nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde prentjie is gemaak van 2 identiese driehoeke wat ʼn simmetriese diamant vorm, en 3 meer identiese diamante word langsaan geplaas sodat al 4 diamante met geen gapings tesseleer nie. Hoeveel basiese driehoekvorms is daar altesaam oor al 4 diamante?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: 'Elke diamant gebruik 2 driehoeke. 4 diamante × 2 driehoeke = 8 basiese vorms altesaam ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het veelstappige saamgestelde-vorm- en tessellasieprobleme bemeester.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug deur al drie afdelings en probeer weer.' },
        { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
      ],
    },
  ],
}
