"use client";

import { useState } from "react";
import type { AgentWithAilments } from "@/lib/types";
import NameFilter from "./NameFilter";
import AgentList from "./AgentList";

export default function FilterableAgentList({
  agents,
}: {
  agents: AgentWithAilments[];
}) {
  const [filter, setFilter] = useState("");
  const filtered = agents.filter((agent) =>
    agent.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {agents.length > 0 && (
        <NameFilter
          value={filter}
          onChange={setFilter}
          placeholder="Filter agents by name…"
        />
      )}
      {agents.length > 0 && filtered.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No agents match &ldquo;{filter}&rdquo;.
        </p>
      ) : (
        <AgentList agents={filtered} />
      )}
    </div>
  );
}
