"use client";

import { useActionState, useState } from "react";
import { cancelAppointmentAction, rescheduleAppointmentAction, type ActionState } from "./actions";
import type { AppointmentWithDetails } from "@/lib/types";
import StaffOnly from "./StaffOnly";

const initialState: ActionState = { ok: false };

function formatScheduledAt(value: string): string {
  return value.replace("T", " ").slice(0, 16);
}

export default function AppointmentRow({
  appointment,
}: {
  appointment: AppointmentWithDetails;
}) {
  const [editing, setEditing] = useState(false);
  const [state, formAction, isPending] = useActionState(
    rescheduleAppointmentAction,
    initialState
  );

  return (
    <li className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-800 dark:bg-slate-800">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="font-medium text-slate-900 dark:text-slate-100">
            {appointment.agent_name} — {appointment.therapy_name}
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            {formatScheduledAt(appointment.scheduled_at)}
          </p>
        </div>
        <StaffOnly>
          <div className="flex shrink-0 gap-3">
            <button
              type="button"
              onClick={() => setEditing((current) => !current)}
              className="text-sm text-teal-600 hover:underline dark:text-teal-400"
            >
              {editing ? "Cancel edit" : "Reschedule"}
            </button>
            <button
              type="button"
              onClick={() => cancelAppointmentAction(appointment.id)}
              className="text-sm text-red-600 hover:underline dark:text-red-400"
            >
              Cancel
            </button>
          </div>
        </StaffOnly>
      </div>

      <StaffOnly>
        {editing && (
          <form action={formAction} className="mt-3 flex items-center gap-2">
            <input type="hidden" name="id" value={appointment.id} />
            <input
              type="datetime-local"
              name="scheduledAt"
              required
              className="rounded border border-slate-300 p-1.5 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100"
            />
            <button
              type="submit"
              disabled={isPending}
              className="rounded bg-teal-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-teal-700 disabled:opacity-50 dark:bg-teal-700 dark:hover:bg-teal-600"
            >
              {isPending ? "Saving…" : "Save"}
            </button>
          </form>
        )}
      </StaffOnly>
      {state.error && <p className="mt-1 text-sm text-red-600 dark:text-red-400">{state.error}</p>}
    </li>
  );
}
