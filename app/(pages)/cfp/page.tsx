import { Section } from "@/components/section";
import { client } from "@/sanity/client";
import { qPage } from "@/sanity/queries";
import { PortableTextBlock } from "@/components/portable-text";

export default async function CfpPage() {
  const page = await client.fetch(qPage("cfp")).catch(() => null);

  return (
    <Section title={page?.title ?? "Call for Papers"} subtitle="Topics, important dates, and submission details.">
      {page?.body ? (
        <div className="prose max-w-none">
          <PortableTextBlock value={page.body} />
        </div>
      ) : (
        <div className="prose max-w-none">
          <p>Add CFP content in the Admin (Sanity Studio) under “Pages → CFP”.</p>
        </div>
      )}
    </Section>
  );
}
