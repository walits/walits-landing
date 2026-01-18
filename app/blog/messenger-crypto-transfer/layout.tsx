import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "메신저처럼 쉽게 암호화폐 송금하기 | Walits 메신저 지갑",
  description: "Walits 메신저 기능으로 대화하듯 암호화폐를 주고받는 방법. 쉽고 빠른 송금, AI Chat Wallet.",
  keywords: [
    "메신저 송금",
    "Walits 메신저",
    "암호화폐 송금",
    "메신저 지갑",
    "채팅 송금",
    "AI Chat Wallet",
  ],
  authors: [{ name: "Walits Team" }],
  alternates: {
    canonical: "/blog/messenger-crypto-transfer",
  },
  openGraph: {
    title: "메신저처럼 쉽게 암호화폐 송금하기",
    description: "Walits 메신저 기능으로 대화하듯 암호화폐를 주고받는 방법",
    type: "article",
    publishedTime: "2026-01-10T00:00:00Z",
    authors: ["Walits Team"],
    url: "https://walits.com/blog/messenger-crypto-transfer",
    images: [
      {
        url: "https://walits.com/blog/messenger-transfer.jpg",
        width: 1200,
        height: 630,
        alt: "Messenger Crypto Transfer",
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
