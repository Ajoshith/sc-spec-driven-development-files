# Plan — Dedicated List Pages (Phase 5)

Numbered task groups. Each group should leave the repo in a working
state.

## 1. Role toggle goes global

1.1. Move `RoleProvider` from `app/page.tsx` up into `app/layout.tsx`, so
     it wraps every page.
1.2. Move `RoleToggle` out of the home page's header block and into
     `NavBar`, so it's visible on every page.
1.3. Confirm the role toggle still gates `StaffOnly` content correctly
     now that it's provided at the root.

## 2. `/agents` route

2.1. Add `app/agents/page.tsx`: fetch agents via
     `listAgentsWithAilments()`, render `AgentList` full-width with a
     page heading.
2.2. Remove the agents section from the home page.

## 3. `/therapies` route

3.1. Add `app/therapies/page.tsx`: fetch therapies via
     `listTherapiesWithAilments()`, render `TherapyList` full-width with
     a page heading, plus `AddTherapyForm` inside `StaffOnly`.
3.2. Remove the therapies section (and its `AddTherapyForm`) from the
     home page.

## 4. Update nav and home page

4.1. Update `NavBar`'s Agents/Therapies links from home-page anchors
     (`/#agents`, `/#therapies`) to the new real routes (`/agents`,
     `/therapies`).
4.2. Update the home page's nav cards to link to the same real routes.
4.3. Home page keeps its pitch, nav cards, booking form, and
     appointments list — confirm it still renders correctly with the
     agents/therapies sections removed.

## 5. Verification pass

5.1. Run through [validation.md](validation.md) end to end.
5.2. Fix anything that fails before calling this phase done.
