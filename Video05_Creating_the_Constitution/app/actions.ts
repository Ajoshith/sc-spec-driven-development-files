"use server";

import { revalidatePath } from "next/cache";
import {
  createAppointment,
  cancelAppointment,
  rescheduleAppointment,
  addTherapy,
} from "@/lib/queries";

export type ActionState = { ok: boolean; error?: string };

export async function bookAppointmentAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const agentId = Number(formData.get("agentId"));
  const therapyId = Number(formData.get("therapyId"));
  const scheduledAt = String(formData.get("scheduledAt") ?? "");

  if (!agentId || !therapyId || !scheduledAt) {
    return { ok: false, error: "Pick an agent, a therapy, and a time." };
  }

  const result = createAppointment(agentId, therapyId, scheduledAt);
  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  revalidatePath("/");
  return { ok: true };
}

export async function cancelAppointmentAction(id: number): Promise<void> {
  cancelAppointment(id);
  revalidatePath("/");
}

export async function rescheduleAppointmentAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const id = Number(formData.get("id"));
  const scheduledAt = String(formData.get("scheduledAt") ?? "");

  if (!id || !scheduledAt) {
    return { ok: false, error: "Pick a new time." };
  }

  const result = rescheduleAppointment(id, scheduledAt);
  if (!result.ok) {
    return { ok: false, error: result.error };
  }
  revalidatePath("/");
  return { ok: true };
}

export async function addTherapyAction(
  _prevState: ActionState,
  formData: FormData
): Promise<ActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const description = String(formData.get("description") ?? "").trim() || null;

  if (!name) {
    return { ok: false, error: "Therapy needs a name." };
  }

  addTherapy(name, description);
  revalidatePath("/");
  return { ok: true };
}
