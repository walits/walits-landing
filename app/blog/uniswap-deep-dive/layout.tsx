export const metadata = {
  title: 'DeFi 시리즈 2 - Uniswap: AMM과 유동성 혁명 완전 해부 | Walits Blog',
  description: 'x*y=k 공식 하나로 금융을 재정의한 Uniswap. v1의 탄생부터 v2의 완성, v3 집중 유동성 혁명, v4 훅 아키텍처까지. AMM이 어떻게 작동하고, LP는 어떻게 수익을 내며, 비영구 손실은 왜 발생하는지 완전 해부한다.',
  openGraph: {
    title: 'DeFi 시리즈 2 - Uniswap: AMM과 유동성 혁명 완전 해부',
    description: 'x*y=k 공식 하나로 금융을 재정의한 Uniswap. v1~v4 전체 아키텍처, 집중 유동성, 비영구 손실, 수수료 구조를 완전 해부한다.',
    images: [{ url: 'https://walits.com/blog/uniswap.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
