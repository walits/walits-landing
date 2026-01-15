'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function MessengerCryptoTransferPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: '메신저 송금',
      title: '카카오톡/텔레그램으로 암호화폐 송금하는 법',
      date: '2026년 1월 11일',
      readTime: '5분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'Messenger Transfer',
      title: 'How to Send Crypto via KakaoTalk/Telegram',
      date: 'January 11, 2026',
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
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                친구에게 1만 원 빌려달라고 카톡으로 보내듯, 암호화폐도 메신저로 송금할 수 있다면?
                Auto Chat 지갑으로 카카오톡/텔레그램에서 대화하듯 암호화폐를 주고받으세요.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">기존 암호화폐 송금의 문제</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">복잡한 지갑 주소</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <p className="font-mono text-sm break-all mb-2">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7
                </p>
                <ul className="mb-0 space-y-1">
                  <li>42자리의 영문자와 숫자가 무작위로 조합된 형태로, 일반인이 외우기는 사실상 불가능합니다.</li>
                  <li>단 한 글자라도 잘못 입력하면 자산이 영구적으로 손실되며, 되돌릴 방법이 전혀 없습니다.</li>
                  <li>매번 복사와 붙여넣기를 해야 하는데, 이 과정에서 클립보드 해킹 위험에 노출될 수 있습니다.</li>
                  <li>암호화폐를 처음 접하는 초보자들에게는 진입 장벽이 너무 높아서 실제로 사용하기 어렵습니다.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">실수 사례</h3>
              <ul>
                <li><strong>잘못된 주소 복사</strong>: 100만 원 전액 날림</li>
                <li><strong>잘못된 네트워크</strong>: ERC-20 주소에 BEP-20 전송</li>
                <li><strong>오타</strong>: 끝 몇 글자 확인 안 하고 전송</li>
              </ul>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <p className="font-semibold mb-2">왜 이렇게 복잡할까요?</p>
                <p className="mb-0">
                  블록체인 기술은 초기부터 보안과 탈중앙화에 초점을 맞춰 설계되었기 때문에, 사용자 편의성은 상대적으로 우선순위가 낮았습니다.
                  하지만 2026년인 지금, 일반인들도 쉽게 사용할 수 있는 직관적인 인터페이스가 반드시 필요한 시점입니다.
                  기술이 아무리 훌륭해도 사람들이 쉽게 접근할 수 없다면 대중화될 수 없기 때문입니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">해결책: 메신저 송금</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">카카오톡으로 송금하기</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <pre className="text-sm">
{`[카카오톡 대화창]

나: 어제 밥값 10,000원 보낼게
친구: ㅇㅇ 고마워

나: /send 친구이름 10000 KRW
     → 자동으로 USDT로 환전 후 전송

[Auto Chat 봇]
전송이 완료되었습니다
   10,000원이 7.5 USDT로 환전되어 전송되었습니다
   수신자: 친구이름 (김철수)
   네트워크: Polygon (가스비 약 50원)
   처리 시간: 5초

친구: 받았어! 고마워~`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">텔레그램으로 송금하기</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <pre className="text-sm">
{`[Telegram Group Chat]

Alice: I'll pay for dinner, $50
Bob: Thanks! I'll send you my share

Bob: /send @Alice 25 USD
     → Automatically converts to USDT

[Walits Bot]
Transfer completed successfully
   $25 USD has been converted to 25 USDT and sent
   To: @Alice
   Network: Arbitrum (gas fee $0.10)
   Processing time: 3 seconds

Alice: Received! Thanks Bob!`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Auto Chat 지갑의 핵심 기능</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. 대화 기반 UI</h3>
              <p>
                복잡한 앱 설치 없이 메신저에서 대화하듯 명령어 입력:
              </p>
              <ul>
                <li><code>/send [받는사람] [금액] [통화]</code> - 송금</li>
                <li><code>/balance</code> - 잔액 확인</li>
                <li><code>/history</code> - 거래 내역</li>
                <li><code>/request [금액]</code> - 송금 요청</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 자동 환전 및 최적 경로</h3>
              <p>
                AI가 자동으로 최적의 송금 경로를 선택합니다:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">송금 시나리오: 10,000원 전송</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">네트워크</th>
                      <th className="text-left p-2">가스비</th>
                      <th className="text-left p-2">속도</th>
                      <th className="text-left p-2">AI 선택</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Ethereum</td>
                      <td className="p-2">₩3,000</td>
                      <td className="p-2">1분</td>
                      <td className="p-2">선택 안 함</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Polygon</td>
                      <td className="p-2">₩50</td>
                      <td className="p-2">5초</td>
                      <td className="p-2">AI 선택됨</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Arbitrum</td>
                      <td className="p-2">₩100</td>
                      <td className="p-2">3초</td>
                      <td className="p-2">선택 안 함</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  → AI가 가스비 최저인 Polygon 선택 (₩50 vs ₩3,000 = 98% 절감)
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 그룹 정산</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">예시: 4명이서 저녁 식사</h4>
                <pre className="text-sm">
{`총 비용: 100,000원 (나 결제)

나: /split 100000 @철수 @영희 @민수
    → 자동으로 1/4 = 25,000원씩 계산

[Auto Chat 봇]
정산 요청이 발송되었습니다
   철수님께: 25,000원
   영희님께: 25,000원
   민수님께: 25,000원

[철수님 승인] 25,000원 전송이 완료되었습니다
[영희님 승인] 25,000원 전송이 완료되었습니다
[민수님 승인] 25,000원 전송이 완료되었습니다

총 75,000원을 모두 수령하셨습니다`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. 소액 결제 (마이크로 페이먼트)</h3>
              <p>
                콘텐츠 크리에이터에게 후원금 보내기:
              </p>
              <ul>
                <li>유튜버에게 100원 후원</li>
                <li>웹툰 작가에게 500원 커피값</li>
                <li>오픈소스 개발자에게 1,000원 기부</li>
              </ul>
              <p>
                기존 결제 시스템(카드, 계좌이체)은 수수료가 최소 300원이라 불가능. Auto Chat은 가능!
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">보안은 어떻게?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">다단계 인증</h3>
              <ul className="space-y-2">
                <li><strong>생체인증</strong>: 1만 원 이상 송금 시 지문이나 얼굴 인식을 통한 본인 확인이 필요합니다.</li>
                <li><strong>PIN 코드</strong>: 10만 원 이상의 금액에서는 6자리 PIN 코드를 추가로 입력해야 합니다.</li>
                <li><strong>2단계 인증(2FA)</strong>: 100만 원 이상의 고액 거래에서는 이메일이나 SMS로 전송되는 인증 코드를 입력해야 최종 승인됩니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">일일 한도</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">인증 레벨</th>
                      <th className="text-left p-2">일일 한도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">기본 (이메일)</td>
                      <td className="p-2">100,000원</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">KYC 1단계 (신분증)</td>
                      <td className="p-2">1,000,000원</td>
                    </tr>
                    <tr>
                      <td className="p-2">KYC 2단계 (영상통화)</td>
                      <td className="p-2">10,000,000원</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">이중지불 방지</h3>
              <p>
                Redis 분산 락으로 동시 전송 차단:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                <pre className="text-sm">
{`[이중지불 시도 시나리오 - 자동 방지]

현재 잔액: 10,000원

동시에 두 건의 송금을 시도하는 경우:
 첫 번째: /send 친구A 10000 → 처리 중 대기
 두 번째: /send 친구B 10000 → 차단됨 (잔액 부족)

결과: 첫 번째 거래만 실행되고, 두 번째는 자동으로 차단됩니다`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 사용 사례</h2>

              <div className="space-y-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">사례 1: 대학생 A (22세)</h4>
                  <p className="mb-2">
                    <strong>상황:</strong> 친구들과 배달 음식 시켜먹고 더치페이
                  </p>
                  <p>
                    <strong>Before:</strong> 토스/카카오페이 → 각자 계좌번호 공유 → 송금 → 확인<br/>
                    (시간: 5분, 수수료: 무료지만 은행 계좌 필요)
                  </p>
                  <p>
                    <strong>After Auto Chat:</strong> 카톡에서 <code>/split 30000 @친구1 @친구2</code><br/>
                    (시간: 10초, 은행 계좌 불필요)
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">사례 2: 해외 프리랜서 B</h4>
                  <p className="mb-2">
                    <strong>상황:</strong> 한국 클라이언트에게 작업비 받기
                  </p>
                  <p>
                    <strong>Before:</strong> PayPal → 수수료 5% + 환전 수수료 3% = 총 8% 손실<br/>
                    100만 원 받으면 8만 원 날림
                  </p>
                  <p>
                    <strong>After Auto Chat:</strong> 텔레그램에서 <code>/invoice 1000000 KRW</code><br/>
                    수수료: 가스비 100원 (0.01%)
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">사례 3: 콘텐츠 크리에이터 C</h4>
                  <p className="mb-2">
                    <strong>상황:</strong> 팬들에게 소액 후원 받기
                  </p>
                  <p>
                    <strong>Before:</strong> 토스 후원 → 최소 1,000원 (수수료 때문)<br/>
                    작은 후원은 불가능
                  </p>
                  <p>
                    <strong>After Auto Chat:</strong> 100원부터 후원 가능<br/>
                    "재미있었어요 100원 드려요!" → <code>/tip @작가님 100</code>
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">가격 (Coming Soon)</h2>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  곧 출시 예정
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Auto Chat 지갑</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">무료<span className="text-lg text-gray-600 dark:text-gray-400"> (베타 기간)</span></div>
                <ul className="mb-6 space-y-2">
                  <li>카카오톡과 텔레그램에서 바로 사용할 수 있도록 완벽하게 연동됩니다.</li>
                  <li>AI가 자동으로 가스비가 가장 저렴한 최적의 경로를 선택하여 송금합니다.</li>
                  <li>그룹 정산 기능으로 여러 명과 함께한 식사비나 여행 경비를 쉽게 나눌 수 있습니다.</li>
                  <li>100원부터 시작하는 소액 결제도 가능하여 크리에이터 후원이나 팁 전송에 최적화되어 있습니다.</li>
                  <li>송금 횟수나 금액에 제한이 없어 얼마든지 자유롭게 거래할 수 있습니다.</li>
                </ul>
                <Link
                  href="/auto-chat-wallet"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  출시 알림 신청
                </Link>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">FAQ</h2>

              <div className="space-y-4 my-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q1. 메신저에 내 자산이 노출되지 않나요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    아니요. 메신저는 UI일 뿐이고, 실제 자산은 TEE 환경의 안전한 지갑에 보관됩니다.
                    메신저 해킹되어도 자산은 안전합니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q2. 상대방도 Auto Chat 지갑이 있어야 하나요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    네. 하지만 가입은 1분이면 끝납니다. 메신저에서 봇과 대화만 하면 자동으로 지갑 생성됩니다.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q3. 실수로 잘못 보내면 취소 가능한가요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    블록체인 특성상 전송 후 취소는 불가능합니다. 하지만 전송 전 확인 단계가 있어서
                    실수를 방지합니다. (금액, 받는 사람, 네트워크 확인)
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q4. 어떤 코인을 지원하나요?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    USDT, USDC (스테이블코인)을 주로 지원합니다. 법정화폐(원화, 달러)로 표시하지만
                    실제로는 스테이블코인으로 전송됩니다.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Auto Chat 지갑 출시 알림</h3>
                <p className="mb-6">
                  베타 테스트 참여자 모집 중! 출시 전 무료로 먼저 사용하세요.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  베타 신청하기
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">관련 글</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/blog/ai-auto-payment-subscription" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI 자동 결제로 구독료 관리</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">반복 결제 자동화</p>
                  </Link>
                  <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">기업용 지갑 선택 가이드</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">8분 완벽 정리</p>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                Just like sending a text asking to borrow $10 on KakaoTalk, what if you could send cryptocurrency via messenger?
                Send and receive crypto as easily as chatting with Auto Chat wallet on KakaoTalk/Telegram.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Problems with Traditional Crypto Transfers</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Complex Wallet Addresses</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
                <p className="font-mono text-sm break-all mb-2">
                  0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb7
                </p>
                <ul className="mb-0 space-y-1">
                  <li>A random combination of 42 alphanumeric characters that is virtually impossible for ordinary people to memorize.</li>
                  <li>A single character mistake results in permanent asset loss with absolutely no way to reverse it.</li>
                  <li>Every transfer requires copy-paste, exposing you to clipboard hijacking risks during this process.</li>
                  <li>For beginners encountering cryptocurrency for the first time, the entry barrier is so high that practical use becomes extremely difficult.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Common Mistakes</h3>
              <ul>
                <li><strong>Wrong address copied</strong>: Lost entire $1,000</li>
                <li><strong>Wrong network</strong>: Sent BEP-20 to ERC-20 address</li>
                <li><strong>Typo</strong>: Sent without checking last few characters</li>
              </ul>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <p className="font-semibold mb-2">Why is it so complicated?</p>
                <p className="mb-0">
                  Blockchain technology was designed from the beginning with a focus on security and decentralization, so user convenience was relatively low priority.
                  But in 2026, an intuitive interface that ordinary people can easily use is absolutely necessary.
                  No matter how excellent the technology, it cannot become mainstream if people cannot easily access it.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Solution: Messenger Transfer</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Send via KakaoTalk</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <pre className="text-sm">
{`[KakaoTalk Chat]

Me: Sending 10,000 won for yesterday's meal
Friend: Thanks!

Me: /send FriendName 10000 KRW
     → Auto converts to USDT and transfers

[Auto Chat Bot]
Transfer completed
   10,000 won converted to 7.5 USDT and transferred
   Recipient: FriendName (Kim Chul-su)
   Network: Polygon (gas fee ~50 won)
   Processing time: 5 seconds

Friend: Got it! Thanks~`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Send via Telegram</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <pre className="text-sm">
{`[Telegram Group Chat]

Alice: I'll pay for dinner, $50
Bob: Thanks! I'll send you my share

Bob: /send @Alice 25 USD
     → Automatically converts to USDT

[Walits Bot]
Transfer completed successfully
   $25 USD has been converted to 25 USDT and sent
   To: @Alice
   Network: Arbitrum (gas fee $0.10)
   Processing time: 3 seconds

Alice: Received! Thanks Bob!`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Auto Chat Wallet Core Features</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Conversation-Based UI</h3>
              <p>
                Simple commands in messenger without complex app installation:
              </p>
              <ul>
                <li><code>/send [recipient] [amount] [currency]</code> - Transfer</li>
                <li><code>/balance</code> - Check balance</li>
                <li><code>/history</code> - Transaction history</li>
                <li><code>/request [amount]</code> - Request payment</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Auto Conversion & Optimal Route</h3>
              <p>
                AI automatically selects the optimal transfer route:
              </p>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Transfer Scenario: Send 10,000 won</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">Network</th>
                      <th className="text-left p-2">Gas Fee</th>
                      <th className="text-left p-2">Speed</th>
                      <th className="text-left p-2">AI Choice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Ethereum</td>
                      <td className="p-2">₩3,000</td>
                      <td className="p-2">1 min</td>
                      <td className="p-2">Not selected</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Polygon</td>
                      <td className="p-2">₩50</td>
                      <td className="p-2">5 sec</td>
                      <td className="p-2">AI selected</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Arbitrum</td>
                      <td className="p-2">₩100</td>
                      <td className="p-2">3 sec</td>
                      <td className="p-2">Not selected</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  → AI selects Polygon with lowest gas fee (₩50 vs ₩3,000 = 98% savings)
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Group Split</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Example: 4 people dinner</h4>
                <pre className="text-sm">
{`Total cost: 100,000 won (I paid)

Me: /split 100000 @Chulsu @Younghee @Minsu
    → Auto calculates 1/4 = 25,000 won each

[Auto Chat Bot]
Split requests sent
   To Chulsu: 25,000 won
   To Younghee: 25,000 won
   To Minsu: 25,000 won

[Chulsu approved] 25,000 won transfer completed
[Younghee approved] 25,000 won transfer completed
[Minsu approved] 25,000 won transfer completed

Total 75,000 won received`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Micro Payments</h3>
              <p>
                Send tips to content creators:
              </p>
              <ul>
                <li>100 won tip to YouTuber</li>
                <li>500 won coffee money to webtoon artist</li>
                <li>1,000 won donation to open source developer</li>
              </ul>
              <p>
                Traditional payment systems (card, bank transfer) have minimum 300 won fees, making this impossible. Auto Chat makes it possible!
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">What About Security?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Multi-Factor Authentication</h3>
              <ul className="space-y-2">
                <li><strong>Biometric</strong>: Transfers over 10,000 won require fingerprint or face recognition for identity verification.</li>
                <li><strong>PIN code</strong>: Amounts over 100,000 won require additional 6-digit PIN code entry.</li>
                <li><strong>2FA</strong>: High-value transactions over 1,000,000 won require email or SMS verification code for final approval.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Daily Limits</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">Verification Level</th>
                      <th className="text-left p-2">Daily Limit</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Basic (Email)</td>
                      <td className="p-2">100,000 won</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">KYC Level 1 (ID)</td>
                      <td className="p-2">1,000,000 won</td>
                    </tr>
                    <tr>
                      <td className="p-2">KYC Level 2 (Video Call)</td>
                      <td className="p-2">10,000,000 won</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Double-Spend Prevention</h3>
              <p>
                Redis distributed lock blocks concurrent transfers:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                <pre className="text-sm">
{`[Double-spend attempt scenario - Auto prevention]

Current balance: 10,000 won

Attempting two simultaneous transfers:
 First: /send FriendA 10000 → Processing wait
 Second: /send FriendB 10000 → Blocked (insufficient balance)

Result: Only first transaction executes, second is automatically blocked`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Real Use Cases</h2>

              <div className="space-y-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Case 1: College Student A (22 years old)</h4>
                  <p className="mb-2">
                    <strong>Situation:</strong> Split delivery food cost with friends
                  </p>
                  <p>
                    <strong>Before:</strong> Toss/KakaoPay → Share account numbers → Transfer → Confirm<br/>
                    (Time: 5 min, Fee: Free but bank account required)
                  </p>
                  <p>
                    <strong>After Auto Chat:</strong> In KakaoTalk <code>/split 30000 @Friend1 @Friend2</code><br/>
                    (Time: 10 sec, No bank account needed)
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Case 2: Overseas Freelancer B</h4>
                  <p className="mb-2">
                    <strong>Situation:</strong> Receive payment from Korean client
                  </p>
                  <p>
                    <strong>Before:</strong> PayPal → 5% fee + 3% exchange fee = 8% total loss<br/>
                    Lose 80,000 won from 1 million won payment
                  </p>
                  <p>
                    <strong>After Auto Chat:</strong> In Telegram <code>/invoice 1000000 KRW</code><br/>
                    Fee: 100 won gas fee (0.01%)
                  </p>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Case 3: Content Creator C</h4>
                  <p className="mb-2">
                    <strong>Situation:</strong> Receive small tips from fans
                  </p>
                  <p>
                    <strong>Before:</strong> Toss tips → Minimum 1,000 won (due to fees)<br/>
                    Small tips impossible
                  </p>
                  <p>
                    <strong>After Auto Chat:</strong> Tips from 100 won possible<br/>
                    "That was fun, here's 100 won!" → <code>/tip @Creator 100</code>
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Pricing (Coming Soon)</h2>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Auto Chat Wallet</h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">Free<span className="text-lg text-gray-600 dark:text-gray-400"> (Beta Period)</span></div>
                <ul className="mb-6 space-y-2">
                  <li>Seamlessly integrated to work directly in KakaoTalk and Telegram.</li>
                  <li>AI automatically selects the optimal route with the lowest gas fees for transfers.</li>
                  <li>Group split feature makes it easy to divide meal costs or travel expenses with multiple people.</li>
                  <li>Optimized for micro-payments starting from 100 won, perfect for creator tips or donations.</li>
                  <li>No limits on transfer frequency or amounts, giving you complete freedom in transactions.</li>
                </ul>
                <Link
                  href="/auto-chat-wallet"
                  className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Sign Up for Launch Alert
                </Link>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">FAQ</h2>

              <div className="space-y-4 my-8">
                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q1. Aren't my assets exposed in the messenger?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    No. The messenger is just the UI; actual assets are stored in a secure wallet in TEE environment.
                    Even if the messenger is hacked, your assets remain safe.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q2. Does the recipient also need Auto Chat wallet?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    Yes. But signing up takes just 1 minute. Simply chat with the bot in messenger and a wallet is automatically created.
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q3. Can I cancel if I send to the wrong person?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    Due to blockchain nature, cancellation after transfer is impossible. However, there's a confirmation step before transfer
                    to prevent mistakes (confirm amount, recipient, network).
                  </p>
                </div>

                <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Q4. Which coins are supported?</h4>
                  <p className="mb-0 text-gray-600 dark:text-gray-400">
                    Mainly USDT and USDC (stablecoins). Displayed in fiat currency (won, dollars) but
                    actually transferred as stablecoins.
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Auto Chat Wallet Launch Alert</h3>
                <p className="mb-6">
                  Beta testers wanted! Use it free before official launch.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Apply for Beta
                </Link>
              </div>

              <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Related Articles</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Link href="/blog/ai-auto-payment-subscription" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Manage Subscriptions with AI Auto Payment</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Automate recurring payments</p>
                  </Link>
                  <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Wallet Selection Guide</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Complete guide in 8 minutes</p>
                  </Link>
                </div>
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
