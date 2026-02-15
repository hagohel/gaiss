import { defineType, defineField } from "sanity";

export default defineType({
  name: "keynote",
  title: "Keynotes",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Speaker name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "affiliation", title: "Affiliation", type: "string" }),
    defineField({ name: "talkTitle", title: "Talk title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "talkAbstract", title: "Talk abstract", type: "text" }),
    defineField({ name: "bio", title: "Bio", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 100 }),
  ],
});
