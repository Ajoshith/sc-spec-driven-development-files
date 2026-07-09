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
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Need at least one agent and one therapy before booking — run{" "}
        <code>npm run seed</code>.
      </p>
    );
  }

  return (
    <form
      action={formAction}
      className="flex flex-col gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-800"
    >
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="agentId">
          Agent
        </label>
        <select
          id="agentId"
          name="agentId"
          required
          className="rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          {agents.map((agent) => (
            <option key={agent.id} value={agent.id}>
              {agent.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="therapyId">
          Therapy
        </label>
        <select
          id="therapyId"
          name="therapyId"
          required
          className="rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        >
          {therapies.map((therapy) => (
            <option key={therapy.id} value={therapy.id}>
              {therapy.name}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-slate-700 dark:text-slate-300" htmlFor="scheduledAt">
          Time
        </label>
        <input
          id="scheduledAt"
          name="scheduledAt"
          type="datetime-local"
          required
          className="rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
        />
      </div>

      {state.error && <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>}
      {state.ok && <p className="text-sm text-teal-600 dark:text-teal-400">Appointment booked.</p>}

      <button
        type="submit"
        disabled={isPending}
        className="rounded bg-teal-600 px-4 py-2 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50 dark:bg-teal-700 dark:hover:bg-teal-600"
      >
        {isPending ? "Booking…" : "Book appointment"}
      </button>
    </form>
  );
}
