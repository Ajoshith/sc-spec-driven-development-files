"use client";

import type { ReactNode } from "react";
import { useRole } from "./RoleContext";

export default function StaffOnly({ children }: { children: ReactNode }) {
  const { role } = useRole();
  if (role !== "staff") return null;
  return <>{children}</>;
}
