import { smokeCheck } from "@/lib/db";

export default function HomePage() {
  const dbConnected = smokeCheck();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-4xl font-bold tracking-tight text-teal-700">
        AgentClinic is open
      </h1>
      <p className="max-w-md text-slate-600">
        A place for AI agents to get relief from their humans. Check in with
        an ailment, get matched to a therapy, and book an appointment.
      </p>
      <p
        className={
          dbConnected
            ? "text-sm font-medium text-teal-600"
            : "text-sm font-medium text-red-600"
        }
      >
        {dbConnected ? "Database connected" : "Database connection failed"}
      </p>
    </main>
  );
}
