import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "스테이블 코인을 위한 합리적 지갑 서비스 | Walits",
  description: "ERC-4337 계정 추상화(Account Abstraction)와 Paymaster로 구현하는 가스리스 USDC 지갑. 주식 앱이 아닌 진짜 지갑이 되는 기술적 혁신.",
  keywords: [
    "ERC-4337",
    "Account Abstraction",
    "계정 추상화",
    "Paymaster",
    "스테이블코인 지갑",
    "USDC 결제",
    "가스리스",
    "UserOperation",
    "Bundler",
    "스마트 컨트랙트 지갑",
    "합리적 지갑",
    "Walits",
  ],
  authors: [{ name: "Walits Team" }],
  alternates: {
    canonical: "/blog/stablecoin-wallet-erc4337",
  },
  openGraph: {
    title: "스테이블 코인을 위한 합리적 지갑 서비스",
    description: "ERC-4337 Paymaster로 USDC만 있으면 가스비 걱정 없이 실생활에서 쓰는 진짜 지갑",
    type: "article",
    publishedTime: "2026-03-09T00:00:00Z",
    authors: ["Walits Team"],
    url: "https://walits.com/blog/stablecoin-wallet-erc4337",
    images: [
      {
        url: "https://walits.com/blog/messenger-transfer.jpg",
        width: 1200,
        height: 630,
        alt: "스테이블코인 지갑 ERC-4337",
      },
    ],
  },
};

export default function MessengerTransferLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
