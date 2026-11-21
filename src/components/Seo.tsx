import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { absoluteUrl, notFoundMeta, pageMeta, socialImageAlt, socialImagePath } from '@/data/seo'
import { siteConfig } from '@/config/siteConfig'

function upsert(selector: string, create: () => HTMLElement, set: (el: HTMLElement) => void) {
  let el = document.head.querySelector<HTMLElement>(selector)
  if (!el) { el = create(); document.head.appendChild(el) }
  set(el)
}
const meta = (attr: 'name' | 'property', key: string, content: string) =>
  upsert(`meta[${attr}="${key}"]`, () => { const m = document.createElement('meta'); m.setAttribute(attr, key); return m }, (el) => el.setAttribute('content', content))

/**
 * Keeps <head> metadata in sync with the current route during client-side navigation.
 * The post-build script writes the same values into each page's static HTML for crawlers.
 */
export default function Seo() {
  const { pathname } = useLocation()
  useEffect(() => {
    const normalized = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
    const known = pageMeta[normalized]
    const { title, description } = known ?? notFoundMeta
    const url = absoluteUrl(known ? normalized : '/')
    const image = absoluteUrl(socialImagePath)

    document.title = title
    meta('name', 'description', description)
    upsert('link[rel="canonical"]', () => { const l = document.createElement('link'); l.rel = 'canonical'; return l }, (el) => el.setAttribute('href', url))
    meta('name', 'robots', known ? 'index, follow' : 'noindex, follow')
    meta('property', 'og:type', 'website')
    meta('property', 'og:site_name', siteConfig.legalName)
    meta('property', 'og:title', title)
    meta('property', 'og:description', description)
    meta('property', 'og:url', url)
    meta('property', 'og:image', image)
    meta('property', 'og:image:alt', socialImageAlt)
    meta('name', 'twitter:card', 'summary_large_image')
    meta('name', 'twitter:title', title)
    meta('name', 'twitter:description', description)
    meta('name', 'twitter:image', image)
    meta('name', 'twitter:image:alt', socialImageAlt)
  }, [pathname])
  return null
}
