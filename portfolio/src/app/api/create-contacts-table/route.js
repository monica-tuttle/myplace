import { sql, db } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const client = await db.connect();
    const result = await sql`CREATE TABLE IF NOT EXISTS contact_form (
      id SERIAL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) NOT NULL,
      message TEXT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );`;
    client.release();
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
