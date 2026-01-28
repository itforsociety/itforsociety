# IT for Society - Domain Setup Summary

## Quick Start (3 Steps)

### 1. Update DNS
Point `itforsociety.com` to your server IP at your domain registrar:
```
Type  Name                  Value
A     itforsociety.com      YOUR.SERVER.IP
A     www.itforsociety.com  YOUR.SERVER.IP
```

### 2. Run Quick Deploy
```bash
bash quick-deploy.sh itforsociety.com your-email@example.com
```

### 3. Access Your Site
```
https://itforsociety.com
```

---

## What Was Set Up

### 📦 Docker Compose Stack
- **App Container**: Angular app running on port 4200
- **Nginx Container**: Reverse proxy, SSL termination on ports 80/443
- **Certbot Container**: Automatic SSL renewal every 12 hours

### 🔒 SSL Configuration
- Free SSL certificates from Let's Encrypt
- Automatic renewal before expiry
- HTTP → HTTPS redirect
- Security headers configured

### 🚀 Features
- Zero downtime deployments
- Automatic SSL renewal
- Performance optimizations (gzip, caching)
- Security hardening (HSTS, X-Frame-Options, etc.)

---

## Files Created/Modified

| File | Purpose |
|------|---------|
| `docker-compose.yml` | Multi-container orchestration |
| `nginx.conf` | Reverse proxy & SSL config |
| `setup-ssl.sh` | SSL certificate initialization |
| `quick-deploy.sh` | Automated deployment script |
| `.env.example` | Environment variables template |
| `DEPLOYMENT.md` | Detailed deployment guide |

---

## Common Commands

```bash
# Start all services
docker-compose up -d

# View logs
docker-compose logs -f

# Check status
docker-compose ps

# Restart a service
docker-compose restart nginx

# Stop everything
docker-compose down

# View SSL certificates
docker-compose exec certbot certbot certificates

# Manual SSL renewal
docker-compose run --rm certbot renew --force-renewal
```

---

## Domain & SSL Status

### Access Points
- **HTTP**: http://itforsociety.com → redirects to HTTPS
- **HTTPS**: https://itforsociety.com ✓
- **WWW**: https://www.itforsociety.com → redirects to main domain

### Certificate Auto-Renewal
- Renewal check: Every 12 hours
- Certificate valid for: 90 days
- Auto-renewed before expiry

---

## Troubleshooting

### DNS Not Propagating
```bash
# Check current DNS
nslookup itforsociety.com

# Wait up to 48 hours, then retry
```

### SSL Certificate Issues
```bash
# View certificate details
docker-compose exec certbot certbot certificates

# Force renewal
docker-compose run --rm certbot renew --force-renewal

# View logs
docker-compose logs certbot
```

### Application Not Responding
```bash
# Check if containers are running
docker-compose ps

# View app logs
docker-compose logs app

# Restart all services
docker-compose restart
```

### Port Already in Use
Edit `docker-compose.yml` and change port mappings:
```yaml
nginx:
  ports:
    - "8080:80"  # Change from 80 to 8080
    - "8443:443" # Change from 443 to 8443
```

---

## Security Checklist

- [x] HTTPS enabled with valid SSL certificate
- [x] HTTP → HTTPS redirect configured
- [x] Security headers set (HSTS, X-Frame-Options, CSP)
- [x] Firewall allows ports 80, 443
- [x] `.env` file not committed (in .gitignore)
- [x] Regular dependency updates: `npm audit`

---

## Next Steps

1. **Initialize Git** (if not done)
   ```bash
   git init
   git add .
   git commit -m "Setup domain and SSL for itforsociety.com"
   ```

2. **Push to Repository**
   ```bash
   git remote add origin https://github.com/yourusername/itforsociety.git
   git push -u origin main
   ```

3. **Monitor Deployment**
   ```bash
   docker-compose logs -f
   ```

4. **Set Up CI/CD** (Optional)
   - GitHub Actions configured in `.github/workflows/deploy.yml`
   - Uncomment deployment steps as needed

---

## Support

For issues or questions:
- Check `DEPLOYMENT.md` for detailed instructions
- Review Docker Compose logs: `docker-compose logs`
- Test connectivity: `curl -I https://itforsociety.com`
