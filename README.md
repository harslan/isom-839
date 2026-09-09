# ISOM 839: Prescriptive Analytics — Modeling & Optimization

Course website for ISOM 839 at Suffolk University's Sawyer Business School, Fall 2026.
Prof. Hasan Arslan · Wednesdays 7:40–9:40 PM.

Built with Astro + Tailwind, deployed on Vercel. Sibling site of [isom-260](https://isom-260.vercel.app).

## Develop

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
```

## Structure

- `src/content/sessions/session-XX.json` — one file per session (objectives, agenda, resources, activities, homework)
- `src/data/course.ts` / `src/data/syllabus.ts` — course metadata, grading, policies
- `public/session-01/` — slides and the Session 1 Colab notebook
