# Validation — Site Shell and Navigation (Phase 4)

How to know this phase is done and safe to merge.

## Nav bar

- [ ] Nav bar appears on every page (home and about, at minimum).
- [ ] Home, Agents, Therapies, Appointments, About links are all present
      and clickable.
- [ ] Clicking Agents/Therapies/Appointments scrolls to the corresponding
      section on the home page (anchor links resolve correctly).

## Landing page

- [ ] Home page opens with a short pitch and three nav cards, not
      straight into the agents list.
- [ ] The existing agents, therapies, booking, and appointments sections
      still work exactly as before (booking still succeeds, double-
      booking still rejected, role toggle still gates staff actions) —
      just positioned below the new intro.

## About page

- [ ] `/about` renders the mission and a short build-process note.
- [ ] `/about` is reachable from the nav bar and doesn't 404.

## Stack sanity

- [ ] No new routes for agents/therapies/appointments were created yet
      (confirms Phase 5-7 scope wasn't pulled forward).
- [ ] No auth, new staff-only actions, or schema changes introduced.
- [ ] `npm run build` (tsc, for `src/index.ts`) still succeeds unchanged.
- [ ] `npm run build:next` succeeds with no type errors.
- [ ] `npm run seed` still runs cleanly.

## Merge criteria

All checkboxes above are checked, and a reviewer can restate in one
sentence what this phase proved: AgentClinic now has a real nav bar, a
landing page instead of a bare dashboard, and an about page — the shell
the next three phases will fill in with dedicated routes.
