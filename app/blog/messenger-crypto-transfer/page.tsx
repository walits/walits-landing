import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '카카오톡/텔레그램으로 암호화폐 송금하는 법 | Walits Auto Chat 지갑',
  description: '메신저로 암호화폐를 송금하세요. 복잡한 지갑 주소 없이 카카오톡이나 텔레그램에서 대화하듯 간편 송금. Auto Chat 지갑으로 시작하세요.',
  keywords: '메신저 송금, 카카오톡 송금, 텔레그램 지갑, 암호화폐 간편 송금, Auto Chat 지갑, 채팅 송금',
};

export default function MessengerCryptoTransferPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/blog" className="hover:underline">블로그</Link> / 메신저 송금
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            카카오톡/텔레그램으로 암호화폐 송금하는 법
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>2026년 1월 11일</time>
            <span>•</span>
            <span>5분 읽기</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/messenger-transfer.jpg"
            alt="메신저 암호화폐 송금"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
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
            <ul className="mb-0">
              <li>❌ 42자리 영숫자 조합</li>
              <li>❌ 한 글자만 틀려도 영구 손실</li>
              <li>❌ 복사/붙여넣기 필수</li>
              <li>❌ 초보자는 사용 불가</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">실수 사례</h3>
          <ul>
            <li><strong>잘못된 주소 복사</strong>: 100만 원 전액 날림</li>
            <li><strong>잘못된 네트워크</strong>: ERC-20 주소에 BEP-20 전송</li>
            <li><strong>오타</strong>: 끝 몇 글자 확인 안 하고 전송</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
            <p className="font-semibold mb-2">💡 왜 이렇게 복잡할까?</p>
            <p className="mb-0">
              블록체인은 원래 기술 중심으로 설계되었습니다. 사용자 경험은 2순위였죠.
              하지만 2026년 지금, 일반인도 쉽게 쓸 수 있어야 합니다.
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
✅ 10,000 KRW → 7.5 USDT 전송 완료
   수신: 친구이름 (김철수)
   네트워크: Polygon (가스비 ₩50)
   완료 시간: 5초

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
✅ $25 USD → 25 USDT sent
   To: @Alice
   Network: Arbitrum (gas $0.10)
   Time: 3 seconds

Alice: Received! Thanks Bob 🙏`}
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
                  <td className="p-2">❌</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="p-2">Polygon</td>
                  <td className="p-2">₩50</td>
                  <td className="p-2">5초</td>
                  <td className="p-2">✅ 선택!</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="p-2">Arbitrum</td>
                  <td className="p-2">₩100</td>
                  <td className="p-2">3초</td>
                  <td className="p-2">❌</td>
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
✅ 정산 요청 발송
   철수: 25,000원
   영희: 25,000원
   민수: 25,000원

[철수 승인] ✅ 25,000원 전송 완료
[영희 승인] ✅ 25,000원 전송 완료
[민수 승인] ✅ 25,000원 전송 완료

총 75,000원 수령 완료!`}
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
          <ul>
            <li>✅ <strong>생체인증</strong>: 지문/얼굴 인식 (1만 원 이상)</li>
            <li>✅ <strong>PIN 코드</strong>: 6자리 핀 (10만 원 이상)</li>
            <li>✅ <strong>2FA</strong>: 이메일/SMS 인증 (100만 원 이상)</li>
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
{`[나쁜 시나리오 - 방지됨]

잔액: 10,000원

동시에 두 번 송금 시도:
 ├─ /send 친구A 10000 → ⏳ 대기
 └─ /send 친구B 10000 → ❌ 차단 (잔액 부족)

✅ 첫 번째만 실행, 두 번째 자동 차단`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 사용 사례</h2>

          <div className="space-y-6 my-8">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">📱 Case 1: 대학생 A (22세)</h4>
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
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">🌏 Case 2: 해외 프리랜서 B</h4>
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
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">🎨 Case 3: 콘텐츠 크리에이터 C</h4>
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
              🚀 Coming Soon
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Auto Chat 지갑</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">무료<span className="text-lg text-gray-600 dark:text-gray-400"> (베타 기간)</span></div>
            <ul className="mb-6">
              <li>✅ 카카오톡/텔레그램 연동</li>
              <li>✅ AI 자동 최적 경로</li>
              <li>✅ 그룹 정산 기능</li>
              <li>✅ 소액 결제 지원</li>
              <li>✅ 무제한 송금</li>
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
      </div>
    </article>
  );
}
