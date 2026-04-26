import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '예측 시장과 Polymarket — 기술자가 알아야 할 온체인 구현 세부 | Walits',
  description: 'Conditional Tokens Framework, CLOB 오더북, UMA Optimistic Oracle을 컨트랙트 수준으로 해부한다. Polymarket 온체인 아키텍처, splitPosition/redeemPositions 흐름, EIP-712 서명 오더 매칭까지.',
  openGraph: {
    title: '예측 시장과 Polymarket — 온체인 구현 세부 기술 해부',
    description: 'CTF ERC-1155, CLOB 오더북, UMA Oracle — 기술자 관점에서 Polymarket이 어떻게 동작하는지 컨트랙트 수준으로 분석한다.',
    images: [{ url: 'https://walits.com/blog/prediction.jpg', width: 1200, height: 630, alt: 'Prediction Markets Polymarket On-Chain Architecture' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: '예측 시장과 Polymarket — 온체인 구현 세부',
    description: 'CTF, CLOB, UMA Oracle. Polymarket 기술 아키텍처 완전 해부.',
    images: ['https://walits.com/blog/prediction.jpg'],
  },
};

export default function PredictionMarketsPolymarketLayout({ children }: { children: React.ReactNode }) {
  return children;
}
