# Validation — Detail Pages (Phase 6)

See [requirements.md](./requirements.md) and [plan.md](./plan.md).

## `/agents/[id]`

- [ ] Visiting a valid agent id shows that agent's name and their full
      list of ailments.
- [ ] Shows that agent's appointments split into upcoming/past, matching
      what would show on the home page filtered to this agent.
- [ ] Visiting an invalid/nonexistent agent id renders a 404, not a
      crash.

## `/therapies/[id]`

- [ ] Visiting a valid therapy id shows that therapy's name/description
      and the ailments it treats.
- [ ] Shows that therapy's appointments split into upcoming/past.
- [ ] Visiting an invalid/nonexistent therapy id renders a 404.

## List pages

- [ ] `/agents` no longer expands ailments inline; each agent name links
      to its `/agents/[id]` page.
- [ ] `/therapies` no longer expands ailments-treated inline; each
      therapy name links to its `/therapies/[id]` page.
- [ ] The staff-only "add a therapy" form still works unchanged on
      `/therapies`.
- [ ] Role toggle state (Agent/Staff) still persists correctly when
      navigating into and out of detail pages.

## Stack sanity

- [ ] No cancel/reschedule controls were added to either detail page.
- [ ] No search/filtering was added (that's Phase 7).
- [ ] No schema, auth, or database changes.
- [ ] No new dependencies beyond what's already in
      [tech-stack.md](../tech-stack.md).

**Merge criteria:** both detail routes render real data (or a proper
404) for valid/invalid ids, list pages link into them with inline expand
removed, and nothing outside this phase's scope changed.
