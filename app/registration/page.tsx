import Link from "next/link";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/client";
import { qRegistration } from "@/sanity/queries";
import { clsx } from "clsx";

export default async function RegistrationPage() {
  const tiers = await client.fetch(qRegistration).catch(() => []);

  return (
    <Section title="Registration" subtitle="Choose your registration tier. Payment links open Stripe Checkout.">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {tiers.map((t: any) => (
          <Card key={t._id} className={clsx("h-full", t.featured ? "border-black" : "")}>
            <CardHeader>
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-lg font-semibold">{t.name}</h3>
                {t.label ? <Badge>{t.label}</Badge> : null}
              </div>
              <p className="mt-2 text-3xl font-semibold">
                {t.currency ?? "USD"} {t.price ?? "TBA"}
              </p>
            </CardHeader>
            <CardContent>
              <ul className="text-sm text-neutral-700 space-y-2">
                {(t.perks ?? []).map((p: string, idx: number) => (
                  <li key={idx}>• {p}</li>
                ))}
              </ul>
              <div className="mt-6">
                {t.stripePaymentLink ? (
                  <Link href={t.stripePaymentLink} target="_blank" rel="noreferrer">
                    <Button className="w-full">Pay with Stripe</Button>
                  </Link>
                ) : (
                  <Button className="w-full" disabled>
                    Stripe link not set
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {!tiers?.length ? (
        <p className="mt-6 text-sm text-neutral-600">
          Add tiers in Admin under “Registration Tiers” (include Stripe payment links).
        </p>
      ) : null}
    </Section>
  );
}
