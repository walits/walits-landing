'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PendleDeepDivePage() {
  const [language, setLanguage] = useState<'ko' | 'en'>('ko');

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-white">
      {/* Header */}
      <div className="max-w-3xl mx-auto px-6 pt-10 pb-4 flex items-center justify-between">
        <Link href="/blog" className="text-sm text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors">
          ← 블로그 목록
        </Link>
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
          {(['ko', 'en'] as const).map((l) => (
            <button key={l} onClick={() => setLanguage(l)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${language === l ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm' : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'}`}>
              {l === 'ko' ? '한국어' : 'English'}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-violet-900 via-purple-900 to-slate-900">
          <Image src="/blog/pendle.jpg" alt="Pendle Finance" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-violet-700/80 text-white px-3 py-1 rounded-full">
              {language === 'ko' ? 'DeFi 시리즈 11' : 'DeFi Series 11'}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 11 — Pendle Finance: 수익률을 거래하는 DeFi 채권 시장</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">PT · YT · 고정 수익 · 수익률 레버리지 · RWA × DeFi</p>
            <p className="text-gray-400 text-xs font-mono mb-10">2026년 4월 6일 · 25분</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'TVL', value: '$4B+', sub: '2025년 기준' },
                { label: '출시', value: '2021', sub: 'Binance Labs 투자' },
                { label: '지원 체인', value: '4+', sub: 'ETH·Arb·BSC·OP' },
                { label: '지원 자산', value: '30+', sub: 'stETH·USDY·BUIDL' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Pendle란? — 수익률을 거래하는 DeFi 프로토콜</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              전통 금융에는 채권 시장이 있다. 국채를 사면 만기에 원금과 이자를 돌려받는다. 금리가 떨어질 것 같으면 미리 채권을 사서 현재 높은 금리를 고정하고, 금리가 오를 것 같으면 채권을 팔아 유연하게 대응한다. 수익률 자체가 거래 대상이 된다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              DeFi에는 이런 시장이 없었다. stETH를 예치하면 이자를 받는데, 그 이자율이 앞으로 오를지 내릴지 베팅하거나 헷징할 방법이 없었다. <strong>Pendle이 바로 이 문제를 해결한다.</strong> stETH나 USDC 볼트의 수익을 원금과 이자로 분리해 각각 독립적으로 거래할 수 있게 만든 DeFi 수익률 시장이다.
            </p>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-3">Pendle Finance 한 줄 정의</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                수익 발생 자산(stETH, aUSDC, USDY 등)을 <strong>원금(PT)과 이자(YT)로 분리</strong>해 각각 독립적으로 거래할 수 있게 하는 <strong>DeFi 수익률 거래 프로토콜</strong>. 고정 수익 확보와 수익률 레버리지 모두 가능.
              </p>
            </div>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · 핵심 개념: SY → PT + YT 분리</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Pendle의 핵심은 하나의 수익 발생 자산을 두 가지 토큰으로 쪼개는 것이다. 이 과정을 단계별로 이해하면 나머지 모든 개념이 자연스럽게 따라온다.
            </p>

            {/* PT/YT Split Diagram */}
            <div className="my-8 rounded-2xl overflow-hidden border border-violet-200 dark:border-violet-800">
              <div className="bg-violet-600 px-6 py-4">
                <p className="text-white font-bold text-sm uppercase tracking-wider">SY → PT + YT 분리 다이어그램</p>
              </div>

              {/* Step 1: SY */}
              <div className="bg-violet-50 dark:bg-violet-900/20 px-6 py-5 border-b border-violet-200 dark:border-violet-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</div>
                  <p className="font-bold text-violet-700 dark:text-violet-300 text-sm">SY (Standardized Yield) — 수익 발생 자산</p>
                </div>
                <div className="ml-11 grid grid-cols-3 gap-2">
                  {['stETH (Lido)', 'aUSDC (Aave)', 'USDY (Ondo)'].map((a, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-2 text-center border border-violet-100 dark:border-violet-900">
                      <p className="text-xs font-semibold text-violet-700 dark:text-violet-300">{a}</p>
                    </div>
                  ))}
                </div>
                <p className="ml-11 text-xs text-gray-500 dark:text-gray-400 mt-2">Pendle에 래핑(wrap)되어 표준화된 수익 발생 자산</p>
              </div>

              {/* Arrow */}
              <div className="bg-white dark:bg-gray-950 px-6 py-3 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="text-2xl text-violet-500">↓</div>
                  <p className="text-xs font-bold text-violet-600 dark:text-violet-400">Pendle이 분리(Tokenize)</p>
                </div>
              </div>

              {/* Step 2: PT + YT */}
              <div className="bg-white dark:bg-gray-950 px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* PT */}
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">PT</div>
                      <p className="font-bold text-blue-700 dark:text-blue-300 text-sm">Principal Token (원금 토큰)</p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>만기에 원금 100% 보장</li>
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>현재 <strong>할인된 가격</strong>에 거래됨</li>
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>예: PT-stETH 6개월 만기, 현재 97원</li>
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>→ 만기까지 보유 시 3% 고정 수익 확정</li>
                    </ul>
                    <div className="mt-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-blue-700 dark:text-blue-300">채권과 동일한 원리</p>
                      <p className="text-xs text-gray-500 mt-0.5">할인 매수 → 만기 액면가 수령</p>
                    </div>
                  </div>
                  {/* YT */}
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">YT</div>
                      <p className="font-bold text-amber-700 dark:text-amber-300 text-sm">Yield Token (이자 토큰)</p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>만기까지 발생하는 <strong>모든 이자</strong> 수취</li>
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>매우 낮은 가격 (이자분만 반영)</li>
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>수익률 레버리지 효과 내장</li>
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>만기에 가까울수록 가치 소멸(Time Decay)</li>
                    </ul>
                    <div className="mt-3 bg-amber-100 dark:bg-amber-900/40 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-amber-700 dark:text-amber-300">투기적 · 레버리지 수단</p>
                      <p className="text-xs text-gray-500 mt-0.5">APY 상승 베팅 시 사용</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">핵심 관계식</p>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <div className="bg-violet-100 dark:bg-violet-900/30 rounded-lg px-4 py-2 text-center">
                      <p className="text-sm font-bold text-violet-700 dark:text-violet-300">SY 1개</p>
                      <p className="text-xs text-gray-500">수익 발생 자산</p>
                    </div>
                    <span className="text-gray-400 font-bold text-lg">=</span>
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg px-4 py-2 text-center">
                      <p className="text-sm font-bold text-blue-700 dark:text-blue-300">PT 1개</p>
                      <p className="text-xs text-gray-500">원금 부분</p>
                    </div>
                    <span className="text-gray-400 font-bold text-lg">+</span>
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg px-4 py-2 text-center">
                      <p className="text-sm font-bold text-amber-700 dark:text-amber-300">YT 1개</p>
                      <p className="text-xs text-gray-500">이자 부분</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">만기 시: PT → 원금 100% 상환 / YT → 0으로 소멸</p>
                </div>
              </div>
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · PT로 고정 수익 확정하는 법</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              PT는 채권과 완전히 같은 원리로 작동한다. 할인된 가격에 사서 만기에 액면가(100)를 받는다. 이 차이가 곧 고정 수익이다. 시장 APY가 얼마로 변하든 상관없다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">실전 예시: Ondo USDY로 고정 수익 확보</p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">상황</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Ondo USDY의 현재 APY는 5.1%다. 하지만 미국 금리 인하 사이클이 시작될 것 같아 앞으로 APY가 3%대로 떨어질 것 같다.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">행동</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Pendle에서 <strong className="text-blue-600 dark:text-blue-400">PT-USDY</strong>를 구매한다. 현재 가격: <strong>97.5 USDC</strong>. 만기(6개월 후) 시 100 USDC로 상환.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">결과</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">6개월 후 시장 APY가 3%로 떨어졌다. 하지만 나는 이미 <strong className="text-green-600 dark:text-green-400">2.5% 고정 수익</strong>(연환산 ~5%)을 확보했다. 시장 APY에 무관하게 수익 확정.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">$100,000 투자 시 시나리오 비교</p>
                <div className="space-y-2">
                  {[
                    { label: '그냥 USDY 보유 (APY 3%로 하락 시)', value: '+$3,000', pct: 'w-[40%]', color: 'bg-orange-200 dark:bg-orange-900/40', textColor: 'text-orange-600 dark:text-orange-400' },
                    { label: 'PT-USDY 매수 (2.5% × 2 = 연 ~5% 확정)', value: '+$5,000', pct: 'w-[67%]', color: 'bg-violet-300 dark:bg-violet-700', textColor: 'text-violet-700 dark:text-violet-300 font-bold' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500 w-52 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className={`h-2 rounded-full ${row.pct} ${row.color}`} />
                      </div>
                      <span className={`w-16 text-right ${row.textColor}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-violet-500 mt-2">PT 전략이 $2,000 더 수령 — 금리 하락 헷징 완벽 성공</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">채권과 완전히 같은 원리</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                미국 10년물 국채를 액면가 이하에 사면, 만기에 액면가를 받는다. PT-USDY도 정확히 같다. DeFi 역사상 처음으로 <strong>온체인에서 고정 수익 채권을 살 수 있게 된 것</strong>이다.
              </p>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · YT로 수익률 레버리지하는 법</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              YT는 PT와 정반대의 성격을 가진다. PT가 보수적인 채권이라면, YT는 수익률에 대한 레버리지 베팅이다. 가격이 매우 낮지만 그만큼 레버리지 배수가 크다.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">YT 레버리지 계산: 1 USDY를 쪼개면</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center border border-violet-100 dark:border-violet-900">
                  <p className="text-xs text-gray-500 mb-1">원래 자산</p>
                  <p className="text-2xl font-bold text-violet-700 dark:text-violet-300">1 USDY</p>
                  <p className="text-xs text-gray-400 mt-1">= 1.00 USDC 가치</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-gray-500 mb-1">분리 후 PT</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">PT 1개</p>
                  <p className="text-xs text-gray-400 mt-1">= 0.975 USDC 가치</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-center border border-amber-200 dark:border-amber-800">
                  <p className="text-xs text-gray-500 mb-1">분리 후 YT</p>
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">YT 1개</p>
                  <p className="text-xs text-gray-400 mt-1">= 0.025 USDC 가치</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-3">레버리지 계산</p>
                <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>YT 1개 가격</span>
                    <span className="font-bold">0.025 USDC</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>YT 1개가 받는 이자</span>
                    <span className="font-bold">USDY 1개 전체 이자 수취</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-amber-100 dark:border-amber-900 pt-2">
                    <span className="font-bold text-amber-700 dark:text-amber-300">실질 레버리지 배수</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 text-lg">1 ÷ 0.025 = 40배</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-1">APY 상승 시 (YT 매수 전략)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">USDY APY가 5% → 8%로 상승하면 YT 가치도 급등. 0.025 USDC에 산 YT가 큰 이자 수익을 냄.</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-1">APY 하락 시 (YT 매도 전략)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">YT를 현재 높은 값에 매도해 고정 수익 실현. APY 하락 전에 미리 팔면 이익.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">YT 투자 전 반드시 알아야 할 것</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                YT는 만기가 다가올수록 가치가 자동으로 감소한다 (Time Decay). APY가 변하지 않아도 YT 가격은 떨어진다. 옵션의 시간가치 소멸과 같은 원리다. <strong>YT는 단기 수익률 방향 베팅에 적합하고, 장기 보유는 위험하다.</strong>
              </p>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Pendle AMM — 수익률 전용 AMM</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Pendle의 AMM은 Uniswap과 다르다. 일반 AMM은 두 자산의 비율만 고려하지만, Pendle AMM은 <strong>시간이 지날수록 PT 가격이 원금(1)에 수렴한다</strong>는 특성을 AMM 곡선에 직접 반영한다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: '수익률 곡선 AMM',
                  icon: '📈',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  points: [
                    'Uniswap: x × y = k (단순 비율 유지)',
                    'Pendle: PT의 만기 수렴 특성을 곡선에 내장',
                    '시간이 지날수록 PT-SY 교환 비율이 자동 조정됨',
                    '수익률(implied APY)을 직접 거래하는 구조',
                  ],
                },
                {
                  title: 'LP 예치 구조',
                  icon: '💧',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  points: [
                    'LP는 PT + SY를 함께 예치',
                    '수익률 거래 수수료로 수익 창출',
                    '기본 SY 수익 + 거래 수수료 + PENDLE 토큰 리워드',
                    '만기에 가까울수록 impermanent loss 감소 (PT가 1에 수렴)',
                  ],
                },
                {
                  title: '만기 메커니즘',
                  icon: '⏰',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  points: [
                    '만기 도달 시: PT → 원금 1:1 상환',
                    '만기 도달 시: YT → 0으로 소멸',
                    '만기 전 PT 매도 가능 (시장 가격으로)',
                    '만기 전 유동성이 낮아질 수 있어 주의 필요',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <p className="font-bold text-gray-800 dark:text-gray-200 mb-3">{item.title}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · 실전 전략 3가지</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Pendle에서 취할 수 있는 포지션은 크게 세 가지다. 자신의 리스크 성향에 맞는 전략을 선택하면 된다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  type: '보수형',
                  strategy: 'PT 매수',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  points: [
                    'APY 하락 헷징',
                    '고정 수익 사전 확보',
                    '만기 보유 시 무손실',
                    '채권 대체재',
                  ],
                  risk: '낮음',
                  riskColor: 'text-green-600 dark:text-green-400',
                },
                {
                  type: '투기형',
                  strategy: 'YT 매수',
                  color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10',
                  badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
                  titleColor: 'text-amber-700 dark:text-amber-300',
                  points: [
                    'APY 상승 레버리지 수익',
                    '소액으로 큰 이자 노출',
                    '최대 40배+ 레버리지',
                    'Time Decay 주의',
                  ],
                  risk: '높음',
                  riskColor: 'text-red-600 dark:text-red-400',
                },
                {
                  type: 'LP형',
                  strategy: 'PT-SY LP',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  titleColor: 'text-violet-700 dark:text-violet-300',
                  points: [
                    '거래 수수료 수익',
                    '기본 SY 수익 유지',
                    'PENDLE 리워드 추가',
                    '만기 임박 시 IL 감소',
                  ],
                  risk: '중간',
                  riskColor: 'text-yellow-600 dark:text-yellow-400',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.badge}`}>{s.type}</span>
                    <span className={`text-xs font-semibold ${s.riskColor}`}>리스크: {s.risk}</span>
                  </div>
                  <p className={`text-lg font-bold mb-3 ${s.titleColor}`}>{s.strategy}</p>
                  <ul className="space-y-1.5">
                    {s.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-violet-500 flex-shrink-0">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Pendle × RWA — 국채 금리가 DeFi로 들어왔다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2023~2025년, Pendle에서 가장 큰 성장을 이끈 것은 RWA(Real World Asset)다. Ondo의 USDY, BlackRock의 BUIDL 같은 국채 기반 스테이블코인이 Pendle에 대거 유입됐다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">왜 RWA가 Pendle에 모이는가?</p>

              <div className="space-y-4">
                {[
                  {
                    title: '국채 금리 하락 예상 헷징',
                    desc: '미 연준이 금리를 인하하면 USDY APY도 떨어진다. Pendle에서 PT-USDY를 사두면 현재 5.1% APY를 고정 확보할 수 있다. 기관 투자자들이 이 구조를 채권 헷지 수단으로 적극 활용.',
                    color: 'border-l-4 border-violet-500 pl-4',
                  },
                  {
                    title: 'DeFi 최초의 진짜 고정 수익 상품',
                    desc: 'Aave에 예치하면 변동 APY다. Morpho도 변동이다. 하지만 PT-USDY는 만기까지 수익률이 100% 고정된다. 기관이 DeFi에서 찾던 상품이 드디어 생긴 것이다.',
                    color: 'border-l-4 border-blue-500 pl-4',
                  },
                  {
                    title: 'BlackRock BUIDL × Pendle',
                    desc: 'BlackRock의 온체인 머니마켓펀드 BUIDL이 Pendle에 올라왔다. PT-BUIDL을 사면 세계 최대 자산운용사의 펀드 수익을 고정 APY로 받는 구조. 전통 금융과 DeFi의 완벽한 교차점.',
                    color: 'border-l-4 border-green-500 pl-4',
                  },
                ].map((item, i) => (
                  <div key={i} className={`${item.color}`}>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-violet-700 dark:text-violet-400 mb-2">RWA + Pendle의 의미</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                국채 금리를 온체인에서 고정 수익으로 거래할 수 있게 됐다는 것은, <strong>DeFi에 드디어 채권 시장이 생겼다</strong>는 뜻이다. Pendle은 TradFi의 이자율 스왑(Interest Rate Swap) 시장을 DeFi로 가져온 프로토콜이다.
              </p>
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · walits에서의 Pendle — 고정 APY 예치 옵션</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              walits의 미래 로드맵에서 Pendle은 핵심 역할을 한다. 현재 walits는 변동 APY 예치를 지원하지만, Pendle을 통해 완전히 새로운 예치 카테고리가 가능해진다.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  phase: '현재',
                  title: '변동 APY 예치',
                  badge: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
                  color: 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900',
                  desc: 'USDY, aUSDC 등 변동 APY 상품 제공. 시장 금리에 따라 수익률 변동.',
                },
                {
                  phase: '로드맵',
                  title: 'PT 기반 고정 APY 예치',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  desc: 'walits가 USDY PT를 보유해, 유저에게 "고정 APY 보장형 예치" 옵션 제공. 예: "6개월 고정 4.8% APY 예치" 상품 출시 가능.',
                },
                {
                  phase: '장기 비전',
                  title: '수익률 맞춤형 예치 포트폴리오',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  desc: '단기 고정, 장기 변동, 레버리지 수익 등 유저 성향별 포트폴리오 자동 구성. 이주 노동자·유학생에게 "고향 송금 전까지 X개월 고정 수익" 최적화.',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badge}`}>{item.phase}</span>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* S9 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · 리스크 — 눈 뜨고 투자하기</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: '복잡성 리스크',
                  level: '중요',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'PT·YT·SY·AMM 개념을 제대로 이해하지 않으면 손실 가능성이 높다. Pendle은 DeFi에서 가장 개념적으로 복잡한 프로토콜 중 하나. 충분한 학습 후 소액부터 시작 권장.',
                },
                {
                  title: 'YT 시간가치 소멸 (Time Decay)',
                  level: '구조적',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'YT는 만기가 다가올수록 가치가 0으로 수렴한다. APY가 변하지 않아도 YT 보유자는 시간이 지날수록 손해다. 옵션 매수자의 시간가치 소멸과 동일. 단기 방향성 베팅에만 적합.',
                },
                {
                  title: '만기 전 유동성 리스크',
                  level: '주의',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: '만기가 임박하면 해당 풀의 거래량과 유동성이 감소한다. PT를 만기 전에 매도하려 하면 슬리피지가 발생할 수 있다. 만기까지 보유할 수 없는 자금으로 PT를 사는 것은 위험.',
                },
                {
                  title: '기초 자산 리스크',
                  level: '기본',
                  lc: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  desc: 'PT-USDY는 USDY 자체의 리스크(Ondo 스마트컨트랙트, 규제 리스크)를 그대로 안고 간다. Pendle 레이어에 더해 기초 자산의 리스크도 별도로 평가해야 한다.',
                },
                {
                  title: '스마트컨트랙트 리스크',
                  level: '낮음 (감사 완료)',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: 'Pendle은 복수의 독립 보안 감사를 완료했다. 그러나 AMM 구조의 복잡성으로 인해 일반 프로토콜보다 공격 표면이 넓다. 이론적 취약점은 항상 존재한다.',
                },
              ].map((r, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{r.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.lc}`}>{r.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* S10 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · 비교표 — Pendle vs Morpho vs Aave vs Ondo</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 my-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">항목</th>
                    <th className="px-4 py-3 text-left font-bold text-violet-600 dark:text-violet-400">Pendle</th>
                    <th className="px-4 py-3 text-left font-bold text-indigo-600 dark:text-indigo-400">Morpho</th>
                    <th className="px-4 py-3 text-left font-bold text-blue-600 dark:text-blue-400">Aave</th>
                    <th className="px-4 py-3 text-left font-bold text-green-600 dark:text-green-400">Ondo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['수익 유형', 'PT 고정 / YT 변동', '대출 이자 (변동)', '예치 이자 (변동)', '국채 기반 고정'],
                    ['리스크 수준', '중~고 (YT)', '중', '낮음', '낮음'],
                    ['고정/변동', '고정 가능 (PT)', '변동', '변동', '사실상 고정'],
                    ['복잡도', '높음', '중간', '낮음', '낮음'],
                    ['레버리지', 'YT 40배+', '없음', '없음', '없음'],
                    ['최소 투자', '제한 없음', '제한 없음', '제한 없음', '$500+'],
                    ['만기 개념', '있음', '없음', '없음', '없음'],
                    ['TVL', '$4B+', '$3B+', '$15B+', '$700M+'],
                  ].map(([label, pendle, morpho, aave, ondo], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-2.5 font-semibold text-xs text-gray-700 dark:text-gray-300">{label}</td>
                      <td className="px-4 py-2.5 text-xs text-violet-600 dark:text-violet-400 font-medium">{pendle}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{morpho}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{aave}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{ondo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-violet-700 dark:text-violet-400 mb-1">핵심 차별점</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Pendle만이 DeFi에서 <strong>고정 수익과 레버리지 수익률을 동시에</strong> 제공한다. Aave·Morpho는 변동 금리, Ondo는 고정에 가깝지만 레버리지 없음. Pendle은 이 모든 스펙트럼을 하나의 프로토콜에서 커버한다.
              </p>
            </div>

            {/* S11 - Conclusion */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">DeFi에 채권 시장이 생겼다</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  수익률을 사고팔 수 있는 시대가 왔다. Pendle은 TradFi에서 수십 년간 기관 전용이었던 이자율 스왑(IRS) 시장을 DeFi로 가져왔다. 누구나 고정 수익을 확보하거나, 수익률 상승에 레버리지 베팅을 할 수 있다.
                </p>
                <p>
                  RWA의 부상과 함께 Pendle의 역할은 더욱 커지고 있다. BlackRock BUIDL, Ondo USDY 같은 국채 기반 자산이 Pendle에서 거래되면서, <strong className="text-white">온체인 채권 시장의 인프라</strong>로 자리잡아가고 있다.
                </p>
                <p>
                  walits에서 Pendle은 "고정 APY 보장형 예치" 옵션의 핵심 인프라가 될 것이다. 이주 노동자나 유학생이 "X개월 후 송금할 자금을 지금 고정 수익으로 굴린다"는 시나리오가, <strong className="text-white">Pendle의 PT 구조로 처음으로 완벽하게 가능해진다.</strong>
                </p>
                <p className="text-gray-400 text-xs">
                  * 수익률 수치는 시장 상황에 따라 변동됩니다. 예시 수치는 특정 시점을 기준으로 합니다. 투자 전 반드시 공식 문서와 감사 보고서를 검토하세요. 본 글은 투자 권유가 아닙니다.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 11 — Pendle Finance: The DeFi Bond Market That Trades Yield</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">PT · YT · Fixed Income · Yield Leverage · RWA × DeFi</p>
            <p className="text-gray-400 text-xs font-mono mb-10">April 6, 2026 · 25 min read</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'TVL', value: '$4B+', sub: 'as of 2025' },
                { label: 'Launched', value: '2021', sub: 'Binance Labs backed' },
                { label: 'Chains', value: '4+', sub: 'ETH·Arb·BSC·OP' },
                { label: 'Assets', value: '30+', sub: 'stETH·USDY·BUIDL' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-violet-600 dark:text-violet-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · What Is Pendle? — The DeFi Protocol That Trades Yield</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Traditional finance has a bond market. Buy a government bond, receive your principal and interest at maturity. If you think rates will fall, lock in today's high rate by buying bonds early. If you think rates will rise, sell your bonds and stay flexible. Yield itself becomes the tradable asset.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              DeFi had no such market. You could deposit stETH and earn yield, but there was no way to hedge or speculate on whether that yield would rise or fall. <strong>Pendle solves exactly this problem.</strong> It separates the yield of stETH, USDC vaults, and more into principal and interest components, each tradable independently — a DeFi yield market.
            </p>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-3">Pendle Finance — One Line Definition</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                A DeFi yield trading protocol that <strong>splits yield-bearing assets (stETH, aUSDC, USDY, etc.) into Principal (PT) and Yield (YT) tokens</strong>, each tradable independently. Enables both fixed income locking and leveraged yield speculation.
              </p>
            </div>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Core Concept: SY → PT + YT Split</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The heart of Pendle is splitting one yield-bearing asset into two tokens. Understanding this step-by-step makes every other concept fall naturally into place.
            </p>

            {/* PT/YT Split Diagram EN */}
            <div className="my-8 rounded-2xl overflow-hidden border border-violet-200 dark:border-violet-800">
              <div className="bg-violet-600 px-6 py-4">
                <p className="text-white font-bold text-sm uppercase tracking-wider">SY → PT + YT Split Diagram</p>
              </div>

              <div className="bg-violet-50 dark:bg-violet-900/20 px-6 py-5 border-b border-violet-200 dark:border-violet-800">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">1</div>
                  <p className="font-bold text-violet-700 dark:text-violet-300 text-sm">SY (Standardized Yield) — Yield-Bearing Asset</p>
                </div>
                <div className="ml-11 grid grid-cols-3 gap-2">
                  {['stETH (Lido)', 'aUSDC (Aave)', 'USDY (Ondo)'].map((a, i) => (
                    <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-2 text-center border border-violet-100 dark:border-violet-900">
                      <p className="text-xs font-semibold text-violet-700 dark:text-violet-300">{a}</p>
                    </div>
                  ))}
                </div>
                <p className="ml-11 text-xs text-gray-500 dark:text-gray-400 mt-2">Yield-bearing assets wrapped and standardized inside Pendle</p>
              </div>

              <div className="bg-white dark:bg-gray-950 px-6 py-3 flex items-center justify-center">
                <div className="flex flex-col items-center">
                  <div className="text-2xl text-violet-500">↓</div>
                  <p className="text-xs font-bold text-violet-600 dark:text-violet-400">Pendle Tokenizes (Splits)</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-950 px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">PT</div>
                      <p className="font-bold text-blue-700 dark:text-blue-300 text-sm">Principal Token</p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>100% principal guaranteed at maturity</li>
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>Trades at a <strong>discount</strong> today</li>
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>Example: PT-stETH 6-month, price 97¢</li>
                      <li className="flex gap-2"><span className="text-blue-500 flex-shrink-0">▸</span>→ Hold to maturity = 3% fixed return locked</li>
                    </ul>
                    <div className="mt-3 bg-blue-100 dark:bg-blue-900/40 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-blue-700 dark:text-blue-300">Exactly like a bond</p>
                      <p className="text-xs text-gray-500 mt-0.5">Buy at discount → Receive face value at maturity</p>
                    </div>
                  </div>
                  <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-7 h-7 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">YT</div>
                      <p className="font-bold text-amber-700 dark:text-amber-300 text-sm">Yield Token</p>
                    </div>
                    <ul className="space-y-1.5 text-xs text-gray-700 dark:text-gray-300">
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>Claims <strong>all yield</strong> generated until maturity</li>
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>Very low price (only yield component)</li>
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>Built-in yield leverage effect</li>
                      <li className="flex gap-2"><span className="text-amber-500 flex-shrink-0">▸</span>Decays to zero at maturity (Time Decay)</li>
                    </ul>
                    <div className="mt-3 bg-amber-100 dark:bg-amber-900/40 rounded-lg p-2 text-center">
                      <p className="text-xs font-bold text-amber-700 dark:text-amber-300">Speculative · Leverage tool</p>
                      <p className="text-xs text-gray-500 mt-0.5">Use when betting on APY increase</p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                  <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">The Core Equation</p>
                  <div className="flex items-center justify-center gap-3 flex-wrap">
                    <div className="bg-violet-100 dark:bg-violet-900/30 rounded-lg px-4 py-2 text-center">
                      <p className="text-sm font-bold text-violet-700 dark:text-violet-300">1 SY</p>
                      <p className="text-xs text-gray-500">yield-bearing asset</p>
                    </div>
                    <span className="text-gray-400 font-bold text-lg">=</span>
                    <div className="bg-blue-100 dark:bg-blue-900/30 rounded-lg px-4 py-2 text-center">
                      <p className="text-sm font-bold text-blue-700 dark:text-blue-300">1 PT</p>
                      <p className="text-xs text-gray-500">principal portion</p>
                    </div>
                    <span className="text-gray-400 font-bold text-lg">+</span>
                    <div className="bg-amber-100 dark:bg-amber-900/30 rounded-lg px-4 py-2 text-center">
                      <p className="text-sm font-bold text-amber-700 dark:text-amber-300">1 YT</p>
                      <p className="text-xs text-gray-500">yield portion</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 text-center mt-2">At maturity: PT → 100% principal redeemed / YT → decays to 0</p>
                </div>
              </div>
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · How to Lock Fixed Income with PT</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              PT operates exactly like a bond. Buy at a discount, receive face value (100) at maturity. The difference is your fixed return — regardless of what market APY does after your purchase.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Real Example: Locking Fixed Yield with Ondo USDY</p>

              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">1</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">The Situation</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Ondo USDY currently yields 5.1% APY. But the Fed is entering a rate-cutting cycle and you expect APY to fall to the 3% range over the next six months.</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">2</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">The Action</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">Buy <strong className="text-blue-600 dark:text-blue-400">PT-USDY</strong> on Pendle. Current price: <strong>97.5 USDC</strong>. Redeems for 100 USDC at maturity (6 months later).</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0 mt-0.5">3</div>
                  <div>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">The Result</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">6 months later, market APY has indeed dropped to 3%. But you already secured <strong className="text-green-600 dark:text-green-400">2.5% fixed return</strong> (~5% annualized). Locked in regardless of market moves.</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 bg-white dark:bg-gray-900 rounded-xl p-4 border border-gray-200 dark:border-gray-800">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">$100,000 Investment Scenario Comparison</p>
                <div className="space-y-2">
                  {[
                    { label: 'Just hold USDY (APY falls to 3%)', value: '+$3,000', pct: 'w-[40%]', color: 'bg-orange-200 dark:bg-orange-900/40', textColor: 'text-orange-600 dark:text-orange-400' },
                    { label: 'Buy PT-USDY (~5% annualized, fixed)', value: '+$5,000', pct: 'w-[67%]', color: 'bg-violet-300 dark:bg-violet-700', textColor: 'text-violet-700 dark:text-violet-300 font-bold' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500 w-52 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className={`h-2 rounded-full ${row.pct} ${row.color}`} />
                      </div>
                      <span className={`w-16 text-right ${row.textColor}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-violet-500 mt-2">PT strategy earns $2,000 more — rate-drop hedge executed perfectly</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">Identical to a Bond</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Buying a US Treasury below face value and receiving face value at maturity is exactly what PT-USDY does. For the first time in DeFi history, <strong>you can buy a fixed-income bond on-chain.</strong>
              </p>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · How to Leverage Yield with YT</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              YT is the polar opposite of PT. Where PT is a conservative bond, YT is a leveraged bet on yield direction. The price is very low, which means the leverage multiple is very high.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-4">YT Leverage Calculation: Splitting 1 USDY</p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
                <div className="bg-white dark:bg-gray-900 rounded-xl p-4 text-center border border-violet-100 dark:border-violet-900">
                  <p className="text-xs text-gray-500 mb-1">Original Asset</p>
                  <p className="text-2xl font-bold text-violet-700 dark:text-violet-300">1 USDY</p>
                  <p className="text-xs text-gray-400 mt-1">= 1.00 USDC value</p>
                </div>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4 text-center border border-blue-200 dark:border-blue-800">
                  <p className="text-xs text-gray-500 mb-1">After Split: PT</p>
                  <p className="text-2xl font-bold text-blue-700 dark:text-blue-300">1 PT</p>
                  <p className="text-xs text-gray-400 mt-1">= 0.975 USDC value</p>
                </div>
                <div className="bg-amber-50 dark:bg-amber-900/20 rounded-xl p-4 text-center border border-amber-200 dark:border-amber-800">
                  <p className="text-xs text-gray-500 mb-1">After Split: YT</p>
                  <p className="text-2xl font-bold text-amber-700 dark:text-amber-300">1 YT</p>
                  <p className="text-xs text-gray-400 mt-1">= 0.025 USDC value</p>
                </div>
              </div>

              <div className="bg-white dark:bg-gray-900 rounded-xl p-4 border border-amber-200 dark:border-amber-800">
                <p className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-3">Leverage Calculation</p>
                <div className="space-y-2 text-xs text-gray-700 dark:text-gray-300">
                  <div className="flex justify-between items-center">
                    <span>Price of 1 YT</span>
                    <span className="font-bold">0.025 USDC</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Yield received by 1 YT</span>
                    <span className="font-bold">All yield from 1 full USDY</span>
                  </div>
                  <div className="flex justify-between items-center border-t border-amber-100 dark:border-amber-900 pt-2">
                    <span className="font-bold text-amber-700 dark:text-amber-300">Effective leverage multiple</span>
                    <span className="font-bold text-amber-600 dark:text-amber-400 text-lg">1 ÷ 0.025 = 40x</span>
                  </div>
                </div>
              </div>

              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-green-700 dark:text-green-400 mb-1">When APY Rises (Buy YT)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">If USDY APY jumps from 5% to 8%, YT value surges. The YT bought at 0.025 USDC generates outsized interest income.</p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3">
                  <p className="text-xs font-bold text-red-700 dark:text-red-400 mb-1">When APY Falls (Sell YT)</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Sell YT at today's high price to lock in gains. If you sell before APY falls, you pocket the difference.</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-2">Critical Warning Before Buying YT</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">
                YT loses value automatically as maturity approaches — this is Time Decay. Even if APY stays flat, YT price falls over time. It works exactly like options time decay. <strong>YT is suitable for short-term directional yield bets only; long-term holding is dangerous.</strong>
              </p>
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Pendle AMM — A Yield-Dedicated AMM</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Pendle's AMM is fundamentally different from Uniswap. Standard AMMs only consider the ratio between two assets. Pendle's AMM directly bakes in the fact that <strong>PT prices converge toward 1 (face value) as maturity approaches</strong>, incorporating this into the AMM curve itself.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'Yield Curve AMM',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  points: [
                    'Uniswap: x × y = k (simple ratio maintenance)',
                    'Pendle: PT maturity-convergence baked into the curve',
                    'PT-SY exchange ratio automatically adjusts as time passes',
                    'Trades the implied APY directly, not just token prices',
                  ],
                },
                {
                  title: 'LP Deposit Structure',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  points: [
                    'LPs deposit PT + SY together',
                    'Earn trading fees from yield rate swaps',
                    'Base SY yield + trading fees + PENDLE token rewards',
                    'Impermanent loss decreases near maturity (PT converges to 1)',
                  ],
                },
                {
                  title: 'Maturity Mechanism',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/10',
                  points: [
                    'At maturity: PT → 1:1 principal redemption',
                    'At maturity: YT → decays to 0',
                    'PT can be sold before maturity at market price',
                    'Liquidity can thin as maturity nears — be cautious',
                  ],
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <p className="font-bold text-gray-800 dark:text-gray-200 mb-3">{item.title}</p>
                  <ul className="space-y-1.5">
                    {item.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-violet-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Three Practical Strategies</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              There are three major positions you can take on Pendle. Pick the strategy that matches your risk profile.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  type: 'Conservative',
                  strategy: 'Buy PT',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  titleColor: 'text-blue-700 dark:text-blue-300',
                  points: [
                    'Hedge against APY decline',
                    'Lock in fixed yield upfront',
                    'No loss if held to maturity',
                    'Bond substitute in DeFi',
                  ],
                  risk: 'Low',
                  riskColor: 'text-green-600 dark:text-green-400',
                },
                {
                  type: 'Speculative',
                  strategy: 'Buy YT',
                  color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10',
                  badge: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
                  titleColor: 'text-amber-700 dark:text-amber-300',
                  points: [
                    'Leveraged gain if APY rises',
                    'Huge yield exposure with small capital',
                    'Up to 40x+ leverage possible',
                    'Watch out for Time Decay',
                  ],
                  risk: 'High',
                  riskColor: 'text-red-600 dark:text-red-400',
                },
                {
                  type: 'LP',
                  strategy: 'PT-SY LP',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  titleColor: 'text-violet-700 dark:text-violet-300',
                  points: [
                    'Earn trading fee income',
                    'Retain base SY yield',
                    'Additional PENDLE rewards',
                    'IL shrinks near maturity',
                  ],
                  risk: 'Medium',
                  riskColor: 'text-yellow-600 dark:text-yellow-400',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.badge}`}>{s.type}</span>
                    <span className={`text-xs font-semibold ${s.riskColor}`}>Risk: {s.risk}</span>
                  </div>
                  <p className={`text-lg font-bold mb-3 ${s.titleColor}`}>{s.strategy}</p>
                  <ul className="space-y-1.5">
                    {s.points.map((pt, j) => (
                      <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-violet-500 flex-shrink-0">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* S7 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Pendle × RWA — Treasury Rates Enter DeFi</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Between 2023 and 2025, the biggest driver of Pendle's growth was RWA (Real World Assets). Treasury-backed stablecoins like Ondo's USDY and BlackRock's BUIDL flooded into Pendle in large volumes.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Why RWA Concentrates in Pendle</p>

              <div className="space-y-4">
                {[
                  {
                    title: 'Hedging Against Treasury Rate Declines',
                    desc: 'When the Fed cuts rates, USDY APY falls with it. Buying PT-USDY on Pendle locks in the current 5.1% APY. Institutional players actively use this structure as a fixed-income hedge — the DeFi equivalent of rate swaps.',
                    color: 'border-l-4 border-violet-500 pl-4',
                  },
                  {
                    title: "DeFi's First True Fixed-Income Product",
                    desc: "Aave deposits earn variable APY. Morpho too. But PT-USDY delivers 100% fixed yield through maturity. This is the product institutions had been searching for in DeFi — finally available.",
                    color: 'border-l-4 border-blue-500 pl-4',
                  },
                  {
                    title: 'BlackRock BUIDL × Pendle',
                    desc: "BlackRock's on-chain money market fund BUIDL is now on Pendle. Buying PT-BUIDL means receiving the world's largest asset manager's fund yield as a fixed APY. The perfect intersection of TradFi and DeFi.",
                    color: 'border-l-4 border-green-500 pl-4',
                  },
                ].map((item, i) => (
                  <div key={i} className={`${item.color}`}>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">{item.title}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-violet-700 dark:text-violet-400 mb-2">The Significance of RWA + Pendle</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                The ability to trade on-chain Treasury yields as fixed income means <strong>DeFi finally has a bond market</strong>. Pendle is the protocol that brought TradFi interest rate swaps (IRS) into DeFi.
              </p>
            </div>

            {/* S8 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Pendle in walits — Fixed APY Deposit Option</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Pendle plays a key role in walits' future roadmap. walits currently supports variable APY deposits, but Pendle unlocks a completely new deposit category.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  phase: 'Current',
                  title: 'Variable APY Deposits',
                  badge: 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-300',
                  color: 'border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900',
                  desc: 'USDY, aUSDC, and other variable APY products. Returns fluctuate with market rates.',
                },
                {
                  phase: 'Roadmap',
                  title: 'PT-Based Fixed APY Deposits',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  desc: "walits holds USDY PT under the hood, offering users a 'guaranteed fixed APY deposit' option. Example: Launch a '6-month fixed 4.8% APY deposit' product.",
                },
                {
                  phase: 'Long-Term Vision',
                  title: 'Personalized Yield Portfolio',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  desc: "Short-term fixed, long-term variable, leveraged yield — auto-compose portfolios by user preference. Optimized 'earn fixed yield until your next remittance date' for migrant workers and international students.",
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${item.badge}`}>{item.phase}</span>
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* S9 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · Risks — Invest With Eyes Open</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Complexity Risk',
                  level: 'Important',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'Without a thorough understanding of PT, YT, SY, and the AMM, losses are highly likely. Pendle is one of the most conceptually complex protocols in DeFi. Start small after adequate study.',
                },
                {
                  title: 'YT Time Decay',
                  level: 'Structural',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'YT value converges to zero as maturity approaches. Even if APY stays constant, YT holders lose value over time — identical to options theta decay. YT is only appropriate for short-term directional bets.',
                },
                {
                  title: 'Pre-Maturity Liquidity Risk',
                  level: 'Watch',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'Trading volume and liquidity in a pool drops as maturity approaches. Selling PT before maturity may incur meaningful slippage. Never use capital you cannot hold to maturity to buy PT.',
                },
                {
                  title: 'Underlying Asset Risk',
                  level: 'Baseline',
                  lc: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  desc: 'PT-USDY carries all of USDY\'s inherent risks (Ondo smart contract risk, regulatory risk). The Pendle layer adds risk on top of — not instead of — the underlying asset risk. Evaluate both independently.',
                },
                {
                  title: 'Smart Contract Risk',
                  level: 'Low (Audited)',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: "Pendle has completed multiple independent security audits. However, the AMM's structural complexity creates a broader attack surface than simpler protocols. Theoretical vulnerabilities always exist in any smart contract.",
                },
              ].map((r, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-800 dark:text-gray-200">{r.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${r.lc}`}>{r.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                </div>
              ))}
            </div>

            {/* S10 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · Comparison — Pendle vs Morpho vs Aave vs Ondo</h2>
            <div className="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 my-6">
              <table className="w-full text-xs">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="px-4 py-3 text-left font-bold text-gray-700 dark:text-gray-300">Category</th>
                    <th className="px-4 py-3 text-left font-bold text-violet-600 dark:text-violet-400">Pendle</th>
                    <th className="px-4 py-3 text-left font-bold text-indigo-600 dark:text-indigo-400">Morpho</th>
                    <th className="px-4 py-3 text-left font-bold text-blue-600 dark:text-blue-400">Aave</th>
                    <th className="px-4 py-3 text-left font-bold text-green-600 dark:text-green-400">Ondo</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ['Yield Type', 'PT fixed / YT variable', 'Loan interest (variable)', 'Deposit interest (variable)', 'Treasury-based (near-fixed)'],
                    ['Risk Level', 'Medium~High (YT)', 'Medium', 'Low', 'Low'],
                    ['Fixed / Variable', 'Fixed possible (PT)', 'Variable', 'Variable', 'Near-fixed'],
                    ['Complexity', 'High', 'Medium', 'Low', 'Low'],
                    ['Leverage', 'YT up to 40x+', 'None', 'None', 'None'],
                    ['Min Investment', 'No minimum', 'No minimum', 'No minimum', '$500+'],
                    ['Maturity Concept', 'Yes', 'No', 'No', 'No'],
                    ['TVL', '$4B+', '$3B+', '$15B+', '$700M+'],
                  ].map(([label, pendle, morpho, aave, ondo], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-2.5 font-semibold text-xs text-gray-700 dark:text-gray-300">{label}</td>
                      <td className="px-4 py-2.5 text-xs text-violet-600 dark:text-violet-400 font-medium">{pendle}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{morpho}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{aave}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{ondo}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-violet-50 dark:bg-violet-900/20 border border-violet-200 dark:border-violet-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-violet-700 dark:text-violet-400 mb-1">Key Differentiator</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Only Pendle offers <strong>both fixed income and leveraged yield</strong> in DeFi simultaneously. Aave and Morpho are variable rate only. Ondo is near-fixed but with no leverage. Pendle covers the entire spectrum in a single protocol.
              </p>
            </div>

            {/* S11 EN - Conclusion */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-violet-400 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">DeFi Finally Has a Bond Market</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  The era of trading yield has arrived. Pendle brought TradFi's interest rate swap (IRS) market — which had been institutional-only for decades — into DeFi. Anyone can now lock in fixed income or take leveraged bets on yield direction.
                </p>
                <p>
                  With the rise of RWA, Pendle's role keeps expanding. Treasury-backed assets like BlackRock BUIDL and Ondo USDY are being actively traded on Pendle, cementing its position as the <strong className="text-white">infrastructure layer for an on-chain bond market.</strong>
                </p>
                <p>
                  In walits, Pendle will be the core infrastructure for "guaranteed fixed APY deposits." The scenario where a migrant worker earns fixed yield on funds earmarked for next month's remittance — <strong className="text-white">with Pendle's PT structure, this is now perfectly possible for the first time.</strong>
                </p>
                <p className="text-gray-400 text-xs">
                  * APY figures vary with market conditions. Example numbers reflect specific moments in time. Always review official documentation and audit reports before investing. This article is not investment advice.
                </p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
