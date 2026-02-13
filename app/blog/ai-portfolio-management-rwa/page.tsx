'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function AIPortfolioManagementRWAPage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  const copy = {
    ko: {
      category: 'AI 자산관리',
      title: 'AI로 실물자산(RWA) 포트폴리오 관리하는 법',
      date: '2026년 2월 13일',
      readTime: '15분 읽기',
      backToBlog: '← 블로그로 돌아가기',
    },
    en: {
      category: 'AI Asset Management',
      title: 'Managing Real World Asset (RWA) Portfolio with AI',
      date: 'February 13, 2026',
      readTime: '15 min read',
      backToBlog: '← Back to Blog',
    },
  }[language];

  return (
    <article className="min-h-screen bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <header className="mb-12">
          <div className="flex items-center justify-between mb-4">
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">
            {copy.title}
          </h1>
          <div className="flex items-center gap-4 text-gray-600 dark:text-gray-400 text-sm">
            <time>{copy.date}</time>
            <span>•</span>
            <span>{copy.readTime}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="mb-12 -mx-4 md:mx-0 overflow-hidden rounded-xl">
          <img
            src="/blog/ai-portfolio.jpg"
            alt={language === 'ko' ? 'AI 포트폴리오 관리' : 'AI Portfolio Management'}
            className="w-full h-auto object-cover"
          />
        </div>

        {language === 'ko' ? (
          <>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                부동산 10%, 채권 30%, 주식 60%... 자산 배분 비율을 어떻게 정해야 할까요?
                시장이 변하면 또 조정해야 하는데, AI가 자동으로 관리해준다면?
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">RWA란?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Real World Assets (실물 자산)</h3>
              <p>
                블록체인에 토큰화된 실제 자산들을 의미합니다:
              </p>
              <ul>
                <li><strong>부동산</strong>: 빌딩, 아파트, 토지</li>
                <li><strong>채권</strong>: 국채, 회사채, 프로젝트 채권</li>
                <li><strong>주식</strong>: 비상장 스타트업 지분</li>
                <li><strong>수집품</strong>: 미술품, 와인, 명품 시계</li>
                <li><strong>원자재</strong>: 금, 은, 석유 (토큰화)</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">왜 RWA가 중요한가?</h4>
                <p className="mb-0">
                  비트코인/이더리움 같은 암호화폐는 변동성이 너무 큽니다 (하루 10% 등락도 흔함).
                  반면 RWA는 실물 자산에 기반하므로 안정적이고, 배당 수익도 있습니다.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">2024-2026 RWA 시장 폭발적 성장</h2>

              <div className="bg-gradient-to-r from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8 border-2 border-emerald-500">
                <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">📊 시장 규모 12배 성장</h3>

                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-gray-500 mb-2">2024년</div>
                    <div className="text-3xl font-bold text-blue-600">$1B</div>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">초기 시장</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-orange-500 mb-2">2026년</div>
                    <div className="text-3xl font-bold text-orange-600">$12B</div>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">현재 (12배 성장)</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg text-center">
                    <div className="text-4xl font-bold text-green-500 mb-2">2030년</div>
                    <div className="text-3xl font-bold text-green-600">$15T (추정)</div>
                    <p className="text-sm mt-2 text-gray-600 dark:text-gray-400">BCG 전망</p>
                  </div>
                </div>

                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                  <h4 className="font-bold mb-4 text-gray-900 dark:text-white">왜 급성장하는가?</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong>전통 금융기관의 대거 진입:</strong> BlackRock, JPMorgan, Franklin Templeton 등 대형 자산운용사들이
                        블록체인 기반 펀드를 속속 출시하며 시장을 주도하고 있습니다.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong>높은 금리 환경의 매력:</strong> 2024-2026년 미국 기준금리 4-5%대 유지로
                        단기 국채·MMF 기반 RWA 수익률이 연 4-5%에 달해 투자자들의 수요가 급증했습니다.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong>24/7 글로벌 거래:</strong> 블록체인 특성상 주말·공휴일 관계없이 언제든 거래 가능하여
                        전통 증권 대비 유동성과 접근성이 크게 향상되었습니다.
                      </div>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-600 font-bold mt-1">✓</span>
                      <div>
                        <strong>소액 투자 가능:</strong> $100 단위로 조각 투자 가능하여 기존에는 수억~수천억 자산에
                        접근하지 못했던 일반 투자자들도 참여할 수 있게 되었습니다.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">주요 RWA 프로토콜 & 사례</h3>

              <div className="space-y-6 my-8">
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-6 rounded-lg border-l-4 border-blue-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-black p-4 rounded-lg">
                      <span className="text-white font-bold text-2xl">BR</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">BlackRock BUIDL - 세계 최대 토큰화 펀드</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>규모:</strong> $2.4B+ (2025년 기준)<br/>
                            <strong>수익률:</strong> 연 4.5-5.2% (변동)<br/>
                            <strong>자산:</strong> 미국 단기 국채, RP, 현금<br/>
                            <strong>배당:</strong> 일별 산정, 월 1회 온체인 지급
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            <strong>의미:</strong> 세계 최대 자산운용사가 블록체인 펀드를 정식 출시하면서
                            "RWA는 실험이 아닌 현실"임을 증명했습니다. 기관 투자자들의 대량 유입 계기가 되었습니다.
                          </p>
                        </div>
                      </div>
                      <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded text-xs">
                        <strong>🔗 블록체인:</strong> Ethereum, Solana, Polygon, Arbitrum 등 8개 체인 지원<br/>
                        <strong>💰 최소 투자:</strong> $5M (적격 투자자 전용)
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-lg border-l-4 border-purple-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-purple-600 p-4 rounded-lg">
                      <span className="text-white font-bold text-2xl">FT</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Franklin Templeton OnChain US Government Money Fund</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>규모:</strong> $400M+ (2025년)<br/>
                            <strong>특징:</strong> 최초로 Stellar·Polygon에서 출시<br/>
                            <strong>자산:</strong> 미국 정부 증권, RP<br/>
                            <strong>수익:</strong> 안정적 단기 수익
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            <strong>혁신:</strong> 2021년부터 블록체인 펀드를 운영하며 RWA 시장을 개척한
                            선구자입니다. 개인 투자자도 접근 가능한 낮은 진입 장벽이 특징입니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-lg border-l-4 border-green-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-green-600 p-4 rounded-lg">
                      <span className="text-white font-bold text-2xl">ON</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Ondo Finance - DeFi와 TradFi의 가교</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>주요 상품:</strong><br/>
                            • USDY: 미국 국채 담보 토큰 (연 5%)<br/>
                            • OUSG: 단기 미국 국채 토큰<br/>
                            <strong>TVL:</strong> $500M+ (2025년)
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            <strong>특징:</strong> DeFi 프로토콜과 통합하여 USDY를 Aave, Compound 등에서
                            담보로 사용 가능합니다. "실물 자산 수익 + DeFi 유동성"을 동시에 누릴 수 있습니다.
                          </p>
                        </div>
                      </div>
                      <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded text-xs">
                        <strong>🎯 활용:</strong> USDY를 Aave에 담보로 맡기고 USDC 대출 → 원금 수익 유지하며 유동성 확보
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-lg border-l-4 border-orange-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-orange-600 p-4 rounded-lg">
                      <span className="text-white font-bold text-2xl">MK</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">MakerDAO RWA 투자 - DeFi의 RWA 편입</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>DAI 담보 구성:</strong><br/>
                            • 미국 단기 국채: $1.2B+<br/>
                            • 회사채: $500M+<br/>
                            • 전통 암호화폐 담보: 감소 중
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            <strong>전략:</strong> DeFi 프로토콜이 암호화폐 변동성에서 벗어나
                            안정적인 실물 자산으로 수익을 창출하는 모델입니다. DAI 발행 담보의 50% 이상이 RWA로 전환되었습니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/20 dark:to-blue-900/20 p-6 rounded-lg border-l-4 border-cyan-600">
                  <div className="flex items-start gap-4">
                    <div className="bg-cyan-600 p-4 rounded-lg">
                      <span className="text-white font-bold text-2xl">CF</span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-xl mb-2 text-gray-900 dark:text-white">Centrifuge - 실물 자산 토큰화 인프라</h4>
                      <div className="grid md:grid-cols-2 gap-4 mb-3">
                        <div>
                          <p className="text-sm text-gray-700 dark:text-gray-300">
                            <strong>토큰화 자산:</strong><br/>
                            • 부동산 모기지<br/>
                            • 무역 금융 (Trade Finance)<br/>
                            • 송장 팩토링 (Invoice Factoring)
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-4 rounded">
                          <p className="text-xs text-gray-600 dark:text-gray-400">
                            <strong>혁신:</strong> 중소기업 대출, 부동산 모기지 등 비유동적 자산을 토큰화하여
                            DeFi 프로토콜에서 자금을 조달할 수 있게 합니다. "실물 경제와 DeFi의 연결"을 구현합니다.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">금리와 RWA 수익률의 관계</h3>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-8 rounded-xl my-8 border-l-4 border-yellow-500">
                <h4 className="font-bold mb-4 text-xl text-gray-900 dark:text-white">⚠️ 2024-2026년 "고금리 환경"이 RWA 붐을 만들었다</h4>

                <div className="space-y-4 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">현재 상황 (2026년)</p>
                    <ul className="space-y-1 ml-4">
                      <li>• 미국 기준금리: 4.5-5.0%</li>
                      <li>• 미국 단기 국채 (T-Bill) 수익률: 4.5-5.0%</li>
                      <li>• BlackRock BUIDL 수익률: 4.5-5.2%</li>
                      <li>• 스테이블코인(USDT/USDC) 이자: 거의 0% (DeFi 제외)</li>
                    </ul>
                    <p className="mt-3 text-xs text-gray-600 dark:text-gray-400">
                      → 암호화폐 시장 참여자들이 "아무 것도 안 하고 연 5% 받는" RWA로 대거 이동
                    </p>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="font-semibold mb-2 text-red-800 dark:text-red-300">미래 리스크: 금리 하락 시나리오</p>
                    <p className="text-xs mb-2">
                      만약 연준이 2027-2028년 금리를 2%대로 내리면?
                    </p>
                    <ul className="space-y-1 ml-4 text-xs">
                      <li>• BlackRock BUIDL 수익률: 5% → 2%로 하락</li>
                      <li>• RWA 투자 매력 감소 → 자금 이탈 가능</li>
                      <li>• 부동산·회사채 등 대안 RWA 수요 증가 예상</li>
                    </ul>
                    <div className="mt-3 p-2 bg-white dark:bg-gray-800 rounded">
                      <p className="text-xs font-semibold">💡 AI 포트폴리오 관리의 중요성</p>
                      <p className="text-xs">
                        금리 변화에 따라 <strong>국채 RWA ↔ 부동산 RWA ↔ 회사채 RWA</strong> 간
                        자동 리밸런싱이 필수입니다. 사람이 수동으로 대응하기는 어렵고, AI가 시장 데이터를 분석하여
                        최적 배분을 실시간 조정해야 합니다.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">DeFi + RWA 융합 트렌드</h3>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl my-8">
                <h4 className="font-bold mb-4 text-xl text-gray-900 dark:text-white">🔗 "실물 자산으로 DeFi 수익 극대화"</h4>

                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">시나리오 1: RWA 담보 대출</h5>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                      <pre>
{`보유 자산: BlackRock BUIDL $100K (연 5% 수익)
     ↓
Aave에 담보로 예치
     ↓
USDC $70K 대출 (70% LTV)
     ↓
대출 USDC로 추가 투자 (DeFi Yield Farming, 연 8%)

최종 수익:
✅ BUIDL 연 5% 계속 발생 ($5K/년)
✅ USDC $70K 운용 수익 ($5.6K/년, 8% 가정)
✅ 대출 이자 연 3% 지불 (-$2.1K/년)
━━━━━━━━━━━━━━━━━━━━━━
순수익: $8.5K/년 (원금 대비 8.5%)
vs BUIDL만 보유: $5K/년 (5%)
→ 70% 추가 수익 창출`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
                    <h5 className="font-bold mb-3 text-gray-900 dark:text-white">시나리오 2: RWA + LP 토큰 듀얼 수익</h5>
                    <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded text-sm">
                      <pre>
{`Ondo USDY $50K 보유 (연 5% 미국 국채 수익)
     ↓
Curve Finance에 USDY/USDC LP 제공
     ↓
LP 토큰 수령
     ↓
결과:
✅ USDY 기본 수익 5% 유지
✅ Curve LP 수수료 추가 (1-2%)
✅ CRV 토큰 보상 추가 (변동)
━━━━━━━━━━━━━━━━━━━━━━
총 수익률: 7-9% (복합)`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-purple-50 dark:bg-purple-900/30 p-4 rounded">
                    <p className="font-semibold mb-2 text-purple-800 dark:text-purple-300">🤖 AI의 역할</p>
                    <ul className="text-sm space-y-1 ml-4">
                      <li>• <strong>리스크 모니터링:</strong> LTV 비율이 위험 수준 도달 시 자동 담보 추가</li>
                      <li>• <strong>수익률 최적화:</strong> DeFi 프로토콜 간 APY 비교하여 자동 이동</li>
                      <li>• <strong>청산 방지:</strong> 가격 변동 시 자동 리밸런싱으로 청산 위험 사전 차단</li>
                      <li>• <strong>가스비 최적화:</strong> 네트워크 혼잡도 분석하여 최저 가스비 타이밍에 거래 실행</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold mt-12 mb-4 text-gray-900 dark:text-white">규제 이슈와 투자자 보호</h3>

              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-8 border-l-4 border-red-500">
                <h4 className="font-bold mb-4 text-red-800 dark:text-red-300">⚠️ RWA 투자 시 반드시 확인해야 할 것들</h4>
                <div className="space-y-3 text-sm">
                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">1. 증권형 토큰 = 증권 규제 적용</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      대부분의 RWA는 증권으로 분류되어 각국 금융당국의 규제를 받습니다.
                      미국은 SEC Regulation D/A+, 한국은 자본시장법이 적용됩니다.
                      <strong>무등록·무인가 RWA는 투자하지 마세요.</strong>
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">2. 적격 투자자 요건 확인</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      BlackRock BUIDL은 최소 $5M, 일부 RWA는 순자산/소득 요건이 있습니다.
                      요건 미달 시 투자 불가하거나 법적 보호를 받지 못할 수 있습니다.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">3. 유동성 리스크</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      RWA 토큰은 일반 암호화폐 거래소에서 거래되지 않습니다.
                      ATS (Alternative Trading System) 또는 발행사 자체 플랫폼에서만 거래 가능하므로,
                      <strong>급하게 현금화가 어려울 수 있습니다.</strong>
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">4. 스마트 컨트랙트 리스크</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      블록체인 기반이므로 스마트 컨트랙트 버그, 해킹 리스크가 존재합니다.
                      대형 플랫폼(BlackRock, Franklin Templeton 등)은 감사를 받지만, 100% 안전을 보장하지는 않습니다.
                    </p>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-4 rounded">
                    <p className="font-semibold mb-2 text-gray-900 dark:text-white">5. 세금 처리 불명확</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400">
                      RWA 배당·매매 차익에 대한 세금 처리가 국가마다 다르고 아직 명확하지 않은 경우가 많습니다.
                      세무사 자문을 받거나, AI ST 지갑의 세금 추적 기능을 활용하세요.
                    </p>
                  </div>
                </div>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">전통적 자산 관리의 문제점</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. 복잡한 리밸런싱</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">시나리오: 목표 포트폴리오</h4>
                <pre className="text-sm">
{`초기 투자: 1억 원
목표 배분:
 - 부동산 STO: 40% (4,000만 원)
 - 채권 STO: 30% (3,000만 원)
 - 주식 STO: 30% (3,000만 원)

6개월 후 시장 변동:
 - 부동산 STO: +10% → 4,400만 원 (42%)
 - 채권 STO: +2% → 3,060만 원 (29%)
 - 주식 STO: +20% → 3,600만 원 (34%)

→ 비율이 틀어짐! 리밸런싱 필요
→ 수동으로 계산하고 매도/매수 필요
→ 시간 소모, 수수료 발생`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 시장 모니터링 부담</h3>
              <ul>
                <li><strong>뉴스 확인</strong>: 부동산 시장 과열? 금리 인상?</li>
                <li><strong>가격 추적</strong>: 보유 자산 가격 매일 확인</li>
                <li><strong>타이밍 놓침</strong>: 매도 기회를 놓쳐서 손실</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 감정적 투자</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <ul>
                  <li>❌ <strong>공포 매도</strong>: 10% 하락하자마자 패닉 매도</li>
                  <li>❌ <strong>욕심 보유</strong>: 50% 올랐는데 더 오를 거라 믿고 보유 → 결국 하락</li>
                  <li>❌ <strong>FOMO</strong>: 다들 사니까 나도 산다 → 고점 매수</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">해결책: AI 자동 포트폴리오 관리</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. AI 자동 리밸런싱</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">AI 자동 실행 (매월 1일)</h4>
                <pre className="text-sm">
{`[AI ST 지갑 - 자동 리밸런싱]

목표 비율: 부동산 40% | 채권 30% | 주식 30%
현재 비율: 부동산 42% | 채권 29% | 주식 34%

AI 분석:
 ✓ 부동산 2% 초과 → 220만 원 매도
 ✓ 채권 1% 부족 → 105만 원 매수
 ✓ 주식 4% 초과 → 420만 원 매도

AI 자동 실행:
 1. 부동산 STO 220만 원 매도 ✅
 2. 주식 STO 420만 원 매도 ✅
 3. 채권 STO 640만 원 매수 ✅

결과:
 부동산: 4,180만 원 (40%) ✅
 채권: 3,140만 원 (30%) ✅
 주식: 3,180만 원 (30%) ✅

수수료: 0.1% (6,400원)
실행 시간: 5초`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 리스크 기반 자동 조정</h3>
              <p>
                시장 상황에 따라 AI가 자동으로 안전 자산 비중을 조정합니다:
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">시나리오: 시장 급락</h4>
                <pre className="text-sm">
{`[2026-03-15 - AI 시장 분석]

📉 주식 시장 급락 감지
 - S&P 500: -5% (오늘)
 - 공포 지수(VIX): 40 (공포 상태)

AI 자동 조치:
 ✓ 주식 STO 비중 30% → 15% 감소
 ✓ 채권 STO 비중 30% → 45% 증가
 ✓ 안전 자산으로 피신

실행:
 주식 STO 1,500만 원 매도
 채권 STO 1,500만 원 매수

→ 급락 피해 최소화
→ 시장 안정 후 다시 조정`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 수익 자동 재투자</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">배당/임대료 자동 재투자</h4>
                <pre className="text-sm">
{`[매월 배당 수익]

부동산 STO 임대료: 20만 원
채권 STO 이자: 10만 원
주식 STO 배당금: 5만 원
총 수익: 35만 원

AI 자동 재투자:
 1. 현재 포트폴리오 분석
 2. 가장 저평가된 자산 찾기
 3. 35만 원 자동 재투자

이번 달 선택: 부동산 STO
이유: 최근 가격 조정으로 5% 저평가

→ 복리 효과로 수익 가속화`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">AI 포트폴리오 전략</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. 보수적 전략 (안정 추구)</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">자산</th>
                      <th className="text-left p-2">비중</th>
                      <th className="text-left p-2">예상 수익률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">국채 STO</td>
                      <td className="p-2">50%</td>
                      <td className="p-2">연 3%</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">부동산 STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">연 5%</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">회사채 STO</td>
                      <td className="p-2">15%</td>
                      <td className="p-2">연 6%</td>
                    </tr>
                    <tr>
                      <td className="p-2">주식 STO</td>
                      <td className="p-2">5%</td>
                      <td className="p-2">연 10%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>예상 포트폴리오 수익률:</strong> 연 4.3%<br/>
                  <strong>위험도:</strong> 낮음<br/>
                  <strong>추천 대상:</strong> 은퇴자, 안정 추구 투자자
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 균형 전략 (중간 리스크)</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">자산</th>
                      <th className="text-left p-2">비중</th>
                      <th className="text-left p-2">예상 수익률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">부동산 STO</td>
                      <td className="p-2">40%</td>
                      <td className="p-2">연 5%</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">채권 STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">연 5%</td>
                    </tr>
                    <tr>
                      <td className="p-2">주식 STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">연 10%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>예상 포트폴리오 수익률:</strong> 연 6.5%<br/>
                  <strong>위험도:</strong> 중간<br/>
                  <strong>추천 대상:</strong> 30~50대, 장기 투자자
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 공격적 전략 (고수익 추구)</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">자산</th>
                      <th className="text-left p-2">비중</th>
                      <th className="text-left p-2">예상 수익률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">스타트업 지분 STO</td>
                      <td className="p-2">50%</td>
                      <td className="p-2">연 20% (고위험)</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">주식 STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">연 10%</td>
                    </tr>
                    <tr>
                      <td className="p-2">부동산 STO</td>
                      <td className="p-2">20%</td>
                      <td className="p-2">연 5%</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>예상 포트폴리오 수익률:</strong> 연 14%<br/>
                  <strong>위험도:</strong> 높음<br/>
                  <strong>추천 대상:</strong> 20~30대, 고위험 감수 가능자
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">AI의 스마트 기능</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. 시장 데이터 분석</h3>
              <p>
                AI가 24시간 연중무휴로 모니터링하는 주요 데이터:
              </p>
              <ul className="space-y-2">
                <li><strong>가격 변동</strong>: 보유하고 있는 모든 자산의 실시간 가격을 지속적으로 추적합니다.</li>
                <li><strong>거래량</strong>: 비정상적인 거래량 급증이나 급감을 자동으로 감지하여 이상 신호를 포착합니다.</li>
                <li><strong>뉴스 모니터링</strong>: 부동산 규제 변경, 금리 변동 등 시장에 영향을 미치는 뉴스를 실시간으로 분석합니다.</li>
                <li><strong>경제 지표</strong>: GDP 성장률, 실업률, 인플레이션율 등 거시 경제 지표를 종합적으로 고려합니다.</li>
                <li><strong>감정 분석</strong>: SNS와 뉴스 기사를 분석하여 시장 참여자들의 전반적인 투자 심리를 파악합니다.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. 개인화 추천</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">AI 프로파일링</h4>
                <pre className="text-sm">
{`[투자자 A 프로필]

나이: 35세
직업: IT 기업 근무
투자 경험: 5년
리스크 성향: 중간
투자 목표: 노후 준비 (30년 후)

AI 추천:
 ✓ 균형 전략 적용
 ✓ 부동산 STO 40% (안정적 임대 수익)
 ✓ 채권 STO 30% (포트폴리오 안정성)
 ✓ 주식 STO 30% (장기 성장)

예상 결과:
 30년 후 1억 원 → 6억 원 (연 6% 복리)`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. 세금 최적화</h3>
              <p>
                AI가 세금 효율을 고려한 매매 타이밍을 제안합니다:
              </p>
              <ul>
                <li><strong>손실 실현</strong>: 수익 난 자산과 손실 난 자산 동시 매도로 세금 절감</li>
                <li><strong>장기 보유</strong>: 단기 양도세 피하고 장기 보유 세제 혜택</li>
                <li><strong>배당 타이밍</strong>: 배당락일 전후 매매로 세금 최적화</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">실제 성과 비교</h2>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">백테스트: 2020~2025년 (5년)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">전략</th>
                      <th className="text-left p-2">초기 투자</th>
                      <th className="text-left p-2">5년 후</th>
                      <th className="text-left p-2">수익률</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">수동 관리 (일반인)</td>
                      <td className="p-2">1억 원</td>
                      <td className="p-2">1.2억 원</td>
                      <td className="p-2">+20%</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">AI 자동 관리</td>
                      <td className="p-2">1억 원</td>
                      <td className="p-2">1.45억 원</td>
                      <td className="p-2">+45%</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">차이</td>
                      <td className="p-2"></td>
                      <td className="p-2 font-bold">+2,500만 원</td>
                      <td className="p-2 font-bold">+25%p</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>왜 AI가 더 나은가?</strong><br/>
                  - 감정 없는 매매 (공포/욕심 배제)<br/>
                  - 완벽한 타이밍 (24/7 모니터링)<br/>
                  - 자동 리밸런싱 (비용 최소화)
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">시작하기</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">3단계로 AI 포트폴리오 구축</h3>
                <ol className="space-y-4">
                  <li>
                    <strong>Step 1: 프로필 설정</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">나이, 투자 목표, 리스크 성향 입력 (3분)</p>
                  </li>
                  <li>
                    <strong>Step 2: AI 전략 선택</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">보수적/균형/공격적 중 선택 (AI가 맞춤 추천)</p>
                  </li>
                  <li>
                    <strong>Step 3: 자동 투자 시작</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">입금 후 AI가 알아서 매수/리밸런싱</p>
                  </li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">가격 (Coming Soon)</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  곧 출시 예정
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI ST 지갑 - 자동 포트폴리오 관리</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">₩9,900<span className="text-lg text-gray-600 dark:text-gray-400">/월</span></div>
                <p className="text-lg mb-4">또는 운용 자산의 0.5% (연)</p>
                <ul className="mb-6 space-y-2">
                  <li>AI가 자동으로 포트폴리오를 최적 비율로 재조정하여 균형을 유지합니다.</li>
                  <li>24시간 연중무휴로 시장을 모니터링하여 중요한 변화를 즉시 감지합니다.</li>
                  <li>시장 리스크 수준에 따라 자산 배분을 자동으로 조정하여 안정성을 확보합니다.</li>
                  <li>배당이나 임대료 등의 수익을 자동으로 재투자하여 복리 효과를 극대화합니다.</li>
                  <li>세금 효율을 고려한 매매 타이밍을 제안하여 세금 부담을 최소화합니다.</li>
                  <li>개인의 투자 성향과 목표에 맞춘 맞춤형 전략을 제공합니다.</li>
                </ul>
                <Link
                  href="/ai-st-wallet"
                  className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  출시 알림 신청
                </Link>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">AI에게 자산 관리 맡기고 시간을 아끼세요</h3>
                <p className="mb-6">
                  매일 차트를 보고 고민하는 대신, AI가 자동으로 최적의 포트폴리오를 관리합니다.
                  베타 테스트 참여자 모집 중!
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
                <Link href="/blog/security-token-sto-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">STO(증권형 토큰) 완벽 가이드</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">실물 자산 토큰화의 모든 것</p>
                </Link>
                <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">기업용 지갑 선택 가이드</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">8분 완벽 정리</p>
                </Link>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="lead text-xl text-gray-700 dark:text-gray-300">
                Real estate 10%, bonds 30%, stocks 60%... How should you determine asset allocation ratios?
                When markets change, you need to adjust again. What if AI could manage it all automatically?
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">What is RWA?</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Real World Assets</h3>
              <p>
                Real assets tokenized on the blockchain:
              </p>
              <ul>
                <li><strong>Real Estate</strong>: Buildings, apartments, land</li>
                <li><strong>Bonds</strong>: Government bonds, corporate bonds, project bonds</li>
                <li><strong>Stocks</strong>: Private startup equity</li>
                <li><strong>Collectibles</strong>: Art, wine, luxury watches</li>
                <li><strong>Commodities</strong>: Gold, silver, oil (tokenized)</li>
              </ul>

              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-8 border-l-4 border-blue-500">
                <h4 className="font-bold mb-2 text-gray-900 dark:text-white">Why RWA Matters</h4>
                <p className="mb-0">
                  Cryptocurrencies like Bitcoin/Ethereum have excessive volatility (10% daily swings are common).
                  In contrast, RWAs are stable as they're backed by real assets, and provide dividend income.
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Problems with Traditional Asset Management</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Complex Rebalancing</h3>
              <div className="bg-red-50 dark:bg-red-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Scenario: Target Portfolio</h4>
                <pre className="text-sm">
{`Initial investment: ₩100M
Target allocation:
 - Real Estate STO: 40% (₩40M)
 - Bond STO: 30% (₩30M)
 - Stock STO: 30% (₩30M)

After 6 months of market movement:
 - Real Estate STO: +10% → ₩44M (42%)
 - Bond STO: +2% → ₩30.6M (29%)
 - Stock STO: +20% → ₩36M (34%)

→ Ratios are off! Rebalancing needed
→ Manual calculation and buy/sell required
→ Time consuming, fees incurred`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Market Monitoring Burden</h3>
              <ul>
                <li><strong>News checking</strong>: Real estate market overheating? Interest rate hikes?</li>
                <li><strong>Price tracking</strong>: Daily checking of asset prices</li>
                <li><strong>Missed timing</strong>: Missing sell opportunities leading to losses</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Emotional Investing</h3>
              <div className="bg-yellow-50 dark:bg-yellow-900/20 p-6 rounded-lg my-6 border-l-4 border-yellow-500">
                <ul>
                  <li>❌ <strong>Panic selling</strong>: Selling immediately on 10% drop</li>
                  <li>❌ <strong>Greedy holding</strong>: Up 50% but believing it'll go higher → eventually drops</li>
                  <li>❌ <strong>FOMO</strong>: Buying because everyone else is → buying at peak</li>
                </ul>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Solution: AI Automated Portfolio Management</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. AI Auto Rebalancing</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">AI Auto Execute (1st of every month)</h4>
                <pre className="text-sm">
{`[AI ST Wallet - Auto Rebalancing]

Target ratio: Real Estate 40% | Bonds 30% | Stocks 30%
Current ratio: Real Estate 42% | Bonds 29% | Stocks 34%

AI Analysis:
 ✓ Real Estate 2% excess → Sell ₩2.2M
 ✓ Bonds 1% short → Buy ₩1.05M
 ✓ Stocks 4% excess → Sell ₩4.2M

AI Auto Execute:
 1. Sell Real Estate STO ₩2.2M ✅
 2. Sell Stock STO ₩4.2M ✅
 3. Buy Bond STO ₩6.4M ✅

Result:
 Real Estate: ₩41.8M (40%) ✅
 Bonds: ₩31.4M (30%) ✅
 Stocks: ₩31.8M (30%) ✅

Fee: 0.1% (₩6,400)
Execution time: 5 seconds`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Risk-Based Auto Adjustment</h3>
              <p>
                AI automatically adjusts safe asset allocation based on market conditions:
              </p>
              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Scenario: Market Crash</h4>
                <pre className="text-sm">
{`[2026-03-15 - AI Market Analysis]

📉 Stock market crash detected
 - S&P 500: -5% (today)
 - Fear Index (VIX): 40 (fear state)

AI Auto Actions:
 ✓ Stock STO weight 30% → 15% reduction
 ✓ Bond STO weight 30% → 45% increase
 ✓ Flee to safe assets

Execution:
 Sell Stock STO ₩15M
 Buy Bond STO ₩15M

→ Minimize crash damage
→ Readjust after market stabilizes`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Auto Reinvestment of Returns</h3>
              <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Dividend/Rent Auto Reinvestment</h4>
                <pre className="text-sm">
{`[Monthly Dividend Income]

Real Estate STO rent: ₩200K
Bond STO interest: ₩100K
Stock STO dividends: ₩50K
Total income: ₩350K

AI Auto Reinvestment:
 1. Analyze current portfolio
 2. Find most undervalued asset
 3. Auto reinvest ₩350K

This month's selection: Real Estate STO
Reason: 5% undervalued due to recent price adjustment

→ Accelerate returns with compound effect`}
                </pre>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">AI Portfolio Strategies</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Conservative Strategy (Stability)</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">Asset</th>
                      <th className="text-left p-2">Weight</th>
                      <th className="text-left p-2">Expected Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Government Bond STO</td>
                      <td className="p-2">50%</td>
                      <td className="p-2">3% annual</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Real Estate STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">5% annual</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Corporate Bond STO</td>
                      <td className="p-2">15%</td>
                      <td className="p-2">6% annual</td>
                    </tr>
                    <tr>
                      <td className="p-2">Stock STO</td>
                      <td className="p-2">5%</td>
                      <td className="p-2">10% annual</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Expected portfolio return:</strong> 4.3% annual<br/>
                  <strong>Risk level:</strong> Low<br/>
                  <strong>Recommended for:</strong> Retirees, stability seekers
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Balanced Strategy (Medium Risk)</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">Asset</th>
                      <th className="text-left p-2">Weight</th>
                      <th className="text-left p-2">Expected Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Real Estate STO</td>
                      <td className="p-2">40%</td>
                      <td className="p-2">5% annual</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Bond STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">5% annual</td>
                    </tr>
                    <tr>
                      <td className="p-2">Stock STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">10% annual</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Expected portfolio return:</strong> 6.5% annual<br/>
                  <strong>Risk level:</strong> Medium<br/>
                  <strong>Recommended for:</strong> Ages 30-50, long-term investors
                </p>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Aggressive Strategy (High Returns)</h3>
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">Asset</th>
                      <th className="text-left p-2">Weight</th>
                      <th className="text-left p-2">Expected Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Startup Equity STO</td>
                      <td className="p-2">50%</td>
                      <td className="p-2">20% annual (high risk)</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Stock STO</td>
                      <td className="p-2">30%</td>
                      <td className="p-2">10% annual</td>
                    </tr>
                    <tr>
                      <td className="p-2">Real Estate STO</td>
                      <td className="p-2">20%</td>
                      <td className="p-2">5% annual</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Expected portfolio return:</strong> 14% annual<br/>
                  <strong>Risk level:</strong> High<br/>
                  <strong>Recommended for:</strong> Ages 20-30, high risk tolerant
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">AI Smart Features</h2>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Market Data Analysis</h3>
              <p>
                Key data AI monitors 24/7:
              </p>
              <ul className="space-y-2">
                <li><strong>Price movements</strong>: Continuously tracks real-time prices of all held assets.</li>
                <li><strong>Trading volume</strong>: Automatically detects abnormal volume spikes or drops to catch anomaly signals.</li>
                <li><strong>News monitoring</strong>: Real-time analysis of market-affecting news like real estate regulation changes, interest rate movements.</li>
                <li><strong>Economic indicators</strong>: Comprehensively considers macroeconomic indicators like GDP growth, unemployment rate, inflation rate.</li>
                <li><strong>Sentiment analysis</strong>: Analyzes SNS and news articles to gauge overall market participant investment sentiment.</li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Personalized Recommendations</h3>
              <div className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg my-6">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">AI Profiling</h4>
                <pre className="text-sm">
{`[Investor A Profile]

Age: 35
Occupation: IT company employee
Investment experience: 5 years
Risk appetite: Medium
Investment goal: Retirement (30 years)

AI Recommendation:
 ✓ Apply balanced strategy
 ✓ Real Estate STO 40% (stable rental income)
 ✓ Bond STO 30% (portfolio stability)
 ✓ Stock STO 30% (long-term growth)

Expected result:
 ₩100M → ₩600M in 30 years (6% annual compound)`}
                </pre>
              </div>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Tax Optimization</h3>
              <p>
                AI suggests trade timing considering tax efficiency:
              </p>
              <ul>
                <li><strong>Loss harvesting</strong>: Reduce taxes by simultaneously selling profitable and loss-making assets</li>
                <li><strong>Long-term holding</strong>: Avoid short-term capital gains tax and benefit from long-term tax advantages</li>
                <li><strong>Dividend timing</strong>: Optimize taxes through trading around ex-dividend dates</li>
              </ul>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Actual Performance Comparison</h2>

              <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-lg my-8">
                <h4 className="font-bold mb-4 text-gray-900 dark:text-white">Backtest: 2020-2025 (5 years)</h4>
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <th className="text-left p-2">Strategy</th>
                      <th className="text-left p-2">Initial</th>
                      <th className="text-left p-2">After 5 years</th>
                      <th className="text-left p-2">Return</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">Manual (Regular person)</td>
                      <td className="p-2">₩100M</td>
                      <td className="p-2">₩120M</td>
                      <td className="p-2">+20%</td>
                    </tr>
                    <tr className="border-b border-gray-300 dark:border-gray-700">
                      <td className="p-2">AI Auto Management</td>
                      <td className="p-2">₩100M</td>
                      <td className="p-2">₩145M</td>
                      <td className="p-2">+45%</td>
                    </tr>
                    <tr>
                      <td className="p-2 font-bold">Difference</td>
                      <td className="p-2"></td>
                      <td className="p-2 font-bold">+₩25M</td>
                      <td className="p-2 font-bold">+25%p</td>
                    </tr>
                  </tbody>
                </table>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-4">
                  <strong>Why AI performs better?</strong><br/>
                  - Emotionless trading (excludes fear/greed)<br/>
                  - Perfect timing (24/7 monitoring)<br/>
                  - Auto rebalancing (cost minimization)
                </p>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Getting Started</h2>

              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg my-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Build AI Portfolio in 3 Steps</h3>
                <ol className="space-y-4">
                  <li>
                    <strong>Step 1: Set Profile</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Enter age, investment goals, risk appetite (3 min)</p>
                  </li>
                  <li>
                    <strong>Step 2: Choose AI Strategy</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Select conservative/balanced/aggressive (AI gives custom recommendations)</p>
                  </li>
                  <li>
                    <strong>Step 3: Start Auto Investing</strong>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Deposit and AI handles buying/rebalancing</p>
                  </li>
                </ol>
              </div>

              <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">Pricing (Coming Soon)</h2>

              <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 rounded-xl my-8">
                <div className="inline-block px-4 py-1 bg-yellow-400 text-gray-900 rounded-full text-sm font-semibold mb-4">
                  Coming Soon
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">AI ST Wallet - Auto Portfolio Management</h3>
                <div className="text-4xl font-bold text-purple-600 mb-4">₩9,900<span className="text-lg text-gray-600 dark:text-gray-400">/month</span></div>
                <p className="text-lg mb-4">Or 0.5% of managed assets (annual)</p>
                <ul className="mb-6 space-y-2">
                  <li>AI automatically rebalances portfolio to optimal ratios to maintain balance.</li>
                  <li>24/7 market monitoring to immediately detect important changes.</li>
                  <li>Automatically adjusts asset allocation based on market risk levels for stability.</li>
                  <li>Auto reinvests returns like dividends and rent to maximize compound effects.</li>
                  <li>Suggests trade timing considering tax efficiency to minimize tax burden.</li>
                  <li>Provides personalized strategies tailored to individual investment preferences and goals.</li>
                </ul>
                <Link
                  href="/ai-st-wallet"
                  className="inline-block px-8 py-4 bg-purple-600 text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Request Launch Notification
                </Link>
              </div>

              <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-xl my-12 text-center">
                <h3 className="text-2xl font-bold mb-4">Let AI Manage Your Assets and Save Time</h3>
                <p className="mb-6">
                  Instead of watching charts and worrying daily, AI automatically manages your optimal portfolio.
                  Beta testers wanted!
                </p>
                <Link
                  href="/inquiry"
                  className="inline-block px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Apply for Beta
                </Link>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Related Articles</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/blog/security-token-sto-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Complete STO (Security Token) Guide</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Everything about real asset tokenization</p>
                </Link>
                <Link href="/blog/enterprise-crypto-wallet-guide" className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Enterprise Wallet Selection Guide</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Complete guide in 8 minutes</p>
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </article>
  );
}
