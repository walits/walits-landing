import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'MPC 지갑 보안 완벽 가이드 - 2-of-3 다중 서명 | Walits',
  description: 'MPC 2-of-3 지갑이 단일 실패점을 제거하는 방법. ECDSA와 EdDSA 알고리즘으로 이더리움부터 솔라나까지 안전하게 보관하세요.',
  keywords: 'MPC 지갑, Multi-Party Computation, 2-of-3, 다중 서명, ECDSA, EdDSA, 암호화폐 보안, Custody 지갑',
  openGraph: {
    title: 'MPC 지갑 보안 완벽 가이드 - 2-of-3 다중 서명',
    description: 'MPC 2-of-3 지갑이 단일 실패점을 제거하는 방법. ECDSA와 EdDSA 알고리즘으로 이더리움부터 솔라나까지 안전하게 보관하세요.',
    url: 'https://walits.com/blog/mpc-wallet-security-guide',
    siteName: 'Walits',
    images: [
      {
        url: 'https://walits.com/blog/mpc-security.jpg',
        width: 1200,
        height: 630,
        alt: 'MPC 지갑 보안 가이드',
      },
    ],
    locale: 'ko_KR',
    type: 'article',
    publishedTime: '2026-01-11T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MPC 지갑 보안 완벽 가이드 - 2-of-3 다중 서명',
    description: 'MPC 2-of-3로 단일 실패점을 제거하는 방법. ECDSA와 EdDSA 알고리즘 지원.',
    images: ['https://walits.com/blog/mpc-security.jpg'],
  },
};

export default function MPCWalletSecurityGuidePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/blog/" className="hover:underline">블로그</Link> / 보안
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            MPC 지갑 보안 완벽 가이드
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>2026년 1월 11일</time>
            <span>•</span>
            <span>9분 읽기</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/mpc-security.jpg"
            alt="MPC 지갑 보안 가이드"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            100억 원의 암호화폐를 어떻게 안전하게 보관하시겠습니까? 단일 개인키로는 너무 위험합니다.
            MPC 2-of-3 지갑이 유일한 답입니다.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">문제: 단일 실패점</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">전통적인 지갑의 위험</h3>
          <p>
            일반 암호화폐 지갑은 하나의 개인키로 모든 자산을 관리합니다:
          </p>
          <ul>
            <li><strong>분실 위험</strong>: 개인키를 잃어버리면 영구 손실</li>
            <li><strong>탈취 위험</strong>: 해킹으로 개인키 노출 시 전액 탈취</li>
            <li><strong>내부자 위험</strong>: 담당자 1명이 전액 횡령 가능</li>
            <li><strong>단일 실패점</strong>: 하나의 약점이 전체 시스템 붕괴</li>
          </ul>

          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">실제 사례: 거래소 해킹</h4>
            <p className="mb-0">
              2022년 X거래소: 핫월렛 개인키 탈취로 300억 원 손실. 단일 개인키 의존이 원인.
              2-of-3 시스템이었다면 해커가 1개 키를 탈취해도 자산은 안전했을 것입니다.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">해결책: MPC 2-of-3</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">MPC란?</h3>
          <p>
            <strong>Multi-Party Computation (다자간 연산)</strong>: 개인키를 3개 조각으로 나누고,
            그 중 2개만 있으면 트랜잭션 서명이 가능한 기술입니다.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">작동 원리</h4>
            <pre className="text-sm overflow-x-auto">
{`개인키 원본: [절대 생성되지 않음!]
     ↓ MPC 알고리즘으로 분할
     ↓
Key Share 1 (CEO 보관)
Key Share 2 (CFO 보관)
Key Share 3 (오프라인 백업)

트랜잭션 서명:
✓ Key Share 1 + Key Share 2 → 서명 가능
✓ Key Share 1 + Key Share 3 → 서명 가능
✓ Key Share 2 + Key Share 3 → 서명 가능
✗ Key Share 1만 → 서명 불가
✗ Key Share 2만 → 서명 불가

핵심: 개인키 원본은 절대 생성되지 않음!`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">왜 2-of-3인가?</h3>
          <ul>
            <li><strong>분실 방지</strong>: 1개 키를 잃어도 나머지 2개로 복구 가능</li>
            <li><strong>탈취 방지</strong>: 해커가 1개 키를 탈취해도 자산은 안전</li>
            <li><strong>내부 통제</strong>: 1명이 단독으로 자산 이동 불가</li>
            <li><strong>유연성</strong>: CEO 부재 시 CFO + 백업 키로 운영 가능</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">다중 알고리즘 지원: ECDSA & EdDSA</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">ECDSA (Elliptic Curve Digital Signature Algorithm)</h3>
          <p>
            <strong>지원 체인:</strong> Ethereum, Bitcoin, BNB Chain, Polygon, Arbitrum, Optimism
          </p>
          <ul>
            <li>가장 널리 사용되는 서명 알고리즘</li>
            <li>secp256k1 곡선 기반</li>
            <li>EVM 호환 체인 전부 지원</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">EdDSA (Edwards-curve Digital Signature Algorithm)</h3>
          <p>
            <strong>지원 체인:</strong> Solana, Polkadot, Cardano, Near
          </p>
          <ul>
            <li>Ed25519 곡선 기반</li>
            <li>더 빠르고 효율적인 서명</li>
            <li>차세대 블록체인에서 주로 사용</li>
          </ul>

          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8 border-l-4 border-green-500">
            <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Walits의 장점</h4>
            <p className="mb-0">
              ECDSA와 EdDSA 모두 지원하므로, 이더리움부터 솔라나까지 모든 주요 체인의 자산을
              단일 MPC 시스템에서 안전하게 보관할 수 있습니다.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">다중 승인 워크플로우</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">금액별 승인 규칙</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <th className="text-left p-2">금액</th>
                  <th className="text-left p-2">승인 규칙</th>
                  <th className="text-left p-2">처리 시간</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="p-2">&lt; 1,000만 원</td>
                  <td className="p-2">재무팀장 단독</td>
                  <td className="p-2">즉시</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="p-2">1,000만 ~ 1억 원</td>
                  <td className="p-2">CFO 승인 필요</td>
                  <td className="p-2">1시간 이내</td>
                </tr>
                <tr className="border-b border-gray-300 dark:border-gray-700">
                  <td className="p-2">1억 ~ 10억 원</td>
                  <td className="p-2">CEO + CFO 승인</td>
                  <td className="p-2">4시간 이내</td>
                </tr>
                <tr>
                  <td className="p-2">&gt; 10억 원</td>
                  <td className="p-2">이사회 승인</td>
                  <td className="p-2">24시간 이내</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">승인 프로세스</h3>
          <ol>
            <li><strong>출금 요청</strong>: 담당자가 대시보드에서 출금 신청</li>
            <li><strong>정책 확인</strong>: 시스템이 자동으로 금액별 규칙 확인</li>
            <li><strong>승인 알림</strong>: 승인자에게 이메일/SMS 발송</li>
            <li><strong>다중 승인</strong>: 규칙에 따라 2명 이상 승인</li>
            <li><strong>MPC 서명</strong>: 2-of-3 키로 자동 서명</li>
            <li><strong>온체인 전송</strong>: 블록체인에 트랜잭션 제출</li>
            <li><strong>완료 알림</strong>: 모든 관련자에게 완료 통지</li>
          </ol>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">감사 추적 시스템</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">모든 액션 기록</h3>
          <ul className="space-y-2">
            <li><strong>누가 (Who)</strong>: 요청자와 승인자의 신원이 명확하게 기록되어 책임 소재가 분명합니다.</li>
            <li><strong>언제 (When)</strong>: 요청 시각, 승인 시각, 실행 시각이 모두 타임스탬프와 함께 저장됩니다.</li>
            <li><strong>무엇을 (What)</strong>: 정확한 금액, 수신 주소, 자산 종류 등 모든 거래 세부 사항이 기록됩니다.</li>
            <li><strong>왜 (Why)</strong>: 출금 사유와 관련 첨부 문서가 함께 보관되어 나중에 확인할 수 있습니다.</li>
            <li><strong>어떻게 (How)</strong>: 어떤 키 조합으로 서명했는지 기록되어 감사 추적이 가능합니다.</li>
          </ul>

          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">감사 로그 예시</h4>
            <pre className="text-sm overflow-x-auto">
{`[2026-01-11 14:30:22] 출금 요청
 요청자: 재무팀장 김철수 (kim@company.com)
 금액: 5억 원 (500,000,000 KRW → USDT)
 수신: 0x1234...5678
 사유: 협력사 대금 지급
 첨부: invoice_2026_001.pdf

[2026-01-11 14:35:10] 1차 승인
 승인자: CFO 이영희 (lee@company.com)
 IP: 123.45.67.89
 Device: iPhone 15 Pro
 승인 방식: 생체인증 (Face ID)

[2026-01-11 14:42:33] 2차 승인
 승인자: CEO 박민수 (park@company.com)
 IP: 98.76.54.32
 Device: MacBook Pro
 승인 방식: 하드웨어 키 (YubiKey)

[2026-01-11 14:43:01] MPC 서명 완료
 사용된 Key Share: #1 (CEO) + #2 (CFO)
 서명 알고리즘: ECDSA (secp256k1)
 서명 해시: 0xabcd...ef01

[2026-01-11 14:43:15] 온체인 전송
 Tx Hash: 0x9876...5432
 Chain: Ethereum Mainnet
 Gas Used: 21,000
 Status: Confirmed (12 blocks)

[2026-01-11 14:47:00] 완료 알림
 통지 대상: 요청자, 승인자 전원
 방식: Email + SMS`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">재해 복구 시나리오</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 1: Key Share 1개 분실</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
            <p><strong>문제:</strong> CEO의 스마트폰 분실로 Key Share #1 접근 불가</p>
            <p><strong>해결:</strong></p>
            <ol>
              <li>CFO + 백업 키(Key Share #2 + #3)로 즉시 운영 재개</li>
              <li>새 Key Share #1 생성 및 CEO에게 재발급</li>
              <li>옵션: 기존 키 폐기하고 완전히 새 3개 키 생성</li>
            </ol>
            <p><strong>결과:</strong> 업무 중단 없음, 자산 손실 없음</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 2: Key Share 1개 탈취</h3>
          <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6 border-l-4 border-red-500">
            <p><strong>문제:</strong> 해커가 Key Share #2를 탈취</p>
            <p><strong>해결:</strong></p>
            <ol>
              <li>Key Share #2 즉시 폐기 (blacklist 등록)</li>
              <li>해커는 1개 키만으로는 아무것도 못 함 (2개 필요)</li>
              <li>CEO + 백업 키로 운영 계속</li>
              <li>새 Key Share 3개 세트 생성 및 자산 이전</li>
            </ol>
            <p><strong>결과:</strong> 자산 손실 없음, 해커는 무용지물</p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">시나리오 3: 회사 서버 전체 다운</h3>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6 border-l-4 border-green-500">
            <p><strong>문제:</strong> 사무실 화재로 모든 서버 소실</p>
            <p><strong>해결:</strong></p>
            <ol>
              <li>Key Share #3은 오프라인 백업 (은행 금고 보관)</li>
              <li>CEO/CFO의 모바일 Key Share는 클라우드 암호화 백업</li>
              <li>새 서버 구축 후 Key Share 복구</li>
              <li>정상 운영 재개</li>
            </ol>
            <p><strong>결과:</strong> 완전 복구 가능</p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">보안 베스트 프랙티스</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Key Share 보관 원칙</h3>
          <ul className="space-y-2">
            <li><strong>물리적 분리</strong>: 3개의 키를 서로 다른 물리적 장소에 보관하여 한 곳이 침해되어도 안전합니다.</li>
            <li><strong>역할 분리</strong>: 각 키를 서로 다른 책임자가 관리하도록 하여 내부 통제를 강화합니다.</li>
            <li><strong>다양한 형태</strong>: 모바일 기기, 하드웨어 키, 오프라인 백업 등 다양한 형태로 보관합니다.</li>
            <li><strong>정기 테스트</strong>: 월 1회 정기적으로 복구 테스트를 실시하여 비상 상황에 대비합니다.</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">추천 구성</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <ul className="space-y-4">
              <li>
                <strong>Key Share #1:</strong> CEO 스마트폰 (생체인증)<br/>
                <span className="text-sm text-gray-600 dark:text-gray-400">클라우드 암호화 백업, 2FA 필수</span>
              </li>
              <li>
                <strong>Key Share #2:</strong> CFO 하드웨어 키 (YubiKey)<br/>
                <span className="text-sm text-gray-600 dark:text-gray-400">물리적 장치, 분실 시 즉시 폐기 가능</span>
              </li>
              <li>
                <strong>Key Share #3:</strong> 오프라인 백업 (은행 금고)<br/>
                <span className="text-sm text-gray-600 dark:text-gray-400">Ledger 하드웨어 지갑 or 종이 백업</span>
              </li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 도입 사례</h2>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
            <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Case: 암호화폐 거래소 K</h3>
            <p><strong>Before MPC:</strong></p>
            <ul>
              <li>콜드월렛: 단일 개인키 USB 보관</li>
              <li>담당자 1명이 전액 접근 가능</li>
              <li>내부 횡령 위험 상존</li>
            </ul>
            <p><strong>After MPC 2-of-3:</strong></p>
            <ul>
              <li>CEO + CTO + 백업 키 구성</li>
              <li>10억 원 이상 출금 시 CEO+CTO 필수 승인</li>
              <li>모든 승인 기록 블록체인에 기록</li>
            </ul>
            <p className="text-lg font-semibold mt-4">
              최종 결과: 내부 통제가 크게 강화되었고, 실제로 해킹 시도 3건을 성공적으로 차단할 수 있었습니다.
            </p>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">가격</h2>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Custody Wallet (MPC 2-of-3)</h3>
            <div className="text-4xl font-bold text-purple-600 mb-4">₩550,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
            <p className="text-lg mb-4">첫 달 무료 • 전담 매니저 지원</p>
            <ul className="mb-6 space-y-2">
              <li>MPC 2-of-3 보안 방식으로 단일 실패점을 완전히 제거했습니다.</li>
              <li>ECDSA와 EdDSA 알고리즘을 모두 지원하여 모든 주요 블록체인과 호환됩니다.</li>
              <li>다중 승인 워크플로우를 통해 금액별로 차등화된 승인 규칙을 적용할 수 있습니다.</li>
              <li>정책 기반 거버넌스 시스템으로 내부 통제를 체계적으로 관리합니다.</li>
              <li>모든 거래와 승인 과정이 완벽하게 감사 추적되어 투명성이 보장됩니다.</li>
              <li>24시간 연중무휴 기술 지원팀이 대기하고 있어 언제든지 도움을 받을 수 있습니다.</li>
            </ul>
            <Link
              href="/custody-wallet"
              className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              무료로 시작하기
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">귀사 자산을 MPC로 안전하게</h3>
            <p className="mb-6">
              100억 원 이상 보관 시 맞춤 견적 제공. 무료 상담으로 최적의 보안 전략을 수립하세요.
            </p>
            <Link
              href="/inquiry"
              className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              무료 보안 상담
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">관련 글</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">기업용 암호화폐 지갑 선택 가이드</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">Non-Custody vs Custody</p>
            </Link>
            <Link href="/blog/non-custody-vs-custody-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">지갑 비교 가이드</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">어떤 지갑이 필요할까?</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
