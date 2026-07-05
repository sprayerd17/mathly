import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: '2D-vorms',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS 2D-VORMS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-are-2d-shapes',
      title: 'Wat is 2D-vorms?',
      icon: '🔷',
      explanation: `
<p style="margin-bottom:14px;">ʼn <strong>2D-vorm</strong> is ʼn <strong>plat vorm</strong> met slegs twee dimensies — <strong>lengte</strong> en <strong>breedte</strong>. Dit het geen diepte of dikte nie — jy kan dit nie optel en vashou soos ʼn boks nie. Dink daaraan as ʼn vorm wat op ʼn plat stuk papier geteken is.</p>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Alledaagse voorbeelde 🌍</span>
  <ul style="margin-top:8px;margin-bottom:0;padding-left:20px;color:#78350f;line-height:2;">
    <li><strong>ʼn Stuk papier:</strong> heeltemal plat met lengte en breedte maar geen dikte nie</li>
    <li><strong>ʼn Skaduwee op die grond:</strong> ʼn plat beeld met glad geen diepte nie</li>
    <li><strong>ʼn Tekening op ʼn bladsy:</strong> jy kan die vorm sien maar jy kan geen dikte voel nie</li>
  </ul>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Sleuteleienskappe van 2D-vorms</div>
  <div style="display:flex;flex-direction:column;gap:12px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Sye</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:1px;">Die <strong style="color:#1e40af;">reguit of geboë lyne</strong> wat die grens van die vorm vorm. Die meeste 2D-vorms het reguit sye, maar ʼn sirkel het een geboë rand.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Hoeke</span>
      <span style="color:#7f1d1d;font-size:15px;padding-top:1px;">Die <strong style="color:#dc2626;">hoeveelheid draai by elke hoekpunt</strong> waar twee sye ontmoet. ʼn Regte hoek meet presies 90°, soos die hoek van ʼn vierkant.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#16a34a;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;flex-shrink:0;">Hoekpunte</span>
      <span style="color:#14532d;font-size:15px;padding-top:1px;">Die <strong style="color:#16a34a;">punte waar twee sye ontmoet</strong>. ʼn Enkele punt word ʼn <em>hoekpunt</em> genoem; meer as een word <em>hoekpunte</em> genoem. ʼn Sirkel het geen hoekpunte nie omdat sy rand geboë is.</span>
    </div>
  </div>
</div>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Algemene 2D-vorms</div>
  <div style="overflow-x:auto;">
    <table style="width:100%;border-collapse:collapse;font-size:14px;">
      <thead>
        <tr style="background:#dbeafe;">
          <th style="padding:10px 14px;text-align:left;color:#1e40af;font-weight:700;border-radius:6px 0 0 0;">Vorm</th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#1e40af;">Sye</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;"><span style="color:#16a34a;">Hoekpunte</span></th>
          <th style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;border-radius:0 6px 0 0;"><span style="color:#dc2626;">Hoeke</span></th>
        </tr>
      </thead>
      <tbody>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Sirkel</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;">0 reguit sye<br/><span style="font-size:12px;">(1 geboë rand)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">0</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">0</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Driehoek</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">3</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">3</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">3</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Vierkant</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">4 <span style="font-size:12px;">(almal gelyk)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">4 regte hoeke</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Reghoek</td>
          <td style="padding:10px 14px;text-align:center;color:#64748b;font-weight:600;">4 <span style="font-size:12px;">(2 pare gelyk)</span></td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">4</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">4 regte hoeke</td>
        </tr>
        <tr style="border-bottom:1px solid #bfdbfe;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Vyfhoek</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">5</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">5</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">5</td>
        </tr>
        <tr style="background:#f8fafc;">
          <td style="padding:10px 14px;font-weight:600;color:#0f1f3d;">Seshoek</td>
          <td style="padding:10px 14px;text-align:center;color:#1e40af;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#16a34a;font-weight:700;">6</td>
          <td style="padding:10px 14px;text-align:center;color:#dc2626;font-weight:700;">6</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Beskryf ʼn reghoek aan die hand van sy eienskappe.',
          steps: [
            '<strong style="color:#1e40af;">Tel die sye</strong> — ʼn reghoek het <strong>4 sye</strong>.',
            '<strong style="color:#1e40af;">Identifiseer gelyke sye</strong> — die <strong>oorstaande sye is gelyk</strong> in lengte (die twee lang sye is dieselfde en die twee kort sye is dieselfde).',
            '<strong style="color:#16a34a;">Tel die hoekpunte</strong> — ʼn reghoek het <strong>4 hoekpunte</strong>, een by elke hoek.',
            '<strong style="color:#dc2626;">Beskryf die hoeke</strong> — al <strong>4 hoeke is regte hoeke (90°)</strong>, net soos die hoek van ʼn stuk papier.',
          ],
          answer:
            'ʼn Reghoek het 4 sye met oorstaande sye gelyk in lengte, 4 hoekpunte en 4 regte hoeke (90°).',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Ses 2D-vorms duidelik gemerk — sirkel, driehoek, vierkant, reghoek, vyfhoek, seshoek — elkeen met sye, hoekpunte en hoeke aangedui',
      videoPlaceholder:
        'Kort video wat die eienskappe van algemene 2D-vorms noem en beskryf',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — 2D-VORMS SORTEER EN KLASSIFISEER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-classifying-2d-shapes',
      title: '2D-vorms Sorteer en Klassifiseer',
      icon: '🗂️',
      explanation: `
<p style="margin-bottom:14px;">Vorms kan <strong>gesorteer en geklassifiseer</strong> word volgens hul eienskappe. Wanneer ons vorms klassifiseer, kyk ons na dinge wat hulle in gemeen het — soos hoeveel sye hulle het, of hul hoeke regte hoeke is, of hul sye almal gelyk is.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Maniere om vorms te sorteer</div>
  <div style="display:flex;flex-direction:column;gap:14px;">

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens aantal sye</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Driehoeke — 3 sye</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Vierhoeke — 4 sye</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Vyfhoeke — 5 sye</span>
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Seshoeke — 6 sye</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">Vierkante en reghoeke is albei <em>vierhoeke</em> omdat hulle albei 4 sye het.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens hoektipe</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Met regte hoeke — vierkant, reghoek, reghoekige driehoek</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Sonder regte hoeke — sirkel, gelyksydige driehoek, seshoek</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">ʼn <strong>Regte hoek</strong> lyk soos die hoek van ʼn boek of ʼn stuk papier — dit meet presies 90°.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens gelyke sye</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Reëlmatig — al die sye gelyk (bv. vierkant, gelyksydige driehoek)</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Onreëlmatig — sye nie almal gelyk nie (bv. reghoek, skalene driehoek)</span>
      </div>
      <p style="margin-top:6px;font-size:14px;color:#1e3a8a;">ʼn <strong>Reëlmatige veelhoek</strong> het al die sye dieselfde lengte EN al die hoeke dieselfde grootte.</p>
    </div>

    <div>
      <div style="display:inline-flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span style="background:#dc2626;color:#fff;border-radius:6px;padding:2px 10px;font-weight:700;font-size:13px;">Volgens reguit teenoor geboë sye</span>
      </div>
      <div style="display:flex;flex-wrap:wrap;gap:8px;padding-left:4px;">
        <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Slegs reguit sye — driehoek, vierkant, reghoek, seshoek</span>
        <span style="background:#e2e8f0;color:#475569;border-radius:20px;padding:3px 12px;font-size:13px;font-weight:600;">Geboë sye — sirkel, ovaal</span>
      </div>
    </div>

  </div>
</div>

