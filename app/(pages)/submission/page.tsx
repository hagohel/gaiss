import { Section } from "@/components/section";
import { client } from "@/sanity/client";
import { qPage } from "@/sanity/queries";
import { PortableTextBlock } from "@/components/portable-text";

export default async function SubmissionPage() {
  const page = await client.fetch(qPage("submission")).catch(() => null);

  return (
    <Section title={page?.title ?? "Submission"} subtitle="Guidelines for paper submission.">
      {page?.body ? (
        <div className="prose max-w-none">
          <PortableTextBlock value={page.body} />
        </div>
      ) : (
        <div className="prose max-w-none">
          <p>Add Submission content in the Admin (Sanity Studio) under “Pages → Submission”.</p>
        </div>
      )}
    </Section>
  );
}
