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
      practiceQuestions: [],
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
<p style="margin-bottom:14px;"><strong>Oppervlakte</strong> is die <strong>hoeveelheid plat oppervlak wat ʼn vorm bedek</strong>. Ons meet oppervlakte deur te tel hoeveel gelyke-grootte vierkante binne die vorm inpas. Die antwoord word geskryf in <strong style="color:#dc2626;">vierkante eenhede</strong> soos cm² of m².</p>

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
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om oppervlakte te bereken deur vierkante eenhede te tel</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Teken of verbeel jou ʼn <strong style="color:#1e40af;">rooster van vierkante</strong> oor die vorm.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel hoeveel <span style="color:#16a34a;">vierkante eenhede</span></strong> binne die vorm inpas — sluit beide vol en half vierkante in.</span>
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
          answer: 'Oppervlakte = 12 vierkante eenhede, of 12 cm² as elke vierkant 1 cm is.',
        },
        {
          question:
            'ʼn Onreëlmatige vorm op ʼn rooster bedek 7 vol vierkante en 4 half vierkante. Wat is sy oppervlakte?',
          steps: [
            'Tel die <strong style="color:#1e40af;">vol vierkante</strong>: <strong>7</strong>.',
            'Tel die <strong style="color:#16a34a;">half vierkante</strong>: 4 helftes = <strong>2 vol vierkante</strong>.',
            'Tel bymekaar: <strong style="color:#1e40af;">7</strong> + <strong style="color:#16a34a;">2</strong> = <strong style="color:#dc2626;">9 vierkante eenhede</strong>.',
          ],
          answer: 'Oppervlakte = 9 vierkante eenhede.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'ʼn 4 by 3 reghoek op ʼn rooster met al 12 vierkante blou geskadu en genommer om te wys hoe telling die oppervlakte gee',
      videoPlaceholder:
        'Kort video wat wys hoe om oppervlakte te bereken deur vierkante eenhede op ʼn rooster te tel vir beide reëlmatige en onreëlmatige vorms',
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
      practiceQuestions: [],
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
      practiceQuestions: [],
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
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 12 cm en breedte 6 cm.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'Omtrek = 12 + 6 + 12 + 6 = 36 cm.' },
        { difficulty: 'Easy', question: 'ʼn Onreëlmatige vyfhoek het sye van 3 cm, 4 cm, 5 cm, 6 cm en 7 cm, soos hieronder getoon. Vind die omtrek.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25', '25 cm'], explanation: 'Tel al vyf sye bymekaar: 3 + 4 + 5 + 6 + 7 = 25 cm.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="60,20 140,30 165,90 110,140 40,100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><text x="95" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">3 cm</text><text x="158" y="55" font-size="13" font-weight="700" fill="#2563eb">4 cm</text><text x="150" y="118" font-size="13" font-weight="700" fill="#2563eb">5 cm</text><text x="75" y="128" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">6 cm</text><text x="30" y="62" font-size="13" font-weight="700" fill="#2563eb" text-anchor="end">7 cm</text></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige stuk karton is 250 mm lank en 12 cm breed. Skakel die lengte om na cm, en vind dan die omtrek van die karton in cm.', answer: '74 cm', checkMode: 'auto', correctAnswer: '74cm', correctAnswers: ['74cm', '74', '74 cm'], explanation: 'Skakel eers 250 mm om na cm: 250 ÷ 10 = 25 cm. Omtrek = 25 + 12 + 25 + 12 = 74 cm. Al die sye moet in dieselfde eenheid wees voordat jy bymekaartel.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 46 cm. Die breedte is 9 cm. Vind die lengte.', answer: '14 cm', checkMode: 'auto', correctAnswer: '14cm', correctAnswers: ['14cm', '14', '14 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 46 = 2 × (lengte + 9). Deel deur 2: 23 = lengte + 9. Lengte = 23 − 9 = 14 cm.' },

        // ── Blok B: Vind Oppervlakte (posisies 4-7, Maklik-Medium) ──
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 9 vierkante lank en 3 vierkante breed. Vind die oppervlakte.', answer: '27 vierkante eenhede', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27vierkantelenhede', '27 vierkante eenhede', '27cm²', '27cm2', '27 cm²', '27 cm2'], explanation: 'Tel of vermenigvuldig: 9 × 3 = 27 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'Die prentjie hieronder wys ʼn onreëlmatige vorm geteken op ʼn 1 m²-rooster. Tel die vol vierkante en half vierkante om die totale oppervlakte te vind.', answer: '10 vierkante eenhede', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10vierkantelenhede', '10 vierkante eenhede'], explanation: 'Daar is 8 vol vierkante wat blou geskadu is en 4 half vierkante wat geel geskadu is. 4 half vierkante = 2 vol vierkante. Totaal = 8 + 2 = 10 vierkante eenhede.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde roosterprentjie, as elke vierkant 1 m² verteenwoordig, hoeveel meer vol vierkante sal geskadu moet word om hierdie vorm in ʼn volledige reghoek van 3 vierkante by 4 vierkante te verander?', answer: '2 vierkante', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2vierkante', '2 vierkante'], explanation: 'ʼn Reghoek van 3 by 4 bedek 12 vol vierkante. Die vorm bedek reeds 8 vol vierkante (die 4 half vierkante is net gedeeltelik gevul), dus is 12 − 8 = 2 meer vol vierkante nodig, benewens die voltooiing van die 4 half vierkante.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="110,30 130,30 130,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,90 110,90 110,110" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 36 vierkante eenhede. Dit is 9 vierkante lank. Hoeveel vierkante breed is dit?', answer: '4 vierkante', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4vierkante', '4 vierkante'], explanation: 'Breedte = oppervlakte ÷ lengte = 36 ÷ 9 = 4 vierkante.' },

        // ── Blok C: Werk Terug (posisies 8-10, Medium) ──
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 40 cm. Die lengte is 12 cm. Vind die breedte.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 40 = 2 × (12 + breedte). Deel deur 2: 20 = 12 + breedte. Breedte = 20 − 12 = 8 cm.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant het ʼn omtrek van 48 cm. Vind die lengte van elke sy.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye, dus deel die omtrek deur 4: 48 ÷ 4 = 12 cm.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het ʼn omtrek van 22 cm. Twee van sy sye is 8 cm en 6 cm. Vind die lengte van die derde sy.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Derde sy = omtrek − (som van bekende sye) = 22 − (8 + 6) = 22 − 14 = 8 cm.' },

        // ── Blok D: Foutspeuring & Vergelyking (posisies 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Kagiso sê: "Om die omtrek van ʼn reghoek van 9 cm by 4 cm te vind, vermenigvuldig ek 9 × 4 om 36 cm te kry." Is Kagiso korrek? Verduidelik die fout en gee die korrekte omtrek.', answer: 'Nee, Kagiso is verkeerd. Hy het die oppervlakte bereken (9 × 4 = 36 cm²), nie die omtrek nie. Omtrek beteken om al vier sye bymekaar te tel: 9 + 4 + 9 + 4 = 26 cm. Kagiso het die vermenigvuldigingsreël vir oppervlakte met die optelreël vir omtrek verwar.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn 5 × 2 reghoek en ʼn 4 × 3 reghoek — watter een het die groter oppervlakte?', answer: 'Die 4 × 3 reghoek. 5 × 2 = 10 cm² en 4 × 3 = 12 cm².', checkMode: 'auto', correctAnswer: '4x3', correctAnswers: ['4x3', '4 x 3 reghoek', 'die 4x3 reghoek', '4×3', 'die 4 x 3 reghoek'], explanation: 'Oppervlakte van 5 × 2 = 10 cm². Oppervlakte van 4 × 3 = 12 cm². Die 4 × 3 reghoek het die groter oppervlakte.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant met sye van 6 cm en ʼn reghoek 9 cm by 4 cm het albei dieselfde oppervlakte. Wat is daardie oppervlakte?', answer: '36 cm²', checkMode: 'auto', correctAnswer: '36cm²', correctAnswers: ['36cm²', '36cm2', '36', '36 cm²', '36 cm2'], explanation: 'Vierkant oppervlakte = 6 × 6 = 36 cm². Reghoek oppervlakte = 9 × 4 = 36 cm². Albei vorms het ʼn oppervlakte van 36 cm².' },

        // ── Blok E: Werklike-lewe Woordprobleme (posisies 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'ʼn Tuin is 10 m lank en 6 m breed. Hoeveel heining is nodig om die hele tuin te omhein?', answer: '32 m', checkMode: 'auto', correctAnswer: '32m', correctAnswers: ['32m', '32', '32 m'], explanation: 'Die sleutelwoord "heining rondom" beteken omtrek. Omtrek = 10 + 6 + 10 + 6 = 32 m heining.' },
        { difficulty: 'Medium', question: 'ʼn Kamer wat 7 m by 4 m meet, benodig nuwe mat. Mat kos R120 per vierkante meter. Besluit eers of jy omtrek of oppervlakte nodig het, en vind dan die totale koste.', answer: 'R3 360', checkMode: 'auto', correctAnswer: 'R3360', correctAnswers: ['R3360', '3360', 'R3 360', 'r3360'], explanation: 'Om ʼn vloer met mat te bedek benodig oppervlakte, nie omtrek nie. Oppervlakte = 7 × 4 = 28 m². Koste = 28 × R120 = R3 360.' },
        { difficulty: 'Medium', question: 'Voor ʼn skool-sportdag moet die buitenste rand van die reghoekige veld, wat 45 m lank en 20 m breed is, met lyn geverf word. Hoeveel meter lynverf is nodig?', answer: '130 m', checkMode: 'auto', correctAnswer: '130m', correctAnswers: ['130m', '130', '130 m'], explanation: 'ʼn Lyn wat die buitenste rand van die veld merk, is die omtrek. Omtrek = 45 + 20 + 45 + 20 = 130 m.' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige tuin het sye van 9 m. Heining kos R30 per meter. Wat is die totale koste om die tuin te omhein?', answer: 'R1 080', checkMode: 'auto', correctAnswer: 'R1080', correctAnswers: ['R1080', '1080', 'R1 080', 'r1080'], explanation: 'Omtrek = 9 × 4 = 36 m. Koste = 36 × R30 = R1 080.' },

        // ── Blok F: Meerstap-toepassings & Regverdig-jou-Redenasie (posisies 18-19, Hard) ──
        { difficulty: 'Hard', question: 'Die prentjie hieronder wys ʼn L-vormige tuin wat bestaan uit ʼn reghoek 8 m by 5 m met ʼn kleiner reghoek 4 m by 3 m bo-op. Vind die totale oppervlakte van die tuin.', answer: '52 m²', checkMode: 'auto', correctAnswer: '52m²', correctAnswers: ['52m²', '52m2', '52', '52 m²', '52 m2'], explanation: 'Oppervlakte van groot reghoek = 8 × 5 = 40 m². Oppervlakte van klein reghoek = 4 × 3 = 12 m². Totale oppervlakte = 40 + 12 = 52 m².', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,60 86,60 86,18 142,18 142,130 30,130" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="120" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="132" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="86" y="146" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">8 m</text><text x="18" y="98" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">5 m</text><text x="114" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">4 m</text><text x="152" y="42" font-size="13" font-weight="700" fill="#2563eb">3 m</text></svg>' },
        { difficulty: 'Hard', question: 'Verduidelik, met behulp van ʼn voorbeeld met syfers, of twee reghoeke dieselfde oppervlakte maar verskillende omtrekke kan hê.', answer: 'Ja. Byvoorbeeld, ʼn reghoek wat 4 m by 9 m is, het ʼn oppervlakte van 36 m² (4 × 9 = 36) en ʼn omtrek van 26 m (4+9+4+9=26). ʼn Reghoek wat 6 m by 6 m is, het ook ʼn oppervlakte van 36 m² (6 × 6 = 36) maar ʼn omtrek van slegs 24 m (6+6+6+6=24). Albei reghoeke het dieselfde oppervlakte maar verskillende omtrekke.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn vierkant met sye van 15 cm.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: 'Omtrek = 15 + 15 + 15 + 15 = 60 cm.' },
        { difficulty: 'Easy', question: 'ʼn Reëlmatige seshoek het 6 gelyke sye van 6 cm elk. Vind die omtrek.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'ʼn Reëlmatige seshoek het 6 gelyke sye. Omtrek = 6 × 6 = 36 cm.' },
        { difficulty: 'Medium', question: 'Een sy van ʼn driehoek word gegee as 40 mm, ʼn ander as 6 cm, en die derde as 5 cm. Skakel al die sye om na cm en vind die omtrek.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15', '15 cm'], explanation: 'Skakel 40 mm om na cm: 40 ÷ 10 = 4 cm. Omtrek = 4 + 6 + 5 = 15 cm. Skakel altyd om na dieselfde eenheid voordat jy sye bymekaartel.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 54 cm. Die breedte is 9 cm. Vind die lengte.', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 54 = 2 × (lengte + 9). Deel deur 2: 27 = lengte + 9. Lengte = 27 − 9 = 18 cm.' },

        // ── Blok B: Vind Oppervlakte (posisies 4-7, Maklik-Medium) ──
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 8 vierkante lank en 5 vierkante breed. Vind die oppervlakte.', answer: '40 vierkante eenhede', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40vierkantelenhede', '40 vierkante eenhede', '40cm²', '40cm2', '40 cm²', '40 cm2'], explanation: 'Tel of vermenigvuldig: 8 × 5 = 40 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'Die prentjie hieronder wys ʼn onreëlmatige vorm geteken op ʼn 1 m²-rooster. Tel die vol vierkante en half vierkante om die totale oppervlakte te vind.', answer: '12 vierkante eenhede', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12vierkantelenhede', '12 vierkante eenhede'], explanation: 'Daar is 9 vol vierkante wat blou geskadu is en 6 half vierkante wat geel geskadu is. 6 half vierkante = 3 vol vierkante. Totaal = 9 + 3 = 12 vierkante eenhede.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde roosterprentjie, hoeveel vierkante eenhede sou bygevoeg word as net die 6 half vierkante elk in vol vierkante voltooi word (sonder om enige ander deel van die vorm te verander)?', answer: '3 vierkante eenhede', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3vierkantelenhede', '3 vierkante eenhede'], explanation: 'Elke half vierkant benodig nog ʼn helfte om ʼn vol vierkant te word. Om 6 half vierkante te voltooi voeg 6 helftes = 3 vol vierkante eenhede by die totaal.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="90,30 110,30 90,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="90,50 90,70 70,70" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 48 vierkante eenhede. Dit is 6 vierkante breed. Hoeveel vierkante lank is dit?', answer: '8 vierkante', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8vierkante', '8 vierkante'], explanation: 'Lengte = oppervlakte ÷ breedte = 48 ÷ 6 = 8 vierkante.' },

        // ── Blok C: Werk Terug (posisies 8-10, Medium) ──
        { difficulty: 'Medium', question: 'ʼn Vierkant het ʼn omtrek van 48 cm. Vind die lengte van elke sy.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye, dus deel die omtrek deur 4: 48 ÷ 4 = 12 cm.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 40 cm. Die lengte is 12 cm. Vind die breedte.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 40 = 2 × (12 + breedte). Deel deur 2: 20 = 12 + breedte. Breedte = 20 − 12 = 8 cm.' },
        { difficulty: 'Medium', question: 'ʼn Gelykbenige driehoek het ʼn omtrek van 29 cm. Sy twee gelyke sye is elk 11 cm. Vind die lengte van die basis.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7', '7 cm'], explanation: 'Basis = omtrek − (som van die twee gelyke sye) = 29 − (11 + 11) = 29 − 22 = 7 cm.' },

        // ── Blok D: Foutspeuring & Vergelyking (posisies 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Thandeka sê: "ʼn Gelykbenige driehoek met sye 7 cm, 7 cm en 4 cm het ʼn omtrek van 4 × 3 = 12 cm omdat daar 3 sye is." Verduidelik wat verkeerd is met haar redenasie en gee die korrekte omtrek.', answer: 'Thandeka is verkeerd. Sy het probeer vermenigvuldig asof al drie sye gelyk was, maar slegs twee van die drie sye is gelyk in ʼn gelykbenige driehoek (7 cm en 7 cm), terwyl die basis (4 cm) verskillend is. Die korrekte metode is om al drie sye bymekaar te tel: 7 + 7 + 4 = 18 cm.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 3 cm by 8 cm en ʼn vierkant het sye van 5 cm. Watter vorm het die groter omtrek?', answer: 'Die reghoek. Sy omtrek is 22 cm en die vierkant se omtrek is 20 cm.', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'die reghoek'], explanation: 'Reghoek omtrek = 3 + 8 + 3 + 8 = 22 cm. Vierkant omtrek = 5 × 4 = 20 cm. Die reghoek het die groter omtrek.' },
        { difficulty: 'Hard', question: 'Vorm A is 8 cm by 3 cm en Vorm B is 6 cm by 4 cm. Albei het dieselfde oppervlakte. Watter vorm het die kleiner omtrek?', answer: 'Vorm B. Dit het ʼn omtrek van 20 cm vergeleke met Vorm A se 22 cm.', checkMode: 'auto', correctAnswer: 'vormb', correctAnswers: ['vormb', 'vorm b', 'b', 'vormB', 'Vorm B', 'VormB'], explanation: 'Oppervlakte van A = 8 × 3 = 24 cm². Oppervlakte van B = 6 × 4 = 24 cm² (dieselfde oppervlakte). Omtrek van A = 8+3+8+3 = 22 cm. Omtrek van B = 6+4+6+4 = 20 cm. Vorm B het die kleiner omtrek.' },

        // ── Blok E: Werklike-lewe Woordprobleme (posisies 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'ʼn Muur is 6 m lank en 3 m hoog en benodig ʼn vars laag verf. Besluit of jy omtrek of oppervlakte nodig het, en werk dan uit hoeveel muuroppervlak geverf moet word.', answer: '18 m²', checkMode: 'auto', correctAnswer: '18m²', correctAnswers: ['18m²', '18m2', '18', '18 m²', '18 m2'], explanation: 'Om ʼn muur te verf bedek oppervlak, dus benodig jy oppervlakte, nie omtrek nie. Oppervlakte = 6 × 3 = 18 m².' },
        { difficulty: 'Medium', question: 'ʼn Prentraam-rand is ʼn reghoek 30 cm by 20 cm. Vind die lengte van die rand.', answer: '100 cm', checkMode: 'auto', correctAnswer: '100cm', correctAnswers: ['100cm', '100', '100 cm'], explanation: 'ʼn Rand loop rondom die buitekant, dus is dit omtrek. Omtrek = 30 + 20 + 30 + 20 = 100 cm.' },
        { difficulty: 'Medium', question: 'ʼn Hokkiebaan in die vorm van ʼn reghoek is 45 m lank en 20 m breed, met ʼn nis vir die sitplekgebied wat in een hoek ingesny is en vir hierdie vraag geïgnoreer word. Hoe ver sou ʼn speler hardloop as hulle een keer om die buitenste rand van die volle reghoek draf?', answer: '130 m', checkMode: 'auto', correctAnswer: '130m', correctAnswers: ['130m', '130', '130 m'], explanation: 'Om die buitenste rand te hardloop beteken omtrek. Omtrek = 45 + 20 + 45 + 20 = 130 m.' },
        { difficulty: 'Hard', question: 'ʼn Vloer is 11 m lank en 8 m breed. Teëls kos R50 per vierkante meter. Wat is die totale koste om die vloer te teël?', answer: 'R4 400', checkMode: 'auto', correctAnswer: 'R4400', correctAnswers: ['R4400', '4400', 'R4 400', 'r4400'], explanation: 'Om ʼn vloer te teël benodig oppervlakte. Oppervlakte = 11 × 8 = 88 m². Koste = 88 × R50 = R4 400.' },

        // ── Blok F: Meerstap-toepassings & Regverdig-jou-Redenasie (posisies 18-19, Hard) ──
        { difficulty: 'Hard', question: 'Die prentjie hieronder wys ʼn reghoekige swembad 8 m by 4 m wat omring word deur ʼn geplaveide pad van 1 m breed aan alle kante, wat die totale buitenste reghoek 10 m by 6 m maak. Vind die oppervlakte van slegs die pad.', answer: '28 m²', checkMode: 'auto', correctAnswer: '28m²', correctAnswers: ['28m²', '28m2', '28', '28 m²', '28 m2'], explanation: 'Buitenste oppervlakte = 10 × 6 = 60 m². Swembad oppervlakte = 8 × 4 = 32 m². Padoppervlakte = 60 − 32 = 28 m².', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="30" width="140" height="84" fill="#fde68a" stroke="#0f1f3d" stroke-width="2.5"/><rect x="44" y="44" width="112" height="56" fill="#bfdbfe" stroke="#0f1f3d" stroke-width="2"/><text x="100" y="22" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="76" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="100" y="60" font-size="13" font-weight="700" fill="#1e40af" text-anchor="middle">8 m</text><text x="180" y="76" font-size="12" font-weight="700" fill="#1e40af">4 m</text><text x="100" y="128" font-size="12" fill="#9a6f00" text-anchor="middle">geskadu pad, 1 m breed</text></svg>' },
        { difficulty: 'Hard', question: 'ʼn Vierkant het ʼn oppervlakte van 36 cm² en ʼn reghoek wat 12 cm by 3 cm is, het ook ʼn oppervlakte van 36 cm². Verduidelik watter vorm die kleiner omtrek het, en waarom ʼn vierkant dikwels ʼn kleiner omtrek het as ander reghoeke met dieselfde oppervlakte.', answer: 'Die vierkant het die kleiner omtrek. Die vierkant (6 cm × 6 cm) het ʼn omtrek van 24 cm (6+6+6+6=24), terwyl die reghoek (12 cm × 3 cm) ʼn omtrek van 30 cm het (12+3+12+3=30). ʼn Vierkant het gewoonlik ʼn kleiner omtrek as ander reghoeke met dieselfde oppervlakte omdat sy sye so gelyk as moontlik is, sodat dit nie ekstra lengte nodig het om die vorm "uit te rek" nie.', checkMode: 'self' },
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
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 18 cm en breedte 9 cm.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54cm', correctAnswers: ['54cm', '54', '54 cm'], explanation: 'Omtrek = 18 + 9 + 18 + 9 = 54 cm.' },
        { difficulty: 'Easy', question: 'ʼn Reëlmatige agthoek het 8 gelyke sye van 5 cm elk. Vind die omtrek.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40cm', correctAnswers: ['40cm', '40', '40 cm'], explanation: 'ʼn Reëlmatige agthoek het 8 gelyke sye. Omtrek = 5 × 8 = 40 cm.' },
        { difficulty: 'Medium', question: 'ʼn Driehoekige vlag het een sy van 90 mm, ʼn ander van 8 cm, en ʼn derde van 7 cm. Skakel al die sye om na cm en vind die omtrek van die vlag.', answer: '24 cm', checkMode: 'auto', correctAnswer: '24cm', correctAnswers: ['24cm', '24', '24 cm'], explanation: 'Skakel 90 mm om na cm: 90 ÷ 10 = 9 cm. Omtrek = 9 + 8 + 7 = 24 cm. Onthou om al die sye na dieselfde eenheid om te skakel voordat jy bymekaartel.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 60 cm. Die breedte is 11 cm. Vind die lengte.', answer: '19 cm', checkMode: 'auto', correctAnswer: '19cm', correctAnswers: ['19cm', '19', '19 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 60 = 2 × (lengte + 11). Deel deur 2: 30 = lengte + 11. Lengte = 30 − 11 = 19 cm.' },

        // ── Blok B: Vind Oppervlakte (posisies 4-7, Maklik-Medium) ──
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 10 vierkante lank en 6 vierkante breed. Vind die oppervlakte.', answer: '60 vierkante eenhede', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60vierkantelenhede', '60 vierkante eenhede', '60cm²', '60cm2', '60 cm²', '60 cm2'], explanation: 'Tel of vermenigvuldig: 10 × 6 = 60 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'Die prentjie hieronder wys ʼn onreëlmatige vorm geteken op ʼn 1 m²-rooster. Tel die vol vierkante en half vierkante om die totale oppervlakte te vind.', answer: '13 vierkante eenhede', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13vierkantelenhede', '13 vierkante eenhede'], explanation: 'Daar is 11 vol vierkante wat blou geskadu is en 4 half vierkante wat geel geskadu is. 4 half vierkante = 2 vol vierkante. Totaal = 11 + 2 = 13 vierkante eenhede.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'Met dieselfde roosterprentjie, as elke vierkant 1 cm² verteenwoordig, wat is die oppervlakte van die vorm in cm²?', answer: '13 cm²', checkMode: 'auto', correctAnswer: '13cm²', correctAnswers: ['13cm²', '13cm2', '13', '13 cm²', '13 cm2'], explanation: 'Die vorm bedek altesaam 13 vierkante eenhede (11 vol vierkante + 4 half vierkante = 11 + 2 = 13). Aangesien elke vierkant 1 cm² is, is die oppervlakte 13 cm².', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="50" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="30" width="20" height="20" fill="#bfdbfe"/><rect x="50" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="110" y="50" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="90" y="70" width="20" height="20" fill="#bfdbfe"/><rect x="70" y="90" width="20" height="20" fill="#bfdbfe"/><polygon points="30,30 50,30 30,50" fill="#fde68a"/><polygon points="130,30 130,50 110,50" fill="#fde68a"/><polygon points="50,70 70,70 50,90" fill="#fde68a"/><polygon points="110,70 110,90 90,90" fill="#fde68a"/><g stroke="#9ca3af" stroke-width="1"><line x1="10" y1="10" x2="170" y2="10"/><line x1="10" y1="30" x2="170" y2="30"/><line x1="10" y1="50" x2="170" y2="50"/><line x1="10" y1="70" x2="170" y2="70"/><line x1="10" y1="90" x2="170" y2="90"/><line x1="10" y1="110" x2="170" y2="110"/><line x1="10" y1="130" x2="170" y2="130"/><line x1="10" y1="10" x2="10" y2="130"/><line x1="30" y1="10" x2="30" y2="130"/><line x1="50" y1="10" x2="50" y2="130"/><line x1="70" y1="10" x2="70" y2="130"/><line x1="90" y1="10" x2="90" y2="130"/><line x1="110" y1="10" x2="110" y2="130"/><line x1="130" y1="10" x2="130" y2="130"/><line x1="150" y1="10" x2="150" y2="130"/><line x1="170" y1="10" x2="170" y2="130"/></g></svg>' },
        { difficulty: 'Medium', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 45 vierkante eenhede. Dit is 9 vierkante breed. Hoeveel vierkante lank is dit?', answer: '5 vierkante', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5vierkante', '5 vierkante'], explanation: 'Lengte = oppervlakte ÷ breedte = 45 ÷ 9 = 5 vierkante.' },

        // ── Blok C: Werk Terug (posisies 8-10, Medium) ──
        { difficulty: 'Medium', question: 'ʼn Reghoek het ʼn omtrek van 54 cm. Die breedte is 9 cm. Vind die lengte.', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 54 = 2 × (lengte + 9). Deel deur 2: 27 = lengte + 9. Lengte = 27 − 9 = 18 cm.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant het ʼn omtrek van 52 cm. Vind die lengte van elke sy.', answer: '13 cm', checkMode: 'auto', correctAnswer: '13cm', correctAnswers: ['13cm', '13', '13 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye, dus deel die omtrek deur 4: 52 ÷ 4 = 13 cm.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het ʼn omtrek van 26 cm. Twee van sy sye is 10 cm en 9 cm. Vind die lengte van die derde sy.', answer: '7 cm', checkMode: 'auto', correctAnswer: '7cm', correctAnswers: ['7cm', '7', '7 cm'], explanation: 'Derde sy = omtrek − (som van bekende sye) = 26 − (10 + 9) = 26 − 19 = 7 cm.' },

        // ── Blok D: Foutspeuring & Vergelyking (posisies 11-13, Medium) ──
        { difficulty: 'Medium', question: 'Sipho sê: "ʼn Reghoek wat 10 cm lank en 4 cm breed is, het ʼn omtrek van 10 + 4 = 14 cm." Verduidelik wat verkeerd is met sy werk en gee die korrekte omtrek.', answer: 'Sipho is verkeerd. Hy het net een lengte en een breedte bymekaargetel, maar ʼn reghoek het twee lengtes en twee breedtes, dus moet elkeen twee keer getel word. Die korrekte omtrek is 10 + 4 + 10 + 4 = 28 cm (of 2 × (10 + 4) = 28 cm).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 15 cm by 4 cm en ʼn ander reghoek is 12 cm by 5 cm. Albei het dieselfde oppervlakte. Watter een het die groter omtrek?', answer: 'Die 15 cm by 4 cm reghoek. Sy omtrek is 38 cm vergeleke met 34 cm vir die ander reghoek.', checkMode: 'auto', correctAnswer: '15cmby4cm', correctAnswers: ['15cmby4cm', '15 by 4', '15x4', '15 cm by 4 cm', 'die 15 by 4 reghoek'], explanation: 'Albei het oppervlakte 60 cm² (15×4 = 60 en 12×5 = 60). Omtrek van 15×4 = 15+4+15+4 = 38 cm. Omtrek van 12×5 = 12+5+12+5 = 34 cm. Die 15 by 4 reghoek het die groter omtrek.' },
        { difficulty: 'Hard', question: 'Tuin A is 15 m by 5 m en Tuin B is 12 m by 8 m. Albei tuine het dieselfde omtrek. Watter tuin het die groter oppervlakte, en met hoeveel?', answer: 'Tuin B het die groter oppervlakte, met 21 m². Tuin A se oppervlakte is 75 m² en Tuin B se oppervlakte is 96 m².', checkMode: 'auto', correctAnswer: 'tuinb,21m²', correctAnswers: ['tuinb,21m²', 'tuin b met 21', 'b, 21', 'tuin b, 21 m²', 'tuinB21'], explanation: 'Albei het omtrek 40 m (15+5+15+5=40 en 12+8+12+8=40). Oppervlakte A = 15 × 5 = 75 m². Oppervlakte B = 12 × 8 = 96 m². Tuin B het die groter oppervlakte, met 96 − 75 = 21 m².' },

        // ── Blok E: Werklike-lewe Woordprobleme (posisies 14-17, Medium-Hard) ──
        { difficulty: 'Medium', question: 'Hoeveel vierkante meter teëls is nodig om ʼn klaskamervloer te bedek wat 8 m lank en 5 m breed is? Besluit eers of die vraag omtrek of oppervlakte benodig.', answer: '40 m²', checkMode: 'auto', correctAnswer: '40m²', correctAnswers: ['40m²', '40m2', '40', '40 m²', '40 m2'], explanation: 'Om ʼn vloer met teëls te bedek benodig oppervlakte, nie omtrek nie. Oppervlakte = 8 × 5 = 40 m². Jy het 40 teëls nodig.' },
        { difficulty: 'Medium', question: 'ʼn Vierkantige stuk grond het sye van 14 m. Hoeveel heining is nodig om dit te omhein?', answer: '56 m', checkMode: 'auto', correctAnswer: '56m', correctAnswers: ['56m', '56', '56 m'], explanation: 'Om grond met heining te omhein benodig omtrek. Omtrek = 14 × 4 = 56 m.' },
        { difficulty: 'Medium', question: 'ʼn Atletiekbaan in die vorm van ʼn reghoek het ʼn reguit gedeelte van 50 m lank en 30 m breed. Amahle draf twee keer om die buitekant van die baan. Hoe ver draf sy in totaal?', answer: '320 m', checkMode: 'auto', correctAnswer: '320m', correctAnswers: ['320m', '320', '320 m'], explanation: 'Om die buitekant te draf is omtrek. Omtrek = 50 + 30 + 50 + 30 = 160 m. Twee keer draf = 160 × 2 = 320 m.' },
        { difficulty: 'Hard', question: 'ʼn Saal wat 24 m by 15 m meet, se vloer moet geverf word. Verf kos R45 per vierkante meter. Wat is die totale koste om die vloer te verf?', answer: 'R16 200', checkMode: 'auto', correctAnswer: 'R16200', correctAnswers: ['R16200', '16200', 'R16 200', 'r16200'], explanation: 'Om ʼn vloer te verf benodig oppervlakte. Oppervlakte = 24 × 15 = 360 m². Koste = 360 × R45 = R16 200.' },

        // ── Blok F: Meerstap-toepassings & Regverdig-jou-Redenasie (posisies 18-19, Hard) ──
        { difficulty: 'Hard', question: 'Die prentjie hieronder wys ʼn L-vormige kamer wat bestaan uit ʼn reghoek 10 m by 6 m met ʼn kleiner reghoek 5 m by 4 m bo-op. Vind die totale oppervlakte van die kamer.', answer: '80 m²', checkMode: 'auto', correctAnswer: '80m²', correctAnswers: ['80m²', '80m2', '80', '80 m²', '80 m2'], explanation: 'Oppervlakte van groot reghoek = 10 × 6 = 60 m². Oppervlakte van klein reghoek = 5 × 4 = 20 m². Totale oppervlakte = 60 + 20 = 80 m².', diagramSvg: '<svg viewBox="0 0 220 180" xmlns="http://www.w3.org/2000/svg"><polygon points="30,66 90,66 90,18 150,18 150,138 30,138" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><rect x="30" y="128" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><rect x="140" y="18" width="10" height="10" fill="none" stroke="#0f1f3d" stroke-width="1.5"/><text x="90" y="154" font-size="14" font-weight="700" fill="#2563eb" text-anchor="middle">10 m</text><text x="18" y="106" font-size="14" font-weight="700" fill="#2563eb" text-anchor="end">6 m</text><text x="120" y="12" font-size="13" font-weight="700" fill="#2563eb" text-anchor="middle">5 m</text><text x="160" y="46" font-size="13" font-weight="700" fill="#2563eb">4 m</text></svg>' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die omtrek van ʼn vorm kan verander selfs al bly die oppervlakte presies dieselfde.', answer: 'Die omtrek hang af van die vorm se buitelyn (hoe die sye gerangskik is), terwyl die oppervlakte slegs afhang van hoeveel ruimte ingesluit word. Om dieselfde hoeveelheid ruimte in ʼn langer, dunner vorm te herrangskik, vergroot die omtrek sonder om die oppervlakte te verander, omdat meer buitenste rand nodig is om dieselfde ruimte in te sluit wanneer dit uitgerek word.', checkMode: 'self' },
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
