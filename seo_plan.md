# SEO & Indexing Plan  
_Target site: https://relationships-tests.vercel.app/_  

> Goal: Make the site crawlable, indexable, and ultimately rank for relevant queries in Google Search.

---

## 1. Choose & Configure a Canonical Production Domain (Highly recommended)

| Task | Who | How |
| --- | --- | --- |
| Buy/choose a custom domain (e.g. **relationships.app**) | Owner | Registrar of choice |
| Add the domain in **Vercel → Settings → Domains** | Owner | Automatic DNS records if using Vercel nameservers; otherwise add the provided `CNAME`/`A` records manually |
| Enforce HTTPS and redirect all `www.`/`http` traffic to the canonical URL | Dev | Add redirects in `vercel.json` (see Appendix A) |
| Insert a **`<link rel="canonical">`** tag in every page's `<head>` pointing to the preferred URL | Dev | For a single-page app, add once in `index.html`; for multiple routes add programmatically |

*Why?* A single canonical URL avoids duplicate-content penalties and ensures Google references the right version.

---

## 2. Remove All "noindex" Signals

Vercel automatically sets `x-robots-tag: noindex` **for preview deployments**.  
Production deployments _on the main branch_ are not affected, but double-check:

```bash
curl -I https://relationships-tests.vercel.app/
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

1. Go to <https://search.google.com/search-console>.  
2. Click **Add Property ➜ Domain** and enter the canonical domain.  
3. Copy the TXT verification record Google gives you.  
4. In **Vercel → Domains → DNS Records** add a **TXT** record (leave **Name** blank).  
5. Back in Search Console, click **Verify**.  
6. After verification, open **Sitemaps** and submit `/sitemap.xml`.  
7. Use **URL Inspection ➜ Request Indexing** for the home page and any critical URLs.

---

## 7. Performance & Core Web Vitals

Google uses performance signals in ranking:

| Metric | Target | Tool |
| --- | --- | --- |
| LCP | <2.5 s | Lighthouse / PageSpeed |
| FID / INP | <200 ms | Web-Vitals lib |
| CLS | <0.1 | Lighthouse |

Optimise images (next-gen formats, lazy-load), bundle size (code-splitting), and caching headers. Vercel's edge network already gives fast TTFB.

---

## 8. Content & Authority

1. Publish high-quality, unique articles or blog posts around relationship health.  
2. Earn backlinks through guest posts, communities, and social sharing.  
3. Add internal links between tests, results pages, and articles.

---

## 9. Ongoing Monitoring

| Tool | What to check | Frequency |
| --- | --- | --- |
| Google Search Console | Coverage, Core Web Vitals, Enhancements | Weekly |
| Vercel Analytics | Real-world performance | Continuous |
| Google Analytics 4 | Behaviour & conversions | Continuous |
| Lighthouse CI (optional) | Performance budgets | On PR |

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

- [ ] Custom domain live and HTTPS-only  
- [ ] No `noindex` in headers or meta tags on production  
- [ ] `robots.txt` & `sitemap.xml` accessible  
- [ ] Canonical tag set site-wide  
- [ ] Meta titles & descriptions unique per route  
- [ ] Structured data validated (<https://search.google.com/test/rich-results>)  
- [ ] Domain verified in Search Console & sitemap submitted  
- [ ] Core Web Vitals within target thresholds  

## Work In Progress

- **Canonical Tag:** Added to `index.html` using the current Vercel URL. _(Step 1)_ 
- **Robots.txt:** Created in `/public` with placeholder sitemap URL. _(Step 3)_
- **Basic Meta Tags:** Added default title, description, and OG tags to `index.html` using current Vercel URL. _(Step 4)_
- **Sitemap Generation:** Still pending implementation. _(Step 3)_
- **Dynamic Meta Tags:** Need to implement logic to update title/description per route. _(Step 4)_
- **Structured Data:** Needs implementation. _(Step 5)_

**Once all checkmarks are green, Google can crawl, index, and rank your site. 🚀**
