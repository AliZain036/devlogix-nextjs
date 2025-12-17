# Firebase Hosting Deployment Guide

This guide will help you deploy your Next.js application to Firebase Hosting, replacing your previous React app.

## Prerequisites

1. **Firebase CLI** installed globally:
   ```bash
   npm install -g firebase-tools
   ```

2. **Firebase account** with your project already set up (the same project you used for your React app)

3. **Node.js** and npm installed

## Step 1: Configure Firebase Project

1. **Update `.firebaserc`** with your Firebase project ID:
   ```json
   {
     "projects": {
       "default": "your-actual-firebase-project-id"
   }
   }
   ```

   To find your project ID:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Select your project
   - Project ID is shown in the project settings

2. **Login to Firebase** (if not already logged in):
   ```bash
   firebase login
   ```

## Step 2: Install Dependencies

```bash
npm install
```

## Step 3: Build and Deploy

### Option A: Build and Deploy in One Command
```bash
npm run deploy
```

This will:
1. Build your Next.js app as static files (`next build`)
2. Deploy to Firebase Hosting (`firebase deploy --only hosting`)

### Option B: Build and Deploy Separately
```bash
# Build the static export
npm run build:firebase

# Deploy to Firebase Hosting
npm run deploy:hosting
```

## Step 4: Verify Deployment

1. After deployment, Firebase will provide you with a hosting URL
2. Your custom domain should automatically work if it was already linked to your Firebase project
3. Visit your domain to verify the Next.js app is live

## Configuration Files

### `firebase.json`
- **Public directory**: `out` (where Next.js static export is generated)
- **Rewrites**: All routes redirect to `index.html` for client-side routing
- **Headers**: Optimized caching and security headers

### `next.config.ts`
- **Output mode**: `export` (static export for Firebase Hosting)
- **Images**: Unoptimized (required for static export)

## Domain Configuration

If your domain was already linked to Firebase Hosting:
- ✅ **No changes needed** - Your domain will automatically point to the new Next.js deployment
- The domain configuration is managed in Firebase Console, not in your code

To verify or update domain settings:
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Select your project
3. Navigate to **Hosting** → **Add custom domain** (or view existing domains)

## Troubleshooting

### Issue: Build fails
- Make sure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run lint`

### Issue: Dynamic routes not working
- Static export pre-generates routes defined in `generateStaticParams()`
- Firebase Hosting rewrites handle client-side routing for any other routes
- Check `firebase.json` rewrites configuration

### Issue: Images not loading
- Static export uses unoptimized images (configured in `next.config.ts`)
- Make sure image paths are correct and images exist in `public/` directory

### Issue: Domain not updating
- Wait a few minutes for DNS propagation
- Clear browser cache
- Check Firebase Console for domain status

## What Changed from React App?

1. **Build output**: React app → `build/`, Next.js → `out/`
2. **Routing**: Firebase Hosting rewrites handle client-side routing
3. **Static generation**: Next.js pre-generates pages at build time
4. **Configuration**: `firebase.json` updated for Next.js structure

## Continuous Deployment (Optional)

To set up automatic deployments:

1. **Using GitHub Actions**:
   - Create `.github/workflows/firebase-deploy.yml`
   - Add Firebase token as GitHub secret
   - Deploy on push to main branch

2. **Using Firebase CLI**:
   - Run `npm run deploy` manually when ready

## Next Steps

- ✅ Your Next.js app is now deployed to Firebase Hosting
- ✅ Your custom domain should be working
- ✅ All routes are configured for client-side routing
- ✅ Static pages are pre-generated for better performance

## Support

For issues:
- Check Firebase Hosting [documentation](https://firebase.google.com/docs/hosting)
- Check Next.js static export [documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)

