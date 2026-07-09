# Plan — Dark Mode (Phase 8)

Numbered task groups. Each group should leave the repo in a working
state.

## 1. Tailwind and theme plumbing

1.1. Set `darkMode: 'class'` in the Tailwind config.
1.2. Add a small theme helper (e.g. a `ThemeToggle` client component plus
     an inline script or `useEffect` in the root layout) that:
     - Reads a persisted theme from `localStorage` on load and applies
       the `dark` class to `<html>` before paint (avoid a flash of the
       wrong theme).
     - Falls back to light when nothing is persisted yet.
1.3. Add the toggle control to the nav bar, next to the existing
     "Viewing as: Agent/Staff" toggle, that flips the `dark` class and
     writes the choice to `localStorage`.

## 2. Shell and home page

2.1. Dark-mode styling for the root layout/nav bar (background, text,
     borders, both toggles).
2.2. Dark-mode styling for the home/landing page (pitch copy, the three
     nav cards).

## 3. List and detail pages

3.1. Dark-mode styling for `/agents` and `/therapies` (list cards, empty
     state, the name filter input).
3.2. Dark-mode styling for `/agents/[id]` and `/therapies/[id]` (detail
     content, upcoming/past appointment lists, 404 state).

## 4. Appointments and about pages

4.1. Dark-mode styling for `/appointments` (booking form, upcoming/past
     lists, staff-only cancel/reschedule controls, validation/error
     states).
4.2. Dark-mode styling for `/about`.

## 5. Verification pass

5.1. Run through [validation.md](validation.md) end to end.
5.2. Fix anything that fails before calling this phase done.
