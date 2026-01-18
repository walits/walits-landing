import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '6대 블록체인 기술 비교 완벽 가이드: Bitcoin, Ethereum, Base, XRP, Tron, Solana | Walits',
  description: 'Bitcoin, Ethereum, Base, XRP, Tron, Solana 6대 블록체인의 합의 메커니즘, 트랜잭션 구조, 수수료 체계, 성능을 한눈에 비교. 사용 사례별 추천 블록체인 선택 가이드.',
  keywords: 'Bitcoin, Ethereum, Base, XRP, Tron, Solana, Layer 2, 블록체인 비교, PoW, PoS, DPoS, Optimistic Rollup, 수수료, TPS, 스마트 컨트랙트, 가스비',
  authors: [{ name: 'Walits Team' }],
  alternates: {
    canonical: '/blog/blockchain-comparison-guide',
  },
  openGraph: {
    title: '6대 블록체인 기술 비교 완벽 가이드',
    description: 'Bitcoin부터 Solana, Layer 2 Base까지, 주요 블록체인 기술의 차이점과 선택 기준',
    type: 'article',
    publishedTime: '2026-01-18T00:00:00Z',
    authors: ['Walits Team'],
    url: 'https://walits.com/blog/blockchain-comparison-guide',
    images: [
      {
        url: 'https://walits.com/blog/BLOCKCHAIN_COMPARISON_TUTORIAL.jpg',
        width: 1200,
        height: 630,
        alt: 'Blockchain Comparison Guide',
      },
    ],
  },
};

export default function BlockchainComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
