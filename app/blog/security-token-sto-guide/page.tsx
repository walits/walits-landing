'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

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
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="Walits Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold text-gray-900 dark:text-white">Walits</span>
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

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">미국 vs 한국 규제 비교</h3>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">구분</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">미국 🇺🇸</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">한국 🇰🇷</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">규제 기관</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">SEC (증권거래위원회)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">금융위원회 (FSC)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">규제 프레임워크</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        <strong>Regulation D</strong>: 적격 투자자 대상 사모<br/>
                        <strong>Regulation A+</strong>: 일반 투자자 대상 (최대 $75M)<br/>
                        <strong>Regulation S</strong>: 해외 투자자 대상
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        <strong>자본시장법</strong>: 증권으로 분류<br/>
                        <strong>특정금융정보법</strong>: 자금세탁 방지<br/>
                        금융위원회 인가 필요
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">적격 투자자 기준</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • 순자산 $1M 이상 (주택 제외)<br/>
                        • 또는 연소득 $200K 이상 (개인)<br/>
                        • 또는 연소득 $300K 이상 (부부 합산)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • 순자산 5억 원 이상<br/>
                        • 또는 연소득 1억 원 이상<br/>
                        • 또는 금융자산 5억 원 이상
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">거래소</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        ATS (Alternative Trading System)<br/>
                        예: tZERO, Securitize Markets
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        금융위원회 인가 거래소<br/>
                        (현재 시범 사업 단계)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">발행 절차</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • SEC에 Form D 제출 (Reg D)<br/>
                        • Offering Circular 작성 (Reg A+)<br/>
                        • Blue Sky Laws 준수 (주별 규제)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • 금융위원회 신고/승인<br/>
                        • 증권신고서 제출<br/>
                        • 투자설명서 작성
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">세금</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • 양도소득세: 단기(37%), 장기(20%)<br/>
                        • 배당세: 15-20%<br/>
                        • 주별 세금 추가 가능
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • 양도소득세: 22% (지방세 포함)<br/>
                        • 배당소득세: 14-42% (누진세)<br/>
                        • 금융투자소득세 적용 예정
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">시장 성숙도</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        ⭐⭐⭐⭐⭐ 매우 성숙<br/>
                        BlackRock BUIDL 등 대형 사례 다수
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        ⭐⭐⭐ 성장 중<br/>
                        시범 사업 진행 중
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">미국 규제 현황 (2026년)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border-l-4 border-blue-500">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">SEC (미국 증권거래위원회)</h4>
                <ul className="space-y-2">
                  <li><strong>Regulation D (Rule 506c)</strong>: 가장 많이 사용되는 방식으로, 적격 투자자에게만 판매 가능하며 금액 제한이 없습니다. 대부분의 STO가 이 규제를 따릅니다.</li>
                  <li><strong>Regulation A+ (Tier 2)</strong>: 일반 투자자도 참여 가능하지만, 연간 최대 $75M까지만 모금할 수 있습니다. SEC 승인이 필요하며 절차가 복잡합니다.</li>
                  <li><strong>Regulation S</strong>: 미국 외 해외 투자자 대상으로 발행 가능하며, SEC 등록이 면제됩니다. 글로벌 투자자 유치에 유리합니다.</li>
                  <li><strong>Howey Test</strong>: SEC는 토큰이 증권인지 판단할 때 Howey Test를 사용합니다. (1) 금전 투자, (2) 공동 사업, (3) 수익 기대, (4) 타인 노력에 의존 - 4가지 조건을 모두 충족하면 증권으로 분류됩니다.</li>
                  <li><strong>ATS (Alternative Trading System)</strong>: SEC 인가를 받은 대체 거래 시스템에서 STO를 거래할 수 있습니다. tZERO, Securitize Markets 등이 대표적입니다.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">한국 규제 현황 (2026년)</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">금융위원회 (FSC)</h4>
                <ul className="space-y-2">
                  <li><strong>자본시장법</strong>: STO는 증권으로 분류되어 금융위원회의 규제를 받으므로 법적 안정성이 확보됩니다.</li>
                  <li><strong>거래소 상장</strong>: 정부로부터 인가받은 거래소에서만 거래가 가능하여 투자자 보호가 강화됩니다. 현재 시범 사업 진행 중입니다.</li>
                  <li><strong>투자자 보호</strong>: 만약 손실이 발생하더라도 기존 증권법에 따라 법적 보호를 받을 수 있습니다.</li>
                  <li><strong>특정금융정보법</strong>: 자금세탁 방지를 위해 엄격한 KYC/AML 절차가 적용됩니다.</li>
                  <li><strong>블록체인 규제 샌드박스</strong>: 혁신적인 STO 프로젝트는 규제 샌드박스를 통해 시범 운영할 수 있습니다.</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">💡 투자자 입장에서 차이점</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">미국 투자자:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ 더 많은 STO 상품 선택지</li>
                      <li>✓ 성숙한 거래소 인프라 (tZERO, Securitize)</li>
                      <li>✓ 더 높은 적격 투자자 기준 ($1M)</li>
                      <li>✓ Regulation A+로 일반 투자자도 일부 참여 가능</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">한국 투자자:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ 상대적으로 낮은 진입 장벽 (5억 원)</li>
                      <li>✓ 정부 주도의 투자자 보호 강화</li>
                      <li>✓ 아직 초기 단계라 상품 선택지 제한적</li>
                      <li>✓ 규제 샌드박스로 혁신 프로젝트 지원</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BlackRock BUIDL: 세계 최대 STO 사례</h2>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8 border-2 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    BR
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">BlackRock USD Institutional Digital Liquidity Fund</h3>
                    <p className="text-gray-600 dark:text-gray-400">세계 최대 자산운용사의 토큰화 펀드</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-gray-900 dark:text-white">📊 기본 정보</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>발행사:</strong> BlackRock (세계 최대 자산운용사, AUM $10조)</li>
                      <li><strong>출시일:</strong> 2024년 3월</li>
                      <li><strong>블록체인:</strong> Ethereum (이더리움)</li>
                      <li><strong>토큰 심볼:</strong> BUIDL</li>
                      <li><strong>시가총액:</strong> $1.5B+ (2026년 1월 기준)</li>
                      <li><strong>최소 투자금:</strong> $5M (적격 투자자만)</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-gray-900 dark:text-white">💰 수익 구조</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>기초 자산:</strong> 미국 단기 국채, RP, 현금</li>
                      <li><strong>수익률:</strong> 연 4-5% (미국 국채 수익률 연동)</li>
                      <li><strong>배당 주기:</strong> 매일 자동 분배 (on-chain)</li>
                      <li><strong>환매:</strong> T+0 (즉시 환매 가능)</li>
                      <li><strong>수수료:</strong> 연 0.50% 운용 보수</li>
                      <li><strong>최소 보유 기간:</strong> 없음</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">🎯 BUIDL의 혁신적인 특징</h4>

                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">1. 실시간 on-chain 배당 (매일 자동 분배)</h5>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded my-3">
                      <pre className="text-sm">
{`[전통적인 MMF vs BUIDL]

전통적인 Money Market Fund:
 매월 1일: 배당 계산
      ↓ (중개인 처리 2-3일 소요)
 매월 4일: 계좌 입금

BUIDL:
 매일 자정 (UTC): 배당 자동 계산
      ↓ 스마트 컨트랙트 자동 실행
      ↓ (몇 초 내 완료)
 즉시: 지갑에 BUIDL 토큰 추가 입금

✓ 중개인 없음 → 비용 절감
✓ 즉시 복리 효과 → 수익 극대화
✓ 투명한 온체인 기록`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      예: $100M 투자 시 연 5% 수익 → 매일 약 $13,700가 자동으로 지갑에 추가됩니다.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-green-600 dark:text-green-400">2. T+0 즉시 환매 (유동성 혁명)</h5>
                    <p className="mb-3">전통 펀드는 환매 신청 후 2-3일 대기해야 하지만, BUIDL은 즉시 환매가 가능합니다:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• 09:00 환매 신청 → 09:01 USDC로 입금 완료</li>
                      <li>• 24/7 언제든지 환매 가능 (주말/공휴일 포함)</li>
                      <li>• 최소 환매 금액 제한 없음</li>
                      <li>• DeFi 프로토콜 연계 가능 (담보로 활용)</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">3. 기관 투자자용 안전성 + 블록체인 효율성</h5>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="font-semibold text-sm mb-2">전통 금융의 신뢰:</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• BlackRock 운용 (신용등급 AAA)</li>
                          <li>• BNY Mellon 커스터디 (자산 보관)</li>
                          <li>• SEC 규제 준수 (Regulation D)</li>
                          <li>• 감사법인 정기 감사</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-2">블록체인의 효율:</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• 24/7 거래 가능</li>
                          <li>• 중개 수수료 대폭 감소</li>
                          <li>• 실시간 투명한 정산</li>
                          <li>• 프로그래밍 가능 (스마트 컨트랙트)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">4. DeFi와의 연계 가능성</h5>
                    <p className="mb-3">BUIDL 토큰은 온체인에 존재하므로 DeFi 프로토콜과 연계할 수 있습니다:</p>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                      <pre className="text-sm">
{`[BUIDL 활용 사례]

시나리오 1: 담보 대출
 BUIDL $10M 보유
      ↓ Aave/Compound에 예치
      ↓
 담보로 USDC $8M 대출 (80% LTV)
 → 연 5% BUIDL 수익 + $8M 유동성 확보

시나리오 2: 자동 재투자
 매일 BUIDL 배당 수령
      ↓ 스마트 컨트랙트 자동 실행
      ↓
 Uniswap에서 자동으로 추가 자산 매수
 → 완전 자동화된 복리 투자`}
                      </pre>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold mb-3 mt-6 text-gray-900 dark:text-white">📈 시장 영향력</h4>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                  <ul className="space-y-2">
                    <li><strong>출시 1년 만에 $1.5B 돌파</strong>: 역대 가장 빠르게 성장한 토큰화 펀드입니다.</li>
                    <li><strong>기관 투자자 본격 진입</strong>: BlackRock의 브랜드로 전통 금융 기관들이 STO에 관심을 갖기 시작했습니다.</li>
                    <li><strong>경쟁자 등장</strong>: Franklin Templeton (FOBXX), Ondo Finance (OUSG) 등 유사 상품이 속속 출시되고 있습니다.</li>
                    <li><strong>RWA 시장 폭발적 성장</strong>: 2024년 $1B → 2026년 $10B+ 예상 (10배 성장)</li>
                  </ul>
                </div>

                <div className="bg-blue-600 text-white p-6 rounded-lg mt-6">
                  <h4 className="font-bold mb-2">💡 BUIDL이 중요한 이유</h4>
                  <p>
                    BlackRock은 세계 최대 자산운용사로서 $10조의 자산을 운용합니다.
                    이들이 블록체인 기반 STO를 출시했다는 것은 "전통 금융이 블록체인을 인정했다"는 상징적인 사건입니다.
                    BUIDL의 성공은 앞으로 부동산, 채권, 주식 등 모든 실물 자산이 토큰화될 수 있음을 증명했습니다.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">기타 실제 사례</h2>

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

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">USA vs Korea Regulatory Comparison</h3>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Category</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">USA 🇺🇸</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">Korea 🇰🇷</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Regulatory Body</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">SEC (Securities and Exchange Commission)</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">FSC (Financial Services Commission)</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Regulatory Framework</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        <strong>Regulation D</strong>: Private placement for accredited investors<br/>
                        <strong>Regulation A+</strong>: Public offering (up to $75M)<br/>
                        <strong>Regulation S</strong>: Offshore investors
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        <strong>Capital Markets Act</strong>: Classified as securities<br/>
                        <strong>Specific Financial Information Act</strong>: AML<br/>
                        FSC approval required
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Accredited Investor Criteria</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • Net worth $1M+ (excluding home)<br/>
                        • OR income $200K+ (individual)<br/>
                        • OR income $300K+ (joint)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • Net worth ₩500M+<br/>
                        • OR annual income ₩100M+<br/>
                        • OR financial assets ₩500M+
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Trading Platforms</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        ATS (Alternative Trading System)<br/>
                        e.g., tZERO, Securitize Markets
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        FSC-licensed exchanges<br/>
                        (Currently in pilot phase)
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Issuance Process</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • File Form D with SEC (Reg D)<br/>
                        • Prepare Offering Circular (Reg A+)<br/>
                        • Comply with Blue Sky Laws (state)
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • FSC filing/approval<br/>
                        • Securities registration statement<br/>
                        • Prospectus preparation
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Taxation</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • Capital gains: Short-term (37%), Long-term (20%)<br/>
                        • Dividends: 15-20%<br/>
                        • State taxes may apply
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        • Capital gains: 22% (incl. local tax)<br/>
                        • Dividends: 14-42% (progressive)<br/>
                        • Financial Investment Income Tax pending
                      </td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-semibold">Market Maturity</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        ⭐⭐⭐⭐⭐ Highly mature<br/>
                        Major cases like BlackRock BUIDL
                      </td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">
                        ⭐⭐⭐ Growing<br/>
                        Pilot projects in progress
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">US Regulations (2026)</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border-l-4 border-blue-500">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">SEC (Securities and Exchange Commission)</h4>
                <ul className="space-y-2">
                  <li><strong>Regulation D (Rule 506c)</strong>: Most commonly used method, allowing sales only to accredited investors with no cap. Most STOs follow this regulation.</li>
                  <li><strong>Regulation A+ (Tier 2)</strong>: Allows retail investor participation, but limited to raising $75M annually. Requires SEC approval with complex procedures.</li>
                  <li><strong>Regulation S</strong>: For offshore investors outside the US, exempt from SEC registration. Advantageous for attracting global investors.</li>
                  <li><strong>Howey Test</strong>: SEC uses the Howey Test to determine if a token is a security: (1) investment of money, (2) common enterprise, (3) expectation of profits, (4) from efforts of others - meeting all 4 conditions classifies it as a security.</li>
                  <li><strong>ATS (Alternative Trading System)</strong>: SEC-approved alternative trading systems can trade STOs, such as tZERO and Securitize Markets.</li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Korean Regulations (2026)</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">FSC (Financial Services Commission)</h4>
                <ul className="space-y-2">
                  <li><strong>Capital Markets Act</strong>: STOs are classified as securities under Financial Services Commission regulation, ensuring legal stability.</li>
                  <li><strong>Exchange Listing</strong>: Trading only possible on government-licensed exchanges, strengthening investor protection. Currently in pilot phase.</li>
                  <li><strong>Investor Protection</strong>: Even in case of losses, investors receive legal protection under existing securities law.</li>
                  <li><strong>Specific Financial Information Act</strong>: Strict KYC/AML procedures applied to prevent money laundering.</li>
                  <li><strong>Blockchain Regulatory Sandbox</strong>: Innovative STO projects can pilot through regulatory sandboxes.</li>
                </ul>
              </div>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">💡 Key Differences for Investors</h4>
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">US Investors:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ More STO product choices</li>
                      <li>✓ Mature exchange infrastructure (tZERO, Securitize)</li>
                      <li>✓ Higher accredited investor threshold ($1M)</li>
                      <li>✓ Regulation A+ allows some retail participation</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white">Korean Investors:</p>
                    <ul className="ml-4 space-y-1">
                      <li>✓ Relatively lower entry barrier (₩500M)</li>
                      <li>✓ Government-led investor protection enhancement</li>
                      <li>✓ Limited product choices as still early stage</li>
                      <li>✓ Regulatory sandbox supporting innovative projects</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BlackRock BUIDL: World's Largest STO Case</h2>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8 border-2 border-blue-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-black rounded-lg flex items-center justify-center text-white font-bold text-xl">
                    BR
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">BlackRock USD Institutional Digital Liquidity Fund</h3>
                    <p className="text-gray-600 dark:text-gray-400">Tokenized fund by the world's largest asset manager</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-gray-900 dark:text-white">📊 Basic Information</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Issuer:</strong> BlackRock (World's largest asset manager, $10T AUM)</li>
                      <li><strong>Launch Date:</strong> March 2024</li>
                      <li><strong>Blockchain:</strong> Ethereum</li>
                      <li><strong>Token Symbol:</strong> BUIDL</li>
                      <li><strong>Market Cap:</strong> $1.5B+ (as of Jan 2026)</li>
                      <li><strong>Minimum Investment:</strong> $5M (accredited investors only)</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-3 text-gray-900 dark:text-white">💰 Returns Structure</h4>
                    <ul className="space-y-2 text-sm">
                      <li><strong>Underlying Assets:</strong> US short-term treasuries, repos, cash</li>
                      <li><strong>Yield:</strong> 4-5% annually (linked to US Treasury yields)</li>
                      <li><strong>Distribution:</strong> Daily automatic distribution (on-chain)</li>
                      <li><strong>Redemption:</strong> T+0 (instant redemption)</li>
                      <li><strong>Fees:</strong> 0.50% annual management fee</li>
                      <li><strong>Minimum Hold:</strong> None</li>
                    </ul>
                  </div>
                </div>

                <h4 className="font-bold mb-3 text-gray-900 dark:text-white">🎯 BUIDL's Innovative Features</h4>

                <div className="space-y-4">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-blue-600 dark:text-blue-400">1. Real-time On-Chain Dividends (Daily Auto-Distribution)</h5>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded my-3">
                      <pre className="text-sm">
{`[Traditional MMF vs BUIDL]

Traditional Money Market Fund:
 1st of month: Calculate dividends
      ↓ (2-3 days for intermediary processing)
 4th of month: Deposit to account

BUIDL:
 Daily at midnight (UTC): Auto-calculate dividends
      ↓ Smart contract auto-executes
      ↓ (Completes in seconds)
 Immediate: Additional BUIDL tokens to wallet

✓ No intermediaries → Cost savings
✓ Instant compound effect → Maximize returns
✓ Transparent on-chain records`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Example: $100M investment at 5% annual yield → ~$13,700 automatically added to wallet daily.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-green-600 dark:text-green-400">2. T+0 Instant Redemption (Liquidity Revolution)</h5>
                    <p className="mb-3">Traditional funds require 2-3 days wait after redemption request, but BUIDL enables instant redemption:</p>
                    <ul className="space-y-1 text-sm ml-4">
                      <li>• 09:00 Redemption request → 09:01 USDC deposited</li>
                      <li>• 24/7 redemption available (weekends/holidays included)</li>
                      <li>• No minimum redemption amount</li>
                      <li>• Can integrate with DeFi protocols (use as collateral)</li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-purple-600 dark:text-purple-400">3. Institutional Safety + Blockchain Efficiency</h5>
                    <div className="grid md:grid-cols-2 gap-4 mt-3">
                      <div>
                        <p className="font-semibold text-sm mb-2">Traditional Finance Trust:</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• BlackRock management (AAA rating)</li>
                          <li>• BNY Mellon custody (asset safekeeping)</li>
                          <li>• SEC compliance (Regulation D)</li>
                          <li>• Regular auditor audits</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-sm mb-2">Blockchain Efficiency:</p>
                        <ul className="text-sm space-y-1 ml-4">
                          <li>• 24/7 trading available</li>
                          <li>• Significantly reduced intermediary fees</li>
                          <li>• Real-time transparent settlement</li>
                          <li>• Programmable (smart contracts)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                    <h5 className="font-semibold mb-2 text-orange-600 dark:text-orange-400">4. DeFi Integration Potential</h5>
                    <p className="mb-3">BUIDL tokens exist on-chain, enabling integration with DeFi protocols:</p>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                      <pre className="text-sm">
{`[BUIDL Use Cases]

Scenario 1: Collateral Lending
 Hold BUIDL $10M
      ↓ Deposit to Aave/Compound
      ↓
 Borrow USDC $8M as collateral (80% LTV)
 → 5% BUIDL yield + $8M liquidity secured

Scenario 2: Auto-Reinvestment
 Receive daily BUIDL dividends
      ↓ Smart contract auto-executes
      ↓
 Auto-purchase additional assets on Uniswap
 → Fully automated compound investment`}
                      </pre>
                    </div>
                  </div>
                </div>

                <h4 className="font-bold mb-3 mt-6 text-gray-900 dark:text-white">📈 Market Impact</h4>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                  <ul className="space-y-2">
                    <li><strong>$1.5B in 1 year</strong>: Fastest-growing tokenized fund in history.</li>
                    <li><strong>Institutional Entry</strong>: BlackRock's brand has attracted traditional financial institutions to STO.</li>
                    <li><strong>Competition Emerging</strong>: Similar products like Franklin Templeton (FOBXX), Ondo Finance (OUSG) launching.</li>
                    <li><strong>RWA Market Explosion</strong>: 2024 $1B → 2026 $10B+ expected (10x growth)</li>
                  </ul>
                </div>

                <div className="bg-blue-600 text-white p-6 rounded-lg mt-6">
                  <h4 className="font-bold mb-2">💡 Why BUIDL Matters</h4>
                  <p>
                    BlackRock is the world's largest asset manager with $10 trillion AUM.
                    Their launch of a blockchain-based STO is a symbolic event showing "traditional finance accepting blockchain."
                    BUIDL's success proves that all real-world assets - real estate, bonds, stocks - can be tokenized.
                  </p>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Other Real Case Studies</h2>

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
