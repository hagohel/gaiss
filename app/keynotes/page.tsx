import Image from "next/image";
import { Section } from "../../components/section";
import { Card, CardContent, CardHeader } from "../../components/ui/card";
import { client } from "../../sanity/client";
import { qKeynotes } from "../../sanity/queries";
import { urlFor } from "../../sanity/image";
import { PortableTextBlock } from "../../components/portable-text";

export default async function KeynotesPage() {
  const keynotes = await client.fetch(qKeynotes).catch(() => []);

  return (
    <Section title="Keynotes" subtitle="Keynote speakers and talks.">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {keynotes.map((k: any) => (
          <Card key={k._id} className="overflow-hidden">
            <CardHeader className="flex flex-row gap-4 items-start">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50 shrink-0">
                {k.photo ? (
                  <Image
                    src={urlFor(k.photo).width(240).height(240).url()}
                    alt={k.name}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div>
                <p className="text-lg font-semibold">{k.name}</p>
                <p className="text-sm text-neutral-600">{k.affiliation}</p>
                <p className="mt-2 font-medium">{k.talkTitle}</p>
              </div>
            </CardHeader>
            <CardContent>
              {k.talkAbstract ? <p className="text-sm text-neutral-700 leading-relaxed">{k.talkAbstract}</p> : null}
              {k.bio ? (
                <div className="mt-4">
                  <p className="text-sm font-semibold">Bio</p>
                  <div className="prose max-w-none">
                    <PortableTextBlock value={k.bio} />
                  </div>
                </div>
              ) : null}
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}
