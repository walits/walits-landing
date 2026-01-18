import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '5대 블록체인 기술 비교 완벽 가이드: Bitcoin, Ethereum, XRP, Tron, Solana | Walits',
  description: 'Bitcoin, Ethereum, XRP, Tron, Solana 5대 블록체인의 합의 메커니즘, 트랜잭션 구조, 수수료 체계, 성능을 한눈에 비교. 사용 사례별 추천 블록체인 선택 가이드.',
  keywords: 'Bitcoin, Ethereum, XRP, Tron, Solana, 블록체인 비교, PoW, PoS, DPoS, 수수료, TPS, 스마트 컨트랙트, 가스비',
  openGraph: {
    title: '5대 블록체인 기술 비교 완벽 가이드',
    description: 'Bitcoin부터 Solana까지, 주요 블록체인 기술의 차이점과 선택 기준',
    type: 'article',
    url: 'https://walits.com/blog/blockchain-comparison-guide',
  },
};

export default function BlockchainComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
