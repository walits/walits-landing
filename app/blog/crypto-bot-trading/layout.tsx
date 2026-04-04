export const metadata = {
  title: 'DeFi 시리즈 6 — 크립토 봇 트레이딩 실전 가이드: 펀딩비 차익·청산봇·CEX-DEX 차익 | Walits Blog',
  description: '실제로 만들 수 있는 크립토 봇 3가지. 펀딩비 차익(Python+ccxt), 신규 체인 청산봇(TypeScript+ethers.js), CEX-DEX 차익봇. 코드 포함 완전 실전 가이드.',
  openGraph: {
    title: 'DeFi 시리즈 6 — 크립토 봇 트레이딩 실전 가이드',
    description: '펀딩비 차익·청산봇·CEX-DEX 차익. 실제 코드로 배우는 크립토 봇 트레이딩.',
    images: [{ url: 'https://walits.com/blog/hustle.jpg', width: 1200, height: 630 }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
