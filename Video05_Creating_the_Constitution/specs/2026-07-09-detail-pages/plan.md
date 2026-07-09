# Plan — Detail Pages (Phase 6)

See [requirements.md](./requirements.md) for scope and decisions.

## 1. Query helpers for filtered appointments

- Add `listAppointmentsWithDetails` filters (or new helpers, e.g.
  `listAppointmentsForAgent(agentId)` / `listAppointmentsForTherapy(therapyId)`)
  in `lib/queries.ts` so a detail page can get just the appointments
  belonging to one agent or one therapy, still split-able into
  upcoming/past the same way the home page does today.

## 2. `/agents/[id]` page

- Add `app/agents/[id]/page.tsx`: look up the agent (404 via `notFound()`
  if missing), list their ailments (`listAilmentsForAgent`), and render
  their upcoming/past appointments reusing `AppointmentsList`/
  `AppointmentRow` with the new filtered query.
- Give it a matching `metadata.title` (e.g. "{Agent name} — AgentClinic").

## 3. `/therapies/[id]` page

- Add `app/therapies/[id]/page.tsx`: look up the therapy (404 if
  missing), list the ailments it treats (`listAilmentsForTherapy`), and
  render that therapy's upcoming/past appointments the same way.
- Matching `metadata.title`.

## 4. Update list pages to link out, drop inline expand

- `AgentList`: remove the inline ailment-expand interaction; each agent
  name links to `/agents/[id]`.
- `TherapyList`: remove the inline ailments-treated expand; each therapy
  name links to `/therapies/[id]`.
- Leave `AddTherapyForm`/`StaffOnly` on `/therapies` untouched.

## 5. Verification pass: run through validation.md end to end
