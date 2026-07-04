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
