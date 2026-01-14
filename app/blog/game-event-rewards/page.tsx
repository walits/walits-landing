'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function GameEventRewardsPost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'Non-Custody 사용 사례',
      title: '게임 이벤트 보상 지급, 이렇게 간단합니다',
      date: '2024년 12월 15일',
      readTime: '5분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Non-Custody Use Case',
      title: 'Game Event Rewards Made Simple',
      date: 'December 15, 2024',
      readTime: '5 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/blog/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {copy.backToBlog}
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
                  크리스마스 시즌, 게임사 입장에서 가장 고민되는 순간이 있습니다. "이벤트 참여자 500명에게 어떻게 보상을 지급하지?"
                  전통적인 방식이라면 각각의 트랜잭션을 생성하고, 가스비를 계산하고, 하나씩 전송해야 했습니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  하지만 Walits Non-Custody 지갑이라면 이야기가 달라집니다.
                  Virtual Balance 시스템을 활용하면 단 하나의 API 호출로 수백, 수천 명에게 즉시 보상을 지급할 수 있습니다.
                  가스비 걱정 없이, 실시간으로, 완벽하게 추적 가능한 방식으로 말이죠.
                </p>
              </div>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">실제 시나리오: 크리스마스 보스 레이드 이벤트</h2>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  "판타지 킹덤"이라는 RPG 게임에서 크리스마스 이벤트를 진행합니다.
                  12월 24일 저녁 8시, 특별 보스 "Ice Dragon"이 등장하고 500명의 유저가 레이드에 참여했습니다.
                </p>
                <div className="bg-white dark:bg-gray-900 p-4 rounded border border-gray-200 dark:border-gray-600 mt-4">
                  <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">보상 지급 조건</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>레이드 참여자 전원: 100 GameCoin</li>
                    <li>딜량 1등: 추가 500 GameCoin + 레어 아이템 NFT</li>
                    <li>보스 막타 유저: 추가 300 GameCoin</li>
                    <li>총 지급액: 약 50,800 GameCoin + NFT 1개</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">기존 방식의 문제점</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 시간 소요 및 운영 부담</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    온체인 방식으로 500개의 트랜잭션을 처리하려면 엄청난 시간이 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">예상 소요 시간 계산:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Ethereum: 블록당 12초 × 500 트랜잭션 = 최소 1.7시간 (순차 처리 시)</li>
                      <li>병렬 처리 시에도 논스(nonce) 관리 복잡도 증가</li>
                      <li>트랜잭션 실패 시 재전송 로직 구현 필요</li>
                      <li>운영자가 수동으로 진행 상황 모니터링해야 함</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 천문학적인 가스비</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    각 트랜잭션마다 가스비가 발생하므로, 대규모 이벤트는 비용이 급증합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">실제 비용 계산 (Ethereum 기준):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>ERC-20 전송 가스: 약 65,000 gas</li>
                      <li>Gas Price 30 gwei 가정</li>
                      <li>1 트랜잭션 비용: 65,000 × 30 = 1,950,000 gwei = 0.00195 ETH = 약 $4.5</li>
                      <li>500 트랜잭션 총 비용: $4.5 × 500 = $2,250</li>
                      <li>네트워크 혼잡 시 Gas Price 100 gwei 이상: $7,500 이상!</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 복잡한 관리 및 추적</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    개별 트랜잭션을 관리하려면 복잡한 로직과 모니터링 시스템이 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm space-y-2">
                    <p className="font-semibold">관리 복잡도:</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>각 트랜잭션의 상태(Pending, Confirmed, Failed) 추적</li>
                      <li>실패한 트랜잭션 재시도 메커니즘 구현</li>
                      <li>중복 지급 방지를 위한 idempotency 보장</li>
                      <li>감사를 위한 로그 및 리포팅 시스템 구축</li>
                      <li>고객 문의 대응: "언제 받나요?" 질문 대응</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Walits Non-Custody로 해결하기</h2>

              <div className="space-y-8 mb-12">
                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">1. 마스터 지갑 준비</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    게임사의 마스터 지갑에 충분한 GameCoin이 있는지 확인합니다.
                    Walits 대시보드 또는 API로 간단히 조회할 수 있습니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">2. 보상 대상자 리스트 생성</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    게임 서버에서 레이드 참여자 데이터를 조회하여 Walits API 형식에 맞게 변환합니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">3. Batch Transfer API 호출</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    단 하나의 API 호출로 500명의 유저에게 동시에 보상을 지급합니다.
                    처리 시간은 단 2-3초!
                  </p>
                  <p className="text-sm mt-4 text-gray-600 dark:text-gray-400">
                    <span className="font-semibold">Idempotency Key</span>를 사용하면 실수로 API를 여러 번 호출해도 중복 지급이 발생하지 않습니다.
                    같은 키로 다시 요청하면 이전 결과가 반환됩니다.
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">4. 즉시 반영 완료</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    모든 유저의 지갑에 즉시 GameCoin이 반영됩니다. 가스비는 0원!
                  </p>
                </div>

                <div className="border-l-4 border-gray-900 dark:border-white pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">5. 실시간 알림 전송 (선택사항)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Webhook을 활용하여 유저에게 푸시 알림을 전송할 수 있습니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Virtual Balance의 작동 원리</h2>

              <div className="mb-12 p-8 bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Walits Non-Custody는 Virtual Balance 시스템을 사용합니다.
                  각 유저의 잔액은 블록체인이 아닌 Walits 데이터베이스에 기록됩니다.
                </p>
                <div className="space-y-4 text-sm">
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2">Internal Transfer (가상 잔액 이동)</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      게임 내에서 유저 간 거래, 보상 지급 등은 모두 Virtual Balance로 처리됩니다.
                      블록체인 트랜잭션이 발생하지 않으므로 가스비가 0이고 즉시 처리됩니다.
                    </p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2">Blockchain Withdrawal (실제 출금)</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      유저가 게임 밖으로 자산을 출금하고 싶을 때만 블록체인 트랜잭션이 발생합니다.
                      예: MetaMask로 GameCoin 전송
                    </p>
                  </div>
                  <div className="p-4 bg-white dark:bg-gray-900 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2">장점</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      99%의 게임 내 거래는 Virtual Balance로 처리되므로, 가스비 부담 없이 실시간 경제 시스템을 구축할 수 있습니다.
                      유저가 실제로 출금하는 비율은 보통 5% 미만입니다.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">비용 비교: 온체인 vs Walits</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">항목</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">온체인 방식</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Walits Non-Custody</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">처리 시간</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">1-2시간 (순차 처리)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">2-3초</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">가스비 (500명)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$2,250-$7,500</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">개발 복잡도</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">높음 (논스 관리, 재시도 로직)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">낮음 (단일 API 호출)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">실패 위험</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">트랜잭션 실패 가능</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">원자성 보장 (All or Nothing)</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">유저 경험</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">지연 발생, 불확실성</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">즉시 반영, 확실성</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">실제 적용 사례</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">사례 1: "크립토 레이서" (레이싱 게임)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매주 금요일 저녁 토너먼트에 평균 800명 참여. 상위 100명에게 차등 보상 지급.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Walits 도입 전: 가스비로 월 $8,000 지출, 보상 지급까지 평균 2시간</li>
                    <li>Walits 도입 후: 가스비 $0, 보상 지급 즉시 완료</li>
                    <li>결과: 유저 만족도 35% 증가, 재참여율 50% 증가</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">사례 2: "메타버스 시티" (메타버스 플랫폼)</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    일일 퀘스트 완료자 1,500명에게 매일 자동 보상.
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Batch Transfer API + Cron Job으로 자동화</li>
                    <li>월 가스비 절감: $45,000 → $0</li>
                    <li>운영 인력: 2명 → 0명 (완전 자동화)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  Walits Non-Custody API는 첫 한 달 무료입니다.
                  크리스마스 이벤트를 성공적으로 마무리하고 싶다면 지금 시작하세요.
                </p>
                <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  무료로 시작하기 →
                </Link>
              </div>
            </>
          ) : (
            <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Start Now</h2>
              <p className="mb-6 text-gray-300 dark:text-gray-600">
                Walits Non-Custody API is free for the first month.
              </p>
              <Link href="/inquiry" className="inline-block px-8 py-3 bg-white dark:bg-gray-900 text-gray-900 dark:text-white rounded-lg font-bold hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                Start Free →
              </Link>
            </div>
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
