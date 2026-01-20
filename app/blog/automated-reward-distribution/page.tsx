'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AutomatedRewardPost() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'Non-Custody 사용 사례',
      title: '자동 보상 지급 시스템, API 하나로 끝내기',
      date: '2024년 12월 15일',
      readTime: '7분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Non-Custody Use Case',
      title: 'Automated Reward Distribution Made Simple with One API',
      date: 'December 15, 2024',
      readTime: '7 min read',
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
                  게임 이벤트, 출석 체크, 커뮤니티 활동, 친구 초대...
                  유저들에게 보상을 지급하는 이유는 다양하지만, 기술적 구현은 항상 골치 아픕니다.
                  수백, 수천 명에게 토큰을 보내려면 가스비가 천문학적으로 올라가고, 트랜잭션 실패 위험도 높습니다.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  Walits Non-Custody 지갑의 Virtual Balance 시스템을 활용하면 이 모든 시나리오를 단 하나의 API로 처리할 수 있습니다.
                  가스비 0원, 즉시 반영, 완벽한 추적까지. 이제 보상 지급은 더 이상 고민거리가 아닙니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">보상 지급이 필요한 다양한 시나리오</h2>

              <div className="mb-12 grid gap-6 md:grid-cols-2">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">🎮 게임 보상</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>보스 레이드 참여 보상</li>
                    <li>퀘스트 완료 리워드</li>
                    <li>특정 아이템 수집 달성</li>
                    <li>랭킹 상위권 보상</li>
                    <li>시즌 종료 보상</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">💬 커뮤니티 보상</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>좋은 글 작성 시 리워드</li>
                    <li>좋아요/추천 많이 받은 게시글</li>
                    <li>베스트 댓글 선정 보상</li>
                    <li>주간 인기 게시물 작성자</li>
                    <li>커뮤니티 기여도 보상</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">📅 출석 보상</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>매일 자정 자동 출석 보상</li>
                    <li>연속 출석 보너스 (7일, 30일)</li>
                    <li>주간 출석 목표 달성</li>
                    <li>월간 완전 출석 보상</li>
                    <li>출석률 상위 유저 추가 보상</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">👥 소셜 활동 보상</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>친구 초대 성공 시 리워드</li>
                    <li>SNS 공유 보상</li>
                    <li>리뷰/평가 작성 보상</li>
                    <li>리트윗/공유 이벤트</li>
                    <li>추천인 프로그램</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">전통 방식의 한계</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 막대한 가스비</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    온체인 방식으로 500명에게 보상을 지급하면 Ethereum 기준 $2,250-$7,500의 가스비가 발생합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                    <p className="font-semibold mb-2">실제 비용 계산 (Ethereum 기준):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>ERC-20 전송 가스: 약 65,000 gas</li>
                      <li>Gas Price 30 gwei 가정: 1 트랜잭션 = 약 $4.5</li>
                      <li>500명 지급: $2,250</li>
                      <li>네트워크 혼잡 시 (100 gwei): $7,500 이상!</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 처리 시간 및 복잡도</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    개별 트랜잭션을 생성하고 관리하는 데 엄청난 시간과 노력이 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>순차 처리 시 최소 1-2시간 소요</li>
                      <li>논스(nonce) 관리 복잡도</li>
                      <li>트랜잭션 실패 시 재전송 로직 필요</li>
                      <li>중복 지급 방지 메커니즘 구현</li>
                      <li>24/7 모니터링 필요</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 운영 리스크</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    자동화된 보상 시스템에서 단 한 번의 실패도 수천 명의 유저 불만으로 이어집니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>RPC 노드 다운타임</li>
                      <li>네트워크 혼잡으로 인한 지연</li>
                      <li>스크립트 오류로 중복 지급 또는 누락</li>
                      <li>감사 추적 및 리포팅 복잡</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Walits로 간단하게 해결하기</h2>

              <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Virtual Balance 시스템</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Walits Non-Custody는 각 유저의 잔액을 블록체인이 아닌 데이터베이스에 기록합니다.
                  내부 거래는 가스비 없이 즉시 처리되고, 유저가 외부로 출금할 때만 블록체인 트랜잭션이 발생합니다.
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Internal Transfer (가상 잔액)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      보상 지급, 유저 간 거래 등 모든 내부 활동은 Virtual Balance로 처리.
                      가스비 0원, 즉시 반영.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Blockchain Withdrawal (실제 출금)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      유저가 외부 지갑으로 출금할 때만 블록체인 트랜잭션 발생.
                      실제 출금률은 보통 5% 미만.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">다양한 토큰으로 보상 지급</h2>

              <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">원하는 토큰으로 자유롭게</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Walits는 다양한 블록체인과 토큰을 지원합니다.
                  USDT, Ethereum, Solana 등 주요 암호화폐는 물론, 자체 게임 토큰이나 커뮤니티 토큰도 자유롭게 사용할 수 있습니다.
                </p>

                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">💰 주요 암호화폐</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      USDT, USDC, Ethereum (ETH), Solana (SOL), Bitcoin 등
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">🎮 자체 토큰</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      GameCoin, CommunityToken 등 자체 발행 ERC-20/SPL 토큰
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">✨ WLT (Walits Token)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Walits 네이티브 토큰으로 보상 지급 가능
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    WLT (Walits Token)의 미래
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    WLT는 단순한 보상 토큰을 넘어, 실제 세계에서 사용 가능한 유틸리티 토큰으로 진화할 예정입니다.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>온·오프라인 가맹점에서 결제 수단으로 사용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>Walits 생태계 내 프리미엄 기능 이용</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>스테이킹을 통한 추가 수익 창출</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>파트너사 서비스 할인 및 혜택</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">실제 사용 예시</h2>

              <div className="mb-12 space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">예시 1: 게임 보스 레이드 이벤트</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    크리스마스 특별 보스 레이드에 500명이 참여. 전원에게 기본 보상, 1등과 막타 유저에게 추가 보상 지급.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">보상 내역:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>참여자 전원: 100 GameCoin</li>
                      <li>1등: 추가 500 GameCoin + 레어 NFT</li>
                      <li>막타 유저: 추가 300 GameCoin</li>
                      <li>처리 시간: 2-3초 | 가스비: $0</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">예시 2: 커뮤니티 주간 베스트 게시글</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매주 일요일 자정, 좋아요를 많이 받은 상위 10개 게시글 작성자에게 자동으로 보상 지급.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">보상 내역:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>1위: 1,000 CommunityToken</li>
                      <li>2-5위: 500 CommunityToken</li>
                      <li>6-10위: 200 CommunityToken</li>
                      <li>Cron Job으로 매주 자동 실행</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">예시 3: 매일 자정 출석 보상</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    매일 출석 체크한 3,500명의 유저에게 연속 출석 일수에 따라 차등 보상.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">보상 체계:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>1일차: 10 Gold</li>
                      <li>7일 연속: 100 Gold + 아이템</li>
                      <li>30일 연속: 1,000 Gold + NFT</li>
                      <li>월 가스비 절감: $120 → $0</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">예시 4: 친구 초대 프로그램</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    친구를 초대한 유저와 가입한 신규 유저 모두에게 즉시 보상 지급.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">보상 내역:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>초대한 유저: 50 ReferralToken</li>
                      <li>신규 가입 유저: 30 ReferralToken</li>
                      <li>친구가 첫 구매 시 초대자 추가 보상</li>
                      <li>실시간 즉시 지급</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">핵심 구현 단계</h2>

              <div className="space-y-6 mb-12">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">마스터 지갑 준비</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        보상을 지급할 마스터 지갑에 충분한 토큰이 있는지 확인합니다.
                        Walits 대시보드 또는 API로 간단히 조회 가능.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">보상 대상자 리스트 생성</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        서버에서 보상 대상자 데이터를 조회하여 Walits API 형식에 맞게 변환합니다.
                        각 유저의 지갑 주소와 보상 금액을 배열로 준비.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Batch Transfer API 호출</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        단 하나의 API 호출로 수백, 수천 명에게 동시에 보상을 지급합니다.
                        처리 시간은 단 2-3초, 가스비는 0원!
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Idempotency Key</span>를 사용하면 실수로 API를 여러 번 호출해도 중복 지급이 발생하지 않습니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">자동화 설정 (선택사항)</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Cron Job 또는 스케줄러를 활용하여 정기적인 보상 지급을 완전 자동화합니다.
                        매일 자정, 매주 일요일 등 원하는 시간에 자동 실행.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">비용 비교</h2>

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
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">처리 시간 (500명)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">1-2시간</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">2-3초</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">가스비 (500명)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$2,250-$7,500</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">$0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">개발 복잡도</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">높음 (논스 관리, 재시도 로직)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">낮음 (단일 API)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">실패 위험</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">트랜잭션 실패 가능</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">원자성 보장</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">유저 경험</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">지연, 불확실성</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">즉시 반영, 확실성</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Best Practices</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. 보상 밸런스 조정</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>너무 많은 보상은 토큰 가치 하락 초래</li>
                    <li>단계별 보상 차등화로 동기부여 극대화</li>
                    <li>게임/앱 내 경제에 미치는 영향 지속 모니터링</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. 중복 지급 방지</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Idempotency Key 사용 필수</li>
                    <li>DB에 지급 내역 기록 및 검증</li>
                    <li>자동화 시스템에 재시도 제한 설정</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. 모니터링 및 알림</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Webhook으로 유저에게 보상 알림 전송</li>
                    <li>Slack/Discord로 운영팀에 실행 결과 통보</li>
                    <li>이상 거래 패턴 자동 감지</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">도입 효과</h2>

              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-2">99%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">가스비 절감</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">100배</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">처리 속도 향상</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-300 mb-2">0명</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">운영 인력 필요</p>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">지금 바로 시작하세요</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  보상 지급 시스템을 간단하고 효율적으로 만들고 싶다면 지금 시작하세요.
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
                  Game events, attendance checks, community activities, friend referrals...
                  There are many reasons to reward users, but technical implementation is always a headache.
                  Sending tokens to hundreds or thousands of users incurs astronomical gas fees and high transaction failure risks.
                </p>
                <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
                  With Walits Non-Custody wallet's Virtual Balance system, you can handle all these scenarios with just one API.
                  Zero gas fees, instant reflection, and perfect tracking. Reward distribution is no longer a concern.
                </p>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Various Reward Distribution Scenarios</h2>

              <div className="mb-12 grid gap-6 md:grid-cols-2">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">🎮 Game Rewards</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Boss raid participation rewards</li>
                    <li>Quest completion rewards</li>
                    <li>Item collection achievements</li>
                    <li>Ranking top tier rewards</li>
                    <li>Season end rewards</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">💬 Community Rewards</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Quality post creation rewards</li>
                    <li>Most liked/recommended posts</li>
                    <li>Best comment selection rewards</li>
                    <li>Weekly popular post authors</li>
                    <li>Community contribution rewards</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">📅 Attendance Rewards</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Daily midnight auto attendance rewards</li>
                    <li>Consecutive attendance bonus (7, 30 days)</li>
                    <li>Weekly attendance goal achievement</li>
                    <li>Monthly perfect attendance rewards</li>
                    <li>Top attendance rate user bonuses</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">👥 Social Activity Rewards</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Successful friend referral rewards</li>
                    <li>SNS sharing rewards</li>
                    <li>Review/rating writing rewards</li>
                    <li>Retweet/share event rewards</li>
                    <li>Referral program bonuses</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Limitations of Traditional Approach</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. Massive Gas Fees</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Distributing rewards to 500 people on-chain costs $2,250-$7,500 in gas fees on Ethereum.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                    <p className="font-semibold mb-2">Cost Calculation (Ethereum):</p>
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>ERC-20 transfer gas: ~65,000 gas</li>
                      <li>Gas Price 30 gwei: 1 tx = ~$4.5</li>
                      <li>500 people: $2,250</li>
                      <li>Network congestion (100 gwei): $7,500+!</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. Processing Time & Complexity</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Creating and managing individual transactions requires enormous time and effort.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>Minimum 1-2 hours for sequential processing</li>
                      <li>Nonce management complexity</li>
                      <li>Retry logic needed for failed transactions</li>
                      <li>Duplicate payment prevention mechanism</li>
                      <li>24/7 monitoring required</li>
                    </ul>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. Operational Risks</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    In automated reward systems, even a single failure leads to thousands of user complaints.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                    <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                      <li>RPC node downtime</li>
                      <li>Delays due to network congestion</li>
                      <li>Duplicate payments or omissions from script errors</li>
                      <li>Complex audit trails and reporting</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Simple Solution with Walits</h2>

              <div className="mb-12 p-8 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Virtual Balance System</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">
                  Walits Non-Custody records each user's balance in a database, not on the blockchain.
                  Internal transactions are processed instantly without gas fees, and blockchain transactions only occur when users withdraw externally.
                </p>
                <div className="grid gap-4 md:grid-cols-2 mt-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Internal Transfer (Virtual Balance)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      All internal activities like reward distribution and user-to-user trading are processed with Virtual Balance.
                      Zero gas fees, instant reflection.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">Blockchain Withdrawal (Actual Withdrawal)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Blockchain transactions only occur when users withdraw to external wallets.
                      Actual withdrawal rate is usually less than 5%.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Reward Distribution with Various Tokens</h2>

              <div className="mb-12 p-8 bg-gradient-to-r from-green-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Freedom to Choose Your Token</h3>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  Walits supports various blockchains and tokens.
                  Use major cryptocurrencies like USDT, Ethereum, and Solana, or your own game/community tokens with complete freedom.
                </p>

                <div className="grid gap-4 md:grid-cols-3 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">💰 Major Cryptocurrencies</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      USDT, USDC, Ethereum (ETH), Solana (SOL), Bitcoin, etc.
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">🎮 Custom Tokens</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Your own ERC-20/SPL tokens like GameCoin, CommunityToken
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded border border-gray-200 dark:border-gray-600">
                    <h4 className="font-semibold mb-2 text-gray-900 dark:text-white">✨ WLT (Walits Token)</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Distribute rewards with Walits native token
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-2 border-blue-200 dark:border-blue-800">
                  <h4 className="font-bold mb-3 text-gray-900 dark:text-white flex items-center gap-2">
                    <span className="text-2xl">🚀</span>
                    The Future of WLT (Walits Token)
                  </h4>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">
                    WLT is evolving beyond a simple reward token to become a utility token usable in the real world.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>Payment method at online and offline merchants</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>Access premium features within Walits ecosystem</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>Generate additional revenue through staking</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 dark:text-blue-400">•</span>
                      <span>Discounts and benefits at partner services</span>
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Real Use Cases</h2>

              <div className="mb-12 space-y-8">
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Example 1: Game Boss Raid Event</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    500 participants in Christmas special boss raid. Basic rewards for all, additional rewards for 1st place and last hit.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Reward Details:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>All participants: 100 GameCoin</li>
                      <li>1st place: Additional 500 GameCoin + Rare NFT</li>
                      <li>Last hit: Additional 300 GameCoin</li>
                      <li>Processing time: 2-3 seconds | Gas fee: $0</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Example 2: Community Weekly Best Posts</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Every Sunday midnight, automatically reward top 10 post authors with most likes.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Reward Details:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>1st place: 1,000 CommunityToken</li>
                      <li>2-5th place: 500 CommunityToken</li>
                      <li>6-10th place: 200 CommunityToken</li>
                      <li>Auto-execute weekly via Cron Job</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Example 3: Daily Midnight Attendance Rewards</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Tiered rewards to 3,500 users who checked in daily based on consecutive attendance days.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Reward System:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>Day 1: 10 Gold</li>
                      <li>7 days consecutive: 100 Gold + Item</li>
                      <li>30 days consecutive: 1,000 Gold + NFT</li>
                      <li>Monthly gas savings: $120 → $0</li>
                    </ul>
                  </div>
                </div>

                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">Example 4: Friend Referral Program</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Instant rewards to both the inviter and newly registered user.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <p className="text-sm font-semibold mb-2 text-gray-900 dark:text-white">Reward Details:</p>
                    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                      <li>Inviter: 50 ReferralToken</li>
                      <li>New user: 30 ReferralToken</li>
                      <li>Additional reward when friend makes first purchase</li>
                      <li>Real-time instant distribution</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Core Implementation Steps</h2>

              <div className="space-y-6 mb-12">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Prepare Master Wallet</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Check if the master wallet has enough tokens for rewards.
                        Easy to query via Walits dashboard or API.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Generate Recipient List</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Query recipient data from server and convert to Walits API format.
                        Prepare array of each user's wallet address and reward amount.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Call Batch Transfer API</h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">
                        Distribute rewards to hundreds or thousands simultaneously with just one API call.
                        Processing time is only 2-3 seconds, gas fee is zero!
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-semibold">Idempotency Key</span> ensures no duplicate payments even if you accidentally call the API multiple times.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full flex items-center justify-center font-bold">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">Automation Setup (Optional)</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Use Cron Job or scheduler to fully automate periodic reward distribution.
                        Auto-execute at desired times like daily midnight or every Sunday.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Cost Comparison</h2>

              <div className="mb-12 overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 dark:border-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-800">
                    <tr>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Item</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">On-Chain Method</th>
                      <th className="p-3 text-left border border-gray-200 dark:border-gray-700">Walits Non-Custody</th>
                    </tr>
                  </thead>
                  <tbody className="text-gray-700 dark:text-gray-300">
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Processing Time (500 people)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">1-2 hours</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">2-3 seconds</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Gas Fee (500 people)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">$2,250-$7,500</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">$0</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Development Complexity</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">High (nonce management, retry logic)</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">Low (single API)</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-800">
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">Failure Risk</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">Transaction can fail</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">Atomicity guaranteed</td>
                    </tr>
                    <tr>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-semibold">User Experience</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700">Delayed, uncertain</td>
                      <td className="p-3 border border-gray-200 dark:border-gray-700 font-bold text-green-600">Instant, certain</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Best Practices</h2>

              <div className="mb-12 space-y-6">
                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">1. Reward Balance Adjustment</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Excessive rewards lead to token value decline</li>
                    <li>Maximize motivation with tiered reward differentiation</li>
                    <li>Continuously monitor impact on in-game/app economy</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">2. Prevent Duplicate Payments</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Must use Idempotency Key</li>
                    <li>Record and verify payment history in DB</li>
                    <li>Set retry limits in automation system</li>
                  </ul>
                </div>

                <div className="p-6 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="text-lg font-bold mb-3 text-gray-900 dark:text-white">3. Monitoring & Notifications</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 dark:text-gray-400">
                    <li>Send reward notifications to users via Webhook</li>
                    <li>Notify operations team of execution results via Slack/Discord</li>
                    <li>Auto-detect abnormal transaction patterns</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Implementation Impact</h2>

              <div className="mb-12 grid gap-6 md:grid-cols-3">
                <div className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-300 mb-2">99%</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Gas fee savings</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 dark:text-purple-300 mb-2">100x</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Processing speed improvement</p>
                </div>
                <div className="p-6 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600 dark:text-green-300 mb-2">0</div>
                  <p className="text-sm text-gray-700 dark:text-gray-300">Operations staff needed</p>
                </div>
              </div>

              <div className="bg-gray-900 dark:bg-white text-white dark:text-gray-900 p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Start Now</h2>
                <p className="mb-6 text-gray-300 dark:text-gray-600">
                  If you want to make your reward distribution system simple and efficient, start now.
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
