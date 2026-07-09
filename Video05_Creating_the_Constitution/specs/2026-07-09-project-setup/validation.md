# Validation — Project Setup (Phase 0)

How to know this phase is done and safe to merge.

## Build & boot

- [ ] `npm install` succeeds with no errors.
- [ ] `npm run dev` starts the Next.js app with no errors in the terminal.
- [ ] The existing `npm run build` (for `src/index.ts` via `tsc`) still
      succeeds, and `node dist/index.js` still prints
      `Happy developing ✨` — the original entry point is untouched.
- [ ] A separate Next.js build command (e.g. `npm run build:next`)
      succeeds with no type errors.

## Home page

- [ ] Visiting the root route in a modern browser shows the branded
      landing page (not the Next.js default starter).
- [ ] Tailwind styles are visibly applied (not just default HTML styling).

## SQLite plumbing

- [ ] The typed query helper (e.g. `lib/db.ts`) runs its smoke check
      (`SELECT 1` or equivalent) successfully from a standalone script or
      route handler.
- [ ] The home page reflects a successful SQLite smoke check (e.g. shows
      "database connected" or equivalent) rather than an error.

## Stack sanity

- [ ] No product data model exists yet — confirms Phase 1 scope wasn't
      pulled forward.
- [ ] `tsconfig.json` still has `strict: true` and is valid JSON (watch for
      the earlier trailing-comma issue).
- [ ] Package manager artifacts are npm's (`package-lock.json`), matching
      [tech-stack.md](../tech-stack.md).

## Merge criteria

All checkboxes above are checked, and a reviewer (or the presenter, if this
is being built live in a demo) can restate in one sentence what this phase
proved: Next.js + Tailwind + SQLite are wired together behind one boot
page.
