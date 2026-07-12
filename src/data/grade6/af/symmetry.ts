import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (simmetrie rolle) ─────────────────────────────────────────
// simmetrielyn (bevestig)          → blue   (#2563eb)
// simmetries / pas                 → green  (#16a34a)
// nie simmetries / pas nie         → red    (#dc2626)
// aantal lyne / rigting            → orange (#ea580c)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Simmetrie',
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — TOETS VIR ʼN SIMMETRIELYN (NIE NET VERTIKAAL NIE)
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'testing-a-line-of-symmetry',
      title: 'Toets vir ʼn Simmetrielyn',
      icon: '🪞',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${bl('Simmetrielyn')} verdeel ʼn vorm in twee helftes wat presiese spieëlbeelde van mekaar is — as jy die vorm langs daardie lyn sou vou, sou die twee helftes presies bo-op mekaar val. In vorige grade was die meeste simmetrielyne wat jy getoets het ${or('reguit op en af (vertikaal)')} geteken. Vanjaar moet jy enige lyn wat op ʼn vorm geteken is kan toets — ${or('vertikaal')}, ${or('horisontaal')}, of ${or('diagonaal')} — en besluit of dit werklik ʼn simmetrielyn is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('bevestigde simmetrielyn')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('helftes pas')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('helftes pas NIE')}</span>` +
        `</div>` +

        // ── The fold test ────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Die vou- (of spieël-) toets</p>` +
        `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">Om te toets of <strong>enige</strong> geteikende lyn ʼn simmetrielyn is: verbeel jou die vorm word presies langs daardie lyn gevou. Vergelyk die twee helftes punt vir punt langs die rand van die vorm. As elke punt aan die een kant ʼn ooreenstemmende punt aan die ander kant het, ${gr('pas die helftes')} en die lyn <strong>is</strong> ʼn simmetrielyn. As selfs een deel uitsteek of ontbreek aan die een kant, ${re('pas die helftes NIE')} en is die lyn <strong>nie</strong> ʼn simmetrielyn nie — selfs al gaan die lyn deur die middel van die vorm.</p>` +
        `</div>` +

        // ── Common trap ──────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">Om deur die middel te gaan is nie genoeg nie</p>` +
        `<p style="margin:0;color:#9a3412;">ʼn Lyn kan presies deur die middelpunt van ʼn vorm gaan en steeds ${re('nie')} ʼn simmetrielyn wees nie. Wat saak maak, is of die twee helftes ware spieëlbeelde is — kyk altyd na die werklike vorm van elke helfte, nie net na waar die lyn geleë is nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Reghoek (nie ʼn vierkant nie) het ʼn diagonale lyn van een hoekpunt na die teenoorgestelde hoekpunt. Is hierdie diagonaal ʼn simmetrielyn?',
          answer: `Nee — die diagonaal is ${re('nie')} ʼn simmetrielyn nie`,
          steps: [
            `Verbeel jou die reghoek word langs die diagonaal gevou. Dit skep twee driehoeke.`,
            `Vergelyk die twee driehoeke. Omdat die reghoek se sye verskillende lengtes het (lengte ≠ breedte), is die twee driehoeke dieselfde grootte en vorm, maar hulle val ${re('nie')} as spieëlbeelde langs daardie voulyn saam nie — die regte hoeke van die driehoeke eindig op verskillende posisies relatief tot die voulyn.`,
            `Die helftes ${re('pas nie as ʼn spieëlbeeld nie')}, dus is die diagonaal ${re('nie')} ʼn simmetrielyn vir ʼn reghoek nie.`,
            `ʼn Reghoek se enigste simmetrielyne is sy ${bl('vertikale')} en ${bl('horisontale')} middellyne.`,
          ],
        },
        {
          question: 'ʼn Reëlmatige seshoek het ʼn lyn deur twee teenoorgestelde hoekpunte. Is hierdie ʼn simmetrielyn?',
          answer: `Ja — dit ${gr('is')} ʼn simmetrielyn`,
          steps: [
            `In ʼn reëlmatige seshoek is al die sye en hoeke gelyk.`,
            `ʼn Lyn deur twee teenoorgestelde hoekpunte verdeel die seshoek in twee identiese helftes wat spieëlbeelde van mekaar is.`,
            `Die helftes ${gr('pas presies')}, dus ${gr('is')} hierdie lyn ʼn simmetrielyn.`,
            `ʼn Reëlmatige seshoek het eintlik 6 simmetrielyne in totaal — 3 deur pare teenoorgestelde hoekpunte, en 3 deur die middelpunte van pare teenoorgestelde sye.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'ʼn Vorm word langs ʼn lyn gevou, en die twee helftes val presies bo-op mekaar met niks wat aan enige kant uitsteek nie. Is hierdie lyn ʼn simmetrielyn?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja'],
          explanation: 'As die twee helftes presies pas wanneer gevou, sonder dat enigiets aan enige kant oorbly, is die lyn ʼn simmetrielyn.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Vierkant het ʼn diagonale lyn van een hoekpunt na die teenoorgestelde hoekpunt. Is hierdie diagonaal ʼn simmetrielyn? Verduidelik waarom.',
          answer: 'Ja, die diagonaal van ʼn vierkant is ʼn simmetrielyn. Omdat al vier sye van ʼn vierkant gelyk in lengte is en al vier hoeke 90° is, skep die vou langs ʼn diagonaal twee identiese reghoekige driehoeke wat presiese spieëlbeelde van mekaar is.',
          checkMode: 'self',
        },
        {
          difficulty: 'Hard',
          question: 'Zanele sê: "Enige lyn wat presies deur die middelpunt van ʼn vorm gaan, moet ʼn simmetrielyn wees." Gebruik die diagonaal van ʼn nie-vierkantige reghoek om te verduidelik waarom Zanele verkeerd is.',
          answer: 'Zanele is verkeerd. ʼn Nie-vierkantige reghoek se diagonaal gaan presies deur die middelpunt, maar dit is nie ʼn simmetrielyn nie — die vou langs die diagonaal skep twee driehoeke wat nie korrek as spieëlbeelde van mekaar val nie, omdat die reghoek se lengte en breedte verskil. Om deur die middelpunt te gaan, is nodig vir ʼn simmetrielyn, maar dit is nie op sy eie genoeg nie — die twee helftes moet ook ware spieëlbeelde van mekaar wees langs presies daardie lyn.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die voutoets vir simmetrielyne demonstreer, met hoe om vertikale, horisontale en diagonale lyne te toets, en waarom ʼn reghoek se diagonaal die toets faal terwyl ʼn vierkant se diagonaal dit slaag" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — DIAGONALE VAN VIERHOEKE AS SIMMETRIELYNE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'diagonals-of-quadrilaterals',
      title: 'Diagonale van Vierhoeke',
      icon: '◇',
      explanation:
        `<p style="margin-bottom:16px;">ʼn ${or('Diagonaal')} is ʼn reguit lyn wat twee hoekpunte van ʼn vorm verbind wat nie langs mekaar is nie. In vierhoeke (4-sy vorms) is party diagonale ${bl('simmetrielyne')} en party nie — dit hang af van die eienskappe van daardie spesifieke vierhoek. Om die eienskappe van elke vierhoek te ken, help jou om te voorspel, en dan te toets, of sy diagonale simmetrielyne is.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('diagonaal')}</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('simmetrielyn')}</span>` +
        `</div>` +

        // ── Quadrilateral diagonal table ────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Gee die diagonale simmetrielyne?</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vierkant</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${gr('Albei diagonale')}</strong> is simmetrielyne (plus die vertikale en horisontale middellyne — 4 lyne in totaal). Al die sye is gelyk.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Ruit</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${gr('Albei diagonale')}</strong> is simmetrielyne (2 lyne in totaal). Al die sye is gelyk, maar nie al die hoeke is 90° nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Reghoek (nie ʼn vierkant nie)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${re('Geen van die diagonale')}</strong> is ʼn simmetrielyn nie (net die vertikale en horisontale middellyne — 2 lyne in totaal). Nie al die sye is gelyk nie.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Parallelogram (skuins)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;"><strong>${re('Geen van die diagonale')}</strong> is ʼn simmetrielyn nie — dit het glad geen simmetrielyne nie.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Vlieër</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('Een diagonaal')} (die lang een, tussen die twee verskillende pare gelyke sye) is ʼn simmetrielyn. Die ander diagonaal is nie.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Waarom die gelyke-sye-reël saak maak</p>` +
        `<p style="margin:0;color:#1e3a8a;">ʼn Diagonaal is meer geneig om ʼn ${bl('simmetrielyn')} te wees wanneer dit die vorm in twee helftes verdeel met ooreenstemmende sylengtes aan weerskante van die vou. Dit is waarom die diagonale van ʼn vierkant en ʼn ruit (al vier sye gelyk) werk, maar die diagonale van ʼn gewone reghoek of skuins parallelogram (oorstaande sye gelyk, maar aangrensende sye verskillend) nie werk nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'ʼn Ruit het al vier sye gelyk, maar sy hoeke is nie regte hoeke nie. Is sy diagonale simmetrielyne?',
          answer: `Ja — ${gr('albei diagonale')} van ʼn ruit is simmetrielyne`,
          steps: [
            `ʼn Ruit het ${bl('4 gelyke sye')}.`,
            `Om langs enige diagonaal te vou, verdeel die ruit in twee driehoeke wat elk twee gelyke sye deel, wat hulle spieëlbeelde maak.`,
            `Albei diagonale ${gr('gee ooreenstemmende helftes')}, dus is albei diagonale simmetrielyne.`,
            `ʼn Ruit het ${gr('2 simmetrielyne')} in totaal — albei is diagonale (dit het geen vertikale/horisontale simmetrielyn nie, tensy dit ook ʼn vierkant is).`,
          ],
        },
        {
          question: 'ʼn Vlieër het twee pare aangrensende gelyke sye, maar die twee pare verskil in lengte van mekaar. Watter diagonaal, indien enige, is ʼn simmetrielyn?',
          answer: `Net die ${bl('lang diagonaal')} (tussen die twee verskillende pare sye) is ʼn simmetrielyn`,
          steps: [
            `In ʼn vlieër loop een diagonaal tussen die twee hoekpunte waar die verskillende pare sye ontmoet — dit is die ${bl('lang diagonaal')}.`,
            `Om langs hierdie diagonaal te vou, weerspieël elke paar gelyke sye die ander paar presies, dus ${gr('pas')} die helftes.`,
            `Die ander (kort) diagonaal verbind die twee hoekpunte waar twee gelyke sye ontmoet — om langs dit te vou gee ${re('nie')} ooreenstemmende helftes nie, want dit skep twee driehoeke van verskillende vorms.`,
            `Net die ${bl('lang diagonaal')} van ʼn vlieër is ʼn simmetrielyn, wat die vlieër ${gr('1 simmetrielyn')} in totaal gee.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Het ʼn vierkant ʼn diagonaal wat ʼn simmetrielyn is?',
          answer: 'ja',
          checkMode: 'auto',
          correctAnswer: 'ja',
          correctAnswers: ['ja', 'Ja'],
          explanation: 'ʼn Vierkant het 4 gelyke sye, dus is albei sy diagonale simmetrielyne.',
        },
        {
          difficulty: 'Medium',
          question: 'ʼn Gewone (nie-vierkantige) reghoek het ʼn diagonaal wat op dit geteken is. Is hierdie diagonaal ʼn simmetrielyn? Hoeveel simmetrielyne het die reghoek in totaal, en watter tipe is hulle?',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'a) Is die diagonaal ʼn simmetrielyn?', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'ʼn Nie-vierkantige reghoek het sye van twee verskillende lengtes, dus gee die vou langs ʼn diagonaal nie ooreenstemmende spieëlhelftes nie.' },
            { label: 'b) Totale simmetrielyne, en hul tipe', correctAnswer: '2 vertikaal en horisontaal', correctAnswers: ['2 vertikaal en horisontaal', '2, vertikaal en horisontaal', 'twee, vertikaal en horisontaal', '2 (vertikaal en horisontaal)'], explanation: 'ʼn Reghoek het 2 simmetrielyne — een vertikale en een horisontale middellyn. Sy diagonale is nie simmetrielyne nie.' },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Thabo sê: "ʼn Vlieër het twee diagonale, dus moet dit 2 simmetrielyne hê, net soos ʼn reghoek." Verduidelik waarom Thabo verkeerd is, en gee die korrekte aantal simmetrielyne wat ʼn vlieër het.',
          answer: 'Thabo is verkeerd. Om twee diagonale te hê, beteken nie dat albei simmetrielyne is nie — dit hang af van of elke diagonaal werklik ooreenstemmende spieëlhelftes gee. ʼn Vlieër het twee pare aangrensende gelyke sye, maar die twee pare verskil in lengte van mekaar. Net die lang diagonaal (wat tussen die twee hoekpunte loop waar die verskillende pare sye ontmoet) verdeel die vlieër in twee spieëlbeeld-helftes. Die kort diagonaal doen dit nie, want dit skep twee driehoeke van verskillende vorms. Dus het ʼn vlieër net 1 simmetrielyn, nie 2 nie.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat die diagonale van ʼn vierkant, ruit, reghoek, parallelogram en vlieër vergelyk, met watter diagonale simmetrielyne is en hoe dit met elke vorm se gelyke-sye-eienskappe verband hou" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — SIMMETRIELYNE TEKEN EN VORMS VOLTOOI
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'drawing-lines-of-symmetry',
      title: 'Simmetrielyne Teken en Vorms Voltooi',
      icon: '✏️',
      explanation:
        `<p style="margin-bottom:16px;">Behalwe om te toets of ʼn gegewe lyn ʼn simmetrielyn is, moet jy ook self ${or('simmetrielyne')} op ʼn vorm kan ${or('teken')}, en ʼn vorm kan ${or('voltooi')} wanneer net die helfte daarvan (en sy simmetrielyn) getoon word. Wanneer jy ʼn vorm voltooi, moet elke punt op die ontbrekende helfte dieselfde afstand van die simmetrielyn wees as sy ooreenstemmende punt op die gegewe helfte — net aan die teenoorgestelde kant.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Kleursleutel:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('simmetrielyn')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('gegewe helfte')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('voltooide / ooreenstemmende helfte')}</span>` +
        `</div>` +

        // ── Steps to complete a shape ────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">ʼn Vorm voltooi met behulp van sy simmetrielyn</p>` +
        `<div style="background:#f8fafc;border:1px solid #e2e8f0;border-radius:10px;padding:14px 16px;margin-bottom:20px;">` +
        `<p style="margin:0;color:#374151;">1) Bepaal hoe ver elke hoekpunt van die ${or('gegewe helfte')} van die ${bl('simmetrielyn')} is. 2) Merk ʼn ooreenstemmende punt ${gr('dieselfde afstand')} weg aan die teenoorgestelde kant van die lyn. 3) Verbind die nuwe punte in dieselfde volgorde om die ${gr('ontbrekende helfte')} te herteken. 4) Kontroleer jou werk deur jou te verbeel dat jy langs die lyn vou — die twee helftes behoort presies te pas.</p>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Simmetrie in vorms met meer as een lyn</p>` +
        `<p style="margin:0;color:#1e3a8a;">Party vorms, soos ʼn vierkant of ʼn reëlmatige seshoek, het <strong>meer as een</strong> ${bl('simmetrielyn')}. Wanneer jy al die simmetrielyne vir so ʼn vorm teken, werk stelselmatig deur elke moontlike vourigting — vertikaal, horisontaal, dan diagonaal — sodat jy nie een miskyk nie.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Die helfte van ʼn simmetriese vorm is geteken, saam met sy vertikale simmetrielyn. Een hoekpunt van die gegewe helfte is 3 cm van die simmetrielyn. Waar moet die ooreenstemmende hoekpunt op die ander helfte geteken word?',
          answer: `Die ooreenstemmende hoekpunt moet ${gr('3 cm van die simmetrielyn')} geteken word, aan die teenoorgestelde kant`,
          steps: [
            `Die ${or('gegewe helfte')} se hoekpunt is ${or('3 cm')} van die ${bl('simmetrielyn')}.`,
            `Vir die twee helftes om spieëlbeelde te wees, moet die ooreenstemmende hoekpunt op die ontbrekende helfte presies ${gr('dieselfde afstand')} (3 cm) van die lyn wees, maar aan die teenoorgestelde kant.`,
            `Die ooreenstemmende hoekpunt word ${gr('3 cm')} van die simmetrielyn geteken, aan die ander kant.`,
          ],
        },
        {
          question: 'Hoeveel simmetrielyne moet jy op ʼn vierkant teken, en in watter rigtings?',
          answer: `${bl('4 lyne')}: een vertikaal, een horisontaal, en twee diagonaal`,
          steps: [
            `Toets ʼn ${or('vertikale')} vou reg deur die middel — albei kante pas. Dis 1 lyn.`,
            `Toets ʼn ${or('horisontale')} vou dwarsdeur die middel — albei kante pas. Dis 2 lyne.`,
            `Toets albei ${or('diagonale')} voue, van hoekpunt tot hoekpunt — albei pas, omdat al die sye van ʼn vierkant gelyk is. Dis 3 en 4.`,
            `ʼn Vierkant het ${bl('4 simmetrielyne')} in totaal: vertikaal, horisontaal, en albei diagonale.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Wanneer jy ʼn simmetriese vorm vanaf sy simmetrielyn voltooi, moet die ontbrekende helfte dieselfde afstand van die lyn geteken word as die ooreenstemmende deel van die gegewe helfte, of ʼn ander afstand?',
          answer: 'dieselfde afstand',
          checkMode: 'auto',
          correctAnswer: 'dieselfde afstand',
          correctAnswers: ['dieselfde afstand', 'dieselfde'],
          explanation: 'Elke punt op die ontbrekende helfte moet presies dieselfde afstand van die simmetrielyn wees as sy ooreenstemmende punt op die gegewe helfte, net aan die teenoorgestelde kant, sodat die twee helftes ware spieëlbeelde is.',
        },
        {
          difficulty: 'Medium',
          question: 'Die helfte van ʼn simmetriese vorm word gegee, met ʼn horisontale simmetrielyn. Een punt op die gegewe helfte is 4 cm bo die lyn, en ʼn ander punt is 1,5 cm bo die lyn. Hoe ver onder die lyn moet die twee ooreenstemmende punte op die ontbrekende helfte geteken word?',
          answer: '',
          checkMode: 'auto',
          parts: [
            { label: 'a) Afstand onder die lyn vir die punt wat 4 cm bo was', correctAnswer: '4', correctAnswers: ['4', '4cm', '4 cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees, maar aan die teenoorgestelde kant: 4 cm onder die lyn.' },
            { label: 'b) Afstand onder die lyn vir die punt wat 1,5 cm bo was', correctAnswer: '1,5', correctAnswers: ['1.5', '1,5', '1.5cm', '1,5cm', '1.5 cm', '1,5 cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees, maar aan die teenoorgestelde kant: 1,5 cm onder die lyn.' },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'ʼn Leerder voltooi die helfte van ʼn simmetriese vlindervorm deur die gegewe helfte na die ander kant van die simmetrielyn te kopieer, sonder om dit om te draai, sodat dit dieselfde as die oorspronklike helfte lyk in plaas van ʼn spieëlbeeld. Verduidelik wat verkeerd is met hierdie metode, en beskryf die korrekte metode.',
          answer: 'Die leerder se metode is verkeerd, want om die gegewe helfte bloot te kopieer (te verskuif) skep twee identiese helftes wat in dieselfde rigting kyk, nie twee spieëlbeeld-helftes nie — die resultaat sou nie langs die simmetrielyn vou en pas nie. Die korrekte metode is om die gegewe helfte te weerspieël: vir elke punt op die gegewe helfte, meet die afstand vanaf die simmetrielyn, merk dan ʼn nuwe punt daardie selfde afstand weg aan die teenoorgestelde kant van die lyn, direk oorkant die oorspronklike punt. Om hierdie weerspieëlde punte te verbind, skep ʼn ware spieëlbeeld, wat is wat ʼn ware simmetrielyn vereis.',
          checkMode: 'self',
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Kort video wat wys hoe om ʼn simmetriese vorm te voltooi deur afstande vanaf die simmetrielyn te meet en punte na die teenoorgestelde kant te weerspieël, met ʼn voorbeeld van ʼn diagonale simmetrielyn" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 1',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Vorm word langs ʼn lyn gevou en die twee helftes pas presies, met niks wat aan enige kant uitsteek nie. Is hierdie lyn ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'As die twee helftes presies pas wanneer gevou, is die lyn ʼn simmetrielyn — ongeag of dit vertikaal, horisontaal of diagonaal is.' },
        { difficulty: 'Easy', question: 'ʼn Reghoek (nie ʼn vierkant nie) het ʼn lyn van een hoekpunt na die teenoorgestelde hoekpunt, soos getoon. Is hierdie diagonaal ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'ʼn Nie-vierkantige reghoek het sye van twee verskillende lengtes, dus gee die vou langs ʼn diagonaal nie twee ooreenstemmende spieëlhelftes nie.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="35" y="35" width="150" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="35" y1="35" x2="185" y2="135" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vierkant het ʼn lyn van een hoekpunt na die teenoorgestelde hoekpunt, soos getoon. Is hierdie diagonaal ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'ʼn Vierkant het 4 gelyke sye, dus skep die vou langs enige diagonaal twee identiese spieëlbeeld-driehoeke.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="60" y="35" width="100" height="100" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="35" x2="160" y2="135" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vorm het ʼn lyn presies deur sy middelpunt, maar wanneer dit langs daardie lyn gevou word, het die een kant ʼn uitstulping wat die ander kant nie het nie. Is hierdie lyn ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Om deur die middelpunt van ʼn vorm te gaan, is nie op sy eie genoeg nie — die twee helftes moet ware spieëlbeelde wees. As die een kant ʼn kenmerk het wat die ander kant nie het nie, pas die helftes nie, dus is dit nie ʼn simmetrielyn nie.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel simmetrielyne het ʼn vierkant?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Vierkant het 4 simmetrielyne: een vertikaal, een horisontaal, en twee diagonaal.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Ruit het 4 gelyke sye maar geen regte hoeke nie. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Ruit het 2 simmetrielyne, en albei is sy diagonale — dit het geen vertikale of horisontale simmetrielyn nie, tensy dit ook ʼn vierkant is.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Gelykbenige driehoek het twee gelyke sye en een simmetrielyn. Is hierdie lyn vertikaal, horisontaal of diagonaal wanneer die driehoek geteken word met sy ongelyke sy plat langs die onderkant?', checkMode: 'auto', correctAnswer: 'vertikaal', correctAnswers: ['vertikaal'], explanation: 'Wanneer ʼn gelykbenige driehoek geteken word met sy ongelyke (basis-)sy plat langs die onderkant, loop sy een simmetrielyn reguit op en af vanaf die boonste hoekpunt na die middelpunt van die basis — dit is ʼn vertikale lyn.' },
        { difficulty: 'Medium', question: 'ʼn Reëlmatige seshoek (6 gelyke sye, 6 gelyke hoeke) het simmetrielyne deur pare teenoorgestelde hoekpunte, en ook deur die middelpunte van pare teenoorgestelde sye. Hoeveel simmetrielyne het dit in totaal?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne: 3 deur pare teenoorgestelde hoekpunte, en 3 deur die middelpunte van pare teenoorgestelde sye.' },
        { difficulty: 'Medium', question: 'ʼn Vlieër het twee pare aangrensende gelyke sye, maar die pare verskil in lengte van mekaar. Hoeveel simmetrielyne het ʼn vlieër?', checkMode: 'auto', correctAnswer: '1', correctAnswers: ['1', 'een'], explanation: 'ʼn Vlieër het net 1 simmetrielyn — die lang diagonaal wat tussen die twee hoekpunte loop waar die verskillende pare sye ontmoet.' },
        { difficulty: 'Medium', question: 'Tel ʼn ruit se diagonaal as ʼn simmetrielyn? Verduidelik waarom, met verwysing na sy sylengtes.', answer: 'Ja, albei diagonale van ʼn ruit is simmetrielyne. Omdat al vier sye van ʼn ruit gelyk in lengte is, skep die vou langs enige diagonaal twee driehoeke met ooreenstemmende sylengtes wat ware spieëlbeelde van mekaar is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Parallelogram is skuins, met geen regte hoeke nie en twee pare parallelle maar ongelyke aangrensende sye. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], explanation: 'ʼn Skuins parallelogram (nie ʼn reghoek of ruit nie) het 0 simmetrielyne — nóg sy diagonale nóg enige vertikale of horisontale lyn gee ooreenstemmende spieëlhelftes.' },
        { difficulty: 'Medium', question: 'ʼn Vlieër se twee diagonale word geteken. Die een is die lang diagonaal (tussen die twee hoekpunte waar die verskillende pare sye ontmoet), en die ander is die kort diagonaal (tussen die twee hoekpunte waar gelyke sye ontmoet). Watter een is die simmetrielyn?', checkMode: 'auto', correctAnswer: 'die lang diagonaal', correctAnswers: ['die lang diagonaal', 'lang diagonaal', 'die lang een'], explanation: 'Net die lang diagonaal van ʼn vlieër is ʼn simmetrielyn. Om daarlangs te vou, weerspieël elke paar gelyke sye die ander paar. Die kort diagonaal gee nie ooreenstemmende helftes nie.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant, ʼn ruit, en ʼn nie-vierkantige reghoek word vergelyk. Watter van hierdie drie vorms het diagonale wat NIE simmetrielyne is nie?', checkMode: 'auto', correctAnswer: 'reghoek', correctAnswers: ['reghoek', 'die reghoek', 'nie-vierkantige reghoek'], explanation: 'ʼn Reghoek (wat nie ʼn vierkant is nie) het ongelyke aangrensende sye, dus skep sy diagonale nie spieëlbeeld-helftes nie. Beide die vierkant en die ruit het al 4 sye gelyk, dus is albei van hul diagonale simmetrielyne.' },
        { difficulty: 'Medium', question: 'Die helfte van ʼn simmetriese vorm is geteken met ʼn vertikale simmetrielyn. ʼn Hoekpunt op die gegewe helfte is 5 cm van die lyn. Hoe ver van die lyn moet die ooreenstemmende hoekpunt op die ontbrekende helfte geteken word?', checkMode: 'auto', correctAnswer: '5', correctAnswers: ['5', '5cm', '5 cm'], explanation: 'Vir die twee helftes om ware spieëlbeelde te wees, moet die ooreenstemmende punt presies dieselfde afstand van die simmetrielyn wees: 5 cm, aan die teenoorgestelde kant.' },
        { difficulty: 'Medium', question: 'Die helfte van ʼn simmetriese vorm is geteken met ʼn horisontale simmetrielyn. ʼn Punt op die gegewe helfte is 2,5 cm bo die lyn, en ʼn ander is 6 cm bo die lyn. Hoe ver onder die lyn moet die twee ooreenstemmende punte op die voltooide helfte geteken word?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Afstand onder die lyn vir die punt 2,5 cm bo', correctAnswer: '2,5', correctAnswers: ['2.5', '2,5', '2.5cm', '2,5cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees: 2,5 cm onder.' },
          { label: 'b) Afstand onder die lyn vir die punt 6 cm bo', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees: 6 cm onder.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Leerder voltooi die helfte van ʼn simmetriese vorm, maar teken die ooreenstemmende punt op ʼn ander afstand van die simmetrielyn as die oorspronklike punt. Sal die voltooide vorm werklik simmetries wees? Verduidelik.', answer: 'Nee, die voltooide vorm sal nie werklik simmetries wees nie. Vir ʼn vorm om ʼn ware simmetrielyn te hê, moet elke punt op die een helfte presies dieselfde afstand van die lyn wees as sy ooreenstemmende punt op die ander helfte. As die afstande verskil, sal die vou van die vorm langs daardie lyn nie die twee helftes presies bo-op mekaar laat val nie, dus sal die vorm nie simmetries wees nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "Elke vierhoek met 4 gelyke sye het albei diagonale as simmetrielyne, omdat al die sye dieselfde lengte is." Is dit waar vir beide ʼn vierkant en ʼn ruit? Verduidelik.', answer: 'Ja, dit is waar vir albei. ʼn Vierkant en ʼn ruit het albei al 4 sye gelyk in lengte. In albei gevalle skep die vou langs enige diagonaal twee driehoeke wat gelyke sye aan weerskante van die vou deel, wat hulle ware spieëlbeelde maak. Dus het beide die vierkant (4 gelyke sye en 4 regte hoeke) en die ruit (4 gelyke sye, geen regte hoeke) albei diagonale as simmetrielyne. Die sleutelvereiste is gelyke sylengtes wat by die vou ontmoet, nie die grootte van die hoeke nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "ʼn Vorm kan ʼn simmetrielyn hê selfs al is die lyn diagonaal, solank dit deur die middel gaan." Gebruik die diagonaal van ʼn nie-vierkantige reghoek om te wys hierdie bewering is te eenvoudig, en verduidelik watter ekstra voorwaarde eintlik nodig is.', answer: 'Die bewering is te eenvoudig. ʼn Nie-vierkantige reghoek se diagonaal gaan wel deur die presiese middel van die vorm, maar dit is steeds nie ʼn simmetrielyn nie, want die vou daarlangs skep twee driehoeke wat nie as spieëlbeelde ooreenstem nie (die reghoek se lengte en breedte verskil, dus is die driehoeke, alhoewel gelyk in oppervlakte, nie spieëlbeelde van mekaar oor daardie spesifieke lyn nie). Die ekstra voorwaarde wat nodig is, is dat elke punt aan die een kant van die lyn ʼn ooreenstemmende punt dieselfde afstand weg aan die ander kant moet hê — om deur die middelpunt te gaan is nodig, maar nie op sy eie voldoende nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn ruit en ʼn vlieër. ʼn Ruit het 2 simmetrielyne terwyl ʼn vlieër net 1 het. Verduidelik die verskil in hul sylengtes wat dit veroorsaak.', answer: 'In ʼn ruit is al 4 sye gelyk in lengte, dus verdeel albei diagonale dit in ooreenstemmende spieëlbeeld-driehoeke — wat 2 simmetrielyne gee. In ʼn vlieër is daar twee pare aangrensende gelyke sye, maar die twee pare verskil in lengte van mekaar (byvoorbeeld, twee sye van 3 cm en twee sye van 5 cm). Net die lang diagonaal (tussen die hoekpunte waar die verskillende pare ontmoet) gee ooreenstemmende helftes; die kort diagonaal doen dit nie, want dit sou probeer om ʼn 3 cm-sy teenoor ʼn 5 cm-sy te laat pas. Omdat ʼn vlieër se sye nie almal gelyk is soos ʼn ruit s\'n nie, werk net een van sy diagonale as ʼn simmetrielyn, nie albei nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm word gemaak van ʼn vierkant met ʼn gelyksydige driehoek presies gesentreer bo-op een sy aangeheg (soos ʼn eenvoudige huistekening). Die vierkant alleen het 4 simmetrielyne, en die driehoek alleen het 3. Verduidelik hoeveel simmetrielyne die saamgestelde huisvorm het, en waarom die meeste van die oorspronklike lyne verlore gaan.', answer: 'Die saamgestelde huisvorm het net 1 simmetrielyn — die enkele vertikale lyn deur die punt van die driehoek en die middelpunt van die vierkant se basis. Die meeste van die oorspronklike lyne gaan verlore omdat die driehoek net aan een sy van die vierkant aangeheg is, wat die balans wat nodig is vir die ander voue, verbreek. Byvoorbeeld, die vierkant se horisontale simmetrielyn sou probeer om die spits driehoek-dak teenoor die plat onderkant van die vierkant te laat pas — dit is verskillende vorms, dus kan hulle nie ooreenstem nie. Net die een vertikale lyn wat beide die driehoek en die vierkant afsonderlik deel, werk steeds vir die gekombineerde vorm.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue simmetrielyne in enige vorm toets, teken en daaroor redeneer, insluitend vierhoek-diagonale.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — kyk weer na enige vraag wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan die vou-toets en die vierhoek-diagonaalreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 2',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Vorm word langs ʼn lyn gevou en die een deel steek verder uit as die ooreenstemmende deel aan die ander kant. Is hierdie lyn ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'As die twee helftes nie presies pas wanneer gevou nie, is die lyn nie ʼn simmetrielyn nie, selfs al lyk dit amper reg.' },
        { difficulty: 'Easy', question: 'ʼn Ruit (4 gelyke sye, geen regte hoeke nie) het ʼn lyn van een hoekpunt na die teenoorgestelde hoekpunt, soos getoon. Is hierdie diagonaal ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'ʼn Ruit het 4 gelyke sye, dus skep die vou langs enige diagonaal twee ooreenstemmende spieëlbeeld-driehoeke.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,30 165,85 110,140 55,85" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="140" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Skuins parallelogram (geen regte hoeke nie, ongelyke aangrensende sye) het ʼn lyn van een hoekpunt na die teenoorgestelde hoekpunt, soos getoon. Is hierdie diagonaal ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'ʼn Skuins parallelogram het ongelyke aangrensende sye, dus gee geen van die diagonale ooreenstemmende spieëlhelftes nie — ʼn parallelogram het 0 simmetrielyne.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="70,35 185,35 150,135 35,135" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="70" y1="35" x2="150" y2="135" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Lyn is op ʼn vorm geteken wat glad nie deur die middelpunt van die vorm gaan nie. Kan hierdie lyn steeds ʼn simmetrielyn wees?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'ʼn Simmetrielyn moet ʼn vorm in twee gelyke spieëlbeeld-helftes verdeel, wat beteken dat dit deur die middelpunt van die vorm moet gaan. ʼn Lyn wat die middelpunt mis, kan nie ʼn simmetrielyn wees nie.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel simmetrielyne het ʼn reëlmatige seshoek?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne — 3 deur pare teenoorgestelde hoekpunte en 3 deur die middelpunte van pare teenoorgestelde sye.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Vierkant het hoeveel simmetrielyne?', checkMode: 'auto', correctAnswer: '4', correctAnswers: ['4', 'vier'], explanation: 'ʼn Vierkant het 4 simmetrielyne: vertikaal, horisontaal, en albei diagonale.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Gelyksydige driehoek het 3 gelyke sye en 3 simmetrielyne. Is hierdie simmetrielyne almal dieselfde lengte as mekaar?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Ja — omdat ʼn gelyksydige driehoek 3 gelyke sye en 3 gelyke hoeke het, is sy 3 simmetrielyne (elk vanaf ʼn hoekpunt na die middelpunt van die teenoorgestelde sy) almal dieselfde lengte as mekaar.' },
        { difficulty: 'Medium', question: 'ʼn Gewone (nie-vierkantige) reghoek het hoeveel simmetrielyne, en watter tipe is hulle?', checkMode: 'auto', correctAnswer: '2 vertikaal en horisontaal', correctAnswers: ['2 vertikaal en horisontaal', '2, vertikaal en horisontaal', 'twee, vertikaal en horisontaal', '2 (vertikaal en horisontaal)'], explanation: 'ʼn Nie-vierkantige reghoek het 2 simmetrielyne — een vertikale en een horisontale middellyn. Sy diagonale is nie simmetrielyne nie.' },
        { difficulty: 'Medium', question: 'ʼn Vlieër het twee pare aangrensende gelyke sye van verskillende lengtes van mekaar. Watter diagonaal is sy simmetrielyn — die lang een of die kort een?', checkMode: 'auto', correctAnswer: 'die lang diagonaal', correctAnswers: ['die lang diagonaal', 'lang diagonaal', 'die lang een'], explanation: 'Net die lang diagonaal van ʼn vlieër (tussen die hoekpunte waar die verskillende pare sye ontmoet) is ʼn simmetrielyn.' },
        { difficulty: 'Medium', question: 'Verduidelik waarom ʼn vierkant meer simmetrielyne (4) het as ʼn ruit (2), selfs al het beide vorms 4 gelyke sye.', answer: 'ʼn Vierkant het al 4 sye gelyk EN al 4 hoeke gelyk aan 90°, terwyl ʼn ruit al 4 sye gelyk het maar sy hoeke nie 90° is nie. Die gelyke sye gee albei vorms hul 2 diagonale simmetrielyne. Maar omdat ʼn vierkant se hoeke ook almal gelyk is (en dit twee pare parallelle sye het wat by regte hoeke ontmoet), kry dit 2 ekstra simmetrielyne — die vertikale en horisontale middellyne — wat ʼn skuins ruit nie het nie, aangesien ʼn horisontale of vertikale vou op ʼn ruit nie ooreenstemmende helftes gee nie, tensy die hoeke ook 90° is.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierkant, ʼn vlieër, en ʼn skuins parallelogram word vergelyk. Watter een het 0 simmetrielyne?', checkMode: 'auto', correctAnswer: 'die parallelogram', correctAnswers: ['die parallelogram', 'parallelogram', 'skuins parallelogram'], explanation: 'ʼn Skuins parallelogram (nie ʼn reghoek of ruit nie) het 0 simmetrielyne. ʼn Vierkant het 4, en ʼn vlieër het 1.' },
        { difficulty: 'Medium', question: 'ʼn Vlieër se kort diagonaal (tussen die hoekpunte waar sy twee gelyke sye ontmoet) is geteken. Is hierdie diagonaal ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Die kort diagonaal van ʼn vlieër is nie ʼn simmetrielyn nie — net die lang diagonaal (tussen die hoekpunte waar die verskillende pare sye ontmoet) gee ooreenstemmende spieëlhelftes.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant en ʼn reghoek (nie ʼn vierkant nie) het albei diagonale geteken. In watter van hierdie twee vorms is die diagonale simmetrielyne?', checkMode: 'auto', correctAnswer: 'die vierkant', correctAnswers: ['die vierkant', 'vierkant'], explanation: 'ʼn Vierkant se diagonale is simmetrielyne omdat al 4 sye gelyk is. ʼn Nie-vierkantige reghoek se diagonale is nie simmetrielyne nie omdat sy sye nie almal gelyk is nie.' },
        { difficulty: 'Medium', question: 'Die helfte van ʼn simmetriese vorm is geteken met ʼn vertikale simmetrielyn. ʼn Hoekpunt op die gegewe helfte is 7 cm van die lyn. Hoe ver van die lyn moet die ooreenstemmende hoekpunt op die ontbrekende helfte geteken word?', checkMode: 'auto', correctAnswer: '7', correctAnswers: ['7', '7cm', '7 cm'], explanation: 'Die ooreenstemmende punt moet presies dieselfde afstand van die simmetrielyn wees: 7 cm, aan die teenoorgestelde kant.' },
        { difficulty: 'Medium', question: 'Die helfte van ʼn simmetriese vorm is geteken met ʼn horisontale simmetrielyn. ʼn Punt op die gegewe helfte is 1 cm bo die lyn, en ʼn ander is 4,5 cm bo die lyn. Hoe ver onder die lyn moet die twee ooreenstemmende punte op die voltooide helfte geteken word?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Afstand onder die lyn vir die punt 1 cm bo', correctAnswer: '1', correctAnswers: ['1', '1cm', '1 cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees: 1 cm onder.' },
          { label: 'b) Afstand onder die lyn vir die punt 4,5 cm bo', correctAnswer: '4,5', correctAnswers: ['4.5', '4,5', '4.5cm', '4,5cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees: 4,5 cm onder.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Leerder voltooi die helfte van ʼn simmetriese vorm, maar skuif per ongeluk elke punt 1 cm nader aan die simmetrielyn as wat dit moet wees. Sal die voltooide vorm ʼn ware simmetrielyn langs daardie lyn hê? Verduidelik.', answer: 'Nee, die voltooide vorm sal nie ʼn ware simmetrielyn langs daardie lyn hê nie. Alhoewel die algemene buitelyn dalk soortgelyk lyk, moet elke punt presies dieselfde afstand van die lyn wees as sy ooreenstemmende punt op die ander helfte. Om al die punte 1 cm te skuif, beteken hulle is nie meer dieselfde afstand van die lyn as die oorspronklike punte nie, dus sal die vou van die vorm nie die twee helftes presies bo-op mekaar laat val nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "ʼn Ruit en ʼn vierkant is basies dieselfde vorm, dus moet hulle dieselfde aantal simmetrielyne hê." Verduidelik waarom dit verkeerd is, met verwysing na hul hoeke.', answer: 'Dit is verkeerd. Alhoewel beide ʼn ruit en ʼn vierkant 4 gelyke sye het, het ʼn vierkant addisioneel al 4 hoeke gelyk aan 90°, terwyl ʼn ruit dit nie het nie (tensy dit toevallig ook ʼn vierkant is). Hierdie ekstra eienskap gee die vierkant 2 meer simmetrielyne — die vertikale en horisontale middellyne — bo en behalwe die 2 diagonale simmetrielyne wat albei vorms deel weens hul gelyke sye. Dus het ʼn vierkant 4 simmetrielyne in totaal, terwyl ʼn ruit net 2 het. Gelyke sye alleen waarborg nie dieselfde aantal simmetrielyne nie; die hoeke maak ook saak.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "ʼn Vlieër het twee diagonale, en aangesien diagonale dikwels simmetrielyne in vierhoeke gee, moet ʼn vlieër 2 simmetrielyne hê." Verduidelik waarom hierdie redenasie foutief is, en gee die vlieër se werklike aantal simmetrielyne.', answer: 'Hierdie redenasie is foutief omdat nie elke diagonaal in elke vierhoek outomaties ʼn simmetrielyn is nie — dit hang af van of die vou langs daardie spesifieke diagonaal ware spieëlbeeld-helftes gee. In ʼn vlieër verskil die twee pare aangrensende gelyke sye in lengte van mekaar. Net die lang diagonaal (tussen die hoekpunte waar die verskillende pare sye ontmoet) gee ooreenstemmende helftes. Die kort diagonaal doen dit nie, want dit sou probeer om een paar gelyke sye teenoor ʼn ander paar van verskillende grootte te laat pas. Dus het ʼn vlieër net 1 simmetrielyn, nie 2 nie — om bloot twee diagonale te hê, waarborg nie twee simmetrielyne nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn vierkant en ʼn reëlmatige seshoek. Watter vorm het meer simmetrielyne, en met hoeveel?', checkMode: 'auto', correctAnswer: 'seshoek met 2', correctAnswers: ['seshoek met 2', 'die seshoek met 2', 'seshoek, 2 meer'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne, en ʼn vierkant het 4. Die verskil is 6 − 4 = 2, dus het die seshoek 2 meer simmetrielyne as die vierkant.' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm word gemaak van ʼn ruit met ʼn klein gelyksydige driehoek presies gesentreer op een van sy sye aangeheg (na buite wysend). Die ruit alleen het 2 simmetrielyne (albei diagonale). Verduidelik hoeveel simmetrielyne die saamgestelde vorm het, en waarom die ruit se oorspronklike diagonale dalk nie meer werk nie.', answer: 'Die saamgestelde vorm het hoogstens 1 simmetrielyn, en net as die driehoek presies gesentreer op een sy aangeheg is, in lyn met een van die ruit se oorspronklike diagonale. As die driehoek aan ʼn sy aangeheg is eerder as by ʼn hoekpunt waar ʼn diagonaal begin, sal geen van die ruit se oorspronklike diagonale steeds werk as simmetrielyne vir die gekombineerde vorm nie, want die bygevoegde driehoek sit ongelyk aan die een kant van elk van daardie diagonale voue — die een helfte sou die driehoek-uitstulping insluit en die ander nie. Net ʼn lyn wat toevallig deur beide die driehoek se aanhegpunt en die ooreenstemmende punt op die ruit gaan op ʼn manier wat beide helftes gebalanseerd hou, kan steeds ʼn simmetrielyn wees, en in die meeste sulke gekombineerde vorms verminder dit die totaal tot hoogstens 1 lyn, of soms 0, afhangende van presies waar die driehoek aangeheg is.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue simmetrielyne in enige vorm toets, teken en daaroor redeneer, insluitend vierhoek-diagonale.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — kyk weer na enige vraag wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan die vou-toets en die vierhoek-diagonaalreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Stel 3',
      questions: [
        { difficulty: 'Easy', question: 'ʼn Vorm word langs ʼn lyn gevou, en elke punt aan die een kant het ʼn perfekte ooreenstemmende punt aan die ander kant. Is hierdie lyn ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'As elke punt presies pas wanneer gevou langs die lyn, dan is die lyn ʼn simmetrielyn.' },
        { difficulty: 'Easy', question: 'ʼn Vlieër het sy lang diagonaal geteken (tussen die hoekpunte waar sy twee verskillende pare gelyke sye ontmoet), soos getoon. Is hierdie diagonaal ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'ja', correctAnswers: ['ja', 'Ja'], explanation: 'Die lang diagonaal van ʼn vlieër is ʼn simmetrielyn — om daarlangs te vou, weerspieël elke paar gelyke sye die ander paar.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,30 160,75 110,145 60,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="110" y1="30" x2="110" y2="145" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Vlieër het sy kort diagonaal geteken (tussen die hoekpunte waar sy twee gelyke sye ontmoet), soos getoon. Is hierdie diagonaal ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Die kort diagonaal van ʼn vlieër is nie ʼn simmetrielyn nie — net die lang diagonaal gee ooreenstemmende spieëlhelftes.', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><polygon points="110,30 160,75 110,145 60,75" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><line x1="60" y1="75" x2="160" y2="75" stroke="#374151" stroke-width="1.5" stroke-dasharray="5,4"/></svg>' },
        { difficulty: 'Easy', question: 'ʼn Lyn wat op ʼn vorm geteken is, verdeel dit in twee stukke van gelyke oppervlakte, maar die twee stukke is verskillende vorms. Is hierdie lyn noodwendig ʼn simmetrielyn?', checkMode: 'auto', correctAnswer: 'nee', correctAnswers: ['nee', 'Nee'], explanation: 'Gelyke oppervlakte is nie dieselfde as ʼn spieëlbeeld nie. ʼn Simmetrielyn vereis dat die twee helftes ware spieëlbeelde van mekaar is, punt vir punt — nie net gelyk in oppervlakte nie.' },
        { difficulty: 'Easy-Medium', question: 'Hoeveel simmetrielyne het ʼn ruit (4 gelyke sye, geen regte hoeke nie)?', checkMode: 'auto', correctAnswer: '2', correctAnswers: ['2', 'twee'], explanation: 'ʼn Ruit het 2 simmetrielyne, en albei is sy diagonale.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Reëlmatige seshoek het hoeveel simmetrielyne?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', 'ses'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne — 3 deur pare teenoorgestelde hoekpunte, en 3 deur die middelpunte van pare teenoorgestelde sye.' },
        { difficulty: 'Easy-Medium', question: 'ʼn Skalene driehoek het drie sye wat almal verskillende lengtes het. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], explanation: 'ʼn Skalene driehoek het 0 simmetrielyne — aangesien al drie sye verskillende lengtes het, kan geen vou ooit twee ooreenstemmende spieëlhelftes gee nie.' },
        { difficulty: 'Medium', question: 'ʼn Vierkant het hoeveel simmetrielyne, en watter tipes is hulle?', checkMode: 'auto', correctAnswer: '4 vertikaal horisontaal en twee diagonaal', correctAnswers: ['4, vertikaal, horisontaal en twee diagonaal', '4 vertikaal horisontaal en twee diagonaal', 'vier, vertikaal, horisontaal en albei diagonale', '4 (vertikaal, horisontaal, 2 diagonaal)'], explanation: 'ʼn Vierkant het 4 simmetrielyne: een vertikaal, een horisontaal, en twee diagonaal (omdat al 4 sye gelyk is en al 4 hoeke 90° is).' },
        { difficulty: 'Medium', question: 'ʼn Skuins parallelogram (geen regte hoeke nie, aangrensende sye van verskillende lengtes) word ondersoek. Hoeveel simmetrielyne het dit?', checkMode: 'auto', correctAnswer: '0', correctAnswers: ['0', 'nul', 'geen'], explanation: 'ʼn Skuins parallelogram het 0 simmetrielyne — nóg sy diagonale nóg ʼn vertikale/horisontale lyn gee ooreenstemmende spieëlhelftes.' },
        { difficulty: 'Medium', question: 'Verduidelik waarom die diagonaal van ʼn reghoek (nie ʼn vierkant nie) die vou-toets faal, selfs al gaan dit deur die presiese middelpunt van die reghoek.', answer: 'Die diagonaal van ʼn nie-vierkantige reghoek gaan deur die middelpunt, maar wanneer jy daarlangs vou, is die twee driehoekige helftes gelyk in oppervlakte en dieselfde vorm as mekaar, maar hulle is nie as ware spieëlbeelde oor daardie presiese voulyn geposisioneer nie — die regte hoek van elke driehoek eindig aan die verkeerde kant om met sy paar ooreen te stem. Om deur die middelpunt te gaan is nodig vir ʼn simmetrielyn, maar die twee helftes moet ook as ʼn presiese spieëlbeeld saamval, wat net gebeur vir ʼn reghoek se vertikale en horisontale middellyne, nie sy diagonale nie.', checkMode: 'self' },
        { difficulty: 'Medium', question: 'ʼn Vierkant, ʼn ruit en ʼn vlieër word vergelyk. Watter van hierdie drie vorms het die minste simmetrielyne?', checkMode: 'auto', correctAnswer: 'die vlieër', correctAnswers: ['die vlieër', 'vlieër'], explanation: 'ʼn Vlieër het net 1 simmetrielyn, in vergelyking met 2 vir ʼn ruit en 4 vir ʼn vierkant.' },
        { difficulty: 'Medium', question: 'ʼn Ruit het albei diagonale geteken. ʼn Reghoek (nie ʼn vierkant nie) het ook albei diagonale geteken. In watter vorm is BEIDE diagonale simmetrielyne?', checkMode: 'auto', correctAnswer: 'die ruit', correctAnswers: ['die ruit', 'ruit'], explanation: 'In ʼn ruit is al 4 sye gelyk, dus is albei diagonale simmetrielyne. In ʼn nie-vierkantige reghoek is geen van die diagonale ʼn simmetrielyn nie.' },
        { difficulty: 'Medium', question: 'ʼn Vlieër se lang diagonaal en ʼn vierkant se diagonaal is albei simmetrielyne. Wat is die sleuteleienskap wat beide ʼn vlieër se lang diagonaal en ʼn vierkant se diagonaal nodig het om ʼn ware simmetrielyn te wees?', checkMode: 'auto', correctAnswer: 'gelyke sye wat by die vou ontmoet', correctAnswers: ['gelyke sye wat by die vou ontmoet', 'gelyke sye aan weerskante van die vou', 'die sye aan weerskante moet gelyk wees'], explanation: 'In albei gevalle werk die diagonaal net as ʼn simmetrielyn omdat die twee sye wat by elke punt van die vou ontmoet, gelyk in lengte is — in ʼn vierkant is al die sye gelyk, en in ʼn vlieër is elke paar aangrensende sye langs die lang diagonaal gelyk.' },
        { difficulty: 'Medium', question: 'Die helfte van ʼn simmetriese embleem is geteken met ʼn diagonale simmetrielyn. ʼn Punt op die gegewe helfte is 6 cm van die lyn, gemeet loodreg op die lyn. Hoe ver van die lyn, op dieselfde manier gemeet, moet die ooreenstemmende punt op die ontbrekende helfte geteken word?', checkMode: 'auto', correctAnswer: '6', correctAnswers: ['6', '6cm', '6 cm'], explanation: 'Ongeag of die simmetrielyn vertikaal, horisontaal of diagonaal is, moet die ooreenstemmende punt presies dieselfde loodregte afstand van die lyn wees: 6 cm, aan die teenoorgestelde kant.' },
        { difficulty: 'Medium', question: 'Die helfte van ʼn simmetriese vorm is geteken met ʼn vertikale simmetrielyn. ʼn Punt op die gegewe helfte is 3 cm links van die lyn, en ʼn ander is 8 cm links van die lyn. Hoe ver regs van die lyn moet die twee ooreenstemmende punte op die voltooide helfte geteken word?', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Afstand regs van die lyn vir die punt 3 cm links', correctAnswer: '3', correctAnswers: ['3', '3cm', '3 cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees: 3 cm regs.' },
          { label: 'b) Afstand regs van die lyn vir die punt 8 cm links', correctAnswer: '8', correctAnswers: ['8', '8cm', '8 cm'], explanation: 'Die ooreenstemmende punt moet dieselfde afstand van die lyn wees: 8 cm regs.' },
        ] },
        { difficulty: 'Medium', question: 'ʼn Leerder teken die ontbrekende helfte van ʼn simmetriese vorm met ʼn diagonale simmetrielyn, maar meet elke ooreenstemmende punt se afstand reguit horisontaal in plaas van loodreg op die diagonale lyn. Verduidelik waarom dit ʼn verkeerde resultaat sal gee.', answer: 'Dit sal ʼn verkeerde resultaat gee omdat ʼn simmetrielyn vereis dat afstande loodreg (in ʼn regte hoek) op die lyn self gemeet word, nie bloot reguit horisontaal nie. Wanneer die simmetrielyn diagonaal is, is "reguit horisontaal" nie dieselfde rigting as "loodreg op die lyn" nie, dus sal om op die verkeerde manier te meet, die weerspieëlde punte op die verkeerde posisies plaas, en die voltooide vorm sal nie presies langs die diagonale lyn op homself vou nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "ʼn Vlieër en ʼn ruit het albei 4 sye gerangskik as twee pare aangrensende gelyke sye, dus moet hulle dieselfde aantal simmetrielyne hê." Verduidelik waarom dit verkeerd is.', answer: 'Dit is verkeerd omdat in ʼn ruit al 4 sye gelyk is aan mekaar (nie net twee aparte pare nie), terwyl ʼn vlieër twee pare aangrensende gelyke sye het wat verskil in lengte van mekaar. Hierdie verskil maak saak: in ʼn ruit gee albei diagonale ooreenstemmende spieëlhelftes omdat elke sy wat in elke vou gebruik word dieselfde lengte is, wat 2 simmetrielyne gee. In ʼn vlieër gee net die lang diagonaal ooreenstemmende helftes, want die kort diagonaal sou probeer om sye van twee verskillende lengtes teenoor mekaar te laat pas, wat net 1 simmetrielyn gee. Om "twee pare aangrensende gelyke sye" te hê, is nie dieselfde voorwaarde as "al vier sye gelyk" nie, dus het die twee vorms nie dieselfde aantal simmetrielyne nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'ʼn Leerder beweer: "Aangesien ʼn vierkant 4 simmetrielyne het en ʼn reghoek 2 het, moet ʼn vorm halfpad tussen ʼn vierkant en ʼn reghoek (soos ʼn reghoek wat amper, maar nie heeltemal nie, ʼn vierkant is) 3 simmetrielyne hê." Verduidelik waarom hierdie redenasie verkeerd is.', answer: 'Hierdie redenasie is verkeerd omdat die aantal simmetrielyne nie geleidelik verander namate ʼn vorm se verhoudings verander nie — dit hang af van of ʼn presiese eienskap (al die sye gelyk) waar is of nie. Solank ʼn reghoek se lengte en breedte nie presies gelyk is nie, selfs al is hulle baie naby aan mekaar, faal sy diagonale steeds om ooreenstemmende spieëlhelftes te gee, dus het dit steeds presies 2 simmetrielyne (vertikaal en horisontaal), nie 3 nie. Net wanneer die lengte en breedte presies gelyk word, word die vorm ʼn vierkant en kry dit skielik die ekstra 2 diagonale simmetrielyne, wat direk van 2 na 4 spring. Daar is geen tussenin-vorm met presies 3 simmetrielyne in hierdie familie van vorms nie.', checkMode: 'self' },
        { difficulty: 'Hard', question: 'Vergelyk ʼn ruit en ʼn reëlmatige seshoek. Watter vorm het meer simmetrielyne, en met hoeveel?', checkMode: 'auto', correctAnswer: 'seshoek met 4', correctAnswers: ['seshoek met 4', 'die seshoek met 4', 'seshoek, 4 meer'], explanation: 'ʼn Reëlmatige seshoek het 6 simmetrielyne, en ʼn ruit het 2. Die verskil is 6 − 2 = 4, dus het die seshoek 4 meer simmetrielyne as die ruit.' },
        { difficulty: 'Hard', question: 'ʼn Saamgestelde vorm word gemaak van ʼn vlieër met ʼn klein vierkant presies gesentreer op die vlieër se lang diagonaal aangeheg, aan die breër punt. Die vlieër alleen het 1 simmetrielyn (sy lang diagonaal). Verduidelik of die saamgestelde vorm steeds hierdie simmetrielyn het, en waarom om die vierkant in hierdie spesifieke posisie aan te heg, dit behou, terwyl om dit uit die middel aan te heg dit nie sou nie.', answer: 'As die klein vierkant presies gesentreer op die vlieër se lang diagonaal aangeheg is, het die saamgestelde vorm steeds daardie selfde simmetrielyn, want die vierkant self is simmetries om ʼn lyn deur sy middelpunt, en om daardie simmetrielyn presies in lyn te bring met die vlieër se bestaande lang diagonaal, beteken beide die vlieër-deel en die vierkant-deel weerspieël korrek oor dieselfde vou. As die vierkant egter uit die middel aangeheg is (na die een kant van die lang diagonaal geskuif), sal die vierkant se eie linker- en regterkant nie meer gebalanseerd oor die vlieër se diagonaal wees nie, dus sal om langs daardie lyn te vou ʼn deel van die vierkant onafgestem aan die een kant laat — wat die simmetrie verbreek. Presiese, gesentreerde belyning met die bestaande simmetrielyn is noodsaaklik vir die gekombineerde vorm om daardie lyn te behou.', checkMode: 'self' },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Uitstekend! Jy kan met selfvertroue simmetrielyne in enige vorm toets, teken en daaroor redeneer, insluitend vierhoek-diagonale.' },
        { minScore: 15, message: 'Goeie werk! Jy is seker van die meeste hiervan — kyk weer na enige vraag wat jy verkeerd gehad het.' },
        { minScore: 10, message: 'Goeie poging! Gaan die vou-toets en die vierhoek-diagonaalreëls weer deur, en probeer weer.' },
        { minScore: 0, message: 'Hou aan — werk weer deur die studiegids en probeer hierdie stel weer.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Uitstekend! Jy het simmetrie bemeester.' },
      { minScore: 15, message: 'Goeie werk!' },
      { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
      { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Uitstekend! Jy het simmetrie bemeester.' },
    { minScore: 15, message: 'Goeie werk!' },
    { minScore: 10, message: 'Goeie poging, gaan weer deur en probeer weer.' },
    { minScore: 0, message: 'Hou aan, werk weer deur die gids.' },
  ],
}
