'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function CurveDeepDivePage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500">
          <Image src="/blog/curve.jpg" alt="Curve Finance" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-yellow-500/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 5</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 5 — Curve Finance 완전 가이드</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">스테이블코인 유동성의 심장 · StableSwap · veCRV · Curve Wars · Convex</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: '최대 TVL', value: '$24B', sub: '2022년 최고점' },
                { label: '현재 TVL', value: '$1.8B', sub: '2025년 기준' },
                { label: 'veCRV 최대 락업', value: '4년', sub: '2.5x 부스트 제공' },
                { label: 'Curve Wars 규모', value: '$1B+', sub: 'Convex 보유 veCRV' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* ── S1 왜 Curve가 필요한가 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · 왜 Curve가 필요한가?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap에서 USDC 100만 달러를 USDT로 스왑하면 얼마를 받을까? 직관적으로는 약 100만 USDT를 기대하겠지만, 실제로는 <strong>990,000~997,000 USDT</strong> 정도만 받는다. 같은 달러 가치의 스테이블코인끼리 교환하는데 왜 0.3~1%의 손실이 생기는가?
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              문제는 Uniswap의 <strong>x × y = k 공식</strong>이다. 이 공식은 두 자산의 가격이 자유롭게 변동한다는 전제로 설계됐다. ETH/USDC처럼 가격이 크게 바뀌는 쌍에는 완벽하지만, USDC/USDT처럼 <strong>항상 1:1 근처에 있어야 하는 쌍</strong>에는 근본적으로 비효율적이다.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-6">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-4">Uniswap x×y=k의 문제 — 스테이블코인에서</p>
              <div className="space-y-3 text-sm text-amber-900 dark:text-amber-200">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <p>USDC/USDT 풀에 각 $1M씩 있다고 가정하면, x=1,000,000 · y=1,000,000 · k=10¹²</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <p>$100만 USDC를 스왑하면 새로운 x = 2,000,000, 새로운 y = k/x = 500,000</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <p>받는 USDT = 1,000,000 - 500,000 = <strong>500,000 USDT</strong> → 50% 슬리피지!</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">!</span>
                  <p>x×y=k 곡선은 동등한 가치의 자산 교환을 위해 설계된 게 아니다. 가격이 움직일 수 있도록 설계됐다.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2020년 Michael Egorov가 이 문제를 해결하기 위해 Curve Finance를 만들었다. 핵심 아이디어는 단순하다: <strong>"1:1 근처에서는 직선처럼, 극단으로 갈수록 곡선처럼"</strong> 동작하는 새로운 수식을 만드는 것이다.
            </p>

            {/* ── S2 StableSwap 알고리즘 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · StableSwap 알고리즘 — 수식의 마법</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Curve의 StableSwap은 두 가지 수식을 하나로 합친 <strong>하이브리드 불변식(hybrid invariant)</strong>이다. 균형 근처에서는 Constant Sum(x+y=k)처럼 동작해 슬리피지를 최소화하고, 극단에서는 Constant Product(x×y=k)처럼 동작해 풀이 완전히 비는 것을 방지한다.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-6 my-6 font-mono text-sm">
              <p className="text-yellow-400 mb-3">{'// Curve StableSwap 불변식'}</p>
              <p className="text-white mb-1">{'A · n^n · Σxi  +  D  =  A · n^n · D  +  D^(n+1) / (n^n · Πxi)'}</p>
              <div className="mt-4 space-y-1 text-gray-400 text-xs">
                <p><span className="text-green-400">A</span>  — 증폭 계수 (Amplification factor), 풀마다 다름 (보통 100~2000)</p>
                <p><span className="text-green-400">n</span>  — 자산 개수 (2pool=2, 3pool=3)</p>
                <p><span className="text-green-400">xi</span> — 각 자산의 잔액</p>
                <p><span className="text-green-400">D</span>  — 전체 유동성의 불변량 (총 잔액이 균형일 때의 값)</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs mb-2">A=0 일 때 → Uniswap x·y=k 와 동일</p>
                <p className="text-gray-400 text-xs">A=∞ 일 때 → 완전한 직선 x+y=k (슬리피지 0)</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              <strong>증폭 계수 A</strong>가 핵심이다. A가 클수록 가격이 1:1 근처에서 "평평하게" 유지되며 슬리피지가 줄어든다. Curve 3pool의 A는 <strong>2000</strong>으로, Uniswap 대비 같은 거래에서 슬리피지가 수백 배 낮다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  title: 'Constant Product\nx·y=k (Uniswap)',
                  color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/20',
                  badge: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  items: ['모든 가격 범위에 유동성 분산', '스테이블코인 스왑 시 큰 슬리피지', '가격이 어디로든 움직일 수 있음', 'ETH/USDC 같은 변동성 쌍에 적합'],
                },
                {
                  title: 'Constant Sum\nx+y=k',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  items: ['슬리피지 0', '균형이 깨지면 한쪽 자산 고갈 위험', '차익거래자에 의해 풀 고갈 가능', '실제로 단독 사용 불가'],
                },
                {
                  title: 'StableSwap\nCurve 하이브리드',
                  color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
                  badge: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  items: ['균형 근처: Constant Sum처럼 동작', '극단에서: Constant Product로 전환', '풀 고갈 방지 + 슬리피지 최소화', 'A 계수로 특성 조절 가능'],
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${card.badge}`}>
                    {['x·y=k', 'x+y=k', 'StableSwap'][i]}
                  </span>
                  <p className="text-sm font-semibold mt-2 mb-3 whitespace-pre-line">{card.title}</p>
                  <ul className="space-y-1">
                    {card.items.map((item, j) => (
                      <li key={j} className="text-xs text-gray-600 dark:text-gray-400 flex gap-2">
                        <span className="mt-1 w-1 h-1 rounded-full bg-gray-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">실제 슬리피지 비교 — USDC → USDT $100만 스왑</p>
              <div className="space-y-3">
                {[
                  { label: 'Uniswap v2 (x·y=k)', bar: 'w-full', color: 'bg-red-400', value: '~3.0% 슬리피지', loss: '-$30,000' },
                  { label: 'Uniswap v3 (집중 유동성)', bar: 'w-3/5', color: 'bg-orange-400', value: '~0.05~0.2%', loss: '-$2,000' },
                  { label: 'Curve 3pool (A=2000)', bar: 'w-4', color: 'bg-yellow-400', value: '~0.001~0.01%', loss: '-$100' },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <span>{row.label}</span>
                      <span className="font-mono">{row.value} ({row.loss})</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full ${row.bar} ${row.color} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── S3 주요 풀 구조 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · 주요 풀 구조</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Curve에는 수백 개의 풀이 있지만, 핵심 구조는 크게 <strong>3가지</strong>다. 각각 설계 목적이 다르며, 스테이블코인·변동성 자산·파생 자산을 각기 다른 방식으로 처리한다.
            </p>

            <div className="space-y-5 my-6">
              {/* 3pool */}
              <div className="border border-yellow-200 dark:border-yellow-800 rounded-xl overflow-hidden">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 px-5 py-3 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-yellow-800 dark:text-yellow-300">3pool (TriPool)</span>
                    <span className="ml-2 text-xs bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full">가장 중요</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">A = 2000</span>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>DAI / USDC / USDT</strong> 세 스테이블코인으로 구성된 Curve의 핵심 풀. DeFi 전체에서 가장 많이 참조되는 유동성 풀 중 하나로, 다른 풀들이 3CRV(3pool LP 토큰)을 기반 자산으로 사용하는 <strong>메타풀 베이스</strong>가 된다.
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { asset: 'DAI', issuer: 'MakerDAO', type: '탈중앙화 스테이블' },
                      { asset: 'USDC', issuer: 'Circle', type: '중앙화 스테이블' },
                      { asset: 'USDT', issuer: 'Tether', type: '중앙화 스테이블' },
                    ].map((a, i) => (
                      <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-3 text-center">
                        <p className="text-sm font-bold text-gray-900 dark:text-white">{a.asset}</p>
                        <p className="text-xs text-gray-500 mt-1">{a.issuer}</p>
                        <p className="text-xs text-gray-400">{a.type}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* 메타풀 */}
              <div className="border border-blue-200 dark:border-blue-800 rounded-xl overflow-hidden">
                <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3">
                  <span className="text-sm font-bold text-blue-800 dark:text-blue-300">메타풀 (MetaPool)</span>
                  <span className="ml-2 text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">신규 스테이블코인 진입 경로</span>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    새로운 스테이블코인이 DAI/USDC/USDT 각각과 풀을 만들면 유동성이 분산된다. 메타풀은 <strong>신규 스테이블코인 + 3CRV(LP 토큰)</strong>으로 구성해 3pool의 유동성을 간접적으로 활용한다. FRAX, LUSD, MIM, GUSD 등이 이 방식으로 Curve에 유동성을 확보했다.
                  </p>
                  <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-xs">
                    <p className="text-gray-400">{'// 예: FRAX 메타풀 구조'}</p>
                    <p className="text-white mt-1">FRAX  <span className="text-yellow-400">+</span>  3CRV (DAI+USDC+USDT의 LP 토큰)</p>
                    <p className="text-gray-400 mt-2">{'→ FRAX를 DAI/USDC/USDT 어느 것과도 스왑 가능'}</p>
                    <p className="text-gray-400">{'→ 3pool의 깊은 유동성을 즉시 활용'}</p>
                  </div>
                </div>
              </div>

              {/* Tricrypto */}
              <div className="border border-purple-200 dark:border-purple-800 rounded-xl overflow-hidden">
                <div className="bg-purple-50 dark:bg-purple-900/20 px-5 py-3 flex items-center justify-between">
                  <span className="text-sm font-bold text-purple-800 dark:text-purple-300">Tricrypto</span>
                  <span className="text-xs text-gray-500 font-mono">변동성 자산 특화</span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <strong>USDT / WBTC / ETH</strong>로 구성된 풀. 스테이블코인이 아닌 변동성 자산들의 풀을 위해 Curve가 개발한 <strong>CryptoSwap 알고리즘</strong>을 사용한다. StableSwap의 A 계수 대신 내부 EMA 오라클로 "현재 균형 가격"을 추적하며 자동으로 곡선 모양을 조정한다.
                  </p>
                  <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-xs text-purple-800 dark:text-purple-300">
                    <strong>CryptoSwap vs StableSwap:</strong> StableSwap은 "항상 1:1" 가정 → CryptoSwap은 내부 오라클로 실시간 균형점을 계산. 둘 다 슬리피지 최소화 목표지만 적용 자산군이 다름.
                  </div>
                </div>
              </div>
            </div>

            {/* ── S4 유동성 공급 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · 유동성 공급 — LP가 되는 것</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Curve에 유동성을 공급하면 <strong>LP 토큰</strong>을 받는다. 3pool에 공급하면 <strong>3CRV</strong> 토큰을 받고, 이 토큰을 다시 게이지(Gauge)에 스테이킹하면 CRV 보상을 추가로 받는다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">3pool에 $10,000 유동성 공급 → 수익 흐름</p>
              <div className="space-y-3">
                {[
                  {
                    step: '1',
                    title: 'DAI/USDC/USDT 공급',
                    desc: '세 자산 중 하나 or 조합으로 공급 가능. 불균형 공급도 허용 (내부적으로 리밸런싱)',
                    color: 'bg-blue-500',
                  },
                  {
                    step: '2',
                    title: '3CRV LP 토큰 수령',
                    desc: '공급한 비율만큼 3CRV 토큰을 받음. 3CRV는 풀 전체 지분을 대표하는 토큰',
                    color: 'bg-yellow-500',
                  },
                  {
                    step: '3',
                    title: '스왑 수수료 수익',
                    desc: '풀에서 스왑이 발생할 때마다 0.04% 수수료가 LP에게 자동 분배. 시간이 지날수록 3CRV 가치 상승',
                    color: 'bg-green-500',
                  },
                  {
                    step: '4',
                    title: '게이지 스테이킹 → CRV 보상',
                    desc: '3CRV를 게이지에 스테이킹하면 CRV 토큰 추가 보상. veCRV 보유량에 따라 최대 2.5x 부스트',
                    color: 'bg-purple-500',
                  },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-3">비영구 손실(Impermanent Loss)은?</p>
              <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">
                스테이블코인 풀은 자산 간 가격 비율이 거의 변하지 않아 비영구 손실이 <strong>매우 적다</strong>. USDC가 $0.999↔$1.001 사이에서만 움직이면 비영구 손실은 사실상 0에 가깝다. 이것이 Curve LP가 Uniswap LP보다 안정적인 이유다. 단, USDT나 USDC가 페그를 잃으면 큰 손실이 발생할 수 있다.
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Curve 3pool APY 구성 (예시)</p>
              <div className="space-y-2">
                {[
                  { label: '스왑 수수료 (Base APY)', value: '0.5~2%', color: 'bg-blue-400', width: 'w-8' },
                  { label: 'CRV 보상 (veCRV 없을 때)', value: '2~5%', color: 'bg-yellow-400', width: 'w-16' },
                  { label: 'CRV 보상 (veCRV 최대 부스트)', value: '5~12.5%', color: 'bg-orange-400', width: 'w-32' },
                  { label: '외부 프로토콜 인센티브', value: '0~10%+', color: 'bg-purple-400', width: 'w-24' },
                ].map((row, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-40 text-xs text-gray-600 dark:text-gray-400 flex-shrink-0">{row.label}</div>
                    <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full ${row.width} ${row.color} rounded-full`} />
                    </div>
                    <div className="w-20 text-xs font-mono text-gray-700 dark:text-gray-300 text-right">{row.value}</div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-3">* 시장 상황에 따라 크게 변동. 위 수치는 예시용이며 보장되지 않음.</p>
            </div>

            {/* ── S5 CRV 토큰과 veCRV ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · CRV 토큰과 veCRV — 거버넌스의 심장</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              CRV는 Curve의 거버넌스 및 인센티브 토큰이다. 그냥 보유해도 가치가 있지만, <strong>veCRV(vote-escrowed CRV)</strong>로 전환하는 순간 완전히 다른 레벨의 권한이 생긴다. ve-tokenomics는 DeFi 역사상 가장 영리한 토큰 경제 설계 중 하나로 평가받는다.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-6 my-6 font-mono text-sm">
              <p className="text-yellow-400 mb-3">{'// CRV → veCRV 전환 규칙'}</p>
              <p className="text-white">1 CRV  +  1년 락업  =  <span className="text-yellow-400">0.25 veCRV</span></p>
              <p className="text-white">1 CRV  +  2년 락업  =  <span className="text-yellow-400">0.50 veCRV</span></p>
              <p className="text-white">1 CRV  +  3년 락업  =  <span className="text-yellow-400">0.75 veCRV</span></p>
              <p className="text-white">1 CRV  +  4년 락업  =  <span className="text-yellow-400">1.00 veCRV</span>  ← 최대</p>
              <p className="text-gray-400 mt-3 text-xs">{'// 만기가 가까워질수록 veCRV 수량 선형 감소'}</p>
              <p className="text-gray-400 text-xs">{'// veCRV는 양도 불가, 거래소 상장 불가 (진정한 잠금)'}</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              veCRV의 핵심은 단순히 "오래 잠글수록 많이 받는다"가 아니다. veCRV가 부여하는 세 가지 권한이 DeFi 전체의 판도를 바꿨다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  icon: '📊',
                  title: '게이지 투표권',
                  color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20',
                  desc: '각 풀이 받는 CRV 인센티브 비중(게이지 웨이트)을 결정하는 투표. 내가 원하는 풀에 더 많은 CRV 보상이 흘러가도록 조절 가능.',
                },
                {
                  icon: '⚡',
                  title: 'LP 부스트 (최대 2.5x)',
                  color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20',
                  desc: '게이지에 스테이킹한 LP 포지션의 CRV 보상을 최대 2.5배로 증폭. veCRV 보유량이 많을수록 더 많은 풀에서 부스트 적용.',
                },
                {
                  icon: '💰',
                  title: '프로토콜 수수료 분배',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20',
                  desc: 'Curve 전체 풀에서 발생하는 수수료의 50%가 veCRV 보유자에게 3CRV(스테이블코인) 형태로 매주 분배.',
                },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">{card.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* ── S6 게이지 시스템 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · 게이지 시스템 — CRV가 어떻게 배분되는가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Curve는 매주 신규 발행되는 CRV 토큰을 각 풀의 <strong>게이지(Gauge)</strong>에 배분한다. 게이지는 일종의 "CRV 배분 파이프"다. 어느 풀의 게이지가 많은 투표를 받느냐에 따라 그 풀의 LP가 받는 CRV 보상이 달라진다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">게이지 웨이트 투표 → CRV 배분 흐름</p>
              <div className="space-y-4">
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-yellow-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">1</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">매주 목요일 게이지 웨이트 집계</p>
                    <p className="text-xs text-gray-500 mt-0.5">veCRV 보유자가 각 풀에 투표한 비중을 집계 (최대 10개 풀, 10일마다 변경 가능)</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-yellow-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">2</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">CRV 인플레이션을 게이지 비중대로 분배</p>
                    <p className="text-xs text-gray-500 mt-0.5">게이지 웨이트 30%를 받은 풀은 그 주 발행 CRV의 30%를 받음</p>
                  </div>
                </div>
                <div className="flex gap-4 items-start">
                  <span className="w-8 h-8 rounded-full bg-yellow-500 text-white text-xs font-bold flex items-center justify-center flex-shrink-0">3</span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">풀 내에서 LP 지분 비율대로 분배</p>
                    <p className="text-xs text-gray-500 mt-0.5">veCRV 부스트가 적용된 LP는 동일 지분이라도 더 많은 CRV를 받음 (최대 2.5x)</p>
                  </div>
                </div>
              </div>

              <div className="mt-5 pt-5 border-t border-gray-200 dark:border-gray-700">
                <p className="text-xs text-gray-500 mb-3">예시: 이번 주 CRV 배분 (가상 시나리오)</p>
                <div className="space-y-2">
                  {[
                    { pool: '3pool (DAI/USDC/USDT)', weight: '32%', bar: 'w-8/12', color: 'bg-yellow-400' },
                    { pool: 'FRAX 메타풀', weight: '18%', bar: 'w-5/12', color: 'bg-blue-400' },
                    { pool: 'stETH/ETH', weight: '15%', bar: 'w-4/12', color: 'bg-green-400' },
                    { pool: 'Tricrypto', weight: '12%', bar: 'w-3/12', color: 'bg-purple-400' },
                    { pool: '기타 풀들', weight: '23%', bar: 'w-6/12', color: 'bg-gray-400' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-36 text-xs text-gray-600 dark:text-gray-400 flex-shrink-0">{row.pool}</div>
                      <div className="flex-1 h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div className={`h-full ${row.bar} ${row.color} rounded-full`} />
                      </div>
                      <div className="w-10 text-xs font-mono text-gray-700 dark:text-gray-300 text-right">{row.weight}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              여기서 핵심 인사이트가 나온다. <strong>내 풀이 더 많은 CRV 보상을 받으면 → LP들이 몰린다 → 내 스테이블코인 유동성이 깊어진다 → 사용자들이 슬리피지 없이 스왑한다 → 프로토콜 TVL이 올라간다</strong>. 즉, 게이지 투표권은 곧 <strong>유동성 통제권</strong>이다. 이것이 Curve Wars의 본질이다.
            </p>

            {/* ── S7 Curve Wars ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · Curve Wars — DeFi 역사상 가장 치열한 전쟁</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2021~2022년, DeFi 프로토콜들이 깨달았다. "내 스테이블코인이 Curve에서 깊은 유동성을 가지면, 우리 프로토콜의 스테이블코인이 살아남는다." FRAX, MIM, LUSD, UST... 모든 스테이블코인 프로토콜이 veCRV를 사기 시작했다. 이것이 <strong>Curve Wars</strong>의 시작이다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Curve Wars 참여자 구조</p>
              <div className="space-y-4">
                {[
                  {
                    actor: 'DeFi 프로토콜 (FRAX, Abracadabra 등)',
                    strategy: 'CRV를 시장에서 대량 매수 → 4년 락업 → veCRV 확보 → 자기 풀에 게이지 투표',
                    badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  },
                  {
                    actor: 'Convex Finance',
                    strategy: '사용자의 CRV를 모아 cvxCRV로 전환 → 일괄 veCRV 운용 → Convex가 최대 veCRV 보유자 등극 (전체의 50%+)',
                    badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  },
                  {
                    actor: 'Votium Protocol',
                    strategy: 'vlCVX(Convex 거버넌스 토큰) 보유자에게 게이지 투표 뇌물 지급 마켓플레이스 운영',
                    badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  },
                  {
                    actor: '개인 투자자',
                    strategy: 'CRV 매수 → Convex에 맡겨 cvxCRV 전환 → Votium 뇌물로 추가 수익',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${row.badge}`}>{['프로토콜', 'Convex', 'Votium', '개인'][i]}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{row.actor}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{row.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-800 dark:text-gray-200">Convex Finance — Curve Wars의 최종 승자</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Convex는 "CRV를 직접 4년 락업하기 귀찮다"는 사람들을 위한 서비스다. CRV를 Convex에 맡기면 <strong>cvxCRV</strong>를 받고, Convex가 대신 4년 락업해 veCRV를 최대로 활용한다. 그 결과 Convex는 전체 veCRV의 <strong>50% 이상</strong>을 통제하게 됐고, 사실상 Curve 게이지의 최대 결정권자가 됐다.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-6 my-6 font-mono text-sm">
              <p className="text-yellow-400 mb-3">{'// Convex 수익 구조'}</p>
              <p className="text-white">CRV 공급자 → <span className="text-yellow-400">cvxCRV</span> 받음</p>
              <p className="text-white mt-1">cvxCRV 스테이킹 → <span className="text-green-400">3CRV (수수료) + CRV + CVX</span> 받음</p>
              <p className="text-white mt-3">CVX 보유 → <span className="text-blue-400">vlCVX</span> 전환 (16주 락업)</p>
              <p className="text-white mt-1">vlCVX 보유 → <span className="text-purple-400">Votium 뇌물</span> 수령 가능</p>
              <p className="text-gray-400 mt-3 text-xs">{'// 뇌물(bribe): 내 풀에 게이지 투표해달라는 인센티브'}</p>
              <p className="text-gray-400 text-xs">{'// vlCVX 1개당 약 $0.05~0.20/epoch의 뇌물 수익 (시기에 따라 다름)'}</p>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">Terra/LUNA UST 사례 — Curve Wars의 위험</p>
              <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                2022년 Terra는 Curve의 UST-3CRV 메타풀 유동성을 확보하기 위해 수억 달러 규모의 CRV를 매수하고 유동성을 공급했다. UST가 디페깅되기 시작하자 LFG(Luna Foundation Guard)가 이 유동성을 갑자기 빼내며 Curve 풀의 UST:3CRV 비율이 극도로 불균형해졌다. 이것이 탈출 신호로 읽히며 UST 붕괴가 가속됐다. Curve Wars에서 이긴다고 스테이블코인이 안전한 건 아니다.
              </p>
            </div>

            {/* ── S8 실제 사용 흐름 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · 실제 사용 흐름 — 스왑부터 수익까지</h2>

            <div className="space-y-5 my-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3">
                  <span className="text-sm font-bold">시나리오 A: 100만 USDC → USDT 스왑</span>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-xs">
                    <p className="text-gray-400">{'// curve.fi 또는 1inch/Paraswap이 Curve로 라우팅'}</p>
                    <p className="text-white mt-1">입력: 1,000,000 USDC</p>
                    <p className="text-white">출력: ~999,900 USDT  <span className="text-green-400">(-0.01% 슬리피지)</span></p>
                    <p className="text-white">수수료: 400 USDC  <span className="text-gray-400">(0.04%)</span></p>
                    <p className="text-gray-400 mt-2">{'→ LP들에게 분배, admin fee 50%는 veCRV 보유자에게'}</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3">
                  <span className="text-sm font-bold">시나리오 B: $50,000 3pool LP → CRV 수익</span>
                </div>
                <div className="px-5 py-4 space-y-3">
                  <div className="space-y-2 text-sm">
                    {[
                      { step: '1', text: 'USDC $50,000 → 3pool에 공급 → 3CRV LP 토큰 수령' },
                      { step: '2', text: '3CRV를 3pool 게이지에 스테이킹' },
                      { step: '3', text: '매일 CRV 보상 누적 (Base APY + CRV 보상)' },
                      { step: '4', text: '받은 CRV를 Convex에 맡겨 cvxCRV 전환 → 추가 수익' },
                      { step: '5', text: '또는 CRV를 4년 락업 → veCRV → 직접 게이지 투표 참여' },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <span className="w-5 h-5 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{s.step}</span>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* ── S9 리스크 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · 리스크 — Curve에도 위험은 있다</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  title: '스마트 컨트랙트 취약점',
                  level: '높음',
                  levelColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: '2023년 7월 Curve의 Vyper 컴파일러 버그로 $7,000만 규모 해킹 발생. 구버전 Vyper(0.2.15~0.3.0)의 재진입 잠금(reentrancy lock) 버그가 원인. ETH/stETH, alETH, JPEG 풀이 영향을 받음. 이후 긴급 화이트햇 구조로 일부 회수.',
                },
                {
                  title: '페그 이탈 (Depeg) 리스크',
                  level: '중간',
                  levelColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: '3pool의 자산 중 하나가 $1에서 크게 이탈하면 LP는 해당 자산을 과도하게 보유하게 됨. 2022년 USDT가 잠깐 $0.98로 내려갔을 때 3pool LP의 USDT 비중이 크게 증가한 사례. 중앙화 스테이블코인(USDC, USDT)의 규제/발행사 리스크도 포함.',
                },
                {
                  title: 'A 계수 거버넌스 리스크',
                  level: '낮음',
                  levelColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: '증폭 계수 A는 Curve DAO 거버넌스로 변경 가능. A가 갑자기 바뀌면 풀의 슬리피지 특성이 변해 LP 포지션 가치가 영향을 받을 수 있음. 다만 실제로 급격한 변경이 승인된 사례는 거의 없음.',
                },
                {
                  title: 'CRV 토큰 가격 리스크',
                  level: '높음',
                  levelColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: '2023년 8월 Michael Egorov(Curve 창업자)의 CRV 담보 대출 청산 위기 발생. 창업자가 CRV를 담보로 스테이블코인 수천만 달러를 대출받아 CRV 가격이 하락하자 청산 압박이 걸림. 커뮤니티의 OTC 매입으로 위기를 넘겼으나 프로토콜 신뢰도에 큰 타격.',
                },
              ].map((risk, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{risk.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${risk.levelColor}`}>{risk.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </div>

            {/* ── S10 최종 비교 & 결론 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · Uniswap vs Curve vs 1inch — 언제 무엇을 쓰나</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 rounded-tl-lg">항목</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-pink-600">Uniswap</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-yellow-600">Curve</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-orange-600 rounded-tr-lg">1inch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['최적 용도', 'ETH/토큰 스왑', '스테이블코인 스왑', '최적 경로 탐색'],
                    ['알고리즘', 'x·y=k (v2), 집중유동성 (v3)', 'StableSwap / CryptoSwap', 'Pathfinder (복합 라우팅)'],
                    ['$100만 USDC→USDT 슬리피지', '~0.3%', '~0.01%', '최적 경로 자동 선택'],
                    ['수수료', '0.05% / 0.3% / 1%', '0.04% (3pool 기준)', '0 (경로별 풀 수수료만)'],
                    ['LP 수익 구조', '수수료 + 비영구손실', '수수료 + CRV 보상 + 부스트', '직접 LP 불가'],
                    ['거버넌스', 'UNI 토큰', 'veCRV (강력한 인센티브)', 'N/A'],
                    ['복잡도', '낮음', '높음 (veCRV/Convex 이해 필요)', '낮음 (자동화)'],
                    ['사용 시점', '일반 토큰 교환', '대량 스테이블코인 스왑/LP', '최적 스왑 자동 실행'],
                  ].map(([item, uni, curve, inch], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{item}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{uni}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 font-medium text-yellow-700 dark:text-yellow-400">{curve}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{inch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 결론 */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-yellow-500 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">Curve는 스테이블코인 인프라의 심장이다</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Curve는 단순한 DEX가 아니다. USDC/USDT/DAI 같은 스테이블코인들이 서로 페그를 유지하며 거래될 수 있는 <strong className="text-white">인프라 레이어</strong>다. 1inch가 "어디서 살지"를 결정한다면, Curve는 "스테이블코인이 1:1로 교환되는 물리적 공간"을 제공한다.
                </p>
                <p>
                  veCRV와 게이지 시스템은 DeFi에서 처음으로 <strong className="text-white">유동성 = 권력</strong>이라는 등식을 만들어냈다. 어떤 스테이블코인이 Curve에서 깊은 유동성을 가지느냐가 그 스테이블코인의 신뢰도를 결정하는 시대가 열렸고, 이것이 수십억 달러의 Curve Wars를 낳았다.
                </p>
                <p>
                  Curve를 이해하면 DeFi의 유동성이 어떻게 흐르는지, 스테이블코인들이 왜 특정 프로토콜에 유동성을 공급하는지, Convex 같은 메타 레이어가 왜 존재하는지를 한 번에 이해하게 된다.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 5 — Curve Finance Complete Guide</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">The Heart of Stablecoin Liquidity · StableSwap · veCRV · Curve Wars · Convex</p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Peak TVL', value: '$24B', sub: '2022 all-time high' },
                { label: 'Current TVL', value: '$1.8B', sub: 'As of 2025' },
                { label: 'veCRV Max Lock', value: '4 years', sub: '2.5x boost provided' },
                { label: 'Curve Wars Scale', value: '$1B+', sub: 'veCRV held by Convex' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · Why Does Curve Exist?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you swap $1 million USDC for USDT on Uniswap, how much would you receive? Intuitively, you'd expect roughly $1 million USDT — but in reality you'd get somewhere between <strong>$990,000 and $997,000</strong>. Why does swapping between two stablecoins of identical value cause a 0.3–1% loss?
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The culprit is Uniswap's <strong>x × y = k formula</strong>. This formula was designed with the assumption that two assets can freely change in price relative to each other. It works perfectly for pairs like ETH/USDC where prices fluctuate significantly, but it's fundamentally inefficient for pairs like USDC/USDT that <strong>should always trade close to 1:1</strong>.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6 my-6">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-4">The x×y=k Problem for Stablecoins</p>
              <div className="space-y-3 text-sm text-amber-900 dark:text-amber-200">
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">1</span>
                  <p>Assume a USDC/USDT pool with $1M each: x=1,000,000 · y=1,000,000 · k=10¹²</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">2</span>
                  <p>Swap $1M USDC: new x = 2,000,000, new y = k/x = 500,000</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">3</span>
                  <p>USDT received = 1,000,000 - 500,000 = <strong>500,000 USDT</strong> → 50% slippage!</p>
                </div>
                <div className="flex gap-3">
                  <span className="w-6 h-6 rounded-full bg-red-200 dark:bg-red-800 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">!</span>
                  <p>The x×y=k curve isn't designed for equal-value asset swaps. It's designed to allow price to move.</p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In 2020, Michael Egorov created Curve Finance to solve this problem. The core idea is simple: design a new formula that behaves <strong>"like a straight line near 1:1, and like a curve at the extremes."</strong>
            </p>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · StableSwap Algorithm — The Magic Formula</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Curve's StableSwap is a <strong>hybrid invariant</strong> that combines two formulas into one. Near equilibrium, it behaves like Constant Sum (x+y=k), minimizing slippage. At the extremes, it switches to Constant Product (x×y=k) to prevent the pool from completely draining.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-6 my-6 font-mono text-sm">
              <p className="text-yellow-400 mb-3">{'// Curve StableSwap Invariant'}</p>
              <p className="text-white">{'A · n^n · Σxi  +  D  =  A · n^n · D  +  D^(n+1) / (n^n · Πxi)'}</p>
              <div className="mt-4 space-y-1 text-gray-400 text-xs">
                <p><span className="text-green-400">A</span>  — Amplification factor, varies per pool (typically 100~2000)</p>
                <p><span className="text-green-400">n</span>  — Number of assets (2pool=2, 3pool=3)</p>
                <p><span className="text-green-400">xi</span> — Balance of each asset</p>
                <p><span className="text-green-400">D</span>  — Total liquidity invariant (value when all balances are equal)</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-700">
                <p className="text-gray-400 text-xs mb-2">When A=0 → identical to Uniswap x·y=k</p>
                <p className="text-gray-400 text-xs">When A=∞ → perfect straight line x+y=k (zero slippage)</p>
              </div>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The <strong>amplification factor A</strong> is the key. The larger A is, the more "flat" the price curve stays near 1:1, reducing slippage. Curve's 3pool uses <strong>A = 2000</strong>, which means hundreds of times less slippage than Uniswap for the same trade.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Real Slippage Comparison — $1M USDC → USDT Swap</p>
              <div className="space-y-3">
                {[
                  { label: 'Uniswap v2 (x·y=k)', bar: 'w-full', color: 'bg-red-400', value: '~3.0% slippage', loss: '-$30,000' },
                  { label: 'Uniswap v3 (concentrated)', bar: 'w-3/5', color: 'bg-orange-400', value: '~0.05~0.2%', loss: '-$2,000' },
                  { label: 'Curve 3pool (A=2000)', bar: 'w-4', color: 'bg-yellow-400', value: '~0.001~0.01%', loss: '-$100' },
                ].map((row, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400 mb-1">
                      <span>{row.label}</span>
                      <span className="font-mono">{row.value} ({row.loss})</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className={`h-full ${row.bar} ${row.color} rounded-full`} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · Pool Architecture</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Curve has hundreds of pools, but the core structure falls into <strong>3 types</strong>, each designed for different asset classes.
            </p>

            <div className="space-y-5 my-6">
              <div className="border border-yellow-200 dark:border-yellow-800 rounded-xl overflow-hidden">
                <div className="bg-yellow-50 dark:bg-yellow-900/20 px-5 py-3 flex items-center justify-between">
                  <div>
                    <span className="text-sm font-bold text-yellow-800 dark:text-yellow-300">3pool (TriPool)</span>
                    <span className="ml-2 text-xs bg-yellow-200 dark:bg-yellow-800 text-yellow-800 dark:text-yellow-200 px-2 py-0.5 rounded-full">Most Important</span>
                  </div>
                  <span className="text-xs text-gray-500 font-mono">A = 2000</span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    The <strong>DAI / USDC / USDT</strong> pool — Curve's flagship. One of the most referenced liquidity pools in all of DeFi. Other pools use 3CRV (the 3pool LP token) as a base asset, making 3pool the <strong>MetaPool foundation</strong>.
                  </p>
                </div>
              </div>

              <div className="border border-blue-200 dark:border-blue-800 rounded-xl overflow-hidden">
                <div className="bg-blue-50 dark:bg-blue-900/20 px-5 py-3">
                  <span className="text-sm font-bold text-blue-800 dark:text-blue-300">MetaPool</span>
                  <span className="ml-2 text-xs bg-blue-200 dark:bg-blue-800 text-blue-800 dark:text-blue-200 px-2 py-0.5 rounded-full">New Stablecoin Entry Point</span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">
                    Rather than creating separate pools with DAI, USDC, and USDT individually (fragmenting liquidity), a MetaPool pairs a <strong>new stablecoin + 3CRV</strong> to indirectly access 3pool's deep liquidity. FRAX, LUSD, MIM, GUSD all entered Curve this way.
                  </p>
                  <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-xs">
                    <p className="text-gray-400">{'// Example: FRAX MetaPool'}</p>
                    <p className="text-white mt-1">FRAX  <span className="text-yellow-400">+</span>  3CRV (LP token of DAI+USDC+USDT)</p>
                    <p className="text-gray-400 mt-2">{'→ FRAX can be swapped for DAI, USDC, or USDT'}</p>
                    <p className="text-gray-400">{'→ Instantly leverages 3pool deep liquidity'}</p>
                  </div>
                </div>
              </div>

              <div className="border border-purple-200 dark:border-purple-800 rounded-xl overflow-hidden">
                <div className="bg-purple-50 dark:bg-purple-900/20 px-5 py-3">
                  <span className="text-sm font-bold text-purple-800 dark:text-purple-300">Tricrypto</span>
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    <strong>USDT / WBTC / ETH</strong> pool using Curve's <strong>CryptoSwap algorithm</strong>. Instead of a fixed amplification factor A, it uses an internal EMA oracle to track the "current equilibrium price" and automatically adjusts the curve shape. Designed for volatile assets, not stablecoins.
                  </p>
                </div>
              </div>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · Providing Liquidity — Becoming an LP</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Depositing liquidity into Curve earns you <strong>LP tokens</strong>. Deposit into 3pool and receive <strong>3CRV</strong> tokens. Stake those in a gauge and earn additional CRV rewards.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">$10,000 into 3pool → Revenue Streams</p>
              <div className="space-y-3">
                {[
                  { step: '1', title: 'Deposit DAI/USDC/USDT', desc: 'Can deposit one asset or a combination. Imbalanced deposits are allowed (rebalanced internally)', color: 'bg-blue-500' },
                  { step: '2', title: 'Receive 3CRV LP tokens', desc: 'Get 3CRV proportional to your deposit. 3CRV represents your share of the entire pool', color: 'bg-yellow-500' },
                  { step: '3', title: 'Earn swap fees', desc: 'Every swap in the pool generates a 0.04% fee automatically distributed to LPs. 3CRV value increases over time', color: 'bg-green-500' },
                  { step: '4', title: 'Stake in gauge → CRV rewards', desc: 'Staking 3CRV in the gauge earns additional CRV tokens. Up to 2.5x boost based on veCRV holdings', color: 'bg-purple-500' },
                ].map((s) => (
                  <div key={s.step} className="flex gap-4 items-start">
                    <span className={`w-7 h-7 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5`}>{s.step}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 dark:text-white">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-green-800 dark:text-green-300 mb-3">What about Impermanent Loss?</p>
              <p className="text-sm text-green-900 dark:text-green-200 leading-relaxed">
                Stablecoin pools have <strong>near-zero impermanent loss</strong> because the relative prices of assets barely change. If USDC only moves between $0.999 and $1.001, impermanent loss is essentially zero. This is why Curve LPs are far more stable than Uniswap LPs. However, if USDT or USDC loses its peg, significant losses can occur.
              </p>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · CRV Token & veCRV — The Heart of Governance</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              CRV is Curve's governance and incentive token. Simply holding it has value, but converting it to <strong>veCRV (vote-escrowed CRV)</strong> unlocks an entirely different tier of power. ve-tokenomics is considered one of the most clever token economic designs in DeFi history.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-6 my-6 font-mono text-sm">
              <p className="text-yellow-400 mb-3">{'// CRV → veCRV Conversion Rules'}</p>
              <p className="text-white">1 CRV  +  1-year lock  =  <span className="text-yellow-400">0.25 veCRV</span></p>
              <p className="text-white">1 CRV  +  2-year lock  =  <span className="text-yellow-400">0.50 veCRV</span></p>
              <p className="text-white">1 CRV  +  3-year lock  =  <span className="text-yellow-400">0.75 veCRV</span></p>
              <p className="text-white">1 CRV  +  4-year lock  =  <span className="text-yellow-400">1.00 veCRV</span>  ← maximum</p>
              <p className="text-gray-400 mt-3 text-xs">{'// veCRV balance decreases linearly as lock expires'}</p>
              <p className="text-gray-400 text-xs">{'// veCRV is non-transferable, cannot be listed on exchanges'}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                { icon: '📊', title: 'Gauge Vote Power', color: 'border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20', desc: 'Vote on gauge weights — which pools receive what share of CRV incentives. Control where liquidity flows across the protocol.' },
                { icon: '⚡', title: 'LP Boost (up to 2.5x)', color: 'border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-900/20', desc: 'Amplify CRV rewards on your LP positions by up to 2.5x. The more veCRV you hold, the more pools benefit from your boost.' },
                { icon: '💰', title: 'Protocol Fee Share', color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/20', desc: '50% of all trading fees across Curve pools are distributed to veCRV holders weekly in the form of 3CRV (stablecoins).' },
              ].map((card, i) => (
                <div key={i} className={`border rounded-xl p-4 ${card.color}`}>
                  <div className="text-2xl mb-2">{card.icon}</div>
                  <p className="text-sm font-bold text-gray-900 dark:text-white mb-2">{card.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Gauge System — How CRV Is Distributed</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Each week, newly minted CRV tokens are distributed across pool <strong>gauges</strong>. A gauge is essentially a "CRV distribution pipe." How much CRV a pool receives depends on how much voting weight its gauge accumulates.
            </p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The key insight: <strong>more CRV rewards → more LPs → deeper liquidity → less slippage for users → higher TVL for the protocol</strong>. Gauge voting power is therefore <strong>liquidity control power</strong>. This is the essence of Curve Wars.
            </p>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · Curve Wars — The Fiercest Battle in DeFi</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In 2021–2022, DeFi protocols realized: "If my stablecoin has deep liquidity on Curve, it survives." FRAX, MIM, LUSD, UST... every stablecoin protocol started buying veCRV. This was the start of the <strong>Curve Wars</strong>.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Curve Wars Participant Structure</p>
              <div className="space-y-4">
                {[
                  { actor: 'DeFi Protocols (FRAX, Abracadabra, etc.)', strategy: 'Bulk-buy CRV on market → 4-year lock → veCRV → vote for own pool gauges', badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', label: 'Protocol' },
                  { actor: 'Convex Finance', strategy: 'Aggregate user CRV → convert to cvxCRV → centralize veCRV power → Convex becomes the largest veCRV holder (50%+)', badge: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300', label: 'Convex' },
                  { actor: 'Votium Protocol', strategy: 'Bribe marketplace: pays vlCVX (Convex governance token) holders to vote for specific gauge weights', badge: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300', label: 'Votium' },
                  { actor: 'Individual Investors', strategy: 'Buy CRV → deposit in Convex → earn cvxCRV → receive Votium bribes', badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', label: 'Retail' },
                ].map((row, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full flex-shrink-0 ${row.badge}`}>{row.label}</span>
                    <div>
                      <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">{row.actor}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">{row.strategy}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl p-5 my-6">
              <p className="text-sm font-bold text-amber-800 dark:text-amber-300 mb-2">Terra/LUNA UST — The Danger of Curve Wars</p>
              <p className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                In 2022, Terra built deep Curve liquidity for UST through the UST-3CRV MetaPool, buying hundreds of millions in CRV. When UST began depegging, LFG (Luna Foundation Guard) suddenly withdrew this liquidity, causing the pool's UST:3CRV ratio to become severely unbalanced. This was read as an exit signal, accelerating UST's collapse. Winning the Curve Wars doesn't guarantee a stablecoin's safety.
              </p>
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · Real-World Usage Scenarios</h2>

            <div className="space-y-5 my-6">
              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3">
                  <span className="text-sm font-bold">Scenario A: Swap $1M USDC → USDT</span>
                </div>
                <div className="px-5 py-4">
                  <div className="bg-gray-900 dark:bg-black rounded-lg p-4 font-mono text-xs">
                    <p className="text-gray-400">{'// Routed through Curve by 1inch/Paraswap or direct'}</p>
                    <p className="text-white mt-1">Input:  1,000,000 USDC</p>
                    <p className="text-white">Output: ~999,900 USDT  <span className="text-green-400">(-0.01% slippage)</span></p>
                    <p className="text-white">Fee:    400 USDC  <span className="text-gray-400">(0.04%)</span></p>
                    <p className="text-gray-400 mt-2">{'→ Distributed to LPs; 50% admin fee goes to veCRV holders'}</p>
                  </div>
                </div>
              </div>

              <div className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                <div className="bg-gray-50 dark:bg-gray-800 px-5 py-3">
                  <span className="text-sm font-bold">Scenario B: $50,000 3pool LP → CRV yield</span>
                </div>
                <div className="px-5 py-4">
                  <div className="space-y-2 text-sm">
                    {[
                      { step: '1', text: 'Deposit $50,000 USDC into 3pool → receive 3CRV LP tokens' },
                      { step: '2', text: 'Stake 3CRV in the 3pool gauge' },
                      { step: '3', text: 'CRV rewards accumulate daily (Base APY + CRV rewards)' },
                      { step: '4', text: 'Deposit earned CRV into Convex → convert to cvxCRV → additional yield' },
                      { step: '5', text: 'Or lock CRV for 4 years → veCRV → directly participate in gauge voting' },
                    ].map((s) => (
                      <div key={s.step} className="flex gap-3 items-start">
                        <span className="w-5 h-5 rounded-full bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300 text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">{s.step}</span>
                        <p className="text-gray-600 dark:text-gray-400 text-xs">{s.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* S9 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · Risks</h2>

            <div className="space-y-4 my-6">
              {[
                { title: 'Smart Contract Vulnerability', level: 'High', levelColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', desc: 'In July 2023, a Vyper compiler bug led to a $70M hack on Curve. A reentrancy lock bug in old Vyper versions (0.2.15–0.3.0) affected the ETH/stETH, alETH, and JPEG pools. Some funds were later recovered by white-hat efforts.' },
                { title: 'Depeg Risk', level: 'Medium', levelColor: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300', desc: 'If any 3pool asset significantly depegs, LPs end up holding excess amounts of the depegged asset. When USDT briefly hit $0.98 in 2022, 3pool LPs found their USDT allocation sharply increased. Also includes regulatory/issuer risk for centralized stablecoins.' },
                { title: 'A-Factor Governance Risk', level: 'Low', levelColor: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300', desc: 'The amplification factor A can be changed via Curve DAO governance. A sudden change alters slippage characteristics and can affect LP position values. In practice, drastic changes are rarely approved.' },
                { title: 'CRV Token Price Risk', level: 'High', levelColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', desc: "In August 2023, Curve founder Michael Egorov's leveraged CRV loans caused a near-liquidation crisis. Egorov had borrowed tens of millions in stablecoins using CRV as collateral. When CRV's price dropped, liquidation pressure built up. The community resolved it via OTC purchases, but the incident significantly damaged protocol credibility." },
              ].map((risk, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{risk.title}</p>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${risk.levelColor}`}>{risk.level}</span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{risk.desc}</p>
                </div>
              ))}
            </div>

            {/* S10 */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · Uniswap vs Curve vs 1inch — When to Use What</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-gray-500 rounded-tl-lg">Aspect</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-pink-600">Uniswap</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-yellow-600">Curve</th>
                    <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider text-orange-600 rounded-tr-lg">1inch</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['Best For', 'ETH/token swaps', 'Stablecoin swaps', 'Optimal route finding'],
                    ['Algorithm', 'x·y=k (v2), concentrated (v3)', 'StableSwap / CryptoSwap', 'Pathfinder (composite routing)'],
                    ['$1M USDC→USDT slippage', '~0.3%', '~0.01%', 'Auto-selects best route'],
                    ['Fee', '0.05% / 0.3% / 1%', '0.04% (3pool)', '0 (pool fees only)'],
                    ['LP Revenue', 'Fees + impermanent loss', 'Fees + CRV rewards + boost', 'No direct LP'],
                    ['Governance', 'UNI token', 'veCRV (powerful incentives)', 'N/A'],
                    ['Complexity', 'Low', 'High (veCRV/Convex knowledge needed)', 'Low (automated)'],
                    ['Use When', 'General token swaps', 'Large stablecoin swaps / LP', 'Auto-optimal swap execution'],
                  ].map(([item, uni, curve, inch], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-3 text-xs font-semibold text-gray-700 dark:text-gray-300">{item}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{uni}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400 font-medium text-yellow-700 dark:text-yellow-400">{curve}</td>
                      <td className="px-4 py-3 text-xs text-gray-600 dark:text-gray-400">{inch}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Conclusion */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-yellow-500 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">Curve Is the Heart of Stablecoin Infrastructure</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Curve is more than a DEX. It's an <strong className="text-white">infrastructure layer</strong> that allows stablecoins like USDC, USDT, and DAI to trade at parity without slippage. If 1inch decides "where to buy," Curve is "the physical space where stablecoins exchange at 1:1."
                </p>
                <p>
                  The veCRV and gauge system introduced DeFi's first true equation: <strong className="text-white">liquidity = power</strong>. Which stablecoin has deep Curve liquidity determines that stablecoin's credibility — a dynamic that sparked billions of dollars in Curve Wars.
                </p>
                <p>
                  Understanding Curve means understanding how DeFi liquidity flows, why stablecoin protocols allocate liquidity to specific pools, and why meta-layers like Convex exist. It's the key to seeing the full DeFi picture.
                </p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
