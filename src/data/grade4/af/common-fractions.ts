import type { TopicData } from './numbers-operations'

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

<p style="margin-bottom:12px;font-weight:600;">Algemene breuke en hul name:</p>

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

      practiceQuestions: [],
    },
  ],

  topicPractice: [

    // ── AFDELING 1: WAT IS ʼN BREUK? ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'ʼn Sjokoladelekker word in 6 gelyke stukke verdeel. Sipho eet 2 stukke.\n\n' +
        'Skryf die breuk van die sjokoladelekker wat hy geëet het.',
      answer: '2/6',
      correctAnswer: '2/6',
      explanation:
        'Sipho het 2 stukke uit 6 gelyke stukke altesaam geëet.\n\n' +
        'Die teller (boonste getal) = stukke geëet = 2.\n' +
        'Die noemer (onderste getal) = totale gelyke stukke = 6.\n\n' +
        'Breuk = 2/6',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skryf die breuk vir elk van die volgende:\n\n' +
        'a) 3 uit 8 gelyke dele is geskadueer\n' +
        'b) 5 uit 9 gelyke dele is geskadueer\n' +
        'c) 1 uit 4 gelyke dele is geskadueer',
      answer: 'a) 3/8    b) 5/9    c) 1/4',
      parts: [
        {
          label: 'a) 3 uit 8 gelyke dele is geskadueer',
          correctAnswer: '3/8',
          explanation:
            '3 dele is geskadueer uit 8 gelyke dele.\n' +
            'Teller = 3 (geskadueer), noemer = 8 (totale gelyke dele).\n' +
            'Breuk = 3/8',
        },
        {
          label: 'b) 5 uit 9 gelyke dele is geskadueer',
          correctAnswer: '5/9',
          explanation:
            '5 dele is geskadueer uit 9 gelyke dele.\n' +
            'Teller = 5 (geskadueer), noemer = 9 (totale gelyke dele).\n' +
            'Breuk = 5/9',
        },
        {
          label: 'c) 1 uit 4 gelyke dele is geskadueer',
          correctAnswer: '1/4',
          explanation:
            '1 deel is geskadueer uit 4 gelyke dele.\n' +
            'Teller = 1 (geskadueer), noemer = 4 (totale gelyke dele).\n' +
            'Breuk = 1/4',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Sak het 20 albasters. 7 is rooi, 5 is blou en die res is groen.\n\n' +
        'a) Watter breuk is rooi?\n' +
        'b) Watter breuk is blou?\n' +
        'c) Watter breuk is groen?',
      answer: 'a) 7/20    b) 5/20    c) 8/20',
      parts: [
        {
          label: 'a) Breuk wat rooi is',
          correctAnswer: '7/20',
          explanation:
            '7 uit 20 albasters is rooi.\n' +
            'Breuk = 7/20',
        },
        {
          label: 'b) Breuk wat blou is',
          correctAnswer: '5/20',
          explanation:
            '5 uit 20 albasters is blou.\n' +
            'Breuk = 5/20',
        },
        {
          label: 'c) Breuk wat groen is',
          correctAnswer: '8/20',
          explanation:
            'Totale albasters = 20. Rooi = 7, Blou = 5.\n' +
            'Groen = 20 − 7 − 5 = 8.\n' +
            'Breuk = 8/20',
        },
      ],
    },

    // ── AFDELING 2: VERGELYK EN ORDEN BREUKE ──────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Watter breuk is groter?\n\n3/7  of  5/7',
      answer: '5/7',
      correctAnswer: '5/7',
      explanation:
        'Albei breuke het dieselfde noemer (7), vergelyk dus die tellers.\n\n' +
        '5 > 3, dus is 5/7 die groter breuk.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Orden hierdie breuke van kleinste na grootste:\n\n' +
        '4/9,  1/9,  7/9,  3/9',
      answer: '1/9,  3/9,  4/9,  7/9',
      correctAnswer: '1/9,3/9,4/9,7/9',
      correctAnswers: ['1/9,3/9,4/9,7/9', '1/93/94/97/9'],
      explanation:
        'Al die breuke het dieselfde noemer (9), orden dus volgens die tellers van kleinste na grootste: 1, 3, 4, 7.\n\n' +
        'Volgorde: 1/9, 3/9, 4/9, 7/9',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Watter is groter: 1/4 of 1/8?\n\n' +
        'Verduidelik waarom sonder om ʼn prentjie te teken.',
      answer:
        '1/4 is groter.\n\n' +
        'Wanneer die tellers dieselfde is (albei is 1), is die breuk met die kleiner noemer die groter breuk.\n\n' +
        'Om iets in 4 gelyke dele te verdeel, gee groter dele as om dit in 8 gelyke dele te verdeel.\n' +
        'Elke 1/4-stuk is dus groter as elke 1/8-stuk.',
    },

    // ── AFDELING 3: EKWIVALENTE BREUKE ─────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Vind twee breuke wat ekwivalent is aan 1/2.',
      answer: '2/4 en 3/6',
      correctAnswers: [
        '2/4and3/6', '3/6and2/4',
        '2/4,3/6',   '3/6,2/4',
        '2/43/6',    '3/62/4',
      ],
      explanation:
        'Om ekwivalente breuke te vind, vermenigvuldig die teller EN die noemer met dieselfde getal.\n\n' +
        '1/2 × 2/2 = 2/4\n' +
        '1/2 × 3/3 = 3/6\n\n' +
        'Beide 2/4 en 3/6 is ekwivalent aan 1/2 omdat hulle almal dieselfde hoeveelheid voorstel.',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Vul die ontbrekende getalle in:\n\n' +
        'a) 1/3 = □/9\n' +
        'b) 2/5 = □/10\n' +
        'c) 3/4 = □/12',
      answer: 'a) 3    b) 4    c) 9',
      parts: [
        {
          label: 'a) 1/3 = □/9',
          correctAnswer: '3',
          explanation:
            'Die noemer het van 3 na 9 gegaan. 3 × 3 = 9, dus het ons met 3 vermenigvuldig.\n' +
            'Vermenigvuldig die teller met dieselfde getal: 1 × 3 = 3.\n' +
            '1/3 = 3/9',
        },
        {
          label: 'b) 2/5 = □/10',
          correctAnswer: '4',
          explanation:
            'Die noemer het van 5 na 10 gegaan. 5 × 2 = 10, dus het ons met 2 vermenigvuldig.\n' +
            'Vermenigvuldig die teller met dieselfde getal: 2 × 2 = 4.\n' +
            '2/5 = 4/10',
        },
        {
          label: 'c) 3/4 = □/12',
          correctAnswer: '9',
          explanation:
            'Die noemer het van 4 na 12 gegaan. 4 × 3 = 12, dus het ons met 3 vermenigvuldig.\n' +
            'Vermenigvuldig die teller met dieselfde getal: 3 × 3 = 9.\n' +
            '3/4 = 9/12',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Thabo sê 2/3 en 4/9 is ekwivalent. Is hy korrek?\n\n' +
        'Wys jou berekening om dit te bewys.',
      answer:
        'Nee, Thabo is verkeerd.\n\n' +
        'Stap 1: Maak die noemers dieselfde deur 2/3 met 3/3 te vermenigvuldig:\n' +
        '2 × 3 = 6  en  3 × 3 = 9  →  2/3 = 6/9\n\n' +
        'Stap 2: Vergelyk: 6/9 ≠ 4/9\n\n' +
        '2/3 is ekwivalent aan 6/9, nie 4/9 nie.\n' +
        'Dus is 2/3 en 4/9 NIE ekwivalent nie.',
    },

    // ── AFDELING 4: VIND ʼN BREUK VAN ʼN HEELGETAL ─────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Vind 1/3 van 18.',
      answer: '6',
      correctAnswer: '6',
      explanation:
        'Stap 1: Deel deur die noemer: 18 ÷ 3 = 6\n' +
        'Stap 2: Vermenigvuldig met die teller: 6 × 1 = 6\n\n' +
        '1/3 van 18 = 6',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken die volgende:\n\n' +
        'a) 1/4 van 32\n' +
        'b) 2/5 van 25\n' +
        'c) 3/8 van 40',
      answer: 'a) 8    b) 10    c) 15',
      parts: [
        {
          label: 'a) 1/4 van 32',
          correctAnswer: '8',
          explanation:
            'Stap 1: Deel deur die noemer: 32 ÷ 4 = 8\n' +
            'Stap 2: Vermenigvuldig met die teller: 8 × 1 = 8\n' +
            '1/4 van 32 = 8',
        },
        {
          label: 'b) 2/5 van 25',
          correctAnswer: '10',
          explanation:
            'Stap 1: Deel deur die noemer: 25 ÷ 5 = 5\n' +
            'Stap 2: Vermenigvuldig met die teller: 5 × 2 = 10\n' +
            '2/5 van 25 = 10',
        },
        {
          label: 'c) 3/8 van 40',
          correctAnswer: '15',
          explanation:
            'Stap 1: Deel deur die noemer: 40 ÷ 8 = 5\n' +
            'Stap 2: Vermenigvuldig met die teller: 5 × 3 = 15\n' +
            '3/8 van 40 = 15',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Skool het 120 leerders. Drie kwarte stap skool toe en die res kom met die bus.\n\n' +
        'a) Hoeveel leerders stap skool toe?\n' +
        'b) Hoeveel kom met die bus?\n' +
        'c) Op ʼn reënerige dag kry die helfte van die busleerders ʼn saamry in plaas daarvan. Hoeveel leerders kom daardie dag met die bus?',
      answer: 'a) 90    b) 30    c) 15',
      parts: [
        {
          label: 'a) Hoeveel leerders stap skool toe?',
          correctAnswer: '90',
          explanation:
            'Vind 3/4 van 120.\n' +
            'Stap 1: Deel deur die noemer: 120 ÷ 4 = 30\n' +
            'Stap 2: Vermenigvuldig met die teller: 30 × 3 = 90\n' +
            '90 leerders stap skool toe.',
        },
        {
          label: 'b) Hoeveel kom met die bus?',
          correctAnswer: '30',
          explanation:
            'Totale leerders − stappers = busleerders.\n' +
            '120 − 90 = 30\n' +
            '30 leerders kom met die bus.',
        },
        {
          label: 'c) Hoeveel kom op die reënerige dag met die bus?',
          correctAnswer: '15',
          explanation:
            'Die helfte van die busleerders kry ʼn saamry, dus kom die helfte steeds met die bus.\n' +
            '1/2 van 30 = 30 ÷ 2 = 15\n' +
            '15 leerders kom op die reënerige dag met die bus.',
        },
      ],
    },

    // ── AFDELING 5: OPTEL VAN BREUKE MET DIESELFDE NOEMER ───────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken:\n\n3/8 + 4/8',
      answer: '7/8',
      correctAnswer: '7/8',
      explanation:
        'Albei breuke het dieselfde noemer (8), hou dus die noemer.\n' +
        'Tel die tellers bymekaar: 3 + 4 = 7\n\n' +
        '3/8 + 4/8 = 7/8',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken die volgende:\n\n' +
        'a) 2/9 + 5/9\n' +
        'b) 1/6 + 3/6 + 1/6\n' +
        'c) 4/10 + 3/10',
      answer: 'a) 7/9    b) 5/6    c) 7/10',
      parts: [
        {
          label: 'a) 2/9 + 5/9',
          correctAnswer: '7/9',
          explanation:
            'Dieselfde noemer (9) — hou dit.\n' +
            'Tel die tellers bymekaar: 2 + 5 = 7\n' +
            '2/9 + 5/9 = 7/9',
        },
        {
          label: 'b) 1/6 + 3/6 + 1/6',
          correctAnswer: '5/6',
          explanation:
            'Dieselfde noemer (6) — hou dit.\n' +
            'Tel al die tellers bymekaar: 1 + 3 + 1 = 5\n' +
            '1/6 + 3/6 + 1/6 = 5/6',
        },
        {
          label: 'c) 4/10 + 3/10',
          correctAnswer: '7/10',
          explanation:
            'Dieselfde noemer (10) — hou dit.\n' +
            'Tel die tellers bymekaar: 4 + 3 = 7\n' +
            '4/10 + 3/10 = 7/10',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'Lerato het 2/8 van ʼn pizza vir middagete geëet en 3/8 vir aandete. Haar broer het 1/8 vir middagete geëet.\n\n' +
        'a) Watter breuk het Lerato altesaam geëet?\n' +
        'b) Watter breuk het haar broer geëet?\n' +
        'c) Watter breuk van die pizza is oor?\n' +
        'd) Wie het meer geëet en met hoeveel?',
      answer: 'a) 5/8    b) 1/8    c) 2/8    d) Lerato het 4/8 meer geëet',
      parts: [
        {
          label: 'a) Watter breuk het Lerato altesaam geëet?',
          correctAnswer: '5/8',
          explanation:
            'Lerato het 2/8 + 3/8 geëet.\n' +
            'Dieselfde noemer (8) — tel die tellers bymekaar: 2 + 3 = 5\n' +
            'Lerato het altesaam 5/8 geëet.',
        },
        {
          label: 'b) Watter breuk het haar broer geëet?',
          correctAnswer: '1/8',
          explanation:
            'Haar broer het net 1/8 vir middagete geëet.\n' +
            'Breuk = 1/8',
        },
        {
          label: 'c) Watter breuk van die pizza is oor?',
          correctAnswer: '2/8',
          explanation:
            'Totaal geëet = Lerato (5/8) + broer (1/8) = 6/8\n' +
            'Hele pizza = 8/8\n' +
            'Oor = 8/8 − 6/8 = 2/8',
        },
        {
          label: 'd) Wie het meer geëet en met hoeveel?',
          correctAnswer: 'Lerato met 4/8',
          correctAnswers: [
            'Lerato met 4/8',
            'Lerato het 4/8 meer geëet',
            'Lerato meer met 4/8',
            'Lerato 4/8 meer',
            'Lerato 4/8',
          ],
          explanation:
            'Vergelyk: Lerato het 5/8 geëet, broer het 1/8 geëet.\n' +
            '5/8 − 1/8 = 4/8\n' +
            'Lerato het 4/8 meer geëet.',
        },
      ],
    },

  ],

  scoreMessages: [
    {
      minScore: 30,
      message:
        'Uitstekend! 30 uit 30 — jy het Gewone Breuke bemeester. Elke enkele deel was korrek. Jy behoort baie trots op jouself te wees! 🌟',
    },
    {
      minScore: 24,
      message:
        'Uitstekende werk! Jy het ʼn sterk begrip van breuke. Gaan enige dele wat jy gemis het weer deur en jy sal binnekort volpunte kry.',
    },
    {
      minScore: 18,
      message:
        'Goeie poging! Jy maak goeie vordering met breuke. Gaan terug oor die afdelings waar jy punte verloor het en probeer daardie vrae weer.',
    },
    {
      minScore: 0,
      message:
        'Hou aan probeer — breuke vat oefening! Werk weer deur die studiegids, fokus op die uitgewerkte voorbeelde, en probeer dan die vrae weer. Jy kan dit doen!',
    },
  ],
}
