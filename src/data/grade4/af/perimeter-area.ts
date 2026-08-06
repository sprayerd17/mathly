import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Omtrek en Oppervlakte',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS OMTREK?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-perimeter',
      title: 'Wat is Omtrek?',
      icon: '📐',
      explanation: `
<p style="margin-bottom:14px;"><strong>Omtrek</strong> is die <strong>totale afstand rondom die buitekant van ʼn vorm</strong>. Om die omtrek te vind, tel jy die lengtes van al die sye bymekaar. Die antwoord word altyd geskryf met ʼn lengte-eenheid soos cm, m of mm.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Werklike-lewe voorbeelde</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🌿</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Heining rondom ʼn tuin</strong> — die totale lengte heining wat nodig is, is gelyk aan die omtrek van die tuin.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🖼️</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>ʼn Raam rondom ʼn prentraam</strong> — die lengte van die raamstrook is die omtrek van die prent.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🏃</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Om rondom die buitekant van ʼn sportveld te stap</strong> — die afstand wat jy stap, is die omtrek van die veld.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om omtrek te bereken</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel al die sye</strong> van die vorm bymekaar — elke sy moet ingesluit word.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Maak seker al die sye is in dieselfde eenheid</strong> voordat jy bymekaartel — jy kan nie cm en m saam optel sonder om eers om te reken nie.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Skryf die antwoord met die korrekte eenheid</strong> (cm, m, mm, ens.).</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Kleur-gekodeerde sye van ʼn reghoek</div>
  <div style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">Elke sy van ʼn reghoek word in ʼn ander kleur getoon sodat jy kan sien watter sye jy bymekaartel:</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Bo</span>
      <span style="color:#1e3a8a;font-size:15px;">lengte — een van die twee langer sye</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Regs</span>
      <span style="color:#14532d;font-size:15px;">breedte — een van die twee korter sye</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Onder</span>
      <span style="color:#7c2d12;font-size:15px;">lengte — dieselfde as die bo-sy</span>
    </div>
    <div style="display:flex;align-items:center;gap:10px;">
      <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;">Links</span>
      <span style="color:#4c1d95;font-size:15px;">breedte — dieselfde as die regter sy</span>
    </div>
    <div style="margin-top:4px;font-size:15px;color:#1e3a8a;">
      <strong>Omtrek</strong> = <span style="color:#1e40af;font-weight:700;">bo</span> + <span style="color:#16a34a;font-weight:700;">regs</span> + <span style="color:#ea580c;font-weight:700;">onder</span> + <span style="color:#7c3aed;font-weight:700;">links</span> = <strong style="color:#dc2626;">totaal</strong>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Vind die omtrek van ʼn reghoek met lengte 8 cm en breedte 5 cm.',
          steps: [
            'ʼn Reghoek het <span style="color:#1e40af;font-weight:700;">2 lengtes</span> en <span style="color:#16a34a;font-weight:700;">2 breedtes</span>.',
            'Omtrek = <span style="color:#1e40af;font-weight:700;">8</span> + <span style="color:#16a34a;font-weight:700;">5</span> + <span style="color:#ea580c;font-weight:700;">8</span> + <span style="color:#7c3aed;font-weight:700;">5</span>.',
            'Omtrek = <strong style="color:#dc2626;">26 cm</strong>.',
          ],
          answer: 'Die omtrek is 26 cm.',
        },
        {
          question: 'Vind die omtrek van ʼn driehoek met sye 6 cm, 4 cm en 5 cm.',
          steps: [
            'Tel al <strong>drie sye</strong> bymekaar.',
            'Omtrek = <span style="color:#1e40af;font-weight:700;">6</span> + <span style="color:#16a34a;font-weight:700;">4</span> + <span style="color:#ea580c;font-weight:700;">5</span> = <strong style="color:#dc2626;">15 cm</strong>.',
          ],
          answer: 'Die omtrek is 15 cm.',
        },
        {
          question: 'ʼn Vierkant het ʼn omtrek van 24 cm. Wat is die lengte van elke sy?',
          steps: [
            'ʼn Vierkant het <strong>4 gelyke sye</strong>, dus is al die sye dieselfde lengte.',
            'Deel die omtrek deur 4: <strong style="color:#dc2626;">24</strong> ÷ <strong>4</strong> = <strong style="color:#dc2626;">6 cm</strong>.',
          ],
          answer: 'Elke sy is 6 cm lank.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn Reghoek met sye gemerk 8cm en 5cm met elke sy uitgelig in ʼn ander kleur en die omtrekberekening hieronder getoon',
      videoPlaceholder:
        'Kort video wat wys hoe om die omtrek van reghoeke, driehoeke en vierkante te bereken deur al die sye bymekaar te tel',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — WAT IS OPPERVLAKTE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-area',
      title: 'Wat is Oppervlakte?',
      icon: '⬛',
      explanation: `
