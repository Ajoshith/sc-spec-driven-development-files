# Requirements — Read-only Dashboard (Phase 2)

Implements [Phase 2 — Read-only dashboard](../roadmap.md) from the
roadmap, on top of the schema and query helpers from
[Phase 1](../2026-07-09-core-data-model/).

## Scope

Turn the Phase 1 inspection view into the real read-only dashboard:

- Agents list, with ailments viewable inline per agent.
- Therapies list, showing which ailments each therapy treats.
- No auth — staff and agents share the same view for now (per
  roadmap.md).
- Still read-only: no booking, no create/edit/delete anywhere in this
  phase (that's [Phase 3](../roadmap.md)).

## Decisions

- **The dashboard replaces the home page**, rather than living at a
  separate `/dashboard` route. The root route (`/`) becomes the real
  agents dashboard — one canonical view, not a duplicate of the Phase 1
  inline list plus a second page.
- **Agent ailments expand inline**, not on a separate per-agent route. No
  `/agents/[id]` page in this phase — clicking/expanding an agent in the
  list reveals their ailments in place. Keeps this phase small; a
  dedicated detail route can come later if the roadmap calls for it.
- **Therapies list shows linked ailments.** Each therapy displays which
  ailments it treats, using the `ailment_therapies` join from Phase 1 —
  makes the many-to-many relationship visible, not just decorative
  schema.
- **The Phase 0 DB "smoke check" line is dropped from the visible UI** now
  that real data is rendering — a broken query will be obvious from an
  empty/error dashboard without a separate status line.

## Out of scope

- Booking flow, appointment creation/validation (Phase 3).
- Staff-only actions, role distinction (Phase 4).
- Auth of any kind (still deferred per [tech-stack.md](../tech-stack.md)).
- Any new schema changes — this phase only reads via Phase 1's query
  helpers (extending `lib/queries.ts` with new read queries is in scope;
  changing `lib/schema.ts` is not).

## Context

- Satirical/teaching project (see [mission.md](../mission.md)) — dashboard
  should look reasonably polished (Tailwind, per tech-stack.md) since
  Phase 5 is the dedicated polish pass, not this one, but it doesn't need
  to be pixel-perfect yet.
- Builds on `lib/queries.ts`, `lib/types.ts` from
  [2026-07-09-core-data-model](../2026-07-09-core-data-model/); expect to
  add a `listTherapiesWithAilments`-style helper there.
