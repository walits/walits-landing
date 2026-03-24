export const metadata = {
  title: 'DeFi 시리즈 1 - AAVE: DeFi 최대 렌딩 프로토콜 완전 해부 | Walits Blog',
  description: 'Aave가 어떻게 담보 없이 대출을 제공하고, aToken이 어떻게 이자를 자동으로 쌓는지, 플래시론·청산·GHO 스테이블코인까지. Aave v3의 모든 기능을 온체인 구조와 함께 완전 해부한다.',
  openGraph: {
    title: 'DeFi 시리즈 1 - AAVE: DeFi 최대 렌딩 프로토콜 완전 해부',
    description: 'Aave가 어떻게 담보 없이 대출을 제공하고, aToken이 어떻게 이자를 자동으로 쌓는지, 플래시론·청산·GHO 스테이블코인까지. Aave v3의 모든 기능을 완전 해부한다.',
    images: ['/blog/aave.jpg'],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
