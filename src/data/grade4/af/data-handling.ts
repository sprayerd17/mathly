import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Datahantering',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — COLLECTING AND ORGANISING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'collecting-organising-data',
      title: 'Data Insamel en Organiseer',
      icon: '📊',
      explanation: `
<p style="margin-bottom:14px;"><strong>Data</strong> is <strong>inligting wat ons versamel om 'n vraag te beantwoord</strong>. Voordat ons data versamel, begin ons altyd met 'n vraag wat ons wil beantwoord. Die data wat ons versamel word dan georganiseer sodat ons dit maklik kan lees en verstaan.</p>

<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#dc2626;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Werklike voorbeelde van datavrae</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">⚽</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Wat is die gewildste sport in ons klas?</strong> — versamel data deur vir elke leerder te vra watter sport hulle die meeste geniet.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🚶</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Hoeveel leerders stap skool toe?</strong> — versamel data deur aan te teken hoe elke leerder skool toe reis.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="font-size:18px;flex-shrink:0;">🎨</span>
      <span style="color:#7f1d1d;font-size:15px;"><strong>Wat is die gunstelingkleur van Graad 4-leerders?</strong> — versamel data deur elke leerder te vra om hul gunstelingkleur te kies.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Die dataversamelingsproses</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Stel 'n vraag</strong> wat jy wil beantwoord — dit fokus jou dataversameling.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Besluit watter data om te versamel</strong> — kies die kategorieë of opsies wat jy gaan aanteken.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Versamel die data</strong> met <strong style="color:#1e40af;">telmerke</strong> — een merk per antwoord soos jy elke antwoord aanteken.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel die telmerke</strong> en teken die <strong style="color:#dc2626;">frekwensie</strong> aan — frekwensie is die totale aantal kere wat elke kategorie gekies is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Organiseer die data</strong> in 'n tabel — 'n <strong>frekwensietabel</strong> wys alle kategorieë en hul totale netjies in rye.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Telmerke</div>
  <p style="font-size:15px;color:#1e3a8a;margin-bottom:12px;">'n <strong style="color:#1e40af;">Telmerk</strong> is 'n vertikale lyn wat gebruik word om antwoorde een op 'n slag te tel. Elke vyfde merk word skuins oor die vorige vier getrek om 'n <strong>groep van 5</strong> te vorm — dit maak tel vinniger en makliker.</p>
  <div style="display:flex;flex-direction:column;gap:8px;">

    <div style="display:flex;align-items:center;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:15px;flex-shrink:0;min-width:80px;text-align:center;letter-spacing:3px;">||||</span>
      <span style="color:#1e3a8a;font-size:15px;">= <strong style="color:#dc2626;">4</strong> — vier aparte vertikale merke</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:15px;flex-shrink:0;min-width:80px;text-align:center;">𝄌</span>
      <span style="color:#1e3a8a;font-size:15px;">= <strong style="color:#dc2626;">5</strong> — vier vertikale merke deurgesny deur 'n skuinse vyfde merk</span>
    </div>

    <div style="display:flex;align-items:center;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:3px 14px;font-weight:700;font-size:15px;flex-shrink:0;min-width:80px;text-align:center;">𝄌 |||</span>
      <span style="color:#1e3a8a;font-size:15px;">= <strong style="color:#dc2626;">8</strong> — een groep van 5 plus 3 ekstra merke</span>
    </div>

  </div>
  <div style="margin-top:12px;font-size:14px;color:#1e3a8a;background:#dbeafe;border-radius:8px;padding:10px 14px;">
    <strong>Reël:</strong> Elke telmerk verteenwoordig <strong style="color:#1e40af;">1</strong>. Elke <strong>5de merk</strong> sny die vorige 4. Tel telmerke in <strong style="color:#16a34a;">groepe van 5</strong> en tel dan enige oorblywende merke by.
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Struktuur van 'n frekwensietabel</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Kategorie</th>
          <th style="padding:8px 14px;text-align:left;color:#1e40af;font-weight:700;">Telmerke</th>
          <th style="padding:8px 14px;text-align:left;color:#dc2626;font-weight:700;">Frekwensie</th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;color:#475569;">Kategorie A</td>
          <td style="padding:8px 14px;color:#1e40af;font-weight:600;">𝄌 |</td>
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">6</td>
        </tr>
        <tr style="background:#f8fafc;border-bottom:1px solid #bfdbfe;">
          <td style="padding:8px 14px;color:#475569;">Kategorie B</td>
          <td style="padding:8px 14px;color:#1e40af;font-weight:600;">𝄌 𝄌</td>
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">10</td>
        </tr>
        <tr>
          <td style="padding:8px 14px;font-weight:700;color:#475569;">Totaal</td>
          <td style="padding:8px 14px;"></td>
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">16</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            "'n Klas is gevra wat hul gunstelingvrugte is. Resultate: Appel — 8, Piesang — 5, Lemoen — 7, Mango — 4. Wys hoe om dit met telmerke en 'n frekwensietabel aan te teken.",
          steps: [
            "Stel 'n tabel op met drie kolomme: <strong>Vrug</strong>, <strong style=\"color:#1e40af;\">Telmerke</strong>, en <strong style=\"color:#dc2626;\">Frekwensie</strong>.",
            'Teken <strong style="color:#1e40af;">telmerke</strong> vir elke vrug: Appel = 𝄌 ||| (8), Piesang = 𝄌 (5), Lemoen = 𝄌 || (7), Mango = |||| (4).',
            'Tel die telmerke en skryf die <strong style="color:#dc2626;">frekwensie</strong> neer: Appel = 8, Piesang = 5, Lemoen = 7, Mango = 4.',
            'Tel al die frekwensies op vir die <strong style="color:#16a34a;">totaal</strong>: 8 + 5 + 7 + 4 = <strong style="color:#16a34a;">24 leerders</strong>.',
          ],
          answer: 'Die frekwensietabel wys Appel: 8, Piesang: 5, Lemoen: 7, Mango: 4. Totaal: 24 leerders.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        "'n Frekwensietabel wat gunstelingvrugte wys met kolomme vir vrugnaam, telmerke en frekwensie — appel 8 piesang 5 lemoen 7 mango 4",
      videoPlaceholder:
        "Kort video wat wys hoe om data met telmerke te versamel en dit in 'n frekwensietabel te organiseer",
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — PICTOGRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'pictographs',
      title: 'Prentgrafieke',
      icon: '🖼️',
      explanation: `
