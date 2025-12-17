import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://devlogix.co'),
  title: 'DevLogix - Professional Software Development Company | Web & Mobile Solutions',
  description: 'DevLogix is a leading software development company specializing in custom web development, mobile apps, digital solutions, and innovative technology services. Transform your ideas into powerful digital experiences.',
  keywords: 'software development, web development, mobile app development, custom software, digital solutions, technology services, programming, coding, IT services, react development, node.js, full-stack development, UI/UX design, cloud solutions, DevLogix',
  authors: [{ name: 'DevLogix' }],
  icons: {
    icon: '/icon.png',
    shortcut: '/icon.png',
    apple: '/icon.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://devlogix.co/',
    title: 'DevLogix - Professional Software Development Company',
    description: 'Transform your ideas into powerful digital experiences with our expert team of developers, designers, and innovators.',
    images: ['/og-image.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DevLogix - Professional Software Development Company',
    description: 'Transform your ideas into powerful digital experiences with our expert team of developers, designers, and innovators.',
    images: ['/og-image.jpg'],
  },
  manifest: '/manifest.json',
}

export const viewport: Viewport = {
  themeColor: '#0ea5e9',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// JSON-LD structured data
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "LocalBusiness", "TechnologyCompany"],
      "@id": "https://devlogix.co/#organization",
      "name": "DevLogix",
      "url": "https://devlogix.co/",
      "logo": {
        "@type": "ImageObject",
        "url": "https://devlogix.co/logo.png",
        "width": 512,
        "height": 512
      },
      "image": "https://devlogix.co/og-image.jpg",
      "description": "Professional software development company specializing in web development, mobile apps, and digital solutions.",
      "founder": {
        "@type": "Person",
        "name": "DevLogix Team"
      },
      "foundingDate": "2020",
      "slogan": "Transform Ideas Into Digital Reality",
      "knowsAbout": [
        "Web Development",
        "Mobile App Development",
        "Custom Software Development",
        "UI/UX Design",
        "Cloud Solutions",
        "API Development",
        "Full-Stack Development"
      ],
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "US",
        "addressRegion": "CA"
      },
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "availableLanguage": "English",
        "areaServed": "Worldwide"
      },
      "sameAs": [
        "https://linkedin.com/company/devlogix",
        "https://twitter.com/devlogix",
        "https://github.com/devlogix"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "127"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://devlogix.co/#website",
      "url": "https://devlogix.co/",
      "name": "DevLogix",
      "description": "Professional Software Development Company",
      "publisher": {
        "@id": "https://devlogix.co/#organization"
      },
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://devlogix.co/?s={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "Service",
      "@id": "https://devlogix.co/#service",
      "serviceType": "Software Development",
      "provider": {
        "@id": "https://devlogix.co/#organization"
      },
      "areaServed": "Worldwide",
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Software Development Services",
        "itemListElement": [
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Web Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "Mobile App Development"
            }
          },
          {
            "@type": "Offer",
            "itemOffered": {
              "@type": "Service",
              "name": "UI/UX Design"
            }
          }
        ]
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  )
}

