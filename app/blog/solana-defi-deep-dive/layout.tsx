import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi 시리즈 14 — Solana DeFi 입문: Jupiter + Kamino 완전 가이드 | Walits',
  description: 'Solana DeFi 생태계 완전 가이드. Jupiter 라우팅으로 슬리피지 최소화, Kamino Finance USDC 수익 전략, ETH vs SOL DeFi 비교, Visa × Solana USDC 파일럿, walits Solana 통합 전략.',
  openGraph: {
    title: 'DeFi 시리즈 14 — Solana DeFi: Jupiter + Kamino 완전 가이드',
    description: '$0.001 수수료, 400ms 확정. Jupiter 최적 스왑 + Kamino 자동 수익. Solana DeFi 완전 입문.',
    images: [{ url: 'https://walits.com/blog/solana.jpg', width: 1200, height: 630, alt: 'Solana DeFi Deep Dive' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi 시리즈 14 — Solana DeFi 완전 가이드',
    description: 'Jupiter + Kamino로 Solana DeFi 시작하기. ETH DeFi와 무엇이 다른가.',
    images: ['https://walits.com/blog/solana.jpg'],
  },
};

export default function SolanaDeFiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
