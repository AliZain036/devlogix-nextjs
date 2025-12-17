import { MetadataRoute } from 'next'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devlogix.co'

  // Static routes
  const routes = [
    '',
    '/service/web-development',
    '/service/mobile-development',
    '/service/ui-ux-design',
    '/service/backend-development',
    '/service/cloud-solutions',
    '/service/cybersecurity',
  ]

  // Project routes (if you have dynamic projects)
  const projectRoutes = Array.from({ length: 6 }, (_, i) => `/project/${i + 1}`)

  return [
    ...routes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: route === '' ? 1 : 0.8,
    })),
    ...projectRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}

