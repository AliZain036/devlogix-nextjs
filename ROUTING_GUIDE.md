# Next.js Routing Guide

## ✅ Current Implementation: App Router (Next.js 15)

Your project uses the **App Router**, which is the **modern, recommended approach** for Next.js 13+.

## 📁 Current Routing Structure

```
app/
├── page.tsx                    → / (Home page)
├── layout.tsx                  → Root layout (wraps all pages)
├── project/
│   └── [id]/
│       └── page.tsx            → /project/1, /project/2, etc.
├── service/
│   └── [service]/
│       └── page.tsx            → /service/web-development, etc.
├── robots.ts                   → /robots.txt (automatic)
└── sitemap.ts                  → /sitemap.xml (automatic)
```

## 🎯 App Router vs Pages Router

### App Router (What You're Using) ✅
- **Location**: `app/` directory
- **Status**: Modern, recommended (Next.js 13+)
- **Features**:
  - React Server Components by default
  - Better SEO (server rendering)
  - Built-in layouts
  - Streaming and Suspense
  - Better performance
  - Automatic route generation
  - Special files (metadata, sitemap, robots)

### Pages Router (Old Way)
- **Location**: `pages/` directory
- **Status**: Still supported but legacy
- **Features**:
  - Client-side routing
  - `getServerSideProps`, `getStaticProps`
  - Less modern features

## 🚀 How Your Routes Work

### 1. **Home Route** (`/`)
```tsx
// app/page.tsx
export default function Home() {
  return <Navbar />, <Hero />, etc.
}
```
- URL: `http://localhost:3000/`
- File: `app/page.tsx`

### 2. **Dynamic Project Route** (`/project/[id]`)
```tsx
// app/project/[id]/page.tsx
export default function ProjectPage() {
  const params = useParams()
  const id = params?.id // "1", "2", etc.
  return <ProjectDetails id={id} />
}
```
- URLs:
  - `/project/1`
  - `/project/2`
  - `/project/3`
- File: `app/project/[id]/page.tsx`
- `[id]` = dynamic segment

### 3. **Dynamic Service Route** (`/service/[service]`)
```tsx
// app/service/[service]/page.tsx
export default function ServicePage() {
  const params = useParams()
  const service = params?.service // "web-development", etc.
  return <ServicesDetails service={service} />
}
```
- URLs:
  - `/service/web-development`
  - `/service/mobile-development`
  - `/service/ui-ux-design`
- File: `app/service/[service]/page.tsx`

## 📝 Routing Best Practices (App Router)

### ✅ DO:
1. **Use `app/` directory** - You're doing this ✅
2. **Use `page.tsx` for routes** - You're doing this ✅
3. **Use `layout.tsx` for shared layouts** - You're doing this ✅
4. **Use `[param]` for dynamic routes** - You're doing this ✅
5. **Use `Link` from `next/link`** - You're doing this ✅
6. **Use `useRouter()` from `next/navigation`** - You're doing this ✅

### ❌ DON'T:
1. Don't use `pages/` directory (conflicts with App Router)
2. Don't use `getServerSideProps` (use Server Components instead)
3. Don't use `useRouter` from `next/router` (old Pages Router API)

## 🔗 Navigation in Your App

### Current Navigation Methods:

1. **Link Component** (for client-side navigation):
```tsx
import Link from 'next/link'

<Link href="/project/1">View Project</Link>
<Link href="/service/web-development">Web Development</Link>
```

2. **useRouter Hook** (for programmatic navigation):
```tsx
'use client'
import { useRouter } from 'next/navigation'

const router = useRouter()
router.push('/project/1')
router.push('/service/web-development')
```

3. **Anchor Links** (for same-page sections):
```tsx
// In Navbar.tsx - scrolls to sections
const scrollToSection = (href: string) => {
  const element = document.querySelector(href)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
```

## 🎨 Special Files in App Router

### Automatic Routes:
- `app/robots.ts` → `/robots.txt` ✅
- `app/sitemap.ts` → `/sitemap.xml` ✅
- `app/layout.tsx` → Root layout (wraps all pages) ✅
- `app/page.tsx` → Home page (`/`) ✅

### Optional Special Files:
- `app/loading.tsx` → Loading UI
- `app/error.tsx` → Error UI
- `app/not-found.tsx` → 404 page
- `app/global-error.tsx` → Global error boundary

## 🚀 Adding New Routes

### Example: Add a Blog Route

1. Create the route:
```bash
mkdir -p app/blog
touch app/blog/page.tsx
```

2. Create the page:
```tsx
// app/blog/page.tsx
export default function BlogPage() {
  return <div>Blog Page</div>
}
```

3. Access it:
- URL: `http://localhost:3000/blog`

### Example: Add Dynamic Blog Post

1. Create dynamic route:
```bash
mkdir -p app/blog/[slug]
touch app/blog/[slug]/page.tsx
```

2. Create the page:
```tsx
// app/blog/[slug]/page.tsx
export default function BlogPost({ params }: { params: { slug: string } }) {
  return <div>Blog Post: {params.slug}</div>
}
```

3. Access it:
- URL: `http://localhost:3000/blog/my-post`

## 📊 Your Current Route Map

| URL | File | Type |
|-----|------|------|
| `/` | `app/page.tsx` | Static |
| `/project/1` | `app/project/[id]/page.tsx` | Dynamic |
| `/project/2` | `app/project/[id]/page.tsx` | Dynamic |
| `/service/web-development` | `app/service/[service]/page.tsx` | Dynamic |
| `/service/mobile-development` | `app/service/[service]/page.tsx` | Dynamic |
| `/robots.txt` | `app/robots.ts` | Special |
| `/sitemap.xml` | `app/sitemap.ts` | Special |

## ✅ Summary

**You're using the BEST routing approach for Next.js 15:**
- ✅ App Router (modern, recommended)
- ✅ Server Components by default
- ✅ Automatic route generation
- ✅ Built-in SEO features
- ✅ Optimal performance
- ✅ Type-safe routing

**No changes needed** - your routing setup is perfect! 🎉

