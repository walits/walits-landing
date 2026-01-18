'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function DailyAttendancePost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'Non-Custody 사용 사례',
      title: '매일 자정, 자동으로 출석 보상 지급하기',
      date: '2024년 12월 13일',
      readTime: '6분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Non-Custody Use Case',
      title: 'Auto-Distribute Attendance Rewards Daily at Midnight',
      date: 'December 13, 2024',
      readTime: '6 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Walits Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Walits</span>
            </Link>
            <div className="flex items-center gap-2">
              <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded ${language === 'ko' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>한</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>EN</button>
            </div>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-medium mb-4">
            {copy.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            {copy.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <span>{copy.date}</span>
            <span>•</span>
            <span>{copy.readTime}</span>
          </div>
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  게임이나 앱에서 유저 리텐션을 높이는 가장 효과적인 방법 중 하나가 바로 출석 체크 시스템입니다.
                  매일 접속한 유저에게 작은 보상을 주는 것만으로도 습관적인 방문을 유도할 수 있죠.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  하지만 매일 자정마다 수천 명의 유저에게 자동으로 보상을 지급하는 건 생각보다 복잡합니다.
                  블록체인 트랜잭션을 수천 개 처리하려면 천문학적인 가스비가 발생하고, 실패 위험도 높습니다.
                  Walits Non-Custody와 Cron Job을 결합하면 이 모든 과정이 완전히 자동화되고, 가스비는 0원입니다.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">실제 시나리오: 모바일 RPG "Dragon Quest Mobile"</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  "Dragon Quest Mobile"은 일일 활성 사용자(DAU) 5,000명의 모바일 RPG 게임입니다.
                  매일 자정(00:00)에 당일 출석 체크한 유저들에게 자동으로 연속 출석 일수에 따라 보상을 지급합니다.
                  평균적으로 매일 3,500명이 출석 체크를 합니다.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">출석 보상 체계</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>1일차: 10 Gold</li>
                    <li>3일 연속: 30 Gold + 5 Potion</li>
                    <li>7일 연속: 100 Gold + 10 Potion + Rare Item Box</li>
                    <li>14일 연속: 250 Gold + Epic Weapon</li>
                    <li>30일 연속: 1,000 Gold + Legendary Armor + Exclusive Title</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                    * 연속 출석이 끊기면 1일차부터 다시 시작
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">온체인 방식의 한계</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 매일 발생하는 막대한 가스비</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    3,500명에게 매일 보상을 지급한다면, 월 가스비는 감당하기 어려운 수준입니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">월간 가스비 계산 (Polygon 기준):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>일일 출석자: 3,500명</li>
                      <li>ERC-20 전송 가스: 50,000 gas (Polygon 최적화)</li>
                      <li>Gas Price: 30 gwei</li>
                      <li>1일 가스비: 3,500 × 0.0015 MATIC = 5.25 MATIC = 약 $4</li>
                      <li>월 가스비 (30일): 157.5 MATIC = 약 $120</li>
                      <li>연간 가스비: 1,890 MATIC = 약 $1,440</li>
                    </ul>
                    <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                      * Ethereum 메인넷이라면 월 가스비가 $5,000 이상으로 급증합니다!
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 자동화 구현의 복잡도</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 자정에 자동으로 실행되는 시스템을 구축하려면 다양한 기술 스택이 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Cron 서버 구축 및 관리</li>
                      <li>Web3 트랜잭션 스크립트 작성</li>
                      <li>논스 충돌 방지 로직</li>
                      <li>실패 트랜잭션 재시도 메커니즘</li>
                      <li>출석 일수 추적 데이터베이스</li>
                      <li>로그 및 모니터링 시스템</li>
                      <li>개발 + 유지보수 비용: 월 $2,000-3,000</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 운영 리스크</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 자동으로 실행되므로, 단 한 번의 실패도 수천 명의 유저 불만으로 이어집니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>네트워크 혼잡으로 인한 지연</li>
                      <li>RPC 노드 다운타임</li>
                      <li>스크립트 오류로 인한 중복 지급 또는 누락</li>
                      <li>연속 출석 일수 계산 오류</li>
                      <li>24/7 모니터링 필요</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Walits + Cron Job으로 완전 자동화</h2>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. 출석 데이터 DB 설계</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    유저별 출석 기록을 추적하는 테이블을 만듭니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. 출석 체크 API 구현</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    유저가 게임에 로그인할 때 출석 체크 버튼을 누르면 호출되는 API입니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Cron Job 설정 (매일 자정 실행)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 자정 00:05에 실행되어 당일 출석한 모든 유저에게 보상을 지급합니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. 모니터링 및 알림</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 실행 결과를 슬랙으로 받아 문제가 있으면 즉시 대응합니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">고급 기능: 차등 보상 및 NFT 지급</h2>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  30일 연속 출석자에게는 Gold 외에 NFT 아이템(Legendary Armor)도 함께 지급하고 싶다면?
                  Walits는 FT(Fungible Token)와 NFT(Non-Fungible Token)를 동시에 지급할 수 있습니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">ROI 분석: 출석 시스템의 효과</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">지표</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">도입 전</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">도입 후 (3개월)</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">개선율</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">DAU (일일 활성 사용자)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">3,200명</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">5,000명</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+56%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">7일 리텐션</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">28%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">52%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+86%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">30일 리텐션</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">12%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">35%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+192%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">평균 세션 길이</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">18분</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">27분</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+50%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">월 가스비</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0 (Walits)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">절감액 $120</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Best Practices</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 보상 밸런스 조정</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>초반 보상(1-7일)은 낮게, 후반 보상(14-30일)은 매력적으로 설정</li>
                    <li>7일, 14일, 30일 단계에 "큰 보상" 배치로 목표 부여</li>
                    <li>게임 내 경제에 미치는 영향 모니터링 및 조정</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 유저 피드백 수집</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>출석 UI에 "다음 보상 미리보기" 표시로 동기부여</li>
                    <li>연속 출석이 끊겼을 때 "복구권" 아이템 판매 (수익화)</li>
                    <li>월간 최다 출석자 리더보드로 경쟁 유도</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 장애 대비</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Idempotency Key 사용으로 중복 지급 방지</li>
                    <li>Cron Job 실패 시 자동 재시도 (최대 3회)</li>
                    <li>슬랙 알림으로 운영팀에 즉시 통보</li>
                    <li>수동 보상 지급 API 준비 (긴급 상황 대비)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  크리스마스 이벤트를 성공적으로 마무리하고 싶다면 지금 시작하세요.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  시작하기 →
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="mb-12">
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
                  One of the most effective ways to increase user retention in games or apps is the attendance check system.
                  Just giving small rewards to users who log in daily can encourage habitual visits.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  However, automatically distributing rewards to thousands of users every midnight is more complex than it seems.
                  Processing thousands of blockchain transactions would incur astronomical gas fees, and the risk of failure is high.
                  Combining Walits Non-Custody with Cron Job completely automates this entire process, and gas fees are zero.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real Scenario: Mobile RPG "Dragon Quest Mobile"</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  "Dragon Quest Mobile" is a mobile RPG game with 5,000 daily active users (DAU).
                  Every day at midnight (00:00), rewards are automatically distributed to users who checked in that day, based on their consecutive attendance days.
                  On average, 3,500 people check in daily.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Attendance Reward System</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Day 1: 10 Gold</li>
                    <li>3 days consecutive: 30 Gold + 5 Potion</li>
                    <li>7 days consecutive: 100 Gold + 10 Potion + Rare Item Box</li>
                    <li>14 days consecutive: 250 Gold + Epic Weapon</li>
                    <li>30 days consecutive: 1,000 Gold + Legendary Armor + Exclusive Title</li>
                  </ul>
                  <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                    * If consecutive attendance is broken, it restarts from day 1
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Limitations of On-Chain Approach</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. Massive Daily Gas Fees</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    If you distribute rewards to 3,500 people daily, monthly gas fees become unbearable.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">Monthly Gas Fee Calculation (Based on Polygon):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Daily attendees: 3,500 people</li>
                      <li>ERC-20 transfer gas: 50,000 gas (Polygon optimized)</li>
                      <li>Gas Price: 30 gwei</li>
                      <li>Daily gas fee: 3,500 × 0.0015 MATIC = 5.25 MATIC = approx. $4</li>
                      <li>Monthly gas fee (30 days): 157.5 MATIC = approx. $120</li>
                      <li>Annual gas fee: 1,890 MATIC = approx. $1,440</li>
                    </ul>
                    <p className="text-xs mt-2 text-gray-500 dark:text-gray-400">
                      * On Ethereum mainnet, monthly gas fees would skyrocket to over $5,000!
                    </p>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. Complex Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Building a system that runs automatically every midnight requires various tech stacks.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Cron server setup and management</li>
                      <li>Web3 transaction script development</li>
                      <li>Nonce collision prevention logic</li>
                      <li>Failed transaction retry mechanism</li>
                      <li>Attendance day tracking database</li>
                      <li>Logging and monitoring system</li>
                      <li>Development + maintenance cost: $2,000-3,000 per month</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. Operational Risks</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Since it runs automatically every day, even a single failure leads to thousands of user complaints.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Delays due to network congestion</li>
                      <li>RPC node downtime</li>
                      <li>Duplicate payments or omissions due to script errors</li>
                      <li>Consecutive attendance day calculation errors</li>
                      <li>24/7 monitoring required</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Full Automation with Walits + Cron Job</h2>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. Attendance Data DB Design</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Create a table to track attendance records per user.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. Attendance Check API Implementation</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    API called when users press the attendance check button when logging into the game.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Cron Job Setup (Daily Midnight Execution)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Runs at 00:05 every midnight to distribute rewards to all users who attended that day.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. Monitoring and Notifications</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Receive daily execution results via Slack and respond immediately if there are issues.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Advanced Features: Tiered Rewards and NFT Distribution</h2>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Want to give 30-day consecutive attendees not only Gold but also NFT items (Legendary Armor)?
                  Walits can distribute both FT (Fungible Token) and NFT (Non-Fungible Token) simultaneously.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">ROI Analysis: Effect of Attendance System</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Metric</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Before Introduction</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">After 3 Months</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Improvement</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">DAU (Daily Active Users)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">3,200</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">5,000</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+56%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">7-Day Retention</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">28%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">52%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+86%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">30-Day Retention</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">12%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">35%</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+192%</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Avg Session Length</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">18 min</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">27 min</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">+50%</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Monthly Gas Fee</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0 (Walits)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">Saved $120</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Best Practices</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. Reward Balance Adjustment</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Set early rewards (1-7 days) low, late rewards (14-30 days) attractive</li>
                    <li>Place "big rewards" at 7, 14, and 30-day milestones to provide goals</li>
                    <li>Monitor and adjust impact on in-game economy</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. User Feedback Collection</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Display "next reward preview" in attendance UI for motivation</li>
                    <li>Sell "recovery ticket" items when consecutive attendance breaks (monetization)</li>
                    <li>Create monthly top attendance leaderboard to encourage competition</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. Failure Prevention</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Use Idempotency Key to prevent duplicate payments</li>
                    <li>Automatic retry on Cron Job failure (up to 3 times)</li>
                    <li>Notify operations team immediately via Slack</li>
                    <li>Prepare manual reward distribution API (for emergencies)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Start Now</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  If you want to successfully complete your Christmas event, start now.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  Get Started →
                </Link>
              </div>
            </>
          )}
        </div>
      </article>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-8 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400">© 2024 Walits. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
