"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Role = "agent" | "staff";

const RoleContext = createContext<{ role: Role; toggleRole: () => void }>({
  role: "agent",
  toggleRole: () => {},
});

export function RoleProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>("agent");
  const toggleRole = () =>
    setRole((current) => (current === "agent" ? "staff" : "agent"));

  return (
    <RoleContext.Provider value={{ role, toggleRole }}>
      {children}
    </RoleContext.Provider>
  );
}

export function useRole() {
  return useContext(RoleContext);
}
