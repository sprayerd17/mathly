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
