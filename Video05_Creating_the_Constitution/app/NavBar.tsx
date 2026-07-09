import Link from "next/link";

// Plain <a> tags on purpose for the same-page anchor targets: Next's
// <Link> same-page hash scroll has a timing race that sometimes fails to
// scroll at all, while native anchor navigation is reliable every time.
const ANCHOR_LINKS = [
  { href: "/#agents", label: "Agents" },
  { href: "/#therapies", label: "Therapies" },
  { href: "/#appointments", label: "Appointments" },
];

export default function NavBar() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <nav className="mx-auto flex max-w-3xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold text-teal-700">
          AgentClinic
        </Link>
        <ul className="flex gap-5 text-sm font-medium text-slate-600">
          <li>
            <Link href="/" className="hover:text-teal-700">
              Home
            </Link>
          </li>
          {ANCHOR_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="hover:text-teal-700">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link href="/about" className="hover:text-teal-700">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
