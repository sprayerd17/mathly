import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Deling',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS DELING?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-division',
      title: 'Wat is Deling?',
      icon: '➗',
      explanation: `<p style="margin-bottom:18px;">Deling beteken <strong>om ʼn getal in gelyke groepe te verdeel</strong>. Wanneer jy iets regverdig deel sodat elke groep of persoon dieselfde hoeveelheid kry, is jy besig om te deel. Dit is die teenoorgestelde van vermenigvuldiging.</p>

<p style="margin-bottom:12px;font-weight:600;">Drie alledaagse voorbeelde:</p>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <strong>24 lekkers</strong> gelyk gedeel tussen <strong>6 vriende</strong> — hoeveel kry elke vriend? <span style="color:#16a34a;font-weight:700;">24 ÷ 6 = 4</span> lekkers elk.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <strong>30 leerders</strong> in <strong>5 gelyke spanne</strong> geplaas — hoeveel leerders per span? <span style="color:#16a34a;font-weight:700;">30 ÷ 5 = 6</span> leerders per span.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <strong>18 beskuitjies</strong> verpak in sakkies van <strong>3</strong> — hoeveel sakkies word benodig? <span style="color:#16a34a;font-weight:700;">18 ÷ 3 = 6</span> sakkies.
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Sleutelwoorde om te ken:</p>

<div style="display:flex;flex-direction:column;gap:9px;margin-bottom:22px;">
  <div><strong>Deel / Gelyk verdeel</strong> — om ʼn getal in gelyke groepe te verdeel.</div>
  <div><strong>Groep</strong> — een van die gelyke dele waarin jy verdeel.</div>
  <div><strong style="color:#dc2626;">Deeltal</strong> — die getal wat jy deel. Dit is die groot getal aan die begin. In <span style="color:#dc2626;font-weight:700;">24</span> ÷ 6, is die <span style="color:#dc2626;font-weight:700;">deeltal</span> <span style="color:#dc2626;font-weight:700;">24</span>.</div>
  <div><strong style="color:#1e40af;">Deler</strong> — die getal waarmee jy deel. In 24 ÷ <span style="color:#1e40af;font-weight:700;">6</span>, is die <span style="color:#1e40af;font-weight:700;">deler</span> <span style="color:#1e40af;font-weight:700;">6</span>.</div>
  <div><strong style="color:#16a34a;">Kwosiënt</strong> — die antwoord wat jy kry nadat jy gedeel het. In 24 ÷ 6 = <span style="color:#16a34a;font-weight:700;">4</span>, is die <span style="color:#16a34a;font-weight:700;">kwosiënt</span> <span style="color:#16a34a;font-weight:700;">4</span>.</div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Twee maniere om oor deling te dink:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:10px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Gelyke Deling</div>
    <div style="margin-bottom:6px;"><span style="color:#dc2626;font-weight:700;">12</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;">3</span></div>
    <div style="font-size:14px;color:#374151;">Deel <span style="color:#dc2626;font-weight:600;">12</span> in <span style="color:#1e40af;font-weight:600;">4</span> gelyke groepe. Hoeveel is in elke groep? → <span style="color:#16a34a;font-weight:700;">3</span> in elke groep.</div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Groepering</div>
    <div style="margin-bottom:6px;"><span style="color:#dc2626;font-weight:700;">12</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;">3</span></div>
    <div style="font-size:14px;color:#374151;">Hoeveel groepe van <span style="color:#1e40af;font-weight:600;">4</span> pas binne <span style="color:#dc2626;font-weight:600;">12</span>? → <span style="color:#16a34a;font-weight:700;">3</span> groepe pas presies.</div>
  </div>
</div>`,

      videoPlaceholder: 'Kort video wat die verskil tussen gelyke deling en groepering by deling wys',

      workedExamples: [
        {
          question: '24 ÷ 6 = ?  Wys beide die gelyke-deling- en groeperinginterpretasies.',
          answer: '4',
          steps: [
            `Identifiseer die dele: <span style="color:#dc2626;font-weight:700;">24</span> is die <span style="color:#dc2626;font-weight:600;">deeltal</span> (die getal wat gedeel word), <span style="color:#1e40af;font-weight:700;">6</span> is die <span style="color:#1e40af;font-weight:600;">deler</span> (waarmee jy deel).`,
            `<strong>Gelyke-deling-interpretasie:</strong> Verbeel jou jy deel <span style="color:#dc2626;font-weight:700;">24</span> lekkers gelyk tussen <span style="color:#1e40af;font-weight:700;">6</span> vriende. Gee een lekker aan elke vriend op ʼn slag totdat al 24 gedeel is. Elke vriend eindig met <span style="color:#16a34a;font-weight:700;">4</span> lekkers.`,
            `<strong>Groeperinginterpretasie:</strong> Vra jouself: hoeveel groepe van <span style="color:#1e40af;font-weight:700;">6</span> pas binne <span style="color:#dc2626;font-weight:700;">24</span>? Tel op in sesse: 6, 12, 18, 24 — dit is <span style="color:#16a34a;font-weight:700;">4</span> groepe.`,
            `Albei maniere gee dieselfde <span style="color:#16a34a;font-weight:700;">kwosiënt</span>: <span style="color:#dc2626;font-weight:700;">24</span> ÷ <span style="color:#1e40af;font-weight:700;">6</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">4</span>`,
          ],
        },
        {
          question: 'ʼn Boer het 36 eiers. Hy verpak dit in bokse van 9. Hoeveel bokse vul hy?',
          answer: '4 bokse',
          steps: [
            `Dit is ʼn <strong>groeperingsprobleem</strong> — ons moet vind hoeveel groepe van <span style="color:#1e40af;font-weight:700;">9</span> binne <span style="color:#dc2626;font-weight:700;">36</span> pas.`,
            `Skryf die getalsin: <span style="color:#dc2626;font-weight:700;">36</span> ÷ <span style="color:#1e40af;font-weight:700;">9</span> = ?`,
            `Gebruik jou 9×-tafel om die antwoord te vind: 9 × 1 = 9,  9 × 2 = 18,  9 × 3 = 27,  9 × <span style="color:#16a34a;font-weight:700;">4</span> = <span style="color:#dc2626;font-weight:700;">36</span> ✓`,
            `Die <span style="color:#16a34a;font-weight:700;">kwosiënt</span> is <span style="color:#16a34a;font-weight:700;">4</span>. Die boer vul <span style="color:#16a34a;font-weight:700;font-size:18px;">4 bokse</span>.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — DELING AS DIE INVERSE VAN VERMENIGVULDIGING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-inverse-multiplication',
      title: 'Deling as die Inverse van Vermenigvuldiging',
      icon: '🔄',
      explanation: `<p style="margin-bottom:18px;">Deling en vermenigvuldiging is <strong>inverse bewerkings</strong> — dit beteken hulle <em>maak mekaar ongedaan</em>. Net soos optelling en aftrekking mekaar kanselleer, doen vermenigvuldiging en deling dieselfde ding in omgekeerde volgorde.</p>

<p style="margin-bottom:14px;">As jy jou vermenigvuldigingstafels ken, kan jy dit gebruik om enige delingsprobleem op te los. In plaas daarvan om ʼn deling van voor af uit te werk, vra eenvoudig: <strong>"Wat maal die deler gee my die deeltal?"</strong></p>

<p style="margin-bottom:12px;font-weight:600;">Kyk hoe hulle verbind is:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:12px;padding:18px 20px;margin-bottom:22px;">
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="font-size:17px;"><span style="color:#dc2626;font-weight:700;">4 × 6 = 24</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">(vermenigvuldigingsfeit)</span></div>
    <div style="font-size:17px;"><span style="color:#1e40af;font-weight:700;">24 ÷ 6 = 4</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">(eerste delingsfeit)</span></div>
    <div style="font-size:17px;"><span style="color:#16a34a;font-weight:700;">24 ÷ 4 = 6</span> <span style="color:#6b7280;font-size:14px;margin-left:8px;">(tweede delingsfeit)</span></div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Die feitefamilie:</p>

<p style="margin-bottom:18px;">Een vermenigvuldigingsfeit gee jou altyd <strong>twee delingsfeite</strong>. Saam vorm die vermenigvuldigingsfeit en die twee delingsfeite ʼn <strong>feitefamilie</strong>. As jy jou tafels ken, weet jy outomaties ook al die verwante delingsfeite.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:8px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:10px;">Voorbeeld feitefamilie vir 3 × 8 = 24</div>
  <div style="display:flex;flex-direction:column;gap:7px;">
    <div style="font-size:16px;color:#374151;"><span style="color:#dc2626;font-weight:700;">3 × 8 = 24</span></div>
    <div style="font-size:16px;color:#374151;"><span style="color:#1e40af;font-weight:700;">24 ÷ 8 = 3</span></div>
    <div style="font-size:16px;color:#374151;"><span style="color:#16a34a;font-weight:700;">24 ÷ 3 = 8</span></div>
  </div>
</div>`,

      videoPlaceholder: 'Kort video wat wys hoe vermenigvuldigingsfeite jou help om delingsprobleme op te los',

      workedExamples: [
        {
          question: 'Gebruik die feitefamilie vir 7 × 8 = 56 om twee delingsfeite te skryf.',
          answer: '56 ÷ 8 = 7  en  56 ÷ 7 = 8',
          steps: [
            `Begin met die vermenigvuldigingsfeit: <span style="color:#dc2626;font-weight:700;">7 × 8 = 56</span>. Die drie betrokke getalle is <strong>7</strong>, <strong>8</strong>, en <strong>56</strong>.`,
            `Vir die <span style="color:#1e40af;font-weight:700;">eerste delingsfeit</span>, hou die produk as die deeltal en wissel een faktor om die deler te word: <span style="color:#1e40af;font-weight:700;">56 ÷ 8 = 7</span>`,
            `Vir die <span style="color:#16a34a;font-weight:700;">tweede delingsfeit</span>, gebruik die ander faktor as die deler: <span style="color:#16a34a;font-weight:700;">56 ÷ 7 = 8</span>`,
            `Al drie feite in die familie:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-top:8px;display:flex;flex-direction:column;gap:8px;">
  <div style="font-size:17px;"><span style="color:#dc2626;font-weight:700;">7 × 8 = 56</span></div>
  <div style="font-size:17px;"><span style="color:#1e40af;font-weight:700;">56 ÷ 8 = 7</span></div>
  <div style="font-size:17px;"><span style="color:#16a34a;font-weight:700;">56 ÷ 7 = 8</span></div>
</div>`,
          ],
        },
        {
          question: 'Bereken 45 ÷ 9 met jou vermenigvuldigingstafels.',
          answer: '5',
          steps: [
            `Dink: <em>"Watter getal maal <span style="color:#1e40af;font-weight:700;">9</span> is gelyk aan <span style="color:#dc2626;font-weight:700;">45</span>?"</em>`,
            `Werk deur jou 9×-tafel: 1 × 9 = 9,  2 × 9 = 18,  3 × 9 = 27,  4 × 9 = 36,  <span style="color:#16a34a;font-weight:700;">5</span> × 9 = <span style="color:#dc2626;font-weight:700;">45</span> ✓`,
            `Omdat <span style="color:#dc2626;font-weight:700;">5</span> × <span style="color:#1e40af;font-weight:700;">9</span> = 45, weet ons dat <span style="color:#dc2626;font-weight:700;">45</span> ÷ <span style="color:#1e40af;font-weight:700;">9</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">5</span>`,
          ],
        },
        {
          question: 'Bereken 63 ÷ 7',
          answer: '9',
          steps: [
            `Dink: <em>"Watter getal maal <span style="color:#1e40af;font-weight:700;">7</span> is gelyk aan <span style="color:#dc2626;font-weight:700;">63</span>?"</em>`,
            `Werk deur jou 7×-tafel: 7, 14, 21, 28, 35, 42, 49, 56, <span style="color:#16a34a;font-weight:700;">9</span> × 7 = <span style="color:#dc2626;font-weight:700;">63</span> ✓`,
            `Omdat <span style="color:#dc2626;font-weight:700;">9</span> × <span style="color:#1e40af;font-weight:700;">7</span> = 63, weet ons dat <span style="color:#dc2626;font-weight:700;">63</span> ÷ <span style="color:#1e40af;font-weight:700;">7</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">9</span>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — DEEL MET RESTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'dividing-with-remainders',
      title: 'Deel met Reste',
      icon: '🔢',
      explanation: `<p style="margin-bottom:18px;">Soms deel getalle nie gelyk nie. Wanneer dit gebeur, is daar ʼn hoeveelheid <strong>oor</strong> nadat jy so gelyk moontlik gedeel het. Hierdie oorblywende hoeveelheid word die <strong>res</strong> genoem.</p>

<p style="margin-bottom:12px;font-weight:600;">Alledaagse voorbeeld:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:22px;">
  Jy het <strong>13 lekkers</strong> om gelyk tussen <strong>4 vriende</strong> te deel.<br/>
  <div style="margin-top:10px;display:flex;flex-direction:column;gap:6px;">
    <div>Elke vriend kry <span style="color:#16a34a;font-weight:700;">3</span> lekkers &nbsp;(4 × <span style="color:#16a34a;font-weight:700;">3</span> = 12).</div>
    <div>Daar is <span style="color:#ea580c;font-weight:700;">1</span> lekker oor wat nie gelyk gedeel kan word nie.</div>
    <div style="margin-top:6px;font-size:17px;"><strong>13 ÷ 4 = <span style="color:#16a34a;">3</span> r <span style="color:#ea580c;">1</span></strong></div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Sleutelwoorde om te ken:</p>

<div style="display:flex;flex-direction:column;gap:9px;margin-bottom:22px;">
  <div><strong style="color:#16a34a;">Kwosiënt</strong> — die heelgetal-antwoord na deling, voor die res. Getoon in <span style="color:#16a34a;font-weight:700;">groen</span>.</div>
  <div><strong style="color:#ea580c;">Res</strong> — die hoeveelheid wat oorbly. Dit is altyd <em>kleiner as die deler</em>. Getoon in <span style="color:#ea580c;font-weight:700;">oranje</span>. Geskryf as <strong>r</strong> na die kwosiënt.</div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Belangrike reël</div>
  <div style="color:#374151;">Die res moet altyd <strong>kleiner as die deler</strong> wees. As die res gelyk aan of groter as die deler is, kan jy nog een groep inpas.</div>
</div>`,

      videoPlaceholder: 'Kort video wat wys hoe om reste in deling te vind met alledaagse voorbeelde',
      diagramPlaceholder: 'Visuele voorstelling wat 17 lekkers in groepe van 5 wys met 2 lekkers wat buite die groepe oorbly',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="8" y="12" width="124" height="26" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="44" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="68" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="92" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="116" cy="25" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><rect x="8" y="47" width="124" height="26" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="44" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="68" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="92" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="116" cy="60" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><rect x="8" y="82" width="124" height="26" rx="6" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="20" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="44" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="68" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="92" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><circle cx="116" cy="95" r="8" fill="#93c5fd" stroke="#0f1f3d" stroke-width="1.5"/><rect x="8" y="120" width="60" height="26" rx="6" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="5,4"/><circle cx="20" cy="133" r="8" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/><circle cx="44" cy="133" r="8" fill="#fdba74" stroke="#ea580c" stroke-width="1.5"/><text x="90" y="138" font-weight="700" font-size="13" fill="#ea580c">oor</text><text x="110" y="163" font-weight="700" font-size="15" text-anchor="middle" fill="#16a34a">17 ÷ 5 = 3 r 2</text></svg>',

      workedExamples: [
        {
          question: 'Bereken 17 ÷ 5',
          answer: '3 r 2',
          steps: [
            `Vra: hoeveel groepe van <span style="color:#1e40af;font-weight:700;">5</span> pas binne <span style="color:#dc2626;font-weight:700;">17</span>?`,
            `Werk deur die 5×-tafel om die naaste veelvoud te vind sonder om oor 17 te gaan: 5 × <span style="color:#16a34a;font-weight:700;">3</span> = <strong>15</strong> ✓ &nbsp;(5 × 4 = 20 — te groot)`,
            `Vind die res: <span style="color:#dc2626;font-weight:700;">17</span> − 15 = <span style="color:#ea580c;font-weight:700;">2</span> oor.`,
            `<span style="color:#dc2626;font-weight:700;">17</span> ÷ <span style="color:#1e40af;font-weight:700;">5</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">3</span> r <span style="color:#ea580c;font-weight:700;font-size:18px;">2</span>`,
          ],
        },
        {
          question: 'Bereken 29 ÷ 4',
          answer: '7 r 1',
          steps: [
            `Vra: hoeveel groepe van <span style="color:#1e40af;font-weight:700;">4</span> pas binne <span style="color:#dc2626;font-weight:700;">29</span>?`,
            `Werk deur die 4×-tafel: 4 × <span style="color:#16a34a;font-weight:700;">7</span> = <strong>28</strong> ✓ &nbsp;(4 × 8 = 32 — te groot)`,
            `Vind die res: <span style="color:#dc2626;font-weight:700;">29</span> − 28 = <span style="color:#ea580c;font-weight:700;">1</span> oor.`,
            `<span style="color:#dc2626;font-weight:700;">29</span> ÷ <span style="color:#1e40af;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">7</span> r <span style="color:#ea580c;font-weight:700;font-size:18px;">1</span>`,
          ],
        },
        {
          question: 'ʼn Onderwyser het 25 potlode om tussen 6 leerders te deel. Hoeveel kry elke leerder en hoeveel bly oor?',
          answer: '4 potlode elk, 1 oor',
          steps: [
            `Skryf die getalsin: <span style="color:#dc2626;font-weight:700;">25</span> ÷ <span style="color:#1e40af;font-weight:700;">6</span> = ?`,
            `Werk deur die 6×-tafel: 6 × <span style="color:#16a34a;font-weight:700;">4</span> = <strong>24</strong> ✓ &nbsp;(6 × 5 = 30 — te groot)`,
            `Vind die res: <span style="color:#dc2626;font-weight:700;">25</span> − 24 = <span style="color:#ea580c;font-weight:700;">1</span> oor.`,
            `Elke leerder kry <span style="color:#16a34a;font-weight:700;font-size:18px;">4 potlode</span> en <span style="color:#ea580c;font-weight:700;font-size:18px;">1</span> bly oor.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — LANGDELING: 3-SYFER ÷ 1-SYFER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'long-division',
      title: 'Langdeling — 3-Syfer ÷ 1-Syfer',
      icon: '📐',
      explanation: `<p style="margin-bottom:18px;">Wanneer jy groter getalle deel, kan jy dit nie alles in een stap doen nie. In plaas daarvan werk jy deur die syfers <strong>een op ʼn slag</strong> met ʼn metode wat <strong>langdeling</strong> genoem word. Jy volg dieselfde vyf stappe en herhaal dit vir elke syfer van die getal wat jy deel.</p>

<p style="margin-bottom:12px;font-weight:600;">Die vyf stappe:</p>

<div style="display:flex;flex-direction:column;gap:8px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#fee2e2;color:#dc2626;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">1</span>
    <div><span style="color:#dc2626;font-weight:700;">Deel</span> — deel die huidige syfer (of syfers) deur die deler. Skryf die resultaat in die kwosiënt bo-aan.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dbeafe;color:#1e40af;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">2</span>
    <div><span style="color:#1e40af;font-weight:700;">Vermenigvuldig</span> — vermenigvuldig jou kwosiëntsyfer met die deler. Skryf die resultaat onder.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#dcfce7;color:#16a34a;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">3</span>
    <div><span style="color:#16a34a;font-weight:700;">Trek af</span> — trek af om te vind wat oorbly.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#ffedd5;color:#ea580c;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">4</span>
    <div><span style="color:#ea580c;font-weight:700;">Bring af</span> — bring die volgende syfer af langs die res.</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px;display:flex;align-items:flex-start;gap:12px;">
    <span style="background:#f3f4f6;color:#374151;font-weight:700;border-radius:50%;min-width:28px;height:28px;display:flex;align-items:center;justify-content:center;">5</span>
    <div><strong>Herhaal</strong> — gaan terug na stap 1 en herhaal vir die nuwe getal. Gaan voort totdat daar geen syfers meer is om af te bring nie.</div>
  </div>
</div>`,

      videoPlaceholder: 'Kort video wat stap-vir-stap langdeling van ʼn 3-syfergetal deur ʼn 1-syfergetal wys',

      workedExamples: [
        {
          question: 'Bereken 96 ÷ 3',
          answer: '32',
          steps: [
            `Stel op: skryf deler <strong>3</strong> aan die linkerkant met ʼn hakie, en deeltal <strong>96</strong> binne die hakie.`,
            `<span style="color:#dc2626;font-weight:700;">Deel:</span> Kyk na die eerste syfer — 9 ÷ 3 = <span style="color:#dc2626;font-weight:700;">3</span>. Skryf <span style="color:#dc2626;font-weight:700;">3</span> in die kwosiënt bo die 9.`,
            `<span style="color:#1e40af;font-weight:700;">Vermenigvuldig:</span> <span style="color:#1e40af;font-weight:700;">3 × 3 = 9</span>. Skryf 9 onder die 9 in die deeltal.`,
            `<span style="color:#16a34a;font-weight:700;">Trek af:</span> <span style="color:#16a34a;font-weight:700;">9 − 9 = 0</span>. <span style="color:#ea580c;font-weight:700;">Bring</span> dan die volgende syfer <span style="color:#ea580c;font-weight:700;">af</span> — <span style="color:#ea580c;font-weight:700;">6</span>. Jy het nou <strong>06</strong>.`,
            `<span style="color:#dc2626;font-weight:700;">Deel weer:</span> 6 ÷ 3 = <span style="color:#dc2626;font-weight:700;">2</span>. Skryf <span style="color:#dc2626;font-weight:700;">2</span> in die kwosiënt langs die 3. <span style="color:#1e40af;font-weight:700;">Vermenigvuldig:</span> <span style="color:#1e40af;font-weight:700;">3 × 2 = 6</span>. <span style="color:#16a34a;font-weight:700;">Trek af:</span> <span style="color:#16a34a;font-weight:700;">6 − 6 = 0</span>. Geen res.`,
            `Volledige uitleg:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 12px;color:#dc2626;text-align:center;">3</td>
    <td style="padding:0 12px;color:#dc2626;text-align:center;">2</td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">3</td>
    <td style="border-top:2px solid #374151;padding:0 12px;text-align:center;">9</td>
    <td style="border-top:2px solid #374151;padding:0 12px;text-align:center;">6</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 12px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">9</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 12px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 12px;"></td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 12px;text-align:center;">0</td>
    <td style="padding:0 12px;text-align:center;color:#ea580c;">6</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 12px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">6</span></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 12px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 12px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
          ],
        },
        {
          question: 'Bereken 156 ÷ 4',
          answer: '39',
          steps: [
            `Stel op: deler <strong>4</strong> aan die linkerkant, deeltal <strong>156</strong> binne.`,
            `<span style="color:#dc2626;font-weight:700;">Deel:</span> Kan 4 in 1 gaan? Nee — te klein. Kyk na die eerste twee syfers: 15 ÷ 4 = <span style="color:#dc2626;font-weight:700;">3</span> (aangesien 4 × 3 = 12 en 4 × 4 = 16 te groot is). Skryf <span style="color:#dc2626;font-weight:700;">3</span> bo die 5.`,
            `<span style="color:#1e40af;font-weight:700;">Vermenigvuldig:</span> <span style="color:#1e40af;font-weight:700;">4 × 3 = 12</span>. Skryf 12 onder 15. <span style="color:#16a34a;font-weight:700;">Trek af:</span> <span style="color:#16a34a;font-weight:700;">15 − 12 = 3</span>. <span style="color:#ea580c;font-weight:700;">Bring</span> die volgende syfer <span style="color:#ea580c;font-weight:700;">af</span> — <span style="color:#ea580c;font-weight:700;">6</span>. Jy het nou <strong>36</strong>.`,
            `<span style="color:#dc2626;font-weight:700;">Deel weer:</span> 36 ÷ 4 = <span style="color:#dc2626;font-weight:700;">9</span> (aangesien 4 × 9 = 36). Skryf <span style="color:#dc2626;font-weight:700;">9</span> bo die 6.`,
            `<span style="color:#1e40af;font-weight:700;">Vermenigvuldig:</span> <span style="color:#1e40af;font-weight:700;">4 × 9 = 36</span>. <span style="color:#16a34a;font-weight:700;">Trek af:</span> <span style="color:#16a34a;font-weight:700;">36 − 36 = 0</span>. Geen res.`,
            `Volledige uitleg:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 10px;text-align:center;"></td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">3</td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">9</td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">4</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">1</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">5</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">6</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">1</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">2</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;">3</td>
    <td style="padding:0 10px;text-align:center;color:#ea580c;">6</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">3</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">6</span></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — DELING WOORDPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'division-word-problems',
      title: 'Deling Woordprobleme',
      icon: '📝',
      explanation: `<p style="margin-bottom:18px;">Woordprobleme sê nie altyd "deel" nie. Voordat jy bereken, moet jy <strong>versigtig lees</strong> en besluit watter soort delingsprobleem dit is.</p>

<p style="margin-bottom:12px;font-weight:600;">Stap 1 — Identifiseer die probleemtipe:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Deel</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">Jy ken die totaal en die aantal groepe. Jy vind hoeveel in elke groep is.</div>
    <div style="font-size:13px;color:#374151;">Kyk vir: <span style="color:#ea580c;font-weight:700;">gelyk gedeel</span>, <span style="color:#ea580c;font-weight:700;">elk</span>, <span style="color:#ea580c;font-weight:700;">verdeel tussen</span>, <span style="color:#ea580c;font-weight:700;">per persoon</span></div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Groepering</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">Jy ken die totaal en die grootte van elke groep. Jy vind hoeveel groepe daar is.</div>
    <div style="font-size:13px;color:#374151;">Kyk vir: <span style="color:#ea580c;font-weight:700;">groepe van</span>, <span style="color:#ea580c;font-weight:700;">bokse van</span>, <span style="color:#ea580c;font-weight:700;">pakkies van</span>, <span style="color:#ea580c;font-weight:700;">hoeveel groepe</span>, <span style="color:#ea580c;font-weight:700;">per</span></div>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Sleutelwoorde — deurgaans in oranje uitgelig</div>
  <div style="color:#374151;font-size:14px;">Wanneer jy woorde soos <span style="color:#ea580c;font-weight:700;">deel</span>, <span style="color:#ea580c;font-weight:700;">verdeel</span>, <span style="color:#ea580c;font-weight:700;">elk</span>, <span style="color:#ea580c;font-weight:700;">per</span>, <span style="color:#ea580c;font-weight:700;">hoeveel groepe</span>, of <span style="color:#ea580c;font-weight:700;">hoeveel elk</span> in ʼn woordprobleem sien, is dit leidrade dat jy moet deel.</div>
</div>`,

      videoPlaceholder: 'Kort video wat wys hoe om deling-woordprobleme te identifiseer en op te los',

      workedExamples: [
        {
          question: 'ʼn Bakkery bak 144 muffins. Hulle verpak dit in <span style="color:#ea580c;font-weight:700;">bokse van 6</span>. Hoeveel bokse vul hulle?',
          answer: '24 bokse',
          steps: [
            `Sleutelwoord: "<span style="color:#ea580c;font-weight:700;">bokse van 6</span>" — dit is ʼn <strong>groeperingsprobleem</strong>. Ons moet vind hoeveel groepe van 6 binne 144 pas.`,
            `Skryf die getalsin: <span style="color:#dc2626;font-weight:700;">144</span> ÷ <span style="color:#1e40af;font-weight:700;">6</span> = ?`,
            `Gebruik langdeling:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">2</td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">4</td>
    <td style="padding:0 10px;text-align:center;"></td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">6</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">1</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">4</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">4</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">1</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">2</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;">2</td>
    <td style="padding:0 10px;text-align:center;color:#ea580c;">4</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">2</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">4</span></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
            `Die bakkery vul <span style="color:#16a34a;font-weight:700;font-size:18px;">24 bokse</span>.`,
          ],
        },
        {
          question: 'R180 word <span style="color:#ea580c;font-weight:700;">gelyk gedeel</span> tussen 9 kinders. Hoeveel kry <span style="color:#ea580c;font-weight:700;">elke</span> kind?',
          answer: 'R20',
          steps: [
            `Sleutelwoorde: "<span style="color:#ea580c;font-weight:700;">gelyk gedeel</span>" en "<span style="color:#ea580c;font-weight:700;">elke</span>" — dit is ʼn <strong>delingsprobleem</strong>. Deel R180 in 9 gelyke groepe.`,
            `Skryf die getalsin: <span style="color:#dc2626;font-weight:700;">180</span> ÷ <span style="color:#1e40af;font-weight:700;">9</span> = ?`,
            `Gebruik jou 9×-tafel: dink — wat maal <span style="color:#1e40af;font-weight:700;">9</span> is gelyk aan <span style="color:#dc2626;font-weight:700;">180</span>? &nbsp; 9 × <span style="color:#16a34a;font-weight:700;">20</span> = 180 ✓`,
            `Elke kind kry <span style="color:#16a34a;font-weight:700;font-size:18px;">R20</span>.`,
          ],
        },
        {
          question: 'ʼn Boer plant 125 saadjies in <span style="color:#ea580c;font-weight:700;">5 gelyke rye</span>. Hoeveel saadjies is in <span style="color:#ea580c;font-weight:700;">elke ry</span>? Is daar enige saadjies oor?',
          answer: '25 saadjies per ry, geen res',
          steps: [
            `Sleutelwoorde: "<span style="color:#ea580c;font-weight:700;">gelyke rye</span>" en "<span style="color:#ea580c;font-weight:700;">elke ry</span>" — dit is ʼn <strong>delingsprobleem</strong>. Deel 125 saadjies gelyk in 5 rye.`,
            `Skryf die getalsin: <span style="color:#dc2626;font-weight:700;">125</span> ÷ <span style="color:#1e40af;font-weight:700;">5</span> = ?`,
            `Gebruik langdeling:
<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-top:8px;display:inline-block;">
<table style="border-collapse:collapse;font-size:20px;font-weight:700;font-family:monospace;line-height:2;">
  <tr>
    <td style="padding:0 6px;"></td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">2</td>
    <td style="padding:0 10px;color:#dc2626;text-align:center;">5</td>
  </tr>
  <tr>
    <td style="border-right:2px solid #374151;padding:0 8px;">5</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">1 2</td>
    <td style="border-top:2px solid #374151;padding:0 10px;text-align:center;">5</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">1 0</span></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;">2</td>
    <td style="padding:0 10px;text-align:center;color:#ea580c;">5</td>
  </tr>
  <tr>
    <td></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#16a34a;">−</span><span style="color:#1e40af;">2</span></td>
    <td style="padding:0 10px;text-align:center;"><span style="color:#1e40af;">5</span></td>
  </tr>
  <tr>
    <td></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
    <td style="border-bottom:1.5px solid #9ca3af;padding:0 10px;"></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td style="padding:0 10px;text-align:center;color:#16a34a;">0</td>
  </tr>
</table>
</div>`,
            `Elke ry het <span style="color:#16a34a;font-weight:700;font-size:18px;">25 saadjies</span>. Die res is <span style="color:#16a34a;font-weight:700;">0</span> — geen saadjies bly oor nie.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — VERGELYK HOEVEELHEDE: "VIR ELKE" EN "PER" PROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-amounts-for-every-and-per',
      title: 'Vergelyk Hoeveelhede: "Vir Elke" en "Per" Probleme',
      icon: '⚖️',
      explanation: `<p style="margin-bottom:18px;">Sommige woordprobleme vra nie vir jou om een hoeveelheid te deel of te groepeer nie — hulle vra jou om <strong>twee hoeveelhede wat saam verander, te vergelyk</strong>. Daar is twee soorte van hierdie probleme.</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Vergelyk Dieselfde Soort</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">Twee groepe van <em>dieselfde soort</em> ding word vergelyk — soos rooi krale en blou krale.</div>
    <div style="font-size:13px;color:#374151;">Kyk vir: <span style="color:#ea580c;font-weight:700;">vir elke</span>, <span style="color:#ea580c;font-weight:700;">vir elk</span></div>
  </div>
  <div style="background:#f0fdf4;border:1.5px solid #86efac;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#16a34a;margin-bottom:8px;">Vergelyk Verskillende Soorte</div>
    <div style="font-size:14px;color:#374151;margin-bottom:8px;">Twee <em>verskillende soorte</em> dinge wat saam verander, word vergelyk — soos afstand en tyd, of koste en aantal items.</div>
    <div style="font-size:13px;color:#374151;">Kyk vir: <span style="color:#ea580c;font-weight:700;">per</span>, <span style="color:#ea580c;font-weight:700;">elke uur</span>, <span style="color:#ea580c;font-weight:700;">elk</span></div>
  </div>
</div>

<p style="margin-bottom:16px;">Jy het geen nuwe tekens of simbole nodig om hierdie probleme op te los nie — net die vermenigvuldiging- en delingsfeite wat jy reeds ken. Vind eers die <span style="color:#ea580c;font-weight:700;">skaalfaktor</span>: hoeveel keer groter (of kleiner) een hoeveelheid geword het. Pas dan <em>dieselfde</em> skaalfaktor op die ander hoeveelheid toe.</p>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Drie stappe om enige vergelykingsprobleem op te los</div>
  <ol style="margin:0;padding-left:18px;color:#374151;font-size:14px;line-height:1.8;">
    <li>Skryf neer wat jy weet vir <strong>een</strong> eenheid of een klein groep.</li>
    <li>Deel om die <span style="color:#ea580c;font-weight:700;">skaalfaktor</span> te vind — hoeveel van daardie eenhede of groepe in die nuwe hoeveelheid pas.</li>
    <li>Vermenigvuldig om die ooreenstemmende nuwe hoeveelheid te vind.</li>
  </ol>
</div>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Kleurgids:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Eerste hoeveelheid — blou</span>
    <span style="background:#fef2f2;color:#dc2626;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fca5a5;">Ooreenstemmende hoeveelheid — rooi</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Skaalfaktor — oranje</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Antwoord — groen</span>
  </div>
</div>`,

      videoPlaceholder: 'Kort video wat wys hoe om "vir elke" en "per" vergelykings-woordprobleme met ʼn skaalfaktor op te los',

      workedExamples: [
        {
          question: 'Vir elke <span style="color:#1e40af;font-weight:700;">2</span> lekkers wat Thabo kry, kry sy jonger sussie <span style="color:#dc2626;font-weight:700;">3</span> lekkers. As Thabo 8 lekkers kry, hoeveel lekkers kry sy sussie?',
          answer: '12 lekkers',
          steps: [
            `Dit vergelyk twee groepe van <strong>dieselfde soort</strong> ding (lekkers en lekkers): vir elke <span style="color:#1e40af;font-weight:700;">2</span> lekkers wat Thabo kry, kry sy sussie <span style="color:#dc2626;font-weight:700;">3</span>.`,
            `Vind die <span style="color:#ea580c;font-weight:700;">skaalfaktor</span>: Thabo se 2 lekkers het 8 lekkers geword. <span style="color:#ea580c;font-weight:700;">8 ÷ 2 = 4</span> — alles is nou 4 keer groter.`,
            `Pas dieselfde skaalfaktor op sy sussie se hoeveelheid toe: <span style="color:#dc2626;font-weight:700;">3</span> × <span style="color:#ea580c;font-weight:700;">4</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">12</span>. Sy sussie kry <strong>12 lekkers</strong>.`,
          ],
        },
        {
          question: 'ʼn Kraan vul ʼn watertenk teen ʼn konstante tempo van <span style="color:#1e40af;font-weight:700;">5 liter elke minuut</span>. Hoeveel liter is in die tenk na 6 minute?',
          answer: '30 liter',
          steps: [
            `Dit vergelyk twee <strong>verskillende soorte</strong> dinge wat saam verander: liter en minute. Ons word die hoeveelheid vir <strong>1 minuut</strong> gegee: <span style="color:#1e40af;font-weight:700;">5 liter</span>.`,
            `Ons wil die hoeveelheid vir <span style="color:#ea580c;font-weight:700;">6 minute</span> weet, dus vermenigvuldig ons die tempo met 6: <span style="color:#1e40af;font-weight:700;">5</span> × <span style="color:#ea580c;font-weight:700;">6</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">30</span>.`,
            `Na 6 minute is daar <strong>30 liter</strong> in die tenk.`,
          ],
        },
        {
          question: 'ʼn Taxi ry <span style="color:#1e40af;font-weight:700;">120 km in 3 uur</span> teen ʼn konstante spoed. Hoe ver sal dit in 5 uur ry?',
          answer: '200 km',
          steps: [
            `Vind eers die hoeveelheid vir <strong>1 uur</strong> — deel die afstand deur die tyd: <span style="color:#1e40af;font-weight:700;">120</span> ÷ <span style="color:#ea580c;font-weight:700;">3</span> = <span style="color:#16a34a;font-weight:700;">40</span> km per uur.`,
            `Vermenigvuldig dit nou met die nuwe aantal ure: <span style="color:#16a34a;font-weight:700;">40</span> × <span style="color:#dc2626;font-weight:700;">5</span> = <span style="color:#16a34a;font-weight:700;font-size:18px;">200</span>.`,
            `Die taxi sal <strong>200 km</strong> in 5 uur ry.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Delingsfeite en Feitefamilies (0-3, Maklik)
        { difficulty: 'Easy', question: 'Bereken: 54 ÷ 6', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '6 × 9 = 54, dus 54 ÷ 6 = 9.' },
        { difficulty: 'Easy', question: 'ʼn Afrigter deel 32 penne gelyk tussen 4 oefengroepe. Hoeveel penne kry elke groep?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 penne'], explanation: '32 ÷ 4 = 8. Elke groep kry 8 penne.' },
        { difficulty: 'Easy', question: 'Waar of onwaar: 9 × 6 = 54, dus moet dit ook waar wees dat 54 ÷ 9 = 6. Skryf "waar" of "onwaar".', answer: 'waar', checkMode: 'auto', correctAnswer: 'waar', correctAnswers: ['waar', 'ja', 'korrek'], explanation: 'Waar — 9 × 6 = 54, en as ʼn produk deur een faktor gedeel word, kry jy altyd die ander faktor, dus 54 ÷ 9 = 6.' },
        { difficulty: 'Easy', question: 'Gebruik die feitefamilie vir 6 × 9 = 54 om die twee verwante delingsfeite te skryf.', answer: '54 ÷ 9 = 6 en 54 ÷ 6 = 9', checkMode: 'auto', correctAnswer: '54÷9=6 en 54÷6=9', correctAnswers: ['54÷9=6 en 54÷6=9', '54/9=6 en 54/6=9', '54÷6=9 en 54÷9=6', '54/6=9 en 54/9=6'], explanation: 'Vanaf 6 × 9 = 54, is die twee delingsfeite 54 ÷ 9 = 6 en 54 ÷ 6 = 9.' },

        // Blok 2 — Reste (4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 34 ÷ 5', answer: '6 r 4', checkMode: 'auto', correctAnswer: '6r4', correctAnswers: ['6r4', '6res4'], explanation: '5 × 6 = 30 (naaste sonder om 34 te oorskry). 34 − 30 = 4 oor. 34 ÷ 5 = 6 r 4.' },
        { difficulty: 'Easy-Medium', question: 'Zanele het 46 krale en wil dit inryg op halssnoere van 9 krale elk. Hoeveel volledige halssnoere kan sy maak, en hoeveel krale bly oor?', answer: '5 r 1', checkMode: 'auto', correctAnswer: '5r1', correctAnswers: ['5r1', '5res1'], explanation: '9 × 5 = 45 (naaste sonder om 46 te oorskry). 46 − 45 = 1 oor. 46 ÷ 9 = 5 r 1.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het geskryf: "23 ÷ 5 = 3 r 8". Is dit korrek? Indien nie, skryf die korrekte antwoord in die vorm kwosiënt r res.', answer: '4 r 3', checkMode: 'auto', correctAnswer: '4r3', correctAnswers: ['4r3', '4res3', 'nee4r3', 'onkorrek4r3'], explanation: 'Die leerder is verkeerd: ʼn res van 8 kan nie voorkom wanneer deur 5 gedeel word nie, aangesien 8 groter as 5 is. Korrek: 5 × 4 = 20 en 23 − 20 = 3, dus 23 ÷ 5 = 4 r 3.' },
        { difficulty: 'Medium', question: 'ʼn Doos hou 61 appels. As 8 appels per sak verpak word, hoeveel volle sakke is daar, en hoeveel appels bly oor?', answer: '7 r 5', checkMode: 'auto', correctAnswer: '7r5', correctAnswers: ['7r5', '7res5'], explanation: '8 × 7 = 56 (naaste sonder om 61 te oorskry). 61 − 56 = 5 oor. 61 ÷ 8 = 7 r 5.' },

        // Blok 3 — Langdeling (8-11, Medium)
        { difficulty: 'Medium', question: 'Bereken met langdeling: 78 ÷ 6', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '7 ÷ 6 = 1 r 1, bring 8 af → 18. 18 ÷ 6 = 3. Dus 78 ÷ 6 = 13.' },
        { difficulty: 'Medium', question: 'ʼn Liefdadigheidsorganisasie het 315 komberse gelyk in 5 aflewerings-vragmotors verpak. Hoeveel komberse het in elke vragmotor gegaan? Wys jou langdeling-werk.', answer: '63', checkMode: 'self', correctAnswer: '63', explanation: '31 ÷ 5 = 6 r 1, bring 5 af → 15. 15 ÷ 5 = 3. Dus 315 ÷ 5 = 63 komberse per vragmotor.' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en skryf jou antwoord in die vorm kwosiënt r res: 259 ÷ 7', answer: '37 r 0', checkMode: 'auto', correctAnswer: '37', correctAnswers: ['37', '37r0', '37 r 0'], explanation: '25 ÷ 7 = 3 r 4, bring 9 af → 49. 49 ÷ 7 = 7. Dus 259 ÷ 7 = 37 presies.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het langdeling gebruik en gekry: 386 ÷ 9 = 43 r 8. Kontroleer die werk deur die kwosiënt met die deler te vermenigvuldig en die res by te tel. Is die leerder se antwoord korrek? Gee die korrekte kwosiënt en res.', answer: '42 r 8', checkMode: 'self', explanation: 'Kontrole: 9 × 43 = 387, plus 8 gee 395 — veel meer as 386, dus die leerder is verkeerd. Korrekte werk: 38 ÷ 9 = 4 r 2 (9 × 4 = 36, 38 − 36 = 2). Bring 6 af → 26. 26 ÷ 9 = 2 r 8 (9 × 2 = 18, 26 − 18 = 8). Dus 386 ÷ 9 = 42 r 8.' },

        // Blok 4 — Woordprobleme: Deel vs Groepeer (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Winkeleienaar het 96 lemoene en verpak dit in kratte van 8. Is dit ʼn delingsprobleem of ʼn groeperingsprobleem? Verduidelik kortliks, en gee dan die antwoord.', answer: 'Groepering — 12 kratte', checkMode: 'self', explanation: 'Dit is ʼn groeperingsprobleem: ons ken die totaal (96) en die grootte van elke groep (8), en moet vind hoeveel groepe pas. 96 ÷ 8 = 12 kratte.' },
        { difficulty: 'Medium', question: 'R138 prysgeld word gelyk gedeel tussen 6 wenners. Hoeveel ontvang elke wenner? Skryf slegs die getal sonder die R-simbool.', answer: '23', checkMode: 'auto', correctAnswer: '23', explanation: '138 ÷ 6 = 23. Elke wenner ontvang R23.' },
        { difficulty: 'Medium', question: 'ʼn Tuinier plant 91 saailinge in gelyke rye van 7. Skryf die delings-getalsin vir hierdie probleem, en los dit dan op om te vind hoeveel rye daar is.', answer: '91 ÷ 7 = 13', checkMode: 'auto', correctAnswer: '91÷7=13', correctAnswers: ['91÷7=13', '91/7=13', '13'], explanation: 'Die getalsin is 91 ÷ 7. 91 ÷ 7 = 13 rye.' },
        { difficulty: 'Medium', question: 'ʼn Speelgoedwinkel het ʼn aflewering van 175 albasters ontvang. Die eienaar wil dit in klein sakkies verpak, met 5 albasters in elke sakkie, om apart te verkoop. Hoeveel sakkies kan gevul word?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 sakkies'], explanation: '175 ÷ 5 = 35 sakkies.' },

        // Blok 5 — Veelstap en Toegepaste Probleme (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Bakkery verdien R216 deur brode te verkoop, gelyk verdeel oor ʼn 9-uur skof. As die bakker dan R14 op meel vir die volgende bondel spandeer, hoeveel van daardie uurlikse tarief bly oor van een uur se verdienste?', answer: '10', checkMode: 'auto', correctAnswer: '10', explanation: '216 ÷ 9 = 24 (per uur verdien). 24 − 14 = 10. R10 bly oor.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Skool reël vervoer vir 100 leerders op ʼn uitstappie. Elke bussie vervoer 8 leerders. Verduidelik waarom om net 100 ÷ 8 te bereken nie die aantal bussies gee wat nodig is nie, en gee die werklike aantal bussies wat bespreek moet word.', answer: '13', checkMode: 'self', correctAnswer: '13', correctAnswers: ['13', '13 bussies'], explanation: '100 ÷ 8 = 12 r 4. Twaalf bussies vervoer presies 96 leerders, maar 4 leerders het nog steeds geen sitplek nie, dus is ʼn 13de bussie nodig, al is dit nie vol nie. Om net die kwosiënt (12) te gebruik sou leerders agterlaat — jy moet altyd oprond wanneer daar ʼn res is. 13 bussies in totaal.' },

        // Blok 6 — Redenering en Regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "In die feitefamilie vir 8 × 6 = 48, is die twee delingsfeite 48 ÷ 6 = 8 en 48 ÷ 5 = 8." Is hierdie bewering korrek? Verduidelik jou redenering en gee die korrekte tweede delingsfeit indien nodig.', answer: 'Onkorrek — die tweede feit moet 48 ÷ 8 = 6 wees, nie 48 ÷ 5 = 8 nie', checkMode: 'self', explanation: 'Die bewering is onkorrek. Vanaf 8 × 6 = 48, moet die twee verwante delingsfeite dieselfde drie getalle gebruik: 48 ÷ 6 = 8 en 48 ÷ 8 = 6. Die getal 5 behoort glad nie tot hierdie feitefamilie nie.' },
        { difficulty: 'Hard', question: 'Sonder om altwee volledig te bereken, verduidelik watter een ʼn groter antwoord gee: 96 ÷ 4 of 96 ÷ 8. Hoe weet jy dit?', answer: '96 ÷ 4 is groter', checkMode: 'self', explanation: 'Wanneer dieselfde getal deur ʼn kleiner deler gedeel word, word dit in minder, groter groepe verdeel, dus is die antwoord groter. Aangesien 4 kleiner as 8 is, gee 96 ÷ 4 ʼn groter antwoord as 96 ÷ 8, sonder dat jy hoef uit te werk dat hulle 24 en 12 is.' },

        // Blok 7 — Vergelyk Hoeveelhede: Vir Elke en Per (20-22, Maklik-Medium)
        { difficulty: 'Easy', question: 'Vir elke 3 rooi fiches is daar 4 blou fiches. As daar 12 rooi fiches is, hoeveel blou fiches is daar?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 blou fiches'], explanation: '12 rooi fiches is 12 ÷ 3 = 4 keer soveel as 3. Pas dieselfde skaalfaktor op die blou fiches toe: 4 × 4 = 16 ✓' },
        { difficulty: 'Medium', question: 'ʼn Minibus-taxi ry 150 km in 3 uur teen ʼn konstante spoed. Hoe ver ry dit in 5 uur?', answer: '250 km', checkMode: 'auto', correctAnswer: '250', correctAnswers: ['250', '250 km'], explanation: 'Tempo per uur: 150 ÷ 3 = 50 km per uur. In 5 uur: 50 × 5 = 250 km ✓' },
        { difficulty: 'Medium', question: 'ʼn Resep het 2 eiers vir elke 3 koppies meel nodig. Sipho het 8 eiers en wil dit almal gebruik, terwyl hy dieselfde patroon volhou. Hoeveel koppies meel het hy nodig? Verduidelik jou redenering.', answer: '12 koppies', checkMode: 'self', explanation: 'Die skaalfaktor is 8 ÷ 2 = 4 (Sipho het 4 keer soveel eiers as die basishoeveelheid van 2). Pas dieselfde skaalfaktor op die meel toe: 3 × 4 = 12 koppies.' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het ʼn sterk begrip van delingsfeite, reste, langdeling, woordprobleme en die vergelyking van hoeveelhede.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd met die meeste delingsvaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Delingsfeite en Feitefamilies (0-3, Maklik)
        { difficulty: 'Easy', question: 'Bereken: 72 ÷ 8', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '8 × 9 = 72, dus 72 ÷ 8 = 9.' },
        { difficulty: 'Easy', question: 'ʼn Verkoper verpak 49 lemoene gelyk in 7 mandjies. Hoeveel lemoene gaan in elke mandjie?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7 lemoene'], explanation: '49 ÷ 7 = 7. Elke mandjie kry 7 lemoene.' },
        { difficulty: 'Easy', question: 'Vul die ontbrekende getal in: 7 × ___ = 49, en gebruik dit om te sê wat 49 ÷ 7 gelyk is.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '7 × 7 = 49, dus die ontbrekende getal is 7. Dit beteken ook 49 ÷ 7 = 7.' },
        { difficulty: 'Easy', question: 'Gebruik die feitefamilie vir 8 × 7 = 56 om die twee verwante delingsfeite te skryf.', answer: '56 ÷ 7 = 8 en 56 ÷ 8 = 7', checkMode: 'auto', correctAnswer: '56÷7=8 en 56÷8=7', correctAnswers: ['56÷7=8 en 56÷8=7', '56/7=8 en 56/8=7', '56÷8=7 en 56÷7=8', '56/8=7 en 56/7=8'], explanation: 'Vanaf 8 × 7 = 56, is die twee delingsfeite 56 ÷ 7 = 8 en 56 ÷ 8 = 7.' },

        // Blok 2 — Reste (4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 41 ÷ 6', answer: '6 r 5', checkMode: 'auto', correctAnswer: '6r5', correctAnswers: ['6r5', '6res5'], explanation: '6 × 6 = 36 (naaste sonder om 41 te oorskry). 41 − 36 = 5 oor. 41 ÷ 6 = 6 r 5.' },
        { difficulty: 'Easy-Medium', question: 'Dumisani het 53 albasters en wil flesse vul wat elk 8 albasters hou. Hoeveel volle flesse kan hy vul, en hoeveel albasters bly oor?', answer: '6 r 5', checkMode: 'auto', correctAnswer: '6r5', correctAnswers: ['6r5', '6res5'], explanation: '8 × 6 = 48 (naaste sonder om 53 te oorskry). 53 − 48 = 5 oor. 53 ÷ 8 = 6 r 5.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het geskryf: "31 ÷ 6 = 4 r 7". Is dit korrek? Indien nie, skryf die korrekte antwoord in die vorm kwosiënt r res.', answer: '5 r 1', checkMode: 'auto', correctAnswer: '5r1', correctAnswers: ['5r1', '5res1', 'nee5r1', 'onkorrek5r1'], explanation: 'Die leerder is verkeerd: ʼn res van 7 kan nie voorkom wanneer deur 6 gedeel word nie, aangesien 7 groter as 6 is. Korrek: 6 × 5 = 30 en 31 − 30 = 1, dus 31 ÷ 6 = 5 r 1.' },
        { difficulty: 'Medium', question: 'ʼn Krat hou 67 eiers. As dit herverpak word in eierbakkies van 9, hoeveel volle bakkies is daar, en hoeveel eiers bly oor?', answer: '7 r 4', checkMode: 'auto', correctAnswer: '7r4', correctAnswers: ['7r4', '7res4'], explanation: '9 × 7 = 63 (naaste sonder om 67 te oorskry). 67 − 63 = 4 oor. 67 ÷ 9 = 7 r 4.' },

        // Blok 3 — Langdeling (8-11, Medium)
        { difficulty: 'Medium', question: 'Bereken met langdeling: 76 ÷ 4', answer: '19', checkMode: 'auto', correctAnswer: '19', explanation: '7 ÷ 4 = 1 r 3, bring 6 af → 36. 36 ÷ 4 = 9. Dus 76 ÷ 4 = 19.' },
        { difficulty: 'Medium', question: 'ʼn Fabriek het 434 blikkies gemaak en dit gelyk op 7 pallette verpak. Hoeveel blikkies is op elke palet? Wys jou langdeling-werk.', answer: '62', checkMode: 'self', correctAnswer: '62', explanation: '43 ÷ 7 = 6 r 1, bring 4 af → 14. 14 ÷ 7 = 2. Dus 434 ÷ 7 = 62 blikkies per palet.' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en skryf jou antwoord in die vorm kwosiënt r res: 287 ÷ 6', answer: '47 r 5', checkMode: 'auto', correctAnswer: '47r5', correctAnswers: ['47r5', '47res5'], explanation: '28 ÷ 6 = 4 r 4, bring 7 af → 47. 47 ÷ 6 = 7 r 5. Dus 287 ÷ 6 = 47 r 5.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het langdeling gebruik en gekry: 462 ÷ 11 = 24. Kontroleer die werk deur die kwosiënt met die deler te vermenigvuldig. Is die leerder se antwoord korrek? Gee die korrekte antwoord.', answer: '42', checkMode: 'self', explanation: 'Kontrole: 11 × 24 = 264, wat nie gelyk is aan 462 nie, dus is die leerder verkeerd (die syfers van die antwoord is waarskynlik omgeruil). Korrekte werk: 46 ÷ 11 = 4 r 2 (11 × 4 = 44, 46 − 44 = 2). Bring 2 af → 22. 22 ÷ 11 = 2 (11 × 2 = 22, 22 − 22 = 0). Dus 462 ÷ 11 = 42 presies.' },

        // Blok 4 — Woordprobleme: Deel vs Groepeer (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Bibliotekaris het 84 storieboeke om op rakke te plaas, met 6 boeke wat op elke rak pas. Is dit ʼn delingsprobleem of ʼn groeperingsprobleem? Verduidelik kortliks, en gee dan die antwoord.', answer: 'Groepering — 14 rakke', checkMode: 'self', explanation: 'Dit is ʼn groeperingsprobleem: ons ken die totaal (84) en die grootte van elke groep (6), en moet vind hoeveel groepe pas. 84 ÷ 6 = 14 rakke.' },
        { difficulty: 'Medium', question: 'R165 word gelyk gedeel tussen 5 vrywilligers vir reiskoste. Hoeveel ontvang elke vrywilliger? Skryf slegs die getal sonder die R-simbool.', answer: '33', checkMode: 'auto', correctAnswer: '33', explanation: '165 ÷ 5 = 33. Elke vrywilliger ontvang R33.' },
        { difficulty: 'Medium', question: 'ʼn Boer plant 117 kool in gelyke rye van 9. Skryf die delings-getalsin vir hierdie probleem, en los dit dan op om te vind hoeveel rye daar is.', answer: '117 ÷ 9 = 13', checkMode: 'auto', correctAnswer: '117÷9=13', correctAnswers: ['117÷9=13', '117/9=13', '13'], explanation: 'Die getalsin is 117 ÷ 9. 117 ÷ 9 = 13 rye.' },
        { difficulty: 'Medium', question: 'ʼn Handwerkwinkel het ʼn boks van 152 knope ontvang. Die eienaar wil dit in klein pakkies verpak, met 8 knope in elke pakkie, om apart te verkoop. Hoeveel pakkies kan gevul word?', answer: '19', checkMode: 'auto', correctAnswer: '19', correctAnswers: ['19', '19 pakkies'], explanation: '152 ÷ 8 = 19 pakkies.' },

        // Blok 5 — Veelstap en Toegepaste Probleme (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Markstalletjie verdien R270 deur vrugte te verkoop, gelyk verdeel oor ʼn 9-uur dag. As die stalhouer dan R18 op ys spandeer om vrugte koel te hou, hoeveel van daardie uurlikse tarief bly oor van een uur se verdienste?', answer: '12', checkMode: 'auto', correctAnswer: '12', explanation: '270 ÷ 9 = 30 (per uur verdien). 30 − 18 = 12. R12 bly oor.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Gemeenskapsaal reël sitplek vir 130 gaste by ʼn troue. Elke tafel het plek vir 9 gaste. Verduidelik waarom om net 130 ÷ 9 te bereken nie die aantal tafels gee wat nodig is nie, en gee die werklike aantal tafels wat opgestel moet word.', answer: '15', checkMode: 'self', correctAnswer: '15', correctAnswers: ['15', '15 tafels'], explanation: '130 ÷ 9 = 14 r 4. Veertien tafels sit presies 126 gaste, maar 4 gaste het nog steeds geen sitplek nie, dus is ʼn 15de tafel nodig, al is dit nie vol nie. Om net die kwosiënt (14) te gebruik sou gaste sonder sitplek laat — jy moet altyd oprond wanneer daar ʼn res is. 15 tafels in totaal.' },

        // Blok 6 — Redenering en Regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'Verduidelik in jou eie woorde waarom die res in ʼn deling altyd kleiner as die deler moet wees. Gebruik die voorbeeld 26 ÷ 7 om jou verduideliking te ondersteun.', answer: '26 ÷ 7 = 3 r 5, aangesien 5 < 7', checkMode: 'self', explanation: 'As die res gelyk aan of groter as die deler was, kon nog ʼn volle groep steeds gemaak word, dus was die deling nie klaar nie. Vir 26 ÷ 7: 7 × 3 = 21, en 26 − 21 = 5, wat kleiner as 7 is, dus is 3 r 5 korrek. As iemand 2 r 12 gesê het, sou dit verkeerd wees omdat 12 groter as 7 is — nog ʼn groep van 7 pas binne 12.' },
        { difficulty: 'Hard', question: 'Sonder om altwee volledig te bereken, verduidelik watter een ʼn groter antwoord gee: 120 ÷ 6 of 120 ÷ 10. Hoe weet jy dit?', answer: '120 ÷ 6 is groter', checkMode: 'self', explanation: 'Wanneer dieselfde getal deur ʼn kleiner deler gedeel word, word dit in minder, groter groepe verdeel, dus is die antwoord groter. Aangesien 6 kleiner as 10 is, gee 120 ÷ 6 ʼn groter antwoord as 120 ÷ 10, sonder dat jy hoef uit te werk dat hulle 20 en 12 is.' },

        // Blok 7 — Vergelyk Hoeveelhede: Vir Elke en Per (20-22, Maklik-Medium)
        { difficulty: 'Easy', question: 'Vir elke 4 potlode in ʼn pakkie is daar 5 penne in ʼn ooreenstemmende pakkie. As daar 20 potlode is, hoeveel penne is daar?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 penne'], explanation: '20 potlode is 20 ÷ 4 = 5 keer soveel as 4. Pas dieselfde skaalfaktor op die penne toe: 5 × 5 = 25 ✓' },
        { difficulty: 'Medium', question: 'ʼn Fietsryer ry 84 km in 4 uur teen ʼn konstante spoed. Hoe ver ry sy in 7 uur?', answer: '147 km', checkMode: 'auto', correctAnswer: '147', correctAnswers: ['147', '147 km'], explanation: 'Tempo per uur: 84 ÷ 4 = 21 km per uur. In 7 uur: 21 × 7 = 147 km ✓' },
        { difficulty: 'Medium', question: 'ʼn Sapresep gebruik 3 dele water vir elke 2 dele konsentraat. Zanele het 10 dele konsentraat en wil sap maak terwyl sy dieselfde patroon volhou. Hoeveel dele water het sy nodig? Verduidelik jou redenering.', answer: '15 dele', checkMode: 'self', explanation: 'Die skaalfaktor is 10 ÷ 2 = 5 (Zanele het 5 keer soveel konsentraat as die basishoeveelheid van 2). Pas dieselfde skaalfaktor op die water toe: 3 × 5 = 15 dele.' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het ʼn sterk begrip van delingsfeite, reste, langdeling, woordprobleme en die vergelyking van hoeveelhede.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd met die meeste delingsvaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Delingsfeite en Feitefamilies (0-3, Maklik)
        { difficulty: 'Easy', question: 'Bereken: 63 ÷ 9', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '9 × 7 = 63, dus 63 ÷ 9 = 7.' },
        { difficulty: 'Easy', question: 'ʼn Onderwyser deel 40 fiches gelyk tussen 8 pare leerders. Hoeveel fiches kry elke paar?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 fiches'], explanation: '40 ÷ 8 = 5. Elke paar kry 5 fiches.' },
        { difficulty: 'Easy', question: 'ʼn Leerder sê die ontbrekende getal in 6 × ___ = 42 is 8. Is dit korrek? Gee die korrekte ontbrekende getal en sê wat 42 ÷ 6 gelyk is.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Die leerder is verkeerd: 6 × 8 = 48, nie 42 nie. Die korrekte ontbrekende getal is 7, aangesien 6 × 7 = 42. Dit beteken ook 42 ÷ 6 = 7.' },
        { difficulty: 'Easy', question: 'Gebruik die feitefamilie vir 3 × 9 = 27 om die twee verwante delingsfeite te skryf.', answer: '27 ÷ 9 = 3 en 27 ÷ 3 = 9', checkMode: 'auto', correctAnswer: '27÷9=3 en 27÷3=9', correctAnswers: ['27÷9=3 en 27÷3=9', '27/9=3 en 27/3=9', '27÷3=9 en 27÷9=3', '27/3=9 en 27/9=3'], explanation: 'Vanaf 3 × 9 = 27, is die twee delingsfeite 27 ÷ 9 = 3 en 27 ÷ 3 = 9.' },

        // Blok 2 — Reste (4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 37 ÷ 8', answer: '4 r 5', checkMode: 'auto', correctAnswer: '4r5', correctAnswers: ['4r5', '4res5'], explanation: '8 × 4 = 32 (naaste sonder om 37 te oorskry). 37 − 32 = 5 oor. 37 ÷ 8 = 4 r 5.' },
        { difficulty: 'Easy-Medium', question: 'Palesa het 51 lekkers en wil dit in partytjiesakkies van 7 lekkers elk verpak. Hoeveel volle sakkies kan sy verpak, en hoeveel lekkers bly oor?', answer: '7 r 2', checkMode: 'auto', correctAnswer: '7r2', correctAnswers: ['7r2', '7res2'], explanation: '7 × 7 = 49 (naaste sonder om 51 te oorskry). 51 − 49 = 2 oor. 51 ÷ 7 = 7 r 2.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het geskryf: "27 ÷ 4 = 5 r 7". Is dit korrek? Indien nie, skryf die korrekte antwoord in die vorm kwosiënt r res.', answer: '6 r 3', checkMode: 'auto', correctAnswer: '6r3', correctAnswers: ['6r3', '6res3', 'nee6r3', 'onkorrek6r3'], explanation: 'Die leerder is verkeerd: ʼn res van 7 kan nie voorkom wanneer deur 4 gedeel word nie, aangesien 7 groter as 4 is. Korrek: 4 × 6 = 24 en 27 − 24 = 3, dus 27 ÷ 4 = 6 r 3.' },
        { difficulty: 'Medium', question: 'ʼn Tenk hou 71 liter, uitgegooi in houers van 9 liter elk. Hoeveel volle houers is daar, en hoeveel liter bly oor?', answer: '7 r 8', checkMode: 'auto', correctAnswer: '7r8', correctAnswers: ['7r8', '7res8'], explanation: '9 × 7 = 63 (naaste sonder om 71 te oorskry). 71 − 63 = 8 oor. 71 ÷ 9 = 7 r 8.' },

        // Blok 3 — Langdeling (8-11, Medium)
        { difficulty: 'Medium', question: 'Bereken met langdeling: 98 ÷ 7', answer: '14', checkMode: 'auto', correctAnswer: '14', explanation: '9 ÷ 7 = 1 r 2, bring 8 af → 28. 28 ÷ 7 = 4. Dus 98 ÷ 7 = 14.' },
        { difficulty: 'Medium', question: 'ʼn Drukker het 512 pamflette gemaak en dit gelyk in 8 dose gebondel. Hoeveel pamflette is in elke doos? Wys jou langdeling-werk.', answer: '64', checkMode: 'self', correctAnswer: '64', explanation: '51 ÷ 8 = 6 r 3, bring 2 af → 32. 32 ÷ 8 = 4. Dus 512 ÷ 8 = 64 pamflette per doos.' },
        { difficulty: 'Medium', question: 'Bereken met langdeling en skryf jou antwoord in die vorm kwosiënt r res: 293 ÷ 8', answer: '36 r 5', checkMode: 'auto', correctAnswer: '36r5', correctAnswers: ['36r5', '36res5'], explanation: '29 ÷ 8 = 3 r 5, bring 3 af → 53. 53 ÷ 8 = 6 r 5. Dus 293 ÷ 8 = 36 r 5.' },
        { difficulty: 'Medium', question: 'ʼn Leerder het langdeling gebruik en gekry: 429 ÷ 12 = 34 r 21. Kontroleer die werk — is hierdie res toelaatbaar vir hierdie deler? Gee die korrekte kwosiënt en res.', answer: '35 r 9', checkMode: 'self', explanation: 'Die leerder is verkeerd: ʼn res van 21 kan nie korrek wees wanneer deur 12 gedeel word nie, aangesien 21 groter as 12 is — nog ʼn volle groep van 12 pas steeds daarin. Korrekte werk: 42 ÷ 12 = 3 r 6 (12 × 3 = 36, 42 − 36 = 6). Bring 9 af → 69. 69 ÷ 12 = 5 r 9 (12 × 5 = 60, 69 − 60 = 9). Dus 429 ÷ 12 = 35 r 9.' },

        // Blok 4 — Woordprobleme: Deel vs Groepeer (12-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Spyseniers het 108 koeksisters om in bakke te rangskik, met 9 koeksisters wat op elke bak pas. Is dit ʼn delingsprobleem of ʼn groeperingsprobleem? Verduidelik kortliks, en gee dan die antwoord.', answer: 'Groepering — 12 bakke', checkMode: 'self', explanation: 'Dit is ʼn groeperingsprobleem: ons ken die totaal (108) en die grootte van elke groep (9), en moet vind hoeveel groepe pas. 108 ÷ 9 = 12 bakke.' },
        { difficulty: 'Medium', question: 'R141 kaartjieverkope word gelyk gedeel tussen 3 liefdadigheidsorganisasies. Hoeveel ontvang elke organisasie? Skryf slegs die getal sonder die R-simbool.', answer: '47', checkMode: 'auto', correctAnswer: '47', explanation: '141 ÷ 3 = 47. Elke organisasie ontvang R47.' },
        { difficulty: 'Medium', question: 'ʼn Leerder rangskik 78 lessenaars in gelyke rye van 6. Skryf die delings-getalsin vir hierdie probleem, en los dit dan op om te vind hoeveel rye daar is.', answer: '78 ÷ 6 = 13', checkMode: 'auto', correctAnswer: '78÷6=13', correctAnswers: ['78÷6=13', '78/6=13', '13'], explanation: 'Die getalsin is 78 ÷ 6. 78 ÷ 6 = 13 rye.' },
        { difficulty: 'Medium', question: 'ʼn Skryfbehoeftewinkel het ʼn boks van 164 kryte ontvang. Die eienaar wil dit in klein houertjies verpak, met 4 kryte in elke houertjie, om apart te verkoop. Hoeveel houertjies kan gevul word?', answer: '41', checkMode: 'auto', correctAnswer: '41', correctAnswers: ['41', '41 houertjies'], explanation: '164 ÷ 4 = 41 houertjies.' },

        // Blok 5 — Veelstap en Toegepaste Probleme (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Motorwaswinkel verdien R288 deur motors te was, gelyk verdeel oor ʼn 8-uur skof. As die eienaar dan R11 op seep vir die volgende skof spandeer, hoeveel van daardie uurlikse tarief bly oor van een uur se verdienste?', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '288 ÷ 8 = 36 (per uur verdien). 36 − 11 = 25. R25 bly oor.' },
        { difficulty: 'Medium-Hard', question: 'ʼn Kerk reël vervoer vir 85 lede na ʼn konferensie. Elke bus vervoer 9 lede. Verduidelik waarom om net 85 ÷ 9 te bereken nie die aantal busse gee wat nodig is nie, en gee die werklike aantal busse wat bespreek moet word.', answer: '10', checkMode: 'self', correctAnswer: '10', correctAnswers: ['10', '10 busse'], explanation: '85 ÷ 9 = 9 r 4. Nege busse vervoer presies 81 lede, maar 4 lede het nog steeds geen sitplek nie, dus is ʼn 10de bus nodig, al is dit nie vol nie. Om net die kwosiënt (9) te gebruik sou lede agterlaat — jy moet altyd oprond wanneer daar ʼn res is. 10 busse in totaal.' },

        // Blok 6 — Redenering en Regverdiging (18-19, Moeilik)
        { difficulty: 'Hard', question: 'Verduidelik, met ʼn voorbeeld, die verskil tussen ʼn delingsprobleem en ʼn groeperingsprobleem, al kan altwee dieselfde delings-getalsin gebruik.', answer: 'Deling: 4 vriende kry elk 8 albasters uit 32. Groepering: 32 albasters in sakkies van 8 verpak maak 4 sakkies.', checkMode: 'self', explanation: 'In ʼn delingsprobleem ken jy die totaal en die aantal groepe, en jy vind hoeveel items in elke groep gaan — byvoorbeeld, om 32 albasters tussen 4 vriende te deel beteken elke vriend kry 32 ÷ 4 = 8 albasters. In ʼn groeperingsprobleem ken jy die totaal en die grootte van elke groep, en jy vind hoeveel groepe jy kan maak — byvoorbeeld, om 32 albasters in sakkies van 8 te verpak beteken jy kan 32 ÷ 8 = 4 sakkies maak. Die getalsin lyk soortgelyk, maar die betekenis van die antwoord is verskillend.' },
        { difficulty: 'Hard', question: 'Sonder om altwee volledig te bereken, verduidelik watter een ʼn groter antwoord gee: 144 ÷ 3 of 144 ÷ 9. Hoe weet jy dit?', answer: '144 ÷ 3 is groter', checkMode: 'self', explanation: 'Wanneer dieselfde getal deur ʼn kleiner deler gedeel word, word dit in minder, groter groepe verdeel, dus is die antwoord groter. Aangesien 3 kleiner as 9 is, gee 144 ÷ 3 ʼn groter antwoord as 144 ÷ 9, sonder dat jy hoef uit te werk dat hulle 48 en 16 is.' },

        // Blok 7 — Vergelyk Hoeveelhede: Vir Elke en Per (20-22, Maklik-Medium)
        { difficulty: 'Easy', question: 'Vir elke 5 doele wat ʼn sokkerspan aanteken, laat hulle 2 doele in. As hulle vanjaar 25 doele aangeteken het, hoeveel doele het hulle ingelaat, volgens dieselfde patroon?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 doele'], explanation: '25 doele is 25 ÷ 5 = 5 keer soveel as 5. Pas dieselfde skaalfaktor op die doele wat ingelaat is toe: 2 × 5 = 10 ✓' },
        { difficulty: 'Medium', question: 'ʼn Trekker ploeg 36 hektaar in 4 uur teen ʼn konstante tempo. Hoeveel hektaar ploeg dit in 9 uur?', answer: '81 hektaar', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81', '81 hektaar'], explanation: 'Tempo per uur: 36 ÷ 4 = 9 hektaar per uur. In 9 uur: 9 × 9 = 81 hektaar ✓' },
        { difficulty: 'Medium', question: 'ʼn Verfmengsel gebruik 2 blikke blou vir elke 5 blikke wit. ʼn Skilder het 8 blikke blou en wil dieselfde patroon volhou. Hoeveel blikke wit het hy nodig? Verduidelik jou redenering.', answer: '20 blikke', checkMode: 'self', explanation: 'Die skaalfaktor is 8 ÷ 2 = 4 (die skilder het 4 keer soveel blou as die basishoeveelheid van 2). Pas dieselfde skaalfaktor op die wit toe: 5 × 4 = 20 blikke.' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het ʼn sterk begrip van delingsfeite, reste, langdeling, woordprobleme en die vergelyking van hoeveelhede.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd met die meeste delingsvaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  topicPractice: [
    // ── AFDELING 1 — Wat is Deling? ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skryf die volgende as ʼn delings-getalsin:\n\n' +
        'Deel 20 lekkers gelyk tussen 4 vriende. Hoeveel lekkers kry elke vriend?\n\n' +
        'Skryf jou antwoord as ʼn volledige getalsin.',
      answer: '20 ÷ 4 = 5',
      correctAnswer: '20÷4=5',
      correctAnswers: ['20÷4=5', '20/4=5'],
      explanation:
        'Dit is ʼn delingsprobleem — deel 20 gelyk in 4 groepe.\n' +
        '20 ÷ 4 = 5. Elke vriend kry 5 lekkers.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Boer het 36 eiers. Hy verpak dit in bokse van 9. Hoeveel bokse vul hy?\n\n' +
        'a) Is dit ʼn delings- of groeperingsprobleem?\n' +
        'b) Skryf die delings-getalsin.\n' +
        'c) Bereken die antwoord.',
      answer: 'a) Groepering  b) 36 ÷ 9  c) 4',
      parts: [
        {
          label: 'a) Deling of groepering?',
          correctAnswer: 'groepering',
          correctAnswers: ['groepering', 'ngroeperingsprobleem', 'ditisngroeperingsprobleem'],
          explanation:
            '"Bokse van 9" vertel jou die groepgrootte — jy moet vind hoeveel groepe pas. Dit is ʼn groeperingsprobleem.',
        },
        {
          label: 'b) Delings-getalsin',
          correctAnswer: '36÷9',
          correctAnswers: ['36÷9', '36÷9=4', '36/9', '36/9=4'],
          explanation: 'Totale eiers = 36 (deeltal), eiers per boks = 9 (deler): 36 ÷ 9.',
        },
        {
          label: 'c) Antwoord',
          correctAnswer: '4',
          explanation: '9 × 4 = 36, dus 36 ÷ 9 = 4. Die boer vul 4 bokse.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Skool het 48 stoele om gelyk in 6 klaskamers te rangskik. Hoeveel stoele gaan in elke klaskamer?\n\n' +
        'Wys jou werk. Identifiseer ook of dit ʼn delings- of groeperingsprobleem is.',
      answer:
        'Dit is ʼn delingsprobleem — jy ken die totaal (48 stoele) en die aantal groepe (6 klaskamers), en jy vind hoeveel in elke groep is.\n\n' +
        'Werk: 48 ÷ 6 = 8\n\n' +
        'Elke klaskamer kry 8 stoele.',
    },

    // ── AFDELING 2 — Deling as die Inverse van Vermenigvuldiging ─────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Gebruik die feitefamilie vir 6 × 7 = 42 om twee delingsfeite te skryf.\n\n' +
        'Skryf elkeen as ʼn volledige getalsin.',
      answer: '42 ÷ 7 = 6  en  42 ÷ 6 = 7',
      parts: [
        {
          label: 'Eerste delingsfeit',
          correctAnswer: '42÷7=6',
          correctAnswers: ['42÷7=6', '42÷6=7', '42/7=6', '42/6=7'],
          explanation: 'Vanaf 6 × 7 = 42, is die twee delingsfeite: 42 ÷ 7 = 6 en 42 ÷ 6 = 7.',
        },
        {
          label: 'Tweede delingsfeit',
          correctAnswer: '42÷6=7',
          correctAnswers: ['42÷7=6', '42÷6=7', '42/7=6', '42/6=7'],
          explanation: 'Vanaf 6 × 7 = 42, is die twee delingsfeite: 42 ÷ 7 = 6 en 42 ÷ 6 = 7.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Gebruik jou vermenigvuldigingstafels om te bereken:\n\n' +
        'a) 56 ÷ 8\n' +
        'b) 72 ÷ 9\n' +
        'c) 45 ÷ 5',
      answer: 'a) 7  b) 8  c) 9',
      parts: [
        {
          label: 'a) 56 ÷ 8',
          correctAnswer: '7',
          explanation: 'Dink: wat × 8 = 56? → 7 × 8 = 56. Dus 56 ÷ 8 = 7.',
        },
        {
          label: 'b) 72 ÷ 9',
          correctAnswer: '8',
          explanation: 'Dink: wat × 9 = 72? → 8 × 9 = 72. Dus 72 ÷ 9 = 8.',
        },
        {
          label: 'c) 45 ÷ 5',
          correctAnswer: '9',
          explanation: 'Dink: wat × 5 = 45? → 9 × 5 = 45. Dus 45 ÷ 5 = 9.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Die antwoord op ʼn deling is 8. Een van die getalle in die probleem is 64. Wat is die ander getal?\n\n' +
        'Skryf die volledige feitefamilie vir hierdie drie getalle.',
      answer:
        'Die ander getal is ook 8 (aangesien 64 ÷ 8 = 8).\n\n' +
        'Volledige feitefamilie:\n' +
        '• 8 × 8 = 64\n' +
        '• 64 ÷ 8 = 8\n\n' +
        'Omdat albei faktore dieselfde is (8 is ʼn volkome vierkant), is daar net een unieke delingsfeit in hierdie familie.',
    },

    // ── AFDELING 3 — Deel met Reste ──────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Bereken en skryf die volledige antwoord insluitend die res:\n\n' +
        '19 ÷ 4\n\n' +
        'Skryf jou antwoord in die vorm: kwosiënt r res.',
      answer: '4 r 3',
      correctAnswer: '4r3',
      correctAnswers: ['4r3', '4res3', '4r03'],
      explanation:
        '4 × 4 = 16, wat die naaste veelvoud van 4 is sonder om oor 19 te gaan.\n' +
        '19 − 16 = 3 oor.\n' +
        '19 ÷ 4 = 4 r 3.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken elke deling en skryf die kwosiënt en res.\n' +
        'Skryf elke antwoord in die vorm: kwosiënt r res.\n\n' +
        'a) 27 ÷ 5\n' +
        'b) 38 ÷ 6\n' +
        'c) 43 ÷ 8',
      answer: 'a) 5 r 2  b) 6 r 2  c) 5 r 3',
      parts: [
        {
          label: 'a) 27 ÷ 5',
          correctAnswer: '5r2',
          correctAnswers: ['5r2', '5res2'],
          explanation:
            '5 × 5 = 25 (naaste veelvoud sonder om 27 te oorskry).\n' +
            '27 − 25 = 2 oor.\n' +
            '27 ÷ 5 = 5 r 2.',
        },
        {
          label: 'b) 38 ÷ 6',
          correctAnswer: '6r2',
          correctAnswers: ['6r2', '6res2'],
          explanation:
            '6 × 6 = 36 (naaste veelvoud sonder om 38 te oorskry).\n' +
            '38 − 36 = 2 oor.\n' +
            '38 ÷ 6 = 6 r 2.',
        },
        {
          label: 'c) 43 ÷ 8',
          correctAnswer: '5r3',
          correctAnswers: ['5r3', '5res3'],
          explanation:
            '8 × 5 = 40 (naaste veelvoud sonder om 43 te oorskry).\n' +
            '43 − 40 = 3 oor.\n' +
            '43 ÷ 8 = 5 r 3.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Onderwyser het 35 plakkers om gelyk aan 8 leerders te gee.\n\n' +
        'a) Hoeveel plakkers kry elke leerder?\n' +
        'b) Hoeveel plakkers bly oor?\n' +
        'c) Wat kan die onderwyser met die oorblywende plakkers doen?',
      answer:
        '35 ÷ 8:\n' +
        '8 × 4 = 32 (naaste veelvoud sonder om 35 te oorskry).\n' +
        '35 − 32 = 3 oor.\n\n' +
        'a) Elke leerder kry 4 plakkers.\n' +
        'b) 3 plakkers bly oor.\n' +
        'c) Die onderwyser kan dit vir volgende keer hou, dit as ʼn prys gee, of ekstra plakkers aan 3 gelukkige leerders gee.',
    },

    // ── AFDELING 4 — Langdeling ──────────────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Bereken met langdeling. Skryf slegs die finale antwoord.\n\n' +
        '84 ÷ 4',
      answer: '21',
      correctAnswer: '21',
      explanation:
        '84 ÷ 4 met langdeling:\n' +
        '• Deel 8 ÷ 4 = 2. Vermenigvuldig 2 × 4 = 8. Trek af 8 − 8 = 0. Bring 4 af.\n' +
        '• Deel 4 ÷ 4 = 1. Vermenigvuldig 1 × 4 = 4. Trek af 4 − 4 = 0.\n' +
        '84 ÷ 4 = 21.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken met langdeling. Skryf slegs die finale antwoord vir elkeen.\n\n' +
        'a) 96 ÷ 6\n' +
        'b) 125 ÷ 5',
      answer: 'a) 16  b) 25',
      parts: [
        {
          label: 'a) 96 ÷ 6',
          correctAnswer: '16',
          explanation:
            '96 ÷ 6 met langdeling:\n' +
            '• Deel 9 ÷ 6 = 1. Vermenigvuldig 1 × 6 = 6. Trek af 9 − 6 = 3. Bring 6 af → 36.\n' +
            '• Deel 36 ÷ 6 = 6. Vermenigvuldig 6 × 6 = 36. Trek af 36 − 36 = 0.\n' +
            '96 ÷ 6 = 16.',
        },
        {
          label: 'b) 125 ÷ 5',
          correctAnswer: '25',
          explanation:
            '125 ÷ 5 met langdeling:\n' +
            '• Deel 12 ÷ 5 = 2. Vermenigvuldig 2 × 5 = 10. Trek af 12 − 10 = 2. Bring 5 af → 25.\n' +
            '• Deel 25 ÷ 5 = 5. Vermenigvuldig 5 × 5 = 25. Trek af 25 − 25 = 0.\n' +
            '125 ÷ 5 = 25.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Skool versamel 168 boeke om gelyk tussen 7 klaskamers te deel. Hoeveel boeke kry elke klaskamer?\n\n' +
        'Gebruik langdeling en wys al jou werkstappe.',
      answer:
        '168 ÷ 7 met langdeling:\n\n' +
        '• Deel 16 ÷ 7 = 2. Vermenigvuldig 2 × 7 = 14. Trek af 16 − 14 = 2. Bring 8 af → 28.\n' +
        '• Deel 28 ÷ 7 = 4. Vermenigvuldig 4 × 7 = 28. Trek af 28 − 28 = 0.\n\n' +
        '168 ÷ 7 = 24.\n' +
        'Elke klaskamer kry 24 boeke.',
    },

    // ── AFDELING 5 — Deling Woordprobleme ────────────────────────────────────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'ʼn Bakkery bak 72 koekies en verpak dit in bokse van 8. Hoeveel bokse vul hulle?\n\n' +
        'Skryf slegs die getal.',
      answer: '9',
      correctAnswer: '9',
      correctAnswers: ['9', '9bokse'],
      explanation:
        'Dit is ʼn groeperingsprobleem — hoeveel groepe van 8 pas binne 72?\n' +
        'Dink: 8 × 9 = 72. Dus 72 ÷ 8 = 9.\n' +
        'Die bakkery vul 9 bokse.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'R240 word gelyk gedeel tussen 6 vriende.\n\n' +
        'a) Hoeveel kry elke vriend? Skryf slegs die getal sonder die R-simbool.\n' +
        'b) As een vriend R15 aan liefdadigheid gee, hoeveel het daardie vriend oor? Skryf slegs die getal sonder die R-simbool.',
      answer: 'a) 40  b) 25',
      parts: [
        {
          label: 'a) Elke vriend kry R…',
          correctAnswer: '40',
          explanation:
            'Dit is ʼn delingsprobleem: 240 ÷ 6.\n' +
            'Dink: 6 × 40 = 240. Dus kry elke vriend R40.',
        },
        {
          label: 'b) Na R15 aan liefdadigheid',
          correctAnswer: '25',
          explanation:
            'R40 − R15 = R25.\n' +
            'Daardie vriend het R25 oor.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Boer het 156 appels. Hy verkoop dit in sakkies van 6.\n\n' +
        'a) Hoeveel volle sakkies kan hy maak? Skryf slegs die getal.\n' +
        'b) Hoeveel appels bly oor? Skryf slegs die getal.\n' +
        'c) As hy elke sakkie vir R12 verkoop, hoeveel geld maak hy uit die volle sakkies? Skryf slegs die getal sonder die R-simbool.',
      answer: 'a) 26  b) 0  c) 312',
      parts: [
        {
          label: 'a) Volle sakkies',
          correctAnswer: '26',
          explanation:
            '156 ÷ 6 met langdeling:\n' +
            '• 15 ÷ 6 = 2. 2 × 6 = 12. 15 − 12 = 3. Bring 6 af → 36.\n' +
            '• 36 ÷ 6 = 6. 6 × 6 = 36. 36 − 36 = 0.\n' +
            '156 ÷ 6 = 26. Die boer maak 26 volle sakkies.',
        },
        {
          label: 'b) Appels oor',
          correctAnswer: '0',
          explanation:
            '156 ÷ 6 = 26 met geen res.\n' +
            '0 appels bly oor.',
        },
        {
          label: 'c) Totale geld uit verkope (R…)',
          correctAnswer: '312',
          explanation:
            '26 sakkies × R12 per sakkie:\n' +
            '20 × 12 = 240 en 6 × 12 = 72.\n' +
            '240 + 72 = R312.',
        },
      ],
    },

    // ── AFDELING 6 — Vergelyk Hoeveelhede: "Vir Elke" en "Per" Probleme ──────
    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Vir elke 3 appels in ʼn mandjie is daar 2 lemoene.\n\n' +
        'As daar 15 appels is, hoeveel lemoene is daar? Skryf slegs die getal.',
      answer: '10',
      correctAnswer: '10',
      correctAnswers: ['10', '10 lemoene'],
      explanation:
        'Die skaalfaktor is 15 ÷ 3 = 5.\n' +
        'Pas dieselfde skaalfaktor op die lemoene toe: 2 × 5 = 10.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Motor ry 180 km in 3 uur teen ʼn konstante spoed.\n\n' +
        'a) Wat is die tempo — hoe ver ry dit in 1 uur?\n' +
        'b) Hoe ver sal dit in 5 uur ry?',
      answer: 'a) 60 km  b) 300 km',
      parts: [
        {
          label: 'a) Afstand in 1 uur',
          correctAnswer: '60',
          explanation: 'Deel die afstand deur die tyd: 180 ÷ 3 = 60 km per uur.',
        },
        {
          label: 'b) Afstand in 5 uur',
          correctAnswer: '300',
          explanation: 'Vermenigvuldig die tempo vir 1 uur met 5: 60 × 5 = 300 km.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Spyseniers se pannekoekbeslag-resep gebruik 2 koppies melk vir elke 3 koppies meel. Sy moet ʼn groot bondel maak met 15 koppies meel, terwyl sy dieselfde patroon volhou.\n\n' +
        'Hoeveel koppies melk word benodig? Wys jou werk en verduidelik hoe jy die skaalfaktor gevind het.',
      answer:
        'Skaalfaktor: 15 ÷ 3 = 5 (daar is 5 keer soveel meel as die basishoeveelheid van 3 koppies).\n\n' +
        'Pas dieselfde skaalfaktor op die melk toe: 2 × 5 = 10.\n\n' +
        'Sy het 10 koppies melk nodig.',
    },
  ],
}