<p style="margin-bottom:14px;"><strong>Oppervlakte</strong> is die <strong>hoeveelheid plat oppervlak wat ʼn vorm bedek</strong>. Ons meet oppervlakte deur te tel hoeveel gelyke-grootte vierkante binne die vorm inpas. Die antwoord word geskryf in <strong style="color:#dc2626;">vierkanteenhede</strong> soos cm² of m².</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Werklike-lewe voorbeelde</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🏠</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Die grootte van ʼn vloer wat teëls nodig het</strong> — die oppervlakte vertel jou hoeveel teëls jy nodig het om die hele vloer te bedek.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">📚</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Die hoeveelheid papier wat nodig is om ʼn boek toe te draai</strong> — die oppervlakte van die omslag vertel jou hoeveel papier om te sny.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🌱</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Die grootte van ʼn tuin wat gras nodig het</strong> — die oppervlakte vertel jou hoeveel grassaad of grasrolle om te koop.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om oppervlakte te bereken deur vierkanteenhede te tel</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Teken of verbeel jou ʼn <strong style="color:#1e40af;">rooster van vierkante</strong> oor die vorm.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel hoeveel <span style="color:#16a34a;">vierkanteenhede</span></strong> binne die vorm inpas — sluit beide vol en half vierkante in.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Elke <strong style="color:#16a34a;">vierkant</strong> tel as <strong>een vierkante eenheid</strong>. Twee helftes maak een volle eenheid.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Skryf die antwoord met die korrekte eenheid — <strong style="color:#dc2626;">cm²</strong> as elke vierkant 1 cm is, <strong style="color:#dc2626;">m²</strong> as elke vierkant 1 m is.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Omtrek vs Oppervlakte — wat is die verskil?</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Omtrek</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Die <strong>afstand rondom die buitekant</strong> van ʼn vorm — soos die lengte van ʼn heining rondom ʼn tuin.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Oppervlakte</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Die <strong>ruimte binne</strong> die vorm — soos die gras wat binne die heining groei.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'ʼn Reghoek op ʼn rooster is 4 vierkante lank en 3 vierkante breed. Wat is sy oppervlakte?',
          steps: [
            'Die reghoek het <strong style="color:#1e40af;">4 rye</strong> van <strong style="color:#16a34a;">3 vierkante</strong> elk.',
            'Tel of vermenigvuldig: <strong style="color:#1e40af;">4</strong> × <strong style="color:#16a34a;">3</strong> = <strong style="color:#dc2626;">12 vierkante</strong>.',
          ],
          answer: 'Oppervlakte = 12 vierkanteenhede, of 12 cm² as elke vierkant 1 cm is.',
        },
        {
          question:
            'ʼn Onreëlmatige vorm op ʼn rooster bedek 7 vol vierkante en 4 half vierkante. Wat is sy oppervlakte?',
          steps: [
            'Tel die <strong style="color:#1e40af;">vol vierkante</strong>: <strong>7</strong>.',
            'Tel die <strong style="color:#16a34a;">half vierkante</strong>: 4 helftes = <strong>2 vol vierkante</strong>.',
            'Tel bymekaar: <strong style="color:#1e40af;">7</strong> + <strong style="color:#16a34a;">2</strong> = <strong style="color:#dc2626;">9 vierkanteenhede</strong>.',
          ],
          answer: 'Oppervlakte = 9 vierkanteenhede.',
        },
      ],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn 4 by 3 reghoek op ʼn rooster met al 12 vierkante blou geskadu en genommer om te wys hoe telling die oppervlakte gee',
      videoPlaceholder:
        'Kort video wat wys hoe om oppervlakte te bereken deur vierkanteenhede op ʼn rooster te tel vir beide reëlmatige en onreëlmatige vorms',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VERGELYKING VAN OMTREK EN OPPERVLAKTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-perimeter-area',
      title: 'Vergelyking van Omtrek en Oppervlakte',
      icon: '🔍',
      explanation: `
<p style="margin-bottom:14px;">Twee vorms kan baie verskillend lyk maar steeds dieselfde <strong style="color:#dc2626;">omtrek</strong> deel — of dieselfde <strong style="color:#1e40af;">oppervlakte</strong>. Om hierdie verskil te verstaan is ʼn belangrike vaardigheid in Graad 4-wiskunde.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Twee sleutel-idees om te onthou</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Dieselfde omtrek</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Twee vorms met <strong style="color:#dc2626;">dieselfde omtrek</strong> kan <strong>verskillende oppervlaktes</strong> hê. Die manier waarop die vorm gerangskik is, verander hoeveel ruimte daar binne is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Dieselfde oppervlakte</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Twee vorms met <strong style="color:#1e40af;">dieselfde oppervlakte</strong> kan <strong>verskillende omtrekke</strong> hê. ʼn Langer, dunner vorm het ʼn groter omtrek as ʼn meer kompakte vorm met dieselfde oppervlakte.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Vergelyk ʼn 4 × 2 reghoek en ʼn 3 × 3 vierkant. Wat merk jy op oor hul omtrekke en oppervlaktes?',
          steps: [
            '<strong>Reghoek:</strong> Omtrek = <span style="color:#dc2626;font-weight:700;">4 + 2 + 4 + 2 = 12 cm</span>. &nbsp; Oppervlakte = <span style="color:#1e40af;font-weight:700;">4 × 2 = 8 cm²</span>.',
            '<strong>Vierkant:</strong> Omtrek = <span style="color:#dc2626;font-weight:700;">3 + 3 + 3 + 3 = 12 cm</span>. &nbsp; Oppervlakte = <span style="color:#1e40af;font-weight:700;">3 × 3 = 9 cm²</span>.',
            'Albei vorms het <strong style="color:#dc2626;">dieselfde omtrek (12 cm)</strong> maar die vierkant het ʼn <strong style="color:#1e40af;">groter oppervlakte (9 cm²)</strong> as die reghoek (8 cm²).',
          ],
          answer: 'Albei vorms het dieselfde omtrek van 12 cm maar verskillende oppervlaktes. Die vierkant het ʼn groter oppervlakte.',
        },
        {
          question:
            'Twee vorms het albei ʼn oppervlakte van 12 cm². Vorm A is ʼn 4 × 3 reghoek en Vorm B is ʼn 6 × 2 reghoek. Vergelyk hul omtrekke.',
          steps: [
            '<strong>Vorm A:</strong> Omtrek = <span style="color:#dc2626;font-weight:700;">4 + 3 + 4 + 3 = 14 cm</span>. &nbsp; Oppervlakte = <span style="color:#1e40af;font-weight:700;">4 × 3 = 12 cm²</span>.',
            '<strong>Vorm B:</strong> Omtrek = <span style="color:#dc2626;font-weight:700;">6 + 2 + 6 + 2 = 16 cm</span>. &nbsp; Oppervlakte = <span style="color:#1e40af;font-weight:700;">6 × 2 = 12 cm²</span>.',
            'Albei vorms het <strong style="color:#1e40af;">dieselfde oppervlakte (12 cm²)</strong> maar Vorm B het ʼn <strong style="color:#dc2626;">groter omtrek (16 cm)</strong> as Vorm A (14 cm).',
          ],
          answer: 'Albei vorms het dieselfde oppervlakte maar verskillende omtrekke.',
        },
      ],
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat twee vorms met dieselfde omtrek maar verskillende oppervlaktes vergelyk, en twee vorms met dieselfde oppervlakte maar verskillende omtrekke',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — OMTREK- EN OPPERVLAKTE-WOORDPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'perimeter-area-word-problems',
      title: 'Omtrek- en Oppervlakte-woordprobleme',
      icon: '📝',
      explanation: `
