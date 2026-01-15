import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "커뮤니티 에어드랍 대량 지급 가이드 | 1,000명 동시 배포 | Walits",
  description: "1,000명 유저에게 토큰 에어드랍을 한 번에 지급하는 방법. Virtual Balance 시스템으로 가스비 없이 즉시 배포하는 실전 가이드. NFT 에어드랍, 코인 에어드랍 활용법.",
  keywords: [
    "에어드랍",
    "토큰 에어드랍",
    "NFT 에어드랍",
    "대량 에어드랍",
    "코인 배포",
    "Virtual Balance",
    "가스비 없는 에어드랍",
    "커뮤니티 보상",
    "토큰 분배",
  ],
  authors: [{ name: "Walits Team" }],
  alternates: {
    canonical: "/blog/community-airdrop",
  },
  openGraph: {
    title: "커뮤니티 에어드랍 대량 지급 가이드 | 1,000명 동시 배포",
    description: "Virtual Balance로 1,000명에게 가스비 없이 즉시 토큰 에어드랍하는 실전 가이드",
    type: "article",
    publishedTime: "2024-12-14T00:00:00Z",
    authors: ["Walits Team"],
    url: "https://walits.com/blog/community-airdrop",
    images: [
      {
        url: "https://walits.com/blog/airdrop.jpg",
        width: 1200,
        height: 630,
        alt: "Community Airdrop Guide",
      },
    ],
  },
};

export default function AirdropLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
