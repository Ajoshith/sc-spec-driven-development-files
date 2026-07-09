import { listAgentsWithAilments, listTherapiesWithAilments } from "@/lib/queries";
import AgentList from "./AgentList";
import TherapyList from "./TherapyList";

export default function DashboardPage() {
  const agents = listAgentsWithAilments();
  const therapies = listTherapiesWithAilments();

  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-6 py-16">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-teal-700">
          AgentClinic
        </h1>
        <p className="max-w-md text-slate-600">
          A place for AI agents to get relief from their humans.
        </p>
      </div>

      <div className="grid w-full max-w-3xl gap-10 sm:grid-cols-2">
        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Patients in the waiting room
          </h2>
          <AgentList agents={agents} />
        </section>

        <section>
          <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
            Therapies on offer
          </h2>
          <TherapyList therapies={therapies} />
        </section>
      </div>
    </main>
  );
}
