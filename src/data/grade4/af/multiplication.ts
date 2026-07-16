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

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — VERMENIGVULDIG ʼN 2-SYFERGETAL MET ʼN 2-SYFERGETAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-2digit-by-2digit',
      title: 'Vermenigvuldig ʼn 2-Syfergetal met ʼn 2-Syfergetal',
      icon: '🔲',
      explanation: `<p style="margin-bottom:16px;">Om twee 2-syfergetalle te vermenigvuldig, kan ons die <strong>roostermetode</strong> gebruik (ook genoem gedeeltelike produkte). Breek <em>albei</em> getalle in tiene en eenhede, vermenigvuldig elke deel van die eerste getal met elke deel van die tweede getal, en tel dan al vier antwoorde bymekaar.</p>

<p style="margin-bottom:16px;">Byvoorbeeld, <span style="color:#1e40af;font-weight:700;">23</span> × <span style="color:#16a34a;font-weight:700;">14</span> kan opgebreek word as (<span style="color:#1e40af;font-weight:700;">20</span> + <span style="color:#dc2626;font-weight:700;">3</span>) × (<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#ea580c;font-weight:700;">4</span>). Vermenigvuldig elke deel van die eerste hakie met elke deel van die tweede hakie, en tel dan die vier gedeeltelike produkte bymekaar: <span style="color:#1e40af;font-weight:700;">20</span>×<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#1e40af;font-weight:700;">20</span>×<span style="color:#ea580c;font-weight:700;">4</span> + <span style="color:#dc2626;font-weight:700;">3</span>×<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#dc2626;font-weight:700;">3</span>×<span style="color:#ea580c;font-weight:700;">4</span> = 200 + 80 + 30 + 12 = <strong>322</strong>.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Kleurgids:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Eerste getal se tiene — blou</span>
    <span style="background:#fef2f2;color:#dc2626;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fca5a5;">Eerste getal se eenhede — rooi</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Tweede getal se tiene — groen</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Tweede getal se eenhede — oranje</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 23 × 14 met die roostermetode',
          answer: '322',
          steps: [
            `Breek albei getalle in tiene en eenhede: <span style="color:#1e40af;font-weight:700;">23</span> = <span style="color:#1e40af;font-weight:700;">20</span> + <span style="color:#dc2626;font-weight:700;">3</span>, en <span style="color:#16a34a;font-weight:700;">14</span> = <span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#ea580c;font-weight:700;">4</span>.`,
            `Teken ʼn rooster en vermenigvuldig elke deel van een getal met elke deel van die ander:
<div style="margin:12px 0;overflow-x:auto;">
  <table style="border-collapse:collapse;font-size:15px;font-weight:700;">
    <tr>
      <td style="padding:8px 16px;"></td>
      <td style="padding:8px 16px;text-align:center;color:#16a34a;background:#f0fdf4;border:1px solid #86efac;">10</td>
      <td style="padding:8px 16px;text-align:center;color:#ea580c;background:#fff7ed;border:1px solid #fdba74;">4</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#1e40af;background:#eff6ff;border:1px solid #bfdbfe;">20</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">200</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">80</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#dc2626;background:#fef2f2;border:1px solid #fca5a5;">3</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">30</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">12</td>
    </tr>
  </table>
</div>`,
            `Tel al vier gedeeltelike produkte bymekaar: 200 + 80 + 30 + 12 = <strong>322</strong>. Dus 23 × 14 = <strong>322</strong>.`,
          ],
        },
        {
          question: 'Bereken 34 × 21 met die roostermetode',
          answer: '714',
          steps: [
            `Breek albei getalle in tiene en eenhede: <span style="color:#1e40af;font-weight:700;">34</span> = <span style="color:#1e40af;font-weight:700;">30</span> + <span style="color:#dc2626;font-weight:700;">4</span>, en <span style="color:#16a34a;font-weight:700;">21</span> = <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">1</span>.`,
            `Vermenigvuldig elke deel van een getal met elke deel van die ander:
<div style="margin:12px 0;overflow-x:auto;">
  <table style="border-collapse:collapse;font-size:15px;font-weight:700;">
    <tr>
      <td style="padding:8px 16px;"></td>
      <td style="padding:8px 16px;text-align:center;color:#16a34a;background:#f0fdf4;border:1px solid #86efac;">20</td>
      <td style="padding:8px 16px;text-align:center;color:#ea580c;background:#fff7ed;border:1px solid #fdba74;">1</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#1e40af;background:#eff6ff;border:1px solid #bfdbfe;">30</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">600</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">30</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#dc2626;background:#fef2f2;border:1px solid #fca5a5;">4</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">80</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">4</td>
    </tr>
  </table>
</div>`,
            `Tel al vier gedeeltelike produkte bymekaar: 600 + 30 + 80 + 4 = <strong>714</strong>. Dus 34 × 21 = <strong>714</strong>.`,
          ],
        },
        {
          question:
            'ʼn Skool bestel 15 bokse potlode, met 24 potlode in elke boks. Hoeveel potlode is daar altesaam?',
          answer: '360 potlode',
          steps: [
            `Dit is ʼn vermenigvuldigingsprobleem: <strong>15 × 24</strong>. Breek albei getalle in tiene en eenhede: <span style="color:#1e40af;font-weight:700;">15</span> = <span style="color:#1e40af;font-weight:700;">10</span> + <span style="color:#dc2626;font-weight:700;">5</span>, en <span style="color:#16a34a;font-weight:700;">24</span> = <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">4</span>.`,
            `Vermenigvuldig elke deel van een getal met elke deel van die ander:
<div style="margin:12px 0;overflow-x:auto;">
  <table style="border-collapse:collapse;font-size:15px;font-weight:700;">
    <tr>
      <td style="padding:8px 16px;"></td>
      <td style="padding:8px 16px;text-align:center;color:#16a34a;background:#f0fdf4;border:1px solid #86efac;">20</td>
      <td style="padding:8px 16px;text-align:center;color:#ea580c;background:#fff7ed;border:1px solid #fdba74;">4</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#1e40af;background:#eff6ff;border:1px solid #bfdbfe;">10</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">200</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">40</td>
    </tr>
    <tr>
      <td style="padding:8px 16px;text-align:center;color:#dc2626;background:#fef2f2;border:1px solid #fca5a5;">5</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">100</td>
      <td style="padding:8px 16px;text-align:center;border:1px solid #e5e7eb;">20</td>
    </tr>
  </table>
</div>`,
            `Tel al vier gedeeltelike produkte bymekaar: 200 + 40 + 100 + 20 = <strong>360</strong>. Daar is <strong>360 potlode</strong> altesaam.`,
          ],
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      videoPlaceholder: 'Kort video wat wys hoe om die roostermetode te gebruik om ʼn 2-syfergetal met ʼn 2-syfergetal te vermenigvuldig',
      diagramPlaceholder: 'Roostermetode-diagram wat 23 × 14 in vier gedeeltelike produkte verdeel wat bymekaar 322 gee',
    },
  ],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae) — 6 vaardigheidsblokke
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Tafels Vlotheid (0-3, Easy)
        { difficulty: 'Easy', question: 'Bereken: 4 × 6', answer: '24', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: '4 × 6 = 24. Tel in 6e vir 4 stappe: 6, 12, 18, 24 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 7 × 8', answer: '56', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: '7 × 8 = 56 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 9 × 9', answer: '81', checkMode: 'auto', correctAnswer: '81', correctAnswers: ['81'], explanation: '9 × 9 = 81 ✓' },
        { difficulty: 'Easy', question: 'Vul die ontbrekende getal in: 9 × ___ = 63', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Tel in 9e totdat jy 63 bereik: 9, 18, 27, 36, 45, 54, 63 — dit is 7 stappe, dus 9 × 7 = 63 ✓' },

        // Blok 2 — Kolomvermenigvuldiging (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 34 × 2', answer: '68', checkMode: 'auto', correctAnswer: '68', correctAnswers: ['68'], explanation: 'Eenhede: 4 × 2 = 8. Tiene: 3 × 2 = 6.\nAntwoord: 68 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 47 × 3', answer: '141', checkMode: 'auto', correctAnswer: '141', correctAnswers: ['141'], explanation: 'Eenhede: 7 × 3 = 21. Skryf 1, skuif 2.\nTiene: 4 × 3 = 12, plus geskuifde 2 = 14. Skryf 4 in tiene, 1 in honderde.\nAntwoord: 141 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 64 × 9', answer: '576', checkMode: 'auto', correctAnswer: '576', correctAnswers: ['576'], explanation: 'Eenhede: 4 × 9 = 36. Skryf 6, skuif 3.\nTiene: 6 × 9 = 54, plus geskuifde 3 = 57. Skryf 7 in tiene, 5 in honderde.\nAntwoord: 576 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken 53 × 4 met die kolommetode, maar is halfpad onderbreek. Hulle werk wys: eenhede-kolom 3 × 4 = 12, hulle het 2 geskryf en 1 geskuif — maar die tiene-ry is leeg. Watter getal moet in die tiene-kolom kom, en wat is die finale antwoord?', answer: 'Tiene: 5 × 4 = 20, plus geskuifde 1 = 21. Finale antwoord: 212', checkMode: 'self' },

        // Blok 3 — Skatting en Redelikheid (8-10, Medium)
        { difficulty: 'Medium', question: 'Skat 48 × 6 deur 48 af te rond na die naaste 10 eerste, gee dan die presiese antwoord.', answer: 'Skatting: 300 (50 × 6). Presies: 288', checkMode: 'auto', correctAnswer: '288', correctAnswers: ['288', '300 288', 'Skatting 300 Presies 288'], explanation: '48 rond op na 50, dus die skatting is 50 × 6 = 300. Presies: eenhede 8 × 6 = 48, skryf 8 skuif 4; tiene 4 × 6 = 24, plus geskuifde 4 = 28. Presiese antwoord: 288, wat naby aan die skatting van 300 is ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder skat 62 × 5 deur 62 na 60 af te rond, en kry 300. Hulle presiese antwoord kom uit op 310. Is 310 ʼn redelike antwoord? Verduidelik hoe jy weet.', answer: 'Ja, 310 is redelik — dit is baie naby aan die skatting van 300, dus maak dit sin as die presiese antwoord op 62 × 5.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sonder om enige van hulle heeltemal uit te werk, watter een is groter: 6 × 14 of 9 × 9? Verduidelik hoe jy dit kan sien deur afronding of skatting te gebruik.', answer: '6 × 14 is groter. Skatting: 6 × 14 is naby aan 6 × 15 = 90, terwyl 9 × 9 = 81. Dus is 6 × 14 (wat gelyk is aan 84) groter as 9 × 9 (81).', checkMode: 'self' },

        // Blok 4 — Faktore en Buigsame Strategieë (11-13, Medium)
        { difficulty: 'Easy', question: 'Breek 12 in twee faktore en gebruik hulle om te bereken: 3 × 12', answer: '36', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: '12 = 6 × 2, dus 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36 ✓' },
        { difficulty: 'Medium', question: 'Breek 15 in twee faktore en gebruik hulle om te bereken: 8 × 15', answer: '120', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120'], explanation: '15 = 5 × 3, dus 8 × 15 = 8 × 5 × 3 = 40 × 3 = 120 ✓' },
        { difficulty: 'Medium', question: 'Sou jy vir die berekening 6 × 18 liewer 18 in faktore breek (6 × 9 × 2) of die kolommetode gebruik? Kies ʼn strategie en verduidelik waarom dit hierdie spesifieke produk pas.', answer: 'Albei strategieë werk, maar om 18 in 9 × 2 te breek is vinnig omdat 6 × 9 = 54 ʼn bekende feit is, en dan verdubbel na 108 is maklik. Die kolommetode werk ook goed aangesien 18 ʼn 2-syfergetal is, maar die faktormetode vermy heeltemal enige skuif hier.', checkMode: 'self' },

        // Blok 5 — Woordprobleme in Verskeie Kontekste (14-16, Medium)
        { difficulty: 'Medium', question: 'ʼn Netbalspan het 12 spelers. As 7 spanne aan ʼn toernooi deelneem, hoeveel spelers neem altesaam deel?', answer: '84 spelers', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84 spelers'], explanation: '7 × 12 = 84 spelers ✓' },
        { difficulty: 'Medium', question: 'ʼn Minibustaxi kan 15 passasiers vervoer. Hoeveel meer passasiers kan 6 taxi\'s vervoer as 4 taxi\'s?', answer: '30 meer passasiers', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30 meer passasiers'], explanation: '6 × 15 = 90 en 4 × 15 = 60. 90 − 60 = 30 meer passasiers ✓' },
        { difficulty: 'Medium', question: 'Klas A bestel 6 bokse van 15 potlode elk vir die jaar. Klas B bestel 5 bokse van 18 potlode elk. Watter klas het meer potlode bestel, en met hoeveel?', answer: 'Geeneen nie — albei klasse het presies dieselfde aantal potlode bestel (90 elk).', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'hulle is gelyk', 'geeneen nie, hulle is gelyk', 'dieselfde'], explanation: 'Klas A: 6 × 15 = 90 potlode. Klas B: 5 × 18 = 90 potlode. Albei klasse het presies dieselfde aantal potlode bestel — 90 elk ✓' },

        // Blok 6 — Foutopsporing en Regverdig-jou-Redenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Sipho sê 6 × 23 = 148. Gebruik ʼn korrekte metode om te kontroleer of hy reg is. Wys al jou werk.', answer: 'Sipho is verkeerd. 6 × 23 = 138, nie 148 nie. (Eenhede: 3 × 6 = 18, skryf 8 skuif 1. Tiene: 2 × 6 = 12, plus geskuifde 1 = 13, wat 138 gee.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Boer het 8 rye van 14 kool. ʼn Haelstorm vernietig 2 volle rye. Hoeveel kool bly regop staan?', answer: '84 kool', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84', '84 kool'], explanation: 'Stap 1: Totale kool = 8 × 14 = 112.\nStap 2: Kool vernietig = 2 × 14 = 28.\nStap 3: Kool oor = 112 − 28 = 84 kool ✓' },
        { difficulty: 'Hard', question: 'Verduidelik in jou eie woorde waarom 6 × 8 dieselfde antwoord as 8 × 6 gee.', answer: 'Vermenigvuldiging kan in enige volgorde gedoen word — dit word die kommutatiewe eienskap genoem. 6 groepe van 8 en 8 groepe van 6 bevat albei presies dieselfde totale aantal items (48), net anders gerangskik, dus is die antwoord altyd dieselfde ongeag in watter volgorde jy vermenigvuldig.', checkMode: 'self' },

        // Blok 7 — Vermenigvuldig ʼn 2-Syfergetal met ʼn 2-Syfergetal (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die roostermetode: 12 × 13', answer: '156', checkMode: 'auto', correctAnswer: '156', correctAnswers: ['156'], explanation: '12 = 10 + 2, 13 = 10 + 3. Gedeeltelike produkte: 10×10=100, 10×3=30, 2×10=20, 2×3=6.\nSom: 100 + 30 + 20 + 6 = 156 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die roostermetode: 26 × 34', answer: '884', checkMode: 'auto', correctAnswer: '884', correctAnswers: ['884'], explanation: '26 = 20 + 6, 34 = 30 + 4. Gedeeltelike produkte: 20×30=600, 20×4=80, 6×30=180, 6×4=24.\nSom: 600 + 80 + 180 + 24 = 884 ✓' },
        { difficulty: 'Medium', question: 'ʼn Stadion het 18 rye sitplekke met 22 sitplekke in elke ry. Hoeveel sitplekke is daar altesaam?', answer: '396 sitplekke', checkMode: 'auto', correctAnswer: '396', correctAnswers: ['396', '396 sitplekke'], explanation: '18 = 10 + 8, 22 = 20 + 2. Gedeeltelike produkte: 10×20=200, 10×2=20, 8×20=160, 8×2=16.\nSom: 200 + 20 + 160 + 16 = 396 sitplekke ✓' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het tafels, kolommetode, skatting, faktore, 2-syfervermenigvuldiging, woordprobleme en redenasie bemeester.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd oor die meeste van hierdie vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur vir die blokke wat lastig was en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae) — 6 vaardigheidsblokke
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Tafels Vlotheid (0-3, Easy)
        { difficulty: 'Easy', question: 'Bereken: 5 × 9', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45'], explanation: '5 × 9 = 45. Tel in 5e vir 9 stappe: 5, 10, 15, 20, 25, 30, 35, 40, 45 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 6 × 7', answer: '42', checkMode: 'auto', correctAnswer: '42', correctAnswers: ['42'], explanation: '6 × 7 = 42 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 12 × 8', answer: '96', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96'], explanation: '12 × 8 = 96. Dink: 10 × 8 + 2 × 8 = 80 + 16 = 96 ✓' },
        { difficulty: 'Easy', question: 'Vul die ontbrekende getal in: ___ × 7 = 56', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: '8 × 7 = 56, dus is die ontbrekende getal 8 ✓' },

        // Blok 2 — Kolomvermenigvuldiging (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 42 × 2', answer: '84', checkMode: 'auto', correctAnswer: '84', correctAnswers: ['84'], explanation: 'Eenhede: 2 × 2 = 4. Tiene: 4 × 2 = 8.\nAntwoord: 84 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 56 × 4', answer: '224', checkMode: 'auto', correctAnswer: '224', correctAnswers: ['224'], explanation: 'Eenhede: 6 × 4 = 24. Skryf 4, skuif 2.\nTiene: 5 × 4 = 20, plus geskuifde 2 = 22. Skryf 2 in tiene, 2 in honderde.\nAntwoord: 224 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 32 × 8', answer: '256', checkMode: 'auto', correctAnswer: '256', correctAnswers: ['256'], explanation: 'Eenhede: 2 × 8 = 16. Skryf 6, skuif 1.\nTiene: 3 × 8 = 24, plus geskuifde 1 = 25. Skryf 5 in tiene, 2 in honderde.\nAntwoord: 256 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken 76 × 3 met die kolommetode, maar is halfpad onderbreek. Hulle werk wys: eenhede-kolom 6 × 3 = 18, hulle het 8 geskryf en 1 geskuif — maar die tiene-ry is leeg. Watter getal moet in die tiene-kolom kom, en wat is die finale antwoord?', answer: 'Tiene: 7 × 3 = 21, plus geskuifde 1 = 22. Finale antwoord: 228', checkMode: 'self' },

        // Blok 3 — Skatting en Redelikheid (8-10, Medium)
        { difficulty: 'Medium', question: 'Skat 75 × 8 deur 75 af te rond na die naaste 10 eerste, gee dan die presiese antwoord.', answer: 'Skatting: 640 (80 × 8). Presies: 600', checkMode: 'auto', correctAnswer: '600', correctAnswers: ['600', '640 600', 'Skatting 640 Presies 600'], explanation: '75 rond op na 80, dus die skatting is 80 × 8 = 640. Presies: eenhede 5 × 8 = 40, skryf 0 skuif 4; tiene 7 × 8 = 56, plus geskuifde 4 = 60. Presiese antwoord: 600, wat naby aan die skatting van 640 is ✓' },
        { difficulty: 'Medium', question: 'Twee leerders skat 39 × 7. Bongani rond 39 af na 40 en kry 280. Zanele rond 39 af na 35 (nie die naaste 10 nie) en kry 245. Wie se skatting volg die korrekte afrondingsreël, en waarom?', answer: 'Bongani se skatting is korrek — 39 rond af na die naaste 10, wat 40 is, nie 35 nie. Zanele het nie na die naaste 10 korrek afgerond nie, dus is haar skatting van 245 nie ʼn geldige skatting vir hierdie metode nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sonder om enige van hulle heeltemal uit te werk, watter een is groter: 7 × 13 of 8 × 11? Verduidelik hoe jy dit kan sien deur afronding of skatting te gebruik.', answer: '7 × 13 is groter. As jy 13 effens afrond en 11 effens oprond, land albei naby 12, so vergelyk eerder die eerste faktore: 7 is naby aan 8, maar 13 is heelwat groter as 11, dus wen die produk met 13 (91) van die produk met 11 (88).', checkMode: 'self' },

        // Blok 4 — Faktore en Buigsame Strategieë (11-13, Medium)
        { difficulty: 'Easy', question: 'Breek 16 in twee faktore en gebruik hulle om te bereken: 5 × 16', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80'], explanation: '16 = 8 × 2, dus 5 × 16 = 5 × 8 × 2 = 40 × 2 = 80 ✓' },
        { difficulty: 'Medium', question: 'Breek 14 in twee faktore en gebruik hulle om te bereken: 9 × 14', answer: '126', checkMode: 'auto', correctAnswer: '126', correctAnswers: ['126'], explanation: '14 = 7 × 2, dus 9 × 14 = 9 × 7 × 2 = 63 × 2 = 126 ✓' },
        { difficulty: 'Medium', question: 'Sou jy vir die berekening 4 × 25 liewer 25 in faktore breek (4 × 5 × 5) of die kolommetode gebruik? Kies ʼn strategie en verduidelik waarom dit hierdie spesifieke produk pas.', answer: 'Om 25 in 5 × 5 te breek is hier baie vinniger, want 4 × 5 = 20 is ʼn maklike bekende feit, en 20 × 5 = 100. Die kolommetode sou steeds werk, maar behels meer skryfwerk en skuif sonder ekstra voordeel.', checkMode: 'self' },

        // Blok 5 — Woordprobleme in Verskeie Kontekste (14-16, Medium)
        { difficulty: 'Medium', question: 'ʼn Spazawinkel hou koeldrank in kratte van 24 blikkies. As die eienaar 5 kratte het, hoeveel blikkies koeldrank het die winkel altesaam?', answer: '120 blikkies', checkMode: 'auto', correctAnswer: '120', correctAnswers: ['120', '120 blikkies'], explanation: '5 × 24 = 120 blikkies ✓' },
        { difficulty: 'Medium', question: 'ʼn Bokboer het 9 kampe met 13 bokke in elke kamp. Hoeveel minder bokke sou die boer hê as 3 van die kampe eerder leeg was?', answer: '39 minder bokke', checkMode: 'auto', correctAnswer: '39', correctAnswers: ['39', '39 minder bokke'], explanation: '9 × 13 = 117 bokke met alle kampe vol. As 3 kampe leeg was, verwyder dit 3 × 13 = 39 bokke, dus sou daar 39 minder bokke wees ✓' },
        { difficulty: 'Medium', question: 'ʼn Taxistaanplek het 7 minibusse wat elk 16 passasiers vervoer. ʼn Tweede staanplek het 8 minibusse wat elk 14 passasiers vervoer. Watter staanplek vervoer meer passasiers, en met hoeveel?', answer: 'Geeneen nie — albei staanplekke vervoer presies dieselfde aantal passasiers (112 elk).', checkMode: 'auto', correctAnswer: 'gelyk', correctAnswers: ['gelyk', 'hulle is gelyk', 'geeneen nie, hulle is gelyk', 'dieselfde'], explanation: 'Eerste staanplek: 7 × 16 = 112 passasiers. Tweede staanplek: 8 × 14 = 112 passasiers. Albei staanplekke vervoer presies dieselfde aantal — 112 passasiers elk ✓' },

        // Blok 6 — Foutopsporing en Regverdig-jou-Redenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Thabo sê 9 × 36 = 314. Gebruik ʼn korrekte metode om te kontroleer of hy reg is. Wys al jou werk.', answer: 'Thabo is verkeerd. 9 × 36 = 324, nie 314 nie. (Eenhede: 6 × 9 = 54, skryf 4 skuif 5. Tiene: 3 × 9 = 27, plus geskuifde 5 = 32, wat 324 gee.)', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Skryfbehoeftewinkel koop 7 bokse penne, elk met 12 penne, teen R4 per pen. Wat is die totale koste?', answer: 'R336', checkMode: 'auto', correctAnswer: '336', correctAnswers: ['336', 'R336'], explanation: 'Stap 1: 7 × 12 = 84 penne.\nStap 2: 84 × 4 = R336 ✓' },
        { difficulty: 'Hard', question: 'Verduidelik in jou eie woorde waarom dit help om te skat voordat jy bereken om jou antwoord te kontroleer.', answer: 'Deur die getalle eers af te rond, kry jy vinnig ʼn benaderde antwoord. Nadat jy die presiese antwoord uitgewerk het, wys die vergelyking met die skatting of die presiese antwoord redelik is. As die presiese antwoord baie ver van die skatting af is, is dit ʼn teken dat daar waarskynlik ʼn fout iewers in die berekening gemaak is.', checkMode: 'self' },

        // Blok 7 — Vermenigvuldig ʼn 2-Syfergetal met ʼn 2-Syfergetal (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die roostermetode: 14 × 21', answer: '294', checkMode: 'auto', correctAnswer: '294', correctAnswers: ['294'], explanation: '14 = 10 + 4, 21 = 20 + 1. Gedeeltelike produkte: 10×20=200, 10×1=10, 4×20=80, 4×1=4.\nSom: 200 + 10 + 80 + 4 = 294 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die roostermetode: 37 × 25', answer: '925', checkMode: 'auto', correctAnswer: '925', correctAnswers: ['925'], explanation: '37 = 30 + 7, 25 = 20 + 5. Gedeeltelike produkte: 30×20=600, 30×5=150, 7×20=140, 7×5=35.\nSom: 600 + 150 + 140 + 35 = 925 ✓' },
        { difficulty: 'Medium', question: 'ʼn Boer plant 24 bome in elk van 16 rye. Hoeveel bome is daar altesaam?', answer: '384 bome', checkMode: 'auto', correctAnswer: '384', correctAnswers: ['384', '384 bome'], explanation: '24 = 20 + 4, 16 = 10 + 6. Gedeeltelike produkte: 20×10=200, 20×6=120, 4×10=40, 4×6=24.\nSom: 200 + 120 + 40 + 24 = 384 bome ✓' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het tafels, kolommetode, skatting, faktore, 2-syfervermenigvuldiging, woordprobleme en redenasie bemeester.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd oor die meeste van hierdie vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur vir die blokke wat lastig was en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae) — 6 vaardigheidsblokke
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Tafels Vlotheid (0-3, Easy)
        { difficulty: 'Easy', question: 'Bereken: 8 × 8', answer: '64', checkMode: 'auto', correctAnswer: '64', correctAnswers: ['64'], explanation: '8 × 8 = 64 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 3 × 9', answer: '27', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27'], explanation: '3 × 9 = 27. Tel in 3e vir 9 stappe: 3, 6, 9, 12, 15, 18, 21, 24, 27 ✓' },
        { difficulty: 'Easy', question: 'Bereken: 11 × 6', answer: '66', checkMode: 'auto', correctAnswer: '66', correctAnswers: ['66'], explanation: '11 × 6 = 66. Dink: 10 × 6 + 1 × 6 = 60 + 6 = 66 ✓' },
        { difficulty: 'Easy', question: 'Vul die ontbrekende getal in: ___ × 6 = 42', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: 'Tel in 6e totdat jy 42 bereik: 6, 12, 18, 24, 30, 36, 42 — dit is 7 stappe, dus 7 × 6 = 42 ✓' },

        // Blok 2 — Kolomvermenigvuldiging (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 23 × 3', answer: '69', checkMode: 'auto', correctAnswer: '69', correctAnswers: ['69'], explanation: 'Eenhede: 3 × 3 = 9. Tiene: 2 × 3 = 6.\nAntwoord: 69 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 67 × 4', answer: '268', checkMode: 'auto', correctAnswer: '268', correctAnswers: ['268'], explanation: 'Eenhede: 7 × 4 = 28. Skryf 8, skuif 2.\nTiene: 6 × 4 = 24, plus geskuifde 2 = 26. Skryf 6 in tiene, 2 in honderde.\nAntwoord: 268 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 45 × 6', answer: '270', checkMode: 'auto', correctAnswer: '270', correctAnswers: ['270'], explanation: 'Eenhede: 5 × 6 = 30. Skryf 0, skuif 3.\nTiene: 4 × 6 = 24, plus geskuifde 3 = 27. Skryf 7 in tiene, 2 in honderde.\nAntwoord: 270 ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken 84 × 6 met die kolommetode, maar is halfpad onderbreek. Hulle werk wys: eenhede-kolom 4 × 6 = 24, hulle het 4 geskryf en 2 geskuif — maar die tiene-ry is leeg. Watter getal moet in die tiene-kolom kom, en wat is die finale antwoord?', answer: 'Tiene: 8 × 6 = 48, plus geskuifde 2 = 50. Finale antwoord: 504', checkMode: 'self' },

        // Blok 3 — Skatting en Redelikheid (8-10, Medium)
        { difficulty: 'Medium', question: 'Skat 53 × 7 deur 53 af te rond na die naaste 10 eerste, gee dan die presiese antwoord.', answer: 'Skatting: 350 (50 × 7). Presies: 371', checkMode: 'auto', correctAnswer: '371', correctAnswers: ['371', '350 371', 'Skatting 350 Presies 371'], explanation: '53 rond af na 50, dus die skatting is 50 × 7 = 350. Presies: eenhede 3 × 7 = 21, skryf 1 skuif 2; tiene 5 × 7 = 35, plus geskuifde 2 = 37. Presiese antwoord: 371, wat naby aan die skatting van 350 is ✓' },
        { difficulty: 'Medium', question: 'ʼn Leerder skat 41 × 9 deur 41 na 40 af te rond, en kry 360. Hulle presiese antwoord kom uit op 369. Is 369 ʼn redelike antwoord? Verduidelik hoe jy weet.', answer: 'Ja, 369 is redelik — dit is baie naby aan die skatting van 360, dus maak dit sin as die presiese antwoord op 41 × 9.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Sonder om enige van hulle heeltemal uit te werk, watter een is groter: 5 × 19 of 8 × 12? Verduidelik hoe jy dit kan sien deur afronding of skatting te gebruik.', answer: '8 × 12 is groter, alhoewel die twee baie naby aan mekaar is. As jy 19 oprond na 20, kry jy ʼn skatting van 5 × 20 = 100 vir die eerste produk, terwyl 8 × 12 reeds naby daaraan is op ongeveer 96 — omdat die skatting vir 5 × 19 opgerond is, is die ware waarde (95) selfs nader aan 96, en 8 × 12 (96) wen net-net.', checkMode: 'self' },

        // Blok 4 — Faktore en Buigsame Strategieë (11-13, Medium)
        { difficulty: 'Easy', question: 'Breek 18 in twee faktore en gebruik hulle om te bereken: 4 × 18', answer: '72', checkMode: 'auto', correctAnswer: '72', correctAnswers: ['72'], explanation: '18 = 9 × 2, dus 4 × 18 = 4 × 9 × 2 = 36 × 2 = 72 ✓' },
        { difficulty: 'Medium', question: 'Breek 16 in twee faktore en gebruik hulle om te bereken: 7 × 16', answer: '112', checkMode: 'auto', correctAnswer: '112', correctAnswers: ['112'], explanation: '16 = 8 × 2, dus 7 × 16 = 7 × 8 × 2 = 56 × 2 = 112 ✓' },
        { difficulty: 'Medium', question: 'Sou jy vir die berekening 3 × 45 liewer 45 in faktore breek (3 × 9 × 5) of die kolommetode gebruik? Kies ʼn strategie en verduidelik waarom dit hierdie spesifieke produk pas.', answer: 'Die kolommetode is waarskynlik makliker hier, want 45 breek nie in twee baie eenvoudige klein faktore nie (9 × 5 moet steeds twee keer met 3 vermenigvuldig word). Om 45 × 3 in kolomme te skryf en net een keer te skuif is vinnig en direk.', checkMode: 'self' },

        // Blok 5 — Woordprobleme in Verskeie Kontekste (14-16, Medium)
        { difficulty: 'Medium', question: 'ʼn Sokkerafrigter koop nuwe drag vir die span: 8 bokse kouse met 12 pare in elke boks. Hoeveel pare kouse het die afrigter altesaam gekoop?', answer: '96 pare', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96 pare'], explanation: '8 × 12 = 96 pare kouse ✓' },
        { difficulty: 'Medium', question: 'ʼn Sitrusboer pak lemoene in kratte van 18. Hoeveel meer lemoene word in 9 kratte gepak as in 6 kratte?', answer: '54 meer lemoene', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54', '54 meer lemoene'], explanation: '9 × 18 = 162 en 6 × 18 = 108. 162 − 108 = 54 meer lemoene ✓' },
        { difficulty: 'Medium', question: 'Roete A-busse maak 6 ritte per dag met 17 passasiers elk. Roete B-busse maak 7 ritte per dag met 15 passasiers elk. Watter roete vervoer meer passasiers per dag, en met hoeveel?', answer: 'Roete B vervoer meer, met 3.', checkMode: 'auto', correctAnswer: 'RoeteBmet3', correctAnswers: ['Roete B met 3', 'Roete B, met 3', '3 meer'], explanation: 'Roete A: 6 × 17 = 102 passasiers. Roete B: 7 × 15 = 105 passasiers. Roete B vervoer meer passasiers, met 105 − 102 = 3 ✓' },

        // Blok 6 — Foutopsporing en Regverdig-jou-Redenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Amahle sê 12 × 11 = 142. Gebruik ʼn korrekte metode om te kontroleer of sy reg is. Wys al jou werk.', answer: 'Amahle is verkeerd. 12 × 11 = 132, nie 142 nie. (Dink: 12 × 10 = 120, plus 12 × 1 = 12, wat 120 + 12 = 132 gee.)', checkMode: 'self' },
        { difficulty: 'Hard', question: '4 vissers begin elkeen die dag met 38 visse in hulle vangs. Elke visser verkoop 14 visse by die mark. Hoeveel visse het al 4 vissers saam oor?', answer: '96 visse', checkMode: 'auto', correctAnswer: '96', correctAnswers: ['96', '96 visse'], explanation: 'Stap 1: Visse oor per visser = 38 − 14 = 24.\nStap 2: 4 × 24 = 96 visse ✓' },
        { difficulty: 'Hard', question: 'Verduidelik in jou eie woorde waarom om 15 in 5 × 3 te breek en stap vir stap te vermenigvuldig presies dieselfde antwoord gee as om direk met 15 te vermenigvuldig.', answer: 'Om 15 in 5 × 3 te breek verander nie sy waarde nie — 5 × 3 is steeds 15. Dus is om met 5 en dan met 3 te vermenigvuldig dieselfde totale hoeveelheid vermenigvuldiging as om met 15 in een stap te vermenigvuldig, net verdeel in twee makliker kleiner stappe. Die volgorde en groepering van die vermenigvuldiging kan verander, maar die finale produk bly dieselfde.', checkMode: 'self' },

        // Blok 7 — Vermenigvuldig ʼn 2-Syfergetal met ʼn 2-Syfergetal (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die roostermetode: 13 × 24', answer: '312', checkMode: 'auto', correctAnswer: '312', correctAnswers: ['312'], explanation: '13 = 10 + 3, 24 = 20 + 4. Gedeeltelike produkte: 10×20=200, 10×4=40, 3×20=60, 3×4=12.\nSom: 200 + 40 + 60 + 12 = 312 ✓' },
        { difficulty: 'Medium', question: 'Bereken met die roostermetode: 42 × 36', answer: '1512', checkMode: 'auto', correctAnswer: '1512', correctAnswers: ['1512'], explanation: '42 = 40 + 2, 36 = 30 + 6. Gedeeltelike produkte: 40×30=1200, 40×6=240, 2×30=60, 2×6=12.\nSom: 1200 + 240 + 60 + 12 = 1512 ✓' },
        { difficulty: 'Medium', question: 'ʼn Teater het 27 rye met 19 sitplekke in elke ry. Hoeveel sitplekke is daar altesaam?', answer: '513 sitplekke', checkMode: 'auto', correctAnswer: '513', correctAnswers: ['513', '513 sitplekke'], explanation: '27 = 20 + 7, 19 = 10 + 9. Gedeeltelike produkte: 20×10=200, 20×9=180, 7×10=70, 7×9=63.\nSom: 200 + 180 + 70 + 63 = 513 sitplekke ✓' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het tafels, kolommetode, skatting, faktore, 2-syfervermenigvuldiging, woordprobleme en redenasie bemeester.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd oor die meeste van hierdie vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur vir die blokke wat lastig was en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
