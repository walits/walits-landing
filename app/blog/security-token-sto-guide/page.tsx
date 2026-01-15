'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function SecurityTokenSTOGuidePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      breadcrumb: '블로그',
      category: 'STO & 증권형 토큰',
      title: 'STO(증권형 토큰) 완벽 가이드',
      date: '2026년 1월 11일',
      readTime: '10분 읽기',
      backToBlog: '← 블로그로 돌아가기',
      relatedPosts: '관련 글',
    },
    en: {
      breadcrumb: 'Blog',
      category: 'STO & Security Tokens',
      title: 'Complete Guide to STO (Security Token Offering)',
      date: 'January 11, 2026',
      readTime: '10 min read',
      backToBlog: '← Back to Blog',
      relatedPosts: 'Related Posts',
    },
  }[language];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <header className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link href="/blog/" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              {copy.backToBlog}
            </Link>
            <div className="flex items-center gap-2">
              <button onClick={() => setLanguage('ko')} className={`px-3 py-1 rounded ${language === 'ko' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>한</button>
              <button onClick={() => setLanguage('en')} className={`px-3 py-1 rounded ${language === 'en' ? 'bg-gray-900 text-white' : 'bg-gray-200 text-gray-600'}`}>EN</button>
            </div>
          </div>
        </div>
      </header>

      <article className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-12">
          <span className="inline-block px-4 py-2 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded text-sm font-medium mb-4">
            {copy.category}
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white leading-tight">
            {copy.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-500 dark:text-gray-400 text-sm">
            <span>{copy.date}</span>
            <span>•</span>
            <span>{copy.readTime}</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/sto-guide.jpg"
            alt={language === 'ko' ? 'STO 증권형 토큰 가이드' : 'STO Security Token Guide'}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
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
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">STO 도입 전</h4>
                <ul className="space-y-1">
                  <li>강남 빌딩에 투자하려면 최소 100억 원 전액이 필요합니다.</li>
                  <li>일반인은 이런 고가 자산에 투자할 기회 자체가 없습니다.</li>
                  <li>결국 매우 부유한 투자자만 접근할 수 있습니다.</li>
                </ul>
                <h4 className="font-bold mb-4 mt-6 text-gray-900 dark:text-white">STO 도입 후</h4>
                <ul className="space-y-1">
                  <li>강남 빌딩에 1억 원부터 투자할 수 있어 진입 장벽이 크게 낮아집니다.</li>
                  <li>일반인도 프리미엄 부동산에 투자할 수 있는 기회가 열립니다.</li>
                  <li>여러 자산에 분산 투자하여 포트폴리오를 다각화할 수 있습니다.</li>
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
              <ul className="space-y-2">
                <li><strong>가격 하락 알림</strong>: 보유하고 있는 토큰 가격이 10% 이상 하락하면 즉시 알림을 받아 적절한 조치를 취할 수 있습니다.</li>
                <li><strong>신용등급 변동</strong>: 채권 발행사의 신용등급이 하락하면 자동으로 경고가 발송되어 리스크를 미리 파악할 수 있습니다.</li>
                <li><strong>시장 위험 감지</strong>: 부동산 시장이 과열 조짐을 보이면 AI가 매도를 추천하여 손실을 최소화할 수 있습니다.</li>
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
                <ul className="space-y-2">
                  <li><strong>자본시장법</strong>: STO는 증권으로 분류되어 금융위원회의 규제를 받으므로 법적 안정성이 확보됩니다.</li>
                  <li><strong>거래소 상장</strong>: 정부로부터 인가받은 거래소에서만 거래가 가능하여 투자자 보호가 강화됩니다.</li>
                  <li><strong>투자자 보호</strong>: 만약 손실이 발생하더라도 기존 증권법에 따라 법적 보호를 받을 수 있습니다.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 사례</h2>

              <div className="space-y-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">사례 1: 싱가포르 상업용 빌딩 STO</h4>
                  <p><strong>자산:</strong> 싱가포르 오차드 로드 오피스 빌딩 (₩500억)</p>
                  <p><strong>토큰 발행:</strong> 50,000개 (1토큰 = ₩100만 원)</p>
                  <p><strong>투자자:</strong> 2,000명 (평균 투자액 ₩2,500만 원)</p>
                  <p><strong>수익:</strong> 연 임대료 5% (매월 자동 분배)</p>
                  <p className="text-lg font-semibold mt-4">
                    최종 결과: 소액 투자자들도 프리미엄 상업용 부동산에 투자할 수 있는 기회가 열렸습니다.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">사례 2: 미국 국채 STO</h4>
                  <p><strong>자산:</strong> 미국 10년 국채 (안정적 수익)</p>
                  <p><strong>토큰 발행:</strong> 100,000개 (1토큰 = $1,000)</p>
                  <p><strong>이자:</strong> 연 4% (반기별 자동 지급)</p>
                  <p><strong>만기:</strong> 10년 후 원금 상환</p>
                  <p className="text-lg font-semibold mt-4">
                    최종 결과: 전 세계 해외 투자자들도 미국 국채에 쉽고 빠르게 투자할 수 있게 되었습니다.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">사례 3: 피카소 그림 STO</h4>
                  <p><strong>자산:</strong> 피카소 "Blue Period" (₩100억)</p>
                  <p><strong>토큰 발행:</strong> 10,000개 (1토큰 = ₩100만 원)</p>
                  <p><strong>투자자:</strong> 500명</p>
                  <p><strong>수익:</strong> 미술품 가치 상승 (3년 후 ₩150억 평가)</p>
                  <p className="text-lg font-semibold mt-4">
                    최종 결과: 일반 투자자들도 명품 미술품에 투자하여 50%의 수익을 올릴 수 있었습니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">가격 (Coming Soon)</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  곧 출시 예정
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI ST 지갑</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">무료<span className="text-lg text-gray-600 dark:text-gray-400"> (베타 기간)</span></div>
                <ul className="mb-6">
                  <li>증권형 토큰(STO)을 안전하게 보관하고 관리할 수 있습니다.</li>
                  <li>AI가 자동으로 포트폴리오를 분석하고 최적화된 투자 전략을 제안합니다.</li>
                  <li>배당금이나 임대료 등의 수익을 자동으로 지갑에 수령할 수 있습니다.</li>
                  <li>실시간으로 리스크를 모니터링하여 위험 요소를 조기에 파악합니다.</li>
                  <li>받은 수익을 자동으로 재투자하여 복리 효과를 극대화합니다.</li>
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
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                What if you could invest in a $100 million Gangnam building in $1 million increments?
                STO (Security Token Offering) transforms real-world assets into blockchain tokens, making them tradable.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">What is STO?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Definition</h3>
              <p>
                <strong>STO (Security Token Offering)</strong>: The issuance of security tokens.
                Security tokens represent ownership of real-world assets (real estate, bonds, stocks, etc.) as blockchain tokens.
              </p>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Example: Gangnam Building Tokenization</h4>
                <pre className="text-sm">
{`Real Asset: Gangnam Building (Market Value $100M)
     ↓ Tokenization (STO)
     ↓
Security Token: 100 GANGNAM-BLDG tokens issued
 (1 token = $1M = 1% ownership)

Investor A: Buys 10 tokens ($10M) → Owns 10% of building
Investor B: Buys 5 tokens ($5M) → Owns 5% of building
Investor C: Buys 1 token ($1M) → Owns 1% of building

✓ Fractional investment possible (Before: $100M minimum, After: From $1M)
✓ 24/7 trading available (Before: Intermediary needed, After: Instant)
✓ Automatic dividend distribution (Smart Contract)`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">ICO vs STO</h3>
              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Category</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">ICO</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">STO</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Token Type</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Utility Token</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Security Token</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Regulation</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Minimal (Risky)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Securities Law Applied</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Rights</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Service Access</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Dividends/Voting Rights</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Real Asset</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">None</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Yes (Real Estate/Bonds)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Investor Protection</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Weak</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Strong (Legal Protection)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Advantages of STO</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Fractional Ownership</h3>
              <p>
                Invest in high-value assets with small amounts:
              </p>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Before STO</h4>
                <ul className="space-y-1">
                  <li>Investing in a Gangnam building requires the full $100M upfront.</li>
                  <li>Regular people have no opportunity to invest in such high-value assets.</li>
                  <li>Only very wealthy investors can access these opportunities.</li>
                </ul>
                <h4 className="font-bold mb-4 mt-6 text-gray-900 dark:text-white">After STO</h4>
                <ul className="space-y-1">
                  <li>You can invest in a Gangnam building starting from $1M, significantly lowering the entry barrier.</li>
                  <li>Regular investors now have opportunities to invest in premium real estate.</li>
                  <li>You can diversify your portfolio by investing across multiple assets.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Liquidity</h3>
              <p>
                While traditional real estate/bonds are difficult to sell, STOs can be traded instantly:
              </p>
              <ul>
                <li><strong>Traditional Real Estate</strong>: Average 6 months to sell</li>
                <li><strong>STO Real Estate Token</strong>: Instantly tradable on exchanges</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Automatic Dividends (Smart Contract)</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
                <pre className="text-sm">
{`[Smart Contract - Automatic Dividends]

Monthly 1st: Building rental income $1M
     ↓ Smart contract auto-executes
     ↓
Automatic distribution to token holders by percentage:
 Investor A (10% stake): $100K deposited
 Investor B (5% stake): $50K deposited
 Investor C (1% stake): $10K deposited

✓ Automatic distribution without intermediaries
✓ Transparent revenue records
✓ Embezzlement impossible`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Global Access</h3>
              <ul>
                <li>Koreans can invest in US real estate</li>
                <li>Americans can invest in Korean bonds</li>
                <li>24/7 trading from anywhere in the world</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Tokenizable Assets (RWA)</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Real Estate</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <ul>
                  <li><strong>Commercial Buildings</strong>: Offices, Shopping Malls</li>
                  <li><strong>Residential Property</strong>: Apartments, Villas</li>
                  <li><strong>Land</strong>: Development sites</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Example: Gangnam Station Office Building $500M → Issue 5,000 tokens (1 token = $100K)
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Bonds</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <ul>
                  <li><strong>Corporate Bonds</strong>: Bonds issued by companies</li>
                  <li><strong>Government Bonds</strong>: Bonds issued by governments</li>
                  <li><strong>Project Bonds</strong>: Project-specific financing</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Example: Company A Corporate Bond $100M (5% annual interest) → Issue 10,000 tokens
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Equity</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <ul>
                  <li><strong>Startup Equity</strong>: Private company shares</li>
                  <li><strong>Public Company Stocks</strong>: Tokenized version of traditional stocks</li>
                </ul>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  Example: Startup B 10% equity → Issue 1,000 tokens (1 token = 0.01% equity)
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Art & Collectibles</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <ul>
                  <li><strong>Art</strong>: Picasso painting $10M → 100 tokens</li>
                  <li><strong>Wine</strong>: Rare wine collection → Fractional investment</li>
                  <li><strong>Watches</strong>: Limited edition Rolex → Shared ownership</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">AI ST Wallet Features</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. AI Portfolio Management</h3>
              <p>
                AI automatically builds optimal STO portfolios:
              </p>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">AI Recommended Portfolio ($1M Investment)</h4>
                <pre className="text-sm">
{`[Conservative Investor Profile]

AI Recommended Asset Allocation:
 40% ($400K): Government Bond STO (3% annual stable)
 30% ($300K): Gangnam Building STO (5% rental income)
 20% ($200K): Corporate Bond STO (6% medium risk)
 10% ($100K): Startup Equity STO (high risk/high return)

Expected Return: 4.5% annual
Risk Level: Low-Medium

✓ AI automatically rebalances based on market conditions
✓ Automatic alerts when high-risk asset proportion increases`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Automatic Reinvestment</h3>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
                <pre className="text-sm">
{`[Monthly Dividend Automatic Reinvestment]

January: Received $5K building rental dividend
     ↓ AI auto-executes
     ↓
AI: "Investment options with $5K:"
 1. Buy more of same building (compound effect)
 2. Diversify into other real estate STOs
 3. Hold cash (wait)

→ AI selects: Buy 0.5 additional tokens of same building
→ Accelerate returns through compound effect`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Risk Monitoring</h3>
              <ul className="space-y-2">
                <li><strong>Price Drop Alerts</strong>: Get instant notifications when token prices drop more than 10% to take appropriate action.</li>
                <li><strong>Credit Rating Changes</strong>: Automatic warnings when bond issuer credit ratings decline to identify risks early.</li>
                <li><strong>Market Risk Detection</strong>: AI recommends selling when real estate markets show overheating signs to minimize losses.</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Regulation & Compliance</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">KYC/AML Required</h3>
              <p>
                STOs are securities, so investor identity verification is mandatory:
              </p>
              <ul>
                <li><strong>KYC (Know Your Customer)</strong>: ID, address verification</li>
                <li><strong>AML (Anti-Money Laundering)</strong>: Source of funds verification</li>
                <li><strong>Accredited Investors</strong>: Some STOs only for investors meeting income/asset requirements</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Korean Regulations (2026)</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <ul className="space-y-2">
                  <li><strong>Capital Markets Act</strong>: STOs are classified as securities under Financial Services Commission regulation, ensuring legal stability.</li>
                  <li><strong>Exchange Listing</strong>: Trading only possible on government-licensed exchanges, strengthening investor protection.</li>
                  <li><strong>Investor Protection</strong>: Even in case of losses, investors receive legal protection under existing securities law.</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Real Case Studies</h2>

              <div className="space-y-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Case 1: Singapore Commercial Building STO</h4>
                  <p><strong>Asset:</strong> Singapore Orchard Road Office Building ($500M)</p>
                  <p><strong>Token Issuance:</strong> 50,000 tokens (1 token = $10K)</p>
                  <p><strong>Investors:</strong> 2,000 people (average investment $250K)</p>
                  <p><strong>Returns:</strong> 5% annual rental income (monthly auto-distribution)</p>
                  <p className="text-lg font-semibold mt-4">
                    Result: Small investors gained access to premium commercial real estate investment opportunities.
                  </p>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Case 2: US Treasury Bond STO</h4>
                  <p><strong>Asset:</strong> US 10-year Treasury Bond (stable returns)</p>
                  <p><strong>Token Issuance:</strong> 100,000 tokens (1 token = $1,000)</p>
                  <p><strong>Interest:</strong> 4% annual (semi-annual automatic payment)</p>
                  <p><strong>Maturity:</strong> Principal repayment after 10 years</p>
                  <p className="text-lg font-semibold mt-4">
                    Result: International investors worldwide gained easy and fast access to US Treasury bonds.
                  </p>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg">
                  <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Case 3: Picasso Painting STO</h4>
                  <p><strong>Asset:</strong> Picasso "Blue Period" ($100M)</p>
                  <p><strong>Token Issuance:</strong> 10,000 tokens (1 token = $10K)</p>
                  <p><strong>Investors:</strong> 500 people</p>
                  <p><strong>Returns:</strong> Art appreciation (valued at $150M after 3 years)</p>
                  <p className="text-lg font-semibold mt-4">
                    Result: Regular investors could invest in premium art and achieved 50% returns.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Pricing (Coming Soon)</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI ST Wallet</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">Free<span className="text-lg text-gray-600 dark:text-gray-400"> (Beta Period)</span></div>
                <ul className="mb-6">
                  <li>Securely store and manage security tokens (STOs).</li>
                  <li>AI automatically analyzes portfolios and suggests optimized investment strategies.</li>
                  <li>Automatically receive dividends and rental income in your wallet.</li>
                  <li>Real-time risk monitoring to identify threats early.</li>
                  <li>Automatically reinvest received returns to maximize compound effects.</li>
                </ul>
                <Link
                  href="/ai-st-wallet"
                  className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Get Launch Notification
                </Link>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">The Future of Real-World Asset Tokenization</h3>
                <p className="mb-6">
                  STO makes real estate, bonds, and stocks accessible to everyone through fractional investment.
                  Start smart investing with AI ST Wallet.
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Apply for Beta
                </Link>
              </div>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{copy.relatedPosts}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/ai-portfolio-management-rwa" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? 'AI로 실물자산(RWA) 포트폴리오 관리' : 'AI Real-World Asset (RWA) Portfolio Management'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '자동 리밸런싱과 수익 극대화' : 'Automatic Rebalancing & Return Maximization'}
              </p>
            </Link>
            <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? '기업용 지갑 선택 가이드' : 'Enterprise Wallet Selection Guide'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '8분 완벽 정리' : 'Complete Guide in 8 Minutes'}
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
