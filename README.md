# VEXANA Technologies and Consulting Services: Website

Static corporate website. React 19, Vite, TypeScript, Tailwind CSS 4, Framer Motion, Lucide React.
No backend, database or authentication.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173
```

## Production build

```bash
npm run build      # type-check, bundle, then generate per-page HTML, sitemap.xml, robots.txt
npm run preview    # serve the build locally (note: preview uses SPA fallback; see below)
npm run typecheck  # TypeScript only
```

Output is in `dist/`. The post-build step (`scripts/postbuild.ts`) writes a real `index.html` for every route
(`dist/about/index.html`, etc.) with its own title, description, canonical URL, Open Graph / Twitter tags and
JSON-LD, plus `404.html`, `sitemap.xml` and `robots.txt`, all derived from `src/config/siteConfig.ts` and `src/data/seo.ts`.

## Deploy

Upload `dist/` to any static host (Netlify, Vercel, Cloudflare Pages, GitHub Pages, S3 + CDN).
- Serve `404.html` as the not-found page.
- Enable gzip/brotli compression (most hosts do by default; it matters a lot for performance).
- Deep links like `/about` resolve to `dist/about/index.html`. No rewrite rules are required.

## Configure business details (one place)

Edit **`src/config/siteConfig.ts`**:

| Field | Status |
| --- | --- |
| `siteUrl` | Placeholder `https://www.example.com`. Set the official domain (used for canonicals, sitemap, robots, social tags) |
| `contact.email` | Placeholder `hello@example.com`. Contact form (mailto) and footer use it |
| `contact.phone`, `contact.address` | Empty (hidden until set) |
| `contact.formEndpoint` | Optional. Set a Formspree-style URL to send form submissions instead of opening the visitor's email app |
| `social.*` | Empty (links appear only when set) |

Other editable content: `src/data/` (services, home sections, navigation, company text, SEO metadata, legal text).

## Before launch checklist

- Replace the placeholders above.
- Review and complete `src/data/legal.ts` (Privacy Policy and Terms are **drafts** with highlighted `[PLACEHOLDERS]`; have them professionally reviewed).
- Decide whether to self-host fonts (currently loaded from Google Fonts; disclose in the Privacy Policy if kept).
- Replace `public/favicon.svg` / the text logo (`src/components/Logo.tsx`) and `public/og-image.png` if an official brand asset exists.
- Re-run `npm run build` after changing `siteUrl`.

## Structure

```
public/            favicon, og-image, robots/sitemap (overwritten at build)
scripts/           postbuild.ts (SEO pages, sitemap, robots)
src/
  components/      Navbar, Footer, Logo, Button, ContactForm, Seo, ...
  sections/        Homepage sections
  pages/           Home, About, Services, PrivacyPolicy, TermsConditions, NotFound
  data/            Static content (services, home, legal, seo, navigation, company)
  config/          siteConfig.ts
  lib/ hooks/      helpers
  styles/          globals.css (design tokens)
```
