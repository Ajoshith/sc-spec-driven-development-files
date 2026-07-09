# Validation — Appointments Page, Search, and Filtering (Phase 7)

How to know this phase is done and safe to merge.

## Routes

- [ ] `/appointments` renders the booking form and the upcoming/past
      appointments list, full-width.
- [ ] Booking an appointment from `/appointments` still works, including
      the double-booking check from Phase 3.
- [ ] Home page no longer shows the booking form or appointments list;
      it shows the pitch and three nav cards (Agents, Therapies,
      Appointments).
- [ ] Nav bar's Appointments link and the home page's new nav card both
      go to `/appointments`.

## Search/filter

- [ ] Typing in the `/agents` name filter narrows the list live, with no
      page reload.
- [ ] Typing in the `/therapies` name filter narrows the list live, with
      no page reload.
- [ ] Clearing the filter text restores the full list on both pages.
- [ ] A filter with no matches shows a sensible empty state (distinct
      from "no agents/therapies exist at all").

## Empty/loading/error states

- [ ] `/agents`, `/therapies`, `/agents/[id]`, `/therapies/[id]`, and
      `/appointments` each handle the true-empty case (no data) and, for
      the list pages, the no-filter-matches case.
- [ ] Nothing regresses the loading/error handling established in
      Phase 3's polish pass.

## Stack sanity

- [ ] Search/filter is client-side only — no new API routes were added
      for it.
- [ ] Booking form's agent/therapy pickers remain plain dropdowns, not
      searchable (confirms scope wasn't pulled in beyond the roadmap
      wording).
- [ ] No auth, schema, or dependency changes.
- [ ] `npm run build` (tsc, for `src/index.ts`) still succeeds unchanged.
- [ ] `npm run build:next` succeeds with no type errors, and shows
      `/appointments` as a real route in the build output.
- [ ] `npm run seed` still runs cleanly.

## Merge criteria

All checkboxes above are checked, and a reviewer can restate in one
sentence what this phase proved: Appointments now has its own dedicated
page like Agents and Therapies, and the Agents/Therapies list pages can
be searched by name — completing AgentClinic's multi-page site started
in Phase 4.
