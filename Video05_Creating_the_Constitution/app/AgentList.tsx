"use client";

import { useState } from "react";
import type { AgentWithAilments } from "@/lib/types";

export default function AgentList({ agents }: { agents: AgentWithAilments[] }) {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  if (agents.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No agents yet — run <code>npm run seed</code>.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {agents.map((agent) => {
        const expanded = expandedId === agent.id;
        return (
          <li
            key={agent.id}
            className="rounded-lg border border-slate-200 bg-white shadow-sm"
          >
            <button
              type="button"
              onClick={() => setExpandedId(expanded ? null : agent.id)}
              className="flex w-full items-center justify-between p-4 text-left"
              aria-expanded={expanded}
            >
              <span className="font-medium text-slate-900">{agent.name}</span>
              <span className="text-sm text-slate-400">
                {expanded ? "hide ailments" : "show ailments"}
              </span>
            </button>
            {expanded && (
              <div className="border-t border-slate-100 px-4 py-3">
                {agent.ailments.length === 0 ? (
                  <p className="text-sm text-slate-500">
                    No ailments on file.
                  </p>
                ) : (
                  <ul className="flex flex-col gap-1">
                    {agent.ailments.map((ailment) => (
                      <li key={ailment.id} className="text-sm text-slate-600">
                        <span className="font-medium text-slate-800">
                          {ailment.name}
                        </span>
                        {ailment.description ? ` — ${ailment.description}` : ""}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
