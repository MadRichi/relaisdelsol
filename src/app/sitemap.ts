import type { MetadataRoute } from 'next'
import { rooms } from '@/lib/content/rooms'
import { SITE_URL } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const pages: { path: string; priority: number; changeFrequency: 'weekly' | 'monthly' }[] = [
    { path: '', priority: 1, changeFrequency: 'weekly' },
    { path: '/camere', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/agricamping', priority: 0.9, changeFrequency: 'monthly' },
    { path: '/esperienze', priority: 0.7, changeFrequency: 'monthly' },
    { path: '/chi-siamo', priority: 0.6, changeFrequency: 'monthly' },
    { path: '/contatti', priority: 0.8, changeFrequency: 'monthly' },
  ]

  return [
    ...pages.map(({ path, priority, changeFrequency }) => ({
      url: `${SITE_URL}${path}`,
      lastModified,
      changeFrequency,
      priority,
    })),
    ...rooms.map((room) => ({
      url: `${SITE_URL}/camere/${room.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
