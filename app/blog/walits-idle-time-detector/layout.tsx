import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Idle Time Detector — 유휴 USDC가 자동으로 수익을 내는 방법 | Walits',
  description: '입금 감지 → 유휴 기간 예측 → 프로토콜 선택 → 온체인 예치. Aave(5.1%) · Morpho(5.6%) · Ondo USDY(5.0%) 3단계 자동 선택 로직과 APY Scanner, Policy Engine 연동 구조를 완전 해부한다.',
  openGraph: {
    title: 'Idle Time Detector — 유휴 USDC 자동 수익 메커니즘',
    description: '24h 미만→Aave, 1-7일→Morpho, 7일+→Ondo USDY. walits가 유휴 자금을 실시간으로 감지하고 최적 프로토콜에 자동 예치하는 방법.',
    images: [{ url: 'https://walits.com/blog/walits_payfi.jpg', width: 1200, height: 630, alt: 'walits Idle Time Detector' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Idle Time Detector — 유휴 USDC 자동 수익',
    description: 'Aave·Morpho·Ondo USDY 3단계 선택 로직. walits 자동 예치 메커니즘 완전 해부.',
    images: ['https://walits.com/blog/walits_payfi.jpg'],
  },
};

export default function WalitsIdleTimeDetectorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
