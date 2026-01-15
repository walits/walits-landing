import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "게임 이벤트 보상 지급 API 가이드 | Non-Custody 지갑 활용법 | Walits",
  description: "게임 이벤트 보상을 API로 대량 지급하는 방법. Non-Custody 지갑으로 500명 유저에게 GameCoin 토큰을 즉시 배포하는 실제 코드 예제와 구현 가이드.",
  keywords: [
    "게임 보상 지급",
    "게임 리워드",
    "게임 토큰 배포",
    "Non-Custody API",
    "대량 토큰 지급",
    "게임 이벤트",
    "블록체인 게임",
    "NFT 게임",
    "게임 코인",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "게임 이벤트 보상 지급 API 가이드 | Non-Custody 지갑",
    description: "API로 게임 보상을 대량 지급하는 실전 가이드. 단 몇 줄의 코드로 500명에게 토큰 배포",
    type: "article",
    publishedTime: "2024-12-15T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "https://walits.com/blog/game-rewards.jpg",
        width: 1200,
        height: 630,
        alt: "Game Event Rewards Guide",
      },
    ],
  },
};

export default function GameRewardsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
