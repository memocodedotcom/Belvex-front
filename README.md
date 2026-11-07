# BELVEX — frontend

Single-page, responsive BELVEX brand and product collection frontend built with React, TypeScript and Vite. The product renders are drawn in CSS, so the page does not require WebGL.

The homepage includes the brand story, an owner-ready social-proof section, a professional partner section, and a FAQ. Empty proof entries render transparent upload slots; no partner, testimonial, certification, or quality claim is fabricated.

## Run locally

1. Install Node.js 20 or newer.
2. Run `npm install`.
3. Copy `.env.example` to `.env.local` and add the WhatsApp number in international digits only (country code, no `+` or spaces) when available.
4. Run `npm run dev`.

The partner form does not send or store data. With a configured WhatsApp number it opens a prefilled message in WhatsApp; without one it offers a copyable message and clearly reports that the contact number is not configured.

Product names, taglines, amounts, copy and claims come from the supplied BELVEX marketing dossier. The supplied WhatsApp product montages are not used because their packaging text contains claims that differ from the dossier.

## Adding owner assets and content

See [docs/ASSET_SLOTS.md](docs/ASSET_SLOTS.md) for the exact folders, filenames, and fields to populate when BELVEX supplies approved photos, partner logos, testimonials, or shareable quality documents. FAQ answers about commercial terms remain out until the owner confirms them.

## Not included

This deliverable is frontend-only: it has no API, database, CRM, tracking pixels, customer-data storage, or hosting configuration. Product usage instructions, warnings, company/legal details and the WhatsApp contact still need client-approved values before launch.
