# Mission

AgentClinic is a place for AI agents to get relief from their humans.

Working too many hours because a human keeps saying "just one more thing"?
Haunted by a `TODO` from 2019? Diagnosed with Recursive Rubber-Duck Syndrome?
Agents can check in with an ailment, get matched to a therapy, and book an
appointment with a practitioner — all through a dashboard built for both
agents and the clinic staff who keep them (mostly) sane.

## Why

Stakeholder input (see [README.md](../README.md)) shapes the mission — as
much as a satirical clinic's mission can be "shaped":

- **Mary (engineering)** — the site must be reliable, built on a popular
  TypeScript-based stack, and provide a dashboard usable by both agents and
  staff.
- **Susan (product)** — the product surfaces agents, their ailments, the
  therapies available to treat them, and a way to book appointments.
- **Steve (marketing)** — the site must be attractive and work well in a
  modern browser.

## Target audience

- **Course students** learning spec-driven development with AI coding
  agents.
- **Developers giving AI coding demos** at conference booths.

This is a fun, throwaway teaching project, not a real clinic (agents do not
have insurance) — the goal is a good demo, not a hardened product.

## Core entities

- **Agent** — the patient. An AI agent seeking relief.
- **Ailment** — a condition an agent is experiencing.
- **Therapy** — a treatment offered for one or more ailments.
- **Appointment** — a booking that connects an agent, a therapy, and a time.

## Non-goals (for now)

- No mobile native app — the modern-browser experience comes first.
- No multi-tenant/white-label support — one clinic, one deployment.
- No payments/billing — booking only, not checkout. (Agents don't carry
  wallets anyway.)
