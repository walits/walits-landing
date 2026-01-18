'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CommunityAirdropPost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'Non-Custody 사용 사례',
      title: '커뮤니티 에어드랍, 1,000명에게 한 번에',
      date: '2024년 12월 14일',
      readTime: '4분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Non-Custody Use Case',
      title: 'Community Airdrop to 1,000 Users at Once',
      date: 'December 14, 2024',
      readTime: '4 min read',
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
                  Web3 커뮤니티를 운영하다 보면 활성 사용자들에게 보상을 지급하고 싶은 순간이 옵니다.
                  특히 토큰 런칭이나 새로운 기능 출시를 기념하여 에어드랍을 진행할 때, 가장 큰 문제는 바로 천문학적인 가스비입니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  전통적인 온체인 에어드랍은 1,000명에게 지급하는 데 수천 달러의 가스비가 발생합니다.
                  하지만 Walits Non-Custody를 사용하면 가스비 0원으로 즉시 대규모 에어드랍을 실행할 수 있습니다.
                  이는 커뮤니티 마케팅과 유저 리텐션 전략의 게임 체인저입니다.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">실제 시나리오: BASE 토큰 에어드랍</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  "CryptoVerse"라는 Web3 소셜 플랫폼에서 BASE Layer 2로 마이그레이션을 기념하여
                  활성 사용자 1,000명에게 각각 10 BASE를 에어드랍하기로 결정했습니다.
                  최근 30일간 10회 이상 로그인한 유저를 대상으로 합니다.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">에어드랍 상세</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>대상: 최근 30일 활성 사용자 1,000명</li>
                    <li>기본 에어드랍: 각 10 BASE</li>
                    <li>얼리어답터 보너스: 최초 100명 유저에게 추가 20 BASE</li>
                    <li>총 에어드랍 금액: 12,000 BASE (약 $48,000 at $4/BASE)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">온체인 에어드랍의 비용 현실</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 엄청난 가스비 부담</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    1,000명에게 온체인으로 에어드랍하는 비용은 토큰 가치보다 클 수도 있습니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">BASE (L2) 네트워크 기준:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>ERC-20 전송 가스: 약 50,000 gas (L2 최적화)</li>
                      <li>Gas Price: 0.1 gwei 가정 (BASE는 저렴)</li>
                      <li>1 트랜잭션: 50,000 × 0.0000000001 ETH = 0.000005 ETH = $0.01</li>
                      <li>1,000 트랜잭션 총 비용: $10</li>
                      <li>그러나 Ethereum 메인넷이라면: $4,500 이상!</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 시간 소요 및 기회 비용</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    1,000개의 트랜잭션을 안전하게 처리하려면 상당한 시간이 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>트랜잭션 준비 및 검증: 30분</li>
                      <li>순차 전송 (안전한 논스 관리): 2-3시간</li>
                      <li>실패 트랜잭션 재시도: 추가 1시간</li>
                      <li>전체 완료 확인 및 리포트: 30분</li>
                      <li>총 소요 시간: 최소 4-5시간</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 기술적 복잡도와 위험</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    에어드랍 스크립트 작성과 운영은 블록체인 전문 개발자가 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Web3.js/Ethers.js 기반 스크립트 개발</li>
                      <li>논스(nonce) 충돌 관리 로직</li>
                      <li>가스비 동적 조정 (네트워크 혼잡 대응)</li>
                      <li>실패 트랜잭션 재시도 메커니즘</li>
                      <li>중복 지급 방지 체크</li>
                      <li>개발 + 테스트 비용: 최소 $5,000-10,000</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Walits Non-Custody로 해결하기</h2>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. 마스터 지갑 잔액 확인</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    CryptoVerse의 마스터 지갑에 충분한 BASE 토큰이 있는지 확인합니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. 활성 유저 리스트 추출</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    데이터베이스에서 최근 30일 활성 유저 1,000명을 조회하고, 얼리어답터 보너스를 계산합니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Batch Transfer API로 즉시 지급</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    단 하나의 API 호출로 1,000명의 유저에게 차등 에어드랍을 동시에 실행합니다.
                  </p>
                  <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                    1,000명에게 지급 완료까지 단 3-4초! 가스비는 $0!
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. 이메일 및 푸시 알림</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Walits Webhook을 받아 유저들에게 에어드랍 완료 알림을 전송합니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">비용 절감 효과</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">항목</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">온체인 에어드랍</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Walits Non-Custody</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">절감액</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">가스비</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$4,500 (Ethereum)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">$4,500</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">개발 비용</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$5,000-10,000</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0 (API 사용)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">$7,500</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">운영 시간</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">4-5시간</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">5분</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">4.9시간</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">실패 위험</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">높음</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">없음 (원자성 보장)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-gray-700 font-bold">
                      <td className="p-3 border border-gray-200 dark:border-gray-700">총 절감 효과</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">$12,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">에어드랍 Best Practices</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 명확한 대상 기준 설정</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>활동 기준: 최근 N일 로그인, 특정 액션 완료 등</li>
                    <li>Sybil Attack 방지: KYC, 소셜 인증, 최소 활동 기간</li>
                    <li>차등 지급: 활동량, 가입 시기, 기여도에 따라 금액 조정</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 투명한 커뮤니케이션</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>사전 공지: 에어드랍 일정, 대상, 금액 미리 알림</li>
                    <li>실시간 업데이트: 이메일, 푸시 알림으로 지급 완료 즉시 통보</li>
                    <li>FAQ 준비: "언제 받나요?", "얼마나 받나요?" 등 예상 질문 정리</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 데이터 기반 분석</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>리텐션 추적: 에어드랍 후 30일, 60일 재방문율 측정</li>
                    <li>거래 활성화: 에어드랍 수령자의 거래량 증가율 분석</li>
                    <li>ROI 계산: 마케팅 비용 대비 신규 유저 유치 효과 평가</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">실제 성공 사례</h2>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">NFT 마켓플레이스 "OpenArt"</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  런칭 기념 5,000명 에어드랍을 Walits로 진행한 결과:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2">비용 절감</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>예상 가스비: $15,000 (Polygon)</li>
                      <li>실제 비용: $0</li>
                      <li>절감액: $15,000</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2">성과</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>30일 리텐션: 68% (업계 평균 35%)</li>
                      <li>첫 거래 전환율: 42%</li>
                      <li>소셜 미디어 언급: 3배 증가</li>
                    </ul>
                  </div>
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
                  When running a Web3 community, there comes a moment when you want to reward your active users.
                  Especially when conducting airdrops to celebrate a token launch or new feature release, the biggest challenge is astronomical gas fees.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Traditional on-chain airdrops can cost thousands of dollars in gas fees to distribute to 1,000 users.
                  However, with Walits Non-Custody, you can execute large-scale airdrops instantly with zero gas fees.
                  This is a game changer for community marketing and user retention strategies.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Real Scenario: BASE Token Airdrop</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  "CryptoVerse," a Web3 social platform, decided to airdrop 10 BASE tokens each to 1,000 active users
                  to commemorate their migration to BASE Layer 2.
                  The target audience includes users who logged in more than 10 times in the last 30 days.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Airdrop Details</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Target: 1,000 active users in the last 30 days</li>
                    <li>Basic airdrop: 10 BASE each</li>
                    <li>Early adopter bonus: Additional 20 BASE for the first 100 users</li>
                    <li>Total airdrop amount: 12,000 BASE (approximately $48,000 at $4/BASE)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">The Cost Reality of On-Chain Airdrops</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. Enormous Gas Fee Burden</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    The cost of airdropping to 1,000 users on-chain can exceed the value of the tokens themselves.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">Based on BASE (L2) network:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>ERC-20 transfer gas: approximately 50,000 gas (L2 optimized)</li>
                      <li>Gas Price: assuming 0.1 gwei (BASE is cheap)</li>
                      <li>1 transaction: 50,000 × 0.0000000001 ETH = 0.000005 ETH = $0.01</li>
                      <li>Total cost for 1,000 transactions: $10</li>
                      <li>However, on Ethereum mainnet: $4,500 or more!</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. Time Requirements and Opportunity Costs</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Safely processing 1,000 transactions requires considerable time.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Transaction preparation and verification: 30 minutes</li>
                      <li>Sequential transmission (safe nonce management): 2-3 hours</li>
                      <li>Retry failed transactions: additional 1 hour</li>
                      <li>Final confirmation and reporting: 30 minutes</li>
                      <li>Total time required: at least 4-5 hours</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. Technical Complexity and Risk</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Writing and operating airdrop scripts requires blockchain specialist developers.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Web3.js/Ethers.js based script development</li>
                      <li>Nonce collision management logic</li>
                      <li>Dynamic gas fee adjustment (network congestion response)</li>
                      <li>Failed transaction retry mechanism</li>
                      <li>Duplicate payment prevention check</li>
                      <li>Development + testing cost: minimum $5,000-10,000</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Solving with Walits Non-Custody</h2>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. Check Master Wallet Balance</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Verify that CryptoVerse's master wallet has sufficient BASE tokens.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. Extract Active User List</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Query 1,000 active users from the last 30 days in the database and calculate early adopter bonuses.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Instant Distribution via Batch Transfer API</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Execute differential airdrops to 1,000 users simultaneously with a single API call.
                  </p>
                  <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                    Distribution to 1,000 users completed in just 3-4 seconds! Gas fee: $0!
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. Email and Push Notifications</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Receive Walits Webhook and send airdrop completion notifications to users.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Cost Savings Effect</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Item</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">On-Chain Airdrop</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Walits Non-Custody</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Gas Fees</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$4,500 (Ethereum)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">$4,500</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Development Cost</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$5,000-10,000</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0 (API usage)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">$7,500</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Operation Time</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">4-5 hours</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">5 minutes</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">4.9 hours</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Failure Risk</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">High</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">None (atomicity guaranteed)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                    </tr>
                    <tr className="bg-gray-100 dark:bg-gray-700 font-bold">
                      <td className="p-3 border border-gray-200 dark:border-gray-700">Total Savings</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">-</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 text-green-600">$12,000+</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Airdrop Best Practices</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. Set Clear Targeting Criteria</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Activity criteria: Recent N days login, specific action completion, etc.</li>
                    <li>Sybil Attack prevention: KYC, social verification, minimum activity period</li>
                    <li>Differential distribution: Adjust amounts based on activity level, join date, contribution</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. Transparent Communication</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Advance notice: Pre-announce airdrop schedule, targets, amounts</li>
                    <li>Real-time updates: Immediately notify via email and push notifications upon completion</li>
                    <li>Prepare FAQ: Organize anticipated questions like "When will I receive it?", "How much will I get?"</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. Data-Driven Analysis</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Track retention: Measure 30-day, 60-day revisit rates after airdrop</li>
                    <li>Transaction activation: Analyze transaction volume increase rate among airdrop recipients</li>
                    <li>Calculate ROI: Evaluate new user acquisition effectiveness versus marketing costs</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Real Success Story</h2>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">NFT Marketplace "OpenArt"</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Results from conducting a launch commemorative airdrop to 5,000 users with Walits:
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2">Cost Savings</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Expected gas fees: $15,000 (Polygon)</li>
                      <li>Actual cost: $0</li>
                      <li>Savings: $15,000</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2">Results</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>30-day retention: 68% (industry average 35%)</li>
                      <li>First transaction conversion: 42%</li>
                      <li>Social media mentions: 3x increase</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Start Now</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  Start now to successfully complete your Christmas event.
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
