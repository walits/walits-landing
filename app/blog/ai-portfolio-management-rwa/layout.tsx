import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI 포트폴리오 자산 관리와 RWA | Walits",
  description: "AI가 RWA(Real World Assets) 포트폴리오를 자동으로 관리하고 최적화하는 시스템. 자산 토큰화와 AI 기반 자산 관리.",
  keywords: [
    "AI 포트폴리오",
    "RWA",
    "자산 관리",
    "토큰화",
    "AI 투자",
    "포트폴리오 관리",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "AI 포트폴리오 자산 관리와 RWA",
    description: "AI가 RWA 포트폴리오를 자동으로 관리하고 최적화하는 시스템",
    type: "article",
    publishedTime: "2026-01-12T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "https://walits.com/blog/ai-portfolio.jpg",
        width: 1200,
        height: 630,
        alt: "AI Portfolio Management RWA",
      },
    ],
  },
};

export default function AIPortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
