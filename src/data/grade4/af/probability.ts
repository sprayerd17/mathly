import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Waarskynlikheid',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — DIE TAAL VAN WAARSKYNLIKHEID
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'language-of-probability',
      title: 'Die Taal van Waarskynlikheid',
      icon: '🎲',
      explanation: `
<p style="margin-bottom:14px;"><strong>Waarskynlikheid</strong> vertel ons <strong>hoe waarskynlik dit is dat iets sal gebeur</strong>. Sommige dinge sal beslis gebeur, sommige dinge kan nooit gebeur nie, en sommige dinge is iewers tussenin. Ons gebruik spesiale woorde om elk van hierdie moontlikhede te beskryf.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Die waarskynlikheidskaal</div>
  <p style="color:#1e3a8a;font-size:15px;margin-bottom:10px;">Stel jou ʼn getallelyn voor wat van <strong style="color:#dc2626;">onmoontlik</strong> aan die linkerkant tot <strong style="color:#16a34a;">seker</strong> aan die regterkant strek. Elke gebeurtenis val iewers op hierdie skaal.</p>
  <div style="display:flex;align-items:center;gap:0;margin-bottom:8px;">
    <span style="color:#dc2626;font-weight:700;font-size:13px;flex-shrink:0;">Onmoontlik</span>
    <div style="flex:1;height:8px;background:linear-gradient(to right,#dc2626,#ea580c,#7c3aed,#1e40af,#16a34a);border-radius:4px;margin:0 10px;"></div>
    <span style="color:#16a34a;font-weight:700;font-size:13px;flex-shrink:0;">Seker</span>
  </div>
  <div style="display:flex;justify-content:space-between;font-size:12px;padding:0 4px;">
    <span style="color:#dc2626;font-weight:600;">0%</span>
    <span style="color:#ea580c;font-weight:600;">Onwaarskynlik</span>
    <span style="color:#7c3aed;font-weight:600;">Ewe waarskynlik</span>
    <span style="color:#1e40af;font-weight:600;">Waarskynlik</span>
    <span style="color:#16a34a;font-weight:600;">100%</span>
  </div>
</div>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">SEKER</span>
      <span style="color:#15803d;font-size:14px;font-weight:600;">sal beslis gebeur — 100% seker</span>
    </div>
    <p style="color:#166534;font-size:15px;margin-bottom:4px;">ʼn Gebeurtenis is <strong style="color:#16a34a;">seker</strong> wanneer dit <strong>onmoontlik is dat dit NIE sal gebeur nie</strong>. Daar is geen ander moontlike uitkoms nie.</p>
    <div style="background:#dcfce7;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">☀️</span>
      <span style="color:#166534;font-size:14px;"><strong>Voorbeeld:</strong> Die son sal môreoggend opkom. Dit is <strong style="color:#16a34a;">seker</strong> — dit gebeur elke enkele dag sonder mankement.</span>
    </div>
  </div>

  <div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">ONMOONTLIK</span>
      <span style="color:#dc2626;font-size:14px;font-weight:600;">kan nie gebeur nie — 0% kans</span>
    </div>
    <p style="color:#7f1d1d;font-size:15px;margin-bottom:4px;">ʼn Gebeurtenis is <strong style="color:#dc2626;">onmoontlik</strong> wanneer daar <strong>absoluut geen manier is dat dit kan gebeur nie</strong>. Maak nie saak wat jy doen nie, dit sal nie plaasvind nie.</p>
    <div style="background:#fee2e2;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🏔️</span>
      <span style="color:#7f1d1d;font-size:14px;"><strong>Voorbeeld:</strong> Dit sal vandag in die Sahara-woestyn sneeu. Dit is <strong style="color:#dc2626;">onmoontlik</strong> — die Sahara is een van die warmste plekke op Aarde.</span>
    </div>
  </div>

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">WAARSKYNLIK</span>
      <span style="color:#1e40af;font-size:14px;font-weight:600;">sal waarskynlik gebeur — meer waarskynlik as nie</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:4px;">ʼn Gebeurtenis is <strong style="color:#1e40af;">waarskynlik</strong> wanneer dit <strong>waarskynlik sal gebeur</strong>, maar dit is nie 100% gewaarborg nie. Dit gebeur meer dikwels as nie.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🌤️</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Voorbeeld:</strong> Dit sal warm wees in die somer. Dit is <strong style="color:#1e40af;">waarskynlik</strong> — somer is gewoonlik warm, alhoewel nie elke somersdag dieselfde is nie.</span>
    </div>
  </div>

  <div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#ea580c;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">ONWAARSKYNLIK</span>
      <span style="color:#ea580c;font-size:14px;font-weight:600;">sal waarskynlik nie gebeur nie — maar nie onmoontlik nie</span>
    </div>
    <p style="color:#7c2d12;font-size:15px;margin-bottom:4px;">ʼn Gebeurtenis is <strong style="color:#ea580c;">onwaarskynlik</strong> wanneer dit <strong>waarskynlik nie sal gebeur nie</strong>, maar daar is steeds ʼn klein kans dat dit kan. Dit is moontlik, net nie baie waarskynlik nie.</p>
    <div style="background:#ffedd5;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🎲</span>
      <span style="color:#7c2d12;font-size:14px;"><strong>Voorbeeld:</strong> Jy sal ʼn 6 gooi met jou heel eerste probeerslag. Dit is <strong style="color:#ea580c;">onwaarskynlik</strong> — ʼn dobbelsteen het 6 vlakke en net een daarvan is ʼn 6.</span>
    </div>
  </div>

  <div style="background:#faf5ff;border:1.5px solid #e9d5ff;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#7c3aed;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">EWE WAARSKYNLIK</span>
      <span style="color:#7c3aed;font-size:14px;font-weight:600;">twee uitkomste het presies dieselfde kans</span>
    </div>
    <p style="color:#4c1d95;font-size:15px;margin-bottom:4px;">Twee gebeurtenisse is <strong style="color:#7c3aed;">ewe waarskynlik</strong> wanneer hulle <strong>presies dieselfde kans het om te gebeur</strong> — geen uitkoms is meer waarskynlik as die ander nie.</p>
    <div style="background:#ede9fe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🪙</span>
      <span style="color:#4c1d95;font-size:14px;"><strong>Voorbeeld:</strong> Om ʼn regverdige muntstuk op te gooi gee kop of stert. Dit is <strong style="color:#7c3aed;">ewe waarskynlik</strong> — daar is ʼn 1 uit 2 kans vir elke uitkoms.</span>
    </div>
  </div>

</div>

<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:14px 18px;margin-bottom:4px;">
  <div style="font-size:13px;font-weight:700;color:#0f1f3d;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Vinnige opsomming</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#0f1f3d;">
          <th style="padding:8px 14px;text-align:left;color:#fff;font-weight:700;border-radius:6px 0 0 0;">Woord</th>
          <th style="padding:8px 14px;text-align:left;color:#fff;font-weight:700;">Betekenis</th>
          <th style="padding:8px 14px;text-align:left;color:#fff;font-weight:700;border-radius:0 6px 0 0;">Werklike-lewe voorbeeld</th>
        </tr>
      </thead>
      <tbody>
        <tr style="background:#f0fdf4;">
          <td style="padding:8px 14px;font-weight:700;color:#16a34a;">Seker</td>
          <td style="padding:8px 14px;color:#166534;">Sal beslis gebeur</td>
          <td style="padding:8px 14px;color:#166534;">Die son sal môre opkom</td>
        </tr>
        <tr style="background:#fef2f2;">
          <td style="padding:8px 14px;font-weight:700;color:#dc2626;">Onmoontlik</td>
          <td style="padding:8px 14px;color:#7f1d1d;">Kan nie gebeur nie</td>
          <td style="padding:8px 14px;color:#7f1d1d;">Sneeu in die Sahara-woestyn vandag</td>
        </tr>
        <tr style="background:#eff6ff;">
          <td style="padding:8px 14px;font-weight:700;color:#1e40af;">Waarskynlik</td>
          <td style="padding:8px 14px;color:#1e3a8a;">Sal waarskynlik gebeur</td>
          <td style="padding:8px 14px;color:#1e3a8a;">Dit sal warm wees in die somer</td>
        </tr>
        <tr style="background:#fff7ed;">
          <td style="padding:8px 14px;font-weight:700;color:#ea580c;">Onwaarskynlik</td>
          <td style="padding:8px 14px;color:#7c2d12;">Sal waarskynlik nie gebeur nie</td>
          <td style="padding:8px 14px;color:#7c2d12;">ʼn 6 gooi met jou eerste probeerslag</td>
        </tr>
        <tr style="background:#faf5ff;">
          <td style="padding:8px 14px;font-weight:700;color:#7c3aed;border-radius:0 0 0 6px;">Ewe waarskynlik</td>
          <td style="padding:8px 14px;color:#4c1d95;">Dieselfde kans vir twee uitkomste</td>
          <td style="padding:8px 14px;color:#4c1d95;border-radius:0 0 6px 0;">ʼn Muntstuk opgooi — kop of stert</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Klassifiseer elke gebeurtenis as seker, onmoontlik, waarskynlik, onwaarskynlik of ewe waarskynlik:\na) ʼn Getal kleiner as 7 gooi op ʼn standaard dobbelsteen\nb) ʼn 7 gooi op ʼn standaard dobbelsteen\nc) Dit sal vandag iewers in Suid-Afrika reën\nd) Jy sal ʼn 3 gooi met jou eerste gooi\ne) ʼn Muntstuk opgooi en kop kry',
          answer:
            'a) Seker  b) Onmoontlik  c) Waarskynlik  d) Onwaarskynlik  e) Ewe waarskynlik',
          steps: [
            '<strong>a) ʼn Getal kleiner as 7 gooi op ʼn standaard dobbelsteen</strong> — <strong style="color:#16a34a;">Seker</strong>. ʼn Standaard dobbelsteen het die getalle 1, 2, 3, 4, 5 en 6. Elke enkele getal op die dobbelsteen is kleiner as 7, so dit sal altyd gebeur.',
            '<strong>b) ʼn 7 gooi op ʼn standaard dobbelsteen</strong> — <strong style="color:#dc2626;">Onmoontlik</strong>. ʼn Standaard dobbelsteen het net getalle 1 tot 6. Daar is geen 7 op die dobbelsteen nie, so dit kan nooit gebeur nie.',
            '<strong>c) Dit sal vandag iewers in Suid-Afrika reën</strong> — <strong style="color:#1e40af;">Waarskynlik</strong>. Suid-Afrika is ʼn groot land met baie verskillende weerstreke. Dit reën byna altyd iewers in die land op enige gegewe dag, maar dit is nie 100% gewaarborg nie.',
            '<strong>d) Jy sal ʼn 3 gooi met jou eerste gooi</strong> — <strong style="color:#ea580c;">Onwaarskynlik</strong>. Daar is 6 vlakke op ʼn dobbelsteen en net een daarvan is ʼn 3. Die kans is klein, maar dit is steeds moontlik.',
            '<strong>e) ʼn Muntstuk opgooi en kop kry</strong> — <strong style="color:#7c3aed;">Ewe waarskynlik</strong>. ʼn Regverdige muntstuk het presies twee kante — kop en stert. Elkeen het dieselfde kans om na bo te val, so die twee uitkomste is ewe waarskynlik.',
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'ʼn Waarskynlikheidskaal van onmoontlik aan die linkerkant tot seker aan die regterkant met ewe waarskynlik in die middel en waarskynlik en onwaarskynlik tussenin gemerk',
      videoPlaceholder:
        'Kort video wat waarskynlikheidstaal verduidelik met werklike-lewe voorbeelde — seker onmoontlik waarskynlik onwaarskynlik en ewe waarskynlik',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — LYS UITKOMSTE VAN EKSPERIMENTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'listing-outcomes',
      title: 'Lys Uitkomste van Eksperimente',
      icon: '📋',
      explanation: `
