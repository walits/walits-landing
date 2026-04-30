'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function UniswapDeepDivePage() {
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
            <button
              key={l}
              onClick={() => setLanguage(l)}
              className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                language === l
                  ? 'bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
              }`}
            >
              {l === 'ko' ? '한국어' : 'English'}
            </button>
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="max-w-3xl mx-auto px-6 mb-8">
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500 to-purple-600">
          <Image src="/blog/uniswap.jpg" alt="Uniswap AMM" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-pink-500/80 text-white px-3 py-1 rounded-full">DeFi 시리즈 2</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">DeFi 시리즈 2 — Uniswap</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">AMM과 유동성 혁명 완전 해부 · v1 → v2 → v3 → v4</p>

            {/* 요약 수치 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: '누적 거래량', value: '$2.4T+', sub: '역대 DEX 1위' },
                { label: 'TVL (2026)', value: '$6B+', sub: 'v3 중심' },
                { label: '지원 네트워크', value: '12+', sub: 'Ethereum, Arbitrum 등' },
                { label: '수수료 티어', value: '4개', sub: '0.01% ~ 1%' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* ── S1 Uniswap이란 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · Uniswap이란</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap은 이더리움 기반 <strong>탈중앙화 거래소(DEX)</strong>다. 기존 거래소는 오더북(매수/매도 주문 장부)으로 작동한다. Uniswap은 다르다. <strong>오더북이 없다.</strong> 대신 스마트컨트랙트 안의 유동성 풀과 수학 공식 하나로 가격을 결정한다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2018년 Hayden Adams가 이더리움 그랜트 $65,000을 받아 혼자 개발했다. "오더북 없이 거래소를 만들 수 있다"는 아이디어는 당시엔 말도 안 되는 것처럼 보였다. 지금은 누적 거래량 $2.4T(조)를 돌파한 DeFi의 핵심 인프라다.
            </p>

            <div className="grid md:grid-cols-4 gap-3 my-6">
              {[
                { ver: 'v1', year: '2018', key: '최초 AMM DEX. ETH↔ERC-20만 지원' },
                { ver: 'v2', year: '2020', key: 'ERC-20↔ERC-20 페어. 플래시 스왑. TWAP 오라클' },
                { ver: 'v3', year: '2021', key: '집중 유동성. 수수료 티어 다변화. NFT LP 포지션' },
                { ver: 'v4', year: '2024', key: '훅(Hook) 아키텍처. 싱글톤 컨트랙트. 커스텀 풀 로직' },
              ].map((v, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-pink-600 dark:text-pink-400 text-lg">{v.ver}</span>
                    <span className="text-xs text-gray-400">{v.year}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{v.key}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S2 AMM 기초 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · AMM의 핵심 — x × y = k</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              AMM(Automated Market Maker)은 알고리즘이 가격을 결정하는 시장이다. Uniswap의 핵심 공식은 단 하나다.
            </p>

            <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-700 rounded-2xl p-8 my-6 text-center">
              <p className="text-4xl font-bold text-pink-700 dark:text-pink-300 font-mono mb-3">x × y = k</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">x = 토큰 A 수량 · y = 토큰 B 수량 · k = 상수 (항상 유지)</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              풀에 ETH 100개, USDC 200,000개가 있다면 k = 20,000,000이다. 누군가 USDC 10,000을 넣으면 ETH는 몇 개를 받을까?
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">스왑 계산 예시</p>
              {[
                { label: '초기 상태', val: 'ETH 100개, USDC 200,000개 → k = 20,000,000', color: '' },
                { label: 'USDC 10,000 투입', val: 'y = 210,000 → x = 20,000,000 ÷ 210,000 = 95.24', color: '' },
                { label: '받는 ETH', val: '100 - 95.24 = 4.76 ETH', color: 'text-pink-600 dark:text-pink-400 font-bold' },
                { label: '실질 단가', val: '10,000 ÷ 4.76 ≈ $2,101 / ETH (시장가보다 높음 → Price Impact)', color: 'text-amber-600 dark:text-amber-400' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-gray-400 w-32 flex-shrink-0 text-xs">{r.label}</span>
                  <span className={`font-mono ${r.color || 'text-gray-700 dark:text-gray-300'}`}>{r.val}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-amber-800 dark:text-amber-300 font-medium mb-1">Price Impact (가격 충격)</p>
              <p className="text-sm text-amber-700 dark:text-amber-300">주문 크기가 클수록 풀의 비율이 크게 바뀌어 불리한 가격에 체결된다. 작은 풀에 큰 주문을 넣으면 손실이 막대해진다. $50M Aave 사건이 바로 이 원리였다.</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S3 유동성 공급자 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · 유동성 공급자(LP) — 풀에 돈을 넣는 사람들</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap 풀이 작동하려면 유동성이 필요하다. <strong>LP(Liquidity Provider)</strong>는 토큰 두 종류를 같은 가치로 풀에 예치하고, 거래 수수료를 수익으로 받는다.
            </p>

            <div className="space-y-3 my-6">
              {[
                { n: '1', text: 'ETH $1,000 + USDC $1,000을 풀에 예치 (같은 가치로)', color: 'bg-blue-50 dark:bg-blue-900/20' },
                { n: '2', text: 'LP 토큰(지분 증명) 수령 — 풀 전체에서 내 비율을 나타냄', color: 'bg-blue-50 dark:bg-blue-900/20' },
                { n: '3', text: '거래자가 스왑할 때마다 수수료(0.3%) 발생 → 풀에 축적', color: 'bg-green-50 dark:bg-green-900/20' },
                { n: '4', text: '출금 시 LP 토큰 burn → 원금 + 누적 수수료 수령', color: 'bg-green-50 dark:bg-green-900/20' },
              ].map((s, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-lg p-4 text-sm ${s.color}`}>
                  <span className="font-mono text-gray-400 w-4 flex-shrink-0">{s.n}</span>
                  <span className="text-gray-700 dark:text-gray-300">{s.text}</span>
                </div>
              ))}
            </div>

            {/* 비영구 손실 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">비영구 손실(Impermanent Loss) — LP의 최대 리스크</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              LP가 겪는 가장 독특한 리스크다. 풀에 예치한 후 두 토큰의 가격 비율이 변하면, <strong>그냥 들고 있는 것보다 적은 금액을 돌려받는다.</strong> "비영구"인 이유는 가격이 원래대로 돌아오면 손실이 사라지기 때문이다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">비영구 손실 시나리오</p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">예치 시점</p>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">ETH 1개($2,000) + USDC 2,000 → 총 $4,000</p>
                  <p className="text-xs text-gray-400 mt-1">k = 1 × 2,000 = 2,000</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-xs font-semibold text-red-500 mb-2">ETH 가격 2배 상승 → $4,000</p>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">새 균형: ETH 0.707개, USDC 2,828</p>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">풀 가치: 0.707 × $4,000 + $2,828 ≈ <span className="text-red-600 dark:text-red-400">$5,656</span></p>
                  <p className="text-xs text-gray-400 mt-1">그냥 들고 있었다면: ETH 1개($4,000) + USDC $2,000 = <span className="text-green-600 dark:text-green-400 font-semibold">$6,000</span></p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-300">비영구 손실: $6,000 - $5,656 = $344 (약 5.7%)</p>
                  <p className="text-xs text-gray-500 mt-1">수수료 수익이 이 손실을 상회해야 LP가 이익이다.</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">가격 변화 (배수)</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">비영구 손실</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { change: '1.25× (25% 상승)', loss: '0.6%' },
                    { change: '1.5× (50% 상승)', loss: '2.0%' },
                    { change: '2× (100% 상승)', loss: '5.7%' },
                    { change: '4× (300% 상승)', loss: '20.0%' },
                    { change: '10× (900% 상승)', loss: '42.5%' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-700 dark:text-gray-300">{r.change}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-semibold text-red-600 dark:text-red-400">{r.loss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S4 v2 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · Uniswap v2 (2020) — 완성된 기초</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v1은 ETH를 중개로만 거래할 수 있었다 (ETH↔ERC-20). v2는 <strong>ERC-20↔ERC-20 직접 거래</strong>를 가능하게 하고, 여러 핵심 기능을 추가했다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: 'ERC-20 페어',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: 'ERC-20↔ERC-20 직접 페어',
                  desc: 'v1에서는 USDC→DAI를 교환하려면 USDC→ETH→DAI 두 번의 스왑이 필요했다. v2는 USDC/DAI 풀을 직접 만들 수 있어 수수료와 슬리피지가 절반으로 줄었다.',
                },
                {
                  tag: 'TWAP 오라클',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'TWAP 가격 오라클',
                  desc: '블록마다 누적 가격(price cumulative)을 기록한다. 두 시점의 차이를 시간으로 나누면 TWAP(Time-Weighted Average Price)이 나온다. 단기 조작에 내성이 있어 다른 DeFi 프로토콜의 오라클로 활용됐다.',
                },
                {
                  tag: '플래시 스왑',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  title: '플래시 스왑(Flash Swap)',
                  desc: 'Aave 플래시론과 유사한 개념. 풀에서 토큰을 먼저 꺼내고 같은 트랜잭션 내에서 상환하거나 동일 가치의 다른 토큰으로 교환한다. 담보 없이 풀 전체 유동성을 일시적으로 빌리는 것이다.',
                },
                {
                  tag: '프로토콜 수수료',
                  tagColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  title: '프로토콜 수수료 스위치',
                  desc: '거래 수수료 0.3% 중 0.05%를 프로토콜(Uniswap Labs/DAO)이 가져갈 수 있는 스위치를 내장했다. 기본값은 OFF. 거버넌스 투표로 ON 할 수 있다.',
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

            {/* v2 스왑 온체인 흐름 */}
            <div className="bg-gray-900 rounded-xl p-5 my-6 text-xs font-mono space-y-1 overflow-x-auto">
              <p className="text-gray-500 mb-2">// v2 스왑 핵심 함수</p>
              <p><span className="text-blue-400">function</span> <span className="text-yellow-300">swap</span>{'('}</p>
              <p className="pl-4"><span className="text-green-400">uint amount0Out</span>,  <span className="text-gray-500">// 받을 token0 수량</span></p>
              <p className="pl-4"><span className="text-green-400">uint amount1Out</span>,  <span className="text-gray-500">// 받을 token1 수량</span></p>
              <p className="pl-4"><span className="text-green-400">address to</span>,        <span className="text-gray-500">// 수령 주소</span></p>
              <p className="pl-4"><span className="text-green-400">bytes calldata data</span> <span className="text-gray-500">// 플래시 스왑용 콜백 데이터</span></p>
              <p>{')'} <span className="text-blue-400">external</span>;</p>
              <p className="mt-3 text-gray-500">// 내부 로직: x*y=k 검증 후 토큰 전송</p>
              <p className="text-gray-500">{'// data.length > 0 이면 IUniswapV2Callee 콜백 (플래시 스왑)'}</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S5 v3 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · Uniswap v3 (2021) — 집중 유동성 혁명</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v2의 LP는 가격이 0부터 무한대까지 전 범위에 유동성을 공급했다. ETH/USDC 풀에 $1,000를 넣으면 "ETH 가격이 $0.01일 때부터 $1,000,000일 때까지" 균등하게 분산됐다. 실제 거래가 일어나는 $1,800~$2,200 구간에 배치되는 유동성은 전체의 극히 일부였다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v3는 이 문제를 해결했다. LP가 <strong>특정 가격 범위를 직접 지정</strong>해 유동성을 집중시킬 수 있다. 같은 자본으로 훨씬 더 많은 수수료를 벌 수 있다.
            </p>

            {/* 집중 유동성 시각화 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">v2 vs v3 유동성 분포 비교</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">v2 — 전 범위 분산</p>
                  <div className="relative h-16 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                    <div className="absolute inset-0 bg-blue-200 dark:bg-blue-900/50" style={{opacity: 0.4}} />
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-400" />
                    <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-red-500">현재가</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">유동성이 0~∞ 범위에 균등 분산 → 현재가 근처 활용도 낮음</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">v3 — 집중 유동성</p>
                  <div className="relative h-16 bg-gray-100 dark:bg-gray-800 rounded overflow-hidden">
                    <div className="absolute top-0 bottom-0 left-[35%] right-[35%] bg-pink-400 dark:bg-pink-600" style={{opacity: 0.7}} />
                    <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-red-400" />
                    <p className="absolute bottom-1 left-1/2 -translate-x-1/2 text-xs text-red-500">현재가</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">LP가 지정한 범위에 집중 → 같은 자본으로 수수료 최대화</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: '집중 유동성',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: 'Concentrated Liquidity',
                  desc: 'LP는 min price ~ max price 범위를 지정한다. 현재 가격이 이 범위 안에 있으면 수수료를 수취하고, 범위 밖으로 벗어나면 수수료가 멈추고 한 토큰으로만 남는다. 범위를 좁힐수록 자본 효율이 높아지지만, 가격이 벗어날 위험도 커진다.',
                },
                {
                  tag: '수수료 티어',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: '4가지 수수료 티어',
                  desc: '0.01% (스테이블코인↔스테이블코인), 0.05% (ETH↔WBTC 등 연관 자산), 0.3% (표준), 1% (변동성 높은 소형 토큰). 풀마다 수수료 티어가 다르고, 라우터가 최적 경로를 자동 선택한다.',
                },
                {
                  tag: 'NFT LP 포지션',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  title: 'LP 포지션 = NFT (ERC-721)',
                  desc: 'v2의 LP 토큰(ERC-20)은 모든 LP가 동일한 토큰을 받았다. v3에서는 LP마다 가격 범위가 다르므로 포지션이 고유하다. 각 LP 포지션은 NFT로 발행된다. 이 NFT를 거래하거나 담보로 쓸 수 있다.',
                },
                {
                  tag: '틱(Tick)',
                  tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
                  title: '틱(Tick) — 가격 범위의 최소 단위',
                  desc: '연속적인 가격 범위를 이산적인 틱으로 표현한다. 1 tick = 0.01% 가격 변화. LP가 지정하는 min/max 가격은 틱 단위로 정렬된다. 수수료 티어가 낮을수록 틱 간격이 좁아 더 세밀한 범위 설정이 가능하다.',
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

            {/* 자본 효율 비교 */}
            <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-700 rounded-xl p-6 my-6">
              <p className="font-semibold text-pink-800 dark:text-pink-300 mb-3">v3 자본 효율 — 수치로 보기</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">ETH/USDC, 현재가 $2,000 기준</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-gray-600 dark:text-gray-400">v2 (전 범위): $10,000 예치</span>
                  <span className="font-mono text-gray-500">현재가 근방 유효 유동성 ≈ $10</span>
                </div>
                <div className="flex justify-between bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-gray-600 dark:text-gray-400">v3 ($1,900~$2,100 집중): $10,000 예치</span>
                  <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">유효 유동성 ≈ $10,000</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">같은 자본이지만 v3가 1,000배 더 많은 수수료를 벌 수 있다. 단, 가격이 범위를 벗어나면 수수료 수취가 멈춘다.</p>
            </div>

            {/* v3 스왑 코드 */}
            <div className="bg-gray-900 rounded-xl p-5 my-6 text-xs font-mono space-y-1 overflow-x-auto">
              <p className="text-gray-500 mb-2">// v3 exactInputSingle 스왑</p>
              <p><span className="text-blue-400">ISwapRouter</span>.ExactInputSingleParams <span className="text-blue-400">memory</span> params =</p>
              <p className="pl-4">ISwapRouter.ExactInputSingleParams{'({'}</p>
              <p className="pl-8"><span className="text-green-400">tokenIn</span>:           WETH,</p>
              <p className="pl-8"><span className="text-green-400">tokenOut</span>:          USDC,</p>
              <p className="pl-8"><span className="text-green-400">fee</span>:               3000,   <span className="text-gray-500">// 0.3% 수수료 티어</span></p>
              <p className="pl-8"><span className="text-green-400">recipient</span>:         msg.sender,</p>
              <p className="pl-8"><span className="text-green-400">deadline</span>:          block.timestamp,</p>
              <p className="pl-8"><span className="text-green-400">amountIn</span>:          1 ether,</p>
              <p className="pl-8"><span className="text-green-400">amountOutMinimum</span>: 1900e6, <span className="text-gray-500">// 슬리피지 보호</span></p>
              <p className="pl-8"><span className="text-green-400">sqrtPriceLimitX96</span>: 0</p>
              <p className="pl-4">{'}'});</p>
              <p><span className="text-blue-400">uint256</span> amountOut = swapRouter.<span className="text-yellow-300">exactInputSingle</span>(params);</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S6 v4 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Uniswap v4 (2024) — 훅 아키텍처</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v4는 구조적인 혁신이다. 핵심은 두 가지 — <strong>싱글톤 컨트랙트</strong>와 <strong>훅(Hook)</strong>이다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: '싱글톤',
                  tagColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
                  title: '싱글톤 컨트랙트 — 모든 풀이 하나의 컨트랙트 안에',
                  desc: 'v3는 풀마다 별도의 컨트랙트가 배포됐다. ETH/USDC 0.3% 풀과 ETH/USDC 0.05% 풀은 각각 다른 컨트랙트다. v4는 모든 풀이 단일 PoolManager 컨트랙트 안에 존재한다. 멀티풀 스왑 시 토큰 전송이 한 번으로 줄어 가스비가 99% 절감된다.',
                },
                {
                  tag: '훅(Hook)',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: '훅 — 풀 로직을 완전히 커스터마이즈',
                  desc: '스왑, 유동성 추가/제거 등의 이벤트 전후에 개발자가 임의의 로직을 끼워넣을 수 있다. beforeSwap, afterSwap, beforeAddLiquidity, afterAddLiquidity 등 8개의 훅 포인트가 있다. TWAP 기반 동적 수수료, KYC 게이팅, 온체인 오더북 통합, MEV 방어 로직 등이 풀 레벨에서 구현 가능해진다.',
                },
                {
                  tag: 'Flash Accounting',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: '플래시 어카운팅 — 트랜잭션 끝에 한 번에 정산',
                  desc: '여러 풀을 거치는 복잡한 스왑도 토큰 전송을 트랜잭션 끝에 한 번만 한다. 중간 과정의 토큰 이동이 없으므로 가스비가 대폭 절감된다. ERC-6909 다중 토큰 표준을 활용해 내부 잔고를 관리한다.',
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

            {/* v4 Hook 코드 */}
            <div className="bg-gray-900 rounded-xl p-5 my-6 text-xs font-mono overflow-x-auto">
              <p className="text-gray-500 mb-2">// v4 Hook 예시 — 동적 수수료 훅</p>
              <p><span className="text-blue-400">contract</span> <span className="text-yellow-300">DynamicFeeHook</span> <span className="text-blue-400">is</span> BaseHook {'{'}</p>
              <p className="pl-4 mt-2 text-gray-500">// 스왑 직전 호출 — 수수료를 동적으로 변경</p>
              <p className="pl-4"><span className="text-blue-400">function</span> <span className="text-yellow-300">beforeSwap</span>{'('}</p>
              <p className="pl-8"><span className="text-green-400">address</span>, PoolKey calldata key,</p>
              <p className="pl-8">IPoolManager.SwapParams calldata params,</p>
              <p className="pl-8"><span className="text-green-400">bytes</span> calldata</p>
              <p className="pl-4">{')'} <span className="text-blue-400">external override returns</span> (bytes4, BeforeSwapDelta, uint24) {'{'}</p>
              <p className="pl-8 text-gray-500">// 변동성 높으면 수수료 올리고, 낮으면 내린다</p>
              <p className="pl-8"><span className="text-blue-400">uint24</span> fee = getVolatilityBasedFee(key);</p>
              <p className="pl-8"><span className="text-blue-400">return</span> (BaseHook.beforeSwap.selector, toBeforeSwapDelta(0, 0), fee);</p>
              <p className="pl-4">{'}'}</p>
              <p>{'}'}</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S7 스왑 라우팅 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · 스왑 라우팅 — 최적 경로 자동 탐색</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap 인터페이스에서 USDC → AAVE를 스왑하면 단순히 USDC/AAVE 풀 하나를 찾는 게 아니다. <strong>Uniswap 스마트 오더 라우터(Smart Order Router, SOR)</strong>가 수백 개의 경로를 시뮬레이션해 최적 가격을 찾아준다. 이 과정이 어떻게 작동하는지 단계별로 뜯어보자.
            </p>

            {/* 왜 직접 풀만 쓰면 안 되나 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">왜 직접 풀만 쓰면 안 되나 — 유동성과 가격 충격</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              USDC/AAVE 직접 풀이 존재한다고 해도, 그 풀의 유동성이 얕으면 대량 스왑 시 <strong>가격 충격(Price Impact)</strong>이 크다. x×y=k 공식에서 한 방향으로 많이 사면 살수록 가격이 급격히 불리해진다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-5">
                <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-3">❌ USDC/AAVE 직접 풀만 사용</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• USDC 10,000 → AAVE 직접 풀에 넣기</p>
                  <p>• 풀 유동성이 얕으면 가격 충격 <strong>3~5%</strong></p>
                  <p>• 결과: 예상보다 훨씬 적은 AAVE 수령</p>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-3">✅ 라우터가 최적 경로 탐색</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• USDC → WETH → AAVE (유동성 깊은 풀 경유)</p>
                  <p>• 가격 충격 <strong>0.3~0.8%</strong>로 대폭 감소</p>
                  <p>• 결과: AAVE 수령량 2~4% 증가</p>
                </div>
              </div>
            </div>

            {/* 라우팅 탐색 4단계 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">SOR이 경로를 찾는 4단계</h3>
            <div className="space-y-3 my-6">
              {[
                {
                  n: '1',
                  title: '후보 풀 수집',
                  desc: 'v2 풀, v3 풀(0.01%·0.05%·0.3%·1% 수수료 티어), v4 풀을 포함해 입력 토큰과 출력 토큰에 관련된 모든 풀을 수집한다. 중간 토큰(WETH, USDT, DAI, WBTC 등)을 경유하는 다중 홉 경로도 포함된다.',
                  color: 'bg-blue-50 dark:bg-blue-900/20',
                  icon: '🔍',
                },
                {
                  n: '2',
                  title: '경로 그래프 생성',
                  desc: '각 풀을 노드로, 토큰을 엣지로 연결한 그래프를 만든다. USDC → WETH → AAVE처럼 2홉, USDC → USDT → WETH → AAVE처럼 3홉 경로도 탐색 대상이 된다. 일반적으로 최대 3홉까지 탐색한다.',
                  color: 'bg-purple-50 dark:bg-purple-900/20',
                  icon: '🗺️',
                },
                {
                  n: '3',
                  title: '각 경로 시뮬레이션',
                  desc: '입력 금액을 넣었을 때 각 경로에서 받을 수 있는 output을 온체인 상태 기준으로 시뮬레이션한다. 가격 충격, 수수료, 슬리피지를 모두 계산한 순수 수령량(net output)을 비교한다.',
                  color: 'bg-orange-50 dark:bg-orange-900/20',
                  icon: '🧮',
                },
                {
                  n: '4',
                  title: '분할 라우팅 최적화',
                  desc: '단일 경로보다 여러 경로에 분산하는 게 유리한지 계산한다. 예: USDC 70%는 경로 A, 30%는 경로 B. 각 풀의 유동성 곡선이 다르므로 분산 투입이 전체 가격 충격을 줄일 수 있다.',
                  color: 'bg-green-50 dark:bg-green-900/20',
                  icon: '⚖️',
                },
              ].map((s, i) => (
                <div key={i} className={`rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">단계 {s.n} — {s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* 실제 라우팅 예시 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">실제 예시 — USDC $10,000 → AAVE 스왑 시 라우터가 선택하는 경로</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">SOR이 탐색하는 경로 후보들</p>
              <div className="space-y-4">
                {[
                  {
                    label: '경로 A',
                    badge: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                    path: 'USDC → WETH (v3 0.05%) → AAVE (v3 0.3%)',
                    hops: '2홉',
                    fee: '수수료: 0.35%',
                    impact: '가격 충격: ~1.2%',
                    output: '예상 AAVE: 82.4개',
                    best: false,
                  },
                  {
                    label: '경로 B ✓ 최적',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                    path: 'USDC 70% → WETH (v3 0.05%) → AAVE (v3 0.3%) + USDC 30% → USDT (v3 0.01%) → WETH (v3 0.05%) → AAVE (v3 0.3%)',
                    hops: '분할 라우팅',
                    fee: '수수료: 0.36%',
                    impact: '가격 충격: ~0.4%',
                    output: '예상 AAVE: 84.1개 (+2.0%)',
                    best: true,
                  },
                  {
                    label: '경로 C',
                    badge: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                    path: 'USDC → DAI (v3 0.01%) → WETH (v3 0.05%) → AAVE (v3 0.3%)',
                    hops: '3홉',
                    fee: '수수료: 0.36%',
                    impact: '가격 충격: ~0.9%',
                    output: '예상 AAVE: 83.1개',
                    best: false,
                  },
                ].map((r, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${r.best ? 'border-green-400 dark:border-green-600 bg-green-50/50 dark:bg-green-900/10' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${r.badge}`}>{r.label}</span>
                      <span className="text-xs text-gray-400">{r.hops}</span>
                    </div>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{r.path}</p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="text-gray-500">{r.fee}</span>
                      <span className="text-orange-600 dark:text-orange-400">{r.impact}</span>
                      <span className={`font-bold ${r.best ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'}`}>{r.output}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">* 수치는 예시. 실제 output은 풀 상태·블록 시점에 따라 달라진다. 라우터는 항상 net output이 가장 큰 경로를 선택한다.</p>
            </div>

            {/* 분할 라우팅이 왜 유리한가 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">분할 라우팅(Split Routing)이 왜 유리한가</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              x×y=k 곡선에서 한 풀에 USDC $10,000을 전부 넣으면, 풀의 비율이 크게 틀어져 후반부로 갈수록 받는 AAVE 개수가 급격히 줄어든다. 이것이 가격 충격이다.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">같은 $10,000로 AAVE 더 받는 법</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-32 text-gray-500 text-xs flex-shrink-0">풀 A 한 곳에 전액</div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-red-400 h-4 rounded-full" style={{width: '78%'}} />
                  </div>
                  <span className="text-xs text-red-600 dark:text-red-400 w-20 flex-shrink-0">82.4 AAVE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-32 text-gray-500 text-xs flex-shrink-0">A·B 풀에 분산 투입</div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-green-400 h-4 rounded-full" style={{width: '85%'}} />
                  </div>
                  <span className="text-xs text-green-600 dark:text-green-400 w-20 flex-shrink-0">84.1 AAVE ✓</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">각 풀이 독립적인 x×y=k 곡선을 가지므로, 두 풀에 분산하면 각 풀에서 곡선의 유리한 구간을 더 많이 활용할 수 있다. 금액이 클수록 분할 라우팅의 효과가 커진다.</p>
            </div>

            {/* 멀티홉이 왜 필요한가 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">멀티홉(Multi-hop)이 필요한 이유</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              모든 토큰 쌍이 직접 풀을 가지지 않는다. USDC/AAVE 직접 풀이 있더라도 유동성이 낮으면 WETH를 경유하는 것이 더 유리하다. WETH는 거의 모든 토큰의 허브 역할을 한다.
            </p>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">홉 수</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">경로 예시</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">언제 유리한가</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { hops: '1홉 (직접)', path: 'USDC → AAVE', when: '유동성이 충분한 주요 쌍 (USDC/ETH, ETH/WBTC)' },
                    { hops: '2홉', path: 'USDC → WETH → AAVE', when: '직접 풀 유동성이 낮거나 없을 때. WETH 경유가 대부분 유리' },
                    { hops: '3홉', path: 'USDC → DAI → WETH → AAVE', when: '특수한 경우. 스테이블 쌍에 깊은 유동성이 있을 때' },
                    { hops: '분할 2홉', path: '70% USDC→WETH→AAVE + 30% USDC→USDT→WETH→AAVE', when: '대량 스왑 시 가격 충격 분산 목적' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-purple-600 dark:text-purple-400 text-xs">{r.hops}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-600 dark:text-gray-400">{r.path}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-xs text-gray-600 dark:text-gray-400">{r.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 슬리피지 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">슬리피지(Slippage)와 최소 수령량</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              라우터가 최적 경로를 계산한 뒤 트랜잭션을 제출해도, 내 트랜잭션이 블록에 포함되기 전에 다른 거래가 풀 상태를 바꿀 수 있다. 이것이 슬리피지다. Uniswap 인터페이스는 슬리피지 허용치를 설정하고, 이보다 불리하면 트랜잭션을 자동 revert시킨다.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">0.1%</p>
                  <p className="text-xs text-gray-500 mt-1">스테이블코인 쌍 권장</p>
                  <p className="text-xs text-gray-400">(USDC/USDT 등)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">0.5%</p>
                  <p className="text-xs text-gray-500 mt-1">일반 스왑 기본값</p>
                  <p className="text-xs text-gray-400">(대부분의 케이스)</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">1~3%</p>
                  <p className="text-xs text-gray-500 mt-1">유동성 낮은 토큰</p>
                  <p className="text-xs text-gray-400">(소형 알트코인)</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">슬리피지를 너무 낮게 설정하면 트랜잭션이 자주 실패하고, 너무 높게 설정하면 MEV 봇의 샌드위치 어택 표적이 된다. 0.5%가 대부분의 상황에서 적절하다.</p>
            </div>

            {/* MEV와 라우팅 */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">라우팅과 MEV — 내 스왑이 공격받을 수 있다</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              퍼블릭 mempool에 스왑 트랜잭션이 올라오면, MEV 봇이 이를 감지하고 앞뒤에 자신의 트랜잭션을 끼워 넣는 <strong>샌드위치 어택</strong>을 시도할 수 있다. 특히 슬리피지가 높거나 금액이 클 때 타깃이 된다.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-4">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4">
                <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-2">⚠️ 샌드위치 어택 발생 조건</p>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• 슬리피지 허용치가 1% 이상으로 높음</li>
                  <li>• 스왑 금액이 커서 가격 충격이 큼</li>
                  <li>• 유동성 낮은 풀 경유</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-2">🛡️ 보호 방법</p>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• UniswapX 사용 (오프체인 오더, MEV 차단)</li>
                  <li>• 슬리피지를 0.5% 이하로 유지</li>
                  <li>• Flashbots Protect RPC 사용</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">💡 Uniswap 인터페이스가 라우팅을 자동으로 처리한다</p>
              <p className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
                일반 사용자는 이 모든 과정을 신경 쓰지 않아도 된다. Uniswap 앱이 SOR을 실행하고 최적 경로를 자동으로 선택한다. 다만 <strong>금액이 클수록, 유동성이 낮은 토큰일수록</strong> 라우팅 품질이 중요해지며, 이럴 때는 1inch 같은 전문 애그리게이터와 결과를 비교해보는 것이 좋다.
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S8 유니버설 라우터 & Permit2 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · UniswapX & Permit2</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: 'UniswapX',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: 'UniswapX — 오프체인 오더 + 온체인 정산',
                  desc: '사용자가 "USDC 1,000을 최소 X AAVE 이상에 스왑하고 싶다"는 서명된 오더를 오프체인에 제출하면, Filler(충전자)가 경쟁적으로 최적 가격을 제시하고 온체인에서 원자적으로 정산한다. 가스비는 Filler가 부담하거나 스왑 금액에서 차감된다. MEV 보호와 가스리스 스왑이 핵심이다.',
                },
                {
                  tag: 'Permit2',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'Permit2 — 범용 토큰 허가 시스템',
                  desc: '기존 ERC-20은 컨트랙트마다 approve()를 따로 해야 했다. Permit2는 한 번의 서명으로 Uniswap의 모든 컨트랙트(라우터, v3, v4 등)에 허가를 부여한다. 서명 기반이라 가스비가 없고, 허가에 만료 시간과 금액 한도를 설정할 수 있어 보안이 향상된다.',
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

            {/* ── S9 UNI 토큰 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · UNI 토큰 & 거버넌스</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2020년 9월 Uniswap은 UNI 토큰을 출시하며 역대 최대 규모의 에어드롭을 실행했다. 과거에 Uniswap을 한 번이라도 사용한 지갑 주소 약 250,000개에 각 400 UNI (당시 약 $1,200)를 무상 배포했다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">UNI 토큰 역할</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 거버넌스 투표 (프로토콜 수수료 ON/OFF, 파라미터 변경)</p>
                  <p>• Uniswap DAO 금고 관리 (~$2B+ 보유)</p>
                  <p>• 현재 스테이킹 수익 없음 (논의 중)</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">총 공급량 배분</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 60% — 커뮤니티 (에어드롭, 유동성 마이닝 포함)</p>
                  <p>• 21.51% — 팀 & 미래 직원 (4년 베스팅)</p>
                  <p>• 17.8% — 투자자 (4년 베스팅)</p>
                  <p>• 0.69% — 어드바이저</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S10 버전 비교 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · 버전별 핵심 비교</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    {['항목', 'v1 (2018)', 'v2 (2020)', 'v3 (2021)', 'v4 (2024)'].map((h) => (
                      <th key={h} className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: '거래 페어', v1: 'ETH↔ERC-20', v2: 'ERC-20↔ERC-20', v3: 'ERC-20↔ERC-20', v4: 'ERC-20↔ERC-20 + 네이티브 ETH' },
                    { item: '유동성', v1: '전 범위', v2: '전 범위', v3: '집중 유동성', v4: '집중 유동성 (훅 커스터마이즈)' },
                    { item: '수수료', v1: '0.3%', v2: '0.3%', v3: '0.01/0.05/0.3/1%', v4: '커스텀 (훅으로)' },
                    { item: 'LP 증명', v1: 'ERC-20', v2: 'ERC-20', v3: 'NFT (ERC-721)', v4: 'NFT (ERC-721)' },
                    { item: '오라클', v1: '없음', v2: 'TWAP v1', v3: 'TWAP v2 (가스 효율화)', v4: '훅으로 확장 가능' },
                    { item: '아키텍처', v1: '단일 컨트랙트', v2: '풀별 컨트랙트', v3: '풀별 컨트랙트', v4: '싱글톤 + 훅' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-pink-700 dark:text-pink-300">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.v1}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400 text-xs">{r.v2}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-700 dark:text-gray-300 text-xs">{r.v3}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-pink-700 dark:text-pink-300 text-xs font-medium">{r.v4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S11 MEV와 Uniswap ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">11 · MEV와 Uniswap — 샌드위치 어택의 온상</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap은 MEV의 최대 피해지이자 발생지다. 공개 mempool에 스왑 트랜잭션이 올라오는 순간, 봇이 이를 탐지하고 앞뒤로 샌드위치 어택을 실행할 수 있다. 이 문제를 완화하는 방법들이 있다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-5">
                <p className="font-semibold text-red-800 dark:text-red-300 mb-3">MEV 피해를 키우는 설정</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 슬리피지 허용치를 너무 높게 설정 (5% 이상)</p>
                  <p>• 유동성이 극도로 낮은 풀에서 대형 거래</p>
                  <p>• 공개 mempool에 높은 가스로 트랜잭션 제출</p>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-3">MEV 방어 방법</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 슬리피지 허용치 최소화 (0.1~0.5%)</p>
                  <p>• Flashbots Protect / MEV Blocker RPC 사용</p>
                  <p>• UniswapX 오더 방식 활용 (MEV 보호 내장)</p>
                  <p>• 대형 거래는 여러 번에 분할 실행</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            {/* ── S12 리스크 ── */}
            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">12 · 리스크</h2>
            <div className="space-y-3 my-6">
              {[
                { risk: '비영구 손실(IL)', desc: '가격 변동으로 LP가 그냥 보유했을 때보다 적게 받는 현상. 변동성이 클수록 크다. 수수료 수익이 IL을 상쇄하지 못하면 LP 손실.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: 'MEV / 샌드위치 어택', desc: '슬리피지 설정 없이 대형 스왑 시 봇에게 수익을 빼앗긴다. 특히 유동성이 낮은 풀에서 치명적.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: '스마트컨트랙트 리스크', desc: '코드 취약점. Uniswap은 수차례 감사를 받았으나 v4의 훅 생태계는 검증되지 않은 서드파티 코드 리스크가 추가된다.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: '오라클 의존성', desc: 'Uniswap TWAP을 오라클로 사용하는 프로토콜은 유동성이 낮은 풀이 조작될 경우 큰 피해를 입을 수 있다.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: '규제 리스크', desc: 'Uniswap Labs가 미국 SEC 조사를 받았다. 프론트엔드는 제한될 수 있으나 컨트랙트 자체는 검열 불가.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
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
              <p className="font-bold text-gray-900 dark:text-white text-lg mb-4">Uniswap을 한 문장으로</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Uniswap은 <strong>x × y = k 공식 하나로 중앙화 거래소의 오더북을 대체한 프로토콜</strong>이다. v2가 기초를 완성했고, v3가 집중 유동성으로 자본 효율을 혁신했으며, v4는 훅으로 풀 자체를 프로그래밍 가능하게 만들었다. 단순한 수식이 $2.4T 거래량의 인프라가 됐다.
              </p>
            </div>

            {/* ── walits 실 구현 ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-2 text-gray-900 dark:text-white">13 · walits에서의 실 구현 — ETH → USDC 스왑</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-8">Uniswap V3 SwapRouter02 + Chainlink + MPC 서명</p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              walits는 Uniswap V3를 실제 서비스에 통합해 ETH → USDC 단방향 스왑 기능을 제공한다. Ethereum과 Base 체인을 지원하며, 견적은 Chainlink 가격 피드로 계산하고 실행은 SwapRouter02, 서명은 MPC로 처리한다. 이 섹션에서는 Uniswap을 앱에 붙일 때 실제로 무엇을 결정해야 하는지를 다룬다.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 mb-8 font-mono text-sm overflow-x-auto">
              <p className="text-gray-400 text-xs mb-4">전체 아키텍처</p>
              <div className="space-y-1 text-gray-300">
                <p><span className="text-pink-400">유저 브라우저</span></p>
                <p className="pl-4 text-gray-500">├── GET /api/swap/quote &nbsp;&nbsp;&nbsp;← 견적 조회 (읽기 전용)</p>
                <p className="pl-4 text-gray-500">└── POST /api/swap/execute ← 실제 스왑 실행</p>
                <p className="mt-3"><span className="text-blue-400">Walits 서버 (NestJS)</span></p>
                <p className="pl-4 text-gray-500">├── Chainlink ETH/USD 피드 ← 견적 계산용 가격 조회</p>
                <p className="pl-4 text-gray-500">├── Uniswap V3 SwapRouter02 ← 실제 스왑 컨트랙트</p>
                <p className="pl-4 text-gray-500">└── MPC 서버 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← 트랜잭션 서명</p>
                <p className="mt-3"><span className="text-green-400">온체인 흐름</span></p>
                <p className="pl-4 text-gray-500">유저 지갑 → SwapRouter02 → Uniswap V3 Pool (ETH/USDC 0.05%) → USDC</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">ETH → WETH → USDC 내부 흐름</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap V3 풀은 native ETH가 아닌 WETH(Wrapped ETH)를 사용한다. 직접 ETH로 스왑하려면 WETH 변환이 필요한데, <strong>SwapRouter02가 이 과정을 자동 처리</strong>한다. 유저는 그냥 ETH를 보내기만 하면 된다.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
              <p className="text-gray-400 text-xs mb-3">exactInputSingle 파라미터</p>
              <pre className="text-gray-300 leading-relaxed">{`exactInputSingle({
  tokenIn:           WETH,       // 입력: WETH 주소
  tokenOut:          USDC,       // 출력: USDC 주소
  fee:               500,        // 풀 fee tier: 0.05%
  recipient:         userWallet, // USDC 받을 주소
  amountIn:          ethAmount,  // msg.value로 전달한 ETH
  amountOutMinimum:  amountOutMin, // 슬리피지 보호 하한선
  sqrtPriceLimitX96: 0,          // 0 = 가격 제한 없음
})`}</pre>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-700 dark:text-gray-300">항목</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-700 dark:text-gray-300">Ethereum</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-700 dark:text-gray-300">Base</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'SwapRouter02', eth: '0x68b3465...Fc45', base: '0x2626664...481' },
                    { item: 'WETH', eth: '0xC02aaA3...Cc2', base: '0x4200...0006' },
                    { item: 'USDC', eth: '0xA0b869...B48', base: '0x833589...913' },
                    { item: 'Chainlink ETH/USD', eth: '0x5f4eC3...419', base: '0x71041d...b70' },
                    { item: 'Fee Tier', eth: '0.05% (500)', base: '0.05% (500)' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-pink-700 dark:text-pink-300">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-600 dark:text-gray-400">{r.eth}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-600 dark:text-gray-400">{r.base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">견적 계산 — Chainlink + 0.05% 수수료</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              실제 Uniswap Quoter 컨트랙트를 호출하는 대신 Chainlink 가격 피드로 추정치를 계산한다. 가스비가 들지 않고 빠르다. 단, 이 견적은 <strong>풀 상태(슬리피지)에 따라 실제 체결가와 다를 수 있는 추정치</strong>임을 명심해야 한다.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 mb-4 font-mono text-sm overflow-x-auto">
              <p className="text-gray-400 text-xs mb-3">견적 계산 공식</p>
              <pre className="text-gray-300 leading-relaxed">{`ETH 가격 (USD)  = Chainlink answer / 1e8       // 예: $3,000.00
예상 USDC       = ETH 수량 × ETH 가격           // 0.1 × 3000 = $300.00
수수료 차감     = 예상 금액 × (1 - 0.0005)       // $300 × 0.9995 = $299.85
toAmountRaw     = floor(299.85 × 1e6)           // = 299,850,000 (6 decimals)`}</pre>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">슬리피지 보호</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              견적 시점과 실제 체결 시점 사이에 풀 상태가 바뀔 수 있다. <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-pink-600 dark:text-pink-400">amountOutMinimum</code>을 설정해두면 예상보다 USDC를 적게 받을 경우 트랜잭션이 자동으로 revert된다 — 가스비만 소진되고 ETH는 돌아온다.
            </p>

            <div className="grid md:grid-cols-3 gap-3 my-6">
              {[
                { pct: '0.1%', when: '변동성 낮을 때 / 소액 거래', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' },
                { pct: '0.5%', when: '기본값 / 일반적인 상황', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' },
                { pct: '1.0%', when: '변동성 높을 때 / 대액 거래', color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700' },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-4 ${s.color}`}>
                  <p className="text-2xl font-black text-gray-900 dark:text-white mb-1">{s.pct}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{s.when}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">MPC 서명 + FallbackProvider</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              스왑 트랜잭션은 MPC(Multi-Party Computation) 서버로 서명한다. 개인 키가 단일 서버에 존재하지 않는 방식이다. RPC는 Alchemy를 Primary, Infura를 Fallback으로 구성해 고가용성을 확보한다. Primary가 1,500ms 내 응답하지 않으면 자동으로 Fallback으로 전환된다.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-5 rounded-r-lg mb-6">
              <p className="text-sm text-amber-800 dark:text-amber-300 font-semibold mb-1">MAX 금액 계산 시 주의</p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                ETH 잔액 전체를 스왑하면 가스비를 낼 ETH가 없어진다. walits는 <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">잔액 - 0.0005 ETH</code>를 MAX로 설정해 가스비($1.5 @ $3,000)를 예약한다.
              </p>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">현재 한계</h3>
            <div className="space-y-2 my-4">
              {[
                { label: '단방향만 지원', desc: 'ETH → USDC만 가능. USDC → ETH 역방향은 미구현.', level: '구현 예정' },
                { label: '가격 기반 견적', desc: 'Chainlink 추정치 사용. 실제 풀 시뮬레이션(Quoter 컨트랙트)이 아님.', level: '개선 예정' },
                { label: '체인 간 스왑 없음', desc: 'Ethereum ETH → Base USDC 같은 크로스체인 스왑 불가. 브릿지 후 스왑 필요.', level: '미정' },
                { label: '상태 추적 미완성', desc: 'TX는 PENDING으로만 저장. 체인 컨펌 여부 자동 반영 미구현.', level: '구현 예정' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <span className="text-xs font-bold text-gray-400 w-16 flex-shrink-0 mt-0.5">{r.level}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.label}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* ── EN ── */}
            <h1 className="text-4xl font-bold mb-3 text-gray-900 dark:text-white leading-tight">DeFi Series 2 — Uniswap</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-10">The AMM & Liquidity Revolution · v1 → v2 → v3 → v4</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Cumulative Volume', value: '$2.4T+', sub: '#1 DEX of all time' },
                { label: 'TVL (2026)', value: '$6B+', sub: 'Mostly v3' },
                { label: 'Networks', value: '12+', sub: 'Ethereum, Arbitrum, etc.' },
                { label: 'Fee Tiers', value: '4', sub: '0.01% to 1%' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-pink-600 dark:text-pink-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">01 · What Is Uniswap?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap is an Ethereum-based <strong>decentralized exchange (DEX)</strong>. Traditional exchanges run on order books — lists of buy and sell orders. Uniswap has no order book. Instead, it determines prices using liquidity pools inside smart contracts and a single mathematical formula.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In 2018, Hayden Adams built the first version alone using a $65,000 Ethereum Foundation grant. The idea of "an exchange without an order book" seemed absurd at the time. Today it has processed over $2.4 trillion in cumulative volume and is core DeFi infrastructure.
            </p>

            <div className="grid md:grid-cols-4 gap-3 my-6">
              {[
                { ver: 'v1', year: '2018', key: 'First AMM DEX. ETH↔ERC-20 only.' },
                { ver: 'v2', year: '2020', key: 'ERC-20↔ERC-20 pairs. Flash swaps. TWAP oracle.' },
                { ver: 'v3', year: '2021', key: 'Concentrated liquidity. Fee tier variety. NFT LP positions.' },
                { ver: 'v4', year: '2024', key: 'Hook architecture. Singleton contract. Custom pool logic.' },
              ].map((v, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-bold text-pink-600 dark:text-pink-400 text-lg">{v.ver}</span>
                    <span className="text-xs text-gray-400">{v.year}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{v.key}</p>
                </div>
              ))}
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">02 · The AMM Core — x × y = k</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              An AMM (Automated Market Maker) is a market where an algorithm sets prices. Uniswap's entire pricing mechanism rests on one formula.
            </p>

            <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-700 rounded-2xl p-8 my-6 text-center">
              <p className="text-4xl font-bold text-pink-700 dark:text-pink-300 font-mono mb-3">x × y = k</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">x = Token A qty · y = Token B qty · k = constant (always maintained)</p>
            </div>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Say a pool has 100 ETH and 200,000 USDC (k = 20,000,000). Someone adds 10,000 USDC. How much ETH do they receive?
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6 space-y-3">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3">Swap Calculation</p>
              {[
                { label: 'Initial state', val: 'ETH 100, USDC 200,000 → k = 20,000,000', color: '' },
                { label: 'Add 10,000 USDC', val: 'y = 210,000 → x = 20,000,000 ÷ 210,000 = 95.24', color: '' },
                { label: 'ETH received', val: '100 − 95.24 = 4.76 ETH', color: 'text-pink-600 dark:text-pink-400 font-bold' },
                { label: 'Effective price', val: '10,000 ÷ 4.76 ≈ $2,101/ETH (higher than market → Price Impact)', color: 'text-amber-600 dark:text-amber-400' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-gray-400 w-32 flex-shrink-0 text-xs">{r.label}</span>
                  <span className={`font-mono ${r.color || 'text-gray-700 dark:text-gray-300'}`}>{r.val}</span>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-5 rounded-r-lg my-6">
              <p className="text-sm text-amber-800 dark:text-amber-300 font-medium mb-1">Price Impact</p>
              <p className="text-sm text-amber-700 dark:text-amber-300">The larger the order relative to pool size, the worse the execution price. This is exactly what caused the $50M Aave incident — a $37M order into a $73K pool.</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">03 · Liquidity Providers (LPs)</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap pools need liquidity to function. <strong>LPs</strong> deposit equal values of two tokens and earn swap fees in return.
            </p>

            <div className="space-y-3 my-6">
              {[
                { n: '1', text: 'Deposit ETH $1,000 + USDC $1,000 into the pool (equal value)', color: 'bg-blue-50 dark:bg-blue-900/20' },
                { n: '2', text: 'Receive LP tokens representing your share of the pool', color: 'bg-blue-50 dark:bg-blue-900/20' },
                { n: '3', text: 'Every swap generates a fee (0.3%) → accumulated in the pool', color: 'bg-green-50 dark:bg-green-900/20' },
                { n: '4', text: 'Withdraw: burn LP tokens → receive principal + accumulated fees', color: 'bg-green-50 dark:bg-green-900/20' },
              ].map((s, i) => (
                <div key={i} className={`flex items-start gap-3 rounded-lg p-4 text-sm ${s.color}`}>
                  <span className="font-mono text-gray-400 w-4 flex-shrink-0">{s.n}</span>
                  <span className="text-gray-700 dark:text-gray-300">{s.text}</span>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Impermanent Loss — The Core LP Risk</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The most distinctive risk LPs face. When the price ratio of two pooled assets changes, <strong>you receive less value than if you'd simply held them.</strong> It's "impermanent" because the loss disappears if prices return to the original ratio.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Impermanent Loss Scenario</p>
              <div className="space-y-4">
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-xs font-semibold text-gray-500 mb-2">At deposit</p>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">1 ETH ($2,000) + 2,000 USDC → Total $4,000, k = 2,000</p>
                </div>
                <div className="bg-white dark:bg-gray-900 rounded-lg p-4">
                  <p className="text-xs font-semibold text-red-500 mb-2">ETH doubles to $4,000</p>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">New equilibrium: 0.707 ETH + 2,828 USDC</p>
                  <p className="text-sm font-mono text-gray-700 dark:text-gray-300">Pool value: 0.707×$4,000 + $2,828 ≈ <span className="text-red-600 dark:text-red-400">$5,656</span></p>
                  <p className="text-xs text-gray-400 mt-1">Just holding: 1 ETH ($4,000) + $2,000 USDC = <span className="text-green-600 dark:text-green-400 font-semibold">$6,000</span></p>
                </div>
                <div className="bg-red-50 dark:bg-red-900/20 rounded-lg p-4">
                  <p className="text-sm font-semibold text-red-700 dark:text-red-300">Impermanent Loss: $6,000 − $5,656 = $344 (~5.7%)</p>
                  <p className="text-xs text-gray-500 mt-1">Fee income must exceed this loss for the LP to profit.</p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">Price Change</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left">Impermanent Loss</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { change: '1.25× (+25%)', loss: '0.6%' },
                    { change: '1.5× (+50%)', loss: '2.0%' },
                    { change: '2× (+100%)', loss: '5.7%' },
                    { change: '4× (+300%)', loss: '20.0%' },
                    { change: '10× (+900%)', loss: '42.5%' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-700 dark:text-gray-300">{r.change}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-semibold text-red-600 dark:text-red-400">{r.loss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">04 · Uniswap v2 (2020) — The Complete Foundation</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v1 required ETH as an intermediary (ETH↔ERC-20 only). v2 enabled <strong>direct ERC-20↔ERC-20 pairs</strong> and added several key features.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: 'ERC-20 Pairs',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: 'Direct ERC-20↔ERC-20 Pairs',
                  desc: 'In v1, swapping USDC→DAI required two hops: USDC→ETH→DAI. v2 allows a direct USDC/DAI pool, halving fees and slippage.',
                },
                {
                  tag: 'TWAP Oracle',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'TWAP Price Oracle',
                  desc: 'Records a cumulative price every block. The difference between two timestamps divided by elapsed time yields the TWAP (Time-Weighted Average Price). Resistant to short-term manipulation — widely adopted as a price oracle by other DeFi protocols.',
                },
                {
                  tag: 'Flash Swap',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  title: 'Flash Swaps',
                  desc: "Similar to Aave's flash loans. Withdraw tokens from the pool first and repay within the same transaction (or exchange for equivalent value). Effectively borrows the pool's full liquidity with zero collateral.",
                },
                {
                  tag: 'Protocol Fee',
                  tagColor: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  title: 'Protocol Fee Switch',
                  desc: 'Built-in mechanism to redirect 0.05% of the 0.3% swap fee to the protocol (Uniswap Labs/DAO). Off by default. Requires governance vote to activate.',
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

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">05 · Uniswap v3 (2021) — The Concentrated Liquidity Revolution</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v2 LPs spread liquidity from price zero to infinity. Depositing $1,000 into an ETH/USDC pool meant covering every price from $0.01 to $1,000,000 — only a tiny fraction was ever near the actual trading price.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v3 fixed this. LPs <strong>specify a custom price range</strong> to concentrate their liquidity. Same capital, far more fees.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: 'Concentrated Liquidity',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: 'Concentrated Liquidity',
                  desc: 'LPs set a min price and max price range. While the current price is inside that range, the LP earns fees. When the price moves outside, fees stop and the position converts fully into one token. Narrower range = higher capital efficiency, higher risk of going out of range.',
                },
                {
                  tag: 'Fee Tiers',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: '4 Fee Tiers',
                  desc: '0.01% (stable↔stable), 0.05% (correlated assets like ETH↔WBTC), 0.3% (standard), 1% (high-volatility small caps). The router automatically selects the best path across tiers.',
                },
                {
                  tag: 'NFT Positions',
                  tagColor: 'bg-purple-100 text-purple-800 dark:bg-purple-900/40 dark:text-purple-300',
                  title: 'LP Position = NFT (ERC-721)',
                  desc: "v2 LP tokens (ERC-20) were identical for all LPs in a pool. v3 positions are unique by price range, so each is minted as an NFT. These NFTs can be traded, used as collateral, or managed by position managers.",
                },
                {
                  tag: 'Ticks',
                  tagColor: 'bg-amber-100 text-amber-800 dark:bg-amber-900/40 dark:text-amber-300',
                  title: 'Ticks — Discrete Price Increments',
                  desc: 'Continuous price ranges are discretized into ticks. 1 tick = 0.01% price change. LP min/max prices snap to tick boundaries. Lower fee tiers use narrower tick spacing for finer-grained range control.',
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

            <div className="bg-pink-50 dark:bg-pink-900/20 border border-pink-200 dark:border-pink-700 rounded-xl p-6 my-6">
              <p className="font-semibold text-pink-800 dark:text-pink-300 mb-3">v3 Capital Efficiency — By the Numbers</p>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-3">ETH/USDC pool, current price $2,000</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-gray-600 dark:text-gray-400">v2 (full range): $10,000 deposited</span>
                  <span className="font-mono text-gray-500">Effective liquidity near spot ≈ $10</span>
                </div>
                <div className="flex justify-between bg-white dark:bg-gray-900 rounded-lg p-3">
                  <span className="text-gray-600 dark:text-gray-400">v3 ($1,900–$2,100 range): $10,000</span>
                  <span className="font-mono text-pink-600 dark:text-pink-400 font-bold">Effective liquidity ≈ $10,000</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-3">Same capital, up to 1,000× more fee income. Trade-off: fees stop if price exits the range.</p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">06 · Uniswap v4 (2024) — Hook Architecture</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              v4 is a structural reinvention. Two pillars: <strong>singleton contract</strong> and <strong>hooks</strong>.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: 'Singleton',
                  tagColor: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
                  title: 'Singleton Contract — All Pools in One Contract',
                  desc: 'v3 deployed a separate contract per pool. v4 consolidates every pool into a single PoolManager contract. Multi-hop swaps require only one token transfer instead of one per pool — gas savings of up to 99% on complex routes.',
                },
                {
                  tag: 'Hooks',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: 'Hooks — Fully Customizable Pool Logic',
                  desc: 'Developers can inject arbitrary logic before and after swaps, liquidity additions, and removals. Eight hook points: beforeSwap, afterSwap, beforeAddLiquidity, afterAddLiquidity, etc. This enables dynamic fees based on volatility, KYC-gated pools, on-chain order books, and MEV protection — all at the pool level.',
                },
                {
                  tag: 'Flash Accounting',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'Flash Accounting — Settle Once at End of Transaction',
                  desc: 'Even complex multi-pool swaps execute a single token transfer at transaction end. No intermediate token movement. Uses ERC-6909 multi-token standard for internal balance tracking.',
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

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">07 · Swap Routing — Automatic Best Path</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Swapping USDC → AAVE on Uniswap doesn't just look for a USDC/AAVE pool. The <strong>Smart Order Router (SOR)</strong> simulates hundreds of paths across v2, v3, and v4 pools to find the best net output. Here's how it works, step by step.
            </p>

            {/* Why not just use the direct pool */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Why Not Just Use the Direct Pool? — Liquidity and Price Impact</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Even if a USDC/AAVE pool exists, shallow liquidity means a large swap causes severe <strong>price impact</strong>. With x×y=k, each additional unit you buy costs more than the last.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-5">
                <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-3">❌ Direct USDC/AAVE Pool Only</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Dump $10,000 USDC into a shallow pool</p>
                  <p>• Price impact: <strong>3–5%</strong></p>
                  <p>• You receive far less AAVE than expected</p>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-3">✅ Router Finds Optimal Path</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• USDC → WETH → AAVE (deep liquidity pools)</p>
                  <p>• Price impact: <strong>0.3–0.8%</strong></p>
                  <p>• 2–4% more AAVE received</p>
                </div>
              </div>
            </div>

            {/* 4-step routing process */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">How SOR Finds the Best Path — 4 Steps</h3>
            <div className="space-y-3 my-6">
              {[
                {
                  n: '1', icon: '🔍', title: 'Collect Candidate Pools',
                  desc: 'SOR gathers all v2 pools, v3 pools (all four fee tiers: 0.01%, 0.05%, 0.3%, 1%), and v4 pools relevant to the input and output tokens — including multi-hop paths via intermediate tokens like WETH, USDT, DAI, and WBTC.',
                  color: 'bg-blue-50 dark:bg-blue-900/20',
                },
                {
                  n: '2', icon: '🗺️', title: 'Build a Pool Graph',
                  desc: 'Each pool becomes a node; tokens become edges. The router traces paths: 2-hop (USDC→WETH→AAVE), 3-hop (USDC→USDT→WETH→AAVE), and so on. Up to 3 hops are typically explored.',
                  color: 'bg-purple-50 dark:bg-purple-900/20',
                },
                {
                  n: '3', icon: '🧮', title: 'Simulate Each Path',
                  desc: 'For each candidate path, SOR calculates the expected output given current on-chain pool state — accounting for price impact, fees, and slippage. It compares net output across all paths.',
                  color: 'bg-orange-50 dark:bg-orange-900/20',
                },
                {
                  n: '4', icon: '⚖️', title: 'Optimize with Split Routing',
                  desc: 'SOR checks if splitting the order across multiple paths beats a single path. E.g., 70% via Route A + 30% via Route B. Because each pool has an independent x×y=k curve, spreading the trade reduces price impact on each pool.',
                  color: 'bg-green-50 dark:bg-green-900/20',
                },
              ].map((s, i) => (
                <div key={i} className={`rounded-xl p-5 ${s.color}`}>
                  <div className="flex items-start gap-3">
                    <span className="text-xl flex-shrink-0">{s.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white mb-1">Step {s.n} — {s.title}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Real routing example */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Real Example — SOR Picking a Route for USDC $10,000 → AAVE</h3>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Candidate Routes SOR Evaluates</p>
              <div className="space-y-4">
                {[
                  {
                    label: 'Route A',
                    badge: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                    path: 'USDC → WETH (v3 0.05%) → AAVE (v3 0.3%)',
                    hops: '2-hop',
                    fee: 'Fee: 0.35%',
                    impact: 'Price impact: ~1.2%',
                    output: 'Est. AAVE: 82.4',
                    best: false,
                  },
                  {
                    label: 'Route B ✓ Best',
                    badge: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                    path: '70% USDC→WETH(v3 0.05%)→AAVE(v3 0.3%) + 30% USDC→USDT(v3 0.01%)→WETH(v3 0.05%)→AAVE(v3 0.3%)',
                    hops: 'Split routing',
                    fee: 'Fee: 0.36%',
                    impact: 'Price impact: ~0.4%',
                    output: 'Est. AAVE: 84.1 (+2.0%)',
                    best: true,
                  },
                  {
                    label: 'Route C',
                    badge: 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300',
                    path: 'USDC → DAI (v3 0.01%) → WETH (v3 0.05%) → AAVE (v3 0.3%)',
                    hops: '3-hop',
                    fee: 'Fee: 0.36%',
                    impact: 'Price impact: ~0.9%',
                    output: 'Est. AAVE: 83.1',
                    best: false,
                  },
                ].map((r, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${r.best ? 'border-green-400 dark:border-green-600 bg-green-50/50 dark:bg-green-900/10' : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'}`}>
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${r.badge}`}>{r.label}</span>
                      <span className="text-xs text-gray-400">{r.hops}</span>
                    </div>
                    <p className="text-xs font-mono text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">{r.path}</p>
                    <div className="flex flex-wrap gap-4 text-xs">
                      <span className="text-gray-500">{r.fee}</span>
                      <span className="text-orange-600 dark:text-orange-400">{r.impact}</span>
                      <span className={`font-bold ${r.best ? 'text-green-600 dark:text-green-400' : 'text-gray-700 dark:text-gray-300'}`}>{r.output}</span>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-gray-500 mt-4">* Numbers are illustrative. Actual output depends on pool state at execution time. SOR always selects the route with the highest net output.</p>
            </div>

            {/* Why split routing helps */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Why Split Routing Wins on Large Orders</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              With x×y=k, dumping $10,000 into one pool skews the ratio heavily, and each subsequent unit costs more. Splitting across two pools means each pool absorbs a smaller shock — keeping you in the flatter, more favorable part of each curve.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-4">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Same $10,000 — More AAVE with Split Routing</p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <div className="w-40 text-gray-500 text-xs flex-shrink-0">Single pool (Route A)</div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-red-400 h-4 rounded-full" style={{width: '78%'}} />
                  </div>
                  <span className="text-xs text-red-600 dark:text-red-400 w-20 flex-shrink-0">82.4 AAVE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-40 text-gray-500 text-xs flex-shrink-0">Split routing (Route B)</div>
                  <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-4 overflow-hidden">
                    <div className="bg-green-400 h-4 rounded-full" style={{width: '85%'}} />
                  </div>
                  <span className="text-xs text-green-600 dark:text-green-400 w-20 flex-shrink-0">84.1 AAVE ✓</span>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">The larger the trade, the more split routing helps. Each pool has an independent curve — spreading trades exploits the favorable low-impact zone on each one.</p>
            </div>

            {/* Multi-hop table */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">When Multi-Hop Paths Are Used</h3>
            <div className="overflow-x-auto my-4">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Hops</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">Example Path</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">When Used</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { hops: '1-hop (direct)', path: 'USDC → AAVE', when: 'Deep liquidity pairs: USDC/ETH, ETH/WBTC' },
                    { hops: '2-hop', path: 'USDC → WETH → AAVE', when: 'No direct pool, or WETH route has deeper liquidity' },
                    { hops: '3-hop', path: 'USDC → DAI → WETH → AAVE', when: 'Specific stablecoin pools with deep liquidity' },
                    { hops: 'Split 2-hop', path: '70% USDC→WETH→AAVE + 30% USDC→USDT→WETH→AAVE', when: 'Large trades needing price impact distribution' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-purple-600 dark:text-purple-400 text-xs">{r.hops}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-600 dark:text-gray-400">{r.path}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-xs text-gray-600 dark:text-gray-400">{r.when}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Slippage */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Slippage Tolerance — Your Safety Net</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Even after SOR picks the best path, other transactions can change pool state before yours is included in a block. Slippage tolerance sets the minimum acceptable output — if the actual output falls below it, the transaction reverts automatically.
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm text-center">
                <div>
                  <p className="text-2xl font-bold text-green-600 dark:text-green-400">0.1%</p>
                  <p className="text-xs text-gray-500 mt-1">Stablecoin pairs</p>
                  <p className="text-xs text-gray-400">(USDC/USDT etc.)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">0.5%</p>
                  <p className="text-xs text-gray-500 mt-1">Default for most swaps</p>
                  <p className="text-xs text-gray-400">(recommended)</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">1–3%</p>
                  <p className="text-xs text-gray-500 mt-1">Low-liquidity tokens</p>
                  <p className="text-xs text-gray-400">(small altcoins)</p>
                </div>
              </div>
              <p className="text-xs text-gray-500 mt-4">Too low = frequent transaction failures. Too high = MEV sandwich attack target. 0.5% works for the vast majority of swaps.</p>
            </div>

            {/* MEV and routing */}
            <h3 className="text-xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">Routing and MEV — Your Swap Can Be Attacked</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When a swap transaction hits the public mempool, MEV bots can spot it and execute a <strong>sandwich attack</strong> — front-running to push the price up, then back-running to sell. High slippage tolerance and large amounts are the prime targets.
            </p>
            <div className="grid md:grid-cols-2 gap-4 my-4">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-4">
                <p className="text-sm font-bold text-red-700 dark:text-red-300 mb-2">⚠️ Sandwich Attack Conditions</p>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Slippage tolerance set high (1%+)</li>
                  <li>• Large swap with visible price impact</li>
                  <li>• Shallow pool being used</li>
                </ul>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-4">
                <p className="text-sm font-bold text-green-700 dark:text-green-300 mb-2">🛡️ Protection Methods</p>
                <ul className="text-xs text-gray-600 dark:text-gray-400 space-y-1">
                  <li>• Use UniswapX (off-chain orders, MEV-blocked)</li>
                  <li>• Keep slippage at 0.5% or below</li>
                  <li>• Use Flashbots Protect RPC</li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-5 rounded-r-lg my-6">
              <p className="text-sm font-bold text-blue-800 dark:text-blue-300 mb-2">💡 The Uniswap Interface Handles All of This Automatically</p>
              <p className="text-sm text-blue-700 dark:text-blue-200 leading-relaxed">
                Regular users don't need to think about any of this — the Uniswap app runs SOR and picks the best route automatically. But <strong>the larger the trade and the less liquid the token</strong>, the more routing quality matters. For large swaps, it's worth comparing with a dedicated aggregator like 1inch to see if they find a better route.
              </p>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">08 · UniswapX & Permit2</h2>

            <div className="space-y-4 my-6">
              {[
                {
                  tag: 'UniswapX',
                  tagColor: 'bg-pink-100 text-pink-800 dark:bg-pink-900/40 dark:text-pink-300',
                  title: 'UniswapX — Off-chain Orders, On-chain Settlement',
                  desc: 'Users sign an off-chain order ("I want at least X AAVE for 1,000 USDC"). Fillers compete to offer the best price and settle atomically on-chain. Gas is paid by the Filler or deducted from the swap. Core benefits: MEV protection and gasless swaps.',
                },
                {
                  tag: 'Permit2',
                  tagColor: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  title: 'Permit2 — Universal Token Permission System',
                  desc: "Classic ERC-20 required a separate approve() per contract. Permit2 lets a single signature authorize all Uniswap contracts (router, v3, v4). Signature-based = no gas. Permissions carry expiry and spend limits for better security.",
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

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">09 · UNI Token & Governance</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In September 2020, Uniswap launched UNI with one of DeFi's largest-ever airdrops — 400 UNI (~$1,200 at the time) to every wallet that had ever used Uniswap, roughly 250,000 addresses.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">UNI Token Roles</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Governance voting (protocol fees, parameter changes)</p>
                  <p>• Uniswap DAO treasury management (~$2B+)</p>
                  <p>• No staking yield currently (under discussion)</p>
                </div>
              </div>
              <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5">
                <p className="font-semibold text-gray-900 dark:text-white mb-3">Total Supply Distribution</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• 60% — Community (airdrop, liquidity mining)</p>
                  <p>• 21.51% — Team & future employees (4yr vesting)</p>
                  <p>• 17.8% — Investors (4yr vesting)</p>
                  <p>• 0.69% — Advisors</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">10 · Version Comparison</h2>
            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-800">
                    {['Feature', 'v1 (2018)', 'v2 (2020)', 'v3 (2021)', 'v4 (2024)'].map((h) => (
                      <th key={h} className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold">{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'Pairs', v1: 'ETH↔ERC-20', v2: 'ERC-20↔ERC-20', v3: 'ERC-20↔ERC-20', v4: 'ERC-20↔ERC-20 + native ETH' },
                    { item: 'Liquidity', v1: 'Full range', v2: 'Full range', v3: 'Concentrated', v4: 'Concentrated + hook customizable' },
                    { item: 'Fee', v1: '0.3%', v2: '0.3%', v3: '0.01/0.05/0.3/1%', v4: 'Custom via hooks' },
                    { item: 'LP Receipt', v1: 'ERC-20', v2: 'ERC-20', v3: 'NFT (ERC-721)', v4: 'NFT (ERC-721)' },
                    { item: 'Oracle', v1: 'None', v2: 'TWAP v1', v3: 'TWAP v2 (gas optimized)', v4: 'Extensible via hooks' },
                    { item: 'Architecture', v1: 'Single contract', v2: 'Per-pool contracts', v3: 'Per-pool contracts', v4: 'Singleton + hooks' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-pink-700 dark:text-pink-300">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-500 dark:text-gray-400 text-xs">{r.v1}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-600 dark:text-gray-400 text-xs">{r.v2}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-gray-700 dark:text-gray-300 text-xs">{r.v3}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 text-pink-700 dark:text-pink-300 text-xs font-medium">{r.v4}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">11 · MEV & Uniswap</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap is both the primary venue and primary victim of MEV. The moment a swap transaction hits the public mempool, bots can sandwich it.
            </p>

            <div className="grid md:grid-cols-2 gap-4 my-6">
              <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-700 rounded-xl p-5">
                <p className="font-semibold text-red-800 dark:text-red-300 mb-3">Settings That Increase MEV Exposure</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• High slippage tolerance (5%+)</p>
                  <p>• Large trades in low-liquidity pools</p>
                  <p>• Public mempool with high gas price</p>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-700 rounded-xl p-5">
                <p className="font-semibold text-green-800 dark:text-green-300 mb-3">MEV Protection</p>
                <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                  <p>• Minimize slippage tolerance (0.1–0.5%)</p>
                  <p>• Use Flashbots Protect / MEV Blocker RPC</p>
                  <p>• Use UniswapX (MEV protection built-in)</p>
                  <p>• Split large trades into smaller chunks</p>
                </div>
              </div>
            </div>

            <hr className="border-gray-200 dark:border-gray-700 my-10" />

            <h2 className="text-3xl font-bold mt-12 mb-6 text-gray-900 dark:text-white">12 · Risks</h2>
            <div className="space-y-3 my-6">
              {[
                { risk: 'Impermanent Loss', desc: 'When pooled asset prices diverge, LPs receive less value than if they had simply held. Higher volatility = larger IL. Fee income must exceed IL for LP to profit.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: 'MEV / Sandwich Attacks', desc: 'Large swaps without slippage protection are prey for bots. Devastating in low-liquidity pools.', level: 'HIGH', color: 'text-red-600 dark:text-red-400' },
                { risk: 'Smart Contract Risk', desc: 'Code vulnerabilities. Uniswap core is battle-tested, but v4\'s hook ecosystem introduces unaudited third-party code risk.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Oracle Dependency', desc: 'Protocols using Uniswap TWAP as an oracle face manipulation risk in low-liquidity pools.', level: 'MED', color: 'text-amber-600 dark:text-amber-400' },
                { risk: 'Regulatory Risk', desc: 'Uniswap Labs faced SEC scrutiny. Frontend access could be restricted; the contracts themselves cannot be censored.', level: 'LOW', color: 'text-green-600 dark:text-green-400' },
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
              <p className="font-bold text-gray-900 dark:text-white text-lg mb-4">Uniswap in One Sentence</p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Uniswap replaced the order book with a single formula — <strong>x × y = k</strong>. v2 completed the foundation, v3 revolutionized capital efficiency with concentrated liquidity, and v4 made pools themselves programmable through hooks. A simple equation became the infrastructure for $2.4 trillion in trading volume.
              </p>
            </div>

            {/* ── walits implementation ── */}
            <hr className="border-gray-200 dark:border-gray-700 my-10" />
            <h2 className="text-3xl font-bold mt-12 mb-2 text-gray-900 dark:text-white">13 · walits Integration — ETH → USDC Swap</h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-8">Uniswap V3 SwapRouter02 + Chainlink + MPC signing</p>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              walits integrates Uniswap V3 to offer a one-way ETH → USDC swap. Supported on both Ethereum and Base. Quotes come from Chainlink price feeds, execution goes through SwapRouter02, and signing is handled by MPC. This section covers the decisions you actually have to make when integrating Uniswap into a production app.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-2xl p-6 mb-8 font-mono text-sm overflow-x-auto">
              <p className="text-gray-400 text-xs mb-4">Architecture overview</p>
              <div className="space-y-1 text-gray-300">
                <p><span className="text-pink-400">User browser</span></p>
                <p className="pl-4 text-gray-500">├── GET /api/swap/quote &nbsp;&nbsp;&nbsp;← quote (read-only)</p>
                <p className="pl-4 text-gray-500">└── POST /api/swap/execute ← execute swap</p>
                <p className="mt-3"><span className="text-blue-400">Walits server (NestJS)</span></p>
                <p className="pl-4 text-gray-500">├── Chainlink ETH/USD feed ← price for quote calculation</p>
                <p className="pl-4 text-gray-500">├── Uniswap V3 SwapRouter02 ← swap contract</p>
                <p className="pl-4 text-gray-500">└── MPC server &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;← transaction signing</p>
                <p className="mt-3"><span className="text-green-400">On-chain flow</span></p>
                <p className="pl-4 text-gray-500">user wallet → SwapRouter02 → Uniswap V3 Pool (ETH/USDC 0.05%) → USDC</p>
              </div>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">ETH → WETH → USDC internal flow</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Uniswap V3 pools use WETH (Wrapped ETH), not native ETH. Converting ETH to WETH before swapping is normally required — but <strong>SwapRouter02 handles this automatically</strong>. The user just sends ETH.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 mb-6 font-mono text-sm overflow-x-auto">
              <p className="text-gray-400 text-xs mb-3">exactInputSingle params</p>
              <pre className="text-gray-300 leading-relaxed">{`exactInputSingle({
  tokenIn:           WETH,         // input token address
  tokenOut:          USDC,         // output token address
  fee:               500,          // pool fee tier: 0.05%
  recipient:         userWallet,   // where USDC is sent
  amountIn:          ethAmount,    // ETH passed as msg.value
  amountOutMinimum:  amountOutMin, // slippage floor
  sqrtPriceLimitX96: 0,            // 0 = no price cap
})`}</pre>
            </div>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-700 dark:text-gray-300">Contract</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-700 dark:text-gray-300">Ethereum</th>
                    <th className="border border-gray-200 dark:border-gray-700 p-3 text-left font-semibold text-gray-700 dark:text-gray-300">Base</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { item: 'SwapRouter02', eth: '0x68b3465...Fc45', base: '0x2626664...481' },
                    { item: 'WETH', eth: '0xC02aaA3...Cc2', base: '0x4200...0006' },
                    { item: 'USDC', eth: '0xA0b869...B48', base: '0x833589...913' },
                    { item: 'Chainlink ETH/USD', eth: '0x5f4eC3...419', base: '0x71041d...b70' },
                    { item: 'Fee Tier', eth: '0.05% (500)', base: '0.05% (500)' },
                  ].map((r, i) => (
                    <tr key={i} className={i % 2 === 0 ? '' : 'bg-gray-50 dark:bg-gray-800/50'}>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-medium text-pink-700 dark:text-pink-300">{r.item}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-600 dark:text-gray-400">{r.eth}</td>
                      <td className="border border-gray-200 dark:border-gray-700 p-3 font-mono text-xs text-gray-600 dark:text-gray-400">{r.base}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Quote calculation — Chainlink + 0.05% fee</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Instead of calling the Uniswap Quoter contract on-chain (which costs gas), walits estimates the quote from Chainlink price feeds. It&apos;s fast and free. The trade-off: <strong>this is an estimate — actual fill price depends on pool state (slippage)</strong>.
            </p>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 mb-4 font-mono text-sm overflow-x-auto">
              <p className="text-gray-400 text-xs mb-3">Quote formula</p>
              <pre className="text-gray-300 leading-relaxed">{`ETH price (USD) = Chainlink answer / 1e8         // e.g. $3,000.00
expected USDC   = ETH amount × ETH price          // 0.1 × 3000 = $300.00
fee deduction   = expected × (1 - 0.0005)         // $300 × 0.9995 = $299.85
toAmountRaw     = floor(299.85 × 1e6)             // = 299,850,000 (6 decimals)`}</pre>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Slippage protection</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Between quote and execution, the pool can shift. Setting <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded text-pink-600 dark:text-pink-400">amountOutMinimum</code> means if the actual USDC received falls below the threshold, the transaction automatically reverts — gas burned, ETH returned.
            </p>

            <div className="grid md:grid-cols-3 gap-3 my-6">
              {[
                { pct: '0.1%', when: 'Low volatility / small trades', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-700' },
                { pct: '0.5%', when: 'Default / normal conditions', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-700' },
                { pct: '1.0%', when: 'High volatility / large trades', color: 'bg-amber-50 dark:bg-amber-900/20 border-amber-200 dark:border-amber-700' },
              ].map((s, i) => (
                <div key={i} className={`border rounded-xl p-4 ${s.color}`}>
                  <p className="text-2xl font-black text-gray-900 dark:text-white mb-1">{s.pct}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{s.when}</p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">MPC signing + FallbackProvider</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Swap transactions are signed via MPC (Multi-Party Computation) — the private key never exists on a single server. RPC uses Alchemy as primary and Infura as fallback. If Alchemy doesn&apos;t respond within 1,500 ms, the request automatically falls through to Infura.
            </p>

            <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-5 rounded-r-lg mb-6">
              <p className="text-sm text-amber-800 dark:text-amber-300 font-semibold mb-1">MAX amount caveat</p>
              <p className="text-sm text-amber-700 dark:text-amber-300">
                Swapping the entire ETH balance leaves nothing for gas. walits reserves <code className="bg-amber-100 dark:bg-amber-900 px-1 rounded">balance - 0.0005 ETH</code> as the MAX amount (~$1.50 at $3,000/ETH).
              </p>
            </div>

            <h3 className="text-xl font-bold mt-10 mb-4 text-gray-900 dark:text-white">Current limitations</h3>
            <div className="space-y-2 my-4">
              {[
                { label: 'One-way only', desc: 'ETH → USDC only. USDC → ETH reverse direction not yet implemented.', level: 'Planned' },
                { label: 'Estimate-based quote', desc: 'Uses Chainlink price estimate. Not a real pool simulation (Quoter contract).', level: 'To improve' },
                { label: 'No cross-chain swap', desc: 'Ethereum ETH → Base USDC not possible in one step. Bridge first, then swap.', level: 'TBD' },
                { label: 'Status tracking incomplete', desc: 'TX saved as PENDING only. Auto-updating DB on chain confirmation not yet built.', level: 'Planned' },
              ].map((r, i) => (
                <div key={i} className="flex items-start gap-4 border border-gray-200 dark:border-gray-700 rounded-xl p-4">
                  <span className="text-xs font-bold text-gray-400 w-16 flex-shrink-0 mt-0.5">{r.level}</span>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-white text-sm">{r.label}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-0.5 leading-relaxed">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </article>
    </div>
  );
}
