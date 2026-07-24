import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'x402 프로토콜 — AI 에이전트가 USDC로 API를 즉시 결제하는 새로운 인터넷 표준 | Walits',
  description: 'HTTP 402 Payment Required의 30년 만의 부활. Coinbase + Cloudflare가 만든 x402로 AI 에이전트가 계정 없이, 카드 없이 API 1건당 USDC로 즉시 결제. Base 체인 1.19억 건 처리, $6억 연간 볼륨. Walits와의 완벽한 인프라 호환성 분석.',
  openGraph: {
    title: 'x402 프로토콜 — AI 에이전트가 API를 USDC로 결제하는 새 인터넷 표준',
    description: 'HTTP 402의 부활. AI 에이전트 → 서버 402 응답 → USDC 결제 → 데이터 반환. Base + USDC가 레일. Walits 인프라와 100% 호환.',
    images: [{ url: 'https://walits.com/blog/x402.png', width: 1200, height: 630, alt: 'x402 Protocol AI Agent Payments' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'x402 프로토콜 — AI 에이전트가 USDC로 API를 즉시 결제',
    description: 'HTTP 402의 30년 만의 부활. Coinbase + Cloudflare, Base + USDC, 6만 9천 AI 에이전트.',
    images: ['https://walits.com/blog/x402.png'],
  },
};

export default function X402Layout({ children }: { children: React.ReactNode }) {
  return children;
}
