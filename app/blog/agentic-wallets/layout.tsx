import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Agentic Wallets — AI 에이전트가 스스로 결제하는 시대 | Walits',
  description: 'Coinbase Agentic Wallets와 AgentKit 완전 가이드. AI 에이전트 전용 지갑 인프라, AgentKit vs Agentic Wallets 비교, 온체인 AI 에이전트 아키텍처, 스테이블코인 지갑 연계까지.',
  openGraph: {
    title: 'Agentic Wallets — AI 에이전트가 스스로 결제하는 시대',
    description: 'Coinbase가 만든 AI 에이전트 전용 지갑 인프라. AgentKit과 Agentic Wallets의 차이, 온체인 AI 에이전트 아키텍처, USDC 4.1% 리워드 및 수수료 없는 글로벌 송금.',
    images: [{ url: 'https://walits.com/blog/agent.jpg', width: 1200, height: 630, alt: 'Agentic Wallets — AI × Web3' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agentic Wallets — AI 에이전트가 스스로 결제하는 시대',
    description: 'Coinbase AgentKit + Agentic Wallets 완전 가이드. AI가 직접 결제하는 시대의 인프라.',
    images: ['https://walits.com/blog/agent.jpg'],
  },
};

export default function AgenticWalletsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
