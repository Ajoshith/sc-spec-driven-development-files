# Requirements — Detail Pages (Phase 6)

Implements [Phase 6 — Detail pages](../roadmap.md), the third of four
phases growing AgentClinic into a multi-page site (Phase 4 built the
shell, Phase 5 gave agents/therapies their own list routes, Phase 7
follows).

## Scope

- `/agents/[id]`: a real per-agent page showing that agent's ailments
  and their upcoming/past appointments.
- `/therapies/[id]`: a real per-therapy page showing the ailments it
  treats and that therapy's upcoming/past appointments.
- List pages (`/agents`, `/therapies`) link into these detail pages
  instead of expanding inline.

## Decisions

- **List items link out; inline expand is removed.** `AgentList` and
  `TherapyList` no longer expand ailments inline — each agent/therapy
  name becomes a link to its `/agents/[id]` or `/therapies/[id]` page,
  which is where ailment detail now lives. Matches the roadmap note that
  list pages should link into detail pages "instead of (or in addition
  to) expanding inline," and keeps the list pages lighter.
- **Appointments on detail pages reuse the existing upcoming/past list
  UI**, filtered down to the one agent or therapy. No new appointment
  display component — the same split/rendering built for the home
  page's appointments section is reused with a filtered query, avoiding
  duplicate logic ahead of Phase 7 moving appointments to their own
  route anyway.
- **Detail pages are read-only for this phase.** No cancel/reschedule
  controls here, staff or otherwise — that stays exclusively on the
  home page's appointment list. Detail pages only surface ailments and
  appointment history, per the roadmap bullet for this phase.

## Out of scope

- Cancel/reschedule actions on detail pages (stays on the home page).
- Moving booking/appointments off the home page (Phase 7).
- Search/filtering on list pages (Phase 7).
- Any auth, schema, or database changes.

## Context

- Builds on [2026-07-09-dedicated-list-pages](../2026-07-09-dedicated-list-pages/),
  which gave agents/therapies their own list routes and explicitly
  deferred detail routes to this phase.
- Reuses appointment query/list logic from
  [2026-07-09-booking-roles-polish](../2026-07-09-booking-roles-polish/)
  and the core schema from
  [2026-07-09-core-data-model](../2026-07-09-core-data-model/).
- See [mission.md](../mission.md) for audience/tone and
  [tech-stack.md](../tech-stack.md) for the committed stack.