<div style="background:#fef9c3;border:1.5px solid #fde68a;border-radius:10px;padding:14px 18px;margin-bottom:16px;">
  <span style="font-size:13px;font-weight:700;color:#92400e;text-transform:uppercase;letter-spacing:.05em;">Wat is ʼn veelhoek? 📐</span>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;">ʼn <strong>Veelhoek</strong> is ʼn <strong>geslote 2D-vorm wat heeltemal uit reguit sye bestaan</strong>. Al die sye moet verbind wees en daar mag geen gapings wees nie. Driehoeke, vierkante, reghoeke, vyfhoeke en seshoeke is almal veelhoeke.</p>
  <p style="margin-top:8px;margin-bottom:0;color:#78350f;line-height:1.7;"><strong>Sirkels is NIE veelhoeke nie</strong> — ʼn sirkel het ʼn geboë rand, nie reguit sye nie. Ovale is ook nie veelhoeke om dieselfde rede nie.</p>
</div>
`,
      workedExamples: [
        {
          question:
            'Sorteer hierdie vorms in twee groepe — veelhoeke en nie-veelhoeke: sirkel, vierkant, driehoek, ovaal, reghoek, seshoek.',
          steps: [
            'Kyk na elke vorm: het dit <strong style="color:#1e40af;">slegs reguit sye</strong> EN is dit ʼn <strong style="color:#1e40af;">geslote vorm</strong>?',
            '<strong style="color:#1e40af;">Vierkant</strong> — 4 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#1e40af;">Driehoek</strong> — 3 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#1e40af;">Reghoek</strong> — 4 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#1e40af;">Seshoek</strong> — 6 reguit sye, geslote ✔ veelhoek.',
            '<strong style="color:#64748b;">Sirkel</strong> — geboë rand, geen reguit sye nie ✘ nie ʼn veelhoek nie.',
            '<strong style="color:#64748b;">Ovaal</strong> — geboë rand, geen reguit sye nie ✘ nie ʼn veelhoek nie.',
          ],
          answer:
            'Veelhoeke: vierkant, driehoek, reghoek, seshoek.\nNie-veelhoeke: sirkel, ovaal.',
        },
        {
          question:
            'Watter van hierdie vorms het ten minste een regte hoek? Vierkant, driehoek, reghoek, sirkel, reghoekige driehoek.',
          steps: [
            'ʼn <strong style="color:#dc2626;">Regte hoek</strong> meet presies 90° — soos die hoek van ʼn stuk papier.',
            '<strong>Vierkant:</strong> al 4 hoeke is regte hoeke ✔',
            '<strong>Driehoek (gelyksydig):</strong> geen regte hoeke nie ✘',
            '<strong>Reghoek:</strong> al 4 hoeke is regte hoeke ✔',
            '<strong>Sirkel:</strong> glad geen hoeke nie ✘',
            '<strong>Reghoekige driehoek:</strong> het presies 1 regte hoek ✔',
          ],
          answer:
            'Vierkant, reghoek en reghoekige driehoek het ten minste een regte hoek.',
        },
        {
          question:
            'Sorteer hierdie in reëlmatige en onreëlmatige veelhoeke: gelyksydige driehoek, skalene driehoek, vierkant, reghoek.',
          steps: [
            'ʼn <strong style="color:#1e40af;">Reëlmatige veelhoek</strong> het <strong>al die sye gelyk</strong> EN <strong>al die hoeke gelyk</strong>.',
            '<strong>Gelyksydige driehoek:</strong> al 3 sye gelyk, al die hoeke 60° ✔ reëlmatig.',
            '<strong>Vierkant:</strong> al 4 sye gelyk, al die hoeke 90° ✔ reëlmatig.',
            '<strong>Skalene driehoek:</strong> al 3 sye verskillende lengtes ✘ onreëlmatig.',
            '<strong>Reghoek:</strong> oorstaande sye gelyk maar aangrensende sye verskillende lengtes ✘ onreëlmatig.',
          ],
          answer:
            'Reëlmatig: gelyksydige driehoek, vierkant.\nOnreëlmatig: skalene driehoek, reghoek.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Venn-diagram wat vorms sorteer in veelhoeke en nie-veelhoeke met voorbeeldvorms in elke afdeling',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — 2D-VORMS VERGELYK EN KONTRASTEER
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'comparing-contrasting-2d-shapes',
      title: '2D-vorms Vergelyk en Kontrasteer',
      icon: '⚖️',
      explanation: `
