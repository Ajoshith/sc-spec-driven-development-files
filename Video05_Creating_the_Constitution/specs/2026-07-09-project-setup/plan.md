# Plan — Project Setup (Phase 0)

Numbered task groups. Each group should leave the repo in a working state.

## 1. Next.js app scaffold

1.1. Add Next.js + React + related type deps to `package.json`, alongside
     the existing `typescript` devDependency.
1.2. Create `app/` directory (App Router) with root `layout.tsx` and
     `page.tsx`.
1.3. Add `next.config.ts` (or `.js`) and update `tsconfig.json` for
     Next.js's expected settings (module resolution, JSX, plugin).
1.4. Add `dev`/`start` scripts to `package.json`; keep the existing
     `build` script for `src/index.ts` working via `tsc` — add a separate
     script (e.g. `build:next`) for the Next.js build so both entry
     points remain independently buildable.
1.5. Confirm `src/index.ts` still runs unchanged (`tsc && node dist/index.js`
     or equivalent).

## 2. Tailwind CSS

2.1. Add Tailwind + PostCSS/Autoprefixer dependencies.
2.2. Add `tailwind.config.ts` scoped to `app/**`.
2.3. Add global stylesheet with Tailwind directives, imported from the root
     layout.

## 3. Minimal AgentClinic home page

3.1. Build the root page as a simple branded landing: heading (something
     like "AgentClinic is open"), Tailwind-styled, minimal copy.
3.2. No data/DB dependency yet — this is static markup proving Next.js +
     Tailwind render correctly together.

## 4. SQLite plumbing

4.1. Add a SQLite driver dependency (e.g. `better-sqlite3`) and its types.
4.2. Add a small typed client module (e.g. `lib/db.ts`) that opens a local
     SQLite file and exposes a minimal typed query helper.
4.3. No schema/tables yet — add a trivial smoke check (e.g. `SELECT 1`) used
     only to prove the connection works.

## 5. Wire the smoke check into the home page

5.1. Have the home page call the SQLite smoke check server-side (e.g. in a
     Server Component or route handler) and render its result, so the page
     load proves Next.js + Tailwind + SQLite are all wired together.

## 6. Verification pass

6.1. Run through [validation.md](validation.md) end to end.
6.2. Fix anything that fails before calling this phase done.
