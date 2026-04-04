export const metadata = {
  title: 'DeFi 시리즈 3 - 1inch: DEX 애그리게이터 완전 튜토리얼 | Walits Blog',
  description: '100개 이상의 DEX를 실시간 스캔해 최적 경로를 찾는 1inch. Pathfinder 라우팅 알고리즘, 스플릿 라우팅, Fusion Mode 가스리스 스왑, Limit Order까지. 1inch의 모든 것을 튜토리얼 형식으로 완전 해부한다.',
  openGraph: {
    title: 'DeFi 시리즈 3 - 1inch: DEX 애그리게이터 완전 튜토리얼',
    description: 'Pathfinder 라우팅, 스플릿 실행, Fusion Mode, Limit Order — 1inch의 모든 기능을 튜토리얼로 해부한다.',
    images: [{ url: 'https://walits.com/blog/1inch.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
