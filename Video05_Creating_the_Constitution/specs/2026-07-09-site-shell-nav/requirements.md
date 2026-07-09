# Requirements — Site Shell and Navigation (Phase 4)

Implements [Phase 4 — Site shell and navigation](../roadmap.md), the
first of four phases that grow AgentClinic from a single-page dashboard
into a real multi-page site (Phases 5-7 follow). No auth, no new
staff-only concerns — Phase 3 already covers what staff/agent
distinction this project needs.

## Scope

- A persistent nav bar (Home, Agents, Therapies, Appointments) shared
  across pages.
- The home page stops being the dashboard and becomes a landing/overview
  page.
- A new "About AgentClinic" content page.

## Decisions

- **Home page becomes a short pitch plus nav cards.** Mission-style intro
  copy (who AgentClinic is for, per mission.md) plus three link cards —
  Agents, Therapies, Appointments — pointing into the rest of the site.
  Not a data view; that's what the dedicated pages in Phases 5-7 are for.
- **Nav links point at today's content, not tomorrow's routes.** `/agents`,
  `/therapies`, and `/appointments` don't exist as real pages yet (they
  arrive in Phases 5-7). For now the nav bar links to the corresponding
  sections still living on the current dashboard content, so the site
  feels navigable today. Phases 5-7 repoint these same links at real
  routes without changing the nav bar component itself.
- **About page covers the mission and the build process.** The satirical
  premise and target audience from mission.md, plus a short "how this was
  built" note (spec-driven development, phases, this being a teaching
  demo) — directly useful to the course-student and conference-demo
  audience mission.md names.
- **The existing dashboard content is not deleted.** Agents, therapies,
  booking, and appointments sections keep working exactly as Phase 3 left
  them; this phase only adds a shell (nav + landing page + about page)
  around them. Moving that content onto its own routes is Phase 5-7's
  job.

## Out of scope

- Creating `/agents`, `/therapies`, or `/appointments` as real routes
  (Phases 5-6-7).
- Any per-agent or per-therapy detail route (Phase 6).
- Search/filtering (Phase 7).
- Any auth, new staff-only actions, or database changes.

## Context

- Builds on the dashboard from
  [2026-07-09-booking-roles-polish](../2026-07-09-booking-roles-polish/)
  — that page's sections stay intact, just wrapped in a new shell.
- See [mission.md](../mission.md) for the audience and tone the landing
  and about pages should match, and [tech-stack.md](../tech-stack.md) for
  what's still deferred (auth, hosting, tests) — none of that changes
  here.
