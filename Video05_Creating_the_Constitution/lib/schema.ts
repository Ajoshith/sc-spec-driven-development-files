import type Database from "better-sqlite3";

export function createSchema(db: Database.Database): void {
  db.exec(`
    CREATE TABLE IF NOT EXISTS agents (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL
    );

    CREATE TABLE IF NOT EXISTS ailments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT
    );

    CREATE TABLE IF NOT EXISTS therapies (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT
    );

    CREATE TABLE IF NOT EXISTS agent_ailments (
      agent_id INTEGER NOT NULL REFERENCES agents(id),
      ailment_id INTEGER NOT NULL REFERENCES ailments(id),
      PRIMARY KEY (agent_id, ailment_id)
    );

    CREATE TABLE IF NOT EXISTS ailment_therapies (
      ailment_id INTEGER NOT NULL REFERENCES ailments(id),
      therapy_id INTEGER NOT NULL REFERENCES therapies(id),
      PRIMARY KEY (ailment_id, therapy_id)
    );

    CREATE TABLE IF NOT EXISTS appointments (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      agent_id INTEGER NOT NULL REFERENCES agents(id),
      therapy_id INTEGER NOT NULL REFERENCES therapies(id),
      scheduled_at TEXT NOT NULL
    );
  `);
}
