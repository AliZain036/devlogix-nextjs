# DevLogix Next.js Setup Guide

## Project Structure

```
DevLogix_Nextjs/
├── app/
│   ├── components/          # All React components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   ├── About.tsx
│   │   ├── Portfolio.tsx
│   │   ├── Reviews.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── ProjectDetails.tsx
│   │   └── ServicesDetails.tsx
│   ├── project/
│   │   └── [id]/
│   │       └── page.tsx     # Dynamic project details page
│   ├── service/
│   │   └── [service]/
│   │       └── page.tsx     # Dynamic service details page
│   ├── layout.tsx           # Root layout with metadata
│   ├── page.tsx             # Home page
│   └── globals.css          # Global styles
├── public/                   # Static assets
│   └── assets/              # Images and other assets
├── package.json
├── tsconfig.json
├── next.config.ts
├── tailwind.config.ts
└── README.md
```

## Key Changes from React to Next.js

### 1. Routing
- **React Router**: `useNavigate()`, `useParams()`, `<Link>`
- **Next.js**: `useRouter()` from `next/navigation`, `useParams()` from `next/navigation`, `<Link>` from `next/link`

### 2. Client Components
- All interactive components need `'use client'` directive at the top
- Components using hooks, event handlers, or browser APIs must be client components

### 3. Dynamic Routes
- **React Router**: `/project/:id` → `useParams()`
- **Next.js**: `app/project/[id]/page.tsx` → `useParams()` in page component, pass as props to component

### 4. Images
- **React**: `<img src={logo} />`
- **Next.js**: `<Image src="/assets/logo.png" width={40} height={40} />` from `next/image`

### 5. Metadata & SEO
- Handled in `app/layout.tsx` using Next.js `Metadata` API
- Structured data (JSON-LD) included in layout

## Installation & Setup

1. **Install Dependencies**
   ```bash
   cd DevLogix_Nextjs
   npm install
   ```

2. **Add Logo Asset**
   - Copy `src/assets/Devlogix-1.png` to `public/assets/Devlogix-1.png`
   - Or update the path in `Navbar.tsx` if using a different location

3. **Run Development Server**
   ```bash
   npm run dev
   ```

4. **Build for Production**
   ```bash
   npm run build
   npm start
   ```

## Features

✅ Next.js 15 with App Router
✅ TypeScript support
✅ Tailwind CSS styling
✅ Framer Motion animations
✅ SEO optimized with metadata
✅ Image optimization ready
✅ Dynamic routing for projects and services
✅ All components ported from React version

## Notes

- All components are client components (`'use client'`)
- Dynamic routes use Next.js App Router pattern
- Navigation uses `useRouter().push()` instead of `navigate()`
- Images should use Next.js `Image` component for optimization
- Metadata is configured in `app/layout.tsx`

## Next Steps

1. Copy logo asset to `public/assets/Devlogix-1.png`
2. Test all routes and navigation
3. Optimize images using Next.js Image component
4. Add any additional assets to `public/` directory
5. Configure environment variables if needed

