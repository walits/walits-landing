'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function LidoEigenLayerDeepDivePage() {
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
        <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-900 via-cyan-900 to-slate-900">
          <Image src="/blog/lido.jpg" alt="Lido Finance + EigenLayer" fill className="object-cover" onError={() => {}} />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-6 left-6">
            <span className="text-xs font-bold uppercase tracking-wider bg-cyan-700/80 text-white px-3 py-1 rounded-full">
              {language === 'ko' ? 'DeFi 시리즈 12' : 'DeFi Series 12'}
            </span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-6 pb-24">
        {language === 'ko' ? (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi 시리즈 12 — Lido + EigenLayer: ETH 한 개로 수익을 두 번 쌓는 법</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">리퀴드 스테이킹 · stETH · 리스테이킹 · AVS · LRT · 수익률 스택</p>
            <p className="text-gray-400 text-xs font-mono mb-10">2026년 4월 6일 · 22분</p>

            {/* 수치 카드 */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
              {[
                { label: 'stETH TVL', value: '$20B+', sub: '2025년 기준' },
                { label: 'EigenLayer TVL', value: '$15B+', sub: '리스테이킹 총량' },
                { label: 'Lido 출시', value: '2020', sub: 'Ethereum 메인넷' },
                { label: 'EigenLayer 출시', value: '2023', sub: '리스테이킹 프로토콜' },
                { label: 'ETH 스테이킹 점유율', value: '30%', sub: 'Lido 기준' },
                { label: '수익률 스택', value: '5~12%', sub: 'DeFi 활용 시' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S01 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · ETH 스테이킹이란? — Merge 이후의 이더리움</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              2022년 9월, 이더리움은 역사적인 전환을 이뤄냈다. 전력을 대량 소비하는 작업증명(PoW)에서 지분증명(PoS)으로 이전한 것이다. 이 사건을 <strong>'더 머지(The Merge)'</strong>라고 부른다. 이후 이더리움 네트워크의 보안은 ETH를 락업한 검증자들이 담당하게 됐다.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              검증자로 참여하면 연 3~5%의 스테이킹 보상을 받는다. 블록 생성에 기여한 대가로 네트워크가 ETH를 발행해주는 방식이다. 그런데 일반 유저가 직접 검증자가 되려면 세 가지 높은 장벽이 있다.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  icon: '💰',
                  title: '32 ETH 필요',
                  desc: '검증자 1개당 정확히 32 ETH가 필요하다. 현재 시세 기준 약 $100,000 이상. 소액 투자자에게는 진입 자체가 불가능한 금액이다.',
                  color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10',
                },
                {
                  icon: '⚙️',
                  title: '기술적 복잡성',
                  desc: '24시간 가동되는 노드 서버 운영, 키 관리, 소프트웨어 업데이트 등 상당한 기술 역량이 필요하다. 노드가 다운되면 페널티도 부과된다.',
                  color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10',
                },
                {
                  icon: '🔒',
                  title: '유동성 락업',
                  desc: '스테이킹한 ETH는 언스테이킹 요청 후 대기 기간이 있다. 시장이 급변해도 즉시 대응하기 어렵다.',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">Lido가 이 문제를 해결하는 방법</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                소액도 예치 가능, 기술 지식 불필요, 예치 즉시 유동 토큰(stETH) 수령. Lido는 이더리움 스테이킹의 진입 장벽을 없애 <strong>누구나 ETH 보유만으로 스테이킹 수익을 받을 수 있게</strong> 만들었다.
              </p>
            </div>

            {/* S02 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Lido: 리퀴드 스테이킹의 작동 원리</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Lido의 핵심은 단순하다. ETH를 예치하면 stETH를 발행해준다. stETH는 스테이킹 증서이자 이자가 붙는 토큰이다. 그리고 이 stETH를 DeFi 생태계 전반에서 자유롭게 사용할 수 있다.
            </p>

            {/* stETH 플로우 */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Lido 작동 흐름</p>
              <div className="flex flex-col gap-2">
                {[
                  { step: '①', label: '유저가 ETH 예치', desc: '0.001 ETH부터 제한 없이 예치 가능', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
                  { step: '②', label: 'stETH 즉시 발행', desc: '예치한 ETH와 1:1 비율로 stETH 수령 (리베이스 토큰)', color: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800' },
                  { step: '③', label: 'Lido가 32 ETH 묶음 조성', desc: '여러 유저의 ETH를 모아 검증자 단위(32 ETH)로 묶어 운영', color: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800' },
                  { step: '④', label: '노드 운영자가 검증 수행', desc: 'Lido 직접 운영 아님 — 분산된 전문 노드 운영자 네트워크에 위임', color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' },
                  { step: '⑤', label: '스테이킹 보상 자동 복리', desc: '매일 stETH 잔고 리베이스 — 클레임 없이 토큰 수량 자동 증가', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' },
                ].map((item) => (
                  <div key={item.step} className={`flex gap-4 border rounded-xl p-4 ${item.color}`}>
                    <div className="text-xl font-black text-gray-400 dark:text-gray-500 w-8 shrink-0">{item.step}</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">{item.label}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* stETH vs wstETH */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">stETH vs wstETH — 어떻게 다른가?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 border-b border-blue-200 dark:border-blue-800 pb-2">stETH (리베이스 토큰)</p>
                  <ul className="space-y-2">
                    {[
                      '매일 잔고가 자동으로 늘어남',
                      '오늘 1 stETH → 1년 후 약 1.038 stETH',
                      '잔고 변동이 일부 DeFi와 충돌 가능',
                      'CEX 입금에는 wstETH가 더 적합',
                    ].map((pt, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 flex-shrink-0">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 border-b border-cyan-200 dark:border-cyan-800 pb-2">wstETH (고정 수량 래핑 토큰)</p>
                  <ul className="space-y-2">
                    {[
                      '토큰 수량은 고정, 대신 교환비율이 상승',
                      '오늘 1 wstETH → 1년 후 더 많은 ETH로 교환 가능',
                      'Aave, Uniswap 등 대부분 DeFi와 호환',
                      'stETH를 wstETH로 1:1 래핑/언래핑 언제든 가능',
                    ].map((pt, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-cyan-500 flex-shrink-0">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* S03 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · stETH가 어떻게 이자를 주나 — 내부 구조</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              stETH를 보유하는 것만으로 이자가 붙는다고 하면 "어디서 돈이 나오나?"라는 의문이 생긴다. 이더리움 프로토콜 자체가 스테이킹 보상을 발행하기 때문이다. 구조를 순서대로 살펴보자.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  num: '①',
                  title: 'Lido 컨트랙트가 32 ETH 단위로 검증자 배포',
                  desc: '유저들의 ETH가 모이면 Lido 스마트컨트랙트가 이를 32 ETH 묶음으로 분할해 이더리움 Deposit Contract에 전송한다. 이 시점부터 해당 ETH는 검증자로서 네트워크 보안에 참여한다.',
                  tag: '검증자 배포',
                  tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                },
                {
                  num: '②',
                  title: '블록 제안 보상 + 수수료 수입 발생',
                  desc: '검증자는 블록을 제안하고 검증할 때마다 이더리움 네트워크로부터 ETH 보상을 받는다. 여기에 MEV(최대 추출 가능 가치) 수익도 포함된다. 연간 기준 총 스테이킹 수익은 약 4~5% 수준이다.',
                  tag: '보상 발생',
                  tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                },
                {
                  num: '③',
                  title: 'Lido 컨트랙트가 보상 수취 후 분배',
                  desc: 'Lido는 전체 스테이킹 보상에서 10% 수수료를 제한다. 노드 운영자 5% + Lido DAO 5%. 나머지 90%가 stETH 보유자에게 돌아간다. 이것이 연 ~3.8% APY의 출처다.',
                  tag: '수수료 10%',
                  tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
                },
                {
                  num: '④',
                  title: 'stETH 리베이스 — 매일 잔고 자동 증가',
                  desc: 'Lido 오라클이 하루에 한 번 누적 보상을 집계해 stETH 컨트랙트에 전달한다. stETH 컨트랙트는 이 데이터를 바탕으로 모든 stETH 보유자의 잔고를 비례적으로 올린다. 유저는 아무것도 하지 않아도 잔고가 매일 조금씩 늘어난다.',
                  tag: '자동 복리',
                  tagColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
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

            <div className="bg-slate-900 rounded-2xl p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Lido 수수료 구조</p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex-1 min-w-[120px] bg-cyan-600 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-white">90%</p>
                  <p className="text-xs text-cyan-200 mt-1">stETH 보유자 수령</p>
                  <p className="text-xs text-cyan-300 font-mono">~3.8% APY</p>
                </div>
                <div className="flex-1 min-w-[100px] bg-slate-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-white">5%</p>
                  <p className="text-xs text-slate-300 mt-1">노드 운영자</p>
                </div>
                <div className="flex-1 min-w-[100px] bg-slate-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-white">5%</p>
                  <p className="text-xs text-slate-300 mt-1">Lido DAO</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">총 스테이킹 보상 ~4.2% 기준. 수수료 합산 10% 공제 후 유저 순수령 ~3.8%</p>
            </div>

            {/* S04 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · EigenLayer: 리스테이킹이란?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              EigenLayer는 2023년 등장한 혁신적인 개념이다. 핵심은 하나의 질문에서 출발한다. <strong>"이미 스테이킹된 ETH의 경제적 보안을 다른 프로토콜에도 재활용할 수 없을까?"</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              새로운 블록체인 프로토콜(오라클, 브릿지, DA 레이어 등)을 만들 때 가장 어려운 문제 중 하나는 보안이다. 이더리움처럼 수천억 달러의 ETH가 보증하는 보안을 새로 만들려면 엄청난 시간과 비용이 필요하다. EigenLayer는 이미 스테이킹된 ETH의 보안을 빌려쓰는 방법을 만들었다.
            </p>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">EigenLayer 한 줄 정의</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                이더리움 검증자(또는 stETH 보유자)가 자신의 스테이크를 <strong>AVS(Actively Validated Service)</strong>에도 동시에 약정해 추가 보상을 받는 "리스테이킹" 프로토콜.
              </p>
            </div>

            {/* AVS 예시 */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">AVS (Actively Validated Service) 예시</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: '오라클 네트워크', icon: '🔮', desc: '체인 외부 데이터를 안전하게 공급' },
                  { name: '크로스체인 브릿지', icon: '🌉', desc: '다른 체인 간 자산 이동 보안' },
                  { name: 'DA 레이어', icon: '💾', desc: '데이터 가용성 보장 (EigenDA 등)' },
                  { name: '롤업 시퀀서', icon: '⚡', desc: 'L2 트랜잭션 순서 결정 및 보안' },
                ].map((avs, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{avs.icon}</div>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">{avs.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{avs.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 리스테이킹 플로우 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">리스테이킹 작동 원리</p>
              <div className="space-y-3">
                {[
                  { arrow: '→', from: 'ETH / stETH 보유자', to: 'EigenLayer에 리스테이킹', note: '기존 스테이킹 보상은 그대로 유지' },
                  { arrow: '→', from: 'EigenLayer', to: 'AVS 프로토콜에 보안 제공', note: '검증자들이 AVS 규칙 준수 약정' },
                  { arrow: '→', from: 'AVS 프로토콜', to: '추가 보상 지급', note: 'AVS 토큰 또는 ETH로 보상' },
                  { arrow: '→', from: '규칙 위반 시', to: '슬래싱 패널티 발생', note: '리스테이킹된 ETH 일부 차감' },
                ].map((flow, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs">
                    <span className="w-32 text-right text-gray-500 dark:text-gray-400 shrink-0">{flow.from}</span>
                    <span className="text-cyan-500 font-bold">{flow.arrow}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 flex-1">{flow.to}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-right hidden md:block">{flow.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S05 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Lido stETH + EigenLayer 조합 전략</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              stETH와 EigenLayer를 조합하면 수익 레이어가 중첩된다. 이 전략의 핵심은 하나의 ETH에서 가능한 한 많은 수익 흐름을 만드는 것이다.
            </p>

            {/* 전략 스택 */}
            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">ETH 수익 극대화 전략 스택</p>
              <div className="space-y-2">
                {[
                  {
                    step: 'STEP 1',
                    title: 'ETH → stETH (Lido)',
                    yield: '+3.8%',
                    desc: 'ETH를 Lido에 예치해 stETH 수령. 기본 스테이킹 보상 시작.',
                    color: 'bg-blue-500',
                    bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                  },
                  {
                    step: 'STEP 2',
                    title: 'stETH → EigenLayer 리스테이킹',
                    yield: '+1~3%',
                    desc: 'stETH를 EigenLayer에 리스테이킹해 AVS 보상 추가. EigenLayer 포인트도 적립.',
                    color: 'bg-cyan-500',
                    bg: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800',
                  },
                  {
                    step: 'STEP 3',
                    title: 'LRT 수령 (ether.fi eETH / Renzo ezETH / Kelp rsETH)',
                    yield: '유동성 확보',
                    desc: 'LRT(Liquid Restaking Token)를 받아 리스테이킹 포지션을 유동화. DeFi에서 담보로 활용 가능.',
                    color: 'bg-teal-500',
                    bg: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',
                  },
                  {
                    step: 'STEP 4',
                    title: 'LRT → DeFi 담보 활용 (Aave / Morpho)',
                    yield: '+2~5%',
                    desc: 'LRT를 담보로 스테이블코인 대출 후 추가 전략 실행. 총 수익률 8~12% 가능.',
                    color: 'bg-emerald-500',
                    bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
                  },
                ].map((item, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${item.bg}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                      <span className="text-xs font-mono text-gray-400">{item.step}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white flex-1">{item.title}</span>
                      <span className={`text-xs font-bold px-2 py-0.5 rounded-full bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 shrink-0`}>{item.yield}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 ml-5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* LRT 프로토콜 비교 */}
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">주요 LRT(Liquid Restaking Token) 프로토콜</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'ether.fi', token: 'eETH', tvl: '$6B+', feature: '자동 복리 + EigenLayer 포인트', color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10' },
                  { name: 'Renzo', token: 'ezETH', tvl: '$3B+', feature: '다중 AVS 최적 배분', color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/10' },
                  { name: 'Kelp DAO', token: 'rsETH', tvl: '$1B+', feature: '복수 LST 지원 (stETH, cbETH 등)', color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10' },
                ].map((lrt, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${lrt.color}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{lrt.name}</p>
                      <span className="text-xs font-mono bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded-full font-bold">{lrt.token}</span>
                    </div>
                    <p className="text-lg font-black text-cyan-600 dark:text-cyan-400 mb-1">{lrt.tvl}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{lrt.feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S06 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · 수익률 스택 시각화</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              같은 ETH를 어떻게 활용하느냐에 따라 수익률이 크게 달라진다. 단순 보유부터 DeFi 풀 활용까지 5단계로 비교해보자.
            </p>

            <div className="bg-slate-900 rounded-2xl p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">ETH 수익률 비교</p>
              <div className="space-y-4">
                {[
                  { label: 'ETH 단순 보유', apy: '0%', bar: 'w-0', color: 'bg-gray-600', textColor: 'text-gray-400' },
                  { label: 'ETH 직접 스테이킹', apy: '~4.2%', bar: 'w-[35%]', color: 'bg-blue-600', textColor: 'text-blue-400' },
                  { label: 'Lido stETH', apy: '~3.8%', bar: 'w-[32%]', color: 'bg-cyan-500', textColor: 'text-cyan-400' },
                  { label: 'stETH + EigenLayer 리스테이킹', apy: '~5~7%', bar: 'w-[58%]', color: 'bg-teal-500', textColor: 'text-teal-400' },
                  { label: 'LRT + DeFi 담보 활용', apy: '~8~12%', bar: 'w-[100%]', color: 'bg-emerald-500', textColor: 'text-emerald-400' },
                ].map((row, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300">{row.label}</span>
                      <span className={`font-bold ${row.textColor}`}>{row.apy}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${row.color} ${row.bar} transition-all`} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">* 수익률은 시장 조건에 따라 변동됩니다. 레버리지 전략은 청산 리스크를 동반합니다.</p>
            </div>

            {/* S07 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · walits에서의 활용</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              walits는 이 복잡한 수익률 스택을 버튼 하나로 실행할 수 있게 만드는 것을 목표로 한다. ETH를 보유한 사용자가 여러 프로토콜을 직접 방문하고 복잡한 트랜잭션을 순서대로 실행할 필요 없이, walits가 최적 경로를 자동으로 찾아 실행한다.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'ETH → stETH 자동 전환 옵션',
                  desc: 'ETH를 보유 중인 유저가 walits에 연결하면, 자동으로 Lido stETH 전환 옵션을 제안한다. 기존 ETH 보유 대비 연 3.8%의 추가 수익을 아무 것도 하지 않아도 받을 수 있다.',
                  icon: '⚡',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                },
                {
                  title: '"ETH 굴리기" 프리셋',
                  desc: 'Lido → EigenLayer LRT(ether.fi 등) → Aave 담보 활용으로 이어지는 3단계 전략을 원클릭 프리셋으로 제공. 예상 APY, 리스크 레벨, 필요 가스비를 미리 보여주고 유저가 확인 후 실행한다.',
                  icon: '🎯',
                  color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/10',
                },
                {
                  title: 'walits 로드맵: Phase 3 ETH 스테이킹 통합',
                  desc: 'Phase 1(스테이블코인 전략), Phase 2(DeFi 대출 최적화)에 이어 Phase 3에서 ETH 스테이킹 + 리스테이킹 통합이 예정되어 있다. Lido, EigenLayer, 주요 LRT 프로토콜과의 파트너십 논의 중이다.',
                  icon: '🗺️',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* S08 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · 리스크 — 알고 써야 하는 것들</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              높은 수익률에는 그에 상응하는 리스크가 따른다. 리스테이킹 전략은 복수의 프로토콜 리스크가 중첩되는 구조이므로 각각을 명확히 이해해야 한다.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: '슬래싱 리스크',
                  level: '중간',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: '검증자가 이중 서명 등 프로토콜 규칙을 위반하면 스테이킹된 ETH 일부가 강제로 차감(슬래싱)된다. Lido는 노드 운영자 분산화로 이 리스크를 줄이지만 0은 아니다.',
                },
                {
                  title: '디페깅 리스크',
                  level: '중간',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'stETH는 ETH와 1:1을 목표로 하지만 시장 패닉 시 일시적으로 가격이 괴리될 수 있다. 2022년 크립토 하락장에서 stETH가 ETH 대비 5~7% 디스카운트에 거래된 사례가 있다.',
                },
                {
                  title: 'EigenLayer 스마트컨트랙트 리스크',
                  level: '높음',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'EigenLayer는 상대적으로 신생 프로토콜이다. 감사를 완료했지만 복잡한 리스테이킹 메커니즘에서 미발견 취약점이 존재할 수 있다. 스마트컨트랙트 버그는 자산 손실로 이어진다.',
                },
                {
                  title: 'AVS 리스크',
                  level: '높음',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: '리스테이킹한 AVS가 잘못 설계되거나 악의적인 경우, 해당 AVS의 슬래싱 조건이 발동될 수 있다. 어떤 AVS에 리스테이킹하느냐가 매우 중요하다.',
                },
                {
                  title: '유동성 리스크',
                  level: '낮음~중간',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: '직접 언스테이킹 시 대기 기간이 있다(수일~수주). stETH/wstETH를 DeFi에서 팔면 즉시 출금 가능하지만, 유동성이 낮은 시장에서는 슬리피지가 발생할 수 있다.',
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

            {/* S09 */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · 리퀴드 스테이킹 프로토콜 비교</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Lido 이외에도 여러 리퀴드 스테이킹 프로토콜이 존재한다. 각자의 트레이드오프가 있으므로 목적에 맞게 선택해야 한다.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 text-gray-700 dark:text-gray-300 font-semibold rounded-tl-lg">프로토콜</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">토큰</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">분산화</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">APY</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">유동성</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">최소 예치</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold rounded-tr-lg">EigenLayer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { protocol: 'Lido', token: 'stETH', decen: '★★★☆', apy: '~3.8%', liq: '매우 높음', min: '제한 없음', eigen: '지원', eigColor: 'text-green-600 dark:text-green-400', rowColor: 'bg-cyan-50 dark:bg-cyan-900/10' },
                    { protocol: 'Rocket Pool', token: 'rETH', decen: '★★★★', apy: '~3.6%', liq: '높음', min: '제한 없음', eigen: '부분 지원', eigColor: 'text-yellow-600 dark:text-yellow-400', rowColor: '' },
                    { protocol: 'Frax', token: 'sfrxETH', decen: '★★☆☆', apy: '~4.5%', liq: '중간', min: '제한 없음', eigen: '미지원', eigColor: 'text-red-600 dark:text-red-400', rowColor: '' },
                    { protocol: 'Coinbase', token: 'cbETH', decen: '★☆☆☆', apy: '~3.2%', liq: '높음', min: '제한 없음', eigen: '미지원', eigColor: 'text-red-600 dark:text-red-400', rowColor: '' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${row.rowColor}`}>
                      <td className="p-3 font-bold text-gray-900 dark:text-white">{row.protocol}</td>
                      <td className="p-3 text-center font-mono text-cyan-600 dark:text-cyan-400">{row.token}</td>
                      <td className="p-3 text-center text-gray-600 dark:text-gray-400">{row.decen}</td>
                      <td className="p-3 text-center font-bold text-gray-800 dark:text-gray-200">{row.apy}</td>
                      <td className="p-3 text-center text-gray-600 dark:text-gray-400">{row.liq}</td>
                      <td className="p-3 text-center text-gray-600 dark:text-gray-400">{row.min}</td>
                      <td className={`p-3 text-center font-semibold ${row.eigColor}`}>{row.eigen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-4">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1">분산화 vs 수익률 트레이드오프</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Rocket Pool은 누구나 노드 운영자가 될 수 있어 가장 분산화되어 있지만 APY가 약간 낮다. Frax는 높은 APY를 제공하지만 더 중앙화된 구조다. EigenLayer 리스테이킹을 활용하려면 현재 Lido stETH가 가장 폭넓게 지원된다.
              </p>
            </div>

            {/* S10 결론 */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">결론</p>
              <h3 className="text-2xl font-bold text-white mb-4">ETH를 보유하는 것만으로 연 5~7% 수익을 자동으로 쌓는 시대</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  더 머지 이후 이더리움은 단순한 가치 저장 수단을 넘어 <strong className="text-white">수익 창출 자산</strong>이 됐다. Lido는 이 수익을 누구나 소액으로 접근할 수 있게 했고, EigenLayer는 같은 ETH에서 두 번째 수익 레이어를 만들었다.
                </p>
                <p>
                  stETH와 LRT의 등장으로 스테이킹 수익을 받으면서도 DeFi에서 담보로 활용하는 것이 가능해졌다. 한 개의 ETH가 동시에 스테이킹 보상, AVS 보상, 대출 담보 역할을 수행하는 것이다.
                </p>
                <p>
                  물론 레이어가 중첩될수록 리스크도 중첩된다. 슬래싱, 디페깅, 스마트컨트랙트 취약점 등을 충분히 이해하고 자신의 리스크 허용 범위 안에서 전략을 구성하는 것이 중요하다.
                </p>
                <p>
                  <strong className="text-white">walits의 목표는 이 복잡한 전략을 단순하고 안전하게 실행할 수 있는 인터페이스를 제공하는 것이다.</strong> ETH를 보유하고 있다면, 그냥 두는 것보다 훨씬 더 잘할 수 있다.
                </p>
                <p className="text-gray-400 text-xs">
                  * APY는 시장 상황에 따라 변동됩니다. 리스테이킹 전략은 복수의 리스크를 수반합니다. 실제 투자 전 공식 문서와 감사 보고서를 직접 확인하세요.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <h1 className="text-4xl font-bold mb-3 leading-tight">DeFi Series 12 — Lido + EigenLayer: How to Stack Yield Twice from One ETH</h1>
            <p className="text-gray-500 dark:text-gray-400 text-sm font-mono mb-2">Liquid Staking · stETH · Restaking · AVS · LRT · Yield Stack</p>
            <p className="text-gray-400 text-xs font-mono mb-10">April 6, 2026 · 22 min read</p>

            {/* Stats EN */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 my-8">
              {[
                { label: 'stETH TVL', value: '$20B+', sub: 'As of 2025' },
                { label: 'EigenLayer TVL', value: '$15B+', sub: 'Total restaked' },
                { label: 'Lido Launched', value: '2020', sub: 'Ethereum mainnet' },
                { label: 'EigenLayer Launched', value: '2023', sub: 'Restaking protocol' },
                { label: 'ETH Staking Share', value: '30%', sub: 'Lido market share' },
                { label: 'Yield Stack', value: '5~12%', sub: 'With DeFi leverage' },
              ].map((s, i) => (
                <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                  <p className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">{s.value}</p>
                  <p className="text-xs font-semibold text-gray-700 dark:text-gray-300 mt-1">{s.label}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{s.sub}</p>
                </div>
              ))}
            </div>

            {/* S01 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">01 · What Is ETH Staking? — Ethereum After the Merge</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              In September 2022, Ethereum accomplished a historic transition — moving from energy-intensive Proof of Work to Proof of Stake. This event is known as <strong>The Merge</strong>. From that point on, the security of the Ethereum network has been maintained by validators who lock up ETH.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Validators earn 3–5% annual staking rewards — ETH issued by the network in return for contributing to block production. But there are three steep barriers to becoming a validator directly.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
              {[
                {
                  icon: '💰',
                  title: '32 ETH Required',
                  desc: 'Each validator slot requires exactly 32 ETH — currently worth over $100,000. Completely out of reach for most retail investors.',
                  color: 'border-red-200 dark:border-red-800 bg-red-50 dark:bg-red-900/10',
                },
                {
                  icon: '⚙️',
                  title: 'Technical Complexity',
                  desc: 'Running a 24/7 node server, managing keys, keeping software updated — significant technical skills required. Downtime means penalties.',
                  color: 'border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/10',
                },
                {
                  icon: '🔒',
                  title: 'Liquidity Lock-up',
                  desc: 'Staked ETH has a withdrawal waiting period after unstaking requests. Hard to react quickly when markets move sharply.',
                  color: 'border-orange-200 dark:border-orange-800 bg-orange-50 dark:bg-orange-900/10',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-4 ${item.color}`}>
                  <div className="text-2xl mb-2">{item.icon}</div>
                  <p className="text-sm font-bold text-gray-800 dark:text-gray-200 mb-1">{item.title}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">How Lido Solves This</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                Any amount accepted, no technical knowledge required, receive liquid token (stETH) immediately upon deposit. Lido eliminated the barriers to ETH staking so <strong>anyone can earn staking rewards simply by holding ETH</strong>.
              </p>
            </div>

            {/* S02 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">02 · Lido: How Liquid Staking Works</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Lido's core mechanic is elegantly simple. Deposit ETH, receive stETH. stETH is both a staking receipt and an interest-bearing token — and you can use it freely throughout the DeFi ecosystem.
            </p>

            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">Lido Flow</p>
              <div className="flex flex-col gap-2">
                {[
                  { step: '①', label: 'User deposits ETH', desc: 'No minimum — from 0.001 ETH with no upper limit', color: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800' },
                  { step: '②', label: 'stETH issued immediately', desc: 'Receive stETH at 1:1 ratio to deposited ETH (rebasing token)', color: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800' },
                  { step: '③', label: 'Lido assembles 32 ETH batches', desc: 'Pools ETH from multiple users and assembles validator units of 32 ETH', color: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800' },
                  { step: '④', label: 'Node operators run validation', desc: 'Not operated by Lido directly — delegated to a distributed network of professional node operators', color: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800' },
                  { step: '⑤', label: 'Staking rewards auto-compound', desc: 'stETH balance rebases daily — balance increases automatically without any claiming', color: 'bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800' },
                ].map((item) => (
                  <div key={item.step} className={`flex gap-4 border rounded-xl p-4 ${item.color}`}>
                    <div className="text-xl font-black text-gray-400 dark:text-gray-500 w-8 shrink-0">{item.step}</div>
                    <div>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">{item.label}</p>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">stETH vs wstETH — What's the Difference?</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <p className="text-sm font-bold text-blue-600 dark:text-blue-400 border-b border-blue-200 dark:border-blue-800 pb-2">stETH (Rebasing Token)</p>
                  <ul className="space-y-2">
                    {[
                      'Balance increases automatically every day',
                      'Today: 1 stETH → In 1 year: ~1.038 stETH',
                      'Balance changes may conflict with some DeFi protocols',
                      'wstETH is better suited for CEX deposits',
                    ].map((pt, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-blue-500 flex-shrink-0">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-3">
                  <p className="text-sm font-bold text-cyan-600 dark:text-cyan-400 border-b border-cyan-200 dark:border-cyan-800 pb-2">wstETH (Fixed-Supply Wrapped Token)</p>
                  <ul className="space-y-2">
                    {[
                      'Token quantity is fixed; exchange ratio increases instead',
                      'Today: 1 wstETH → Redeems for more ETH in 1 year',
                      'Compatible with most DeFi (Aave, Uniswap, etc.)',
                      'Wrap/unwrap between stETH and wstETH anytime 1:1',
                    ].map((pt, i) => (
                      <li key={i} className="flex gap-2 text-xs text-gray-700 dark:text-gray-300">
                        <span className="text-cyan-500 flex-shrink-0">▸</span>{pt}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* S03 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">03 · How stETH Pays Interest — Internal Architecture</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              When interest accrues to stETH just by holding it, a natural question arises: where does the money come from? It comes from the Ethereum protocol itself issuing staking rewards. Let's trace the flow step by step.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  num: '①',
                  title: 'Lido contract deploys validators in 32 ETH batches',
                  desc: 'As user ETH accumulates, the Lido smart contract splits it into 32 ETH chunks and sends them to the Ethereum Deposit Contract. From this point, the ETH participates in network security as a validator.',
                  tag: 'Validator Deployment',
                  tagColor: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300',
                },
                {
                  num: '②',
                  title: 'Block proposal rewards + fee income generated',
                  desc: 'Validators receive ETH rewards from the Ethereum network each time they propose and attest blocks. MEV (Maximal Extractable Value) income is also included. Total annualized staking yield is approximately 4–5%.',
                  tag: 'Rewards Generated',
                  tagColor: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300',
                },
                {
                  num: '③',
                  title: 'Lido contract collects rewards and distributes',
                  desc: 'Lido deducts a 10% fee from total staking rewards: 5% to node operators, 5% to Lido DAO. The remaining 90% goes to stETH holders. This is the source of the ~3.8% APY.',
                  tag: '10% Fee',
                  tagColor: 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300',
                },
                {
                  num: '④',
                  title: 'stETH rebase — balance increases automatically every day',
                  desc: 'The Lido oracle aggregates accumulated rewards once per day and delivers the data to the stETH contract. The stETH contract then proportionally increases the balance of all stETH holders. Users see their balance grow a little every day without doing anything.',
                  tag: 'Auto-Compound',
                  tagColor: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/30 dark:text-cyan-300',
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

            <div className="bg-slate-900 rounded-2xl p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">Lido Fee Structure</p>
              <div className="flex items-center gap-3 flex-wrap">
                <div className="flex-1 min-w-[120px] bg-cyan-600 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-white">90%</p>
                  <p className="text-xs text-cyan-200 mt-1">stETH Holders Receive</p>
                  <p className="text-xs text-cyan-300 font-mono">~3.8% APY</p>
                </div>
                <div className="flex-1 min-w-[100px] bg-slate-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-white">5%</p>
                  <p className="text-xs text-slate-300 mt-1">Node Operators</p>
                </div>
                <div className="flex-1 min-w-[100px] bg-slate-700 rounded-xl p-4 text-center">
                  <p className="text-2xl font-black text-white">5%</p>
                  <p className="text-xs text-slate-300 mt-1">Lido DAO</p>
                </div>
              </div>
              <p className="text-xs text-slate-400 mt-3">Based on ~4.2% total staking rewards. After 10% combined fee, user net yield ~3.8%</p>
            </div>

            {/* S04 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">04 · EigenLayer: What Is Restaking?</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              EigenLayer emerged in 2023 as a groundbreaking concept. It starts with one simple question: <strong>"Can the economic security of already-staked ETH be recycled for other protocols?"</strong>
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When building a new blockchain protocol — an oracle, a bridge, a DA layer — one of the hardest problems is security. Replicating the hundreds of billions in ETH-backed security that Ethereum has takes enormous time and capital. EigenLayer created a way to borrow the security of already-staked ETH.
            </p>

            <div className="bg-cyan-50 dark:bg-cyan-900/20 border border-cyan-200 dark:border-cyan-800 rounded-xl p-5 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-3">EigenLayer — One-Line Definition</p>
              <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
                A "restaking" protocol where Ethereum validators (or stETH holders) simultaneously commit their stake to <strong>AVS (Actively Validated Services)</strong> to earn additional rewards.
              </p>
            </div>

            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4">AVS (Actively Validated Service) Examples</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { name: 'Oracle Networks', icon: '🔮', desc: 'Securely supply off-chain data to chains' },
                  { name: 'Cross-chain Bridges', icon: '🌉', desc: 'Secure asset movement across chains' },
                  { name: 'DA Layers', icon: '💾', desc: 'Data availability guarantees (e.g. EigenDA)' },
                  { name: 'Rollup Sequencers', icon: '⚡', desc: 'L2 transaction ordering and security' },
                ].map((avs, i) => (
                  <div key={i} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 text-center">
                    <div className="text-2xl mb-2">{avs.icon}</div>
                    <p className="text-xs font-bold text-gray-800 dark:text-gray-200 mb-1">{avs.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">{avs.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-5">Restaking Flow</p>
              <div className="space-y-3">
                {[
                  { arrow: '→', from: 'ETH / stETH holder', to: 'Restakes in EigenLayer', note: 'Existing staking rewards remain intact' },
                  { arrow: '→', from: 'EigenLayer', to: 'Provides security to AVS protocols', note: 'Validators commit to follow AVS rules' },
                  { arrow: '→', from: 'AVS Protocol', to: 'Pays additional rewards', note: 'Rewards in AVS tokens or ETH' },
                  { arrow: '→', from: 'Rule violation', to: 'Slashing penalty occurs', note: 'Portion of restaked ETH deducted' },
                ].map((flow, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs">
                    <span className="w-32 text-right text-gray-500 dark:text-gray-400 shrink-0">{flow.from}</span>
                    <span className="text-cyan-500 font-bold">{flow.arrow}</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200 flex-1">{flow.to}</span>
                    <span className="text-gray-400 dark:text-gray-500 text-right hidden md:block">{flow.note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* S05 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">05 · Combining Lido stETH + EigenLayer</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Combining stETH and EigenLayer stacks multiple yield layers. The core of this strategy is creating as many income streams as possible from a single ETH.
            </p>

            <div className="my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-5">ETH Yield Maximization Strategy Stack</p>
              <div className="space-y-2">
                {[
                  {
                    step: 'STEP 1',
                    title: 'ETH → stETH (Lido)',
                    yield: '+3.8%',
                    desc: 'Deposit ETH into Lido, receive stETH. Base staking rewards begin immediately.',
                    color: 'bg-blue-500',
                    bg: 'bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800',
                  },
                  {
                    step: 'STEP 2',
                    title: 'stETH → EigenLayer Restaking',
                    yield: '+1~3%',
                    desc: 'Restake stETH in EigenLayer to add AVS rewards. EigenLayer points also accumulate.',
                    color: 'bg-cyan-500',
                    bg: 'bg-cyan-50 dark:bg-cyan-900/20 border-cyan-200 dark:border-cyan-800',
                  },
                  {
                    step: 'STEP 3',
                    title: 'Receive LRT (ether.fi eETH / Renzo ezETH / Kelp rsETH)',
                    yield: 'Liquidity unlocked',
                    desc: 'Receive LRT (Liquid Restaking Token) to liquidize the restaking position. Usable as collateral in DeFi.',
                    color: 'bg-teal-500',
                    bg: 'bg-teal-50 dark:bg-teal-900/20 border-teal-200 dark:border-teal-800',
                  },
                  {
                    step: 'STEP 4',
                    title: 'LRT → DeFi Collateral (Aave / Morpho)',
                    yield: '+2~5%',
                    desc: 'Use LRT as collateral to borrow stablecoins and execute additional strategies. Total yield of 8–12% becomes achievable.',
                    color: 'bg-emerald-500',
                    bg: 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800',
                  },
                ].map((item, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${item.bg}`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-2 h-2 rounded-full shrink-0 ${item.color}`} />
                      <span className="text-xs font-mono text-gray-400">{item.step}</span>
                      <span className="text-sm font-bold text-gray-900 dark:text-white flex-1">{item.title}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 shrink-0">{item.yield}</span>
                    </div>
                    <p className="text-xs text-gray-600 dark:text-gray-400 mt-2 ml-5 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 my-6">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-4">Major LRT (Liquid Restaking Token) Protocols</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { name: 'ether.fi', token: 'eETH', tvl: '$6B+', feature: 'Auto-compound + EigenLayer points', color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10' },
                  { name: 'Renzo', token: 'ezETH', tvl: '$3B+', feature: 'Optimized allocation across multiple AVS', color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/10' },
                  { name: 'Kelp DAO', token: 'rsETH', tvl: '$1B+', feature: 'Supports multiple LSTs (stETH, cbETH, etc.)', color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10' },
                ].map((lrt, i) => (
                  <div key={i} className={`border rounded-xl p-4 ${lrt.color}`}>
                    <div className="flex items-center justify-between mb-2">
                      <p className="text-sm font-bold text-gray-900 dark:text-white">{lrt.name}</p>
                      <span className="text-xs font-mono bg-white dark:bg-gray-900 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 rounded-full font-bold">{lrt.token}</span>
                    </div>
                    <p className="text-lg font-black text-cyan-600 dark:text-cyan-400 mb-1">{lrt.tvl}</p>
                    <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{lrt.feature}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* S06 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">06 · Yield Stack Visualization</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The same ETH yields very different returns depending on how it's deployed. Here's a five-level comparison from simple holding to DeFi pool utilization.
            </p>

            <div className="bg-slate-900 rounded-2xl p-6 my-8">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-6">ETH Yield Comparison</p>
              <div className="space-y-4">
                {[
                  { label: 'ETH — simply held', apy: '0%', bar: 'w-0', color: 'bg-gray-600', textColor: 'text-gray-400' },
                  { label: 'ETH — direct staking', apy: '~4.2%', bar: 'w-[35%]', color: 'bg-blue-600', textColor: 'text-blue-400' },
                  { label: 'Lido stETH', apy: '~3.8%', bar: 'w-[32%]', color: 'bg-cyan-500', textColor: 'text-cyan-400' },
                  { label: 'stETH + EigenLayer restaking', apy: '~5–7%', bar: 'w-[58%]', color: 'bg-teal-500', textColor: 'text-teal-400' },
                  { label: 'LRT + DeFi collateral leverage', apy: '~8–12%', bar: 'w-[100%]', color: 'bg-emerald-500', textColor: 'text-emerald-400' },
                ].map((row, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-slate-300">{row.label}</span>
                      <span className={`font-bold ${row.textColor}`}>{row.apy}</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${row.color} ${row.bar} transition-all`} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-4">* Yields vary with market conditions. Leverage strategies carry liquidation risk.</p>
            </div>

            {/* S07 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">07 · How walits Uses This</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              walits aims to make this complex yield stack executable with a single button. ETH holders won't need to visit multiple protocols or manually execute transactions in sequence — walits finds the optimal path and executes it automatically.
            </p>

            <div className="space-y-4 my-6">
              {[
                {
                  title: 'ETH → stETH Auto-Conversion Option',
                  desc: 'When an ETH-holding user connects to walits, the app automatically suggests a Lido stETH conversion. This unlocks an additional ~3.8% annual yield compared to simply holding ETH, with zero manual steps.',
                  icon: '⚡',
                  color: 'border-blue-200 dark:border-blue-800 bg-blue-50 dark:bg-blue-900/10',
                },
                {
                  title: '"Roll Your ETH" Preset',
                  desc: 'A three-step strategy — Lido → EigenLayer LRT (ether.fi etc.) → Aave collateral — available as a one-click preset. walits shows expected APY, risk level, and estimated gas before the user confirms.',
                  icon: '🎯',
                  color: 'border-cyan-200 dark:border-cyan-800 bg-cyan-50 dark:bg-cyan-900/10',
                },
                {
                  title: 'walits Roadmap: ETH Staking Integration in Phase 3',
                  desc: 'Following Phase 1 (stablecoin strategies) and Phase 2 (DeFi lending optimization), Phase 3 will integrate ETH staking and restaking. Partnership discussions with Lido, EigenLayer, and major LRT protocols are underway.',
                  icon: '🗺️',
                  color: 'border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/10',
                },
              ].map((item, i) => (
                <div key={i} className={`border rounded-xl p-5 ${item.color}`}>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-xl">{item.icon}</span>
                    <p className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</p>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* S08 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">08 · Risks — What You Need to Know</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Higher yields come with commensurate risk. Restaking strategies layer multiple protocol risks on top of each other — each one must be clearly understood.
            </p>

            <div className="space-y-3 my-6">
              {[
                {
                  title: 'Slashing Risk',
                  level: 'Medium',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'If a validator violates protocol rules (e.g. double-signing), a portion of staked ETH is forcibly deducted. Lido mitigates this through node operator diversification, but the risk is never zero.',
                },
                {
                  title: 'Depeg Risk',
                  level: 'Medium',
                  lc: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/40 dark:text-yellow-300',
                  desc: 'stETH targets a 1:1 peg with ETH but can temporarily diverge during market panics. In the 2022 crypto bear market, stETH traded at a 5–7% discount to ETH.',
                },
                {
                  title: 'EigenLayer Smart Contract Risk',
                  level: 'High',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'EigenLayer is a relatively new protocol. Audits are complete, but undiscovered vulnerabilities may exist in the complex restaking mechanism. Smart contract bugs can result in loss of funds.',
                },
                {
                  title: 'AVS Risk',
                  level: 'High',
                  lc: 'bg-red-100 text-red-800 dark:bg-red-900/40 dark:text-red-300',
                  desc: 'If a restaked AVS is poorly designed or malicious, its slashing conditions may trigger. Selecting which AVS to restake into is critically important.',
                },
                {
                  title: 'Liquidity Risk',
                  level: 'Low–Medium',
                  lc: 'bg-green-100 text-green-800 dark:bg-green-900/40 dark:text-green-300',
                  desc: 'Direct unstaking involves a waiting period (days to weeks). Selling stETH/wstETH on DeFi allows immediate exit, but slippage may occur in thin markets.',
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

            {/* S09 EN */}
            <h2 className="text-3xl font-bold mt-12 mb-6">09 · Liquid Staking Protocol Comparison</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              Multiple liquid staking protocols exist beyond Lido. Each has its own tradeoffs — choose based on your priorities.
            </p>

            <div className="overflow-x-auto my-6">
              <table className="w-full text-xs border-collapse">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <th className="text-left p-3 text-gray-700 dark:text-gray-300 font-semibold rounded-tl-lg">Protocol</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">Token</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">Decentralization</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">APY</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">Liquidity</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold">Min Deposit</th>
                    <th className="text-center p-3 text-gray-700 dark:text-gray-300 font-semibold rounded-tr-lg">EigenLayer</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { protocol: 'Lido', token: 'stETH', decen: '★★★☆', apy: '~3.8%', liq: 'Very High', min: 'None', eigen: 'Supported', eigColor: 'text-green-600 dark:text-green-400', rowColor: 'bg-cyan-50 dark:bg-cyan-900/10' },
                    { protocol: 'Rocket Pool', token: 'rETH', decen: '★★★★', apy: '~3.6%', liq: 'High', min: 'None', eigen: 'Partial', eigColor: 'text-yellow-600 dark:text-yellow-400', rowColor: '' },
                    { protocol: 'Frax', token: 'sfrxETH', decen: '★★☆☆', apy: '~4.5%', liq: 'Medium', min: 'None', eigen: 'Not supported', eigColor: 'text-red-600 dark:text-red-400', rowColor: '' },
                    { protocol: 'Coinbase', token: 'cbETH', decen: '★☆☆☆', apy: '~3.2%', liq: 'High', min: 'None', eigen: 'Not supported', eigColor: 'text-red-600 dark:text-red-400', rowColor: '' },
                  ].map((row, i) => (
                    <tr key={i} className={`border-t border-gray-100 dark:border-gray-800 ${row.rowColor}`}>
                      <td className="p-3 font-bold text-gray-900 dark:text-white">{row.protocol}</td>
                      <td className="p-3 text-center font-mono text-cyan-600 dark:text-cyan-400">{row.token}</td>
                      <td className="p-3 text-center text-gray-600 dark:text-gray-400">{row.decen}</td>
                      <td className="p-3 text-center font-bold text-gray-800 dark:text-gray-200">{row.apy}</td>
                      <td className="p-3 text-center text-gray-600 dark:text-gray-400">{row.liq}</td>
                      <td className="p-3 text-center text-gray-600 dark:text-gray-400">{row.min}</td>
                      <td className={`p-3 text-center font-semibold ${row.eigColor}`}>{row.eigen}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-4 my-4">
              <p className="text-xs font-bold text-blue-700 dark:text-blue-400 mb-1">Decentralization vs Yield Tradeoff</p>
              <p className="text-xs text-gray-700 dark:text-gray-300 leading-relaxed">
                Rocket Pool is the most decentralized — anyone can become a node operator — but APY is slightly lower. Frax offers higher APY with a more centralized structure. For EigenLayer restaking, Lido stETH currently has the broadest support across the ecosystem.
              </p>
            </div>

            {/* S10 EN — Conclusion */}
            <div className="bg-gray-900 dark:bg-black rounded-2xl p-8 my-10">
              <p className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4">Conclusion</p>
              <h3 className="text-2xl font-bold text-white mb-4">The era of automatically stacking 5–7% annual yield just by holding ETH</h3>
              <div className="space-y-3 text-sm text-gray-300 leading-relaxed">
                <p>
                  After The Merge, Ethereum became more than a store of value — it became a <strong className="text-white">yield-generating asset</strong>. Lido made that yield accessible to anyone at any size. EigenLayer created a second yield layer from the same ETH.
                </p>
                <p>
                  The emergence of stETH and LRTs made it possible to earn staking rewards while simultaneously using the same position as collateral in DeFi. One ETH can now simultaneously deliver staking rewards, AVS rewards, and serve as lending collateral.
                </p>
                <p>
                  Of course, stacking layers also stacks risks. Understanding slashing, depegging, and smart contract vulnerabilities thoroughly, and staying within your risk tolerance when constructing a strategy, is essential.
                </p>
                <p>
                  <strong className="text-white">walits' goal is to provide an interface that makes this complex strategy simple and safe to execute.</strong> If you're holding ETH, you can do a lot better than just letting it sit.
                </p>
                <p className="text-gray-400 text-xs">
                  * APY figures vary with market conditions. Restaking strategies carry multiple layers of risk. Always review official documentation and audit reports before investing.
                </p>
              </div>
            </div>
          </>
        )}
      </article>
    </div>
  );
}
