import type { MetadataRoute } from 'next'
import { rooms } from '@/lib/content/rooms'
import { SITE_URL } from '@/lib/site'
import { locales, roomPath, routes, type Locale, type RouteKey } from '@/i18n/config'

type Entry = MetadataRoute.Sitemap[number]

const pages: { key: RouteKey; priority: number; changeFrequency: Entry['changeFrequency'] }[] = [
  { key: 'home', priority: 1, changeFrequency: 'weekly' },
  { key: 'rooms', priority: 0.9, changeFrequency: 'monthly' },
  { key: 'glamping', priority: 0.9, changeFrequency: 'monthly' },
  { key: 'experiences', priority: 0.7, changeFrequency: 'monthly' },
  { key: 'about', priority: 0.6, changeFrequency: 'monthly' },
  { key: 'contact', priority: 0.8, changeFrequency: 'monthly' },
]

function url(path: string) {
  return `${SITE_URL}${path === '/' ? '' : path}`
}

function entries(paths: Record<Locale, string>, priority: number, changeFrequency: Entry['changeFrequency']): Entry[] {
  const languages = Object.fromEntries(locales.map((l) => [l, url(paths[l])]))
  const lastModified = new Date()
  return locales.map((locale) => ({
    url: url(paths[locale]),
    lastModified,
    changeFrequency,
    // Le versioni EN/DE hanno priorità leggermente più bassa dell'italiano
    priority: locale === 'it' ? priority : Math.round(priority * 0.9 * 10) / 10,
    alternates: { languages },
  }))
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.flatMap(({ key, priority, changeFrequency }) => entries({ ...routes[key] }, priority, changeFrequency)),
    ...rooms.flatMap((room) =>
      entries(
        Object.fromEntries(locales.map((l) => [l, roomPath(room.slug, l)])) as Record<Locale, string>,
        0.8,
        'monthly',
      ),
    ),
  ]
}
