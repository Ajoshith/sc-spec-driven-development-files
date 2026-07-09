"use client";

import { useRole } from "./RoleContext";

export default function RoleToggle() {
  const { role, toggleRole } = useRole();

  return (
    <button
      type="button"
      onClick={toggleRole}
      className="rounded-full border border-slate-300 bg-white px-4 py-1.5 text-sm font-medium text-slate-600 shadow-sm hover:bg-slate-50"
    >
      Viewing as:{" "}
      <span className="font-semibold text-teal-700">
        {role === "agent" ? "Agent" : "Staff"}
      </span>
    </button>
  );
}
