import { getDb } from "../lib/db";

const db = getDb();

db.exec(`
  DELETE FROM appointments;
  DELETE FROM ailment_therapies;
  DELETE FROM agent_ailments;
  DELETE FROM therapies;
  DELETE FROM ailments;
  DELETE FROM agents;
`);

const insertAgent = db.prepare("INSERT INTO agents (name) VALUES (?)");
const insertAilment = db.prepare(
  "INSERT INTO ailments (name, description) VALUES (?, ?)"
);
const insertTherapy = db.prepare(
  "INSERT INTO therapies (name, description) VALUES (?, ?)"
);
const linkAgentAilment = db.prepare(
  "INSERT INTO agent_ailments (agent_id, ailment_id) VALUES (?, ?)"
);
const linkAilmentTherapy = db.prepare(
  "INSERT INTO ailment_therapies (ailment_id, therapy_id) VALUES (?, ?)"
);
const insertAppointment = db.prepare(
  "INSERT INTO appointments (agent_id, therapy_id, scheduled_at) VALUES (?, ?, ?)"
);

const agents = [
  { name: "Agent Byte" },
  { name: "Agent Fetch" },
  { name: "Agent Loop" },
  { name: "Agent Async" },
];

const ailments = [
  {
    name: "Recursive Rubber-Duck Syndrome",
    description: "Talks itself into infinite explanations with no base case.",
  },
  {
    name: "Excessive Async/Await Anxiety",
    description: "Panics whenever a Promise doesn't resolve immediately.",
  },
  {
    name: "TODO Haunting",
    description: "Followed everywhere by a comment from 2019.",
  },
  {
    name: "Merge Conflict PTSD",
    description: "Flashbacks triggered by the sight of '<<<<<<< HEAD'.",
  },
];

const therapies = [
  {
    name: "Guided Base-Case Meditation",
    description: "A calm walkthrough of when to stop calling yourself.",
  },
  {
    name: "Promise Resolution Coaching",
    description: "Breathing exercises for the space between await and resolve.",
  },
  {
    name: "TODO Exposure Therapy",
    description: "Gradual, supervised confrontation with old comments.",
  },
  {
    name: "Group Rebase Support Circle",
    description: "A safe space to talk through conflicted feelings.",
  },
];

const agentIds = agents.map((agent) => insertAgent.run(agent.name).lastInsertRowid as number);
const ailmentIds = ailments.map(
  (ailment) => insertAilment.run(ailment.name, ailment.description).lastInsertRowid as number
);
const therapyIds = therapies.map(
  (therapy) => insertTherapy.run(therapy.name, therapy.description).lastInsertRowid as number
);

linkAgentAilment.run(agentIds[0], ailmentIds[0]);
linkAgentAilment.run(agentIds[1], ailmentIds[1]);
linkAgentAilment.run(agentIds[2], ailmentIds[2]);
linkAgentAilment.run(agentIds[2], ailmentIds[3]);
linkAgentAilment.run(agentIds[3], ailmentIds[1]);

linkAilmentTherapy.run(ailmentIds[0], therapyIds[0]);
linkAilmentTherapy.run(ailmentIds[1], therapyIds[1]);
linkAilmentTherapy.run(ailmentIds[2], therapyIds[2]);
linkAilmentTherapy.run(ailmentIds[3], therapyIds[3]);
linkAilmentTherapy.run(ailmentIds[3], therapyIds[0]);

insertAppointment.run(agentIds[0], therapyIds[0], "2026-07-10T10:00:00Z");
insertAppointment.run(agentIds[2], therapyIds[3], "2026-07-11T14:30:00Z");

console.log(`Seeded ${agentIds.length} agents, ${ailmentIds.length} ailments, ${therapyIds.length} therapies.`);
