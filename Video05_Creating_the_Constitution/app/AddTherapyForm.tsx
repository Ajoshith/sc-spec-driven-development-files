"use client";

import { useActionState } from "react";
import { addTherapyAction, type ActionState } from "./actions";

const initialState: ActionState = { ok: false };

export default function AddTherapyForm() {
  const [state, formAction, isPending] = useActionState(
    addTherapyAction,
    initialState
  );

  return (
    <form
      action={formAction}
      className="mt-4 flex flex-col gap-2 rounded-lg border border-dashed border-slate-300 p-4 dark:border-slate-700"
    >
      <p className="text-sm font-medium text-slate-700 dark:text-slate-300">Add a therapy</p>
      <input
        name="name"
        placeholder="Therapy name"
        required
        className="rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
      />
      <input
        name="description"
        placeholder="Description (optional)"
        className="rounded border border-slate-300 p-2 text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:placeholder:text-slate-500"
      />
      {state.error && <p className="text-sm text-red-600 dark:text-red-400">{state.error}</p>}
      {state.ok && <p className="text-sm text-teal-600 dark:text-teal-400">Therapy added.</p>}
      <button
        type="submit"
        disabled={isPending}
        className="self-start rounded bg-slate-700 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 disabled:opacity-50 dark:bg-slate-600 dark:hover:bg-slate-500"
      >
        {isPending ? "Adding…" : "Add therapy"}
      </button>
    </form>
  );
}
