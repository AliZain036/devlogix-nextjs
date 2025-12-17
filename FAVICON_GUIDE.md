# Favicon Setup Guide

## 📍 Where to Place Your Favicon

### Option 1: File-Based (Recommended - Automatic)
Place your favicon files directly in the `app/` directory:

```
DevLogix_Nextjs/
└── app/
    ├── icon.png          ← Main favicon (PNG, 32x32 or 16x16)
    ├── icon.ico          ← Alternative: ICO format
    ├── apple-icon.png    ← Apple touch icon (180x180) - Optional
    └── favicon.ico       ← Fallback - Optional
```

**Next.js will automatically:**
- Detect these files
- Generate proper `<link>` tags
- Serve them at `/icon.png`, `/apple-icon.png`, etc.

### Option 2: Metadata API (Manual Control)
If you want more control, you can define icons in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  // ... other metadata
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}
```

Then place files in `public/` directory:
```
public/
├── favicon.ico
├── favicon-16x16.png
└── apple-touch-icon.png
```

## 🎨 Recommended Sizes

- **icon.png/ico**: 32x32 or 16x16 pixels
- **apple-icon.png**: 180x180 pixels (for iOS home screen)
- **favicon.ico**: 16x16, 32x32, or 48x48 pixels

## ✅ Quick Steps

1. **Convert your logo to favicon format** (if needed):
   - Use online tools like: https://favicon.io/ or https://realfavicongenerator.net/
   - Or use ImageMagick: `convert logo.png -resize 32x32 icon.png`

2. **Place the file(s) in `app/` directory**:
   ```bash
   # Copy your favicon file
   cp /path/to/your/logo.png DevLogix_Nextjs/app/icon.png
   ```

3. **Restart dev server** (if running):
   ```bash
   npm run dev
   ```

4. **Verify it works**:
   - Check browser tab for favicon
   - Or visit: http://localhost:3000/icon.png

## 📝 Current Setup

Currently, the project references `/favicon.png` in the manifest, but you should:
1. Place your favicon in `app/icon.png` (or `app/icon.ico`)
2. Update `public/manifest.json` if needed to reference the correct path

## 🔍 Testing

After adding your favicon:
1. Hard refresh browser (Cmd+Shift+R / Ctrl+Shift+R)
2. Check browser tab icon
3. Check DevTools → Network tab for favicon request
4. Verify `/icon.png` is accessible

