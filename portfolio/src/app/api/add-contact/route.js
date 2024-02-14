import { sql } from '@vercel/postgres';
import { NextResponse } from 'next/server';
 
export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const contactName = searchParams.get('contactName');
 
  try {
    if (!contactName) throw new Error('Contact name required');
    await sql`INSERT INTO contact_form (Name) VALUES (${contactName});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
 
  const pets = await sql`SELECT * FROM contact_form;`;
 ; return NextResponse.json({ contact_form }, { status: 200 });
}