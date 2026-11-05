// The single source of truth for every due date in the course.
// Canvas, the syllabus key dates, the session homework cards, the /deadlines page
// and the calendar feed all read from here. Change a date here, rebuild, and every
// page agrees. (Canvas itself still has to be edited by hand — ids are in the url.)
//
// Rules the schedule follows: one due date per Mon–Sun week; fourteen days from the
// night a notebook is assigned; the standing time is Wednesday 7:40 PM, before class;
// nothing due Thanksgiving week; the midterm and the final get their weeks alone.

export type DeadlineKind = 'homework' | 'case' | 'project' | 'milestone' | 'in-class';

export interface Deadline {
  id: string;
  iso: string;        // YYYY-MM-DD, America/New_York
  hhmm: string;       // 24h local time, '19:40' or '23:59'
  label: string;      // what it is, as students know it
  kind: DeadlineKind;
  points: string;     // '3', '25', '5 · complete/incomplete', 'in class'
  url: string;        // the Canvas submission page (or discussion)
  session?: number;   // the session whose page carries the assignment
  note?: string;      // one line of why-this-date, shown on /deadlines
}

const canvas = 'https://canvas.suffolk.edu/courses/18439/';

export const deadlines: Deadline[] = [
  { id: 'hw1', iso: '2026-09-24', hhmm: '23:59', label: 'Homework #1 — The Blending Challenge', kind: 'homework', points: '3', url: canvas + 'assignments/259767', session: 2, note: 'Extended one day: the Canvas assignment opened late.' },
  { id: 'hw2', iso: '2026-09-30', hhmm: '19:40', label: 'Homework #2 — The COO Memo', kind: 'homework', points: '3', url: canvas + 'assignments/259770', session: 3 },
  { id: 'hw3', iso: '2026-10-07', hhmm: '19:40', label: 'Homework #3 — The Staffing Matchmaker', kind: 'homework', points: '3', url: canvas + 'assignments/260483', session: 4 },
  { id: 'hw4', iso: '2026-10-21', hhmm: '19:40', label: 'Homework #4 — Min-Cost Flow', kind: 'homework', points: '3', url: canvas + 'assignments/261895', session: 5, note: 'Assigned Oct 7. Two weeks, like every homework from here on.' },
  { id: 'hw5', iso: '2026-10-30', hhmm: '23:59', label: 'Homework #5 — Project-Selection Knapsack', kind: 'homework', points: '3', url: canvas + 'assignments/261898', session: 6, note: 'Assigned Oct 14. Extended to Friday Oct 30, 11:59 PM.' },
  { id: 'case', iso: '2026-11-04', hhmm: '19:40', label: 'Midterm Case Competition — model, memo, briefing in class', kind: 'case', points: '25', url: canvas + 'assignments/261899', session: 7, note: 'Launches Oct 21. Nothing else is due this week.' },
  { id: 'proposal', iso: '2026-11-12', hhmm: '23:59', label: 'Final Project Proposal — your pitch (discussion post)', kind: 'project', points: '5 · complete/incomplete', url: canvas + 'discussion_topics/202440', session: 9, note: 'Thursday, because Wednesday is Veterans Day and there is no class that week.' },
  { id: 'hw6', iso: '2026-11-18', hhmm: '19:40', label: 'Homework #6 — Churn Markov Model', kind: 'homework', points: '3', url: canvas + 'assignments/261901', session: 9, note: 'Assigned Nov 4.' },
  { id: 'hw7', iso: '2026-12-02', hhmm: '19:40', label: 'Homework #7 — Pick One: Inventory MDP or Pricing Curve', kind: 'homework', points: '3', url: canvas + 'assignments/261902', session: 10, note: 'Pricing (Session 8) open since Oct 28; the MDP (Session 10) since Nov 18. Nothing is due Thanksgiving week.' },
  { id: 'milestone', iso: '2026-12-09', hhmm: '19:40', label: 'Final Project Milestone — first working result + dry-run deck', kind: 'milestone', points: '5 · complete/incomplete', url: canvas + 'assignments/261903', session: 11, note: 'So the last week is for polish and rehearsal, not debugging.' },
  { id: 'final', iso: '2026-12-15', hhmm: '23:59', label: 'Final Project — notebook + decision memo + deck', kind: 'project', points: '30', url: canvas + 'assignments/261904', session: 12, note: 'The night before presentations. Closes when they begin.' },
  { id: 'defense', iso: '2026-12-16', hhmm: '19:40', label: 'Final presentations + individual model defense', kind: 'in-class', points: '5 · in class', url: canvas + 'assignments/261905', session: 13, note: 'Session 13, exam week. Every team member speaks and answers two questions.' },
];

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function localDate(iso: string): Date {
  const [y, m, d] = iso.split('-').map(Number);
  return new Date(y, m - 1, d, 12, 0, 0);     // noon avoids any DST edge
}

/** 'Oct 21' */
export function shortDate(iso: string): string {
  const d = localDate(iso);
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

/** 'Wed' */
export function weekday(iso: string): string {
  return DAYS[localDate(iso).getDay()];
}

/** '7:40 PM' */
export function clock(hhmm: string): string {
  const [h, m] = hhmm.split(':').map(Number);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour = ((h + 11) % 12) + 1;
  return `${hour}:${String(m).padStart(2, '0')} ${suffix}`;
}

/** 'Wed Oct 21 · 7:40 PM' — the string every page shows */
export function display(d: Deadline): string {
  return `${weekday(d.iso)} ${shortDate(d.iso)} · ${clock(d.hhmm)}`;
}

/** Find the deadline whose Canvas link a homework card points at. */
export function deadlineForUrl(url?: string): Deadline | undefined {
  if (!url) return undefined;
  return deadlines.find((d) => d.url === url);
}
