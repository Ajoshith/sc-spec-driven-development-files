# Requirements — Dedicated List Pages (Phase 5)

Implements [Phase 5 — Dedicated list pages](../roadmap.md), the second of
four phases growing AgentClinic into a multi-page site (Phase 4 built the
shell; Phases 6-7 follow).

## Scope

- Move the agents list off the home page onto its own `/agents` route.
- Move the therapies list onto its own `/therapies` route.
- Each list page gets room to breathe (full-width single column, not
  squeezed into the home page's two-column grid) and its own empty
  state (already exists per-component from Phase 2 — just needs to keep
  working on the new routes).

## Decisions

- **Home page keeps its pitch and nav cards, drops the inline lists.**
  Booking and the appointments list stay on the home page for now (they
  move in Phase 7); the agents/therapies grid that Phase 4 left on the
  home page is removed entirely. The nav cards and nav bar links now
  point at `/agents` and `/therapies` instead of home-page anchors.
- **The staff/agent role toggle moves to the root layout and persists
  across pages.** `RoleProvider` currently wraps only the home page,
  meaning role state resets on navigation. Now that Agents/Therapies/Home
  are separate pages, that reset is confusing — picking Staff on
  `/therapies` should still show staff-only controls on the home page's
  appointments section. `RoleProvider` moves to `app/layout.tsx` and the
  `RoleToggle` moves into `NavBar` so it's visible everywhere, not just
  on the home page's header block.
- **List pages keep the Phase 2 inline-expand interaction; no jump ahead
  to detail routes.** `/agents/[id]` and `/therapies/[id]` don't exist
  yet — that's Phase 6. `AgentList`'s inline expand and `TherapyList`'s
  ailments-treated display carry over unchanged onto the new routes.
- **The staff-only "add a therapy" form moves with the therapies list**
  to `/therapies`, since that's where therapies are now managed.

## Out of scope

- `/agents/[id]` or `/therapies/[id]` detail routes (Phase 6).
- Moving booking/appointments off the home page (Phase 7).
- Search/filtering (Phase 7).
- Any auth, schema, or database changes.

## Context

- Builds on the nav shell from
  [2026-07-09-site-shell-nav](../2026-07-09-site-shell-nav/) — the nav
  bar's Agents/Therapies links stop being anchors and become real routes
  in this phase.
- `AgentList`, `TherapyList`, `AddTherapyForm`, `StaffOnly`, and the query
  helpers from Phases 1-3 are reused as-is; this phase only relocates
  where they render.
