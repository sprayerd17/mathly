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
  grade: 6,
  sections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 1 — 24-HOUR TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: '24-hour-time',
      title: '24-Hour Time',
      icon: '🕑',
      explanation:
        `<p style="margin-bottom:16px;">Until now you've used ${or('12-hour time')} with ${gr('am')} (midnight to midday) and ${re('pm')} (midday to midnight). Many timetables, tickets and digital clocks instead use ${bl('24-hour time')}, which counts the hours from 00:00 (midnight) all the way through to 23:59, without needing am or pm at all.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('24-hour time')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('am')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('pm')}</span>` +
        `</div>` +

        // ── Conversion rules ─────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Converting between 12-hour and 24-hour time</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Morning (am) times</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">${gr('am')} times keep the same hour number, just written with a leading zero and no am. 7:15 am = ${bl('07:15')}. Midnight (12:00 am) becomes ${bl('00:00')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Afternoon/evening (pm) times</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Add ${re('12')} to the hour (except for 12:00 pm itself, which stays as ${bl('12:00')}). 3:45 pm = 3 + 12 = ${bl('15:45')}.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Going back to 12-hour time</p>` +
        `<p style="margin:0;color:#1e3a8a;">If the 24-hour time is ${bl('13:00 or later')}, subtract 12 and add ${re('pm')}. If it's ${bl('before 12:00')}, keep the hour and add ${gr('am')} (with 00:00 becoming 12:00 am).</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'Convert 8:20 pm to 24-hour time.',
          answer: `8:20 pm = ${bl('20:20')}`,
          steps: [
            `This is a ${re('pm')} time, so add ${re('12')} to the hour: ${re('8 + 12 = 20')}.`,
            `Keep the minutes the same: ${bl('20:20')}.`,
            `<strong>Answer:</strong> 8:20 pm = ${bl('20:20')}. ✓`,
          ],
        },
        {
          question: 'Convert 18:45 to 12-hour time.',
          answer: `18:45 = ${re('6:45 pm')}`,
          steps: [
            `Since 18:45 is ${bl('13:00 or later')}, subtract 12: ${re('18 − 12 = 6')}.`,
            `Add ${re('pm')}: ${re('6:45 pm')}.`,
            `<strong>Answer:</strong> 18:45 = ${re('6:45 pm')}. ✓`,
          ],
        },
        {
          question: 'Convert 6:05 am to 24-hour time.',
          answer: `6:05 am = ${bl('06:05')}`,
          steps: [
            `This is an ${gr('am')} time, so the hour stays the same, written with a leading zero.`,
            `${gr('6')} becomes ${bl('06')}, so the time is ${bl('06:05')}.`,
            `<strong>Answer:</strong> 6:05 am = ${bl('06:05')}. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'Convert 4:30 pm to 24-hour time.',
          answer: '16:30',
          checkMode: 'auto',
          correctAnswer: '16:30',
          explanation: '4 + 12 = 16, so 4:30 pm = 16:30 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Convert each of the following.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Convert 9:10 am to 24-hour time.',
              correctAnswer: '09:10',
              correctAnswers: ['09:10', '9:10'],
              explanation: '9:10 am stays as 09:10 (am times keep the same hour) ✓',
            },
            {
              label: 'b) Convert 21:35 to 12-hour time.',
              correctAnswer: '9:35 pm',
              correctAnswers: ['9:35 pm', '9:35pm', '09:35 pm'],
              explanation: '21 − 12 = 9, so 21:35 = 9:35 pm ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A flight departs at 11:40 pm and lands at 02:15 the next day.\n\na) Convert the departure time to 24-hour time.\nb) Convert the landing time to 12-hour time.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Departure time (24-hour)',
              correctAnswer: '23:40',
              explanation: '11 + 12 = 23, so 11:40 pm = 23:40 ✓',
            },
            {
              label: 'b) Landing time (12-hour)',
              correctAnswer: '2:15 am',
              correctAnswers: ['2:15 am', '2:15am', '02:15 am'],
              explanation: '02:15 is before 12:00, so it stays as 2:15 am ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to convert between 12-hour am/pm time and 24-hour time, showing both the morning case which stays the same and the afternoon case which adds 12 to the hour" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="Diagram of a 24-hour timeline from 00:00 to 23:59, with the am section highlighted in green from 00:00 to 11:59 and the pm section highlighted in red from 12:00 to 23:59, showing matching 12-hour times underneath" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 2 — CALCULATING ELAPSED TIME
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'calculating-elapsed-time',
      title: 'Calculating Elapsed Time',
      icon: '⏱️',
      explanation:
        `<p style="margin-bottom:16px;">Elapsed time problems ask "how much time has passed?" between a ${or('start time')} and an ${re('end time')}. This year we tackle more complex cases: times that ${bl('cross midnight')} into the next day, and time differences given in ${gr('24-hour format')}.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('start time')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('end time')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('elapsed time')}</span>` +
        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">A reliable method: count up in stages</p>` +
        `<p style="margin:0;color:#1e3a8a;">From the ${or('start time')}, count up to the next full hour first, then add full hours, then add any remaining minutes to reach the ${re('end time')}. If the journey crosses midnight, treat the time up to midnight and the time after midnight as two separate stages, then add them together.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A movie starts at 20:15 and ends at 22:40. How long is the movie?',
          answer: `${gr('2 h 25 min')}`,
          steps: [
            `Count from ${or('20:15')} up to the next full hour: ${or('20:15')} to 21:00 is ${gr('45 min')}.`,
            `Count from 21:00 to ${re('22:00')}: that's ${gr('1 h')}.`,
            `Count from 22:00 to ${re('22:40')}: that's ${gr('40 min')}.`,
            `Add the stages: ${gr('45 min + 1 h + 40 min = 1 h 85 min = 2 h 25 min')}.`,
            `<strong>Answer:</strong> The movie is ${gr('2 h 25 min')} long. ✓`,
          ],
        },
        {
          question: 'A night shift starts at 22:30 and ends at 06:15 the next morning. How long is the shift?',
          answer: `${gr('7 h 45 min')}`,
          steps: [
            `Since the shift ${bl('crosses midnight')}, split it into two stages.`,
            `Stage 1 — from ${or('22:30')} to midnight (00:00): that's ${gr('1 h 30 min')}.`,
            `Stage 2 — from midnight to ${re('06:15')}: that's ${gr('6 h 15 min')}.`,
            `Add the stages: ${gr('1 h 30 min + 6 h 15 min = 7 h 45 min')}.`,
            `<strong>Answer:</strong> The shift is ${gr('7 h 45 min')} long. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A soccer match starts at 15:00 and ends at 16:45. How long is the match?',
          answer: '1 h 45 min',
          checkMode: 'auto',
          correctAnswer: '1 h 45 min',
          correctAnswers: ['1 h 45 min', '1h45min', '1 hour 45 minutes', '105 minutes', '105 min'],
          explanation: '16:45 − 15:00 = 1 h 45 min ✓',
        },
        {
          difficulty: 'Medium',
          question: 'A train departs at 09:50 and arrives at 12:20.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the total travel time in hours and minutes.',
              correctAnswer: '2 h 30 min',
              correctAnswers: ['2 h 30 min', '2h30min', '2 hours 30 minutes', '150 minutes', '150 min'],
              explanation: '09:50 to 10:00 is 10 min. 10:00 to 12:00 is 2 h. 2h + 10min to 12:20 = 20min more.\nTotal: 10 min + 2 h + 20 min = 2 h 30 min ✓',
            },
            {
              label: 'b) If the train leaves 15 minutes late, find the new arrival time (24-hour format).',
              correctAnswer: '12:35',
              explanation: '12:20 + 15 min = 12:35 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A bus leaves the depot at 23:40 and arrives at its destination at 03:25 the next morning.\n\na) Find the travel time from 23:40 to midnight (00:00).\nb) Find the travel time from midnight to 03:25.\nc) Find the total travel time.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Time from 23:40 to midnight',
              correctAnswer: '20 min',
              correctAnswers: ['20 min', '20min', '20 minutes'],
              explanation: '00:00 − 23:40 = 20 min ✓',
            },
            {
              label: 'b) Time from midnight to 03:25',
              correctAnswer: '3 h 25 min',
              correctAnswers: ['3 h 25 min', '3h25min', '3 hours 25 minutes', '205 minutes', '205 min'],
              explanation: '03:25 − 00:00 = 3 h 25 min ✓',
            },
            {
              label: 'c) Total travel time',
              correctAnswer: '3 h 45 min',
              correctAnswers: ['3 h 45 min', '3h45min', '3 hours 45 minutes', '225 minutes', '225 min'],
              explanation: '20 min + 3 h 25 min = 3 h 45 min ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video demonstrating how to calculate elapsed time by counting up in stages, including a case where the time period crosses midnight into the next day" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 3 — REAL-WORLD TIME PROBLEMS
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'real-world-time-problems',
      title: 'Real-World Time Problems',
      icon: '🌍',
      explanation:
        `<p style="margin-bottom:16px;">Real-world time problems often combine ${bl('24-hour time')}, ${gr('elapsed time')} and ${or('timetables')} in a single question. Read every detail carefully — especially whether a journey crosses midnight, and whether times are given in 12-hour or 24-hour format.</p>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#c2410c;margin-bottom:6px;">A simple problem-solving checklist</p>` +
        `<p style="margin:0;color:#9a3412;">1) What is being asked — a start time, end time, or duration? 2) Are all times in the ${or('same format')} (12-hour or 24-hour)? Convert first if not. 3) Does the time period cross midnight? 4) Does your final answer make sense for the situation?</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'A timetable shows a bus leaving at 07:15 and taking 55 minutes to reach school. What time (24-hour format) does the bus arrive?',
          answer: `${gr('08:10')}`,
          steps: [
            `Start time: ${or('07:15')}.`,
            `Add ${gr('55 minutes')}: ${or('07:15')} + 45 min = 08:00, then + 10 min more = ${gr('08:10')}.`,
            `<strong>Answer:</strong> The bus arrives at ${gr('08:10')}. ✓`,
          ],
        },
        {
          question: 'Thandi starts her homework at 4:20 pm and finishes at 6:05 pm. If she takes a 10-minute break in the middle, how much actual homework time did she spend?',
          answer: `${gr('1 h 35 min')}`,
          steps: [
            `Find the total time from start to finish: ${or('4:20 pm')} to ${re('6:05 pm')} = ${gr('1 h 45 min')}.`,
            `Subtract the break: ${gr('1 h 45 min − 10 min = 1 h 35 min')}.`,
            `<strong>Answer:</strong> Thandi spent ${gr('1 h 35 min')} on actual homework. ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'A movie begins at 18:30 and lasts 1 h 50 min. Find the finishing time (24-hour format).',
          answer: '20:20',
          checkMode: 'auto',
          correctAnswer: '20:20',
          explanation: '18:30 + 1 h 50 min = 20:20 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Kagiso studies from 14:15 to 16:00, with a 15-minute break in the middle.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the total time from start to finish.',
              correctAnswer: '1 h 45 min',
              correctAnswers: ['1 h 45 min', '1h45min', '1 hour 45 minutes', '105 minutes', '105 min'],
              explanation: '16:00 − 14:15 = 1 h 45 min ✓',
            },
            {
              label: 'b) Find the actual studying time (excluding the break).',
              correctAnswer: '1 h 30 min',
              correctAnswers: ['1 h 30 min', '1h30min', '1 hour 30 minutes', '90 minutes', '90 min'],
              explanation: '1 h 45 min − 15 min = 1 h 30 min ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'A cargo ship departs at 20:50 and the journey takes 9 h 40 min.\n\na) Find the arrival time in 24-hour format.\nb) Convert the arrival time to 12-hour format.\nc) Does the ship arrive on the same day it departed?',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Arrival time (24-hour)',
              correctAnswer: '06:30',
              explanation: '20:50 to midnight = 3 h 10 min. Remaining time: 9 h 40 min − 3 h 10 min = 6 h 30 min after midnight.\nArrival: 06:30 ✓',
            },
            {
              label: 'b) Arrival time (12-hour)',
              correctAnswer: '6:30 am',
              correctAnswers: ['6:30 am', '6:30am', '06:30 am'],
              explanation: '06:30 is before 12:00, so it stays as 6:30 am ✓',
            },
            {
              label: 'c) Same day?',
              correctAnswer: 'no',
              correctAnswers: ['no', 'No'],
              explanation: 'Since the journey crosses midnight (20:50 + 9 h 40 min goes past 24:00), the ship arrives the next day ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video working through a multi-step real-world time word problem combining a timetable, elapsed time and a subtracted break, ending with a final arrival or finishing time" />',
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECTION 4 — TIME ZONES
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 'time-zones',
      title: 'Time Zones',
      icon: '🌐',
      explanation:
        `<p style="margin-bottom:16px;">The Earth is round and keeps spinning, so the sun cannot shine on every part of the world at once — while it is daytime in one place, it can be night-time somewhere else. To keep clocks matching the position of the sun, the world is divided into different ${bl('time zones')}, based mostly on how far east or west a place is (its longitude). Places in the same time zone agree to set their clocks to the same time.</p>` +

        // ── Colour key ──────────────────────────────────────────────────────
        `<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin-bottom:20px;padding:10px 14px;background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;">` +
        `<span style="font-size:13px;font-weight:600;color:#374151;margin-right:4px;">Colour key:</span>` +
        `<span style="background:#eff6ff;border:1px solid #bfdbfe;border-radius:6px;padding:3px 10px;font-size:13px;">${bl('known city/time')}</span>` +
        `<span style="background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:3px 10px;font-size:13px;">${or('target city')}</span>` +
        `<span style="background:#f0fdf4;border:1px solid #bbf7d0;border-radius:6px;padding:3px 10px;font-size:13px;">${gr('calculated time')}</span>` +
        `<span style="background:#fef2f2;border:1px solid #fecaca;border-radius:6px;padding:3px 10px;font-size:13px;">${re('day change')}</span>` +
        `</div>` +

        // ── Reading a time-zone map ───────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Reading a time-zone map</p>` +
        `<p style="margin-bottom:10px;color:#374151;font-size:14px;">A time-zone map or table shows how many hours each place is ahead of or behind a reference point, usually <strong>GMT</strong> (Greenwich Mean Time, based in London). A city on <strong>GMT+2</strong> is 2 hours ahead of London; a city on <strong>GMT−5</strong> is 5 hours behind London.</p>` +
        `<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:8px;margin-bottom:20px;">` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">London</p><p style="margin:0;font-size:13px;color:#374151;">GMT+0</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Johannesburg</p><p style="margin:0;font-size:13px;color:#374151;">GMT+2</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Dubai</p><p style="margin:0;font-size:13px;color:#374151;">GMT+4</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Tokyo</p><p style="margin:0;font-size:13px;color:#374151;">GMT+9</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">New York</p><p style="margin:0;font-size:13px;color:#374151;">GMT−5</p></div>` +
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:10px 12px;text-align:center;"><p style="font-weight:700;color:#2563eb;margin:0 0 2px;">Los Angeles</p><p style="margin:0;font-size:13px;color:#374151;">GMT−8</p></div>` +
        `</div>` +

        // ── Method ────────────────────────────────────────────────────────────
        `<p style="font-weight:700;color:#0f1f3d;margin-bottom:10px;font-size:1.02em;">Working out the time in another time zone</p>` +
        `<div style="display:flex;flex-direction:column;gap:10px;margin-bottom:20px;">` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#f0fdf4;border:1.5px solid #bbf7d0;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#16a34a;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">1</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#16a34a;margin-bottom:4px;">Find the difference in hours</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">Subtract the two ${bl('GMT')} offsets to find the ${gr('time difference')} between the two places. For example, Tokyo (GMT+9) and London (GMT+0) differ by ${gr('9 hours')}.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fff7ed;border:1.5px solid #fed7aa;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#ea580c;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">2</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#ea580c;margin-bottom:4px;">Decide ahead or behind</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">A place further east (a bigger ${or('GMT offset')}) is <strong>ahead</strong> — add hours to move there. A place further west (a smaller ${or('GMT offset')}) is <strong>behind</strong> — subtract hours to move there.</p>` +
        `</div>` +
        `</div>` +

        `<div style="display:flex;gap:12px;align-items:flex-start;padding:14px 16px;background:#fef2f2;border:1.5px solid #fecaca;border-radius:10px;">` +
        `<span style="display:inline-block;min-width:26px;height:26px;line-height:26px;background:#dc2626;color:white;border-radius:50%;font-weight:700;font-size:13px;text-align:center;flex-shrink:0;">3</span>` +
        `<div>` +
        `<p style="font-weight:700;color:#dc2626;margin-bottom:4px;">Watch for a day change</p>` +
        `<p style="margin:0;font-size:14px;color:#374151;">If adding or subtracting the hours takes the time past 24:00 or below 00:00, the time moves into the ${re('next day')} or the ${re('previous day')} — just like elapsed time crossing midnight.</p>` +
        `</div>` +
        `</div>` +

        `</div>` +

        // ── Tip box ──────────────────────────────────────────────────────────
        `<div style="background:#eff6ff;border:1.5px solid #bfdbfe;border-radius:10px;padding:14px 16px;">` +
        `<p style="font-weight:700;color:#1e40af;margin-bottom:6px;">Moving east makes it later, moving west makes it earlier</p>` +
        `<p style="margin:0;color:#1e3a8a;">Travelling east (like from London towards Dubai and Tokyo) moves you into time zones that are ${gr('further ahead')}. Travelling west (like from London towards New York and Los Angeles) moves you into time zones that are ${gr('further behind')}.</p>` +
        `</div>`,

      workedExamples: [
        {
          question: 'It is 14:00 in Johannesburg (GMT+2). What time is it in London (GMT+0)?',
          answer: `${gr('12:00')} in London`,
          steps: [
            `Find the ${gr('difference')}: ${bl('GMT+2')} − ${or('GMT+0')} = ${gr('2 hours')}.`,
            `London has a ${or('smaller GMT offset')}, so it is ${gr('behind')} Johannesburg — subtract the difference.`,
            `${bl('14:00')} − ${gr('2 hours')} = ${gr('12:00')}.`,
            `<strong>Answer:</strong> It is ${gr('12:00')} in London. ✓`,
          ],
        },
        {
          question: 'It is 09:00 in London (GMT+0). What time is it in Tokyo (GMT+9)?',
          answer: `${gr('18:00')} in Tokyo`,
          steps: [
            `Find the ${gr('difference')}: ${or('GMT+9')} − ${bl('GMT+0')} = ${gr('9 hours')}.`,
            `Tokyo has a ${or('bigger GMT offset')}, so it is ${gr('ahead')} of London — add the difference.`,
            `${bl('09:00')} + ${gr('9 hours')} = ${gr('18:00')}.`,
            `<strong>Answer:</strong> It is ${gr('18:00')} in Tokyo. ✓`,
          ],
        },
        {
          question: 'It is 05:00 on a Tuesday in Johannesburg (GMT+2). What time and day is it in Los Angeles (GMT−8)?',
          answer: `${gr('19:00')} on ${re('Monday')} in Los Angeles`,
          steps: [
            `Find the ${gr('difference')}: ${bl('GMT+2')} − ${or('GMT−8')} = ${gr('10 hours')}.`,
            `Los Angeles has a ${or('smaller GMT offset')}, so it is ${gr('behind')} Johannesburg — subtract the difference.`,
            `${bl('05:00')} − ${gr('10 hours')}: since 5 is less than 10, count back past midnight — ${re('05:00 − 10 h = 19:00 the previous day')}.`,
            `<strong>Answer:</strong> It is ${gr('19:00')} on ${re('Monday')} in Los Angeles (the previous day). ✓`,
          ],
        },
      ],

      practiceQuestions: [],

      openQuestions: [
        {
          difficulty: 'Easy',
          question: 'It is 10:00 in London (GMT+0). Johannesburg is GMT+2. What time is it in Johannesburg?',
          answer: '12:00',
          checkMode: 'auto',
          correctAnswer: '12:00',
          explanation: 'Johannesburg is 2 hours ahead of London (GMT+2 vs GMT+0), so add 2 hours: 10:00 + 2 h = 12:00 ✓',
        },
        {
          difficulty: 'Medium',
          question: 'Dubai is GMT+4 and New York is GMT−5.',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Find the time difference between Dubai and New York, in hours.',
              correctAnswer: '9',
              correctAnswers: ['9', '9 hours', '9 h'],
              explanation: 'GMT+4 − (GMT−5) = 4 + 5 = 9 hours ✓',
            },
            {
              label: 'b) If it is 15:00 in Dubai, what time is it in New York?',
              correctAnswer: '06:00',
              explanation: 'New York is 9 hours behind Dubai, so subtract: 15:00 − 9 h = 06:00 ✓',
            },
          ],
        },
        {
          difficulty: 'Hard',
          question: 'Tokyo is GMT+9 and Los Angeles is GMT−8. It is 03:00 on a Wednesday in Tokyo.\n\na) Find the time difference between Tokyo and Los Angeles, in hours.\nb) Find the time (and day) in Los Angeles.\nc) Find the time (and day) in London (GMT+0).',
          answer: '',
          checkMode: 'auto',
          parts: [
            {
              label: 'a) Time difference (hours)',
              correctAnswer: '17',
              correctAnswers: ['17', '17 hours', '17 h'],
              explanation: 'GMT+9 − (GMT−8) = 9 + 8 = 17 hours ✓',
            },
            {
              label: 'b) Time and day in Los Angeles',
              correctAnswer: '10:00, Tuesday',
              correctAnswers: ['10:00, Tuesday', '10:00 Tuesday', 'Tuesday, 10:00', '10:00 previous day'],
              explanation: 'Los Angeles is 17 hours behind Tokyo. 03:00 − 17 h: since 3 is less than 17, count back past midnight: 03:00 − 17 h = 10:00 the previous day, Tuesday ✓',
            },
            {
              label: 'c) Time and day in London',
              correctAnswer: '18:00, Tuesday',
              correctAnswers: ['18:00, Tuesday', '18:00 Tuesday', 'Tuesday, 18:00', '18:00 previous day'],
              explanation: 'London (GMT+0) is 9 hours behind Tokyo (GMT+9). 03:00 − 9 h: since 3 is less than 9, count back past midnight: 03:00 − 9 h = 18:00 the previous day, Tuesday ✓',
            },
          ],
        },
      ],

      videoPlaceholder:
        '<VideoPlaceholder label="Short video showing how to read a time-zone map, find the time difference between two cities using their GMT offsets, and calculate the time in another city including cases that cross into the next or previous day" />',

      diagramPlaceholder:
        '<DiagramPlaceholder label="A simplified world time-zone map showing several cities such as London, Johannesburg, Dubai, Tokyo, New York and Los Angeles each labelled with their GMT offset, with arrows showing east means ahead and west means behind" />',
    },
  ],

  practiceSets: [
    // ═══════════════════════════════════════════════════════════════════════
    // SET 1 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 1',
      questions: [
        // Block 1 — 12-hour to 24-hour conversion (0-3, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'Lindiwe sets her school alarm for 6:45 am so she has time to get ready. Write 6:45 am in 24-hour format.', answer: '06:45', checkMode: 'auto', correctAnswer: '06:45', correctAnswers: ['06:45', '6:45'], explanation: '6:45 am is a morning time, so the hour stays the same, written with a leading zero: 06:45 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">6:45</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">am</text></svg>' },
        { difficulty: 'Easy', question: 'A TV guide lists the evening soap opera as starting at 8:30 pm. Write this time in 24-hour format.', answer: '20:30', checkMode: 'auto', correctAnswer: '20:30', explanation: 'This is a pm time, so add 12 to the hour: 8 + 12 = 20. Keep the minutes the same: 20:30 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="180.8" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="180.8" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">8:30 pm</text><line x1="180.8" y1="101" x2="180.8" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'A 24-hour garage sign reads: "Fuel available from 12:00 midnight every night." Write "12:00 midnight" in 24-hour format.', answer: '00:00', checkMode: 'auto', correctAnswer: '00:00', explanation: 'Midnight is a special case — 12:00 midnight (12:00 am) does not follow the usual "keep the hour" rule for am times. It is written as 00:00 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">12:00</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">am</text></svg>' },
        { difficulty: 'Easy', question: 'Tebogo claims: "12:00 pm (noon) must become 24:00 in 24-hour time, because pm times always add 12." Is Tebogo correct? Explain, and give the correct 24-hour time for 12:00 pm.', answer: 'No, Tebogo is incorrect. 12:00 pm (noon) is the special midday case, and it stays as 12:00 — it does NOT become 24:00 (24:00 is not a valid 24-hour clock reading; the next day starts again at 00:00). So 12:00 pm = 12:00 in 24-hour format.', checkMode: 'self' },

        // Block 2 — 24-hour to 12-hour conversion (4-7, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'A shop\'s digital till receipt is timestamped 17:20. Write this time in 12-hour format.', answer: '5:20 pm', checkMode: 'auto', correctAnswer: '5:20 pm', correctAnswers: ['5:20 pm', '5:20pm', '05:20 pm'], explanation: 'Since 17:20 is 13:00 or later, subtract 12: 17 − 12 = 5. Add pm: 5:20 pm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="154.4" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="154.4" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">17:20</text><line x1="154.4" y1="101" x2="154.4" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'A digital clock radio shows 00:15 in the middle of the night. Write this time in 12-hour format.', answer: '12:15 am', checkMode: 'auto', correctAnswer: '12:15 am', correctAnswers: ['12:15 am', '12:15am'], explanation: '00:15 is just after midnight, so the midnight special case applies: "00" becomes "12", giving 12:15 am ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">00:15</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">am</text></svg>' },
        { difficulty: 'Easy', question: 'A cinema timetable shows two showings: one at 13:45 and one at 01:45. Which of these two is the afternoon showing, and what is it in 12-hour format?', answer: '13:45 is the afternoon showing, which is 1:45 pm', checkMode: 'auto', correctAnswer: '13:45, 1:45 pm', correctAnswers: ['13:45, 1:45 pm', '13:45 is the afternoon showing, 1:45 pm', '1:45 pm', '13:45=1:45pm'], explanation: '13:45 is 13:00 or later, so it is an afternoon/pm time: 13 − 12 = 1, giving 1:45 pm. 01:45 is before 12:00, so it is 1:45 am (early morning), not the afternoon one ✓' },
        { difficulty: 'Easy', question: 'A flight departure board shows a flight leaving at 23:10. Write this time in 12-hour format.', answer: '11:10 pm', checkMode: 'auto', correctAnswer: '11:10 pm', correctAnswers: ['11:10 pm', '11:10pm', '23:10 pm'], explanation: 'Since 23:10 is 13:00 or later, subtract 12: 23 − 12 = 11. Add pm: 11:10 pm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="203.1" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="190" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">23:10</text><line x1="203.1" y1="101" x2="203.1" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },

        // Block 3 — Elapsed time within the same day (8-11, Medium)
        { difficulty: 'Medium', question: 'A gymnastics class starts at 07:40 and ends at 09:15. How long does the class last?', answer: '1 h 35 min', checkMode: 'auto', correctAnswer: '1 h 35 min', correctAnswers: ['1 h 35 min', '1h35min', '1 hour 35 minutes', '95 minutes', '95 min'], explanation: '07:40 to 08:00 is 20 min. 08:00 to 09:00 is 1 h. 09:00 to 09:15 is 15 min.\nTotal: 20 min + 1 h + 15 min = 1 h 35 min ✓' },
        { difficulty: 'Medium', question: 'A public library opens its reading room at 13:05 and it stays open for 2 h 50 min before closing for the day. Find the closing time (24-hour format).', answer: '15:55', checkMode: 'auto', correctAnswer: '15:55', explanation: '13:05 + 2 h 50 min = 15:55 ✓' },
        { difficulty: 'Medium', question: 'An art class ends at 17:20. If the class lasted 2 h 35 min, at what time (24-hour format) did it start?', answer: '14:45', checkMode: 'auto', correctAnswer: '14:45', explanation: 'Working backwards: 17:20 − 2 h 35 min = 14:45 ✓' },
        { difficulty: 'Medium', question: 'Zanele finds the elapsed time from 09:30 to 14:45 like this: "14:45 − 09:30 = (14 − 09) and (45 − 30) = 5 and 15, so 5,15 hours." Explain why writing the answer as "5,15 hours" is wrong, and give the correct elapsed time.', answer: 'Time is not a base-10 (decimal) system — there are 60 minutes in an hour, not 100, so the hours and minutes cannot simply be written together and read as a decimal number. The digits 5 and 15 are correct on their own (5 hours and 15 minutes), but the answer must be written as 5 h 15 min, not "5,15 hours".', checkMode: 'self' },

        // Block 4 — Elapsed time crossing midnight (12-15, Medium)
        { difficulty: 'Medium', question: 'A late-night radio show starts at 23:15 and ends at 06:40 the next morning. How long does the show run for?', answer: '7 h 25 min', checkMode: 'auto', correctAnswer: '7 h 25 min', correctAnswers: ['7 h 25 min', '7h25min', '7 hours 25 minutes', '445 minutes', '445 min'], explanation: 'Stage 1 — from 23:15 to midnight (00:00): 45 min. Stage 2 — from midnight to 06:40: 6 h 40 min.\nAdd the stages: 45 min + 6 h 40 min = 7 h 25 min ✓' },
        { difficulty: 'Medium', question: 'An overnight goods train leaves the yard at 22:40 and the journey takes 6 h 35 min. Find the arrival time in 24-hour format.', answer: '05:15', checkMode: 'auto', correctAnswer: '05:15', explanation: '22:40 to midnight is 1 h 20 min. Remaining time: 6 h 35 min − 1 h 20 min = 5 h 15 min after midnight.\nArrival: 05:15 ✓' },
        { difficulty: 'Medium', question: 'A New Year\'s countdown event starts at 21:10 and lasts 3 h 20 min. Does the event end on the same day it started, or the next day? Give the finishing time in 24-hour format.', answer: 'Next day, 00:30', checkMode: 'auto', correctAnswer: 'next day, 00:30', correctAnswers: ['next day, 00:30', 'next day 00:30', '00:30 next day', 'nextday00:30'], explanation: '21:10 + 3 h 20 min: from 21:10 to midnight is 2 h 50 min, leaving 30 min more after midnight.\nSince the total time passes 24:00, the event ends the next day at 00:30 ✓' },
        { difficulty: 'Medium', question: 'Peter finds the length of an overnight security shift from 21:40 to 05:05 like this: "05:05 − 21:40 = 21:40 minus 05:05 flipped around, so I\'ll just subtract the smaller from the bigger: 21 − 05 = 16 hours." Explain why this reasoning is flawed, and find the correct duration.', answer: 'Peter tried to force an ordinary subtraction onto a situation that crosses midnight, which does not work — the shift does not simply span "16 hours" found by subtracting the hour digits. Since the shift crosses midnight, it must be split into two stages: from 21:40 to midnight is 2 h 20 min, and from midnight to 05:05 is 5 h 5 min. Total: 2 h 20 min + 5 h 5 min = 7 h 25 min, not 16 hours.', checkMode: 'self' },

        // Block 5 — Multi-step real-world time problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A long-distance flight departs at 08:15. The first leg takes 3 h 20 min, then there is a 1 h 40 min layover, followed by a second leg of 4 h 5 min.\n\na) Find the total flying time (both legs added together, excluding the layover).\nb) Find the arrival time in 24-hour format.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total flying time', correctAnswer: '7 h 25 min', correctAnswers: ['7 h 25 min', '7h25min', '7 hours 25 minutes', '445 minutes', '445 min'], explanation: '3 h 20 min + 4 h 5 min = 7 h 25 min ✓' },
          { label: 'b) Arrival time (24-hour)', correctAnswer: '17:20', explanation: '08:15 + 3 h 20 min (leg 1) = 11:35. 11:35 + 1 h 40 min (layover) = 13:15. 13:15 + 4 h 5 min (leg 2) = 17:20 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A warehouse security guard\'s overnight shift starts at 21:15. The total time on duty is 8 h 40 min, and this includes one 30-minute meal break.\n\na) Find the time (24-hour format) the shift ends.\nb) Find the actual paid working time, excluding the meal break.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Shift end time (24-hour)', correctAnswer: '05:55', explanation: '21:15 to midnight is 2 h 45 min, leaving 5 h 55 min more of the 8 h 40 min after midnight.\nShift end: 05:55 ✓' },
          { label: 'b) Paid working time', correctAnswer: '8 h 10 min', correctAnswers: ['8 h 10 min', '8h10min', '8 hours 10 minutes', '490 minutes', '490 min'], explanation: 'Total time on duty − break: 8 h 40 min − 30 min = 8 h 10 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'A school day timetable: assembly starts at 7:35 am, and the first lesson begins at 08:00 and lasts 55 minutes. There is then a 20-minute break, followed by a second lesson that ends at 11:10.\n\na) Convert the assembly start time to 24-hour format.\nb) Find the time the first lesson ends.\nc) Find the length of the second lesson.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Assembly start (24-hour)', correctAnswer: '07:35', explanation: '7:35 am is a morning time, so it stays as 07:35 ✓' },
          { label: 'b) First lesson end time', correctAnswer: '08:55', explanation: '08:00 + 55 min = 08:55 ✓' },
          { label: 'c) Length of second lesson', correctAnswer: '1 h 55 min', correctAnswers: ['1 h 55 min', '1h55min', '1 hour 55 minutes', '115 minutes', '115 min'], explanation: 'Break ends at 08:55 + 20 min = 09:15.\nSecond lesson: 09:15 to 11:10 = 1 h 55 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'A road trip: the family leaves home at 10:00. They drive for 1 h 50 min to reach a picnic spot, stop there for 25 minutes, then drive a further 1 h 15 min to reach a game reserve gate.\n\na) Find the time they arrived at the picnic spot.\nb) Find the time they arrive at the game reserve gate.\nc) Find the total time elapsed from leaving home to arriving at the gate (including the stop).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Arrival at picnic spot', correctAnswer: '11:50', explanation: '10:00 + 1 h 50 min = 11:50 ✓' },
          { label: 'b) Arrival at game reserve gate', correctAnswer: '13:30', explanation: 'Leave the picnic spot at 11:50 + 25 min = 12:15. Drive 1 h 15 min more: 12:15 + 1 h 15 min = 13:30 ✓' },
          { label: 'c) Total elapsed time', correctAnswer: '3 h 30 min', correctAnswers: ['3 h 30 min', '3h30min', '3 hours 30 minutes', '210 minutes', '210 min'], explanation: '10:00 to 13:30 = 3 h 30 min ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered 12-hour and 24-hour time, elapsed time, and real-world time problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion rules and the count-up-in-stages method, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 2 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 2',
      questions: [
        // Block 1 — 12-hour to 24-hour conversion (0-3, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'A school notice says the sports trials begin at 3:20 pm sharp. Write this time in 24-hour format.', answer: '15:20', checkMode: 'auto', correctAnswer: '15:20', explanation: 'This is a pm time, so add 12 to the hour: 3 + 12 = 15. Keep the minutes the same: 15:20 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="137.8" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="137.8" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">3:20 pm</text><line x1="137.8" y1="101" x2="137.8" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'Themba wakes up every morning at 5:50 am to feed the chickens before school. Write this time in 24-hour format.', answer: '05:50', checkMode: 'auto', correctAnswer: '05:50', correctAnswers: ['05:50', '5:50'], explanation: '5:50 am is a morning time, so the hour stays the same, written with a leading zero: 05:50 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">5:50</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">am</text></svg>' },
        { difficulty: 'Easy', question: 'A pharmacy\'s late-night counter log records a customer arriving at "12:25 am". Write this time in 24-hour format.', answer: '00:25', checkMode: 'auto', correctAnswer: '00:25', explanation: '12:25 am is just after midnight, so it uses the midnight special case: the "12" becomes "00", giving 00:25 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="13.5" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="30" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">12:25 am</text><line x1="13.5" y1="101" x2="13.5" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'Given the two times 00:00 and 12:00 in 24-hour format, one is midnight and one is midday. Boitumelo says both should be written as "12:00" when converted to 12-hour time, with no other way to tell them apart. Is she correct? Explain the difference.', answer: 'Boitumelo is only partly right — both do use the number 12, but they are not identical: 00:00 becomes 12:00 am (midnight) and 12:00 becomes 12:00 pm (midday/noon). The am/pm label is what tells them apart, so they are not written the same way overall.', checkMode: 'self' },

        // Block 2 — 24-hour to 12-hour conversion (4-7, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'A ferry timetable shows the last crossing of the day departing at 19:05. Write this time in 12-hour format.', answer: '7:05 pm', checkMode: 'auto', correctAnswer: '7:05 pm', correctAnswers: ['7:05 pm', '7:05pm', '07:05 pm'], explanation: 'Since 19:05 is 13:00 or later, subtract 12: 19 − 12 = 7. Add pm: 7:05 pm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">19:05</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#dc2626"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">pm</text></svg>' },
        { difficulty: 'Easy', question: 'A baby monitor app logs a feeding time of 00:40. Write this time in 12-hour format.', answer: '12:40 am', checkMode: 'auto', correctAnswer: '12:40 am', correctAnswers: ['12:40 am', '12:40am'], explanation: '00:40 is just after midnight, so the midnight special case applies: "00" becomes "12", giving 12:40 am ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="15.6" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="30" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">00:40</text><line x1="15.6" y1="101" x2="15.6" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'A weather app shows the sunrise time as 05:50 and a separate alert time of 17:50. Which of these two times is the pm time, and what is it in 12-hour format?', answer: '17:50 is the pm time, which is 5:50 pm', checkMode: 'auto', correctAnswer: '17:50, 5:50 pm', correctAnswers: ['17:50, 5:50 pm', '17:50 is the pm time, 5:50 pm', '5:50 pm', '17:50=5:50pm'], explanation: '17:50 is 13:00 or later, so it is a pm time: 17 − 12 = 5, giving 5:50 pm. 05:50 is before 12:00, so it is 5:50 am (morning), the sunrise time ✓' },
        { difficulty: 'Easy', question: 'A cinema listing shows the final showing of the night at 22:35. Write this time in 12-hour format.', answer: '10:35 pm', checkMode: 'auto', correctAnswer: '10:35 pm', correctAnswers: ['10:35 pm', '10:35pm', '22:35 pm'], explanation: 'Since 22:35 is 13:00 or later, subtract 12: 22 − 12 = 10. Add pm: 10:35 pm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">22:35</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#dc2626"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">pm</text></svg>' },

        // Block 3 — Elapsed time within the same day (8-11, Medium)
        { difficulty: 'Medium', question: 'A swimming gala starts at 10:25 and ends at 13:00. How long does the gala last?', answer: '2 h 35 min', checkMode: 'auto', correctAnswer: '2 h 35 min', correctAnswers: ['2 h 35 min', '2h35min', '2 hours 35 minutes', '155 minutes', '155 min'], explanation: '10:25 to 11:00 is 35 min. 11:00 to 13:00 is 2 h.\nTotal: 35 min + 2 h = 2 h 35 min ✓' },
        { difficulty: 'Medium', question: 'A school orchestra rehearsal begins at 15:40 and lasts 2 h 35 min. Find the finishing time (24-hour format).', answer: '18:15', checkMode: 'auto', correctAnswer: '18:15', explanation: '15:40 + 2 h 35 min = 18:15 ✓' },
        { difficulty: 'Medium', question: 'A chess club session ends at 19:05. If the session lasted 1 h 50 min, at what time (24-hour format) did it start?', answer: '17:15', checkMode: 'auto', correctAnswer: '17:15', explanation: 'Working backwards: 19:05 − 1 h 50 min = 17:15 ✓' },
        { difficulty: 'Medium', question: 'Sibusiso calculates elapsed time from 08:15 to 12:50 by treating the times like ordinary decimals: "12,50 − 08,15 = 4,35, so the answer is 4 hours and 35 hundredths of an hour." Explain what is wrong with reading the digits after the colon as a decimal fraction, then give the correct elapsed time using hours and minutes.', answer: 'The digits after the colon are minutes out of 60, not a decimal fraction out of 100, so "4,35" is not a meaningful measurement of time and cannot be read as "35 hundredths of an hour". Using the count-up method instead: 08:15 to 09:00 is 45 min, 09:00 to 12:00 is 3 h, and 12:00 to 12:50 is 50 min. Total: 45 min + 3 h + 50 min = 4 h 35 min.', checkMode: 'self' },

        // Block 4 — Elapsed time crossing midnight (12-15, Medium)
        { difficulty: 'Medium', question: 'A factory\'s overnight production run starts at 22:05 and ends at 05:30 the next morning. How long does the run last?', answer: '7 h 25 min', checkMode: 'auto', correctAnswer: '7 h 25 min', correctAnswers: ['7 h 25 min', '7h25min', '7 hours 25 minutes', '445 minutes', '445 min'], explanation: 'Stage 1 — from 22:05 to midnight (00:00): 1 h 55 min. Stage 2 — from midnight to 05:30: 5 h 30 min.\nAdd the stages: 1 h 55 min + 5 h 30 min = 7 h 25 min ✓' },
        { difficulty: 'Medium', question: 'An overnight parcel courier van leaves the depot at 23:50 and the delivery route takes 4 h 25 min. Find the arrival time in 24-hour format.', answer: '04:15', checkMode: 'auto', correctAnswer: '04:15', explanation: '23:50 to midnight is 10 min. Remaining time: 4 h 25 min − 10 min = 4 h 15 min after midnight.\nArrival: 04:15 ✓' },
        { difficulty: 'Medium', question: 'A traditional wedding celebration starts at 20:55 and lasts 5 h 20 min. Does the celebration end on the same day it started, or the next day? Give the finishing time in 24-hour format.', answer: 'Next day, 02:15', checkMode: 'auto', correctAnswer: 'next day, 02:15', correctAnswers: ['next day, 02:15', 'next day 02:15', '02:15 next day', 'nextday02:15'], explanation: '20:55 + 5 h 20 min: from 20:55 to midnight is 3 h 5 min, leaving 2 h 15 min more after midnight.\nSince the total time passes 24:00, the celebration ends the next day at 02:15 ✓' },
        { difficulty: 'Medium', question: 'Refilwe finds the length of an overnight bakery shift from 22:20 to 02:15 like this: "02:15 comes before 22:20 on the clock face, so the shift can\'t really be measured — I\'ll just guess 2 hours 15 minutes since that\'s the end time." Explain the mistake in her reasoning, and find the correct duration.', answer: 'Refilwe correctly noticed something felt odd about a direct subtraction, but simply reusing the end time as the answer is not valid — it ignores how much time actually passed overnight. Since the shift crosses midnight, split it into two stages: from 22:20 to midnight is 1 h 40 min, and from midnight to 02:15 is 2 h 15 min. Total: 1 h 40 min + 2 h 15 min = 3 h 55 min, not simply "2 hours 15 minutes".', checkMode: 'self' },

        // Block 5 — Multi-step real-world time problems (16-19, Hard)
        { difficulty: 'Hard', question: 'An international flight departs at 10:40. The first leg takes 2 h 55 min, then there is a 1 h 20 min layover, followed by a second leg of 5 h 15 min.\n\na) Find the total flying time (both legs added together, excluding the layover).\nb) Find the arrival time in 24-hour format.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total flying time', correctAnswer: '8 h 10 min', correctAnswers: ['8 h 10 min', '8h10min', '8 hours 10 minutes', '490 minutes', '490 min'], explanation: '2 h 55 min + 5 h 15 min = 8 h 10 min ✓' },
          { label: 'b) Arrival time (24-hour)', correctAnswer: '20:10', explanation: '10:40 + 2 h 55 min (leg 1) = 13:35. 13:35 + 1 h 20 min (layover) = 14:55. 14:55 + 5 h 15 min (leg 2) = 20:10 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A hospital night nurse\'s shift starts at 19:50. The total time on duty is 9 h 25 min, and this includes one 40-minute rest break.\n\na) Find the time (24-hour format) the shift ends.\nb) Find the actual working time, excluding the rest break.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Shift end time (24-hour)', correctAnswer: '05:15', explanation: '19:50 to midnight is 4 h 10 min, leaving 5 h 15 min more of the 9 h 25 min after midnight.\nShift end: 05:15 ✓' },
          { label: 'b) Working time', correctAnswer: '8 h 45 min', correctAnswers: ['8 h 45 min', '8h45min', '8 hours 45 minutes', '525 minutes', '525 min'], explanation: 'Total time on duty − break: 9 h 25 min − 40 min = 8 h 45 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'A school day timetable: assembly starts at 7:50 am, and the first lesson begins at 08:15 and lasts 1 h 5 min. There is then a 10-minute break, followed by a second lesson that ends at 10:55.\n\na) Convert the assembly start time to 24-hour format.\nb) Find the time the first lesson ends.\nc) Find the length of the second lesson.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Assembly start (24-hour)', correctAnswer: '07:50', explanation: '7:50 am is a morning time, so it stays as 07:50 ✓' },
          { label: 'b) First lesson end time', correctAnswer: '09:20', explanation: '08:15 + 1 h 5 min = 09:20 ✓' },
          { label: 'c) Length of second lesson', correctAnswer: '1 h 25 min', correctAnswers: ['1 h 25 min', '1h25min', '1 hour 25 minutes', '85 minutes', '85 min'], explanation: 'Break ends at 09:20 + 10 min = 09:30.\nSecond lesson: 09:30 to 10:55 = 1 h 25 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'A road trip: the family leaves home at 08:00. They drive for 2 h 10 min to reach a farm stall, stop there for 30 minutes, then drive a further 1 h 35 min to reach the coast.\n\na) Find the time they arrived at the farm stall.\nb) Find the time they arrive at the coast.\nc) Find the total time elapsed from leaving home to arriving at the coast (including the stop).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Arrival at farm stall', correctAnswer: '10:10', explanation: '08:00 + 2 h 10 min = 10:10 ✓' },
          { label: 'b) Arrival at the coast', correctAnswer: '12:15', explanation: 'Leave the farm stall at 10:10 + 30 min = 10:40. Drive 1 h 35 min more: 10:40 + 1 h 35 min = 12:15 ✓' },
          { label: 'c) Total elapsed time', correctAnswer: '4 h 15 min', correctAnswers: ['4 h 15 min', '4h15min', '4 hours 15 minutes', '255 minutes', '255 min'], explanation: '08:00 to 12:15 = 4 h 15 min ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered 12-hour and 24-hour time, elapsed time, and real-world time problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion rules and the count-up-in-stages method, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },

    // ═══════════════════════════════════════════════════════════════════════
    // SET 3 (20 Qs)
    // ═══════════════════════════════════════════════════════════════════════
    {
      name: 'Set 3',
      questions: [
        // Block 1 — 12-hour to 24-hour conversion (0-3, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'A netball coach calls the team together for practice at 4:15 pm every Tuesday. Write this time in 24-hour format.', answer: '16:15', checkMode: 'auto', correctAnswer: '16:15', explanation: 'This is a pm time, so add 12 to the hour: 4 + 12 = 16. Keep the minutes the same: 16:15 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">4:15</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#dc2626"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">pm</text></svg>' },
        { difficulty: 'Easy', question: 'A bakery starts mixing dough every day at 4:20 am, long before the shop opens. Write this time in 24-hour format.', answer: '04:20', checkMode: 'auto', correctAnswer: '04:20', correctAnswers: ['04:20', '4:20'], explanation: '4:20 am is a morning time, so the hour stays the same, written with a leading zero: 04:20 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="46.1" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="46.1" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">4:20 am</text><line x1="46.1" y1="101" x2="46.1" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'A 24-hour clinic\'s admission log shows a patient arriving at "12:35 am". Write this time in 24-hour format.', answer: '00:35', checkMode: 'auto', correctAnswer: '00:35', explanation: '12:35 am is just after midnight, so it uses the midnight special case: the "12" becomes "00", giving 00:35 ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">12:35</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">am</text></svg>' },
        { difficulty: 'Easy', question: 'Amahle says: "00:00 and 12:00 must mean the same thing in 24-hour time, since a clock face shows 12 at the top either way." Is Amahle correct? Explain using both 12-hour equivalents.', answer: 'No, Amahle is incorrect. 00:00 is midnight, which is 12:00 am, while 12:00 in 24-hour time is midday (noon), which is 12:00 pm. They are exactly 12 hours apart — opposite ends of the day — even though a 12-hour analogue clock face looks the same at both moments.', checkMode: 'self' },

        // Block 2 — 24-hour to 12-hour conversion (4-7, Easy, DIAGRAM-FLAGGED)
        { difficulty: 'Easy', question: 'A shopping mall\'s digital directory shows the food court closing at 21:50. Write this time in 12-hour format.', answer: '9:50 pm', checkMode: 'auto', correctAnswer: '9:50 pm', correctAnswers: ['9:50 pm', '9:50pm', '21:50 pm'], explanation: 'Since 21:50 is 13:00 or later, subtract 12: 21 − 12 = 9. Add pm: 9:50 pm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="191.9" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="190" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">21:50</text><line x1="191.9" y1="101" x2="191.9" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },
        { difficulty: 'Easy', question: 'A security camera timestamp reads 00:50 during the early morning hours. Write this time in 12-hour format.', answer: '12:50 am', checkMode: 'auto', correctAnswer: '12:50 am', correctAnswers: ['12:50 am', '12:50am'], explanation: '00:50 is just after midnight, so the midnight special case applies: "00" becomes "12", giving 12:50 am ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="30" y="38" width="160" height="80" rx="14" fill="none" stroke="#0f1f3d" stroke-width="2.5"/><circle cx="30" cy="38" r="4" fill="#0f1f3d"/><circle cx="190" cy="38" r="4" fill="#0f1f3d"/><text x="110" y="90" text-anchor="middle" font-size="28" font-weight="700" fill="#2563eb" font-family="monospace">00:50</text><rect x="78" y="126" width="64" height="24" rx="6" fill="#16a34a"/><text x="110" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="white">am</text></svg>' },
        { difficulty: 'Easy', question: 'A gym\'s class schedule shows a spin class at 06:30 and a yoga class at 18:30. Which of these two classes is in the evening, and what is that time in 12-hour format?', answer: 'The 18:30 class (yoga) is in the evening, which is 6:30 pm', checkMode: 'auto', correctAnswer: '18:30, 6:30 pm', correctAnswers: ['18:30, 6:30 pm', '18:30 is the evening class, 6:30 pm', '6:30 pm', '18:30=6:30pm'], explanation: '18:30 is 13:00 or later, so it is a pm time: 18 − 12 = 6, giving 6:30 pm. 06:30 is before 12:00, so it is 6:30 am, the morning spin class ✓' },
        { difficulty: 'Easy', question: 'A late cinema listing shows the midnight showing at 23:55. Write this time in 12-hour format.', answer: '11:55 pm', checkMode: 'auto', correctAnswer: '11:55 pm', correctAnswers: ['11:55 pm', '11:55pm', '23:55 pm'], explanation: 'Since 23:55 is 13:00 or later, subtract 12: 23 − 12 = 11. Add pm: 11:55 pm ✓', diagramSvg: '<svg viewBox="0 0 220 170" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="70" width="100" height="26" fill="#f0fdf4" stroke="#bbf7d0" stroke-width="1.5"/><rect x="110" y="70" width="100" height="26" fill="#fef2f2" stroke="#fecaca" stroke-width="1.5"/><text x="10" y="63" font-size="11" fill="#374151">00:00</text><text x="210" y="63" text-anchor="end" font-size="11" fill="#374151">23:59</text><line x1="110" y1="65" x2="110" y2="101" stroke="#9ca3af" stroke-width="1"/><text x="110" y="63" text-anchor="middle" font-size="11" fill="#374151">12:00</text><text x="35" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#16a34a">am</text><text x="185" y="87" text-anchor="middle" font-size="11" font-weight="700" fill="#dc2626">pm</text><circle cx="209.3" cy="83" r="5" fill="#ea580c" stroke="#0f1f3d" stroke-width="1"/><text x="190" y="122" text-anchor="middle" font-size="14" font-weight="700" fill="#ea580c">23:55</text><line x1="209.3" y1="101" x2="209.3" y2="112" stroke="#ea580c" stroke-width="1.5"/></svg>' },

        // Block 3 — Elapsed time within the same day (8-11, Medium)
        { difficulty: 'Medium', question: 'A school debate competition starts at 10:50 and ends at 13:15. How long does the competition last?', answer: '2 h 25 min', checkMode: 'auto', correctAnswer: '2 h 25 min', correctAnswers: ['2 h 25 min', '2h25min', '2 hours 25 minutes', '145 minutes', '145 min'], explanation: '10:50 to 11:00 is 10 min. 11:00 to 13:00 is 2 h. 13:00 to 13:15 is 15 min.\nTotal: 10 min + 2 h + 15 min = 2 h 25 min ✓' },
        { difficulty: 'Medium', question: 'A community pottery workshop begins at 12:20 and lasts 3 h 45 min. Find the finishing time (24-hour format).', answer: '16:05', checkMode: 'auto', correctAnswer: '16:05', explanation: '12:20 + 3 h 45 min = 16:05 ✓' },
        { difficulty: 'Medium', question: 'A maths tutoring session ends at 18:40. If the session lasted 2 h 5 min, at what time (24-hour format) did it start?', answer: '16:35', checkMode: 'auto', correctAnswer: '16:35', explanation: 'Working backwards: 18:40 − 2 h 5 min = 16:35 ✓' },
        { difficulty: 'Medium', question: 'Given the elapsed time from 07:55 to 12:10, Andile writes: "12:10 − 07:55 = 5:−45, so I\'ll just flip the sign and say 5 h 45 min." Explain why this "flip the sign" shortcut is not a valid method, and use the count-up method to find the correct elapsed time.', answer: 'Getting a negative number of minutes is a signal that a "borrow" is needed from the hours column (because 60 minutes make an hour, not 100), not something you can fix by simply flipping a sign — that step does not follow any real rule of time arithmetic and can easily give a wrong answer. Using the count-up method instead: 07:55 to 08:00 is 5 min, 08:00 to 12:00 is 4 h, and 12:00 to 12:10 is 10 min. Total: 5 min + 4 h + 10 min = 4 h 15 min, not 5 h 45 min.', checkMode: 'self' },

        // Block 4 — Elapsed time crossing midnight (12-15, Medium)
        { difficulty: 'Medium', question: 'An overnight airport security shift starts at 23:35 and ends at 04:50 the next morning. How long is the shift?', answer: '5 h 15 min', checkMode: 'auto', correctAnswer: '5 h 15 min', correctAnswers: ['5 h 15 min', '5h15min', '5 hours 15 minutes', '315 minutes', '315 min'], explanation: 'Stage 1 — from 23:35 to midnight (00:00): 25 min. Stage 2 — from midnight to 04:50: 4 h 50 min.\nAdd the stages: 25 min + 4 h 50 min = 5 h 15 min ✓' },
        { difficulty: 'Medium', question: 'An overnight cross-country bus leaves the station at 21:15 and the journey takes 7 h 20 min. Find the arrival time in 24-hour format.', answer: '04:35', checkMode: 'auto', correctAnswer: '04:35', explanation: '21:15 to midnight is 2 h 45 min. Remaining time: 7 h 20 min − 2 h 45 min = 4 h 35 min after midnight.\nArrival: 04:35 ✓' },
        { difficulty: 'Medium', question: 'A New Year\'s Eve fireworks display starts at 22:50 and lasts 2 h 35 min. Does the display end on the same day it started, or the next day? Give the finishing time in 24-hour format.', answer: 'Next day, 01:25', checkMode: 'auto', correctAnswer: 'next day, 01:25', correctAnswers: ['next day, 01:25', 'next day 01:25', '01:25 next day', 'nextday01:25'], explanation: '22:50 + 2 h 35 min: from 22:50 to midnight is 1 h 10 min, leaving 1 h 25 min more after midnight.\nSince the total time passes 24:00, the display ends the next day at 01:25 ✓' },
        { difficulty: 'Medium', question: 'Nomsa finds the length of an overnight gaming marathon from 20:40 to 02:45 like this: "20:40 is bigger than 02:45, so the marathon must have gone backwards in time, which is impossible — so the question must have a typing error and I\'ll skip it." Explain why the situation makes perfect sense, and find the correct duration.', answer: 'Nomsa is right that 20:40 looks "bigger" than 02:45 as plain numbers, but that is exactly what happens whenever a time period crosses midnight into the next day — it is not a typing error. Splitting it into two stages: from 20:40 to midnight is 3 h 20 min, and from midnight to 02:45 is 2 h 45 min. Total: 3 h 20 min + 2 h 45 min = 6 h 5 min.', checkMode: 'self' },

        // Block 5 — Multi-step real-world time problems (16-19, Hard)
        { difficulty: 'Hard', question: 'A long-haul flight departs at 06:35. The first leg takes 4 h 10 min, then there is a 55-minute layover, followed by a second leg of 3 h 40 min.\n\na) Find the total flying time (both legs added together, excluding the layover).\nb) Find the arrival time in 24-hour format.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Total flying time', correctAnswer: '7 h 50 min', correctAnswers: ['7 h 50 min', '7h50min', '7 hours 50 minutes', '470 minutes', '470 min'], explanation: '4 h 10 min + 3 h 40 min = 7 h 50 min ✓' },
          { label: 'b) Arrival time (24-hour)', correctAnswer: '15:20', explanation: '06:35 + 4 h 10 min (leg 1) = 10:45. 10:45 + 55 min (layover) = 11:40. 11:40 + 3 h 40 min (leg 2) = 15:20 ✓' },
        ] },
        { difficulty: 'Hard', question: 'A mine site security officer\'s overnight shift starts at 22:30. The total time on duty is 7 h 50 min, and this includes one 20-minute meal break.\n\na) Find the time (24-hour format) the shift ends.\nb) Find the actual paid working time, excluding the meal break.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Shift end time (24-hour)', correctAnswer: '06:20', explanation: '22:30 to midnight is 1 h 30 min, leaving 6 h 20 min more of the 7 h 50 min after midnight.\nShift end: 06:20 ✓' },
          { label: 'b) Paid working time', correctAnswer: '7 h 30 min', correctAnswers: ['7 h 30 min', '7h30min', '7 hours 30 minutes', '450 minutes', '450 min'], explanation: 'Total time on duty − break: 7 h 50 min − 20 min = 7 h 30 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'A school day timetable: assembly starts at 7:45 am, and the first lesson begins at 08:10 and lasts 1 h 15 min. There is then a 15-minute break, followed by a second lesson that ends at 11:20.\n\na) Convert the assembly start time to 24-hour format.\nb) Find the time the first lesson ends.\nc) Find the length of the second lesson.', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Assembly start (24-hour)', correctAnswer: '07:45', explanation: '7:45 am is a morning time, so it stays as 07:45 ✓' },
          { label: 'b) First lesson end time', correctAnswer: '09:25', explanation: '08:10 + 1 h 15 min = 09:25 ✓' },
          { label: 'c) Length of second lesson', correctAnswer: '1 h 40 min', correctAnswers: ['1 h 40 min', '1h40min', '1 hour 40 minutes', '100 minutes', '100 min'], explanation: 'Break ends at 09:25 + 15 min = 09:40.\nSecond lesson: 09:40 to 11:20 = 1 h 40 min ✓' },
        ] },
        { difficulty: 'Hard', question: 'A road trip: the family leaves home at 11:10. They drive for 1 h 35 min to reach a waterfall viewpoint, stop there for 20 minutes, then drive a further 55 minutes to reach the campsite.\n\na) Find the time they arrived at the waterfall viewpoint.\nb) Find the time they arrive at the campsite.\nc) Find the total time elapsed from leaving home to arriving at the campsite (including the stop).', answer: '', checkMode: 'auto', parts: [
          { label: 'a) Arrival at waterfall viewpoint', correctAnswer: '12:45', explanation: '11:10 + 1 h 35 min = 12:45 ✓' },
          { label: 'b) Arrival at the campsite', correctAnswer: '14:00', explanation: 'Leave the viewpoint at 12:45 + 20 min = 13:05. Drive 55 minutes more: 13:05 + 55 min = 14:00 ✓' },
          { label: 'c) Total elapsed time', correctAnswer: '2 h 50 min', correctAnswers: ['2 h 50 min', '2h50min', '2 hours 50 minutes', '170 minutes', '170 min'], explanation: '11:10 to 14:00 = 2 h 50 min ✓' },
        ] },
      ],
      scoreMessages: [
        { minScore: 20, message: 'Outstanding! You have mastered 12-hour and 24-hour time, elapsed time, and real-world time problems.' },
        { minScore: 15, message: 'Great work! You are confident with most of this — review any missed questions.' },
        { minScore: 10, message: 'Good effort! Revisit the conversion rules and the count-up-in-stages method, then try again.' },
        { minScore: 0, message: 'Keep going — work through the study guide again and retry this set.' },
      ],
    },
  ],

  resultsConfig: {
    totalMarks: 20,
    messages: [
      { minScore: 20, message: 'Outstanding! You have mastered time.' },
      { minScore: 15, message: 'Great work!' },
      { minScore: 10, message: 'Good effort, review and try again.' },
      { minScore: 0, message: 'Keep going, work through the guide again.' },
    ],
  },

  scoreMessages: [
    { minScore: 20, message: 'Outstanding! You have mastered time.' },
    { minScore: 15, message: 'Great work!' },
    { minScore: 10, message: 'Good effort, review and try again.' },
    { minScore: 0, message: 'Keep going, work through the guide again.' },
  ],
}
