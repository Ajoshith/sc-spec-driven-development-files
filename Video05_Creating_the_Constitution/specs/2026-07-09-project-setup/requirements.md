# Requirements — Project Setup (Phase 0)

Implements [Phase 0 — Project setup](../roadmap.md) from the roadmap.

## Scope

Migrate the bare TypeScript project into the stack committed to in
[tech-stack.md](../tech-stack.md): Next.js + Tailwind CSS + SQLite. Land a
single placeholder page proving the stack boots end to end. This phase adds
no product features (no agents, ailments, therapies, or appointments yet —
that's [Phase 1](../roadmap.md)).

## Decisions

- **Keep `src/index.ts` alongside the Next.js app.** It stays as-is (the
  existing `console.log('Happy developing ✨')` script + `npm run build`
  via `tsc`). The Next.js app lives in its own `app/` directory with its
  own build path. Nothing here requires removing the original entry point.
- **SQLite: plumbing only, no tables.** Wire up a SQLite connection and a
  typed query helper. No schema yet — Phase 1 owns the real
  Agent/Ailment/Therapy/Appointment tables. It's fine for this phase to
  ship with zero tables, as long as the connection/query layer is provable
  (e.g. a `SELECT 1`-style smoke check).
- **Home page ships in two steps.** First, a minimal AgentClinic home page
  as static markup (simple branded landing, not the Next.js default
  starter — Tailwind-styled, says something like "AgentClinic is open"),
  proving Next.js + Tailwind render together. Second, once SQLite plumbing
  exists, the same page is wired up to render the SQLite smoke check
  result. It's not a real homepage yet — just the phase's demo checkpoint.

## Out of scope

- Any data model, schema, or seed data (Phase 1).
- Any dashboard, agent/ailment/therapy views (Phase 2+).
- Auth, testing framework, hosting/deploy target — all explicitly deferred
  in [tech-stack.md](../tech-stack.md).

## Context

- This is a satirical/teaching project (see [mission.md](../mission.md)) —
  optimize for a clean, demoable checkpoint over production hardening.
- Package manager stays npm per tech-stack.md.
