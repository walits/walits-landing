import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DeFi 시리즈 10 — Huma Finance: 실물 경제 수익을 DeFi로 | Walits',
  description: 'Huma Finance 완전 가이드. 공급망 금융·Arf 크로스보더 결제 구조, Senior/Junior 트랜치, 연 10~12% APY가 가능한 이유, walits 칠리 투자 전략과의 연동까지. DeFi와 실물 경제의 다리.',
  openGraph: {
    title: 'DeFi 시리즈 10 — Huma Finance: 실물 경제 수익을 DeFi로',
    description: '공급망 금융과 크로스보더 결제로 연 10~12% APY. DeFi 최초 실물 수익 기반 PayFi 프로토콜 완전 해부.',
    images: [{ url: 'https://walits.com/blog/huma.jpg', width: 1200, height: 630, alt: 'Huma Finance Deep Dive' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DeFi 시리즈 10 — Huma Finance 완전 가이드',
    description: '실물 공급망 금융으로 연 10~12% APY. DeFi × 실물 경제 브릿지.',
    images: ['https://walits.com/blog/huma.jpg'],
  },
};

export default function HumaLayout({ children }: { children: React.ReactNode }) {
  return children;
}
