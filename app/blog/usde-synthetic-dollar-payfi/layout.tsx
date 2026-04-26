import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'USDe — 스테이블코인이 아닌 합성 달러, 그리고 PayFi 고수익 전략 | Walits',
  description: 'USDe는 스테이블코인이 아니다. 델타 중립 전략으로 연 8~25% APY를 만드는 합성 달러의 원리, UST와의 차이, 리스크, walits Chili 프리셋 sUSDe 통합 전략까지.',
  openGraph: {
    title: 'USDe — 합성 달러의 원리와 walits PayFi 고수익 전략',
    description: '델타 중립 헤지로 달러 가치 유지 + 펀딩비로 연 8~25% 수익. USDC·USDT·UST와 무엇이 다른가.',
    images: [{ url: 'https://walits.com/blog/usde.jpg', width: 1200, height: 630, alt: 'USDe Synthetic Dollar PayFi' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'USDe — 합성 달러와 PayFi 고수익 전략',
    description: '델타 중립 + 펀딩비 수익 원리. walits sUSDe 통합 방안.',
    images: ['https://walits.com/blog/usde.jpg'],
  },
};

export default function USDeSyntheticDollarLayout({ children }: { children: React.ReactNode }) {
  return children;
}
