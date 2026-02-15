import { defineType, defineField } from "sanity";

export default defineType({
  name: "committeeMember",
  title: "Committee Members",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "role", title: "Role (e.g., General Chair)", type: "string", validation: (R) => R.required() }),
    defineField({ name: "affiliation", title: "Affiliation", type: "string" }),
    defineField({ name: "email", title: "Email (optional)", type: "string" }),
    defineField({ name: "photo", title: "Photo", type: "image", options: { hotspot: true } }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 100 }),
  ],
});
