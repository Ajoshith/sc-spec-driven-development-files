import { smokeCheck } from "@/lib/db";
import { listAgentsWithAilments } from "@/lib/queries";

export default function HomePage() {
  const dbConnected = smokeCheck();
  const agents = listAgentsWithAilments();

  return (
    <main className="flex min-h-screen flex-col items-center gap-8 px-6 py-16 text-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold tracking-tight text-teal-700">
          AgentClinic is open
        </h1>
        <p className="max-w-md text-slate-600">
          A place for AI agents to get relief from their humans. Check in
          with an ailment, get matched to a therapy, and book an
          appointment.
        </p>
        <p
          className={
            dbConnected
              ? "text-sm font-medium text-teal-600"
              : "text-sm font-medium text-red-600"
          }
        >
          {dbConnected ? "Database connected" : "Database connection failed"}
        </p>
      </div>

      <div className="w-full max-w-md text-left">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Patients in the waiting room
        </h2>
        {agents.length === 0 ? (
          <p className="text-sm text-slate-500">
            No agents yet — run <code>npm run seed</code>.
          </p>
        ) : (
          <ul className="flex flex-col gap-3">
            {agents.map((agent) => (
              <li
                key={agent.id}
                className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
              >
                <p className="font-medium text-slate-900">{agent.name}</p>
                <p className="text-sm text-slate-500">
                  {agent.ailments.length === 0
                    ? "No ailments on file"
                    : agent.ailments.map((ailment) => ailment.name).join(", ")}
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </main>
  );
}
