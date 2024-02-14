import { sql } from "@vercel/postgres";

export default async function ContactForm({ params }) {
  const { rows } = await sql`SELECT * from contact_form where user_id=${params.user}`;

  return (
    <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.id} - {row.quantity}
        </div>
      ))}
    </div>
  );
}