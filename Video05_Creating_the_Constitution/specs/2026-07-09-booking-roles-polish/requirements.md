# Requirements — Booking, Roles, and Polish (Phase 3)

Implements [Phase 3 — Booking, roles, and polish](../roadmap.md), which
combines the former Phase 3 (booking), Phase 4 (staff vs. agent views),
and Phase 5 (polish) into one phase, built on top of the schema and
dashboard from [Phase 1](../2026-07-09-core-data-model/) and
[Phase 2](../2026-07-09-read-only-dashboard/).

## Scope

- **Booking flow**: pick an agent, a therapy, and a time; create an
  appointment. Appointment list view (upcoming/past).
- **Validation**: a therapy cannot be double-booked at the same
  `scheduled_at`. (An agent can appear in multiple appointments at
  different times; the constraint is per-therapy-slot, not per-agent.)
- **Staff vs. agent views**: a visible role toggle (e.g. "Viewing as:
  Agent / Staff") in the dashboard UI. No auth — anyone can flip it.
  Staff-only actions, shown only in staff mode: manage therapies (add
  therapy, no need for full edit/delete in this phase unless trivial),
  cancel or reschedule an appointment.
- **Polish pass**: consistent spacing/typography across all dashboard
  views, a responsive layout check (mobile/tablet/desktop per Steve's
  "modern browser" bar), and empty/loading/error states for every view
  that reads data (agents, therapies, appointments, booking form).

## Decisions

- **Double-booking check is per-therapy-slot.** A given therapy can't
  have two appointments at the exact same `scheduled_at`. This matches
  the roadmap's literal "time slot" wording and is simple to check with a
  `SELECT` before insert.
- **Role switch is a UI toggle, not a route split.** A simple client-side
  toggle (e.g. stored in a cookie or just component state) changes which
  actions render. This is explicitly not access control — it's a demo
  convenience, consistent with auth being deferred (see
  [tech-stack.md](../tech-stack.md)).
- **Polish is a solid pass, not a redesign.** No new design system, no
  component library — same Tailwind-only approach from
  [tech-stack.md](../tech-stack.md). Focus on consistency, responsiveness,
  and empty/loading/error states rather than visual reinvention.
- **Appointments use the existing schema unchanged.** `appointments`
  already has `agent_id`, `therapy_id`, `scheduled_at` from Phase 1 — no
  new columns needed for booking or for cancel/reschedule (reschedule
  updates `scheduled_at` in place; no status/cancelled column is added
  unless implementation finds it's unavoidable).

## Out of scope

- Real authentication or access control — the role toggle is cosmetic.
- Notifications/reminders for appointments (still "later," per
  roadmap.md).
- Swapping SQLite for a networked database (still "later").
- Automated test suite (still deferred per
  [tech-stack.md](../tech-stack.md)).

## Context

- Satirical/teaching project (see [mission.md](../mission.md)) — this
  phase is intentionally the biggest lift so far, since it's what makes
  the demo feel like a real, usable app rather than a data browser.
- Builds on `lib/queries.ts`, `lib/schema.ts`, `lib/types.ts` from Phase 1,
  and the dashboard components (`app/page.tsx`, `AgentList.tsx`,
  `TherapyList.tsx`) from Phase 2.
