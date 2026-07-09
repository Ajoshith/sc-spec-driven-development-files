import Database from "better-sqlite3";
import path from "node:path";
import { createSchema } from "./schema";

const dbPath = path.join(process.cwd(), "agentclinic.sqlite");

let db: Database.Database | null = null;

export function getDb(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    createSchema(db);
  }
  return db;
}

export function smokeCheck(): boolean {
  const row = getDb().prepare("SELECT 1 AS ok").get() as { ok: number };
  return row.ok === 1;
}
