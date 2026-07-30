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
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Die <strong style="color:#16a34a;">hoeke waar rande ontmoet</strong>. ʼn Hoekpunt is ʼn skerp punt. Die punt van ʼn keël is ʼn hoekpunt. ʼn Sfeer het geen hoekpunte nie omdat dit geen rande het nie.</span>
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
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Sfeer</td>
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
        'Sewe 3D-voorwerpe duidelik geëtiketteer — sfeer, kubus, reghoekige prisma, keël, silinder, driehoekige piramide, vierkantige piramide — elkeen met vlakke, rande en hoekpunte geëtiketteer',
      diagramSvg:
        '<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg"><circle cx="60" cy="70" r="26" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 34 70 Q 60 82 86 70" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="60" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Sfeer</text><text x="60" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">V:0</tspan> <tspan fill="#dc2626">R:0</tspan> <tspan fill="#16a34a">H:0</tspan></text><polygon points="160,50 200,50 200,90 160,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="160,50 200,50 216,34 176,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="200,50 200,90 216,74 216,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="180" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Kubus</text><text x="180" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">V:6</tspan> <tspan fill="#dc2626">R:12</tspan> <tspan fill="#16a34a">H:8</tspan></text><polygon points="270,55 330,55 330,85 270,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="270,55 330,55 346,39 286,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="330,55 330,85 346,69 346,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><text x="300" y="118" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Reghoekige prisma</text><text x="300" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">V:6</tspan> <tspan fill="#dc2626">R:12</tspan> <tspan fill="#16a34a">H:8</tspan></text><ellipse cx="420" cy="90" rx="26" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="420" y1="44" x2="394" y2="90" stroke="#0f1f3d" stroke-width="2.5"/><line x1="420" y1="44" x2="446" y2="90" stroke="#0f1f3d" stroke-width="2.5"/><text x="420" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Keël</text><text x="420" y="134" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">V:1</tspan> <tspan fill="#dc2626">R:1</tspan> <tspan fill="#16a34a">H:1</tspan></text><ellipse cx="100" cy="182" rx="28" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="100" cy="238" rx="28" ry="9" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="72" y1="182" x2="72" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="128" y1="182" x2="128" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><text x="100" y="258" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Silinder</text><text x="100" y="274" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">V:2</tspan> <tspan fill="#dc2626">R:2</tspan> <tspan fill="#16a34a">H:0</tspan></text><line x1="240" y1="168" x2="210" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="240" y1="168" x2="270" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="210" y1="238" x2="270" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="240" y1="168" x2="240" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="240" y1="212" x2="210" y2="238" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="240" y1="212" x2="270" y2="238" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><text x="240" y="258" font-size="8.5" font-weight="700" fill="#0f1f3d" text-anchor="middle">Driehoekige piramide</text><text x="240" y="274" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">V:4</tspan> <tspan fill="#dc2626">R:6</tspan> <tspan fill="#16a34a">H:4</tspan></text><line x1="360" y1="238" x2="420" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="390" y1="164" x2="360" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="390" y1="164" x2="420" y2="238" stroke="#0f1f3d" stroke-width="2.5"/><line x1="360" y1="238" x2="374" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="420" y1="238" x2="434" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="374" y1="222" x2="434" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="390" y1="164" x2="374" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="390" y1="164" x2="434" y2="222" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><text x="390" y="258" font-size="9" font-weight="700" fill="#0f1f3d" text-anchor="middle">Vierkantige piramide</text><text x="390" y="274" font-size="10.5" text-anchor="middle"><tspan fill="#1e40af">V:5</tspan> <tspan fill="#dc2626">R:8</tspan> <tspan fill="#16a34a">H:5</tspan></text></svg>',
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
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Geboë oppervlak — sfeer, keël, silinder</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Voorwerpe met <strong>slegs plat vlakke</strong> word <em>veelvlakke</em> genoem. Voorwerpe met ʼn geboë oppervlak is nie veelvlakke nie.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens vermoë om te rol</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Kan rol — sfeer, keël, silinder</span>
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
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Kan nie maklik stapel nie — sfeer, keël</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Voorwerpe met <strong>plat vlakke</strong> kan op mekaar gestapel word. ʼn Sfeer rol weg en ʼn keël balanseer op sy punt — geeneen van hulle stapel maklik nie.</p>
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
      <span style="color:#78350f;font-size:15px;padding-top:1px;">Het <strong>een basis</strong> met <strong>driehoekige vlakke</strong> wat almal by ʼn enkele punt bo-aan ontmoet, genoem die <strong>piek</strong>. ʼn Vierkantige piramide het ʼn vierkantige basis. ʼn Driehoekige piramide (tetraëder) het ʼn driehoekbasis.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Sorteer hierdie voorwerpe in kan rol en kan nie rol nie: sfeer, kubus, keël, silinder, reghoekige prisma.',
          steps: [
            'Kyk na elke voorwerp: het dit ʼn <strong style="color:#dc2626;">geboë oppervlak</strong>?',
            '<strong style="color:#1e40af;">Sfeer</strong> — heeltemal geboë oppervlak ✔ kan rol.',
            '<strong style="color:#1e40af;">Keël</strong> — geboë sy-oppervlak ✔ kan rol.',
            '<strong style="color:#1e40af;">Silinder</strong> — geboë sy-oppervlak ✔ kan rol.',
            '<strong style="color:#64748b;">Kubus</strong> — slegs 6 plat vlakke ✘ kan nie rol nie.',
            '<strong style="color:#64748b;">Reghoekige prisma</strong> — slegs 6 plat vlakke ✘ kan nie rol nie.',
          ],
          answer:
            'Kan rol: sfeer, keël, silinder.\nKan nie rol nie: kubus, reghoekige prisma.',
        },
        {
          question:
            'Sorteer hierdie voorwerpe in prismas en piramides: driehoekige prisma, vierkantige piramide, reghoekige prisma, driehoekige piramide, kubus.',
          steps: [
            'ʼn <strong style="color:#1e40af;">Prisma</strong> het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word.',
            'ʼn <strong style="color:#dc2626;">Piramide</strong> het een basis met driehoekige vlakke wat by ʼn piek ontmoet.',
            '<strong>Driehoekige prisma</strong> — twee driehoekbasisse verbind deur reghoeke ✔ prisma.',
            '<strong>Reghoekige prisma</strong> — twee reghoekbasisse verbind deur reghoeke ✔ prisma.',
            '<strong>Kubus</strong> — twee vierkantige basisse verbind deur gelyke vierkante (spesiale reghoekige prisma) ✔ prisma.',
            '<strong>Vierkantige piramide</strong> — een vierkantige basis met 4 driehoekige vlakke wat by ʼn piek ontmoet ✔ piramide.',
            '<strong>Driehoekige piramide</strong> — een driehoekbasis met 3 driehoekige vlakke wat by ʼn piek ontmoet ✔ piramide.',
          ],
          answer:
            'Prismas: driehoekige prisma, reghoekige prisma, kubus.\nPiramides: vierkantige piramide, driehoekige piramide.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Twee kolomme — linkerkolom wys voorwerpe wat kan rol (sfeer, keël, silinder) met geboë oppervlakke uitgelig, regterkolom wys voorwerpe wat nie kan rol nie (kubus, reghoekige prisma, piramides) met plat vlakke uitgelig',
      diagramSvg:
        '<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg"><line x1="240" y1="20" x2="240" y2="165" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/><text x="120" y="32" font-size="14" font-weight="700" fill="#16a34a" text-anchor="middle">Kan rol ✓</text><text x="375" y="32" font-size="14" font-weight="700" fill="#dc2626" text-anchor="middle">Kan nie rol nie ✗</text><circle cx="55" cy="110" r="18" fill="none" stroke="#16a34a" stroke-width="2.5"/><path d="M 37 110 Q 55 118 73 110" fill="none" stroke="#16a34a" stroke-width="1.2"/><text x="55" y="150" font-size="10.5" fill="#14532d" text-anchor="middle">Sfeer</text><ellipse cx="120" cy="128" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><line x1="120" y1="90" x2="102" y2="128" stroke="#16a34a" stroke-width="2.5"/><line x1="120" y1="90" x2="138" y2="128" stroke="#16a34a" stroke-width="2.5"/><text x="120" y="150" font-size="10.5" fill="#14532d" text-anchor="middle">Keël</text><ellipse cx="185" cy="95" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><ellipse cx="185" cy="125" rx="18" ry="6" fill="none" stroke="#16a34a" stroke-width="2.5"/><line x1="167" y1="95" x2="167" y2="125" stroke="#16a34a" stroke-width="2.5"/><line x1="203" y1="95" x2="203" y2="125" stroke="#16a34a" stroke-width="2.5"/><text x="185" y="150" font-size="10.5" fill="#14532d" text-anchor="middle">Silinder</text><text x="120" y="172" font-size="10" font-style="italic" fill="#16a34a" text-anchor="middle">het ʼn geboë oppervlak</text><polygon points="290,95 320,95 320,125 290,125" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="290,95 320,95 330,85 300,85" fill="none" stroke="#dc2626" stroke-width="2"/><polygon points="320,95 320,125 330,115 330,85" fill="none" stroke="#dc2626" stroke-width="2"/><text x="305" y="150" font-size="10.5" fill="#7f1d1d" text-anchor="middle">Kubus</text><polygon points="355,100 395,100 395,122 355,122" fill="none" stroke="#dc2626" stroke-width="2.5"/><polygon points="355,100 395,100 405,90 365,90" fill="none" stroke="#dc2626" stroke-width="2"/><polygon points="395,100 395,122 405,112 405,90" fill="none" stroke="#dc2626" stroke-width="2"/><text x="375" y="150" font-size="7" fill="#7f1d1d" text-anchor="middle">Reghoekige prisma</text><line x1="415" y1="128" x2="455" y2="128" stroke="#dc2626" stroke-width="2.5"/><line x1="435" y1="85" x2="415" y2="128" stroke="#dc2626" stroke-width="2.5"/><line x1="435" y1="85" x2="455" y2="128" stroke="#dc2626" stroke-width="2.5"/><line x1="415" y1="128" x2="425" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="455" y1="128" x2="465" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="425" y1="118" x2="465" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="435" y1="85" x2="425" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="435" y1="85" x2="465" y2="118" stroke="#dc2626" stroke-width="1.2" stroke-dasharray="3,3"/><text x="435" y="150" font-size="7" fill="#7f1d1d" text-anchor="middle">Vierkantige piramide</text><text x="375" y="172" font-size="10" font-style="italic" fill="#dc2626" text-anchor="middle">slegs plat vlakke</text></svg>',
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
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Sfeer</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Bal, lemoen, wêreldsfeer, albaster</strong> — perfek rond met een deurlopende geboë oppervlak.</span>
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
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Roomyshorinkie, partytjiehoed, verkeerskeël, tregter</strong> — ʼn plat sirkelvormige basis wat na ʼn skerp punt bo-aan smaller word.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:130px;text-align:center;">Silinder</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Blik kos, toiletrol, drom, battery</strong> — twee plat sirkelvormige punte verbind deur een geboë oppervlak.</span>
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
        'Ses regte-lewe voorwerpe elkeen geëtiketteer met hul 3D-voorwerpnaam — ʼn dobbelsteen (kubus), ʼn graanboks (reghoekige prisma), ʼn bal (sfeer), ʼn roomyshorinkie (keël), ʼn blik (silinder), ʼn Egiptiese piramide (vierkantige piramide)',
      diagramSvg:
        '<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg"><polygon points="60,50 100,50 100,90 60,90" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="60,50 100,50 116,34 76,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="100,50 100,90 116,74 116,34" fill="none" stroke="#0f1f3d" stroke-width="2"/><circle cx="68" cy="58" r="2.6" fill="#0f1f3d"/><circle cx="80" cy="70" r="2.6" fill="#0f1f3d"/><circle cx="92" cy="82" r="2.6" fill="#0f1f3d"/><text x="80" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Dobbelsteen</text><text x="80" y="133" font-size="10" fill="#64748b" text-anchor="middle">(Kubus)</text><polygon points="210,55 270,55 270,85 210,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><polygon points="210,55 270,55 286,39 226,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><polygon points="270,55 270,85 286,69 286,39" fill="none" stroke="#0f1f3d" stroke-width="2"/><line x1="210" y1="68" x2="270" y2="68" stroke="#0f1f3d" stroke-width="1"/><text x="240" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Graanboks</text><text x="240" y="133" font-size="8.5" fill="#64748b" text-anchor="middle">(Reghoekige prisma)</text><circle cx="400" cy="70" r="26" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><path d="M 374 70 Q 400 82 426 70" fill="none" stroke="#0f1f3d" stroke-width="1.3"/><text x="400" y="118" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Bal</text><text x="400" y="133" font-size="10" fill="#64748b" text-anchor="middle">(Sfeer)</text><ellipse cx="80" cy="172" rx="20" ry="7" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="172" x2="80" y2="222" stroke="#0f1f3d" stroke-width="2.5"/><line x1="100" y1="172" x2="80" y2="222" stroke="#0f1f3d" stroke-width="2.5"/><text x="80" y="245" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Roomyshorinkie</text><text x="80" y="259" font-size="10" fill="#64748b" text-anchor="middle">(Keël)</text><ellipse cx="240" cy="165" rx="26" ry="8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><ellipse cx="240" cy="221" rx="26" ry="8" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="165" x2="214" y2="221" stroke="#0f1f3d" stroke-width="2.5"/><line x1="266" y1="165" x2="266" y2="221" stroke="#0f1f3d" stroke-width="2.5"/><line x1="214" y1="193" x2="266" y2="193" stroke="#0f1f3d" stroke-width="1"/><text x="240" y="245" font-size="12" font-weight="700" fill="#0f1f3d" text-anchor="middle">Blik</text><text x="240" y="259" font-size="10" fill="#64748b" text-anchor="middle">(Silinder)</text><line x1="375" y1="225" x2="425" y2="225" stroke="#0f1f3d" stroke-width="2.5"/><line x1="400" y1="160" x2="375" y2="225" stroke="#0f1f3d" stroke-width="2.5"/><line x1="400" y1="160" x2="425" y2="225" stroke="#0f1f3d" stroke-width="2.5"/><line x1="375" y1="225" x2="388" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="425" y1="225" x2="438" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="388" y1="212" x2="438" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="400" y1="160" x2="388" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><line x1="400" y1="160" x2="438" y2="212" stroke="#0f1f3d" stroke-width="1.3" stroke-dasharray="3,3"/><text x="400" y="245" font-size="11" font-weight="700" fill="#0f1f3d" text-anchor="middle">Piramide</text><text x="400" y="259" font-size="8.5" fill="#64748b" text-anchor="middle">(Vierkantige piramide)</text></svg>',
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
        { difficulty: 'Easy', question: 'Ek het 6 plat vierkantige vlakke, 12 rande en 8 hoekpunte. Watter 3D-voorwerp is ek?', checkMode: 'auto', options: ['Reghoekige prisma', 'Kubus', 'Vierkantige piramide', 'Driehoekige prisma'], correctIndex: 1, explanation: 'Ses gelyke vierkantige vlakke, 12 rande en 8 hoekpunte beskryf ʼn kubus. ʼn Reghoekige prisma het dieselfde aantal rande en hoekpunte, maar sy vlakke is reghoeke, nie almal vierkante nie.' },
        { difficulty: 'Easy', question: 'ʼn Blik sop het twee plat sirkelvormige punte wat deur een geboë oppervlak verbind word, en glad geen skerp hoeke nie. Noem hierdie 3D-voorwerp.', checkMode: 'auto', options: ['Keël', 'Sfeer', 'Silinder', 'Kubus'], correctIndex: 2, explanation: 'Twee plat sirkelvormige vlakke verbind deur een geboë oppervlak, sonder hoekpunte, beskryf ʼn silinder. ʼn Keël het net een plat sirkelvormige vlak, en ʼn sfeer het glad geen plat vlakke nie.' },
        { difficulty: 'Easy', question: 'Vul die leemte in: ʼn vierkantige basis met 4 driehoekige vlakke wat by een punt daarbo ontmoet, word ʼn _______ genoem.', checkMode: 'auto', options: ['Driehoekige piramide', 'Reghoekige prisma', 'Kubus', 'Vierkantige piramide'], correctIndex: 3, explanation: 'ʼn Vierkantige basis met 4 driehoekige vlakke wat by ʼn piek ontmoet, beskryf ʼn vierkantige piramide. ʼn Driehoekige piramide het ʼn driehoekige basis in plaas van ʼn vierkantige een.' },
        { difficulty: 'Easy', question: 'ʼn Graanboks het 6 reghoekige vlakke, 12 rande en 8 hoekpunte, net soos ʼn kubus — maar sy vlakke is nie almal vierkante nie. Watter voorwerp is dit?', checkMode: 'auto', options: ['Reghoekige prisma', 'Kubus', 'Driehoekige prisma', 'Vierkantige piramide'], correctIndex: 0, explanation: 'Ses reghoekige vlakke (nie almal vierkante nie), 12 rande en 8 hoekpunte beskryf ʼn reghoekige prisma. As al die vlakke gelyke vierkante was, sou dit ʼn kubus wees.' },

        // Blok 2 — Vlakke, Rande, Hoekpunte Tel (Maklik)
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn driehoekige prisma?', checkMode: 'auto', options: ['6', '9', '8', '12'], correctIndex: 1, explanation: 'ʼn Driehoekige prisma het 9 rande — 3 op elke driehoekige basis (6 in totaal) plus 3 wat hulle verbind. As jy net die twee basisse tel, kry jy 6, wat die 3 verbindende rande mis.' },
        { difficulty: 'Easy', question: 'ʼn Keël het net een skerp punt aan sy bopunt. Hoeveel hoekpunte gee dit hom in totaal?', checkMode: 'auto', options: ['0', '2', '1', '3'], correctIndex: 2, explanation: 'ʼn Keël het presies 1 hoekpunt — die skerp punt (piek) aan sy bopunt. Om 0 te sê verwar ʼn keël met ʼn silinder, wat glad geen hoekpunte het nie.' },
        { difficulty: 'Easy', question: 'Voltooi die telling: ʼn silinder het ___ rande, gevorm waar sy plat sirkelvormige vlakke sy geboë oppervlak ontmoet.', checkMode: 'auto', options: ['0', '1', '4', '2'], correctIndex: 3, explanation: 'ʼn Silinder het 2 rande — een waar elke plat sirkelvormige vlak die geboë oppervlak ontmoet. Om 0 te sê verwar dit met ʼn sfeer, en 1 tel net een van die twee sirkelvormige punte.' },
        { difficulty: 'Easy', question: 'Watter stelling verduidelik korrek waarom ʼn sfeer 0 rande het?', checkMode: 'auto', options: ['ʼn Sfeer het 0 rande omdat ʼn rand net vorm waar twee plat vlakke ontmoet, en ʼn sfeer het glad geen plat vlakke nie.', 'ʼn Sfeer het 0 rande omdat dit te klein is vir rande om te vorm.', 'ʼn Sfeer het 0 rande omdat dit presies 1 hoekpunt het, wat al die hoeke opgebruik.', 'ʼn Sfeer het 0 rande omdat sy geboë oppervlak eintlik uit baie klein plat vlakke bestaan wat mekaar ophef.'], correctIndex: 0, explanation: 'Rande vorm net waar twee plat vlakke ontmoet. Omdat ʼn sfeer heeltemal geboë is en glad geen plat vlakke het nie, is daar niks waartussen ʼn rand kan vorm nie.' },

        // Blok 3 — Vergelyk en Kontrasteer Voorwerpe (Medium)
        { difficulty: 'Medium', question: 'Watter stelling verduidelik korrek wat ʼn kubus anders maak as ander reghoekige prismas?', checkMode: 'auto', options: ['ʼn Kubus het geboë vlakke, terwyl ander reghoekige prismas plat vlakke het.', 'Al ʼn kubus se vlakke en rande is gelyke vierkante, terwyl ʼn gewone reghoekige prisma rande van verskillende lengtes kan hê.', 'ʼn Kubus het 8 vlakke, terwyl ander reghoekige prismas 6 vlakke het.', 'ʼn Kubus het minder hoekpunte as ander reghoekige prismas.'], correctIndex: 1, explanation: 'ʼn Kubus is ʼn spesiale reghoekige prisma waarvan al die vlakke gelyke vierkante is en al die rande dieselfde lengte het, terwyl ʼn algemene reghoekige prisma rande van verskillende lengtes kan hê.' },
        { difficulty: 'Medium', question: 'Hoeveel meer rande het ʼn kubus as ʼn driehoekige piramide?', checkMode: 'auto', options: ['4', '12', '6', '3'], correctIndex: 2, explanation: 'ʼn Kubus het 12 rande en ʼn driehoekige piramide het 6 rande. 12 − 6 = 6 meer rande.' },
        { difficulty: 'Medium', question: 'Watter voorwerp het meer hoekpunte: ʼn vierkantige piramide of ʼn driehoekige piramide?', checkMode: 'auto', options: ['Driehoekige piramide', 'Hulle het dieselfde aantal hoekpunte', 'Geeneen het hoekpunte nie', 'Vierkantige piramide'], correctIndex: 3, explanation: 'ʼn Vierkantige piramide het 5 hoekpunte (4 basishoeke + 1 piek), terwyl ʼn driehoekige piramide slegs 4 hoekpunte het (3 basishoeke + 1 piek) — die vierkantige piramide het meer.' },
        { difficulty: 'Medium', question: 'Watter paar 3D-voorwerpe het altwee ʼn geboë oppervlak en glad geen hoekpunte nie?', checkMode: 'auto', options: ['Sfeer en silinder', 'Sfeer en keël', 'Silinder en keël', 'Keël en kubus'], correctIndex: 0, explanation: 'ʼn Sfeer het 0 hoekpunte en ʼn silinder het ook 0 hoekpunte, omdat geeneen van hulle ʼn skerp punt het nie. ʼn Keël hét wel 1 hoekpunt (sy piek), so enige paar met ʼn keël is verkeerd.' },

        // Blok 4 — Sorteer en Klassifiseer (Medium)
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in twee groepe — kan rol en kan nie rol nie:\nsfeer, kubus, keël, silinder, reghoekige prisma, driehoekige piramide', answer: 'a) sfeer, keël, silinder   b) kubus, reghoekige prisma, driehoekige piramide', checkMode: 'auto', parts: [
          { label: 'a) Kan rol', correctAnswer: 'sfeer, keël, silinder', correctAnswers: ['sfeer, keël, silinder', 'sfeer, silinder, keël', 'keël, sfeer, silinder', 'keël, silinder, sfeer', 'silinder, sfeer, keël', 'silinder, keël, sfeer'], explanation: 'Sfeer, keël en silinder het almal ʼn geboë oppervlak, wat hulle toelaat om te rol.' },
          { label: 'b) Kan nie rol nie', correctAnswer: 'kubus, reghoekige prisma, driehoekige piramide', correctAnswers: ['kubus, reghoekige prisma, driehoekige piramide', 'kubus, driehoekige piramide, reghoekige prisma', 'reghoekige prisma, kubus, driehoekige piramide', 'reghoekige prisma, driehoekige piramide, kubus', 'driehoekige piramide, kubus, reghoekige prisma', 'driehoekige piramide, reghoekige prisma, kubus'], explanation: 'Kubus, reghoekige prisma en driehoekige piramide het slegs plat vlakke — daar is geen geboë oppervlak om op te rol nie.' },
        ] },
        { difficulty: 'Medium', question: 'Sorteer hierdie in prismas en piramides:\ndriehoekige prisma, vierkantige piramide, reghoekige prisma, driehoekige piramide, kubus', answer: 'a) driehoekige prisma, reghoekige prisma, kubus   b) vierkantige piramide, driehoekige piramide', checkMode: 'auto', parts: [
          { label: 'a) Prismas', correctAnswer: 'driehoekige prisma, reghoekige prisma, kubus', correctAnswers: ['driehoekige prisma, reghoekige prisma, kubus', 'driehoekige prisma, kubus, reghoekige prisma', 'reghoekige prisma, driehoekige prisma, kubus', 'reghoekige prisma, kubus, driehoekige prisma', 'kubus, driehoekige prisma, reghoekige prisma', 'kubus, reghoekige prisma, driehoekige prisma'], explanation: 'ʼn Prisma het twee identiese parallelle basisse wat deur reghoekige vlakke verbind word. Driehoekige prisma, reghoekige prisma en kubus voldoen almal aan hierdie reël.' },
          { label: 'b) Piramides', correctAnswer: 'vierkantige piramide, driehoekige piramide', correctAnswers: ['vierkantige piramide, driehoekige piramide', 'driehoekige piramide, vierkantige piramide'], explanation: 'ʼn Piramide het een basis met driehoekige vlakke wat by ʼn enkele piek ontmoet. Vierkantige piramide en driehoekige piramide volg albei hierdie reël.' },
        ] },
        { difficulty: 'Medium', question: 'Sipho sê voorwerpe met slegs plat vlakke word veelvlakke genoem. Watter stelling is korrek?', checkMode: 'auto', options: ['Hy is verkeerd — veelvlakke is voorwerpe met ten minste een geboë oppervlak.', 'Hy is reg — voorwerpe met slegs plat vlakke, soos ʼn kubus of piramide, word veelvlakke genoem.', 'Hy is verkeerd — die woord "veelvlak" geld net vir prismas, nie piramides nie.', 'Hy is reg, maar net vir voorwerpe met presies 6 vlakke.'], correctIndex: 1, explanation: 'Voorwerpe met slegs plat vlakke (soos ʼn kubus of piramide) is veelvlakke. Voorwerpe met ʼn geboë oppervlak (soos ʼn sfeer) is nie.' },
        { difficulty: 'Medium', question: 'Watter een hoort nie by die res nie, en waarom: sfeer, silinder, keël, kubus?', checkMode: 'auto', options: ['Sfeer — dit is die enigste een wat kan rol.', 'Silinder — dit is die enigste een met twee plat vlakke.', 'Kubus — dit is die enigste een met geen geboë oppervlak nie, so dit kan nie rol nie.', 'Keël — dit is die enigste een met net een hoekpunt.'], correctIndex: 2, explanation: 'Sfeer, silinder en keël het almal ʼn geboë oppervlak en kan rol. ʼn Kubus het slegs plat vlakke, wat dit die uitsondering maak.' },

        // Blok 5 — Regte-lewe Toepassing en Foutspoor (Medium-Hard)
        { difficulty: 'Medium', question: 'Thabo tel ʼn dobbelsteen op en sê: "Dit is net ʼn kubus met kolletjies daarop geverf." Watter stelling evalueer sy bewering korrek?', checkMode: 'auto', options: ['Hy is verkeerd — ʼn dobbelsteen is gevorm soos ʼn reghoekige prisma, nie ʼn kubus nie.', 'Hy is verkeerd — ʼn dobbelsteen het geboë hoeke, so dit kan nie ʼn kubus wees nie.', 'Hy is reg, maar net omdat die kolletjies nie die vorm se rande verander nie.', 'Hy is reg — ʼn dobbelsteen het 6 gelyke vierkantige vlakke, 12 rande en 8 hoekpunte, wat presies die eienskappe van ʼn kubus is.'], correctIndex: 3, explanation: 'ʼn Dobbelsteen het 6 gelyke vierkantige vlakke, 12 rande en 8 hoekpunte — dit is ʼn kubus, so Thabo is reg.' },
        { difficulty: 'Medium', question: 'Lerato het ʼn toiletrol, ʼn boek en ʼn lemoen. Watter stel passings is korrek?', checkMode: 'auto', options: ['Toiletrol — silinder; Boek — reghoekige prisma; Lemoen — sfeer.', 'Toiletrol — keël; Boek — kubus; Lemoen — sfeer.', 'Toiletrol — silinder; Boek — vierkantige piramide; Lemoen — sfeer.', 'Toiletrol — sfeer; Boek — reghoekige prisma; Lemoen — silinder.'], correctIndex: 0, explanation: 'ʼn Toiletrol is ʼn silinder (geboë oppervlak met 2 sirkelvormige punte), ʼn boek is ʼn reghoekige prisma, en ʼn lemoen is ʼn sfeer.' },
        { difficulty: 'Medium', question: 'Watter stel gee korrek een regte-lewe voorbeeld van elkeen: a) Keël   b) Kubus   c) Silinder?', checkMode: 'auto', options: ['a) Roomyshorinkie   b) Blik kos   c) Dobbelsteen', 'a) Partytjiehoed   b) Dobbelsteen   c) Toiletrol', 'a) Bal   b) Dobbelsteen   c) Verkeerskeël', 'a) Partytjiehoed   b) Graanboks   c) Lemoen'], correctIndex: 1, explanation: 'ʼn Partytjiehoed is ʼn keël, ʼn dobbelsteen is ʼn kubus, en ʼn toiletrol is ʼn silinder. Die afleiers verwissel voorwerpe wat by ander 3D-voorwerpe hoort (ʼn bal en lemoen is sfere, en ʼn graanboks is ʼn reghoekige prisma).' },

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
        { difficulty: 'Easy', question: 'Ek is perfek rond met net een geboë oppervlak. Ek het geen plat vlakke, rande of hoekpunte nie. Watter 3D-voorwerp is ek?', checkMode: 'auto', options: ['Silinder', 'Sfeer', 'Keël', 'Kubus'], correctIndex: 1, explanation: 'Een deurlopende geboë oppervlak met geen plat vlakke, rande of hoekpunte nie beskryf ʼn sfeer. ʼn Silinder het 2 plat vlakke en ʼn keël het 1 plat vlak plus ʼn hoekpunt, so geeneen pas by "geen plat vlakke, geen hoekpunte" nie.' },
        { difficulty: 'Easy', question: 'ʼn Partytjiehoed het ʼn plat sirkelvormige basis en een geboë oppervlak wat by die bopunt in ʼn punt smaller word. Noem hierdie vorm.', checkMode: 'auto', options: ['Silinder', 'Sfeer', 'Keël', 'Vierkantige piramide'], correctIndex: 2, explanation: 'ʼn Plat sirkelvormige basis met ʼn geboë oppervlak wat na ʼn punt smaller word, beskryf ʼn keël. ʼn Silinder het twee sirkelvormige punte en geen punt nie, en ʼn vierkantige piramide het plat driehoekige vlakke in plaas van ʼn geboë oppervlak.' },
        { difficulty: 'Easy', question: 'Vul die leemte in: ʼn voorwerp met 2 driehoekige vlakke en 3 reghoekige vlakke word ʼn _______ genoem.', checkMode: 'auto', options: ['Driehoekige piramide', 'Reghoekige prisma', 'Vierkantige piramide', 'Driehoekige prisma'], correctIndex: 3, explanation: 'Twee driehoekige basisse verbind deur 3 reghoekige vlakke beskryf ʼn driehoekige prisma. ʼn Driehoekige piramide het 4 driehoekige vlakke en glad geen reghoeke nie.' },
        { difficulty: 'Easy', question: 'ʼn Voorwerp het 5 hoekpunte in totaal. Vier van sy vlakke is driehoeke en een vlak is ʼn ander vorm. Watter 3D-voorwerp pas by hierdie beskrywing?', checkMode: 'auto', options: ['Vierkantige piramide', 'Driehoekige piramide', 'Driehoekige prisma', 'Kubus'], correctIndex: 0, explanation: 'ʼn Vierkantige piramide het 5 hoekpunte: 4 driehoekige vlakke plus 1 vierkantige basis. ʼn Driehoekige piramide het slegs 4 hoekpunte, aangesien al 4 van sy vlakke (die basis ingesluit) driehoeke is.' },

        // Blok 2 — Vlakke, Rande, Hoekpunte Tel (Maklik)
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn vierkantige piramide?', checkMode: 'auto', options: ['4', '5', '8', '6'], correctIndex: 1, explanation: 'ʼn Vierkantige piramide het 5 hoekpunte — 4 by die basishoeke en 1 by die piek. Om net die basishoeke (4) te tel, mis die piek.' },
        { difficulty: 'Easy', question: 'ʼn Silinder het nêrens skerp hoeke op hom nie. Gegewe dit, hoeveel hoekpunte moet dit hê?', checkMode: 'auto', options: ['2', '1', '0', '4'], correctIndex: 2, explanation: 'ʼn Silinder het geen skerp punte nie, so dit het 0 hoekpunte. Om 2 te sê verwar hoekpunte met die silinder se 2 rande.' },
        { difficulty: 'Easy', question: 'Voltooi die telling: ʼn driehoekige prisma het ___ vlakke in totaal, as jy sy 2 driehoekige basisse en 3 reghoekige sye tel.', checkMode: 'auto', options: ['3', '6', '9', '5'], correctIndex: 3, explanation: 'ʼn Driehoekige prisma het 5 vlakke — 2 driehoekige basisse en 3 reghoekige sy-vlakke. Om 9 te sê verwar vlakke met die rand-telling, en 6 verwar dit met ʼn kubus.' },
        { difficulty: 'Easy', question: 'Watter stelling verduidelik korrek waarom ʼn sfeer 0 hoekpunte het, al lyk dit of dit op ʼn punt kan balanseer?', checkMode: 'auto', options: ['ʼn Hoekpunt vorm net waar rande ontmoet, en ʼn sfeer het glad geen rande nie omdat dit geen plat vlakke het nie — so daar is nêrens vir ʼn hoekpunt om te vorm nie.', 'ʼn Sfeer het 0 hoekpunte omdat dit altyd rol en nooit lank genoeg stilstaan vir ʼn punt om te vorm nie.', 'ʼn Sfeer het eintlik 1 hoekpunt, by watter punt ook al die grond raak.', 'ʼn Sfeer het 0 hoekpunte omdat dit presies 1 geboë rand het in plaas daarvan.'], correctIndex: 0, explanation: 'Hoekpunte benodig rande om te ontmoet. Omdat ʼn sfeer heeltemal geboë is en geen rande het nie, het dit 0 hoekpunte.' },

        // Blok 3 — Vergelyk en Kontrasteer Voorwerpe (Medium)
        { difficulty: 'Medium', question: 'Hoeveel meer vlakke het ʼn driehoekige prisma as ʼn driehoekige piramide?', checkMode: 'auto', options: ['0', '1', '2', '5'], correctIndex: 1, explanation: 'ʼn Driehoekige prisma het 5 vlakke en ʼn driehoekige piramide het 4 vlakke. 5 − 4 = 1 meer vlak.' },
        { difficulty: 'Medium', question: 'Watter voorwerp het meer rande: ʼn driehoekige prisma of ʼn vierkantige piramide?', checkMode: 'auto', options: ['Vierkantige piramide', 'Hulle het dieselfde aantal rande', 'Driehoekige prisma', 'Geeneen het rande nie'], correctIndex: 2, explanation: 'ʼn Driehoekige prisma het 9 rande en ʼn vierkantige piramide het 8 rande — die driehoekige prisma het 1 meer rand.' },
        { difficulty: 'Medium', question: 'Watter stelling vergelyk korrek wat ʼn keël en ʼn silinder in gemeen het?', checkMode: 'auto', options: ['Altwee het presies 2 plat sirkelvormige vlakke.', 'Altwee het presies 1 hoekpunt.', 'Geeneen het ʼn geboë oppervlak nie.', 'Altwee het ten minste een plat sirkelvormige vlak en een geboë oppervlak.'], correctIndex: 3, explanation: 'ʼn Keël het 1 plat sirkelvormige vlak en ʼn silinder het 2, maar altwee voorwerpe het ʼn plat sirkelvormige vlak saam met ʼn geboë oppervlak.' },
        { difficulty: 'Medium', question: 'Watter redenasie voorspel korrek dat ʼn driehoekige prisma meer rande het as ʼn vierkantige piramide, voordat jy presies tel?', checkMode: 'auto', options: ['ʼn Driehoekige prisma het twee volle basisse (wat elkeen rande bydra) plus verbindende rande, terwyl ʼn piramide net een basis plus rande wat na ʼn enkele piek skuins loop het — so die prisma het gewoonlik meer rande.', 'ʼn Driehoekige prisma het minder vlakke as ʼn vierkantige piramide, so dit moet ook minder rande hê.', 'ʼn Vierkantige piramide het ʼn geboë oppervlak, wat altyd meer rande bydra as plat prisma-vlakke.', 'Altwee vorms het altyd presies dieselfde aantal rande as hul aantal vlakke.'], correctIndex: 0, explanation: 'ʼn Driehoekige prisma het eintlik 9 rande vergeleke met ʼn vierkantige piramide se 8, wat pas by die redenasie dat twee volle basisse gewoonlik meer rande bydra as een basis plus skuins rande na ʼn piek.' },

        // Blok 4 — Sorteer en Klassifiseer (Medium)
        { difficulty: 'Medium', question: 'Watter groepering sorteer hierdie regte-lewe voorwerpe korrek in kan rol en kan nie rol nie: ʼn albaster, ʼn vuurhoutjiedosie, ʼn verkeerskeël, ʼn boek?', checkMode: 'auto', options: ['Kan rol: vuurhoutjiedosie, boek.   Kan nie rol nie: albaster, verkeerskeël.', 'Kan rol: albaster, verkeerskeël.   Kan nie rol nie: vuurhoutjiedosie, boek.', 'Kan rol: albaster, vuurhoutjiedosie, verkeerskeël, boek (almal van hulle).', 'Kan nie rol nie: albaster, vuurhoutjiedosie, verkeerskeël, boek (geeneen van hulle).'], correctIndex: 1, explanation: 'ʼn Albaster (sfeer) en verkeerskeël (keël) het altwee geboë oppervlakke, so hulle kan rol. ʼn Vuurhoutjiedosie en boek (reghoekige prismas) het slegs plat vlakke, so hulle kan nie rol nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in veelvlak (slegs plat vlakke) en nie ʼn veelvlak nie (het ʼn geboë oppervlak):\nsilinder, vierkantige piramide, sfeer, driehoekige prisma, keël', answer: 'a) vierkantige piramide, driehoekige prisma   b) silinder, sfeer, keël', checkMode: 'auto', parts: [
          { label: 'a) Veelvlak', correctAnswer: 'vierkantige piramide, driehoekige prisma', correctAnswers: ['vierkantige piramide, driehoekige prisma', 'driehoekige prisma, vierkantige piramide'], explanation: 'ʼn Vierkantige piramide en ʼn driehoekige prisma het slegs plat vlakke, so hulle is veelvlakke.' },
          { label: 'b) Nie ʼn veelvlak nie', correctAnswer: 'silinder, sfeer, keël', correctAnswers: ['silinder, sfeer, keël', 'silinder, keël, sfeer', 'sfeer, silinder, keël', 'sfeer, keël, silinder', 'keël, silinder, sfeer', 'keël, sfeer, silinder'], explanation: 'ʼn Silinder, sfeer en keël het almal ʼn geboë oppervlak, so geeneen van hulle is ʼn veelvlak nie.' },
        ] },
        { difficulty: 'Medium', question: 'Watter van hierdie voorwerpe kan maklik op mekaar gestapel word: ʼn sfeer, ʼn kubus of ʼn keël?', checkMode: 'auto', options: ['Sfeer', 'Keël', 'Kubus', 'Altwee die sfeer en die keël'], correctIndex: 2, explanation: 'ʼn Kubus het plat vlakke wat stabiel op mekaar rus, anders as ʼn sfeer (rol weg) of ʼn keël (balanseer op ʼn punt).' },
        { difficulty: 'Medium', question: 'Watter een hoort nie by die res nie, en waarom: kubus, vierkantige piramide, driehoekige prisma, sfeer?', checkMode: 'auto', options: ['Kubus — dit is die enigste een met vierkantige vlakke.', 'Vierkantige piramide — dit is die enigste een met ʼn driehoekige vlak.', 'Driehoekige prisma — dit is die enigste een wat gestapel kan word.', 'Sfeer — dit is die enigste een met glad geen plat vlakke nie.'], correctIndex: 3, explanation: 'Kubus, vierkantige piramide en driehoekige prisma is almal veelvlakke met slegs plat vlakke. ʼn Sfeer het ʼn geboë oppervlak in plaas daarvan, wat dit die uitsondering maak.' },

        // Blok 5 — Regte-lewe Toepassing en Foutspoor (Medium-Hard)
        { difficulty: 'Medium', question: 'Watter 3D-voorwerp is die Groot Piramide van Egipte gevorm soos?', checkMode: 'auto', options: ['Vierkantige piramide', 'Driehoekige piramide', 'Keël', 'Reghoekige prisma'], correctIndex: 0, explanation: 'Die Groot Piramide het ʼn vierkantige basis met 4 driehoekige vlakke wat by die bopunt ontmoet — ʼn vierkantige piramide.' },
        { difficulty: 'Medium', question: 'Sipho redeneer dat omdat ʼn vierkantige piramide en ʼn driehoekige piramide altwee "piramides" is, hulle dieselfde aantal vlakke moet hê. Watter stelling evalueer sy redenasie korrek?', checkMode: 'auto', options: ['Sy redenasie klop — altwee piramides het 5 vlakke omdat hulle dieselfde soort vorm is.', 'Sy redenasie klop nie — ʼn vierkantige piramide het 5 vlakke (1 vierkant + 4 driehoeke), terwyl ʼn driehoekige piramide slegs 4 vlakke het (almal driehoeke), want hul basisvorms verskil.', 'Sy redenasie klop nie — piramides het nooit ʼn vaste aantal vlakke nie.', 'Sy redenasie klop, want "piramide" beteken altyd presies 4 driehoekige vlakke.'], correctIndex: 1, explanation: 'Die aantal vlakke van ʼn piramide hang af van die aantal sye van sy basis, so verskillende basisvorms gee verskillende aantal vlakke.' },
        { difficulty: 'Medium', question: 'Watter stel gee korrek een regte-lewe voorbeeld van elkeen: a) Sfeer   b) Reghoekige prisma   c) Vierkantige piramide?', checkMode: 'auto', options: ['a) Graanboks   b) Bal   c) Partytjiehoed', 'a) Albaster   b) Groot Piramide van Egipte   c) Boek', 'a) Lemoen   b) Graanboks   c) Groot Piramide van Egipte', 'a) Dobbelsteen   b) Toiletrol   c) Verkeerskeël'], correctIndex: 2, explanation: 'ʼn Lemoen is ʼn sfeer, ʼn graanboks is ʼn reghoekige prisma, en die Groot Piramide van Egipte is ʼn vierkantige piramide. Die afleiers pas elke voorbeeld verkeerd by die 3D-voorwerp.' },

        // Blok 6 — Veelstap-redenering en Saamgestelde Voorwerpe (Moeilik)
        { difficulty: 'Hard', question: 'ʼn Tent word gebou deur ʼn reghoekige prisma (die mure) met ʼn driehoekige prisma bo-op (die skuins dak) te kombineer. Watter stelling beskryf korrek die vorms betrokke en waarom die tent steeds ʼn veelvlak is?', checkMode: 'auto', options: ['Die driehoekige prisma se eindpunte dra reghoeke by, die reghoekige prisma dra driehoeke by, en die tent is ʼn veelvlak omdat dit ʼn geboë dak het.', 'Die driehoekige prisma se eindpunte dra sirkels by, die reghoekige prisma dra reghoeke by, en die tent is nie ʼn veelvlak nie.', 'Die driehoekige prisma se eindpunte dra driehoeke by, die reghoekige prisma dra sirkels by, en die tent is ʼn veelvlak omdat sirkels as plat vlakke tel.', 'Die driehoekige prisma se eindpunte dra driehoeke by, die reghoekige prisma dra reghoeke by, en die tent is ʼn veelvlak omdat altwee vorms heeltemal uit plat vlakke bestaan.'], correctIndex: 3, explanation: 'Wanneer twee veelvlakke gekombineer word, bly elke vlak plat, want geeneen van die vorms dra ʼn geboë oppervlak by nie — so die gekombineerde tentvorm is ook ʼn veelvlak.' },
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
        { difficulty: 'Easy', question: 'Ek het ʼn driehoekige basis en nog 3 driehoekige vlakke wat by ʼn punt bo-aan ontmoet. Watter 3D-voorwerp is ek?', checkMode: 'auto', options: ['Vierkantige piramide', 'Driehoekige piramide', 'Driehoekige prisma', 'Keël'], correctIndex: 1, explanation: 'Al 4 vlakke is driehoeke wat by ʼn piek ontmoet — dit beskryf ʼn driehoekige piramide (tetraëder). ʼn Vierkantige piramide het 1 vierkantige vlak tussen sy 5, en ʼn driehoekige prisma het 2 driehoekige vlakke plus 3 reghoeke.' },
        { difficulty: 'Easy', question: 'ʼn Rubik se kubus het elke vlak plat en vierkantig, en 8 skerp hoeke. Wat word hierdie voorwerp genoem?', checkMode: 'auto', options: ['Vierkantige piramide', 'Reghoekige prisma', 'Kubus', 'Driehoekige prisma'], correctIndex: 2, explanation: 'ʼn 3D-voorwerp met al plat vierkantige vlakke en 8 hoekpunte is ʼn kubus. ʼn Reghoekige prisma het ook 8 hoekpunte, maar sy vlakke is reghoeke, nie almal vierkante nie.' },
        { difficulty: 'Easy', question: 'Vul die leemte in: ʼn voorwerp met presies 1 plat sirkelvormige vlak, 1 geboë oppervlak, en een skerp punt bo-aan is ʼn _______.', checkMode: 'auto', options: ['Silinder', 'Sfeer', 'Vierkantige piramide', 'Keël'], correctIndex: 3, explanation: 'Een plat sirkelvormige basis plus ʼn geboë oppervlak wat na ʼn punt smaller word, beskryf ʼn keël. ʼn Silinder het 2 plat sirkelvormige vlakke en geen punt nie, so dit pas nie.' },
        { difficulty: 'Easy', question: 'ʼn Voorwerp het 6 hoekpunte in totaal. Twee van sy vlakke is driehoeke en die res is reghoeke. Watter 3D-voorwerp is dit?', checkMode: 'auto', options: ['Driehoekige prisma', 'Driehoekige piramide', 'Vierkantige piramide', 'Reghoekige prisma'], correctIndex: 0, explanation: 'ʼn Driehoekige prisma het 6 hoekpunte: 2 driehoekige basisse en 3 reghoekige sy-vlakke. ʼn Driehoekige piramide het slegs 4 hoekpunte, aangesien al sy vlakke by een piek ontmoet.' },

        // Blok 2 — Vlakke, Rande, Hoekpunte Tel (Maklik)
        { difficulty: 'Easy', question: 'Hoeveel rande het ʼn vierkantige piramide?', checkMode: 'auto', options: ['5', '8', '4', '10'], correctIndex: 1, explanation: 'ʼn Vierkantige piramide het 8 rande — 4 rondom die vierkantige basis en 4 wat skuins na die piek loop. Om net die basisrande (4) te tel, mis die skuins rande.' },
        { difficulty: 'Easy', question: 'ʼn Keël se enigste rand is waar sy plat basis sy geboë oppervlak ontmoet. Hoeveel rande is dit in totaal?', checkMode: 'auto', options: ['0', '2', '1', '3'], correctIndex: 2, explanation: 'ʼn Keël het 1 rand — waar die plat sirkelvormige basis die geboë oppervlak ontmoet. Om 0 te sê verwar ʼn keël met ʼn sfeer.' },
        { difficulty: 'Easy', question: 'Voltooi die telling: ʼn silinder het ___ plat vlakke, plus 1 geboë oppervlak wat hulle verbind.', checkMode: 'auto', options: ['0', '1', '3', '2'], correctIndex: 3, explanation: 'ʼn Silinder het 2 plat sirkelvormige vlakke, plus 1 geboë oppervlak wat hulle verbind. Om 0 te sê verwar dit met ʼn sfeer, en 1 tel net een punt.' },
        { difficulty: 'Easy', question: 'ʼn Sfeer het 0 plat vlakke. Watter stelling verduidelik korrek hoe hierdie feit alleen vir jou wys dat dit ook 0 rande moet hê?', checkMode: 'auto', options: ['ʼn Rand kan net vorm waar twee plat vlakke ontmoet. Aangesien ʼn sfeer 0 plat vlakke het, is daar geen plat vlakke wat mekaar kan ontmoet nie, so dit kan ook geen rande hê nie.', 'ʼn Sfeer het 0 rande omdat dit presies 1 hoekpunt het, wat al die moontlike hoeke opgebruik.', 'ʼn Sfeer het 0 rande omdat rande net op kubusvormige voorwerpe vorm.', 'Hierdie feit wys niks vir jou oor die aantal rande nie — jy moet hulle apart tel.'], correctIndex: 0, explanation: 'Rande hang af van plat vlakke wat ontmoet. Met glad geen plat vlakke nie, het ʼn sfeer geen moontlike rande nie.' },

        // Blok 3 — Vergelyk en Kontrasteer Voorwerpe (Medium)
        { difficulty: 'Medium', question: 'Watter voorwerp het presies 1 geboë oppervlak en slegs 1 plat vlak?', checkMode: 'auto', options: ['Silinder', 'Keël', 'Sfeer', 'Vierkantige piramide'], correctIndex: 1, explanation: 'ʼn Keël het presies 1 plat sirkelvormige vlak en 1 geboë oppervlak — ʼn silinder het 2 plat vlakke en ʼn sfeer het 0.' },
        { difficulty: 'Medium', question: 'Watter stelling beskryf korrek wat ʼn kubus en ʼn vierkantige piramide in gemeen het?', checkMode: 'auto', options: ['Altwee het presies 8 hoekpunte.', 'Altwee het ʼn geboë oppervlak.', 'Altwee het ʼn vierkantige vlak.', 'Altwee het dieselfde aantal rande.'], correctIndex: 2, explanation: 'Elke vlak van ʼn kubus is ʼn vierkant, en ʼn vierkantige piramide het een vierkantige basis — so altwee voorwerpe het ʼn vierkantige vlak.' },
        { difficulty: 'Medium', question: 'ʼn 3D-voorwerp het geen plat vlakke en geen rande nie. Wat is die enigste voorwerp wat dit kan wees?', checkMode: 'auto', options: ['Silinder', 'Keël', 'Kubus', 'Sfeer'], correctIndex: 3, explanation: 'ʼn Sfeer is die enigste algemene 3D-voorwerp met glad geen plat vlakke of rande nie — net een geboë oppervlak. ʼn Silinder het steeds 2 plat vlakke en 2 rande.' },
        { difficulty: 'Medium', question: 'Watter een het minder vlakke: ʼn driehoekige piramide of ʼn keël?', checkMode: 'auto', options: ['Keël', 'Driehoekige piramide', 'Hulle het dieselfde aantal vlakke', 'Geeneen het vlakke nie'], correctIndex: 0, explanation: 'ʼn Keël het 2 vlakke (1 plat + 1 geboë) en ʼn driehoekige piramide het 4 plat driehoekige vlakke, so die keël het minder vlakke.' },

        // Blok 4 — Sorteer en Klassifiseer (Medium)
        { difficulty: 'Medium', question: 'ʼn Voorwerp het 1 vierkantige vlak en 4 driehoekige vlakke. Watter stelling noem hierdie 3D-voorwerp en sy aantal rande korrek?', checkMode: 'auto', options: ['Driehoekige piramide, met 6 rande', 'Vierkantige piramide, met 8 rande', 'Vierkantige piramide, met 6 rande', 'Reghoekige prisma, met 8 rande'], correctIndex: 1, explanation: '1 vierkantige basis + 4 driehoekige sye wat by ʼn piek ontmoet is ʼn vierkantige piramide, wat 8 rande het — 4 rondom die basis en 4 wat skuins na die piek loop.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie voorwerpe in twee groepe — kan rol en kan nie rol nie:\nsilinder, driehoekige piramide, sfeer, vierkantige piramide, keël', answer: 'a) silinder, sfeer, keël   b) driehoekige piramide, vierkantige piramide', checkMode: 'auto', parts: [
          { label: 'a) Kan rol', correctAnswer: 'silinder, sfeer, keël', correctAnswers: ['silinder, sfeer, keël', 'silinder, keël, sfeer', 'sfeer, silinder, keël', 'sfeer, keël, silinder', 'keël, silinder, sfeer', 'keël, sfeer, silinder'], explanation: 'Silinder, sfeer en keël het almal ʼn geboë oppervlak, wat hulle toelaat om te rol.' },
          { label: 'b) Kan nie rol nie', correctAnswer: 'driehoekige piramide, vierkantige piramide', correctAnswers: ['driehoekige piramide, vierkantige piramide', 'vierkantige piramide, driehoekige piramide'], explanation: 'Driehoekige piramide en vierkantige piramide het slegs plat vlakke, so daar is geen geboë oppervlak om op te rol nie.' },
        ] },
        { difficulty: 'Medium', question: 'Amahle sê voorwerpe met slegs plat vlakke word veelvlakke genoem, en ʼn silinder is ʼn voorbeeld van ʼn veelvlak. Watter stelling is korrek?', checkMode: 'auto', options: ['Ja — ʼn silinder het plat sirkelvormige punte, so dit tel as ʼn veelvlak.', 'Ja, omdat veelvlakke een geboë oppervlak kan insluit solank daar ook plat vlakke is.', 'Nee — voorwerpe met slegs plat vlakke is veelvlakke, maar ʼn silinder het ʼn geboë oppervlak, so dit is nie ʼn veelvlak nie.', 'Nee, omdat ʼn silinder te min hoekpunte het om ʼn veelvlak te wees.'], correctIndex: 2, explanation: 'Voorwerpe met slegs plat vlakke is veelvlakke, maar ʼn silinder het ʼn geboë oppervlak, so dit is nie ʼn veelvlak nie.' },
        { difficulty: 'Medium', question: 'Watter een hoort nie by die res nie, en waarom: reghoekige prisma, silinder, kubus, driehoekige prisma?', checkMode: 'auto', options: ['Reghoekige prisma — dit is die enigste een met 12 rande.', 'Kubus — dit is die enigste een met gelyke rande.', 'Driehoekige prisma — dit is die enigste een met driehoekige vlakke.', 'Silinder — dit is die enigste een met ʼn geboë oppervlak en geen reguit rande wat by hoekpunte ontmoet nie.'], correctIndex: 3, explanation: 'Reghoekige prisma, kubus en driehoekige prisma is almal veelvlakke met slegs plat vlakke. ʼn Silinder het geboë oppervlakke, wat dit die uitsondering maak.' },

        // Blok 5 — Regte-lewe Toepassing en Foutspoor (Medium-Hard)
        { difficulty: 'Medium', question: 'ʼn Tregter wat gebruik word om olie in ʼn motorenjin te giet, is gevorm soos watter 3D-voorwerp?', checkMode: 'auto', options: ['Keël', 'Silinder', 'Vierkantige piramide', 'Sfeer'], correctIndex: 0, explanation: 'ʼn Tregter het ʼn wye sirkelvormige opening wat na ʼn punt smaller word — dit is soos ʼn keël gevorm.' },
        { difficulty: 'Medium', question: 'Amahle beweer dat elke prisma noodwendig presies 2 driehoekige vlakke moet hê. Watter stelling gebruik die reghoekige prisma korrek as ʼn teenvoorbeeld?', checkMode: 'auto', options: ['Haar bewering is korrek — elke prisma, ook ʼn reghoekige prisma, het 2 driehoekige vlakke wat binne-in weggesteek is.', 'Haar bewering is verkeerd — net ʼn driehoekige prisma het 2 driehoekige vlakke (sy basisse); ʼn reghoekige prisma het reghoekige basisse in plaas daarvan.', 'Haar bewering is verkeerd, want prismas het nooit enige driehoekige vlakke nie.', 'Haar bewering is korrek vir piramides, maar nie vir prismas nie.'], correctIndex: 1, explanation: 'Die vorm van ʼn prisma se basisse pas by die naam van die prisma — ʼn driehoekige prisma het driehoekbasisse, ʼn reghoekige prisma het reghoekbasisse.' },
        { difficulty: 'Medium', question: 'Amahle het ʼn roomyshorinkie, ʼn dobbelsteen en ʼn sokkerbal. Watter stel passings is korrek?', checkMode: 'auto', options: ['Roomyshorinkie — silinder; Dobbelsteen — kubus; Sokkerbal — sfeer.', 'Roomyshorinkie — keël; Dobbelsteen — vierkantige piramide; Sokkerbal — sfeer.', 'Roomyshorinkie — keël; Dobbelsteen — kubus; Sokkerbal — sfeer.', 'Roomyshorinkie — keël; Dobbelsteen — kubus; Sokkerbal — silinder.'], correctIndex: 2, explanation: 'ʼn Roomyshorinkie is ʼn keël, ʼn dobbelsteen is ʼn kubus, en ʼn sokkerbal is ʼn sfeer.' },

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
