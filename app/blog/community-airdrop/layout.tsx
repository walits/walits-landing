import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "코인 과세 유예는 끝났다: 국세청 가상자산 통합분석 시스템 완전 해부 | Walits",
  description: "2027년 1월 가상자산 양도소득세 시행을 앞두고 국세청이 구축 중인 통합분석 시스템의 작동 방식, 기술적 한계, 합법적 절세 전략을 완전 해부합니다.",
  keywords: [
    "가상자산 세금",
    "코인 양도소득세",
    "국세청 가상자산",
    "가상자산 통합분석 시스템",
    "코인 과세",
    "블록체인 세금",
    "가상자산 절세",
    "코인 탈세",
    "VASP 보고",
    "가상자산 취득가액",
  ],
  authors: [{ name: "Walits Team" }],
  alternates: {
    canonical: "/blog/community-airdrop",
  },
  openGraph: {
    title: "코인 과세 유예는 끝났다: 국세청 가상자산 통합분석 시스템 완전 해부",
    description: "2027년 1월 가상자산 양도소득세 시행을 앞두고 국세청 감시 시스템의 작동 방식과 합법적 대응 전략을 해부합니다.",
    type: "article",
    publishedTime: "2026-03-12T00:00:00Z",
    authors: ["Walits Team"],
    url: "https://walits.com/blog/community-airdrop",
    images: [
      {
        url: "https://walits.com/blog/airdrop.jpg",
        width: 1200,
        height: 630,
        alt: "국세청 가상자산 통합분석 시스템",
      },
    ],
  },
};

export default function CryptoTaxLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
