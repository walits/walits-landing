import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PayFi — 돈이 이동하는 모든 순간에 수익이 발생한다 | Walits',
  description: 'Payment Finance 완전 가이드. Lily Liu의 화폐 시간 가치 개념부터 Huma Finance, Ondo, Visa × Solana 파일럿까지. SWIFT 2~5일 대기를 2초로 단축하고 결제 대기 자금에서 이자를 발생시키는 새로운 금융 패러다임.',
  openGraph: {
    title: 'PayFi — 돈이 이동하는 모든 순간에 수익이 발생한다',
    description: 'Payment Finance 완전 가이드. SWIFT 2~5일 대기를 2초로 단축하고, 결제 대기 자금에서 이자를 발생시키는 새로운 금융 패러다임. Huma Finance · Ondo · Visa × Solana 파일럿 포함.',
    images: [{ url: 'https://walits.com/blog/payfi.jpg', width: 1200, height: 630, alt: 'PayFi — Payment Finance' }],
    type: 'article',
    siteName: 'Walits',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PayFi — 돈이 이동하는 모든 순간에 수익이 발생한다',
    description: 'Payment Finance 완전 가이드. SWIFT 2~5일 → 2초, 결제 중에도 이자 발생하는 새로운 금융 패러다임.',
    images: ['https://walits.com/blog/payfi.jpg'],
  },
};

export default function PayFiLayout({ children }: { children: React.ReactNode }) {
  return children;
}
