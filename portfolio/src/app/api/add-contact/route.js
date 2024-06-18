import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

// Ensure your environment variables are loaded
if (!process.env.POSTGRES_URL) {
  throw new Error('Missing POSTGRES_URL environment variable');
}

export async function POST(request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Name, email, and message are required' }, { status: 400 });
    }

    // Using the sql instance which should already use the POSTGRES_URL
    await sql`INSERT INTO contact_form (Name, Email, Message) VALUES (${name}, ${email}, ${message})`;

    return NextResponse.json({ message: 'Contact added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error adding contact:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

export function methodNotAllowed() {
  return NextResponse.json({ error: 'Method Not Allowed' }, { status: 405 });
}

export async function GET() {
  return methodNotAllowed();
}

export async function PUT() {
  return methodNotAllowed();
}

export async function DELETE() {
  return methodNotAllowed();
}
