# SEO & Indexing Plan

_Target site: https://bachatapp.org/_

> Goal: Make the site crawlable, indexable, and ultimately rank for relevant queries in Google Search.

---

## 1. Choose & Configure a Canonical Production Domain (Highly recommended)

| Task                                                                                                | Who   | How                                                                                                            |
| --------------------------------------------------------------------------------------------------- | ----- | -------------------------------------------------------------------------------------------------------------- |
| Buy/choose a custom domain (e.g.**bachatapp**)                                                | Owner | Registrar of choice                                                                                            |
| Add the domain in**Vercel → Settings → Domains**                                            | Owner | Automatic DNS records if using Vercel nameservers; otherwise add the provided `CNAME`/`A` records manually |
| Enforce HTTPS and redirect all `www.`/`http` traffic to the canonical URL                       | Dev   | Add redirects in `vercel.json` (see Appendix A)                                                              |
| Insert a**`<link rel="canonical">`** tag in every page's `<head>` pointing to the preferred URL | Dev   | For a single-page app, add once in `index.html`; for multiple routes add programmatically                    |

*Why?* A single canonical URL avoids duplicate-content penalties and ensures Google references the right version.

---

## 2. Remove All "noindex" Signals

Vercel automatically sets `x-robots-tag: noindex` **for preview deployments**.
Production deployments _on the main branch_ are not affected, but double-check:

```bash
curl -I https://bachatapp.org/
# Ensure there is NO `x-robots-tag: noindex`
```

If you ever need to override, see Appendix A for a `vercel.json` snippet.

---

## 3. Provide Robots & Sitemap

1. **robots.txt** (place in `/public`):
   ```
   User-agent: *
   Allow: /
   Sitemap: https://<your-domain>/sitemap.xml
   ```
2. **sitemap.xml**
   • For a static build, generate during `npm run build` with a script (e.g. `sitemap-generator-cli` or a custom Node script).
   • For dynamic content, generate on the server or with a cron workflow.

Add the sitemap path to robots.txt and submit it to Search Console (step 6).

---

## 4. Add Basic SEO Meta Tags

Edit `index.html` (or component that controls `<head>`):

```html
<title>Healthy Relationship Tests & Quizzes</title>
<meta name="description" content="Free interactive tests to understand and improve your relationships.">
<meta property="og:title" content="Healthy Relationship Tests & Quizzes">
<meta property="og:description" content="Free interactive tests to understand and improve your relationships.">
<meta property="og:url" content="https://<your-domain>/">
<meta property="og:type" content="website">
<link rel="canonical" href="https://<your-domain>/" />
```

For each quiz or significant dynamic page, update the title/description programmatically.

---

## 5. Add Structured Data (Schema.org)

Embed JSON-LD in pages where applicable, e.g. `FAQPage`, `Article`, or `CreativeWork` for each test.
This boosts rich-result eligibility.

Example in React:

```tsx
<script type="application/ld+json">
{JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } }
  ]
})}
</script>
```

---

## 6. Verify & Configure Google Search Console

1. Go to [https://search.google.com/search-console](https://search.google.com/search-console).
2. Click **Add Property ➜ Domain** and enter the canonical domain.
3. Copy the TXT verification record Google gives you.
4. In **Vercel → Domains → DNS Records** add a **TXT** record (leave **Name** blank).
5. Back in Search Console, click **Verify**.
6. After verification, open **Sitemaps** and submit `/sitemap.xml`.
7. Use **URL Inspection ➜ Request Indexing** for the home page and any critical URLs.

---

## 7. Performance & Core Web Vitals

Google uses performance signals in ranking:

| Metric    | Target  | Tool                   |
| --------- | ------- | ---------------------- |
| LCP       | <2.5 s  | Lighthouse / PageSpeed |
| FID / INP | <200 ms | Web-Vitals lib         |
| CLS       | <0.1    | Lighthouse             |

Optimise images (next-gen formats, lazy-load), bundle size (code-splitting), and caching headers. Vercel's edge network already gives fast TTFB.

---

## 8. Content & Authority

1. Publish high-quality, unique articles or blog posts around relationship health.
2. Earn backlinks through guest posts, communities, and social sharing.
3. Add internal links between tests, results pages, and articles.

---

## 9. Ongoing Monitoring

| Tool                     | What to check                           | Frequency  |
| ------------------------ | --------------------------------------- | ---------- |
| Google Search Console    | Coverage, Core Web Vitals, Enhancements | Weekly     |
| Vercel Analytics         | Real-world performance                  | Continuous |
| Google Analytics 4       | Behaviour & conversions                 | Continuous |
| Lighthouse CI (optional) | Performance budgets                     | On PR      |

---

## Appendix A – Useful Configuration Snippets

### `vercel.json` canonical redirect

```json
{
  "redirects": [
    { "source": "/(.*)", "destination": "https://relationships.app/$1", "permanent": true }
  ]
}
```

### Inject `X-Robots-Tag: noindex` only on preview

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "has": [{ "type": "header", "key": "x-vercel-deployment-context", "value": "preview" }],
      "headers": [{ "key": "X-Robots-Tag", "value": "noindex" }]
    }
  ]
}
```

---

## Checklist Before Launch

- [X] Custom domain live and HTTPS-only
- [X] No `noindex` in headers or meta tags on production
- [X] `robots.txt` & `sitemap.xml` accessible
- [X] Canonical tag set site-wide
- [X] Meta titles & descriptions unique per route
- [X] Structured data validated ([https://search.google.com/test/rich-results](https://search.google.com/test/rich-results))
- [X] Domain verified in Search Console & sitemap submitted
- [X] Core Web Vitals within target thresholds

## Work In Progress

- **Canonical Tag:** Implemented via `react-helmet-async` in the `SEO` component and added to all page routes. _(Step 1 ✅)_
- **Robots.txt:** Created in `/public`. Points to `/sitemap.xml`. _(Step 3 ✅)_
- **Sitemap Generation:** Implemented using `vite-plugin-sitemap`. Generates `sitemap.xml` in `dist` folder during `npm run build`. Includes dynamic routes based on `src/data/sections.ts`, excluding `comingSoon` items. _(Step 3 ✅)_
- **Basic Meta Tags:** Implemented across all routes using the `SEO` component powered by `react-helmet-async`. _(Step 4 ✅)_
- **Dynamic Meta Tags:** Route-specific meta tags implemented in each wrapper component using the `SEO` component, with appropriate titles and descriptions based on content. _(Step 4 ✅)_
- **Structured Data:** Implemented using `StructuredData` component with JSON-LD schema for different page types:
  - Home page: WebSite schema
  - Section page: ItemList schema
  - Lesson page: Article schema
  - Quiz page: Quiz schema (Educational content)
  - Glossary page: FAQPage schema
    _(Step 5 ✅)_
- **HTTPS Enforcement:** Added redirects and security headers to `vercel.json`. _(Step 1 ✅)_

Remaining Tasks:

1. ~~Configure custom domain in Vercel (if desired)~~ (Covered by custom domain live)
2. ~~Verify site in Google Search Console and submit sitemap~~ (Done)
3. ~~Run Lighthouse to check Core Web Vitals (Periodically)~~

**Once all checkmarks are green, Google can crawl, index, and rank your site. 🚀**
