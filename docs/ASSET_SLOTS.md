# BELVEX asset slots

Place owner-approved files in the folders below. Keep the filenames stable, then set the corresponding path in `src/content/siteAssets.ts` or `src/content/proof.ts`. Until files and facts are supplied, the site displays an intentional fallback instead of a broken image or invented proof.

## Brand story

- `brand/belvex-story.webp` — optional team, founder, production, or brand photograph. Recommended landscape crop, at least 1400 × 1000 px. Set `siteAssets.brandStoryImage` to `/uploads/brand/belvex-story.webp`.
- `brand/belvex-partners.webp` — optional approved partner or retail image. Set `siteAssets.partnersImage` to `/uploads/brand/belvex-partners.webp`.
- `products/<product-slug>.webp` — optional approved packshot for any product. Set that product's `image` and `imageAlt` fields in `src/products.ts`.

## Partner proof

- `proof/partners/<business-name>.svg` or `.webp` — partner logo. Add the partner name, city, and category to `proof.partners` only after the owner approves publication.
- `proof/testimonials/<person-name>.webp` — optional portrait. Add a testimonial to `proof.testimonials` only after the quote, name, role, organization, city, and publication consent are confirmed.
- `proof/quality/<document-name>.pdf` — approved quality or traceability document. Add a `proof.qualityDocuments` entry only when the document can be shared publicly.

## FAQ content awaiting owner confirmation

Confirm minimum order, delivery zones and lead times, payment terms, product documentation, marketing support, and any exclusivity policy before adding answers. Do not publish guessed numbers or promises.
