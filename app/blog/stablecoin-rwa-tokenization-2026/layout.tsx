import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "2026년 미국 정부와 연준 & 스테이블코인과 RWA 토크나이제이션 전망 | Walits",
  description: "미국 부채 위기 속에서 펼쳐지는 스테이블코인 혁명과 자산 토큰화의 미래. GENIUS Act 시행과 연준-정부 갈등이 만들어갈 새로운 금융 질서를 분석합니다.",
  keywords: [
    "스테이블코인",
    "RWA",
    "토크나이제이션",
    "GENIUS Act",
    "미국 부채",
    "자산 토큰화",
    "연준",
  ],
  authors: [{ name: "Walits Team" }],
  alternates: {
    canonical: "/blog/stablecoin-rwa-tokenization-2026",
  },
  openGraph: {
    title: "2026년 미국 정부와 연준 & 스테이블코인과 RWA 토크나이제이션 전망",
    description: "미국 부채 위기 속에서 펼쳐지는 스테이블코인 혁명과 자산 토큰화의 미래를 분석합니다.",
    type: "article",
    publishedTime: "2026-01-15T00:00:00Z",
    authors: ["Walits Team"],
    url: "https://walits.com/blog/stablecoin-rwa-tokenization-2026",
    images: [
      {
        url: "https://walits.com/blog/tokenize.jpg",
        width: 1200,
        height: 630,
        alt: "Stablecoin and RWA Tokenization 2026",
      },
    ],
  },
};

export default function StablecoinRWALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
