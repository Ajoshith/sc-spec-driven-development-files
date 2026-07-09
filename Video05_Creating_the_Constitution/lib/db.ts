import Database from "better-sqlite3";
import path from "node:path";

const dbPath = path.join(process.cwd(), "agentclinic.sqlite");

let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
  }
  return db;
}

export function smokeCheck(): boolean {
  const row = getDb().prepare("SELECT 1 AS ok").get() as { ok: number };
  return row.ok === 1;
}
