import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'STO(증권형 토큰) 완벽 가이드 - 실물 자산 토큰화 | Walits',
  description: 'STO(Security Token Offering)와 증권형 토큰의 모든 것. 부동산, 채권, 주식을 블록체인으로 토큰화하는 방법과 AI ST 지갑 활용법.',
  keywords: 'STO, 증권형 토큰, Security Token, 토큰증권, 실물자산토큰화, RWA, Real World Assets, AI ST 지갑',
  openGraph: {
    title: 'STO(증권형 토큰) 완벽 가이드 - 실물 자산 토큰화',
    description: 'STO(Security Token Offering)와 증권형 토큰의 모든 것. 부동산, 채권, 주식을 블록체인으로 토큰화하는 방법.',
    url: 'https://walits.com/blog/security-token-sto-guide',
    siteName: 'Walits',
    images: [
      {
        url: 'https://walits.com/blog/sto-guide.jpg',
        width: 1200,
        height: 630,
        alt: 'STO 증권형 토큰 가이드',
      },
    ],
    locale: 'ko_KR',
    type: 'article',
    publishedTime: '2026-01-11T00:00:00.000Z',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'STO(증권형 토큰) 완벽 가이드',
    description: '부동산, 채권, 주식을 블록체인으로 토큰화. RWA 투자의 모든 것.',
    images: ['https://walits.com/blog/sto-guide.jpg'],
  },
};

