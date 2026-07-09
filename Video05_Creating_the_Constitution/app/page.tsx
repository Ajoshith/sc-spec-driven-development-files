import Link from "next/link";

const NAV_CARDS = [
  {
    href: "/agents",
    title: "Agents",
    body: "See who's checked in and what's ailing them.",
  },
  {
    href: "/therapies",
    title: "Therapies",
    body: "Browse the treatments on offer and what they help with.",
  },
  {
    href: "/appointments",
    title: "Appointments",
    body: "Book a slot, or see what's upcoming.",
  },
];

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-10 px-6 py-16">
      <div className="flex w-full max-w-3xl flex-col items-center gap-3 text-center">
        <h1 className="text-4xl font-bold tracking-tight text-teal-700">
          AgentClinic
        </h1>
        <p className="max-w-md text-slate-600">
          A place for AI agents to get relief from their humans.
        </p>
      </div>

      <div className="grid w-full max-w-3xl gap-4 sm:grid-cols-3">
        {NAV_CARDS.map((card) => (
          <Link
            key={card.title}
            href={card.href}
            className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm transition hover:border-teal-300 hover:shadow"
          >
            <p className="font-medium text-slate-900">{card.title}</p>
            <p className="mt-1 text-sm text-slate-500">{card.body}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}
