export const metadata = {
  title: '실전 예제로 배우는 멀티 세션 하네스 — PayLink 만들기 | Walits Blog',
  description: 'USDC 결제 링크 서비스 PayLink를 Claude Code 세 세션으로 병렬 개발하면서 worktree·알림·맥락 이월·검증 게이트·세션 간 메시징 하네스를 직접 설치하고 개선하는 실전 튜토리얼.',
  openGraph: {
    title: '실전 예제로 배우는 멀티 세션 하네스 — PayLink 만들기',
    description: 'USDC 결제 링크 서비스 PayLink를 Claude Code 3세션 병렬 개발로 만들며 멀티 세션 하네스 5종을 실전 체험. Step 0~7 완전 가이드.',
    images: [{ url: 'https://walits.com/blog/payment.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
