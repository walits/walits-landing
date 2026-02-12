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
                          <td className="py-2 text-right text-xs">Ethereum, Solana, Polygon, Avalanche, Arbitrum, Optimism, Aptos, BNB</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">토큰 심볼</td>
                          <td className="py-2 text-right">BUIDL</td>
                        </tr>
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <td className="py-2 font-semibold">시가총액</td>
                          <td className="py-2 text-right text-green-600 font-bold">$2.4B+</td>
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
                    <div className="w-24 text-sm font-bold text-gray-900 dark:text-white">2026년 2월</div>
                    <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-green-500 to-emerald-500" style={{width: '100%'}}></div>
                    </div>
                    <div className="w-32 text-right font-bold text-green-600">$2.4B+ 🚀</div>
                  </div>
                </div>
                <p className="mt-4 text-sm text-gray-600 dark:text-gray-400 text-center">
                  <strong>23개월 만에 240배 성장</strong> — 역대 가장 빠르게 성장한 토큰화 펀드
                </p>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6 border-l-4 border-blue-500">
                <h4 className="font-bold mb-3 text-blue-700 dark:text-blue-300">🆕 최신 개발: Uniswap 통합 (2026년 2월 11일)</h4>
                <p className="text-sm mb-3">
                  BlackRock이 DeFi 영역에 본격 진출하며, BUIDL을 <strong>Uniswap UniswapX</strong>에 상장했습니다.
                  이는 기관급 토큰화 펀드가 탈중앙 거래소(DEX)에 상장된 첫 사례입니다.
                </p>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>거래 방식:</strong> Securitize를 통해 화이트리스트된 적격 투자자만 UniswapX에서 거래 가능
                  </li>
                  <li>
                    <strong>24/7 거래:</strong> 스테이블코인(USDC 등)과 24시간 교환 가능
                  </li>
                  <li>
                    <strong>마켓메이커:</strong> 승인된 마켓메이커가 유동성 제공
                  </li>
                  <li>
                    <strong>시장 반응:</strong> Uniswap 토큰(UNI) 25% 급등
                  </li>
                </ul>
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
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-green-600 font-bold">$2.4B</td>
                      <td className="border border-gray-300 dark:border-gray-700 p-4 text-xs">Ethereum + 7개 체인</td>
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

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">BUIDL이 직면한 법적·규제적 제약</h2>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <p className="text-sm mb-4">
                  BUIDL은 혁신적인 상품이지만, <strong>완벽하지 않습니다</strong>.
                  전통 금융 규제 체계 안에서 운영되기 때문에 여러 제약이 존재하며, 이는 대중화에 큰 장애물이 되고 있습니다.
                </p>
              </div>

              <div className="space-y-6 my-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-red-500">
                  <h3 className="text-xl font-bold mb-4 text-red-700 dark:text-red-300">
                    1. 적격 투자자 제한 (Accredited Investor Only)
                  </h3>
                  <p className="text-sm mb-3">
                    BUIDL은 <strong>Regulation D Rule 506(c)</strong> 사모펀드로, 일반 개인 투자자는 투자할 수 없습니다.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded my-4">
                    <h4 className="font-semibold text-sm mb-2">적격 투자자(Accredited Investor) 기준</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div>
                        <p className="font-semibold mb-2 text-blue-600">개인 투자자</p>
                        <ul className="ml-4 space-y-1">
                          <li>• 연소득 $200K 이상 (부부 $300K)</li>
                          <li>• 또는 순자산 $1M 이상 (거주지 제외)</li>
                          <li>• 또는 Series 7, 65, 82 자격증 보유</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold mb-2 text-purple-600">기관 투자자</p>
                        <ul className="ml-4 space-y-1">
                          <li>• 운용자산 $5M 이상</li>
                          <li>• 은행, 보험사, 연기금</li>
                          <li>• 공인 투자자문사(RIA)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500">
                    <p className="text-xs">
                      <strong>⚠️ 현실:</strong> 미국 가구의 약 10% 미만만이 적격 투자자 기준을 충족합니다.
                      즉, <strong>90% 이상의 일반 투자자는 BUIDL에 투자할 수 없습니다.</strong>
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-orange-500">
                  <h3 className="text-xl font-bold mb-4 text-orange-700 dark:text-orange-300">
                    2. 높은 최소 투자금 & 환매 제한
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded">
                      <h4 className="font-semibold mb-2">최소 투자금</h4>
                      <p className="text-3xl font-bold text-red-600 mb-2">$5,000,000</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        중소기업이나 개인 투자자에게는 진입 장벽이 너무 높습니다.
                        일반 MMF는 $1,000~$10,000부터 시작 가능한 것과 대조적입니다.
                      </p>
                    </div>
                    <div className="bg-orange-50 dark:bg-orange-900/30 p-4 rounded">
                      <h4 className="font-semibold mb-2">최소 환매금</h4>
                      <p className="text-3xl font-bold text-orange-600 mb-2">$250,000</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">
                        T+0 즉시 환매가 가능하지만, 최소 $250K씩만 환매 가능합니다.
                        소액 환매가 필요한 경우 유연성이 떨어집니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-purple-500">
                  <h3 className="text-xl font-bold mb-4 text-purple-700 dark:text-purple-300">
                    3. Transfer Restrictions (양도 제한)
                  </h3>
                  <p className="text-sm mb-3">
                    BUIDL 토큰은 일반적인 암호화폐와 달리 <strong>자유롭게 양도할 수 없습니다</strong>.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded my-4">
                    <h4 className="font-semibold text-sm mb-2">양도 프로세스</h4>
                    <ol className="space-y-2 text-xs ml-4">
                      <li>
                        <strong>1. Securitize 화이트리스트 필수:</strong> 양수인(구매자)이 Securitize를 통해 사전 승인을 받아야 합니다.
                      </li>
                      <li>
                        <strong>2. KYC/AML 검증:</strong> 양수인은 신원 확인, 자금 출처 확인, 제재 리스트 대조 등을 거쳐야 합니다.
                      </li>
                      <li>
                        <strong>3. 적격 투자자 증명:</strong> 양수인이 적격 투자자 기준을 충족함을 증명해야 합니다.
                      </li>
                      <li>
                        <strong>4. 승인 대기:</strong> Securitize의 승인까지 수 시간~수일 소요됩니다.
                      </li>
                      <li>
                        <strong>5. 온체인 전송:</strong> 승인 후에야 비로소 온체인 전송이 가능합니다.
                      </li>
                    </ol>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded">
                      <h5 className="font-semibold text-sm mb-2 text-red-600">❌ 불가능한 것들</h5>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• DEX(Uniswap 등)에서 자유 거래 ❌</li>
                        <li>• 익명 사용자에게 전송 ❌</li>
                        <li>• 국가 제재 대상 지역 전송 ❌</li>
                        <li>• 비적격 투자자에게 판매 ❌</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded">
                      <h5 className="font-semibold text-sm mb-2 text-green-600">✅ 가능한 것들</h5>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• 화이트리스트된 투자자 간 전송 ✓</li>
                        <li>• BlackRock으로 환매 (USDC 수령) ✓</li>
                        <li>• UniswapX 승인된 마켓메이커 거래 ✓</li>
                        <li>• DeFi 담보 예치 (일부 제한적) ✓</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded border-l-4 border-yellow-500 mt-4">
                    <p className="text-xs">
                      <strong>💭 본질적 모순:</strong> "블록체인의 핵심 가치는 누구나 자유롭게 거래할 수 있는 것"인데,
                      BUIDL은 규제 준수를 위해 이를 포기했습니다. 이는 토큰화의 이상과 규제 현실 사이의 타협입니다.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-blue-500">
                  <h3 className="text-xl font-bold mb-4 text-blue-700 dark:text-blue-300">
                    4. 국제 투자자 제한 (지역별 규제 차이)
                  </h3>
                  <p className="text-sm mb-3">
                    BUIDL은 미국 증권법(SEC Regulation D) 하에 운영되므로, <strong>국제 투자자 접근이 제한적</strong>입니다.
                  </p>

                  <div className="overflow-x-auto my-4">
                    <table className="w-full border-collapse text-xs">
                      <thead>
                        <tr className="bg-gray-100 dark:bg-gray-800">
                          <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">국가/지역</th>
                          <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">투자 가능 여부</th>
                          <th className="border border-gray-300 dark:border-gray-700 p-3 text-left">제한 사항</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">미국</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 text-green-600 font-bold">✓ 가능</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3">적격 투자자 기준 충족 필요</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">유럽 (EU/UK)</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 text-yellow-600 font-bold">△ 제한적</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3">MiFID II 전문 투자자만 가능, 추가 서류 필요</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">한국</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 text-red-600 font-bold">✗ 사실상 불가</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3">외국 사모펀드 투자 규제, 외환거래법 제약</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">일본</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 text-red-600 font-bold">✗ 사실상 불가</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3">금융상품거래법, 외국 증권 규제</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">중국</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 text-red-600 font-bold">✗ 완전 차단</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3">암호화폐 거래 금지, 자본 통제</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 font-semibold">제재 대상국</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3 text-red-600 font-bold">✗ 완전 차단</td>
                          <td className="border border-gray-300 dark:border-gray-700 p-3">OFAC 제재: 북한, 이란, 러시아(일부), 시리아 등</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded">
                    <p className="text-xs">
                      <strong>📌 한국 투자자의 어려움:</strong>
                      한국 거주자가 BUIDL에 투자하려면 (1) 미국 적격 투자자 기준 충족, (2) 외환거래법에 따른 해외 금융상품 투자 신고,
                      (3) 세무 신고 복잡성, (4) Securitize 화이트리스트 승인 등 여러 단계를 거쳐야 하며, 사실상 일반 투자자는 불가능합니다.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-indigo-500">
                  <h3 className="text-xl font-bold mb-4 text-indigo-700 dark:text-indigo-300">
                    5. DeFi 연계 시 규제 불확실성
                  </h3>
                  <p className="text-sm mb-3">
                    BUIDL을 DeFi 프로토콜(Aave, Compound 등)에서 사용할 때 <strong>법적 회색지대</strong>가 발생합니다.
                  </p>

                  <div className="space-y-4">
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded">
                      <h4 className="font-semibold text-sm mb-2">🤔 불확실한 질문들</h4>
                      <ul className="space-y-2 text-xs ml-4">
                        <li>
                          <strong>Q1:</strong> BUIDL을 Aave에 담보로 예치하는 것은 "증권 대출"인가?
                          → SEC 규제 대상인가? 추가 등록 필요한가?
                        </li>
                        <li>
                          <strong>Q2:</strong> 비적격 투자자가 DeFi에서 간접적으로 BUIDL에 노출되면?
                          → 예: Aave에서 BUIDL 담보 대출을 받는 것은 적격 투자자 규제 우회인가?
                        </li>
                        <li>
                          <strong>Q3:</strong> 스마트 컨트랙트가 자동으로 BUIDL을 거래하면?
                          → 누가 증권법 준수 책임을 지는가? (컨트랙트 개발자? 사용자? 프로토콜?)
                        </li>
                        <li>
                          <strong>Q4:</strong> BUIDL 수익을 다른 DeFi 프로토콜에 자동 재투자하면?
                          → 투자 자문업(Investment Adviser) 등록 필요한가?
                        </li>
                      </ul>
                    </div>

                    <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-l-4 border-red-500">
                      <h4 className="font-semibold text-sm mb-2 text-red-700 dark:text-red-400">⚠️ 현재 상황</h4>
                      <p className="text-xs mb-2">
                        SEC는 아직 "토큰화 증권의 DeFi 활용"에 대한 명확한 가이드라인을 제시하지 않았습니다.
                      </p>
                      <ul className="text-xs space-y-1 ml-4">
                        <li>• BlackRock은 매우 보수적으로 접근 중 (Securitize 화이트리스트 엄격 운영)</li>
                        <li>• DeFi 프로토콜들은 BUIDL 상장을 조심스럽게 진행 (규제 리스크 고려)</li>
                        <li>• 2026년 현재 Uniswap UniswapX 통합이 첫 사례이지만, 여전히 화이트리스트 제한</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 dark:bg-blue-900/30 p-4 rounded">
                      <h4 className="font-semibold text-sm mb-2">🔮 미래 전망</h4>
                      <p className="text-xs">
                        SEC가 "DeFi에서 증권형 토큰 활용" 규칙을 명확히 하기 전까지는 법적 불확실성이 지속될 것입니다.
                        2027~2028년경 규제 프레임워크가 정립될 것으로 예상되지만, 그 전까지는 조심스러운 접근이 필요합니다.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-pink-500">
                  <h3 className="text-xl font-bold mb-4 text-pink-700 dark:text-pink-300">
                    6. 세무 처리의 복잡성
                  </h3>
                  <p className="text-sm mb-3">
                    BUIDL은 "증권"이지만 "암호화폐 형태"로 존재하므로, 세무 처리가 복잡합니다.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 text-xs">
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded">
                      <h4 className="font-semibold mb-2">전통 MMF 세무 처리</h4>
                      <ul className="ml-4 space-y-1">
                        <li>• 이자 소득으로 처리</li>
                        <li>• 1099-INT 또는 1099-DIV 수령</li>
                        <li>• 단순 명확함</li>
                      </ul>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded">
                      <h4 className="font-semibold mb-2 text-yellow-700 dark:text-yellow-400">BUIDL 세무 처리</h4>
                      <ul className="ml-4 space-y-1">
                        <li className="text-red-600 font-semibold">• 이자 소득 (매일 배당)</li>
                        <li className="text-orange-600 font-semibold">+ 암호화폐 거래 손익 (전송/환매)</li>
                        <li className="text-purple-600 font-semibold">+ DeFi 거래 손익 (담보 대출 등)</li>
                        <li className="text-blue-600 font-semibold">+ 외화 환산 손익 (해외 투자자)</li>
                        <li className="text-pink-600 font-semibold">= 복잡한 세무 신고</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded border-l-4 border-red-500 mt-4">
                    <p className="text-xs">
                      <strong>💸 실전 사례:</strong> 투자자가 BUIDL을 Aave에 담보로 맡기고 USDC를 빌린 후, 그 USDC로 다른 DeFi 프로토콜에서 수익을 냈다면?
                      → (1) BUIDL 배당 소득, (2) Aave 담보 예치/인출 거래 손익, (3) 대출 이자 비용, (4) USDC 활용 수익,
                      (5) 최종 환매 시 손익을 모두 추적하고 신고해야 합니다. 전문 세무사 없이는 거의 불가능합니다.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-teal-500">
                  <h3 className="text-xl font-bold mb-4 text-teal-700 dark:text-teal-300">
                    7. 유동성 & Secondary Market 문제
                  </h3>
                  <p className="text-sm mb-3">
                    BUIDL은 T+0 환매가 가능하지만, <strong>2차 시장(Secondary Market) 유동성은 매우 낮습니다</strong>.
                  </p>

                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded my-4">
                    <h4 className="font-semibold text-sm mb-2">환매 vs 2차 시장 매도</h4>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded">
                        <p className="font-semibold text-green-600 mb-2">✅ BlackRock 환매 (Primary)</p>
                        <ul className="ml-4 space-y-1">
                          <li>• T+0 즉시 환매</li>
                          <li>• $1.00 정확한 NAV 수령</li>
                          <li>• 최소 $250K 제약</li>
                          <li>• USDC로 지급</li>
                        </ul>
                      </div>
                      <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                        <p className="font-semibold text-red-600 mb-2">❌ 2차 시장 매도 (Secondary)</p>
                        <ul className="ml-4 space-y-1">
                          <li>• 화이트리스트된 구매자 찾기 어려움</li>
                          <li>• 할인 매도 가능성 ($0.98~$0.99)</li>
                          <li>• 거래 완결까지 시간 소요</li>
                          <li>• UniswapX도 제한적 (마켓메이커만)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/30 p-4 rounded">
                    <p className="text-xs">
                      <strong>📊 비교:</strong> 전통 MMF는 수조 달러 규모의 2차 시장이 존재하지만,
                      BUIDL은 $2.4B 규모임에도 2차 시장 거래량이 매우 적습니다. 대부분 투자자는 BlackRock 직접 환매를 이용합니다.
                    </p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border-l-4 border-gray-500">
                  <h3 className="text-xl font-bold mb-4 text-gray-700 dark:text-gray-300">
                    8. 규제 변화 리스크
                  </h3>
                  <p className="text-sm mb-3">
                    BUIDL은 현재 SEC 규제를 준수하지만, <strong>규제가 변경되면 운영 방식이 크게 바뀔 수 있습니다</strong>.
                  </p>

                  <div className="space-y-3 text-xs">
                    <div className="bg-blue-50 dark:bg-blue-900/30 p-3 rounded">
                      <p className="font-semibold mb-1">시나리오 1: 규제 완화</p>
                      <p>
                        SEC가 소액 투자자에게 토큰화 증권을 개방하면 ($10K~$100K 최소 투자)?
                        → BUIDL 시가총액 폭발적 성장 가능
                      </p>
                    </div>
                    <div className="bg-yellow-50 dark:bg-yellow-900/30 p-3 rounded">
                      <p className="font-semibold mb-1">시나리오 2: 규제 강화</p>
                      <p>
                        SEC가 "토큰화 증권의 DeFi 활용"을 엄격히 제한하면?
                        → BUIDL의 DeFi 연계 활용 불가능, 매력도 감소
                      </p>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/30 p-3 rounded">
                      <p className="font-semibold mb-1">시나리오 3: 국제 규제 충돌</p>
                      <p>
                        EU, 한국, 일본 등이 미국 사모펀드 투자를 더 제한하면?
                        → 글로벌 확장 어려움, 미국 시장에만 갇힘
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 p-4 rounded border-l-4 border-gray-500 mt-4">
                    <p className="text-xs">
                      <strong>🔮 2026년 현재:</strong> 미국 의회에서 "스테이블코인 법안"과 "디지털 자산 규제 법안" 논의 중입니다.
                      이 법안들이 통과되면 BUIDL 같은 토큰화 증권의 규제 환경이 크게 바뀔 수 있습니다.
                      투자자는 규제 변화를 지속적으로 모니터링해야 합니다.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 p-8 rounded-xl my-8 border-2 border-red-500">
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">💭 핵심 메시지: 혁신과 규제의 줄다리기</h3>
                <p className="text-sm mb-4">
                  BUIDL은 <strong className="text-red-600">기술적으로는 완벽하지만, 규제적으로는 제약이 많은</strong> 상품입니다.
                  BlackRock은 의도적으로 보수적인 접근을 택했으며, 이는 장기적 신뢰 구축을 위한 전략입니다.
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-xs">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-green-600">✅ 현실적 성과</h4>
                    <ul className="ml-4 space-y-1">
                      <li>• SEC 승인을 받아 합법적 운영</li>
                      <li>• 23개월 만에 $2.4B 성장</li>
                      <li>• 기관 투자자 신뢰 확보</li>
                      <li>• 다른 금융사들의 벤치마크</li>
                    </ul>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <h4 className="font-semibold mb-2 text-red-600">❌ 남은 과제</h4>
                    <ul className="ml-4 space-y-1">
                      <li>• 일반 투자자 접근 불가 (90%+ 제외)</li>
                      <li>• 국제 투자자 제한</li>
                      <li>• DeFi 연계 규제 불확실성</li>
                      <li>• 2차 시장 유동성 부족</li>
                    </ul>
                  </div>
                </div>
                <p className="text-sm mt-4">
                  <strong>결론:</strong> BUIDL은 "RWA 혁명의 시작"이지만 "완성"은 아닙니다.
                  진정한 대중화를 위해서는 <strong className="text-orange-600">규제 명확화와 투자자 접근성 개선</strong>이 필수적입니다.
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

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">용어 설명</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl my-8">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                  본문에 등장하는 금융 및 블록체인 전문 용어를 쉽게 풀이합니다.
                </p>
                <div className="space-y-6">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">AUM (Assets Under Management)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      자산운용사가 고객을 대신해 운용하고 있는 총 자산 규모입니다.
                      BlackRock의 AUM $10.5조는 고객들이 BlackRock에 맡긴 돈의 총합으로, 회사 규모와 신뢰도를 나타내는 핵심 지표입니다.
                      참고로 한국 GDP가 약 $1.5조이므로, BlackRock의 AUM은 한국 GDP의 약 7배에 달합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-green-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">MMF (Money Market Fund)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      단기 금융상품(T-Bills, CP, CD 등)에 투자하는 초단기 펀드입니다.
                      유동성이 높고 안전하지만 수익률은 낮습니다. 일반적으로 연 3~5% 수준의 수익을 제공하며,
                      현금처럼 빠르게 인출할 수 있어 기업들이 운영 자금을 보관하는 용도로 많이 사용합니다.
                      BUIDL은 블록체인 기반 MMF의 대표 사례입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-purple-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">T-Bills (Treasury Bills)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      미국 정부가 발행하는 만기 1년 이하의 단기 국채입니다.
                      이자를 직접 지급하지 않고 액면가보다 낮은 가격에 발행되어(할인 발행), 만기 시 액면가로 상환되는 방식입니다.
                      전 세계에서 가장 안전한 자산으로 평가받으며, BUIDL의 기초 자산으로 사용됩니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">RP (Repo / Reverse Repo)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Repo(환매조건부채권)는 채권을 담보로 단기 자금을 빌리는 거래입니다.
                      Reverse Repo는 그 반대로, 자금을 빌려주고 채권을 담보로 받는 거래입니다.
                      주로 은행과 금융기관이 초단기(하룻밤~수일) 자금을 운용할 때 사용하며, BUIDL 같은 MMF의 주요 투자 대상입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-red-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">T+0, T+2, T+3</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      거래일(T, Trade date)로부터 결제가 완료되기까지 걸리는 날짜를 나타냅니다.
                      T+0은 거래 당일 즉시 결제, T+2는 거래 후 2영업일 뒤 결제를 의미합니다.
                      전통 펀드는 보통 T+2~T+3이지만, BUIDL은 블록체인 기술로 T+0 즉시 환매가 가능합니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-orange-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">적격 투자자 (Accredited Investor)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      미국 증권법(Regulation D)에서 정의하는 고액 자산가 또는 전문 투자자를 말합니다.
                      개인의 경우 연소득 $200K 이상 또는 순자산 $1M 이상, 기관의 경우 운용자산 $5M 이상이어야 합니다.
                      BUIDL은 최소 투자금 $5M으로 적격 투자자만 참여할 수 있는 사모펀드입니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">LTV (Loan to Value)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      담보 가치 대비 대출 가능 비율입니다. 예를 들어 LTV 80%는 $100 가치의 자산을 담보로 $80까지 빌릴 수 있다는 의미입니다.
                      DeFi 프로토콜에서 BUIDL을 담보로 대출받을 때, LTV 80%라면 $10M BUIDL로 $8M USDC를 빌릴 수 있습니다.
                      LTV가 높을수록 더 많이 빌릴 수 있지만, 담보 가치 하락 시 청산 위험이 커집니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-pink-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">DeFi (Decentralized Finance)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      탈중앙 금융을 의미하며, 은행이나 증권사 같은 중개인 없이 블록체인 스마트 컨트랙트로 금융 서비스를 제공하는 시스템입니다.
                      대출, 예금, 거래소, 파생상품 등 전통 금융의 모든 기능을 탈중앙화된 방식으로 구현합니다.
                      BUIDL은 DeFi 프로토콜(Aave, Compound 등)과 연계하여 담보 대출, 유동성 공급 등에 활용할 수 있습니다.
                    </p>
                  </div>

                  <div className="border-l-4 border-teal-500 pl-4">
                    <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">RWA (Real World Assets)</h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      현실 세계의 자산을 블록체인 토큰으로 표현한 것입니다.
                      부동산, 국채, 주식, 예술품, 상품 등 물리적/전통적 자산을 디지털 토큰화하여 블록체인에서 거래할 수 있게 만듭니다.
                      BUIDL은 미국 국채를 기초 자산으로 하는 RWA의 대표적인 예시입니다.
                    </p>
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
