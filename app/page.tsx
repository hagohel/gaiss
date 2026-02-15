import Link from "next/link";
import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { client } from "@/sanity/client";
import { qHome, qSettings } from "@/sanity/queries";

export default async function HomePage() {
  const [settings, home] = await Promise.all([
    client.fetch(qSettings).catch(() => null),
    client.fetch(qHome).catch(() => null),
  ]);

  const title = home?.heroTitle ?? "IEEE Conference on Generative AI for Secure Systems (GAISS)";
  const subtitle = home?.heroSubtitle ?? "Advancing secure systems through trustworthy generative AI — research, practice, and community.";
  const dateText = settings?.dateText ?? "Date TBA";
  const locationText = settings?.locationText ?? "Location TBA";

  const primaryCtaText = settings?.primaryCtaText ?? "Register";
  const primaryCtaUrl = settings?.primaryCtaUrl ?? "/registration";
  const secondaryCtaText = settings?.secondaryCtaText ?? "Call for Papers";
  const secondaryCtaUrl = settings?.secondaryCtaUrl ?? "/cfp";

  const stats = home?.stats?.length ? home.stats : [
    { label: "Tracks", value: "TBA" },
    { label: "Keynotes", value: "TBA" },
    { label: "Workshops", value: "TBA" },
  ];

  const highlights = home?.highlights?.length ? home.highlights : [
    { title: "Security-first", body: "Research at the intersection of GenAI and secure, resilient systems." },
    { title: "IEEE-quality program", body: "Rigorous review process with a strong technical program committee." },
    { title: "Industry + academia", body: "Real deployments, evaluations, and applied methods." },
  ];

  return (
    <>
      <section className="border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-white">
        <div className="container py-16 md:py-24">
          <div className="max-w-3xl">
            <Badge className="mb-4">{dateText} • {locationText}</Badge>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              {title}
            </h1>
            <p className="mt-5 text-lg text-neutral-700 max-w-2xl">
              {subtitle}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link href={primaryCtaUrl}><Button>{primaryCtaText}</Button></Link>
              <Link href={secondaryCtaUrl}><Button variant="secondary">{secondaryCtaText}</Button></Link>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {stats.map((s: any, idx: number) => (
              <Card key={idx}>
                <CardHeader>
                  <p className="text-sm text-neutral-600">{s.label}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-semibold">{s.value}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Section title="What to expect" subtitle="A focused venue for secure systems researchers and practitioners working with generative AI.">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {highlights.map((h: any, idx: number) => (
            <Card key={idx} className="h-full">
              <CardHeader>
                <h3 className="text-lg font-semibold">{h.title}</h3>
              </CardHeader>
              <CardContent>
                <p className="text-neutral-700 leading-relaxed">{h.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <Link href="/keynotes"><Button variant="secondary">View Keynotes</Button></Link>
          <Link href="/submission"><Button variant="secondary">Submission Guidelines</Button></Link>
          <Link href="/committee"><Button variant="secondary">Meet the Committee</Button></Link>
        </div>
      </Section>
    </>
  );
}
