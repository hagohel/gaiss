"use client";
import { useState } from "react";
import { Section } from '../../components/section'
import { Button } from '../../components/ui/button'
import { Card, CardContent, CardHeader } from "../../components/ui/card";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setMessage("");

    const form = new FormData(e.currentTarget);
    const payload = Object.fromEntries(form.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      setMessage("Thanks — your message was sent.");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <Section title="Contact" subtitle="Send a message to the organizing committee.">
      <Card className="max-w-2xl">
        <CardHeader>
          <p className="text-sm text-neutral-600">We’ll get back to you as soon as possible.</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Honeypot */}
            <input name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label className="text-sm font-medium">Name</label>
              <input name="name" required className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2" />
            </div>
            <div>
              <label className="text-sm font-medium">Message</label>
              <textarea name="message" required rows={6} className="mt-1 w-full rounded-xl border border-neutral-200 px-3 py-2" />
            </div>

            <Button type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : "Send message"}
            </Button>

            {message ? (
              <p className="text-sm text-neutral-700">{message}</p>
            ) : null}
          </form>
        </CardContent>
      </Card>
    </Section>
  );
}
