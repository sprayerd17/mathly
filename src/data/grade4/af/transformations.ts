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
      videoPlaceholder:
        'Kort video wat vierkante, driehoeke en seshoeke wys wat perfek oor ʼn oppervlak tesseleer, gevolg deur ʼn voorbeeld van sirkels wat nie tesseleer nie weens die gapings wat tussen hulle oorbly',
      diagramPlaceholder:
        'ʼn Rooster wat ʼn perfekte vierkant-tessellasie met geen gapings vergelyk met ʼn mislukte sirkel-tessellasie wat geboë gapings tussen elke sirkel wys',
    },
  ],

  topicPractice: [

    // ── SECTION 1: BUILDING COMPOSITE SHAPES ──────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'ʼn Huisprentjie is gemaak van 1 driehoek (die dak) en 1 vierkant (die mure). Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?',
      correctAnswer: '2',
      answer: '2',
      explanation: '1 driehoek + 1 vierkant = 2 basiese vorms altesaam ✓',
    },
    {
      difficulty: 'Easy',
      checkMode: 'self',
      question: 'Kyk na ʼn prentjie van ʼn vuurpyl: ʼn driehoek bo-aan, ʼn reghoek in die middel, en twee klein driehoeke as vinne aan die kante. Noem die basiese vorms wat gebruik is.',
      answer: 'Die vuurpyl is gemaak van 3 driehoeke (die neuskeël en 2 vinne) en 1 reghoek (die lyf).',
    },
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'ʼn Robotprentjie is gebou van 1 vierkant (kop), 1 reghoek (lyf), 2 klein sirkels (oë) en 2 reghoeke (arms). Hoeveel basiese vorms is altesaam gebruik?',
      correctAnswer: '6',
      answer: '6',
      explanation: '1 vierkant + 1 reghoek + 2 sirkels + 2 reghoeke = 6 basiese vorms ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'self',
      question: 'Teken of beskryf ʼn saamgestelde vorm wat jy kan bou met presies 1 sirkel en 2 driehoeke.',
      answer: 'Antwoorde sal verskil — byvoorbeeld, ʼn roomyshorinkie (sirkel-skepbal op ʼn driehoek-horinkie) met ʼn klein driehoekvlaggie bo-in gesteek, of ʼn vis (sirkellyf met ʼn driehoekstert en ʼn driehoekvin).',
    },
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Kagiso sê enige saamgestelde vorm moet uit ten minste 3 basiese vorms gemaak word. Is hy korrek? Verduidelik.',
      answer: 'Nee — ʼn saamgestelde vorm het net 2 of meer basiese vorms nodig wat saamgevoeg is. Byvoorbeeld, ʼn huisvorm wat van net 1 driehoek en 1 vierkant gemaak is, is reeds ʼn saamgestelde vorm, al gebruik dit net 2 basiese vorms.',
    },

    // ── SECTION 2: COMPOSITE SHAPES WITH LINE SYMMETRY ────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Twee identiese driehoeke word rug-aan-rug geplaas, met hul plat kante aan mekaar rakend, om ʼn diamant te vorm. Is hierdie saamgestelde vorm simmetries? Skryf ja of nee.',
      correctAnswer: 'Ja',
      correctAnswers: ['Ja', 'ja', 'Yes', 'yes'],
      answer: 'Ja',
      explanation: 'Die twee identiese driehoeke spieël mekaar presies, so as jy langs die verbindingslyn vou, pas albei helftes ✓',
    },
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'ʼn Pylvorm het 1 driehoek net aan die regterpunt van ʼn reghoek vasgemaak. Is hierdie saamgestelde vorm simmetries langs ʼn vertikale lyn in die middel? Skryf ja of nee.',
      correctAnswer: 'Nee',
      correctAnswers: ['Nee', 'nee', 'No', 'no'],
      answer: 'Nee',
      explanation: 'Die driehoek verskyn net aan die regterkant, so as jy in die middel vou, sal die linker- en regterhelftes nie ooreenstem nie ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'self',
      question: 'Thandi wil ʼn simmetriese saamgestelde vorm met 2 halfsirkels bou. Hoe moet sy dit rangskik?',
      answer: 'Sy moet die twee halfsirkels so plaas dat hul plat (reguit) kante aan mekaar raak, om ʼn volle sirkel te vorm. Dit maak die vorm simmetries, aangesien elke vou deur die middelpunt albei helftes laat ooreenstem.',
    },
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'ʼn Saamgestelde vorm is gemaak van ʼn vierkant met 1 identiese klein driehoek presies gesentreer bo-op (soos ʼn eenvoudige huis). Is hierdie saamgestelde vorm simmetries? Skryf ja of nee.',
      correctAnswer: 'Ja',
      correctAnswers: ['Ja', 'ja', 'Yes', 'yes'],
      answer: 'Ja',
      explanation: 'Aangesien die driehoek presies in die middel van die vierkant gesentreer is, sal ʼn vou langs die vertikale middellyn albei helftes laat ooreenstem ✓',
    },
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'Sipho bou ʼn saamgestelde vorm van 4 identiese klein driehoeke, elkeen aan een kant van ʼn sentrale vierkant vasgemaak (een bo-op, een onder, een links, een regs). Verduidelik waarom hierdie saamgestelde vorm simmetries is, en noem twee verskillende simmetrielyne wat dit het.',
      answer: 'Hierdie vorm is simmetries omdat die driehoeke identies en eweredig aan al vier kante van die vierkant geplaas is. Dit het (ten minste) twee simmetrielyne: ʼn vertikale lyn deur die middel (wat die linker- en regterdriehoeke ooreenstem, en die bo- en onderdriehoeke met hulself), en ʼn horisontale lyn deur die middel (wat die bo- en onderdriehoeke ooreenstem, en die linker- en regterdriehoeke met hulself).',
    },

    // ── SECTION 3: TESSELLATING PATTERNS ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Tesseleer vierkante op hul eie? Skryf ja of nee.',
      correctAnswer: 'Ja',
      correctAnswers: ['Ja', 'ja', 'Yes', 'yes'],
      answer: 'Ja',
      explanation: 'Vierkante pas rand-aan-rand inmekaar met geen gapings nie, so hulle tesseleer ✓',
    },
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Tesseleer sirkels op hul eie? Skryf ja of nee.',
      correctAnswer: 'Nee',
      correctAnswers: ['Nee', 'nee', 'No', 'no'],
      answer: 'Nee',
      explanation: 'Sirkels laat altyd geboë gapings tussen hulle, so hulle tesseleer nie ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Noem een alledaagse voorwerp of plek waar jy ʼn tessellerende patroon kan sien.',
      correctAnswer: 'vloerteëls',
      correctAnswers: ['floor tiles', 'vloerteëls', 'tiles', 'teëls', 'honeycomb', 'heuningkoek', 'brick wall', 'baksteenmuur', 'bricks', 'bakstene', 'wall tiles', 'muurteëls', 'floor', 'vloer', 'wall', 'muur'],
      answer: 'vloerteëls (of heuningkoek, of ʼn baksteenmuur)',
      explanation: 'Vloerteëls, heuningkoeke en baksteenmure is almal alledaagse voorbeelde van tessellerende patrone ✓',
    },
    {
      difficulty: 'Medium',
      checkMode: 'self',
      question: 'Lerato sê ʼn reëlmatige vyfhoek sal op sy eie tesseleer omdat dit reguit sye het. Is sy korrek? Verduidelik.',
      answer: 'Nee, Lerato is nie korrek nie. Al het ʼn reëlmatige vyfhoek reguit sye, deel sy hoeke (elk 108°) nie eweredig in 360° nie, so wanneer jy probeer om vyfhoeke rondom ʼn punt inmekaar te pas, bly daar altyd klein gapings oor. Reguit sye alleen is nie genoeg nie — die hoeke moet ook perfek inmekaar pas.',
    },
    {
      difficulty: 'Hard',
      checkMode: 'self',
      question: 'ʼn Reëlmatige seshoek het binnehoeke van 120°. Verduidelik, met hierdie hoek, waarom reëlmatige seshoeke perfek tesseleer.',
      answer: 'Wanneer seshoeke by ʼn enkele punt ontmoet, pas 3 seshoeke rondom daardie punt omdat 120° + 120° + 120° = 360°, wat ʼn volledige draai is met geen gaping en geen oorvleueling nie. Aangesien die hoeke eweredig in 360° deel, teël die seshoeke die oppervlak perfek.',
    },
  ],

  scoreMessages: [
    { minScore: 15, message: 'Volpunte! Jy het saamgestelde vorms en tessellasie bemeester.' },
    { minScore: 11, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
    { minScore: 8, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
  ],
}
