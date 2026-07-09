# Plan — Core Data Model (Phase 1)

Numbered task groups. Each group should leave the repo in a working state.

## 1. Schema definition

1.1. Add a schema module (e.g. `lib/schema.ts`) with `CREATE TABLE`
     statements for `agents`, `ailments`, `therapies`, `agent_ailments`
     (join table), `ailment_therapies` (join table), and `appointments`.
1.2. `appointments` columns: `id`, `agent_id` (FK → agents), `therapy_id`
     (FK → therapies), `scheduled_at`.
1.3. Wire schema creation into `lib/db.ts` so tables are created on first
     connection (idempotent — `CREATE TABLE IF NOT EXISTS`).

## 2. Typed models

2.1. Add TypeScript types/interfaces for `Agent`, `Ailment`, `Therapy`,
     `Appointment`, and the two join records, matching the schema columns.
2.2. Add small typed query helpers in `lib/db.ts` (or a new `lib/queries.ts`)
     for basic reads (list agents, list ailments for an agent, list
     therapies for an ailment, list appointments) — just enough to support
     the seed script and a future inspection route.

## 3. Seed script

3.1. Add a seed script (e.g. `scripts/seed.ts`) that clears and repopulates
     all tables.
3.2. Populate 3-5 agents with satirical ailments (e.g. "Recursive
     Rubber-Duck Syndrome," "Excessive Async/Await Anxiety"), matching
     therapies, and a couple of sample appointments.
3.3. Add an npm script (e.g. `npm run seed`) to run it.

## 4. Inspection route

4.1. Add a minimal route (e.g. `app/api/debug/route.ts`) or extend the
     Phase 0 home page to list seeded agents and their ailments, proving
     the schema + seed data work end to end without building real
     dashboard UI yet.

## 5. Verification pass

5.1. Run through [validation.md](validation.md) end to end.
5.2. Fix anything that fails before calling this phase done.
