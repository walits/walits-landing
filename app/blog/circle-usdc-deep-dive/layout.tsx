import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi 시리즈 13 — Circle / USDC: DeFi·PayFi·기업 결제를 잇는 달러 인프라 | Walits',
  description: 'USDC 발행·소각 구조, CCTP 크로스체인 전송 원리, Native vs Bridged USDC 차이, Programmable Wallets API, USDT vs USDC 비교까지. walits가 USDC를 핵심 자산으로 선택한 이유.',
  openGraph: {
    title: 'DeFi 시리즈 13 — Circle / USDC: 달러 인프라 완전 해부',
    description: 'CCTP로 체인 간 네이티브 USDC 이동, Programmable Wallets로 지갑 인프라 구축. Circle 생태계 완전 해부.',
    images: [{ url: 'https://walits.com/blog/circle.jpg', width: 1200, height: 630, alt: 'Circle USDC Deep Dive' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi 시리즈 13 — Circle / USDC 인프라 완전 가이드',
    description: 'CCTP · Programmable Wallets · USDT vs USDC. 달러 인프라 완전 해부.',
    images: ['https://walits.com/blog/circle.jpg'],
  },
};

export default function CircleUSDCLayout({ children }: { children: React.ReactNode }) {
  return children;
}
