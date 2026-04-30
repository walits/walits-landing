import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CCTP 브릿지 안정성 — 서버 크래시에도 USDC를 잃지 않는 설계 | Walits',
  description: 'Circle CCTP로 USDC 브릿지를 구현할 때 서버 크래시로 자금을 잃는 것을 막는 방법. broadcast 전 txHash 저장, onModuleInit 자동 복구, Circle IRIS API 수동 복구까지.',
  openGraph: {
    title: 'CCTP 브릿지 안정성 — 서버 크래시에도 USDC를 잃지 않는 설계',
    description: 'broadcast 전 keccak256(signedTx) 저장 → 서버 재시작 시 자동 복구. CCTP burn & mint 내결함성 설계 완전 해부.',
    images: [{ url: 'https://walits.com/blog/cctp-bridge.jpg', width: 1200, height: 630, alt: 'CCTP Bridge Reliability Design' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CCTP 브릿지 안정성 — 크래시에도 USDC 안전한 설계',
    description: 'broadcast 전 txHash 저장 + onModuleInit 자동 복구. Circle CCTP 내결함성 패턴.',
    images: ['https://walits.com/blog/cctp-bridge.jpg'],
  },
};

export default function CctpBridgeReliabilityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
