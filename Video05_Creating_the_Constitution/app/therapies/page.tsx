import type { Metadata } from "next";
import { listTherapiesWithAilments } from "@/lib/queries";
import FilterableTherapyList from "../FilterableTherapyList";
import AddTherapyForm from "../AddTherapyForm";
import StaffOnly from "../StaffOnly";

export const metadata: Metadata = {
  title: "Therapies — AgentClinic",
};

export default function TherapiesPage() {
  const therapies = listTherapiesWithAilments();

  return (
    <main className="mx-auto flex max-w-2xl flex-col gap-6 px-6 py-16">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-teal-700">
          Therapies
        </h1>
        <p className="mt-2 text-slate-600">
          The treatments on offer, and what they help with.
        </p>
      </div>
      <FilterableTherapyList therapies={therapies} />
      <StaffOnly>
        <AddTherapyForm />
      </StaffOnly>
    </main>
  );
}
