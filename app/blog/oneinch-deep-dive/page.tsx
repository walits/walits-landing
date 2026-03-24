'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function OneinchDeepDivePage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-red-500 to-orange-500">
          <Image src="/blog/1inch.jpg" alt="1inch DEX Aggregator" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-red-500/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 3</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 3 — 1inch</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">DEX 애그리게이터 완전 튜토리얼 · Pathfinder · Fusion · Limit Order</p>

            {/* 수치 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: '누적 거래량', value: '$600B+', sub: '역대 DEX 애그리게이터 1위' },
                { label: '통합 DEX', value: '400+', sub: '전 체인 합산' },
                { label: '지원 네트워크', value: '20+', sub: 'Ethereum, Arbitrum 등' },
                { label: '일 평균 거래', value: '$500M+', sub: '2025년 기준' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* ── S1 1inch란 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · 1inch란 무엇인가</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              1inch는 <strong>DEX 애그리게이터(DEX Aggregator)</strong>다. Uniswap이나 Aave처럼 유동성을 직접 보유하지 않는다. 대신 <strong>100개 이상의 DEX에 흩어진 유동성을 실시간으로 스캔</strong>해, 사용자가 특정 토큰 쌍을 스왑할 때 가장 유리한 경로와 가격을 찾아준다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2020년 ETHGlobal 해커톤에서 Sergej Kunz와 Anton Bukov가 하루 만에 프로토타입을 만들었다. "DEX마다 가격이 다른데, 왜 최적가를 자동으로 찾아주는 게 없지?"라는 단순한 의문에서 시작했다. 지금은 누적 거래량 $600B+를 처리하는 DeFi 핵심 인프라다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">1inch vs 단일 DEX — 핵심 차이</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">단일 DEX에서 스왑</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>• Uniswap v3 USDC/ETH 풀 하나만 사용</p>
                    <p>• 풀의 유동성 깊이에 따라 가격 충격 발생</p>
                    <p>• 다른 곳에 더 싼 가격이 있어도 모름</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-600 dark:text-red-400 mb-3">1inch로 스왑</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>• 100+ DEX 동시 스캔</p>
                    <p>• 여러 DEX에 주문 분산 → 가격 충격 최소화</p>
                    <p>• 항상 그 시점 최적가 보장</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-3 my-6">
              {[
                { ver: 'v1', year: '2020', key: '기본 애그리게이터. Uniswap + Kyber 통합' },
                { ver: 'v2', year: '2020', key: 'Pathfinder 알고리즘 도입. 스플릿 라우팅 시작' },
                { ver: 'v3~현재', year: '2021~', key: 'Fusion Mode, Limit Order, 멀티체인 확장' },
              ].map((v, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-red-600 dark:text-red-400 text-lg">{v.ver}</span>
                    <span className="text-xs text-gray-400">{v.year}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{v.key}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S2 두 핵심 구성 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · 두 가지 핵심 엔진</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">1inch의 모든 기능은 두 엔진 위에 올라간다.</p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="border-2 border-red-300 dark:border-red-700 rounded-xl p-6 bg-red-50 dark:bg-red-900/20">
                <p className="text-2xl mb-2">🔍</p>
                <p className="font-bold text-red-700 dark:text-red-300 text-lg mb-2">Aggregation Protocol</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">100+ DEX의 유동성을 한 번에 스캔해 최적가를 찾는 레이어. Uniswap, SushiSwap, Curve, Balancer, DODO 등 모든 주요 DEX가 통합되어 있다.</p>
              </div>
              <div className="border-2 border-orange-300 dark:border-orange-700 rounded-xl p-6 bg-orange-50 dark:bg-orange-900/20">
                <p className="text-2xl mb-2">🧭</p>
                <p className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-2">Pathfinder Algorithm</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">찾은 유동성을 어떻게 나눠서 실행할지 결정하는 라우팅 엔진. 슬리피지·가스비·출력값을 동시에 최적화한다.</p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S3 Aggregation Protocol ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · Aggregation Protocol — 100개 DEX를 한 번에</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              사용자가 1inch에서 스왑을 요청하면, Aggregation Protocol이 등록된 모든 DEX의 현재 상태를 조회한다. 각 DEX에서 해당 토큰 쌍의 유동성, 가격, 수수료를 가져와 비교한다.
            </p>

            {/* 통합 DEX 목록 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">1inch에 통합된 주요 DEX (일부)</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                {[
                  { name: 'Uniswap v2/v3/v4', type: 'AMM' },
                  { name: 'SushiSwap', type: 'AMM' },
                  { name: 'Curve Finance', type: '스테이블 AMM' },
                  { name: 'Balancer v2', type: '가중 AMM' },
                  { name: 'DODO', type: 'PMM' },
                  { name: 'Bancor', type: 'AMM' },
                  { name: 'Kyber Network', type: 'DMM' },
                  { name: 'PancakeSwap', type: 'AMM (BSC)' },
                  { name: 'Velodrome', type: 've(3,3) AMM' },
                  { name: 'Camelot', type: 'AMM (Arbitrum)' },
                  { name: 'Maverick', type: '동적 AMM' },
                  { name: '기타 400+', type: '전 체인' },
                ].map((d, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg px-3 py-2 flex items-center justify-between">
                    <span className="text-xs font-medium text-gray-800 dark:text-gray-200">{d.name}</span>
                    <span className="text-xs text-gray-400 ml-2 flex-shrink-0">{d.type}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* 온체인 조회 흐름 */}
            <h3 className="text-xl font-bold mt-8 mb-4">Aggregation 내부 동작 — 스텝별</h3>
            <div className="space-y-3 my-6">
              {[
                { n: '①', title: '쿼리 수집', desc: '사용자가 "ETH 1개 → USDC" 요청. Pathfinder가 등록된 DEX 전체에 해당 페어의 현재 가격·유동성·수수료를 쿼리한다. 오프체인에서 병렬 계산.', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
                { n: '②', title: '경로 후보 생성', desc: '직접 경로(ETH→USDC)뿐 아니라 중간 토큰을 경유하는 경로도 탐색한다. ETH→WBTC→USDC, ETH→DAI→USDC 등 최대 수십 개 경로 후보가 생성된다.', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' },
                { n: '③', title: '스플릿 비율 계산', desc: 'Pathfinder가 각 경로에 주문을 몇 % 씩 배분할지 최적화한다. 단일 경로 100%가 유리할 수도 있고, 5개 DEX에 분산하는 게 유리할 수도 있다.', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' },
                { n: '④', title: '가스비 포함 최적화', desc: '더 많은 DEX를 쪼갤수록 받는 토큰이 늘지만 가스비도 늘어난다. Pathfinder는 "받는 토큰 가치 − 가스비 비용"이 최대가 되는 배분을 선택한다.', color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' },
                { n: '⑤', title: '단일 트랜잭션 실행', desc: '계산된 경로와 배분을 하나의 트랜잭션으로 묶어 실행한다. 사용자는 서명 한 번으로 여러 DEX에서 동시에 스왑이 일어난다.', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 text-lg flex-shrink-0">{s.n}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S4 Pathfinder ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Pathfinder 라우팅 알고리즘 — 깊이 파보기</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Pathfinder는 1inch의 두뇌다. 단순히 "어떤 DEX가 가장 싼가"를 찾는 게 아니다. <strong>여러 DEX에 주문을 쪼개 분산 실행했을 때 전체 출력이 최대가 되는 배분</strong>을 실시간으로 계산한다.
            </p>

            {/* 실전 예시 */}
            <div className="bg-gray-900 rounded-2xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">실전 예시: ETH 1개 → USDC 최적 라우팅</p>
              <div className="space-y-3">
                {/* Single DEX */}
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-3">❌ 단일 DEX (Uniswap v3 ETH/USDC)</p>
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <span className="bg-gray-700 px-3 py-1.5 rounded-lg text-white">ETH 1.0</span>
                    <span className="text-gray-500">→</span>
                    <span className="bg-gray-700 px-3 py-1.5 rounded-lg text-gray-300">Uniswap v3</span>
                    <span className="text-gray-500">→</span>
                    <span className="bg-gray-700 px-3 py-1.5 rounded-lg text-amber-400">3,620 USDC</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">풀 크기 대비 주문이 커서 Price Impact 발생</p>
                </div>

                {/* Split routing */}
                <div className="bg-gray-800 rounded-xl p-4 border border-red-500/40">
                  <p className="text-xs text-red-400 mb-3">✅ Pathfinder 스플릿 라우팅</p>
                  <div className="space-y-2">
                    {[
                      { pct: '60%', from: '0.60 ETH', via: 'Uniswap v3', to: '2,192 USDC', color: 'text-blue-400' },
                      { pct: '25%', from: '0.25 ETH', via: 'SushiSwap', to: '918 USDC', color: 'text-purple-400' },
                      { pct: '15%', from: '0.15 ETH', via: 'Curve 3pool', to: '554 USDC', color: 'text-green-400' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono">
                        <span className={`w-8 font-bold ${r.color}`}>{r.pct}</span>
                        <span className="bg-gray-700 px-2 py-1 rounded text-gray-300">{r.from}</span>
                        <span className="text-gray-600">→</span>
                        <span className={`px-2 py-1 rounded bg-gray-700 ${r.color}`}>{r.via}</span>
                        <span className="text-gray-600">→</span>
                        <span className="bg-gray-700 px-2 py-1 rounded text-white">{r.to}</span>
                      </div>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between text-sm font-mono">
                      <span className="text-gray-400">합계</span>
                      <span className="text-red-400 font-bold">3,664 USDC (+44 USDC 추가 수익)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 최적화 3가지 축 */}
            <h3 className="text-xl font-bold mt-8 mb-4">Pathfinder가 동시에 최적화하는 3가지 축</h3>
            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                { icon: '📉', title: '슬리피지 최소화', desc: '주문을 여러 풀에 분산하면 각 풀에 미치는 Price Impact가 작아진다. 500만 달러 스왑을 5개 풀에 100만씩 나누면 각 풀에 가하는 충격이 1/5로 줄어든다.' },
                { icon: '⛽', title: '가스비 최적화', desc: '풀을 많이 쪼갤수록 받는 토큰이 늘지만 가스비도 늘어난다. Pathfinder는 한계수익(한 풀 더 추가했을 때 얻는 추가 USDC)이 추가 가스비보다 클 때만 분할한다.' },
                { icon: '💰', title: '최종 출력 최대화', desc: '위 두 조건을 동시에 만족하는 배분 비율을 실시간 계산한다. 결과적으로 사용자가 받는 토큰 수량이 어떤 단일 DEX보다 많아진다.' },
              ].map((a, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <p className="text-2xl mb-2">{a.icon}</p>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{a.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>

            {/* 경로 타입 */}
            <h3 className="text-xl font-bold mt-8 mb-4">경로 유형 — Pathfinder가 탐색하는 4가지</h3>
            <div className="space-y-3 my-6">
              {[
                { type: '직접 경로', example: 'ETH → USDC', desc: '토큰 A → 토큰 B를 직접 지원하는 풀이 있을 때 사용. 가장 단순하지만 항상 최적은 아니다.', tag: 'Direct' },
                { type: '단일 경유', example: 'ETH → WBTC → USDC', desc: '중간 토큰을 한 번 경유한다. 직접 풀보다 두 개의 깊은 풀을 통과하는 게 유리할 때 사용된다.', tag: 'Single Hop' },
                { type: '다중 경유', example: 'ETH → DAI → USDT → USDC', desc: '두 개 이상의 중간 토큰을 경유한다. 특히 스테이블코인 간 환전에서 Curve를 경유하는 경로가 자주 선택된다.', tag: 'Multi Hop' },
                { type: '스플릿 경로', example: 'ETH 60% Uniswap + 40% SushiSwap', desc: '동일 경로를 여러 DEX에 분산하거나, 완전히 다른 경로를 병렬로 실행한다. 대부분의 대형 스왑에서 선택된다.', tag: 'Split' },
              ].map((r, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-4 flex gap-4">
                  <div className="flex-shrink-0">
                    <span className="text-xs font-bold bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-300 px-2 py-1 rounded-full">{r.tag}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.type}</p>
                    <p className="text-xs font-mono text-red-600 dark:text-red-400 mt-0.5 mb-1">{r.example}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* API 코드 */}
            <h3 className="text-xl font-bold mt-8 mb-4">1inch API로 최적 경로 직접 조회하기</h3>
            <div className="bg-gray-900 rounded-xl p-5 my-6 text-xs font-mono overflow-x-auto space-y-1">
              <p className="text-gray-500">// Step 1: 최적 경로 쿼리 (quote)</p>
              <p><span className="text-blue-400">GET</span> <span className="text-green-400">https://api.1inch.dev/swap/v6.0/1/quote</span></p>
              <p className="text-gray-500">// 파라미터</p>
              <p>{'{'}</p>
              <p className="pl-4"><span className="text-yellow-300">src</span>: <span className="text-green-400">"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"</span>,  <span className="text-gray-500">// ETH</span></p>
              <p className="pl-4"><span className="text-yellow-300">dst</span>: <span className="text-green-400">"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"</span>,  <span className="text-gray-500">// USDC</span></p>
              <p className="pl-4"><span className="text-yellow-300">amount</span>: <span className="text-green-400">"1000000000000000000"</span>,  <span className="text-gray-500">// 1 ETH (wei)</span></p>
              <p>{'}'}</p>
              <p className="mt-3 text-gray-500">// 응답 (예시)</p>
              <p>{'{'}</p>
              <p className="pl-4"><span className="text-yellow-300">"dstAmount"</span>: <span className="text-green-400">"3664231847"</span>,  <span className="text-gray-500">// 3664.23 USDC</span></p>
              <p className="pl-4"><span className="text-yellow-300">"protocols"</span>: [</p>
              <p className="pl-8">[ {'{'} <span className="text-yellow-300">"name"</span>: <span className="text-green-400">"UNISWAP_V3"</span>, <span className="text-yellow-300">"part"</span>: <span className="text-orange-400">60</span> {'}'} ],</p>
              <p className="pl-8">[ {'{'} <span className="text-yellow-300">"name"</span>: <span className="text-green-400">"SUSHISWAP"</span>, <span className="text-yellow-300">"part"</span>: <span className="text-orange-400">25</span> {'}'} ],</p>
              <p className="pl-8">[ {'{'} <span className="text-yellow-300">"name"</span>: <span className="text-green-400">"CURVE"</span>, <span className="text-yellow-300">"part"</span>: <span className="text-orange-400">15</span> {'}'} ]</p>
              <p className="pl-4">]</p>
              <p>{'}'}</p>
              <p className="mt-3 text-gray-500">// Step 2: 실제 스왑 트랜잭션 데이터 조회</p>
              <p><span className="text-blue-400">GET</span> <span className="text-green-400">https://api.1inch.dev/swap/v6.0/1/swap</span></p>
              <p>{'{'}</p>
              <p className="pl-4"><span className="text-yellow-300">src</span>: <span className="text-green-400">"0xEeee..."</span>, <span className="text-yellow-300">dst</span>: <span className="text-green-400">"0xA0b8..."</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">amount</span>: <span className="text-green-400">"1000000000000000000"</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">from</span>: <span className="text-green-400">"0xYourWalletAddress"</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">slippage</span>: <span className="text-orange-400">1</span>  <span className="text-gray-500">// 1% 슬리피지 허용</span></p>
              <p>{'}'}</p>
              <p className="mt-2 text-gray-500">// 응답의 tx 객체를 그대로 ethers.js로 전송하면 됨</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S5 Limit Order ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Limit Order — 지정가 주문</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              일반 DEX 스왑은 "지금 즉시" 체결된다. Limit Order는 <strong>"ETH가 $3,500 이상이 되면 팔아라"</strong> 같은 조건부 주문이다. 주문은 오프체인에 서명된 형태로 보관되고, 조건이 충족되면 온체인에서 집행된다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  n: '①',
                  title: '주문 생성 — 오프체인 서명',
                  desc: '사용자가 조건(가격, 수량, 만료 시간)을 설정하고 EIP-712 서명을 생성한다. 이 서명은 1inch 서버에 저장된다. 블록체인에 기록되지 않으므로 가스비가 없다.',
                  code: `// Limit Order 구조 (EIP-712 타입 데이터)
{
  makerAsset: "0xEeee...",    // 팔 토큰 (ETH)
  takerAsset: "0xA0b8...",    // 받을 토큰 (USDC)
  makingAmount: "1000000000000000000",  // 1 ETH
  takingAmount: "3500000000",           // 3,500 USDC (지정가)
  maker: "0xYourAddress",
  deadline: 1735689600,       // 만료 시간 (Unix timestamp)
  salt: "random_nonce"        // 중복 방지
}`,
                },
                {
                  n: '②',
                  title: '체결 대기 — 오프체인 감시',
                  desc: '1inch 서버와 외부 Resolver들이 이 주문을 실시간으로 감시한다. ETH 가격이 $3,500에 도달하는 순간 체결 가능 상태가 된다.',
                  code: null,
                },
                {
                  n: '③',
                  title: '체결 — 온체인 집행',
                  desc: 'Resolver가 1inch LimitOrderProtocol 컨트랙트를 호출해 주문을 집행한다. 사용자 지갑에서 ETH가 나가고 USDC가 들어온다. Resolver는 가스비를 내고 스프레드에서 보상을 받는다.',
                  code: `// Resolver의 fillOrder() 호출
limitOrderProtocol.fillOrder(
  order,          // 사용자 서명 주문
  signature,      // EIP-712 서명
  makingAmount,   // 집행할 수량
  takingAmount,   // 받을 수량
  thresholdAmount // 슬리피지 보호
)`,
                },
              ].map((s, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl p-5">
                  <div className="flex items-start gap-3 mb-3">
                    <span className="font-mono font-bold text-gray-500 text-lg flex-shrink-0">{s.n}</span>
                    <p className="font-semibold text-gray-900 dark:text-white">{s.title}</p>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-3">{s.desc}</p>
                  {s.code && (
                    <pre className="bg-gray-900 rounded-lg p-4 text-xs font-mono text-gray-300 overflow-x-auto whitespace-pre">{s.code}</pre>
                  )}
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-3">Limit Order 장점</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 주문 생성·취소에 가스비 없음 (오프체인 서명)</p>
                  <p>• 원하는 가격에 자동 체결</p>
                  <p>• 만료 시간 설정 가능</p>
                  <p>• 부분 체결(Partial Fill) 지원</p>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
                <p className="font-semibold text-amber-800 dark:text-amber-300 mb-3">주의사항</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 체결 시점에 지갑에 잔액 있어야 함</p>
                  <p>• 체결 가스비는 Resolver가 부담</p>
                  <p>• 가격이 조건에 도달해도 유동성 없으면 미체결 가능</p>
                  <p>• 1inch 서버가 다운되면 감시 불가 (탈중앙화 리스크)</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S6 Fusion Mode ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Fusion Mode — 가스비 없는 스왑</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Fusion은 1inch의 가장 혁신적인 기능이다. 사용자가 <strong>가스비를 한 푼도 내지 않고</strong> 스왑을 실행할 수 있다. 이게 어떻게 가능한가?
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">핵심 원리 — Dutch Auction + Resolver 경쟁</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">사용자의 주문은 "경매" 형태로 제출된다. 초기에는 사용자에게 매우 유리한 가격으로 시작해, 시간이 지날수록 Resolver에게 유리한 방향으로 가격이 내려간다. 가장 먼저 수익성이 생긴다고 판단한 Resolver가 자신의 가스비로 체결한다.</p>
            </div>

            {/* Fusion 흐름 */}
            <div className="space-y-4 my-6">
              {[
                {
                  n: '①',
                  title: '사용자: 서명만 하면 끝',
                  desc: '사용자는 "ETH 1개를 최소 3,600 USDC 이상에 팔겠다"는 주문에 서명한다. 가스비 없음. 트랜잭션 없음. 지갑에서 approve()만 미리 돼 있으면 된다.',
                  color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                },
                {
                  n: '②',
                  title: 'Dutch Auction 시작',
                  desc: '주문이 제출되면 경매가 시작된다. t=0에서 출발가는 3,660 USDC (사용자에 최대한 유리). 시간이 지날수록 3,650 → 3,640 → 3,630... 으로 내려간다. 사용자가 설정한 최저선(3,600)에 도달하면 경매 종료.',
                  color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800',
                },
                {
                  n: '③',
                  title: 'Resolver 경쟁',
                  desc: 'Resolver들은 실시간으로 시장 가격을 모니터링한다. 경매 가격이 자신이 조달할 수 있는 가격보다 낮아지는 순간, 자신의 가스비를 내고 체결 트랜잭션을 제출한다. Resolver는 시장가(예: 3,655)와 경매가(예: 3,640) 사이의 스프레드(15 USDC)를 이익으로 가져간다.',
                  color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800',
                },
                {
                  n: '④',
                  title: '사용자: 가스비 없이 체결 완료',
                  desc: '사용자 지갑에서 ETH가 나가고 USDC가 들어온다. 가스비는 Resolver가 전부 부담했다. 사용자는 경매를 통해 최적에 가까운 가격을 얻고, Resolver는 스프레드로 가스비 이상의 수익을 낸다.',
                  color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800',
                },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 text-lg flex-shrink-0">{s.n}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dutch Auction 시각화 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Dutch Auction 가격 흐름</p>
              <div className="relative">
                <div className="flex justify-between text-xs text-gray-400 mb-2">
                  <span>t=0 (경매 시작)</span>
                  <span>t=30초 (체결 예시)</span>
                  <span>t=60초 (최저선)</span>
                </div>
                <div className="relative h-12 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-red-400 opacity-60" />
                  <div className="absolute top-1/2 left-[50%] -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-lg border-2 border-gray-600" />
                </div>
                <div className="flex justify-between text-xs mt-1">
                  <span className="text-green-600 dark:text-green-400 font-mono">3,660 USDC</span>
                  <span className="text-orange-600 dark:text-orange-400 font-mono font-bold">3,640 USDC (체결)</span>
                  <span className="text-red-600 dark:text-red-400 font-mono">3,600 USDC</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Resolver가 t=30초 시점에 체결 → 사용자: 3,640 USDC 수취 / Resolver: 시장가 3,655 - 경매가 3,640 = 15 USDC 이익 (가스비 제외)</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-3">Fusion 장점</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 사용자 가스비 완전 무료</p>
                  <p>• MEV 샌드위치 어택 원천 차단 (private 주문)</p>
                  <p>• Dutch Auction으로 최적가에 근접</p>
                  <p>• 실패 트랜잭션 없음 (체결 or 만료)</p>
                </div>
              </div>
              <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-700 rounded-xl p-5">
                <p className="font-semibold text-amber-800 dark:text-amber-300 mb-3">Fusion 주의사항</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 즉시 체결 보장 없음 (경매 종료까지 대기)</p>
                  <p>• Resolver 네트워크에 의존</p>
                  <p>• 소액 스왑은 Resolver 관심도 낮을 수 있음</p>
                  <p>• 일부 토큰은 Fusion 미지원</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S7 Fusion+ ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Fusion+ — 크로스체인 가스리스 스왑</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Fusion의 확장판이다. Ethereum의 ETH를 Arbitrum의 USDC로 바꾸는 <strong>크로스체인 스왑</strong>을 가스비 없이 실행한다. 내부적으로 Hashlock + Timelock 기반의 원자 교환(Atomic Swap)을 사용해, 브릿지 없이 두 체인 간 거래를 완료한다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Fusion+ 흐름</p>
              <div className="space-y-2 text-sm font-mono text-gray-600 dark:text-gray-400">
                <p>① 사용자: Ethereum에서 ETH 잠금 (서명)</p>
                <p>② Resolver: Arbitrum에서 USDC 먼저 지급</p>
                <p>③ 사용자: USDC 수령 후 비밀키 공개</p>
                <p>④ Resolver: 비밀키로 Ethereum의 ETH 수령</p>
                <p className="text-green-600 dark:text-green-400">→ 양측 모두 손해 없는 원자적 교환 완료</p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S8 1inch Wallet & Gas Refund ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · 추가 기능 모음</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: 'Gas Credits',
                  tagColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  title: 'Gas Credits — 1INCH 토큰으로 가스비 대납',
                  desc: '1INCH 토큰을 Gas Credits로 전환하면, 스왑 시 ETH 대신 1INCH로 가스비를 낼 수 있다. ETH가 없어도 스왑이 가능하며, 가스비를 ETH로 미리 준비할 필요가 없다. 특히 ETH를 처음 받는 신규 지갑에 유용하다.',
                },
                {
                  tag: 'Spot Price API',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'Spot Price API — 실시간 가격 피드',
                  desc: '모든 통합 DEX의 현재 가격을 집계한 실시간 가격 피드를 제공한다. 다른 DeFi 프로토콜의 오라클로 활용할 수 있으며, Uniswap TWAP보다 최신 데이터를 제공한다.',
                },
                {
                  tag: 'Portfolio Tracker',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  title: '포트폴리오 트래커',
                  desc: '지갑 주소를 입력하면 모든 체인의 토큰 잔액, PnL(손익), 거래 내역을 한 번에 조회한다. 1inch 앱 내에서 멀티체인 포트폴리오를 통합 관리할 수 있다.',
                },
                {
                  tag: 'P2P Swap',
                  tagColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  title: 'P2P 스왑 — 개인 간 직접 교환',
                  desc: 'DEX 수수료 없이 특정 지갑 주소와 직접 토큰을 교환한다. OTC(장외 거래)처럼 합의된 가격으로 거래하되, 스마트컨트랙트가 원자적 실행을 보장한다. 서로 아는 사이끼리 DEX 없이 교환할 때 유용하다.',
                },
              ].map((f, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${f.tagColor}`}>{f.tag}</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{f.title}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S9 1INCH 토큰 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · 1INCH 토큰 & 거버넌스</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">1INCH 토큰 역할</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 거버넌스 투표 (파라미터 변경, 신규 DEX 통합 등)</p>
                  <p>• Gas Credits로 전환해 가스비 대납</p>
                  <p>• Resolver로 참여 시 스테이킹 요구</p>
                  <p>• 프로토콜 수수료 일부 분배 (스테이킹자)</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Resolver 참여 조건</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 일정량의 1INCH 스테이킹 필요</p>
                  <p>• Fusion 주문 체결 경쟁에 참여</p>
                  <p>• 체결 성공 시 스프레드 수익</p>
                  <p>• 악의적 행동 시 스테이킹 슬래싱</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S10 경쟁사 비교 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">10 · DEX 애그리게이터 비교</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    {['항목', '1inch', 'Paraswap', 'Cowswap', '0x/Matcha'].map(h => (
                      <th key={h} className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '통합 DEX 수', a: '400+', b: '50+', c: '50+', d: '100+' },
                    { item: '가스리스 스왑', a: '✅ Fusion', b: '❌', c: '✅ CoW Protocol', d: '✅ Gasless' },
                    { item: '지정가 주문', a: '✅', b: '✅', c: '✅', d: '✅' },
                    { item: '크로스체인', a: '✅ Fusion+', b: '✅', c: '❌', d: '❌' },
                    { item: 'MEV 보호', a: '✅ (Fusion)', b: '부분', c: '✅ (배치 경매)', d: '✅' },
                    { item: '자체 AMM', a: '1inch Liquidity Protocol', b: '❌', c: '❌', d: '❌' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-red-700 dark:text-red-300">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-700 dark:text-gray-300 text-xs font-semibold">{r.a}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.b}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.c}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S11 리스크 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6">11 · 리스크</h2>
            <div className="space-y-3 my-6">
              {[
                { risk: '라우팅 오류', desc: 'Pathfinder 계산이 특수 상황(극단적 변동성, 오라클 오작동)에서 최적이 아닌 경로를 선택할 수 있다. 슬리피지 설정으로 방어해야 한다.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Resolver 의존성', desc: 'Fusion Mode는 Resolver 네트워크가 활성화돼야 한다. 참여 Resolver가 적으면 체결이 지연되거나 만료될 수 있다.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: '스마트컨트랙트 리스크', desc: '복수의 DEX 컨트랙트를 경유하므로 공격 표면이 넓다. 각 통합 DEX의 취약점이 1inch 사용자에게도 영향을 줄 수 있다.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: '중앙화 위험 (API)', desc: '1inch API 서버가 다운되면 최적 경로 계산이 불가능하다. 직접 컨트랙트를 호출하는 방법이 있으나 일반 사용자는 어렵다.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
                { risk: '규제 리스크', desc: '1inch Labs가 미국·EU 규제 대상이 될 경우 프론트엔드 제한 가능. 컨트랙트 자체는 검열 불가.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <span className={`text-xs font-bold w-10 flex-shrink-0 ${r.color}`}>{r.level}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.risk}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 마무리 */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 my-8">
              <p className="font-bold text-gray-900 dark:text-white text-lg mb-4">1inch를 한 문장으로</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                1inch는 <strong>DEX 유동성을 모아 최적 경로를 찾고, 가스리스 스왑까지 제공하는 완성형 DeFi 거래 인프라</strong>다. Pathfinder가 100개 DEX를 실시간 스캔하고, Fusion이 사용자 대신 가스비를 내며, Limit Order가 시장이 원하는 가격에 도달할 때까지 기다린다. 단순 애그리게이터를 넘어 거래의 전 과정을 자동화한다.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* ── EN ── */}
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 3 — 1inch</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">Complete DEX Aggregator Tutorial · Pathfinder · Fusion · Limit Order</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Cumulative Volume', value: '$600B+', sub: '#1 DEX aggregator ever' },
                { label: 'Integrated DEXs', value: '400+', sub: 'All chains combined' },
                { label: 'Networks', value: '20+', sub: 'Ethereum, Arbitrum, etc.' },
                { label: 'Daily Volume', value: '$500M+', sub: '2025 average' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-red-600 dark:text-red-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">01 · What Is 1inch?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              1inch is a <strong>DEX aggregator</strong>. Unlike Uniswap or Aave, it holds no liquidity of its own. Instead it <strong>scans 100+ DEXs in real time</strong> and finds the best route and price for any token swap.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Built in a single day at the ETHGlobal 2020 hackathon by Sergej Kunz and Anton Bukov. The question was simple: "DEX prices differ everywhere — why doesn't anything find the best one automatically?" Today it processes $600B+ in cumulative volume.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">1inch vs Single DEX</p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="font-semibold text-gray-700 dark:text-gray-300 mb-3">Single DEX Swap</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>• Uses only one Uniswap v3 pool</p>
                    <p>• Price impact based on that pool's depth</p>
                    <p>• Unaware of better prices elsewhere</p>
                  </div>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4 border border-red-200 dark:border-red-800">
                  <p className="font-semibold text-red-600 dark:text-red-400 mb-3">1inch Swap</p>
                  <div className="space-y-2 text-gray-600 dark:text-gray-400">
                    <p>• Scans 100+ DEXs simultaneously</p>
                    <p>• Splits order → minimizes price impact</p>
                    <p>• Always finds the best available price</p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Two Core Engines</h2>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="border-2 border-red-300 dark:border-red-700 rounded-xl p-6 bg-red-50 dark:bg-red-900/20">
                <p className="text-2xl mb-2">🔍</p>
                <p className="font-bold text-red-700 dark:text-red-300 text-lg mb-2">Aggregation Protocol</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">Scans liquidity across 100+ DEXs simultaneously to find the best price for any swap. Integrates Uniswap, SushiSwap, Curve, Balancer, DODO, and hundreds more.</p>
              </div>
              <div className="border-2 border-orange-300 dark:border-orange-700 rounded-xl p-6 bg-orange-50 dark:bg-orange-900/20">
                <p className="text-2xl mb-2">🧭</p>
                <p className="font-bold text-orange-700 dark:text-orange-300 text-lg mb-2">Pathfinder Algorithm</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">The routing engine that decides how to split and execute across DEXs. Simultaneously optimizes slippage, gas cost, and output value.</p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">03 · Aggregation Protocol — 100+ DEXs at Once</h2>
            <div className="space-y-3 my-6">
              {[
                { n: '①', title: 'Query Collection', desc: 'User requests "1 ETH → USDC." Pathfinder queries every registered DEX for current liquidity, price, and fees for that pair. Runs in parallel off-chain.', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
                { n: '②', title: 'Route Candidate Generation', desc: 'Beyond direct ETH→USDC paths, it explores routes via intermediate tokens: ETH→WBTC→USDC, ETH→DAI→USDC, etc. Dozens of candidate routes are generated.', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' },
                { n: '③', title: 'Split Ratio Calculation', desc: 'Pathfinder determines the optimal % to allocate to each route. 100% on one DEX may be best, or splitting across 5 DEXs may yield more output.', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' },
                { n: '④', title: 'Gas-Inclusive Optimization', desc: 'Splitting across more DEXs increases output but also gas. Pathfinder only adds another split when the marginal gain (extra USDC) exceeds the marginal gas cost.', color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-800' },
                { n: '⑤', title: 'Single Transaction Execution', desc: 'The optimal route and split are bundled into one transaction. One signature from the user triggers swaps across multiple DEXs simultaneously.', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 text-lg flex-shrink-0">{s.n}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Pathfinder Routing Algorithm — Deep Dive</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Pathfinder isn't just finding "which DEX is cheapest." It calculates the <strong>optimal allocation across multiple DEXs that maximizes total output</strong> in real time.
            </p>

            <div className="bg-gray-900 rounded-2xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Example: 1 ETH → USDC Optimal Routing</p>
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-xl p-4">
                  <p className="text-xs text-gray-400 mb-3">❌ Single DEX (Uniswap v3 ETH/USDC)</p>
                  <div className="flex items-center gap-2 text-sm font-mono">
                    <span className="bg-gray-700 px-3 py-1.5 rounded-lg text-white">1.0 ETH</span>
                    <span className="text-gray-500">→</span>
                    <span className="bg-gray-700 px-3 py-1.5 rounded-lg text-gray-300">Uniswap v3</span>
                    <span className="text-gray-500">→</span>
                    <span className="bg-gray-700 px-3 py-1.5 rounded-lg text-amber-400">3,620 USDC</span>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">Price impact from order size</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-red-500/40">
                  <p className="text-xs text-red-400 mb-3">✅ Pathfinder Split Routing</p>
                  <div className="space-y-2">
                    {[
                      { pct: '60%', from: '0.60 ETH', via: 'Uniswap v3', to: '2,192 USDC', color: 'text-blue-400' },
                      { pct: '25%', from: '0.25 ETH', via: 'SushiSwap', to: '918 USDC', color: 'text-purple-400' },
                      { pct: '15%', from: '0.15 ETH', via: 'Curve', to: '554 USDC', color: 'text-green-400' },
                    ].map((r, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs font-mono">
                        <span className={`w-8 font-bold ${r.color}`}>{r.pct}</span>
                        <span className="bg-gray-700 px-2 py-1 rounded text-gray-300">{r.from}</span>
                        <span className="text-gray-600">→</span>
                        <span className={`px-2 py-1 rounded bg-gray-700 ${r.color}`}>{r.via}</span>
                        <span className="text-gray-600">→</span>
                        <span className="bg-gray-700 px-2 py-1 rounded text-white">{r.to}</span>
                      </div>
                    ))}
                    <div className="border-t border-gray-700 pt-2 mt-2 flex justify-between text-sm font-mono">
                      <span className="text-gray-400">Total</span>
                      <span className="text-red-400 font-bold">3,664 USDC (+44 USDC vs single DEX)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4 my-6">
              {[
                { icon: '📉', title: 'Minimize Slippage', desc: 'Splitting across pools reduces each pool\'s price impact. A $5M swap split 5 ways hits each pool with only $1M — 1/5 the price impact.' },
                { icon: '⛽', title: 'Optimize Gas', desc: 'More splits = more output but more gas. Pathfinder only adds a split when the marginal gain in output tokens exceeds the marginal gas cost.' },
                { icon: '💰', title: 'Maximize Output', desc: 'The allocation that satisfies both constraints simultaneously is selected. The result beats any single DEX every time.' },
              ].map((a, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                  <p className="text-2xl mb-2">{a.icon}</p>
                  <p className="font-semibold text-gray-900 dark:text-white text-sm mb-2">{a.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{a.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-900 rounded-xl p-5 my-6 text-xs font-mono overflow-x-auto space-y-1">
              <p className="text-gray-500">// Step 1: Get optimal quote</p>
              <p><span className="text-blue-400">GET</span> <span className="text-green-400">https://api.1inch.dev/swap/v6.0/1/quote</span></p>
              <p>{'{'}</p>
              <p className="pl-4"><span className="text-yellow-300">src</span>: <span className="text-green-400">"0xEeeeeEeeeEeEeeEeEeEeeEEEeeeeEeeeeeeeEEeE"</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">dst</span>: <span className="text-green-400">"0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48"</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">amount</span>: <span className="text-green-400">"1000000000000000000"</span></p>
              <p>{'}'}</p>
              <p className="mt-3 text-gray-500">// Response</p>
              <p>{'{'}</p>
              <p className="pl-4"><span className="text-yellow-300">"dstAmount"</span>: <span className="text-green-400">"3664231847"</span>,</p>
              <p className="pl-4"><span className="text-yellow-300">"protocols"</span>: [</p>
              <p className="pl-8">[ {'{'} <span className="text-yellow-300">"name"</span>: <span className="text-green-400">"UNISWAP_V3"</span>, <span className="text-yellow-300">"part"</span>: <span className="text-orange-400">60</span> {'}'} ],</p>
              <p className="pl-8">[ {'{'} <span className="text-yellow-300">"name"</span>: <span className="text-green-400">"SUSHISWAP"</span>, <span className="text-yellow-300">"part"</span>: <span className="text-orange-400">25</span> {'}'} ],</p>
              <p className="pl-8">[ {'{'} <span className="text-yellow-300">"name"</span>: <span className="text-green-400">"CURVE"</span>, <span className="text-yellow-300">"part"</span>: <span className="text-orange-400">15</span> {'}'} ]</p>
              <p className="pl-4">]</p>
              <p>{'}'}</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Limit Orders</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Standard DEX swaps execute immediately. A Limit Order says <strong>"sell my ETH when it hits $3,500."</strong> The order is stored off-chain as a signed message and executed on-chain when conditions are met.
            </p>
            <div className="space-y-4 my-6">
              {[
                { n: '①', title: 'Create — Off-chain Signature', desc: 'User sets price, amount, and expiry, then signs with EIP-712. Stored on 1inch servers. No blockchain write, no gas.', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
                { n: '②', title: 'Monitor — Off-chain Watch', desc: '1inch servers and external Resolvers watch the order. When ETH hits $3,500 the order becomes fillable.', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' },
                { n: '③', title: 'Fill — On-chain Execution', desc: 'A Resolver calls LimitOrderProtocol.fillOrder(). ETH leaves the user\'s wallet, USDC arrives. Resolver pays gas, earns the spread.', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 text-lg flex-shrink-0">{s.n}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Fusion Mode — Gasless Swaps</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Fusion is 1inch's most innovative feature. Users execute swaps with <strong>zero gas fees</strong>. How?
            </p>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-blue-800 dark:text-blue-300 font-medium mb-1">Core Mechanism — Dutch Auction + Resolver Competition</p>
              <p className="text-sm text-blue-700 dark:text-blue-300">A user's order launches as an auction. It starts heavily in the user's favor, then the price gradually moves toward Resolver profitability over time. The first Resolver to see a profitable spread executes at their own gas cost.</p>
            </div>

            <div className="space-y-4 my-6">
              {[
                { n: '①', title: 'User: Just Sign', desc: 'Sign an order: "Sell 1 ETH for at least 3,600 USDC." No gas, no transaction. Only needs prior approve() on the wallet.', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
                { n: '②', title: 'Dutch Auction Begins', desc: 'Auction starts at 3,660 USDC (max user benefit), steps down over time: 3,650 → 3,640 → 3,630... until the user\'s floor of 3,600 is hit.', color: 'bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800' },
                { n: '③', title: 'Resolver Competes', desc: 'Resolvers watch market prices in real time. When the auction price drops below what they can source at (e.g., market is 3,655, auction is at 3,640), they submit the fill at their own gas cost and pocket the 15 USDC spread.', color: 'bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800' },
                { n: '④', title: 'User: Filled, Gasless', desc: 'ETH leaves the wallet, USDC arrives. All gas paid by the Resolver. User gets near-optimal price through the auction mechanism.', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="font-mono font-bold text-gray-500 text-lg flex-shrink-0">{s.n}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Fusion+ — Cross-Chain Gasless Swaps</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Fusion+ extends gasless swaps to cross-chain. Swap Ethereum ETH for Arbitrum USDC — no bridge, no wrapped tokens, no gas. Uses Hashlock + Timelock atomic swaps under the hood.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Fusion+ Flow</p>
              <div className="space-y-2 text-sm font-mono text-gray-600 dark:text-gray-400">
                <p>① User: Lock ETH on Ethereum (signature only)</p>
                <p>② Resolver: Deliver USDC on Arbitrum first</p>
                <p>③ User: Receive USDC → reveal secret key</p>
                <p>④ Resolver: Use secret key to claim ETH on Ethereum</p>
                <p className="text-green-600 dark:text-green-400">→ Atomic cross-chain exchange — neither party at risk</p>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Additional Features</h2>
            <div className="space-y-4 my-6">
              {[
                { tag: 'Gas Credits', tagColor: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300', title: 'Gas Credits — Pay Gas with 1INCH', desc: 'Convert 1INCH tokens to Gas Credits and pay swap gas in 1INCH instead of ETH. Useful for wallets that just received a new token but hold no ETH for gas.' },
                { tag: 'Spot Price API', tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300', title: 'Spot Price API', desc: 'Real-time aggregated price feed across all integrated DEXs. Can serve as a price oracle for other DeFi protocols, with fresher data than Uniswap TWAP.' },
                { tag: 'P2P Swap', tagColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300', title: 'P2P Swap — Direct Peer-to-Peer Exchange', desc: 'Exchange tokens directly with a specific wallet address — no DEX fee, no spread. Smart contract guarantees atomic execution. Ideal for OTC-style trades between known parties.' },
              ].map((f, i) => (
                <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden">
                  <div className="flex items-center gap-3 px-5 py-3 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${f.tagColor}`}>{f.tag}</span>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{f.title}</p>
                  </div>
                  <div className="px-5 py-4">
                    <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">09 · Aggregator Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    {['Feature', '1inch', 'Paraswap', 'Cowswap', '0x/Matcha'].map(h => (
                      <th key={h} className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'DEXs integrated', a: '400+', b: '50+', c: '50+', d: '100+' },
                    { item: 'Gasless swap', a: '✅ Fusion', b: '❌', c: '✅ CoW Protocol', d: '✅ Gasless' },
                    { item: 'Limit Orders', a: '✅', b: '✅', c: '✅', d: '✅' },
                    { item: 'Cross-chain', a: '✅ Fusion+', b: '✅', c: '❌', d: '❌' },
                    { item: 'MEV Protection', a: '✅ (Fusion)', b: 'Partial', c: '✅ (batch auction)', d: '✅' },
                    { item: 'Native AMM', a: '1inch Liquidity Protocol', b: '❌', c: '❌', d: '❌' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-red-700 dark:text-red-300">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-700 dark:text-gray-300 text-xs font-semibold">{r.a}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.b}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.c}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.d}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6">10 · Risks</h2>
            <div className="space-y-3 my-6">
              {[
                { risk: 'Routing Errors', desc: 'Under extreme volatility or oracle malfunction, Pathfinder may select a suboptimal route. Always set slippage protection.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Resolver Dependency', desc: 'Fusion Mode requires an active Resolver network. Low participation can cause delayed or expired fills.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Smart Contract Risk', desc: 'Multi-DEX routing expands the attack surface. Vulnerabilities in any integrated DEX can affect 1inch users.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Centralization (API)', desc: 'If 1inch API servers go down, optimal routing is unavailable. Direct contract calls exist but are non-trivial for regular users.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
                { risk: 'Regulatory Risk', desc: '1inch Labs could face frontend restrictions under new regulations. The underlying contracts cannot be censored.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <span className={`text-xs font-bold w-10 flex-shrink-0 ${r.color}`}>{r.level}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.risk}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 my-8">
              <p className="font-bold text-gray-900 dark:text-white text-lg mb-4">1inch in One Sentence</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                1inch is a <strong>complete DeFi trading infrastructure</strong> that aggregates DEX liquidity, finds optimal routes, and offers gasless swaps. Pathfinder scans 100+ DEXs in real time, Fusion has Resolvers pay your gas, and Limit Orders wait for your target price. It automates every step of a trade — from price discovery to execution.
              </p>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
