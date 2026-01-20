import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자동 보상 지급 시스템 완벽 가이드 | API로 리워드 배포하기 | Walits",
  description: "게임, 커뮤니티, 출석 등 다양한 시나리오에서 자동으로 보상을 지급하는 방법. Non-Custody 지갑 API로 가스비 없이 즉시 리워드를 배포하는 실전 가이드.",
  keywords: [
    "자동 보상 지급",
    "게임 보상",
    "커뮤니티 리워드",
    "출석 보상",
    "소셜 리워드",
    "Non-Custody API",
    "토큰 배포",
    "게임 이벤트",
    "자동화",
    "리워드 시스템",
  ],
  authors: [{ name: "Walits Team" }],
  alternates: {
    canonical: "/blog/automated-reward-distribution",
  },
  openGraph: {
    title: "자동 보상 지급 시스템 완벽 가이드 | API로 리워드 배포하기",
    description: "게임, 커뮤니티, 출석 등 다양한 시나리오에서 자동으로 보상을 지급하는 실전 가이드",
    type: "article",
    publishedTime: "2024-12-15T00:00:00Z",
    authors: ["Walits Team"],
    url: "https://walits.com/blog/automated-reward-distribution",
    images: [
      {
        url: "https://walits.com/blog/game-rewards.jpg",
        width: 1200,
        height: 630,
        alt: "Automated Reward Distribution Guide",
      },
    ],
  },
};

export default function AutomatedRewardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
