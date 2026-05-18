import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stripe Tempo — Bridge 인수부터 스테이블코인 결제 인프라 완전 해부 | Walits',
  description: 'Stripe가 $1.1B에 Bridge를 인수하고 만든 스테이블코인 결제 레일 Tempo. 기술 아키텍처, 수수료 구조, API, 실제 사용 사례, SWIFT와 비교, walits USDC 지갑과의 연결까지 2026년 최신 내용 완전 해부.',
  openGraph: {
    title: 'Stripe Tempo — 스테이블코인 결제 인프라 완전 해부 (2026)',
    description: 'Bridge 인수, Tempo 아키텍처, USDC 오케스트레이션, 수수료 비교, API 구조, 실사용 사례까지. Stripe가 어떻게 스테이블코인을 주류 결제로 만드는가.',
    images: [{ url: 'https://walits.com/blog/tempo.jpg', width: 1200, height: 630, alt: 'Stripe Tempo Stablecoin Payment Infrastructure' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stripe Tempo — 스테이블코인 결제 인프라 완전 해부',
    description: 'Bridge 인수부터 Tempo API까지. Stripe의 스테이블코인 전략 완전 해부.',
    images: ['https://walits.com/blog/tempo.jpg'],
  },
};

export default function StripeTempoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
