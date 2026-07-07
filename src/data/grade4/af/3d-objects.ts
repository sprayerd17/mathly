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
    // STEL 1 (20 vrae)
    // Blok 1 Noem (0-3) | Blok 2 Tel (4-7) | Blok 3 Vergelyk (8-11)
    // Blok 4 Sorteer (12-15) | Blok 5 Regte-lewe/Foutspoor (16-18) | Blok 6 Sluitstuk (19)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        // Blok 1 — Noem uit Eienskappe (Maklik)
        { difficulty: 'Easy', question: 'Ek het 6 plat vierkantige vlakke, 12 rande en 8 hoekpunte. Watter 3D-voorwerp is ek?', answer: 'Kubus', checkMode: 'auto', correctAnswer: 'Kubus', correctAnswers: ['Kubus', 'kubus', 'ʼn kubus'], explanation: 'Ses gelyke vierkantige vlakke, 12 rande en 8 hoekpunte beskryf ʼn kubus.' },
        { difficulty: 'Easy', question: 'ʼn Blik sop het twee plat sirkelvormige punte wat deur een geboë oppervlak verbind word, en glad geen skerp hoeke nie. Noem hierdie 3D-voorwerp.', answer: 'Silinder', checkMode: 'auto', correctAnswer: 'Silinder', correctAnswers: ['Silinder', 'silinder', 'ʼn silinder'], explanation: 'Twee plat sirkelvormige vlakke verbind deur ʼn geboë oppervlak, sonder skerp punte, beskryf ʼn silinder.' },
        { difficulty: 'Easy', question: 'Vul die leemte in: ʼn vierkantige basis met 4 driehoekige vlakke wat by een punt daarbo ontmoet, word ʼn _______ genoem.', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: 'ʼn Vierkantige basis met 4 driehoekige vlakke wat by ʼn apeks ontmoet, beskryf ʼn vierkantige piramide.' },
        { difficulty: 'Easy', question: 'ʼn Graanboks het 6 reghoekige vlakke, 12 rande en 8 hoekpunte, net soos ʼn kubus — maar sy vlakke is nie almal vierkante nie. Watter voorwerp is dit?', answer: 'Reghoekige prisma', checkMode: 'auto', correctAnswer: 'Reghoekige prisma', correctAnswers: ['Reghoekige prisma', 'reghoekige prisma', 'ʼn reghoekige prisma', 'kuboïed', 'ʼn kuboïed'], explanation: 'Ses reghoekige vlakke (nie almal vierkante nie), 12 rande en 8 hoekpunte beskryf ʼn reghoekige prisma.' },

        // Blok 2 — Vlakke, Rande, Hoekpunte Tel (Maklik)
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn driehoekige prisma?', answer: '9', checkMode: 'auto', correctAnswer: '9', correctAnswers: ['9', 'nege'], explanation: 'ʼn Driehoekige prisma het 9 rande — 3 op elke driehoekige basis (6 in totaal) plus 3 wat hulle verbind.' },
        { difficulty: 'Easy', question: 'ʼn Keël het net een skerp punt aan sy bopunt. Hoeveel hoekpunte gee dit hom in totaal?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Keël het 1 hoekpunt — die skerp punt aan die bopunt, ook genoem die apeks.' },
        { difficulty: 'Easy', question: 'Voltooi die telling: ʼn silinder het ___ rande, gevorm waar sy plat sirkelvormige vlakke sy geboë oppervlak ontmoet.', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Silinder het 2 rande — een waar elke plat sirkelvormige vlak die geboë oppervlak ontmoet.' },
        { difficulty: 'Easy', question: 'Verduidelik waarom ʼn bol 0 rande het.', answer: 'ʼn Bol het 0 rande omdat ʼn rand net vorm waar twee plat vlakke ontmoet, en ʼn bol het glad geen plat vlakke nie — net een deurlopende geboë oppervlak.', checkMode: 'self', explanation: 'Rande vorm waar plat vlakke mekaar ontmoet. Omdat ʼn bol heeltemal geboë is, kan dit geen rande vorm nie.' },

        // Blok 3 — Vergelyk en Kontrasteer Voorwerpe (Medium)
        { difficulty: 'Medium', question: 'ʼn Kubus en ʼn reghoekige prisma het altwee 6 vlakke, 12 rande en 8 hoekpunte. Wat is die een verskil tussen hulle?', answer: 'ʼn Kubus het al vierkantige vlakke, terwyl ʼn reghoekige prisma reghoekige vlakke het wat nie almal vierkante is nie.', checkMode: 'self', explanation: 'Hulle deel dieselfde aantal vlakke, rande en hoekpunte, maar ʼn kubus is ʼn spesiale reghoekige prisma waarvan al die vlakke gelyke vierkante is.' },
        { difficulty: 'Medium', question: 'Hoeveel meer rande het ʼn kubus as ʼn driehoekige piramide?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Kubus het 12 rande en ʼn driehoekige piramide het 6 rande. 12 − 6 = 6 meer rande.' },
        { difficulty: 'Medium', question: 'Watter voorwerp het meer hoekpunte: ʼn vierkantige piramide of ʼn driehoekige piramide?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'die vierkantige piramide'], explanation: 'ʼn Vierkantige piramide het 5 hoekpunte, terwyl ʼn driehoekige piramide slegs 4 hoekpunte het.' },
        { difficulty: 'Medium', question: 'Noem die twee 3D-voorwerpe met geboë oppervlakke wat glad geen hoekpunte het nie.', answer: 'Bol en silinder', checkMode: 'self', explanation: 'ʼn Bol het 0 hoekpunte en ʼn silinder het ook 0 hoekpunte, omdat geeneen van hulle ʼn skerp punt het nie.' },

        // Blok 4 — Sorteer en Klassifiseer (Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in twee groepe — kan rol en kan nie rol nie:\nbol, kubus, keël, silinder, reghoekige prisma, driehoekige piramide', answer: 'a) bol, keël, silinder   b) kubus, reghoekige prisma, driehoekige piramide', checkMode: 'auto', parts: [
          { label: 'a) Kan rol', correctAnswer: 'bol, keël, silinder', correctAnswers: ['bol, keël, silinder', 'bol, silinder, keël', 'keël, bol, silinder', 'keël, silinder, bol', 'silinder, bol, keël', 'silinder, keël, bol'], explanation: 'Bol, keël en silinder het almal ʼn geboë oppervlak, wat hulle toelaat om te rol.' },
          { label: 'b) Kan nie rol nie', correctAnswer: 'kubus, reghoekige prisma, driehoekige piramide', correctAnswers: ['kubus, reghoekige prisma, driehoekige piramide', 'kubus, driehoekige piramide, reghoekige prisma', 'reghoekige prisma, kubus, driehoekige piramide', 'reghoekige prisma, driehoekige piramide, kubus', 'driehoekige piramide, kubus, reghoekige prisma', 'driehoekige piramide, reghoekige prisma, kubus'], explanation: 'Kubus, reghoekige prisma en driehoekige piramide het slegs plat vlakke — daar is geen geboë oppervlak om op te rol nie.' },
        ] },
        { difficulty: 'Medium', question: 'Sorteer hierdie in prismas en piramides:\ndriehoekige prisma, vierkantige piramide, reghoekige prisma, driehoekige piramide, kubus', answer: 'a) driehoekige prisma, reghoekige prisma, kubus   b) vierkantige piramide, driehoekige piramide', checkMode: 'auto', parts: [
          { label: 'a) Prismas', correctAnswer: 'driehoekige prisma, reghoekige prisma, kubus', correctAnswers: ['driehoekige prisma, reghoekige prisma, kubus', 'driehoekige prisma, kubus, reghoekige prisma', 'reghoekige prisma, driehoekige prisma, kubus', 'reghoekige prisma, kubus, driehoekige prisma', 'kubus, driehoekige prisma, reghoekige prisma', 'kubus, reghoekige prisma, driehoekige prisma'], explanation: 'ʼn Prisma het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word. Driehoekige prisma, reghoekige prisma en kubus voldoen almal aan hierdie reël.' },
          { label: 'b) Piramides', correctAnswer: 'vierkantige piramide, driehoekige piramide', correctAnswers: ['vierkantige piramide, driehoekige piramide', 'driehoekige piramide, vierkantige piramide'], explanation: 'ʼn Piramide het een basis met driehoekige vlakke wat by ʼn enkele apeks ontmoet. Vierkantige piramide en driehoekige piramide volg albei hierdie reël.' },
        ] },
        { difficulty: 'Medium', question: 'Sipho sê voorwerpe met slegs plat vlakke word veelvlakke genoem. Is hy reg?', answer: 'Ja', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], explanation: 'Voorwerpe met slegs plat vlakke (soos ʼn kubus of piramide) is veelvlakke. Voorwerpe met ʼn geboë oppervlak (soos ʼn bol) is nie.' },
        { difficulty: 'Medium', question: 'Watter een hoort nie by die res nie, en waarom: bol, silinder, keël, kubus?', answer: 'Kubus — dit is die enigste een met geen geboë oppervlak nie, so dit kan nie rol nie. Die ander drie het almal ʼn geboë oppervlak en kan rol.', checkMode: 'self', explanation: 'Bol, silinder en keël het almal ʼn geboë oppervlak. ʼn Kubus het slegs plat vlakke, wat dit die uitsondering maak.' },

        // Blok 5 — Regte-lewe Toepassing en Foutspoor (Medium-Hard)
        { difficulty: 'Medium', question: 'Thabo tel ʼn dobbelsteen op en sê: "Dit is net ʼn kubus met kolletjies daarop geverf." Watter 3D-voorwerp is ʼn dobbelsteen eintlik, en hou Thabo se stelling steek?', answer: 'Ja, ʼn dobbelsteen is ʼn kubus.', checkMode: 'self', explanation: 'ʼn Dobbelsteen het 6 gelyke vierkantige vlakke, 12 rande en 8 hoekpunte — dit is ʼn kubus, so Thabo is reg.' },
        { difficulty: 'Medium', question: 'Lerato het ʼn toiletrol, ʼn boek en ʼn lemoen. Pas elke item by sy 3D-voorwerp.', answer: 'Toiletrol — silinder; Boek — reghoekige prisma; Lemoen — bol.', checkMode: 'self', explanation: 'ʼn Toiletrol is ʼn silinder (geboë oppervlak met 2 sirkelvormige punte), ʼn boek is ʼn reghoekige prisma, en ʼn lemoen is ʼn bol.' },
        { difficulty: 'Medium', question: 'Noem een regte-lewe voorbeeld van elke 3D-voorwerp.\na) Keël\nb) Kubus\nc) Silinder', answer: 'Aanvaar enige geldige regte-lewe voorbeelde.\na) Keël — bv. ʼn roomysgetjie, ʼn partytjiehoed, ʼn verkeerskeël.\nb) Kubus — bv. ʼn dobbelsteen, ʼn ysblokkie, ʼn Rubik se kubus.\nc) Silinder — bv. ʼn blik kos, ʼn toiletrol, ʼn battery.', checkMode: 'self', explanation: 'Aanvaar enige korrekte regte-lewe voorbeeld wat by elke 3D-voorwerp pas.' },

        // Blok 6 — Veelstap-redenering en Saamgestelde Voorwerpe (Moeilik)
        { difficulty: 'Hard', question: 'Sipho bou ʼn toring met 1 kubus en 1 vierkantige piramide op mekaar gestapel. Die kubus het 6 vlakke en die vierkantige piramide het 5 vlakke.\na) Hoeveel vlakke het die twee voorwerpe saam voor hulle gestapel word?\nb) Wanneer hulle gestapel word, raak een vlak van die kubus en een vlak van die piramide mekaar en word weggesteek. Hoeveel vlakke is aan die buitekant sigbaar?', answer: 'a) 11   b) 9', checkMode: 'auto', parts: [
          { label: 'a) Totale vlakke voor stapeling', correctAnswer: '11', correctAnswers: ['11', 'elf'], explanation: 'Kubus (6) + vierkantige piramide (5) = 11 vlakke in totaal.' },
          { label: 'b) Sigbare vlakke na stapeling', correctAnswer: '9', correctAnswers: ['9', 'nege'], explanation: 'Trek die 2 aanrakende vlakke (1 van elke voorwerp) af wat weggesteek is: 11 − 2 = 9 sigbare vlakke.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan 3D-voorwerpe se eienskappe noem, tel, vergelyk, sorteer en toepas met selfvertroue.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan hoe om 3D-voorwerpe te noem, tel en vergelyk goed — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die eienskappe-tabel en die sorteerreëls en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        // Blok 1 — Noem uit Eienskappe (Maklik)
        { difficulty: 'Easy', question: 'Ek is perfek rond met net een geboë oppervlak. Ek het geen plat vlakke, rande of hoekpunte nie. Watter 3D-voorwerp is ek?', answer: 'Bol', checkMode: 'auto', correctAnswer: 'Bol', correctAnswers: ['Bol', 'bol', 'ʼn bol'], explanation: 'Een deurlopende geboë oppervlak met geen plat vlakke, rande of hoekpunte nie beskryf ʼn bol.' },
        { difficulty: 'Easy', question: 'ʼn Partytjiehoed het ʼn plat sirkelvormige basis en een geboë oppervlak wat by die bopunt in ʼn punt smaller word. Noem hierdie vorm.', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'ʼn Plat sirkelvormige basis met ʼn geboë oppervlak wat na ʼn punt smaller word, beskryf ʼn keël.' },
        { difficulty: 'Easy', question: 'Vul die leemte in: ʼn voorwerp met 2 driehoekige vlakke en 3 reghoekige vlakke word ʼn _______ genoem.', answer: 'Driehoekige prisma', checkMode: 'auto', correctAnswer: 'Driehoekige prisma', correctAnswers: ['Driehoekige prisma', 'driehoekige prisma', 'ʼn driehoekige prisma'], explanation: 'Twee driehoekige basisse verbind deur 3 reghoekige vlakke beskryf ʼn driehoekige prisma.' },
        { difficulty: 'Easy', question: 'ʼn Voorwerp het 5 hoekpunte in totaal. Vier van sy vlakke is driehoeke en een vlak is ʼn ander vorm. Watter 3D-voorwerp pas by hierdie beskrywing?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: 'ʼn Vierkantige piramide het 5 hoekpunte: 4 driehoekige vlakke plus 1 vierkantige basis.' },

        // Blok 2 — Vlakke, Rande, Hoekpunte Tel (Maklik)
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn vierkantige piramide?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Vierkantige piramide het 5 hoekpunte — 4 by die basishoeke en 1 by die apeks.' },
        { difficulty: 'Easy', question: 'ʼn Silinder het nêrens skerp hoeke op hom nie. Gegewe dit, hoeveel hoekpunte moet dit hê?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen', 'geen hoekpunte nie'], explanation: 'ʼn Silinder het geen skerp punte nie, so dit het 0 hoekpunte.' },
        { difficulty: 'Easy', question: 'Voltooi die telling: ʼn driehoekige prisma het ___ vlakke in totaal, as jy sy 2 driehoekige basisse en 3 reghoekige sye tel.', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Driehoekige prisma het 5 vlakke — 2 driehoekige basisse en 3 reghoekige sy-vlakke.' },
        { difficulty: 'Easy', question: 'Verduidelik waarom ʼn bol 0 hoekpunte het, al lyk dit of dit op ʼn punt kan balanseer.', answer: 'ʼn Hoekpunt vorm net waar rande ontmoet, en ʼn bol het glad geen rande nie omdat dit geen plat vlakke het nie. Sonder enige rande is daar nêrens vir ʼn hoekpunt om te vorm nie.', checkMode: 'self', explanation: 'Hoekpunte benodig rande om te ontmoet. Omdat ʼn bol heeltemal geboë is en geen rande het nie, het dit 0 hoekpunte.' },

        // Blok 3 — Vergelyk en Kontrasteer Voorwerpe (Medium)
        { difficulty: 'Medium', question: 'Hoeveel meer vlakke het ʼn driehoekige prisma as ʼn driehoekige piramide?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Driehoekige prisma het 5 vlakke en ʼn driehoekige piramide het 4 vlakke. 5 − 4 = 1 meer vlak.' },
        { difficulty: 'Medium', question: 'Watter voorwerp het meer rande: ʼn driehoekige prisma of ʼn vierkantige piramide?', answer: 'Driehoekige prisma', checkMode: 'auto', correctAnswer: 'Driehoekige prisma', correctAnswers: ['Driehoekige prisma', 'driehoekige prisma', 'die driehoekige prisma'], explanation: 'ʼn Driehoekige prisma het 9 rande en ʼn vierkantige piramide het 8 rande — die driehoekige prisma het 1 meer rand.' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn keël en ʼn silinder. Wat het hulle in gemeen?', answer: 'Altwee het ten minste een plat sirkelvormige vlak en een geboë oppervlak.', checkMode: 'self', explanation: 'ʼn Keël het 1 plat sirkelvormige vlak en ʼn silinder het 2, maar altwee voorwerpe het ʼn plat sirkelvormige vlak saam met ʼn geboë oppervlak.' },
        { difficulty: 'Medium', question: 'Sonder om presies te tel, watter een dink jy het meer rande: ʼn driehoekige prisma of ʼn vierkantige piramide? Verduidelik jou redenasie.', answer: 'ʼn Driehoekige prisma, want ʼn prisma het twee volle basisse (wat elkeen rande bydra) plus verbindende rande, terwyl ʼn piramide net een basis plus rande wat na ʼn enkele apeks skuins loop het — so die prisma het gewoonlik meer rande in totaal.', checkMode: 'self', explanation: 'ʼn Driehoekige prisma het eintlik 9 rande vergeleke met ʼn vierkantige piramide se 8, wat pas by die redenasie dat twee volle basisse gewoonlik meer rande bydra as een basis plus skuins rande na ʼn apeks.' },

        // Blok 4 — Sorteer en Klassifiseer (Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie regte-lewe voorwerpe in kan rol en kan nie rol nie: ʼn albaster, ʼn vuurhoutjiedosie, ʼn verkeerskeël, ʼn boek.', answer: 'Kan rol: albaster, verkeerskeël.   Kan nie rol nie: vuurhoutjiedosie, boek.', checkMode: 'self', explanation: 'ʼn Albaster (bol) en verkeerskeël (keël) het altwee geboë oppervlakke, so hulle kan rol. ʼn Vuurhoutjiedosie en boek (reghoekige prismas) het slegs plat vlakke, so hulle kan nie rol nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in veelvlak (slegs plat vlakke) en nie ʼn veelvlak nie (het ʼn geboë oppervlak):\nsilinder, vierkantige piramide, bol, driehoekige prisma, keël', answer: 'a) vierkantige piramide, driehoekige prisma   b) silinder, bol, keël', checkMode: 'auto', parts: [
          { label: 'a) Veelvlak', correctAnswer: 'vierkantige piramide, driehoekige prisma', correctAnswers: ['vierkantige piramide, driehoekige prisma', 'driehoekige prisma, vierkantige piramide'], explanation: 'ʼn Vierkantige piramide en ʼn driehoekige prisma het slegs plat vlakke, so hulle is veelvlakke.' },
          { label: 'b) Nie ʼn veelvlak nie', correctAnswer: 'silinder, bol, keël', correctAnswers: ['silinder, bol, keël', 'silinder, keël, bol', 'bol, silinder, keël', 'bol, keël, silinder', 'keël, silinder, bol', 'keël, bol, silinder'], explanation: 'ʼn Silinder, bol en keël het almal ʼn geboë oppervlak, so geeneen van hulle is ʼn veelvlak nie.' },
        ] },
        { difficulty: 'Medium', question: 'Watter van hierdie voorwerpe kan maklik op mekaar gestapel word: ʼn bol, ʼn kubus of ʼn keël?', answer: 'Kubus', checkMode: 'auto', correctAnswer: 'Kubus', correctAnswers: ['Kubus', 'kubus', 'ʼn kubus'], explanation: 'ʼn Kubus het plat vlakke wat stabiel op mekaar rus, anders as ʼn bol (rol weg) of ʼn keël (balanseer op ʼn punt).' },
        { difficulty: 'Medium', question: 'Watter een hoort nie by die res nie, en waarom: kubus, vierkantige piramide, driehoekige prisma, bol?', answer: 'Bol — dit is die enigste een met glad geen plat vlakke nie. Die ander drie is veelvlakke wat heeltemal uit plat vlakke bestaan.', checkMode: 'self', explanation: 'Kubus, vierkantige piramide en driehoekige prisma is almal veelvlakke met slegs plat vlakke. ʼn Bol het ʼn geboë oppervlak in plaas daarvan, wat dit die uitsondering maak.' },

        // Blok 5 — Regte-lewe Toepassing en Foutspoor (Medium-Hard)
        { difficulty: 'Medium', question: 'Watter 3D-voorwerp is die Groot Piramide van Egipte gevorm soos?', answer: 'Vierkantige piramide', checkMode: 'auto', correctAnswer: 'Vierkantige piramide', correctAnswers: ['Vierkantige piramide', 'vierkantige piramide', 'ʼn vierkantige piramide'], explanation: 'Die Groot Piramide het ʼn vierkantige basis met 4 driehoekige vlakke wat by die bopunt ontmoet — ʼn vierkantige piramide.' },
        { difficulty: 'Medium', question: 'Sipho redeneer dat omdat ʼn vierkantige piramide en ʼn driehoekige piramide altwee "piramides" is, hulle dieselfde aantal vlakke moet hê. Gebruik die aantal vlakke van elkeen om te wys of sy redenasie klop.', answer: 'Sy redenasie klop nie. ʼn Vierkantige piramide het 5 vlakke (1 vierkant + 4 driehoeke), terwyl ʼn driehoekige piramide slegs 4 vlakke het (almal driehoeke) — hulle verskil omdat hul basisvorms verskillend is.', checkMode: 'self', explanation: 'Die aantal vlakke van ʼn piramide hang af van die aantal sye van sy basis, so verskillende basisvorms gee verskillende aantal vlakke.' },
        { difficulty: 'Medium', question: 'Noem een regte-lewe voorbeeld van elke 3D-voorwerp.\na) Bol\nb) Reghoekige prisma\nc) Vierkantige piramide', answer: 'Aanvaar enige geldige regte-lewe voorbeelde.\na) Bol — bv. ʼn bal, ʼn lemoen, ʼn albaster.\nb) Reghoekige prisma — bv. ʼn graanboks, ʼn boek, ʼn baksteen.\nc) Vierkantige piramide — bv. die Groot Piramide van Egipte, ʼn kristalversiering, sommige dakvorms.', checkMode: 'self', explanation: 'Aanvaar enige korrekte regte-lewe voorbeeld wat by elke 3D-voorwerp pas.' },

        // Blok 6 — Veelstap-redenering en Saamgestelde Voorwerpe (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Tent word gebou deur ʼn reghoekige prisma (die mure) met ʼn driehoekige prisma bo-op (die skuins dak) te kombineer.\na) Watter 2D-vorms dra die twee eindes van die driehoekige prisma by tot die buitekant van die tent?\nb) Watter 2D-vorms dra die reghoekige prisma-deel by?\nc) Verduidelik waarom die hele tentvorm steeds ʼn veelvlak is.', answer: 'a) Driehoeke   b) Reghoeke   c) Dit bestaan heeltemal uit plat vlakke, want beide ʼn reghoekige prisma en ʼn driehoekige prisma is veelvlakke met slegs plat vlakke.', checkMode: 'self', explanation: 'Wanneer twee veelvlakke gekombineer word, bly elke vlak plat, want geeneen van die vorms dra ʼn geboë oppervlak by nie — so die gekombineerde tentvorm is ook ʼn veelvlak.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan 3D-voorwerpe se eienskappe noem, tel, vergelyk, sorteer en toepas met selfvertroue.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan hoe om 3D-voorwerpe te noem, tel en vergelyk goed — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die eienskappe-tabel en die sorteerreëls en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        // Blok 1 — Noem uit Eienskappe (Maklik)
        { difficulty: 'Easy', question: 'Ek het ʼn driehoekige basis en nog 3 driehoekige vlakke wat by ʼn punt bo-aan ontmoet. Watter 3D-voorwerp is ek?', answer: 'Driehoekige piramide', checkMode: 'auto', correctAnswer: 'Driehoekige piramide', correctAnswers: ['Driehoekige piramide', 'driehoekige piramide', 'ʼn driehoekige piramide', 'tetraëder', 'ʼn tetraëder'], explanation: 'Al 4 vlakke is driehoeke, wat by ʼn apeks ontmoet — dit beskryf ʼn driehoekige piramide (tetraëder).' },
        { difficulty: 'Easy', question: 'ʼn Rubik se kubus het elke vlak plat en vierkantig, en 8 skerp hoeke. Wat word hierdie voorwerp genoem?', answer: 'Kubus', checkMode: 'auto', correctAnswer: 'Kubus', correctAnswers: ['Kubus', 'kubus', 'ʼn kubus'], explanation: 'ʼn 3D-voorwerp met al plat vierkantige vlakke en 8 hoekpunte is ʼn kubus.' },
        { difficulty: 'Easy', question: 'Vul die leemte in: ʼn voorwerp met presies 1 plat sirkelvormige vlak, 1 geboë oppervlak, en een skerp punt bo-aan is ʼn _______.', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'Een plat sirkelvormige basis plus ʼn geboë oppervlak wat na ʼn punt smaller word, beskryf ʼn keël.' },
        { difficulty: 'Easy', question: 'ʼn Voorwerp het 6 hoekpunte in totaal. Twee van sy vlakke is driehoeke en die res is reghoeke. Watter 3D-voorwerp is dit?', answer: 'Driehoekige prisma', checkMode: 'auto', correctAnswer: 'Driehoekige prisma', correctAnswers: ['Driehoekige prisma', 'driehoekige prisma', 'ʼn driehoekige prisma'], explanation: 'ʼn Driehoekige prisma het 6 hoekpunte: 2 driehoekige basisse en 3 reghoekige sy-vlakke.' },

        // Blok 2 — Vlakke, Rande, Hoekpunte Tel (Maklik)
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn vierkantige piramide?', answer: '8', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], explanation: 'ʼn Vierkantige piramide het 8 rande — 4 rondom die vierkantige basis en 4 wat skuins na die apeks loop.' },
        { difficulty: 'Easy', question: 'ʼn Keël se enigste rand is waar sy plat basis sy geboë oppervlak ontmoet. Hoeveel rande is dit in totaal?', answer: '1', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Keël het 1 rand — waar die plat sirkelvormige basis die geboë oppervlak ontmoet.' },
        { difficulty: 'Easy', question: 'Voltooi die telling: ʼn silinder het ___ plat vlakke, plus 1 geboë oppervlak wat hulle verbind.', answer: '2', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Silinder het 2 plat sirkelvormige vlakke, plus 1 geboë oppervlak wat hulle verbind.' },
        { difficulty: 'Easy', question: 'ʼn Bol het 0 plat vlakke. Verduidelik hoe hierdie feit alleen vir jou wys dat dit ook 0 rande moet hê.', answer: 'ʼn Rand kan net vorm waar twee plat vlakke ontmoet. Aangesien ʼn bol 0 plat vlakke het, is daar geen plat vlakke wat mekaar kan ontmoet nie, so dit kan ook geen rande hê nie.', checkMode: 'self', explanation: 'Rande hang af van plat vlakke wat ontmoet. Met glad geen plat vlakke nie, het ʼn bol geen moontlike rande nie.' },

        // Blok 3 — Vergelyk en Kontrasteer Voorwerpe (Medium)
        { difficulty: 'Medium', question: 'Watter voorwerp het presies 1 geboë oppervlak en slegs 1 plat vlak?', answer: 'Keël', checkMode: 'self', explanation: 'ʼn Keël het presies 1 plat sirkelvormige vlak en 1 geboë oppervlak — ʼn silinder het 2 plat vlakke en ʼn bol het 0.' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn kubus en ʼn vierkantige piramide. Wat het hulle in gemeen?', answer: 'Altwee het ʼn vierkantige vlak.', checkMode: 'self', explanation: 'Elke vlak van ʼn kubus is ʼn vierkant, en ʼn vierkantige piramide het een vierkantige basis — so altwee voorwerpe het ʼn vierkantige vlak.' },
        { difficulty: 'Medium', question: 'ʼn 3D-voorwerp het geen plat vlakke en geen rande nie. Wat is die enigste voorwerp wat dit kan wees?', answer: 'Bol', checkMode: 'auto', correctAnswer: 'Bol', correctAnswers: ['Bol', 'bol', 'ʼn bol'], explanation: 'ʼn Bol is die enigste algemene 3D-voorwerp met glad geen plat vlakke of rande nie — net een geboë oppervlak.' },
        { difficulty: 'Medium', question: 'Watter een het minder vlakke: ʼn driehoekige piramide of ʼn keël?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'die keël'], explanation: 'ʼn Keël het 2 vlakke (1 plat + 1 geboë) en ʼn driehoekige piramide het 4 plat driehoekige vlakke, so die keël het minder vlakke.' },

        // Blok 4 — Sorteer en Klassifiseer (Medium)
        { difficulty: 'Medium', question: 'ʼn Voorwerp het 1 vierkantige vlak en 4 driehoekige vlakke. Watter 3D-voorwerp is dit, en hoeveel rande het dit?', answer: 'Vierkantige piramide, 8 rande', checkMode: 'self', explanation: '1 vierkantige basis + 4 driehoekige sye wat by ʼn apeks ontmoet is ʼn vierkantige piramide, wat 8 rande het — 4 rondom die basis en 4 wat skuins na die apeks loop.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in twee groepe — kan rol en kan nie rol nie:\nsilinder, driehoekige piramide, bol, vierkantige piramide, keël', answer: 'a) silinder, bol, keël   b) driehoekige piramide, vierkantige piramide', checkMode: 'auto', parts: [
          { label: 'a) Kan rol', correctAnswer: 'silinder, bol, keël', correctAnswers: ['silinder, bol, keël', 'silinder, keël, bol', 'bol, silinder, keël', 'bol, keël, silinder', 'keël, silinder, bol', 'keël, bol, silinder'], explanation: 'Silinder, bol en keël het almal ʼn geboë oppervlak, wat hulle toelaat om te rol.' },
          { label: 'b) Kan nie rol nie', correctAnswer: 'driehoekige piramide, vierkantige piramide', correctAnswers: ['driehoekige piramide, vierkantige piramide', 'vierkantige piramide, driehoekige piramide'], explanation: 'Driehoekige piramide en vierkantige piramide het slegs plat vlakke, so daar is geen geboë oppervlak om op te rol nie.' },
        ] },
        { difficulty: 'Medium', question: 'Amahle sê voorwerpe met slegs plat vlakke word veelvlakke genoem, en ʼn silinder is ʼn voorbeeld van ʼn veelvlak. Is sy reg?', answer: 'Nee', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], explanation: 'Voorwerpe met slegs plat vlakke is veelvlakke, maar ʼn silinder het ʼn geboë oppervlak, so dit is nie ʼn veelvlak nie.' },
        { difficulty: 'Medium', question: 'Watter een hoort nie by die res nie, en waarom: reghoekige prisma, silinder, kubus, driehoekige prisma?', answer: 'Silinder — dit is die enigste een met ʼn geboë oppervlak en geen reguit rande wat by hoekpunte ontmoet nie. Die ander drie is veelvlakke met slegs plat vlakke.', checkMode: 'self', explanation: 'Reghoekige prisma, kubus en driehoekige prisma is almal veelvlakke. ʼn Silinder het geboë oppervlakke, wat dit die uitsondering maak.' },

        // Blok 5 — Regte-lewe Toepassing en Foutspoor (Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Tregter wat gebruik word om olie in ʼn motorenjin te giet, is gevorm soos watter 3D-voorwerp?', answer: 'Keël', checkMode: 'auto', correctAnswer: 'Keël', correctAnswers: ['Keël', 'keël', 'ʼn keël'], explanation: 'ʼn Tregter het ʼn wye sirkelvormige opening wat na ʼn punt smaller word — dit is soos ʼn keël gevorm.' },
        { difficulty: 'Medium', question: 'Amahle beweer dat elke prisma noodwendig presies 2 driehoekige vlakke moet hê. Gebruik die reghoekige prisma as ʼn teenvoorbeeld om te verduidelik waar haar bewering verkeerd loop.', answer: 'Haar bewering is verkeerd. Net ʼn driehoekige prisma het 2 driehoekige vlakke (sy basisse). ʼn Reghoekige prisma het reghoekige basisse, nie driehoekige nie, so nie alle prismas het driehoekige vlakke nie.', checkMode: 'self', explanation: 'Die vorm van ʼn prisma se basisse pas by die naam van die prisma — ʼn driehoekige prisma het driehoekbasisse, ʼn reghoekige prisma het reghoekbasisse.' },
        { difficulty: 'Medium', question: 'Amahle het ʼn roomysgetjie, ʼn dobbelsteen en ʼn sokkerbal. Pas elke item by sy 3D-voorwerp.', answer: 'Roomysgetjie — keël; Dobbelsteen — kubus; Sokkerbal — bol.', checkMode: 'self', explanation: 'ʼn Roomysgetjie is ʼn keël, ʼn dobbelsteen is ʼn kubus, en ʼn sokkerbal is ʼn bol.' },

        // Blok 6 — Veelstap-redenering en Saamgestelde Voorwerpe (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Raketspeelding word gebou deur ʼn silinder (die romp) met ʼn keël bo-op (die neus) te kombineer.\na) Hoeveel plat vlakke het die silinder op sy eie?\nb) Hoeveel plat vlakke het die keël op sy eie?\nc) Wanneer die keël bo-op die silinder sit, raak een plat vlak van elke voorwerp mekaar en word weggesteek. Hoeveel plat vlakke is sigbaar aan die buitekant van die gekombineerde raketvorm?', answer: 'a) 2   b) 1   c) 1', checkMode: 'auto', parts: [
          { label: 'a) Plat vlakke van die silinder', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Silinder het 2 plat sirkelvormige vlakke (plus 1 geboë oppervlak).' },
          { label: 'b) Plat vlakke van die keël', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Keël het 1 plat sirkelvormige vlak (plus 1 geboë oppervlak).' },
          { label: 'c) Sigbare plat vlakke na kombinering', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'Die silinder se boonste vlak en die keël se basis raak mekaar en word weggesteek waar hulle saamkom, en net die silinder se onderste plat vlak bly sigbaar: (2 + 1) − 2 = 1.' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan 3D-voorwerpe se eienskappe noem, tel, vergelyk, sorteer en toepas met selfvertroue.' },
        { minScore: 15, message: 'Goeie werk! Jy verstaan hoe om 3D-voorwerpe te noem, tel en vergelyk goed — gaan enige gemiste vrae weer deur.' },
        { minScore: 10, message: 'Goeie poging! Gaan terug na die eienskappe-tabel en die sorteerreëls en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

  ],
}
