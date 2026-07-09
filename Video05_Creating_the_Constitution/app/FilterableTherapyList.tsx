"use client";

import { useState } from "react";
import type { TherapyWithAilments } from "@/lib/types";
import NameFilter from "./NameFilter";
import TherapyList from "./TherapyList";

export default function FilterableTherapyList({
  therapies,
}: {
  therapies: TherapyWithAilments[];
}) {
  const [filter, setFilter] = useState("");
  const filtered = therapies.filter((therapy) =>
    therapy.name.toLowerCase().includes(filter.trim().toLowerCase())
  );

  return (
    <div className="flex flex-col gap-4">
      {therapies.length > 0 && (
        <NameFilter
          value={filter}
          onChange={setFilter}
          placeholder="Filter therapies by name…"
        />
      )}
      {therapies.length > 0 && filtered.length === 0 ? (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No therapies match &ldquo;{filter}&rdquo;.
        </p>
      ) : (
        <TherapyList therapies={filtered} />
      )}
    </div>
  );
}
