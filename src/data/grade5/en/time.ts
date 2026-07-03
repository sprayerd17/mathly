import type { TopicData } from '@/src/data/grade4/en/numbers-operations'

// ─── Colour helpers (time units) ─────────────────────────────────────────────
// seconds  → blue   (#2563eb)
// minutes  → green  (#16a34a)
// hours    → orange (#ea580c)
// days     → red    (#dc2626)
const bl = (t: string) => `<span style="color:#2563eb;font-weight:700">${t}</span>`
const gr = (t: string) => `<span style="color:#16a34a;font-weight:700">${t}</span>`
const or = (t: string) => `<span style="color:#ea580c;font-weight:700">${t}</span>`
const re = (t: string) => `<span style="color:#dc2626;font-weight:700">${t}</span>`

export const topicData: TopicData = {
  title: 'Time',
  grade: 5,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — UNITS OF TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'units-of-time',
      title: 'Units of Time',
      icon: '⏱',
      explanation:
        `<p style="margin-bottom:16px;">We measure time using different units depending on how long something takes. The main units of time are ${bl('seconds')} (s), ${gr('minutes')} (min), ${or('hours')} (h), ${re('days')}, weeks, months and years. Knowing how to convert between these units is an important skill.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('seconds')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minutes')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('hours')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('days')}</span>` +
        `</div>` +

        // ── Conversion facts ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key conversion facts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Seconds → Minutes</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${bl('60 seconds')} = ${gr('1 minute')}</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minutes → Hours</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${gr('60 minutes')} = ${or('1 hour')}</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Hours → Days</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('24 hours')} = ${re('1 day')}</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Days → Weeks</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('7 days')} = 1 week</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Months → Years</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">12 months = 1 year<br>${re('365 days')} = 1 year</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Leap year</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('366 days')} — happens every 4 years</p>` +
        `</div>` +

        `</div>` +

        // ── Converting tip ───────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Converting between units</p>` +
        `<p style="margin:0;color:#1e3a8a;">When converting from a <strong>larger unit to a smaller unit</strong> (e.g. ${gr('minutes')} → ${bl('seconds')}), <strong>multiply</strong> by the conversion number.<br>When converting from a <strong>smaller unit to a larger unit</strong> (e.g. ${bl('seconds')} → ${gr('minutes')}), <strong>divide</strong> by the conversion number.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Sipho brushes his teeth for 2 minutes. How many seconds is that?',
          answer: `2 ${gr('minutes')} = 120 ${bl('seconds')}`,
          steps: [
            `We are converting from a larger unit (${gr('minutes')}) to a smaller unit (${bl('seconds')}). When going from larger to smaller, we <strong>multiply</strong>.`,
            `Use the conversion fact: 1 ${gr('minute')} = ${bl('60 seconds')}.`,
            `2 ${gr('minutes')} = 2 × ${bl('60')} = ${bl('120 seconds')}.`,
            `<strong>Answer:</strong> Sipho brushes his teeth for ${bl('120 seconds')}.`,
          ],
        },
        {
          question: 'A movie is 150 minutes long. How long is that in hours and minutes?',
          answer: `150 ${gr('minutes')} = 2 ${or('hours')} and 30 ${gr('minutes')}`,
          steps: [
            `We are converting ${gr('minutes')} into ${or('hours')} and ${gr('minutes')}. Use the conversion fact: 1 ${or('hour')} = ${gr('60 minutes')}.`,
            `Divide 150 by 60 to find the number of full hours: 150 ÷ 60 = <strong>2 remainder 30</strong>.`,
            `The quotient 2 tells us there are 2 full ${or('hours')}. The remainder 30 tells us there are 30 ${gr('minutes')} left over.`,
            `<strong>Answer:</strong> The movie is ${or('2 hours')} and ${gr('30 minutes')} long.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing the units of time in order from smallest to largest — seconds blue, minutes green, hours orange, days red — with the conversion numbers between each unit" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video explaining the units of time and how to convert between them by multiplying or dividing with colour coded units" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — READING THE TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-the-time',
      title: 'Reading the Time',
      icon: '🕐',
      explanation:
        `<p style="margin-bottom:16px;">We can read time on an <strong>analogue clock</strong> or a <strong>digital clock</strong>. An analogue clock has two hands — the short ${bl('hour hand')} and the long ${gr('minute hand')}. The ${gr('minute hand')} takes 60 minutes to go all the way around. Each number on the clock represents 5 minutes. A digital clock shows the time using numbers separated by a colon — for example 3:45 means 3 hours and 45 minutes. We also use ${or('am')} for times between midnight and midday and ${re('pm')} for times between midday and midnight.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('hour hand')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('minute hand')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('am')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('pm')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Hour hand (short)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('hour hand')} points to the current hour. It moves slowly — one full turn every 12 hours.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Minute hand (long)</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('minute hand')} points to the minutes. Each number it points to represents 5 minutes. One full turn = 60 minutes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">am — before midday</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${or('am')} covers midnight (12:00 am) through to just before midday (11:59 am). Morning times use ${or('am')}.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">pm — after midday</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">${re('pm')} covers midday (12:00 pm) through to just before midnight (11:59 pm). Afternoon and evening times use ${re('pm')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading the minute hand</p>` +
        `<p style="margin:0;color:#1e3a8a;">Multiply the number the ${gr('minute hand')} points to by <strong>5</strong> to get the minutes. For example: ${gr('minute hand')} at 9 → 9 × 5 = 45 minutes past the hour.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'The hour hand points to 4 and the minute hand points to 6 on an analogue clock. What time is it?',
          answer: `The time is ${bl('4')}:${gr('30')} or half past four`,
          steps: [
            `The ${bl('hour hand')} at 4 means it is ${bl('4')} hours.`,
            `The ${gr('minute hand')} at 6 means 6 × 5 = ${gr('30')} minutes past the hour.`,
            `<strong>Answer:</strong> The time is ${bl('4')}:${gr('30')} or half past four.`,
          ],
        },
        {
          question: 'Write 7:15 am in words.',
          answer: `Quarter past seven in the morning`,
          steps: [
            `7:15 ${or('am')} means 15 minutes past 7 in the morning — ${or('am')} tells us it is before midday.`,
            `15 minutes past the hour is called <strong>quarter past</strong> (because 15 minutes is a quarter of 60 minutes).`,
            `<strong>Answer:</strong> Quarter past seven in the morning.`,
          ],
        },
        {
          question: 'What is the difference between 6:20 am and 6:20 pm?',
          answer: `They are 12 hours apart`,
          steps: [
            `${or('am')} means before midday — 6:20 ${or('am')} is in the early morning.`,
            `${re('pm')} means after midday — 6:20 ${re('pm')} is in the evening.`,
            `<strong>Answer:</strong> They are 12 hours apart even though the digits look the same.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of an analogue clock showing the short hour hand in blue pointing to 4 and the long minute hand in green pointing to 6, with the time 4:30 labelled" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read time on an analogue clock using the blue hour hand and the green minute hand, and how am and pm are used" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — CALCULATING TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-time',
      title: 'Calculating Time',
      icon: '⏰',
      explanation:
        `<p style="margin-bottom:16px;">We can calculate how much time has passed between two times or find the ${re('end time')} when we know the ${bl('start time')} and the ${gr('duration')}. When calculating time always work in the same units. A useful method is to count up from the ${bl('start time')} to the ${re('end time')} in steps. Remember that time does not work in base 10 — there are 60 minutes in an hour, not 100.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('start time')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('end time')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('duration')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Start time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('start time')} is when the event begins. We count forward from here.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">End time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('end time')} is when the event finishes. We count up to this time.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Duration</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${gr('duration')} is how long something takes — the difference between the ${bl('start')} and ${re('end')} times.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Total time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('total')} is the combined time when you add two or more ${gr('durations')} together.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Time is not base 10</p>` +
        `<p style="margin:0;color:#1e3a8a;">When adding or subtracting time, remember there are <strong>60 minutes in an hour</strong>, not 100. If your minutes total 60 or more, convert the extra minutes into hours. For example: 45 minutes + 20 minutes = 65 minutes = 1 hour 5 minutes.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Lerato starts her homework at 3:30 pm and finishes at 5:10 pm. How long did she take?',
          answer: `Lerato took ${or('1 hour 40 minutes')}`,
          steps: [
            `Count up from the ${bl('start time')} (${bl('3:30 pm')}) to the ${re('end time')} (${re('5:10 pm')}) in steps.`,
            `From ${bl('3:30')} to ${bl('4:30')} is ${gr('1 hour')}.`,
            `From ${bl('4:30')} to ${re('5:10')} is ${gr('40 minutes')}.`,
            `<strong>Answer:</strong> ${or('Total time')} = ${gr('1 hour')} + ${gr('40 minutes')} = ${or('1 hour 40 minutes')}.`,
          ],
        },
        {
          question: 'A train leaves at 8:45 am and the journey takes 2 hours 30 minutes. What time does it arrive?',
          answer: `The train arrives at ${re('11:15 am')}`,
          steps: [
            `${bl('Start time')}: ${bl('8:45 am')}. Add the ${gr('duration')}: ${gr('2 hours 30 minutes')}.`,
            `Add the hours first: ${bl('8:45')} + ${gr('2 hours')} = <strong>10:45</strong>.`,
            `Add the minutes: <strong>10:45</strong> + ${gr('30 minutes')} = ${re('11:15')}.`,
            `<strong>Answer:</strong> The train arrives at ${re('11:15 am')}.`,
          ],
        },
        {
          question: 'Sipho watches two movies. The first is 1 hour 45 minutes long and the second is 2 hours 20 minutes long. How long does he watch movies in total?',
          answer: `Sipho watches movies for ${or('4 hours 5 minutes')} in total`,
          steps: [
            `Add the hours: ${gr('1 hour')} + ${gr('2 hours')} = <strong>3 hours</strong>.`,
            `Add the minutes: ${gr('45 minutes')} + ${gr('20 minutes')} = <strong>65 minutes</strong>.`,
            `Convert 65 minutes: 65 = 60 + 5 = ${gr('1 hour')} 5 minutes.`,
            `Add the converted hour to the hours total: <strong>3 hours</strong> + ${gr('1 hour')} 5 minutes = ${or('4 hours 5 minutes')}.`,
            `<strong>Answer:</strong> Sipho watches movies for ${or('4 hours 5 minutes')} in total.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a number line counting up from start time 3:30 pm in blue to 4:30 pm with a 1 hour step in green then to end time 5:10 pm in red with a 40 minute step in green and total 1 hour 40 minutes labelled in orange" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to calculate elapsed time by counting up from the start time in blue to the end time in red using hour and minute steps in green" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — READING CALENDARS AND TIMETABLES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'reading-calendars-and-timetables',
      title: 'Reading Calendars and Timetables',
      icon: '📅',
      explanation:
        `<p style="margin-bottom:16px;">A calendar shows all the ${bl('days')}, weeks and months in a year. We use calendars to plan events and find out on which ${bl('day')} a ${or('date')} falls. A timetable shows when events happen in order. We use timetables for school schedules, bus times and train times. When reading a timetable always find the correct row and column to get the right information.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('days')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('dates')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('times')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('duration')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Calendar</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A calendar shows all the ${bl('days')}, weeks and months in a year. Use it to find which ${bl('day')} a ${or('date')} falls on or to plan ahead.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Dates</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A ${or('date')} tells us the exact day in a month. To find a ${or('date')} on a calendar, use the column for the ${bl('day')} and the row for the week.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Timetable</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">A timetable shows events in ${gr('time')} order. Find the correct row and column where a subject and a ${gr('time')} meet to get the right information.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Duration</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('duration')} tells us how long a lesson or event lasts. Add the ${re('duration')} to the start ${gr('time')} to find the end ${gr('time')}.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Reading a timetable</p>` +
        `<p style="margin:0;color:#1e3a8a;">Always find the correct <strong>row</strong> (the subject or event) and the correct <strong>column</strong> (the ${bl('day')} or ${gr('time')}) to get the right information. Double-check both before writing your answer.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A calendar shows that the 1st of March is a Monday. On what day is the 15th of March?',
          answer: `The ${or('15th of March')} falls on a ${bl('Monday')}`,
          steps: [
            `Count from the ${or('1st')} to the ${or('15th')} — that is <strong>14 ${bl('days')} later</strong>.`,
            `14 ${bl('days')} = 2 full weeks (7 + 7 = 14).`,
            `Two weeks after ${bl('Monday')} is also ${bl('Monday')} — adding a full number of weeks always lands on the same ${bl('day')}.`,
            `<strong>Answer:</strong> The ${or('15th of March')} falls on a ${bl('Monday')}.`,
          ],
        },
        {
          question: 'A school timetable shows that Maths starts at 8:00 am and lasts 45 minutes. English starts right after Maths. What time does English start?',
          answer: `English starts at ${gr('8:45 am')}`,
          steps: [
            `Maths starts at ${gr('8:00 am')} and lasts ${re('45 minutes')}.`,
            `Add the ${re('duration')} to the start ${gr('time')}: ${gr('8:00')} + ${re('45 minutes')}.`,
            `${gr('8:00')} + ${re('45 minutes')} = ${gr('8:45 am')}.`,
            `<strong>Answer:</strong> English starts at ${gr('8:45 am')}.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a March calendar with the 1st highlighted in blue as Monday and the 15th highlighted in orange, and a school timetable showing Maths at 8:00 am in green lasting 45 minutes in red with English starting at 8:45 am in green" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a calendar to find the day a date falls on and how to use a timetable to find start and end times using colour coded days blue dates orange times green and duration red" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 5 — TIME PROBLEMS IN CONTEXT
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'time-problems-in-context',
      title: 'Time Problems in Context',
      icon: '🧩',
      explanation:
        `<p style="margin-bottom:16px;">We use time every day to plan, organise and solve problems. When solving time problems read the question carefully to decide what you need to find — a ${bl('start time')}, an ${re('end time')} or a ${gr('duration')}. Write your answer clearly with the correct unit. Remember that 60 minutes make 1 hour so when your minutes add up to more than 60 you need to convert.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('start time')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('end time')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('each step')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('total')}</span>` +
        `</div>` +

        // ── Key concepts ─────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Key concepts</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:10px;margin-bottom:20px;">` +

        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#2563eb;margin-bottom:4px;">Start time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${bl('start time')} is when the event begins. Count forward from here to find the end time or total time.</p>` +
        `</div>` +

        `<div style="background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">End time</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${re('end time')} is when the event finishes. Add all the ${gr('steps')} to the ${bl('start time')} to reach the ${re('end time')}.</p>` +
        `</div>` +

        `<div style="background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Each step</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">Each ${gr('step')} is an individual time amount you add. Work through the ${gr('steps')} one at a time to avoid mistakes.</p>` +
        `</div>` +

        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:12px 14px;">` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Total</p>` +
        `<p style="color:#374151;font-size:14px;margin:0;">The ${or('total')} is the combined time. If your minutes add up to 60 or more, convert the extra minutes into hours.</p>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">60 minutes = 1 hour</p>` +
        `<p style="margin:0;color:#1e3a8a;">When your minutes add up to more than 60, convert the extra minutes into hours. Work in small ${gr('steps')} — add the hours first, then the minutes — to keep track of each part clearly.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Amahle leaves home at 7:15 am. She walks for 25 minutes to the bus stop and then waits 10 minutes for the bus. The bus ride takes 35 minutes. What time does she arrive at school?',
          answer: `Amahle arrives at school at ${re('8:25 am')}`,
          steps: [
            `${bl('Start time:')} Amahle leaves home at ${bl('7:15 am')}.`,
            `${gr('Step 1 — Walking:')} ${bl('7:15')} + ${gr('25 minutes')} = <strong>7:40</strong>.`,
            `${gr('Step 2 — Waiting:')} <strong>7:40</strong> + ${gr('10 minutes')} = <strong>7:50</strong>.`,
            `${gr('Step 3 — Bus ride:')} <strong>7:50</strong> + ${gr('35 minutes')} = ${re('8:25')}. (7:50 + 10 = 8:00, then 8:00 + 25 = 8:25)`,
            `<strong>Answer:</strong> Amahle arrives at school at ${re('8:25 am')}.`,
          ],
        },
        {
          question: 'A sports day starts at 9:00 am and ends at 2:30 pm. How long is the sports day?',
          answer: `The sports day lasts ${or('5 hours 30 minutes')}`,
          steps: [
            `Count from the ${bl('start time')} (${bl('9:00 am')}) to the ${re('end time')} (${re('2:30 pm')}).`,
            `${gr('Step 1:')} From ${bl('9:00 am')} to ${re('2:00 pm')} is ${gr('5 hours')}.`,
            `${gr('Step 2:')} From ${re('2:00 pm')} to ${re('2:30 pm')} is ${gr('30 minutes')}.`,
            `<strong>Answer:</strong> The sports day lasts ${or('5 hours')} + ${or('30 minutes')} = ${or('5 hours 30 minutes')}.`,
          ],
        },
        {
          question: 'Thabo practises guitar for 40 minutes every day. How many hours and minutes does he practise in one week?',
          answer: `Thabo practises for ${or('4 hours 40 minutes')} per week`,
          steps: [
            `${gr('Step 1:')} Multiply the daily practice by the number of days: 7 × ${gr('40 minutes')} = ${gr('280 minutes')}.`,
            `${gr('Step 2:')} Convert ${gr('280 minutes')} to hours and minutes: 280 ÷ 60 = <strong>4 remainder 40</strong> — that is 4 full hours and 40 minutes left over.`,
            `<strong>Answer:</strong> Thabo practises for ${or('4 hours 40 minutes')} per week.`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [],

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram showing a timeline for Amahle\'s journey: start time 7:15 am in blue, step 1 plus 25 minutes walking in green reaching 7:40, step 2 plus 10 minutes waiting in green reaching 7:50, step 3 plus 35 minutes bus ride in green reaching end time 8:25 am in red" />',

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to solve time problems in context by counting forward from the start time in blue through each step in green to reach the end time in red and reading off the total in orange" />',
    },
  ],
  topicPractice: [
    // ── Q1 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many seconds are in 1 minute?',
      answer: '60',
      checkMode: 'auto',
      correctAnswer: '60',
      explanation: '1 minute = 60 seconds.',
    },

    // ── Q2 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'How many hours are in 1 day?',
      answer: '24',
      checkMode: 'auto',
      correctAnswer: '24',
      explanation: '1 day = 24 hours.',
    },

    // ── Q3 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A movie is 120 minutes long. How long is that in hours?',
      answer: '2 hours',
      checkMode: 'auto',
      correctAnswer: '2 hours',
      correctAnswers: ['2 hours', '2'],
      explanation: '120 minutes ÷ 60 = 2 hours.',
    },

    // ── Q4 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho says there are 400 minutes in a day. Is he correct? Explain.',
      answer: 'No — there are 24 hours in a day and 60 minutes in an hour. 24 × 60 = 1 440 minutes in a day.',
      checkMode: 'self',
    },

    // ── Q5 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'The minute hand points to 9 on a clock. How many minutes past the hour is it?',
      answer: '45',
      checkMode: 'auto',
      correctAnswer: '45',
      explanation: '9 × 5 = 45 minutes past the hour.',
    },

    // ── Q6 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Write 2:30 pm in words.',
      answer: 'half past two in the afternoon',
      checkMode: 'auto',
      correctAnswer: 'half past two in the afternoon',
      explanation: '2:30 pm — 30 minutes past 2 in the afternoon is half past two in the afternoon.',
    },

    // ── Q7 Hard ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Lerato wakes up at 6:15 am. Her clock shows the hour hand pointing between 6 and 7 and the minute hand pointing to 3. Is her clock correct? Explain.',
      answer: 'Yes — the minute hand at 3 means 15 minutes past. The hour hand between 6 and 7 means it is after 6 but before 7. The clock shows 6:15 which is correct.',
      checkMode: 'self',
    },

    // ── Q8 Easy ──────────────────────────────────────────────────────────────
    {
      difficulty: 'Easy',
      question: 'Amahle starts reading at 4:00 pm and reads for 45 minutes. What time does she finish?',
      answer: '4:45 pm',
      checkMode: 'auto',
      correctAnswer: '4:45 pm',
      explanation: '4:00 pm + 45 minutes = 4:45 pm.',
    },

    // ── Q9 Medium ────────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'A bus leaves at 9:20 am and arrives 1 hour 50 minutes later. What time does it arrive?',
      answer: '11:10 am',
      checkMode: 'auto',
      correctAnswer: '11:10 am',
      explanation: '9:20 am + 1 hour = 10:20 am. 10:20 am + 50 minutes = 11:10 am.',
    },

    // ── Q10 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Thabo starts cooking at 5:45 pm. The meal takes 1 hour 30 minutes. What time will the meal be ready?',
      answer: '7:15 pm',
      checkMode: 'auto',
      correctAnswer: '7:15 pm',
      explanation: '5:45 pm + 1 hour = 6:45 pm. 6:45 pm + 30 minutes = 7:15 pm.',
    },

    // ── Q11 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'The 1st of June is a Wednesday. What day is the 8th of June?',
      answer: 'Wednesday',
      checkMode: 'auto',
      correctAnswer: 'Wednesday',
      explanation: 'The 8th is 7 days after the 1st. 7 days = 1 full week, so the day is the same — Wednesday.',
    },

    // ── Q12 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Sipho has Maths from 8:00 to 8:45, English from 8:45 to 9:30 and Science from 9:45 to 10:30. How much time does he spend in class in total?',
      answer: '2 hours 15 minutes',
      checkMode: 'auto',
      correctAnswer: '2 hours 15 minutes',
      explanation: 'Maths: 8:00 to 8:45 = 45 minutes. English: 8:45 to 9:30 = 45 minutes. Science: 9:45 to 10:30 = 45 minutes. Total: 45 + 45 + 45 = 135 minutes = 2 hours 15 minutes.',
    },

    // ── Q13 Medium ───────────────────────────────────────────────────────────
    {
      difficulty: 'Medium',
      question: 'Lerato practises piano for 30 minutes every day. How many hours does she practise in 2 weeks?',
      answer: '7 hours',
      checkMode: 'auto',
      correctAnswer: '7 hours',
      correctAnswers: ['7 hours', '7'],
      explanation: '2 weeks = 14 days. 14 × 30 minutes = 420 minutes. 420 ÷ 60 = 7 hours.',
    },

    // ── Q14 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'A school event starts at 10:15 am and each of the 4 acts takes 25 minutes with a 10 minute break between each act. What time does the event end?',
      answer: '4 acts × 25 minutes = 100 minutes. 3 breaks × 10 minutes = 30 minutes. Total = 130 minutes = 2 hours 10 minutes. 10:15 am + 2 hours 10 minutes = 12:25 pm.',
      checkMode: 'self',
    },

    // ── Q15 Hard ─────────────────────────────────────────────────────────────
    {
      difficulty: 'Hard',
      question: 'Amahle leaves home at 7:20 am. She walks 15 minutes to the taxi rank, waits 20 minutes and the taxi ride takes 40 minutes. She then walks 5 minutes to school. What time does she arrive?',
      answer: '8:40 am',
      checkMode: 'auto',
      correctAnswer: '8:40 am',
      explanation: '7:20 am + 15 minutes = 7:35 am. 7:35 am + 20 minutes = 7:55 am. 7:55 am + 40 minutes = 8:35 am. 8:35 am + 5 minutes = 8:40 am.',
    },
  ],
  resultsConfig: {
    totalMarks: 15,
    messages: [
      { minPercent: 100, message: 'Outstanding! You have mastered time.' },
      { minPercent: 75, message: 'Great work! You have a strong understanding of time.' },
      { minPercent: 50, message: 'Good effort! Review the sections where you lost marks and try again.' },
      { minPercent: 0, message: 'Keep going! Work through the study guide again and try once more.' },
    ],
  },
}
