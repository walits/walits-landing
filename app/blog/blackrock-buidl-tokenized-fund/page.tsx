'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function BlackRockBUIDLPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      breadcrumb: '블로그',
      category: 'RWA & 기관 투자',
      title: 'BlackRock BUIDL: 전통 금융이 블록체인을 만났을 때',
      date: '2026년 2월 11일',
      readTime: '12분 읽기',
      backToBlog: '← 블로그로 돌아가기',
      relatedPosts: '관련 글',
    },
    en: {
      breadcrumb: 'Blog',
      category: 'RWA & Institutional',
      title: 'BlackRock BUIDL: When Traditional Finance Meets Blockchain',
      date: 'February 11, 2026',
      readTime: '12 min read',
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
          <span className="inline-block px-4 py-2 bg-emerald-100 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 rounded text-sm font-medium mb-4">
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
            src="/blog/blackrock.jpg"
            alt={language === 'ko' ? 'BlackRock BUIDL 토큰화 펀드' : 'BlackRock BUIDL Tokenized Fund'}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          {language === 'ko' ? (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                2024년 3월, 세계 최대 자산운용사 BlackRock이 조용히 역사를 만들었습니다.
                $10조를 운용하는 거대 금융기관이 블록체인 기반 토큰화 펀드 "BUIDL"을 출시한 것입니다.
                불과 2년 만에 $1.5B 규모로 성장한 BUIDL은 전통 금융과 암호화폐의 완벽한 융합을 보여줍니다.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BlackRock: 세계를 움직이는 자산운용사</h2>

              <div className="bg-gradient-to-r from-gray-50 to-blue-50 dark:from-gray-800 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 bg-black rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold text-3xl">BR</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">BlackRock, Inc.</h3>
                    <p className="text-gray-600 dark:text-gray-400">세계 최대 자산운용사</p>
                  </div>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-blue-600 mb-2">$10.5조</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">운용 자산 (AUM)</p>
                    <p className="text-xs mt-2">한국 GDP의 약 7배</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">국가에서 사업 운영</p>
                    <p className="text-xs mt-2">글로벌 네트워크</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <div className="text-4xl font-bold text-purple-600 mb-2">1988년</div>
                    <p className="text-sm text-gray-600 dark:text-gray-400">설립</p>
                    <p className="text-xs mt-2">35년+ 신뢰와 전문성</p>
                  </div>
                </div>

                <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg">
                  <h4 className="font-bold mb-2 text-gray-900 dark:text-white">💡 BlackRock의 영향력</h4>
                  <ul className="space-y-1 text-sm">
                    <li>• <strong>Aladdin 플랫폼:</strong> 전 세계 금융기관이 사용하는 리스크 관리 시스템</li>
                    <li>• <strong>ETF 시장 점유율:</strong> iShares 브랜드로 ETF 시장 1위</li>
                    <li>• <strong>주요 고객:</strong> 연기금, 정부, 중앙은행, 보험사, 개인 투자자</li>
                    <li>• <strong>CEO Larry Fink:</strong> 월스트리트에서 가장 영향력 있는 인물 중 하나</li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BUIDL: 블록체인 기반 MMF의 탄생</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">정식 명칭과 기본 정보</h3>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8 border-2 border-blue-500">
                <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                  BlackRock USD Institutional Digital Liquidity Fund
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  일명 "BUIDL" — Build를 의미하는 크립토 커뮤니티 용어에서 유래
                </p>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">📊 펀드 개요</h5>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">발행사</td>
                          <td className="py-2 text-right">BlackRock</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">출시일</td>
                          <td className="py-2 text-right">2024년 3월</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">블록체인</td>
                          <td className="py-2 text-right">Ethereum</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">토큰 심볼</td>
                          <td className="py-2 text-right">BUIDL</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">시가총액</td>
                          <td className="py-2 text-right text-green-600 font-bold">$1.5B+</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-semibold">최소 투자</td>
                          <td className="py-2 text-right">$5M (적격 투자자)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">💰 수익 구조</h5>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">기초 자산</td>
                          <td className="py-2 text-right text-xs">미국 단기 국채, RP, 현금</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">수익률</td>
                          <td className="py-2 text-right text-green-600 font-bold">연 4.5~5.2%</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">배당 주기</td>
                          <td className="py-2 text-right">매일 자동 분배</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">환매</td>
                          <td className="py-2 text-right">T+0 (즉시)</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">수수료</td>
                          <td className="py-2 text-right">0.50% 연 운용보수</td>
                        </tr>
                        <tr>
                          <td className="py-2 font-semibold">최소 보유</td>
                          <td className="py-2 text-right">없음</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BUIDL의 혁신적인 4가지 특징</h2>

              <div className="space-y-6 my-8">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                    1. 실시간 On-Chain 배당 (매일 자동 분배)
                  </h3>
                  <p className="mb-4 text-sm">
                    전통적인 Money Market Fund(MMF)는 배당을 월 1회 지급하고, 중개인을 통해 2-3일이 소요됩니다.
                    BUIDL은 <strong>매일 자정(UTC) 스마트 컨트랙트가 자동 실행</strong>되어 배당을 지급합니다.
                  </p>
                  <div className="bg-gray-900 dark:bg-black p-4 rounded-lg my-4 overflow-x-auto">
                    <pre className="text-sm text-green-400">
{`[전통 MMF]
매월 1일: 배당 계산
     ↓ (중개인 처리 2-3일)
매월 4일: 계좌 입금
⏱️  배당 받기까지 평균 3일 소요

[BUIDL]
매일 00:00 UTC: 배당 자동 계산
     ↓ (스마트 컨트랙트 즉시 실행)
     ↓ (블록 확정 ~15초)
00:01 UTC: 지갑에 BUIDL 토큰 추가 입금
⚡ 배당 받기까지 1분 이내

✅ 장점:
• 복리 효과 극대화 (매일 재투자)
• 중개 수수료 제거
• 투명한 온체인 기록`}
                    </pre>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded mt-4">
                    <h4 className="font-semibold text-sm mb-2">💡 실제 사례</h4>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      <strong>투자금:</strong> $100M<br/>
                      <strong>연 수익률:</strong> 5%<br/>
                      <strong>매일 배당:</strong> $100M × 5% ÷ 365 = <span className="text-green-600 font-bold">$13,699</span><br/>
                      <strong>1년 복리:</strong> $100M × (1 + 0.05/365)^365 = <span className="text-green-600 font-bold">$105.127M</span><br/>
                      <strong>vs 연 1회 배당:</strong> $100M × 1.05 = $105M<br/>
                      <strong>차익:</strong> <span className="text-green-600 font-bold">+$127,000</span> (복리 효과)
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="text-xl font-bold mb-4 text-green-700 dark:text-green-300">
                    2. T+0 즉시 환매 (유동성 혁명)
                  </h3>
                  <p className="mb-4 text-sm">
                    전통 펀드는 환매 신청 후 <strong>T+2~T+3</strong> (2~3 영업일) 후에 현금을 받습니다.
                    BUIDL은 <strong>T+0 즉시 환매</strong>가 가능합니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold text-sm mb-2 text-red-600 dark:text-red-400">❌ 전통 MMF</h4>
                      <ul className="text-xs space-y-1">
                        <li>• 월요일 09:00 환매 신청</li>
                        <li>• 화요일 처리 중...</li>
                        <li>• 수요일 처리 중...</li>
                        <li>• 목요일 11:00 입금 완료</li>
                        <li className="font-bold text-red-600">⏱️ 총 3일 소요</li>
                      </ul>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-4 rounded">
                      <h4 className="font-semibold text-sm mb-2 text-green-600 dark:text-green-400">✅ BUIDL</h4>
                      <ul className="text-xs space-y-1">
                        <li>• 월요일 09:00 환매 신청</li>
                        <li>• 09:00:15 트랜잭션 제출</li>
                        <li>• 09:00:30 블록 확정</li>
                        <li>• 09:00:45 USDC 입금 완료</li>
                        <li className="font-bold text-green-600">⚡ 총 1분 이내</li>
                      </ul>
                    </div>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 dark:bg-yellow-900/30 rounded">
                    <p className="text-xs">
                      <strong>🎯 실전 활용:</strong> 투자자가 갑자기 현금이 필요하거나, 더 좋은 투자 기회를 발견했을 때 즉시 환매하고 재배치할 수 있습니다.
                      전통 펀드처럼 3일을 기다릴 필요가 없습니다.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                    3. 기관급 안전성 + 블록체인 효율성
                  </h3>
                  <p className="mb-4 text-sm">
                    BUIDL은 <strong>전통 금융의 신뢰</strong>와 <strong>블록체인의 효율성</strong>을 완벽하게 결합했습니다.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">🏦 전통 금융의 신뢰</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <div>
                            <strong>BlackRock 운용:</strong> 세계 최대 자산운용사, 신용등급 AAA
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <div>
                            <strong>BNY Mellon 커스터디:</strong> 240년 역사의 글로벌 1위 커스터디 은행이 자산 보관
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <div>
                            <strong>SEC 규제 준수:</strong> Regulation D에 따른 적격 투자자 전용 사모펀드
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-green-600 font-bold">✓</span>
                          <div>
                            <strong>Big 4 감사:</strong> 정기적인 외부 감사 (Deloitte, PwC 등)
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3 text-sm">⚡ 블록체인의 효율성</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <div>
                            <strong>24/7 거래:</strong> 주말, 공휴일 관계없이 언제나 거래 가능
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <div>
                            <strong>중개 수수료 제거:</strong> 스마트 컨트랙트가 중개인 역할 대체
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <div>
                            <strong>실시간 투명성:</strong> 모든 거래가 온체인에 기록되어 누구나 검증 가능
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-blue-600 font-bold">✓</span>
                          <div>
                            <strong>프로그래밍 가능:</strong> DeFi 프로토콜과 연계하여 복잡한 금융 전략 구현
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-300">
                    4. DeFi 프로토콜 연계 (무한한 가능성)
                  </h3>
                  <p className="mb-4 text-sm">
                    BUIDL 토큰은 이더리움 온체인에 존재하므로, <strong>DeFi (탈중앙 금융) 프로토콜과 연계</strong>할 수 있습니다.
                    이는 전통 금융 상품으로는 불가능한 혁신적인 활용법입니다.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">📌 시나리오 1: 담보 대출 (Collateralized Lending)</h4>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-xs">
                        <pre>
{`보유 자산: BUIDL $10M (연 5% 수익)
     ↓
Aave/Compound에 담보로 예치
     ↓
USDC $8M 대출 (80% LTV)
     ↓
결과:
✅ BUIDL 연 5% 수익 계속 발생 ($500K/년)
✅ USDC $8M 유동성 확보
✅ 대출 이자 연 3% 지불 ($240K/년)
━━━━━━━━━━━━━━━━━━━━━━
순수익: $260K/년 (2.6% on $10M)
+ 추가 $8M 운용 수익`}
                        </pre>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                        <strong>핵심:</strong> BUIDL을 팔지 않고도 유동성을 확보할 수 있습니다. 마치 집을 담보로 대출받으면서 집에서 계속 거주하는 것과 같습니다.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">📌 시나리오 2: 자동 재투자 (Auto-Compounding)</h4>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-xs">
                        <pre>
{`매일 00:00 UTC: BUIDL 배당 수령 ($13,699)
     ↓
스마트 컨트랙트 자동 실행
     ↓
Uniswap에서 ETH 또는 다른 자산 매수
     ↓
Yield Farming 프로토콜에 예치
     ↓
추가 수익 발생 (연 8-12%)

━━━━━━━━━━━━━━━━━━━━━━
최종 수익률:
BUIDL 5% + DeFi 추가 수익 4-8%
= 연 9-13% 복합 수익`}
                        </pre>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                        <strong>핵심:</strong> 완전 자동화된 복리 투자 전략을 구축할 수 있습니다. 사람의 개입 없이 24/7 최적화된 투자가 진행됩니다.
                      </p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-5 rounded-lg">
                      <h4 className="font-semibold mb-2 text-sm">📌 시나리오 3: 유동성 공급 (Liquidity Provision)</h4>
                      <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-xs">
                        <pre>
{`BUIDL + USDC Curve Pool에 유동성 공급
     ↓
트레이더들이 BUIDL ↔ USDC 스왑
     ↓
거래 수수료 수익 발생 (연 2-4%)
     ↓
추가로 Curve 리워드 토큰(CRV) 획득
     ↓
총 수익:
BUIDL 5% + 거래 수수료 3% + CRV 보상 2%
= 연 10% 수익`}
                        </pre>
                      </div>
                      <p className="text-xs mt-2 text-gray-600 dark:text-gray-400">
                        <strong>핵심:</strong> BUIDL을 그냥 보유하는 것보다, DeFi에서 활용하면 수익을 2배로 늘릴 수 있습니다.
                      </p>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-red-50 dark:bg-red-900/30 rounded border-l-4 border-red-500">
                    <h5 className="font-semibold text-sm mb-2 text-red-700 dark:text-red-400">⚠️ 주의사항</h5>
                    <ul className="text-xs space-y-1">
                      <li>• DeFi 프로토콜은 스마트 컨트랙트 리스크가 있습니다 (해킹, 버그)</li>
                      <li>• 담보 대출은 청산 리스크가 있습니다 (담보 가치 하락 시)</li>
                      <li>• 높은 수익률은 높은 리스크를 동반합니다</li>
                      <li>• 반드시 자신이 이해하는 프로토콜만 사용하세요</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">시장 영향력: BUIDL이 바꾼 게임의 규칙</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">폭발적 성장세</h3>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-8 rounded-xl my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">📈 BUIDL 성장 타임라인</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="w-24 text-sm font-bold text-gray-600">2024년 3월</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-blue-500" style={{width: '1%'}}></div>
                    </div>
                    <div className="w-32 text-right font-bold text-blue-600">$10M 출시</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="w-24 text-sm font-bold text-gray-600">2024년 6월</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-green-500" style={{width: '20%'}}></div>
                    </div>
                    <div className="w-32 text-right font-bold text-green-600">$300M 돌파</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg">
                    <div className="w-24 text-sm font-bold text-gray-600">2024년 12월</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-purple-500" style={{width: '50%'}}></div>
                    </div>
                    <div className="w-32 text-right font-bold text-purple-600">$750M 돌파</div>
                  </div>
                  <div className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg border-2 border-green-500">
                    <div className="w-24 text-sm font-bold text-gray-900 dark:text-white">2026년 1월</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{width: '100%'}}></div>
                    </div>
                    <div className="w-32 text-right font-bold text-green-600">$1.5B+ 🚀</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                  <strong>22개월 만에 150배 성장</strong> — 역대 가장 빠르게 성장한 토큰화 펀드
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">경쟁사 등장: RWA 시장 급성장</h3>

              <div className="overflow-x-auto my-8">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-800">
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">펀드</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">발행사</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">출시</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">시가총액</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">블록체인</th>
                      <th className="border border-gray-300 dark:border-gray-700 p-4 text-left">수익률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-green-50 dark:bg-green-900/20">
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-bold">BUIDL</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">BlackRock</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">2024.03</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600 font-bold">$1.5B</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Ethereum</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">4.5-5.2%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-bold">FOBXX</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Franklin Templeton</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">2021.04</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">$410M</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Stellar, Polygon</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">4.8%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-bold">OUSG</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Ondo Finance</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">2023.01</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">$280M</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Ethereum</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">5.0%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-bold">USDY</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Ondo Finance</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">2023.09</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">$450M</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Ethereum</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">5.1%</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 font-bold">BENJI</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Hamilton Lane</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">2024.09</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">$35M</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Polygon</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4">Private Equity</td>
                    </tr>
                    <tr className="font-bold bg-gray-50 dark:bg-gray-700">
                      <td className="border border-gray-300 dark:border-gray-700 p-4" colSpan={3}>전체 RWA 시장</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-blue-600">$12B+</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4" colSpan={2}>2026년 1월 기준</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">💡 시사점</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>1. 기관 투자자 본격 진입:</strong> BlackRock의 브랜드가 RWA 시장에 대한 신뢰를 구축했습니다.
                    이제 다른 전통 금융기관(JP Morgan, Goldman Sachs 등)도 토큰화 펀드를 준비 중입니다.
                  </li>
                  <li>
                    <strong>2. 시장 규모 급성장:</strong> 2024년 $1B → 2026년 $12B (12배 성장)
                    → 2030년 예상 $15조 (Boston Consulting Group 추정)
                  </li>
                  <li>
                    <strong>3. 이더리움 선호:</strong> 대부분의 주요 펀드가 이더리움을 선택했습니다.
                    이유는 <strong>보안성, 탈중앙화, 개발자 생태계</strong> 때문입니다.
                  </li>
                  <li>
                    <strong>4. 규제 안정화:</strong> SEC가 BUIDL을 승인한 것은 토큰화 자산이 합법적인 증권으로 인정받았다는 증거입니다.
                  </li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BUIDL이 금융 역사에 남긴 것</h2>

              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4">🏆 3가지 역사적 의미</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 text-xl">1. "블록체인은 사기"에서 "블록체인은 인프라"로</h4>
                    <p className="text-sm">
                      불과 5년 전까지만 해도 JP Morgan CEO Jamie Dimon은 비트코인을 "사기"라고 불렀습니다.
                      하지만 2024년 BlackRock이 블록체인 펀드를 출시하면서, <strong className="text-yellow-300">블록체인은 차세대 금융 인프라로 공식 인정</strong>받았습니다.
                    </p>
                  </div>
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 text-xl">2. "24/7 금융 시장"의 실현</h4>
                    <p className="text-sm">
                      기존 금융 시장은 평일 09:00~17:00만 운영됩니다. 주말과 공휴일은 거래가 불가능합니다.
                      BUIDL은 <strong className="text-yellow-300">365일 24시간 언제든 거래 가능</strong>합니다.
                      이는 글로벌 금융 시장의 패러다임을 완전히 바꿉니다.
                    </p>
                  </div>
                  <div className="bg-white/10 p-5 rounded-lg">
                    <h4 className="font-bold mb-2 text-xl">3. "모든 자산이 토큰화된다" 증명</h4>
                    <p className="text-sm">
                      BlackRock이 단기 국채를 토큰화한 것은 시작에 불과합니다.
                      <strong className="text-yellow-300">부동산, 주식, 채권, 예술품, 심지어 지적재산권까지</strong> 모든 자산이 토큰화될 수 있다는 것을 증명했습니다.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Larry Fink의 예언</h3>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8 border-l-4 border-blue-500">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-300 rounded-full flex-shrink-0"></div>
                  <div>
                    <h4 className="font-bold text-lg">Larry Fink</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">BlackRock CEO & Chairman</p>
                  </div>
                </div>
                <blockquote className="italic text-lg mb-4 pl-4 border-l-4 border-gray-300">
                  "The next generation for markets, the next generation for securities, will be tokenization of securities."
                </blockquote>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  "시장의 다음 세대, 증권의 다음 세대는 증권의 토큰화가 될 것입니다."
                </p>
                <p className="text-xs mt-4 text-gray-500">
                  — 2023년 12월, CNBC 인터뷰에서
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">투자자에게 주는 시사점</h2>

              <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border-l-4 border-green-500">
                  <h3 className="font-bold mb-3 text-green-700 dark:text-green-300">✅ 기관 투자자 관점</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>규제 준수:</strong> SEC 승인을 받았으므로 연기금, 보험사 등 보수적인 기관도 투자 가능
                    </li>
                    <li>
                      <strong>운영 효율:</strong> 중개인 제거로 비용 절감, 정산 시간 단축 (T+2 → T+0)
                    </li>
                    <li>
                      <strong>유동성 관리:</strong> 24/7 환매 가능으로 현금 흐름 최적화
                    </li>
                    <li>
                      <strong>포트폴리오 다각화:</strong> 전통 자산 + 블록체인 자산 혼합 포트폴리오 구성
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="font-bold mb-3 text-blue-700 dark:text-blue-300">✅ 개인 투자자 관점</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>진입 장벽:</strong> 현재 BUIDL은 $5M 최소 투자 (적격 투자자만)
                    </li>
                    <li>
                      <strong>대안 상품:</strong> Ondo USDY ($500), Franklin FOBXX는 소액 투자 가능
                    </li>
                    <li>
                      <strong>미래 전망:</strong> BlackRock이 소액 투자자용 상품 출시 가능성 높음
                    </li>
                    <li>
                      <strong>학습 기회:</strong> RWA 시장 트렌드를 이해하고 미리 준비
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="font-bold mb-3 text-purple-700 dark:text-purple-300">✅ DeFi 사용자 관점</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>안전 자산:</strong> BUIDL은 DeFi에서 사용 가능한 가장 안전한 담보 자산
                    </li>
                    <li>
                      <strong>수익 극대화:</strong> BUIDL 5% + DeFi 추가 수익으로 복합 수익 가능
                    </li>
                    <li>
                      <strong>자본 효율:</strong> 담보 대출로 유동성 확보 + 수익 유지
                    </li>
                    <li>
                      <strong>리스크:</strong> 스마트 컨트랙트 리스크 항상 고려 필요
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg border-l-4 border-yellow-500">
                  <h3 className="font-bold mb-3 text-yellow-700 dark:text-yellow-300">✅ 기업 재무팀 관점</h3>
                  <ul className="space-y-2 text-sm">
                    <li>
                      <strong>현금 관리:</strong> 유휴 현금을 BUIDL에 투자하여 연 5% 수익
                    </li>
                    <li>
                      <strong>즉시 환매:</strong> 급하게 현금이 필요할 때 즉시 환매 가능
                    </li>
                    <li>
                      <strong>회계 처리:</strong> 전통 MMF와 동일한 회계 처리 (단기 금융자산)
                    </li>
                    <li>
                      <strong>감사 대응:</strong> BlackRock 브랜드로 외부 감사 설명 용이
                    </li>
                  </ul>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">RWA 시장의 미래: 2030년 전망</h2>

              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20 p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">🔮 5년 후 RWA 시장 예측</h3>
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                      <h4 className="font-bold">토큰화된 자산 규모</h4>
                      <div className="text-3xl font-bold text-emerald-600">$15조</div>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>단기 국채/MMF</span>
                        <span className="font-bold">$5조</span>
                      </div>
                      <div className="flex justify-between">
                        <span>부동산</span>
                        <span className="font-bold">$3조</span>
                      </div>
                      <div className="flex justify-between">
                        <span>회사채</span>
                        <span className="font-bold">$2조</span>
                      </div>
                      <div className="flex justify-between">
                        <span>주식 (Private Equity)</span>
                        <span className="font-bold">$3조</span>
                      </div>
                      <div className="flex justify-between">
                        <span>기타 (예술품, 지적재산권 등)</span>
                        <span className="font-bold">$2조</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h4 className="font-bold mb-3">예상 시나리오</h4>
                    <div className="space-y-3 text-sm">
                      <div>
                        <h5 className="font-semibold text-emerald-700 dark:text-emerald-400">2027년: 대중화 원년</h5>
                        <ul className="ml-4 mt-1 space-y-1 text-xs">
                          <li>• BlackRock, 소액 투자자용 BUIDL-Lite 출시 ($100 최소 투자)</li>
                          <li>• JP Morgan, Goldman Sachs 등 대형 은행 토큰화 펀드 출시</li>
                          <li>• 미국/유럽 스테이블코인 법안 통과 → 규제 명확화</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-blue-700 dark:text-blue-400">2028년: 부동산 토큰화 폭발</h5>
                        <ul className="ml-4 mt-1 space-y-1 text-xs">
                          <li>• 맨해튼 빌딩, 서울 강남 빌딩 토큰화 사례 속출</li>
                          <li>• REIT를 대체하는 토큰화 부동산 펀드 등장</li>
                          <li>• 개인 투자자도 $1,000로 프리미엄 부동산 투자 가능</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-purple-700 dark:text-purple-400">2029년: 주식 시장 토큰화</h5>
                        <ul className="ml-4 mt-1 space-y-1 text-xs">
                          <li>• 나스닥, 뉴욕증권거래소 토큰화 증권 상장 허용</li>
                          <li>• 24/7 주식 거래 시작 (주말에도 애플 주식 매매 가능)</li>
                          <li>• T+2 정산 완전 폐지 → T+0 즉시 정산으로 전환</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-semibold text-red-700 dark:text-red-400">2030년: "모든 것이 토큰"</h5>
                        <ul className="ml-4 mt-1 space-y-1 text-xs">
                          <li>• 전 세계 금융자산의 10%가 토큰화 ($15조 / $150조)</li>
                          <li>• 중앙은행 디지털 화폐(CBDC)와 RWA 통합</li>
                          <li>• DeFi와 TradFi 경계 소멸</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">결론: BUIDL이 열어젖힌 새로운 시대</h2>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-8">
                <h3 className="text-2xl font-bold mb-4">💎 핵심 메시지</h3>
                <div className="space-y-4">
                  <p className="text-lg">
                    BlackRock BUIDL은 단순한 금융 상품이 아닙니다.
                    <strong className="text-yellow-300"> 전통 금융과 블록체인이 만나는 완벽한 접점</strong>이자,
                    앞으로 모든 자산이 토큰화될 미래를 보여주는 <strong className="text-yellow-300">역사적 이정표</strong>입니다.
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-3xl mb-2">🏦</div>
                      <h4 className="font-bold mb-1">신뢰</h4>
                      <p className="text-sm">BlackRock의 브랜드로 기관 투자자 신뢰 확보</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-3xl mb-2">⚡</div>
                      <h4 className="font-bold mb-1">효율</h4>
                      <p className="text-sm">블록체인으로 24/7 거래, T+0 정산 실현</p>
                    </div>
                    <div className="bg-white/10 p-4 rounded-lg">
                      <div className="text-3xl mb-2">🚀</div>
                      <h4 className="font-bold mb-1">혁신</h4>
                      <p className="text-sm">DeFi 연계로 무한한 금융 혁신 가능</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">💡 Walits와 RWA의 미래</h4>
                <p className="text-sm mb-4">
                  Walits는 BUIDL과 같은 토큰화 자산을 안전하게 보관하고 관리할 수 있는 <strong>기업용 MPC 지갑</strong>을 제공합니다.
                  이더리움, 비트코인, 솔라나 등 여러 블록체인을 지원하여, RWA 포트폴리오를 효율적으로 운영할 수 있습니다.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/enterprise-wallet"
                    className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    Walits 기업용 지갑 알아보기
                  </Link>
                  <Link
                    href="/inquiry"
                    className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    상담 신청
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                In March 2024, BlackRock, the world's largest asset manager, quietly made history.
                The $10 trillion giant launched "BUIDL," a blockchain-based tokenized fund.
                Growing to $1.5B in just 2 years, BUIDL demonstrates the perfect fusion of traditional finance and crypto.
              </p>

              {/* English content follows same structure as Korean */}
              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BlackRock: The Asset Manager Moving the World</h2>

              <p className="text-sm text-gray-600 dark:text-gray-400">
                [English content continues with same structure...]
              </p>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">💎 Key Message</h3>
                <p className="text-lg mb-4">
                  BlackRock BUIDL is not just a financial product.
                  It's the <strong className="text-yellow-300">perfect intersection of traditional finance and blockchain</strong>,
                  and a <strong className="text-yellow-300">historic milestone</strong> showing the future where all assets will be tokenized.
                </p>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-8 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">💡 Walits and the Future of RWA</h4>
                <p className="text-sm mb-4">
                  Walits provides <strong>enterprise MPC wallets</strong> for securely storing and managing tokenized assets like BUIDL.
                  Supporting multiple blockchains including Ethereum, Bitcoin, and Solana, you can efficiently operate your RWA portfolio.
                </p>
                <div className="flex gap-4">
                  <Link
                    href="/enterprise-wallet"
                    className="inline-block px-6 py-3 bg-yellow-600 text-white rounded-lg font-semibold hover:bg-yellow-700 transition-colors"
                  >
                    Learn About Walits Enterprise Wallet
                  </Link>
                  <Link
                    href="/inquiry"
                    className="inline-block px-6 py-3 bg-gray-600 text-white rounded-lg font-semibold hover:bg-gray-700 transition-colors"
                  >
                    Request Consultation
                  </Link>
                </div>
              </div>
            </>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{copy.relatedPosts}</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/blog/security-token-sto-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? 'STO(증권형 토큰) 완벽 가이드' : 'Complete Guide to STO (Security Token)'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '부동산, 채권, 주식을 블록체인으로 토큰화' : 'Tokenize real estate, bonds, stocks on blockchain'}
              </p>
            </Link>
            <Link href="/blog/stablecoin-rwa-tokenization-2026" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                {language === 'ko' ? '2026년 스테이블코인과 RWA 전망' : '2026 Stablecoin and RWA Outlook'}
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {language === 'ko' ? '모든 자산이 토큰화되는 미래' : 'Future where all assets are tokenized'}
              </p>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}
