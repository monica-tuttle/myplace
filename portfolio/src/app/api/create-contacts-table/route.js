import { sql, db } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export async function GET(request) {
  try {
    const client = await db.connect(); // Moved inside the async function
    const result = await sql`CREATE TABLE IF NOT EXISTS contact_form (
          id SERIAL PRIMARY KEY,
          full_name VARCHAR(100) NOT NULL,
          email VARCHAR(100) NOT NULL,
          message TEXT NOT NULL,
          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`;
    client.release(); // Release the client connection
    return NextResponse.json({ result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}