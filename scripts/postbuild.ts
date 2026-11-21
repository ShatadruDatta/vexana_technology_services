/**
 * Post-build step for static hosting (run automatically by `npm run build`).
 * - Writes a real index.html per route with unique title, description, canonical,
 *   Open Graph, Twitter and JSON-LD, so crawlers that do not run JavaScript see them.
 * - Writes 404.html (noindex), sitemap.xml and robots.txt from siteConfig.
 * All values come from src/config/siteConfig.ts and src/data/seo.ts.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { siteConfig } from '../src/config/siteConfig.ts'
import { absoluteUrl, notFoundMeta, pageMeta, socialImageAlt, socialImagePath } from '../src/data/seo.ts'
import { services } from '../src/data/services.ts'

const dist = join(dirname(fileURLToPath(import.meta.url)), '..', 'dist')
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const isPlaceholderEmail = /@example\.com$/i.test(siteConfig.contact.email)
const sameAs = Object.values(siteConfig.social).filter(Boolean)

/** Only real, configured facts go into structured data. */
const organization = {
  '@type': 'Organization',
  '@id': `${absoluteUrl('/')}#organization`,
  name: siteConfig.legalName,
  alternateName: siteConfig.name,
  url: absoluteUrl('/'),
  slogan: siteConfig.tagline,
  description: siteConfig.defaultDescription,
  logo: absoluteUrl('/favicon.svg'),
  ...(isPlaceholderEmail ? {} : { email: siteConfig.contact.email }),
  ...(siteConfig.contact.phone ? { telephone: siteConfig.contact.phone } : {}),
  ...(sameAs.length ? { sameAs } : {}),
}

function jsonLd(path: string) {
  const graph: object[] = [organization]
  if (path === '/') graph.push({ '@type': 'WebSite', '@id': `${absoluteUrl('/')}#website`, url: absoluteUrl('/'), name: siteConfig.legalName, publisher: { '@id': organization['@id'] } })
  if (path === '/services') {
    services.forEach((s) => graph.push({
      '@type': 'Service', name: s.title, description: s.description, url: absoluteUrl(`/services#${s.id}`),
      provider: { '@id': organization['@id'] }, serviceType: s.shortName,
    }))
  }
  return `<script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@graph': graph }).replace(/</g, '\\u003c')}</script>`
}

function head(path: string, title: string, description: string, indexable: boolean) {
  const url = absoluteUrl(path)
  const image = absoluteUrl(socialImagePath)
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta name="robots" content="${indexable ? 'index, follow' : 'noindex, follow'}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${esc(siteConfig.legalName)}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:image" content="${image}" />`,
    `<meta property="og:image:alt" content="${esc(socialImageAlt)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${image}" />`,
    `<meta name="twitter:image:alt" content="${esc(socialImageAlt)}" />`,
    indexable ? jsonLd(path) : '',
  ].filter(Boolean).join('\n    ')
}

function render(path: string, title: string, description: string, indexable: boolean) {
  return template
    .replace(/<title>[\s\S]*?<\/title>\s*/, '')
    .replace(/<meta name="description"[^>]*>\s*/, '')
    .replace('<!--seo-head-->', head(path, title, description, indexable))
}

for (const [path, m] of Object.entries(pageMeta)) {
  const file = path === '/' ? join(dist, 'index.html') : join(dist, path, 'index.html')
  mkdirSync(dirname(file), { recursive: true })
  writeFileSync(file, render(path, m.title, m.description, true))
}
writeFileSync(join(dist, '404.html'), render('/404', notFoundMeta.title, notFoundMeta.description, false))

const urls = Object.keys(pageMeta).map((p) => `  <url><loc>${absoluteUrl(p)}</loc></url>`).join('\n')
writeFileSync(join(dist, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`)
writeFileSync(join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl('/sitemap.xml')}\n`)

console.log(`postbuild: ${Object.keys(pageMeta).length} pages, 404.html, sitemap.xml, robots.txt (site: ${siteConfig.siteUrl})`)
