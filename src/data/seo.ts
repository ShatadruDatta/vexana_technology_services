// Relative imports with explicit extensions so the Node post-build script can load this file too.
import { siteConfig } from '../config/siteConfig.ts'

export interface PageMeta { title: string; description: string }

const brand = 'VEXANA'

/** Per-route SEO metadata. Keys are URL paths and double as the sitemap route list. */
export const pageMeta: Record<string, PageMeta> = {
  '/': {
    title: `${brand} | IT Consulting, AI Solutions & Digital Transformation`,
    description: siteConfig.defaultDescription,
  },
  '/about': {
    title: `About Us | ${brand} Technologies and Consulting Services`,
    description: 'Learn about VEXANA: our mission, vision, core values and business philosophy of combining strategy and technology for meaningful business impact.',
  },
  '/services': {
    title: `Services | PMO, AI, Web, Mobile, Marketing & SEO | ${brand}`,
    description: 'Explore VEXANA services: project management and PMO, learning and development, AI and generative AI, web and mobile development, digital marketing and SEO.',
  },
  '/privacy-policy': {
    title: `Privacy Policy | ${brand}`,
    description: 'Privacy Policy for the VEXANA Technologies and Consulting Services website.',
  },
  '/terms-and-conditions': {
    title: `Terms & Conditions | ${brand}`,
    description: 'Terms and Conditions for using the VEXANA Technologies and Consulting Services website.',
  },
}

export const notFoundMeta: PageMeta = {
  title: `Page not found | ${brand}`,
  description: 'The page you are looking for does not exist.',
}

export const socialImagePath = '/og-image.png'
export const socialImageAlt = 'VEXANA. Innovating Today. Empowering Tomorrow.'

export const absoluteUrl = (path: string) => `${siteConfig.siteUrl.replace(/\/$/, '')}${path === '/' ? '/' : path}`
