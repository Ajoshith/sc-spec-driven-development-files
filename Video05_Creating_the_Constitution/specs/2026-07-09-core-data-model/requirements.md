# Requirements — Core Data Model (Phase 1)

Implements [Phase 1 — Core data model](../roadmap.md) from the roadmap.

## Scope

Define the real schema for the four core entities from
[mission.md](../mission.md) — Agent, Ailment, Therapy, Appointment — on top
of the SQLite plumbing from [Phase 0](../2026-07-09-project-setup/). Add a
seed script with sample data. No UI in this phase; the schema is only
proven via a script or minimal inspection route.

## Decisions

- **Ailment ↔ Therapy is many-to-many.** A therapy can treat more than one
  ailment and an ailment can have more than one therapy, matching
  mission.md's "a treatment offered for one or more ailments." Modeled with
  an `ailment_therapies` join table.
- **Agent ↔ Ailment is many-to-many, no status field.** An `agent_ailments`
  join table links agents to their current ailments. No history/status
  tracking yet (e.g. active vs. resolved) — that's a future amendment if
  the roadmap calls for it.
- **Appointment connects an Agent, a Therapy, and a time.** Per
  mission.md's core-entities definition: `agent_id`, `therapy_id`, and a
  scheduled time column. No status field yet either (booked/cancelled
  handling is Phase 3's concern per roadmap.md).
- **Seed data is fun and demo-flavored.** ~3-5 agents with satirical
  ailments (e.g. "Recursive Rubber-Duck Syndrome"), matching therapies, and
  a couple of sample appointments — this is a teaching/demo project (see
  [mission.md](../mission.md)), so seed data should be good on-stage
  material, not generic placeholder rows.
- **Schema lives alongside the existing `lib/db.ts` client** from Phase 0.
  Tables are created via a migration/setup step (e.g. a `lib/schema.ts` or
  SQL file run once) rather than a full migration framework — no migration
  tooling has been chosen yet (out of scope, see tech-stack.md's deferred
  list).

## Out of scope

- Any dashboard or UI (Phase 2+).
- Booking flow logic, double-booking validation (Phase 3).
- Ailment/appointment status or history tracking.
- Auth, testing framework, hosting — still deferred per
  [tech-stack.md](../tech-stack.md).

## Context

- This is a satirical/teaching project (see [mission.md](../mission.md)) —
  the schema should be simple and legible on screen during a demo, not
  exhaustively normalized.
- Builds directly on the SQLite plumbing (`lib/db.ts`, `better-sqlite3`)
  already set up in
  [2026-07-09-project-setup](../2026-07-09-project-setup/).
