#!/bin/bash

# IT for Society - Quick Deployment Setup
# This script automates the initial server setup

set -e

echo "=========================================="
echo "IT for Society - Quick Deploy Setup"
echo "=========================================="

DOMAIN="${1:-itforsociety.com}"
EMAIL="${2:-admin@itforsociety.com}"
SERVER_IP=$(hostname -I | awk '{print $1}')

echo ""
echo "Configuration:"
echo "  Domain: $DOMAIN"
echo "  Email: $EMAIL"
echo "  Server IP: $SERVER_IP"
echo ""

read -p "Continue with this configuration? (y/n) " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo "Setup cancelled."
    exit 1
fi

echo ""
echo "=========================================="
echo "Step 1: DNS Configuration"
echo "=========================================="
echo ""
echo "Update your DNS records at your domain registrar:"
echo ""
echo "  A Record:"
echo "    Name: $DOMAIN"
echo "    Value: $SERVER_IP"
echo ""
echo "  A Record (optional):"
echo "    Name: www.$DOMAIN"
echo "    Value: $SERVER_IP"
echo ""
echo "Wait for DNS propagation (up to 48 hours)"
echo "Check status: nslookup $DOMAIN"
echo ""

read -p "Press enter when DNS is configured..."

echo ""
echo "=========================================="
echo "Step 2: Build Docker Image"
echo "=========================================="
echo ""
npm ci
npm run build -- --prod
docker build -t itforsociety:latest .

echo ""
echo "=========================================="
echo "Step 3: Setup SSL Certificate"
echo "=========================================="
echo ""
bash setup-ssl.sh $DOMAIN $EMAIL

echo ""
echo "=========================================="
echo "Step 4: Start Services"
echo "=========================================="
echo ""
docker-compose up -d

echo ""
echo "=========================================="
echo "✓ Setup Complete!"
echo "=========================================="
echo ""
echo "Your site is now live at:"
echo "  https://$DOMAIN"
echo ""
echo "Verify SSL certificate:"
echo "  curl -I https://$DOMAIN"
echo ""
echo "View logs:"
echo "  docker-compose logs -f"
echo ""
echo "Stop services:"
echo "  docker-compose down"
echo ""
echo "=========================================="
