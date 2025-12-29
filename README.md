# walits-landing

Walits Landing Page - Enterprise Wallet Solutions

## Features

- **Non-Custody Wallet**: API-based mass distribution for apps and games
- **Custody Wallet**: MPC 2-of-3 secure asset storage
- **AI Robo-Advisor**: AI-powered portfolio management
- **ST Token Wallet**: Security token trading and management

## Tech Stack

- Next.js 15 (Static Export)
- TypeScript
- Tailwind CSS
- AWS S3 + CloudFront (Deployment)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## Deployment

### Auto Deploy (GitHub Actions)
Push to `main` branch for automatic deployment:
```bash
git push origin main
```

### Manual Deploy
```bash
# Using deployment script
chmod +x scripts/deploy.sh
./scripts/deploy.sh
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide.

## SEO Features

- ✅ Comprehensive meta tags (27+ keywords)
- ✅ Open Graph & Twitter Cards
- ✅ JSON-LD structured data (Organization, FAQ, Offers)
- ✅ Sitemap & Robots.txt
- ✅ Blog post metadata
- ✅ Korean & English support

Target keywords: 토큰증권, 가상자산지갑, 코인지갑, 기업용 코인 지갑, MPC 지갑, 커스터디 지갑

## Blog

The landing page includes detailed blog posts about:
- Crypto custody services (가상자산 수탁서비스)
- Game event rewards distribution (게임 이벤트 보상)
- Community airdrops (커뮤니티 에어드랍)
- Daily attendance reward systems (자동 출석 보상)

## Infrastructure

Infrastructure managed by Terraform in `walits-infra/terraform/landing/`
- AWS S3: Static file hosting
- CloudFront: CDN & HTTPS
- Route53: DNS (optional)

## License

© 2024 Walits. All rights reserved.
