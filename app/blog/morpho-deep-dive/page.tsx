'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function MorphoDeepDivePage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-indigo-900 to-slate-900">
          <Image src="/blog/morpho.jpg" alt="Morpho Finance" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-indigo-700/80 text-white px-3 py-1 rounded-full">
              {language === 'ko' ? 'DeFi 시리즈 9' : 'DeFi Series 9'}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 9 — Morpho Finance: Aave 위에서 더 잘하는 대출 프로토콜</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">P2P 매칭 · Morpho Blue · MetaMorpho · 즉시 출금 5.6% APY</p>
            <p className="text-gray-400 text-xs font-mono mb-10">2026년 4월 6일 · 20분</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Morpho TVL', value: '$3B+', sub: '2025년 기준' },
                { label: '출시', value: '2022', sub: 'Optimizer 런칭' },
                { label: '지원 체인', value: '3+', sub: 'Ethereum·Base·Polygon' },
                { label: '감사', value: '완료', sub: '복수 독립 감사' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · Morpho란? — Aave의 금리 비효율을 해결하다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave와 Compound는 DeFi 대출 시장의 거인이다. 수십억 달러가 예치되어 있고 보안도 검증됐다. 그런데 이 두 프로토콜에는 구조적인 문제가 있다. <strong>예치자는 낮은 금리를 받고, 대출자는 높은 금리를 낸다.</strong> 그 사이 스프레드가 시스템의 수익이 된다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              왜 이런 비효율이 생길까? 풀(Pool) 방식 때문이다. Aave에 예치된 자금은 하나의 큰 풀에 모인다. 대출자가 언제 올지 모르기 때문에 항상 일정 비율의 유동성을 유지해야 한다. 이 유휴 자금이 수익률을 낮춘다. <strong>Morpho는 이 간극을 P2P 매칭으로 메운다.</strong> 예치자와 대출자를 직접 연결해 양측 모두 더 좋은 금리를 받게 하는 것이다.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">Morpho Finance 한 줄 정의</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Aave·Compound의 유동성 풀을 기반으로 하되, P2P 매칭을 통해 예치자와 대출자 양쪽 모두에게 더 나은 금리를 제공하는 <strong>대출 최적화 + 허가 없는 마켓 생성 프로토콜</strong>.
              </p>
            </div>

            {/* S2 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Morpho의 진화 — 3단계 타임라인</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Morpho는 단순한 금리 최적화 도구에서 시작해 완전한 DeFi 대출 레이어로 진화했다. 2022년부터 2024년까지 세 단계의 굵직한 변화가 있었다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  year: '2022',
                  title: 'Morpho Optimizer',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: '1단계 · 시작',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  points: [
                    'Aave·Compound 위에 P2P 매칭 레이어 추가',
                    '매칭이 안 된 자금은 기존 풀에서 그대로 운용',
                    '스마트컨트랙트 감사 완료, TVL 빠르게 성장',
                    '사용자 입장에선 기존 Aave 예치와 동일한 UX',
                  ],
                },
                {
                  year: '2024',
                  title: 'Morpho Blue',
                  badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
                  badgeText: '2단계 · 핵심 혁신',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  dot: 'bg-indigo-500',
                  points: [
                    'Aave에 의존하지 않는 완전 독립형 대출 프리미티브',
                    '허가 없는(permissionless) 마켓 생성 — 누구나 새 마켓 열 수 있음',
                    '4가지 파라미터(담보·대출토큰·오라클·LLTV)만으로 마켓 정의',
                    '극도로 단순하고 작은 코드베이스 — 감사 용이성 극대화',
                  ],
                },
                {
                  year: '2024~',
                  title: 'MetaMorpho 볼트',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  badgeText: '3단계 · 생태계 확장',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    '큐레이터(Gauntlet, Block Analitica 등)가 여러 Blue 마켓에 자동 배분',
                    '사용자는 볼트에 예치만 하면 됨 — 마켓 선택 불필요',
                    '리스크 등급별 볼트 다양화: 안전형·수익형·특화형',
                    'Aave 스타일 UX + Morpho Blue의 효율성 결합',
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${phase.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${phase.dot}`} />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{phase.year} · {phase.title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${phase.badge}`}>{phase.badgeText}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-indigo-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* S3 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · 핵심 혁신: P2P 매칭 — 숫자로 보는 차이</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              P2P 매칭이 왜 더 나은지를 숫자로 직접 비교해보자. 같은 USDC를 예치하거나 빌릴 때 Aave와 Morpho에서 받는 금리가 어떻게 다른지 보면 된다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">기존 풀 방식(Aave) vs Morpho P2P 방식</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Aave 방식 */}
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">Aave 풀 방식</p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">예치자 금리</span>
                      <span className="font-bold text-orange-500 text-lg">4.8%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">대출자 금리</span>
                      <span className="font-bold text-red-500 text-lg">7.5%</span>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">스프레드 (프로토콜 수익)</span>
                        <span className="font-bold text-gray-600 dark:text-gray-400">2.7%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">유휴 유동성을 항상 유지해야 해서 예치자는 적게 받고 대출자는 많이 낸다. 풀 전체의 평균 금리가 적용된다.</p>
                </div>
                {/* Morpho P2P */}
                <div className="space-y-3">
                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-800 pb-2">Morpho P2P 매칭</p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">예치자 금리</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">5.6%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">대출자 금리</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">6.2%</span>
                    </div>
                    <div className="border-t border-indigo-100 dark:border-indigo-800/50 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">스프레드</span>
                        <span className="font-bold text-indigo-500">0.6%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 leading-relaxed font-medium">P2P 매칭으로 스프레드를 최소화. 예치자는 +0.8%p 더 받고, 대출자는 -1.3%p 덜 낸다.</p>
                </div>
              </div>

              <div className="mt-5 bg-white dark:bg-gray-900 rounded-lg p-4">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">$100,000 예치 시 1년 수익 비교</p>
                <div className="space-y-2">
                  {[
                    { label: 'Aave 예치 수익', value: '$4,800', color: 'text-orange-500', bar: 'w-[64%] bg-orange-200 dark:bg-orange-900/40' },
                    { label: 'Morpho 예치 수익', value: '$5,600', color: 'text-indigo-600 dark:text-indigo-400 font-bold', bar: 'w-[75%] bg-indigo-300 dark:bg-indigo-700' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500 w-36 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className={`h-2 rounded-full ${row.bar}`} />
                      </div>
                      <span className={`w-16 text-right ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-indigo-500 mt-2">Morpho에서 $800 더 수령 (Aave 대비 +16.7%)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">매칭이 안 되면 어떻게 되나?</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                P2P 매칭이 안 된 자금은 자동으로 Aave·Compound 풀로 넘어가 기존 금리를 받는다. 즉 <strong>Morpho는 Aave보다 나쁠 수 없다</strong> — 최소한 Aave와 같고, 매칭되면 더 좋다.
              </p>
            </div>

            {/* S3-B: 기술 심화 */}
            <h2 className="text-3xl font-bold mt-14 mb-6">03-B · 스마트컨트랙트 레벨 해부 — Aave 안에서 무슨 일이 일어나나</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              P2P 매칭이 왜 가능한지 이해하려면 먼저 Aave가 스마트컨트랙트 수준에서 어떻게 작동하는지 알아야 한다. 그 구조를 이해하면 Morpho가 왜 "위에서" 동작하는지, 그리고 왜 금리 스프레드가 줄어드는지가 자연스럽게 보인다.
            </p>

            {/* STEP 1: Aave 예치 내부 */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">STEP 1 — Aave에 예치할 때 스마트컨트랙트에서 일어나는 일</p>
              <div className="space-y-3">
                {[
                  {
                    num: '①',
                    title: 'LendingPool.supply() 호출',
                    desc: '유저가 100 USDC를 Aave에 예치하면 LendingPool 컨트랙트의 supply() 함수가 호출된다. 컨트랙트는 유저 지갑에서 USDC를 가져가고, 그 대신 aUSDC(aToken)를 발행해 유저에게 돌려준다.',
                    tag: 'aToken 발행',
                    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                  },
                  {
                    num: '②',
                    title: 'aToken = "예치 증서 + 이자 자동 복리"',
                    desc: 'aUSDC는 단순한 영수증이 아니다. 시간이 지날수록 잔고가 자동으로 증가한다. 1 aUSDC를 받았어도 1년 후엔 1.048 aUSDC가 된다 (APY 4.8% 가정). 이자를 클레임할 필요 없이 토큰 잔고 자체가 늘어난다.',
                    tag: 'Rebase Token',
                    tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                  },
                  {
                    num: '③',
                    title: '이용률(Utilization Rate)이 금리를 결정한다',
                    desc: 'Aave의 금리는 고정이 아니다. "이용률 = 대출된 금액 ÷ 전체 예치금"에 따라 실시간으로 변한다. 이용률이 80%면 금리가 낮고, 95%에 가까워질수록 금리가 급격히 오른다 (Kink 모델). 대출 수요가 많아질수록 예치자는 더 많이 받고 대출자는 더 많이 낸다.',
                    tag: 'Interest Rate Model',
                    tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
                  },
                  {
                    num: '④',
                    title: '항상 유동성 버퍼를 남겨야 한다',
                    desc: '풀에 있는 USDC 전부를 대출해줄 수 없다. 언제든 예치자가 인출할 수 있어야 하기 때문이다. 보통 풀의 5~20%는 항상 유휴 상태로 남는다. 이 유휴 자금은 이자를 거의 못 받지만, 예치된 전체 금액에 대해 평균 금리가 계산되므로 예치자 수익률이 내려간다. 이것이 스프레드의 핵심 원인이다.',
                    tag: '스프레드 원인',
                    tagColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl p-4">
                    <div className="text-2xl font-black text-gray-300 dark:text-gray-600 w-8 shrink-0 mt-0.5">{item.num}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-bold text-gray-900 dark:text-white text-sm">{item.title}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 이용률-금리 그래프 */}
            <div className="bg-slate-900 rounded-2xl p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-5">Aave 금리 모델 — Kink 구조</p>
              <div className="flex items-end gap-1 h-28 mb-3">
                {[
                  { util: '0%', lend: 5, borrow: 7 },
                  { util: '20%', lend: 8, borrow: 12 },
                  { util: '40%', lend: 14, borrow: 20 },
                  { util: '60%', lend: 22, borrow: 32 },
                  { util: '80%', lend: 34, borrow: 50 },
                  { util: '90%', lend: 50, borrow: 75 },
                  { util: '95%', lend: 65, borrow: 95 },
                  { util: '99%', lend: 80, borrow: 110 },
                ].map((d) => (
                  <div key={d.util} className="flex-1 flex flex-col items-center gap-0.5">
                    <div className="w-full flex gap-0.5 items-end" style={{ height: '90px' }}>
                      <div className="flex-1 bg-blue-500/60 rounded-t" style={{ height: `${d.lend}%` }} title={`예치 ${d.lend}%`} />
                      <div className="flex-1 bg-red-500/60 rounded-t" style={{ height: `${Math.min(d.borrow, 100)}%` }} title={`대출 ${d.borrow}%`} />
                    </div>
                    <span className="text-slate-500 text-[9px]">{d.util}</span>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 text-xs text-slate-400">
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-blue-500/60 rounded-sm inline-block" />예치 금리</span>
                <span className="flex items-center gap-1"><span className="w-3 h-3 bg-red-500/60 rounded-sm inline-block" />대출 금리</span>
                <span className="ml-auto text-slate-500">이용률 80% 이상 → 금리 급등 (Kink 지점)</span>
              </div>
            </div>

            {/* STEP 2: Morpho가 Aave 위에서 하는 일 */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">STEP 2 — Morpho Optimizer가 Aave 컨트랙트 위에서 하는 일</p>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 mb-6">
                <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-2">핵심 트릭: Morpho 컨트랙트 자체가 Aave의 "슈퍼 예치자"가 된다</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  유저가 Morpho에 USDC를 예치하면, Morpho 스마트컨트랙트가 그 돈을 받아 <strong>자신의 이름으로 Aave에 예치</strong>한다.
                  즉, Aave 입장에서는 "Morpho 컨트랙트"라는 하나의 거대한 예치자가 있는 것처럼 보인다.
                  실제 유저들이 누구인지 Aave는 모른다.
                </p>
              </div>

              <div className="space-y-0">
                {[
                  {
                    phase: '예치자가 Morpho에 100 USDC 예치',
                    detail: 'Morpho 컨트랙트가 유저의 USDC를 받아 Aave LendingPool.supply() 를 직접 호출. Morpho 컨트랙트 명의로 aUSDC가 발행됨. 유저는 Morpho 내부 장부에 "100 USDC 예치" 기록.',
                    icon: '💰',
                    color: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800',
                  },
                  {
                    phase: '대출자가 Morpho에서 80 USDC 차용 요청',
                    detail: 'Morpho는 내부 FIFO 큐를 확인. 매칭 가능한 예치자 발견. Aave에서 withdraw()를 호출해 80 USDC를 꺼냄 (aUSDC 80개 소각). 그 80 USDC를 대출자에게 직접 전달. 이 순간 P2P 매칭 성립.',
                    icon: '🔄',
                    color: 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800',
                  },
                  {
                    phase: '담보와 청산은 여전히 Aave가 담당',
                    detail: '대출자가 맡긴 담보(ETH 등)는 Aave 컨트랙트에 lock됨. 건강도(Health Factor) 계산, 청산 트리거, 오라클 가격 피드 — 모두 Aave 인프라를 그대로 사용. Morpho는 보안 레이어를 새로 만들지 않는다.',
                    icon: '🔒',
                    color: 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700',
                  },
                  {
                    phase: '예치자가 인출 요청할 때',
                    detail: '시나리오 A: 다른 예치자로 재매칭 가능 → 새 예치자와 기존 대출자를 연결, A에게 USDC 돌려줌. 시나리오 B: 재매칭 불가 → Morpho가 Aave 풀에서 직접 인출해 A에게 돌려줌. Aave 전체 풀이 유동성 백스탑 역할.',
                    icon: '↩️',
                    color: 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`border rounded-xl p-4 mb-3 ${item.color}`}>
                      <div className="flex items-start gap-3">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-bold text-sm text-gray-900 dark:text-white mb-1">{item.phase}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                    {i < 3 && <div className="text-center text-gray-300 dark:text-gray-700 text-lg -mt-1 mb-1">↓</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 3: 왜 금리가 줄어드나 */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">STEP 3 — 왜 스프레드(금리 차이)가 줄어드나</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <p className="font-bold text-red-700 dark:text-red-400 text-sm mb-3">Aave 스프레드가 큰 이유 (2가지)</p>
                  <div className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                    <div>
                      <span className="font-bold text-red-600">① 유동성 버퍼 비용</span>
                      <p className="mt-1">풀의 10~20%는 항상 유휴 상태. 이 돈은 이자를 벌지 못하지만 전체 예치금으로 계산되어 평균 수익률을 낮춘다. 대출자는 많이 내는데 예치자는 덜 받는 이유.</p>
                    </div>
                    <div>
                      <span className="font-bold text-red-600">② 프로토콜 수수료</span>
                      <p className="mt-1">Aave는 대출 이자의 일부를 프로토콜 DAO 재무로 가져간다. 이 부분이 스프레드에 포함되어 예치자와 대출자 사이의 간극을 더 넓힌다.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4">
                  <p className="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-3">Morpho가 스프레드를 없애는 이유 (2가지)</p>
                  <div className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                    <div>
                      <span className="font-bold text-indigo-600">① 유동성 버퍼 불필요</span>
                      <p className="mt-1">P2P 매칭된 자금은 100% 대출자에게 가고 100% 이자를 받는다. 유휴 자금이 없다. 인출 요청이 와도 Aave 풀 전체가 백스탑 역할을 하므로 Morpho 자체 버퍼가 필요 없다.</p>
                    </div>
                    <div>
                      <span className="font-bold text-indigo-600">② 수수료 0%</span>
                      <p className="mt-1">Morpho Optimizer는 수수료를 떼지 않는다. 스프레드 전체가 예치자·대출자에게 돌아간다. (Morpho Blue는 거버넌스 토큰으로 프로토콜 수익 분배)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* 수식 시각화 */}
              <div className="bg-slate-900 rounded-xl p-5 text-sm font-mono">
                <p className="text-slate-400 text-xs mb-4">// P2P 금리 계산 공식</p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-slate-400 text-xs w-40 shrink-0">Aave 예치 금리</span>
                    <span className="text-blue-400">4.8%</span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-slate-400 text-xs w-40 shrink-0">Aave 대출 금리</span>
                    <span className="text-red-400">7.5%</span>
                  </div>
                  <div className="border-t border-slate-700 pt-3 flex items-center gap-3 flex-wrap">
                    <span className="text-slate-400 text-xs w-40 shrink-0">Morpho P2P 금리</span>
                    <span className="text-indigo-400 font-bold">= (4.8 + 7.5) ÷ 2 = <span className="text-white">6.15%</span></span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-slate-400 text-xs w-40 shrink-0">예치자 수령</span>
                    <span className="text-green-400">6.15% <span className="text-slate-500 text-xs">(Aave 4.8% → +1.35%p)</span></span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-slate-400 text-xs w-40 shrink-0">대출자 납부</span>
                    <span className="text-green-400">6.15% <span className="text-slate-500 text-xs">(Aave 7.5% → -1.35%p)</span></span>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-slate-400 text-xs w-40 shrink-0">Morpho 수수료</span>
                    <span className="text-yellow-400">0%</span>
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
                * 실제 P2P 금리는 Aave 금리 변동에 따라 실시간으로 조정된다. 위 수치는 개념 설명을 위한 예시이며, 실제 적용 금리는 P2P Index Rate로 계산된다.
              </p>
            </div>

            {/* 전체 아키텍처 요약 */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 my-8 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-4">전체 아키텍처 한눈에 보기</p>
              <div className="space-y-2 text-sm">
                {[
                  { layer: '유저 레이어', desc: 'Morpho 컨트랙트에 USDC 예치 / 인출 요청', color: 'bg-blue-800/50 border-blue-700' },
                  { layer: 'Morpho 레이어', desc: 'FIFO 큐 관리 · P2P 매칭 실행 · 포지션 위임 · 재매칭', color: 'bg-indigo-800/50 border-indigo-700' },
                  { layer: 'Aave 레이어', desc: 'aToken 발행/소각 · 담보 관리 · 청산 · 금리 계산 · 유동성 백스탑', color: 'bg-slate-700/50 border-slate-600' },
                  { layer: '블록체인', desc: 'Ethereum · Base · Polygon — 모든 컨트랙트가 온체인에서 투명하게 실행', color: 'bg-slate-800/50 border-slate-700' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-0 flex-col">
                    <div className={`border rounded-lg px-4 py-2 ${item.color}`}>
                      <span className="text-xs font-bold text-slate-300 mr-3">{item.layer}</span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
                    </div>
                    {i < 3 && <div className="text-slate-600 text-center text-sm">↓</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* S4 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Morpho Blue 구조 — 4가지 요소로 마켓 정의</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Morpho Blue는 2024년 출시된 완전 독립형 대출 프리미티브다. Aave에 의존하지 않고, 누구나 허가 없이 새로운 대출 마켓을 만들 수 있다. 마켓을 정의하는 요소는 딱 4가지다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  num: '01',
                  title: '담보 토큰 (Collateral Token)',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  numColor: 'text-blue-500',
                  desc: '대출을 받기 위해 맡기는 자산. ETH, wBTC, wstETH, USDC 등 다양한 토큰이 담보로 사용될 수 있다. Morpho Blue에서는 어떤 토큰이든 담보로 쓸 수 있는 마켓을 만들 수 있다.',
                  example: '예: wstETH를 담보로 USDC 대출',
                },
                {
                  num: '02',
                  title: '대출 토큰 (Loan Token)',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  numColor: 'text-indigo-500',
                  desc: '대출로 받는 자산. USDC, USDT, DAI, WETH 등. 예치자는 이 토큰을 공급해 이자를 받고, 대출자는 이 토큰을 빌려 사용한다.',
                  example: '예: USDC 대출 마켓에 USDC 예치',
                },
                {
                  num: '03',
                  title: '오라클 (Oracle)',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  numColor: 'text-violet-500',
                  desc: '담보 자산의 가격을 알려주는 외부 데이터 소스. Chainlink, Pyth, Uniswap TWAP 등. 오라클이 가격을 잘못 전달하면 청산 메커니즘이 오작동할 수 있다.',
                  example: '예: Chainlink ETH/USD 피드',
                },
                {
                  num: '04',
                  title: 'LLTV (청산 LTV)',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  numColor: 'text-teal-500',
                  desc: 'Liquidation Loan-to-Value. 담보 대비 얼마까지 빌릴 수 있는지의 비율. 예: LLTV 80%면 $100 담보로 $80까지 대출 가능. 이 비율 초과 시 청산 발동.',
                  example: '예: ETH/USDC LLTV 86%',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`text-3xl font-black ${item.numColor} leading-none`}>{item.num}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                  <p className={`text-xs font-mono font-semibold ${item.numColor}`}>{item.example}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">허가 없는 마켓 생성의 의미</p>
              <div className="space-y-3">
                {[
                  { icon: '🔓', title: '누구나 마켓 생성 가능', desc: 'Aave처럼 거버넌스 투표를 기다릴 필요 없다. 새 토큰이 나오면 즉시 Morpho Blue 마켓을 열 수 있다.' },
                  { icon: '🛡️', title: '리스크 분리', desc: '마켓마다 독립적으로 운영된다. 하나의 마켓에서 문제가 생겨도 다른 마켓은 영향받지 않는다.' },
                  { icon: '📊', title: '큐레이터가 리스크 관리', desc: '수많은 마켓 중 어디에 예치할지는 MetaMorpho 큐레이터가 대신 선택해준다. 사용자는 볼트에만 예치하면 된다.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* S5 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · MetaMorpho 볼트 — 자동 배분의 마법</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Morpho Blue가 레고 블록이라면, MetaMorpho는 그 블록들로 만들어진 완성품이다. 전문 큐레이터들이 수십 개의 Blue 마켓 중 최적의 조합을 골라 볼트를 만들고, 사용자는 그냥 그 볼트에 USDC를 넣으면 된다.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">MetaMorpho 작동 방식 — 단계별 흐름</p>
              <div className="space-y-0">
                {[
                  { step: '1', title: '큐레이터가 볼트 생성', desc: 'Gauntlet, Block Analitica 같은 전문 리스크 관리 팀이 Morpho Blue 마켓들의 조합을 설계한다. 예: "USDC 스테이블 볼트" = wstETH·ETH·wBTC 담보 마켓 분산.', color: 'bg-indigo-600' },
                  { step: '2', title: '사용자가 볼트에 예치', desc: '사용자는 어느 마켓에 갈지 신경 쓸 필요 없다. USDC를 볼트 주소에 전송하면 끝. MetaMorpho 토큰(예: bbUSTC)을 수령.', color: 'bg-blue-600' },
                  { step: '3', title: '자동 배분 & 리밸런싱', desc: '큐레이터 알고리즘이 시장 상황에 따라 자금을 최적 마켓에 배분한다. 금리가 더 좋은 마켓이 생기면 자동으로 이동.', color: 'bg-violet-600' },
                  { step: '4', title: '이자 자동 누적', desc: '각 마켓에서 발생한 대출 이자가 볼트에 쌓인다. 보유한 MetaMorpho 토큰의 가치가 시간이 지나면서 오른다.', color: 'bg-teal-600' },
                  { step: '5', title: '즉시 출금 가능', desc: '볼트 유동성이 충분하면 언제든 즉시 USDC로 출금 가능. 이것이 walits에서 1~7일 단기 유휴 자금에 쓰는 핵심 이유다.', color: 'bg-emerald-600' },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-5 flex-1">
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                { name: 'Gauntlet', role: '퀀트 리스크 전문', desc: 'Aave·Compound의 공식 리스크 파라미터 관리사. DeFi에서 가장 신뢰받는 리스크 큐레이터 중 하나.', color: 'border-blue-200 dark:border-blue-800' },
                { name: 'Block Analitica', role: '온체인 데이터 분석', desc: 'MakerDAO(현 Sky) 리스크 팀 경력. 데이터 기반 마켓 배분 전략으로 안정적인 수익률 유지.', color: 'border-indigo-200 dark:border-indigo-800' },
                { name: 'Re7 Labs', role: '특화 마켓 전문', desc: '고수익 특화 마켓에 집중하는 큐레이터. 리스크는 높지만 수익률도 높은 볼트 운영.', color: 'border-violet-200 dark:border-violet-800' },
              ].map((c, i) => (
                <div key={i} className={`border rounded-xl p-4 ${c.color}`}>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{c.name}</p>
                  <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mb-2">{c.role}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* S6 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · walits에서의 Morpho — 슬리핑 머니를 깨우다</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              walits의 핵심 철학은 <strong>유휴 자금(Idle Time)을 없애는 것</strong>이다. 결제 대기 중인 자금, 다음 투자를 기다리는 현금, 잠깐 파킹된 스테이블코인 — 이 모든 슬리핑 머니가 Morpho에서 일하게 된다.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">walits × Morpho 시나리오</p>
              <div className="space-y-4">
                {[
                  {
                    time: '유휴 1~7일',
                    title: '결제 대기 자금',
                    desc: '다음 결제까지 1~7일 남은 USDC. Morpho MetaMorpho 볼트에 예치해 5.6% APY 수령. 즉시 출금 가능하므로 결제일에 바로 인출.',
                    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
                    badgeText: '핵심 사용처',
                  },
                  {
                    time: '투자 비율 40%',
                    title: '애플 스타일 배분',
                    desc: '애플이 현금성 자산의 40%를 단기채권에 운용하듯, walits는 유휴 자금의 40%를 Morpho에 자동 배분. 잔여 60%는 즉시 결제 가능 상태로 유지.',
                    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
                    badgeText: '배분 전략',
                  },
                  {
                    time: '연간 누적',
                    title: '슬리핑 머니 후보 1순위',
                    desc: '$10,000의 유휴 자금이 평균 3일 대기한다면? 연간 약 460일치 유휴 시간 × 5.6% APY → 연간 $46 자동 수익. 아무것도 안 해도.',
                    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
                    badgeText: '수익 예시',
                  },
                ].map((s, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.badge}`}>{s.badgeText}</span>
                      <span className="text-xs text-gray-400 font-mono">{s.time}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{s.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6">
              <p className="text-xs font-bold text-indigo-400 mb-3">walits 에이전트 + Morpho 자동화 흐름</p>
              <div className="space-y-1 text-xs font-mono">
                <p className="text-white">USDC $10,000 수령 (결제 D-5)</p>
                <p className="text-gray-400">  → 에이전트: 결제 일정 확인</p>
                <p className="text-gray-400">  → 5일 여유 확인 → 40% Morpho 예치</p>
                <p className="text-indigo-300">  → $4,000 × 5.6% / 365 × 5 = $3.07 자동 적립</p>
                <p className="text-white mt-2">결제일 D-1</p>
                <p className="text-gray-400">  → 에이전트: Morpho 즉시 출금</p>
                <p className="text-emerald-300">  → $4,003.07 → 결제 자금과 합산</p>
                <p className="text-gray-500 mt-2">// 사용자 개입 없음. 슬리핑 머니가 자동으로 일함</p>
              </div>
            </div>

            {/* S7 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Morpho vs Aave vs Compound 비교표</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">항목</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-indigo-300">Morpho</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-orange-300">Aave</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-blue-300">Compound</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['TVL', '$3B+', '$15B+', '$3B+'],
                    ['예치자 APY (USDC)', '5.6%', '4.8%', '4.2%'],
                    ['대출자 APY (USDC)', '6.2%', '7.5%', '7.0%'],
                    ['즉시 출금', '가능 (볼트 유동성 한도)', '가능', '가능'],
                    ['허가 없는 마켓 생성', '가능 (Blue)', '불가 (거버넌스 필요)', '불가'],
                    ['감사 완료', '완료', '완료', '완료'],
                    ['지원 체인', 'ETH · Base · Polygon', 'ETH · L2 다수', 'ETH · Base'],
                    ['P2P 매칭', '핵심 기능', '없음', '없음'],
                    ['리스크 분리', '마켓별 완전 분리', '하나의 풀', '하나의 풀'],
                    ['큐레이터 시스템', 'MetaMorpho', '없음', '없음'],
                  ].map(([label, morpho, aave, compound], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-2.5 font-semibold text-xs text-gray-700 dark:text-gray-300">{label}</td>
                      <td className="px-4 py-2.5 text-xs text-indigo-600 dark:text-indigo-400 font-medium">{morpho}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{aave}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{compound}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-1">핵심 포인트</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Morpho의 TVL이 Aave보다 작은 건 단점이 아니다. 허가 없는 마켓이 수천 개 분산되어 있기 때문이다. MetaMorpho 볼트 기준으로는 <strong>수십억 달러가 이미 운용 중</strong>이며, Aave보다 좋은 금리를 제공한다는 점이 핵심이다.
              </p>
            </div>

            {/* S8 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · 리스크 — 알고 투자하자</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: '오라클 리스크',
                  level: '중요',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'Morpho Blue 마켓은 외부 오라클에 의존한다. Chainlink 등이 잘못된 가격을 전달하면 정상 포지션이 청산되거나 부실 포지션이 청산되지 않을 수 있다. 신뢰할 수 있는 오라클을 사용하는 큐레이터 볼트 선택이 중요.',
                },
                {
                  title: '청산 메커니즘 리스크',
                  level: '구조적',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: '담보 가격이 빠르게 하락하면 청산인(Liquidator)이 충분히 빠르게 반응하지 못할 수 있다. 특히 유동성이 낮은 담보 토큰을 사용하는 마켓에서 더 위험하다. MetaMorpho 큐레이터가 이런 마켓을 피하도록 설계되어 있다.',
                },
                {
                  title: '큐레이터 리스크',
                  level: '주의',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: '사용자가 직접 마켓을 선택하지 않고 큐레이터에게 위임하는 구조이므로, 큐레이터의 판단 실수가 손실로 이어질 수 있다. Gauntlet·Block Analitica처럼 검증된 큐레이터의 볼트를 선택하는 게 중요하다.',
                },
                {
                  title: '스마트컨트랙트 리스크',
                  level: '낮음 (감사 완료)',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: 'Morpho Blue는 의도적으로 코드베이스를 최소화해 감사 용이성을 높였다. 복수의 독립 감사를 완료했으며 버그 바운티 프로그램도 운영 중이다. 그러나 모든 스마트컨트랙트에는 이론적 취약점이 존재한다.',
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

            {/* 결론 */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">Aave를 이기려는 게 아니라, Aave 위에서 더 잘하는 프로토콜</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Morpho는 Aave의 경쟁자가 아니다. Aave의 유동성과 보안을 그대로 쓰면서, 그 위에 P2P 매칭 레이어를 올려 양쪽 모두에게 더 나은 금리를 제공한다. Aave보다 나쁠 수 없는 구조 위에서, 매칭이 되면 더 좋아진다.
                </p>
                <p>
                  Morpho Blue와 MetaMorpho는 더 나아가 <strong className="text-white">허가 없는 마켓 창조와 전문 큐레이션</strong>을 결합했다. 수천 개의 다양한 담보 조합이 허용되지만, 사용자는 그냥 검증된 볼트에 예치하기만 하면 된다.
                </p>
                <p>
                  <strong className="text-white">walits에서 Morpho는 슬리핑 머니 솔루션의 1순위 후보</strong>다. 즉시 출금 가능 + 5.6% APY + 검증된 보안이라는 세 가지 조건을 동시에 만족하는 프로토콜은 현재 DeFi에서 드물다.
                </p>
                <p className="text-gray-400 text-xs">
                  * APY는 시장 상황에 따라 변동됩니다. 예시 수치는 특정 시점 기준이며, 실제 투자 전 공식 문서와 감사 보고서를 직접 확인하세요.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 9 — Morpho Finance: The Protocol That Outperforms Aave on Aave's Own Infrastructure</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">P2P Matching · Morpho Blue · MetaMorpho · Instant Withdrawal at 5.6% APY</p>
            <p className="text-gray-400 text-xs font-mono mb-10">April 6, 2026 · 20 min read</p>

            {/* Stats EN */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 my-8">
              {[
                { label: 'Morpho TVL', value: '$3B+', sub: 'As of 2025' },
                { label: 'Launched', value: '2022', sub: 'Optimizer debut' },
                { label: 'Supported Chains', value: '3+', sub: 'Ethereum · Base · Polygon' },
                { label: 'Audits', value: 'Done', sub: 'Multiple independent audits' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S1 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · What Is Morpho? — Solving Aave's Rate Inefficiency</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Aave and Compound are the titans of DeFi lending. Billions of dollars are deposited, security is battle-tested. But these two protocols share a structural problem: <strong>lenders receive low rates, borrowers pay high rates,</strong> and the spread in between is the system's profit.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Why does this inefficiency exist? The pool model. Funds deposited in Aave collect in one big pool. Since borrowers can arrive at any time, a certain percentage of liquidity must always sit idle. That idle capital suppresses yield. <strong>Morpho fills this gap with P2P matching</strong> — connecting lenders and borrowers directly so both sides get a better rate.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3">Morpho Finance — One-Line Definition</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                A <strong>lending optimization + permissionless market creation protocol</strong> that builds on Aave and Compound's liquidity pools while using P2P matching to give both lenders and borrowers better interest rates.
              </p>
            </div>

            {/* S2 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Morpho's Evolution — A Three-Stage Timeline</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Morpho started as a simple rate optimizer and evolved into a full DeFi lending layer. Three major milestones between 2022 and 2024 define this journey.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  year: '2022',
                  title: 'Morpho Optimizer',
                  badge: 'bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300',
                  badgeText: 'Stage 1 · The Beginning',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  dot: 'bg-blue-500',
                  points: [
                    'P2P matching layer added on top of Aave and Compound',
                    'Unmatched funds continue earning in existing pools as a fallback',
                    'Multiple security audits completed; TVL grew rapidly',
                    'Same UX as Aave — users noticed better rates, nothing else changed',
                  ],
                },
                {
                  year: '2024',
                  title: 'Morpho Blue',
                  badge: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300',
                  badgeText: 'Stage 2 · Core Innovation',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  dot: 'bg-indigo-500',
                  points: [
                    'Fully independent lending primitive — no longer relies on Aave',
                    'Permissionless market creation — anyone can open a new market',
                    'Markets defined by just 4 parameters: collateral · loan token · oracle · LLTV',
                    'Intentionally minimal codebase — maximizes auditability and security',
                  ],
                },
                {
                  year: '2024~',
                  title: 'MetaMorpho Vaults',
                  badge: 'bg-violet-100 text-violet-800 dark:bg-violet-900/40 dark:text-violet-300',
                  badgeText: 'Stage 3 · Ecosystem Expansion',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  dot: 'bg-violet-500',
                  points: [
                    'Curators (Gauntlet, Block Analitica, etc.) auto-allocate across Blue markets',
                    'Users just deposit into a vault — no market selection needed',
                    'Vault diversity by risk profile: conservative, yield-focused, specialized',
                    'Aave-like UX combined with Morpho Blue\'s efficiency',
                  ],
                },
              ].map((phase, i) => (
                <div key={i} className={`border rounded-xl overflow-hidden ${phase.color}`}>
                  <div className="px-5 py-4">
                    <div className="flex items-center gap-3 mb-3">
                      <span className={`w-3 h-3 rounded-full flex-shrink-0 ${phase.dot}`} />
                      <span className="text-lg font-bold text-gray-900 dark:text-white">{phase.year} · {phase.title}</span>
                      <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ml-auto ${phase.badge}`}>{phase.badgeText}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {phase.points.map((pt, j) => (
                        <li key={j} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                          <span className="text-indigo-500 flex-shrink-0 mt-0.5">▸</span>{pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            {/* S3 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · The Core Innovation: P2P Matching in Numbers</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Let's put the P2P advantage in concrete numbers. When depositing or borrowing USDC, here's exactly what the rate difference looks like between Aave and Morpho.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Pool Model (Aave) vs Morpho P2P Matching</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-gray-700 dark:text-gray-300 border-b border-gray-200 dark:border-gray-700 pb-2">Aave Pool Model</p>
                  <div className="bg-white dark:bg-gray-900 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Lender APY</span>
                      <span className="font-bold text-orange-500 text-lg">4.8%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Borrower APY</span>
                      <span className="font-bold text-red-500 text-lg">7.5%</span>
                    </div>
                    <div className="border-t border-gray-100 dark:border-gray-800 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Spread (protocol revenue)</span>
                        <span className="font-bold text-gray-600 dark:text-gray-400">2.7%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-500 leading-relaxed">Idle liquidity must be maintained at all times, so lenders earn less and borrowers pay more. Everyone gets the pool's average rate.</p>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold text-indigo-600 dark:text-indigo-400 border-b border-indigo-200 dark:border-indigo-800 pb-2">Morpho P2P Matching</p>
                  <div className="bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4 space-y-3">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Lender APY</span>
                      <span className="font-bold text-indigo-600 dark:text-indigo-400 text-lg">5.6%</span>
                    </div>
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-gray-500">Borrower APY</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400 text-lg">6.2%</span>
                    </div>
                    <div className="border-t border-indigo-100 dark:border-indigo-800/50 pt-2">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-400">Spread</span>
                        <span className="font-bold text-indigo-500">0.6%</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400 leading-relaxed font-medium">P2P matching minimizes spread. Lenders earn +0.8pp more; borrowers pay -1.3pp less.</p>
                </div>
              </div>

              <div className="mt-5 bg-white dark:bg-gray-900 rounded-lg p-4">
                <p className="text-xs font-bold text-gray-700 dark:text-gray-300 mb-3">Annual yield on $100,000 deposit</p>
                <div className="space-y-2">
                  {[
                    { label: 'Aave deposit yield', value: '$4,800', color: 'text-orange-500', bar: 'w-[64%] bg-orange-200 dark:bg-orange-900/40' },
                    { label: 'Morpho deposit yield', value: '$5,600', color: 'text-indigo-600 dark:text-indigo-400 font-bold', bar: 'w-[75%] bg-indigo-300 dark:bg-indigo-700' },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center gap-3 text-xs">
                      <span className="text-gray-500 w-36 flex-shrink-0">{row.label}</span>
                      <div className="flex-1 bg-gray-100 dark:bg-gray-800 rounded-full h-2">
                        <div className={`h-2 rounded-full ${row.bar}`} />
                      </div>
                      <span className={`w-16 text-right ${row.color}`}>{row.value}</span>
                    </div>
                  ))}
                </div>
                <p className="text-xs text-indigo-500 mt-2">$800 more with Morpho (+16.7% over Aave)</p>
              </div>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-2">What happens when there's no P2P match?</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Unmatched funds automatically flow into Aave or Compound pools, earning the baseline rate. <strong>Morpho can never be worse than Aave</strong> — at minimum you get Aave rates, and when matched you get better.
              </p>
            </div>

            {/* S3-B EN */}
            <h2 className="text-3xl font-bold mt-14 mb-6">03-B · Smart Contract Deep Dive — What Happens Inside Aave, and How Morpho Sits on Top</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              To truly understand why P2P matching is possible, you need to see what Aave does at the smart contract level first. Once that structure is clear, it becomes obvious why Morpho can operate "on top" of it — and why the rate spread shrinks.
            </p>

            {/* STEP 1 EN */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">STEP 1 — What happens inside Aave's smart contracts when you deposit</p>
              <div className="space-y-3">
                {[
                  {
                    num: '①',
                    title: 'LendingPool.supply() is called',
                    desc: 'When you deposit 100 USDC into Aave, the LendingPool contract\'s supply() function is invoked. It pulls USDC from your wallet and mints aUSDC (aToken) back to you in return.',
                    tag: 'aToken Minted',
                    tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                  },
                  {
                    num: '②',
                    title: 'aToken = "deposit receipt + auto-compounding interest"',
                    desc: 'aUSDC is not a simple receipt. Its balance grows automatically over time. If you received 1 aUSDC today, in a year it becomes 1.048 aUSDC (at 4.8% APY). No manual claim needed — the token balance itself increases.',
                    tag: 'Rebase Token',
                    tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                  },
                  {
                    num: '③',
                    title: 'Utilization Rate determines interest rates in real time',
                    desc: 'Aave\'s rates aren\'t fixed. They update continuously based on Utilization Rate = Amount Borrowed ÷ Total Deposited. At 80% utilization rates are moderate; approaching 95% they spike sharply (the Kink model). Higher borrow demand = more for depositors, more cost for borrowers.',
                    tag: 'Interest Rate Model',
                    tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
                  },
                  {
                    num: '④',
                    title: 'A liquidity buffer must always be kept idle',
                    desc: 'Not all pooled USDC can be lent out — depositors must be able to withdraw at any time. Typically 5–20% sits idle at all times. This idle capital earns almost nothing, but it\'s included in the total deposit base when calculating average APY — this is the core cause of the spread.',
                    tag: 'Spread Root Cause',
                    tagColor: 'bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300',
                  },
                ].map((item) => (
                  <div key={item.num} className="flex gap-4 bg-gray-50 dark:bg-gray-800/60 rounded-xl p-4">
                    <div className="text-2xl font-black text-gray-300 dark:text-gray-600 w-8 shrink-0 mt-0.5">{item.num}</div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="font-bold text-gray-900 dark:text-white text-sm">{item.title}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${item.tagColor}`}>{item.tag}</span>
                      </div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 2 EN */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">STEP 2 — What Morpho Optimizer does on top of Aave's contracts</p>

              <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 mb-6">
                <p className="text-sm font-bold text-indigo-700 dark:text-indigo-300 mb-2">The core trick: Morpho's contract becomes Aave's "super depositor"</p>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  When a user deposits USDC into Morpho, the Morpho smart contract takes that USDC and <strong>deposits it into Aave under its own name</strong>. From Aave's perspective, there's just one giant depositor called "the Morpho contract." Aave has no idea who the individual users are.
                </p>
              </div>

              <div className="space-y-0">
                {[
                  {
                    phase: 'Depositor puts 100 USDC into Morpho',
                    detail: 'The Morpho contract takes the user\'s USDC and calls Aave LendingPool.supply() directly — in its own name. aUSDC is minted to the Morpho contract. The user is recorded in Morpho\'s internal ledger as "100 USDC deposited."',
                    icon: '💰',
                    color: 'bg-blue-50 dark:bg-blue-900/10 border-blue-200 dark:border-blue-800',
                  },
                  {
                    phase: 'Borrower requests 80 USDC from Morpho',
                    detail: 'Morpho checks its internal FIFO queue, finds a matchable depositor. Calls Aave withdraw() to pull out 80 USDC (burning 80 aUSDC). Delivers that 80 USDC directly to the borrower. P2P match is now live.',
                    icon: '🔄',
                    color: 'bg-indigo-50 dark:bg-indigo-900/10 border-indigo-200 dark:border-indigo-800',
                  },
                  {
                    phase: 'Collateral and liquidations are still handled by Aave',
                    detail: 'The borrower\'s collateral (ETH, etc.) remains locked in Aave\'s contracts. Health Factor calculation, liquidation triggers, oracle price feeds — all run on Aave\'s infrastructure. Morpho doesn\'t rebuild any of this security layer.',
                    icon: '🔒',
                    color: 'bg-slate-50 dark:bg-slate-800/50 border-slate-200 dark:border-slate-700',
                  },
                  {
                    phase: 'When a depositor requests withdrawal',
                    detail: 'Scenario A: Another depositor available → re-match them with the existing borrower, return USDC to withdrawing user. Scenario B: No re-match available → Morpho pulls directly from Aave\'s pool to cover the withdrawal. Aave\'s entire pool acts as the liquidity backstop.',
                    icon: '↩️',
                    color: 'bg-emerald-50 dark:bg-emerald-900/10 border-emerald-200 dark:border-emerald-800',
                  },
                ].map((item, i) => (
                  <div key={i} className="relative">
                    <div className={`border rounded-xl p-4 mb-3 ${item.color}`}>
                      <div className="flex items-start gap-3">
                        <span className="text-xl shrink-0">{item.icon}</span>
                        <div>
                          <p className="font-bold text-sm text-gray-900 dark:text-white mb-1">{item.phase}</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    </div>
                    {i < 3 && <div className="text-center text-gray-300 dark:text-gray-700 text-lg -mt-1 mb-1">↓</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* STEP 3 EN */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">STEP 3 — Why the spread (rate gap) disappears</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div className="bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800 rounded-xl p-4">
                  <p className="font-bold text-red-700 dark:text-red-400 text-sm mb-3">Why Aave's spread is large (2 reasons)</p>
                  <div className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                    <div>
                      <span className="font-bold text-red-600">① Liquidity buffer cost</span>
                      <p className="mt-1">10–20% of the pool sits idle at all times. This capital earns almost nothing but is included in the deposit base, dragging down the average APY. Borrowers pay a lot; depositors receive less.</p>
                    </div>
                    <div>
                      <span className="font-bold text-red-600">② Protocol fees</span>
                      <p className="mt-1">Aave takes a portion of borrow interest into its DAO treasury. This widens the gap between what borrowers pay and what depositors receive.</p>
                    </div>
                  </div>
                </div>
                <div className="bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4">
                  <p className="font-bold text-indigo-700 dark:text-indigo-400 text-sm mb-3">Why Morpho eliminates the spread (2 reasons)</p>
                  <div className="space-y-3 text-xs text-gray-700 dark:text-gray-300">
                    <div>
                      <span className="font-bold text-indigo-600">① No liquidity buffer needed</span>
                      <p className="mt-1">P2P-matched funds are 100% deployed and 100% earning. No idle capital. When withdrawals come in, Aave's entire pool acts as the backstop — so Morpho doesn't need its own buffer.</p>
                    </div>
                    <div>
                      <span className="font-bold text-indigo-600">② 0% protocol fee</span>
                      <p className="mt-1">Morpho Optimizer charges no fees. The entire spread is returned to depositors and borrowers. (Morpho Blue distributes protocol revenue via governance tokens.)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 rounded-xl p-5 text-sm font-mono">
                <p className="text-slate-400 text-xs mb-4">// P2P rate calculation</p>
                <div className="space-y-3">
                  {[
                    { label: 'Aave supply APY', val: '4.8%', color: 'text-blue-400' },
                    { label: 'Aave borrow APY', val: '7.5%', color: 'text-red-400' },
                  ].map((r) => (
                    <div key={r.label} className="flex items-center gap-3">
                      <span className="text-slate-400 text-xs w-44 shrink-0">{r.label}</span>
                      <span className={r.color}>{r.val}</span>
                    </div>
                  ))}
                  <div className="border-t border-slate-700 pt-3 space-y-3">
                    {[
                      { label: 'Morpho P2P rate', val: '= (4.8 + 7.5) ÷ 2 = 6.15%', color: 'text-indigo-400' },
                      { label: 'Depositor receives', val: '6.15%  (+1.35%p vs Aave)', color: 'text-green-400' },
                      { label: 'Borrower pays', val: '6.15%  (−1.35%p vs Aave)', color: 'text-green-400' },
                      { label: 'Morpho fee', val: '0%', color: 'text-yellow-400' },
                    ].map((r) => (
                      <div key={r.label} className="flex items-center gap-3">
                        <span className="text-slate-400 text-xs w-44 shrink-0">{r.label}</span>
                        <span className={`${r.color} font-bold`}>{r.val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-3 leading-relaxed">
                * Actual P2P rates adjust in real time with Aave rate movements. The figures above are illustrative; actual rates are calculated via Morpho's P2P Index Rate mechanism.
              </p>
            </div>

            {/* Architecture summary EN */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-2xl p-6 my-8 text-white">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-4">Full architecture at a glance</p>
              <div className="space-y-2 text-sm">
                {[
                  { layer: 'User Layer', desc: 'Deposit / withdraw USDC via Morpho contract', color: 'bg-blue-800/50 border-blue-700' },
                  { layer: 'Morpho Layer', desc: 'FIFO queue · P2P matching · position delegation · re-matching', color: 'bg-indigo-800/50 border-indigo-700' },
                  { layer: 'Aave Layer', desc: 'aToken mint/burn · collateral · liquidation · rate model · liquidity backstop', color: 'bg-slate-700/50 border-slate-600' },
                  { layer: 'Blockchain', desc: 'Ethereum · Base · Polygon — all contracts execute transparently onchain', color: 'bg-slate-800/50 border-slate-700' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-0 flex-col">
                    <div className={`border rounded-lg px-4 py-2 ${item.color}`}>
                      <span className="text-xs font-bold text-slate-300 mr-3">{item.layer}</span>
                      <span className="text-xs text-slate-400">{item.desc}</span>
                    </div>
                    {i < 3 && <div className="text-slate-600 text-center text-sm">↓</div>}
                  </div>
                ))}
              </div>
            </div>

            {/* S4 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · Morpho Blue's Architecture — Four Parameters Define a Market</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Morpho Blue, launched in 2024, is a fully standalone lending primitive. Independent of Aave, anyone can create a new lending market without permission. A market is defined by exactly four parameters.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
              {[
                {
                  num: '01',
                  title: 'Collateral Token',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                  numColor: 'text-blue-500',
                  desc: 'The asset posted to secure a loan. ETH, wBTC, wstETH, USDC and many others can serve as collateral. In Morpho Blue, any token can be used as collateral by creating the appropriate market.',
                  example: 'e.g. wstETH collateral to borrow USDC',
                },
                {
                  num: '02',
                  title: 'Loan Token',
                  color: 'border-indigo-200 dark:border-indigo-800 bg-indigo-50 dark:bg-indigo-900/10',
                  numColor: 'text-indigo-500',
                  desc: 'The asset borrowed. USDC, USDT, DAI, WETH, etc. Lenders supply this token to earn interest; borrowers receive it and pay interest.',
                  example: 'e.g. deposit USDC into a USDC loan market',
                },
                {
                  num: '03',
                  title: 'Oracle',
                  color: 'border-violet-200 dark:border-violet-800 bg-violet-50 dark:bg-violet-900/10',
                  numColor: 'text-violet-500',
                  desc: 'External data source reporting collateral prices. Chainlink, Pyth, Uniswap TWAP, etc. Incorrect price delivery can cause the liquidation mechanism to malfunction — a key risk factor.',
                  example: 'e.g. Chainlink ETH/USD price feed',
                },
                {
                  num: '04',
                  title: 'LLTV (Liquidation LTV)',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                  numColor: 'text-teal-500',
                  desc: 'Liquidation Loan-to-Value — the maximum borrowing ratio against collateral. At LLTV 80%, $100 collateral allows up to $80 in loans. Exceeding this ratio triggers liquidation.',
                  example: 'e.g. ETH/USDC LLTV 86%',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`text-3xl font-black ${item.numColor} leading-none`}>{item.num}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white leading-snug">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed mb-2">{item.desc}</p>
                  <p className={`text-xs font-mono font-semibold ${item.numColor}`}>{item.example}</p>
                </div>
              ))}
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">What Permissionless Market Creation Means</p>
              <div className="space-y-3">
                {[
                  { icon: '🔓', title: 'Anyone Can Create a Market', desc: 'No need to wait for a governance vote like with Aave. The moment a new token launches, a Morpho Blue market can be opened.' },
                  { icon: '🛡️', title: 'Risk Isolation', desc: 'Each market operates independently. A problem in one market does not affect others.' },
                  { icon: '📊', title: 'Curators Handle Risk', desc: 'Among thousands of markets, MetaMorpho curators select where to allocate. Users just deposit into a vault.' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-3 items-start">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <p className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* S5 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · MetaMorpho Vaults — The Magic of Auto-Allocation</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If Morpho Blue is a set of Lego bricks, MetaMorpho is the finished set. Professional curators select the best combination from dozens of Blue markets and build vaults — users simply deposit USDC and the curator does the rest.
            </p>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">How MetaMorpho Works — Step by Step</p>
              <div className="space-y-0">
                {[
                  { step: '1', title: 'Curator creates a vault', desc: 'Specialist risk teams like Gauntlet and Block Analitica design a combination of Morpho Blue markets. Example: "USDC Stable Vault" = allocation across wstETH, ETH, and wBTC collateral markets.', color: 'bg-indigo-600' },
                  { step: '2', title: 'User deposits into vault', desc: 'No need to think about which market to use. Send USDC to the vault address — done. Receive a MetaMorpho token (e.g. bbUSDC) representing your position.', color: 'bg-blue-600' },
                  { step: '3', title: 'Auto-allocation and rebalancing', desc: 'The curator algorithm continuously allocates capital to the optimal markets based on current conditions. When a better-yielding market appears, funds move automatically.', color: 'bg-violet-600' },
                  { step: '4', title: 'Interest accrues automatically', desc: 'Lending interest from each market accumulates in the vault. The value of your MetaMorpho tokens rises over time — no claiming needed.', color: 'bg-teal-600' },
                  { step: '5', title: 'Instant withdrawal available', desc: 'As long as vault liquidity is sufficient, withdraw to USDC at any time instantly. This is the key reason walits uses Morpho for 1–7 day idle cash management.', color: 'bg-emerald-600' },
                ].map((s, i, arr) => (
                  <div key={i} className="flex gap-4 items-stretch">
                    <div className="flex flex-col items-center">
                      <span className={`w-8 h-8 rounded-full ${s.color} text-white text-xs font-bold flex items-center justify-center flex-shrink-0`}>{s.step}</span>
                      {i < arr.length - 1 && <div className="w-0.5 bg-gray-200 dark:bg-gray-700 flex-1 my-1" />}
                    </div>
                    <div className="pb-5 flex-1">
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-1">{s.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                { name: 'Gauntlet', role: 'Quant Risk Specialists', desc: 'Official risk parameter managers for Aave and Compound. One of the most trusted risk curators in DeFi with a long proven track record.', color: 'border-blue-200 dark:border-blue-800' },
                { name: 'Block Analitica', role: 'Onchain Data Analytics', desc: 'Former MakerDAO (now Sky) risk team background. Maintains stable yields through data-driven market allocation strategies.', color: 'border-indigo-200 dark:border-indigo-800' },
                { name: 'Re7 Labs', role: 'Specialized Market Focus', desc: 'Curator focused on higher-yield niche markets. Operates vaults with higher risk and higher return profiles.', color: 'border-violet-200 dark:border-violet-800' },
              ].map((c, i) => (
                <div key={i} className={`border rounded-xl p-4 ${c.color}`}>
                  <p className="text-sm font-bold text-gray-900 dark:text-white">{c.name}</p>
                  <p className="text-xs text-indigo-500 dark:text-indigo-400 font-medium mb-2">{c.role}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>

            {/* S6 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Morpho in walits — Waking Up Sleeping Money</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              walits' core philosophy is to <strong>eliminate idle time</strong>. Cash waiting for a payment, capital parked between investments, stablecoins sitting in limbo — all of this sleeping money gets put to work through Morpho.
            </p>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-4">walits × Morpho Scenarios</p>
              <div className="space-y-4">
                {[
                  {
                    time: 'Idle 1–7 days',
                    title: 'Payment Float',
                    desc: 'USDC with 1–7 days until its next payment. Deposit into a Morpho MetaMorpho vault to earn 5.6% APY. Instant withdrawal means funds are ready the moment payment is due.',
                    badge: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
                    badgeText: 'Primary Use Case',
                  },
                  {
                    time: '40% Allocation',
                    title: 'Apple-Style Treasury',
                    desc: 'Just as Apple runs 40% of its cash in short-term instruments, walits auto-allocates 40% of idle funds to Morpho. The remaining 60% stays instantly liquid for payments.',
                    badge: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
                    badgeText: 'Allocation Strategy',
                  },
                  {
                    time: 'Annualized',
                    title: 'Top Sleeping Money Candidate',
                    desc: 'If $10,000 sits idle for an average of 3 days per cycle, that\'s ~460 idle days per year × 5.6% APY → roughly $46 in automatic earnings. Zero user action required.',
                    badge: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-300',
                    badgeText: 'Yield Example',
                  },
                ].map((s, i) => (
                  <div key={i} className="bg-white dark:bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.badge}`}>{s.badgeText}</span>
                      <span className="text-xs text-gray-400 font-mono">{s.time}</span>
                    </div>
                    <p className="text-sm font-semibold text-gray-800 dark:text-gray-200 mb-1">{s.title}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-900 dark:bg-black rounded-xl p-5 my-6">
              <p className="text-xs font-bold text-indigo-400 mb-3">walits Agent + Morpho Automation Flow</p>
              <div className="space-y-1 text-xs font-mono">
                <p className="text-white">Receive $10,000 USDC (Payment in D-5)</p>
                <p className="text-gray-400">  → Agent: check payment schedule</p>
                <p className="text-gray-400">  → 5 days confirmed free → deposit 40% to Morpho</p>
                <p className="text-indigo-300">  → $4,000 × 5.6% / 365 × 5 = $3.07 auto-earned</p>
                <p className="text-white mt-2">Payment Day D-1</p>
                <p className="text-gray-400">  → Agent: instant Morpho withdrawal</p>
                <p className="text-emerald-300">  → $4,003.07 → merged with payment pool</p>
                <p className="text-gray-500 mt-2">// Zero user input. Sleeping money works automatically.</p>
              </div>
            </div>

            {/* S7 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · Morpho vs Aave vs Compound — Comparison Table</h2>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-white">
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider">Feature</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-indigo-300">Morpho</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-orange-300">Aave</th>
                    <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wider text-blue-300">Compound</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 dark:divide-gray-800">
                  {[
                    ['TVL', '$3B+', '$15B+', '$3B+'],
                    ['Lender APY (USDC)', '5.6%', '4.8%', '4.2%'],
                    ['Borrower APY (USDC)', '6.2%', '7.5%', '7.0%'],
                    ['Instant Withdrawal', 'Yes (within vault liquidity)', 'Yes', 'Yes'],
                    ['Permissionless Markets', 'Yes (Blue)', 'No (governance required)', 'No'],
                    ['Audits Completed', 'Yes', 'Yes', 'Yes'],
                    ['Supported Chains', 'ETH · Base · Polygon', 'ETH · multiple L2s', 'ETH · Base'],
                    ['P2P Matching', 'Core feature', 'None', 'None'],
                    ['Risk Isolation', 'Per-market isolation', 'Single pool', 'Single pool'],
                    ['Curator System', 'MetaMorpho', 'None', 'None'],
                  ].map(([label, morpho, aave, compound], i) => (
                    <tr key={i} className={i % 2 === 0 ? 'bg-white dark:bg-gray-950' : 'bg-gray-50 dark:bg-gray-900'}>
                      <td className="px-4 py-2.5 font-semibold text-xs text-gray-700 dark:text-gray-300">{label}</td>
                      <td className="px-4 py-2.5 text-xs text-indigo-600 dark:text-indigo-400 font-medium">{morpho}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{aave}</td>
                      <td className="px-4 py-2.5 text-xs text-gray-600 dark:text-gray-400">{compound}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-indigo-50 dark:bg-indigo-900/20 border border-indigo-200 dark:border-indigo-800 rounded-xl p-4 my-6">
              <p className="text-xs font-bold text-indigo-700 dark:text-indigo-400 mb-1">Key Takeaway</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Morpho's lower TVL compared to Aave isn't a weakness — it reflects thousands of permissionless markets distributed across different collateral types. At the MetaMorpho vault level, <strong>billions are already deployed</strong>, delivering better rates than Aave.
              </p>
            </div>

            {/* S8 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Risks — Invest With Eyes Open</h2>
            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Oracle Risk',
                  level: 'Important',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'Morpho Blue markets depend on external oracles. If Chainlink or another oracle delivers incorrect prices, healthy positions could be liquidated or bad positions could avoid liquidation. Choosing curator vaults that use reputable oracles is critical.',
                },
                {
                  title: 'Liquidation Mechanism Risk',
                  level: 'Structural',
                  lc: 'bg-orange-100 text-orange-800 dark:bg-orange-900/40 dark:text-orange-300',
                  desc: 'If collateral prices drop sharply, liquidators may not respond quickly enough. This is especially dangerous for markets using low-liquidity collateral tokens. MetaMorpho curators are designed to avoid such markets.',
                },
                {
                  title: 'Curator Risk',
                  level: 'Watch',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'Since users delegate market selection to curators rather than choosing directly, a curator error can result in losses. Choosing vaults run by vetted curators like Gauntlet and Block Analitica is essential.',
                },
                {
                  title: 'Smart Contract Risk',
                  level: 'Low (Audited)',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: 'Morpho Blue was intentionally designed with a minimal codebase to maximize auditability. Multiple independent audits have been completed and a bug bounty program is active. However, theoretical vulnerabilities exist in every smart contract.',
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

            {/* Conclusion EN */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">Not Trying to Beat Aave — Outperforming on Aave's Own Rails</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  Morpho isn't competing with Aave. It leverages Aave's liquidity and security while layering P2P matching on top, giving both sides better rates. The structure can never be worse than Aave — and when matched, it's better.
                </p>
                <p>
                  Morpho Blue and MetaMorpho take this further by combining <strong className="text-white">permissionless market creation with professional curation</strong>. Thousands of collateral combinations are possible, but users just deposit into a vetted vault.
                </p>
                <p>
                  <strong className="text-white">In walits, Morpho is the top candidate for sleeping money solutions.</strong> Instant withdrawal + 5.6% APY + proven security — few protocols in DeFi today satisfy all three criteria simultaneously.
                </p>
                <p className="text-gray-400 text-xs">
                  * APY figures vary with market conditions. Example numbers reflect specific moments in time. Always review official documentation and audit reports before investing.
                </p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
