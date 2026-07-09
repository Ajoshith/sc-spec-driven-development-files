# Plan — Booking, Roles, and Polish (Phase 3)

Numbered task groups. Each group should leave the repo in a working state.

## 1. Booking query layer

1.1. Add `createAppointment(agentId, therapyId, scheduledAt)` to
     `lib/queries.ts`, checking for an existing appointment on the same
     `therapy_id` + `scheduled_at` before inserting; throw/return an error
     result if one exists.
1.2. Add `cancelAppointment(id)` and `rescheduleAppointment(id, scheduledAt)`
     (reschedule re-runs the same double-booking check).
1.3. Extend `listAppointments()` (or add a variant) to join in agent name
     and therapy name for display, and support splitting into
     upcoming/past by comparing `scheduled_at` to now.

## 2. Booking flow UI

2.1. Add a booking form (agent select, therapy select, date/time input) —
     either inline on the dashboard or a small dedicated section/route.
2.2. Wire the form to `createAppointment`; show a clear error if the slot
     is already booked.
2.3. Add an appointments list view split into upcoming/past sections.

## 3. Role toggle and staff actions

3.1. Add a client-side role toggle ("Viewing as: Agent / Staff") visible
     on the dashboard.
3.2. Gate staff-only actions behind the toggle: adding a therapy,
     cancelling an appointment, rescheduling an appointment.
3.3. Agent-mode view keeps read/booking access but hides staff-only
     controls.

## 4. Polish pass

4.1. Sweep all dashboard views (agents, therapies, booking form,
     appointments list) for consistent spacing, typography, and color use
     matching what's already established in Phase 0-2.
4.2. Responsive check at mobile/tablet/desktop widths; fix any layout
     breakage.
4.3. Add empty, loading, and error states for every data-driven view that
     doesn't already have one (agents/therapies already have empty
     states from Phase 2 — extend the pattern to appointments and the
     booking form).

## 5. Verification pass

5.1. Run through [validation.md](validation.md) end to end.
5.2. Fix anything that fails before calling this phase done.
