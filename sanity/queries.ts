export const qSettings = `*[_type == "siteSettings"][0]{
  title, tagline, dateText, locationText, primaryCtaText, primaryCtaUrl, secondaryCtaText, secondaryCtaUrl
}`;

export const qHome = `*[_type == "homePage"][0]{
  heroTitle, heroSubtitle,
  stats[]{label, value},
  highlights[]{title, body},
  seo{title, description}
}`;

export const qCommittee = `*[_type == "committeeMember"]|order(order asc){
  _id, name, role, affiliation, email, photo, order
}`;

export const qKeynotes = `*[_type == "keynote"]|order(order asc){
  _id, name, affiliation, talkTitle, talkAbstract, bio, photo, order
}`;

export const qPage = (slug: string) => `*[_type == "page" && slug.current == "${slug}"][0]{title, body, seo{title, description}}`;

export const qRegistration = `*[_type == "registrationTier"]|order(order asc){
  _id, name, label, price, currency, perks[], stripePaymentLink, order, featured
}`;