<p style="margin-bottom:14px;">'n <strong>Prentgrafiek</strong> gebruik prente of simbole om data voor te stel. Elke simbool staan vir 'n vaste aantal items — hierdie getal word in die <strong style="color:#1e40af;">sleutel</strong> gewys. Prentgrafieke maak dit maklik om kategorieë met 'n oogopslag te vergelyk.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Dele van 'n prentgrafiek</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Titel</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Beskryf <strong>waaroor die grafiek gaan</strong>. Lees altyd eers die titel sodat jy weet wat die data wys.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Sleutel</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Wys <strong>wat elke simbool voorstel</strong> — byvoorbeeld, ★ = 2 leerders. Die sleutel is noodsaaklik om die werklike totale te bereken.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Simbole</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Die <strong>prente of ikone</strong> wat vir elke kategorie geteken word. Tel die simbole, en vermenigvuldig dan met die sleutelwaarde om die totaal te kry. 'n <strong>Half simbool</strong> verteenwoordig die helfte van die sleutelwaarde.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:100px;text-align:center;">Kategorieë</span>
      <span style="color:#7c2d12;font-size:15px;padding-top:2px;">Die <strong>items wat vergelyk word</strong> — elke kategorie kry sy eie ry simbole.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om 'n prentgrafiek te lees</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Lees die <strong style="color:#dc2626;">titel</strong> om te verstaan wat die grafiek wys.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Lees die <strong style="color:#1e40af;">sleutel</strong> om uit te vind wat elke simbool werd is.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Tel die <span style="color:#16a34a;">simbole</span></strong> vir die kategorie wat jy lees.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong>Vermenigvuldig</strong> die aantal simbole met die <strong style="color:#1e40af;">sleutelwaarde</strong> om die totaal vir daardie kategorie te vind.</span>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Half simbole 💡</span>
  <p style="margin-top:8px;font-size:14px;color:#78350f;">Wanneer 'n waarde nie presies deelbaar is deur die sleutelwaarde nie, teken 'n <strong>half simbool</strong>. 'n Half simbool is <strong>die helfte van die sleutelwaarde</strong> werd. Byvoorbeeld, as die sleutel 2 is en jy moet 7 wys: teken 3 volle simbole (= 6) en 1 half simbool (= 1), wat 6 + 1 = 7 gee.</p>
</div>
`,
      workedExamples: [
        {
          question:
            "'n Prentgrafiek wys gunstelingsport. Elke simbool (★) verteenwoordig 2 leerders. Sokker: 4 simbole, Krieket: 3 simbole, Swem: 5 simbole, Tennis: 2 simbole. Beantwoord die vrae.",
          steps: [
            '<strong style="color:#1e40af;">Sleutel:</strong> elke <strong style="color:#16a34a;">★</strong> = 2 leerders.',
            'Sokker: <strong style="color:#16a34a;">4</strong> simbole × <strong style="color:#1e40af;">2</strong> = <strong>8 leerders</strong>.',
            'Krieket: <strong style="color:#16a34a;">3</strong> × <strong style="color:#1e40af;">2</strong> = <strong>6 leerders</strong>. &nbsp; Swem: <strong style="color:#16a34a;">5</strong> × <strong style="color:#1e40af;">2</strong> = <strong>10 leerders</strong>. &nbsp; Tennis: <strong style="color:#16a34a;">2</strong> × <strong style="color:#1e40af;">2</strong> = <strong>4 leerders</strong>.',
            'Gewildste: <strong>Swem</strong> met die meeste simbole (<strong style="color:#16a34a;">5</strong>) = <strong>10 leerders</strong>.',
            'Totaal opgeneem: 8 + 6 + 10 + 4 = <strong>28 leerders</strong>.',
          ],
          answer: 'Sokker: 8, Krieket: 6, Swem: 10 (gewildste), Tennis: 4. Totaal: 28 leerders.',
        },
        {
          question:
            "Hoe sou jy 7 leerders in 'n prentgrafiek wys waar elke simbool 2 leerders verteenwoordig?",
          steps: [
            'Deel deur die sleutelwaarde: <strong>7 ÷ 2 = 3.5</strong>.',
            '3.5 simbole beteken <strong>3 volle simbole</strong> (= 6 leerders) en <strong>1 half simbool</strong> (= 1 leerder).',
          ],
          answer: 'Teken 3 volle simbole en 1 half simbool.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        "'n Prentgrafiek wat gunstelingsport wys met sokker 4 simbole krieket 3 simbole swem 5 simbole tennis 2 simbole waar elke simbool 2 leerders verteenwoordig met 'n duidelike sleutel",
      videoPlaceholder:
        "Kort video wat wys hoe om 'n prentgrafiek te lees en te interpreteer, insluitend hoe om die sleutel te gebruik om totale te bereken",
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — BAR GRAPHS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'bar-graphs',
      title: 'Staafgrafieke',
      icon: '📊',
      explanation: `
<p style="margin-bottom:14px;">'n <strong>Staafgrafiek</strong> gebruik reghoekige <strong style="color:#1e40af;">stawe</strong> om data voor te stel. Die <strong>hoogte</strong> (of lengte) van elke staaf wys die waarde vir daardie kategorie. Staafgrafieke maak dit maklik om kategorieë te vergelyk en die hoogste of laagste waardes vinnig raak te sien.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Dele van 'n staafgrafiek</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Titel</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;">Beskryf <strong>waaroor die grafiek gaan</strong>. Lees dit altyd eerste.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Horisontale as</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Die <strong>x-as</strong> loop van links na regs en wys die <strong>kategorieë</strong> wat vergelyk word.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Vertikale as</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:2px;">Die <strong>y-as</strong> loop van onder na bo en wys die <strong>waardes of frekwensie</strong>. Die skaal op hierdie as laat jou toe om die hoogte van elke staaf te lees.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Stawe</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;">Die <strong>reghoeke</strong> wat vir elke kategorie geteken word. Die <strong>hoogte</strong> van elke staaf wys die datawaarde vir daardie kategorie.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Skaal</span>
      <span style="color:#7c2d12;font-size:15px;padding-top:2px;">Die <strong>genommerde intervalle</strong> op die vertikale as. Kies 'n skaal wat al jou waardes netjies pas — byvoorbeeld, 0, 2, 4, 6, 8, 10.</span>
    </div>

  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om 'n staafgrafiek te lees</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Lees die <strong style="color:#16a34a;">titel</strong> om te verstaan waaroor die grafiek gaan.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Kyk na die <strong style="color:#dc2626;">skaal</strong> op die vertikale as om die waarde van elke interval te verstaan.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Vind die <strong>kategorie</strong> wat jy wil hê op die <strong style="color:#dc2626;">horisontale as</strong>.</span>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Lees <strong>dwarsoor vanaf die bokant van die <span style="color:#1e40af;">staaf</span></strong> na die <strong style="color:#dc2626;">vertikale as</strong> om die waarde te vind.</span>
    </div>

  </div>
