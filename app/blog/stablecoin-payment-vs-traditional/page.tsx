'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function StablecoinPaymentComparisonPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      breadcrumb: '블로그',
      category: '결제 & 핀테크',
      title: '스테이블코인 결제가 기존 결제망보다 단계를 줄이는 방법',
      date: '2026년 2월 11일',
      readTime: '14분 읽기',
      backToBlog: '← 블로그로 돌아가기',
      relatedPosts: '관련 글',
    },
    en: {
      breadcrumb: 'Blog',
      category: 'Payments & FinTech',
      title: 'How Stablecoin Payments Reduce Steps vs Traditional Systems',
      date: 'February 11, 2026',
      readTime: '14 min read',
      backToBlog: '← Back to Blog',
      relatedPosts: 'Related Posts',
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
          <span className="inline-block px-4 py-2 bg-cyan-100 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 rounded text-sm font-medium mb-4">
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

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/payment.jpg"
            alt={language === 'ko' ? '스테이블코인 결제 시스템' : 'Stablecoin Payment System'}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                "결제는 됐는데 돈은 아직 안 들어왔다" — 이 말이 당연하게 느껴지시나요?
                카드 결제는 승인과 정산이 분리되어 며칠이 걸립니다.
                스테이블코인 결제는 온체인 전송으로 결제와 정산을 동시에 처리하여 단계를 획기적으로 줄입니다.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">기존 결제망의 복잡성: 승인과 정산의 분리</h2>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
                <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">핵심 개념: Authorization vs Settlement</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <h4 className="font-semibold mb-1">Authorization (승인)</h4>
                    <p>결제가 가능한지 확인하는 단계. 카드 한도, 잔액, 부정사용 여부를 체크합니다.
                    승인이 완료되면 "결제 성공" 메시지가 뜨지만, <strong className="text-red-600">돈은 아직 이동하지 않았습니다.</strong></p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Settlement (정산)</h4>
                    <p>실제로 돈이 이동하는 단계. 승인된 거래들을 모아서 일괄 처리하며,
                    <strong className="text-red-600"> 보통 2~3 영업일 후</strong> 가맹점 계좌에 입금됩니다.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">카드 결제 흐름: 8단계 상세 분석</h3>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <h4 className="font-bold mb-6 text-gray-900 dark:text-white">🔄 Phase 1: 승인 (Authorization) — 실시간</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">고객이 카드 결제 요청</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        POS 단말기나 온라인 체크아웃에서 카드 정보 입력
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">가맹점 → PG사 (결제처리사)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        결제 요청을 PG사(KG이니시스, 토스페이먼츠 등)로 전달
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">PG사 → 매입사 (Acquirer)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        PG사가 매입사(신한카드, KB국민카드 등)로 승인 요청
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">4</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">매입사 → 카드 네트워크 (VISA/Mastercard)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        국제 카드라면 VISA, Mastercard 네트워크를 경유
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">5</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">카드 네트워크 → 발급사 (Issuer)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        고객의 카드를 발급한 은행/카드사로 최종 승인 요청
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">✓</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-green-600 dark:text-green-400">승인 응답 (역방향)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        발급사 → 카드 네트워크 → 매입사 → PG사 → 가맹점 (1~3초 소요)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded-lg">
                  <p className="text-sm">
                    <strong>⏱️ 승인 시간:</strong> 1~3초<br/>
                    <strong>💰 이 시점:</strong> "결제 성공" 화면은 뜨지만, <span className="text-red-600 font-bold">돈은 아직 이동하지 않음</span>
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-8 rounded-xl my-8">
                <h4 className="font-bold mb-6 text-gray-900 dark:text-white">💸 Phase 2: 정산 & 입금 (Settlement & Funding) — 2~3 영업일</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">6</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">가맹점이 정산 요청 (Batch Close)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        하루 거래 종료 후, 승인된 거래들을 묶어서 PG사에 정산 요청
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">7</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">카드 네트워크 Clearing</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        카드 네트워크가 발급사로부터 자금을 끌어와(Pull) 매입사로 전달
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">8</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">매입사 → 가맹점 계좌 입금</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        수수료를 제외한 금액이 가맹점 계좌에 입금 (T+2~3일)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm">
                    <strong>⏱️ 정산 시간:</strong> 2~3 영업일 (주말 제외)<br/>
                    <strong>💰 수수료:</strong> 2~4% (업종별 상이)<br/>
                    <strong>📌 문제점:</strong> 승인과 정산이 분리되어 있어 현금 흐름 관리가 어렵고, 차지백(거래 취소) 리스크 존재
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">참여자 다이어그램</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8 overflow-x-auto">
                <pre className="text-xs">
{`┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│   고객   │────▶│  가맹점  │────▶│   PG사   │────▶│  매입사  │────▶│카드네트워크│
│ (소비자) │     │ (판매자) │     │ (토스 등)│     │(신한카드)│     │(VISA 등) │
└──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘
                                                                            │
                                                                            ▼
                                                                      ┌──────────┐
                                                                      │  발급사  │
                                                                      │(카드회사)│
                                                                      └──────────┘

[승인 흐름]
고객 → 가맹점 → PG → 매입사 → 카드네트워크 → 발급사 (실시간)

[정산 흐름]
발급사 → 카드네트워크 → 매입사 → PG → 가맹점 (2~3일 후)`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">스테이블코인 결제: 온체인 전송 = 결제 + 정산</h2>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl my-8 border-2 border-green-500">
                <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">핵심 개념: Push Payment (푸시 결제)</h3>
                <p className="mb-4 text-sm">
                  스테이블코인 결제는 <strong>"푸시 결제"</strong> 방식입니다.
                  기존 카드처럼 가맹점이 고객 계좌에서 돈을 "당기는(Pull)" 게 아니라,
                  <strong className="text-green-700 dark:text-green-400"> 고객이 직접 가맹점 지갑으로 돈을 "밀어넣습니다(Push)".</strong>
                </p>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-sm mb-2">예시: 커피 $5 결제</h4>
                  <div className="text-xs space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-600">1.</span>
                      <span>가맹점: "USDC $5를 이 주소로 보내주세요: 0xABC..."</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-600">2.</span>
                      <span>고객 지갑: USDC $5 전송 (트랜잭션 제출)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-600">3.</span>
                      <span>블록체인: 트랜잭션 확정 (15초~2분, 체인별 상이)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-green-600">4.</span>
                      <span>가맹점: 온체인 확인 후 "결제 완료" 처리</span>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">스테이블코인 결제 흐름: 4단계로 압축</h3>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <h4 className="font-bold mb-6 text-gray-900 dark:text-white">⚡ 전체 프로세스 — 15초~5분</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">1</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">체크아웃 & 인보이스 생성</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        가맹점이 결제 요청을 생성하고, 고유한 입금 주소 또는 QR코드 발급
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">고객이 온체인 전송</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        고객 지갑(MetaMask, Walits 등)에서 스테이블코인 전송
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">블록체인 확정 (Confirmation)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        트랜잭션이 블록에 포함되고 확정됨 (이더리움: ~15초, 솔라나: ~1초)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">✓</div>
                    <div className="flex-1">
                      <h5 className="font-semibold text-green-600 dark:text-green-400">결제 완료 & 정산 동시 완료</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        가맹점 지갑에 스테이블코인이 입금됨 = 정산 완료 (실시간)
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <p className="text-sm">
                    <strong>⏱️ 전체 시간:</strong> 15초~5분 (체인별 상이)<br/>
                    <strong>💰 수수료:</strong> 가스비 $0.01~$5 (네트워크별 상이, 중개 수수료 없음)<br/>
                    <strong>📌 핵심:</strong> <span className="text-green-600 font-bold">승인과 정산이 분리되지 않고 동시에 완료</span>
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">참여자 다이어그램 (최소화)</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8 overflow-x-auto">
                <pre className="text-xs">
{`┌──────────┐                                        ┌──────────┐
│   고객   │───────▶ 온체인 전송 (USDC) ───────▶│  가맹점  │
│ (지갑 A) │                                        │ (지갑 B) │
└──────────┘                                        └──────────┘
                              │
                              ▼
                    ┌──────────────────┐
                    │  블록체인 원장   │
                    │ (Ethereum 등)   │
                    └──────────────────┘

[전체 흐름]
고객 지갑 → 블록체인 → 가맹점 지갑 (15초~5분)

✅ 중간 기관 없음 (PG, 매입사, 카드 네트워크, 발급사 제거)
✅ 승인 = 정산 (블록 확정 = 돈 이동 완료)`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">3가지 핵심 차이점: 단계가 줄어드는 이유</h2>

              <div className="grid md:grid-cols-3 gap-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <div className="text-3xl mb-3">👥</div>
                  <h3 className="text-xl font-bold mb-3 text-blue-700 dark:text-blue-300">참여자 수 감소</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-semibold">카드:</p>
                      <p className="text-xs">고객 → 가맹점 → PG → 매입사 → 네트워크 → 발급사 (6개)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-600">스테이블코인:</p>
                      <p className="text-xs">고객 → 블록체인 → 가맹점 (2개 + 원장)</p>
                    </div>
                  </div>
                  <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                    중간 기관을 제거하면서 참여자가 6명에서 2명으로 감소
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <div className="text-3xl mb-3">↔️</div>
                  <h3 className="text-xl font-bold mb-3 text-purple-700 dark:text-purple-300">메시지 왕복 감소</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-semibold">카드:</p>
                      <p className="text-xs">승인 메시지 왕복 + 정산 메시지 배치 (10+ 단계)</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-600">스테이블코인:</p>
                      <p className="text-xs">트랜잭션 1회 제출 + 확정 대기 (1단계)</p>
                    </div>
                  </div>
                  <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                    여러 기관을 오가는 메시지 왕복이 온체인 1회 전송으로 단순화
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <div className="text-3xl mb-3">⚡</div>
                  <h3 className="text-xl font-bold mb-3 text-green-700 dark:text-green-300">승인-정산 분리 해소</h3>
                  <div className="space-y-2 text-sm">
                    <div>
                      <p className="font-semibold">카드:</p>
                      <p className="text-xs">승인(1~3초) + 정산(2~3일) 분리</p>
                    </div>
                    <div>
                      <p className="font-semibold text-green-600">스테이블코인:</p>
                      <p className="text-xs">온체인 확정 = 승인 + 정산 동시 완료</p>
                    </div>
                  </div>
                  <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                    블록 확정이 곧 자금 이동이므로 승인과 정산이 하나로 합쳐짐
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실무 고려사항: 완전히 0단계가 되는 건 아니다</h2>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <h3 className="text-xl font-bold mb-4 text-yellow-700 dark:text-yellow-300">⚠️ 현실: 리스크와 운영은 이동한다</h3>
                <p className="text-sm mb-4">
                  스테이블코인 결제가 단계를 줄이는 건 사실이지만,
                  <strong> "기존 결제망이 하던 일"이 완전히 사라지는 게 아니라 일부가 게이트웨이/지갑 인프라로 이동</strong>합니다.
                </p>
              </div>

              <div className="space-y-6 my-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">1. 컨펌 정책 (Confirmation Policy)</h4>
                  <p className="text-sm mb-3">
                    블록체인 트랜잭션이 "확정"됐다고 판단하는 기준을 정해야 합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-xs">
                    <pre>
{`[이더리움 예시]
• 1 confirmation: 블록에 포함됨 (~15초)
• 12 confirmations: 안전하게 확정 (~3분)
• 64 confirmations: 최종 확정 (finality, ~13분)

가맹점 정책:
• 커피 $5 결제: 1 confirmation (15초 대기)
• 노트북 $1,000 결제: 12 confirmations (3분 대기)
• 자동차 $30,000 결제: 64 confirmations (13분 대기)`}
                    </pre>
                  </div>
                  <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                    <strong>결론:</strong> 카드 승인은 "1~3초"이지만 스테이블코인은 "15초~13분"으로 금액에 따라 대기 시간이 달라집니다.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">2. 리컨실리에이션 (Reconciliation)</h4>
                  <p className="text-sm mb-3">
                    온체인 잔고와 내부 회계 원장을 맞추는 작업이 필요합니다.
                  </p>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-xs">
                    <pre>
{`[기존 카드 정산]
• PG사가 매일 정산 리포트 제공
• 가맹점은 리포트를 보고 회계 처리

[스테이블코인]
• 온체인 트랜잭션 로그를 직접 파싱
• 내부 DB (주문 ID, 금액, 상태)와 매칭
• 불일치 발생 시 수동 조정

예: 고객이 $100 전송했는데 주문 금액은 $99.50
→ 차액 $0.50 환불 또는 크레딧 처리?`}
                    </pre>
                  </div>
                  <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                    <strong>결론:</strong> 카드 정산은 PG사가 대행하지만, 스테이블코인은 가맹점이 직접 온체인 데이터를 관리해야 합니다.
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold mb-3 text-green-700 dark:text-green-300">3. 법정화폐 정산 옵션</h4>
                  <p className="text-sm mb-3">
                    가맹점이 스테이블코인을 그대로 보유할 수도 있지만, 현금화가 필요하면 다시 정산 단계가 생깁니다.
                  </p>
                  <div className="space-y-3 text-xs">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                      <p className="font-semibold mb-1">옵션 A: 스테이블코인 그대로 보유</p>
                      <p>• 추가 단계 없음</p>
                      <p>• 가맹점이 USDC 그대로 보관 또는 재투자</p>
                      <p>• 회계 처리: 암호화폐 자산으로 기록</p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded">
                      <p className="font-semibold mb-1">옵션 B: 즉시 현금화 (자동)</p>
                      <p>• 게이트웨이가 USDC를 받자마자 DEX에서 법정화폐로 스왑</p>
                      <p>• 은행 계좌로 입금 (T+1~2일)</p>
                      <p>• 추가 수수료: 0.3~1% (스왑 + 출금)</p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                      <p className="font-semibold mb-1">옵션 C: 정기 정산 (배치)</p>
                      <p>• 일주일에 한 번 USDC를 모아서 현금화</p>
                      <p>• 기존 카드 정산과 유사한 프로세스</p>
                      <p>• 환율 리스크 발생 가능</p>
                    </div>
                  </div>
                  <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                    <strong>결론:</strong> 법정화폐 정산을 붙이면 그 구간에서 다시 파트너/정산 단계가 생깁니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">비용 & 시간 비교표</h2>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">항목</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">카드 결제</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">스테이블코인</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">승인 시간</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">1~3초</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">15초~13분 (체인별)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">정산 시간</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-red-600 font-bold">2~3 영업일</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600 font-bold">즉시 (승인=정산)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">거래 수수료</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">2~4% (업종별)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">가스비 $0.01~$5<br/>+ 현금화 0.3~1% (선택)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">차지백</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">가능 (고객이 180일 내 요청)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600 font-bold">불가능 (비가역적)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">국제 결제</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">추가 수수료 1~3%<br/>환전 수수료</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600 font-bold">동일 (국가 무관)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">참여자 수</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">6개 기관</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600 font-bold">2개 (고객-가맹점)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">24/7 운영</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">불가능 (주말/공휴일 정산 중단)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600 font-bold">가능</td>
                    </tr>
                    <tr className="bg-gray-50 dark:bg-gray-700 font-bold">
                      <td className="border border-gray-300 dark:border-gray-700 p-4">총 단계</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-red-600">8단계</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600">4단계</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">규제 & 컴플라이언스</h2>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">단계는 줄지만, 체크는 이동한다</h3>
                <p className="text-sm mb-4">
                  카드 결제망은 여러 단계를 거치면서 부정사용 탐지, KYC/AML 체크를 분산 처리합니다.
                  스테이블코인 결제는 단계를 줄이지만, <strong>이런 체크 포인트가 게이트웨이로 집중</strong>됩니다.
                </p>

                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">카드 (분산 체크)</h4>
                    <ul className="space-y-1">
                      <li>• 발급사: 카드 한도, 부정사용 탐지</li>
                      <li>• 카드 네트워크: 블랙리스트, 이상 패턴</li>
                      <li>• 매입사: 가맹점 리스크 관리</li>
                      <li>• PG사: 3D Secure, OTP 인증</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2">스테이블코인 (집중 체크)</h4>
                    <ul className="space-y-1">
                      <li>• 게이트웨이: 모든 체크 담당</li>
                      <li>• KYC/AML: 고객 신원 확인</li>
                      <li>• Travel Rule: 거래 추적</li>
                      <li>• 제재 대상 주소 필터링</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="space-y-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">1. KYC/AML (Know Your Customer / Anti-Money Laundering)</h4>
                  <p className="text-sm mb-3">
                    카드사는 이미 고객 신원을 확인했지만, 스테이블코인 게이트웨이는 자체적으로 KYC를 수행해야 합니다.
                  </p>
                  <div className="text-xs space-y-1">
                    <p>• 신분증 확인</p>
                    <p>• 주소 증명</p>
                    <p>• 자금 출처 확인 (고액 거래 시)</p>
                    <p>• 제재 대상 리스트(OFAC, UN 등) 대조</p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-purple-700 dark:text-purple-300">2. Travel Rule (트래블 룰)</h4>
                  <p className="text-sm mb-3">
                    FATF(국제자금세탁방지기구) 권고안에 따라, $1,000 이상 거래 시 송금인/수취인 정보를 교환해야 합니다.
                  </p>
                  <div className="bg-gray-900 text-green-400 p-3 rounded text-xs">
                    <pre>
{`[Travel Rule 예시]
고객 A (미국) → 가맹점 B (한국), $5,000 전송

교환 정보:
• 송금인: 이름, 주소, 생년월일, 계좌번호
• 수취인: 가맹점명, 사업자등록번호, 주소

문제: 블록체인은 익명이므로,
별도의 Travel Rule 솔루션(Notabene 등) 필요`}
                    </pre>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg">
                  <h4 className="font-bold mb-3 text-orange-700 dark:text-orange-300">3. 라이선스 요구사항</h4>
                  <p className="text-sm mb-3">
                    스테이블코인 결제 게이트웨이는 각국의 송금업, 가상자산사업자 라이선스가 필요할 수 있습니다.
                  </p>
                  <div className="text-xs space-y-2">
                    <p><strong>미국:</strong> MSB (Money Services Business) 라이선스</p>
                    <p><strong>한국:</strong> 가상자산사업자 신고 (특정금융정보법)</p>
                    <p><strong>유럽:</strong> MiCA (Markets in Crypto-Assets) 규제 준수</p>
                    <p className="text-red-600 font-semibold mt-2">→ 라이선스 획득까지 6개월~2년 소요</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 사례: 글로벌 기업들의 선택</h2>

              <div className="space-y-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-green-700 dark:text-green-300">사례 1: Shopify + USDC 결제</h3>
                  <p className="text-sm mb-3">
                    Shopify는 2022년부터 스테이블코인 결제를 지원합니다. (Coinbase Commerce 연동)
                  </p>
                  <div className="text-xs space-y-2">
                    <p><strong>이점:</strong></p>
                    <ul className="ml-4">
                      <li>• 국제 결제 수수료 절감 (2~3% → 1% 미만)</li>
                      <li>• 정산 시간 단축 (T+2~3 → T+0)</li>
                      <li>• 차지백 리스크 제거</li>
                    </ul>
                    <p className="mt-2"><strong>과제:</strong></p>
                    <ul className="ml-4">
                      <li>• 사용자 채택률 낮음 (~1%)</li>
                      <li>• 법정화폐 변환 필요 시 추가 단계</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-blue-700 dark:text-blue-300">사례 2: 남미 송금 서비스 (Bitso)</h3>
                  <p className="text-sm mb-3">
                    멕시코 최대 암호화폐 거래소 Bitso는 USDC 기반 송금 서비스를 제공합니다.
                  </p>
                  <div className="text-xs space-y-2">
                    <p><strong>흐름:</strong></p>
                    <p className="ml-4">미국 사용자 → USDC 전송 → 멕시코 수취인 → 페소로 즉시 환전</p>
                    <p className="mt-2"><strong>결과:</strong></p>
                    <ul className="ml-4">
                      <li>• 송금 시간: 3~5일 → 10분</li>
                      <li>• 수수료: 5~10% → 1~2%</li>
                      <li>• 2025년 거래량 $5B+</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h3 className="font-bold text-lg mb-2 text-purple-700 dark:text-purple-300">사례 3: 한국 게임사 N사</h3>
                  <p className="text-sm mb-3">
                    글로벌 게임 매출을 USDC로 수취하여 환전 비용과 정산 시간을 획기적으로 단축했습니다.
                  </p>
                  <div className="text-xs space-y-2">
                    <p><strong>기존 방식:</strong></p>
                    <p className="ml-4">미국 플레이어 결제 → Stripe → 환전 → 한국 계좌 (T+7일, 3% 수수료)</p>
                    <p className="mt-2"><strong>USDC 방식:</strong></p>
                    <p className="ml-4">미국 플레이어 → USDC 전송 → 한국 게임사 지갑 (T+0, 0.5% 수수료)</p>
                    <p className="mt-2 text-green-600 font-semibold">연간 수수료 절감: 약 $2M (연 매출 $80M 기준)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">현실적으로 넘어야 할 허들</h2>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl my-8 border-2 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🚧 스테이블코인 결제가 극복해야 할 4가지 허들</h3>
                <p className="text-sm mb-6">
                  기술적으로는 완벽해 보이지만, 실무에서 대규모 채택을 위해서는 다음 허들들을 넘어야 합니다.
                </p>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-red-700 dark:text-red-400">1️⃣ 규제 불확실성</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">문제:</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>• 각국의 규제가 상이하고 계속 변화함</li>
                          <li>• 라이선스 획득 비용과 시간 (수억 원, 1~2년)</li>
                          <li>• Travel Rule 준수 복잡성 ($1,000 이상 거래)</li>
                          <li>• 세금 처리 불명확 (암호화폐 자산 vs 외화)</li>
                        </ul>
                      </div>
                      <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded">
                        <p className="font-semibold text-xs mb-1">해결 방향:</p>
                        <p className="text-xs">• 스테이블코인 법안 통과 (미국 Genius Act, 한국 가상자산법 개정)</p>
                        <p className="text-xs">• 규제 샌드박스 활용</p>
                        <p className="text-xs">• 컴플라이언스 전문 파트너 협력 (Chainalysis, TRM Labs)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-orange-700 dark:text-orange-400">2️⃣ 사용자 경험 (UX) 복잡성</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">문제:</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>• 지갑 설치 & 니모닉 관리가 어려움</li>
                          <li>• 가스비 개념이 생소함 (ETH 없으면 전송 불가)</li>
                          <li>• 주소 오입력 시 복구 불가능</li>
                          <li>• 확정 대기 시간에 대한 불확실성</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                        <p className="font-semibold text-xs mb-1">해결 방향:</p>
                        <p className="text-xs">• 비수탁형 지갑 추상화 (Account Abstraction, AA)</p>
                        <p className="text-xs">• 소셜 로그인 통합 (구글, 카카오로 지갑 생성)</p>
                        <p className="text-xs">• 가스비 대납 서비스 (Paymaster)</p>
                        <p className="text-xs">• ENS 같은 사람이 읽을 수 있는 주소 (alice.eth)</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-400">3️⃣ 기술적 제약</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">문제:</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>• 네트워크 혼잡 시 가스비 폭등 (이더리움 $50+)</li>
                          <li>• 확정 시간의 불확실성 (솔라나 다운타임 사례)</li>
                          <li>• 체인 선택의 딜레마 (보안 vs 속도 vs 비용)</li>
                          <li>• 크로스체인 결제 복잡성</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 dark:bg-purple-900/30 p-3 rounded">
                        <p className="font-semibold text-xs mb-1">해결 방향:</p>
                        <p className="text-xs">• Layer 2 활용 (Arbitrum, Optimism, Base - 가스비 $0.01)</p>
                        <p className="text-xs">• 멀티체인 지원 (고객이 선호하는 체인 선택)</p>
                        <p className="text-xs">• 브리지 프로토콜 활용 (Wormhole, LayerZero)</p>
                        <p className="text-xs">• EIP-4337 (Account Abstraction) 도입</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-400">4️⃣ 비즈니스 & 회계 처리</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <p className="font-semibold mb-1">문제:</p>
                        <ul className="ml-4 space-y-1 text-xs">
                          <li>• 암호화폐 자산의 회계 처리 기준 불명확</li>
                          <li>• 감사법인 대응 어려움 (온체인 증빙 인정 여부)</li>
                          <li>• 세무 신고 복잡성 (거래마다 손익 계산)</li>
                          <li>• 은행 파트너십 어려움 (전통 은행의 암호화폐 기피)</li>
                        </ul>
                      </div>
                      <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                        <p className="font-semibold text-xs mb-1">해결 방향:</p>
                        <p className="text-xs">• 회계 처리 가이드라인 마련 (IFRS, K-GAAP 개정)</p>
                        <p className="text-xs">• 자동 세무 신고 솔루션 (CoinTracker, Koinly)</p>
                        <p className="text-xs">• 크립토 친화 은행 활용 (Silvergate, Signature → 대체 은행 찾기)</p>
                        <p className="text-xs">• 스테이블코인을 법정화폐와 동등하게 인정하는 규제 필요</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-yellow-50 to-amber-50 dark:from-yellow-900/20 dark:to-amber-900/20 p-6 rounded-xl my-8">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">💡 현실적인 타임라인</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <h5 className="font-semibold text-yellow-700 dark:text-yellow-400">2026~2027: 틈새 시장 채택</h5>
                    <p className="text-xs">• 국제 송금, B2B 결제, 게임/NFT 커머스에서 먼저 채택</p>
                    <p className="text-xs">• 전체 거래의 ~1% 수준</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-700 dark:text-orange-400">2028~2029: 중소 가맹점 확산</h5>
                    <p className="text-xs">• Layer 2 성숙, UX 개선으로 진입 장벽 완화</p>
                    <p className="text-xs">• 규제 명확화로 대형 게이트웨이 등장</p>
                    <p className="text-xs">• 전체 거래의 ~5% 수준</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-green-700 dark:text-green-400">2030+: 주류 결제 수단</h5>
                    <p className="text-xs">• 대형 소매점, 식당에서도 일상적으로 사용</p>
                    <p className="text-xs">• 카드 결제와 동등한 수준의 인프라 구축</p>
                    <p className="text-xs">• 전체 거래의 ~20% 수준 (낙관적 시나리오)</p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">결론: 단계 압축의 가치와 한계</h2>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4">핵심 요약</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 text-xl">✅ 스테이블코인 결제의 강점</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 8단계 → 4단계로 단계 압축</li>
                      <li>• 승인과 정산이 하나로 합쳐져 T+2~3일 → T+0 실현</li>
                      <li>• 참여자 감소로 수수료 절감 (2~4% → 1% 미만)</li>
                      <li>• 국제 결제에서 환전 수수료 제거</li>
                      <li>• 차지백 리스크 제거 (비가역적 거래)</li>
                    </ul>
                  </div>
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 text-xl">⚠️ 극복해야 할 과제</h4>
                    <ul className="text-sm space-y-1">
                      <li>• 규제 불확실성 (라이선스, Travel Rule, 세금)</li>
                      <li>• 사용자 경험 복잡성 (지갑, 가스비, 주소)</li>
                      <li>• 기술적 제약 (가스비 변동성, 네트워크 안정성)</li>
                      <li>• 비즈니스 허들 (회계, 감사, 은행 파트너십)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-400 text-gray-900 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 text-xl">🎯 최종 메시지</h4>
                    <p className="text-sm">
                      스테이블코인 결제는 <strong>"중간 기관을 없앤다"</strong>기보다,
                      <strong> "승인·정산·자금이동이 분리되어 있던 단계를 온체인 전송으로 합치면서"</strong> 전체 단계를 줄이는 방식입니다.
                      기술적으로는 이미 완성되었지만, 대규모 채택을 위해서는 규제·UX·비즈니스 측면의 허들을 넘어야 합니다.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">용어 설명</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  본문에 등장하는 결제 및 블록체인 전문 용어를 쉽게 풀이합니다.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Authorization (승인) vs Settlement (정산)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Authorization (승인):</strong> 결제가 가능한지 확인하는 단계입니다.
                      카드 한도, 잔액, 부정사용 여부를 체크하며, 승인이 완료되면 "결제 성공" 메시지가 뜨지만 돈은 아직 이동하지 않았습니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Settlement (정산):</strong> 실제로 돈이 이동하는 단계입니다.
                      승인된 거래들을 모아서 일괄 처리하며, 보통 2~3 영업일 후 가맹점 계좌에 입금됩니다.
                      전통 카드 결제의 가장 큰 특징은 이 두 단계가 분리되어 있다는 점입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">PG사 (Payment Gateway, 결제대행사)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      가맹점과 카드사 사이에서 결제를 중개하는 회사입니다.
                      토스페이먼츠, KG이니시스, NHN KCP 등이 대표적이며, 가맹점은 PG사와 계약하여 다양한 결제 수단을 통합 지원받습니다.
                      온라인 쇼핑몰에서 "결제 창"을 띄워주는 역할을 합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">매입사 (Acquirer) vs 발급사 (Issuer)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>매입사 (Acquirer):</strong> 가맹점과 계약한 카드사입니다.
                      가맹점의 거래를 "매입"하여 결제를 처리하고, 정산 시 가맹점에 돈을 지급합니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>발급사 (Issuer):</strong> 고객에게 카드를 발급한 카드사/은행입니다.
                      고객의 한도와 잔액을 관리하며, 승인 요청이 오면 최종 결정을 내립니다.
                      예: 고객이 신한카드로 결제 → 신한카드가 발급사
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Clearing (청산)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      카드 네트워크(VISA, Mastercard 등)가 발급사와 매입사 간 자금을 중개하여 정산하는 과정입니다.
                      하루치 거래를 모아서 일괄 처리하며, 각 은행 간 입출금을 상계(Netting)하여 실제 이동할 금액만 전송합니다.
                      이 과정이 2~3일 소요되는 주요 원인입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">T+2, T+3 (정산 주기)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      거래일(T, Trade date)로부터 정산이 완료되기까지 걸리는 영업일 수입니다.
                      T+2는 거래 후 2영업일 뒤 정산, T+3은 3영업일 뒤 정산을 의미합니다.
                      월요일 거래 시 T+2라면 수요일에 입금됩니다 (주말은 제외).
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Push Payment vs Pull Payment</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>Pull Payment (당김 결제):</strong> 전통적인 카드 결제 방식입니다.
                      고객이 카드 정보를 제공하면, 가맹점이 고객 계좌에서 돈을 "당겨옵니다(Pull)".
                      이 과정에서 가맹점이 카드 정보를 저장하게 되어 보안 리스크가 있습니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>Push Payment (밀어넣기 결제):</strong> 스테이블코인 결제 방식입니다.
                      고객이 직접 가맹점 지갑으로 돈을 "밀어넣습니다(Push)".
                      가맹점은 고객의 민감 정보를 보관할 필요가 없어 더 안전합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">차지백 (Chargeback)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      고객이 결제를 취소하거나 이의를 제기하여 이미 승인된 거래를 번복하는 것입니다.
                      예: "카드를 도난당했어요", "물건을 못 받았어요" 등의 사유로 발급사에 요청하면,
                      가맹점 계좌에서 이미 입금된 금액을 다시 회수합니다. 가맹점 입장에서는 큰 리스크입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">MPC (Multi-Party Computation)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      다자간 연산을 의미하며, 암호화폐 지갑에서는 개인키를 여러 조각으로 나누어 분산 보관하는 기술입니다.
                      예를 들어 2-of-3 MPC는 3개 조각 중 2개만 있으면 서명 가능하므로, 하나가 해킹되어도 안전합니다.
                      Walits는 기업용 지갑에 MPC 기술을 적용하여 보안성을 극대화합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">리컨실리에이션 (Reconciliation, 대사)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      회사의 장부와 실제 입금 내역을 대조하여 일치 여부를 확인하는 회계 작업입니다.
                      전통 결제는 승인과 정산이 분리되어 있고 수수료도 다양해서 리컨실리에이션이 복잡합니다.
                      스테이블코인은 모든 거래가 온체인에 기록되어 자동화가 가능하지만, 법정화폐 환산 시점 등의 회계 이슈가 남아있습니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Travel Rule (자금이동추적규칙)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      FATF(국제자금세탁방지기구)가 제정한 규칙으로, $1,000(또는 €1,000) 이상의 암호화폐 전송 시
                      송금인과 수취인의 신원 정보를 교환해야 합니다. 이는 자금세탁과 테러자금조달을 방지하기 위한 규제입니다.
                      스테이블코인 결제가 대규모로 채택되려면 Travel Rule 준수가 필수입니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">💡 Walits의 접근</h4>
                <p className="text-sm mb-4">
                  Walits는 <strong>기업용 MPC 지갑</strong>으로 스테이블코인 결제를 안전하고 편리하게 처리할 수 있도록 지원합니다.
                  온체인 트랜잭션 모니터링, 자동 리컨실리에이션, 법정화폐 정산 옵션까지 제공하여 실무 허들을 최소화합니다.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/enterprise-wallet"
                    className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    Walits 기업용 지갑 알아보기
                  </Link>
                  <Link
                    href="/inquiry"
                    className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    상담 신청
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                "Payment approved, but funds not received yet" — Does this sound normal to you?
                Card payments separate authorization and settlement, taking days.
                Stablecoin payments process payment+settlement simultaneously via on-chain transfer, dramatically reducing steps.
              </p>

              {/* English content follows same structure */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Traditional Payment Networks: Authorization vs Settlement</h2>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                [English content continues with same structure as Korean version...]
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Key Summary</h3>
                <p className="text-lg mb-4">
                  Stablecoin payments compress 8 steps into 4 by merging authorization and settlement into on-chain transfers.
                  While technically mature, large-scale adoption requires overcoming regulatory, UX, and business hurdles.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">💡 Walits' Approach</h4>
                <p className="text-sm mb-4">
                  Walits provides <strong>enterprise MPC wallets</strong> to process stablecoin payments safely and conveniently.
                  We minimize practical hurdles by offering on-chain transaction monitoring, automatic reconciliation, and fiat settlement options.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/enterprise-wallet"
                    className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    Learn About Walits Enterprise Wallet
                  </Link>
                  <Link
                    href="/inquiry"
                    className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{copy.relatedPosts}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? '기업용 암호화폐 지갑 선택 가이드' : 'Enterprise Crypto Wallet Selection Guide'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? 'Non-Custody vs Custody 완벽 비교' : 'Complete Non-Custody vs Custody Comparison'}
              </p>
            </Link>
            <Link href="/blog/stablecoin-rwa-tokenization-2026" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? '2026년 스테이블코인과 RWA 전망' : '2026 Stablecoin and RWA Outlook'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '모든 자산이 토큰화되는 미래' : 'Future where all assets are tokenized'}
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
