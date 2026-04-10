import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ENPL — Earn Now Pay Later: 원금은 그대로, 이자로 결제한다 | Walits',
  description: 'BNPL의 역발상. 원금을 DeFi에 예치하고 매달 발생하는 이자로 구독료를 자동 결제한다. 원금 $39,107로 월 $183 구독료 100% 커버. walits ENPL Agent 실행 구조 완전 해부.',
  openGraph: {
    title: 'ENPL — Earn Now Pay Later: 이자로 결제하는 새로운 금융 구조',
    description: '부채 없이, 원금 소비 없이. 이자만으로 구독료를 결제하는 walits ENPL 완전 해부.',
    images: [{ url: 'https://walits.com/blog/walits-enpl.jpg', width: 1200, height: 630, alt: 'walits ENPL' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ENPL — 원금은 그대로, 이자로 결제',
    description: 'BNPL의 역발상. walits ENPL Agent로 구독료를 이자로 자동 결제하는 방법.',
    images: ['https://walits.com/blog/walits-enpl.jpg'],
  },
};

export default function WalitsEnplLayout({ children }: { children: React.ReactNode }) {
  return children;
}
