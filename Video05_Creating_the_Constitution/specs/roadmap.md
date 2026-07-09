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

## Later / explicitly not scheduled yet

- Authentication.
- Notifications/reminders for appointments.
- Swapping SQLite for a networked database.
- Automated test suite.
