import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Open USD (OUSD) — Visa·BlackRock·Coinbase 140개 기업 스테이블코인 컨소시엄 완전 해부 | Walits',
  description: 'Visa, Mastercard, BlackRock, Stripe, Coinbase 등 140개 이상 기업이 모여 만든 스테이블코인 Open USD(OUSD). 수수료 없음, 리저브 수익 공유, 컨소시엄 거버넌스. Circle 주가 17% 폭락시킨 OUSD의 모든 것.',
  openGraph: {
    title: 'Open USD (OUSD) — 140개 기업이 Circle에 선전포고한 스테이블코인',
    description: 'Visa·BlackRock·Coinbase가 함께 만든 OUSD. 수수료 없음, 리저브 수익 파트너 공유, 컨소시엄 거버넌스. USDC·USDT의 진짜 도전자.',
    images: [{ url: 'https://walits.com/blog/openusd.jpg', width: 1200, height: 630, alt: 'Open USD OUSD Stablecoin Consortium' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Open USD (OUSD) — Visa·BlackRock·Coinbase 140개사 스테이블코인',
    description: '수수료 없음, 리저브 수익 공유. Circle 주가 17% 폭락시킨 OUSD 완전 해부.',
    images: ['https://walits.com/blog/openusd.jpg'],
  },
};

export default function OpenUsdLayout({ children }: { children: React.ReactNode }) {
  return children;
}
