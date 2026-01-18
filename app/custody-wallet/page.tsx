import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Custody 지갑 | 기관용 MPC 암호화폐 자산 보관 솔루션 - Walits',
  description: 'MPC 2-of-3 기술로 기업 자산을 안전하게 보관. 다중 승인 워크플로우, 정책 기반 거버넌스, 완벽한 감사 추적. 금융기관급 보안으로 고객 자산 집금.',
  keywords: '기관용 지갑, Custody 지갑, MPC 지갑, 암호화폐 보관, 자산 보관, 기업 지갑, 다중 서명, 기관 투자자, 금융기관 지갑',
  openGraph: {
    title: 'Custody 지갑 | 기관용 MPC 암호화폐 자산 보관 솔루션',
    description: 'MPC 2-of-3로 안전하게 자산 보관. 금융기관급 보안과 컴플라이언스',
    type: 'website',
    url: 'https://walits.com/custody-wallet',
  },
};

export default function CustodyWalletPage() {
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
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4 px-4 py-2 bg-purple-100 dark:bg-purple-900/30 rounded-full">
              <span className="text-purple-700 dark:text-purple-400 font-semibold">Premium Security</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
              Custody 지갑
            </h1>
            <p className="text-2xl mb-4 text-gray-700 dark:text-gray-300">
              MPC 2-of-3로 안전하게 자산 보관
            </p>
            <p className="text-xl mb-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              기업 자산을 MPC 2-of-3 다중 서명으로 안전하게 보관. 승인 정책 기반 거버넌스로
              고객 자산을 금융기관급 보안 수준에서 관리합니다.
            </p>
            <div className="flex gap-4 justify-center">
              <Link
                href="/inquiry"
                className="px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold text-lg hover:bg-purple-700 transition-colors"
              >
                무료 상담 신청
              </Link>
              <Link
                href="/docs/custody/index.html"
                target="_blank"
                className="px-8 py-4 bg-white text-purple-600 border-2 border-purple-600 rounded-lg font-semibold text-lg hover:bg-purple-50 transition-colors"
              >
                API 문서 보기
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* MPC 2-of-3 Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              MPC 2-of-3: 최고의 보안 아키텍처
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              개인키를 3개로 분할하여 각기 다른 위치에 안전하게 보관.
              거래 시 3개 중 2개의 키만 있으면 서명이 가능하여 단일 실패점을 완전히 제거합니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="p-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">분산 키 관리</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                개인키를 3개로 분할하여 각기 다른 위치에 안전하게 보관
              </p>
            </div>

            <div className="p-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl font-bold text-purple-600 dark:text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">2-of-3 서명</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                거래 시 3개 중 2개의 키만 있으면 서명 가능
              </p>
            </div>

            <div className="p-8 bg-purple-50 dark:bg-purple-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800">
              <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-center text-gray-900 dark:text-white">단일 실패점 제거</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                1개의 키가 손실되어도 나머지 2개로 정상 운영
              </p>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl max-w-3xl mx-auto border-l-4 border-blue-500">
            <p className="text-lg text-gray-700 dark:text-gray-300">
              <strong className="text-blue-600 dark:text-blue-400">ECDSA, EdDSA 지원:</strong> 이더리움부터 솔라나까지
              모든 주요 블록체인 네트워크와 호환됩니다.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            주요 기능
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">다중 승인 워크플로우</h3>
              <p className="text-gray-600 dark:text-gray-400">
                정책 기반 승인 프로세스. 금액별, 자산별로 다른 승인 규칙 설정 가능.
                CEO, CFO 등 다단계 승인으로 보안 강화.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">완벽한 감사 추적</h3>
              <p className="text-gray-600 dark:text-gray-400">
                모든 거래 이력을 추적 및 리포팅. 누가, 언제, 무엇을, 왜 했는지 완벽하게 기록.
                규제 감사 대응 완벽 지원.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">정책 기반 거버넌스</h3>
              <p className="text-gray-600 dark:text-gray-400">
                화이트리스트, 블랙리스트, 거래 한도 설정. 조직의 리스크 정책에 맞춘
                커스터마이징 가능한 규칙 엔진.
              </p>
            </div>

            <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">규제 컴플라이언스</h3>
              <p className="text-gray-600 dark:text-gray-400">
                금융기관급 보안 및 컴플라이언스. KYC/AML 통합 지원.
                FATF Travel Rule 준수.
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
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🏢 고객 자산 집금</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                거래소, 커스터디 서비스 등 고객 자산을 안전하게 보관. 옴니버스 계정으로 효율적 관리.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 암호화폐 거래소</li>
                <li>• 디지털 자산 커스터디</li>
                <li>• 결제 서비스 제공자</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">💼 기업 재무 관리</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                회사의 운영 자금을 안전하게 보관하고 관리. 다중 승인으로 내부 통제 강화.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 재무팀 운영 자금</li>
                <li>• 급여 지급 계정</li>
                <li>• 투자 포트폴리오</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🪙 토큰 발행사</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                토큰 발행 프로젝트의 재무를 안전하게 관리. 토큰 판매 수익금 보관 및 분배.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• ICO/IEO 프로젝트</li>
                <li>• 토큰 이코노미 관리</li>
                <li>• 베스팅 토큰 보관</li>
              </ul>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">🏦 기관 투자자</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                펀드, 자산운용사 등 기관 투자자를 위한 안전한 암호화폐 자산 보관.
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li>• 암호화폐 펀드</li>
                <li>• 자산운용사</li>
                <li>• 패밀리 오피스</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            가격 안내
          </h2>
          <div className="max-w-md mx-auto bg-gradient-to-br from-purple-900 to-indigo-900 rounded-2xl shadow-2xl p-8 border-2 border-yellow-500">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-600 to-yellow-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
              Premium
            </div>
            <div className="text-center mb-6 mt-4">
              <h3 className="text-2xl font-bold mb-2 text-white">Custody 지갑</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-2xl text-gray-400 line-through">₩1,000,000</span>
                <span className="text-5xl font-bold text-yellow-400">₩550,000</span>
                <span className="text-gray-300">/월</span>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-start text-gray-200">
                <span className="text-yellow-400 mr-2 mt-1">✓</span>
                <span>MPC 2-of-3 보안</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-yellow-400 mr-2 mt-1">✓</span>
                <span>다중 승인 워크플로우</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-yellow-400 mr-2 mt-1">✓</span>
                <span>정책 기반 거버넌스</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-yellow-400 mr-2 mt-1">✓</span>
                <span>완벽한 감사 추적</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-yellow-400 mr-2 mt-1">✓</span>
                <span>전담 계정 매니저</span>
              </li>
              <li className="flex items-start text-gray-200">
                <span className="text-yellow-400 mr-2 mt-1">✓</span>
                <span>우선 기술 지원</span>
              </li>
            </ul>
            <Link
              href="/inquiry"
              className="block w-full text-center py-4 bg-yellow-500 text-gray-900 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              시작하기
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-indigo-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">
            금융기관급 보안으로 자산을 보호하세요
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
            MPC 2-of-3, 다중 승인, 완벽한 감사. 첫 한달 무료로 체험해보세요.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/inquiry"
              className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              무료 상담 신청
            </Link>
            <Link
              href="/docs/custody/index.html"
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
