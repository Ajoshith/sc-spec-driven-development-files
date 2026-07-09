import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  getTherapy,
  listAilmentsForTherapy,
  listAppointmentsForTherapy,
} from "@/lib/queries";
import AppointmentsList from "../../AppointmentsList";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const therapy = getTherapy(Number(id));
  return { title: therapy ? `${therapy.name} — AgentClinic` : "AgentClinic" };
}

export default async function TherapyDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const therapy = getTherapy(Number(id));
  if (!therapy) {
    notFound();
  }

  const ailments = listAilmentsForTherapy(therapy.id);
  const appointments = listAppointmentsForTherapy(therapy.id);

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-8 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-teal-700 dark:text-teal-400">
          {therapy.name}
        </h1>
        {therapy.description && (
          <p className="mt-2 text-slate-600 dark:text-slate-400">{therapy.description}</p>
        )}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          Treats
        </h2>
        {ailments.length === 0 ? (
          <p className="text-sm text-slate-500 dark:text-slate-400">Not linked to any ailments yet.</p>
        ) : (
          <ul className="flex flex-col gap-1">
            {ailments.map((ailment) => (
              <li key={ailment.id} className="text-sm text-slate-600 dark:text-slate-400">
                <span className="font-medium text-slate-800 dark:text-slate-200">{ailment.name}</span>
                {ailment.description ? ` — ${ailment.description}` : ""}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500">
          Appointments
        </h2>
        <AppointmentsList appointments={appointments} />
      </div>
    </main>
  );
}
