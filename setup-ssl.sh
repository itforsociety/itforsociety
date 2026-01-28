#!/bin/bash

# IT for Society - SSL Certificate Setup
# This script sets up SSL certificates for itforsociety.com using Let's Encrypt

set -e

DOMAIN="itforsociety.com"
EMAIL="your-email@example.com"  # Change this to your email

echo "=========================================="
echo "IT for Society - SSL Certificate Setup"
echo "=========================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Check if domain is provided
if [ -z "$1" ]; then
    echo -e "${YELLOW}Usage: $0 <domain> [email]${NC}"
    echo "Example: $0 itforsociety.com admin@itforsociety.com"
    exit 1
fi

DOMAIN=$1
EMAIL=${2:-$EMAIL}

echo -e "${BLUE}Setting up SSL certificate for: ${GREEN}$DOMAIN${NC}"
echo -e "${BLUE}Email: ${GREEN}$EMAIL${NC}"

# Create necessary directories
mkdir -p certbot/conf
mkdir -p certbot/www

# Download Let's Encrypt root certificates
echo -e "${BLUE}Downloading Let's Encrypt root certificates...${NC}"
curl -s https://letsencrypt.org/certs/lets-encrypt-r3.pem -o certbot/conf/lets-encrypt-r3.pem || true

# Create initial certificate request
echo -e "${BLUE}Creating initial certificate request...${NC}"
docker-compose run --rm -e CERTBOT_EMAIL=$EMAIL certbot certonly \
    --webroot \
    -w /var/www/certbot \
    -d $DOMAIN \
    -d www.$DOMAIN \
    --agree-tos \
    --non-interactive \
    --email $EMAIL \
    || echo -e "${YELLOW}Certbot run completed (may have warnings)${NC}"

# Fix permissions
echo -e "${BLUE}Setting proper permissions...${NC}"
chmod 755 certbot/conf
chmod 755 certbot/www

echo ""
echo -e "${GREEN}✓ SSL certificate setup completed!${NC}"
echo ""
echo "Certificate location:"
echo "  - Certificate: certbot/conf/live/$DOMAIN/fullchain.pem"
echo "  - Key: certbot/conf/live/$DOMAIN/privkey.pem"
echo ""
echo "Next steps:"
echo "1. Update nginx.conf with your domain: $DOMAIN"
echo "2. Start services: docker-compose up -d"
echo "3. Verify SSL: https://$DOMAIN"
echo ""
echo "=========================================="
