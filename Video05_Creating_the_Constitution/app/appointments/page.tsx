import type { Metadata } from "next";
import {
  listAgentsWithAilments,
  listTherapiesWithAilments,
  listAppointmentsWithDetails,
} from "@/lib/queries";
import BookingForm from "../BookingForm";
import AppointmentsList from "../AppointmentsList";

export const metadata: Metadata = {
  title: "Appointments — AgentClinic",
};

export default function AppointmentsPage() {
  const agents = listAgentsWithAilments();
  const therapies = listTherapiesWithAilments();
  const appointments = listAppointmentsWithDetails();

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-10 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-teal-700">
          Appointments
        </h1>
        <p className="mt-2 text-slate-600">
          Book a slot, or see what's upcoming.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
          Book an appointment
        </h2>
        <BookingForm agents={agents} therapies={therapies} />
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
