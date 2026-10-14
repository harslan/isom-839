import type { APIRoute } from 'astro';
import { deadlines, clock, weekday, shortDate } from '../data/deadlines';

// A subscribable calendar of every due date. Times are America/New_York; the
// VTIMEZONE block lets every calendar app get the DST switch (Nov 1, 2026) right.
const TZ = `BEGIN:VTIMEZONE
TZID:America/New_York
BEGIN:DAYLIGHT
TZOFFSETFROM:-0500
TZOFFSETTO:-0400
TZNAME:EDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0400
TZOFFSETTO:-0500
TZNAME:EST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE`;

const esc = (s: string) => s.replace(/\\/g, '\\\\').replace(/;/g, '\;').replace(/,/g, '\\,').replace(/\n/g, '\\n');
const stamp = (iso: string, hhmm: string) => `${iso.replace(/-/g, '')}T${hhmm.replace(':', '')}00`;

export const GET: APIRoute = () => {
  const events = deadlines.map((d) => {
    const start = stamp(d.iso, d.hhmm);
    const summary = `ISOM 839 due: ${d.label}`;
    const desc = `${d.kind === 'in-class' ? 'In class' : 'Due'} ${weekday(d.iso)} ${shortDate(d.iso)} at ${clock(d.hhmm)} · ${d.points} points${d.note ? ' · ' + d.note : ''}\nSubmit: ${d.url}\nSchedule: https://isom-839.vercel.app/deadlines`;
    return [
      'BEGIN:VEVENT',
      `UID:isom839-fall2026-${d.id}@isom-839.vercel.app`,
      `DTSTAMP:20261014T120000Z`,
      `DTSTART;TZID=America/New_York:${start}`,
      `DTEND;TZID=America/New_York:${start}`,
      `SUMMARY:${esc(summary)}`,
      `DESCRIPTION:${esc(desc)}`,
      `URL:${d.url}`,
      'BEGIN:VALARM',
      'TRIGGER:-P1D',
      'ACTION:DISPLAY',
      `DESCRIPTION:${esc('Tomorrow: ' + d.label)}`,
      'END:VALARM',
      'END:VEVENT',
    ].join('\r\n');
  });
  const body = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Suffolk University//ISOM 839 Fall 2026//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:ISOM 839 Deadlines',
    'X-WR-TIMEZONE:America/New_York',
    TZ.replace(/\n/g, '\r\n'),
    ...events,
    'END:VCALENDAR',
  ].join('\r\n') + '\r\n';
  return new Response(body, { headers: { 'Content-Type': 'text/calendar; charset=utf-8', 'Content-Disposition': 'inline; filename="isom-839-deadlines.ics"' } });
};
