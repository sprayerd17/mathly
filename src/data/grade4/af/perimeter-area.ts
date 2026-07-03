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
      videoPlaceholder:
        'Kort video wat wys hoe om te identifiseer of ʼn woordprobleem omtrek of oppervlakte vereis en dit stap vir stap op te los',
    },
  ],
  topicPractice: [

    // ── AFDELING 1 — Wat is Omtrek ─────────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Vind die omtrek van ʼn reghoek met lengte 6 cm en breedte 4 cm.',
      checkMode: 'auto',
      answer: '20 cm',
      correctAnswer: '20cm',
      correctAnswers: ['20cm', '20', '20 cm'],
      explanation: 'ʼn Reghoek het 2 lengtes en 2 breedtes. Omtrek = 6 + 4 + 6 + 4 = 20 cm.',
    },

    {
      difficulty: 'Medium',
      question: 'Vind die omtrek van elke vorm.',
      checkMode: 'auto',
      answer: 'a) 28 cm   b) 19 cm   c) 30 cm',
      parts: [
        {
          label: 'a) ʼn Vierkant met sye van 7 cm',
          correctAnswer: '28cm',
          correctAnswers: ['28cm', '28', '28 cm'],
          explanation: 'ʼn Vierkant het 4 gelyke sye. Omtrek = 7 + 7 + 7 + 7 = 28 cm.',
        },
        {
          label: 'b) ʼn Driehoek met sye 5 cm, 8 cm en 6 cm',
          correctAnswer: '19cm',
          correctAnswers: ['19cm', '19', '19 cm'],
          explanation: 'Tel al drie sye bymekaar: 5 + 8 + 6 = 19 cm.',
        },
        {
          label: 'c) ʼn Reghoek met lengte 12 cm en breedte 3 cm',
          correctAnswer: '30cm',
          correctAnswers: ['30cm', '30', '30 cm'],
          explanation: 'Omtrek = 12 + 3 + 12 + 3 = 30 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Reghoekige tuin het ʼn omtrek van 36 m. Die lengte is 11 m.',
      checkMode: 'auto',
      answer: 'a) 7 m   b) R1 620',
      parts: [
        {
          label: 'a) Wat is die breedte van die tuin?',
          correctAnswer: '7m',
          correctAnswers: ['7m', '7', '7 m'],
          explanation: 'Omtrek = 2 × (lengte + breedte). Dus 36 = 2 × (11 + breedte). Deel beide kante deur 2: 18 = 11 + breedte. Breedte = 18 − 11 = 7 m.',
        },
        {
          label: 'b) Heining kos R45 per meter. Hoeveel kos dit om die hele tuin te omhein?',
          correctAnswer: 'R1620',
          correctAnswers: ['R1620', '1620', 'R1 620', 'r1620'],
          explanation: 'Koste = omtrek × prys per meter = 36 × R45 = R1 620.',
        },
      ],
    },

    // ── AFDELING 2 — Wat is Oppervlakte ────────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'ʼn Reghoek op ʼn rooster is 5 vierkante lank en 3 vierkante breed. Wat is sy oppervlakte?',
      checkMode: 'auto',
      answer: '15 vierkante eenhede',
      correctAnswer: '15',
      correctAnswers: ['15', '15vierkantelenhede', '15 vierkante eenhede', '15cm²', '15cm2', '15 cm²', '15 cm2'],
      explanation: 'Tel of vermenigvuldig: 5 × 3 = 15. Die oppervlakte is 15 vierkante eenhede.',
    },

    {
      difficulty: 'Medium',
      question: 'Bereken die oppervlakte van elke vorm.',
      checkMode: 'auto',
      answer: 'a) 32 cm²   b) 36 cm²   c) 45 cm²',
      parts: [
        {
          label: 'a) ʼn Reghoek 8 cm lank en 4 cm breed',
          correctAnswer: '32cm²',
          correctAnswers: ['32cm²', '32cm2', '32', '32 cm²', '32 cm2'],
          explanation: 'Oppervlakte = lengte × breedte = 8 × 4 = 32 cm².',
        },
        {
          label: 'b) ʼn Vierkant met sye van 6 cm',
          correctAnswer: '36cm²',
          correctAnswers: ['36cm²', '36cm2', '36', '36 cm²', '36 cm2'],
          explanation: 'Oppervlakte = sy × sy = 6 × 6 = 36 cm².',
        },
        {
          label: 'c) ʼn Reghoek 9 cm lank en 5 cm breed',
          correctAnswer: '45cm²',
          correctAnswers: ['45cm²', '45cm2', '45', '45 cm²', '45 cm2'],
          explanation: 'Oppervlakte = lengte × breedte = 9 × 5 = 45 cm².',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Onreëlmatige vorm op ʼn rooster bedek 14 vol vierkante en 6 half vierkante.',
      checkMode: 'auto',
      answer: 'a) 3 vierkante eenhede   b) 17 vierkante eenhede   c) 17 m²',
      parts: [
        {
          label: 'a) Hoeveel vol vierkante eenhede is die 6 half vierkante gelyk aan?',
          correctAnswer: '3',
          correctAnswers: ['3', '3vierkantelenhede', '3 vierkante eenhede'],
          explanation: '6 half vierkante ÷ 2 = 3 vol vierkante eenhede.',
        },
        {
          label: 'b) Wat is die totale oppervlakte van die vorm?',
          correctAnswer: '17',
          correctAnswers: ['17', '17vierkantelenhede', '17 vierkante eenhede'],
          explanation: 'Tel die vol vierkante en die omgeskakelde helftes bymekaar: 14 + 3 = 17 vierkante eenhede.',
        },
        {
          label: 'c) Elke vierkant verteenwoordig 1 m². Wat is die oppervlakte in vierkante meter?',
          correctAnswer: '17m²',
          correctAnswers: ['17m²', '17m2', '17', '17 m²', '17 m2'],
          explanation: 'Elke vierkante eenheid is gelyk aan 1 m², dus 17 vierkante eenhede = 17 m².',
        },
      ],
    },

    // ── AFDELING 3 — Vergelyking van Omtrek en Oppervlakte ────────────────────

    {
      difficulty: 'Easy',
      question: 'ʼn 3 × 4 reghoek en ʼn 2 × 5 reghoek — watter een het die groter oppervlakte?',
      checkMode: 'self',
      answer: 'Die 3 × 4 reghoek het die groter oppervlakte. 3 × 4 = 12 cm² en 2 × 5 = 10 cm².',
    },

    {
      difficulty: 'Medium',
      question: 'Vergelyk ʼn 5 × 3 reghoek en ʼn 4 × 4 vierkant.',
      checkMode: 'auto',
      answer: 'a) 16 cm   b) 16 cm   c) 15 cm²   d) 16 cm²',
      parts: [
        {
          label: 'a) Wat is die omtrek van die reghoek?',
          correctAnswer: '16cm',
          correctAnswers: ['16cm', '16', '16 cm'],
          explanation: 'Omtrek van reghoek = 5 + 3 + 5 + 3 = 16 cm.',
        },
        {
          label: 'b) Wat is die omtrek van die vierkant?',
          correctAnswer: '16cm',
          correctAnswers: ['16cm', '16', '16 cm'],
          explanation: 'Omtrek van vierkant = 4 + 4 + 4 + 4 = 16 cm.',
        },
        {
          label: 'c) Wat is die oppervlakte van die reghoek?',
          correctAnswer: '15cm²',
          correctAnswers: ['15cm²', '15cm2', '15', '15 cm²', '15 cm2'],
          explanation: 'Oppervlakte = 5 × 3 = 15 cm².',
        },
        {
          label: 'd) Wat is die oppervlakte van die vierkant?',
          correctAnswer: '16cm²',
          correctAnswers: ['16cm²', '16cm2', '16', '16 cm²', '16 cm2'],
          explanation: 'Oppervlakte = 4 × 4 = 16 cm².',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question: 'Vergelyk ʼn 5 × 3 reghoek en ʼn 4 × 4 vierkant.',
      checkMode: 'self',
      answer: 'Die vierkant het die groter oppervlakte. Albei vorms het dieselfde omtrek (16 cm), maar die vierkant het ʼn oppervlakte van 16 cm² vergeleke met 15 cm² vir die reghoek.',
      parts: [
        {
          label: 'e) Watter vorm het ʼn groter oppervlakte? Verduidelik.',
          correctAnswer: '',
          explanation: 'Die vierkant het die groter oppervlakte (16 cm²) vergeleke met die reghoek (15 cm²). Albei het dieselfde omtrek van 16 cm.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'Twee vorms het albei ʼn oppervlakte van 24 cm². Vorm A is 8 cm lank en 3 cm breed. Vorm B is 6 cm lank en 4 cm breed.',
      checkMode: 'auto',
      answer: 'a) 22 cm   b) 20 cm   c) Vorm B',
      parts: [
        {
          label: 'a) Wat is die omtrek van Vorm A?',
          correctAnswer: '22cm',
          correctAnswers: ['22cm', '22', '22 cm'],
          explanation: 'Omtrek van Vorm A = 8 + 3 + 8 + 3 = 22 cm.',
        },
        {
          label: 'b) Wat is die omtrek van Vorm B?',
          correctAnswer: '20cm',
          correctAnswers: ['20cm', '20', '20 cm'],
          explanation: 'Omtrek van Vorm B = 6 + 4 + 6 + 4 = 20 cm.',
        },
        {
          label: 'c) Watter vorm het die kleiner omtrek?',
          correctAnswer: 'vormb',
          correctAnswers: ['vormb', 'vorm b', 'b', 'vormB', 'Vorm B', 'VormB'],
          explanation: 'Vorm B het die kleiner omtrek: 20 cm vergeleke met Vorm A se 22 cm.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Twee vorms het albei ʼn oppervlakte van 24 cm². Vorm A is 8 cm lank en 3 cm breed. Vorm B is 6 cm lank en 4 cm breed.',
      checkMode: 'self',
      answer: 'Vorms met dieselfde oppervlakte kan verskillende omtrekke hê. Hoe nader die vorm aan ʼn vierkant is, hoe kleiner is sy omtrek.',
      parts: [
        {
          label: 'd) Wat merk jy op oor vorms met dieselfde oppervlakte maar verskillende dimensies?',
          correctAnswer: '',
          explanation: 'Vorms met dieselfde oppervlakte kan verskillende omtrekke hê. Hoe nader ʼn vorm aan ʼn vierkant is, hoe kleiner is sy omtrek.',
        },
      ],
    },

    // ── AFDELING 4 — Omtrek- en Oppervlakte-woordprobleme ─────────────────────

    {
      difficulty: 'Easy',
      question: 'ʼn Vierkantige kamer het sye van 5 m. Hoeveel vierkante meter teëls is nodig om die vloer te bedek?',
      checkMode: 'auto',
      answer: '25 m²',
      correctAnswer: '25m²',
      correctAnswers: ['25m²', '25m2', '25', '25 m²', '25 m2'],
      explanation: 'Oppervlakte = sy × sy = 5 × 5 = 25 m². Jy het 25 teëls nodig.',
    },

    {
      difficulty: 'Medium',
      question: 'ʼn Reghoekige sportveld is 40 m lank en 25 m breed.',
      checkMode: 'auto',
      answer: 'a) 130 m   b) 1 000 m²   c) 1 000 pakkies',
      parts: [
        {
          label: 'a) Wat is die omtrek van die veld?',
          correctAnswer: '130m',
          correctAnswers: ['130m', '130', '130 m'],
          explanation: 'Omtrek = 40 + 25 + 40 + 25 = 130 m.',
        },
        {
          label: 'b) Wat is die oppervlakte van die veld?',
          correctAnswer: '1000m²',
          correctAnswers: ['1000m²', '1000m2', '1000', '1000 m²', '1000 m2', '1 000m²', '1 000 m²'],
          explanation: 'Oppervlakte = 40 × 25 = 1 000 m².',
        },
        {
          label: 'c) Grassaad bedek 1 m² per pakkie. Hoeveel pakkies is nodig?',
          correctAnswer: '1000',
          correctAnswers: ['1000', '1000pakkies', '1 000', '1000 pakkies', '1 000 pakkies'],
          explanation: 'Een pakkie bedek 1 m², dus benodig jy 1 000 pakkies vir 1 000 m².',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question: 'ʼn Boer wil ʼn reghoekige land omhein en dit met gewasse plant. Die land is 15 m lank en 9 m breed.',
      checkMode: 'auto',
      answer: 'a) 48 m   b) 135 m²   c) R2 880   d) 45 gewasse',
      parts: [
        {
          label: 'a) Hoeveel heining is nodig?',
          correctAnswer: '48m',
          correctAnswers: ['48m', '48', '48 m'],
          explanation: 'Omtrek = 15 + 9 + 15 + 9 = 48 m.',
        },
        {
          label: 'b) Wat is die oppervlakte van die land?',
          correctAnswer: '135m²',
          correctAnswers: ['135m²', '135m2', '135', '135 m²', '135 m2'],
          explanation: 'Oppervlakte = 15 × 9 = 135 m².',
        },
        {
          label: 'c) Heining kos R60 per meter. Wat is die totale koste van die heining?',
          correctAnswer: 'R2880',
          correctAnswers: ['R2880', '2880', 'R2 880', 'r2880'],
          explanation: 'Koste = 48 m × R60 = R2 880.',
        },
        {
          label: 'd) Elke gewas benodig 3 m² ruimte. Hoeveel gewasse kan geplant word?',
          correctAnswer: '45',
          correctAnswers: ['45', '45gewasse', '45 gewasse'],
          explanation: 'Gewasse = oppervlakte ÷ ruimte per gewas = 135 ÷ 3 = 45 gewasse.',
        },
      ],
    },

  ],
  scoreMessages: [
    { minScore: 31, message: 'Volpunte! Jy het Omtrek en Oppervlakte bemeester.' },
    { minScore: 24, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
    { minScore: 16, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
