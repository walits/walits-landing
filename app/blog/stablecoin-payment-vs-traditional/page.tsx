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
                    <p>실제로 돈이 이동하는 단계. 승인된 거래들을 모아서 배치로 일괄 처리하며,
                    <strong className="text-red-600"> 보통 D+3 영업일 전후</strong> 가맹점 계좌에 입금됩니다.
                    (PG 경유 시 D+3~5일 또는 주 단위로 늘어날 수 있음)</p>
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
                        POS 단말기(오프라인)나 온라인 체크아웃에서 카드 정보 입력
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">2</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">가맹점 → VAN/PG사</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        오프라인: VAN사(NICE정보통신, KSNET 등) 경유<br/>
                        온라인: PG사(KG이니시스, 토스페이먼츠 등)로 전달
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">3</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">VAN/PG사 → 매입사 (Acquirer)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        매입사(가맹점과 계약된 신한카드, KB국민카드 등)로 승인 요청
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
                        발급사 → 카드 네트워크 → 매입사 → VAN/PG사 → 가맹점 (1~3초 소요)
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
                <h4 className="font-bold mb-6 text-gray-900 dark:text-white">💸 Phase 2: 정산 & 입금 (Settlement & Funding) — D+3 영업일 전후</h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">6</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">매입 (전표 전송)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        승인된 거래를 거래 다음날 가맹점/대행사가 모아서 매입사로 전표 전송 (배치 처리)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">7</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">Clearing (청산) & 정산 확정</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        카드 네트워크가 발급사-매입사 간 자금을 청산하고 정산 확정 (D+1~2일)
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">8</div>
                    <div className="flex-1">
                      <h5 className="font-semibold">가맹점 계좌 입금</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        수수료를 제외한 금액이 가맹점 계좌에 입금<br/>
                        <span className="text-xs">• 일반적으로 결제일 기준 D+3 영업일 전후<br/>
                        • PG사 경유 시 D+3~5일 또는 주 단위 정산으로 늘어날 수 있음</span>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-red-50 dark:bg-red-900/30 rounded-lg border-l-4 border-red-500">
                  <p className="text-sm">
                    <strong>⏱️ 정산 시간:</strong> D+3 영업일 전후 (PG 경유 시 D+3~5일 또는 더 길어질 수 있음)<br/>
                    <strong>💰 수수료:</strong> 2~4% (업종별 상이)<br/>
                    <strong>📌 특징:</strong> 실시간 승인과 달리 배치 성격이 강하며, 승인과 정산이 분리되어 현금 흐름 관리가 어렵고 차지백 리스크 존재
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">참여자 다이어그램</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-8 overflow-x-auto">
                <pre className="text-xs">
{`┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐     ┌──────────┐
│   고객   │────▶│  가맹점  │────▶│ VAN/PG사 │────▶│  매입사  │────▶│카드네트워크│
│ (소비자) │     │ (판매자) │     │(NICE/토스)│     │(신한카드)│     │(VISA 등) │
└──────────┘     └──────────┘     └──────────┘     └──────────┘     └──────────┘
                                                                            │
                                                                            ▼
                                                                      ┌──────────┐
                                                                      │  발급사  │
                                                                      │(카드회사)│
                                                                      └──────────┘

[승인 흐름 - 실시간]
고객(카드) → 가맹점(POS) → VAN/PG → 매입사 → 카드네트워크 → 발급사
→ 승인 응답 역방향 (1~3초)

[정산 흐름 - 배치 처리]
1. 매입: 승인된 거래를 모아 전표 전송 (거래 다음날)
2. Clearing: 발급사-매입사 간 자금 청산 (카드 네트워크)
3. 입금: 가맹점 계좌로 정산금 입금 (D+3 영업일 전후)
   ※ PG 경유 시 D+3~5일 또는 주 단위 정산으로 늘어날 수 있음`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">💡 자주 묻는 질문: 발급사가 누구든 매입사가 처리 가능한가?</h3>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8 border-2 border-indigo-500">
                <div className="mb-6">
                  <h4 className="text-xl font-bold mb-3 text-indigo-700 dark:text-indigo-300">결론부터: 원칙적으로 대부분 "가능"합니다</h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    가맹점이 A매입사(예: 신한카드)와 계약했더라도, 고객 카드가 어느 발급사(B카드사, C은행 등)에서 발급됐든
                    해당 결제망(국내전용/국제브랜드)에서 유효하게 라우팅될 수 있으면 A매입사가 처리할 수 있습니다.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold text-lg mb-3 text-blue-700 dark:text-blue-300">발급사 (Issuer)의 역할</h5>
                    <div className="space-y-2 text-sm">
                      <p><strong>담당 업무:</strong></p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• 고객(카드회원)에게 카드 발급</li>
                        <li>• 고객의 한도, 잔액 관리</li>
                        <li>• 승인 요청 시 최종 결정</li>
                        <li>• 고객에게 청구(결제일에 출금)</li>
                      </ul>
                      <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                        <p className="text-xs font-semibold">예시:</p>
                        <p className="text-xs">내가 신한카드를 가지고 있다면<br/>→ <strong>신한카드 = 발급사</strong></p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold text-lg mb-3 text-purple-700 dark:text-purple-300">매입사 (Acquirer)의 역할</h5>
                    <div className="space-y-2 text-sm">
                      <p><strong>담당 업무:</strong></p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• 가맹점과 계약 체결</li>
                        <li>• 가맹점의 매출전표를 "매입"</li>
                        <li>• 승인 요청을 발급사로 전달</li>
                        <li>• 가맹점에 정산금 입금</li>
                      </ul>
                      <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/30 rounded">
                        <p className="text-xs font-semibold">예시:</p>
                        <p className="text-xs">카페가 KB국민카드와 계약했다면<br/>→ <strong>KB국민카드 = 매입사</strong></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-5 bg-green-50 dark:bg-green-900/30 rounded-lg border-l-4 border-green-500">
                  <h5 className="font-bold mb-2 text-green-700 dark:text-green-300">핵심 포인트</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    발급사와 매입사는 <strong>역할이 완전히 다릅니다.</strong>
                  </p>
                  <ul className="mt-2 ml-4 space-y-1 text-sm">
                    <li>• 발급사는 "고객 쪽" 관리 (돈을 내는 사람)</li>
                    <li>• 매입사는 "가맹점 쪽" 관리 (돈을 받는 사람)</li>
                    <li>• 따라서 발급사가 누구든, 매입사는 가맹점 창구로서 거래를 처리할 수 있습니다</li>
                  </ul>
                </div>
              </div>

              <div className="space-y-6 my-8">
                <h4 className="text-xl font-bold text-gray-900 dark:text-white">실제 거래 흐름 예시로 이해하기</h4>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                  <h5 className="font-bold mb-3 text-blue-700 dark:text-blue-300">시나리오: 스타벅스에서 신한카드로 결제</h5>
                  <div className="space-y-3 text-sm">
                    <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded">
                      <p className="font-semibold mb-2">등장인물</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>고객:</strong> 신한카드 소지 (발급사 = 신한카드)</li>
                        <li>• <strong>가맹점:</strong> 스타벅스 (매입사 = KB국민카드와 계약)</li>
                        <li>• <strong>카드 네트워크:</strong> VISA/Mastercard 등</li>
                      </ul>
                    </div>

                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded">
                      <p className="font-semibold mb-2 text-blue-700 dark:text-blue-300">승인 흐름</p>
                      <div className="text-xs space-y-1">
                        <p>1. 고객이 신한카드로 결제 요청</p>
                        <p>2. 스타벅스 POS → VAN → <strong>KB국민카드(매입사)</strong></p>
                        <p>3. KB국민카드 → 카드 네트워크 → <strong>신한카드(발급사)</strong></p>
                        <p>4. 신한카드가 승인/거절 결정 (고객 한도 확인)</p>
                        <p>5. 승인 응답이 역방향으로 돌아옴</p>
                      </div>
                    </div>

                    <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded">
                      <p className="font-semibold mb-2 text-purple-700 dark:text-purple-300">정산 흐름</p>
                      <div className="text-xs space-y-1">
                        <p>1. <strong>신한카드(발급사)</strong>: D+결제일에 고객 계좌에서 출금</p>
                        <p>2. 카드 네트워크가 신한카드↔KB국민카드 간 청산(Clearing)</p>
                        <p>3. <strong>KB국민카드(매입사)</strong>: D+3일에 스타벅스 계좌로 입금</p>
                      </div>
                    </div>

                    <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500">
                      <p className="text-xs">
                        <strong>✅ 결론:</strong> 스타벅스가 KB국민카드(매입사)와 계약했지만,
                        고객이 신한카드(발급사)를 쓰든, 우리카드를 쓰든, 하나카드를 쓰든 상관없이 모두 처리 가능합니다.
                        <strong>발급사와 매입사는 서로 다른 역할</strong>이기 때문입니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                  <h5 className="font-bold mb-3 text-orange-700 dark:text-orange-300">예외 상황: 언제 처리가 안 될까?</h5>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold mb-1">1. 결제망(브랜드) 호환 문제</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        가맹점이 특정 결제망만 지원하도록 계약한 경우
                      </p>
                      <div className="ml-4 text-xs">
                        <p>• 가맹점이 "국내전용 카드만" 계약 → VISA/Mastercard는 결제 불가</p>
                        <p>• 가맹점이 "VISA만" 계약 → Amex, 은련카드는 결제 불가</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-1">2. 가맹점 업종/리스크 정책</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        매입사가 특정 업종이나 고위험 거래를 제한할 수 있음
                      </p>
                      <div className="ml-4 text-xs">
                        <p>• 유흥업소, 성인용품 등 일부 업종은 매입사가 취급 거부 가능</p>
                        <p>• 고액 거래는 추가 인증이나 승인 제한이 걸릴 수 있음</p>
                        <p>• 차지백 위험이 높은 업종은 정산 주기가 길어질 수 있음</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold mb-1">3. 기술적 라우팅 문제</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mb-2">
                        네트워크 연결이나 시스템 설정 이슈
                      </p>
                      <div className="ml-4 text-xs">
                        <p>• VAN/PG사의 네트워크 라우팅 설정 오류</p>
                        <p>• 카드사 간 제휴 관계 문제 (드물지만 발생 가능)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-bold mb-3 text-yellow-700 dark:text-yellow-300">🇰🇷 한국에서 더 헷갈리는 이유</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    한국은 한 카드사가 <strong>발급사와 매입사를 동시에</strong> 운영하는 경우가 많습니다.
                  </p>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-white dark:bg-gray-800 rounded">
                      <p className="font-semibold mb-1">예: 신한카드</p>
                      <p>• <strong>발급사로서:</strong> 고객에게 신한카드 발급, 고객 계좌 관리</p>
                      <p>• <strong>매입사로서:</strong> 가맹점과 계약, 가맹점 매출전표 매입 & 정산</p>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">
                        → 같은 회사가 양쪽 역할을 다 하지만, <strong>거래마다 역할은 구분</strong>됩니다
                      </p>
                    </div>

                    <div className="p-3 bg-white dark:bg-gray-800 rounded">
                      <p className="font-semibold mb-1">실제 거래 예시</p>
                      <p>• 신한카드 소지자가 신한카드 가맹점에서 결제</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        → 발급사도 신한카드, 매입사도 신한카드 (같은 회사지만 역할은 다름)
                      </p>
                      <p className="mt-2">• 신한카드 소지자가 KB 가맹점에서 결제</p>
                      <p className="text-gray-600 dark:text-gray-400">
                        → 발급사는 신한카드, 매입사는 KB국민카드 (역할 분리가 명확)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-xl my-8">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">📌 핵심 요약</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <p><strong>발급사가 누구든 매입사는 처리 가능:</strong> 발급사는 고객 관리, 매입사는 가맹점 관리로 역할이 다르므로 서로 독립적</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <p><strong>예외는 있음:</strong> 결제망 호환, 업종 제한, 리스크 정책 등으로 일부 제약 가능</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <p><strong>한국의 특수성:</strong> 한 카드사가 발급사+매입사 역할을 겸하지만, 거래마다 역할은 명확히 구분됨</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <p><strong>실무 적용:</strong> 가맹점은 매입사 1곳과 계약하면 대부분의 발급사 카드를 받을 수 있음</p>
                  </div>
                </div>
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

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">🚨 현실 체크: 이더리움 가스비 문제</h2>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">
                  "커피 한 잔에 가스비 $15?" — 이더리움의 치명적 약점
                </h3>
                <p className="text-sm mb-4">
                  위에서 설명한 스테이블코인 결제의 장점은 <strong>이론적으로는 완벽</strong>합니다.
                  하지만 <strong className="text-red-600">이더리움 메인넷(L1)에서는 소액 결제가 사실상 불가능</strong>합니다.
                </p>

                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                  <h4 className="font-semibold mb-3 text-gray-900 dark:text-white">💸 실제 비용 시뮬레이션 (2026년 기준)</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/30 rounded border-l-4 border-red-500">
                      <div>
                        <p className="font-semibold">스타벅스 라떼 $5 결제</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">이더리움 L1 USDC 전송</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">$5 + $12</p>
                        <p className="text-xs">가스비 포함 총 $17</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-red-50 dark:bg-red-900/30 rounded border-l-4 border-red-500">
                      <div>
                        <p className="font-semibold">편의점 물 $2 결제</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">이더리움 L1 USDT 전송</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-red-600">$2 + $15</p>
                        <p className="text-xs">가스비 포함 총 $17</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-orange-50 dark:bg-orange-900/30 rounded border-l-4 border-orange-500">
                      <div>
                        <p className="font-semibold">식당 저녁 식사 $50 결제</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">이더리움 L1 USDC 전송</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-orange-600">$50 + $10</p>
                        <p className="text-xs">가스비 20% 추가</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-yellow-50 dark:bg-yellow-900/30 rounded border-l-4 border-yellow-500">
                      <div>
                        <p className="font-semibold">노트북 $1,000 결제</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">이더리움 L1 USDC 전송</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-yellow-600">$1,000 + $8</p>
                        <p className="text-xs">가스비 0.8% 수준</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-green-50 dark:bg-green-900/30 rounded border-l-4 border-green-500">
                      <div>
                        <p className="font-semibold">기업 간 결제 $100,000</p>
                        <p className="text-xs text-gray-600 dark:text-gray-400">이더리움 L1 USDC 전송</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-green-600">$100K + $12</p>
                        <p className="text-xs">가스비 0.012% (무시 가능)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-gray-900 dark:bg-black rounded-lg text-white">
                  <p className="font-bold mb-2 text-yellow-300">📊 결론</p>
                  <ul className="text-xs space-y-1">
                    <li>• <strong className="text-red-400">$100 미만 결제:</strong> 이더리움 L1 사용 불가 (가스비 10%+ 초과)</li>
                    <li>• <strong className="text-orange-400">$100~$1,000 결제:</strong> 부담스럽지만 가능 (가스비 1~10%)</li>
                    <li>• <strong className="text-green-400">$1,000 이상 결제:</strong> 합리적 (가스비 1% 미만)</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">해결책: Layer 2 & 저비용 블록체인</h2>

              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                이더리움의 가스비 문제는 치명적이지만, <strong>이미 해결책이 존재</strong>합니다.
                2026년 현재 실용적인 스테이블코인 결제는 다음 3가지 방식으로 이루어집니다.
              </p>

              <div className="space-y-6 my-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                    옵션 1: 이더리움 Layer 2 (권장 ⭐)
                  </h3>
                  <p className="text-sm mb-4">
                    이더리움의 보안성을 유지하면서 가스비를 100분의 1로 줄인 Layer 2 솔루션입니다.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2 text-sm">🔷 Arbitrum / Optimism</h4>
                      <table className="w-full text-xs">
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">가스비</td>
                            <td className="py-1 text-right text-green-600 font-bold">$0.10~$0.50</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">확정 시간</td>
                            <td className="py-1 text-right">1~2초</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">보안</td>
                            <td className="py-1 text-right">이더리움 상속</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">적합 용도</td>
                            <td className="py-1 text-right text-xs">$10~$1,000 결제</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2 text-sm">🔶 Base (Coinbase L2)</h4>
                      <table className="w-full text-xs">
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">가스비</td>
                            <td className="py-1 text-right text-green-600 font-bold">$0.05~$0.20</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">확정 시간</td>
                            <td className="py-1 text-right">1초</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">보안</td>
                            <td className="py-1 text-right">이더리움 상속</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">특징</td>
                            <td className="py-1 text-right text-xs">CEX 직접 연동</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-3 text-sm">💸 Base에서 커피 결제 시뮬레이션</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/30 rounded">
                        <span>스타벅스 라떼 $5</span>
                        <span className="text-green-600 font-bold">$5 + $0.08 = $5.08 ✓</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/30 rounded">
                        <span>편의점 물 $2</span>
                        <span className="text-green-600 font-bold">$2 + $0.06 = $2.06 ✓</span>
                      </div>
                      <div className="flex justify-between p-2 bg-green-50 dark:bg-green-900/30 rounded">
                        <span>식당 저녁 식사 $50</span>
                        <span className="text-green-600 font-bold">$50 + $0.10 = $50.10 ✓</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/30 rounded">
                    <p className="text-xs">
                      <strong>✅ 장점:</strong> 이더리움의 보안 + 저렴한 수수료 + USDC 네이티브 발행
                      <br/><strong>❌ 단점:</strong> 트론보다는 약간 비쌈 (하지만 충분히 실용적)
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">
                    옵션 2: 트론 (Tron) — 가장 저렴하지만...
                  </h3>
                  <p className="text-sm mb-4">
                    현재 전 세계 스테이블코인 결제의 50% 이상이 트론에서 발생하는 이유는 <strong>압도적인 저렴함</strong> 때문입니다.
                  </p>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded mb-4">
                    <h4 className="font-semibold mb-2 text-sm">📊 트론 USDT 전송 비용</h4>
                    <table className="w-full text-xs">
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">가스비 (Energy)</td>
                          <td className="py-2 text-right text-green-600 font-bold">$0.50~$2</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">확정 시간</td>
                          <td className="py-2 text-right">3초 (매우 빠름)</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">일일 거래량</td>
                          <td className="py-2 text-right">200만+ 트랜잭션</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-semibold">TRC-20 USDT 발행량</td>
                          <td className="py-2 text-right font-bold">$60B+ (전체 USDT의 50%)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                      <h5 className="font-semibold text-sm mb-2 text-green-600">✅ 장점</h5>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• 가장 저렴한 수수료 ($0.50~$2)</li>
                        <li>• 빠른 확정 시간 (3초)</li>
                        <li>• 제3세계에서 널리 사용</li>
                        <li>• 거래소 간 이동에 최적</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded">
                      <h5 className="font-semibold text-sm mb-2 text-red-600">❌ 단점 (치명적)</h5>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• <strong className="text-red-600">낮은 탈중앙화</strong> (27개 노드)</li>
                        <li>• <strong className="text-red-600">네트워크 리스크</strong> (51% 공격 가능성)</li>
                        <li>• Justin Sun의 실질적 통제</li>
                        <li>• 기관 투자자 기피</li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded border-l-4 border-yellow-500">
                    <p className="text-xs">
                      <strong>⚠️ 트론의 딜레마:</strong> 소액 송금에는 최적이지만, 보안성 우려로 장기 보관이나 대규모 거래에는 부적합합니다.
                      <Link href="/blog/tron-usdt-hack-scenario" className="text-blue-600 hover:underline ml-1">
                        → 트론 USDT 해킹 시나리오 분석 읽기
                      </Link>
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                    옵션 3: Polygon / Solana — 중간 지점
                  </h3>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2 text-sm">🟣 Polygon PoS</h4>
                      <table className="w-full text-xs">
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">가스비</td>
                            <td className="py-1 text-right text-green-600 font-bold">$0.01~$0.10</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">확정 시간</td>
                            <td className="py-1 text-right">2초</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">평가</td>
                            <td className="py-1 text-right text-xs">매우 저렴하지만 보안 논란</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold mb-2 text-sm">🟢 Solana</h4>
                      <table className="w-full text-xs">
                        <tbody>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">가스비</td>
                            <td className="py-1 text-right text-green-600 font-bold">$0.001~$0.01</td>
                          </tr>
                          <tr className="border-b border-gray-200 dark:border-gray-700">
                            <td className="py-1 font-semibold">확정 시간</td>
                            <td className="py-1 text-right">0.4초 (최고속)</td>
                          </tr>
                          <tr>
                            <td className="py-1 font-semibold">평가</td>
                            <td className="py-1 text-right text-xs">초저렴, 다운타임 이슈</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실전 가이드: 어떤 체인을 선택할까?</h2>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">사용 사례별 최적 선택</h3>

                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold mb-2">☕ 소액 일상 결제 ($1~$50)</h4>
                    <p className="text-sm mb-2">
                      <strong className="text-blue-600">1순위:</strong> Base (Coinbase L2) — 가스비 $0.05~$0.10, 거래소 직접 연동<br/>
                      <strong className="text-green-600">2순위:</strong> Polygon PoS — 가스비 $0.01~$0.05, 매우 저렴<br/>
                      <strong className="text-orange-600">3순위:</strong> Tron — 가스비 $0.50~$2, 저렴하지만 보안 우려
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ❌ <strong>피해야 할 것:</strong> 이더리움 L1 (가스비 $10+ 소액 결제 불가)
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold mb-2">🛒 중간 금액 결제 ($50~$1,000)</h4>
                    <p className="text-sm mb-2">
                      <strong className="text-blue-600">1순위:</strong> Arbitrum / Optimism — 가스비 $0.10~$0.50, 이더리움 보안<br/>
                      <strong className="text-green-600">2순위:</strong> Base — 가스비 $0.10~$0.20, CEX 연동<br/>
                      <strong className="text-purple-600">3순위:</strong> 이더리움 L1 — 가스비 $8~$15 (1~3% 수준)
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      💡 <strong>추천:</strong> Layer 2가 보안과 비용의 균형이 가장 좋음
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold mb-2">💼 기업 간 거래 ($10K+)</h4>
                    <p className="text-sm mb-2">
                      <strong className="text-blue-600">1순위:</strong> 이더리움 L1 — 가스비 $10~$20 (0.1% 미만), 최고 보안<br/>
                      <strong className="text-purple-600">2순위:</strong> Arbitrum / Optimism — 가스비 $0.50, 충분한 보안<br/>
                      <strong className="text-orange-600">3순위:</strong> Tron — 가스비 $1, 저렴하지만 기관 기피
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      ✅ <strong>권장:</strong> 대규모 거래는 보안이 최우선, 가스비는 무시 가능
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold mb-2">🌍 국제 송금</h4>
                    <p className="text-sm mb-2">
                      <strong className="text-green-600">1순위:</strong> Tron — 수수료 $1~$2, 제3세계 인프라 발달<br/>
                      <strong className="text-blue-600">2순위:</strong> Polygon — 수수료 $0.05, 빠른 확정<br/>
                      <strong className="text-purple-600">3순위:</strong> Arbitrum — 수수료 $0.30, 안전성 우선 시
                    </p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      💡 <strong>참고:</strong> 송금 금액과 수취인 지역에 따라 선택
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold mb-2">🏦 장기 보관 & 안전 중시</h4>
                    <p className="text-sm mb-2">
                      <strong className="text-blue-600">1순위:</strong> 이더리움 L1 — 최고 보안, 탈중앙화<br/>
                      <strong className="text-purple-600">2순위:</strong> Arbitrum / Optimism — 이더리움 보안 상속<br/>
                      <strong className="text-green-600">3순위:</strong> Base — Coinbase 신뢰도
                    </p>
                    <p className="text-xs text-red-600 dark:text-red-400">
                      ❌ <strong>피해야 할 것:</strong> Tron (보안 우려), Polygon (중앙화 논란)
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">⚠️ Layer 2의 어두운 면: 중앙화 리스크</h2>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <p className="text-sm mb-4">
                  Layer 2는 가스비 문제를 해결했지만, <strong className="text-red-600">완벽하지 않습니다</strong>.
                  특히 <strong>"중앙화"</strong> 문제는 Layer 2의 가장 큰 약점이자, 이더리움 L1을 선호하는 이유입니다.
                </p>
              </div>

              <div className="space-y-6 my-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-300">
                    문제 1: Sequencer 중앙화 (트랜잭션 순서 결정권)
                  </h3>
                  <p className="text-sm mb-3">
                    대부분의 Layer 2는 <strong>"Sequencer"</strong>라는 단일 노드가 모든 트랜잭션 순서를 결정합니다.
                    이는 이더리움 L1의 탈중앙화된 검증자 네트워크와 완전히 다릅니다.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                      <h4 className="font-semibold text-sm mb-2 text-green-600">✅ 이더리움 L1</h4>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• <strong>100만+ 검증자</strong>가 분산 운영</li>
                        <li>• 트랜잭션 순서 조작 불가능</li>
                        <li>• MEV 방지 메커니즘</li>
                        <li>• 검열 저항성 최고</li>
                      </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded">
                      <h4 className="font-semibold text-sm mb-2 text-red-600">❌ Layer 2 (Arbitrum, Optimism, Base)</h4>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• <strong>단일 Sequencer</strong> 운영</li>
                        <li>• Arbitrum: Offchain Labs 운영</li>
                        <li>• Optimism: OP Labs 운영</li>
                        <li>• Base: <strong className="text-red-600">Coinbase 직접 운영</strong></li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-sm mb-2">🚨 실제 리스크</h4>
                    <ul className="text-xs space-y-2">
                      <li>
                        <strong>시나리오 1: Sequencer 다운타임</strong><br/>
                        Sequencer가 멈추면 모든 거래가 중단됩니다. 2023년 Arbitrum은 2시간 다운타임 경험.
                      </li>
                      <li>
                        <strong>시나리오 2: 트랜잭션 검열</strong><br/>
                        Sequencer는 특정 트랜잭션을 거부하거나 지연시킬 수 있습니다. (이론적으로는 가능)
                      </li>
                      <li>
                        <strong>시나리오 3: MEV 추출</strong><br/>
                        Sequencer는 트랜잭션 순서를 조작하여 차익거래(MEV) 가능.
                      </li>
                      <li>
                        <strong>시나리오 4: 정부 압박</strong><br/>
                        정부가 Sequencer 운영사(예: Coinbase)에 특정 주소 차단 요구 가능.
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                    문제 2: 탈출 시간 지연 (Optimistic Rollup)
                  </h3>
                  <p className="text-sm mb-3">
                    Arbitrum과 Optimism은 <strong>Optimistic Rollup</strong> 방식으로,
                    L2에서 L1으로 자금을 인출하려면 <strong className="text-red-600">7일 대기</strong>해야 합니다.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded my-4">
                    <h4 className="font-semibold text-sm mb-2">⏰ 인출 프로세스</h4>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">1</div>
                        <div>
                          <p className="font-semibold">L2에서 인출 요청 (Withdraw 트랜잭션)</p>
                          <p className="text-gray-600 dark:text-gray-400">즉시 실행</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">2</div>
                        <div>
                          <p className="font-semibold">Fraud Proof 챌린지 기간</p>
                          <p className="text-red-600 font-bold">⏱️ 7일 대기 (168시간)</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">3</div>
                        <div>
                          <p className="font-semibold">L1에서 최종 인출 실행 (Finalize)</p>
                          <p className="text-gray-600 dark:text-gray-400">가스비 추가 발생 ($10~$20)</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                    <p className="text-xs">
                      <strong>💸 실전 문제:</strong> 급하게 현금이 필요한데 7일을 기다려야 한다면?
                      → <strong>제3자 브리지</strong>(Hop Protocol, Across 등)를 사용하면 즉시 인출 가능하지만,
                      0.1~0.3% 수수료를 추가로 지불해야 하고, 브리지 해킹 리스크도 있습니다.
                    </p>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded mt-4">
                    <p className="text-xs">
                      <strong>✅ zkRollup은 다릅니다:</strong> zkSync, StarkNet 같은 zkRollup은 암호학적 증명으로
                      L1 인출이 <strong>즉시~수 시간 내</strong> 가능합니다. 하지만 zkRollup도 Sequencer 중앙화 문제는 동일합니다.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                    문제 3: 스마트 컨트랙트 리스크 & 버그
                  </h3>
                  <p className="text-sm mb-3">
                    Layer 2는 복잡한 스마트 컨트랙트로 구현되므로, <strong>버그나 해킹 리스크</strong>가 존재합니다.
                    이더리움 L1은 10년+ 검증됐지만, L2는 상대적으로 신생입니다.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                    <h4 className="font-semibold text-sm mb-2">📅 Layer 2 출시일</h4>
                    <ul className="text-xs space-y-1 ml-4">
                      <li>• Arbitrum: 2021년 8월 (약 5년)</li>
                      <li>• Optimism: 2021년 12월 (약 4년)</li>
                      <li>• Base: 2023년 8월 (약 2.5년) ← 가장 신생</li>
                      <li>• zkSync: 2023년 3월 (약 3년)</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mt-4">
                    <p className="text-xs">
                      <strong>⚠️ 비교:</strong> 이더리움 L1은 2015년 출시 (11년+ 검증), 비트코인은 2009년 (17년+ 검증).
                      시간이 지날수록 신뢰도가 높아지며, Layer 2는 아직 "실험 단계"로 볼 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 p-8 rounded-xl my-8 border-2 border-purple-500">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                  ⚖️ 탈중앙화 vs 실용성: 타협점 찾기
                </h3>
                <p className="text-sm mb-6">
                  Layer 2의 중앙화는 <strong>"의도적인 트레이드오프"</strong>입니다.
                  완벽한 탈중앙화를 포기하는 대신, 저렴한 수수료와 빠른 속도를 얻었습니다.
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-xs">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">항목</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-center">이더리움 L1</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-center">Arbitrum/Optimism</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-center">Base (Coinbase)</th>
                        <th className="border border-gray-300 dark:border-gray-700 p-3 text-center">Tron</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">탈중앙화</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">⭐⭐⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">⭐⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-yellow-50 dark:bg-yellow-900/30">⭐⭐</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-red-50 dark:bg-red-900/30">⭐</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">가스비</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-red-50 dark:bg-red-900/30">$8~$20</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">$0.10~$0.50</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">$0.05~$0.20</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">$0.50~$2</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">보안 성숙도</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">11년 검증</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">4~5년</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-yellow-50 dark:bg-yellow-900/30">2.5년</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center">8년</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">Sequencer</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">100만+ 검증자</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-yellow-50 dark:bg-yellow-900/30">단일 (계획: 탈중앙화)</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-red-50 dark:bg-red-900/30">Coinbase 단독</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-red-50 dark:bg-red-900/30">27개 노드</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">인출 시간</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">즉시</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-red-50 dark:bg-red-900/30">7일 (L1로)</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-red-50 dark:bg-red-900/30">7일 (L1로)</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center bg-green-50 dark:bg-green-900/30">즉시</td>
                      </tr>
                      <tr className="font-bold bg-gray-50 dark:bg-gray-700">
                        <td className="border border-gray-300 dark:border-gray-700 p-3">추천 용도</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center text-xs">대규모 거래, 장기 보관</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center text-xs">일반 결제, DeFi</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center text-xs">CEX 연동, 소액 결제</td>
                        <td className="border border-gray-300 dark:border-gray-700 p-3 text-center text-xs">제3세계 송금 (단기)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">🎯 2026년 현실적인 결론</h4>
                <div className="space-y-3 text-sm">
                  <p>
                    <strong>1. Layer 2는 완벽하지 않습니다:</strong> 중앙화, Sequencer 리스크, 7일 인출 대기 등 명확한 약점이 있습니다.
                    하지만 <strong>현실적으로 소액 결제를 위한 유일한 해결책</strong>입니다.
                  </p>
                  <p>
                    <strong>2. 금액에 따라 선택하세요:</strong>
                    <br/>• $10K 이상: 이더리움 L1 (보안 최우선)
                    <br/>• $100~$10K: Arbitrum/Optimism (균형)
                    <br/>• $100 미만: Base/Polygon (실용성)
                  </p>
                  <p>
                    <strong>3. 트론은 과도기적 해결책:</strong> 현재 많이 사용되지만, 27개 노드의 극단적 중앙화는 장기적으로 지속 불가능합니다.
                    Layer 2의 "Sequencer 1개"도 문제지만, 최소한 이더리움 L1 보안을 상속받습니다.
                  </p>
                  <p>
                    <strong>4. 미래는 탈중앙화된 Sequencer:</strong> Arbitrum과 Optimism은 2026~2027년 Sequencer 탈중앙화 계획 중입니다.
                    이것이 완성되면 Layer 2는 진정한 대안이 될 것입니다.
                  </p>
                  <p>
                    <strong>5. "완벽한 솔루션"은 없습니다:</strong> 탈중앙화, 저비용, 보안성을 모두 달성하는 것은 불가능합니다 (블록체인 트릴레마).
                    용도에 맞게 타협점을 선택하세요.
                  </p>
                </div>
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
                      <p className="text-xs">승인(1~3초) + 정산(D+3일) 분리</p>
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
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-red-600 font-bold">D+3 영업일 전후<br/><span className="text-xs">(PG 경유 시 D+3~5일 또는 더 길어질 수 있음)</span></td>
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
                      <li>• 승인과 정산이 하나로 합쳐져 D+3 영업일 → 즉시 완료 (T+0) 실현</li>
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
                      승인된 거래들을 모아서 배치로 일괄 처리하며, 보통 결제일 기준 D+3 영업일 전후에 가맹점 계좌에 입금됩니다.
                      (PG 경유 시 D+3~5일 또는 주 단위 정산으로 늘어날 수 있음)
                      전통 카드 결제의 가장 큰 특징은 이 두 단계가 분리되어 있다는 점입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">VAN/PG사 (Value Added Network / Payment Gateway)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      가맹점과 카드사 사이에서 결제를 중개하는 회사입니다.
                      <strong>VAN사</strong>(NICE정보통신, KSNET 등)는 주로 오프라인 POS 단말기를 통한 결제를 처리하고,
                      <strong>PG사</strong>(토스페이먼츠, KG이니시스, NHN KCP 등)는 온라인 결제 창을 제공합니다.
                      가맹점은 VAN/PG사와 계약하여 다양한 결제 수단을 통합 지원받으며, 정산 주기도 이들의 정책에 따라 달라질 수 있습니다.
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
                      승인된 거래를 거래 다음날 모아서(매입/전표 전송) 배치로 일괄 처리하며, 각 은행 간 입출금을 상계(Netting)하여 실제 이동할 금액만 전송합니다.
                      이 배치 처리 과정이 D+3 영업일 전후 소요되는 주요 원인입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">D+N (정산 주기)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      결제일(D, Date)로부터 정산이 완료되기까지 걸리는 영업일 수입니다.
                      D+3은 결제 후 3영업일 뒤 입금을 의미하며, 월요일 결제 시 D+3이라면 목요일에 입금됩니다 (주말은 제외).
                      PG사를 경유하면 PG의 정산 정책에 따라 D+3~5일 또는 주 단위 정산으로 더 늘어날 수 있습니다.
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
