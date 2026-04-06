import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi 시리즈 11 — Pendle: 수익률을 거래하는 DeFi 채권 시장 | Walits',
  description: 'Pendle Finance 완전 가이드. PT/YT 분리 원리, 고정 수익 확보 전략, YT 레버리지, Ondo USDY × Pendle RWA 연동, walits 로드맵까지. DeFi에 채권 시장이 생겼다.',
  openGraph: {
    title: 'DeFi 시리즈 11 — Pendle: 수익률을 거래하는 DeFi 채권 시장',
    description: 'PT로 고정 수익 확보, YT로 수익률 레버리지. Pendle Finance + Ondo USDY 연동 완전 해부.',
    images: [{ url: 'https://walits.com/blog/pendle.jpg', width: 1200, height: 630, alt: 'Pendle Finance Deep Dive' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi 시리즈 11 — Pendle 완전 가이드',
    description: 'PT/YT로 수익률을 쪼개고 거래하는 DeFi 채권 시장. 고정 APY 확보 방법.',
    images: ['https://walits.com/blog/pendle.jpg'],
  },
};

export default function PendleLayout({ children }: { children: React.ReactNode }) {
  return children;
}