</div>
`,
      workedExamples: [
        {
          question:
            "'n Staafgrafiek wys die aantal boeke wat in 'n maand gelees is. Thabo: 6, Lerato: 9, Sipho: 4, Amahle: 7. Beantwoord die vrae.",
          steps: [
            'Hoogste <strong style="color:#1e40af;">staaf</strong>: <strong>Lerato</strong> met <strong>9 boeke</strong> — meeste boeke gelees.',
            'Laagste <strong style="color:#1e40af;">staaf</strong>: <strong>Sipho</strong> met <strong>4 boeke</strong> — minste boeke gelees.',
            'Totaal: <strong>6 + 9 + 4 + 7</strong> = <strong style="color:#dc2626;">26 boeke</strong> altesaam gelees.',
            'Verskil tussen meeste en minste: <strong>9 − 4</strong> = <strong>5 meer boeke</strong> gelees deur Lerato as Sipho.',
          ],
          answer: 'Meeste: Lerato (9). Minste: Sipho (4). Totaal: 26 boeke. Lerato het 5 meer boeke as Sipho gelees.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        "'n Staafgrafiek wat boeke gelees deur vier leerders wys — Thabo 6 Lerato 9 Sipho 4 Amahle 7 — met 'n vertikale as geskaal van 0 tot 10 en elke staaf 'n ander kleur",
      videoPlaceholder:
        "Kort video wat wys hoe om 'n staafgrafiek te lees en te ontleed en sinne te skryf wat beskryf wat die data wys",
    },
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — ANALYSING AND INTERPRETING DATA
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'analysing-interpreting-data',
      title: 'Data Ontleed en Interpreteer',
      icon: '🔎',
      explanation: `
<p style="margin-bottom:14px;"><strong>Data ontleed</strong> beteken om die resultate noukeurig te bekyk om <strong style="color:#16a34a;">patrone</strong> te vind, <strong style="color:#1e40af;">vergelykings</strong> te maak, en <strong style="color:#16a34a;">gevolgtrekkings</strong> te maak. Nadat ons 'n grafiek of tabel gelees het, skryf ons sinne wat verduidelik wat die data ons vertel.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Belangrike ontledingsvrae om te vra</div>
  <div style="display:flex;flex-direction:column;gap:8px;font-size:15px;color:#1e3a8a;">
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#16a34a;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>Watter kategorie het die meeste?</strong> — dit word die <strong style="color:#16a34a;">modus</strong> genoem.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#16a34a;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>Watter kategorie het die minste?</strong></span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#dc2626;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>Wat is die totaal?</strong> — tel al die waardes bymekaar.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#1e40af;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>Wat is die verskil</strong> tussen die meeste en die minste?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#16a34a;font-weight:700;flex-shrink:0;">▶</span>
      <span><strong>Watter gevolgtrekkings kan ons maak?</strong> — wat vertel die data ons oor die groep?</span>
    </div>
  </div>
</div>

<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#15803d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Gevolgtrekkings skryf 📝</div>
  <div style="color:#14532d;font-size:15px;">'n Goeie gevolgtrekkingsin beantwoord 'n vraag oor die data met <strong>spesifieke getalle</strong>. Byvoorbeeld: <em>"Lerato het die meeste boeke gelees met 9 in totaal"</em> is beter as net <em>"Lerato het baie gelees."</em></div>
