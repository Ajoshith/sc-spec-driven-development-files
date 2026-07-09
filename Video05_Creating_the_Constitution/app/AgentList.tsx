import Link from "next/link";
import type { AgentWithAilments } from "@/lib/types";

export default function AgentList({ agents }: { agents: AgentWithAilments[] }) {
  if (agents.length === 0) {
    return (
      <p className="text-sm text-slate-500 dark:text-slate-400">
        No agents yet — run <code>npm run seed</code>.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {agents.map((agent) => (
        <li
          key={agent.id}
          className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-800"
        >
          <Link
            href={`/agents/${agent.id}`}
            className="flex w-full items-center justify-between p-4 text-left hover:bg-slate-50 dark:hover:bg-slate-700"
          >
            <span className="font-medium text-slate-900 dark:text-slate-100">{agent.name}</span>
            <span className="text-sm text-slate-400 dark:text-slate-500">
              {agent.ailments.length === 0
                ? "no ailments"
                : `${agent.ailments.length} ailment${agent.ailments.length === 1 ? "" : "s"}`}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
