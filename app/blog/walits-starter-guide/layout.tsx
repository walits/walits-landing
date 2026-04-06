import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Walits 스타터 가이드 — 개인용 USDC 전문 지갑 완전 입문 | Walits',
  description: '로그인 후 UI/UX 설계, 지갑 생성 기술(HD Wallet vs MPC vs Coinbase CDP), USDC 충전 방법(거래소·MetaMask·온램프·CCTP) 완전 가이드. walits 개인용 USDC 전문 지갑을 처음 쓰는 모든 것.',
  openGraph: {
    title: 'Walits 스타터 가이드 — 개인용 USDC 전문 지갑',
    description: 'HD Wallet vs MPC vs Coinbase CDP 비교. 거래소·MetaMask·온램프·CCTP로 USDC 채우기. walits 로그인 후 UX 완전 해부.',
    images: [{ url: 'https://walits.com/blog/walits_usdc.jpg', width: 1200, height: 630, alt: 'Walits Starter Guide' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Walits 스타터 가이드 — 개인용 USDC 전문 지갑',
    description: '지갑 기술 선택 · USDC 충전 방법 · 로그인 후 UX. walits 완전 입문.',
    images: ['https://walits.com/blog/walits_usdc.jpg'],
  },
};

export default function WalitsStarterGuideLayout({ children }: { children: React.ReactNode }) {
  return children;
}
