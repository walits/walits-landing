import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "자동 출석 보상 시스템 구축 가이드 | 매일 자정 리워드 배포 | Walits",
  description: "출석체크 시스템과 자동 보상 지급을 구현하는 완벽 가이드. 스케줄러와 Walits API로 매일 자정 자동으로 리워드를 배포하는 실전 코드와 구현 방법.",
  keywords: [
    "출석 보상",
    "자동 리워드",
    "출석체크",
    "일일 보상",
    "게임 출석",
    "자동 토큰 지급",
    "스케줄러",
    "리워드 시스템",
    "자동화",
  ],
  authors: [{ name: "Walits Team" }],
  openGraph: {
    title: "자동 출석 보상 시스템 구축 가이드 | 매일 자정 리워드 배포",
    description: "스케줄러와 API로 매일 자동으로 출석 보상을 지급하는 완벽한 시스템 구축 가이드",
    type: "article",
    publishedTime: "2024-12-13T00:00:00Z",
    authors: ["Walits Team"],
    images: [
      {
        url: "https://walits.com/blog/attendance.jpg",
        width: 1200,
        height: 630,
        alt: "Daily Attendance Rewards System",
      },
    ],
  },
};

export default function AttendanceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
