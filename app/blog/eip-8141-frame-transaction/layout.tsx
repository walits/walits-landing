import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'EIP-8141 Frame Transaction 완전 해부 — EIP-86에서 시작된 9년짜리 Account Abstraction 완성판 | Walits',
  description: 'EIP-86 → ERC-4337 → EIP-3074 → EIP-7702 → EIP-8141. 이더리움 Account Abstraction의 전체 계보를 개발자 눈높이로 해부한다. Frame Transaction의 새 tx 타입, APPROVE/TXPARAM/FRAMEPARAM 오퍼코드, 멀티 서명 체계, 원자적 배칭, 포스트 퀀텀 로드맵까지.',
  openGraph: {
    title: 'EIP-8141 Frame Transaction 완전 해부 — 이더리움 AA 완성판',
    description: 'EIP-86 → ERC-4337 → EIP-3074 → EIP-7702 → EIP-8141. 9년짜리 Account Abstraction의 종착점.',
    images: ['https://walits.com/blog/eip8141.jpg'],
    type: 'article',
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
