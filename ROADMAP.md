# Roadmap

## Shared maintenance

- [ ] Update application and development dependencies, refresh the lockfile, and address resulting peer-dependency or build issues.

## Templates landing

- [ ] Move the current two template records into `src/data` as the single source of truth.
- [ ] Render the landing-page template list from that data source.
- [ ] Keep template cards linked to their detail pages.

## Template profile

- [ ] Add a template-profile page for the selected template.
- [ ] Show template details, preview media, included features, license options, and a purchase call to action.
- [ ] Route from the landing list to the selected profile by template slug.

## Cart and licensing

- [ ] Add a cart page for template-license purchases.
- [ ] Support adding/removing a template license and displaying the selected license, price, and order total.
- [ ] Define the checkout/payment integration boundary before collecting payment details.