<p style="margin-bottom:14px;"><strong>Vorms vergelyk</strong> beteken om noukeurig na twee vorms langs mekaar te kyk om uit te vind hoe hulle <strong style="color:#16a34a;">eenders</strong> (dieselfde) is en hoe hulle <strong style="color:#dc2626;">verskil</strong>. Dit help ons om elke vorm se spesiale eienskappe dieper te verstaan.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Stap-vir-stap-metode om twee vorms te vergelyk</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">1</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Tel en vergelyk die aantal sye.</strong> Het elke vorm dieselfde aantal sye?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">2</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vergelyk die lengtes van die sye.</strong> Is al die sye gelyk, of verskil sommige sye?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">3</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vergelyk die hoeke.</strong> Is hulle regte hoeke, kleiner of groter?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">4</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Vergelyk die aantal hoekpunte.</strong> Hoeveel hoeke het elke vorm?</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#1e40af;color:#fff;border-radius:50%;width:26px;height:26px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;flex-shrink:0;">5</span>
      <span style="color:#1e3a8a;font-size:15px;padding-top:2px;"><strong>Let op enige spesiale eienskappe</strong> — soos regte hoeke, gelyke sye, of geboë rande.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question: 'Vergelyk ʼn vierkant en ʼn reghoek.',
          steps: [
            '<strong style="color:#16a34a;">Ooreenkomste:</strong>',
            '✔ Albei het <strong>4 sye</strong>.',
            '✔ Albei het <strong>4 hoekpunte</strong>.',
            '✔ Albei het <strong>4 regte hoeke</strong> (90° elk).',
            '✔ Albei is <strong>vierhoeke</strong> (4-syige veelhoeke).',
            '✔ Albei is <strong>veelhoeke</strong> (geslote vorms met reguit sye).',
            '<strong style="color:#dc2626;">Verskille:</strong>',
            '✘ ʼn Vierkant het <strong>4 gelyke sye</strong>. ʼn Reghoek het <strong>2 pare gelyke sye</strong> (oorstaande sye is gelyk, maar aangrensende sye verskil).',
            '✘ ʼn Vierkant het <strong>gelyke lengte en breedte</strong>. ʼn Reghoek is <strong>langer as wat dit breed is</strong>.',
          ],
          answer:
            'Ooreenkomste: 4 sye, 4 hoekpunte, 4 regte hoeke, albei vierhoeke en veelhoeke.\nVerskille: ʼn Vierkant het 4 gelyke sye; ʼn reghoek het 2 pare gelyke sye. ʼn Vierkant het dieselfde lengte en breedte; ʼn reghoek is langer as wat dit breed is.',
        },
        {
          question: 'Vergelyk ʼn driehoek en ʼn seshoek.',
          steps: [
            '<strong style="color:#16a34a;">Ooreenkomste:</strong>',
            '✔ Albei is <strong>veelhoeke</strong> (geslote vorms met slegs reguit sye).',
            '✔ Albei het <strong>reguit sye</strong>.',
            '✔ Albei het <strong>hoekpunte</strong> (hoeke waar sye ontmoet).',
            '<strong style="color:#dc2626;">Verskille:</strong>',
            '✘ ʼn Driehoek het <strong>3 sye</strong>. ʼn Seshoek het <strong>6 sye</strong>.',
            '✘ ʼn Driehoek het <strong>3 hoekpunte</strong>. ʼn Seshoek het <strong>6 hoekpunte</strong>.',
            '✘ ʼn Driehoek het <strong>3 hoeke</strong>. ʼn Seshoek het <strong>6 hoeke</strong>.',
          ],
          answer:
            'Ooreenkomste: albei is veelhoeke met reguit sye en hoekpunte.\nVerskille: ʼn driehoek het 3 sye, 3 hoekpunte en 3 hoeke; ʼn seshoek het 6 sye, 6 hoekpunte en 6 hoeke.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — 2D-VORMS IN DIE OMGEWING
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-shapes-in-the-environment',
      title: '2D-vorms in die Omgewing',
      icon: '🌍',
      explanation: `
<p style="margin-bottom:14px;">2D-vorms is elke dag rondom ons! Sodra jy weet waarna om te soek, sal jy hulle oral begin raaksien — in jou klaskamer, by die huis en buite. Om vorms in die werklike lewe te leer herken, help jou om hul eienskappe nog beter te verstaan.</p>

<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:16px 20px;margin-bottom:16px;">
  <div style="font-size:13px;font-weight:700;color:#1e40af;text-transform:uppercase;letter-spacing:.05em;margin-bottom:12px;">Vorms rondom jou</div>
  <div style="display:flex;flex-direction:column;gap:10px;">
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Sirkel</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Wiele, munte, klokke, pizzas</strong> — almal rond sonder hoeke en sonder reguit sye.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Driehoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Dakvorms, waarskuwingsverkeersborde, pizzasnye</strong> — drie sye en drie hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Vierkant</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Teëls, vensters, skaakbordblokkies, plaknotas</strong> — vier gelyke sye en vier regte hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Reghoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Deure, boeke, skerms, bakstene</strong> — langer as wat hulle breed is, met vier regte hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Vyfhoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Die Pentagon-gebou in die VSA, sommige sokkerbal-lappies</strong> — vyf sye en vyf hoeke.</span>
    </div>
    <div style="display:flex;align-items:flex-start;gap:12px;">
      <span style="background:#dbeafe;color:#1e40af;border-radius:20px;padding:3px 14px;font-weight:700;font-size:13px;flex-shrink:0;min-width:90px;text-align:center;">Seshoek</span>
      <span style="color:#14532d;font-size:15px;padding-top:2px;"><strong style="color:#16a34a;">Heuningkoekselle, sommige neute en boute</strong> — ses gelyke sye wat sonder enige gapings inpas.</span>
    </div>
  </div>
</div>
`,
      workedExamples: [
        {
          question:
            'Kyk na ʼn klaskamerdeur. Watter 2D-vorm is dit en wat is sy eienskappe?',
          steps: [
            'Kyk na die deur en <strong style="color:#1e40af;">tel die sye</strong> — ʼn deur het 4 sye.',
            'Kyk of die sye <strong style="color:#1e40af;">gelyk</strong> is — die twee lang sye is dieselfde lengte en die twee kort sye is dieselfde lengte, maar die lang sye is langer as die kort sye.',
            'Kyk na die <strong style="color:#dc2626;">hoeke</strong> — elke hoek van ʼn deur is ʼn regte hoek (90°).',
            'Identifiseer die <strong style="color:#16a34a;">vorm</strong> — 4 sye met 2 pare gelyke sye en 4 regte hoeke beteken dit is ʼn <strong>reghoek</strong>.',
            'Let op die <strong>spesiale eienskap</strong> — die hoogte van die deur is groter as sy breedte.',
          ],
          answer:
            'ʼn Deur is ʼn reghoek. Dit het 4 sye met 2 pare gelyke sye (oorstaande sye is gelyk), 4 regte hoeke en 4 hoekpunte. Die hoogte is groter as die breedte.',
        },
      ],
      practiceQuestions: [],
      openQuestions: [],
      diagramPlaceholder:
        'Ses regte-lewe-voorwerpe elkeen gemerk met hul 2D-vorm — ʼn munt (sirkel), ʼn toegeeteken (driehoek), ʼn venster (vierkant), ʼn deur (reghoek), ʼn heuningkoek (seshoek)',
      videoPlaceholder:
        'Kort video wat 2D-vorms wys wat in alledaagse regte-lewe-omgewings gevind word',
    },
  ],

  topicPractice: [],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 — GRONDSLAE: VORMS NOEM, SYE EN HOEKPUNTE TEL (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1: Grondslae',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn driehoek?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], answer: '3', explanation: 'ʼn Driehoek het 3 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn driehoek?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], answer: '3', explanation: 'ʼn Driehoek het 3 hoekpunte — een by elke hoek waar twee sye ontmoet.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn vierkant?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], answer: '4', explanation: 'ʼn Vierkant het 4 sye, almal gelyk in lengte.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn reghoek?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], answer: '4', explanation: 'ʼn Reghoek het 4 sye, met 2 pare gelyke oorstaande sye.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn vyfhoek?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], answer: '5', explanation: 'ʼn Vyfhoek het 5 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn vyfhoek?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], answer: '5', explanation: 'ʼn Vyfhoek het 5 hoekpunte — een by elke hoek.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn seshoek?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], answer: '6', explanation: 'ʼn Seshoek het 6 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn seshoek?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], answer: '6', explanation: 'ʼn Seshoek het 6 hoekpunte — een by elke hoek.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn sewehoek?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'sewe'], answer: '7', explanation: 'ʼn Sewehoek het 7 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn agthoek?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], answer: '8', explanation: 'ʼn Agthoek het 8 reguit sye.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn agthoek?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], answer: '8', explanation: 'ʼn Agthoek het 8 hoekpunte — een by elke hoek.' },
        { difficulty: 'Easy', question: 'Hoeveel reguit sye het ʼn sirkel?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], answer: '0', explanation: 'ʼn Sirkel het 0 reguit sye — sy rand is een geboë lyn.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn sirkel?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], answer: '0', explanation: 'ʼn Sirkel het geen hoekpunte nie omdat dit geen reguit sye het wat by hoeke ontmoet nie.' },
        { difficulty: 'Easy', question: 'Ek het 3 sye en 3 hoeke. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'ʼn driehoek'], answer: 'Driehoek', explanation: 'ʼn Vorm met 3 sye en 3 hoeke is ʼn driehoek.' },
        { difficulty: 'Easy', question: 'Ek het 4 gelyke sye en 4 regte hoeke. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'], answer: 'Vierkant', explanation: 'ʼn Vorm met 4 gelyke sye en 4 regte hoeke is ʼn vierkant.' },
        { difficulty: 'Easy', question: 'Ek het 4 sye, 2 pare gelyke sye en 4 regte hoeke, maar ek is langer as wat ek breed is. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Vorm met 2 pare gelyke sye, 4 regte hoeke, en ongelyke lengte en breedte is ʼn reghoek.' },
        { difficulty: 'Easy', question: 'Ek het 5 reguit sye en 5 hoekpunte. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Vyfhoek', correctAnswers: ['Vyfhoek', 'vyfhoek', 'ʼn vyfhoek'], answer: 'Vyfhoek', explanation: 'ʼn Geslote vorm met 5 reguit sye is ʼn vyfhoek.' },
        { difficulty: 'Easy', question: 'Ek het 6 reguit sye en 6 hoekpunte. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Seshoek', correctAnswers: ['Seshoek', 'seshoek', 'ʼn seshoek'], answer: 'Seshoek', explanation: 'ʼn Geslote vorm met 6 reguit sye is ʼn seshoek.' },
        { difficulty: 'Easy', question: 'Ek het een geboë rand en geen reguit sye of hoeke nie. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Vorm met een geboë rand en geen reguit sye is ʼn sirkel.' },
        { difficulty: 'Medium', question: 'Wat noem ons ʼn geslote 2D-vorm wat heeltemal uit reguit sye bestaan?', checkMode: 'auto', correctAnswer: 'Veelhoek', correctAnswers: ['Veelhoek', 'veelhoek', 'ʼn veelhoek'], answer: 'Veelhoek', explanation: 'ʼn Geslote vorm wat slegs uit reguit sye bestaan, sonder gapings, word ʼn veelhoek genoem.' },
        { difficulty: 'Medium', question: 'Wat is ʼn ander naam vir ʼn 4-syige vorm?', checkMode: 'auto', correctAnswer: 'Vierhoek', correctAnswers: ['Vierhoek', 'vierhoek', 'ʼn vierhoek'], answer: 'Vierhoek', explanation: 'Enige vorm met 4 sye en 4 hoekpunte word ʼn vierhoek genoem.' },
        { difficulty: 'Medium', question: 'Hoeveel hoeke het ʼn vorm as dit 7 hoekpunte het?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'sewe'], answer: '7', explanation: 'Die aantal hoeke in ʼn veelhoek is altyd gelyk aan die aantal hoekpunte, so 7 hoekpunte beteken 7 hoeke.' },
        { difficulty: 'Medium', question: 'ʼn Vorm het 8 sye. Hoeveel hoekpunte het dit?', checkMode: 'auto', correctAnswer: '8', correctAnswers: ['8', 'agt'], answer: '8', explanation: 'In enige veelhoek is die aantal hoekpunte gelyk aan die aantal sye, so 8 sye beteken 8 hoekpunte.' },
        { difficulty: 'Medium', question: 'Wat is die grootte van ʼn regte hoek in grade?', checkMode: 'auto', correctAnswer: '90', correctAnswers: ['90', '90°', 'negentig'], answer: '90°', explanation: 'ʼn Regte hoek meet presies 90°.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het meer sye as ʼn seshoek maar minder sye as ʼn agthoek. Noem die vorm.', checkMode: 'auto', correctAnswer: 'Sewehoek', correctAnswers: ['Sewehoek', 'sewehoek', 'ʼn sewehoek'], answer: 'Sewehoek', explanation: 'ʼn Seshoek het 6 sye en ʼn agthoek het 8 sye. Die vorm met 7 sye, tussen hulle, is ʼn sewehoek.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy ken jou 2D-vorms, sye en hoekpunte deur en deur.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan die vorms wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug en hersien die aantal sye en hoekpunte vir elke vorm.' },
        { minScore: 0, message: 'Hou aan oefen! Lees weer deur die studiegids en leer elke vorm noukeurig.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 — LASTIGER EIENSKAPPE EN IDENTIFISERING VANAF LEIDRADE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2: Eienskappe en Leidrade',
      questions: [
        { difficulty: 'Easy', question: 'Ek het 4 sye wat almal gelyk in lengte is en 4 regte hoeke. Watter vorm is ek?', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'], answer: 'Vierkant', explanation: 'Gelyke sye en regte hoeke is die eienskappe van ʼn vierkant.' },
        { difficulty: 'Easy', question: 'Ek het 3 sye wat almal verskillende lengtes is. Watter tipe driehoek is ek?', checkMode: 'auto', correctAnswer: 'Skalene driehoek', correctAnswers: ['Skalene driehoek', 'skalene', 'ʼn skalene driehoek'], answer: 'Skalene driehoek', explanation: 'ʼn Driehoek met al 3 sye verskillende lengtes word ʼn skalene driehoek genoem.' },
        { difficulty: 'Easy', question: 'Ek het 3 gelyke sye en 3 gelyke hoeke. Watter tipe driehoek is ek?', checkMode: 'auto', correctAnswer: 'Gelyksydige driehoek', correctAnswers: ['Gelyksydige driehoek', 'gelyksydig', 'ʼn gelyksydige driehoek'], answer: 'Gelyksydige driehoek', explanation: 'ʼn Driehoek met al 3 sye en al 3 hoeke gelyk is ʼn gelyksydige driehoek.' },
        { difficulty: 'Easy', question: 'Ek het presies een regte hoek. Watter tipe driehoek is ek?', checkMode: 'auto', correctAnswer: 'Reghoekige driehoek', correctAnswers: ['Reghoekige driehoek', 'ʼn reghoekige driehoek'], answer: 'Reghoekige driehoek', explanation: 'ʼn Driehoek met presies een hoek van 90° word ʼn reghoekige driehoek genoem.' },
        { difficulty: 'Easy', question: 'Hoeveel regte hoeke het ʼn reghoek?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], answer: '4', explanation: 'ʼn Reghoek het 4 regte hoeke, een by elke hoek.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het al die sye gelyk, maar sy hoeke is nie regte hoeke nie. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Ruit', correctAnswers: ['Ruit', 'ruit', 'ʼn ruit'], answer: 'Ruit', explanation: 'ʼn Vierhoek met 4 gelyke sye maar hoeke wat nie noodwendig 90° is nie, is ʼn ruit.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het 2 pare parallelle sye en 2 pare gelyke sye, maar geen regte hoeke nie. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Parallelogram', correctAnswers: ['Parallelogram', 'parallelogram', 'ʼn parallelogram'], answer: 'Parallelogram', explanation: 'ʼn Vierhoek met 2 pare parallelle, gelyke sye (en geen regte hoeke nie) is ʼn parallelogram.' },
        { difficulty: 'Medium', question: 'ʼn Vierhoek het presies een paar parallelle sye. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Trapesium', correctAnswers: ['Trapesium', 'trapesium', 'ʼn trapesium'], answer: 'Trapesium', explanation: 'ʼn Vierhoek met slegs een paar parallelle sye word ʼn trapesium genoem.' },
        { difficulty: 'Medium', question: 'Watter vorm het al die sye gelyk EN al die hoeke gelyk aan 90°?', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'], answer: 'Vierkant', explanation: 'ʼn Vierkant het albei eienskappe: 4 gelyke sye en 4 regte hoeke (90° elk).' },
        { difficulty: 'Medium', question: 'Watter vorm het 2 pare gelyke sye en 4 regte hoeke, maar sy 4 sye is nie almal gelyk nie?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Reghoek het oorstaande sye gelyk en 4 regte hoeke, maar aangrensende sye kan verskil in lengte.' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn vierkant en ʼn ruit. Watter eienskap het BEIDE vorms altyd?', checkMode: 'auto', correctAnswer: '4 gelyke sye', correctAnswers: ['4 gelyke sye', 'al die sye gelyk', 'vier gelyke sye'], answer: '4 gelyke sye', explanation: 'Beide ʼn vierkant en ʼn ruit het altyd 4 gelyke sye. ʼn Vierkant moet ook regte hoeke hê, maar ʼn ruit hoef nie.' },
        { difficulty: 'Medium', question: 'ʼn Vorm het 5 gelyke sye en 5 gelyke hoeke. Is dit ʼn reëlmatige of onreëlmatige veelhoek?', checkMode: 'auto', correctAnswer: 'Reëlmatig', correctAnswers: ['Reëlmatig', 'reëlmatig', 'reëlmatige veelhoek'], answer: 'Reëlmatig', explanation: 'ʼn Veelhoek met al die sye en al die hoeke gelyk is ʼn reëlmatige veelhoek — in hierdie geval ʼn reëlmatige vyfhoek.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek het sye van verskillende lengtes. Is dit ʼn reëlmatige of onreëlmatige veelhoek?', checkMode: 'auto', correctAnswer: 'Onreëlmatig', correctAnswers: ['Onreëlmatig', 'onreëlmatig', 'onreëlmatige veelhoek'], answer: 'Onreëlmatig', explanation: 'Omdat nie al die sye van ʼn reghoek gelyk is nie, is dit ʼn onreëlmatige veelhoek.' },
        { difficulty: 'Medium', question: 'Watter twee vorms het albei presies 4 sye en 4 hoekpunte: ʼn vyfhoek en ʼn reghoek, of ʼn ruit en ʼn reghoek?', checkMode: 'auto', correctAnswer: 'ʼn Ruit en ʼn reghoek', correctAnswers: ['ʼn Ruit en ʼn reghoek', 'ruit en ʼn reghoek', 'ruit en reghoek'], answer: 'ʼn Ruit en ʼn reghoek', explanation: 'ʼn Ruit en ʼn reghoek is albei vierhoeke met 4 sye en 4 hoekpunte. ʼn Vyfhoek het 5 sye, dus pas dit nie.' },
        { difficulty: 'Medium', question: 'ʼn Driehoek het 2 gelyke sye en 2 gelyke hoeke. Watter tipe driehoek is dit?', checkMode: 'auto', correctAnswer: 'Gelykbenige driehoek', correctAnswers: ['Gelykbenige driehoek', 'gelykbenig', 'ʼn gelykbenige driehoek'], answer: 'Gelykbenige driehoek', explanation: 'ʼn Driehoek met presies 2 gelyke sye (en 2 gelyke hoeke) word ʼn gelykbenige driehoek genoem.' },
        { difficulty: 'Medium', question: 'Hoeveel simmetrielyne het ʼn vierkant?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], answer: '4', explanation: 'ʼn Vierkant het 4 simmetrielyne — 2 deur die middelpunte van oorstaande sye, en 2 deur oorstaande hoeke.' },
        { difficulty: 'Medium', question: 'Hoeveel simmetrielyne het ʼn reghoek?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], answer: '2', explanation: 'ʼn Reghoek het 2 simmetrielyne — een horisontaal en een vertikaal, elkeen deur die middelpunte van oorstaande sye.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het 4 sye. Twee sye is 6 cm en twee sye is 4 cm. Al die hoeke is regte hoeke. Is hierdie vorm reëlmatig of onreëlmatig?', checkMode: 'auto', correctAnswer: 'Onreëlmatig', correctAnswers: ['Onreëlmatig', 'onreëlmatig', 'onreëlmatige veelhoek'], answer: 'Onreëlmatig', explanation: 'Omdat die sye nie almal gelyk is nie (6 cm en 4 cm), is hierdie reghoek ʼn onreëlmatige veelhoek.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het 4 gelyke sye, maar sy hoeke is 60° en 120°, nie 90° nie. Wat is die naam van hierdie vorm?', checkMode: 'auto', correctAnswer: 'Ruit', correctAnswers: ['Ruit', 'ruit', 'ʼn ruit'], answer: 'Ruit', explanation: 'ʼn Vierhoek met 4 gelyke sye maar hoeke wat nie 90° is nie, is ʼn ruit, nie ʼn vierkant nie.' },
        { difficulty: 'Hard', question: 'Watter vorm hieronder is NIE ʼn veelhoek nie: seshoek, ruit, of sirkel?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Sirkel het ʼn geboë rand, nie reguit sye nie, dus kan dit nie ʼn veelhoek wees nie. ʼn Seshoek en ruit het albei slegs reguit sye.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het presies een paar parallelle sye en die ander twee sye is nie parallel nie. Wat is sy naam?', checkMode: 'auto', correctAnswer: 'Trapesium', correctAnswers: ['Trapesium', 'trapesium', 'ʼn trapesium'], answer: 'Trapesium', explanation: 'ʼn Trapesium word gedefinieer deur presies een paar parallelle sye te hê.' },
        { difficulty: 'Hard', question: 'Sipho sê alle vierkante is reghoeke. Is hy korrek? Skryf ja of nee.', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], answer: 'Ja', explanation: 'Ja — ʼn vierkant het 4 regte hoeke en 2 pare gelyke sye, wat aan elke eienskap van ʼn reghoek voldoen, plus al 4 sye gelyk.' },
        { difficulty: 'Hard', question: 'Amahle sê alle reghoeke is vierkante. Is sy korrek? Skryf ja of nee.', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], answer: 'Nee', explanation: 'Nee — ʼn reghoek het net 2 pare gelyke sye nodig, nie al 4 sye gelyk nie, dus is nie elke reghoek ʼn vierkant nie.' },
        { difficulty: 'Hard', question: 'ʼn Parallelogram en ʼn ruit het albei 2 pare parallelle sye. Watter ekstra eienskap moet ʼn ruit hê wat ʼn algemene parallelogram nie hoef te hê nie?', checkMode: 'auto', correctAnswer: 'Al 4 sye gelyk', correctAnswers: ['Al 4 sye gelyk', 'al die sye gelyk', '4 gelyke sye'], answer: 'Al 4 sye gelyk', explanation: 'ʼn Ruit is ʼn spesiale parallelogram waar al 4 sye gelyk in lengte is.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het 6 gelyke sye en 6 gelyke hoeke. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], answer: '6', explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne — een deur elke paar oorstaande hoekpunte of oorstaande sye.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy kan vorms met selfvertroue vanaf hul eienskappe identifiseer.' },
        { minScore: 19, message: 'Puik werk! ʼn Vinnige hersiening van die lastiger eienskappe sal dit volmaak maak.' },
        { minScore: 13, message: 'Goeie poging! Hersien die eienskappe van vierhoeke soos die ruit en trapesium.' },
        { minScore: 0, message: 'Hou aan! Lees weer noukeurig deur die eienskappe van elke vorm.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 — SORTEER, KLASSIFISEER EN VORMS IN DIE REGTE LEWE (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3: Sorteer en die Regte Lewe',
      questions: [
        { difficulty: 'Easy', question: 'Is ʼn sirkel ʼn veelhoek? Skryf ja of nee.', checkMode: 'auto', correctAnswer: 'Nee', correctAnswers: ['Nee', 'nee'], answer: 'Nee', explanation: 'ʼn Sirkel het ʼn geboë rand, nie reguit sye nie, dus is dit nie ʼn veelhoek nie.' },
        { difficulty: 'Easy', question: 'Is ʼn driehoek ʼn veelhoek? Skryf ja of nee.', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], answer: 'Ja', explanation: 'ʼn Driehoek is ʼn geslote vorm wat slegs uit reguit sye bestaan, dus is dit ʼn veelhoek.' },
        { difficulty: 'Easy', question: 'ʼn Munt is rond sonder reguit sye. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Munt het ʼn geboë rand en geen hoeke nie — dit is ʼn sirkel.' },
        { difficulty: 'Easy', question: 'ʼn Klaskamerdeur het 4 sye, 2 pare gelyke sye en 4 regte hoeke. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Deur met 2 pare gelyke sye en 4 regte hoeke het die vorm van ʼn reghoek.' },
        { difficulty: 'Easy', question: 'ʼn Toegee-padteken het 3 sye en 3 hoeke. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'ʼn driehoek'], answer: 'Driehoek', explanation: 'ʼn Padteken met 3 sye en 3 hoeke is ʼn driehoek.' },
        { difficulty: 'Easy', question: 'ʼn Skaakbord bestaan uit klein blokkies wat almal gelyke sye en 4 regte hoeke het. Watter 2D-vorm is elke blokkie?', checkMode: 'auto', correctAnswer: 'Vierkant', correctAnswers: ['Vierkant', 'vierkant', 'ʼn vierkant'], answer: 'Vierkant', explanation: 'Elke skaakbordblokkie het 4 gelyke sye en 4 regte hoeke — ʼn vierkant.' },
        { difficulty: 'Easy', question: 'ʼn Heuningkoeksel het 6 gelyke sye. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Seshoek', correctAnswers: ['Seshoek', 'seshoek', 'ʼn seshoek'], answer: 'Seshoek', explanation: 'Heuningkoekselle is 6-syige vorms — seshoeke.' },
        { difficulty: 'Easy', question: 'ʼn Wiel het geen reguit sye of hoeke nie. Watter 2D-vorm lyk dit soos?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Wiel is rond sonder reguit sye — dit het die vorm van ʼn sirkel.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie in veelhoeke en nie-veelhoeke: vierkant, sirkel, seshoek. Watter een is NIE ʼn veelhoek nie?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Vierkant en ʼn seshoek bestaan uit reguit sye, dus is hulle veelhoeke. ʼn Sirkel het ʼn geboë rand, dus is dit nie.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vierkant, reghoek, reghoekige driehoek, sirkel, gelyksydige driehoek. Watter vorms het ten minste een regte hoek?', checkMode: 'auto', correctAnswer: 'Vierkant, reghoek, reghoekige driehoek', correctAnswers: ['Vierkant, reghoek, reghoekige driehoek', 'vierkant, reghoekige driehoek, reghoek', 'reghoek, vierkant, reghoekige driehoek', 'reghoek, reghoekige driehoek, vierkant', 'reghoekige driehoek, vierkant, reghoek', 'reghoekige driehoek, reghoek, vierkant'], answer: 'Vierkant, reghoek, reghoekige driehoek', explanation: 'ʼn Vierkant en reghoek het albei 4 regte hoeke, en ʼn reghoekige driehoek het presies 1 regte hoek.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie vorms: vierkant, gelyksydige driehoek, reghoek, skalene driehoek. Watter vorms is reëlmatige veelhoeke?', checkMode: 'auto', correctAnswer: 'Vierkant, gelyksydige driehoek', correctAnswers: ['Vierkant, gelyksydige driehoek', 'gelyksydige driehoek, vierkant'], answer: 'Vierkant, gelyksydige driehoek', explanation: 'ʼn Vierkant en ʼn gelyksydige driehoek het albei al die sye en al die hoeke gelyk, wat hulle reëlmatige veelhoeke maak.' },
        { difficulty: 'Medium', question: 'ʼn Sokkerbal is bedek met lappies. Watter twee veelhoeke word gebruik om sy geboë oppervlak te bedek?', checkMode: 'auto', correctAnswer: 'Vyfhoeke en seshoeke', correctAnswers: ['Vyfhoeke en seshoeke', 'seshoeke en vyfhoeke', 'vyfhoek en seshoek', 'seshoek en vyfhoek'], answer: 'Vyfhoeke en seshoeke', explanation: 'Sokkerballe word tradisioneel bedek met vyfhoek- en seshoeklappies wat sonder gapings inpas.' },
        { difficulty: 'Medium', question: 'ʼn Dakvorm en ʼn pizzasny is albei voorbeelde van watter 2D-vorm?', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'ʼn driehoek'], answer: 'Driehoek', explanation: 'Beide ʼn dakvorm en ʼn pizzasny het 3 sye en 3 hoeke — ʼn driehoek.' },
        { difficulty: 'Medium', question: 'Sorteer hierdie in vorms met slegs reguit sye en vorms met geboë sye: driehoek, sirkel, seshoek, ovaal. Watter vorms het geboë sye?', checkMode: 'auto', correctAnswer: 'Sirkel, ovaal', correctAnswers: ['Sirkel, ovaal', 'ovaal, sirkel'], answer: 'Sirkel, ovaal', explanation: 'ʼn Sirkel en ʼn ovaal het albei geboë rande. ʼn Driehoek en seshoek het slegs reguit sye.' },
        { difficulty: 'Medium', question: 'Thabo sê ʼn venster het die vorm van ʼn vierhoek. Is ʼn vierkantige venster ook ʼn vierhoek? Skryf ja of nee.', checkMode: 'auto', correctAnswer: 'Ja', correctAnswers: ['Ja', 'ja'], answer: 'Ja', explanation: 'Ja — ʼn vierkant het 4 sye, dus is dit ʼn tipe vierhoek net soos ʼn reghoek.' },
        { difficulty: 'Medium', question: 'ʼn Stopteken het 8 gelyke sye. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Agthoek', correctAnswers: ['Agthoek', 'agthoek', 'ʼn agthoek'], answer: 'Agthoek', explanation: 'ʼn Stopteken het 8 sye, wat dit ʼn agthoek maak.' },
        { difficulty: 'Medium', question: 'ʼn Boek se voorblad het 2 pare gelyke sye en 4 regte hoeke, en dit is langer as wat dit breed is. Watter 2D-vorm is dit?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Boekomslag met hierdie eienskappe pas by ʼn reghoek.' },
        { difficulty: 'Medium', question: 'ʼn Sny waatlemoen (die geboë skil) laat ons dink aan deel van watter 2D-vorm?', checkMode: 'auto', correctAnswer: 'Sirkel', correctAnswers: ['Sirkel', 'sirkel', 'ʼn sirkel'], answer: 'Sirkel', explanation: 'ʼn Hele waatlemoen is rond soos ʼn sirkel (ʼn sfeer in 3D), dus wys ʼn sny deel van ʼn sirkel.' },
        { difficulty: 'Hard', question: 'Lerato sorteer vorms volgens aantal sye. Sy het ʼn vierkant en ʼn ruit in een groep. Wat het hierdie twee vorms in gemeen?', checkMode: 'self', answer: 'Beide ʼn vierkant en ʼn ruit het 4 sye en 4 hoekpunte, en albei het al 4 sye gelyk in lengte. Hulle is albei vierhoeke.' },
        { difficulty: 'Hard', question: 'Amahle kry ʼn stopteken, ʼn sokkerbal-lappie, en ʼn pizzaboks-deksel. Pas elke voorwerp by die vormfamilie waaraan dit behoort: veelhoek of nie-veelhoek.', checkMode: 'self', answer: 'ʼn Stopteken (agthoek), ʼn sokkerbal-lappie (vyfhoek of seshoek), en ʼn pizzaboks-deksel (vierkant of reghoek) is almal veelhoeke omdat elkeen slegs uit reguit sye bestaan.' },
        { difficulty: 'Hard', question: 'Sipho sê: "Enige vorm met 4 sye is ʼn vierkant." Verduidelik waarom dit verkeerd is, en gee een voorbeeld van ʼn 4-syige vorm wat nie ʼn vierkant is nie.', checkMode: 'self', answer: 'Sipho is verkeerd. ʼn Vorm met 4 sye word ʼn vierhoek genoem, maar nie elke vierhoek is ʼn vierkant nie. ʼn Reghoek het byvoorbeeld 4 sye en 4 regte hoeke, maar sy sye is nie almal gelyk nie, dus is dit nie ʼn vierkant nie.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn heuningkoek seshoeke gebruik eerder as sirkels om sy selle te bou.', checkMode: 'self', answer: 'Seshoeke het reguit sye wat perfek sonder gapings by mekaar inpas (hulle tesseleer), terwyl sirkels geboë is en gapings sou laat as hulle bymekaar gepak word. Seshoeke maak die doeltreffendste gebruik van spasie.' },
        { difficulty: 'Hard', question: 'Thabo kyk na ʼn venster met 4 gelyke sye en 4 regte hoeke, en ʼn deur met 2 pare gelyke sye en 4 regte hoeke. Noem elke vorm en verduidelik die verskil tussen hulle.', checkMode: 'self', answer: 'Die venster is ʼn vierkant omdat dit 4 gelyke sye en 4 regte hoeke het. Die deur is ʼn reghoek omdat dit 2 pare gelyke sye het (nie al 4 gelyk nie) en 4 regte hoeke. Die verskil is dat ʼn vierkant al die sye dieselfde lengte het, terwyl ʼn reghoek slegs oorstaande sye gelyk het.' },
        { difficulty: 'Hard', question: 'ʼn Vlieër-versiering het 2 pare aangrensende gelyke sye, maar die oorstaande sye is nie gelyk of parallel nie. Watter vierhoek word beskryf?', checkMode: 'auto', correctAnswer: 'Vlieër', correctAnswers: ['Vlieër', 'vlieër', 'ʼn vlieër'], answer: 'Vlieër', explanation: 'ʼn Vlieër is ʼn vierhoek met 2 pare gelyke aangrensende sye, anders as ʼn reghoek of ruit waar oorstaande sye gelyk is.' },
        { difficulty: 'Hard', question: 'Gee een regte-lewe-voorbeeld van ʼn seshoek en verduidelik hoe jy weet dit het 6 sye.', checkMode: 'self', answer: 'ʼn Heuningkoeksel is ʼn regte-lewe-voorbeeld van ʼn seshoek. Ek weet dit het 6 sye omdat ek elke reguit rand rondom die sel kan tel, en daar is 6 daarvan wat by 6 hoekpunte ontmoet.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy kan vorms met gemak sorteer, klassifiseer en in die regte lewe raaksien.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan die sorteervrae wat jy gemis het weer deur en jy sal dit bemeester.' },
        { minScore: 13, message: 'Goeie poging! Oefen om vorms volgens hul eienskappe te sorteer en soek vorms rondom jou.' },
        { minScore: 0, message: 'Hou aan oefen! Gaan terug deur die sorteer- en regte-lewe-afdelings van die studiegids.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 4 — MEERVOUDIGE STAPPE, GEKOMBINEERDE EN SELF-NAGESIENE REDENERING (25 Vrae)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 4: Gemeng en Redenering',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Vorm het 5 sye en 5 hoekpunte. Al die sye is gelyk en al die hoeke is gelyk. Wat is die naam van hierdie vorm?', checkMode: 'auto', correctAnswer: 'Vyfhoek', correctAnswers: ['Vyfhoek', 'vyfhoek', 'ʼn vyfhoek', 'reëlmatige vyfhoek'], answer: 'Vyfhoek', explanation: 'ʼn Geslote vorm met 5 gelyke sye en 5 gelyke hoeke is ʼn reëlmatige vyfhoek.' },
        { difficulty: 'Easy', question: 'ʼn Vorm het 4 sye. Twee sye is 5 cm lank en twee sye is 3 cm lank, en al die hoeke is regte hoeke. Wat is die naam van hierdie vorm?', checkMode: 'auto', correctAnswer: 'Reghoek', correctAnswers: ['Reghoek', 'reghoek', 'ʼn reghoek'], answer: 'Reghoek', explanation: 'ʼn Vorm met 2 pare gelyke sye en 4 regte hoeke is ʼn reghoek.' },
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn driehoek en ʼn vierkant altesaam?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', 'sewe'], answer: '7', explanation: 'ʼn Driehoek het 3 sye en ʼn vierkant het 4 sye. 3 + 4 = 7 sye altesaam.' },
        { difficulty: 'Easy', question: 'Hoeveel hoekpunte het ʼn vyfhoek en ʼn seshoek altesaam?', checkMode: 'auto', correctAnswer: '11', correctAnswers: ['11', 'elf'], answer: '11', explanation: 'ʼn Vyfhoek het 5 hoekpunte en ʼn seshoek het 6 hoekpunte. 5 + 6 = 11 hoekpunte altesaam.' },
        { difficulty: 'Medium', question: 'ʼn Vorm het 5 sye en 5 hoekpunte. Al die sye is gelyk en al die hoeke is gelyk. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], answer: '5', explanation: 'ʼn Reëlmatige vyfhoek het 5 simmetrielyne — een deur elke hoekpunt en die middelpunt van die oorstaande sy.' },
        { difficulty: 'Medium', question: 'ʼn Vorm het 4 sye. Twee sye is 5 cm lank en twee sye is 3 cm lank, en al die hoeke is regte hoeke. Is hierdie vorm reëlmatig of onreëlmatig?', checkMode: 'auto', correctAnswer: 'Onreëlmatig', correctAnswers: ['Onreëlmatig', 'onreëlmatig', 'onreëlmatige veelhoek'], answer: 'Onreëlmatig', explanation: 'Dit is onreëlmatig omdat nie al die sye gelyk is nie — twee sye is 5 cm en twee sye is 3 cm.' },
        { difficulty: 'Medium', question: 'ʼn Vorm het 4 sye. Twee sye is 5 cm lank en twee sye is 3 cm lank, en al die hoeke is regte hoeke. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], answer: '2', explanation: 'ʼn Reghoek het 2 simmetrielyne — een horisontaal en een vertikaal, deur die middelpunte van oorstaande sye.' },
        { difficulty: 'Medium', question: 'Vergelyk ʼn driehoek en ʼn seshoek. Hoeveel meer sye het ʼn seshoek as ʼn driehoek?', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], answer: '3', explanation: 'ʼn Seshoek het 6 sye en ʼn driehoek het 3 sye. 6 − 3 = 3 meer sye.' },
        { difficulty: 'Medium', question: 'ʼn Sokkerbal het lappies wat vyfhoeke en seshoeke is. Hoeveel meer sye het ʼn seshoeklappie as ʼn vyfhoeklappie?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], answer: '1', explanation: 'ʼn Seshoek het 6 sye en ʼn vyfhoek het 5 sye. 6 − 5 = 1 meer sy.' },
        { difficulty: 'Medium', question: 'ʼn Vorm het een sy meer as ʼn reghoek maar minder sye as ʼn seshoek. Noem die vorm.', checkMode: 'auto', correctAnswer: 'Vyfhoek', correctAnswers: ['Vyfhoek', 'vyfhoek', 'ʼn vyfhoek'], answer: 'Vyfhoek', explanation: 'ʼn Reghoek het 4 sye, dus is een meer 5 sye — ʼn vyfhoek, wat minder sye het as ʼn seshoek (6).' },
        { difficulty: 'Medium', question: 'Twee driehoeke word rand-aan-rand saamgevoeg om ʼn nuwe 4-syige vorm te vorm. Hoeveel sye het die nuwe vorm?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], answer: '4', explanation: 'Wanneer twee driehoeke langs een rand saamgevoeg word, verdwyn daardie gedeelde rand, wat ʼn nuwe 4-syige vorm (ʼn vierhoek) laat.' },
        { difficulty: 'Medium', question: 'ʼn Reghoek word in twee gesny langs ʼn diagonaal. Watter 2D-vorm is elke helfte?', checkMode: 'auto', correctAnswer: 'Driehoek', correctAnswers: ['Driehoek', 'driehoek', 'ʼn driehoek'], answer: 'Driehoek', explanation: 'Om ʼn reghoek langs sy diagonaal te sny, skep twee driehoeke, elkeen met 3 sye.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het 4 sye. Twee sye is 5 cm lank en twee sye is 3 cm lank, en al die hoeke is regte hoeke.\nVerduidelik wat hierdie vorm anders maak as ʼn vierkant.', checkMode: 'self', answer: 'ʼn Vierkant het al 4 sye gelyk in lengte. Hierdie vorm (ʼn reghoek) het 2 pare gelyke sye — die twee lang sye is gelyk en die twee kort sye is gelyk, maar die lang sye is langer as die kort sye.' },
        { difficulty: 'Hard', question: 'ʼn Sokkerbal het lappies wat vyfhoeke en seshoeke is.\nVerduidelik waarom hierdie twee vorms saam gebruik word, en watter eienskap hulle in staat stel om sonder gapings by mekaar te pas.', checkMode: 'self', answer: 'Vyfhoeke en seshoeke pas perfek by mekaar om die geboë oppervlak van ʼn sokkerbal te bedek sonder gapings en sonder oorvleueling. Die vorms tesseleer, wat beteken hulle kan rand-aan-rand by mekaar inpas sonder om enige gapings te laat.' },
        { difficulty: 'Hard', question: 'Lerato sê ʼn vierkant is net ʼn spesiale reghoek. Is sy reg? Verduidelik volledig deur die eienskappe van albei vorms te gebruik.', checkMode: 'self', answer: 'Ja, sy is reg. ʼn Reghoek het 4 sye, 4 regte hoeke en 2 pare gelyke sye. ʼn Vierkant het al hierdie selfde eienskappe, maar dit het ook al 4 sye gelyk in lengte. Dit beteken ʼn vierkant voldoen aan elke voorwaarde van ʼn reghoek, wat dit ʼn spesiale tipe reghoek maak.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn driehoek en ʼn vyfhoek. Skryf twee ooreenkomste en twee verskille.', checkMode: 'self', answer: 'Ooreenkomste: albei is veelhoeke (geslote vorms met slegs reguit sye); albei het hoekpunte waar hul sye ontmoet. Verskille: ʼn driehoek het 3 sye terwyl ʼn vyfhoek 5 sye het; ʼn driehoek het 3 hoekpunte terwyl ʼn vyfhoek 5 hoekpunte het.' },
        { difficulty: 'Hard', question: 'Verduidelik waarom ʼn ruit nie altyd ʼn vierkant genoem word nie, al het albei vorms 4 gelyke sye.', checkMode: 'self', answer: 'ʼn Ruit het 4 gelyke sye, maar sy hoeke hoef nie 90° te wees nie. ʼn Vierkant het ook 4 gelyke sye, maar dit moet ook 4 regte hoeke hê. Aangesien ʼn ruit hoeke kan hê wat nie 90° is nie, is dit nie altyd ʼn vierkant nie — ʼn vierkant is net ʼn spesiale tipe ruit.' },
        { difficulty: 'Hard', question: 'ʼn Vorm word beskryf as een met 4 sye, oorstaande sye parallel en gelyk, maar geen regte hoeke nie. Noem die vorm en verduidelik jou redenasie.', checkMode: 'self', answer: 'Die vorm is ʼn parallelogram. Dit het 2 pare parallelle, gelyke sye soos ʼn reghoek, maar omdat dit geen regte hoeke het nie, kan dit nie ʼn reghoek of vierkant wees nie — dit moet ʼn parallelogram wees (of ʼn ruit as al 4 sye ook gelyk is).' },
        { difficulty: 'Hard', question: 'Sipho teken ʼn vorm met 4 sye waarvan slegs een paar parallel is. Watter vorm het hy geteken, en hoe verskil dit van ʼn parallelogram?', checkMode: 'self', answer: 'Sipho het ʼn trapesium geteken. Dit verskil van ʼn parallelogram omdat ʼn parallelogram 2 pare parallelle sye het, terwyl ʼn trapesium slegs 1 paar parallelle sye het.' },
        { difficulty: 'Hard', question: 'ʼn Vyfhoek en ʼn sewehoek word vergelyk. Watter een het meer sye, en met hoeveel?', checkMode: 'auto', correctAnswer: 'Sewehoek met 2', correctAnswers: ['Sewehoek met 2', 'sewehoek, met 2', 'die sewehoek het 2 meer', 'die sewehoek met 2'], answer: 'Sewehoek met 2', explanation: 'ʼn Vyfhoek het 5 sye en ʼn sewehoek het 7 sye. 7 − 5 = 2, dus het die sewehoek 2 meer sye.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het dieselfde aantal sye as die aantal hoekpunte in ʼn agthoek. Noem die vorm.', checkMode: 'auto', correctAnswer: 'Agthoek', correctAnswers: ['Agthoek', 'agthoek', 'ʼn agthoek'], answer: 'Agthoek', explanation: 'ʼn Agthoek het 8 hoekpunte, dus is ʼn vorm met 8 sye ook ʼn agthoek.' },
        { difficulty: 'Hard', question: 'Amahle bou ʼn patroon met slegs vierkante en gelyksydige driehoeke, rand-aan-rand sonder gapings. Verduidelik waarom hierdie kombinasie werk.', checkMode: 'self', answer: 'Vierkante en gelyksydige driehoeke het albei reguit sye van gelyke lengte, dus pas hul rande perfek by mekaar wanneer hulle langs mekaar geplaas word. Dit stel hulle in staat om te tesseleer — sonder gapings en sonder oorvleueling by mekaar te pas — en ʼn netjiese herhalende patroon te skep.' },
        { difficulty: 'Hard', question: 'Verduidelik, met behulp van eienskappe, waarom ʼn sirkel nie as ʼn veelhoek geklassifiseer kan word nie.', checkMode: 'self', answer: 'ʼn Veelhoek moet ʼn geslote vorm wees wat heeltemal uit reguit sye bestaan wat by hoekpunte ontmoet. ʼn Sirkel het een deurlopende geboë rand met geen reguit sye en geen hoekpunte nie, dus voldoen dit nie aan die definisie van ʼn veelhoek nie.' },
        { difficulty: 'Hard', question: 'ʼn Vorm het 4 sye, almal gelyk in lengte, en sy diagonale kruis by regte hoeke, maar sy eie hoeke is 70° en 110°. Noem hierdie vorm.', checkMode: 'auto', correctAnswer: 'Ruit', correctAnswers: ['Ruit', 'ruit', 'ʼn ruit'], answer: 'Ruit', explanation: 'ʼn Vierhoek met al 4 sye gelyk maar hoeke wat nie 90° is nie, is ʼn ruit.' },
        { difficulty: 'Hard', question: 'Thabo sê: "Alle vierhoeke is parallelogramme." Gee een voorbeeld van ʼn vierhoek wat bewys dat hy verkeerd is, en verduidelik waarom.', checkMode: 'self', answer: 'ʼn Trapesium bewys dat Thabo verkeerd is. ʼn Trapesium is ʼn vierhoek (dit het 4 sye), maar dit het slegs een paar parallelle sye, terwyl ʼn parallelogram 2 pare parallelle sye nodig het. Dus is nie elke vierhoek ʼn parallelogram nie.' },
      ],
      scoreMessages: [
        { minScore: 25, message: 'Volpunte! Jy het 2D-vorms oor elke onderwerp heen ten volle bemeester.' },
        { minScore: 19, message: 'Uitstekende werk! Gaan die meervoudige-stap-vrae wat jy verkeerd gehad het weer deur en jy sal dit bemeester.' },
        { minScore: 13, message: 'Goeie poging! Gaan terug en lees deur die afdelings wat jy lastig gevind het.' },
        { minScore: 0, message: 'Hou aan! Lees weer noukeurig deur die hele studiegids en probeer dan weer.' },
      ],
    },
  ],
}
