import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'ICO 토큰 발행을 위한 암호화폐 지갑 솔루션 | Walits',
  description: 'ICO 프로젝트를 위한 완벽한 지갑 솔루션. 투자자별 자동 지갑 생성, 커스텀 토큰 배포, API 자동화까지. 5만 명 투자자도 5분 만에 토큰 배포.',
  keywords: 'ICO 지갑, 토큰 발행, 커스텀 토큰, 토큰 배포, 크라우드세일, 프리세일, 에어드랍, Non-Custody 지갑',
};

export default function ICOTokenIssuanceWalletPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/blog" className="hover:underline">블로그</Link> / ICO & 토큰 발행
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            ICO 토큰 발행을 위한 암호화폐 지갑 솔루션
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>2026년 1월 11일</time>
            <span>•</span>
            <span>7분 읽기</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/ico-wallet.jpg"
            alt="ICO 토큰 발행 지갑"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            ICO나 토큰 발행 프로젝트를 시작하셨나요? 5만 명의 투자자에게 토큰을 어떻게 배포할 건가요?
            수작업으로는 불가능합니다. ICO에 최적화된 지갑 솔루션이 필요합니다.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">ICO 프로젝트의 핵심 과제</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">문제 1: 투자자별 지갑 생성</h3>
          <p>
            투자자 5만 명에게 각각 토큰을 받을 지갑이 필요합니다. 메타마스크 주소를 받아서 관리하시겠습니까?
          </p>
          <ul>
            <li><strong>주소 수집의 악몽</strong>: 잘못된 주소, 오타, 스팸 주소</li>
            <li><strong>보안 문제</strong>: 투자자가 개인키를 분실하면?</li>
            <li><strong>사용자 경험</strong>: 암호화폐 초보자는 지갑도 없음</li>
          </ul>

          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
            <p className="text-lg font-semibold mb-2">💡 해결책: 자동 지갑 생성</p>
            <p className="mb-0">
              Non-Custody 지갑은 투자자가 가입하면 자동으로 커스텀 토큰 전용 지갑을 생성합니다.
              투자자는 아무것도 할 필요 없이 이메일만 입력하면 끝.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">문제 2: 대량 토큰 배포</h3>
          <p>
            프리세일 종료 후 5만 명에게 동시에 토큰을 보내야 합니다. 어떻게?
          </p>
          <ul>
            <li><strong>수작업 불가능</strong>: 하나씩 전송하면 몇 달 걸림</li>
            <li><strong>가스비 폭탄</strong>: 트랜잭션당 가스비 * 5만 건</li>
            <li><strong>실패 처리</strong>: 중간에 실패하면 어디까지 보냈는지 추적 불가</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8 border-l-4 border-green-500">
            <p className="text-lg font-semibold mb-2">✅ 해결책: API 대량 배포</p>
            <p className="mb-0">
              API 한 번 호출로 5만 건 배포. 실패한 건은 자동 재시도. 모든 트랜잭션 이력 추적 가능.
              가스비는 배치 전송으로 최소화.
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">문제 3: 베스팅과 락업</h3>
          <p>
            팀 물량은 6개월 락업, 투자자 물량은 3개월 베스팅. 어떻게 관리?
          </p>
          <ul>
            <li><strong>스마트 컨트랙트 복잡도</strong>: 베스팅 로직 구현 어려움</li>
            <li><strong>실수 위험</strong>: 락업 기간 설정 오류</li>
            <li><strong>투명성 부족</strong>: 투자자가 베스팅 일정 확인 불가</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Walits ICO 지갑 솔루션</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. 자동 지갑 생성</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`POST /api/v1/wallets
{
  "userId": "investor123",
  "email": "investor@example.com",
  "customToken": "YOUR_TOKEN_CONTRACT"
}

Response:
{
  "walletAddress": "0x1234...5678",
  "customTokenBalance": 0,
  "status": "active"
}`}
            </pre>
          </div>
          <p>
            투자자가 가입하면 자동으로 귀사의 커스텀 토큰 전용 지갑이 생성됩니다.
            투자자는 복잡한 과정 없이 바로 토큰을 받을 수 있습니다.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 대량 토큰 배포 API</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <pre className="text-sm overflow-x-auto">
{`POST /api/v1/tokens/batch-transfer
{
  "tokenContract": "0xYOUR_TOKEN",
  "transfers": [
    {"to": "investor1@example.com", "amount": "1000"},
    {"to": "investor2@example.com", "amount": "5000"},
    // ... 50,000 transfers
  ]
}

Response:
{
  "batchId": "batch_abc123",
  "totalTransfers": 50000,
  "status": "processing",
  "estimatedCompletion": "5 minutes"
}`}
            </pre>
          </div>
          <p>
            5만 명에게 토큰 배포도 API 한 번으로 5분 만에 완료. 실패한 건은 자동 재시도되고,
            모든 트랜잭션은 추적 가능합니다.
          </p>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 실시간 배포 모니터링</h3>
          <ul>
            <li>✅ 전체 진행률 실시간 확인</li>
            <li>✅ 실패한 트랜잭션 자동 재시도</li>
            <li>✅ 가스비 최적화 자동 조정</li>
            <li>✅ Webhook으로 완료 알림</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 사용 사례</h2>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Case Study: DeFi 프로젝트 X</h3>
            <p><strong>상황:</strong></p>
            <ul>
              <li>프리세일 투자자: 15,000명</li>
              <li>에어드랍 대상자: 35,000명</li>
              <li>총 토큰 배포: 5천만 개</li>
            </ul>
            <p><strong>Before Walits:</strong></p>
            <ul>
              <li>❌ 투자자 지갑 주소 수집 3주</li>
              <li>❌ 주소 검증 및 오류 수정 1주</li>
              <li>❌ 배포 스크립트 작성 및 테스트 1주</li>
              <li>❌ 실제 배포 진행 2일</li>
              <li>❌ 실패 건 재처리 3일</li>
            </ul>
            <p><strong>After Walits:</strong></p>
            <ul>
              <li>✅ 투자자 이메일 수집만 진행</li>
              <li>✅ API 통합 1일</li>
              <li>✅ 전체 배포 완료 10분</li>
              <li>✅ 실패율 0% (자동 재시도)</li>
            </ul>
            <p className="text-lg font-semibold mt-4">
              📊 결과: 5주 작업이 2일로 단축 (96% 시간 절약)
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">기술 스펙</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">지원 체인</h3>
          <ul>
            <li>Ethereum (ERC-20)</li>
            <li>BNB Chain (BEP-20)</li>
            <li>Polygon (MATIC)</li>
            <li>Arbitrum & Optimism (L2)</li>
            <li>Solana (SPL Token)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">보안</h3>
          <ul>
            <li>✅ TEE 환경에서 개인키 생성 및 관리</li>
            <li>✅ Redis 분산 락으로 이중지불 방지</li>
            <li>✅ 트랜잭션 멱등성 보장</li>
            <li>✅ 모든 API 호출 감사 로그 기록</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">성능</h3>
          <ul>
            <li>시간당 최대 100만 건 처리</li>
            <li>배치 전송으로 가스비 70% 절감</li>
            <li>99.9% 업타임 보장</li>
            <li>자동 스케일링으로 트래픽 급증 대응</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">가격</h2>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Non-Custody Wallet</h3>
            <div className="text-4xl font-bold text-blue-600 mb-4">₩77,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
            <p className="text-lg mb-4">첫 달 무료 • 무제한 트랜잭션 • ICO 완벽 지원</p>
            <ul className="mb-6">
              <li>✅ 무제한 지갑 생성</li>
              <li>✅ 무제한 토큰 배포</li>
              <li>✅ 커스텀 토큰 지원</li>
              <li>✅ RESTful API 제공</li>
              <li>✅ Webhook 알림</li>
              <li>✅ 24/7 기술 지원</li>
            </ul>
            <Link
              href="/non-custody-wallet"
              className="inline-block px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              무료로 시작하기
            </Link>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">시작하기</h2>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">3단계로 ICO 지갑 구축</h3>
            <ol className="space-y-4">
              <li>
                <strong>1단계: 가입 및 API 키 발급</strong>
                <p className="text-gray-600 dark:text-gray-400">무료 계정 생성 후 대시보드에서 API 키를 즉시 발급받으세요.</p>
              </li>
              <li>
                <strong>2단계: 커스텀 토큰 등록</strong>
                <p className="text-gray-600 dark:text-gray-400">귀사의 토큰 컨트랙트 주소를 등록하면 자동으로 지갑 생성 시스템이 구축됩니다.</p>
              </li>
              <li>
                <strong>3단계: API 통합 및 배포</strong>
                <p className="text-gray-600 dark:text-gray-400">샘플 코드를 참고해 10분 만에 API를 통합하고 토큰 배포를 시작하세요.</p>
              </li>
            </ol>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">ICO 프로젝트 무료 상담</h3>
            <p className="mb-6">
              귀사의 토큰 발행 프로젝트에 맞는 최적의 솔루션을 제안해드립니다.
              첫 달 무료로 시작하세요.
            </p>
            <Link
              href="/inquiry"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              무료 상담 신청
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">관련 글</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">기업용 암호화폐 지갑 선택 가이드</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Non-Custody vs Custody 완벽 비교</p>
            </Link>
            <Link href="/blog/non-custody-vs-custody-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Non-Custody와 Custody 지갑 차이</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">언제 어떤 지갑을 사용해야 할까?</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
