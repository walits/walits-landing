export const metadata = {
  title: '멀티 세션 오케스트레이션 하네스 — Claude Code 실전 튜토리얼 | Walits Blog',
  description: 'Claude Code 5가지 핵심 문제(세션 오염·알림 누락·맥락 유실·미검증 커밋·결과 고립)를 git worktree, Notification/Stop 훅, progress 파일, sub-agent 팀으로 해결하는 실전 하네스 구축 가이드.',
  openGraph: {
    title: '멀티 세션 오케스트레이션 하네스 — Claude Code 실전 튜토리얼',
    description: 'Claude Code 5가지 핵심 문제를 git worktree, hooks, progress 파일, Stop 게이트, sub-agent 팀으로 해결하는 실전 하네스 완전 가이드.',
    images: [{ url: 'https://walits.com/blog/harness.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
