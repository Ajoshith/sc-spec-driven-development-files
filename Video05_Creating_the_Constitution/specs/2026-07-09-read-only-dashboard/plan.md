# Plan — Read-only Dashboard (Phase 2)

Numbered task groups. Each group should leave the repo in a working state.

## 1. Query layer additions

1.1. Add `listTherapiesWithAilments()` to `lib/queries.ts` (or equivalent),
     returning each therapy with its linked ailments via
     `ailment_therapies`.
1.2. Reuse the existing `listAgentsWithAilments()` from Phase 1 for the
     agents list — no changes needed there.

## 2. Agents dashboard (replaces home page)

2.1. Rework `app/page.tsx` into the agents dashboard: list of agents, each
     expandable (client-side) to reveal their ailments inline.
2.2. Drop the Phase 0 "Database connected" status line from the visible
     UI.
2.3. Empty state: if there are no agents (e.g. before seeding), show a
     "no agents yet — run `npm run seed`" message (carry forward from
     Phase 1).

## 3. Therapies list view

3.1. Add a therapies section (either on the same dashboard page or a
     `/therapies` route — pick whichever keeps the page uncluttered) using
     `listTherapiesWithAilments()`.
3.2. Each therapy shows its name, description, and the ailments it
     treats.
3.3. Empty state for therapies, mirroring the agents empty state.

## 4. Layout pass

4.1. Give the dashboard a simple two-section layout (agents / therapies)
     with a shared page heading — reuse the existing Tailwind styling
     conventions from Phase 0/1, no new design system.

## 5. Verification pass

5.1. Run through [validation.md](validation.md) end to end.
5.2. Fix anything that fails before calling this phase done.
