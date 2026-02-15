import { defineType, defineField } from "sanity";

export default defineType({
  name: "registrationTier",
  title: "Registration Tiers",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Tier name", type: "string", validation: (R) => R.required() }),
    defineField({ name: "label", title: "Label (e.g., Early / Regular)", type: "string" }),
    defineField({ name: "price", title: "Price", type: "string" }),
    defineField({ name: "currency", title: "Currency", type: "string", initialValue: "USD" }),
    defineField({ name: "perks", title: "Perks", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "stripePaymentLink", title: "Stripe payment link", type: "url" }),
    defineField({ name: "featured", title: "Featured", type: "boolean", initialValue: False }),
    defineField({ name: "order", title: "Order", type: "number", initialValue: 100 }),
  ],
});
