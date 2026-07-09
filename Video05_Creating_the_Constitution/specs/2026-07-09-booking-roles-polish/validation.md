# Validation — Booking, Roles, and Polish (Phase 3)

How to know this phase is done and safe to merge.

## Booking flow

- [ ] Booking an appointment (agent + therapy + time) succeeds and shows
      up in the appointments list.
- [ ] Booking the same therapy at the same `scheduled_at` a second time is
      rejected with a clear error — the double-booking check works.
- [ ] Booking the same agent at the same time for a *different* therapy
      succeeds (confirms the check is per-therapy-slot, not per-agent, per
      the decision in requirements.md).
- [ ] Appointments list correctly splits into upcoming and past.

## Roles

- [ ] The "Viewing as: Agent / Staff" toggle is visible and switches
      views.
- [ ] In agent mode, staff-only actions (manage therapies, cancel,
      reschedule) are not shown.
- [ ] In staff mode, cancelling an appointment removes it from the
      upcoming list; rescheduling updates its time and re-runs the
      double-booking check.

## Polish

- [ ] Dashboard looks visually consistent across agents, therapies,
      booking, and appointments views (spacing, typography, color).
- [ ] Layout holds up at mobile, tablet, and desktop widths with no
      obvious breakage.
- [ ] Every data-driven view has a working empty state (no data), and the
      booking form has a working error state (double-booking rejection).

## Stack sanity

- [ ] No auth/access-control system was introduced — the role toggle
      remains cosmetic, per the decision in requirements.md.
- [ ] No new dependencies outside what's already committed in
      [tech-stack.md](../tech-stack.md).
- [ ] `npm run build` (tsc, for `src/index.ts`) still succeeds unchanged.
- [ ] `npm run build:next` succeeds with no type errors.
- [ ] `npm run seed` still runs cleanly against the current schema.

## Merge criteria

All checkboxes above are checked, and a reviewer (or presenter, if built
live) can restate in one sentence what this phase proved: AgentClinic
supports booking appointments with basic conflict checking, a
staff/agent role distinction, and a dashboard that holds together
visually — the app now feels demo-complete end to end.
