import type { MetadataRoute } from 'next'
import { getTopics } from '@/src/data/topic-registry'

const SITE_URL = 'https://mathly.co.za'
const GRADES = ['4', '5', '6', '7', '8', '9', '10', '11', '12']

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/pricing`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${SITE_URL}/live-classes`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${SITE_URL}/refer`, changeFrequency: 'monthly', priority: 0.5 },
    { url: `${SITE_URL}/contact`, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE_URL}/privacy`, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${SITE_URL}/terms`, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const gradePages: MetadataRoute.Sitemap = GRADES.map(grade => ({
    url: `${SITE_URL}/grade/${grade}`,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  // Only the free topic per grade has full public content — paid topics
  // render a locked upsell preview for anonymous visitors, so they're not
  // worth indexing as distinct pages.
  const freeTopicPages: MetadataRoute.Sitemap = GRADES.flatMap(grade =>
    getTopics(grade)
      .filter(topic => topic.free)
      .map(topic => ({
        url: `${SITE_URL}/grade/${grade}/${topic.slug}`,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
      }))
  )

  return [...staticPages, ...gradePages, ...freeTopicPages]
}
