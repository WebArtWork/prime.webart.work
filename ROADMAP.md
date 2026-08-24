# Roadmap

## Shared maintenance

- [x] Update application and development dependencies, refresh the lockfile, and address resulting peer-dependency or build issues.

## Templates landing

- [x] Move the current two template records into `src/data` as the single source of truth.
- [x] Render the landing-page template list from that data source.
- [x] Keep template cards linked to their detail pages.

## Template profile

- [x] Add a template-profile page for the selected template.
- [x] Show template details, included features, license options, and a purchase call to action.
- [ ] Add real preview media (screenshot/image) per template — `previewImage` is wired up but no asset exists yet.
- [x] Route from the landing list to the selected profile by template slug.

## Free templates — drop the buy/cart flow

Free templates should never go through cart/checkout. Replace the current "add to cart" +
email-capture flow for `license: 'free'` templates with two plain links, shown directly on the
landing card and the template-profile page:

- [ ] "View on GitHub" — links straight to `template.repoUrl`.
- [ ] "Getting started" / usage guide — links to a new per-template guide page
  (e.g. `/templates/:slug/guide`, or an external doc if that's easier to maintain) that walks a
  developer through cloning and running the template. Content TBD per template.
- [ ] Remove the cart/email-capture UI entirely for free templates: no "Add to cart", no
  `CartService.add`, no email form. `CartService` and `/cart` become paid-only.
- [ ] Clean up now-unused pieces once free templates stop touching the cart: re-check whether
  `ContactService`'s free-download email flow in `cart.component.ts` is still needed at all, or
  whether the cart page becomes purely a paid-checkout page.

## Paid templates — new license-tier purchase flow

Introduce real per-template licensing with two tiers, sold per template:

- [ ] Extend the `Template` data model (`template.interface.ts`, `templates.json`,
  `template.data.ts`) to support multiple license tiers per template, e.g.:
  ```json
  "licenses": [
    { "type": "single-domain", "label": "Single domain", "price": 49 },
    { "type": "all-subdomains", "label": "All subdomains", "price": 149 }
  ]
  ```
  Keep `license: 'free' | 'paid'` (or derive it from whether `licenses` is empty) so free templates
  stay on the simple GitHub+guide flow above.
- [ ] Add one fake paid template to `templates.json` purely to exercise this flow end-to-end —
  clearly marked as a placeholder/demo product, not a real sellable template. Price the two tiers at
  $49 (single domain) / $149 (all subdomains), per the agreed placeholder pricing.
- [ ] Template-profile page: for a paid template, replace the single "Add to cart" button with a
  license-tier picker (radio/select between the tiers) before adding to cart, so the cart item
  remembers which tier was chosen.
- [ ] Cart page: show the selected license tier and its price per line item, allow changing the tier,
  and compute a real order total across paid items (no longer always "Free").
- [ ] Checkout step: **only plan this, don't implement yet** — payment processor and flow to be
  decided in a future session before any real integration work starts. Until then, keep the
  "Buy" action on paid templates ending in a clearly-labeled "Checkout — coming soon" state, same
  spirit as the current stub, so nothing collects real payment details prematurely.
