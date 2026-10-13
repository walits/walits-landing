export const metadata = {
  title: '지렁이 게임으로 배우는 Claude Code 하네스 — 실전 예제 | Walits Blog',
  description: 'worktree 격리, progress 파일, investigator/reviewer 에이전트, Stop 게이트까지 — 지렁이 게임을 만들면서 멀티 세션 하네스를 실전으로 체험한다. HTML5 Canvas 완성 코드 포함.',
  openGraph: {
    title: '지렁이 게임으로 배우는 Claude Code 하네스 — 실전 예제',
    description: '실제 게임을 만들면서 git worktree, Notification/Stop 훅, 에이전트 팀이 어떻게 개발 속도를 높이는지 단계별로 보여준다. 완성 코드 포함.',
    images: [{ url: 'https://walits.com/blog/game-rewards.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
