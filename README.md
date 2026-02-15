# GAISS Conference Website (Next.js + Sanity + Vercel)

Menu:
Home • Committee • Keynotes • CFP • Registration • Submission • Contact (+ Admin)

## 1) Run locally
```bash
npm install
cp .env.example .env.local
npm run dev
```

## 2) Create the (free) Sanity project
1. Create an account at Sanity
2. Create a new project and copy:
   - Project ID
   - Dataset name (usually `production`)

3. Put them in `.env.local`:
- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`

## 3) Open Admin
- Visit: `http://localhost:3000/studio`

Create these documents:
- Site Settings (1 doc)
- Home Page (1 doc)
- Pages → create 2 docs with slugs:
  - `cfp`
  - `submission`
- Add Committee Members, Keynotes, Registration Tiers

## 4) Contact form email (free)
Create a Resend account and API key, then set:
- `RESEND_API_KEY`
- `CONTACT_TO_EMAIL`
- `CONTACT_FROM_EMAIL`

## 5) Deploy to Vercel (free)
- Import this repo into Vercel
- Add the same env vars in Vercel
- Deploy

## Stripe payment links (free to create)
In Stripe:
- Create Payment Links for each tier
- Paste each link into the Registration Tier document
