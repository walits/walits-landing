import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Auto Chat 지갑 | 메신저 송금 + AI 자동 결제 - Walits',
  description: '카카오톡, 텔레그램으로 대화하듯 암호화폐 송금. AI가 자동으로 반복 결제 처리하고 최적 경로를 선택해 수수료 절감. 구독료 자동 결제, 소액 결제에 최적화.',
  keywords: '메신저 지갑, 카카오톡 송금, 텔레그램 지갑, 자동 결제, AI 지갑, 암호화폐 송금, 소액 결제, 구독료 결제',
  openGraph: {
    title: 'Auto Chat 지갑 | 메신저 송금 + AI 자동 결제',
    description: '채팅하듯 송금하고, AI가 자동으로 결제 처리',
    type: 'website',
    url: 'https://walits.com/auto-chat-wallet',
  },
};

export default function AutoChatWalletPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Walits Logo"
              width={32}
              height={32}
              className="rounded"
            />
            <span className="text-2xl font-bold text-gray-900 dark:text-white">Walits</span>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-green-100 dark:bg-green-900/30 rounded-full">
              <span className="text-green-700 dark:text-green-400 font-semibold">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Auto Chat 지갑
            </h1>
            <p className="text-2xl mb-4 text-gray-700 dark:text-gray-300">
              채팅 + AI 자동 결제
            </p>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              카카오톡, 텔레그램으로 대화하듯 송금하세요. AI가 자동으로 최적 결제 경로를 선택하고,
              반복 결제를 자동 처리합니다. 스마트 라우팅으로 수수료를 최소화합니다.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/inquiry"
                className="px-8 py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
              >
                사전 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            주요 기능
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI 자동 결제</h3>
              <p className="text-gray-600 dark:text-gray-400">
                반복되는 구독료, 정기 결제를 AI가 자동으로 처리. 한 번 설정하면 끝
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">채팅 송금</h3>
              <p className="text-gray-600 dark:text-gray-400">
                카카오톡, 텔레그램에서 대화하듯 암호화폐 송금. 주소 복사 붙여넣기 필요 없음
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">최적 경로</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI가 가장 저렴한 수수료로 자동 라우팅. 브리지, 스왑 최적화
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">실시간 알림</h3>
              <p className="text-gray-600 dark:text-gray-400">
                송금/입금 즉시 메신저로 알림. 거래 내역 실시간 확인
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">생체 인증</h3>
              <p className="text-gray-600 dark:text-gray-400">
                지문, 얼굴 인식으로 빠르고 안전한 송금. 비밀번호 입력 불필요
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">다중 토큰</h3>
              <p className="text-gray-600 dark:text-gray-400">
                주요 암호화폐 모두 지원. BTC, ETH, USDT, SOL 등
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            활용 사례
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">💬 채팅으로 송금</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                친구에게 밥값 보내기, 그룹 정산, 선물 보내기를 메신저에서 바로 처리
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 친구에게 즉시 송금</li>
                <li>• 그룹 채팅방에서 정산</li>
                <li>• 생일 선물 암호화폐로</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📅 구독료 자동 결제</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                넷플릭스, 스포티파이처럼 암호화폐로 구독료 자동 결제. 매달 신경 쓸 필요 없음
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 멤버십 자동 결제</li>
                <li>• 월간 구독 서비스</li>
                <li>• 정기 기부금</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">☕ 소액 결제</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                커피값, 편의점 결제 등 일상 소액 결제를 암호화폐로 간편하게
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 카페 결제</li>
                <li>• 택시비 송금</li>
                <li>• 온라인 컨텐츠 구매</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">👥 그룹 정산</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                여행, 회식 등 그룹 정산을 채팅방에서 바로. 누가 얼마 보냈는지 자동 추적
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 여행 경비 정산</li>
                <li>• 회식비 더치페이</li>
                <li>• 선물 공동 구매</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            사용 방법
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">앱 설치</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Auto Chat 앱을 다운로드하고 카카오톡/텔레그램 연동
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">채팅 송금</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  메신저에서 친구 선택하고 금액 입력. 대화하듯 간편하게
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600 dark:text-green-400">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">자동 처리</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  AI가 최적 경로로 즉시 송금. 반복 결제는 자동 처리
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            가격 안내
          </h2>
          <p className="text-center text-xl text-gray-600 dark:text-gray-400 mb-12">
            완전 무료!
          </p>
          <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-green-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Auto Chat 지갑</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-green-600">무료</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span>AI 자동 결제</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span>카톡/텔레그램 채팅 송금</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span>최적 경로 자동 선택</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span>실시간 송금 알림</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span>생체 인증 지원</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-green-600 mr-2 mt-1">✓</span>
                <span>다중 토큰 지원</span>
              </li>
            </ul>
            <Link
              href="/inquiry"
              className="block w-full text-center py-4 bg-green-600 text-white rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors"
            >
              사전 신청하기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-emerald-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            대화하듯 송금하세요
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            Auto Chat 지갑으로 암호화폐 송금이 메신저처럼 쉬워집니다.
            사전 신청하고 런칭 소식을 가장 먼저 받아보세요.
          </p>
          <Link
            href="/inquiry"
            className="inline-block px-8 py-4 bg-white text-green-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            사전 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