<p style="margin-bottom:14px;">Woordprobleme oor omtrek en oppervlakte vereis dat jy eers identifiseer <strong>watter meting nodig is</strong>. Kyk vir sleutelwoorde in die vraag — hulle vertel jou of jy die afstand rondom die buitekant of die ruimte binne moet vind.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Sleutelwoorde om na te kyk</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Omtrek</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">Heining</strong>, <strong style="color:#ea580c;">rand</strong>, <strong style="color:#ea580c;">raam</strong>, <strong style="color:#ea580c;">afstand rondom</strong> — dit beteken almal jy het die totale lengte rondom die buitekant van die vorm nodig.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:110px;text-align:center;">Oppervlakte</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong style="color:#ea580c;">Teëls</strong>, <strong style="color:#ea580c;">mat</strong>, <strong style="color:#ea580c;">gras</strong>, <strong style="color:#ea580c;">bedekking</strong>, <strong style="color:#ea580c;">verf</strong> — dit beteken almal jy het die hoeveelheid oppervlak binne die vorm nodig.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'ʼn Tuin is 8 m lank en 5 m breed. Hoeveel heining is nodig om die hele tuin te omhein?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">heining rondom</strong> — dit beteken ons het die <strong style="color:#dc2626;">omtrek</strong> nodig.',
            'Omtrek = <strong>8 + 5 + 8 + 5</strong> = <strong style="color:#dc2626;">26 m</strong>.',
          ],
          answer: '26 m heining is nodig.',
        },
        {
          question:
            'ʼn Klaskamervloer is 10 m lank en 6 m breed. Hoeveel vierkante meter teëls is nodig om die vloer te bedek?',
          steps: [
            'Sleutelwoord: <strong style="color:#ea580c;">teëls om te bedek</strong> — dit beteken ons het die <strong style="color:#1e40af;">oppervlakte</strong> nodig.',
            'Oppervlakte = <strong>10 × 6</strong> = <strong style="color:#1e40af;">60 m²</strong>.',
          ],
          answer: '60 vierkante meter teëls is nodig.',
        },
        {
          question:
            'ʼn Vierkantige tuin het sye van 7 m. Wat is die omtrek en wat is die oppervlakte?',
          steps: [
            '<strong style="color:#dc2626;">Omtrek</strong>: 7 + 7 + 7 + 7 = <strong style="color:#dc2626;">28 m</strong>.',
            '<strong style="color:#1e40af;">Oppervlakte</strong>: 7 × 7 = <strong style="color:#1e40af;">49 m²</strong>.',
          ],
          answer: 'Omtrek = 28 m. Oppervlakte = 49 m².',
        },
      ],
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om te identifiseer of ʼn woordprobleem omtrek of oppervlakte vereis en dit stap vir stap op te los',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // ── Blok A: Vind Omtrek (posisies 0-3, Maklik) ──
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 12 cm en breedte 6 cm.', checkMode: 'auto', options: ['36 cm', '72 cm', '18 cm', '30 cm'], correctIndex: 0, explanation: 'Omtrek = 12 + 6 + 12 + 6 = 36 cm. (72 cm verwar dit met oppervlakte, 12 × 6. 18 cm tel net een lengte en een breedte in plaas van twee van elk. 30 cm mis die tweede breedte.)' },
        { difficulty: 'Easy', question: 'ʼn Onreëlmatige vyfhoek het sye van 3 cm, 4 cm, 5 cm, 6 cm en 7 cm, soos hieronder getoon. Vind die omtrek.', checkMode: 'auto', options: ['18 cm', '25 cm', '21 cm', '32 cm'], correctIndex: 1, explanation: 'Tel al vyf sye bymekaar: 3 + 4 + 5 + 6 + 7 = 25 cm. (18 cm vergeet die 7 cm-sy. 21 cm vergeet die 4 cm-sy. 32 cm tel een sy twee keer.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 140,30 165,90 110,140 40,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3 cm</text><text x="158" y="55" font-size="13" font-weight="700" fill="#2563eb">4 cm</text><text x="150" y="118" font-size="13" font-weight="700" fill="#2563eb">5 cm</text><text x="75" y="128" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">6 cm</text><text x="30" y="62" font-size="13" font-weight="700" fill="#2563eb" text-anchor="end">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige stuk karton is 250 mm lank en 12 cm breed. Skakel die lengte om na cm, en vind dan die omtrek van die karton in cm.', checkMode: 'auto', options: ['524 cm', '29 cm', '74 cm', '37 cm'], correctIndex: 2, explanation: 'Skakel eers 250 mm om na cm: 250 ÷ 10 = 25 cm. Omtrek = 25 + 12 + 25 + 12 = 74 cm. (524 cm vergeet om om te skakel en gebruik 250 direk. 29 cm deel verkeerdelik deur 100 in plaas van 10. 37 cm tel net een lengte en een breedte.)' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 46 cm. Die breedte is 9 cm. Vind die lengte.', checkMode: 'auto', options: ['37 cm', '32 cm', '23 cm', '14 cm'], correctIndex: 3, explanation: 'Omtrek = 2 × (lengte + breedte), dus 46 = 2 × (lengte + 9). Deel deur 2: 23 = lengte + 9. Lengte = 23 − 9 = 14 cm. (37 cm vergeet om die omtrek eers te halveer. 32 cm tel op in plaas van af te trek. 23 cm stop na die halvering en vergeet om die breedte af te trek.)' },

        // ── Blok B: Vind Oppervlakte (posisies 4-7, Maklik-Medium) ──
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 9 vierkante lank en 3 vierkante breed. Vind die oppervlakte.', checkMode: 'auto', options: ['27 vierkanteenhede', '24 vierkanteenhede', '30 vierkanteenhede', '18 vierkanteenhede'], correctIndex: 0, explanation: 'Tel of vermenigvuldig: 9 × 3 = 27 vierkanteenhede. (24 vierkanteenhede tel die sye bymekaar soos vir ʼn omtrek in plaas van te vermenigvuldig. 30 en 18 vierkanteenhede kom van ʼn tel fout in die rye of kolomme.)' },
        { difficulty: 'Medium', question: 'Die prentjie hieronder wys ʼn onreëlmatige vorm geteken op ʼn 1 m²-rooster. Tel die vol vierkante en half vierkante om die totale oppervlakte te vind.', checkMode: 'auto', options: ['8 vierkanteenhede', '10 vierkanteenhede', '12 vierkanteenhede', '9 vierkanteenhede'], correctIndex: 1, explanation: 'Daar is 8 vol vierkante wat blou geskadu is en 4 half vierkante wat geel geskadu is. 4 half vierkante = 2 vol vierkante. Totaal = 8 + 2 = 10 vierkanteenhede. (8 tel net die vol vierkante en ignoreer die helftes. 12 tel elke half vierkant verkeerdelik as ʼn vol vierkant. 9 halveer die 4 half vierkante verkeerd.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde roosterprentjie, as elke vierkant 1 m² verteenwoordig, hoeveel meer vol vierkante sal geskadu moet word om hierdie vorm in ʼn volledige reghoek van 3 vierkante by 4 vierkante te verander?', checkMode: 'auto', options: ['12 meer vierkante', '4 meer vierkante', '0 meer vierkante', '8 meer vierkante'], correctIndex: 2, explanation: 'ʼn Reghoek van 3 by 4 bedek 12 vol vierkante. Hierdie vorm het reeds 8 vol vierkante plus 4 half vierkante. Deur die 4 half vierkante te voltooi, word 4 vol vierkante bygevoeg (8+4=12), wat presies die 12 is wat nodig is — dus word 0 addisionele vol vierkante benodig. (12 verwar die teiken-totaal met wat nog nodig is. 4 is net die getal half vierkante. 8 herhaal die huidige aantal vol vierkante.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 36 vierkanteenhede. Dit is 9 vierkante lank. Hoeveel vierkante breed is dit?', checkMode: 'auto', options: ['36 vierkante', '13 vierkante', '5 vierkante', '4 vierkante'], correctIndex: 3, explanation: 'Breedte = oppervlakte ÷ lengte = 36 ÷ 9 = 4 vierkante. (36 vierkante gebruik net die oppervlakte. 13 vierkante tel lengte en breedte bymekaar soos vir ʼn omtrek in plaas van te deel. 5 vierkante is ʼn afrondingsfout in die deling.)' },

        // ── Blok C: Werk Terug (posisies 8-10, Medium) ──
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 40 cm. Die lengte is 12 cm. Vind die breedte.', checkMode: 'auto', options: ['8 cm', '28 cm', '12 cm', '32 cm'], correctIndex: 0, explanation: 'Omtrek = 2 × (lengte + breedte), dus 40 = 2 × (12 + breedte). Deel deur 2: 20 = 12 + breedte. Breedte = 20 − 12 = 8 cm. (28 cm vergeet om die omtrek eers te halveer. 12 cm neem verkeerdelik aan dat dit ʼn vierkant is. 32 cm tel op in plaas van af te trek.)' },
        { difficulty: 'Medium', question: 'ʼn Vierkant het ʼn omtrek van 48 cm. Vind die lengte van elke sy.', checkMode: 'auto', options: ['24 cm', '12 cm', '192 cm', '48 cm'], correctIndex: 1, explanation: 'ʼn Vierkant het 4 gelyke sye, dus deel die omtrek deur 4: 48 ÷ 4 = 12 cm. (24 cm deel deur 2 in plaas van 4. 192 cm vermenigvuldig in plaas van te deel. 48 cm herhaal net die omtrek.)' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het ʼn omtrek van 22 cm. Twee van sy sye is 8 cm en 6 cm. Vind die lengte van die derde sy.', checkMode: 'auto', options: ['14 cm', '6 cm', '8 cm', '36 cm'], correctIndex: 2, explanation: 'Derde sy = omtrek − (som van bekende sye) = 22 − (8 + 6) = 22 − 14 = 8 cm. (14 cm vergeet om van die omtrek af te trek en tel net die twee bekende sye. 6 cm lees een van die gegewe sye verkeerd. 36 cm tel al drie getalle verkeerdelik bymekaar.)' },

        // ── Blok D: Foutspeuring & Vergelyking (posisies 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Kagiso sê: "Om die omtrek van ʼn reghoek van 9 cm by 4 cm te vind, vermenigvuldig ek 9 × 4 om 36 cm te kry." Watter stelling evalueer sy antwoord korrek?', checkMode: 'auto', options: ['Hy is korrek — as jy die lengte en breedte vermenigvuldig, kry jy altyd die omtrek.', 'Hy is verkeerd — die korrekte omtrek is 9 + 4 = 13 cm.', 'Hy is korrek, maar die eenheid moet cm² wees in plaas van cm.', 'Hy is verkeerd — hy het die oppervlakte (36 cm²) bereken in plaas van die omtrek; die korrekte omtrek is 9 + 4 + 9 + 4 = 26 cm.'], correctIndex: 3, explanation: 'Omtrek beteken om al vier sye bymekaar te tel: 9 + 4 + 9 + 4 = 26 cm. Kagiso het die vermenigvuldigingsreël vir oppervlakte met die optelreël vir omtrek verwar, dus is 9 × 4 = 36 cm² die oppervlakte, nie die omtrek nie.' },
        { difficulty: 'Medium', question: 'ʼn 5 × 2 reghoek en ʼn 4 × 3 reghoek — watter een het die groter oppervlakte?', checkMode: 'auto', options: ['Die 4 × 3 reghoek, met ʼn oppervlakte van 12 cm² vergeleke met 10 cm² vir die 5 × 2 reghoek.', 'Die 5 × 2 reghoek, met ʼn oppervlakte van 14 cm² vergeleke met 10 cm² vir die 4 × 3 reghoek.', 'Albei reghoeke het dieselfde oppervlakte van 12 cm².', 'Die 5 × 2 reghoek, met ʼn oppervlakte van 10 cm² vergeleke met 7 cm² vir die 4 × 3 reghoek.'], correctIndex: 0, explanation: 'Oppervlakte van 5 × 2 = 10 cm². Oppervlakte van 4 × 3 = 12 cm². Die 4 × 3 reghoek het die groter oppervlakte. (Die ander opsies bereken een van die twee oppervlaktes verkeerd of beweer verkeerdelik dat hulle gelyk is.)' },
        { difficulty: 'Medium', question: 'ʼn Vierkant met sye van 6 cm en ʼn reghoek 9 cm by 4 cm het albei dieselfde oppervlakte. Wat is daardie oppervlakte?', checkMode: 'auto', options: ['24 cm²', '36 cm²', '54 cm²', '13 cm²'], correctIndex: 1, explanation: 'Vierkant oppervlakte = 6 × 6 = 36 cm². Reghoek oppervlakte = 9 × 4 = 36 cm². Albei vorms het ʼn oppervlakte van 36 cm². (24 cm² verwar dit met ʼn omtrek-agtige berekening van 6 × 4. 54 cm² vermenigvuldig 9 × 6 deur die getalle te verwar. 13 cm² tel 9 + 4 bymekaar in plaas van te vermenigvuldig.)' },

        // ── Blok E: Werklike-lewe Woordprobleme (posisies 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'ʼn Tuin is 10 m lank en 6 m breed. Hoeveel heining is nodig om die hele tuin te omhein?', checkMode: 'auto', options: ['60 m', '16 m', '32 m', '36 m'], correctIndex: 2, explanation: 'Die sleutelwoord "heining rondom" beteken omtrek. Omtrek = 10 + 6 + 10 + 6 = 32 m heining. (60 m verwar dit met die oppervlakte, 10 × 6. 16 m tel net een lengte en een breedte. 36 m is ʼn rekenfout in die optelling.)' },
        { difficulty: 'Medium', question: 'ʼn Kamer wat 7 m by 4 m meet, benodig nuwe mat. Mat kos R120 per vierkante meter. Besluit eers of jy omtrek of oppervlakte nodig het, en vind dan die totale koste.', checkMode: 'auto', options: ['R2 640', 'R148', 'R336', 'R3 360'], correctIndex: 3, explanation: 'Om ʼn vloer met mat te bedek benodig oppervlakte, nie omtrek nie. Oppervlakte = 7 × 4 = 28 m². Koste = 28 × R120 = R3 360. (R2 640 gebruik verkeerdelik die omtrek, 22 m, in plaas van die oppervlakte. R148 tel die oppervlakte en prys bymekaar in plaas van te vermenigvuldig. R336 het die korrekte berekening maar mis ʼn nul.)' },
        { difficulty: 'Medium', question: 'Voor ʼn skool-sportdag moet die buitenste rand van die reghoekige veld, wat 45 m lank en 20 m breed is, met lyn geverf word. Hoeveel meter lynverf is nodig?', checkMode: 'auto', options: ['130 m', '900 m', '65 m', '125 m'], correctIndex: 0, explanation: 'ʼn Lyn wat die buitenste rand van die veld merk, is die omtrek. Omtrek = 45 + 20 + 45 + 20 = 130 m. (900 m verwar dit met die oppervlakte, 45 × 20. 65 m tel net een lengte en een breedte. 125 m is ʼn rekenfout in die optelling.)' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige tuin het sye van 9 m. Heining kos R30 per meter. Wat is die totale koste om die tuin te omhein?', checkMode: 'auto', options: ['R2 430', 'R1 080', 'R270', 'R360'], correctIndex: 1, explanation: 'Omtrek = 9 × 4 = 36 m. Koste = 36 × R30 = R1 080. (R2 430 gebruik verkeerdelik die oppervlakte, 81 m², in plaas van die omtrek. R270 vergeet om die sy met 4 te vermenigvuldig voor die kosteberekening. R360 bereken die prys verkeerd.)' },

        // ── Blok F: Meerstap-toepassings & Regverdig-jou-Redenasie (posisies 18-19, Hard) ──
        { difficulty: 'Hard', question: 'Die prentjie hieronder wys ʼn L-vormige tuin wat bestaan uit ʼn reghoek 8 m by 5 m met ʼn kleiner reghoek 4 m by 3 m bo-op. Vind die totale oppervlakte van die tuin.', checkMode: 'auto', options: ['40 m²', '12 m²', '52 m²', '28 m²'], correctIndex: 2, explanation: 'Oppervlakte van groot reghoek = 8 × 5 = 40 m². Oppervlakte van klein reghoek = 4 × 3 = 12 m². Totale oppervlakte = 40 + 12 = 52 m². (40 m² tel net die groot reghoek. 12 m² tel net die klein reghoek. 28 m² trek verkeerdelik die klein reghoek af in plaas van dit by te tel.)', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,60 86,60 86,18 142,18 142,130 30,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="120" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="132" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="86" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">8 m</text><text x="18" y="98" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">5 m</text><text x="114" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4 m</text><text x="152" y="42" font-size="13" font-weight="700" fill="#2563eb">3 m</text></svg>' },
        { difficulty: 'Hard', question: 'Twee reghoeke het albei ʼn oppervlakte van 36 m²: Reghoek A is 4 m by 9 m en Reghoek B is 6 m by 6 m. Watter stelling is korrek?', checkMode: 'auto', options: ['Reghoek A het die kleiner omtrek (24 m) en Reghoek B het die groter omtrek (26 m).', 'Albei reghoeke het dieselfde omtrek van 26 m omdat hulle dieselfde oppervlakte het.', 'Dit is onmoontlik vir twee reghoeke om dieselfde oppervlakte maar verskillende omtrekke te hê.', 'Reghoek A het ʼn omtrek van 26 m en Reghoek B het ʼn kleiner omtrek van 24 m — twee vorms kan dieselfde oppervlakte deel maar verskillende omtrekke hê.'], correctIndex: 3, explanation: 'Reghoek A: omtrek = 4+9+4+9 = 26 m, oppervlakte = 4×9 = 36 m². Reghoek B: omtrek = 6+6+6+6 = 24 m, oppervlakte = 6×6 = 36 m². Albei het dieselfde oppervlakte, maar Reghoek B het die kleiner omtrek, wat bewys dat gelyke oppervlakte nie gelyke omtrek beteken nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het omtrek en oppervlakte ten volle bemeester.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan enige gemiste vrae deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // ── Blok A: Vind Omtrek (posisies 0-3, Maklik) ──
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn vierkant met sye van 15 cm.', checkMode: 'auto', options: ['60 cm', '225 cm', '30 cm', '45 cm'], correctIndex: 0, explanation: 'Omtrek = 15 + 15 + 15 + 15 = 60 cm. (225 cm verwar dit met die oppervlakte, 15 × 15. 30 cm tel net twee sye in plaas van vier. 45 cm is ʼn rekenfout, met net drie sye getel.)' },
        { difficulty: 'Easy', question: 'ʼn Reëlmatige seshoek het 6 gelyke sye van 6 cm elk. Vind die omtrek.', checkMode: 'auto', options: ['12 cm', '36 cm', '30 cm', '42 cm'], correctIndex: 1, explanation: 'ʼn Reëlmatige seshoek het 6 gelyke sye. Omtrek = 6 × 6 = 36 cm. (12 cm tel twee sye in plaas van met al 6 te vermenigvuldig. 30 cm behandel dit as ʼn vyfhoek met net 5 sye. 42 cm behandel dit as ʼn vorm met 7 sye.)' },
        { difficulty: 'Medium', question: 'Een sy van ʼn driehoek word gegee as 40 mm, ʼn ander as 6 cm, en die derde as 5 cm. Skakel al die sye om na cm en vind die omtrek.', checkMode: 'auto', options: ['51 cm', '16 cm', '15 cm', '11 cm'], correctIndex: 2, explanation: 'Skakel 40 mm om na cm: 40 ÷ 10 = 4 cm. Omtrek = 4 + 6 + 5 = 15 cm. (51 cm vergeet om om te skakel en gebruik 40 direk. 16 cm is ʼn rekenfout in die optelling. 11 cm deel verkeerdelik deur 100 in plaas van 10.)' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 54 cm. Die breedte is 9 cm. Vind die lengte.', checkMode: 'auto', options: ['45 cm', '9 cm', '36 cm', '18 cm'], correctIndex: 3, explanation: 'Omtrek = 2 × (lengte + breedte), dus 54 = 2 × (lengte + 9). Deel deur 2: 27 = lengte + 9. Lengte = 27 − 9 = 18 cm. (45 cm vergeet om die omtrek eers te halveer. 9 cm neem verkeerdelik aan lengte is gelyk aan breedte. 36 cm tel op in plaas van af te trek.)' },

        // ── Blok B: Vind Oppervlakte (posisies 4-7, Maklik-Medium) ──
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 8 vierkante lank en 5 vierkante breed. Vind die oppervlakte.', checkMode: 'auto', options: ['40 vierkanteenhede', '26 vierkanteenhede', '48 vierkanteenhede', '35 vierkanteenhede'], correctIndex: 0, explanation: 'Tel of vermenigvuldig: 8 × 5 = 40 vierkanteenhede. (26 vierkanteenhede tel die sye bymekaar soos vir ʼn omtrek in plaas van te vermenigvuldig. 48 en 35 vierkanteenhede kom van ʼn tel fout in die rye of kolomme.)' },
        { difficulty: 'Medium', question: 'Die prentjie hieronder wys ʼn onreëlmatige vorm geteken op ʼn 1 m²-rooster. Tel die vol vierkante en half vierkante om die totale oppervlakte te vind.', checkMode: 'auto', options: ['9 vierkanteenhede', '12 vierkanteenhede', '15 vierkanteenhede', '11 vierkanteenhede'], correctIndex: 1, explanation: 'Daar is 9 vol vierkante wat blou geskadu is en 6 half vierkante wat geel geskadu is. 6 half vierkante = 3 vol vierkante. Totaal = 9 + 3 = 12 vierkanteenhede. (9 tel net die vol vierkante en ignoreer die helftes. 15 tel elke half vierkant verkeerdelik as ʼn vol vierkant. 11 halveer die 6 half vierkante verkeerd.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde roosterprentjie, hoeveel vierkanteenhede sou bygevoeg word as net die 6 half vierkante elk in vol vierkante voltooi word (sonder om enige ander deel van die vorm te verander)?', checkMode: 'auto', options: ['6 vierkanteenhede', '12 vierkanteenhede', '3 vierkanteenhede', '9 vierkanteenhede'], correctIndex: 2, explanation: 'Elke half vierkant benodig nog ʼn helfte om ʼn vol vierkant te word. Om 6 half vierkante te voltooi voeg 6 helftes = 3 vol vierkanteenhede by die totaal. (6 vierkanteenhede herhaal net die aantal half vierkante sonder om te halveer. 12 vierkanteenhede verwar dit met die nuwe grondtotaal. 9 vierkanteenhede herhaal die huidige aantal vol vierkante.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 48 vierkanteenhede. Dit is 6 vierkante breed. Hoeveel vierkante lank is dit?', checkMode: 'auto', options: ['48 vierkante', '54 vierkante', '6 vierkante', '8 vierkante'], correctIndex: 3, explanation: 'Lengte = oppervlakte ÷ breedte = 48 ÷ 6 = 8 vierkante. (48 vierkante gebruik net die oppervlakte. 54 vierkante tel verkeerdelik die oppervlakte en breedte bymekaar in plaas van te deel. 6 vierkante herhaal net die gegewe breedte.)' },

        // ── Blok C: Werk Terug (posisies 8-10, Medium) ──
        { difficulty: 'Medium', question: 'ʼn Vierkant het ʼn omtrek van 36 cm. Vind die lengte van elke sy.', checkMode: 'auto', options: ['9 cm', '18 cm', '144 cm', '36 cm'], correctIndex: 0, explanation: 'ʼn Vierkant het 4 gelyke sye, dus deel die omtrek deur 4: 36 ÷ 4 = 9 cm. (18 cm deel deur 2 in plaas van 4. 144 cm vermenigvuldig in plaas van te deel. 36 cm herhaal net die omtrek.)' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 50 cm. Die lengte is 14 cm. Vind die breedte.', checkMode: 'auto', options: ['36 cm', '11 cm', '14 cm', '39 cm'], correctIndex: 1, explanation: 'Omtrek = 2 × (lengte + breedte), dus 50 = 2 × (14 + breedte). Deel deur 2: 25 = 14 + breedte. Breedte = 25 − 14 = 11 cm. (36 cm vergeet om die omtrek eers te halveer. 14 cm neem verkeerdelik aan breedte is gelyk aan lengte. 39 cm tel op in plaas van af te trek.)' },
        { difficulty: 'Medium', question: 'ʼn Gelykbenige driehoek het ʼn omtrek van 29 cm. Sy twee gelyke sye is elk 11 cm. Vind die lengte van die basis.', checkMode: 'auto', options: ['18 cm', '8 cm', '7 cm', '51 cm'], correctIndex: 2, explanation: 'Basis = omtrek − (som van die twee gelyke sye) = 29 − (11 + 11) = 29 − 22 = 7 cm. (18 cm trek net een van die twee gelyke sye af. 8 cm is ʼn rekenfout van een af. 51 cm tel al drie getalle verkeerdelik bymekaar.)' },

        // ── Blok D: Foutspeuring & Vergelyking (posisies 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Thandeka sê: "ʼn Gelykbenige driehoek met sye 7 cm, 7 cm en 4 cm het ʼn omtrek van 4 × 3 = 12 cm omdat daar 3 sye is." Watter stelling evalueer haar redenasie korrek?', checkMode: 'auto', options: ['Sy is korrek — as jy die aantal sye met enige een sy vermenigvuldig, kry jy altyd die omtrek.', 'Sy is verkeerd — nie al die sye is gelyk nie, dus kan jy nie vermenigvuldig nie; die korrekte omtrek is 7 + 7 + 4 = 18 cm.', 'Sy is korrek, maar moes eerder 7 × 3 = 21 cm gebruik het.', 'Sy is verkeerd — die driehoek is glad nie gelykbenig nie, dus is geen berekening moontlik nie.'], correctIndex: 1, explanation: 'Slegs twee van die drie sye is gelyk in ʼn gelykbenige driehoek (7 cm en 7 cm), terwyl die basis (4 cm) verskillend is, dus kan jy nie net vermenigvuldig nie. Die korrekte metode is om al drie sye bymekaar te tel: 7 + 7 + 4 = 18 cm.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 3 cm by 8 cm en ʼn vierkant het sye van 5 cm. Watter vorm het die groter omtrek?', checkMode: 'auto', options: ['Die reghoek, met ʼn omtrek van 22 cm vergeleke met 20 cm vir die vierkant.', 'Die vierkant, met ʼn omtrek van 24 cm vergeleke met 22 cm vir die reghoek.', 'Albei vorms het dieselfde omtrek van 22 cm.', 'Die reghoek, met ʼn omtrek van 24 cm vergeleke met 20 cm vir die vierkant.'], correctIndex: 0, explanation: 'Reghoek omtrek = 3 + 8 + 3 + 8 = 22 cm. Vierkant omtrek = 5 × 4 = 20 cm. Die reghoek het die groter omtrek. (Die ander opsies bereken een van die twee omtrekke verkeerd of beweer verkeerdelik dat hulle gelyk is.)' },
        { difficulty: 'Hard', question: 'Vorm A is 8 cm by 3 cm en Vorm B is 6 cm by 4 cm. Albei het dieselfde oppervlakte. Watter vorm het die kleiner omtrek?', checkMode: 'auto', options: ['Vorm A, met ʼn omtrek van 20 cm vergeleke met 22 cm vir Vorm B.', 'Vorm B, met ʼn omtrek van 20 cm vergeleke met 22 cm vir Vorm A.', 'Albei vorms het dieselfde omtrek omdat hulle dieselfde oppervlakte het.', 'Vorm A, met ʼn omtrek van 18 cm vergeleke met 24 cm vir Vorm B.'], correctIndex: 1, explanation: 'Oppervlakte van A = 8 × 3 = 24 cm². Oppervlakte van B = 6 × 4 = 24 cm² (dieselfde oppervlakte). Omtrek van A = 8+3+8+3 = 22 cm. Omtrek van B = 6+4+6+4 = 20 cm. Vorm B het die kleiner omtrek, al is die oppervlaktes gelyk.' },

        // ── Blok E: Werklike-lewe Woordprobleme (posisies 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'ʼn Muur is 6 m lank en 3 m hoog en benodig ʼn vars laag verf. Besluit of jy omtrek of oppervlakte nodig het, en werk dan uit hoeveel muuroppervlak geverf moet word.', checkMode: 'auto', options: ['18 m', '9 m²', '18 m²', '24 m²'], correctIndex: 2, explanation: 'Om ʼn muur te verf bedek oppervlak, dus benodig jy oppervlakte, nie omtrek nie. Oppervlakte = 6 × 3 = 18 m². (18 m is die omtrek — die getal kom toevallig ooreen, maar dis die verkeerde meting en eenheid. 9 m² halveer die oppervlakte verkeerdelik asof ʼn driehoekformule gebruik word. 24 m² vermenigvuldig 6 × 4 in plaas van 6 × 3.)' },
        { difficulty: 'Medium', question: 'ʼn Prentraam-rand is ʼn reghoek 30 cm by 20 cm. Vind die lengte van die rand.', checkMode: 'auto', options: ['600 cm', '50 cm', '90 cm', '100 cm'], correctIndex: 3, explanation: 'ʼn Rand loop rondom die buitekant, dus is dit omtrek. Omtrek = 30 + 20 + 30 + 20 = 100 cm. (600 cm verwar dit met die oppervlakte, 30 × 20. 50 cm tel net een lengte en een breedte. 90 cm is ʼn rekenfout in die optelling.)' },
        { difficulty: 'Medium', question: 'ʼn Hokkiebaan in die vorm van ʼn reghoek is 45 m lank en 20 m breed. Hoe ver sou ʼn speler hardloop as hulle een keer om die buitenste rand van die baan draf?', checkMode: 'auto', options: ['130 m', '900 m', '65 m', '120 m'], correctIndex: 0, explanation: 'Om die buitenste rand te hardloop beteken omtrek. Omtrek = 45 + 20 + 45 + 20 = 130 m. (900 m verwar dit met die oppervlakte, 45 × 20. 65 m tel net een lengte en een breedte. 120 m is ʼn rekenfout in die optelling.)' },
        { difficulty: 'Hard', question: 'ʼn Vloer is 11 m lank en 8 m breed. Teëls kos R50 per vierkante meter. Wat is die totale koste om die vloer te teël?', checkMode: 'auto', options: ['R1 900', 'R4 400', 'R440', 'R138'], correctIndex: 1, explanation: 'Om ʼn vloer te teël benodig oppervlakte. Oppervlakte = 11 × 8 = 88 m². Koste = 88 × R50 = R4 400. (R1 900 gebruik verkeerdelik die omtrek, 38 m, in plaas van die oppervlakte. R440 het die korrekte berekening maar mis ʼn nul. R138 tel die oppervlakte en prys bymekaar in plaas van te vermenigvuldig.)' },

        // ── Blok F: Meerstap-toepassings & Regverdig-jou-Redenasie (posisies 18-19, Hard) ──
        { difficulty: 'Hard', question: 'Die prentjie hieronder wys ʼn reghoekige swembad 8 m by 4 m wat omring word deur ʼn geplaveide pad van 1 m breed aan alle kante, wat die totale buitenste reghoek 10 m by 6 m maak. Vind die oppervlakte van slegs die pad.', checkMode: 'auto', options: ['60 m²', '32 m²', '28 m²', '22 m²'], correctIndex: 2, explanation: 'Buitenste oppervlakte = 10 × 6 = 60 m². Swembad oppervlakte = 8 × 4 = 32 m². Padoppervlakte = 60 − 32 = 28 m². (60 m² vergeet om die swembad af te trek. 32 m² tel net die swembad. 22 m² is ʼn rekenfout in die aftrekking.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="140" height="84" fill="#fde68a" stroke="#0f1f3d" stroke-width="2.5"/><rect x="44" y="44" width="112" height="56" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2"/><text x="100" y="22" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="76" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="100" y="60" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">8 m</text><text x="180" y="76" font-size="12" font-weight="700" fill="#1e40af">4 m</text><text x="100" y="128" font-size="12" fill="#9a6f00" text-anchor="middle">geskadu pad, 1 m breed</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vierkant het ʼn oppervlakte van 36 cm² en ʼn reghoek wat 12 cm by 3 cm is, het ook ʼn oppervlakte van 36 cm². Watter stelling is korrek?', checkMode: 'auto', options: ['Die reghoek het die kleiner omtrek (24 cm) en die vierkant het die groter omtrek (30 cm).', 'Albei vorms het dieselfde omtrek omdat hulle dieselfde oppervlakte het.', 'Dit is onmoontlik vir twee vorms met dieselfde oppervlakte om verskillende omtrekke te hê.', 'Die vierkant het die kleiner omtrek (24 cm) en die reghoek het die groter omtrek (30 cm) — ʼn vierkant het gewoonlik ʼn kleiner omtrek as ander reghoeke met dieselfde oppervlakte.'], correctIndex: 3, explanation: 'Die vierkant (6 cm × 6 cm) het ʼn omtrek van 24 cm (6+6+6+6=24), terwyl die reghoek (12 cm × 3 cm) ʼn omtrek van 30 cm het (12+3+12+3=30). ʼn Vierkant het gewoonlik ʼn kleiner omtrek as ander reghoeke met dieselfde oppervlakte omdat sy sye so gelyk as moontlik is.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het omtrek en oppervlakte ten volle bemeester.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan enige gemiste vrae deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // ── Blok A: Vind Omtrek (posisies 0-3, Maklik) ──
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 18 cm en breedte 9 cm.', checkMode: 'auto', options: ['54 cm', '162 cm', '27 cm', '48 cm'], correctIndex: 0, explanation: 'Omtrek = 18 + 9 + 18 + 9 = 54 cm. (162 cm verwar dit met die oppervlakte, 18 × 9. 27 cm tel net een lengte en een breedte. 48 cm is ʼn rekenfout in die optelling.)' },
        { difficulty: 'Easy', question: 'ʼn Reëlmatige agthoek het 8 gelyke sye van 5 cm elk. Vind die omtrek.', checkMode: 'auto', options: ['13 cm', '40 cm', '35 cm', '45 cm'], correctIndex: 1, explanation: 'ʼn Reëlmatige agthoek het 8 gelyke sye. Omtrek = 5 × 8 = 40 cm. (13 cm tel twee sye in plaas van met al 8 te vermenigvuldig. 35 cm behandel dit as ʼn vorm met net 7 sye. 45 cm behandel dit as ʼn vorm met 9 sye.)' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige vlag het een sy van 90 mm, ʼn ander van 8 cm, en ʼn derde van 7 cm. Skakel al die sye om na cm en vind die omtrek van die vlag.', checkMode: 'auto', options: ['105 cm', '16 cm', '24 cm', '25 cm'], correctIndex: 2, explanation: 'Skakel 90 mm om na cm: 90 ÷ 10 = 9 cm. Omtrek = 9 + 8 + 7 = 24 cm. (105 cm vergeet om om te skakel en gebruik 90 direk. 16 cm deel verkeerdelik deur 100 in plaas van 10. 25 cm is ʼn rekenfout in die optelling.)' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 60 cm. Die breedte is 11 cm. Vind die lengte.', checkMode: 'auto', options: ['49 cm', '11 cm', '41 cm', '19 cm'], correctIndex: 3, explanation: 'Omtrek = 2 × (lengte + breedte), dus 60 = 2 × (lengte + 11). Deel deur 2: 30 = lengte + 11. Lengte = 30 − 11 = 19 cm. (49 cm vergeet om die omtrek eers te halveer. 11 cm neem verkeerdelik aan lengte is gelyk aan breedte. 41 cm tel op in plaas van af te trek.)' },

        // ── Blok B: Vind Oppervlakte (posisies 4-7, Maklik-Medium) ──
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 10 vierkante lank en 6 vierkante breed. Vind die oppervlakte.', checkMode: 'auto', options: ['60 vierkanteenhede', '32 vierkanteenhede', '70 vierkanteenhede', '54 vierkanteenhede'], correctIndex: 0, explanation: 'Tel of vermenigvuldig: 10 × 6 = 60 vierkanteenhede. (32 vierkanteenhede tel die sye bymekaar soos vir ʼn omtrek in plaas van te vermenigvuldig. 70 en 54 vierkanteenhede kom van ʼn tel fout in die rye of kolomme.)' },
        { difficulty: 'Medium', question: 'Die prentjie hieronder wys ʼn onreëlmatige vorm geteken op ʼn 1 m²-rooster. Tel die vol vierkante en half vierkante om die totale oppervlakte te vind.', checkMode: 'auto', options: ['11 vierkanteenhede', '13 vierkanteenhede', '15 vierkanteenhede', '12 vierkanteenhede'], correctIndex: 1, explanation: 'Daar is 11 vol vierkante wat blou geskadu is en 4 half vierkante wat geel geskadu is. 4 half vierkante = 2 vol vierkante. Totaal = 11 + 2 = 13 vierkanteenhede. (11 tel net die vol vierkante en ignoreer die helftes. 15 tel elke half vierkant verkeerdelik as ʼn vol vierkant. 12 halveer die 4 half vierkante verkeerd.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde roosterprentjie, as elke vierkant 1 cm² verteenwoordig, wat is die oppervlakte van die vorm in cm²?', checkMode: 'auto', options: ['11 cm²', '12 cm²', '13 cm²', '15 cm²'], correctIndex: 2, explanation: 'Die vorm bedek altesaam 13 vierkanteenhede (11 vol vierkante + 4 half vierkante = 11 + 2 = 13). Aangesien elke vierkant 1 cm² is, is die oppervlakte 13 cm². (11 cm² tel net die vol vierkante. 12 cm² halveer die 4 half vierkante verkeerd. 15 cm² tel elke half vierkant verkeerdelik as ʼn vol vierkant.)', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 45 vierkanteenhede. Dit is 9 vierkante breed. Hoeveel vierkante lank is dit?', checkMode: 'auto', options: ['45 vierkante', '54 vierkante', '9 vierkante', '5 vierkante'], correctIndex: 3, explanation: 'Lengte = oppervlakte ÷ breedte = 45 ÷ 9 = 5 vierkante. (45 vierkante gebruik net die oppervlakte. 54 vierkante tel verkeerdelik die oppervlakte en breedte bymekaar in plaas van te deel. 9 vierkante herhaal net die gegewe breedte.)' },

        // ── Blok C: Werk Terug (posisies 8-10, Medium) ──
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 44 cm. Die breedte is 8 cm. Vind die lengte.', checkMode: 'auto', options: ['14 cm', '36 cm', '8 cm', '30 cm'], correctIndex: 0, explanation: 'Omtrek = 2 × (lengte + breedte), dus 44 = 2 × (lengte + 8). Deel deur 2: 22 = lengte + 8. Lengte = 22 − 8 = 14 cm. (36 cm vergeet om die omtrek eers te halveer. 8 cm neem verkeerdelik aan lengte is gelyk aan breedte. 30 cm tel op in plaas van af te trek.)' },
        { difficulty: 'Medium', question: 'ʼn Vierkant het ʼn omtrek van 52 cm. Vind die lengte van elke sy.', checkMode: 'auto', options: ['26 cm', '13 cm', '208 cm', '52 cm'], correctIndex: 1, explanation: 'ʼn Vierkant het 4 gelyke sye, dus deel die omtrek deur 4: 52 ÷ 4 = 13 cm. (26 cm deel deur 2 in plaas van 4. 208 cm vermenigvuldig in plaas van te deel. 52 cm herhaal net die omtrek.)' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het ʼn omtrek van 26 cm. Twee van sy sye is 10 cm en 9 cm. Vind die lengte van die derde sy.', checkMode: 'auto', options: ['19 cm', '8 cm', '7 cm', '45 cm'], correctIndex: 2, explanation: 'Derde sy = omtrek − (som van bekende sye) = 26 − (10 + 9) = 26 − 19 = 7 cm. (19 cm vergeet om van die omtrek af te trek en tel net die twee bekende sye. 8 cm is ʼn rekenfout van een af. 45 cm tel al drie getalle verkeerdelik bymekaar.)' },

        // ── Blok D: Foutspeuring & Vergelyking (posisies 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Sipho sê: "ʼn Reghoek wat 10 cm lank en 4 cm breed is, het ʼn omtrek van 10 + 4 = 14 cm." Watter stelling evalueer sy werk korrek?', checkMode: 'auto', options: ['Hy is korrek — om die lengte en breedte bymekaar te tel gee altyd die omtrek.', 'Hy is verkeerd — hy het net een lengte en een breedte bymekaargetel; ʼn reghoek het twee van elk, dus is die korrekte omtrek 10 + 4 + 10 + 4 = 28 cm.', 'Hy is korrek, maar moes die eenheid as cm² geskryf het in plaas van cm.', 'Hy is verkeerd — die korrekte omtrek is 10 × 4 = 40 cm.'], correctIndex: 1, explanation: 'ʼn Reghoek het twee lengtes en twee breedtes, dus moet elkeen twee keer getel word. Die korrekte omtrek is 10 + 4 + 10 + 4 = 28 cm (of 2 × (10 + 4) = 28 cm).' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 15 cm by 4 cm en ʼn ander reghoek is 12 cm by 5 cm. Albei het dieselfde oppervlakte. Watter een het die groter omtrek?', checkMode: 'auto', options: ['Die 15 cm by 4 cm reghoek, met ʼn omtrek van 38 cm vergeleke met 34 cm vir die ander reghoek.', 'Die 12 cm by 5 cm reghoek, met ʼn omtrek van 38 cm vergeleke met 34 cm vir die ander reghoek.', 'Albei reghoeke het dieselfde omtrek omdat hulle dieselfde oppervlakte het.', 'Die 15 cm by 4 cm reghoek, met ʼn omtrek van 34 cm vergeleke met 38 cm vir die ander reghoek.'], correctIndex: 0, explanation: 'Albei het oppervlakte 60 cm² (15×4 = 60 en 12×5 = 60). Omtrek van 15×4 = 15+4+15+4 = 38 cm. Omtrek van 12×5 = 12+5+12+5 = 34 cm. Die 15 by 4 reghoek het die groter omtrek, al is die oppervlaktes gelyk.' },
        { difficulty: 'Hard', question: 'Tuin A is 15 m by 5 m en Tuin B is 12 m by 8 m. Albei tuine het dieselfde omtrek. Watter tuin het die groter oppervlakte, en met hoeveel?', checkMode: 'auto', options: ['Tuin A het die groter oppervlakte, met 21 m². Tuin A se oppervlakte is 96 m² en Tuin B s\'n is 75 m².', 'Tuin B het die groter oppervlakte, met 21 m². Tuin B se oppervlakte is 96 m² en Tuin A s\'n is 75 m².', 'Albei tuine het dieselfde oppervlakte omdat hulle dieselfde omtrek het.', 'Tuin B het die groter oppervlakte, met 15 m². Tuin B se oppervlakte is 90 m² en Tuin A s\'n is 75 m².'], correctIndex: 1, explanation: 'Albei het omtrek 40 m (15+5+15+5=40 en 12+8+12+8=40). Oppervlakte A = 15 × 5 = 75 m². Oppervlakte B = 12 × 8 = 96 m². Tuin B het die groter oppervlakte, met 96 − 75 = 21 m².' },

        // ── Blok E: Werklike-lewe Woordprobleme (posisies 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'Hoeveel vierkante meter teëls is nodig om ʼn klaskamervloer te bedek wat 8 m lank en 5 m breed is? Besluit eers of die vraag omtrek of oppervlakte benodig.', checkMode: 'auto', options: ['26 m', '20 m²', '40 m²', '45 m²'], correctIndex: 2, explanation: 'Om ʼn vloer met teëls te bedek benodig oppervlakte, nie omtrek nie. Oppervlakte = 8 × 5 = 40 m². (26 m verwar dit met die omtrek, 8+5+8+5. 20 m² halveer die oppervlakte verkeerdelik asof ʼn driehoekformule gebruik word. 45 m² is ʼn rekenfout in die vermenigvuldiging.)' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige stuk grond het sye van 14 m. Hoeveel heining is nodig om dit te omhein?', checkMode: 'auto', options: ['196 m', '28 m', '60 m', '56 m'], correctIndex: 3, explanation: 'Om grond met heining te omhein benodig omtrek. Omtrek = 14 × 4 = 56 m. (196 m verwar dit met die oppervlakte, 14 × 14. 28 m deel deur 2 in plaas van met 4 te vermenigvuldig. 60 m is ʼn rekenfout in die vermenigvuldiging.)' },
        { difficulty: 'Medium', question: 'ʼn Atletiekbaan in die vorm van ʼn reghoek het ʼn reguit gedeelte van 50 m lank en 30 m breed. Amahle draf twee keer om die buitekant van die baan. Hoe ver draf sy in totaal?', checkMode: 'auto', options: ['320 m', '160 m', '1500 m', '300 m'], correctIndex: 0, explanation: 'Om die buitekant te draf is omtrek. Omtrek = 50 + 30 + 50 + 30 = 160 m. Twee keer draf = 160 × 2 = 320 m. (160 m vergeet om te verdubbel vir twee keer draf. 1500 m verwar dit met die oppervlakte, 50 × 30. 300 m is ʼn rekenfout by die verdubbeling.)' },
        { difficulty: 'Hard', question: 'ʼn Saal wat 24 m by 15 m meet, se vloer moet geverf word. Verf kos R45 per vierkante meter. Wat is die totale koste om die vloer te verf?', checkMode: 'auto', options: ['R3 510', 'R16 200', 'R1 620', 'R405'], correctIndex: 1, explanation: 'Om ʼn vloer te verf benodig oppervlakte. Oppervlakte = 24 × 15 = 360 m². Koste = 360 × R45 = R16 200. (R3 510 gebruik verkeerdelik die omtrek, 78 m, in plaas van die oppervlakte. R1 620 het die korrekte berekening maar mis ʼn nul. R405 tel die oppervlakte en prys bymekaar in plaas van te vermenigvuldig.)' },

        // ── Blok F: Meerstap-toepassings & Regverdig-jou-Redenasie (posisies 18-19, Hard) ──
        { difficulty: 'Hard', question: 'Die prentjie hieronder wys ʼn L-vormige kamer wat bestaan uit ʼn reghoek 10 m by 6 m met ʼn kleiner reghoek 5 m by 4 m bo-op. Vind die totale oppervlakte van die kamer.', checkMode: 'auto', options: ['60 m²', '20 m²', '80 m²', '40 m²'], correctIndex: 2, explanation: 'Oppervlakte van groot reghoek = 10 × 6 = 60 m². Oppervlakte van klein reghoek = 5 × 4 = 20 m². Totale oppervlakte = 60 + 20 = 80 m². (60 m² tel net die groot reghoek. 20 m² tel net die klein reghoek. 40 m² trek verkeerdelik die klein reghoek af in plaas van dit by te tel.)', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,66 90,66 90,18 150,18 150,138 30,138" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="128" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="140" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="90" y="154" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="106" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="120" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5 m</text><text x="160" y="46" font-size="13" font-weight="700" fill="#2563eb">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'Twee vorms het albei ʼn oppervlakte van 24 cm²: Vorm A is 6 cm by 4 cm en Vorm B is 8 cm by 3 cm. Watter stelling verduidelik korrek waarom hul omtrekke verskil al is die oppervlaktes dieselfde?', checkMode: 'auto', options: ['Hul omtrekke moet gelyk wees omdat die oppervlaktes gelyk is.', 'Vorm A het ʼn omtrek van 20 cm en Vorm B het ʼn omtrek van 22 cm — die omtrek hang af van hoe die sye gerangskik is, nie net van die ingeslote oppervlakte nie.', 'Vorm B het ʼn kleiner omtrek as Vorm A omdat dit ʼn kleiner breedte het.', 'Die omtrekke kan nie vergelyk word tensy die vorms dieselfde tipe is nie.'], correctIndex: 1, explanation: 'Vorm A: omtrek = 6+4+6+4 = 20 cm. Vorm B: omtrek = 8+3+8+3 = 22 cm. Albei het oppervlakte 24 cm², maar om dieselfde oppervlakte in ʼn langer, dunner vorm te herrangskik vergroot die omtrek — die omtrek hang af van die vorm se buitelyn, nie net hoeveel ruimte ingesluit word nie.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Volpunte! Jy het omtrek en oppervlakte ten volle bemeester.' },
        { minScore: 15, message: 'Uitstekende werk! Gaan enige gemiste vrae deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
