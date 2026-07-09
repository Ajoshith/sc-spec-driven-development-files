# Plan — Site Shell and Navigation (Phase 4)

Numbered task groups. Each group should leave the repo in a working
state.

## 1. Nav bar component

1.1. Add a `NavBar` component (server component is fine — no
     interactivity needed) with links: Home, Agents, Therapies,
     Appointments, About.
1.2. For Agents/Therapies/Appointments, link to anchors on the current
     home page's existing sections (e.g. `/#agents`, `/#therapies`,
     `/#appointments`) rather than new routes — those arrive in
     Phases 5-7.
1.3. Add stable `id` attributes to the existing dashboard sections on the
     home page so the anchor links actually land on them.
1.4. Mount `NavBar` in the root layout so it's shared across all pages.

## 2. Landing page

2.1. Rework the top of the current home page into a short pitch: a
     headline, a sentence or two of mission-style copy, and three nav
     cards (Agents, Therapies, Appointments) linking to the same anchors
     as the nav bar.
2.2. Move the existing dashboard sections (agents, therapies, booking,
     appointments) below the new pitch/cards block — same components,
     same behavior, just repositioned under the new landing intro.

## 3. About page

3.1. Add an `/about` route with the mission-and-build-process content:
     the satirical premise, the target audience from mission.md, and a
     short "how this was built" note (spec-driven development, phases,
     teaching-demo framing).
3.2. Link `/about` from the nav bar.

## 4. Verification pass

4.1. Run through [validation.md](validation.md) end to end.
4.2. Fix anything that fails before calling this phase done.
