# Vercel Deployment Guide - Next.js 15 NOT_FOUND Error Fix

## Common Issue
**Error:** `404: NOT_FOUND` on Vercel deployment despite successful local build

## Root Causes
1. Next.js 15 app router + Vercel compatibility issues
2. Missing custom `not-found.tsx` page
3. Incorrect `next.config.js` configuration
4. Missing Vercel framework configuration

## Quick Fix Checklist

### 1. Create `app/not-found.tsx`
```tsx
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">404</h1>
        <p className="mb-4">Page not found</p>
        <Link href="/" className="text-blue-600 hover:underline">
          Go back home
        </Link>
      </div>
    </div>
  )
}
```

### 2. Fix `next.config.js`
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove: output: 'standalone' - causes routing issues on Vercel
  trailingSlash: false,
  experimental: {
    optimizePackageImports: ['@heroicons/react'],
  },
}

module.exports = nextConfig
```

### 3. Add `vercel.json`
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "devCommand": "npm run dev",
  "installCommand": "npm install",
  "outputDirectory": ".next",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/"
    }
  ]
}
```

### 4. Fix `app/layout.tsx` metadata
```tsx
export const metadata: Metadata = {
  // Remove: metadataBase: new URL('https://domain.com')
  // This causes 404 errors if domain doesn't exist
  title: 'Your App Title',
  description: 'Your app description',
  // ... other metadata without metadataBase
}
```

## Deployment Steps
1. Apply all fixes above
2. Test build locally: `npm run build`
3. Commit and push changes
4. Redeploy on Vercel
5. Verify homepage loads correctly

## Prevention
- Always include custom `not-found.tsx` for Next.js 15 projects
- Avoid `standalone` output mode unless specifically needed
- Use `vercel.json` for explicit framework configuration
- Test builds locally before deployment

## ✅ Boilerplate Status
**The `/newproject` boilerplate is already Vercel deployment ready!**

All required files are included:
- ✅ `src/app/not-found.tsx` - Custom 404 page with Next.js Link
- ✅ `next.config.js` - Optimized Vercel configuration
- ✅ `vercel.json` - Framework detection and routing
- ✅ `src/app/layout.tsx` - Clean metadata without problematic metadataBase
- ✅ Build tested and passing
- ✅ Lint checks passing

## Notes
- This issue is specific to Next.js 15 + Vercel + App Router
- The custom `not-found.tsx` is required due to a known compatibility issue
- Rewrites in `vercel.json` enable SPA-like routing behavior
- **No additional configuration needed** when using the boilerplate