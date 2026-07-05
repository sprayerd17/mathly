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
    // STEL 1 — GRONDBEGINSELS: SEKER / ONMOONTLIK / WAARSKYNLIK / ONWAARSKYNLIK (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Die Taal van Waarskynlikheid',
      questions: [
        { difficulty: 'Easy', question: 'Die son sal môreoggend opkom. Klassifiseer hierdie gebeurtenis.', answer: 'Seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Dit gebeur elke enkele dag sonder mankement, so dit is seker.' },
        { difficulty: 'Easy', question: 'Dit sal vandag in die Sahara-woestyn sneeu. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Die Sahara is een van die warmste plekke op Aarde, so dit kan nooit gebeur nie.' },
        { difficulty: 'Easy', question: 'ʼn Getal kleiner as 7 gooi op ʼn standaard dobbelsteen. Klassifiseer hierdie gebeurtenis.', answer: 'Seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'ʼn Dobbelsteen het net 1 tot 6, en elkeen van daardie getalle is kleiner as 7, so dit sal altyd gebeur.' },
        { difficulty: 'Easy', question: 'ʼn 7 gooi op ʼn standaard dobbelsteen. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'ʼn Standaard dobbelsteen het net die getalle 1 tot 6, so ʼn 7 gooi kan nooit gebeur nie.' },
        { difficulty: 'Easy', question: 'ʼn Regverdige muntstuk opgooi en kop of stert kry. Klassifiseer hierdie gebeurtenis.', answer: 'Seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'ʼn Muntstuk het net twee kante. Dit moet op een daarvan land, so kop of stert kry is seker.' },
        { difficulty: 'Easy', question: 'ʼn Vis sal bene kry en op land loop. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Visse kan nie bene kry en op land loop nie — dit kan nooit gebeur nie, so dit is onmoontlik.' },
        { difficulty: 'Easy', question: 'Jy sal ʼn 6 gooi met jou heel eerste gooi van ʼn dobbelsteen. Klassifiseer hierdie gebeurtenis.', answer: 'Onwaarskynlik', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'ʼn Dobbelsteen het 6 vlakke en net een is ʼn 6, so die kans is klein maar steeds moontlik — dit is onwaarskynlik.' },
        { difficulty: 'Easy', question: 'Dit sal warm wees in die somer in Suid-Afrika. Klassifiseer hierdie gebeurtenis.', answer: 'Waarskynlik', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: 'Somer is gewoonlik warm, alhoewel nie elke dag presies dieselfde is nie, so dit is waarskynlik.' },
        { difficulty: 'Easy', question: 'ʼn Regverdige muntstuk opgooi en stert kry. Klassifiseer hierdie gebeurtenis.', answer: 'Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik'], explanation: 'ʼn Muntstuk het twee kante met presies dieselfde kans om na bo te val, so kop en stert is ewe waarskynlik.' },
        { difficulty: 'Easy', question: 'Dit sal in Julie in Kaapstad sneeu. Klassifiseer hierdie gebeurtenis.', answer: 'Onwaarskynlik', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Kaapstad is koud en reënerig in Julie, maar sneeu is baie skaars — dit is moontlik maar gebeur gewoonlik nie, so dit is onwaarskynlik.' },
        { difficulty: 'Medium', question: 'ʼn Baba sal vandag iewers in Suid-Afrika gebore word. Klassifiseer hierdie gebeurtenis.', answer: 'Seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Babas word elke dag oral in Suid-Afrika gebore sonder mankement, so dit is gewaarborg om te gebeur — dit is seker.' },
        { difficulty: 'Medium', question: 'ʼn Rooi kaart kies uit ʼn standaard pak van 52 speelkaarte (26 rooi, 26 swart). Klassifiseer hierdie gebeurtenis.', answer: 'Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik'], explanation: 'Presies die helfte van die kaarte (26 uit 52) is rooi, wat dieselfde kans gee as om ʼn nie-rooi kaart te trek — dit is ewe waarskynlik.' },
        { difficulty: 'Medium', question: 'ʼn Onewe getal gooi op ʼn standaard dobbelsteen (onewe getalle: 1, 3, 5; ewe getalle: 2, 4, 6). Klassifiseer hierdie gebeurtenis.', answer: 'Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik'], explanation: 'Daar is 3 onewe getalle en 3 ewe getalle uit 6, so onewe of ewe gooi het presies dieselfde kans — ewe waarskynlik.' },
        { difficulty: 'Medium', question: 'ʼn Muntstuk sal op sy rand land en daar balanseer. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'ʼn Opgegooide muntstuk kan nie perfek op sy rand balanseer nie — vir hierdie eksperiment beskou ons dit as iets wat nie kan gebeur nie, so dit is onmoontlik.' },
        { difficulty: 'Medium', question: 'ʼn Blou albaster kies uit ʼn sak met 9 blou albasters en 1 rooi albaster. Klassifiseer hierdie gebeurtenis.', answer: 'Waarskynlik', checkMode: 'auto', correctAnswer: 'waarskynlik', correctAnswers: ['waarskynlik'], explanation: '9 uit 10 albasters is blou, so blou kies sal waarskynlik gebeur — dit is waarskynlik, alhoewel nie 100% seker nie.' },
        { difficulty: 'Medium', question: 'ʼn Rooi albaster kies uit ʼn sak met 9 blou albasters en 1 rooi albaster. Klassifiseer hierdie gebeurtenis.', answer: 'Onwaarskynlik', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Net 1 uit 10 albasters is rooi, so rooi kies sal waarskynlik nie gebeur nie, maar dit is steeds moontlik — dit is onwaarskynlik.' },
        { difficulty: 'Medium', question: 'Elke leerder in ʼn Graad 4-klas is ouer as 100 jaar. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Graad 4-leerders is kinders, so geeneen kan ouer as 100 jaar wees nie — dit kan nooit gebeur nie.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie met 2 gelyke afdelings (rooi en blou) draai en op rooi land. Klassifiseer hierdie gebeurtenis.', answer: 'Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'ewewaarskynlik', correctAnswers: ['ewewaarskynlik'], explanation: 'Die 2 afdelings is gelyk in grootte, so rooi en blou het presies dieselfde kans — ewe waarskynlik.' },
        { difficulty: 'Medium', question: 'ʼn Getal groter as 10 gooi op ʼn standaard dobbelsteen. Klassifiseer hierdie gebeurtenis.', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'ʼn Standaard dobbelsteen gaan net tot 6, so geen getal groter as 10 kan ooit gegooi word nie.' },
        { difficulty: 'Hard', question: 'Lerato sê om ʼn geel albaster te kies uit ʼn sak met 1 geel albaster en 19 rooi albasters is onmoontlik. Amahle sê dit is onwaarskynlik. Wie is korrek?', answer: 'Amahle', checkMode: 'auto', correctAnswer: 'amahle', correctAnswers: ['amahle'], explanation: 'Daar is 1 geel albaster in die sak, so om dit te kies is moontlik, net nie baie waarskynlik nie. "Onmoontlik" beteken dit kan nooit gebeur nie, wat hier verkeerd is — Amahle is korrek dat dit onwaarskynlik is.' },
        { difficulty: 'Hard', question: 'Thabo sê om ʼn onewe getal op ʼn dobbelsteen te gooi is seker. Sipho sê dit is ewe waarskynlik (in vergelyking met ʼn ewe getal gooi). Wie is korrek?', answer: 'Sipho', checkMode: 'auto', correctAnswer: 'sipho', correctAnswers: ['sipho'], explanation: 'ʼn Dobbelsteen het 3 onewe getalle en 3 ewe getalle uit 6, so onewe en ewe is ewe waarskynlik. "Seker" sou beteken dit gebeur altyd, maar soms gooi jy ʼn ewe getal in plaas daarvan, so Sipho is korrek.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 5 rooi albasters en 0 blou albasters. Is die kies van ʼn blou albaster seker, onmoontlik, waarskynlik of onwaarskynlik?', answer: 'Onmoontlik', checkMode: 'auto', correctAnswer: 'onmoontlik', correctAnswers: ['onmoontlik'], explanation: 'Daar is glad geen blou albasters in die sak nie, so dit kan nooit gekies word nie — dit is onmoontlik.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 0 rooi albasters en 8 blou albasters. Is die kies van ʼn blou albaster seker, onmoontlik, waarskynlik of onwaarskynlik?', answer: 'Seker', checkMode: 'auto', correctAnswer: 'seker', correctAnswers: ['seker'], explanation: 'Elke enkele albaster in die sak is blou, so blou kies is gewaarborg — dit is seker.' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 10 gelyke afdelings: 1 is groen en 9 is oranje. Is landing op groen seker, onmoontlik, waarskynlik of onwaarskynlik?', answer: 'Onwaarskynlik', checkMode: 'auto', correctAnswer: 'onwaarskynlik', correctAnswers: ['onwaarskynlik'], explanation: 'Net 1 uit 10 afdelings is groen, so daarop land is moontlik maar sal waarskynlik nie gebeur nie — dit is onwaarskynlik.' },
        { difficulty: 'Hard', question: 'Klassifiseer elkeen van hierdie met seker, onmoontlik, waarskynlik, onwaarskynlik of ewe waarskynlik, en verbind dan jou drie antwoorde met kommas in hierdie volgorde: (1) die lug raak deur te spring, (2) ʼn skooldag môre ʼn Dinsdag of Woensdag is as dit vandag Maandag is, (3) ʼn swart sok kies uit ʼn laai met 6 swart sokke en 6 wit sokke.', answer: 'Onmoontlik, Seker, Ewe waarskynlik', checkMode: 'auto', correctAnswer: 'onmoontliksekerewewaarskynlik', correctAnswers: ['onmoontliksekerewewaarskynlik'], explanation: '(1) Jy kan nie die lug raak deur te spring nie — onmoontlik. (2) As dit vandag Maandag is, moet môre Dinsdag wees, so "Dinsdag of Woensdag" is gewaarborg — seker. (3) 6 swart en 6 wit sokke gee presies dieselfde kans vir elke kleur — ewe waarskynlik.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy ken die taal van waarskynlikheid deur en deur.' },
        { minScore: 19, message: 'Goeie werk! Jy kan gebeurtenisse met selfvertroue klassifiseer — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — LYS UITKOMSTE VAN EENVOUDIGE EKSPERIMENTE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Lys Uitkomste',
      questions: [
        { difficulty: 'Easy', question: 'Lys alle moontlike uitkomste wanneer ʼn muntstuk opgegooi word.', answer: 'Kop, Stert', checkMode: 'auto', correctAnswer: 'kopstert', correctAnswers: ['kopstert', 'kopenstert'], explanation: 'ʼn Muntstuk het presies twee kante. Die twee moontlike uitkomste is Kop en Stert — daar is geen ander resultate nie.' },
        { difficulty: 'Easy', question: 'Hoeveel totale uitkomste is daar wanneer ʼn muntstuk opgegooi word?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'ʼn Muntstuk het 2 kante, so daar is 2 totale uitkomste.' },
        { difficulty: 'Easy', question: 'Lys alle moontlike uitkomste wanneer ʼn standaard dobbelsteen gegooi word.', answer: '1, 2, 3, 4, 5, 6', checkMode: 'auto', correctAnswer: '123456', correctAnswers: ['123456'], explanation: 'ʼn Standaard dobbelsteen het 6 vlakke genommer 1 tot 6, so dit is die 6 moontlike uitkomste.' },
        { difficulty: 'Easy', question: 'Hoeveel totale uitkomste is daar wanneer ʼn standaard dobbelsteen gegooi word?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'ʼn Standaard dobbelsteen het 6 vlakke, so daar is 6 totale uitkomste.' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie het 3 gelyke afdelings genommer 1, 2 en 3. Lys alle moontlike uitkomste.', answer: '1, 2, 3', checkMode: 'auto', correctAnswer: '123', correctAnswers: ['123'], explanation: 'Die wieletjie het 3 afdelings, so die uitkomste is 1, 2 en 3.' },
        { difficulty: 'Easy', question: 'ʼn Wieletjie het 3 gelyke afdelings genommer 1, 2 en 3. Hoeveel totale uitkomste is daar?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Daar is 3 afdelings op die wieletjie, so daar is 3 totale uitkomste.' },
        { difficulty: 'Easy', question: 'ʼn Sak het 4 rooi albasters en 3 blou albasters. Lys alle moontlike kleuruitkomste wanneer een albaster gekies word.', answer: 'Rooi, Blou', checkMode: 'auto', correctAnswer: 'rooiblou', correctAnswers: ['rooiblou', 'blourooi'], explanation: 'Die sak het twee kleure albasters, so die uitkomste is Rooi en Blou.' },
        { difficulty: 'Easy', question: 'ʼn Sak het 4 rooi albasters en 3 blou albasters. Hoeveel albasters is altesaam in die sak?', answer: '7', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7'], explanation: '4 rooi + 3 blou = 7 albasters altesaam.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 4 gelyke afdelings genommer 1 tot 4. Lys die gunstige uitkomste vir landing op ʼn ewe getal.', answer: '2, 4', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24'], explanation: 'Ewe getalle op die wieletjie is 2 en 4, so dit is die 2 gunstige uitkomste.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 4 gelyke afdelings genommer 1 tot 4. Lys die gunstige uitkomste vir landing op ʼn onewe getal.', answer: '1, 3', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13'], explanation: 'Onewe getalle op die wieletjie is 1 en 3, so dit is die 2 gunstige uitkomste.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Lys alle moontlike uitkomste.', answer: '1, 2, 3, 4, 5', checkMode: 'auto', correctAnswer: '12345', correctAnswers: ['12345'], explanation: 'Die wieletjie het 5 afdelings, so die uitkomste is 1, 2, 3, 4 en 5.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Lys die gunstige uitkomste vir ʼn onewe getal draai.', answer: '1, 3, 5', checkMode: 'auto', correctAnswer: '135', correctAnswers: ['135'], explanation: 'Onewe getalle op die wieletjie is 1, 3 en 5 — dit is die 3 gunstige uitkomste.' },
        { difficulty: 'Medium', question: 'ʼn Sak bevat 2 rooi, 3 blou en 1 geel albaster. Lys alle moontlike kleuruitkomste wanneer een albaster gekies word.', answer: 'Rooi, Blou, Geel', checkMode: 'auto', correctAnswer: 'rooiblougeel', correctAnswers: ['rooiblougeel', 'blourooigeel', 'rooigeelblou', 'geelrooiblou', 'blougeelrooi', 'geelblourooi'], explanation: 'Die sak het drie kleure albasters, so die uitkomste is Rooi, Blou en Geel.' },
        { difficulty: 'Medium', question: 'ʼn Sak bevat 2 rooi, 3 blou en 1 geel albaster. Hoeveel albasters is altesaam in die sak?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: '2 rooi + 3 blou + 1 geel = 6 albasters altesaam.' },
        { difficulty: 'Medium', question: 'ʼn Sak bevat 2 rooi, 3 blou en 1 geel albaster. Hoeveel gunstige uitkomste is daar om blou te kies?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Daar is 3 blou albasters in die sak, so daar is 3 gunstige uitkomste om blou te kies.' },
        { difficulty: 'Medium', question: 'ʼn Sak bevat 2 rooi, 3 blou en 1 geel albaster. Hoeveel gunstige uitkomste is daar om rooi te kies?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2'], explanation: 'Daar is 2 rooi albasters in die sak, so daar is 2 gunstige uitkomste om rooi te kies.' },
        { difficulty: 'Medium', question: 'ʼn Dobbelsteen word een keer gegooi. Lys die gunstige uitkomste vir die gebeurtenis "ʼn getal groter as 4 gooi".', answer: '5, 6', checkMode: 'auto', correctAnswer: '56', correctAnswers: ['56'], explanation: 'Getalle groter as 4 op ʼn dobbelsteen is 5 en 6 — dit is die 2 gunstige uitkomste.' },
        { difficulty: 'Medium', question: 'ʼn Dobbelsteen word een keer gegooi. Lys die gunstige uitkomste vir die gebeurtenis "ʼn veelvoud van 3 gooi".', answer: '3, 6', checkMode: 'auto', correctAnswer: '36', correctAnswers: ['36'], explanation: 'Veelvoude van 3 op ʼn dobbelsteen (van 1 tot 6) is 3 en 6 — dit is die 2 gunstige uitkomste.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 6 gelyke afdelings genommer 1 tot 6. Hoeveel totale uitkomste is daar?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6'], explanation: 'Daar is 6 afdelings op die wieletjie, so daar is 6 totale uitkomste.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie is gekleur met 4 gelyke afdelings: rooi, blou, groen en geel. Lys alle moontlike uitkomste.', answer: 'Rooi, Blou, Groen, Geel', checkMode: 'auto', correctAnswer: 'rooiblougroengeel', correctAnswers: ['rooiblougroengeel'], explanation: 'Die wieletjie het 4 verskillende gekleurde afdelings, so die uitkomste is Rooi, Blou, Groen en Geel.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 6 albasters: 2 rooi en 4 blou. Lys die gunstige uitkomste (volgens kleur en telling) om rooi te kies, geskryf as "kleur: telling".', answer: 'rooi: 2', checkMode: 'auto', correctAnswer: 'rooi:2', correctAnswers: ['rooi:2', 'rooi2'], explanation: 'Daar is 2 rooi albasters uit die 6 totaal, so die gunstige uitkoms vir rooi is "rooi: 2".' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 8 gelyke afdelings genommer 1 tot 8. Lys die gunstige uitkomste vir landing op ʼn getal kleiner as 3.', answer: '1, 2', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12'], explanation: 'Getalle kleiner as 3 op die wieletjie is 1 en 2 — dit is die 2 gunstige uitkomste.' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 8 gelyke afdelings genommer 1 tot 8. Hoeveel gunstige uitkomste is daar vir landing op ʼn ewe getal?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Ewe getalle van 1 tot 8 is 2, 4, 6, 8 — dit is 4 gunstige uitkomste.' },
        { difficulty: 'Hard', question: 'Twee muntstukke word saam opgegooi, een na die ander. Lys al 4 moontlike uitkomste as pare (gebruik K vir kop en S vir stert), geskei deur kommas.', answer: 'KK, KS, SK, SS', checkMode: 'auto', correctAnswer: 'kkksskss', correctAnswers: ['kkksskss'], explanation: 'Elke muntstuk kan K of S wees. Die eerste muntstuk kan K of S wees, en vir elkeen daarvan kan die tweede muntstuk ook K of S wees, wat 4 kombinasies gee: KK, KS, SK, SS.' },
        { difficulty: 'Hard', question: 'ʼn Sak het altesaam 10 albasters: sommige rooi en sommige blou. As daar 6 gunstige uitkomste is om rooi te kies, hoeveel blou albasters is in die sak?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4'], explanation: 'Totale albasters = 10. Rooi albasters = 6. Blou albasters = 10 − 6 = 4.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan uitkomste en gunstige uitkomste met selfvertroue lys.' },
        { minScore: 19, message: 'Goed gedaan! Jy verstaan uitkomste goed — gaan enige foute weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die lys van uitkomste weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan oefen — gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — WERKLIKE-LEWE WAARSKYNLIKHEID WOORDPROBLEME / VOORSPELLINGS (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Voorspellings en Werklike-Lewe Probleme',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 12 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn 2 gegooi word?', answer: '2 keer', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2keer'], explanation: 'ʼn Dobbelsteen het 6 gelyke uitkomste. ʼn 2 gooi is 1 uit 6. 12 ÷ 6 = 2 keer.' },
        { difficulty: 'Easy', question: 'ʼn Dobbelsteen word 18 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn 3 gegooi word?', answer: '3 keer', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3keer'], explanation: 'ʼn Dobbelsteen het 6 gelyke uitkomste. ʼn 3 gooi is 1 uit 6. 18 ÷ 6 = 3 keer.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 40 keer opgegooi. Hoeveel keer sou jy voorspel dat jy kop kry?', answer: '20 keer', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20keer'], explanation: 'Kop is 1 uit 2 uitkomste. Helfte van 40 = 20 keer.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 60 keer opgegooi. Hoeveel keer sou jy voorspel dat jy stert kry?', answer: '30 keer', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30keer'], explanation: 'Stert is 1 uit 2 uitkomste. Helfte van 60 = 30 keer.' },
        { difficulty: 'Easy', question: 'ʼn Muntstuk word 16 keer opgegooi. Hoeveel keer sou jy voorspel dat jy kop kry?', answer: '8 keer', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', '8keer'], explanation: 'Kop is 1 uit 2 uitkomste. Helfte van 16 = 8 keer.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 4 gelyke afdelings gekleur rooi, blou, groen en geel. Dit word 24 keer gedraai. Hoeveel keer sou jy voorspel dat dit op rooi land?', answer: '6 keer', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6keer'], explanation: 'Rooi is 1 uit 4 afdelings. 24 ÷ 4 = 6 keer.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 6 gelyke afdelings genommer 1 tot 6. Dit word 30 keer gedraai. Hoeveel keer sou jy voorspel dat dit op die getal 4 land?', answer: '5 keer', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5keer'], explanation: 'Landing op 4 is 1 uit 6 afdelings. 30 ÷ 6 = 5 keer.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 3 gelyke afdelings gekleur rooi, blou en groen. Dit word 27 keer gedraai. Hoeveel keer sou jy voorspel dat dit op blou land?', answer: '9 keer', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', '9keer'], explanation: 'Blou is 1 uit 3 afdelings. 27 ÷ 3 = 9 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 3 rooi albasters en 2 blou albasters. Jy kies ʼn albaster 25 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat rooi gekies word?', answer: '15 keer', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15keer'], explanation: 'Rooi is 3 uit 5 albasters. 3/5 × 25 = 15 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 3 rooi albasters en 2 blou albasters. Jy kies ʼn albaster 25 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat blou gekies word?', answer: '10 keer', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10keer'], explanation: 'Blou is 2 uit 5 albasters. 2/5 × 25 = 10 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 4 rooi albasters en 1 blou albaster. Jy kies ʼn albaster 40 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat rooi gekies word?', answer: '32 keer', checkMode: 'auto', correctAnswer: '32', correctAnswers: ['32', '32keer'], explanation: 'Rooi is 4 uit 5 albasters. 4/5 × 40 = 32 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 2 rooi albasters en 3 blou albasters. Jy kies ʼn albaster 30 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat blou gekies word?', answer: '18 keer', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18keer'], explanation: 'Blou is 3 uit 5 albasters. 3/5 × 30 = 18 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 2 rooi albasters en 3 blou albasters. Jy kies ʼn albaster 30 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat rooi gekies word?', answer: '12 keer', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12keer'], explanation: 'Rooi is 2 uit 5 albasters. 2/5 × 30 = 12 keer.' },
        { difficulty: 'Medium', question: 'ʼn Dobbelsteen word 24 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn ewe getal (2, 4 of 6) gegooi word?', answer: '12 keer', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', '12keer'], explanation: 'Ewe getalle is 3 uit 6 uitkomste (die helfte). Helfte van 24 = 12 keer.' },
        { difficulty: 'Medium', question: 'ʼn Dobbelsteen word 36 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn onewe getal (1, 3 of 5) gegooi word?', answer: '18 keer', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18keer'], explanation: 'Onewe getalle is 3 uit 6 uitkomste (die helfte). Helfte van 36 = 18 keer.' },
        { difficulty: 'Medium', question: 'Sipho voorspel dat hy ʼn ewe getal 10 keer uit 20 gooie sal gooi. Hy gooi werklik ʼn ewe getal 12 keer. Hoeveel meer ewe getalle het hy gegooi as voorspel?', answer: '2 meer', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2meer'], explanation: '12 (werklik) − 10 (voorspel) = 2 meer as voorspel.' },
        { difficulty: 'Medium', question: 'Lerato voorspel dat sy 20 keer uit 40 opgooie kop sal kry. Sy kry werklik 22 keer kop. Hoeveel meer koppe het sy gekry as voorspel?', answer: '2 meer', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', '2meer'], explanation: '22 (werklik) − 20 (voorspel) = 2 meer as voorspel.' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Dit word 45 keer gedraai. Hoeveel keer sou jy voorspel dat dit op ʼn onewe getal (1, 3 of 5) land?', answer: '27 keer', checkMode: 'auto', correctAnswer: '27', correctAnswers: ['27', '27keer'], explanation: 'Onewe getalle is 3 uit 5 afdelings. 3/5 × 45 = 27 keer.' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Dit word 45 keer gedraai. Hoeveel keer sou jy voorspel dat dit op ʼn ewe getal (2 of 4) land?', answer: '18 keer', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18keer'], explanation: 'Ewe getalle is 2 uit 5 afdelings. 2/5 × 45 = 18 keer.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word 30 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn getal kleiner as 3 (dit wil sê, 1 of 2) gegooi word?', answer: '10 keer', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10keer'], explanation: 'Getalle kleiner as 3 is 2 uit 6 uitkomste. 2/6 × 30 = 10 keer.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word 42 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn getal groter as 4 (dit wil sê, 5 of 6) gegooi word?', answer: '14 keer', checkMode: 'auto', correctAnswer: '14', correctAnswers: ['14', '14keer'], explanation: 'Getalle groter as 4 is 2 uit 6 uitkomste. 2/6 × 42 = 14 keer.' },
        { difficulty: 'Hard', question: 'Amahle gooi ʼn muntstuk 50 keer op en kry 28 koppe en 22 sterte. Wat was die voorspelde aantal koppe?', answer: '25', checkMode: 'auto', correctAnswer: '25', correctAnswers: ['25', '25keer'], explanation: 'Kop is 1 uit 2 uitkomste. Helfte van 50 = 25 koppe.' },
        { difficulty: 'Hard', question: 'Amahle gooi ʼn muntstuk 50 keer op en kry 28 koppe en 22 sterte. Hoeveel meer koppe as voorspel het sy gekry?', answer: '3 meer', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', '3meer'], explanation: '28 (werklik) − 25 (voorspel) = 3 meer koppe as voorspel.' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 4 gelyke afdelings gekleur rooi, blou, groen en geel. Dit word 40 keer gedraai. As rooi 13 keer voorkom, wat is die verskil tussen die werklike en voorspelde aantal rooies?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3'], explanation: 'Voorspelde rooi = 1/4 × 40 = 10. Werklik = 13. Verskil = 13 − 10 = 3.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 3 rooi albasters en 1 blou albaster. As jy ʼn albaster 100 keer sou kies (en dit elke keer vervang), hoeveel keer sou jy voorspel dat rooi gekies word?', answer: '75 keer', checkMode: 'auto', correctAnswer: '75', correctAnswers: ['75', '75keer'], explanation: 'Rooi is 3 uit 4 albasters. 3/4 × 100 = 75 keer.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Fantasties! Jy kan uitkomste voorspel en dit met selfvertroue met werklike resultate vergelyk.' },
        { minScore: 19, message: 'Goed gedaan! Jy verstaan voorspellings goed — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan hersien hoe om voorspellings te bereken en probeer weer.' },
        { minScore: 0, message: 'Hou aan oefen — werk weer deur die studiegids voor jy weer probeer.' },
      ],
    },
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — VEELSTAP / GEKOMBINEERDE + SELF-NASIEN REDENASIE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelstap-probleme en Redenasie',
      questions: [
        { difficulty: 'Easy', question: 'Klassifiseer hierdie gebeurtenis en verduidelik jou redenasie: "ʼn Swart sok kies uit ʼn laai met 10 swart sokke en 0 wit sokke."', answer: 'Seker — elke sok in die laai is swart, so om ʼn swart sok te kies is gewaarborg om elke enkele keer te gebeur.', checkMode: 'self' },
        { difficulty: 'Easy', question: 'Klassifiseer hierdie gebeurtenis en verduidelik jou redenasie: "ʼn Getal tussen 1 en 6 (ingesluit) gooi op ʼn standaard dobbelsteen."', answer: 'Seker — ʼn standaard dobbelsteen het net die getalle 1 tot 6, so elke moontlike gooi is tussen 1 en 6.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Dobbelsteen word 60 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn spesifieke getal, byvoorbeeld ʼn 5, gegooi word?', answer: '10 keer', checkMode: 'auto', correctAnswer: '10', correctAnswers: ['10', '10keer'], explanation: 'ʼn Spesifieke getal gooi is 1 uit 6 uitkomste. 60 ÷ 6 = 10 keer.' },
        { difficulty: 'Medium', question: 'ʼn Dobbelsteen word 48 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn veelvoud van 3 (dit wil sê, 3 of 6) gegooi word?', answer: '16 keer', checkMode: 'auto', correctAnswer: '16', correctAnswers: ['16', '16keer'], explanation: 'Veelvoude van 3 is 2 uit 6 uitkomste. 2/6 × 48 = 16 keer.' },
        { difficulty: 'Medium', question: 'ʼn Wieletjie het 8 gelyke afdelings genommer 1 tot 8. Dit word 56 keer gedraai. Hoeveel keer sou jy voorspel dat dit op ʼn spesifieke getal, byvoorbeeld ʼn 6, land?', answer: '7 keer', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7keer'], explanation: 'Landing op ʼn spesifieke getal is 1 uit 8 uitkomste. 56 ÷ 8 = 7 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 2 rooi en 4 blou albasters (6 altesaam). Jy kies ʼn albaster 45 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat blou gekies word?', answer: '30 keer', checkMode: 'auto', correctAnswer: '30', correctAnswers: ['30', '30keer'], explanation: 'Blou is 4 uit 6 albasters. 4/6 × 45 = 30 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 2 rooi en 4 blou albasters (6 altesaam). Jy kies ʼn albaster 45 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat rooi gekies word?', answer: '15 keer', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', '15keer'], explanation: 'Rooi is 2 uit 6 albasters. 2/6 × 45 = 15 keer.' },
        { difficulty: 'Medium', question: 'ʼn Sak het 5 rooi, 3 blou en 2 geel albasters (10 altesaam). Jy kies ʼn albaster 20 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat geel gekies word?', answer: '4 keer', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', '4keer'], explanation: 'Geel is 2 uit 10 albasters. 2/10 × 20 = 4 keer.' },
        { difficulty: 'Medium', question: 'As jy werklik 18 koppe kry na 30 muntstukopgooie (voorspel 15), is dit ʼn redelike resultaat? Verduidelik jou antwoord.', answer: 'Ja — 18 is redelik naby aan die voorspelling van 15. Die verskil is slegs 3, wat klein is in vergelyking met 30 opgooie. Werklike resultate verskil elke keer as ʼn eksperiment gedoen word.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'Jy kies 16 keer rooi uit 20 keuses uit ʼn sak met 3 rooi en 1 blou albaster (voorspel 15). Is dit naby aan jou voorspelling? Verduidelik jou antwoord.', answer: 'Ja — 16 is baie naby aan die voorspelling van 15. Die verskil is slegs 1, wat klein is. Werklike resultate stem selde presies ooreen met voorspellings; ʼn klein variasie soos hierdie is heeltemal normaal.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sak het 5 rooi en 3 blou albasters (8 altesaam). Jy kies ʼn albaster 40 keer en vervang dit elke keer. Vind eers die breuk van keuses wat jy sou voorspel om blou te wees, en dan hoeveel keer uit 40 jy sou voorspel dat blou gekies word.', answer: '3/8, dan 15 keer', checkMode: 'auto', correctAnswer: '3/815', correctAnswers: ['3/815'], explanation: 'Blou is 3 uit 8 albasters, so die breuk is 3/8. Dan 3/8 × 40 = 15 keer.' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 4 gelyke afdelings gekleur rooi, blou, groen en geel. Dit word 40 keer gedraai. Hoeveel keer sou jy voorspel dat dit op blou of groen saam land?', answer: '20 keer', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20keer'], explanation: 'Blou en groen saam is 2 uit 4 afdelings (die helfte). 1/2 × 40 = 20 keer.' },
        { difficulty: 'Hard', question: 'Lerato gooi ʼn muntstuk 50 keer op en kry 28 koppe en 22 sterte. As sy die muntstuk nog 50 keer opgooi, sou jy weer presies 25 koppe verwag? Verduidelik jou antwoord.', answer: 'Nee — werklike resultate verskil elke keer as jy ʼn eksperiment herhaal. Lerato mag 23, 26, of 28 koppe kry in die volgende 50 opgooie. Daar is geen waarborg van presies 25 nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Wat gebeur met waarskynlikheidsresultate namate jy meer en meer proewe doen? Verduidelik jou antwoord.', answer: 'Hoe meer proewe jy doen, hoe nader kom die werklike resultate aan die voorspelde waarskynlikheid. Met duisende opgooie sal die verhouding koppe baie naby aan 1/2 kom.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sak het 2 rooi en 3 blou albasters (5 altesaam). Jy kies ʼn albaster 30 keer en vervang dit elke keer, en kry 19 blou keuses. Wat was die voorspelde aantal blou keuses, en wat is die verskil tussen werklik en voorspel?', answer: '18 voorspel, verskil van 1', checkMode: 'auto', correctAnswer: '181', correctAnswers: ['181'], explanation: 'Voorspelde blou = 3/5 × 30 = 18. Werklik = 19. Verskil = 19 − 18 = 1.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word 20 keer gegooi. Sou jy voorspel dat ʼn onewe getal (1, 3 of 5) ongeveer 10 keer gegooi word? Verduidelik jou redenasie met breuke.', answer: 'Ja — onewe getalle is 3 uit 6 uitkomste op ʼn dobbelsteen, wat presies die helfte is. Helfte van 20 gooie = 10, so om 10 onewe getalle te voorspel is redelik.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 6 gelyke afdelings gekleur 2 rooi, 2 blou en 2 groen. Dit word 54 keer gedraai. Hoeveel keer sou jy voorspel dat dit op groen land?', answer: '18 keer', checkMode: 'auto', correctAnswer: '18', correctAnswers: ['18', '18keer'], explanation: 'Groen is 2 uit 6 afdelings. 2/6 × 54 = 18 keer.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word 54 keer gegooi. Hoeveel keer sou jy voorspel dat ʼn ewe getal gegooi word, en hoe vergelyk dit met ʼn onewe getal gooi?', answer: '27 keer vir ewe, en dieselfde 27 keer vir onewe, aangesien ewe en onewe getalle ewe waarskynlik is op ʼn dobbelsteen.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Jy draai ʼn wieletjie met 4 gelyke afdelings (rooi, blou, groen, geel) 40 keer en land 6 keer op rooi. Was jou resultaat naby aan die voorspelling? Gee die voorspelde waarde, die werklike waarde, en die verskil, geskei deur kommas.', answer: '10, 6, 4', checkMode: 'auto', correctAnswer: '1064', correctAnswers: ['1064'], explanation: 'Voorspelde rooi = 1/4 × 40 = 10. Werklik = 6. Verskil = 10 − 6 = 4.' },
        { difficulty: 'Hard', question: 'ʼn Sak het 1 rooi en 9 blou albasters (10 altesaam). Jy kies ʼn albaster 50 keer en vervang dit elke keer. Is die kies van rooi waarskynlik of onwaarskynlik, en hoeveel keer uit 50 sou jy voorspel dat rooi gekies word?', answer: 'Onwaarskynlik; 5 keer', checkMode: 'auto', correctAnswer: 'onwaarskynlik5', correctAnswers: ['onwaarskynlik5'], explanation: 'Net 1 uit 10 albasters is rooi, so dit is onwaarskynlik. Voorspelde rooi = 1/10 × 50 = 5 keer.' },
        { difficulty: 'Hard', question: 'ʼn Dobbelsteen word 18 keer gegooi en ʼn 6 word 5 keer gegooi. Vergelyk die werklike resultaat met die voorspelling en verduidelik of dit redelik is.', answer: 'Voorspelde 6\'e = 1/6 × 18 = 3. Werklik = 5. Die verskil is 2, wat ʼn klein variasie is vir slegs 18 gooie, so dit is ʼn redelike resultaat alhoewel dit ietwat hoër as voorspel is.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Wieletjie het 5 gelyke afdelings genommer 1 tot 5. Dit word 100 keer gedraai. Hoeveel keer sou jy voorspel dat dit op die getal 3 land?', answer: '20 keer', checkMode: 'auto', correctAnswer: '20', correctAnswers: ['20', '20keer'], explanation: 'Landing op ʼn spesifieke getal is 1 uit 5 uitkomste. 1/5 × 100 = 20 keer.' },
        { difficulty: 'Hard', question: 'Twee vriende gooi elk ʼn dobbelsteen 30 keer. Thabo voorspel 15 ewe getalle en gooi 17. Sipho voorspel 15 ewe getalle en gooi 9. Wie se werklike resultaat is nader aan die voorspelling, en met hoeveel?', answer: 'Thabo — sy verskil is 17 − 15 = 2, terwyl Sipho se verskil 15 − 9 = 6 is. Thabo se resultaat is 4 nader.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sak het 3 rooi, 3 blou en 4 geel albasters (10 altesaam). Verduidelik watter kleur die waarskynlikste gekies gaan word en watter die onwaarskynlikste, en gee die aantal gunstige uitkomste vir elke kleur.', answer: 'Geel is die waarskynlikste met 4 gunstige uitkomste uit 10. Rooi en blou is ewe waarskynlik as mekaar, elkeen met 3 gunstige uitkomste uit 10, wat hulle minder waarskynlik as geel maak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Sak het 4 rooi, 2 blou en 2 geel albasters (8 altesaam). Jy kies ʼn albaster 32 keer en vervang dit elke keer. Hoeveel keer sou jy voorspel dat rooi of geel saam gekies word?', answer: '24 keer', checkMode: 'auto', correctAnswer: '24', correctAnswers: ['24', '24keer'], explanation: 'Rooi of geel saam is 4 + 2 = 6 uit 8 albasters. 6/8 × 32 = 24 keer.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitmuntend! Jy kan veelstap-waarskynlikheidsprobleme aanpak en jou redenasie duidelik verduidelik.' },
        { minScore: 19, message: 'Goed gedaan! Jy het ʼn sterk begrip van gekombineerde waarskynlikheidsprobleme — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die veelstap-voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan oefen — gaan al vier stelle en die uitgewerkte voorbeelde weer deur voor jy weer probeer.' },
      ],
    },
  ],
}
