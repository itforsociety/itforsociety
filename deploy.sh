#!/bin/bash

# IT for Society - Deployment Script
# This script builds and deploys the Angular app to a server via Git

set -e

echo "=========================================="
echo "IT for Society - Build & Deploy"
echo "=========================================="

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Check if git is initialized
if [ ! -d .git ]; then
    echo -e "${BLUE}Initializing git repository...${NC}"
    git init
fi

# Install dependencies
echo -e "${BLUE}Installing dependencies...${NC}"
npm ci

# Build the project
echo -e "${BLUE}Building Angular application...${NC}"
npm run build -- --prod

# Create docker image
echo -e "${BLUE}Building Docker image...${NC}"
docker build -t itforsociety:latest .

echo -e "${GREEN}✓ Build completed successfully!${NC}"
echo ""
echo "Next steps:"
echo "1. Push to repository: git push origin main"
echo "2. Deploy Docker image: docker run -p 4200:4200 itforsociety:latest"
echo ""
echo "For production deployment:"
echo "- Set PORT environment variable: docker run -p 80:4200 -e PORT=4200 itforsociety:latest"
echo "=========================================="
