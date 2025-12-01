import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blockbit - Enterprise Crypto Wallet Platform",
  description: "B2C와 B2B를 위한 엔터프라이즈급 암호화폐 지갑 플랫폼",
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
