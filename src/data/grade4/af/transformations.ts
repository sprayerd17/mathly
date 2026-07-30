import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Saamgestelde Vorms en Tesselasie',
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
    <div style="width:60px;height:60px;background:#93c5fd;border:2px solid #1e40af;"></div>
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
<p style="margin-bottom:14px;">ʼn <strong>Tesselasie</strong> is ʼn patroon wat gemaak word deur vorms oor en oor te herhaal sodat hulle ʼn plat oppervlak heeltemal bedek, met <strong>geen gapings</strong> en <strong>geen oorvleueling</strong> nie. Jy sien tessellasies elke dag — vloerteëls, baksteenmure en heuningkoek is almal voorbeelde.</p>

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
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok A — Basiese Vorms Identifiseer en Tel (pos 0-3, Maklik)
        { difficulty: 'Easy', question: 'Kyk na die prentjie: ʼn huis gemaak van 1 driehoek (die dak) wat bo-op 1 vierkant (die mure) sit. Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', checkMode: 'auto', options: ['1', '3', '2', '4'], correctIndex: 2, explanation: '1 driehoek + 1 vierkant = 2 basiese vorms altesaam ✓ (1 behandel die twee vorms as een; 3 en 4 kom van dubbeltelling van een van die vorms.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="85" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,40 75,85 145,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Met dieselfde huisprentjie (1 driehoekdak op 1 vierkantmuur), watter twee basiese vorms maak hierdie saamgestelde vorm op?', checkMode: 'auto', options: ['1 reghoek en 1 driehoek', '1 vierkant en 1 sirkel', '2 driehoeke', '1 driehoek en 1 vierkant'], correctIndex: 3, explanation: 'Die huis is gemaak van 1 driehoek (die dak) en 1 vierkant (die mure) ✓ (die ander opsies gebruik ʼn vorm wat nie voorkom nie, of mis die vierkantmuur heeltemal.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="85" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,40 75,85 145,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die prentjie: ʼn boot gemaak van ʼn driehoek (die seil), ʼn reghoek (die romp) en ʼn halfsirkel (die onderromp). Hoeveel VERSKILLENDE basiese vormtipes is gebruik?', checkMode: 'auto', options: ['2', '4', '1', '3'], correctIndex: 3, explanation: 'Die boot gebruik ʼn driehoek, ʼn reghoek en ʼn halfsirkel — 3 verskillende vormtipes ✓ (2 behandel verkeerdelik twee van die vorms as dieselfde tipe; 4 verdeel een vorm in twee tipes; 1 ignoreer dat meer as een vormtipe gebruik is.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><path d="M 45 130 Q 110 155 175 130 L 160 110 L 60 110 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="70" y="86" width="40" height="24" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,86 110,41 155,86" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Robotprentjie is gebou van 1 vierkant (kop), 1 reghoek (lyf) en 2 klein sirkels (oë). Hoeveel basiese vorms is altesaam gebruik?', checkMode: 'auto', options: ['3', '4', '5', '2'], correctIndex: 1, explanation: '1 vierkant + 1 reghoek + 2 sirkels = 4 basiese vorms ✓ (3 vergeet om een van die twee sirkels te tel; 5 tel een vorm dubbel; 2 tel net die vormtipes, nie die totale stukke nie.)' },

        // Blok B — Veeldelige Saamgestelde Telling en Noeming (pos 4-7, Maklik-Medium)
        { difficulty: 'Medium', question: 'ʼn Treinprentjie is gemaak van 3 reghoeke (die waens) en 4 sirkels (die wiele). Hoeveel basiese vorms is altesaam gebruik?', checkMode: 'auto', options: ['6', '7', '8', '12'], correctIndex: 1, explanation: '3 reghoeke + 4 sirkels = 7 basiese vorms ✓ (6 tel een sirkel te min; 8 tel een te veel; 12 vermenigvuldig verkeerdelik 3×4 in plaas van optel.)' },
        { difficulty: 'Medium', question: 'ʼn Blomprentjie is gemaak van 5 identiese blomblare (elkeen ʼn sirkel) rondom 1 sirkel in die middel. Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', checkMode: 'auto', options: ['5', '10', '4', '6'], correctIndex: 3, explanation: '5 blomblaar-sirkels + 1 middelsirkel = 6 basiese vorms ✓ (5 vergeet die middelsirkel; 10 verdubbel verkeerdelik die blomblare; 4 tel een blomblaar te min.)' },
        { difficulty: 'Medium', question: 'Sipho tel die vorms in ʼn motorprentjie (1 reghoeklyf, 2 sirkelwiele, 1 vierkantvenster) en sê daar is 3 basiese vorms altesaam. Watter stelling evalueer Sipho se antwoord korrek?', checkMode: 'auto', options: ['Sipho is korrek — daar is 3 basiese vorms altesaam.', 'Sipho is nie korrek nie — daar is 4 basiese vorms altesaam; hy het vergeet om een van die twee wiele apart te tel.', 'Sipho is nie korrek nie — daar is 5 basiese vorms altesaam, aangesien die venster twee keer getel moet word.', 'Sipho is korrek, maar net omdat die venster nie as ʼn basiese vorm tel nie.'], correctIndex: 1, explanation: 'Die motor het 1 reghoek + 2 sirkels + 1 vierkant = 4 basiese vorms altesaam, nie 3 nie — Sipho het seker vergeet om een van die twee wiele apart te tel ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie saamgestelde vorms kan gebou word met presies 2 sirkels en 1 reghoek?', checkMode: 'auto', options: ['ʼn Robot — 1 vierkantkop, 1 reghoeklyf, 2 sirkeloë', 'ʼn Boot — 1 driehoekseil, 1 reghoeklyf, 1 halfsirkelromp', 'ʼn Blom — 5 blomblaar-sirkels rondom 1 middelsirkel', 'ʼn Motor — 1 reghoeklyf met 2 sirkelwiele'], correctIndex: 3, explanation: 'ʼn Motor gebou van 1 reghoeklyf en 2 sirkelwiele gebruik presies 2 sirkels en 1 reghoek ✓ (die robot voeg ʼn vierkant by, die boot gebruik ʼn driehoek en halfsirkel, en die blom het glad nie ʼn reghoek nie.)' },

        // Blok C — Saamgestelde Vorms en Simmetrielyn (pos 8-12, Medium) — gedeelde diagram-reeks
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 4 identiese klein driehoeke, elkeen aan een kant van ʼn sentrale vierkant vasgemaak (een bo-op, een onder, een links, een regs). Watter stelling oor simmetrie langs ʼn vertikale lyn deur die middel is korrek?', checkMode: 'auto', options: ['Die linker- en regterdriehoeke spieël mekaar, en die bo- en onderdriehoeke spieël elkeen hulself oor hierdie lyn, so dit is simmetries.', 'Die bo- en onderdriehoeke is nie spieëlbeelde van die linker- en regterdriehoeke nie, so dit is nie simmetries nie.', 'Dit is nie simmetries nie, want net vorms met presies 2 basiese dele kan ʼn simmetrielyn hê.', 'Dit is simmetries, maar net omdat al 4 driehoeke dieselfde kleur is.'], correctIndex: 0, explanation: 'Die linker- en regterdriehoeke spieël mekaar, en die bo- en onderdriehoeke spieël elkeen hulself oor hierdie lyn, so dit is simmetries ✓ (die ander opsies vergelyk die verkeerde pare driehoeke, stel ʼn onware reël oor presies 2 dele, of verwar kleur met geometriese ooreenstemming.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="65" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,20 85,65 135,65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,180 85,135 135,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,85 40,100 75,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,85 180,100 145,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="10" x2="110" y2="160" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde vorm as voorheen (4 identiese driehoeke, een aan elke kant van ʼn sentrale vierkant), watter stelling oor simmetrie langs ʼn horisontale lyn deur die middel is korrek?', checkMode: 'auto', options: ['Dit is nie simmetries langs hierdie lyn nie, want ʼn vierkant kan net ooit een simmetrielyn hê.', 'Dit is nie simmetries langs hierdie lyn nie, want die bo- en onderdriehoeke is anders as die linker- en regterdriehoeke.', 'Die bo- en onderdriehoeke spieël mekaar, en die linker- en regterdriehoeke spieël elkeen hulself oor hierdie lyn, so dit het ook ʼn tweede simmetrielyn.', 'Dit is simmetries langs hierdie lyn, maar net as die vierkant eers gedraai word.'], correctIndex: 2, explanation: 'Die bo- en onderdriehoeke spieël mekaar, en die linker- en regterdriehoeke spieël elkeen hulself oor hierdie lyn, so dit het ook ʼn tweede simmetrielyn ✓ (ʼn vierkant het eintlik 4 simmetrielyne, die driehoeke is identies aan elke kant, en geen draai is nodig nie.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="65" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,20 85,65 135,65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,180 85,135 135,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,85 40,100 75,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,85 180,100 145,115" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="20" y1="100" x2="200" y2="100" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 1 driehoek gesentreer bo-op ʼn reghoek, maar die driehoek leun effens na een kant toe in plaas daarvan om reguit op te wys. Watter stelling oor simmetrie langs ʼn vertikale lyn deur die middel is korrek?', checkMode: 'auto', options: ['Dit is simmetries, aangesien die driehoek steeds horisontaal oor die reghoek gesentreer is.', 'Dit is nie simmetries nie, want ʼn leunende (skeewe) driehoek is nie ʼn spieëlbeeld van homself nie, so die twee helftes sou nie ooreenstem wanneer gevou nie.', 'Dit is simmetries, want die reghoek is simmetries, so die hele saamgestelde vorm moet ook wees.', 'Dit is nie simmetries nie, want reghoeke het nooit ʼn simmetrielyn nie.'], correctIndex: 1, explanation: 'ʼn Leunende (skeewe) driehoek is nie ʼn spieëlbeeld van homself nie, so die twee helftes sou nie ooreenstem wanneer gevou nie ✓ (horisontale sentrering is nie genoeg sodra die driehoek leun nie, een simmetriese deel waarborg nie dat die hele vorm simmetries is nie, en reghoeke het wel simmetrielyne.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="65" y="85" width="90" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="125,40 95,85 145,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="25" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Skoenlapperprentjie het 2 identiese vlerksirkels, een links en een regs van ʼn sentrale reghoeklyf, albei dieselfde grootte en dieselfde afstand van die lyf af. Watter stelling oor simmetrie langs ʼn vertikale lyn deur die lyf is korrek?', checkMode: 'auto', options: ['Dit is nie simmetries nie, want sirkels kan nooit deel wees van ʼn simmetriese saamgestelde vorm nie.', 'Dit is nie simmetries nie, want die vlerke is aan teenoorgestelde kante, so hulle kan nie ooreenstem nie.', 'Dit is simmetries, maar net omdat die lyf ʼn reghoek is.', 'Die twee identiese vlerke spieël mekaar presies oor die vertikale lyn deur die lyf, so dit is simmetries.'], correctIndex: 3, explanation: 'Die twee identiese vlerke spieël mekaar presies oor die vertikale lyn deur die lyf ✓ (sirkels kan wel deel wees van simmetriese vorms, om aan teenoorgestelde kante te wees is juis wat hulle laat spieël eerder as wat hulle verhoed, en die vorm van die lyf is nie wat die simmetrie hier skep nie.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="95" y="65" width="30" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="70" cy="92" r="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="150" cy="92" r="28" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="45" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Watter stelling beskryf die algemene reël korrek om te kontroleer of ʼn saamgestelde vorm simmetries is langs ʼn gekose voulyn?', checkMode: 'auto', options: ['Verbeel jou dat jy die vorm langs daardie lyn vou — as elke basiese vorm op die een kant ʼn identiese passende vorm in dieselfde posisie aan die ander kant het, is dit simmetries langs daardie lyn.', 'ʼn Saamgestelde vorm is simmetries as dit uit meer as 3 basiese vorms bestaan.', 'ʼn Saamgestelde vorm is simmetries as elke basiese vorm wat gebruik is dieselfde kleur is.', 'ʼn Saamgestelde vorm is simmetries as dit dieselfde lyk nadat dit gedraai is, ongeag vou.'], correctIndex: 0, explanation: 'Om vir simmetrie langs ʼn gekose lyn te kontroleer, verbeel jou dat jy die saamgestelde vorm langs daardie lyn vou. As elke basiese vorm op die een kant ʼn identiese passende basiese vorm in dieselfde posisie aan die ander kant het, is die saamgestelde vorm simmetries langs daardie lyn ✓ (die aantal dele en hul kleur het niks met simmetrielyne te doen nie, en om dieselfde te lyk na ʼn draai is ʼn ander eienskap genaamd rotasiesimmetrie.)' },

        // Blok D — Tesselasie: Watter Vorms Tesseleer en Waarom (pos 13-16, Medium)
        { difficulty: 'Medium', question: 'Watter van hierdie vorms tesseleer op sy eie?', checkMode: 'auto', options: ['Reëlmatige vyfhoek', 'Sirkel', 'Reëlmatige seshoek', 'Geeneen van hierdie vorms tesseleer nie'], correctIndex: 2, explanation: 'Reëlmatige seshoeke tesseleer omdat 3 van hul 120°-hoeke presies rondom ʼn punt pas (3 × 120° = 360°); reëlmatige vyfhoeke en sirkels laat albei gapings, so "geeneen nie" is ook verkeerd aangesien seshoeke wel tesseleer ✓' },
        { difficulty: 'Medium', question: 'Watter stelling oor sirkels en tessellasie is korrek?', checkMode: 'auto', options: ['Sirkels tesseleer perfek omdat hulle ʼn geboë vorm is.', 'Sirkels tesseleer nie — hulle laat altyd geboë gapings tussen hulle.', 'Sirkels tesseleer net wanneer hulle in reguit rye gerangskik word, nie in ʼn rooster nie.', 'Sirkels tesseleer presies soos vierkante.'], correctIndex: 1, explanation: 'Sirkels laat altyd geboë gapings tussen hulle, ongeag hoe hulle gerangskik word, so hulle tesseleer nie ✓' },
        { difficulty: 'Medium', question: 'Kyk na die diagram: 4 vierkante wat by ʼn enkele punt ontmoet, met elke hoek gemerk. Elke hoek van ʼn vierkant is 90°. Wat gebeur by die punt waar hulle ontmoet?', checkMode: 'auto', options: ['Hulle laat ʼn klein gaping, aangesien 90°×4 = 340°.', 'Hulle oorvleuel effens, aangesien 90°×4 = 380°.', 'Hulle pas presies met geen gaping nie, aangesien 90°×4 = 360°.', 'Dit hang af van die grootte van die vierkante.'], correctIndex: 2, explanation: '90° + 90° + 90° + 90° = 360°, ʼn volledige draai met geen gaping oor nie ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="95" fill="#2563eb" font-weight="700" font-size="14" text-anchor="middle">90°×4</text><circle cx="100" cy="100" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Kyk na die diagram: 3 reëlmatige seshoeke wat by ʼn enkele punt ontmoet, elke hoek gemerk 120°. Wat gebeur by die punt waar hulle ontmoet?', checkMode: 'auto', options: ['Hulle laat ʼn klein gaping, aangesien 120°×3 = 300°.', 'Hulle pas presies met geen gaping nie, aangesien 120°×3 = 360°.', 'Hulle oorvleuel effens, aangesien 120°×3 = 400°.', 'Dit hang af van die grootte van die seshoeke.'], correctIndex: 1, explanation: '120° + 120° + 120° = 360°, ʼn volledige draai, so geen gaping bly oor nie ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,90 79,72 79,36 110,18 141,36 141,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 141,72 172,90 172,126 141,144 110,126" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,126 79,144 48,126 48,90 79,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="150" fill="#2563eb" font-weight="700" font-size="13" text-anchor="middle">120°×3</text><circle cx="110" cy="90" r="4" fill="#dc2626"/></svg>' },

        // Blok E — Woordprobleme en Veelstappige Toepassings (pos 17-18, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Klas van 6 leerders bou elkeen ʼn identiese robotprentjie met 1 vierkant (kop), 1 reghoek (lyf) en 2 sirkels (oë). Hoeveel basiese vorms is altesaam deur die hele klas gebruik?', checkMode: 'auto', options: ['18', '20', '24', '30'], correctIndex: 2, explanation: 'Elke robot gebruik 1 + 1 + 2 = 4 basiese vorms. 6 leerders × 4 vorms = 24 basiese vorms ✓ (18 kom van slegs 3 vorms per robot; 20 kom van slegs 5 leerders tel; 30 kom van 5 vorms per robot.)' },
        { difficulty: 'Hard', question: 'ʼn Teëlwerker bedek ʼn reghoekige gang met vierkantige teëls, en weet vierkante tesseleer met geen gapings. Sy gebruik 8 rye van 5 teëls elk. Hoeveel vierkantige teëls het sy altesaam nodig?', checkMode: 'auto', options: ['13', '35', '45', '40'], correctIndex: 3, explanation: 'Vierkantige teëls tesseleer met geen gapings nie, so die hele vloer word bedek deur 8 × 5 = 40 teëls ✓ (13 tel verkeerdelik 8+5 op in plaas van vermenigvuldig; 35 gebruik net 7 rye; 45 gebruik 9 rye.)' },

        // Blok F — Redenasie, Regverdiging en Foutopsporing (Sluitstuk) (pos 19, Moeilik)
        { difficulty: 'Hard', question: 'Watter verduideliking beskryf korrek waarom reëlmatige seshoeke op hul eie tesseleer maar sirkels nie, al kan beide vorms redelik rond lyk wanneer baie van hulle saam geplaas word?', checkMode: 'auto', options: ['Seshoeke het reguit sye en hoeke (elk 120°) wat eweredig in 360° deel, so 3 seshoeke pas perfek rondom ʼn punt met geen gapings nie; sirkels het geen reguit sye nie, so hul geboë rande laat altyd klein gapings.', 'Seshoeke tesseleer omdat hulle groter is as sirkels, wat altyd gapings laat ongeag hul hoeke.', 'Sirkels tesseleer nie omdat hulle te veel sye het nie; seshoeke het minder sye so hulle pas beter inmekaar.', 'Albei vorms tesseleer eintlik ewe goed — dit lyk net anders omdat sirkels rond is.'], correctIndex: 0, explanation: 'ʼn Reëlmatige seshoek het reguit sye en hoeke (elk 120°) wat eweredig in 360° deel, so 3 seshoeke pas perfek rondom ʼn punt met geen gapings nie. ʼn Sirkel het ʼn geboë rand met geen reguit sye of hoeke nie, so sirkels wat langs mekaar geplaas word, laat altyd klein gapings tussen hulle ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het saamgestelde vorms en tessellasie in Stel 1 bemeester.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug en lees weer deur die studiegids.' },
        { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok A — Basiese Vorms Identifiseer en Tel (pos 0-3, Maklik)
        { difficulty: 'Easy', question: 'Kyk na die prentjie: ʼn roomys gemaak van 1 sirkel (die skepbal) wat bo-op 1 driehoek (die horinkie) sit. Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', checkMode: 'auto', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: '1 sirkel + 1 driehoek = 2 basiese vorms altesaam ✓ (1 behandel die twee vorms as een; 3 en 4 tel een van die vorms dubbel.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="65" r="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,150 80,95 140,95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Met dieselfde roomysprentjie (1 sirkel-skepbal op 1 driehoek-horinkie), watter twee basiese vorms maak hierdie saamgestelde vorm op?', checkMode: 'auto', options: ['1 reghoek en 1 sirkel', '1 vierkant en 1 driehoek', '1 sirkel en 1 driehoek', '2 sirkels'], correctIndex: 2, explanation: 'Die roomys is gemaak van 1 sirkel (die skepbal) en 1 driehoek (die horinkie) ✓ (die ander opsies gebruik vorms wat nie voorkom nie, of noem net een vormtipe.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="110" cy="65" r="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,150 80,95 140,95" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die prentjie: ʼn windpomp gemaak van 4 driehoeke (die lemme) en 1 reghoek (die paal). Hoeveel VERSKILLENDE basiese vormtipes is gebruik?', checkMode: 'auto', options: ['1', '3', '2', '4'], correctIndex: 2, explanation: 'Die windpomp gebruik driehoeke en ʼn reghoek — 2 verskillende vormtipes, al is daar 4 driehoeklemme ✓ (1 behandel verkeerdelik die reghoek en driehoeke as dieselfde tipe; 3 en 4 verwar die aantal driehoekstukke met die aantal vormtipes.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="103" y="90" width="14" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,45 150,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 155,90 140,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,45 70,60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 65,90 80,50" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Visprentjie is gemaak van 1 sirkel (lyf), 1 driehoek (stert) en 1 klein driehoek (vin). Hoeveel basiese vorms is altesaam gebruik?', checkMode: 'auto', options: ['2', '3', '4', '5'], correctIndex: 1, explanation: '1 sirkel + 1 driehoek + 1 driehoek = 3 basiese vorms ✓ (2 vergeet om een van die twee driehoeke te tel; 4 en 5 tel ʼn vorm dubbel.)' },

        // Blok B — Veeldelige Saamgestelde Telling en Noeming (pos 4-7, Maklik-Medium)
        { difficulty: 'Medium', question: 'ʼn Ruspeerprentjie is gemaak van 6 sirkels vir die lyf en 2 klein driehoeke vir voelhorings. Hoeveel basiese vorms is altesaam gebruik?', checkMode: 'auto', options: ['6', '7', '10', '8'], correctIndex: 3, explanation: '6 sirkels + 2 driehoeke = 8 basiese vorms ✓ (6 vergeet die voelhoring-driehoeke; 7 tel een te min; 10 tel verkeerdelik twee ekstra vorms by.)' },
        { difficulty: 'Medium', question: 'ʼn Prentjie van ʼn eenvoudige persoon is gemaak van 1 sirkel (kop), 1 reghoek (lyf), 2 reghoeke (arms) en 2 reghoeke (bene). Hoeveel basiese vorms is altesaam gebruik?', checkMode: 'auto', options: ['4', '5', '6', '7'], correctIndex: 2, explanation: '1 sirkel + 1 reghoek + 2 reghoeke + 2 reghoeke = 6 basiese vorms ✓ (4 tel net die kop en een paar ledemate; 5 mis een reghoek; 7 tel een reghoek dubbel.)' },
        { difficulty: 'Medium', question: 'Amahle tel die vorms in ʼn kasteelprentjie (1 reghoekmuur, 2 vierkanttorings, 2 driehoekdakke) en sê daar is 4 basiese vorms altesaam. Watter stelling evalueer Amahle se antwoord korrek?', checkMode: 'auto', options: ['Amahle is korrek — daar is 4 basiese vorms altesaam.', 'Amahle is nie korrek nie — daar is 5 basiese vorms altesaam; sy het seker vergeet om een van die vorms te tel.', 'Amahle is nie korrek nie — daar is 6 basiese vorms altesaam, aangesien elke toring twee keer getel moet word.', 'Amahle is korrek, maar net omdat die dakke nie as basiese vorms tel nie.'], correctIndex: 1, explanation: 'Die kasteel het 1 reghoek + 2 vierkante + 2 driehoeke = 5 basiese vorms altesaam, nie 4 nie — Amahle het seker vergeet om een van die vorms te tel ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie saamgestelde vorms kan gebou word met presies 1 reghoek en 2 vierkante?', checkMode: 'auto', options: ['ʼn Treinwa — 1 reghoeklyf met 2 vierkantvensters', 'ʼn Robot — 1 vierkantkop, 1 reghoeklyf, 2 sirkeloë', 'ʼn Kasteel — 1 reghoekmuur, 2 vierkanttorings, 2 driehoekdakke', 'ʼn Windpomp — 4 driehoeklemme en 1 reghoekpaal'], correctIndex: 0, explanation: 'ʼn Treinwa gebou van 1 reghoeklyf en 2 vierkantvensters gebruik presies 1 reghoek en 2 vierkante ✓ (die robot gebruik sirkels in plaas van ʼn tweede vierkant, die kasteel gebruik ekstra driehoeke, en die windpomp het glad nie vierkante nie.)' },

        // Blok C — Saamgestelde Vorms en Simmetrielyn (pos 8-12, Medium) — gedeelde diagram-reeks
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van ʼn reghoek met 1 halfsirkel aan die boonste rand vasgemaak, presies in die middel gesentreer (soos ʼn eenvoudige boogingang). Watter stelling oor simmetrie langs ʼn vertikale lyn deur die middel is korrek?', checkMode: 'auto', options: ['Die halfsirkel is presies op die reghoek gesentreer, so ʼn vou langs die vertikale middellyn laat albei helftes ooreenstem — dit is simmetries.', 'Dit is nie simmetries nie, want ʼn halfsirkel kan nooit deel wees van ʼn simmetriese vorm nie.', 'Dit is nie simmetries nie, want die reghoek en die halfsirkel is verskillende vorms.', 'Dit is simmetries, maar net langs ʼn horisontale lyn, nie ʼn vertikale een nie.'], correctIndex: 0, explanation: 'Aangesien die halfsirkel presies op die reghoek gesentreer is, sal ʼn vou langs die vertikale middellyn albei helftes laat ooreenstem ✓ (ʼn halfsirkel kan wel deel wees van ʼn simmetriese saamgestelde vorm, twee verskillende basiese vorms verhoed nie simmetrie nie, en die korrekte lyn hier is inderdaad vertikaal.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="85" width="110" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75 85 A 35 35 0 0 1 145 85 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="35" x2="110" y2="150" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde vorm as voorheen (ʼn reghoek met ʼn halfsirkel gesentreer bo-op), watter stelling oor simmetrie langs ʼn horisontale lyn deur die middel van die reghoek is korrek?', checkMode: 'auto', options: ['Dit is simmetries, want die reghoek self is simmetries langs ʼn horisontale lyn.', 'Die halfsirkel verskyn net bo die reghoek, so ʼn vou langs ʼn horisontale middellyn sal nie ʼn vorm daaronder laat ooreenstem nie — dit is nie simmetries langs hierdie lyn nie.', 'Dit is simmetries, want halfsirkels is altyd simmetries in elke rigting.', 'Dit is nie simmetries langs enige lyn nie, aangesien dit uit twee verskillende basiese vorms bestaan.'], correctIndex: 1, explanation: 'Die halfsirkel verskyn net bo die reghoek, so ʼn vou langs ʼn horisontale middellyn sal nie ʼn vorm daaronder laat ooreenstem nie — hierdie vorm het net ʼn vertikale simmetrielyn ✓ (die reghoek se eie simmetrie maak nie die hele saamgestelde vorm simmetries langs daardie lyn nie, ʼn halfsirkel is nie in elke rigting simmetries nie, en hierdie vorm het wel ʼn vertikale simmetrielyn.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="55" y="85" width="110" height="55" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 75 85 A 35 35 0 0 1 145 85 Z" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="30" y1="112" x2="190" y2="112" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 2 driehoeke aan ʼn sentrale vierkant vasgemaak, maar een driehoek is groter as die ander. Watter stelling oor simmetrie langs die lyn tussen die twee driehoeke is korrek?', checkMode: 'auto', options: ['Dit is simmetries, want albei aangehegte vorms is driehoeke.', 'Dit is nie simmetries nie, want die twee driehoeke is verskillende groottes, so hulle kan nie presies ooreenstem wanneer gevou nie.', 'Dit is simmetries, want die vierkant in die middel is simmetries.', 'Dit is nie simmetries nie, want driehoeke kan nooit deel wees van ʼn simmetriese vorm nie.'], correctIndex: 1, explanation: 'Aangesien die twee driehoeke verskillende groottes het, kan hulle nie presies ooreenstem wanneer gevou nie, so die vorm is nie simmetries nie ✓ (om dieselfde vormtipe te wees is nie genoeg as die groottes verskil nie, die vierkant wat simmetries is, maak nie onpassende driehoeke reg nie, en driehoeke kan wel deel wees van simmetriese vorms wanneer hulle ooreenstem.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="75" y="70" width="70" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="75,105 40,90 75,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="145,105 190,95 145,140" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="155" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Gesigprentjie het 2 identiese sirkel-oë simmetries geplaas en 1 halfsirkel-glimlag presies in die middel gesentreer. Watter stelling oor simmetrie langs ʼn vertikale lyn deur die middel van die hele saamgestelde gesigsprentjie is korrek?', checkMode: 'auto', options: ['Aangesien die oë simmetries geplaas is en die glimlag gesentreer is, stem elke deel ooreen oor die vertikale middellyn — dit is simmetries.', 'Dit is nie simmetries nie, want ʼn gesig kan nooit ʼn simmetriese saamgestelde vorm wees nie.', 'Dit is nie simmetries nie, want die glimlag is ʼn halfsirkel en die oë is sirkels, wat verskillende vorms is.', 'Dit is simmetries, maar net langs ʼn horisontale lyn deur die oë.'], correctIndex: 0, explanation: 'Aangesien die oë simmetries geplaas is en die glimlag gesentreer is, stem elke deel ooreen oor die vertikale middellyn ✓ (ʼn gesig gemaak van ooreenstemmende basiese vorms kan beslis simmetries wees, om twee verskillende vormtipes te gebruik verhoed nie simmetrie nie, en die vertikale lyn — nie ʼn horisontale een nie — is die een wat hier ooreenstem.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><circle cx="85" cy="75" r="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="135" cy="75" r="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 90 110 A 25 25 0 0 0 130 110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="40" x2="110" y2="140" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Sipho bou ʼn saamgestelde vorm van 4 identiese klein driehoeke, elkeen aan een kant van ʼn sentrale vierkant vasgemaak (een bo-op, een onder, een links, een regs). Watter stelling verduidelik korrek waarom hierdie vorm simmetries is?', checkMode: 'auto', options: ['Dit is simmetries omdat die driehoeke identies en eweredig aan al vier kante van die vierkant geplaas is, wat dit beide ʼn vertikale en ʼn horisontale simmetrielyn gee.', 'Dit is simmetries net omdat ʼn vierkant altyd simmetries is, ongeag wat daaraan vasgemaak is.', 'Dit is simmetries omdat daar presies 4 driehoeke is, en enige vorm met 4 identiese dele is outomaties simmetries.', 'Dit is net simmetries langs een diagonale lyn, aangesien die driehoeke in verskillende rigtings wys.'], correctIndex: 0, explanation: 'Hierdie vorm is simmetries omdat die driehoeke identies en eweredig aan al vier kante van die vierkant geplaas is. Dit het ten minste twee simmetrielyne: ʼn vertikale lyn deur die middel en ʼn horisontale lyn deur die middel ✓ (die vierkant alleen wat simmetries is, is nie die rede sodra vorms ongelyk vasgemaak word nie, om 4 identiese dele te hê waarborg nie outomaties simmetrie tensy hulle simmetries geplaas is nie, en hierdie spesifieke rangskikking is nie beperk tot ʼn diagonale lyn nie.)' },

        // Blok D — Tesselasie: Watter Vorms Tesseleer en Waarom (pos 13-16, Medium)
        { difficulty: 'Medium', question: 'Watter van hierdie vorms tesseleer op sy eie?', checkMode: 'auto', options: ['Sirkel', 'Reëlmatige vyfhoek', 'Geeneen van hierdie vorms tesseleer nie', 'Vierkant'], correctIndex: 3, explanation: 'Vierkante pas rand-aan-rand inmekaar met geen gapings en tesseleer; sirkels en reëlmatige vyfhoeke laat altyd gapings, so "geeneen nie" is ook verkeerd aangesien vierkante wel tesseleer ✓' },
        { difficulty: 'Medium', question: 'Watter stelling oor gelyksydige driehoeke en tessellasie is korrek?', checkMode: 'auto', options: ['Gelyksydige driehoeke tesseleer nie, want hul hoeke is te klein.', 'Gelyksydige driehoeke pas perfek rondom ʼn punt inmekaar met geen gapings nie, so hulle tesseleer.', 'Gelyksydige driehoeke tesseleer net wanneer hulle met vierkante gemeng word.', 'Gelyksydige driehoeke oorvleuel wanneer hulle rand-aan-rand geplaas word.'], correctIndex: 1, explanation: 'Gelyksydige driehoeke pas perfek rondom ʼn punt inmekaar met geen gapings nie, so hulle tesseleer ✓' },
        { difficulty: 'Medium', question: 'Kyk na die diagram: 6 gelyksydige driehoeke wat by ʼn enkele punt ontmoet, elke hoek gemerk 60°. Wat gebeur by die punt waar hulle ontmoet?', checkMode: 'auto', options: ['Hulle laat ʼn klein gaping, aangesien 60°×6 = 340°.', 'Hulle oorvleuel effens, aangesien 60°×6 = 380°.', 'Hulle pas presies met geen gaping nie, aangesien 60°×6 = 360°.', 'Dit hang af van die grootte van die driehoeke.'], correctIndex: 2, explanation: '60° × 6 = 360°, ʼn volledige draai, so geen gaping bly oor wanneer die driehoeke by die punt ontmoet nie ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,85 145,65 145,105" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 145,105 110,125" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 110,125 75,105" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 75,105 75,65" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 75,65 110,45" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,85 110,45 145,65" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="110" y="80" fill="#2563eb" font-weight="700" font-size="12" text-anchor="middle">60°×6</text><circle cx="110" cy="85" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige vyfhoek het binnehoeke van elk 108°. Watter stelling oor 3 van hierdie hoeke wat by ʼn punt ontmoet, is korrek?', checkMode: 'auto', options: ['3 × 108° = 360°, so 3 vyfhoeke pas presies rondom ʼn punt met geen gaping nie.', '3 × 108° = 324°, wat minder as 360° is, so daar bly ʼn gaping oor.', '3 × 108° = 396°, wat meer as 360° is, so die vyfhoeke oorvleuel.', '3 × 108° is altyd gelyk aan 360° vir enige reëlmatige veelhoek.'], correctIndex: 1, explanation: '108° + 108° + 108° = 324°, wat minder as 360° is, so daar bly ʼn gaping oor ✓' },

        // Blok E — Woordprobleme en Veelstappige Toepassings (pos 17-18, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Halssnoerpatroon herhaal 1 sirkelkraal dan 1 vierkantkraal dan 1 sirkelkraal dan 1 vierkantkraal, ensovoorts. As daar altesaam 16 krale is, hoeveel is vierkante?', checkMode: 'auto', options: ['4', '6', '10', '8'], correctIndex: 3, explanation: 'Die patroon wissel sirkel, vierkant, sirkel, vierkant... so presies die helfte van die 16 krale is vierkante: 16 ÷ 2 = 8 ✓ (4 en 6 tel te min; 10 tel te veel vierkante.)' },
        { difficulty: 'Hard', question: 'Kagiso bou ʼn heiningpatroon met 9 identiese driehoekige heiningpale en 9 identiese reghoekige heiningpanele, om die beurt afwisselend. Hoeveel basiese vorms maak die hele heiningpatroon op?', checkMode: 'auto', options: ['9', '16', '18', '20'], correctIndex: 2, explanation: '9 driehoeke + 9 reghoeke = 18 basiese vorms ✓ (9 tel net een tipe paal; 16 en 20 kom van ʼn foutiewe telling van een van die totale.)' },

        // Blok F — Redenasie, Regverdiging en Foutopsporing (Sluitstuk) (pos 19, Moeilik)
        { difficulty: 'Hard', question: 'Watter verduideliking beantwoord korrek of dit waarborg dat ʼn saamgestelde vorm wat simmetries is, ook sal tesseleer as dit herhaal word, met ʼn simmetriese huisvorm (1 dakdriehoek gesentreer op 1 vierkant) as voorbeeld?', checkMode: 'auto', options: ['Nee — die vierkantmure tesseleer wel op hul eie, maar die driehoekdak wat uitsteek sou gapings tussen herhaalde huise laat tensy die vorm spesiaal ontwerp is om inmekaar te pas; simmetrie en tessellasie is aparte eienskappe.', 'Ja — enige simmetriese saamgestelde vorm sal altyd perfek tesseleer wanneer dit herhaal word.', 'Nee — simmetriese vorms kan nooit tesseleer nie, want hul gespieëlde helftes laat altyd gapings.', 'Ja — omdat die vierkantdeel van die huis simmetries is, moet die hele huisvorm ook tesseleer.'], correctIndex: 0, explanation: 'Simmetrie waarborg nie tessellasie nie. Die vierkantmure tesseleer wel op hul eie, maar die driehoekdak wat uitsteek sou gapings tussen herhaalde huise laat tensy die vorm spesiaal ontwerp is om inmekaar te pas. Simmetrie gaan oor een vorm wat op homself vou, terwyl tessellasie gaan oor baie kopieë van ʼn vorm wat sonder gapings inmekaar pas — dit is aparte eienskappe ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het saamgestelde vorms en tessellasie in Stel 2 bemeester.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug en lees weer deur die studiegids.' },
        { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok A — Basiese Vorms Identifiseer en Tel (pos 0-3, Maklik)
        { difficulty: 'Easy', question: 'Kyk na die prentjie: ʼn pyl gemaak van 1 driehoek (die punt) wat aan 1 reghoek (die skag) vasgemaak is. Hoeveel basiese vorms maak hierdie saamgestelde vorm altesaam op?', checkMode: 'auto', options: ['1', '3', '2', '4'], correctIndex: 2, explanation: '1 driehoek + 1 reghoek = 2 basiese vorms altesaam ✓ (1 behandel die twee vorms as een; 3 en 4 kom van dubbeltelling van een van die vorms.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="100" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="140,55 140,115 185,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Met dieselfde pylprentjie (1 driehoekpunt op 1 reghoekskag), watter twee basiese vorms maak hierdie saamgestelde vorm op?', checkMode: 'auto', options: ['1 vierkant en 1 driehoek', '1 sirkel en 1 reghoek', '1 driehoek en 1 reghoek', '2 reghoeke'], correctIndex: 2, explanation: 'Die pyl is gemaak van 1 driehoek (die punt) en 1 reghoek (die skag) ✓ (die ander opsies gebruik ʼn vorm wat nie voorkom nie, of mis die driehoekpunt heeltemal.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="40" y="70" width="100" height="30" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="140,55 140,115 185,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'Kyk na die prentjie: ʼn vuurpyl gemaak van 1 driehoek (neuskeël), 1 reghoek (lyf) en 2 klein driehoeke (vinne). Hoeveel VERSKILLENDE basiese vormtipes is gebruik?', checkMode: 'auto', options: ['1', '3', '4', '2'], correctIndex: 3, explanation: 'Die vuurpyl gebruik driehoeke en ʼn reghoek — 2 verskillende vormtipes, al is daar altesaam 3 driehoeke ✓ (1 behandel verkeerdelik die reghoek en driehoeke as dieselfde tipe; 3 en 4 verwar die aantal driehoekstukke met die aantal vormtipes.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="95" y="70" width="30" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="95,70 125,70 110,35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="95,140 75,140 95,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="125,140 145,140 125,110" fill="none" stroke="#0f1f3d" stroke-width="2.5"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Skoenlapperprentjie is gemaak van 4 sirkels (die vlerke) en 1 reghoek (die lyf). Hoeveel basiese vorms is altesaam gebruik?', checkMode: 'auto', options: ['4', '5', '6', '8'], correctIndex: 1, explanation: '4 sirkels + 1 reghoek = 5 basiese vorms ✓ (4 vergeet die reghoeklyf; 6 en 8 tel een van die vlerksirkels dubbel.)' },

        // Blok B — Veeldelige Saamgestelde Telling en Noeming (pos 4-7, Maklik-Medium)
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm genaamd ʼn "verkeerslig" is gemaak van 1 reghoek (die boks) en 3 sirkels (die ligte). Hoeveel basiese vorms is altesaam gebruik?', checkMode: 'auto', options: ['3', '4', '5', '6'], correctIndex: 1, explanation: '1 reghoek + 3 sirkels = 4 basiese vorms ✓ (3 vergeet een van die ligte; 5 en 6 tel ʼn lig dubbel.)' },
        { difficulty: 'Medium', question: 'Thandi bou 2 identiese robotprentjies, en elke robot gebruik 1 vierkant (kop), 1 reghoek (lyf), 2 sirkels (oë) en 2 reghoeke (arms). Hoeveel basiese vorms het sy altesaam vir albei robotte gebruik?', checkMode: 'auto', options: ['6', '10', '12', '14'], correctIndex: 2, explanation: 'Elke robot gebruik 1 + 1 + 2 + 2 = 6 basiese vorms. 2 robotte × 6 vorms = 12 basiese vorms ✓ (6 tel net een robot; 10 en 14 kom van ʼn foutiewe telling van die vorms per robot.)' },
        { difficulty: 'Medium', question: "Bongani tel die vorms in ʼn blommetuinprentjie (3 identiese blomme, elkeen gemaak van 4 blomblaar-sirkels en 1 middelsirkel) en sê daar is 12 basiese vorms altesaam. Watter stelling evalueer Bongani se antwoord korrek?", checkMode: 'auto', options: ['Bongani is korrek — daar is 12 basiese vorms altesaam.', 'Bongani is nie korrek nie — daar is 15 basiese vorms altesaam, aangesien elke blom 4 + 1 = 5 sirkels het en 3 blomme × 5 sirkels = 15; hy het seker een blom verkeerd getel.', 'Bongani is nie korrek nie — daar is 9 basiese vorms altesaam, aangesien net die blomblare getel moet word.', 'Bongani is korrek, maar net as die middelsirkels ignoreer word.'], correctIndex: 1, explanation: 'Elke blom het 4 + 1 = 5 sirkels, en 3 blomme × 5 sirkels = 15 basiese vorms altesaam, nie 12 nie — Bongani het seker een van die blomme verkeerd getel ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie saamgestelde vorms kan gebou word met presies 3 sirkels en 1 driehoek?', checkMode: 'auto', options: ['ʼn Sneeupop met ʼn driehoek-wortelneus — 3 gestapelde sirkels vir die lyf en ʼn klein driehoek vir die neus', 'ʼn Robot — 1 vierkantkop, 1 reghoeklyf, 2 sirkeloë', 'ʼn Verkeerslig — 1 reghoekboks en 3 sirkelligte', 'ʼn Boot — 1 driehoekseil, 1 reghoeklyf, 1 halfsirkelromp'], correctIndex: 0, explanation: 'ʼn Sneeupop gebou van 3 gestapelde sirkels en ʼn klein driehoekneus gebruik presies 3 sirkels en 1 driehoek ✓ (die robot gebruik ʼn vierkant en reghoek, die verkeerslig het geen driehoek nie, en die boot gebruik ʼn reghoek en halfsirkel in plaas van ekstra sirkels.)' },

        // Blok C — Saamgestelde Vorms en Simmetrielyn (pos 8-12, Medium) — gedeelde diagram-reeks
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm het 6 identiese klein driehoeke eweredig en simmetries rondom ʼn sentrale reëlmatige seshoek gerangskik, soos die blomblare van ʼn blom. Watter stelling oor simmetrie langs ʼn lyn wat deur die middel en deur 2 teenoorgestelde blomblare loop, is korrek?', checkMode: 'auto', options: ['Aangesien die 6 blomblare met gelyke spasiëring regrondom die seshoek geplaas is, laat ʼn lyn deur 2 teenoorgestelde blomblare albei helftes presies ooreenstem — dit is simmetries.', 'Dit is nie simmetries nie, want ʼn seshoek kan net ooit een simmetrielyn hê.', 'Dit is nie simmetries nie, want die blomblare aan teenoorgestelde kante raak nie mekaar nie.', 'Dit is simmetries, maar net as die blomblare verskillende kleure is.'], correctIndex: 0, explanation: 'Aangesien die 6 blomblare met gelyke spasiëring regrondom die seshoek geplaas is, laat ʼn lyn deur 2 teenoorgestelde blomblare albei helftes presies ooreenstem ✓ (ʼn reëlmatige seshoek het eintlik 6 simmetrielyne, teenoorgestelde blomblare hoef nie mekaar te raak om mekaar te spieël nie, en kleur het niks met geometriese ooreenstemming te doen nie.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,65 135,80 135,110 110,125 85,110 85,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,65 96,32 124,32" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,125 96,158 124,158" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,80 51,66 51,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,110 51,96 51,124" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,80 169,66 169,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,110 169,96 169,124" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="110" y1="18" x2="110" y2="172" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde blomvorm as voorheen (6 identiese blomblare eweredig rondom ʼn sentrale seshoek), watter stelling oor hoeveel simmetrielyne dit het, is korrek?', checkMode: 'auto', options: ['Dit het net een simmetrielyn, aangesien dit ʼn onewe aantal blomblare aan elke kant het.', 'Omdat die seshoek en die 6 eweredig-geplaasde blomblare met gelyke spasiëring regrondom gerangskik is, is daar verskeie verskillende lyne deur die middel wat albei helftes laat ooreenstem — dit het meer as een simmetrielyn.', 'Dit het geen simmetrielyne nie, want blomblare is geboë-lykende vorms.', 'Dit het presies 2 simmetrielyne, ongeag hoeveel blomblare bygevoeg word.'], correctIndex: 1, explanation: 'Omdat die seshoek en die 6 eweredig-geplaasde blomblare met gelyke spasiëring regrondom gerangskik is, is daar verskeie verskillende lyne deur die middel wat albei helftes laat ooreenstem ✓ (die blomblare is eweredig gespasieer, nie ongelyk gerangskik nie; blomblare gemaak van driehoeke het reguit sye, nie geboë nie; en die aantal simmetrielyne hang af van die rangskikking, dit is nie vas op 2 nie.)', diagramSvg: '<svg viewBox="0 0 220 190" xmlns="http://www.w3.org/2000/svg"><polygon points="110,65 135,80 135,110 110,125 85,110 85,80" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,65 96,32 124,32" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="110,125 96,158 124,158" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,80 51,66 51,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="85,110 51,96 51,124" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,80 169,66 169,94" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="135,110 169,96 169,124" fill="none" stroke="#0f1f3d" stroke-width="2"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van 2 identiese vierkante wat diagonaal teenoor mekaar rondom ʼn sentrale punt geplaas is, met 2 verskillende-grootte sirkels in die oorblywende teenoorgestelde posisies geplaas. Watter stelling oor simmetrie om ʼn lyn wat deur die middel en deur albei vierkante loop, is korrek?', checkMode: 'auto', options: ['Dit is simmetries om daardie lyn, want die twee vierkante is identies.', 'Dit is nie simmetries om daardie lyn nie, want die twee sirkels is verskillende groottes, so hulle spieël nie mekaar langs daardie lyn nie.', 'Dit is simmetries om daardie lyn, want sirkels is altyd simmetries ongeag hul grootte.', 'Dit is nie simmetries om enige lyn nie, want vierkante en sirkels kan nie simmetries gekombineer word nie.'], correctIndex: 1, explanation: 'Aangesien die twee sirkels verskillende groottes het, spieël hulle nie mekaar langs daardie lyn nie, so die saamgestelde vorm is nie simmetries daaromheen nie ✓ (die vierkante wat ooreenstem is nie genoeg wanneer die sirkels nie ooreenstem nie; ʼn sirkel wat op sy eie simmetries is, beteken nie twee verskillende-grootte sirkels spieël mekaar nie; en vierkante en sirkels kan wel simmetries gekombineer word wanneer die groottes ooreenstem.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="140" y="90" width="45" height="45" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="162" cy="57" r="26" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="57" cy="112" r="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="32" y1="44" x2="188" y2="126" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Saamgestelde vorm is gemaak van 2 identiese reghoeke wat langs mekaar geplaas is, met een lang rand wat gedeel word, om ʼn groter reghoek te vorm. Watter stelling oor simmetrie langs die vertikale lyn waar die twee reghoeke saamkom, is korrek?', checkMode: 'auto', options: ['Aangesien die twee reghoeke identies is, laat ʼn vou langs die verbindingslyn albei helftes presies ooreenstem — dit is simmetries.', 'Dit is nie simmetries nie, want twee reghoeke wat aanmekaar gevoeg word, vorm altyd ʼn vorm met geen simmetrie nie.', 'Dit is simmetries, maar net langs ʼn diagonale lyn, nie die verbindingslyn nie.', 'Dit is nie simmetries nie, want die verbindingslyn is nie presies in die middel van die groter reghoek nie.'], correctIndex: 0, explanation: 'Aangesien die twee reghoeke identies is, sal ʼn vou langs die verbindingslyn albei helftes presies laat ooreenstem ✓ (om twee identiese reghoeke aanmekaar te voeg, verwyder nie simmetrie nie; die verbindingslyn — nie ʼn diagonaal nie — is die simmetrielyn hier; en aangesien die reghoeke identies is, is die verbindingslyn presies in die middel.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="45" y="55" width="65" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="110" y="55" width="65" height="70" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="55" x2="110" y2="125" stroke="#dc2626" stroke-width="2" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat ʼn saamgestelde vorm ten minste 3 basiese dele moet hê voordat dit ʼn simmetrielyn kan hê. Watter stelling evalueer hierdie bewering korrek?', checkMode: 'auto', options: ['Die leerder is korrek — minder as 3 dele kan nooit ʼn simmetrielyn oplewer nie.', 'Die leerder is nie korrek nie — net 2 dele word benodig, byvoorbeeld 2 identiese halfsirkels wat met hul plat kante aan mekaar rakend geplaas word, vorm ʼn volle sirkel wat simmetries is langs enige lyn deur sy middelpunt; wat saak maak, is of die dele mekaar spieël, nie hoeveel dele daar is nie.', 'Die leerder is korrek, maar net vir vorms gemaak van sirkels.', 'Die leerder is nie korrek nie — ʼn enkele basiese vorm op sy eie kan nooit simmetries wees nie.'], correctIndex: 1, explanation: 'Net 2 basiese dele word benodig — byvoorbeeld, 2 identiese halfsirkels wat met hul plat kante aan mekaar rakend geplaas word, vorm ʼn volle sirkel wat simmetries is langs enige lyn deur sy middelpunt. Wat saak maak, is of die dele mekaar spieël, nie hoeveel dele daar is nie ✓' },

        // Blok D — Tesselasie: Watter Vorms Tesseleer en Waarom (pos 13-16, Medium)
        { difficulty: 'Medium', question: 'Watter stelling oor reëlmatige vyfhoeke en tessellasie is korrek?', checkMode: 'auto', options: ['Reëlmatige vyfhoeke tesseleer perfek op hul eie, net soos seshoeke.', 'Reëlmatige vyfhoeke laat altyd klein gapings tussen hulle, ongeag hoe hulle gerangskik word, so hulle tesseleer nie op hul eie nie.', 'Reëlmatige vyfhoeke tesseleer net wanneer hulle in rye gerangskik word.', 'Reëlmatige vyfhoeke oorvleuel wanneer hulle rand-aan-rand geplaas word.'], correctIndex: 1, explanation: 'Reëlmatige vyfhoeke laat altyd klein gapings tussen hulle, ongeag hoe hulle gerangskik word ✓' },
        { difficulty: 'Medium', question: 'Watter van hierdie vorms tesseleer op sy eie?', checkMode: 'auto', options: ['Reëlmatige vyfhoek', 'Sirkel', 'Reghoek', 'Geeneen van hierdie vorms tesseleer nie'], correctIndex: 2, explanation: 'Reghoeke tesseleer rand-aan-rand met geen gapings nie; reëlmatige vyfhoeke en sirkels laat altyd gapings, so "geeneen nie" is ook verkeerd aangesien reghoeke wel tesseleer ✓' },
        { difficulty: 'Medium', question: 'Kyk na die diagram: 3 reëlmatige seshoeke wat by ʼn punt ontmoet, elke hoek gemerk 120°. ʼn Reëlmatige vyfhoek het binnehoeke van 108°. Watter stelling oor 3 vyfhoeke wat by dieselfde punt ontmoet, is korrek?', checkMode: 'auto', options: ['3 × 108° = 360°, so vyfhoeke sou presies rondom ʼn punt pas net soos die seshoeke.', '3 × 108° = 324°, nie 360° nie, so ʼn gaping van 36° bly oor — dit is waarom vyfhoeke nie op hul eie kan tesseleer nie, terwyl seshoeke wel kan.', '3 × 108° = 384°, so die vyfhoeke sou oorvleuel.', 'Dit kan nie uitgewerk word sonder om die grootte van die vyfhoeke te ken nie.'], correctIndex: 1, explanation: '3 × 108° = 324°, nie 360° nie, so ʼn gaping van 36° bly oor — dit is waarom vyfhoeke nie op hul eie kan tesseleer nie, terwyl seshoeke wel kan ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,90 79,72 79,36 110,18 141,36 141,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 141,72 172,90 172,126 141,144 110,126" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="110,90 110,126 79,144 48,126 48,90 79,72" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="110" y="150" fill="#2563eb" font-weight="700" font-size="13" text-anchor="middle">120°×3</text><circle cx="110" cy="90" r="4" fill="#dc2626"/></svg>' },
        { difficulty: 'Medium', question: 'Kyk na die diagram: 4 vierkante wat by ʼn punt ontmoet, elke hoek 90°, wat optel tot 360° met geen gaping nie. Watter stelling oor 4 reëlmatige vyfhoeke (108° elk) wat by een punt ontmoet, is korrek?', checkMode: 'auto', options: ['4 × 108° = 360°, so die vyfhoeke sou presies soos die vierkante pas.', '4 × 108° = 340°, so die vyfhoeke sou ʼn klein gaping laat.', '4 × 108° = 432°, wat meer as 360° is — dit beteken die vyfhoeke sou oorvleuel in plaas van ʼn gaping te laat, so hulle kan steeds nie tesseleer nie.', '4 × 108° kan glad nie met 4 × 90° vergelyk word nie.'], correctIndex: 2, explanation: '4 × 108° = 432°, wat meer as 360° is — dit beteken die vyfhoeke sou oorvleuel in plaas van ʼn gaping te laat, so hulle kan steeds nie tesseleer nie ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="35" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="35" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="100" y="100" width="65" height="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="95" fill="#2563eb" font-weight="700" font-size="14" text-anchor="middle">90°×4</text><circle cx="100" cy="100" r="4" fill="#dc2626"/></svg>' },

        // Blok E — Woordprobleme en Veelstappige Toepassings (pos 17-18, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Teëlkontrakteur bedek ʼn vierkantige binnehof met seshoekige teëls, wat met geen gapings tesseleer nie. As die binnehof 6 rye van 7 teëls elk nodig het, hoeveel teëls het die kontrakteur altesaam nodig?', checkMode: 'auto', options: ['13', '35', '42', '48'], correctIndex: 2, explanation: 'Reëlmatige seshoeke tesseleer met geen gapings nie, so die hele binnehof word bedek deur 6 × 7 = 42 teëls ✓ (13 tel verkeerdelik 6+7 op in plaas van vermenigvuldig; 35 gebruik net 5 rye; 48 gebruik 8 rye.)' },
        { difficulty: 'Hard', question: 'ʼn Patroon is gemaak van 6 identiese gelyksydige driehoeke rand-aan-rand gerangskik met geen gapings nie om ʼn reëlmatige seshoekvorm te vorm, en hierdie seshoekpatroon word dan 5 keer in ʼn ry herhaal. Hoeveel basiese driehoekvorms is daar oor al 5 seshoeke?', checkMode: 'auto', options: ['6', '11', '25', '30'], correctIndex: 3, explanation: "Elke seshoek gebruik 6 driehoeke. 5 seshoeke × 6 driehoeke = 30 basiese vorms altesaam ✓ (6 tel net een seshoek; 11 tel verkeerdelik 6+5 op; 25 tel een seshoek se driehoeke verkeerd.)" },

        // Blok F — Redenasie, Regverdiging en Foutopsporing (Sluitstuk) (pos 19, Moeilik)
        { difficulty: 'Hard', question: 'Lerato sê ʼn reëlmatige vyfhoek sal op sy eie tesseleer omdat dit reguit sye het, net soos vierkante en seshoeke. Watter stelling evalueer haar bewering korrek?', checkMode: 'auto', options: ['Lerato is korrek — enige vorm met reguit sye sal altyd op sy eie tesseleer.', 'Lerato is nie korrek nie — al het ʼn reëlmatige vyfhoek reguit sye, deel sy hoeke (elk 108°) nie eweredig in 360° nie, so daar bly altyd gapings oor; reguit sye alleen is nie genoeg nie, die hoeke moet ook perfek optel tot 360°.', 'Lerato is korrek, maar net omdat vyfhoeke presies 5 sye het.', 'Lerato is nie korrek nie — vyfhoeke tesseleer nooit nie, want hulle is nie reëlmatige veelhoeke nie.'], correctIndex: 1, explanation: 'Al het ʼn reëlmatige vyfhoek reguit sye, deel sy hoeke (elk 108°) nie eweredig in 360° nie, so wanneer jy probeer om vyfhoeke rondom ʼn punt inmekaar te pas, bly daar altyd klein gapings oor. Reguit sye alleen is nie genoeg nie — die hoeke moet ook perfek optel tot 360° vir ʼn vorm om te tesseleer ✓' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het saamgestelde vorms en tessellasie in Stel 3 bemeester.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan enige vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug en lees weer deur die studiegids.' },
        { minScore: 0, message: 'Hou aan probeer! Lees weer deur die studiegids noukeurig en probeer dan weer.' },
      ],
    },
  ],
}
