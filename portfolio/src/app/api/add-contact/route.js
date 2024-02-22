import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';

export default async function handler(request) {
  if (request.method !== 'POST') {
    return NextResponse.error(new Error('Method Not Allowed'), { status: 405 });
  }

  try {
    const { name } = await request.json(); // Extract name from request body

    if (!name) {
      throw new Error('Contact name is required');
    }

    // Inserting the contact name into the database
    await sql`INSERT INTO contact_form (Name) VALUES (${name})`;

    return NextResponse.json({ message: 'Contact added successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error adding contact:', error);
    return NextResponse.error(new Error('Internal Server Error'), { status: 500 });
  }
}
