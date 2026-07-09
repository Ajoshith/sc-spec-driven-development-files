import { getDb } from "./db";
import type {
  Agent,
  AgentWithAilments,
  Ailment,
  Therapy,
  TherapyWithAilments,
  Appointment,
  AppointmentWithDetails,
} from "./types";

export type MutationResult<T> =
  | { ok: true; value: T }
  | { ok: false; error: string };

export function listAgents(): Agent[] {
  return getDb().prepare("SELECT id, name FROM agents ORDER BY id").all() as Agent[];
}

export function listAilmentsForAgent(agentId: number): Ailment[] {
  return getDb()
    .prepare(
      `SELECT ailments.id, ailments.name, ailments.description
       FROM ailments
       JOIN agent_ailments ON agent_ailments.ailment_id = ailments.id
       WHERE agent_ailments.agent_id = ?
       ORDER BY ailments.id`
    )
    .all(agentId) as Ailment[];
}

export function listTherapiesForAilment(ailmentId: number): Therapy[] {
  return getDb()
    .prepare(
      `SELECT therapies.id, therapies.name, therapies.description
       FROM therapies
       JOIN ailment_therapies ON ailment_therapies.therapy_id = therapies.id
       WHERE ailment_therapies.ailment_id = ?
       ORDER BY therapies.id`
    )
    .all(ailmentId) as Therapy[];
}

export function listTherapies(): Therapy[] {
  return getDb().prepare("SELECT id, name, description FROM therapies ORDER BY id").all() as Therapy[];
}

export function listAilmentsForTherapy(therapyId: number): Ailment[] {
  return getDb()
    .prepare(
      `SELECT ailments.id, ailments.name, ailments.description
       FROM ailments
       JOIN ailment_therapies ON ailment_therapies.ailment_id = ailments.id
       WHERE ailment_therapies.therapy_id = ?
       ORDER BY ailments.id`
    )
    .all(therapyId) as Ailment[];
}

export function listTherapiesWithAilments(): TherapyWithAilments[] {
  return listTherapies().map((therapy) => ({
    ...therapy,
    ailments: listAilmentsForTherapy(therapy.id),
  }));
}

export function listAppointments(): Appointment[] {
  return getDb()
    .prepare("SELECT id, agent_id, therapy_id, scheduled_at FROM appointments ORDER BY scheduled_at")
    .all() as Appointment[];
}

export function listAppointmentsWithDetails(): AppointmentWithDetails[] {
  return getDb()
    .prepare(
      `SELECT appointments.id, appointments.agent_id, appointments.therapy_id,
              appointments.scheduled_at, agents.name AS agent_name,
              therapies.name AS therapy_name
       FROM appointments
       JOIN agents ON agents.id = appointments.agent_id
       JOIN therapies ON therapies.id = appointments.therapy_id
       ORDER BY appointments.scheduled_at`
    )
    .all() as AppointmentWithDetails[];
}

function findTherapyConflict(
  therapyId: number,
  scheduledAt: string,
  excludeAppointmentId?: number
): boolean {
  const conflict = getDb()
    .prepare(
      `SELECT id FROM appointments
       WHERE therapy_id = ? AND scheduled_at = ? AND id != ?`
    )
    .get(therapyId, scheduledAt, excludeAppointmentId ?? -1);
  return Boolean(conflict);
}

export function createAppointment(
  agentId: number,
  therapyId: number,
  scheduledAt: string
): MutationResult<Appointment> {
  if (findTherapyConflict(therapyId, scheduledAt)) {
    return { ok: false, error: "That therapy is already booked at that time." };
  }
  const result = getDb()
    .prepare(
      "INSERT INTO appointments (agent_id, therapy_id, scheduled_at) VALUES (?, ?, ?)"
    )
    .run(agentId, therapyId, scheduledAt);
  return {
    ok: true,
    value: {
      id: result.lastInsertRowid as number,
      agent_id: agentId,
      therapy_id: therapyId,
      scheduled_at: scheduledAt,
    },
  };
}

export function cancelAppointment(id: number): void {
  getDb().prepare("DELETE FROM appointments WHERE id = ?").run(id);
}

export function rescheduleAppointment(
  id: number,
  scheduledAt: string
): MutationResult<Appointment> {
  const appointment = getDb()
    .prepare(
      "SELECT id, agent_id, therapy_id, scheduled_at FROM appointments WHERE id = ?"
    )
    .get(id) as Appointment | undefined;
  if (!appointment) {
    return { ok: false, error: "Appointment not found." };
  }
  if (findTherapyConflict(appointment.therapy_id, scheduledAt, id)) {
    return { ok: false, error: "That therapy is already booked at that time." };
  }
  getDb()
    .prepare("UPDATE appointments SET scheduled_at = ? WHERE id = ?")
    .run(scheduledAt, id);
  return { ok: true, value: { ...appointment, scheduled_at: scheduledAt } };
}

export function addTherapy(name: string, description: string | null): Therapy {
  const result = getDb()
    .prepare("INSERT INTO therapies (name, description) VALUES (?, ?)")
    .run(name, description);
  return { id: result.lastInsertRowid as number, name, description };
}

export function listAgentsWithAilments(): AgentWithAilments[] {
  return listAgents().map((agent) => ({
    ...agent,
    ailments: listAilmentsForAgent(agent.id),
  }));
}
