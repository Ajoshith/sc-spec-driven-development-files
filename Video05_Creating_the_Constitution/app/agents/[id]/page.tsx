import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getAgent,
  listAilmentsForAgent,
  listAppointmentsForAgent,
} from "@/lib/queries";
import AppointmentsList from "../../AppointmentsList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const agent = getAgent(Number(id));
  return { title: agent ? `${agent.name} — AgentClinic` : "AgentClinic" };
}

export default async function AgentDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const agent = getAgent(Number(id));
  if (!agent) {
    notFound();
  }

  const ailments = listAilmentsForAgent(agent.id);
  const appointments = listAppointmentsForAgent(agent.id);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-teal-700">
          {agent.name}
        </h1>
        <p className="mt-2 text-slate-600">This agent's ailments and appointments.</p>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Ailments
        </h2>
        {ailments.length === 0 ? (
          <p className="text-sm text-slate-500">No ailments on file.</p>
        ) : (
          <ul className="flex flex-col gap-1">
            {ailments.map((ailment) => (
              <li key={ailment.id} className="text-sm text-slate-600">
                <span className="font-medium text-slate-800">{ailment.name}</span>
                {ailment.description ? ` — ${ailment.description}` : ""}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Appointments
        </h2>
        <AppointmentsList appointments={appointments} />
      </div>
    </main>
  );
}
