import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '2026년 기업용 암호화폐 지갑 선택 완벽 가이드 | Walits',
  description: '기업용 암호화폐 지갑 선택 시 고려해야 할 모든 것. Non-Custody vs Custody 비교, MPC 보안, API 통합, ICO 지원까지. 게임사, 거래소, 토큰 발행사를 위한 완벽 가이드.',
  keywords: '기업용 지갑, 암호화폐 지갑, 기업 지갑, Non-Custody, Custody, MPC, API 지갑, ICO 지갑',
};

export default function EnterpriseCryptoWalletGuidePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/blog" className="hover:underline">블로그</Link> / 기업용 지갑
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            2026년 기업용 암호화폐 지갑 선택 완벽 가이드
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>2026년 1월 11일</time>
            <span>•</span>
            <span>8분 읽기</span>
          </div>
        </header>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            암호화폐를 다루는 기업이라면 반드시 지갑 솔루션이 필요합니다. 하지만 게임사, 거래소, 토큰 발행사마다
            필요한 지갑이 다릅니다. 이 가이드에서 기업용 암호화폐 지갑 선택의 모든 것을 알려드립니다.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">1. 기업용 지갑이 필요한 이유</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">개인 지갑 vs 기업용 지갑</h3>
          <p>
            메타마스크 같은 개인 지갑으로는 기업 운영이 불가능합니다:
          </p>
          <ul>
            <li><strong>대량 처리 불가</strong>: 수백 명에게 동시 지급 어려움</li>
            <li><strong>보안 취약</strong>: 단일 개인키로 모든 자산 관리 위험</li>
            <li><strong>감사 불가</strong>: 누가 언제 무엇을 했는지 추적 어려움</li>
            <li><strong>API 없음</strong>: 자동화 불가능, 수동 작업 필요</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">2. 기업용 지갑 종류</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Non-Custody 지갑: 대량 지급용</h3>
          <p>
            <strong>언제 사용?</strong> 게임 보상, NFT 에어드랍, ICO 토큰 발행 등 대량 지급이 필요할 때
          </p>
          <ul>
            <li>계정별로 독립된 지갑 자동 생성</li>
            <li>API로 수천 건 동시 처리</li>
            <li>집금 없이 운영 (규제 리스크 최소화)</li>
            <li>TEE 환경에서 안전한 대량 트랜잭션</li>
          </ul>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
            <p className="text-lg font-semibold mb-2">✅ Non-Custody 추천 대상</p>
            <ul className="mb-0">
              <li>게임사 (보상 지급)</li>
              <li>NFT 프로젝트 (에어드랍)</li>
              <li>ICO 프로젝트 (토큰 발행)</li>
              <li>메타버스 플랫폼 (리워드)</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Custody 지갑: 자산 보관용</h3>
          <p>
            <strong>언제 사용?</strong> 고객 자산 집금, 운영 자금 관리, 기업 재무 등 안전한 보관이 필요할 때
          </p>
          <ul>
            <li>MPC 2-of-3로 단일 실패점 제거</li>
            <li>다중 승인 워크플로우 (CEO, CFO 승인)</li>
            <li>정책 기반 거버넌스 (금액별 승인 규칙)</li>
            <li>완벽한 감사 추적 (모든 거래 이력 기록)</li>
          </ul>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8 border-l-4 border-purple-500">
            <p className="text-lg font-semibold mb-2">✅ Custody 추천 대상</p>
            <ul className="mb-0">
              <li>암호화폐 거래소</li>
              <li>커스터디 서비스</li>
              <li>토큰 발행사 (재무 관리)</li>
              <li>기관 투자자</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">3. 선택 시 체크리스트</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">보안</h3>
          <ul>
            <li>✅ MPC 또는 TEE 환경 지원</li>
            <li>✅ 다중 서명 지원</li>
            <li>✅ 이중지불 방지 메커니즘</li>
            <li>✅ Redis 분산 락 및 트랜잭션 락</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">기능</h3>
          <ul>
            <li>✅ RESTful API 제공</li>
            <li>✅ Webhook 지원 (입출금 알림)</li>
            <li>✅ 대량 트랜잭션 처리 능력</li>
            <li>✅ 다중 체인 지원 (ECDSA, EdDSA)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">규제 대응</h3>
          <ul>
            <li>✅ KYC/AML 통합 지원</li>
            <li>✅ 거래 이력 추적 및 리포팅</li>
            <li>✅ 금융기관급 컴플라이언스</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">4. 실제 사용 사례</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">케이스 1: 게임사 A</h3>
          <p>
            <strong>문제:</strong> 매일 10만 명의 플레이어에게 보상 지급<br/>
            <strong>솔루션:</strong> Non-Custody API로 자동화<br/>
            <strong>결과:</strong> 수동 작업 제로화, 지급 시간 1시간 → 5분
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">케이스 2: 거래소 B</h3>
          <p>
            <strong>문제:</strong> 고객 자산 100억 원 안전 보관 필요<br/>
            <strong>솔루션:</strong> MPC 2-of-3 Custody 지갑<br/>
            <strong>결과:</strong> 단일 실패점 제거, 내부 통제 강화
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">케이스 3: ICO 프로젝트 C</h3>
          <p>
            <strong>문제:</strong> 5만 명 투자자에게 커스텀 토큰 배포<br/>
            <strong>솔루션:</strong> Non-Custody ICO 지원 (자동 지갑 생성)<br/>
            <strong>결과:</strong> 투자자별 지갑 자동 생성, 토큰 배포 자동화
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">5. Walits 솔루션</h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Non-Custody Wallet</h3>
            <ul className="mb-4">
              <li>월 ₩77,000 (첫 달 무료)</li>
              <li>무제한 트랜잭션</li>
              <li>ICO/커스텀 토큰 지원</li>
              <li>TEE 환경 보안</li>
            </ul>
            <Link href="/non-custody-wallet" className="text-blue-600 hover:underline font-semibold">
              자세히 보기 →
            </Link>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Custody Wallet</h3>
            <ul className="mb-4">
              <li>월 ₩550,000 (첫 달 무료)</li>
              <li>MPC 2-of-3 보안</li>
              <li>다중 승인 워크플로우</li>
              <li>전담 계정 매니저</li>
            </ul>
            <Link href="/custody-wallet" className="text-purple-600 hover:underline font-semibold">
              자세히 보기 →
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">결론</h2>
          <p>
            기업용 암호화폐 지갑은 용도에 따라 선택해야 합니다:
          </p>
          <ul>
            <li><strong>대량 지급이 필요하다면:</strong> Non-Custody 지갑</li>
            <li><strong>자산을 안전하게 보관해야 한다면:</strong> Custody 지갑</li>
            <li><strong>둘 다 필요하다면:</strong> 두 가지 모두 사용</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">무료 상담 신청하기</h3>
            <p className="mb-6">
              귀사에 맞는 최적의 지갑 솔루션을 제안해드립니다.
            </p>
            <Link
              href="/inquiry"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              지금 상담 신청
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">관련 글</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/non-custody-vs-custody-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Non-Custody vs Custody 완벽 비교</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">두 지갑의 차이점을 한눈에</p>
            </Link>
            <Link href="/blog/ico-token-issuance-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ICO 프로젝트를 위한 지갑</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">토큰 발행에 최적화된 솔루션</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
