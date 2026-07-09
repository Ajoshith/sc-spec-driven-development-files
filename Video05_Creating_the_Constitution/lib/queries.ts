import { getDb } from "./db";
import type {
  Agent,
  AgentWithAilments,
  Ailment,
  Therapy,
  TherapyWithAilments,
  Appointment,
} from "./types";

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

export function listAgentsWithAilments(): AgentWithAilments[] {
  return listAgents().map((agent) => ({
    ...agent,
    ailments: listAilmentsForAgent(agent.id),
  }));
}
