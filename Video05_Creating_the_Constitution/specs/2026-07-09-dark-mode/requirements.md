# Requirements — Dark Mode (Phase 8)

Implements [Phase 8 — Dark mode](../roadmap.md), the first phase since
Phase 7 closed out the scheduled multi-page site work. AgentClinic now
gets a full dark theme across every existing page.

## Scope

- A manual light/dark toggle in the nav, persisted across navigation and
  reloads.
- Tailwind's `class`-based dark mode strategy (`dark:` variants driven by
  a `dark` class on `<html>`).
- Dark styling for every existing page: Home, Agents, Therapies,
  Appointments, About, and the `/agents/[id]` and `/therapies/[id]`
  detail pages.

## Decisions

- **Manual toggle, persisted.** A theme toggle in the nav, next to the
  existing "Viewing as: Agent/Staff" toggle, sets the theme explicitly
  and persists the choice (e.g. `localStorage`) so it survives page
  navigation and reloads — the same pattern already established for the
  role toggle, per [feedback on this project's tone](../mission.md)
  favoring simple, demo-friendly mechanisms over heavier state
  management.
- **Tailwind `class` strategy.** `darkMode: 'class'` in the Tailwind
  config, with a `dark` class toggled on `<html>` by the theme control.
  Matches [tech-stack.md](../tech-stack.md)'s Tailwind-only, no-extra-
  dependency styling approach — no CSS-variable token layer needed for a
  single light/dark pair.
- **Full-site visual pass in this phase.** Every page that exists today
  gets dark-mode styling now, not just the shell — consistent with how
  [Phase 3's polish pass](../2026-07-09-booking-roles-polish/) covered
  everything that existed at that point in time.

## Out of scope

- System-preference (`prefers-color-scheme`) detection or auto-switching
  — the toggle is the only theme control.
- Any new pages, routes, or data/schema changes.
- Auth, notifications, or other "Later" roadmap items.

## Context

- Builds on the site shell from
  [2026-07-09-site-shell-nav](../2026-07-09-site-shell-nav/) (nav bar,
  root layout) and every page added since
  ([dedicated-list-pages](../2026-07-09-dedicated-list-pages/),
  [detail-pages](../2026-07-09-detail-pages/),
  [appointments-search-filter](../2026-07-09-appointments-search-filter/)).
- See [mission.md](../mission.md) for the "attractive, modern-browser
  experience" bar this phase's visual pass is held to, and
  [tech-stack.md](../tech-stack.md) for the Tailwind-only styling
  constraint.
