import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Investor Relations | Walits - 기업용 가상자산 지갑 플랫폼',
  description: '2026년 암호화폐 시장의 4대 성장축을 겨냥한 Walits의 전략적 포트폴리오. Non-Custody, Custody, AI Chat, AI 토큰증권 지갑 서비스.',
  keywords: 'IR, 투자자 관계, Investor Relations, STO, RWA, 토큰증권, 암호화폐 지갑, Walits',
  openGraph: {
    title: 'Investor Relations | Walits',
    description: '2026년 암호화폐 시장의 4대 성장축을 겨냥한 전략적 포트폴리오',
    type: 'website',
    url: 'https://walits.com/ir',
  },
};

export default function IRLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
