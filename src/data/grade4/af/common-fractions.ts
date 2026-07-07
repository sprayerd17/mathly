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
    // STEL 1 (20 Vrae) — 6 vaardigheidsblokke:
    // 0-3 benoeming, 4-7 versamelings/oorblywend, 8-11 vergelyking, 12-15 ekwivalensie,
    // 16-18 breuk van ʼn getal, 19 hoogtepunt (teller/noemer betekenis)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: "ʼn Pizza word in 4 gelyke skywe gesny. Thabo eet 1 skyf. Watter breuk van die pizza het hy geëet?", answer: "1/4", checkMode: 'auto', correctAnswer: "1/4", explanation: "1 skyf geëet uit 4 gelyke skywe. Breuk = 1/4" },
        { difficulty: 'Easy', question: "ʼn Vorm is in 6 gelyke dele verdeel en 2 is geskadueer. Watter breuk is geskadueer?", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", explanation: "2 dele geskadueer uit 6 gelyke dele. Breuk = 2/6" },
        { difficulty: 'Easy', question: "Wat is die noemer in die breuk 3/8?", answer: "8", checkMode: 'auto', correctAnswer: "8", explanation: "Die noemer is die onderste getal. Dit vertel ons hoeveel gelyke dele die geheel in gesny is. In 3/8 is die noemer 8." },
        { difficulty: 'Easy', question: "ʼn Lint word gelyk gedeel tussen 5 vriende sodat elkeen een stuk kry. Watter breuk van die lint kry elke vriend?", answer: "1/5", checkMode: 'auto', correctAnswer: "1/5", explanation: "Die lint word in 5 gelyke stukke gedeel (noemer 5) en elke vriend kry 1 stuk (teller 1). Breuk = 1/5" },
        { difficulty: 'Easy-Medium', question: "ʼn Koek word in 6 gelyke stukke gesny. 5 stukke word geëet. Watter breuk is oor?", answer: "1/6", checkMode: 'auto', correctAnswer: "1/6", explanation: "Totale stukke = 6. Geëet = 5. Oor = 6 min 5 = 1. Breuk oor = 1/6" },
        { difficulty: 'Easy-Medium', question: "ʼn Fles het 20 albasters. 6 is rooi, 9 is blou en die res is groen. Watter breuk is groen?", answer: "5/20", checkMode: 'auto', correctAnswer: "5/20", explanation: "Totaal = 20. Rooi = 6, Blou = 9. Groen = 20 min 6 min 9 = 5. Breuk = 5/20" },
        { difficulty: 'Easy-Medium', question: "ʼn Netbalspan het 18 spelers. 10 word gekies om die wedstryd te begin, en die res sit op die bank. Watter breuk van die span sit op die bank?", answer: "8/18", checkMode: 'auto', correctAnswer: "8/18", explanation: "Totale spelers = 18. Beginners = 10. Op die bank = 18 min 10 = 8. Breuk = 8/18" },
        { difficulty: 'Medium', question: "Groep A het 3 dele geskadueer uit 4. Groep B het 3 dele geskadueer uit 8. Watter groep het die groter breuk geskadueer?", answer: "Groep A", checkMode: 'auto', correctAnswer: "GroepA", correctAnswers: ["GroepA","A"], explanation: "Groep A = 3/4 en Groep B = 3/8. Dieselfde teller, vergelyk dus die noemers — die kleiner noemer gee groter dele. Aangesien 4 kleiner is as 8, is 3/4 groter, dus het Groep A die groter breuk geskadueer." },
        { difficulty: 'Medium', question: "Twee vriende vergelyk papierstroke van dieselfde lengte. Aisha se strook wys 3/7 geskadueer en Zanele se strook wys 5/7 geskadueer. Wie se strook het meer geskadueer?", answer: "Zanele", checkMode: 'auto', correctAnswer: "Zanele", explanation: "3/7 en 5/7 het dieselfde noemer (7), vergelyk dus die tellers. 5 is groter as 3, dus het Zanele se 5/7 meer." },
        { difficulty: 'Medium', question: "ʼn Leerder sê 1/8 moet groter wees as 1/4 omdat 8 ʼn groter getal is as 4. Is die leerder korrek? Verduidelik waarom of waarom nie.", answer: "Nee, die leerder is verkeerd. Albei breuke is eenheidsbreuke (teller 1). ʼn Groter noemer beteken die geheel is in meer dele gesny, dus is elke deel kleiner. Aangesien 8 groter is as 4, is elke agtste kleiner as elke kwart, dus is 1/4 eintlik groter as 1/8.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Orden hierdie breuke van kleinste na grootste: 4/9, 1/9, 7/9, 3/9", answer: "1/9, 3/9, 4/9, 7/9", checkMode: 'auto', correctAnswer: "1/9,3/9,4/9,7/9", correctAnswers: ["1/9,3/9,4/9,7/9","1/93/94/97/9"], explanation: "Dieselfde noemer (9), orden dus volgens tellers van kleinste na grootste: 1, 3, 4, 7. Volgorde: 1/9, 3/9, 4/9, 7/9" },
        { difficulty: 'Medium', question: "Waar of onwaar: 5/8 is groter as 3/8, omdat wanneer die noemers dieselfde is, die breuk met die groter teller groter is. Verduidelik jou antwoord.", answer: "Waar. Wanneer twee breuke dieselfde noemer het, is die geheel in gelyke grootte dele verdeel, dus verteenwoordig die breuk met meer van daardie dele (die groter teller) ʼn groter hoeveelheid. Aangesien 5 groter is as 3, is 5/8 groter as 3/8.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Vind ʼn breuk ekwivalent aan 1/2.", answer: "2/4", checkMode: 'auto', correctAnswer: "2/4", correctAnswers: ["2/4","3/6","4/8","5/10"], explanation: "Vermenigvuldig teller en noemer met dieselfde getal, bv. 1 x 2 = 2 en 2 x 2 = 4, wat 2/4 gee." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 1/4 = ?/12", answer: "3", checkMode: 'auto', correctAnswer: "3", explanation: "Die noemer het van 4 na 12 gegaan (4 x 3 = 12), vermenigvuldig dus ook die teller met 3: 1 x 3 = 3." },
        { difficulty: 'Medium', question: "Is 2/3 en 4/6 ekwivalent? Skryf ja of nee.", answer: "Ja", checkMode: 'auto', correctAnswer: "Ja", correctAnswers: ["Ja","ja"], explanation: "Vermenigvuldig 2/3 met 2/2: 2 x 2 = 4 en 3 x 2 = 6, wat 4/6 gee. Aangesien 4/6 = 4/6, is hulle ekwivalent." },
        { difficulty: 'Medium', question: "Sipho sê 1/3 en 3/9 is ekwivalent. Is hy korrek? Verduidelik met vermenigvuldiging.", answer: "Ja, Sipho is korrek. Vermenigvuldiging van 1/3 met 3/3 gee 1 x 3 = 3 en 3 x 3 = 9, dus 1/3 = 3/9. Aangesien beide die teller en noemer met dieselfde getal (3) vermenigvuldig is, stel die breuke dieselfde hoeveelheid voor.", checkMode: 'auto', correctAnswer: "Ja", correctAnswers: ["Ja","ja"], explanation: "Vermenigvuldiging van 1/3 met 3/3 gee 3/9, dus is hulle ekwivalent." },
        { difficulty: 'Medium-Hard', question: "Vind 3/10 van 50.", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Stap 1: 50 / 10 = 5. Stap 2: 5 x 3 = 15." },
        { difficulty: 'Medium-Hard', question: "ʼn Netbalspan speel 40 wedstryde in ʼn seisoen. Hulle wen 3/8 daarvan. Hoeveel wedstryde wen hulle?", answer: "15", checkMode: 'auto', correctAnswer: "15", explanation: "Vind 3/8 van 40. Stap 1: 40 / 8 = 5. Stap 2: 5 x 3 = 15. Die span wen 15 wedstryde." },
        { difficulty: 'Medium-Hard', question: "Watter is meer: 3/4 van 20 of 2/5 van 20?", answer: "3/4 van 20", checkMode: 'auto', correctAnswer: "3/4van20", correctAnswers: ["3/4van20","3/4"], explanation: "3/4 van 20: Stap 1: 20/4=5. Stap 2: 5x3=15. 2/5 van 20: Stap 1: 20/5=4. Stap 2: 4x2=8. Aangesien 15 groter is as 8, is 3/4 van 20 meer." },
        { difficulty: 'Hard', question: "Verduidelik, in jou eie woorde, wat die teller en noemer van ʼn breuk jou vertel.", answer: "Die teller (boonste getal) vertel jou hoeveel gelyke dele jy het. Die noemer (onderste getal) vertel jou hoeveel gelyke dele die geheel in verdeel is. Byvoorbeeld, in 3/8 beteken die noemer 8 dat die geheel in 8 gelyke stukke gesny is, en die teller 3 beteken ons het 3 van daardie stukke.", checkMode: 'self' },
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
        { difficulty: 'Easy', question: "ʼn Sjokoladelekker het 8 gelyke stukke. Sipho eet 3 stukke. Watter breuk het hy geëet?", answer: "3/8", checkMode: 'auto', correctAnswer: "3/8", explanation: "3 stukke geëet uit 8 gelyke stukke. Breuk = 3/8" },
        { difficulty: 'Easy', question: "ʼn Vorm is in 5 gelyke dele verdeel en 4 is geskadueer. Watter breuk is geskadueer?", answer: "4/5", checkMode: 'auto', correctAnswer: "4/5", explanation: "4 dele geskadueer uit 5 gelyke dele. Breuk = 4/5" },
        { difficulty: 'Easy', question: "Wat is die teller in die breuk 5/9?", answer: "5", checkMode: 'auto', correctAnswer: "5", explanation: "Die teller is die boonste getal. Dit vertel ons hoeveel gelyke dele ons het. In 5/9 is die teller 5." },
        { difficulty: 'Easy', question: "ʼn Pakkie beskuitjies word gelyk gedeel tussen 6 leerders. As een leerder 2 dele neem, watter breuk van die beskuitjies het daardie leerder gekry?", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", explanation: "Die beskuitjies word in 6 gelyke dele verdeel (noemer 6) en die leerder neem 2 dele (teller 2). Breuk = 2/6" },
        { difficulty: 'Easy-Medium', question: "ʼn Pizza word in 8 gelyke skywe gesny. 3 skywe word geëet. Watter breuk is oor?", answer: "5/8", checkMode: 'auto', correctAnswer: "5/8", explanation: "Totale skywe = 8. Geëet = 3. Oor = 8 min 3 = 5. Breuk oor = 5/8" },
        { difficulty: 'Easy-Medium', question: "ʼn Pakkie het 24 lekkers. 10 is rooi, 8 is blou en die res is groen. Watter breuk is groen?", answer: "6/24", checkMode: 'auto', correctAnswer: "6/24", explanation: "Totaal = 24. Rooi = 10, Blou = 8. Groen = 24 min 10 min 8 = 6. Breuk = 6/24" },
        { difficulty: 'Easy-Medium', question: "ʼn Groentetuin het 20 plante. 13 is tamatieplante en die res is spinasieplante. Watter breuk van die plante is spinasie?", answer: "7/20", checkMode: 'auto', correctAnswer: "7/20", explanation: "Totale plante = 20. Tamaties = 13. Spinasie = 20 min 13 = 7. Breuk = 7/20" },
        { difficulty: 'Medium', question: "Thabo het 2 dele geskadueer uit ʼn vorm in 3 verdeel. Lerato het 2 dele geskadueer uit ʼn vorm dieselfde grootte in 6 verdeel. Wie het die groter breuk van hul vorm geskadueer?", answer: "Thabo", checkMode: 'auto', correctAnswer: "Thabo", explanation: "Thabo het 2/3 geskadueer en Lerato het 2/6 geskadueer. Dieselfde teller, vergelyk dus die noemers — die kleiner noemer gee groter dele. Aangesien 3 kleiner is as 6, is 2/3 groter, dus het Thabo die groter breuk geskadueer." },
        { difficulty: 'Medium', question: "Twee waterbotteltjies hou dieselfde totale hoeveelheid. Een is gevul tot 2/9 en die ander tot 6/9. Watter bottel het minder water in?", answer: "2/9", checkMode: 'auto', correctAnswer: "2/9", explanation: "2/9 en 6/9 het dieselfde noemer (9), vergelyk dus die tellers. 2 is kleiner as 6, dus het die bottel wat tot 2/9 gevul is minder water." },
        { difficulty: 'Medium', question: "ʼn Leerder beweer 1/6 is groter as 1/3 omdat 6 ʼn groter getal is as 3. Verduidelik of hierdie bewering korrek is.", answer: "Nee, die bewering is verkeerd. Albei is eenheidsbreuke (teller 1), dus beteken ʼn groter noemer dat die geheel in meer, kleiner stukke verdeel is. Aangesien 6 groter is as 3, is sesdes kleiner stukke as derdes, dus is 1/6 eintlik kleiner as 1/3.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Orden hierdie breuke van grootste na kleinste: 1/2, 1/5, 1/3, 1/10", answer: "1/2, 1/3, 1/5, 1/10", checkMode: 'auto', correctAnswer: "1/2,1/3,1/5,1/10", correctAnswers: ["1/2,1/3,1/5,1/10"], explanation: "Dit is almal eenheidsbreuke, dus hoe kleiner die noemer, hoe groter die breuk. Orden van grootste na kleinste noemer gee: 1/2, 1/3, 1/5, 1/10" },
        { difficulty: 'Medium', question: "Watter is groter: 3/4 of 5/8? Wenk: vind eers ʼn ekwivalente breuk vir 3/4 met noemer 8. Verduidelik jou redenasie.", answer: "3/4 is groter. 3/4 = 6/8 (vermenigvuldig bo en onder met 2). Vergelyk nou 6/8 en 5/8 — dieselfde noemer, vergelyk dus die tellers. Aangesien 6 groter is as 5, is 3/4 groter.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Vind ʼn breuk ekwivalent aan 1/3.", answer: "2/6", checkMode: 'auto', correctAnswer: "2/6", correctAnswers: ["2/6","3/9"], explanation: "Vermenigvuldig teller en noemer met dieselfde getal, bv. 1 x 2 = 2 en 3 x 2 = 6, wat 2/6 gee." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 2/5 = ?/10", answer: "4", checkMode: 'auto', correctAnswer: "4", explanation: "Die noemer het van 5 na 10 gegaan (5 x 2 = 10), vermenigvuldig dus ook die teller met 2: 2 x 2 = 4." },
        { difficulty: 'Medium', question: "Is 3/5 en 5/8 ekwivalent? Skryf ja of nee.", answer: "Nee", checkMode: 'auto', correctAnswer: "Nee", correctAnswers: ["Nee","nee"], explanation: "Daar is geen heelgetal waarmee jy beide 3 en 5 kan vermenigvuldig om 5 en 8 te kry nie, dus is hulle nie ekwivalent nie." },
        { difficulty: 'Medium', question: "Lerato sê 2/6 en 3/9 is ekwivalent omdat hulle albei vereenvoudig tot 1/3. Is sy korrek? Skryf ja of nee.", answer: "Ja", checkMode: 'auto', correctAnswer: "Ja", correctAnswers: ["Ja","ja"], explanation: "2/6 vereenvoudig tot 1/3 (deel bo en onder deur 2). 3/9 vereenvoudig ook tot 1/3 (deel bo en onder deur 3). Aangesien beide tot dieselfde breuk vereenvoudig, is hulle ekwivalent." },
        { difficulty: 'Medium-Hard', question: "Vind 5/6 van 24.", answer: "20", checkMode: 'auto', correctAnswer: "20", explanation: "Stap 1: 24 / 6 = 4. Stap 2: 4 x 5 = 20." },
        { difficulty: 'Medium-Hard', question: "ʼn Fietsryer beplan om 40 km te ry. Sy het reeds 3/5 van die afstand gery. Hoeveel kilometer het sy reeds gery?", answer: "24", checkMode: 'auto', correctAnswer: "24", explanation: "Vind 3/5 van 40. Stap 1: 40 / 5 = 8. Stap 2: 8 x 3 = 24. Sy het 24 km gery." },
        { difficulty: 'Medium-Hard', question: "Watter is meer: 5/6 van 18 of 2/3 van 18?", answer: "5/6 van 18", checkMode: 'auto', correctAnswer: "5/6van18", correctAnswers: ["5/6van18","5/6"], explanation: "5/6 van 18: Stap 1: 18/6=3. Stap 2: 3x5=15. 2/3 van 18: Stap 1: 18/3=6. Stap 2: 6x2=12. Aangesien 15 groter is as 12, is 5/6 van 18 meer." },
        { difficulty: 'Hard', question: "Verduidelik waarom jy twee breuke net direk kan optel deur die tellers by te tel wanneer die noemers dieselfde is.", answer: "Wanneer twee breuke dieselfde noemer het, is die geheel vir beide breuke in dieselfde grootte gelyke dele verdeel, dus is die stukke dieselfde grootte en kan hulle eenvoudig saam getel word. Daarom tel jy net die tellers bymekaar en hou die noemer dieselfde. As die noemers verskillend was, sou die stukke verskillende groottes wees, en om die tellers direk by te tel sou ʼn verkeerde antwoord gee.", checkMode: 'self' },
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
        { difficulty: 'Easy', question: "ʼn Lemoen word in 10 gelyke segmente verdeel. Lerato gee 3 segmente weg. Watter breuk het sy weggegee?", answer: "3/10", checkMode: 'auto', correctAnswer: "3/10", explanation: "3 segmente weggegee uit 10 gelyke segmente. Breuk = 3/10" },
        { difficulty: 'Easy', question: "ʼn Vorm is in 3 gelyke dele verdeel en 1 is geskadueer. Watter breuk is geskadueer?", answer: "1/3", checkMode: 'auto', correctAnswer: "1/3", explanation: "1 deel geskadueer uit 3 gelyke dele. Breuk = 1/3" },
        { difficulty: 'Easy', question: "In die breuk 7/12, watter getal is die teller en watter is die noemer?", answer: "7 is die teller, 12 is die noemer", checkMode: 'auto', correctAnswer: "7isdieteller12isdienoemer", correctAnswers: ["7isdieteller12isdienoemer","teller7noemer12"], explanation: "Die teller is die boonste getal (7). Die noemer is die onderste getal (12)." },
        { difficulty: 'Easy', question: "ʼn Pakkie van 9 saailinge word gelyk verdeel tussen 9 plantpotte, een saailing per pot. Watter breuk van die saailinge gaan in 4 van die potte?", answer: "4/9", checkMode: 'auto', correctAnswer: "4/9", explanation: "Daar is 9 gelyke saailinge in totaal (noemer 9) en 4 daarvan gaan in 4 potte (teller 4). Breuk = 4/9" },
        { difficulty: 'Easy-Medium', question: "ʼn Sjokoladelekker het 10 gelyke stukke. Amahle eet 6 stukke. Watter breuk van die lekker is oor?", answer: "4/10", checkMode: 'auto', correctAnswer: "4/10", explanation: "Totale stukke = 10. Geëet = 6. Oor = 10 min 6 = 4. Breuk oor = 4/10" },
        { difficulty: 'Easy-Medium', question: "ʼn Skinkbord het 12 muffins. 5 het versiersuiker, 4 het strooisels en die res is plein. Watter breuk is plein?", answer: "3/12", checkMode: 'auto', correctAnswer: "3/12", explanation: "Totale muffins = 12. Versiersuiker = 5, Strooisels = 4. Plein = 12 min 5 min 4 = 3. Breuk = 3/12" },
        { difficulty: 'Easy-Medium', question: "ʼn Boks van 24 kryte het 9 wat gebreek is. Die res is nog heel. Watter breuk van die kryte is nog heel?", answer: "15/24", checkMode: 'auto', correctAnswer: "15/24", explanation: "Totale kryte = 24. Gebreek = 9. Heel = 24 min 9 = 15. Breuk = 15/24" },
        { difficulty: 'Medium', question: "ʼn Blou reghoek het 4 dele geskadueer uit 10. ʼn Groen reghoek dieselfde grootte het 4 dele geskadueer uit 5. Watter reghoek het die groter breuk geskadueer?", answer: "Groen reghoek", checkMode: 'auto', correctAnswer: "Groenreghoek", correctAnswers: ["Groenreghoek","groen"], explanation: "Blou = 4/10 en Groen = 4/5. Dieselfde teller, vergelyk dus die noemers — die kleiner noemer gee groter dele. Aangesien 5 kleiner is as 10, is 4/5 groter, dus het die groen reghoek die groter breuk geskadueer." },
        { difficulty: 'Medium', question: "Twee toue van gelyke lengte is in gelyke afdelings gemerk. Een tou het 4/11 van sy lengte geverf, die ander het 8/11 geverf. Watter tou het meer verf op?", answer: "8/11", checkMode: 'auto', correctAnswer: "8/11", explanation: "4/11 en 8/11 het dieselfde noemer (11), vergelyk dus die tellers. 8 is groter as 4, dus het die tou met 8/11 meer verf." },
        { difficulty: 'Medium', question: "Verduidelik, sonder om enige deling te doen, waarom 1/5 groter moet wees as 1/9.", answer: "Albei is eenheidsbreuke (teller 1). Die noemer wys hoeveel gelyke stukke die geheel in verdeel is — verdeling in 9 stukke maak elke stuk kleiner as verdeling in slegs 5 stukke. Aangesien 5 kleiner is as 9, is elke vyfde groter as elke negende, dus is 1/5 groter as 1/9.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Orden hierdie breuke van kleinste na grootste: 3/4, 1/4, 1/2, 2/4", answer: "1/4, 1/2, 2/4, 3/4", checkMode: 'auto', correctAnswer: "1/4,1/2,2/4,3/4", correctAnswers: ["1/4,2/4,2/4,3/4","1/4,1/2,2/4,3/4"], explanation: "Skryf 1/2 as 2/4 sodat al die breuke noemer 4 deel: 1/4, 2/4, 2/4, 3/4. Aangesien 1/2 = 2/4, gee die ordening van kleinste na grootste: 1/4, 1/2 (=2/4), 2/4, 3/4." },
        { difficulty: 'Medium', question: "Waar of onwaar: om 2/5 en 3/10 te vergelyk, kan jy 2/5 as 4/10 herskryf en dan die tellers vergelyk. Verduidelik jou antwoord, en sê watter breuk groter is.", answer: "Waar. 2/5 = 4/10 (vermenigvuldig bo en onder met 2). Nou het albei breuke noemer 10, vergelyk dus die tellers: 4 en 3. Aangesien 4 groter is as 3, is 2/5 (as 4/10) groter as 3/10.", checkMode: 'self' },
        { difficulty: 'Medium', question: "Vind twee breuke wat ekwivalent is aan 3/4.", answer: "6/8 en 9/12", checkMode: 'auto', correctAnswer: "6/8en9/12", correctAnswers: ["6/8en9/12","9/12en6/8","6/8,9/12","9/12,6/8","6/89/12","9/126/8"], explanation: "Vermenigvuldig 3/4 met 2/2 om 6/8 te kry, en met 3/3 om 9/12 te kry. Beide stel dieselfde hoeveelheid as 3/4 voor." },
        { difficulty: 'Medium', question: "Vul die ontbrekende getal in: 3/8 = ?/16", answer: "6", checkMode: 'auto', correctAnswer: "6", explanation: "Die noemer het van 8 na 16 gegaan (8 x 2 = 16), vermenigvuldig dus ook die teller met 2: 3 x 2 = 6." },
        { difficulty: 'Medium', question: "Is 4/5 en 8/10 ekwivalent? Verduidelik hoe jy weet.", answer: "Ja, hulle is ekwivalent. Vermenigvuldiging van 4/5 met 2/2 gee 4 x 2 = 8 en 5 x 2 = 10, dus 4/5 = 8/10. Aangesien beide die teller en noemer met dieselfde getal vermenigvuldig is, stel die breuke dieselfde hoeveelheid voor.", checkMode: 'auto', correctAnswer: "Ja", correctAnswers: ["Ja","ja"], explanation: "Vermenigvuldiging van 4/5 met 2/2 gee 8/10, dus is hulle ekwivalent." },
        { difficulty: 'Medium', question: "Amahle beweer dat 3/5 en 6/9 ekwivalente breuke is omdat sy die teller en noemer van 3/5 met verskillende getalle vermenigvuldig het om by 6/9 uit te kom. Is sy korrek? Verduidelik watter fout, indien enige, sy gemaak het.", answer: "Nee, Amahle is nie korrek nie. Om 3 na 6 te vermenigvuldig, het sy met 2 vermenigvuldig, maar om 5 na 9 te vermenigvuldig, is nie ʼn heelgetalvermenigvuldiging nie (5 x 2 = 10, nie 9 nie). Aangesien sy nie die teller en noemer met dieselfde getal vermenigvuldig het nie, is die breuke nie ekwivalent nie — 3/5 is eintlik gelyk aan 6/10, nie 6/9 nie.", checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: "Vind 7/10 van 80.", answer: "56", checkMode: 'auto', correctAnswer: "56", explanation: "Stap 1: 80 / 10 = 8. Stap 2: 8 x 7 = 56." },
        { difficulty: 'Medium-Hard', question: "ʼn Resep het altesaam 24 minute bak-tyd nodig. Die kok het reeds vir 3/8 van daardie tyd gebak. Hoeveel minute het die kok reeds gebak?", answer: "9", checkMode: 'auto', correctAnswer: "9", explanation: "Vind 3/8 van 24. Stap 1: 24 / 8 = 3. Stap 2: 3 x 3 = 9. Die kok het reeds 9 minute gebak." },
        { difficulty: 'Medium-Hard', question: "Watter is meer: 2/3 van 45 of 3/5 van 45?", answer: "2/3 van 45", checkMode: 'auto', correctAnswer: "2/3van45", correctAnswers: ["2/3van45","2/3"], explanation: "2/3 van 45: Stap 1: 45/3=15. Stap 2: 15x2=30. 3/5 van 45: Stap 1: 45/5=9. Stap 2: 9x3=27. Aangesien 30 groter is as 27, is 2/3 van 45 meer." },
        { difficulty: 'Hard', question: "Verduidelik, in jou eie woorde, die tweestapreël vir die vind van ʼn breuk van ʼn heelgetal, en gebruik dit om 5/6 van 30 te vind.", answer: "Stap 1: Deel die heelgetal deur die noemer van die breuk. Stap 2: Vermenigvuldig die resultaat met die teller van die breuk. Vir 5/6 van 30: deel 30 deur 6 om 5 te kry, vermenigvuldig dan 5 met 5 om 25 te kry. Dus is 5/6 van 30 gelyk aan 25.", checkMode: 'self' },
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
