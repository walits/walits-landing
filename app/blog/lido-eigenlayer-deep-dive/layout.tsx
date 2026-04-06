import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi 시리즈 12 — Lido + EigenLayer: ETH 스테이킹부터 리스테이킹까지 | Walits',
  description: 'Lido stETH로 ETH 스테이킹 수익을, EigenLayer 리스테이킹으로 추가 보상까지. stETH 내부 구조, AVS 개념, LRT(ether.fi·Renzo·Kelp) 전략, 연 5~7% 수익 스택 완전 해부.',
  openGraph: {
    title: 'DeFi 시리즈 12 — Lido + EigenLayer: ETH 스테이킹부터 리스테이킹까지',
    description: 'ETH 보유만으로 연 5~7% 자동 수익. Lido stETH + EigenLayer 리스테이킹 전략 완전 해부.',
    images: [{ url: 'https://walits.com/blog/lido.jpg', width: 1200, height: 630, alt: 'Lido + EigenLayer Deep Dive' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi 시리즈 12 — Lido + EigenLayer 완전 가이드',
    description: 'stETH 리퀴드 스테이킹 + EigenLayer 리스테이킹으로 ETH 수익 극대화.',
    images: ['https://walits.com/blog/lido.jpg'],
  },
};

export default function LidoEigenLayerLayout({ children }: { children: React.ReactNode }) {
  return children;
}
