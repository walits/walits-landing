import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Walits 블로그 | 가상자산 지갑 가이드 및 사용 사례",
  description: "기업용 가상자산 지갑, 코인지갑, 토큰증권 솔루션에 대한 실무 가이드와 사용 사례. Non-Custody 지갑 API 활용법, MPC Custody 보안, 블록체인 지갑 운영 노하우를 공유합니다.",
  keywords: [
    "가상자산 지갑 가이드",
    "코인지갑 사용법",
    "기업용 블록체인",
    "Non-Custody 지갑",
    "Custody 지갑",
    "가상자산 수탁",
    "MPC 보안",
    "게임 리워드",
    "에어드랍",
    "NFT 배포",
  ],
  openGraph: {
    title: "Walits 블로그 | 가상자산 지갑 가이드",
    description: "기업용 가상자산 지갑 솔루션 실무 가이드 및 사용 사례",
    type: "website",
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
