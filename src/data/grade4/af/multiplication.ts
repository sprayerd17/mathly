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
      openQuestions: [],
      videoPlaceholder: 'Kort video wat wys hoe om die 5-tafel te memoriseer deur spronggewys te tel',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VERMENIGVULDIG ʼN 2-SYFERGETAL MET ʼN 1-SYFERGETAL
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'multiplying-2digit-by-1digit',
      title: 'Vermenigvuldig ʼn 2-Syfergetal met ʼn 1-Syfergetal',
      icon: '🔢',
      explanation: `<p style="margin-bottom:16px;">Wanneer ons ʼn 2-syfergetal met ʼn 1-syfergetal vermenigvuldig, gebruik ons die <strong>kolommetode</strong>. Skryf die getalle regs belyn, een bo die ander. Vermenigvuldig dan elke kolom afsonderlik — begin altyd by die <span style="color:#1e40af;font-weight:600;">ene</span>-kolom aan die regterkant, en beweeg dan na die <span style="color:#16a34a;font-weight:600;">tiene</span>-kolom aan die linkerkant.</p>

<p style="margin-bottom:16px;"><strong>Die goue reël:</strong> as jou antwoord in enige kolom <strong>10 of meer</strong> is, skryf die ene-syfer van daardie antwoord neer en <em>skuif</em> die tiene-syfer oor na die volgende kolom. Die geskuifde syfer word in <span style="color:#ea580c;font-weight:600;">oranje</span> getoon.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Kleurgids:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Ene — blou</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Tiene — groen</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Skuif — oranje</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 34 × 2',
          answer: '68',
          steps: [
            `Skryf die getalle in kolomformaat, syfers regs belyn. Ons begin altyd eerste met die <span style="color:#1e40af;font-weight:600;">ene</span>-kolom.
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
            `Vermenigvuldig die <span style="color:#1e40af;font-weight:700;">ene</span>: <span style="color:#1e40af;font-weight:700;">4 × 2 = 8</span>. Skryf <span style="color:#1e40af;font-weight:700;">8</span> in die ene-kolom. Daar is niks om te skuif nie omdat 8 minder as 10 is.`,
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
            `Skryf <strong>47 × 3</strong> in kolomformaat. Begin met die <span style="color:#1e40af;font-weight:600;">ene</span>-kolom.`,
            `Vermenigvuldig die <span style="color:#1e40af;font-weight:700;">ene</span>: <span style="color:#1e40af;font-weight:700;">7 × 3 = 21</span>. 21 is 10 of meer, skryf dus die <span style="color:#1e40af;font-weight:700;">1</span> in die ene-kolom en <span style="color:#ea580c;font-weight:700;">skuif die 2</span> oor na die tiene-kolom.`,
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
            `Vermenigvuldig die <span style="color:#1e40af;font-weight:700;">ene</span>: <span style="color:#1e40af;font-weight:700;">6 × 4 = 24</span>. 24 is 10 of meer, skryf dus <span style="color:#1e40af;font-weight:700;">4</span> in die ene-kolom en <span style="color:#ea580c;font-weight:700;">skuif die 2</span> oor na die tiene-kolom.`,
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
      openQuestions: [],
      videoPlaceholder: 'Kort video wat kolomvermenigvuldiging van ʼn 2-syfergetal met ʼn 1-syfergetal met skuif wys',
      diagramPlaceholder: 'Kolomvermenigvuldiging-uitleg wat 47 × 3 wys met die geskuifde syfer in oranje getoon',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><text x="90" y="20" font-weight="700" font-size="15" text-anchor="middle" fill="#ea580c">2</text><text x="90" y="55" font-weight="700" font-size="26" text-anchor="middle" fill="#16a34a">4</text><text x="140" y="55" font-weight="700" font-size="26" text-anchor="middle" fill="#2563eb">7</text><text x="55" y="85" font-weight="700" font-size="22" text-anchor="middle" fill="#0f1f3d">×</text><text x="140" y="85" font-weight="700" font-size="26" text-anchor="middle" fill="#0f1f3d">3</text><line x1="35" y1="95" x2="170" y2="95" stroke="#0f1f3d" stroke-width="2.5"/><text x="40" y="130" font-weight="700" font-size="26" text-anchor="middle" fill="#0f1f3d">1</text><text x="90" y="130" font-weight="700" font-size="26" text-anchor="middle" fill="#16a34a">4</text><text x="140" y="130" font-weight="700" font-size="26" text-anchor="middle" fill="#2563eb">1</text><text x="105" y="155" font-weight="700" font-size="14" text-anchor="middle" fill="#0f1f3d">47 × 3 = 141</text></svg>',
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
<span style="font-size:13px;color:#6b7280;">• <span style="color:#1e40af;font-weight:600;">Ene:</span> 8 × 4 = 32 — skryf <span style="color:#1e40af;font-weight:700;">2</span>, skuif <span style="color:#ea580c;font-weight:700;">3</span></span><br>
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
<span style="font-size:13px;color:#6b7280;">• <span style="color:#1e40af;font-weight:600;">Ene:</span> 4 × 9 = 36 — skryf <span style="color:#1e40af;font-weight:700;">6</span>, skuif <span style="color:#ea580c;font-weight:700;">3</span></span><br>
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
      explanation: `<p style="margin-bottom:16px;">Om twee 2-syfergetalle te vermenigvuldig, kan ons die <strong>roostermetode</strong> gebruik (ook genoem gedeeltelike produkte). Breek <em>albei</em> getalle in tiene en ene, vermenigvuldig elke deel van die eerste getal met elke deel van die tweede getal, en tel dan al vier antwoorde bymekaar.</p>

<p style="margin-bottom:16px;">Byvoorbeeld, <span style="color:#1e40af;font-weight:700;">23</span> × <span style="color:#16a34a;font-weight:700;">14</span> kan opgebreek word as (<span style="color:#1e40af;font-weight:700;">20</span> + <span style="color:#dc2626;font-weight:700;">3</span>) × (<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#ea580c;font-weight:700;">4</span>). Vermenigvuldig elke deel van die eerste hakie met elke deel van die tweede hakie, en tel dan die vier gedeeltelike produkte bymekaar: <span style="color:#1e40af;font-weight:700;">20</span>×<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#1e40af;font-weight:700;">20</span>×<span style="color:#ea580c;font-weight:700;">4</span> + <span style="color:#dc2626;font-weight:700;">3</span>×<span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#dc2626;font-weight:700;">3</span>×<span style="color:#ea580c;font-weight:700;">4</span> = 200 + 80 + 30 + 12 = <strong>322</strong>.</p>

<div style="background:white;border:1px solid #dbeafe;border-radius:10px;padding:14px 16px;">
  <p style="font-size:13px;font-weight:700;color:#0f1f3d;margin-bottom:10px;">Kleurgids:</p>
  <div style="display:flex;flex-wrap:wrap;gap:10px;font-size:13px;">
    <span style="background:#eff6ff;color:#1e40af;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #bfdbfe;">Eerste getal se tiene — blou</span>
    <span style="background:#fef2f2;color:#dc2626;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fca5a5;">Eerste getal se ene — rooi</span>
    <span style="background:#f0fdf4;color:#16a34a;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #86efac;">Tweede getal se tiene — groen</span>
    <span style="background:#fff7ed;color:#ea580c;font-weight:700;padding:3px 12px;border-radius:20px;border:1px solid #fdba74;">Tweede getal se ene — oranje</span>
  </div>
</div>`,

      workedExamples: [
        {
          question: 'Bereken 23 × 14 met die roostermetode',
          answer: '322',
          steps: [
            `Breek albei getalle in tiene en ene: <span style="color:#1e40af;font-weight:700;">23</span> = <span style="color:#1e40af;font-weight:700;">20</span> + <span style="color:#dc2626;font-weight:700;">3</span>, en <span style="color:#16a34a;font-weight:700;">14</span> = <span style="color:#16a34a;font-weight:700;">10</span> + <span style="color:#ea580c;font-weight:700;">4</span>.`,
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
            `Breek albei getalle in tiene en ene: <span style="color:#1e40af;font-weight:700;">34</span> = <span style="color:#1e40af;font-weight:700;">30</span> + <span style="color:#dc2626;font-weight:700;">4</span>, en <span style="color:#16a34a;font-weight:700;">21</span> = <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">1</span>.`,
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
            `Dit is ʼn vermenigvuldigingsprobleem: <strong>15 × 24</strong>. Breek albei getalle in tiene en ene: <span style="color:#1e40af;font-weight:700;">15</span> = <span style="color:#1e40af;font-weight:700;">10</span> + <span style="color:#dc2626;font-weight:700;">5</span>, en <span style="color:#16a34a;font-weight:700;">24</span> = <span style="color:#16a34a;font-weight:700;">20</span> + <span style="color:#ea580c;font-weight:700;">4</span>.`,
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
      openQuestions: [],
      videoPlaceholder: 'Kort video wat wys hoe om die roostermetode te gebruik om ʼn 2-syfergetal met ʼn 2-syfergetal te vermenigvuldig',
      diagramPlaceholder: 'Roostermetode-diagram wat 23 × 14 in vier gedeeltelike produkte verdeel wat bymekaar 322 gee',
      diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="65" y="15" width="55" height="35" fill="#dcfce7"/><rect x="120" y="15" width="55" height="35" fill="#ffedd5"/><rect x="10" y="50" width="55" height="35" fill="#dbeafe"/><rect x="10" y="85" width="55" height="35" fill="#fee2e2"/><rect x="10" y="15" width="165" height="105" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="65" y1="15" x2="65" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="120" y1="15" x2="120" y2="120" stroke="#0f1f3d" stroke-width="1.5"/><line x1="10" y1="50" x2="175" y2="50" stroke="#0f1f3d" stroke-width="1.5"/><line x1="10" y1="85" x2="175" y2="85" stroke="#0f1f3d" stroke-width="1.5"/><text x="92" y="37" font-weight="700" font-size="16" text-anchor="middle" fill="#16a34a">10</text><text x="147" y="37" font-weight="700" font-size="16" text-anchor="middle" fill="#ea580c">4</text><text x="37" y="72" font-weight="700" font-size="16" text-anchor="middle" fill="#2563eb">20</text><text x="37" y="107" font-weight="700" font-size="16" text-anchor="middle" fill="#dc2626">3</text><text x="92" y="72" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">200</text><text x="147" y="72" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">80</text><text x="92" y="107" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">30</text><text x="147" y="107" font-weight="700" font-size="15" text-anchor="middle" fill="#0f1f3d">12</text><text x="92" y="145" font-weight="700" font-size="13" text-anchor="middle" fill="#16a34a">200+80+30+12=322</text></svg>',
    },
  ],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (23 Vrae) — 6 vaardigheidsblokke — almal veelvuldige keuse
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Tafels Vlotheid (0-3, Easy)
        { difficulty: 'Easy', question: 'Bereken: 4 × 6', checkMode: 'auto', options: ['24', '20', '28', '10'], correctIndex: 0, explanation: '4 × 6 = 24. (20 kom van 4 × 5, 28 kom van 4 × 7 — albei gebruik die verkeerde tafelinskrywing. 10 kom van 4 + 6 optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Bereken: 7 × 8', checkMode: 'auto', options: ['48', '56', '64', '49'], correctIndex: 1, explanation: '7 × 8 = 56. (48 kom van 6 × 8, 64 kom van 8 × 8, 49 kom van 7 × 7 — elkeen ruil een faktor om vir ʼn naburige getal.)' },
        { difficulty: 'Easy', question: 'Bereken: 9 × 9', checkMode: 'auto', options: ['72', '90', '81', '64'], correctIndex: 2, explanation: '9 × 9 = 81. (72 kom van 8 × 9, 90 kom van 9 × 10, 64 kom van 8 × 8 — elkeen is een stap weg in die tafel.)' },
        { difficulty: 'Easy', question: 'Vul die ontbrekende getal in: 9 × ___ = 63', checkMode: 'auto', options: ['8', '9', '6', '7'], correctIndex: 3, explanation: 'Tel in 9e totdat jy 63 bereik: 9, 18, 27, 36, 45, 54, 63 — dit is 7 stappe, dus 9 × 7 = 63. (8 en 6 is miskuns van die stappe, 9 verwar die ontbrekende getal met die gegewe getal.)' },

        // Blok 2 — Kolomvermenigvuldiging (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 34 × 2', checkMode: 'auto', options: ['68', '38', '76', '36'], correctIndex: 0, explanation: 'Ene: 4 × 2 = 8. Tiene: 3 × 2 = 6. Antwoord: 68. (38 vermenigvuldig net die ene-syfer en los die tiene-syfer onveranderd. 76 vermenigvuldig net die tiene-syfer en los die ene-syfer onveranderd. 36 kom van 34 + 2 optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 47 × 3', checkMode: 'auto', options: ['121', '141', '131', '147'], correctIndex: 1, explanation: 'Ene: 7 × 3 = 21. Skryf 1, skuif 2. Tiene: 4 × 3 = 12, plus geskuifde 2 = 14. Antwoord: 141. (121 vergeet om die geskuifde 2 by die tiene te tel. 131 en 147 kom van klein rekenfoute in die tiene-berekening.)' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 64 × 9', checkMode: 'auto', options: ['546', '414', '576', '566'], correctIndex: 2, explanation: 'Ene: 4 × 9 = 36. Skryf 6, skuif 3. Tiene: 6 × 9 = 54, plus geskuifde 3 = 57. Antwoord: 576. (546 vergeet om die geskuifde 3 by te tel. 414 kom van 64 verkeerd lees as 46. 566 kom van ʼn optelfout by die skuif.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken 53 × 4 met die kolommetode. Hulle werk wys: ene-kolom 3 × 4 = 12, hulle het 2 geskryf en 1 geskuif — maar die tiene-ry is leeg. Wat is die korrekte finale antwoord?', checkMode: 'auto', options: ['202', '222', '232', '212'], correctIndex: 3, explanation: 'Tiene: 5 × 4 = 20, plus geskuifde 1 = 21. Finale antwoord: 212. (202 vergeet om die geskuifde 1 by die tiene te tel. 222 skuif per ongeluk 2 in plaas van 1. 232 kom van 53 verkeerd lees as 58.)' },

        // Blok 3 — Skatting en Redelikheid (8-10, Medium)
        { difficulty: 'Medium', question: 'Skat 48 × 6 deur 48 af te rond na die naaste 10, bereken dan die presiese antwoord. Wat is die presiese antwoord?', checkMode: 'auto', options: ['288', '248', '300', '298'], correctIndex: 0, explanation: '48 rond op na 50, dus die skatting is 50 × 6 = 300. Presies: ene 8 × 6 = 48, skryf 8 skuif 4; tiene 4 × 6 = 24, plus geskuifde 4 = 28, wat 288 gee. (248 vergeet om die geskuifde 4 by te tel. 300 verwar die skatting met die presiese antwoord. 298 kom van ʼn optelfout in die tiene.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder skat 62 × 5 deur 62 na 60 af te rond, en kry ʼn skatting van 300. Hulle presiese antwoord kom uit op 310. Watter stelling is korrek?', checkMode: 'auto', options: ['310 is nie redelik nie — dit moet presies gelyk wees aan die skatting van 300, dus het die leerder ʼn fout gemaak.', 'Ja, 310 is redelik — dit is naby aan die skatting van 300, en is inderdaad die presiese korrekte antwoord op 62 × 5.', 'Nee, 310 kan nie korrek wees nie, want ʼn presiese antwoord moet altyd gelyk wees aan sy skatting.', 'Nee, aangesien 62 afrond na 60, moet die presiese antwoord altyd kleiner as die skatting wees.'], correctIndex: 1, explanation: '62 × 5 = 310 presies, en 310 is naby aan die skatting van 300, dus is dit redelik. ʼn Skatting hoef net naby die presiese antwoord te wees, nie identies nie — die ander opsies is op hierdie wanopvatting gebou.' },
        { difficulty: 'Medium', question: 'Sonder om enige van hulle heeltemal uit te werk, watter een is groter: 6 × 14 of 9 × 9?', checkMode: 'auto', options: ['9 × 9 is groter', 'Hulle is gelyk', '6 × 14 is groter', 'Kan nie bepaal word sonder presiese berekening nie'], correctIndex: 2, explanation: '6 × 14 is naby aan 6 × 15 = 90, terwyl 9 × 9 = 81. Dus is 6 × 14 (wat gelyk is aan 84) groter as 9 × 9 (81) — afronding laat jou hulle vergelyk sonder ʼn volledige berekening.' },

        // Blok 4 — Faktore en Buigsame Strategieë (11-13, Medium)
        { difficulty: 'Easy', question: 'Breek 12 in twee faktore en gebruik hulle om te bereken: 3 × 12', checkMode: 'auto', options: ['15', '18', '24', '36'], correctIndex: 3, explanation: '12 = 6 × 2, dus 3 × 12 = 3 × 6 × 2 = 18 × 2 = 36. (15 kom van 3 + 12 optel in plaas van vermenigvuldig. 18 stop na vermenigvuldiging met net een faktor, 6, en vergeet die 2. 24 kom van die verkeerde faktorpaar vir 12.)' },
        { difficulty: 'Medium', question: 'Breek 15 in twee faktore en gebruik hulle om te bereken: 8 × 15', checkMode: 'auto', options: ['120', '40', '23', '64'], correctIndex: 0, explanation: '15 = 5 × 3, dus 8 × 15 = 8 × 5 × 3 = 40 × 3 = 120. (40 stop na vermenigvuldiging met net een faktor, 5, en vergeet die 3. 23 kom van 8 + 15 optel in plaas van vermenigvuldig. 64 kom van 8 × 15 verkeerd lees as 8 × 8.)' },
        { difficulty: 'Medium', question: 'Vir die berekening 6 × 18 breek ʼn leerder 18 in 6 × 9 × 2 in plaas van die kolommetode te gebruik. Watter stelling oor hierdie strategie is korrek?', checkMode: 'auto', options: ['Hierdie strategie is ongeldig omdat jy nie ʼn getal in faktore kan breek wanneer jy vermenigvuldig nie.', 'Hierdie strategie werk goed — 6 × 9 = 54 is ʼn bekende feit, en om 54 na 108 te verdubbel is vinnig en maklik.', 'Hierdie strategie gee ʼn ander, groter antwoord as wat die kolommetode sou gee.', 'Hierdie strategie werk net vir ewe getalle wat vermenigvuldig word, nie vir 18 nie.'], correctIndex: 1, explanation: 'Om 18 in 9 × 2 te breek is ʼn geldige en doeltreffende strategie hier: 6 × 9 = 54 is ʼn bekende feit, en verdubbel na 108 vermy heeltemal enige skuif. Dit gee presies dieselfde antwoord as die kolommetode.' },

        // Blok 5 — Woordprobleme in Verskeie Kontekste (14-16, Medium)
        { difficulty: 'Medium', question: 'ʼn Netbalspan het 12 spelers. As 7 spanne aan ʼn toernooi deelneem, hoeveel spelers neem altesaam deel?', checkMode: 'auto', options: ['19 spelers', '72 spelers', '84 spelers', '96 spelers'], correctIndex: 2, explanation: '7 × 12 = 84 spelers. (19 kom van 7 + 12 optel in plaas van vermenigvuldig. 72 en 96 kom van die verkeerde aantal spanne, 6 of 8, in plaas van 7.)' },
        { difficulty: 'Medium', question: 'ʼn Minibustaxi kan 15 passasiers vervoer. Hoeveel meer passasiers kan 6 taxi\'s vervoer as 4 taxi\'s?', checkMode: 'auto', options: ['90 meer passasiers', '60 meer passasiers', '45 meer passasiers', '30 meer passasiers'], correctIndex: 3, explanation: '6 × 15 = 90 en 4 × 15 = 60. 90 − 60 = 30 meer passasiers. (90 en 60 gee die totale vir een groep taxi\'s, maar vergeet om af te trek. 45 kom van die verskil verkeerd tel as 3 ekstra taxi\'s in plaas van 2.)' },
        { difficulty: 'Medium', question: 'Klas A bestel 6 bokse van 15 potlode elk vir die jaar. Klas B bestel 5 bokse van 18 potlode elk. Watter klas het meer potlode bestel, en met hoeveel?', checkMode: 'auto', options: ['Albei klasse het dieselfde aantal potlode bestel — 90 elk.', 'Klas A het meer bestel, met 6 potlode.', 'Klas B het meer bestel, met 12 potlode.', 'Klas A het meer bestel, met 15 potlode.'], correctIndex: 0, explanation: 'Klas A: 6 × 15 = 90 potlode. Klas B: 5 × 18 = 90 potlode. Albei klasse het presies dieselfde aantal bestel — 90 elk. Die ander opsies kom van rekenfoute in een van die twee vermenigvuldigings.' },

        // Blok 6 — Foutopsporing en Regverdig-jou-Redenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Sipho sê 6 × 23 = 148. Watter stelling is korrek?', checkMode: 'auto', options: ['Sipho is korrek — 6 × 23 = 148.', 'Sipho is verkeerd — die korrekte antwoord is 138.', 'Sipho is verkeerd — die korrekte antwoord is 158.', 'Sipho is verkeerd — die korrekte antwoord is 128.'], correctIndex: 1, explanation: 'Ene: 3 × 6 = 18, skryf 8 skuif 1. Tiene: 2 × 6 = 12, plus geskuifde 1 = 13, wat 138 gee. Sipho is verkeerd — 148 is nie die antwoord op 6 × 23 nie.' },
        { difficulty: 'Hard', question: 'ʼn Boer het 8 rye van 14 kool. ʼn Haelstorm vernietig 2 volle rye. Hoeveel kool bly regop staan?', checkMode: 'auto', options: ['112 kool', '28 kool', '98 kool', '84 kool'], correctIndex: 3, explanation: 'Totale kool = 8 × 14 = 112. Kool vernietig = 2 × 14 = 28. Kool oor = 112 − 28 = 84. (112 vergeet om die vernietigde rye af te trek. 28 gee net die vernietigde hoeveelheid. 98 trek net een ry van 14 af in plaas van twee.)' },
        { difficulty: 'Hard', question: 'Watter stelling verduidelik korrek waarom 6 × 8 dieselfde antwoord as 8 × 6 gee?', checkMode: 'auto', options: ['Dit is ʼn toeval wat net vir hierdie twee spesifieke getalle werk.', '6 × 8 en 8 × 6 is eintlik verskillende berekeninge wat toevallig albei 48 is.', 'Vermenigvuldiging gee net dieselfde antwoord wanneer albei getalle ewe is.', 'Vermenigvuldiging kan in enige volgorde gedoen word (die kommutatiewe eienskap) — 6 groepe van 8 en 8 groepe van 6 bevat dieselfde totale aantal items, net anders gerangskik.'], correctIndex: 3, explanation: 'Dit is die kommutatiewe eienskap van vermenigvuldiging — dit geld altyd, vir enige twee getalle, nie net ewe getalle of ʼn spesiale paar nie. 6 groepe van 8 en 8 groepe van 6 bevat albei 48 items altesaam.' },

        // Blok 7 — Vermenigvuldig ʼn 2-Syfergetal met ʼn 2-Syfergetal (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die roostermetode: 12 × 13', checkMode: 'auto', options: ['156', '130', '126', '166'], correctIndex: 0, explanation: '12 = 10 + 2, 13 = 10 + 3. Gedeeltelike produkte: 10×10=100, 10×3=30, 2×10=20, 2×3=6. Som: 100 + 30 + 20 + 6 = 156. (130 tel net twee van die vier gedeeltelike produkte op. 126 vergeet die 30-term. 166 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'Bereken met die roostermetode: 26 × 34', checkMode: 'auto', options: ['680', '884', '804', '908'], correctIndex: 1, explanation: '26 = 20 + 6, 34 = 30 + 4. Gedeeltelike produkte: 20×30=600, 20×4=80, 6×30=180, 6×4=24. Som: 600 + 80 + 180 + 24 = 884. (680 tel net twee van die vier gedeeltelike produkte op. 804 vergeet die 80-term. 908 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'ʼn Stadion het 18 rye sitplekke met 22 sitplekke in elke ry. Hoeveel sitplekke is daar altesaam?', checkMode: 'auto', options: ['220 sitplekke', '380 sitplekke', '396 sitplekke', '412 sitplekke'], correctIndex: 2, explanation: '18 = 10 + 8, 22 = 20 + 2. Gedeeltelike produkte: 10×20=200, 10×2=20, 8×20=160, 8×2=16. Som: 200 + 20 + 160 + 16 = 396 sitplekke. (220 tel net twee van die vier gedeeltelike produkte op. 380 vergeet die 16-term. 412 kom van ʼn optelfout.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het tafels, kolommetode, skatting, faktore, 2-syfervermenigvuldiging, woordprobleme en redenasie bemeester.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd oor die meeste van hierdie vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur vir die blokke wat lastig was en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (23 Vrae) — 6 vaardigheidsblokke — almal veelvuldige keuse
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Tafels Vlotheid (0-3, Easy)
        { difficulty: 'Easy', question: 'Bereken: 5 × 9', checkMode: 'auto', options: ['45', '40', '50', '14'], correctIndex: 0, explanation: '5 × 9 = 45. (40 kom van 5 × 8, 50 kom van 5 × 10 — albei gebruik die verkeerde tafelinskrywing. 14 kom van 5 + 9 optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Bereken: 6 × 7', checkMode: 'auto', options: ['36', '42', '49', '13'], correctIndex: 1, explanation: '6 × 7 = 42. (36 kom van 6 × 6, 49 kom van 7 × 7 — elkeen herhaal een faktor in plaas van die twee gegewe getalle te gebruik. 13 kom van 6 + 7 optel.)' },
        { difficulty: 'Easy', question: 'Bereken: 12 × 8', checkMode: 'auto', options: ['80', '84', '96', '88'], correctIndex: 2, explanation: '12 × 8 = 96. Dink: 10 × 8 + 2 × 8 = 80 + 16 = 96. (80 stop na net die tiene-deel. 84 kom van 12 × 7. 88 kom van 12 verkeerd lees as 11.)' },
        { difficulty: 'Easy', question: 'Vul die ontbrekende getal in: ___ × 7 = 56', checkMode: 'auto', options: ['7', '9', '6', '8'], correctIndex: 3, explanation: '8 × 7 = 56, dus is die ontbrekende getal 8. (7 verwar die ontbrekende getal met die gegewe getal. 9 en 6 is naburige getalle in die 7-tafel.)' },

        // Blok 2 — Kolomvermenigvuldiging (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 42 × 2', checkMode: 'auto', options: ['84', '44', '48', '168'], correctIndex: 0, explanation: 'Ene: 2 × 2 = 4. Tiene: 4 × 2 = 8. Antwoord: 84. (44 vergeet om die tiene-syfer te vermenigvuldig en los dit onveranderd. 48 keer die syfers van die korrekte antwoord om. 168 kom van vermenigvuldig met ʼn ekstra 2 iewers.)' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 56 × 4', checkMode: 'auto', options: ['204', '224', '216', '234'], correctIndex: 1, explanation: 'Ene: 6 × 4 = 24. Skryf 4, skuif 2. Tiene: 5 × 4 = 20, plus geskuifde 2 = 22. Antwoord: 224. (204 vergeet om die geskuifde 2 by te tel. 216 kom van 56 verkeerd lees as 54. 234 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 32 × 8', checkMode: 'auto', options: ['246', '184', '256', '266'], correctIndex: 2, explanation: 'Ene: 2 × 8 = 16. Skryf 6, skuif 1. Tiene: 3 × 8 = 24, plus geskuifde 1 = 25. Antwoord: 256. (246 vergeet om die geskuifde 1 by te tel. 184 kom van 32 verkeerd lees as 23. 266 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken 76 × 3 met die kolommetode. Hulle werk wys: ene-kolom 6 × 3 = 18, hulle het 8 geskryf en 1 geskuif — maar die tiene-ry is leeg. Wat is die korrekte finale antwoord?', checkMode: 'auto', options: ['218', '238', '234', '228'], correctIndex: 3, explanation: 'Tiene: 7 × 3 = 21, plus geskuifde 1 = 22. Finale antwoord: 228. (218 vergeet om die geskuifde 1 by te tel. 238 skuif per ongeluk 2 in plaas van 1. 234 kom van 76 verkeerd lees as 78.)' },

        // Blok 3 — Skatting en Redelikheid (8-10, Medium)
        { difficulty: 'Medium', question: 'Skat 75 × 8 deur 75 af te rond na die naaste 10, bereken dan die presiese antwoord. Wat is die presiese antwoord?', checkMode: 'auto', options: ['600', '640', '560', '610'], correctIndex: 0, explanation: '75 rond op na 80, dus die skatting is 80 × 8 = 640. Presies: ene 5 × 8 = 40, skryf 0 skuif 4; tiene 7 × 8 = 56, plus geskuifde 4 = 60, wat 600 gee. (640 verwar die skatting met die presiese antwoord. 560 vergeet om die geskuifde 4 by te tel. 610 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'Twee leerders skat 39 × 7. Bongani rond 39 af na 40 en kry 280. Zanele rond 39 af na 35 (nie die naaste 10 nie) en kry 245. Watter stelling is korrek?', checkMode: 'auto', options: ['Zanele se skatting is meer akkuraat aangesien 245 nader aan die presiese antwoord is.', 'Bongani se skatting is korrek — 39 rond af na die naaste 10, wat 40 is, nie 35 nie.', 'Albei skattings is ewe geldig aangesien skatting toelaat dat jy na enige naby getal afrond.', 'Nie een is korrek nie — 39 behoort af te rond na 30.'], correctIndex: 1, explanation: '39 is nader aan 40 as aan 30, dus rond dit af na 40 — dit is die naaste 10. Zanele het afgerond na 35, wat glad nie ʼn veelvoud van 10 is nie, dus is haar metode ongeldig al is haar finale getal toevallig nader aan die ware produk.' },
        { difficulty: 'Medium', question: 'Sonder om enige van hulle heeltemal uit te werk, watter een is groter: 7 × 13 of 8 × 11?', checkMode: 'auto', options: ['8 × 11 is groter', 'Hulle is gelyk', '7 × 13 is groter', 'Kan nie bepaal word sonder presiese berekening nie'], correctIndex: 2, explanation: '7 × 13 = 91 en 8 × 11 = 88. Deur die eerste faktore te vergelyk (7 is naby aan 8) en die tweede faktore (13 is heelwat groter as 11), sien jy dat 7 × 13 die groter produk moet wees.' },

        // Blok 4 — Faktore en Buigsame Strategieë (11-13, Medium)
        { difficulty: 'Easy', question: 'Breek 16 in twee faktore en gebruik hulle om te bereken: 5 × 16', checkMode: 'auto', options: ['21', '40', '60', '80'], correctIndex: 3, explanation: '16 = 8 × 2, dus 5 × 16 = 5 × 8 × 2 = 40 × 2 = 80. (21 kom van 5 + 16 optel in plaas van vermenigvuldig. 40 stop na vermenigvuldiging met net een faktor, 8, en vergeet die 2. 60 kom van die verkeerde faktorpaar vir 16.)' },
        { difficulty: 'Medium', question: 'Breek 14 in twee faktore en gebruik hulle om te bereken: 9 × 14', checkMode: 'auto', options: ['126', '63', '23', '144'], correctIndex: 0, explanation: '14 = 7 × 2, dus 9 × 14 = 9 × 7 × 2 = 63 × 2 = 126. (63 stop na vermenigvuldiging met net een faktor, 7, en vergeet die 2. 23 kom van 9 + 14 optel. 144 kom van 7 verkeerd lees as 8.)' },
        { difficulty: 'Medium', question: 'Vir die berekening 4 × 25 breek ʼn leerder 25 in 4 × 5 × 5 in plaas van die kolommetode te gebruik. Watter stelling oor hierdie strategie is korrek?', checkMode: 'auto', options: ['Die kolommetode is altyd vinniger vir enige 2-syfergetal.', 'Om 25 in 5 × 5 te breek is hier baie vinniger — 4 × 5 = 20 is ʼn maklike bekende feit, en dan × 5 = 100.', 'Geeneen van die metodes werk vir getalle wat op 5 eindig nie.', 'Die faktormetode gee ʼn ander, verkeerde antwoord vir hierdie berekening.'], correctIndex: 1, explanation: '4 × 5 = 20 is ʼn bekende feit, en 20 × 5 = 100 is maklik om uit te werk — hierdie strategie pas 25 besonder goed. Dit gee presies dieselfde antwoord as die kolommetode, net met minder skryfwerk.' },

        // Blok 5 — Woordprobleme in Verskeie Kontekste (14-16, Medium)
        { difficulty: 'Medium', question: 'ʼn Spazawinkel hou koeldrank in kratte van 24 blikkies. As die eienaar 5 kratte het, hoeveel blikkies koeldrank het die winkel altesaam?', checkMode: 'auto', options: ['29 blikkies', '96 blikkies', '120 blikkies', '144 blikkies'], correctIndex: 2, explanation: '5 × 24 = 120 blikkies. (29 kom van 5 + 24 optel in plaas van vermenigvuldig. 96 en 144 kom van die verkeerde aantal kratte, 4 of 6, in plaas van 5.)' },
        { difficulty: 'Medium', question: 'ʼn Bokboer het 9 kampe met 13 bokke in elke kamp. Hoeveel minder bokke sou die boer hê as 3 van die kampe eerder leeg was?', checkMode: 'auto', options: ['117 minder bokke', '78 minder bokke', '26 minder bokke', '39 minder bokke'], correctIndex: 3, explanation: '9 × 13 = 117 bokke met alle kampe vol. As 3 kampe leeg was, verwyder dit 3 × 13 = 39 bokke. (117 gee die totaal in plaas van die hoeveelheid verwyder. 78 gee die oorblywende bokke in plaas van die minder-hoeveelheid. 26 tel die leë kampe verkeerd as 2 in plaas van 3.)' },
        { difficulty: 'Medium', question: 'ʼn Taxistaanplek het 7 minibusse wat elk 16 passasiers vervoer. ʼn Tweede staanplek het 8 minibusse wat elk 14 passasiers vervoer. Watter staanplek vervoer meer passasiers, en met hoeveel?', checkMode: 'auto', options: ['Albei staanplekke vervoer dieselfde aantal passasiers — 112 elk.', 'Die eerste staanplek vervoer meer, met 8.', 'Die tweede staanplek vervoer meer, met 8.', 'Die eerste staanplek vervoer meer, met 16.'], correctIndex: 0, explanation: 'Eerste staanplek: 7 × 16 = 112 passasiers. Tweede staanplek: 8 × 14 = 112 passasiers. Albei staanplekke vervoer presies dieselfde aantal — 112 elk. Die ander opsies kom van rekenfoute in een van die twee vermenigvuldigings.' },

        // Blok 6 — Foutopsporing en Regverdig-jou-Redenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Thabo sê 9 × 36 = 314. Watter stelling is korrek?', checkMode: 'auto', options: ['Thabo is korrek — 9 × 36 = 314.', 'Thabo is verkeerd — die korrekte antwoord is 324.', 'Thabo is verkeerd — die korrekte antwoord is 304.', 'Thabo is verkeerd — die korrekte antwoord is 334.'], correctIndex: 1, explanation: 'Ene: 6 × 9 = 54, skryf 4 skuif 5. Tiene: 3 × 9 = 27, plus geskuifde 5 = 32, wat 324 gee. Thabo is verkeerd — 314 is nie die antwoord op 9 × 36 nie.' },
        { difficulty: 'Hard', question: 'ʼn Skryfbehoeftewinkel koop 7 bokse penne, elk met 12 penne, teen R4 per pen. Wat is die totale koste?', checkMode: 'auto', options: ['R84', 'R340', 'R336', 'R288'], correctIndex: 2, explanation: '7 × 12 = 84 penne. 84 × 4 = R336. (R84 gee die aantal penne en vergeet om met die prys te vermenigvuldig. R340 kom van ʼn optelfout. R288 kom van die aantal penne verkeerd bereken as 72 in plaas van 84.)' },
        { difficulty: 'Hard', question: 'Watter stelling verduidelik korrek waarom dit help om te skat voordat jy bereken om jou antwoord te kontroleer?', checkMode: 'auto', options: ['Skatting vervang die behoefte om die presiese antwoord glad nie te bereken nie.', 'Skatting werk net vir vermenigvuldigingsprobleme met 2-syfergetalle.', 'Skatting waarborg dat die presiese antwoord altyd ʼn ronde getal sal wees.', 'Om die getalle eers af te rond gee vinnig ʼn benaderde antwoord; om dit daarna met die presiese antwoord te vergelyk wys of die presiese antwoord redelik is.'], correctIndex: 3, explanation: 'ʼn Skatting is ʼn vinnige kontrole, nie ʼn vervanging vir die presiese berekening nie. As die presiese antwoord ver van die skatting af is, is dit ʼn teken dat daar waarskynlik ʼn fout gemaak is — dit werk vir enige grootte getal, nie net 2-syfergetalle nie.' },

        // Blok 7 — Vermenigvuldig ʼn 2-Syfergetal met ʼn 2-Syfergetal (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die roostermetode: 14 × 21', checkMode: 'auto', options: ['294', '210', '284', '304'], correctIndex: 0, explanation: '14 = 10 + 4, 21 = 20 + 1. Gedeeltelike produkte: 10×20=200, 10×1=10, 4×20=80, 4×1=4. Som: 200 + 10 + 80 + 4 = 294. (210 tel net twee van die vier gedeeltelike produkte op. 284 vergeet die 10-term. 304 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'Bereken met die roostermetode: 37 × 25', checkMode: 'auto', options: ['750', '925', '890', '965'], correctIndex: 1, explanation: '37 = 30 + 7, 25 = 20 + 5. Gedeeltelike produkte: 30×20=600, 30×5=150, 7×20=140, 7×5=35. Som: 600 + 150 + 140 + 35 = 925. (750 tel net twee van die vier gedeeltelike produkte op. 890 vergeet die 35-term. 965 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'ʼn Boer plant 24 bome in elk van 16 rye. Hoeveel bome is daar altesaam?', checkMode: 'auto', options: ['320 bome', '360 bome', '384 bome', '404 bome'], correctIndex: 2, explanation: '24 = 20 + 4, 16 = 10 + 6. Gedeeltelike produkte: 20×10=200, 20×6=120, 4×10=40, 4×6=24. Som: 200 + 120 + 40 + 24 = 384 bome. (320 tel net twee van die vier gedeeltelike produkte op. 360 vergeet die 24-term. 404 kom van ʼn optelfout.)' },
      ],
      scoreMessages: [
        { minScore: 23, message: 'Uitstekend! Jy het tafels, kolommetode, skatting, faktore, 2-syfervermenigvuldiging, woordprobleme en redenasie bemeester.' },
        { minScore: 17, message: 'Goeie werk! Jy is selfversekerd oor die meeste van hierdie vaardighede — gaan enige gemiste vrae weer deur.' },
        { minScore: 11, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur vir die blokke wat lastig was en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (23 Vrae) — 6 vaardigheidsblokke — almal veelvuldige keuse
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Tafels Vlotheid (0-3, Easy)
        { difficulty: 'Easy', question: 'Bereken: 8 × 8', checkMode: 'auto', options: ['64', '56', '72', '16'], correctIndex: 0, explanation: '8 × 8 = 64. (56 kom van 7 × 8, 72 kom van 8 × 9 — albei gebruik die verkeerde tafelinskrywing. 16 kom van 8 + 8 optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Bereken: 3 × 9', checkMode: 'auto', options: ['24', '27', '30', '12'], correctIndex: 1, explanation: '3 × 9 = 27. (24 kom van 3 × 8, 30 kom van 3 × 10 — albei gebruik die verkeerde tafelinskrywing. 12 kom van 3 + 9 optel in plaas van vermenigvuldig.)' },
        { difficulty: 'Easy', question: 'Bereken: 11 × 6', checkMode: 'auto', options: ['60', '55', '66', '72'], correctIndex: 2, explanation: '11 × 6 = 66. Dink: 10 × 6 + 1 × 6 = 60 + 6 = 66. (60 stop na net die tiene-deel. 55 kom van 11 × 5. 72 kom van 11 verkeerd lees as 12.)' },
        { difficulty: 'Easy', question: 'Vul die ontbrekende getal in: ___ × 6 = 42', checkMode: 'auto', options: ['6', '8', '5', '7'], correctIndex: 3, explanation: 'Tel in 6e totdat jy 42 bereik: 6, 12, 18, 24, 30, 36, 42 — dit is 7 stappe, dus 7 × 6 = 42. (6 verwar die ontbrekende getal met die gegewe getal. 8 en 5 is naburige getalle in die 6-tafel.)' },

        // Blok 2 — Kolomvermenigvuldiging (4-7, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die kolommetode: 23 × 3', checkMode: 'auto', options: ['69', '29', '26', '96'], correctIndex: 0, explanation: 'Ene: 3 × 3 = 9. Tiene: 2 × 3 = 6. Antwoord: 69. (29 vergeet om die tiene-syfer te vermenigvuldig en los dit onveranderd. 26 kom van 23 + 3 optel. 96 keer die syfers van die korrekte antwoord om.)' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 67 × 4', checkMode: 'auto', options: ['248', '268', '276', '278'], correctIndex: 1, explanation: 'Ene: 7 × 4 = 28. Skryf 8, skuif 2. Tiene: 6 × 4 = 24, plus geskuifde 2 = 26. Antwoord: 268. (248 vergeet om die geskuifde 2 by te tel. 276 kom van 67 verkeerd lees as 69. 278 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'Bereken met die kolommetode en wys jou skuif: 45 × 6', checkMode: 'auto', options: ['240', '288', '270', '260'], correctIndex: 2, explanation: 'Ene: 5 × 6 = 30. Skryf 0, skuif 3. Tiene: 4 × 6 = 24, plus geskuifde 3 = 27. Antwoord: 270. (240 vergeet om die geskuifde 3 by te tel. 288 kom van 45 verkeerd lees as 48. 260 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder bereken 84 × 6 met die kolommetode. Hulle werk wys: ene-kolom 4 × 6 = 24, hulle het 4 geskryf en 2 geskuif — maar die tiene-ry is leeg. Wat is die korrekte finale antwoord?', checkMode: 'auto', options: ['484', '514', '516', '504'], correctIndex: 3, explanation: 'Tiene: 8 × 6 = 48, plus geskuifde 2 = 50. Finale antwoord: 504. (484 vergeet om die geskuifde 2 by te tel. 514 skuif per ongeluk 3 in plaas van 2. 516 kom van 84 verkeerd lees as 86.)' },

        // Blok 3 — Skatting en Redelikheid (8-10, Medium)
        { difficulty: 'Medium', question: 'Skat 53 × 7 deur 53 af te rond na die naaste 10, bereken dan die presiese antwoord. Wat is die presiese antwoord?', checkMode: 'auto', options: ['371', '350', '351', '391'], correctIndex: 0, explanation: '53 rond af na 50, dus die skatting is 50 × 7 = 350. Presies: ene 3 × 7 = 21, skryf 1 skuif 2; tiene 5 × 7 = 35, plus geskuifde 2 = 37, wat 371 gee. (350 verwar die skatting met die presiese antwoord. 351 vergeet om die geskuifde 2 by te tel. 391 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'ʼn Leerder skat 41 × 9 deur 41 na 40 af te rond, en kry ʼn skatting van 360. Hulle presiese antwoord kom uit op 369. Watter stelling is korrek?', checkMode: 'auto', options: ['369 is nie redelik nie — dit moet presies gelyk wees aan die skatting van 360, dus het die leerder ʼn fout gemaak.', 'Ja, 369 is redelik — dit is naby aan die skatting van 360, en is inderdaad die presiese korrekte antwoord op 41 × 9.', 'Nee, 369 kan nie korrek wees nie, want ʼn presiese antwoord moet altyd gelyk wees aan sy skatting.', 'Nee, aangesien 41 afrond na 40, moet die presiese antwoord altyd kleiner as die skatting wees.'], correctIndex: 1, explanation: '41 × 9 = 369 presies, en 369 is naby aan die skatting van 360, dus is dit redelik. ʼn Skatting hoef net naby die presiese antwoord te wees, nie identies nie — die ander opsies is op hierdie wanopvatting gebou.' },
        { difficulty: 'Medium', question: 'Sonder om enige van hulle heeltemal uit te werk, watter een is groter: 5 × 19 of 8 × 12?', checkMode: 'auto', options: ['5 × 19 is groter', 'Hulle is gelyk', '8 × 12 is groter', 'Kan nie bepaal word sonder presiese berekening nie'], correctIndex: 2, explanation: '5 × 19 = 95 en 8 × 12 = 96 — baie naby aan mekaar, maar 8 × 12 is groter. As jy 19 oprond na 20, kry jy 5 × 20 = 100 as ʼn boonste skatting vir die eerste produk, wat wys dat die ware waarde (95) net onder 8 × 12 (96) lê.' },

        // Blok 4 — Faktore en Buigsame Strategieë (11-13, Medium)
        { difficulty: 'Easy', question: 'Breek 18 in twee faktore en gebruik hulle om te bereken: 4 × 18', checkMode: 'auto', options: ['22', '36', '48', '72'], correctIndex: 3, explanation: '18 = 9 × 2, dus 4 × 18 = 4 × 9 × 2 = 36 × 2 = 72. (22 kom van 4 + 18 optel in plaas van vermenigvuldig. 36 stop na vermenigvuldiging met net een faktor, 9, en vergeet die 2. 48 kom van die verkeerde faktorpaar vir 18.)' },
        { difficulty: 'Medium', question: 'Breek 16 in twee faktore en gebruik hulle om te bereken: 7 × 16', checkMode: 'auto', options: ['112', '56', '23', '126'], correctIndex: 0, explanation: '16 = 8 × 2, dus 7 × 16 = 7 × 8 × 2 = 56 × 2 = 112. (56 stop na vermenigvuldiging met net een faktor, 8, en vergeet die 2. 23 kom van 7 + 16 optel. 126 kom van 8 verkeerd lees as 9.)' },
        { difficulty: 'Medium', question: 'Vir die berekening 3 × 45 breek ʼn leerder 45 in 3 × 9 × 5 in plaas van die kolommetode te gebruik. Watter stelling oor hierdie strategie is korrek?', checkMode: 'auto', options: ['Die faktormetode is altyd vinniger ongeag die getalle betrokke.', 'Die kolommetode is waarskynlik makliker hier — 45 breek nie in baie eenvoudige klein faktore nie, en om 45 × 3 direk te vermenigvuldig het net een skuif nodig.', 'Geeneen van die metodes kan gebruik word nie, want 45 is ʼn onewe getal.', 'Die faktormetode gee ʼn ander, verkeerde antwoord vir hierdie berekening.'], correctIndex: 1, explanation: '9 × 5 moet steeds twee keer met 3 vermenigvuldig word, dus neem die faktormetode hier net soveel stappe. Om 45 × 3 in kolomme te skryf en net een keer te skuif is vinniger en meer direk vir hierdie spesifieke produk.' },

        // Blok 5 — Woordprobleme in Verskeie Kontekste (14-16, Medium)
        { difficulty: 'Medium', question: 'ʼn Sokkerafrigter koop nuwe drag vir die span: 8 bokse kouse met 12 pare in elke boks. Hoeveel pare kouse het die afrigter altesaam gekoop?', checkMode: 'auto', options: ['20 pare', '88 pare', '96 pare', '104 pare'], correctIndex: 2, explanation: '8 × 12 = 96 pare kouse. (20 kom van 8 + 12 optel in plaas van vermenigvuldig. 88 en 104 kom van die verkeerde aantal pare per boks, 11 of 13, in plaas van 12.)' },
        { difficulty: 'Medium', question: 'ʼn Sitrusboer pak lemoene in kratte van 18. Hoeveel meer lemoene word in 9 kratte gepak as in 6 kratte?', checkMode: 'auto', options: ['162 meer lemoene', '108 meer lemoene', '36 meer lemoene', '54 meer lemoene'], correctIndex: 3, explanation: '9 × 18 = 162 en 6 × 18 = 108. 162 − 108 = 54 meer lemoene. (162 en 108 gee die totale vir een groep kratte, maar vergeet om af te trek. 36 kom van die verskil verkeerd tel as 2 ekstra kratte in plaas van 3.)' },
        { difficulty: 'Medium', question: 'Roete A-busse maak 6 ritte per dag met 17 passasiers elk. Roete B-busse maak 7 ritte per dag met 15 passasiers elk. Watter roete vervoer meer passasiers per dag, en met hoeveel?', checkMode: 'auto', options: ['Roete B vervoer meer, met 3.', 'Roete A vervoer meer, met 3.', 'Hulle vervoer dieselfde aantal passasiers.', 'Roete B vervoer meer, met 5.'], correctIndex: 0, explanation: 'Roete A: 6 × 17 = 102 passasiers. Roete B: 7 × 15 = 105 passasiers. Roete B vervoer meer, met 105 − 102 = 3. Die ander opsies kom van rekenfoute in een van die twee vermenigvuldigings.' },

        // Blok 6 — Foutopsporing en Regverdig-jou-Redenasie (17-19, Hard)
        { difficulty: 'Hard', question: 'Amahle sê 12 × 11 = 142. Watter stelling is korrek?', checkMode: 'auto', options: ['Amahle is korrek — 12 × 11 = 142.', 'Amahle is verkeerd — die korrekte antwoord is 132.', 'Amahle is verkeerd — die korrekte antwoord is 152.', 'Amahle is verkeerd — die korrekte antwoord is 122.'], correctIndex: 1, explanation: 'Dink: 12 × 10 = 120, plus 12 × 1 = 12, wat 120 + 12 = 132 gee. Amahle is verkeerd — 142 is nie die antwoord op 12 × 11 nie.' },
        { difficulty: 'Hard', question: '4 vissers begin elkeen die dag met 38 visse in hulle vangs. Elke visser verkoop 14 visse by die mark. Hoeveel visse het al 4 vissers saam oor?', checkMode: 'auto', options: ['152 visse', '56 visse', '96 visse', '138 visse'], correctIndex: 2, explanation: 'Visse oor per visser = 38 − 14 = 24. Totaal oor = 4 × 24 = 96 visse. (152 vergeet om die verkoopte visse eers af te trek. 56 gee die totaal wat verkoop is in plaas van wat oor is. 138 trek 14 net een keer van die groeptotaal af in plaas van per visser.)' },
        { difficulty: 'Hard', question: 'Watter stelling verduidelik korrek waarom om 15 in 5 × 3 te breek en stap vir stap te vermenigvuldig presies dieselfde antwoord gee as om direk met 15 te vermenigvuldig?', checkMode: 'auto', options: ['Dit is ʼn toeval wat net vir die getal 15 werk.', 'Om getalle in faktore te breek verander altyd die finale antwoord effens.', 'Dit werk net wanneer albei faktore onewe getalle is.', 'Om 15 in 5 × 3 te breek verander nie sy waarde nie, dus is om met 5 en dan met 3 te vermenigvuldig dieselfde totale hoeveelheid vermenigvuldiging as om met 15 in een stap te vermenigvuldig.'], correctIndex: 3, explanation: '5 × 3 is steeds 15, dus verander die opdeel van die vermenigvuldiging in twee kleiner stappe nie die totale hoeveelheid wat vermenigvuldig word nie. Dit werk vir enige getal wat in faktore opgebreek word, nie net 15 of onewe getalle nie.' },

        // Blok 7 — Vermenigvuldig ʼn 2-Syfergetal met ʼn 2-Syfergetal (20-22, Easy-Medium)
        { difficulty: 'Easy', question: 'Bereken met die roostermetode: 13 × 24', checkMode: 'auto', options: ['312', '240', '300', '322'], correctIndex: 0, explanation: '13 = 10 + 3, 24 = 20 + 4. Gedeeltelike produkte: 10×20=200, 10×4=40, 3×20=60, 3×4=12. Som: 200 + 40 + 60 + 12 = 312. (240 tel net twee van die vier gedeeltelike produkte op. 300 vergeet die 12-term. 322 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'Bereken met die roostermetode: 42 × 36', checkMode: 'auto', options: ['1440', '1512', '1500', '1522'], correctIndex: 1, explanation: '42 = 40 + 2, 36 = 30 + 6. Gedeeltelike produkte: 40×30=1200, 40×6=240, 2×30=60, 2×6=12. Som: 1200 + 240 + 60 + 12 = 1512. (1440 tel net twee van die vier gedeeltelike produkte op. 1500 vergeet die 12-term. 1522 kom van ʼn optelfout.)' },
        { difficulty: 'Medium', question: 'ʼn Teater het 27 rye met 19 sitplekke in elke ry. Hoeveel sitplekke is daar altesaam?', checkMode: 'auto', options: ['380 sitplekke', '450 sitplekke', '513 sitplekke', '523 sitplekke'], correctIndex: 2, explanation: '27 = 20 + 7, 19 = 10 + 9. Gedeeltelike produkte: 20×10=200, 20×9=180, 7×10=70, 7×9=63. Som: 200 + 180 + 70 + 63 = 513 sitplekke. (380 tel net twee van die vier gedeeltelike produkte op. 450 vergeet die 63-term. 523 kom van ʼn optelfout.)' },
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
