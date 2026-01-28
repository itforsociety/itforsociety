# IT for Society - Deployment Guide

## Overview
This project has been migrated from Firebase Hosting to Git-based server deployment using Docker.

## Prerequisites
- Node.js 14+ installed
- Docker installed (for containerized deployment)
- Git initialized for version control

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start
# Application will be available at http://localhost:4200

# Run tests
npm test

# Run linting
npm lint
```

## Building for Production

### Build Only
```bash
npm run build
# Output will be in dist/ITforSociety/
```

### Docker Build & Run

### Building for Production

### Build Only
```bash
npm run build
# Output will be in dist/ITforSociety/
```

### Docker Build & Run

#### Build Docker Image
```bash
docker build -t itforsociety:latest .
```

#### Run Container (Standalone)
```bash
# Development
docker run -p 4200:4200 itforsociety:latest

# Production (expose on port 80)
docker run -p 80:4200 itforsociety:latest
```

#### Run with Docker Compose (Recommended)
```bash
# Start all services (app, nginx with SSL, certbot)
docker-compose up -d

# View logs
docker-compose logs -f

# Stop services
docker-compose down
```

## Domain Configuration (itforsociety.com)

### DNS Setup

Update your domain registrar's DNS records to point to your server:

```
Type    Name                Value
A       itforsociety.com    YOUR_SERVER_IP
A       www.itforsociety.com YOUR_SERVER_IP
```

### Automatic Setup with Docker Compose

This project includes Docker Compose with Nginx reverse proxy and automatic SSL renewal:

```bash
# 1. Configure nginx.conf
# Update the domain name if different from itforsociety.com

# 2. Setup SSL certificates (first time)
bash setup-ssl.sh itforsociety.com your-email@example.com

# 3. Start all services
docker-compose up -d

# Services will run:
# - App: Internal port 4200
# - Nginx: Reverse proxy on ports 80, 443
# - Certbot: Auto-renews SSL every 12 hours
```

### Manual Setup

#### Prerequisites
- Domain pointing to your server (DNS A record)
- Docker and Docker Compose installed
- Port 80 and 443 accessible

#### Steps

1. **Update nginx.conf**
   - Replace `itforsociety.com` with your domain
   - Update SSL certificate paths if different

2. **Generate SSL Certificate**
   ```bash
   bash setup-ssl.sh itforsociety.com your-email@example.com
   ```

3. **Start Docker Compose**
   ```bash
   docker-compose up -d
   ```

4. **Verify SSL**
   ```bash
   curl -I https://itforsociety.com
   ```

### Accessing Your Site

- **HTTP (redirects to HTTPS)**: http://itforsociety.com
- **HTTPS**: https://itforsociety.com
- **WWW subdomain**: https://www.itforsociety.com (redirects to main domain)

### SSL Certificate Details

- **Provider**: Let's Encrypt (free)
- **Auto-renewal**: Automatic via Certbot (every 12 hours)
- **Certificate Path**: `certbot/conf/live/itforsociety.com/`
- **Expiry**: 90 days (auto-renewed before expiry)

### Troubleshooting Domain Issues

#### Certificate not generating
```bash
# Check certbot logs
docker-compose logs certbot

# Manually trigger renewal
docker-compose run --rm certbot renew --force-renewal
```

#### Can't reach site
1. Verify DNS is updated: `nslookup itforsociety.com`
2. Check firewall allows ports 80, 443
3. Verify nginx is running: `docker-compose ps`

#### SSL errors
1. Ensure certificate paths in nginx.conf are correct
2. Wait for DNS propagation (can take up to 48 hours)
3. Check certificate validity: `docker-compose exec certbot certbot certificates`

### Setup Remote Repository
```bash
# Add remote repository
git remote add origin https://github.com/yourusername/itforsociety.git

# Create main branch and push
git branch -M main
git push -u origin main
```

### Deploy to Server

#### Option 1: Manual Deployment
```bash
# On your server
git clone https://github.com/yourusername/itforsociety.git
cd itforsociety
bash deploy.sh
```

#### Option 2: GitHub Actions (CI/CD)
Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Server

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Build and Push Docker Image
      run: |
        docker build -t itforsociety:latest .
        # Add your registry push commands here
    
    - name: Deploy to Server
      run: |
        # SSH to server and pull latest code
        # Restart Docker container
```

