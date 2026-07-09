# Validation — Read-only Dashboard (Phase 2)

How to know this phase is done and safe to merge.

## Agents dashboard

- [ ] Visiting `/` (after `npm run seed`) shows the list of seeded agents.
- [ ] Expanding an agent inline reveals their ailments, with no page
      navigation required.
- [ ] Agents with no ailments show a clear "no ailments on file" message
      rather than a blank space.
- [ ] With an empty database (no seed run), the page shows a friendly
      empty state instead of erroring.

## Therapies list

- [ ] The therapies list renders all seeded therapies with name and
      description.
- [ ] Each therapy shows the ailments it treats (via the
      `ailment_therapies` join) — verify at least one therapy linked to
      multiple ailments displays all of them.
- [ ] Empty state renders cleanly if there are no therapies.

## Stack sanity

- [ ] No booking/appointment UI was added — confirms Phase 3 scope wasn't
      pulled forward.
- [ ] No new schema changes in `lib/schema.ts` — only new read queries in
      the query layer.
- [ ] `npm run build` (tsc, for `src/index.ts`) still succeeds unchanged.
- [ ] `npm run build:next` succeeds with no type errors.
- [ ] `npm run seed` still runs cleanly against the current schema.

## Merge criteria

All checkboxes above are checked, and a reviewer (or presenter, if built
live) can restate in one sentence what this phase proved: AgentClinic has
a real read-only dashboard — agents with their ailments, therapies with
the ailments they treat — with no booking or auth yet.
