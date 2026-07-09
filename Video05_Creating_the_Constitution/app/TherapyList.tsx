import type { TherapyWithAilments } from "@/lib/types";

export default function TherapyList({
  therapies,
}: {
  therapies: TherapyWithAilments[];
}) {
  if (therapies.length === 0) {
    return (
      <p className="text-sm text-slate-500">
        No therapies yet — run <code>npm run seed</code>.
      </p>
    );
  }

  return (
    <ul className="flex flex-col gap-3">
      {therapies.map((therapy) => (
        <li
          key={therapy.id}
          className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm"
        >
          <p className="font-medium text-slate-900">{therapy.name}</p>
          {therapy.description && (
            <p className="text-sm text-slate-600">{therapy.description}</p>
          )}
          <p className="mt-1 text-sm text-slate-500">
            {therapy.ailments.length === 0
              ? "Not linked to any ailments yet"
              : `Treats: ${therapy.ailments.map((a) => a.name).join(", ")}`}
          </p>
        </li>
      ))}
    </ul>
  );
}
