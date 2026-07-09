---
name: changelog
description: Maintains CHANGELOG.md at the AgentClinic project root, appending a dated entry summarizing what shipped in a roadmap phase or feature. Use this skill whenever the user asks to "update the changelog," "log this change," "add a changelog entry," or similar — and also proactively suggest using it right after merging a specs/YYYY-MM-DD-feature-name branch into main, even if the user didn't explicitly ask, since AgentClinic tracks every merged phase this way.
---

# Changelog maintenance

AgentClinic ships in small roadmap phases (see [specs/roadmap.md](../../../specs/roadmap.md)),
each built on its own `YYYY-MM-DD-feature-name` branch with a matching
`specs/YYYY-MM-DD-feature-name/` spec directory, then merged into `main`.
`CHANGELOG.md` at the project root is the running record of what shipped
in each of those merges — a quick way for a course student or a demo
presenter to see the project's history without digging through commits.

## When to use this

- The user explicitly asks to update, log, or record something in the
  changelog.
- Right after a phase/feature branch has just been merged into `main` in
  this conversation — proactively offer to add the entry rather than
  waiting to be asked. A merge without a changelog entry is a gap worth
  flagging.

## How to write an entry

1. **Figure out what shipped.** Look at the merge commit(s) since the last
   changelog entry (`git log main --oneline` and the diff, or the
   conversation context if the merge just happened in this session) and
   the corresponding `specs/YYYY-MM-DD-feature-name/requirements.md` if
   one exists — it usually has the clearest summary of scope and
   decisions.

2. **Head the entry with the date and phase name**, matching the
   `specs/` directory naming convention already in use:

   ```markdown
   ## YYYY-MM-DD — Phase N: Feature name
   ```

   Use the actual roadmap phase name from `specs/roadmap.md` when the work
   maps to one (e.g. "Phase 2: Read-only dashboard"). If the work doesn't
   map to a numbered phase, just use a short descriptive title in its
   place.

3. **List what shipped as a few bullets**, written for someone skimming —
   plain outcomes, not implementation trivia. "Agents list with
   inline-expandable ailments" beats "added AgentList.tsx client
   component."

4. **Link the spec**, if one exists, so a reader can go deeper:

   ```markdown
   Spec: [specs/YYYY-MM-DD-feature-name/](specs/YYYY-MM-DD-feature-name/)
   ```

5. **Insert newest-first**, directly under the `# Changelog` heading (and
   under an `## Unreleased` section if one is in use — see below). Don't
   reorder or rewrite existing entries.

### Example entry

```markdown
## 2026-07-09 — Phase 2: Read-only dashboard

- Home page is now the real agents dashboard: agents list with
  inline-expandable ailments.
- Added a therapies list showing which ailments each therapy treats.

Spec: [specs/2026-07-09-read-only-dashboard/](specs/2026-07-09-read-only-dashboard/)
```

## If CHANGELOG.md doesn't exist yet

Create it with a one-line header before adding the first entry:

```markdown
# Changelog

All notable changes to AgentClinic are recorded here, newest first.
```

Then add the entry as described above.

## Notes

- This project doesn't use semantic version numbers — phases are the unit
  of progress, not releases. Don't invent a version number; the date +
  phase name is the identity of the entry.
- Keep entries proportional to what actually shipped. A small fix doesn't
  need the same ceremony as a full roadmap phase — a single bullet under a
  dated heading is fine.