<p style="margin-bottom:14px;">Wanneer ons ʼn waarskynlikheidseksperiment doen — soos ʼn dobbelsteen gooi of ʼn muntstuk opgooi — moet ons weet <strong>alles wat kan gebeur</strong>. Elke moontlike resultaat word ʼn <strong style="color:#1e40af;">uitkoms</strong> genoem. Om elke uitkoms te lys help ons om waarskynlikheid uit te werk.</p>

<div style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;">

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">EKSPERIMENT</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:6px;">ʼn <strong>Eksperiment</strong> is ʼn aktiwiteit waar ons waarneem wat gebeur en die resultaat aanteken. Die resultaat is nie altyd elke keer dieselfde nie.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🎲</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Voorbeelde:</strong> ʼn dobbelsteen gooi, ʼn muntstuk opgooi, ʼn wieletjie draai, ʼn albaster uit ʼn sak kies.</span>
    </div>
  </div>

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">UITKOMS</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:6px;">ʼn <strong style="color:#1e40af;">Uitkoms</strong> is <strong>een moontlike resultaat</strong> van ʼn eksperiment. Ons lys alle uitkomste sodat niks uitgelaat word nie.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🪙</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Voorbeeld:</strong> Wanneer jy ʼn muntstuk opgooi, is die <strong style="color:#1e40af;">uitkomste</strong> <strong style="color:#1e40af;">Kop</strong> en <strong style="color:#1e40af;">Stert</strong>.</span>
    </div>
  </div>

  <div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">GEBEURTENIS</span>
    </div>
    <p style="color:#1e3a8a;font-size:15px;margin-bottom:6px;">ʼn <strong>Gebeurtenis</strong> is <strong>een of meer uitkomste waarin ons belangstel</strong>. Dit is die resultaat waaroor ons vra.</p>
    <div style="background:#dbeafe;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🎯</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Voorbeeld:</strong> Wanneer jy ʼn dobbelsteen gooi, sluit die gebeurtenis "ʼn ewe getal gooi" die uitkomste 2, 4 en 6 in.</span>
    </div>
  </div>

  <div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:14px 18px;">
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:6px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 12px;font-weight:700;font-size:13px;letter-spacing:.04em;">GUNSTIGE UITKOMS</span>
    </div>
    <p style="color:#166534;font-size:15px;margin-bottom:6px;">ʼn <strong style="color:#16a34a;">Gunstige uitkoms</strong> is <strong>die uitkoms wat ons wil hê moet gebeur</strong>. Ons tel hoeveel gunstige uitkomste daar is uit al die totale uitkomste.</p>
    <div style="background:#dcfce7;border-radius:8px;padding:8px 14px;display:flex;align-items:center;gap:8px;">
      <span style="font-size:18px;">🟢</span>
      <span style="color:#166534;font-size:14px;"><strong>Voorbeeld:</strong> Uit ʼn sak met rooi en blou albasters, as ons rooi wil hê, dan is rooi die <strong style="color:#16a34a;">gunstige uitkoms</strong>.</span>
    </div>
  </div>

