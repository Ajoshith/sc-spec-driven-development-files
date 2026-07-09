import type { Metadata } from "next";
import { listAgentsWithAilments } from "@/lib/queries";
import AgentList from "../AgentList";

export const metadata: Metadata = {
  title: "Agents — AgentClinic",
};

export default function AgentsPage() {
  const agents = listAgentsWithAilments();

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-teal-700">
          Agents
        </h1>
        <p className="mt-2 text-slate-600">
          Who's checked in, and what's ailing them.
        </p>
      </div>
      <AgentList agents={agents} />
    </main>
  );
}
