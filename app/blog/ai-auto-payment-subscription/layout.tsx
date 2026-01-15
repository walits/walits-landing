import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 자동 결제로 구독료 관리하기 | Walits",
  description: "AI가 자동으로 구독료를 관리하고 결제하는 시스템. 스마트 컨트랙트와 AI를 활용한 자동 결제 솔루션.",
  keywords: [
    "AI 자동 결제",
    "구독료 관리",
    "스마트 컨트랙트",
    "자동 결제 시스템",
    "구독 관리",
    "AI 결제",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "AI 자동 결제로 구독료 관리하기",
    description: "AI가 자동으로 구독료를 관리하고 결제하는 시스템",
    type: "article",
    publishedTime: "2026-01-11T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "/blog/ai-payment.jpg",
        width: 1200,
        height: 630,
        alt: "AI Auto Payment Subscription",
      },
    ],
  },
};

export default function AIAutoPaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
