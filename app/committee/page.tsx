import Image from "next/image";
import { Section } from "@/components/section";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { client } from "@/sanity/client";
import { qCommittee } from "@/sanity/queries";
import { urlFor } from "@/sanity/image";

function groupByRole(items: any[]) {
  const map = new Map<string, any[]>();
  for (const i of items) {
    const key = i.role ?? "Other";
    map.set(key, [...(map.get(key) ?? []), i]);
  }
  return Array.from(map.entries());
}

export default async function CommitteePage() {
  const members = await client.fetch(qCommittee).catch(() => []);
  const grouped = groupByRole(members);

  return (
    <Section title="Committee" subtitle="General Chairs, Program Chairs, Technical Program Committee, and more.">
      <div className="space-y-10">
        {grouped.map(([role, people]) => (
          <div key={role}>
            <h2 className="text-xl font-semibold tracking-tight">{role}</h2>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {people.map((p: any) => (
                <Card key={p._id}>
                  <CardHeader className="flex flex-row gap-4 items-center">
                    <div className="relative h-14 w-14 overflow-hidden rounded-2xl border border-neutral-200 bg-neutral-50">
                      {p.photo ? (
                        <Image
                          src={urlFor(p.photo).width(200).height(200).url()}
                          alt={p.name}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <div>
                      <p className="font-semibold">{p.name}</p>
                      <p className="text-sm text-neutral-600">{p.affiliation}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {p.email ? <p className="text-sm text-neutral-600">{p.email}</p> : <p className="text-sm text-neutral-500">—</p>}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
