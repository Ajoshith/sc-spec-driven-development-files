"use client";

import { useActionState } from "react";
import { bookAppointmentAction, type ActionState } from "./actions";
import type { Agent, Therapy } from "@/lib/types";

const initialState: ActionState = { ok: false };

export default function BookingForm({
  agents,
  therapies,
}: {
  agents: Agent[];
  therapies: Therapy[];
}) {
  const [state, formAction, isPending] = useActionState(
    bookAppointmentAction,
    initialState
  );

  if (agents.length === 0 || therapies.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        Need at least one agent and one therapy before booking — run{" "}
        <code>npm run seed</code>.
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700" htmlFor="agentId">
          Agent
        </label>
        <select
          id="agentId"
          name="agentId"
          required
          className="rounded border border-slate-300 p-2 text-sm"
        >
          {agents.map((agent) => (
            <option key={agent.id} value={agent.id}>
              {agent.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700" htmlFor="therapyId">
          Therapy
        </label>
        <select
          id="therapyId"
          name="therapyId"
          required
          className="rounded border border-slate-300 p-2 text-sm"
        >
          {therapies.map((therapy) => (
            <option key={therapy.id} value={therapy.id}>
              {therapy.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700" htmlFor="scheduledAt">
          Time
        </label>
        <input
          id="scheduledAt"
          name="scheduledAt"
          type="datetime-local"
          required
          className="rounded border border-slate-300 p-2 text-sm"
        />
      </div>

      {state.error && <p className="text-sm text-red-600">{state.error}</p>}
      {state.ok && <p className="text-sm text-teal-600">Appointment booked.</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50"
      >
        {isPending ? "Booking…" : "Book appointment"}
      </button>
    </form>
  );
}
