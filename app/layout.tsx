import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Walits - 기업용 가상자산 지갑 | 토큰증권 · 코인지갑 플랫폼",
  description: "기업용 가상자산 지갑, 토큰증권 거래, 코인지갑 플랫폼. Non-Custody API 대량 지급, MPC Custody 안전 보관, AI 로보어드바이저, 토큰증권(ST) 지갑. 블록체인 지갑 솔루션의 모든 것.",
  keywords: [
    "토큰증권",
    "가상자산지갑",
    "코인지갑",
    "기업용 코인 지갑",
    "암호화폐 지갑",
    "블록체인 지갑",
    "디지털 자산 지갑",
    "크립토 지갑",
    "MPC 지갑",
    "커스터디 지갑",
    "논커스터디 지갑",
    "Non-Custody 지갑",
    "Custody 지갑",
    "증권형 토큰",
    "ST 지갑",
    "STO 지갑",
    "AI 로보어드바이저",
    "가상자산 보관",
    "암호화폐 수탁",
    "블록체인 API",
    "NFT 지갑",
    "Web3 지갑",
    "기업용 암호화폐 솔루션",
    "디지털 자산 관리",
    "토큰 지급",
    "에어드랍",
    "게임 리워드",
  ],
  authors: [{ name: "Walits" }],
  creator: "Walits",
  publisher: "Walits",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://walits.com"),
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://walits.com",
    title: "Walits - 기업용 가상자산 지갑 | 토큰증권 · 코인지갑 플랫폼",
    description: "기업용 가상자산 지갑, 토큰증권 거래, 코인지갑 플랫폼. Non-Custody API 대량 지급, MPC Custody 안전 보관, AI 로보어드바이저, 토큰증권(ST) 지갑",
    siteName: "Walits",
  },
  twitter: {
    card: "summary_large_image",
    title: "Walits - 기업용 가상자산 지갑 | 토큰증권 · 코인지갑 플랫폼",
    description: "기업용 가상자산 지갑, 토큰증권 거래, 코인지갑 플랫폼. Non-Custody API 대량 지급, MPC Custody 안전 보관",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "google-site-verification-code",
    other: {
      naver: "naver-site-verification-code",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
