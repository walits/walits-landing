#!/bin/bash
set -e

# Walits Landing 배포 스크립트
# AWS S3 + CloudFront로 Next.js static site 배포

echo "🏗️  Building Next.js..."
npm run build

echo "📦 Uploading to S3..."
aws s3 sync out/ s3://walits-landing-prod/ --profile walits --delete

echo "🔄 Invalidating CloudFront cache..."
DISTRIBUTION_ID=$(cd ../walits-infra/terraform/landing && terraform output -raw cloudfront_distribution_id)
aws cloudfront create-invalidation \
  --distribution-id $DISTRIBUTION_ID \
  --paths "/*" \
  --profile walits

echo "✅ Deployment complete!"
echo "🌐 Website: https://$(cd ../walits-infra/terraform/landing && terraform output -raw cloudfront_domain_name)"
