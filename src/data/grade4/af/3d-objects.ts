import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: '3D-voorwerpe',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS 3D-VOORWERPE?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-3d-objects',
      title: 'Wat is 3D-voorwerpe?',
      icon: '📦',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>3D-voorwerp</strong> is ʼn <strong>soliede vorm</strong> met drie dimensies — <strong>lengte</strong>, <strong>breedte</strong> en <strong>hoogte</strong>. Anders as ʼn 2D-vorm, wat plat is, neem ʼn 3D-voorwerp ruimte in beslag. Jy kan dit optel, vashou en van verskillende kante bekyk.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Alledaagse voorbeelde 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>ʼn Boks:</strong> dit het lengte, breedte en hoogte — jy kan dit met goed vol pak</li>
    <li><strong>ʼn Bal:</strong> perfek rond en soliede — dit rol as gevolg van sy geboë oppervlak</li>
    <li><strong>ʼn Blik:</strong> dit het ʼn geboë sykant en twee plat sirkelvormige punte bo en onder</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Belangrike eienskappe van 3D-voorwerpe</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Vlakke</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Die <strong style="color:#1e40af;">plat of geboë oppervlakke</strong> van ʼn 3D-voorwerp. ʼn Vlak kan ʼn plat veelhoek wees (soos ʼn vierkant) of ʼn geboë oppervlak (soos die sykant van ʼn bal).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Rande</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Die <strong style="color:#dc2626;">lyne waar twee plat vlakke ontmoet</strong>. Jy kan ʼn rand as ʼn skerp lyn langs ʼn boks voel. Geboë oppervlakke vorm nie rande met mekaar nie.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Hoekpunte</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Die <strong style="color:#16a34a;">hoeke waar rande ontmoet</strong>. ʼn Hoekpunt is ʼn skerp punt. Die punt van ʼn keël is ʼn hoekpunt. ʼn Bol het geen hoekpunte nie omdat dit geen rande het nie.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Algemene 3D-voorwerpe</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;border-radius:6px 0 0 0;">Voorwerp</th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#1e40af;">Vlakke</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#dc2626;">Rande</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;border-radius:0 6px 0 0;"><span style="color:#16a34a;">Hoekpunte</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Bol</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">0 plat vlakke<br/><span style="font-size:12px;">(1 geboë oppervlak)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">0</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">0</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Kubus</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">6 <span style="font-size:12px;">(almal vierkante)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">12</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">8</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Reghoekige prisma</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">6 <span style="font-size:12px;">(reghoeke)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">12</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">8</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Keël</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">1 plat sirkelvormige vlak<br/><span style="font-size:12px;">(+ 1 geboë oppervlak)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">1</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">1</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Silinder</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">2 plat sirkelvormige vlakke<br/><span style="font-size:12px;">(+ 1 geboë oppervlak)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">2</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">0</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Driehoekige piramide</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">4 <span style="font-size:12px;font-weight:400;color:#64748b;">(driehoeke)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Vierkantige piramide</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">5 <span style="font-size:12px;">(1 vierkant + 4 driehoeke)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">8</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">5</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Beskryf ʼn kubus deur sy eienskappe te gebruik.',
          steps: [
            '<strong style="color:#1e40af;">Tel die vlakke</strong> — ʼn kubus het <strong>6 vlakke</strong> en elke vlak is ʼn vierkant.',
            '<strong style="color:#dc2626;">Tel die rande</strong> — ʼn kubus het <strong>12 rande</strong>. Omdat al die vlakke gelyke vierkante is, is al 12 rande dieselfde lengte.',
            '<strong style="color:#16a34a;">Tel die hoekpunte</strong> — ʼn kubus het <strong>8 hoekpunte</strong>, een by elke hoek waar drie rande ontmoet.',
          ],
          answer:
            'ʼn Kubus het 6 vierkantige vlakke, 12 rande en 8 hoekpunte. Al die rande is gelyk in lengte.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Sewe 3D-voorwerpe duidelik geëtiketteer — bol, kubus, reghoekige prisma, keël, silinder, driehoekige piramide, vierkantige piramide — elkeen met vlakke, rande en hoekpunte geëtiketteer',
      videoPlaceholder:
        'Kort video wat die eienskappe van algemene 3D-voorwerpe benoem en beskryf deur van alledaagse voorbeelde gebruik te maak',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — SORTEER EN KLASSIFISEER 3D-VOORWERPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-classifying-3d-objects',
      title: 'Sorteer en Klassifiseer 3D-voorwerpe',
      icon: '🗂️',
      explanation: `
<p style="margin-bottom:14px;">Net soos 2D-vorms kan <strong>3D-voorwerpe gesorteer en geklassifiseer word</strong> volgens hul eienskappe. Jy kan hulle groepeer volgens hoe hul oppervlakke lyk en voel, of hulle kan rol of stapel, en hoeveel vlakke hulle het.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Maniere om 3D-voorwerpe te sorteer</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens vorm van vlakke</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Slegs plat vlakke — kubus, reghoekige prisma, piramides</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Geboë oppervlak — bol, keël, silinder</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Voorwerpe met <strong>slegs plat vlakke</strong> word <em>veelvlakke</em> genoem. Voorwerpe met ʼn geboë oppervlak is nie veelvlakke nie.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens vermoë om te rol</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Kan rol — bol, keël, silinder</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Kan nie rol nie — kubus, reghoekige prisma, piramides</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Voorwerpe met ʼn <strong>geboë oppervlak</strong> kan rol. Voorwerpe met slegs plat vlakke lê plat en kan nie rol nie.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens vermoë om te stapel</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Kan stapel — kubus, reghoekige prisma, silinder</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Kan nie maklik stapel nie — bol, keël</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Voorwerpe met <strong>plat vlakke</strong> kan op mekaar gestapel word. ʼn Bol rol weg en ʼn keël balanseer op sy punt — geeneen van hulle stapel maklik nie.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens aantal vlakke</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Driehoekige prisma — 5 vlakke</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Kubus / reghoekige prisma — 6 vlakke</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Driehoekige piramide — 4 vlakke</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Vierkantige piramide — 5 vlakke</span>
      </div>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Prismas vs Piramides 📐</span>
  <div style="display:flex;flex-direction:column;gap:10px;margin-top:10px;">
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Prisma</span>
      <span style="color:#78350f;font-size:15px;padding-top:1px;">Het <strong>twee identiese parallelle basisse</strong> wat deur reghoekige vlakke verbind word. Die basisse kan enige veelhoek wees — ʼn driehoekige prisma het driehoekbasisse, ʼn reghoekige prisma het reghoekbasisse. ʼn Kubus is ʼn spesiale reghoekige prisma met vierkantige basisse.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:10px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Piramide</span>
      <span style="color:#78350f;font-size:15px;padding-top:1px;">Het <strong>een basis</strong> met <strong>driehoekige vlakke</strong> wat almal by ʼn enkele punt bo-aan ontmoet, genoem die <strong>apeks</strong>. ʼn Vierkantige piramide het ʼn vierkantige basis. ʼn Driehoekige piramide (tetraëder) het ʼn driehoekbasis.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Sorteer hierdie voorwerpe in kan rol en kan nie rol nie: bol, kubus, keël, silinder, reghoekige prisma.',
          steps: [
            'Kyk na elke voorwerp: het dit ʼn <strong style="color:#dc2626;">geboë oppervlak</strong>?',
            '<strong style="color:#1e40af;">Bol</strong> — heeltemal geboë oppervlak ✔ kan rol.',
            '<strong style="color:#1e40af;">Keël</strong> — geboë sy-oppervlak ✔ kan rol.',
            '<strong style="color:#1e40af;">Silinder</strong> — geboë sy-oppervlak ✔ kan rol.',
            '<strong style="color:#64748b;">Kubus</strong> — slegs 6 plat vlakke ✘ kan nie rol nie.',
            '<strong style="color:#64748b;">Reghoekige prisma</strong> — slegs 6 plat vlakke ✘ kan nie rol nie.',
          ],
          answer:
            'Kan rol: bol, keël, silinder.\nKan nie rol nie: kubus, reghoekige prisma.',
        },
        {
          question:
            'Sorteer hierdie voorwerpe in prismas en piramides: driehoekige prisma, vierkantige piramide, reghoekige prisma, driehoekige piramide, kubus.',
          steps: [
            'ʼn <strong style="color:#1e40af;">Prisma</strong> het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word.',
            'ʼn <strong style="color:#dc2626;">Piramide</strong> het een basis met driehoekige vlakke wat by ʼn apeks ontmoet.',
            '<strong>Driehoekige prisma</strong> — twee driehoekbasisse verbind deur reghoeke ✔ prisma.',
            '<strong>Reghoekige prisma</strong> — twee reghoekbasisse verbind deur reghoeke ✔ prisma.',
            '<strong>Kubus</strong> — twee vierkantige basisse verbind deur gelyke vierkante (spesiale reghoekige prisma) ✔ prisma.',
            '<strong>Vierkantige piramide</strong> — een vierkantige basis met 4 driehoekige vlakke wat by ʼn apeks ontmoet ✔ piramide.',
            '<strong>Driehoekige piramide</strong> — een driehoekbasis met 3 driehoekige vlakke wat by ʼn apeks ontmoet ✔ piramide.',
          ],
          answer:
            'Prismas: driehoekige prisma, reghoekige prisma, kubus.\nPiramides: vierkantige piramide, driehoekige piramide.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Twee kolomme — linkerkolom wys voorwerpe wat kan rol (bol, keël, silinder) met geboë oppervlakke uitgelig, regterkolom wys voorwerpe wat nie kan rol nie (kubus, reghoekige prisma, piramides) met plat vlakke uitgelig',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VERGELYK 2D-VORMS EN 3D-VOORWERPE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-2d-shapes-and-3d-objects',
      title: 'Vergelyk 2D-vorms en 3D-voorwerpe',
      icon: '🔗',
      explanation: `
