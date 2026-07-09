import Link from "next/link";
import RoleToggle from "./RoleToggle";
import ThemeToggle from "./ThemeToggle";

const ROUTE_LINKS = [
  { href: "/agents", label: "Agents" },
  { href: "/therapies", label: "Therapies" },
  { href: "/appointments", label: "Appointments" },
];

export default function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold text-teal-700 dark:text-teal-400">
          AgentClinic
        </Link>
        <div className="flex items-center gap-5">
          <ul className="flex gap-5 text-sm font-medium text-slate-600 dark:text-slate-300">
            <li>
              <Link href="/" className="hover:text-teal-700 dark:hover:text-teal-400">
                Home
              </Link>
            </li>
            {ROUTE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-teal-700 dark:hover:text-teal-400">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="hover:text-teal-700 dark:hover:text-teal-400">
                About
              </Link>
            </li>
          </ul>
          <ThemeToggle />
          <RoleToggle />
        </div>
      </nav>
    </header>
  );
}
