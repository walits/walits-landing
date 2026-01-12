import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Non-Custody vs Custody 지갑 완벽 비교 | Walits',
  description: 'Non-Custody와 Custody 암호화폐 지갑의 차이점을 완벽하게 비교합니다. 보안, 비용, 사용 사례까지 한눈에 정리.',
  keywords: 'Non-Custody 지갑, Custody 지갑, 암호화폐 지갑 비교, 기업용 지갑, MPC 지갑, API 지갑',
  openGraph: {
    title: 'Non-Custody vs Custody 지갑 완벽 비교',
    description: 'Non-Custody와 Custody 암호화폐 지갑의 차이점을 완벽하게 비교합니다. 보안, 비용, 사용 사례까지 한눈에 정리.',
    url: 'https://walits.com/blog/non-custody-vs-custody-wallet',
    siteName: 'Walits',
    images: [
      {
        url: 'https://walits.com/blog/wallet-comparison.jpg',
        width: 1200,
        height: 630,
        alt: 'Non-Custody vs Custody 지갑 비교',
      },
    ],
    locale: 'ko_KR',
    type: 'article',
    publishedTime: '2026-01-11T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Non-Custody vs Custody 지갑 완벽 비교',
    description: 'Non-Custody와 Custody 암호화폐 지갑의 차이점을 완벽하게 비교합니다.',
    images: ['https://walits.com/blog/wallet-comparison.jpg'],
  },
};