</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:4px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Sleutelwoorde op ʼn oogopslag</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Eksperiment</span>
      <span style="color:#1e3a8a;font-size:14px;">Die aktiwiteit wat ons uitvoer — bv. ʼn dobbelsteen gooi.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Uitkoms</span>
      <span style="color:#1e3a8a;font-size:14px;">Een moontlike resultaat — bv. ʼn 4 gooi.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#0f1f3d;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Gebeurtenis</span>
      <span style="color:#1e3a8a;font-size:14px;">Die resultaat waaroor ons vra — bv. ʼn ewe getal gooi.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#16a34a;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">Gunstig</span>
      <span style="color:#1e3a8a;font-size:14px;">Die uitkoms(te) wat ons wil hê — getel teenoor die <strong style="color:#dc2626;">totale uitkomste</strong>.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Lys alle moontlike uitkomste wanneer ʼn standaard dobbelsteen gegooi word.',
          answer: 'Uitkomste: 1, 2, 3, 4, 5, 6 — Totale uitkomste: 6',
          steps: [
            'ʼn Standaard dobbelsteen is ʼn kubus met <strong>6 vlakke</strong>. Elke vlak wys ʼn ander getal.',
            'Ons lys elke getal wat na bo kan val: <strong style="color:#1e40af;">1, 2, 3, 4, 5, 6</strong>.',
            'Tel dit op: daar is <strong style="color:#dc2626;">6 totale uitkomste</strong>.',
            'Elke gooi moet een van hierdie ses resultate gee — geen ander uitkoms is moontlik nie.',
          ],
        },
        {
          question: 'Lys alle moontlike uitkomste wanneer ʼn muntstuk opgegooi word.',
          answer: 'Uitkomste: Kop, Stert — Totale uitkomste: 2',
          steps: [
            'ʼn Regverdige muntstuk het presies <strong>2 kante</strong> — ʼn kop-kant en ʼn stert-kant.',
            'Wanneer jy dit opgooi, kan net een kant na bo val.',
            'So die uitkomste is: <strong style="color:#1e40af;">Kop</strong> en <strong style="color:#1e40af;">Stert</strong>.',
            'Daar is <strong style="color:#dc2626;">2 totale uitkomste</strong>.',
          ],
        },
        {
          question:
            'ʼn Sak het 3 rooi albasters en 2 blou albasters. Lys alle moontlike uitkomste wanneer een albaster gekies word.',
          answer:
            'Uitkomste: Rooi, Blou — Gunstige uitkomste vir rooi: 3 uit 5 — Gunstige uitkomste vir blou: 2 uit 5',
          steps: [
            'Wanneer jy in die sak inreik en een albaster kies, sal dit óf rooi óf blou wees — dit is die enigste twee kleure.',
            'So die uitkomste is: <strong style="color:#1e40af;">Rooi</strong> en <strong style="color:#1e40af;">Blou</strong>.',
            'Totale aantal albasters in die sak: 3 + 2 = <strong style="color:#dc2626;">5 totale uitkomste</strong>.',
            'As ons ʼn rooi albaster wil hê: daar is <strong style="color:#16a34a;">3 gunstige uitkomste</strong> (3 rooi albasters) uit 5.',
            'As ons ʼn blou albaster wil hê: daar is <strong style="color:#16a34a;">2 gunstige uitkomste</strong> (2 blou albasters) uit 5.',
          ],
        },
        {
          question:
            'Lys alle moontlike uitkomste wanneer ʼn wieletjie met afdelings genommer 1 tot 4 gedraai word.',
          answer:
            'Uitkomste: 1, 2, 3, 4 — Totale uitkomste: 4 — Gunstige uitkomste vir ʼn ewe getal: 2 uit 4',
          steps: [
            'Die wieletjie het <strong>4 gelyke afdelings</strong> genommer 1, 2, 3 en 4.',
            'Wanneer jy dit draai, sal die wyser op een van hierdie vier afdelings land.',
            'So die uitkomste is: <strong style="color:#1e40af;">1, 2, 3, 4</strong> — daar is <strong style="color:#dc2626;">4 totale uitkomste</strong>.',
            'Die gebeurtenis "land op ʼn ewe getal" beteken ons wil 2 of 4 hê.',
            'Ewe getalle op die wieletjie: <strong style="color:#16a34a;">2</strong> en <strong style="color:#16a34a;">4</strong> — so daar is <strong style="color:#16a34a;">2 gunstige uitkomste</strong> uit 4.',
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Drie eksperimentdiagramme langs mekaar — ʼn dobbelsteen wat vlakke 1 tot 6 wys, ʼn muntstuk wat kop en stert wys, en ʼn wieletjie verdeel in 4 gelyke afdelings genommer 1 tot 4',
      videoPlaceholder:
        'Kort video wat wys hoe om alle moontlike uitkomste te lys vir eenvoudige waarskynlikheidseksperimente soos ʼn dobbelsteen gooi ʼn muntstuk opgooi en ʼn wieletjie draai',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — EENVOUDIGE WAARSKYNLIKHEIDSEKSPERIMENTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'simple-probability-experiments',
      title: 'Eenvoudige Waarskynlikheidseksperimente',
      icon: '🧪',
      explanation: `
<p style="margin-bottom:14px;">Ons kan werklik waarskynlikheidseksperimente <strong>doen</strong> om ons voorspellings te toets. Voordat ons begin, maak ons ʼn <strong style="color:#ea580c;">voorspelling</strong> — ʼn skatting van wat ons dink sal gebeur. Na die eksperiment kyk ons na die <strong style="color:#1e40af;">werklike resultate</strong> en vergelyk hulle. Die twee stem nie altyd presies ooreen nie, en dit is heeltemal normaal!</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Hoe om ʼn waarskynlikheidseksperiment uit te voer</div>
  <div style="display:flex;flex-direction:column;gap:10px;">

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">1</span>
      <div style="padding-top:2px;">
        <strong style="color:#ea580c;">Besluit oor die eksperiment</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Kies wat jy gaan doen — byvoorbeeld, ʼn muntstuk opgooi of ʼn dobbelsteen gooi.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">2</span>
      <div style="padding-top:2px;">
        <strong style="color:#ea580c;">Maak ʼn voorspelling</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Voordat jy begin, skryf neer wat jy <strong style="color:#ea580c;">voorspel</strong> (verwag) sal gebeur, gebaseer op gelyke kanse.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">3</span>
      <div style="padding-top:2px;">
        <strong style="color:#1e40af;">Doen die eksperiment en teken resultate aan</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Voer die eksperiment uit en gebruik <strong>telmerke</strong> om elke <strong style="color:#1e40af;">werklike resultaat</strong> aan te teken soos dit gebeur.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">4</span>
      <div style="padding-top:2px;">
        <strong style="color:#1e40af;">Tel die resultate</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Tel jou telmerke op om die totale <strong style="color:#1e40af;">werklike resultate</strong> vir elke uitkoms te vind.</p>
      </div>
    </div>

    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;">5</span>
      <div style="padding-top:2px;">
        <strong style="color:#dc2626;">Vergelyk voorspelde en werklike resultate</strong>
        <p style="color:#1e3a8a;font-size:14px;margin-top:2px;">Kyk na die <strong style="color:#dc2626;">verskil</strong> tussen jou <strong style="color:#ea580c;">voorspelling</strong> en die <strong style="color:#1e40af;">werklike resultaat</strong>. Is hulle naby aan mekaar?</p>
      </div>
    </div>

  </div>
</div>

<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 18px;margin-bottom:4px;">
  <div style="font-size:13px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:.05em;margin-bottom:8px;">Belangrik om te onthou</div>
  <div style="display:flex;flex-direction:column;gap:6px;">
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#ea580c;font-size:16px;flex-shrink:0;">→</span>
      <span style="color:#7c2d12;font-size:14px;">Voorspellings is gebaseer op gelyke kanse — hulle vertel ons wat ons <em>verwag</em>, nie wat <em>beslis</em> sal gebeur nie.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#1e40af;font-size:16px;flex-shrink:0;">→</span>
      <span style="color:#7c2d12;font-size:14px;"><strong style="color:#1e40af;">Werklike resultate</strong> kan elke keer anders wees as die eksperiment gedoen word as die voorspelling.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:8px;">
      <span style="color:#dc2626;font-size:16px;flex-shrink:0;">→</span>
      <span style="color:#7c2d12;font-size:14px;">Hoe <strong style="color:#dc2626;">meer proewe</strong> jy doen, hoe nader sal jou werklike resultate aan die voorspelling kom.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'ʼn Muntstuk word 20 keer opgegooi. Voordat jy opgooi, voorspel hoeveel koppe en sterte jy verwag. Vergelyk dan met ʼn moontlike werklike resultaat.',
          answer:
            'Voorspelling: 10 koppe en 10 sterte — Moontlike werklike resultaat: Koppe 12, Sterte 8',
          steps: [
            '<strong>Stap 1 — Besluit oor die eksperiment:</strong> Gooi ʼn muntstuk 20 keer op en teken aan of elke gooi op Kop of Stert land.',
            '<strong>Stap 2 — Maak ʼn voorspelling:</strong> ʼn Muntstuk het 2 ewe waarskynlike uitkomste. Helfte van 20 = 10. <strong style="color:#ea580c;">Voorspelling: 10 Koppe en 10 Sterte.</strong>',
            '<strong>Stap 3 — Teken resultate aan met telmerke:</strong> Elke keer as die muntstuk op Kop land, voeg ʼn telmerk onder Koppe by. Elke keer as dit op Stert land, voeg een onder Sterte by.',
            '<strong>Stap 4 — Tel die resultate:</strong> Na 20 opgooie, veronderstel die tellings wys <strong style="color:#1e40af;">Koppe: 12, Sterte: 8</strong>.',
            '<strong>Stap 5 — Vergelyk:</strong> <strong style="color:#ea580c;">Voorspelde</strong> Koppe = 10, <strong style="color:#1e40af;">Werklike</strong> Koppe = 12 — <strong style="color:#dc2626;">verskil van 2</strong>. Dit is normaal! Die werklike resultate stem nie altyd presies ooreen met die voorspelling nie. Hoe meer keer jy die muntstuk opgooi, hoe nader kom die resultate aan 10 en 10.',
          ],
        },
        {
          question:
            'ʼn Dobbelsteen word 12 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn 3 gegooi word?',
          answer: 'Voorspelling: ʼn 3 gooi ongeveer 2 keer uit 12 gooie',
          steps: [
            '<strong>Stap 1 — Lys uitkomste:</strong> ʼn Standaard dobbelsteen het 6 moontlike uitkomste: 1, 2, 3, 4, 5, 6.',
            '<strong>Stap 2 — Identifiseer die gunstige uitkoms:</strong> Ons wil ʼn 3 gooi. Dit is <strong>1 uit 6</strong> uitkomste.',
            '<strong>Stap 3 — Bereken die voorspelling:</strong> As ons 12 keer gooi, deel ons gelyk: 12 ÷ 6 = <strong style="color:#ea580c;">2 keer</strong>.',
            '<strong style="color:#ea580c;">Voorspelling: ʼn 3 gooi ongeveer 2 keer uit 12 gooie.</strong> Onthou — dit is wat ons verwag. Die werklike resultaat kan 1 keer, 3 keer, of selfs 0 keer wees.',
          ],
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'ʼn Resultatetabel wat ʼn muntstuk-opgooi-eksperiment met 20 proewe wys, kolomme vir kop- en stert-telmerke en totale wat die voorspelling van 10 elk vergelyk met werklike resultate',
      videoPlaceholder:
        'Kort video wat wys hoe om ʼn eenvoudige waarskynlikheidseksperiment uit te voer, resultate aan te teken en voorspelde uitkomste met werklike uitkomste te vergelyk',
    },
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — VERGELYK VOORSPELDE EN WERKLIKE UITKOMSTE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-predicted-actual',
      title: 'Vergelyk Voorspelde en Werklike Uitkomste',
      icon: '📊',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong style="color:#ea580c;">Voorspelling</strong> is gebaseer op ewe waarskynlike uitkomste — dit is ʼn redelike skatting van wat <em>behoort</em> te gebeur. Maar die <strong style="color:#1e40af;">werklike resultate</strong> van ʼn eksperiment kan elke keer anders wees. Dit beteken nie jou voorspelling was verkeerd nie — dit beteken bloot dat kans nie altyd ʼn perfekte patroon volg in ʼn klein aantal proewe nie.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:10px;">Die sleutelidees</div>
  <div style="display:flex;flex-direction:column;gap:8px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#ea580c;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">VOORSPELLING</span>
      <span style="color:#1e3a8a;font-size:14px;">Gebaseer op ewe waarskynlike uitkomste. Dit is wat ons <em>verwag</em> om te gebeur as elke uitkoms ʼn regverdige kans het.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">WERKLIKE RESULTAAT</span>
      <span style="color:#1e3a8a;font-size:14px;">Wat werklik tydens die eksperiment gebeur het. Dit kan elke keer anders wees.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:5px;padding:1px 9px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:2px;">VERSKIL</span>
      <span style="color:#1e3a8a;font-size:14px;">Hoe ver uitmekaar die voorspelling en werklike resultaat is. ʼn Klein verskil beteken die eksperiment het naby aan die verwagtings ooreengestem.</span>
    </div>
    <div style="background:#dbeafe;border-radius:8px;padding:10px 14px;margin-top:4px;display:flex;align-items:flex-start;gap:8px;">
      <span style="font-size:16px;flex-shrink:0;">💡</span>
      <span style="color:#1e3a8a;font-size:14px;"><strong>Hoe meer proewe jy doen, hoe nader kom die werklike resultate aan die voorspelling.</strong> Dit is een van die belangrikste idees in waarskynlikheid.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Thabo voorspel dat hy ʼn ewe getal 15 keer uit 30 gooie van ʼn dobbelsteen sal gooi. Hy gooi werklik ʼn ewe getal 17 keer.\na) Was sy voorspelling redelik?\nb) Is 17 naby aan 15?\nc) Sal die resultate elke keer presies 15 wees?',
          answer: 'a) Ja  b) Ja — slegs 2 meer as voorspel  c) Nee',
          steps: [
            '<strong>a) Was sy voorspelling redelik?</strong> Ewe getalle op ʼn dobbelsteen is 2, 4 en 6 — dit is <strong>3 uit 6</strong> uitkomste, wat presies die helfte is. Helfte van 30 gooie = <strong style="color:#ea580c;">15</strong>. So ja, <strong style="color:#ea580c;">15 is ʼn baie redelike voorspelling</strong>.',
            '<strong>b) Is 17 naby aan 15?</strong> Die <strong style="color:#dc2626;">verskil</strong> is 17 − 15 = <strong style="color:#dc2626;">2</strong>. Dit is klein in vergelyking met 30 gooie. Die <strong style="color:#1e40af;">werklike resultaat van 17</strong> is naby aan die voorspelling — dit is ʼn normale variasie.',
            '<strong>c) Sal die resultate elke keer presies 15 wees?</strong> Nee. Elke keer as Thabo die eksperiment herhaal, sal die werklike resultaat verskil. Hy mag 14, 16, 17 of selfs 12 kry. Die resultaat word <em>nooit gewaarborg</em> om presies 15 te wees nie, maar dit behoort <em>naby</em> aan 15 te wees die meeste van die tyd.',
          ],
        },
        {
          question:
            'ʼn Sak het 4 rooi albasters en 1 blou albaster. Jy kies ʼn albaster 20 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat rooi gekies word?',
          answer: 'Voorspelling: Rooi word ongeveer 16 keer uit 20 gekies',
          steps: [
            '<strong>Stap 1 — Tel die albasters:</strong> Rooi = 4, Blou = 1. Totaal = <strong style="color:#dc2626;">5 albasters</strong>.',
            '<strong>Stap 2 — Vind die breuk vir rooi:</strong> Rooi is <strong style="color:#16a34a;">4 uit 5</strong> albasters.',
            '<strong>Stap 3 — Pas toe op 20 proewe:</strong> Vermenigvuldig die breuk met die aantal proewe: 4/5 × 20 = <strong style="color:#ea580c;">16</strong>.',
            '<strong style="color:#ea580c;">Voorspelling: Rooi sal ongeveer 16 keer uit 20 gekies word.</strong> Blou word ongeveer 4 keer verwag. Omdat rooi soveel meer algemeen is, is die kies van rooi <strong style="color:#1e40af;">waarskynlik</strong> by byna elke keuse.',
          ],
        },
      ],
      practiceQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om ʼn eenvoudige waarskynlikheidseksperiment uit te voer, resultate aan te teken en voorspelde uitkomste met werklike uitkomste te vergelyk',
    },
  ],
  topicPractice: [
    {
      difficulty: 'Easy',
      question:
        'Klassifiseer elke gebeurtenis met een van hierdie woorde: seker, onmoontlik, waarskynlik, onwaarskynlik, of ewe waarskynlik.',
      answer: 'a) Seker  b) Onwaarskynlik  c) Ewe waarskynlik',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) ʼn Getal tussen 1 en 6 gooi op ʼn standaard dobbelsteen',
          correctAnswer: 'seker',
          explanation:
            'ʼn Standaard dobbelsteen het getalle 1, 2, 3, 4, 5 en 6. Elke enkele getal op die dobbelsteen is tussen 1 en 6, so dit sal altyd gebeur — dit is <strong style="color:#16a34a;">seker</strong>.',
        },
        {
          label: 'b) Dit sal in Julie in Kaapstad sneeu',
          correctAnswer: 'onwaarskynlik',
          explanation:
            'Kaapstad is koud en reënerig in Julie, maar sneeu is baie skaars. Dit is moontlik maar gebeur gewoonlik nie — dit is <strong style="color:#ea580c;">onwaarskynlik</strong>.',
        },
        {
          label: 'c) ʼn Muntstuk opgooi en stert kry',
          correctAnswer: 'ewe waarskynlik',
          explanation:
            'ʼn Regverdige muntstuk het twee kante — kop en stert. Elkeen het presies dieselfde kans om na bo te val — dit is <strong style="color:#7c3aed;">ewe waarskynlik</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question:
        'Klassifiseer elke gebeurtenis en verduidelik jou redenasie.\na) ʼn Baba sal vandag iewers in Suid-Afrika gebore word\nb) Jy sal ʼn 6 gooi met jou eerste gooi van ʼn dobbelsteen\nc) ʼn Rooi kaart kies uit ʼn standaard pak kaarte',
      answer:
        'a) Seker — babas word elke dag oral in Suid-Afrika gebore sonder mankement, so dit is gewaarborg om te gebeur.\nb) Onwaarskynlik — ʼn dobbelsteen het 6 moontlike uitkomste en net een daarvan is 6, so die kans is klein maar nie onmoontlik nie.\nc) Ewe waarskynlik — presies die helfte van die kaarte in ʼn standaard pak (26 uit 52) is rooi, wat dieselfde kans gee as om ʼn nie-rooi kaart te trek.',
      checkMode: 'self',
    },
    {
      difficulty: 'Hard',
      question:
        'Thabo sê om ʼn onewe getal op ʼn dobbelsteen te gooi is seker. Lerato sê dit is ewe waarskynlik. Wie is korrek en waarom?',
      answer:
        'Lerato is korrek. ʼn Standaard dobbelsteen het 6 getalle: 1, 2, 3, 4, 5, 6. Daar is 3 onewe getalle (1, 3, 5) en 3 ewe getalle (2, 4, 6). Om onewe of ewe te gooi het elkeen 3 kanse uit 6, so die twee uitkomste is ewe waarskynlik. "Seker" beteken die gebeurtenis sal altyd gebeur — ʼn onewe getal gooi gebeur nie altyd nie, so dit kan nie seker wees nie.',
      checkMode: 'self',
    },
    {
      difficulty: 'Easy',
      question: 'Lys alle moontlike uitkomste wanneer ʼn muntstuk opgegooi word.',
      answer: 'Kop en Stert',
      checkMode: 'auto',
      correctAnswer: 'headstails',
      correctAnswers: ['headstails', 'headsandtails'],
      explanation:
        'ʼn Muntstuk het presies twee kante. Die twee moontlike uitkomste is <strong style="color:#1e40af;">Kop</strong> en <strong style="color:#1e40af;">Stert</strong> — daar is geen ander resultate nie.',
    },
    {
      difficulty: 'Medium',
      question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5.',
      answer: 'a) 1, 2, 3, 4, 5  b) 5  c) 1, 3, 5',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Lys alle moontlike uitkomste.',
          correctAnswer: '12345',
          explanation:
            'Die wieletjie het 5 afdelings. Die moontlike uitkomste is <strong style="color:#1e40af;">1, 2, 3, 4, 5</strong>.',
        },
        {
          label: 'b) Hoeveel totale uitkomste is daar?',
          correctAnswer: '5',
          explanation:
            'Daar is 5 afdelings op die wieletjie, so daar is <strong style="color:#dc2626;">5 totale uitkomste</strong>.',
        },
        {
          label: 'c) Lys die gunstige uitkomste vir ʼn onewe getal draai.',
          correctAnswer: '135',
          explanation:
            'Onewe getalle op die wieletjie is <strong style="color:#16a34a;">1, 3 en 5</strong> — dit is die 3 gunstige uitkomste.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'ʼn Sak bevat 2 rooi, 3 blou en 1 geel albaster.',
      answer: 'a) Rooi, Blou, Geel  b) 6  c) 3',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Lys alle moontlike kleuruitkomste wanneer een albaster gekies word.',
          correctAnswer: 'redblueyellow',
          correctAnswers: [
            'redblueyellow',
            'blueredyellow',
            'redyellowblue',
            'yellowredblue',
            'blueyellowred',
            'yellowbluered',
          ],
          explanation:
            'Die sak het drie kleure albasters. Die moontlike uitkomste is <strong style="color:#1e40af;">Rooi, Blou en Geel</strong>.',
        },
        {
          label: 'b) Hoeveel albasters is altesaam in die sak?',
          correctAnswer: '6',
          explanation:
            '2 rooi + 3 blou + 1 geel = <strong style="color:#dc2626;">6 albasters altesaam</strong>.',
        },
        {
          label: 'c) Hoeveel gunstige uitkomste is daar om blou te kies?',
          correctAnswer: '3',
          explanation:
            'Daar is <strong style="color:#16a34a;">3 blou albasters</strong> in die sak, so daar is 3 gunstige uitkomste om blou te kies.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'ʼn Sak bevat 2 rooi, 3 blou en 1 geel albaster.',
      answer:
        'Meer waarskynlik — daar is 3 blou albasters maar net 2 rooi albasters. Blou het 3 kanse uit 6 terwyl rooi net 2 kanse uit 6 het, so om blou te kies is meer waarskynlik as om rooi te kies.',
      checkMode: 'self',
      parts: [
        {
          label: 'd) Is dit meer of minder waarskynlik om blou te kies as rooi? Verduidelik jou antwoord.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Easy',
      question: 'ʼn Dobbelsteen word 12 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn 2 gegooi word?',
      answer: '2 keer',
      checkMode: 'auto',
      correctAnswer: '2',
      correctAnswers: ['2', '2times'],
      explanation:
        'ʼn Dobbelsteen het 6 gelyke uitkomste. ʼn 2 gooi is <strong>1 uit 6</strong>. 12 ÷ 6 = <strong style="color:#ea580c;">2 keer</strong>.',
    },
    {
      difficulty: 'Medium',
      question: 'ʼn Muntstuk word 30 keer opgegooi.',
      answer: 'a) 15 keer  b) 15 keer',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Hoeveel keer sou jy voorspel dat jy kop kry?',
          correctAnswer: '15',
          correctAnswers: ['15', '15times'],
          explanation:
            'Kop is 1 uit 2 uitkomste. Helfte van 30 = <strong style="color:#ea580c;">15 keer</strong>.',
        },
        {
          label: 'b) Hoeveel keer sou jy voorspel dat jy stert kry?',
          correctAnswer: '15',
          correctAnswers: ['15', '15times'],
          explanation:
            'Stert is ewe waarskynlik as kop. Helfte van 30 = <strong style="color:#ea580c;">15 keer</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question: 'ʼn Muntstuk word 30 keer opgegooi.',
      answer:
        'Ja — 18 is redelik naby aan die voorspelling van 15. Die verskil is slegs 3, wat klein is in vergelyking met 30 opgooie. Werklike resultate verskil elke keer as ʼn eksperiment gedoen word.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) As jy werklik 18 koppe kry, is dit ʼn redelike resultaat? Verduidelik.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question:
        'ʼn Sak het 3 rooi en 1 blou albaster. Jy kies ʼn albaster 20 keer en vervang dit elke keer.',
      answer: 'a) 3/4  b) 15 keer',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Watter breuk van keuses sou jy voorspel om rooi te wees?',
          correctAnswer: '3/4',
          explanation:
            'Daar is 3 rooi uit 4 albasters altesaam. Die breuk vir rooi is <strong style="color:#16a34a;">3/4</strong>.',
        },
        {
          label: 'b) Hoeveel keer uit 20 sou jy voorspel dat rooi gekies word?',
          correctAnswer: '15',
          correctAnswers: ['15', '15times'],
          explanation:
            '3/4 × 20 = <strong style="color:#ea580c;">15 keer</strong>.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question:
        'ʼn Sak het 3 rooi en 1 blou albaster. Jy kies ʼn albaster 20 keer en vervang dit elke keer.',
      answer:
        'Ja — 16 is baie naby aan die voorspelling van 15. Die verskil is slegs 1, wat klein is. Werklike resultate stem selde presies ooreen met voorspellings; ʼn klein variasie soos hierdie is heeltemal normaal.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) Jy kies werklik 16 keer rooi. Is dit naby aan jou voorspelling? Verduidelik.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question:
        'ʼn Sak het 3 rooi en 1 blou albaster. Jy kies ʼn albaster 20 keer en vervang dit elke keer.',
      answer: '75 keer',
      checkMode: 'auto',
      correctAnswer: '75',
      correctAnswers: ['75', '75times'],
      explanation:
        '3/4 × 100 = <strong style="color:#ea580c;">75 keer</strong>. Dieselfde breuk geld — 3 uit elke 4 keuses behoort rooi te wees.',
    },
    {
      difficulty: 'Easy',
      question:
        'Sipho voorspel dat hy ʼn ewe getal 10 keer uit 20 gooie sal gooi. Hy gooi werklik ʼn ewe getal 12 keer. Hoeveel meer ewe getalle het hy gegooi as voorspel?',
      answer: '2 meer',
      checkMode: 'auto',
      correctAnswer: '2',
      correctAnswers: ['2', '2more'],
      explanation:
        '12 (werklik) − 10 (voorspel) = <strong style="color:#dc2626;">2 meer</strong> as voorspel.',
    },
    {
      difficulty: 'Medium',
      question:
        'ʼn Wieletjie het 4 gelyke afdelings gekleur rooi, blou, groen en geel. Dit word 40 keer gedraai.',
      answer: 'a) 10 keer  b) 20 keer',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Hoeveel keer sou jy voorspel dat dit op rooi land?',
          correctAnswer: '10',
          correctAnswers: ['10', '10times'],
          explanation:
            'Rooi is 1 uit 4 afdelings. 1/4 × 40 = <strong style="color:#ea580c;">10 keer</strong>.',
        },
        {
          label: 'b) Hoeveel keer sou jy voorspel dat dit op blou of groen land?',
          correctAnswer: '20',
          correctAnswers: ['20', '20times'],
          explanation:
            'Blou en groen saam is 2 uit 4 afdelings (die helfte). 1/2 × 40 = <strong style="color:#ea580c;">20 keer</strong>.',
        },
      ],
    },
    {
      difficulty: 'Medium',
      question:
        'ʼn Wieletjie het 4 gelyke afdelings gekleur rooi, blou, groen en geel. Dit word 40 keer gedraai.',
      answer:
        'Ja — 13 is redelik naby aan die voorspelling van 10. Die verskil is 3, wat klein is in vergelyking met 40 draaie. Werklike resultate stem nie altyd presies ooreen met die voorspelling nie.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) As rooi 13 keer voorkom, is dit ʼn redelike resultaat? Verduidelik.',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Lerato gooi ʼn muntstuk 50 keer op en kry 28 koppe en 22 sterte.',
      answer: 'a) 25  b) 3 meer',
      checkMode: 'auto',
      parts: [
        {
          label: 'a) Wat was die voorspelde aantal koppe?',
          correctAnswer: '25',
          correctAnswers: ['25', '25times'],
          explanation:
            'Kop is 1 uit 2 uitkomste. Helfte van 50 = <strong style="color:#ea580c;">25 koppe</strong>.',
        },
        {
          label: 'b) Hoeveel meer koppe as voorspel het sy gekry?',
          correctAnswer: '3',
          correctAnswers: ['3', '3more'],
          explanation:
            '28 (werklik) − 25 (voorspel) = <strong style="color:#dc2626;">3 meer</strong> koppe as voorspel.',
        },
      ],
    },
    {
      difficulty: 'Hard',
      question: 'Lerato gooi ʼn muntstuk 50 keer op en kry 28 koppe en 22 sterte.',
      answer:
        'c) Nee — werklike resultate verskil elke keer as jy ʼn eksperiment herhaal. Lerato mag 23, 26, of 28 koppe kry in die volgende 50 opgooie. Daar is geen waarborg van presies 25 nie.\nd) Hoe meer proewe jy doen, hoe nader kom die werklike resultate aan die voorspelde waarskynlikheid. Met duisende opgooie sal die verhouding koppe baie naby aan 1/2 kom.',
      checkMode: 'self',
      parts: [
        {
          label: 'c) As sy die muntstuk nog 50 keer opgooi, sou jy weer presies 25 koppe verwag? Verduidelik.',
          correctAnswer: '',
          explanation: '',
        },
        {
          label: 'd) Wat gebeur met waarskynlikheidsresultate namate jy meer en meer proewe doen?',
          correctAnswer: '',
          explanation: '',
        },
      ],
    },
  ],
}