</div>
`,
      workedExamples: [
        {
          question:
            "Gebruik die boekdata van Uitgewerkte Voorbeeld 4 (Thabo: 6, Lerato: 9, Sipho: 4, Amahle: 7), skryf drie sinne wat beskryf wat die data wys.",
          steps: [
            '<strong style="color:#16a34a;">Meeste:</strong> Lerato het die meeste boeke gelees met <strong>9</strong> in totaal.',
            '<strong style="color:#16a34a;">Minste:</strong> Sipho het die minste boeke gelees met net <strong>4</strong>.',
            '<strong style="color:#1e40af;">Gemiddeld:</strong> Totaal = 6 + 9 + 4 + 7 = 26. Gemiddeld = 26 ÷ 4 = <strong>6.5 boeke</strong> per leerder.',
          ],
          answer: 'Lerato het die meeste gelees (9). Sipho het die minste gelees (4). Gemiddeld het leerders elk 6.5 boeke gelees.',
        },
        {
          question:
            "'n Opname het 30 leerders gevra hoe hulle skool toe gaan. Stap: 12, Motor: 8, Bus: 7, Fiets: 3. Watter breuk van leerders stap skool toe?",
          steps: [
            '<strong style="color:#dc2626;">12</strong> uit <strong style="color:#dc2626;">30</strong> leerders stap skool toe.',
            "Skryf as 'n breuk: <strong>12/30</strong>.",
            'Vereenvoudig: 12 en 30 is albei deelbaar deur 6. <strong>12 ÷ 6 = 2</strong> en <strong>30 ÷ 6 = 5</strong>.',
            'Vereenvoudigde breuk: <strong style="color:#16a34a;">2/5</strong>.',
          ],
          answer: '2/5 van die leerders stap skool toe.',
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        "Kort video wat wys hoe om 'n staafgrafiek te lees en te ontleed en sinne te skryf wat beskryf wat die data wys",
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 — TELMERKE: LEES EN TEL (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Telmerke',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel verteenwoordig ||| (drie telmerke)?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Elke telmerk = 1. ||| = 3 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel verteenwoordig 𝄌 (een volle groep van 5)?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: "'n Volle groep het 4 vertikale lyne wat deur 'n skuinse 5de lyn gesny word = 5 ✓" },
        { difficulty: 'Easy', question: 'Hoeveel verteenwoordig 𝄌 || (een groep van 5 plus 2 meer)?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'sewe'], explanation: '5 + 2 = 7 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel verteenwoordig 𝄌 |||| (een groep van 5 plus 4 meer)?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nege'], explanation: '5 + 4 = 9 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel verteenwoordig 𝄌 𝄌 (twee volle groepe van 5)?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', 'tien'], explanation: '5 + 5 = 10 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel verteenwoordig 𝄌 𝄌 || (twee groepe van 5 plus 2 meer)?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twaalf'], explanation: '5 + 5 + 2 = 12 ✓' },
        { difficulty: 'Medium', question: 'Hoeveel verteenwoordig 𝄌 𝄌 |||| (twee groepe van 5 plus 4 meer)?', answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'veertien'], explanation: '5 + 5 + 4 = 14 ✓' },
        { difficulty: 'Medium', question: 'Hoeveel verteenwoordig 𝄌 𝄌 𝄌 (drie volle groepe van 5)?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'vyftien'], explanation: '5 + 5 + 5 = 15 ✓' },
        { difficulty: 'Medium', question: 'Hoeveel verteenwoordig 𝄌 𝄌 𝄌 ||| (drie groepe van 5 plus 3 meer)?', answer: '18', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', 'agttien'], explanation: '5 + 5 + 5 + 3 = 18 ✓' },
        { difficulty: 'Easy', question: 'Hoeveel verteenwoordig |||| (vier telmerke, nog geen groep van 5 nie)?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: "Vier aparte merke sonder 'n skuinse 5de lyn nog = 4 ✓" },
        { difficulty: 'Easy', question: "'n Teltelling het 3 volle groepe van 5 en 2 ekstra merke. Wat is die totaal?", answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', 'sewentien'], explanation: '3 × 5 = 15, plus 2 ekstra = 15 + 2 = 17 ✓' },
        { difficulty: 'Medium', question: "'n Teltelling het 4 volle groepe van 5 en 1 ekstra merk. Wat is die totaal?", answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', 'een en twintig'], explanation: '4 × 5 = 20, plus 1 ekstra = 20 + 1 = 21 ✓' },
        { difficulty: 'Easy', question: "'n Teltelling het 2 volle groepe van 5 en 4 ekstra merke. Wat is die totaal?", answer: '14', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', 'veertien'], explanation: '2 × 5 = 10, plus 4 ekstra = 10 + 4 = 14 ✓' },
        { difficulty: 'Medium', question: "'n Teltelling het 6 volle groepe van 5 en 0 ekstra merke. Wat is die totaal?", answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', 'dertig'], explanation: '6 × 5 = 30 ✓' },
        { difficulty: 'Medium', question: "'n Klas het gunstelingtroeteldiere met telmerke aangeteken: Honde — 𝄌 |||, Katte — 𝄌 |, Vis — ||||, Voëls — 𝄌 𝄌 ||. Hoeveel leerders het Honde gekies?", answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: 'Honde = 𝄌 ||| = 5 + 3 = 8 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldierdata (Honde — 𝄌 |||, Katte — 𝄌 |, Vis — ||||, Voëls — 𝄌 𝄌 ||), hoeveel leerders het Voëls gekies?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twaalf'], explanation: 'Voëls = 𝄌 𝄌 || = 5 + 5 + 2 = 12 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldierdata (Honde — 8, Katte — 6, Vis — 4, Voëls — 12), hoeveel leerders is altesaam opgeneem?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', 'dertig'], explanation: '8 + 6 + 4 + 12 = 30 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldierdata (Honde — 8, Katte — 6, Vis — 4, Voëls — 12), watter troeteldier is die modus (die meeste gekies)?', answer: 'Voëls', checkMode: 'auto', correctAnswer: 'Voëls', correctAnswers: ['Voëls', 'voëls', 'Voels', 'voels'], explanation: 'Voëls het die hoogste frekwensie, 12, so Voëls is die modus ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldierdata (Honde — 8, Katte — 6, Vis — 4, Voëls — 12), watter troeteldier is die minste gekies?', answer: 'Vis', checkMode: 'auto', correctAnswer: 'Vis', correctAnswers: ['Vis', 'vis'], explanation: 'Vis het die laagste frekwensie, 4 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die troeteldierdata (Honde — 8, Katte — 6, Vis — 4, Voëls — 12), wat is die verskil tussen die gewildste en minste gewilde troeteldier?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: 'Meeste: Voëls (12). Minste: Vis (4). 12 − 4 = 8 ✓' },
        { difficulty: 'Medium', question: "'n Klas het gunstelingkleure met telmerke aangeteken: Blou — 𝄌 ||, Rooi — 𝄌, Groen — 𝄌 𝄌 |||, Geel — ||||. Hoeveel leerders het Groen gekies?", answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', 'dertien'], explanation: 'Groen = 𝄌 𝄌 ||| = 5 + 5 + 3 = 13 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die kleurdata (Blou — 7, Rooi — 5, Groen — 13, Geel — 4), hoeveel leerders is altesaam opgeneem?', answer: '29', checkMode: 'auto', correctAnswer: '29', correctAnswers: ['29', 'nege en twintig'], explanation: '7 + 5 + 13 + 4 = 29 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die kleurdata (Blou — 7, Rooi — 5, Groen — 13, Geel — 4), watter kleur is die modus?', answer: 'Groen', checkMode: 'auto', correctAnswer: 'Groen', correctAnswers: ['Groen', 'groen'], explanation: 'Groen het die hoogste frekwensie, 13, so dit is die modus ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die kleurdata (Blou — 7, Rooi — 5, Groen — 13, Geel — 4), wat is die verskil tussen die gewildste en minste gewilde kleur?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nege'], explanation: 'Meeste: Groen (13). Minste: Geel (4). 13 − 4 = 9 ✓' },
        { difficulty: 'Hard', question: "Verduidelik in jou eie woorde waarom telmerke in groepe van 5 georganiseer word, in plaas daarvan dat hulle net as enkele lyne geteken word.", answer: "Om telmerke in groepe van 5 te organiseer maak dit baie vinniger en makliker om te tel — in plaas daarvan om elke enkele merk een op 'n slag te tel, kan jy in 5's tel (5, 10, 15 …) en dan enige ekstra merke aan die einde bytel. Dit verminder foute wanneer daar baie antwoorde is om te tel.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan telmerke met selfvertroue lees en tel.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae oor groepering van telmerke in 5s weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug na die telmerke-afdeling en probeer weer.' },
        { minScore: 0, message: 'Hou aan — lees weer deur die telmerke-verduideliking en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 — PRENTGRAFIEKE: LEES MET 'N SLEUTEL (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Prentgrafieke',
      questions: [
        { difficulty: 'Easy', question: "'n Prentgrafiek wys gunstelingsport. Elke simbool (★) = 2 leerders. Sokker het 4 simbole. Hoeveel leerders het Sokker gekies?", answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8 leerders'], explanation: '4 × 2 = 8 leerders ✓' },
        { difficulty: 'Easy', question: 'Gebruik dieselfde sleutel (★ = 2 leerders), Krieket het 3 simbole. Hoeveel leerders het Krieket gekies?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6 leerders'], explanation: '3 × 2 = 6 leerders ✓' },
        { difficulty: 'Easy', question: 'Gebruik dieselfde sleutel (★ = 2 leerders), Swem het 5 simbole. Hoeveel leerders het Swem gekies?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 leerders'], explanation: '5 × 2 = 10 leerders ✓' },
        { difficulty: 'Easy', question: 'Gebruik dieselfde sleutel (★ = 2 leerders), Tennis het 2 simbole. Hoeveel leerders het Tennis gekies?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4 leerders'], explanation: '2 × 2 = 4 leerders ✓' },
        { difficulty: 'Medium', question: 'Gebruik die sportdata (Sokker 8, Krieket 6, Swem 10, Tennis 4), hoeveel leerders is altesaam opgeneem?', answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 leerders'], explanation: '8 + 6 + 10 + 4 = 28 leerders ✓' },
        { difficulty: 'Medium', question: 'Gebruik die sportdata (Sokker 8, Krieket 6, Swem 10, Tennis 4), watter sport is die modus (gewildste)?', answer: 'Swem', checkMode: 'auto', correctAnswer: 'Swem', correctAnswers: ['Swem', 'swem'], explanation: 'Swem het die meeste simbole (5) en die hoogste totaal (10) ✓' },
        { difficulty: 'Easy', question: "'n Prentgrafiek wys gunstelingtroeteldiere. Elke simbool (🐾) = 5 leerders. Honde het 3 simbole. Hoeveel leerders het Honde gekies?", answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 leerders'], explanation: '3 × 5 = 15 leerders ✓' },
        { difficulty: 'Easy', question: 'Gebruik dieselfde sleutel (🐾 = 5 leerders), Katte het 5 simbole. Hoeveel leerders het Katte gekies?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25 leerders'], explanation: '5 × 5 = 25 leerders ✓' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde sleutel (🐾 = 5 leerders), Vis het 2 simbole. Hoeveel leerders het Vis gekies?', answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 leerders'], explanation: '2 × 5 = 10 leerders ✓' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde sleutel (🐾 = 5 leerders), Voëls het 4 simbole. Hoeveel leerders het Voëls gekies?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 leerders'], explanation: '4 × 5 = 20 leerders ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldierdata (Honde 15, Katte 25, Vis 10, Voëls 20), wat is die totale aantal leerders opgeneem?', answer: '70', checkMode: 'auto', correctAnswer: '70', correctAnswers: ['70', '70 leerders'], explanation: '15 + 25 + 10 + 20 = 70 leerders ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die troeteldierdata (Honde 15, Katte 25, Vis 10, Voëls 20), wat is die verskil tussen die gewildste en minste gewilde troeteldier?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: 'Meeste: Katte (25). Minste: Vis (10). 25 − 10 = 15 ✓' },
        { difficulty: 'Easy', question: "'n Prentgrafiek wys motors verkoop elke maand. Elke simbool (🚗) = 10 motors. Januarie het 5 simbole. Hoeveel motors is in Januarie verkoop?", answer: '50', checkMode: 'auto', correctAnswer: '50', correctAnswers: ['50', '50 motors'], explanation: '5 × 10 = 50 motors ✓' },
        { difficulty: 'Medium', question: 'Gebruik dieselfde sleutel (🚗 = 10 motors), Maart het 6 simbole. Hoeveel motors is in Maart verkoop?', answer: '60', checkMode: 'auto', correctAnswer: '60', correctAnswers: ['60', '60 motors'], explanation: '6 × 10 = 60 motors ✓' },
        { difficulty: 'Medium', question: 'Gebruik die motordata (Januarie 50, Februarie 30, Maart 60, April 40), wat is die totale aantal motors verkoop oor die vier maande?', answer: '180', checkMode: 'auto', correctAnswer: '180', correctAnswers: ['180', '180 motors'], explanation: '50 + 30 + 60 + 40 = 180 motors ✓' },
        { difficulty: 'Medium', question: 'Gebruik die motordata (Januarie 50, Februarie 30, Maart 60, April 40), watter maand het die modus (hoogste verkope)?', answer: 'Maart', checkMode: 'auto', correctAnswer: 'Maart', correctAnswers: ['Maart', 'maart'], explanation: 'Maart het die meeste simbole (6) en die hoogste totaal (60 motors) ✓' },
        { difficulty: 'Easy', question: "'n Prentgrafiek wys 'n simbool wat 4 boeke werd is. As 2 volle simbole en 1 half simbool geteken word, hoeveel boeke verteenwoordig dit?", answer: '10', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10 boeke'], explanation: '2 volle simbole = 2 × 4 = 8. \'n Half simbool = die helfte van 4 = 2. 8 + 2 = 10 boeke ✓' },
        { difficulty: 'Medium', question: "'n Prentgrafiek wys 'n simbool wat 6 boeke werd is. As 2 volle simbole en 1 half simbool geteken word, hoeveel boeke verteenwoordig dit?", answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15 boeke'], explanation: '2 volle simbole = 2 × 6 = 12. \'n Half simbool = die helfte van 6 = 3. 12 + 3 = 15 boeke ✓' },
        { difficulty: 'Medium', question: "'n Prentgrafiek wys 'n simbool wat 8 boeke werd is. As 2 volle simbole en 1 half simbool geteken word, hoeveel boeke verteenwoordig dit?", answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 boeke'], explanation: '2 volle simbole = 2 × 8 = 16. \'n Half simbool = die helfte van 8 = 4. 16 + 4 = 20 boeke ✓' },
        { difficulty: 'Medium', question: "'n Prentgrafieksleutel is ★ = 2 leerders. 'n Kategorie het 9 leerders. Hoeveel simbole moet geteken word (skryf as 'n aantal volle simbole en 'n half, bv. \"4 en 'n half\")?", answer: "4 en 'n half", checkMode: 'auto', correctAnswer: "4 en 'n half", correctAnswers: ["4 en 'n half", '4.5', '4½', "4 en 'n half simbole", '4,5'], explanation: "9 ÷ 2 = 4,5, so teken 4 volle simbole (= 8 leerders) en 1 half simbool (= 1 leerder): 8 + 1 = 9 ✓" },
        { difficulty: 'Easy', question: "'n Prentgrafieksleutel is ★ = 3 leerders. 'n Kategorie het presies 9 leerders. Hoeveel volle simbole moet geteken word?", answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3 simbole'], explanation: "9 ÷ 3 = 3 volle simbole presies, geen half simbool nodig nie ✓" },
        { difficulty: 'Medium', question: "'n Prentgrafiek wys boeke gelees volgens graad. Elke simbool (📚) = 4 boeke. Graad 3: 6 simbole, Graad 4: 4 simbole, Graad 5: 7 simbole, Graad 6: 3 simbole. Hoeveel boeke het Graad 5 gelees?", answer: '28', checkMode: 'auto', correctAnswer: '28', correctAnswers: ['28', '28 boeke'], explanation: '7 × 4 = 28 boeke ✓' },
        { difficulty: 'Medium', question: 'Gebruik die boeke-per-graad-data (Graad 3: 24, Graad 4: 16, Graad 5: 28, Graad 6: 12), wat is die totale aantal boeke deur al vier grade gelees?', answer: '80', checkMode: 'auto', correctAnswer: '80', correctAnswers: ['80', '80 boeke'], explanation: '24 + 16 + 28 + 12 = 80 boeke ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die boeke-per-graad-data (Graad 3: 24, Graad 4: 16, Graad 5: 28, Graad 6: 12), hoeveel meer boeke het Graad 5 as Graad 6 gelees?', answer: '16', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16 boeke'], explanation: 'Graad 5 (28) − Graad 6 (12) = 16 meer boeke ✓' },
        { difficulty: 'Hard', question: "Verduidelik waarom 'n prentgrafieksleutel (soos ★ = 2 leerders) noodsaaklik is om die grafiek korrek te lees, en wat verkeerd kan gaan as jy dit ignoreer.", answer: "Die sleutel vertel jou wat een simbool werklik werd is. As jy nie die sleutel nagaan nie, kan jy aanneem dat elke simbool gelyk is aan 1, wat heeltemal verkeerde totale sal gee — byvoorbeeld, om 5 simbole as \"5 leerders\" te tel in plaas daarvan om korrek 5 × 2 = 10 leerders te bereken as die sleutel sê elke simbool is 2 werd. Lees altyd die sleutel voordat jy enige totale van 'n prentgrafiek bereken.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan prentgrafieke lees en die sleutel met selfvertroue gebruik om totale te bereken.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae oor die sleutel en half simbole weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug na die prentgrafieke-afdeling en probeer weer.' },
        { minScore: 0, message: 'Hou aan — lees weer deur die prentgrafieke-verduideliking en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 — STAAFGRAFIEKE: LEES, INTERPRETEER EN WOORDPROBLEME (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Staafgrafieke',
      questions: [
        { difficulty: 'Easy', question: "'n Staafgrafiek wys 'n troeteldieropname: Honde 14, Katte 10, Vis 6, Voëls 8. Watter troeteldier het die hoogste staaf?", answer: 'Honde', checkMode: 'auto', correctAnswer: 'Honde', correctAnswers: ['Honde', 'honde'], explanation: 'Honde het die hoogste waarde, 14, so dit het die hoogste staaf ✓' },
        { difficulty: 'Easy', question: 'Gebruik die troeteldieropname (Honde 14, Katte 10, Vis 6, Voëls 8), watter troeteldier het die laagste staaf?', answer: 'Vis', checkMode: 'auto', correctAnswer: 'Vis', correctAnswers: ['Vis', 'vis'], explanation: 'Vis het die laagste waarde, 6, so dit het die laagste staaf ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldieropname (Honde 14, Katte 10, Vis 6, Voëls 8), wat is die totale aantal leerders opgeneem?', answer: '38', checkMode: 'auto', correctAnswer: '38', correctAnswers: ['38', '38 leerders'], explanation: '14 + 10 + 6 + 8 = 38 leerders ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldieropname (Honde 14, Katte 10, Vis 6, Voëls 8), wat is die verskil tussen die hoogste en laagste staaf?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Honde (14) − Vis (6) = 8 ✓' },
        { difficulty: 'Medium', question: "'n Staafgrafiek wys daaglikse temperature: Maandag 22°C, Dinsdag 25°C, Woensdag 19°C, Donderdag 28°C, Vrydag 24°C. Watter dag was die warmste?", answer: 'Donderdag', checkMode: 'auto', correctAnswer: 'Donderdag', correctAnswers: ['Donderdag', 'donderdag'], explanation: 'Donderdag het die hoogste temperatuur gehad, 28°C ✓' },
        { difficulty: 'Medium', question: 'Gebruik die temperatuurdata (Maandag 22, Dinsdag 25, Woensdag 19, Donderdag 28, Vrydag 24), watter dag was die koelste?', answer: 'Woensdag', checkMode: 'auto', correctAnswer: 'Woensdag', correctAnswers: ['Woensdag', 'woensdag'], explanation: 'Woensdag het die laagste temperatuur gehad, 19°C ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die temperatuurdata (22, 25, 19, 28, 24), wat is die omvang (verskil tussen die hoogste en laagste temperatuur)?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9°C', '9 grade'], explanation: 'Hoogste (28) − Laagste (19) = 9°C ✓' },
        { difficulty: 'Medium', question: 'Gebruik die temperatuurdata (22, 25, 19, 28, 24), wat is die totaal van al vyf temperature?', answer: '118', checkMode: 'auto', correctAnswer: '118', correctAnswers: ['118'], explanation: '22 + 25 + 19 + 28 + 24 = 118 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die temperatuurdata (Maandag 22°C, Donderdag 28°C), hoeveel grade warmer was Donderdag as Maandag?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6°C', '6 grade'], explanation: '28 − 22 = 6°C ✓' },
        { difficulty: 'Easy', question: "'n Staafgrafiek wys geld ingesamel deur vier klasse: 4A het R450 ingesamel, 4B het R620 ingesamel, 4C het R380 ingesamel, 4D het R550 ingesamel. Watter klas het die meeste ingesamel?", answer: '4B', checkMode: 'auto', correctAnswer: '4B', correctAnswers: ['4B', '4b'], explanation: '4B het die meeste ingesamel, R620 ✓' },
        { difficulty: 'Easy', question: 'Gebruik die fondsinsamelingsdata (4A R450, 4B R620, 4C R380, 4D R550), watter klas het die minste ingesamel?', answer: '4C', checkMode: 'auto', correctAnswer: '4C', correctAnswers: ['4C', '4c'], explanation: '4C het die minste ingesamel, R380 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die fondsinsamelingsdata (4A R450, 4B R620, 4C R380, 4D R550), wat was die totale bedrag deur al vier klasse ingesamel?', answer: 'R2 000', checkMode: 'auto', correctAnswer: 'R2000', correctAnswers: ['R2000', 'R2 000', '2000', '2 000'], explanation: '450 + 620 + 380 + 550 = R2 000 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die fondsinsamelingsdata (4B R620, 4C R380), wat is die verskil tussen die bedrae wat 4B en 4C ingesamel het?', answer: 'R240', checkMode: 'auto', correctAnswer: 'R240', correctAnswers: ['R240', '240'], explanation: '620 − 380 = R240 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die fondsinsamelingsdata (totaal R2 000 deur 4 klasse ingesamel), wat was die gemiddelde bedrag per klas ingesamel?', answer: 'R500', checkMode: 'auto', correctAnswer: 'R500', correctAnswers: ['R500', '500'], explanation: '2 000 ÷ 4 = R500 ✓' },
        { difficulty: 'Medium', question: "'n Staafgrafiek wys doele aangeteken in 'n seisoen: Thabo 8, Sipho 12, Lerato 6, Amahle 10, Bongani 9. Wie het die meeste doele aangeteken?", answer: 'Sipho', checkMode: 'auto', correctAnswer: 'Sipho', correctAnswers: ['Sipho', 'sipho'], explanation: 'Sipho het die meeste aangeteken, 12 doele ✓' },
        { difficulty: 'Medium', question: 'Gebruik die doeledata (Thabo 8, Sipho 12, Lerato 6, Amahle 10, Bongani 9), wat is die totale aantal doele aangeteken?', answer: '45', checkMode: 'auto', correctAnswer: '45', correctAnswers: ['45', '45 doele'], explanation: '8 + 12 + 6 + 10 + 9 = 45 doele ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die doeledata (Sipho 12, Lerato 6), wat is die verskil tussen die hoogste en laagste doelaanteken?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Hoogste: Sipho (12). Laagste: Lerato (6). 12 − 6 = 6 ✓' },
        { difficulty: 'Medium', question: "'n Staafgrafiek se vertikale as gaan van 0 tot 15 in intervalle van 3 (0, 3, 6, 9, 12, 15). Watter waarde verteenwoordig elke intervalstap?", answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Elke stap van een getal na die volgende is 3, so elke interval verteenwoordig 3 ✓' },
        { difficulty: 'Easy', question: "'n Staafgrafiek se vertikale as is geskaal 0, 2, 4, 6, 8, 10. Watter waarde verteenwoordig elke interval?", answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'Die skaal styg elke keer met 2, so elke interval verteenwoordig 2 ✓' },
        { difficulty: 'Medium', question: "'n Staafgrafiek wys roomys verkoop: Vanielje 18, Sjokolade 24, Aarbei 12. Watter geursel is die modus (die meeste verkoop)?", answer: 'Sjokolade', checkMode: 'auto', correctAnswer: 'Sjokolade', correctAnswers: ['Sjokolade', 'sjokolade'], explanation: 'Sjokolade het die hoogste staaf, 24 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die roomysdata (Vanielje 18, Sjokolade 24, Aarbei 12), wat is die totale aantal roomyse verkoop?', answer: '54', checkMode: 'auto', correctAnswer: '54', correctAnswers: ['54'], explanation: '18 + 24 + 12 = 54 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die roomysdata (Sjokolade 24, Aarbei 12), hoeveel meer sjokoladeroomys is verkoop as aarbei?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: '24 − 12 = 12 meer sjokoladeroomys ✓' },
        { difficulty: 'Medium', question: "'n Staafgrafiek wys leerders se skoengroottes: Grootte 3 het 5 leerders, Grootte 4 het 9 leerders, Grootte 5 het 6 leerders. Wat is die modus skoengrootte?", answer: 'Grootte 4', checkMode: 'auto', correctAnswer: 'Grootte 4', correctAnswers: ['Grootte 4', 'grootte4', '4'], explanation: 'Grootte 4 het die meeste leerders (9), so dit is die modus ✓' },
        { difficulty: 'Medium', question: 'Gebruik die skoengrootte-data (Grootte 3: 5, Grootte 4: 9, Grootte 5: 6), hoeveel leerders is altesaam opgeneem?', answer: '20', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20 leerders'], explanation: '5 + 9 + 6 = 20 leerders ✓' },
        { difficulty: 'Hard', question: "Verduidelik waarom die skaal wat vir die vertikale as van 'n staafgrafiek gekies word, saak maak, deur 'n voorbeeld te gee van 'n skaal wat 'n swak keuse sou wees vir data wat van 0 tot 30 wissel.", answer: "Die skaal moet al die waardes netjies pas sonder dat die grafiek te hoog of te moeilik is om te lees. Vir data van 0 tot 30 sou 'n skaal wat in 1's tel (0, 1, 2, 3 …) 30 klein intervalle nodig hê, wat dit moeilik maak om die stawe te vergelyk en die grafiek baie hoog maak. 'n Beter skaal sou in 5's of 10's tel (bv. 0, 5, 10, 15, 20, 25, 30), wat die data netjies pas en die stawe maklik maak om te lees en te vergelyk.", checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan staafgrafieke met selfvertroue lees en interpreteer.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae oor vergelyking en berekening vanaf staafgrafieke weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug na die staafgrafieke-afdeling en probeer weer.' },
        { minScore: 0, message: 'Hou aan — lees weer deur die staafgrafieke-verduideliking en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 4 — VEELVOUDIGE-STAP ONTLEDING EN REDENERING (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Ontleding en Redenering',
      questions: [
        { difficulty: 'Medium', question: "'n Opname van 50 leerders het na hul gunstelingtroeteldier gevra: Hond 20, Kat 15, Vis 10, Voël 5. Watter breuk van leerders het Hond gekies? Vereenvoudig indien moontlik.", answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '20/50'], explanation: '20 uit 50 het Hond gekies. 20/50 — deel albei deur 10 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldierdata (Hond 20, Kat 15, Vis 10, Voël 5, totaal 50), watter breuk van leerders het Kat gekies? Vereenvoudig indien moontlik.', answer: '3/10', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '15/50'], explanation: '15 uit 50 het Kat gekies. 15/50 — deel albei deur 5 → 3/10 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die troeteldierdata (Hond 20, Voël 5), wat is die verskil tussen die aantal wat Hond gekies het en die aantal wat Voël gekies het?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15'], explanation: '20 − 5 = 15 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die troeteldierdata (Hond 20, Kat 15, Vis 10, Voël 5, totaal 50), watter breuk van leerders het NIE Hond gekies nie? Vereenvoudig indien moontlik.', answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '30/50'], explanation: 'Nie Hond nie = Kat + Vis + Voël = 15 + 10 + 5 = 30. 30/50 — deel albei deur 10 → 3/5 ✓' },
        { difficulty: 'Medium', question: "'n Opname van 40 leerders het gevra hoe hulle skool toe reis: Stap 16, Motor 10, Bus 8, Fiets 6. Watter breuk stap skool toe? Vereenvoudig indien moontlik.", answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '16/40'], explanation: '16 uit 40 stap. 16/40 — deel albei deur 8 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die vervoerdata (Stap 16, Motor 10, Bus 8, Fiets 6, totaal 40), watter breuk reis met \'n motor? Vereenvoudig indien moontlik.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4', '10/40'], explanation: "10 uit 40 reis met 'n motor. 10/40 — deel albei deur 10 → 1/4 ✓" },
        { difficulty: 'Hard', question: "Gebruik die vervoerdata (Stap 16, totaal 40), as 10 nuwe leerders by die klas aansluit en 6 van hulle stap skool toe, wat is die nuwe breuk van leerders wat stap? Vereenvoudig indien moontlik.", answer: '11/25', checkMode: 'auto', correctAnswer: '11/25', correctAnswers: ['11/25', '22/50'], explanation: 'Nuwe stappers: 16 + 6 = 22. Nuwe totaal: 40 + 10 = 50. 22/50 — deel albei deur 2 → 11/25 ✓' },
        { difficulty: 'Medium', question: "'n Klastoets is deur 40 leerders geskryf: 28 het geslaag en 12 het gedruip. Watter breuk van leerders het geslaag? Vereenvoudig indien moontlik.", answer: '7/10', checkMode: 'auto', correctAnswer: '7/10', correctAnswers: ['7/10', '28/40'], explanation: '28 uit 40 het geslaag. 28/40 — deel albei deur 4 → 7/10 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die toetsdata (28 geslaag, 12 gedruip, totaal 40), watter breuk van leerders het gedruip? Vereenvoudig indien moontlik.', answer: '3/10', checkMode: 'auto', correctAnswer: '3/10', correctAnswers: ['3/10', '12/40'], explanation: '12 uit 40 het gedruip. 12/40 — deel albei deur 4 → 3/10 ✓' },
        { difficulty: 'Medium', question: "'n Prentgrafiek en 'n staafgrafiek wys albei dieselfde data: boeke gelees deur Graad 4-leerders. Watter tipe grafiek sou beter wees om presiese waardes sonder enige half simbole te wys?", answer: 'Staafgrafiek', checkMode: 'auto', correctAnswer: 'Staafgrafiek', correctAnswers: ['Staafgrafiek', 'staafgrafiek'], explanation: "'n Staafgrafiek wys 'n presiese hoogte vir enige waarde, terwyl 'n prentgrafiek slegs waardes kan wys wat veelvoude van die sleutel is (anders is half simbole nodig) ✓" },
        { difficulty: 'Medium', question: "'n Frekwensietabel wys: Rooi 9, Blou 14, Groen 7. Wat is die modus kleur?", answer: 'Blou', checkMode: 'auto', correctAnswer: 'Blou', correctAnswers: ['Blou', 'blou'], explanation: 'Blou het die hoogste frekwensie, 14, so dit is die modus ✓' },
        { difficulty: 'Medium', question: 'Gebruik die kleurdata (Rooi 9, Blou 14, Groen 7), wat is die totale aantal leerders opgeneem?', answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30'], explanation: '9 + 14 + 7 = 30 ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die kleurdata (Rooi 9, Blou 14, Groen 7, totaal 30), watter breuk van leerders het Groen gekies? Vereenvoudig indien moontlik.', answer: '7/30', checkMode: 'auto', correctAnswer: '7/30', correctAnswers: ['7/30'], explanation: '7 uit 30 het Groen gekies. 7 en 30 deel geen gemeenskaplike faktor buiten 1 nie, so 7/30 is reeds vereenvoudig ✓' },
        { difficulty: 'Medium', question: "'n Opname van 60 leerders oor gunstelingdrankies: Sap 24, Water 20, Melk 16. Watter breuk het Sap gekies? Vereenvoudig indien moontlik.", answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '24/60'], explanation: '24 uit 60 het Sap gekies. 24/60 — deel albei deur 12 → 2/5 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die drankiedata (Sap 24, Water 20, Melk 16, totaal 60), wat is die verskil tussen die gewildste en minste gewilde drankie?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8'], explanation: 'Meeste: Sap (24). Minste: Melk (16). 24 − 16 = 8 ✓' },
        { difficulty: 'Hard', question: "'n Prentgrafieksleutel is ★ = 5 leerders en 'n staafgrafiek wys dieselfde data met 'n as geskaal in 1's. 'n Kategorie het 17 leerders. Verduidelik watter grafiek hierdie waarde duideliker sou voorstel en waarom.", answer: "Die staafgrafiek sou 17 duideliker voorstel, omdat sy as in eenhede van 1 geskaal is, sodat die staaf presies by 17 geteken kan word. Op die prentgrafiek, aangesien elke simbool gelyk is aan 5, sou 17 3 volle simbole (15) plus 2 meer nodig hê, wat nie 'n netjiese half simbool is nie ('n half simbool sou slegs 2,5 verteenwoordig) — dit maak dit lastig om 'n presiese waarde soos 17 met volle of half simbole te wys.", checkMode: 'self' },
        { difficulty: 'Medium', question: "'n Klas het data ingesamel oor die aantal broers en susters wat elke leerder het: 0 broers/susters — 6 leerders, 1 broer/suster — 12 leerders, 2 broers/susters — 8 leerders, 3 broers/susters — 4 leerders. Hoeveel leerders is altesaam opgeneem?", answer: '30', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30'], explanation: '6 + 12 + 8 + 4 = 30 ✓' },
        { difficulty: 'Medium', question: 'Gebruik die broers/susters-data (0: 6, 1: 12, 2: 8, 3: 4), wat is die modus aantal broers/susters?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', '1 broer of suster'], explanation: '12 leerders het 1 broer of suster — dit is die hoogste frekwensie, so 1 broer/suster is die modus ✓' },
        { difficulty: 'Medium-Hard', question: 'Gebruik die broers/susters-data (0: 6, 1: 12, 2: 8, 3: 4, totaal 30), watter breuk van leerders het 2 of meer broers/susters? Vereenvoudig indien moontlik.', answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '12/30'], explanation: '2 broers/susters (8) + 3 broers/susters (4) = 12. 12/30 — deel albei deur 6 → 2/5 ✓' },
        { difficulty: 'Medium', question: "'n Prentgrafiek wys 'n sleutel van ⚽ = 4 doele. 'n Span het 22 doele aangeteken. Hoeveel volle simbole en half simbole moet geteken word?", answer: "5 volle simbole en 'n half simbool", checkMode: 'auto', correctAnswer: "5 volle simbole en 'n half simbool", correctAnswers: ["5 volle simbole en 'n half simbool", "5 en 'n half", '5.5', '5,5', '5½'], explanation: '22 ÷ 4 = 5,5, so teken 5 volle simbole (= 20 doele) en 1 half simbool (= 2 doele): 20 + 2 = 22 ✓' },
        { difficulty: 'Medium', question: "'n Staafgrafiek vergelyk reënval in twee dorpe vir een maand: Dorp A 85mm, Dorp B 63mm. Wat is die verskil in reënval tussen die twee dorpe?", answer: '22mm', checkMode: 'auto', correctAnswer: '22mm', correctAnswers: ['22mm', '22'], explanation: '85 − 63 = 22mm ✓' },
        { difficulty: 'Medium', question: 'Gebruik die reënvaldata (Dorp A 85mm, Dorp B 63mm), wat is die gekombineerde totale reënval vir albei dorpe?', answer: '148mm', checkMode: 'auto', correctAnswer: '148mm', correctAnswers: ['148mm', '148'], explanation: '85 + 63 = 148mm ✓' },
        { difficulty: 'Medium-Hard', question: "'n Opname van 45 leerders wys dat 27 'n selfoon het en die res nie. Watter breuk het NIE 'n selfoon nie? Vereenvoudig indien moontlik.", answer: '2/5', checkMode: 'auto', correctAnswer: '2/5', correctAnswers: ['2/5', '18/45'], explanation: "Sonder 'n selfoon: 45 − 27 = 18. 18/45 — deel albei deur 9 → 2/5 ✓" },
        { difficulty: 'Medium', question: "Gebruik die selfoondata (27 het, 18 het nie, totaal 45), watter breuk van leerders het 'n selfoon? Vereenvoudig indien moontlik.", answer: '3/5', checkMode: 'auto', correctAnswer: '3/5', correctAnswers: ['3/5', '27/45'], explanation: "27 uit 45 het 'n selfoon. 27/45 — deel albei deur 9 → 3/5 ✓" },
        { difficulty: 'Hard', question: 'Kyk terug na enige datastel wat jy in hierdie onderwerp ontleed het. Skryf twee volledige sinne wat gevolgtrekkings uit daardie data beskryf, met spesifieke getalle (nie vae woorde soos "baie" of "nie veel nie").', answer: 'Antwoorde sal verskil na gelang van die gekose data. \'n Sterk antwoord noem die spesifieke kategorieë en getalle betrokke en maak \'n duidelike vergelyking — byvoorbeeld: "Blou was die gewildste kleur met 14 uit 30 leerders wat dit gekies het. Groen was die minste gewild, deur slegs 7 leerders gekies, wat 7 minder as Blou is." Maak seker jou sinne gebruik werklike getalle uit die data en maak \'n duidelike punt.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan datahanteringsvaardighede kombineer en duidelik oor resultate redeneer.' },
        { minScore: 19, message: 'Goeie werk! Gaan enige gemiste vrae oor breuke en vergelykings weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug na die afdeling oor data-ontleding en -interpretasie en probeer weer.' },
        { minScore: 0, message: 'Hou aan — lees weer deur die hele studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
