import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "MPC 지갑 보안 완벽 가이드 | 2-of-3 다중 승인 시스템 | Walits",
  description: "MPC(Multi-Party Computation) 지갑의 보안 원리와 2-of-3 다중 승인 시스템. ECDSA, EdDSA 암호화 기술과 실무 적용 방법.",
  keywords: [
    "MPC 지갑",
    "지갑 보안",
    "다중 승인",
    "2-of-3",
    "암호화폐 보안",
    "ECDSA",
    "EdDSA",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "MPC 지갑 보안 완벽 가이드 | 2-of-3 다중 승인 시스템",
    description: "MPC 지갑의 보안 원리와 2-of-3 다중 승인 시스템",
    type: "article",
    publishedTime: "2026-01-09T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "/blog/mpc-security.jpg",
        width: 1200,
        height: 630,
        alt: "MPC Wallet Security Guide",
      },
    ],
  },
};

export default function MPCSecurityLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
