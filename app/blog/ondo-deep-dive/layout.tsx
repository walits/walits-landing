import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi 시리즈 8 — Ondo Finance: 미국 국채를 DeFi로 가져오다 | Walits',
  description: 'Ondo Finance 완전 가이드. OUSG·USDY 차이, 국채 토큰화 구조, BlackRock BUIDL 연동, PayFi에서의 활용법까지. RWA 토큰화의 선두주자를 완전 해부한다.',
  openGraph: {
    title: 'DeFi 시리즈 8 — Ondo Finance: 미국 국채를 DeFi로 가져오다',
    description: 'OUSG와 USDY로 연 4~5% 국채 수익을 온체인에서. RWA 토큰화 선두주자 Ondo Finance 완전 해부.',
    images: [{ url: 'https://walits.com/blog/ondo.jpg', width: 1200, height: 630, alt: 'Ondo Finance Deep Dive' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi 시리즈 8 — Ondo Finance 완전 가이드',
    description: 'OUSG·USDY로 미국 국채 수익을 DeFi에서. RWA 토큰화의 핵심.',
    images: ['https://walits.com/blog/ondo.jpg'],
  },
};

export default function OndoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
