#!/bin/bash

# QCE Deployment Script
# Deploys backend to Cloudflare Workers automatically

# Load environment variables
source ../config/.env

# Validate Cloudflare API Credentials
if [ -z "$CLOUDFLARE_ACCOUNT_ID" ] || [ -z "$CLOUDFLARE_API_TOKEN" ]; then
  echo "❌ Missing Cloudflare API credentials. Check your .env file."
  exit 1
fi

echo "🚀 Deploying QCE Backend to Cloudflare Workers..."

# Build project
echo "🔧 Building backend..."
npm run build

# Deploy to Cloudflare Workers
echo "☁️ Deploying to Cloudflare..."
npx wrangler publish

# Verify deployment status
DEPLOY_URL=$(npx wrangler pages publish backend/ --project-name=qcehub)
if [ $? -eq 0 ]; then
  echo "✅ Deployment Successful!"
  echo "🌍 Live at: $DEPLOY_URL"
else
  echo "❌ Deployment Failed!"
  exit 1
fi
