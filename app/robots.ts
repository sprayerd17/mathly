import type { MetadataRoute } from 'next'

const SITE_URL = 'https://mathly.co.za'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      // Auth-gated (no content to index) or transactional pages, plus
      // every server route — none of these belong in a search index.
      disallow: ['/api/', '/dashboard', '/profile', '/pricing/success', '/pricing/cancelled'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
