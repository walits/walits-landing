import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "범죄 압수 코인을 보관하기 위한 국가기관용 커스터디지갑 | Walits",
  description: "강남서 22BTC 유출, 국세청 69억 탈취까지. Walits 리서치팀이 분석한 한국 압수 가상자산 보안의 3가지 구조적 결함과 MPC·HSM·SSS 기반 10가지 실질적 처방.",
  keywords: [
    "압수 가상자산 보안",
    "MPC 커스터디",
    "국세청 가상자산",
    "압류 비트코인",
    "Shamir Secret Sharing",
    "디지털 자산 보안",
    "Multi-Sig",
    "에어갭 HSM",
  ],
  authors: [{ name: "Walits 리서치팀" }],
  alternates: {
    canonical: "/blog/non-custody-vs-custody-wallet",
  },
  openGraph: {
    title: "범죄 압수 코인을 보관하기 위한 국가기관용 커스터디지갑",
    description: "강남서 22BTC 유출, 국세청 69억 탈취. 한국 압수 코인 보안 결함의 구조적 원인과 커스터디 전문가의 10가지 처방.",
    type: "article",
    publishedTime: "2026-03-10T00:00:00Z",
    authors: ["Walits 리서치팀"],
    url: "https://walits.com/blog/non-custody-vs-custody-wallet",
    images: [
      {
        url: "https://walits.com/blog/wallet-comparison.jpg",
        width: 1200,
        height: 630,
        alt: "한국 압수 가상자산 보안 처방",
      },
    ],
  },
};

export default function SeizedCryptoManagementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
