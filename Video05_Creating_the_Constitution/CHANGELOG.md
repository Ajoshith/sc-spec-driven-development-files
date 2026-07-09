# Changelog

All notable changes to AgentClinic are recorded here, newest first.

## 2026-07-09 — Phase 4: Site shell and navigation

- Added a persistent nav bar (Home, Agents, Therapies, Appointments,
  About) shared across pages.
- Home page is now a landing pitch with three nav cards, instead of
  opening straight into the dashboard.
- Added an About page covering the mission and how the project was built.
- First of four phases growing AgentClinic into a real multi-page site
  (no auth, no new staff-only concerns).

Spec: [specs/2026-07-09-site-shell-nav/](specs/2026-07-09-site-shell-nav/)

## 2026-07-09 — Phase 3: Booking, roles, and polish

- Added a booking flow: pick an agent, a therapy, and a time to create an
  appointment, with a per-therapy-slot double-booking check.
- Added an appointments list split into upcoming and past.
- Added a cosmetic "Viewing as: Agent / Staff" role toggle; staff-only
  mode unlocks adding therapies and cancelling/rescheduling appointments.
- Polish pass: consistent styling across all dashboard views, responsive
  layout check, and empty/pending states throughout.

Spec: [specs/2026-07-09-booking-roles-polish/](specs/2026-07-09-booking-roles-polish/)

## 2026-07-09 — Phase 2: Read-only dashboard

- Home page is now the real agents dashboard: agents list with
  inline-expandable ailments.
- Added a therapies list showing which ailments each therapy treats.

Spec: [specs/2026-07-09-read-only-dashboard/](specs/2026-07-09-read-only-dashboard/)

## 2026-07-09 — Phase 1: Core data model

- Added the real schema for agents, ailments, therapies, and
  appointments, with many-to-many links between agents/ailments and
  ailments/therapies.
- Added a seed script with satirical demo data (e.g. "Recursive
  Rubber-Duck Syndrome").

Spec: [specs/2026-07-09-core-data-model/](specs/2026-07-09-core-data-model/)

## 2026-07-09 — Phase 0: Project setup

- Migrated the bare TypeScript project to Next.js with Tailwind CSS.
- Wired up SQLite plumbing and a minimal branded home page confirming the
  database connection.

Spec: [specs/2026-07-09-project-setup/](specs/2026-07-09-project-setup/)
