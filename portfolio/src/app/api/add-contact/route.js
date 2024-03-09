import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, message } = req.body; // Extract fields from request body

    if (!name || !email || !message) {
      throw new Error('Name, email, and message are required');
    }
    // Inserting data into the database
    await sql`INSERT INTO contact_form (Name, Email, Message) VALUES (${name}, ${email}, ${message})`;

    return res.status(200).json({ message: 'Contact added successfully' });
  } catch (error) {
    console.error('Error adding contact:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
