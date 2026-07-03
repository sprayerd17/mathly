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
      videoPlaceholder: 'Kort video wat wys hoe om te skat voordat jy vermenigvuldig en hoe om te kyk of die antwoord redelik is',
    },
  ],

  topicPractice: [

    // ── AFDELING 1 — Wat is Vermenigvuldiging? ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skryf die volgende as ʼn vermenigvuldigingsin:\n\n' +
        '7 + 7 + 7 + 7 + 7\n\n' +
        'Tik jou antwoord met × of x (byvoorbeeld: 3 × 5)',
      // Accept either order — multiplication is commutative
      correctAnswer: '5x7',
      correctAnswers: ['5x7', '7x5'],
      explanation:
        '7 + 7 + 7 + 7 + 7 het 5 groepe van 7.\n' +
        'As ʼn vermenigvuldiging: 5 × 7 (of 7 × 5 — albei is korrek).\n' +
        'Die produk is 5 × 7 = 35.',
      answer: '5 × 7 (of 7 × 5)',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'ʼn Sak het 6 appels. Daar is 8 sakke.\n\n' +
        'Deel A: Skryf dit as ʼn vermenigvuldigingsin (gebruik × of x).\n' +
        'Deel B: Bereken die antwoord.',
      answer: 'Deel A: 8 × 6 (of 6 × 8)  Deel B: 48',
      parts: [
        {
          label: 'Deel A — Skryf die vermenigvuldiging',
          correctAnswer: '8x6',
          correctAnswers: ['8x6', '6x8'],
          explanation:
            '8 sakke met 6 appels elk: 8 × 6.\n' +
            '(6 × 8 is ook korrek — vermenigvuldiging werk in enige volgorde.)',
        },
        {
          label: 'Deel B — Bereken die antwoord',
          correctAnswer: '48',
          explanation:
            '8 × 6 = 48.\n' +
            'Kontroleer: 6 + 6 + 6 + 6 + 6 + 6 + 6 + 6 = 48.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Onderwyser het 9 bokse gekleurde potlode. Elke boks het 8 potlode.\n' +
        'Sy het 75 potlode nodig vir haar klas.\n\n' +
        'Het sy genoeg? Wys jou werk.',
      explanation:
        'Stap 1: Vind die totale aantal potlode.\n' +
        '9 × 8 = 72 potlode\n\n' +
        'Stap 2: Vergelyk 72 met 75.\n' +
        '72 < 75 — sy het NIE genoeg NIE.\n\n' +
        'Sy kort 3 potlode (75 − 72 = 3).',
      answer: 'Nee, die onderwyser het nie genoeg nie. Sy kort 3 potlode (72 potlode teenoor 75 benodig).',
    },

    // ── AFDELING 2 — Vermenigvuldigingstabelle ──────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Gebruik jou tafels om elke deel te beantwoord. Skryf slegs die getal.\n\n' +
        'a) 4 × 7\n' +
        'b) 5 × 9\n' +
        'c) 3 × 8',
      answer: 'a) 28  b) 45  c) 24',
      parts: [
        {
          label: 'a) 4 × 7',
          correctAnswer: '28',
          explanation:
            '4 × 7 = 28.\n' +
            'Tel in 4e vir 7 stappe: 4, 8, 12, 16, 20, 24, 28.',
        },
        {
          label: 'b) 5 × 9',
          correctAnswer: '45',
          explanation:
            '5 × 9 = 45.\n' +
            'Tel in 5e vir 9 stappe: 5, 10, 15, 20, 25, 30, 35, 40, 45.',
        },
        {
          label: 'c) 3 × 8',
          correctAnswer: '24',
          explanation:
            '3 × 8 = 24.\n' +
            'Tel in 3e vir 8 stappe: 3, 6, 9, 12, 15, 18, 21, 24.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Vul die ontbrekende getal in elke vermenigvuldiging in. Skryf slegs die ontbrekende getal.\n\n' +
        'a) 6 × ___ = 30\n' +
        'b) ___ × 4 = 32\n' +
        'c) 7 × ___ = 49',
      answer: 'a) 5  b) 8  c) 7',
      parts: [
        {
          label: 'a) 6 × ___ = 30',
          correctAnswer: '5',
          explanation:
            '6 × 5 = 30.\n' +
            'Dink: tel in 6e totdat jy 30 bereik — 6, 12, 18, 24, 30. Dit is 5 stappe.',
        },
        {
          label: 'b) ___ × 4 = 32',
          correctAnswer: '8',
          explanation:
            '8 × 4 = 32.\n' +
            'Dink: tel in 4e totdat jy 32 bereik — 4, 8, 12, 16, 20, 24, 28, 32. Dit is 8 stappe.',
        },
        {
          label: 'c) 7 × ___ = 49',
          correctAnswer: '7',
          explanation:
            '7 × 7 = 49.\n' +
            'Dink: tel in 7e totdat jy 49 bereik — 7, 14, 21, 28, 35, 42, 49. Dit is 7 stappe.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Winkel verkoop sjokoladerepe in pakke van 4.\n' +
        'Daar is 9 pakke op die rak en 3 pakke agter die toonbank.\n\n' +
        'Hoeveel sjokoladerepe is daar altesaam? Wys al jou werk.\n' +
        'Skryf slegs die finale getal.',
      // Step 1: 9 + 3 = 12 packs total
      // Step 2: 12 × 4 = 48 chocolate bars
      correctAnswer: '48',
      explanation:
        'Stap 1: Vind die totale aantal pakke.\n' +
        '9 + 3 = 12 pakke\n\n' +
        'Stap 2: Vermenigvuldig met 4 (repe per pak).\n' +
        '12 × 4 = 48 sjokoladerepe',
      answer: '48 sjokoladerepe',
    },

    // ── AFDELING 3 — Vermenigvuldig ʼn 2-Syfergetal met ʼn 1-Syfergetal ──────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Bereken met die kolommetode en wys jou werk:\n\n' +
        '23 × 3\n\n' +
        'Skryf slegs die finale antwoord.',
      // 23 × 3: units 3×3=9, tens 2×3=6 → 69 (no carrying)
      correctAnswer: '69',
      explanation:
        'Kolomvermenigvuldiging:\n' +
        '• Eenhede: 3 × 3 = 9. Skryf 9.\n' +
        '• Tiene: 2 × 3 = 6. Skryf 6.\n\n' +
        'Antwoord: 69',
      answer: '69',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken met die kolommetode. Wys jou skuif waar nodig:\n\n' +
        '67 × 4\n\n' +
        'Skryf slegs die finale antwoord.',
      // 67 × 4: units 7×4=28 write 8 carry 2, tens 6×4=24+2=26 → 268
      correctAnswer: '268',
      explanation:
        'Kolomvermenigvuldiging:\n' +
        '• Eenhede: 7 × 4 = 28. Skryf 8, skuif 2.\n' +
        '• Tiene: 6 × 4 = 24, plus geskuifde 2 = 26. Skryf 6 in tiene, 2 in honderde.\n\n' +
        'Antwoord: 268',
      answer: '268',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'ʼn Skool het 8 klaskamers. Elke klaskamer het 32 lessenaars.\n\n' +
        'Hoeveel lessenaars is daar altesaam?\n' +
        'Wys volledige kolomvermenigvuldiging met skuif waar nodig.',
      explanation:
        'Stap 1: Skryf 32 × 8 in kolomformaat.\n\n' +
        '• Eenhede: 2 × 8 = 16. Skryf 6, skuif 1.\n' +
        '• Tiene: 3 × 8 = 24, plus geskuifde 1 = 25. Skryf 5 in tiene, 2 in honderde.\n\n' +
        'Antwoord: 256 lessenaars',
      answer: '256 lessenaars',
    },

    // ── AFDELING 4 — Vermenigvuldig deur Faktore te Gebruik ──────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Breek 12 in twee faktore en gebruik hulle om te bereken:\n\n' +
        '3 × 12\n\n' +
        'Enige geldige faktorpaar vir 12 word aanvaar. Skryf slegs die finale antwoord.',
      // 12 = 6×2 → 3×6×2=18×2=36, or 12=4×3 → 3×4×3=12×3=36
      correctAnswer: '36',
      explanation:
        'Jy kan 12 op verskillende maniere in faktore breek — almal gee dieselfde antwoord:\n\n' +
        '• 12 = 6 × 2: dus 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36\n' +
        '• 12 = 4 × 3: dus 3 × 12 = 3 × 4 × 3 = 12 × 3 = 36\n\n' +
        'Antwoord: 36',
      answer: '36',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Gebruik faktore om elke deel te bereken. Skryf slegs die finale getal.\n\n' +
        'a) 5 × 16\n' +
        'b) 4 × 18',
      answer: 'a) 80  b) 72',
      parts: [
        {
          label: 'a) 5 × 16',
          // 16 = 8 × 2: 5 × 8 × 2 = 40 × 2 = 80
          correctAnswer: '80',
          explanation:
            'Breek 16 in faktore: 16 = 8 × 2\n' +
            '5 × 16 = 5 × 8 × 2\n' +
            '5 × 8 = 40\n' +
            '40 × 2 = 80',
        },
        {
          label: 'b) 4 × 18',
          // 18 = 9 × 2: 4 × 9 × 2 = 36 × 2 = 72
          correctAnswer: '72',
          explanation:
            'Breek 18 in faktore: 18 = 9 × 2\n' +
            '4 × 18 = 4 × 9 × 2\n' +
            '4 × 9 = 36\n' +
            '36 × 2 = 72',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Sipho sê 6 × 24 = 134.\n\n' +
        'Gebruik faktore om te kontroleer of hy korrek is. Wys al jou werk.',
      explanation:
        'Stap 1: Breek 24 in faktore: 24 = 6 × 4\n\n' +
        'Stap 2: Vervang 24 met sy faktore:\n' +
        '6 × 24 = 6 × 6 × 4\n' +
        '6 × 6 = 36\n' +
        '36 × 4 = 144\n\n' +
        'Sipho is VERKEERD. Die korrekte antwoord is 144, nie 134 nie.\n' +
        '(Hy was 10 uit — hy het dalk ʼn fout gemaak in sy kolomvermenigvuldiging.)',
      answer: 'Sipho is verkeerd. Die korrekte antwoord is 144 (nie 134 nie).',
    },

    // ── AFDELING 5 — Skat en Oplos van Vermenigvuldigingsprobleme ────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skat die antwoord op 29 × 3 deur eers af te rond na die naaste 10.\n\n' +
        'a) Wat is jou skatting? Skryf slegs die getal.\n' +
        'b) Wat is die presiese antwoord? Skryf slegs die getal.',
      answer: 'a) 90  b) 87',
      parts: [
        {
          label: 'a) Skatting',
          // Round 29 → 30, then 30 × 3 = 90
          correctAnswer: '90',
          explanation:
            'Rond 29 af na die naaste 10: 29 rond op na 30.\n' +
            'Skatting: 30 × 3 = 90.',
        },
        {
          label: 'b) Presiese antwoord',
          // 29 × 3: units 9×3=27 write 7 carry 2, tens 2×3=6+2=8 → 87
          correctAnswer: '87',
          explanation:
            '29 × 3 met die kolommetode:\n' +
            '• Eenhede: 9 × 3 = 27. Skryf 7, skuif 2.\n' +
            '• Tiene: 2 × 3 = 6, plus geskuifde 2 = 8.\n\n' +
            'Presiese antwoord: 87 — naby aan die skatting van 90. ✓',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Skat eers en bereken dan presies: 48 × 6\n\n' +
        'a) Skat deur 48 af te rond na die naaste 10. Skryf slegs die getal.\n' +
        'b) Bereken die presiese antwoord met die kolommetode. Skryf slegs die getal.\n' +
        'c) Is jou presiese antwoord naby aan jou skatting? Tik ja of nee.',
      answer: 'a) 300  b) 288  c) ja',
      parts: [
        {
          label: 'a) Skatting',
          // Round 48 → 50, then 50 × 6 = 300
          correctAnswer: '300',
          explanation:
            'Rond 48 af na die naaste 10: 48 rond op na 50.\n' +
            'Skatting: 50 × 6 = 300.',
        },
        {
          label: 'b) Presiese antwoord',
          // 48 × 6: units 8×6=48 write 8 carry 4, tens 4×6=24+4=28 → 288
          correctAnswer: '288',
          explanation:
            '48 × 6 met die kolommetode:\n' +
            '• Eenhede: 8 × 6 = 48. Skryf 8, skuif 4.\n' +
            '• Tiene: 4 × 6 = 24, plus geskuifde 4 = 28. Skryf 8 in tiene, 2 in honderde.\n\n' +
            'Presiese antwoord: 288.',
        },
        {
          label: 'c) Naby aan die skatting?',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'jadit', 'ja288isnaby300'],
          explanation:
            '288 is net 12 weg van die skatting van 300 — dit is baie naby.\n' +
            'Die antwoord is redelik. ✓',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Fabriek pak 75 bottels in elke kratjie. Hulle het 8 kratjies.\n\n' +
        'a) Skat die totale aantal bottels deur 75 af te rond na die naaste 10. Skryf slegs die getal.\n' +
        'b) Bereken die presiese totale aantal bottels. Skryf slegs die getal.\n' +
        'c) Die fabriek het 650 bottels nodig vir ʼn bestelling. Tik ja of nee — het hulle genoeg?',
      answer: 'a) 640  b) 600  c) nee',
      parts: [
        {
          label: 'a) Skatting',
          // Round 75 → 80, then 80 × 8 = 640
          correctAnswer: '640',
          explanation:
            'Rond 75 af na die naaste 10: 75 rond op na 80.\n' +
            'Skatting: 80 × 8 = 640.',
        },
        {
          label: 'b) Presiese antwoord',
          // 75 × 8: units 5×8=40 write 0 carry 4, tens 7×8=56+4=60 → 600
          correctAnswer: '600',
          explanation:
            '75 × 8 met die kolommetode:\n' +
            '• Eenhede: 5 × 8 = 40. Skryf 0, skuif 4.\n' +
            '• Tiene: 7 × 8 = 56, plus geskuifde 4 = 60. Skryf 0 in tiene, 6 in honderde.\n\n' +
            'Presiese antwoord: 600.',
        },
        {
          label: 'c) Het hulle genoeg?',
          correctAnswer: 'nee',
          correctAnswers: ['nee', 'neehulleniethet', 'neehullehetniegenoegnie'],
          explanation:
            '600 < 650 — die fabriek het NIE genoeg bottels NIE.\n' +
            'Hulle kort 50 bottels (650 − 600 = 50).',
        },
      ],
    },

  ],
}
