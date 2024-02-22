import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function handler(request) {
  if (request.method !== 'POST') {
    return NextResponse.error(new Error('Method Not Allowed'), { status: 405 });
  }

  try {
    const { name, email, message } = await request.json(); // Extract fields from request body

    if (!name || !email || !message) {
      throw new Error('Name, email, and message are required');
    }

    // Inserting data into the database
    await sql`INSERT INTO contact_form (Name, Email, Message) VALUES (${name}, ${email}, ${message})`;

    return NextResponse.json({ message: 'Contact added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error adding contact:', error);
    return NextResponse.error(new Error('Internal Server Error'), { status: 500 });
  }
}
