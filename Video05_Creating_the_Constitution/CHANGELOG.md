# Changelog

All notable changes to AgentClinic are recorded here, newest first.

## 2026-07-09 — Phase 8: Dark mode

- Added a persisted light/dark theme toggle in the nav, next to the
  existing "Viewing as: Agent/Staff" toggle.
- Every existing page (Home, Agents, Therapies, Appointments, About, and
  both `/agents/[id]` and `/therapies/[id]` detail pages) now has a dark
  theme.
- Theme choice survives navigation and page reloads, with no flash of
  the wrong theme on load.

Spec: [specs/2026-07-09-dark-mode/](specs/2026-07-09-dark-mode/)

## 2026-07-09 — Phase 7: Appointments page, search, and filtering

- Added a dedicated `/appointments` page holding the booking form and the
  upcoming/past appointments list, moved off the home page.
- Home page now links to Agents, Therapies, and Appointments via three
  nav cards, with no inline booking/appointments content of its own.
- Added a live, client-side name filter on the Agents and Therapies list
  pages, with a distinct empty state for "no matches" vs. "no data at
  all."
- Removed the now-unused hash-scroll helper that existed only to support
  the old home-page appointments anchor.

Spec: [specs/2026-07-09-appointments-search-filter/](specs/2026-07-09-appointments-search-filter/)

## 2026-07-09 — Phase 6: Detail pages

- Added `/agents/[id]` pages showing an agent's ailments and their
  upcoming/past appointments.
- Added `/therapies/[id]` pages showing the ailments a therapy treats
  and that therapy's upcoming/past appointments.
- Agents and Therapies list pages now link into these detail pages
  instead of expanding ailments inline.
- Visiting a detail page for an unknown id now shows a proper 404.

Spec: [specs/2026-07-09-detail-pages/](specs/2026-07-09-detail-pages/)

## 2026-07-09 — Phase 5: Dedicated list pages

- Agents and Therapies moved off the home page onto their own
  `/agents` and `/therapies` routes, each full-width with their own
  empty state.
- Home page now just links to them via nav cards — no inline lists.
- The "Viewing as: Agent/Staff" toggle moved to the root layout and now
  persists as you navigate between pages, instead of resetting per page.
- Fixed a bug where a plain anchor link caused a full page reload that
  wiped the role state; added a small `ScrollToHash` helper so in-page
  scrolling stays reliable without depending on that.

Spec: [specs/2026-07-09-dedicated-list-pages/](specs/2026-07-09-dedicated-list-pages/)

## 2026-07-09 — Phase 4: Site shell and navigation

- Added a persistent nav bar (Home, Agents, Therapies, Appointments,
  About) shared across pages.
- Home page is now a landing pitch with three nav cards, instead of
  opening straight into the dashboard.
- Added an About page covering the mission and how the project was built.
- First of four phases growing AgentClinic into a real multi-page site
  (no auth, no new staff-only concerns).

Spec: [specs/2026-07-09-site-shell-nav/](specs/2026-07-09-site-shell-nav/)

## 2026-07-09 — Phase 3: Booking, roles, and polish

- Added a booking flow: pick an agent, a therapy, and a time to create an
  appointment, with a per-therapy-slot double-booking check.
- Added an appointments list split into upcoming and past.
- Added a cosmetic "Viewing as: Agent / Staff" role toggle; staff-only
  mode unlocks adding therapies and cancelling/rescheduling appointments.
- Polish pass: consistent styling across all dashboard views, responsive
  layout check, and empty/pending states throughout.

Spec: [specs/2026-07-09-booking-roles-polish/](specs/2026-07-09-booking-roles-polish/)

## 2026-07-09 — Phase 2: Read-only dashboard

- Home page is now the real agents dashboard: agents list with
  inline-expandable ailments.
- Added a therapies list showing which ailments each therapy treats.

Spec: [specs/2026-07-09-read-only-dashboard/](specs/2026-07-09-read-only-dashboard/)

## 2026-07-09 — Phase 1: Core data model

- Added the real schema for agents, ailments, therapies, and
  appointments, with many-to-many links between agents/ailments and
  ailments/therapies.
- Added a seed script with satirical demo data (e.g. "Recursive
  Rubber-Duck Syndrome").

Spec: [specs/2026-07-09-core-data-model/](specs/2026-07-09-core-data-model/)

## 2026-07-09 — Phase 0: Project setup

- Migrated the bare TypeScript project to Next.js with Tailwind CSS.
- Wired up SQLite plumbing and a minimal branded home page confirming the
  database connection.

Spec: [specs/2026-07-09-project-setup/](specs/2026-07-09-project-setup/)
