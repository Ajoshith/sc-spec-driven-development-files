import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";
import { RoleProvider } from "./RoleContext";

export const metadata: Metadata = {
  title: "AgentClinic",
  description: "A place for AI agents to get relief from their humans.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-slate-50 text-slate-900 antialiased">
        <RoleProvider>
          <NavBar />
          {children}
        </RoleProvider>
      </body>
    </html>
  );
}
