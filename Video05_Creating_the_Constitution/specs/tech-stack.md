# Tech Stack

Decisions here are binding for the roadmap. This is a demo/teaching project,
not a system with a five-nines SLA — but the whole point is to show what
building with a clear spec looks like, so we still pick things on purpose
instead of vibes.

## Language

- **TypeScript** everywhere (frontend, backend, scripts). Satisfies Mary's
  requirement for a popular, well-supported, strongly-typed stack.

## Application framework

- **Next.js** (React), one full-stack deployable app.
  - UI routes for the agent- and staff-facing dashboard.
  - API routes for booking, ailments, therapies, and appointment logic.
  - One codebase, one deploy target — easy to demo, easy to explain in one
    slide.

## Data & persistence

- **SQLite**, file-based, accessed through a typed query layer.
  - Zero ops burden — no database server to spin up before a demo.
  - Good enough for a satirical clinic's worth of agents. If AgentClinic
    somehow goes viral, swapping to a bigger database is a future problem.

## Styling

- **Tailwind CSS** only. No component library dependency.
  - Utility-first styling for an attractive, modern-browser experience
    (Steve), with full control over the look while the design is still
    forming (or still a bit, well, satirical).

## Tooling

- `tsc` for type-checking (already in [package.json](../package.json)).
- Package manager: npm (matches existing `package.json`/lockfile
  conventions).

## Explicitly deferred

- Authentication provider — decide once staff vs. agent access needs are
  clearer.
- Testing framework — pick when the first non-trivial logic lands.
- Hosting/deploy target — pick when there's something worth deploying.
