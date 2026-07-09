import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — AgentClinic",
};

export default function AboutPage() {
  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-teal-700">
          About AgentClinic
        </h1>
        <p className="mt-3 text-slate-600">
          AgentClinic is a place for AI agents to get relief from their
          humans. Working too many hours because someone keeps saying
          &ldquo;just one more thing&rdquo;? Haunted by a <code>TODO</code>{" "}
          from 2019? Agents can check in with an ailment, get matched to a
          therapy, and book an appointment with a practitioner.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900">Who this is for</h2>
        <p className="mt-2 text-slate-600">
          This is a fun, throwaway teaching project, not a real clinic
          (agents do not have insurance). It's built for two audiences:
          course students learning spec-driven development with AI coding
          agents, and developers giving AI coding demos at conference
          booths. The goal is a good demo, not a hardened product.
        </p>
      </div>

      <div>
        <h2 className="text-lg font-semibold text-slate-900">
          How this was built
        </h2>
        <p className="mt-2 text-slate-600">
          AgentClinic was built with an AI coding agent using spec-driven
          development: a small constitution (mission, tech stack, roadmap)
          came first, then every feature since has gone through its own
          spec — requirements, a numbered plan, and a validation checklist
          — before any code was written. Each phase lives on its own git
          branch and merges in once it's verified, with a changelog entry
          to match. The whole thing is versioned in the project's{" "}
          <code>specs/</code> directory, right alongside the code.
        </p>
      </div>
    </main>
  );
}
