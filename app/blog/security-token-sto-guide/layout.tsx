import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "STO 증권형 토큰 발행 가이드 | Security Token Offering | Walits",
  description: "STO(Security Token Offering) 증권형 토큰 발행 완벽 가이드. ICO vs STO 비교, 규제 준수, 발행 절차까지.",
  keywords: [
    "STO",
    "증권형 토큰",
    "Security Token",
    "토큰 발행",
    "ICO",
    "자산 토큰화",
    "증권 토큰",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "STO 증권형 토큰 발행 가이드",
    description: "STO 증권형 토큰 발행 완벽 가이드. ICO vs STO 비교와 규제 준수",
    type: "article",
    publishedTime: "2026-01-07T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "https://walits.com/blog/sto-guide.jpg",
        width: 1200,
        height: 630,
        alt: "STO Security Token Offering Guide",
      },
    ],
  },
};

export default function STOGuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