export default function SecurityTokenSTOGuidePage() {
  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
            <Link href="/blog/" className="hover:underline">블로그</Link> / STO & 증권형 토큰
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            STO(증권형 토큰) 완벽 가이드
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>2026년 1월 11일</time>
            <span>•</span>
            <span>10분 읽기</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/sto-guide.jpg"
            alt="STO 증권형 토큰 가이드"
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="lead text-xl text-gray-700 dark:text-gray-300">
            100억 원짜리 강남 빌딩을 1억 원 단위로 조각내서 투자할 수 있다면?
            STO(Security Token Offering)는 실물 자산을 블록체인 토큰으로 만들어 거래 가능하게 합니다.
          </p>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">STO란?</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">정의</h3>
          <p>
            <strong>STO (Security Token Offering)</strong>: 증권형 토큰을 발행하는 것.
            증권형 토큰은 실물 자산(부동산, 채권, 주식 등)의 소유권을 블록체인 토큰으로 나타낸 것입니다.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">예시: 강남 빌딩 토큰화</h4>
            <pre className="text-sm">
{`실물 자산: 강남 빌딩 (시가 100억 원)
     ↓ 토큰화 (STO)
     ↓
증권형 토큰: GANGNAM-BLDG 토큰 100개 발행
 (1 토큰 = 1억 원 = 빌딩 1% 지분)

투자자 A: 10 토큰 구매 (10억 원) → 빌딩 10% 소유
투자자 B: 5 토큰 구매 (5억 원) → 빌딩 5% 소유
투자자 C: 1 토큰 구매 (1억 원) → 빌딩 1% 소유

✓ 소액 투자 가능 (기존: 100억 전액, STO: 1억부터)
✓ 24/7 거래 가능 (기존: 중개인 필요, STO: 즉시)
✓ 배당 자동 분배 (스마트 컨트랙트)`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">ICO vs STO</h3>
          <div className="overflow-x-auto my-8">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-gray-100 dark:bg-gray-800">
                  <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">구분</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">ICO</th>
                  <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">STO</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">토큰 종류</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">유틸리티 토큰</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">증권형 토큰</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">규제</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">거의 없음 (위험)</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">증권 규제 적용</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">권리</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">서비스 이용권</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">배당/의결권</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">실물 자산</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">없음</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">있음 (부동산/채권)</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">투자자 보호</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">약함</td>
                  <td className="border border-gray-300 dark:border-gray-700 p-4">강함 (법적 보호)</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">STO의 장점</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. 조각 투자 (Fractional Ownership)</h3>
          <p>
            고가 자산을 소액으로 나눠서 투자 가능:
          </p>
          <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Before STO</h4>
            <ul>
              <li>❌ 강남 빌딩 투자: 최소 100억 원 필요</li>
              <li>❌ 일반인은 투자 불가</li>
              <li>❌ 부자만 투자 가능</li>
            </ul>
            <h4 className="font-bold mb-4 mt-6 text-gray-900 dark:text-white">After STO</h4>
            <ul>
              <li>✅ 강남 빌딩 투자: 1억 원부터 가능</li>
              <li>✅ 일반인도 투자 가능</li>
              <li>✅ 포트폴리오 다각화</li>
            </ul>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 유동성 (Liquidity)</h3>
          <p>
            기존 부동산/채권은 매도하기 어렵지만, STO는 즉시 거래 가능:
          </p>
          <ul>
            <li><strong>기존 부동산</strong>: 매도까지 평균 6개월</li>
            <li><strong>STO 부동산 토큰</strong>: 거래소에서 즉시 매도</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 자동 배당 (Smart Contract)</h3>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
            <pre className="text-sm">
{`[스마트 컨트랙트 - 자동 배당]

매월 1일: 빌딩 임대료 수입 1억 원
     ↓ 스마트 컨트랙트 자동 실행
     ↓
토큰 보유자에게 비율대로 자동 분배:
 투자자 A (10% 지분): 1,000만 원 입금
 투자자 B (5% 지분): 500만 원 입금
 투자자 C (1% 지분): 100만 원 입금

✓ 중개인 없이 자동 분배
✓ 투명한 수익 내역
✓ 횡령 불가능`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. 글로벌 투자 (Global Access)</h3>
          <ul>
            <li>한국인이 미국 부동산에 투자</li>
            <li>미국인이 한국 채권에 투자</li>
            <li>24/7 전 세계 어디서나 거래</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">토큰화 가능한 자산 (RWA)</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. 부동산 (Real Estate)</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <ul>
              <li><strong>상업용 빌딩</strong>: 오피스, 쇼핑몰</li>
              <li><strong>주거용 부동산</strong>: 아파트, 빌라</li>
              <li><strong>토지</strong>: 개발 예정 부지</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              예시: 강남역 오피스 빌딩 500억 원 → 5,000개 토큰 발행 (1토큰 = 1,000만 원)
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 채권 (Bonds)</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <ul>
              <li><strong>회사채</strong>: 기업이 발행하는 채권</li>
              <li><strong>국채</strong>: 정부가 발행하는 채권</li>
              <li><strong>프로젝트 채권</strong>: 특정 프로젝트 자금 조달</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              예시: A사 회사채 100억 원 (연 5% 이자) → 10,000개 토큰 발행
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 주식 (Equity)</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <ul>
              <li><strong>스타트업 지분</strong>: 비상장 회사 주식</li>
              <li><strong>상장사 주식</strong>: 전통 주식의 토큰 버전</li>
            </ul>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
              예시: B 스타트업 지분 10% → 1,000개 토큰 발행 (1토큰 = 0.01% 지분)
            </p>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. 예술품 & 수집품</h3>
          <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
            <ul>
              <li><strong>미술품</strong>: 피카소 그림 10억 원 → 100개 토큰</li>
              <li><strong>와인</strong>: 희귀 와인 컬렉션 → 조각 투자</li>
              <li><strong>시계</strong>: 롤렉스 한정판 → 공동 소유</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">AI ST 지갑 활용법</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. AI 포트폴리오 관리</h3>
          <p>
            AI가 자동으로 최적의 STO 포트폴리오를 구성합니다:
          </p>
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
            <h4 className="font-bold mb-4 text-gray-900 dark:text-white">AI 추천 포트폴리오 (투자금 1억 원)</h4>
            <pre className="text-sm">
{`[보수적 투자자 프로필]

AI 추천 자산 배분:
 40% (4,000만 원): 국채 STO (연 3% 안정적)
 30% (3,000만 원): 강남 빌딩 STO (연 5% 임대 수익)
 20% (2,000만 원): 회사채 STO (연 6% 중간 위험)
 10% (1,000만 원): 스타트업 지분 STO (고위험/고수익)

예상 수익률: 연 4.5%
위험도: 중하 (Low-Medium)

✓ AI가 시장 상황에 따라 자동 리밸런싱
✓ 고위험 자산 비중 증가 시 자동 알림`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 자동 수익 재투자</h3>
          <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
            <pre className="text-sm">
{`[매월 배당 수익 자동 재투자]

1월: 빌딩 임대료 배당 50만 원 받음
     ↓ AI 자동 실행
     ↓
AI: "50만 원으로 추가 투자 가능한 STO:"
 1. 같은 빌딩 추가 매수 (복리 효과)
 2. 다른 부동산 STO 분산 투자
 3. 현금 보유 (대기)

→ AI 선택: 같은 빌딩 0.5 토큰 추가 매수
→ 복리 효과로 수익 가속화`}
            </pre>
          </div>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 리스크 모니터링</h3>
          <ul>
            <li>✅ <strong>가격 하락 알림</strong>: 보유 토큰 10% 하락 시 즉시 알림</li>
            <li>✅ <strong>신용등급 변동</strong>: 채권 발행사 신용등급 하락 시 경고</li>
            <li>✅ <strong>시장 위험</strong>: 부동산 시장 과열 시 매도 추천</li>
          </ul>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">규제 및 컴플라이언스</h2>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">KYC/AML 필수</h3>
          <p>
            STO는 증권이므로 투자자 신원 확인이 필수입니다:
          </p>
          <ul>
            <li><strong>KYC (Know Your Customer)</strong>: 신분증, 주소 확인</li>
            <li><strong>AML (Anti-Money Laundering)</strong>: 자금 출처 확인</li>
            <li><strong>적격 투자자</strong>: 일정 소득/자산 이상만 투자 가능 (일부 STO)</li>
          </ul>

          <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">한국 규제 현황 (2026년)</h3>
          <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
            <ul>
              <li>✅ <strong>자본시장법</strong>: STO는 증권으로 분류, 금융위 규제</li>
              <li>✅ <strong>거래소 상장</strong>: 인가받은 거래소에서만 거래 가능</li>
              <li>✅ <strong>투자자 보호</strong>: 손실 발생 시 법적 보호</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 사례</h2>

          <div className="space-y-6 my-8">
            <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">🏢 Case 1: 싱가포르 상업용 빌딩 STO</h4>
              <p><strong>자산:</strong> 싱가포르 오차드 로드 오피스 빌딩 (₩500억)</p>
              <p><strong>토큰 발행:</strong> 50,000개 (1토큰 = ₩100만 원)</p>
              <p><strong>투자자:</strong> 2,000명 (평균 투자액 ₩2,500만 원)</p>
              <p><strong>수익:</strong> 연 임대료 5% (매월 자동 분배)</p>
              <p className="text-lg font-semibold mt-4">
                📊 결과: 소액 투자자도 프리미엄 부동산 투자 가능
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">💰 Case 2: 미국 국채 STO</h4>
              <p><strong>자산:</strong> 미국 10년 국채 (안정적 수익)</p>
              <p><strong>토큰 발행:</strong> 100,000개 (1토큰 = $1,000)</p>
              <p><strong>이자:</strong> 연 4% (반기별 자동 지급)</p>
              <p><strong>만기:</strong> 10년 후 원금 상환</p>
              <p className="text-lg font-semibold mt-4">
                📊 결과: 해외 투자자도 미국 국채에 쉽게 투자
              </p>
            </div>

            <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">🎨 Case 3: 피카소 그림 STO</h4>
              <p><strong>자산:</strong> 피카소 \"Blue Period\" (₩100억)</p>
              <p><strong>토큰 발행:</strong> 10,000개 (1토큰 = ₩100만 원)</p>
              <p><strong>투자자:</strong> 500명</p>
              <p><strong>수익:</strong> 미술품 가치 상승 (3년 후 ₩150억 평가)</p>
              <p className="text-lg font-semibold mt-4">
                📊 결과: 일반인도 명품 미술품 투자로 50% 수익
              </p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">가격 (Coming Soon)</h2>

          <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
            <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
              🚀 Coming Soon
            </div>
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI ST 지갑</h3>
            <div className="text-4xl font-bold text-purple-600 mb-4">무료<span className="text-lg text-gray-600 dark:text-gray-400"> (베타 기간)</span></div>
            <ul className="mb-6">
              <li>✅ 증권형 토큰(STO) 보관</li>
              <li>✅ AI 포트폴리오 관리</li>
              <li>✅ 자동 배당 수령</li>
              <li>✅ 리스크 모니터링</li>
              <li>✅ 자동 수익 재투자</li>
            </ul>
            <Link
              href="/ai-st-wallet"
              className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              출시 알림 신청
            </Link>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
            <h3 className="text-2xl font-bold mb-4">실물 자산 토큰화의 미래</h3>
            <p className="mb-6">
              STO는 부동산, 채권, 주식을 누구나 소액으로 투자 가능하게 만듭니다.
              AI ST 지갑으로 스마트한 투자를 시작하세요.
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
            <Link href="/blog/ai-portfolio-management-rwa" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">AI로 실물자산(RWA) 포트폴리오 관리</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">자동 리밸런싱과 수익 극대화</p>
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
