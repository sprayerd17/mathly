import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Vermenigvuldiging',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS VERMENIGVULDIGING?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-multiplication',
      title: 'Wat is Vermenigvuldiging?',
      icon: '✖️',
      explanation: `<p style="margin-bottom:18px;">Vermenigvuldiging is ʼn <strong>vinnige manier om herhaalde optelling te doen</strong>. Wanneer jy gelyke groepe van dieselfde getal het, kan jy vermenigvuldig in plaas daarvan om dieselfde getal keer op keer op te tel. Dit spaar baie tyd!</p>

<p style="margin-bottom:12px;font-weight:600;">Drie voorbeelde uit die alledaagse lewe:</p>

<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:22px;">
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <span style="color:#dc2626;font-weight:700;">4</span> bokse, elk met <span style="color:#1e40af;font-weight:700;">6</span> potlode — in plaas daarvan om <span style="color:#1e40af;font-weight:600;">6 + 6 + 6 + 6</span> te skryf, skryf ons <span style="color:#dc2626;font-weight:600;">4</span> × <span style="color:#1e40af;font-weight:600;">6</span> = <strong>24</strong>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <span style="color:#dc2626;font-weight:700;">5</span> sakke, elk met <span style="color:#1e40af;font-weight:700;">3</span> appels — in plaas daarvan om <span style="color:#1e40af;font-weight:600;">3 + 3 + 3 + 3 + 3</span> te skryf, skryf ons <span style="color:#dc2626;font-weight:600;">5</span> × <span style="color:#1e40af;font-weight:600;">3</span> = <strong>15</strong>
  </div>
  <div style="background:white;border:1px solid #bfdbfe;border-radius:10px;padding:13px 16px;">
    <span style="color:#dc2626;font-weight:700;">3</span> pakkies, elk met <span style="color:#1e40af;font-weight:700;">10</span> lekkers — in plaas daarvan om <span style="color:#1e40af;font-weight:600;">10 + 10 + 10</span> te skryf, skryf ons <span style="color:#dc2626;font-weight:600;">3</span> × <span style="color:#1e40af;font-weight:600;">10</span> = <strong>30</strong>
  </div>
</div>

<p style="margin-bottom:12px;font-weight:600;">Sleutelwoorde om te ken:</p>

<div style="display:flex;flex-direction:column;gap:9px;">
  <div><strong>Maal</strong> — nog ʼn woord vir vermenigvuldig. "3 maal 5" beteken 3 × 5.</div>
  <div><strong>Vermenigvuldig</strong> — om die totaal te vind wanneer jy gelyke groepe het.</div>
  <div><strong>Produk</strong> — die antwoord wat jy kry wanneer jy vermenigvuldig. In 3 × 5 = 15, is die <em>produk</em> <strong>15</strong>.</div>
  <div><strong>Groepe van</strong> — "3 groepe van 5" beteken 3 × 5.</div>
  <div><strong>Stelle van</strong> — "3 stelle van 5" beteken ook 3 × 5.</div>
</div>`,

      workedExamples: [
        {
          question: 'Wys dat 3 × 5 dieselfde is as 5 + 5 + 5',
          answer: '15',
          steps: [
            `Dink aan <span style="color:#dc2626;font-weight:700;">3</span> × <span style="color:#1e40af;font-weight:700;">5</span> as "<span style="color:#dc2626;font-weight:600;">3</span> groepe van <span style="color:#1e40af;font-weight:600;">5</span>". Die <span style="color:#dc2626;font-weight:600;">eerste getal</span> sê vir jou hoeveel groepe daar is, en die <span style="color:#1e40af;font-weight:600;">tweede getal</span> sê vir jou hoeveel daar in elke groep is.`,
            `Vergelyk herhaalde optelling en vermenigvuldiging langs mekaar:
<div style="display:flex;gap:14px;flex-wrap:wrap;margin:10px 0;">
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;min-width:170px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:8px;">Herhaalde Optelling</div>
    <div style="font-size:16px;color:#1e3a8a;"><span style="color:#1e40af;font-weight:700;">5</span> + <span style="color:#1e40af;font-weight:700;">5</span> + <span style="color:#1e40af;font-weight:700;">5</span> = <strong>15</strong></div>
    <div style="font-size:12px;color:#6b7280;margin-top:5px;"><span style="color:#dc2626;font-weight:600;">3</span> stelle van <span style="color:#1e40af;font-weight:600;">5</span></div>
  </div>
  <div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;min-width:170px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#dc2626;margin-bottom:8px;">Vermenigvuldiging</div>
    <div style="font-size:16px;color:#7f1d1d;"><span style="color:#dc2626;font-weight:700;">3</span> × <span style="color:#1e40af;font-weight:700;">5</span> = <strong>15</strong></div>
    <div style="font-size:12px;color:#6b7280;margin-top:5px;"><span style="color:#dc2626;font-weight:600;">3</span> groepe van <span style="color:#1e40af;font-weight:600;">5</span></div>
  </div>
</div>`,
            'Albei metodes gee presies dieselfde antwoord: <strong>15</strong>. Vermenigvuldiging is net ʼn vinniger, korter manier om dit te skryf.',
          ],
        },
        {
          question:
            'ʼn Klaskamer het 6 rye lessenaars met 7 lessenaars in elke ry. Hoeveel lessenaars is daar altesaam?',
          answer: '42 lessenaars',
          steps: [
            `Identifiseer die groepe en die groepgrootte: daar is <span style="color:#dc2626;font-weight:700;">6</span> rye (die aantal groepe) met <span style="color:#1e40af;font-weight:700;">7</span> lessenaars in elke ry (die groepgrootte). Dit is ʼn vermenigvuldigingsprobleem — gelyke groepe van dieselfde getal.`,
            `Skryf die vermenigvuldigingsgetalsin: <span style="color:#dc2626;font-weight:700;">6</span> × <span style="color:#1e40af;font-weight:700;">7</span> = <strong>42</strong>`,
            `Daar is <strong>42 lessenaars</strong> altesaam in die klaskamer.`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — VERMENIGVULDIGINGSTABELLE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplication-tables',
      title: 'Vermenigvuldigingstabelle',
      icon: '📋',
      explanation: `<p style="margin-bottom:16px;">As jy jou vermenigvuldigingstabelle uit jou kop ken, maak dit wiskunde baie vinniger. In plaas daarvan om elke berekening stap vir stap uit te werk, kan jy die antwoord dadelik onthou. Dit is een van die nuttigste wiskundevaardighede wat jy kan ontwikkel!</p>

<p style="margin-bottom:20px;">In Graad 4 moet jy die <strong>2-, 3-, 4-, 5- en 10-tafels</strong> goed ken. Oefen hierdie totdat jy hulle sonder om eers daaroor te dink kan opsê.</p>

<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(108px,1fr));gap:10px;">

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 2</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 2 = <strong style="color:#1e40af;">2</strong><br>
      2 × 2 = <strong style="color:#1e40af;">4</strong><br>
      3 × 2 = <strong style="color:#1e40af;">6</strong><br>
      4 × 2 = <strong style="color:#1e40af;">8</strong><br>
      5 × 2 = <strong style="color:#1e40af;">10</strong><br>
      6 × 2 = <strong style="color:#1e40af;">12</strong><br>
      7 × 2 = <strong style="color:#1e40af;">14</strong><br>
      8 × 2 = <strong style="color:#1e40af;">16</strong><br>
      9 × 2 = <strong style="color:#1e40af;">18</strong><br>
      10 × 2 = <strong style="color:#1e40af;">20</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 3</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 3 = <strong style="color:#1e40af;">3</strong><br>
      2 × 3 = <strong style="color:#1e40af;">6</strong><br>
      3 × 3 = <strong style="color:#1e40af;">9</strong><br>
      4 × 3 = <strong style="color:#1e40af;">12</strong><br>
      5 × 3 = <strong style="color:#1e40af;">15</strong><br>
      6 × 3 = <strong style="color:#1e40af;">18</strong><br>
      7 × 3 = <strong style="color:#1e40af;">21</strong><br>
      8 × 3 = <strong style="color:#1e40af;">24</strong><br>
      9 × 3 = <strong style="color:#1e40af;">27</strong><br>
      10 × 3 = <strong style="color:#1e40af;">30</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 4</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 4 = <strong style="color:#1e40af;">4</strong><br>
      2 × 4 = <strong style="color:#1e40af;">8</strong><br>
      3 × 4 = <strong style="color:#1e40af;">12</strong><br>
      4 × 4 = <strong style="color:#1e40af;">16</strong><br>
      5 × 4 = <strong style="color:#1e40af;">20</strong><br>
      6 × 4 = <strong style="color:#1e40af;">24</strong><br>
      7 × 4 = <strong style="color:#1e40af;">28</strong><br>
      8 × 4 = <strong style="color:#1e40af;">32</strong><br>
      9 × 4 = <strong style="color:#1e40af;">36</strong><br>
      10 × 4 = <strong style="color:#1e40af;">40</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 5</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 5 = <strong style="color:#1e40af;">5</strong><br>
      2 × 5 = <strong style="color:#1e40af;">10</strong><br>
      3 × 5 = <strong style="color:#1e40af;">15</strong><br>
      4 × 5 = <strong style="color:#1e40af;">20</strong><br>
      5 × 5 = <strong style="color:#1e40af;">25</strong><br>
      6 × 5 = <strong style="color:#1e40af;">30</strong><br>
      7 × 5 = <strong style="color:#1e40af;">35</strong><br>
      8 × 5 = <strong style="color:#1e40af;">40</strong><br>
      9 × 5 = <strong style="color:#1e40af;">45</strong><br>
      10 × 5 = <strong style="color:#1e40af;">50</strong>
    </div>
  </div>

  <div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:10px 6px;text-align:center;">
    <div style="font-size:12px;font-weight:700;color:#0f1f3d;padding-bottom:5px;margin-bottom:6px;border-bottom:1px solid #dbeafe;">× 10</div>
    <div style="font-size:12px;line-height:1.95;color:#374151;">
      1 × 10 = <strong style="color:#1e40af;">10</strong><br>
      2 × 10 = <strong style="color:#1e40af;">20</strong><br>
      3 × 10 = <strong style="color:#1e40af;">30</strong><br>
      4 × 10 = <strong style="color:#1e40af;">40</strong><br>
      5 × 10 = <strong style="color:#1e40af;">50</strong><br>
      6 × 10 = <strong style="color:#1e40af;">60</strong><br>
      7 × 10 = <strong style="color:#1e40af;">70</strong><br>
      8 × 10 = <strong style="color:#1e40af;">80</strong><br>
      9 × 10 = <strong style="color:#1e40af;">90</strong><br>
      10 × 10 = <strong style="color:#1e40af;">100</strong>
    </div>
  </div>

</div>`,

      workedExamples: [
        {
          question: 'Gebruik die 4-tafel om op te los: 4 × 8',
          answer: '32',
          steps: [
            `Ons moet <strong>4 × 8</strong> vind. Ons kan die 4-tafel gebruik deur in 4e op te tel — ons moet <strong>8 stappe</strong> tel.`,
            `Tel in 4e op, een stap op ʼn slag:
<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:10px 0;">
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">4</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">8</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">12</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">16</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">20</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">24</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">28</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#1e40af;border:1px solid #1e40af;border-radius:20px;padding:3px 12px;font-size:13px;color:white;font-weight:700;">32 ✓</span>
</div>`,
            `Die 8ste stap is <strong>32</strong>, dus <strong>4 × 8 = 32</strong>.`,
          ],
        },
        {
          question: 'ʼn Pakkie het 5 lekkers. Hoeveel lekkers is daar in 7 pakkies?',
          answer: '35 lekkers',
          steps: [
            `Daar is <strong>7</strong> pakkies met <strong>5</strong> lekkers in elk. Skryf dit as ʼn vermenigvuldiging: <strong>7 × 5</strong>`,
            `Gebruik die 5-tafel. Tel in 5e op vir 7 stappe:
<div style="display:flex;flex-wrap:wrap;gap:6px;align-items:center;margin:10px 0;">
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">5</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">10</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">15</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">20</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">25</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-size:13px;color:#1e40af;font-weight:600;">30</span>
  <span style="font-size:12px;color:#9ca3af;">→</span>
  <span style="background:#1e40af;border:1px solid #1e40af;border-radius:20px;padding:3px 12px;font-size:13px;color:white;font-weight:700;">35 ✓</span>
</div>`,
            `Die 7de stap is <strong>35</strong>, dus is daar <strong>35 lekkers</strong> altesaam.`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Kort video wat wys hoe om die 5-tafel te memoriseer deur spronggewys te tel',
      diagramPlaceholder: 'Vermenigvuldigingstabelrooster vir 2e, 3e, 4e, 5e en 10e duidelik uitgelê',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VERMENIGVULDIG ʼN 2-SYFERGETAL MET ʼN 1-SYFERGETAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-2digit-by-1digit',
      title: 'Vermenigvuldig ʼn 2-Syfergetal met ʼn 1-Syfergetal',
      icon: '🔢',
      explanation: `<p style="margin-bottom:16px;">Wanneer ons ʼn 2-syfergetal met ʼn 1-syfergetal vermenigvuldig, gebruik ons die <strong>kolommetode</strong>. Skryf die getalle regs belyn, een bo die ander. Vermenigvuldig dan elke kolom afsonderlik — begin altyd by die <span style="color:#1e40af;font-weight:600;">eenhede</span>-kolom aan die regterkant, en beweeg dan na die <span style="color:#16a34a;font-weight:600;">tiene</span>-kolom aan die linkerkant.</p>

<p style="margin-bottom:16px;"><strong>Die goue reël:</strong> as jou antwoord in enige kolom <strong>10 of meer</strong> is, skryf die eenhede-syfer van daardie antwoord neer en <em>skuif</em> die tiene-syfer oor na die volgende kolom. Die geskuifde syfer word in <span style="color:#ea580c;font-weight:600;">oranje</span> getoon.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Kleurgids:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Eenhede — blou</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Tiene — groen</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Skuif — oranje</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 34 × 2',
          answer: '68',
          steps: [
            `Skryf die getalle in kolomformaat, syfers regs belyn. Ons begin altyd eerste met die <span style="color:#1e40af;font-weight:600;">eenhede</span>-kolom.
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">3</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">2</td>
    </tr>
  </table>
</div>`,
            `Vermenigvuldig die <span style="color:#1e40af;font-weight:700;">eenhede</span>: <span style="color:#1e40af;font-weight:700;">4 × 2 = 8</span>. Skryf <span style="color:#1e40af;font-weight:700;">8</span> in die eenhede-kolom. Daar is niks om te skuif nie omdat 8 minder as 10 is.`,
            `Vermenigvuldig die <span style="color:#16a34a;font-weight:700;">tiene</span>: <span style="color:#16a34a;font-weight:700;">3 × 2 = 6</span>. Skryf <span style="color:#16a34a;font-weight:700;">6</span> in die tiene-kolom. Die volledige kolomuitleg:
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">3</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">2</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">6</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">8</td>
    </tr>
  </table>
</div>`,
          ],
        },
        {
          question: 'Bereken 47 × 3',
          answer: '141',
          steps: [
            `Skryf <strong>47 × 3</strong> in kolomformaat. Begin met die <span style="color:#1e40af;font-weight:600;">eenhede</span>-kolom.`,
            `Vermenigvuldig die <span style="color:#1e40af;font-weight:700;">eenhede</span>: <span style="color:#1e40af;font-weight:700;">7 × 3 = 21</span>. 21 is 10 of meer, skryf dus die <span style="color:#1e40af;font-weight:700;">1</span> in die eenhede-kolom en <span style="color:#ea580c;font-weight:700;">skuif die 2</span> oor na die tiene-kolom.`,
            `Vermenigvuldig die <span style="color:#16a34a;font-weight:700;">tiene</span>: <span style="color:#16a34a;font-weight:700;">4 × 3 = 12</span>. Tel nou die geskuifde <span style="color:#ea580c;font-weight:700;">2</span> by: <span style="color:#16a34a;font-weight:700;">12</span> + <span style="color:#ea580c;font-weight:700;">2</span> = <strong>14</strong>. Skryf <span style="color:#16a34a;font-weight:700;">4</span> in die tiene-kolom en <strong>1</strong> in die honderde-kolom. Die volledige kolomuitleg:
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">2</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">4</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">7</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">3</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">1</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">4</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">1</td>
    </tr>
  </table>
</div>`,
          ],
        },
        {
          question:
            'ʼn Boer plant 56 bome in elke ry. Daar is 4 rye. Hoeveel bome is daar altesaam?',
          answer: '224 bome',
          steps: [
            `Die boer het <strong>4</strong> rye met <strong>56</strong> bome in elk. Dit is ʼn vermenigvuldigingsprobleem: <strong>56 × 4</strong>. Skryf dit in kolomformaat.`,
            `Vermenigvuldig die <span style="color:#1e40af;font-weight:700;">eenhede</span>: <span style="color:#1e40af;font-weight:700;">6 × 4 = 24</span>. 24 is 10 of meer, skryf dus <span style="color:#1e40af;font-weight:700;">4</span> in die eenhede-kolom en <span style="color:#ea580c;font-weight:700;">skuif die 2</span> oor na die tiene-kolom.`,
            `Vermenigvuldig die <span style="color:#16a34a;font-weight:700;">tiene</span>: <span style="color:#16a34a;font-weight:700;">5 × 4 = 20</span>. Tel die geskuifde <span style="color:#ea580c;font-weight:700;">2</span> by: <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">2</span> = <strong>22</strong>. Skryf <span style="color:#16a34a;font-weight:700;">2</span> in die tiene-kolom en <strong>2</strong> in die honderde-kolom. Daar is <strong>224 bome</strong> altesaam.
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">2</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">5</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">6</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">2</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">2</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">4</td>
    </tr>
  </table>
</div>`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Kort video wat kolomvermenigvuldiging van ʼn 2-syfergetal met ʼn 1-syfergetal met skuif wys',
      diagramPlaceholder: 'Kolomvermenigvuldiging-uitleg wat 47 × 3 wys met die geskuifde syfer in oranje getoon',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — VERMENIGVULDIG DEUR FAKTORE TE GEBRUIK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-using-factors',
      title: 'Vermenigvuldig deur Faktore te Gebruik',
      icon: '🔗',
      explanation: `<p style="margin-bottom:16px;">Soms is dit makliker om <strong>ʼn groter getal in sy faktore te breek</strong> voordat jy vermenigvuldig. <strong>Faktore</strong> is twee getalle wat saam vermenigvuldig om ʼn ander getal te gee.</p>

<p style="margin-bottom:16px;">Byvoorbeeld, <span style="color:#dc2626;font-weight:700;">12</span> = <span style="color:#1e40af;font-weight:700;">6</span> × <span style="color:#16a34a;font-weight:700;">2</span> — dus in plaas daarvan om 6 × <span style="color:#dc2626;font-weight:700;">12</span> in een stap te bereken, kan jy 6 × <span style="color:#1e40af;font-weight:700;">6</span> × <span style="color:#16a34a;font-weight:700;">2</span> doen. Dit verander een groter vermenigvuldiging in twee kleiner vermenigvuldigings wat baie makliker is om mee te werk!</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Kleurgids:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#fef2f2;color:#dc2626;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fca5a5;">Oorspronklike getal — rooi</span>
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Eerste faktor — blou</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Tweede faktor — groen</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 4 × 12 deur faktore te gebruik',
          answer: '48',
          steps: [
            `Breek <span style="color:#dc2626;font-weight:700;">12</span> in twee faktore: <span style="color:#dc2626;font-weight:700;">12</span> = <span style="color:#1e40af;font-weight:700;">4</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Vervang <span style="color:#dc2626;font-weight:700;">12</span> met sy faktore in die oorspronklike berekening: 4 × <span style="color:#dc2626;font-weight:700;">12</span> = 4 × <span style="color:#1e40af;font-weight:700;">4</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Vermenigvuldig die eerste twee getalle: 4 × <span style="color:#1e40af;font-weight:700;">4</span> = <strong>16</strong>`,
            `Vermenigvuldig die resultaat met die oorblywende faktor: 16 × <span style="color:#16a34a;font-weight:700;">3</span> = <strong>48</strong>`,
          ],
        },
        {
          question: 'Bereken 6 × 15 deur faktore te gebruik',
          answer: '90',
          steps: [
            `Breek <span style="color:#dc2626;font-weight:700;">15</span> in twee faktore: <span style="color:#dc2626;font-weight:700;">15</span> = <span style="color:#1e40af;font-weight:700;">5</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Vervang <span style="color:#dc2626;font-weight:700;">15</span> met sy faktore in die oorspronklike berekening: 6 × <span style="color:#dc2626;font-weight:700;">15</span> = 6 × <span style="color:#1e40af;font-weight:700;">5</span> × <span style="color:#16a34a;font-weight:700;">3</span>`,
            `Vermenigvuldig die eerste twee getalle: 6 × <span style="color:#1e40af;font-weight:700;">5</span> = <strong>30</strong>`,
            `Vermenigvuldig die resultaat met die oorblywende faktor: 30 × <span style="color:#16a34a;font-weight:700;">3</span> = <strong>90</strong>`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Kort video wat wys hoe om faktore te gebruik om vermenigvuldiging te vereenvoudig',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — SKAT EN OPLOS VAN VERMENIGVULDIGINGSPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating-multiplication',
      title: 'Skat en Oplos van Vermenigvuldigingsprobleme',
      icon: '🎯',
      explanation: `<p style="margin-bottom:16px;">Voordat jy enige vermenigvuldiging doen, is dit goeie praktyk om <strong>eers te skat</strong>. ʼn Skatting is ʼn vinnige benaderde antwoord wat jy kry deur af te rond. Nadat jy die presiese antwoord uitgewerk het, vergelyk jy dit met jou skatting — as hulle naby aan mekaar is, is jou antwoord waarskynlik korrek. As hulle baie ver uitmekaar is, het jy dalk ʼn fout gemaak en moet jy jou werk nagaan.</p>

<p style="margin-bottom:16px;"><strong>Hoe om ʼn vermenigvuldiging te skat:</strong> rond die groter getal af na die naaste 10, en vermenigvuldig dan. Jou skatting sal nie presies wees nie, maar dit sal naby genoeg wees om vir jou te sê of jou antwoord sin maak.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Kleurgids:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Skatting — oranje</span>
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Presiese antwoord — blou</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Skat 38 × 4, bereken dan die presiese antwoord',
          answer: 'Skatting: ≈ 160 — Presies: 152',
          steps: [
            `Rond 38 af na die naaste 10: 38 rond <strong>op</strong> na <span style="color:#ea580c;font-weight:700;">40</span>. Vermenigvuldig: <span style="color:#ea580c;font-weight:700;">40 × 4 = 160</span>. Ons presiese antwoord moet dus naby aan <span style="color:#ea580c;font-weight:700;">160</span> wees.`,
            `Bereken nou die presiese antwoord met die kolommetode:
<br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#1e40af;font-weight:600;">Eenhede:</span> 8 × 4 = 32 — skryf <span style="color:#1e40af;font-weight:700;">2</span>, skuif <span style="color:#ea580c;font-weight:700;">3</span></span><br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#16a34a;font-weight:600;">Tiene:</span> 3 × 4 = 12, plus geskuifde <span style="color:#ea580c;font-weight:700;">3</span> = 15 — skryf <span style="color:#16a34a;font-weight:700;">5</span>, skuif 1</span>
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">3</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">3</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">8</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">1</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">5</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">2</td>
    </tr>
  </table>
</div>`,
            `Vergelyk die skatting en die presiese antwoord:
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:10px 0;">
  <div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:6px;">Skatting</div>
    <div style="font-size:18px;font-weight:700;color:#c2410c;">≈ 160</div>
    <div style="font-size:12px;color:#9a3412;margin-top:3px;">40 × 4</div>
  </div>
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Presiese Antwoord</div>
    <div style="font-size:18px;font-weight:700;color:#1e3a8a;">152</div>
    <div style="font-size:12px;color:#1e40af;margin-top:3px;">38 × 4</div>
  </div>
</div>
<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:10px 14px;">
  <span style="color:#16a34a;font-weight:600;font-size:13px;">✓ 152 is naby aan 160 — die antwoord is redelik!</span>
</div>`,
          ],
        },
        {
          question:
            'ʼn Skool koop 9 bokse kryte. Elke boks het 24 kryte. Hoeveel kryte is daar altesaam?',
          answer: '216 kryte',
          steps: [
            `Skat eers: rond 24 af na die naaste 10 — 24 rond <strong>af</strong> na <span style="color:#ea580c;font-weight:700;">20</span>. Vermenigvuldig: <span style="color:#ea580c;font-weight:700;">9 × 20 = 180</span>. Ons presiese antwoord moet dus naby aan <span style="color:#ea580c;font-weight:700;">180</span> wees.`,
            `Bereken nou die presiese antwoord — 24 × 9 — met die kolommetode:
<br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#1e40af;font-weight:600;">Eenhede:</span> 4 × 9 = 36 — skryf <span style="color:#1e40af;font-weight:700;">6</span>, skuif <span style="color:#ea580c;font-weight:700;">3</span></span><br>
<span style="font-size:13px;color:#6b7280;">• <span style="color:#16a34a;font-weight:600;">Tiene:</span> 2 × 9 = 18, plus geskuifde <span style="color:#ea580c;font-weight:700;">3</span> = 21 — skryf <span style="color:#16a34a;font-weight:700;">1</span> in tiene, <strong>2</strong> in honderde</span>
<div style="margin:12px 0;">
  <table style="border-collapse:collapse;font-weight:700;font-size:20px;">
    <tr>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;color:#ea580c;font-size:14px;">3</td>
      <td style="min-width:30px;text-align:center;padding:0 4px;height:22px;"></td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#16a34a;">2</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px;color:#1e40af;">4</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;font-size:14px;border-bottom:2.5px solid #374151;">×</td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;border-bottom:2.5px solid #374151;"></td>
      <td style="min-width:30px;text-align:center;padding:2px 4px 8px;color:#374151;border-bottom:2.5px solid #374151;">9</td>
    </tr>
    <tr>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#374151;">2</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#16a34a;">1</td>
      <td style="min-width:30px;text-align:center;padding:8px 4px 2px;color:#1e40af;">6</td>
    </tr>
  </table>
</div>`,
            `Vergelyk die skatting en die presiese antwoord:
<div style="display:flex;gap:12px;flex-wrap:wrap;margin:10px 0;">
  <div style="background:#fff7ed;border:1.5px solid #fdba74;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#ea580c;margin-bottom:6px;">Skatting</div>
    <div style="font-size:18px;font-weight:700;color:#c2410c;">≈ 180</div>
    <div style="font-size:12px;color:#9a3412;margin-top:3px;">9 × 20</div>
  </div>
  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 16px;min-width:130px;flex:1;">
    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:#1e40af;margin-bottom:6px;">Presiese Antwoord</div>
    <div style="font-size:18px;font-weight:700;color:#1e3a8a;">216</div>
    <div style="font-size:12px;color:#1e40af;margin-top:3px;">24 × 9</div>
  </div>
</div>
<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:10px 14px;">
  <span style="color:#16a34a;font-weight:600;font-size:13px;">✓ 216 is naby aan 180 — daar is <strong>216 kryte</strong> altesaam en die antwoord is redelik!</span>
</div>`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Kort video wat wys hoe om te skat voordat jy vermenigvuldig en hoe om te kyk of die antwoord redelik is',
    },
  ],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — TAFELS EN DIREKTE VERMENIGVULDIGING (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Tafels en Direkte Vermenigvuldiging',
      questions: [
        { difficulty: 'Easy', question: 'Bereken: 3 × 5', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: '3 × 5 = 15. Tel in 5e vir 3 stappe: 5, 10, 15 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 4 × 6', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: '4 × 6 = 24. Tel in 6e vir 4 stappe: 6, 12, 18, 24 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 7 × 8', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: '7 × 8 = 56 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 9 × 9', answer: '81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81'], explanation: '9 × 9 = 81 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 6 × 7', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42'], explanation: '6 × 7 = 42 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 8 × 8', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64'], explanation: '8 × 8 = 64 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 5 × 9', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: '5 × 9 = 45. Tel in 5e vir 9 stappe: 5, 10, 15, 20, 25, 30, 35, 40, 45 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 7 × 7', answer: '49', checkMode: 'auto', correctAnswer: '49', correctAnswers: ['49'], explanation: '7 × 7 = 49 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 4 × 9', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '4 × 9 = 36 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 6 × 8', answer: '48', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48'], explanation: '6 × 8 = 48 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 3 × 9', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: '3 × 9 = 27. Tel in 3e vir 9 stappe: 3, 6, 9, 12, 15, 18, 21, 24, 27 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 8 × 9', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '8 × 9 = 72 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 9 × 10', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90'], explanation: '9 × 10 = 90 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 7 × 10', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70'], explanation: '7 × 10 = 70 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 10 × 10', answer: '100', checkMode: 'auto', correctAnswer: '100', correctAnswers: ['100'], explanation: '10 × 10 = 100 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 12 × 5', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60'], explanation: '12 × 5 = 60. Dink daaraan as 10 × 5 + 2 × 5 = 50 + 10 = 60 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 12 × 7', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: '12 × 7 = 84. Dink: 10 × 7 + 2 × 7 = 70 + 14 = 84 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 12 × 8', answer: '96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96'], explanation: '12 × 8 = 96. Dink: 10 × 8 + 2 × 8 = 80 + 16 = 96 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 12 × 9', answer: '108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108'], explanation: '12 × 9 = 108. Dink: 10 × 9 + 2 × 9 = 90 + 18 = 108 ✓' },
        { difficulty: 'Hard', question: 'Bereken: 12 × 12', answer: '144', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144'], explanation: '12 × 12 = 144. Dink: 10 × 12 + 2 × 12 = 120 + 24 = 144 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 11 × 6', answer: '66', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66'], explanation: '11 × 6 = 66. Dink: 10 × 6 + 1 × 6 = 60 + 6 = 66 ✓' },
        { difficulty: 'Medium', question: 'Bereken: 11 × 9', answer: '99', checkMode: 'auto', correctAnswer: '99', correctAnswers: ['99'], explanation: '11 × 9 = 99. Dink: 10 × 9 + 1 × 9 = 90 + 9 = 99 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 6 × 6', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '6 × 6 = 36 ✓' },
        { difficulty: 'Medium', question: 'Vul die ontbrekende getal in: 9 × ___ = 63', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Tel in 9e totdat jy 63 bereik: 9, 18, 27, 36, 45, 54, 63 — dit is 7 stappe, dus 9 × 7 = 63 ✓' },
        { difficulty: 'Medium', question: 'Vul die ontbrekende getal in: ___ × 7 = 56', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: '8 × 7 = 56, dus is die ontbrekende getal 8 ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy ken jou tafels en direkte vermenigvuldigingsfeite baie goed.' },
        { minScore: 19, message: 'Goeie werk! Jy is selfversekerd met vermenigvuldiging — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Oefen jou tafels ʼn bietjie meer en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — 2-SYFERVERMENIGVULDIGING, FAKTORE EN SKATTING (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: 2-Syfervermenigvuldiging, Faktore en Skatting',
      questions: [
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 23 × 3', answer: '69', checkMode: 'auto', correctAnswer: '69', correctAnswers: ['69'], explanation: 'Eenhede: 3 × 3 = 9. Tiene: 2 × 3 = 6.\nAntwoord: 69 ✓' },
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 42 × 2', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: 'Eenhede: 2 × 2 = 4. Tiene: 4 × 2 = 8.\nAntwoord: 84 ✓' },
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 34 × 2', answer: '68', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68'], explanation: 'Eenhede: 4 × 2 = 8. Tiene: 3 × 2 = 6.\nAntwoord: 68 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 47 × 3', answer: '141', checkMode: 'auto', correctAnswer: '141', correctAnswers: ['141'], explanation: 'Eenhede: 7 × 3 = 21. Skryf 1, skuif 2.\nTiene: 4 × 3 = 12, plus geskuifde 2 = 14. Skryf 4 in tiene, 1 in honderde.\nAntwoord: 141 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 56 × 4', answer: '224', checkMode: 'auto', correctAnswer: '224', correctAnswers: ['224'], explanation: 'Eenhede: 6 × 4 = 24. Skryf 4, skuif 2.\nTiene: 5 × 4 = 20, plus geskuifde 2 = 22. Skryf 2 in tiene, 2 in honderde.\nAntwoord: 224 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 67 × 4', answer: '268', checkMode: 'auto', correctAnswer: '268', correctAnswers: ['268'], explanation: 'Eenhede: 7 × 4 = 28. Skryf 8, skuif 2.\nTiene: 6 × 4 = 24, plus geskuifde 2 = 26. Skryf 6 in tiene, 2 in honderde.\nAntwoord: 268 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 45 × 6', answer: '270', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270'], explanation: 'Eenhede: 5 × 6 = 30. Skryf 0, skuif 3.\nTiene: 4 × 6 = 24, plus geskuifde 3 = 27. Skryf 7 in tiene, 2 in honderde.\nAntwoord: 270 ✓' },
        { difficulty: 'Hard', question: 'Bereken met die kolommetode en wys jou skuif: 32 × 8', answer: '256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256'], explanation: 'Eenhede: 2 × 8 = 16. Skryf 6, skuif 1.\nTiene: 3 × 8 = 24, plus geskuifde 1 = 25. Skryf 5 in tiene, 2 in honderde.\nAntwoord: 256 ✓' },
        { difficulty: 'Hard', question: 'Bereken met die kolommetode en wys jou skuif: 64 × 9', answer: '576', checkMode: 'auto', correctAnswer: '576', correctAnswers: ['576'], explanation: 'Eenhede: 4 × 9 = 36. Skryf 6, skuif 3.\nTiene: 6 × 9 = 54, plus geskuifde 3 = 57. Skryf 7 in tiene, 5 in honderde.\nAntwoord: 576 ✓' },
        { difficulty: 'Hard', question: 'Bereken met die kolommetode en wys jou skuif: 92 × 4', answer: '368', checkMode: 'auto', correctAnswer: '368', correctAnswers: ['368'], explanation: 'Eenhede: 2 × 4 = 8. Geen skuif nodig nie.\nTiene: 9 × 4 = 36. Skryf 6 in tiene, 3 in honderde.\nAntwoord: 368 ✓' },
        { difficulty: 'Easy', question: 'Breek 12 in twee faktore en gebruik hulle om te bereken: 3 × 12', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '12 = 6 × 2, dus 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36 ✓' },
        { difficulty: 'Medium', question: 'Breek 16 in twee faktore en gebruik hulle om te bereken: 5 × 16', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80'], explanation: '16 = 8 × 2, dus 5 × 16 = 5 × 8 × 2 = 40 × 2 = 80 ✓' },
        { difficulty: 'Medium', question: 'Breek 18 in twee faktore en gebruik hulle om te bereken: 4 × 18', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '18 = 9 × 2, dus 4 × 18 = 4 × 9 × 2 = 36 × 2 = 72 ✓' },
        { difficulty: 'Medium', question: 'Breek 14 in twee faktore en gebruik hulle om te bereken: 6 × 14', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: '14 = 7 × 2, dus 6 × 14 = 6 × 7 × 2 = 42 × 2 = 84 ✓' },
        { difficulty: 'Medium', question: 'Breek 15 in twee faktore en gebruik hulle om te bereken: 8 × 15', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120'], explanation: '15 = 5 × 3, dus 8 × 15 = 8 × 5 × 3 = 40 × 3 = 120 ✓' },
        { difficulty: 'Hard', question: 'Breek 16 in twee faktore en gebruik hulle om te bereken: 7 × 16', answer: '112', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112'], explanation: '16 = 8 × 2, dus 7 × 16 = 7 × 8 × 2 = 56 × 2 = 112 ✓' },
        { difficulty: 'Hard', question: 'Breek 14 in twee faktore en gebruik hulle om te bereken: 9 × 14', answer: '126', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126'], explanation: '14 = 7 × 2, dus 9 × 14 = 9 × 7 × 2 = 63 × 2 = 126 ✓' },
        { difficulty: 'Easy', question: 'Skat 29 × 3 deur eers 29 af te rond na die naaste 10. Skryf slegs die skatting.', answer: '90', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90'], explanation: '29 rond op na 30. Skatting: 30 × 3 = 90 ✓' },
        { difficulty: 'Easy', question: 'Wat is die presiese antwoord op 29 × 3?', answer: '87', checkMode: 'auto', correctAnswer: '87', correctAnswers: ['87'], explanation: 'Eenhede: 9 × 3 = 27. Skryf 7, skuif 2.\nTiene: 2 × 3 = 6, plus geskuifde 2 = 8.\nAntwoord: 87 (naby aan die skatting van 90) ✓' },
        { difficulty: 'Medium', question: 'Skat 48 × 6 deur eers 48 af te rond na die naaste 10. Skryf slegs die skatting.', answer: '300', checkMode: 'auto', correctAnswer: '300', correctAnswers: ['300'], explanation: '48 rond op na 50. Skatting: 50 × 6 = 300 ✓' },
        { difficulty: 'Medium', question: 'Wat is die presiese antwoord op 48 × 6?', answer: '288', checkMode: 'auto', correctAnswer: '288', correctAnswers: ['288'], explanation: 'Eenhede: 8 × 6 = 48. Skryf 8, skuif 4.\nTiene: 4 × 6 = 24, plus geskuifde 4 = 28.\nAntwoord: 288 (naby aan die skatting van 300) ✓' },
        { difficulty: 'Medium', question: 'Skat 75 × 8 deur eers 75 af te rond na die naaste 10. Skryf slegs die skatting.', answer: '640', checkMode: 'auto', correctAnswer: '640', correctAnswers: ['640'], explanation: '75 rond op na 80. Skatting: 80 × 8 = 640 ✓' },
        { difficulty: 'Medium', question: 'Wat is die presiese antwoord op 75 × 8?', answer: '600', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600'], explanation: 'Eenhede: 5 × 8 = 40. Skryf 0, skuif 4.\nTiene: 7 × 8 = 56, plus geskuifde 4 = 60.\nAntwoord: 600 (naby aan die skatting van 640) ✓' },
        { difficulty: 'Hard', question: 'Skat 53 × 7 deur eers 53 af te rond na die naaste 10, en bereken dan die presiese antwoord. Skryf slegs die presiese antwoord.', answer: '371', checkMode: 'auto', correctAnswer: '371', correctAnswers: ['371'], explanation: 'Skatting: 53 rond af na 50, dus 50 × 7 = 350.\nPresies: Eenhede 3 × 7 = 21, skryf 1 skuif 2. Tiene 5 × 7 = 35, plus geskuifde 2 = 37.\nPresiese antwoord: 371 (naby aan die skatting van 350) ✓' },
        { difficulty: 'Hard', question: 'Skat 86 × 5 deur eers 86 af te rond na die naaste 10, en bereken dan die presiese antwoord. Skryf slegs die presiese antwoord.', answer: '430', checkMode: 'auto', correctAnswer: '430', correctAnswers: ['430'], explanation: 'Skatting: 86 rond af na 90, dus 90 × 5 = 450.\nPresies: Eenhede 6 × 5 = 30, skryf 0 skuif 3. Tiene 8 × 5 = 40, plus geskuifde 3 = 43.\nPresiese antwoord: 430 (naby aan die skatting van 450) ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het 2-syfervermenigvuldiging, faktore en skatting bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die kolommetode en faktor-voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — WERKLIKE-LEWE WOORDPROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Werklike-Lewe Woordprobleme',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Klaskamer het 6 rye lessenaars met 7 lessenaars in elke ry. Hoeveel lessenaars is daar altesaam?', answer: '42 lessenaars', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 lessenaars'], explanation: '6 × 7 = 42 lessenaars ✓' },
        { difficulty: 'Easy', question: 'ʼn Sak het 5 appels. Daar is 8 sakke. Hoeveel appels is daar altesaam?', answer: '40 appels', checkMode: 'auto', correctAnswer: '40', correctAnswers: ['40', '40 appels'], explanation: '8 × 5 = 40 appels ✓' },
        { difficulty: 'Easy', question: 'ʼn Boks het 6 potlode. Daar is 9 bokse. Hoeveel potlode is daar altesaam?', answer: '54 potlode', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 potlode'], explanation: '9 × 6 = 54 potlode ✓' },
        { difficulty: 'Easy', question: 'ʼn Rak hou 8 boeke. Daar is 7 rakke. Hoeveel boeke is daar altesaam?', answer: '56 boeke', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56', '56 boeke'], explanation: '7 × 8 = 56 boeke ✓' },
        { difficulty: 'Medium', question: 'ʼn Pak het 12 eiers. Daar is 4 pakke. Hoeveel eiers is daar altesaam?', answer: '48 eiers', checkMode: 'auto', correctAnswer: '48', correctAnswers: ['48', '48 eiers'], explanation: '4 × 12 = 48 eiers ✓' },
        { difficulty: 'Medium', question: 'ʼn Span het 11 spelers. Daar is 5 spanne. Hoeveel spelers is daar altesaam?', answer: '55 spelers', checkMode: 'auto', correctAnswer: '55', correctAnswers: ['55', '55 spelers'], explanation: '5 × 11 = 55 spelers ✓' },
        { difficulty: 'Medium', question: 'ʼn Bus vervoer 45 leerders. Daar is 3 busse. Hoeveel leerders is daar altesaam?', answer: '135 leerders', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 leerders'], explanation: '3 × 45 = 135 leerders ✓' },
        { difficulty: 'Medium', question: 'ʼn Boks hou 24 lemoene. Daar is 6 bokse. Hoeveel lemoene is daar altesaam?', answer: '144 lemoene', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 lemoene'], explanation: '6 × 24 = 144 lemoene ✓' },
        { difficulty: 'Medium', question: 'ʼn Kratjie hou 15 bottels. Daar is 9 kratjies. Hoeveel bottels is daar altesaam?', answer: '135 bottels', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135', '135 bottels'], explanation: '9 × 15 = 135 bottels ✓' },
        { difficulty: 'Medium', question: 'ʼn Pakkie het 18 lekkers. Daar is 7 pakkies. Hoeveel lekkers is daar altesaam?', answer: '126 lekkers', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126', '126 lekkers'], explanation: '7 × 18 = 126 lekkers ✓' },
        { difficulty: 'Easy', question: 'ʼn Tafel het 6 stoele. Daar is 12 tafels. Hoeveel stoele is daar altesaam?', answer: '72 stoele', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 stoele'], explanation: '12 × 6 = 72 stoele ✓' },
        { difficulty: 'Medium', question: 'ʼn Klas het 27 leerders. Daar is 8 klasse. Hoeveel leerders is daar altesaam?', answer: '216 leerders', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 leerders'], explanation: '8 × 27 = 216 leerders ✓' },
        { difficulty: 'Medium', question: '5 boere besit elkeen 34 skape. Hoeveel skape besit hulle altesaam?', answer: '170 skape', checkMode: 'auto', correctAnswer: '170', correctAnswers: ['170', '170 skape'], explanation: '5 × 34 = 170 skape ✓' },
        { difficulty: 'Hard', question: 'ʼn Vragmotor vervoer 48 bokse. Daar is 6 vragmotors. Hoeveel bokse is daar altesaam?', answer: '288 bokse', checkMode: 'auto', correctAnswer: '288', correctAnswers: ['288', '288 bokse'], explanation: '6 × 48 = 288 bokse ✓' },
        { difficulty: 'Medium', question: 'ʼn Ry het 16 sitplekke. Daar is 9 rye. Hoeveel sitplekke is daar altesaam?', answer: '144 sitplekke', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 sitplekke'], explanation: '9 × 16 = 144 sitplekke ✓' },
        { difficulty: 'Medium', question: 'ʼn Rak hou 23 blikkies. Daar is 4 rakke. Hoeveel blikkies is daar altesaam?', answer: '92 blikkies', checkMode: 'auto', correctAnswer: '92', correctAnswers: ['92', '92 blikkies'], explanation: '4 × 23 = 92 blikkies ✓' },
        { difficulty: 'Medium', question: 'ʼn Mandjie hou 19 mango\'s. Daar is 7 mandjies. Hoeveel mango\'s is daar altesaam?', answer: '133 mango\'s', checkMode: 'auto', correctAnswer: '133', correctAnswers: ['133', "133 mango's"], explanation: '7 × 19 = 133 mango\'s ✓' },
        { difficulty: 'Hard', question: 'ʼn Watertenk hou 65 liter. Daar is 3 tenks. Hoeveel liter water is daar altesaam?', answer: '195 liter', checkMode: 'auto', correctAnswer: '195', correctAnswers: ['195', '195 liter'], explanation: '3 × 65 = 195 liter ✓' },
        { difficulty: 'Medium', question: 'ʼn Pakkie het 14 biskuits. Daar is 8 pakkies. Hoeveel biskuits is daar altesaam?', answer: '112 biskuits', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112', '112 biskuits'], explanation: '8 × 14 = 112 biskuits ✓' },
        { difficulty: 'Hard', question: 'ʼn Afleweringswa vervoer 36 pakkies. Daar is 6 waens. Hoeveel pakkies is daar altesaam?', answer: '216 pakkies', checkMode: 'auto', correctAnswer: '216', correctAnswers: ['216', '216 pakkies'], explanation: '6 × 36 = 216 pakkies ✓' },
        { difficulty: 'Medium', question: 'ʼn Bondel het 8 stokkies. Daar is 9 bondels. Hoeveel stokkies is daar altesaam?', answer: '72 stokkies', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72', '72 stokkies'], explanation: '9 × 8 = 72 stokkies ✓' },
        { difficulty: 'Hard', question: 'ʼn Boks hou 42 teëls. Daar is 5 bokse. Hoeveel teëls is daar altesaam?', answer: '210 teëls', checkMode: 'auto', correctAnswer: '210', correctAnswers: ['210', '210 teëls'], explanation: '5 × 42 = 210 teëls ✓' },
        { difficulty: 'Easy', question: 'ʼn Boer plant 9 bome in elke ry. Daar is 4 rye. Hoeveel bome plant die boer altesaam?', answer: '36 bome', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36', '36 bome'], explanation: '4 × 9 = 36 bome ✓' },
        { difficulty: 'Easy', question: 'Elkeen van 7 vriende het 6 albasters. Hoeveel albasters het hulle altesaam?', answer: '42 albasters', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42', '42 albasters'], explanation: '7 × 6 = 42 albasters ✓' },
        { difficulty: 'Medium', question: 'ʼn Pak het 13 plakkers. Daar is 9 pakke. Hoeveel plakkers is daar altesaam?', answer: '117 plakkers', checkMode: 'auto', correctAnswer: '117', correctAnswers: ['117', '117 plakkers'], explanation: '9 × 13 = 117 plakkers ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan vermenigvuldiging met selfvertroue op werklike-lewe-probleme toepas.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MULTI-STAP EN GEKOMBINEERDE PROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Multi-Stap en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'ʼn Winkel het 4 bokse penne met 8 penne in elke boks. Elke pen kos R3. Wat is die totale koste van al die penne?', answer: 'R96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', 'R96'], explanation: 'Stap 1: 4 × 8 = 32 penne.\nStap 2: 32 × 3 = R96 ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel het 6 pakke sjokolade met 9 sjokolades in elke pak. Elke sjokolade kos R2. Wat is die totale koste van al die sjokolades?', answer: 'R108', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', 'R108'], explanation: 'Stap 1: 6 × 9 = 54 sjokolades.\nStap 2: 54 × 2 = R108 ✓' },
        { difficulty: 'Medium', question: 'ʼn Biblioteek het 3 rakke met 12 boeke elk en 2 rakke met 15 boeke elk. Hoeveel boeke is daar in totaal?', answer: '66 boeke', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66', '66 boeke'], explanation: 'Stap 1: 3 × 12 = 36 boeke.\nStap 2: 2 × 15 = 30 boeke.\nStap 3: 36 + 30 = 66 boeke ✓' },
        { difficulty: 'Medium', question: 'ʼn Skool het 5 klasse met 24 leerders elk en 3 klasse met 18 leerders elk. Hoeveel leerders is daar in totaal?', answer: '174 leerders', checkMode: 'auto', correctAnswer: '174', correctAnswers: ['174', '174 leerders'], explanation: 'Stap 1: 5 × 24 = 120 leerders.\nStap 2: 3 × 18 = 54 leerders.\nStap 3: 120 + 54 = 174 leerders ✓' },
        { difficulty: 'Hard', question: 'ʼn Boer het 7 rye bome met 16 bome in elke ry. ʼn Storm vernietig 3 volle rye. Hoeveel bome bly regop staan?', answer: '64 bome', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64', '64 bome'], explanation: 'Stap 1: Totale bome = 7 × 16 = 112.\nStap 2: Bome vernietig = 3 × 16 = 48.\nStap 3: Bome oor = 112 − 48 = 64 bome ✓' },
        { difficulty: 'Medium', question: 'Skat 68 × 7 deur 68 af te rond na die naaste 10, en bereken dan die presiese antwoord. Skryf slegs die presiese antwoord.', answer: '476', checkMode: 'auto', correctAnswer: '476', correctAnswers: ['476'], explanation: 'Skatting: 68 rond af na 70, dus 70 × 7 = 490.\nPresies: Eenhede 8 × 7 = 56, skryf 6 skuif 5. Tiene 6 × 7 = 42, plus geskuifde 5 = 47.\nPresiese antwoord: 476 (naby aan die skatting van 490) ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel bestel 9 bokse met 34 appels in elke boks, en skat eers deur 34 af te rond na die naaste 10. Wat is die presiese totale aantal appels?', answer: '306 appels', checkMode: 'auto', correctAnswer: '306', correctAnswers: ['306', '306 appels'], explanation: 'Skatting: 34 rond af na 30, dus 9 × 30 = 270.\nPresies: 9 × 34 = 306 appels (naby aan die skatting van 270) ✓' },
        { difficulty: 'Medium', question: 'ʼn Winkel koop 4 bokse skoene. Elke boks kos R125. Wat is die totale koste?', answer: 'R500', checkMode: 'auto', correctAnswer: '500', correctAnswers: ['500', 'R500'], explanation: '4 × 125 = 500. Dink: 4 × 100 = 400, 4 × 25 = 100, 400 + 100 = R500 ✓' },
        { difficulty: 'Easy', question: 'ʼn Groentetuin word in 12 rye geplant, met 12 plante in elke ry. Hoeveel plante is daar altesaam?', answer: '144 plante', checkMode: 'auto', correctAnswer: '144', correctAnswers: ['144', '144 plante'], explanation: '12 × 12 = 144 plante ✓' },
        { difficulty: 'Medium', question: 'ʼn Boer het 8 rye van 9 mielieplante en voeg 4 meer rye van 9 mielieplante by. Hoeveel mielieplante is daar in totaal?', answer: '108 plante', checkMode: 'auto', correctAnswer: '108', correctAnswers: ['108', '108 plante'], explanation: 'Totale rye = 8 + 4 = 12 rye.\n12 × 9 = 108 plante ✓' },
        { difficulty: 'Hard', question: 'ʼn Verkoper het 6 mandjies van 15 mango\'s elk. 2 mango\'s in elke mandjie word sleg en word weggegooi. Hoeveel goeie mango\'s bly oor in totaal?', answer: '78 mango\'s', checkMode: 'auto', correctAnswer: '78', correctAnswers: ['78', "78 mango's"], explanation: 'Stap 1: Goeie mango\'s per mandjie = 15 − 2 = 13.\nStap 2: 6 × 13 = 78 mango\'s ✓' },
        { difficulty: 'Medium', question: 'Skat 45 × 6 deur 45 af te rond na die naaste 10, en bereken dan die presiese antwoord. Skryf slegs die presiese antwoord.', answer: '270', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270'], explanation: 'Skatting: 45 rond af na 50, dus 50 × 6 = 300.\nPresies: Eenhede 5 × 6 = 30, skryf 0 skuif 3. Tiene 4 × 6 = 24, plus geskuifde 3 = 27.\nPresiese antwoord: 270 (naby aan die skatting van 300) ✓' },
        { difficulty: 'Hard', question: 'ʼn Maatskappy het 5 afleweringswaens wat elk 40 bokse vervoer, en voeg 2 meer waens by wat ook elk 40 bokse vervoer. Hoeveel bokse kan al die waens altesaam vervoer?', answer: '280 bokse', checkMode: 'auto', correctAnswer: '280', correctAnswers: ['280', '280 bokse'], explanation: 'Totale waens = 5 + 2 = 7 waens.\n7 × 40 = 280 bokse ✓' },
        { difficulty: 'Medium', question: 'Bereken 96 × 5 met enige metode wat jy verkies. Skryf slegs die finale antwoord.', answer: '480', checkMode: 'auto', correctAnswer: '480', correctAnswers: ['480'], explanation: '96 × 5 = 480. Dink: 100 × 5 = 500, trek dan 4 × 5 = 20 af: 500 − 20 = 480 ✓' },
        { difficulty: 'Hard', question: 'Breek 16 in faktore 8 × 2 om 8 × 16 te bereken. Skryf slegs die finale antwoord.', answer: '128', checkMode: 'auto', correctAnswer: '128', correctAnswers: ['128'], explanation: '8 × 16 = 8 × 8 × 2 = 64 × 2 = 128 ✓' },
        { difficulty: 'Medium', question: 'ʼn Fabriek vervaardig 250 speelgoed per dag. Hoeveel speelgoed vervaardig dit in 4 dae?', answer: '1000 speelgoed', checkMode: 'auto', correctAnswer: '1000', correctAnswers: ['1000', '1 000', '1000 speelgoed', '1 000 speelgoed'], explanation: '250 × 4 = 1 000 speelgoed ✓' },
        { difficulty: 'Hard', question: 'Sipho sê 6 × 23 = 148. Gebruik ʼn korrekte metode om te kontroleer of hy reg is. Wys al jou werk.', answer: 'Sipho is verkeerd. 6 × 23 = 138, nie 148 nie. (Eenhede: 3 × 6 = 18, skryf 8 skuif 1. Tiene: 2 × 6 = 12, plus geskuifde 1 = 13, wat 138 gee.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Thabo sê 9 × 36 = 314. Gebruik ʼn korrekte metode om te kontroleer of hy reg is. Wys al jou werk.', answer: 'Thabo is verkeerd. 9 × 36 = 324, nie 314 nie. (Eenhede: 6 × 9 = 54, skryf 4 skuif 5. Tiene: 3 × 9 = 27, plus geskuifde 5 = 32, wat 324 gee.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Lerato sê 7 × 18 = 133. Gebruik ʼn korrekte metode om te kontroleer of sy reg is. Wys al jou werk.', answer: 'Lerato is verkeerd. 7 × 18 = 126, nie 133 nie. (Eenhede: 8 × 7 = 56, skryf 6 skuif 5. Tiene: 1 × 7 = 7, plus geskuifde 5 = 12, wat 126 gee.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Amahle sê 12 × 11 = 142. Gebruik ʼn korrekte metode om te kontroleer of sy reg is. Wys al jou werk.', answer: 'Amahle is verkeerd. 12 × 11 = 132, nie 142 nie. (Dink: 12 × 10 = 120, plus 12 × 1 = 12, wat 120 + 12 = 132 gee.)', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Verduidelik in jou eie woorde waarom 6 × 8 dieselfde antwoord as 8 × 6 gee.', answer: 'Vermenigvuldiging kan in enige volgorde gedoen word — dit word die kommutatiewe eienskap genoem. 6 groepe van 8 en 8 groepe van 6 bevat albei presies dieselfde totale aantal items (48), net anders gerangskik, dus is die antwoord altyd dieselfde ongeag in watter volgorde jy vermenigvuldig.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Verduidelik in jou eie woorde waarom dit help om te skat voordat jy bereken om jou antwoord te kontroleer.', answer: 'Deur die getalle eers af te rond, kry jy vinnig ʼn benaderde antwoord. Nadat jy die presiese antwoord uitgewerk het, wys die vergelyking met die skatting of die presiese antwoord redelik is. As die presiese antwoord baie ver van die skatting af is, is dit ʼn teken dat daar waarskynlik ʼn fout iewers in die berekening gemaak is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Skool het 4 klasse van 28 leerders en 2 klasse van 19 leerders. Hoeveel leerders is daar in totaal?', answer: '150 leerders', checkMode: 'auto', correctAnswer: '150', correctAnswers: ['150', '150 leerders'], explanation: 'Stap 1: 4 × 28 = 112 leerders.\nStap 2: 2 × 19 = 38 leerders.\nStap 3: 112 + 38 = 150 leerders ✓' },
        { difficulty: 'Hard', question: 'ʼn Skryfbehoeftewinkel koop 9 bokse penne, elk met 12 penne, teen R4 per pen. Wat is die totale koste?', answer: 'R432', checkMode: 'auto', correctAnswer: '432', correctAnswers: ['432', 'R432'], explanation: 'Stap 1: 9 × 12 = 108 penne.\nStap 2: 108 × 4 = R432 ✓' },
        { difficulty: 'Hard', question: '3 boere begin elkeen met 45 hoenders. Elke boer verkoop 15 hoenders. Hoeveel hoenders het al 3 boere saam oor?', answer: '90 hoenders', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90 hoenders'], explanation: 'Stap 1: Hoenders oor per boer = 45 − 15 = 30.\nStap 2: 3 × 30 = 90 hoenders ✓' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het multi-stap en gekombineerde vermenigvuldigingsprobleme bemeester.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 13, message: 'Goeie poging! Gaan die multi-stap-voorbeelde weer deur.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