## Environment Variables

Create a `.env` file for configuration:

```env
# Server port
PORT=4200

# API endpoints (if needed)
API_URL=https://api.yourdomain.com
```

## File Structure for Deployment

```
itforsociety/
├── Dockerfile           # Docker configuration
├── docker-compose.yml   # Docker Compose (app, nginx, certbot)
├── nginx.conf          # Nginx reverse proxy configuration
├── deploy.sh           # Deployment script
├── setup-ssl.sh        # SSL certificate setup script
├── .dockerignore       # Docker ignore file
├── .gitignore          # Git ignore file
├── certbot/            # SSL certificates (auto-generated)
│   ├── conf/           # Let's Encrypt certificates
│   └── www/            # ACME challenge directory
├── dist/               # Built application (generated)
├── src/                # Source code
└── ...
```

## Troubleshooting

### Docker not building
- Ensure Node.js version matches (14+)
- Check npm dependencies: `npm ci`

### Port already in use
- Change port: `docker run -p 8080:4200 itforsociety:latest`

### Git push fails
- Ensure remote is set: `git remote -v`
- Check branch: `git branch -M main`

## Security Notes

1. Never commit sensitive data (API keys, credentials)
2. Use `.env` files for configuration (not committed)
3. Update dependencies regularly: `npm audit`
4. Review `.gitignore` to exclude sensitive files

## Domain Configuration (itforsociety.com)

### DNS Setup

Update your domain registrar's DNS records to point to your server:

```
Type    Name                Value
A       itforsociety.com    YOUR_SERVER_IP
A       www.itforsociety.com YOUR_SERVER_IP
```

### Automatic Setup with Docker Compose

This project includes Docker Compose with Nginx reverse proxy and automatic SSL renewal:

```bash
# 1. Configure nginx.conf
# Update the domain name if different from itforsociety.com

# 2. Setup SSL certificates (first time)
bash setup-ssl.sh itforsociety.com your-email@example.com

# 3. Start all services
docker-compose up -d

# Services will run:
# - App: Internal port 4200
# - Nginx: Reverse proxy on ports 80, 443
# - Certbot: Auto-renews SSL every 12 hours
```

### Manual Setup

#### Prerequisites
- Domain pointing to your server (DNS A record)
- Docker and Docker Compose installed
- Port 80 and 443 accessible

#### Steps

1. **Update nginx.conf**
   - Replace `itforsociety.com` with your domain
   - Update SSL certificate paths if different

2. **Generate SSL Certificate**
   ```bash
   bash setup-ssl.sh itforsociety.com your-email@example.com
   ```

3. **Start Docker Compose**
   ```bash
   docker-compose up -d
   ```

4. **Verify SSL**
   ```bash
   curl -I https://itforsociety.com
   ```

### Accessing Your Site

- **HTTP (redirects to HTTPS)**: http://itforsociety.com
- **HTTPS**: https://itforsociety.com
- **WWW subdomain**: https://www.itforsociety.com (redirects to main domain)

### SSL Certificate Details

- **Provider**: Let's Encrypt (free)
- **Auto-renewal**: Automatic via Certbot (every 12 hours)
- **Certificate Path**: `certbot/conf/live/itforsociety.com/`
- **Expiry**: 90 days (auto-renewed before expiry)

### Troubleshooting Domain Issues

#### Certificate not generating
```bash
# Check certbot logs
docker-compose logs certbot

# Manually trigger renewal
docker-compose run --rm certbot renew --force-renewal
```

#### Can't reach site
1. Verify DNS is updated: `nslookup itforsociety.com`
2. Check firewall allows ports 80, 443
3. Verify nginx is running: `docker-compose ps`

#### SSL errors
1. Ensure certificate paths in nginx.conf are correct
2. Wait for DNS propagation (can take up to 48 hours)
3. Check certificate validity: `docker-compose exec certbot certbot certificates`

## Next Steps

1. Initialize Git: `git init`
2. Set up GitHub repository
3. Configure deployment automation (GitHub Actions or similar)
4. Point your domain DNS to your server
5. Run SSL setup and Docker Compose
6. Monitor with: `docker-compose logs -f`
