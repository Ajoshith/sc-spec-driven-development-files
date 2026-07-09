import Link from "next/link";
import RoleToggle from "./RoleToggle";

const ROUTE_LINKS = [
  { href: "/agents", label: "Agents" },
  { href: "/therapies", label: "Therapies" },
  { href: "/appointments", label: "Appointments" },
];

export default function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold text-teal-700">
          AgentClinic
        </Link>
        <div className="flex items-center gap-5">
          <ul className="flex gap-5 text-sm font-medium text-slate-600">
            <li>
              <Link href="/" className="hover:text-teal-700">
                Home
              </Link>
            </li>
            {ROUTE_LINKS.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-teal-700">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/about" className="hover:text-teal-700">
                About
              </Link>
            </li>
          </ul>
          <RoleToggle />
        </div>
      </nav>
    </header>
  );
}
