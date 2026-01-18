import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Non-Custody 지갑 | 기업용 암호화폐 대량 지급 솔루션 - Walits',
  description: 'API 기반 Non-Custody 지갑으로 게임 보상, NFT 에어드랍, ICO 토큰 발행을 간편하게. TEE 환경에서 안전한 대량 트랜잭션 처리. 계정별 독립 지갑으로 복잡한 승인 불필요.',
  keywords: '기업용 지갑, Non-Custody 지갑, 암호화폐 지갑, API 지갑, 게임 보상 지급, NFT 에어드랍, ICO 지갑, 토큰 발행, 대량 지급',
  openGraph: {
    title: 'Non-Custody 지갑 | 기업용 암호화폐 대량 지급 솔루션',
    description: 'API로 간편하게 대량 지급. 게임/앱을 위한 최적의 Non-Custody 지갑 솔루션',
    type: 'website',
    url: 'https://walits.com/non-custody-wallet',
  },
};

export default function NonCustodyWalletPage() {
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Non-Custody 지갑
            </h1>
            <p className="text-2xl mb-4 text-gray-700 dark:text-gray-300">
              API로 간편하게 대량 지급
            </p>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              집금 없이 계정별로 독립 입출금. 대규모 에어드랍/보상/토큰 지급에 최적화.
              커스텀 토큰 발행 시 자동으로 각 사용자 지갑 생성.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/inquiry"
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/docs/non-custody/index.html"
                target="_blank"
                className="px-8 py-4 bg-white text-blue-600 border-2 border-blue-600 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-colors"
              >
                API 문서 보기
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
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">즉시 시작</h3>
              <p className="text-gray-600 dark:text-gray-400">
                API 키만으로 바로 사용 가능. 복잡한 설정 없이 5분 안에 통합 완료
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">ICO 지원</h3>
              <p className="text-gray-600 dark:text-gray-400">
                커스텀 토큰별 자동 지갑 생성 및 배포. ICO 프로젝트에 최적화
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">계정별 독립 지갑</h3>
              <p className="text-gray-600 dark:text-gray-400">
                각 계정은 독립된 지갑으로 완전 격리. 복잡한 승인 절차 불필요
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">TEE 환경 보안</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Trusted Execution Environment에서 대량 트랜잭션 안전 처리
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-yellow-600 dark:text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">빠른 처리</h3>
              <p className="text-gray-600 dark:text-gray-400">
                동시에 수천 건의 트랜잭션 처리. 대규모 에어드랍에 최적화
              </p>
            </div>

            <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-xl">
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">무제한 트랜잭션</h3>
              <p className="text-gray-600 dark:text-gray-400">
                트랜잭션 수 제한 없음. 필요한 만큼 자유롭게 사용
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🎮 게임 보상 지급</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                게임 내 아이템, 리워드를 토큰으로 즉시 지급. 수만 명의 플레이어에게 동시 배포 가능.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 승리 보상 자동 지급</li>
                <li>• 랭킹 보상 일괄 배포</li>
                <li>• 이벤트 리워드 즉시 정산</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🎨 NFT 에어드랍</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                대규모 NFT 에어드랍을 빠르고 안전하게. 가스비 최적화로 비용 절감.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 화이트리스트 일괄 배포</li>
                <li>• 홀더 에어드랍 자동화</li>
                <li>• 대량 민팅 지원</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🪙 ICO/토큰 발행</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                커스텀 토큰 발행과 동시에 각 투자자별 지갑 자동 생성. ICO 프로젝트에 최적화.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 투자자별 자동 지갑 생성</li>
                <li>• 토큰 배포 자동화</li>
                <li>• 베스팅 스케줄 관리</li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">💰 대량 리워드 발행</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                마케팅 캠페인, 추천 보상 등 대량 리워드를 효율적으로 관리.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 추천 보상 자동 지급</li>
                <li>• 이벤트 참여 리워드</li>
                <li>• 직원 인센티브 배포</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            가격 안내
          </h2>
          <div className="max-w-md mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 border-2 border-blue-500">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white">Non-Custody 지갑</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-gray-400 line-through">₩200,000</span>
                <span className="text-5xl font-bold text-blue-600">₩99,000</span>
                <span className="text-gray-600 dark:text-gray-400">/월</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <span>TEE 환경 보안</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <span>API 기반 대량 지급</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <span>계정별 독립 지갑</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <span>무제한 트랜잭션</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <span>ICO/커스텀 토큰 지원</span>
              </li>
              <li className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-blue-600 mr-2 mt-1">✓</span>
                <span>개발자 기술 지원</span>
              </li>
            </ul>
            <Link
              href="/inquiry"
              className="block w-full text-center py-4 bg-blue-600 text-white rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
            >
              시작하기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            지금 바로 시작하세요
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            API 키만 있으면 5분 안에 통합 완료. 첫 한달 무료로 체험해보세요.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/inquiry"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/docs/non-custody/index.html"
              target="_blank"
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold text-lg hover:bg-white/10 transition-colors"
            >
              API 문서 보기
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
