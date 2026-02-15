import { defineType, defineField } from "sanity";

export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Site Title", type: "string" }),
    defineField({ name: "tagline", title: "Tagline", type: "string" }),
    defineField({ name: "dateText", title: "Date text", type: "string" }),
    defineField({ name: "locationText", title: "Location text", type: "string" }),
    defineField({ name: "primaryCtaText", title: "Primary CTA text", type: "string" }),
    defineField({ name: "primaryCtaUrl", title: "Primary CTA URL", type: "string" }),
    defineField({ name: "secondaryCtaText", title: "Secondary CTA text", type: "string" }),
    defineField({ name: "secondaryCtaUrl", title: "Secondary CTA URL", type: "string" }),
  ],
});
