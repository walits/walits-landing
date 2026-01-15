import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "기업용 가상자산 지갑 도입 가이드 | Walits",
  description: "기업이 가상자산 지갑을 도입할 때 고려해야 할 모든 것. Non-Custody vs Custody 선택, 보안, 규제 준수까지.",
  keywords: [
    "기업용 지갑",
    "가상자산 지갑",
    "암호화폐 지갑",
    "기업 블록체인",
    "지갑 도입",
    "커스터디 지갑",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "기업용 가상자산 지갑 도입 가이드",
    description: "기업이 가상자산 지갑을 도입할 때 고려해야 할 모든 것",
    type: "article",
    publishedTime: "2026-01-13T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "/blog/enterprise-wallet.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Crypto Wallet Guide",
      },
    ],
  },
};

export default function EnterpriseWalletLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
