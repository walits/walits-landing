import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'walits — PayFi + AI 에이전트 통합 아키텍처 완전 해부 | Walits',
  description: '잔고가 24시간 알아서 일하는 지갑. Idle Time 감지기, 투자 전략 프리셋(오렌지·애플·칠리), AI Agent 레이어, Turnkey MPC, PayFi 프로토콜 연동까지. walits의 전체 아키텍처를 코드 없이 완전 해부한다.',
  openGraph: {
    title: 'walits — PayFi + AI 에이전트 통합 아키텍처',
    description: '돈이 대기하는 모든 순간이 수익 기회. 오렌지·애플·칠리 프리셋으로 원클릭 자동 투자. walits 아키텍처 완전 해부.',
    images: [{ url: 'https://walits.com/blog/walits_payfi.jpg', width: 1200, height: 630, alt: 'walits PayFi + AI Agent Architecture' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'walits — PayFi + AI 에이전트 통합 아키텍처',
    description: '잔고가 24시간 알아서 일하는 지갑. Idle Time 제거 + 투자 프리셋 + 즉시 정산.',
    images: ['https://walits.com/blog/walits_payfi.jpg'],
  },
};

export default function WalitsPayfiArchitectureLayout({ children }: { children: React.ReactNode }) {
  return children;
}
