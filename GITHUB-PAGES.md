# GitHub Pages Deployment Guide

## Overview
Your Angular app is now configured as a static site for GitHub Pages deployment with your custom domain.

## Prerequisites
- GitHub account
- Repository created on GitHub
- Domain `itforsociety.com` (optional - works without it)

## Setup Steps

### 1. Create/Push to GitHub Repository

```bash
# Initialize if needed
git init

# Add all files
git add .

# Initial commit
git commit -m "Convert to GitHub Pages deployment"

# Add remote repository
git remote add origin https://github.com/yourusername/itforsociety.git

# Create and push to main branch
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Source", select `Deploy from a branch`
4. Select branch: `gh-pages`
5. Click **Save**

### 3. Configure Custom Domain (Optional)

If you want to use `itforsociety.com`:

1. In GitHub Pages settings, add your custom domain:
   - Enter: `itforsociety.com`
   - Click **Save**

2. Update DNS at your domain registrar:
   ```
   Type  Name                    Value
   A     itforsociety.com        185.199.108.153
   A     itforsociety.com        185.199.109.153
   A     itforsociety.com        185.199.110.153
   A     itforsociety.com        185.199.111.153
   
   CNAME www.itforsociety.com    yourusername.github.io
   ```

3. Wait for DNS propagation (up to 48 hours)

4. GitHub will automatically enable HTTPS once DNS is verified

### 4. Deploy

The app will automatically deploy when you push to `main`:

```bash
# Make changes
# Commit
git add .
git commit -m "Update content"

# Push to main - GitHub Actions automatically builds and deploys
git push origin main
```

## Access Your Site

- **Without custom domain**: `https://yourusername.github.io/itforsociety`
- **With custom domain**: `https://itforsociety.com`

## GitHub Actions Workflow

The `.github/workflows/deploy.yml` file:
1. Installs dependencies
2. Runs linting & tests
3. Builds Angular app (`npm run build --prod`)
4. Deploys to `gh-pages` branch
5. GitHub Pages serves the static files

**Deployment happens automatically on every push to `main`!**

## Static Site Limitations

This is now a **static site**, so:

✅ Works:
- All routing (Angular handles it)
- API calls to external services
- Static assets
- CSS/SCSS

❌ Doesn't work:
- Server-side rendering
- Node.js backend/Firebase Functions
- Server-side authentication

## Local Testing

```bash
# Build
npm run build

# Serve locally
npx http-server dist/ITforSociety

# Open browser
# http://localhost:8080
```

## Environment Variables

For API endpoints or configuration:

```bash
# Create .env file
API_URL=https://your-api.com

# Reference in Angular
import { environment } from './environments/environment';
```

## Troubleshooting

### Site not updating after push
1. Check Actions tab on GitHub
2. Wait for workflow to complete (usually 2-3 minutes)
3. Hard refresh browser (Ctrl+Shift+R)

### Custom domain not working
1. Verify DNS records are correct
2. Wait for DNS propagation (up to 48 hours)
3. Check GitHub Pages settings

### Routing issues (404 on refresh)
- GitHub Pages requires `<base href="./">` in index.html
- Already configured for you ✓

## Rollback

If deployment fails:

```bash
# GitHub automatically keeps previous deployment
# Revert to previous commit
git revert HEAD
git push origin main
```

## Monitoring

View deployment status:
1. Go to your repository
2. Click **Actions** tab
3. See build & deployment logs in real-time

## Domain + GitHub Pages

**No longer need:**
- Docker
- Docker Compose
- Nginx configuration
- SSL setup scripts
- Your own server

**What you get:**
- Free hosting on GitHub
- Free HTTPS
- Custom domain support
- Automatic deployments
- GitHub's CDN for fast performance

## Next Steps

1. Create GitHub repository
2. Push code: `git push origin main`
3. Enable GitHub Pages in Settings
4. (Optional) Configure custom domain
5. Monitor first deployment in Actions tab
6. Visit your site!

## Support

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- Check Actions tab for deployment logs
