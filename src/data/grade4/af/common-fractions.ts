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

      practiceQuestions: [],
      openQuestions: [],
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // AFDELING 1 — FONDASIES: IDENTIFISEER EN BENOEM BREUKE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Afdeling 1: Fondasies',
      questions: [
        { difficulty: 'Easy', question: "ʼn Pizza word in 4 gelyke skywe gesny. Thabo eet 1 skyf. Watter breuk van die pizza het hy geëet?", answer: "1/4", checkMode: 'auto', correctAnswer: "1/4", explanation: "1 skyf geëet uit 4 gelyke skywe. Breuk = 1/4" },
        { difficulty: 'Easy', question: "ʼn Sjokoladelekker het 8 gelyke stukke. Sipho eet 3 stukke. Watter breuk het hy geëet?", answer: "3/8", checkMode: 'auto', correctAnswer: "3/8", explanation: "3 stukke geëet uit 8 gelyke stukke. Breuk = 3/8" },
        { difficulty: 'Easy', question: "ʼn Vorm is in 6 gelyke dele verdeel en 2 is geskadueer. Watter breuk is geskadueer?", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", explanation: "2 dele geskadueer uit 6 gelyke dele. Breuk = 2/6" },
        { difficulty: 'Easy', question: "ʼn Vorm is in 5 gelyke dele verdeel en 4 is geskadueer. Watter breuk is geskadueer?", answer: "4/5", checkMode: 'auto', correctAnswer: "4/5", explanation: "4 dele geskadueer uit 5 gelyke dele. Breuk = 4/5" },
        { difficulty: 'Easy', question: "ʼn Lemoen word in 10 gelyke segmente verdeel. Lerato gee 3 segmente weg. Watter breuk het sy weggegee?", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "3 segmente weggegee uit 10 gelyke segmente. Breuk = 3/10" },
        { difficulty: 'Easy', question: "ʼn Vorm is in 3 gelyke dele verdeel en 1 is geskadueer. Watter breuk is geskadueer?", answer: "1/3", checkMode: 'auto', correctAnswer: "1/3", explanation: "1 deel geskadueer uit 3 gelyke dele. Breuk = 1/3" },
        { difficulty: 'Easy', question: "ʼn Vorm is in 8 gelyke dele verdeel en 5 is geskadueer. Watter breuk is geskadueer?", answer: "5/8", checkMode: 'auto', correctAnswer: "5/8", explanation: "5 dele geskadueer uit 8 gelyke dele. Breuk = 5/8" },
        { difficulty: 'Easy', question: "Wat is die noemer in die breuk 3/8?", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "Die noemer is die onderste getal. Dit vertel ons hoeveel gelyke dele die geheel in gesny is. In 3/8 is die noemer 8." },
        { difficulty: 'Easy', question: "Wat is die teller in die breuk 5/9?", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Die teller is die boonste getal. Dit vertel ons hoeveel gelyke dele ons het. In 5/9 is die teller 5." },
        { difficulty: 'Easy', question: "ʼn Vorm is in 4 gelyke dele verdeel en 3 is geskadueer. Watter breuk is geskadueer?", answer: "3/4", checkMode: 'auto', correctAnswer: "3/4", explanation: "3 dele geskadueer uit 4 gelyke dele. Breuk = 3/4" },
        { difficulty: 'Medium', question: "ʼn Vorm is in 12 gelyke dele verdeel en 7 is geskadueer. Watter breuk is geskadueer?", answer: "7/12", checkMode: 'auto', correctAnswer: "7/12", explanation: "7 dele geskadueer uit 12 gelyke dele. Breuk = 7/12" },
        { difficulty: 'Medium', question: "ʼn Sjokoladelekker het 10 gelyke stukke. Amahle eet 6 stukke. Watter breuk van die lekker het sy geëet?", answer: "6/10", checkMode: 'auto', correctAnswer: "6/10", explanation: "6 stukke geëet uit 10 gelyke stukke. Breuk = 6/10" },
        { difficulty: 'Medium', question: "ʼn Koek word in 6 gelyke stukke gesny. 5 stukke word geëet. Watter breuk is oor?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "Totale stukke = 6. Geëet = 5. Oor = 6 min 5 = 1. Breuk oor = 1/6" },
        { difficulty: 'Medium', question: "ʼn Pizza word in 8 gelyke skywe gesny. 3 skywe word geëet. Watter breuk is oor?", answer: "5/8", checkMode: 'auto', correctAnswer: "5/8", explanation: "Totale skywe = 8. Geëet = 3. Oor = 8 min 3 = 5. Breuk oor = 5/8" },
        { difficulty: 'Medium', question: "ʼn Sak het 10 lekkers. 4 is rooi en die res is geel. Watter breuk van die lekkers is geel?", answer: "6/10", checkMode: 'auto', correctAnswer: "6/10", explanation: "Totale lekkers = 10. Rooi = 4. Geel = 10 min 4 = 6. Breuk geel = 6/10" },
        { difficulty: 'Medium', question: "ʼn Skinkbord het 12 muffins. 5 het versiersuiker en die res nie. Watter breuk het geen versiersuiker nie?", answer: "7/12", checkMode: 'auto', correctAnswer: "7/12", explanation: "Totale muffins = 12. Met versiersuiker = 5. Sonder versiersuiker = 12 min 5 = 7. Breuk = 7/12" },
        { difficulty: 'Medium', question: "ʼn Fles het 20 albasters. 6 is rooi, 9 is blou en die res is groen. Watter breuk is groen?", answer: "5/20", checkMode: 'auto', correctAnswer: "5/20", explanation: "Totaal = 20. Rooi = 6, Blou = 9. Groen = 20 min 6 min 9 = 5. Breuk = 5/20" },
        { difficulty: 'Medium', question: "ʼn Pakkie het 24 lekkers. 10 is rooi, 8 is blou en die res is groen. Watter breuk is groen?", answer: "6/24", checkMode: 'auto', correctAnswer: "6/24", explanation: "Totaal = 24. Rooi = 10, Blou = 8. Groen = 24 min 10 min 8 = 6. Breuk = 6/24" },
        { difficulty: 'Medium', question: "ʼn Fles het 16 knopies. 5 is rooi, 6 is blou en die res is geel. Watter breuk is geel?", answer: "5/16", checkMode: 'auto', correctAnswer: "5/16", explanation: "Totaal = 16. Rooi = 5, Blou = 6. Geel = 16 min 5 min 6 = 5. Breuk = 5/16" },
        { difficulty: 'Medium', question: "Skryf die breuk: 9 uit 20 leerders in ʼn klas dra brille.", answer: "9/20", checkMode: 'auto', correctAnswer: "9/20", explanation: "9 leerders uit 20 totale leerders dra brille. Breuk = 9/20" },
        { difficulty: 'Hard', question: "ʼn Boer het 18 diere. 7 is koeie, 4 is skape en die res is bokke. Watter breuk van die diere is bokke?", answer: "7/18", checkMode: 'auto', correctAnswer: "7/18", explanation: "Totaal = 18. Koeie = 7, Skape = 4. Bokke = 18 min 7 min 4 = 7. Breuk = 7/18" },
        { difficulty: 'Hard', question: "ʼn Winkel het 30 hemde. 12 is blou, 9 is rooi en die res is wit. Watter breuk is wit?", answer: "9/30", checkMode: 'auto', correctAnswer: "9/30", explanation: "Totaal = 30. Blou = 12, Rooi = 9. Wit = 30 min 12 min 9 = 9. Breuk = 9/30" },
        { difficulty: 'Hard', question: "Amahle het 15 plakkers. Sy gee 4 vir Thabo en 3 vir Lerato. Watter breuk van haar plakkers het sy oor?", answer: "8/15", checkMode: 'auto', correctAnswer: "8/15", explanation: "Totaal = 15. Weggegee = 4 + 3 = 7. Oor = 15 min 7 = 8. Breuk oor = 8/15" },
        { difficulty: 'Hard', question: "ʼn Boks het 25 potlode. 8 is rooi, 10 is blou en die res is groen. Watter breuk is groen?", answer: "7/25", checkMode: 'auto', correctAnswer: "7/25", explanation: "Totaal = 25. Rooi = 8, Blou = 10. Groen = 25 min 8 min 10 = 7. Breuk = 7/25" },
        { difficulty: 'Hard', question: "Verduidelik, in jou eie woorde, wat die teller en noemer van ʼn breuk jou vertel.", answer: "Die teller (boonste getal) vertel jou hoeveel gelyke dele jy het. Die noemer (onderste getal) vertel jou hoeveel gelyke dele die geheel in verdeel is. Byvoorbeeld, in 3/8 beteken die noemer 8 dat die geheel in 8 gelyke stukke gesny is, en die teller 3 beteken ons het 3 van daardie stukke.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Uitstekend! Jy kan met selfvertroue breuke van ʼn vorm of versameling identifiseer en benoem." },
        { minScore: 19, message: "Goeie werk! Jy verstaan tellers en noemers goed — gaan enige gemiste vrae weer deur." },
        { minScore: 13, message: "Goeie poging! Gaan die uitgewerkte voorbeelde oor die identifisering van breuke weer deur en probeer weer." },
        { minScore: 0, message: "Hou aan probeer — werk weer deur die studiegids en probeer hierdie afdeling weer." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // AFDELING 2 — VERGELYK, ORDEN EN EKWIVALENTE BREUKE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Afdeling 2: Vergelyk en Ekwivalente Breuke',
      questions: [
        { difficulty: 'Easy', question: "Watter breuk is groter: 3/7 of 5/7?", answer: "5/7", checkMode: 'auto', correctAnswer: "5/7", explanation: "Dieselfde noemer (7), vergelyk dus die tellers. 5 is groter as 3, dus is 5/7 groter." },
        { difficulty: 'Easy', question: "Watter breuk is groter: 1/4 of 1/8?", answer: "1/4", checkMode: 'auto', correctAnswer: "1/4", explanation: "Albei is eenheidsbreuke (teller 1). Hoe kleiner die noemer, hoe groter die breuk. 4 is kleiner as 8, dus is 1/4 groter." },
        { difficulty: 'Easy', question: "Watter breuk is kleiner: 2/9 of 6/9?", answer: "2/9", checkMode: 'auto', correctAnswer: "2/9", explanation: "Dieselfde noemer (9), vergelyk dus die tellers. 2 is kleiner as 6, dus is 2/9 kleiner." },
        { difficulty: 'Easy', question: "Watter breuk is kleiner: 1/3 of 1/6?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "Albei is eenheidsbreuke. Hoe groter die noemer, hoe kleiner die breuk. 6 is groter as 3, dus is 1/6 kleiner." },
        { difficulty: 'Easy', question: "Vind ʼn breuk ekwivalent aan 1/2.", answer: "2/4", checkMode: 'auto', correctAnswer: "2/4", correctAnswers: ["2/4","3/6","4/8","5/10"], explanation: "Vermenigvuldig teller en noemer met dieselfde getal, bv. 1 x 2 = 2 en 2 x 2 = 4, wat 2/4 gee." },
        { difficulty: 'Easy', question: "Vind ʼn breuk ekwivalent aan 1/3.", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", correctAnswers: ["2/6","3/9"], explanation: "Vermenigvuldig teller en noemer met dieselfde getal, bv. 1 x 2 = 2 en 3 x 2 = 6, wat 2/6 gee." },
        { difficulty: 'Medium', question: "Orden hierdie breuke van kleinste na grootste: 4/9, 1/9, 7/9, 3/9", answer: "1/9, 3/9, 4/9, 7/9", checkMode: 'auto', correctAnswer: "1/9,3/9,4/9,7/9", correctAnswers: ["1/9,3/9,4/9,7/9","1/93/94/97/9"], explanation: "Dieselfde noemer (9), orden dus volgens tellers van kleinste na grootste: 1, 3, 4, 7. Volgorde: 1/9, 3/9, 4/9, 7/9" },
        { difficulty: 'Medium', question: "Orden hierdie breuke van kleinste na grootste: 6/10, 2/10, 9/10, 5/10", answer: "2/10, 5/10, 6/10, 9/10", checkMode: 'auto', correctAnswer: "2/10,5/10,6/10,9/10", correctAnswers: ["2/10,5/10,6/10,9/10"], explanation: "Dieselfde noemer (10), orden dus volgens tellers: 2, 5, 6, 9. Volgorde: 2/10, 5/10, 6/10, 9/10" },
        { difficulty: 'Medium', question: "Is 2/3 en 4/6 ekwivalent? Skryf ja of nee.", answer: "Ja", checkMode: 'auto', correctAnswer: "Ja", correctAnswers: ["Ja","ja"], explanation: "Vermenigvuldig 2/3 met 2/2: 2 x 2 = 4 en 3 x 2 = 6, wat 4/6 gee. Aangesien 4/6 = 4/6, is hulle ekwivalent." },
        { difficulty: 'Medium', question: "Is 3/5 en 5/8 ekwivalent? Skryf ja of nee.", answer: "Nee", checkMode: 'auto', correctAnswer: "Nee", correctAnswers: ["Nee","nee"], explanation: "Daar is geen heelgetal waarmee jy beide 3 en 5 kan vermenigvuldig om 5 en 8 te kry nie, dus is hulle nie ekwivalent nie." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 1/4 = ?/12", answer: "3", checkMode: 'auto', correctAnswer: "3", explanation: "Die noemer het van 4 na 12 gegaan (4 x 3 = 12), vermenigvuldig dus ook die teller met 3: 1 x 3 = 3." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 2/5 = ?/10", answer: "4", checkMode: 'auto', correctAnswer: "4", explanation: "Die noemer het van 5 na 10 gegaan (5 x 2 = 10), vermenigvuldig dus ook die teller met 2: 2 x 2 = 4." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 1/6 = ?/12", answer: "2", checkMode: 'auto', correctAnswer: "2", explanation: "Die noemer het van 6 na 12 gegaan (6 x 2 = 12), vermenigvuldig dus ook die teller met 2: 1 x 2 = 2." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 3/8 = ?/16", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Die noemer het van 8 na 16 gegaan (8 x 2 = 16), vermenigvuldig dus ook die teller met 2: 3 x 2 = 6." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 1/5 = ?/15", answer: "3", checkMode: 'auto', correctAnswer: "3", explanation: "Die noemer het van 5 na 15 gegaan (5 x 3 = 15), vermenigvuldig dus ook die teller met 3: 1 x 3 = 3." },
        { difficulty: 'Medium', question: "Vind twee breuke wat ekwivalent is aan 3/4.", answer: "6/8 en 9/12", checkMode: 'auto', correctAnswer: "6/8en9/12", correctAnswers: ["6/8en9/12","9/12en6/8","6/8,9/12","9/12,6/8","6/89/12","9/126/8"], explanation: "Vermenigvuldig 3/4 met 2/2 om 6/8 te kry, en met 3/3 om 9/12 te kry. Beide stel dieselfde hoeveelheid as 3/4 voor." },
        { difficulty: 'Medium', question: "Orden hierdie breuke van grootste na kleinste: 1/2, 1/5, 1/3, 1/10", answer: "1/2, 1/3, 1/5, 1/10", checkMode: 'auto', correctAnswer: "1/2,1/3,1/5,1/10", correctAnswers: ["1/2,1/3,1/5,1/10"], explanation: "Dit is almal eenheidsbreuke, dus hoe kleiner die noemer, hoe groter die breuk. Orden van grootste na kleinste noemer gee: 1/2, 1/3, 1/5, 1/10" },
        { difficulty: 'Hard', question: "Watter is groter: 3/4 of 5/8? Wenk: vind eers ʼn ekwivalente breuk vir 3/4 met noemer 8.", answer: "3/4", checkMode: 'auto', correctAnswer: "3/4", explanation: "3/4 = 6/8 (vermenigvuldig bo en onder met 2). Vergelyk 6/8 en 5/8 — dieselfde noemer, vergelyk dus die tellers. 6 is groter as 5, dus is 3/4 groter." },
        { difficulty: 'Hard', question: "Watter is groter: 2/5 of 3/10? Wenk: vind eers ʼn ekwivalente breuk vir 2/5 met noemer 10.", answer: "2/5", checkMode: 'auto', correctAnswer: "2/5", explanation: "2/5 = 4/10 (vermenigvuldig bo en onder met 2). Vergelyk 4/10 en 3/10 — dieselfde noemer, vergelyk dus die tellers. 4 is groter as 3, dus is 2/5 groter." },
        { difficulty: 'Hard', question: "Vul die ontbrekende getal in: 4/5 = ?/10", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "Die noemer het van 5 na 10 gegaan (5 x 2 = 10), vermenigvuldig dus ook die teller met 2: 4 x 2 = 8." },
        { difficulty: 'Hard', question: "Vul die ontbrekende getal in: 2/3 = ?/9", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Die noemer het van 3 na 9 gegaan (3 x 3 = 9), vermenigvuldig dus ook die teller met 3: 2 x 3 = 6." },
        { difficulty: 'Hard', question: "Sipho sê 1/3 en 3/9 is ekwivalent. Is hy korrek? Verduidelik met vermenigvuldiging.", answer: "Ja, Sipho is korrek. Vermenigvuldiging van 1/3 met 3/3 gee 1 x 3 = 3 en 3 x 3 = 9, dus 1/3 = 3/9. Aangesien beide die teller en noemer met dieselfde getal (3) vermenigvuldig is, stel die breuke dieselfde hoeveelheid voor.", checkMode: 'auto', correctAnswer: "Ja", correctAnswers: ["Ja","ja"], explanation: "Vermenigvuldiging van 1/3 met 3/3 gee 3/9, dus is hulle ekwivalent." },
        { difficulty: 'Hard', question: "Lerato sê 2/6 en 3/9 is ekwivalent omdat hulle albei vereenvoudig tot 1/3. Is sy korrek? Skryf ja of nee.", answer: "Ja", checkMode: 'auto', correctAnswer: "Ja", correctAnswers: ["Ja","ja"], explanation: "2/6 vereenvoudig tot 1/3 (deel bo en onder deur 2). 3/9 vereenvoudig ook tot 1/3 (deel bo en onder deur 3). Aangesien beide tot dieselfde breuk vereenvoudig, is hulle ekwivalent." },
        { difficulty: 'Hard', question: "Orden hierdie breuke van kleinste na grootste: 3/4, 1/4, 1/2, 2/4", answer: "1/4, 1/2, 2/4, 3/4", checkMode: 'auto', correctAnswer: "1/4,1/2,2/4,3/4", correctAnswers: ["1/4,2/4,2/4,3/4","1/4,1/2,2/4,3/4"], explanation: "Skryf 1/2 as 2/4 sodat al die breuke noemer 4 deel: 1/4, 2/4, 2/4, 3/4. Aangesien 1/2 = 2/4, gee die ordening volgens teller (met die gelyke paar saam) van kleinste na grootste: 1/4, 1/2 (=2/4), 2/4, 3/4." },
        { difficulty: 'Hard', question: "Verduidelik waarom 4/8 en 1/2 ekwivalente breuke is sonder om ʼn prentjie te teken.", answer: "4/8 en 1/2 is ekwivalent omdat, as jy beide die teller en noemer van 4/8 deur 4 deel, jy 1/2 kry (4 gedeel deur 4 = 1, en 8 gedeel deur 4 = 2). Om die boonste en onderste getal van ʼn breuk deur dieselfde getal te deel, verander nie die waarde nie, dus stel 4/8 en 1/2 dieselfde hoeveelheid voor.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Uitstekend! Jy het die vergelyking, ordening en vind van ekwivalente breuke bemeester." },
        { minScore: 19, message: "Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer." },
        { minScore: 13, message: "Goeie poging! Gaan die uitgewerkte voorbeelde oor vergelyking en ekwivalente breuke weer deur." },
        { minScore: 0, message: "Hou aan probeer — werk weer deur die studiegids en probeer hierdie afdeling weer." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // AFDELING 3 — BREUK VAN ʼN HEELGETAL EN WOORDPROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Afdeling 3: Breuk van ʼn Heelgetal',
      questions: [
        { difficulty: 'Easy', question: "Vind 1/2 van 10.", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Stap 1: Deel deur die noemer: 10 / 2 = 5. Stap 2: Vermenigvuldig met die teller: 5 x 1 = 5." },
        { difficulty: 'Easy', question: "Vind 1/2 van 20.", answer: "10", checkMode: 'auto', correctAnswer: "10", explanation: "Stap 1: 20 / 2 = 10. Stap 2: 10 x 1 = 10." },
        { difficulty: 'Easy', question: "Vind 1/4 van 20.", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Stap 1: 20 / 4 = 5. Stap 2: 5 x 1 = 5." },
        { difficulty: 'Easy', question: "Vind 1/3 van 18.", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Stap 1: 18 / 3 = 6. Stap 2: 6 x 1 = 6." },
        { difficulty: 'Easy', question: "Vind 1/5 van 25.", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Stap 1: 25 / 5 = 5. Stap 2: 5 x 1 = 5." },
        { difficulty: 'Medium', question: "Vind 3/4 van 24.", answer: "18", checkMode: 'auto', correctAnswer: "18", explanation: "Stap 1: 24 / 4 = 6. Stap 2: 6 x 3 = 18." },
        { difficulty: 'Medium', question: "Vind 2/5 van 25.", answer: "10", checkMode: 'auto', correctAnswer: "10", explanation: "Stap 1: 25 / 5 = 5. Stap 2: 5 x 2 = 10." },
        { difficulty: 'Medium', question: "Vind 3/8 van 40.", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Stap 1: 40 / 8 = 5. Stap 2: 5 x 3 = 15." },
        { difficulty: 'Medium', question: "Vind 2/3 van 30.", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Stap 1: 30 / 3 = 10. Stap 2: 10 x 2 = 20." },
        { difficulty: 'Medium', question: "Vind 5/6 van 24.", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Stap 1: 24 / 6 = 4. Stap 2: 4 x 5 = 20." },
        { difficulty: 'Medium', question: "Vind 3/10 van 50.", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Stap 1: 50 / 10 = 5. Stap 2: 5 x 3 = 15." },
        { difficulty: 'Medium', question: "Vind 3/5 van 50.", answer: "30", checkMode: 'auto', correctAnswer: "30", explanation: "Stap 1: 50 / 5 = 10. Stap 2: 10 x 3 = 30." },
        { difficulty: 'Medium', question: "ʼn Klas het 24 leerders. ʼn Kwart van hulle dra brille. Hoeveel leerders dra brille?", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Vind 1/4 van 24. Stap 1: 24 / 4 = 6. Stap 2: 6 x 1 = 6. 6 leerders dra brille." },
        { difficulty: 'Medium', question: "ʼn Boer het 30 hoenders. Twee derdes van hulle is henne. Hoeveel henne het die boer?", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Vind 2/3 van 30. Stap 1: 30 / 3 = 10. Stap 2: 10 x 2 = 20. Die boer het 20 henne." },
        { difficulty: 'Medium', question: "ʼn Winkel het 40 brode. Drie agtstes is die oggend verkoop. Hoeveel brode is verkoop?", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Vind 3/8 van 40. Stap 1: 40 / 8 = 5. Stap 2: 5 x 3 = 15. 15 brode is verkoop." },
        { difficulty: 'Medium', question: "Thabo het R40. Hy spandeer 1/5 daarvan aan lekkers. Hoeveel geld spandeer hy?", answer: "R8", checkMode: 'auto', correctAnswer: "8", correctAnswers: ["8","R8"], explanation: "Vind 1/5 van 40. Stap 1: 40 / 5 = 8. Stap 2: 8 x 1 = 8. Hy spandeer R8." },
        { difficulty: 'Hard', question: "ʼn Skool het 100 leerders. Drie kwarte van hulle stap skool toe. Hoeveel leerders stap skool toe?", answer: "75", checkMode: 'auto', correctAnswer: "75", explanation: "Vind 3/4 van 100. Stap 1: 100 / 4 = 25. Stap 2: 25 x 3 = 75. 75 leerders stap skool toe." },
        { difficulty: 'Hard', question: "ʼn Plaas het 60 diere. Twee derdes is koeie en die res is bokke. Hoeveel koeie is daar?", answer: "40", checkMode: 'auto', correctAnswer: "40", explanation: "Vind 2/3 van 60. Stap 1: 60 / 3 = 20. Stap 2: 20 x 2 = 40. Daar is 40 koeie." },
        { difficulty: 'Hard', question: "ʼn Plaas het 60 diere. Twee derdes is koeie en die res is bokke. Hoeveel bokke is daar?", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Koeie = 2/3 van 60. Stap 1: 60/3=20. Stap 2: 20x2=40 koeie. Bokke = 60 min 40 = 20." },
        { difficulty: 'Hard', question: "ʼn Bakkery maak 80 muffins. Sewe tiendes daarvan is sjokoladegeur. Hoeveel sjokolademuffins is daar?", answer: "56", checkMode: 'auto', correctAnswer: "56", explanation: "Vind 7/10 van 80. Stap 1: 80 / 10 = 8. Stap 2: 8 x 7 = 56. Daar is 56 sjokolademuffins." },
        { difficulty: 'Hard', question: "ʼn Netbalspan maak 40 doele in ʼn seisoen. Vyf agstes van die doele is deur Amahle aangeteken. Hoeveel doele het Amahle aangeteken?", answer: "25", checkMode: 'auto', correctAnswer: "25", explanation: "Vind 5/8 van 40. Stap 1: 40 / 8 = 5. Stap 2: 5 x 5 = 25. Amahle het 25 doele aangeteken." },
        { difficulty: 'Hard', question: "ʼn Biblioteek het 90 boeke. Twee derdes daarvan is fiksie. Hoeveel boeke is fiksie?", answer: "60", checkMode: 'auto', correctAnswer: "60", explanation: "Vind 2/3 van 90. Stap 1: 90 / 3 = 30. Stap 2: 30 x 2 = 60. Daar is 60 fiksieboeke." },
        { difficulty: 'Hard', question: "ʼn Watertenk hou 100 liter wanneer vol. Dit is tans 1/2 vol. Daarna word 1/4 van die volle tenk se hoeveelheid bygevoeg. Hoeveel liter is nou in die tenk?", answer: "75", checkMode: 'auto', correctAnswer: "75", explanation: "Half vol = 1/2 van 100 = 50 liter. Voeg 1/4 van 100 = 25 liter by. Totaal = 50 + 25 = 75 liter." },
        { difficulty: 'Hard', question: "ʼn Klas van 32 leerders word gevra wat hul gunsteling sport is. Drie kwarte kies sokker en die res kies netbal. Hoeveel leerders het netbal gekies?", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "Sokker = 3/4 van 32. Stap 1: 32/4=8. Stap 2: 8x3=24 het sokker gekies. Netbal = 32 min 24 = 8." },
        { difficulty: 'Hard', question: "Verduidelik, in jou eie woorde, die tweestapreël vir die vind van ʼn breuk van ʼn heelgetal.", answer: "Stap 1: Deel die heelgetal deur die noemer van die breuk. Stap 2: Vermenigvuldig die resultaat met die teller van die breuk. Byvoorbeeld, om 3/4 van 24 te vind, deel eers 24 deur 4 om 6 te kry, vermenigvuldig dan 6 met 3 om 18 te kry.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Uitstekend! Jy kan met selfvertroue ʼn breuk van ʼn heelgetal vind en woordprobleme oplos." },
        { minScore: 19, message: "Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer." },
        { minScore: 13, message: "Goeie poging! Gaan die deel-dan-vermenigvuldig uitgewerkte voorbeelde weer deur." },
        { minScore: 0, message: "Hou aan probeer — werk weer deur die studiegids en probeer hierdie afdeling weer." },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // AFDELING 4 — MULTISTAP EN GEKOMBINEERDE PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Afdeling 4: Multistap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Easy', question: "Bereken: 2/7 + 3/7", answer: "5/7", checkMode: 'auto', correctAnswer: "5/7", explanation: "Dieselfde noemer (7) — hou dit. Tel tellers bymekaar: 2 + 3 = 5. Antwoord = 5/7" },
        { difficulty: 'Easy', question: "Bereken: 3/8 + 4/8", answer: "7/8", checkMode: 'auto', correctAnswer: "7/8", explanation: "Dieselfde noemer (8) — hou dit. Tel tellers bymekaar: 3 + 4 = 7. Antwoord = 7/8" },
        { difficulty: 'Easy', question: "Bereken: 1/5 + 2/5", answer: "3/5", checkMode: 'auto', correctAnswer: "3/5", explanation: "Dieselfde noemer (5) — hou dit. Tel tellers bymekaar: 1 + 2 = 3. Antwoord = 3/5" },
        { difficulty: 'Easy', question: "Bereken: 1/6 + 3/6", answer: "4/6", checkMode: 'auto', correctAnswer: "4/6", explanation: "Dieselfde noemer (6) — hou dit. Tel tellers bymekaar: 1 + 3 = 4. Antwoord = 4/6" },
        { difficulty: 'Medium', question: "Bereken: 3/10 + 4/10 + 2/10", answer: "9/10", checkMode: 'auto', correctAnswer: "9/10", explanation: "Dieselfde noemer (10) — hou dit. Tel al die tellers bymekaar: 3 + 4 + 2 = 9. Antwoord = 9/10" },
        { difficulty: 'Medium', question: "Bereken: 2/9 + 3/9 + 1/9", answer: "6/9", checkMode: 'auto', correctAnswer: "6/9", explanation: "Dieselfde noemer (9) — hou dit. Tel al die tellers bymekaar: 2 + 3 + 1 = 6. Antwoord = 6/9" },
        { difficulty: 'Medium', question: "Bereken: 1/8 + 2/8 + 3/8", answer: "6/8", checkMode: 'auto', correctAnswer: "6/8", explanation: "Dieselfde noemer (8) — hou dit. Tel al die tellers bymekaar: 1 + 2 + 3 = 6. Antwoord = 6/8" },
        { difficulty: 'Medium', question: "Amahle het 2/6 van ʼn koek in die oggend geëet en 3/6 in die middag. Watter breuk van die koek het sy altesaam geëet?", answer: "5/6", checkMode: 'auto', correctAnswer: "5/6", explanation: "Tel die breuke bymekaar: 2/6 + 3/6. Dieselfde noemer, tel tellers bymekaar: 2 + 3 = 5. Sy het altesaam 5/6 geëet." },
        { difficulty: 'Medium', question: "Amahle het 2/6 van ʼn koek in die oggend geëet en 3/6 in die middag (5/6 altesaam). Watter breuk van die koek is oor?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "ʼn Hele koek = 6/6. Amahle het 2/6 + 3/6 = 5/6 altesaam geëet. Oor = 6/6 min 5/6 = 1/6." },
        { difficulty: 'Medium', question: "Sipho het 1/8 van ʼn heining Maandag geverf en 3/8 Dinsdag. Watter breuk van die heining het hy altesaam geverf?", answer: "4/8", checkMode: 'auto', correctAnswer: "4/8", explanation: "Tel die breuke bymekaar: 1/8 + 3/8. Dieselfde noemer, tel tellers bymekaar: 1 + 3 = 4. Hy het altesaam 4/8 geverf." },
        { difficulty: 'Medium', question: "Sipho het 1/8 van ʼn heining Maandag geverf en 3/8 Dinsdag (4/8 altesaam). Watter breuk moet nog geverf word?", answer: "4/8", checkMode: 'auto', correctAnswer: "4/8", explanation: "Hele heining = 8/8. Sipho het 1/8 + 3/8 = 4/8 geverf. Oorblywend = 8/8 min 4/8 = 4/8." },
        { difficulty: 'Medium', question: "ʼn Pizza word in 10 gelyke skywe gesny. Lerato eet 4/10 en haar broer eet 3/10. Watter breuk van die pizza het hulle saam geëet?", answer: "7/10", checkMode: 'auto', correctAnswer: "7/10", explanation: "Tel die breuke bymekaar: 4/10 + 3/10. Dieselfde noemer, tel tellers bymekaar: 4 + 3 = 7. Saam het hulle 7/10 geëet." },
        { difficulty: 'Hard', question: "ʼn Pizza word in 10 gelyke skywe gesny. Lerato eet 4/10 en haar broer eet 3/10. Watter breuk van die pizza is oor nadat hulle albei geëet het?", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "Saam het hulle 4/10 + 3/10 = 7/10 geëet. Hele pizza = 10/10. Oor = 10/10 min 7/10 = 3/10." },
        { difficulty: 'Hard', question: "ʼn Skool het 32 leerders in ʼn klas. Drie kwarte kies sokker as hul gunsteling sport. Van die leerders wat sokker gekies het, speel die helfte ook krieket. Hoeveel leerders speel beide sokker en krieket?", answer: "12", checkMode: 'auto', correctAnswer: "12", explanation: "Sokkerleerders = 3/4 van 32. Stap 1: 32/4=8. Stap 2: 8x3=24 speel sokker. Die helfte van 24 speel ook krieket: 24/2=12." },
        { difficulty: 'Hard', question: "ʼn Tenk hou 80 liter. Dit begin 3/4 vol, en dan lek 1/8 van die volle tenkkapasiteit uit. Hoeveel liter is oor in die tenk?", answer: "50", checkMode: 'auto', correctAnswer: "50", explanation: "3/4 van 80: Stap 1: 80/4=20. Stap 2: 20x3=60 liter om mee te begin. Lek = 1/8 van 80: Stap 1: 80/8=10. Stap 2: 10x1=10 liter lek uit. Oorblywend = 60 min 10 = 50 liter." },
        { difficulty: 'Hard', question: "Thabo het 1/4 van ʼn sjokoladelekker met 12 stukke Maandag geëet, en 3/12 meer Dinsdag. Watter breuk van die lekker het hy altesaam geëet? Wenk: skryf eers 1/4 met noemer 12.", answer: "6/12", checkMode: 'auto', correctAnswer: "6/12", correctAnswers: ["6/12","1/2"], explanation: "1/4 = 3/12 (vermenigvuldig bo en onder met 3). Tel bymekaar: 3/12 + 3/12 = 6/12. Hy het altesaam 6/12 geëet." },
        { difficulty: 'Hard', question: "ʼn Boer het 45 skape. Twee derdes is ooie en die res is ramme. Van die ooie het 1/5 lammers. Hoeveel ooie het lammers?", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Ooie = 2/3 van 45. Stap 1: 45/3=15. Stap 2: 15x2=30 ooie. Ooie met lammers = 1/5 van 30. Stap 1: 30/5=6. Stap 2: 6x1=6." },
        { difficulty: 'Hard', question: "ʼn Resep gebruik 2/8 koppie suiker en 3/8 koppie meel, waarna 1/8 koppie ekstra suiker bygevoeg word. Watter breuk van ʼn koppie suiker word altesaam gebruik?", answer: "3/8", checkMode: 'auto', correctAnswer: "3/8", explanation: "Net die suiker: 2/8 + 1/8. Dieselfde noemer, tel tellers bymekaar: 2 + 1 = 3. Totale suiker = 3/8 koppie (die meel, 3/8, is ʼn aparte bestanddeel en word nie by die suiker getel nie)." },
        { difficulty: 'Hard', question: "Lerato sê dat 3/4 van 24 dieselfde antwoord gee as 24 gedeel deur 4 en dan vermenigvuldig met 3. Is sy korrek? Verduidelik met die berekening.", answer: "Ja, Lerato is korrek. Om 3/4 van 24 te vind, deel jy 24 deur die noemer (4) om 6 te kry, vermenigvuldig dan met die teller (3) om 18 te kry. Dit is presies \"24 gedeel deur 4, dan vermenigvuldig met 3\", dus beskryf beide metodes dieselfde berekening en gee dieselfde antwoord, 18.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Sipho sê dat omdat 2/4 en 1/2 ekwivalente breuke is, om 2/4 van ʼn getal te vind altyd dieselfde antwoord gee as om 1/2 van daardie getal te vind. Is hy korrek? Kontroleer met die getal 20.", answer: "Ja, Sipho is korrek. 1/2 van 20: deel 20 deur 2 om 10 te kry, vermenigvuldig met 1 om 10 te kry. 2/4 van 20: deel 20 deur 4 om 5 te kry, vermenigvuldig met 2 om 10 te kry. Albei gee 10, wat bevestig dat ekwivalente breuke van dieselfde getal altyd dieselfde antwoord gee.", checkMode: 'self' },
        { difficulty: 'Hard', question: "Verduidelik waarom jy breuke net direk kan optel deur die tellers by te tel wanneer die noemers dieselfde is.", answer: "Wanneer twee breuke dieselfde noemer het, is die geheel vir beide breuke in dieselfde grootte gelyke dele verdeel. Dit beteken die stukke kan eenvoudig saam getel (bygetel) word, dus hoef jy net die tellers by te tel en die noemer dieselfde te hou. As die noemers verskillend was, sou die stukke verskillende groottes wees, en om die tellers direk by te tel sou nie ʼn korrekte antwoord gee nie.", checkMode: 'self' },
        { difficulty: 'Hard', question: "ʼn Lint word in 12 gelyke stukke gesny. Amahle gebruik 1/12 vir ʼn strik, 4/12 vir ʼn toedraaiversiering, en 2/12 vir ʼn etiket. Watter breuk van die lint het sy altesaam gebruik?", answer: "7/12", checkMode: 'auto', correctAnswer: "7/12", explanation: "Tel die breuke bymekaar: 1/12 + 4/12 + 2/12. Dieselfde noemer, tel tellers bymekaar: 1 + 4 + 2 = 7. Sy het altesaam 7/12 gebruik." },
        { difficulty: 'Hard', question: "ʼn Lint word in 12 gelyke stukke gesny. Amahle gebruik 1/12 vir ʼn strik, 4/12 vir ʼn toedraaiversiering, en 2/12 vir ʼn etiket (7/12 altesaam). Watter breuk van die lint het sy oor?", answer: "5/12", checkMode: 'auto', correctAnswer: "5/12", explanation: "Amahle het 1/12 + 4/12 + 2/12 = 7/12 gebruik. Hele lint = 12/12. Oor = 12/12 min 7/12 = 5/12." },
        { difficulty: 'Hard', question: "ʼn Skool het 50 leerders in Graad 4. Twee vyfdes stap skool toe, drie tiendes fietsry, en die res word met die motor gebring. Watter breuk van die leerders word met die motor gebring? Wenk: skryf eers 2/5 met noemer 10.", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "2/5 = 4/10 (vermenigvuldig bo en onder met 2). Stap + fietsry = 4/10 + 3/10 = 7/10. Met die motor gebring = 10/10 min 7/10 = 3/10." },
        { difficulty: 'Hard', question: "Verduidelik hoe jy sou kontroleer of twee breuke met verskillende noemers, soos 2/3 en 5/8, ekwivalent is.", answer: "Om te kontroleer of twee breuke met verskillende noemers ekwivalent is, vind ʼn gemeenskaplike noemer deur beide breuke om te skakel sodat hulle dieselfde noemer het, en vergelyk dan die tellers. Vir 2/3 en 5/8 kan jy probeer om te sien of daar ʼn heelgetal is wat albei noemers laat ooreenstem, of beide omskakel na noemer 24 (2/3 = 16/24 en 5/8 = 15/24). Aangesien 16/24 nie gelyk is aan 15/24 nie, is die breuke nie ekwivalent nie.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: "Uitstekend! Jy het multistap en gekombineerde breukprobleme bemeester." },
        { minScore: 19, message: "Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer." },
        { minScore: 13, message: "Goeie poging! Gaan die multistap uitgewerkte voorbeelde weer deur." },
        { minScore: 0, message: "Hou aan probeer — werk weer deur die studiegids en probeer hierdie afdeling weer." },
      ],
    },
  ],
}
