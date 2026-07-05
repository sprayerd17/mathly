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
    // STEL 1 — FONDAMENTELE OMTREK (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Fondamentele Omtrek',
      questions: [
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 7 cm en breedte 3 cm.', answer: '20 cm', checkMode: 'auto', correctAnswer: '20cm', correctAnswers: ['20cm', '20', '20 cm'], explanation: 'Omtrek = 7 + 3 + 7 + 3 = 20 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn vierkant met sye van 9 cm.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye. Omtrek = 9 + 9 + 9 + 9 = 36 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn driehoek met sye 4 cm, 5 cm en 6 cm.', answer: '15 cm', checkMode: 'auto', correctAnswer: '15cm', correctAnswers: ['15cm', '15', '15 cm'], explanation: 'Tel al drie sye bymekaar: 4 + 5 + 6 = 15 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 12 cm en breedte 6 cm.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'Omtrek = 12 + 6 + 12 + 6 = 36 cm.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige vyfhoek het 5 gelyke sye van 8 cm elk. Vind die omtrek.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40cm', correctAnswers: ['40cm', '40', '40 cm'], explanation: 'ʼn Reëlmatige vyfhoek het 5 gelyke sye. Omtrek = 8 × 5 = 40 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn vierkant met sye van 15 cm.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: 'Omtrek = 15 + 15 + 15 + 15 = 60 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 20 cm en breedte 10 cm.', answer: '60 cm', checkMode: 'auto', correctAnswer: '60cm', correctAnswers: ['60cm', '60', '60 cm'], explanation: 'Omtrek = 20 + 10 + 20 + 10 = 60 cm.' },
        { difficulty: 'Medium', question: 'ʼn Gelyksydige driehoek het al 3 sye gelyk aan 10 cm. Vind die omtrek.', answer: '30 cm', checkMode: 'auto', correctAnswer: '30cm', correctAnswers: ['30cm', '30', '30 cm'], explanation: 'ʼn Gelyksydige driehoek het 3 gelyke sye. Omtrek = 10 × 3 = 30 cm.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het sye van 6 cm, 9 cm, 5 cm en 7 cm. Vind die omtrek.', answer: '27 cm', checkMode: 'auto', correctAnswer: '27cm', correctAnswers: ['27cm', '27', '27 cm'], explanation: 'Tel al vier sye bymekaar: 6 + 9 + 5 + 7 = 27 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 14 cm en breedte 8 cm.', answer: '44 cm', checkMode: 'auto', correctAnswer: '44cm', correctAnswers: ['44cm', '44', '44 cm'], explanation: 'Omtrek = 14 + 8 + 14 + 8 = 44 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn vierkant met sye van 11 cm.', answer: '44 cm', checkMode: 'auto', correctAnswer: '44cm', correctAnswers: ['44cm', '44', '44 cm'], explanation: 'Omtrek = 11 + 11 + 11 + 11 = 44 cm.' },
        { difficulty: 'Medium', question: 'ʼn Gelykbenige driehoek het twee sye van 7 cm en ʼn basis van 4 cm. Vind die omtrek.', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], explanation: 'Tel al drie sye bymekaar: 7 + 7 + 4 = 18 cm.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige seshoek het 6 gelyke sye van 6 cm elk. Vind die omtrek.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'ʼn Reëlmatige seshoek het 6 gelyke sye. Omtrek = 6 × 6 = 36 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 25 cm en breedte 15 cm.', answer: '80 cm', checkMode: 'auto', correctAnswer: '80cm', correctAnswers: ['80cm', '80', '80 cm'], explanation: 'Omtrek = 25 + 15 + 25 + 15 = 80 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn vierkant met sye van 20 cm.', answer: '80 cm', checkMode: 'auto', correctAnswer: '80cm', correctAnswers: ['80cm', '80', '80 cm'], explanation: 'Omtrek = 20 + 20 + 20 + 20 = 80 cm.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vyfhoek het sye van 3 cm, 4 cm, 5 cm, 6 cm en 7 cm. Vind die omtrek.', answer: '25 cm', checkMode: 'auto', correctAnswer: '25cm', correctAnswers: ['25cm', '25', '25 cm'], explanation: 'Tel al vyf sye bymekaar: 3 + 4 + 5 + 6 + 7 = 25 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 18 cm en breedte 9 cm.', answer: '54 cm', checkMode: 'auto', correctAnswer: '54cm', correctAnswers: ['54cm', '54', '54 cm'], explanation: 'Omtrek = 18 + 9 + 18 + 9 = 54 cm.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het sye van 9 cm, 12 cm en 15 cm. Vind die omtrek.', answer: '36 cm', checkMode: 'auto', correctAnswer: '36cm', correctAnswers: ['36cm', '36', '36 cm'], explanation: 'Tel al drie sye bymekaar: 9 + 12 + 15 = 36 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn vierkant met sye van 13 cm.', answer: '52 cm', checkMode: 'auto', correctAnswer: '52cm', correctAnswers: ['52cm', '52', '52 cm'], explanation: 'Omtrek = 13 + 13 + 13 + 13 = 52 cm.' },
        { difficulty: 'Hard', question: 'ʼn Reghoek het ʼn omtrek van 40 cm. Die lengte is 12 cm. Vind die breedte.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 40 = 2 × (12 + breedte). Deel deur 2: 20 = 12 + breedte. Breedte = 20 − 12 = 8 cm.' },
        { difficulty: 'Easy', question: 'Vind die omtrek van ʼn reghoek met lengte 30 cm en breedte 20 cm.', answer: '100 cm', checkMode: 'auto', correctAnswer: '100cm', correctAnswers: ['100cm', '100', '100 cm'], explanation: 'Omtrek = 30 + 20 + 30 + 20 = 100 cm.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant het ʼn omtrek van 48 cm. Vind die lengte van elke sy.', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12', '12 cm'], explanation: 'ʼn Vierkant het 4 gelyke sye, dus deel die omtrek deur 4: 48 ÷ 4 = 12 cm.' },
        { difficulty: 'Hard', question: 'ʼn Driehoek het ʼn omtrek van 22 cm. Twee van sy sye is 8 cm en 6 cm. Vind die lengte van die derde sy.', answer: '8 cm', checkMode: 'auto', correctAnswer: '8cm', correctAnswers: ['8cm', '8', '8 cm'], explanation: 'Derde sy = omtrek − (som van bekende sye) = 22 − (8 + 6) = 22 − 14 = 8 cm.' },
        { difficulty: 'Hard', question: 'ʼn Reghoek het ʼn omtrek van 54 cm. Die breedte is 9 cm. Vind die lengte.', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18', '18 cm'], explanation: 'Omtrek = 2 × (lengte + breedte), dus 54 = 2 × (lengte + 9). Deel deur 2: 27 = lengte + 9. Lengte = 27 − 9 = 18 cm.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige agthoek het 8 gelyke sye van 5 cm elk. Vind die omtrek.', answer: '40 cm', checkMode: 'auto', correctAnswer: '40cm', correctAnswers: ['40cm', '40', '40 cm'], explanation: 'ʼn Reëlmatige agthoek het 8 gelyke sye. Omtrek = 5 × 8 = 40 cm.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het die vind van die omtrek van veelhoeke bemeester.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige gemiste vrae deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die voorbeelde oor die optel van sylengtes weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — FONDAMENTELE OPPERVLAKTE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Fondamentele Oppervlakte',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 6 vierkante lank en 4 vierkante breed. Vind die oppervlakte.', answer: '24 vierkante eenhede', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24vierkantelenhede', '24 vierkante eenhede', '24cm²', '24cm2', '24 cm²', '24 cm2'], explanation: 'Tel of vermenigvuldig: 6 × 4 = 24 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 8 vierkante lank en 5 vierkante breed. Vind die oppervlakte.', answer: '40 vierkante eenhede', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40vierkantelenhede', '40 vierkante eenhede', '40cm²', '40cm2', '40 cm²', '40 cm2'], explanation: 'Tel of vermenigvuldig: 8 × 5 = 40 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Vierkant op ʼn rooster het 7 vierkante langs elke sy. Vind die oppervlakte.', answer: '49 vierkante eenhede', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49', '49vierkantelenhede', '49 vierkante eenhede', '49cm²', '49cm2', '49 cm²', '49 cm2'], explanation: 'Tel of vermenigvuldig: 7 × 7 = 49 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 10 vol vierkante en 6 half vierkante. Vind die totale oppervlakte.', answer: '13 vierkante eenhede', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', '13vierkantelenhede', '13 vierkante eenhede'], explanation: '6 half vierkante = 3 vol vierkante. Totaal = 10 + 3 = 13 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 9 vierkante lank en 3 vierkante breed. Vind die oppervlakte.', answer: '27 vierkante eenhede', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27vierkantelenhede', '27 vierkante eenhede', '27cm²', '27cm2', '27 cm²', '27 cm2'], explanation: 'Tel of vermenigvuldig: 9 × 3 = 27 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Vierkant op ʼn rooster het 6 vierkante langs elke sy. Vind die oppervlakte.', answer: '36 vierkante eenhede', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36vierkantelenhede', '36 vierkante eenhede', '36cm²', '36cm2', '36 cm²', '36 cm2'], explanation: 'Tel of vermenigvuldig: 6 × 6 = 36 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 15 vol vierkante en 8 half vierkante. Vind die totale oppervlakte.', answer: '19 vierkante eenhede', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19vierkantelenhede', '19 vierkante eenhede'], explanation: '8 half vierkante = 4 vol vierkante. Totaal = 15 + 4 = 19 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 12 vierkante lank en 4 vierkante breed. Vind die oppervlakte.', answer: '48 vierkante eenhede', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48vierkantelenhede', '48 vierkante eenhede', '48cm²', '48cm2', '48 cm²', '48 cm2'], explanation: 'Tel of vermenigvuldig: 12 × 4 = 48 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Vierkant op ʼn rooster het 8 vierkante langs elke sy. Vind die oppervlakte.', answer: '64 vierkante eenhede', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64vierkantelenhede', '64 vierkante eenhede', '64cm²', '64cm2', '64 cm²', '64 cm2'], explanation: 'Tel of vermenigvuldig: 8 × 8 = 64 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 10 vierkante lank en 6 vierkante breed. Vind die oppervlakte.', answer: '60 vierkante eenhede', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60vierkantelenhede', '60 vierkante eenhede', '60cm²', '60cm2', '60 cm²', '60 cm2'], explanation: 'Tel of vermenigvuldig: 10 × 6 = 60 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 20 vol vierkante en 10 half vierkante. Vind die totale oppervlakte.', answer: '25 vierkante eenhede', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25vierkantelenhede', '25 vierkante eenhede'], explanation: '10 half vierkante = 5 vol vierkante. Totaal = 20 + 5 = 25 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 11 vierkante lank en 5 vierkante breed. Vind die oppervlakte.', answer: '55 vierkante eenhede', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55vierkantelenhede', '55 vierkante eenhede', '55cm²', '55cm2', '55 cm²', '55 cm2'], explanation: 'Tel of vermenigvuldig: 11 × 5 = 55 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Vierkant op ʼn rooster het 9 vierkante langs elke sy. Vind die oppervlakte.', answer: '81 vierkante eenhede', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '81vierkantelenhede', '81 vierkante eenhede', '81cm²', '81cm2', '81 cm²', '81 cm2'], explanation: 'Tel of vermenigvuldig: 9 × 9 = 81 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 18 vol vierkante en 4 half vierkante. Vind die totale oppervlakte.', answer: '20 vierkante eenhede', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20vierkantelenhede', '20 vierkante eenhede'], explanation: '4 half vierkante = 2 vol vierkante. Totaal = 18 + 2 = 20 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 7 vierkante lank en 6 vierkante breed. Vind die oppervlakte.', answer: '42 vierkante eenhede', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42vierkantelenhede', '42 vierkante eenhede', '42cm²', '42cm2', '42 cm²', '42 cm2'], explanation: 'Tel of vermenigvuldig: 7 × 6 = 42 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Vierkant op ʼn rooster het 10 vierkante langs elke sy. Vind die oppervlakte.', answer: '100 vierkante eenhede', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100vierkantelenhede', '100 vierkante eenhede', '100cm²', '100cm2', '100 cm²', '100 cm2'], explanation: 'Tel of vermenigvuldig: 10 × 10 = 100 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 13 vierkante lank en 2 vierkante breed. Vind die oppervlakte.', answer: '26 vierkante eenhede', checkMode: 'auto', correctAnswer: '26', correctAnswers: ['26', '26vierkantelenhede', '26 vierkante eenhede', '26cm²', '26cm2', '26 cm²', '26 cm2'], explanation: 'Tel of vermenigvuldig: 13 × 2 = 26 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 22 vol vierkante en 12 half vierkante. Vind die totale oppervlakte.', answer: '28 vierkante eenhede', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28vierkantelenhede', '28 vierkante eenhede'], explanation: '12 half vierkante = 6 vol vierkante. Totaal = 22 + 6 = 28 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 4 vierkante lank en 4 vierkante breed. Vind die oppervlakte.', answer: '16 vierkante eenhede', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16vierkantelenhede', '16 vierkante eenhede', '16cm²', '16cm2', '16 cm²', '16 cm2'], explanation: 'Tel of vermenigvuldig: 4 × 4 = 16 vierkante eenhede.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 14 vierkante lank en 3 vierkante breed. Vind die oppervlakte.', answer: '42 vierkante eenhede', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42vierkantelenhede', '42 vierkante eenhede', '42cm²', '42cm2', '42 cm²', '42 cm2'], explanation: 'Tel of vermenigvuldig: 14 × 3 = 42 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 30 vol vierkante en 14 half vierkante. Vind die totale oppervlakte.', answer: '37 vierkante eenhede', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37vierkantelenhede', '37 vierkante eenhede'], explanation: '14 half vierkante = 7 vol vierkante. Totaal = 30 + 7 = 37 vierkante eenhede.' },
        { difficulty: 'Hard', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 36 vierkante eenhede. Dit is 9 vierkante lank. Hoeveel vierkante breed is dit?', answer: '4 vierkante', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4vierkante', '4 vierkante'], explanation: 'Breedte = oppervlakte ÷ lengte = 36 ÷ 9 = 4 vierkante.' },
        { difficulty: 'Hard', question: 'ʼn Reghoek op ʼn rooster het ʼn oppervlakte van 48 vierkante eenhede. Dit is 6 vierkante breed. Hoeveel vierkante lank is dit?', answer: '8 vierkante', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8vierkante', '8 vierkante'], explanation: 'Lengte = oppervlakte ÷ breedte = 48 ÷ 6 = 8 vierkante.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek op ʼn rooster is 15 vierkante lank en 5 vierkante breed. Vind die oppervlakte.', answer: '75 vierkante eenhede', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75vierkantelenhede', '75 vierkante eenhede', '75cm²', '75cm2', '75 cm²', '75 cm2'], explanation: 'Tel of vermenigvuldig: 15 × 5 = 75 vierkante eenhede.' },
        { difficulty: 'Medium', question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 40 vol vierkante en 20 half vierkante. Vind die totale oppervlakte.', answer: '50 vierkante eenhede', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50vierkantelenhede', '50 vierkante eenhede'], explanation: '20 half vierkante = 10 vol vierkante. Totaal = 40 + 10 = 50 vierkante eenhede.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het die vind van oppervlakte deur vierkante eenhede te tel bemeester.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige gemiste vrae deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die voorbeelde oor die tel van vierkante weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — VERGELYKING VAN OMTREK/OPPERVLAKTE & WERKLIKE-LEWE PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Vergelyking en Woordprobleme',
      questions: [
        { difficulty: 'Medium', question: 'ʼn 5 × 2 reghoek en ʼn 4 × 3 reghoek — watter een het die groter oppervlakte?', answer: 'Die 4 × 3 reghoek. 5 × 2 = 10 cm² en 4 × 3 = 12 cm².', checkMode: 'auto', correctAnswer: '4x3', correctAnswers: ['4x3', '4 x 3 reghoek', 'die 4x3 reghoek', '4×3', 'die 4 x 3 reghoek'], explanation: 'Oppervlakte van 5 × 2 = 10 cm². Oppervlakte van 4 × 3 = 12 cm². Die 4 × 3 reghoek het die groter oppervlakte.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant met sye van 6 cm en ʼn reghoek 9 cm by 4 cm het albei dieselfde oppervlakte. Wat is daardie oppervlakte?', answer: '36 cm²', checkMode: 'auto', correctAnswer: '36cm²', correctAnswers: ['36cm²', '36cm2', '36', '36 cm²', '36 cm2'], explanation: 'Vierkant oppervlakte = 6 × 6 = 36 cm². Reghoek oppervlakte = 9 × 4 = 36 cm². Albei vorms het ʼn oppervlakte van 36 cm².' },
        { difficulty: 'Easy', question: 'ʼn Tuin is 10 m lank en 6 m breed. Hoeveel heining is nodig om die hele tuin te omhein?', answer: '32 m', checkMode: 'auto', correctAnswer: '32m', correctAnswers: ['32m', '32', '32 m'], explanation: 'Omtrek = 10 + 6 + 10 + 6 = 32 m heining.' },
        { difficulty: 'Easy', question: 'ʼn Klaskamervloer is 8 m lank en 5 m breed. Hoeveel vierkante meter teëls is nodig om die vloer te bedek?', answer: '40 m²', checkMode: 'auto', correctAnswer: '40m²', correctAnswers: ['40m²', '40m2', '40', '40 m²', '40 m2'], explanation: 'Oppervlakte = 8 × 5 = 40 m². Jy het 40 teëls nodig.' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige tuin het sye van 9 m. Heining kos R30 per meter. Wat is die totale koste om die tuin te omhein?', answer: 'R1 080', checkMode: 'auto', correctAnswer: 'R1080', correctAnswers: ['R1080', '1080', 'R1 080', 'r1080'], explanation: 'Omtrek = 9 × 4 = 36 m. Koste = 36 × R30 = R1 080.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige veld is 50 m lank en 30 m breed. Amahle stap twee keer rondom die buitekant van die veld. Hoe ver stap sy in totaal?', answer: '320 m', checkMode: 'auto', correctAnswer: '320m', correctAnswers: ['320m', '320', '320 m'], explanation: 'Omtrek = 50 + 30 + 50 + 30 = 160 m. Twee keer rondom = 160 × 2 = 320 m.' },
        { difficulty: 'Hard', question: 'ʼn Kamer is 7 m lank en 4 m breed. Mat kos R120 per vierkante meter. Wat is die totale koste om die kamer met mat te bedek?', answer: 'R3 360', checkMode: 'auto', correctAnswer: 'R3360', correctAnswers: ['R3360', '3360', 'R3 360', 'r3360'], explanation: 'Oppervlakte = 7 × 4 = 28 m². Koste = 28 × R120 = R3 360.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek is 3 cm by 8 cm en ʼn vierkant het sye van 5 cm. Watter vorm het die groter omtrek?', answer: 'Die reghoek. Sy omtrek is 22 cm en die vierkant se omtrek is 20 cm.', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'die reghoek'], explanation: 'Reghoek omtrek = 3 + 8 + 3 + 8 = 22 cm. Vierkant omtrek = 5 × 4 = 20 cm. Die reghoek het die groter omtrek.' },
        { difficulty: 'Easy', question: 'ʼn Muur is 6 m lank en 3 m hoog. Watter oppervlakte moet geverf word?', answer: '18 m²', checkMode: 'auto', correctAnswer: '18m²', correctAnswers: ['18m²', '18m2', '18', '18 m²', '18 m2'], explanation: 'Oppervlakte = 6 × 3 = 18 m².' },
        { difficulty: 'Easy', question: 'ʼn Vierkantige stuk grond het sye van 14 m. Hoeveel heining is nodig om dit te omhein?', answer: '56 m', checkMode: 'auto', correctAnswer: '56m', correctAnswers: ['56m', '56', '56 m'], explanation: 'Omtrek = 14 × 4 = 56 m.' },
        { difficulty: 'Medium', question: 'ʼn Prentraam-rand is ʼn reghoek 30 cm by 20 cm. Vind die lengte van die rand.', answer: '100 cm', checkMode: 'auto', correctAnswer: '100cm', correctAnswers: ['100cm', '100', '100 cm'], explanation: 'Omtrek = 30 + 20 + 30 + 20 = 100 cm.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin is 16 m lank en 9 m breed. Watter oppervlakte gras moet geplant word?', answer: '144 m²', checkMode: 'auto', correctAnswer: '144m²', correctAnswers: ['144m²', '144m2', '144', '144 m²', '144 m2'], explanation: 'Oppervlakte = 16 × 9 = 144 m².' },
        { difficulty: 'Hard', question: 'Vorm A is 8 cm by 3 cm en Vorm B is 6 cm by 4 cm. Albei het dieselfde oppervlakte. Watter vorm het die kleiner omtrek?', answer: 'Vorm B. Dit het ʼn omtrek van 20 cm vergeleke met Vorm A se 22 cm.', checkMode: 'auto', correctAnswer: 'vormb', correctAnswers: ['vormb', 'vorm b', 'b', 'vormB', 'Vorm B', 'VormB'], explanation: 'Oppervlakte van A = 8 × 3 = 24 cm². Oppervlakte van B = 6 × 4 = 24 cm² (dieselfde oppervlakte). Omtrek van A = 8+3+8+3 = 22 cm. Omtrek van B = 6+4+6+4 = 20 cm. Vorm B het die kleiner omtrek.' },
        { difficulty: 'Medium', question: 'ʼn Swembadvloer is 12 m lank en 7 m breed. Dit moet geteël word. Wat is die oppervlakte wat geteël moet word?', answer: '84 m²', checkMode: 'auto', correctAnswer: '84m²', correctAnswers: ['84m²', '84m2', '84', '84 m²', '84 m2'], explanation: 'Oppervlakte = 12 × 7 = 84 m².' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige werf is 22 m lank en 13 m breed. Hoeveel heining is nodig om die werf te omhein?', answer: '70 m', checkMode: 'auto', correctAnswer: '70m', correctAnswers: ['70m', '70', '70 m'], explanation: 'Omtrek = 22 + 13 + 22 + 13 = 70 m.' },
        { difficulty: 'Easy', question: 'ʼn Vierkantige land het sye van 18 m. Dit gaan met gewasse geplant word. Wat is die oppervlakte van die land?', answer: '324 m²', checkMode: 'auto', correctAnswer: '324m²', correctAnswers: ['324m²', '324m2', '324', '324 m²', '324 m2'], explanation: 'Oppervlakte = 18 × 18 = 324 m².' },
        { difficulty: 'Easy', question: 'ʼn Klaskamer is 9 m lank en 6 m breed. Randband word heeltemal rondom die rand van die kamer geplaas. Hoeveel band is nodig?', answer: '30 m', checkMode: 'auto', correctAnswer: '30m', correctAnswers: ['30m', '30', '30 m'], explanation: 'Omtrek = 9 + 6 + 9 + 6 = 30 m.' },
        { difficulty: 'Hard', question: 'ʼn Reghoek is 15 cm by 4 cm en ʼn ander reghoek is 12 cm by 5 cm. Albei het dieselfde oppervlakte. Watter een het die groter omtrek?', answer: 'Die 15 cm by 4 cm reghoek. Sy omtrek is 38 cm vergeleke met 34 cm vir die ander reghoek.', checkMode: 'auto', correctAnswer: '15cmby4cm', correctAnswers: ['15cmby4cm', '15 by 4', '15x4', '15 cm by 4 cm', 'die 15 by 4 reghoek'], explanation: 'Albei het oppervlakte 60 cm² (15×4 = 60 en 12×5 = 60). Omtrek van 15×4 = 15+4+15+4 = 38 cm. Omtrek van 12×5 = 12+5+12+5 = 34 cm. Die 15 by 4 reghoek het die groter omtrek.' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 16 m by 10 m. Heining kos R25 per meter. Wat is die totale koste om die tuin te omhein?', answer: 'R1 300', checkMode: 'auto', correctAnswer: 'R1300', correctAnswers: ['R1300', '1300', 'R1 300', 'r1300'], explanation: 'Omtrek = 16 + 10 + 16 + 10 = 52 m. Koste = 52 × R25 = R1 300.' },
        { difficulty: 'Hard', question: 'ʼn Vloer is 11 m lank en 8 m breed. Teëls kos R50 per vierkante meter. Wat is die totale koste om die vloer te teël?', answer: 'R4 400', checkMode: 'auto', correctAnswer: 'R4400', correctAnswers: ['R4400', '4400', 'R4 400', 'r4400'], explanation: 'Oppervlakte = 11 × 8 = 88 m². Koste = 88 × R50 = R4 400.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige blombedding is 7 m lank en 5 m breed. Vind beide die omtrek en die oppervlakte van die blombedding.', answer: 'Omtrek = 24 m; Oppervlakte = 35 m²', checkMode: 'auto', correctAnswer: '24m;35m²', correctAnswers: ['24m;35m²', '24 m; 35 m²', 'omtrek=24, oppervlakte=35', '24;35', '24 m en 35 m²'], explanation: 'Omtrek = 7 + 5 + 7 + 5 = 24 m. Oppervlakte = 7 × 5 = 35 m².' },
        { difficulty: 'Medium', question: 'ʼn Foto-raam-rand is ʼn reghoek 40 cm by 25 cm. Vind die lengte van die rand.', answer: '130 cm', checkMode: 'auto', correctAnswer: '130cm', correctAnswers: ['130cm', '130', '130 cm'], explanation: 'Omtrek = 40 + 25 + 40 + 25 = 130 cm.' },
        { difficulty: 'Hard', question: 'ʼn Vierkant het sye van 6 cm en ʼn reghoek is 8 cm by 4 cm. Albei vorms het dieselfde omtrek. Verduidelik watter vorm die groter oppervlakte het, en wys jou werk.', answer: 'Die vierkant het die groter oppervlakte. Albei vorms het ʼn omtrek van 24 cm (vierkant: 6×4=24; reghoek: 8+4+8+4=24), maar die vierkant het ʼn oppervlakte van 36 cm² terwyl die reghoek slegs ʼn oppervlakte van 32 cm² het (8 × 4).', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige sportbaan is 45 m lank en 20 m breed. Hoeveel heining is nodig om die baan te omhein?', answer: '130 m', checkMode: 'auto', correctAnswer: '130m', correctAnswers: ['130m', '130', '130 m'], explanation: 'Omtrek = 45 + 20 + 45 + 20 = 130 m.' },
        { difficulty: 'Medium', question: 'ʼn Tuinpad is 6 m lank en 2 m breed. Dit gaan bedek word met vierkantige plaveiselblokke wat elk 1 m² is. Hoeveel plaveiselblokke is nodig?', answer: '12 plaveiselblokke', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12plaveiselblokke', '12 plaveiselblokke'], explanation: 'Oppervlakte = 6 × 2 = 12 m². Aangesien elke blok 1 m² bedek, is 12 plaveiselblokke nodig.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy kan met selfvertroue omtrek en oppervlakte vergelyk en werklike-lewe probleme oplos.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige gemiste vrae deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die voorbeelde oor die vergelyking van vorms en woordprobleme weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MEERSTAP/GEKOMBINEERDE PROBLEME & REDENASIE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Meerstap en Redenasie',
      questions: [
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 12 m lank en 7 m breed. Dit het ʼn hek van 2 m breed wat nie heining nodig het nie. Hoeveel heining is nodig?', answer: '36 m', checkMode: 'auto', correctAnswer: '36m', correctAnswers: ['36m', '36', '36 m'], explanation: 'Omtrek = 12 + 7 + 12 + 7 = 38 m. Trek die hek af: 38 − 2 = 36 m heining nodig.' },
        { difficulty: 'Hard', question: 'ʼn L-vormige tuin bestaan uit ʼn reghoek 8 m by 5 m en ʼn kleiner reghoek 4 m by 3 m. Vind die totale oppervlakte van die tuin.', answer: '52 m²', checkMode: 'auto', correctAnswer: '52m²', correctAnswers: ['52m²', '52m2', '52', '52 m²', '52 m2'], explanation: 'Oppervlakte van groot reghoek = 8 × 5 = 40 m². Oppervlakte van klein reghoek = 4 × 3 = 12 m². Totale oppervlakte = 40 + 12 = 52 m².' },
        { difficulty: 'Hard', question: 'ʼn Kamer is 9 m lank en 6 m breed. Teëls kos R80 per vierkante meter. Wat is die totale koste om die kamer te teël?', answer: 'R4 320', checkMode: 'auto', correctAnswer: 'R4320', correctAnswers: ['R4320', '4320', 'R4 320', 'r4320'], explanation: 'Oppervlakte = 9 × 6 = 54 m². Koste = 54 × R80 = R4 320.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige tuin is 10 m lank en 6 m breed. Een van die lang sye is teen ʼn muur en het nie heining nodig nie. Hoeveel heining is nodig vir die ander drie sye?', answer: '22 m', checkMode: 'auto', correctAnswer: '22m', correctAnswers: ['22m', '22', '22 m'], explanation: 'Die drie sye wat heining benodig is: een lengte (10 m) en twee breedtes (6 m elk). Heining = 10 + 6 + 6 = 22 m.' },
        { difficulty: 'Hard', question: 'ʼn Vierkantige binneplaas het sye van 8 m. Binne-in dit word ʼn kleiner vierkantige stuk met sye van 6 m anders geplavei. Wat is die oppervlakte van die buitenste rand (die deel wat nie deur die kleiner vierkant bedek word nie)?', answer: '28 m²', checkMode: 'auto', correctAnswer: '28m²', correctAnswers: ['28m²', '28m2', '28', '28 m²', '28 m2'], explanation: 'Buitenste oppervlakte = 8 × 8 = 64 m². Binneste oppervlakte = 6 × 6 = 36 m². Randoppervlakte = 64 − 36 = 28 m².' },
        { difficulty: 'Hard', question: 'Tuin A is 15 m by 5 m en Tuin B is 12 m by 8 m. Albei tuine het dieselfde omtrek. Watter tuin het die groter oppervlakte, en met hoeveel?', answer: 'Tuin B het die groter oppervlakte, met 21 m². Tuin A se oppervlakte is 75 m² en Tuin B se oppervlakte is 96 m².', checkMode: 'auto', correctAnswer: 'tuinb,21m²', correctAnswers: ['tuinb,21m²', 'tuin b met 21', 'b, 21', 'tuin b, 21 m²', 'tuinB21'], explanation: 'Albei het omtrek 40 m (15+5+15+5=40 en 12+8+12+8=40). Oppervlakte A = 15 × 5 = 75 m². Oppervlakte B = 12 × 8 = 96 m². Tuin B het die groter oppervlakte, met 96 − 75 = 21 m².' },
        { difficulty: 'Medium', question: 'ʼn Boer het twee identiese vierkantige kampe, elk met sye van 5 m, apart omhein. Vind die totale lengte heining wat vir albei kampe gebruik word.', answer: '40 m', checkMode: 'auto', correctAnswer: '40m', correctAnswers: ['40m', '40', '40 m'], explanation: 'Omtrek van een kamp = 5 × 4 = 20 m. Twee kampe = 20 × 2 = 40 m heining.' },
        { difficulty: 'Medium', question: 'ʼn Huis het twee kamers: een is 6 m by 4 m en die ander is 5 m by 3 m. Vind die totale vloeroppervlakte van albei kamers.', answer: '39 m²', checkMode: 'auto', correctAnswer: '39m²', correctAnswers: ['39m²', '39m2', '39', '39 m²', '39 m2'], explanation: 'Oppervlakte van kamer 1 = 6 × 4 = 24 m². Oppervlakte van kamer 2 = 5 × 3 = 15 m². Totaal = 24 + 15 = 39 m².' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige stuk grond is 20 m by 15 m. Dit word in twee gelyke reghoeke verdeel deur ʼn heining in die middel, parallel aan die 15 m sy, te bou. Vind die totale lengte heining wat nodig is, insluitend die verdelingsheining.', answer: '85 m', checkMode: 'auto', correctAnswer: '85m', correctAnswers: ['85m', '85', '85 m'], explanation: 'Omtrek van die hele grond = 20 + 15 + 20 + 15 = 70 m. Die verdelingsheining is parallel aan die 15 m sye, dus is dit 15 m lank. Totale heining = 70 + 15 = 85 m.' },
        { difficulty: 'Hard', question: 'Verduidelik, met behulp van ʼn voorbeeld met syfers, of twee reghoeke dieselfde oppervlakte maar verskillende omtrekke kan hê.', answer: 'Ja. Byvoorbeeld, ʼn reghoek wat 4 m by 9 m is, het ʼn oppervlakte van 36 m² (4 × 9 = 36) en ʼn omtrek van 26 m (4+9+4+9=26). ʼn Reghoek wat 6 m by 6 m is, het ook ʼn oppervlakte van 36 m² (6 × 6 = 36) maar ʼn omtrek van slegs 24 m (6+6+6+6=24). Albei reghoeke het dieselfde oppervlakte maar verskillende omtrekke.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 14 m lank en 9 m breed. Dit het een hek wat 3 m breed is en nie heining nodig het nie. Hoeveel heining is nodig?', answer: '43 m', checkMode: 'auto', correctAnswer: '43m', correctAnswers: ['43m', '43', '43 m'], explanation: 'Omtrek = 14 + 9 + 14 + 9 = 46 m. Trek die hek af: 46 − 3 = 43 m heining nodig.' },
        { difficulty: 'Hard', question: 'ʼn Kamer is 10 m lank en 7 m breed. Vierkante-meter teëls kos R65 elk. Wat is die totale koste om die kamer te teël?', answer: 'R4 550', checkMode: 'auto', correctAnswer: 'R4550', correctAnswers: ['R4550', '4550', 'R4 550', 'r4550'], explanation: 'Oppervlakte = 10 × 7 = 70 m². Koste = 70 × R65 = R4 550.' },
        { difficulty: 'Medium', question: 'Daar is twee vierkantige tuine: een het sye van 6 m en die ander het sye van 10 m. Vind die gekombineerde omtrek van albei tuine.', answer: '64 m', checkMode: 'auto', correctAnswer: '64m', correctAnswers: ['64m', '64', '64 m'], explanation: 'Omtrek van eerste tuin = 6 × 4 = 24 m. Omtrek van tweede tuin = 10 × 4 = 40 m. Gekombineerd = 24 + 40 = 64 m.' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige swembad is 8 m by 4 m. Dit word omring deur ʼn geplaveide pad van 1 m breed aan alle kante, wat die totale buitenste reghoek 10 m by 6 m maak. Vind die oppervlakte van slegs die pad.', answer: '28 m²', checkMode: 'auto', correctAnswer: '28m²', correctAnswers: ['28m²', '28m2', '28', '28 m²', '28 m2'], explanation: 'Buitenste oppervlakte = 10 × 6 = 60 m². Swembad oppervlakte = 8 × 4 = 32 m². Padoppervlakte = 60 − 32 = 28 m².' },
        { difficulty: 'Hard', question: 'ʼn Vierkant het ʼn oppervlakte van 36 cm² en ʼn reghoek wat 12 cm by 3 cm is, het ook ʼn oppervlakte van 36 cm². Verduidelik watter vorm die kleiner omtrek het, en waarom ʼn vierkant dikwels ʼn kleiner omtrek het as ander reghoeke met dieselfde oppervlakte.', answer: 'Die vierkant het die kleiner omtrek. Die vierkant (6 cm × 6 cm) het ʼn omtrek van 24 cm (6+6+6+6=24), terwyl die reghoek (12 cm × 3 cm) ʼn omtrek van 30 cm het (12+3+12+3=30). ʼn Vierkant het gewoonlik ʼn kleiner omtrek as ander reghoeke met dieselfde oppervlakte omdat sy sye so gelyk as moontlik is, sodat dit nie ekstra lengte nodig het om die vorm "uit te rek" nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige land is 25 m lank en 16 m breed. Dit word in twee gelyke afdelings verdeel deur ʼn heining parallel aan die 16 m sy. Vind die totale lengte heining wat nodig is, insluitend die verdelingsheining.', answer: '98 m', checkMode: 'auto', correctAnswer: '98m', correctAnswers: ['98m', '98', '98 m'], explanation: 'Omtrek van die hele land = 25 + 16 + 25 + 16 = 82 m. Die verdelingsheining is parallel aan die 16 m sye, dus is dit 16 m lank. Totale heining = 82 + 16 = 98 m.' },
        { difficulty: 'Medium', question: 'ʼn Reghoekige kamer is 16 m lank en 5 m breed. Een van die 16 m sye is teen ʼn muur en het nie heining nodig nie. Hoeveel heining is nodig vir die ander drie sye?', answer: '26 m', checkMode: 'auto', correctAnswer: '26m', correctAnswers: ['26m', '26', '26 m'], explanation: 'Die drie sye wat heining benodig is: een lengte (16 m) en twee breedtes (5 m elk). Heining = 16 + 5 + 5 = 26 m.' },
        { difficulty: 'Hard', question: 'Twee kamers moet geteël word teen R70 per vierkante meter: Kamer 1 is 6 m by 5 m en Kamer 2 is 4 m by 4 m. Vind die totale koste om albei kamers te teël.', answer: 'R3 220', checkMode: 'auto', correctAnswer: 'R3220', correctAnswers: ['R3220', '3220', 'R3 220', 'r3220'], explanation: 'Oppervlakte van Kamer 1 = 6 × 5 = 30 m². Oppervlakte van Kamer 2 = 4 × 4 = 16 m². Totale oppervlakte = 30 + 16 = 46 m². Totale koste = 46 × R70 = R3 220.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die omtrek van ʼn vorm kan verander selfs al bly die oppervlakte presies dieselfde.', answer: 'Die omtrek hang af van die vorm se buitelyn (hoe die sye gerangskik is), terwyl die oppervlakte slegs afhang van hoeveel ruimte ingesluit word. Om dieselfde hoeveelheid ruimte in ʼn langer, dunner vorm te herrangskik, vergroot die omtrek sonder om die oppervlakte te verander, omdat meer buitenste rand nodig is om dieselfde ruimte in te sluit wanneer dit uitgerek word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn L-vormige kamer het sye wat 10 m, 4 m, 6 m, 3 m, 4 m en 7 m meet rondom die buitekant. Vind die omtrek van die kamer.', answer: '34 m', checkMode: 'auto', correctAnswer: '34m', correctAnswers: ['34m', '34', '34 m'], explanation: 'Tel al ses sye bymekaar: 10 + 4 + 6 + 3 + 4 + 7 = 34 m.' },
        { difficulty: 'Hard', question: 'ʼn Boer omhein drie afsonderlike vierkantige stukke, elk met sye van 7 m. Vind die totale lengte heining wat vir al drie stukke nodig is.', answer: '84 m', checkMode: 'auto', correctAnswer: '84m', correctAnswers: ['84m', '84', '84 m'], explanation: 'Omtrek van een stuk = 7 × 4 = 28 m. Drie stukke = 28 × 3 = 84 m heining.' },
        { difficulty: 'Hard', question: 'ʼn Saal is 24 m lank en 15 m breed. Om die vloer te verf kos R45 per vierkante meter. Wat is die totale koste om die vloer te verf?', answer: 'R16 200', checkMode: 'auto', correctAnswer: 'R16200', correctAnswers: ['R16200', '16200', 'R16 200', 'r16200'], explanation: 'Oppervlakte = 24 × 15 = 360 m². Koste = 360 × R45 = R16 200.' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin is 18 m by 12 m. Dit word aan alle kante omring deur ʼn pad van 2 m breed, wat die totale buitenste reghoek 22 m by 16 m maak. Vind die oppervlakte van slegs die pad.', answer: '136 m²', checkMode: 'auto', correctAnswer: '136m²', correctAnswers: ['136m²', '136m2', '136', '136 m²', '136 m2'], explanation: 'Buitenste oppervlakte = 22 × 16 = 352 m². Tuin oppervlakte = 18 × 12 = 216 m². Padoppervlakte = 352 − 216 = 136 m².' },
        { difficulty: 'Hard', question: 'Verduidelik waarom die sny van ʼn vorm in stukke en die herrangskikking daarvan nie die totale oppervlakte verander nie, maar wel die totale omtrek kan verander.', answer: 'Die totale oppervlakte bly dieselfde omdat oppervlakte die hoeveelheid oppervlak wat bedek word meet, en die sny van ʼn vorm in stukke verwyder of voeg geen oppervlak by nie — al die oorspronklike stukke is steeds daar, net anders gerangskik. Die omtrek kan verander omdat nuwe gesnyde rande deel van die buitenste grens word wanneer die stukke geskei of herrangskik word, en afhangende van hoe die stukke geplaas word, kan die totale buitenste rand langer of korter as die oorspronklike vorm se omtrek word.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoek is 4 m by 3 m. As beide die lengte en breedte verdubbel word, vind die nuwe omtrek en die nuwe oppervlakte, en vergelyk dit met die oorspronklike.', answer: 'Nuwe omtrek = 28 m (verdubbel vanaf 14 m). Nuwe oppervlakte = 48 m² (vervierdubbel vanaf 12 m²).', checkMode: 'auto', correctAnswer: '28m;48m²', correctAnswers: ['28m;48m²', '28 m; 48 m²', 'omtrek=28, oppervlakte=48', '28;48', '28 m en 48 m²'], explanation: 'Oorspronklike omtrek = 4+3+4+3 = 14 m. Oorspronklike oppervlakte = 4 × 3 = 12 m². Verdubbelde reghoek = 8 m by 6 m. Nuwe omtrek = 8+6+8+6 = 28 m (presies dubbel). Nuwe oppervlakte = 8 × 6 = 48 m² (vier keer so groot, aangesien beide dimensies verdubbel is).' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het meerstap omtrek- en oppervlakteprobleme bemeester.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan enige gemiste vrae deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die meerstap voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
