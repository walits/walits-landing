import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi 시리즈 9 — Morpho: Aave 위에서 더 잘하는 렌딩 프로토콜 | Walits',
  description: 'Morpho Blue와 MetaMorpho 완전 가이드. P2P 매칭으로 예치자 5.6% · 대출자 6.2% 실현하는 원리, Morpho Optimizer → Blue → MetaMorpho 3단계 진화, walits 애플/슬리핑머니 전략과의 연동까지.',
  openGraph: {
    title: 'DeFi 시리즈 9 — Morpho: Aave 위에서 더 잘하는 렌딩 프로토콜',
    description: 'P2P 매칭으로 Aave보다 나은 금리. Morpho Blue + MetaMorpho 완전 해부.',
    images: [{ url: 'https://walits.com/blog/morpho.jpg', width: 1200, height: 630, alt: 'Morpho Finance Deep Dive' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi 시리즈 9 — Morpho 완전 가이드',
    description: 'P2P 렌딩 매칭으로 Aave보다 높은 금리. Morpho Blue 구조 완전 해부.',
    images: ['https://walits.com/blog/morpho.jpg'],
  },
};

export default function MorphoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
