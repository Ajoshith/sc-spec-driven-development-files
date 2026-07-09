# Plan — Appointments Page, Search, and Filtering (Phase 7)

Numbered task groups. Each group should leave the repo in a working
state.

## 1. `/appointments` route

1.1. Add `app/appointments/page.tsx`: fetch agents, therapies, and
     appointments as the home page currently does; render the booking
     form and the upcoming/past appointments list, full-width, with a
     page heading.
1.2. Remove the booking form and appointments list from the home page.

## 2. Update nav and home page

2.1. Add an Appointments nav card to the home page, alongside the
     existing Agents/Therapies cards, linking to `/appointments`.
2.2. Confirm `NavBar`'s Appointments link (added in Phase 4) already
     points at `/appointments` — update it if it was still an anchor.
2.3. Confirm the home page still renders correctly (pitch + three nav
     cards, nothing else).

## 3. Search/filter on `/agents` and `/therapies`

3.1. Add a small client component (e.g. `NameFilter`) rendering a text
     input, used by both list pages.
3.2. On `/agents`, filter the fetched agent list by name substring
     (case-insensitive) as the user types; reuse the existing empty
     state when the filter matches nothing.
3.3. On `/therapies`, same treatment for the therapy list.

## 4. Empty/loading/error states pass

4.1. Review `/agents`, `/therapies`, `/agents/[id]`, `/therapies/[id]`,
     and `/appointments` for consistent empty states (no data at all vs.
     no filter matches), loading states, and error handling.
4.2. Fix or add states that are missing or inconsistent with the style
     established in Phase 3's polish pass.

## 5. Verification pass

5.1. Run through [validation.md](validation.md) end to end.
5.2. Fix anything that fails before calling this phase done.
