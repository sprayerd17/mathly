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
  topicPractice: [
    {
      difficulty: 'Easy' as const,
      question:
        "'n Klasopname het die gunstelingvrugte van leerders aangeteken. Appel: 6, Piesang: 9, Mango: 4, Lemoen: 5. Hoeveel leerders is altesaam opgeneem?",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'Totale aantal leerders opgeneem',
          correctAnswer: '24',
          explanation:
            'Tel al die waardes op: 6 + 9 + 4 + 5 = <strong style="color:#16a34a;">24</strong> leerders is opgeneem.',
        },
      ],
    },
    {
      difficulty: 'Easy' as const,
      question:
        "'n Klas het gestem vir hul gunstelingvakke. Wiskunde: 7, Engels: 8, Wetenskap: 5, Kuns: 4.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Watter vak was die gewildste?',
          correctAnswer: 'english',
          explanation:
            'Engels het die hoogste telling gehad: <strong style="color:#16a34a;">8 stemme</strong>.',
        },
        {
          label: 'b) Watter vak was die minste gewild?',
          correctAnswer: 'art',
          explanation:
            'Kuns het die laagste telling gehad: <strong style="color:#16a34a;">4 stemme</strong>.',
        },
        {
          label: 'c) Hoeveel meer leerders het Wiskunde as Wetenskap gekies?',
          correctAnswer: '2',
          explanation:
            'Wiskunde (7) − Wetenskap (5) = <strong style="color:#16a34a;">2</strong> meer leerders.',
        },
      ],
    },
    {
      difficulty: 'Medium' as const,
      question:
        "'n Opname van 30 leerders het gevra hoe hulle skool toe gaan. Stap: 12, Motor: 8, Bus: 5, Fiets: 5. Daar is 33 leerders in 'n ander klas; 15 van hulle stap skool toe.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Watter breuk van die eerste klas (30 leerders) stap skool toe? Vereenvoudig indien moontlik.',
          correctAnswer: '2/5',
          correctAnswers: ['2/5', '12/30'],
          explanation:
            '12 uit 30 stap. <strong>12/30</strong> — deel albei deur 6 → <strong style="color:#16a34a;">2/5</strong>.',
        },
        {
          label: 'b) Hoeveel leerders in die eerste klas stap NIE skool toe nie?',
          correctAnswer: '13',
          explanation:
            'Motor (8) + Bus (5) = <strong style="color:#16a34a;">13</strong> leerders stap nie.',
        },
        {
          label: 'c) Watter breuk van die tweede klas (33 leerders) stap skool toe? Vereenvoudig indien moontlik.',
          correctAnswer: '5/11',
          correctAnswers: ['5/11', '15/33'],
          explanation:
            '15 uit 33 stap. <strong>15/33</strong> — deel albei deur 3 → <strong style="color:#16a34a;">5/11</strong>.',
        },
      ],
    },
    {
      difficulty: 'Easy' as const,
      question:
        "'n Prentgrafiek wys leerders se gunstelingsport. Elke simbool (★) = 3 leerders. Sokker: ★★★★, Krieket: ★★, Rugby: ★★★, Swem: ★★★★★. Hoeveel leerders het Sokker gekies?",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'Aantal leerders wat Sokker gekies het',
          correctAnswer: '12',
          explanation:
            'Sokker het 4 simbole. <strong>4 × 3 = <span style="color:#16a34a;">12</span></strong> leerders.',
        },
      ],
    },
    {
      difficulty: 'Easy-Medium' as const,
      question:
        "'n Prentgrafiek wys boeke gelees verlede maand. Elke simbool (📚) = 4 boeke. Graad 3: 📚📚📚📚📚, Graad 4: 📚📚📚, Graad 5: 📚📚📚📚, Graad 6: 📚📚.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Hoeveel boeke het Graad 3 gelees?',
          correctAnswer: '20',
          explanation:
            'Graad 3 het 5 simbole. <strong>5 × 4 = <span style="color:#16a34a;">20</span></strong> boeke.',
        },
        {
          label: 'b) Hoeveel boeke het Graad 4 gelees?',
          correctAnswer: '12',
          explanation:
            'Graad 4 het 3 simbole. <strong>3 × 4 = <span style="color:#16a34a;">12</span></strong> boeke.',
        },
        {
          label: 'c) Hoeveel boeke is altesaam deur al vier grade gelees?',
          correctAnswer: '56',
          explanation:
            'Totale simbole: 5 + 3 + 4 + 2 = 14. <strong>14 × 4 = <span style="color:#16a34a;">56</span></strong> boeke.',
        },
      ],
    },
    {
      difficulty: 'Medium' as const,
      question:
        "'n Prentgrafiek wys boeke geleen by die biblioteek. Elke simbool (📖) = 2 boeke. Graad 4: 📖📖📖📖 en 'n half, Graad 5: 📖📖📖📖📖📖.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Hoeveel boeke het Graad 4 geleen? (Elke volle simbool = 2 boeke; half simbool = 1 boek)',
          correctAnswer: '9',
          correctAnswers: ['9books', '9', '9 books'],
          explanation:
            'Graad 4 het 4 volle simbole + 1 half simbool. <strong>4 × 2 + 1 = <span style="color:#16a34a;">9 boeke</span></strong>.',
        },
        {
          label: 'b) Graad 5 het 11 boeke geleen. Hoeveel simbole sou dit voorstel? Skryf jou antwoord in woorde.',
          correctAnswer: '5andahalfsymbols',
          correctAnswers: ['5andahalfsymbols', '5andahalf', '5 and a half', '5½', '5.5symbols', '5.5'],
          explanation:
            "11 ÷ 2 = <strong style=\"color:#16a34a;\">5 en 'n half simbole</strong> (5 volle simbole en 1 half simbool).",
        },
        {
          label: 'c) Watter graad het meer boeke geleen, en met hoeveel?',
          correctAnswer: 'grade5read3more',
          correctAnswers: ['grade5read3more', 'grade5readmore', 'grade5', '3more', 'grade5by3'],
          explanation:
            'Graad 5 het 6 simbole → 6 × 2 = 12 boeke. Graad 4 = 9 boeke. 12 − 9 = <strong style="color:#16a34a;">Graad 5 het 3 meer boeke geleen</strong>.',
        },
      ],
    },
    {
      difficulty: 'Easy' as const,
      question:
        "'n Staafgrafiek wys reënval in mm vir vier maande. Januarie: 40mm, Februarie: 60mm, Maart: 30mm, April: 50mm. Watter maand het die meeste reën gehad?",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'Maand met die meeste reënval',
          correctAnswer: 'february',
          explanation:
            'Februarie het <strong style="color:#16a34a;">60mm</strong> gehad, wat die hoogste waarde op die staafgrafiek is.',
        },
      ],
    },
    {
      difficulty: 'Medium' as const,
      question:
        "Gebruik dieselfde reënvaldata — Januarie: 40mm, Februarie: 60mm, Maart: 30mm, April: 50mm.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Watter maand het die minste reën gehad?',
          correctAnswer: 'march',
          explanation:
            'Maart het <strong style="color:#16a34a;">30mm</strong> gehad, die laagste staaf op die grafiek.',
        },
        {
          label: 'b) Wat was die totale reënval oor die vier maande?',
          correctAnswer: '180mm',
          correctAnswers: ['180mm', '180'],
          explanation:
            '40 + 60 + 30 + 50 = <strong style="color:#16a34a;">180mm</strong>.',
        },
        {
          label: 'c) Hoeveel meer reën het in Februarie as in Maart geval?',
          correctAnswer: '30mm',
          correctAnswers: ['30mm', '30'],
          explanation:
            '60 − 30 = <strong style="color:#16a34a;">30mm</strong> meer in Februarie.',
        },
        {
          label: 'd) Wat was die gemiddelde maandelikse reënval?',
          correctAnswer: '45mm',
          correctAnswers: ['45mm', '45'],
          explanation:
            'Totaal ÷ aantal maande = 180 ÷ 4 = <strong style="color:#16a34a;">45mm</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium' as const,
      question:
        "'n Staafgrafiek wys doele aangeteken in 'n seisoen. Thabo: 8, Sipho: 12, Lerato: 6, Amahle: 10, Bongani: 9.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Wie het die meeste doele aangeteken?',
          correctAnswer: 'sipho',
          explanation:
            'Sipho het <strong style="color:#16a34a;">12 doele</strong> aangeteken, die hoogste staaf.',
        },
        {
          label: 'b) Wat is die totale aantal doele aangeteken?',
          correctAnswer: '45',
          explanation:
            '8 + 12 + 6 + 10 + 9 = <strong style="color:#16a34a;">45</strong> doele.',
        },
        {
          label: 'c) Wat is die verskil tussen die hoogste en laagste doelaanteken?',
          correctAnswer: '6',
          explanation:
            'Hoogste: Sipho (12). Laagste: Lerato (6). 12 − 6 = <strong style="color:#16a34a;">6</strong>.',
        },
        {
          label: 'd) Die vertikale as gaan van 0 tot 15 in intervalle van 3. Watter waarde verteenwoordig elke interval?',
          correctAnswer: '3',
          explanation:
            'Elke intervalstap op die as verteenwoordig <strong style="color:#16a34a;">3</strong>.',
        },
      ],
    },
    {
      difficulty: 'Easy' as const,
      question:
        "'n Opname wys 20 leerders verkies somer en 12 verkies winter. Hoeveel meer leerders verkies somer?",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'Hoeveel meer leerders verkies somer',
          correctAnswer: '8',
          explanation:
            '20 − 12 = <strong style="color:#16a34a;">8</strong> meer leerders verkies somer.',
        },
      ],
    },
    {
      difficulty: 'Medium' as const,
      question:
        "'n Klasopname oor gunstelingvakke: Wiskunde 10, Wetenskap 6, Engels 8, Kuns 4, LO 12.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Watter vak is die gewildste?',
          correctAnswer: 'pe',
          explanation:
            'LO het <strong style="color:#16a34a;">12 stemme</strong>, die hoogste telling.',
        },
        {
          label: 'b) Watter breuk van leerders het Wiskunde gekies? Vereenvoudig indien moontlik.',
          correctAnswer: '1/4',
          correctAnswers: ['1/4', '10/40'],
          explanation:
            'Totale leerders: 10 + 6 + 8 + 4 + 12 = 40. Wiskunde: 10/40 — deel albei deur 10 → <strong style="color:#16a34a;">1/4</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium' as const,
      question:
        "'n Klasopname oor gunstelingvakke: Wiskunde 10, Wetenskap 6, Engels 8, Kuns 4, LO 12.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'c) Skryf een sin wat beskryf wat die data wys.',
          checkMode: 'self' as const,
          answer:
            'Enige geldige sin is aanvaarbaar. Byvoorbeeld: "LO is die gewildste vak met 12 stemme, terwyl Kuns die minste gewild is met slegs 4 stemme."',
        },
      ],
    },
    {
      difficulty: 'Medium-Hard' as const,
      question:
        "'n Opname van 40 leerders oor vervoer skool toe: Stap 16, Motor 10, Bus 8, Fiets 6.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'a) Watter breuk stap skool toe? Vereenvoudig indien moontlik.',
          correctAnswer: '2/5',
          correctAnswers: ['2/5', '16/40'],
          explanation:
            '16 uit 40 stap. 16/40 — deel albei deur 8 → <strong style="color:#16a34a;">2/5</strong>.',
        },
        {
          label: "b) Watter persentasie ry met 'n motor?",
          correctAnswer: '25%',
          correctAnswers: ['25%', '25'],
          explanation:
            "10 ÷ 40 × 100 = <strong style=\"color:#16a34a;\">25%</strong> ry met 'n motor.",
        },
        {
          label: 'c) As 10 nuwe leerders aansluit en 6 van hulle stap, wat is die nuwe breuk wat stap? Vereenvoudig indien moontlik.',
          correctAnswer: '11/25',
          correctAnswers: ['11/25', '22/50'],
          explanation:
            'Nuwe stappers: 16 + 6 = 22. Nuwe totaal: 40 + 10 = 50. 22/50 — deel albei deur 2 → <strong style="color:#16a34a;">11/25</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium' as const,
      question:
        "'n Opname van 40 leerders oor vervoer skool toe: Stap 16, Motor 10, Bus 8, Fiets 6.",
      answer: '',
      checkMode: 'auto' as const,
      parts: [
        {
          label: 'd) Skryf twee sinne wat die vervoerdata ontleed.',
          checkMode: 'self' as const,
          answer:
            'Enige twee geldige ontledende sinne is aanvaarbaar. Byvoorbeeld: "Stap is die algemeenste manier om skool toe te gaan, met 16 uit 40 leerders (40%) wat kies om te stap. Fietsry is die minste algemeen, met slegs 6 leerders (15%) wat per fiets reis."',
        },
      ],
    },
  ],
  scoreMessages: [
    { minScore: 31, message: 'Volpunte! Jy het Datahantering baasgeraak.' },
    { minScore: 24, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit baasraak.' },
    { minScore: 16, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0,  message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
