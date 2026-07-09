# Roadmap

High-level implementation order, in small phases. Each phase should be
independently shippable and leave the app in a working (and demo-able)
state — good for a course walkthrough or a booth demo where someone might
wander over mid-build.

## Phase 0 — Project setup

- Migrate the existing bare TypeScript project to Next.js.
- Add Tailwind CSS.
- Set up SQLite with a typed query layer.
- One placeholder page confirming the app boots (a "the clinic is open"
  moment).

## Phase 1 — Core data model

- Define schema/types for Agent, Ailment, Therapy, Appointment.
- Seed script with sample data for local development (invent some fun
  ailments here).
- No UI yet — just the model and a way to inspect it (e.g. a script or
  minimal API route).

## Phase 2 — Read-only dashboard

- Dashboard page listing agents.
- Agent detail view showing their ailments.
- Therapies list view.
- Staff and agents share this view for now (no auth yet — everyone's in the
  waiting room together).

## Phase 3 — Booking, roles, and polish

Combines the former Phase 3 (booking), Phase 4 (staff vs. agent views),
and Phase 5 (polish) into one phase, since together they round out the
app into something demo-ready:

- Book an appointment: pick an agent, a therapy, a time.
- Appointment list view (upcoming/past).
- Basic validation (no double-booking a time slot).
- Distinguish staff and agent perspectives in the dashboard (still no auth
  — a role switch or route split is enough at this stage).
- Staff-only actions: manage therapies, cancel/reschedule appointments.
- Visual/UX pass for the attractive, modern-browser experience (Steve) —
  this is the phase where AgentClinic gets to look genuinely nice.
- Responsive layout check.
- Empty/loading/error states across dashboard views.

Phase 3 finished the original single-page MVP. From here, AgentClinic
grows into a real multi-page site — more surface area, still no auth,
still no staff-only concerns beyond what Phase 3 already built.

## Phase 4 — Site shell and navigation

- Add a persistent nav bar (Home, Agents, Therapies, Appointments) shared
  across pages.
- Home page becomes a landing/overview page — a short pitch plus links
  into the rest of the site, not the dashboard itself.
- Add a simple "About AgentClinic" content page — the mission, in the
  site's own voice, for course/demo audiences per mission.md.

## Phase 5 — Dedicated list pages

- Move the agents list off the home page onto its own `/agents` route.
- Move the therapies list onto its own `/therapies` route.
- Each list page gets room to breathe (no longer squeezed into a
  two-column dashboard grid) and its own empty state.

## Phase 6 — Detail pages

- `/agents/[id]`: a real per-agent page — ailments, and that agent's
  upcoming/past appointments.
- `/therapies/[id]`: a real per-therapy page — ailments it treats, and
  that therapy's upcoming/past appointments.
- List pages link into these instead of (or in addition to) expanding
  inline.

## Phase 7 — Appointments page, search, and filtering

- Dedicated `/appointments` route: the booking form plus the
  upcoming/past list, moved off the home page.
- Simple search/filter on `/agents` and `/therapies` (by name).
- Revisit empty/loading/error states across all new pages.

## Phase 8 — Dark mode

- Add a dark theme across the whole site (nav, home, list pages, detail
  pages, appointments, about) using Tailwind CSS.
- A toggle to switch between light and dark, with the choice persisted
  across page navigation and reloads.
- Visual/UX pass to keep the site looking genuinely nice in dark mode too
  (still Steve's attractive, modern-browser bar), not just an inverted
  palette.

## Later / explicitly not scheduled yet

- Authentication.
- Notifications/reminders for appointments.
- Swapping SQLite for a networked database.
- Automated test suite.
