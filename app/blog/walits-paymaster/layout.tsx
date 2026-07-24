import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walits 가스리스 USDC — EIP-3009 릴레이어로 ETH 없이 전송하는 방법 | Walits',
  description: 'ETH 없어도 된다. Walits EIP-3009 릴레이어가 가스비를 대납한다. 사용자는 서명만 — 릴레이어가 블록체인에 제출. x402 AI 에이전트 결제에도 바로 적용. ERC-4337 Paymaster 로드맵까지.',
  openGraph: {
    title: 'Walits 가스리스 USDC — EIP-3009 릴레이어, ETH 없이 서명 하나로 전송',
    description: '사용자 서명 → Walits 릴레이어가 가스 대납 → USDC 전송 완료. x402 AI 에이전트 결제에도 바로 연결 가능.',
    images: [{ url: 'https://walits.com/blog/x402.png', width: 1200, height: 630, alt: 'Walits Gasless USDC EIP-3009 Relayer' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walits 가스리스 USDC — EIP-3009 릴레이어로 ETH 없이 전송',
    description: '서명만 하면 릴레이어가 가스 냄. x402 에이전트 결제 연동. ERC-4337 Paymaster 로드맵.',
    images: ['https://walits.com/blog/x402.png'],
  },
};

export default function WalitsPaymasterLayout({ children }: { children: React.ReactNode }) {
  return children;
}
