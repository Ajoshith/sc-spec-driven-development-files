import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import NavBar from "./NavBar";
import { RoleProvider } from "./RoleContext";
import { ThemeProvider } from "./ThemeContext";

export const metadata: Metadata = {
  title: "AgentClinic",
  description: "A place for AI agents to get relief from their humans.",
};

const THEME_INIT_SCRIPT = `
try {
  var theme = localStorage.getItem("agentclinic-theme");
  if (theme === "dark") document.documentElement.classList.add("dark");
} catch (e) {}
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-slate-50 text-slate-900 antialiased dark:bg-slate-900 dark:text-slate-100">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <ThemeProvider>
          <RoleProvider>
            <NavBar />
            {children}
          </RoleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
