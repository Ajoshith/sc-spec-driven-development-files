# Requirements — Appointments Page, Search, and Filtering (Phase 7)

Implements [Phase 7 — Appointments page, search, and filtering](../roadmap.md),
the last of the phases growing AgentClinic into a multi-page site (Phase 4
built the shell, Phase 5 gave Agents/Therapies their own routes, Phase 6
added detail pages).

## Scope

- Add a dedicated `/appointments` route holding the booking form and the
  upcoming/past appointments list, moved off the home page.
- Add simple search/filter (by name) on `/agents` and `/therapies`.
- Revisit empty/loading/error states across all new pages introduced in
  Phases 4-7 (`/agents`, `/therapies`, `/agents/[id]`, `/therapies/[id]`,
  `/appointments`).

## Decisions

- **Home page gains a third nav card for Appointments.** To match the
  existing Agents/Therapies nav cards from Phase 4, the home page's nav
  card row grows to three, linking to `/appointments`. Consistent visual
  treatment across all three top-level list-ish routes.
- **Search/filter is a live, client-side text filter.** Given SQLite and
  a small satirical dataset per [tech-stack.md](../tech-stack.md), there's
  no need for a server round-trip: `/agents` and `/therapies` already
  fetch their full list server-side, so filtering by name happens in a
  client component as the user types, with no extra API route.
- **Booking form pickers are not in scope for search/filter.** The
  roadmap bullet names `/agents` and `/therapies` specifically; the
  agent/therapy `<select>` dropdowns inside the booking form on
  `/appointments` stay plain dropdowns, avoiding scope creep beyond the
  literal roadmap wording.
- **Home page drops its booking form and appointments list entirely**,
  keeping only the pitch and (now three) nav cards — mirroring how Phase 5
  removed the agents/therapies grid from home in favor of dedicated
  routes.

## Out of scope

- Search/filter on the booking form's agent/therapy pickers.
- Any auth, schema, or database changes.
- Search/filter on `/agents/[id]` or `/therapies/[id]` (they show a single
  entity, not a list).
- Sorting, pagination, or filters beyond name substring match.

## Context

- Builds on the list pages from
  [2026-07-09-dedicated-list-pages](../2026-07-09-dedicated-list-pages/)
  and the detail pages from
  [2026-07-09-detail-pages](../2026-07-09-detail-pages/).
- Booking form, double-booking validation, and the upcoming/past
  appointments list are reused as-is from
  [2026-07-09-booking-roles-polish](../2026-07-09-booking-roles-polish/);
  this phase only relocates where they render and adds search on top of
  the existing `AgentList`/`TherapyList` components.
- See [mission.md](../mission.md) for audience/tone and
  [tech-stack.md](../tech-stack.md) for the committed stack this phase
  stays within.
