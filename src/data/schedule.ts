// The semester spine: every session's date and module.
// Wednesdays 7:40–9:40 PM · No class Nov 11 (Veterans Day) or Nov 25 (Thanksgiving).

export interface SessionMeta {
  date: string;      // display date
  iso: string;       // ISO date for "next class" logic
  module: string;    // module name
}

export interface Module {
  name: string;
  sessions: number[];
  blurb: string;
}

export const modules: Module[] = [
  { name: 'Foundations', sessions: [1], blurb: 'What prescriptive analytics is — and your first model.' },
  { name: 'Linear Optimization', sessions: [2, 3], blurb: 'Formulation, sensitivity, and the economics of constraints.' },
  { name: 'Network Optimization', sessions: [4, 5], blurb: 'Transportation, flows, and supply chain design.' },
  { name: 'Integer Optimization', sessions: [6, 7], blurb: 'Yes/no decisions, scheduling, and the midterm case.' },
  { name: 'Nonlinear Optimization', sessions: [8], blurb: 'Portfolios, pricing, and curves.' },
  { name: 'Decisions Over Time', sessions: [9, 10], blurb: 'Markov chains and sequential decision processes.' },
  { name: 'The AI Frontier', sessions: [11, 12], blurb: 'Predict-then-optimize, reinforcement learning, LLM copilots.' },
  { name: 'Finale', sessions: [13], blurb: 'Your optimization story, presented.' },
];

export const sessionMeta: Record<number, SessionMeta> = {
  1:  { date: 'Sep 9',  iso: '2026-09-09', module: 'Foundations' },
  2:  { date: 'Sep 16', iso: '2026-09-16', module: 'Linear Optimization' },
  3:  { date: 'Sep 23', iso: '2026-09-23', module: 'Linear Optimization' },
  4:  { date: 'Sep 30', iso: '2026-09-30', module: 'Network Optimization' },
  5:  { date: 'Oct 7',  iso: '2026-10-07', module: 'Network Optimization' },
  6:  { date: 'Oct 14', iso: '2026-10-14', module: 'Integer Optimization' },
  7:  { date: 'Oct 21', iso: '2026-10-21', module: 'Integer Optimization' },
  8:  { date: 'Oct 28', iso: '2026-10-28', module: 'Nonlinear Optimization' },
  9:  { date: 'Nov 4',  iso: '2026-11-04', module: 'Decisions Over Time' },
  10: { date: 'Nov 18', iso: '2026-11-18', module: 'Decisions Over Time' },
  11: { date: 'Dec 2',  iso: '2026-12-02', module: 'The AI Frontier' },
  12: { date: 'Dec 9',  iso: '2026-12-09', module: 'The AI Frontier' },
  13: { date: 'Dec 16', iso: '2026-12-16', module: 'Finale' },
};
