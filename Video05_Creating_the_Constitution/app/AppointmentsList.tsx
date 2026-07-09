import type { AppointmentWithDetails } from "@/lib/types";
import AppointmentRow from "./AppointmentRow";

export default function AppointmentsList({
  appointments,
}: {
  appointments: AppointmentWithDetails[];
}) {
  if (appointments.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No appointments yet.
      </p>
    );
  }

  const now = Date.now();
  const upcoming = appointments.filter(
    (appointment) => new Date(appointment.scheduled_at).getTime() >= now
  );
  const past = appointments.filter(
    (appointment) => new Date(appointment.scheduled_at).getTime() < now
  );

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Upcoming
        </h3>
        {upcoming.length === 0 ? (
          <p className="text-sm text-slate-500">No upcoming appointments.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {upcoming.map((appointment) => (
              <AppointmentRow key={appointment.id} appointment={appointment} />
            ))}
          </ul>
        )}
      </div>
      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
          Past
        </h3>
        {past.length === 0 ? (
          <p className="text-sm text-slate-500">No past appointments.</p>
        ) : (
          <ul className="flex flex-col gap-2">
            {past.map((appointment) => (
              <AppointmentRow key={appointment.id} appointment={appointment} />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
