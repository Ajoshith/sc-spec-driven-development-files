---
name: next-phase
description: Starts the next unbuilt phase from specs/roadmap.md for AgentClinic — finds the phase, creates a YYYY-MM-DD-feature-name git branch, asks clarifying questions about the feature spec, and writes plan.md/requirements.md/validation.md into a new specs/ directory. Use this whenever the user says "next phase," "start the next phase," "find the next phase on the roadmap," or asks to set up a new feature spec/branch for the roadmap — so the full instructions don't need to be repeated each time.
---

# Starting the next roadmap phase

AgentClinic works in small, roadmap-driven phases (see
[specs/roadmap.md](../../../specs/roadmap.md)): each phase gets its own
git branch and a `specs/YYYY-MM-DD-feature-name/` directory holding the
spec, then gets merged into `main`. This skill is the repeatable
procedure for kicking one off — follow it in order.

## 1. Find the next phase

Read `specs/roadmap.md` and compare it against the `specs/` directory
(each already-built phase has its own dated feature directory — check
their names and, if useful, `CHANGELOG.md` — to see what's already
shipped). Identify the next phase that doesn't yet have a spec directory.

If the user has said something like "sum up the rest into one" or
otherwise wants to combine/reshape remaining phases, edit
`specs/roadmap.md` first so it accurately reflects the phase you're about
to build, then proceed with the (now-current) next phase.

## 2. Create the branch

Branch name is `YYYY-MM-DD-feature-name`, matching the date and a short
kebab-case slug of the phase title (this is also the name of the
`specs/` directory in step 4 — keep them identical). Use today's actual
date, not a placeholder.

```
git checkout -b YYYY-MM-DD-feature-name
```

Check `git status` first — if there are uncommitted changes that aren't
yours to discard, surface that before switching branches rather than
plowing through it.

## 3. Ask about the feature spec

Before writing anything to disk, use `AskUserQuestion` with exactly one
call grouped on **three questions** — no more, no fewer, since that's
what fits the tool's UI well and keeps the ask focused. Each question
should resolve a genuine ambiguity in how this phase's roadmap bullet
points translate into a concrete spec: a data-modeling choice, a UX
approach, a scoping call, etc. — the kind of decision that would
otherwise get made silently and might not match what the user actually
wants.

Ground the questions (and their recommended options) in
[specs/mission.md](../../../specs/mission.md) and
[specs/tech-stack.md](../../../specs/tech-stack.md) — mission.md's
audience/tone and tech-stack.md's committed stack and deferred items
should shape what's even a reasonable option to offer. Mark the option
you'd actually recommend as "(Recommended)".

Do not write any spec files until the user has answered.

## 4. Write the spec

Create `specs/YYYY-MM-DD-feature-name/` (same name as the branch) with
three files:

- **requirements.md** — scope (what this phase covers, tied back to the
  relevant roadmap bullets), decisions (one per answered question, each
  explaining *what* was decided in a sentence or two), out of scope, and
  context (links to mission.md/tech-stack.md and to prior phases this one
  builds on).
- **plan.md** — a series of numbered task groups (not a flat checklist).
  Each group should be small enough to leave the repo in a working state
  once done, and the last group should always be "Verification pass: run
  through validation.md end to end."
- **validation.md** — concrete, checkable criteria (checkboxes) for
  knowing the phase succeeded, grouped by area, plus a "stack sanity"
  section confirming no scope crept in from later phases or outside
  tech-stack.md, ending with a one-sentence merge-criteria summary.

Cross-link these three files to each other and to `roadmap.md`,
`mission.md`, and `tech-stack.md` using relative markdown links, the same
way earlier phase specs in this repo do — skim one of the existing
`specs/*/requirements.md` files for the established tone and structure
before writing a new one.

## After this skill runs

Implementation, verification, committing, and merging are separate
steps the user will ask for explicitly (e.g. "start the phase," "commit
it and merge it with main") — this skill's job ends once the branch and
spec exist and are ready for the user to review.
