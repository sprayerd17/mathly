import type { TopicData } from './numbers-operations'

export const topicData: TopicData = {
  title: 'Optelling en Aftrekking',
  grade: 4,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 1 — WAT IS OPTELLING?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-addition',
      title: 'Wat is Optelling?',
      icon: '➕',
      explanation:
        `<p style="margin-bottom:14px"><strong>Optelling</strong> beteken om twee of meer getalle bymekaar te tel om die <strong>totaal</strong> te vind. Die antwoord wat jy kry wanneer jy optel, word die <strong>som</strong> genoem. Optelling maak die getal altyd groter.</p>` +

        `<p style="margin-bottom:8px"><strong>Drie alledaagse voorbeelde:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>Jy het <strong>1 245</strong> plakkers en jou vriend gee jou nog <strong>312</strong> meer. Hoeveel het jy <strong>altesaam</strong>? → 1 245 + 312 = 1 557</li>` +
        `<li>ʼn Skoolbiblioteek het <strong>2 430</strong> boeke en koop <strong>1 250</strong> nuwe boeke. Hoeveel boeke is daar <strong>in totaal</strong>? → 2 430 + 1 250 = 3 680</li>` +
        `<li>ʼn Boer pluk <strong>3 120</strong> lemoene op Maandag en <strong>1 405</strong> op Dinsdag. Wat is die <strong>totale</strong> aantal lemoene? → 3 120 + 1 405 = 4 525</li>` +
        `</ul>` +

        `<p style="margin-bottom:8px"><strong>Sleutelwoorde wat jou vertel om by te tel in ʼn woordprobleem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">altesaam</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">totaal</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">som</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">meer as</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">vermeerder</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">in totaal</span>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Kolomoptelling — lyn altyd die syfers op:</strong></p>` +
        `<p style="margin-bottom:12px">Voordat jy optel, skryf die getalle een onder die ander. Maak seker <strong>ene</strong> is onder <strong>ene</strong>, <strong>tiene</strong> onder <strong>tiene</strong>, <strong>honderde</strong> onder <strong>honderde</strong>, en <strong>duisende</strong> onder <strong>duisende</strong>. Tel dan een kolom op ʼn slag, beginnende by die ene.</p>` +
        `<div style="display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
        `<table style="border-collapse:collapse;font-size:0.95em;text-align:center">` +
        `<tbody><tr>` +
        `<td style="padding:8px 20px;font-weight:700;color:#dc2626;border-right:1px solid #e5e7eb">Duisende (D)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#d97706;border-right:1px solid #e5e7eb">Honderde (H)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#16a34a;border-right:1px solid #e5e7eb">Tiene (T)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#2563eb">Ene (E)</td>` +
        `</tr></tbody></table></div>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 1 (sonder oordra) ─────────────────────────
        {
          question: 'Bereken 2 345 + 1 423',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">7</span>' +
            '<span style="color:#16a34a;font-weight:700">6</span>' +
            '<span style="color:#2563eb;font-weight:700">8</span>',
          steps: [
            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">5</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">+ 1</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">3</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Tel die <span style="color:#2563eb;font-weight:700">ene</span> op: <span style="color:#2563eb;font-weight:700">5</span> + <span style="color:#2563eb;font-weight:700">3</span> = <span style="color:#2563eb;font-weight:700">8</span>. Skryf <span style="color:#2563eb;font-weight:700">8</span> in die ene-kolom.',

            'Tel die <span style="color:#16a34a;font-weight:700">tiene</span> op: <span style="color:#16a34a;font-weight:700">4</span> + <span style="color:#16a34a;font-weight:700">2</span> = <span style="color:#16a34a;font-weight:700">6</span>. Skryf <span style="color:#16a34a;font-weight:700">6</span> in die tiene-kolom.',

            'Tel die <span style="color:#d97706;font-weight:700">honderde</span> op: <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#d97706;font-weight:700">4</span> = <span style="color:#d97706;font-weight:700">7</span>. Skryf <span style="color:#d97706;font-weight:700">7</span> in die honderde-kolom.',

            'Tel die <span style="color:#dc2626;font-weight:700">duisende</span> op: <span style="color:#dc2626;font-weight:700">2</span> + <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 2 (met oordra) ────────────────────────────
        {
          question: 'Bereken 1 867 + 1 345 (met oordra)',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">2</span>' +
            '<span style="color:#16a34a;font-weight:700">1</span>' +
            '<span style="color:#2563eb;font-weight:700">2</span>',
          steps: [
            'Tel die <span style="color:#2563eb;font-weight:700">ene</span> op: <span style="color:#2563eb;font-weight:700">7</span> + <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">12</span>. Dit is groter as 9, dus kan ons nie twee syfers in een kolom pas nie. Skryf <span style="color:#2563eb;font-weight:700">2</span> in die ene-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na bo-op die tiene-kolom.',

            'Tel die <span style="color:#16a34a;font-weight:700">tiene</span> op: <span style="color:#16a34a;font-weight:700">6</span> + <span style="color:#16a34a;font-weight:700">4</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#16a34a;font-weight:700">11</span>. Skryf <span style="color:#16a34a;font-weight:700">1</span> in die tiene-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na bo-op die honderde-kolom.',

            'Tel die <span style="color:#d97706;font-weight:700">honderde</span> op: <span style="color:#d97706;font-weight:700">8</span> + <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#d97706;font-weight:700">12</span>. Skryf <span style="color:#d97706;font-weight:700">2</span> in die honderde-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na bo-op die duisende-kolom.',

            'Tel die <span style="color:#dc2626;font-weight:700">duisende</span> op: <span style="color:#dc2626;font-weight:700">1</span> + <span style="color:#dc2626;font-weight:700">1</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',

            '<div style="padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Kolomoptelling-uitleg wat 1 867 + 1 345 toon met oorgedraagde syfers bo elke kolom in oranje getoon</div>',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 2 — WAT IS AFTREKKING?
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'what-is-subtraction',
      title: 'Wat is Aftrekking?',
      icon: '➖',
      explanation:
        `<p style="margin-bottom:14px"><strong>Aftrekking</strong> beteken om een getal van ʼn ander weg te neem om die <strong>verskil</strong> te vind. Die antwoord wat jy kry wanneer jy aftrek, word die <strong>verskil</strong> genoem. Aftrekking maak die getal altyd kleiner.</p>` +

        `<p style="margin-bottom:8px"><strong>Drie alledaagse voorbeelde:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>Jy het <strong>R3 450</strong> en jy spandeer <strong>R1 230</strong>. Hoeveel geld het jy <strong>oor</strong>? → 3 450 − 1 230 = 2 220</li>` +
        `<li>ʼn Skool het <strong>1 865</strong> leerders. <strong>342</strong> leerders gaan op ʼn uitstappie. Hoeveel leerders is <strong>nog by die skool</strong>? → 1 865 − 342 = 1 523</li>` +
        `<li>ʼn Fabriek maak <strong>4 500</strong> bottels. <strong>1 250</strong> word verkoop. Wat is die <strong>verskil</strong> tussen die aantal gemaak en die aantal verkoop? → 4 500 − 1 250 = 3 250</li>` +
        `</ul>` +

        `<p style="margin-bottom:8px"><strong>Sleutelwoorde wat jou vertel om af te trek in ʼn woordprobleem:</strong></p>` +
        `<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px">` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">verskil</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">minder as</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">wegneem</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">min</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">verminder</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel meer</span>` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:4px 14px;font-weight:600;font-size:0.9em">hoeveel oor</span>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Kolomaftrekking — lyn altyd die syfers op:</strong></p>` +
        `<p style="margin-bottom:12px">Skryf die groter getal bo-aan en die kleiner getal daaronder, en lyn die kolomme versigtig op. Trek een kolom op ʼn slag af, beginnende by die <strong>ene</strong>. As die boonste syfer kleiner is as die onderste syfer, moet jy <strong>leen</strong> van die kolom aan die linkerkant.</p>` +
        `<div style="display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">` +
        `<table style="border-collapse:collapse;font-size:0.95em;text-align:center">` +
        `<tbody><tr>` +
        `<td style="padding:8px 20px;font-weight:700;color:#dc2626;border-right:1px solid #e5e7eb">Duisende (D)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#d97706;border-right:1px solid #e5e7eb">Honderde (H)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#16a34a;border-right:1px solid #e5e7eb">Tiene (T)</td>` +
        `<td style="padding:8px 20px;font-weight:700;color:#2563eb">Ene (E)</td>` +
        `</tr></tbody></table></div>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 3 (sonder leen) ────────────────────────────
        {
          question: 'Bereken 4 768 − 2 345',
          answer:
            '<span style="color:#dc2626;font-weight:700">2</span> ' +
            '<span style="color:#d97706;font-weight:700">4</span>' +
            '<span style="color:#16a34a;font-weight:700">2</span>' +
            '<span style="color:#2563eb;font-weight:700">3</span>',
          steps: [
            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">7</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">6</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">8</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">− 2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">5</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Trek die <span style="color:#2563eb;font-weight:700">ene</span> af: <span style="color:#2563eb;font-weight:700">8</span> − <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">3</span>. Skryf <span style="color:#2563eb;font-weight:700">3</span> in die ene-kolom.',

            'Trek die <span style="color:#16a34a;font-weight:700">tiene</span> af: <span style="color:#16a34a;font-weight:700">6</span> − <span style="color:#16a34a;font-weight:700">4</span> = <span style="color:#16a34a;font-weight:700">2</span>. Skryf <span style="color:#16a34a;font-weight:700">2</span> in die tiene-kolom.',

            'Trek die <span style="color:#d97706;font-weight:700">honderde</span> af: <span style="color:#d97706;font-weight:700">7</span> − <span style="color:#d97706;font-weight:700">3</span> = <span style="color:#d97706;font-weight:700">4</span>. Skryf <span style="color:#d97706;font-weight:700">4</span> in die honderde-kolom.',

            'Trek die <span style="color:#dc2626;font-weight:700">duisende</span> af: <span style="color:#dc2626;font-weight:700">4</span> − <span style="color:#dc2626;font-weight:700">2</span> = <span style="color:#dc2626;font-weight:700">2</span>. Skryf <span style="color:#dc2626;font-weight:700">2</span> in die duisende-kolom.',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 4 (met leen) ───────────────────────────────
        {
          question: 'Bereken 5 304 − 1 867 (met leen)',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> ' +
            '<span style="color:#d97706;font-weight:700">4</span>' +
            '<span style="color:#16a34a;font-weight:700">3</span>' +
            '<span style="color:#2563eb;font-weight:700">7</span>',
          steps: [
            'Kyk na die <span style="color:#2563eb;font-weight:700">ene</span>: <span style="color:#2563eb;font-weight:700">4</span> − <span style="color:#2563eb;font-weight:700">7</span>. Ons kan nie 7 van 4 wegneem nie, want 4 is kleiner. Ons moet <strong>leen</strong>.',

            'Kyk na die <span style="color:#16a34a;font-weight:700">tiene</span>-syfer: dit is <span style="color:#16a34a;font-weight:700">0</span>. Ons kan nie van 0 leen nie. Ons moet een kolom verder na links skuif na die <span style="color:#d97706;font-weight:700">honderde</span>.',

            'Leen <span style="color:#ea580c;font-weight:700">1</span> van die <span style="color:#d97706;font-weight:700">honderde</span>: die honderde-syfer <span style="color:#d97706;font-weight:700">3</span> word <span style="color:#ea580c;font-weight:700">2</span>. Die <span style="color:#16a34a;font-weight:700">tiene</span>-kolom ontvang die geleende honderd en word <span style="color:#ea580c;font-weight:700">10</span>.',

            'Leen nou <span style="color:#ea580c;font-weight:700">1</span> van die <span style="color:#16a34a;font-weight:700">tiene</span>: die tiene-waarde <span style="color:#ea580c;font-weight:700">10</span> word <span style="color:#ea580c;font-weight:700">9</span>. Die <span style="color:#2563eb;font-weight:700">ene</span>-kolom ontvang die geleende tiental: <span style="color:#2563eb;font-weight:700">4</span> word <span style="color:#ea580c;font-weight:700">14</span>.',

            'Trek die <span style="color:#2563eb;font-weight:700">ene</span> af: <span style="color:#ea580c;font-weight:700">14</span> − <span style="color:#2563eb;font-weight:700">7</span> = <span style="color:#2563eb;font-weight:700">7</span>. Skryf <span style="color:#2563eb;font-weight:700">7</span> in die ene-kolom.',

            'Trek die <span style="color:#16a34a;font-weight:700">tiene</span> af: <span style="color:#ea580c;font-weight:700">9</span> − <span style="color:#16a34a;font-weight:700">6</span> = <span style="color:#16a34a;font-weight:700">3</span>. Skryf <span style="color:#16a34a;font-weight:700">3</span> in die tiene-kolom.',

            'Kyk na die <span style="color:#d97706;font-weight:700">honderde</span>: <span style="color:#ea580c;font-weight:700">2</span> − <span style="color:#d97706;font-weight:700">8</span>. Ons kan nie 8 van 2 wegneem nie, want 2 is kleiner. Ons moet <strong>leen</strong> van die <span style="color:#dc2626;font-weight:700">duisende</span>-kolom.',

            'Leen <span style="color:#ea580c;font-weight:700">1</span> van die <span style="color:#dc2626;font-weight:700">duisende</span>: die duisende-syfer <span style="color:#dc2626;font-weight:700">5</span> word <span style="color:#ea580c;font-weight:700">4</span>. Die <span style="color:#d97706;font-weight:700">honderde</span>-kolom ontvang die geleende duisend: <span style="color:#ea580c;font-weight:700">2</span> word <span style="color:#ea580c;font-weight:700">12</span>.',

            'Trek die <span style="color:#d97706;font-weight:700">honderde</span> af: <span style="color:#ea580c;font-weight:700">12</span> − <span style="color:#d97706;font-weight:700">8</span> = <span style="color:#d97706;font-weight:700">4</span>. Skryf <span style="color:#d97706;font-weight:700">4</span> in die honderde-kolom.',

            'Trek die <span style="color:#dc2626;font-weight:700">duisende</span> af: <span style="color:#ea580c;font-weight:700">4</span> − <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',

            '<div style="padding:14px 18px;border:2px dashed #cbd5e1;border-radius:10px;background:#f8fafc;color:#64748b;font-size:0.85em;font-style:italic">📊 Diagram-plekhouer: Kolomaftrekking-uitleg wat 5 304 − 1 867 toon met leen duidelik bo elke kolom in oranje getoon</div>',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 3 — SKAT VOORDAT JY BEREKEN
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'estimating',
      title: 'Skat Voordat Jy Bereken',
      icon: '🎯',
      explanation:
        `<p style="margin-bottom:14px"><strong>Skatting</strong> beteken om ʼn <strong>benaderde antwoord</strong> te vind — ʼn antwoord wat naby, maar nie presies is nie — <em>voordat</em> jy die werklike berekening doen. ʼn Goeie skatting help jou om te kyk of jou finale antwoord redelik is. As jou werklike antwoord baie anders is as jou skatting, het jy waarskynlik iewers ʼn fout gemaak en moet jy jou werk nagaan.</p>` +

        `<p style="margin-bottom:8px"><strong>Drie stappe om te skat:</strong></p>` +
        `<ol style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li><strong>Stap 1:</strong> Rond elke getal af na die naaste <span style="color:#d97706;font-weight:700">100</span>.</li>` +
        `<li><strong>Stap 2:</strong> Tel die afgeronde getalle by of trek hulle af om jou <strong>skatting</strong> te kry.</li>` +
        `<li><strong>Stap 3:</strong> Vergelyk jou skatting met jou werklike antwoord — hulle behoort naby aan mekaar te wees.</li>` +
        `</ol>` +

        `<p style="margin-bottom:0">Onthou: ʼn skatting hoef nie presies te wees nie — dit moet net <strong>naby</strong> wees. ʼn Verskil van ʼn paar tiene tussen jou skatting en jou werklike antwoord is heeltemal aanvaarbaar.</p>`,

      workedExamples: [
        {
          question: 'Skat 3 456 + 2 234, vergelyk dan jou skatting met die werklike antwoord',
          answer: 'Skatting: 5 700 · Werklik: 5 690 · Hierdie is naby aan mekaar, dus maak die antwoord sin ✓',
          steps: [
            'Rond <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> af na die naaste <span style="color:#d97706;font-weight:700">100</span>: kyk na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> — dit is <span style="color:#16a34a;font-weight:700">5</span>. Omdat 5 ≥ 5, rond ons <strong>op</strong>. Die <span style="color:#d97706;font-weight:700">honderde-syfer</span> <span style="color:#d97706;font-weight:700">4</span> word <span style="color:#d97706;font-weight:700">5</span>, en die tiene en ene word 0. Afgeronde waarde: <strong>3 500</strong>.',

            'Rond <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">2</span><span style="color:#16a34a;font-weight:700">3</span><span style="color:#2563eb;font-weight:700">4</span> af na die naaste <span style="color:#d97706;font-weight:700">100</span>: kyk na die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> — dit is <span style="color:#16a34a;font-weight:700">3</span>. Omdat 3 &lt; 5, rond ons <strong>af</strong>. Die <span style="color:#d97706;font-weight:700">honderde-syfer</span> <span style="color:#d97706;font-weight:700">2</span> bly dieselfde, en die tiene en ene word 0. Afgeronde waarde: <strong>2 200</strong>.',

            'Bereken die skatting met die afgeronde getalle: <strong>3 500 + 2 200 = 5 700</strong>.',

            'Bereken die werklike antwoord: 3 456 + 2 234 = <strong>5 690</strong>.',

            'Vergelyk: 5 690 is baie naby aan 5 700 — die verskil is slegs 10. Die antwoord maak sin. ✓',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 4 — ANTWOORDE NAGAAN MET INVERSE BEWERKINGS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'inverse-operations',
      title: 'Antwoorde Nagaan met Inverse Bewerkings',
      icon: '🔄',
      explanation:
        `<p style="margin-bottom:14px">Optelling en aftrekking is <strong>teenoorgestelde bewerkings</strong> — hulle <em>maak</em> mekaar <em>ongedaan</em>. Dit word die <strong>inverse bewerking</strong> genoem. Jy kan dit gebruik om te kyk of jou antwoord korrek is nadat jy ʼn berekening voltooi het.</p>` +

        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">` +
        `<div style="background:#f0fdf4;border:1px solid #86efac;border-radius:10px;padding:12px 16px">` +
        `<p style="margin:0;font-weight:600;color:#14532d">As jy <strong>opgetel</strong> het → gebruik aftrekking om na te gaan</p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#14532d">Voorbeeld: 300 + 200 = 500 → gaan na: 500 − 200 = 300 ✓</p>` +
        `</div>` +
        `<div style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:10px;padding:12px 16px">` +
        `<p style="margin:0;font-weight:600;color:#1e40af">As jy <strong>afgetrek</strong> het → gebruik optelling om na te gaan</p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#1e40af">Voorbeeld: 800 − 300 = 500 → gaan na: 500 + 300 = 800 ✓</p>` +
        `</div>` +
        `</div>` +

        `<p style="margin-bottom:0">As die inverse toets jou <strong>oorspronklike beginggetal</strong> teruggee, is jou antwoord korrek. As dit nie so is nie, is daar iewers ʼn fout — gaan terug en vind dit.</p>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 6 ─────────────────────────────────────────
        {
          question: 'Bereken 2 456 + 1 323 = 3 779. Gaan na met die inverse bewerking.',
          answer: 'Nagaan: 3 779 − 1 323 = 2 456 ✓ Die antwoord is korrek.',
          steps: [
            'Ons het bereken: <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> + <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span>.',

            'Ons het <strong>optelling</strong> gebruik, dus gebruik ons <strong>aftrekking</strong> om na te gaan. Neem die antwoord en trek een van die getalle wat ons opgetel het af: <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">7</span><span style="color:#2563eb;font-weight:700">9</span> − <span style="color:#dc2626;font-weight:700">1</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">2</span><span style="color:#2563eb;font-weight:700">3</span> = ?',

            'Trek af: 3 779 − 1 323 = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span>.',

            'Ons kry <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">6</span> terug — ons oorspronklike beginggetal. Die antwoord <strong>3 779 is korrek</strong>. ✓',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 7 ─────────────────────────────────────────
        {
          question: 'Bereken 4 850 − 2 340 = 2 510. Gaan na met die inverse bewerking.',
          answer: 'Nagaan: 2 510 + 2 340 = 4 850 ✓ Die antwoord is korrek.',
          steps: [
            'Ons het bereken: <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> − <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">5</span><span style="color:#16a34a;font-weight:700">1</span><span style="color:#2563eb;font-weight:700">0</span>.',

            'Ons het <strong>aftrekking</strong> gebruik, dus gebruik ons <strong>optelling</strong> om na te gaan. Neem die antwoord en tel die getal wat ons afgetrek het weer by: <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">5</span><span style="color:#16a34a;font-weight:700">1</span><span style="color:#2563eb;font-weight:700">0</span> + <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> = ?',

            'Tel op: 2 510 + 2 340 = <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>.',

            'Ons kry <span style="color:#dc2626;font-weight:700">4</span> <span style="color:#d97706;font-weight:700">8</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> terug — ons oorspronklike beginggetal. Die antwoord <strong>2 510 is korrek</strong>. ✓',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 5 — HOOFREKENE
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'mental-maths',
      title: 'Hoofrekene — Optel en Aftrek van Veelvoude van 10 en 100',
      icon: '🧠',
      explanation:
        `<p style="margin-bottom:14px"><strong>Hoofrekene</strong> beteken om ʼn antwoord in jou kop uit te werk sonder om iets neer te skryf. Jy kan dit vinnig doen wanneer jy <strong>veelvoude van 10</strong> (soos 20, 40, 70) of <strong>veelvoude van 100</strong> (soos 200, 300, 600) optel of aftrek.</p>` +

        `<p style="margin-bottom:8px"><strong>Die sleutelstrategie — net een syfer verander op ʼn slag:</strong></p>` +
        `<ul style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li>Om ʼn <strong>veelvoud van 100</strong> op te tel of af te trek → net die <span style="color:#d97706;font-weight:700">honderde-syfer</span> verander. Die duisende-, tiene- en ene-syfers bly dieselfde.</li>` +
        `<li>Om ʼn <strong>veelvoud van 10</strong> op te tel of af te trek → net die <span style="color:#16a34a;font-weight:700">tiene-syfer</span> verander. Die duisende-, honderde- en ene-syfers bly dieselfde.</li>` +
        `</ul>` +

        `<p style="margin-bottom:0">Dit werk vlot wanneer daar geen oordra of leen nodig is nie. Kyk na die voorbeelde hieronder en let op watter enkele syfer in elke berekening verander.</p>`,

      workedExamples: [
        {
          question: 'Werk hierdie ses berekeninge in jou kop uit — let op watter syfer elke keer verander',
          answer:
            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">6</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span>' +
            ' &nbsp;·&nbsp; <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>',
          steps: [
            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> + 200 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">6</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 200 by te tel verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">4</span> + 2 = <span style="color:#d97706;font-weight:700">6</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> − 300 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 300 af te trek verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">4</span> − 3 = <span style="color:#d97706;font-weight:700">1</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">5</span><span style="color:#2563eb;font-weight:700">0</span> + 40 = <span style="color:#dc2626;font-weight:700">3</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 40 by te tel verander net die <span style="color:#16a34a;font-weight:700">tiene-syfer</span>: <span style="color:#16a34a;font-weight:700">5</span> + 4 = <span style="color:#16a34a;font-weight:700">9</span>. Die duisende, honderde en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">3</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span> + 400 = <span style="color:#dc2626;font-weight:700">5</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">0</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 400 by te tel verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">3</span> + 4 = <span style="color:#d97706;font-weight:700">7</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">7</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span> − 300 = <span style="color:#dc2626;font-weight:700">8</span> <span style="color:#d97706;font-weight:700">4</span><span style="color:#16a34a;font-weight:700">6</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 300 af te trek verander net die <span style="color:#d97706;font-weight:700">honderde-syfer</span>: <span style="color:#d97706;font-weight:700">7</span> − 3 = <span style="color:#d97706;font-weight:700">4</span>. Die duisende, tiene en ene bly dieselfde.',

            '<span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">4</span><span style="color:#2563eb;font-weight:700">0</span> + 50 = <span style="color:#dc2626;font-weight:700">2</span> <span style="color:#d97706;font-weight:700">1</span><span style="color:#16a34a;font-weight:700">9</span><span style="color:#2563eb;font-weight:700">0</span>. &nbsp;Om 50 by te tel verander net die <span style="color:#16a34a;font-weight:700">tiene-syfer</span>: <span style="color:#16a34a;font-weight:700">4</span> + 5 = <span style="color:#16a34a;font-weight:700">9</span>. Die duisende, honderde en ene bly dieselfde.',
          ],
        },
      ],
      practiceQuestions: [],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // AFDELING 6 — GELDWOORDPROBLEME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'money-word-problems',
      title: 'Geldwoordprobleme',
      icon: '💰',
      explanation:
        `<p style="margin-bottom:14px">Geldprobleme gebruik presies dieselfde <strong>optellings- en aftrekkingsvaardighede</strong> wat jy reeds geleer het — die enigste verskil is dat die getalle <strong>rand (R)</strong> en <strong>sent (s)</strong> voorstel.</p>` +

        `<div style="background:#fefce8;border:1px solid #fde047;border-radius:10px;padding:12px 16px;margin-bottom:16px">` +
        `<p style="margin:0;font-weight:600;color:#713f12">Belangrik om te onthou: <strong>100 sent = 1 rand</strong></p>` +
        `<p style="margin:4px 0 0 0;font-size:0.9em;color:#713f12">R3,50 beteken 3 rand en 50 sent. In Graad 4 gebruik die meeste geldprobleme heel-randbedrae, sodat jy hulle soos gewone 4-syfergetalle kan behandel.</p>` +
        `</div>` +

        `<p style="margin-bottom:8px"><strong>Hoe om ʼn geldwoordprobleem op te los:</strong></p>` +
        `<ol style="margin-left:20px;margin-bottom:16px;line-height:2.2">` +
        `<li><strong>Stap 1:</strong> Lees die probleem noukeurig en vind die sleutelwoord — dit vertel jou of jy moet optel of aftrek.</li>` +
        `<li><strong>Stap 2:</strong> Skryf die berekening met die bedrae in kolomme opgelyn.</li>` +
        `<li><strong>Stap 3:</strong> Los op deur kolomoptelling of -aftrekking, skryf dan jou antwoord met die <strong>R</strong>-simbool.</li>` +
        `</ol>` +

        `<p style="margin-bottom:8px"><strong>Sleutelwoorde — optelling:</strong> &nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">altesaam</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">totaal</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">in totaal</span>` +
        `</p>` +
        `<p style="margin-bottom:0"><strong>Sleutelwoorde — aftrekking:</strong> &nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">hoeveel meer</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">hoeveel oor</span>&nbsp;` +
        `<span style="background:#eff6ff;color:#1e40af;border:1px solid #bfdbfe;border-radius:20px;padding:3px 12px;font-weight:600;font-size:0.9em">verskil</span>` +
        `</p>`,

      workedExamples: [
        // ── UITGEWERKTE VOORBEELD 9 ──────────────────────────────────────────
        {
          question: 'Thabo het R2 450 in sy spaargeld. Hy verdien R1 375 deur takies te doen. Hoeveel het hy altesaam?',
          answer: '<strong>R3 825</strong>',
          steps: [
            'Die sleutelwoord is <strong>"altesaam"</strong> — dit vertel ons om <strong>op te tel</strong>. Ons moet R2 450 + R1 375 bereken.',

            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">4</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">5</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">0</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">+ 1</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">7</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">5</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Tel die <span style="color:#2563eb;font-weight:700">ene</span> op: <span style="color:#2563eb;font-weight:700">0</span> + <span style="color:#2563eb;font-weight:700">5</span> = <span style="color:#2563eb;font-weight:700">5</span>. Skryf <span style="color:#2563eb;font-weight:700">5</span> in die ene-kolom.',

            'Tel die <span style="color:#16a34a;font-weight:700">tiene</span> op: <span style="color:#16a34a;font-weight:700">5</span> + <span style="color:#16a34a;font-weight:700">7</span> = <span style="color:#16a34a;font-weight:700">12</span>. Skryf <span style="color:#16a34a;font-weight:700">2</span> in die tiene-kolom en dra <span style="color:#ea580c;font-weight:700">1</span> oor na die honderde-kolom.',

            'Tel die <span style="color:#d97706;font-weight:700">honderde</span> op: <span style="color:#d97706;font-weight:700">4</span> + <span style="color:#d97706;font-weight:700">3</span> + <span style="color:#ea580c;font-weight:700">1</span> (oorgedra) = <span style="color:#d97706;font-weight:700">8</span>. Skryf <span style="color:#d97706;font-weight:700">8</span> in die honderde-kolom.',

            'Tel die <span style="color:#dc2626;font-weight:700">duisende</span> op: <span style="color:#dc2626;font-weight:700">2</span> + <span style="color:#dc2626;font-weight:700">1</span> = <span style="color:#dc2626;font-weight:700">3</span>. Skryf <span style="color:#dc2626;font-weight:700">3</span> in die duisende-kolom.',

            'Skryf die antwoord met die rand-simbool: Thabo het <strong>R3 825</strong> altesaam.',
          ],
        },

        // ── UITGEWERKTE VOORBEELD 10 ─────────────────────────────────────────
        {
          question: 'ʼn Fiets kos R3 999. Lerato het R2 650. Hoeveel meer geld het sy nodig?',
          answer: '<strong>R1 349</strong>',
          steps: [
            'Die sleutelwoorde is <strong>"hoeveel meer"</strong> — dit vertel ons om <strong>af te trek</strong>. Ons moet die verskil vind: R3 999 − R2 650.',

            'Skryf die getalle in kolomme — ene onder ene, tiene onder tiene, honderde onder honderde, duisende onder duisende:' +
            '<div style="margin-top:12px;display:inline-block;border:1.5px solid #e5e7eb;border-radius:10px;overflow:hidden">' +
            '<table style="border-collapse:collapse;font-size:0.95em;text-align:center;min-width:220px">' +
            '<thead><tr style="background:#f8fafc">' +
            '<th style="padding:7px 20px;font-weight:700;color:#dc2626;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">D</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#d97706;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">H</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#16a34a;border-bottom:1px solid #e5e7eb;border-right:1px solid #e5e7eb">T</th>' +
            '<th style="padding:7px 20px;font-weight:700;color:#2563eb;border-bottom:1px solid #e5e7eb">E</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb">3</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb">9</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb">9</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700">9</td>' +
            '</tr>' +
            '<tr>' +
            '<td style="padding:7px 20px;color:#dc2626;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">− 2</td>' +
            '<td style="padding:7px 20px;color:#d97706;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">6</td>' +
            '<td style="padding:7px 20px;color:#16a34a;font-weight:700;border-right:1px solid #e5e7eb;border-top:1px solid #e5e7eb">5</td>' +
            '<td style="padding:7px 20px;color:#2563eb;font-weight:700;border-top:1px solid #e5e7eb">0</td>' +
            '</tr>' +
            '</tbody></table></div>',

            'Trek die <span style="color:#2563eb;font-weight:700">ene</span> af: <span style="color:#2563eb;font-weight:700">9</span> − <span style="color:#2563eb;font-weight:700">0</span> = <span style="color:#2563eb;font-weight:700">9</span>. Skryf <span style="color:#2563eb;font-weight:700">9</span> in die ene-kolom.',

            'Trek die <span style="color:#16a34a;font-weight:700">tiene</span> af: <span style="color:#16a34a;font-weight:700">9</span> − <span style="color:#16a34a;font-weight:700">5</span> = <span style="color:#16a34a;font-weight:700">4</span>. Skryf <span style="color:#16a34a;font-weight:700">4</span> in die tiene-kolom.',

            'Trek die <span style="color:#d97706;font-weight:700">honderde</span> af: <span style="color:#d97706;font-weight:700">9</span> − <span style="color:#d97706;font-weight:700">6</span> = <span style="color:#d97706;font-weight:700">3</span>. Skryf <span style="color:#d97706;font-weight:700">3</span> in die honderde-kolom.',

            'Trek die <span style="color:#dc2626;font-weight:700">duisende</span> af: <span style="color:#dc2626;font-weight:700">3</span> − <span style="color:#dc2626;font-weight:700">2</span> = <span style="color:#dc2626;font-weight:700">1</span>. Skryf <span style="color:#dc2626;font-weight:700">1</span> in die duisende-kolom.',

            'Skryf die antwoord met die rand-simbool: Lerato het nog <strong>R1 349</strong> nodig om die fiets te koop.',
          ],
        },
      ],
      practiceQuestions: [],
    },
  ],

  topicPractice: [

    // ── Afdeling 1: Wat is Optelling? ────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken en wys jou werk in kolomme:\n\n3 124 + 2 453',
      // "5 577" → strip spaces → "5577"
      correctAnswer: '5577',
      explanation:
        'Werk in kolomme — geen oordra nodig nie:\n\n' +
        '• Ene:      4 + 3 = 7\n' +
        '• Tiene:    2 + 5 = 7\n' +
        '• Honderde: 1 + 4 = 5\n' +
        '• Duisende: 3 + 2 = 5\n\n' +
        'Antwoord: 5 577',
      answer: '5 577',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou oordra:\n\n2 867 + 1 445',
      // "4 312" → strip spaces → "4312"
      correctAnswer: '4312',
      explanation:
        'Werk in kolomme met oordra:\n\n' +
        '• Ene:      7 + 5 = 12 → skryf 2, dra 1 oor\n' +
        '• Tiene:    6 + 4 + 1 (oorgedra) = 11 → skryf 1, dra 1 oor\n' +
        '• Honderde: 8 + 4 + 1 (oorgedra) = 13 → skryf 3, dra 1 oor\n' +
        '• Duisende: 2 + 1 + 1 (oorgedra) = 4\n\n' +
        'Antwoord: 4 312',
      answer: '4 312',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Skool het 1 876 blikkies in week een versamel en 2 547 blikkies in week twee.\n\n' +
        'Hoeveel blikkies het hulle altesaam versamel? Wys al jou werk.',
      // "4 423" → strip spaces → "4423"
      correctAnswer: '4423',
      explanation:
        'Die woord "altesaam" vertel ons om op te tel: 1 876 + 2 547\n\n' +
        'Werk in kolomme met oordra:\n\n' +
        '• Ene:      6 + 7 = 13 → skryf 3, dra 1 oor\n' +
        '• Tiene:    7 + 4 + 1 (oorgedra) = 12 → skryf 2, dra 1 oor\n' +
        '• Honderde: 8 + 5 + 1 (oorgedra) = 14 → skryf 4, dra 1 oor\n' +
        '• Duisende: 1 + 2 + 1 (oorgedra) = 4\n\n' +
        'Die skool het 4 423 blikkies altesaam versamel.',
      answer: '4 423',
    },

    // ── Afdeling 2: Wat is Aftrekking? ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question: 'Bereken en wys jou werk in kolomme:\n\n5 678 − 3 245',
      // "2 433" → strip spaces → "2433"
      correctAnswer: '2433',
      explanation:
        'Werk in kolomme — geen leen nodig nie:\n\n' +
        '• Ene:      8 − 5 = 3\n' +
        '• Tiene:    7 − 4 = 3\n' +
        '• Honderde: 6 − 2 = 4\n' +
        '• Duisende: 5 − 3 = 2\n\n' +
        'Antwoord: 2 433',
      answer: '2 433',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question: 'Bereken en wys jou leen:\n\n7 302 − 4 568',
      // "2 734" → strip spaces → "2734"
      correctAnswer: '2734',
      explanation:
        'Die tiene-syfer is 0, dus moet die leen daardeur beweeg:\n\n' +
        '• Ene: 2 − 8. Tiene is 0 — leen van honderde (3 → 2). ' +
        'Tiene word 10, leen dan van tiene (10 → 9). Ene word 12.\n' +
        '  12 − 8 = 4\n' +
        '• Tiene:    9 − 6 = 3\n' +
        '• Honderde: 2 − 5. Leen van duisende (7 → 6). Honderde word 12.\n' +
        '  12 − 5 = 7\n' +
        '• Duisende: 6 − 4 = 2\n\n' +
        'Antwoord: 2 734',
      answer: '2 734',
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Fabriek het 6 050 skoene op Maandag gemaak. Teen Woensdag is 2 387 skoene verkoop.\n\n' +
        'Hoeveel skoene is oor? Wys al jou werk, insluitend leen waar nodig.',
      // "3 663" → strip spaces → "3663"
      correctAnswer: '3663',
      explanation:
        'Die woord "oor" vertel ons om af te trek: 6 050 − 2 387\n\n' +
        '• Ene: 0 − 7. Leen van tiene (5 → 4). Ene word 10.\n' +
        '  10 − 7 = 3\n' +
        '• Tiene: 4 − 8. Honderde-syfer is 0 — leen van duisende (6 → 5). ' +
        'Honderde word 10, leen dan van honderde (10 → 9). Tiene word 14.\n' +
        '  14 − 8 = 6\n' +
        '• Honderde: 9 − 3 = 6\n' +
        '• Duisende: 5 − 2 = 3\n\n' +
        '3 663 skoene is oor.',
      answer: '3 663',
    },

    // ── AFDELING 3 — Skat Voordat Jy Bereken ─────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Skat die antwoord op 3 456 + 2 234 deur eers elke getal na die naaste honderd af te rond.\n\n' +
        'Skryf slegs die geskatte antwoord (geen spasies of kommas nie).',
      // 3 456 → 3 500, 2 234 → 2 200; 3 500 + 2 200 = 5 700
      correctAnswer: '5700',
      explanation:
        'Rond elke getal af na die naaste honderd:\n' +
        '• 3 456 → 3 500 (56 is nader aan 100 as aan 0)\n' +
        '• 2 234 → 2 200 (34 is nader aan 0 as aan 100)\n\n' +
        'Skatting: 3 500 + 2 200 = 5 700',
      answer: '5 700',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Kyk na hierdie aftrekking: 4 872 − 1 439\n\n' +
        'Deel A: Skat die antwoord deur elke getal na die naaste honderd af te rond. Skryf slegs die getal.\n' +
        'Deel B: Werk nou die presiese antwoord uit. Skryf slegs die getal.',
      answer: 'Deel A: 3 500 | Deel B: 3 433',
      parts: [
        {
          label: 'Deel A — Skatting',
          // 4 872 → 4 900, 1 439 → 1 400; 4 900 − 1 400 = 3 500
          correctAnswer: '3500',
          explanation:
            'Rond af na die naaste honderd:\n' +
            '• 4 872 → 4 900\n' +
            '• 1 439 → 1 400\n' +
            'Skatting: 4 900 − 1 400 = 3 500',
        },
        {
          label: 'Deel B — Presiese antwoord',
          // 4 872 − 1 439 = 3 433
          correctAnswer: '3433',
          explanation:
            'Kolomaftrekking:\n' +
            '• Ene: 2 − 9. Leen van tiene (7 → 6). Ene word 12.\n' +
            '  12 − 9 = 3\n' +
            '• Tiene: 6 − 3 = 3\n' +
            '• Honderde: 8 − 4 = 4\n' +
            '• Duisende: 4 − 1 = 3\n\n' +
            'Presiese antwoord: 3 433',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lebo het 2 345 + 3 812 geskat deur af te rond na die naaste honderd en het 6 500 gekry.\n\n' +
        'Is Lebo korrek? Wys hoe jy hierdie berekening korrek sou skat en verduidelik waar Lebo fout gegaan het.',
      explanation:
        'Korrekte skatting:\n' +
        '• 2 345 → 2 300 (afgerond na naaste honderd)\n' +
        '• 3 812 → 3 800 (afgerond na naaste honderd)\n' +
        '• Skatting: 2 300 + 3 800 = 6 100\n\n' +
        'Lebo is NIE korrek nie. Die korrekte skatting is 6 100, nie 6 500 nie.\n\n' +
        'Lebo het waarskynlik 2 345 opgerond na 2 400 (afgerond na naaste 500 of ʼn ander reël gebruik) ' +
        'of 3 812 opgerond na 3 900 in plaas van afgerond na 3 800.',
      answer: '6 100 (nie 6 500 nie) — Lebo het ʼn fout gemaak deur een of albei getalle af te rond.',
    },

    // ── AFDELING 4 — Inverse Bewerkings ──────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Inverse bewerkings laat ons toe om ons antwoorde na te gaan.\n\n' +
        'Deel A: Bereken 2 345 + 1 432. Skryf slegs die getal.\n' +
        'Deel B: Gebruik aftrekking om jou antwoord na te gaan. Skryf die getal wat jy terugkry nadat jy 1 432 afgetrek het.',
      answer: 'Deel A: 3 777 | Deel B: 2 345',
      parts: [
        {
          label: 'Deel A — Optelling',
          // 2 345 + 1 432 = 3 777
          correctAnswer: '3777',
          explanation:
            'Kolomoptelling:\n' +
            '• Ene: 5 + 2 = 7\n' +
            '• Tiene: 4 + 3 = 7\n' +
            '• Honderde: 3 + 4 = 7\n' +
            '• Duisende: 2 + 1 = 3\n\n' +
            'Antwoord: 3 777',
        },
        {
          label: 'Deel B — Inverse nagaan',
          // 3 777 − 1 432 = 2 345 (terug na oorspronklike)
          correctAnswer: '2345',
          explanation:
            'Die inverse van optelling is aftrekking:\n' +
            '3 777 − 1 432 = 2 345\n\n' +
            'Ons kom terug by 2 345, wat bevestig dat ons optelling korrek was.',
        },
      ],
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Deel A: Bereken 5 678 − 2 345. Skryf slegs die getal.\n' +
        'Deel B: Gebruik optelling as die inverse bewerking om jou antwoord na te gaan. Skryf die resultaat van 2 345 by jou Deel A-antwoord op te tel.',
      answer: 'Deel A: 3 333 | Deel B: 5 678',
      parts: [
        {
          label: 'Deel A — Aftrekking',
          // 5 678 − 2 345 = 3 333
          correctAnswer: '3333',
          explanation:
            'Kolomaftrekking:\n' +
            '• Ene: 8 − 5 = 3\n' +
            '• Tiene: 7 − 4 = 3\n' +
            '• Honderde: 6 − 3 = 3\n' +
            '• Duisende: 5 − 2 = 3\n\n' +
            'Antwoord: 3 333',
        },
        {
          label: 'Deel B — Inverse nagaan',
          // 3 333 + 2 345 = 5 678 (terug na oorspronklike)
          correctAnswer: '5678',
          explanation:
            'Die inverse van aftrekking is optelling:\n' +
            '3 333 + 2 345 = 5 678\n\n' +
            'Ons kom terug by 5 678, wat bevestig dat ons aftrekking korrek was.',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'auto',
      question:
        'ʼn Getal is van 4 231 afgetrek en die antwoord was 2 456.\n\n' +
        'Gebruik die inverse bewerking (optelling) om die ontbrekende getal te vind. Skryf slegs die ontbrekende getal.',
      // 4 231 − ? = 2 456 → ? = 4 231 − 2 456 = 1 775
      // Nagaan: 2 456 + 1 775 = 4 231 ✓
      correctAnswer: '1775',
      explanation:
        'Ons weet: 4 231 − ontbrekend = 2 456\n\n' +
        'Die inverse bewerking is optelling:\n' +
        'ontbrekend = 4 231 − 2 456\n\n' +
        'Kolomaftrekking:\n' +
        '• Ene: 1 − 6. Leen van tiene (3 → 2). Ene word 11.\n' +
        '  11 − 6 = 5\n' +
        '• Tiene: 2 − 5. Leen van honderde (2 → 1). Tiene word 12.\n' +
        '  12 − 5 = 7\n' +
        '• Honderde: 1 − 4. Leen van duisende (4 → 3). Honderde word 11.\n' +
        '  11 − 4 = 7\n' +
        '• Duisende: 3 − 2 = 1\n\n' +
        'Ontbrekende getal = 1 775\n' +
        'Nagaan: 2 456 + 1 775 = 4 231 ✓',
      answer: '1 775',
    },

    // ── AFDELING 5 — Hoofrekene ───────────────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Bereken in jou kop: 4 500 + 300\n\n' +
        'Skryf slegs die antwoord (geen spasies of kommas nie).',
      // 4 500 + 300 = 4 800
      correctAnswer: '4800',
      explanation:
        '4 500 + 300:\n' +
        '• Dink in honderde: 5 honderde + 3 honderde = 8 honderde\n' +
        '• Die duisende bly dieselfde: 4 000\n' +
        '• 4 000 + 800 = 4 800',
      answer: '4 800',
    },

    {
      difficulty: 'Medium',
      checkMode: 'auto',
      question:
        'Bereken elkeen in jou kop. Skryf slegs die getal vir elke deel (geen spasies of kommas nie).\n\n' +
        'a) 3 700 + 600\n' +
        'b) 8 400 − 500\n' +
        'c) 2 300 + 1 400',
      answer: 'a) 4 300  b) 7 900  c) 3 700',
      parts: [
        {
          label: 'a) 3 700 + 600',
          // 3 700 + 600 = 4 300
          correctAnswer: '4300',
          explanation:
            '3 700 + 600:\n' +
            '• Dink in honderde: 7 honderde + 6 honderde = 13 honderde\n' +
            '• 13 honderde = 1 300\n' +
            '• 3 000 + 1 300 = 4 300',
        },
        {
          label: 'b) 8 400 − 500',
          // 8 400 − 500 = 7 900
          correctAnswer: '7900',
          explanation:
            '8 400 − 500:\n' +
            '• Dink in honderde: 84 honderde − 5 honderde = 79 honderde\n' +
            '• 79 honderde = 7 900',
        },
        {
          label: 'c) 2 300 + 1 400',
          // 2 300 + 1 400 = 3 700
          correctAnswer: '3700',
          explanation:
            '2 300 + 1 400:\n' +
            '• Duisende: 2 + 1 = 3\n' +
            '• Honderde: 3 + 4 = 7\n' +
            '• Antwoord: 3 700',
        },
      ],
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Sonder om alles neer te skryf, bereken in jou kop: 5 600 + 800\n\n' +
        'a) Wat is die antwoord?\n' +
        'b) Verduidelik hoe jy dit in jou kop uitgewerk het.',
      explanation:
        'a) Antwoord: 6 400\n\n' +
        'b) Strategie:\n' +
        '• 5 600 = 5 000 + 600\n' +
        '• Tel die honderde by: 600 + 800 = 1 400\n' +
        '  (6 honderde + 8 honderde = 14 honderde)\n' +
        '• Tel die duisende-deel weer by: 5 000 + 1 400 = 6 400',
      answer:
        'a) 6 400\n' +
        'b) 6 honderde + 8 honderde = 14 honderde = 1 400, dan 5 000 + 1 400 = 6 400',
    },

    // ── AFDELING 6 — Geldwoordprobleme ───────────────────────────────────────

    {
      difficulty: 'Easy',
      checkMode: 'auto',
      question:
        'Sipho het R2 350 en verdien R1 400 deur takies te doen.\n\n' +
        'Hoeveel het hy altesaam?\n' +
        'Skryf slegs die getal, sonder die R-simbool (geen spasies of kommas nie).',
      // 2 350 + 1 400 = 3 750
      correctAnswer: '3750',
      explanation:
        'R2 350 + R1 400:\n' +
        '• Ene: 0 + 0 = 0\n' +
        '• Tiene: 5 + 0 = 5\n' +
        '• Honderde: 3 + 4 = 7\n' +
        '• Duisende: 2 + 1 = 3\n\n' +
        'Sipho het R3 750 altesaam.',
      answer: 'R3 750',
    },

    {
      difficulty: 'Medium',
      checkMode: 'self',
      question:
        'ʼn Televisie kos R4 999. Mama het R2 875.\n\n' +
        'Hoeveel meer geld het sy nodig om die televisie te koop? Wys al jou werk.',
      explanation:
        'R4 999 − R2 875:\n' +
        '• Ene: 9 − 5 = 4\n' +
        '• Tiene: 9 − 7 = 2\n' +
        '• Honderde: 9 − 8 = 1\n' +
        '• Duisende: 4 − 2 = 2\n\n' +
        'Mama het nog R2 124 nodig.',
      answer: 'R2 124',
    },

    {
      difficulty: 'Hard',
      checkMode: 'self',
      question:
        'Lerato het R5 000. Sy koop skoolskoene vir R1 349 en ʼn skoolsak vir R875.\n\n' +
        'Hoeveel geld het sy oor? Wys al jou werk stap vir stap.',
      explanation:
        'Stap 1 — Tel die koste van skoene en sak bymekaar:\n' +
        '1 349 + 875\n' +
        '• Ene: 9 + 5 = 14, skryf 4 dra 1 oor\n' +
        '• Tiene: 4 + 7 + 1 = 12, skryf 2 dra 1 oor\n' +
        '• Honderde: 3 + 8 + 1 = 12, skryf 2 dra 1 oor\n' +
        '• Duisende: 1 + 0 + 1 = 2\n' +
        'Totale koste = R2 224\n\n' +
        'Stap 2 — Trek af van Lerato se geld:\n' +
        '5 000 − 2 224\n' +
        '• Ene: 0 − 4: leen kaskadeer van duisende → 10 − 4 = 6\n' +
        '• Tiene: 9 − 2 = 7 (na leen)\n' +
        '• Honderde: 9 − 2 = 7 (na leen)\n' +
        '• Duisende: 4 − 2 = 2 (na leen)\n\n' +
        'Lerato het R2 776 oor.',
      answer: 'R2 776',
    },

  ],
}
