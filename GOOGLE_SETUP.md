# Google Analytics & Search Console Setup

## 🔧 Quick Setup Instructions

### 1. Google Search Console Verification

**Option A: HTML Tag (Recommended for Next.js)**

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://devlogix.co`
3. Choose **HTML tag** verification method
4. Copy the verification code (looks like: `<meta name="google-site-verification" content="..."/>`)
5. Add it to `app/layout.tsx` in the `<head>` section:

```tsx
// In app/layout.tsx, inside the <head> tag:
<meta name="google-site-verification" content="YOUR_VERIFICATION_CODE" />
```

**Option B: HTML File Upload**

1. Download the HTML verification file from Search Console
2. Place it in `/public/` directory
3. Deploy your site
4. Google will automatically verify

**After Verification:**
- Submit your sitemap: `https://devlogix.co/sitemap.xml`
- Go to Sitemaps → Add new sitemap → Enter: `sitemap.xml`

### 2. Google Analytics 4 (GA4) Setup

**Step 1: Create GA4 Property**
1. Go to [Google Analytics](https://analytics.google.com)
2. Create account (if needed)
3. Create property: "DevLogix Website"
4. Get your **Measurement ID** (format: `G-XXXXXXXXXX`)

**Step 2: Add to Your Site**

Create a new component: `app/components/GoogleAnalytics.tsx`

```tsx
'use client'

import Script from 'next/script'

export default function GoogleAnalytics({ gaId }: { gaId: string }) {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
    </>
  )
}
```

**Step 3: Add to Layout**

In `app/layout.tsx`, add:

```tsx
import GoogleAnalytics from './components/GoogleAnalytics'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* ... existing head content ... */}
      </head>
      <body>
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
        {children}
      </body>
    </html>
  )
}
```

**Step 4: Connect to Search Console**
1. In Google Analytics → Admin → Property Settings
2. Scroll to "Search Console"
3. Click "Adjust Search Console"
4. Link your Search Console property

### 3. Environment Variables (Recommended)

For better security, use environment variables:

**Create `.env.local`:**
```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION=your_verification_code
```

**Update `app/layout.tsx`:**
```tsx
<meta
  name="google-site-verification"
  content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}
/>
```

**Update GoogleAnalytics component:**
```tsx
<GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
```

## ✅ Verification Checklist

After setup, verify:

- [ ] Google Search Console verified
- [ ] Sitemap submitted: `sitemap.xml`
- [ ] Google Analytics tracking code added
- [ ] Analytics connected to Search Console
- [ ] Test page views in Analytics (Real-time reports)
- [ ] Check Search Console for initial data (may take 1-3 days)

## 📊 What to Expect

**Google Search Console:**
- First data: 1-3 days after verification
- Full data: 1-2 weeks
- Regular updates: Daily

**Google Analytics:**
- Real-time data: Immediate
- Historical reports: Available immediately
- Search Console data: 1-2 days after linking

## 🎯 First Week Actions

1. **Day 1**: Set up both tools
2. **Day 2**: Submit sitemap in Search Console
3. **Day 3**: Check for any errors in Search Console
4. **Day 4-7**: Monitor initial impressions and clicks
5. **Week 2**: Review first performance report

