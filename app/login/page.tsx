import Link from 'next/link';

export default function LoginSelectionPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl w-full px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold text-2xl">B</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            어떤 서비스를 이용하시나요?
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            사용하실 지갑 서비스를 선택해주세요
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* 개인 투자자 로그인 */}
          <a
            href="http://localhost:3101/login"
            className="block border-2 border-blue-200 dark:border-blue-800 rounded-xl p-8 hover:shadow-2xl hover:border-blue-400 dark:hover:border-blue-600 transition-all bg-white dark:bg-gray-800 group"
          >
            <div className="text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">👤</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                개인 투자자 로그인
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                토큰증권 거래 및 AI 로보어드바이저 서비스
              </p>

              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-600">✓</span>
                  <span>토큰증권 거래 지갑</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-600">✓</span>
                  <span>AI 로보어드바이저 지갑</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-blue-600">✓</span>
                  <span>개인 포트폴리오 관리</span>
                </div>
              </div>

              <div className="inline-flex items-center text-blue-600 dark:text-blue-400 font-medium group-hover:gap-3 gap-2 transition-all">
                <span>로그인하기</span>
                <span className="text-xl">→</span>
              </div>
            </div>
          </a>

          {/* 기업 고객 로그인 */}
          <a
            href="http://localhost:3102/login"
            className="block border-2 border-green-200 dark:border-green-800 rounded-xl p-8 hover:shadow-2xl hover:border-green-400 dark:hover:border-green-600 transition-all bg-white dark:bg-gray-800 group"
          >
            <div className="text-center">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform">🏢</div>
              <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                기업 고객 로그인
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Custody 및 Non-Custody 지갑 관리 솔루션
              </p>

              <div className="space-y-3 mb-6 text-left">
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-green-600">✓</span>
                  <span>MPC 2-of-3 Custody 지갑</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-green-600">✓</span>
                  <span>TEE Non-Custody 지갑</span>
                </div>
                <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                  <span className="mr-3 text-green-600">✓</span>
                  <span>승인 정책 및 거버넌스</span>
                </div>
              </div>

              <div className="inline-flex items-center text-green-600 dark:text-green-400 font-medium group-hover:gap-3 gap-2 transition-all">
                <span>로그인하기</span>
                <span className="text-xl">→</span>
              </div>
            </div>
          </a>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/"
            className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            ← 홈으로 돌아가기
          </Link>
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            계정이 없으신가요?
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="http://localhost:3101/signup"
              className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
            >
              개인 회원가입
            </a>
            <span className="text-gray-300 dark:text-gray-600">|</span>
            <a
              href="http://localhost:3102/signup"
              className="text-sm text-green-600 dark:text-green-400 hover:underline"
            >
              기업 회원가입
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
