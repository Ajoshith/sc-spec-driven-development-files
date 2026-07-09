export interface Agent {
  id: number;
  name: string;
}

export interface Ailment {
  id: number;
  name: string;
  description: string | null;
}

export interface Therapy {
  id: number;
  name: string;
  description: string | null;
}

export interface AgentAilment {
  agent_id: number;
  ailment_id: number;
}

export interface AilmentTherapy {
  ailment_id: number;
  therapy_id: number;
}

export interface Appointment {
  id: number;
  agent_id: number;
  therapy_id: number;
  scheduled_at: string;
}

export interface AgentWithAilments extends Agent {
  ailments: Ailment[];
}

export interface TherapyWithAilments extends Therapy {
  ailments: Ailment[];
}
