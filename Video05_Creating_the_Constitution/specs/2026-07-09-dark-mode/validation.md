# Validation — Dark Mode (Phase 8)

How to know this phase is done and safe to merge.

## Theme toggle

- [x] A toggle in the nav switches between light and dark instantly.
- [x] The chosen theme persists across client-side navigation between
      pages.
- [x] The chosen theme persists across a full page reload.
- [x] No flash of the wrong theme on initial load in either mode (uses
      a `next/script` `beforeInteractive` init script + `<html
      suppressHydrationWarning>`; an inline `<script>` in `<head>`
      caused a hydration warning and was replaced with `next/script`).
- [x] The existing "Viewing as: Agent/Staff" toggle still works
      unchanged in both themes.

## Page coverage

- [x] Home page reads cleanly in dark mode (pitch copy, nav cards).
- [x] `/agents` and `/therapies` list pages read cleanly in dark mode,
      including the name filter input and both empty states ("no
      matches" and "no data at all").
- [x] `/agents/[id]` and `/therapies/[id]` detail pages read cleanly in
      dark mode. (The unknown-id 404 state uses Next's built-in
      `global-not-found`, which bypasses the root layout/theme entirely
      — a framework-level page outside this phase's scope, not a
      regression.)
- [x] `/appointments` reads cleanly in dark mode: booking form, upcoming/
      past lists, staff-only controls, and validation/error states (e.g.
      double-booking rejection).
- [x] `/about` reads cleanly in dark mode.
- [x] Text has sufficient contrast against backgrounds in dark mode (no
      dark-on-dark or illegible muted text).

## Stack sanity

- [x] Dark mode uses Tailwind's `class` strategy and `dark:` variants
      only — no new styling dependency added. (Tailwind v4 defines the
      `dark` variant via `@custom-variant` in `globals.css` rather than
      `tailwind.config.ts`, since v4 doesn't read the JS config by
      default.)
- [x] No new routes, data model changes, or auth/notification work
      introduced.
- [x] `npm run build` (tsc, for `src/index.ts`) still succeeds unchanged.
- [x] `npm run build:next` succeeds with no type errors.
- [x] `npm run seed` still runs cleanly.

## Merge criteria

All checkboxes above are checked, and a reviewer can restate in one
sentence what this phase proved: AgentClinic now supports a persisted
light/dark theme toggle, with every existing page styled to look
genuinely nice in both modes.
