'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function SecurityTokenSTOGuidePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      breadcrumb: '블로그',
      category: 'STO & RWA',
      title: 'STO(증권형 토큰)과 RWA 완벽 가이드',
      date: '2026년 2월 13일',
      readTime: '15분 읽기',
      backToBlog: '← 블로그로 돌아가기',
      relatedPosts: '관련 글',
    },
    en: {
      breadcrumb: 'Blog',
      category: 'STO & RWA',
      title: 'Complete Guide to STO and RWA (Real World Assets)',
      date: 'February 13, 2026',
      readTime: '15 min read',
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

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. 예술품 & 수집품 (Art & Collectibles)</h3>

              <div className="space-y-6 my-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">🎨 미술품 (Fine Art)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2 text-sm">사례: 피카소 "여인의 얼굴" 조각투자</p>
                      <pre className="text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`작품 가치: 50억 원
     ↓
5,000개 토큰 발행 (1토큰 = 100만 원)
     ↓
투자자 1,000명 참여 (평균 5토큰씩)
     ↓
3년 후 작품 가치 70억 원 상승
     ↓
투자자 수익률: 40% (연 11.8%)`}
                      </pre>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2 text-sm">한국 사례: 박수근 작품</p>
                      <pre className="text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`박수근 "빨래터" (감정가 10억 원)
     ↓
아트투게더 플랫폼에서 토큰화
     ↓
1,000개 토큰 발행 (1토큰 = 100만 원)
     ↓
소액 투자자도 명화 소유 가능
     ↓
미술관 전시 대여료 배당 수익
     ↓
작품 가치 상승 시 매각 후 차익 분배`}
                      </pre>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-purple-100 dark:bg-purple-900/30 rounded text-xs">
                    <strong>💡 장점:</strong> 고가 미술품은 부자들만 투자 가능했으나, 토큰화로 일반인도 100만원부터 명화 소유 가능
                  </div>
                </div>

                <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-lg border-l-4 border-amber-500">
                  <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">🍷 와인 & 위스키 (Luxury Beverages)</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2">사례: 1945년 로마네 콩티 와인</p>
                    <pre className="text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`희귀 와인 12병 컬렉션 (6억 원)
     ↓
600개 토큰 발행 (1토큰 = 100만 원)
     ↓
전문 보관업체에서 온도·습도 관리
     ↓
와인 가치 연 10% 상승 (희소성)
     ↓
5년 후 매각: 9.6억 원
     ↓
투자자 수익률: 60% (연 9.9%)`}
                    </pre>
                    <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                      <strong>실제 플랫폼:</strong> Cult Wine Investment, Vinovest (해외) / 한국은 아직 초기 단계
                    </p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">⌚ 명품 시계 & 스니커즈 (Luxury Goods)</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2 text-sm">롤렉스 데이토나 한정판</p>
                      <pre className="text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`시계 가치: 2억 원
     ↓
200개 토큰 발행
     ↓
투자자 50명 공동 소유
     ↓
시계 가치 상승 시 매각 차익 분배`}
                      </pre>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2 text-sm">나이키 에어조던 1985 오리지널</p>
                      <pre className="text-xs bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`스니커즈 가치: 5,000만 원
     ↓
500개 토큰 발행
     ↓
스니커즈 컬렉터+투자자 참여
     ↓
희소성으로 연 15-20% 가치 상승`}
                      </pre>
                    </div>
                  </div>
                  <p className="text-xs mt-3 text-gray-600 dark:text-gray-400">
                    <strong>플랫폼:</strong> Rally (명품 시계, 스포츠 카드 조각투자), StockX (스니커즈 거래)
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">5. K-POP 아이돌 & 엔터테인먼트 IP</h3>

              <div className="bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20 p-8 rounded-xl my-8 border-2 border-pink-500">
                <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">🎤 팬덤 경제와 토큰화의 만남</h4>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">사례 1: 아이돌 그룹 음원 저작권 토큰화</h5>
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
{`[가상 시나리오: "NOVA" 그룹 음원 저작권]

그룹 "NOVA" 히트곡 "Starlight" 저작권 가치: 50억 원
     ↓
저작권 50% 토큰화 (25억 원 상당)
     ↓
25,000개 토큰 발행 (1토큰 = 10만 원)
     ↓
팬들이 토큰 구매 → 사실상 "공동 프로듀서"
     ↓
음원 수익 배당 (매월)
  • Spotify, Apple Music 스트리밍 수익
  • YouTube 광고 수익
  • 방송국 사용료
  • 해외 라이선스 수익
     ↓
투자자 혜택:
✅ 월 배당금 수령 (음원 재생 횟수에 비례)
✅ 팬 미팅 우선 초대
✅ 굿즈 할인
✅ 투표권 (다음 앨범 컨셉 투표)
     ↓
예상 수익률: 연 8-12% (히트곡 기준)`}
                    </pre>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">사례 2: 콘서트 수익 배당 토큰</h5>
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
{`[월드투어 콘서트 수익 배당 구조]

"NOVA" 월드투어 예상 수익: 200억 원
     ↓
투어 수익 30% 토큰화 (60억 원)
     ↓
60,000개 토큰 발행 (1토큰 = 10만 원)
     ↓
콘서트 진행하며 실시간 수익 정산
  • 티켓 판매 수익: 150억
  • 굿즈 판매: 30억
  • 스폰서십: 20억
  총 200억 → 투자자 배당분 60억
     ↓
토큰 보유자 혜택:
✅ 콘서트 수익 배당 (투어 종료 후)
✅ 티켓 선예매 권한
✅ VIP 라운지 이용권
✅ 아티스트 사인회 참가권
     ↓
ROI: 투어 성공 시 20-30% 수익`}
                    </pre>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">사례 3: 유튜버 채널 수익 배당</h5>
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
{`[구독자 500만 유튜버 "TechKing" 채널 토큰화]

채널 가치 평가: 30억 원 (월 수익 1억 × 30배)
     ↓
채널 수익 20% 토큰화 (6억 원)
     ↓
6,000개 토큰 발행
     ↓
매월 수익 배당:
  • 광고 수익: 8,000만 원
  • 브랜드 협찬: 2,000만 원
  • 멤버십: 1,000만 원
  월 총 1.1억 → 투자자 배당분 2,200만 원
     ↓
토큰 보유자 혜택:
✅ 월 배당금 수령
✅ 비공개 영상 조기 시청
✅ 구독자 전용 커뮤니티
✅ 영상 주제 투표권
     ↓
연 수익률: 약 44% (초기 투자금 대비)`}
                    </pre>
                  </div>

                  <div className="bg-pink-100 dark:bg-pink-900/30 p-4 rounded mt-4">
                    <p className="font-semibold mb-2 text-pink-800 dark:text-pink-300">🌟 팬덤 경제의 혁신</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• <strong>팬 → 투자자:</strong> 단순 소비자에서 수익 공유 파트너로 전환</li>
                      <li>• <strong>아티스트 자금 조달:</strong> 은행 대출 없이 팬들에게서 투자 유치</li>
                      <li>• <strong>충성도 강화:</strong> 금전적 이해관계로 팬덤 결속력 극대화</li>
                      <li>• <strong>신인 발굴:</strong> 무명 아티스트도 팬 기반 크라우드펀딩 가능</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
                    <p className="font-semibold text-yellow-800 dark:text-yellow-300 mb-2">⚠️ 규제 리스크</p>
                    <p className="text-xs">
                      엔터테인먼트 IP 토큰화는 "증권"으로 분류될 가능성이 높아 금융당국 인가가 필요합니다.
                      한국에서는 온투법 등록 또는 자본시장법 준수가 필요하며, 무등록 발행 시 불법입니다.
                      실제 사례로 <strong>뮤직카우</strong>가 음악 저작권 조각투자를 온투법 등록 후 운영 중입니다.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">6. 예측 시장 (Prediction Markets)</h3>

              <div className="bg-gradient-to-r from-indigo-50 to-blue-50 dark:from-indigo-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8 border-2 border-indigo-500">
                <h4 className="font-bold text-xl mb-4 text-gray-900 dark:text-white">🔮 미래 결과에 베팅하는 탈중앙 시장</h4>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">사례 1: 대통령 선거 예측 시장</h5>
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
{`[2028년 미국 대통령 선거 예측]

Polymarket에서 거래되는 토큰:
  • "민주당 후보 당선" 토큰: 1토큰 = $0.55
  • "공화당 후보 당선" 토큰: 1토큰 = $0.45
     ↓
투자자 A의 전략:
  민주당 토큰 1,000개 매수 ($550)
     ↓
실제 결과: 민주당 후보 당선
     ↓
토큰 가치: $1.00으로 확정
     ↓
투자자 A 수익: $1,000 - $550 = $450 (82% 수익)

※ 틀린 예측의 토큰은 $0으로 소멸`}
                    </pre>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">사례 2: 스포츠 경기 결과 예측</h5>
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
{`[2026 월드컵 우승국 예측]

Augur 플랫폼 토큰 가격 (선수권 시작 전):
  • 브라질 우승: $0.30
  • 프랑스 우승: $0.25
  • 아르헨티나 우승: $0.20
  • 독일 우승: $0.15
  • 기타: $0.10
     ↓
투자자는 여러 나라 토큰을 포트폴리오처럼 구성
     ↓
월드컵 종료 후 실제 우승국 토큰만 $1.00
나머지는 모두 $0`}
                    </pre>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">사례 3: 경제 지표 & 날씨 예측</h5>
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-4 rounded">
{`[연준 금리 인하 시기 예측]

"2026년 3월 금리 인하" 토큰: $0.40
"2026년 6월 금리 인하" 토큰: $0.35
"2026년 9월 금리 인하" 토큰: $0.15
"2026년 금리 인하 없음" 토큰: $0.10
     ↓
실제 결과에 따라 정확한 예측 토큰만 $1.00으로 정산
     ↓
→ 시장 참여자들의 집단 지성으로 미래 예측
→ 전문가보다 정확하다는 연구 결과 다수`}
                    </pre>
                  </div>

                  <div className="bg-indigo-100 dark:bg-indigo-900/30 p-4 rounded">
                    <p className="font-semibold mb-2 text-indigo-800 dark:text-indigo-300">💡 예측 시장의 가치</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• <strong>집단 지성 활용:</strong> 수만 명의 예측을 시장 가격으로 집약</li>
                      <li>• <strong>정보 비대칭 해소:</strong> 내부 정보를 가진 사람이 시장에 반영</li>
                      <li>• <strong>리스크 헤징:</strong> 기업이 선거 결과에 따른 리스크를 헷지 가능</li>
                      <li>• <strong>여론 조사보다 정확:</strong> "돈을 건" 예측이라 더 신뢰도 높음</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                    <p className="font-semibold text-red-800 dark:text-red-300 mb-2">⚠️ 한국에서의 합법성</p>
                    <p className="text-xs">
                      예측 시장은 "도박"과 유사한 구조라 한국에서는 <strong>불법일 가능성이 높습니다.</strong>
                      게임산업법, 사행행위규제법 등에 저촉될 수 있으며, 금융당국 인가 없이 운영 시 처벌 대상입니다.
                      미국·유럽에서는 CFTC 규제를 받으며 합법적으로 운영되는 플랫폼(Polymarket, Kalshi 등)이 있으나,
                      한국 거주자는 참여 전 법률 자문이 필수입니다.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">7. 기타 대체 자산 (Alternative Assets)</h3>

              <div className="space-y-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">🏇 경주마 & 스포츠팀 지분</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`경주마 "썬더볼트" 가치: 20억 원
     ↓
2,000개 토큰 발행
     ↓
경주 상금 배당:
  • 1등 상금: 5억 원 → 투자자에게 배분
  • 2등 상금: 2억 원 → 투자자에게 배분
     ↓
말 은퇴 후 씨수말로 대여 수익도 배당

[축구팀 지분 토큰]
FC Barcelona 팬 토큰 ($BAR):
  • 투표권: 유니폼 디자인, 선수 영입 의견
  • 혜택: 티켓 우선 구매, 굿즈 할인
  • 거래: Binance 등에서 거래 가능`}
                    </pre>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">🎬 영화 제작비 크라우드펀딩</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`영화 "AI 전쟁" 제작비: 100억 원
     ↓
30% 토큰화 (30억 원)
     ↓
30,000개 토큰 발행
     ↓
영화 수익 배분:
  • 박스오피스: 200억
  • OTT 판권: 50억
  • 해외 배급: 30억
  총 280억 → 제작비 회수 후 순이익 180억
     ↓
투자자 배당: 54억 (30% 지분)
     ↓
ROI: 80% (30억 투자 → 54억 회수)`}
                    </pre>
                  </div>
                </div>

                <div className="bg-cyan-50 dark:bg-cyan-900/20 p-6 rounded-lg border-l-4 border-cyan-500">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">⚡ 재생에너지 프로젝트</h4>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <pre className="text-sm bg-gray-50 dark:bg-gray-900 p-3 rounded">
{`태양광 발전소 건설: 50억 원
     ↓
5,000개 토큰 발행
     ↓
발전소 가동:
  • 월 전력 판매 수익: 5,000만 원
  • 연 수익: 6억 원
     ↓
투자자 배당: 연 6억 원 (12% 수익률)
     ↓
20년간 안정적 배당 + 탄소배출권 수익 추가`}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 p-8 rounded-xl my-8">
                <h4 className="font-bold text-2xl mb-4 text-gray-900 dark:text-white">🌐 토큰화 가능한 거의 모든 것</h4>
                <p className="mb-4 text-gray-700 dark:text-gray-300">
                  STO 기술의 핵심은 <strong>"가치를 가진 모든 자산을 디지털 토큰으로 변환"</strong>하는 것입니다.
                  전통적으로 소수만 접근 가능했던 자산을 조각내어 누구나 투자할 수 있게 만듭니다.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-bold mb-2 text-sm">💼 전통 자산</p>
                    <p className="text-xs">부동산, 채권, 주식, 원자재</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-bold mb-2 text-sm">🎨 수집품</p>
                    <p className="text-xs">미술품, 와인, 시계, 스니커즈, 스포츠 카드</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-bold mb-2 text-sm">🎵 IP 자산</p>
                    <p className="text-xs">음원, 유튜브 채널, 영화 저작권, 게임 IP</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-bold mb-2 text-sm">🏆 스포츠</p>
                    <p className="text-xs">경주마, 팀 지분, 선수 계약금</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-bold mb-2 text-sm">🔮 미래 가치</p>
                    <p className="text-xs">예측 시장, 탄소배출권, 데이터</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-bold mb-2 text-sm">⚡ 인프라</p>
                    <p className="text-xs">태양광, 풍력, 통신망, 충전소</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 italic">
                  → <strong>상상할 수 있는 모든 자산이 토큰화 대상</strong>이 될 수 있습니다.
                  다만, 각국 증권 규제와 투자자 보호 법률을 반드시 준수해야 합니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">STO 발행 상세 프로세스 (6개월-1년 소요)</h2>

              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl my-8 border-2 border-blue-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📋 STO 발행 7단계</h3>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">1단계: 법률 자문 및 구조 설계 (1-2개월)</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>목적:</strong> 증권 규제 준수 여부 판단 및 발행 구조 설계</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>Howey Test 분석:</strong> 토큰이 증권인지 판단 (4가지 조건 검토)</li>
                        <li>• <strong>규제 프레임워크 선택:</strong> Reg D, Reg A+, Reg S 중 선택</li>
                        <li>• <strong>법률 문서 작성:</strong> Private Placement Memorandum (PPM), Subscription Agreement</li>
                        <li>• <strong>IP 검토:</strong> 자산의 법적 소유권 및 지적재산권 확인</li>
                      </ul>
                      <div className="mt-3 p-3 bg-blue-50 dark:bg-blue-900/30 rounded text-xs">
                        <strong>💰 비용:</strong> $50K-$200K (법률 자문료)<br/>
                        <strong>⚠️ 주의:</strong> 전문 증권 변호사 필수 (일반 변호사는 부적합)
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">2단계: 자산 평가 및 실사 (Due Diligence) (1개월)</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>목적:</strong> 토큰화할 자산의 정확한 가치 산정</p>
                      <ul className="ml-4 space-y-1">
                        <li>• <strong>부동산:</strong> 감정평가사 (Appraiser)가 시장 가치 평가</li>
                        <li>• <strong>미술품:</strong> 전문 감정사 (Authenticator) + 경매 기록 분석</li>
                        <li>• <strong>기업 지분:</strong> 회계법인 (Big 4)이 재무제표 감사 및 기업 가치 평가</li>
                        <li>• <strong>채권:</strong> 신용평가기관 (Moody's, S&P)이 신용등급 부여</li>
                      </ul>
                      <div className="mt-3 p-3 bg-purple-50 dark:bg-purple-900/30 rounded text-xs">
                        <strong>💰 비용:</strong> $20K-$100K (자산 종류에 따라 상이)<br/>
                        <strong>📊 산출물:</strong> Valuation Report, Asset Audit Report
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">3단계: 토큰 설계 및 경제 모델 (2-4주)</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>목적:</strong> 토큰의 권리·의무·경제 구조 설계</p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded mt-2">
                        <p className="font-semibold mb-2">토큰 설계 예시:</p>
                        <pre className="text-xs">
{`토큰 이름: GANGNAM-BLDG
총 발행량: 10,000 토큰
1토큰 = 빌딩 가치의 0.01%

권리:
  ✓ 임대료 수익 배당 (분기별)
  ✓ 빌딩 매각 시 차익 분배
  ✓ 주요 의사결정 투표권 (1토큰 = 1표)

의무:
  ✓ 관리비·세금 비례 부담
  ✓ Lock-up 기간 준수 (6개월)

양도 제한:
  ✓ KYC 완료 투자자에게만 양도 가능
  ✓ 화이트리스트 등록 필수`}
                        </pre>
                      </div>
                      <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/30 rounded text-xs">
                        <strong>💡 핵심:</strong> Token Economics (토크노믹스) 설계가 투자 매력도 결정
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">4단계: 스마트 컨트랙트 개발 및 감사 (2-3개월)</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>목적:</strong> 증권형 토큰 표준 준수 + 컴플라이언스 자동화</p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded mt-2">
                        <p className="font-semibold mb-2">주요 토큰 표준:</p>
                        <ul className="text-xs space-y-1 ml-4">
                          <li>• <strong>ERC-1400:</strong> 증권형 토큰 표준 (Partitioned Tokens)</li>
                          <li>• <strong>ERC-1404:</strong> Transfer Restrictions (양도 제한 구현)</li>
                          <li>• <strong>ERC-3643 (T-REX):</strong> KYC/AML 온체인 검증 + Identity Registry</li>
                        </ul>
                        <p className="font-semibold mt-3 mb-2">필수 기능 구현:</p>
                        <pre className="text-xs">
{`function transfer(address to, uint256 amount)
  → canTransfer() 검증
    ✓ from 주소 KYC 완료?
    ✓ to 주소 화이트리스트 등록?
    ✓ Lock-up 기간 경과?
    ✓ 양도 제한 규칙 준수?
  → 모두 통과 시 transfer 실행
  → 실패 시 revert

function distributeDividends()
  → 토큰 보유 비율에 따라 자동 배당
  → 세금 원천징수 자동 계산
  → 배당 내역 온체인 기록`}
                        </pre>
                      </div>
                      <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/30 rounded text-xs">
                        <strong>💰 비용:</strong> $50K-$200K (개발) + $20K-$50K (감사)<br/>
                        <strong>🔒 감사:</strong> OpenZeppelin, CertiK, Trail of Bits 등 전문 업체 필수
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">5단계: 규제 기관 신고/승인 (1-2개월)</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>미국 SEC:</strong></p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>Reg D (Rule 506c):</strong> Form D 제출 (15일 이내) → 사전 승인 불필요</li>
                        <li>• <strong>Reg A+ (Tier 2):</strong> Offering Circular 제출 → SEC 승인 대기 (30-60일)</li>
                        <li>• <strong>Blue Sky Laws:</strong> 각 주(State)별 별도 신고</li>
                      </ul>
                      <p className="mt-2"><strong>한국 금융위:</strong></p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>증권신고서</strong> 제출 (자본시장법 제119조)</li>
                        <li>• <strong>투자설명서</strong> 작성 및 교부 의무</li>
                        <li>• 금융위원회 심사 (1-2개월)</li>
                      </ul>
                      <div className="mt-3 p-3 bg-red-50 dark:bg-red-900/30 rounded text-xs">
                        <strong>⚠️ 주의:</strong> 무신고 발행 시 형사처벌 (징역 5년 이하 또는 벌금)
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-cyan-500">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">6단계: 투자자 모집 및 KYC/AML (1-3개월)</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>목적:</strong> 적격 투자자 확보 + 자금세탁 방지</p>
                      <div className="bg-gray-50 dark:bg-gray-900 p-3 rounded mt-2">
                        <p className="font-semibold mb-2">KYC 프로세스:</p>
                        <pre className="text-xs">
{`1. 신원 확인 (Identity Verification)
   → 여권/운전면허증 사진 업로드
   → 셀카 촬영 (Liveness Check)
   → AI 얼굴 인식으로 본인 확인

2. 주소 확인 (Address Verification)
   → 공과금 고지서, 은행 명세서 제출
   → 3개월 이내 발행분만 인정

3. 자금 출처 확인 (Source of Funds)
   → 급여 명세서, 사업 소득 증빙
   → 고액 투자 시 (>$100K) 추가 서류 요구

4. 적격 투자자 검증 (Accredited Investor)
   → 미국: 순자산 $1M 이상 증빙
   → 한국: 금융자산 5억 이상 증빙
   → CPA 확인서 또는 자산 증빙서 제출

5. AML 스크리닝
   → OFAC 제재 명단 대조
   → PEP (Politically Exposed Person) 검증
   → 범죄 경력 조회`}
                        </pre>
                      </div>
                      <div className="mt-3 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded text-xs">
                        <strong>📊 통과율:</strong> 일반적으로 신청자의 60-80%만 KYC 통과<br/>
                        <strong>🕐 소요 시간:</strong> 1-3 영업일 (자동화 시) / 1-2주 (수동 검토 시)
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-pink-500">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">7단계: 토큰 발행 및 상장 (1개월)</h4>
                    <div className="text-sm space-y-2">
                      <p><strong>목적:</strong> 스마트 컨트랙트 배포 + 투자자에게 토큰 분배</p>
                      <ul className="ml-4 space-y-1 text-xs">
                        <li>• <strong>토큰 발행 (Minting):</strong> 스마트 컨트랙트 배포 → 총 발행량 생성</li>
                        <li>• <strong>Whitelist 등록:</strong> KYC 통과 투자자 주소를 화이트리스트에 추가</li>
                        <li>• <strong>토큰 분배 (Distribution):</strong> 투자금 납입 확인 → 토큰 전송</li>
                        <li>• <strong>ATS 상장:</strong> tZERO, Securitize Markets 등에 상장 신청</li>
                        <li>• <strong>유동성 공급:</strong> 초기 유동성 풀 구축 (선택 사항)</li>
                      </ul>
                      <div className="mt-3 p-3 bg-pink-50 dark:bg-pink-900/30 rounded text-xs">
                        <strong>🎉 완료:</strong> 투자자는 토큰 보유 즉시 자산 소유권 획득<br/>
                        <strong>📈 이후:</strong> 배당 분배, 거버넌스 투표 등 자동 실행
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/30 dark:to-orange-900/30 rounded-lg border-2 border-yellow-500">
                  <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">💰 총 발행 비용 및 소요 시간</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">비용 구성:</p>
                      <ul className="text-xs space-y-1">
                        <li>• 법률 자문: $50K-$200K</li>
                        <li>• 자산 평가/감사: $20K-$100K</li>
                        <li>• 스마트 컨트랙트 개발: $50K-$200K</li>
                        <li>• 보안 감사: $20K-$50K</li>
                        <li>• 규제 신고: $10K-$50K</li>
                        <li>• KYC/AML 플랫폼: $10K-$30K</li>
                        <li>• 마케팅: $50K-$200K</li>
                        <li className="font-bold text-red-600 border-t pt-2 mt-2">총 비용: $210K-$830K</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <p className="font-semibold mb-2">소요 시간:</p>
                      <ul className="text-xs space-y-1">
                        <li>• 법률 자문: 1-2개월</li>
                        <li>• 자산 평가: 1개월</li>
                        <li>• 토큰 설계: 2-4주</li>
                        <li>• 개발+감사: 2-3개월</li>
                        <li>• 규제 승인: 1-2개월</li>
                        <li>• 투자자 모집: 1-3개월</li>
                        <li>• 발행+상장: 1개월</li>
                        <li className="font-bold text-blue-600 border-t pt-2 mt-2">총 기간: 6-12개월</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">증권형 토큰 기술 구조 심층 분석</h2>

              <div className="space-y-6 my-8">
                <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border-l-4 border-indigo-600">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">🔧 ERC-1400: 증권형 토큰 표준</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="text-sm mb-3">
                      ERC-1400은 증권의 복잡한 요구사항을 블록체인에서 구현하기 위한 표준입니다.
                      일반 ERC-20 토큰과 달리 <strong>양도 제한, 강제 이체, 파티션 분할</strong> 등 증권 특화 기능을 제공합니다.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold text-sm mb-2">핵심 기능:</p>
                      <pre className="text-xs">
{`// 1. Transfer Restrictions (양도 제한)
function canTransfer(address to, uint256 value, bytes data)
  returns (bool, byte, bytes32)
{
  // 규제 준수 여부 검증
  if (!isWhitelisted(to)) return (false, 0x50, "Recipient not whitelisted");
  if (isLocked(msg.sender)) return (false, 0x51, "Tokens locked");
  if (!isAccredited(to)) return (false, 0x52, "Not accredited investor");
  return (true, 0xA0, "Valid transfer");
}

// 2. Partitioned Tokens (파티션별 관리)
// 토큰을 여러 파티션으로 분할 (Lock-up, 투표권 등)
mapping(bytes32 => mapping(address => uint256)) balancesByPartition;

// 3. Forced Transfer (강제 이체)
// 법원 명령, 규제 요구 시 관리자가 강제 이체 가능
function controllerTransfer(address from, address to, uint256 value)
  onlyController
{
  _transfer(from, to, value);
  emit ControllerTransfer(from, to, value);
}`}
                      </pre>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-8 rounded-xl border-l-4 border-green-600">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">🔐 ERC-3643 (T-REX): Identity & Compliance</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="text-sm mb-3">
                      T-REX (Token for Regulated EXchanges)는 온체인 신원 확인 및 컴플라이언스 자동화를 구현합니다.
                      <strong>Identity Registry</strong>와 <strong>Compliance Module</strong>이 핵심입니다.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold text-sm mb-2">구조:</p>
                      <pre className="text-xs">
{`[Identity Registry]
  ┌─ Investor Address (0x123...)
  │  ├─ Identity Contract (온체인 KYC 데이터)
  │  │  ├─ Country: US
  │  │  ├─ Accredited: true
  │  │  ├─ KYC Expiry: 2027-01-01
  │  │  └─ Claims: [KYC_PASSED, ACCREDITED_INVESTOR]
  │  └─ Compliance Checks
  │     ├─ Country Restriction: ✓ (US allowed)
  │     ├─ Investor Limit: ✓ (Under 2,000 investors)
  │     └─ Token Cap: ✓ (Individual limit not exceeded)

[Compliance Module]
  → 모든 transfer() 실행 전 검증
  → Identity Registry 조회
  → 규제 룰 자동 적용
  → 통과 시에만 토큰 이동 허용`}
                      </pre>
                    </div>
                    <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/30 rounded text-xs">
                      <strong>💡 장점:</strong> KYC 데이터를 온체인에 안전하게 저장하여 중개자 없이 자동 검증<br/>
                      <strong>🔒 프라이버시:</strong> 실제 개인정보는 오프체인 보관, 온체인에는 해시값만 저장
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-8 rounded-xl border-l-4 border-orange-600">
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">💰 자동 배당 분배 메커니즘</h3>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="text-sm mb-3">
                      증권형 토큰의 핵심 기능 중 하나는 <strong>스마트 컨트랙트 기반 자동 배당</strong>입니다.
                      임대료, 이자, 배당금 등을 토큰 보유 비율에 따라 자동으로 분배합니다.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                      <p className="font-semibold text-sm mb-2">구현 예시:</p>
                      <pre className="text-xs">
{`// Dividend Distribution Contract
contract DividendDistributor {

  // 배당금 입금
  function depositDividend() external payable {
    require(msg.value > 0, "No dividend");
    totalDividendsDeposited += msg.value;
    dividendPerToken = msg.value / token.totalSupply();
    emit DividendDeposited(msg.value, block.timestamp);
  }

  // 투자자별 배당 청구
  function claimDividend() external {
    uint256 balance = token.balanceOf(msg.sender);
    uint256 owed = balance * dividendPerToken - claimed[msg.sender];
    require(owed > 0, "No dividend to claim");

    // 세금 원천징수 (예: 15%)
    uint256 tax = owed * 15 / 100;
    uint256 netAmount = owed - tax;

    claimed[msg.sender] += owed;
    payable(msg.sender).transfer(netAmount);
    taxAuthority.transfer(tax); // 세금 자동 납부

    emit DividendClaimed(msg.sender, netAmount, tax);
  }

  // 관리자가 모든 투자자에게 일괄 분배 (Push 방식)
  function distributeToAll() external onlyAdmin {
    address[] memory holders = token.getAllHolders();
    for (uint i = 0; i < holders.length; i++) {
      uint256 balance = token.balanceOf(holders[i]);
      uint256 amount = balance * dividendPerToken;
      payable(holders[i]).transfer(amount);
    }
  }
}`}
                      </pre>
                    </div>
                    <div className="mt-3 p-3 bg-orange-50 dark:bg-orange-900/30 rounded text-xs">
                      <strong>📊 실제 사례:</strong> BlackRock BUIDL은 매월 1일 자동 배당 (일별 산정, 월별 지급)<br/>
                      <strong>⚡ 효율:</strong> 수천 명 투자자에게 동시 배당 가능 (전통 방식은 은행 송금 수수료 + 수일 소요)
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">유통 시장 (Secondary Market) 구조</h2>

              <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8 border-2 border-cyan-600">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">🏦 STO 거래는 어디서? ATS vs DEX</h3>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">1. ATS (Alternative Trading System) - 미국 SEC 인가</h4>
                    <p className="text-sm mb-3">
                      SEC에 등록된 대체 거래 시스템으로, 증권형 토큰을 합법적으로 거래할 수 있는 플랫폼입니다.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                        <p className="font-semibold text-sm mb-2">tZERO</p>
                        <ul className="text-xs space-y-1">
                          <li>• Overstock.com 자회사</li>
                          <li>• SEC 승인 ATS + 브로커-딜러</li>
                          <li>• 부동산, 기업 지분 STO 거래</li>
                          <li>• T+0 결제 (즉시 정산)</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                        <p className="font-semibold text-sm mb-2">Securitize Markets</p>
                        <ul className="text-xs space-y-1">
                          <li>• SEC 등록 Transfer Agent</li>
                          <li>• KYC/AML 통합</li>
                          <li>• 기관 투자자 중심</li>
                          <li>• Compliance 자동화</li>
                        </ul>
                      </div>
                    </div>
                    <div className="mt-3 p-3 bg-cyan-50 dark:bg-cyan-900/30 rounded text-xs">
                      <strong>⚠️ 문제:</strong> 유동성 부족 (거래량 적음), 높은 수수료, 제한된 거래 시간
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">2. DEX (탈중앙 거래소) - 규제 회색지대</h4>
                    <p className="text-sm mb-3">
                      Uniswap, Curve 같은 DEX에서 증권형 토큰을 거래하는 것은 <strong>대부분 불법</strong>입니다.
                    </p>
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                      <p className="font-semibold text-sm mb-2 text-red-800 dark:text-red-300">⚠️ SEC 입장</p>
                      <ul className="text-xs space-y-1">
                        <li>• 증권은 반드시 등록된 거래소에서만 거래 가능</li>
                        <li>• DEX에서 증권형 토큰 거래 → 무등록 증권 거래 (불법)</li>
                        <li>• DEX 운영자도 브로커-딜러 등록 없이 증권 중개 시 처벌 대상</li>
                      </ul>
                    </div>
                    <div className="mt-3 bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
                      <p className="font-semibold text-sm mb-2 text-yellow-800 dark:text-yellow-300">💡 예외: Permissioned DEX</p>
                      <p className="text-xs">
                        일부 프로젝트는 "화이트리스트 전용 DEX"를 구축하여 KYC 완료 투자자끼리만 거래하도록 제한합니다.
                        스마트 컨트랙트가 Compliance Layer와 통합되어 규제를 준수하는 방식입니다.
                      </p>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">3. 유동성 문제 & 해결 시도</h4>
                    <p className="text-sm mb-3">
                      STO의 가장 큰 문제는 <strong>"유동성 부족"</strong>입니다. 발행은 쉽지만 사고팔 사람이 없습니다.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                        <p className="font-semibold text-sm mb-2 text-red-600">문제점</p>
                        <ul className="text-xs space-y-1">
                          <li>• 적격 투자자만 거래 가능 → 매수자 제한</li>
                          <li>• Lock-up 기간 (6개월-1년) → 즉시 매도 불가</li>
                          <li>• ATS 거래량 적음 → 호가 스프레드 큼</li>
                          <li>• 일반 거래소 상장 불가 → 접근성 낮음</li>
                        </ul>
                      </div>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                        <p className="font-semibold text-sm mb-2 text-green-600">해결 시도</p>
                        <ul className="text-xs space-y-1">
                          <li>• Market Maker 고용 → 유동성 공급</li>
                          <li>• 발행사 자체 Buyback 프로그램</li>
                          <li>• Reg A+ 활용 → 일반 투자자 참여 허용</li>
                          <li>• 국가 간 상호 인정 (EU Passporting)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

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

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">한국 RWA·STO 시장 현황 (2026년)</h3>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8 border-l-4 border-green-500">
                <h4 className="font-bold mb-4 text-xl text-gray-900 dark:text-white">📊 시장 개요</h4>
                <p className="mb-4 text-sm">
                  한국의 RWA 토큰화 시장은 명확한 법적 프레임워크가 부재한 상황에서도
                  <strong>온라인투자연계금융업법(온투법)</strong>, <strong>자본시장법</strong>, <strong>금융혁신지원특별법(규제 샌드박스)</strong> 등
                  기존 법률을 해석·활용하여 빠르게 성장하고 있습니다.
                </p>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg mb-4">
                  <h5 className="font-bold mb-3 text-gray-900 dark:text-white">법적 근거 및 사업 모델</h5>
                  <div className="space-y-3 text-sm">
                    <div className="border-l-4 border-blue-500 pl-4">
                      <p className="font-semibold text-blue-700 dark:text-blue-300">1. 온라인투자연계금융업법 (온투법) 기반</p>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                        <strong>제정:</strong> 2021년 4월 시행<br/>
                        <strong>목적:</strong> 소액 투자자 보호 및 조각투자 활성화<br/>
                        <strong>규제:</strong> 금융위원회 등록 및 감독
                      </p>
                      <ul className="ml-4 mt-2 space-y-1 text-xs">
                        <li>• <strong>부동산 조각투자:</strong> 카사코리아, 피스, 소유</li>
                        <li>• <strong>미술품 조각투자:</strong> 아트투게더, 테사</li>
                        <li>• <strong>음악 저작권:</strong> 뮤직카우</li>
                      </ul>
                      <div className="mt-2 p-2 bg-blue-50 dark:bg-blue-900/30 rounded text-xs">
                        <strong>핵심 요건:</strong> 금융위 등록, 투자한도 제한 (개인: 건당 500만원, 연 1천만원), 정보공시 의무
                      </div>
                    </div>

                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-semibold text-purple-700 dark:text-purple-300">2. 자본시장법 기반 (증권형 토큰)</p>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                        <strong>법적 해석:</strong> 증권형 토큰은 자본시장법상 "증권"으로 해석 (금융위 유권해석)<br/>
                        <strong>규제:</strong> 증권신고서 제출, 금융투자업 인가 필요
                      </p>
                      <ul className="ml-4 mt-2 space-y-1 text-xs">
                        <li>• <strong>STO 플랫폼:</strong> 루센트블록 (Lucentblock)</li>
                        <li>• <strong>증권형 토큰 인프라:</strong> 두나무, 한국거래소 (KRX) 협력 프로젝트</li>
                        <li>• <strong>디지털 증권 발행:</strong> KB증권, 신한금융투자 등 대형 증권사 참여 검토 중</li>
                      </ul>
                      <div className="mt-2 p-2 bg-purple-50 dark:bg-purple-900/30 rounded text-xs">
                        <strong>현황:</strong> 블록체인 기반 증권 발행·유통에 대한 명시적 규정은 없으나, 자본시장법을 유추 적용하여 시범 사업 진행 중
                      </div>
                    </div>

                    <div className="border-l-4 border-orange-500 pl-4">
                      <p className="font-semibold text-orange-700 dark:text-orange-300">3. 금융혁신지원특별법 (규제 샌드박스)</p>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                        <strong>목적:</strong> 혁신 금융 서비스 시범 운영 허용<br/>
                        <strong>기간:</strong> 최대 4년 (2년 + 연장 2년)
                      </p>
                      <ul className="ml-4 mt-2 space-y-1 text-xs">
                        <li>• 규제 적용 유예로 신규 비즈니스 모델 검증 가능</li>
                        <li>• 토큰 증권 거래 플랫폼 시범 사업 승인 사례 존재</li>
                        <li>• 샌드박스 종료 후 정식 법제화 또는 사업 종료</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-red-500 pl-4">
                      <p className="font-semibold text-red-700 dark:text-red-300">4. 부동산 크라우드펀딩 (별도 법령)</p>
                      <p className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                        <strong>법적 근거:</strong> 부동산개발업법, 온투법<br/>
                        <strong>사업자:</strong> 테라펀딩, 펀다, 어니스트펀드 등
                      </p>
                      <ul className="ml-4 mt-2 space-y-1 text-xs">
                        <li>• 부동산 개발 프로젝트에 대한 대출형·지분형 투자</li>
                        <li>• 블록체인 토큰화와는 별개이나, RWA 개념과 유사</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8 border-2 border-blue-600">
                  <h5 className="font-bold mb-4 text-2xl text-gray-900 dark:text-white">🎉 2026년 법제화 최신 동향 (Breaking News)</h5>

                  <div className="space-y-6">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-green-500">
                      <h6 className="font-bold text-lg mb-3 text-green-700 dark:text-green-300">✅ 토큰증권(STO) 법제화 확정 (2026년 1월)</h6>
                      <div className="space-y-3 text-sm">
                        <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                          <p className="font-semibold mb-2">🏛️ 국회 본회의 통과</p>
                          <ul className="ml-4 space-y-1 text-xs">
                            <li>• <strong>날짜:</strong> 2026년 1월 15일</li>
                            <li>• <strong>법안:</strong> 전자증권법 개정안, 자본시장법 개정안</li>
                            <li>• <strong>시행일:</strong> 공포 후 1년 (2027년 1월 시행 예정)</li>
                          </ul>
                        </div>

                        <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                          <p className="font-semibold mb-2">📋 주요 내용</p>
                          <ul className="ml-4 space-y-1 text-xs">
                            <li>• <strong>분산원장 개념 법률 정의:</strong> 블록체인을 법적으로 인정</li>
                            <li>• <strong>전자등록계좌부 활용:</strong> 분산원장을 증권 계좌부(전자등록계좌부)로 사용 가능</li>
                            <li>• <strong>발행 절차 명시:</strong> 발행인은 전자등록기관에 사전 통지 후 전자등록 신청</li>
                            <li>• <strong>투자자 보호:</strong> 자본시장법상 증권 규제 전면 적용</li>
                            <li>• <strong>거래소 요건:</strong> 토큰증권 거래 플랫폼 인가 기준 마련</li>
                          </ul>
                        </div>

                        <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                          <p className="font-semibold mb-2">📈 시장 전망</p>
                          <ul className="ml-4 space-y-1 text-xs">
                            <li>• <strong>2030년 시장 규모:</strong> 367조원 (GDP의 14.5%)</li>
                            <li>• <strong>조각투자 확대:</strong> 부동산·미술품·저작권 등 실물자산 토큰화 본격화</li>
                            <li>• <strong>기관 투자자 참여:</strong> 증권사·은행 등 대형 금융사 진입 가속화</li>
                          </ul>
                        </div>

                        <div className="mt-3 p-3 bg-green-100 dark:bg-green-800 rounded text-xs">
                          <strong>💡 의미:</strong> 한국이 세계 최초로 <strong>토큰증권을 제도권 자본시장에 완전히 통합</strong>하는 법적 프레임워크를 완성했습니다.
                          미국·유럽도 아직 단편적 규제에 머물러 있는 반면, 한국은 발행·유통·결제·투자자 보호까지 통합 규율하는 포괄적 법체계를 구축했습니다.
                        </div>
                      </div>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                      <h6 className="font-bold text-lg mb-3 text-orange-700 dark:text-orange-300">⏳ 원화 스테이블코인 법제화 진행 중</h6>
                      <div className="space-y-3 text-sm">
                        <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded">
                          <p className="font-semibold mb-2">📜 디지털자산 기본법 (2단계 입법)</p>
                          <ul className="ml-4 space-y-1 text-xs">
                            <li>• <strong>현황:</strong> 금융위원회 정부안 마련, 국회 발의 예정</li>
                            <li>• <strong>목표:</strong> 원화 스테이블코인 제도권 편입, ICO 허용</li>
                            <li>• <strong>상태:</strong> 아직 국회 통과 안 됨 (2026년 2월 현재 논의 중)</li>
                          </ul>
                        </div>

                        <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                          <p className="font-semibold mb-2 text-red-800 dark:text-red-300">🔥 핵심 쟁점: 발행 주체를 둘러싼 갈등</p>
                          <div className="grid md:grid-cols-2 gap-3 mt-2">
                            <div className="bg-white dark:bg-gray-800 p-3 rounded">
                              <p className="font-semibold text-xs mb-2 text-blue-700 dark:text-blue-300">한국은행·국민의힘 입장</p>
                              <ul className="text-xs space-y-1">
                                <li>• <strong>"은행 51% 룰"</strong> 주장</li>
                                <li>• 발행사 지분 51% 이상을 은행이 보유해야 함</li>
                                <li>• 이유: 통화정책 파급력 관리, 금융안정, KYC·AML 체계</li>
                              </ul>
                            </div>
                            <div className="bg-white dark:bg-gray-800 p-3 rounded">
                              <p className="font-semibold text-xs mb-2 text-purple-700 dark:text-purple-300">금융위원회·민주당 입장</p>
                              <ul className="text-xs space-y-1">
                                <li>• <strong>비은행 참여 허용</strong> 주장</li>
                                <li>• 은행 중심 규제는 과도한 진입 장벽</li>
                                <li>• 이유: 핀테크 혁신, 기술기업 참여, 글로벌 경쟁력</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded">
                          <p className="font-semibold mb-2">🤝 절충안 (금융위 제시)</p>
                          <ul className="ml-4 space-y-1 text-xs">
                            <li>• <strong>1단계:</strong> 은행이 지분 50%+1주를 보유한 컨소시엄에 우선 허용</li>
                            <li>• <strong>2단계:</strong> 향후 기술기업 참여 확대 (시행령에서 조정)</li>
                            <li>• <strong>최대 주주:</strong> 기술기업도 가능 (은행이 과반만 보유하면 됨)</li>
                            <li>• <strong>최소 자기자본:</strong> 50억원 이상</li>
                            <li>• <strong>준비금:</strong> 은행 예금 또는 국채로 100% 보유 의무</li>
                          </ul>
                        </div>

                        <div className="mt-3 p-3 bg-orange-100 dark:bg-orange-800 rounded text-xs">
                          <strong>⚠️ 현황:</strong> 원화 스테이블코인은 <strong>법제화 진행 중</strong>이나 아직 확정되지 않았습니다.
                          발행 주체, 준비자산 구성, 감독 권한 등 핵심 쟁점에 대한 이해관계자 간 조율이 진행 중이며,
                          법안이 국회를 통과하더라도 시행령·세부 규칙 마련까지 추가 시간이 소요될 전망입니다.
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-900/20 dark:to-teal-900/20 p-6 rounded-lg border-2 border-cyan-600">
                      <h6 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">🔍 토큰증권 발행사 vs 원화 스테이블코인 발행사: 핵심 차이</h6>

                      <div className="overflow-x-auto">
                        <table className="w-full text-xs border-collapse">
                          <thead>
                            <tr className="bg-gray-100 dark:bg-gray-700">
                              <th className="border border-gray-300 dark:border-gray-600 p-2">구분</th>
                              <th className="border border-gray-300 dark:border-gray-600 p-2">토큰증권 발행사</th>
                              <th className="border border-gray-300 dark:border-gray-600 p-2">원화 스테이블코인 발행사</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">발행 대상</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2"><strong>증권</strong> (부동산·채권·지분 등 실물자산)</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2"><strong>통화성 지급수단</strong> (원화 가치 연동 디지털 자산)</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">적용 법률</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                • 전자증권법 (2026년 개정)<br/>
                                • 자본시장법
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                • 디지털자산 기본법 (예정)<br/>
                                • 전자금융거래법 (부분 적용 가능성)
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">법적 성격</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">자본시장법상 "증권"</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">지급·결제 수단 (증권 아님)</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">규제 목적</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">투자자 보호, 자본시장 공정성</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">통화 안정, 금융 시스템 안정, 자금세탁 방지</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">발행 요건</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                • 전자등록기관에 사전 통지·신청<br/>
                                • 증권신고서 제출 (공모 시)<br/>
                                • 금융투자업 인가 (증권사)
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                • 최소 자기자본 50억원<br/>
                                • 은행 컨소시엄 (50%+1주) 또는 단독<br/>
                                • 준비금 100% 보유 (은행 예금·국채)
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">감독 기관</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">금융위원회 (자본시장 감독)</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">금융위원회 + 한국은행 (통화정책 연계)</td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">주요 기능</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                • 자산 소유권 표시<br/>
                                • 배당·이자 수령<br/>
                                • 투표권 행사
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                • 가치 저장<br/>
                                • 지급·결제<br/>
                                • 송금·환전
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">양도 제한</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                <strong>있음</strong> (적격 투자자·KYC·화이트리스트)
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                <strong>없음</strong> (자유로운 유통이 원칙, KYC는 발행·환전 시에만)
                              </td>
                            </tr>
                            <tr>
                              <td className="border border-gray-300 dark:border-gray-600 p-2 font-semibold bg-gray-50 dark:bg-gray-800">법제화 현황<br/>(2026년 2월)</td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                <span className="inline-block px-2 py-1 bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100 rounded text-xs font-semibold">✅ 확정 (2027년 시행)</span>
                              </td>
                              <td className="border border-gray-300 dark:border-gray-600 p-2">
                                <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100 rounded text-xs font-semibold">⏳ 논의 중</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <div className="mt-4 p-4 bg-cyan-50 dark:bg-cyan-900/30 rounded text-xs">
                        <p className="font-semibold mb-2">📌 핵심 요약</p>
                        <ul className="ml-4 space-y-1">
                          <li>• <strong>토큰증권:</strong> "증권"이므로 자본시장법·전자증권법 적용 → 투자자 보호 중심 규제</li>
                          <li>• <strong>원화 스테이블코인:</strong> "통화성 지급수단"이므로 별도 법체계 필요 → 금융안정·통화정책 중심 규제</li>
                          <li>• <strong>발행 주체:</strong> 토큰증권은 일반 기업 가능 / 스테이블코인은 은행 또는 은행 컨소시엄 중심으로 제한될 가능성</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h5 className="font-bold mb-3 text-yellow-800 dark:text-yellow-300">⚠️ 남은 과제 (2026년 2월 기준)</h5>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>1. 토큰증권 시행 준비:</strong> 법은 통과했으나 2027년 1월 시행까지 1년의 준비 기간이 필요합니다.
                      전자등록기관 지정, 거래소 인가 기준, 시행령·세부 규칙 마련 등 인프라 구축이 진행 중입니다.
                    </li>
                    <li>
                      <strong>2. 원화 스테이블코인 법제화 완료:</strong> 디지털자산 기본법 제정이 완료되지 않아 원화 스테이블코인 발행은 여전히 불가능합니다.
                      국회 통과 시기는 불확실하며, 발행 주체·감독 체계 등 핵심 쟁점에 대한 합의가 필요합니다.
                    </li>
                    <li>
                      <strong>3. 거래소 인가 미비:</strong> 증권형 토큰을 거래할 수 있는 정식 인가 거래소가 부재하여,
                      발행은 가능하나 유통 시장이 제한적입니다.
                    </li>
                    <li>
                      <strong>4. 세제 불명확:</strong> 토큰화된 자산의 양도소득세, 배당소득세 처리 방식이 명확하지 않아
                      투자자 혼란이 있습니다. (금융투자소득세 도입 논의 중)
                    </li>
                    <li>
                      <strong>5. 국경 간 거래:</strong> 해외 STO 상품에 대한 국내 투자자 접근 규제가 불명확하며,
                      외국환거래법, 자본시장법 등 여러 법률이 복합적으로 적용됩니다.
                    </li>
                  </ul>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg mt-4">
                  <h5 className="font-bold mb-3 text-green-800 dark:text-green-300">✅ 사업 가능 근거 요약</h5>
                  <p className="text-sm mb-3">
                    2026년 법제화 완료로 한국의 RWA·STO 시장은 명확한 법적 기반을 갖추게 되었습니다:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>✓ 조각투자는 온투법으로 명시적 허용:</strong>
                      2021년 온투법 제정으로 소액 투자 중개 플랫폼이 금융위 등록 후 합법적으로 운영 가능
                    </li>
                    <li>
                      <strong>✓ 토큰증권은 전자증권법으로 법제화 완료 (2026년 1월):</strong>
                      전자증권법·자본시장법 개정으로 블록체인 기반 증권 발행·유통이 법적으로 명시되었으며,
                      2027년 1월 시행 예정입니다. 더 이상 "유추 적용"이 아닌 <strong>명시적 법률 근거</strong>를 확보했습니다.
                    </li>
                    <li>
                      <strong>✓ 규제 샌드박스로 혁신 모델 시범 허용:</strong>
                      금융혁신지원특별법에 따라 금융위 승인 시 최대 4년간 규제 유예를 받아 신규 모델 테스트 가능
                    </li>
                    <li>
                      <strong>✓ 정부 정책적 육성 의지:</strong>
                      금융위·과기정통부 등이 디지털 자산 및 RWA 시장 육성을 국정 과제로 추진 중이며,
                      2030년까지 367조원 규모 시장 육성을 목표로 인프라 구축 중입니다.
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">주요 한국 RWA·STO 사업자</h3>

              <div className="space-y-4 my-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-lg">
                      <span className="text-2xl">🏢</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">카사코리아 (KASA Korea)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>분야:</strong> 부동산 조각투자<br/>
                        <strong>법적 근거:</strong> 온라인투자연계금융업 등록 (온투법)<br/>
                        <strong>사업 모델:</strong> 수익형 부동산(오피스텔, 상가 등)을 소액으로 조각내어 투자 기회 제공
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        대표 상품: 강남 오피스텔, 부산 상가 등 월 임대료 수익 배당
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-100 dark:bg-purple-900 p-3 rounded-lg">
                      <span className="text-2xl">🎨</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">아트투게더 (Art Together)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>분야:</strong> 미술품 조각투자<br/>
                        <strong>법적 근거:</strong> 온라인투자연계금융업 등록 (온투법)<br/>
                        <strong>사업 모델:</strong> 고가 미술품(회화, 조각 등)을 조각내어 다수가 공동 소유
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        대표 상품: 박수근, 이중섭 등 유명 작가 작품 / 가치 상승 시 차익 실현
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-100 dark:bg-green-900 p-3 rounded-lg">
                      <span className="text-2xl">🔐</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">루센트블록 (Lucentblock)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>분야:</strong> STO 플랫폼 (블록체인 증권 발행·관리 인프라)<br/>
                        <strong>법적 근거:</strong> 금융혁신지원특별법 (규제 샌드박스 승인)<br/>
                        <strong>사업 모델:</strong> 기업·부동산 등의 자산을 증권형 토큰으로 발행하는 기술 플랫폼 제공
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        특징: 블록체인 기반 증권 발행·분배·배당 자동화 / 금융위 샌드박스 승인
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-100 dark:bg-orange-900 p-3 rounded-lg">
                      <span className="text-2xl">🏗️</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">테라펀딩 (Tera Funding)</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>분야:</strong> 부동산 크라우드펀딩<br/>
                        <strong>법적 근거:</strong> 온투법, 부동산개발업법<br/>
                        <strong>사업 모델:</strong> 부동산 개발 프로젝트에 대한 대출형·지분형 투자 중개
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        특징: 토큰화와 별개이나 소액 투자자에게 부동산 투자 기회 제공
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="flex items-start gap-4">
                    <div className="bg-indigo-100 dark:bg-indigo-900 p-3 rounded-lg">
                      <span className="text-2xl">🏦</span>
                    </div>
                    <div className="flex-1">
                      <h5 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">두나무·한국거래소(KRX) 협력</h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                        <strong>분야:</strong> 디지털 증권 발행·거래 인프라 구축<br/>
                        <strong>법적 근거:</strong> 자본시장법 (증권으로 해석), 규제 샌드박스 검토 중<br/>
                        <strong>사업 모델:</strong> 블록체인 기반 증권 발행·예탁·결제 시스템 개발
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-500">
                        현황: 시범 사업 단계 / 정식 증권형 토큰 거래소 인가 추진 중
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <h4 className="font-bold mb-3 text-red-800 dark:text-red-300">🚨 투자자 주의사항</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>법적 불확실성:</strong> 디지털 자산에 대한 명시적 법률이 없어, 향후 규제 변경 시 사업 모델이나 투자 보호에 영향을 받을 수 있습니다.
                  </li>
                  <li>
                    <strong>유동성 제한:</strong> 증권형 토큰 거래소가 정식 인가되지 않아, 발행된 토큰을 매도하기 어려울 수 있습니다.
                  </li>
                  <li>
                    <strong>세제 불명확:</strong> 토큰 매매 차익 및 배당 소득에 대한 과세 기준이 불명확하여, 세무 처리에 주의가 필요합니다.
                  </li>
                  <li>
                    <strong>원금 손실 위험:</strong> 조각투자·크라우드펀딩은 예금자보호법 적용 대상이 아니므로, 투자 원금 손실 위험이 있습니다.
                  </li>
                  <li>
                    <strong>사업자 선택 주의:</strong> 금융위 등록·인가를 받은 사업자인지 반드시 확인하고, 비등록 사업자는 피해야 합니다.
                  </li>
                </ul>
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

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">용어 설명</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  본문에 등장하는 STO 및 증권 관련 전문 용어를 쉽게 풀이합니다.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">STO (Security Token Offering)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      증권형 토큰을 발행하는 것을 의미합니다. 실물 자산(부동산, 채권, 주식, 예술품 등)의 소유권을
                      블록체인 토큰으로 표현하여 거래할 수 있게 만듭니다.
                      기존 증권법의 규제를 받기 때문에 투자자 보호가 강하며, 배당과 의결권 같은 법적 권리를 보장받습니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">ICO (Initial Coin Offering)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      암호화폐 프로젝트가 자금을 조달하기 위해 유틸리티 토큰을 발행하는 것입니다.
                      유틸리티 토큰은 서비스 이용권일 뿐 소유권이나 배당권이 없으며, 증권 규제를 받지 않아
                      투자자 보호가 약합니다. 2017~2018년 ICO 붐 당시 많은 사기 프로젝트가 발생했습니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">RWA (Real World Assets)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      현실 세계의 자산을 블록체인 토큰으로 표현한 것입니다.
                      부동산, 국채, 회사채, 주식, 상품(금, 원유 등), 예술품, 지적재산권 등 거의 모든 자산을 토큰화할 수 있습니다.
                      RWA는 전통 자산의 안정성과 블록체인의 효율성을 결합하여 금융의 미래로 주목받고 있습니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">유틸리티 토큰 vs 증권형 토큰</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      <strong>유틸리티 토큰:</strong> 특정 플랫폼에서 서비스를 이용할 수 있는 권리를 나타냅니다.
                      예: 게임 내 화폐, 클라우드 스토리지 이용권. 배당이나 소유권이 없습니다.
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      <strong>증권형 토큰:</strong> 실물 자산의 소유권, 배당권, 의결권 등 법적 권리를 나타냅니다.
                      증권법의 규제를 받으며, 투자자는 법적으로 보호받습니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Fractional Ownership (조각 투자)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      고가의 자산을 여러 조각으로 나누어 소액 투자를 가능하게 하는 방식입니다.
                      예를 들어 100억 원짜리 빌딩을 100개 토큰으로 나누면, 1억 원으로 빌딩의 1% 지분을 소유할 수 있습니다.
                      기존에는 부유층만 접근 가능했던 프리미엄 자산을 일반 투자자도 투자할 수 있게 됩니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Smart Contract (스마트 컨트랙트)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      블록체인에서 자동으로 실행되는 계약입니다. 특정 조건이 충족되면 중개인 없이 자동으로 거래가 체결됩니다.
                      STO에서는 배당금 분배, 토큰 전송 제한(적격 투자자만 거래 가능), 의결권 행사 등을
                      스마트 컨트랙트로 자동화하여 투명성과 효율성을 높입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Regulation D / A+ / S</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                      미국 SEC의 증권 발행 규제입니다.
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4">
                      <li><strong>Regulation D:</strong> 적격 투자자에게만 사모로 증권을 판매할 수 있습니다. SEC 등록 면제.</li>
                      <li><strong>Regulation A+:</strong> 일반 투자자에게도 공모 가능하지만, 연간 최대 $75M까지만 발행 가능.</li>
                      <li><strong>Regulation S:</strong> 미국 외 국가에서 증권을 발행할 때 적용되는 규제.</li>
                    </ul>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Howey Test (하위 테스트)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      미국 대법원이 1946년 확립한 "증권" 판단 기준입니다. 다음 4가지 조건을 모두 충족하면 증권으로 간주됩니다:
                    </p>
                    <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1 ml-4 mt-2">
                      <li>1. 돈의 투자 (Investment of money)</li>
                      <li>2. 공동 사업 (Common enterprise)</li>
                      <li>3. 수익 기대 (Expectation of profits)</li>
                      <li>4. 타인의 노력에 의한 수익 (Profits derived from the efforts of others)</li>
                    </ul>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                      대부분의 STO는 Howey Test를 통과하여 증권으로 분류됩니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">적격 투자자 (Accredited Investor)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      미국 증권법에서 정의하는 고액 자산가 또는 전문 투자자를 말합니다.
                      개인의 경우 연소득 $200K 이상 또는 순자산 $1M 이상, 기관의 경우 운용자산 $5M 이상이어야 합니다.
                      Regulation D 사모펀드는 적격 투자자만 참여할 수 있습니다. 한국에서는 "전문투자자"로 불립니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-cyan-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">ATS (Alternative Trading System)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      대체 거래 시스템으로, 기존 증권거래소가 아닌 비공개 플랫폼에서 증권을 거래하는 시스템입니다.
                      STO 토큰은 일반 암호화폐 거래소가 아닌 ATS에서 거래됩니다.
                      tZERO, OpenFinance Network 등이 대표적인 STO ATS 플랫폼입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-lime-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">BlackRock BUIDL</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      세계 최대 자산운용사 BlackRock이 2024년 출시한 블록체인 기반 MMF(Money Market Fund)입니다.
                      미국 단기 국채(T-Bills)를 기초 자산으로 하며, 시가총액 $1.5B+, 연 수익률 약 5%, 매일 배당 지급,
                      T+0 즉시 환매가 가능합니다. 전통 금융과 블록체인의 융합을 보여주는 RWA의 대표 사례입니다.
                    </p>
                  </div>
                </div>
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
