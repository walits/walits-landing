import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'AI 토큰증권 지갑 | AI 기반 STO 투자 관리 - Walits',
  description: 'AI가 자동으로 토큰증권 포트폴리오를 관리하고 최적화. 부동산, 주식 등 실물 자산 기반 증권형 토큰 투자. 자동 리밸런싱, 배당 수령, AI 투자 추천.',
  keywords: 'STO 지갑, 토큰증권 지갑, AI 투자, 증권형 토큰, RWA, 실물 자산, 토큰화, 부동산 토큰, 주식 토큰, 배당',
  openGraph: {
    title: 'AI 토큰증권 지갑 | AI 기반 STO 투자 관리',
    description: 'AI 자동 리밸런싱과 토큰증권 투자를 한 번에',
    type: 'website',
    url: 'https://walits.com/ai-st-wallet',
  },
};

export default function AISTWalletPage() {
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
      <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-100 dark:bg-orange-900/30 rounded-full">
              <span className="text-orange-700 dark:text-orange-400 font-semibold">Coming Soon</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              AI 토큰증권 지갑
            </h1>
            <p className="text-2xl mb-4 text-gray-700 dark:text-gray-300">
              AI 투자 + 증권형 토큰
            </p>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              AI가 토큰증권 포트폴리오를 자동으로 관리하고 최적화합니다.
              부동산, 주식 등 실물 자산 기반 증권형 토큰에 투자하세요.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/inquiry"
                className="px-8 py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors"
              >
                사전 신청하기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What is STO Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              토큰증권(STO)이란?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 text-center mb-12">
              Security Token Offering - 실물 자산을 토큰화하여 발행하는 디지털 증권
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">부동산</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  건물, 아파트 등 부동산을 토큰화하여 소액 투자
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">주식</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  비상장 주식을 토큰화하여 유동성 확보
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">기타 자산</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  미술품, 지적재산권 등 다양한 자산 토큰화
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            주요 기능
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-orange-600 dark:text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI 자동 리밸런싱</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI가 최적 투자 비율을 자동으로 유지. 시장 변화에 따라 자동 조정
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">규제 준수</h3>
              <p className="text-gray-600 dark:text-gray-400">
                금융 규제 완벽 대응. KYC/AML 통합. 투자자 적합성 검증
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">배당금 자동 수령</h3>
              <p className="text-gray-600 dark:text-gray-400">
                토큰증권 배당금을 자동으로 수령. 재투자 옵션 지원
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">실물 자산 토큰 보관</h3>
              <p className="text-gray-600 dark:text-gray-400">
                부동산, 주식 등 토큰화 자산을 안전하게 보관. 기관급 보안
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">통합 RWA 검색</h3>
              <p className="text-gray-600 dark:text-gray-400">
                다양한 RWA(실물 자산) 토큰을 한 곳에서 검색하고 구매
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">AI 투자 추천</h3>
              <p className="text-gray-600 dark:text-gray-400">
                AI가 시장 분석하여 최적의 토큰증권 투자 추천
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            활용 사례
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🏢 부동산 토큰 투자</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                강남 오피스빌딩, 제주 리조트 등 고가 부동산을 소액으로 투자. 임대 수익 배당 받기
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 상업용 부동산 투자</li>
                <li>• 리조트/호텔 지분 투자</li>
                <li>• 임대 수익 배당</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">📈 AI 포트폴리오 관리</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                AI가 자동으로 여러 토큰증권 사이의 최적 비율 유지. 수익 극대화, 리스크 최소화
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 자동 리밸런싱</li>
                <li>• 리스크 분산</li>
                <li>• 수익률 최적화</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">💰 배당 수익 관리</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                부동산 임대료, 주식 배당금 등을 자동으로 수령. 재투자 또는 출금 자유롭게
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 자동 배당 수령</li>
                <li>• 배당 재투자 옵션</li>
                <li>• 세금 리포트 자동 생성</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🔒 디지털 증권 보관</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                증권형 토큰을 안전하게 보관. 기관급 보안으로 자산 보호
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• MPC 2-of-2 보안</li>
                <li>• 완벽한 거래 이력</li>
                <li>• 규제 감사 대응</li>
              </ul>
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
          <div className="max-w-md mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 border-2 border-orange-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">AI 토큰증권 지갑</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-orange-600">무료</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-orange-600 mr-2 mt-1">✓</span>
                <span>AI 포트폴리오 자동 관리</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-orange-600 mr-2 mt-1">✓</span>
                <span>규제 준수 관리</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-orange-600 mr-2 mt-1">✓</span>
                <span>배당금 자동 수령</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-orange-600 mr-2 mt-1">✓</span>
                <span>실물 자산 토큰 보관</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-orange-600 mr-2 mt-1">✓</span>
                <span>통합 RWA 검색 및 구매</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-orange-600 mr-2 mt-1">✓</span>
                <span>AI 투자 추천</span>
              </li>
            </ul>
            <Link
              href="/inquiry"
              className="block w-full text-center py-4 bg-orange-600 text-white rounded-lg font-semibold text-lg hover:bg-orange-700 transition-colors"
            >
              사전 신청하기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-red-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            AI와 함께하는 스마트 토큰증권 투자
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            부동산, 주식 등 실물 자산을 토큰으로 투자하고, AI가 자동으로 관리합니다.
            사전 신청하고 런칭 소식을 가장 먼저 받아보세요.
          </p>
          <Link
            href="/inquiry"
            className="inline-block px-8 py-4 bg-white text-orange-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
          >
            사전 신청하기
          </Link>
        </div>
      </section>
    </div>
  );
}