<p style="margin-bottom:14px;">Elke 3D-voorwerp is gebou uit <strong>2D-vorms</strong>. Die plat oppervlakke (vlakke) van ʼn 3D-voorwerp is 2D-vorms. As jy ʼn 3D-voorwerp uitmekaar sou haal en elke vlak plat op ʼn tafel neersit, sou jy presies sien uit watter 2D-vorms dit gemaak is.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Belangrike idee 💡</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">ʼn <strong>2D-vorm</strong> is plat — dit is ʼn vlak. ʼn <strong>3D-voorwerp</strong> is soliede — dit is gebou uit verskeie vlakke wat aanmekaar gevoeg is. Dink aan ʼn kartondoos: vou dit oop en jy sien plat reghoeke. Vou dit weer toe en jy het ʼn 3D reghoekige prisma.</p>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">2D-vorms wat elke 3D-voorwerp saamstel</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Kubus</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Bestaan uit <strong style="color:#1e40af;">6 vierkante</strong> — al die vlakke is identiese vierkante.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Reghoekige prisma</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Bestaan uit <strong style="color:#1e40af;">6 reghoeke</strong> — teenoorstaande vlakke is identiese reghoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Driehoekige prisma</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong style="color:#1e40af;">2 driehoeke</strong> (die twee basisse) en <strong style="color:#1e40af;">3 reghoeke</strong> (die verbindende sy-vlakke).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Vierkantige piramide</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong style="color:#1e40af;">1 vierkant</strong> (die basis) en <strong style="color:#1e40af;">4 driehoeke</strong> (die skuins sy-vlakke).</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;min-width:160px;text-align:center;">Silinder</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;"><strong style="color:#1e40af;">2 sirkels</strong> (die boonste en onderste vlakke) en <strong style="color:#1e40af;">1 reghoek</strong> wanneer die geboë sykant plat uitgerol word.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Watter 2D-vorms stel ʼn vierkantige piramide saam?',
          steps: [
            '<strong style="color:#16a34a;">Kyk na die basis</strong> — die onderste vlak van ʼn vierkantige piramide is ʼn <strong style="color:#1e40af;">vierkant</strong>.',
            '<strong style="color:#16a34a;">Kyk na die sye</strong> — elke skuins vlak is ʼn <strong style="color:#1e40af;">driehoek</strong>. Tel hulle: daar is <strong>4 driehoeke</strong>, een teen elke kant van die vierkantige basis.',
          ],
          answer: 'ʼn Vierkantige piramide bestaan uit 1 vierkant (die basis) en 4 driehoeke (die sy-vlakke).',
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — 3D-VOORWERPE IN DIE OMGEWING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '3d-objects-in-the-environment',
      title: '3D-voorwerpe in die Omgewing',
      icon: '🌍',
      explanation: `
<p style="margin-bottom:14px;">3D-voorwerpe is oral om ons! Om te leer hoe om hulle in die alledaagse lewe te herken, help jou om hul eienskappe op ʼn werklike en praktiese manier te verstaan. Sodra jy begin kyk, sal jy hulle in jou klaskamer, jou kombuis, buite en oral tussenin sien.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">3D-voorwerpe om jou</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Bol</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Bal, lemoen, wêreldbol, albaster</strong> — perfek rond met een deurlopende geboë oppervlak.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Kubus</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Dobbelsteen, ysblokkie, Rubik se kubus, sommige geskenkboksies</strong> — ses gelyke vierkantige vlakke en agt skerp hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Reghoekige prisma</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Graanboks, baksteen, boek, skoenboks</strong> — ses reghoekige vlakke, langer as wat dit wyd of hoog is.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Keël</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Roomysgetjie, partytjiehoed, verkeerskeël, tregter</strong> — ʼn plat sirkelvormige basis wat na ʼn skerp punt bo-aan smaller word.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Silinder</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Blik kos, toiletrol, tromp, battery</strong> — twee plat sirkelvormige punte verbind deur een geboë oppervlak.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Piramide</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Egiptiese piramides, sommige dakvorms, kristalversierings</strong> — ʼn plat basis met driehoekige sye wat na ʼn punt opstyg.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Watter 3D-voorwerp is ʼn blik boontjies en wat is sy eienskappe?',
          steps: [
            '<strong style="color:#1e40af;">Kyk na die boonste en onderste kant</strong> — ʼn blik het twee <strong>plat sirkelvormige vlakke</strong>, een bo en een onder.',
            '<strong style="color:#1e40af;">Kyk na die sykant</strong> — die sykant is een <strong>geboë oppervlak</strong> wat heeltemal rondom draai.',
            '<strong style="color:#dc2626;">Tel die rande</strong> — daar is <strong>2 rande</strong>, een waar elke sirkelvormige vlak die geboë oppervlak ontmoet.',
            '<strong style="color:#16a34a;">Tel die hoekpunte</strong> — ʼn silinder het <strong>geen hoekpunte</strong> nie omdat geen rande by ʼn skerp punt ontmoet nie.',
          ],
          answer:
            'ʼn Blik boontjies is ʼn silinder. Dit het 2 plat sirkelvormige vlakke, 1 geboë oppervlak, 2 rande en 0 hoekpunte.',
        },
      ],
      practiceQuestions: [],
      diagramPlaceholder:
        'Ses regte-lewe voorwerpe elkeen geëtiketteer met hul 3D-voorwerpnaam — ʼn dobbelsteen (kubus), ʼn graanboks (reghoekige prisma), ʼn bal (bol), ʼn roomysgetjie (keël), ʼn blik (silinder), ʼn Egiptiese piramide (vierkantige piramide)',
      videoPlaceholder:
        'Kort video wat 3D-voorwerpe in die alledaagse lewe wys en hul eienskappe identifiseer',
    },
  ],

  topicPractice: [

    // ── AFDELING 1 — Wat is 3D-voorwerpe ──────────────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Hoeveel vlakke, rande en hoekpunte het ʼn kubus?',
      checkMode: 'auto',
      answer: 'a) 6   b) 12   c) 8',
      parts: [
        {
          label: 'a) Vlakke',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses'],
          explanation: 'ʼn Kubus het 6 vlakke — elke vlak is ʼn vierkant.',
        },
        {
          label: 'b) Rande',
          correctAnswer: '12',
          correctAnswers: ['12', 'twaalf'],
          explanation: 'ʼn Kubus het 12 rande — vier op die boonste vlak, vier op die onderste vlak en vier wat hulle vertikaal verbind.',
        },
        {
          label: 'c) Hoekpunte',
          correctAnswer: '8',
          correctAnswers: ['8', 'agt'],
          explanation: 'ʼn Kubus het 8 hoekpunte — een by elke hoek waar drie rande ontmoet.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Beskryf die eienskappe van ʼn vierkantige piramide. Sluit die aantal en vorm van vlakke, rande en hoekpunte in.',
      checkMode: 'self',
      answer:
        'ʼn Vierkantige piramide het 5 vlakke (1 vierkantige basis en 4 driehoekige sy-vlakke), 8 rande en 5 hoekpunte. Die 4 driehoekige vlakke loop skuins opwaarts vanaf die vierkantige basis en ontmoet by ʼn enkele punt genoem die apeks.',
    },

    // V3a — outomaties nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn 3D-voorwerp het 2 plat sirkelvormige vlakke, 1 geboë oppervlak en 2 rande. Dit het geen hoekpunte nie.',
      checkMode: 'auto',
      answer: 'a) Silinder',
      parts: [
        {
          label: 'a) Naam van hierdie voorwerp',
          correctAnswer: 'Silinder',
          correctAnswers: ['Silinder', 'silinder', 'ʼn silinder'],
          explanation:
            'Twee plat sirkelvormige vlakke, een geboë oppervlak en twee rande met geen hoekpunte nie beskryf ʼn silinder.',
        },
      ],
    },

    // V3b/c — self nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn 3D-voorwerp het 2 plat sirkelvormige vlakke, 1 geboë oppervlak en 2 rande. Dit het geen hoekpunte nie.\nb) Noem twee regte-lewe voorbeelde van hierdie voorwerp.\nc) Kan hierdie voorwerp rol? Verduidelik waarom.',
      checkMode: 'self',
      answer:
        'b) Enige twee van: ʼn blik kos, ʼn toiletrol, ʼn tromp, ʼn battery.\nc) Ja, dit kan rol. ʼn Silinder het ʼn geboë oppervlak langs sy sykant, wat dit toelaat om te rol wanneer dit op sy sykant geplaas word.',
    },

    // ── AFDELING 2 — Sorteer en Klassifiseer 3D-voorwerpe ───────────────────────

    {
      difficulty: 'Easy',
      question: 'Kan ʼn bol rol? Skryf ja of nee en verduidelik waarom.',
      checkMode: 'self',
      answer:
        'Ja. ʼn Bol kan rol omdat dit ʼn heeltemal geboë oppervlak het met geen plat vlakke of rande om dit te keer nie.',
    },

    {
      difficulty: 'Medium',
      question:
        'Sorteer hierdie voorwerpe in twee groepe — kan rol en kan nie rol nie:\nbol, kubus, keël, silinder, reghoekige prisma, driehoekige piramide',
      checkMode: 'auto',
      answer: 'a) bol, keël, silinder   b) kubus, reghoekige prisma, driehoekige piramide',
      parts: [
        {
          label: 'a) Kan rol',
          correctAnswer: 'bol, keël, silinder',
          correctAnswers: [
            'bol, keël, silinder',
            'bol, silinder, keël',
            'keël, bol, silinder',
            'keël, silinder, bol',
            'silinder, bol, keël',
            'silinder, keël, bol',
          ],
          explanation:
            'Bol, keël en silinder het almal ʼn geboë oppervlak, wat hulle toelaat om te rol.',
        },
        {
          label: 'b) Kan nie rol nie',
          correctAnswer: 'kubus, reghoekige prisma, driehoekige piramide',
          correctAnswers: [
            'kubus, reghoekige prisma, driehoekige piramide',
            'kubus, driehoekige piramide, reghoekige prisma',
            'reghoekige prisma, kubus, driehoekige piramide',
            'reghoekige prisma, driehoekige piramide, kubus',
            'driehoekige piramide, kubus, reghoekige prisma',
            'driehoekige piramide, reghoekige prisma, kubus',
          ],
          explanation:
            'Kubus, reghoekige prisma en driehoekige piramide het slegs plat vlakke — daar is geen geboë oppervlak om op te rol nie.',
        },
      ],
    },

    // V6 a/b — outomaties nagesien
    {
      difficulty: 'Hard',
      question:
        'Sorteer hierdie in prismas en piramides:\ndriehoekige prisma, vierkantige piramide, reghoekige prisma, driehoekige piramide, kubus',
      checkMode: 'auto',
      answer: 'a) driehoekige prisma, reghoekige prisma, kubus   b) vierkantige piramide, driehoekige piramide',
      parts: [
        {
          label: 'a) Prismas',
          correctAnswer: 'driehoekige prisma, reghoekige prisma, kubus',
          correctAnswers: [
            'driehoekige prisma, reghoekige prisma, kubus',
            'driehoekige prisma, kubus, reghoekige prisma',
            'reghoekige prisma, driehoekige prisma, kubus',
            'reghoekige prisma, kubus, driehoekige prisma',
            'kubus, driehoekige prisma, reghoekige prisma',
            'kubus, reghoekige prisma, driehoekige prisma',
          ],
          explanation:
            'ʼn Prisma het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word. Driehoekige prisma, reghoekige prisma en kubus voldoen almal aan hierdie reël (ʼn kubus is ʼn spesiale reghoekige prisma met vierkantige basisse).',
        },
        {
          label: 'b) Piramides',
          correctAnswer: 'vierkantige piramide, driehoekige piramide',
          correctAnswers: [
            'vierkantige piramide, driehoekige piramide',
            'driehoekige piramide, vierkantige piramide',
          ],
          explanation:
            'ʼn Piramide het een basis met driehoekige vlakke wat by ʼn enkele punt (apeks) ontmoet. Vierkantige piramide en driehoekige piramide volg albei hierdie reël.',
        },
      ],
    },

    // V6c — self nagesien
    {
      difficulty: 'Hard',
      question:
        'Sorteer hierdie in prismas en piramides:\ndriehoekige prisma, vierkantige piramide, reghoekige prisma, driehoekige piramide, kubus\nc) Wat is die hoofverskil tussen ʼn prisma en ʼn piramide?',
      checkMode: 'self',
      answer:
        'ʼn Prisma het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word. ʼn Piramide het een basis met driehoekige vlakke wat almal by ʼn enkele punt bo-aan ontmoet, genoem die apeks.',
    },

    // ── AFDELING 3 — Vergelyk 2D-vorms en 3D-voorwerpe ───────────────────────

    {
      difficulty: 'Easy',
      question: 'Watter 2D-vorm is die basis van ʼn vierkantige piramide?',
      checkMode: 'auto',
      answer: 'Vierkant',
      correctAnswer: 'Vierkant',
      correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'],
      explanation: 'Die basis van ʼn vierkantige piramide is ʼn vierkant — dit is waar die naam "vierkantige piramide" vandaan kom.',
    },

    {
      difficulty: 'Medium',
      question: 'Watter 2D-vorms stel ʼn driehoekige prisma saam?',
      checkMode: 'auto',
      answer: 'a) 2   b) 3   c) 5',
      parts: [
        {
          label: 'a) Hoeveel driehoeke het dit?',
          correctAnswer: '2',
          correctAnswers: ['2', 'twee'],
          explanation: 'ʼn Driehoekige prisma het 2 driehoekige vlakke — een aan elke kant, wat die twee parallelle basisse vorm.',
        },
        {
          label: 'b) Hoeveel reghoeke het dit?',
          correctAnswer: '3',
          correctAnswers: ['3', 'drie'],
          explanation: 'ʼn Driehoekige prisma het 3 reghoekige vlakke wat die twee driehoekbasisse verbind.',
        },
        {
          label: 'c) Totale aantal vlakke',
          correctAnswer: '5',
          correctAnswers: ['5', 'vyf'],
          explanation: '2 driehoeke + 3 reghoeke = 5 vlakke in totaal.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      question:
        'ʼn Kubus bestaan uit 6 vierkante. Elke vierkant het ʼn sylengte van 4 cm.',
      checkMode: 'auto',
      answer: 'a) 16cm   b) 16cm²   c) 12   d) 48cm',
      parts: [
        {
          label: 'a) Omtrek van een vlak',
          correctAnswer: '16cm',
          correctAnswers: ['16cm', '16 cm', '16'],
          explanation: 'Omtrek van ʼn vierkant = 4 × sylengte = 4 × 4 = 16 cm.',
        },
        {
          label: 'b) Oppervlakte van een vlak',
          correctAnswer: '16cm²',
          correctAnswers: ['16cm²', '16 cm²', '16cm2', '16 cm2', '16cm in die kwadraat', '16 cm in die kwadraat', '16'],
          explanation: 'Oppervlakte van ʼn vierkant = sy × sy = 4 × 4 = 16 cm².',
        },
        {
          label: 'c) Aantal rande',
          correctAnswer: '12',
          correctAnswers: ['12', 'twaalf'],
          explanation: 'ʼn Kubus het 12 rande — 4 op die boonste vlak, 4 op die onderste vlak en 4 vertikale rande wat hulle verbind.',
        },
        {
          label: 'd) Totale lengte van al die rande bymekaar getel',
          correctAnswer: '48cm',
          correctAnswers: ['48cm', '48 cm', '48'],
          explanation: 'Totale lengte = aantal rande × randlengte = 12 × 4 = 48 cm.',
        },
      ],
    },

    // ── AFDELING 4 — 3D-voorwerpe in die Omgewing ─────────────────────────────

    {
      difficulty: 'Easy',
      question: 'Noem die 3D-voorwerp wat elke item die beste beskryf.',
      checkMode: 'auto',
      answer: 'a) Bol   b) Reghoekige prisma   c) Keël',
      parts: [
        {
          label: 'a) ʼn Tennisbal',
          correctAnswer: 'Bol',
          correctAnswers: ['Bol', 'bol', 'ʼn bol'],
          explanation: 'ʼn Tennisbal is perfek rond met een deurlopende geboë oppervlak — dit is ʼn bol.',
        },
        {
          label: 'b) ʼn Baksteen',
          correctAnswer: 'Reghoekige prisma',
          correctAnswers: ['Reghoekige prisma', 'reghoekige prisma', 'ʼn reghoekige prisma', 'kuboïed', 'ʼn kuboïed'],
          explanation: 'ʼn Baksteen het 6 reghoekige vlakke, 12 rande en 8 hoekpunte — dit is ʼn reghoekige prisma.',
        },
        {
          label: 'c) ʼn Roomysgetjie',
          correctAnswer: 'Keël',
          correctAnswers: ['Keël', 'keël', 'ʼn keël'],
          explanation: 'ʼn Roomysgetjie het ʼn plat sirkelvormige basis wat na ʼn punt smaller word — dit is ʼn keël.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      question:
        'Vind een regte-lewe voorbeeld van elke 3D-voorwerp in jou huis of klaskamer.\na) Silinder\nb) Reghoekige prisma\nc) Bol',
      checkMode: 'self',
      answer:
        'Aanvaar enige geldige regte-lewe voorbeelde.\na) Silinder — bv. ʼn blik, ʼn toiletrol, ʼn battery, ʼn tromp.\nb) Reghoekige prisma — bv. ʼn graanboks, ʼn boek, ʼn baksteen, ʼn skoenboks.\nc) Bol — bv. ʼn bal, ʼn lemoen, ʼn albaster, ʼn wêreldbol.',
    },

    // V12 a/b/c — outomaties nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn Geskenk word toegedraai in ʼn boks met die vorm van ʼn reghoekige prisma. Die boks is 20 cm lank, 15 cm wyd en 10 cm hoog.',
      checkMode: 'auto',
      answer: 'a) 6   b) Reghoeke   c) 12',
      parts: [
        {
          label: 'a) Hoeveel vlakke het die boks?',
          correctAnswer: '6',
          correctAnswers: ['6', 'ses'],
          explanation: 'ʼn Reghoekige prisma het altyd 6 vlakke.',
        },
        {
          label: 'b) Watter 2D-vorm is die vlakke?',
          correctAnswer: 'Reghoeke',
          correctAnswers: ['Reghoeke', 'reghoeke', 'reghoek', 'Reghoek'],
          explanation: 'Al 6 vlakke van ʼn reghoekige prisma is reghoeke (teenoorstaande vlakke is identies).',
        },
        {
          label: 'c) Hoeveel rande het die boks?',
          correctAnswer: '12',
          correctAnswers: ['12', 'twaalf'],
          explanation: 'ʼn Reghoekige prisma het 12 rande — 4 langs die lengte, 4 langs die breedte en 4 langs die hoogte.',
        },
      ],
    },

    // V12d — self nagesien
    {
      difficulty: 'Hard',
      question:
        'ʼn Geskenk word toegedraai in ʼn boks met die vorm van ʼn reghoekige prisma. Die boks is 20 cm lank, 15 cm wyd en 10 cm hoog.\nd) As jy die boks in papier wil toedraai, hoeveel verskillende groottes reghoekige papier sal jy nodig hê?',
      checkMode: 'self',
      answer:
        '3 verskillende groottes:\n• Boonste en onderste vlakke (20 cm × 15 cm) — 2 hiervan\n• Voor- en agtervlakke (20 cm × 10 cm) — 2 hiervan\n• Linker- en regtersykant-vlakke (15 cm × 10 cm) — 2 hiervan',
    },

  ],

  scoreMessages: [
    { minScore: 28, message: 'Perfekte telling! Jy het 3D-voorwerpe onder die knie.' },
    { minScore: 21, message: 'Uitstekende werk! Gaan die vrae wat jy verkeerd gehad het weer deur en jy sal dit onder die knie hê.' },
    { minScore: 14, message: 'Goeie poging! Gaan terug en lees deur die afdelings waarmee jy gesukkel het.' },
    { minScore: 0, message: 'Hou aan! Lees weer noukeurig deur die studiegids en probeer dan weer.' },
  ],
}
