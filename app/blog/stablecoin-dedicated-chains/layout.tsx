import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: '스테이블코인 전용 체인 — Base, Tether Plasma, Circle Arc, Stripe Tempo | Walits',
  description: '코인베이스 Base, 테더 Plasma, 써클 Arc, 스트라이프 Tempo. 스테이블코인 전용 체인·레일이 왜 등장했나, 각각 무엇이 다른가, PayFi 인프라에 무엇을 의미하는가.',
  openGraph: {
    title: '스테이블코인 전용 체인 — Base, Tether Plasma, Circle Arc, Stripe Tempo',
    description: '스테이블코인 이동 전용으로 설계된 체인과 레일들. 각 플레이어의 전략과 기술 구조 비교.',
    images: [{ url: 'https://walits.com/blog/stablecoin-chains.jpg', width: 1200, height: 630, alt: 'Stablecoin Dedicated Chains' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: '스테이블코인 전용 체인 — Base, Plasma, Arc, Tempo',
    description: '스테이블코인 이동을 위해 체인을 직접 만드는 시대.',
    images: ['https://walits.com/blog/stablecoin-chains.jpg'],
  },
};

export default function StablecoinDedicatedChainsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