export default function NonCustodyVsCustodyWalletPage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/blog/" className="hover:underline">블로그</Link> / 지갑 비교
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            Non-Custody vs Custody 지갑 완벽 비교
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>2026년 1월 11일</time>
            <span>•</span>
            <span>6분 읽기</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/wallet-comparison.jpg"
            alt="Non-Custody vs Custody 지갑 비교"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            암호화폐 지갑을 선택할 때 가장 먼저 마주하는 선택: Non-Custody vs Custody.
            이 두 가지는 완전히 다른 목적과 구조를 가지고 있습니다. 한눈에 비교해드립니다.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">핵심 차이점</h2>

          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">구분</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Non-Custody</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Custody</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">자산 보관</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">사용자별 독립 지갑</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">중앙 집중 보관</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">개인키 관리</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">사용자별 독립 키</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">MPC 2-of-3 공유 키</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">주요 용도</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">대량 지급/배포</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">안전한 자산 보관</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">규제 리스크</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">낮음 (집금 없음)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">높음 (자산 보관)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">처리 속도</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">매우 빠름</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">다중 승인 필요</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">가격</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">₩77,000/월</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">₩550,000/월</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Non-Custody 지갑 상세</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">작동 방식</h3>
          <p>
            각 사용자가 독립적인 지갑을 가집니다. 회사는 자산을 모으지 않고(집금 없음),
            사용자별로 독립된 주소에서 입출금이 이루어집니다.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">예시: 게임 보상 지급</h4>
            <pre className="text-sm overflow-x-auto">
{`플레이어 A: 0x1111...aaaa → 100 COIN 지급
플레이어 B: 0x2222...bbbb → 200 COIN 지급
플레이어 C: 0x3333...cccc → 150 COIN 지급

✓ 각자 독립된 지갑 주소
✓ 집금 없이 직접 지급
✓ API로 자동화 가능`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">언제 사용?</h3>
          <ul>
            <li>✅ 게임 보상 지급</li>
            <li>✅ NFT 에어드랍</li>
            <li>✅ ICO 토큰 발행</li>
            <li>✅ 메타버스 리워드</li>
            <li>✅ 대량 프로모션</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">장점</h3>
          <ul>
            <li><strong>규제 리스크 최소화</strong>: 고객 자산을 집금하지 않아 금융 규제 대상 아님</li>
            <li><strong>빠른 처리</strong>: 다중 승인 불필요, API로 즉시 처리</li>
            <li><strong>무제한 확장</strong>: 사용자 수 무제한, 트랜잭션 무제한</li>
            <li><strong>저렴한 비용</strong>: 월 ₩77,000 (무제한 사용)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">단점</h3>
          <ul>
            <li><strong>대량 자산 보관 부적합</strong>: 수백억 원 보관에는 Custody가 더 안전</li>
            <li><strong>거버넌스 약함</strong>: 다중 승인 같은 내부 통제 시스템 없음</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Custody 지갑 상세</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">작동 방식</h3>
          <p>
            회사가 고객 자산을 중앙에서 보관합니다. MPC 2-of-3 기술로 단일 실패점을 제거하고,
            다중 승인 워크플로우로 내부 통제를 강화합니다.
          </p>

          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">예시: 거래소 콜드월렛</h4>
            <pre className="text-sm overflow-x-auto">
{`메인 콜드월렛: 0xAAAA...BBBB
 ├─ Key Share 1: CEO 승인
 ├─ Key Share 2: CFO 승인
 └─ Key Share 3: 백업 (오프라인)

출금 요청 → CEO + CFO 승인 → 실행

✓ 2-of-3 승인 필요
✓ 단일 실패점 제거
✓ 완벽한 감사 추적`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">언제 사용?</h3>
          <ul>
            <li>✅ 암호화폐 거래소</li>
            <li>✅ 커스터디 서비스</li>
            <li>✅ 기관 투자자</li>
            <li>✅ 기업 재무 관리</li>
            <li>✅ 토큰 발행사 (재무 보관)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">장점</h3>
          <ul>
            <li><strong>최고 수준 보안</strong>: MPC 2-of-3로 단일 실패점 제거</li>
            <li><strong>강력한 거버넌스</strong>: 금액별 승인 규칙, 다중 승인 워크플로우</li>
            <li><strong>완벽한 감사 추적</strong>: 모든 거래 이력, 승인 기록 저장</li>
            <li><strong>컴플라이언스</strong>: 금융기관급 규제 대응</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">단점</h3>
          <ul>
            <li><strong>높은 비용</strong>: 월 ₩550,000</li>
            <li><strong>느린 처리</strong>: 다중 승인 필요로 즉시 실행 불가</li>
            <li><strong>규제 대상</strong>: 고객 자산 보관으로 금융 규제 적용</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">시나리오별 선택 가이드</h2>

          <div className="space-y-6 my-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q1. 게임 보상을 10만 명에게 지급하고 싶어요</h4>
              <p className="mb-2"><strong>답변:</strong> Non-Custody 지갑</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                이유: 대량 지급이 핵심. API로 자동화 가능하고, 집금 없어 규제 리스크 낮음.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q2. 거래소 고객 자산 100억 원을 보관해야 해요</h4>
              <p className="mb-2"><strong>답변:</strong> Custody 지갑</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                이유: 대량 자산 보관이 핵심. MPC 2-of-3로 최고 수준 보안 제공. 다중 승인으로 내부 통제 강화.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q3. ICO로 5만 명에게 토큰을 발행해야 해요</h4>
              <p className="mb-2"><strong>답변:</strong> Non-Custody 지갑</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                이유: 투자자별 자동 지갑 생성 + 대량 토큰 배포. API로 5분 만에 5만 건 처리 가능.
              </p>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q4. 회사 재무 자금 50억 원을 안전하게 관리하고 싶어요</h4>
              <p className="mb-2"><strong>답변:</strong> Custody 지갑</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                이유: 재무 관리는 보안과 거버넌스가 핵심. CEO/CFO 다중 승인으로 횡령 방지.
              </p>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Q5. 둘 다 필요해요!</h4>
              <p className="mb-2"><strong>답변:</strong> 두 가지 모두 사용</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Non-Custody로 일일 운영 (보상 지급, 에어드랍) + Custody로 재무 자금 보관. 많은 기업이 이렇게 사용합니다.
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">비용 비교</h2>

          <div className="grid md:grid-cols-2 gap-6 my-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-blue-600">Non-Custody</h3>
              <div className="text-4xl font-bold mb-4">₩77,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
              <ul className="space-y-2 mb-6">
                <li>✅ 무제한 지갑 생성</li>
                <li>✅ 무제한 트랜잭션</li>
                <li>✅ ICO 지원</li>
                <li>✅ RESTful API</li>
                <li>✅ Webhook</li>
              </ul>
              <Link href="/non-custody-wallet" className="block text-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                자세히 보기
              </Link>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-purple-600">Custody</h3>
              <div className="text-4xl font-bold mb-4">₩550,000<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
              <ul className="space-y-2 mb-6">
                <li>✅ MPC 2-of-3 보안</li>
                <li>✅ 다중 승인</li>
                <li>✅ 정책 기반 거버넌스</li>
                <li>✅ 완벽한 감사 추적</li>
                <li>✅ 전담 매니저</li>
              </ul>
              <Link href="/custody-wallet" className="block text-center px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
                자세히 보기
              </Link>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">결론</h2>
          <p>
            <strong>핵심 질문 하나로 결정하세요:</strong>
          </p>
          <ul>
            <li>✅ <strong>대량 지급/배포가 목적이라면:</strong> Non-Custody 지갑</li>
            <li>✅ <strong>대량 자산 안전 보관이 목적이라면:</strong> Custody 지갑</li>
          </ul>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">어떤 지갑이 필요한지 고민되시나요?</h3>
            <p className="mb-6">
              무료 상담으로 귀사에 딱 맞는 솔루션을 찾아드립니다.
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
              <p className="text-sm text-gray-600 dark:text-gray-400">8분 만에 완벽 정리</p>
            </Link>
            <Link href="/blog/ico-token-issuance-wallet" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">ICO 토큰 발행 지갑</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">5만 명에게 5분 만에 배포</p>
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
