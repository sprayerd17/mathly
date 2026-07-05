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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
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
      openQuestions: [],
      diagramPlaceholder:
        'Ses regte-lewe voorwerpe elkeen geëtiketteer met hul 3D-voorwerpnaam — ʼn dobbelsteen (kubus), ʼn graanboks (reghoekige prisma), ʼn bal (bol), ʼn roomysgetjie (keël), ʼn blik (silinder), ʼn Egiptiese piramide (vierkantige piramide)',
      videoPlaceholder:
        'Kort video wat 3D-voorwerpe in die alledaagse lewe wys en hul eienskappe identifiseer',
    },
  ],

  topicPractice: [],

  practiceSets: [

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — VOORWERPE NOEM EN VLAKKE, RANDE, HOEKPUNTE TEL (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: 3D-voorwerpe Noem en Hul Eienskappe',
      questions: [
        { difficulty: 'Easy', question: 'Ek het 6 plat vierkantige vlakke, 12 rande en 8 hoekpunte. Watter 3D-voorwerp is ek?', answer: 'Kubus', checkMode: 'auto', correctAnswer: 'Kubus', correctAnswers: ['Kubus', 'kubus', 'ʼn kubus'], explanation: 'Ses gelyke vierkantige vlakke, 12 rande en 8 hoekpunte beskryf ʼn kubus.' },
        { difficulty: 'Easy', question: 'Ek het 6 reghoekige vlakke, 12 rande en 8 hoekpunte, maar my vlakke is nie almal vierkante nie. Watter 3D-voorwerp is ek?', answer: 'Reghoekige prisma', checkMode: 'auto', correctAnswer: 'Reghoekige prisma', correctAnswers: ['Reghoekige prisma', 'reghoekige prisma', 'ʼn reghoekige prisma', 'kuboïed', 'ʼn kuboïed'], explanation: 'Ses reghoekige vlakke (nie almal vierkante nie), 12 rande en 8 hoekpunte beskryf ʼn reghoekige prisma.' },
        { difficulty: 'Easy', question: 'Ek is perfek rond met net een geboë oppervlak. Ek het geen plat vlakke, rande of hoekpunte nie. Watter 3D-voorwerp is ek?', answer: 'Bol', checkMode: 'auto', correctAnswer: 'Bol', correctAnswers: ['Bol', 'bol', 'ʼn bol'], explanation: 'Een deurlopende geboë oppervlak met geen plat vlakke, rande of hoekpunte nie beskryf ʼn bol.' },
        { difficulty: 'Easy', question: 'Ek het ʼn plat sirkelvormige basis en een geboë oppervlak wat by die bopunt in ʼn punt eindig. Watter 3D-voorwerp is ek?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'ʼn Plat sirkelvormige basis met ʼn geboë oppervlak wat na ʼn punt smaller word, beskryf ʼn keël.' },
        { difficulty: 'Easy', question: 'Ek het twee plat sirkelvormige vlakke en een geboë oppervlak wat hulle verbind. Watter 3D-voorwerp is ek?', answer: 'Silinder', checkMode: 'auto', correctAnswer: 'Silinder', correctAnswers: ['Silinder', 'silinder', 'ʼn silinder'], explanation: 'Twee plat sirkelvormige vlakke verbind deur ʼn geboë oppervlak beskryf ʼn silinder.' },
        { difficulty: 'Easy', question: 'Ek het ʼn vierkantige basis en 4 driehoekige vlakke wat by ʼn punt bo-aan ontmoet. Watter 3D-voorwerp is ek?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: 'ʼn Vierkantige basis met 4 driehoekige vlakke wat by ʼn apeks ontmoet, beskryf ʼn vierkantige piramide.' },
        { difficulty: 'Easy', question: 'Ek het ʼn driehoekige basis en nog 3 driehoekige vlakke wat by ʼn punt bo-aan ontmoet. Watter 3D-voorwerp is ek?', answer: 'Driehoekige piramide', checkMode: 'auto', correctAnswer: 'Driehoekige piramide', correctAnswers: ['Driehoekige piramide', 'driehoekige piramide', 'ʼn driehoekige piramide', 'tetraëder', 'ʼn tetraëder'], explanation: 'Al 4 vlakke is driehoeke, wat by ʼn apeks ontmoet — dit beskryf ʼn driehoekige piramide (tetraëder).' },
        { difficulty: 'Easy', question: 'Ek het twee driehoekige vlakke en 3 reghoekige vlakke. Watter 3D-voorwerp is ek?', answer: 'Driehoekige prisma', checkMode: 'auto', correctAnswer: 'Driehoekige prisma', correctAnswers: ['Driehoekige prisma', 'driehoekige prisma', 'ʼn driehoekige prisma'], explanation: 'Twee driehoekige basisse verbind deur 3 reghoekige vlakke beskryf ʼn driehoekige prisma.' },
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn kubus?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Kubus het 6 vlakke — elke vlak is ʼn vierkant.' },
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn kubus?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twaalf'], explanation: 'ʼn Kubus het 12 rande — 4 op die boonste vlak, 4 op die onderste vlak en 4 wat hulle vertikaal verbind.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn kubus?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: 'ʼn Kubus het 8 hoekpunte — een by elke hoek waar drie rande ontmoet.' },
        { difficulty: 'Easy', question: 'Hoeveel vlakke het ʼn reghoekige prisma?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reghoekige prisma het altyd 6 reghoekige vlakke.' },
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn reghoekige prisma?', answer: '12', checkMode: 'auto', correctAnswer: '12', correctAnswers: ['12', 'twaalf'], explanation: 'ʼn Reghoekige prisma het 12 rande, net soos ʼn kubus.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn reghoekige prisma?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: 'ʼn Reghoekige prisma het 8 hoekpunte, een by elke hoek.' },
        { difficulty: 'Medium', question: 'Hoeveel vlakke het ʼn driehoekige prisma?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Driehoekige prisma het 5 vlakke — 2 driehoekige basisse en 3 reghoekige sy-vlakke.' },
        { difficulty: 'Medium', question: 'Hoeveel rande het ʼn driehoekige prisma?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nege'], explanation: 'ʼn Driehoekige prisma het 9 rande — 3 op elke driehoekige basis (6 in totaal) plus 3 wat hulle verbind.' },
        { difficulty: 'Medium', question: 'Hoeveel hoekpunte het ʼn driehoekige prisma?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Driehoekige prisma het 6 hoekpunte — 3 op elke driehoekige basis.' },
        { difficulty: 'Medium', question: 'Hoeveel vlakke het ʼn vierkantige piramide?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Vierkantige piramide het 5 vlakke — 1 vierkantige basis en 4 driehoekige sy-vlakke.' },
        { difficulty: 'Medium', question: 'Hoeveel rande het ʼn vierkantige piramide?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: 'ʼn Vierkantige piramide het 8 rande — 4 rondom die vierkantige basis en 4 wat skuins na die apeks loop.' },
        { difficulty: 'Medium', question: 'Hoeveel hoekpunte het ʼn vierkantige piramide?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Vierkantige piramide het 5 hoekpunte — 4 by die basishoeke en 1 by die apeks.' },
        { difficulty: 'Medium', question: 'Hoeveel vlakke het ʼn driehoekige piramide?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Driehoekige piramide het 4 vlakke — almal is driehoeke.' },
        { difficulty: 'Medium', question: 'Hoeveel rande het ʼn driehoekige piramide?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Driehoekige piramide het 6 rande — 3 rondom die basis en 3 wat skuins na die apeks loop.' },
        { difficulty: 'Medium', question: 'Hoeveel hoekpunte het ʼn driehoekige piramide?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Driehoekige piramide het 4 hoekpunte — 3 by die basishoeke en 1 by die apeks.' },
        { difficulty: 'Medium', question: 'Hoeveel geboë oppervlakke het ʼn bol?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Bol het net 1 deurlopende geboë oppervlak en geen plat vlakke nie.' },
        { difficulty: 'Medium', question: 'Hoeveel rande het ʼn bol?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen', 'geen rande nie'], explanation: 'ʼn Bol het 0 rande omdat dit geen plat vlakke het wat kon ontmoet om ʼn rand te vorm nie.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy het 3D-voorwerpe noem en hul vlakke, rande en hoekpunte tel onder die knie.' },
        { minScore: 19, message: 'Goeie werk! Jy ken die eienskappe van algemene 3D-voorwerpe goed — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug na die tabel van vlakke, rande en hoekpunte en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — VLAKVORM-WENKE EN VOORWERPE VERGELYK (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Vlakvorm-wenke en Voorwerpe Vergelyk',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn silinder?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen', 'geen hoekpunte nie'], explanation: 'ʼn Silinder het geen skerp punte nie, so dit het 0 hoekpunte.' },
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn silinder?', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Silinder het 2 rande — een waar elke plat sirkelvormige vlak die geboë oppervlak ontmoet.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn keël?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Keël het 1 hoekpunt — die skerp punt aan die bopunt, ook genoem die apeks.' },
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn keël?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Keël het 1 rand — waar die plat sirkelvormige basis die geboë oppervlak ontmoet.' },
        { difficulty: 'Medium', question: 'Al my vlakke is plat vierkante. Watter 3D-voorwerp is ek?', answer: 'Kubus', checkMode: 'auto', correctAnswer: 'Kubus', correctAnswers: ['Kubus', 'kubus', 'ʼn kubus'], explanation: 'ʼn 3D-voorwerp met al plat vierkantige vlakke is ʼn kubus.' },
        { difficulty: 'Medium', question: 'Ek het presies een plat sirkelvormige vlak en een geboë oppervlak, en ek eindig in ʼn punt. Watter 3D-voorwerp is ek?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'Een plat sirkelvormige basis plus ʼn geboë oppervlak wat na ʼn punt smaller word, beskryf ʼn keël.' },
        { difficulty: 'Medium', question: 'My vlakke is 2 driehoeke en 3 reghoeke. Watter 3D-voorwerp is ek?', answer: 'Driehoekige prisma', checkMode: 'auto', correctAnswer: 'Driehoekige prisma', correctAnswers: ['Driehoekige prisma', 'driehoekige prisma', 'ʼn driehoekige prisma'], explanation: '2 driehoekige basisse plus 3 reghoekige sye beskryf ʼn driehoekige prisma.' },
        { difficulty: 'Medium', question: 'My vlakke is 1 vierkant en 4 driehoeke. Watter 3D-voorwerp is ek?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: '1 vierkantige basis plus 4 driehoekige sye wat by ʼn apeks ontmoet, beskryf ʼn vierkantige piramide.' },
        { difficulty: 'Medium', question: 'Al 4 my vlakke is driehoeke. Watter 3D-voorwerp is ek?', answer: 'Driehoekige piramide', checkMode: 'auto', correctAnswer: 'Driehoekige piramide', correctAnswers: ['Driehoekige piramide', 'driehoekige piramide', 'ʼn driehoekige piramide', 'tetraëder', 'ʼn tetraëder'], explanation: 'ʼn 3D-voorwerp gemaak van 4 driehoekige vlakke is ʼn driehoekige piramide (tetraëder).' },
        { difficulty: 'Medium', question: 'ʼn Kubus en ʼn reghoekige prisma het altwee 6 vlakke, 12 rande en 8 hoekpunte. Wat is die een verskil tussen hulle?', answer: 'ʼn Kubus het al vierkantige vlakke, terwyl ʼn reghoekige prisma reghoekige vlakke het wat nie almal vierkante is nie.', checkMode: 'self', explanation: 'Hulle deel dieselfde aantal vlakke, rande en hoekpunte, maar ʼn kubus is ʼn spesiale reghoekige prisma waarvan al die vlakke gelyke vierkante is.' },
        { difficulty: 'Medium', question: 'Hoeveel meer rande het ʼn kubus as ʼn driehoekige piramide?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Kubus het 12 rande en ʼn driehoekige piramide het 6 rande. 12 − 6 = 6 meer rande.' },
        { difficulty: 'Medium', question: 'Hoeveel meer vlakke het ʼn driehoekige prisma as ʼn driehoekige piramide?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Driehoekige prisma het 5 vlakke en ʼn driehoekige piramide het 4 vlakke. 5 − 4 = 1 meer vlak.' },
        { difficulty: 'Medium', question: 'Watter voorwerp het presies 1 geboë oppervlak en slegs 1 plat vlak?', answer: 'Keël', checkMode: 'self', explanation: 'ʼn Keël het presies 1 plat sirkelvormige vlak en 1 geboë oppervlak. (Net een voorwerp pas presies hierby — ʼn silinder het 2 plat vlakke en ʼn bol het 0.)' },
        { difficulty: 'Medium', question: 'Noem die twee 3D-voorwerpe met geboë oppervlakke wat glad geen hoekpunte het nie.', answer: 'Bol en silinder', checkMode: 'self', explanation: 'ʼn Bol het 0 hoekpunte en ʼn silinder het ook 0 hoekpunte, omdat geeneen van hulle ʼn skerp punt het nie.' },
        { difficulty: 'Medium', question: 'Watter voorwerp het meer hoekpunte: ʼn vierkantige piramide of ʼn driehoekige piramide?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'die vierkantige piramide'], explanation: 'ʼn Vierkantige piramide het 5 hoekpunte, terwyl ʼn driehoekige piramide slegs 4 hoekpunte het.' },
        { difficulty: 'Medium', question: 'Watter voorwerp het meer rande: ʼn driehoekige prisma of ʼn vierkantige piramide?', answer: 'Driehoekige prisma', checkMode: 'auto', correctAnswer: 'Driehoekige prisma', correctAnswers: ['Driehoekige prisma', 'driehoekige prisma', 'die driehoekige prisma'], explanation: 'ʼn Driehoekige prisma het 9 rande en ʼn vierkantige piramide het 8 rande — die driehoekige prisma het 1 meer rand.' },
        { difficulty: 'Hard', question: 'Ek het ʼn geboë oppervlak en geen hoekpunte nie. Ek het 2 plat vlakke. Watter 3D-voorwerp is ek?', answer: 'Silinder', checkMode: 'auto', correctAnswer: 'Silinder', correctAnswers: ['Silinder', 'silinder', 'ʼn silinder'], explanation: 'ʼn Geboë oppervlak, geen hoekpunte nie en 2 plat sirkelvormige vlakke beskryf ʼn silinder.' },
        { difficulty: 'Hard', question: 'Ek het 1 hoekpunt, 1 rand en 1 plat vlak. Watter 3D-voorwerp is ek?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'ʼn Keël het presies 1 hoekpunt (die apeks), 1 rand en 1 plat sirkelvormige vlak.' },
        { difficulty: 'Hard', question: 'Ek het 8 hoekpunte en al my vlakke is plat vierhoeke (vierkantige vorms). Watter 3D-voorwerp kan ek wees?', answer: 'Kubus of reghoekige prisma', checkMode: 'self', explanation: 'Beide ʼn kubus en ʼn reghoekige prisma het 8 hoekpunte en slegs plat vierhoekige (reghoek of vierkant) vlakke.' },
        { difficulty: 'Hard', question: 'Ek het 5 hoekpunte. Sommige van my vlakke is driehoeke en een is ʼn ander vorm. Watter 3D-voorwerp is ek?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: 'ʼn Vierkantige piramide het 5 hoekpunte: 4 driehoekige vlakke plus 1 vierkantige basis.' },
        { difficulty: 'Hard', question: 'Ek het 6 hoekpunte en 2 van my vlakke is driehoeke terwyl die res reghoeke is. Watter 3D-voorwerp is ek?', answer: 'Driehoekige prisma', checkMode: 'auto', correctAnswer: 'Driehoekige prisma', correctAnswers: ['Driehoekige prisma', 'driehoekige prisma', 'ʼn driehoekige prisma'], explanation: 'ʼn Driehoekige prisma het 6 hoekpunte: 2 driehoekige basisse en 3 reghoekige sy-vlakke.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn keël en ʼn silinder. Wat het hulle in gemeen?', answer: 'Altwee het ten minste een plat sirkelvormige vlak en een geboë oppervlak.', checkMode: 'self', explanation: 'ʼn Keël het 1 plat sirkelvormige vlak en ʼn silinder het 2, maar altwee voorwerpe het ʼn plat sirkelvormige vlak saam met ʼn geboë oppervlak.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn kubus en ʼn vierkantige piramide. Wat het hulle in gemeen?', answer: 'Altwee het ʼn vierkantige vlak.', checkMode: 'self', explanation: 'Elke vlak van ʼn kubus is ʼn vierkant, en ʼn vierkantige piramide het een vierkantige basis — so altwee voorwerpe het ʼn vierkantige vlak.' },
        { difficulty: 'Hard', question: 'ʼn 3D-voorwerp het geen plat vlakke en geen rande nie. Wat is die enigste voorwerp wat dit kan wees?', answer: 'Bol', checkMode: 'auto', correctAnswer: 'Bol', correctAnswers: ['Bol', 'bol', 'ʼn bol'], explanation: 'ʼn Bol is die enigste algemene 3D-voorwerp met glad geen plat vlakke of rande nie — net een geboë oppervlak.' },
        { difficulty: 'Hard', question: 'Watter een het minder vlakke: ʼn driehoekige piramide of ʼn keël?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'die keël'], explanation: 'ʼn Keël het 2 vlakke (1 plat + 1 geboë) en ʼn driehoekige piramide het 4 plat driehoekige vlakke, so die keël het minder vlakke.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan 3D-voorwerpe uit vlakvorm-wenke identifiseer en hul eienskappe met selfvertroue vergelyk.' },
        { minScore: 19, message: 'Goeie werk! Jy verstaan hoe om 3D-voorwerpe te vergelyk — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug na die eienskappe-tabel en die prismas-vs-piramides verduideliking, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — SORTEER, KLASSIFISEER EN REGTE-LEWE VOORWERPE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Sorteer, Klassifiseer en Regte-lewe Voorwerpe',
      questions: [
        { difficulty: 'Easy', question: 'Thabo sê ʼn dobbelsteen is soos ʼn kubus gevorm. Is hy reg?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'ʼn Dobbelsteen het 6 gelyke vierkantige vlakke, 12 rande en 8 hoekpunte — dit is ʼn kubus.' },
        { difficulty: 'Easy', question: 'Watter 3D-voorwerp is ʼn blik koeldrank?', answer: 'Silinder', checkMode: 'auto', correctAnswer: 'Silinder', correctAnswers: ['Silinder', 'silinder', 'ʼn silinder'], explanation: 'ʼn Blik het twee plat sirkelvormige punte verbind deur ʼn geboë oppervlak — dit is ʼn silinder.' },
        { difficulty: 'Easy', question: 'Watter 3D-voorwerp is ʼn sokkerbal?', answer: 'Bol', checkMode: 'auto', correctAnswer: 'Bol', correctAnswers: ['Bol', 'bol', 'ʼn bol'], explanation: 'ʼn Sokkerbal is perfek rond met een geboë oppervlak — dit is ʼn bol.' },
        { difficulty: 'Easy', question: 'Watter 3D-voorwerp is ʼn partytjiehoed?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'ʼn Partytjiehoed het ʼn plat sirkelvormige basis wat na ʼn punt smaller word — dit is ʼn keël.' },
        { difficulty: 'Easy', question: 'Watter 3D-voorwerp is ʼn graanboks?', answer: 'Reghoekige prisma', checkMode: 'auto', correctAnswer: 'Reghoekige prisma', correctAnswers: ['Reghoekige prisma', 'reghoekige prisma', 'ʼn reghoekige prisma', 'kuboïed', 'ʼn kuboïed'], explanation: 'ʼn Graanboks het 6 reghoekige vlakke — dit is ʼn reghoekige prisma.' },
        { difficulty: 'Easy', question: 'Watter 3D-voorwerp is die Groot Piramide van Egipte gevorm soos?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: 'Die Groot Piramide het ʼn vierkantige basis met 4 driehoekige vlakke wat by die bopunt ontmoet — ʼn vierkantige piramide.' },
        { difficulty: 'Easy', question: 'Kan ʼn bol rol? Skryf ja of nee en verduidelik waarom.', answer: 'Ja — ʼn bol kan rol omdat dit ʼn heeltemal geboë oppervlak het met geen plat vlakke of rande om dit te keer nie.', checkMode: 'self', explanation: 'ʼn Bol rol glad omdat dit net een deurlopende geboë oppervlak het.' },
        { difficulty: 'Easy', question: 'Kan ʼn kubus rol? Skryf ja of nee en verduidelik waarom.', answer: 'Nee — ʼn kubus kan nie rol nie omdat dit slegs plat vlakke en skerp rande het wat dit keer om te rol.', checkMode: 'self', explanation: 'ʼn Kubus het 6 plat vlakke, so dit gly of val om eerder as om te rol.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in twee groepe — kan rol en kan nie rol nie:\nbol, kubus, keël, silinder, reghoekige prisma, driehoekige piramide', answer: 'a) bol, keël, silinder   b) kubus, reghoekige prisma, driehoekige piramide', checkMode: 'auto', parts: [
          { label: 'a) Kan rol', correctAnswer: 'bol, keël, silinder', correctAnswers: ['bol, keël, silinder', 'bol, silinder, keël', 'keël, bol, silinder', 'keël, silinder, bol', 'silinder, bol, keël', 'silinder, keël, bol'], explanation: 'Bol, keël en silinder het almal ʼn geboë oppervlak, wat hulle toelaat om te rol.' },
          { label: 'b) Kan nie rol nie', correctAnswer: 'kubus, reghoekige prisma, driehoekige piramide', correctAnswers: ['kubus, reghoekige prisma, driehoekige piramide', 'kubus, driehoekige piramide, reghoekige prisma', 'reghoekige prisma, kubus, driehoekige piramide', 'reghoekige prisma, driehoekige piramide, kubus', 'driehoekige piramide, kubus, reghoekige prisma', 'driehoekige piramide, reghoekige prisma, kubus'], explanation: 'Kubus, reghoekige prisma en driehoekige piramide het slegs plat vlakke — daar is geen geboë oppervlak om op te rol nie.' },
        ] },
        { difficulty: 'Medium', question: 'Sorteer hierdie in prismas en piramides:\ndriehoekige prisma, vierkantige piramide, reghoekige prisma, driehoekige piramide, kubus', answer: 'a) driehoekige prisma, reghoekige prisma, kubus   b) vierkantige piramide, driehoekige piramide', checkMode: 'auto', parts: [
          { label: 'a) Prismas', correctAnswer: 'driehoekige prisma, reghoekige prisma, kubus', correctAnswers: ['driehoekige prisma, reghoekige prisma, kubus', 'driehoekige prisma, kubus, reghoekige prisma', 'reghoekige prisma, driehoekige prisma, kubus', 'reghoekige prisma, kubus, driehoekige prisma', 'kubus, driehoekige prisma, reghoekige prisma', 'kubus, reghoekige prisma, driehoekige prisma'], explanation: 'ʼn Prisma het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word. Driehoekige prisma, reghoekige prisma en kubus voldoen almal aan hierdie reël.' },
          { label: 'b) Piramides', correctAnswer: 'vierkantige piramide, driehoekige piramide', correctAnswers: ['vierkantige piramide, driehoekige piramide', 'driehoekige piramide, vierkantige piramide'], explanation: 'ʼn Piramide het een basis met driehoekige vlakke wat by ʼn enkele apeks ontmoet. Vierkantige piramide en driehoekige piramide volg albei hierdie reël.' },
        ] },
        { difficulty: 'Medium', question: 'Sipho sê voorwerpe met slegs plat vlakke word veelvlakke genoem. Is hy reg?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Voorwerpe met slegs plat vlakke (soos ʼn kubus of piramide) is veelvlakke. Voorwerpe met ʼn geboë oppervlak (soos ʼn bol) is nie.' },
        { difficulty: 'Medium', question: 'Watter van hierdie voorwerpe kan maklik op mekaar gestapel word: ʼn bol, ʼn kubus of ʼn keël?', answer: 'Kubus', checkMode: 'auto', correctAnswer: 'Kubus', correctAnswers: ['Kubus', 'kubus', 'ʼn kubus'], explanation: 'ʼn Kubus het plat vlakke wat stabiel op mekaar rus, anders as ʼn bol (rol weg) of ʼn keël (balanseer op ʼn punt).' },
        { difficulty: 'Medium', question: 'Lerato het ʼn toiletrol, ʼn boek en ʼn lemoen. Pas elke item by sy 3D-voorwerp.', answer: 'Toiletrol — silinder; Boek — reghoekige prisma; Lemoen — bol.', checkMode: 'self', explanation: 'ʼn Toiletrol is ʼn silinder (geboë oppervlak met 2 sirkelvormige punte), ʼn boek is ʼn reghoekige prisma, en ʼn lemoen is ʼn bol.' },
        { difficulty: 'Medium', question: 'Amahle het ʼn roomysgetjie, ʼn dobbelsteen en ʼn sokkerbal. Pas elke item by sy 3D-voorwerp.', answer: 'Roomysgetjie — keël; Dobbelsteen — kubus; Sokkerbal — bol.', checkMode: 'self', explanation: 'ʼn Roomysgetjie is ʼn keël, ʼn dobbelsteen is ʼn kubus, en ʼn sokkerbal is ʼn bol.' },
        { difficulty: 'Medium', question: 'Noem twee regte-lewe voorbeelde van ʼn silinder.', answer: 'Enige twee van: ʼn blik kos, ʼn toiletrol, ʼn tromp, ʼn battery.', checkMode: 'self', explanation: 'Silinders in die regte lewe sluit blikke, toiletrolle, tromme en batterye in — almal het twee plat sirkelvormige punte en een geboë oppervlak.' },
        { difficulty: 'Medium', question: 'Noem twee regte-lewe voorbeelde van ʼn reghoekige prisma.', answer: 'Enige twee van: ʼn graanboks, ʼn baksteen, ʼn boek, ʼn skoenboks.', checkMode: 'self', explanation: 'Reghoekige prismas in die regte lewe sluit graanbokse, bakstene, boeke en skoenbokse in.' },
        { difficulty: 'Medium', question: 'Noem twee regte-lewe voorbeelde van ʼn bol.', answer: 'Enige twee van: ʼn bal, ʼn lemoen, ʼn albaster, ʼn wêreldbol.', checkMode: 'self', explanation: 'Bolle in die regte lewe sluit balle, lemoene, albasters en wêreldbolle in.' },
        { difficulty: 'Medium', question: 'Noem twee regte-lewe voorbeelde van ʼn keël.', answer: 'Enige twee van: ʼn roomysgetjie, ʼn partytjiehoed, ʼn verkeerskeël, ʼn tregter.', checkMode: 'self', explanation: 'Keëls in die regte lewe sluit roomysgetjies, partytjiehoede, verkeerskeëls en tregters in.' },
        { difficulty: 'Medium', question: 'Noem twee regte-lewe voorbeelde van ʼn kubus.', answer: 'Enige twee van: ʼn dobbelsteen, ʼn ysblokkie, ʼn Rubik se kubus, sommige geskenkboksies.', checkMode: 'self', explanation: 'Kubusse in die regte lewe sluit dobbelstene, ysblokkies en Rubik se kubusse in — almal het 6 gelyke vierkantige vlakke.' },
        { difficulty: 'Hard', question: 'ʼn Baksteen, ʼn tissuedoos en ʼn vuurhoutjiedosie is almal voorbeelde van watter 3D-voorwerp?', answer: 'Reghoekige prisma', checkMode: 'auto', correctAnswer: 'Reghoekige prisma', correctAnswers: ['Reghoekige prisma', 'reghoekige prisma', 'ʼn reghoekige prisma', 'kuboïed', 'ʼn kuboïed'], explanation: 'ʼn Baksteen, ʼn tissuedoos en ʼn vuurhoutjiedosie het almal 6 reghoekige vlakke — hulle is reghoekige prismas.' },
        { difficulty: 'Hard', question: 'Sorteer hierdie regte-lewe voorwerpe in kan rol en kan nie rol nie: ʼn albaster, ʼn vuurhoutjiedosie, ʼn verkeerskeël, ʼn boek.', answer: 'Kan rol: albaster, verkeerskeël.   Kan nie rol nie: vuurhoutjiedosie, boek.', checkMode: 'self', explanation: 'ʼn Albaster (bol) en verkeerskeël (keël) het altwee geboë oppervlakke, so hulle kan rol. ʼn Vuurhoutjiedosie en boek (reghoekige prismas) het slegs plat vlakke, so hulle kan nie rol nie.' },
        { difficulty: 'Hard', question: 'Waarom kan ʼn silinder op sy sykant rol, maar nie regop staan en rol nie?', answer: 'Wanneer dit op sy sykant lê, raak die geboë oppervlak die grond en kan dit rol. Wanneer dit regop staan, raak ʼn plat sirkelvormige vlak die grond, wat stabiel is en nie rol nie.', checkMode: 'self', explanation: 'Rol hang af van watter oppervlak die grond raak — die geboë oppervlak laat rol toe, maar die plat sirkelvormige vlak nie.' },
        { difficulty: 'Hard', question: 'Wat is die hoofverskil tussen ʼn prisma en ʼn piramide?', answer: 'ʼn Prisma het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word. ʼn Piramide het een basis met driehoekige vlakke wat almal by ʼn enkele punt bo-aan ontmoet, genoem die apeks.', checkMode: 'self', explanation: 'Dit is die hoofreël om prismas en piramides van mekaar te onderskei.' },
        { difficulty: 'Hard', question: 'ʼn Kristalversiering is gevorm met driehoekige sye wat almal by ʼn punt bo ʼn vierkantige basis ontmoet. Watter 3D-voorwerp is dit?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: 'Driehoekige sye wat by ʼn punt bo ʼn vierkantige basis ontmoet, beskryf ʼn vierkantige piramide.' },
        { difficulty: 'Hard', question: 'ʼn Tregter wat gebruik word om olie in ʼn motorenjin te giet, is gevorm soos watter 3D-voorwerp?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'ʼn Tregter het ʼn wye sirkelvormige opening wat na ʼn punt smaller word — dit is soos ʼn keël gevorm.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan 3D-voorwerpe met selfvertroue sorteer, klassifiseer en in die regte lewe herken.' },
        { minScore: 19, message: 'Goeie werk! Jy verstaan hoe om 3D-voorwerpe volgens hul eienskappe te sorteer — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die sorteer- en regte-lewe-voorbeelde afdelings weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — VEELSTAP-, GEKOMBINEERDE EN REDENERINGSVRAE (25 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Veelstap- en Gekombineerde Probleme',
      questions: [
        { difficulty: 'Medium', question: 'ʼn 3D-voorwerp het 2 plat sirkelvormige vlakke, 1 geboë oppervlak en 2 rande. Dit het geen hoekpunte nie.', answer: 'Silinder', checkMode: 'auto', correctAnswer: 'Silinder', correctAnswers: ['Silinder', 'silinder', 'ʼn silinder'], explanation: 'Twee plat sirkelvormige vlakke, een geboë oppervlak, twee rande en geen hoekpunte nie beskryf ʼn silinder.' },
        { difficulty: 'Medium', question: 'ʼn 3D-voorwerp het 2 plat sirkelvormige vlakke, 1 geboë oppervlak en 2 rande. Dit het geen hoekpunte nie.\nNoem twee regte-lewe voorbeelde van hierdie voorwerp.', answer: 'Enige twee van: ʼn blik kos, ʼn toiletrol, ʼn tromp, ʼn battery.', checkMode: 'self', explanation: 'Regte-lewe silinders sluit blikke, toiletrolle, tromme en batterye in.' },
        { difficulty: 'Medium', question: 'ʼn 3D-voorwerp het 2 plat sirkelvormige vlakke, 1 geboë oppervlak en 2 rande. Dit het geen hoekpunte nie.\nKan hierdie voorwerp rol? Verduidelik waarom.', answer: 'Ja, dit kan rol. ʼn Silinder het ʼn geboë oppervlak langs sy sykant, wat dit toelaat om te rol wanneer dit op sy sykant geplaas word.', checkMode: 'self', explanation: 'Die geboë oppervlak laat rol toe wanneer die silinder op sy sykant lê.' },
        { difficulty: 'Medium', question: 'Watter 2D-vorm is die basis van ʼn vierkantige piramide?', answer: 'Vierkant', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'], explanation: 'Die basis van ʼn vierkantige piramide is ʼn vierkant — dit is waar die naam vandaan kom.' },
        { difficulty: 'Medium', question: 'Watter 2D-vorms stel ʼn driehoekige prisma saam?', answer: 'a) 2   b) 3   c) 5', checkMode: 'auto', parts: [
          { label: 'a) Hoeveel driehoeke het dit?', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Driehoekige prisma het 2 driehoekige vlakke, wat die twee parallelle basisse vorm.' },
          { label: 'b) Hoeveel reghoeke het dit?', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'ʼn Driehoekige prisma het 3 reghoekige vlakke wat die twee driehoekbasisse verbind.' },
          { label: 'c) Totale aantal vlakke', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: '2 driehoeke + 3 reghoeke = 5 vlakke in totaal.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Kubus bestaan uit 6 vierkante. Elke vierkant het ʼn sylengte van 4 cm.', answer: 'a) 16cm   b) 16cm²   c) 12   d) 48cm', checkMode: 'auto', parts: [
          { label: 'a) Omtrek van een vlak', correctAnswer: '16cm', correctAnswers: ['16cm', '16 cm', '16'], explanation: 'Omtrek van ʼn vierkant = 4 × sylengte = 4 × 4 = 16 cm.' },
          { label: 'b) Oppervlakte van een vlak', correctAnswer: '16cm²', correctAnswers: ['16cm²', '16 cm²', '16cm2', '16 cm2', '16cm in die kwadraat', '16 cm in die kwadraat', '16'], explanation: 'Oppervlakte van ʼn vierkant = sy × sy = 4 × 4 = 16 cm².' },
          { label: 'c) Aantal rande', correctAnswer: '12', correctAnswers: ['12', 'twaalf'], explanation: 'ʼn Kubus het 12 rande — 4 op die boonste vlak, 4 op die onderste vlak en 4 vertikale rande wat hulle verbind.' },
          { label: 'd) Totale lengte van al die rande bymekaar getel', correctAnswer: '48cm', correctAnswers: ['48cm', '48 cm', '48'], explanation: 'Totale lengte = aantal rande × randlengte = 12 × 4 = 48 cm.' },
        ] },
        { difficulty: 'Medium', question: 'Noem die 3D-voorwerp wat elke item die beste beskryf.', answer: 'a) Bol   b) Reghoekige prisma   c) Keël', checkMode: 'auto', parts: [
          { label: 'a) ʼn Tennisbal', correctAnswer: 'Bol', correctAnswers: ['Bol', 'bol', 'ʼn bol'], explanation: 'ʼn Tennisbal is perfek rond met een deurlopende geboë oppervlak — dit is ʼn bol.' },
          { label: 'b) ʼn Baksteen', correctAnswer: 'Reghoekige prisma', correctAnswers: ['Reghoekige prisma', 'reghoekige prisma', 'ʼn reghoekige prisma', 'kuboïed', 'ʼn kuboïed'], explanation: 'ʼn Baksteen het 6 reghoekige vlakke, 12 rande en 8 hoekpunte — dit is ʼn reghoekige prisma.' },
          { label: 'c) ʼn Roomysgetjie', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'ʼn Roomysgetjie het ʼn plat sirkelvormige basis wat na ʼn punt smaller word — dit is ʼn keël.' },
        ] },
        { difficulty: 'Medium', question: 'Vind een regte-lewe voorbeeld van elke 3D-voorwerp in jou huis of klaskamer.\na) Silinder\nb) Reghoekige prisma\nc) Bol', answer: 'Aanvaar enige geldige regte-lewe voorbeelde.\na) Silinder — bv. ʼn blik, ʼn toiletrol, ʼn battery, ʼn tromp.\nb) Reghoekige prisma — bv. ʼn graanboks, ʼn boek, ʼn baksteen, ʼn skoenboks.\nc) Bol — bv. ʼn bal, ʼn lemoen, ʼn albaster, ʼn wêreldbol.', checkMode: 'self', explanation: 'Aanvaar enige korrekte regte-lewe voorbeelde wat by elke 3D-voorwerp pas.' },
        { difficulty: 'Hard', question: 'ʼn Geskenk word toegedraai in ʼn boks met die vorm van ʼn reghoekige prisma. Die boks is 20 cm lank, 15 cm wyd en 10 cm hoog.', answer: 'a) 6   b) Reghoeke   c) 12', checkMode: 'auto', parts: [
          { label: 'a) Hoeveel vlakke het die boks?', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reghoekige prisma het altyd 6 vlakke.' },
          { label: 'b) Watter 2D-vorm is die vlakke?', correctAnswer: 'Reghoeke', correctAnswers: ['Reghoeke', 'reghoeke', 'reghoek', 'Reghoek'], explanation: 'Al 6 vlakke van ʼn reghoekige prisma is reghoeke (teenoorstaande vlakke is identies).' },
          { label: 'c) Hoeveel rande het die boks?', correctAnswer: '12', correctAnswers: ['12', 'twaalf'], explanation: 'ʼn Reghoekige prisma het 12 rande — 4 langs die lengte, 4 langs die breedte en 4 langs die hoogte.' },
        ] },
        { difficulty: 'Hard', question: 'ʼn Geskenk word toegedraai in ʼn boks met die vorm van ʼn reghoekige prisma. Die boks is 20 cm lank, 15 cm wyd en 10 cm hoog.\nAs jy die boks in papier wil toedraai, hoeveel verskillende groottes reghoekige papier sal jy nodig hê?', answer: '3 verskillende groottes:\n• Boonste en onderste vlakke (20 cm × 15 cm) — 2 hiervan\n• Voor- en agtervlakke (20 cm × 10 cm) — 2 hiervan\n• Linker- en regtersykant-vlakke (15 cm × 10 cm) — 2 hiervan', checkMode: 'self', explanation: 'ʼn Reghoekige prisma het 3 pare identiese teenoorstaande vlakke, so daar is 3 verskillende reghoek-groottes.' },
        { difficulty: 'Hard', question: 'Sipho bou ʼn toring met 1 kubus en 1 vierkantige piramide op mekaar gestapel. Hoeveel vlakke is aan die buitekant sigbaar as die twee aanrakende vlakke weggesteek is?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nege'], explanation: 'Kubus het 6 vlakke en vierkantige piramide het 5 vlakke = 11 vlakke in totaal. Trek die 2 aanrakende vlakke (1 van elkeen) af wat weggesteek is: 11 − 2 = 9 sigbare vlakke.' },
        { difficulty: 'Hard', question: 'Thabo het ʼn driehoekige prisma en ʼn driehoekige piramide. Saam, hoeveel rande het hulle?', answer: '15', checkMode: 'auto', correctAnswer: '15', correctAnswers: ['15', 'vyftien'], explanation: 'ʼn Driehoekige prisma het 9 rande en ʼn driehoekige piramide het 6 rande. 9 + 6 = 15 rande in totaal.' },
        { difficulty: 'Hard', question: 'Amahle het ʼn kubus en ʼn vierkantige piramide. Saam, hoeveel hoekpunte het hulle?', answer: '13', checkMode: 'auto', correctAnswer: '13', correctAnswers: ['13', 'dertien'], explanation: 'ʼn Kubus het 8 hoekpunte en ʼn vierkantige piramide het 5 hoekpunte. 8 + 5 = 13 hoekpunte in totaal.' },
        { difficulty: 'Hard', question: 'Lerato het ʼn bol, ʼn keël en ʼn silinder. Saam, hoeveel rande het hulle?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Bol het 0 rande, keël het 1 rand, silinder het 2 rande. 0 + 1 + 2 = 3 rande in totaal.' },
        { difficulty: 'Hard', question: 'Watter een het meer vlakke in totaal: ʼn kubus en ʼn keël saam, of ʼn driehoekige prisma en ʼn driehoekige piramide saam?', answer: 'Die driehoekige prisma en driehoekige piramide saam', checkMode: 'self', explanation: 'Kubus (6) + keël (2) = 8 vlakke. Driehoekige prisma (5) + driehoekige piramide (4) = 9 vlakke. Die driehoekige prisma en driehoekige piramide saam het 1 meer vlak as die kubus en keël saam.' },
        { difficulty: 'Hard', question: 'ʼn Toring word gebou uit ʼn reghoekige prisma onderaan en ʼn driehoekige prisma bo-op (soos ʼn huisvorm). Verduidelik waarom hierdie gekombineerde vorm beide plat, reghoekige en driehoekige vlakke het.', answer: 'Die reghoekige prisma dra reghoekige vlakke by, en die driehoekige prisma dra beide driehoekige vlakke (die twee eindes) en reghoekige vlakke (die skuins sye) by, so saam het die huisvorm plat reghoekige en driehoekige vlakke.', checkMode: 'self', explanation: 'Wanneer twee veelvlakke gekombineer word, bly al hul plat-vlak eienskappe behoue, want albei bestaan slegs uit plat vlakke.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn bol die enigste algemene 3D-voorwerp is wat glad nie gestapel kan word nie, selfs nie op sy eie soort nie.', answer: 'ʼn Bol het net een geboë oppervlak en geen plat gedeelte nêrens nie, so daar is geen stabiele plat oppervlak vir ʼn ander voorwerp om op te rus, of vir dit om op ʼn ander bol te rus sonder om af te rol nie.', checkMode: 'self', explanation: 'Stapel vereis ʼn plat kontakoppervlak, wat ʼn bol nêrens op sy oppervlak het nie.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn silinder kan stapel wanneer dit regop staan, maar ʼn keël glad nie maklik kan stapel nie.', answer: 'ʼn Silinder het 2 plat sirkelvormige vlakke, so sy plat bopunt kan ʼn ander voorwerp dra wat daarop geplaas word. ʼn Keël het net 1 plat vlak onderaan en ʼn skerp punt bo-aan, so niks kan op sy punt balanseer nie.', checkMode: 'self', explanation: 'Stapel benodig ʼn plat bo-oppervlak — ʼn silinder het een, maar ʼn keël se bopunt is ʼn enkele punt.' },
        { difficulty: 'Hard', question: 'Sipho sê: "ʼn Vierkantige piramide en ʼn driehoekige piramide is altwee piramides, so hulle moet dieselfde aantal vlakke hê." Is hy reg? Verduidelik.', answer: 'Nee. ʼn Vierkantige piramide het 5 vlakke (1 vierkant + 4 driehoeke), terwyl ʼn driehoekige piramide slegs 4 vlakke het (almal driehoeke) — hulle verskil omdat hul basisvorms verskillend is.', checkMode: 'self', explanation: 'Die aantal vlakke van ʼn piramide hang af van die aantal sye van sy basis, so verskillende basisvorms gee verskillende aantal vlakke.' },
        { difficulty: 'Hard', question: 'Amahle sê: "Alle prismas het presies 2 driehoekige vlakke." Is sy reg? Verduidelik.', answer: 'Nee. Net ʼn driehoekige prisma het 2 driehoekige vlakke (sy basisse). ʼn Reghoekige prisma het reghoekige basisse, nie driehoekige nie, so nie alle prismas het driehoekige vlakke nie.', checkMode: 'self', explanation: 'Die vorm van ʼn prisma se basisse pas by die naam van die prisma — ʼn driehoekige prisma het driehoekbasisse, ʼn reghoekige prisma het reghoekbasisse.' },
        { difficulty: 'Hard', question: 'ʼn Blik boontjies het 2 plat sirkelvormige vlakke, 1 geboë oppervlak, 2 rande en 0 hoekpunte. Noem die 3D-voorwerp en verduidelik waarom dit nie ʼn keël kan wees nie.', answer: 'Dit is ʼn silinder. Dit kan nie ʼn keël wees nie, want ʼn keël het slegs 1 plat sirkelvormige vlak en 1 hoekpunt (ʼn skerp punt), maar hierdie voorwerp het 2 plat vlakke en geen hoekpunte nie.', checkMode: 'self', explanation: 'ʼn Silinder het 2 plat sirkelvormige vlakke en geen hoekpunte nie, terwyl ʼn keël slegs 1 plat vlak en ʼn skerp hoekpunt het — die aantal plat vlakke en hoekpunte onderskei hulle.' },
        { difficulty: 'Hard', question: 'Lerato pak ʼn boks gevorm soos ʼn reghoekige prisma vol met balle gevorm soos bolle. Verduidelik een rede waarom die bolle nie perfek in die boks pas sonder gapings nie.', answer: 'ʼn Bol is heeltemal geboë, so dit raak net die plat sye van die boks op enkele punte, wat gapings tussen die ronde balle en die reguit rande en hoeke van die boks laat.', checkMode: 'self', explanation: 'Slegs plat-vlak voorwerpe soos kubusse of reghoekige prismas kan sonder gapings saam pak, omdat hul plat vlakke eweredig raak.' },
        { difficulty: 'Hard', question: 'Tel op die hoekpunte van ʼn kubus, ʼn vierkantige piramide en ʼn driehoekige piramide.', answer: '17', checkMode: 'auto', correctAnswer: '17', correctAnswers: ['17', 'sewentien'], explanation: 'Kubus = 8 hoekpunte, vierkantige piramide = 5 hoekpunte, driehoekige piramide = 4 hoekpunte. 8 + 5 + 4 = 17.' },
        { difficulty: 'Hard', question: 'Tel op die aantal plat vlakke van ʼn silinder, ʼn keël en ʼn bol.', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'Silinder het 2 plat sirkelvormige vlakke, keël het 1 plat sirkelvormige vlak, bol het 0 plat vlakke. 2 + 1 + 0 = 3 plat vlakke in totaal.' },
        { difficulty: 'Hard', question: 'Amahle kombineer ʼn reghoekige prisma en ʼn driehoekige prisma om ʼn tentvorm te bou. Verduidelik watter 2D-vorms die buitekant van hierdie gekombineerde vorm uitmaak.', answer: 'Die reghoekige prisma dra reghoekige vlakke by, en die driehoekige prisma dra 2 driehoekige vlakke (die eindes) en meer reghoekige vlakke (die skuins sye) by, so die tentvorm bestaan uit reghoeke en driehoeke.', checkMode: 'self', explanation: 'Wanneer twee prismas gekombineer word, kombineer hul vlakvorms — hier sluit die resultaat beide reghoeke en driehoeke in.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Uitstekend! Jy kan idees oor 3D-voorwerpe met selfvertroue kombineer en jou redenasie verduidelik.' },
        { minScore: 19, message: 'Goeie werk! Jy kan 3D-voorwerp-eienskappe op veelstap-probleme toepas — gaan enige gemiste vrae weer deur.' },
        { minScore: 13, message: 'Goeie poging! Gaan die veelstap-voorbeelde weer deur en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
