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
      diagramPlaceholder: 'Feitefamilie-driehoek wat 7 x 8 = 56 wys met die twee verwante delingsfeite',

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
      diagramPlaceholder: 'Langdeling-uitleg wat 156 gedeel deur 4 wys met elke stap kleur-gekodeer',

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
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — GRONDBEGINSELS: DELINGSFEITE (DEEL, GROEPEER, TAFELS) (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondbeginsels',
      questions: [
        { difficulty: 'Easy', question: 'Deel 20 lekkers gelyk tussen 4 vriende. Hoeveel lekkers kry elke vriend?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5 lekkers'], explanation: '20 ÷ 4 = 5. Elke vriend kry 5 lekkers.' },
        { difficulty: 'Easy', question: 'Bereken: 24 ÷ 6', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '6 × 4 = 24, dus 24 ÷ 6 = 4.' },
        { difficulty: 'Easy', question: 'ʼn Boer verpak 36 eiers in bokse van 9. Hoeveel bokse vul hy?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 bokse'], explanation: '9 × 4 = 36, dus 36 ÷ 9 = 4 bokse.' },
        { difficulty: 'Easy', question: 'Bereken: 42 ÷ 7', answer: '6', checkMode: 'auto', correctAnswer: '6', explanation: '7 × 6 = 42, dus 42 ÷ 7 = 6.' },
        { difficulty: 'Easy', question: 'Bereken: 45 ÷ 5', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '5 × 9 = 45, dus 45 ÷ 5 = 9.' },
        { difficulty: 'Medium', question: 'Gebruik jou vermenigvuldigingstafels om te bereken: 56 ÷ 8', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: 'Dink: wat × 8 = 56? → 7 × 8 = 56. Dus 56 ÷ 8 = 7.' },
        { difficulty: 'Medium', question: 'Gebruik jou vermenigvuldigingstafels om te bereken: 63 ÷ 7', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Dink: wat × 7 = 63? → 9 × 7 = 63. Dus 63 ÷ 7 = 9.' },
        { difficulty: 'Medium', question: 'Gebruik jou vermenigvuldigingstafels om te bereken: 72 ÷ 9', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: 'Dink: wat × 9 = 72? → 8 × 9 = 72. Dus 72 ÷ 9 = 8.' },
        { difficulty: 'Medium', question: 'Gebruik jou vermenigvuldigingstafels om te bereken: 81 ÷ 9', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: 'Dink: wat × 9 = 81? → 9 × 9 = 81. Dus 81 ÷ 9 = 9.' },
        { difficulty: 'Medium', question: '48 leerders word in 6 gelyke spanne geplaas. Hoeveel leerders is in elke span?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 leerders'], explanation: '6 × 8 = 48, dus 48 ÷ 6 = 8 leerders per span.' },
        { difficulty: 'Medium', question: 'Bereken: 54 ÷ 6', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '6 × 9 = 54, dus 54 ÷ 6 = 9.' },
        { difficulty: 'Medium', question: 'Bereken: 35 ÷ 5', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '5 × 7 = 35, dus 35 ÷ 5 = 7.' },
        { difficulty: 'Medium', question: 'Bereken: 64 ÷ 8', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '8 × 8 = 64, dus 64 ÷ 8 = 8.' },
        { difficulty: 'Easy', question: '18 beskuitjies word in sakkies van 3 verpak. Hoeveel sakkies word benodig?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 sakkies'], explanation: '3 × 6 = 18, dus 18 ÷ 3 = 6 sakkies.' },
        { difficulty: 'Easy', question: 'Bereken: 27 ÷ 3', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '3 × 9 = 27, dus 27 ÷ 3 = 9.' },
        { difficulty: 'Easy', question: 'Bereken: 32 ÷ 4', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '4 × 8 = 32, dus 32 ÷ 4 = 8.' },
        { difficulty: 'Easy', question: 'Bereken: 18 ÷ 2', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '2 × 9 = 18, dus 18 ÷ 2 = 9.' },
        { difficulty: 'Easy', question: 'Bereken: 40 ÷ 5', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '5 × 8 = 40, dus 40 ÷ 5 = 8.' },
        { difficulty: 'Easy', question: 'Bereken: 16 ÷ 4', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '4 × 4 = 16, dus 16 ÷ 4 = 4.' },
        { difficulty: 'Easy', question: 'Bereken: 28 ÷ 7', answer: '4', checkMode: 'auto', correctAnswer: '4', explanation: '7 × 4 = 28, dus 28 ÷ 7 = 4.' },
        { difficulty: 'Medium', question: 'Gebruik die feitefamilie vir 6 × 7 = 42 om die twee verwante delingsfeite te skryf.', answer: '42 ÷ 7 = 6 en 42 ÷ 6 = 7', checkMode: 'auto', correctAnswer: '42÷7=6 en 42÷6=7', correctAnswers: ['42÷7=6 en 42÷6=7', '42/7=6 en 42/6=7', '42÷6=7 en 42÷7=6', '42/6=7 en 42/7=6'], explanation: 'Vanaf 6 × 7 = 42, is die twee delingsfeite 42 ÷ 7 = 6 en 42 ÷ 6 = 7.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling: 96 ÷ 4', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: '9 ÷ 4 = 2 r 1, bring 6 af → 16. 16 ÷ 4 = 4. Dus 96 ÷ 4 = 24.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling: 84 ÷ 4', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: '8 ÷ 4 = 2, bring 4 af → 4. 4 ÷ 4 = 1. Dus 84 ÷ 4 = 21.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling: 100 ÷ 5', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: '10 ÷ 5 = 2, bring 0 af → 0. 0 ÷ 5 = 0. Dus 100 ÷ 5 = 20.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling: 144 ÷ 6', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: '14 ÷ 6 = 2 r 2, bring 4 af → 24. 24 ÷ 6 = 4. Dus 144 ÷ 6 = 24.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy ken jou delingsfeite en vermenigvuldigingstafels baie goed.' },
        { minScore: 19, message: 'Goeie werk! Jy is selfversekerd met delingsfeite — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die vermenigvuldigingstafels weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — DELING MET RESTE EN GROTER GETALLE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Reste en Groter Getalle',
      questions: [
        { difficulty: 'Easy', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 19 ÷ 4', answer: '4 r 3', checkMode: 'auto', correctAnswer: '4r3', correctAnswers: ['4r3', '4res3', '4r03'], explanation: '4 × 4 = 16 (naaste sonder om 19 te oorskry). 19 − 16 = 3 oor. 19 ÷ 4 = 4 r 3.' },
        { difficulty: 'Easy', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 27 ÷ 5', answer: '5 r 2', checkMode: 'auto', correctAnswer: '5r2', correctAnswers: ['5r2', '5res2'], explanation: '5 × 5 = 25 (naaste sonder om 27 te oorskry). 27 − 25 = 2 oor. 27 ÷ 5 = 5 r 2.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 38 ÷ 6', answer: '6 r 2', checkMode: 'auto', correctAnswer: '6r2', correctAnswers: ['6r2', '6res2'], explanation: '6 × 6 = 36 (naaste sonder om 38 te oorskry). 38 − 36 = 2 oor. 38 ÷ 6 = 6 r 2.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 43 ÷ 8', answer: '5 r 3', checkMode: 'auto', correctAnswer: '5r3', correctAnswers: ['5r3', '5res3'], explanation: '8 × 5 = 40 (naaste sonder om 43 te oorskry). 43 − 40 = 3 oor. 43 ÷ 8 = 5 r 3.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 29 ÷ 4', answer: '7 r 1', checkMode: 'auto', correctAnswer: '7r1', correctAnswers: ['7r1', '7res1'], explanation: '4 × 7 = 28 (naaste sonder om 29 te oorskry). 29 − 28 = 1 oor. 29 ÷ 4 = 7 r 1.' },
        { difficulty: 'Easy', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 17 ÷ 5', answer: '3 r 2', checkMode: 'auto', correctAnswer: '3r2', correctAnswers: ['3r2', '3res2'], explanation: '5 × 3 = 15 (naaste sonder om 17 te oorskry). 17 − 15 = 2 oor. 17 ÷ 5 = 3 r 2.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 25 ÷ 6', answer: '4 r 1', checkMode: 'auto', correctAnswer: '4r1', correctAnswers: ['4r1', '4res1'], explanation: '6 × 4 = 24 (naaste sonder om 25 te oorskry). 25 − 24 = 1 oor. 25 ÷ 6 = 4 r 1.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 35 ÷ 8', answer: '4 r 3', checkMode: 'auto', correctAnswer: '4r3', correctAnswers: ['4r3', '4res3'], explanation: '8 × 4 = 32 (naaste sonder om 35 te oorskry). 35 − 32 = 3 oor. 35 ÷ 8 = 4 r 3.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 22 ÷ 3', answer: '7 r 1', checkMode: 'auto', correctAnswer: '7r1', correctAnswers: ['7r1', '7res1'], explanation: '3 × 7 = 21 (naaste sonder om 22 te oorskry). 22 − 21 = 1 oor. 22 ÷ 3 = 7 r 1.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 31 ÷ 6', answer: '5 r 1', checkMode: 'auto', correctAnswer: '5r1', correctAnswers: ['5r1', '5res1'], explanation: '6 × 5 = 30 (naaste sonder om 31 te oorskry). 31 − 30 = 1 oor. 31 ÷ 6 = 5 r 1.' },
        { difficulty: 'Hard', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 44 ÷ 9', answer: '4 r 8', checkMode: 'auto', correctAnswer: '4r8', correctAnswers: ['4r8', '4res8'], explanation: '9 × 4 = 36 (naaste sonder om 44 te oorskry). 44 − 36 = 8 oor. 44 ÷ 9 = 4 r 8.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 50 ÷ 7', answer: '7 r 1', checkMode: 'auto', correctAnswer: '7r1', correctAnswers: ['7r1', '7res1'], explanation: '7 × 7 = 49 (naaste sonder om 50 te oorskry). 50 − 49 = 1 oor. 50 ÷ 7 = 7 r 1.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 33 ÷ 4', answer: '8 r 1', checkMode: 'auto', correctAnswer: '8r1', correctAnswers: ['8r1', '8res1'], explanation: '4 × 8 = 32 (naaste sonder om 33 te oorskry). 33 − 32 = 1 oor. 33 ÷ 4 = 8 r 1.' },
        { difficulty: 'Hard', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 58 ÷ 9', answer: '6 r 4', checkMode: 'auto', correctAnswer: '6r4', correctAnswers: ['6r4', '6res4'], explanation: '9 × 6 = 54 (naaste sonder om 58 te oorskry). 58 − 54 = 4 oor. 58 ÷ 9 = 6 r 4.' },
        { difficulty: 'Medium', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 47 ÷ 5', answer: '9 r 2', checkMode: 'auto', correctAnswer: '9r2', correctAnswers: ['9r2', '9res2'], explanation: '5 × 9 = 45 (naaste sonder om 47 te oorskry). 47 − 45 = 2 oor. 47 ÷ 5 = 9 r 2.' },
        { difficulty: 'Hard', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 62 ÷ 7', answer: '8 r 6', checkMode: 'auto', correctAnswer: '8r6', correctAnswers: ['8r6', '8res6'], explanation: '7 × 8 = 56 (naaste sonder om 62 te oorskry). 62 − 56 = 6 oor. 62 ÷ 7 = 8 r 6.' },
        { difficulty: 'Hard', question: 'Bereken en skryf jou antwoord in die vorm kwosiënt r res: 75 ÷ 8', answer: '9 r 3', checkMode: 'auto', correctAnswer: '9r3', correctAnswers: ['9r3', '9res3'], explanation: '8 × 9 = 72 (naaste sonder om 75 te oorskry). 75 − 72 = 3 oor. 75 ÷ 8 = 9 r 3.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 91 ÷ 4', answer: '22 r 3', checkMode: 'auto', correctAnswer: '22r3', correctAnswers: ['22r3', '22res3'], explanation: '9 ÷ 4 = 2 r 1, bring 1 af → 11. 11 ÷ 4 = 2 r 3. Dus 91 ÷ 4 = 22 r 3.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 99 ÷ 7', answer: '14 r 1', checkMode: 'auto', correctAnswer: '14r1', correctAnswers: ['14r1', '14res1'], explanation: '9 ÷ 7 = 1 r 2, bring 9 af → 29. 29 ÷ 7 = 4 r 1. Dus 99 ÷ 7 = 14 r 1.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 123 ÷ 5', answer: '24 r 3', checkMode: 'auto', correctAnswer: '24r3', correctAnswers: ['24r3', '24res3'], explanation: '12 ÷ 5 = 2 r 2, bring 3 af → 23. 23 ÷ 5 = 4 r 3. Dus 123 ÷ 5 = 24 r 3.' },
        { difficulty: 'Medium', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 156 ÷ 4', answer: '39', checkMode: 'auto', correctAnswer: '39', explanation: '15 ÷ 4 = 3 r 3, bring 6 af → 36. 36 ÷ 4 = 9. Dus 156 ÷ 4 = 39.' },
        { difficulty: 'Medium', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 168 ÷ 7', answer: '24', checkMode: 'auto', correctAnswer: '24', explanation: '16 ÷ 7 = 2 r 2, bring 8 af → 28. 28 ÷ 7 = 4. Dus 168 ÷ 7 = 24.' },
        { difficulty: 'Medium', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 96 ÷ 6', answer: '16', checkMode: 'auto', correctAnswer: '16', explanation: '9 ÷ 6 = 1 r 3, bring 6 af → 36. 36 ÷ 6 = 6. Dus 96 ÷ 6 = 16.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 85 ÷ 3', answer: '28 r 1', checkMode: 'auto', correctAnswer: '28r1', correctAnswers: ['28r1', '28res1'], explanation: '8 ÷ 3 = 2 r 2, bring 5 af → 25. 25 ÷ 3 = 8 r 1. Dus 85 ÷ 3 = 28 r 1.' },
        { difficulty: 'Hard', question: 'Bereken met langdeling. Skryf slegs die finale antwoord: 137 ÷ 6', answer: '22 r 5', checkMode: 'auto', correctAnswer: '22r5', correctAnswers: ['22r5', '22res5'], explanation: '13 ÷ 6 = 2 r 1, bring 7 af → 17. 17 ÷ 6 = 2 r 5. Dus 137 ÷ 6 = 22 r 5.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het deling met reste en langdeling bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die res- en langdeling-voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — DELING WOORDPROBLEME: DEEL EN GROEPEER (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Woordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Bakkery bak 72 koekies en verpak dit in bokse van 8. Hoeveel bokse vul hulle?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 bokse'], explanation: 'Dit is ʼn groeperingsprobleem: 72 ÷ 8. Dink: 8 × 9 = 72. Die bakkery vul 9 bokse.' },
        { difficulty: 'Easy', question: 'R150 word gelyk gedeel tussen 5 kinders. Hoeveel kry elke kind? Skryf slegs die getal sonder die R-simbool.', answer: '30', checkMode: 'auto', correctAnswer: '30', explanation: 'Dit is ʼn delingsprobleem: 150 ÷ 5 = 30. Elke kind kry R30.' },
        { difficulty: 'Easy', question: 'ʼn Onderwyser het 64 potlode om gelyk tussen 8 leerders te deel. Hoeveel potlode kry elke leerder?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 potlode'], explanation: 'Dit is ʼn delingsprobleem: 64 ÷ 8 = 8. Elke leerder kry 8 potlode.' },
        { difficulty: 'Easy', question: 'Lerato verpak 90 lekkers in sakkies van 6. Hoeveel sakkies vul sy?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 sakkies'], explanation: 'Dit is ʼn groeperingsprobleem: 90 ÷ 6 = 15 sakkies.' },
        { difficulty: 'Medium', question: 'R84 word gelyk gedeel tussen 4 vriende. Hoeveel kry elke vriend? Skryf slegs die getal sonder die R-simbool.', answer: '21', checkMode: 'auto', correctAnswer: '21', explanation: '84 ÷ 4 = 21. Elke vriend kry R21.' },
        { difficulty: 'Medium', question: 'ʼn Boer het 108 appels en verpak dit in bokse van 9. Hoeveel bokse vul hy?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 bokse'], explanation: '108 ÷ 9 = 12 bokse.' },
        { difficulty: 'Medium', question: 'Sipho pluk 45 lemoene en verpak dit gelyk in 5 mandjies. Hoeveel lemoene gaan in elke mandjie?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 lemoene'], explanation: '45 ÷ 5 = 9 lemoene per mandjie.' },
        { difficulty: 'Medium', question: 'ʼn Bakkery bak 144 muffins en verpak dit in bokse van 6. Hoeveel bokse vul hulle?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 bokse'], explanation: '144 ÷ 6 = 24 bokse.' },
        { difficulty: 'Medium', question: 'R200 word gelyk gedeel tussen 8 leerders. Hoeveel kry elke leerder? Skryf slegs die getal sonder die R-simbool.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '200 ÷ 8 = 25. Elke leerder kry R25.' },
        { difficulty: 'Medium', question: 'ʼn Boer plant 96 saadjies in 8 gelyke rye. Hoeveel saadjies is in elke ry?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12 saadjies'], explanation: '96 ÷ 8 = 12 saadjies per ry.' },
        { difficulty: 'Medium', question: 'ʼn Biblioteek het 132 boeke om gelyk op 6 rakke te rangskik. Hoeveel boeke gaan op elke rak?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 boeke'], explanation: '132 ÷ 6 = 22 boeke per rak.' },
        { difficulty: 'Easy', question: 'R63 word gelyk gedeel tussen 7 vriende. Hoeveel kry elke vriend? Skryf slegs die getal sonder die R-simbool.', answer: '9', checkMode: 'auto', correctAnswer: '9', explanation: '63 ÷ 7 = 9. Elke vriend kry R9.' },
        { difficulty: 'Easy', question: 'ʼn Onderwyser het 77 potlode om gelyk tussen 7 leerders te deel. Hoeveel potlode kry elke leerder?', answer: '11', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', '11 potlode'], explanation: '77 ÷ 7 = 11 potlode per leerder.' },
        { difficulty: 'Medium', question: 'Amahle het 52 lekkers om gelyk tussen 6 vriende te deel. Hoeveel lekkers kry elke vriend, en hoeveel bly oor? Skryf jou antwoord in die vorm kwosiënt r res.', answer: '8 r 4', checkMode: 'auto', correctAnswer: '8r4', correctAnswers: ['8r4', '8res4'], explanation: '6 × 8 = 48 (naaste sonder om 52 te oorskry). 52 − 48 = 4 oor. 52 ÷ 6 = 8 r 4.' },
        { difficulty: 'Medium', question: 'ʼn Onderwyser het 39 plakkers om gelyk aan 5 leerders te gee. Hoeveel plakkers kry elke leerder, en hoeveel bly oor? Skryf jou antwoord in die vorm kwosiënt r res.', answer: '7 r 4', checkMode: 'auto', correctAnswer: '7r4', correctAnswers: ['7r4', '7res4'], explanation: '5 × 7 = 35 (naaste sonder om 39 te oorskry). 39 − 35 = 4 oor. 39 ÷ 5 = 7 r 4.' },
        { difficulty: 'Medium', question: 'R156 word gelyk gedeel tussen 12 leerders. Hoeveel kry elke leerder? Skryf slegs die getal sonder die R-simbool.', answer: '13', checkMode: 'auto', correctAnswer: '13', explanation: '156 ÷ 12 = 13. Elke leerder kry R13.' },
        { difficulty: 'Medium', question: 'ʼn Bouer het 200 bakstene en stapel dit in hope van 8. Hoeveel hope maak hy?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 hope'], explanation: '200 ÷ 8 = 25 hope.' },
        { difficulty: 'Hard', question: 'ʼn Boer het 91 eiers en verpak dit in bokse van 6. Hoeveel volle bokse vul hy, en hoeveel eiers bly oor? Skryf jou antwoord in die vorm kwosiënt r res.', answer: '15 r 1', checkMode: 'auto', correctAnswer: '15r1', correctAnswers: ['15r1', '15res1'], explanation: '6 × 15 = 90 (naaste sonder om 91 te oorskry). 91 − 90 = 1 oor. 91 ÷ 6 = 15 r 1.' },
        { difficulty: 'Medium', question: 'ʼn Skool samel R175 in en deel dit gelyk tussen 5 klasse. Hoeveel kry elke klas? Skryf slegs die getal sonder die R-simbool.', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: '175 ÷ 5 = 35. Elke klas kry R35.' },
        { difficulty: 'Medium', question: 'ʼn Skoolsaal het 128 stoele wat gelyk in 8 rye gerangskik is. Hoeveel stoele is in elke ry?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 stoele'], explanation: '128 ÷ 8 = 16 stoele per ry.' },
        { difficulty: 'Hard', question: 'ʼn Bakkery bak 54 koeksisters en verpak dit in bokse van 6. As elke boks vir R9 verkoop word, hoeveel bokse word gemaak? Skryf slegs die getal.', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 bokse'], explanation: '54 ÷ 6 = 9 bokse.' },
        { difficulty: 'Medium', question: '180 albasters word gelyk gedeel tussen 9 vriende. Hoeveel albasters kry elke vriend?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 albasters'], explanation: '180 ÷ 9 = 20 albasters per vriend.' },
        { difficulty: 'Medium', question: 'ʼn Skool samel R120 in en verdeel dit gelyk tussen 6 liefdadigheidsorganisasies. Hoeveel kry elke organisasie? Skryf slegs die getal sonder die R-simbool.', answer: '20', checkMode: 'auto', correctAnswer: '20', explanation: '120 ÷ 6 = 20. Elke organisasie kry R20.' },
        { difficulty: 'Easy', question: 'Thabo het 63 ballonne en verpak dit in sakkies van 7. Hoeveel sakkies vul hy?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9 sakkies'], explanation: '63 ÷ 7 = 9 sakkies.' },
        { difficulty: 'Medium', question: 'ʼn Versamelaar het 240 seëls en plaas dit gelyk in albums van 8 seëls elk. Hoeveel albums vul sy?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 albums'], explanation: '240 ÷ 8 = 30 albums.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan deling-woordprobleme met selfvertroue oplos.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die deel- en groeperingsvoorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — VEELSTAP EN GEKOMBINEERDE PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelstap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Hard', question: 'R240 word gelyk gedeel tussen 6 vriende. Een vriend gee dan R15 aan liefdadigheid. Hoeveel het daardie vriend oor? Skryf slegs die getal sonder die R-simbool.', answer: '25', checkMode: 'auto', correctAnswer: '25', explanation: '240 ÷ 6 = 40. Elke vriend kry R40. 40 − 15 = 25. Daardie vriend het R25 oor.' },
        { difficulty: 'Hard', question: 'ʼn Boer het 156 appels en verkoop dit in sakkies van 6. As hy elke sakkie vir R12 verkoop, hoeveel geld maak hy in totaal? Skryf slegs die getal sonder die R-simbool.', answer: '312', checkMode: 'auto', correctAnswer: '312', explanation: '156 ÷ 6 = 26 sakkies. 26 × R12 = R312.' },
        { difficulty: 'Hard', question: '200 lekkers word gelyk gedeel tussen 8 kinders. Elke kind eet dan 3 lekkers. Hoeveel lekkers het elke kind oor?', answer: '22', checkMode: 'auto', correctAnswer: '22', correctAnswers: ['22', '22 lekkers'], explanation: '200 ÷ 8 = 25 lekkers elk. 25 − 3 = 22 lekkers oor per kind.' },
        { difficulty: 'Hard', question: '45 leerders word in groepe van 5 geplaas. As 3 van die groepe op ʼn uitstappie gaan, hoeveel leerders gaan op die uitstappie?', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27 leerders'], explanation: '45 ÷ 5 = 9 leerders per groep. 3 groepe × 9 = 27 leerders.' },
        { difficulty: 'Hard', question: 'ʼn Boer verpak 168 eiers in bokse van 12. As elke boks vir R15 verkoop word, hoeveel geld maak hy in totaal? Skryf slegs die getal sonder die R-simbool.', answer: '210', checkMode: 'auto', correctAnswer: '210', explanation: '168 ÷ 12 = 14 bokse. 14 × R15 = R210.' },
        { difficulty: 'Hard', question: 'ʼn Maatskappy maak R360 wins en deel dit gelyk tussen 9 werkers. Elke werker betaal dan R5 belasting. Hoeveel hou elke werker? Skryf slegs die getal sonder die R-simbool.', answer: '35', checkMode: 'auto', correctAnswer: '35', explanation: '360 ÷ 9 = 40 elk. 40 − 5 = 35. Elke werker hou R35.' },
        { difficulty: 'Hard', question: 'ʼn Saal het 300 stoele met 4 stoele by elke tafel gerangskik. As 5 tafels dan verwyder word, hoeveel tafels bly oor?', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70 tafels'], explanation: '300 ÷ 4 = 75 tafels. 75 − 5 = 70 tafels oor.' },
        { difficulty: 'Hard', question: '144 lekkers word gelyk in 12 sakkies gedeel. As 3 van die sakkies weggegee word, hoeveel lekkers is in totaal weggegee?', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 lekkers'], explanation: '144 ÷ 12 = 12 lekkers per sakkie. 3 sakkies × 12 = 36 lekkers weggegee.' },
        { difficulty: 'Hard', question: '252 plakkers word gelyk in pakkies van 9 gedeel. As 4 pakkies gehou word, hoeveel pakkies word weggegee?', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24 pakkies'], explanation: '252 ÷ 9 = 28 pakkies in totaal. 28 − 4 = 24 pakkies weggegee.' },
        { difficulty: 'Hard', question: '420 albasters word gelyk gedeel tussen 7 vriende. Elke vriend gee dan 10 albasters aan liefdadigheid. Hoeveel albasters het elke vriend oor?', answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 albasters'], explanation: '420 ÷ 7 = 60 albasters elk. 60 − 10 = 50 albasters oor per vriend.' },
        { difficulty: 'Medium', question: 'Die antwoord op ʼn deling is 8, en een van die getalle in die probleem is 64. Wat is die ander getal?', answer: '8', checkMode: 'auto', correctAnswer: '8', explanation: '64 ÷ 8 = 8, dus is die ander getal ook 8.' },
        { difficulty: 'Medium', question: 'Gebruik die feitefamilie vir 7 × 9 = 63 om die delingsfeit te skryf waar 63 deur 9 gedeel word.', answer: '7', checkMode: 'auto', correctAnswer: '7', explanation: '63 ÷ 9 = 7, aangesien 9 × 7 = 63.' },
        { difficulty: 'Hard', question: 'ʼn Skool versamel 216 boeke om gelyk tussen 8 klaskamers te deel. Gebruik langdeling om te vind hoeveel boeke elke klaskamer kry.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: '21 ÷ 8 = 2 r 5, bring 6 af → 56. 56 ÷ 8 = 7. Dus 216 ÷ 8 = 27 boeke per klaskamer.' },
        { difficulty: 'Hard', question: 'ʼn Winkel het 245 lemoene en verpak dit in sakkies van 7. Hoeveel sakkies vul dit?', answer: '35', checkMode: 'auto', correctAnswer: '35', correctAnswers: ['35', '35 sakkies'], explanation: '24 ÷ 7 = 3 r 3, bring 5 af → 35. 35 ÷ 7 = 5. Dus 245 ÷ 7 = 35 sakkies.' },
        { difficulty: 'Hard', question: 'ʼn Onderwyser het 37 sjokolade om gelyk tussen 5 leerders te deel.\n\na) Hoeveel sjokolade kry elke leerder?\nb) Hoeveel sjokolade bly oor?\nc) Wat kan die onderwyser met die oorblywende sjokolade doen?', answer: 'a) 7  b) 2  c) Hou dit vir volgende keer, of gee een elk aan twee gelukkige leerders as ʼn bonus.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Skool het 58 leerders wat op ʼn uitstappie gaan. Elke kombi kan 9 leerders vervoer.\n\na) Hoeveel kombiʼs is heeltemal vol?\nb) Hoeveel leerders bly oor wat nog ʼn kombi nodig het?\nc) Hoeveel kombiʼs moet die skool in totaal bespreek om almal te vervoer?', answer: 'a) 6 kombiʼs vol  b) 4 leerders oor  c) 7 kombiʼs (6 vol plus 1 ekstra vir die oorblywende 4 leerders)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik in jou eie woorde waarom die res in ʼn deling altyd kleiner as die deler moet wees. Gebruik ʼn voorbeeld om jou verduideliking te ondersteun.', answer: 'As die res gelyk aan of groter as die deler was, sou dit beteken nog ʼn volle groep kan steeds gemaak word, dus sou dit nie eintlik ʼn "res" wees nie. Byvoorbeeld, in 20 ÷ 6, as ons sê die antwoord is 2 r 8, sou dit verkeerd wees omdat 8 groter as 6 is — nog ʼn groep van 6 pas binne 8. Die korrekte antwoord is 3 r 2, aangesien 6 × 3 = 18 en 20 − 18 = 2, wat kleiner as 6 is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder sê dat 56 ÷ 7 en 7 × 8 = 56 voorbeelde van dieselfde feitefamilie is. Verduidelik of die leerder korrek is, en gee die ander delingsfeit in hierdie feitefamilie.', answer: 'Die leerder is korrek. Vermenigvuldiging en deling is inverse bewerkings, dus gee 7 × 8 = 56 twee delingsfeite: 56 ÷ 7 = 8 en 56 ÷ 8 = 7. Die ander delingsfeit is 56 ÷ 8 = 7.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Verduidelik, met ʼn voorbeeld, die verskil tussen ʼn delingsprobleem en ʼn groeperingsprobleem, al gebruik altwee dieselfde delings-getalsin.', answer: 'In ʼn delingsprobleem ken jy die totaal en die aantal groepe, en jy vind hoeveel items in elke groep gaan — byvoorbeeld, om 20 lekkers tussen 4 vriende te deel beteken elke vriend kry 20 ÷ 4 = 5 lekkers. In ʼn groeperingsprobleem ken jy die totaal en die grootte van elke groep, en jy vind hoeveel groepe jy kan maak — byvoorbeeld, om 20 lekkers in sakkies van 4 te verpak beteken jy kan 20 ÷ 4 = 5 sakkies maak. Die getalsin is dieselfde, maar die betekenis van die antwoord is verskillend.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Reghoekige tuin het 180 blomme in 9 gelyke rye geplant. As 4 van die rye dan uitgegrawe word, hoeveel blomme bly in die tuin oor?', answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100', '100 blomme'], explanation: '180 ÷ 9 = 20 blomme per ry. 9 − 4 = 5 rye bly. 5 × 20 = 100 blomme oor.' },
        { difficulty: 'Hard', question: 'ʼn Fabriek maak 320 speelgoed en verpak dit in bokse van 8. As 15 bokse na een winkel gestuur word, hoeveel bokse bly oor vir ander winkels?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 bokse'], explanation: '320 ÷ 8 = 40 bokse in totaal. 40 − 15 = 25 bokse oor.' },
        { difficulty: 'Hard', question: 'ʼn Koor van 72 leerders word in gelyke rye van 8 gerangskik. As 2 leerders op die dag van die konsert afwesig is, hoeveel volledige rye van 8 kan steeds gevorm word, en hoeveel leerders bly oor?', answer: '8 r 6', checkMode: 'auto', correctAnswer: '8r6', correctAnswers: ['8r6', '8res6'], explanation: '72 − 2 = 70 leerders teenwoordig. 8 × 8 = 64 (naaste sonder om 70 te oorskry). 70 − 64 = 6 oor. 70 ÷ 8 = 8 r 6.' },
        { difficulty: 'Hard', question: 'ʼn Boer oes 275 aartappels en verpak dit in sakke van 9. Hoeveel volle sakke maak hy, en hoeveel aartappels bly oor? Skryf jou antwoord in die vorm kwosiënt r res.', answer: '30 r 5', checkMode: 'auto', correctAnswer: '30r5', correctAnswers: ['30r5', '30res5'], explanation: '27 ÷ 9 = 3, bring 5 af → 5. 5 ÷ 9 = 0 r 5. Dus 275 ÷ 9 = 30 r 5.' },
        { difficulty: 'Hard', question: 'ʼn Skool koop 216 oefenboeke om gelyk tussen 8 klasse te deel. Gebruik langdeling om te vind hoeveel boeke elke klas kry.', answer: '27', checkMode: 'auto', correctAnswer: '27', explanation: '21 ÷ 8 = 2 r 5, bring 6 af → 56. 56 ÷ 8 = 7. Dus 216 ÷ 8 = 27 boeke per klas.' },
        { difficulty: 'Hard', question: 'Sipho sê dat wanneer jy enige getal deur 1 deel, die antwoord altyd dieselfde as die oorspronklike getal is, en wanneer jy ʼn getal deur homself deel, die antwoord altyd 1 is. Verduidelik of hy korrek is, met twee voorbeelde.', answer: 'Sipho is korrek. Byvoorbeeld, 24 ÷ 1 = 24, want om in 1 groep te deel beteken die hele hoeveelheid bly in daardie een groep. Ook, 24 ÷ 24 = 1, want daar is presies een groep van 24 binne 24. Hierdie is nuttige delingsreëls om te onthou.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het veelstap- en gekombineerde delingsprobleme bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die veelstap-voorbeelde weer deur.' },
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
  ],
}
