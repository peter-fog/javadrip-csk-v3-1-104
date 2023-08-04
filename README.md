## Uniform vNext Algolia Commerce Demo

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### Add Algolia Commerce integration

1. Navigate to your project then go to tab `Integrations`.

2. In section `Browse Integrations` chose `Algolia`.

3. Fill out settings page

4. Click on `Test`

5. Select indexes

6. Click on `Save` button.

### Environment Variables

- `UNIFORM_API_KEY`: your uniform api key
  > ⚠️ For the initial setup, this API key needs the Developer role assigned to it.
- `UNIFORM_PROJECT_ID`: your uniform project
- `ALGOLIA_APPLICATION_ID`: your algolia application id
- `ALGOLIA_SEARCH_KEY`: your algolia search key
- `GOOGLE_ANALYTICS_ID`: optional, for [ga-plugin](https://docs.uniform.app/integrations/data/google-analytics#activate-ga-plugin)

### Redirect Management

By default, redirects are set up with middleware and RedirectClient to get the current redirects from uniform.
You can switch the redirection logic from the middleware to the build stage by adding to the `dev` and `build` commands a request to generate a redirection list(`uniform:get:redirects`), which will be passed to the next config:

```json
{
  "dev": "run-s uniform:pull:manifest uniform:get:redirects dev:next",
  "build": "run-s uniform:pull:manifest uniform:get:redirects build:next"
}
```

You can also delete the `middleware.ts` file, but keep in mind that with this approach, updating the redirection list requires rebuilding the full application

### Init and start Algolia Demo

1. In your terminal, from the project root, run the following command:

```bash
npm i
```

2. Navigate to `/apps/commerce-algolia` folder:

```bash
cd apps/commerce-algolia/
```

3. In your code editor and rename `.env.example` to `.env` file and add your `UNIFORM_API_KEY`, `UNIFORM_PROJECT_ID`, `ALGOLIA_APPLICATION_ID` and `ALGOLIA_SEARCH_KEY` variables
   > ⚠️ For the initial setup, this API key needs the Developer role assigned to it.
4. This command pushes all configurations to your new Uniform project.

```bash
npm run push
```

5. Run the production server:

```bash
npm run build && npm run start
```

or development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Supported features

- Top navigation based on project map
- Article detail and Product detail override
- Beans && Coffee makers pages and personalized search based on enrichments
- Product detail page
- Local storage based cart functionality
- Visual Canvas & Project Map & Project Map Links
- [Static page generation based on project map canvas API](https://docs.uniform.app/reference/packages/uniformdev-project-map#projectmapclient)
- Canvas components with default Title Parameter and Screenshot for better Visual Canvas experience
- Next SDK for components registration [DRAFT: Canvas + Next.js Getting Started Optimization](https://www.notion.so/DRAFT-Canvas-Next-js-Getting-Started-Optimization-579fa27b2ad0428392d19b7db2912aa8)
- Standard context output type (client side personalization)

### Components

- Add to cart
- Call to action
- Container / Section - Two Columns (advanced usage example)
- Featured Products (default / dark variants)
- Recommended Products (default / dark variants)
- Recommended Articles (default / dark variants)
- Instant Search
- Hit Product
- Hits
- Refinement List
- Search Box
- Hero (2 variants)
- Page (composition component)
- Product (Template)
- Product Description
- Product Image Gallery
- Product Info

### Compositions

- Home page
  - project map based navigation menu
  - hero component
  - call to action
  - featured products (default variant)
  - recommended products (dark variant)
  - hardcoded footer
- Coffee-makers Products page
  - project map based navigation menu
  - hero
  - instant search (personalized search based on enrichments)
  - search box
  - section two columns
  - refinement list
  - hits/hit
  - hardcoded footer
- Beans Products page
  - project map based navigation menu
  - hero
  - instant search (personalized search based on enrichments)
  - search box
  - section two columns
  - refinement list
  - hits/hit
  - hardcoded footer
- Product (Template)
  - project map based navigation menu
  - product (template)
  - recommended products
- Articles
  - project map based navigation menu
  - article list
  - hardcoded footer
- Article (Template)
  - project map based navigation menu
  - article (template)
  - recommended article
  - hardcoded footer

### Initial Ehnacement Needs / Topics
	1. Install doesn't configure Themepack.
	2. Needs full JD header logo https://res.cloudinary.com/uniformdev/image/upload/v1684372751/JavaDrip/logos/icon-header-logo_vjm8yy_ljol9o.svg
	3. Swap Card variant on Hit Product.  
		a. Where is that configured in Canvas? appears to be hardoded in component
		b. Button Label "Learn More" ?
	4. Breadcrumb isn't working: http://localhost:3000/products/:product-slug
	5. Articles we need a different approach than /CMS/slug
		a. @adam need some brainstorming here on how we handle alternative CMS source.  Maybe a Parameter in /articles to hide one vs other
	6. Need Form for Landing Page
	8. Wire ChatGPT into Form (and possibly elsewhere)
	9. Patterns and other objects should be renamed/named with Component - source or Composition - source
	10. Need Recommended Products pattern - use Algolia Products   
     a. Card Block - Recommended Makers - uses Algolia AI to pick from similar
     b. Card Block - Products - user selectable products.  Default is 3 high-end Espresso machines
     c. Card Block - Featured Products. Editorially controlled products selected in Pattern
	11. Page 
		a. Page Title hero needs a JD default image  https://res.cloudinary.com/uniformdev/image/upload/v1662486357/JavaDrip/heros/TourBar%20Home%20Page/Default.webp
		b. Breadcrumb should display Rood and Placeholder nodes
	12. Need Landing Page (Promo) page
			a. Default hero background: https://res.cloudinary.com/uniformdev/image/upload/v1662994541/JavaDrip/heros/Home%20Page/hero_alt1_jxy9t6_mrsifq.webp
      b. Grid - 2 Column Promotion is a pattern of 2 columns with Grid Items pre configured for 1/3 - 2/3 column counts.  Also as placehodlers there is a CTA in left and a Hero in Right.  Hero will be replaced by Form

