import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "메신저로 암호화폐 송금하기 | 카카오톡 텔레그램 지갑 | Walits",
  description: "카카오톡, 텔레그램 등 메신저로 암호화폐를 주고받는 방법. 대화하듯 송금하는 Auto Chat Wallet.",
  keywords: [
    "메신저 송금",
    "카카오톡 송금",
    "텔레그램 지갑",
    "암호화폐 송금",
    "메신저 지갑",
    "채팅 송금",
  ],
  authors: [{ name: "Walits Team" }],
  alternates: {
    canonical: "/blog/messenger-crypto-transfer",
  },
  openGraph: {
    title: "메신저로 암호화폐 송금하기",
    description: "카카오톡, 텔레그램 등 메신저로 암호화폐를 주고받는 방법",
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
