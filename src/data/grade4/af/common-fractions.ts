import type { TopicData } from './numbers-operations'

// Gestapelde teller/noemer-breuknotasie in plaas van 'n plat "n/d" skuinsstreep
// — lewer 'n regte breukstreep via die webwerf se bestaande witgelyste-HTML-pyplyn.
const frac = (num: string, den: string) =>
  `<span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 2px;line-height:1.15;font-size:0.95em;"><span style="border-bottom:1.5px solid currentColor;padding:0 3px;">${num}</span><span style="padding:0 3px;">${den}</span></span>`

export const topicData: TopicData = {
  title: 'Gewone Breuke',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS ʼN BREUK?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-a-fraction',
      title: 'Wat is ʼn Breuk?',
      icon: '🍕',
      explanation: `<p style="margin-bottom:18px;">ʼn <strong>Breuk</strong> beskryf ʼn <strong>gelyke deel van ʼn geheel</strong>. Wanneer jy iets in gelyke stukke sny en van daardie stukke vat, werk jy met breuke. Die stukke <em>moet</em> gelyk wees — as hulle verskillende groottes is, is dit nie breuke nie.</p>

<p style="margin-bottom:12px;font-weight:600;">Drie voorbeelde uit die alledaagse lewe:</p>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    🍕 ʼn Pizza word in <strong>4 gelyke skywe</strong> gesny. Jy vat <strong>1 skyf</strong>. Jy het <span style="color:#1e40af;font-weight:700;">een kwart</span> van die pizza — geskryf as <strong>1/4</strong>.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    🍫 ʼn Sjokoladelekker het <strong>8 gelyke stukke</strong>. Jy eet <strong>3 stukke</strong>. Jy het <span style="color:#1e40af;font-weight:700;">drie agtstes</span> van die lekker geëet — geskryf as <strong>3/8</strong>.
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    🍊 ʼn Lemoen word in <strong>6 gelyke segmente</strong> verdeel. Jy gee <strong>2 segmente</strong> weg. Jy het <span style="color:#1e40af;font-weight:700;">twee sesdes</span> van die lemoen weggegee — geskryf as <strong>2/6</strong>.
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Die twee dele van ʼn breuk:</p>

<div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:22px;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:10px;">Teller — boonste getal</div>
    <div style="font-size:32px;font-weight:700;color:#1e40af;line-height:1;margin-bottom:8px;">3</div>
    <div style="font-size:14px;color:#374151;">Hoeveel gelyke dele <strong>jy het</strong>. Getoon in <span style="color:#1e40af;font-weight:700;">blou</span>.</div>
  </div>
  <div style="background:#fff1f2;border:1.5px solid #fecdd3;border-radius:10px;padding:16px 18px;flex:1;min-width:200px;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:10px;">Noemer — onderste getal</div>
    <div style="font-size:32px;font-weight:700;color:#dc2626;line-height:1;margin-bottom:8px;">8</div>
    <div style="font-size:14px;color:#374151;">Hoeveel gelyke dele die <strong>geheel in gesny is</strong>. Getoon in <span style="color:#dc2626;font-weight:700;">rooi</span>.</div>
  </div>
</div>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:22px;text-align:center;">
  <div style="font-size:13px;color:#6b7280;margin-bottom:10px;">Gelees as "drie agtstes"</div>
  <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
    <span style="font-size:36px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:32px;border-top:3px solid #374151;"></span>
    <span style="font-size:36px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Gewone breuke en hul name:</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(100px,1fr));gap:8px;margin-bottom:8px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">2</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">een half</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">3</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">een derde</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">een kwart</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">5</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">een vyfde</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">een sesde</div>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:8px;padding:12px 8px;text-align:center;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
      <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <div style="font-size:12px;color:#374151;margin-top:6px;font-weight:600;">een agtste</div>
  </div>
</div>`,

      videoPlaceholder: 'Kort video wat teller en noemer verduidelik met ʼn pizza- of sjokoladelekker-voorbeeld',
      diagramPlaceholder: 'Visuele voorstelling van ʼn sirkel verdeel in 8 gelyke dele met 3 dele geskadueer, met teller en noemer geëtiketteer',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><path d="M 110 85 L 110 20 A 65 65 0 0 1 156 39 Z" fill="#93c5fd"/><path d="M 110 85 L 156 39 A 65 65 0 0 1 175 85 Z" fill="#93c5fd"/><path d="M 110 85 L 175 85 A 65 65 0 0 1 156 131 Z" fill="#93c5fd"/><circle cx="110" cy="85" r="65" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="85" x2="110" y2="20" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="156" y2="39" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="175" y2="85" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="156" y2="131" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="110" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="64" y2="131" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="45" y2="85" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="85" x2="64" y2="39" stroke="#0f1f3d" stroke-width="1.5"/><text x="110" y="165" font-weight="700" font-size="14" text-anchor="middle" fill="#2563eb">3/8 geskadueer</text></svg>',

      workedExamples: [
        {
          question: 'ʼn Sjokoladelekker word in 8 gelyke stukke verdeel. Thabo eet 3 stukke. Watter breuk het hy geëet?',
          answer: '3/8 — drie agtstes',
          steps: [
            `Vind die <span style="color:#dc2626;font-weight:700;">noemer</span>: die lekker is in <span style="color:#dc2626;font-weight:700;">8</span> gelyke stukke gesny. <strong>8 is die noemer</strong> (onderste getal).`,
            `Vind die <span style="color:#1e40af;font-weight:700;">teller</span>: Thabo eet <span style="color:#1e40af;font-weight:700;">3</span> stukke. <strong>3 is die teller</strong> (boonste getal).`,
            `Skryf die breuk:
<div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;margin:8px 12px 4px;">
  <span style="font-size:30px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
  <span style="display:block;width:28px;border-top:3px solid #374151;"></span>
  <span style="font-size:30px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
</div>
Thabo het <span style="font-weight:700;">drie agtstes</span> van die sjokoladelekker geëet.`,
          ],
        },
        {
          question: 'Skryf die breuk wat getoon word: ʼn vorm is in 6 gelyke dele verdeel en 4 is geskadueer.',
          answer: '4/6 — vier sesdes',
          steps: [
            `Vind die <span style="color:#dc2626;font-weight:700;">noemer</span>: die vorm het altesaam <span style="color:#dc2626;font-weight:700;">6</span> gelyke dele. <strong>6 is die noemer</strong>.`,
            `Vind die <span style="color:#1e40af;font-weight:700;">teller</span>: <span style="color:#1e40af;font-weight:700;">4</span> dele is geskadueer. <strong>4 is die teller</strong>.`,
            `Skryf die breuk:
<div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;margin:8px 12px 4px;">
  <span style="font-size:30px;font-weight:700;color:#1e40af;line-height:1.2;">4</span>
  <span style="display:block;width:28px;border-top:3px solid #374151;"></span>
  <span style="font-size:30px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
</div>
<span style="font-weight:700;">Vier sesdes</span> van die vorm is geskadueer.`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERGELYK EN ORDEN BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-ordering-fractions',
      title: 'Vergelyk en Orden Breuke',
      icon: '⚖️',
      explanation: `<p style="margin-bottom:18px;">Wanneer jy breuke vergelyk, is die eerste ding om te kyk of die noemers dieselfde is. Verskillende reëls geld na gelang of die noemers ooreenstem of nie.</p>

<p style="margin-bottom:12px;font-weight:600;">Reël 1 — Dieselfde noemer: vergelyk die tellers</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:16px;">
  <p style="margin-bottom:10px;color:#374151;">Wanneer breuke dieselfde <strong>noemer</strong> het, is die geheel in dieselfde aantal stukke gesny. Die breuk met die <span style="color:#1e40af;font-weight:700;">groter teller</span> het meer stukke — dit is dus die groter breuk.</p>
  <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;margin-top:12px;">
    <div style="text-align:center;">
      <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
        <span style="font-size:26px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
        <span style="display:block;width:24px;border-top:2.5px solid #374151;"></span>
        <span style="font-size:26px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
      </div>
    </div>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">&gt;</span>
    <div style="text-align:center;">
      <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
        <span style="font-size:26px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
        <span style="display:block;width:24px;border-top:2.5px solid #374151;"></span>
        <span style="font-size:26px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
      </div>
    </div>
    <span style="font-size:14px;color:#6b7280;">omdat <span style="color:#1e40af;font-weight:700;">3</span> &gt; <span style="color:#1e40af;font-weight:700;">2</span> en die noemers dieselfde is</span>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Reël 2 — Eenheidsbreuke (teller is 1): vergelyk die noemers</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:22px;">
  <p style="margin-bottom:10px;color:#374151;">ʼn Eenheidsbreuk het <span style="color:#1e40af;font-weight:700;">1</span> as die teller. Wanneer jy iets in <strong>meer stukke</strong> verdeel, word elke stuk <strong>kleiner</strong>. Hoe <span style="color:#dc2626;font-weight:700;">groter die noemer</span>, hoe kleiner die breuk.</p>
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:12px;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">2</span>
    </div>
    <span style="font-size:20px;font-weight:700;color:#16a34a;">&gt;</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
    </div>
    <span style="font-size:20px;font-weight:700;color:#16a34a;">&gt;</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;gap:0;">
      <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <span style="font-size:13px;color:#6b7280;margin-left:4px;">Om iets in meer stukke te verdeel maak elke stuk kleiner</span>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Vinnige wenk</div>
  <div style="font-size:14px;color:#374151;">Dink aan ʼn pizza wat in 2 skywe gesny word teenoor een wat in 8 skywe gesny word. Een skyf van die pizza wat in 2 gesny is, is baie groter as een skyf van die pizza wat in 8 gesny is!</div>
</div>`,

      diagramPlaceholder: 'Twee reghoeke van gelyke grootte — een verdeel in 3 dele met 1 geskadueer, een verdeel in 6 dele met 1 geskadueer, wat toon dat 1/3 groter is as 1/6',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="50" width="28" height="60" fill="#93c5fd"/><rect x="15" y="50" width="84" height="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="43" y1="50" x2="43" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="71" y1="50" x2="71" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><text x="57" y="130" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1/3</text><rect x="121" y="50" width="14" height="60" fill="#93c5fd"/><rect x="121" y="50" width="84" height="60" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="135" y1="50" x2="135" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="149" y1="50" x2="149" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="163" y1="50" x2="163" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="177" y1="50" x2="177" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><line x1="191" y1="50" x2="191" y2="110" stroke="#0f1f3d" stroke-width="1.5"/><text x="163" y="130" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">1/6</text><text x="110" y="88" font-weight="700" font-size="22" text-anchor="middle" fill="#16a34a">&gt;</text></svg>',
      videoPlaceholder: 'Kort video wat wys hoe om breuke met dieselfde noemer en eenheidsbreuke te vergelyk',

      workedExamples: [
        {
          question: 'Orden hierdie breuke van kleinste na grootste: 5/9, 2/9, 7/9, 1/9',
          answer: '1/9, 2/9, 5/9, 7/9',
          steps: [
            `Kyk na die noemers: al vier breuke het noemer <span style="color:#dc2626;font-weight:700;">9</span>. Gebruik Reël 1 — vergelyk die <span style="color:#1e40af;font-weight:700;">tellers</span>.`,
            `Lys die tellers: <span style="color:#1e40af;font-weight:700;">5, 2, 7, 1</span>. Orden hulle van kleinste na grootste: <span style="color:#1e40af;font-weight:700;">1, 2, 5, 7</span>.`,
            `Skryf die breuke in daardie volgorde:
<div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
  <span style="font-size:16px;color:#6b7280;">&lt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
  <span style="font-size:16px;color:#6b7280;">&lt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">5</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
  <span style="font-size:16px;color:#6b7280;">&lt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#1e40af;line-height:1.2;">7</span>
    <span style="display:block;width:20px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">9</span>
  </div>
</div>`,
          ],
        },
        {
          question: 'Watter is groter: 1/3 of 1/6?',
          answer: '1/3 is groter as 1/6',
          steps: [
            `Beide breuke het <span style="color:#1e40af;font-weight:700;">1</span> as die teller — dit is <strong>eenheidsbreuke</strong>. Gebruik Reël 2.`,
            `Vergelyk die <span style="color:#dc2626;font-weight:700;">noemers</span>: <span style="color:#dc2626;font-weight:700;">3</span> en <span style="color:#dc2626;font-weight:700;">6</span>. Hoe groter die noemer, hoe <em>kleiner</em> die breuk.`,
            `<span style="color:#dc2626;font-weight:700;">3</span> &lt; <span style="color:#dc2626;font-weight:700;">6</span>, dus
<div style="display:flex;align-items:center;gap:12px;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
    <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">3</span>
  </div>
  <span style="font-size:20px;font-weight:700;color:#16a34a;">&gt;</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:24px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
    <span style="font-size:24px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:14px;color:#6b7280;margin-left:4px;"><strong>1/3 is groter</strong> — elke derde is ʼn groter stuk as elke sesde.</span>
</div>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — EKWIVALENTE BREUKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'equivalent-fractions',
      title: 'Ekwivalente Breuke',
      icon: '🟰',
      explanation: `<p style="margin-bottom:18px;"><strong>Ekwivalente breuke</strong> is verskillende breuke wat <strong>presies dieselfde hoeveelheid</strong> voorstel. Hulle lyk verskillend maar beskryf dieselfde deel van ʼn geheel.</p>

<p style="margin-bottom:12px;font-weight:600;">Voorbeeld uit die alledaagse lewe:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:22px;">
  <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <div style="font-size:14px;color:#374151;flex:1;min-width:160px;">
      🍕 Sny ʼn pizza in <strong>2 gelyke skywe</strong> en vat <strong>1</strong> — jy het die helfte van die pizza.
    </div>
    <span style="font-size:20px;font-weight:700;color:#16a34a;">=</span>
    <div style="font-size:14px;color:#374151;flex:1;min-width:160px;">
      🍕 Sny <em>dieselfde</em> pizza in <strong>4 gelyke skywe</strong> en vat <strong>2</strong> — jy het steeds die helfte van die pizza!
    </div>
  </div>
  <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-top:14px;flex-wrap:wrap;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:28px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
      <span style="display:block;width:26px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:28px;font-weight:700;color:#dc2626;line-height:1.2;">2</span>
    </div>
    <span style="font-size:22px;font-weight:700;color:#16a34a;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:28px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
      <span style="display:block;width:26px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:28px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
    </div>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Die reël — vermenigvuldig of deel bo en onder deur dieselfde getal:</p>

<div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:16px 18px;margin-bottom:22px;">
  <div style="font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#1e40af;margin-bottom:12px;">Vermenigvuldig elke keer met 2</div>
  <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:24px;font-weight:700;color:#7c3aed;line-height:1.2;">1</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#7c3aed;line-height:1.2;">2</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:24px;font-weight:700;color:#0891b2;line-height:1.2;">2</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#0891b2;line-height:1.2;">4</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:24px;font-weight:700;color:#059669;line-height:1.2;">4</span>
      <span style="display:block;width:22px;border-top:2.5px solid #374151;"></span>
      <span style="font-size:24px;font-weight:700;color:#059669;line-height:1.2;">8</span>
    </div>
    <span style="font-size:13px;color:#6b7280;margin-left:4px;">Al drie stel dieselfde hoeveelheid voor</span>
  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:14px 18px;">
  <div style="font-size:12px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:8px;">Belangrike reël</div>
  <div style="font-size:14px;color:#374151;">Jy moet <strong>altyd beide die teller EN die noemer met dieselfde getal vermenigvuldig of deel</strong>. As jy net een van hulle verander, verander die breuk se waarde en sal hulle nie ekwivalent wees nie.</div>
</div>`,

      diagramPlaceholder: 'Drie reghoeke van gelyke grootte wat 1/2, 2/4 en 4/8 almal gelyk geskadueer toon om te wys dat hulle ekwivalent is',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="15" y="15" width="76" height="35" fill="#93c5fd"/><rect x="15" y="15" width="152" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="91" y1="15" x2="91" y2="50" stroke="#0f1f3d" stroke-width="1.5"/><text x="195" y="37" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">1/2</text><rect x="15" y="65" width="76" height="35" fill="#93c5fd"/><rect x="15" y="65" width="152" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="53" y1="65" x2="53" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="91" y1="65" x2="91" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><line x1="129" y1="65" x2="129" y2="100" stroke="#0f1f3d" stroke-width="1.5"/><text x="195" y="87" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">2/4</text><rect x="15" y="115" width="76" height="35" fill="#93c5fd"/><rect x="15" y="115" width="152" height="35" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="34" y1="115" x2="34" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="53" y1="115" x2="53" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="72" y1="115" x2="72" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="91" y1="115" x2="91" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="115" x2="110" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="129" y1="115" x2="129" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><line x1="148" y1="115" x2="148" y2="150" stroke="#0f1f3d" stroke-width="1.5"/><text x="195" y="137" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">4/8</text></svg>',
      videoPlaceholder: 'Kort video wat wys hoe om ekwivalente breuke te vind deur die teller en noemer met dieselfde getal te vermenigvuldig',

      workedExamples: [
        {
          question: 'Vind twee breuke wat ekwivalent is aan 1/3.',
          answer: '2/6 en 3/9',
          steps: [
            `Begin met <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 4px;"><span style="font-size:18px;font-weight:700;color:#1e40af;line-height:1.1;">1</span><span style="display:block;width:14px;border-top:2px solid #374151;"></span><span style="font-size:18px;font-weight:700;color:#dc2626;line-height:1.1;">3</span></span>. Vermenigvuldig <strong>beide</strong> die teller en noemer met <strong>2</strong>:
<div style="margin-top:8px;font-size:16px;"><span style="color:#1e40af;font-weight:700;">1 × 2</span> = <span style="color:#1e40af;font-weight:700;">2</span> &nbsp;en&nbsp; <span style="color:#dc2626;font-weight:700;">3 × 2</span> = <span style="color:#dc2626;font-weight:700;">6</span> &nbsp;→&nbsp; <strong>2/6</strong></div>`,
            `Vermenigvuldig nou beide met <strong>3</strong>:
<div style="margin-top:8px;font-size:16px;"><span style="color:#1e40af;font-weight:700;">1 × 3</span> = <span style="color:#1e40af;font-weight:700;">3</span> &nbsp;en&nbsp; <span style="color:#dc2626;font-weight:700;">3 × 3</span> = <span style="color:#dc2626;font-weight:700;">9</span> &nbsp;→&nbsp; <strong>3/9</strong></div>`,
            `Al drie is ekwivalent:
<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">1</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">3</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">2</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">6</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#059669;line-height:1.2;">3</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#059669;line-height:1.2;">9</span></div>
</div>`,
          ],
        },
        {
          question: 'Is 3/4 en 6/8 ekwivalent?',
          answer: 'Ja, hulle is ekwivalent.',
          steps: [
            `Begin met <span style="display:inline-flex;flex-direction:column;align-items:center;vertical-align:middle;margin:0 4px;"><span style="font-size:18px;font-weight:700;color:#1e40af;line-height:1.1;">3</span><span style="display:block;width:14px;border-top:2px solid #374151;"></span><span style="font-size:18px;font-weight:700;color:#dc2626;line-height:1.1;">4</span></span> en probeer om beide bo en onder met <strong>2</strong> te vermenigvuldig:`,
            `<span style="color:#1e40af;font-weight:700;">3 × 2</span> = <span style="color:#1e40af;font-weight:700;">6</span> &nbsp;en&nbsp; <span style="color:#dc2626;font-weight:700;">4 × 2</span> = <span style="color:#dc2626;font-weight:700;">8</span> &nbsp;→&nbsp; <strong>6/8</strong>`,
            `Die resultaat stem ooreen:
<div style="display:flex;align-items:center;gap:12px;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">3</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">4</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">6</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">8</span></div>
  <span style="font-size:14px;color:#16a34a;font-weight:700;margin-left:4px;">✓ Ja, hulle is ekwivalent.</span>
</div>`,
          ],
        },
        {
          question: 'Vul die ontbrekende getal in: 2/5 = □/15',
          answer: '6/15',
          steps: [
            `Kyk na die <span style="color:#dc2626;font-weight:700;">noemers</span>: <span style="color:#dc2626;font-weight:700;">5</span> word <span style="color:#dc2626;font-weight:700;">15</span>. Met wat is 5 vermenigvuldig? &nbsp; <span style="color:#dc2626;font-weight:700;">5 × 3 = 15</span>`,
            `Die reël: vermenigvuldig <strong>beide</strong> bo en onder met <strong>dieselfde getal</strong>. Vermenigvuldig dus ook die teller met <strong>3</strong>: &nbsp; <span style="color:#1e40af;font-weight:700;">2 × 3</span> = <span style="color:#1e40af;font-weight:700;">6</span>`,
            `Die ontbrekende getal is <span style="color:#ea580c;font-weight:700;font-size:18px;">6</span>:
<div style="display:flex;align-items:center;gap:12px;margin-top:10px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">2</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#7c3aed;line-height:1.2;">5</span></div>
  <span style="font-size:18px;font-weight:700;color:#16a34a;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;"><span style="font-size:22px;font-weight:700;color:#ea580c;line-height:1.2;">6</span><span style="display:block;width:20px;border-top:2px solid #374151;"></span><span style="font-size:22px;font-weight:700;color:#0891b2;line-height:1.2;">15</span></div>
</div>`,
          ],
        },
      ],

      practiceQuestions: [],
      openQuestions: [],
    },

    // ── AFDELING 4 ──────────────────────────────────────────────────────────
    {
      id: 'fraction-of-a-whole-number',
      title: 'Vind ʼn Breuk van ʼn Heelgetal',
      icon: '🔢',
      explanation: `
<p style="margin-bottom:12px;">Soms moet ons ʼn <strong>breuk van ʼn heelgetal</strong> vind — soos "Wat is ½ van 10?" of "Wat is ¾ van 24?"</p>
<p style="margin-bottom:16px;">Hier is die maklike tweestapreël:</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Die Reël</div>
  <div style="font-size:16px;font-weight:600;color:#1e3a8a;line-height:1.8;">
    Breuk van ʼn heelgetal =<br/>
    heelgetal ÷ <span style="color:#dc2626;font-weight:700;">noemer</span> × <span style="color:#1e40af;font-weight:700;">teller</span>
  </div>
  <div style="margin-top:12px;display:flex;gap:24px;flex-wrap:wrap;">
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
      <span style="color:#dc2626;font-weight:700;">Rooi = noemer (onderste getal) — deel eers hierdeur</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
      <span style="color:#1e40af;font-weight:700;">Blou = teller (boonste getal) — vermenigvuldig tweedens hiermee</span>
    </div>
  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:8px;">
  <span style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;">Onthou</span>
  <p style="margin-top:6px;margin-bottom:0;color:#14532d;">Stap 1: Deel die heelgetal deur die <span style="color:#dc2626;font-weight:700;">noemer</span>.<br/>Stap 2: Vermenigvuldig die resultaat met die <span style="color:#1e40af;font-weight:700;">teller</span>.<br/>Die finale antwoord word getoon in <span style="color:#16a34a;font-weight:700;">groen</span>.</p>
</div>`,

      workedExamples: [
        {
          question: 'Vind 1/4 van 20',
          answer: '5',
          steps: [
            `Identifiseer die dele van die breuk: <span style="color:#1e40af;font-weight:700;">teller = 1</span> &nbsp;|&nbsp; <span style="color:#dc2626;font-weight:700;">noemer = 4</span>`,
            `<strong>Stap 1 — Deel</strong> deur die <span style="color:#dc2626;font-weight:700;">noemer</span>: &nbsp; 20 ÷ <span style="color:#dc2626;font-weight:700;">4</span> = 5`,
            `<strong>Stap 2 — Vermenigvuldig</strong> met die <span style="color:#1e40af;font-weight:700;">teller</span>: &nbsp; 5 × <span style="color:#1e40af;font-weight:700;">1</span> = <span style="color:#16a34a;font-weight:700;font-size:17px;">5</span>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
  </div>
  <span style="font-size:16px;font-weight:600;color:#374151;">van 20 =</span>
  <span style="font-size:22px;font-weight:700;color:#16a34a;">5</span>
</div>`,
          ],
        },
        {
          question: 'Vind 3/4 van 24',
          answer: '18',
          steps: [
            `Identifiseer die dele: <span style="color:#1e40af;font-weight:700;">teller = 3</span> &nbsp;|&nbsp; <span style="color:#dc2626;font-weight:700;">noemer = 4</span>`,
            `<strong>Stap 1 — Deel</strong> deur die <span style="color:#dc2626;font-weight:700;">noemer</span>: &nbsp; 24 ÷ <span style="color:#dc2626;font-weight:700;">4</span> = 6`,
            `<strong>Stap 2 — Vermenigvuldig</strong> met die <span style="color:#1e40af;font-weight:700;">teller</span>: &nbsp; 6 × <span style="color:#1e40af;font-weight:700;">3</span> = <span style="color:#16a34a;font-weight:700;font-size:17px;">18</span>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">4</span>
  </div>
  <span style="font-size:16px;font-weight:600;color:#374151;">van 24 =</span>
  <span style="font-size:22px;font-weight:700;color:#16a34a;">18</span>
</div>`,
          ],
        },
        {
          question: 'ʼn Klas het 30 leerders. Twee derdes van hulle stap skool toe. Hoeveel leerders stap skool toe?',
          answer: '20',
          steps: [
            `Ons moet <strong>2/3 van 30</strong> vind. &nbsp; <span style="color:#1e40af;font-weight:700;">teller = 2</span> &nbsp;|&nbsp; <span style="color:#dc2626;font-weight:700;">noemer = 3</span>`,
            `<strong>Stap 1 — Deel</strong> deur die <span style="color:#dc2626;font-weight:700;">noemer</span>: &nbsp; 30 ÷ <span style="color:#dc2626;font-weight:700;">3</span> = 10`,
            `<strong>Stap 2 — Vermenigvuldig</strong> met die <span style="color:#1e40af;font-weight:700;">teller</span>: &nbsp; 10 × <span style="color:#1e40af;font-weight:700;">2</span> = <span style="color:#16a34a;font-weight:700;font-size:17px;">20</span>`,
            `<strong>Antwoord:</strong> <span style="color:#16a34a;font-weight:700;font-size:17px;">20 leerders</span> stap skool toe.`,
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om ʼn breuk van ʼn heelgetal te vind deur eers te deel en dan te vermenigvuldig',

      practiceQuestions: [],
      openQuestions: [],
    },

    // ── AFDELING 5 ──────────────────────────────────────────────────────────
    {
      id: 'adding-fractions-same-denominator',
      title: 'Optel van Breuke met Dieselfde Noemer',
      icon: '➕',
      explanation: `
<p style="margin-bottom:14px;">Wanneer twee breuke dieselfde <strong>noemer</strong> het, is dit maklik om hulle op te tel — jy tel net die <strong>tellers</strong> bymekaar en hou die noemer presies dieselfde.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Voorbeeld uit die alledaagse lewe 🍕</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">ʼn Pizza word in <strong>8 gelyke skywe</strong> gesny. Jy eet <span style="color:#1e40af;font-weight:700;">2 skywe</span> en jou vriend eet <span style="color:#1e40af;font-weight:700;">3 skywe</span>. Saam het julle <span style="color:#16a34a;font-weight:700;">5 uit 8 skywe</span> geëet.</p>
  <div style="display:flex;align-items:center;gap:10px;margin-top:12px;flex-wrap:wrap;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
      <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
      <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#16a34a;line-height:1.2;">5</span>
      <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">8</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Die Reël</div>
  <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px;">
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">a</span>
      <span style="display:block;width:14px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">c</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">b</span>
      <span style="display:block;width:14px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">c</span>
    </div>
    <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
    <div style="display:inline-flex;flex-direction:column;align-items:center;">
      <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">a + b</span>
      <span style="display:block;width:36px;border-top:2px solid #374151;"></span>
      <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">c</span>
    </div>
  </div>
  <div style="background:#dbeafe;border-radius:6px;padding:10px 14px;color:#1e3a8a;font-weight:600;font-size:14px;">
    ✅ Tel slegs die <span style="color:#1e40af;">tellers</span> (boonste getalle) bymekaar.<br/>
    ❌ Moet nooit die <span style="color:#dc2626;">noemer</span> (onderste getal) bytel of verander nie.
  </div>
</div>

<div style="display:flex;gap:20px;flex-wrap:wrap;margin-bottom:4px;">
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="width:14px;height:14px;border-radius:50%;background:#1e40af;display:inline-block;"></span>
    <span style="color:#1e40af;font-weight:700;">Blou = tellers — tel hierdie bymekaar</span>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="width:14px;height:14px;border-radius:50%;background:#dc2626;display:inline-block;"></span>
    <span style="color:#dc2626;font-weight:700;">Rooi = noemer — hou dit dieselfde</span>
  </div>
  <div style="display:flex;align-items:center;gap:8px;">
    <span style="width:14px;height:14px;border-radius:50%;background:#16a34a;display:inline-block;"></span>
    <span style="color:#16a34a;font-weight:700;">Groen = finale antwoord</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 2/7 + 3/7',
          answer: '5/7',
          steps: [
            `Kyk na die <span style="color:#dc2626;font-weight:700;">noemers</span>: albei is <span style="color:#dc2626;font-weight:700;">7</span> — hulle is dieselfde, hou dus die noemer as <span style="color:#dc2626;font-weight:700;">7</span>.`,
            `Tel die <span style="color:#1e40af;font-weight:700;">tellers</span> bymekaar: <span style="color:#1e40af;font-weight:700;">2</span> + <span style="color:#1e40af;font-weight:700;">3</span> = <span style="color:#1e40af;font-weight:700;">5</span>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">7</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">7</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#16a34a;line-height:1.2;">5</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">7</span>
  </div>
</div>`,
          ],
        },
        {
          question: 'Bereken 3/10 + 4/10 + 2/10',
          answer: '9/10',
          steps: [
            `Kyk na die <span style="color:#dc2626;font-weight:700;">noemers</span>: al drie is <span style="color:#dc2626;font-weight:700;">10</span> — dieselfde noemer, hou dus <span style="color:#dc2626;font-weight:700;">10</span>.`,
            `Tel al die <span style="color:#1e40af;font-weight:700;">tellers</span> bymekaar: <span style="color:#1e40af;font-weight:700;">3</span> + <span style="color:#1e40af;font-weight:700;">4</span> + <span style="color:#1e40af;font-weight:700;">2</span> = <span style="color:#1e40af;font-weight:700;">9</span>`,
            `<strong>Antwoord:</strong>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">4</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">2</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#16a34a;line-height:1.2;">9</span>
    <span style="display:block;width:22px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">10</span>
  </div>
</div>`,
          ],
        },
        {
          question: 'Lerato het 1/6 van ʼn koek in die oggend geëet en 3/6 in die middag. Watter breuk van die koek het sy altesaam geëet? Is daar enige koek oor?',
          answer: '4/6',
          steps: [
            `Tel die breuke bymekaar wat sy geëet het: <span style="color:#dc2626;font-weight:700;">noemer = 6</span> — dieselfde vir beide, hou dit dus. Tel die <span style="color:#1e40af;font-weight:700;">tellers</span> bymekaar: <span style="color:#1e40af;font-weight:700;">1</span> + <span style="color:#1e40af;font-weight:700;">3</span> = <span style="color:#1e40af;font-weight:700;">4</span>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">1</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">+</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">3</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#16a34a;line-height:1.2;">4</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
</div>`,
            `Is daar koek oor? ʼn Hele koek =
<div style="display:inline-flex;flex-direction:column;align-items:center;margin:0 6px;">
  <span style="font-size:18px;font-weight:700;color:#374151;line-height:1.2;">6</span>
  <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
  <span style="font-size:18px;font-weight:700;color:#374151;line-height:1.2;">6</span>
</div>. Trek af wat Lerato geëet het: <span style="color:#374151;font-weight:700;">6 − 4 = 2</span>
<div style="display:flex;align-items:center;gap:10px;margin-top:8px;flex-wrap:wrap;">
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#374151;line-height:1.2;">6</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">−</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:20px;font-weight:700;color:#1e40af;line-height:1.2;">4</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:20px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:18px;font-weight:700;color:#374151;">=</span>
  <div style="display:inline-flex;flex-direction:column;align-items:center;">
    <span style="font-size:22px;font-weight:700;color:#ea580c;line-height:1.2;">2</span>
    <span style="display:block;width:18px;border-top:2px solid #374151;"></span>
    <span style="font-size:22px;font-weight:700;color:#dc2626;line-height:1.2;">6</span>
  </div>
  <span style="font-size:14px;color:#ea580c;font-weight:700;">oor</span>
</div>`,
            `<strong>Antwoord:</strong> Lerato het <span style="color:#16a34a;font-weight:700;">4/6</span> van die koek geëet. <span style="color:#ea580c;font-weight:700;">2/6</span> is oor.`,
          ],
        },
      ],

      videoPlaceholder: 'Kort video wat wys hoe om breuke met dieselfde noemer op te tel deur ʼn pizza- of staafmodel-voorbeeld te gebruik',
      diagramPlaceholder: 'Staafmodel wat wys dat 2/8 plus 3/8 gelyk is aan 5/8, met elke deel duidelik geëtiketteer en kleur-gekodeer',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="14" y="55" width="48" height="40" fill="#93c5fd"/><rect x="62" y="55" width="72" height="40" fill="#fdba74"/><rect x="14" y="55" width="192" height="40" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="38" y1="55" x2="38" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="62" y1="55" x2="62" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="86" y1="55" x2="86" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="110" y1="55" x2="110" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="134" y1="55" x2="134" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="158" y1="55" x2="158" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><line x1="182" y1="55" x2="182" y2="95" stroke="#0f1f3d" stroke-width="1.5"/><text x="38" y="45" font-weight="700" font-size="14" text-anchor="middle" fill="#2563eb">2/8</text><text x="98" y="45" font-weight="700" font-size="14" text-anchor="middle" fill="#ea580c">3/8</text><text x="110" y="125" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">2/8 + 3/8 = 5/8</text></svg>',

      practiceQuestions: [],
      openQuestions: [],
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae) — 6 vaardigheidsblokke:
    // 0-3 benoeming, 4-7 versamelings/oorblywend, 8-11 vergelyking, 12-15 ekwivalensie,
    // 16-18 breuk van ʼn getal, 19 hoogtepunt (teller/noemer betekenis)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Pizza word in 4 gelyke skywe gesny. Thabo eet 1 skyf. Watter breuk van die pizza het hy geëet?', checkMode: 'auto', options: [frac('1','4'), frac('4','1'), frac('1','5'), frac('3','4')], correctIndex: 0, explanation: `Thabo het 1 skyf uit 4 gelyke skywe geëet, dus is die breuk ${frac('1','4')}. (Om die teller en noemer om te ruil, die totale aantal skywe verkeerd te tel, of die breuk wat hy NIE geëet het nie te gee, is algemene foute.)` },
        { difficulty: 'Easy', question: 'ʼn Vorm is in 6 gelyke dele verdeel en 2 is geskadueer. Watter breuk is geskadueer?', checkMode: 'auto', options: [frac('6','2'), frac('2','6'), frac('2','4'), frac('4','6')], correctIndex: 1, explanation: `2 dele is geskadueer uit 6 gelyke dele, dus is die breuk ${frac('2','6')}. (Om die getalle om te ruil, die totale dele verkeerd te tel, of eerder die ongeskadueerde breuk te gee, is algemene foute.)` },
        { difficulty: 'Easy', question: `Wat is die noemer in die breuk ${frac('3','8')}?`, checkMode: 'auto', options: ['3', '11', '8', '5'], correctIndex: 2, explanation: `Die noemer is die onderste getal — dit vertel ons hoeveel gelyke dele die geheel in gesny is. In ${frac('3','8')} is die noemer 8. (3 is die teller, 11 kom van 3+8 optel, en 5 kom van 8−3 aftrek.)` },
        { difficulty: 'Easy', question: 'ʼn Lint word gelyk gedeel tussen 5 vriende sodat elkeen een stuk kry. Watter breuk van die lint kry elke vriend?', checkMode: 'auto', options: [frac('5','1'), frac('1','4'), frac('5','5'), frac('1','5')], correctIndex: 3, explanation: `Die lint word in 5 gelyke stukke gedeel (noemer 5) en elke vriend kry 1 stuk (teller 1), dus is die breuk ${frac('1','5')}.` },
        { difficulty: 'Easy-Medium', question: 'ʼn Koek word in 6 gelyke stukke gesny. 5 stukke word geëet. Watter breuk is oor?', checkMode: 'auto', options: [frac('1','6'), frac('5','6'), frac('1','5'), frac('5','1')], correctIndex: 0, explanation: `Totale stukke = 6. Geëet = 5. Oor = 6 − 5 = 1, dus is die breuk wat oor is ${frac('1','6')}. (${frac('5','6')} is die breuk wat geëet is, nie wat oor is nie.)` },
        { difficulty: 'Easy-Medium', question: 'ʼn Fles het 20 albasters. 6 is rooi, 9 is blou en die res is groen. Watter breuk is groen?', checkMode: 'auto', options: [frac('15','20'), frac('5','20'), frac('6','20'), frac('5','15')], correctIndex: 1, explanation: `Totaal = 20. Rooi = 6, Blou = 9. Groen = 20 − 6 − 9 = 5, dus is die breuk ${frac('5','20')}. (Om rooi en blou bymekaar te tel in plaas van af te trek, of rooi+blou as die noemer te gebruik, is algemene foute.)` },
        { difficulty: 'Easy-Medium', question: 'ʼn Netbalspan het 18 spelers. 10 word gekies om die wedstryd te begin, en die res sit op die bank. Watter breuk van die span sit op die bank?', checkMode: 'auto', options: [frac('10','18'), frac('8','10'), frac('8','18'), frac('18','8')], correctIndex: 2, explanation: `Totale spelers = 18. Beginners = 10. Op die bank = 18 − 10 = 8, dus is die breuk ${frac('8','18')}. (${frac('10','18')} is die breuk wat begin, nie die breuk op die bank nie.)` },
        { difficulty: 'Medium', question: `Groep A het 3 dele geskadueer uit 4. Groep B het 3 dele geskadueer uit 8. Watter groep het die groter breuk geskadueer?`, checkMode: 'auto', options: [`Groep B, want 8 is ʼn groter getal as 4, dus moet sy dele groter wees.`, `Hulle het gelyke breuke geskadueer, want albei breuke het ʼn teller van 3.`, `Groep B, want wanneer noemers verskil, kies jy altyd die breuk met die groter noemer.`, `Groep A, want met dieselfde teller het die breuk met die kleiner noemer (${frac('3','4')}) groter dele as ${frac('3','8')}.`], correctIndex: 3, explanation: `Groep A = ${frac('3','4')} en Groep B = ${frac('3','8')}. Dieselfde teller, vergelyk dus die noemers — die kleiner noemer gee groter dele. Aangesien 4 kleiner is as 8, is ${frac('3','4')} groter, dus het Groep A die groter breuk geskadueer.` },
        { difficulty: 'Medium', question: `Twee vriende vergelyk papierstroke van dieselfde lengte. Aisha se strook wys ${frac('3','7')} geskadueer en Zanele se strook wys ${frac('5','7')} geskadueer. Wie se strook het meer geskadueer?`, checkMode: 'auto', options: [`Zanele, want ${frac('5','7')} het ʼn groter teller as ${frac('3','7')} wanneer die noemers dieselfde is.`, `Aisha, want 3 is ʼn kleiner getal dus moet haar noemer eintlik groter wees.`, `Hulle het dieselfde hoeveelheid geskadueer, aangesien albei stroke noemer 7 het.`, `Aisha, want jy moet noemers vergelyk wanneer die tellers verskil.`], correctIndex: 0, explanation: `${frac('3','7')} en ${frac('5','7')} het dieselfde noemer (7), vergelyk dus die tellers. 5 is groter as 3, dus het Zanele se ${frac('5','7')} meer.` },
        { difficulty: 'Medium', question: `ʼn Leerder sê ${frac('1','8')} moet groter wees as ${frac('1','4')} omdat 8 ʼn groter getal is as 4. Watter stelling evalueer die leerder se bewering korrek?`, checkMode: 'auto', options: [`Die leerder is korrek — ʼn groter noemer beteken altyd ʼn groter breuk.`, `Die leerder is verkeerd — ʼn groter noemer beteken die geheel is in meer, kleiner dele gesny, dus is ${frac('1','4')} eintlik groter as ${frac('1','8')}.`, `Die leerder is korrek, want ${frac('1','8')} het meer dele as ${frac('1','4')}.`, `Die leerder is verkeerd, want jy moet net tellers vergelyk wanneer die noemers verskil.`], correctIndex: 1, explanation: `Albei breuke is eenheidsbreuke (teller 1). ʼn Groter noemer beteken die geheel is in meer dele gesny, dus is elke deel kleiner. Aangesien 8 groter is as 4, is elke agtste kleiner as elke kwart, dus is ${frac('1','4')} eintlik groter as ${frac('1','8')}.` },
        { difficulty: 'Medium', question: `Orden hierdie breuke van kleinste na grootste: ${frac('4','9')}, ${frac('1','9')}, ${frac('7','9')}, ${frac('3','9')}`, checkMode: 'auto', options: [`${frac('1','9')}, ${frac('4','9')}, ${frac('3','9')}, ${frac('7','9')}`, `${frac('7','9')}, ${frac('4','9')}, ${frac('3','9')}, ${frac('1','9')}`, `${frac('1','9')}, ${frac('3','9')}, ${frac('4','9')}, ${frac('7','9')}`, `${frac('3','9')}, ${frac('1','9')}, ${frac('4','9')}, ${frac('7','9')}`], correctIndex: 2, explanation: `Dieselfde noemer (9), orden dus volgens tellers van kleinste na grootste: 1, 3, 4, 7. Volgorde: ${frac('1','9')}, ${frac('3','9')}, ${frac('4','9')}, ${frac('7','9')}` },
        { difficulty: 'Medium', question: `Watter stelling oor ${frac('5','8')} en ${frac('3','8')} is korrek?`, checkMode: 'auto', options: [`${frac('5','8')} is eintlik kleiner as ${frac('3','8')}, aangesien 5 na 3 kom.`, `Jy moet noemers vergelyk, nie tellers nie, om te besluit watter groter is.`, `Hulle is gelyk, maar net omdat 8 ʼn ewe noemer is.`, `${frac('5','8')} is groter as ${frac('3','8')} — wanneer noemers dieselfde is, verteenwoordig die breuk met die groter teller meer gelyke-grootte dele.`], correctIndex: 3, explanation: `Wanneer twee breuke dieselfde noemer het, is die geheel in gelyke grootte dele verdeel, dus verteenwoordig die breuk met meer van daardie dele (die groter teller) ʼn groter hoeveelheid. Aangesien 5 groter is as 3, is ${frac('5','8')} groter as ${frac('3','8')}.` },
        { difficulty: 'Medium', question: `Vind ʼn breuk ekwivalent aan ${frac('1','2')}.`, checkMode: 'auto', options: [frac('2','4'), frac('2','3'), frac('1','4'), frac('4','2')], correctIndex: 0, explanation: `Vermenigvuldig teller en noemer met dieselfde getal: 1 × 2 = 2 en 2 × 2 = 4, wat ${frac('2','4')} gee. (${frac('2','3')} kom van 1 by beide getalle op te tel in plaas van te vermenigvuldig, en ${frac('1','4')} kom van net die noemer te vermenigvuldig.)` },
        { difficulty: 'Medium', question: `Vul die ontbrekende getal in: ${frac('1','4')} = ${frac('?','12')}`, checkMode: 'auto', options: ['4', '3', '8', '48'], correctIndex: 1, explanation: `Die noemer het van 4 na 12 gegaan (4 × 3 = 12), vermenigvuldig dus ook die teller met 3: 1 × 3 = 3.` },
        { difficulty: 'Medium', question: `Watter stelling oor ${frac('2','3')} en ${frac('4','6')} is korrek?`, checkMode: 'auto', options: [`Hulle is nie ekwivalent nie, want die tellers (2 en 4) is verskillend.`, `Jy kan slegs breuke vergelyk wat reeds dieselfde noemer het.`, `Hulle is ekwivalent — vermenigvuldiging van ${frac('2','3')} met ${frac('2','2')} gee ${frac('4','6')}, dus stel hulle dieselfde hoeveelheid voor.`, `Hulle is ekwivalent, maar net omdat albei tellers toevallig ewe getalle is.`], correctIndex: 2, explanation: `Vermenigvuldig ${frac('2','3')} met ${frac('2','2')}: 2 × 2 = 4 en 3 × 2 = 6, wat ${frac('4','6')} gee. Aangesien dit ooreenstem, is ${frac('2','3')} en ${frac('4','6')} ekwivalent.` },
        { difficulty: 'Medium', question: `Sipho sê ${frac('1','3')} en ${frac('3','9')} is ekwivalent. Watter stelling is korrek?`, checkMode: 'auto', options: [`Hy is verkeerd — ${frac('1','3')} en ${frac('3','9')} het verskillende noemers, dus kan hulle nie ekwivalent wees nie.`, `Hy is verkeerd — jy kan nie die teller en noemer met dieselfde getal vermenigvuldig en ʼn ekwivalente breuk verwag nie.`, `Hy is korrek, maar net per toeval — die twee breuke lyk toevallig eenders.`, `Hy is korrek — vermenigvuldiging van ${frac('1','3')} met ${frac('3','3')} gee 1 × 3 = 3 en 3 × 3 = 9, dus ${frac('1','3')} = ${frac('3','9')}.`], correctIndex: 3, explanation: `Vermenigvuldiging van ${frac('1','3')} met ${frac('3','3')} gee 1 × 3 = 3 en 3 × 3 = 9, dus ${frac('1','3')} = ${frac('3','9')}. Aangesien beide die teller en noemer met dieselfde getal vermenigvuldig is, stel die breuke dieselfde hoeveelheid voor.` },
        { difficulty: 'Medium-Hard', question: `Vind ${frac('3','10')} van 50.`, checkMode: 'auto', options: ['15', '5', '17', '150'], correctIndex: 0, explanation: `Stap 1: deel deur die noemer — 50 ÷ 10 = 5. Stap 2: vermenigvuldig met die teller — 5 × 3 = 15. (5 kom van net stap 1 te doen, 17 kom van 50 verkeerdelik deur 3 te deel, en 150 kom van 50 × 3 te vermenigvuldig sonder om eers te deel.)` },
        { difficulty: 'Medium-Hard', question: `ʼn Netbalspan speel 40 wedstryde in ʼn seisoen. Hulle wen ${frac('3','8')} daarvan. Hoeveel wedstryde wen hulle?`, checkMode: 'auto', options: ['24', '15', '5', '13'], correctIndex: 1, explanation: `Vind ${frac('3','8')} van 40. Stap 1: 40 ÷ 8 = 5. Stap 2: 5 × 3 = 15. Die span wen 15 wedstryde. (5 kom van net stap 1 te doen, en 13 kom van 40 verkeerdelik deur 3 te deel.)` },
        { difficulty: 'Medium-Hard', question: `Watter is meer: ${frac('3','4')} van 20 of ${frac('2','5')} van 20?`, checkMode: 'auto', options: [`${frac('2','5')} van 20, want ${frac('2','5')} het ʼn kleiner noemer as ${frac('3','4')}.`, `Hulle is gelyk, aangesien albei breuke op 20 toegepas word.`, `${frac('3','4')} van 20, want ${frac('3','4')} van 20 = 15 terwyl ${frac('2','5')} van 20 = 8.`, `${frac('2','5')} van 20, want 2 + 5 is minder as 3 + 4.`], correctIndex: 2, explanation: `${frac('3','4')} van 20: 20 ÷ 4 = 5, dan 5 × 3 = 15. ${frac('2','5')} van 20: 20 ÷ 5 = 4, dan 4 × 2 = 8. Aangesien 15 groter is as 8, is ${frac('3','4')} van 20 meer.` },
        { difficulty: 'Hard', question: `Watter stelling verduidelik korrek wat die teller en noemer van ʼn breuk jou vertel?`, checkMode: 'auto', options: [`Die teller vertel jou hoeveel gelyke dele die geheel in verdeel is, en die noemer vertel jou hoeveel dele jy het.`, `Beide die teller en noemer vertel jou hoeveel dele jy het, net op twee verskillende maniere geskryf.`, `Die noemer vertel jou hoeveel dele jy het, en die teller vertel jou hoeveel dele die geheel in verdeel is.`, `Die teller (boonste getal) vertel jou hoeveel gelyke dele jy het, en die noemer (onderste getal) vertel jou hoeveel gelyke dele die geheel in verdeel is.`], correctIndex: 3, explanation: `Byvoorbeeld, in ${frac('3','8')} beteken die noemer 8 dat die geheel in 8 gelyke stukke gesny is, en die teller 3 beteken ons het 3 van daardie stukke. (Opsies wat die twee definisies omruil, is die algemeenste deurmekaarspul.)` },
      ],
      scoreMessages: [
        { minScore: 20, message: "Uitstekend! Jy het ʼn sterk, breë begrip van gewone breuke." },
        { minScore: 15, message: "Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer." },
        { minScore: 10, message: "Goeie poging! Gaan die uitgewerkte voorbeelde oor die onderwerpe wat jy moeilik gevind het weer deur." },
        { minScore: 0, message: "Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae) — dieselfde 6-blok uitleg as Stel 1, vars bewoording/getalle.
    // Hoogtepunt wissel na: waarom optel met dieselfde noemer werk.
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Sjokoladelekker het 8 gelyke stukke. Sipho eet 3 stukke. Watter breuk het hy geëet?', checkMode: 'auto', options: [frac('3','8'), frac('8','3'), frac('3','5'), frac('5','8')], correctIndex: 0, explanation: `Sipho het 3 stukke uit 8 gelyke stukke geëet, dus is die breuk ${frac('3','8')}. (${frac('5','8')} is die breuk wat hy NIE geëet het nie.)` },
        { difficulty: 'Easy', question: 'ʼn Vorm is in 5 gelyke dele verdeel en 4 is geskadueer. Watter breuk is geskadueer?', checkMode: 'auto', options: [frac('5','4'), frac('4','5'), frac('4','9'), frac('1','5')], correctIndex: 1, explanation: `4 dele is geskadueer uit 5 gelyke dele, dus is die breuk ${frac('4','5')}. (${frac('1','5')} is die ongeskadueerde breuk.)` },
        { difficulty: 'Easy', question: `Wat is die teller in die breuk ${frac('5','9')}?`, checkMode: 'auto', options: ['9', '14', '5', '4'], correctIndex: 2, explanation: `Die teller is die boonste getal — dit vertel ons hoeveel gelyke dele ons het. In ${frac('5','9')} is die teller 5. (9 is die noemer, 14 kom van 5+9 optel, en 4 kom van 9−5 aftrek.)` },
        { difficulty: 'Easy', question: 'ʼn Pakkie beskuitjies word gelyk gedeel tussen 6 leerders. As een leerder 2 dele neem, watter breuk van die beskuitjies het daardie leerder gekry?', checkMode: 'auto', options: [frac('6','2'), frac('1','6'), frac('2','4'), frac('2','6')], correctIndex: 3, explanation: `Die beskuitjies word in 6 gelyke dele verdeel (noemer 6) en die leerder neem 2 dele (teller 2), dus is die breuk ${frac('2','6')}.` },
        { difficulty: 'Easy-Medium', question: 'ʼn Pizza word in 8 gelyke skywe gesny. 3 skywe word geëet. Watter breuk is oor?', checkMode: 'auto', options: [frac('5','8'), frac('3','8'), frac('5','3'), frac('5','11')], correctIndex: 0, explanation: `Totale skywe = 8. Geëet = 3. Oor = 8 − 3 = 5, dus is die breuk wat oor is ${frac('5','8')}. (${frac('3','8')} is die breuk wat geëet is, nie wat oor is nie.)` },
        { difficulty: 'Easy-Medium', question: 'ʼn Pakkie het 24 lekkers. 10 is rooi, 8 is blou en die res is groen. Watter breuk is groen?', checkMode: 'auto', options: [frac('18','24'), frac('6','24'), frac('10','24'), frac('6','18')], correctIndex: 1, explanation: `Totaal = 24. Rooi = 10, Blou = 8. Groen = 24 − 10 − 8 = 6, dus is die breuk ${frac('6','24')}. (Om rooi en blou bymekaar te tel in plaas van af te trek, of rooi+blou as die noemer te gebruik, is algemene foute.)` },
        { difficulty: 'Easy-Medium', question: 'ʼn Groentetuin het 20 plante. 13 is tamatieplante en die res is spinasieplante. Watter breuk van die plante is spinasie?', checkMode: 'auto', options: [frac('13','20'), frac('33','20'), frac('7','20'), frac('20','7')], correctIndex: 2, explanation: `Totale plante = 20. Tamaties = 13. Spinasie = 20 − 13 = 7, dus is die breuk ${frac('7','20')}. (${frac('13','20')} is die tamatie-breuk, nie die spinasie-breuk nie.)` },
        { difficulty: 'Medium', question: `Thabo het 2 dele geskadueer uit ʼn vorm in 3 verdeel (${frac('2','3')}). Lerato het 2 dele geskadueer uit ʼn vorm dieselfde grootte in 6 verdeel (${frac('2','6')}). Wie het die groter breuk van hul vorm geskadueer?`, checkMode: 'auto', options: [`Lerato, want 6 is ʼn groter getal as 3, dus moet haar noemer meer gee.`, `Hulle het gelyke breuke geskadueer, aangesien albei tellers 2 is.`, `Lerato, want ʼn groter noemer beteken altyd ʼn groter breuk.`, `Thabo, want met dieselfde teller gee die kleiner noemer (3) groter dele.`], correctIndex: 3, explanation: `Thabo het ${frac('2','3')} geskadueer en Lerato het ${frac('2','6')} geskadueer. Dieselfde teller, vergelyk dus die noemers — die kleiner noemer gee groter dele. Aangesien 3 kleiner is as 6, is ${frac('2','3')} groter, dus het Thabo die groter breuk geskadueer.` },
        { difficulty: 'Medium', question: `Twee waterbotteltjies hou dieselfde totale hoeveelheid. Een is gevul tot ${frac('2','9')} en die ander tot ${frac('6','9')}. Watter bottel het minder water in?`, checkMode: 'auto', options: [`Die bottel wat tot ${frac('2','9')} gevul is, want met dieselfde noemer beteken die kleiner teller minder water.`, `Die bottel wat tot ${frac('6','9')} gevul is, want 6 is verder van 9 af as 2.`, `Hulle het gelyke water, want albei is negendes.`, `Die bottel wat tot ${frac('6','9')} gevul is, want ʼn groter teller beteken altyd minder water.`], correctIndex: 0, explanation: `${frac('2','9')} en ${frac('6','9')} het dieselfde noemer (9), vergelyk dus die tellers. 2 is kleiner as 6, dus het die bottel wat tot ${frac('2','9')} gevul is minder water.` },
        { difficulty: 'Medium', question: `ʼn Leerder beweer ${frac('1','6')} is groter as ${frac('1','3')} omdat 6 ʼn groter getal is as 3. Watter stelling evalueer die bewering korrek?`, checkMode: 'auto', options: [`Die bewering is korrek — groter noemers skep altyd groter eenheidsbreuke.`, `Die bewering is verkeerd — ʼn groter noemer verdeel die geheel in meer, kleiner stukke, dus is ${frac('1','6')} eintlik kleiner as ${frac('1','3')}.`, `Die bewering is korrek, want sesdes word meer keer getel as derdes.`, `Die bewering is verkeerd, want jy moet hier tellers in plaas van noemers vergelyk.`], correctIndex: 1, explanation: `Albei is eenheidsbreuke (teller 1), dus beteken ʼn groter noemer dat die geheel in meer, kleiner stukke verdeel is. Aangesien 6 groter is as 3, is sesdes kleiner stukke as derdes, dus is ${frac('1','6')} eintlik kleiner as ${frac('1','3')}.` },
        { difficulty: 'Medium', question: `Orden hierdie breuke van grootste na kleinste: ${frac('1','2')}, ${frac('1','5')}, ${frac('1','3')}, ${frac('1','10')}`, checkMode: 'auto', options: [`${frac('1','10')}, ${frac('1','5')}, ${frac('1','3')}, ${frac('1','2')}`, `${frac('1','2')}, ${frac('1','5')}, ${frac('1','3')}, ${frac('1','10')}`, `${frac('1','2')}, ${frac('1','3')}, ${frac('1','5')}, ${frac('1','10')}`, `${frac('1','3')}, ${frac('1','2')}, ${frac('1','10')}, ${frac('1','5')}`], correctIndex: 2, explanation: `Dit is almal eenheidsbreuke, dus hoe kleiner die noemer, hoe groter die breuk. Orden van grootste na kleinste noemer gee: ${frac('1','2')}, ${frac('1','3')}, ${frac('1','5')}, ${frac('1','10')}` },
        { difficulty: 'Medium', question: `Watter is groter: ${frac('3','4')} of ${frac('5','8')}? Wenk: vind eers ʼn ekwivalente breuk vir ${frac('3','4')} met noemer 8.`, checkMode: 'auto', options: [`${frac('5','8')} is groter, want 8 is ʼn groter noemer as 4.`, `Hulle is gelyk, aangesien ${frac('3','4')} nie na agtstes omgeskakel kan word nie.`, `${frac('5','8')} is groter, want 5 is groter as 3 dus moet sy breuk groter wees.`, `${frac('3','4')} is groter — ${frac('3','4')} = ${frac('6','8')}, en met dieselfde noemer is ${frac('6','8')} groter as ${frac('5','8')}.`], correctIndex: 3, explanation: `${frac('3','4')} = ${frac('6','8')} (vermenigvuldig bo en onder met 2). Vergelyk nou ${frac('6','8')} en ${frac('5','8')} — dieselfde noemer, vergelyk dus die tellers. Aangesien 6 groter is as 5, is ${frac('3','4')} groter.` },
        { difficulty: 'Medium', question: `Vind ʼn breuk ekwivalent aan ${frac('1','3')}.`, checkMode: 'auto', options: [frac('2','6'), frac('1','6'), frac('2','3'), frac('3','6')], correctIndex: 0, explanation: `Vermenigvuldig teller en noemer met dieselfde getal: 1 × 2 = 2 en 3 × 2 = 6, wat ${frac('2','6')} gee. (${frac('1','6')} verdubbel net die noemer, ${frac('2','3')} verdubbel net die teller, en ${frac('3','6')} tel 2 by beide op in plaas van te vermenigvuldig.)` },
        { difficulty: 'Medium', question: `Vul die ontbrekende getal in: ${frac('2','5')} = ${frac('?','10')}`, checkMode: 'auto', options: ['5', '4', '2', '20'], correctIndex: 1, explanation: `Die noemer het van 5 na 10 gegaan (5 × 2 = 10), vermenigvuldig dus ook die teller met 2: 2 × 2 = 4.` },
        { difficulty: 'Medium', question: `Watter stelling oor ${frac('3','5')} en ${frac('5','8')} is korrek?`, checkMode: 'auto', options: [`Hulle is ekwivalent, want albei breuke het tellers kleiner as hul noemers.`, `Hulle is ekwivalent, want 3 × 8 = 24 en 5 × 5 = 25 is naby genoeg aan mekaar.`, `Hulle is nie ekwivalent nie — daar is geen heelgetal waarmee jy beide 3 en 5 kan vermenigvuldig om 5 en 8 te kry nie.`, `Hulle is nie ekwivalent nie, want ${frac('5','8')} is ʼn eenheidsbreuk en ${frac('3','5')} nie.`], correctIndex: 2, explanation: `Daar is geen heelgetal waarmee jy beide 3 en 5 kan vermenigvuldig om 5 en 8 te kry nie, dus is ${frac('3','5')} en ${frac('5','8')} nie ekwivalent nie.` },
        { difficulty: 'Medium', question: `Lerato sê ${frac('2','6')} en ${frac('3','9')} is ekwivalent omdat hulle albei vereenvoudig tot ${frac('1','3')}. Watter stelling is korrek?`, checkMode: 'auto', options: [`Sy is verkeerd — ${frac('2','6')} vereenvoudig tot ${frac('1','3')} maar ${frac('3','9')} vereenvoudig tot ${frac('1','4')}.`, `Sy is verkeerd — jy kan nie twee breuke vergelyk deur hulle albei te vereenvoudig nie.`, `Sy is korrek, maar net omdat 2 en 3 opeenvolgende getalle is.`, `Sy is korrek — ${frac('2','6')} vereenvoudig tot ${frac('1','3')} (deel deur 2) en ${frac('3','9')} vereenvoudig ook tot ${frac('1','3')} (deel deur 3), dus is hulle ekwivalent.`], correctIndex: 3, explanation: `${frac('2','6')} vereenvoudig tot ${frac('1','3')} (deel bo en onder deur 2). ${frac('3','9')} vereenvoudig ook tot ${frac('1','3')} (deel bo en onder deur 3). Aangesien beide tot dieselfde breuk vereenvoudig, is hulle ekwivalent.` },
        { difficulty: 'Medium-Hard', question: `Vind ${frac('5','6')} van 24.`, checkMode: 'auto', options: ['20', '4', '144', '30'], correctIndex: 0, explanation: `Stap 1: deel deur die noemer — 24 ÷ 6 = 4. Stap 2: vermenigvuldig met die teller — 4 × 5 = 20. (4 kom van net stap 1 te doen, en 144 kom van 24 × 6 te vermenigvuldig in plaas van te deel.)` },
        { difficulty: 'Medium-Hard', question: `ʼn Fietsryer beplan om 40 km te ry. Sy het reeds ${frac('3','5')} van die afstand gery. Hoeveel kilometer het sy reeds gery?`, checkMode: 'auto', options: ['8', '24', '120', '25'], correctIndex: 1, explanation: `Vind ${frac('3','5')} van 40. Stap 1: 40 ÷ 5 = 8. Stap 2: 8 × 3 = 24. Sy het 24 km gery. (8 kom van net stap 1 te doen, en 120 kom van 40 × 3 te vermenigvuldig sonder om eers te deel.)` },
        { difficulty: 'Medium-Hard', question: `Watter is meer: ${frac('5','6')} van 18 of ${frac('2','3')} van 18?`, checkMode: 'auto', options: [`${frac('2','3')} van 18, want ${frac('2','3')} het ʼn kleiner noemer.`, `Hulle is gelyk, want albei breuke is minder as 1.`, `${frac('5','6')} van 18, want ${frac('5','6')} van 18 = 15 terwyl ${frac('2','3')} van 18 = 12.`, `${frac('2','3')} van 18, want 2 + 3 is minder as 5 + 6.`], correctIndex: 2, explanation: `${frac('5','6')} van 18: 18 ÷ 6 = 3, dan 3 × 5 = 15. ${frac('2','3')} van 18: 18 ÷ 3 = 6, dan 6 × 2 = 12. Aangesien 15 groter is as 12, is ${frac('5','6')} van 18 meer.` },
        { difficulty: 'Hard', question: `Watter stelling verduidelik korrek waarom jy twee breuke net direk kan optel deur die tellers by te tel wanneer die noemers dieselfde is?`, checkMode: 'auto', options: [`Want die noemers kanselleer uit wanneer hulle gelyk is.`, `Want om tellers by te tel werk altyd, ongeag die noemers.`, `Want die teller verteenwoordig die grootte van elke stuk, nie hoeveel jy het nie.`, `Want wanneer die noemers dieselfde is, is die geheel vir beide breuke in gelyke-grootte stukke verdeel, dus kan jy die stukke eenvoudig saam tel.`], correctIndex: 3, explanation: `Wanneer twee breuke dieselfde noemer het, is die geheel vir beide breuke in dieselfde grootte gelyke dele verdeel, dus is die stukke dieselfde grootte en kan hulle eenvoudig saam getel word. As die noemers verskillend was, sou die stukke verskillende groottes wees, en om die tellers direk by te tel sou ʼn verkeerde antwoord gee.` },
      ],
      scoreMessages: [
        { minScore: 20, message: "Uitstekend! Jy het ʼn sterk, breë begrip van gewone breuke." },
        { minScore: 15, message: "Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer." },
        { minScore: 10, message: "Goeie poging! Gaan die uitgewerkte voorbeelde oor die onderwerpe wat jy moeilik gevind het weer deur." },
        { minScore: 0, message: "Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae) — dieselfde 6-blok uitleg as Stel 1-2, vars bewoording/getalle.
    // Hoogtepunt wissel na: die tweestap breuk-van-ʼn-getal reël.
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Lemoen word in 10 gelyke segmente verdeel. Lerato gee 3 segmente weg. Watter breuk het sy weggegee?', checkMode: 'auto', options: [frac('3','10'), frac('10','3'), frac('3','7'), frac('7','10')], correctIndex: 0, explanation: `Lerato het 3 segmente van 10 gelyke segmente weggegee, dus is die breuk ${frac('3','10')}. (${frac('7','10')} is die breuk wat sy behou het, nie weggegee het nie.)` },
        { difficulty: 'Easy', question: 'ʼn Vorm is in 3 gelyke dele verdeel en 1 is geskadueer. Watter breuk is geskadueer?', checkMode: 'auto', options: [frac('3','1'), frac('1','3'), frac('1','2'), frac('2','3')], correctIndex: 1, explanation: `1 deel is geskadueer uit 3 gelyke dele, dus is die breuk ${frac('1','3')}. (${frac('2','3')} is die ongeskadueerde breuk.)` },
        { difficulty: 'Easy', question: `In die breuk ${frac('7','12')}, watter getal is die teller en watter is die noemer?`, checkMode: 'auto', options: ['12 is die teller, 7 is die noemer.', 'Albei 7 en 12 is tellers.', '7 is die teller, 12 is die noemer.', '7 is die noemer, 12 is die teller.'], correctIndex: 2, explanation: `Die teller is die boonste getal (7). Die noemer is die onderste getal (12).` },
        { difficulty: 'Easy', question: 'ʼn Pakkie van 9 saailinge word gelyk verdeel tussen 9 plantpotte, een saailing per pot. Watter breuk van die saailinge gaan in 4 van die potte?', checkMode: 'auto', options: [frac('9','4'), frac('4','5'), frac('5','9'), frac('4','9')], correctIndex: 3, explanation: `Daar is 9 gelyke saailinge in totaal (noemer 9) en 4 daarvan gaan in 4 potte (teller 4), dus is die breuk ${frac('4','9')}.` },
        { difficulty: 'Easy-Medium', question: 'ʼn Sjokoladelekker het 10 gelyke stukke. Amahle eet 6 stukke. Watter breuk van die lekker is oor?', checkMode: 'auto', options: [frac('4','10'), frac('6','10'), frac('4','6'), frac('6','4')], correctIndex: 0, explanation: `Totale stukke = 10. Geëet = 6. Oor = 10 − 6 = 4, dus is die breuk wat oor is ${frac('4','10')}. (${frac('6','10')} is die breuk wat geëet is, nie wat oor is nie.)` },
        { difficulty: 'Easy-Medium', question: 'ʼn Skinkbord het 12 muffins. 5 het versiersuiker, 4 het strooisels en die res is plein. Watter breuk is plein?', checkMode: 'auto', options: [frac('9','12'), frac('3','12'), frac('5','12'), frac('3','9')], correctIndex: 1, explanation: `Totale muffins = 12. Versiersuiker = 5, Strooisels = 4. Plein = 12 − 5 − 4 = 3, dus is die breuk ${frac('3','12')}. (Om versiersuiker en strooisels bymekaar te tel in plaas van af te trek, of versiersuiker+strooisels as die noemer te gebruik, is algemene foute.)` },
        { difficulty: 'Easy-Medium', question: 'ʼn Boks van 24 kryte het 9 wat gebreek is. Die res is nog heel. Watter breuk van die kryte is nog heel?', checkMode: 'auto', options: [frac('9','24'), frac('24','15'), frac('15','24'), frac('15','9')], correctIndex: 2, explanation: `Totale kryte = 24. Gebreek = 9. Heel = 24 − 9 = 15, dus is die breuk ${frac('15','24')}. (${frac('9','24')} is die gebreekte breuk, nie die heel-breuk nie.)` },
        { difficulty: 'Medium', question: `ʼn Blou reghoek het 4 dele geskadueer uit 10 (${frac('4','10')}). ʼn Groen reghoek dieselfde grootte het 4 dele geskadueer uit 5 (${frac('4','5')}). Watter reghoek het die groter breuk geskadueer?`, checkMode: 'auto', options: [`Die blou reghoek, want 10 is ʼn groter getal as 5.`, `Hulle het gelyke breuke geskadueer, aangesien albei tellers 4 is.`, `Die blou reghoek, want ʼn groter noemer gee altyd ʼn groter breuk.`, `Die groen reghoek, want met dieselfde teller gee die kleiner noemer (5) groter dele.`], correctIndex: 3, explanation: `Blou = ${frac('4','10')} en Groen = ${frac('4','5')}. Dieselfde teller, vergelyk dus die noemers — die kleiner noemer gee groter dele. Aangesien 5 kleiner is as 10, is ${frac('4','5')} groter, dus het die groen reghoek die groter breuk geskadueer.` },
        { difficulty: 'Medium', question: `Twee toue van gelyke lengte is in gelyke afdelings gemerk. Een tou het ${frac('4','11')} van sy lengte geverf, die ander het ${frac('8','11')} geverf. Watter tou het meer verf op?`, checkMode: 'auto', options: [`Die tou met ${frac('8','11')}, want met dieselfde noemer beteken die groter teller meer verf.`, `Die tou met ${frac('4','11')}, want 4 is ʼn kleiner, meer presiese getal.`, `Hulle het gelyke verf, want albei is elfdes.`, `Die tou met ${frac('4','11')}, want ʼn kleiner teller beteken altyd meer van die geheel.`], correctIndex: 0, explanation: `${frac('4','11')} en ${frac('8','11')} het dieselfde noemer (11), vergelyk dus die tellers. 8 is groter as 4, dus het die tou met ${frac('8','11')} meer verf.` },
        { difficulty: 'Medium', question: `Watter stelling verduidelik korrek, sonder om enige deling te doen, waarom ${frac('1','5')} groter moet wees as ${frac('1','9')}?`, checkMode: 'auto', options: [`${frac('1','9')} is groter, want 9 stukke beteken meer stukke altesaam.`, `${frac('1','5')} is groter — albei is eenheidsbreuke, en om die geheel in minder stukke te verdeel (5 in plaas van 9) maak elke stuk groter.`, `Hulle is gelyk, want albei het teller 1.`, `${frac('1','9')} is groter, want ʼn groter noemer skep altyd ʼn groter breuk.`], correctIndex: 1, explanation: `Albei is eenheidsbreuke (teller 1). Die noemer wys hoeveel gelyke stukke die geheel in verdeel is — verdeling in 9 stukke maak elke stuk kleiner as verdeling in slegs 5 stukke. Aangesien 5 kleiner is as 9, is elke vyfde groter as elke negende, dus is ${frac('1','5')} groter as ${frac('1','9')}.` },
        { difficulty: 'Medium', question: `Orden hierdie breuke van kleinste na grootste: ${frac('3','4')}, ${frac('1','4')}, ${frac('1','2')}, ${frac('2','4')}`, checkMode: 'auto', options: [`${frac('3','4')}, ${frac('2','4')}, ${frac('1','2')}, ${frac('1','4')}`, `${frac('1','4')}, ${frac('1','2')}, ${frac('3','4')}, ${frac('2','4')}`, `${frac('1','4')}, ${frac('1','2')}, ${frac('2','4')}, ${frac('3','4')}`, `${frac('1','2')}, ${frac('1','4')}, ${frac('2','4')}, ${frac('3','4')}`], correctIndex: 2, explanation: `Skryf ${frac('1','2')} as ${frac('2','4')} sodat al die breuke noemer 4 deel: ${frac('1','4')}, ${frac('2','4')}, ${frac('2','4')}, ${frac('3','4')}. Aangesien ${frac('1','2')} = ${frac('2','4')}, gee die ordening van kleinste na grootste: ${frac('1','4')}, ${frac('1','2')} (=${frac('2','4')}), ${frac('2','4')}, ${frac('3','4')}.` },
        { difficulty: 'Medium', question: `Om ${frac('2','5')} en ${frac('3','10')} te vergelyk, kan jy ${frac('2','5')} as ${frac('4','10')} herskryf en dan die tellers vergelyk. Watter stelling is korrek?`, checkMode: 'auto', options: [`Onwaar — jy kan nie ${frac('2','5')} met noemer 10 herskryf nie.`, `Waar, maar ${frac('3','10')} is eintlik die groter breuk.`, `Onwaar — om tellers te vergelyk werk slegs wanneer die oorspronklike noemers reeds ooreenstem.`, `Waar — ${frac('2','5')} = ${frac('4','10')}, en deur ${frac('4','10')} met ${frac('3','10')} te vergelyk, aangesien 4 > 3, is ${frac('2','5')} die groter breuk.`], correctIndex: 3, explanation: `${frac('2','5')} = ${frac('4','10')} (vermenigvuldig bo en onder met 2). Nou het albei breuke noemer 10, vergelyk dus die tellers: 4 en 3. Aangesien 4 groter is as 3, is ${frac('2','5')} (as ${frac('4','10')}) groter as ${frac('3','10')}.` },
        { difficulty: 'Medium', question: `Watter paar breuke is albei ekwivalent aan ${frac('3','4')}?`, checkMode: 'auto', options: [frac('6','8') + ' en ' + frac('9','12'), frac('6','8') + ' en ' + frac('8','12'), frac('4','5') + ' en ' + frac('6','8'), frac('9','16') + ' en ' + frac('6','8')], correctIndex: 0, explanation: `Vermenigvuldig ${frac('3','4')} met ${frac('2','2')} om ${frac('6','8')} te kry, en met ${frac('3','3')} om ${frac('9','12')} te kry. Beide stel dieselfde hoeveelheid as ${frac('3','4')} voor. (${frac('8','12')} vereenvoudig tot ${frac('2','3')}, nie ${frac('3','4')} nie, dus is dit nie ekwivalent nie.)` },
        { difficulty: 'Medium', question: `Vul die ontbrekende getal in: ${frac('3','8')} = ${frac('?','16')}`, checkMode: 'auto', options: ['8', '6', '3', '24'], correctIndex: 1, explanation: `Die noemer het van 8 na 16 gegaan (8 × 2 = 16), vermenigvuldig dus ook die teller met 2: 3 × 2 = 6.` },
        { difficulty: 'Medium', question: `Watter stelling oor ${frac('4','5')} en ${frac('8','10')} is korrek?`, checkMode: 'auto', options: [`Hulle is nie ekwivalent nie — ${frac('8','10')} vereenvoudig slegs tot ${frac('4','5')} as jy deur 3 deel.`, `Hulle is nie ekwivalent nie — die noemers 5 en 10 kan nooit verwant wees nie.`, `Hulle is ekwivalent — vermenigvuldiging van ${frac('4','5')} met ${frac('2','2')} gee ${frac('8','10')}, dus stel hulle dieselfde hoeveelheid voor.`, `Hulle is ekwivalent, maar net omdat albei breuke ewe noemers het.`], correctIndex: 2, explanation: `Vermenigvuldiging van ${frac('4','5')} met ${frac('2','2')} gee 4 × 2 = 8 en 5 × 2 = 10, dus ${frac('4','5')} = ${frac('8','10')}. Aangesien beide die teller en noemer met dieselfde getal vermenigvuldig is, stel die breuke dieselfde hoeveelheid voor.` },
        { difficulty: 'Medium', question: `Amahle beweer dat ${frac('3','5')} en ${frac('6','9')} ekwivalente breuke is omdat sy die teller en noemer van ${frac('3','5')} met verskillende getalle vermenigvuldig het om by ${frac('6','9')} uit te kom. Watter stelling evalueer haar bewering korrek?`, checkMode: 'auto', options: [`Sy is korrek — enige paar vermenigvuldigers werk solank die resultaat eenders lyk.`, `Sy is korrek, want ${frac('3','5')} en ${frac('6','9')} vereenvoudig albei tot breuke kleiner as 1.`, `Sy is verkeerd, maar net omdat ${frac('6','9')} eerder as ${frac('9','6')} geskryf moes gewees het.`, `Sy is verkeerd — sy het die teller met 2 vermenigvuldig, maar die noemer met ʼn nie-heelgetalfaktor (5×2=10, nie 9 nie); ${frac('3','5')} is eintlik gelyk aan ${frac('6','10')}, nie ${frac('6','9')} nie.`], correctIndex: 3, explanation: `Om 3 na 6 te vermenigvuldig, het sy met 2 vermenigvuldig, maar om 5 na 9 te vermenigvuldig, is nie ʼn heelgetalvermenigvuldiging nie (5 × 2 = 10, nie 9 nie). Aangesien sy nie die teller en noemer met dieselfde getal vermenigvuldig het nie, is die breuke nie ekwivalent nie — ${frac('3','5')} is eintlik gelyk aan ${frac('6','10')}, nie ${frac('6','9')} nie.` },
        { difficulty: 'Medium-Hard', question: `Vind ${frac('7','10')} van 80.`, checkMode: 'auto', options: ['56', '8', '110', '560'], correctIndex: 0, explanation: `Stap 1: deel deur die noemer — 80 ÷ 10 = 8. Stap 2: vermenigvuldig met die teller — 8 × 7 = 56. (8 kom van net stap 1 te doen, 110 kom van 80 verkeerdelik deur 7 te deel, en 560 kom van 80 × 7 te vermenigvuldig sonder om eers te deel.)` },
        { difficulty: 'Medium-Hard', question: `ʼn Resep het altesaam 24 minute bak-tyd nodig. Die kok het reeds vir ${frac('3','8')} van daardie tyd gebak. Hoeveel minute het die kok reeds gebak?`, checkMode: 'auto', options: ['3', '9', '72', '8'], correctIndex: 1, explanation: `Vind ${frac('3','8')} van 24. Stap 1: 24 ÷ 8 = 3. Stap 2: 3 × 3 = 9. Die kok het reeds 9 minute gebak. (3 kom van net stap 1 te doen, 72 kom van 24 × 3 te vermenigvuldig sonder om eers te deel, en 8 kom van 24 verkeerdelik deur 3 te deel.)` },
        { difficulty: 'Medium-Hard', question: `Watter is meer: ${frac('2','3')} van 45 of ${frac('3','5')} van 45?`, checkMode: 'auto', options: [`${frac('3','5')} van 45, want ${frac('3','5')} het ʼn groter teller as ${frac('2','3')}.`, `Hulle is gelyk, want albei breuke lyk na aan mekaar.`, `${frac('2','3')} van 45, want ${frac('2','3')} van 45 = 30 terwyl ${frac('3','5')} van 45 = 27.`, `${frac('3','5')} van 45, want 5 is ʼn groter noemer dus gee dit ʼn groter deel.`], correctIndex: 2, explanation: `${frac('2','3')} van 45: 45 ÷ 3 = 15, dan 15 × 2 = 30. ${frac('3','5')} van 45: 45 ÷ 5 = 9, dan 9 × 3 = 27. Aangesien 30 groter is as 27, is ${frac('2','3')} van 45 meer.` },
        { difficulty: 'Hard', question: `Watter stelling stel korrek die tweestapreël vir die vind van ʼn breuk van ʼn heelgetal, toegepas om ${frac('5','6')} van 30 te vind?`, checkMode: 'auto', options: [`Vermenigvuldig die heelgetal met die noemer, deel dan deur die teller — 30 × 6 ÷ 5 = 36.`, `Deel die heelgetal deur die teller, vermenigvuldig dan met die noemer — 30 ÷ 5 × 6 = 36.`, `Vermenigvuldig die teller met die noemer, deel dan die heelgetal deur daardie getal — 30 ÷ 30 = 1.`, `Deel die heelgetal deur die noemer, vermenigvuldig dan met die teller — 30 ÷ 6 = 5, dan 5 × 5 = 25.`], correctIndex: 3, explanation: `Stap 1: deel die heelgetal deur die noemer van die breuk. Stap 2: vermenigvuldig die resultaat met die teller van die breuk. Vir ${frac('5','6')} van 30: deel 30 deur 6 om 5 te kry, vermenigvuldig dan 5 met 5 om 25 te kry.` },
      ],
      scoreMessages: [
        { minScore: 20, message: "Uitstekend! Jy het ʼn sterk, breë begrip van gewone breuke." },
        { minScore: 15, message: "Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer." },
        { minScore: 10, message: "Goeie poging! Gaan die uitgewerkte voorbeelde oor die onderwerpe wat jy moeilik gevind het weer deur." },
        { minScore: 0, message: "Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer." },
      ],
    },
  ],
}
