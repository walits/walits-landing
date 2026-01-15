import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Non-Custody vs Custody 지갑 비교 가이드 | 3가지 운영 모드 | Walits",
  description: "Non-Custody와 Custody 지갑의 차이점과 3가지 운영 모드. 시나리오별 선택 가이드와 실무 활용법.",
  keywords: [
    "Non-Custody",
    "Custody",
    "지갑 비교",
    "운영 모드",
    "기업 지갑",
    "지갑 선택",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "Non-Custody vs Custody 지갑 비교 가이드",
    description: "Non-Custody와 Custody 지갑의 차이점과 3가지 운영 모드",
    type: "article",
    publishedTime: "2026-01-08T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "https://walits.com/blog/wallet-comparison.jpg",
        width: 1200,
        height: 630,
        alt: "Non-Custody vs Custody Wallet Comparison",
      },
    ],
  },
};

export default function WalletComparisonLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
