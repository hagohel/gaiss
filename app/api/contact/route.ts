import { Resend } from "resend";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  // basic honeypot anti-spam
  if (body.company_website) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "Missing fields" }), { status: 400 });
  }

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!resendKey || !to || !from) {
    return new Response(JSON.stringify({ error: "Server not configured" }), { status: 500 });
  }

  const resend = new Resend(resendKey);

  await resend.emails.send({
    from,
    to,
    subject: `GAISS Contact: ${name}`,
    replyTo: email,
    text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
  });

  return new Response(JSON.stringify({ ok: true }), { status: 200 });
}
