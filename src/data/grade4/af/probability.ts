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
      openQuestions: [],
      videoPlaceholder:
        'Kort video wat wys hoe om ʼn eenvoudige waarskynlikheidseksperiment uit te voer, resultate aan te teken en voorspelde uitkomste met werklike uitkomste te vergelyk',
    },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Klassifisering van waarskynlikheid (0-3, Maklik)
        { difficulty: 'Easy', question: 'Die son sal môreoggend opkom. Klassifiseer hierdie gebeurtenis.', answer: 'Seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Dit gebeur elke enkele dag sonder mankement, so dit is seker.' },
        { difficulty: 'Easy', question: 'ʼn Vis sal bene kry en op land loop. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Visse kan nie bene kry en op land loop nie — dit kan nooit gebeur nie, so dit is onmoontlik.' },
        { difficulty: 'Easy', question: 'Is die kies van ʼn rooi albaster uit ʼn sak met 9 blou albasters en 1 rooi albaster waarskynlik of onwaarskynlik? Verduidelik kortliks.', answer: 'Onwaarskynlik', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Net 1 uit 10 albasters is rooi, so rooi kies sal waarskynlik nie gebeur nie, maar dit is steeds moontlik — dit is onwaarskynlik.' },
        { difficulty: 'Easy', question: 'ʼn Onewe getal gooi op ʼn standaard dobbelsteen (onewe getalle: 1, 3, 5; ewe getalle: 2, 4, 6). Klassifiseer hierdie gebeurtenis.', answer: 'Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik'], explanation: 'Daar is 3 onewe getalle en 3 ewe getalle uit 6, so onewe of ewe gooi het presies dieselfde kans — ewe waarskynlik.' },
        // Blok 2 — Uitkomste, gunstige uitkomste & totale (4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Lys alle moontlike uitkomste wanneer ʼn muntstuk opgegooi word.', answer: 'Kop, Stert', checkMode: 'auto', correctAnswer: 'kopstert', correctAnswers: ['kopstert', 'kopenstert'], explanation: 'ʼn Muntstuk het presies twee kante. Die twee moontlike uitkomste is Kop en Stert — daar is geen ander resultate nie.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel totale uitkomste is daar wanneer ʼn standaard dobbelsteen gegooi word?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Standaard dobbelsteen het 6 vlakke, so daar is 6 totale uitkomste.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Lys die gunstige uitkomste vir ʼn onewe getal draai.', answer: '1, 3, 5', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135'], explanation: 'Onewe getalle op die wieletjie is 1, 3 en 5 — dit is die 3 gunstige uitkomste.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Sak bevat 2 rooi, 3 blou en 1 geel albaster. Hoeveel albasters is altesaam in die sak, en hoeveel daarvan is gunstige uitkomste om blou te kies?', answer: '6 altesaam, 3 gunstig vir blou', checkMode: 'auto', correctAnswer: '63', correctAnswers: ['63'], explanation: '2 + 3 + 1 = 6 albasters altesaam. Daar is 3 blou albasters, so 3 gunstige uitkomste om blou te kies.' },
        // Blok 3 — Woordprobleme: voorspel uit verhoudings (8-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Gelukkige-trekking-wieletjie by die skoolfees het 2 gelyke afdelings: "Wen" en "Probeer Weer". As 30 leerders dit draai, hoeveel sou jy voorspel gaan op "Wen" land?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15keer'], explanation: '"Wen" is 1 uit 2 afdelings. Helfte van 30 = 15 leerders.' },
        { difficulty: 'Medium', question: 'ʼn Lekkergoedpot vir ʼn klasrivelling bevat 14 rooi lekkers en 7 groen lekkers. Watter breuk van die lekkers is groen? Gee jou antwoord in eenvoudigste vorm.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: 'Daar is 14 + 7 = 21 lekkers altesaam, en 7 is groen, so die breuk is 7/21. Deel die boonste en onderste getal deur 7 om 1/3 te kry.' },
        { difficulty: 'Medium', question: 'ʼn Weer-wieletjie-speletjie het 5 gelyke afdelings: 3 sonnig en 2 reënerig. Dit word 40 keer gedraai om ʼn seisoen na te boots, en jy weet reeds 24 van daardie dae word voorspel om sonnig te wees. Sonder om die reën-breuk van voor af te bereken, hoeveel dae sou jy voorspel reënerig sal wees — en waarom werk hierdie metode?', answer: '16 reëndae, want elke draai is óf sonnig óf reënerig, so reëndae = 40 − 24 = 16.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Span A trek drestrui-kaartjies uit ʼn sak met 4 blou en 4 oranje kaartjies (8 altesaam). Span B trek uit ʼn sak met 5 blou en 3 oranje kaartjies (8 altesaam). Elke span trek ʼn kaartjie 32 keer en vervang dit elke keer. Watter span sou jy voorspel trek meer blou kaartjies, en met hoeveel meer?', answer: 'Span B, met 4 meer trekkings (Span A: 4/8 × 32 = 16 blou; Span B: 5/8 × 32 = 20 blou; 20 − 16 = 4).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Gelukkige-doop-prysak het 3 klein pryse en 5 groot pryse in elke groep van 8. As 24 leerders in die sak doop (en die prys elke keer vervang), hoeveel sou jy voorspel ʼn groot prys sal kry?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15keer'], explanation: 'Groot prys is 5 uit 8. 5/8 × 24 = 15 leerders.' },
        // Blok 4 — Vergelyk voorspelde vs werklike resultate (13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Muntstuk word 30 keer opgegooi. Die voorspelling is 15 koppe. Die werklike resultaat is 18 koppe. Wat is die verskil tussen die werklike en voorspelde resultate?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: '18 (werklik) − 15 (voorspel) = 3.' },
        { difficulty: 'Medium', question: 'Met dieselfde muntstukeksperiment (voorspel 15 koppe, werklik 18 koppe uit 30 opgooie), is dit ʼn redelike resultaat? Verduidelik jou antwoord.', answer: 'Ja — 18 is redelik naby aan die voorspelling van 15. Die verskil is slegs 3, wat klein is in vergelyking met 30 opgooie. Werklike resultate verskil elke keer as ʼn eksperiment gedoen word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer: "Aangesien kop en stert ewe waarskynlik is, sal ek altyd presies 5 koppe kry as ek ʼn muntstuk 10 keer opgooi." Is die leerder korrek? Verduidelik.', answer: 'Nee — die leerder is nie korrek nie. Ewe waarskynlike uitkomste vertel ons net wat ons gemiddeld kan verwag, nie wat elke keer moet gebeur nie. In ʼn klein aantal proewe soos 10 opgooie kan die werklike resultaat maklik 4, 6, 7 koppe of ʼn ander getal wees — net oor baie, baie proewe kom die resultaat naby aan die helfte.', checkMode: 'self' },
        // Blok 5 — Foutopsporing & regverdig-jou-redenasie (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'Lerato sê die kies van ʼn geel albaster uit ʼn sak met 1 geel albaster en 19 rooi albasters is onmoontlik. Amahle sê dit is onwaarskynlik. Wie is korrek, en waarom?', answer: 'Amahle is korrek — daar is 1 geel albaster in die sak, so om dit te kies is moontlik, net nie baie waarskynlik nie. "Onmoontlik" sou beteken dit kan nooit gebeur nie, wat hier verkeerd is, aangesien dit werklik gekies kan word. "Onwaarskynlik" beskryf korrek ʼn klein maar werklike kans.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'Thabo sê om ʼn onewe getal op ʼn dobbelsteen te gooi is seker. Sipho sê om ʼn onewe getal en ʼn ewe getal te gooi is ewe waarskynlik. Wie is korrek, en waarom?', answer: 'Sipho is korrek — ʼn dobbelsteen het 3 onewe getalle (1, 3, 5) en 3 ewe getalle (2, 4, 6) uit 6, so onewe en ewe het elkeen presies dieselfde kans en is ewe waarskynlik. "Seker" sou beteken onewe getalle kom altyd voor, maar soms word ʼn ewe getal gegooi in plaas daarvan, so Thabo is verkeerd.', checkMode: 'self' },
        // Blok 6 — Veelstap-redenasie & gekombineerde gebeurtenisse (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 4 gelyke afdelings gekleur rooi, blou, groen en geel. Dit word 40 keer gedraai. Hoeveel keer sou jy voorspel dat dit op blou of groen saam land?', answer: '20 keer', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20keer'], explanation: 'Blou en groen saam is 2 uit 4 afdelings (die helfte). 1/2 × 40 = 20 keer.' },
        { difficulty: 'Hard', question: 'Twee vriende gooi elk ʼn dobbelsteen 30 keer. Thabo voorspel 15 ewe getalle en gooi 17. Sipho voorspel 15 ewe getalle en gooi 9. Wie se werklike resultaat is nader aan die voorspelling, en met hoeveel?', answer: 'Thabo — sy verskil is 17 − 15 = 2, terwyl Sipho se verskil 15 − 9 = 6 is. Thabo se resultaat is 4 nader aan die voorspelling.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy ken die taal van waarskynlikheid deur en deur.' },
        { minScore: 15, message: 'Goeie werk! Jy kan gebeurtenisse met selfvertroue klassifiseer en uitkomste voorspel — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Klassifisering van waarskynlikheid (0-3, Maklik)
        { difficulty: 'Easy', question: 'Dit sal vandag in die Sahara-woestyn sneeu. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Die Sahara is een van die warmste plekke op Aarde, so dit kan nooit gebeur nie.' },
        { difficulty: 'Easy', question: 'Dit sal warm wees in die somer in Suid-Afrika. Klassifiseer hierdie gebeurtenis.', answer: 'Waarskynlik', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: 'Somer is gewoonlik warm, alhoewel nie elke dag presies dieselfde is nie, so dit is waarskynlik.' },
        { difficulty: 'Easy', question: 'Is die land op groen waarskynlik of onwaarskynlik op ʼn wieletjie met 10 gelyke afdelings waar 1 groen is en 9 oranje is? Verduidelik kortliks.', answer: 'Onwaarskynlik', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Net 1 uit 10 afdelings is groen, so daarop land is moontlik maar sal waarskynlik nie gebeur nie — dit is onwaarskynlik.' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie met 2 gelyke afdelings (rooi en blou) draai en op rooi land. Klassifiseer hierdie gebeurtenis.', answer: 'Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik'], explanation: 'Die 2 afdelings is gelyk in grootte, so rooi en blou het presies dieselfde kans — ewe waarskynlik.' },
        // Blok 2 — Uitkomste, gunstige uitkomste & totale (4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Hoeveel totale uitkomste is daar wanneer ʼn muntstuk opgegooi word?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'ʼn Muntstuk het 2 kante, so daar is 2 totale uitkomste.' },
        { difficulty: 'Easy-Medium', question: 'Lys alle moontlike uitkomste wanneer ʼn standaard dobbelsteen gegooi word.', answer: '1, 2, 3, 4, 5, 6', checkMode: 'auto', correctAnswer: '123456', correctAnswers: ['123456'], explanation: 'ʼn Standaard dobbelsteen het 6 vlakke genommer 1 tot 6, so dit is die 6 moontlike uitkomste.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wieletjie het 4 gelyke afdelings genommer 1 tot 4. Lys die gunstige uitkomste vir landing op ʼn ewe getal.', answer: '2, 4', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'Ewe getalle op die wieletjie is 2 en 4, so dit is die 2 gunstige uitkomste.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Sak het 4 rooi albasters en 3 blou albasters. Hoeveel albasters is altesaam in die sak, en hoeveel gunstige uitkomste is daar om rooi te kies?', answer: '7 altesaam, 4 gunstig vir rooi', checkMode: 'auto', correctAnswer: '74', correctAnswers: ['74'], explanation: '4 + 3 = 7 albasters altesaam. Daar is 4 rooi albasters, so 4 gunstige uitkomste om rooi te kies.' },
        // Blok 3 — Woordprobleme: voorspel uit verhoudings (8-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Dag-van-die-week-kieser het 7 gelyke kaartjies, een vir elke dag. As ʼn dag 14 keer gekies word (en die kaartjie elke keer vervang word), hoeveel keer sou jy voorspel dat Saterdag gekies word?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2keer'], explanation: 'Saterdag is 1 uit 7 dae. 14 ÷ 7 = 2 keer.' },
        { difficulty: 'Medium', question: 'Oor ʼn Maart-maand van 30 dae het ʼn weer-opsporingslog 20 droë dae en 10 reëndae aangeteken. Watter breuk van die dae in die log was reënerig? Gee jou antwoord in eenvoudigste vorm.', answer: '1/3', checkMode: 'auto', correctAnswer: '1/3', correctAnswers: ['1/3'], explanation: '10 uit 30 dae was reënerig, so die breuk is 10/30. Deel die boonste en onderste getal deur 10 om 1/3 te kry.' },
        { difficulty: 'Medium', question: 'ʼn Gelukkige-trekking-boks by ʼn skoolfees het 4 wenkaartjies en 1 verloor-kaartjie in elke groep van 5. As 45 leerders ʼn kaartjie trek (en dit elke keer vervang), en jy weet reeds 36 van hulle word voorspel om te wen, hoeveel word voorspel om te verloor — en waarom kan jy dit vind sonder om die verloor-breuk weer uit te werk?', answer: '9 leerders, want elke trekking is óf ʼn wen óf ʼn verlies, so verliese = 45 − 36 = 9.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Afrigter Dlamini trek name uit ʼn hoed met 3 doelwagter-kaartjies en 2 veldspeler-kaartjies (5 altesaam). Afrigter Nkosi trek uit ʼn hoed met 2 doelwagter-kaartjies en 3 veldspeler-kaartjies (5 altesaam). As elke afrigter 25 trekkings maak (en die kaartjie elke keer vervang), watter afrigter sou jy voorspel kry meer doelwagter-trekkings, en met hoeveel meer?', answer: 'Afrigter Dlamini, met 5 meer trekkings (Dlamini: 3/5 × 25 = 15 doelwagter; Nkosi: 2/5 × 25 = 10 doelwagter; 15 − 10 = 5).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Gelukkige-doop-prysak het 5 plakker-pryse en 3 potlood-pryse in elke groep van 8. As 40 leerders in die sak doop (en die prys elke keer vervang), hoeveel sou jy voorspel ʼn potlood sal kry?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15keer'], explanation: 'Potlood is 3 uit 8. 3/8 × 40 = 15 leerders.' },
        // Blok 4 — Vergelyk voorspelde vs werklike resultate (13-15, Medium)
        { difficulty: 'Medium', question: 'ʼn Sak het 3 rooi en 1 blou albaster. Jy kies ʼn albaster 20 keer en vervang dit elke keer. Die voorspelling vir rooi is 15. Die werklike resultaat is 16. Wat is die verskil tussen die werklike en voorspelde resultate?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1'], explanation: '16 (werklik) − 15 (voorspel) = 1.' },
        { difficulty: 'Medium', question: 'Met dieselfde albastereksperiment (voorspel 15, werklik 16 uit 20 keuses), is dit naby aan jou voorspelling? Verduidelik jou antwoord.', answer: 'Ja — 16 is baie naby aan die voorspelling van 15. Die verskil is slegs 1, wat klein is. Werklike resultate stem selde presies ooreen met voorspellings; ʼn klein variasie soos hierdie is heeltemal normaal.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer: "As ʼn wieletjie 4 gelyke kleure het en ek draai dit 40 keer, moet presies 10 van elke kleur voorkom." Is die leerder korrek? Verduidelik.', answer: 'Nee — die leerder is nie korrek nie. 10 van elke kleur is net die voorspelling gebaseer op gelyke kanse, nie ʼn waarborg nie. Die werklike resultate na 40 draaie kan byvoorbeeld 8, 11, 9 en 12 wees — klein verskille van 10 is heeltemal normaal, veral met ʼn beperkte aantal draaie.', checkMode: 'self' },
        // Blok 5 — Foutopsporing & regverdig-jou-redenasie (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Sak het 5 rooi albasters en 0 blou albasters. Nomvula sê die kies van ʼn blou albaster is onwaarskynlik. Zanele sê dit is onmoontlik. Wie is korrek, en waarom?', answer: 'Zanele is korrek — daar is glad geen blou albasters in die sak nie, so om een te kies kan nooit onder enige omstandighede gebeur nie. "Onwaarskynlik" sou beteken daar is steeds ʼn klein kans, maar hier is daar glad geen kans nie, so dit moet onmoontlik wees.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 6 gelyke afdelings genommer 1 tot 6. Karabo sê om op ʼn getal groter as 3 te land is meer waarskynlik as om op ʼn getal kleiner as 4 te land. Boitumelo sê hulle is ewe waarskynlik. Wie is korrek, en waarom?', answer: 'Boitumelo is korrek — getalle groter as 3 is 4, 5, 6 (3 uitkomste) en getalle kleiner as 4 is 1, 2, 3 (3 uitkomste). Albei gebeurtenisse het presies 3 uit 6 gunstige uitkomste, so hulle is ewe waarskynlik, nie een meer waarskynlik as die ander nie.', checkMode: 'self' },
        // Blok 6 — Veelstap-redenasie & gekombineerde gebeurtenisse (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Sak het 4 rooi, 2 blou en 2 geel albasters (8 altesaam). Jy kies ʼn albaster 32 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat rooi of geel saam gekies word?', answer: '24 keer', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24keer'], explanation: 'Rooi of geel saam is 4 + 2 = 6 uit 8 albasters. 6/8 × 32 = 24 keer.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word 18 keer gegooi en ʼn 6 kom 5 keer voor. Vergelyk die werklike resultaat met die voorspelling en verduidelik of dit redelik is.', answer: 'Voorspelde 6\'e = 1/6 × 18 = 3. Werklik = 5. Die verskil is 2, wat ʼn klein variasie is vir slegs 18 gooie, so dit is ʼn redelike resultaat alhoewel dit ietwat hoër as voorspel is.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan gebeurtenisse klassifiseer, uitkomste lys en resultate met selfvertroue voorspel.' },
        { minScore: 15, message: 'Goed gedaan! Jy verstaan waarskynlikheid goed — gaan enige foute weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan oefen — gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Klassifisering van waarskynlikheid (0-3, Maklik)
        { difficulty: 'Easy', question: 'Elke leerder in ʼn Graad 4-klas is ouer as 100 jaar. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Graad 4-leerders is kinders, so geeneen kan ouer as 100 jaar wees nie — dit kan nooit gebeur nie.' },
        { difficulty: 'Easy', question: 'ʼn Baba sal vandag iewers in Suid-Afrika gebore word. Klassifiseer hierdie gebeurtenis.', answer: 'Seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Babas word elke dag oral in Suid-Afrika gebore sonder mankement, so dit is gewaarborg om te gebeur — dit is seker.' },
        { difficulty: 'Easy', question: 'Is die kies van ʼn blou albaster uit ʼn sak met 9 blou albasters en 1 rooi albaster waarskynlik of onwaarskynlik? Verduidelik kortliks.', answer: 'Waarskynlik', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: '9 uit 10 albasters is blou, so blou kies sal waarskynlik gebeur — dit is waarskynlik, alhoewel nie 100% seker nie.' },
        { difficulty: 'Easy', question: 'ʼn Rooi kaart kies uit ʼn standaard pak van 52 speelkaarte (26 rooi, 26 swart). Klassifiseer hierdie gebeurtenis.', answer: 'Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik'], explanation: 'Presies die helfte van die kaarte (26 uit 52) is rooi, wat dieselfde kans gee as om ʼn nie-rooi kaart te trek — dit is ewe waarskynlik.' },
        // Blok 2 — Uitkomste, gunstige uitkomste & totale (4-7, Maklik-Medium)
        { difficulty: 'Easy', question: 'Lys alle moontlike uitkomste wanneer ʼn wieletjie met 3 gelyke afdelings genommer 1, 2 en 3 gedraai word.', answer: '1, 2, 3', checkMode: 'auto', correctAnswer: '123', correctAnswers: ['123'], explanation: 'Die wieletjie het 3 afdelings, so die uitkomste is 1, 2 en 3.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Dobbelsteen word een keer gegooi. Hoeveel totale uitkomste is daar, en hoeveel daarvan is gunstige uitkomste vir "ʼn getal groter as 4 gooi"?', answer: '6 altesaam, 2 gunstig', checkMode: 'auto', correctAnswer: '62', correctAnswers: ['62'], explanation: 'ʼn Dobbelsteen het 6 totale uitkomste. Getalle groter as 4 is 5 en 6, so daar is 2 gunstige uitkomste.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings genommer 1 tot 8. Lys die gunstige uitkomste vir landing op ʼn getal kleiner as 3.', answer: '1, 2', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Getalle kleiner as 3 op die wieletjie is 1 en 2 — dit is die 2 gunstige uitkomste.' },
        { difficulty: 'Easy-Medium', question: 'Twee muntstukke word saam opgegooi, een na die ander. Lys al 4 moontlike uitkomste as pare (gebruik K vir kop en S vir stert), geskei deur kommas.', answer: 'KK, KS, SK, SS', checkMode: 'auto', correctAnswer: 'kkksskss', correctAnswers: ['kkksskss'], explanation: 'Elke muntstuk kan K of S wees. Die eerste muntstuk kan K of S wees, en vir elkeen daarvan kan die tweede muntstuk ook K of S wees, wat 4 kombinasies gee: KK, KS, SK, SS.' },
        // Blok 3 — Woordprobleme: voorspel uit verhoudings (8-12, Medium)
        { difficulty: 'Medium', question: 'ʼn Rivelling by ʼn skoolfees verkoop kaartjies in 2 gelyke kleure: pienk en geel, en een kleur word as die wenner getrek. As 50 kaartjies een-een teen die trekkingspatroon nagegaan word, hoeveel sou jy voorspel by "pienk" (uit die 2 ewe waarskynlike kleure) sal pas?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25keer'], explanation: 'Pienk is 1 uit 2 kleure. Helfte van 50 = 25 kaartjies.' },
        { difficulty: 'Medium', question: 'Oor 28 dae in ʼn reënerige maand het ʼn weerlog 21 gewone reëndae en 7 donderstormdae aangeteken. Watter breuk van die 28 dae was donderstormdae? Gee jou antwoord in eenvoudigste vorm.', answer: '1/4', checkMode: 'auto', correctAnswer: '1/4', correctAnswers: ['1/4'], explanation: '7 uit 28 dae was donderstormdae, so die breuk is 7/28. Deel die boonste en onderste getal deur 7 om 1/4 te kry.' },
        { difficulty: 'Medium', question: 'ʼn Drestrui-trekking het 2 rooi truie en 3 wit truie in elke groep van 5. Uit 35 spelers wat elk ʼn trui trek (en dit elke keer vervang), weet jy reeds 21 word voorspel om wit te trek. Hoeveel word voorspel om rooi te trek — en waarom gee 35 minus daardie wit-totaal die antwoord direk?', answer: '14 spelers, want elke trekking is óf rooi óf wit, so rooi-trekkings = 35 − 21 = 14.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Gelukkige-doop-sak by ʼn fees het 5 klein speelgoed en 3 groot speelgoed in elke groep van 8. ʼn Tweede sak by dieselfde fees het 3 klein speelgoed en 5 groot speelgoed in elke groep van 8. As 56 kinders in elke sak doop (en die speelgoed elke keer vervang), watter sak sou jy voorspel gee meer groot speelgoed uit, en met hoeveel meer?', answer: 'Die tweede sak, met 14 meer groot speelgoed (eerste sak: 3/8 × 56 = 21 groot; tweede sak: 5/8 × 56 = 35 groot; 35 − 21 = 14).', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Dag-van-die-week-wieletjie word gebruik om biblioteekbesoeke te beplan, met ʼn gunstige uitkoms van Maandag, Dinsdag of Woensdag uit die 7 dae. As die wieletjie 49 keer gebruik word, hoeveel keer sou jy voorspel op een van hierdie 3 dae land?', answer: '21', checkMode: 'auto', correctAnswer: '21', correctAnswers: ['21', '21keer'], explanation: 'Maandag, Dinsdag of Woensdag is 3 uit 7 dae. 3/7 × 49 = 21 keer.' },
        // Blok 4 — Vergelyk voorspelde vs werklike resultate (13-15, Medium)
        { difficulty: 'Medium', question: 'Amahle gooi ʼn muntstuk 50 keer op en kry 28 koppe en 22 sterte. Wat was die voorspelde aantal koppe, en wat is die verskil tussen werklik en voorspel?', answer: '25 voorspel, 3 meer as voorspel', checkMode: 'auto', correctAnswer: '253', correctAnswers: ['253'], explanation: 'Kop is 1 uit 2 uitkomste. Helfte van 50 = 25 voorspel. 28 (werklik) − 25 (voorspel) = 3 meer.' },
        { difficulty: 'Medium', question: 'Met dieselfde muntstukeksperiment (voorspel 25 koppe, werklik 28 uit 50 opgooie), is dit ʼn redelike resultaat? Verduidelik jou antwoord.', answer: 'Ja — 28 is redelik naby aan die voorspelling van 25. Die verskil is slegs 3, wat klein is in vergelyking met 50 opgooie. Werklike resultate verskil elke keer as ʼn eksperiment gedoen word, en dit is ʼn normale hoeveelheid variasie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer: "As my voorspelling en werklike resultaat nie presies ooreenstem nie, moes my voorspelling verkeerd gewees het." Is die leerder korrek? Verduidelik.', answer: 'Nee — die leerder is nie korrek nie. ʼn Voorspelling is gebaseer op gelyke kanse en vertel ons wat ons gemiddeld kan verwag, nie ʼn waarborg van die presiese resultaat nie. Klein verskille tussen voorspelde en werklike resultate is normaal en beteken nie die voorspelling was verkeerd nie.', checkMode: 'self' },
        // Blok 5 — Foutopsporing & regverdig-jou-redenasie (16-17, Medium-Hard)
        { difficulty: 'Medium-Hard', question: 'ʼn Wieletjie het 10 gelyke afdelings: 1 groen en 9 oranje. Palesa sê om op groen te land is onmoontlik. Naledi sê dit is onwaarskynlik. Wie is korrek, en waarom?', answer: 'Naledi is korrek — daar is 1 groen afdeling, so daarop land is moontlik maar nie baie waarskynlik nie. "Onmoontlik" sou beteken dit kan nooit gebeur nie, wat vals is aangesien groen werklik kan voorkom. "Onwaarskynlik" beskryf korrek ʼn klein maar werklike kans.', checkMode: 'self' },
        { difficulty: 'Medium-Hard', question: 'ʼn Sak het 6 swart sokke en 6 wit sokke. Tumi sê die kies van ʼn swart sok is waarskynlik. Refilwe sê swart en wit is ewe waarskynlik. Wie is korrek, en waarom?', answer: 'Refilwe is korrek — daar is 6 swart en 6 wit sokke, presies dieselfde aantal van elk, so albei kleure het presies dieselfde kans om gekies te word. "Waarskynlik" sou beteken swart is meer waarskynlik as nie-swart, maar hier het die twee uitkomste identiese kanse, so hulle is ewe waarskynlik.', checkMode: 'self' },
        // Blok 6 — Veelstap-redenasie & gekombineerde gebeurtenisse (18-19, Moeilik)
        { difficulty: 'Hard', question: 'ʼn Sak het 5 rooi en 3 blou albasters (8 altesaam). Jy kies ʼn albaster 40 keer en vervang dit elke keer. Vind eers die breuk van keuses wat jy sou voorspel om blou te wees, en dan hoeveel keer uit 40 jy sou voorspel dat blou gekies word.', answer: '3/8, dan 15 keer', checkMode: 'auto', correctAnswer: '3/815', correctAnswers: ['3/815'], explanation: 'Blou is 3 uit 8 albasters, so die breuk is 3/8. Dan 3/8 × 40 = 15 keer.' },
        { difficulty: 'Hard', question: 'Wat gebeur met werklike resultate in vergelyking met die voorspelling namate jy meer en meer proewe van ʼn eksperiment doen? Verduidelik jou antwoord.', answer: 'Hoe meer proewe jy doen, hoe nader kom die werklike resultate aan die voorspelde waarskynlikheid. Met net ʼn paar proewe kan die werklike resultaat baie van die voorspelling verskil, maar met duisende proewe kom die verhouding baie naby aan die voorspelde breuk.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan uitkomste voorspel en dit met selfvertroue met werklike resultate vergelyk.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan voorspellings en redenasie goed — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan hersien hoe om voorspellings te bereken en probeer weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids voor jy weer probeer.' },
      ],
    },
  ],
}
