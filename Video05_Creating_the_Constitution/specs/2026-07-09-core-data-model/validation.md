# Validation — Core Data Model (Phase 1)

How to know this phase is done and safe to merge.

## Schema

- [ ] Tables exist for `agents`, `ailments`, `therapies`, `agent_ailments`,
      `ailment_therapies`, `appointments`.
- [ ] Schema creation is idempotent — running the app twice doesn't error
      on "table already exists."
- [ ] Foreign keys on `appointments` (`agent_id`, `therapy_id`) and both
      join tables reference the correct parent tables.

## Seed script

- [ ] `npm run seed` runs with no errors and populates all tables.
- [ ] Running `npm run seed` twice doesn't duplicate or error — it either
      resets cleanly or is safe to re-run.
- [ ] Seeded data includes 3-5 agents, satirical ailments, matching
      therapies (via the join table), and at least one appointment.

## Inspection

- [ ] The inspection route/page shows seeded agents and their ailments
      after running the seed script.
- [ ] `npm run build` (tsc, for `src/index.ts`) still succeeds unchanged.
- [ ] `npm run build:next` succeeds with no type errors.

## Stack sanity

- [ ] No dashboard/booking UI was added — confirms Phase 2/3 scope wasn't
      pulled forward.
- [ ] No new dependencies outside what's already committed in
      [tech-stack.md](../tech-stack.md) (schema/queries use
      `better-sqlite3` directly, no ORM introduced).

## Merge criteria

All checkboxes above are checked, and a reviewer (or presenter, if built
live) can restate in one sentence what this phase proved: the real
Agent/Ailment/Therapy/Appointment schema exists, is seeded with demo data,
and is inspectable — with zero product UI built yet.
