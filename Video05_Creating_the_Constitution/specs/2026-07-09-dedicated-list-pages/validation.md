# Validation — Dedicated List Pages (Phase 5)

How to know this phase is done and safe to merge.

## Routes

- [ ] `/agents` renders the agents list with working inline-expand
      ailments.
- [ ] `/therapies` renders the therapies list with ailments-treated
      shown per therapy.
- [ ] Home page no longer shows the agents/therapies grid; nav cards and
      nav bar link to `/agents` and `/therapies` correctly.
- [ ] Home page still shows pitch, booking form, and appointments list,
      unchanged from Phase 4.

## Role toggle

- [ ] Toggling to Staff on `/therapies` (revealing "Add a therapy") and
      then navigating to `/` shows staff-only controls there too
      (cancel/reschedule on appointments) — confirms the toggle now
      persists across pages.
- [ ] Toggling back to Agent on any page hides staff-only controls
      everywhere.

## Staff actions

- [ ] "Add a therapy" form appears on `/therapies` in Staff mode and
      still successfully adds a therapy.

## Stack sanity

- [ ] No `/agents/[id]` or `/therapies/[id]` detail routes were added yet
      (confirms Phase 6 scope wasn't pulled forward).
- [ ] Booking/appointments are still on the home page, not moved
      (confirms Phase 7 scope wasn't pulled forward).
- [ ] No schema, auth, or dependency changes.
- [ ] `npm run build` (tsc, for `src/index.ts`) still succeeds unchanged.
- [ ] `npm run build:next` succeeds with no type errors, and shows
      `/agents` and `/therapies` as real routes in the build output.
- [ ] `npm run seed` still runs cleanly.

## Merge criteria

All checkboxes above are checked, and a reviewer can restate in one
sentence what this phase proved: Agents and Therapies are now real,
full-width pages instead of a squeezed dashboard grid, and the staff/agent
toggle behaves like a real site-wide setting instead of a per-page one.
