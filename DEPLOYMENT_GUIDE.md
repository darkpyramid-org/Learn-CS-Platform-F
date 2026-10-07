# Manetho Blog Deployment Guide

## Issue: 404 Error on Vercel

If you're seeing "This page doesn't exist" (404 NOT_FOUND) when visiting your Vercel deployment, follow these steps:

---

## Manual Fix Steps

### Step 1: Clear Vercel Cache and Redeploy

1. Go to your Vercel project: https://vercel.com/dashboard
2. Select the **Manetho-Blog-F** project
3. Go to **Settings** → **Git** → scroll down
4. Click **Redeploy** (or **Deploy** if not showing)
5. This will trigger a fresh build ignoring cache

### Step 2: Verify GitHub Connection

1. In Vercel project, go to **Settings** → **Git**
2. Ensure **Connected** shows: `darkpyramid-org/Manetho-Blog-F`
3. Verify the branch is set to **main** (not master)

### Step 3: Check Build Output

1. In Vercel, go to **Deployments** tab
2. Click the latest deployment
3. Scroll to **Build Output** section
4. Look for:
   - ✅ Build completed successfully
   - ✅ Output directory: `dist/demo`
   - ✅ Files uploaded

If you see errors, take note and proceed to Step 4.

### Step 4: Local Build Test

```bash
cd "C:\Users\mosta\Downloads\projects\New folder (4)\Learn-CS-Platform-F"

# Clear previous builds
del /s /q dist

# Install dependencies
npm ci

# Build for production
npm run build -- --configuration production

# Verify output was created
dir dist\demo
```

You should see files like `index.html`, `main-*.js`, `styles-*.css`

### Step 5: Force Vercel Rebuild

Run this command to trigger deployment via git push:

```bash
cd "C:\Users\mosta\Downloads\projects\New folder (4)\Learn-CS-Platform-F"

git log --oneline -1

# This will show the latest commit. Copy the hash.
# Example output: 3e3af7f Fix: Remove PR comment step
```

Then in Vercel:
1. Go to **Deployments**
2. Click the 3-dot menu on the latest deployment
3. Select **Redeploy** → **Redeploy without cache**

### Step 6: Verify SPA Routing is Configured

The vercel.json should have rewrites (it does). Verify:

```json
"rewrites": [
  {
    "source": "/(.*)",
    "destination": "/index.html"
  }
]
```

This ensures all routes redirect to index.html for Angular routing.

### Step 7: Check Framework Detection

Vercel should auto-detect Angular. If not:

1. Go to **Settings** → **Build & Development Settings**
2. Set **Framework Preset** to **Angular**
3. **Build Command**: `npm ci && npm run build -- --configuration production`
4. **Output Directory**: `dist/demo`
5. **Install Command**: `npm ci`

---

## Verification Checklist

- [ ] vercel.json exists with correct outputDirectory: `dist/demo`
- [ ] angular.json has outputPath: `dist/demo`
- [ ] .vercelignore is present
- [ ] GitHub repo is connected to Vercel
- [ ] Latest commit is pushed to main branch
- [ ] Vercel shows "Framework: Angular"
- [ ] Build shows 0 errors in Vercel dashboard
- [ ] dist/demo/index.html exists locally after `npm run build`

---

## If Still Getting 404

Run these diagnostic commands:

```bash
# Check if build was successful
dir "dist\demo\index.html"

# Check file size (should be > 5KB)
powershell -Command "(Get-Item 'dist\demo\index.html').Length / 1024"

# View first 100 lines of index.html
powershell -Command "Get-Content 'dist\demo\index.html' | Select-Object -First 100"
```

Expected output: Valid HTML with `<app-root>` tag and Angular bundles referenced.

---

## Vercel Dashboard Manual Steps

1. **Project Settings**:
   - Framework: Angular
   - Build Command: `npm ci && npm run build -- --configuration production`
   - Output Directory: `dist/demo`

2. **Environment Variables** (if needed):
   - NODE_ENV: `production`
   - NODE_OPTIONS: `--max-old-space-size=3072`

3. **Deploy** → **Redeploy without cache**

---

## Common Issues & Fixes

| Issue | Fix |
|-------|-----|
| 404 on homepage | Redeploy without cache |
| 404 on all routes | SPA rewrites not configured |
| Build fails | Run `npm ci && npm run build` locally |
| Blank page | Check browser console for JS errors |
| Styles missing | Verify `global_styles.css` is being compiled |

---

## Next Deploy

After making code changes:

```bash
# Ensure on main branch
git checkout main

# Add changes
git add .

# Commit
git commit -m "Description of changes"

# Push to GitHub (using SSH or HTTPS with credentials)
git push origin main

# Vercel will auto-deploy within 30 seconds
```

**Note:** Use SSH keys or GitHub CLI for authentication instead of embedding tokens.

---

## Support

If issue persists:
1. Check Vercel deployment logs: https://vercel.com/darkpyramid-org/manetho-blog-f/deployments
2. Verify repository is public or add team access
3. Check for TypeScript compilation errors in build output

