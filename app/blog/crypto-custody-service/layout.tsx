import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "가상자산 수탁서비스 완벽 가이드 | MPC 2-of-3 커스터디 지갑 | Walits",
  description: "기업용 가상자산 수탁서비스의 모든 것. MPC 2-of-3 보안 기술, Omnibus 구조, 거래소 및 금융기관의 안전한 코인 보관 방법을 상세히 설명합니다. 특금법 준수, 커스터디 지갑 운영 실무까지.",
  keywords: [
    "가상자산 수탁",
    "커스터디 지갑",
    "MPC 지갑",
    "기업용 코인 보관",
    "암호화폐 수탁서비스",
    "MPC 2-of-3",
    "Omnibus 구조",
    "특금법 준수",
    "거래소 보안",
    "블록체인 보안",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "가상자산 수탁서비스 완벽 가이드 | MPC 2-of-3 커스터디 지갑",
    description: "MPC 2-of-3 보안 기술과 Omnibus 구조로 구현한 기업용 가상자산 수탁서비스 완벽 가이드",
    type: "article",
    publishedTime: "2024-12-12T00:00:00Z",
    authors: ["Walits Team"],
  },
};

export default function CustodyServiceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
