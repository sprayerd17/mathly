import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (2D shapes roles) ────────────────────────────────────────
// shape names       → blue   (#2563eb)
// number of sides   → orange (#ea580c)
// number of corners → green  (#16a34a)
// different sides   → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: '2D-vorms',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS 2D-VORMS?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '2d-shapes-introduction',
      title: 'Wat is 2D-vorms?',
      icon: '⬜',
      explanation:
        `<p style="margin-bottom:16px;">2D-vorms is <strong>plat vorms</strong> met slegs lengte en breedte — geen dikte nie. 2D staan vir <strong>twee-dimensioneel</strong>. Elke 2D-vorm het ${or('sye')} en ${gr('hoeke')} (ook genoem hoekpunte). Ons beskryf 2D-vorms deur hul ${or('sye')} en ${gr('hoeke')} te tel en te kyk of hul ${or('sye')} reguit of geboë is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormname')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('aantal sye')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aantal hoeke')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">2D-vorm</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Plat vorm met slegs lengte en breedte — geen dikte nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Sy</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Reguit of geboë lyn wat die rand van ʼn vorm vorm.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Hoek (Hoekpunt)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die punt waar twee sye van ʼn vorm ontmoet.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Regte hoek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">ʼn Vierkantige hoek wat presies 90 grade meet.</p>` +
        `</div>` +

        `</div>` +

        // ── Common 2D shapes ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Algemene 2D-vorms</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Vierkant')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 gelyke sye')} · ${gr('4 hoeke')} · almal regte hoeke</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Reghoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('4 sye')} · ${gr('4 hoeke')} · oorstaande sye gelyk</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('3 sye')} · ${gr('3 hoeke')}</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;text-align:center;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Sirkel')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('1 geboë sy')} · ${gr('0 hoeke')}</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om enige 2D-vorm te beskryf</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel altyd eers die ${or('sye')}, dan die ${gr('hoeke')}. Kyk of die ${or('sye')} reguit of geboë is, en of enige hoeke regte hoeke is. Hierdie drie waarnemings beskryf enige 2D-vorm volledig.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Beskryf ʼn reghoek.',
          answer: `ʼn ${bl('Reghoek')} is ʼn 2D-vorm met ${or('4 sye')} en ${gr('4 hoeke')} (regte hoeke)`,
          steps: [
            `Tel die ${or('sye')} — ʼn ${bl('reghoek')} het ${or('4 sye')}.`,
            `Tel die ${gr('hoeke')} — ʼn ${bl('reghoek')} het ${gr('4 hoeke')}.`,
            `Kyk na die ${or('sye')} — oorstaande ${or('sye')} is gelyk in lengte.`,
            `Al die ${gr('hoeke')} is regte hoeke (90 grade).`,
            `ʼn ${bl('Reghoek')} is ʼn 2D-vorm met ${or('4 sye')} en ${gr('4 hoeke')} — almal regte hoeke. ✓`,
          ],
        },
        {
          question: 'Wat is die verskil tussen ʼn vierkant en ʼn reghoek?',
          answer: `ʼn ${bl('Vierkant')} het ${or('4 gelyke sye')}; ʼn ${bl('reghoek')} het ${or('4 sye')} waar slegs oorstaande sye gelyk is`,
          steps: [
            `ʼn ${bl('Vierkant')} het ${or('4 gelyke sye')} en ${gr('4 regte hoeke')}.`,
            `ʼn ${bl('Reghoek')} het ${or('4 sye')} maar slegs oorstaande ${or('sye')} is gelyk.`,
            `Al die hoeke in beide ʼn ${bl('vierkant')} en ʼn ${bl('reghoek')} is regte hoeke (${gr('4 hoeke')} van 90 grade elk).`,
            `Die verskil is dat ʼn ${bl('vierkant')} al ${or('4 sye')} gelyk het, terwyl ʼn ${bl('reghoek')} dit nie het nie. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat algemene 2D-vorms wys — vierkant, reghoek, driehoek en sirkel — elkeen geëtiketteer met die aantal sye in oranje en hoekpunte in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat 2D-vorms bekendstel en wys hoe om sye en hoekpunte te identifiseer en algemene vorms soos vierkante, reghoeke, driehoeke en sirkels te beskryf" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — DRIEHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'triangles',
      title: 'Driehoeke',
      icon: '△',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Driehoek')} is ʼn 2D-vorm met ${or('3 sye')} en ${gr('3 hoeke')}. Driehoeke word benoem en gesorteer volgens die lengtes van hul ${or('sye')}. Daar is drie tipes driehoeke.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('driehoektipes')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelyke sye')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('verskillende sye')}</span>` +
        `</div>` +

        // ── Three types ──────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die drie tipes driehoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Gelyksydige driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('3 gelyke sye')} en ${gr('3 gelyke hoeke')} van 60° elk.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Gelykbenige driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('2 gelyke sye')} en ${gr('2 gelyke hoeke')}. Die derde sy is ${re('verskillend')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Skalene driehoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('Geen gelyke sye')} en ${re('geen gelyke hoeke')} nie — al drie sye is ${re('verskillend')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn driehoektipe te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel die ${gr('gelyke sye')}. As al ${or('3 sye')} gelyk is → ${bl('gelyksydig')}. As ${gr('2 sye')} gelyk is → ${bl('gelykbenig')}. As ${re('geen sye')} gelyk is nie → ${bl('skaleen')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho teken ʼn driehoek met sye van 5 cm, 5 cm en 3 cm. Watter tipe driehoek is dit?',
          answer: `Dit is ʼn ${bl('gelykbenige driehoek')}`,
          steps: [
            `Tel die ${gr('gelyke sye')} — twee sye is ${gr('5 cm')} en een sy is ${re('3 cm')}.`,
            `Twee sye is gelyk, dus is dit ʼn ${bl('gelykbenige driehoek')}.`,
            `Dit het ook ${gr('twee gelyke hoeke')} by die basis.`,
          ],
        },
        {
          question: 'ʼn Driehoek het al drie sye wat 4 cm meet. Watter tipe is dit en hoeveel simmetrielyne het dit?',
          answer: `Dit is ʼn ${bl('gelyksydige driehoek')} met ${gr('3 simmetrielyne')}`,
          steps: [
            `Al drie sye is ${gr('gelyk')} (${gr('4 cm')}, ${gr('4 cm')}, ${gr('4 cm')}), dus is dit ʼn ${bl('gelyksydige driehoek')}.`,
            `ʼn ${bl('Gelyksydige driehoek')} het ${gr('3 simmetrielyne')} — een van elke hoek na die middel van die oorstaande sy.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat die drie soorte driehoeke wys — gelyksydig met 3 gelyke sye in groen, gelykbenig met 2 gelyke sye in groen en 1 ander sy in rooi, ongelyksydig met al die sye in rooi — elkeen geëtiketteer met sylengtes" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die drie soorte driehoeke verduidelik — gelyksydig, gelykbenig en ongelyksydig — en hoe om elkeen te identifiseer deur gelyke sye te tel" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — VIERHOEKE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'quadrilaterals',
      title: 'Vierhoeke',
      icon: '▭',
      explanation:
        `<p style="margin-bottom:16px;">ʼn <strong>vierhoek</strong> is enige 2D-vorm met ${or('4 sye')} en ${or('4 hoeke')}. Daar is verskeie tipes vierhoeke, elkeen met sy eie spesiale eienskappe.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormname')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('regte hoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('gelyke sye')}</span>` +
        `</div>` +

        // ── Types of quadrilaterals ──────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Tipes vierhoeke</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Vierkant')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('4 gelyke sye')} en ${or('4 regte hoeke')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Reghoek')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oorstaande ${gr('sye gelyk')} en ${or('4 regte hoeke')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Ruit')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('4 gelyke sye')} maar geen ${or('regte hoeke')} nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Parallelogram')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Oorstaande ${gr('sye gelyk')} en parallel — geen ${or('regte hoeke')} nie.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">${bl('Trapesium')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Slegs een paar parallelle sye.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Hoe om ʼn vierhoek te identifiseer</p>` +
        `<p style="margin:0;color:#1e3a8a;">Tel eers die sye — as daar ${or('4 sye')} en ${or('4 hoeke')} is, is dit ʼn vierhoek. Kyk dan of die sye ${gr('gelyk')} is en of die hoeke ${or('regte hoeke')} is om die spesifieke tipe te bepaal.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Hoe verskil ʼn ruit van ʼn vierkant?',
          answer: `ʼn ${bl('Ruit')} het ${gr('4 gelyke sye')} maar geen ${or('regte hoeke')} nie; ʼn ${bl('vierkant')} het ${gr('4 gelyke sye')} ÉN ${or('4 regte hoeke')}`,
          steps: [
            `ʼn ${bl('Ruit')} het ${gr('4 gelyke sye')} net soos ʼn ${bl('vierkant')}.`,
            `Maar ʼn ${bl('ruit')} het nie ${or('regte hoeke')} nie — sy hoeke is nie ${or('90 grade')} nie.`,
            `ʼn ${bl('Vierkant')} het ${gr('4 gelyke sye')} ÉN ${or('4 regte hoeke')}.`,
            `Dus is ʼn ${bl('vierkant')} ʼn spesiale tipe ${bl('ruit')}.`,
          ],
        },
        {
          question: 'Lerato sê alle vierkante is reghoeke maar nie alle reghoeke is vierkante nie. Is sy korrek?',
          answer: `Ja — ʼn ${bl('vierkant')} voldoen aan al die vereistes van ʼn ${bl('reghoek')}, maar ʼn ${bl('reghoek')} hoef nie ${gr('al 4 sye gelyk')} te hê nie`,
          steps: [
            `ʼn ${bl('Reghoek')} het ${or('4 sye')} en ${or('4 regte hoeke')} nodig met oorstaande ${gr('sye gelyk')}.`,
            `ʼn ${bl('Vierkant')} het al hierdie plus al ${gr('4 sye gelyk')}.`,
            `Dus ja — ʼn ${bl('vierkant')} voldoen aan al die vereistes van ʼn ${bl('reghoek')}.`,
            `Maar ʼn ${bl('reghoek')} hoef nie al ${gr('4 sye gelyk')} te hê nie, dus is dit nie altyd ʼn ${bl('vierkant')} nie.`,
            `Lerato is korrek. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat vyf soorte vierhoeke wys — vierkant, reghoek, ruit, parallelogram en trapesium — met gelyke sye gemerk in groen en regte hoeke gemerk in oranje" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die vyf soorte vierhoeke verduidelik en hoe om elkeen te identifiseer deur gelyke sye en regte hoeke te kyk" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — SIRKELS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'circles',
      title: 'Sirkels',
      icon: '○',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Sirkel')} is ʼn perfek ronde 2D-vorm met geen reguit sye en geen hoeke nie. Elke punt op die rand van ʼn ${bl('sirkel')} is dieselfde afstand van die ${or('middelpunt')}. Die ${bl('radius')} is die afstand van die ${or('middelpunt')} na die rand. Die ${re('deursnee')} is die afstand oor die ${bl('sirkel')} deur die ${or('middelpunt')} — dit is altyd dubbel die ${bl('radius')}. Die ${gr('omtrek')} is die afstand heeltemal om die buitekant van die ${bl('sirkel')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('radius')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('deursnee')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('omtrek')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('middelpunt')}</span>` +
        `</div>` +

        // ── Key terms ────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Sleutelterme</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Middelpunt</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die middelste punt van ʼn sirkel — elke punt op die rand is dieselfde afstand van die ${or('middelpunt')}.</p>` +
        `</div>` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Radius</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die afstand van die ${or('middelpunt')} na enige punt op die rand. Die ${bl('radius')} is altyd die helfte van die ${re('deursnee')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Deursnee</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die afstand oor die sirkel deur die ${or('middelpunt')}. Die ${re('deursnee')} is altyd dubbel die ${bl('radius')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Omtrek</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Die afstand heeltemal om die buitekant van die sirkel — die omtrek van ʼn sirkel.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Verwantskap tussen radius en deursnee</p>` +
        `<p style="margin:0;color:#1e3a8a;">${re('Deursnee')} = ${bl('radius')} × 2 &nbsp;·&nbsp; ${bl('Radius')} = ${re('deursnee')} ÷ 2. Hierdie twee feite is al wat jy nodig het — as jy een ken, ken jy altyd die ander.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Sirkel het ʼn radius van 5 cm. Wat is sy deursnee?',
          answer: `Die ${re('deursnee')} is ${re('10 cm')}`,
          steps: [
            `Die ${re('deursnee')} is altyd dubbel die ${bl('radius')}.`,
            `${re('Deursnee')} = ${bl('radius')} × 2`,
            `${re('Deursnee')} = ${bl('5')} × 2 = ${re('10 cm')} ✓`,
          ],
        },
        {
          question: 'Amahle meet die deursnee van ʼn sirkel as 12 cm. Wat is die radius?',
          answer: `Die ${bl('radius')} is ${bl('6 cm')}`,
          steps: [
            `Die ${bl('radius')} is altyd die helfte van die ${re('deursnee')}.`,
            `${bl('Radius')} = ${re('deursnee')} ÷ 2`,
            `${bl('Radius')} = ${re('12')} ÷ 2 = ${bl('6 cm')} ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram van ʼn sirkel met die middelpunt gemerk in oranje, die radius geëtiketteer in blou, die deursnee geëtiketteer in rooi en die omtrek geëtiketteer in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat sirkels bekendstel en die middelpunt, radius, deursnee en omtrek verduidelik met voorbeelde van hoe om die deursnee vanaf die radius te bereken en andersom" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — 2D-VORMS SORTEER EN VERGELYK
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'sorting-comparing-2d-shapes',
      title: '2D-vorms Sorteer en Vergelyk',
      icon: '⬡',
      explanation:
        `<p style="margin-bottom:16px;">Ons kan ${bl('2D-vorms')} sorteer deur na hul eienskappe te kyk — die ${gr('aantal sye')}, of sye gelyk is, of hoeke ${or('regte hoeke')} is, en of die vorm enige simmetrielyne het. Wanneer jy vorms vergelyk, kyk altyd na meer as een eienskap. Twee vorms kan in sommige opsigte eenders wees maar in ander verskil.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('vormname')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('regte hoeke')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('aantal sye')}</span>` +
        `</div>` +

        // ── Sorting properties ───────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Eienskappe wat gebruik word om vorms te sorteer</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">${gr('Aantal sye')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Tel die sye. Vorms met dieselfde ${gr('aantal sye')} gaan in dieselfde groep.</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Gelyke sye</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kyk of al die sye gelyk is, sommige sye gelyk is, of geen sye gelyk is nie.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">${or('Regte hoeke')}</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kyk of die vorm enige ${or('regte hoeke')} het (vierkantige hoeke van 90°).</p>` +
        `</div>` +

        `<div style="background:#f8fafc;border:1.5px solid #e2e8f0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#374151;margin-bottom:4px;">Simmetrielyne</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Kyk of die vorm in helftes gevou kan word sodat albei helftes presies pas.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Gebruik altyd meer as een eienskap</p>` +
        `<p style="margin:0;color:#1e3a8a;">Moet nooit net volgens een eienskap sorteer nie. ʼn ${bl('Vierkant')} en ʼn ${bl('ruit')} het albei ${gr('4 sye')} — maar slegs die ${bl('vierkant')} het ${or('regte hoeke')}. Om na meer as een eienskap te kyk, gee ʼn meer volledige vergelyking.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sorteer hierdie vorms in twee groepe — driehoek, vierkant, reghoek, ruit, vyfhoek.',
          answer: `${gr('Groep 1 (4 sye):')} ${bl('vierkant')}, ${bl('reghoek')}, ${bl('ruit')} · ${gr('Groep 2 (ander sye):')} ${bl('driehoek')} (${gr('3 sye')}), ${bl('vyfhoek')} (${gr('5 sye')})`,
          steps: [
            `Kyk na die ${gr('aantal sye')} vir elke vorm: ${bl('driehoek')} → ${gr('3 sye')}, ${bl('vierkant')} → ${gr('4 sye')}, ${bl('reghoek')} → ${gr('4 sye')}, ${bl('ruit')} → ${gr('4 sye')}, ${bl('vyfhoek')} → ${gr('5 sye')}.`,
            `<strong>Groep 1 — vorms met ${gr('4 sye')}:</strong> ${bl('vierkant')}, ${bl('reghoek')}, ${bl('ruit')}.`,
            `<strong>Groep 2 — vorms met ander ${gr('aantal sye')}:</strong> ${bl('driehoek')} het ${gr('3 sye')}, ${bl('vyfhoek')} het ${gr('5 sye')}.`,
            `Ons het volgens ${gr('aantal sye')} gesorteer. ✓`,
          ],
        },
        {
          question: 'Thabo wil al die vorms met ten minste een regte hoek uit hierdie lys vind — vierkant, ruit, reghoek, gelyksydige driehoek, trapesium.',
          answer: `Vorms met ${or('regte hoeke')}: ${bl('vierkant')} en ${bl('reghoek')}`,
          steps: [
            `${bl('Vierkant')} — ja, ${or('4 regte hoeke')} ✓`,
            `${bl('Ruit')} — geen ${or('regte hoeke')} nie — sy hoeke is nie 90° nie.`,
            `${bl('Reghoek')} — ja, ${or('4 regte hoeke')} ✓`,
            `${bl('Gelyksydige driehoek')} — geen ${or('regte hoeke')} nie — al die hoeke is 60°.`,
            `${bl('Trapesium')} — soms, hang af van die tipe — ʼn regte trapesium het ${or('regte hoeke')} maar die meeste nie.`,
            `<strong>Vorms met ten minste een ${or('regte hoek')}:</strong> ${bl('vierkant')} en ${bl('reghoek')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram wat vyf 2D-vorms wys — driehoek, vierkant, reghoek, ruit en vyfhoek — gesorteer in groepe volgens die aantal sye, met regte hoeke gemerk in oranje en syaantalle in groen" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om 2D-vorms volgens hul eienskappe te sorteer en te vergelyk — aantal sye, regte hoeke, gelyke sye en simmetrielyne" />',
    },
  ],
  topicPractice: [
    // ── V1 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel sye het ʼn driehoek?',
      answer: '3',
      checkMode: 'auto',
      correctAnswer: '3',
    },

    // ── V2 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Noem die 2D-vorm met 4 gelyke sye en 4 regte hoeke.',
      answer: 'vierkant',
      checkMode: 'auto',
      correctAnswer: 'vierkant',
    },

    // ── V3 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Wat is die verskil tussen ʼn 2D-vorm en ʼn 3D-voorwerp?',
      answer: 'ʼn 2D-vorm is plat en het slegs lengte en breedte. ʼn 3D-voorwerp het lengte, breedte en hoogte en neem plek in.',
      checkMode: 'self',
    },

    // ── V4 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Watter tipe driehoek het 3 gelyke sye?',
      answer: 'gelyksydige driehoek',
      checkMode: 'auto',
      correctAnswer: 'gelyksydige driehoek',
    },

    // ── V5 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Driehoek het sye van 3cm, 4cm en 5cm. Watter tipe driehoek is dit?',
      answer: 'skalene driehoek',
      checkMode: 'auto',
      correctAnswer: 'skalene driehoek',
    },

    // ── V6 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho sê ʼn gelykbenige driehoek het altyd ʼn simmetrielyn. Is hy korrek? Verduidelik.',
      answer: 'Ja — ʼn gelykbenige driehoek het 2 gelyke sye en 1 simmetrielyn wat van die boonste hoek na die middel van die basis loop.',
      checkMode: 'self',
    },

    // ── V7 Maklik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel sye het ʼn vierhoek?',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
    },

    // ── V8 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Wat is die verskil tussen ʼn vierkant en ʼn ruit?',
      answer: 'Albei het 4 gelyke sye maar ʼn vierkant het 4 regte hoeke en ʼn ruit nie.',
      checkMode: 'self',
    },

    // ── V9 Moeilik ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato sê alle vierkante is ruite maar nie alle ruite is vierkante nie. Is sy korrek? Verduidelik.',
      answer: 'Ja — ʼn ruit het 4 gelyke sye en so ook ʼn vierkant, maar ʼn vierkant het ook regte hoeke wat ʼn ruit nie altyd het nie.',
      checkMode: 'self',
    },

    // ── V10 Maklik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Wat word die afstand van die middelpunt van ʼn sirkel na sy rand genoem?',
      answer: 'radius',
      checkMode: 'auto',
      correctAnswer: 'radius',
    },

    // ── V11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'ʼn Sirkel het ʼn deursnee van 16cm. Wat is die radius?',
      answer: '8cm',
      checkMode: 'auto',
      correctAnswer: '8cm',
    },

    // ── V12 Moeilik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle sê die deursnee van ʼn sirkel is altyd dubbel die radius. Is sy korrek? Gee ʼn voorbeeld.',
      answer: 'Ja — as die radius 5cm is, is die deursnee 10cm. Deursnee = radius x 2 altyd.',
      checkMode: 'self',
    },

    // ── V13 Maklik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Hoeveel regte hoeke het ʼn reghoek?',
      answer: '4',
      checkMode: 'auto',
      correctAnswer: '4',
    },

    // ── V14 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Sorteer hierdie vorms volgens aantal sye van min na meer — vyfhoek, driehoek, vierkant, seshoek.',
      answer: 'driehoek, vierkant, vyfhoek, seshoek',
      checkMode: 'auto',
      correctAnswer: 'driehoek, vierkant, vyfhoek, seshoek',
    },

    // ── V15 Moeilik ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Noem twee maniere waarop ʼn vierkant en ʼn reghoek dieselfde is en een manier waarop hulle verskil.',
      answer: 'Eenders — albei het 4 sye en 4 regte hoeke. Verskillend — ʼn vierkant het al 4 sye gelyk maar ʼn reghoek het slegs oorstaande sye gelyk.',
      checkMode: 'self',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Uitstekend! Jy het 2D-vorms bemeester.' },
      { minPercent: 75, message: 'Goeie werk! Jy het ʼn sterk begrip van 2D-vorms.' },
      { minPercent: 50, message: 'Goeie poging! Gaan die afdelings waar jy punte verloor het weer deur en probeer weer.' },
      { minPercent: 0, message: 'Hou aan probeer! Werk weer deur die studiegids en probeer nog ʼn keer.' },
    ],
  },
  scoreMessages: [
    { minScore: 9, message: 'Uitstekend! ʼn Volpunt-telling — jy het 2D-vorms vir Graad 5 heeltemal bemeester. Hou so aan!' },
    { minScore: 7, message: 'Uitstekende werk! Jy het ʼn baie sterk begrip van 2D-vorms. Gaan enige gemiste dele weer deur en jy sal dit perfek hê.' },
    { minScore: 5, message: 'Goed gedaan! Jy verstaan die meeste van die inhoud. Gaan terug na die afdelings waar jy punte verloor het en probeer weer.' },
    { minScore: 3, message: 'Goeie poging! Werk weer deur die studiegids en uitgewerkte voorbeelde vir elke afdeling, en probeer dan weer.' },
    { minScore: 0, message: 'Moenie moed opgee nie — elke kenner was eers ʼn beginner! Gaan weer deur die verduidelikings en uitgewerkte voorbeelde afdeling vir afdeling, en probeer dan weer.' },
  ],
  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // STEL 1 (20 vrae)
    // Blokke: 0-3 Vorms identifiseer volgens sye/hoeke | 4-7 Driehoeke
    // klassifiseer volgens sylengte | 8-11 Vierhoeke klassifiseer/vergelyk |
    // 12-15 Sirkeldele en radius/deursnee | 16-19 Sorteer, veelvuldige
    // eienskappe, foutopsporing (afsluiting)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn vierkant?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Vierkant is ʼn 2D-vorm met 4 reguit sye, almal ewe lank.' },
        { difficulty: 'Easy', question: 'Hoeveel hoeke het ʼn driehoek?', answer: '3', checkMode: 'auto', correctAnswer: '3', correctAnswers: ['3', 'drie'], explanation: 'ʼn Driehoek het 3 reguit sye en 3 hoeke (hoekpunte), een waar elke paar sye ontmoet.' },
        { difficulty: 'Easy', question: 'Noem die 2D-vorm met een geboë sy en geen hoeke nie.', answer: 'sirkel', checkMode: 'auto', correctAnswer: 'sirkel', correctAnswers: ['sirkel', 'ʼn sirkel'], explanation: 'ʼn Sirkel is perfek rond. Sy rand is een deurlopende geboë lyn met geen reguit dele nie, dus het dit geen hoeke nie.' },
        { difficulty: 'Easy', question: 'ʼn Vorm het 6 reguit sye en 6 hoeke. Wat word dit genoem?', answer: 'seshoek', checkMode: 'auto', correctAnswer: 'seshoek', correctAnswers: ['seshoek', 'ʼn seshoek'], explanation: 'ʼn Vorm met 6 sye en 6 hoeke word ʼn seshoek genoem.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 6 cm, 6 cm en 6 cm. Watter tipe driehoek is dit?', answer: 'gelyksydige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydigedriehoek', correctAnswers: ['gelyksydigedriehoek', 'gelyksydig'], explanation: 'Al drie sye is gelyk (6 cm, 6 cm, 6 cm), dus is dit ʼn gelyksydige driehoek. Dit het ook 3 gelyke hoeke van 60° elk.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 7 cm, 4 cm en 5 cm. Watter tipe driehoek is dit?', answer: 'skalene driehoek', checkMode: 'auto', correctAnswer: 'skalenedriehoek', correctAnswers: ['skalenedriehoek', 'skaleen'], explanation: 'Al drie sylengtes verskil (7 cm, 4 cm, 5 cm), dus is geen sye gelyk nie. Dit maak dit ʼn skalene driehoek.' },
        { difficulty: 'Medium', question: 'ʼn Skrynwerker sny ʼn driehoekige afvalstuk met twee sye van 9 cm en ʼn derde sy van 5 cm. Watter tipe driehoek is die afvalstuk, en hoeveel gelyke hoeke het dit?', answer: 'Gelykbenige driehoek met 2 gelyke hoeke', checkMode: 'auto', correctAnswer: 'gelykbenig2', correctAnswers: ['gelykbenig2', 'gelykbenig, 2', 'gelykbenig 2 gelyke hoeke'], explanation: 'Twee sye is gelyk (9 cm en 9 cm) en een sy is verskillend (5 cm), dus is dit ʼn gelykbenige driehoek. ʼn Gelykbenige driehoek het altyd 2 gelyke hoeke — dié teenoor die twee gelyke sye.' },
        { difficulty: 'Medium', question: 'Naledi sê ʼn driehoek met sye 5 cm, 5 cm en 9 cm het 3 simmetrielyne omdat alle driehoeke dit het. Is sy korrek? Verduidelik.', answer: 'Nee — dit is ʼn gelykbenige driehoek met slegs 1 simmetrielyn, nie 3 nie. Slegs ʼn gelyksydige driehoek het 3 simmetrielyne.', checkMode: 'self', explanation: 'Die driehoek het twee gelyke sye (5 cm, 5 cm) en een verskillende sy (9 cm), wat dit gelykbenig maak. ʼn Gelykbenige driehoek het presies 1 simmetrielyn wat van die boonste hoek na die middel van die basis loop. Slegs ʼn gelyksydige driehoek (al 3 sye gelyk) het 3 simmetrielyne.' },
        { difficulty: 'Medium', question: 'Watter vierhoek het 4 gelyke sye maar geen regte hoeke nie?', answer: 'ruit', checkMode: 'auto', correctAnswer: 'ruit', correctAnswers: ['ruit', 'ʼn ruit'], explanation: 'ʼn Ruit het 4 gelyke sye soos ʼn vierkant, maar sy hoeke is nie regte hoeke nie.' },
        { difficulty: 'Medium', question: 'Noem een manier waarop ʼn reghoek en ʼn parallelogram eenders is, en een manier waarop hulle verskil.', answer: 'Eenders — albei het oorstaande sye gelyk en parallel. Verskillend — ʼn reghoek het 4 regte hoeke, maar ʼn parallelogram gewoonlik nie.', checkMode: 'self', explanation: 'Albei vorms deel die eienskap dat hul 2 pare oorstaande sye gelyk in lengte en parallel aan mekaar is. Die verskil is in die hoeke: ʼn reghoek het altyd 4 regte hoeke (90°), terwyl ʼn parallelogram se hoeke gewoonlik nie 90° is nie.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer dat elke reghoek ook ʼn vierkant is. Is dit korrek? Verduidelik jou antwoord.', answer: 'Nee — ʼn vierkant moet al 4 sye gelyk hê, maar ʼn reghoek het net oorstaande sye wat gelyk moet wees, dus is ʼn reghoek nie altyd ʼn vierkant nie.', checkMode: 'self', explanation: 'ʼn Reghoek het 4 regte hoeke nodig met oorstaande sye gelyk, maar sy lengte en breedte kan verskil. ʼn Vierkant is ʼn spesiale reghoek waar al 4 sye toevallig ook gelyk is. Aangesien die meeste reghoeke ongelyke lengte en breedte het, is die bewering vals.' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het ʼn radius van 9 cm. Wat is sy deursnee?', answer: '18 cm', checkMode: 'auto', correctAnswer: '18cm', correctAnswers: ['18cm', '18 cm', '18'], explanation: 'Deursnee = radius × 2. Deursnee = 9 × 2 = 18 cm.' },
        { difficulty: 'Medium', question: 'ʼn Fietswiel het ʼn deursnee van 60 cm. Wat is die radius van die wiel?', answer: '30 cm', checkMode: 'auto', correctAnswer: '30cm', correctAnswers: ['30cm', '30 cm', '30'], explanation: 'Radius = deursnee ÷ 2. Radius = 60 ÷ 2 = 30 cm.' },
        { difficulty: 'Medium', question: 'Wat is die naam vir die afstand heeltemal om die buitenste rand van ʼn sirkel?', answer: 'omtrek', checkMode: 'auto', correctAnswer: 'omtrek', correctAnswers: ['omtrek', 'die omtrek'], explanation: 'Die afstand om die buitekant van ʼn sirkel word die omtrek genoem — dit is die sirkel se weergawe van ʼn omtrek.' },
        { difficulty: 'Medium', question: 'Verduidelik waarom die radius van ʼn sirkel altyd presies die helfte van sy deursnee is.', answer: 'Die deursnee is ʼn reguit lyn oor die sirkel deur die middelpunt, gemaak van twee radiusse end-tot-end — een van die middelpunt na elke kant. Aangesien die deursnee 2 radiusse is, moet die radius die helfte van die deursnee wees.', checkMode: 'self', explanation: 'Die deursnee strek deur die middelpunt van een rand na die ander. Dit beteken dit bestaan uit twee radiuslengtes wat saamgevoeg is (middelpunt tot rand, dan middelpunt tot die teenoorgestelde rand). Twee gelyke radiusse maak een deursnee, dus radius = deursnee ÷ 2 en deursnee = radius × 2.' },
        { difficulty: 'Hard', question: 'Sorteer hierdie vorms in dié met 4 sye en dié sonder 4 sye: driehoek, ruit, vyfhoek, vierkant, seshoek, trapesium.', answer: '4 sye: ruit, vierkant, trapesium. Nie 4 sye nie: driehoek (3), vyfhoek (5), seshoek (6)', checkMode: 'auto', correctAnswer: 'ruitvierkanttrapesium', correctAnswers: ['ruitvierkanttrapesium', 'ruit, vierkant, trapesium', 'ruitvierkanttrapesium/driehoekvyfhoekseshoek'], explanation: 'Tel die sye van elke vorm: driehoek = 3, ruit = 4, vyfhoek = 5, vierkant = 4, seshoek = 6, trapesium = 4. Die vorms met presies 4 sye is ruit, vierkant en trapesium.' },
        { difficulty: 'Hard', question: 'Zanele beweer: "Alle vierkante is ruite, en alle ruite is vierkante." Is sy korrek? Verduidelik met behulp van hul eienskappe.', answer: 'Sy is net half korrek — alle vierkante is ruite (4 gelyke sye), maar nie alle ruite is vierkante nie, want ʼn ruit hoef nie regte hoeke te hê nie.', checkMode: 'self', explanation: 'ʼn Ruit het 4 gelyke sye nodig. ʼn Vierkant het 4 gelyke sye ÉN 4 regte hoeke, dus voldoen elke vierkant aan die vereistes van ʼn ruit — alle vierkante is ruite. Maar ʼn ruit hoef nie regte hoeke te hê nie, dus is ʼn "skeefgetrekte" ruit sonder regte hoeke nie ʼn vierkant nie. Zanele se bewering is net half waar.' },
        { difficulty: 'Hard', question: 'ʼn Venster is soos ʼn reghoek gevorm en ʼn bord is soos ʼn sirkel gevorm. Noem een eienskap wat elke vorm het wat die ander nie het nie.', answer: 'Die reghoek het 4 reguit sye en 4 regte hoeke, wat ʼn sirkel nie het nie. Die sirkel het ʼn geboë rand en ʼn radius/deursnee, wat ʼn reghoek nie het nie.', checkMode: 'self', explanation: 'ʼn Reghoek bestaan heeltemal uit reguit sye wat by regte hoeke (90°) ontmoet — dit het hoeke. ʼn Sirkel het een deurlopende geboë rand en glad geen hoeke nie, en dit word met ʼn radius en deursnee gemeet eerder as sylengtes.' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek het 4 gelyke sye en 4 regte hoeke. ʼn Tweede vierhoek het 4 gelyke sye maar geen regte hoeke nie. Noem elke vorm, gee dan een ooreenkoms en een verskil tussen hulle.', answer: 'Die eerste is ʼn vierkant, die tweede is ʼn ruit. Ooreenkoms — albei het 4 gelyke sye. Verskil — die vierkant het 4 regte hoeke, die ruit nie.', checkMode: 'self', explanation: 'ʼn Vierhoek met 4 gelyke sye en 4 regte hoeke is ʼn vierkant. ʼn Vierhoek met 4 gelyke sye maar geen regte hoeke nie is ʼn ruit. Hulle is eenders omdat albei al 4 sye gelyk in lengte het. Hulle verskil omdat slegs die vierkant reghoekige hoeke het — elke vierkant is ʼn ruit, maar nie elke ruit is ʼn vierkant nie.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn driehoek, ʼn vierhoek en ʼn seshoek deur ooreenkomste ÉN verskille oor al drie vormfamilies te noem.', answer: 'Ooreenkoms — almal is 2D-vorms wat slegs uit reguit sye met hoeke by elke hoekpunt bestaan. Verskille — ʼn driehoek het 3 sye/hoeke, ʼn vierhoek het 4, en ʼn seshoek het 6, dus verskil hul hoeksomme en voorkoms.', checkMode: 'self', explanation: 'Ooreenkomste: ʼn driehoek, ʼn vierhoek en ʼn seshoek is almal geslote 2D-vorms (veelhoeke) van reguit sye, met ʼn hoek waar twee sye ontmoet. Verskille: hulle het ʼn ander aantal sye en hoeke (3, 4 en 6), wat beteken hulle lyk anders en het verskillende hoeksomme namate meer sye bygevoeg word. Meer sye beteken oor die algemeen die vorm lyk nader aan ʼn sirkel.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy het die identifisering, klassifikasie en vergelyking van 2D-vorms bemeester.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 2 (20 vrae) — dieselfde bloklegging as Stel 1, vars bewoording/kontekste
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel reguit sye het ʼn reghoek?', answer: '4', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Reghoek is ʼn 2D-vorm met 4 reguit sye, waar oorstaande sye ewe lank is.' },
        { difficulty: 'Easy', question: 'Hoeveel hoeke het ʼn vyfhoek?', answer: '5', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', 'vyf'], explanation: 'ʼn Vyfhoek het 5 reguit sye en 5 hoeke (hoekpunte).' },
        { difficulty: 'Easy', question: 'Thabo teken ʼn vorm met ʼn geboë rand en sê dit het 2 hoeke. Is hy korrek oor die hoeke? Verduidelik kortliks.', answer: 'Nee — ʼn sirkel het 0 hoeke omdat sy rand een deurlopende geboë lyn is met geen punte waar reguit sye ontmoet nie.', checkMode: 'self', explanation: 'ʼn Hoek (hoekpunt) word gevorm waar twee reguit sye ontmoet. ʼn Sirkel het glad geen reguit sye nie — net een geboë lyn heeltemal rondom — dus kan dit geen hoeke hê nie.' },
        { difficulty: 'Easy', question: 'ʼn Vorm het 5 reguit sye en 5 hoeke. Wat word dit genoem?', answer: 'vyfhoek', checkMode: 'auto', correctAnswer: 'vyfhoek', correctAnswers: ['vyfhoek', 'ʼn vyfhoek'], explanation: 'ʼn Vorm met 5 sye en 5 hoeke word ʼn vyfhoek genoem.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 8 cm, 3 cm en 6 cm. Watter tipe driehoek is dit?', answer: 'skalene driehoek', checkMode: 'auto', correctAnswer: 'skalenedriehoek', correctAnswers: ['skalenedriehoek', 'skaleen'], explanation: 'Al drie sylengtes verskil (8 cm, 3 cm, 6 cm), dus is geen twee sye gelyk nie. Dit maak dit ʼn skalene driehoek.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 10 cm, 10 cm en 6 cm. Watter tipe driehoek is dit?', answer: 'gelykbenige driehoek', checkMode: 'auto', correctAnswer: 'gelykbenigedriehoek', correctAnswers: ['gelykbenigedriehoek', 'gelykbenig'], explanation: 'Twee sye is gelyk (10 cm en 10 cm) en die derde sy verskil (6 cm), dus is dit ʼn gelykbenige driehoek.' },
        { difficulty: 'Medium', question: 'ʼn Vlagmaker sny ʼn driehoekige vlaggie met al drie sye wat 12 cm meet. Watter tipe driehoek is dit, en hoeveel simmetrielyne het dit?', answer: 'Gelyksydige driehoek met 3 simmetrielyne', checkMode: 'auto', correctAnswer: 'gelyksydig3', correctAnswers: ['gelyksydig3', 'gelyksydig, 3', 'gelyksydig 3 simmetrielyne'], explanation: 'Al drie sye is gelyk (12 cm elk), dus is dit ʼn gelyksydige driehoek. ʼn Gelyksydige driehoek het 3 simmetrielyne, een van elke hoek na die middel van die oorstaande sy.' },
        { difficulty: 'Medium', question: 'Sipho sê ʼn skalene driehoek kan nooit ʼn regte hoek hê nie. Is hy korrek? Verduidelik.', answer: 'Nee — ʼn skalene driehoek kan ʼn regte hoek hê. Skaleen beskryf slegs die sye (almal verskillende lengtes); dit sê niks oor die hoeke nie.', checkMode: 'self', explanation: 'Skaleen verwys slegs na sylengtes — geen twee sye is gelyk nie. ʼn Driehoek met sye van, sê, 3 cm, 4 cm en 5 cm is skaleen en het ook ʼn regte hoek. Sipho is dus verkeerd; skaleen en ʼn regte hoek hê, is onverwante eienskappe.' },
        { difficulty: 'Medium', question: 'Watter vierhoek het oorstaande sye gelyk en parallel, maar gewoonlik geen regte hoeke nie?', answer: 'parallelogram', checkMode: 'auto', correctAnswer: 'parallelogram', correctAnswers: ['parallelogram', 'ʼn parallelogram'], explanation: 'ʼn Parallelogram het 2 pare oorstaande sye wat gelyk in lengte en parallel is, maar sy hoeke is gewoonlik nie regte hoeke nie.' },
        { difficulty: 'Medium', question: 'Noem een manier waarop ʼn vierkant en ʼn ruit eenders is, en een manier waarop hulle verskil.', answer: 'Eenders — albei het 4 gelyke sye. Verskillend — ʼn vierkant het 4 regte hoeke, maar ʼn ruit hoef nie regte hoeke te hê nie.', checkMode: 'self', explanation: 'Albei vorms deel die eienskap dat al 4 sye ewe lank is. Die verskil lê in die hoeke: ʼn vierkant het altyd 4 regte hoeke (90°), terwyl ʼn ruit hoeke kan hê wat nie 90° is nie.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn trapesium het altyd 2 pare parallelle sye, net soos ʼn parallelogram. Is dit korrek? Verduidelik.', answer: 'Nee — ʼn trapesium het slegs 1 paar parallelle sye. Om 2 pare parallelle sye te hê, is juis wat ʼn parallelogram maak.', checkMode: 'self', explanation: 'ʼn Trapesium word gedefinieer deur presies een paar parallelle sye te hê; die ander paar sye is nie parallel nie. ʼn Parallelogram, daarenteen, het albei pare oorstaande sye parallel. Dit is die sleuteleienskap wat die twee vorms onderskei.' },
        { difficulty: 'Medium', question: 'ʼn Sirkel het ʼn radius van 14 cm. Wat is sy deursnee?', answer: '28 cm', checkMode: 'auto', correctAnswer: '28cm', correctAnswers: ['28cm', '28 cm', '28'], explanation: 'Deursnee = radius × 2. Deursnee = 14 × 2 = 28 cm.' },
        { difficulty: 'Medium', question: 'ʼn Ete-bord het ʼn deursnee van 24 cm. Wat is die radius van die bord?', answer: '12 cm', checkMode: 'auto', correctAnswer: '12cm', correctAnswers: ['12cm', '12 cm', '12'], explanation: 'Radius = deursnee ÷ 2. Radius = 24 ÷ 2 = 12 cm.' },
        { difficulty: 'Medium', question: 'Wat is die naam vir die middelste punt van ʼn sirkel, waarvandaan elke punt op die rand dieselfde afstand is?', answer: 'middelpunt', checkMode: 'auto', correctAnswer: 'middelpunt', correctAnswers: ['middelpunt', 'die middelpunt'], explanation: 'Die middelste punt van ʼn sirkel word die middelpunt genoem. Elke punt op die sirkel se rand is presies dieselfde afstand van die middelpunt af.' },
        { difficulty: 'Medium', question: 'Amahle meet oor ʼn ronde dam op twee verskillende plekke en kry twee verskillende "deursnee"-lesings. Verduidelik wat sy verkeerd moes gedoen het.', answer: 'Sy moes nie altwee kere deur die middelpunt gemeet het nie — ʼn ware deursnee gaan altyd deur die middelpunt van die sirkel, dus moet enige twee deursnee van dieselfde sirkel gelyk wees.', checkMode: 'self', explanation: 'Per definisie is die deursnee ʼn reguit lyn oor die sirkel wat deur die middelpunt gaan. Elke deursnee van dieselfde sirkel het presies dieselfde lengte. As Amahle twee verskillende lesings gekry het, moes ten minste een van haar meetlyne nie deur die middelpunt gegaan het nie.' },
        { difficulty: 'Hard', question: 'Sorteer hierdie vorms in dié met ten minste een regte hoek en dié sonder regte hoeke: vierkant, ruit, reghoek, gelyksydige driehoek, trapesium (regshoekig).', answer: 'Ten minste een regte hoek: vierkant, reghoek, regshoekige trapesium. Geen regte hoeke: ruit, gelyksydige driehoek', checkMode: 'auto', correctAnswer: 'vierkantreghoektrapesium', correctAnswers: ['vierkantreghoektrapesium', 'vierkant, reghoek, trapesium', 'vierkantreghoektrapesium/ruitgelyksydigedriehoek'], explanation: 'Vierkant — 4 regte hoeke. Ruit — geen regte hoeke nie (sy hoeke is nie 90° nie). Reghoek — 4 regte hoeke. Gelyksydige driehoek — geen regte hoeke nie, al die hoeke is 60°. Regshoekige trapesium — het regte hoeke per definisie. Dus die vorms met ten minste een regte hoek is vierkant, reghoek en die regshoekige trapesium.' },
        { difficulty: 'Hard', question: 'Kagiso beweer: "ʼn Reghoek en ʼn ruit is eintlik dieselfde vorm, net anders gedraai." Is hy korrek? Verduidelik met behulp van hul eienskappe.', answer: 'Nee — ʼn reghoek het 4 regte hoeke maar sye wat nie almal gelyk is nie (net oorstaande sye gelyk), terwyl ʼn ruit 4 gelyke sye het maar gewoonlik geen regte hoeke nie. Dit is verskillende vorms met verskillende eienskappe.', checkMode: 'self', explanation: 'ʼn Reghoek se bepalende eienskap is 4 regte hoeke, met oorstaande sye gelyk (maar aangrensende sye kan verskil). ʼn Ruit se bepalende eienskap is 4 gelyke sye, met hoeke wat gewoonlik nie 90° is nie. Om ʼn reghoek te draai maak sy sye nooit almal gelyk nie, en om ʼn ruit te draai maak sy hoeke nooit almal 90° nie (tensy dit toevallig ʼn vierkant is). Kagiso is dus verkeerd.' },
        { difficulty: 'Hard', question: 'ʼn Horlosiegesig is soos ʼn sirkel gevorm en ʼn prentraam is soos ʼn vierkant gevorm. Noem een eienskap wat elke vorm het wat die ander nie het nie.', answer: 'Die vierkant het 4 reguit sye, 4 hoeke en 4 regte hoeke, wat ʼn sirkel nie het nie. Die sirkel het ʼn geboë rand, ʼn middelpunt en ʼn radius/deursnee, wat ʼn vierkant nie het nie.', checkMode: 'self', explanation: 'ʼn Vierkant word heeltemal uit reguit sye gebou wat by regte hoeke ontmoet, wat dit 4 hoeke gee. ʼn Sirkel het een geboë rand met glad geen hoeke nie, en word beskryf met ʼn middelpunt, radius en deursnee eerder as sylengtes en hoeke.' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek het oorstaande sye gelyk en parallel met 4 regte hoeke. ʼn Tweede vierhoek het oorstaande sye gelyk en parallel maar geen regte hoeke nie. Noem elke vorm, gee dan een ooreenkoms en een verskil tussen hulle.', answer: 'Die eerste is ʼn reghoek, die tweede is ʼn parallelogram. Ooreenkoms — albei het oorstaande sye gelyk en parallel. Verskil — die reghoek het 4 regte hoeke, die parallelogram nie.', checkMode: 'self', explanation: 'ʼn Vierhoek met oorstaande sye gelyk en parallel plus 4 regte hoeke is ʼn reghoek. Een met oorstaande sye gelyk en parallel maar geen regte hoeke nie is ʼn parallelogram. Hulle is eenders omdat albei 2 pare gelyke, parallelle oorstaande sye het. Hulle verskil in hul hoeke — slegs die reghoek het reghoekige hoeke. Trouens, elke reghoek is ʼn spesiale tipe parallelogram.' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn vierkant, ʼn ruit en ʼn reghoek deur ooreenkomste ÉN verskille oor al drie vormfamilies te noem.', answer: 'Ooreenkoms — almal is vierhoeke met 4 sye en oorstaande sye gelyk en parallel. Verskille — slegs die vierkant het albei 4 gelyke sye ÉN 4 regte hoeke; die ruit het 4 gelyke sye maar nie altyd regte hoeke nie; die reghoek het regte hoeke maar nie altyd 4 gelyke sye nie.', checkMode: 'self', explanation: 'Al drie vorms is vierhoeke (4 sye, 4 hoeke) met oorstaande sye gelyk en parallel. Die vierkant is spesiaal omdat dit BEIDE 4 gelyke sye ÉN 4 regte hoeke het — dit is eintlik terselfdertyd ʼn ruit en ʼn reghoek. Die ruit waarborg 4 gelyke sye maar nie regte hoeke nie, terwyl die reghoek regte hoeke waarborg maar nie 4 gelyke sye nie. Dit is waarom die vierkant by die oorvleueling van die ruit- en reghoekfamilies lê.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan 2D-vorms met selfvertroue identifiseer, klassifiseer en vergelyk.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer hierdie stel weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // STEL 3 (20 vrae) — dieselfde bloklegging, meer werklike kontekste + redenering
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'Hoeveel sye het ʼn seshoek?', answer: '6', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Seshoek is ʼn 2D-vorm met 6 reguit sye en 6 hoeke.' },
        { difficulty: 'Easy', question: 'Hoeveel hoeke het ʼn sirkel?', answer: '0', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], explanation: 'ʼn Sirkel het een geboë rand en geen reguit sye nie, dus het dit glad geen hoeke nie.' },
        { difficulty: 'Easy', question: 'Noem die 2D-vorm met 4 sye waar slegs die oorstaande sye ewe lank is, en al 4 hoeke regte hoeke is.', answer: 'reghoek', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'ʼn reghoek'], explanation: 'ʼn Reghoek het 4 sye waar oorstaande sye gelyk is, en al 4 hoeke is regte hoeke (90°).' },
        { difficulty: 'Easy', question: 'Lindiwe sê ʼn vierkant het geboë sye. Is sy korrek? Verduidelik kortliks.', answer: 'Nee — ʼn vierkant het 4 reguit sye, nie geboë sye nie. Slegs vorms soos ʼn sirkel het geboë sye.', checkMode: 'self', explanation: 'ʼn Vierkant is ʼn vierhoek wat heeltemal uit reguit lyne bestaan wat by regte hoeke ontmoet. Geboë sye behoort aan ronde vorms soos ʼn sirkel, nie aan ʼn vierkant nie.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Hekmaker sny ʼn driehoekige stut met sye 15 cm, 15 cm en 15 cm. Watter tipe driehoek is dit?', answer: 'gelyksydige driehoek', checkMode: 'auto', correctAnswer: 'gelyksydigedriehoek', correctAnswers: ['gelyksydigedriehoek', 'gelyksydig'], explanation: 'Al drie sye is gelyk (15 cm elk), dus is dit ʼn gelyksydige driehoek.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Driehoek het sye van 11 cm, 6 cm en 9 cm. Watter tipe driehoek is dit?', answer: 'skalene driehoek', checkMode: 'auto', correctAnswer: 'skalenedriehoek', correctAnswers: ['skalenedriehoek', 'skaleen'], explanation: 'Al drie sylengtes verskil (11 cm, 6 cm, 9 cm), dus is dit ʼn skalene driehoek.' },
        { difficulty: 'Medium', question: 'ʼn Skrynwerker het houtafvalstukke in driehoekvorms. Een afvalstuk het sye van 8 cm, 8 cm en 3 cm. Watter tipe driehoek is dit, en hoeveel gelyke hoeke het dit?', answer: 'Gelykbenige driehoek met 2 gelyke hoeke', checkMode: 'auto', correctAnswer: 'gelykbenig2', correctAnswers: ['gelykbenig2', 'gelykbenig, 2', 'gelykbenig 2 gelyke hoeke'], explanation: 'Twee sye is gelyk (8 cm en 8 cm) en een sy is verskillend (3 cm), dus is dit ʼn gelykbenige driehoek, wat altyd 2 gelyke hoeke het teenoor sy 2 gelyke sye.' },
        { difficulty: 'Medium', question: 'Bongani sê ʼn gelyksydige driehoek is net ʼn spesiale tipe gelykbenige driehoek. Is hy korrek? Verduidelik.', answer: 'Ja — ʼn gelyksydige driehoek het ten minste 2 gelyke sye (trouens al 3), wat voldoen aan die vereiste vir gelykbenig, dus is elke gelyksydige driehoek ook gelykbenig.', checkMode: 'self', explanation: 'ʼn Gelykbenige driehoek het ten minste 2 gelyke sye nodig. ʼn Gelyksydige driehoek het al 3 sye gelyk, wat sekerlik ten minste 2 gelyke sye insluit. Dus voldoen elke gelyksydige driehoek aan die definisie van gelykbenig, wat Bongani korrek maak — hoewel nie elke gelykbenige driehoek gelyksydig is nie.' },
        { difficulty: 'Medium', question: 'Watter vierhoek het slegs een paar parallelle sye?', answer: 'trapesium', checkMode: 'auto', correctAnswer: 'trapesium', correctAnswers: ['trapesium', 'ʼn trapesium'], explanation: 'ʼn Trapesium het presies een paar parallelle sye; die ander paar sye is nie parallel nie.' },
        { difficulty: 'Medium', question: 'Noem een manier waarop ʼn trapesium en ʼn parallelogram eenders is, en een manier waarop hulle verskil.', answer: 'Eenders — albei is vierhoeke met ten minste een paar parallelle sye. Verskillend — ʼn parallelogram het 2 pare parallelle sye, maar ʼn trapesium het slegs 1 paar.', checkMode: 'self', explanation: 'Albei vorms is 4-syfigure met ten minste een paar parallelle sye. Die sleutelverskil is dat ʼn parallelogram albei pare oorstaande sye parallel het, terwyl ʼn trapesium slegs een paar parallelle sye het — die ander paar is nie parallel nie.' },
        { difficulty: 'Medium', question: 'ʼn Leerder beweer ʼn ruit en ʼn vierkant is altyd dieselfde vorm omdat albei 4 gelyke sye het. Is dit korrek? Verduidelik jou antwoord.', answer: 'Nee — ʼn ruit het slegs 4 gelyke sye nodig, maar ʼn vierkant het 4 gelyke sye ÉN 4 regte hoeke nodig. ʼn Ruit sonder regte hoeke is nie ʼn vierkant nie.', checkMode: 'self', explanation: 'Om 4 gelyke sye te hê, maak ʼn vorm ʼn ruit, maar dit waarborg nie regte hoeke nie. ʼn Vierkant is ʼn spesiale ruit wat ook 4 regte hoeke het. As ʼn ruit "skeefgetrek" word sodat sy hoeke nie 90° is nie, is dit steeds ʼn ruit maar nie ʼn vierkant nie.' },
        { difficulty: 'Medium', question: 'ʼn Ronde tuinbedding het ʼn radius van 2 m. Wat is sy deursnee?', answer: '4 m', checkMode: 'auto', correctAnswer: '4m', correctAnswers: ['4m', '4 m', '4'], explanation: 'Deursnee = radius × 2. Deursnee = 2 × 2 = 4 m.' },
        { difficulty: 'Medium', question: 'ʼn Ronde tafel het ʼn deursnee van 1,4 m. Wat is die radius van die tafel?', answer: '0,7 m', checkMode: 'auto', correctAnswer: '0,7m', correctAnswers: ['0,7m', '0,7 m', '0.7m', '0.7 m', '0,7'], explanation: 'Radius = deursnee ÷ 2. Radius = 1,4 ÷ 2 = 0,7 m.' },
        { difficulty: 'Medium', question: 'Wat is die naam vir die afstand van die middelpunt van ʼn sirkel na enige punt op sy rand?', answer: 'radius', checkMode: 'auto', correctAnswer: 'radius', correctAnswers: ['radius', 'die radius'], explanation: 'Die afstand van die middelpunt van ʼn sirkel na enige punt op sy rand word die radius genoem.' },
        { difficulty: 'Medium', question: 'ʼn Wiel het ʼn radius van 21 cm. Verduidelik hoe jy sy deursnee sou vind, en gee die antwoord.', answer: 'Vermenigvuldig die radius met 2, want die deursnee is altyd dubbel die radius. Deursnee = 21 × 2 = 42 cm.', checkMode: 'self', explanation: 'Die deursnee is ʼn reguit lyn oor die sirkel deur die middelpunt, gemaak van twee radiusse end-tot-end. Dus deursnee = radius × 2 = 21 × 2 = 42 cm.' },
        { difficulty: 'Hard', question: 'Sorteer hierdie vorms volgens BEIDE aantal sye ÉN of hulle gelyke sye het: gelyksydige driehoek, skalene driehoek, vierkant, reghoek. Lys die vorm(s) met 3 gelyke sye, dan die vorm(s) met 4 gelyke sye.', answer: '3 gelyke sye: gelyksydige driehoek. 4 gelyke sye: vierkant', checkMode: 'auto', correctAnswer: 'gelyksydigedriehoekvierkant', correctAnswers: ['gelyksydigedriehoekvierkant', 'gelyksydige driehoek, vierkant', 'gelyksydigedriehoek/vierkant'], explanation: 'Gelyksydige driehoek — 3 sye, almal gelyk. Skalene driehoek — 3 sye, geen gelyk nie. Vierkant — 4 sye, almal gelyk. Reghoek — 4 sye, slegs oorstaande sye gelyk. Die enigste vorm met 3 gelyke sye is die gelyksydige driehoek; die enigste vorm met 4 gelyke sye is die vierkant.' },
        { difficulty: 'Hard', question: 'Precious beweer: "ʼn Vorm met 4 gelyke sye moet ʼn vierkant wees." Is sy korrek? Verduidelik met ʼn voorbeeld.', answer: 'Nee — ʼn ruit het ook 4 gelyke sye maar het nie regte hoeke nie, dus is dit nie ʼn vierkant nie. ʼn Vorm het 4 gelyke sye ÉN 4 regte hoeke nodig om ʼn vierkant te wees.', checkMode: 'self', explanation: 'ʼn Ruit is ʼn teenvoorbeeld: dit het 4 gelyke sye, net soos ʼn vierkant, maar sy hoeke is gewoonlik nie 90° nie. Aangesien dit nie aan die regte-hoek-vereiste voldoen nie, is dit nie ʼn vierkant nie. Dit wys dat 4 gelyke sye alleen nie genoeg is nie — regte hoeke word ook vereis.' },
        { difficulty: 'Hard', question: 'ʼn Stopteken is soos ʼn agthoek (8 sye) gevorm en ʼn piering is soos ʼn sirkel gevorm. Noem een eienskap wat elke vorm het wat die ander nie het nie.', answer: 'Die agthoek het 8 reguit sye en 8 hoeke, wat ʼn sirkel nie het nie. Die sirkel het ʼn geboë rand en geen hoeke nie, en word met ʼn radius en deursnee gemeet in plaas daarvan.', checkMode: 'self', explanation: 'ʼn Agthoek word uit 8 reguit sye gebou wat by 8 hoeke ontmoet. ʼn Sirkel het net een deurlopende geboë rand en glad geen hoeke nie, en sy grootte word met ʼn middelpunt, radius en deursnee beskryf eerder as sylengtes.' },
        { difficulty: 'Hard', question: 'ʼn Vierhoek het 4 gelyke sye en geen regte hoeke nie. ʼn Tweede vierhoek het oorstaande sye gelyk en parallel met 4 regte hoeke, maar nie al 4 sye gelyk nie. Noem elke vorm, gee dan een ooreenkoms en een verskil tussen hulle.', answer: 'Die eerste is ʼn ruit, die tweede is ʼn reghoek. Ooreenkoms — albei het oorstaande sye gelyk en parallel. Verskil — die ruit het al 4 sye gelyk maar geen regte hoeke nie, terwyl die reghoek regte hoeke het maar nie al die sye gelyk nie.', checkMode: 'self', explanation: 'ʼn Vierhoek met 4 gelyke sye en geen regte hoeke nie is ʼn ruit. Een met oorstaande sye gelyk en parallel, 4 regte hoeke, maar ongelyke aangrensende sye is ʼn reghoek. Albei is vierhoeke met 2 pare parallelle, gelyke oorstaande sye. Hulle verskil omdat die ruit gelyke sye waarborg (nie hoeke nie) terwyl die reghoek regte hoeke waarborg (nie almal gelyke sye nie).' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn driehoek, ʼn vyfhoek en ʼn sirkel deur ooreenkomste ÉN verskille oor al drie vorms te noem.', answer: 'Ooreenkoms — almal is geslote 2D-vorms wat ʼn plat area omsluit. Verskille — die driehoek en vyfhoek het reguit sye en hoeke (3 en 5 onderskeidelik), terwyl die sirkel een geboë rand en glad geen hoeke het nie.', checkMode: 'self', explanation: 'Ooreenkomste: ʼn driehoek, ʼn vyfhoek en ʼn sirkel is almal geslote, plat (2D) vorms wat ʼn area omsluit. Verskille: die driehoek het 3 reguit sye en 3 hoeke, die vyfhoek het 5 reguit sye en 5 hoeke, terwyl die sirkel geen reguit sye of hoeke het nie — net een deurlopende geboë rand. Namate die aantal sye van ʼn veelhoek toeneem, begin die vorm meer soos ʼn sirkel lyk.' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Fantasties! Jy kan jou kennis van 2D-vorms op werklike probleme en redenering toepas.' },
        { minScore: 15, message: 'Goeie werk! Gaan enige gemiste vrae weer deur en probeer weer.' },
        { minScore: 10, message: 'Goeie poging! Gaan die uitgewerkte voorbeelde weer deur en probeer die woordprobleme weer.' },
        { minScore: 0, message: 'Hou aan probeer — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],
}
