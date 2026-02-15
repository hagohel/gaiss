import { defineType, defineField } from "sanity";

export default defineType({
  name: "homePage",
  title: "Home Page",
  type: "document",
  fields: [
    defineField({ name: "heroTitle", title: "Hero title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero subtitle", type: "text" }),
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", type: "string", title: "Label" },
          { name: "value", type: "string", title: "Value" },
        ]
      }]
    }),
    defineField({
      name: "highlights",
      title: "Highlights",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "title", type: "string", title: "Title" },
          { name: "body", type: "text", title: "Body" },
        ]
      }]
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        { name: "title", title: "Title", type: "string" },
        { name: "description", title: "Description", type: "text" },
      ]
    }),
  ],
});
